/* =====================================================================
   EDGE-COLLECT.JS — recolhe os dados públicos do DG-Edge dos pilotos RTP.
   Corre-se na consola do browser com uma página de www.dg-edge.com aberta
   (o DG-Edge bloqueia pedidos automáticos fora do browser).
   Devolve { "PSN_ID": { dr, sr, score, global, country, events, delta } }.
   Usado pela atualização diária do site (js/edge-stats.js).
   ===================================================================== */
(async (ids) => {
  const out = {};
  for (const id of ids) {
    try {
      const r = await fetch("/players/" + encodeURIComponent(id), { credentials: "include" });
      if (!r.ok) { out[id] = { error: r.status }; continue; }
      const doc = new DOMParser().parseFromString(await r.text(), "text/html");
      const t = (doc.body.textContent || "").replace(/\s+/g, " ");
      const val = re => { const m = t.match(re); return m ? m[1].trim() : null; };
      const ratings = t.match(/\b([A-E]\+?)\s+([SA-E])\s*[A-Za-z0-9_\-]+ · /);
      out[id] = {
        dr: ratings ? ratings[1] : null,
        sr: ratings ? ratings[2] : null,
        score: val(/([\d.]+)\s*EDGE SCORE/i),
        global: val(/(~?[\d.,]+k?)\s*GLOBAL POSITION/i),   // e.g. "1154" or "~110k"
        country: val(/(~?[\d.,]+k?)\s*COUNTRY POSITION/i),
        events: val(/([\d.,]+)\s*EVENTS ATTENDED/i),
        delta: val(/([+\-]?[\d.]+%)\s*AVG\. DELTA/i)
      };
    } catch (e) {
      out[id] = { error: e.message };
    }
  }
  return out;
})(window.EDGE_IDS || []);
