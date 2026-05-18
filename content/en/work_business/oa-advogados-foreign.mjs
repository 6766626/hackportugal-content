export default {
  editorialVoice: 'hackportugal',
  id: 'oa-advogados-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Advogados: foreign lawyer in Portugal without BR reciprocity',
  tldr: 'In Portugal you cannot simply “transfer” lawyer status: the word advogado is protected, and access to the profession is granted only by the Ordem dos Advogados (OA)\.\n\nAfter the end of practical BR reciprocity, the direct route for non-EU lawyers is recognition of the degree by a Portuguese university/DGES, then admission to the OA, prova de acesso and an estágio of around 18 months with a patrono and final assessment. EU/EEA lawyers follow a separate route under Diretiva 98/5/CE: they may register under their home professional title.',
  tags: ['oa', 'advogado', 'lawyer', 'diploma', 'estágio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-protected',
      title: 'What is actually protected: advogado ≠ jurist',
      content: [
        { kind: 'paragraph', text: 'In Portugal, “advogado” is a regulated profession. To represent clients in court, sign procedural documents, benefit from professional secrecy and use the title advogado, you need inscrição with the Ordem dos Advogados (OA).' },
        { kind: 'paragraph', text: 'A foreign law degree on its own does not give you the right to practise as an advogado. You may work as a legal consultant, paralegal, contract manager, in compliance, tax/legal operations, but you must not mislead clients into thinking that you are a Portuguese advogado.' },
        { kind: 'checklist', items: [
          'Write instead: “Caution: paid legal consultation for third parties in Portugal may fall under actos próprios dos advogados e solicitadores. Without inscrição with the OA, it is safer to work in-house, in back-office/legal operations, or as a foreign-law specialist with a clear scope and, on Portuguese matters, under the responsibility of an advogado/solicitador. Do not give Portuguese-law advice and do not represent clients before authorities/courts.”',
          'Allowed: working in-house in a company, in compliance, privacy, contracts, AML, relocation/legal operations',
          'Clarify: “You may, as an employee/back-office/paralegal, prepare drafts and translations for an advogado/solicitador, if the registered professional is the one responsible to the client. You may not independently sell the preparation of legal documents as a service if this falls under actos próprios.”',
          'Not allowed: using the title advogado without inscrição with the OA',
          'Not allowed: representing a client in a Portuguese court as an advogado',
          'Not allowed: opening a “sociedade de advogados” without complying with OA rules',
          'Not allowed: promising a client services reserved for lawyers if you are not an OA member'
        ] },
        { kind: 'warning', text: 'The Portuguese market is very formal: even if you are a lawyer in the Russian Federation, Ukraine, the USA, Turkey or another non-EU country, for the OA this is not automatically equivalent to being a português advogado.' }
      ]
    },
    {
      id: 'non-eu-route',
      title: 'Route for a non-EU lawyer: degree recognition + OA + estágio',
      content: [
        { kind: 'paragraph', text: 'For lawyers from countries outside the EU/EEA without valid reciprocity, the basic route in 2026 is: have your legal education recognised in Portugal, then go through the OA admission procedure. This is a long route because the OA checks not only the degree, but also suitability for Portuguese legal practice.' },
        { kind: 'checklist', items: [
          'Gather your degree certificate, transcript with hours/ECTS, course syllabuses, and proof of status in a foreign bar association, if any',
          'Obtain apostila/legalização according to the country where the document was issued',
          'Obtain a certified translation into Portuguese if the documents are not in PT/EN/ES/FR in an acceptable form',
          'Apply for reconhecimento de grau académico at a Portuguese university through the DGES/institution system',
          'Obtain recognition of the degree, usually nível/licenciatura or mestrado conforme caso',
          'Check whether the OA requires additional documents on good standing, absence of incompatibilidades and criminal record',
          'Submit an application for inscrição as a candidato a advogado estagiário',
          'Pass the prova de acesso/avaliação, complete the estágio and final avaliação/agregação'
        ] },
        { kind: 'paragraph', text: 'The OA estágio usually lasts 18 months. It includes work under the supervision of a patrono, training in professional ethics, procedure, tax and registry practices, as well as a final assessment before full inscrição como advogado.' },
        { kind: 'warning', text: 'Recognition of the degree by a university does not mean automatic acceptance by the OA. The OA is a separate professional filter: it may request documents, refuse admission in cases of incompatibilidades, or require completion of the full estágio.' }
      ]
    },
    {
      id: 'brazil-reciprocity',
      title: 'Brazil: why the old “fast” route should no longer be treated as workable',
      content: [
        { kind: 'paragraph', text: 'Until 2023, many Brazilian advogados relied on a more direct reciprocity regime between OA Portugal and OAB Brazil. In practice, after the termination/suspension of this regime, you should not plan a relocation under the old logic of “I am a lawyer in the OAB, so I will quickly fit into the OA”.' },
        { kind: 'paragraph', text: 'As of April 2026, the safe practical position is: if you do not have an EU route and do not have individually confirmed OA grounds for direct registration, prepare for the standard foreign-degree route — reconhecimento académico, documents, exam/admission, 18-month estágio.' },
        { kind: 'checklist', items: [
          'Do not buy a consultation where inscrição with the OA is promised “under the old acordo” without checking the current OA rules',
          'Ask the consultant for a link to the current OA page and the specific provision of the Estatuto da OA',
          'Build in time for degree recognition from the start: months, not weeks',
          'Build in Portuguese legal language: procedure, prazos, peças processuais, deontologia',
          'If you are already in the OAB, attach a certificate of good standing, but do not treat it as a substitute for the estágio',
          'If the goal is to work quickly, look for interim roles: legal operations, immigration support, compliance, contracts'
        ] },
        { kind: 'warning', text: 'The most common mistake is writing “advogado em Portugal” on a website before inscrição with the OA. More accurate: “jurista”, “legal consultant”, “advogado inscrito no Brasil/Rússia/etc.”, and clearly state the jurisdiction.' }
      ]
    },
    {
      id: 'eu-route',
      title: 'EU/EEA lawyers: separate regime under Diretiva 98/5/CE',
      content: [
        { kind: 'paragraph', text: 'If you are already a qualified lawyer in an EU/EEA state, the establishment regime under Diretiva 98/5/CE applies. It allows you to register in Portugal under the professional title of your country of origin, for example Rechtsanwalt, avocat, abogado, avvocato, solicitor and so on.' },
        { kind: 'checklist', items: [
          'Confirm current registration with your home EU/EEA bar association',
          'Submit documents to the OA for inscrição as advogado da União Europeia under your home-country title',
          'Practise in Portugal while indicating your original title and professional organisation',
          'Comply with OA rules: deontologia, segredo profissional, conflict of interest, advertising limits',
          'For some procedural acts, work together with a português advogado if national law requires it',
          'After long-term effective and regular practice in Portuguese/EU law, integration into the profession in Portugal may be possible under the directive rules',
          'Alternatively, the professional qualification recognition/aptidão route may apply if the person wants the title advogado directly'
        ] },
        { kind: 'warning', text: 'Replace with: “The EU/EEA route does not give rights merely because of a passport: you must be a professionally qualified lawyer in an EU/EEA state under one of the recognised titles. At the same time, Diretiva 98/5/CE itself is addressed to advogados nacionais de Estados-Membros/beneficiaries of EU/EEA free-movement rules, so a non-EU citizen with a qualification in an EU bar should obtain written confirmation from the OA in advance that this regime applies to them.”' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'Practical plan for 2026: how not to lose a year',
      content: [
        { kind: 'paragraph', text: 'If you are moving to Portugal and want to become an advogado one day, split the plan into two tracks: lawful income now and OA professional qualification in parallel. The full route rarely fits into one year.' },
        { kind: 'substeps', items: [
          { id: 'month-1', title: '1. Before moving or in the first month', content: [
            { kind: 'checklist', items: [
              'Obtain recent certificates from your bar association: status/good standing/disciplinary record',
              'Retrieve curricula and hours for each legal subject',
              'Obtain apostila/legalização for the degree certificate and transcript',
              'Check which Portuguese university accepts reconhecimento specifically for Direito',
              'Start legal Portuguese: civil procedure, administrative law, fiscal, deontologia'
            ] }
          ] },
          { id: 'months-2-6', title: '2. Months 2–6', content: [
            { kind: 'checklist', items: [
              'Apply for reconhecimento de grau académico',
              'Gather NIF, address, residence permit/visa, criminal record, documents on professional standing',
              'Contact the OA Conselho Regional for the place where you intend to practise',
              'Find a potential patrono — an OA lawyer willing to take on an estagiário',
              'In parallel, look for work without the protected title: compliance, contracts, privacy, corporate support'
            ] }
          ] },
          { id: 'after-recognition', title: '3. After degree recognition', content: [
            { kind: 'checklist', items: [
              'Apply to the OA for admissibilidade/inscrição as advogado estagiário',
              'Prepare for the prova de acesso, if it is scheduled',
              'Plan for 18 months of estágio without the illusion of full commercial independence',
              'Keep a portfolio of practice, training and documents for the final avaliação',
              'Do not change your public title to advogado until the OA decision on full inscrição'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-risks',
      title: 'Documents, language and typical refusals',
      content: [
        { kind: 'paragraph', text: 'The OA and universities look at formal documents. “I practised for 10 years” helps, but it does not replace academic recognition and professional admission. Translations, apostilles and mismatches in full names often slow the process more than the exam itself.' },
        { kind: 'checklist', items: [
          'Passport/Cartão de Cidadão/residence permit, if you already have one',
          'NIF and Portuguese address for correspondence',
          'Direito/law faculty degree certificate and transcript',
          'Detailed syllabus/programas das unidades curriculares',
          'Apostila or consular legalisation, if required',
          'Translation into Portuguese by a sworn/certified translator',
          'Certificado de registo criminal from countries of residence',
          'Certificate of good standing from the foreign bar association, if you are already a lawyer',
          'Declaration of absence of incompatibilidades with legal practice',
          'Proof of Portuguese address and contact details'
        ] },
        { kind: 'warning', text: 'Portuguese is critical. Even if a B2/C1 level is not formally specified, exams, estágio, deontologia and procedural documents are in Portuguese. Without legal PT, the route into the OA is practically unrealistic.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Recognition of a foreign Direito degree',
      amountEURMin: 150,
      amountEURMax: 700,
      note: 'The fee is set by the specific Portuguese university/institution; complex reconhecimento involving syllabus analysis is usually more expensive than automatic recognition.'
    },
    {
      label: 'Translations, apostila/legalização, notarised copies',
      amountEURMin: 100,
      amountEURMax: 600,
      note: 'Depends on the country of issue, the number of pages of course syllabuses and the requirements for certified translation.'
    },
    {
      label: 'OA procedures: inscrição, estágio, quotas, exames',
      amountEURMin: 300,
      amountEURMax: 1200,
      note: 'Amounts vary by Conselho Regional and type of procedure; before applying, check the current tabela de emolumentos OA.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Advogados — Admission / Admission FAQ',
      url: 'https://portal.oa.pt/ordem/admissao-admission-faq/admissao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Advogados — Diretiva 98/5/CE on establishment of European Union lawyers',
      url: 'https://portal.oa.pt/ordem/regras-profissionais/legislacao-internacional/directiva-985ce/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Statute of the Ordem dos Advogados, Lei n.º 145/2015',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2015-72859741',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — Recognition of foreign academic degrees and diplomas',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
