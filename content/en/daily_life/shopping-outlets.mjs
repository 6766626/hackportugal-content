export default {
  editorialVoice: 'hackportugal',
  id: 'shopping-outlets',
  categoryId: 'daily_life',
  title: 'Portugal outlets — where to buy brands at a discount',
  tldr: 'The three largest: Freeport (Alcochete) — 160+ shops, Designer Outlet Algarve (Loulé) — 60+ boutiques, Vila do Conde The Style Outlets (Porto) — 90+ shops. Discounts of 30-70% on past collections. Plus smaller outlet spots in Lisbon (Fashion Clinic, Outlet Amoreiras), Sintra (Sintra Retail Park), Cascais. It is best to go after Christmas and at the end of August — final sales.',
  tags: ['outlet', 'shopping', 'freeport', 'outlets'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'freeport',
      title: '🏆 Freeport Lisboa (Alcochete) — the largest in Europe',
      content: [
        { kind: 'paragraph', text: '30 km from Lisbon, via Ponte Vasco da Gama. One of the largest outlet centres in Europe — 160+ shops, 55,000 m².' },
        { kind: 'checklist', items: [
          'Brands: Nike, Adidas, Puma, Calvin Klein, Tommy Hilfiger, Levi\'s, Guess, Lacoste, Diesel, Hugo Boss, Massimo Dutti, Pepe Jeans, GANT, La Perla',
          'Discounts: 30-70% off retail prices',
          'How to get there: by car (30 min via the A12), Fertagus bus + shuttle from Pragal, Uber (€20-30 from the centre)',
          'Hours: Mon-Sun 10:00-22:00',
          'Parking: free, 5,000 spaces',
          'Food: large food court — €5-15/dish',
          'For children: play area + Kidzânia nearby',
          '🎟️ Tourist card — an extra 10% discount in most shops (show a non-EU passport + visitor card)',
          'Best season: after Christmas (26 December), at the end of July, in the last days of August'
        ]}
      ]
    },
    {
      id: 'designer-outlet-algarve',
      title: '🌴 Designer Outlet Algarve (Loulé)',
      content: [
        { kind: 'paragraph', text: '60+ boutiques with premium brands in the municipality of Loulé. For tourists in the Algarve — a must-visit.' },
        { kind: 'checklist', items: [
          'Brands: Michael Kors, Armani, Tommy Hilfiger, Calvin Klein, Kiehl\'s, Sebago, Pandora, Swarovski',
          'Discounts 30-70%, sales — up to 80%',
          'Parking is free',
          'Nearby: Quinta do Lago (10 min), Vale do Lobo (15 min), Faro airport (20 min)',
          'Hours: 10:00-22:00 (June-September), 10:00-21:00 in winter',
          '🍴 Restaurant area overlooking the park area',
          '🎟️ Privilege card for tourists at the Info Desk'
        ]}
      ]
    },
    {
      id: 'vila-do-conde',
      title: '🌊 Vila do Conde The Style Outlets (Porto)',
      content: [
        { kind: 'paragraph', text: '90+ shops 30 km north of Porto. Open-air village format.' },
        { kind: 'checklist', items: [
          'Brands: Massimo Dutti, Oysho, Pepe Jeans, Cortefiel, Tous, Salsa, Parfois, Calvin Klein',
          'Discounts 30-70%',
          'How to get there: by car (A28, 25 min), direct Flixbus / Rede Expressos, Uber ~€20',
          'Good to combine with a trip to the town of Vila do Conde (historic ships, Agueiro beach)',
          'Hours: 10:00-22:00',
          'Children\'s area, games areas'
        ]}
      ]
    },
    {
      id: 'lisbon-area',
      title: 'Smaller outlet spots in Lisbon',
      content: [
        { kind: 'checklist', items: [
          'Fashion Clinic Outlet (Av. da Liberdade) — premium brands with discounts of 30-60% (Balenciaga, Celine, Prada from recent collections)',
          'Amoreiras Shopping — a regular shopping centre (NOT an outlet); individual shops may run promos. Uterqüe as a brand was closed by Inditex in 2022 — items have been integrated into Massimo Dutti',
          'Mercado de Levante (Feira da Ladra) — second-hand + vintage, Saturday-Sunday',
          'Lisboa Outlet Village (LOV) (Campera, 40 km N) — 70 shops: Nike, Tous, Springfield, Levi\'s'
        ]}
      ]
    },
    {
      id: 'shopping-events',
      title: 'When the best discounts are',
      content: [
        { kind: 'checklist', items: [
          '📅 Post-Christmas sales (26 December-2 January) — up to 80%',
          '📅 Summer sale (early July, final stage — end of August)',
          '📅 Black Friday (25 November) — an additional 20-30% discount in many outlets',
          '📅 Cyber Monday — focus on online',
          '🎁 Easter (April) — mini promotion',
          '🧲 Private sales — subscribe to outlet newsletters; vouchers are sent 2 weeks before events'
        ]}
      ]
    },
    {
      id: 'tax-refund',
      title: 'Tax Refund (IVA refund) for tourists',
      content: [
        { kind: 'paragraph', text: 'Non-EU tourists can receive an IVA refund of 13-23% on purchases >€50 in one shop on one day.' },
        { kind: 'checklist', items: [
          'In the shop: ask for a factura com IVA and a Tax Refund form (Global Blue, Planet Tax Free, Premier Tax Free)',
          'When leaving the EU (Lisbon, Porto, Faro airport): customs stamp on the form',
          'Refund: either cash at the kiosk on departure, or to a card (6-8 weeks)',
          'Fee: operators take ~15-25% of the refund',
          'Since 2023: electronic e-Taxfree via KIOSK at the airport — no queues',
          'For EU residents (you!) — not available, only for tourists resident outside the EU'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Shuttle to Freeport', amountEURMin: 5, amountEURMax: 10 },
    { label: 'Tax Refund operator fee', amountEURMin: 15, amountEURMax: 25, note: '% of the refund amount' }
  ],
  sources: [
    { title: 'Freeport Lisboa Fashion Outlet', url: 'https://www.freeport.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Designer Outlet Algarve', url: 'https://www.designeroutletalgarve.com/en/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vila do Conde The Style Outlets', url: 'https://viladoconde.thestyleoutlets.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASAE — consumer rights', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
