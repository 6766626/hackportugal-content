export default {
  editorialVoice: 'hackportugal',
  id: 'oa-advogados-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Advogados: foreign lawyer in Portugal without BR reciprocity',
  tldr: 'In Portugal you cannot simply “transfer” lawyer status: the word advogado is protected, and access to the profession is granted only by the Ordem dos Advogados (OA).\n\nAfter the end of practical BR reciprocity, the direct route for non-EU lawyers is recognition of the degree by a Portuguese university/DGES, then admission to the OA, prova de acesso and estágio of around 18 months with a patrono and final assessment. EU/EEA lawyers follow a separate route under Diretiva 98/5/CE: they may register under their home professional title.',
  tags: ['oa', 'advogado', 'lawyer', 'diploma', 'estágio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-protected',
      title: 'What is actually protected: advogado ≠ jurist',
      content: [
        { kind: 'paragraph', text: 'In Portugal, “advogado” is a regulated profession. To represent clients in court, sign procedural documents, benefit from professional secrecy and use the title advogado, inscrição with the Ordem dos Advogados (OA) is required.' },
        { kind: 'paragraph', text: 'A foreign law degree on its own does not give the right to practise as an advogado. You may work as a legal consultant, paralegal, contract manager, in compliance, tax/legal operations, but you must not mislead clients into thinking that you are a Portuguese advogado.' },
        { kind: 'checklist', items: [
          'Allowed: advising on the law of your own country, if this is honestly stated in the contract and profile',
          'Allowed: working in-house at a company, in compliance, privacy, contracts, AML, relocation/legal operations',
          'Allowed: translating and preparing draft documents for review by an advogado',
          'Not allowed: using the title advogado without inscrição in the OA',
          'Not allowed: representing a client in a Portuguese court as an advogado',
          'Not allowed: opening a “sociedade de advogados” without complying with OA rules',
          'Not allowed: promising a client services reserved for lawyers if you are not an OA member'
        ] },
        { kind: 'warning', text: 'The Portuguese market is very formal: even if you are a lawyer in the Russian Federation, Ukraine, the USA, Turkey or another non-EU country, for the OA this is not an automatic equivalent of a português advogado.' }
      ]
    },
    {
      id: 'non-eu-route',
      title: 'Route for a non-EU lawyer: degree recognition + OA + estágio',
      content: [
        { kind: 'paragraph', text: 'For lawyers from countries outside the EU/EEA without current reciprocity, the basic route in 2026 is to have the legal education recognised in Portugal, then go through the OA admission procedure. This is a long route, because the OA checks not only the degree, but also suitability for Portuguese legal practice.' },
        { kind: 'checklist', items: [
          'Collect the diploma, transcript with hours/ECTS, course syllabuses, and confirmation of status in a foreign bar association, if any',
          'Obtain an apostila/legalização according to the country that issued the document',
          'Arrange a certified translation into Portuguese if the documents are not in PT/EN/ES/FR in an acceptable form',
          'Apply for reconhecimento de grau académico at a Portuguese university through the DGES/institution system',
          'Obtain recognition of the degree, usually nível/licenciatura or mestrado conforme caso',
          'Check whether the OA requires additional documents on good character, absence of incompatibilidades and criminal record',
          'Apply for inscrição as a candidato a advogado estagiário',
          'Pass the prova de acesso/avaliação, complete the estágio and final avaliação/agregação'
        ] },
        { kind: 'paragraph', text: 'Estágio at the OA usually lasts 18 months. It includes work under the supervision of a patrono, training in professional ethics, procedure, tax and registration practices, and a final assessment before full inscrição como advogado.' },
        { kind: 'warning', text: 'Recognition of the degree by a university does not mean automatic acceptance into the OA. The OA is a separate professional filter: it may request documents, refuse admission in the event of incompatibilidades or require completion of the full estágio.' }
      ]
    },
    {
      id: 'brazil-reciprocity',
      title: 'Brazil: why the old “fast” route should no longer be treated as workable',
      content: [
        { kind: 'paragraph', text: 'Until 2023, many Brazilian advogados expected a more direct reciprocity regime between OA Portugal and OAB Brazil. In practice, after the termination/suspension of this regime, you cannot plan relocation on the old logic of “I am a lawyer in the OAB, so I will quickly get into the OA”.' },
        { kind: 'paragraph', text: 'As of April 2026, the safe practical position is: if you do not have an EU route and do not have an individually confirmed OA basis for direct registration, prepare for the ordinary foreign-degree route — reconhecimento académico, documents, examination/admission, estágio 18 months.' },
        { kind: 'checklist', items: [
          'Do not buy consultancy services that promise inscrição in the OA “under the old acordo” without checking the current OA rules',
          'Ask the consultant for a link to the current OA page and the specific provision of the Estatuto da OA',
          'Build in time for degree recognition from the start: months, not weeks',
          'Build in Portuguese legal language: procedure, prazos, peças processuais, deontologia',
          'If you are already in the OAB, attach a certificate of good standing, but do not treat it as a substitute for estágio',
          'If the aim is to work quickly, look for interim roles: legal operations, immigration support, compliance, contracts'
        ] },
        { kind: 'warning', text: 'The most common mistake is writing “advogado em Portugal” on a website before inscrição in the OA. More accurate: “jurista”, “legal consultant”, “advogado inscrito no Brasil/Rússia/etc.” and clearly state the jurisdiction.' }
      ]
    },
    {
      id: 'eu-route',
      title: 'EU/EEA lawyers: separate regime under Diretiva 98/5/CE',
      content: [
        { kind: 'paragraph', text: 'If you are already a qualified lawyer in an EU/EEA state, the establishment regime under Diretiva 98/5/CE applies. It allows you to register in Portugal under the professional title of the country of origin, for example Rechtsanwalt, avocat, abogado, avvocato, solicitor and so on.' },
        { kind: 'checklist', items: [
          'Confirm current registration with the home EU/EEA bar association',
          'Submit documents to the OA for inscrição as advogado da União Europeia under the home-country title',
          'Practise in Portugal while indicating the original title and professional organisation',
          'Comply with OA rules: deontologia, segredo profissional, conflict of interest, advertising limits',
          'For certain procedural acts, work together with a português advogado if national law requires it',
          'After long, effective and regular practice in Portuguese/EU law, integration into the profession in Portugal may be possible under the rules of the directive',
          'Alternatively, the route of recognition of professional qualification/aptidão may apply if the person wants the title advogado directly'
        ] },
        { kind: 'warning', text: 'The EU route does not apply to citizenship in itself. What matters is not that you have an EU passport, but that you are already professionally qualified as a lawyer in one of the EU/EEA jurisdictions.' }
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
              'Obtain fresh certificates from your bar association: status/good standing/disciplinary record',
              'Retrieve curricula and hours for each legal discipline',
              'Obtain an apostila/legalização for the diploma and transcript',
              'Check which Portuguese university accepts reconhecimento specifically for Direito',
              'Start legal Portuguese: civil procedure, administrative law, fiscal, deontologia'
            ] }
          ] },
          { id: 'months-2-6', title: '2. Months 2–6', content: [
            { kind: 'checklist', items: [
              'Submit reconhecimento de grau académico',
              'Collect NIF, address, residence permit/visa, criminal record, documents on professional standing',
              'Contact the Conselho Regional OA for the place of future practice',
              'Find a potential patrono — an OA lawyer willing to take on an estagiário',
              'In parallel, look for work without a protected title: compliance, contracts, privacy, corporate support'
            ] }
          ] },
          { id: 'after-recognition', title: '3. After degree recognition', content: [
            { kind: 'checklist', items: [
              'Apply to the OA for admissibilidade/inscrição as advogado estagiário',
              'Prepare for the prova de acesso, if it is scheduled',
              'Plan for 18 months of estágio without the illusion of full commercial independence',
              'Keep a portfolio of practice, training and documents for the final avaliação',
              'Do not change your public title to advogado before the OA decision on full inscrição'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-risks',
      title: 'Documents, language and typical refusals',
      content: [
        { kind: 'paragraph', text: 'The OA and universities look at formal documents. “I practised for 10 years” helps, but it does not replace academic recognition and professional admission. Translations, apostilles and name mismatches often slow the process more than the examination itself.' },
        { kind: 'checklist', items: [
          'Passport/Cartão de Cidadão/residence permit, if already held',
          'NIF and Portuguese address for correspondence',
          'Diploma in Direito/from a law faculty and transcript',
          'Detailed syllabus/programas das unidades curriculares',
          'Apostila or consular legalisation, if required',
          'Translation into Portuguese by a sworn/certified translator',
          'Certificado de registo criminal from countries of residence',
          'Certificate of good standing from a foreign bar association, if you are already a lawyer',
          'Declaration of absence of incompatibilidades with legal practice',
          'Evidence of Portuguese address and contact details'
        ] },
        { kind: 'warning', text: 'The Portuguese language is critical. Even if a B2/C1 level is not formally specified, examinations, estágio, deontologia and procedural documents are in Portuguese. Without legal PT, the route into the OA is practically unrealistic.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Recognition of a foreign Direito degree',
      amountEURMin: 150,
      amountEURMax: 700,
      note: 'The fee is set by the specific Portuguese university/institution; for complex reconhecimento involving analysis of syllabuses, it is usually more expensive than automatic recognition.'
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
      title: 'Ordem dos Advogados — Admissão / Admission FAQ',
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
      title: 'DRE — Estatuto da Ordem dos Advogados, Lei n.º 145/2015',
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
