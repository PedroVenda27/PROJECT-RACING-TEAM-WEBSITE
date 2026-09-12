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
      const pos = i + 1;
      let deltaHTML = `<span class="delta-none">–</span>`;
      if (prevPosMap && currPosMap) {
        const delta = prevPosMap[d.name] - currPosMap[d.name];
        if (delta > 0) deltaHTML = `<span class="delta-up">▲ ${delta}</span>`;
        else if (delta < 0) deltaHTML = `<span class="delta-down">▼ ${Math.abs(delta)}</span>`;
      }
      const roundCells = d.rounds.map(v => `<td class="${v === null ? "cell-dns" : v === 0 ? "cell-zero" : "cell-round"}">${v === null ? "DNS" : v}</td>`).join("");
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}">
          <td class="cell-pos">${pos}</td>
          <td class="cell-delta">${deltaHTML}</td>
          <td class="cell-name">
            <div class="st-driver-wrap">
              ${getDriverImg(d.name, d.driverRef)}
              <span>${d.name}</span>
            </div>
          </td>
          ${roundCells}
          <td class="cell-total">${d.total}</td>
        </tr>
      `;
    }).join("");

    return headerHTML + `
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
      ${renderRaceResultsSection(s)}
    `;
  }

  /* ── Race-by-race results (Resultados das Corridas) ──
     Keeps the selected round/race per competition so tab clicks can
     re-render just that block instead of the whole page. */
  const raceResultsState = {};

  function renderRaceResultsSection(s) {
    if (!s.raceResults || !s.raceResults.length) return "";
    const compId = s.competition;
    if (!raceResultsState[compId]) {
      raceResultsState[compId] = { roundIdx: s.raceResults.length - 1, raceIdx: 0 };
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
  function renderSessionBlock(session) {
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
            <span>${r.name}</span>
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
        <span class="race-badge badge-pole">P</span> Pole Position (+1 ponto) &nbsp;·&nbsp;
        <span class="race-badge badge-fl">VR</span> Volta Mais Rápida (+1 ponto, apenas Top 10)
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

    return infoBarHTML + renderSessionBlock(session);
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

  function renderTeams(s) {
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
              <span>${d.name}</span>
              ${isRace && d.fastestLap ? '<span class="race-badge badge-fl" title="Volta Mais Rápida">VR</span>' : ""}
            </div>
          </td>
          ${carCell}${timeCell}${penCell}${lastCell}
        </tr>
      `;
    }).join("");
  }

  function renderExternalStandingContent(s) {
    const isRace = s.format === "race" && s.events;
    if (!isRace) {
      return `
        <div class="standings-table-wrap" style="margin-bottom:3rem;">
          <div class="standings-table-scroll">
            <table class="standings-table">
              <thead><tr><th class="th-pos">POS</th><th class="th-name">Piloto</th><th class="th-total">Pontos</th></tr></thead>
              <tbody>${renderExternalStandingRows(s, s.drivers, false)}</tbody>
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
    const roundBtn = e.target.closest(".race-round-tab");
    if (roundBtn) {
      const compId = roundBtn.closest("[data-comp]").dataset.comp;
      raceResultsState[compId].roundIdx = parseInt(roundBtn.dataset.roundIdx, 10);
      raceResultsState[compId].raceIdx = 0;
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
