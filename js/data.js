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
      role: "FVenda117",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252457668913213/d826912dd87bf5c0a672bbbb14c73f1b_body.png",
      flag: "🇵🇹",
      admin: true
    },
    {
      name: "Luís Oliveira",
      number: "7",
      role: "luismco1983",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252359614088350/80d93e238fc71e2a2bd23599b5d84904_body.png",
      flag: "🇵🇹",
      admin: true
    },
    {
      name: "Nuno \"TheSnail\" PT",
      number: "27",
      role: "PTdeltaPT",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251480039713311/ec8e04041d82a24d27a987f0f2e86c22_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Ricardo",
      number: "44",
      role: "ricardinho_RS3",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://www.gran-turismo.com/pt/gt7/user/mymenu/92b81ac6-6f69-43e3-804a-faf8f22df647/profile",
      flag: "🇵🇹"
    },
    {
      name: "Guilherme",
      number: "66",
      role: "GnomoJovial422",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252152109954745/eeb361bf41a0b558b0bcf5d1924fffef_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Gil",
      number: "11",
      role: "GilPatinhos",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251978051830290/ecb7903acdd5c99145d8345c106ef2ba_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Marco Silva",
      number: "18",
      role: "BOBMarleyMS",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹"
    },
    {
      name: "Tiago Pacheco",
      number: "46",
      role: "PatoBravo46",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹"
    },
    {
      name: "Simão Melo",
      number: "8",
      role: "simaotmelo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251389242580729/fb9c0a768f915ed785d97601bbaa6347_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Francisco",
      number: "46",
      role: "IRT_Fancisco_vr46",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252042360228720/0006fa911451f050de89055b7d50f69c_body.png",
      flag: "🇵🇹"
    },
    {
      name: "André Gaspar",
      number: "44",
      role: "ANDRE_BOSS",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://www.gran-turismo.com/common/dist/gt7/companion/images/0f71c1f701e0aa00014efaf283a12312.png",
      flag: "🇵🇹"
    },
    {
      name: "Aurelio",
      number: "07",
      role: "Aureliod95",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Lima",
      number: "13",
      role: "Lyymax",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹"
    },
    {
      name: "Rodrigo Amorim",
      number: "12",
      role: "Amorim_Rodrigo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251921339234160/9b366b82d5d3687576039252c67d84ce_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Francisco Silva",
      number: "7",
      role: "XicoFininho83",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251558231891384/6bb08711a289acae1a9dc151fee45626_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Tiago Freitas",
      number: "27",
      role: "tiagofreitas_27",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252126902542239/d525f1402d1cd4bd260fdbfe1a20fdfd_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Oliveira",
      number: "14",
      role: "oraculo95",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252184395549957/71ce697b3666743ef96aa21d257242cb_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Renato Oliveira",
      number: "21",
      role: "JhonnyRenas",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://www.gran-turismo.com/common/dist/gt7/companion/images/0f71c1f701e0aa00014efaf283a12312.png",
      flag: "🇵🇹"
    },
    {
      name: "António Brissos",
      number: "69",
      role: "Brissos69",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251946229217751/a401e251160af49e27bca28dd53f4005_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Rocha",
      number: "26",
      role: "ajudasete7",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251947261659178/504ef1b097664c13eeda12fdc7f42aa8_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Ricardo Duarte",
      number: "73",
      role: "rasd_qz",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251394765052392/ab73a36383d7a21f7e730ff89d2f2c60_body.png",
      flag: "🇵🇹"
    },
        {
      name: "Rui Rei",
      number: "99",
      role: "Ratax55",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251920298943512/04b9dc3a5d8677135d3ee7785bfa2fa0_body.png",
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
  ],

  /* ─────────────────────────────────────────────
     GALLERY
     Fields: image, caption, category (optional)
     ───────────────────────────────────────────── */
  gallery: [
    {
        "event": "GR3 R1",
        "sub": "Dragon Trail Seaside · 25 Abr",
        "category": "GR3",
        "cover": "images/R1 - Dragon Trail/Dragon Trail - Litoral__8.jpeg",
        "images": [
            "images/R1 - Dragon Trail/Dragon Trail - Litoral_.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__1.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__10.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__11.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__12.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__13.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__14.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__15.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__16.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__17.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__18.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__19.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__2.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__20.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__21.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__22.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__23.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__24.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__25.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__26.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__27.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__28.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__29.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__3.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__30.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__31.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__32.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__33.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__34.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__35.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__36.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__37.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__38.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__39.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__4.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__40.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__41.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__42.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__43.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__44.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__45.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__46.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__47.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__5.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__6.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__7.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__8.jpeg",
            "images/R1 - Dragon Trail/Dragon Trail - Litoral__9.jpeg"
        ]
    },
    {
        "event": "GR3 R2",
        "sub": "Red Bull Ring · 02 Mai",
        "category": "GR3",
        "cover": "images/R2 - RedBull Ring/Red Bull Ring__10.jpeg",
        "images": [
            "images/R2 - RedBull Ring/Red Bull Ring_.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__1.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__10.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__11.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__12.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__13.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__14.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__15.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__16.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__17.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__18.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__19.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__2.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__20.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__21.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__22.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__23.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__24.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__25.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__26.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__27.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__28.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__29.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__3.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__30.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__31.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__32.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__33.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__34.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__35.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__36.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__37.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__38.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__39.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__4.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__40.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__41.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__42.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__43.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__5.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__6.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__7.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__8.jpeg",
            "images/R2 - RedBull Ring/Red Bull Ring__9.jpeg"
        ]
    },
    {
        "event": "GR3 R3",
        "sub": "Tokyo Expressway · 09 Mai",
        "category": "GR3",
        "cover": "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__1.jpeg",
        "images": [
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário_.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__1.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__10.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__11.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__12.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__13.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__14.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__15.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__16.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__17.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__18.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__19.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__2.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__20.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__21.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__22.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__23.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__24.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__25.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__26.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__27.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__28.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__29.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__3.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__30.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__31.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__32.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__4.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__5.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__6.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__7.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__8.jpeg",
            "images/R3 - Tokyo Expressway/Tokyo Expressway - Sul em Sentido Horário__9.jpeg"
        ]
    },
    {
        "event": "GR3 R4",
        "sub": "Nürburgring 24h · 16 Mai",
        "category": "GR3",
        "cover": "images/R4 - Nürburgring/24h Nürburgring__30.jpeg",
        "images": [
            "images/R4 - Nürburgring/24h Nürburgring_.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__1.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__10.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__11.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__12.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__13.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__14.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__15.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__16.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__17.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__18.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__19.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__2.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__20.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__21.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__22.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__23.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__24.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__25.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__26.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__27.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__28.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__29.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__3.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__30.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__31.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__32.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__33.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__34.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__35.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__36.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__37.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__38.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__39.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__4.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__40.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__41.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__42.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__43.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__44.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__45.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__5.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__6.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__7.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__8.jpeg",
            "images/R4 - Nürburgring/24h Nürburgring__9.jpeg"
        ]
    },
    {
        "event": "GR3 R5",
        "sub": "Autodrome Lago Maggiore · 23 Mai",
        "category": "GR3",
        "cover": "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__18.jpeg",
        "images": [
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo_.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__1.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__10.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__11.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__12.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__13.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__14.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__15.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__16.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__17.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__18.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__19.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__2.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__20.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__21.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__22.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__23.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__24.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__25.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__26.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__27.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__28.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__29.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__3.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__30.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__31.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__4.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__5.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__6.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__7.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__8.jpeg",
            "images/R5 - Lago Maggiore/Autodrome Lago Maggiore - Completo__9.jpeg"
        ]
    },
    {
        "event": "GR3 R6",
        "sub": "Spa 24h Layout · 30 Mai",
        "category": "GR3",
        "cover": "images/R6 -Spa/Circuit de Spa-Francorchamps__15.jpeg",
        "images": [
            "images/R6 -Spa/Circuit de Spa-Francorchamps_.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__1.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__2.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__3.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__4.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__5.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__6.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__7.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__8.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__9.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__10.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__11.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__12.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__13.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__14.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__15.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__16.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__17.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__18.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__19.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__20.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__21.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__22.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__23.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__24.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__25.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__26.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__27.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__28.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__29.jpeg",
            "images/R6 -Spa/Circuit de Spa-Francorchamps__30.jpeg"
        ]
    },
    {
        "event": "GR3 R7",
        "sub": "Blue Moon Bay Speedway · 06 Jun",
        "category": "GR3",
        "cover": "",
        "images": []
    },
    {
        "event": "GR3 R8",
        "sub": "24 Heures du Mans · 13 Jun",
        "category": "GR3",
        "cover": "",
        "images": []
    },
    {
        "event": "Civic Cup",
        "sub": "Evento Especial",
        "category": "Civic Cup",
        "cover": "images/CIVIC CUP/CivicCUP_1.jpeg",
        "images": [
            "images/CIVIC CUP/CivicCUP_1.jpeg",
            "images/CIVIC CUP/CivicCUP_2.jpeg",
            "images/CIVIC CUP/CivicCUP_3.jpeg",
            "images/CIVIC CUP/CivicCUP_4.jpeg",
            "images/CIVIC CUP/CivicCUP_5.jpeg",
            "images/CIVIC CUP/CivicCUP_6.jpeg",
            "images/CIVIC CUP/CivicCUP_7.jpeg",
            "images/CIVIC CUP/CivicCUP_8.jpeg",
            "images/CIVIC CUP/CivicCUP_9.jpeg",
            "images/CIVIC CUP/CivicCUP_10.jpeg",
            "images/CIVIC CUP/CivicCUP_11.jpeg",
            "images/CIVIC CUP/CivicCUP_12.jpeg",
            "images/CIVIC CUP/CivicCUP_13.jpeg",
            "images/CIVIC CUP/CivicCUP_14.jpeg",
            "images/CIVIC CUP/CivicCUP_15.jpeg",
            "images/CIVIC CUP/CivicCUP_16.jpeg",
            "images/CIVIC CUP/CivicCUP_17.jpeg",
            "images/CIVIC CUP/CivicCUP_18.jpeg",
            "images/CIVIC CUP/CivicCUP_19.jpeg"
        ]
    },
    {
        "event": "6H Barcelona",
        "sub": "Circuit de Barcelona-Catalunya · 07 Jun",
        "category": "Endurance",
        "cover": "",
        "images": []
    }
],

  /* ─────────────────────────────────────────────
     SPONSORS
     Fields: name, logo, url
     ───────────────────────────────────────────── */
  sponsors: [
    {
      name: "3D2You",
      logo: "images/3d2you.jpeg",
      url: "https://www.instagram.com/3d2you.pt/"
    },
    {
      name: "Joias Soltas",
      logo: "images/JOIAS SOLTAS.jpeg",
      url: "https://www.instagram.com/joiassoltas?igsh=MTBhY3huY2hjenJpZQ=="
    },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" },
    { name: "", logo: "", url: "" }
  ]

};
