export default {
  editorialVoice: 'hackportugal',
  id: 'ride-sharing-apps',
  categoryId: 'auto_trips',
  title: 'Uber / Bolt / FreeNow / BlaBlaCar in Portugal',
  tldr: 'Uber and Bolt are the main apps in big cities and tourist areas; coverage can be weak in small towns, the interior and on the islands. Bolt is usually 10–20% cheaper. FreeNow is official taxis via an app. A regular taxi (black-and-green cars) is metered; from the airport it runs on the meter or on a fixed-price voucher. BlaBlaCar is for ride-sharing between cities.',
  tags: ['uber', 'bolt', 'taxi', 'blablacar'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'apps',
      title: 'Main apps',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Uber', content: [
            { kind: 'paragraph', text: 'Operates in Lisbon, Porto, the Algarve, Braga, Coimbra and Aveiro. UberX (standard), Uber Comfort, Uber Black. Often used for airport journeys.' },
          ]},
          { id: 'a2', title: 'Bolt', content: [
            { kind: 'paragraph', text: 'Estonian company. Usually 10–20% cheaper than Uber. More cars in large cities. Bolt categories: Económica / Standard / XL.' }
          ]},
          { id: 'a3', title: 'FreeNow (formerly mytaxi)', content: [
            { kind: 'paragraph', text: 'Official taxis (black-and-green) via an app. Metered fare. Often more predictable at peak times, when Uber/Bolt surge pricing applies.' }
          ]},
          { id: 'a4', title: 'Regular taxi', content: [
            { kind: 'paragraph', text: 'You can hail one on the street, find one at a rank or call by phone. Metered: as a rough guide, daytime fare from about €3.25 base + ~€0.47/km, higher at night and on weekends; surcharges for luggage, waiting and tolls may apply. From the airport a regular taxi also runs on the meter; a fixed price is only available via the official Taxi Voucher counter.' }
          ]},
          { id: 'a5', title: 'BlaBlaCar', content: [
            { kind: 'paragraph', text: 'Ride-sharing between cities. Lisbon—Porto can cost €15–25 (cheaper than the bus). Lisbon—Madrid is a popular route. Payment through the app, no cash.' }
          ]}
        ]}
      ]
    },
    {
      id: 'price-comparison',
      title: 'Price guide (Lisbon)',
      content: [
        { kind: 'checklist', items: [
          'Airport → Baixa (Lisbon): Uber/Bolt €10–15, taxi €15–20, FreeNow ~€15',
          'Baixa → Belém: Uber/Bolt €7–10, taxi €10–14',
          'Lisbon → Cascais: Uber/Bolt €25–35, taxi €40–50',
          'Short journeys of 5–10 min: usually €4–6',
          'Peak time / surge pricing: up to x2'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Compare Uber and Bolt at the same moment — the price changes minute by minute',
          'Uber has Uber Pool (shared rides) — cheaper, but slower (currently not everywhere)',
          'Avoid taxi traps in tourist areas — they may start the meter before you get in or take a crooked route',
          'For long journeys, BlaBlaCar is more economical: Lisbon—Porto from €15 versus €20–40 for the train',
          'Tips are not expected: just round up the fare or leave a little in the app for good service — 5–10% is not the norm',
          'Payment: international Visa/Mastercard and MB WAY usually work (sometimes Apple Pay / Google Pay) — a foreign card may be declined, so keep a backup',
          'If a taxi overcharges you — note the number and complain to Autoridade de Mobilidade e Transportes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AMT — Portugal transport regulator', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — individual transport', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei n.º 45/2018, de 10 de agosto — TVDE regulation (Uber/Bolt)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/45-2018-115991688', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
