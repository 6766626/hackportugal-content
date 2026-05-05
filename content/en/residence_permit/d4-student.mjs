export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'Visa D4 (student) — bachelor’s, master’s, doctoral',
  tldr: 'D4 is a student visa for those admitted to a Portuguese university or to language courses longer than 90 days. Grants a residence permit for the duration of studies. Right to work up to 20 hours per week. After graduation, you can switch to D3 or to the Procuro Trabalho visa to look for work for up to 1 year.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'student', 'residence permit', 'study'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Admission to an accredited university or language centre (programme of at least 6 months)',
          'Proof of payment for the first year of study',
          'Proof of means of subsistence (about €820/month × 12 months for non‑CPLP citizens)',
          'Accommodation in Portugal (tenancy contract or student residence)',
          'Health insurance',
          'Criminal record certificate',
          'For CPLP citizens — simplified process'
        ]}
      ]
    },
    {
      id: 'apply',
      title: 'How to enrol',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Choose a programme', content: [
            { kind: 'paragraph', text: 'Via DGES for public universities (www.dges.gov.pt), directly with universities for private ones. There is a special international admission round for foreign applicants.' }
          ]},
          { id: 'a2', title: '2. Recognition of school-leaving certificate', content: [
            { kind: 'paragraph', text: 'For a bachelor’s degree, equivalence of the school-leaving certificate is required. Through DGES or the university.' }
          ]},
          { id: 'a3', title: '3. Submit documents to the university', content: [
            { kind: 'paragraph', text: 'Deadlines: for public institutions — July–August; for private ones — year-round for some programmes.' }
          ]},
          { id: 'a4', title: '4. Receive the admission letter', content: [
            { kind: 'paragraph', text: 'Required for the D4 visa.' }
          ]},
          { id: 'a5', title: '5. Apply for the D4 visa', content: [
            { kind: 'paragraph', text: 'At the consulate, with proof of admission, finances and insurance.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Rights under D4',
      content: [
        { kind: 'checklist', items: [
          'Work up to 20 hours per week (full time during holidays)',
          'Registration in SNS (public healthcare)',
          'Renewal for the duration of studies',
          'Switch to D3 (work) after graduation without leaving the country',
          'After graduation — Procuro Trabalho visa for 1 year to look for work'
        ]}
      ]
    },
    {
      id: 'cplp-note',
      title: 'CPLP citizens',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Brazilians can apply directly to some universities via ENEM (Brazilian exam) and obtain a CPLP residence permit instead of D4.' },
        { kind: 'paragraph', text: 'Other CPLP citizens: under the agreement, academic exchange programmes are available. Check on the target university’s website.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'Public university', amountEURMin: 700, amountEURMax: 7000, note: 'per year, for foreign students' },
    { label: 'Private university', amountEURMin: 3500, amountEURMax: 15000, note: 'per year' },
    { label: 'Language course (CIPLE preparation)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Directorate‑General for Higher Education', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MNE Visas — Study Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Foreign students', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
