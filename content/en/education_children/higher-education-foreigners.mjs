export default {
  editorialVoice: 'hackportugal',
  id: 'higher-education-foreigners',
  categoryId: 'education_children',
  title: 'Higher education in Portugal — for international students',
  tldr: 'Bachelor’s degree (licenciatura) — 3 years, master’s degree (mestrado) — 2 years, PhD (doutoramento) — 3–4 years. Admission is via Concurso Nacional de Acesso (for residents of Portugal) or Concurso Especial para Estudantes Internacionais (only for non-EU citizens). Cost: EU residents pay the same as Portuguese students — €700–1,400/year at public universities, non-EU students — €2,000–7,000/year at public universities, €3,500–15,000/year at private ones. Top universities: Universidade de Lisboa, Universidade do Porto, Universidade Nova de Lisboa, Universidade de Coimbra (5 in the world top 500). Erasmus+ — full access. D4 Student Visa for non-EU citizens.',
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
          '**Mestrado Integrado**: 5 years, 300 ECTS — for medicine, architecture, engineering; a single course instead of bachelor’s + master’s',
          '**Doutoramento** (PhD): 3–4 years — third cycle',
          '**CTeSP** (Curso Técnico Superior Profissional): 2 years, 120 ECTS — professional education, without an academic degree',
          '**Pós-graduação**: short specialised courses (6–12 months)'
        ]}
      ]
    },
    {
      id: 'admission',
      title: '📝 Admission routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'EU / EEA / Swiss citizens + residents of Portugal', content: [
            { kind: 'checklist', items: [
              '**Concurso Nacional de Acesso** (CNA): general admissions competition, runs from May to September',
              'Entrance exams (Exames Nacionais) in year 12 — mandatory for the competition',
              '5 application choices (preferences)',
              'Allocation by score: school average + exams',
              'Pay the same as residents of Portugal (~€700–1,400/year at public universities)',
              'If you have a foreign school diploma — you need to obtain equivalência + take a local exam'
            ]}
          ]},
          { id: 'a2', title: 'Non-EU citizens', content: [
            { kind: 'checklist', items: [
              '**Concurso Especial para Estudantes Internacionais** (CEIE)',
              'A process separate from CNA — each university decides for itself',
              'Requirements: secondary school diploma suitable for higher education in the country of origin + certificado de equivalência (1–3 months to obtain via DGES)',
              'Often — the university’s own entrance exams / portfolio / interview',
              'Application deadlines: usually February–April (for a September start)',
              'Non-EU fees: €2,000–7,000/year at public universities, €3,500–15,000 at private ones',
              '⚠️ Some medicine and veterinary faculties have quotas only for Portuguese/EU citizens — non-EU citizens cannot be admitted'
            ]}
          ]},
          { id: 'a3', title: 'Maiores de 23 (for adults)', content: [
            { kind: 'paragraph', text: 'A separate admissions route for people over 23 without a standard diploma. The university sets its own tests. Works for foreigners with pre-university experience.' }
          ]},
          { id: 'a4', title: 'Transfer from another university', content: [
            { kind: 'checklist', items: [
              'If you have already studied at a foreign higher education institution — transfer is possible',
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
              '**Universidade de Lisboa (ULisboa)** — the largest, QS top 300. Medicine, law, engineering, arts',
              '**Universidade Nova de Lisboa** — modern, QS top 300. Economics (NovaSBE — one of the best in Europe), engineering, healthcare',
              '**Universidade Católica Portuguesa (UCP)** — private, prestigious (Catholic) — law, management',
              '**Iscte** (Instituto Universitário de Lisboa) — social sciences, business',
              '**ISCSP** — political science, international relations'
            ]}
          ]},
          { id: 'u2', title: 'Porto', content: [
            { kind: 'checklist', items: [
              '**Universidade do Porto (UP)** — 2nd largest, QS top 300. Engineering, medicine, architecture',
              '**Universidade Católica Portuguesa (Porto)** — private, business, healthcare',
              '**Escola Superior Artística do Porto** — arts'
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
              '**EU/residents**: €697–1,400/year (bachelor’s), €1,200–3,000 (master’s), €2,500–4,000 (PhD)',
              '**Non-EU**: €2,000–7,000/year (bachelor’s), €3,000–8,000 (master’s) — each university sets its own fees',
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
          { id: 'b1', title: 'DGES — national bolsas', content: [
            { kind: 'checklist', items: [
              'For residents of Portugal: €500–5,000/year depending on income',
              'Application: by 30 September after admission',
              'Via the Serviços de Acção Social of each university',
              'Limit: family income ≤ 5× IAS'
            ]}
          ]},
          { id: 'b2', title: 'International scholarships', content: [
            { kind: 'checklist', items: [
              '**Erasmus+**: for residents / short-term exchange, €800–1,000/month',
              '**Camões Institute bolsas**: for citizens of PALOP, Timor-Leste, Brasil',
              '**FCT (Fundação para a Ciência e Tecnologia)**: PhD scholarship €1,100/month + tuition',
              '**EU Marie Skłodowska-Curie**: for PhD/post-doc — €3000+/month',
              '**University-specific**: all top universities have merit-based scholarship programmes (50–100% tuition discounts)',
              'Competition: medicine — the hardest; sciences and engineering — better chances'
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
          '**Bachelor’s**: most programmes are in Portuguese; some bachelor’s programmes are in English (Nova, IST, ISEG)',
          '**Mestrado**: 30–50% in English at top universities',
          '**PhD**: often in English, dissertation language by choice',
          'Portuguese requirement: A2–B1 for bachelor’s degrees (if taught in Portuguese), CIPLE or school certificate',
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
          'Documents: acceptance letter, proof of funds (>€7000/year), health insurance, accommodation',
          'Apply at the consulate in your country of residence',
          'Timeframe: 1–3 months',
          'Visa → entry → to AIMA for residence permit D4',
          'After graduation: Procuro-trabalho D job-search visa (120 days to look for work)',
          'Or switch to D3 / D8 / D2 after obtaining a contract / opening a business',
          'Study time DOES COUNT towards the qualifying period for citizenship (but with a coefficient of 0.5 — i.e. 2 years of study = 1 year of qualifying period)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Bachelor’s degree at a public university (EU)', amountEURMin: 697, amountEURMax: 1400, note: '€/year' },
    { label: 'Bachelor’s degree at a public university (non-EU)', amountEURMin: 2000, amountEURMax: 7000, note: '€/year' },
    { label: 'Bachelor’s degree at a private university', amountEURMin: 3500, amountEURMax: 15000, note: '€/year' },
    { label: 'Residência universitária', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'Bolsa FCT PhD', amountEUR: 1100, note: '€/month + tuition' }
  ],
  sources: [
    { title: 'DGES — Direcção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CNA — Concurso Nacional de Acesso', url: 'https://www.dges.gov.pt/guias/indest.asp', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FCT — Fundação para a Ciência e Tecnologia', url: 'https://www.fct.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Study in Portugal (portal)', url: 'https://www.study-in-portugal.pt/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
