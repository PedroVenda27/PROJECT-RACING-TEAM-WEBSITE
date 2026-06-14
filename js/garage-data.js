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
  // ─── ENDURANCE ───
  {
    id: "porsche-992-6h-barcelona",
    name: "911 GT3 RS (992) '22 — 6h Barcelona",
    manufacturer: "Porsche",
    group: "Gr.3",
    competition: "Endurance",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422252979860524/d4bdd815c07985ceeeaa7a3ebdf1dedc_thumb_l_x2.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422252979860524/d4bdd815c07985ceeeaa7a3ebdf1dedc_thumb_l_x2.jpg"
  },
  // ─── CIVIC CUP ───
  {
    id: "honda-civic-ek-98",
    name: "Civic Type R (EK) '98",
    manufacturer: "Honda",
    group: "Road Car",
    competition: "CivicCup",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422167070711922/27ca44b6d1bb401f9c8464c16a5bfba4_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422167070711922/c8f6ff4c74ccd51ff6d5376c02e3e575_thumb_l_x2.jpg"
  },
  {
    id: "honda-civic-ek-touring-1",
    name: "Civic Type R (EK) Touring Car",
    manufacturer: "Honda",
    group: "Road Car",
    competition: "CivicCup",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422725687504538/bcf8648a01dbac67079061d1ff060964_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422725687504538/1979300b693b1f1c342f2ab6091d9ef2_thumb_l_x2.jpg"
  },
  {
    id: "honda-civic-ek-touring-2",
    name: "Civic Type R (EK) Touring Car",
    manufacturer: "Honda",
    group: "Road Car",
    competition: "CivicCup",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422555895116460/930efd0faca090eb63f3b8e0430cafae_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422555895116460/f5be5d1be92322ed511c8bade6926e67_thumb_l_x2.jpg"
  },
  {
    id: "honda-civic-ek-touring-3",
    name: "Civic Type R (EK) Touring Car",
    manufacturer: "Honda",
    group: "Road Car",
    competition: "CivicCup",
    thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422342041924174/d254a95e69dae5f0cfa4a8bb9a88798d_thumb_s.jpg",
    fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422342041924174/81a53cf252947dd813dd43d0c90d3b6a_thumb_l_x2.jpg"
  },
  // ─── EXAMPLE CARS (replace with your real data) ───
  { id: "alfa-romeo-155-gt4", name: "155 2.5 V6 TI '93", manufacturer: "Alfa Romeo", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "nissan-gtr-gt4", name: "GT-R Gr.4", manufacturer: "Nissan", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "ferrari-458-gt4", name: "458 Italia Gr.4", manufacturer: "Ferrari", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "bmw-m4-gt4", name: "M4 Gr.4", manufacturer: "BMW", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "aston-martin-vantage-gt3", name: "V12 Vantage GT3 '12", manufacturer: "Aston Martin", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "jaguar-f-type-gt4", name: "F-type Gr.4", manufacturer: "Jaguar", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "hyundai-genesis-gt3", name: "Genesis Gr.3", manufacturer: "Hyundai", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "hyundai-genesis-gt4", name: "Genesis Gr.4", manufacturer: "Hyundai", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "ferrari-458-gt3", name: "458 Italia GT3 '12", manufacturer: "Ferrari", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "nissan-gtr-18-gt3", name: "GT-R NISMO GT3 '18", manufacturer: "Nissan", group: "Gr.3", competition: "GR3", thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19421780233638831/14e821c3981e6f19e143e3a0c4ec87fb_thumb_l_x2.jpg", fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19421780233638831/14e821c3981e6f19e143e3a0c4ec87fb_thumb_l_x2.jpg" },
  { id: "bmw-m6-sprint-gt3", name: "M6 GT3 Sprint Model '16", manufacturer: "BMW", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "subaru-wrx-gt3", name: "WRX Gr.3", manufacturer: "Subaru", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "mitsubishi-lancer-gt3", name: "Lancer Evolution Final Gr.3", manufacturer: "Mitsubishi", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "hyundai-elantra-gt4", name: "ELANTRA N TC '24", manufacturer: "Hyundai", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "bugatti-veyron-gt4", name: "Veyron Gr.4", manufacturer: "Bugatti", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "toyota-supra-gt3", name: "GR Supra Racing Concept '18", manufacturer: "Toyota", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "renault-clio-v6", name: "Clio V6 24V '00", manufacturer: "Renault", group: "Road Car", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "porsche-992-gt3", name: "911 GT3 R (992) '22", manufacturer: "Porsche", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "audi-r8-evo-gt3", name: "R8 LMS Evo '19", manufacturer: "Audi", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "dodge-viper-gt4", name: "Viper Gr.4", manufacturer: "Dodge", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "ford-gt-race-car-gt3", name: "GT Race Car '18", manufacturer: "Ford", group: "Gr.3", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "toyota-supra-gt4", name: "Supra Race Car '19", manufacturer: "Toyota", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "gt-by-citroen-gt4", name: "GT by Citroen Gr.4", manufacturer: "Citroen", group: "Gr.4", competition: "GR3", thumbnail: "", fullsize: "" },
  { id: "nissan-gtr-nismo-gt2", name: "GT-R NISMO GT500 '16", manufacturer: "Nissan", group: "Gr.2", competition: "GR2", thumbnail: "", fullsize: "" },
  { id: "audi-rs5-gt2", name: "RS 5 Turbo DTM '19", manufacturer: "Audi", group: "Gr.2", competition: "GR2", thumbnail: "", fullsize: "" },
  { id: "lexus-rc-f-gt2", name: "RC F GT500 '16", manufacturer: "Lexus", group: "Gr.2", competition: "GR2", thumbnail: "", fullsize: "" },
  { id: "honda-nsx-concept-gt2", name: "NSX Concept-GT '16", manufacturer: "Honda", group: "Gr.2", competition: "GR2", thumbnail: "", fullsize: "" },
  { id: "porsche-911-rsr-lpgt", name: "911 RSR (991) '17", manufacturer: "Porsche", group: "Gr.3", competition: "LPGT", thumbnail: "https://ugc.gt7.game.gran-turismo.com/10/19422865444462840/35b18c50de670f4465123527bf85bbb0_thumb_l_x2.jpg", fullsize: "https://ugc.gt7.game.gran-turismo.com/10/19422865444462840/35b18c50de670f4465123527bf85bbb0_thumb_l_x2.jpg" },
  { id: "nissan-gtr-gt2", name: "GT-R GT500 '08", manufacturer: "Nissan", group: "Gr.2", competition: "LPGT", thumbnail: "", fullsize: "" },
  { id: "honda-nsx-gt2", name: "NSX GT500 '08", manufacturer: "Honda", group: "Gr.2", competition: "LPGT", thumbnail: "", fullsize: "" },
  { id: "lexus-sc430-gt2", name: "SC430 GT500 '08", manufacturer: "Lexus", group: "Gr.2", competition: "LPGT", thumbnail: "", fullsize: "" },
  { id: "toyota-gt-one-gt2", name: "GT-One (TS020) '99", manufacturer: "Toyota", group: "Gr.2", competition: "GR2", thumbnail: "", fullsize: "" }
];
