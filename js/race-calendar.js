/* =====================================================================
   RACE-CALENDAR.JS — shared by calendar.html (browser) and
   scripts/build-calendars.js (GitHub Actions, Node).

   Reads the race tables of calendar.html (columns: #, Data, Circuito,
   Piloto), matches pilots against SITE_DATA.drivers and builds iCalendar
   (.ics) feeds that Google Calendar / Apple Calendar can subscribe to.
   ===================================================================== */
(function (root) {
  const YEAR = 2026;
  const MONTH_IDX = { JAN:0,FEV:1,MAR:2,ABR:3,MAI:4,JUN:5,JUL:6,AGO:7,SET:8,OUT:9,NOV:10,DEZ:11 };
  const TEAM_TOKENS = ['rtp', 'all', 'todos'];
  const SITE = 'racingteamproject.eu';
  const FEED_PATH = 'calendar/';

  // "10/OUT" -> [date]; "20–23 OUT" -> every day of the range; anything else -> []
  function parseDates(str) {
    str = String(str).trim().toUpperCase();
    let m = str.match(/^(\d{1,2})\/([A-Z]{3})$/);
    if (m && MONTH_IDX[m[2]] !== undefined) return [new Date(YEAR, MONTH_IDX[m[2]], +m[1])];
    m = str.match(/^(\d{1,2})\s*[–-]\s*(\d{1,2})\s*([A-Z]{3})$/);
    if (m && MONTH_IDX[m[3]] !== undefined) {
      const out = [];
      for (let d = +m[1]; d <= +m[2]; d++) out.push(new Date(YEAR, MONTH_IDX[m[3]], d));
      return out;
    }
    return [];
  }

  function pilotTokens(text) {
    return String(text).split(/[·,]/).map(s => s.trim().toLowerCase()).filter(Boolean);
  }
  function isTeamEvent(tokens) {
    return tokens.some(t => TEAM_TOKENS.includes(t));
  }
  // A driver races an event if one of the listed names is their PSN, GT7 name or name.
  function driverMatches(ev, driver) {
    if (!driver || ev.team) return true;
    const keys = [driver.role, driver.gtName, driver.name].filter(Boolean).map(s => s.trim().toLowerCase());
    return ev.tokens.some(t => keys.includes(t));
  }

  function slugify(s) {
    return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function feedFile(driver) {
    return 'rtp-' + (driver ? slugify(driver.name) : 'todos') + '.ics';
  }
  function feedUrl(driver, scheme) {
    return (scheme || 'https') + '://' + SITE + '/' + FEED_PATH + feedFile(driver);
  }

  function makeEvent(comp, cells) {
    const tokens = pilotTokens(cells[3]);
    return parseDates(cells[1]).map(date => ({
      date, comp,
      round: cells[0], circuit: cells[2], pilots: cells[3],
      tokens, team: isTeamEvent(tokens)
    }));
  }

  /* ── HTML parsing without a DOM (Node build). Only the race tables of
     the Corridas tab and the archive are read; the practice table
     (#cal-treinos) is skipped. ── */
  const ENTITIES = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', middot:'·', mdash:'—', ndash:'–' };
  function decode(s) {
    return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
      if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
      return ENTITIES[e.toLowerCase()] !== undefined ? ENTITIES[e.toLowerCase()] : m;
    });
  }
  const text = html => decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();

  function parseCalendarHTML(html) {
    const start = html.indexOf('id="tab-corridas"');
    const end = html.indexOf('<!-- /#tab-arquivo -->');
    const section = html.slice(start, end > start ? end : undefined);
    const events = [];
    section.split(/<div class="cal-block"/).slice(1).forEach(chunk => {
      if (chunk.includes('id="cal-treinos"')) return;
      const title = chunk.match(/<h2 class="cal-comp-title">([\s\S]*?)<\/h2>/);
      const comp = title ? text(title[1]) : '';
      (chunk.match(/<tbody[\s\S]*?<\/tbody>/g) || []).forEach(tbody => {
        (tbody.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || []).forEach(tr => {
          if (/class="[^"]*cal-empty/.test(tr)) return;
          const cells = (tr.match(/<td[^>]*>[\s\S]*?<\/td>/g) || []).map(text);
          if (cells.length >= 4) events.push(...makeEvent(comp, cells));
        });
      });
    });
    return events.sort((a, b) => a.date - b.date);
  }

  /* ── iCalendar output (RFC 5545): all-day events, CRLF line endings,
     lines folded at 75 octets. ── */
  const pad = n => String(n).padStart(2, '0');
  const ymd = d => d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
  const icsText = s => String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
  function fold(line) {
    const out = [];
    let cur = '', bytes = 0;
    for (const ch of line) {
      const cp = ch.codePointAt(0);
      const b = cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
      if (bytes + b > (out.length ? 74 : 75)) { out.push(cur); cur = ''; bytes = 0; }
      cur += ch; bytes += b;
    }
    out.push(cur);
    return out.join('\r\n ');
  }

  function buildICS(events, calName, now) {
    const stamp = (now || new Date()).toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
    const lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//RTP Racing Team Project//Calendario//PT',
      'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'X-WR-CALNAME:' + icsText(calName), 'X-WR-TIMEZONE:Europe/Lisbon',
      'REFRESH-INTERVAL;VALUE=DURATION:PT6H', 'X-PUBLISHED-TTL:PT6H'
    ];
    events.forEach(ev => {
      const next = new Date(ev.date.getFullYear(), ev.date.getMonth(), ev.date.getDate() + 1);
      const pilots = ev.team ? 'Equipa RTP' : ev.pilots;
      lines.push(
        'BEGIN:VEVENT',
        'UID:' + slugify(ev.comp + '-' + ev.round + '-' + ev.circuit) + '-' + ymd(ev.date) + '@' + SITE,
        'DTSTAMP:' + stamp,
        'DTSTART;VALUE=DATE:' + ymd(ev.date),
        'DTEND;VALUE=DATE:' + ymd(next),
        'SUMMARY:' + icsText('🏁 ' + ev.comp + ' — ' + ev.round),
        'LOCATION:' + icsText(ev.circuit + ' (Gran Turismo 7)'),
        'DESCRIPTION:' + icsText(ev.comp + ' · ' + ev.round + '\nCircuito: ' + ev.circuit + '\nPilotos: ' + pilots + '\n\nhttps://' + SITE + '/calendar.html'),
        'URL:https://' + SITE + '/calendar.html',
        'TRANSP:TRANSPARENT',
        'END:VEVENT'
      );
    });
    lines.push('END:VCALENDAR');
    return lines.map(fold).join('\r\n') + '\r\n';
  }

  function calendarName(driver) {
    return 'RTP Racing' + (driver ? ' — ' + driver.name : '');
  }

  const RaceCalendar = {
    parseDates, pilotTokens, isTeamEvent, driverMatches, slugify,
    feedFile, feedUrl, makeEvent, parseCalendarHTML, buildICS, calendarName
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = RaceCalendar;
  else root.RaceCalendar = RaceCalendar;
})(this);
