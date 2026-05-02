export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'D4 visa (student) — bachelor’s, master’s, doctoral studies',
  tldr: 'D4 is a student visa for those admitted to a Portuguese university or to language courses lasting more than 90 days. It gives a residence permit for the period of study. Right to work up to 20 hours a week. After graduation, it is possible to switch to D3 or the Procuro Trabalho visa to look for work for up to 1 year.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'student', 'residence permit', 'study'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Admission to an accredited university or language centre (at least 6 months under the programme)',
          'Proof of payment for the first year of study',
          'Proof of funds for living costs (around €820/month × 12 months for non-CPLP citizens)',
          'Accommodation in Portugal (rental contract or student residence)',
          'Health insurance',
          'Criminal record certificate',
          'For CPLP citizens — simplified process'
        ]}
      ]
    },
    {
      id: 'apply',
      title: 'How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Choose a programme', content: [
            { kind: 'paragraph', text: 'Through DGES for public universities (www.dges.gov.pt), directly through universities for private ones. There is a special international application route for foreigners.' }
          ]},
          { id: 'a2', title: '2. Recognition of your school-leaving certificate', content: [
            { kind: 'paragraph', text: 'For bachelor’s degrees, recognition of equivalence of the certificate is required. Through DGES or the university.' }
          ]},
          { id: 'a3', title: '3. Submit documents to the university', content: [
            { kind: 'paragraph', text: 'Deadlines: for public universities — July–August; for private universities — year-round for some programmes.' }
          ]},
          { id: 'a4', title: '4. Receive the admission letter', content: [
            { kind: 'paragraph', text: 'Needed for the D4 visa.' }
          ]},
          { id: 'a5', title: '5. Apply for the D4 visa', content: [
            { kind: 'paragraph', text: 'At the consulate, with admission, proof of finances and insurance.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Rights under D4',
      content: [
        { kind: 'checklist', items: [
          'Work up to 20 hours a week (full-time during holidays)',
          'Registration with SNS (free healthcare)',
          'Renewal for the period of study',
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
        { kind: 'paragraph', text: 'Other CPLP citizens: educational exchange programmes are available under agreements. Check the website of the university you need.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'Public university', amountEURMin: 700, amountEURMax: 7000, note: 'per year, for foreigners' },
    { label: 'Private university', amountEURMin: 3500, amountEURMax: 15000, note: 'per year' },
    { label: 'Language course (preparation for CIPLE)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Directorate-General for Higher Education', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'MNE Visas — Study Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacoes-gerais/tipos-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Foreign students', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
