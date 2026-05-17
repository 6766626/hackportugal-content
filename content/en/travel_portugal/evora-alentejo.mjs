export default {
  editorialVoice: 'hackportugal',
  id: 'evora-alentejo',
  categoryId: 'travel_portugal',
  title: 'Évora and Alentejo — whitewashed towns and wineries',
  tldr: 'Évora (UNESCO) is the main city of Alentejo, 1.5 hours from Lisbon. Chapel of Bones (Capela dos Ossos), Roman Temple of Diana, cathedral. Around it are the Alentejo plains with whitewashed villages, olive groves, vineyards, and rare authenticity. 1 day — Évora, 2–3 days — the region.',
  tags: ['evora', 'alentejo', 'unesco', 'tour'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisboa Oriente → Évora: 1 hr 30 min by IC train, €12–18',
          '🚌 Rede Expressos from Sete Rios: 1.5 hrs, €12–15',
          '🚗 By car via the A6 — 1.5 hrs. For the Alentejo region, a car is practically essential',
          '🚐 Day tour from Lisbon: €65–90 — not recommended, too rushed'
        ]}
      ]
    },
    {
      id: 'evora',
      title: 'Évora — UNESCO centre',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Templo Romano (Templo de Diana) — 1st-century Roman temple, 14 Corinthian columns. Free',
          '💀 Capela dos Ossos — chapel decorated with the bones of 5,000 monks, 16th century. Inscription above the entrance: “Nós ossos que aqui estamos, pelos vossos esperamos”. €6',
          '⛪ Sé de Évora — 13th-century Gothic cathedral, treasury with the Holy Shroud. €5',
          '🏛️ Praça do Giraldo — main square with a marble fountain',
          '🕌 Igreja de São Francisco — Capela dos Ossos is located here',
          '🏛️ Museu de Évora — in the episcopal palace, sacred art',
          '🌊 Aqueduto da Água de Prata — 16th-century aqueduct',
          '🏰 Muralha — city walls',
          '🎓 Universidade de Évora — 16th-century Jesuit university, the oldest after Coimbra'
        ]}
      ]
    },
    {
      id: 'wine-region',
      title: 'Alentejo wineries',
      content: [
        { kind: 'paragraph', text: 'Alentejo is one of Portugal’s largest wine regions. Character: full-bodied reds (Aragonês, Trincadeira, Alicante Bouschet), aromatic whites (Antão Vaz). Tours of quintas: €20–60.' },
        { kind: 'checklist', items: [
          '🍷 Herdade do Esporão (Reguengos de Monsaraz) — large winery with a restaurant on a hill. Tours and lunches',
          '🍷 Adega Mayor (Campo Maior) — architecture by Álvaro Siza Vieira',
          '🍷 Quinta do Mouro — family-run biodynamic winery',
          '🍷 Cartuxa — historic winery, a Portuguese legend',
          '🍷 Herdade do Rocim — experiments with amphorae'
        ]}
      ]
    },
    {
      id: 'nearby-villages',
      title: 'Whitewashed towns of Alentejo',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Monsaraz (50 km from Évora)', content: [
            { kind: 'paragraph', text: 'Medieval hilltop town, views over Lake Alqueva (artificial, the largest in Europe). Castle, whitewashed narrow streets. 1–2 hours.' }
          ]},
          { id: 'v2', title: 'Marvão (130 km)', content: [
            { kind: 'paragraph', text: 'Mountain town near the Spanish border, castle, views of Serra de São Mamede. One of the most atmospheric places in Portugal.' }
          ]},
          { id: 'v3', title: 'Elvas (95 km from Évora)', content: [
            { kind: 'paragraph', text: 'UNESCO — the world’s largest surviving complex of bastioned fortifications. Amoreira aqueduct, fortress.' }
          ]},
          { id: 'v4', title: 'Vila Viçosa', content: [
            { kind: 'paragraph', text: 'Marble everywhere, Palace of the Dukes of Braganza (former royal residence).' }
          ]},
          { id: 'v5', title: 'Estremoz', content: [
            { kind: 'paragraph', text: 'Saturday market with antiques, castle with a pousada hotel.' }
          ]},
          { id: 'v6', title: 'Mértola (180 km — deep south)', content: [
            { kind: 'paragraph', text: 'Former Arab capital, former mosque-church, Moorish architecture.' }
          ]}
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Alentejo cuisine',
      content: [
        { kind: 'checklist', items: [
          '🐷 Porco preto — black Iberian pork',
          '🥣 Açorda alentejana — bread soup with garlic and coriander',
          '🍲 Migas — fried bread with meat',
          '🐑 Ensopado de borrego — lamb stew',
          '🍄 Carne de porco à alentejana — pork with clams',
          '🍮 Sericaia com ameixa de Elvas — sweet baked dessert with dried plum',
          '🍷 Vinho da talha — wine aged in amphorae, a thousand-year-old tradition'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Best seasons: April-May (flowering), September-October (harvest, mild climate)',
          '🔥 In summer +35–40°C — hot. Plan sightseeing for morning and evening',
          '🏨 Pousadas — a hotel network in historic buildings (monasteries, fortresses). Pousada de Évora, Pousada de Estremoz, Pousada de Crato',
          '🚗 A car is essential for exploring the region',
          '🎫 Évora Card: €15 (3 days) — museums + discounted transport',
          '💶 Prices are lower than in Lisbon/Porto — the beaches and the region are underrated',
          '🌻 Route: Évora → Monsaraz → Marvão (2–3 days)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Turismo do Alentejo — official website', url: 'https://www.visitalentejo.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Évora — tourist information', url: 'https://www.cm-evora.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Alentejo', url: 'https://www.visitportugal.com/pt-pt/destinos/alentejo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
