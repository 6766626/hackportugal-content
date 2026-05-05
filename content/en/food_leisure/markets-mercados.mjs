export default {
  editorialVoice: 'hackportugal',
  id: 'markets-mercados',
  categoryId: 'food_leisure',
  title: 'Markets in Portugal (Mercados)',
  tldr: 'Municipal markets are a living tradition: fresh fish, meat, vegetables, spices. Main ones in Lisbon: Mercado da Ribeira (Time Out), Mercado de Campo de Ourique, Arroios, 31 de Janeiro. In Porto — the legendary Mercado do Bolhão. Open 07:00–14:00 (core hours), some run into the evening as food halls.',
  tags: ['markets', 'market', 'mercado', 'time out'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Mercado da Ribeira / Time Out Market', content: [
            { kind: 'paragraph', text: 'Cais do Sodré. In the morning — a traditional market: fish, meat. From noon until late — Time Out Market with 30+ food stalls from top Portuguese chefs. Very touristy, but the quality is high.' },
          ]},
          { id: 'l2', title: 'Mercado de Campo de Ourique', content: [
            { kind: 'paragraph', text: 'Less touristy, more “for locals”. In the evening there is also a food court. The Campo de Ourique neighbourhood is pleasant for a stroll.' }
          ]},
          { id: 'l3', title: 'Mercado 31 de Janeiro', content: [
            { kind: 'paragraph', text: 'Saldanha. Large, authentic, inexpensive. Locals love it. Metro nearby.' }
          ]},
          { id: 'l4', title: 'Mercado de Arroios', content: [
            { kind: 'paragraph', text: 'The Arroios area is multicultural. Many Asian, Indian and Brazilian vendors.' }
          ]},
          { id: 'l5', title: 'Feira da Ladra (flea market)', content: [
            { kind: 'paragraph', text: 'On Tuesdays and Saturdays, Campo de Santa Clara. A flea market — from antiques to bric-a-brac. With a view of the Panteão Nacional.' }
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
            { kind: 'paragraph', text: 'Legendary. After the 2022 renovation — clean, yet it kept its soul. Fresh fish, meat, bread, flowers, cheeses. Authentic in the morning.' }
          ]},
          { id: 'p2', title: 'Mercado Ferreira Borges', content: [
            { kind: 'paragraph', text: 'Cast-iron building by the Douro river. Not a food market, but inside is the Hard Club: concerts and events.' }
          ]},
          { id: 'p3', title: 'Mercado do Bom Sucesso', content: [
            { kind: 'paragraph', text: 'Boavista. A modern food hall with boutiques, similar to Time Out. A good place for lunch.' }
          ]},
          { id: 'p4', title: 'Feira de Vandoma', content: [
            { kind: 'paragraph', text: 'By Bolhão metro, on Sunday mornings. A flea market.' }
          ]}
        ]}
      ]
    },
    {
      id: 'regional',
      title: 'Other regions',
      content: [
        { kind: 'checklist', items: [
          'Mercado de Abrantes — a medieval town, on Saturdays',
          'Mercado de Loulé (Algarve) — surreal Moorish style, Saturday',
          'Mercado de Coimbra — a modern market and street food',
          'Feira de São Pedro (Sintra) — 2nd/4th Sunday of the month',
          'Mercado Municipal de Setúbal — fish straight off the boats'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'How to use',
      content: [
        { kind: 'checklist', items: [
          'Morning 7–10 — the freshest catch and the best selection',
          'By lunchtime there are often reductions of 30–50%',
          'Pay cash at traditional stalls: MB WAY or cards are not accepted everywhere',
          '"Saco, por favor" — "bag, please"',
          'Ask "Prova?" — they often let you taste cheese, olives',
          'Ask for NIF for an IRS deduction on receipts',
          'Sellers often speak only Portuguese — basic vocabulary will be handy',
          'Breakfast (pequeno-almoço) at the market is the most authentic option'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Mercados', url: 'https://comercio.lisboa.pt/feiras-e-mercados/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Mercado do Bolhão', url: 'https://visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Time Out Market Lisbon', url: 'https://www.timeoutmarket.com/lisboa/', kind: 'secondary', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
