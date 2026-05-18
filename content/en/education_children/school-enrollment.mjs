export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Enrolling a child in a Portuguese school',
  tldr: 'Education in Portugal is compulsory from age 6 to 18 (or until completion of secundário).\n\nState schools are free, and enrolment is by area of residence via Portal das Matrículas. Private schools (€3,000–15,000/year) and international schools (€10,000–25,000/year) are also possible.\n\nThe main matrícula windows depend on the level of education and the annual despacho; for pré-escolar/1.º ano 2026/2027 — 22 April – 1 June 2026 (Despacho 4472-A/2026). For relocation/transfer, a school may accept an application during the year if there is a place available.',
  tags: ['school', 'education', 'enrolment', 'children'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Types of schools',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'State schools', content: [
            { kind: 'paragraph', text: 'Free for all residents. Quality varies by region, and rankings are publicly available. The language of instruction is Portuguese. For children whose first language is not Portuguese, there is the PLNM programme — Portuguese as a non-native language.' }
          ]},
          { id: 't2', title: 'Private schools', content: [
            { kind: 'paragraph', text: '€3,000–15,000 per year. Smaller classes, more extracurricular activities. The language of instruction is Portuguese, or bilingual programmes.' }
          ]},
          { id: 't3', title: 'International schools', content: [
            { kind: 'paragraph', text: '€10,000–25,000 per year. IB, British, French or American curricula. Lisbon, Porto, the Algarve. Popular schools: St. Julian\'s, CAISL (Carlucci American International School of Lisbon), International Preparatory, German School, French Lycée.' }
          ]},
          { id: 't4', title: 'Home education (ensino doméstico/individual)', content: [
            { kind: 'paragraph', text: 'Permitted, but the child must be enrolled in a school; a request is submitted with a responsável educativo and an individual plan; assessment follows the school/legal rules. Before choosing this option, check the requirements of Portaria n.º 69/2019 and the current DGEstE/DGE instructions.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Education structure',
      content: [
        { kind: 'checklist', items: [
          'Nursery, Creche (0–3 years) — not compulsory; cost depends on the institution and the family’s circumstances, but for many children the free Creche Feliz programme applies',
          'Pre-school education, Pré-escolar / Jardim de Infância (3–6 years) — optional; the state provides a network of places, but compulsory education begins at age 6',
          '1º Ciclo (Years 1–4, ages 6–10) — compulsory',
          '2º Ciclo (Years 5–6, ages 10–12) — compulsory',
          '3º Ciclo (Years 7–9, ages 12–15) — compulsory',
          'Secundário (Years 10–12, ages 15–18) — compulsory. Choice: academic or vocational courses'
        ]}
      ]
    },
    {
      id: 'enrollment',
      title: 'Enrolment process',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Identify the school cluster for your place of residence', content: [
            { kind: 'paragraph', text: 'On portaldasmatriculas.edu.gov.pt, enter the postcode → a list of schools in your area. Priority is given to children from that area.' }
          ]},
          { id: 'e2', title: '2. Register on the portal', content: [
            { kind: 'paragraph', text: 'You can log in via autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão or credenciais do Portal das Finanças (NIF+AT password). If parents do not have access to digital means — the matrícula can be completed with support from the school/agrupamento.' }
          ]},
          { id: 'e3', title: '3. Submit an enrolment application', content: [
            { kind: 'paragraph', text: 'Main session window for the 2026–2027 school year: 22 April – 1 June 2026 (Portal das Matrículas, pre-school education + Year 1 of 1º Ciclo), according to Despacho n.º 4472-A/2026. For 2º Ciclo, 3º Ciclo and Secundário — there are separate deadlines, check the despacho for each year. For a transfer or relocation — at any time, but preferably before the end of July.' }
          ]},
          { id: 'e4', title: '4. Documents', content: [
            { kind: 'paragraph', text: 'Usually requested: ID of the child and parent, NIF, proof of address, school report/sworn translation, vaccination record, photo. If the child does not have a NIF, número de utente, atestado da junta or a complete foreign document package — the school must NOT block access to compulsory education: temporary enrolment and a parallel equivalência/posicionamento procedure are possible.' },
            { kind: 'checklist', items: [
              'Usually requested: Cartão de Cidadão / passport of the child and parent',
              'NIF of the child and parents (if available)',
              'Proof of address (atestado de residência OR other documents)',
              'School report from the previous school (apostille + sworn translation for foreign documents)',
              'Vaccination record (boletim de vacinas)',
              'If available: Número de Utente, 3×4 photo'
            ]}
          ]},
          { id: 'e5', title: '5. Wait for the result', content: [
            { kind: 'timeline', text: 'Publication dates for colocação and turmas lists are specified annually in the despacho/on Portal das Matrículas; for transfers, deadlines depend on the school and place availability.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — Portuguese as a non-native language',
      content: [
        { kind: 'paragraph', text: 'PLNM is assigned after an assessment of Portuguese proficiency, usually for pupils with an insufficient language level. It is **not automatic** right/obligation for every foreign national — the school determines the level and support measures under DGE rules (Portaria 223-A/2018 and 226-A/2018). A foreign child with good Portuguese may not be placed in PLNM, while a child with Portuguese citizenship whose first language is not Portuguese may be placed in it.' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial support',
      content: [
        { kind: 'checklist', items: [
          'Free **manuais escolares** via MEGA/vouchers for pupils in state schools and some schools with contrato de associação; workbooks and materials are often paid for separately',
          'ASE (**Ação Social Escolar**) — support according to the escalão do abono de família: meals, transport, materials and visitas de estudo may be free or subsidised',
          'Abono de Família (child benefit) — see the separate guide',
          'IRS education deduction — 30% eligible expenses, usually up to €800 per **agregado familiar** (not per child); the limit may increase in specific cases (for example, rent for displaced student)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Matrículas — official', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Directorate-General for Education', url: 'https://www.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Register a child at school', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/matricular-ou-renovar-a-matricula-no-ensino-obrigatorio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
