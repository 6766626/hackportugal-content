export default {
  editorialVoice: 'hackportugal',
  id: 'd3-highly-qualified',
  categoryId: 'residence_permit',
  title: 'D3 visa (highly qualified specialist)',
  tldr: 'D3 is for highly qualified work in Portugal: you need a contrato de trabalho or promessa de contrato, usually with a Portuguese employer/Portuguese structure of a foreign company. For purely remote work for a foreign company without a Portuguese contract, see D8. Threshold: annual gross remuneration ≥ 1.5× national average gross annual salary or ≥ 3× IAS (in 2026 = €1,611.39/month).\n\nAccess to IFICI 20% is ONLY if the activity falls within the approved list (science, R&D, universities, start-ups) and the IFICI conditions are met; not for ordinary remote developers.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d3', 'residence permit', 'highly qualified', 'ict'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who',
      title: 'Who is eligible',
      content: [
        { kind: 'checklist', items: [
          'IT engineers, developers, data analysis specialists',
          'Engineers (mechanical, electrical, etc.)',
          'Scientific staff, researchers',
          'Consultants, managers, high-level analysts',
          'Medical specialists with a diploma (after recognition)'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Higher education diploma or qualification corresponding to highly qualified activity (with apostille and translation). In some cases, confirmed relevant professional experience may be accepted',
          'For regulated professions (medicine, engineering, etc.) — diploma recognition and/or registration with the professional Ordem',
          'Contrato de trabalho or promessa de contrato for highly qualified activity, usually for a MINIMUM of 1 year',
          'Salary threshold: annual gross remuneration ≥ 1.5× national average gross annual salary or ≥ 3× IAS. In 2026 IAS = €537.13 → 3× IAS = €1,611.39/month. If calculating based on the average salary, recalculate the annual gross amount specifically and check the practice of the particular consulate/AIMA. Bear in mind that Portuguese salaries are often discussed over 14 payments',
          'Criminal record certificate',
          'Health insurance for the period until registration with SNS'
        ]},
        { kind: 'warning', text: 'Cartão Azul UE (EU Blue Card) is a SEPARATE regime with its own rules (Lei 23/2007 art. 121-A onwards; Directive (EU) 2021/1883).\n\nThe threshold is also calculated from the national average gross annual salary, with special/reduced coefficients for some professions — do NOT use a fixed €4,400/month without checking the current AIMA/MNE threshold.' }
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find an employer', content: [
            { kind: 'paragraph', text: 'Search on LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs.' }
          ]},
          { id: 's2', title: '2. Obtain an employment contract', content: [
            { kind: 'paragraph', text: 'The employer prepares the employment contract, and often registers it with Segurança Social (social security).' }
          ]},
          { id: 's3', title: '3. Apply for the visa at the consulate', content: [
            { kind: 'paragraph', text: 'You apply for the D3 visa, not the employer. Apply at the consulate for your country of residence.' }
          ]},
          { id: 's4', title: '4. NIF + entry + AIMA', content: [
            { kind: 'paragraph', text: 'NIF is often arranged in advance. NISS is usually arranged after the employment relationship starts / through the employer. Check whether an AIMA appointment is indicated in the visa; if not — push to get an appointment through AIMA.' }
          ]},
          { id: 's5', title: '5. Apply for the IFICI tax regime (if the activity qualifies)', content: [
            { kind: 'paragraph', text: 'IFICI is NOT automatic for D3. The regime gives 20% IRS on eligible net employment/self-employment income from listed scientific, innovation or qualified activities for up to 10 years, if the IFICI conditions are met: qualifying activity, qualifying employer/organisation (with registration, where applicable), no tax residence in PT during the previous 5 years, and no incompatible use of NHR. The application is usually submitted by **15 January** of the year following the year of becoming resident (Portaria 352/2024/1; EBF art. 58-A).' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — pedido/análise de concessão de autorização de residência', amountEUR: 133, note: 'fee from 01.03.2026' },
    { label: 'AIMA — emissão do título de residência para atividade altamente qualificada (Lei 23/2007 art. 90)', amountEUR: 307.20, note: 'fee from 01.03.2026; Cartão Azul UE has its own fee' },
    { label: 'Diploma recognition', amountEURMin: 100, amountEURMax: 300, note: 'if required' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — D3 visa for highly qualified specialists', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — residence permit for highly qualified specialists', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 352/2024/1 — list of qualified professions for IFICI', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-913098024', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Estatuto dos Benefícios Fiscais art. 58-A — IFICI regime', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34423775', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
