/* =====================================================================
   PILOTO.JS — página de cada piloto (piloto.html?id=<ID PSN>)
   • Cartão: fato, número, IDs, links PSN / GT7 / EDGE
   • Modo Sport: DR, SR, Edge Score, posições (js/edge-stats.js, diário)
   • Gráfico dos pontos de Driver Rating (js/edge-dr.js, diário)
   • Perfil do DG-Edge em direto incorporado no fim da página
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("pilot-content");
  if (!root || !SITE_DATA.drivers) return;

  const id = new URLSearchParams(location.search).get("id") || "";
  const d = SITE_DATA.drivers.find(x => (x.role || "").toLowerCase() === id.toLowerCase())
         || SITE_DATA.drivers.find(x => x.name.toLowerCase() === id.toLowerCase());
  if (!d) {
    root.innerHTML = `<p class="tt-intro">Piloto não encontrado. <a href="index.html#drivers-section">Ver todos os pilotos</a></p>`;
    return;
  }

  document.title = `${d.name} — RTP Racing Team Project`;
  document.getElementById("pilot-hero-name").textContent = d.name;
  document.getElementById("pilot-hero-sub").textContent = `#${d.number} · ${d.gtName || d.role} · Piloto oficial RTP`;

  const edgeUrl = `https://www.dg-edge.com/players/${encodeURIComponent(d.role)}`;
  const psnUrl = `https://profile.playstation.com/${encodeURIComponent(d.role)}`;
  const gt7Url = (SITE_DATA.gt7Profiles || {})[d.role] || "";
  const flagCode = { "Portugal": "pt", "Brasil": "br", "Cabo Verde": "cv" }[d.nationality] || "pt";

  /* ── EDGE history ── */
  // Local copies so the "Atualizar" button can swap in freshly loaded data
  let STATS = typeof EDGE_STATS !== "undefined" ? EDGE_STATS : null;
  let DAILIES = typeof EDGE_DAILIES !== "undefined" ? EDGE_DAILIES : null;
  let now, prev;
  const deriveStats = () => {
    const hist = ((STATS && STATS.history[d.role]) || [])
      .map(r => ({ date: r[0], dr: r[1], sr: r[2], score: r[3], global: r[4], country: r[5], events: r[6], delta: r[7] }));
    now = hist[hist.length - 1];
    prev = hist.length > 1 ? hist[hist.length - 2] : null;
  };
  deriveStats();
  const fmtNum = v => (typeof v === "number" ? v.toLocaleString("pt-PT") : (v || "—"));
  const trend = (a, b, lowerIsBetter) => {
    if (!b || typeof a !== "number" || typeof b !== "number" || a === b) return "";
    const better = lowerIsBetter ? a < b : a > b;
    const diff = Math.abs(a - b);
    return `<span class="pl-trend ${better ? "up" : "down"}">${better ? "▲" : "▼"} ${diff % 1 ? diff.toFixed(2) : diff.toLocaleString("pt-PT")}</span>`;
  };
  const fmtDate = s => s ? s.split("-").reverse().join("/") : "";

  /* ── Driver Rating points chart (js/edge-dr.js, one point per day) ──
     Time-scaled x axis (the DG-Edge history has gaps), with range buttons. */
  const daysOf = src => ((src && src.drivers[d.role] && src.drivers[d.role].days) || [])
    .filter(r => typeof r[1] === "number" && r[1] > 0)
    .map(r => ({ date: r[0], t: Date.parse(r[0] + "T12:00:00"), pts: r[1] }));
  let drDays = daysOf(typeof EDGE_DR !== "undefined" ? EDGE_DR : null);
  let drRange = "1y";
  // "updatedAt" = moment the daily task collected the data (ISO with timezone)
  const fmtStamp = iso => {
    const dt = iso ? new Date(iso) : null;
    if (!dt || isNaN(dt)) return "";
    const o = { timeZone: "Europe/Lisbon" };
    return `${dt.toLocaleDateString("pt-PT", o)} às ${dt.toLocaleTimeString("pt-PT", { ...o, hour: "2-digit", minute: "2-digit" })}`;
  };
  let drStamp = typeof EDGE_DR !== "undefined" ? EDGE_DR.updatedAt : "";
  const RANGES = [["30d", "30 dias", 30], ["3m", "3 meses", 92], ["1y", "Ano", 366], ["all", "Tudo", Infinity]];
  const fmtPts = v => v.toLocaleString("pt-PT");
  const fmtShort = s => { const [y, m, dd] = s.split("-"); return `${dd}/${m}`; };

  function drChart(rangeKey) {
    const days = RANGES.find(r => r[0] === rangeKey)[2];
    const last = drDays[drDays.length - 1];
    let pts = drDays.filter(p => p.t >= last.t - days * 864e5);
    if (pts.length < 2) pts = drDays.slice(-2);
    const W = 1100, H = 330, PL = 58, PR = 18, PT = 22, PB = 30;
    const vals = pts.map(p => p.pts);
    const pad = Math.max(200, (Math.max(...vals) - Math.min(...vals)) * 0.08);
    const lo = Math.min(...vals) - pad, hi = Math.max(...vals) + pad;
    const t0 = pts[0].t, t1 = pts[pts.length - 1].t;
    const x = t => pts.length === 1 || t1 === t0 ? W / 2 : PL + ((t - t0) * (W - PL - PR)) / (t1 - t0);
    const y = v => PT + (H - PT - PB) * (1 - (v - lo) / (hi - lo || 1));
    const line = pts.map((p, i) => `${i ? "L" : "M"}${x(p.t).toFixed(1)},${y(p.pts).toFixed(1)}`).join(" ");
    const area = `${line} L${x(t1).toFixed(1)},${H - PB} L${x(t0).toFixed(1)},${H - PB} Z`;
    const ticks = [0, 0.5, 1].map(f => lo + (hi - lo) * f).map(v => `
      <line x1="${PL}" x2="${W - PR}" y1="${y(v)}" y2="${y(v)}" class="pl-grid"/>
      <text x="${PL - 6}" y="${y(v) + 4}" class="pl-axis" text-anchor="end">${fmtPts(Math.round(v))}</text>`).join("");
    const nLabels = Math.min(5, pts.length);
    const labels = Array.from({ length: nLabels }, (_, i) => {
      const p = pts[Math.round(i * (pts.length - 1) / Math.max(1, nLabels - 1))];
      return `<text x="${x(p.t)}" y="${H - 8}" class="pl-axis" text-anchor="middle">${fmtShort(p.date)}</text>`;
    }).join("");
    // invisible hover targets (tooltip) + only the last point is drawn
    const dots = pts.map(p => `<circle cx="${x(p.t)}" cy="${y(p.pts)}" r="9" class="pl-hit"><title>${fmtDate(p.date)} · ${fmtPts(p.pts)} pontos</title></circle>`).join("");
    const lastP = pts[pts.length - 1];
    return `
      <svg viewBox="0 0 ${W} ${H}" class="pl-chart" role="img" aria-label="Evolução do Driver Rating">
        <defs><linearGradient id="plFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--yellow)" stop-opacity="0.35"/><stop offset="1" stop-color="var(--yellow)" stop-opacity="0"/>
        </linearGradient></defs>
        ${ticks}<path d="${area}" fill="url(#plFill)"/><path d="${line}" class="pl-line"/>${labels}
        <circle cx="${x(lastP.t)}" cy="${y(lastP.pts)}" r="5" class="pl-dot"/>${dots}
        <text x="${Math.min(x(lastP.t), W - PR - 4)}" y="${y(lastP.pts) - 10}" class="pl-last" text-anchor="end">${fmtPts(lastP.pts)}</text>
      </svg>`;
  }

  function drSection() {
    if (!drDays.length) return `<p class="pl-muted">Ainda sem pontos de Driver Rating registados no DG-Edge.</p>`;
    const cur = drDays[drDays.length - 1];
    const prevDay = drDays.length > 1 ? drDays[drDays.length - 2] : null;
    const diff = prevDay ? cur.pts - prevDay.pts : 0;
    const year = drDays.filter(p => p.t >= cur.t - 366 * 864e5);
    const high = Math.max(...year.map(p => p.pts));
    return `
      <div class="pl-dr">
        <div class="pl-dr-head">
          <div>
            <span class="pl-dr-label">Driver Rating · ${now && now.dr ? now.dr : ""}</span>
            <div class="pl-dr-points">${fmtPts(cur.pts)} <span class="pl-dr-diff ${diff > 0 ? "up" : diff < 0 ? "down" : ""}" title="${prevDay ? `Desde ${fmtDate(prevDay.date)} (${fmtPts(prevDay.pts)} pontos)` : ""}">${diff > 0 ? `▲ +${fmtPts(diff)}` : diff < 0 ? `▼ ${fmtPts(diff)}` : "= 0"}</span> <button type="button" class="pl-refresh" id="pl-refresh" title="Carregar os dados mais recentes (pontos, tempos, posições e deltas)">↻ Atualizar</button></div>
            <span class="pl-dr-high">Máximo do último ano: ${fmtPts(high)}</span>
          </div>
          <div class="pl-dr-ranges">${RANGES.map(r => `<button type="button" class="pl-range${r[0] === drRange ? " active" : ""}" data-range="${r[0]}">${r[1]}</button>`).join("")}</div>
        </div>
        <div class="pl-chart-wrap" id="pl-dr-chart">${drChart(drRange)}</div>
        <p class="pl-muted" id="pl-dr-note">Última atualização: <strong>${fmtStamp(drStamp) || fmtDate(cur.date)}</strong> · via DG-Edge, todos os dias às 09:00</p>
      </div>`;
  }
  /* ── Daily Races A/B/C of the week (js/edge-dailies.js) ──
     Target = leader time × (1 + Avg. delta): a lap under it lowers the driver's average. */
  const fmtLap = ms => {
    if (typeof ms !== "number") return "";
    const m = Math.floor(ms / 60000), s = ((ms % 60000) / 1000).toFixed(3).padStart(6, "0");
    return `${m}:${s}`;
  };
  function dailiesSection() {
    if (!DAILIES || !DAILIES.races.length) return "";
    const mine = DAILIES.times[d.role] || {};
    const avg = now && now.delta ? parseFloat(now.delta) : NaN;
    const r0 = DAILIES.races[0];
    const cards = DAILIES.races.map(r => {
      const me = mine[r.type];
      const target = r.lead && !isNaN(avg) ? Math.round(r.lead * (1 + avg / 100)) : null;
      const myDelta = me && r.lead ? (me.ms / r.lead - 1) * 100 : null;
      const ok = me && target ? me.ms <= target : false;
      return `
        <a class="pl-daily" href="${r.url}" target="_blank" rel="noopener">
          <div class="pl-daily-top"><span class="pl-daily-tag">Daily ${r.type}</span><span class="pl-daily-car">${r.car} · ${r.tyres}</span></div>
          <div class="pl-daily-track">${r.track}</div>
          <div class="pl-daily-row">
            <span class="race-stat-label">Tempo do piloto</span>
            <span class="pl-daily-time">${me ? fmtLap(me.ms) : ""}</span>
            ${me ? `<span class="pl-daily-sub">${me.pos.toLocaleString("pt-PT")}.º mundial · ${me.posPT}.º PT · +${myDelta.toFixed(2)}%</span>` : `<span class="pl-daily-sub"></span>`}
          </div>
          ${target ? `
          <div class="pl-daily-row pl-daily-target${ok ? " ok" : ""}">
            <span class="race-stat-label">Para melhorar o Avg. delta</span>
            <span class="pl-daily-time">&lt; ${fmtLap(target)}</span>
            <span class="pl-daily-sub">${ok ? "✓ Já abaixo do Avg. delta atual" : me ? `Faltam ${((me.ms - target) / 1000).toFixed(3)} s` : `Líder: ${fmtLap(r.lead)} · +${avg.toFixed(2)}%`}</span>
          </div>` : ""}
        </a>`;
    }).join("");
    return `
    <h3 class="race-results-title">Daily Races <small class="pl-muted">· semana ${r0.week} · última atualização: ${fmtStamp(DAILIES.updatedAt) || fmtDate(DAILIES.updated)}</small></h3>
    <div class="pl-dailies">${cards}</div>
    <p class="pl-muted pl-dailies-note">Tempo-alvo = tempo do líder mundial × (1 + Avg. delta do piloto). Uma volta abaixo deste tempo baixa o Avg. delta.</p>`;
  }

  const stat = (label, value, extra = "") => `
    <div class="race-stat"><span class="race-stat-label">${label}</span><span class="race-stat-value">${value}${extra}</span></div>`;
  const sportSection = () => `
    <h3 class="race-results-title">Modo Sport ${now ? `<small class="pl-muted">· última atualização: ${fmtStamp(STATS && STATS.updatedAt) || fmtDate(now.date)}</small>` : ""}</h3>
    ${now ? `
    <div class="pl-main-stats">
      ${stat("DR", now.dr || "—")}
      ${stat("SR", now.sr || "—")}
      ${stat("Edge Score", now.score ?? "—", trend(now.score, prev && prev.score))}
      ${stat("Avg. delta", now.delta || "—", trend(parseFloat(now.delta), prev && prev.delta ? parseFloat(prev.delta) : null, true))}
    </div>
    <p class="pl-pos">
      <span>🌍 Mundial <strong>${fmtNum(now.global)}</strong>${trend(now.global, prev && prev.global, true)}</span>
      <span><img src="https://flagcdn.com/w20/pt.png" alt="" width="18" height="13" /> Portugal <strong>${fmtNum(now.country)}</strong>${trend(now.country, prev && prev.country, true)}</span>
    </p>` : `<p class="pl-muted">Ainda sem dados do DG-Edge para este piloto.</p>`}`;

  root.innerHTML = `
    <div class="pl-card">
      <div class="pl-photo"><img src="${d.image}" alt="${d.name}" /></div>
      <div class="pl-info">
        <span class="pl-number">#${d.number}</span>
        <h2 class="pl-name">${d.name}</h2>
        <p class="pl-ids">
          <a href="${psnUrl}" target="_blank" rel="noopener" title="Perfil PSN"><img src="images/PlayStation_App_Icon.jpg" alt="PSN" class="id-icon" /> ${d.role}</a>
          ${gt7Url ? `<a href="${gt7Url}" target="_blank" rel="noopener" title="Perfil GT7">` : "<span>"}<img src="images/ICON_GT7.svg" alt="GT7" class="id-icon" /> ${d.gtName || d.role}${gt7Url ? "</a>" : "</span>"}
          <a href="${edgeUrl}" target="_blank" rel="noopener" title="Perfil DG-Edge"><img src="images/EDGE.png" alt="EDGE" class="id-icon" /> ${d.role}</a>
          <span><img src="https://flagcdn.com/w20/${flagCode}.png" alt="" width="18" height="13" /> ${d.nationality || ""}</span>
        </p>
      </div>
    </div>

    <div id="pl-sport-box">${sportSection()}</div>
    <h3 class="race-results-title">Driver Rating</h3>
    <div id="pl-dr-box">${drSection()}</div>
    <div id="pl-dailies-box">${dailiesSection()}</div>

    <div class="pl-live" id="pl-live">
      <div class="pl-live-head">
        <h3 class="race-results-title">🔴 DG-Edge em direto</h3>
        <a href="${edgeUrl}" target="_blank" rel="noopener" class="pl-muted">Abrir no DG-Edge ↗</a>
      </div>
      <div class="pl-live-frame"><iframe src="${edgeUrl}" title="Perfil DG-Edge de ${d.role}" loading="lazy"></iframe></div>
    </div>`;

  // Driver Rating range buttons + "Atualizar" (event delegation: the box is re-rendered on refresh)
  const drBox = document.getElementById("pl-dr-box");
  drBox.addEventListener("click", e => {
    const btn = e.target.closest(".pl-range");
    if (btn) {
      drRange = btn.dataset.range;
      drBox.querySelectorAll(".pl-range").forEach(b => b.classList.toggle("active", b === btn));
      document.getElementById("pl-dr-chart").innerHTML = drChart(drRange);
    }
    if (e.target.closest("#pl-refresh")) refreshDR();
  });

  // "Atualizar": re-loads the saved DG-Edge data (points, DR/SR, Edge Score, rankings,
  // Avg. delta, Daily Race times) from the server, bypassing the cache, and redraws.
  // DG-Edge itself can't be queried from a website (it blocks other sites and servers),
  // so this shows the newest data collected by the update task.
  const loadData = async (file, name) => {
    const res = await fetch(`js/${file}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    return new Function(`${await res.text()}; return ${name};`)();
  };
  async function refreshDR() {
    const btn = document.getElementById("pl-refresh");
    btn.disabled = true; btn.textContent = "↻ A atualizar…";
    let msg = "";
    try {
      const sig = () => JSON.stringify([drStamp, STATS && STATS.updatedAt, DAILIES && DAILIES.updatedAt, drDays[drDays.length - 1], now, DAILIES && DAILIES.times[d.role], DAILIES && DAILIES.races.map(r => r.lead)]);
      const before = sig();
      const [dr, stats, dailies] = await Promise.all([
        loadData("edge-dr.js", "EDGE_DR"), loadData("edge-stats.js", "EDGE_STATS"), loadData("edge-dailies.js", "EDGE_DAILIES")
      ]);
      const next = daysOf(dr);
      if (next.length) { drDays = next; drStamp = dr.updatedAt || drStamp; }
      STATS = stats; DAILIES = dailies; deriveStats();
      msg = sig() !== before ? "✓ Dados atualizados" : `Sem dados novos desde a última atualização. <a href="#pl-live">Ver agora no DG-Edge ↓</a>`;
    } catch (err) {
      msg = "Não foi possível atualizar agora";
    }
    document.getElementById("pl-sport-box").innerHTML = sportSection();
    document.getElementById("pl-dailies-box").innerHTML = dailiesSection();
    drBox.innerHTML = drSection();
    const note = document.getElementById("pl-dr-note");
    note.innerHTML = `<strong class="pl-refresh-msg">${msg}</strong> · ${note.innerHTML}`;
  }

});
