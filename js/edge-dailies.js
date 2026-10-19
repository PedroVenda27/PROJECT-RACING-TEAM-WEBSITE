/* =====================================================================
   EDGE-DAILIES.JS — as 3 Daily Races (A/B/C) da semana atual do GT7 e o
   tempo de cada piloto RTP em cada uma (DG-Edge). Página do piloto.
   Atualizado todos os dias às 09:00 (tarefa "rtp-edge-diario",
   coletor tools/edge-dailies.js).
   races: lead = tempo do líder mundial em ms · times: { PSN: { A|B|C: {...} } }
   (piloto sem tempo numa diária = não correu essa diária ainda)
   ===================================================================== */
const EDGE_DAILIES = {
  updated: "2026-10-19",
  updatedAt: "2026-10-19T18:40:00+01:00",
  races: [
    {"type":"A","id":677,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Circuit Gilles-Villeneuve","car":"Ferrari Enzo Ferrari '02","tyres":"SS","lead":94293,"leader":"Á. Tápai","players":4795,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-a-circuit-gilles-villeneuve/677"},
    {"type":"B","id":678,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Autódromo de Interlagos","car":"Gr.3","tyres":"RH","lead":92667,"leader":"K. Drumont","players":9374,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-b-autodromo-de-interlagos/678"},
    {"type":"C","id":679,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Suzuka Circuit","car":"Gr.2","tyres":"RM","lead":104810,"leader":"N.Baglioni","players":7755,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-c-suzuka-circuit/679"}
  ],
  times: {
    "pandafrass": {"B":{"ms":93766,"time":"01:33.766","pos":239,"posPT":3,"car":"Jaguar F-type Gr.3"}},
    "RafaelAgostinh44": {"B":{"ms":93735,"time":"01:33.735","pos":160,"posPT":2,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "pastorenrabador": {"B":{"ms":94681,"time":"01:34.681","pos":886,"posPT":13,"car":"Volkswagen Beetle Gr.3"}},
    "CyberserGT": {"B":{"ms":93733,"time":"01:33.733","pos":115,"posPT":1,"car":"Jaguar F-type Gr.3"}},
    "FVenda117": {"C":{"ms":108027,"time":"01:48.027","pos":1687,"posPT":27,"car":"Nissan GT-R NISMO GT500 '16"},"B":{"ms":94665,"time":"01:34.665","pos":1222,"posPT":23,"car":"Nissan GT-R NISMO GT3 '18"}},
    "SemDestino75": {"B":{"ms":95921,"time":"01:35.921","pos":3342,"posPT":44,"car":"Jaguar F-type Gr.3"}},
    "mattifroskes": {"B":{"ms":94484,"time":"01:34.484","pos":815,"posPT":12,"car":"Volkswagen Beetle Gr.3"}},
    "Pinto_Moreira": {"B":{"ms":94717,"time":"01:34.717","pos":928,"posPT":73,"car":"Alfa Romeo 4C Gr.3"}}
  }
};
