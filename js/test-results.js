/* Teste de Pneus e Combustível RTP — dados de testes carregados no site (mais recentes primeiro).
   Cada teste: piloto, categoria, pista, BOP, multiplicadores, mapas/pneus testados e os valores por carro.
   Campos por carro: fuel<N> = combustível %/volta no mapa N, time<N> = tempo por volta, laps<N> = voltas por depósito,
   tyre_<ID> = % de pneu por volta, note = notas. Só entram os carros com dados. */
const TEST_RESULTS = [
  {
    driver: "Pedro Venda",
    cat: "Gr.3",
    track: "Nürburgring 24h",
    bop: "1.72",
    tyrex: "x4",
    fuelx: "x4",
    unit: "%",
    uploaded: "2026-11-16",
    maps: [2],
    tyres: [],
    cars: {
      "Aston Martin V12 Vantage GT3 '12": { fuel2: "39", laps2: "2,6" },
      "BMW M6 GT3 Endurance Model '16": { fuel2: "40", laps2: "2,5" },
      "BMW M6 GT3 Sprint Model '16": { fuel2: "40", laps2: "2,5" },
      "Ferrari 296 GT3 '23": { fuel2: "38", laps2: "2,6" },
      "Lamborghini Huracán GT3 '15": { fuel2: "40", laps2: "2,5" },
      "Lexus RC F GT3 '17": { fuel2: "33", laps2: "3,0" },
      "McLaren 650S GT3 '15": { fuel2: "35", laps2: "2,9" },
      "Mercedes-AMG GT3 '20": { fuel2: "38", laps2: "2,6" },
      "Nissan GT-R NISMO GT3 '18": { fuel2: "32", laps2: "3,1" },
      "Porsche 911 GT3 R (992) '22": { fuel2: "37", laps2: "2,7" },
      "Subaru BRZ GT300 '21": { fuel2: "31", laps2: "3,2" },
      "Subaru WRX Gr.3": { fuel2: "34", laps2: "2,9" },
      "Toyota FT-1 Vision Gran Turismo (Gr.3)": { fuel2: "35", laps2: "2,9" }
    }
  }
];
