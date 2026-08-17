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
      name: "Prost",
      number: "2",
      role: "Naigven",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rui Silva",
      number: "3",
      role: "pandafrass",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251491014335909/c76830f261dcea8c36c382f37169c0c5_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rafael Agostinho",
      number: "4",
      role: "RafaelAgostinh44",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rafael Agostinho/RafaelAgostinho_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "João Ferreira",
      number: "7",
      role: "JRLF13ACM77",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251491014335909/c76830f261dcea8c36c382f37169c0c5_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Elias Portugal",
      number: "11",
      role: "KajuNN",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno Teixeira",
      number: "12",
      role: "BrunoCm1997",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251491014335909/c76830f261dcea8c36c382f37169c0c5_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Kwan Toledo",
      number: "13",
      role: "K7nG_0C3an",
      nationality: "Brasil",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇧🇷"
    },
    {
      name: "João Festas",
      number: "16",
      role: "pastorenrabador",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251828330484149/62c8011c994bf37fb777aa6f2ccf0dd1_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Nuno Bravo",
      number: "17",
      role: "N17_nuno",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Luís Dantas",
      number: "22",
      role: "Luisikon_TCHT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Luís Dantas/LuisDantas_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Dias",
      number: "24",
      role: "Travincas24",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Venda",
      number: "27",
      role: "FVenda117",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Pedro Venda/PedroVenda_Laranja.png",
      flag: "🇵🇹",
      pilotoMes: true
    },
    {
      name: "Sérgio Marques",
      number: "33",
      role: "CyberserGT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rodrigo Marques",
      number: "39",
      role: "granadas10",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rodrigo Marques/RodrigoMarques_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Pinto Moreira",
      number: "42",
      role: "Pinto_Moreira",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno Nunes",
      number: "44",
      role: "Be_Mad_PT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Bruno Nunes/BrunoNunes_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Ricardo Gamito",
      number: "45",
      role: "PUPILO_2GA",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Costa",
      number: "75",
      role: "SemDestino75",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Hugo Costa/HugoCosta_Laranja.png",
      flag: "🇵🇹",
      pilotoComunidadeMes: true
    },
    {
      name: "Miguel Cabral",
      number: "77",
      role: "mattifroskes",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Miguel Cabral/MiguelCabral_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Wilson Barreto",
      number: "77",
      role: "Wilson_TheFirst",
      nationality: "Cabo Verde",
      series: "Gran Turismo 7",
      image: "images/drivers/Wilson Barreto/WilsonBarreto_Laranja.png",
      flag: "🇨🇻"
    },
    {
      name: "Luis Gomes",
      number: "88",
      role: "laferia777",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Seixas",
      number: "89",
      role: "h_seixas13",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251491014335909/c76830f261dcea8c36c382f37169c0c5_body.png",
      flag: "🇵🇹"
    },
    {
      name: "gbKira",
      number: "",
      role: "gbKira",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252454958494772/9849b626ea3f8d8efbde05f5647e50d7_body.png",
      flag: "🇵🇹"
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
        { name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   rounds: [null, 50,   33,   52,   45,   0], total: 180 },
        { name: "João Ferreira",    driverRef: "João Ferreira",    rounds: [26,   38,   43,   null, null, 0], total: 107 },
        { name: "Prost",            driverRef: "Prost",            rounds: [27,   12,   38,   12,   null, 0], total: 89  },
        { name: "Rodrigo Marques",  driverRef: "Rodrigo Marques",  rounds: [16,   16,   21,   33,   2,    0], total: 88  },
        { name: "Bruno Nunes",      driverRef: "Bruno Nunes",      rounds: [null, 14,   14,   null, 43,   0], total: 71  },
        { name: "Wilson Barreto",   driverRef: "Wilson Barreto",   rounds: [38,   null, null, 26,   null, 0], total: 64  },
        { name: "Kwan Toledo",      driverRef: "Kwan Toledo",      rounds: [26,   16,   18,   null, null, 0], total: 60  },
        { name: "Nuno Bravo",       driverRef: "Nuno Bravo",       rounds: [null, 8,    8,    25,   16,   0], total: 57  },
        { name: "João Abreu",       driverRef: "João Abreu",       rounds: [21,   27,   null, null, null, 0], total: 48  },
        { name: "Rafael Agostinho", driverRef: "Rafael Agostinho", rounds: [22,   13,   12,   null, null, 0], total: 47  },
        { name: "João Festas",      driverRef: "João Festas",      rounds: [6,    10,   null, null, 10,   0], total: 26  },
        { name: "Elias Portugal",   driverRef: "Elias Portugal",   rounds: [null, null, null, null, 25,   0], total: 25  },
        { name: "Rui Silva",        driverRef: "Rui Silva",        rounds: [null, null, null, null, 24,   0], total: 24  },
        { name: "Ricardo Gamito",   driverRef: "Ricardo Gamito",   rounds: [null, null, null, 22,   null, 0], total: 22  },
        { name: "Pedro Dias",       driverRef: "Pedro Dias",       rounds: [8,    0,    0,    null, 14,   0], total: 22  },
        { name: "Hugo Costa",       driverRef: "Hugo Costa",       rounds: [4,    0,    3,    null, 12,   0], total: 19  },
        { name: "Hugo Seixas",      driverRef: "Hugo Seixas",      rounds: [10,   null, null, null, null, 0], total: 10  },
        { name: "Sérgio Marques",   driverRef: "Sérgio Marques",   rounds: [null, null, null, 8,    null, 0], total: 8   },
        { name: "Pinto Moreira",    driverRef: "Pinto Moreira",    rounds: [null, 0,    6,    null, null, 0], total: 6   },
        { name: "Luis Gomes",       driverRef: "Luis Gomes",       rounds: [0,    0,    6,    null, null, 0], total: 6   },
        { name: "Pedro Venda",      driverRef: "Pedro Venda",      rounds: [null, null, null, null, 6,    0], total: 6   },
        { name: "gbKira",           driverRef: "gbKira",           rounds: [0,    0,    1,    null, null, 0], total: 1   },
        { name: "Luís Dantas",      driverRef: "Luís Dantas",      rounds: [null, 0,    null, null, null, 0], total: 0   }
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
        },
        {
          round: 2,
          label: "Ronda 2",
          date: "24 de Julho de 2026",
          track: "Michelin Raceway Road Atlanta",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", gap: "",         penalty: "", pole: true,  fastestLap: false, bestLap: "1:35.023" },
                { pos: 2,  name: "Prost",            driverRef: "Prost",           psnId: "Prostt",         gap: "+00.315",  penalty: "", pole: false, fastestLap: false, bestLap: "1:35.338" },
                { pos: 3,  name: "João Abreu",       driverRef: "João Abreu",      psnId: "J.Abreu",        gap: "+00.521",  penalty: "", pole: false, fastestLap: false, bestLap: "1:35.544" },
                { pos: 4,  name: "João Ferreira",    driverRef: "João Ferreira",   psnId: "Jony",           gap: "+00.715",  penalty: "", pole: false, fastestLap: false, bestLap: "1:35.738" },
                { pos: 5,  name: "Kwan Toledo",      driverRef: "Kwan Toledo",     psnId: "K7ng",           gap: "+00.798",  penalty: "", pole: false, fastestLap: false, bestLap: "1:35.821" },
                { pos: 6,  name: "Rodrigo Marques",  driverRef: "Rodrigo Marques", psnId: "100maneiraz",    gap: "+01.006",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.029" },
                { pos: 7,  name: "Bruno Nunes",       driverRef: "Bruno Nunes",     psnId: "BeMadPT",        gap: "+01.120",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.143" },
                { pos: 8,  name: "Pedro Dias",       driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",gap: "+01.263",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.286" },
                { pos: 9,  name: "João Festas",      driverRef: "João Festas",     psnId: "Festas Racing",  gap: "+01.624",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.647" },
                { pos: 10, name: "Luís Dantas",      driverRef: "Luís Dantas",     psnId: "Luisikon_TCHT",  gap: "+01.882",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.905" },
                { pos: 11, name: "Nuno Bravo",       driverRef: "Nuno Bravo",      psnId: "N17",            gap: "+02.407",  penalty: "", pole: false, fastestLap: false, bestLap: "1:37.430" },
                { pos: 12, name: "Pinto Moreira",    driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  gap: "+03.759",  penalty: "", pole: false, fastestLap: false, bestLap: "1:38.782" },
                { pos: 13, name: "Hugo Costa",       driverRef: "Hugo Costa",      psnId: "Hugo",           gap: "+03.928",  penalty: "", pole: false, fastestLap: false, bestLap: "1:38.951" }
              ]
            },
            {
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "1:34.769",
              results: [
                { pos: 1,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "20:50.807", gap: "",        penalty: 0,           points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "",           gap: "+07.588", penalty: 0,           points: 19, pole: false, fastestLap: true  },
                { pos: 3,  name: "Kwan Toledo",     driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+12.443", penalty: "0:01.000",  points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "João Abreu",      driverRef: "João Abreu",      psnId: "J.Abreu",        time: "",           gap: "+15.836", penalty: 0,           points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Prost",           driverRef: "Prost",           psnId: "Prostt",         time: "",           gap: "+19.018", penalty: 0,           points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Bruno Nunes",      driverRef: "Bruno Nunes",     psnId: "BeMadPT",        time: "",           gap: "+20.610", penalty: 0,           points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+26.181", penalty: 0,           points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",            time: "",           gap: "+27.275", penalty: 0,           points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "João Festas",     driverRef: "João Festas",     psnId: "Festas Racing",  time: "",           gap: "+29.243", penalty: 0,           points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Rafael Agostinho",driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "+30.303", penalty: 0,           points: 1,  pole: false, fastestLap: false },
                { pos: 11, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "+40.998", penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 12, name: "Luís Dantas",     driverRef: "Luís Dantas",     psnId: "Luisikon_TCHT",  time: "",           gap: "1 Volta",  penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 13, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo",           time: "",           gap: "1 Volta",  penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 14, name: "Pinto Moreira",   driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  time: "",           gap: "1 Volta",  penalty: 0,           points: 0,  pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:34.731",
              results: [
                { pos: 1,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "20:56.461", gap: "",         penalty: 0,           points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "",           gap: "+01.472",  penalty: 0,           points: 19, pole: false, fastestLap: true  },
                { pos: 3,  name: "João Abreu",      driverRef: "João Abreu",      psnId: "J.Abreu",        time: "",           gap: "+05.359",  penalty: 0,           points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Rafael Agostinho",driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "+11.038",  penalty: "0:01.000",  points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+18.455",  penalty: 0,           points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "João Festas",     driverRef: "João Festas",     psnId: "Festas Racing",  time: "",           gap: "+18.816",  penalty: 0,           points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Bruno Nunes",      driverRef: "Bruno Nunes",     psnId: "BeMadPT",        time: "",           gap: "+19.697",  penalty: 0,           points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",            time: "",           gap: "+24.280",  penalty: 0,           points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Prost",           driverRef: "Prost",           psnId: "Prostt",         time: "",           gap: "+29.033",  penalty: 0,           points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Kwan Toledo",     driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+40.100",  penalty: 0,           points: 1,  pole: false, fastestLap: false },
                { pos: 11, name: "Luís Dantas",     driverRef: "Luís Dantas",     psnId: "Luisikon_TCHT",  time: "",           gap: "+40.734",  penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 12, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo",           time: "",           gap: "1 Volta",   penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 13, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "1 Volta",   penalty: 0,           points: 0,  pole: false, fastestLap: false },
                { pos: 14, name: "Pinto Moreira",   driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  time: "",           gap: "2 Voltas",  penalty: 0,           points: 0,  pole: false, fastestLap: false }
              ]
            }
          ]
        },
        {
          round: 3,
          label: "Ronda 3",
          date: "31 de Julho de 2026",
          track: "Tsukuba Circuit",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           gap: "",         penalty: "", pole: true,  fastestLap: false, bestLap: "1:03.095" },
                { pos: 2,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", gap: "+00.119",  penalty: "", pole: false, fastestLap: false, bestLap: "1:03.214" },
                { pos: 3,  name: "Prost",            driverRef: "Prost",           psnId: "Prostt",         gap: "+00.199",  penalty: "", pole: false, fastestLap: false, bestLap: "1:03.294" },
                { pos: 4,  name: "Rodrigo Marques",  driverRef: "Rodrigo Marques", psnId: "100maneiraz",    gap: "+00.294",  penalty: "", pole: false, fastestLap: false, bestLap: "1:03.389" },
                { pos: 5,  name: "Rafael Agostinho", driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   gap: "+00.505",  penalty: "", pole: false, fastestLap: false, bestLap: "1:03.600" },
                { pos: 6,  name: "Kwan Toledo",      driverRef: "Kwan Toledo",     psnId: "K7ng",           gap: "+00.824",  penalty: "", pole: false, fastestLap: false, bestLap: "1:03.919" },
                { pos: 7,  name: "Pedro Dias",       driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",gap: "+01.096",  penalty: "", pole: false, fastestLap: false, bestLap: "1:04.191" },
                { pos: 8,  name: "Bruno Nunes",       driverRef: "Bruno Nunes",     psnId: "BeMadPT",        gap: "+01.173",  penalty: "", pole: false, fastestLap: false, bestLap: "1:04.268" },
                { pos: 9,  name: "Luis Gomes",        driverRef: "Luis Gomes",      psnId: "Laferia",        gap: "+01.749",  penalty: "", pole: false, fastestLap: false, bestLap: "1:04.844" },
                { pos: 10, name: "Hugo Costa",       driverRef: "Hugo Costa",      psnId: "Hugo Costa",     gap: "+02.010",  penalty: "", pole: false, fastestLap: false, bestLap: "1:05.105" },
                { pos: 11, name: "Pinto Moreira",    driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  gap: "+02.480",  penalty: "", pole: false, fastestLap: false, bestLap: "1:05.575" },
                { pos: 12, name: "gbKira",           driverRef: "gbKira",          psnId: "gbKira",         gap: "+02.487",  penalty: "", pole: false, fastestLap: false, bestLap: "1:05.582" }
              ]
            },
            {
              // Room crashed mid-race: positions and points are real, but
              // times/gaps below are invented (no telemetry was recorded).
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "Não Atribuída",
              results: [
                { pos: 1,  name: "Prost",           driverRef: "Prost",           psnId: "Prostt",         time: "20:08.742", gap: "",         penalty: 0, points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "",           gap: "+01.845",  penalty: 0, points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "",           gap: "+04.220",  penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Rafael Agostinho",driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "+09.560",  penalty: 0, points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Bruno Nunes",      driverRef: "Bruno Nunes",     psnId: "BeMadPT",        time: "",           gap: "+14.732",  penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Kwan Toledo",     driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+18.905",  penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+21.348",  penalty: 0, points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Luis Gomes",       driverRef: "Luis Gomes",      psnId: "Laferia",        time: "",           gap: "+29.671",  penalty: 0, points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",     time: "",           gap: "+35.204",  penalty: 0, points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "gbKira",          driverRef: "gbKira",          psnId: "gbKira",         time: "",           gap: "+41.887",  penalty: 0, points: 1,  pole: false, fastestLap: false },
                { pos: 11, name: "Pinto Moreira",   driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  time: "",           gap: "1 Volta",   penalty: 0, points: 0,  pole: false, fastestLap: false },
                { pos: 12, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "1 Volta",   penalty: 0, points: 0,  pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:02.992",
              results: [
                { pos: 1,  name: "João Ferreira",   driverRef: "João Ferreira",   psnId: "Jony",           time: "20:14.418", gap: "",         penalty: 0, points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "",           gap: "+02.610",  penalty: 0, points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",    time: "",           gap: "+19.531",  penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Prost",           driverRef: "Prost",           psnId: "Prostt",         time: "",           gap: "+20.093",  penalty: 0, points: 13, pole: false, fastestLap: true  },
                { pos: 5,  name: "Kwan Toledo",     driverRef: "Kwan Toledo",     psnId: "K7ng",           time: "",           gap: "+20.929",  penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",            time: "",           gap: "+24.663",  penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24",time: "",           gap: "+25.075",  penalty: 0, points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Bruno Nunes",      driverRef: "Bruno Nunes",     psnId: "BeMadPT",        time: "",           gap: "+34.820",  penalty: 0, points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Luis Gomes",       driverRef: "Luis Gomes",      psnId: "Laferia",        time: "",           gap: "+46.368",  penalty: 0, points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",     time: "",           gap: "+51.888",  penalty: 0, points: 1,  pole: false, fastestLap: false },
                { pos: 11, name: "Pinto Moreira",   driverRef: "Pinto Moreira",   psnId: "LOrD_TriPeiRo",  time: "",           gap: "1 Volta",   penalty: 0, points: 0,  pole: false, fastestLap: false },
                { pos: 12, name: "Rafael Agostinho",driverRef: "Rafael Agostinho",psnId: "R. Agostinho",   time: "",           gap: "NC",         penalty: 0, points: 0,  pole: false, fastestLap: false },
                { pos: 13, name: "gbKira",          driverRef: "gbKira",          psnId: "gbKira",         time: "",           gap: "NC",         penalty: 0, points: 0,  pole: false, fastestLap: false }
              ]
            }
          ]
        },
        {
          round: 4,
          label: "Ronda 4",
          date: "7 de Agosto de 2026",
          track: "Watkins Glen (Short Course)",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1, name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:22.324" },
                { pos: 2, name: "Sérgio Marques",  driverRef: "Sérgio Marques",  psnId: "S. Marques",    gap: "+00.491", penalty: "", pole: false, fastestLap: false, bestLap: "1:22.815" },
                { pos: 3, name: "Wilson Barreto",  driverRef: "Wilson Barreto",  psnId: "Barreto",       gap: "+00.623", penalty: "", pole: false, fastestLap: false, bestLap: "1:22.947" },
                { pos: 4, name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",   gap: "+00.742", penalty: "", pole: false, fastestLap: false, bestLap: "1:23.066" },
                { pos: 5, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",           gap: "+00.988", penalty: "", pole: false, fastestLap: false, bestLap: "1:23.312" },
                { pos: 6, name: "Ricardo Gamito",  driverRef: "Ricardo Gamito",  psnId: "PUPILO",        gap: "+02.195", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.519" },
                { pos: 7, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",    gap: "+01.638", penalty: "", pole: false, fastestLap: false, bestLap: "1:23.962" }
              ]
            },
            {
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "1:21.877",
              results: [
                { pos: 1, name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "20:51.792", gap: "",        penalty: "0:02.000", points: 26, pole: false, fastestLap: true  },
                { pos: 2, name: "Wilson Barreto",  driverRef: "Wilson Barreto",  psnId: "Barreto",       time: "",           gap: "+08.969", penalty: 0,           points: 18, pole: false, fastestLap: false },
                { pos: 3, name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",   time: "",           gap: "+08.997", penalty: 0,           points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Ricardo Gamito",  driverRef: "Ricardo Gamito",  psnId: "PUPILO",        time: "",           gap: "+18.224", penalty: 0,           points: 12, pole: false, fastestLap: false },
                { pos: 5, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",           time: "",           gap: "1 Volta",  penalty: 0,           points: 10, pole: false, fastestLap: false },
                { pos: 6, name: "Sérgio Marques",  driverRef: "Sérgio Marques",  psnId: "S. Marques",    time: "",           gap: "NC",       penalty: 0,           points: 8,  pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:22.028",
              results: [
                { pos: 1, name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "21:00.373", gap: "",        penalty: 0,           points: 26, pole: false, fastestLap: true  },
                { pos: 2, name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",   time: "",           gap: "+00.395", penalty: 0,           points: 18, pole: false, fastestLap: false },
                { pos: 3, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",           time: "",           gap: "+02.056", penalty: 0,           points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Prost",           driverRef: "Prost",           psnId: "Prostt",        time: "",           gap: "+13.977", penalty: 0,           points: 12, pole: false, fastestLap: false },
                { pos: 5, name: "Ricardo Gamito",  driverRef: "Ricardo Gamito",  psnId: "PUPILO",        time: "",           gap: "+15.111", penalty: 0,           points: 10, pole: false, fastestLap: false },
                { pos: 6, name: "Wilson Barreto",  driverRef: "Wilson Barreto",  psnId: "Barreto",       time: "",           gap: "+16.441", penalty: "0:01.000",  points: 8,  pole: false, fastestLap: false }
              ]
            }
          ]
        },
        {
          round: 5,
          label: "Ronda 5",
          date: "14 de Agosto de 2026",
          track: "Goodwood Motor Circuit",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:23.517" },
                { pos: 2,  name: "Rui Silva",       driverRef: "Rui Silva",       psnId: "Pandex",        gap: "+00.825", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.342" },
                { pos: 3,  name: "Elias Portugal",  driverRef: "Elias Portugal",  psnId: "KezwiiK",       gap: "+00.944", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.461" },
                { pos: 4,  name: "Bruno Nunes",     driverRef: "Bruno Nunes",     psnId: "BeMadPT",       gap: "+01.184", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.701" },
                { pos: 5,  name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",           gap: "+01.285", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.802" },
                { pos: 6,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",   gap: "+01.766", penalty: "", pole: false, fastestLap: false, bestLap: "1:25.283" },
                { pos: 7,  name: "Pedro Venda",     driverRef: "Pedro Venda",     psnId: "Pedro Venda",   gap: "+02.879", penalty: "", pole: false, fastestLap: false, bestLap: "1:26.396" },
                { pos: 8,  name: "João Festas",     driverRef: "João Festas",     psnId: "Festas Racing", gap: "+03.971", penalty: "", pole: false, fastestLap: false, bestLap: "1:27.488" },
                { pos: 9,  name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",    gap: "+04.750", penalty: "", pole: false, fastestLap: false, bestLap: "1:28.267" },
                { pos: 10, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24", gap: "+04.893", penalty: "", pole: false, fastestLap: false, bestLap: "1:28.410" },
                { pos: 11, name: "Ricardo Gamito",  driverRef: "Ricardo Gamito",  psnId: "PUPILO",        gap: "+07.070", penalty: "", pole: false, fastestLap: false, bestLap: "1:30.587" }
              ]
            },
            {
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "1:23.012",
              results: [
                { pos: 1,  name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97", time: "21:06.040", gap: "",           penalty: 0,           points: 26, pole: false, fastestLap: true  },
                { pos: 2,  name: "Bruno Nunes",     driverRef: "Bruno Nunes",     psnId: "BeMadPT",       time: "",           gap: "+1 Volta",   penalty: 0,           points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Elias Portugal",  driverRef: "Elias Portugal",  psnId: "KezwiiK",       time: "",           gap: "+1 Volta",   penalty: 0,           points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Rui Silva",       driverRef: "Rui Silva",       psnId: "Pandex",        time: "",           gap: "+1 Volta",   penalty: 0,           points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "João Festas",     driverRef: "João Festas",     psnId: "Festas Racing", time: "",           gap: "+1 Volta",   penalty: 0,           points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24", time: "",         gap: "+1 Volta",   penalty: 0,           points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Pedro Venda",     driverRef: "Pedro Venda",     psnId: "Pedro Venda",   time: "",           gap: "+1 Volta",   penalty: "0:01.000",  points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",    time: "",           gap: "+1 Volta",   penalty: 0,           points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Rodrigo Marques", driverRef: "Rodrigo Marques", psnId: "100maneiraz",   time: "",           gap: "+2 Voltas",  penalty: 0,           points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",           time: "",           gap: "NC",          penalty: 0,           points: 1,  pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:23.342",
              results: [
                { pos: 1, name: "Bruno Nunes",     driverRef: "Bruno Nunes",     psnId: "BeMadPT",         time: "20:05.658", gap: "",          penalty: 0, points: 25, pole: false, fastestLap: false },
                { pos: 2, name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97",   time: "",           gap: "+00.317",   penalty: 0, points: 19, pole: false, fastestLap: true  },
                { pos: 3, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",             time: "",           gap: "+02.210",   penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Rui Silva",       driverRef: "Rui Silva",       psnId: "Pandex",          time: "",           gap: "+22.261",   penalty: 0, points: 12, pole: false, fastestLap: false },
                { pos: 5, name: "Elias Portugal",  driverRef: "Elias Portugal",  psnId: "KezwiiK",         time: "",           gap: "+23.337",   penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",      time: "",           gap: "1 Volta",   penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24", time: "",           gap: "2 Voltas",  penalty: 0, points: 6,  pole: false, fastestLap: false }
              ]
            }
          ]
        },
        {
          round: 6,
          label: "Ronda 6",
          date: "21 de Agosto de 2026",
          track: "Circuit Gilles Villeneuve",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            { type: "qualifying", label: "Qualificação", results: [] },
            { type: "race", label: "Corrida 1", duration: "20 min", fastestLapTime: "", results: [] },
            { type: "race", label: "Corrida 2", duration: "20 min", fastestLapTime: "", results: [] }
          ]
        }
      ]
    },

    /* ─────────────────────────────────────────────
       Liga Portugal GT — EXTERNAL competition. This is not run by
       RTP; only Pedro Venda races here for us, everyone else races
       for other teams. We only get a periodic overall standings
       snapshot (no round-by-round breakdown), so this uses
       type: "drivers-external" — a simpler POS/Piloto/Pontos table.
       ───────────────────────────────────────────── */
    {
      competition: "lpgt",
      title: "Liga Portugal GT",
      subtitle: "Gran Turismo 7 · GT6 · Competição Externa",
      logo: "images/LPGT_WORLDSERIES_LOGO.jpg",
      type: "drivers-external",
      drivers: [
        { name: "GT3rt-Flecha",    driverRef: "GT3rt-Flecha",    points: 59 },
        { name: "Jatedoarroz",     driverRef: "Jatedoarroz",     points: 48 },
        { name: "Santimoreira",    driverRef: "Santimoreira",    points: 38 },
        { name: "Miguel85",        driverRef: "Miguel85",        points: 36 },
        { name: "Pedro Venda",     driverRef: "Pedro Venda",     points: 34, ourDriver: true },
        { name: "Andreson Costa",  driverRef: "Andreson Costa",  points: 34 },
        { name: "Zeuskunha",       driverRef: "Zeuskunha",       points: 25 },
        { name: "Clarinetes",      driverRef: "Clarinetes",      points: 24 },
        { name: "Tenworms",        driverRef: "Tenworms",        points: 24 },
        { name: "Rafael Silva",    driverRef: "Rafael Silva",    points: 18 },
        { name: "Nyx-Racer",       driverRef: "Nyx-Racer",       points: 11 },
        { name: "Barbas77",        driverRef: "Barbas77",        points: 9  },
        { name: "Sport-Evo_bruno", driverRef: "Sport-Evo_bruno", points: 9  },
        { name: "Sainz",           driverRef: "Sainz",           points: 8  },
        { name: "Xapas",           driverRef: "Xapas",           points: 7  }
      ]
    }
  ]

};
