export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Procuro Trabalho visa — looking for work in Portugal',
  tldr: 'Procuro Trabalho is a 120-day visa (+60-day extension) for looking for work. Proof of funds of 4× IAS for 4 months ≈ €2,148.52 (IAS 2026 = €537.13/month) + return ticket. Popular with graduates of Portuguese universities and highly qualified specialists. After being hired — switch to D3 from inside the country.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'job search', 'visa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who',
      title: 'Who it is suitable for',
      content: [
        { kind: 'checklist', items: [
          'Highly qualified specialist (education + experience)',
          'Graduate of a Portuguese university (after D4 you can stay for 1 year)',
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
          'Proof of funds for living expenses for 4 months (≈ €2,148.52 = 4× IAS, €537.13/month for 2026)',
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
          { id: 'p2', title: '2. Entry', content: [
            { kind: 'paragraph', text: 'The visa gives you 120 days in Portugal. You need to book an appointment with AIMA within this period.' }
          ]},
          { id: 'p3', title: '3. AIMA appointment — temporary residence permit', content: [
            { kind: 'paragraph', text: 'You receive a residence permit for the job-search period (120 days + a 60-day extension if needed).' }
          ]},
          { id: 'p4', title: '4. Job search', content: [
            { kind: 'paragraph', text: 'LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs, contacting companies directly. 180 days is a realistic timeframe.' }
          ]},
          { id: 'p5', title: '5. Found a job — switch to D3/D1', content: [
            { kind: 'paragraph', text: 'With a contract in hand — apply for D3 (qualified specialist) or D1 (ordinary employee) from inside the country without leaving. At AIMA.' }
          ]},
          { id: 'p6', title: '6. Not found one — leave the country', content: [
            { kind: 'paragraph', text: 'After 180 days without a contract — departure is mandatory. A new application is possible after 1 year.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after-d4',
      title: 'If you are finishing your studies under D4',
      content: [
        { kind: 'paragraph', text: 'Graduates of Portuguese universities have SIMPLIFIED access to Procuro Trabalho — applying inside Portugal without the consulate. It is recommended to apply 3-6 months before completing your degree.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'AIMA — appointment + analysis', amountEUR: 133, note: 'from 01/03/2026' },
    { label: 'AIMA — temporary residence permit (art. 75)', amountEUR: 307.20, note: 'from 01/03/2026' },
    { label: 'Insurance for 4 months', amountEURMin: 100, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'MNE Visas — Visto para Procura de Trabalho', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Job Search', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 (DRE)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
