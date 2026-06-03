export default {
  editorialVoice: 'hackportugal',
  id: 'rotas-vinho-douro-alentejo',
  categoryId: 'travel_portugal',
  title: 'Wine routes: Rotas do Vinho Douro, Alentejo and Tejo',
  tldr: 'In Portugal, wine routes are not a “museum with a tasting”, but a network of quintas, adegas, restaurants and information centres. On the Douro/Porto Wine Route there are 60+ estates; a typical visit with tasting costs €15–50; in Alentejo a convenient base is Évora/Reguengos de Monsaraz; Tejo and Lisboa are easier for a day trip from Lisbon. Book in advance, do not plan more than 2–3 tastings per day and appoint a driver.',
  tags: ['wine', 'douro', 'alentejo', 'tejo', 'tourism'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-routes-are',
      title: 'What Rotas do Vinho are 🍷',
      content: [
        { kind: 'paragraph', text: 'Rotas do Vinho are regional wine routes: maps of producers, wine cellars, tasting rooms, hotels, restaurants and tourist services. This is not a single state ticket: each quinta or adega is usually booked separately.' },
        { kind: 'paragraph', text: 'For an expat in Portugal, this is the best way to understand the regions without tourist haste: Douro means terraces and Port wine, Alentejo means broad landscapes and powerful red wines, Tejo/Lisboa means accessible day trips from Lisbon.' },
        { kind: 'checklist', items: [
          'Check the official region: Douro/Porto via IVDP, general wine information via IVV',
          'Book visits on the quinta/adega website or by email — walk-in is not guaranteed in 2026',
          'Check the language of the tour: PT/EN almost always, RU rarely',
          'Clarify whether tour + tasting is included or only a prova',
          'Plan 2, maximum 3 tastings per day',
          'Allow 60–120 minutes for one quinta',
          'Do not drive after tastings: Uber/Bolt outside cities are unreliable',
          'You can buy wine on site; delivery within Portugal is often available for an extra fee'
        ] }
      ]
    },
    {
      id: 'douro-porto',
      title: 'Douro and Rota do Vinho do Porto',
      content: [
        { kind: 'paragraph', text: 'Douro is the most spectacular route: terraced vineyards along the Douro river, Port wine, DOC Douro and historic quintas. Practical bases are Peso da Régua, Pinhão, Lamego or Vila Nova de Gaia if you first want to understand Port wine in the lodges near Porto.' },
        { kind: 'paragraph', text: 'Rota do Vinho do Porto/Douro brings together 60+ quintas and wine sites. In 2026, the typical price for a visit with tasting is €15–50 per person: a basic prova is cheaper, while a vineyard tour, aged Port/Tawny or lunch pairing costs more.' },
        { kind: 'checklist', items: [
          'Best season: May–June and September–October; vindima in September is booked in advance',
          'Route without a car: Linha do Douro train to Régua or Pinhão + taxi/transfer',
          'Route by car: the N222 is beautiful, but narrow and tiring; allow time',
          'For Port wine: include Vila Nova de Gaia if you live near Porto or are going for the first time',
          'For landscapes: Pinhão and São João da Pesqueira offer the most “postcard” Douro',
          'For a serious tasting: ask for DOC Douro reds/whites and Port separately',
          'For a family trip: choose quintas with a restaurant or picnic option',
          'Check whether visita privada is a separate service — it can cost noticeably more'
        ] },
        { kind: 'warning', text: 'Douro looks compact on the map, but the roads are slow. Do not put Régua, Pinhão, São João da Pesqueira and Vila Nova de Foz Côa into one day with tastings — it will turn into a race, not a wine route.' }
      ]
    },
    {
      id: 'alentejo',
      title: 'Alentejo: Évora, Reguengos and Monsaraz',
      content: [
        { kind: 'paragraph', text: 'Rota dos Vinhos do Alentejo is one of the most convenient wine routes for a weekend. Main hubs: Évora, Reguengos de Monsaraz, Estremoz, Borba, Redondo, Vidigueira. The region is known for its warm climate, red blends, talha wine and wineries with good infrastructure for visitors.' },
        { kind: 'checklist', items: [
          'Base for 1–2 nights: Évora for restaurants and logistics',
          'Base for landscapes: Monsaraz/Reguengos de Monsaraz',
          'Typical visit: €15–35 for tour + tasting, premium tastings cost more',
          'In summer the heat is often above 35 °C — schedule tastings in the morning or closer to evening',
          'In Évora there are wine bars and tasting formats without travelling around adegas',
          'For talha wine, ask about tastings in Vidigueira, Vila de Frades and the surrounding area',
          'Restaurants in Alentejo are popular at weekends — book lunch in advance',
          'Between adegas it is best to travel by car with a sober driver or take a private tour'
        ] },
        { kind: 'paragraph', text: 'Alentejo is good for those who want to combine wine, gastronomy and a relaxed rural stay. There are fewer dramatic roads here than in Douro, but the distances between sites are large, and public transport is almost useless for wine tourism.' }
      ]
    },
    {
      id: 'tejo-lisboa',
      title: 'Tejo and Lisboa: a wine day from Lisbon',
      content: [
        { kind: 'paragraph', text: 'If you live in Lisbon and do not want to stay overnight, look at the Tejo and Lisboa regions. Tejo is convenient via Santarém, Cartaxo, Almeirim, Tomar and the Ribatejo area; Lisboa via Bucelas, Colares, Torres Vedras, Óbidos and the surrounding area.' },
        { kind: 'paragraph', text: 'Rota dos Vinhos do Tejo and Rota dos Vinhos de Lisboa are usually logistically easier than Douro: fewer mountain roads, more options for a day tour, and a lower average bill for basic tastings.' },
        { kind: 'checklist', items: [
          'From Lisbon to Tejo it is convenient to drive; Santarém is a clear first stop',
          'For Lisboa DOC Colares, check the timetable in advance — many visits are by appointment only',
          'Bucelas is good for white wines and a short trip from the capital',
          'Óbidos can be combined with wine, the historic centre and ginjinha',
          'Typical tasting budget: €10–30 per person',
          'If travelling by train, check the “last mile” to the adega — it is often far on foot',
          'For groups of 4–6 people, a private transfer may be better value than car hire + alcohol risk',
          'Do not confuse Tejo as a wine region with the tourist riverside in Lisboa — this is a separate DOC/IG geography'
        ] }
      ]
    },
    {
      id: 'booking-safety',
      title: 'How to book and not spoil the trip',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-region', title: '1. Choose the region according to the format', content: [
            { kind: 'paragraph', text: 'Douro is for 2–3 days and landscapes; Alentejo is for a weekend with food and a hotel; Tejo/Lisboa is for a day trip from Lisbon; Gaia is for quick Port wine without a car.' }
          ] },
          { id: 'book-directly', title: '2. Book directly', content: [
            { kind: 'paragraph', text: 'Write to the quinta/adega: date, time, number of people, language, whether almoço/pairing is needed, whether there are children, and who does not drink alcohol. Many estates reply faster via the form on their website or WhatsApp.' }
          ] },
          { id: 'plan-transport', title: '3. Transport first, tastings afterwards', content: [
            { kind: 'paragraph', text: 'The main mistake is to book 3 tastings in different valleys and then discover that there is no taxi. In rural Portugal, transport must be planned before paying for visits.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Have the booking confirmation in email/WhatsApp',
          'Arrive 10 minutes before the tour starts',
          'Take water, sun protection and comfortable shoes for the vineyards',
          'Notify in advance about pregnancy, alcohol intolerance or food restrictions',
          'Check the rules for children: some quintas allow them, but the tasting area is not always family-friendly',
          'Do not count on free cancellation on the day of the visit',
          'Buy wine after the tasting, not before — tastes change across the set',
          'Keep receipts if you are carrying bottles in luggage or sending them by delivery'
        ] },
        { kind: 'warning', text: 'In Portugal, the permitted drink-driving limit is low, and for new drivers and professionals it is even stricter. Practical rule for a wine route: the driver does not taste or uses the spit bucket without “I will just try a little”.' }
      ]
    }
  ],
  costs: [
    { label: 'Basic tasting in Tejo/Lisboa', amountEURMin: 10, amountEURMax: 30, note: 'Usually a prova of several wines; the tour may be charged separately.' },
    { label: 'Visit with tasting in Douro', amountEURMin: 15, amountEURMax: 50, note: 'Typical range for tour + tasting; premium Port, private visit and lunch pairing cost more.' },
    { label: 'Visit with tasting in Alentejo', amountEURMin: 15, amountEURMax: 35, note: 'Depends on the adega, the number of wines and the included tour.' },
    { label: 'Private wine tour with transport', amountEURMin: 90, amountEURMax: 250, note: 'Indicative per-person price for a small group; the price varies greatly by region, language and included lunch.' }
  ],
  sources: [
    { title: 'IVDP — Instituto dos Vinhos do Douro e do Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Rota dos Vinhos do Alentejo — routes and producers', url: 'https://www.vinhosdoalentejo.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Comissão Vitivinícola Regional do Tejo — Vinhos do Tejo', url: 'https://www.vinhosdotejo.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
