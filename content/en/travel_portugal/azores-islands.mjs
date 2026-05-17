export default {
  editorialVoice: 'hackportugal',
  id: 'azores-islands',
  categoryId: 'travel_portugal',
  title: 'The Azores — 9 islands in the Atlantic',
  tldr: 'The Azores are a volcanic archipelago 1,500 km from mainland Portugal, with 9 islands. The main airport is Ponta Delgada on São Miguel. Green craters, whales, hot springs, unique nature. Plan at least 7-10 days for 2-3 islands. Residents of Portugal receive a flight subsidy.',
  tags: ['azores', 'islands', 'nature', 'whales'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'overview',
      title: 'About the archipelago',
      content: [
        { kind: 'paragraph', text: 'The Azores are an autonomous region of Portugal. 9 islands of volcanic origin, divided into 3 groups: eastern (São Miguel, Santa Maria), central (Terceira, Graciosa, São Jorge, Pico, Faial), western (Flores, Corvo). Total area 2,333 km².' },
        { kind: 'paragraph', text: 'The climate is mild subtropical (+14-24°C year-round), but changeable: “there can be 4 seasons in one day”. Lots of greenery, lakes, waterfalls.' }
      ]
    },
    {
      id: 'sao-miguel',
      title: 'São Miguel — “The Green Island”',
      content: [
        { kind: 'paragraph', text: 'The largest island (760 km²), with the main airport. Half of the archipelago’s population lives here. At least 4-5 days is recommended.' },
        { kind: 'checklist', items: [
          '🌋 Lagoa das Sete Cidades — crater with blue and green lakes. Miradouro da Vista do Rei',
          '♨️ Furnas — valley with hot springs. Cozido das Furnas — meat is cooked in the volcano for 6 hours',
          '💧 Caldeira Velha — thermal pools in tropical forest',
          '🌋 Lagoa do Fogo — crater lake at 575 m. Hiking trails',
          '🐳 Whale watching — April-October (sperm whales, blue whale, dolphins). Tour €50-80',
          '🌊 Praia Santa Bárbara — black sand, surfing spot',
          '🍍 Plantação de Ananases — pineapple plantations in greenhouses, a 19th-century tradition',
          '🎨 Ponta Delgada — capital, Portas da Cidade, marina',
          '🌿 Parque Terra Nostra — botanical garden with a hot pool'
        ]}
      ]
    },
    {
      id: 'pico',
      title: 'Pico — the island of mountain and wine',
      content: [
        { kind: 'checklist', items: [
          '⛰️ Montanha do Pico — the highest mountain in Portugal (2,351 m). 5-8h ascent with a certified guide',
          '🍷 Vinhas da Criação Velha (UNESCO) — vineyards on lava rock in stone enclosures called currais',
          '🐳 Lajes do Pico — former whaling port, now a whale-watching centre',
          '🌊 Piscinas naturais — natural pools in lava',
          '🏛️ Museu do Vinho, Museu dos Baleeiros — wine and whaling museums'
        ]}
      ]
    },
    {
      id: 'other-islands',
      title: 'Other islands',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Terceira (UNESCO)', content: [
            { kind: 'paragraph', text: 'Historic island: Angra do Heroísmo — a 15th-century UNESCO city. Fortaleza de São João Baptista, bull runs (touradas à corda).' }
          ]},
          { id: 'o2', title: 'Faial — Ilha Azul', content: [
            { kind: 'paragraph', text: 'The “Blue Island” because of its hydrangeas. Capelinhos — 1957-58 volcano, lunar landscape. Horta harbour — a stop for yachtspeople.' }
          ]},
          { id: 'o3', title: 'São Jorge', content: [
            { kind: 'paragraph', text: 'A long island with cliffs (fajãs — plateaus by the sea). São Jorge DOP cheese, Verdelho grapes, gastronomy festivals.' }
          ]},
          { id: 'o4', title: 'Flores', content: [
            { kind: 'paragraph', text: 'The westernmost island, 50+ waterfalls, untouched nature, hydrangeas.' }
          ]},
          { id: 'o5', title: 'Santa Maria', content: [
            { kind: 'paragraph', text: 'The oldest island (8.2 million years), red sand — a rarity in the Azores. Santa Maria festival every 5 years.' }
          ]},
          { id: 'o6', title: 'Graciosa', content: [
            { kind: 'paragraph', text: 'UNESCO Biosphere Reserve. Its main feature is being the driest island. Furna do Enxofre — a cave with a sulphurous lake.' }
          ]},
          { id: 'o7', title: 'Corvo', content: [
            { kind: 'paragraph', text: 'The smallest island (17 km²), 400 residents. Caldeirão — a giant crater.' }
          ]}
        ]}
      ]
    },
    {
      id: 'getting-there',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '✈️ TAP Lisbon → Ponta Delgada: 2h 30min, from €60 when booked early',
          '✈️ SATA / Azores Airlines — local carrier, many flights',
          '✈️ Direct flights from Europe: in summer London, Munich, Amsterdam, Copenhagen',
          '✈️ From the USA: Boston, New York (seasonal)',
          '🏷️ Residents of Portugal: subsidised fares via “tarifa residente”',
          '⛴️ Inter-island ferries: Atlânticoline in season (Apr-Oct)',
          '✈️ SATA: inter-island flights €30-80, 15-40 min between islands'
        ]}
      ]
    },
    {
      id: 'activities',
      title: 'What to do',
      content: [
        { kind: 'checklist', items: [
          '🐳 Whale watching — April-October, sperm whales and dolphins reliably, blue whale April-June',
          '🥾 Trekking — 50+ PR routes (pequenas rotas), free',
          '🏄 Surfing — São Miguel, Santa Maria',
          '🤿 Diving — Faial, Pico, Santa Maria',
          '🎣 Deep-sea fishing — tuna, marlin',
          '♨️ Hot springs and pools',
          '🚣 Kayaking in crater lakes',
          '🌿 Geotourism — UNESCO Geopark in the Azores',
          '🍷 Wine tours — Pico, Graciosa'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Local cuisine',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cozido das Furnas — beef + pork + vegetables, cooked in volcanic ground for 6 hours',
          '🐟 Lapas grelhadas — grilled limpets with garlic',
          '🐙 Polvo guisado — octopus in red wine',
          '🐟 Atum — fresh tuna (Pico, Faial)',
          '🧀 Queijo São Jorge DOP — local cheese',
          '🍍 Ananás — São Miguel pineapples',
          '🌶️ Massa de pimentão — pepper paste, a speciality',
          '🍮 Queijadas da Graciosa — sweet curd tart'
        ]}
      ]
    },
    {
      id: 'planning',
      title: 'Planning the trip',
      content: [
        { kind: 'checklist', items: [
          '📅 Best time: April-October (warm weather + whale watching)',
          '🌧️ October-March — rainy, but cheaper, quieter, hydrangeas in bloom',
          '📆 7 days — 2 islands, 10-14 days — 3-4 islands',
          '🚗 Car hire is essential on each island',
          '🏨 Booking / Airbnb work, plus local turismo rural (eco-houses)',
          '💰 Daily budget per person: €70-120 (budget), €150-250 (mid-range)',
          '🎒 Bring: warm jacket, raincoat, comfortable shoes, swimsuit or swimming trunks',
          '📱 Local MEO/Vodafone 4G coverage works on all inhabited islands'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Azores — official tourism', url: 'https://www.visitazores.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo Regional dos Açores', url: 'https://www.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Atlânticoline — ferries', url: 'https://www.atlanticoline.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Parques Naturais dos Açores', url: 'https://parquesnaturais.azores.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
