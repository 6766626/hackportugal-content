export default {
  editorialVoice: 'hackportugal',
  id: 'comboios-cp-tipos',
  categoryId: 'public_transport',
  title: 'CP trains: Alfa Pendular, Intercidades, InterRegional and Urbano — what is the difference',
  tldr: 'CP is the national rail operator. Alfa Pendular and Intercidades are long-distance trains with a compulsory seat and online purchase; Alfa is faster and more expensive, with Conforto/Turística. InterRegional and Regional are simpler, slower, and often without seat reservation. Urbanos are the suburban services of Lisbon, Porto and Coimbra, operating with zonal fares and Navegante/Andante cards. In 2026, it is best to buy tickets in the CP app/website, machines or balcão; Bilhete Verde combines CP + bus for destinations without a direct railway connection.',
  tags: ['cp', 'trains', 'tickets', 'urbano'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'map-of-services',
      title: '1. Quick map of CP train types',
      content: [
        { kind: 'paragraph', text: 'CP has several service levels. A common newcomer mistake is to look for “just a train” and then be surprised that one ticket requires a specific seat, another works like an urban travel pass, and a third cannot easily be bought from a machine at a small station.' },
        { kind: 'checklist', items: [
          'Alfa Pendular / AP — CP’s fastest long-distance train: Lisboa–Porto–Braga/Guimarães/Faro and some major routes.',
          'Intercidades / IC — a long-distance train between major cities, usually cheaper and slower than Alfa.',
          'InterRegional / IR — medium-distance routes between regions; less comfort, more stops.',
          'Regional / R — local trains, many stops, important for small towns.',
          'Urbanos — suburban networks in Lisboa, Porto and Coimbra; used for daily journeys.',
          'Celta / Internacional — separate international/cross-border services, for example Porto–Vigo; rules may differ.'
        ] },
        { kind: 'warning', text: 'Names on departure boards and in the CP app are written in Portuguese: Alfa Pendular, Intercidades, InterRegional, Regional, Urbanos. Check not only the destination city, but also the train number, departure station and platform — Lisboa and Porto each have several major stations.' }
      ]
    },
    {
      id: 'alfa-vs-intercidades',
      title: '2. Alfa Pendular and Intercidades: long-distance trains with a seat',
      content: [
        { kind: 'paragraph', text: 'Alfa Pendular and Intercidades are intercity trains, closest to the familiar model of “buying a ticket for a specific departure and seat”. The ticket is tied to the date, time, train and seat. You usually cannot simply board the next train with the same ticket.' },
        { kind: 'checklist', items: [
          'Alfa Pendular is faster, makes fewer stops and is usually more expensive.',
          'Alfa Pendular has Conforto and Turística classes. Conforto means roomier seats and a quieter environment; Turística is standard class.',
          'Intercidades usually has 1.ª classe and 2.ª classe; in practice, these are “first” and “second” class.',
          'Seat reservation for AP/IC is compulsory and included in the ticket.',
          'AP/IC tickets are convenient to buy in the CP app or on cp.pt; on popular Lisboa–Porto–Faro routes, buy in advance.',
          'AP/IC can have promotional fares and early-purchase discounts, but they are limited by train, number of seats and exchange/refund conditions.',
          'If you miss an AP/IC because of your own mistake, the ticket may be lost; if a CP connection is at fault, go to the balcão or to CP staff.'
        ] },
        { kind: 'paragraph', text: 'In practice: Lisboa–Porto on Alfa Pendular is the choice if time and comfort matter. Intercidades is often more sensible on price, especially if the time difference is small or you are not travelling at peak time.' }
      ]
    },
    {
      id: 'regional-and-interregional',
      title: '3. InterRegional, Regional: cheaper, slower, useful for small towns',
      content: [
        { kind: 'paragraph', text: 'InterRegional and Regional are CP’s workhorse outside the main corridors. They are needed if you do not live in Lisboa/Porto and are not only travelling between district capitals. Comfort is simpler, speed is lower, and there are more stops.' },
        { kind: 'checklist', items: [
          'Seats are usually not reserved: the ticket gives the right to travel, not to a specific seat.',
          'Small stations may have no machine or open ticket office; check in advance.',
          'If there is no way to buy a ticket at the station, the ticket is usually bought from the inspector on the train, but it is better to check the rules for the specific line.',
          'Timetables can be sparse: sometimes the next train is in 2–4 hours, not in 20 minutes.',
          'For connections to AP/IC, allow a buffer: regional trains are more likely to suffer delays.',
          'Bicycles and luggage depend on the type of train set and how busy it is; restrictions may apply at peak times.',
          'On rural lines, check the direction carefully: the same platform may serve both directions.'
        ] },
        { kind: 'warning', text: 'Do not plan an important AIMA, Finanças, SNS or Conservatória appointment with a tight connection via Regional/InterRegional. In Portugal, there is a real risk of being late because of a delay, cancellation or strike.' }
      ]
    },
    {
      id: 'urbanos',
      title: '4. Urbanos: suburban Lisboa, Porto and Coimbra',
      content: [
        { kind: 'paragraph', text: 'Urbanos are not a “cheap long-distance train”, but a suburban network. The logic is different here: zones, frequent services, ticket barriers, validators, monthly passes and integration with urban transport.' },
        { kind: 'checklist', items: [
          'Lisboa: CP Urbanos lines connect Lisboa with Sintra, Cascais, Azambuja, Sado and other suburbs.',
          'Porto: Urbanos do Porto run to Braga, Guimarães, Aveiro, Marco de Canaveses and suburban areas.',
          'Coimbra: Urbanos de Coimbra cover local routes around the city.',
          'In Lisboa, Navegante is often used; in Porto, Andante. But zone and validation rules differ.',
          'A single Urbanos ticket is usually bought from a machine/ticket office and validated before boarding, if there is a validator.',
          'In ticket-barrier areas, keep your ticket until exit: it is needed to open the barrier and for inspection.',
          'The CP app may show Urbanos timetables, but ticket purchase and use depend on the network and medium.',
          'At peak times, trains can be overcrowded, especially the Sintra line, Cascais line and Porto–Braga/Aveiro routes.'
        ] },
        { kind: 'paragraph', text: 'If you are moving to a suburb, first check not only the distance to Lisboa/Porto, but the Urbanos frequency after 20:00, weekend operation and the last train. Cheap rent can mean dependence on infrequent transport.' }
      ]
    },
    {
      id: 'where-to-buy',
      title: '5. Where to buy: app, website, machines, balcão',
      content: [
        { kind: 'paragraph', text: 'In 2026, the most convenient starting point is the CP app or cp.pt. But not all tickets and not all concessions are sold equally well online, so sometimes an ordinary CP ticket office remains the most reliable method.' },
        { kind: 'checklist', items: [
          'CP app / cp.pt — the best option for Alfa Pendular and Intercidades: you can see seats, classes, promotional fares and connections.',
          'CP machines — convenient for Urbanos and some regional tickets; the interface is usually available in Portuguese and English.',
          'Balcão / bilheteira CP — the ticket office at the station; useful for complex routes, concessions, exchanges, and problems after delays.',
          'Multibanco and bank cards are usually accepted in machines and online, but at small stations it is better to have a backup payment method.',
          'Buy AP/IC in advance before public holidays, summer, Christmas, Easter, São João in Porto and long weekends.',
          'Before paying, check the station: Lisboa Santa Apolónia, Lisboa Oriente, Porto Campanhã and Porto São Bento are not the same thing.',
          'A screenshot of the ticket is useful, but it is better to have the ticket in the CP app/PDF with a readable QR code.',
          'The name on an AP/IC ticket may be checked against an identity document, especially on promotional and named fares.'
        ] },
        { kind: 'warning', text: 'Do not buy CP tickets through random intermediary websites if the price is higher and the refund conditions are unclear. The official source is cp.pt and the CP app; for urban passes, use the official Navegante/Andante systems and stations.' }
      ]
    },
    {
      id: 'bilhete-verde',
      title: '6. Bilhete Verde: when you need train + bus',
      content: [
        { kind: 'paragraph', text: 'Bilhete Verde is a combined CP + bus journey format for places that the railway does not reach directly, or where the bus covers the final section of the route. It is useful for expats without a car: you can travel by train to a major station and continue by bus on a linked ticket.' },
        { kind: 'checklist', items: [
          'Check Bilhete Verde on the CP website in the tickets/partner journeys section: availability depends on the route.',
          'Not all CP destinations have Bilhete Verde; it is not a universal travel pass for the country.',
          'Connection, refund and luggage conditions may differ with the bus operator.',
          'If you are travelling with a large suitcase, bicycle, animal or pushchair, check the rules for the bus leg in advance.',
          'For a complex route, it is better to buy through an official CP channel or at the ticket office, so staff can see the full chain.',
          'Allow time for the connection: the bus may leave from the other side of the station or from a separate terminal rodoviário.',
          'If the train is delayed, keep the ticket and contact CP/the operator — your rights depend on whether the route was sold as a linked journey.'
        ] },
        { kind: 'paragraph', text: 'The practical logic: first look for a direct CP service. If there is no railway to the town you need, check Bilhete Verde or separately Rede Expressos/FlixBus/municipal buses. In small towns, the last bus may leave early.' }
      ]
    }
  ],
  sources: [
    {
      title: 'CP — official passenger rail website, timetables and ticket purchase',
      url: 'https://www.cp.pt/passageiros/pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Alfa Pendular and Intercidades: long-distance trains and services',
      url: 'https://www.cp.pt/passageiros/pt/como-viajar/alfa-pendular-intercidades',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Urbanos de Lisboa, Porto and Coimbra',
      url: 'https://www.cp.pt/passageiros/pt/como-viajar/urbanos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CP — Bilhete Verde and combined journeys',
      url: 'https://www.cp.pt/passageiros/pt/descontos-vantagens/vantagens-parcerias/bilhete-verde',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
