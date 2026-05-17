export default {
  editorialVoice: 'hackportugal',
  id: 'azeite-caseiro-lagar',
  categoryId: 'food_leisure',
  title: 'Your own olive oil — harvesting olives and pressing at a lagar',
  tldr: 'If you have olive trees on your plot, you can make your own olive oil. Olive-harvesting season (apanha) is late October to December. Pickers (apanhadores) charge €60-100/day; harvesting yourself with nets (panos) is free but labour-intensive. Pressing (lagar) is paid either as a percentage or in cash: ~€30-60/100 kg of olives, or 10-15% of the finished oil. Rule of thumb: 100 kg of good olives gives 12-20 l of oil. No licences are needed for personal consumption. Selling requires DGAV registo + IGP certification (Azeite do Alentejo, Trás-os-Montes, etc.). Storage: dark glass bottle, 16-18°C, up to 18 months.',
  tags: ['olive oil', 'olive tree', 'lagar', 'harvest', 'olive'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-and-how',
      title: 'When and how to harvest olives',
      content: [
        { kind: 'paragraph', text: 'Olive-harvesting season (apanha da azeitona) is late autumn. The exact timing depends on the region and tree variety, but on average:' },
        { kind: 'checklist', items: [
          'Late October — early December: main season',
          'Algarve and the south — usually earlier (from 15 October)',
          'North (Trás-os-Montes, Alentejo) — later (November-December)',
          'Varieties: galega (classic, small), cobrançosa (versatile), cordovil (in Alentejo), verdeal',
          'Ripeness: olives darken from green to purple and black. For oil, “sanguinha” is better — half-purple',
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
          'NETS + POLES (vareio): you spread nets (panos) under the tree and hit the branches with a stick or vibrating fork. The most common method for a family. Cheap, labour-intensive. One person — ~50-100 kg/day',
          'HAND PICKING (apanha à mão): gentle for table olives (azeitonas de mesa). Slow, but without bruising. ~20-40 kg/day',
          'VIBRATORS (vibradores): mechanical machines attached to the trunk. Professional, for large farms. From €200 hire/day',
          'ELECTRIC RAKES (vareadores eléctricos): battery-powered, make harvesting easier. From €80/day hire, ~€300-500 to buy',
          'PICKERS (apanhadores): local lads come to look at your trees. €60-100/day per person + food. Look via Junta de Freguesia or a local farmer'
        ] },
        { kind: 'paragraph', text: 'The main rule: olives must reach the lagar within 24-48 hours after harvesting. Longer than that means oxidation, higher acidity and spoiled oil.' },
        { kind: 'warning', text: 'DO NOT collect olives from the ground if they have been lying there for more than a day. They are already fermenting and will produce “lampante” oil — high acidity, technical-grade, not for food.' }
      ]
    },
    {
      id: 'lagar',
      title: 'Lagar — where to press into oil',
      content: [
        { kind: 'paragraph', text: 'A lagar is an oil press. They exist in every olive-growing region. Small private volumes (50-500 kg) are accepted without problems.' },
        { kind: 'checklist', items: [
          'Find a lagar: through a local farmer, at Junta de Freguesia, or on the COTHN website (Confederação dos Olivicultores)',
          'They accept whole batches from ~50 kg (minimum to start the line)',
          'If you have less, team up with neighbours (lagar partilhado)',
          'Modern lagares: continuous extraction (centrifuge). Standard for small batches',
          'Traditional ones (granite + straw discs): almost disappeared, but there are tourist ones in Trás-os-Montes — the oil is tastier but the process takes longer',
          'Time at the lagar: ~2-4 hours from intake to finished oil'
        ] },
        { kind: 'paragraph', text: 'Payment:' },
        { kind: 'checklist', items: [
          'In cash: €30-60 per 100 kg of olives',
          'As a percentage: 10-15% of the finished oil stays with the lagar (they sell it)',
          'Often you can choose — what is more profitable depends on the volume and current oil price',
          'Cold pressing (extra virgem): without heating. Best quality. Costs slightly more'
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
        { kind: 'paragraph', text: 'The main enemies of oil are light, temperature and oxygen. Rules:' },
        { kind: 'checklist', items: [
          'Container: dark glass (green or brown), clay jars, stainless steel. NEVER plastic and NEVER clear glass in the light',
          'Temperature: 14-18°C is ideal. The fridge is too cold (the oil becomes cloudy; not critical, but not for storage)',
          'Shelf life: homemade, without conservantes — 12-18 months maximum',
          'Sign it has gone bad: rancid — smells of old oil, cardboard',
          'Bottle into 0.5-1 l bottles: an opened bottle should be consumed within 2-3 months',
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
          'Opening atividade with Finanças: CIRS code 1311 — agricultura',
          'IVA: up to €14,500/year turnover you can operate without VAT (from 2025)',
          'Labels under EU regulations: producer, NIF, type (extra virgem / virgem / olivais), weight, best-before date, country',
          'Laboratory analyses: acidity (% oleic acid), peroxídeos, K232/K270 — mandatory quality parameters',
          'Laboratories: ASAE-accredited. ~€50-150 per analysis',
          'IGP/DOP certifications (premium): Azeite do Alentejo Interior, Azeite de Trás-os-Montes, Azeite do Norte Alentejano, etc. — separate registration with IPV (Instituto Português da Qualidade) or CertiQuê',
          'Selling at local markets: licence from Câmara Municipal, ~€30-100/day',
          'Online sales: VAT if turnover exceeds the limit'
        ] }
      ]
    },
    {
      id: 'tasting',
      title: 'Tasting and quality assessment',
      content: [
        { kind: 'paragraph', text: 'You will want to taste your own oil properly. Professional tasting under EU standards:' },
        { kind: 'checklist', items: [
          'Blue or opaque glass (so you are not distracted by the colour)',
          'Pour ~15 ml, warm in your hands to 28°C',
          'Aroma: fruity — grassy — bitter (a good indicator of phenols)',
          'Sip: positive attributes — frutado (fruity), amargo (bitter), picante (peppery)',
          'Defects: rançoso (rancid), avinhado (winey), mofo (mould), tulha (compost)',
          'Professional tastings: COTHN or Universidade de Évora courses, for the serious connoisseur',
          'Good oil: tickles the throat — these are polyphenols, antioxidants, very healthy'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Nets (panos) for harvesting, reusable', amountEURMin: 30, amountEURMax: 80, note: 'One-off purchase' },
    { label: 'Pole with vibrating comb', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Electric rake (vareador)', amountEURMin: 300, amountEURMax: 500, note: 'For regular use' },
    { label: 'Picker (apanhador) for a day', amountEURMin: 60, amountEURMax: 100, note: 'Plus food' },
    { label: 'Lagar paid in cash', amountEURMin: 30, amountEURMax: 60, note: 'Per 100 kg of olives' },
    { label: 'Lagar paid as a percentage', amountEUR: 0, note: '10-15% of the finished oil stays with the lagar' },
    { label: 'Acidity analysis', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Dark glass bottles 0.5 l', amountEURMin: 1, amountEURMax: 3, note: 'Each' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'COTHN — Centro Operativo e Tecnológico Hortofrutícola Nacional', url: 'https://www.cothn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Azeite IGP — DOP Alentejo, Trás-os-Montes', url: 'https://tradicional.dgadr.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for olive growing', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
