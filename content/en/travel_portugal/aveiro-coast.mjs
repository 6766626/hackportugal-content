export default {
  editorialVoice: 'hackportugal',
  id: 'aveiro-coast',
  categoryId: 'travel_portugal',
  title: 'Aveiro and Costa Nova — the \'Portuguese Venice\'',
  tldr: 'Aveiro is a seaside city with a lagoon and canals, where painted moliceiro boats ply. Neighbouring Costa Nova is a fishing village with striped houses. Ovos moles is the signature dessert. From Porto 35 min by train, from Lisbon 2–2.5 h. Half a day to a day is enough.',
  tags: ['aveiro', 'costa nova', 'excursion', 'centre'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Aveiro: 35 min on Urbano or 28 min on IC/AP, €3.50–13',
          '🚆 Lisboa Oriente → Aveiro: 2 h–2 h 30 min on AP/IC, €20–30',
          '🚗 By car: from Porto 1 h via A1, from Lisbon 2.5 h via A1',
          '🚌 Rede Expressos / FlixBus — longer but cheaper'
        ]}
      ]
    },
    {
      id: 'aveiro',
      title: 'Top sights in Aveiro',
      content: [
        { kind: 'checklist', items: [
          '🛶 Ria de Aveiro (lagoon) + a ride on a moliceiro — a painted boat (historically used to collect seaweed for fertiliser). €13–15 per person, 40–50 min',
          '🏛️ Mosteiro de Jesus / Museu de Aveiro — Gothic 15th‑century monastery, tomb of Princess Santa Joana. €5',
          '🎭 Centro Cultural e de Congressos — contemporary architecture',
          '🏛️ Old railway station — azulejo tiles with regional scenes, free',
          '🎨 Art Nouveau — many buildings in this style, e.g. Casa do Major Pessoa (Museu de Arte Nova)',
          '⛪ Sé de Aveiro — the cathedral',
          '🎨 Fábrica Centro Ciência Viva — interactive science centre for children, €4',
          '🧂 Salinas de Aveiro — salt pans, centuries‑old tradition. You can buy flor de sal',
          '🥖 Confectioners — Oficina do Doce (Rua Tenente Rezende) is best for ovos moles'
        ]}
      ]
    },
    {
      id: 'costa-nova',
      title: 'Costa Nova — striped houses',
      content: [
        { kind: 'paragraph', text: '10 km from Aveiro, on the ocean, lies Costa Nova do Prado. It is famous for palheiros — houses painted in bright stripes (historically for fishermen, so they could recognise their homes from the sea).' },
        { kind: 'checklist', items: [
          '🏖️ Beach with endless sand to the horizon — part of the Costa de Prata',
          '🎨 Casas de Palheiro — striped houses (yellow‑white, red‑white)',
          '🦪 Restaurant Marisqueira Rota dos Sabores — local seafood',
          '🚲 Cycle path along the ocean and the lagoon',
          '☀️ Often windy — for summer bathing August is the best month',
          '🌅 Sunsets over the Atlantic'
        ]},
        { kind: 'paragraph', text: 'How to get there: Aveirobus 5 from Aveiro, 30 min, €2.35, or by car.' }
      ]
    },
    {
      id: 'food',
      title: 'What to try',
      content: [
        { kind: 'checklist', items: [
          '🥚 Ovos moles (protected geographical indication) — egg‑yolk filling in a thin wafer shell, rebuçados (fish‑shaped sweets wrapped in paper)',
          '🐟 Caldeirada de enguias — eel stew from the lagoon',
          '🐟 Bacalhau à Lagareiro — cod with potatoes and olive oil',
          '🐚 Berbigão — cockles from the lagoon',
          '🍚 Arroz de lampreia — rice with lamprey (season in winter)',
          '🥧 Tripas de Aveiro — sweet wafer “guts” shaped as tubes with cream',
          '🍷 Bairrada — nearby wine region (sparkling and Baga)'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nearby',
      content: [
        { kind: 'checklist', items: [
          '🏖️ Praia da Barra (neighbouring beach) — Farol da Barra lighthouse, one of the tallest in Portugal',
          '🏛️ Ílhavo — former cod capital (bacalhau drying), Cod Museum',
          '🏛️ Vista Alegre — famed Portuguese porcelain factory since 1824, museum + outlet',
          '🍷 Bairrada wine region — 30 min, sparkling and Baga. Wineries for tastings',
          '🌊 Costa da Caparica — beach (150 km further away)',
          '🏛️ Figueira da Foz — resort town to the south'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Best season: April–October. Windy in winter',
          '🎫 Moliceiro — no need to book, tickets on the pier',
          '📸 Best photo of Costa Nova — in the morning, when the sun falls on the coloured stripes',
          '🚲 In Aveiro — BUGA bikes from the municipality, free',
          '🍷 Combo route from Porto: Aveiro + Bairrada → Coimbra for 2 days',
          '👟 Shoes for gravel by the sea and canals'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Aveiro — tourism', url: 'https://www.cm-aveiro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Aveiro — Centro Region', url: 'https://www.visitcentro.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portugal Tourism — Aveiro', url: 'https://www.visitportugal.com/en/destinos/centro-de-portugal/73753', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
