export default {
  editorialVoice: 'hackportugal',
  id: 'higher-education-foreigners',
  categoryId: 'education_children',
  title: 'Higher education in Portugal — for international students',
  tldr: 'Bachelor’s degree (licenciatura) — 3 years, master’s degree (mestrado) — 2 years, PhD (doutoramento) — 3–4 years. Admission is via Concurso Nacional de Acesso (for Portugal residents) or Concurso Especial para Estudantes Internacionais (only for non-EU citizens).\n\nCost: EU residents pay the same as Portuguese students — €700–1,400/year at public universities, non-EU students — €2,000–7,000/year at public universities, €3,500–15,000/year at private ones. Top universities: Universidade de Lisboa, Universidade do Porto, Universidade Nova de Lisboa, Universidade de Coimbra (5 in the world top 500).\n\nErasmus+ — full access. D4 Student Visa for non-EU citizens.',
  tags: ['higher education', 'licenciatura', 'university', 'erasmus'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'levels',
      title: '🎓 Levels and duration',
      content: [
        { kind: 'checklist', items: [
          '**Licenciatura** (bachelor’s degree): 3 years, 180 ECTS — the main first cycle',
          '**Mestrado** (master’s degree): 1.5–2 years, 90–120 ECTS — second cycle',
          '**Mestrado Integrado**: for some regulated professions. **Medicina** — usually 6 years / 360 ECTS; **Arquitetura** — often 5 years / 300 ECTS; in Engenharia many antigos mestrados integrados have been reorganised into licenciatura + mestrado (check each course with DGES)',
          '**Doutoramento** (PhD): 3–4 years — third cycle',
          '**CTeSP** (Curso Técnico Superior Profissional): 2 years, 120 ECTS — vocational higher education, without an academic degree',
          '**Pós-graduação**: short specialised courses (6–12 months)'
        ]}
      ]
    },
    {
      id: 'admission',
      title: '📝 Admission routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'PT/EU/EEA/Swiss citizens and some non-EU residents (CNA)', content: [
            { kind: 'checklist', items: [
              '**Concurso Nacional de Acesso (CNA)**: the general competition — applies if you are NOT considered an Estudante Internacional',
              'CNA also applies to non-EU residents with legal residence in Portugal for **>2 continuous years by 1 January of the admission year** (not counting time spent only under a student permit) or with estatuto de igualdade',
              'Entrance exams (Exames Nacionais) in year 12 — mandatory for the competition',
              'Allocation by score: nota do secundário + provas de ingresso (course weightings are set by DGES)',
              'PT/EU in public licenciatura: propina **up to ~€697/year maximum**',
              'If you have a foreign school diploma — you need equivalência + to sit a local exam'
            ]}
          ]},
          { id: 'a2', title: 'Non-EU citizens', content: [
            { kind: 'checklist', items: [
              '**Concurso Especial para Estudantes Internacionais** (CEIE)',
              'A process separate from CNA — each university decides for itself',
              'Requirements: secondary school diploma suitable for higher education in the country of origin + certificado de equivalência (1–3 months to obtain through DGES)',
              'Often — the university’s own entrance exams / portfolio / interview',
              'Application deadlines: usually February–April (for a September start)',
              'Fees as for non-EU students: €2,000–7,000/year at public universities, €3,500–15,000 at private ones',
              '⚠️ Some medicine and veterinary faculties have a quota only for Portuguese/EU citizens — non-EU citizens cannot enrol'
            ]}
          ]},
          { id: 'a3', title: 'Maiores de 23 (for adults)', content: [
            { kind: 'paragraph', text: 'A separate competition for people over 23 without a standard diploma. The university sets its own tests. Works for foreigners with pre-university experience.' }
          ]},
          { id: 'a4', title: 'Transfer from another university', content: [
            { kind: 'checklist', items: [
              'If you have already studied at a foreign university — a transfer is possible',
              'ECTS credits are transferred (if the institution is accredited)',
              'Process: regresso ao ensino superior',
              'It is better to transfer into the 2nd or 3rd year at a Portuguese university'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏛️ Top universities',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Lisbon', content: [
            { kind: 'checklist', items: [
              '**Universidade de Lisboa (ULisboa)** — the largest, top-300 QS. Medicine, law, engineering, art',
              '**Universidade Nova de Lisboa** — modern, top-300 QS. Economics (NovaSBE — one of the best in Europe), engineering, healthcare',
              '**Universidade Católica Portuguesa (UCP)** — private, prestigious (Catholic) — law, management',
              '**Iscte** (Instituto Universitário de Lisboa) — social sciences, business',
              '**ISCSP** — political science, international relations'
            ]}
          ]},
          { id: 'u2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Universidade do Porto (UP)** — 2nd largest, top-300 QS. Engineering, medicine, architecture',
              '**Universidade Católica Portuguesa (Porto)** — private, business, healthcare',
              '**Escola Superior Artística do Porto** — art'
            ]}
          ]},
          { id: 'u3', title: 'Regions', content: [
            { kind: 'checklist', items: [
              '**Universidade de Coimbra** — one of the oldest in Europe (since 1290). UNESCO. Medicine, philosophy, engineering',
              '**Universidade de Aveiro** — materials science, engineering',
              '**Universidade do Minho** (Braga/Guimarães) — computer science',
              '**Universidade do Algarve** — marine sciences, tourism',
              '**Universidade da Madeira, Açores** — regional'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Cost',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Public universities', content: [
            { kind: 'checklist', items: [
              '**EU/residents considered national/EU**: licenciatura — **up to ~€697/year maximum** (DGES propina cap); master’s and PhD — separate tariffs',
              '**Non-EU (CEEI, Estudante Internacional)**: international propinas are set by each university/course — see the edital for the specific course',
              'Some medicine / engineering faculties — at the upper end of this range'
            ]}
          ]},
          { id: 'c2', title: 'Private universities', content: [
            { kind: 'checklist', items: [
              '€3,500–15,000/year — depends on the programme',
              '**NovaSBE MBA**: €30,000–50,000/year',
              '**UCP Law**: €5,000–8,000/year',
              '**ISG Business School**: €4,000–7,000',
              'Recognition: works in the EU; for employers in the USA — mainly top brands are recognised'
            ]}
          ]},
          { id: 'c3', title: 'Additional expenses', content: [
            { kind: 'checklist', items: [
              '📚 Textbooks: €100–300/semester (you can buy second-hand in Facebook groups)',
              '🏠 Student residence (residência universitária): €150–300/month',
              '🍽️ University canteen: €2.65/meal (cantina social)',
              '🚇 Student travel pass: €30/month (Lisbon/Porto)',
              'Health insurance (for non-EU students): ~€25/month',
              '💳 Acedo card (student): discounts on transport, food, tickets'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bolsa',
      title: '💼 Scholarships and funding',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'DGES national bolsas', content: [
            { kind: 'checklist', items: [
              'For Portugal residents: the amount depends on income and the DGES tariff — check current values on dges.gov.pt and with your university’s Serviços de Ação Social',
              'Application: annually according to the DGES calendar after admission',
              'Through each university’s Serviços de Ação Social',
              'The means-test condition is calculated using the household rendimento per capita — check the formula on dges.gov.pt'
            ]}
          ]},
          { id: 'b2', title: 'International scholarships', content: [
            { kind: 'checklist', items: [
              '**Erasmus+**: for residents / short-term exchange, €800–1,000/month',
              '**Camões Institute bolsas**: for citizens of PALOP, Timor-Leste, Brasil',
              '**FCT (Fundação para a Ciência e Tecnologia)**: PhD scholarship — the amount is updated periodically; see the current tabela de bolsas FCT (subsídio + propinas according to the regulations)',
              '**EU Marie Skłodowska-Curie**: for PhD/post-doc — €3,000+/month',
              '**University-specific**: all top universities have merit-based scholarship programmes (50–100% tuition discounts)',
              'Competition: medicine — the hardest; science and engineering — better chances'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Language of instruction',
      content: [
        { kind: 'checklist', items: [
          '**Bachelor’s degree**: most programmes are in Portuguese; some undergraduate programmes are in English (Nova, IST, ISEG)',
          '**Mestrado**: 30–50% in English at top universities',
          '**PhD**: often in English, dissertation language by choice',
          'Portuguese requirement: A2–B1 for undergraduate degrees (if taught in Portuguese), CIPLE or school certificate',
          'English requirement: IELTS 6.0+ / TOEFL 80+ for English-taught programmes',
          'Portuguese courses for foreigners are free at most universities'
        ]}
      ]
    },
    {
      id: 'd4-visa',
      title: '🛂 D4 Student Visa',
      content: [
        { kind: 'checklist', items: [
          'For non-EU students studying full-time on a programme at a Portuguese university',
          'Documents: acceptance letter, proof of funds (guideline minimum **12×SMN per year for the main applicant — in 2026 this is €11,040**; the consulate/VFS may accept a scholarship, bank balance, sponsorship and/or prepaid accommodation), health insurance, accommodation',
          'Application at the consulate in the country of residence',
          'Timeframe: 1–3 months',
          'Visa → entry → to AIMA for residence permit D4 (plus a separate AIMA fee — table in force from 01.03.2026)',
          '**After graduation**: you can request **autorização de residência para procura de trabalho ou criação de empresa** — usually up to 12 months (Lei 23/2007 art. 122). This is **not** the same procedure as the external visto para procura de trabalho for 120+60 days',
          'Or switch to D3 / D8 / D2 after obtaining a contract / opening a business',
          'For citizenship: under current law there is no 0.5 coefficient — years with a valid student título de residência usually count as ordinary legal residence (Lei 37/81 art. 6). ⚠️ **Decreto AR 48/XVII was promulgated by President Seguro on 03.05.2026** — published on 18.05.2026 as **Lei Orgânica n.º 1/2026**, in force from **19.05.2026**; naturalisation rules after this date — 7 years CPLP+EU / 10 years for others, the transitional provision protects cases submitted BEFORE 19.05.2026'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Licenciatura at a public university (national/EU)', amountEURMax: 697, note: '€/year — DGES propina cap' },
    { label: 'Licenciatura at a public university (Estudante Internacional / CEEI)', note: 'set by each university/course — see the edital' },
    { label: 'Licenciatura at a private university', amountEURMin: 3500, amountEURMax: 15000, note: '€/year' },
    { label: 'Residência universitária', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'Bolsa FCT PhD', note: 'see the current tabela de bolsas FCT' }
  ],
  sources: [
    { title: 'DGES — Directorate-General for Higher Education', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — recognition of foreign degrees and diplomas', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 23/2007 (art. 122 — residence after studies)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CNA — Concurso Nacional de Acesso', url: 'https://www.dges.gov.pt/guias/indest.asp', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'FCT — Foundation for Science and Technology', url: 'https://www.fct.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
