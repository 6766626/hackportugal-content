export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'D8 visa (digital nomad / remote worker)',
  tldr: 'D8 is for remote employees and freelancers working for foreign companies. 2026 threshold: €3,680/month (4× minimum wage of €920). There are short-term (up to 1 year) and long-term (with residence permit) versions. Popular for IT.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d8', 'residence permit', 'digital nomad', 'remote work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-qualifies',
      title: 'Who qualifies',
      content: [
        { kind: 'checklist', items: [
          'Employee of a foreign company (not Portuguese) working remotely',
          'Freelancer with contracts outside Portugal',
          'Sole trader with foreign clients'
        ]},
        { kind: 'warning', text: 'Income must come from outside Portugal. If your clients are Portuguese companies, this is not D8 (it is D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Financial threshold 2026',
      content: [
        { kind: 'paragraph', text: 'Minimum — 4× Portugal’s minimum wage = 4 × €920 = €3,680/month net (some consulates may use a more up-to-date coefficient).' },
        { kind: 'paragraph', text: 'Proven by: employment contract for remote work + payslips for 3 months OR client contracts + bank receipts for 3–6 months.' }
      ]
    },
    {
      id: 'versions',
      title: 'Two D8 versions',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Short-term D8 (temporary stay visa)', content: [
            { kind: 'paragraph', text: 'Up to 1 year, without a residence permit. Can be extended up to 2 years. Suitable if you want to try living in Portugal.' }
          ]},
          { id: 'v2', title: 'Long-term D8 (residence visa)', content: [
            { kind: 'paragraph', text: 'Gives the right to obtain a full residence permit for 2 years, with renewals afterwards. The path to citizenship is under the current Lei 37/81 after 5 years of legal residence. The new law (approved on 01.04.2026) has NOT been promulgated as of 28.04.2026; transitional rules will be known after publication of the final text.' }
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Application process',
      content: [
        { kind: 'checklist', items: [
          '1. NIF through a representative',
          '2. Open an account with a Portuguese bank + transfer proof of funds (minimum €11,040 ≈ 12 × €920)',
          '3. Rent accommodation in Portugal (≥ 12 months)',
          '4. Book a visa appointment at the consulate → submit documents',
          '5. Wait for the visa (60–90 days)',
          '6. Enter Portugal → book an appointment with AIMA → obtain a residence permit'
        ]}
      ]
    },
    {
      id: 'tax',
      title: 'Taxes and IFICI',
      content: [
        { kind: 'paragraph', text: 'D8 is a popular combination with the IFICI regime (former NHR): 20% fixed rate on certain income for 10 years. For the conditions and list of qualifying professions, see the "IFICI Regime" guide.' },
        { kind: 'warning', text: 'IFICI is available only to those who became tax resident in Portugal for the first time in the last 5 years.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport' },
    { title: 'D8 application form' },
    { title: 'Criminal record certificate' },
    { title: 'Employment contract for remote work / client contracts' },
    { title: 'Tax return for the last year' },
    { title: 'Bank statement for 3–6 months' },
    { title: 'NIF + rental contract in Portugal' },
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
    { title: 'Vistos MNE — Visa Types', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit)', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
