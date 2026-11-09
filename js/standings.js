/* =====================================================================
   STANDINGS.JS — Championship standings page
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const contentEl = document.getElementById("standings-content");

  if (!contentEl || !SITE_DATA.standings) return;

  // Build driver image lookup from SITE_DATA.drivers
  const driverImgMap = {};
  if (SITE_DATA.drivers) {
    SITE_DATA.drivers.forEach(d => {
      driverImgMap[d.name.toLowerCase()] = d.image || "";
    });
  }

  function getDriverImg(name, driverRef) {
    const key = (driverRef || name).toLowerCase();
    const img = driverImgMap[key] || "";
    if (!img) return `<div class="st-avatar-placeholder">${name.charAt(0)}</div>`;
    return `<img class="st-avatar" src="${img}" alt="${name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="st-avatar-placeholder" style="display:none;">${name.charAt(0)}</div>`;
  }

  /* Team tag chip next to a driver's name — only for entries that carry an
     explicit `tag` (currently just the Liga Endurance). */
  function teamTag(d) {
    return d.tag ? ` <span class="st-team-tag">${d.tag}</span>` : "";
  }

  /* ── Position-change helpers (+/- column) ──
     A round counts as "completed" once at least one driver scored a
     non-zero value in it; rounds still at 0 for everyone are treated
     as not yet raced. */
  function getLastCompletedRoundIndex(drivers) {
    const numRounds = drivers[0] ? drivers[0].rounds.length : 0;
    let last = -1;
    for (let i = 0; i < numRounds; i++) {
      if (drivers.some(d => (d.rounds[i] || 0) !== 0)) last = i;
    }
    return last;
  }

  function computeRoundPositions(drivers, uptoIdx) {
    const scored = drivers.map(d => ({
      name: d.name,
      sum: d.rounds.slice(0, uptoIdx + 1).reduce((a, v) => a + (v || 0), 0)
    }));
    scored.sort((a, b) => b.sum - a.sum);
    const posMap = {};
    scored.forEach((sc, i) => { posMap[sc.name] = i + 1; });
    return posMap;
  }

  function renderStanding(s) {
    const logo = s.logo ? `<img src="${s.logo}" alt="${s.label}" class="cal-comp-logo" />` : "";
    const headerHTML = `
      <div class="cal-block" id="standings-${s.competition.toLowerCase()}" style="margin-bottom:1.5rem;">
        <div class="cal-block-header">
          ${logo}
          <div>
            <h2 class="cal-comp-title">${s.title || s.label}</h2>
            ${s.subtitle ? `<p class="cal-comp-sub">${s.subtitle}</p>` : ""}
          </div>
        </div>
      </div>
    `;

    const roundHeaders = s.roundLabels.map((r, i) => {
      const flag = s.roundFlags && s.roundFlags[i]
        ? `<img src="https://flagcdn.com/w20/${s.roundFlags[i]}.png" alt="${r}" style="width:20px;height:14px;border-radius:2px;object-fit:cover;display:inline-block;vertical-align:middle;margin-bottom:3px;"><br>`
        : "";
      return `<th class="th-round">${flag}${r}</th>`;
    }).join("");

    const lastIdx = getLastCompletedRoundIndex(s.drivers);
    const currPosMap = lastIdx >= 0 ? computeRoundPositions(s.drivers, lastIdx) : null;
    const prevPosMap = lastIdx > 0 ? computeRoundPositions(s.drivers, lastIdx - 1) : null;

    const rows = s.drivers.map((d, i) => {
      const pos = d.pos || i + 1;
      let deltaHTML = `<span class="delta-none">–</span>`;
      if (prevPosMap && currPosMap) {
        const delta = prevPosMap[d.name] - currPosMap[d.name];
        if (delta > 0) deltaHTML = `<span class="delta-up">▲ ${delta}</span>`;
        else if (delta < 0) deltaHTML = `<span class="delta-down">▼ ${Math.abs(delta)}</span>`;
      }
      const nullLabel = s.nullLabel || "DNS";
      const roundCells = d.rounds.map(v => `<td class="${v === null ? "cell-dns" : v === 0 ? "cell-zero" : "cell-round"}">${v === null ? nullLabel : v}</td>`).join("");
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}${d.ourDriver ? " row-pitbox" : ""}">
          <td class="cell-pos">${pos}</td>
          <td class="cell-delta">${deltaHTML}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${getDriverImg(d.name, d.driverRef)}
              <span>${d.name}${teamTag(d)}</span>
            </div>
          </td>
          ${roundCells}
          <td class="cell-total">${d.total}</td>
        </tr>
      `;
    }).join("");

    // competitions with s.teams get Pilotos / Equipas buttons over one table
    const viewTabs = s.teams ? `
      <div class="race-subtabs" data-comp="${s.competition}" style="margin-bottom:1rem;">
        <button class="race-subtab st-view-tab active" data-view="drivers">Pilotos</button>
        <button class="race-subtab st-view-tab" data-view="teams">Equipas</button>
      </div>` : "";
    const teamsPane = s.teams ? `<div class="st-view-pane" data-view="teams" hidden>${renderTeams(s, true)}</div>` : "";

    return headerHTML + viewTabs + `
      <div class="st-view-pane" data-view="drivers">
      <div class="standings-table-wrap" style="margin-bottom:1.5rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="th-pos">POS</th>
                <th class="th-delta">+/-</th>
                <th class="th-name">Piloto</th>
                ${roundHeaders}
                <th class="th-total">Total</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      </div>${teamsPane}
      ${renderRaceResultsSection(s)}
    `;
  }

  /* ── Race-by-race results (Resultados das Corridas) ──
     Keeps the selected round/race per competition so tab clicks can
     re-render just that block instead of the whole page. */
  const raceResultsState = {};

  // a round can hold placeholder sessions (e.g. qualifying still to come): open on the first one with results
  function firstSessionWithResults(round) {
    const i = (round && round.sessions || []).findIndex(x => x.results && x.results.length);
    return i < 0 ? 0 : i;
  }

  function renderRaceResultsSection(s) {
    if (!s.raceResults || !s.raceResults.length) return "";
    const compId = s.competition;
    if (!raceResultsState[compId]) {
      // open on the latest round that already has results (later ones may be placeholders)
      const done = s.raceResults.map(r => r.sessions.some(x => x.results && x.results.length)).lastIndexOf(true);
      const roundIdx = done >= 0 ? done : s.raceResults.length - 1;
      raceResultsState[compId] = { roundIdx, raceIdx: firstSessionWithResults(s.raceResults[roundIdx]) };
    }
    const roundTabs = s.raceResults.map((r, i) => `
      <button class="standings-tab race-round-tab${i === raceResultsState[compId].roundIdx ? " active" : ""}" data-round-idx="${i}">${r.label || "R" + r.round}</button>
    `).join("");

    return `
      <div class="race-results-block" data-comp="${compId}">
        <h3 class="race-results-title">Resultados das Corridas</h3>
        <div class="standings-tabs race-round-tabs" data-comp="${compId}">${roundTabs}</div>
        <div class="race-results-content" id="race-results-content-${compId}">${renderRaceResultsContent(s)}</div>
      </div>
    `;
  }

  /* Shared podium + results table for one session (qualifying or race).
     Used both by round-based championships (mxcup) and room-based
     WRT events (Top Split), which share the exact same session shape. */
  function renderSessionBlock(session, legendHTML) {
    const isQuali = session.type === "qualifying";
    /* Not every race session runs on a points system (e.g. WRT's
       regroup-by-lap-time splits) — fall back to showing the best
       lap instead of a meaningless "Pts" column. */
    const hasPoints = !isQuali && session.results.some(r => r.points !== undefined);
    const showBestLapCol = isQuali || !hasPoints;

    const podiumStatsHTML = isQuali ? "" : `
      <div class="race-stats-row">
        <div class="race-stat"><span class="race-stat-label">Duração</span><span class="race-stat-value">${session.duration || "—"}</span></div>
        <div class="race-stat"><span class="race-stat-label">Volta Mais Rápida</span><span class="race-stat-value race-stat-purple">${session.fastestLapTime || "—"}</span></div>
      </div>
      <div class="podium-row">${session.results.slice(0, 3).map(r => `
        <div class="podium-card podium-pos-${r.pos}">
          <div class="podium-pos">${r.pos}</div>
          <div class="podium-name">${r.name}</div>
          <div class="podium-time">${r.pos === 1 ? r.time : r.gap}</div>
        </div>
      `).join("")}</div>
    `;

    const rows = session.results.map(r => `
      <tr class="${r.pos <= 3 ? "row-pos-" + r.pos : ""}${r.ourDriver ? " row-pitbox" : ""}">
        <td class="cell-pos">${r.pos}</td>
        <td class="cell-name">
          <div class="st-driver-wrap">
            ${getDriverImg(r.name, r.driverRef)}
            <span>${r.name}${teamTag(r)}</span>
            ${r.pole ? '<span class="race-badge badge-pole" title="Pole Position">P</span>' : ""}
            ${r.fastestLap ? '<span class="race-badge badge-fl" title="Volta Mais Rápida">VR</span>' : ""}
          </div>
        </td>
        <td class="cell-gap">${isQuali ? (r.gap || "—") : (r.pos === 1 ? (r.time || "") : (r.gap || ""))}</td>
        <td class="cell-pen">${r.penalty || "—"}</td>
        ${showBestLapCol
          ? `<td class="cell-gap${r.fastestLap ? " cell-bestlap" : ""}">${r.bestLap || ""}</td>`
          : `<td class="cell-total">${r.points}</td>`
        }
      </tr>
    `).join("");

    return `
      ${podiumStatsHTML}
      <div class="standings-table-wrap" style="margin-bottom:1rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="th-pos">POS</th>
                <th class="th-name">Piloto</th>
                <th>Tempo / Gap</th>
                <th>Pen.</th>
                <th class="${showBestLapCol ? "" : "th-total"}">${showBestLapCol ? "Melhor Volta" : "Pts"}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <div class="standings-legend race-legend">
        ${legendHTML || `<span class="race-badge badge-pole">P</span> Pole Position (+1 ponto) &nbsp;·&nbsp;
        <span class="race-badge badge-fl">VR</span> Volta Mais Rápida (+1 ponto, apenas Top 10)`}
      </div>
    `;
  }

  function renderRaceResultsContent(s) {
    const compId = s.competition;
    const state = raceResultsState[compId];
    const round = s.raceResults[state.roundIdx];
    if (!round) return "";
    if (state.raceIdx >= round.sessions.length) state.raceIdx = 0;
    const session = round.sessions[state.raceIdx];
    const hasResults = session.results && session.results.length > 0;

    const subTabs = round.sessions.map((sess, i) => `
      <button class="race-subtab${i === state.raceIdx ? " active" : ""}" data-race-idx="${i}">${sess.label}</button>
    `).join("");

    const infoBarHTML = `
      <div class="race-info-bar">
        <div><span class="race-info-label">${round.label || "Ronda " + round.round}</span>${round.date ? " · " + round.date : ""}${round.track ? " · " + round.track : ""}</div>
        ${round.car ? `<div class="race-info-car">${round.car}</div>` : ""}
      </div>
      <div class="race-subtabs" data-comp="${compId}">${subTabs}</div>
    `;

    if (!hasResults) {
      return infoBarHTML + `<div class="race-coming-soon">Brevemente</div>`;
    }

    return infoBarHTML + renderSessionBlock(session, s.raceLegend);
  }

  function refreshRaceResults(compId) {
    const s = SITE_DATA.standings.find(x => x.competition === compId);
    if (!s) return;
    const container = document.getElementById(`race-results-content-${compId}`);
    if (container) container.innerHTML = renderRaceResultsContent(s);
    document.querySelectorAll(`.race-round-tabs[data-comp="${compId}"] .race-round-tab`).forEach((btn, i) => {
      btn.classList.toggle("active", i === raceResultsState[compId].roundIdx);
    });
  }

  function renderTeams(s, noHeader) {
    const logo = s.logo ? `<img src="${s.logo}" alt="${s.label}" class="cal-comp-logo" />` : "";
    const headerHTML = noHeader ? "" : `
      <div class="cal-block" id="standings-${s.competition.toLowerCase()}" style="margin-bottom:1.5rem;">
        <div class="cal-block-header">
          ${logo}
          <div>
            <h2 class="cal-comp-title">${s.title || s.label}</h2>
            ${s.subtitle ? `<p class="cal-comp-sub">${s.subtitle}</p>` : ""}
          </div>
        </div>
      </div>
    `;

    // optional points columns (rounds + total) when the competition has them
    const withPts = !!s.roundLabels && s.teams.some(t => t.total !== undefined);
    const rows = s.teams.map((team, i) => {
      const pos = i + 1;
      const isPitbox = team.name.toUpperCase().includes("RTP");
      const logoHTML = team.logo
        ? `<img src="${team.logo}" alt="${team.name}" class="st-avatar" style="border-radius:4px;object-position:center;">`
        : `<div class="st-avatar-placeholder">${team.name.charAt(0)}</div>`;
      const driversHTML = team.drivers && team.drivers.length
        ? team.drivers.join(", ")
        : "";
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}${isPitbox ? " row-pitbox" : ""}">
          <td class="cell-pos">${pos}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">${logoHTML}<span>${team.name}</span></div>
          </td>
          <td class="cell-name" style="font-size:0.85em;opacity:0.85;">${driversHTML}</td>
          ${withPts ? (team.rounds || []).map(v => `<td class="${v === null ? "cell-dns" : v === 0 ? "cell-zero" : "cell-round"}">${v === null ? "—" : v}</td>`).join("") + `<td class="cell-total">${team.total}</td>` : ""}
        </tr>
      `;
    }).join("");

    return headerHTML + `
      <div class="standings-table-wrap" style="margin-bottom:3rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="th-pos">POS</th>
                <th class="th-name">Equipa</th>
                <th class="th-name">Pilotos</th>
                ${withPts ? s.roundLabels.map(r => `<th class="th-round">${r}</th>`).join("") + '<th class="th-total">Total</th>' : ""}
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  /* ── External competitions (drivers from other teams; no round-by-round
     data available to us, just a periodic overall standings snapshot) ── */
  /* External one-off race events (e.g. WRT Events) keep the selected
     event per competition, same pattern as raceResultsState above. */
  const externalEventState = {};
  /* Stage selection within a "stages" event, keyed by "compId:eventIdx". */
  const wrtStageState = {};
  /* Room/session selection within a stage, keyed by "compId:eventIdx:stageIdx"
     (or "compId:eventIdx" for older room-only events without stages). */
  const wrtRoomState = {};

  function renderExternalStandingRows(s, drivers, isRace, showCar) {
    return drivers.map((d, i) => {
      const pos = i + 1;
      const carCell = showCar ? `<td class="cell-car">${d.car || "—"}</td>` : "";
      const timeCell = isRace ? `<td class="cell-gap">${pos === 1 ? (d.time || "") : (d.gap || "")}</td>` : "";
      const penCell = isRace ? `<td class="cell-pen">${d.penalty || "—"}</td>` : "";
      const lastCell = isRace
        ? `<td class="cell-gap${d.fastestLap ? " cell-bestlap" : ""}">${d.bestLap || ""}</td>`
        : `<td class="cell-total">${d.points}</td>`;
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}${d.ourDriver ? " row-pitbox" : ""}">
          <td class="cell-pos">${pos}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${getDriverImg(d.name, d.driverRef)}
              <span>${d.name}${teamTag(d)}</span>
              ${isRace && d.fastestLap ? '<span class="race-badge badge-fl" title="Volta Mais Rápida">VR</span>' : ""}
            </div>
          </td>
          ${carCell}${timeCell}${penCell}${lastCell}
        </tr>
      `;
    }).join("");
  }

  /* ── Multi-class championship (e.g. Liga Endurance GR1 + GR3): one
     overall table plus one per class, switched with tabs. Drivers are
     listed in overall order; class positions follow that order. ── */
  const classState = {};

  /* Overall table: a driver who raced in both classes (e.g. GR1 in R1 and
     GR3 in R2) appears once, with points/wins/podiums added up and both
     classes and cars listed (most points first). */
  function mergeClasses(drivers) {
    const byDriver = new Map();
    for (const d of [...drivers].sort((a, b) => b.points - a.points)) {
      const id = `${d.tag}|${d.driverRef || d.name}`;
      const m = byDriver.get(id);
      if (!m) { byDriver.set(id, { ...d }); continue; }
      m.points += d.points; m.wins += d.wins; m.podiums += d.podiums;
      if (!m.cls.split(" / ").includes(d.cls)) m.cls += ` / ${d.cls}`;
      if (d.car && !m.car.split(" / ").includes(d.car)) m.car += ` / ${d.car}`;
    }
    return [...byDriver.values()].sort((a, b) => b.points - a.points || b.wins - a.wins);
  }

  function renderClassStandings(s) {
    const compId = s.competition;
    const cls = classState[compId] || "all";
    const tabs = [["all", "Geral"], ...s.classes.map(c => [c, c]), ["teams", s.finalPhase ? "Equipas Fase A" : "Equipas"], ...(s.finalPhase ? [["final", "Fase Final"]] : [])];
    const tabsHtml = `
      <div class="race-subtabs" data-comp="${compId}" style="margin-bottom:1rem;">
        ${tabs.map(([k, label]) => `<button class="race-subtab ext-class-tab${k === cls ? " active" : ""}" data-cls="${k}">${label}</button>`).join("")}
      </div>`;
    if (cls === "teams") return tabsHtml + renderTeamStandings(s);
    if (cls === "final") return tabsHtml + renderFinalPhase(s);
    const list = cls === "all" ? mergeClasses(s.drivers) : s.drivers.filter(d => d.cls === cls);
    const rows = list.map((d, i) => {
      const pos = i + 1;
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}${d.ourDriver ? " row-pitbox" : ""}">
          <td class="cell-pos">${pos}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${getDriverImg(d.name, d.driverRef)}
              <span class="st-class-driver">
                <span>${d.name}${d.tag ? ` <span class="st-team-tag">${d.tag}</span>` : ""}</span>
                <small>${d.number ? `#${d.number} · ` : ""}${d.cls}</small>
              </span>
            </div>
          </td>
          <td class="cell-car">${d.car}</td>
          <td class="cell-car">${d.team}</td>
          <td class="cell-round">${d.wins}</td>
          <td class="cell-round">${d.podiums}</td>
          <td class="cell-total">${d.points}</td>
        </tr>`;
    }).join("");
    return tabsHtml + `
      <div class="standings-table-wrap" style="margin-bottom:3rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead><tr>
              <th class="th-pos">POS</th><th class="th-name">Piloto</th><th class="th-name">Carro</th><th class="th-name">Equipa</th>
              <th class="th-round">Vit.</th><th class="th-round">Pódios</th><th class="th-total">Pontos</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>${cls === "all" ? "" : renderClassRounds(s, cls)}`;
  }

  /* Teams championship: sum of each team's drivers (grouped by team tag),
     so it updates automatically with the driver standings. Logos come from
     s.teamLogos[tag]; teams without one show their tag as a badge. */
  function renderTeamStandings(s) {
    const teams = {};
    s.drivers.forEach(d => {
      const key = d.tag || d.team;
      const t = teams[key] || (teams[key] = { name: d.team, tag: d.tag, drivers: new Set(), wins: 0, points: 0, ours: false });
      t.drivers.add(d.driverRef || d.name); t.wins += d.wins; t.points += d.points;
      if (d.team.length > t.name.length) t.name = d.team;
      if (d.ourDriver) t.ours = true;
    });
    // official point adjustments per team (e.g. -20 for not fielding both drivers)
    for (const [tag, adj] of Object.entries(s.teamAdjust || {})) {
      const t = Object.values(teams).find(x => x.tag === tag);
      if (t) { t.points += adj.points; t.note = adj.note; }
    }
    const list = Object.values(teams).sort((a, b) => b.points - a.points || b.wins - a.wins);
    // one column per round (R1, R2…): the team's points in that round, "—" if not raced yet
    const rounds = (s.rounds || []).map(r => r.short);
    const perRound = s.teamRounds || {};
    const roundHeaders = rounds.map(r => `<th class="th-round">${r}</th>`).join("");
    const roundCells = t => rounds.map(r => {
      const v = perRound[r] && perRound[r][t.tag];
      return v === undefined ? `<td class="cell-dns">—</td>` : `<td class="${v === 0 ? "cell-zero" : "cell-round"}">${v}</td>`;
    }).join("");
    const logos = s.teamLogos || {};
    const qualified = new Set(s.finalPhase ? s.finalPhase.teams.map(t => t.tag) : []);
    const rows = list.map((t, i) => {
      const pos = i + 1;
      const logo = logos[t.tag]
        ? `<img class="st-team-logo" src="${encodeURI(logos[t.tag])}" alt="${t.name}" loading="lazy" />`
        : `<span class="st-team-logo st-team-logo-fallback">${t.tag || t.name.charAt(0)}</span>`;
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}${t.ours ? " row-pitbox" : ""}">
          <td class="cell-pos">${String(pos).padStart(2, "0")}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${logo}
              <span class="st-class-driver">
                <span>${t.name}</span>
                <small>[${t.tag}]${t.note ? ` · ${t.note}` : ""}${qualified.has(t.tag) ? ' <span class="st-qualified">Fase Final</span>' : ""}</small>
              </span>
            </div>
          </td>
          <td class="cell-round">${t.drivers.size}</td>
          <td class="cell-round">${t.wins}</td>
          ${roundCells(t)}
          <td class="cell-total">${t.points}</td>
        </tr>`;
    }).join("");
    return `
      <div class="standings-table-wrap" style="margin-bottom:3rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead><tr>
              <th class="th-pos">POS</th><th class="th-name">Equipa</th>
              <th class="th-round">Pilotos</th><th class="th-round">Vit.</th>${roundHeaders}<th class="th-total">Total</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  /* Final phase: teams qualified from both rooms (Sala A + Sala B), with
     their group-phase record; logos from s.teamLogos like the Equipas tab. */
  function renderFinalPhase(s) {
    const fp = s.finalPhase, logos = s.teamLogos || {};
    const ours = new Set(s.drivers.filter(d => d.ourDriver).map(d => d.tag));
    const sessions = fp.sessions || [];
    const races = sessions.filter(x => x.key !== "qualy");
    const qualy = sessions.find(x => x.key === "qualy");
    // team points split by race and class, fastest laps per race, pole; wins = class wins (tie-break)
    const CLS = ["GR1", "GR3"];
    const tally = {};
    fp.teams.forEach(t => { tally[t.tag] = { cells: races.map(() => CLS.map(() => 0)), fl: races.map(() => 0), pole: 0, wins: 0 }; });
    races.forEach((r, ri) => CLS.forEach((c, ci) => (r[c] || []).forEach((d, i) => {
      const t = tally[d.team]; if (!t) return;
      if (!d.nt) t.cells[ri][ci] += fp.points[i] || 0;
      if (d.fl) t.fl[ri] += fp.fastestLap;
      if (i === 0 && !d.nt) t.wins++;
    })));
    if (qualy) CLS.forEach(c => { const p = (qualy[c] || [])[0]; if (p && tally[p.team]) tally[p.team].pole += fp.pole; });
    const sum = a => a.reduce((x, v) => x + v, 0);
    const list = fp.teams.map(t => {
      const x = tally[t.tag];
      return { ...t, ...x, points: sum(x.cells.flat()) + sum(x.fl) + x.pole };
    }).sort((a, b) => b.points - a.points || b.wins - a.wins);
    const short = r => r.label.replace("Corrida ", "C");
    const bonusCell = v => `<td class="cell-round">${v ? "+" + v : "—"}</td>`;
    const done = races.length > 0;
    const rows = list.map((t, i) => {
      const logo = logos[t.tag]
        ? `<img class="st-team-logo" src="${encodeURI(logos[t.tag])}" alt="${t.name}" loading="lazy" />`
        : `<span class="st-team-logo st-team-logo-fallback">${t.tag}</span>`;
      return `
        <tr class="${done && i < 3 ? "row-pos-" + (i + 1) : ""}${ours.has(t.tag) ? " row-pitbox" : ""}">
          <td class="cell-pos">${String(i + 1).padStart(2, "0")}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${logo}
              <span class="st-class-driver"><span>${t.name}</span><small>[${t.tag}] · ${t.room}</small></span>
            </div>
          </td>
          ${t.cells.flat().map(v => `<td class="${v ? "cell-round" : "cell-zero"}">${v}</td>`).join("")}
          ${t.fl.map(bonusCell).join("")}
          ${bonusCell(t.pole)}
          <td class="cell-total">${t.points}</td>
        </tr>`;
    }).join("");
    // per-session class results (qualifying + races)
    const teamName = tag => (fp.teams.find(t => t.tag === tag) || {}).name || tag;
    const classTable = (sess, c) => {
      const isQ = sess.key === "qualy";
      const body = (sess[c] || []).map((d, i) => {
        const pts = isQ ? (i === 0 ? "+" + fp.pole : "") : (d.nt ? 0 : fp.points[i] || 0) + (d.fl ? fp.fastestLap : 0);
        return `<tr class="${ours.has(d.team) ? "row-pitbox" : ""}">
          <td class="cell-pos">${i + 1}</td>
          <td class="cell-name"><span>${d.name}</span> <span class="st-team-tag" title="${teamName(d.team)}">${d.team}</span>${isQ && i === 0 ? ' <span class="race-badge badge-pole" title="Pole Position">P</span>' : ""}${d.fl ? ' <span class="race-badge badge-fl" title="Volta Mais Rápida">VR</span>' : ""}${d.nt ? ' <small style="opacity:0.6">NT</small>' : ""}</td>
          <td class="cell-gap${d.fl ? " cell-bestlap" : ""}">${d.lap || "—"}</td>
          <td class="cell-total">${pts}</td>
        </tr>`;
      }).join("");
      return `<div class="standings-table-wrap" style="margin-bottom:1rem;"><div class="standings-table-scroll"><table class="standings-table">
        <thead><tr><th class="th-pos">${c}</th><th class="th-name">Piloto</th><th>Melhor volta</th><th class="th-total">${isQ ? "Bónus" : "Pts"}</th></tr></thead>
        <tbody>${body}</tbody></table></div></div>`;
    };
    const sessHTML = sessions.map(x => `
      <h3 class="race-results-title" style="margin-top:1.5rem;">${x.label}</h3>
      <div class="final-class-grid">${classTable(x, "GR1")}${classTable(x, "GR3")}</div>`).join("");
    // podium with the top 3 teams' logos (2nd · 1st · 3rd), once the races are in
    const podium = done ? `
      <div class="final-podium">${[1, 0, 2].filter(i => list[i]).map(i => {
        const t = list[i];
        const img = logos[t.tag]
          ? `<img src="${encodeURI(logos[t.tag])}" alt="${t.name}" />`
          : `<span class="final-podium-fb">${t.tag}</span>`;
        return `
        <div class="final-podium-step final-podium-p${i + 1}${ours.has(t.tag) ? " is-ours" : ""}">
          <div class="final-podium-logo">${img}</div>
          <div class="final-podium-name">${t.name}</div>
          <div class="final-podium-pts">${t.points} pts</div>
          <div class="final-podium-base">${i === 0 ? "🏆 1" : i + 1}</div>
        </div>`;
      }).join("")}
      </div>` : "";
    return `
      <p class="cal-comp-sub" style="margin:0 0 1rem;">${fp.note}</p>
      ${podium}
      <div class="standings-table-wrap" style="margin-bottom:2rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead><tr>
              <th class="th-pos">#</th><th class="th-name">Equipa</th>
              ${races.map(r => CLS.map(c => `<th class="th-round">${short(r)} ${c}</th>`).join("")).join("")}
              ${races.map(r => `<th class="th-round" title="Volta mais rápida (+${fp.fastestLap} por categoria)">VMR ${short(r)}</th>`).join("")}
              <th class="th-round" title="Pole position na qualificação (+${fp.pole})">Pole</th><th class="th-total">Total</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <div class="standings-legend race-legend" style="margin-bottom:1rem;"><span class="race-badge badge-pole">P</span> Pole position (+${fp.pole}) &nbsp;·&nbsp; <span class="race-badge badge-fl">VR</span> Volta mais rápida da categoria (+${fp.fastestLap}) &nbsp;·&nbsp; NT = sem tempo final (0 pts)</div>
      ${sessHTML}
      <div style="margin-bottom:3rem;"></div>`;
  }

  /* Round-by-round results inside one class tab (GR1 / GR3), in the same
     format as the other championships: round tabs, Qualificação / Corrida
     sub-tabs, podium + table. Round data holds both classes; each entry's
     `ref` links it to the standings driver (class, avatar, highlight). */
  const classRoundState = {};
  function buildClassSessions(s, round, cls) {
    // `key` tells apart the same driver in two classes (e.g. GR1 in R1, GR3 in R2)
    const byRef = ref => s.drivers.find(x => (x.key || x.name) === ref) || {};
    const minLap = list => list.reduce((m, r) => (!m || (r.bestLap && r.bestLap < m) ? r.bestLap : m), "");
    const sessions = [];
    if (round.qualy && round.qualy[cls]) {
      const results = round.qualy[cls].map((q, i) => {
        const d = byRef(q.ref);
        return { pos: i + 1, name: d.name || q.name, driverRef: d.driverRef, ourDriver: d.ourDriver, tag: d.tag || "",
          gap: i === 0 ? "" : q.gap, bestLap: q.lap, pole: i === 0, fastestLap: i === 0 };
      });
      sessions.push({ label: "Qualificação", type: "qualifying", results });
    }
    if (round.race) {
      const entries = round.race.filter(r => byRef(r.ref).cls === cls);
      const fastest = minLap(entries);
      /* Race gaps are to the overall winner; when the class winner was
         lapped by it, show the class's gaps relative to its own winner. */
      const laps = t => { const m = /^(\d+) Voltas?$/.exec(t || ""); return m ? +m[1] : null; };
      const leadLaps = entries.length ? laps(entries[0].time) : null;
      const classTime = (t, i) => {
        if (leadLaps === null) return t;
        if (i === 0) return "Vencedor " + cls;
        const n = laps(t);
        if (n === null) return t;
        const diff = n - leadLaps;
        return diff ? `+${diff} Volta${diff > 1 ? "s" : ""}` : "Mesma volta";
      };
      const results = entries.map((r, i) => {
        const d = byRef(r.ref);
        const t = classTime(r.time, i);
        return { pos: i + 1, name: d.name || r.name, driverRef: d.driverRef, ourDriver: d.ourDriver, tag: d.tag || "",
          time: t, gap: t, penalty: r.penalty, bestLap: r.bestLap, fastestLap: r.bestLap === fastest };
      });
      sessions.push({ label: "Corrida", type: "race", duration: round.duration, fastestLapTime: fastest, results });
    }
    return sessions;
  }

  function renderClassRounds(s, cls) {
    const rounds = s.rounds || [];
    if (!rounds.length) return "";
    const compId = s.competition;
    /* Default to the latest round that already has results. */
    const lastPlayed = rounds.reduce((m, r, i) => (r.qualy || r.race ? i : m), 0);
    const st = classRoundState[compId] || (classRoundState[compId] = { roundIdx: lastPlayed, sessIdx: 0 });
    const round = rounds[st.roundIdx];
    const sessions = buildClassSessions(s, round, cls);
    if (st.sessIdx >= sessions.length) st.sessIdx = 0;
    const roundTabs = rounds.map((r, i) =>
      `<button class="standings-tab ec-round-tab${i === st.roundIdx ? " active" : ""}" data-round-idx="${i}">${r.short}</button>`).join("");
    const sessTabs = sessions.map((x, i) =>
      `<button class="race-subtab ec-sess-tab${i === st.sessIdx ? " active" : ""}" data-sess-idx="${i}">${x.label}</button>`).join("");
    const legend = `<span class="race-badge badge-pole">P</span> Pole Position ${cls} &nbsp;·&nbsp;
      <span class="race-badge badge-fl">VR</span> Volta Mais Rápida ${cls}`;
    return `
      <div class="race-results-block" data-comp="${compId}">
        <h3 class="race-results-title">Resultados das Corridas · ${cls}</h3>
        <div class="standings-tabs" data-comp="${compId}">${roundTabs}</div>
        <div class="race-info-bar">
          <div><span class="race-info-label">${round.name}</span>${round.date ? " · " + round.date : ""}</div>
        </div>
        <div class="race-subtabs" data-comp="${compId}">${sessTabs}</div>
        ${sessions.length ? renderSessionBlock(sessions[st.sessIdx], legend) : `<div class="race-coming-soon">Brevemente</div>`}
      </div>`;
  }

  function renderExternalStandingContent(s) {
    const isRace = s.format === "race" && s.events;
    if (!isRace && s.classes && s.drivers.length) return renderClassStandings(s);
    if (!isRace) {
      return `
        <div class="standings-table-wrap" style="margin-bottom:3rem;">
          <div class="standings-table-scroll">
            <table class="standings-table">
              <thead><tr><th class="th-pos">POS</th><th class="th-name">Piloto</th><th class="th-total">Pontos</th></tr></thead>
              <tbody>${s.drivers.length
                ? renderExternalStandingRows(s, s.drivers, false)
                : `<tr><td colspan="3" style="text-align:center;padding:2rem;opacity:0.7;">Ainda sem resultados — a classificação será publicada após a primeira corrida.</td></tr>`}</tbody>
            </table>
          </div>
        </div>
      `;
    }

    const compId = s.competition;
    const state = externalEventState[compId];
    const event = s.events[state.eventIdx];
    const streamLinkFor = (url) => url
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="cal-standings-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M21.54 7.2a2.74 2.74 0 0 0-1.94-1.93C17.88 4.8 12 4.8 12 4.8s-5.88 0-7.6.47A2.74 2.74 0 0 0 2.46 7.2 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .46 4.8 2.74 2.74 0 0 0 1.94 1.93c1.72.47 7.6.47 7.6.47s5.88 0 7.6-.47a2.74 2.74 0 0 0 1.94-1.93A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.46-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/></svg>
          Transmissão
        </a>`
      : "";
    const streamLink = streamLinkFor(event.streamUrl);
    const infoBarHTML = `
      <div class="race-info-bar">
        <div><span class="race-info-label">${event.name}</span>${event.date ? " · " + event.date : ""}${event.track ? " · " + event.track : ""}</div>
        ${event.car ? `<div class="race-info-car">${event.car}</div>` : ""}
        ${streamLink}
      </div>
    `;

    /* Events with stages (e.g. WRT's "Top Split": a Gr4 phase with
       Sala 1/2, then a regroup into a Gr3 phase with new Sala 1/2)
       add a stage tab above the room→session tabs. Single-room,
       single-stage events just render tabs with one item. */
    if (event.stages) {
      const stageKey = compId + ":" + state.eventIdx;
      if (!wrtStageState[stageKey]) wrtStageState[stageKey] = { stageIdx: 0 };
      const stageState = wrtStageState[stageKey];
      const stage = event.stages[stageState.stageIdx];

      const buildStageInfoBar = (link) => `
        <div class="race-info-bar">
          <div><span class="race-info-label">${event.name}</span>${event.date ? " · " + event.date : ""}${event.track ? " · " + event.track : ""}</div>
          ${stage.car ? `<div class="race-info-car">${stage.car}</div>` : ""}
          ${link}
        </div>
      `;

      const stageTabs = event.stages.length > 1
        ? `<div class="standings-tabs" style="margin:0 0 1rem;">${event.stages.map((st, i) => `
            <button class="standings-tab wrt-stage-tab${i === stageState.stageIdx ? " active" : ""}" data-stage-key="${stageKey}" data-stage-idx="${i}">${st.stage}</button>
          `).join("")}</div>`
        : "";

      if (!stage.rooms || stage.rooms.length === 0) {
        return buildStageInfoBar(streamLink) + stageTabs + `<div class="race-coming-soon">Brevemente</div>`;
      }

      const roomKey = stageKey + ":" + stageState.stageIdx;
      if (!wrtRoomState[roomKey]) wrtRoomState[roomKey] = { roomIdx: 0, sessionIdx: 0 };
      const roomState = wrtRoomState[roomKey];
      const room = stage.rooms[roomState.roomIdx];
      if (roomState.sessionIdx >= room.sessions.length) roomState.sessionIdx = 0;
      const session = room.sessions[roomState.sessionIdx];
      const hasSessionResults = session.results && session.results.length > 0;
      const stageInfoBarHTML = buildStageInfoBar(streamLinkFor(room.streamUrl || event.streamUrl));

      const roomTabs = stage.rooms.length > 1
        ? `<div class="standings-tabs" style="margin:0 0 1rem;">${stage.rooms.map((rm, i) => `
            <button class="standings-tab wrt-room-tab${i === roomState.roomIdx ? " active" : ""}" data-room-key="${roomKey}" data-room-idx="${i}">${rm.room}</button>
          `).join("")}</div>`
        : "";
      const sessionTabs = `<div class="race-subtabs">${room.sessions.map((sess, i) => `
        <button class="race-subtab wrt-session-tab${i === roomState.sessionIdx ? " active" : ""}" data-room-key="${roomKey}" data-session-idx="${i}">${sess.label}</button>
      `).join("")}</div>`;

      return stageInfoBarHTML + stageTabs + roomTabs + sessionTabs +
        (hasSessionResults ? renderSessionBlock(session) : `<div class="race-coming-soon">Brevemente</div>`);
    }

    const hasResults = event.drivers && event.drivers.length > 0;

    if (!hasResults) {
      return infoBarHTML + `
        ${event.duration ? `
        <div class="race-stats-row">
          <div class="race-stat"><span class="race-stat-label">Duração</span><span class="race-stat-value">${event.duration}</span></div>
          <div class="race-stat"><span class="race-stat-label">Volta Mais Rápida</span><span class="race-stat-value race-stat-purple">—</span></div>
        </div>` : ""}
        <div class="race-coming-soon">Brevemente</div>
      `;
    }

    const showCar = event.drivers.some(d => d.car);

    return infoBarHTML + `
      ${event.duration || event.fastestLapTime ? `
      <div class="race-stats-row">
        ${event.duration ? `<div class="race-stat"><span class="race-stat-label">Duração</span><span class="race-stat-value">${event.duration}</span></div>` : ""}
        ${event.fastestLapTime ? `<div class="race-stat"><span class="race-stat-label">Volta Mais Rápida</span><span class="race-stat-value race-stat-purple">${event.fastestLapTime}</span></div>` : ""}
      </div>` : ""}
      <div class="podium-row">${event.drivers.slice(0, 3).map((d, i) => `
        <div class="podium-card podium-pos-${i + 1}">
          <div class="podium-pos">${i + 1}</div>
          <div class="podium-name">${d.name}</div>
          <div class="podium-time">${i === 0 ? d.time : d.gap}</div>
        </div>
      `).join("")}</div>
      <div class="standings-table-wrap" style="margin-bottom:1rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead>
              <tr><th class="th-pos">POS</th><th class="th-name">Piloto</th>${showCar ? "<th>Carro</th>" : ""}<th>Tempo / Gap</th><th>Pen.</th><th>Melhor Volta</th></tr>
            </thead>
            <tbody>${renderExternalStandingRows(s, event.drivers, true, showCar)}</tbody>
          </table>
        </div>
      </div>
      <div class="standings-legend race-legend">
        <span class="race-badge badge-fl">VR</span> Volta Mais Rápida
      </div>
    `;
  }

  function renderExternalStanding(s) {
    const logo = s.logo ? `<img src="${s.logo}" alt="${s.label}" class="cal-comp-logo" />` : "";
    const isRace = s.format === "race" && s.events;
    const compId = s.competition;

    if (isRace && !externalEventState[compId]) {
      externalEventState[compId] = { eventIdx: s.events.length - 1 };
    }

    const eventTabs = isRace && s.events.length > 1
      ? `<div class="race-subtabs" data-comp="${compId}">${s.events.map((ev, i) => `
          <button class="race-subtab external-event-tab${i === externalEventState[compId].eventIdx ? " active" : ""}" data-event-idx="${i}">${ev.name}</button>
        `).join("")}</div>`
      : "";

    return `
      <div class="cal-block" id="standings-${compId.toLowerCase()}" style="margin-bottom:1.5rem;" data-comp="${compId}">
        <div class="cal-block-header">
          ${logo}
          <div>
            <h2 class="cal-comp-title">${s.title || s.label}</h2>
            ${s.subtitle ? `<p class="cal-comp-sub">${s.subtitle}</p>` : ""}
          </div>
        </div>
        ${eventTabs}
      </div>
      <div id="external-standing-content-${compId}" data-comp="${compId}">${renderExternalStandingContent(s)}</div>
    `;
  }

  function refreshExternalStanding(compId) {
    const s = SITE_DATA.standings.find(x => x.competition === compId);
    if (!s) return;
    const container = document.getElementById(`external-standing-content-${compId}`);
    if (container) container.innerHTML = renderExternalStandingContent(s);
    document.querySelectorAll(`.external-event-tab`).forEach(btn => {
      if (btn.closest(`[data-comp="${compId}"]`)) {
        btn.classList.toggle("active", parseInt(btn.dataset.eventIdx, 10) === externalEventState[compId].eventIdx);
      }
    });
  }

  function renderCompetition(s) {
    if (s.type === "teams") return renderTeams(s);
    if (s.type === "drivers-external") return renderExternalStanding(s);
    return renderStanding(s);
  }

  // Each standings page only shows the competitions listed in its
  // data-competitions attribute (comma-separated competition ids).
  // No attribute = show everything (kept for backward compatibility).
  const compFilter = contentEl.dataset.competitions
    ? contentEl.dataset.competitions.split(",").map(c => c.trim())
    : null;
  const standingsToShow = compFilter
    ? SITE_DATA.standings.filter(s => compFilter.includes(s.competition))
    : SITE_DATA.standings;

  contentEl.innerHTML = standingsToShow.map(renderCompetition).join("");

  contentEl.addEventListener("click", (e) => {
    const viewBtn = e.target.closest(".st-view-tab");
    if (viewBtn) {
      const bar = viewBtn.parentElement;
      bar.querySelectorAll(".st-view-tab").forEach(b => b.classList.toggle("active", b === viewBtn));
      for (let el = bar.nextElementSibling; el && el.classList.contains("st-view-pane"); el = el.nextElementSibling)
        el.hidden = el.dataset.view !== viewBtn.dataset.view;
      return;
    }
    const classBtn = e.target.closest(".ext-class-tab");
    if (classBtn) {
      const compId = classBtn.closest("[data-comp]").dataset.comp;
      classState[compId] = classBtn.dataset.cls;
      refreshExternalStanding(compId);
      return;
    }
    const ecBtn = e.target.closest(".ec-round-tab, .ec-sess-tab");
    if (ecBtn) {
      const compId = ecBtn.closest("[data-comp]").dataset.comp;
      const st = classRoundState[compId];
      if (ecBtn.classList.contains("ec-round-tab")) { st.roundIdx = +ecBtn.dataset.roundIdx; st.sessIdx = 0; }
      else st.sessIdx = +ecBtn.dataset.sessIdx;
      refreshExternalStanding(compId);
      return;
    }
    const roundBtn = e.target.closest(".race-round-tab");
    if (roundBtn) {
      const compId = roundBtn.closest("[data-comp]").dataset.comp;
      raceResultsState[compId].roundIdx = parseInt(roundBtn.dataset.roundIdx, 10);
      const st = SITE_DATA.standings.find(x => x.competition === compId);
      raceResultsState[compId].raceIdx = firstSessionWithResults(st && st.raceResults[raceResultsState[compId].roundIdx]);
      refreshRaceResults(compId);
      return;
    }
    const eventBtn = e.target.closest(".external-event-tab");
    if (eventBtn) {
      const compId = eventBtn.closest("[data-comp]").dataset.comp;
      externalEventState[compId].eventIdx = parseInt(eventBtn.dataset.eventIdx, 10);
      refreshExternalStanding(compId);
      return;
    }
    const stageBtn = e.target.closest(".wrt-stage-tab");
    if (stageBtn) {
      const stageKey = stageBtn.dataset.stageKey;
      wrtStageState[stageKey].stageIdx = parseInt(stageBtn.dataset.stageIdx, 10);
      delete wrtRoomState[stageKey + ":" + wrtStageState[stageKey].stageIdx];
      refreshExternalStanding(stageKey.split(":")[0]);
      return;
    }
    const roomBtn = e.target.closest(".wrt-room-tab");
    if (roomBtn) {
      const roomKey = roomBtn.dataset.roomKey;
      wrtRoomState[roomKey].roomIdx = parseInt(roomBtn.dataset.roomIdx, 10);
      wrtRoomState[roomKey].sessionIdx = 0;
      refreshExternalStanding(roomKey.split(":")[0]);
      return;
    }
    const wrtSessionBtn = e.target.closest(".wrt-session-tab");
    if (wrtSessionBtn) {
      const roomKey = wrtSessionBtn.dataset.roomKey;
      wrtRoomState[roomKey].sessionIdx = parseInt(wrtSessionBtn.dataset.sessionIdx, 10);
      refreshExternalStanding(roomKey.split(":")[0]);
      return;
    }
    const raceBtn = e.target.closest(".race-subtab");
    if (raceBtn) {
      const compId = raceBtn.closest("[data-comp]").dataset.comp;
      raceResultsState[compId].raceIdx = parseInt(raceBtn.dataset.raceIdx, 10);
      refreshRaceResults(compId);
    }
  });
});
