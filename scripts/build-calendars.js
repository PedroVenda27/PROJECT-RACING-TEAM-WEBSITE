/* Generates calendar/rtp-todos.ics and one calendar/rtp-<piloto>.ics per
   driver from the race tables in calendar.html. Runs in the GitHub Pages
   workflow before upload, so the subscribable feeds are always in sync
   with the site. Usage: node scripts/build-calendars.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const RaceCalendar = require('../js/race-calendar.js');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'calendar.html'), 'utf8');

// data.js declares `const SITE_DATA`; expose it from the sandbox.
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8') + '\nthis.SITE_DATA = SITE_DATA;', sandbox);
const drivers = sandbox.SITE_DATA.drivers || [];

const events = RaceCalendar.parseCalendarHTML(html);
if (!events.length) throw new Error('No races found in calendar.html — refusing to publish empty feeds.');

const outDir = path.join(root, 'calendar');
fs.mkdirSync(outDir, { recursive: true });

function write(driver) {
  const list = events.filter(ev => RaceCalendar.driverMatches(ev, driver));
  const file = RaceCalendar.feedFile(driver);
  fs.writeFileSync(path.join(outDir, file), RaceCalendar.buildICS(list, RaceCalendar.calendarName(driver)));
  console.log(`${file}: ${list.length} corridas`);
}

write(null);
drivers.forEach(write);
