export default {
  editorialVoice: 'hackportugal',
  id: 'porto-neighborhoods',
  categoryId: 'travel_portugal',
  title: 'Porto neighbourhoods — where to live',
  tldr: 'Baixa / Ribeira — historic centre, touristy. Cedofeita / Boavista — fashionable area, design scene. Foz — by the ocean, premium area. Bonfim — up-and-coming, affordable. Matosinhos — coast, seafood. Vila Nova de Gaia (the other bank) — cheaper, same views. Rent is 30-40% lower than in Lisbon.',
  tags: ['porto', 'neighbourhoods', 'housing'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'center',
      title: 'Central neighbourhoods',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Baixa / Aliados', content: [
            { kind: 'paragraph', text: 'The centre, S. Bento and Trindade metro. Touristy during the day, calmer at night than Lisbon. T1 — €900-1,400.' }
          ]},
          { id: 'c2', title: 'Ribeira', content: [
            { kind: 'paragraph', text: 'UNESCO, views over the Douro. Very touristy, steep little streets. Plus: beautiful; minus: noisy and few supermarkets. T1 — €1,000-1,800, if you can find one.' }
          ]},
          { id: 'c3', title: 'Cedofeita', content: [
            { kind: 'paragraph', text: 'Creative neighbourhood, boutiques, cafés, galleries. Popular with young expats. T1 — €900-1,400.' }
          ]},
          { id: 'c4', title: 'Bonfim', content: [
            { kind: 'paragraph', text: 'Close to the centre, an area undergoing regeneration. More authentic, local. T1 — €700-1,200.' }
          ]}
        ]}
      ]
    },
    {
      id: 'premium',
      title: 'Premium neighbourhoods',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Foz do Douro', content: [
            { kind: 'paragraph', text: 'At the mouth of the Douro, a premium area. Beaches, restaurants, families. Far from the centre; you need a car or metro line 1. T1 — €1,200-2,000, villas — €2,500+.' }
          ]},
          { id: 'p2', title: 'Boavista', content: [
            { kind: 'paragraph', text: 'Business district. Casa da Música, skyscrapers by Portuguese standards. Good schools. T1 — €1,000-1,700.' }
          ]},
          { id: 'p3', title: 'Massarelos / Campo Alegre', content: [
            { kind: 'paragraph', text: 'Between the centre and Foz. Botanical Garden. Green, calm area. T1 — €900-1,500.' }
          ]}
        ]}
      ]
    },
    {
      id: 'budget',
      title: 'Affordable neighbourhoods',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Campanhã', content: [
            { kind: 'paragraph', text: 'Near the main railway station. Cheap, the area is developing, but still a bit rough. T1 — €600-900.' }
          ]},
          { id: 'b2', title: 'Paranhos', content: [
            { kind: 'paragraph', text: 'University area, lots of young people. Yellow metro line. T1 — €700-1,100.' }
          ]},
          { id: 'b3', title: 'Areosa / Ramalde', content: [
            { kind: 'paragraph', text: 'Northern neighbourhoods, suitable for families. Blue and yellow metro lines. T1 — €700-1,100.' }
          ]}
        ]}
      ]
    },
    {
      id: 'outside',
      title: 'Suburbs',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Vila Nova de Gaia', content: [
            { kind: 'paragraph', text: 'South bank of the Douro, famous port wine cellars. Yellow and violet metro lines across Ponte Luís I. Same views, 20-30% cheaper. T1 — €700-1,200.' }
          ]},
          { id: 'o2', title: 'Matosinhos', content: [
            { kind: 'paragraph', text: 'To the west. Beaches, seafood, fishing port. Blue metro line. T1 — €700-1,200.' }
          ]},
          { id: 'o3', title: 'Maia', content: [
            { kind: 'paragraph', text: 'North of Porto. Airport. Family-oriented area, schools. Having a car is advisable. T1 — €600-1,000.' }
          ]},
          { id: 'o4', title: 'Gondomar / Valongo', content: [
            { kind: 'paragraph', text: 'East. Cheap, but connection to the centre is by car or bus. T1 — €500-800.' }
          ]}
        ]}
      ]
    },
    {
      id: 'vs-lisbon',
      title: 'Porto and Lisbon',
      content: [
        { kind: 'checklist', items: [
          '💰 Rent in Porto is 30-40% cheaper',
          '🌆 Porto is more compact, everything is within walking distance',
          '🌧️ Porto is rainier and cooler (ocean, north)',
          '🍷 Port wine, the Douro Valley — a unique feature',
          '✈️ Fewer international flights, but there are direct flights to Europe',
          '🎓 Excellent universities (Porto, Católica)',
          '🏝️ Good beaches (Matosinhos, Foz, Leça)',
          '👔 Fewer expats, more local atmosphere',
          '🚆 Alfa Pendular to Lisbon in 2.5 h'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — Norte housing indicators', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — tourism portal', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
