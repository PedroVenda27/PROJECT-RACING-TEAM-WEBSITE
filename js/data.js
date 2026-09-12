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
     Fields: name, number, role (PSN ID), gtName (in-game display
     name shown in race results), nationality, series, image, flag
     ───────────────────────────────────────────── */
  drivers: [
    {
      name: "Rui Silva",
      number: "3",
      role: "pandafrass",
      gtName: "Pandex",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rui Silva/RuiSilva_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Rafael Agostinho",
      number: "4",
      role: "RafaelAgostinh44",
      gtName: "R. Agostinho",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rafael Agostinho/RafaelAgostinho_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Elias Torres",
      number: "11",
      role: "KajuNN",
      gtName: "KezwiiK",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Elias Torres/EliasTorres_Preto.png",
      flag: "🇵🇹",
      pilotoComunidadeMes: true
    },
    {
      name: "Bruno Teixeira",
      number: "12",
      role: "BrunoCm1997",
      gtName: "RTP_Brunocm97",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Bruno Teixeira/BrunoTeixeira_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "João Festas",
      number: "16",
      role: "pastorenrabador",
      gtName: "Festas Racing",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/João Festas/JoaoFestas_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Nuno Bravo",
      number: "17",
      role: "N17_nuno",
      gtName: "N17",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Nuno Bravo/NunoBravo_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Luís Dantas",
      number: "22",
      role: "Luisikon_TCHT",
      gtName: "Luisikon_TCHT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Luís Dantas/LuisDantas_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Dias",
      number: "24",
      role: "Travincas24",
      gtName: "RTP_Travincas24",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Pedro Dias/PedroDias_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Venda",
      number: "27",
      role: "FVenda117",
      gtName: "Pedro Venda",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Pedro Venda/PedroVenda_Preto.png",
      flag: "🇵🇹",
      federado: true
    },
    {
      name: "Sérgio Marques",
      number: "33",
      role: "CyberserGT",
      gtName: "S. Marques",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Sérgio Marques/SergioMarques_Laranja.png",
      flag: "🇵🇹",
      pilotoMes: true
    },
    {
      name: "Rodrigo Marques",
      number: "39",
      role: "granadas10",
      gtName: "100maneiraz",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rodrigo Marques/RodrigoMarques_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Pinto Moreira",
      number: "42",
      role: "Pinto_Moreira",
      gtName: "LOrD_TrïPeïRo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Pinto Moreira/PintoMoreira_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Bruno Silva",
      number: "44",
      role: "Be_Mad_PT",
      gtName: "Be_Mad_PT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Bruno Silva/BrunoSilva_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Ricardo Gamito",
      number: "45",
      role: "PUPILO_2GA",
      gtName: "PUPILO",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Ricardo Gamito/RicardoGamito_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Costa",
      number: "75",
      role: "SemDestino75",
      gtName: "Hugo Costa",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Hugo Costa/HugoCosta_Preto.png",
      flag: "🇵🇹"
    },
    {
      name: "Miguel Cabral",
      number: "77",
      role: "mattifroskes",
      gtName: "MattiAzores",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Miguel Cabral/MiguelCabral_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Wilson Barreto",
      number: "77",
      role: "Wilson_TheFirst",
      gtName: "Barreto",
      nationality: "Cabo Verde",
      series: "Gran Turismo 7",
      image: "images/drivers/Wilson Barreto/WilsonBarreto_Preto.png",
      flag: "🇨🇻"
    },
    {
      name: "Luis Gomes",
      number: "88",
      role: "laferia777",
      gtName: "Laferia",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Luis Gomes/LuisGomes_Laranja.png",
      flag: "🇵🇹"
    },
    {
      name: "Hugo Seixas",
      number: "89",
      role: "h_seixas13",
      gtName: "Hyoogo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Hugo Seixas/HugoSeixas_Preto.png",
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
      url: "https://www.ligaportugalgt.com/"
    },
    {
      name: "TT Motorfest CUP - NCM",
      platform: "GT7",
      description: "Campeonato Solidário organizado pela NCM com entuito de levar a diversão do Gran Turismo 7 a crianças carenciadas.",
      logo: "images/NCM_MOTORFEST_LOGO.jpg",
      url: "https://www.youtube.com/@NacionalCrewMotorsport2025"
    },
    {
      name: "Greyhound <br> Motorsports",
      platform: "GT7",
      description: "Organização de Eventos Sim Racing especializada em eventos Endurance.",
      logo: "images/GreyHonund6h_LOGO.png",
      url: "https://www.youtube.com/@greyhoundsimracing"
    },
    {
      name: "Taça <br> Portugal GT",
      platform: "GT7",
      description: "Taça de Portugal GT — Campeonato externo de Gran Turismo 7 que reúne as melhores equipas portuguesas de Sim Racing.",
      logo: "images/TPGT_LOGO.png",
      url: "https://www.ligaportugalgt.com/"
    },
    {
      name: "Mazda MX-5 Cup",
      platform: "GT7",
      description: "Campeonato interno RTP Racing Team Project disputado no Gran Turismo 7 ao volante do Mazda MX-5, ao longo de 6 rondas.",
      logo: "images/MAZDA MX-5 CUP/MAZDA MX-5 CUP ICON.png",
      url: "inscricao.html"
    },
    {
      name: "WRT Events",
      platform: "GT7",
      description: "Corridas especiais em parceria com a WRT (Wolves Racing Team), em vários circuitos e categorias.",
      logo: "images/WRT_LOGO.jpg",
      url: "https://www.youtube.com/@WolvesWRT"
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
        { name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   rounds: [null, 50,   33,   52,   45,   38  ], total: 218 },
        { name: "João Ferreira",    driverRef: "João Ferreira",    rounds: [26,   38,   43,   null, null, null], total: 107 },
        { name: "Prost",            driverRef: "Prost",            rounds: [27,   12,   38,   12,   null, null], total: 89  },
        { name: "Rodrigo Marques",  driverRef: "Rodrigo Marques",  rounds: [16,   16,   21,   33,   2,    null], total: 88  },
        { name: "Bruno Silva",      driverRef: "Bruno Silva",      rounds: [null, 14,   14,   null, 43,   null], total: 71  },
        { name: "Elias Torres",     driverRef: "Elias Torres",     rounds: [null, null, null, null, 25,   40  ], total: 65  },
        { name: "Wilson Barreto",   driverRef: "Wilson Barreto",   rounds: [38,   null, null, 26,   null, null], total: 64  },
        { name: "Kwan Toledo",      driverRef: "Kwan Toledo",      rounds: [26,   16,   18,   null, null, null], total: 60  },
        { name: "Nuno Bravo",       driverRef: "Nuno Bravo",       rounds: [null, 8,    8,    25,   16,   null], total: 57  },
        { name: "João Abreu",       driverRef: "João Abreu",       rounds: [21,   27,   null, null, null, null], total: 48  },
        { name: "Rafael Agostinho", driverRef: "Rafael Agostinho", rounds: [22,   13,   12,   null, null, null], total: 47  },
        { name: "Luis Gomes",       driverRef: "Luis Gomes",       rounds: [0,    0,    6,    null, null, 40  ], total: 46  },
        { name: "Hugo Costa",       driverRef: "Hugo Costa",       rounds: [4,    0,    3,    null, 12,   24  ], total: 43  },
        { name: "João Festas",      driverRef: "João Festas",      rounds: [6,    10,   null, null, 10,   null], total: 26  },
        { name: "Rui Silva",        driverRef: "Rui Silva",        rounds: [null, null, null, null, 24,   null], total: 24  },
        { name: "Ricardo Gamito",   driverRef: "Ricardo Gamito",   rounds: [null, null, null, 22,   null, null], total: 22  },
        { name: "Pedro Dias",       driverRef: "Pedro Dias",       rounds: [8,    0,    0,    null, 14,   null], total: 22  },
        { name: "Hugo Seixas",      driverRef: "Hugo Seixas",      rounds: [10,   null, null, null, null, null], total: 10  },
        { name: "Sérgio Marques",   driverRef: "Sérgio Marques",   rounds: [null, null, null, 8,    null, null], total: 8   },
        { name: "Pinto Moreira",    driverRef: "Pinto Moreira",    rounds: [null, 0,    6,    null, null, null], total: 6   },
        { name: "Pedro Venda",      driverRef: "Pedro Venda",      rounds: [null, null, null, null, 6,    null], total: 6   },
        { name: "gbKira",           driverRef: "gbKira",           rounds: [0,    0,    1,    null, null, null], total: 1   },
        { name: "Luís Dantas",      driverRef: "Luís Dantas",      rounds: [null, 0,    null, null, null, null], total: 0   }
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
                { pos: 7,  name: "Bruno Silva",       driverRef: "Bruno Silva",     psnId: "BeMadPT",        gap: "+01.120",  penalty: "", pole: false, fastestLap: false, bestLap: "1:36.143" },
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
                { pos: 6,  name: "Bruno Silva",      driverRef: "Bruno Silva",     psnId: "BeMadPT",        time: "",           gap: "+20.610", penalty: 0,           points: 8,  pole: false, fastestLap: false },
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
                { pos: 7,  name: "Bruno Silva",      driverRef: "Bruno Silva",     psnId: "BeMadPT",        time: "",           gap: "+19.697",  penalty: 0,           points: 6,  pole: false, fastestLap: false },
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
                { pos: 8,  name: "Bruno Silva",       driverRef: "Bruno Silva",     psnId: "BeMadPT",        gap: "+01.173",  penalty: "", pole: false, fastestLap: false, bestLap: "1:04.268" },
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
                { pos: 5,  name: "Bruno Silva",      driverRef: "Bruno Silva",     psnId: "BeMadPT",        time: "",           gap: "+14.732",  penalty: 0, points: 10, pole: false, fastestLap: false },
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
                { pos: 8,  name: "Bruno Silva",      driverRef: "Bruno Silva",     psnId: "BeMadPT",        time: "",           gap: "+34.820",  penalty: 0, points: 4,  pole: false, fastestLap: false },
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
                { pos: 3,  name: "Elias Torres",  driverRef: "Elias Torres",  psnId: "KezwiiK",       gap: "+00.944", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.461" },
                { pos: 4,  name: "Bruno Silva",     driverRef: "Bruno Silva",     psnId: "BeMadPT",       gap: "+01.184", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.701" },
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
                { pos: 2,  name: "Bruno Silva",     driverRef: "Bruno Silva",     psnId: "BeMadPT",       time: "",           gap: "+1 Volta",   penalty: 0,           points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Elias Torres",  driverRef: "Elias Torres",  psnId: "KezwiiK",       time: "",           gap: "+1 Volta",   penalty: 0,           points: 15, pole: false, fastestLap: false },
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
                { pos: 1, name: "Bruno Silva",     driverRef: "Bruno Silva",     psnId: "BeMadPT",         time: "20:05.658", gap: "",          penalty: 0, points: 25, pole: false, fastestLap: false },
                { pos: 2, name: "Bruno Teixeira",  driverRef: "Bruno Teixeira",  psnId: "RTP_Brunocm97",   time: "",           gap: "+00.317",   penalty: 0, points: 19, pole: false, fastestLap: true  },
                { pos: 3, name: "Nuno Bravo",      driverRef: "Nuno Bravo",      psnId: "N17",             time: "",           gap: "+02.210",   penalty: 0, points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Rui Silva",       driverRef: "Rui Silva",       psnId: "Pandex",          time: "",           gap: "+22.261",   penalty: 0, points: 12, pole: false, fastestLap: false },
                { pos: 5, name: "Elias Torres",  driverRef: "Elias Torres",  psnId: "KezwiiK",         time: "",           gap: "+23.337",   penalty: 0, points: 10, pole: false, fastestLap: false },
                { pos: 6, name: "Hugo Costa",      driverRef: "Hugo Costa",      psnId: "Hugo Costa",      time: "",           gap: "1 Volta",   penalty: 0, points: 8,  pole: false, fastestLap: false },
                { pos: 7, name: "Pedro Dias",      driverRef: "Pedro Dias",      psnId: "RTP_Travincas24", time: "",           gap: "2 Voltas",  penalty: 0, points: 6,  pole: false, fastestLap: false }
              ]
            }
          ]
        },
        {
          round: 6,
          label: "Ronda 6",
          date: "28 de Agosto de 2026",
          track: "Circuit Gilles Villeneuve",
          car: "Mazda Spirit Racing Roadster 12R '25",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1, name: "Bruno Teixeira", driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97", gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:57.630" },
                { pos: 2, name: "Elias Torres",   driverRef: "Elias Torres",   psnId: "KezwiiK",       gap: "+00.566", penalty: "", pole: false, fastestLap: false, bestLap: "1:58.196" },
                { pos: 3, name: "Luis Gomes",     driverRef: "Luis Gomes",     psnId: "Laferia",       gap: "+01.229", penalty: "", pole: false, fastestLap: false, bestLap: "1:58.859" },
                { pos: 4, name: "Hugo Costa",     driverRef: "Hugo Costa",     psnId: "Hugo Costa",    gap: "+03.394", penalty: "", pole: false, fastestLap: false, bestLap: "2:01.024" }
              ]
            },
            {
              type: "race",
              label: "Corrida 1",
              duration: "20 min",
              fastestLapTime: "1:57.016",
              results: [
                { pos: 1, name: "Elias Torres",   driverRef: "Elias Torres",   psnId: "KezwiiK",       time: "21:49.401", gap: "",        penalty: 0,           points: 25, pole: false, fastestLap: false },
                { pos: 2, name: "Bruno Teixeira", driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97", time: "",           gap: "+00.060", penalty: 0,           points: 19, pole: false, fastestLap: true  },
                { pos: 3, name: "Luis Gomes",     driverRef: "Luis Gomes",     psnId: "Laferia",       time: "",           gap: "1 Volta", penalty: "0:01.000", points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Hugo Costa",     driverRef: "Hugo Costa",     psnId: "Hugo Costa",    time: "",           gap: "1 Volta", penalty: "0:01.000", points: 12, pole: false, fastestLap: false }
              ]
            },
            {
              type: "race",
              label: "Corrida 2",
              duration: "20 min",
              fastestLapTime: "1:55.158",
              results: [
                { pos: 1, name: "Luis Gomes",     driverRef: "Luis Gomes",     psnId: "Laferia",       time: "21:47.212", gap: "",        penalty: 0,           points: 25, pole: false, fastestLap: false },
                { pos: 2, name: "Bruno Teixeira", driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97", time: "",           gap: "+00.312", penalty: "0:03.000", points: 19, pole: false, fastestLap: true  },
                { pos: 3, name: "Elias Torres",   driverRef: "Elias Torres",   psnId: "KezwiiK",       time: "",           gap: "+28.594", penalty: "0:03.000", points: 15, pole: false, fastestLap: false },
                { pos: 4, name: "Hugo Costa",     driverRef: "Hugo Costa",     psnId: "Hugo Costa",    time: "",           gap: "+37.881", penalty: 0,           points: 12, pole: false, fastestLap: false }
              ]
            }
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
    },

    /* ─────────────────────────────────────────────
       WRT Events — one-off special races with WRT (Wolves Racing
       Team). Each is a standalone race, not a points championship,
       so this uses type: "drivers-external" + format: "race" with
       an `events` list (one entry per race, newest last).
       ───────────────────────────────────────────── */
    {
      competition: "wrtdaytona",
      title: "WRT Events",
      subtitle: "Corridas especiais com a WRT — vários circuitos",
      logo: "images/WRT_LOGO.jpg",
      type: "drivers-external",
      format: "race",
      events: [
        {
          name: "Daytona",
          date: "22 de Agosto de 2026",
          track: "Daytona International Speedway",
          car: "NSX GT500 '08",
          duration: "30 min",
          streamUrl: "https://www.youtube.com/watch?v=iJudAuD-nF0",
          fastestLapTime: "1:41.512",
          drivers: [
            { name: "Sérgio Marques",   driverRef: "Sérgio Marques",   time: "31:25.195", gap: "",           penalty: "", bestLap: "1:41.892", fastestLap: false, ourDriver: true },
            { name: "Wilson Barreto",   driverRef: "Wilson Barreto",   time: "",           gap: "+03.746",     penalty: "", bestLap: "1:41.512", fastestLap: true, ourDriver: true },
            { name: "Elias Torres",     driverRef: "Elias Torres",     time: "",           gap: "+06.318",     penalty: "", bestLap: "1:41.678", fastestLap: false, ourDriver: true },
            { name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   time: "",           gap: "+11.452",     penalty: "", bestLap: "1:42.195", fastestLap: false, ourDriver: true },
            { name: "Rafael Agostinho", driverRef: "Rafael Agostinho", time: "",           gap: "+15.667",     penalty: "", bestLap: "1:41.694", fastestLap: false, ourDriver: true },
            { name: "LDRS_TelmoTomas7", driverRef: "LDRS_TelmoTomas7", time: "",           gap: "+27.805",     penalty: "", bestLap: "1:42.276", fastestLap: false },
            { name: "Parafuso_106",     driverRef: "Parafuso_106",     time: "",           gap: "+34.219",     penalty: "", bestLap: "1:42.845", fastestLap: false },
            { name: "SLbenfica",        driverRef: "SLbenfica",        time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:42.345", fastestLap: false },
            { name: "WRT_Patrício",     driverRef: "WRT_Patrício",     time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:41.884", fastestLap: false },
            { name: "Raulpombal",       driverRef: "Raulpombal",       time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:43.078", fastestLap: false },
            { name: "Brissos69 Pitbox", driverRef: "Brissos69 Pitbox", time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:44.200", fastestLap: false },
            { name: "LDRS_ACoelho129",  driverRef: "LDRS_ACoelho129",  time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:43.600", fastestLap: false },
            { name: "RTW_Vag,tdi.pt",   driverRef: "RTW_Vag,tdi.pt",   time: "",           gap: "1 Volta",     penalty: "", bestLap: "1:44.081", fastestLap: false }
          ]
        },
        {
          name: "Top Split",
          date: "29 de Agosto de 2026",
          track: "Circuit Gilles Villeneuve",
          /* Two-stage regroup format: Gr4 splits first, then results
             regroup drivers into new Sala 1/2 rooms racing Gr3. */
          stages: [
            {
              stage: "Gr4",
              car: "McLaren 650S Gr.4",
              rooms: [
                {
                  room: "Sala 1",
                  streamUrl: "https://www.youtube.com/watch?v=VoV-ThUk2KQ&t=6070s",
                  sessions: [
                    {
                      type: "qualifying",
                      label: "Qualificação",
                      results: [
                        { pos: 1,  name: "Edgar",             driverRef: "Edgar",             gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:45.258" },
                        { pos: 2,  name: "RTW_Vag,tdi.pt",     driverRef: "RTW_Vag,tdi.pt",     gap: "+00.685", penalty: "", pole: false, fastestLap: false, bestLap: "1:45.943" },
                        { pos: 3,  name: "Ratax5",             driverRef: "Ratax5",             gap: "+00.842", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.100" },
                        { pos: 4,  name: "Rodrigo Marques",    driverRef: "Rodrigo Marques",    gap: "+01.126", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.384", ourDriver: true },
                        { pos: 5,  name: "ricardinho_RS3",     driverRef: "ricardinho_RS3",     gap: "+01.151", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.409" },
                        { pos: 6,  name: "2R4_Capucho_44",     driverRef: "2R4_Capucho_44",     gap: "+01.449", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.707" },
                        { pos: 7,  name: "2R4@.M.C",           driverRef: "2R4@.M.C",           gap: "+01.866", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.124" },
                        { pos: 8,  name: "RTW_SaVaGeGT",       driverRef: "RTW_SaVaGeGT",       gap: "+01.902", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.160" },
                        { pos: 9,  name: "GodDeviL",           driverRef: "GodDeviL",           gap: "+02.231", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.489" },
                        { pos: 10, name: "Brissos69 Pitbox",   driverRef: "Brissos69 Pitbox",   gap: "+02.319", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.577" },
                        { pos: 11, name: "Sarking8",           driverRef: "Sarking8",           gap: "+02.621", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.879" },
                        { pos: 12, name: "YT_RapidusJD",       driverRef: "YT_RapidusJD",       gap: "+03.561", penalty: "", pole: false, fastestLap: false, bestLap: "1:48.819" },
                        { pos: 13, name: "Hugo Costa",         driverRef: "Hugo Costa",         gap: "+04.354", penalty: "", pole: false, fastestLap: false, bestLap: "1:49.612", ourDriver: true },
                        { pos: 14, name: "Fortunato73",        driverRef: "Fortunato73",        gap: "+05.986", penalty: "", pole: false, fastestLap: false, bestLap: "1:51.244" }
                      ]
                    },
                    {
                      type: "race",
                      label: "Corrida",
                      duration: "20 min",
                      fastestLapTime: "1:46.910",
                      results: [
                        { pos: 1,  name: "RTW_Vag,tdi.pt",     driverRef: "RTW_Vag,tdi.pt",     time: "21:39.354", gap: "",         penalty: "", bestLap: "1:46.980", fastestLap: false },
                        { pos: 2,  name: "Edgar",             driverRef: "Edgar",             time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:46.910", fastestLap: true  },
                        { pos: 3,  name: "ricardinho_RS3",     driverRef: "ricardinho_RS3",     time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.117", fastestLap: false },
                        { pos: 4,  name: "2R4@.M.C",           driverRef: "2R4@.M.C",           time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:47.789", fastestLap: false },
                        { pos: 5,  name: "2R4_Capucho_44",     driverRef: "2R4_Capucho_44",     time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.140", fastestLap: false },
                        { pos: 6,  name: "Rodrigo Marques",    driverRef: "Rodrigo Marques",    time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.119", fastestLap: false, ourDriver: true },
                        { pos: 7,  name: "RTW_SaVaGeGT",       driverRef: "RTW_SaVaGeGT",       time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:47.691", fastestLap: false },
                        { pos: 8,  name: "Ratax5",             driverRef: "Ratax5",             time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.142", fastestLap: false },
                        { pos: 9,  name: "Sarking8",           driverRef: "Sarking8",           time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.492", fastestLap: false },
                        { pos: 10, name: "Hugo Costa",         driverRef: "Hugo Costa",         time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.310", fastestLap: false, ourDriver: true },
                        { pos: 11, name: "YT_RapidusJD",       driverRef: "YT_RapidusJD",       time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.175", fastestLap: false },
                        { pos: 12, name: "Brissos69 Pitbox",   driverRef: "Brissos69 Pitbox",   time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.495", fastestLap: false },
                        { pos: 13, name: "GodDeviL",           driverRef: "GodDeviL",           time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.380", fastestLap: false },
                        { pos: 14, name: "Fortunato73",        driverRef: "Fortunato73",        time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:51.315", fastestLap: false }
                      ]
                    }
                  ]
                },
                {
                  room: "Sala 2",
                  streamUrl: "https://www.youtube.com/watch?v=d5bKFUltFjo",
                  sessions: [
                    {
                      type: "qualifying",
                      label: "Qualificação",
                      results: [
                        { pos: 1,  name: "D.Senna",           driverRef: "D.Senna",           gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:45.246" },
                        { pos: 2,  name: "B.Moreira",          driverRef: "B.Moreira",          gap: "+00.394", penalty: "", pole: false, fastestLap: false, bestLap: "1:45.640" },
                        { pos: 3,  name: "2R4_X_Ghost_X",      driverRef: "2R4_X_Ghost_X",      gap: "+00.408", penalty: "", pole: false, fastestLap: false, bestLap: "1:45.654" },
                        { pos: 4,  name: "NexuS_BPF",          driverRef: "NexuS_BPF",          gap: "+00.897", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.143" },
                        { pos: 5,  name: "JhonnyRenas",        driverRef: "JhonnyRenas",        gap: "+01.148", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.394" },
                        { pos: 6,  name: "Pedro Dias",         driverRef: "Pedro Dias",         gap: "+01.387", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.633", ourDriver: true },
                        { pos: 7,  name: "Raulpombal",         driverRef: "Raulpombal",         gap: "+01.408", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.654" },
                        { pos: 8,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira",     gap: "+01.425", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.671" },
                        { pos: 9,  name: "Nuno\"TheSnail\"PT", driverRef: "Nuno\"TheSnail\"PT", gap: "+01.918", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.164" },
                        { pos: 10, name: "Marco Silva",        driverRef: "Marco Silva",        gap: "+02.724", penalty: "", pole: false, fastestLap: false, bestLap: "1:47.970" },
                        { pos: 11, name: "Oliveira",           driverRef: "Oliveira",           gap: "+02.888", penalty: "", pole: false, fastestLap: false, bestLap: "1:48.134" },
                        { pos: 12, name: "L.S.R._Sapo_666",    driverRef: "L.S.R._Sapo_666",    gap: "+03.216", penalty: "", pole: false, fastestLap: false, bestLap: "1:48.462" },
                        { pos: 13, name: "TheChem_24",         driverRef: "TheChem_24",         gap: "+03.816", penalty: "", pole: false, fastestLap: false, bestLap: "1:49.062" }
                      ]
                    },
                    {
                      type: "race",
                      label: "Corrida",
                      duration: "20 min",
                      fastestLapTime: "1:44.815",
                      results: [
                        { pos: 1,  name: "2R4_X_Ghost_X",      driverRef: "2R4_X_Ghost_X",      time: "21:25.974", gap: "",         penalty: "", bestLap: "1:45.945", fastestLap: false },
                        { pos: 2,  name: "D.Senna",           driverRef: "D.Senna",           time: "",           gap: "+08.253",   penalty: "", bestLap: "1:44.815", fastestLap: true  },
                        { pos: 3,  name: "NexuS_BPF",          driverRef: "NexuS_BPF",          time: "",           gap: "+13.888",   penalty: "", bestLap: "1:46.885", fastestLap: false },
                        { pos: 4,  name: "B.Moreira",          driverRef: "B.Moreira",          time: "",           gap: "+17.039",   penalty: "", bestLap: "1:47.240", fastestLap: false },
                        { pos: 5,  name: "Pedro Dias",         driverRef: "Pedro Dias",         time: "",           gap: "+18.129",   penalty: "", bestLap: "1:47.422", fastestLap: false, ourDriver: true },
                        { pos: 6,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira",     time: "",           gap: "+18.209",   penalty: "", bestLap: "1:47.040", fastestLap: false },
                        { pos: 7,  name: "Nuno\"TheSnail\"PT", driverRef: "Nuno\"TheSnail\"PT", time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:47.821", fastestLap: false },
                        { pos: 8,  name: "JhonnyRenas",        driverRef: "JhonnyRenas",        time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:47.750", fastestLap: false },
                        { pos: 9,  name: "Raulpombal",         driverRef: "Raulpombal",         time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:47.912", fastestLap: false },
                        { pos: 10, name: "Marco Silva",        driverRef: "Marco Silva",        time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:48.734", fastestLap: false },
                        { pos: 11, name: "Oliveira",           driverRef: "Oliveira",           time: "",           gap: "2 Voltas",  penalty: "", bestLap: "1:49.015", fastestLap: false },
                        { pos: 12, name: "L.S.R._Sapo_666",    driverRef: "L.S.R._Sapo_666",    time: "",           gap: "2 Voltas",  penalty: "", bestLap: "1:49.288", fastestLap: false },
                        { pos: 13, name: "TheChem_24",         driverRef: "TheChem_24",         time: "",           gap: "2 Voltas",  penalty: "", bestLap: "1:50.104", fastestLap: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              stage: "Gr3",
              car: "650S GT3 '15",
              rooms: [
                {
                  room: "Sala 1",
                  streamUrl: "https://www.youtube.com/watch?v=VoV-ThUk2KQ&t=6070s",
                  sessions: [
                    {
                      type: "qualifying",
                      label: "Qualificação",
                      results: [
                        { pos: 1,  name: "D.Senna",           driverRef: "D.Senna",           gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:36.344" },
                        { pos: 2,  name: "Edgar",             driverRef: "Edgar",             gap: "+00.219", penalty: "", pole: false, fastestLap: false, bestLap: "1:36.563" },
                        { pos: 3,  name: "RTW_Vag,tdi.pt",     driverRef: "RTW_Vag,tdi.pt",     gap: "+00.773", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.117" },
                        { pos: 4,  name: "2R4_X_Ghost_X",      driverRef: "2R4_X_Ghost_X",      gap: "+00.880", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.224" },
                        { pos: 5,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira",     gap: "+01.074", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.418" },
                        { pos: 6,  name: "2R4@.M.C",           driverRef: "2R4@.M.C",           gap: "+01.239", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.583" },
                        { pos: 7,  name: "Rodrigo Marques",    driverRef: "Rodrigo Marques",    gap: "+01.257", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.601", ourDriver: true },
                        { pos: 8,  name: "2R4_Capucho_44",     driverRef: "2R4_Capucho_44",     gap: "+01.385", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.729" },
                        { pos: 9,  name: "Pedro Dias",         driverRef: "Pedro Dias",         gap: "+01.574", penalty: "", pole: false, fastestLap: false, bestLap: "1:37.918", ourDriver: true },
                        { pos: 10, name: "Nuno\"TheSnail\"PT", driverRef: "Nuno\"TheSnail\"PT", gap: "+01.668", penalty: "", pole: false, fastestLap: false, bestLap: "1:38.012" },
                        { pos: 11, name: "NexuS_BPF",          driverRef: "NexuS_BPF",          gap: "+01.743", penalty: "", pole: false, fastestLap: false, bestLap: "1:38.087" },
                        { pos: 12, name: "ricardinho_RS3",     driverRef: "ricardinho_RS3",     gap: "+02.925", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.269" },
                        { pos: 13, name: "B.Moreira",          driverRef: "B.Moreira",          gap: "+04.459", penalty: "", pole: false, fastestLap: false, bestLap: "1:40.803" },
                        { pos: 14, name: "RTW_SaVaGeGT",       driverRef: "RTW_SaVaGeGT",       gap: "+05.437", penalty: "", pole: false, fastestLap: false, bestLap: "1:41.781" }
                      ]
                    },
                    {
                      type: "race",
                      label: "Corrida",
                      duration: "20 min",
                      fastestLapTime: "1:37.447",
                      results: [
                        { pos: 1,  name: "D.Senna",           driverRef: "D.Senna",           time: "21:20.679", gap: "",         penalty: "", bestLap: "1:37.475", fastestLap: false },
                        { pos: 2,  name: "2R4_X_Ghost_X",      driverRef: "2R4_X_Ghost_X",      time: "",           gap: "+07.673",   penalty: "", bestLap: "1:37.447", fastestLap: true  },
                        { pos: 3,  name: "2R4@.M.C",           driverRef: "2R4@.M.C",           time: "",           gap: "+20.494",   penalty: "", bestLap: "1:39.010", fastestLap: false },
                        { pos: 4,  name: "Rodrigo Marques",    driverRef: "Rodrigo Marques",    time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:38.045", fastestLap: false, ourDriver: true },
                        { pos: 5,  name: "Pedro Dias",         driverRef: "Pedro Dias",         time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:39.130", fastestLap: false, ourDriver: true },
                        { pos: 6,  name: "RTW_Vag,tdi.pt",     driverRef: "RTW_Vag,tdi.pt",     time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:38.091", fastestLap: false },
                        { pos: 7,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira",     time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:37.665", fastestLap: false },
                        { pos: 8,  name: "NexuS_BPF",          driverRef: "NexuS_BPF",          time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:38.677", fastestLap: false },
                        { pos: 9,  name: "Nuno\"TheSnail\"PT", driverRef: "Nuno\"TheSnail\"PT", time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:39.386", fastestLap: false },
                        { pos: 10, name: "B.Moreira",          driverRef: "B.Moreira",          time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:39.994", fastestLap: false },
                        { pos: 11, name: "2R4_Capucho_44",     driverRef: "2R4_Capucho_44",     time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:39.520", fastestLap: false },
                        { pos: 12, name: "RTW_SaVaGeGT",       driverRef: "RTW_SaVaGeGT",       time: "",           gap: "1 Volta",   penalty: "", bestLap: "1:38.909", fastestLap: false },
                        { pos: 13, name: "ricardinho_RS3",     driverRef: "ricardinho_RS3",     time: "",           gap: "NC",        penalty: "", bestLap: "1:40.455", fastestLap: false },
                        { pos: 14, name: "Edgar",             driverRef: "Edgar",             time: "",           gap: "NC",        penalty: "", bestLap: "",          fastestLap: false }
                      ]
                    }
                  ]
                },
                {
                  room: "Sala 2",
                  streamUrl: "https://www.youtube.com/watch?v=d5bKFUltFjo",
                  sessions: [
                    {
                      type: "qualifying",
                      label: "Qualificação",
                      results: [
                        { pos: 1,  name: "Ratax5",             driverRef: "Ratax5",             gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:38.162" },
                        { pos: 2,  name: "Sarking8",           driverRef: "Sarking8",           gap: "+00.515", penalty: "", pole: false, fastestLap: false, bestLap: "1:38.677" },
                        { pos: 3,  name: "Raulpombal",         driverRef: "Raulpombal",         gap: "+00.530", penalty: "", pole: false, fastestLap: false, bestLap: "1:38.692" },
                        { pos: 4,  name: "Hugo Seixas",        driverRef: "Hugo Seixas",        gap: "+01.162", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.324", ourDriver: true },
                        { pos: 5,  name: "JhonnyRenas",        driverRef: "JhonnyRenas",        gap: "+01.248", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.410" },
                        { pos: 6,  name: "L.S.R._Sapo_666",    driverRef: "L.S.R._Sapo_666",    gap: "+01.299", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.461" },
                        { pos: 7,  name: "Brissos69 Pitbox",   driverRef: "Brissos69 Pitbox",   gap: "+01.385", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.547" },
                        { pos: 8,  name: "YT_RapidusJD",       driverRef: "YT_RapidusJD",       gap: "+01.482", penalty: "", pole: false, fastestLap: false, bestLap: "1:39.644" },
                        { pos: 9,  name: "Oliveira",           driverRef: "Oliveira",           gap: "+02.743", penalty: "", pole: false, fastestLap: false, bestLap: "1:40.905" },
                        { pos: 10, name: "Fortunato73",        driverRef: "Fortunato73",        gap: "+04.662", penalty: "", pole: false, fastestLap: false, bestLap: "1:42.824" },
                        { pos: 11, name: "Hugo Costa",         driverRef: "Hugo Costa",         gap: "+05.687", penalty: "", pole: false, fastestLap: false, bestLap: "1:43.849", ourDriver: true },
                        { pos: 12, name: "TheChem_24",         driverRef: "TheChem_24",         gap: "+06.263", penalty: "", pole: false, fastestLap: false, bestLap: "1:44.425" },
                        { pos: 13, name: "GodDeviL",           driverRef: "GodDeviL",           gap: "+08.204", penalty: "", pole: false, fastestLap: false, bestLap: "1:46.366" }
                      ]
                    },
                    {
                      type: "race",
                      label: "Corrida",
                      duration: "20 min",
                      fastestLapTime: "1:38.149",
                      results: [
                        { pos: 1,  name: "Ratax5",             driverRef: "Ratax5",             time: "20:01.781", gap: "",           penalty: "",          bestLap: "1:38.149", fastestLap: true  },
                        { pos: 2,  name: "Hugo Seixas",        driverRef: "Hugo Seixas",        time: "",           gap: "+06.198",     penalty: "",          bestLap: "1:39.457", fastestLap: false, ourDriver: true },
                        { pos: 3,  name: "JhonnyRenas",        driverRef: "JhonnyRenas",        time: "",           gap: "+10.261",     penalty: "",          bestLap: "1:39.154", fastestLap: false },
                        { pos: 4,  name: "Sarking8",           driverRef: "Sarking8",           time: "",           gap: "+12.276",     penalty: "",          bestLap: "1:39.522", fastestLap: false },
                        { pos: 5,  name: "GodDeviL",           driverRef: "GodDeviL",           time: "",           gap: "+12.696",     penalty: "",          bestLap: "1:39.298", fastestLap: false },
                        { pos: 6,  name: "Raulpombal",         driverRef: "Raulpombal",         time: "",           gap: "+22.522",     penalty: "",          bestLap: "1:40.653", fastestLap: false },
                        { pos: 7,  name: "Oliveira",           driverRef: "Oliveira",           time: "",           gap: "+23.037",     penalty: "",          bestLap: "1:40.110", fastestLap: false },
                        { pos: 8,  name: "Brissos69 Pitbox",   driverRef: "Brissos69 Pitbox",   time: "",           gap: "+29.462",     penalty: "",          bestLap: "1:40.681", fastestLap: false },
                        { pos: 9,  name: "TheChem_24",         driverRef: "TheChem_24",         time: "",           gap: "+33.628",     penalty: "",          bestLap: "1:41.065", fastestLap: false },
                        { pos: 10, name: "Hugo Costa",         driverRef: "Hugo Costa",         time: "",           gap: "+38.275",     penalty: "",          bestLap: "1:40.808", fastestLap: false, ourDriver: true },
                        { pos: 11, name: "L.S.R._Sapo_666",    driverRef: "L.S.R._Sapo_666",    time: "",           gap: "+43.465",     penalty: "",          bestLap: "1:40.674", fastestLap: false },
                        { pos: 12, name: "Fortunato73",        driverRef: "Fortunato73",        time: "",           gap: "+1:04.954",   penalty: "0:01.000",  bestLap: "1:42.731", fastestLap: false },
                        { pos: 13, name: "YT_RapidusJD",       driverRef: "YT_RapidusJD",       time: "",           gap: "+1:08.530",   penalty: "",          bestLap: "1:40.540", fastestLap: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "WRT x Pitbox",
          date: "4 de Setembro de 2026",
          track: "Nürburgring 24h",
          car: "Gr.3",
          duration: "90 min",
          streamUrl: "https://www.youtube.com/live/5UcLEu15bRc",
          fastestLapTime: "8:19.388",
          drivers: [
            { name: "Pedro Oliveira",    driverRef: "Pedro Oliveira",    car: "RX-VISION GT3 CONCEPT",         time: "1:30:59.680", gap: "",           penalty: "", bestLap: "8:29.429",  fastestLap: false },
            { name: "Rodrigo Marques",   driverRef: "Rodrigo Marques",   car: "WRX Gr.3",                      time: "",             gap: "+03.938",     penalty: "", bestLap: "8:19.388",  fastestLap: true, ourDriver: true },
            { name: "Nuno\"TheSnail\"PT", driverRef: "Nuno\"TheSnail\"PT", car: "WRX Gr.3",                      time: "",             gap: "+16.149",     penalty: "", bestLap: "8:34.995",  fastestLap: false },
            { name: "Rsantos059",        driverRef: "Rsantos059",        car: "296 GT3 '23",                   time: "",             gap: "+23.195",     penalty: "", bestLap: "8:30.962",  fastestLap: false },
            { name: "Marco Silva",       driverRef: "Marco Silva",       car: "M6 GT3 Endurance Model '16",    time: "",             gap: "+1:11.536",   penalty: "", bestLap: "8:39.713",  fastestLap: false },
            { name: "Vini",              driverRef: "Vini",              car: "911 GT3 R (992) '22",           time: "",             gap: "+1:24.123",   penalty: "", bestLap: "8:33.873",  fastestLap: false },
            { name: "JhonnyRenas",       driverRef: "JhonnyRenas",       car: "Mercedes-AMG GT3 '20",          time: "",             gap: "+1:36.144",   penalty: "", bestLap: "8:45.324",  fastestLap: false },
            { name: "Oliveira",          driverRef: "Oliveira",          car: "296 GT3 '23",                   time: "",             gap: "+1:53.352",   penalty: "", bestLap: "8:36.119",  fastestLap: false },
            { name: "ricardinho_RS3",    driverRef: "ricardinho_RS3",    car: "911 GT3 R (992) '22",           time: "",             gap: "+2:15.482",   penalty: "", bestLap: "8:41.556",  fastestLap: false },
            { name: "Brissos69 Pitbox",  driverRef: "Brissos69 Pitbox",  car: "M6 GT3 Sprint Model '16",       time: "",             gap: "+2:48.917",   penalty: "", bestLap: "8:44.646",  fastestLap: false },
            { name: "#96 Gtc_P.Pires",   driverRef: "#96 Gtc_P.Pires",   car: "Mercedes-AMG GT3 '20",          time: "",             gap: "+3:32.664",   penalty: "", bestLap: "9:06.900",  fastestLap: false },
            { name: "Ratax5",            driverRef: "Ratax5",            car: "911 GT3 R (992) '22",           time: "",             gap: "1 Volta",     penalty: "", bestLap: "8:54.854",  fastestLap: false },
            { name: "WRT_Patrício",      driverRef: "WRT_Patrício",      car: "911 RSR (991) '17",             time: "",             gap: "NC",          penalty: "", bestLap: "10:05.973", fastestLap: false },
            { name: "Ana Pereira",       driverRef: "Ana Pereira",       car: "296 GT3 '23",                   time: "",             gap: "NC",          penalty: "", bestLap: "",           fastestLap: false }
          ]
        },
        {
          name: "Spa",
          date: "12 de Setembro de 2026",
          track: "Circuit de Spa-Francorchamps",
          car: "Toyota 86 GRMN '16",
          duration: "60 min",
          fastestLapTime: "",
          drivers: []
        }
      ]
    }
  ]

};
