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
      name: "Caceteira",
      number: "00",
      role: "Caceteira_RTP",
      gtName: "Caceteira_RTP",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Caceteira/Caceteira_Rosa.png",
      flag: "🇵🇹"
    },
    {
      name: "Rui Silva",
      number: "3",
      role: "pandafrass",
      gtName: "Pandex",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Rui Silva/RuiSilva_Preto.png",
      flag: "🇵🇹",
      pilotoComunidadeMes: true
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
      flag: "🇵🇹"
    },
    {
      name: "Bruno Teixeira",
      number: "12",
      role: "BrunoCm1997",
      gtName: "RTP_Brunocm97",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Bruno Teixeira/BrunoTeixeira_Laranja.png",
      flag: "🇵🇹",
      pilotoMes: true
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
      flag: "🇵🇹"
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
      name: "Luís Garcia",
      number: "56",
      role: "LuisHGarcia",
      gtName: "L. Garcia",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "images/drivers/Luis Garcia/LuisGarcia_Preto.png",
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
      name: "Campeonato Interno RTP",
      platform: "GT7",
      description: "Campeonato interno da RTP Racing Team Project em Gran Turismo 7, disputado ao longo de 7 rondas entre os pilotos da equipa.",
      logo: "images/favicon-192.png",
      url: "calendar.html#campeonato-interno"
    },
    {
      name: "Liga Portugal GT",
      platform: "GT7",
      description: "Um dos mais recentes campeonatos de Gran Turismo 7 com 6 divisões e 90 pilotos.",
      logo: "images/LPGT_WORLDSERIES_LOGO.jpg",
      url: "https://www.ligaportugalgt.com/"
    },
    {
      name: "Liga Endurance",
      platform: "GT7",
      description: "Campeonato de resistência de Gran Turismo 7 que junta várias equipas de todo o mundo em provas de longa duração.",
      logo: "images/LIGA ENDURANCE/LIGA_ENDURANCE_LOGO.png",
      url: "liga-endurance.html"
    },
    {
      name: "Street Car Pitbox Cup II",
      platform: "GT7",
      description: "Taça de carros de estrada de Gran Turismo 7 organizada pela Pitbox, com 8 corridas em circuitos clássicos.",
      logo: "images/pitbox-logo.png",
      url: "calendar.html#street-car-pitbox-cup"
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
     SPONSORS — logos live in images/patrocinadores/
     Fields: name, logo, url
       code     (optional) discount code shown on the card with a copy button
       showLink (optional) true adds a "Comprar" button (same style as the code box)
       logoBg   (optional) "light" puts dark logos on a white plate so they
                stay visible on the dark cards
     ───────────────────────────────────────────── */
  sponsors: [
    { name: "Instant Gaming", logo: "images/patrocinadores/instant-gaming.png", url: "https://www.instant-gaming.com/?igr=racingteamproject", showLink: true, logoBg: "light" },
    { name: "Zumub", logo: "images/patrocinadores/zumub.png", url: "http://zumu.be/RTPRACING", code: "RTPRACING", logoBg: "light" },
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
       Campeonato Interno RTP — 7 rounds, F1 points (25-18-15-12-10-8-6-4-2-1).
       null = round not raced yet. A non-RTP guest who won R1 (Prostt) is
       left out, so everyone behind moves up one place.
       ───────────────────────────────────────────── */
    {
      competition: "interno",
      title: "Campeonato Interno RTP",
      subtitle: "Gran Turismo 7 · RTP Racing Team Project · 7 rondas",
      logo: "images/favicon-192.png",
      type: "drivers",
      nullLabel: "—",
      raceLegend: "Pontuação F1: 25 · 18 · 15 · 12 · 10 · 8 · 6 · 4 · 2 · 1",
      roundLabels: ["R1", "R2", "R3", "R4", "R5", "R6", "R7"],
      drivers: [
        { name: "Rafael Agostinho", driverRef: "Rafael Agostinho", rounds: [25, null, null, null, null, null, null], total: 25 },
        { name: "Pedro Dias",       driverRef: "Pedro Dias",       rounds: [18, null, null, null, null, null, null], total: 18 },
        { name: "Miguel Cabral",    driverRef: "Miguel Cabral",    rounds: [15, null, null, null, null, null, null], total: 15 },
        { name: "Wilson Barreto",   driverRef: "Wilson Barreto",   rounds: [12, null, null, null, null, null, null], total: 12 },
        { name: "Rui Silva",        driverRef: "Rui Silva",        rounds: [10, null, null, null, null, null, null], total: 10 },
        { name: "Luís Dantas",      driverRef: "Luís Dantas",      rounds: [8,  null, null, null, null, null, null], total: 8  },
        { name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   rounds: [6,  null, null, null, null, null, null], total: 6  },
        { name: "Rodrigo Marques",  driverRef: "Rodrigo Marques",  rounds: [4,  null, null, null, null, null, null], total: 4  },
        { name: "Luis Gomes",       driverRef: "Luis Gomes",       rounds: [2,  null, null, null, null, null, null], total: 2  },
        { name: "Hugo Costa",       driverRef: "Hugo Costa",       rounds: [1,  null, null, null, null, null, null], total: 1  }
      ],
      raceResults: [
        {
          round: 1,
          label: "Ronda 1",
          date: "3 de Outubro de 2026",
          track: "Deep Forest Raceway",
          sessions: [
            {
              type: "race",
              label: "Corrida",
              results: [
                { pos: 1,  name: "Rafael Agostinho", driverRef: "Rafael Agostinho", psnId: "R. Agostinho",    time: "", gap: "",          penalty: "", points: 25, pole: false, fastestLap: false },
                { pos: 2,  name: "Pedro Dias",       driverRef: "Pedro Dias",       psnId: "RTP_Travincas24", time: "", gap: "",          penalty: "", points: 18, pole: false, fastestLap: false },
                { pos: 3,  name: "Miguel Cabral",    driverRef: "Miguel Cabral",    psnId: "MattiAzores",     time: "", gap: "",          penalty: "", points: 15, pole: false, fastestLap: false },
                { pos: 4,  name: "Wilson Barreto",   driverRef: "Wilson Barreto",   psnId: "Barreto",         time: "", gap: "",          penalty: "", points: 12, pole: false, fastestLap: false },
                { pos: 5,  name: "Rui Silva",        driverRef: "Rui Silva",        psnId: "Pandex",          time: "", gap: "",          penalty: "", points: 10, pole: false, fastestLap: false },
                { pos: 6,  name: "Luís Dantas",      driverRef: "Luís Dantas",      psnId: "Luisikon_TCHT",   time: "", gap: "",          penalty: "", points: 8,  pole: false, fastestLap: false },
                { pos: 7,  name: "Bruno Teixeira",   driverRef: "Bruno Teixeira",   psnId: "RTP_Brunocm97",   time: "", gap: "",          penalty: "", points: 6,  pole: false, fastestLap: false },
                { pos: 8,  name: "Rodrigo Marques",  driverRef: "Rodrigo Marques",  psnId: "100maneiraz",     time: "", gap: "",          penalty: "", points: 4,  pole: false, fastestLap: false },
                { pos: 9,  name: "Luis Gomes",       driverRef: "Luis Gomes",       psnId: "Laferia",         time: "", gap: "",          penalty: "", points: 2,  pole: false, fastestLap: false },
                { pos: 10, name: "Hugo Costa",       driverRef: "Hugo Costa",       psnId: "Hugo Costa",      time: "", gap: "+1 Volta",  penalty: "", points: 1,  pole: false, fastestLap: false }
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
      subtitle: "Gran Turismo 7 · GT6 · Competição Externa · Após Ronda 3",
      logo: "images/LPGT_WORLDSERIES_LOGO.jpg",
      type: "drivers-external",
      drivers: [
        { name: "GT3RT_Flecha",    driverRef: "GT3RT_Flecha",    points: 86 },
        { name: "Jatedoarroz",     driverRef: "Jatedoarroz",     points: 65 },
        { name: "Andrerson Costa", driverRef: "Andrerson Costa", points: 54 },
        { name: "Santimoreira",    driverRef: "Santimoreira",    points: 49 },
        { name: "Pedro Venda",     driverRef: "Pedro Venda",     points: 47, ourDriver: true },
        { name: "Miguel85",        driverRef: "Miguel85",        points: 36 },
        { name: "Zeuskunha",       driverRef: "Zeuskunha",       points: 35 },
        { name: "Tenworms",        driverRef: "Tenworms",        points: 24 },
        { name: "Clarinetes",      driverRef: "Clarinetes",      points: 24 },
        { name: "Rafael Silva",    driverRef: "Rafael Silva",    points: 24 },
        { name: "Sainz",           driverRef: "Sainz",           points: 17 },
        { name: "Sport-Evo_Bruno", driverRef: "Sport-Evo_Bruno", points: 16 },
        { name: "Xapas",           driverRef: "Xapas",           points: 15 },
        { name: "Nyx_Racer",       driverRef: "Nyx_Racer",       points: 11 },
        { name: "Barbas77",        driverRef: "Barbas77",        points: 9  }
      ]
    },

    /* ─────────────────────────────────────────────
       Liga Endurance and Street Car Pitbox Cup II — EXTERNAL
       competitions, same simple POS/Piloto/Pontos table as LPGT.
       Add drivers as { name, driverRef, points, ourDriver } once
       results are out; an empty list shows a "no results yet" row.
       ───────────────────────────────────────────── */
    {
      competition: "endurance",
      title: "Liga Endurance",
      subtitle: "Gran Turismo 7 · Campeonato de resistência · Competição Externa",
      logo: "images/LIGA ENDURANCE/LIGA_ENDURANCE_LOGO.png",
      type: "drivers-external",
      drivers: []
    },
    {
      competition: "pitbox",
      title: "Street Car Pitbox Cup II",
      subtitle: "Gran Turismo 7 · Taça de carros de estrada · Competição Externa · Classificação Final",
      logo: "images/pitbox-logo.png",
      type: "drivers",
      nullLabel: "NC",
      raceLegend: '<span class="race-badge badge-pole">P</span> Pole Position (+2 pontos) &nbsp;·&nbsp; <span class="race-badge badge-fl">VR</span> Volta Mais Rápida (+1 ponto) &nbsp;·&nbsp; NC = Não Classificado',
      /* Points per race, bonuses included (25-20-16-13-11-10-9-8-7-6, 0 from
         11th; +2 pole, +1 fastest lap). null = NC (not classified). */
      roundLabels: ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"],
      drivers: [
        { name: "GodDevil",           driverRef: "GodDevil",       rounds: [28,   28,   27,   16,   20,   11,   11,   15  ], total: 156 },
        { name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", rounds: [16,   16,   10,   null, 28,   28,   26,   20  ], total: 144, ourDriver: true },
        { name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", rounds: [20,   10,   13,   28,   8,    16,   20,   26  ], total: 141 },
        { name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  rounds: [6,    11,   16,   20,   10,   13,   10,   0   ], total: 86  },
        { name: "Thetruevirex",       driverRef: "Thetruevirex",   rounds: [0,    0,    21,   13,   0,    20,   15,   9   ], total: 78  },
        { pos: 5, name: "TDN_Roberto494", driverRef: "TDN_Roberto494", rounds: [13, 20,  6,    0,    13,   0,    16,   10  ], total: 78  },
        { name: "Marco Silva",        driverRef: "Marco Silva",    rounds: [8,    13,   11,   9,    11,   9,    0,    16  ], total: 77  },
        { name: "JohnnyRenas",        driverRef: "JohnnyRenas",    rounds: [9,    6,    0,    11,   9,    7,    9,    8   ], total: 59  },
        { name: "B.Moreira",          driverRef: "B.Moreira",      rounds: [0,    8,    9,    10,   16,   8,    7,    null], total: 58  },
        { name: "Verdelho92",         driverRef: "Verdelho92",     rounds: [10,   7,    7,    7,    7,    6,    0,    11  ], total: 55  },
        { name: "RaulPombal",         driverRef: "RaulPombal",     rounds: [0,    9,    8,    8,    0,    10,   8,    7   ], total: 50  },
        { name: "Basaroco",           driverRef: "Basaroco",       rounds: [7,    0,    0,    6,    6,    0,    6,    6   ], total: 31  },
        { name: "Pedro Venda",        driverRef: "Pedro Venda",    rounds: [11,   null, null, null, null, null, null, null], total: 11,  ourDriver: true }
      ],
      raceResults: [
        {
          round: 1, label: "Corrida 1", date: "2 de Outubro de 2026", track: "Michelin Raceway Road Atlanta",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "GodDevil",          driverRef: "GodDevil",       psnId: "GodDeviL",         gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:22.735" },
                { pos: 2,  name: "Pedro Oliveira",    driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",   gap: "+00.023", penalty: "", pole: false, fastestLap: false, bestLap: "1:22.758" },
                { pos: 3,  name: "Thetruevirex",      driverRef: "Thetruevirex",   psnId: "P.Pires #96",      gap: "+00.473", penalty: "", pole: false, fastestLap: false, bestLap: "1:23.208" },
                { pos: 4,  name: "RTP_Brunocm97",     driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",    gap: "+00.724", penalty: "", pole: false, fastestLap: false, bestLap: "1:23.459", ourDriver: true },
                { pos: 5,  name: "Pedro Venda",       driverRef: "Pedro Venda",    psnId: "Pedro Venda",      gap: "+01.357", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.092", ourDriver: true },
                { pos: 6,  name: "Verdelho92",        driverRef: "Verdelho92",     psnId: "Verdelho",         gap: "+01.660", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.395" },
                { pos: 7,  name: "Marco Silva",       driverRef: "Marco Silva",    psnId: "Marco Silva",      gap: "+02.105", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.840" },
                { pos: 8,  name: "RaulPombal",        driverRef: "RaulPombal",     psnId: "Raulpombal",       gap: "+02.252", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.987" },
                { pos: 9,  name: "TDN_Roberto494",    driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",     gap: "+02.367", penalty: "", pole: false, fastestLap: false, bestLap: "1:25.102" },
                { pos: 10, name: "JohnnyRenas",       driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",      gap: "+04.613", penalty: "", pole: false, fastestLap: false, bestLap: "1:27.348" },
                { pos: 11, name: "Basaroco",          driverRef: "Basaroco",       psnId: "Basaroco",         gap: "+08.240", penalty: "", pole: false, fastestLap: false, bestLap: "1:30.975" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "1:23.056",
              results: [
                { pos: 1,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",          time: "7:05.867", gap: "",        penalty: "", points: 28, pole: true,  fastestLap: true,  bestLap: "1:23.056" },
                { pos: 2,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",    time: "",         gap: "+02.554", penalty: "", points: 20, pole: false, fastestLap: false, bestLap: "1:23.143" },
                { pos: 3,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",     time: "",         gap: "+03.908", penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "1:23.131", ourDriver: true },
                { pos: 4,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",      time: "",         gap: "+10.438", penalty: "", points: 13, pole: false, fastestLap: false, bestLap: "1:24.859" },
                { pos: 5,  name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",       time: "",         gap: "+13.161", penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "1:25.799", ourDriver: true },
                { pos: 6,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",          time: "",         gap: "+17.196", penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "1:24.890" },
                { pos: 7,  name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",       time: "",         gap: "+26.035", penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "1:25.764" },
                { pos: 8,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",       time: "",         gap: "+26.253", penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "1:27.002" },
                { pos: 9,  name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",          time: "",         gap: "+26.496", penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "1:26.984" },
                { pos: 10, name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",        gap: "+29.319", penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "1:26.453" },
                { pos: 11, name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",        time: "",         gap: "+30.697", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:24.968" },
                { pos: 12, name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",       time: "",         gap: "+34.466", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:25.608" },
                { pos: 13, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",         time: "",         gap: "+57.738", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:27.698" }
              ]
            }
          ]
        },
        {
          round: 2, label: "Corrida 2", date: "2 de Outubro de 2026", track: "Blue Moon Bay Speedway - Interior A",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:10.701" },
                { pos: 2,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+00.678", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.379" },
                { pos: 3,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+00.808", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.509" },
                { pos: 4,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+00.967", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.668" },
                { pos: 5,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+01.049", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.750" },
                { pos: 6,  name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+01.092", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.793" },
                { pos: 7,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "+01.119", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.820", ourDriver: true },
                { pos: 8,  name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+01.686", penalty: "", pole: false, fastestLap: false, bestLap: "1:12.387" },
                { pos: 9,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+02.661", penalty: "", pole: false, fastestLap: false, bestLap: "1:13.362" },
                { pos: 10, name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+03.217", penalty: "", pole: false, fastestLap: false, bestLap: "1:13.918" },
                { pos: 11, name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+03.377", penalty: "", pole: false, fastestLap: false, bestLap: "1:14.078" },
                { pos: 12, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+04.255", penalty: "", pole: false, fastestLap: false, bestLap: "1:14.956" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "1:10.824",
              results: [
                { pos: 1,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "6:04.680", gap: "",        penalty: "", points: 28, pole: true,  fastestLap: true,  bestLap: "1:10.824" },
                { pos: 2,    name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+02.845", penalty: "", points: 20, pole: false, fastestLap: false, bestLap: "1:11.784" },
                { pos: 3,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "",         gap: "+03.076", penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "1:11.456", ourDriver: true },
                { pos: 4,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+07.825", penalty: "", points: 13, pole: false, fastestLap: false, bestLap: "1:11.741" },
                { pos: 5,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+09.892", penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "1:12.255" },
                { pos: 6,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "",         gap: "+11.386", penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "1:11.986" },
                { pos: 7,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+11.647", penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "1:12.671" },
                { pos: 8,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+18.747", penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "1:13.538" },
                { pos: 9,    name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+23.904", penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "1:13.674" },
                { pos: 10,   name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+27.082", penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "1:12.791" },
                { pos: 11,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+28.991", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:16.623" },
                { pos: 12,   name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+30.497", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:13.341" },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "", points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 3, label: "Corrida 3", date: "2 de Outubro de 2026", track: "Suzuka Circuit - Circuito Oriental",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "0:50.686" },
                { pos: 2,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+00.020", penalty: "", pole: false, fastestLap: false, bestLap: "0:50.706" },
                { pos: 3,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+00.155", penalty: "", pole: false, fastestLap: false, bestLap: "0:50.841" },
                { pos: 4,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "+00.219", penalty: "", pole: false, fastestLap: false, bestLap: "0:50.905", ourDriver: true },
                { pos: 5,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+00.944", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.630" },
                { pos: 6,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+01.303", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.989" },
                { pos: 7,  name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+01.322", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.008" },
                { pos: 8,  name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+01.344", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.030" },
                { pos: 9,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+01.558", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.244" },
                { pos: 10, name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+01.785", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.471" },
                { pos: 11, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+02.023", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.709" },
                { pos: 12, name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+02.173", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.859" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "0:50.504",
              results: [
                { pos: 1,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "4:14.311", gap: "",        penalty: "", points: 27, pole: true,  fastestLap: false, bestLap: "0:50.756" },
                { pos: 2,    name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+01.020", penalty: "", points: 21, pole: false, fastestLap: true,  bestLap: "0:50.504" },
                { pos: 3,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+04.122", penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "0:50.772" },
                { pos: 4,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "",         gap: "+04.998", penalty: "", points: 13, pole: false, fastestLap: false, bestLap: "0:50.801" },
                { pos: 5,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+05.965", penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "0:50.981" },
                { pos: 6,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "",         gap: "+08.708", penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "0:51.171", ourDriver: true },
                { pos: 7,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+09.785", penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "0:51.859" },
                { pos: 8,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+10.645", penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "0:51.931" },
                { pos: 9,    name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+11.719", penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "0:52.288" },
                { pos: 10,   name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+12.230", penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "0:51.721" },
                { pos: 11,   name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+17.190", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "0:52.786" },
                { pos: 12,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+18.752", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "0:52.535" },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "", points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 4, label: "Corrida 4", date: "2 de Outubro de 2026", track: "Watkins Glen - Percurso Curto",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:11.450" },
                { pos: 2,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "+00.205", penalty: "", pole: false, fastestLap: false, bestLap: "1:11.655", ourDriver: true },
                { pos: 3,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+00.759", penalty: "", pole: false, fastestLap: false, bestLap: "1:12.209" },
                { pos: 4,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+00.878", penalty: "", pole: false, fastestLap: false, bestLap: "1:12.328" },
                { pos: 5,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+01.284", penalty: "", pole: false, fastestLap: false, bestLap: "1:12.734" },
                { pos: 6,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "+01.417", penalty: "", pole: false, fastestLap: false, bestLap: "1:12.867" },
                { pos: 7,  name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+01.553", penalty: "", pole: false, fastestLap: false, bestLap: "1:13.003" },
                { pos: 8,  name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+02.204", penalty: "", pole: false, fastestLap: false, bestLap: "1:13.654" },
                { pos: 9,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+02.677", penalty: "", pole: false, fastestLap: false, bestLap: "1:14.127" },
                { pos: 10, name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+03.471", penalty: "", pole: false, fastestLap: false, bestLap: "1:14.921" },
                { pos: 11, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+03.605", penalty: "", pole: false, fastestLap: false, bestLap: "1:15.055" },
                { pos: 12, name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+04.111", penalty: "", pole: false, fastestLap: false, bestLap: "1:15.561" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "1:12.437",
              results: [
                { pos: 1,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "6:13.984", gap: "",        penalty: "",       points: 28, pole: true,  fastestLap: true,  bestLap: "1:12.437" },
                { pos: 2,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+03.958", penalty: "",       points: 20, pole: false, fastestLap: false, bestLap: "1:13.195" },
                { pos: 3,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "",         gap: "+04.945", penalty: "+1.000", points: 16, pole: false, fastestLap: false, bestLap: "1:13.499" },
                { pos: 4,    name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+07.133", penalty: "",       points: 13, pole: false, fastestLap: false, bestLap: "1:13.034" },
                { pos: 5,    name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+09.273", penalty: "",       points: 11, pole: false, fastestLap: false, bestLap: "1:14.144" },
                { pos: 6,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+09.810", penalty: "",       points: 10, pole: false, fastestLap: false, bestLap: "1:14.838" },
                { pos: 7,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+10.086", penalty: "",       points: 9,  pole: false, fastestLap: false, bestLap: "1:13.900" },
                { pos: 8,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+11.083", penalty: "",       points: 8,  pole: false, fastestLap: false, bestLap: "1:13.886" },
                { pos: 9,    name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+11.507", penalty: "",       points: 7,  pole: false, fastestLap: false, bestLap: "1:14.266" },
                { pos: 10,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+19.171", penalty: "",       points: 6,  pole: false, fastestLap: false, bestLap: "1:15.141" },
                { pos: 11,   name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+29.430", penalty: "+1.000", points: 0,  pole: false, fastestLap: false, bestLap: "1:15.080" },
                { pos: "NC", name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "",         gap: "NC",      penalty: "",       points: 0,  pole: false, fastestLap: false, bestLap: "1:13.775", ourDriver: true },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "",       points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 5, label: "Corrida 5", date: "2 de Outubro de 2026", track: "Sardegna - Traçado B",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:23.420", ourDriver: true },
                { pos: 2,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "+01.065", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.485" },
                { pos: 3,  name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+01.474", penalty: "", pole: false, fastestLap: false, bestLap: "1:24.894" },
                { pos: 4,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+01.622", penalty: "", pole: false, fastestLap: false, bestLap: "1:25.042" },
                { pos: 5,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+02.191", penalty: "", pole: false, fastestLap: false, bestLap: "1:25.611" },
                { pos: 6,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+02.455", penalty: "", pole: false, fastestLap: false, bestLap: "1:25.875" },
                { pos: 7,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+02.836", penalty: "", pole: false, fastestLap: false, bestLap: "1:26.256" },
                { pos: 8,  name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+03.146", penalty: "", pole: false, fastestLap: false, bestLap: "1:26.566" },
                { pos: 9,  name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+03.472", penalty: "", pole: false, fastestLap: false, bestLap: "1:26.892" },
                { pos: 10, name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+03.474", penalty: "", pole: false, fastestLap: false, bestLap: "1:26.894" },
                { pos: 11, name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+04.039", penalty: "", pole: false, fastestLap: false, bestLap: "1:27.459" },
                { pos: 12, name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+04.427", penalty: "", pole: false, fastestLap: false, bestLap: "1:27.847" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "1:24.078",
              results: [
                { pos: 1,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "7:09.330", gap: "",        penalty: "", points: 28, pole: true,  fastestLap: true,  bestLap: "1:24.078", ourDriver: true },
                { pos: 2,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "",         gap: "+12.059", penalty: "", points: 20, pole: false, fastestLap: false, bestLap: "1:25.172" },
                { pos: 3,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+14.604", penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "1:26.169" },
                { pos: 4,    name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+15.018", penalty: "", points: 13, pole: false, fastestLap: false, bestLap: "1:25.070" },
                { pos: 5,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+18.873", penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "1:25.587" },
                { pos: 6,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+19.283", penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "1:25.298" },
                { pos: 7,    name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+27.307", penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "1:27.398" },
                { pos: 8,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "",         gap: "+27.396", penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "1:26.045" },
                { pos: 9,    name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+28.155", penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "1:26.134" },
                { pos: 10,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+33.469", penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "1:26.557" },
                { pos: 11,   name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+37.276", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:28.107" },
                { pos: 12,   name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+41.286", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:25.686" },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "", points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 6, label: "Corrida 6", date: "2 de Outubro de 2026", track: "Tokyo Expressway - Central, sentido horário",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "1:15.773", ourDriver: true },
                { pos: 2,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+00.809", penalty: "", pole: false, fastestLap: false, bestLap: "1:16.582" },
                { pos: 3,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "+00.919", penalty: "", pole: false, fastestLap: false, bestLap: "1:16.692" },
                { pos: 4,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+02.290", penalty: "", pole: false, fastestLap: false, bestLap: "1:18.063" },
                { pos: 5,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+02.667", penalty: "", pole: false, fastestLap: false, bestLap: "1:18.440" },
                { pos: 6,  name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+03.178", penalty: "", pole: false, fastestLap: false, bestLap: "1:18.951" },
                { pos: 7,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+03.221", penalty: "", pole: false, fastestLap: false, bestLap: "1:18.994" },
                { pos: 8,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+03.872", penalty: "", pole: false, fastestLap: false, bestLap: "1:19.645" },
                { pos: 9,  name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+03.926", penalty: "", pole: false, fastestLap: false, bestLap: "1:19.699" },
                { pos: 10, name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+04.222", penalty: "", pole: false, fastestLap: false, bestLap: "1:19.995" },
                { pos: 11, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+04.990", penalty: "", pole: false, fastestLap: false, bestLap: "1:20.763" },
                { pos: 12, name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+05.573", penalty: "", pole: false, fastestLap: false, bestLap: "1:21.346" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "1:16.470",
              results: [
                { pos: 1,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "6:29.528", gap: "",        penalty: "", points: 28, pole: true,  fastestLap: true,  bestLap: "1:16.470", ourDriver: true },
                { pos: 2,    name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+02.725", penalty: "", points: 20, pole: false, fastestLap: false, bestLap: "1:16.735" },
                { pos: 3,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "",         gap: "+05.579", penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "1:17.241" },
                { pos: 4,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+06.981", penalty: "", points: 13, pole: false, fastestLap: false, bestLap: "1:16.990" },
                { pos: 5,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "",         gap: "+08.638", penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "1:17.168" },
                { pos: 6,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+18.438", penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "1:19.473" },
                { pos: 7,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+20.213", penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "1:19.146" },
                { pos: 8,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+21.478", penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "1:19.375" },
                { pos: 9,    name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+23.339", penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "1:19.407" },
                { pos: 10,   name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+24.188", penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "1:19.716" },
                { pos: 11,   name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+28.873", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:19.302" },
                { pos: 12,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+30.017", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "1:21.055" },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "", points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 7, label: "Corrida 7", date: "2 de Outubro de 2026", track: "Willow Springs - Horse Thief Mile",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "0:50.884" },
                { pos: 2,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "+00.034", penalty: "", pole: false, fastestLap: false, bestLap: "0:50.918", ourDriver: true },
                { pos: 3,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "+00.324", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.208" },
                { pos: 4,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+00.445", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.329" },
                { pos: 5,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+00.495", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.379" },
                { pos: 6,  name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+00.880", penalty: "", pole: false, fastestLap: false, bestLap: "0:51.764" },
                { pos: 7,  name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "+01.718", penalty: "", pole: false, fastestLap: false, bestLap: "0:52.602" },
                { pos: 8,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+02.555", penalty: "", pole: false, fastestLap: false, bestLap: "0:53.439" },
                { pos: 9,  name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "+03.134", penalty: "", pole: false, fastestLap: false, bestLap: "0:54.018" },
                { pos: 10, name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+03.840", penalty: "", pole: false, fastestLap: false, bestLap: "0:54.724" },
                { pos: 11, name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+04.180", penalty: "", pole: false, fastestLap: false, bestLap: "0:55.064" },
                { pos: 12, name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "+15.505", penalty: "", pole: false, fastestLap: false, bestLap: "1:06.389" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "5 voltas",
              fastestLapTime: "0:50.895",
              results: [
                { pos: 1,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "4:23.352", gap: "",        penalty: "",       points: 26, pole: false, fastestLap: true,  bestLap: "0:50.895", ourDriver: true },
                { pos: 2,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "",         gap: "+01.436", penalty: "",       points: 20, pole: false, fastestLap: false, bestLap: "0:51.580" },
                { pos: 3,    name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",         gap: "+07.046", penalty: "",       points: 16, pole: false, fastestLap: false, bestLap: "0:51.698" },
                { pos: 4,    name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",         gap: "+10.053", penalty: "",       points: 15, pole: true,  fastestLap: false, bestLap: "0:51.277" },
                { pos: 5,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "",         gap: "+17.265", penalty: "",       points: 11, pole: false, fastestLap: false, bestLap: "0:52.462" },
                { pos: 6,    name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",         gap: "+19.375", penalty: "",       points: 10, pole: false, fastestLap: false, bestLap: "0:53.475" },
                { pos: 7,    name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",         gap: "+26.270", penalty: "",       points: 9,  pole: false, fastestLap: false, bestLap: "0:53.080" },
                { pos: 8,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",         gap: "+27.017", penalty: "",       points: 8,  pole: false, fastestLap: false, bestLap: "0:55.108" },
                { pos: 9,    name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",         gap: "+29.693", penalty: "",       points: 7,  pole: false, fastestLap: false, bestLap: "0:53.567" },
                { pos: 10,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",         gap: "+31.789", penalty: "",       points: 6,  pole: false, fastestLap: false, bestLap: "0:53.476" },
                { pos: 11,   name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",         gap: "+31.824", penalty: "+1.000", points: 0,  pole: false, fastestLap: false, bestLap: "0:52.948" },
                { pos: 12,   name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",         gap: "+39.826", penalty: "",       points: 0,  pole: false, fastestLap: false, bestLap: "0:52.661" },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",         gap: "",        penalty: "",       points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        },
        {
          round: 8, label: "Corrida 8", date: "2 de Outubro de 2026", track: "Nürburgring Nordschleife - 2 voltas",
          sessions: [
            {
              type: "qualifying",
              label: "Qualificação",
              results: [
                { pos: 1,  name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "7:01.493" },
                { pos: 2,  name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     gap: "+00.847", penalty: "", pole: false, fastestLap: false, bestLap: "7:02.340" },
                { pos: 3,  name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      gap: "+04.595", penalty: "", pole: false, fastestLap: false, bestLap: "7:06.088", ourDriver: true },
                { pos: 4,  name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        gap: "+14.375", penalty: "", pole: false, fastestLap: false, bestLap: "7:15.868" },
                { pos: 5,  name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        gap: "+24.435", penalty: "", pole: false, fastestLap: false, bestLap: "7:25.928" },
                { pos: 6,  name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           gap: "+24.697", penalty: "", pole: false, fastestLap: false, bestLap: "7:26.190" },
                { pos: 7,  name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         gap: "+30.199", penalty: "", pole: false, fastestLap: false, bestLap: "7:31.692" },
                { pos: 8,  name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          gap: "+32.704", penalty: "", pole: false, fastestLap: false, bestLap: "7:34.197" },
                { pos: 9,  name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        gap: "+45.322", penalty: "", pole: false, fastestLap: false, bestLap: "7:46.815" },
                { pos: 10, name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           gap: "",        penalty: "", pole: false, fastestLap: false, bestLap: "Sem tempo" },
                { pos: 11, name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       gap: "",        penalty: "", pole: false, fastestLap: false, bestLap: "Sem tempo" },
                { pos: 12, name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", gap: "",        penalty: "", pole: false, fastestLap: false, bestLap: "Sem tempo" }
              ]
            },
            {
              type: "race",
              label: "Corrida",
              duration: "2 voltas",
              fastestLapTime: "7:02.989",
              results: [
                { pos: 1,    name: "Pedro Oliveira",     driverRef: "Pedro Oliveira", psnId: "Pedro Oliveira",     time: "14:12.057", gap: "",          penalty: "", points: 26, pole: false, fastestLap: true,  bestLap: "7:02.989" },
                { pos: 2,    name: "RTP_Brunocm97",      driverRef: "Bruno Teixeira", psnId: "RTP_Brunocm97",      time: "",          gap: "+00.554",   penalty: "", points: 20, pole: false, fastestLap: false, bestLap: "7:03.253", ourDriver: true },
                { pos: 3,    name: "Marco Silva",        driverRef: "Marco Silva",    psnId: "Marco Silva",        time: "",          gap: "+08.284",   penalty: "", points: 16, pole: false, fastestLap: false, bestLap: "7:08.219" },
                { pos: 4,    name: "GodDevil",           driverRef: "GodDevil",       psnId: "GodDeviL",           time: "",          gap: "+14.262",   penalty: "", points: 15, pole: true,  fastestLap: false, bestLap: "7:11.036" },
                { pos: 5,    name: "Verdelho92",         driverRef: "Verdelho92",     psnId: "Verdelho",           time: "",          gap: "+22.843",   penalty: "", points: 11, pole: false, fastestLap: false, bestLap: "7:12.233" },
                { pos: 6,    name: "TDN_Roberto494",     driverRef: "TDN_Roberto494", psnId: "R.Charynczuk",       time: "",          gap: "+24.004",   penalty: "", points: 10, pole: false, fastestLap: false, bestLap: "7:10.734" },
                { pos: 7,    name: "Thetruevirex",       driverRef: "Thetruevirex",   psnId: "P.Pires #96",        time: "",          gap: "+35.929",   penalty: "", points: 9,  pole: false, fastestLap: false, bestLap: "7:11.112" },
                { pos: 8,    name: "JohnnyRenas",        driverRef: "JohnnyRenas",    psnId: "JhonnyRenas",        time: "",          gap: "+46.238",   penalty: "", points: 8,  pole: false, fastestLap: false, bestLap: "7:23.692" },
                { pos: 9,    name: "RaulPombal",         driverRef: "RaulPombal",     psnId: "Raulpombal",         time: "",          gap: "+48.267",   penalty: "", points: 7,  pole: false, fastestLap: false, bestLap: "7:29.750" },
                { pos: 10,   name: "Basaroco",           driverRef: "Basaroco",       psnId: "Basaroco",           time: "",          gap: "+52.303",   penalty: "", points: 6,  pole: false, fastestLap: false, bestLap: "7:20.083" },
                { pos: 11,   name: "Nuno\"thesnail\"PT", driverRef: "Nuno thesnail",  psnId: "Nuno\"TheSnail\"PT", time: "",          gap: "+1:12.472", penalty: "", points: 0,  pole: false, fastestLap: false, bestLap: "7:41.092" },
                { pos: "NC", name: "B.Moreira",          driverRef: "B.Moreira",      psnId: "B.Moreira",          time: "",          gap: "NC",        penalty: "", points: 0,  pole: false, fastestLap: false },
                { pos: "NC", name: "Pedro Venda",        driverRef: "Pedro Venda",    psnId: "Pedro Venda",        time: "",          gap: "",          penalty: "", points: 0,  pole: false, fastestLap: false, ourDriver: true }
              ]
            }
          ]
        }
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
          stages: [
            {
              stage: "Fun Endurance",
              car: "Toyota 86 GRMN '16",
              rooms: [
                {
                  room: "Fun Endurance",
                  sessions: [
                    {
                      type: "qualifying",
                      label: "Qualificação",
                      results: [
                        { pos: 1,  name: "Mira",             driverRef: "Mira",             gap: "",        penalty: "", pole: true,  fastestLap: false, bestLap: "2:43.820" },
                        { pos: 2,  name: "Elias Torres",      driverRef: "Elias Torres",      gap: "+00.041", penalty: "", pole: false, fastestLap: false, bestLap: "2:43.861", ourDriver: true },
                        { pos: 3,  name: "Anonymous_Gt",      driverRef: "Anonymous_Gt",      gap: "+00.071", penalty: "", pole: false, fastestLap: false, bestLap: "2:43.891" },
                        { pos: 4,  name: "Wilson Barreto",    driverRef: "Wilson Barreto",    gap: "+00.481", penalty: "", pole: false, fastestLap: false, bestLap: "2:44.301", ourDriver: true },
                        { pos: 5,  name: "YT_RapidusJD",      driverRef: "YT_RapidusJD",      gap: "+00.743", penalty: "", pole: false, fastestLap: false, bestLap: "2:44.563" },
                        { pos: 6,  name: "Sérgio Marques",    driverRef: "Sérgio Marques",    gap: "+00.753", penalty: "", pole: false, fastestLap: false, bestLap: "2:44.573", ourDriver: true },
                        { pos: 7,  name: "RTW_SaVaGeGT",      driverRef: "RTW_SaVaGeGT",      gap: "+00.888", penalty: "", pole: false, fastestLap: false, bestLap: "2:44.708" },
                        { pos: 8,  name: "WRT_Patrício",      driverRef: "WRT_Patrício",      gap: "+01.248", penalty: "", pole: false, fastestLap: false, bestLap: "2:45.068" },
                        { pos: 9,  name: "Batigol_IMD",       driverRef: "Batigol_IMD",       gap: "+01.339", penalty: "", pole: false, fastestLap: false, bestLap: "2:45.159" },
                        { pos: 10, name: "GT_Ghost_5S",       driverRef: "GT_Ghost_5S",       gap: "+01.362", penalty: "", pole: false, fastestLap: false, bestLap: "2:45.182" },
                        { pos: 11, name: "2R4@.M.C",          driverRef: "2R4@.M.C",          gap: "+01.382", penalty: "", pole: false, fastestLap: false, bestLap: "2:45.202" },
                        { pos: 12, name: "Décio.H",           driverRef: "Décio.H",           gap: "+01.586", penalty: "", pole: false, fastestLap: false, bestLap: "2:45.406" },
                        { pos: 13, name: "2R4_Capucho_44",    driverRef: "2R4_Capucho_44",    gap: "+02.872", penalty: "", pole: false, fastestLap: false, bestLap: "2:46.692" },
                        { pos: 14, name: "Luis Gomes",        driverRef: "Luis Gomes",        gap: "+03.855", penalty: "", pole: false, fastestLap: false, bestLap: "2:47.675", ourDriver: true }
                      ]
                    },
                    {
                      type: "race",
                      label: "Corrida",
                      duration: "60 min",
                      fastestLapTime: "2:45.848",
                      results: [
                        { pos: 1,  name: "Elias Torres",      driverRef: "Elias Torres",      time: "1:00:20.881", gap: "",          penalty: "",         bestLap: "2:45.933", fastestLap: false, ourDriver: true },
                        { pos: 2,  name: "Wilson Barreto",    driverRef: "Wilson Barreto",    time: "",             gap: "+01.729",    penalty: "",         bestLap: "2:45.848", fastestLap: true,  ourDriver: true },
                        { pos: 3,  name: "Anonymous_Gt",      driverRef: "Anonymous_Gt",      time: "",             gap: "+11.658",    penalty: "",         bestLap: "2:46.613", fastestLap: false },
                        { pos: 4,  name: "Sérgio Marques",    driverRef: "Sérgio Marques",    time: "",             gap: "+12.368",    penalty: "0:01.000", bestLap: "2:46.599", fastestLap: false, ourDriver: true },
                        { pos: 5,  name: "Mira",             driverRef: "Mira",             time: "",             gap: "+14.327",    penalty: "",         bestLap: "2:46.634", fastestLap: false },
                        { pos: 6,  name: "GT_Ghost_5S",       driverRef: "GT_Ghost_5S",       time: "",             gap: "+25.251",    penalty: "",         bestLap: "2:47.138", fastestLap: false },
                        { pos: 7,  name: "2R4@.M.C",          driverRef: "2R4@.M.C",          time: "",             gap: "+27.025",    penalty: "",         bestLap: "2:46.961", fastestLap: false },
                        { pos: 8,  name: "WRT_Patrício",      driverRef: "WRT_Patrício",      time: "",             gap: "+29.542",    penalty: "",         bestLap: "2:47.024", fastestLap: false },
                        { pos: 9,  name: "YT_RapidusJD",      driverRef: "YT_RapidusJD",      time: "",             gap: "+1:00.543",  penalty: "",         bestLap: "2:47.646", fastestLap: false },
                        { pos: 10, name: "Luis Gomes",        driverRef: "Luis Gomes",        time: "",             gap: "+1:10.026",  penalty: "",         bestLap: "2:48.833", fastestLap: false, ourDriver: true },
                        { pos: 11, name: "Décio.H",           driverRef: "Décio.H",           time: "",             gap: "+1:21.335",  penalty: "",         bestLap: "2:47.555", fastestLap: false },
                        { pos: 12, name: "2R4_Capucho_44",    driverRef: "2R4_Capucho_44",    time: "",             gap: "1 Volta",    penalty: "",         bestLap: "2:50.197", fastestLap: false },
                        { pos: 13, name: "RTW_SaVaGeGT",      driverRef: "RTW_SaVaGeGT",      time: "",             gap: "NC",         penalty: "",         bestLap: "2:47.791", fastestLap: false },
                        { pos: 14, name: "Batigol_IMD",       driverRef: "Batigol_IMD",       time: "",             gap: "NC",         penalty: "",         bestLap: "2:47.392", fastestLap: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

};
