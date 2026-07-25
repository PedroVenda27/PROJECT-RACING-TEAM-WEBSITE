/* =====================================================================
   DATA.JS — EDIT THIS FILE TO MANAGE DRIVERS, SPONSORS, LEAGUES & GALLERY
   =====================================================================
   
   HOW TO EDIT:
   • Each section below is a simple JavaScript array of objects.
   • To ADD an item: copy an existing object, paste it, and change the values.
   • To REMOVE an item: delete the entire { ... } block (including the comma).
   • Image paths are relative to the site root (e.g., "images/drivers/alex.jpg").
   • If you don't have an image yet, leave the path as "" and a placeholder will show.
   
   ===================================================================== */

const SITE_DATA = {

  /* ─────────────────────────────────────────────
     DRIVERS
     Fields: name, number, role, nationality, series, image, flag
     ───────────────────────────────────────────── */
  drivers: [
    {
      name: "Piloto do Mês",
      number: "00",
      role: "ExemploPiloto",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹",
      pilotoMes: true,
    },
    {
      name: "Piloto da Comunidade do Mês",
      number: "00",
      role: "ExemploPilotoComunidade",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹",
      pilotoComunidadeMes: true,
    },
    {
      name: "Pedro Venda",
      number: "27",
      role: "Fvenda117",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno Teixeira",
      number: "12",
      role: "BrunoCm1997",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Dias",
      number: "24",
      role: "Travincas24",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rodrigo Marques",
      number: "39",
      role: "Granadas10",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Wilson Barreto",
      number: "77",
      role: "Wilson_TheFirst",
      nationality: "Cabo Verde",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇨🇻"
    },
    {
      name: "Luís Dantas",
      number: "22",
      role: "luisikon_tcht",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Luís Miguel Ferreira",
      number: "9",
      role: "migskills99",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rafael Agostinho",
      number: "4",
      role: "RafaelAgostinh44",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Seixas",
      number: "89",
      role: "h_seixas13",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "João Festas",
      number: "16",
      role: "pastorenrabador",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Prost",
      number: "2",
      role: "Naigven",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "João Abreu",
      number: "87",
      role: "BadBlackCat87",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Nuno Bravo",
      number: "17",
      role: "N17_nuno",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "João Ferreira",
      number: "7",
      role: "JRLF13ACM77",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Sérgio Marques",
      number: "33",
      role: "CyberSerGT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Tiago Laginhas",
      number: "15",
      role: "Dinis_Hugo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Costa",
      number: "75",
      role: "SemDestino75",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Pinto Moreira",
      number: "42",
      role: "Pinto_Moreira",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Ricardo Gamito",
      number: "45",
      role: "PUPILO_2GA",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Miguel Cabral",
      number: "77",
      role: "mattifroskes",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Kwan Toledo",
      number: "13",
      role: "K7nG_OC3an",
      nationality: "Brasil",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251846059917895/458f983dc80f5e32894e13364ce60a50_body.png",
      flag: "🇧🇷"
    },
  ],

  /* ─────────────────────────────────────────────
     LEAGUES
     Fields: name, platform, description, logo, url
     ───────────────────────────────────────────── */
  leagues: [
    {
      name: "Liga Portugal GT",
      platform: "GT7",
      description: "Um dos mais recentes campeonatos de Gran Turismo 7 com 6 divisões e 90 pilotos.",
      logo: "images/LPGT_WORLDSERIES_LOGO.jpg",
      url: "https://www.youtube.com/@ligaportugalgttv"
    },
    {
      name: "TT Motorfest CUP - NCM",
      platform: "GT7",
      description: "Campeonato Solidário organizado pela NCM com entuito de levar a diversão do Gran Turismo 7 a crianças carenciadas.",
      logo: "images/NCM_MOTORFEST_LOGO.jpg",
      url: "https://www.youtube.com/@evolutionchampionshipserie7726"
    },
    {
      name: "Greyhound <br> Motorsports",
      platform: "GT7",
      description: "Organização de Eventos Sim Racing especializada em eventos Endurance.",
      logo: "images/GreyHonund6h_LOGO.png",
      url: ""
    },
    {
      name: "Taça <br> Portugal GT",
      platform: "GT7",
      description: "Taça de Portugal GT — Campeonato externo de Gran Turismo 7 que reúne as melhores equipas portuguesas de Sim Racing.",
      logo: "images/TPGT_LOGO.png",
      url: ""
    },
    {
      name: "Mazda MX-5 Cup",
      platform: "GT7",
      description: "Campeonato interno RTP Racing Team Project disputado no Gran Turismo 7 ao volante do Mazda MX-5, ao longo de 6 rondas.",
      logo: "images/MAZDA MX-5 CUP/MAZDA MX-5 CUP ICON.png",
      url: "inscricao.html"
    },
  ],

  /* ─────────────────────────────────────────────
     GALLERY
     Fields: image, caption, category (optional)
     ───────────────────────────────────────────── */
  gallery: [
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] },
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] },
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] },
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] },
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] },
    { event: "Brevemente", sub: "", category: "", cover: "", images: [] }
  ],

  /* ─────────────────────────────────────────────
     SPONSORS
     Fields: name, logo, url
     ───────────────────────────────────────────── */
  sponsors: [
    { name: "Instant Gaming", logo: "images/logo-instant-gaming-dark.png", url: "https://www.instant-gaming.com/?igr=racingteamproject" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" }
  ],

  /* ─────────────────────────────────────────────
     STANDINGS
     type "drivers": roundLabels + drivers[{name, rounds[], total}]
     rounds: null = DNS/DNP, number = points scored
     ───────────────────────────────────────────── */
  standings: [
    {
      competition: "mxcup",
      title: "Mazda MX-5 Cup",
      subtitle: "Gran Turismo 7 · RTP Racing Team Project",
      logo: "images/MAZDA MX-5 CUP/MAZDA MX-5 CUP ICON.png",
      type: "drivers",
      roundLabels: ["R1", "R2", "R3", "R4", "R5", "R6"],
      drivers: [
        { name: "João Ferreira",    driverRef: "João Ferreira",    rounds: [26,   38,   0, 0, 0, 0], total: 64 },
        { name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   rounds: [null, 50,   0, 0, 0, 0], total: 50 },
        { name: "João Abreu",       driverRef: "João Abreu",       rounds: [21,   27,   0, 0, 0, 0], total: 48 },
        { name: "Kwan Toledo",      driverRef: "Kwan Toledo",      rounds: [26,   16,   0, 0, 0, 0], total: 42 },
        { name: "Prost",            driverRef: "Prost",            rounds: [27,   12,   0, 0, 0, 0], total: 39 },
        { name: "Wilson Barreto",   driverRef: "Wilson Barreto",   rounds: [38,   null, 0, 0, 0, 0], total: 38 },
        { name: "Rafael Agostinho", driverRef: "Rafael Agostinho", rounds: [22,   13,   0, 0, 0, 0], total: 35 },
        { name: "Rodrigo Marques",  driverRef: "Rodrigo Marques",  rounds: [16,   16,   0, 0, 0, 0], total: 32 },
        { name: "João Festas",      driverRef: "João Festas",      rounds: [6,    10,   0, 0, 0, 0], total: 16 },
        { name: "BeMadPT",          driverRef: "BeMadPT",          rounds: [null, 14,   0, 0, 0, 0], total: 14 },
        { name: "Hugo Seixas",      driverRef: "Hugo Seixas",      rounds: [10,   null, 0, 0, 0, 0], total: 10 },
        { name: "Pedro Dias",       driverRef: "Pedro Dias",       rounds: [8,    0,    0, 0, 0, 0], total: 8  },
        { name: "Nuno Bravo",       driverRef: "Nuno Bravo",       rounds: [null, 8,    0, 0, 0, 0], total: 8  },
        { name: "Hugo Costa",       driverRef: "Hugo Costa",       rounds: [4,    0,    0, 0, 0, 0], total: 4  },
        { name: "Pedro Venda",      driverRef: "Pedro Venda",      rounds: [null, null, 0, 0, 0, 0], total: 0  },
        { name: "Luís Dantas",      driverRef: "Luís Dantas",      rounds: [null, 0,    0, 0, 0, 0], total: 0  },
        { name: "Pinto Moreira",    driverRef: "Pinto Moreira",    rounds: [null, 0,    0, 0, 0, 0], total: 0  },
        { name: "Ricardo Gamito",   driverRef: "Ricardo Gamito",   rounds: [null, null, 0, 0, 0, 0], total: 0  }
      ],

      /* ─────────────────────────────────────────────
         RACE-BY-RACE RESULTS (Resultados das Corridas)
         Each entry below is one ROUND. Each round has a "sessions"
         array: one Qualifying session followed by the 2 races that
         make up the round ("Corrida 1" and "Corrida 2").

         Fields per result row:
           pos          — finishing position
           name         — driver display name
           driverRef    — must match a "name" in SITE_DATA.drivers to show their photo (optional)
           psnId        — PSN ID / in-game nickname (kept for reference, not shown in the table)
           time         — total time for P1 (e.g. "51:32.828" or "20:50.807"); leave "" for the rest
           gap          — gap to the leader (e.g. "+8.406" or "+1 Volta"); leave "" for P1
           penalty      — penalty applied by the stewards ("" if none)
           pole         — true if the driver starts the race from pole (qualifying P1)
           fastestLap   — true if the driver set the fastest lap
           points       — race sessions only: points awarded (bonuses already included)
           bestLap      — qualifying sessions only: best lap time set in the session

         Race session fields (Corrida 1/2, set alongside "results"):
           duration        — session length (e.g. "20 min")
           fastestLapTime  — fastest lap of the whole session
         ───────────────────────────────────────────── */
      raceResults: [
        {
          round: 1,
          label: "Ronda 1",
          date: "17 de Julho de 2026",
          track: "High Speed Ring",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "João Abreu",      driverRef: "João Abreu",      psnId: "J.Abreu",         gap: "",         penalty: "", pole: true,  fastestLap: false, bestLap: "1:24.336" },
                { pos: 2,  name: "Kwan Toledo",      driverRef: "Kwan Toledo",     psnId: "K7ng",            gap: "+00.097",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.433" },
                { pos: 3,  name: "João Ferreira",    driverRef: "João Ferreira",   psnId: "Jony",            gap: "+00.220",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.556" },
                { pos: 4,  name: "Rafael Agostinho", driverRef: "Rafael Agostinho",psnId: "R. Agostinho",    gap: "+00.311",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.647" },
                { pos: 5,  name: "Prost",            driverRef: "Prost",           psnId: "Prostt",          gap: "+00.336",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.672" },
                { pos: 6,  name: "Pedro Dias",       driverRef: "Pedro Dias",      psnId: "RTP_Travincas24", gap: "+00.477",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.813" },
                { pos: 7,  name: "Wilson Barreto",   driverRef: "Wilson Barreto",  psnId: "Barreto",         gap: "+00.520",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.856" },
                { pos: 8,  name: "Rodrigo Marques",  driverRef: "Rodrigo Marques", psnId: "100maneiraz",     gap: "+00.585",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.921" },
                { pos: 9,  name: "João Festas",      driverRef: "João Festas",     psnId: "Festas Racing",   gap: "+00.597",  penalty: "", pole: false, fastestLap: false, bestLap: "1:24.933" },
                { pos: 10, name: "Hugo Costa",       driverRef: "Hugo Costa",      psnId: "Hugo Costa",      gap: "+00.675",  penalty: "", pole: false, fastestLap: false, bestLap: "1:25.011" },
                { pos: 11, name: "Hugo Seixas",      driverRef: "Hugo Seixas",     psnId: "Hyoogo",          gap: "+00.688",  penalty: "", pole: false, fastestLap: false, bestLap: "1:25.024" }
              ]
            },
            {
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "1:23.954",
              results: [
                { pos: 1,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "21:26.134", gap: "",         penalty: 0, points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "Prost",            driverRef: "Prost",           psnId: "Prostt",         time: "",           gap: "+1 Volta", penalty: 0, points: 19, pole: false, fastestLap: true  },
                { pos: 3,  name: "João Abreu",       driverRef: "João Abreu",      psnId: "J.Abreu",        time: "",           gap: "+1 Volta", penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Wilson Barreto",   driverRef: "Wilson Barreto",  psnId: "Barreto",        time: "",           gap: "+1 Volta", penalty: 0, points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Rafael Agostinho", driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "+1 Volta", penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Kwan Toledo",      driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+1 Volta", penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "João Festas",      driverRef: "João Festas",     psnId: "Festas Racing",  time: "",           gap: "+1 Volta", penalty: 0, points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Pedro Dias",       driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "+1 Volta", penalty: 0, points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Hugo Costa",       driverRef: "Hugo Costa",      psnId: "Hugo Costa",     time: "",           gap: "+1 Volta", penalty: 0, points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Rodrigo Marques",  driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+1 Volta", penalty: 0, points: 1,  pole: false, fastestLap: false },
                { pos: 11, name: "Hugo Seixas",      driverRef: "Hugo Seixas",     psnId: "Hyoogo",         time: "",           gap: "+1 Volta", penalty: 0, points: 0,  pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:24.197",
              results: [
                { pos: 1,  name: "Wilson Barreto",  driverRef: "Wilson Barreto",  psnId: "Barreto",        time: "21:25.643", gap: "",         penalty: 0, points: 26, pole: false, fastestLap: true  },
                { pos: 2,  name: "Kwan Toledo",     driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+00.339",  penalty: 0, points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+1 Volta", penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Rafael Agostinho",driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "+1 Volta", penalty: 0, points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Hugo Seixas",     driverRef: "Hugo Seixas",     psnId: "Hyoogo",         time: "",           gap: "+1 Volta", penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Prost",           driverRef: "Prost",           psnId: "Prostt",         time: "",           gap: "+1 Volta", penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "João Abreu",      driverRef: "João Abreu",      psnId: "J.Abreu",        time: "",           gap: "+1 Volta", penalty: 0, points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "NC",        penalty: 0, points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",     time: "",           gap: "NC",        penalty: 0, points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "",           gap: "NC",        penalty: 0, points: 1,  pole: false, fastestLap: false }
              ]
            }
          ]
        }
      ]
    }
  ]

};
