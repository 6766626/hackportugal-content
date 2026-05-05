export default {
  editorialVoice: 'hackportugal',
  id: 'wineries-quintas-visita',
  categoryId: 'food_leisure',
  title: 'Wine tours at quintas: Douro, Alentejo, Setúbal and Bairrada',
  tldr: 'In 2026, a visit to a quinta with tasting typically costs €30–€100 per person: a basic 60–90 minute tour with 2–4 wines — €20–€45, a premium one with Port, reserva or lunch — €60–€150. Douro is the most scenic but requires transport planning; Alentejo is easier by car; Setúbal suits a short trip from Lisbon; Bairrada is for espumante and leitão. Book online 1–3 weeks ahead, especially for May–October.',
  tags: ['wine', 'quintas', 'douro', 'tastings'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regions',
      title: '1. Choose a region to match your trip',
      content: [
        { kind: 'paragraph', text: 'A Portuguese wine country trip is not just “tasting wine”. A quinta usually offers a tour of the vineyards or cellars, explains DOC/IGP, shows the lagares or the barrel room, and finishes with a tasting. Almost everywhere you need to book in advance: you can turn up, but there may be no available slot.' },
        { kind: 'checklist', items: [
          'Douro Valley — terraces, the river, Port and dry Douro DOC. The best choice for a first “wow” tour.',
          'Alentejo — large herdades, straight roads, summer heat, full-bodied reds. Convenient by car from Évora/Reguengos de Monsaraz.',
          'Setúbal — Moscatel de Setúbal, long wine history, easy to do as a half-day from Lisbon.',
          'Bairrada — espumante, Baga, gastronomy with leitão da Bairrada. Pairs well with Coimbra/Aveiro.',
          'Vinho Verde — a separate northern region; Aveleda is in Penafiel and not in Bairrada, though it often appears in tourist wine routes.',
          'If you do not drink alcohol, ask in advance about a non‑drinker rate: some quintas still charge the full tour price, others give a discount.'
        ] },
        { kind: 'warning', text: 'Do not plan 4–5 tastings in a day. A realistic limit is 2 quintas, 3 at most with a private driver. In Douro, driving the switchbacks takes longer than the map suggests.' }
      ]
    },
    {
      id: 'douro',
      title: '2. Douro: Quinta do Crasto, Quinta do Seixo and logistics',
      content: [
        { kind: 'paragraph', text: 'The Douro Valley is a UNESCO site and the most photogenic wine region in Portugal. Main bases for overnight stays: Peso da Régua, Pinhão, Lamego, Vila Real. For river-and-terrace views, people often choose the Pinhão area.' },
        { kind: 'checklist', items: [
          'Quinta do Crasto — a strong option for a premium tour: views, old vines, Douro DOC, sometimes limited tastings. Booking in advance is a must.',
          'Quinta do Seixo — Sandeman’s well-known quinta near Pinhão: Port, a panorama over the Douro, a more “tourism‑polished” format.',
          'Basic tours in the Douro are usually €30–€50; extended tastings with reserva/vintage Port — €60–€100+.',
          'The train Porto São Bento/Campanhã → Peso da Régua or Pinhão is scenic, but the timetable limits how many visits you can fit in.',
          'A rental car gives freedom, but the driver must not drink: the police do check, and fines for “álcool ao volante” are high.',
          'A day tour from Porto often costs €90–€180 per person in a group, or €250–€500+ per car with a driver.',
          'Best months: April–June and September–October. August is hot and busy; during the vindima some quintas limit slots.'
        ] },
        { kind: 'paragraph', text: 'A practical unhurried route: a night in Pinhão, Quinta do Seixo in the morning, lunch by the river, after lunch Quinta do Crasto or another view‑rich quinta. If you are coming from Porto for a single day, pick 1–2 visits rather than “all of the Douro in a day”.' }
      ]
    },
    {
      id: 'south',
      title: '3. Alentejo and Setúbal: easier from Lisbon',
      content: [
        { kind: 'paragraph', text: 'Alentejo and Setúbal are convenient for expats from Lisbon: fewer hairpins, easier parking, more day‑trip options. But in summer in Alentejo temperatures easily go above 35 °C, so it is better to schedule tastings for the morning.' },
        { kind: 'substeps', items: [
          {
            id: 'alentejo',
            title: 'Alentejo: Herdade do Esporão',
            content: [
              { kind: 'paragraph', text: 'Herdade do Esporão near Reguengos de Monsaraz is one of the most straightforward options for a first visit to Alentejo: winery, olive oil, restaurant, shop, different levels of tastings.' },
              { kind: 'checklist', items: [
                'A basic tasting is usually cheaper than a premium tour with reserva/private selection.',
                'Book lunch in the restaurant separately: weekend tables go early.',
                'From Lisbon by car — roughly 2 hours; public transport is inconvenient.',
                'Good combo: Évora + Monsaraz + Esporão, but better with an overnight.'
              ] }
            ]
          },
          {
            id: 'setubal',
            title: 'Setúbal: José Maria da Fonseca and Moscatel',
            content: [
              { kind: 'paragraph', text: 'José Maria da Fonseca in Azeitão is a classic for Moscatel de Setúbal and one of the most convenient wine visits from Lisbon. The format suits even those who do not want to spend the whole day.' },
              { kind: 'checklist', items: [
                'From Lisbon you can go by car, taxi/TVDE, or combine a train to Setúbal with local transport.',
                'After the tasting it is easy to add queijo de Azeitão, Serra da Arrábida, or the Arrábida beaches.',
                'Moscatel is sweet and fortified: the tasting pours are small, but the alcohol is noticeable.',
                'For weekends book at least a week ahead, earlier in summer.'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'bairrada-aveleda',
      title: '4. Bairrada, espumante and an important note about Aveleda',
      content: [
        { kind: 'paragraph', text: 'Bairrada lies between Coimbra and Aveiro. It is the region of Baga, espumante and leitão da Bairrada. If you are travelling from Porto towards Coimbra or Aveiro, Bairrada is easy to fit into a half‑day route.' },
        { kind: 'warning', text: 'Aveleda is a well‑known quinta in Penafiel in the Vinho Verde region, not Bairrada. If your aim is specifically Bairrada, look at wineries around Anadia, Mealhada, Cantanhede and Curia. If your aim is a beautiful quinta with a garden and light white Vinho Verde, Aveleda is an excellent separate option.' },
        { kind: 'checklist', items: [
          'For Bairrada, look for tours with espumante: the region is strong in traditional‑method sparkling wines.',
          'The “tasting + leitão da Bairrada” pairing is the main gastronomic scenario.',
          'From Porto by car to Anadia/Mealhada — about 1–1.5 hours; from Coimbra — 25–40 minutes.',
          'Aveleda from Porto — about 35–50 minutes by car; it works better as a short north trip rather than a Bairrada itinerary.',
          'In small quintas, an English tour is not offered every day — confirm the language when booking.'
        ] }
      ]
    },
    {
      id: 'booking',
      title: '5. How to book and what to check before paying',
      content: [
        { kind: 'paragraph', text: 'The most reliable route is the quinta’s own website or e‑mail. Marketplaces are convenient, but they charge higher commission and sometimes have worse flexibility for rescheduling. For popular places in Douro, Alentejo and Setúbal in high season, book 1–3 weeks ahead; for the vindima and long weekends — 3–6 weeks.' },
        { kind: 'checklist', items: [
          'Tour date, time and language: Portuguese/English/French/Spanish.',
          'What is included: tasting only, cellar visit, vineyard walk, museum, olive oil tasting, lunch.',
          'How many wines: 2, 3, 4 or a premium flight; whether there is Port/Moscatel/espumante.',
          'Duration: typically 60–90 minutes; with lunch 2–3 hours.',
          'Cancellation policy: free cancellation up to 24–72 hours or non‑refundable.',
          'Child‑friendliness: whether you can come with a child, a pushchair, teenagers.',
          'Parking and access road: especially important in the Douro, where the approach to a quinta can be narrow.',
          'Whether you can buy wine on site and arrange delivery within Portugal/EU.',
          'Whether card prepayment is required; some quintas accept Multibanco/MB WAY only for Portuguese customers.'
        ] },
        { kind: 'warning', text: 'Portugal’s drink‑driving limit: the standard threshold is 0.5 g/l, and for new drivers and professionals 0.2 g/l. After a tasting it is safer to have a sober driver, take a tour with transfers, or stay the night nearby.' }
      ]
    },
    {
      id: 'budget',
      title: '6. Budget and ready‑made scenarios for 2026',
      content: [
        { kind: 'paragraph', text: 'Prices vary greatly by brand, wine level and whether food is included. In 2026 a normal benchmark for a quality visit is €30–€100 per person without transport. Anything that includes lunch, rare bottles or a private guide easily goes over €100.' },
        { kind: 'checklist', items: [
          'Budget: 1 quinta + a simple tasting — €20–€35 per person, transport extra.',
          'Comfort: 2 quintas in a day + lunch — €70–€140 per person without an overnight.',
          'Douro with an overnight: train/car, 2 tastings, dinner and hotel — often €180–€350 per person for 2 days.',
          'From Lisbon without a car: Setúbal/Azeitão with TVDE or a small tour — usually cheaper than the Douro.',
          'Gift format: premium tasting or private tour — €80–€150+ per person.',
          'Buying wine on site is not always cheaper than in a supermarket, but there are often exclusive bottles and older vintages.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Basic tasting at a quinta', amountEURMin: 20, amountEURMax: 45, note: 'Usually 60–90 minutes, 2–4 wines, no food' },
    { label: 'Extended tasting / premium flight', amountEURMin: 60, amountEURMax: 100, note: 'Reserva, Port, Moscatel, espumante or rare lines' },
    { label: 'Tour with lunch', amountEURMin: 80, amountEURMax: 150, note: 'Price depends on the restaurant and pairing; at well‑known herdades it can be higher' },
    { label: 'Group day tour from Porto to the Douro', amountEURMin: 90, amountEURMax: 180, note: 'Usually includes transport, 1–2 visits and sometimes lunch/cruise' },
    { label: 'Private driver/tour for a day', amountEURMin: 250, amountEURMax: 500, note: 'Per car or small group; Douro and Alentejo are pricier due to the distance' }
  ],
  sources: [
    { title: 'Instituto dos Vinhos do Douro e do Porto — official information on the Douro and Port', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Douro Valley — the tourism portal of the Douro region', url: 'https://www.dourovalley.eu', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Herdade do Esporão — official visits and tastings', url: 'https://www.esporao.com/en/winetourism/herdade-do-esporao/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'José Maria da Fonseca — official wine tourism visits', url: 'https://www.jmf.pt/index.php?id=95', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
