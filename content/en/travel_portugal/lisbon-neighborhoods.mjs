export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Lisbon neighbourhoods — where to live',
  tldr: 'City centre (Baixa/Chiado) — expensive, touristy. Alfama/Mouraria — historic and trendy, but noisy. Avenidas Novas / Saldanha / Areeiro — modern districts with metro, suitable for families. Parque das Nações — new family-friendly district. Campo de Ourique / Estrela — cosy, leafy. Almada / Cacilhas — the other bank, cheaper. Cascais / Oeiras — suburbs by the ocean.',
  tags: ['lisbon', 'neighbourhoods', 'housing'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'center',
      title: 'Historic centre',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Chiado', content: [
            { kind: 'paragraph', text: 'Shopping streets, cafés, museums. A very touristy area. T1 from €1,500–2,500/month. Plus: everything is nearby. Minus: crowds, noise at night.' }
          ]},
          { id: 'c2', title: 'Alfama / Mouraria', content: [
            { kind: 'paragraph', text: 'The oldest quarter, fado, steep streets. Atmospheric, but little parking and poor accessibility for families with pushchairs. T1 from €1,200–2,000/month.' }
          ]},
          { id: 'c3', title: 'Bairro Alto / Príncipe Real', content: [
            { kind: 'paragraph', text: 'Nightlife (Bairro Alto) and boutiques (Príncipe Real). Noisy at night, a poor choice for sleep if you do not like partying. T1 €1,500–2,500/month.' }
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
            { kind: 'paragraph', text: 'Business district. Blue and Yellow metro lines. Many expats, restaurants, El Corte Inglés. T1 €1,400–2,200/month; T2 €1,800–3,000/month.' }
          ]},
          { id: 'f2', title: 'Areeiro / Roma', content: [
            { kind: 'paragraph', text: 'Quiet neighbourhoods with schools. Green line metro. There is a Russian-speaking club. T1 €1,200–1,800/month.' }
          ]},
          { id: 'f3', title: 'Parque das Nações', content: [
            { kind: 'paragraph', text: 'Built for Expo 98. Modern, spacious, many parks, oceanarium. Family-friendly area. T1 €1,400–2,200/month; T2 €2,000–3,500/month.' }
          ]},
          { id: 'f4', title: 'Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Cosy, leafy district with a market. A favourite among expats. T1 €1,300–2,000/month.' }
          ]},
          { id: 'f5', title: 'Estrela / Lapa', content: [
            { kind: 'paragraph', text: 'Diplomatic, with the Estrela garden, prestigious. T1 €1,500–2,500/month; villas €3,000+.' }
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
            { kind: 'paragraph', text: 'Central Lisbon, but cheaper. The area is developing, trendy among the young. T1 from €800–1,500/month.' }
          ]},
          { id: 'b2', title: 'Arroios / Alameda', content: [
            { kind: 'paragraph', text: 'Multicultural area, diverse cuisines. Green line metro. T1 €1,000–1,600/month.' }
          ]},
          { id: 'b3', title: 'Lumiar / Telheiras', content: [
            { kind: 'paragraph', text: 'Northern part, calm. Schools, parks. T1 €900–1,400/month; T2 €1,300–2,000/month.' }
          ]},
          { id: 'b4', title: 'Almada / Cacilhas (south bank)', content: [
            { kind: 'paragraph', text: 'On the south side of the Tejo. 10 min by ferry to Lisbon city centre. 30–40% cheaper than city prices. T1 €600–1,000/month.' }
          ]},
          { id: 'b5', title: 'Seixal / Barreiro / Amora', content: [
            { kind: 'paragraph', text: 'Further south. Popular with people who work in Lisbon. T1 €500–900/month.' }
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
            { kind: 'paragraph', text: 'Resort town by the ocean. Prestigious, many expats. Train (Urbanos) to Lisbon — 40 min. T1 €1,500–3,000/month; villas €5,000+.' }
          ]},
          { id: 'cc2', title: 'Oeiras', content: [
            { kind: 'paragraph', text: 'Between Lisbon and Cascais. Tech hub (Lagoas Park). International schools. T1 €1,200–2,200/month.' }
          ]},
          { id: 'cc3', title: 'Estoril', content: [
            { kind: 'paragraph', text: 'Between Cascais and Oeiras. Casino, beaches. Expensive. T1 €1,500–2,800/month.' }
          ]}
        ]}
      ]
    },
    {
      id: 'choose',
      title: 'How to choose',
      content: [
        { kind: 'checklist', items: [
          'Work in the city centre + no car → Avenidas Novas, Areeiro, Saldanha',
          'Family with children + schools → Parque das Nações, Oeiras, Cascais, Areeiro',
          'On a budget → Almada, Amadora, Barreiro',
          'Nightlife → Bairro Alto, Cais do Sodré (but not to live)',
          'Old-town atmosphere → Alfama, Mouraria, Graça',
          'Ocean nearby → Cascais, Estoril, Oeiras, Caxias',
          'Young expats → Penha de França, Campo de Ourique, Arroios',
          'Russian-speaking school/club → Oeiras (Carlos Freixo), Cascais'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — guide to neighbourhoods and freguesias', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — housing statistics in Lisbon', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Lisboa — tourist portal', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
