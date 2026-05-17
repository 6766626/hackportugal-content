export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'D4 visa (student) — bachelor’s, master’s, doctoral studies',
  tldr: 'D4 / residence visa for study — primarily for higher education and some recognised long-term programmes. For language/preparatory courses, a temporary stay visa is often used rather than D4. A student with a residence permit for higher education may work as an employee or as self-employed, provided the law is complied with and AIMA is notified — there is no general 20-hour-per-week limit under this regime. After completing studies, it is possible to request a residence permit/renewal to look for work or start a business for up to 1 year (this is NOT the same as the “job seeker visa” for entry from outside the country).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'student', 'residence permit', 'study'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Requirements',
      content: [
        { kind: 'checklist', items: [
          'Enrolment at an accredited higher education institution (for D4) or in a recognised long-term study programme; for language/preparatory courses, a temporary stay visa is often used',
          'Proof of payment for the first year of study',
          'Indicative funds for 2026: up to €920/month × 12 = €11,040, if the consulate applies the SMN. A scholarship, paid tuition/accommodation or termo de responsabilidade may be taken into account. Check the checklist of the specific consulate/VFS',
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
            { kind: 'paragraph', text: 'For non-EU international students, applications are usually made directly to the chosen public or private higher education institution through the Concurso Especial para Estudantes Internacionais (Decreto-Lei 36/2014). DGES (www.dges.gov.pt) administers the national access competition and is useful as a reference for the higher education system, but it is NOT a single application portal for foreigners.' }
          ]},
          { id: 'a2', title: '2. Recognition of secondary education / equivalência', content: [
            { kind: 'paragraph', text: 'The higher education institution may assess the school certificate itself for the international students competition. For formal equivalência ao ensino secundário, the procedure usually goes through a Portuguese school/education authorities (DGEstE/DGE), not through DGES. Check the instructions of the specific institution.' }
          ]},
          { id: 'a3', title: '3. Submit documents to the university', content: [
            { kind: 'paragraph', text: 'Timelines: for public institutions — July–August; for private institutions — year-round in some programmes.' }
          ]},
          { id: 'a4', title: '4. Receive the admission letter', content: [
            { kind: 'paragraph', text: 'Needed for the D4 visa.' }
          ]},
          { id: 'a5', title: '5. Apply for the D4 visa', content: [
            { kind: 'paragraph', text: 'At the consulate, with proof of enrolment, proof of funds and insurance.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Rights under D4',
      content: [
        { kind: 'checklist', items: [
          'Work as an employee or as self-employed, with notification to AIMA and compliance with labour, tax and immigration rules; there is NO general 20 h/week limit in Portugal for D4, but a scholarship/higher education institution may restrict employment',
          'After legalisation, it is possible to register with the SNS / centro de saúde. The SNS is mostly tendencialmente gratuito, but medicines and some services are partially paid for; before registration, health insurance is needed',
          'Renewal for the duration of studies',
          'If there is a job offer after graduation, it is possible to change the basis of the residence permit to professional activity; for high-qualified roles, the highly qualified activity regime may be possible. Eligibility depends on the contract, salary/qualifications and the decision of AIMA',
          'After completing studies, it is possible to request a residence permit/renewal to look for work or start a business for up to 1 year (Lei 23/2007 art. 122) — this is NOT the job seeker visa for entry from abroad'
        ]}
      ]
    },
    {
      id: 'cplp-note',
      title: 'CPLP citizens',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Brazilians may apply to some higher education institutions with ENEM (the Brazilian exam). As an immigration route, either a study visa/residence permit may be possible, or, if the conditions are met and the procedure is available, a CPLP residence permit. This must be checked against the current AIMA/consulate rules and the institution’s requirements. The CPLP regime is NOT a universal replacement for D4 in all situations.' },
        { kind: 'paragraph', text: 'Other CPLP citizens: educational exchange programmes are available under the agreement. Check the website of the relevant higher education institution.' }
      ]
    }
  ],
  costs: [
    { label: 'Consular visa', amountEUR: 90 },
    { label: 'Public university', amountEURMin: 700, amountEURMax: 7000, note: 'per year, for foreigners' },
    { label: 'Private university', amountEURMin: 3500, amountEURMax: 15000, note: 'per year' },
    { label: 'Language/preparatory course', amountEURMin: 500, amountEURMax: 2000, note: 'Accepted by the consulate only if it fits the relevant visa category and the institution/programme is accredited; CIPLE prep by itself does not guarantee D4' },
    { label: 'AIMA — processing/issuing residence permit and renewals', amountEURMin: 0, amountEURMax: 400, note: 'According to the current AIMA fees table from 01.03.2026; the amount depends on the type of act and urgency/channel' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — Study Visa', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Foreign students', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
