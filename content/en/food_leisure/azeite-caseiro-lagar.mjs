export default {
  editorialVoice: 'hackportugal',
  id: 'azeite-caseiro-lagar',
  categoryId: 'food_leisure',
  title: 'Your own olive oil — harvesting olives and pressing at a lagar',
  tldr: 'If you have olive trees on your plot, you can make your own olive oil. The harvesting season (apanha) is late October to December. Pickers (apanhadores) charge €60–100/day; self-harvesting with nets (panos) is free but labour-intensive. Pressing (lagar) is paid either as a fee or as a percentage: ~€30–60/100 kg of olives, or 10–15% of the finished oil. Rule of thumb: 100 kg of good olives yield 12–20 L of oil. For personal consumption, no licences are needed. Selling — DGAV registo + IGP certification (Azeite do Alentejo, Trás-os-Montes, etc.). Storage: dark glass bottle, 16–18°C, up to 18 months.',
  tags: ['olive oil', 'olive tree', 'lagar', 'harvest', 'olive'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-and-how',
      title: 'When and how to harvest olives',
      content: [
        { kind: 'paragraph', text: 'The olive harvest season (apanha da azeitona) is late autumn. Exact timing depends on region and cultivar, but on average:' },
        { kind: 'checklist', items: [
          'Late October to early December: the main season',
          'Algarve and the south — usually earlier (from 15 October)',
          'North (Trás-os-Montes, Alentejo) — later (November–December)',
          'Varieties: galega (classic, small), cobrançosa (all-purpose), cordovil (in Alentejo), verdeal',
          'Ripeness: olives darken from green to purple and black. For oil, “sanguinha” is best — half-purple fruit',
          'Too green: more bitterness, lower oil yield',
          'Overripe (wrinkled): little oil, higher acidity'
        ] }
      ]
    },
    {
      id: 'collecting',
      title: 'Ways to harvest',
      content: [
        { kind: 'checklist', items: [
          'NETS + POLES (vareio): spread nets (panos) under the tree, strike the branches with a pole or a vibrating fork. The most common family method. Cheap, labour-intensive. One person — ~50–100 kg/day',
          'HAND PICKING (apanha à mão): careful for table olives (azeitonas de mesa). Slow, but avoids bruising. ~20–40 kg/day',
          'TRUNK SHAKERS (vibradores): mechanical machines that clamp to the trunk. Professional, for large holdings. From €200/day to hire',
          'ELECTRIC RAKES (vareadores eléctricos): battery-powered, make harvesting easier. From €80/day to hire, ~€300–500 to buy',
          'PICKERS (apanhadores): local people come to work your trees. €60–100/day per person + food. Find them via the Junta de Freguesia or a local farmer'
        ] },
        { kind: 'paragraph', text: 'Golden rule: olives should reach the lagar within 24–48 hours of harvesting. Longer than that — oxidation, higher acidity, spoiled oil.' },
        { kind: 'warning', text: 'Do NOT collect olives from the ground that have been lying there for more than 24 hours. They are already fermenting and will produce “lampante” oil — high acidity, technical grade, not for food.' }
      ]
    },
    {
      id: 'lagar',
      title: 'Lagar — where to press into oil',
      content: [
        { kind: 'paragraph', text: 'A lagar is an olive mill. They exist in every olive-growing region. Small private lots (50–500 kg) are accepted without issue.' },
        { kind: 'checklist', items: [
          'Find a lagar: via a local farmer, the Junta de Freguesia, or the COTHN website (Confederação dos Olivicultores)',
          'They accept whole lots from ~50 kg (minimum to start the line)',
          'If you have less — team up with neighbours (lagar partilhado)',
          'Modern lagares: continuous extraction (centrifuge). Standard for small lots',
          'Traditional (granito + straw discs): almost gone, but there are tourist ones in Trás-os-Montes — tastier oil but slower process',
          'Time at the lagar: ~2–4 hours from intake to finished oil'
        ] },
        { kind: 'paragraph', text: 'Payment:' },
        { kind: 'checklist', items: [
          'Flat fee: €30–60 per 100 kg of olives',
          'Percentage: 10–15% of the finished oil stays with the lagar (they sell it)',
          'You can often choose — what is better depends on your volume and the current oil price',
          'Cold extraction (extra virgin): no heating. Best quality. Costs a little more'
        ] }
      ]
    },
    {
      id: 'yield',
      title: 'How much oil you will get',
      content: [
        { kind: 'checklist', items: [
          'Good olives early in the season: 18–22 L of oil per 100 kg',
          'Average: 14–18 L per 100 kg',
          'Late/overripe: 10–14 L',
          'Poor/damaged: 8–12 L + high acidity',
          'Portugal’s seasonal average — 15–17 L per 100 kg'
        ] },
        { kind: 'paragraph', text: 'One mature sobreiro olive tree produces roughly 10–30 kg of fruit per year. So 5–10 trees = 100–300 kg = 15–50 L of oil. That’s a year’s supply for a family with some left for gifts.' }
      ]
    },
    {
      id: 'storage',
      title: 'Storing the oil',
      content: [
        { kind: 'paragraph', text: 'The main enemies of oil are light, temperature and oxygen. Rules:' },
        { kind: 'checklist', items: [
          'Containers: dark glass (green or brown), clay jars, stainless steel. NEVER plastic and NEVER clear glass in the light',
          'Temperature: 14–18°C is ideal. The fridge is too cold (the oil goes cloudy — not critical, but not for storage)',
          'Shelf life: homemade without preservatives — 12–18 months max',
          'Sign of spoilage: rancid — smells of old oil, cardboard',
          'Bottle into 0.5–1 L: an opened bottle should be consumed within 2–3 months',
          'Label the pressing date — it is surprisingly easy to forget'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Selling — separate rules',
      content: [
        { kind: 'paragraph', text: 'If you want to sell your oil, you need licences and certifications.' },
        { kind: 'checklist', items: [
          'Register as an olive grower with DGAV (Direção-Geral de Alimentação e Veterinária)',
          'Open an activity (atividade) with Finanças: CIRS code 1311 — agricultura',
          'IVA: up to €14,500/year turnover you can operate without IVA (from 2025)',
          'Labels per EU regulations: producer, NIF, type (extra virgin / virgin / olivais), weight, best-before date, country',
          'Laboratory tests: acidity (% oleic acid), peroxides, K232/K270 — mandatory quality parameters',
          'Laboratories: ASAE-accredited. ~€50–150 per analysis',
          'IGP/DOP certifications (premium): Azeite do Alentejo Interior, Azeite de Trás-os-Montes, Azeite do Norte Alentejano, etc. — separate registration with IPV (Instituto Português da Qualidade) or CertiQuê',
          'Selling at local markets: licence from the Câmara Municipal, ~€30–100/day',
          'Online sales: IVA if turnover exceeds the threshold'
        ] }
      ]
    },
    {
      id: 'tasting',
      title: 'Tasting and assessing quality',
      content: [
        { kind: 'paragraph', text: 'You will want to taste your oil mindfully. Professional tasting per EU standards:' },
        { kind: 'checklist', items: [
          'Use a blue or opaque glass (so as not to be distracted by colour)',
          'Pour ~15 ml, warm in your hands to 28°C',
          'Aroma: fruity — grassy — bitter (a good indicator of phenols)',
          'Sip: positive attributes — frutado (fruity), amargo (bitter), picante (pungent)',
          'Defects: rançoso (rancid), avinhado (winey), mofo (mould), tulha (compost)',
          'Professional tasting: courses by COTHN or Universidade de Évora, for the serious enthusiast',
          'Good oil: it tingles in the throat — that’s polyphenols, antioxidants, very good for you'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Nets (panos) for harvesting, reusable', amountEURMin: 30, amountEURMax: 80, note: 'One-off purchase' },
    { label: 'Pole with vibrating comb', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Electric rake (vareador)', amountEURMin: 300, amountEURMax: 500, note: 'For regular use' },
    { label: 'Picker (apanhador) per day', amountEURMin: 60, amountEURMax: 100, note: 'Plus food' },
    { label: 'Lagar flat fee', amountEURMin: 30, amountEURMax: 60, note: 'Per 100 kg of olives' },
    { label: 'Lagar percentage', amountEUR: 0, note: '10–15% of the finished oil stays with the lagar' },
    { label: 'Acidity analysis', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Dark glass bottles 0.5 L', amountEURMin: 1, amountEURMax: 3, note: 'Each' }
  ],
  sources: [
    { title: 'DGAV — Directorate-General for Food and Veterinary', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'COTHN — National Operational and Technological Horticulture Centre', url: 'https://www.cothn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Azeite IGP — DOP Alentejo, Trás-os-Montes', url: 'https://tradicional.dgadr.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for olive growing', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
