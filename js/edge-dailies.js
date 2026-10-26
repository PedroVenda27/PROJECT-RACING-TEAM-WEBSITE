/* =====================================================================
   EDGE-DAILIES.JS — as 3 Daily Races (A/B/C) da semana atual do GT7 e o
   tempo de cada piloto RTP em cada uma (DG-Edge). Página do piloto.
   Atualizado de hora a hora (tarefa "rtp-edge-diario",
   coletor tools/edge-dailies.js).
   races: lead = tempo do líder mundial em ms · times: { PSN: { A|B|C: {...} } }
   (piloto sem tempo numa diária = não correu essa diária ainda)
   ===================================================================== */
const EDGE_DAILIES = {
  updated: "2026-10-26",
  updatedAt: "2026-10-26T11:46:00+00:00",
  races: [
    {"type":"A","id":681,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Nissan Fairlady Z (Z34) '08","tyres":"SH","lead":95198,"leader":"holl01","players":1906,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-a-sugo-international-racing-course/681"},
    {"type":"B","id":682,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"Willow Springs International Raceway — Big Willow","car":"Gr.4","tyres":"RH","lead":79178,"leader":"S. Inui","players":3384,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-b-willow-springs-international-raceway-big-willow/682"},
    {"type":"C","id":683,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Gr.3","tyres":"RM, RS","lead":76383,"leader":"M. Sedziak","players":5612,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-c-sugo-international-racing-course/683"}
  ],
  times: {
    "SemDestino75": {"B":{"ms":81824,"time":"01:21.824","pos":1186,"posPT":14,"car":"Hyundai ELANTRA N TC '24"}}
  }
};
