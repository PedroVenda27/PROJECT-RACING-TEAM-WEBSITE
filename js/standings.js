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

  function renderRaceResultsContent(s) {
    const compId = s.competition;
    const state = raceResultsState[compId];
    const round = s.raceResults[state.roundIdx];
    if (!round) return "";
    if (state.raceIdx >= round.sessions.length) state.raceIdx = 0;
    const session = round.sessions[state.raceIdx];
    const isQuali = session.type === "qualifying";

    const subTabs = round.sessions.map((sess, i) => `
      <button class="race-subtab${i === state.raceIdx ? " active" : ""}" data-race-idx="${i}">${sess.label}</button>
    `).join("");

    const podiumStatsHTML = isQuali ? "" : `
      <div class="race-stats-row">
        <div class="race-stat"><span class="race-stat-label">Voltas Completas</span><span class="race-stat-value">${session.lapsCompleted ?? "—"}</span></div>
        <div class="race-stat"><span class="race-stat-label">Paragens nas Boxes</span><span class="race-stat-value">${session.pitStops ?? "—"}</span></div>
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
      <tr class="${r.pos <= 3 ? "row-pos-" + r.pos : ""}">
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
        ${isQuali
          ? `<td class="cell-gap${r.fastestLap ? " cell-bestlap" : ""}">${r.bestLap || ""}</td>`
          : `<td class="cell-total">${r.points}</td>`
        }
      </tr>
    `).join("");

    return `
      <div class="race-info-bar">
        <div><span class="race-info-label">${round.label || "Ronda " + round.round}</span>${round.date ? " · " + round.date : ""}${round.track ? " · " + round.track : ""}</div>
        ${round.car ? `<div class="race-info-car">${round.car}</div>` : ""}
      </div>
      <div class="race-subtabs" data-comp="${compId}">${subTabs}</div>
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
                <th class="${isQuali ? "" : "th-total"}">${isQuali ? "Melhor Volta" : "Pts"}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <div class="standings-legend race-legend">
        <span class="race-badge badge-pole">P</span> Pole Position (+1 ponto) &nbsp;·&nbsp;
        <span class="race-badge badge-fl">VR</span> Volta Mais Rápida (+1 ponto, apenas Top 10) &nbsp;·&nbsp;
        Pen. — Penalização do Colégio de Comissários<br>
        <strong>Regra dos 80%:</strong> Pilotos que não cumprem 80% da distância do vencedor recebem apenas 1 ponto de presença.
      </div>
    `;
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

  contentEl.innerHTML = SITE_DATA.standings.map(s => s.type === "teams" ? renderTeams(s) : renderStanding(s)).join("");

  contentEl.addEventListener("click", (e) => {
    const roundBtn = e.target.closest(".race-round-tab");
    if (roundBtn) {
      const compId = roundBtn.closest("[data-comp]").dataset.comp;
      raceResultsState[compId].roundIdx = parseInt(roundBtn.dataset.roundIdx, 10);
      raceResultsState[compId].raceIdx = 0;
      refreshRaceResults(compId);
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
