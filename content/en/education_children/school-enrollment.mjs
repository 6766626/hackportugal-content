export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Enrolling a child in a Portuguese school',
  tldr: 'Schooling in Portugal is compulsory from 6 to 18. State schools are free; enrolment is by catchment area via the Portal das Matrículas. Private schools are available (€3,000–15,000 per year) and international ones (€10,000–25,000 per year). The matrícula/renovação window for pré-escolar and 1.º ano for 2026/2027 is 22 April – 1 June 2026 (Despacho 4472-A/2026); foreigners can apply throughout the year.',
  tags: ['school', 'education', 'enrolment', 'children'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Types of schools',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'State schools', content: [
            { kind: 'paragraph', text: 'Free for all residents. Quality varies by region; rankings are publicly available. Language of instruction is Portuguese. For children for whom Portuguese is not native, there is the PLNM programme — Portuguese as a non-native language.' }
          ]},
          { id: 't2', title: 'Private schools', content: [
            { kind: 'paragraph', text: '€3,000–15,000 per year. Smaller classes, more extracurricular activities. Language of instruction — Portuguese or bilingual programmes.' }
          ]},
          { id: 't3', title: 'International schools', content: [
            { kind: 'paragraph', text: '€10,000–25,000 per year. IB, British, French or American programmes. Lisbon, Porto, Algarve. Popular schools: St. Julian\'s, CAISL (Carlucci American International School of Lisbon), International Preparatory, German School, French Lycée.' }
          ]},
          { id: 't4', title: 'Home education', content: [
            { kind: 'paragraph', text: 'Permitted with registration at DGESTE. Annual exams take place at a partner school.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Education structure',
      content: [
        { kind: 'checklist', items: [
          'Nursery, Creche (0–3 years) — not compulsory, fee-paying even in state institutions',
          'Pre-school education, Pré-escolar / Jardim de Infância (3–6 years) — compulsory from age 5',
          '1º Ciclo (Years 1–4, ages 6–10) — compulsory',
          '2º Ciclo (Years 5–6, ages 10–12) — compulsory',
          '3º Ciclo (Years 7–9, ages 12–15) — compulsory',
          'Secundário (Years 10–12, ages 15–18) — compulsory. Choice: academic or vocational tracks'
        ]}
      ]
    },
    {
      id: 'enrollment',
      title: 'Enrolment process',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Identify the school cluster for your address', content: [
            { kind: 'paragraph', text: 'On portaldasmatriculas.edu.gov.pt enter the postcode → list of schools for your zone. Priority is given to children from this zone.' }
          ]},
          { id: 'e2', title: '2. Register on the portal', content: [
            { kind: 'paragraph', text: 'Portal das Matrículas → register via Chave Móvel Digital (state digital signature) + Cartão de Cidadão of the parent, if available.' }
          ]},
          { id: 'e3', title: '3. Submit the enrolment application', content: [
            { kind: 'paragraph', text: 'Main session window for the 2026–2027 school year: 22 April – 1 June 2026 (Portal das Matrículas, pré-escolar + 1.º ano do 1º Ciclo), according to Despacho n.º 4472-A/2026. For 2º Ciclo, 3º Ciclo and Secundário — their own deadlines; check the Despacho for each year. For transfer or relocation — at any time, but preferably by the end of July.' }
          ]},
          { id: 'e4', title: '4. Documents', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / child’s passport',
              'Cartão de Cidadão / parent’s passport',
              'NIF of the child and parents',
              'Proof of address (Atestado de Residência from the Junta de Freguesia)',
              'Report/transcript from the previous school (apostille + translation for foreign documents)',
              'Vaccination card (boletim de vacinas)',
              'Número de Utente (SNS patient number)',
              'Photo 3×4'
            ]}
          ]},
          { id: 'e5', title: '5. Waiting for the result', content: [
            { kind: 'timeline', text: 'For 1.º ano — results at the end of July. For transfers the school replies within 30 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — Portuguese as a non-native language',
      content: [
        { kind: 'paragraph', text: 'For children who do not speak Portuguese, there is the PLNM programme. Additional language hours (2–5 per week), adapted grading in the first 2 years. Automatically applied when enrolling a foreign child in a state school.' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial support',
      content: [
        { kind: 'checklist', items: [
          'Free textbooks for all pupils in state schools',
          'ASE (Acção Social Escolar) — for low-income families: free meals, transport, trips',
          'Abono de Família (child benefit) — monthly benefit per child (see separate guide)',
          'IRS deduction for education — 30% up to €800 per child'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Matrículas — official', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Direcção-Geral da Educação', url: 'https://www.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Enrol a child in school', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/matricular-ou-renovar-a-matricula-no-ensino-obrigatorio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
