export default {
  editorialVoice: 'hackportugal',
  id: 'lidl-continente-deals',
  categoryId: 'daily_life',
  title: 'Lidl Outlet, Continente card, price comparison — saving money in supermarkets',
  tldr: 'In Portugal, supermarket discounts are concentrated in loyalty programmes (Continente, Pingo Doce, Lidl Plus) and weekly leaflets. The Lidl Plus app and lidl.pt are the main Lidl Portugal channels; Lidl Outlet as a permanent separate online shop is not available for all categories — check the website. Cartão Continente gives descontos em Cartão (balance) + personal coupons. Price comparison between chains: a 10-25% difference on a basic basket, up to 40% on alcohol and household chemicals.',
  tags: ['supermarkets', 'discounts', 'lidl', 'continente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lidl-outlet',
      title: 'Lidl Outlet — online shop',
      content: [
        { kind: 'paragraph', text: 'For Lidl Portugal, the main public channel is lidl.pt and the Lidl Plus app. The online sales section for non-food goods (appliances, clothing, equipment, travel) with cyclical leftover stock is called loja online; a permanent separate “outlet” website in the form found in some other countries does not always exist — check the current structure of lidl.pt.' },
        { kind: 'checklist', items: [
          'Categories: household appliances, sport, travel, DIY goods, garden, fashion',
          'Delivery nationwide, €3-5 per order',
          'Click and collect at a Lidl store — free',
          'Returns — 30 days without giving a reason (under EU Directive 2011/83)',
          'Payment: card, MB WAY, PayPal, bank transfer',
          'Seasonal windows: open 2-3 times a year for 2-3 weeks each',
          'Telegram bots / RSS track opening; you can subscribe in the Lidl Plus app'
        ]},
        { kind: 'warning', text: 'Lidl Outlet is NOT groceries. For groceries — regular Lidl with the Lidl Plus app.' }
      ]
    },
    {
      id: 'cards',
      title: 'Loyalty cards — all chains',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '🟥 Cartão Continente (Sonae)', content: [
            { kind: 'checklist', items: [
              'Registration: any Continente till / Continente Online / app',
              'NIF + name + address, free',
              'The main mechanism is saldo/descontos em Cartão on specific products/categories, plus personal coupons; there is no universal guaranteed 1% basic cashback',
              'Up to 5-50% on marked products (promotion + Cartão)',
              '“Poupa Mais” — personalised coupons in the app',
              'Fuel at Galp — with a discount when paying with Cartão Continente (conditions change — check the current ones)',
              'The accumulated saldo can also be spent at Worten, Zippy, MO, Sport Zone, Wells (all in the Sonae group)'
            ]}
          ]},
          { id: 'c2', title: '🟩 Pingo Doce — Poupa Mais', content: [
            { kind: 'checklist', items: [
              'Free card, registered online at pingodoce.pt',
              'Personalised discounts (via the app)',
              '“Descontos directos” — on the receipt, without accumulation',
              'Can be combined with the week’s 5 “super-promoções”',
              'Fuel: Pingo Doce/Poupa Mais has historically partnered with BP — check the current conditions'
            ]}
          ]},
          { id: 'c3', title: '🟨 Lidl Plus', content: [
            { kind: 'checklist', items: [
              'Lidl Plus app (digital card only, no plastic card)',
              'Coupons are updated weekly',
              'Reaching “Etapas” on large purchases gives bonuses (€3-10)',
              'Daily scratchcard — sometimes you win €5-50',
              'Lidl leaflet — links in the app + discounts of up to 50% in promotions'
            ]}
          ]},
          { id: 'c4', title: '🟦 Auchan Cartão', content: [
            { kind: 'paragraph', text: 'Less widespread, but good in regions where Auchan is strong (Alverca, Almada, Maia). 1% accumulation + coupons via the MyAuchan app.' }
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
        { kind: 'paragraph', text: 'A leaflet is the week’s discount magazine. Old-style versions are put through home letterboxes, new ones are in the chains’ apps. The aggregator site folhetos.pt collects them all.' },
        { kind: 'checklist', items: [
          '📱 folhetos.pt app — push notifications for products on your wish list',
          '🗓️ Cycle: Wednesday-Tuesday (most) / Monday-Sunday (Lidl)',
          '📉 Continente “Super Poupança” leaflet — Wednesday with discounts up to 50%',
          '💎 Pingo Doce “Descobertas” leaflet — Friday-Sunday, 30-40% on selected products',
          '🟨 Lidl “Super-fins-de-semana” — Friday-Sunday',
          '🍾 Alcohol and delicacies often appear in leaflets twice a year — New Year, Easter'
        ]}
      ]
    },
    {
      id: 'compare',
      title: 'Price comparison between chains',
      content: [
        { kind: 'paragraph', text: 'DECO PROteste (consumer rights organisation) publishes an annual price study of a basket of 164 basic products.' },
        { kind: 'checklist', items: [
          '🏆 According to DECO PROteste studies, the cheapest chains are usually Mercadona, Aldi, Lidl. Continente Bom Dia is a convenience/urban shop format and is usually more expensive than large Continente stores. Rankings change every year; check the latest DECO study',
          '🟥 Continente: more expensive than average, but a wide range and the best promotion weeks',
          '🟩 Pingo Doce: average prices, good quality premium-segment goods',
          '🟨 Lidl: cheap for basic goods + own brands (Milbona, Freeway) are often better than competitors’ own labels',
          '🟦 Auchan: average prices, but good non-food goods',
          '🇪🇸 Mercadona: cheap (pt.mercadona.es) — 40+ shops',
          '💰 Difference on a basic basket: up to 20-25% between cheap and expensive',
          '🍻 Alcohol: up to 40% difference — Lidl is the cheapest'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🛒 Buy Lidl/Continente own-brand goods — the quality is high, the price is 30% lower than brands',
          '🐟 Fish and meat “on promotion” at Continente: marked with a yellow price tag — last day of sale, -30-50%',
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
    { title: 'Lidl Outlet', url: 'https://www.lidl.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Continente — Cartão', url: 'https://www.continente.pt/cartao-continente/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'folhetos.pt — promotions aggregator', url: 'https://www.folhetos.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — supermarket comparison', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
