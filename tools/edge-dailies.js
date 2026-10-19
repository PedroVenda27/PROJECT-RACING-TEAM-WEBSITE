/* =====================================================================
   EDGE-DAILIES (coletor) — corre numa página www.dg-edge.com (mesma origem;
   não precisa de login). Lê as 3 Daily Races da semana atual (pista, carro,
   tempo do líder) e o tempo de cada piloto RTP em cada uma.
   Uso: window.EDGE_IDS = ["FVenda117", ...]; depois executar este ficheiro
   (é uma expressão async: com `await` no início devolve o resultado).
   Resultado em window.EDGE_DAILIES_RESULT = { races, times } — é o conteúdo
   de js/edge-dailies.js (sem updated/updatedAt).
   ===================================================================== */
(async () => {
  const post = (name, body) => fetch("https://admin.dg-edge.com/api/" + name, {
    method: "POST", credentials: "include",
    headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
  }).then(r => r.json());
  const toMs = t => { const m = /^(?:(\d+):)?(\d+)\.(\d+)$/.exec(t || ""); return m ? (+(m[1] || 0) * 60 + +m[2]) * 1000 + +m[3].padEnd(3, "0") : null; };

  // 1. Current week's dailies (public dailies page, Nuxt payload)
  const html = await fetch("/events/dailies", { cache: "no-store" }).then(r => r.text());
  const data = JSON.parse(html.match(/<script[^>]*id="__NUXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)[1]);
  const deref = (i, d = 0) => {
    const v = data[i];
    if (d > 6) return v;
    if (Array.isArray(v)) return v.map(x => typeof x === "number" ? deref(x, d + 1) : x);
    if (v && typeof v === "object") { const o = {}; for (const k in v) o[k] = typeof v[k] === "number" ? deref(v[k], d + 1) : v[k]; return o; }
    return v;
  };
  const events = [];
  data.forEach((o, i) => { if (o && typeof o === "object" && !Array.isArray(o) && "leadTime" in o && "dailyType" in o) events.push(deref(i)); });
  const latest = events.reduce((a, e) => Math.max(a, e.year * 100 + e.week), 0);
  const cur = events.filter(e => e.year * 100 + e.week === latest).sort((a, b) => a.dailyType.localeCompare(b.dailyType));

  const races = [];
  for (const e of cur) {
    // retrieveEvent has the live leader time / player count (the list above is cached)
    const ev = await post("b.events.retrieveEvent", { eventId: e.id });
    const p = ev.payload || {};
    races.push({
      type: e.dailyType, id: e.id, week: e.week, year: e.year, from: e.from, to: e.to,
      track: e.track ? e.track.name + (e.track.variant ? ` — ${e.track.variant}` : "") : "",
      car: e.car ? e.car.fullName : (e.carType || "").replace("GR.", "Gr."),
      tyres: e.tyres,
      lead: toMs(p.leader && p.leader.time) || e.leadTime,
      leader: p.leader ? p.leader.name : "",
      players: (p.stats && p.stats.total) || e.playersCount,
      url: "https://www.dg-edge.com" + e.slug
    });
  }
  const ids = new Set(races.map(r => r.id));

  // 2. Each driver's result in those races (public player events, newest first)
  const times = {};
  await Promise.all((window.EDGE_IDS || []).map(async psn => {
    try {
      const r = await post("b.players.retrievePlayerEvents", { onlineId: psn, page: 1 });
      for (const ev of (r.payload && r.payload.list) || []) {
        if (!ids.has(ev.id) || !ev.playerResult) continue;
        const pr = ev.playerResult;
        (times[psn] = times[psn] || {})[ev.dailyType] = {
          ms: pr.timeMS, time: pr.time, pos: pr.globalPosition, posPT: pr.countryPosition,
          car: pr.car ? `${pr.car.brand} ${pr.car.name}` : ""
        };
      }
    } catch (err) { console.warn(psn, err); }
  }));
  window.EDGE_DAILIES_RESULT = { races, times };
  return window.EDGE_DAILIES_RESULT;
})();
