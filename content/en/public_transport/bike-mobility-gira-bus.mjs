export default {
  editorialVoice: 'hackportugal',
  id: 'bike-mobility-gira-bus',
  categoryId: 'public_transport',
  title: 'GIRA, BUGA, U-Bike bike sharing and taking bicycles on transport',
  tldr: 'In Lisbon, the main bike-sharing system is GIRA by EMEL: you take a bicycle in the app, return it to a station, and it is convenient for short 15–45 minute trips. Aveiro has the municipal BUGA, historically a free city service with local rules. U-Bike is not a tourist rental scheme, but campus bicycles for university students/staff. On CP, bicycles are usually carried free of charge, but on Alfa Pendular/Intercidades you need bicycle spaces and advance booking; on the Lisboa/Porto metro — it is allowed if there is space and the limits are respected.',
  tags: ['gira', 'buga', 'bicycle', 'cp', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'gira-lisboa',
      title: 'GIRA Lisboa: how to use it 🚲',
      content: [
        { kind: 'paragraph', text: 'GIRA is the Lisboa city bicycle system, operated by EMEL. It is a station-based service: the bicycle must be taken from and returned to an official GIRA station, not left by your building entrance.' },
        { kind: 'checklist', items: [
          'Download the GIRA — Bicicletas de Lisboa app.',
          'Register with an email address, phone number and payment card.',
          'Choose a tariff in the app: daily, monthly or annual — the current price is shown before payment.',
          'Check the station on the map: green/available bicycles and free docks for return.',
          'Unlock the bicycle via the app at the station.',
          'Before setting off, check the brakes, saddle, lights, tyres and lock engagement.',
          'Return the bicycle only to a free dock at a GIRA station and wait for confirmation in the app.',
          'If the dock has not secured the bicycle, do not leave: try another dock or open support in the app.'
        ] },
        { kind: 'paragraph', text: 'GIRA works best as a “last mile” option: from the metro/Comboios to home or the office. For trips over Lisboa’s hills, an e-bike is usually more practical than a regular bicycle.' },
        { kind: 'warning', text: 'Do not rely on old blogs with GIRA prices. In 2026, tariffs and penalties must be checked in the app before purchase: EMEL changes the conditions, and the blocking amount/penalty depends on the type of subscription and the incident.' }
      ]
    },
    {
      id: 'buga-aveiro',
      title: 'BUGA Aveiro: the city bicycle in Aveiro',
      content: [
        { kind: 'paragraph', text: 'BUGA — Bicicleta de Utilização Gratuita de Aveiro — is the municipal bicycle service in Aveiro. Its logic differs from GIRA: it is a local Câmara Municipal de Aveiro system, not a national network.' },
        { kind: 'checklist', items: [
          'Check the current BUGA stations/points on the Câmara Municipal de Aveiro website or in Aveiro city information.',
          'Confirm the access format: app, registration with the operator or collection through a service point — rules may change by season.',
          'Take an identity document: a passport, Cartão de Cidadão or residence permit may be requested for registration.',
          'Check the opening hours: municipal services often do not operate like 24/7 private rental.',
          'Use BUGA for short trips around Aveiro’s flat centre, the university, canals and railway station.',
          'Return the bicycle only to an authorised place, otherwise your account may be blocked or a fine may apply under the service rules.'
        ] },
        { kind: 'paragraph', text: 'Aveiro is one of Portugal’s most convenient cities for a regular bicycle: the terrain is flat and distances are short. But tourist traffic around the canals is high, so in the centre it is better to ride slowly and not expect a dedicated cycle lane everywhere.' }
      ]
    },
    {
      id: 'ubike-students',
      title: 'U-Bike: an option for university students and staff',
      content: [
        { kind: 'paragraph', text: 'U-Bike Portugal is a bicycle mobility programme for academic campuses. It is not city bike sharing “for everyone”: access depends on the specific university or polytechnic institute.' },
        { kind: 'checklist', items: [
          'Check your university’s website: Universidade de Lisboa, Universidade do Porto, Universidade de Aveiro, Universidade de Coimbra and other campuses may have different rules.',
          'Access is usually granted to students, lecturers and staff with an active university account.',
          'Registration via serviços académicos, cartão de estudante or an internal portal may be required.',
          'Some campuses charge a deposit or maintenance fee; others provide a bicycle free of charge for a semester/year.',
          'Confirm where the bicycle may be stored: at home, on campus or only in special parking areas.',
          'Check responsibility for theft, battery damage and absence of a lock — this is often set out in the termo de responsabilidade.'
        ] },
        { kind: 'warning', text: 'Do not buy a separate bicycle before checking U-Bike: if you are a student at a participating university, a campus bicycle may cover the daily “home — metro/comboio — faculty” route almost free of charge.' }
      ]
    },
    {
      id: 'cp-trains',
      title: 'Taking a bicycle on CP: urban, regional and long-distance trains',
      content: [
        { kind: 'paragraph', text: 'CP allows bicycles to be carried, but the rules depend on the type of train. The basic principle in 2026: a bicycle is carried free of charge if there is space and safety conditions are met; on long-distance trains, you must book a bicycle space in advance.' },
        { kind: 'checklist', items: [
          'Urbanos de Lisboa, Porto and Coimbra: bicycles can usually be carried free of charge if the carriage is not overcrowded.',
          'Regional and InterRegional: carriage is possible subject to available space; train staff may refuse if the bicycle obstructs passage or safety.',
          'Alfa Pendular and Intercidades: you need a train with bicycle spaces and advance booking when buying the ticket.',
          'A folded folding bicycle is usually considered luggage if it does not inconvenience passengers.',
          'Do not place the bicycle by doors, emergency exits, in the aisle or in spaces for people with reduced mobility.',
          'Remove bags/luggage if they increase the size and prevent securing the bicycle.',
          'Allow more time for connections: lifts at stations may not work, and stairs with a bicycle are inconvenient.',
          'If travelling as a group, check the limit on spaces: several bicycles on one Alfa/IC may not be available.'
        ] },
        { kind: 'warning', text: 'The main mistake is buying a Lisboa–Porto ticket on Intercidades/Alfa Pendular and turning up with a regular bicycle without a bike slot. The ticket inspector is not obliged to allow the bicycle on board if the space has not been booked or the train is not equipped.' }
      ]
    },
    {
      id: 'metro-and-city-rules',
      title: 'Metro, buses and city practice',
      content: [
        { kind: 'paragraph', text: 'On the Lisboa and Porto metro, bicycles are allowed subject to the operator’s rules: not at peak times if the carriage is overcrowded; do not block doors; use lifts where possible. Check the specific limits by carriage and time with Metropolitano de Lisboa and Metro do Porto: they may be updated without changes to tickets.' },
        { kind: 'checklist', items: [
          'On the metro, enter at the end of the carriage and hold the bicycle by hand throughout the journey.',
          'Do not occupy spaces marked for wheelchairs, pushchairs and priority passengers.',
          'It is better not to use an escalator with a regular bicycle: use a lift or stairs.',
          'Regular bicycles are generally not accepted on Carris/STCP city buses; a folding bicycle is allowed only if folded and not obstructing others as luggage.',
          'On Lisboa trams, elevadores and funiculars, a regular bicycle is practically unsuitable for carriage.',
          'For night trips, use a white front light and a red rear light: this is a safety issue, not only about fines.',
          'A helmet for adults in the city is not universally mandatory, but for an e-bike and fast routes over Lisboa’s cobblestones it is highly advisable.'
        ] },
        { kind: 'paragraph', text: 'A practical combination for an expat: GIRA/your own bicycle to a metro or CP station, train at no extra charge, then a short section by bicycle. This is often faster than waiting for a bus on the last mile.' }
      ]
    },
    {
      id: 'theft-parking',
      title: 'Parking and theft: what really matters',
      content: [
        { kind: 'paragraph', text: 'Bicycle theft in Lisboa, Porto, Aveiro and university towns is a common problem. A cheap cable lock is not protection, but an invitation.' },
        { kind: 'checklist', items: [
          'Buy a medium/high-level U-lock or folding lock, not a thin cable.',
          'Lock the frame and at least one wheel to a fixed stand.',
          'Do not lock to road signs, trees or private railings if this is prohibited or obstructs passage.',
          'Do not leave removable lights, bags, a phone holder or an e-bike battery outside.',
          'Photograph the frame serial number and purchase receipt.',
          'For an expensive e-bike, check cover under seguro multirriscos or take out separate theft insurance.',
          'In a condominium, confirm the storage rules: a bicycle in the corridor may breach the regulamento do condomínio and fire access routes.'
        ] },
        { kind: 'warning', text: 'If the bicycle is stolen, file a queixa with the PSP/GNR with the serial number and photo. Without the number, the chances of finding the bicycle are minimal, and the insurer may refuse cover.' }
      ]
    }
  ],
  costs: [
    { label: 'GIRA Lisboa', amountEURMin: 2, amountEURMax: 25, note: 'Indicative range for typical daily/monthly/annual passes; check the exact price and penalties in the GIRA app before payment.' },
    { label: 'BUGA Aveiro', amountEUR: 0, note: 'Municipal service historically free of charge; registration, deposit or collection arrangements depend on the current Câmara Municipal de Aveiro rules.' },
    { label: 'Taking a bicycle on CP', amountEUR: 0, note: 'Usually free of charge, but on Alfa Pendular/Intercidades a train with bike places and advance booking is required.' },
    { label: 'Good U-lock', amountEURMin: 35, amountEURMax: 90, note: 'Realistic price in Decathlon/bicycle shops; a cheap cable does not protect against theft.' }
  ],
  sources: [
    { title: 'GIRA — Bicicletas de Lisboa: official service website', url: 'https://www.gira-bicicletasdelisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP — rules for carrying bicycles on trains', url: 'https://www.cp.pt/passageiros/pt/comprar-bilhetes/bilhetes/bicicletas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'U-Bike Portugal — academic bicycle mobility programme', url: 'https://www.u-bike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Aveiro — municipal BUGA information', url: 'https://www.cm-aveiro.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
