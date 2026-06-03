export default {
  editorialVoice: 'hackportugal',
  id: 'supermarkets-compared',
  categoryId: 'daily_life',
  title: 'Supermarkets in Portugal — comparison',
  tldr: 'Main chains: Continente (leader, Sonae), Pingo Doce (quality and promotions, Jerónimo Martins), Lidl (cheap + specialised goods), Auchan (hypermarket; in 2024–2025 acquired DIA Portugal — the Minipreço brand is being rebranded/integrated), Aldi (discounter), Mercadona (Spanish chain, expanded beyond the north, active in Lisbon and the centre of the country), El Corte Inglés (premium, Lisbon/Gaia).\n\nCards/apps are often needed for the best promotions and personalised coupons; without them, some discounts are unavailable, but savings depend on your basket.',
  tags: ['supermarkets', 'continente', 'pingo doce', 'lidl'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'chains',
      title: 'Main chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Continente (Sonae)', content: [
            { kind: 'paragraph', text: 'The largest chain. Hyper (hypermarkets), Modelo (medium-sized), Bom Dia (small). The Continente card is essential! Focused on weekly promotions and cashback of up to 50%.' }
          ]},
          { id: 'c2', title: 'Pingo Doce (Jerónimo Martins)', content: [
            { kind: 'paragraph', text: 'Second by turnover. Known for Friday “-50%” promotions on one category. Fresh fish and meat are top quality. Pingo Doce card with personalised coupons.' }
          ]},
          { id: 'c3', title: 'Lidl', content: [
            { kind: 'paragraph', text: 'German discounter. Cheap staple foods, good own brands (Deluxe = premium). Thursday — “Parkside”/“Esmara” promotions on non-food items. Fresh bakery products.' }
          ]},
          { id: 'c4', title: 'Minipreço (Auchan, formerly DIA)', content: [
            { kind: 'paragraph', text: 'Discounter with many small shops. In 2024–2025 Auchan Retail Portugal acquired DIA Portugal; some locations are being integrated/rebranded as Auchan. The Clube Minipreço programme may change during the transition period — check in store.' }
          ]},
          { id: 'c5', title: 'Auchan', content: [
            { kind: 'paragraph', text: 'French hypermarket. Large selection, including foreign products. Auchan card.' }
          ]},
          { id: 'c6', title: 'Aldi', content: [
            { kind: 'paragraph', text: 'German discounter. Growing chain. Similar to Lidl, but smaller.' }
          ]},
          { id: 'c7', title: 'El Corte Inglés', content: [
            { kind: 'paragraph', text: 'Large El Corte Inglés department stores — Lisboa/Saldanha and Vila Nova de Gaia; grocery formats/delivery depend on the area — check the store locator. Delicatessen section, foreign brands. Expensive, but the selection is unique.' }
          ]},
          { id: 'c8', title: 'Mercadona', content: [
            { kind: 'paragraph', text: 'Spanish chain in Portugal since 2019. Own brands Hacendado. It opened in northern regions and by 2026 had expanded beyond the north — there are shops in the centre and in the Lisbon metropolitan area; check southern/Algarve coverage via the store locator.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cards',
      title: 'Loyalty cards — how to use them',
      content: [
        { kind: 'checklist', items: [
          'Continente: sign up in store or via the app. Check promotions before shopping.',
          'Pingo Doce: the O Meu Pingo Doce app shows personalised coupons and campaigns; large discounts such as -50% happen during promotions, but conditions/days change — check the folheto and app before buying',
          'Lidl Plus: digital card in the app + weekly coupons',
          'Large chains constantly have dozens/hundreds of products on promotion, but the selection changes weekly; compare with the folheto and app',
          'Subscribe to the app/email: the folheto is usually updated once a week, but the start day depends on the chain'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Fresh fish: Pingo Doce and Continente are the best. Seafood on Wednesday/Friday.',
          'Meat: talho — butcher’s shop; often cheaper/fresher than the supermarket. Mercearia — small grocery shop',
          'Wine: Lidl is often good for budget wines and promotional selections; El Corte Inglés for premium/rare bottles',
          'Organic/bio: Celeiro, Go Natural, bio sections in Pingo/Continente',
          'Cheap: Lidl + Minipreço for staple foods',
          'Delivery: Continente Online, Pingo Doce Casa, Mercadão. There is usually a delivery/service fee, but the price, minimum order and free slots depend on address, time and current promotions — check in the app before ordering',
          'If you are a PT tax resident and file IRS, ask for fatura com NIF: supermarkets usually appear in e-Fatura as despesas gerais familiares — 35% of expenses, maximum €250 per taxpayer per year; check/confirm invoices in Portal e-Fatura'
        ]}
      ]
    },
    {
      id: 'cultural-shops',
      title: 'Specialist shops',
      content: [
        { kind: 'checklist', items: [
          'Talho — butcher’s shop (often better than the supermarket)',
          'Peixaria — fishmonger’s',
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
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autoridade Tributária / Portal e-Fatura', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGADR — food policy', url: 'https://www.dgadr.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
