export default {
  editorialVoice: 'hackportugal',
  id: 'golden-visa-2026',
  categoryId: 'residence_permit',
  title: 'Golden Visa (ARI) in 2026 — current routes',
  tldr: 'Golden Visa (ARI, Autorização de Residência para Investimento) is a residence permit by investment. Since October 2023, buying property has been REMOVED. Remaining routes: investment funds €500,000, R&D €500,000, culture €250,000, creation of 10 jobs, company capitalisation €500,000 + 5 jobs. Residence requirement — only 7 days per year. Path to citizenship after 5 years.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['golden visa', 'ari', 'investment'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2023-10-07',
  changeSummary: 'The Mais Habitação law (October 2023) abolished the Golden Visa real estate route. Only “productive” investments remain.',
  steps: [
    {
      id: 'routes',
      title: 'Current investment routes (2026)',
      content: [
        { kind: 'checklist', items: [
          '€500,000 — investment fund (regulated investment fund), at least 60% in Portuguese companies, not in real estate',
          '€500,000 — R&D in Portuguese public institutions or technology companies',
          '€500,000 — capitalisation of an existing company + creation of 5 jobs',
          '€250,000 — support for culture / arts / heritage',
          '€500,000 — creation of a new company + 5 jobs',
          '10 jobs — create without a minimum investment (a business that will create jobs)'
        ]},
        { kind: 'warning', text: 'NOT AVAILABLE since October 2023: buying housing, buying tourist property. This is the main change from 2023.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Advantages',
      content: [
        { kind: 'checklist', items: [
          'Only 7 days of residence in Portugal in the first year, 14 days for each following 2-year period (a very low threshold)',
          'Path to citizenship after 5 years (provided you have A2 language level and ties to Portugal)',
          'Schengen visa automatically',
          'Ability to include family (spouse, children, dependent parents)',
          'Access to the IFICI tax regime'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. NIF + account at a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Through a representative online — entry to Portugal is not required at this stage.' }
          ]},
          { id: 'g2', title: '2. Choose a route and make the investment', content: [
            { kind: 'paragraph', text: 'Investment funds are the most popular option because of their flexibility. The list of approved funds is on CMVM (Comissão do Mercado de Valores Mobiliários).' }
          ]},
          { id: 'g3', title: '3. Prepare the dossier', content: [
            { kind: 'paragraph', text: 'Proof of investment, lawful origin of funds, criminal record certificate, passport.' }
          ]},
          { id: 'g4', title: '4. Apply to AIMA', content: [
            { kind: 'paragraph', text: 'Via the specialised ARI portal. Processing 9-18 months (2024-2026 queue).' }
          ]},
          { id: 'g5', title: '5. Biometrics + residence permit', content: [
            { kind: 'paragraph', text: 'Visit Portugal for biometrics. Initial residence permit for 2 years, then renewals.' }
          ]}
        ]}
      ]
    },
    {
      id: 'caveats',
      title: 'Pitfalls',
      content: [
        { kind: 'warning', text: 'Citizens of the Russian Federation may face restrictions — sanctions make transferring money more difficult. A specialist lawyer is recommended.' },
        { kind: 'warning', text: 'The queue at AIMA is huge — the real time to receive a residence permit is 12-24 months from submission.' },
        { kind: 'warning', text: 'The origin of funds is checked strictly — prepare the full chain of bank transactions.' }
      ]
    }
  ],
  costs: [
    { label: 'Minimum investment', amountEUR: 250000, note: 'from €250,000 (culture) to €500,000 (funds/company)' },
    { label: 'AIMA application fee', amountEUR: 708, note: '~ +33% after the 01.03.2026 fee table; check against the official table' },
    { label: 'AIMA residence permit (on approval, main applicant)', amountEUR: 7097, note: '~ +33% after the 01.03.2026 fee table' },
    { label: 'Residence permit renewal', amountEUR: 3549, note: 'every 2 years, new 2026 fee table' },
    { label: 'Legal support', amountEURMin: 5000, amountEURMax: 20000 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 730,
  sources: [
    { title: 'AIMA — Autorização de Residência para Investimento (ARI)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei do Mais Habitação (56/2023)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — list of certified investment funds', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
