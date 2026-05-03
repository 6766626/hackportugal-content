export default {
  editorialVoice: 'hackportugal',
  id: 'fcmp-trail-running',
  categoryId: 'food_leisure',
  title: 'Trail running and mountain running — federation card FCMP / FPA',
  tldr: 'Portugal is a country of a thousand trail races: Madeira Island Ultra Trail (MIUT), Trail dos Fenómenos in Açores, Templários trail, Costa Vicentina ultra, and hundreds of local ones. To take part in trail races you need a sports medical certificate (atestado médico-desportivo, ~€30–50) and often a federation card: FCMP (Federação Camp. de Montanhismo e Escalada) for trail courses or FPA (Federação Portuguesa de Atletismo) for road races. Free local runs — no card. Serious ultras — require ITRA points and insurance. Federation card ~€30–60/year, there is an online safety course + processing.',
  tags: ['trail', 'running', 'fcmp', 'fpa', 'marathon'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'overview',
      title: 'When you need it and when you don’t',
      content: [
        { kind: 'paragraph', text: 'There are thousands of trail-running events in Portugal. They are regulated by two federations:' },
        { kind: 'checklist', items: [
          'FCMP (Federação de Campismo e Montanhismo de Portugal): trail running, climbing, mountaineering, orienteering. Most trail races',
          'FPA (Federação Portuguesa de Atletismo): road races, marathons, half-marathons, IAAF events',
          'FPC (Federação Portuguesa de Ciclismo): for MTB and cyclocross events',
          'ITRA (international): ultra-trails and UTMB qualifiers'
        ] },
        { kind: 'paragraph', text: 'When a federation card is required:' },
        { kind: 'checklist', items: [
          'FCMP/FPA card: for most official trail/road races',
          'Free/charity local runs — a medical certificate is usually enough',
          'Ultra trails (50K+): often require ITRA points + insurance + federation card',
          'Under 18s: card is often free or discounted with parental consent',
          'Tourists (EU foreigners): you can use your national card in Portugal (FFA France, RFEA Spain, FIDAL Italy, etc.)',
          'Third countries (Russia, Ukraine, Brazil): need either a Portuguese card or a “day licence” (~€5–15/race) if the organiser offers it'
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
            title: 'Sports medical exam',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico-desportivo: a document from a sports doctor confirming fitness for exertion',
                'Can be done with your family doctor or at a sports centre',
                'Cost: €30–50, without SNS — €60–100',
                'Validity: 1 year up to age 35, 6 months for older',
                'Includes: ECG, blood pressure measurement, brief examination, clearance decision'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Register with a local club',
            content: [
              { kind: 'paragraph', text: 'A federation card is issued via a club (the federation does not work directly with individuals). You need to join any FCMP club — there are hundreds.' },
              { kind: 'checklist', items: [
                'Local clubs: search for "clube trail running + your city"',
                'Examples: Crónicas do Trail (Lisboa), Trail dos Fenómenos (Açores), Lousã Trail Sports',
                'Club membership: €20–100/year — club fee',
                'In return: training sessions, race discounts, kit, community'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Federation card',
            content: [
              { kind: 'checklist', items: [
                'FCMP card: €30–60/year via the club',
                'Includes: liability insurance + accident cover',
                'Sits on top of the medical certificate (you must have one)',
                'Valid from payment until 31 December of the current year',
                'You receive a physical card + a digital profile',
                'You may be able to add a Skin-card to Apple Wallet (some clubs provide it)'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'big-races',
      title: 'Famous races — what to book',
      content: [
        { kind: 'checklist', items: [
          'Madeira Island Ultra Trail (MIUT): 115 km route across the whole of Madeira. One of the best ultra-trails in the world. Registration in August for the following April. ~€150',
          'Trans Portugal Race: 350 km across Portugal, 7 days',
          'Trail dos Fenómenos (Açores): 80 km on São Miguel island',
          'Templários Trail (Tomar): 30/50/100 km in historic locations',
          'Costa Vicentina Ultra: along the west coast',
          'Maratona de Lisboa (Easter Saturday): IAAF road, 10,000 participants',
          'Maratona do Porto: October, the second largest in Portugal',
          'Meia Maratona de Lisboa: March, starts from the 25 de Abril bridge',
          'Serra da Estrela SkyRace: at the highest point of the mainland'
        ] },
        { kind: 'paragraph', text: 'Booking platforms:' },
        { kind: 'checklist', items: [
          'PortugalCorrida (local), Trail-running.pt: nationwide calendar',
          'My Sportify: iOS/Android app',
          'ITRA: international calendar and ranking',
          'FCMP website: list of their own events',
          'Local Câmara Municipal: organises tourism runs'
        ] }
      ]
    },
    {
      id: 'safety-itra',
      title: 'Safety and ITRA points',
      content: [
        { kind: 'paragraph', text: 'Serious trail running is not just running. Preparation is paramount.' },
        { kind: 'checklist', items: [
          'ITRA points: an international rating system. Each completed trail gives points depending on length and difficulty',
          'For UTMB: you need 4–15 points depending on the distance (CCC, TDS, OCC)',
          'For UTLO (Ultra Trail Lake Onega): they require ITRA + medical',
          'Mandatory safety kit for ultras: aluminium survival blanket, spare socks, phone with full battery, food, water 1.5 L+, GPS',
          'Drop bags: at big ultras — leave spare clothing at checkpoints',
          'Coach or personal trainer: €50–100/hour, important for your first ultra'
        ] },
        { kind: 'warning', text: 'Trail running in Portugal in summer carries a high risk of heatstroke. Starts in July–August are moved to 05:00–06:00 for a reason. Do not attempt to run an ultra alone without support and without knowing the route.' }
      ]
    },
    {
      id: 'gear',
      title: 'Gear and where to buy',
      content: [
        { kind: 'checklist', items: [
          'Trail shoes: Salomon, Hoka, Altra, La Sportiva — €100–200 per pair',
          'Hydration vest 5L+: Salomon, UltrAspire, Decathlon — €50–150',
          'Soft flasks or reservoir: €15–50',
          'GPS watch: Garmin Fenix / Suunto Vertical — €400–1000',
          'Headlamp: Petzl, Black Diamond — €50–150',
          'Survival blanket: €5–15',
          'Shops: Decathlon (budget), Sport Zone, Workplace Sports, Salomon Store Lisboa',
          'Online: Wiggle, BikeFit, Amazon EU'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Sports medical certificate (atestado médico-desportivo)', amountEURMin: 30, amountEURMax: 100 },
    { label: 'FCMP club membership', amountEURMin: 20, amountEURMax: 100, note: 'Per year' },
    { label: 'FCMP card', amountEURMin: 30, amountEURMax: 60, note: 'Per year' },
    { label: 'Small trail race (10–20 km)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Marathon registration', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Ultra (50–100 km)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'MIUT (115 km Madeira)', amountEUR: 160, note: 'With ITRA fee' },
    { label: 'Basic kit (shoes + vest)', amountEURMin: 200, amountEURMax: 400 },
    { label: 'Advanced GPS watch', amountEURMin: 500, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'IPDJ — official sports federations (FCMP, FPA recognised)', url: 'https://ipdj.gov.pt/federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registration of sports practitioners in federations', url: 'https://ipdj.gov.pt/registo-de-praticantes-desportivos-em-federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 102/2018 — sports medical examinations', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-2018-117203174', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 248-A/2008 — legal framework for insurance contracts of sports federations', url: 'https://dre.pt/dre/detalhe/decreto-lei/248-a-2008-242876', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
