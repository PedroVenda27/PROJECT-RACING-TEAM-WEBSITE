/* =====================================================================
   EDGE-DAILIES.JS — as 3 Daily Races (A/B/C) da semana atual do GT7 e o
   tempo de cada piloto RTP em cada uma (DG-Edge). Página do piloto.
   Atualizado de hora a hora (tarefa "rtp-edge-diario",
   coletor tools/edge-dailies.js).
   races: lead = tempo do líder mundial em ms · times: { PSN: { A|B|C: {...} } }
   (piloto sem tempo numa diária = não correu essa diária ainda)
   ===================================================================== */
const EDGE_DAILIES = {
  updated: "2026-10-20",
  updatedAt: "2026-10-20T22:09:00+01:00",
  races: [
    {"type":"A","id":677,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Circuit Gilles-Villeneuve","car":"Ferrari Enzo Ferrari '02","tyres":"SS","lead":94293,"leader":"Á. Tápai","players":9700,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-a-circuit-gilles-villeneuve/677"},
    {"type":"B","id":678,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Autódromo de Interlagos","car":"Gr.3","tyres":"RH","lead":92568,"leader":"Ryun｜R. Hayashi","players":28047,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-b-autodromo-de-interlagos/678"},
    {"type":"C","id":679,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Suzuka Circuit","car":"Gr.2","tyres":"RM","lead":104564,"leader":"D. Chafe","players":17603,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-c-suzuka-circuit/679"}
  ],
  times: {
    "pastorenrabador": {"B":{"ms":94681,"time":"01:34.681","pos":3246,"posPT":63,"car":"Volkswagen Beetle Gr.3"}},
    "Wilson_TheFirst": {"B":{"ms":93853,"time":"01:33.853","pos":556,"posPT":15,"car":"Nissan GT-R NISMO GT3 '18"}},
    "pandafrass": {"B":{"ms":93666,"time":"01:33.666","pos":390,"posPT":10,"car":"Toyota GR Supra Racing Concept '18"}},
    "Caceteira_RTP": {"B":{"ms":93554,"time":"01:33.554","pos":265,"posPT":7,"car":"Toyota GR Supra Racing Concept '18"}},
    "RafaelAgostinh44": {"B":{"ms":93735,"time":"01:33.735","pos":160,"posPT":2,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "CyberserGT": {"B":{"ms":93733,"time":"01:33.733","pos":115,"posPT":1,"car":"Jaguar F-type Gr.3"}},
    "mattifroskes": {"B":{"ms":94315,"time":"01:34.315","pos":1369,"posPT":29,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "Travincas24": {"B":{"ms":93833,"time":"01:33.833","pos":695,"posPT":18,"car":"Jaguar F-type Gr.3"}},
    "Luisikon_TCHT": {"B":{"ms":95005,"time":"01:35.005","pos":4031,"posPT":74,"car":"Toyota GR Supra Racing Concept '18"}},
    "LeonnardoYR_": {"B":{"ms":93377,"time":"01:33.377","pos":132,"posPT":2,"car":"Toyota GR Supra Racing Concept '18"}},
    "LuisHGarcia": {"B":{"ms":95829,"time":"01:35.829","pos":8792,"posPT":175,"car":"BMW M6 GT3 Sprint Model '16"}},
    "SemDestino75": {"B":{"ms":95410,"time":"01:35.410","pos":6188,"posPT":118,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "granadas10": {"B":{"ms":94271,"time":"01:34.271","pos":953,"posPT":22,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "Pinto_Moreira": {"B":{"ms":94717,"time":"01:34.717","pos":928,"posPT":73,"car":"Alfa Romeo 4C Gr.3"}},
    "FVenda117": {"C":{"ms":108027,"time":"01:48.027","pos":1687,"posPT":27,"car":"Nissan GT-R NISMO GT500 '16"},"B":{"ms":94665,"time":"01:34.665","pos":1222,"posPT":23,"car":"Nissan GT-R NISMO GT3 '18"}}
  }
};
