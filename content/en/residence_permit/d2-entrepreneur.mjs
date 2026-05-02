export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'D2 visa (entrepreneur / sole trader)',
  tldr: 'D2 is a visa for starting a business or self-employment in Portugal. Options: open a company, register as self-employed through Início de Atividade, buy an existing business. The financial threshold is individual: you need a viable business plan and funds to start up and live on. Residence permit for 2 years, with a path to citizenship after 5 years.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d2', 'residence permit', 'business', 'entrepreneur'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Who it suits',
      content: [
        { kind: 'checklist', items: [
          'Plans to open a company (Lda, Unipessoal) in Portugal',
          'Plans to work as self-employed through Recibo Verde with Portuguese clients',
          'Is buying an existing Portuguese business',
          'Freelancer with international clients (D8 is usually better, but D2 is also available)'
        ]},
        { kind: 'warning', text: 'D2 is NOT suitable for remote workers employed by a foreign employer — they need D8.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Business plan in Portuguese or English: viability, market, 3-year finances',
          'Proof of funds — at least €5,000–10,000 in an account at a Portuguese bank (unofficial practice)',
          'Sufficient means of subsistence: calculated from the SMN (€920 in 2026) and IAS (€537.13) + supplements for dependants. The consulate assesses this based on the business plan and personal expenses. There is NO “4× SMN” rule for D2 in the law — that is a benchmark for D8 for digital nomads',
          'NIF registration',
          'Rental contract in Portugal for a term of at least 12 months',
          'Criminal record certificate with apostille',
          'Medical insurance'
        ]},
        { kind: 'paragraph', text: 'The legislation does not set a fixed investment threshold — the consulate assesses the viability of the project.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Prepare a business plan', content: [
            { kind: 'paragraph', text: 'Preferably in Portuguese. It should include: description of the activity, target market, financial forecasts, expected jobs, uniqueness.' }
          ]},
          { id: 'p2', title: '2. Register the company (optional before the visa)', content: [
            { kind: 'paragraph', text: 'Through Empresa na Hora (in 1 day, €360) or online. Form: Sociedade Unipessoal (one founder, minimum capital €1).' }
          ]},
          { id: 'p3', title: '3. Get a NIF + open an account at a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Transfer the start-up capital to the account. Have a statement showing the movement of funds.' }
          ]},
          { id: 'p4', title: '4. Book an appointment at the consulate', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt. The process takes 60–90 days.' }
          ]},
          { id: 'p5', title: '5. After entry — AIMA', content: [
            { kind: 'paragraph', text: 'Biometrics, obtaining the residence permit. Register Início de Atividade with Finanças if this has not already been done.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Company registration through Empresa na Hora', amountEUR: 360 },
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — appointment + assessment', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — residence permit (issue / renewal)', amountEUR: 307.20, note: 'tariff from 01.03.2026' },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — D2 visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit) for entrepreneurs', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — setting up a company in a day', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
