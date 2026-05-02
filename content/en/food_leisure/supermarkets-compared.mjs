export default {
  editorialVoice: 'hackportugal',
  id: 'supermarkets-compared',
  categoryId: 'daily_life',
  title: 'Supermarkets in Portugal — comparison',
  tldr: 'Main chains: Continente (leader, Sonae), Pingo Doce (quality and offers, Jerónimo Martins), Lidl (cheap + specialist goods), Auchan (hypermarket; in 2024–2025 it acquired DIA Portugal — the Minipreço brand is being rebranded/integrated), Aldi (discounter), Mercadona (Spanish chain, expanded beyond the north, active in Lisbon and the centre of the country), El Corte Inglés (premium, Lisbon/Gaia). Loyalty programmes are key — without them you overpay by 10–20%.',
  tags: ['supermarkets', 'continente', 'pingo doce', 'lidl'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'chains',
      title: 'Main chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Continente (Sonae)', content: [
            { kind: 'paragraph', text: 'The largest chain. Hyper (hypermarkets), Modelo (mid-sized), Bom Dia (small). The Continente card is essential! It focuses on weekly offers and cashback of up to 50%.' }
          ]},
          { id: 'c2', title: 'Pingo Doce (Jerónimo Martins)', content: [
            { kind: 'paragraph', text: 'Second by turnover. Known for Friday “-50%” offers on one category. Fresh fish and meat are excellent. Pingo Doce card with personalised coupons.' }
          ]},
          { id: 'c3', title: 'Lidl', content: [
            { kind: 'paragraph', text: 'German discounter. Cheap basic groceries, good own brands (Deluxe = premium). Thursday — “Parkside”/“Esmara” offers on non-food goods. Fresh bakery.' }
          ]},
          { id: 'c4', title: 'Minipreço (Auchan, former DIA)', content: [
            { kind: 'paragraph', text: 'Discounter with many small shops. In 2024–2025 Auchan Retail Portugal acquired DIA Portugal; some locations are being integrated/rebranded as Auchan. The Clube Minipreço programme may change during the transition period — check locally.' }
          ]},
          { id: 'c5', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'French hypermarket. Wide range, including foreign products. Auchan card.' }
          ]},
          { id: 'c6', title: 'Aldi', content: [
            { kind: 'paragraph', text: 'German discounter. Growing chain. Similar to Lidl, but smaller.' }
          ]},
          { id: 'c7', title: 'El Corte Inglés', content: [
            { kind: 'paragraph', text: 'Spanish premium chain. Only Lisbon (Saldanha) and Gaia (V. N. de Gaia). Delicatessen section, foreign brands. Expensive, but the range is unique.' }
          ]},
          { id: 'c8', title: 'Mercadona', content: [
            { kind: 'paragraph', text: 'Spanish chain in Portugal since 2019. Own brands such as Hacendado. It opened in northern regions and by 2026 had spread to the centre and Greater Lisbon/south — a major chain with dozens of shops.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cards',
      title: 'Loyalty cards — how to use them',
      content: [
        { kind: 'checklist', items: [
          'Continente: get one in-store or through the app. Check offers before shopping.',
          'Pingo Doce: the app shows personal coupons. Friday -50% offers — activate in the app BEFORE purchase.',
          'Lidl Plus: digital card in the app + weekly coupons',
          'The principle — do not buy at the regular price. Every chain puts 20–40% of products on offer each day',
          'Subscribe to email newsletters: the promotional leaflet comes out on Tuesdays'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Fresh fish: Pingo Doce and Continente are the best. Seafood on Wednesday/Friday.',
          'Meat: Mercearia/Talho (butcher’s shop) is often cheaper and fresher',
          'Wine: Lidl for good budget wine (“Delicatessen” range), El Corte Inglés for something special',
          'Organic/bio: Celeiro, Go Natural, bio sections in Pingo/Continente',
          'Cheap: Lidl + Minipreço for basic groceries',
          'Delivery: Continente Online, Pingo Doce Casa, Mercadão — €5–10, free from €75',
          'Invoices with NIF — count towards IRS deductions (35% of invoices up to €250 per year)'
        ]}
      ]
    },
    {
      id: 'cultural-shops',
      title: 'Specialist shops',
      content: [
        { kind: 'checklist', items: [
          'Talho — butcher’s shop (often better than a supermarket)',
          'Peixaria — fishmonger',
          'Padaria — bakery (fresh bread and pastries)',
          'Pastelaria — café + pastry shop',
          'Mercado Municipal — market (Lisbon: Campo de Ourique, Arroios, 31 de Janeiro; Porto: Bolhão)',
          'Ásia Supermercado — Asian shops for soy sauce, rice paper, etc.',
          '“Russian” shops: Magnit (Lisbon), “Matryoshka” and others — products from the CIS'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ASAE — Food Safety Authority', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — MB WAY payment systems', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGADR — food policy', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
