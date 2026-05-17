export default {
  editorialVoice: 'hackportugal',
  id: 'viagens-fim-de-semana-pt',
  categoryId: 'travel_portugal',
  title: 'Where to go for the weekend: top destinations from Lisbon and Porto',
  tldr: 'In Portugal, it is genuinely possible to plan weekends without taking holiday: from Lisbon — Sintra/Cascais in 30–45 min, Setúbal and Arrábida in 1 hr, Évora in 1.5 hrs, Coimbra in 2 hrs, the Algarve in 2.5–3 hrs, Madeira in a 1.5 hr flight. From Porto — the Douro, Aveiro and Viana do Castelo are around 1 hr away, Galicia in Spain is around 2 hrs by car. In 2026, check CP, Rede Expressos/FlixBus, Via Verde toll roads and accommodation in advance: in summer and on public holidays, prices can easily double.',
  tags: ['travel', 'weekends', 'lisbon', 'porto', 'tourism'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-to-plan',
      title: 'How to plan a 2-day trip',
      content: [
        { kind: 'paragraph', text: 'Portugal’s main rule: distances are short, but seasonality is strict. Weekends in April–June and September are more comfortable than in August: fewer traffic jams, lower accommodation prices, easier parking by beaches and miradouros.' },
        { kind: 'checklist', items: [
          'Check not only the kilometres, but also departure time: on Fridays after 17:00, the A1, A2, A5, A28 and Lisbon bridges quickly get congested',
          'For trains, check CP: Lisboa–Coimbra is around 2 hrs on Alfa Pendular/Intercidades, Porto–Aveiro is around 40–60 min',
          'For coaches, compare Rede Expressos, FlixBus and Citi Express: sometimes a one-way ticket costs less than a coffee at the airport',
          'If you are travelling by car, check toll roads in advance: the A2 to the Algarve, A1 to Coimbra/Porto, A28 in the north, A6 to Évora',
          'For car hire, pick up the car on Friday morning or early on Saturday: airport offices are more expensive, but stay open longer',
          'In high season, book accommodation 2–4 weeks ahead; for Madeira, the Algarve, the Douro and Sintra — even earlier',
          'Do not plan 5 towns in 2 days: one region + 1–2 stops is better, otherwise the weekend turns into logistics',
          'In the Arrábida and Peneda-Gerês natural parks and on Algarve beaches, check summer entry and parking restrictions'
        ] },
        { kind: 'warning', text: 'Accommodation prices rise sharply on public holidays and long weekends. Portuguese feriados plus school holidays can make an ordinary guesthouse in the Algarve or the Douro more expensive than a city hotel in Lisbon.' }
      ]
    },
    {
      id: 'from-lisbon',
      title: 'From Lisbon: quick routes 🚆🚗',
      content: [
        { kind: 'substeps', items: [
          { id: 'sintra-cascais', title: 'Sintra + Cascais — 30–45 min', content: [
            { kind: 'paragraph', text: 'A classic without an overnight stay. Sintra — palaces, forest, Castelo dos Mouros, Palácio da Pena; Cascais — ocean, Boca do Inferno, beaches and dinner by the water. By train it is convenient: Lisboa–Sintra from Rossio, Lisboa–Cascais from Cais do Sodré.' },
            { kind: 'checklist', items: [
              'It is better to leave before 09:00: queues for Palácio da Pena and parking in Sintra quickly become painful',
              'Do not try to drive to the palaces in your own car at peak season — use the bus/taxi/walking route',
              'For one day: Sintra in the morning, Cascais or Cabo da Roca in the evening',
              'For a romantic weekend: overnight in Sintra or Cascais, Sunday at Guincho'
            ] }
          ] },
          { id: 'setubal-arrabida', title: 'Setúbal + Arrábida — around 1 hr', content: [
            { kind: 'paragraph', text: 'A good option by car: Serra da Arrábida, Portinho da Arrábida, Praia de Galapinhos, fish and choco frito in Setúbal. In summer, some roads and car parks are restricted, so it is better to arrive early.' },
            { kind: 'checklist', items: [
              'For nature: Miradouro do Portinho da Arrábida and beaches by the mountains',
              'For food: Setúbal, choco frito, peixe grelhado, Moscatel de Setúbal',
              'For the ferry: you can link the route with Tróia, but allow time and cost for the crossing',
              'Without a car the route is possible, but inconvenient: bus to Setúbal + taxi/local transport'
            ] }
          ] },
          { id: 'evora', title: 'Évora — 1–1.5 hrs', content: [
            { kind: 'paragraph', text: 'The best weekend for those tired of the ocean: white Alentejo, Templo Romano, Capela dos Ossos, vinho, azeite and a calm centre. By car it is around 1.5 hrs, by coach usually 1.5–2 hrs.' },
            { kind: 'checklist', items: [
              'Ideal for 1 night: Saturday in Évora, Sunday at a winery or in Monsaraz',
              'Very hot in summer: in July–August, plan for a siesta and water',
              'Park outside the walls of the historic centre — the streets inside are narrow',
              'Book restaurants in advance, especially on Saturday evening'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'lisbon-longer-weekend',
      title: 'From Lisbon: if you have 2–3 days',
      content: [
        { kind: 'paragraph', text: 'If you are ready for a longer drive or a flight, it is easy to get from Lisbon to Coimbra, the Algarve or Madeira. This is no longer “there and back after lunch”, but a proper weekend with an overnight stay.' },
        { kind: 'checklist', items: [
          'Coimbra — around 2 hrs by Alfa Pendular/Intercidades train: university, Biblioteca Joanina, Mondego, a good stop between Lisbon and Porto',
          'Algarve — around 2.5–3 hrs by car to Faro/Albufeira/Lagos; the train to Faro is also possible, but beaches are easier with a car',
          'Lagos and Sagres — better for 2 nights: cliffs, Ponta da Piedade, sunsets, wind and surf',
          'Tavira — calmer than the western Algarve, good for couples and those who do not want a clubbing atmosphere',
          'Madeira — around a 1.5 hr flight from Lisboa to Funchal; 2 nights is doable, but 3–4 days is better because of the levadas and mountains',
          'For Madeira, hire a car only if you drive confidently: slopes, tunnels and parking in Funchal require calm nerves'
        ] },
        { kind: 'warning', text: 'Madeira and the Algarve remain destinations with strong tourist demand in 2026. A cheap flight does not mean a cheap trip: check baggage, transfer, car hire, deposit and parking costs.' }
      ]
    },
    {
      id: 'from-porto',
      title: 'From Porto: Douro, Aveiro, Viana, Galicia',
      content: [
        { kind: 'substeps', items: [
          { id: 'douro', title: 'Douro — around 1 hr to Amarante/Peso da Régua further on', content: [
            { kind: 'paragraph', text: 'The Douro is vineyards, miradouros, quintas and the road along the river. By car, it is easy to build a Porto–Amarante–Peso da Régua–Pinhão route. The train on the Linha do Douro is one of the most beautiful railway routes in the country.' },
            { kind: 'checklist', items: [
              'For a first time: Régua + Pinhão + tasting at a quinta',
              'For the train: sit by the window, check the CP timetable in advance',
              'For the car: the road is beautiful but winding — do not plan tastings without a sober driver',
              'Autumn during vindimas is more expensive, but especially beautiful'
            ] }
          ] },
          { id: 'aveiro', title: 'Aveiro — around 1 hr', content: [
            { kind: 'paragraph', text: 'The easiest day trip from Porto: canals, barcos moliceiros, ovos moles, Costa Nova with striped houses. By train from Porto Campanhã/São Bento it is usually 40–60 min.' },
            { kind: 'checklist', items: [
              'Without a car: Aveiro centre + bus/taxi to Costa Nova',
              'With a car: add Praia da Barra and the Farol da Barra lighthouse',
              'Good for guests visiting northern Portugal for the first time',
              'In winter, take a windbreaker: there is often strong wind by the lagoon and ocean'
            ] }
          ] },
          { id: 'viana-galicia', title: 'Viana do Castelo and Galicia — 1–2 hrs', content: [
            { kind: 'paragraph', text: 'Viana do Castelo is around 1 hr north: Santuário de Santa Luzia, beaches, the Atlantic, a calmer atmosphere than in Porto. Galicia in Spain is around 2 hrs to Vigo, or a little more to Santiago de Compostela if you are driving.' },
            { kind: 'checklist', items: [
              'Viana do Castelo is good for a day: centre, Santa Luzia, Praia do Cabedelo',
              'For Galicia, check documents: passport/Cartão de Cidadão/residence permit, car insurance and hire conditions for driving into Spain',
              'Vigo — a quick Spanish weekend with seafood',
              'Santiago de Compostela is better for 1 night, so you do not spend the whole day behind the wheel',
              'Remember the differences in parking rules, speed limits and traffic fines in Spain'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budget-and-season',
      title: 'Budget, season and beginner mistakes',
      content: [
        { kind: 'paragraph', text: 'Guidelines depend on the season, but for 2026 it is realistic to count not only transport and the hotel, but the whole bundle: toll roads, parking, fuel, food, entry tickets, low-cost airline baggage and taxi to the airport.' },
        { kind: 'checklist', items: [
          'The cheapest format: train/coach + 1 night in a guesthouse outside the centre',
          'The most convenient format for Arrábida, the Douro, the Algarve and Costa Nova is a car',
          'For Sintra, Cascais, Coimbra and Aveiro, a car is often not needed',
          'In August, avoid the Algarve without a booking: accommodation, restaurants and parking will be the main stress',
          'In January–March, hotel prices are good, but in the mountains and by the ocean you need warm clothes',
          'Easter, 25 de Abril, 1 de Maio, 10 de Junho, 15 de Agosto and 5 de Outubro often create long weekends',
          'If travelling with a dog, filter for pet-friendly alojamento and beach rules in advance',
          'If you do not have a NIF/Portuguese card, check whether the car park/machine accepts foreign cards; MB WAY is not available everywhere'
        ] },
        { kind: 'warning', text: 'Do not leave belongings visible in the car, especially by beaches, miradouros and tourist car parks. A smashed window for the sake of a backpack is a typical weekend-trip scenario.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa–Sintra or Lisboa–Cascais train', amountEURMin: 2.4, amountEURMax: 3.0, note: 'Guide price for a one-way trip with an urban transport card; check the current CP/Área Metropolitana de Lisboa fare' },
    { label: 'Porto–Aveiro train', amountEURMin: 4, amountEURMax: 10, note: 'Depends on the train type: urbano is cheaper, Intercidades/Alfa Pendular is more expensive' },
    { label: 'Budget night in a guesthouse off-peak', amountEURMin: 45, amountEURMax: 90, note: 'Per room, not per person; in the Algarve, Madeira, the Douro and on public holidays it may be significantly higher' },
    { label: 'Weekend car hire', amountEURMin: 35, amountEURMax: 120, note: 'Per day, excluding fuel and toll roads; the price depends on season, insurance, deposit and pick-up point' },
    { label: 'Lisboa–Madeira flight', amountEURMin: 60, amountEURMax: 220, note: 'Return without baggage when booked early; more expensive on public holidays and in summer' }
  ],
  sources: [
    { title: 'VisitPortugal — official tourism portal of Portugal', url: 'https://www.visitportugal.com', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'CP — train timetables and tickets', url: 'https://www.cp.pt/passageiros/en', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Rede Expressos — intercity coaches', url: 'https://rede-expressos.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANA/VINCI Airports — Portugal airports and flights', url: 'https://www.ana.pt/en', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
