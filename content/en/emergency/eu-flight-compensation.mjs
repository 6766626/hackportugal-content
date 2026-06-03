export default {
  editorialVoice: 'hackportugal',
  id: 'eu-flight-compensation',
  categoryId: 'emergency_rights',
  title: 'Compensation for a cancelled or delayed flight (EU 261/2004)',
  tldr: 'Regulation EU 261/2004 gives fixed compensation of €250 / €400 / €600 for cancelled flights or delays of ≥ 3 hours, as well as the right to care (food, hotel) for flights from PT or to PT on EU airlines. Submit a claim to the airline within 30 days. Refusal / silence — complaint to ANAC (Autoridade Nacional da Aviação Civil).\n\nYou can also use services such as AirHelp / Flightright for a 25% commission.',
  tags: ['flight', 'compensation', 'eu 261', 'anac', 'airline'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-applies',
      title: 'When it applies',
      content: [
        { kind: 'checklist', items: [
          '✈️ Flight from an airport in the EU (any carrier) OR to an EU airport on an EU carrier',
          '🕐 Delay of ≥ 3 hours on arrival',
          '❌ Cancellation < 14 days before departure',
          '🪑 Denied boarding due to overbooking',
          '✋ Airline responsibility (not extraordinary circumstances — lightning, a strike by staff who are not its employees)'
        ]},
        { kind: 'warning', text: 'Force majeure (thunderstorm, earthquake, political strikes) — compensation is not due, but the right to care still applies.' }
      ]
    },
    {
      id: 'amounts',
      title: 'Compensation amounts',
      content: [
        { kind: 'checklist', items: [
          '🌍 Up to 1500 km: €250',
          '🌎 1500–3500 km or EU > 1500 km: €400',
          '🌏 > 3500 km: €600',
          '🎟️ These are fixed amounts and do NOT depend on the ticket price',
          '👨‍👩‍👧 Separately for each passenger',
          '🔁 Plus: ticket refund OR re-routing + right to care'
        ]}
      ]
    },
    {
      id: 'care-rights',
      title: 'Right to care — while you wait',
      content: [
        { kind: 'paragraph', text: 'For delays of ≥ 2 hours, the airline MUST provide:' },
        { kind: 'checklist', items: [
          '🍔 Meals and drinks proportionate to the waiting time',
          '📞 2 phone calls / emails',
          '🏨 Hotel — if the delay is overnight',
          '🚕 Transfer to the hotel',
          '🔄 If refused — keep receipts, then claim reimbursement'
        ]}
      ]
    },
    {
      id: 'how-to-claim',
      title: 'How to submit a claim',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: '1. Gather evidence', content: [
            { kind: 'checklist', items: [
              'Boarding pass',
              'Booking confirmation',
              'Photo of the departures board showing the delay / screenshot of the email',
              'Receipts for food / transfer / hotel (for reimbursement of care-related expenses)',
              'Witnesses (name, contact details of nearby passengers)'
            ]}
          ]},
          { id: 'h2', title: '2. Form on the airline website', content: [
            { kind: 'checklist', items: [
              'TAP: flytap.com/claims',
              'Ryanair: ryanair.com/help',
              'easyJet: easyjet.com',
              'Wizz: wizzair.com',
              'Response time: 2–6 weeks',
              'They often refuse — move on to step 3'
            ]}
          ]},
          { id: 'h3', title: '3. Complaint to the regulator', content: [
            { kind: 'checklist', items: [
              'ANAC (PT) — anac.pt → Consumidor → Reclamação',
              'CIAC arbitration — for claims < €5,000',
              'Livro de Reclamações (complaints book) — paper version at the airport',
              'Review period: 3–6 months',
              'ANAC can fine the airline'
            ]}
          ]},
          { id: 'h4', title: '4. Alternative: services', content: [
            { kind: 'paragraph', text: 'AirHelp, Flightright, ClaimCompass — charge a 25–35% commission, but do everything for you. Payment only if they win. Good for complex cases or if your time is worth more.' }
          ]},
          { id: 'h5', title: '5. Last resort: court', content: [
            { kind: 'paragraph', text: 'Julgado de Paz (small claims court) for claims < €15,000. Fee €70. The airline often agrees before court.' }
          ]}
        ]}
      ]
    },
    {
      id: 'examples',
      title: 'Examples',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Lisboa → London, 4-hour delay', content: [
            { kind: 'paragraph', text: 'Distance ~1550 km → compensation €400 per passenger. If the cause is technical — yes. If it is a thunderstorm — no.' }
          ]},
          { id: 'e2', title: 'Lisboa → Moscow (cancelled)', content: [
            { kind: 'paragraph', text: 'No direct flights since 2022. Flight Lisboa → Istanbul (3000 km) → compensation €400. For Istanbul → Moscow — not EU 261, no compensation.' }
          ]},
          { id: 'e3', title: 'Ryanair cancelled Porto → Madrid', content: [
            { kind: 'paragraph', text: '< 1500 km → €250. Plus a choice: ticket refund OR re-routing on the next flight.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Compensation < 1500 km', amountEUR: 250 },
    { label: 'Compensation 1500–3500 km', amountEUR: 400 },
    { label: 'Compensation > 3500 km', amountEUR: 600 },
    { label: 'AirHelp services (commission)', amountEUR: 0, note: '25–35% of the amount' }
  ],
  sources: [
    { title: 'Regulation (EC) No 261/2004', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'ANAC — Passenger rights', url: 'https://www.anac.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Complaints Book', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU — Passenger rights', url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
