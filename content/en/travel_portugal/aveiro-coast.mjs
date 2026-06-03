export default {
  editorialVoice: 'hackportugal',
  id: 'aveiro-coast',
  categoryId: 'travel_portugal',
  title: 'Aveiro and Costa Nova — the “Portuguese Venice”',
  tldr: 'Aveiro is a coastal city with a lagoon and canals, where painted moliceiros boats operate. Nearby Costa Nova is a fishing village with striped houses. Ovos moles are the signature dessert. 35 min by train from Porto, 2–2.5 hrs from Lisbon. Half a day to a day is enough.',
  tags: ['aveiro', 'costa nova', 'excursion', 'centre'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Aveiro: 35 min by Urbano or 28 min by IC/AP, €3.50–13',
          '🚆 Lisboa Oriente → Aveiro: 2 hrs–2 hrs 30 min by AP/IC, €20–30',
          '🚗 Car: from Porto 1 hr via the A1, from Lisbon 2.5 hrs via the A1',
          '🚌 Rede Expressos / FlixBus — longer, but cheaper'
        ]}
      ]
    },
    {
      id: 'aveiro',
      title: 'Main places in Aveiro',
      content: [
        { kind: 'checklist', items: [
          '🛶 Ria de Aveiro (lagoon) + a trip on a moliceiro — a painted boat (historically used to collect seaweed for fertiliser). €13–15 per person, 40–50 min',
          '🏛️ Mosteiro de Jesus / Museu de Aveiro — 15th-century Gothic monastery, tomb of Princess Santa Joana. €5',
          '🎭 Centro Cultural e de Congressos — modern architecture',
          '🏛️ Old railway station — azulejo tiles with scenes from the region, free',
          '🎨 Art Nouveau — many buildings in this style, for example Casa do Major Pessoa (Museu de Arte Nova)',
          '⛪ Sé de Aveiro — cathedral',
          '🎨 Fábrica Centro Ciência Viva — interactive science centre for children, €4',
          '🧂 Salinas de Aveiro — salt pans, a centuries-old tradition. You can buy flor de sal',
          '🥖 Pastry shops — Oficina do Doce (Rua Tenente Rezende) is best for ovos moles'
        ]}
      ]
    },
    {
      id: 'costa-nova',
      title: 'Costa Nova — striped houses',
      content: [
        { kind: 'paragraph', text: '10 km from Aveiro, by the ocean, is Costa Nova do Prado. It is famous for palheiros — houses with bright stripes (historically for fishermen, so they could recognise their homes from the sea).' },
        { kind: 'checklist', items: [
          '🏖️ Beach with endless sand to the horizon — part of the Costa de Prata',
          '🎨 Casas de Palheiro — striped houses (yellow-and-white, red-and-white)',
          '🦪 Marisqueira Rota dos Sabores restaurant — local seafood',
          '🚲 Cycle path along the ocean and lagoon',
          '☀️ Often windy — for summer swimming, August is the best month',
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
          '🥚 Ovos moles (protected geographical indication) — egg yolk in a thin wafer shell, rebuçados (little fish wrapped in paper wrappers)',
          '🐟 Caldeirada de enguias — eel stew from the lagoon',
          '🐟 Bacalhau à Lagareiro — cod with potatoes and olive oil',
          '🐚 Berbigão — shellfish from the lagoon',
          '🍚 Arroz de lampreia — rice with lamprey (winter season)',
          '🥧 Tripas de Aveiro — sweet “tripe” waffles in tube shapes with cream',
          '🍷 Bairrada — nearby wine region (sparkling wine and Baga)'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nearby',
      content: [
        { kind: 'checklist', items: [
          '🏖️ Praia da Barra (neighbouring beach) — Farol da Barra lighthouse, one of the tallest in Portugal',
          '🏛️ Ílhavo — former cod capital (bacalhau drying), cod museum',
          '🏛️ Vista Alegre — famous Portuguese porcelain factory since 1824, museum + outlet',
          '🍷 Bairrada wine region — 30 min, sparkling wine and Baga. Wineries for tastings',
          '🌊 Costa da Caparica — beach (150 km further on)',
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
          '📸 Best Costa Nova photo — in the morning, when the sun falls on the coloured stripes',
          '🚲 In Aveiro — BUGA bicycles from the municipality, free',
          '🍷 Combo route from Porto: Aveiro + Bairrada → Coimbra over 2 days',
          '👟 Footwear for gravel by the sea and canals'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Aveiro — tourism', url: 'https://www.cm-aveiro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Aveiro — Região Centro', url: 'https://www.visitcentro.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Aveiro', url: 'https://www.visitportugal.com/en/destinos/centro-de-portugal/73753', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
