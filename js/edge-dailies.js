/* =====================================================================
   EDGE-DAILIES.JS — as 3 Daily Races (A/B/C) da semana atual do GT7 e o
   tempo de cada piloto RTP em cada uma (DG-Edge). Página do piloto.
   Atualizado de hora a hora (tarefa "rtp-edge-diario",
   coletor tools/edge-dailies.js).
   races: lead = tempo do líder mundial em ms · times: { PSN: { A|B|C: {...} } }
   (piloto sem tempo numa diária = não correu essa diária ainda)
   ===================================================================== */
const EDGE_DAILIES = {
  updated: "2026-10-24",
  updatedAt: "2026-10-24T23:03:00+01:00",
  races: [
    {"type":"A","id":677,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Circuit Gilles-Villeneuve","car":"Ferrari Enzo Ferrari '02","tyres":"SS","lead":93820,"leader":"Á. Tápai","players":21781,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-a-circuit-gilles-villeneuve/677"},
    {"type":"B","id":678,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Autódromo de Interlagos","car":"Gr.3","tyres":"RH","lead":92390,"leader":"K. de Bruin","players":62659,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-b-autodromo-de-interlagos/678"},
    {"type":"C","id":679,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Suzuka Circuit","car":"Gr.2","tyres":"RM","lead":104359,"leader":"D. Chafe","players":37285,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-c-suzuka-circuit/679"}
  ],
  times: {
    "FVenda117": {"C":{"ms":107448,"time":"01:47.448","pos":3557,"posPT":76,"car":"Honda NSX CONCEPT-GT '16"},"B":{"ms":94665,"time":"01:34.665","pos":4400,"posPT":82,"car":"Nissan GT-R NISMO GT3 '18"}},
    "Wilson_TheFirst": {"B":{"ms":93310,"time":"01:33.310","pos":275,"posPT":8,"car":"Nissan GT-R NISMO GT3 '18"}},
    "pandafrass": {"B":{"ms":93590,"time":"01:33.590","pos":620,"posPT":17,"car":"Toyota GR Supra Racing Concept '18"}},
    "RafaelAgostinh44": {"B":{"ms":93436,"time":"01:33.436","pos":384,"posPT":11,"car":"Toyota GR Supra Racing Concept '18"}},
    "Caceteira_RTP": {"B":{"ms":93246,"time":"01:33.246","pos":319,"posPT":8,"car":"Toyota GR Supra Racing Concept '18"}},
    "Travincas24": {"B":{"ms":93669,"time":"01:33.669","pos":671,"posPT":20,"car":"Jaguar F-type Gr.3"}},
    "mattifroskes": {"B":{"ms":93899,"time":"01:33.899","pos":1409,"posPT":33,"car":"Toyota GR Supra Racing Concept '18"}},
    "LeonnardoYR_": {"B":{"ms":93282,"time":"01:33.282","pos":255,"posPT":6,"car":"Toyota GR Supra Racing Concept '18"}},
    "CyberserGT": {"B":{"ms":93733,"time":"01:33.733","pos":764,"posPT":21,"car":"Jaguar F-type Gr.3"}},
    "SemDestino75": {"B":{"ms":94804,"time":"01:34.804","pos":6980,"posPT":129,"car":"Toyota GR Supra Racing Concept '18"}},
    "laferia777": {"B":{"ms":95134,"time":"01:35.134","pos":9730,"posPT":181,"car":"Toyota GR Supra Racing Concept '18"}},
    "Luisikon_TCHT": {"B":{"ms":95005,"time":"01:35.005","pos":7060,"posPT":129,"car":"Toyota GR Supra Racing Concept '18"}},
    "LuisHGarcia": {"B":{"ms":95829,"time":"01:35.829","pos":15736,"posPT":296,"car":"BMW M6 GT3 Sprint Model '16"}},
    "granadas10": {"B":{"ms":94271,"time":"01:34.271","pos":2353,"posPT":45,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
    "Pinto_Moreira": {"B":{"ms":94717,"time":"01:34.717","pos":4780,"posPT":367,"car":"Alfa Romeo 4C Gr.3"}}
  }
};
