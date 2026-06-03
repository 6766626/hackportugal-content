export default {
  editorialVoice: 'hackportugal',
  id: 'procuro-trabalho',
  categoryId: 'residence_permit',
  title: 'Procura de Trabalho (job search) visa — status and new rules',
  tldr: 'IMPORTANT (as of May 2026): the former "Procura de Trabalho" visa has been suspended. Lei n.º 61/2025 of 22 Oct 2025 (which amended art. 57.º-A of Lei 23/2007) means that, from 23 Oct 2025, consulates and visa centres (VFS and others) NO LONGER accept applications for the former job search visa; previously scheduled appointments were cancelled. It is replaced by the "Visto para Procura de Trabalho Qualificado" (qualified job search visa), available only to holders of specialised technical competencies / for highly qualified activity. Applications will be possible ONLY once the corresponding regulation (portaria) is published; as of May 2026 the regulation has not yet been published, so no application can be submitted yet. Baseline model of the new visa: 120 days (+ a further 60-day extension); it is a visa, NOT a residence permit; the residence permit is issued through AIMA only if, during the visa period, the applicant finds a job and applies for autorização de residência. Expected proof of funds — minimum 3× SMN (in 2026 SMN = €920, i.e. a benchmark of approx. €2,760 for 4 months) + return ticket. Exact requirements will be set by the regulation — check vistos.mne.gov.pt.',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['procuro trabalho', 'job search', 'visa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'status',
      title: 'Visa status as of May 2026 (read first)',
      content: [
        { kind: 'paragraph', text: 'The former "Procura de Trabalho" visa has been suspended. Under Lei n.º 61/2025 of 22 Oct 2025 (amending art. 57.º-A of Lei 23/2007), from 23 Oct 2025 consulates and visa centres (VFS and others) do NOT accept applications for it, and previously scheduled appointments were cancelled.' },
        { kind: 'paragraph', text: 'It is being replaced by the "Visto para Procura de Trabalho Qualificado" — only for highly qualified specialists with specialised technical competencies. Applications will be possible ONLY once the regulation (portaria) is published. As of May 2026 the regulation has NOT been published, so the new visa cannot be obtained yet. Watch for official guidance at vistos.mne.gov.pt.' }
      ]
    },
    {
      id: 'who',
      title: 'Who it suits (under the new rules)',
      content: [
        { kind: 'checklist', items: [
          'Highly qualified specialist with specialised technical competencies (education + experience) — the new visa is aimed specifically at such applicants',
          'Candidate for highly qualified high-demand roles (IT, engineering, medicine, research and development)',
          'Graduate of a Portuguese university (after D4 — separate stay rules)',
          'Employer support at the application stage is NOT required'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Expected requirements (to be set by the regulation)',
      content: [
        { kind: 'paragraph', text: 'The exact document list for the new visa will be set by the regulation (portaria), which had not been published as of May 2026. The list below is a guide based on prior practice and the wording of the law; check the current requirements at vistos.mne.gov.pt.' },
        { kind: 'checklist', items: [
          'Proof of qualifications (specialised technical competencies / high qualification) — the key condition of the new visa',
          'Proof of funds to live on for 4 months — minimum 3× SMN (in 2026 SMN = €920, i.e. a benchmark of approx. €2,760). This is the baseline; in practice a larger buffer is safer. Do NOT use the IAS basis — it understates the requirement',
          'Registration / declaration with IEFP (expected to be mandatory under the new rules)',
          'Return ticket or equivalent proof',
          'Accommodation in Portugal (bookings / contract for 120 days)',
          'Health insurance for 120+ days',
          'Criminal record certificate with apostille',
          'CV + motivation letter'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apply at the consulate (CURRENTLY UNAVAILABLE)', content: [
            { kind: 'paragraph', text: 'As of May 2026 applications cannot be submitted: intake is suspended until the regulation for the new Procura de Trabalho Qualificado visa is published. When intake reopens — via vistos.mne.gov.pt. Expected processing time up to 60 days.' }
          ]},
          { id: 'p2', title: '2. Enter on the visa', content: [
            { kind: 'paragraph', text: 'The visa gives 120 days of stay in Portugal to look for work — it is a visa, NOT a residence permit. There is no automatic issue of a residence permit on entry.' }
          ]},
          { id: 'p3', title: '3. Extend the visa for 60 days (if needed)', content: [
            { kind: 'paragraph', text: 'A visa extension for a further 60 days is processed through AIMA. This is an extension of STAY STATUS, not the issue of a residence permit.' }
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
        { kind: 'paragraph', text: 'Graduates of Portuguese universities have traditionally had simpler options to stay and look for work and to apply for a residence permit from inside the country. After the Lei n.º 61/2025 reform, the exact rules for graduates will be set by the regulation for the new visa — confirm the procedure with your university and at vistos.mne.gov.pt. It is best to plan your steps 3-6 months before completing the degree.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa (Procura de Trabalho Qualificado)', amountEUR: 90, note: 'Guide based on prior practice; the exact fee will be set by the regulation for the new visa' },
    { label: 'AIMA — visa extension for 60 days (if needed)', amountEURMin: 50, amountEURMax: 150, note: 'Check the exact amount in the current AIMA fee table' },
    { label: 'AIMA — autorização de residência (if work is found and a residence permit application is submitted)', amountEURMin: 200, amountEURMax: 400, note: 'Depends on the route (art. 88, 90-A, etc.) and the current AIMA fee table from 01.03.2026' },
    { label: 'Insurance for 4 months', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Proof of funds (reserve) — 3× SMN for 4 months', amountEURMin: 2760, amountEURMax: 5000, note: 'Minimum benchmark: 3×€920 = €2,760; more is safer. Do NOT confuse with 4×IAS' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 90,
  sources: [
    { title: 'Vistos MNE — change to the job search visa regime (Destaque)', url: 'https://vistos.mne.gov.pt/pt/destaques', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Vistos MNE — Procura de Trabalho Qualificado (documentation)', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/documentacao-instrutoria/procura-de-trabalho', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'AIMA', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Lei 23/2007 (DRE) — amended by Lei n.º 61/2025', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
