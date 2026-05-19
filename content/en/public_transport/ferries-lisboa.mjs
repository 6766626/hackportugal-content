export default {
  editorialVoice: 'hackportugal',
  id: 'ferries-lisboa',
  categoryId: 'public_transport',
  title: 'Lisbon ferries — crossings over the Tejo and along the coast',
  tldr: 'Transtejo/Soflusa — ferries across the Tejo: Lisbon—Cacilhas (10 min, €1.40), Cais do Sodré—Trafaria—Porto Brandão, Belém—Trafaria, Terreiro do Paço—Barreiro/Montijo. The Navegante card is accepted. For tourists — Tejo Boat Tour. For beach lovers — Cacilhas + bus 124 to Costa da Caparica. In winter the timetable is reduced; check in advance at ttsl.pt.',
  tags: ['ferry', 'transtejo', 'soflusa', 'cacilhas', 'lisboa', 'tejo'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'routes',
      title: '⛴️ Routes across the Tejo',
      content: [
        { kind: 'substeps', items: [
          { id: 'cacilhas', title: 'Cais do Sodré ↔ Cacilhas (the most popular)', content: [
            { kind: 'checklist', items: [
              '⏱️ 10 min on the water',
              '🕐 Every 15–30 min 06:00–01:00',
              '💰 €1.40 (Navegante €0.90), Tejo 24h €6',
              '🍷 Cacilhas — an area of cafés and waterside beer houses, excellent fado',
              '🍤 Famous seafood: Restaurante Ponto Final',
              '🚌 From Cacilhas bus 124 → Costa da Caparica (beach)'
            ]}
          ]},
          { id: 'belem', title: 'Belém ↔ Trafaria', content: [
            { kind: 'checklist', items: [
              '⏱️ 15 min',
              '🕐 Every 30–45 min 07:00–22:00',
              '💰 €1.40',
              '🏰 Trafaria — a fishing village, with Costa da Caparica beaches nearby'
            ]}
          ]},
          { id: 'porto-brandao', title: 'Cais do Sodré ↔ Porto Brandão (via Trafaria)', content: [
            { kind: 'checklist', items: [
              '⏱️ 25–30 min',
              '🕐 Less frequent, 1–2 times per hour',
              '💰 €1.80',
              '🍷 Porto Brandão — a quiet fishing cove'
            ]}
          ]},
          { id: 'barreiro', title: 'Terreiro do Paço ↔ Barreiro / Montijo (Soflusa)', content: [
            { kind: 'checklist', items: [
              '⏱️ Barreiro 25 min, Montijo 30 min',
              '🕐 Every 30–60 min 06:00–23:00',
              '💰 Barreiro €2.50, Montijo €3.30',
              '🚂 From Barreiro, CP trains to Alentejo (Évora, Beja, Faro)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tickets',
      title: '🎫 Tickets',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Single tickets', content: [
            { kind: 'checklist', items: [
              '🎫 Ticket machine at the station (Cais do Sodré, Belém, Terreiro)',
              '💳 Card or cash',
              '⏰ The ticket is time-limited: 1 hour from validation',
              '🔁 During that time you can transfer to the metro or bus (one fare)'
            ]}
          ]},
          { id: 'navegante', title: 'Monthly Navegante pass', content: [
            { kind: 'checklist', items: [
              '🌐 Navegante Metropolitano (Lisbon — Margem Sul) includes ferries',
              '💰 €30/month — unlimited bus, metro, CP train and ferries',
              '🌟 The best-value option for residents of the north and south banks',
              '📲 Navegante card or Carris app'
            ]}
          ]},
          { id: 'tour', title: 'Tourist options', content: [
            { kind: 'checklist', items: [
              '🛥️ Yellow Boat (Hop-on Hop-off) — tourist ferries Belém + Cacilhas + centre, ≈€25/day',
              '🚢 Tejo Sunset Cruise — sunset, ≈€30/person',
              '⚓ Lisboa Sailing Tour — private cruise, from €50/person',
              '🏝️ Sesimbra/Setúbal Boat Tour — dolphins, ≈€50/person'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🚲 Bicycles on the ferry are free — a great plan: “Cacilhas + cycle to Costa da Caparica”',
          '🐶 Small animals in a carrier — free',
          '⛅ In winter the timetable is reduced, with night ferries only from Friday to Sunday',
          '🌊 Storm >2 m: ferries may be cancelled (rare, usually only Belém—Trafaria)',
          '🥪 There is no buffet on the ferry — bring food with you',
          '📸 Perfect sunset: Cacilhas → Cais do Sodré ferry at 19:00 in summer',
          '⚠️ Transport strike (greve) — ferries are cancelled; follow the media the day before'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cacilhas/Trafaria single ticket', amountEUR: 1.40 },
    { label: 'Barreiro single ticket', amountEUR: 2.50 },
    { label: 'Montijo single ticket', amountEUR: 3.30 },
    { label: 'Tejo 24h tourist ticket', amountEUR: 6 },
    { label: 'Navegante Metropolitano (unlimited)', amountEUR: 30, note: '€/month' }
  ],
  sources: [
    { title: 'Transtejo / Soflusa — official website', url: 'https://ttsl.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris Metropolitana — Navegante', url: 'https://www.carrismetropolitana.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
