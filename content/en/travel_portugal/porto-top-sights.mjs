export default {
  editorialVoice: 'hackportugal',
  id: 'porto-top-sights',
  categoryId: 'travel_portugal',
  title: 'Porto — top 15 places worth seeing',
  tldr: 'Porto is the country’s second city and the birthplace of port wine. The historic centre of Ribeira is UNESCO-listed, with the Dom Luís I bridge, the port wine cellars in Vila Nova de Gaia, and the legendary Livraria Lello, which inspired Rowling. The city is more compact than Lisbon — 2-3 days are enough. The Porto Card gives free transport and discounts.',
  tags: ['porto', 'tourism', 'port wine', 'sightseeing'],
  estimatedReadMinutes: 10,
  steps: [
    {
      id: 'ribeira-downtown',
      title: 'Ribeira and the centre — UNESCO',
      content: [
        { kind: 'checklist', items: [
          '🌉 Ponte Dom Luís I — a two-level bridge from the Eiffel school, designed by one of his pupils. The pedestrian walkway on the upper deck has the best views of Porto. Free',
          '🏰 Ribeira — riverside with colourful houses and restaurants. UNESCO',
          '⛪ Sé do Porto — Romanesque-Gothic cathedral, views from the terraces. €3',
          '🚂 Estação de São Bento — railway station with 20,000 azulejos, scenes from Portuguese history. Free',
          '📚 Livraria Lello — neo-Gothic bookshop from 1906, which inspired Harry Potter. €8 (deducted from the purchase of a book)',
          '🏛️ Palácio da Bolsa — former stock exchange with the luxurious Salão Árabe. €12 with guided tour',
          '⛪ Igreja de São Francisco — Gothic outside, Baroque inside, golden interior. €8',
          '🗼 Torre dos Clérigos — Baroque bell tower, city panorama. €6'
        ]}
      ]
    },
    {
      id: 'port-wine-cellars',
      title: 'Port wine cellars — Vila Nova de Gaia',
      content: [
        { kind: 'paragraph', text: 'Cross the Dom Luís I bridge to the southern bank of the Douro — hundreds of cellars from famous brands. The historic area is UNESCO-listed. Tours €15-30 with tastings of 2-4 types. Book online in advance.' },
        { kind: 'checklist', items: [
          '🍷 Taylor\'s (1692) — one of the oldest, British style',
          '🍷 Graham\'s — excellent Vintage, terrace with a view',
          '🍷 Croft (1588) — the oldest port wine house',
          '🍷 Sandeman — iconic “cloaked” logo',
          '🍷 Cálem — Russian-language tours are sometimes available',
          '🍷 Ferreira — the only fully Portuguese one, the story of the woman entrepreneur Antónia',
          '🎫 Shortest tour + tasting: 45 min, €15-25. Premium with Vintage €40-80'
        ]},
        { kind: 'paragraph', text: 'After the cellars — Cais de Gaia: riverside with restaurants and a view of Ribeira on the opposite bank.' }
      ]
    },
    {
      id: 'foz-ocean',
      title: 'Foz and the ocean',
      content: [
        { kind: 'checklist', items: [
          '🌊 Foz do Douro — where the river meets the Atlantic, promenade',
          '🚋 Tram 1 — historic route from Ribeira to Foz',
          '🏖️ Praia dos Ingleses / Praia de Gondarém — city beaches',
          '🐟 Matosinhos — neighbouring city, fishing port, the best seafood in the region',
          '⛪ Fortaleza de São Francisco Xavier — 17th-century fort',
          '🎢 Sea Life Porto — aquarium'
        ]}
      ]
    },
    {
      id: 'cedofeita-boavista',
      title: 'Cedofeita, Boavista — the trendy part',
      content: [
        { kind: 'checklist', items: [
          '🎨 Rua de Miguel Bombarda — contemporary art galleries, boutiques',
          '🎷 Casa da Música — concert hall by Rem Koolhaas, guided tours and concerts',
          '🌳 Jardim do Palácio de Cristal — Porto’s best garden with a panorama',
          '🏛️ Museu de Arte Contemporânea Serralves — contemporary art and park. €15',
          '📚 Museu Soares dos Reis — national museum of old art. €5',
          '🦁 Jardim Zoológico — zoo for families'
        ]}
      ]
    },
    {
      id: 'food-drink',
      title: 'What to try in Porto',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — Porto’s signature dish: a sandwich with meat, egg and a beer-based sauce',
          '🐟 Bacalhau à Gomes de Sá — cod with eggs and potatoes',
          '🍢 Tripas à moda do Porto — the national dish (this is why Porto residents are called “tripeiros”)',
          '🍷 Vinho Verde — young, light white wine, good for summer',
          '🍻 Super Bock — local beer',
          '🥐 Pastel de Chaves — puff pastry with meat',
          '☕ Cimbalino — the local name for espresso',
          '🍻 Taberna dos Mercadores / A Francesinha da Sé — cult favourites'
        ]}
      ]
    },
    {
      id: 'day-trips',
      title: 'Day trips',
      content: [
        { kind: 'checklist', items: [
          '🍇 Douro Valley — the Douro river valley, UNESCO-listed vineyards. Train from Campanhã to Régua (2 hrs, €14) or by car',
          '🏰 Guimarães — the cradle of Portugal, 11th-century castle (1 hr by train, €9)',
          '🏛️ Braga — the “Portuguese Rome”, Bom Jesus do Monte (1 hr by train)',
          '🏖️ Aveiro — the “Portuguese Venice”, canals and moliceiro boats (35 min by train)',
          '🌊 Viana do Castelo — fishing town in the north (1.5 hrs by train)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Porto Card (€13/17/22/27 for 1/2/3/4 days) — transport, 17 museums and discounts',
          'Andante — travel card for metro, buses and trains in the Porto area, €1.95-2.50 per journey',
          'Livraria Lello — book your ticket online, the queue can be an hour long',
          'Port wine cellars — book your tour online, especially in summer',
          'Tram 1 — does not always run, check on stcp.pt',
          'Porto is rainier than Lisbon — take an umbrella',
          'Evening promenade: Ribeira → Ponte Luís → Gaia → sunset'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Porto — official website', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal do Porto — culture', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Porto', url: 'https://www.visitportugal.com/pt-pt/destinos/porto-e-norte', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
