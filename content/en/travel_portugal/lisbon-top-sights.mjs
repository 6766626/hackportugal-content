export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-top-sights',
  categoryId: 'travel_portugal',
  title: 'Lisbon — top 20 places worth seeing',
  tldr: 'Lisbon is a hilly city on the River Tagus: UNESCO sites in Belém, tram 28 as a symbol of the city, fado in Alfama, viewpoints with views, Mosteiro dos Jerónimos and Torre de Belém are must-sees. Minimum — 3 days, ideal — 5–7. Lisboa Card gives free transport and museum discounts.',
  tags: ['lisbon', 'tourism', 'sightseeing'],
  estimatedReadMinutes: 12,
  steps: [
    {
      id: 'belem',
      title: 'Belém district — UNESCO sites',
      content: [
        { kind: 'paragraph', text: 'The western part of Lisbon, 6 km from the centre. This is the era of the Great Discoveries: Vasco da Gama set sail from here. Entry to most attractions costs €10–14; Lisboa Card gives free entry or a discount.' },
        { kind: 'checklist', items: [
          '🏛️ Mosteiro dos Jerónimos (16th century, UNESCO) — Manueline-Gothic monastery, tomb of Vasco da Gama and Camões. €12, Tue–Sun 10–18, Mon closed',
          '🗼 Torre de Belém (16th century, UNESCO) — watchtower on the river, a symbol of Lisbon. €8',
          '🚀 Padrão dos Descobrimentos — 1960 monument to the Discoveries, rooftop viewpoint €5',
          '🥐 Pastéis de Belém — the original pastry shop with pastéis de nata since 1837. There is a queue, but it is worth it',
          '🏛️ Museu Nacional dos Coches — royal coaches from the 16th–19th centuries, €8',
          '🎨 Museu Coleção Berardo / MAAT — contemporary art, often free'
        ]},
        { kind: 'paragraph', text: 'How to get there: tram 15E from Praça do Comércio, train from Cais do Sodré to Belém, Uber/Bolt €8–12.' }
      ]
    },
    {
      id: 'baixa-chiado',
      title: 'Baixa and Chiado — the centre',
      content: [
        { kind: 'checklist', items: [
          '🟨 Praça do Comércio — the main square by the Tagus, triumphal arch, equestrian statue of José I',
          '🟥 Praça do Rossio — lively central square, D. Maria II theatre, wave-pattern paving',
          '⛪ Elevador de Santa Justa — 1902 cast-iron lift in Eiffel style, viewpoint €5.30',
          '☕ Café A Brasileira (Chiado) — statue of Fernando Pessoa, a legendary coffee spot',
          '📚 Livraria Bertrand — the oldest bookshop in the world (1732), Guinness',
          '🛍️ Rua Augusta — pedestrian shopping street with a triumphal arch',
          '🏛️ Museu do Dinheiro — free money museum in a historic bank building',
          '🚞 Ascensor da Glória — funicular to Bairro Alto'
        ]}
      ]
    },
    {
      id: 'alfama',
      title: 'Alfama — the oldest district',
      content: [
        { kind: 'paragraph', text: 'The district survived the 1755 earthquake: narrow streets, azulejos, fado from every window. The area is hilly, so wear comfortable shoes.' },
        { kind: 'checklist', items: [
          '🏰 Castelo de São Jorge — Moorish fortress on the hilltop, the best views. €15',
          '⛪ Sé de Lisboa — 12th-century cathedral, free entry to the main part',
          '🎵 Fado at Clube de Fado / Mesa de Frades / Tasca do Chico — evening concerts €30–60 with dinner',
          '🚋 Tram 28E — historic route through Alfama, Graça, Estrela. Be prepared for queues and pickpockets',
          '🌅 Miradouro de Santa Luzia — classic view with azulejos',
          '🌅 Miradouro da Senhora do Monte — the highest point, panorama of the whole city',
          '🏺 Museu do Fado — history of the genre, recordings by great performers. €5',
          '🎎 Museu Nacional do Azulejo — former monastery with a tile collection. €8'
        ]}
      ]
    },
    {
      id: 'bairro-alto',
      title: 'Bairro Alto, Príncipe Real, Estrela',
      content: [
        { kind: 'checklist', items: [
          '🌃 Bairro Alto — nightlife. Quiet by day; after 22 — bars, live music',
          '🌳 Jardim do Príncipe Real — park with a huge 150-year-old cedar, Sunday flea market',
          '🏛️ Basílica da Estrela — 18th-century Baroque basilica, free entry',
          '🌲 Jardim da Estrela — Lisbon residents’ favourite garden for a picnic',
          '📚 Museu Nacional de Arte Antiga (MNAA) — main art museum, €10',
          '🌅 Miradouro de São Pedro de Alcântara — view of the castle and centre, Glória funicular'
        ]}
      ]
    },
    {
      id: 'modern-lisboa',
      title: 'Modern Lisbon — Parque das Nações',
      content: [
        { kind: 'checklist', items: [
          '🐟 Oceanário de Lisboa — one of Europe’s best oceanariums. €25',
          '🎢 Pavilhão do Conhecimento — interactive science museum for children. €10',
          '🚡 Teleférico — cable car along the river, €4/adult',
          '🏗️ Gare do Oriente — Santiago Calatrava’s masterpiece railway station',
          '🛍️ Centro Vasco da Gama — shopping centre',
          '🌉 Ponte Vasco da Gama — 17 km bridge across the Tagus (2nd longest in Europe)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'Lisboa Card (€22/36/43 for 24/48/72 h) — free transport and 30+ attractions',
          'Viva Viagem — card for single trips on the metro and bus, better than a single ticket',
          'Tickets for Jerónimos and Torre de Belém — combo €18 instead of €20, but book online in advance (hourly slots)',
          'Tram 28: early morning (before 9:00) or evening — fewer crowds and pickpockets',
          'Water in restaurants is not free: ask for “água da torneira” (tap water, not available everywhere)',
          'Tips: it is customary to leave 5–10% in a restaurant',
          'You cannot swim in the Tagus — the water is polluted. Beaches are in Cascais / Costa da Caparica',
          'Evening walk: Castelo → Alfama → Tagus waterfront'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — official tourism', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Lisboa — culture', url: 'https://www.lisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal', url: 'https://www.visitportugal.com/pt-pt/destinos/lisboa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
