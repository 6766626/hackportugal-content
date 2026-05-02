export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Enrolling a child in a Portuguese school',
  tldr: 'Education in Portugal is compulsory from ages 6 to 18. State schools are free, and enrolment is based on the area of residence via Portal das Matrículas. Private schools (€3,000–15,000 per year) and international schools (€10,000–25,000 per year) are also possible. Admission of new pupils is until 15 June for studies starting in September; foreigners may submit documents throughout the year.',
  tags: ['school', 'education', 'enrolment', 'children'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Types of schools',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'State schools', content: [
            { kind: 'paragraph', text: 'Free for all residents. Quality varies by region, and rankings are publicly available. The language of instruction is Portuguese. For children for whom Portuguese is not their native language, there is the PLNM programme — Portuguese as a non-native language.' }
          ]},
          { id: 't2', title: 'Private schools', content: [
            { kind: 'paragraph', text: '€3,000–15,000 per year. Smaller classes, more extracurricular activities. The language of instruction is Portuguese, or bilingual programmes.' }
          ]},
          { id: 't3', title: 'International schools', content: [
            { kind: 'paragraph', text: '€10,000–25,000 per year. IB, British, French or American programmes. Lisbon, Porto, Algarve. Popular schools: St. Julian\'s, CAISL (Carlucci American International School of Lisbon), International Preparatory, German School, French Lycée.' }
          ]},
          { id: 't4', title: 'Home education', content: [
            { kind: 'paragraph', text: 'Permitted when registered with DGESTE. Annual examinations take place at a partner school.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Structure of education',
      content: [
        { kind: 'checklist', items: [
          'Nursery, Creche (0–3 years) — not compulsory, paid even in state institutions',
          'Pre-school education, Pré-escolar / Jardim de Infância (3–6 years) — compulsory from age 5',
          '1º Ciclo (years 1–4, ages 6–10) — compulsory',
          '2º Ciclo (years 5–6, ages 10–12) — compulsory',
          '3º Ciclo (years 7–9, ages 12–15) — compulsory',
          'Secundário (years 10–12, ages 15–18) — compulsory. Choice: academic or vocational courses'
        ]}
      ]
    },
    {
      id: 'enrollment',
      title: 'Enrolment process',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Identify the school cluster for your place of residence', content: [
            { kind: 'paragraph', text: 'On portaldasmatriculas.edu.gov.pt, enter the postcode → a list of schools in your zone. Priority is given to children from that zone.' }
          ]},
          { id: 'e2', title: '2. Registration on the portal', content: [
            { kind: 'paragraph', text: 'Portal das Matrículas → register via Chave Móvel Digital (state electronic signature) + the parent\'s Cartão de Cidadão, if available.' }
          ]},
          { id: 'e3', title: '3. Submit the enrolment application', content: [
            { kind: 'paragraph', text: 'Main session window for the 2026–2027 school year: 14 April – 14 May 2026 (Portal das Matrículas, pre-school education + year 1 of 1º Ciclo). For 2º Ciclo, 3º Ciclo and Secundário — their own deadlines apply; check the order for each year. For a transfer or relocation — at any time, but preferably before the end of July.' }
          ]},
          { id: 'e4', title: '4. Documents', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / child\'s passport',
              'Cartão de Cidadão / parent\'s passport',
              'NIF of the child and parents',
              'Proof of address (atestado de residência from Junta de Freguesia)',
              'Report card from the previous school (apostille + translation for foreign documents)',
              'Vaccination record (boletim de vacinas)',
              'Número de Utente (SNS patient number)',
              '3×4 photo'
            ]}
          ]},
          { id: 'e5', title: '5. Wait for the result', content: [
            { kind: 'timeline', text: 'For year 1 — results at the end of July. For a transfer, the school responds within 30 days.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — Portuguese as a non-native language',
      content: [
        { kind: 'paragraph', text: 'For children who do not speak Portuguese, there is the PLNM programme. Additional language hours (2–5 per week), adaptation of assessments during the first 2 years. It is applied automatically when a foreign child is enrolled in a state school.' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial support',
      content: [
        { kind: 'checklist', items: [
          'Free textbooks for all pupils in state schools',
          'ASE (Acção Social Escolar) — for low-income families: free lunches, transport, school trips',
          'Abono de Família (child benefit) — monthly child benefit (see separate guide)',
          'IRS education deduction — 30% up to €800 per child'
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
