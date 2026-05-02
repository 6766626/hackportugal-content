export default {
  editorialVoice: 'hackportugal',
  id: 'wineries-quintas-visita',
  categoryId: 'food_leisure',
  title: 'Wine tours at quintas: Douro, Alentejo, Setúbal and Bairrada',
  tldr: 'In 2026, a visit to a quinta with a tasting usually costs €30–100 per person: a basic 60–90 minute tour with 2–4 wines is €20–45, while a premium option with port, reserva or lunch is €60–150. The Douro is the most beautiful, but requires transport planning; Alentejo is easier by car; Setúbal works for a short trip from Lisbon; Bairrada is for espumante and leitão. Book online 1–3 weeks ahead, especially for May–October.',
  tags: ['wine', 'quintas', 'douro', 'tastings'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regions',
      title: '1. Choose the region to match your trip style',
      content: [
        { kind: 'paragraph', text: 'A Portuguese wine country trip is not just about “trying wine”. Usually, a quinta gives a tour of the vineyards or cellars, explains DOC/IGP, shows lagares or the barrel room, and ends with a tasting. Almost everywhere requires advance booking: you can turn up by chance, but there may be no free slot.' },
        { kind: 'checklist', items: [
          'Douro Valley — terraces, river, port and dry Douro DOC wines. The best choice for a first “wow” tour.',
          'Alentejo — large herdades, easy roads, summer heat, full-bodied red wines. Convenient by car from Évora/Reguengos de Monsaraz.',
          'Setúbal — Moscatel de Setúbal, long wine history, easy half-day trip from Lisbon.',
          'Bairrada — espumante, Baga, gastronomy with leitão da Bairrada. Combines well with Coimbra/Aveiro.',
          'Vinho Verde — a separate northern region; Aveleda is in Penafiel and does not belong to Bairrada, although it often appears in tourist wine routes.',
          'If you do not drink alcohol, ask in advance about a non-drinker rate: some quintas still charge the full tour price, while others offer a discount.'
        ] },
        { kind: 'warning', text: 'Do not plan 4–5 tastings in one day. A realistic limit is 2 quintas, maximum 3 with a private driver. In the Douro, journeys on winding roads take longer than the map suggests.' }
      ]
    },
    {
      id: 'douro',
      title: '2. Douro: Quinta do Crasto, Quinta do Seixo and logistics',
      content: [
        { kind: 'paragraph', text: 'The Douro Valley is a UNESCO site and Portugal’s most photogenic wine region. The main bases for an overnight stay are Peso da Régua, Pinhão, Lamego and Vila Real. For river and terrace views, the Pinhão area is usually preferred.' },
        { kind: 'checklist', items: [
          'Quinta do Crasto — a strong option for a premium tour: views, old vines, Douro DOC, sometimes limited tastings. Advance booking is essential.',
          'Quinta do Seixo — the well-known Sandeman quinta near Pinhão: port, Douro panorama, a more “tourist-polished” format.',
          'Basic tours in the Douro are usually €30–50; extended tastings with reserva/vintage port are €60–100+.',
          'The Porto São Bento/Campanhã → Peso da Régua or Pinhão train is scenic, but the timetable limits the number of visits.',
          'A hire car gives freedom, but the driver must not drink: the police carry out checks, and fines for álcool ao volante are high.',
          'A private day tour from Porto often costs €90–180 per person in a group or €250–500+ for a car with driver.',
          'Best months: April–June and September–October. August is hot and crowded; during vindima, some quintas limit slots.'
        ] },
        { kind: 'paragraph', text: 'A practical route without rushing: a night in Pinhão, Quinta do Seixo in the morning, lunch by the river, then Quinta do Crasto or another quinta with a view after lunch. If you are travelling from Porto for one day, choose 1–2 visits rather than “the whole Douro in a day”.' }
      ]
    },
    {
      id: 'south',
      title: '3. Alentejo and Setúbal: easier from Lisbon',
      content: [
        { kind: 'paragraph', text: 'Alentejo and Setúbal are convenient for expats from Lisbon: fewer winding roads, easier parking, and more day trip options. But in summer, temperatures in Alentejo can easily exceed 35 °C, so it is better to schedule tastings for the morning.' },
        { kind: 'substeps', items: [
          {
            id: 'alentejo',
            title: 'Alentejo: Herdade do Esporão',
            content: [
              { kind: 'paragraph', text: 'Herdade do Esporão near Reguengos de Monsaraz is one of the clearest options for a first visit to Alentejo: winery, olive oil, restaurant, shop and different tasting levels.' },
              { kind: 'checklist', items: [
                'A basic tasting is usually cheaper than a premium tour with reserva/private selection.',
                'Book lunch in the restaurant separately: weekend places go in advance.',
                'From Lisbon by car — about 2 hours; public transport is inconvenient.',
                'A good combination: Évora + Monsaraz + Esporão, but preferably with an overnight stay.'
              ] }
            ]
          },
          {
            id: 'setubal',
            title: 'Setúbal: José Maria da Fonseca and Moscatel',
            content: [
              { kind: 'paragraph', text: 'José Maria da Fonseca in Azeitão is a classic for Moscatel de Setúbal and one of the most convenient wine visits from Lisbon. The format suits even those who do not want to spend the whole day.' },
              { kind: 'checklist', items: [
                'From Lisbon, you can travel by car, taxi/TVDE, or combine the train to Setúbal with local transport.',
                'After the tasting, it is easy to add queijo de Azeitão, Serra da Arrábida or the Arrábida beaches.',
                'Moscatel is sweet and fortified: the tasting is small in volume, but the alcohol is noticeable.',
                'For weekends, book at least a week ahead; in summer, earlier.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'bairrada-aveleda',
      title: '4. Bairrada, espumante and an important correction about Aveleda',
      content: [
        { kind: 'paragraph', text: 'Bairrada lies between Coimbra and Aveiro. It is a region of Baga, espumante and leitão da Bairrada. If you are travelling from Porto towards Coimbra or Aveiro, Bairrada is easy to fit into a half-day route.' },
        { kind: 'warning', text: 'Aveleda is a well-known quinta in Penafiel in the Vinho Verde region, not Bairrada. If your goal is specifically Bairrada, look at wineries around Anadia, Mealhada, Cantanhede and Curia. If your goal is a beautiful quinta with a garden and light white Vinho Verde wines, Aveleda is an excellent separate option.' },
        { kind: 'checklist', items: [
          'For Bairrada, look for tours with espumante: the region is strong in sparkling wines made by the traditional method.',
          'The “tasting + leitão da Bairrada” combination is the main gastronomic scenario.',
          'From Porto by car to Anadia/Mealhada — about 1–1.5 hours; from Coimbra — 25–40 minutes.',
          'Aveleda from Porto — about 35–50 minutes by car; it is more convenient as a short north trip, not as a Bairrada route.',
          'In smaller quintas, an English tour may not be available every day — check the language when booking.'
        ] }
      ]
    },
    {
      id: 'booking',
      title: '5. How to book and what to check before paying',
      content: [
        { kind: 'paragraph', text: 'The most reliable route is the quinta’s own website or e-mail. Marketplaces are convenient, but their commission is higher and they are sometimes less flexible with changes. For popular places in the Douro, Alentejo and Setúbal in high season, book 1–3 weeks ahead; for vindima and long weekends — 3–6 weeks ahead.' },
        { kind: 'checklist', items: [
          'Date, time and tour language: Portuguese/English/French/Spanish.',
          'What is included: only tasting, cellar visit, vineyard walk, museum, olive oil tasting, lunch.',
          'How many wines: 2, 3, 4 or premium flight; whether there is port/Moscatel/espumante.',
          'Duration: basic 60–90 minutes; with lunch 2–3 hours.',
          'Cancellation policy: free cancellation 24–72 hours ahead or non-refundable.',
          'Accessibility for children: whether you can come with a child, pushchair, teenagers.',
          'Parking and road access: especially important in the Douro, where the approach to a quinta may be narrow.',
          'Whether you can buy wine on site and arrange delivery within Portugal/EU.',
          'Whether card prepayment is required; some quintas accept Multibanco/MB WAY only for Portuguese clients.'
        ] },
        { kind: 'warning', text: 'Portugal’s drink-drive limit: the standard threshold is 0.5 g/l, and for new drivers and professionals it is 0.2 g/l. After a tasting, it is safer to have a non-drinking driver, take a tour with transfer, or stay overnight nearby.' }
      ]
    },
    {
      id: 'budget',
      title: '6. Budget and ready-made scenarios for 2026',
      content: [
        { kind: 'paragraph', text: 'Prices depend heavily on the brand, the level of the wines and whether food is included. In 2026, a normal benchmark for a good-quality visit is €30–100 per person without transport. Anything including lunch, rare bottles or a private guide can easily exceed €100.' },
        { kind: 'checklist', items: [
          'Budget: 1 quinta + simple tasting — €20–35 per person, transport separate.',
          'Comfort: 2 quintas in a day + lunch — €70–140 per person without an overnight stay.',
          'Douro with overnight stay: train/car, 2 tastings, dinner and hotel — often €180–350 per person for 2 days.',
          'From Lisbon without a car: Setúbal/Azeitão with TVDE or a small tour — usually cheaper than the Douro.',
          'Gift format: premium tasting or private tour — €80–150+ per person.',
          'Buying wine on site is not always cheaper than the supermarket, but there can be exclusive bottles and older vintages.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Basic tasting at a quinta', amountEURMin: 20, amountEURMax: 45, note: 'Usually 60–90 minutes, 2–4 wines, without food' },
    { label: 'Extended tasting / premium flight', amountEURMin: 60, amountEURMax: 100, note: 'Reserva, port, Moscatel, espumante or rare ranges' },
    { label: 'Tour with lunch', amountEURMin: 80, amountEURMax: 150, note: 'The price depends on the restaurant and pairing; at well-known herdades it may be higher' },
    { label: 'Group day tour from Porto to the Douro', amountEURMin: 90, amountEURMax: 180, note: 'Usually includes transport, 1–2 visits and sometimes lunch/cruise' },
    { label: 'Private driver/tour for the day', amountEURMin: 250, amountEURMax: 500, note: 'For a car or small group; the Douro and Alentejo cost more because of the distance' }
  ],
  sources: [
    { title: 'Instituto dos Vinhos do Douro e do Porto — official information about the Douro and Port', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Douro Valley — tourism portal for the Douro region', url: 'https://www.dourovalley.eu', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Herdade do Esporão — official visits and tastings', url: 'https://www.esporao.com/en/visit-us/herdade-do-esporao/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'José Maria da Fonseca — official wine tourism visits', url: 'https://www.jmf.pt/en/wine-tourism/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
