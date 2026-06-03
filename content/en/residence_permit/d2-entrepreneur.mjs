export default {
  editorialVoice: 'hackportugal',
  id: 'd2-entrepreneur',
  categoryId: 'residence_permit',
  title: 'D2 visa (entrepreneur / self-employed)',
  tldr: 'D2 is a visa for starting a business or self-employment in Portugal. Options: open a company, register as self-employed via Início de Atividade, buy an existing business. The financial threshold is individual: you need a viable business plan and funds for the start-up and living costs. The first residence permit is usually for 2 years, then renewed. The Nationality Law reform is already in force: Lei Orgânica n.º 1/2026 (published 18.05.2026, in force from 19.05.2026) raised the residence requirement for naturalisation from 5 to 7 years for CPLP/EU citizens and to 10 years for everyone else. Applications filed up to and including 18.05.2026 keep the previous 5-year period.',
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
          'Plans to work as self-employed via Recibo Verde with Portuguese clients',
          'Buys an existing Portuguese business',
          'Freelancer with international clients — D2 is suitable only if the case is structured as independent professional/entrepreneurial activity with a business plan and an economic link to Portugal; for purely remote work for foreign clients, D8 is usually the correct route'
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
          'There is NO fixed minimum investment threshold for D2 — you need to show project viability, funds to start the business and funds for living costs',
          'Living costs: as a guide, at least 12×SMN for the main applicant (€920 × 12 = €11,040 in 2026), plus 50% for the second adult and 30% for each child. The consulate may require more depending on the case. The “4× SMN/month” rule applies to D8, NOT to D2',
          'NIF registration',
          'Proof of accommodation in Portugal: in practice, many consulates prefer a rental contract for 12+ months, but requirements depend on the consulate/VFS (property deed, termo de responsabilidade, etc. may be accepted)',
          'Criminal record certificate with apostille',
          'Health insurance'
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
            { kind: 'paragraph', text: 'Preferably in Portuguese. It should include: description of the activity, target market, financial forecasts, expected jobs, unique selling points.' }
          ]},
          { id: 'p2', title: '2. Register a company (optionally before the visa)', content: [
            { kind: 'paragraph', text: 'Via Empresa na Hora (in 1 day, €360) or online. Form: Sociedade Unipessoal (one shareholder, minimum capital €1).' }
          ]},
          { id: 'p3', title: '3. Obtain a NIF + open an account with a Portuguese bank', content: [
            { kind: 'paragraph', text: 'Transfer the start-up capital to the account. Have a document showing movement of funds.' }
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
    { label: 'Company registration via Empresa na Hora', amountEUR: 360 },
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — appointment + assessment', amountEUR: 133, note: 'from 01.03.2026' },
    { label: 'AIMA — issuance of a temporary residence permit under D2 (atividade independente / empreendedorismo)', amountEUR: 307.20, note: 'tariff from 01.03.2026; Lei 23/2007 art. 60 for the visa, art. 77/89 for autorização de residência' },
    { label: 'Translations + apostilles', amountEURMin: 200, amountEURMax: 500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 150,
  sources: [
    { title: 'Vistos MNE — D2 visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Autorização de Residência (residence permit) for entrepreneurs', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora — create a company in a day', url: 'https://justica.gov.pt/Servicos/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 1563/2007 — meios de subsistência', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/1563-2007-635255', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 112/2025 — SMN 2026 (€920)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/112-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Orgânica n.º 1/2026 — Nationality Law reform (7/10-year requirement, in force from 19.05.2026)', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
