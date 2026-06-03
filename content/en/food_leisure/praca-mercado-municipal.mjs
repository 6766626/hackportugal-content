export default {
  editorialVoice: 'hackportugal',
  id: 'praca-mercado-municipal',
  categoryId: 'food_leisure',
  title: 'Mercado Municipal: the main markets in Lisbon, Porto and Coimbra',
  tldr: 'Mercado Municipal is not a tourist backdrop, but a normal way to buy fish, vegetables, fruit, cheese, bread and flowers. In 2026 the main spots are: Mercado da Ribeira / Time Out Lisboa, Mercado 31 de Janeiro and Forno do Tijolo in Lisbon, Mercado do Bolhão in Porto, Mercado Municipal D. Pedro V in Coimbra. Fresh-produce stalls usually operate in the morning: 07:00–14:00, with Bolhão open longer.\n\nPrices are often lower than a supermercado for seasonal vegetables and fish, but higher for “gourmet” and prepared food.',
  tags: ['market', 'markets', 'lisbon', 'porto', 'coimbra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'how-it-works',
      title: 'How a Mercado Municipal works',
      content: [
        { kind: 'paragraph', text: 'A Mercado Municipal is a municipal market with licensed sellers. Inside there are usually areas for: peixe, carne, fruta e legumes, charcutaria, queijo, pão, flores, cafés. In major cities, some markets have turned into a hybrid: in the morning — fresh produce, in the afternoon and evening — a food hall, restaurants and tourist footfall.' },
        { kind: 'checklist', items: [
          'The best time for fresh fish and seafood is 07:30–10:30, especially Tuesday–Saturday.',
          'On Monday the fish selection is often weaker: there are fewer deliveries after Sunday.',
          'Vegetables and fruit are better value when bought in season and by weight, rather than in ready-made baskets.',
          'Card payment is not available everywhere: keep €10–€30 in cash.',
          'MB WAY is accepted by many sellers, but not all — especially older bancas.',
          'Bags may cost extra; bring your own bag and small containers.',
          'Fish prices are usually shown per 1 kg; the seller can clean the peixe free of charge or for a symbolic fee.',
          'Before buying, you can ask: “Pode limpar, por favor?” — to clean it, “Para grelhar” — for grilling, “Em filetes” — fillets.',
          'By 13:00 some sellers are already closing or selling off leftovers at a discount.'
        ] }
      ]
    },
    {
      id: 'lisbon-markets',
      title: 'Lisbon: Ribeira, 31 de Janeiro, Forno do Tijolo',
      content: [
        { kind: 'substeps', items: [
          { id: 'ribeira', title: 'Mercado da Ribeira / Time Out Market Lisboa', content: [
            { kind: 'paragraph', text: 'Address: Avenida 24 de Julho, Cais do Sodré. These are two markets in one building: the classic Mercado da Ribeira with fresh produce and the tourist-focused Time Out Market with restaurants. For groceries to take home, come in the morning, not in the evening.' },
            { kind: 'checklist', items: [
              'Fresh market: as a guide, Monday–Saturday, morning to early afternoon; check the timetable on cm-lisboa.pt before public holidays.',
              'Time Out Market: usually open daily from late morning until night; prices are restaurant prices, not market prices.',
              'Buy: fish, flowers, fruit, Portuguese cheeses, pão, seasonal berries.',
              'Not the best choice for a cheap everyday basket: the location is touristy, and prepared-food prices are higher than in normal tascas.',
              'Convenient after a ferry trip, the Cascais line train or the Cais do Sodré metro.'
            ] }
          ] },
          { id: '31-janeiro', title: 'Mercado 31 de Janeiro', content: [
            { kind: 'paragraph', text: 'Address: Rua Engenheiro Vieira da Silva, near Saldanha / Picoas. This is one of the most practical markets for living in central Lisbon: fewer tourists, more ordinary shoppers.' },
            { kind: 'checklist', items: [
              'Typical fresh banca hours: Monday–Saturday, around 07:00–14:00.',
              'Its strong points are fish and seafood, vegetables, fruit, meat.',
              'Good for residents of Avenidas Novas, Arroios, Saldanha, Alameda.',
              'Prices for seasonal vegetables are often better than in the nearby Continente/Pingo Doce.',
              'After 12:30 the fish selection may noticeably shrink.'
            ] }
          ] },
          { id: 'forno-tijolo', title: 'Mercado Forno do Tijolo', content: [
            { kind: 'paragraph', text: 'Address: Rua Maria da Fonte, Anjos / Intendente area. The market is useful for those living in Arroios, Graça, Penha de França, Anjos. There are many small cafés and Asian/African shops around it.' },
            { kind: 'checklist', items: [
              'As a guide for fresh stalls: Monday–Saturday, morning and early afternoon.',
              'Buy: vegetables, herbs, fruit, eggs, inexpensive basics.',
              'Good as a “neighbourhood” market, not as a gastro attraction.',
              'Convenient to combine with buying spices, rice, pulses and Asian products in the shops around Martim Moniz / Anjos.',
              'Check the timetable in August and before feriados: individual bancas go on holiday.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'porto-coimbra-olhao',
      title: 'Porto, Coimbra and a bonus: Olhão',
      content: [
        { kind: 'substeps', items: [
          { id: 'bolhao', title: 'Mercado do Bolhão, Porto', content: [
            { kind: 'paragraph', text: 'Mercado do Bolhão is Porto’s main city market, fully renovated and operating again after reconstruction. Address: Rua Formosa / Rua de Sá da Bandeira, near Bolhão and Trindade metro stations.' },
            { kind: 'checklist', items: [
              'Official market hours in 2026: Monday–Friday 08:00–20:00, Saturday 08:00–18:00, Sunday closed.',
              'Buy: fish, meat, vegetables, fruit, flowers, cheese, enchidos, bread, vinho.',
              'After reconstruction the market became cleaner and more convenient, but some prices are higher than in small neighbourhood mercados.',
              'For photos and coffee you can come in the afternoon; for groceries, come in the morning.',
              'There are many tourists nearby, so compare the price per kg and do not buy ready-made “for tourists” sets without checking.'
            ] }
          ] },
          { id: 'coimbra', title: 'Mercado Municipal D. Pedro V, Coimbra', content: [
            { kind: 'paragraph', text: 'Coimbra’s main market is Mercado Municipal D. Pedro V, near Avenida Sá da Bandeira and the historic centre. This is a calmer and more “local-home” format than Ribeira or Bolhão.' },
            { kind: 'checklist', items: [
              'Operating guide: Monday–Saturday, roughly 07:00–19:00; individual fresh bancas close earlier.',
              'The best time is before 11:00, especially for fish, herbs and fruit.',
              'Buy: vegetables, fruit, Serra da Estrela cheese, bread, fish, meat, flowers.',
              'Prices are often closer to a real local basket than in the tourist markets of Lisbon and Porto.',
              'If you live in Coimbra without a car, this is more convenient than a hypermarket on the outskirts.'
            ] }
          ] },
          { id: 'olhao', title: 'Mercado Municipal de Olhão', content: [
            { kind: 'paragraph', text: 'Although Olhão is not Lisbon, Porto or Coimbra, this market is worth knowing for anyone who lives or holidays in the Algarve. Two red-brick pavilions by the waterfront: one for peixe, the other for fruta e legumes.' },
            { kind: 'checklist', items: [
              'As a guide: Monday–Saturday, morning until 13:00–14:00; Sunday is usually closed.',
              'Its strong point is fresh fish, shellfish, octopus, local produce.',
              'Saturday is the liveliest day: more sellers, more people, a higher chance of queues.',
              'Fish prices can be better than in the supermarket, but depend on the catch and the season.',
              'For seafood, take an insulated bag, especially from May to October.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'prices',
      title: 'Prices: market versus supermercado',
      content: [
        { kind: 'paragraph', text: 'The main rule: a mercado does not always win. It is often cheaper and better for seasonal vegetables, herbs, fruit and fish from “today’s catch”. A supermercado wins on promotions, stable pricing, packaged goods, milk, yoghurts, household chemicals and goods with longa validade.' },
        { kind: 'checklist', items: [
          'Seasonal vegetables at the market: often €1.00–€2.50/kg; in a supermercado outside promotions it may be €1.50–€3.50/kg.',
          'Seasonal fruit: around €1.20–€3.50/kg; berries, mangoes, avocados and imports are noticeably more expensive.',
          'Sardines in summer: often cheaper and fresher at the market, but the price depends heavily on the catch and Santos Populares holidays.',
          'Farmed dourada / robalo: in a supermercado the price is more stable; at the market it can be more expensive if the fish is wild.',
          'Bacalhau, queijo, enchidos: compare per kg; attractive stalls in tourist markets do not equal a low price.',
          'Prepared food in Time Out / Bolhão food areas is a restaurant budget: often €10–€18 per dish, not a “cheap market”.',
          'Coffee at the market is usually €0.80–€1.20 for a bica, but in tourist areas it can be higher.',
          'At the end of the day there may be discounts on fruit and vegetables, but do not count on a wide choice.'
        ] },
        { kind: 'warning', text: 'Compare not “a bag for €3”, but the price per kg and the quality. At markets you are sometimes offered a caixa inteira — a box of fruit for less, but it spoils quickly. For a household of 1–2 people, this is not always a saving.' }
      ]
    },
    {
      id: 'seasonality',
      title: 'What to buy in season in 2026',
      content: [
        { kind: 'paragraph', text: 'Portuguese markets are especially good when you buy seasonally. It is cheaper, tastier and less dependent on import logistics.' },
        { kind: 'checklist', items: [
          'January–March: Algarve oranges, mandarins, cabbage, broccoli, batata-doce, chestnuts at the end of the season.',
          'April–May: strawberries, favas, ervilhas, new potatoes, herbs, the first cerejas.',
          'June–August: tomatoes, peppers, watermelons, melons, peaches, nectarines, figs, sardines.',
          'September–October: grapes, figs, Rocha pears, apples, pumpkin, batata-doce.',
          'November–December: chestnuts, citrus fruit, couves, bacalhau for Natal, nuts, dried fruit.',
          'Fish depends not only on the season, but also on the weather: after storms the selection is worse and prices are higher.',
          'If you see a lot of the same product at different sellers — the season is at its peak, so you can bargain gently or choose the best quality.'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical expat tips: how not to overpay',
      content: [
        { kind: 'checklist', items: [
          'The first time, walk around the whole market without buying anything and note the prices per kg at 3–4 bancas.',
          'Buy from sellers where local pensioners and families are queuing, not only tourists.',
          'Ask for a small quantity: “Meio quilo”, “Só duas peças”, “Para duas pessoas”.',
          'If you do not know the fish, say how you will cook it: “para grelhar”, “para forno”, “para sopa”.',
          'Check the receipt or the spoken total before paying, especially when buying several items.',
          'Do not touch fruit with your hands without permission: often the seller chooses it and bags it themselves.',
          'For fish, take a separate bag and go straight home; in summer, do not walk around with it for 2 hours.',
          'Before holidays and in August, check opening hours: feriados, férias and municipal events change schedules.',
          'For a regular basket, combine: market in the morning + supermercado for milk, grains, frozen goods and household items.'
        ] },
        { kind: 'warning', text: 'Official market hours and the hours of a specific banca are different things. A municipal market may be open until 19:00 or 20:00, but the fish seller may already have closed at 13:00. For fresh products, plan for the morning.' }
      ]
    }
  ],
  costs: [
    { label: 'Vegetables and herbs for 2–3 days', amountEURMin: 6, amountEURMax: 15, note: 'Seasonal basket at the market; imports and berries cost more.' },
    { label: 'Fresh fish for 2 people', amountEURMin: 8, amountEURMax: 25, note: 'Depends on the species: sardinha/carapau are cheaper, robalo/dourada/linguado are more expensive.' },
    { label: 'Lunch in the Time Out / Bolhão food hall', amountEURMin: 12, amountEURMax: 25, note: 'Dish + drink; this is a restaurant format, not grocery shopping.' },
    { label: 'Bica coffee at the market', amountEURMin: 0.8, amountEURMax: 1.5, note: 'In tourist areas the price may be higher.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — municipal markets', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Mercado do Bolhão', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Coimbra — Mercado Municipal D. Pedro V', url: 'https://www.cm-coimbra.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Município de Olhão — Mercado Municipal de Olhão', url: 'https://www.cm-olhao.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
