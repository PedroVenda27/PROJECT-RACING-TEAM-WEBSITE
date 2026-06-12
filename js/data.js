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
      role: "Luismco1983",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251486335757484/c8a54ebc9fc37e8a7cb2220702524a4e_body.png",
      flag: "🇵🇹",
      admin: true
    },
    {
      name: "Pedro Oliveira",
      number: "14",
      role: "oraculo95",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251669371073716/f1289388633d0c88610c99f4b8f2b180_body.png",
      flag: "🇵🇹"
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
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252004152986794/7299bf1678678d63b050007ad0e3d18b_body.png",
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
      name: "Marco Silva",
      number: "18",
      role: "MaRcOSiLvaRiDeR",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251393885997468/60e3c99b42579be3d7e6afbe9e81488a_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Tiago Pacheco",
      number: "46",
      role: "PatoBravo46",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21252342187402789/85a74a49221d944a1d79c91dfb7494db_body.png",
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
      name: "Francisco Silva",
      number: "7",
      role: "XicoFiNinHo83",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251558231891384/6bb08711a289acae1a9dc151fee45626_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Simão Teixeira de Melo",
      number: "8",
      role: "simaotmelo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251486335757484/c8a54ebc9fc37e8a7cb2220702524a4e_body.png",
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
      name: "Rui Rei",
      number: "5",
      role: "ratax55",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251920298943512/04b9dc3a5d8677135d3ee7785bfa2fa0_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Pedro Pires",
      number: "21",
      role: "TheTrueVirex",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251587542493181/834545d4f0e3520e49bae256e940890c_body.png",
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
      name: "Rodrigo Amorim",
      number: "12",
      role: "Amorim_Rodrigo",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251921339234160/9b366b82d5d3687576039252c67d84ce_body.png",
      flag: "🇵🇹"
    },
    {
      name: "Sérgio Figueira",
      number: "19",
      role: "Raiden-tuga",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
      flag: "🇵🇹"
    },
    {
      name: "Diogo Sousa",
      number: "7",
      role: "RaZzilla_drak",
      nationality: "Portugal",
      series: "Gran Turismo 7",
      image: "",
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
      name: "Ricardo Melo",
      number: "239",
      role: "Ricardo_Melo_23",
      nationality: "Brasil",
      series: "Gran Turismo 7",
      image: "https://ugc.gt7.game.gran-turismo.com/23/21251963118315985/3f488c8dbd8bc9ef1286dfee97ce5152_body.png",
      flag: "🇧🇷"
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
      description: "Campeonato externo de Gran Turismo 7.",
      logo: "images/TPGT_LOGO.png",
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
     STANDINGS
     ───────────────────────────────────────────── */
  standings: [
    {
      competition: "GR3",
      label: "Pitbox GR3 Championship",
      logo: "images/PITBOX_GR3_LOGO.png",
      title: "Pitbox <span class=\"text-yellow\">GR3 Championship</span>",
      subtitle: "Campeonato interno semanal — Sábados · Categoria Gr.3 · 21:30 Hora Local · 16 Pilotos em Pista",
      rounds: ["Sprint 1","Race 1","Sprint 2","Race 2","Sprint 3","Race 3","Race 4","Sprint 5","Race 5","Sprint 6","Race 6","Sprint 7","Race 7","Sprint 8","Race 8"],
      roundLabels: ["R1","R2","R3","R4","R5","R6","R7","R8"],
      roundFlags: ["hr","at","jp","de","it","be","us","fr"],
      drivers: [
        { name: "Guilherme",       rounds: [40,8,35,41,28,38,0,null], total: 190 },
        { name: "Gil",             rounds: [24,20,38,35,37,17,0,null], total: 171 },
        { name: "Luís Oliveira",   rounds: [18,18,19,27,26,18,41,null], total: 167 },
        { name: "Francisco Silva", rounds: [1,27,0,10,28,6,32,null], total: 104 },
        { name: "Pedro Venda",     rounds: [30,18,0,12,7,12,24,null], total: 103 },
        { name: "Nuno Fonseca",    driverRef: "Nuno \"TheSnail\" PT", rounds: [0,16,12,20,10,20,15,null], total: 93 },
        { name: "Pedro Oliveira",  rounds: [18,0,29,24,0,0,6,null], total: 78 },
        { name: "Marco Silva",     rounds: [0,29,15,0,0,8,17,null], total: 69 },
        { name: "Tiago Pacheco",   rounds: [0,0,6,16,20,26,0,null], total: 68 },
        { name: "Pedro Lima",      rounds: [0,0,0,30,11,24,0,null], total: 65 },
        { name: "Ricardo",         rounds: [7,25,2,0,1,13,14,null], total: 62 },
        { name: "Filipe Marroko",  rounds: [17,0,8,18,6,2,0,null], total: 51 },
        { name: "António Brissos", rounds: [1,8,5,8,3,0,16,null], total: 41 },
        { name: "Lon3R_Jhon",      rounds: [0,18,0,6,16,0,0,null], total: 40 },
        { name: "Rocha",           rounds: [5,3,14,0,4,7,0,null], total: 33 },
        { name: "Tiago Freitas",   rounds: [5,0,0,0,0,0,18,null], total: 23 },
        { name: "Simão Melo",      driverRef: "Simão Teixeira de Melo", rounds: [0,0,0,22,0,0,0,null], total: 22 },
        { name: "Renato Oliveira", rounds: [0,0,5,14,0,0,0,null], total: 19 },
        { name: "Hélio Sequeira",  rounds: [18,0,0,0,0,0,0,null], total: 18 },
        { name: "Francisco",       rounds: [2,0,3,0,0,6,0,null], total: 11 },
        { name: "Rodrigo Amorim",  rounds: [8,0,2,0,0,0,0,null], total: 10 },
        { name: "Ricardo Duarte",  rounds: [0,6,0,0,0,0,0,null], total: 6 },
        { name: "André Gaspar",    rounds: [0,1,4,0,0,0,0,null], total: 5 },
        { name: "D.Sousa",         rounds: [3,0,0,0,0,0,0,null], total: 3 },
      ]
    },
    {
      competition: "GR2",
      label: "Pitbox Apex Cup GR2",
      logo: "images/PITBOX_GR2_LOGO.png",
      title: "Pitbox <span class=\"text-yellow\">Apex Cup GR2</span>",
      subtitle: "Campeonato interno semanal — Sextas-Feiras · Categoria Gr.2 · 4 Rondas · 4 Circuitos Icónicos",
      roundLabels: ["R1","R2","R3","R4"],
      roundFlags: ["jp","fr","be","fr"],
      drivers: [
        { name: "Ricardo Melo",      driverRef: "Ricardo Melo",         rounds: [3,20,25,null], total: 48 },
        { name: "David Noronha",    driverRef: "DAVIDNORONHA-84",      rounds: [16,12,20,null], total: 48 },
        { name: "Pedro Oliveira",   driverRef: "Pedro Oliveira",       rounds: [21,6,16,null], total: 43 },
        { name: "Francisco Silva",  driverRef: "Francisco Silva",      rounds: [8,25,4,null], total: 37 },
        { name: "Luís Oliveira",    driverRef: "Luís Oliveira",        rounds: [12,10,6,null], total: 28 },
        { name: "Pedro Ribeiro",    driverRef: "frm_pribeiro",         rounds: [25,0,0,null], total: 25 },
        { name: "Filipe Marroko",   driverRef: "Filipe Marroko",       rounds: [6,16,0,null], total: 22 },
        { name: "Nuno \"TheSnail\" PT", driverRef: "Nuno \"TheSnail\" PT", rounds: [4,0,13,null], total: 17 },
        { name: "Ricardo",          driverRef: "Ricardo",              rounds: [10,2,2,null], total: 14 },
        { name: "Tiago Freitas",    driverRef: "Tiago Freitas",        rounds: [0,1,10,null], total: 11 },
        { name: "Marco Silva",      driverRef: "Marco Silva",          rounds: [0,8,0,null], total: 8 },
        { name: "Ruben Santos",     driverRef: "Rsantos059",           rounds: [0,0,8,null], total: 8 },
        { name: "Rui Rei",          driverRef: "Rui Rei",              rounds: [0,4,3,null], total: 7 },
        { name: "António Brissos",  driverRef: "António Brissos",      rounds: [0,3,0,null], total: 3 },
        { name: "João Silva",       driverRef: "PRT_SILVAJOHNNY",      rounds: [2,0,0,null], total: 2 },
        { name: "Alvaro Menino",    driverRef: "alvaro_menino",        rounds: [0,0,0,null], total: 0 },
        { name: "Basaroco",         driverRef: "Basaroco75",           rounds: [0,0,0,null], total: 0 },
        { name: "Lon3R_Jhon",       driverRef: "Lon3R_Jhon",           rounds: [0,0,0,null], total: 0 },
        { name: "Pedro Venda",      driverRef: "Pedro Venda",          rounds: [0,0,0,null], total: 0 },
        { name: "Rocha",            driverRef: "Rocha",                rounds: [0,0,0,null], total: 0 },
      ]
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
