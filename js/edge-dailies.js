/* =====================================================================
   EDGE-DAILIES.JS — as 3 Daily Races (A/B/C) da semana atual do GT7 e o
   tempo de cada piloto RTP em cada uma (DG-Edge). Página do piloto.
   Atualizado de hora a hora (tarefa "rtp-edge-diario",
   coletor tools/edge-dailies.js).
   races: lead = tempo do líder mundial em ms · times: { PSN: { A|B|C: {...} } }
   (piloto sem tempo numa diária = não correu essa diária ainda)
   history: semanas anteriores { week, year, races, times }, mais recente primeiro
   ===================================================================== */
const EDGE_DAILIES = {
  updated: "2026-10-29",
  updatedAt: "2026-10-29T13:31:00+00:00",
  races: [
    {"type":"A","id":681,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Nissan Fairlady Z (Z34) '08","tyres":"SH","lead":94609,"leader":"holl01","players":16936,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-a-sugo-international-racing-course/681"},
    {"type":"B","id":682,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"Willow Springs International Raceway — Big Willow","car":"Gr.4","tyres":"RH","lead":78951,"leader":"RTR_Nyjah","players":27971,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-b-willow-springs-international-raceway-big-willow/682"},
    {"type":"C","id":683,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Gr.3","tyres":"RM, RS","lead":76008,"leader":"K. Drumont","players":48334,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-c-sugo-international-racing-course/683"}
  ],
  times: {
    "Caceteira_RTP": {"B":{"ms":79442,"time":"01:19.442","pos":104,"posPT":3,"car":"Audi TT Cup '16"}},
    "pandafrass": {"C":{"ms":77413,"time":"01:17.413","pos":1269,"posPT":25,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79696,"time":"01:19.696","pos":318,"posPT":12,"car":"Lamborghini Huracán Gr.4"}},
    "mattifroskes": {"B":{"ms":79845,"time":"01:19.845","pos":538,"posPT":15,"car":"Audi TT Cup '16"}},
    "granadas10": {"C":{"ms":78039,"time":"01:18.039","pos":4650,"posPT":87,"car":"Subaru BRZ GT300 '21"}},
    "LuisHGarcia": {"B":{"ms":80602,"time":"01:20.602","pos":2818,"posPT":55,"car":"Audi TT Cup '16"}},
    "SemDestino75": {"C":{"ms":79590,"time":"01:19.590","pos":19427,"posPT":314,"car":"Subaru BRZ GT300 '21"},"B":{"ms":80722,"time":"01:20.722","pos":3384,"posPT":65,"car":"Audi TT Cup '16"}},
    "laferia777": {"C":{"ms":78908,"time":"01:18.908","pos":12410,"posPT":188,"car":"Subaru BRZ GT300 '21"}},
    "LeonnardoYR_": {"C":{"ms":77934,"time":"01:17.934","pos":3927,"posPT":67,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79588,"time":"01:19.588","pos":215,"posPT":10,"car":"Audi TT Cup '16"}},
    "BrunoCm1997": {"B":{"ms":79461,"time":"01:19.461","pos":114,"posPT":5,"car":"Audi TT Cup '16"}},
    "FVenda117": {"C":{"ms":77885,"time":"01:17.885","pos":3513,"posPT":63,"car":"Subaru BRZ GT300 '21"},"B":{"ms":80116,"time":"01:20.116","pos":1076,"posPT":20,"car":"Audi TT Cup '16"}},
    "Wilson_TheFirst": {"C":{"ms":77124,"time":"01:17.124","pos":597,"posPT":12,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79494,"time":"01:19.494","pos":137,"posPT":7,"car":"Audi TT Cup '16"}},
    "Pinto_Moreira": {"B":{"ms":79852,"time":"01:19.852","pos":545,"posPT":19,"car":"Audi TT Cup '16"}}
  },
  // past weeks, newest first (kept for the week selector on the driver page)
  history: [
    { week: 43, year: 2026,
      races: [
        {"type":"A","id":677,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Circuit Gilles-Villeneuve","car":"Ferrari Enzo Ferrari '02","tyres":"SS","lead":93820,"leader":"Á. Tápai","players":28378,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-a-circuit-gilles-villeneuve/677"},
        {"type":"B","id":678,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Autódromo de Interlagos","car":"Gr.3","tyres":"RH","lead":92330,"leader":"S.Spallanzani","players":78889,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-b-autodromo-de-interlagos/678"},
        {"type":"C","id":679,"week":43,"year":2026,"from":"2026-10-19 09:00:00","to":"2026-10-26 07:59:59","track":"Suzuka Circuit","car":"Gr.2","tyres":"RM","lead":104296,"leader":"D. Chafe","players":45914,"url":"https://www.dg-edge.com/events/dailies/week-43-2026-race-c-suzuka-circuit/679"}
      ],
      times: {
        "Caceteira_RTP": {"B":{"ms":93246,"time":"01:33.246","pos":361,"posPT":9,"car":"Toyota GR Supra Racing Concept '18"}},
        "FVenda117": {"C":{"ms":107448,"time":"01:47.448","pos":5315,"posPT":113,"car":"Honda NSX CONCEPT-GT '16"},"B":{"ms":94665,"time":"01:34.665","pos":6900,"posPT":129,"car":"Nissan GT-R NISMO GT3 '18"}},
        "LeonnardoYR_": {"B":{"ms":93282,"time":"01:33.282","pos":394,"posPT":11,"car":"Toyota GR Supra Racing Concept '18"}},
        "granadas10": {"B":{"ms":94271,"time":"01:34.271","pos":3631,"posPT":69,"car":"Mitsubishi Lancer Evolution Final Gr.3"}},
        "CyberserGT": {"B":{"ms":93733,"time":"01:33.733","pos":1213,"posPT":28,"car":"Jaguar F-type Gr.3"}},
        "Luisikon_TCHT": {"B":{"ms":95005,"time":"01:35.005","pos":11276,"posPT":215,"car":"Toyota GR Supra Racing Concept '18"}},
        "SemDestino75": {"B":{"ms":94804,"time":"01:34.804","pos":8557,"posPT":163,"car":"Toyota GR Supra Racing Concept '18"}},
        "Pinto_Moreira": {"B":{"ms":94717,"time":"01:34.717","pos":7481,"posPT":575,"car":"Alfa Romeo 4C Gr.3"}},
        "laferia777": {"B":{"ms":94764,"time":"01:34.764","pos":8041,"posPT":150,"car":"Toyota GR Supra Racing Concept '18"}},
        "mattifroskes": {"B":{"ms":93899,"time":"01:33.899","pos":1766,"posPT":40,"car":"Toyota GR Supra Racing Concept '18"}},
        "RafaelAgostinh44": {"B":{"ms":93436,"time":"01:33.436","pos":587,"posPT":16,"car":"Toyota GR Supra Racing Concept '18"}},
        "Travincas24": {"B":{"ms":93669,"time":"01:33.669","pos":1064,"posPT":25,"car":"Jaguar F-type Gr.3"}},
        "Wilson_TheFirst": {"B":{"ms":93310,"time":"01:33.310","pos":430,"posPT":12,"car":"Nissan GT-R NISMO GT3 '18"}},
        "pandafrass": {"B":{"ms":93590,"time":"01:33.590","pos":888,"posPT":22,"car":"Toyota GR Supra Racing Concept '18"}},
        "LuisHGarcia": {"B":{"ms":95829,"time":"01:35.829","pos":25119,"posPT":462,"car":"BMW M6 GT3 Sprint Model '16"}},
        "temp-0955713": {"B":{"ms":94681,"time":"01:34.681","pos":7066,"posPT":136,"car":"Volkswagen Beetle Gr.3"}}
      }
    },
    { week: 42, year: 2026,
      races: [
        {"type":"A","id":673,"week":42,"year":2026,"from":"2026-10-12 09:00:00","to":"2026-10-19 08:59:59","track":"Red Bull Ring","car":"Gran Turismo Red Bull X2014 Junior","tyres":"RH","lead":88236,"leader":"Zé Zé","players":40314,"url":"https://www.dg-edge.com/events/dailies/week-42-2026-race-a-red-bull-ring/673"},
        {"type":"B","id":674,"week":42,"year":2026,"from":"2026-10-12 09:00:00","to":"2026-10-19 08:59:59","track":"Circuit de Spa-Francorchamps","car":"Gr.3","tyres":"RM","lead":136510,"leader":"K. de Bruin","players":85304,"url":"https://www.dg-edge.com/events/dailies/week-42-2026-race-b-circuit-de-spa-francorchamps/674"},
        {"type":"C","id":675,"week":42,"year":2026,"from":"2026-10-12 09:00:00","to":"2026-10-19 08:59:59","track":"Sardegna - Road Track — Layout B","car":"Gr.4","tyres":"RM, RS","lead":82955,"leader":"RTR_Nyjah","players":32111,"url":"https://www.dg-edge.com/events/dailies/week-42-2026-race-c-sardegna-road-track-layout-b/675"}
      ],
      times: {
        "Caceteira_RTP": {"B":{"ms":139556,"time":"02:19.556","pos":8363,"posPT":158,"car":"Hyundai Genesis Gr.3"},"A":{"ms":89330,"time":"01:29.330","pos":224,"posPT":9,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "Be_Mad_PT": {"A":{"ms":91160,"time":"01:31.160","pos":6235,"posPT":94,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "FVenda117": {"B":{"ms":139914,"time":"02:19.914","pos":12118,"posPT":219,"car":"Hyundai Genesis Gr.3"}},
        "LeonnardoYR_": {"C":{"ms":84632,"time":"01:24.632","pos":2929,"posPT":59,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":138015,"time":"02:18.015","pos":809,"posPT":13,"car":"Toyota GR Supra Racing Concept '18"}},
        "granadas10": {"B":{"ms":138560,"time":"02:18.560","pos":2191,"posPT":41,"car":"Jaguar F-type Gr.3"}},
        "SemDestino75": {"C":{"ms":87670,"time":"01:27.670","pos":16863,"posPT":285,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":150130,"time":"02:30.130","pos":79949,"posPT":1212,"car":"Toyota FT-1 VGT (Gr.3)"},"A":{"ms":90469,"time":"01:30.469","pos":2455,"posPT":46,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "Pinto_Moreira": {"C":{"ms":84734,"time":"01:24.734","pos":3297,"posPT":248,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":139409,"time":"02:19.409","pos":7132,"posPT":585,"car":"Hyundai Genesis Gr.3"},"A":{"ms":89729,"time":"01:29.729","pos":633,"posPT":46,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "laferia777": {"C":{"ms":88233,"time":"01:28.233","pos":19084,"posPT":318,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":142695,"time":"02:22.695","pos":46273,"posPT":740,"car":"Hyundai Genesis Gr.3"},"A":{"ms":91779,"time":"01:31.779","pos":11175,"posPT":184,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "mattifroskes": {"B":{"ms":139037,"time":"02:19.037","pos":4573,"posPT":95,"car":"BMW M6 GT3 Sprint Model '16"},"A":{"ms":89790,"time":"01:29.790","pos":731,"posPT":24,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "RafaelAgostinh44": {"B":{"ms":138725,"time":"02:18.725","pos":2906,"posPT":62,"car":"Jaguar F-type Gr.3"},"A":{"ms":88958,"time":"01:28.958","pos":61,"posPT":3,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "Travincas24": {"B":{"ms":138876,"time":"02:18.876","pos":3634,"posPT":81,"car":"Hyundai Genesis Gr.3"}},
        "N17_nuno": {"B":{"ms":139717,"time":"02:19.717","pos":9935,"posPT":189,"car":"Hyundai Genesis Gr.3"}},
        "Wilson_TheFirst": {"B":{"ms":138235,"time":"02:18.235","pos":1230,"posPT":20,"car":"BMW M6 GT3 Sprint Model '16"},"A":{"ms":89034,"time":"01:29.034","pos":93,"posPT":5,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "pandafrass": {"C":{"ms":84393,"time":"01:24.393","pos":2113,"posPT":38,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":138597,"time":"02:18.597","pos":2337,"posPT":47,"car":"Jaguar F-type Gr.3"},"A":{"ms":89316,"time":"01:29.316","pos":215,"posPT":8,"car":"Gran Turismo Red Bull X2014 Junior"}},
        "LuisHGarcia": {"B":{"ms":140350,"time":"02:20.350","pos":16866,"posPT":298,"car":"Hyundai Genesis Gr.3"}},
        "temp-0955713": {"B":{"ms":140341,"time":"02:20.341","pos":16780,"posPT":294,"car":"Jaguar F-type Gr.3"},"A":{"ms":89985,"time":"01:29.985","pos":1092,"posPT":32,"car":"Gran Turismo Red Bull X2014 Junior"}}
      }
    },
    { week: 41, year: 2026,
      races: [
        {"type":"A","id":668,"week":41,"year":2026,"from":"2026-10-05 09:00:00","to":"2026-10-12 08:59:59","track":"Nürburgring — Grand Prix","car":"Nissan R34 GT-R V･spec II Nür '02","tyres":"SH","lead":135250,"leader":"Á. Tápai","players":26576,"url":"https://www.dg-edge.com/events/dailies/week-41-2026-race-a-nurburgring-grand-prix/668"},
        {"type":"B","id":669,"week":41,"year":2026,"from":"2026-10-05 09:00:00","to":"2026-10-12 08:59:59","track":"Kyoto Driving Park — Yamagiwa","car":"Gr.4","tyres":"RH","lead":101896,"leader":"拙者RBで候","players":55827,"url":"https://www.dg-edge.com/events/dailies/week-41-2026-race-b-kyoto-driving-park-yamagiwa/669"},
        {"type":"C","id":670,"week":41,"year":2026,"from":"2026-10-05 09:00:00","to":"2026-10-12 08:59:59","track":"Daytona International Speedway — Road Course","car":"Gr.3","tyres":"RH, RS","lead":104068,"leader":"M. Busnelli","players":65197,"url":"https://www.dg-edge.com/events/dailies/week-41-2026-race-c-daytona-international-speedway-road-course/670"}
      ],
      times: {
        "Caceteira_RTP": {"B":{"ms":103008,"time":"01:43.008","pos":353,"posPT":7,"car":"Hyundai ELANTRA N TC '24"}},
        "Pinto_Moreira": {"B":{"ms":103115,"time":"01:43.115","pos":500,"posPT":19,"car":"Hyundai ELANTRA N TC '24"}},
        "mattifroskes": {"C":{"ms":105950,"time":"01:45.950","pos":6849,"posPT":146,"car":"Jaguar F-type Gr.3"},"B":{"ms":103527,"time":"01:43.527","pos":1395,"posPT":32,"car":"Hyundai ELANTRA N TC '24"}},
        "RafaelAgostinh44": {"B":{"ms":103314,"time":"01:43.314","pos":860,"posPT":20,"car":"Hyundai ELANTRA N TC '24"}},
        "Travincas24": {"C":{"ms":105757,"time":"01:45.757","pos":5061,"posPT":109,"car":"Jaguar F-type Gr.3"}},
        "Wilson_TheFirst": {"C":{"ms":105028,"time":"01:45.028","pos":1028,"posPT":31,"car":"Jaguar F-type Gr.3"},"B":{"ms":103420,"time":"01:43.420","pos":1106,"posPT":24,"car":"Hyundai ELANTRA N TC '24"}},
        "temp-0955713": {"B":{"ms":103501,"time":"01:43.501","pos":1333,"posPT":27,"car":"Hyundai ELANTRA N TC '24"}},
        "SemDestino75": {"C":{"ms":106526,"time":"01:46.526","pos":13427,"posPT":265,"car":"Jaguar F-type Gr.3"},"B":{"ms":105417,"time":"01:45.417","pos":15598,"posPT":325,"car":"Hyundai ELANTRA N TC '24"}},
        "laferia777": {"C":{"ms":106972,"time":"01:46.972","pos":19382,"posPT":346,"car":"Jaguar F-type Gr.3"},"B":{"ms":106434,"time":"01:46.434","pos":25728,"posPT":509,"car":"Hyundai ELANTRA N TC '24"}},
        "pandafrass": {"C":{"ms":105410,"time":"01:45.410","pos":2574,"posPT":62,"car":"Jaguar F-type Gr.3"},"B":{"ms":103374,"time":"01:43.374","pos":993,"posPT":23,"car":"Hyundai ELANTRA N TC '24"}}
      }
    }
  ]
};
