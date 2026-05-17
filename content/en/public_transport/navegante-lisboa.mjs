export default {
  editorialVoice: 'hackportugal',
  id: 'navegante-lisboa',
  categoryId: 'public_transport',
  title: 'Navegante — Greater Lisbon travel pass',
  tldr: 'Navegante is a single travel pass for the Lisboa region: metro, Carris buses, CP trains, Transtejo river ferries, Fertagus, MTS. Two main types: monthly Metropolitano (€40) or Municipal (€30). Children up to 12 — free (since 2024), children aged 13–18 and students — €20. It can be bought from a metro ticket machine, Carris offices or via the app.',
  tags: ['navegante', 'travel pass', 'lisbon', 'metro', 'bus'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Types of cards',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Navegante Metropolitano (€40/month)', content: [
            { kind: 'paragraph', text: 'Works across the ENTIRE Lisboa metropolitan area (Lisboa + Sintra + Cascais + Almada + Loures + Odivelas + Vila Franca + Mafra + 10 others). Covers the metro, Carris, CP suburban trains, Transtejo, Fertagus, MTS Seixal. The best choice if you travel between municipalities.' }
          ]},
          { id: 't2', title: 'Navegante Municipal (€30/month)', content: [
            { kind: 'paragraph', text: 'Only in YOUR municipality. For a Lisboa resident — only Lisboa (including the metro + Carris). For a Cascais resident — only Cascais + CP within the municipality. Does NOT work outside the municipality boundary.' }
          ]},
          { id: 't3', title: 'Navegante Social / discounts', content: [
            { kind: 'checklist', items: [
              'Children up to 12 — FREE (since 2024)',
              'Ages 13–18 + students up to 23 — €20/month',
              'Seniors 65+ — €20/month',
              'Refugees / social support recipients — up to 50%'
            ]}
          ]},
          { id: 't4', title: 'Zapping — pay per journey', content: [
            { kind: 'paragraph', text: 'Prepaid balance on a Navegante card. A journey is around €1.80 on the metro, €2 on a bus. 15% discount compared with the standard fare. For occasional journeys.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get it',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Physical Navegante card (plastic card)', content: [
            { kind: 'checklist', items: [
              'Go to any Metro Lisboa kiosk or Carris office',
              'Documents: Cartão de Cidadão/residence permit + photo',
              'First card: €6 + first monthly travel pass',
              'Issued immediately',
              'The card is valid indefinitely'
            ]}
          ]},
          { id: 'g2', title: '2. Navegante via Viva Viagem / yellow card', content: [
            { kind: 'paragraph', text: 'The old system. Paper card for 50 cents, topped up with Zapping or a 24-hour pass (€6.80). Well suited to tourists.' }
          ]},
          { id: 'g3', title: '3. Navegante via the app (digital)', content: [
            { kind: 'paragraph', text: 'Download the “Navegante” app (Android / iOS). Link an existing card via NFC or create a digital wallet. Top up via MB WAY, card.' }
          ]},
          { id: 'g4', title: '4. Apple Wallet / Google Pay', content: [
            { kind: 'paragraph', text: 'Since 2025, Navegante has been integrated. Navegante Wallet Pass on iPhone/Android — tap at the gate and travel. Convenient, replaces plastic.' }
          ]}
        ]}
      ]
    },
    {
      id: 'operators',
      title: 'Which operators are covered',
      content: [
        { kind: 'checklist', items: [
          '🚇 Metro de Lisboa — 4 lines',
          '🚌 Carris — 165+ bus routes + trams + lifts',
          '🚆 CP Urbanos de Lisboa — Cascais, Sintra, Azambuja lines',
          '⛴️ Transtejo + Soflusa — Barreiro, Cacilhas, Trafaria, Porto Brandão',
          '🚂 Fertagus — Setúbal line (via the 25 Abril bridge)',
          '🚌 Carris Metropolitana — suburban buses',
          '🛤️ MTS — Metro Sul do Tejo (Almada/Seixal)',
          '🚲 GIRA — bike sharing (separate, not included in the travel pass)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '💰 The month is counted from the activation date (not the calendar month)',
          '🔄 Renew 5 days before expiry — with no interruption',
          '📅 Automatic payment via MB WAY / direct debit — convenient',
          '🏃 In the metro, go through with one card, tap it on the reader area — instantly',
          '📱 On Carris buses — tap when BOARDING',
          '🚆 CP — tap when ENTERING the station, sometimes when exiting',
          '🎒 Fine for travelling without a ticket: €120 on the spot (reduced €60 if paid within 20 days)',
          '🎓 Student travel pass — only with proof of enrolment'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Navegante Metropolitano', amountEUR: 40, note: '€/month' },
    { label: 'Navegante Municipal', amountEUR: 30, note: '€/month' },
    { label: 'Children 13–18 / students', amountEUR: 20, note: '€/month' },
    { label: 'Seniors 65+', amountEUR: 20 },
    { label: 'First card (plastic)', amountEUR: 6 },
    { label: 'Fine for travelling without a ticket', amountEURMin: 60, amountEURMax: 120 }
  ],
  sources: [
    { title: 'Navegante — operator website', url: 'https://www.navegante.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Metropolitano de Lisboa', url: 'https://www.metrolisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris — public transport in Lisboa', url: 'https://www.carris.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
