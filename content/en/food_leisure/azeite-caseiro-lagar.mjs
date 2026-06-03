export default {
  editorialVoice: 'hackportugal',
  id: 'azeite-caseiro-lagar',
  categoryId: 'food_leisure',
  title: 'Your own olive oil — harvesting olives and pressing them at a lagar',
  tldr: 'If you have olive trees on your plot, you can make your own olive oil.\n\nThe olive-harvesting season (apanha) runs from late October to December. Pickers (apanhadores) charge €60-100/day; self-harvesting with nets (panos) is free but labour-intensive. Pressing (lagar) is done for a fee or for a percentage: around €30-60/100 kg of olives, or 10-15% of the finished oil. Rule of thumb: 100 kg of good olives gives 12-20 l of oil. For personal consumption, no licences are needed. Selling requires DGAV registo + IGP certification (Azeite do Alentejo, Trás-os-Montes, etc.).\n\nStorage: dark glass bottle, 16-18°C, up to 18 months.',
  tags: ['olive oil', 'olive tree', 'lagar', 'harvest', 'olive'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-and-how',
      title: 'When and how to harvest olives',
      content: [
        { kind: 'paragraph', text: 'The olive-harvesting season (apanha da azeitona) is late autumn. Exact dates depend on the region and tree variety, but on average:' },
        { kind: 'checklist', items: [
          'Late October to early December: main season',
          'Algarve and the south — usually earlier (from 15 October)',
          'North (Trás-os-Montes, Alentejo) — later (November-December)',
          'Varieties: galega (classic, small), cobrançosa (all-purpose), cordovil (in Alentejo), verdeal',
          'Ripeness: olives darken from green to purple and black. For oil, “sanguinha” is best — half purple',
          'Too green: more bitterness, lower oil yield',
          'Overripe (wrinkled): little oil, higher acidity'
        ] }
      ]
    },
    {
      id: 'collecting',
      title: 'Harvesting methods',
      content: [
        { kind: 'checklist', items: [
          'NETS + POLES (vareio): you spread nets (panos) under the tree and hit the branches with a stick or vibrating comb. The most common family method. Cheap, labour-intensive. One person — around 50-100 kg/day',
          'HAND PICKING (apanha à mão): careful picking for table olives (azeitonas de mesa). Slow, but avoids bruising. Around 20-40 kg/day',
          'SHAKERS (vibradores): mechanical machines attached to the trunk. Professional, for larger farms. From €200/day to rent',
          'ELECTRIC COMBS (vareadores eléctricos): battery-powered, make harvesting easier. From €80/day to rent, around €300-500 to buy',
          'PICKERS (apanhadores): local lads come and look at your trees. €60-100/day per person + food. Look through Junta de Freguesia or a local farmer'
        ] },
        { kind: 'paragraph', text: 'The main rule: olives must reach the lagar within 24-48 hours after harvesting. Any longer means oxidation, higher acidity, and spoiled oil.' },
        { kind: 'warning', text: 'DO NOT collect olives from the ground if they have been lying there for more than a day. They are already fermenting and will produce “lampante” oil — high acidity, technical grade, not for food.' }
      ]
    },
    {
      id: 'lagar',
      title: 'Lagar — where to press olives into oil',
      content: [
        { kind: 'paragraph', text: 'A lagar is an olive-oil press. They exist in every olive-growing region. Small private volumes (50-500 kg) are accepted without problems.' },
        { kind: 'checklist', items: [
          'Find a lagar: through a local farmer, at Junta de Freguesia, or on the COTHN website (Confederação dos Olivicultores)',
          'They accept whole batches from around 50 kg (the minimum to start the line)',
          'If you have less, team up with neighbours (lagar partilhado)',
          'Modern lagares: continuous extraction (centrifuge). The standard for small batches',
          'Traditional ones (granite + straw discs): almost disappeared, but tourist ones exist in Trás-os-Montes — the oil tastes better but the process takes longer',
          'Time in the lagar: around 2-4 hours from intake to finished oil'
        ] },
        { kind: 'paragraph', text: 'Payment:' },
        { kind: 'checklist', items: [
          'For money: €30-60 per 100 kg of olives',
          'For a percentage: 10-15% of the finished oil stays with the lagar (they sell it)',
          'Often you can choose — which is better depends on volume and the current oil price',
          'Cold press (extra virgem): no heating. Best quality. Costs slightly more'
        ] }
      ]
    },
    {
      id: 'yield',
      title: 'How much oil you will get',
      content: [
        { kind: 'checklist', items: [
          'Good olives at the start of the season: 18-22 l of oil per 100 kg',
          'Average: 14-18 l per 100 kg',
          'Late/overripe: 10-14 l',
          'Poor/damaged: 8-12 l + high acidity',
          'Portugal’s seasonal average — 15-17 l per 100 kg'
        ] },
        { kind: 'paragraph', text: 'One mature olive tree gives roughly 10-30 kg of fruit per year. So 5-10 trees = 100-300 kg = 15-50 l of oil. That is a year’s supply for a family, with some left for gifts.' }
      ]
    },
    {
      id: 'storage',
      title: 'Storing the oil',
      content: [
        { kind: 'paragraph', text: 'Oil’s main enemies are light, temperature and oxygen. The rules:' },
        { kind: 'checklist', items: [
          'Containers: dark glass (green or brown), clay jars, stainless steel. NEVER plastic and NEVER clear glass in the light',
          'Temperature: 14-18°C is ideal. A fridge is too cold (the oil becomes cloudy; not critical, but not suitable for storage)',
          'Shelf life: homemade, without conservantes — 12-18 months maximum',
          'Sign it has gone off: rancid — smells like old oil, cardboard',
          'Bottle into 0.5-1 l bottles: an opened bottle should be used within 2-3 months',
          'Mark the pressing date — it is forgotten surprisingly quickly'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Selling — separate rules',
      content: [
        { kind: 'paragraph', text: 'If you want to sell your oil, you need licences and certifications.' },
        { kind: 'checklist', items: [
          'Registration as an olivicultor with DGAV (Direção-Geral de Alimentação e Veterinária)',
          'Opening an atividade with Finanças: CIRS code 1311 — agricultura',
          'IVA: up to €15,000/year turnover you can operate without VAT (from 2025)',
          'Labels according to EU regulations: producer, NIF, type (extra virgem / virgem / olivais), weight, expiry date, country',
          'Laboratory analyses: acidity (% oleic acid), peroxídeos, K232/K270 — mandatory quality parameters',
          'Laboratories: ASAE-accredited. Around €50-150 per analysis',
          'IGP/DOP certifications (premium): Azeite do Alentejo Interior, Azeite de Trás-os-Montes, Azeite do Norte Alentejano, etc. — separate registration with IPQ (Instituto Português da Qualidade) or CertiQuê',
          'Selling at local markets: licence from Câmara Municipal, around €30-100/day',
          'Online sales: VAT if turnover exceeds the limit'
        ] }
      ]
    },
    {
      id: 'tasting',
      title: 'Tasting and assessing quality',
      content: [
        { kind: 'paragraph', text: 'You will want to taste your own oil properly. Professional tasting according to EU standards:' },
        { kind: 'checklist', items: [
          'Use a blue or opaque glass (so the colour does not distract you)',
          'Pour around 15 ml, warm it in your hands to 28°C',
          'Aroma: fruity — grassy — bitter (a good indicator of phenols)',
          'Sip: positive attributes — frutado (fruity), amargo (bitter), picante (peppery)',
          'Defects: rançoso (rancid), avinhado (winey), mofo (mould), tulha (compost)',
          'Pro tastings: COTHN or Universidade de Évora courses, for serious connoisseurs',
          'Good oil: it prickles your throat — that is polyphenols, antioxidants, very healthy'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Nets (panos) for harvesting, reusable', amountEURMin: 30, amountEURMax: 80, note: 'Buy once and keep' },
    { label: 'Pole with vibrating comb', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Electric comb (vareador)', amountEURMin: 300, amountEURMax: 500, note: 'For regular use' },
    { label: 'Picker (apanhador) for a day', amountEURMin: 60, amountEURMax: 100, note: 'Plus food' },
    { label: 'Lagar paid in money', amountEURMin: 30, amountEURMax: 60, note: 'Per 100 kg of olives' },
    { label: 'Lagar paid by percentage', amountEUR: 0, note: '10-15% of the finished oil stays with the lagar' },
    { label: 'Acidity analysis', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Dark glass bottles 0.5 l', amountEURMin: 1, amountEURMax: 3, note: 'Each' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'COTHN — Centro Operativo e Tecnológico Hortofrutícola Nacional', url: 'https://www.cothn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Azeite IGP — DOP Alentejo, Trás-os-Montes', url: 'https://tradicional.dgadr.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for olive growing', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
