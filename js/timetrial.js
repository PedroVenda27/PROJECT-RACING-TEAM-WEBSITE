/* =====================================================================
   TIMETRIAL.JS — 1KM Time-Trial Real Life
   Ranks SITE_DATA.timeTrial.entries by time, shows the current podium,
   the full table and a countdown to the end of the challenge.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("timetrial-content");
  const tt = SITE_DATA.timeTrial;
  if (!root || !tt) return;

  const drivers = {};
  (SITE_DATA.drivers || []).forEach(d => { drivers[d.name] = d; });

  /* "m:ss" / "m:ss.cc" / "ss.cc" → seconds */
  const toSeconds = t => t.split(":").reduce((acc, part) => acc * 60 + parseFloat(part), 0);
  const fmtGap = s => "+" + (s >= 60 ? Math.floor(s / 60) + ":" + (s % 60).toFixed(2).padStart(5, "0") : s.toFixed(2) + "s");

  const withTime = tt.entries.filter(e => e.time).map(e => ({ ...e, secs: toSeconds(e.time) }))
    .sort((a, b) => a.secs - b.secs);
  const withoutTime = tt.entries.filter(e => !e.time);
  const best = withTime.length ? withTime[0].secs : 0;

  const end = new Date(tt.endDate);
  const finished = Date.now() > end.getTime();

  const avatar = name => {
    const d = drivers[name];
    return d && d.image
      ? `<img class="st-avatar" src="${d.image}" alt="${name}" loading="lazy">`
      : `<div class="st-avatar-placeholder">${name.charAt(0)}</div>`;
  };

  /* ── Countdown / status ── */
  const statusHTML = `
    <div class="tt-status">
      <div class="race-stat">
        <span class="race-stat-label">${finished ? "Desafio terminado" : "Termina em"}</span>
        <span class="race-stat-value" id="tt-countdown">${finished ? "31/12/2026" : ""}</span>
      </div>
      <div class="race-stat">
        <span class="race-stat-label">Tempos registados</span>
        <span class="race-stat-value">${withTime.length} / ${tt.entries.length}</span>
      </div>
      <div class="race-stat">
        <span class="race-stat-label">Melhor tempo</span>
        <span class="race-stat-value race-stat-purple">${withTime.length ? withTime[0].time : "—"}</span>
      </div>
    </div>`;

  /* ── Podium (2nd · 1st · 3rd) ── */
  const slot = i => {
    const e = withTime[i];
    return `
      <div class="podium-card podium-pos-${i + 1} tt-podium-card">
        <div class="tt-podium-photo">${e && drivers[e.driver] && drivers[e.driver].image
          ? `<img src="${drivers[e.driver].image}" alt="${e.driver}" loading="lazy">`
          : `<span>?</span>`}</div>
        <div class="podium-pos">${i + 1}</div>
        <div class="podium-name">${e ? e.driver : "Por definir"}</div>
        <div class="podium-time">${e ? e.time : "—"}</div>
      </div>`;
  };
  const podiumHTML = `
    <h3 class="race-results-title">${finished ? "Pódio final" : "Pódio atual"}</h3>
    <div class="podium-row tt-podium">${slot(1)}${slot(0)}${slot(2)}</div>`;

  /* ── Full table ── */
  const rows = withTime.map((e, i) => `
    <tr class="${i < 3 ? "row-pos-" + (i + 1) : ""}">
      <td class="cell-pos">${i + 1}</td>
      <td class="cell-name"><div class="st-driver-wrap">${avatar(e.driver)}<span>${e.driver}</span></div></td>
      <td class="cell-gap${i === 0 ? " cell-bestlap" : ""}">${e.time}</td>
      <td class="cell-gap">${i === 0 ? "—" : fmtGap(e.secs - best)}</td>
      <td class="cell-gap">${e.date || ""}</td>
    </tr>`).concat(withoutTime.map(e => `
    <tr>
      <td class="cell-pos">—</td>
      <td class="cell-name"><div class="st-driver-wrap">${avatar(e.driver)}<span>${e.driver}</span></div></td>
      <td class="cell-dns">Sem tempo</td>
      <td class="cell-gap"></td>
      <td class="cell-gap"></td>
    </tr>`)).join("");

  root.innerHTML = statusHTML + podiumHTML + `
    <h3 class="race-results-title">Classificação</h3>
    <div class="standings-table-wrap" style="margin-bottom:3rem;">
      <div class="standings-table-scroll">
        <table class="standings-table">
          <thead><tr>
            <th class="th-pos">POS</th><th class="th-name">Piloto</th>
            <th>Tempo</th><th>Diferença</th><th>Data</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;

  /* ── Live countdown ── */
  const cd = document.getElementById("tt-countdown");
  if (!finished && cd) {
    const tick = () => {
      const ms = end.getTime() - Date.now();
      if (ms <= 0) { cd.textContent = "Terminado"; return; }
      const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24,
            m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
      cd.textContent = `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
    };
    tick();
    setInterval(tick, 1000);
  }
});
