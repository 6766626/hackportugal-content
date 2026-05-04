export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'Visa D8 (digital nomad / remote worker)',
  tldr: 'D8 is for remote employees and freelancers working for foreign companies. 2026 threshold: €3,680/month (4× minimum wage €920). There is a short-term (up to 1 year) and a long-term (with a residence permit) version. Popular for IT.',
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
        { kind: 'warning', text: 'Income must come from outside Portugal. If your clients are Portuguese companies, this is not D8 (that is D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Financial threshold 2026',
      content: [
        { kind: 'paragraph', text: 'Minimum — 4× the Portuguese minimum wage = 4 × €920 = €3,680/month net (some consulates may use a more up-to-date coefficient).' },
        { kind: 'paragraph', text: 'Proved by: a remote work employment contract + pay slips for 3 months OR client contracts + bank inflows for 3–6 months.' }
      ]
    },
    {
      id: 'versions',
      title: 'Two versions of D8',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'D8 short-term (temporary stay visa)', content: [
            { kind: 'paragraph', text: 'Up to 1 year, without a residence permit. Can be extended up to 2 years. Suitable if you want to try living in Portugal.' }
          ]},
          { id: 'v2', title: 'D8 long-term (residence visa)', content: [
            { kind: 'paragraph', text: 'Grants the right to obtain a full residence permit for 2 years, then renewals. Path to citizenship — under the current Lei 37/81 after 5 years of lawful residence. **Decreto AR 48/XVII promulgated by President Seguro on 03.05.2026**; after publication in Diário da República the naturalisation period will increase to 10 years for third countries. Seguro publicly asked for already-submitted cases to be considered under the old rules.' }
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
          '3. Rent accommodation in Portugal (≥ 12 months)',
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
        { kind: 'paragraph', text: 'D8 is a popular pairing with the IFICI regime (formerly NHR): a 20% flat rate on certain income for 10 years. Conditions and the list of eligible professions — see the "IFICI regime" guide.' },
        { kind: 'warning', text: 'IFICI is only available to those who have become a Portuguese resident for the first time in the last 5 years.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport' },
    { title: 'D8 application' },
    { title: 'Criminal record certificate' },
    { title: 'Remote work employment contract / client contracts' },
    { title: 'Last year’s tax return' },
    { title: 'Bank statement for 3–6 months' },
    { title: 'NIF + tenancy agreement in Portugal' },
    { title: 'Insurance' }
  ],
  costs: [
    { label: 'Consular fee', amountEUR: 90 },
    { label: 'Translation + apostilles', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Deposit (proof of funds)', amountEUR: 11040 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — Types of Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
