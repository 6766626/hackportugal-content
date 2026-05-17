export default {
  editorialVoice: 'hackportugal',
  id: 'nazare-obidos-fatima',
  categoryId: 'travel_portugal',
  title: 'Nazaré, Óbidos, Fátima — the central coast',
  tldr: 'Three different faces of central Portugal: Nazaré — giant waves for surfing (up to 30 m), Óbidos — a medieval town behind 11th-century walls, Fátima — a global centre of Catholic pilgrimage. All 3 places can be visited in one long trip from Lisbon by car (a 150-200 km circular route).',
  tags: ['nazare', 'obidos', 'fatima', 'surfing', 'pilgrimage'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'nazare',
      title: 'Nazaré — the capital of giant waves',
      content: [
        { kind: 'paragraph', text: 'A fishing town on the Atlantic. In autumn and winter, it is a spot for surfing monster waves: Garrett McNamara’s record of 23.8 m (2017), unofficially — up to 30 m. The famous Praia do Norte.' },
        { kind: 'checklist', items: [
          '🌊 Praia do Norte — giant waves from October to March. Nazaré Tow Surfing Challenge festival',
          '🏰 Forte de São Miguel Arcanjo — 16th-century fort on the headland, the best viewpoint for the waves',
          '🚡 Ascensor da Nazaré — 1889 funicular from the lower town (Praia) to the upper town (Sítio), €1.50',
          '⛪ Santuário de Nossa Senhora da Nazaré — the main pilgrimage church',
          '🎣 Praia da Nazaré — traditional town beach (not for surfing)',
          '🐟 Fish market in the morning — cod, sardines',
          '👗 Women of Nazaré — traditionally wear 7 skirts, one over another',
          '🏛️ Museu Dr. Joaquim Manso — local ethnography',
          '🎪 Festa da Nossa Senhora da Nazaré — September, the main festival'
        ]},
        { kind: 'paragraph', text: 'How to get there: from Lisbon — 1.5 h by car (A8), Rede Expressos — 2 h, €12; by train — no direct route.' }
      ]
    },
    {
      id: 'obidos',
      title: 'Óbidos — a medieval gem',
      content: [
        { kind: 'paragraph', text: 'A town 85 km from Lisbon, completely surrounded by 12th-century walls. Traditionally, it was a “wedding gift” from kings to queens. Compact: 2-3 hours is enough.' },
        { kind: 'checklist', items: [
          '🏰 Castelo de Óbidos — now Pousada do Castelo (historic hotel)',
          '🏛️ Muralha — medieval walls around the perimeter of the town (you can walk along the top)',
          '⛪ Igreja de Santa Maria — 15th-century church with 17th-century azulejo tiles',
          '🎨 Livraria de Santiago — bookshop in a former church',
          '🍒 Ginja de Óbidos — cherry liqueur in chocolate cups (€1)',
          '🎪 Festival do Chocolate (March) — chocolate sculptures',
          '🏺 Mercado Medieval (July) — medieval-style fair, costumes',
          '📚 FOLIO — international literary festival (October)',
          '🎄 Vila Natal (December) — Christmas village'
        ]},
        { kind: 'paragraph', text: 'How to get there: Rede Expressos bus from Campo Grande (Lisboa) — 1 h, €8; by car — 1 h via the A8.' }
      ]
    },
    {
      id: 'fatima',
      title: 'Fátima — a global pilgrimage site',
      content: [
        { kind: 'paragraph', text: 'In 1917, the Virgin Mary appeared to three children in Fátima. It is one of the most important Catholic pilgrimage sites in the world. 5-7 million pilgrims come here every year.' },
        { kind: 'checklist', items: [
          '⛪ Basílica de Nossa Senhora do Rosário — the main basilica with the tombs of the 3 child visionaries',
          '⛪ Basílica da Santíssima Trindade — modern basilica from 2007, 8,633 seats',
          '🕯️ Capelinha das Aparições — chapel on the site of the first apparition',
          '🏠 Casas dos Videntes — the children’s family homes in Aljustrel (2 km from the centre)',
          '🎨 Museu de Cera de Fátima — wax figures with scenes of the apparitions',
          '🚶 Via Sacra (Stations of the Cross) — 14 stations on the hill',
          '📅 13 May and 13 October — anniversaries of the apparitions, hundreds of thousands of pilgrims',
          '🕯️ Evening candlelight processions — impressive even for non-believers'
        ]},
        { kind: 'paragraph', text: 'How to get there: Rede Expressos from Sete Rios — 1.5 h, €11; by car via the A1 — 1.5 h.' }
      ]
    },
    {
      id: 'nearby',
      title: 'More to see nearby',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Mosteiro de Batalha (UNESCO) — 14th-century Gothic monastery, 15 km from Fátima',
          '🏛️ Mosteiro de Alcobaça (UNESCO) — 12th-century Cistercian monastery, tombs of Pedro and Inês, 30 km',
          '🏰 Castelo de Leiria — 12th-century fortress, 20 km from Fátima',
          '🐋 Grutas da Moeda — caves, 5 km from Fátima',
          '🏖️ São Martinho do Porto — “shell” lagoon, 30 km from Nazaré',
          '🏞️ Sobreiro — open-air museum, 10 km from Óbidos'
        ]}
      ]
    },
    {
      id: 'itinerary',
      title: '2-day itinerary (by car)',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Day 1', content: [
            { kind: 'checklist', items: [
              '09:00 — leave Lisbon',
              '10:00 — Óbidos (2-3 hours + lunch)',
              '13:30 — leave for Nazaré',
              '14:30-17:00 — Sítio (fort, view), Praia do Norte',
              '17:00-19:00 — Nazaré: fishing port and beach, seafood dinner',
              'Overnight stay in Nazaré or Batalha'
            ]}
          ]},
          { id: 'd2', title: 'Day 2', content: [
            { kind: 'checklist', items: [
              '09:00 — Mosteiro de Batalha (1.5 hours)',
              '11:00 — Mosteiro de Alcobaça (1.5 hours)',
              '13:00 — lunch in Alcobaça',
              '14:30 — Fátima (2-3 hours)',
              '18:00 — return to Lisbon via the A1'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '🌊 Nazaré — winter is best for waves, but it is cold and windy',
          '🎫 Óbidos — entry to the town is free; Castelo Pousada and individual museums are paid',
          '🙏 Fátima — on anniversaries (13 May, 13 October) there are VERY large crowds, accommodation needs to be booked months in advance',
          '👖 Fátima — conservative clothing is required in the basilicas (shoulders and knees covered)',
          '🚗 A car is much more convenient: public transport between the towns is slow',
          '💰 Average budget for 2 days: overnight stay €60-100, food €30-50 per person per day, petrol €30'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Santuário de Fátima — official website', url: 'https://www.fatima.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo Centro de Portugal', url: 'https://www.visitportugal.com/pt-pt/destinos/centro-de-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Óbidos', url: 'https://www.cm-obidos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Nazaré', url: 'https://www.cm-nazare.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
