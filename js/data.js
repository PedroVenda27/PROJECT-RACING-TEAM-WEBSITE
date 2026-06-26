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
  ],

  /* ─────────────────────────────────────────────
     LEAGUES
     Fields: name, platform, description, logo, url
     ───────────────────────────────────────────── */
  leagues: [
    {
      name: "PITBOX <br> GR3 CHAMPIONSHIP",
      platform: "GT7",
      description: "O nosso Campeonato interno Semanal (Sábados) de Categoria Gr3.",
      logo: "images/PITBOX_GR3_LOGO.png",
      url: ""
    },
    {
      name: "PITBOX <br> APEX CUP GR2",
      platform: "GT7",
      description: "O nosso Campeonato interno Semanal (Sextas-Feiras) de Categoria Gr2.",
      logo: "images/PITBOX_GR2_LOGO.png",
      url: "https://www.bpftr.com/eventos"
    },
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
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" }
  ]

};
