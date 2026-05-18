export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Procuro Trabalho visa — job search in Portugal',
  tldr: 'Procuro Trabalho is a national visa for **120 days (+ visa extension for a further 60 days)** to look for work. It is a visa, NOT a residence permit; the residence permit is issued only if, during the visa period, the applicant finds a job and applies for autorização de residência under the relevant route through AIMA. Proof of funds — **minimum 3× SMN** for the visa period (Portaria 1563/2007 + current consular practice: in 2026 SMN = €920, i.e. a benchmark of approx. **€2,760** for 4 months; more is better) + return ticket. Popular with graduates of Portuguese universities and highly qualified specialists.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'job search', 'visa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who',
      title: 'Who it suits',
      content: [
        { kind: 'checklist', items: [
          'Highly qualified specialist (education + experience)',
          'Graduate of a Portuguese university (after D4, you can stay for 1 year)',
          'Candidate for high-demand roles (IT, engineering, medicine, research and development)',
          'Employer support is NOT required'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Proof of funds to live on for 4 months — **minimum 3× SMN** (in 2026 SMN = €920, i.e. a benchmark of approx. **€2,760**). This is the baseline; some consulates ask for a larger buffer. Do NOT use the IAS basis — it understates the requirement',
          'Return ticket or equivalent proof',
          'Accommodation in Portugal (bookings / contract for 120 days)',
          'Health insurance for 120+ days',
          'Criminal record certificate with apostille',
          'CV + motivation letter (recommended)'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apply at the consulate', content: [
            { kind: 'paragraph', text: 'Vistos.mne.gov.pt → Visto para Procura de Trabalho. Processing takes 15-60 days.' }
          ]},
          { id: 'p2', title: '2. Enter on the visa', content: [
            { kind: 'paragraph', text: 'The visa gives **120 days of stay in Portugal to look for work** — it is a visa, NOT a residence permit. There is no automatic issue of a residence permit on entry.' }
          ]},
          { id: 'p3', title: '3. Extend the visa for 60 days (if needed)', content: [
            { kind: 'paragraph', text: 'A visa extension for a further **60 days** is processed through AIMA. This is an extension of STAY STATUS, not the issue of a residence permit.' }
          ]},
          { id: 'p4', title: '4. Look for work', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, and approaching companies directly. 120 + 60 = 180 days — the maximum visa period.' }
          ]},
          { id: 'p5', title: '5. Found a job — apply for autorização de residência (residence permit)', content: [
            { kind: 'paragraph', text: 'With a contract in hand — apply for autorização de residência from inside the country through AIMA under the relevant route: a standard employment contract (subordinate work, art. 88), highly qualified activity (art. 90-A for highly qualified specialists), or entrepreneurship. The residence permit is issued specifically at this stage, after the employment relationship has been formalised.' }
          ]},
          { id: 'p6', title: '6. Did not find a job — leave', content: [
            { kind: 'paragraph', text: 'After the maximum visa period ends (120+60=180 days) without a contract — leaving is mandatory. A new Procuro Trabalho application is possible after 1 year.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after-d4',
      title: 'If you are finishing your studies on D4',
      content: [
        { kind: 'paragraph', text: 'Graduates of Portuguese universities have SIMPLIFIED access to Procuro Trabalho — applying inside Portugal without the consulate. It is recommended to apply 3-6 months before completing the degree.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa (Procuro Trabalho)', amountEUR: 90 },
    { label: 'AIMA — visa extension for 60 days (if needed)', amountEURMin: 50, amountEURMax: 150, note: 'Check the exact amount in the current AIMA fee table' },
    { label: 'AIMA — autorização de residência (if work is found and a residence permit application is submitted)', amountEURMin: 200, amountEURMax: 400, note: 'Depends on the route (art. 88, 90-A, etc.) and the current AIMA fee table from 01.03.2026' },
    { label: 'Insurance for 4 months', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Proof of funds (reserve) — 3× SMN for 4 months', amountEURMin: 2760, amountEURMax: 5000, note: 'Minimum benchmark: 3×€920 = €2,760; more is safer. Do NOT confuse with 4×IAS' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — Job Search Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Job Search', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
