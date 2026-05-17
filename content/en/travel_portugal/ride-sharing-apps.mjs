export default {
  editorialVoice: 'hackportugal',
  id: 'ride-sharing-apps',
  categoryId: 'auto_trips',
  title: 'Uber / Bolt / FreeNow / BlaBlaCar in Portugal',
  tldr: 'Uber and Bolt are the leaders. They operate across the country. Bolt is usually 10–20% cheaper. FreeNow is official taxis via an app. A regular taxi (black-and-green cars) is metered and more expensive at the airport. BlaBlaCar is for ride-sharing between cities.',
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
            { kind: 'paragraph', text: 'You can hail one on the street, find one at a rank or call by phone. Tariff 1 (day): starting fare €3.25 + €0.47/km. Tariff 2 (night, weekends): +20%. Airport — fixed prices by destination.' }
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
          'Tips: 5–10% is customary in Portugal for Uber/Bolt (you can leave it in the app)',
          'Payment: any international card + MB WAY',
          'If a taxi overcharges you — note the number and complain to Autoridade de Mobilidade e Transportes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AMT — Portugal transport regulator', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — individual transport', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 45/2018 — TVDE regulation (Uber/Bolt)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/45-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
