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
  updated: "2026-11-11",
  updatedAt: "2026-11-11T00:08:00+00:00",
  races: [
    {"type":"A","id":694,"week":46,"year":2026,"from":"2026-11-09 08:00:00","to":"2026-11-16 07:59:59","track":"Suzuka Circuit — East Course","car":"Honda Integra Type R (DC2) '95","tyres":"CS","lead":59950,"leader":"BW-_ららぴぴ","players":10414,"url":"https://www.dg-edge.com/events/dailies/week-46-2026-race-a-suzuka-circuit-east-course/694"},
    {"type":"B","id":695,"week":46,"year":2026,"from":"2026-11-09 08:00:00","to":"2026-11-16 07:59:59","track":"Trial Mountain Circuit","car":"Gr.4","tyres":"RM","lead":119089,"leader":"Sillon","players":20068,"url":"https://www.dg-edge.com/events/dailies/week-46-2026-race-b-trial-mountain-circuit/695"},
    {"type":"C","id":696,"week":46,"year":2026,"from":"2026-11-09 08:00:00","to":"2026-11-16 07:59:59","track":"Michelin Raceway Road Atlanta","car":"Gr.3","tyres":"RM, RS","lead":75918,"leader":"D. Chafe","players":34957,"url":"https://www.dg-edge.com/events/dailies/week-46-2026-race-c-michelin-raceway-road-atlanta/696"}
  ],
  times: {
    "Caceteira_RTP": {"A":{"ms":60643,"time":"01:00.643","pos":93,"posPT":2,"car":"Honda Integra Type R (DC2) '95"}},
    "mattifroskes": {"B":{"ms":120846,"time":"02:00.846","pos":365,"posPT":8,"car":"Audi TT Cup '16"}},
    "KajuNN": {"C":{"ms":76604,"time":"01:16.604","pos":78,"posPT":2,"car":"Toyota GR Supra Racing Concept '18"},"B":{"ms":120317,"time":"02:00.317","pos":39,"posPT":1,"car":"Audi TT Cup '16"}},
    "Wilson_TheFirst": {"C":{"ms":76841,"time":"01:16.841","pos":282,"posPT":9,"car":"Toyota GR Supra Racing Concept '18"}},
    "pandafrass": {"C":{"ms":76937,"time":"01:16.937","pos":450,"posPT":12,"car":"Toyota GR Supra Racing Concept '18"}},
    "LeonnardoYR_": {"C":{"ms":77791,"time":"01:17.791","pos":3015,"posPT":55,"car":"Toyota GR Supra Racing Concept '18"}},
    "Travincas24": {"C":{"ms":77336,"time":"01:17.336","pos":1155,"posPT":23,"car":"BMW M6 GT3 Sprint Model '16"}},
    "temp-0955713": {"B":{"ms":123118,"time":"02:03.118","pos":4259,"posPT":77,"car":"Audi TT Cup '16"}},
    "Pinto_Moreira": {"B":{"ms":121236,"time":"02:01.236","pos":776,"posPT":47,"car":"Audi TT Cup '16"}},
    "tiagofreitas_27": {"C":{"ms":78255,"time":"01:18.255","pos":3615,"posPT":66,"car":"Lexus RC F GT3 '17"}},
    "SemDestino75": {"C":{"ms":78843,"time":"01:18.843","pos":9193,"posPT":169,"car":"Volkswagen Beetle Gr.3"}},
    "laferia777": {"C":{"ms":79227,"time":"01:19.227","pos":11274,"posPT":191,"car":"Toyota GR Supra Racing Concept '18"}},
    "granadas10": {"C":{"ms":77979,"time":"01:17.979","pos":2482,"posPT":44,"car":"Subaru WRX Gr.3"}},
    "FVenda117": {"B":{"ms":121579,"time":"02:01.579","pos":1190,"posPT":30,"car":"Audi TT Cup '16"}}
  },
  history: [
    { week: 45, year: 2026,
      races: [
        {"type":"A","id":689,"week":45,"year":2026,"from":"2026-11-02 08:00:00","to":"2026-11-09 07:59:59","track":"Dragon Trail — Gardens","car":"Chevrolet Corvette Convertible (C3) '69","tyres":"CS","lead":111739,"leader":"AT__1826","players":19658,"url":"https://www.dg-edge.com/events/dailies/week-45-2026-race-a-dragon-trail-gardens/689"},
        {"type":"B","id":690,"week":45,"year":2026,"from":"2026-11-02 08:00:00","to":"2026-11-09 07:59:59","track":"Grand Valley — Highway 1","car":"Gr.3","tyres":"RM","lead":106313,"leader":"NaiF","players":58562,"url":"https://www.dg-edge.com/events/dailies/week-45-2026-race-b-grand-valley-highway-1/690"},
        {"type":"C","id":691,"week":45,"year":2026,"from":"2026-11-02 08:00:00","to":"2026-11-09 07:59:59","track":"Watkins Glen International — Long Course","car":"Gr.4","tyres":"RH, RM","lead":113834,"leader":"RTR_Nyjah","players":45148,"url":"https://www.dg-edge.com/events/dailies/week-45-2026-race-c-watkins-glen-international-long-course/691"}
      ],
      times: {
        "Caceteira_RTP": {"C":{"ms":114724,"time":"01:54.724","pos":588,"posPT":20,"car":"Audi TT Cup '16"}},
        "mattifroskes": {"C":{"ms":114707,"time":"01:54.707","pos":553,"posPT":19,"car":"Audi TT Cup '16"}},
        "pandafrass": {"C":{"ms":114922,"time":"01:54.922","pos":1017,"posPT":32,"car":"Audi TT Cup '16"},"B":{"ms":108097,"time":"01:48.097","pos":1145,"posPT":16,"car":"Toyota GR Supra Racing Concept '18"}},
        "FVenda117": {"C":{"ms":116106,"time":"01:56.106","pos":6237,"posPT":134,"car":"Audi TT Cup '16"},"B":{"ms":109292,"time":"01:49.292","pos":6620,"posPT":108,"car":"Toyota GR Supra Racing Concept '18"}},
        "KajuNN": {"C":{"ms":114495,"time":"01:54.495","pos":268,"posPT":9,"car":"Audi TT Cup '16"},"B":{"ms":107874,"time":"01:47.874","pos":707,"posPT":10,"car":"Toyota GR Supra Racing Concept '18"}},
        "temp-0955713": {"C":{"ms":117391,"time":"01:57.391","pos":14455,"posPT":270,"car":"Audi TT Cup '16"},"B":{"ms":112141,"time":"01:52.141","pos":31323,"posPT":478,"car":"Toyota GR Supra Racing Concept '18"}},
        "granadas10": {"C":{"ms":115391,"time":"01:55.391","pos":2534,"posPT":68,"car":"Audi TT Cup '16"}},
        "laferia777": {"B":{"ms":109735,"time":"01:49.735","pos":9739,"posPT":151,"car":"Toyota GR Supra Racing Concept '18"}},
        "LeonnardoYR_": {"C":{"ms":114564,"time":"01:54.564","pos":357,"posPT":14,"car":"Audi TT Cup '16"}},
        "SemDestino75": {"C":{"ms":116957,"time":"01:56.957","pos":11556,"posPT":215,"car":"Hyundai ELANTRA N TC '24"},"B":{"ms":109645,"time":"01:49.645","pos":8991,"posPT":138,"car":"Toyota GR Supra Racing Concept '18"}},
        "LuisHGarcia": {"B":{"ms":110327,"time":"01:50.327","pos":14982,"posPT":233,"car":"BMW M6 GT3 Sprint Model '16"}},
        "Wilson_TheFirst": {"B":{"ms":107738,"time":"01:47.738","pos":505,"posPT":8,"car":"Toyota GR Supra Racing Concept '18"}},
        "tiagofreitas_27": {"B":{"ms":109356,"time":"01:49.356","pos":7064,"posPT":119,"car":"Toyota GR Supra Racing Concept '18"}},
        "Pinto_Moreira": {"C":{"ms":114743,"time":"01:54.743","pos":618,"posPT":40,"car":"Audi TT Cup '16"}}
      } },
    { week: 44, year: 2026,
      races: [
        {"type":"A","id":681,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Nissan Fairlady Z (Z34) '08","tyres":"SH","lead":94466,"leader":"AT__1826","players":26217,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-a-sugo-international-racing-course/681"},
        {"type":"B","id":682,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"Willow Springs International Raceway — Big Willow","car":"Gr.4","tyres":"RH","lead":78798,"leader":"RTR_Nyjah","players":41092,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-b-willow-springs-international-raceway-big-willow/682"},
        {"type":"C","id":683,"week":44,"year":2026,"from":"2026-10-26 08:00:00","to":"2026-11-02 07:59:59","track":"SUGO International Racing Course","car":"Gr.3","tyres":"RM, RS","lead":75972,"leader":"K. Drumont","players":67097,"url":"https://www.dg-edge.com/events/dailies/week-44-2026-race-c-sugo-international-racing-course/683"}
      ],
      times: {
        "FVenda117": {"C":{"ms":77885,"time":"01:17.885","pos":5095,"posPT":81,"car":"Subaru BRZ GT300 '21"},"B":{"ms":80116,"time":"01:20.116","pos":1699,"posPT":29,"car":"Audi TT Cup '16"}},
        "Caceteira_RTP": {"B":{"ms":79442,"time":"01:19.442","pos":193,"posPT":5,"car":"Audi TT Cup '16"}},
        "BrunoCm1997": {"B":{"ms":79341,"time":"01:19.341","pos":119,"posPT":3,"car":"Audi TT Cup '16"}},
        "LuisHGarcia": {"B":{"ms":80602,"time":"01:20.602","pos":4036,"posPT":78,"car":"Audi TT Cup '16"}},
        "mattifroskes": {"B":{"ms":79596,"time":"01:19.596","pos":365,"posPT":13,"car":"Audi TT Cup '16"}},
        "granadas10": {"C":{"ms":78039,"time":"01:18.039","pos":6365,"posPT":104,"car":"Subaru BRZ GT300 '21"}},
        "SemDestino75": {"C":{"ms":78880,"time":"01:18.880","pos":17121,"posPT":262,"car":"BMW M6 GT3 Sprint Model '16"},"B":{"ms":80706,"time":"01:20.706","pos":4941,"posPT":94,"car":"Audi TT Cup '16"}},
        "LeonnardoYR_": {"C":{"ms":77934,"time":"01:17.934","pos":5394,"posPT":82,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79570,"time":"01:19.570","pos":330,"posPT":10,"car":"Audi TT Cup '16"}},
        "Wilson_TheFirst": {"C":{"ms":77124,"time":"01:17.124","pos":791,"posPT":12,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79494,"time":"01:19.494","pos":241,"posPT":7,"car":"Audi TT Cup '16"}},
        "laferia777": {"C":{"ms":78908,"time":"01:18.908","pos":17468,"posPT":266,"car":"Subaru BRZ GT300 '21"},"B":{"ms":81584,"time":"01:21.584","pos":11723,"posPT":204,"car":"Audi TT Cup '16"}},
        "pandafrass": {"C":{"ms":77413,"time":"01:17.413","pos":1803,"posPT":28,"car":"Subaru BRZ GT300 '21"},"B":{"ms":79696,"time":"01:19.696","pos":546,"posPT":16,"car":"Lamborghini Huracán Gr.4"}},
        "Pinto_Moreira": {"B":{"ms":79704,"time":"01:19.704","pos":548,"posPT":25,"car":"Audi TT Cup '16"}}
      } },
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
      } },
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
      } },
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
      } }
  ]
};
