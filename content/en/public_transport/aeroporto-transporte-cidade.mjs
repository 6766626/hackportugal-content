export default {
  editorialVoice: 'hackportugal',
  id: 'aeroporto-transporte-cidade',
  categoryId: 'public_transport',
  title: 'Transport from the airport to the city — Lisbon, Porto, Faro',
  tldr: 'In 2026 the most predictable transfer is: LIS → Lisboa on the metro linha Vermelha for €1.85 + €0.50 card, OPO → Porto on Metro do Porto linha E with a Z4 ticket at about €2.25 + €0.60 Andante. From Faro Airport, first take Próximo bus 16 to Faro, then Vamus around the Algarve; direct regional services depend on the season. Airport taxis are usually more expensive than Bolt/Uber: Lisboa €12–25, Porto €25–35, Faro €10–15, higher at night and with luggage.',
  tags: ['airport', 'metro', 'uber', 'vamus'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon Airport (LIS) → Lisboa',
      content: [
        { kind: 'paragraph', text: 'The main Lisbon Airport hack: the metro is right at Terminal 1. Linha Vermelha goes to Alameda / Saldanha, then you can change to the green, yellow or blue lines. To Saldanha it usually takes about 20 minutes with no traffic jams.' },
        { kind: 'checklist', items: [
          'Metro: €1.85 for a Carris/Metro journey + €0.50 for a Navegante occasional / Viva Viagem card, if you do not already have one',
          'Metro operating hours: roughly 06:30–01:00; at night use a taxi, Bolt, Uber or bus',
          'To Baixa/Chiado: linha Vermelha to Alameda, then linha Verde to Baixa-Chiado',
          'To Cais do Sodré: linha Vermelha to Alameda, linha Verde to Cais do Sodré',
          'To Oriente: linha Vermelha, 3 stops; convenient for CP trains and Rede Expressos / FlixBus coaches',
          'There are Carris city buses from the airport, but they are less convenient with suitcases and depend on traffic',
          'The old Aerobus Lisboa format should not be treated as a guaranteed option for 2026: check availability on the day you arrive; the basic official route is metro/bus/taxi'
        ] },
        { kind: 'warning', text: 'If you arrive at Terminal 2, you first need the free shuttle to Terminal 1. The metro and most city transport are at Terminal 1; allow 10–20 minutes.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto Airport (OPO) → Porto',
      content: [
        { kind: 'paragraph', text: 'In Porto the simplest option is Metro do Porto linha E / Violeta from Aeroporto to Trindade. Trindade is the main interchange; from there it is easy to get to Aliados, Bolhão, São Bento, Casa da Música and Vila Nova de Gaia.' },
        { kind: 'checklist', items: [
          'You need an Andante Z4 ticket: in 2026 the reference price is about €2.25 per journey + €0.60 for an Andante Azul card',
          'To Trindade it usually takes 25–30 minutes',
          'To São Bento: Aeroporto → Trindade, then change to linha D / Amarela to São Bento',
          'To Campanhã: Aeroporto → Trindade, then change to lines A/B/C/F or a CP train, if more convenient',
          'The Andante card must be validated before boarding and at every change',
          'The metro in Porto does not run 24 hours; late in the evening, check the last service in the Anda app or on the Metro do Porto website',
          'With large luggage, the metro is usually more convenient than the bus: there is no extra charge for a suitcase, but do not block doors or the aisle'
        ] },
        { kind: 'paragraph', text: 'A taxi from OPO to central Porto usually costs €25–35 during the day, more at night, on holidays and to more distant districts. Bolt/Uber often show €15–25, but with surge pricing they can be more expensive than a taxi.' }
      ]
    },
    {
      id: 'faro',
      title: 'Faro Airport (FAO) → Faro and the Algarve',
      content: [
        { kind: 'paragraph', text: 'Faro Airport has no metro and no railway station directly at the airport. The basic route is: Próximo bus to Faro Terminal Rodoviário / the city, then Vamus Algarve regional buses or a CP train from Faro station.' },
        { kind: 'checklist', items: [
          'Faro Airport → Faro centre: Próximo city bus, most often linha 16, ticket from the driver usually about €2.60',
          'To Faro bus station: about 15–25 minutes, depending on traffic and the timetable',
          'Faro → Albufeira / Portimão / Lagos / Tavira: check Vamus Algarve; timetables change noticeably by season',
          'For CP trains you need to travel from the airport to Faro station; walking from the airport should not be considered a convenient option',
          'Direct Aerobus/shuttles around the Algarve may operate seasonally; in April–October there are usually more services, fewer in winter',
          'If your arrival is late, check the last Vamus bus in advance: after 21:00–22:00 the choice drops sharply',
          'For a family of 3–4 people going to Algarve resorts, a taxi/transfer can sometimes be more rational than the bus, especially at night'
        ] },
        { kind: 'warning', text: 'Do not plan a “flight → last Vamus” connection without a buffer. In Faro, a 20–40 minute baggage delay can easily ruin an evening route around the Algarve.' }
      ]
    },
    {
      id: 'taxi-apps',
      title: 'Taxi, Bolt and Uber: realistic price ranges',
      content: [
        { kind: 'paragraph', text: 'At Portuguese airports, the official taxi rank is usually by the arrivals exit. Bolt/Uber pick up passengers in designated pick-up zones; the app will show the exact point. The app price is fixed before the trip, while taxis use the meter.' },
        { kind: 'checklist', items: [
          'LIS → Baixa/Chiado: Bolt/Uber often €10–18, taxi usually €12–25',
          'LIS → Cascais / Oeiras: apps often €25–45, taxi may be €35–60',
          'OPO → Trindade/Aliados: Bolt/Uber often €15–25, taxi usually €25–35',
          'OPO → Vila Nova de Gaia: allow €20–35 via app, more at night',
          'FAO → Faro centre: Bolt/Uber often €6–10, taxi usually €10–15',
          'FAO → Albufeira: often €35–55 via app/transfer, taxi may be higher',
          'FAO → Lagos: often €80–120; the bus is cheaper, but slower and depends on the timetable',
          'At night, in rain, during strikes and after several arrivals, the Bolt/Uber price can jump by 1.5–3 times'
        ] },
        { kind: 'warning', text: 'Taxis may have surcharges for luggage, night tariff, weekends/holidays and trips outside the municipality. Before getting in, make sure the taxímetro is switched on, rather than accepting a “negotiated” cash price.' }
      ]
    },
    {
      id: 'luggage-rules',
      title: 'Luggage and tickets: what matters with suitcases',
      content: [
        { kind: 'paragraph', text: 'On the Lisboa and Porto metro there is no separate charge for a standard suitcase. The limit is practical: luggage must not obstruct the aisle, doors, evacuation or other passengers. On buses the rules are stricter: the driver may refuse you if the suitcase is too large or the cabin is overcrowded.' },
        { kind: 'checklist', items: [
          'Buy and validate your ticket before entering the metro; inspectors work regularly in Lisboa and Porto',
          'Do not throw away the Navegante occasional / Viva Viagem or Andante card: it can be topped up',
          'In Lisboa, one card usually stores one type of product; if you change tariff, the machine may ask to “clear” the card',
          'In Porto the ticket zone matters: from the airport to the centre you need Z4, not Z2',
          'On buses, keep your suitcase next to you and do not place it in the aisle or by the doors',
          'With a pushchair, the metro is usually more convenient: there are lifts, but some stations are old — allow time',
          'If you have a bicycle, surfboard or 3+ large suitcases, take a van/taxi XL or a pre-booked transfer'
        ] },
        { kind: 'paragraph', text: 'Practical rule: one person + one large suitcase — the metro is fine. Two adults + a child + 3 suitcases after a night flight — it is often cheaper in terms of stress to take Bolt/Uber XL or a taxi.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa: metro LIS → city', amountEUR: 1.85, note: 'Single Carris/Metro journey; the Navegante occasional / Viva Viagem card is paid for separately' },
    { label: 'Lisboa: Navegante occasional / Viva Viagem card', amountEUR: 0.50, note: 'Reloadable paper card for occasional tickets' },
    { label: 'Porto: Metro do Porto Aeroporto → centre', amountEUR: 2.25, note: 'Reference price for an Andante Z4 ticket in 2026; check the machine before buying' },
    { label: 'Porto: Andante Azul card', amountEUR: 0.60, note: 'Needed for single journeys on Metro do Porto / STCP' },
    { label: 'Faro: airport → city bus', amountEUR: 2.60, note: 'Reference price for a ticket from the driver on the Próximo city bus' },
    { label: 'Taxi/Bolt/Uber from airport to centre', amountEURMin: 6, amountEURMax: 35, note: 'Faro is cheaper, Porto is usually more expensive; surge pricing and night tariffs change the price' }
  ],
  sources: [
    { title: 'ANA Aeroportos — Lisbon Airport: transport from the airport', url: 'https://www.aeroportolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANA Aeroportos — Porto Airport: transport from the airport', url: 'https://www.aeroportoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto — Andante fares and Aeroporto line', url: 'https://www.metrodoporto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vamus Algarve — regional buses in the Algarve', url: 'https://vamusalgarve.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
