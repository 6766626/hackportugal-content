export default {
  editorialVoice: 'hackportugal',
  id: 'university-admission',
  categoryId: 'education_children',
  title: 'Admission to a Portuguese university — for foreigners',
  tldr: 'For admission to a Portuguese university (undergraduate, licenciatura): via DGES / Concurso Nacional de Acesso ao Ensino Superior (CNAES regulates access rules) — for Portuguese/EU school leavers; or via Concurso Especial para Estudantes Internacionais (CEEI) under DL 36/2014 — for candidates with Estudante Internacional status (usually non-EU, NOT PT residents for > 2 years by 1 January of the admission year, not EU family members and not people with estatuto de igualdade).\n\nYou need: equivalência/reconhecimento of your school certificate (through a state school/agrupamento under DGE rules), Portuguese B1-B2 (CAPLE: DEPLE=B1, DIPLE=B2) or IELTS 6.0+ for English-taught programmes, a motivation letter.\n\nCost: up to ~€697/year for PT/EU students in a public licenciatura; for CEEI international propinas are set separately by each university (usually higher).',
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
              '👥 For: Portuguese/EU school leavers from secondary education (12th year in Portugal)',
              '📊 Weightings (nota do secundário + provas de ingresso) are published by DGES for each instituição/curso pair — the formula depends on the university/course; do not treat 65/35 as a universal rule',
              '⏰ Applications: July-August',
              '🔢 Exams: mathematics, history, physics, chemistry — as required by the faculty',
              '✅ Result: recommended university/course via DGES',
              '⚠️ Not for foreigners with a school diploma from a country outside the EU'
            ]}
          ]},
          { id: 'o2', title: 'CEEI — Estudante Internacional (under DL 36/2014)', content: [
            { kind: 'checklist', items: [
              '👥 For: candidates with Estudante Internacional status — usually non-EU, BUT NOT EU/EEA, not EU family members, not PT residents for more than 2 years by 1 January of the admission year and not people with an applicable estatuto de igualdade. Check your status BEFORE choosing CEEI',
              '📊 Each university admits according to its own criteria; vagas are set by each university/course annually — see the edital for the specific CEEI',
              '📑 Apply directly to the university via its CEEI/International Student portal or Serviços Académicos/International Office; the platform name depends on the university',
              '⏰ Deadlines: January-June (depends on the university)',
              '💰 Price: international propinas are set by each university — usually higher than national fees',
              '🌐 More details: ulisboa.pt/internacional, up.pt/international, and the edital for each specific course'
            ]}
          ]},
          { id: 'o3', title: 'CPLP / lusophones', content: [
            { kind: 'checklist', items: [
              '🌐 CPLP citizens (Brazil, Cape Verde, Angola, etc.) can apply through CEEI',
              '🆓 Some universities give Brazilians/CPLP the same price as Portuguese students — Universidade do Minho, Lusíada, IPS Setúbal',
              '📋 Recognition of ENEM (Brazilian national secondary-school exam) — accepted at ULisboa, UPorto and others'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'document-equivalence',
      title: '📄 Diploma equivalence',
      content: [
        { kind: 'paragraph', text: 'For admission, you need equivalence of your school certificate to the Portuguese “Ensino Secundário” (12 years). This is done through DGE (Direção-Geral da Educação).' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Documents', content: [
            { kind: 'checklist', items: [
              '🎓 School certificate with an apostille (or legalised by the Portuguese embassy)',
              '📊 Transcript of marks for the last 2-3 years (with an apostille)',
              '🌐 Certified translation into Portuguese',
              '🆔 Passport + residence permit (if any)',
              '📃 Application for equivalence'
            ]}
          ]},
          { id: 'e2', title: 'Process', content: [
            { kind: 'checklist', items: [
              '🏛️ Equivalence of foreign secondary education is processed through escola pública / agrupamento de escolas under DGE rules (DL 227/2005, Portaria 224/2006); the specific school accepts the application and documents',
              '⏱️ Processing: 1-3 months (faster in smaller towns)',
              '💰 Price: depends on the school/municipality; usually a small administrative fee or free — check with the school',
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
              '📜 Level: usually B1-B2 minimum; for medicine and law — B2-C1',
              '🎓 CAPLE: CIPLE = A2, DEPLE = B1, DIPLE = B2, DAPLE = C1, DUPLE = C2 (caple.letras.ulisboa.pt). If the university requires B2 — you need DIPLE or equivalent',
              '💰 Cost depends on the level and CAPLE centre; check the tabela de preços CAPLE',
              '📅 Sessions are according to the CAPLE calendar at accredited centres; dates and levels depend on the centre, and you need to register in advance',
              '🌐 The university may accept CAPLE DIPLE B2 or another recognised Portuguese certificate if this is stated in the edital (DELE is a Spanish certificate from Instituto Cervantes, not Portuguese)',
              '⚠️ For candidates educated in Portuguese, many universities waive the certificate, but this depends on the edital; CPLP citizenship by itself is not a universal exemption'
            ]}
          ]},
          { id: 'l2', title: 'English (programmes for foreigners)', content: [
            { kind: 'checklist', items: [
              '📜 IELTS 6.0+ or TOEFL 80+',
              '🎓 There are fewer English-taught licenciatura programmes in PT than master’s degrees (English is more common at master’s level). Check the language of instruction on the specific course website; medicine at public universities is usually in Portuguese',
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
          '🏛️ Universidade de Lisboa (ULisboa) — the largest, all faculties, ranked #1 in Portugal',
          '🏛️ Universidade do Porto (UPorto) — strong engineering and medicine, #2',
          '🏛️ Universidade de Coimbra (UCoimbra) — the oldest (1290), strong law and humanities',
          '🏛️ NOVA Lisboa — modern, programmes in English, the NOVA SBE MBA is prestigious',
          '🏛️ Universidade de Aveiro — technology, IT, engineering',
          '🏛️ Universidade do Minho (Braga) — IT, biomedicine',
          '🎨 Instituto Superior Técnico (IST) — school of Universidade de Lisboa, flagship for engineering/technology',
          '🏥 Faculdade de Medicina de Lisboa — top medical faculty',
          '💼 Católica Lisbon SBE — private, strong for business/MBA',
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
              '🟢 PT/EU in a public licenciatura: up to around €697/year maximum (DGES propina cap for national/EU students in covered public licenciatura/mestrado integrado)',
              '🟡 Foreigners (CEEI): international propinas are set by each university — usually higher; see the edital for the specific course',
              '🔴 Private universities: €5,000-15,000/year',
              '💵 Housing: room ~€350-650+ in Lisbon/Porto (private market), less in residences and smaller towns; a studio in Lisbon is often €750-1,100+',
              '🍔 Food: €200-300/month',
              '📚 Textbooks: €100-300/semester'
            ]}
          ]},
          { id: 'f2', title: 'Scholarships and support', content: [
            { kind: 'checklist', items: [
              '💰 Bolsa de Acção Social (DGES) — for Portuguese/EU students on a low income, €100-500/month',
              '💰 Erasmus+ — for an exchange semester',
              '🇵🇹 Bolsa Camões — for foreigners studying Portuguese culture/language',
              '🌍 Fulbright (for the USA), DAAD (for Germany) — joint with Portugal',
              '💼 University internal programmes: ULisboa → Bolsa de Excelência, NOVA → Merit Scholarships',
              '📋 Scholarship applications are usually submitted 6 months before the start of the semester'
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
          '📜 After the admission letter from the university — apply for D4 at the Portuguese consulate in your country of residence',
          '📋 Documents: passport, admission letter, proof of funds (guide figure 12×IAS = €6,445.56 in 2026; IAS 2026 = €537.13 — the specific consular post may require additional evidence/a larger buffer), insurance, proof of accommodation',
          '⏱️ Processing: 30-60 days',
          '🎫 Validity: 4 months for entry, then residence permit at AIMA (plus a separate AIMA fee — check the actual fee table in force from 01.03.2026)',
          '💼 With a residence permit for study, a higher-education student may work under an employment contract or as an independent worker, notifying AIMA and complying with Segurança Social/tax rules (there is no universal 20 h/week limit)',
          '🎓 After completing higher education, you can request an extension/AR to look for work or create a business for up to 1 year, subject to conditions (Lei 23/2007 art. 122) — this is not the consular job-seeker visa'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '⏰ Start the process 1 year in advance — diploma recognition + language + application',
          '🇵🇹 Learn Portuguese BEFORE admission — most courses are in Portuguese, even “international tracks” have a Portuguese component',
          '🤝 International Office / Serviços Académicos at each university — the best contact; write to them with your questions',
          '🏠 Housing in student residences (residências) is cheaper, but competitive — apply in advance',
          '📚 Erasmus+ during your studies opens many opportunities',
          '🌍 After the licenciatura — a master’s degree of 1-2 years, doctorate of 3-4 years',
          '💼 Reconhecimento of a foreign higher-education degree: through the DGES reconhecimento platform (DL 66/2018) — automatic/level/specific recognition. The competent Portuguese HEI and cost depend on the type and level of degree (usually several hundred euros, timeframes vary)',
          '⚠️ For medical professionals: recognition is VERY complex, usually requiring 1-2 years of additional exams/study + residency'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Equivalência of school certificate (through a school/agrupamento)', note: 'usually a small administrative fee or free — check with the specific school' },
    { label: 'CAPLE exam', note: 'depends on the level and centre — see the tabela de preços CAPLE' },
    { label: 'PT/EU public licenciatura — propina (DGES maximum)', amountEURMax: 697, note: '€/year for national/EU students' },
    { label: 'Foreigner (CEEI) — propina', note: 'set by each university/course — see the edital' },
    { label: 'Private university', amountEURMin: 5000, amountEURMax: 15000, note: '€/year' },
    { label: 'D4 visa (consular fee)', amountEUR: 90 },
    { label: 'AIMA residence permit/card after arrival', note: 'check the actual fee table in force from 01.03.2026' },
    { label: 'Student life in Lisbon', amountEURMin: 700, amountEURMax: 1300, note: '€/month (room + food + transport + books)' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — Recognition of foreign degrees and diplomas', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGE — Equivalences of foreign qualifications', url: 'https://www.dge.mec.pt/equivalencias-de-habilitacoes-estrangeiras', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CAPLE — Portuguese as a foreign language', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
