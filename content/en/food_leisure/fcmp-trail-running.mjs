export default {
  editorialVoice: 'hackportugal',
  id: 'fcmp-trail-running',
  categoryId: 'food_leisure',
  title: 'Trail running and mountain running — federation card FCMP / FPA',
  tldr: 'Portugal is a country of a thousand trail races: Madeira Island Ultra Trail (MIUT), Trail dos Fenómenos in the Açores, Templários trail, Costa Vicentina ultra, and hundreds of local ones. To take part in trail races you need a sports medical certificate (atestado médico-desportivo, ~€30-50) and often a federation card: FCMP (Federação de Campismo e Montanhismo de Portugal) for trail-running routes or FPA (Federação Portuguesa de Atletismo) for road races. Free local races — no card. Serious ultras — require ITRA points and insurance. Federation card ~€30-60/year, with an online safety course + registration.',
  tags: ['trail', 'running', 'fcmp', 'fpa', 'marathon'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'overview',
      title: 'When it is needed and when it is not',
      content: [
        { kind: 'paragraph', text: 'Portugal has thousands of trail-running events. They are regulated by two federations:' },
        { kind: 'checklist', items: [
          'FCMP (Federação de Campismo e Montanhismo de Portugal): trail running, climbing, mountaineering, orienteering. Most trail races',
          'FPA (Federação Portuguesa de Atletismo): road races, marathons, halfs, IAAF events',
          'FPC (Federação Portuguesa de Ciclismo): for MTB and cyclocross events',
          'ITRA (international): ultratrails and UTMB qualifiers'
        ] },
        { kind: 'paragraph', text: 'When a federation card is mandatory:' },
        { kind: 'checklist', items: [
          'FCMP/FPA card: for most official trail/road races',
          'Free / charity local races — a medical certificate is usually enough',
          'Ultra trails (50K+): often require ITRA points + insurance + federation card',
          'Teenagers under 18: the card is often free or discounted with parental consent',
          'Tourists (foreigners from the EU): you can use your national card in Portugal (FFA France, RFEA Spain, FIDAL Italy, etc.)',
          'Third countries (Russia, Ukraine, Brazil): you need either a Portuguese card or a "day licence" (~€5-15/race) if the organiser offers it'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Getting an FCMP card — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Sports medical examination',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico-desportivo: a document from a sports doctor confirming fitness for physical exertion',
                'You can get it from a family doctor or at a sports centre',
                'Cost: €30-50, without SNS — €60-100',
                'Validity: 1 year, renewed in the month of your birthday',
                'Includes: ECG, blood pressure measurement, brief examination, conclusion on clearance to participate'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Registration with a local club',
            content: [
              { kind: 'paragraph', text: 'A federation card is issued through a club (the federation does not work directly with individuals). You need to join any FCMP club — there are hundreds of them.' },
              { kind: 'checklist', items: [
                'Local clubs: search for "clube trail running + your city"',
                'Examples: Crónicas do Trail (Lisboa), Trail dos Fenómenos (Açores), Lousã Trail Sports',
                'Club membership: €20-100/year — club fee',
                'In return: training sessions, race discounts, kit, community'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Federation card',
            content: [
              { kind: 'checklist', items: [
                'FCMP card: €30-60/year through a club',
                'Includes: insurance liability + accident coverage',
                'It is added on top of the medical certificate (you must have one)',
                'Valid from the moment of payment until 31 December of the current year',
                'You receive a physical card + digital profile',
                'You can add a skin-card to Apple Wallet (some clubs do this)'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'big-races',
      title: 'Well-known races — what to book',
      content: [
        { kind: 'checklist', items: [
          'Madeira Island Ultra Trail (MIUT): 115 km route across the whole of Madeira. One of the best ultratrails in the world. Registration opens in August for the following April. ~€150',
          'Trans Portugal Race: 350 km across the whole of Portugal, 7 days',
          'Trail dos Fenómenos (Açores): 80 km around São Miguel island',
          'Templários Trail (Tomar): 30/50/100 km through historic sites',
          'Costa Vicentina Ultra: along the west coast',
          'Maratona de Lisboa (Easter Saturday): IAAF road, 10,000 participants',
          'Maratona do Porto: October, the second largest in Portugal',
          'Meia Maratona de Lisboa: March, starts from the 25 de Abril bridge',
          'Serra da Estrela SkyRace: at the highest point of mainland Portugal'
        ] },
        { kind: 'paragraph', text: 'Booking platforms:' },
        { kind: 'checklist', items: [
          'PortugalCorrida (locally), Trail-running.pt: nationwide calendar',
          'My Sportify: iOS/Android app',
          'ITRA: international calendar and ranking',
          'FCMP website: list of its own races',
          'Local Câmara Municipal: organises tourist races'
        ] }
      ]
    },
    {
      id: 'safety-itra',
      title: 'Safety and ITRA points',
      content: [
        { kind: 'paragraph', text: 'Serious trail running is not just running. Preparation matters more than anything.' },
        { kind: 'checklist', items: [
          'ITRA points: international rating system. Each completed trail gives points depending on length and difficulty',
          'For UTMB: you need 4-15 points depending on the distance (CCC, TDS, OCC)',
          'For UTLO (Ultra Trail Lake Onega): ITRA + medical are required',
          'Mandatory safe equipment list for ultras: aluminium survival blanket, spare socks, phone with full battery, food, water 1.5 L+, GPS',
          'Drop bags: at major ultras, you leave spare clothes at check points',
          'Coach or personal trainer: €50-100/hour, important for a first ultra'
        ] },
        { kind: 'warning', text: 'Trail running in Portugal in summer carries a high risk of heatstroke. Races in July-August are moved to 5:00-6:00 in the morning for a reason. Do not try to run an ultra alone without support and without knowing the route.' }
      ]
    },
    {
      id: 'gear',
      title: 'Equipment and where to buy it',
      content: [
        { kind: 'checklist', items: [
          'Trail shoes: Salomon, Hoka, Altra, La Sportiva — €100-200 per pair',
          'Hydration vest 5L+: Salomon, UltrAspire, Decathlon — €50-150',
          'Bottles or reservoir: €15-50',
          'GPS watch: Garmin Fenix / Suunto Vertical — €400-1000',
          'Head torch: Petzl, Black Diamond — €50-150',
          'Survival blanket: €5-15',
          'Shops: Decathlon (budget), Sport Zone, Workplace Sports, Salomon Store Lisboa',
          'Online: Wiggle, BikeFit, Amazon EU'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Atestado médico-desportivo', amountEURMin: 30, amountEURMax: 100 },
    { label: 'FCMP club membership', amountEURMin: 20, amountEURMax: 100, note: 'Per year' },
    { label: 'FCMP card', amountEURMin: 30, amountEURMax: 60, note: 'Per year' },
    { label: 'Small trail race (10-20 km)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Marathon registration', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Ultra (50-100 km)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'MIUT (115 km Madeira)', amountEUR: 160, note: 'With ITRA fee' },
    { label: 'Basic kit (shoes + vest)', amountEURMin: 200, amountEURMax: 400 },
    { label: 'Advanced GPS watch', amountEURMin: 500, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'IPDJ — official sports federations (FCMP, FPA recognised)', url: 'https://ipdj.gov.pt/federacoes-desportivas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — sports practitioners register', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — sports medical examination (Decreto-Lei 345/99 + Lei 5/2007 + Despacho 9613/2020)', url: 'https://ipdj.gov.pt/exame-medico-desportivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 10/2009 — legal regime for mandatory sports insurance (seguro desportivo)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2009-397323', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'IPDJ — seguro desportivo (mandatory sports insurance)', url: 'https://ipdj.gov.pt/seguro-desportivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
