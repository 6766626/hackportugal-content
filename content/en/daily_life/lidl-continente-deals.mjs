export default {
  editorialVoice: 'hackportugal',
  id: 'lidl-continente-deals',
  categoryId: 'daily_life',
  title: 'Lidl Outlet, Cartão Continente, price comparison — savings in supermarkets',
  tldr: 'In Portugal, supermarket discounts are concentrated in loyalty programmes (Continente, Pingo Doce, Lidl Plus) and weekly leaflets. Lidl Outlet is an online shop for non-food items at prices 30–70% below usual. Cartão Continente gives 1–5% accrued discount + targeted promos. Price comparison between chains: 10–25% difference on the basic basket, up to 40% on alcohol and household cleaning products.',
  tags: ['supermarkets', 'discounts', 'lidl', 'continente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lidl-outlet',
      title: 'Lidl Outlet — online shop',
      content: [
        { kind: 'paragraph', text: 'lidl.pt/outlet — a separate online shop for non-food goods: electronics, clothing, equipment, travel gear. Prices are often 30–70% lower than in the regular retail stores. Reason — discounted remnants from past seasons, clearance of stock.' },
        { kind: 'checklist', items: [
          'Categories: home appliances, sport, travel, DIY, garden, fashion',
          'Delivery nationwide, €3–5 per order',
          'Click & collect at a Lidl store — free',
          'Returns — 30 days no reason needed (per EU Directive 2011/83)',
          'Payment: card, MB WAY, PayPal, bank transfer',
          'Seasonal windows: open 2–3 times a year for 2–3 weeks each',
          'Telegram bots / RSS track openings; you can subscribe in the Lidl Plus app'
        ]},
        { kind: 'warning', text: 'Lidl Outlet — NOT groceries. For groceries — the regular Lidl with the Lidl Plus app.' }
      ]
    },
    {
      id: 'cards',
      title: 'Loyalty cards — all chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟥 Cartão Continente (Sonae)', content: [
            { kind: 'checklist', items: [
              'Sign-up: any Continente checkout / Continente Online / app',
              'NIF + name + address, free',
              'Accrual: basic 1% of purchase (500 points = €5)',
              'Up to 5% on marked items (promo + Cartão)',
              'Poupa Mais — personalised coupons in the app',
              'Fuel at Galp / Repsol — €0.06/l discount when paying with Cartão Continente',
              'Universal cashback also works at Worten, Zippy, MO, Sport Zone, Wells (all in the Sonae group)'
            ]}
          ]},
          { id: 'c2', title: '🟩 Pingo Doce — Poupa Mais', content: [
            { kind: 'checklist', items: [
              'Free card, apply online at pingodoce.pt',
              'Discounts are personalised (via the app)',
              'Descontos directos — on the receipt, no accrual',
              'Combines with the week\'s 5 super-promoções',
              'Fuel at Repsol: discounts combine'
            ]}
          ]},
          { id: 'c3', title: '🟨 Lidl Plus', content: [
            { kind: 'checklist', items: [
              'Lidl Plus app (digital card only, no plastic)',
              'Coupons refresh weekly',
              'Reaching Etapas for bigger shops gives bonuses (€3–10)',
              'Daily scratch card — sometimes you win €5–50',
              'Lidl leaflet — links in the app + up to 50% promo discounts'
            ]}
          ]},
          { id: 'c4', title: '🟦 Auchan Cartão', content: [
            { kind: 'paragraph', text: 'Less common, but good in regions where Auchan is strong (Alverca, Almada, Maia). 1% accrual + coupons via the MyAuchan app.' }
          ]},
          { id: 'c5', title: '🟧 Intermarché', content: [
            { kind: 'paragraph', text: 'Cartão Intermarché + Intermarché fuel stations: sometimes competitive prices on basic groceries + fuel.' }
          ]}
        ]}
      ]
    },
    {
      id: 'folhetos',
      title: 'Weekly promo leaflets',
      content: [
        { kind: 'paragraph', text: 'A leaflet is the week\'s discount brochure. Old-style ones land in your letterbox at home; new ones live in the chains\' apps. The aggregator site folhetos.pt collects them all.' },
        { kind: 'checklist', items: [
          '📱 folhetos.pt app — push notifications for items on your wish list',
          '🗓️ Cycle: Wednesday–Tuesday (most) / Monday–Sunday (Lidl)',
          '📉 Continente Super Poupança leaflet — Wednesday up to 50% off',
          '💎 Pingo Doce Descobertas leaflet — Friday–Sunday, 30–40% on a curated selection',
          '🟨 Lidl Super-fins-de-semana — Friday–Sunday',
          '🍾 Alcohol and delicacies often feature in leaflets twice a year — New Year, Easter'
        ]}
      ]
    },
    {
      id: 'compare',
      title: 'Price comparison between chains',
      content: [
        { kind: 'paragraph', text: 'DECO PROteste (consumer protection organisation) publishes an annual price study on a basket of 164 basic products.' },
        { kind: 'checklist', items: [
          '🏆 Cheapest (2025 DECO): Mercadona, followed by Aldi, Lidl, Continente Bom Dia',
          '🟥 Continente: above-average prices, but wide range and the best promo weeks',
          '🟩 Pingo Doce: mid-range prices, good quality in the premium segment',
          '🟨 Lidl: cheap on staples + own brands (Milbona, Freeway) often better than competitors\' own labels',
          '🟦 Auchan: mid-range prices, but good non-food items',
          '🇪🇸 Mercadona: cheap (pt.mercadona.es) — 40+ stores',
          '💰 Difference on the basic basket: up to 20–25% between the cheapest and the most expensive',
          '🍻 Alcohol: up to 40% difference — Lidl is the cheapest'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🛒 Buy Lidl/Continente own-brand products — high quality, about 30% cheaper than brands',
          '🐟 Fish and meat “on promo” in Continente: marked with a yellow price tag — last day of sale, −30–50%',
          '🥯 Evening discounts in Pingo Doce/Continente bakeries — after 20:00 bread and pastries −50%',
          '💳 Cartão Continente for fuel at petrol stations — €10/month saving for an average family',
          '📊 Folhetos.pt — set push notifications for milk, meat, olive oil, detergent',
          '🌽 Municipal markets (Ribeira Bolhão Porto, Mercado Arroios Lisbon) — fresh vegetables/fish 20–40% cheaper than in supermarkets'
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
    { title: 'Lidl Outlet', url: 'https://www.lidl.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Continente — Cartão', url: 'https://www.continente.pt/cartao-continente/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'folhetos.pt — deals aggregator', url: 'https://www.folhetos.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — supermarket comparison', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
