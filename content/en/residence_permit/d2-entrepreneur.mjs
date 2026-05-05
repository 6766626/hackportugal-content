export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'D2 visa (entrepreneur / sole trader)',
  tldr: 'D2 is a visa for starting a business or self-employment in Portugal. Options: set up a company, register self-employment via Início de Atividade, buy an existing business. The financial threshold is individual: you need a viable business plan and funds for start-up and living. Residence permit for 2 years, pathway to citizenship after 5 years.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d2', 'residence-permit', 'business', 'entrepreneur'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Who is eligible',
      content: [
        { kind: 'checklist', items: [
          'Plans to open a company (Lda, Unipessoal) in Portugal',
          'Plans to work as self-employed via recibos verdes with Portuguese clients',
          'Is acquiring an existing Portuguese business',
          'Freelancer with international clients (usually D8 is better, but D2 is also available)'
        ]},
        { kind: 'warning', text: 'D2 is NOT suitable for remote employees working for a foreign employer — they need D8.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Business plan in Portuguese or English: viability, market, 3-year finances',
          'Proof of funds — at least €5,000–10,000 in a Portuguese bank account (unwritten practice)',
          'Sufficient means of subsistence: calculated from SMN (€920 in 2026) and IAS (€537.13) + supplements for dependants. The consulate assesses based on the business plan and personal expenses. There is NO “4× SMN” rule for D2 in law — that benchmark is for D8 for digital nomads',
          'NIF registration',
          'Tenancy contract in Portugal for at least 12 months',
          'Criminal record certificate with apostille',
          'Health insurance'
        ]},
        { kind: 'paragraph', text: 'Legislation does not set a fixed investment threshold — the consulate evaluates the viability of the project.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Prepare a business plan', content: [
            { kind: 'paragraph', text: 'Preferably in Portuguese. Include: description of activity, target market, financial projections, expected jobs, uniqueness.' }
          ]},
          { id: 'p2', title: '2. Register a company (optional before the visa)', content: [
            { kind: 'paragraph', text: 'Via Empresa na Hora (in 1 day, €360) or online. Form: Sociedade Unipessoal (single founder, minimum capital €1).' }
          ]},
          { id: 'p3', title: '3. Obtain NIF + open an account with a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Transfer start-up capital to the account. Have proof of source and movement of funds.' }
          ]},
          { id: 'p4', title: '4. Book the consulate appointment', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt. The process takes 60–90 days.' }
          ]},
          { id: 'p5', title: '5. After entry — AIMA', content: [
            { kind: 'paragraph', text: 'Biometrics, obtaining the residence permit. File Início de Atividade at Finanças if not yet done.' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Company registration via Empresa na Hora', amountEUR: 360 },
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — intake + processing', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — residence permit (issuance / renewal)', amountEUR: 307.20, note: 'tariff from 01.03.2026' },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — D2 visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit) for entrepreneurs', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — set up a company in a day', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
