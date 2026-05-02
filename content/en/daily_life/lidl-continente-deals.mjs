export default {
  editorialVoice: 'hackportugal',
  id: 'lidl-continente-deals',
  categoryId: 'daily_life',
  title: 'Lidl Outlet, Continente card, price comparison — saving money in supermarkets',
  tldr: 'In Portugal, supermarket discounts are concentrated in loyalty programmes (Continente, Pingo Doce, Lidl Plus) and weekly leaflets. Lidl Outlet is an online shop for non-food goods at prices 30-70% below normal. Cartão Continente gives a cumulative discount of 1-5% + targeted promotions. Price comparison between chains: a 10-25% difference on a basic basket, up to 40% on alcohol and household chemicals.',
  tags: ['supermarkets', 'discounts', 'lidl', 'continente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lidl-outlet',
      title: 'Lidl Outlet — online shop',
      content: [
        { kind: 'paragraph', text: 'lidl.pt/outlet — a separate online shop for non-food goods: appliances, clothing, equipment, travel and camping goods. Prices are often 30-70% lower than in the retail chain. The reason is discounted stock from previous seasons and clearance of inventory.' },
        { kind: 'checklist', items: [
          'Categories: household appliances, sport, travel and camping, DIY goods, garden, fashion',
          'Delivery nationwide, €3-5 per order',
          'Click and collect at a Lidl shop — free',
          'Returns — 30 days without giving a reason (under EU Directive 2011/83)',
          'Payment: card, MB WAY, PayPal, bank transfer',
          'Seasonal windows: open 2-3 times a year for 2-3 weeks each',
          'Telegram bots / RSS track openings; you can subscribe in the Lidl Plus app'
        ]},
        { kind: 'warning', text: 'Lidl Outlet is NOT food. For groceries — use the regular Lidl with the Lidl Plus app.' }
      ]
    },
    {
      id: 'cards',
      title: 'Loyalty cards — all chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟥 Cartão Continente (Sonae)', content: [
            { kind: 'checklist', items: [
              'Application: any Continente checkout / Continente Online / app',
              'NIF + name + address, free',
              'Earning: base rate of 1% of the purchase (€5 = 500 points)',
              'Up to 5% on marked goods (promotion + Cartão)',
              '“Poupa Mais” — personalised coupons in the app',
              'Fuel at Galp / Repsol — with a discount of €0.06/l when paying with Cartão Continente',
              'Universal cashback also works in Worten, Zippy, MO, Sport Zone, Wells (all in the Sonae group)'
            ]}
          ]},
          { id: 'c2', title: '🟩 Pingo Doce — Poupa Mais', content: [
            { kind: 'checklist', items: [
              'Free card, applied for online at pingodoce.pt',
              'Personalised discounts (via the app)',
              '“Descontos directos” — on the receipt, without accumulation',
              'Combines with the week’s 5 “super-promoções”',
              'Petrol at Repsol: discounts can be combined'
            ]}
          ]},
          { id: 'c3', title: '🟨 Lidl Plus', content: [
            { kind: 'checklist', items: [
              'Lidl Plus app (digital card only, no plastic card)',
              'Coupons are updated weekly',
              'Reaching “Etapas” on larger purchases gives bonuses (€3-10)',
              'Daily scratch card — sometimes wins €5-50',
              'Lidl leaflet — links in the app + discounts up to 50% in promotions'
            ]}
          ]},
          { id: 'c4', title: '🟦 Auchan Cartão', content: [
            { kind: 'paragraph', text: 'Less widespread, but good in regions where Auchan is strong (Alverca, Almada, Maia). Earning 1% + coupons via the MyAuchan app.' }
          ]},
          { id: 'c5', title: '🟧 Intermarché', content: [
            { kind: 'paragraph', text: 'Cartão Intermarché + Intermarché petrol stations: sometimes competitive prices on basic groceries + fuel.' }
          ]}
        ]}
      ]
    },
    {
      id: 'folhetos',
      title: 'Leaflets with weekly promotions',
      content: [
        { kind: 'paragraph', text: 'A leaflet is the week’s discount magazine. Older versions are delivered to home letterboxes, newer ones are in the chains’ apps. The aggregator site folhetos.pt collects them all.' },
        { kind: 'checklist', items: [
          '📱 folhetos.pt app — push notifications for items on your wishlist',
          '🗓️ Cycle: Wednesday-Tuesday (most) / Monday-Sunday (Lidl)',
          '📉 Continente “Super Poupança” leaflet — Wednesday, discounts up to 50%',
          '💎 Pingo Doce “Descobertas” leaflet — Friday-Sunday, 30-40% on a selection of goods',
          '🟨 Lidl “Super-fins-de-semana” — Friday-Sunday',
          '🍾 Alcohol and delicacies often appear in leaflets twice a year — New Year, Easter'
        ]}
      ]
    },
    {
      id: 'compare',
      title: 'Price comparison between chains',
      content: [
        { kind: 'paragraph', text: 'DECO PROteste (consumer rights organisation) publishes a yearly price study for a basket of 164 basic products.' },
        { kind: 'checklist', items: [
          '🏆 Cheapest (2025 DECO): Mercadona, followed by Aldi, Lidl, Continente Bom Dia',
          '🟥 Continente: more expensive than average, but a wide range and the best promotion weeks',
          '🟩 Pingo Doce: mid-range prices, good quality premium goods',
          '🟨 Lidl: cheap for basic goods + own brands (Milbona, Freeway) are often better than competitors’ own labels',
          '🟦 Auchan: mid-range prices, but good non-food goods',
          '🇪🇸 Mercadona: cheap (pt.mercadona.es) — 40+ shops',
          '💰 Difference on a basic basket: up to 20-25% between cheap and expensive',
          '🍻 Alcohol: up to 40% difference — Lidl is the cheapest overall'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🛒 Buy Lidl/Continente own-brand goods — quality is high, price is 30% lower than brands',
          '🐟 Fish and meat “on promotion” at Continente: yellow price-label marking — last day of sale, -30-50%',
          '🥯 Evening discounts in Pingo Doce/Continente bakeries — after 20:00 on bread and pastries -50%',
          '💳 Continente card for fuel at petrol stations — €10/month discount for an average family',
          '📊 Folhetos.pt — set push notifications for milk, meat, olive oil, detergent',
          '🌽 Municipal markets (Ribeira Bolhão Porto, Mercado Arroios Lisboa) — fresh vegetables/fish 20-40% cheaper than in supermarkets'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Loyalty cards (all)', amountEUR: 0 },
    { label: 'Lidl Outlet delivery', amountEURMin: 3, amountEURMax: 5 },
    { label: 'Savings from Cartão Continente (family)', amountEURMin: 200, amountEURMax: 800, note: '€/year' }
  ],
  sources: [
    { title: 'Lidl Outlet', url: 'https://www.lidl.pt/outlet', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Continente — Cartão', url: 'https://www.continente.pt/cartao-continente/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'folhetos.pt — promotions aggregator', url: 'https://www.folhetos.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — supermarket comparison', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
