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

    const rows = s.drivers.map((d, i) => {
      const pos = i + 1;
      const roundCells = d.rounds.map(v => `<td class="${v === null ? "cell-empty" : v === 0 ? "cell-zero" : "cell-round"}">${v === null ? "" : v}</td>`).join("");
      return `
        <tr class="${pos <= 3 ? "row-pos-" + pos : ""}">
          <td class="cell-pos">${pos}</td>
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
      <div class="standings-table-wrap" style="margin-bottom:3rem;">
        <div class="standings-table-scroll">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="th-pos">POS</th>
                <th class="th-name">Piloto</th>
                ${roundHeaders}
                <th class="th-total">Total</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  contentEl.innerHTML = SITE_DATA.standings.map(s => renderStanding(s)).join("");
});
