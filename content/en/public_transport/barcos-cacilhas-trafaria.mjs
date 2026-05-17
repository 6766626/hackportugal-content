export default {
  editorialVoice: 'hackportugal',
  id: 'barcos-cacilhas-trafaria',
  categoryId: 'public_transport',
  title: 'Lisbon ferries: Cacilhas, Trafaria, Seixal, Montijo, Barreiro',
  tldr: 'Transtejo & Soflusa ferries are a quick way to cross the Tejo without the bridge or traffic jams. Main routes: Cais do Sodré–Cacilhas, Cais do Sodré–Seixal, Cais do Sodré–Montijo, Belém–Porto Brandão–Trafaria and Terreiro do Paço–Barreiro. In 2026, single tickets usually cost around €1.45–€3.15, zapping is slightly cheaper, and the Navegante Metropolitano pass for €40/month covers all these routes. Best choice for Almada/Cacilhas and Barreiro; for Pragal/Setúbal, Fertagus is often faster.',
  tags: ['ferries', 'navegante', 'cacilhas', 'trafaria'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: 'Which routes exist and where they actually take you',
      content: [
        { kind: 'paragraph', text: 'In Lisbon, river routes across the Tejo are operated by Transtejo & Soflusa. For an expat, this is not a tourist attraction but normal urban transport: validator, timetable, Navegante, and connections to Metro, train and buses.' },
        { kind: 'checklist', items: [
          'Cais do Sodré ⇄ Cacilhas — the main route to Almada; convenient for Cristo Rei, Cacilhas, Carris Metropolitana buses and Metro Sul do Tejo.',
          'Belém ⇄ Porto Brandão ⇄ Trafaria — the western route; useful for Caparica/Trafaria, but the timetable is less frequent than Cacilhas.',
          'Cais do Sodré ⇄ Seixal — a direct link between central Lisbon and Seixal; often faster than the bus over the bridge.',
          'Cais do Sodré ⇄ Montijo — convenient if you live in Montijo and work near Cais do Sodré, Chiado, Baixa.',
          'Terreiro do Paço ⇄ Barreiro — the Soflusa route; a good option for Barreiro and connections to CP trains on the south bank.',
          'Cais do Sodré — connection to the green Metro line, Linha de Cascais train, Carris, trams and suburban trains.',
          'Terreiro do Paço — connection to the blue Metro line and buses to Baixa/Alfama.',
          'Belém — connection to the Linha de Cascais train, tram 15E and buses, but allow walking time to the terminal.'
        ] }
      ]
    },
    {
      id: 'fares-navegante',
      title: 'Tickets, Navegante and zapping in 2026',
      content: [
        { kind: 'paragraph', text: 'All these routes are part of the Navegante system. If you have a monthly Navegante Metropolitano pass for €40, you do not need a separate ferry ticket: simply validate your card at the turnstile. Navegante Municipal for €30 only works within the selected município and is usually not suitable for daily crossings of the Tejo between Lisbon and the south bank.' },
        { kind: 'checklist', items: [
          'Passe Navegante Metropolitano: €40/month — covers the Lisbon Metropolitan Area, including Transtejo/Soflusa ferries, Metro, Carris, CP Urbanos, Fertagus within the AML zone and Carris Metropolitana.',
          'Passe Navegante Municipal: €30/month — for journeys within one município; before buying, check whether it covers your route.',
          'Zapping on the cartão Navegante — convenient for occasional trips; the fare deducted is usually cheaper than a paper/single ticket.',
          'A single ticket is bought from a machine or at the terminal ticket office; it is valid on the specific river route, not as a full transfer to Metro.',
          'For Cais do Sodré ⇄ Cacilhas, the single-fare benchmark is around €1.50.',
          'For Belém ⇄ Porto Brandão/Trafaria, the benchmark is around €1.45.',
          'For Seixal and Barreiro, the benchmark is around €2.80.',
          'For Montijo, the benchmark is around €3.15.',
          'Child, school, sub23 and senior fares depend on status and the Navegante profile setup; without a profile, the validator will deduct the standard fare.'
        ] },
        { kind: 'warning', text: 'Do not confuse passe and zapping. If the card has a monthly Navegante Metropolitano, the journey is covered. If there is no monthly passe, the card must have a positive zapping balance or a separate ticket. Ticket inspectors are regularly seen on the ferries.' }
      ]
    },
    {
      id: 'when-to-use-boat',
      title: 'When the ferry is better than Metro, train or bus',
      content: [
        { kind: 'paragraph', text: 'There is no Metro line across the Tejo. The alternatives are the Fertagus train over the 25 de Abril bridge, buses over the bridges, and ferries. The choice depends not on the map, but on your final destination on the south bank.' },
        { kind: 'checklist', items: [
          'Cacilhas ⇄ central Lisbon: almost always the ferry. The Cais do Sodré–Cacilhas crossing takes about 10 minutes, plus a short connection to Metro/Carris.',
          'Old Almada, Cristo Rei, Cova da Piedade: often ferry to Cacilhas + bus/Metro Sul do Tejo.',
          'Pragal, Corroios, Fogueteiro, Coina, Setúbal: Fertagus is often faster because the train goes directly to Entrecampos, Sete Rios, Campolide and Roma-Areeiro.',
          'Seixal ⇄ Cais do Sodré/Chiado/Baixa: the ferry is usually competitive with buses, especially at rush hour when the bridges are jammed.',
          'Barreiro ⇄ Baixa/Alfama: Soflusa to Terreiro do Paço is more convenient than a bus over the bridge if your destination is in the centre.',
          'Montijo ⇄ Cais do Sodré: the ferry is good for commuting to the centre, but in the evening and at weekends check the intervals in advance.',
          'Trafaria/Caparica: the route from Belém is useful if you are already on the western side of Lisbon; from Baixa it is often faster to travel via Cacilhas or by bus — it depends on the timetable.',
          'Airport: usually not the ferry. Look at Metro/bus/taxi to Cais do Sodré or Terreiro do Paço, then the ferry.'
        ] }
      ]
    },
    {
      id: 'schedules',
      title: 'Timetables: what to check before leaving',
      content: [
        { kind: 'paragraph', text: 'The timetable depends on the route, day of the week, season and fleet maintenance. Cacilhas has the tightest intervals; Trafaria, Montijo and Seixal services are less frequent, especially late in the evening, at weekends and on public holidays.' },
        { kind: 'checklist', items: [
          'Check ttsl.pt on the day of travel: horários, suppressões and avisos are published there.',
          'Allow 5–10 minutes to buy/top up the card and pass through the turnstiles.',
          'At Cacilhas during rush hour the passenger flow is heavy, but services are frequent; the queue usually moves quickly.',
          'For Trafaria and Porto Brandão, do not arrive “blind”: missing one service can cost you 30–60 minutes.',
          'Last services may be earlier than someone from a city with a night Metro expects; after midnight, buses, taxis or TVDE are often what remains.',
          'In fog, strong wind, strikes or technical problems, services may be cancelled without much advance notice.',
          'On match days, festival days and public holidays, queues to enter are possible at Cais do Sodré and Terreiro do Paço.',
          'Google Maps is useful, but the official TTSL timetable matters more if there is a discrepancy.'
        ] },
        { kind: 'warning', text: 'If you have a flight, medical appointment or appointment at AIMA/Finanças, do not plan a route using the last possible ferry. Leave at least one spare service or an alternative via the bridge.' }
      ]
    },
    {
      id: 'practical',
      title: 'Terminal practicalities: cards, bicycles, luggage',
      content: [
        { kind: 'paragraph', text: 'Terminals work like Metro: entry through turnstiles, and the validator reads the cartão Navegante. At major terminals there are machines, ticket offices and sometimes staff at the gates. At smaller terminals it is better to have a topped-up card in advance.' },
        { kind: 'checklist', items: [
          'Carry a physical cartão Navegante if you travel regularly. A bank card does not always replace the transport card on these routes.',
          'Top up zapping in advance at Metro, CP, Carris Metropolitana machines, PayShop or on supported Navegante channels.',
          'After validation, do not throw away the receipt/ticket until the end of the journey.',
          'You can usually bring a bicycle through if there is space and no crew restriction; at rush hour it is better to avoid overcrowded services.',
          'Scooters and folding bicycles are easier to carry if they are folded and do not block the passage.',
          'There are usually no problems with a pushchair, but when boarding keep to the right and follow staff instructions.',
          'With a dog, check the transport rules: a lead, muzzle or carrier may be required depending on the animal’s size.',
          'There is no proper left-luggage facility on board; keep suitcases with you and do not block the aisles.',
          'The open deck can be windy even on a warm day; in winter, the morning crossing over the Tejo feels colder than the city.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Passe Navegante Metropolitano', amountEUR: 40, note: 'Monthly pass for the AML; covers Transtejo/Soflusa and most urban transport.' },
    { label: 'Passe Navegante Municipal', amountEUR: 30, note: 'Monthly pass within one município; usually insufficient for crossing the Tejo.' },
    { label: 'Single ticket Cais do Sodré ⇄ Cacilhas', amountEUR: 1.5, note: '2026 fare benchmark; zapping is usually slightly cheaper.' },
    { label: 'Single ticket Belém ⇄ Porto Brandão/Trafaria', amountEUR: 1.45, note: '2026 fare benchmark; check the current TTSL tabela tarifária.' },
    { label: 'Single ticket Seixal or Barreiro', amountEUR: 2.8, note: 'Benchmark for Cais do Sodré–Seixal and Terreiro do Paço–Barreiro.' },
    { label: 'Single ticket Cais do Sodré ⇄ Montijo', amountEUR: 3.15, note: '2026 fare benchmark; zapping is usually cheaper than a single ticket.' }
  ],
  sources: [
    { title: 'TTSL — horários, tarifas and Transtejo/Soflusa avisos', url: 'https://ttsl.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transtejo — institutional information and river links', url: 'https://www.transtejo.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Navegante — passes and fares for the Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
