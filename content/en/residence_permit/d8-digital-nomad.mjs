export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'D8 visa (digital nomad / remote worker)',
  tldr: 'D8 — for remote employees and freelancers working for foreign companies. Threshold 2026: €3,680/month (4× minimum wage €920). There are short-stay (up to 1 year) and long-stay (with a residence permit) versions. Popular for IT.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d8', 'residence permit', 'digital nomad', 'remote work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-qualifies',
      title: 'Who qualifies',
      content: [
        { kind: 'checklist', items: [
          'An employee of a foreign (non-Portuguese) company working remotely',
          'A freelancer with contracts outside Portugal',
          'A sole proprietor with foreign clients'
        ]},
        { kind: 'warning', text: 'Income must come from outside Portugal. If your clients are Portuguese companies, this is not D8 (it is D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Financial threshold 2026',
      content: [
        { kind: 'paragraph', text: 'Minimum — 4× Portugal’s minimum wage = 4 × €920 = €3,680/month net (some consulates may use a newer coefficient).' },
        { kind: 'paragraph', text: 'Proved by: a remote-work employment contract + payslips for 3 months OR client contracts + bank inflows for 3–6 months.' }
      ]
    },
    {
      id: 'versions',
      title: 'Two D8 variants',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Short-stay D8 (temporary-stay visa)', content: [
            { kind: 'paragraph', text: 'Up to 1 year, without a residence permit. Can be extended to 2 years. Suitable if you want to try living in Portugal.' }
          ]},
          { id: 'v2', title: 'Long-stay D8 (residence visa)', content: [
            { kind: 'paragraph', text: 'Gives the right to obtain a full residence permit for 2 years, then renewals. Path to citizenship — under the current Lei 37/81 after 5 years of lawful residence. **Decreto AR 48/XVII was promulgated by President Seguro on 03.05.2026**; after publication in the Diário da República the naturalisation period will increase to 10 years for third countries. Seguro publicly asked for already-submitted cases to be considered under the old rules.' }
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Application process',
      content: [
        { kind: 'checklist', items: [
          '1. NIF via a representative',
          '2. Open an account in a Portuguese bank + transfer proof of funds (minimum €11,040 ≈ 12 × €920)',
          '3. Rent housing in Portugal (≥ 12 months)',
          '4. Book a visa appointment at the consulate → submit documents',
          '5. Wait for the visa (60–90 days)',
          '6. Enter → book with AIMA → obtain a residence permit'
        ]}
      ]
    },
    {
      id: 'tax',
      title: 'Taxes and IFICI',
      content: [
        { kind: 'paragraph', text: 'D8 pairs well with the IFICI regime (formerly NHR): a 20% flat rate on certain income for 10 years. Conditions and the list of eligible professions — see the "IFICI regime" guide.' },
        { kind: 'warning', text: 'IFICI is only available to those who became a resident of Portugal for the first time in the last 5 years.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport' },
    { title: 'D8 application form' },
    { title: 'Criminal record certificate' },
    { title: 'Remote-work employment contract / client contracts' },
    { title: 'Most recent tax return' },
    { title: 'Bank statements for 3–6 months' },
    { title: 'NIF + tenancy agreement in Portugal' },
    { title: 'Health insurance' }
  ],
  costs: [
    { label: 'Consular fee', amountEUR: 90 },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Deposit (proof of funds)', amountEUR: 11040 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'MNE Visas — Types of Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
