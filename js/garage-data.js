/* =====================================================================
   GARAGE-DATA.JS — EDIT THIS FILE TO MANAGE YOUR GARAGE CARS
   =====================================================================
   
   HOW TO EDIT:
   • Each car is one object in the GARAGE_DATA array below.
   • To ADD a car: copy any existing { ... } block, paste it, change values.
   • To REMOVE a car: delete the entire { ... } block (including the comma).
   
   FIELDS:
   • id          — unique identifier (use lowercase, no spaces, e.g., "porsche-911-gt3")
   • name        — display name shown under the thumbnail
   • manufacturer— car manufacturer (used in the Manufacturer text filter)
   • group       — one of: "Gr.1", "Gr.2", "Gr.3", "Gr.4", "Gr.B", "Road Car"
   • competition — one of: "Original", "EPIC", "CPGT", "BPF", "Toyota WWW", "Other"
   • thumbnail   — path to 250×140px thumbnail in images/garage/thumbnails/
   • fullsize    — path to 1280×720px (16:9) image in images/garage/fullsize/
   
   IMAGE FOLDERS:
   • Thumbnails go in: images/garage/thumbnails/  (≈250×275 px)
   • Full-size go in:  images/garage/fullsize/    (1280×720 px, 16:9)
   
   ===================================================================== */

const GARAGE_DATA = [
  // ─── EXAMPLE CARS (replace with your real data) ───
  {
    id: "alfa-romeo-155-gt4",
    name: "155 2.5 V6 TI '93",
    manufacturer: "Alfa Romeo",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422614354456186/5ebe868fe5f135e822511b832baf2c8c_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422614354456186/0dd94374e8440ead3d53c9d7049c55e9_thumb_l_x2.jpg"
  },
  {
    id: "nissan-gtr-gt4",
    name: "GT-R Gr.4",
    manufacturer: "Nissan",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422400697517041/b2cdb99967309e4086a7c3d0cbae4526_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422400697517041/727e61bc078aacc391d1dfa36a85e1b4_thumb_l_x2.jpg"
  },
  {
    id: "ferrari-458-gt4",
    name: "458 Italia Gr.4",
    manufacturer: "Ferrari",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421938913727825/c247ae328bc5429b77eaaed4039f0059_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421938913727825/4b6f032bf6d1d6f5592d9fd71946afbc_thumb_l_x2.jpg"
  },
  {
    id: "bmw-m4-gt4",
    name: "M4 Gr.4",
    manufacturer: "BMW",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422323588234221/fec30cc92a4eb9d645ebf18e22d7d2a8_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422323588234221/195c62fa83d5308760f51425e32d6620_thumb_l_x2.jpg"
  },
  {
    id: "aston-martin-vantage-gt3",
    name: "V12 Vantage GT3 '12",
    manufacturer: "Aston Martin",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/e91d59029ae0fe1c7330eb00eaaa35e4_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422823998160903/e5fd42473ad2302142504121c371d4fd_thumb_l_x2.jpg"
  },
  {
    id: "jaguar-f-type-gt4",
    name: "F-type Gr.4",
    manufacturer: "Jaguar",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/e91d59029ae0fe1c7330eb00eaaa35e4_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/7f06b0efa621b129be8d7d13a6df3b20_thumb_l_x2.jpg"
  },
  {
    id: "hyundai-genesis-gt3",
    name: "Genesis Gr.3",
    manufacturer: "Hyundai",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422102282455399/d274f5c321310ae3486bc14a8f507ce3_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422486047255274/7f06b0efa621b129be8d7d13a6df3b20_thumb_l_x2.jpg"
  },
  {
    id: "hyundai-genesis-gt4",
    name: "Genesis Gr.4",
    manufacturer: "Hyundai",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421844789858475/4f9e13f1dab1b3d5b80511c574732b12_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422102282455399/5b04e0ab70b47c010e2974eb5eff6f2c_thumb_l_x2.jpg"
  },
  {
    id: "ferrari-458-gt3",
    name: "458 Italia GT3 '12",
    manufacturer: "Ferrari",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422227668869179/65dd391e2d2b53b757f2ac1986c145cb_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421844789858475/ba0429f1d661ee6d539458fff8c19f5d_thumb_l_x2.jpg"
  },
  {
    id: "nissan-gtr-18-gt3",
    name: "GT-R NISMO GT3 '18",
    manufacturer: "Nissan",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422089991814679/7c0ae6c87f3d723198f13b0c85fde458_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422227668869179/de34bc5989971f284c4533985941b9cf_thumb_l_x2.jpg"
  },
  {
    id: "bmw-m6-sprint-gt3",
    name: "M6 GT3 Sprint Model '16",
    manufacturer: "BMW",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422697344311297/3585df4b7d82e96aac1e28bef141139e_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422089991814679/ff602b01c4e00005d2da16c70f8bf392_thumb_l_x2.jpg"
  },
  {
    id: "subaru-wrx-gt3",
    name: "WRX Gr.3",
    manufacturer: "Subaru",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422186378742202/04a1e1926748e563c0e914a05f91988c_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422697344311297/55402c6d764477705920228a0d9e1b41_thumb_l_x2.jpg"
  },
  {
    id: "mitsubishi-lancer-gt3",
    name: "Lancer Evolution Final Gr.3",
    manufacturer: "Mitsubishi",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421929529981999/11f1234eeea29dcd58588baef2e74e3d_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422186378742202/70e3da162411e7e7d217ec7a4927928a_thumb_l_x2.jpg"
  },
  {
    id: "hyundai-elantra-gt4",
    name: "ELANTRA N TC '24",
    manufacturer: "Hyundai",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422576021804149/d438ef938a95e012e41a734cce3142f2_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421929529981999/4fbcfac45268a29a9bfa1221cbe8c616_thumb_l_x2.jpg"
  },
  {
    id: "bugatti-veyron-gt4",
    name: "Veyron Gr.4",
    manufacturer: "Bugatti",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422275751240970/ec370c04242103ec2a8944f3ce2fb269_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422576021804149/53a224c9a3cd2ddf898934b3e50e071d_thumb_l_x2.jpg"
  },
  {
    id: "toyota-supra-gt3",
    name: "GR Supra Racing Concept '18",
    manufacturer: "Toyota",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422607608256898/688a466a5adb84340c0a987df6d91c76_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422275751240970/4b72aee2de674ad39446d78a37258c1b_thumb_l_x2.jpg"
  },
  {
    id: "renault-clio-v6",
    name: "Clio V6 24V '00",
    manufacturer: "Renault",
    group: "Road Car",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422501554994651/e137313c95b6a864b676f7895251f63c_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422607608256898/c5d807bf90a3745cc3ec31cbea1feadd_thumb_l_x2.jpg"
  },
  {
    id: "porsche-992-gt3",
    name: "911 GT3 R (992) '22",
    manufacturer: "Porsche",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421840596611338/d446bc90ca6bb10ac72912bbbaec7119_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422501554994651/20668a8878bb997a541ca133680f2d81_thumb_l_x2.jpg"
  },
  {
    id: "audi-r8-evo-gt3",
    name: "R8 LMS Evo '19",
    manufacturer: "Audi",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421785535347419/ce0ca8ab7f6ddec63814595c6b6e4a21_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421840596611338/3c077df615a612575890ecaaa4610f9a_thumb_l_x2.jpg"
  },
   {
    id: "dodge-viper-gt4",
    name: "Viper Gr.4",
    manufacturer: "Dodge",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422417033003480/3310f3e78275b78c8223498d489ce434_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422417033003480/c6830b1552cd2aa7a774b9ea02de846e_thumb_l_x2.jpg"
  },
   {
    id: "ford-gt-race-car-gt3",
    name: "GT Race Car '18",
    manufacturer: "Ford",
    group: "Gr.3",
    competition: "GR3",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422283113503956/3b8c1519d0bd2069285f0e02847c1e1e_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422283113503956/f541bb0cce4a0017828e406a597cde31_thumb_l_x2.jpg"
  },
   {
    id: "toyota-supra-gt4",
    name: "Supra Race Car '19",
    manufacturer: "Toyota",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421804457039704/040a8311d579704d9d428f0e84effa1e_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421804457039704/5e14c96e39c65fbda4cd3ed28f8d18b3_thumb_l_x2.jpg"
  },
   {
    id: "gt-by-citroen-gt4",
    name: "GT by Citroen Gr.4",
    manufacturer: "Citroen",
    group: "Gr.4",
    competition: "Other",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421850171504453/999057eda966ad7ed0bb44ade74fa8f3_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421850171504453/27eb23edcb4548101a6f00efb5419910_thumb_l_x2.jpg"
  },
   {
    id: "nissan-gtr-nismo-gt2",
    name: "GT-R NISMO GT500 '16",
    manufacturer: "Nissan",
    group: "Gr.2",
    competition: "GR2",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422399947356103/ecf1a92d9746211daaee9790502a7d3d_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422399947356103/6a4a5dc3acd172c7f9a1164664c8f9a2_thumb_l_x2.jpg"
  },
   {
    id: "audi-rs5-gt2",
    name: "RS 5 Turbo DTM '19",
    manufacturer: "Audi",
    group: "Gr.2",
    competition: "GR2",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422369605418289/a9b9afaaf8c574c8695b846896020d15_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422678986407419/918435a151780ac2e4ece2969508d56f_thumb_l_x2.jpg"
  },
   {
    id: "lexus-rc-f-gt2",
    name: "RC F GT500 '16",
    manufacturer: "Lexus",
    group: "Gr.2",
    competition: "GR2",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422678986407419/54e0fcac7f6fa0aa64064d2c87e06f43_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422329715948407/36a5c98a30a7e9deae1d907341b6a067_thumb_l_x2.jpg"
  },
   {
    id: "honda-nsx-concept-gt2",
    name: "NSX Concept-GT '16",
    manufacturer: "Honda",
    group: "Gr.2",
    competition: "GR2",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422329715948407/e94d97ac97807fe7a520c9be11c4cf93_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422369605418289/27dd2443faba28ba7e8c99562b86d5ee_thumb_l_x2.jpg"
  },
   {
    id: "nissan-gtr-gt2",
    name: "GT-R GT500 '08",
    manufacturer: "Nissan",
    group: "Gr.2",
    competition: "LPGT",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422831866783893/6f140a612d26717369386f8050bcc6e8_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422831866783893/c6dba061b9135f8aee3021d8dd55426e_thumb_l_x2.jpg"
  },
   {
    id: "honda-nsx-gt2",
    name: "NSX GT500 '08",
    manufacturer: "Honda",
    group: "Gr.2",
    competition: "LPGT",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422643027256527/835109df01d7d7c0459037c92040a344_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422643027256527/14cc94ff500f8ca161efb7be4754e70b_thumb_l_x2.jpg"
  },
   {
    id: "lexus-sc430-gt2",
    name: "SC430 GT500 '08",
    manufacturer: "Lexus",
    group: "Gr.2",
    competition: "LPGT",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422366411657785/2299fd3d487b105578e7f1c4a2c19108_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422454831902153/63b50a97d776c8010b5331d74b34c0a0_thumb_l_x2.jpg"
  },
   {
    id: "toyota-gt-one-gt2",
    name: "GT-One (TS020) '99",
    manufacturer: "Toyota",
    group: "Gr.2",
    competition: "GR2",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422454831902153/97eaadd396cc7ad73edf7506253b13c2_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422366411657785/cfedbbfc65f42db142b64261af01bb0b_thumb_l_x2.jpg"
  }
];
