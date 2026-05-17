export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Lisbon neighbourhoods — where to live',
  tldr: 'The centre (Baixa/Chiado) is expensive and touristy. Alfama/Mouraria is historic and trendy, but noisy. Avenidas Novas / Saldanha / Areeiro are modern neighbourhoods with metro access, suitable for families. Parque das Nações is a new family-friendly area. Campo de Ourique / Estrela are intimate and green. Almada / Cacilhas is on the other bank and cheaper. Cascais / Oeiras are suburbs by the ocean.',
  tags: ['lisbon', 'neighbourhoods', 'housing'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'center',
      title: 'Historic centre',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Chiado', content: [
            { kind: 'paragraph', text: 'Shopping centre, cafés, museums. A very touristy area. T1 rent from €1,500–2,500/month. Plus: everything is nearby. Minus: crowds, noise at night.' }
          ]},
          { id: 'c2', title: 'Alfama / Mouraria', content: [
            { kind: 'paragraph', text: 'The oldest neighbourhood, fado, steep streets. Atmospheric, but with little parking and poor accessibility for families with prams. T1 from €1,200–2,000/month.' }
          ]},
          { id: 'c3', title: 'Bairro Alto / Príncipe Real', content: [
            { kind: 'paragraph', text: 'Nightlife (Bairro Alto) and boutiques (Príncipe Real). Noisy at night, a poor choice for sleeping if you do not like partying. T1 €1,500–2,500.' }
          ]}
        ]}
      ]
    },
    {
      id: 'family',
      title: 'Family neighbourhoods',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Avenidas Novas / Saldanha', content: [
            { kind: 'paragraph', text: 'Business district. Metro on the blue and yellow lines. Many foreigners, restaurants, Corte Inglés. T1 €1,400–2,200, T2 €1,800–3,000.' }
          ]},
          { id: 'f2', title: 'Areeiro / Roma', content: [
            { kind: 'paragraph', text: 'Quiet neighbourhoods with schools. Metro on the green line. There is a Russian-speaking club. T1 €1,200–1,800.' }
          ]},
          { id: 'f3', title: 'Parque das Nações', content: [
            { kind: 'paragraph', text: 'Built for Expo 98. Modern, spacious, many parks, oceanarium. A family-friendly neighbourhood. T1 €1,400–2,200, T2 €2,000–3,500.' }
          ]},
          { id: 'f4', title: 'Campo de Ourique', content: [
            { kind: 'paragraph', text: 'An intimate, green neighbourhood with a market. A favourite area among foreigners. T1 €1,300–2,000.' }
          ]},
          { id: 'f5', title: 'Estrela / Lapa', content: [
            { kind: 'paragraph', text: 'Diplomatic, with Jardim da Estrela, prestigious. T1 €1,500–2,500, villas €3,000+.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Affordable neighbourhoods',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Penha de França / Anjos', content: [
            { kind: 'paragraph', text: 'Central Lisbon, but cheaper. The area is developing and is trendy among young people. T1 from €800–1,500.' }
          ]},
          { id: 'b2', title: 'Arroios / Alameda', content: [
            { kind: 'paragraph', text: 'A multicultural neighbourhood with a wide range of cuisines. Metro on the green line. T1 €1,000–1,600.' }
          ]},
          { id: 'b3', title: 'Lumiar / Telheiras', content: [
            { kind: 'paragraph', text: 'Northern area, calm. Schools, parks. T1 €900–1,400, T2 €1,300–2,000.' }
          ]},
          { id: 'b4', title: 'Almada / Cacilhas (south bank)', content: [
            { kind: 'paragraph', text: 'On the south side of the Tagus. 10 minutes by ferry to central Lisbon. 30–40% cheaper than city prices. T1 €600–1,000.' }
          ]},
          { id: 'b5', title: 'Seixal / Barreiro / Amora', content: [
            { kind: 'paragraph', text: 'Even further south. Many commuting workers from Lisbon are moving here. T1 €500–900.' }
          ]}
        ]}
      ]
    },
    {
      id: 'coast',
      title: 'Coast — Cascais / Oeiras',
      content: [
        { kind: 'substeps', items: [
          { id: 'cc1', title: 'Cascais', content: [
            { kind: 'paragraph', text: 'A resort town by the ocean. Prestigious, with many foreigners. Train (Urbanos) to Lisbon — 40 min. T1 €1,500–3,000, villas €5,000+.' }
          ]},
          { id: 'cc2', title: 'Oeiras', content: [
            { kind: 'paragraph', text: 'Between Lisbon and Cascais. Technology hub (Lagoas Park). International schools. T1 €1,200–2,200.' }
          ]},
          { id: 'cc3', title: 'Estoril', content: [
            { kind: 'paragraph', text: 'Between Cascais and Oeiras. Casino, beaches. Expensive. T1 €1,500–2,800.' }
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: 'How to choose',
      content: [
        { kind: 'checklist', items: [
          'Work in the centre + no car → Avenidas Novas, Areeiro, Saldanha',
          'Family with children + schools → Parque das Nações, Oeiras, Cascais, Areeiro',
          'Budget → Almada, Amadora, Barreiro',
          'Nightlife → Bairro Alto, Cais do Sodré (but do not live there)',
          'Old-town atmosphere → Alfama, Mouraria, Graça',
          'Ocean nearby → Cascais, Estoril, Oeiras, Caxias',
          'Young foreigners → Penha de França, Campo de Ourique, Arroios',
          'Russian-speaking school/club → Oeiras (Carlos Freixo), Cascais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — guide to neighbourhoods and Junta de Freguesia', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — housing statistics in Lisbon', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Lisboa — tourist portal', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
