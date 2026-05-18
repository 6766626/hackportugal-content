export default {
  editorialVoice: 'hackportugal',
  id: 'd8-digital-nomad',
  categoryId: 'residence_permit',
  title: 'D8 visa (digital nomad / remote worker)',
  tldr: 'D8 is for remote workers and freelancers working for foreign companies. 2026 threshold: €3,680/month (4× minimum wage of €920). There are short-stay (up to 1 year) and long-stay (with residence permit) versions. Popular for IT.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d8', 'residence permit', 'digital nomad', 'remote work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-qualifies',
      title: 'Who qualifies',
      content: [
        { kind: 'checklist', items: [
          'An employee of a foreign company (not Portuguese) working remotely',
          'A freelancer with contracts outside Portugal',
          'A sole trader with foreign clients'
        ]},
        { kind: 'warning', text: 'Income must come from outside Portugal. If your clients are Portuguese companies, this is not D8 (it is D2 / recibos verdes).' }
      ]
    },
    {
      id: 'income',
      title: 'Financial threshold 2026',
      content: [
        { kind: 'paragraph', text: 'Legal requirement: average monthly income over the last 3 months of at least 4× SMN. In 2026 this is 4 × €920 = €3,680/month. The law does not say “net” — in practice the consulate may assess whether there are sufficient funds after taxes/expenses, so it is better to show a buffer.' },
        { kind: 'paragraph', text: 'Evidence: employment contract for remote work + payslips for 3 months OR client contracts + bank credits for 3–6 months.' }
      ]
    },
    {
      id: 'versions',
      title: 'Two versions of D8',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: 'Short-stay D8 (temporary stay visa)', content: [
            { kind: 'paragraph', text: 'Up to 1 year, without a residence permit. Can be extended up to 2 years. Suitable if you want to try living in Portugal.' }
          ]},
          { id: 'v2', title: 'Long-stay D8 (residence visa)', content: [
            { kind: 'paragraph', text: 'Gives the right to obtain a full residence permit for 2 years, with renewals thereafter. The path to citizenship is under the current Lei 37/81 after 5 years of legal residence.\n\n**Decreto AR 48/XVII was promulgated by President Seguro on 03.05.2026**; as of 13.05.2026 the law has STILL NOT been published in the DRE (10 days from promulgation). After publication in the Diário da República, the naturalisation period will increase to 10 years for third countries. The text of the law contains a transitional provision: cases in progress are subject to the previous version of Lei 37/81 (5 years).' }
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Application process',
      content: [
        { kind: 'checklist', items: [
          '1. Obtain a NIF — usually through a fiscal representative/authorised representative for non-residents outside the EU/EEA',
          '2. Open an account with a Portuguese bank. It is advisable to show funds for living expenses: a common guideline is at least 12× SMN for the main applicant (€11,040 in 2026). This does NOT replace the income requirement of €3,680/month and depends on the consulate/VFS',
          '3. Prove accommodation in Portugal: a rental contract, invitation/termo de responsabilidade, or another document accepted by the consulate. For a residence visa, a long-term rental is often safer, but the 12-month requirement must be checked at the place of application',
          '4. Book a visa appointment at the consulate → submit the documents',
          '5. Wait for the visa (60–90 days)',
          '6. Enter on the residence visa → check the AIMA appointment/instructions stated in the visa/notification, or independently try to secure an appointment through the current AIMA channel → submit biometrics/documents → obtain the residence permit'
        ]}
      ]
    },
    {
      id: 'tax',
      title: 'Taxes and IFICI',
      content: [
        { kind: 'paragraph', text: 'IFICI is the NEW regime that replaced NHR only partially (with a narrower scope): 20% may apply to certain income from eligible activities for up to 10 years, but D8 by itself does NOT grant the right to IFICI. You must separately meet the list of professions/activities (Portaria 352/2024/1; EBF art. 58-A) and apply on time. For the conditions, see the “IFICI Regime” guide.' },
        { kind: 'warning', text: 'IFICI conditions: eligible activity/profession, eligible employer/entity/registration, no tax residence in PT in the previous 5 years, no incompatible use of NHR/Regressar, timely application (usually by 15 January of the year following the year in which you become resident).' }
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
    { label: 'Residence Visa D8 — consular fee', amountEUR: 90, note: 'Temporary Stay D8 is charged differently; check in the country of application. A VFS/BLS service fee may apply' },
    { label: 'Translation + apostilles', amountEURMin: 200, amountEURMax: 500 },
    { label: 'AIMA — residence permit processing', amountEURMin: 0, amountEURMax: 450, note: 'According to the current AIMA fee table from 01.03.2026; the amount depends on the type of procedure' },
    { label: 'Recommended account balance (NOT an expense, liquid funds)', amountEUR: 11040, note: 'Guideline of 12× SMN = €11,040 in 2026; does not cancel the 4× SMN income requirement; requirements may differ by consulate' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — Types of Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Residence Permit', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
