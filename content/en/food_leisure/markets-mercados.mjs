export default {
  editorialVoice: 'hackportugal',
  id: 'markets-mercados',
  categoryId: 'food_leisure',
  title: 'Portugal’s markets (Mercados)',
  tldr: 'Municipal markets are a living tradition: fresh fish, meat, vegetables, spices. The main ones in Lisbon: Mercado da Ribeira (Time Out), Mercado de Campo de Ourique, Arroios, 31 de Janeiro.\n\nIn Porto — the legendary Mercado do Bolhão. Traditional market stalls are most often active in the morning until around 14:00, but schedules depend heavily on the specific market; food halls usually work longer and open later. Check the opening hours on the page of the specific mercado/feira.',
  tags: ['markets', 'market', 'mercado', 'time out'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Mercado da Ribeira / Time Out Market', content: [
            { kind: 'paragraph', text: 'Cais do Sodré. In the morning — a traditional market: fish, meat. From midday until night — Time Out Market with 30+ food kiosks from top Portuguese chefs. Very touristy, but the quality is high.' },
          ]},
          { id: 'l2', title: 'Mercado de Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Less touristy, more “for locals”. There is also a food court in the evening. The Campo de Ourique neighbourhood is pleasant for a walk.' }
          ]},
          { id: 'l3', title: 'Mercado 31 de Janeiro', content: [
            { kind: 'paragraph', text: 'Saldanha. Large, authentic, inexpensive. Locals love it. Metro nearby.' }
          ]},
          { id: 'l4', title: 'Mercado de Arroios', content: [
            { kind: 'paragraph', text: 'The Arroios neighbourhood is multicultural. Lots of Asian, Indian and Brazilian vendors.' }
          ]},
          { id: 'l5', title: 'Feira da Ladra (flea market)', content: [
            { kind: 'paragraph', text: 'On Tuesdays and Saturdays, Campo de Santa Clara. A flea market — from antiques to junk. With a view of the Panteão Nacional.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Porto',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Mercado do Bolhão', content: [
            { kind: 'paragraph', text: 'Legendary. After the 2022 renovation — clean, but it has kept its spirit. Fresh fish, meat, bread, flowers, cheeses. Authentic in the morning.' }
          ]},
          { id: 'p2', title: 'Mercado Ferreira Borges', content: [
            { kind: 'paragraph', text: 'A cast-iron building by the Douro river. Not a food market, but inside is Hard Club: concerts and events.' }
          ]},
          { id: 'p3', title: 'Mercado do Bom Sucesso', content: [
            { kind: 'paragraph', text: 'Boavista. A modern food hall with boutiques, similar to Time Out. A good place for lunch.' }
          ]},
          { id: 'p4', title: 'Feira da Vandoma', content: [
            { kind: 'paragraph', text: 'Porto’s flea market, usually on Saturday mornings; it is best to check the location and hours on the Câmara Municipal do Porto website, as the site may change.' }
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Other regions',
      content: [
        { kind: 'checklist', items: [
          'Mercado Municipal de Abrantes — municipal market; check opening hours and market days on the Município de Abrantes website',
          'Mercado de Loulé (Algarve) — surreal Moorish style, Saturday',
          'Mercado de Coimbra — modern market and street food',
          'Feira de São Pedro (Sintra) — 2nd/4th Sunday of the month',
          'Mercado Municipal de Setúbal — fish straight from the boats'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'How to use them',
      content: [
        { kind: 'checklist', items: [
          'Morning 7-10 — the freshest catch and the best choice',
          'By lunchtime there are often clearance discounts of 30-50%',
          'Pay in cash at traditional stalls: MB WAY or cards are not accepted everywhere',
          '“Saco, por favor” — “a bag, please”',
          'Ask “Prova?” — they often let you try cheese, olives',
          'If you are a tax resident of Portugal and file IRS, ask for fatura com NIF: food shopping usually goes into general family expenses, while cafés/restaurants go into a separate e-Fatura category',
          'Vendors often speak only Portuguese — basic vocabulary will be useful',
          'Breakfast (pequeno-almoço) at the market is the most authentic option'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Markets', url: 'https://comercio.lisboa.pt/feiras-e-mercados/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Mercado do Bolhão', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Time Out Market Lisbon', url: 'https://www.timeoutmarket.com/lisboa/', kind: 'secondary', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
