export default {
  editorialVoice: 'hackportugal',
  id: 'university-admission',
  categoryId: 'education_children',
  title: 'Admission to a Portuguese university — for foreigners',
  tldr: 'For admission to a Portuguese university (bachelor’s degree, licenciatura): via the CNES/DGES Concurso Nacional portal (national competition) — for Portuguese/EU school leavers; or via Concurso Especial para Estudantes Internacionais (CEEI) — for non-EU students. You need: diploma equivalence (recognition at certificacao.dge.mec.pt), Portuguese B1-B2 (for a licenciatura taught in Portuguese) or IELTS 6.0+ (for English-taught programmes), and a motivation letter. Deadlines: applications from May to July for the autumn semester. Cost: ~€700-1,500/year for a licenciatura (public); ~€3,000-12,000/year (private).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['university', 'admission', 'diploma', 'recognition', 'dges', 'cnes'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'options',
      title: '🎓 Admission routes',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Concurso Nacional (national)', content: [
            { kind: 'checklist', items: [
              '👥 For: Portuguese/EU secondary school leavers (12th year in Portugal)',
              '📊 Points-based competition: 65% — school grades + 35% — provas de ingresso (entrance exams)',
              '⏰ Application: July-August',
              '🔢 Exams: mathematics, history, physics, chemistry — as required by the faculty',
              '✅ Result: recommended university/course via DGES',
              '⚠️ Not for foreigners with a school diploma from a non-EU country'
            ]}
          ]},
          { id: 'o2', title: 'CEEI — for foreigners (non-EU)', content: [
            { kind: 'checklist', items: [
              '👥 For: citizens of non-EU countries with a school leaving certificate from their own country',
              '📊 Each university admits according to its own criteria',
              '📑 Apply directly to the university, usually through GIRA (Gabinete de Internacionalização)',
              '⏰ Deadlines: January-June (depends on the university)',
              '🔢 Quotas: up to 25% of places on a course for foreigners',
              '💰 Price: HIGHER for foreigners — usually €4,000-8,000/year instead of €700-1,500',
              '🌐 More details: Lisbon — ulisboa.pt/internacional, Porto — up.pt/international'
            ]}
          ]},
          { id: 'o3', title: 'CPLP / lusophones', content: [
            { kind: 'checklist', items: [
              '🌐 Citizens of CPLP countries (Brazil, Cabo Verde, Angola, etc.) can apply through CEEI',
              '🆓 Some universities give Brazilians/CPLP the same price as Portuguese students — Universidade do Minho, Lusíada, IPS Setúbal',
              '📋 Recognition of ENEM (Brazilian national exam) — accepted at ULisboa, UPorto and others'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'document-equivalence',
      title: '📄 Diploma equivalence',
      content: [
        { kind: 'paragraph', text: 'For admission, you need equivalence of your school leaving certificate to Portuguese “Ensino Secundário” (12 years). This is done through DGE (Direção-Geral da Educação).' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Documents', content: [
            { kind: 'checklist', items: [
              '🎓 School leaving certificate with apostille (or legalised by the Portuguese embassy)',
              '📊 Transcript of grades for the last 2-3 years (with apostille)',
              '🌐 Certified translation into Portuguese',
              '🆔 Passport + residence permit (if any)',
              '📃 Application for equivalence'
            ]}
          ]},
          { id: 'e2', title: 'Process', content: [
            { kind: 'checklist', items: [
              '🌐 Apply via certificacao.dge.mec.pt (online)',
              '🏛️ Alternatively: at any state school (escola pública) — the headteacher accepts the documents',
              '⏱️ Processing: 1-3 months (faster in smaller towns)',
              '💰 Price: state fee €50',
              '📜 You receive a “Certificado de Equivalência” — the school diploma is recognised in Portugal'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Language of instruction',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Portuguese (most courses)', content: [
            { kind: 'checklist', items: [
              '📜 Level: B1-B2 minimum; for medicine and law — B2-C1',
              '🎓 CIPLE (B1) or DEPLE (B2) certificate from Instituto Camões (caple.letras.ulisboa.pt)',
              '💰 CIPLE exam €85',
              '📅 Sessions: monthly in major cities',
              '🌐 The university may also accept a DELE Camões certificate at B2 level',
              '⚠️ For CPLP countries (Brazil, Angola, Cabo Verde, etc.) — the requirement does not apply'
            ]}
          ]},
          { id: 'l2', title: 'English (programmes for foreigners)', content: [
            { kind: 'checklist', items: [
              '📜 IELTS 6.0+ or TOEFL 80+',
              '🎓 Programmes in English: ULisboa (medicine — IMED), NOVA SBE (business), UPorto (engineering)',
              '💰 English-taught programmes are usually more expensive (€5,000-10,000/year)',
              '🌐 List of English-taught programmes: studyinportugal.pt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏆 Top universities',
      content: [
        { kind: 'checklist', items: [
          '🏛️ **Universidade de Lisboa (ULisboa)** — the largest, all faculties, ranked #1 in Portugal',
          '🏛️ **Universidade do Porto (UPorto)** — strong engineering and medicine, #2',
          '🏛️ **Universidade de Coimbra (UCoimbra)** — the oldest (1290), strong law and humanities',
          '🏛️ **NOVA Lisboa** — modern, English-taught programmes, NOVA SBE MBA is prestigious',
          '🏛️ **Universidade de Aveiro** — technology, IT, engineering',
          '🏛️ **Universidade do Minho** (Braga) — IT, biomedicine',
          '🎨 **IST (Instituto Superior Técnico)** — flagship technical sciences institution',
          '🏥 **Faculdade de Medicina de Lisboa** — top medical faculty',
          '💼 **Católica Lisbon SBE** — private, strong for business/MBA',
          '📚 Full ranking: U-Multirank.eu or QS World University Rankings'
        ]}
      ]
    },
    {
      id: 'finance',
      title: '💰 Finances',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Cost', content: [
            { kind: 'checklist', items: [
              '🟢 Portuguese/EU students: €700-1,250/year (public university)',
              '🟡 Foreigners (CEEI): €3,000-7,000/year',
              '🔴 Private universities: €5,000-15,000/year',
              '💵 Housing: €250-500/month for a room, €600-900/month for a studio',
              '🍔 Food: €200-300/month',
              '📚 Textbooks: €100-300/semester'
            ]}
          ]},
          { id: 'f2', title: 'Scholarships and support', content: [
            { kind: 'checklist', items: [
              '💰 **Bolsa de Acção Social (DGES)** — for low-income Portuguese/EU students, €100-500/month',
              '💰 **Erasmus+** — for an exchange semester',
              '🇵🇹 **Bolsa Camões** — for foreigners studying Portuguese culture/language',
              '🌍 **Fulbright** (for the USA), **DAAD** (for Germany) — joint programmes with Portugal',
              '💼 **Programmes within universities**: ULisboa → Bolsa de Excelência, NOVA → Merit Scholarships',
              '📋 Scholarship applications are usually submitted 6 months before the semester starts'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'visa',
      title: '🛂 D4 visa (study)',
      content: [
        { kind: 'checklist', items: [
          '📜 After the acceptance letter from the university — apply for D4 at the Portuguese consulate in your country of residence',
          '📋 Documents: passport, acceptance letter, proof of funds (≥ €7,200/year = 12× IAS), insurance, proof of accommodation',
          '⏱️ Processing: 30-60 days',
          '🎫 Validity: 4 months for entry, then a residence permit at AIMA',
          '💼 D4 gives the right to part-time work up to 20 hours/week',
          '🎓 After completion (bachelor’s degree): “procura de trabalho” visa for 1 year to look for work'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '⏰ Start the process 1 year ahead — diploma recognition + language + application',
          '🇵🇹 Learn Portuguese BEFORE admission — most courses are in Portuguese, even “international tracks” have a Portuguese component',
          '🤝 GIRA (international office) at each university is the best contact; write to them with questions',
          '🏠 Housing in student residences (residências) is cheaper, but competitive — apply in advance',
          '📚 Erasmus+ during your studies opens many opportunities',
          '🌍 After a licenciatura — master’s degree 1-2 years, doctorate 3-4 years',
          '💼 Recognition of a licenciatura from your own country (for a master’s): through UPorto Reitoria or IST, 3-6 months, €200',
          '⚠️ For medical specialists: recognition is VERY complex, usually requiring 1-2 years of additional exams + residency'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Diploma equivalence (DGE)', amountEUR: 50 },
    { label: 'CIPLE B1 exam', amountEUR: 85 },
    { label: 'Portuguese/EU licenciatura (public) — propina', amountEURMin: 700, amountEURMax: 1250, note: '€/year' },
    { label: 'Foreigner (CEEI) — propina', amountEURMin: 3000, amountEURMax: 7000, note: '€/year' },
    { label: 'Private university', amountEURMin: 5000, amountEURMax: 15000, note: '€/year' },
    { label: 'D4 visa (consular fee)', amountEUR: 90 },
    { label: 'Student life in Lisbon', amountEURMin: 600, amountEURMax: 1100, note: '€/month' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Diploma equivalence', url: 'https://certificacao.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Study in Portugal — official website', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CAPLE — Portuguese as a foreign language', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
