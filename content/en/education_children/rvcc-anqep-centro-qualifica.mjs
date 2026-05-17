export default {
  editorialVoice: 'hackportugal',
  id: 'rvcc-anqep-centro-qualifica',
  categoryId: 'education_children',
  title: 'RVCC: recognising adult education level through Centro Qualifica',
  tldr: 'RVCC is a free procedure for adults in Portugal if a school diploma from CPLP/Ukraine has been lost, is not recognised by an employer, or the education level needs to be confirmed according to the Portuguese scale. Through Centro Qualifica you can obtain certificação escolar: B1 = 4.º ano, B2 = 6.º ano, B3 = 9.º ano, secundário = 12.º ano, as well as profissional under the Catálogo Nacional de Qualificações. The process is conducted in Portuguese: inscrição, diagnóstico, portfólio reflexivo, validação and júri.',
  tags: ['rvcc', 'qualifica', 'education', 'cplp', 'ukraine'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-rvcc-is',
      title: 'What RVCC is and who it is suitable for',
      content: [
        { kind: 'paragraph', text: 'RVCC means Reconhecimento, Validação e Certificação de Competências. It is not a “diploma translation”, but the recognition of competences acquired at school, at work, in the army, in business, in family care, volunteering or self-education. The procedure is run by Centros Qualifica under the coordination of ANQEP.' },
        { kind: 'paragraph', text: 'For migrants from CPLP and Ukraine, RVCC is useful when it is not possible to quickly obtain an apostille, an archive certificate, a notarised translation or formal reconhecimento/equivalência of a foreign diploma. The result of RVCC is Portuguese certification of education level or professional qualification, understood by IEFP, employers and training centres.' },
        { kind: 'checklist', items: [
          'You do not have a school diploma or certificate in hand',
          'You have a document, but an employer/course requires Portuguese level B3 or secundário',
          'You need 9.º ano or 12.º ano for emprego, formação, concurso or cursos profissionais',
          'You have extensive practical experience, but no certificado profissional',
          'You are an adult and already live in Portugal or are planning to move',
          'You are ready to go through interviews, tasks and a portfólio defence in Portuguese',
          'You do not need academic equivalence for university — a separate reconhecimento/equivalência procedure is used for that'
        ] }
      ]
    },
    {
      id: 'levels',
      title: 'Which levels can be confirmed',
      content: [
        { kind: 'paragraph', text: 'RVCC escolar confirms school level under the Portuguese system. This matters: the phrase “I have 10 years of schooling” from another country does not automatically equal 9.º ano or 12.º ano in Portugal.' },
        { kind: 'checklist', items: [
          'B1 — corresponds to 1.º ciclo do ensino básico, usually 4.º ano',
          'B2 — corresponds to 2.º ciclo do ensino básico, usually 6.º ano',
          'B3 — corresponds to 3.º ciclo do ensino básico, usually 9.º ano',
          'Secundário — corresponds to ensino secundário, usually 12.º ano',
          'RVCC profissional — confirmation of professional competences under the Catálogo Nacional de Qualificações',
          'Profissional usually requires relevant work experience; a common benchmark is at least 3 years in the field, but Centro Qualifica checks the profile individually',
          'Partial validation is possible: missing unidades de competência are completed through short training or formação complementar'
        ] },
        { kind: 'warning', text: 'RVCC does not replace automatic recognition of a foreign diploma for university, regulated professions or ordens profissionais. For medicine, engineering, teaching, law and entry to ensino superior, check the separate rules for diploma recognition.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'How to enrol at Centro Qualifica',
      content: [
        { kind: 'paragraph', text: 'Enrolment is done through the Qualifica portal or directly at the nearest Centro Qualifica: schools, IEFP, municipal centres and associations. You are not obliged to go only where you are registered as resident, but in practice it is more convenient to choose a centre near home or work.' },
        { kind: 'substeps', items: [
          { id: 'find-centro', title: '1. Find a Centro Qualifica', content: [
            { kind: 'paragraph', text: 'On qualifica.gov.pt, open the Centros Qualifica search and choose the district. If you are in Lisbon/Porto, it is better to write to 2–3 centres: waiting lists and specialisations differ.' }
          ] },
          { id: 'send-contact', title: '2. Send a pedido de inscrição', content: [
            { kind: 'checklist', items: [
              'Nome completo',
              'Date of birth',
              'Contact phone number and email',
              'Current address in Portugal, if you already have one',
              'NIF, if already obtained',
              'Identity document: passport, Cartão de Cidadão, residence permit, título CPLP or another document',
              'Last known education level',
              'Work experience and desired area for RVCC profissional'
            ] }
          ] },
          { id: 'first-meeting', title: '3. Complete acolhimento and diagnóstico', content: [
            { kind: 'paragraph', text: 'At the first meeting, the Centro Qualifica technician determines whether you need RVCC, an EFA course, Português Língua de Acolhimento, formação modular or ordinary equivalência. Foreign nationals are often first advised to improve their português, because evidence and the júri take place in Portuguese.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and evidence: what to prepare',
      content: [
        { kind: 'paragraph', text: 'The main RVCC document is not a diploma, but the portfólio reflexivo de aprendizagens: a structured portfolio where you show what you can already do and link it to the competence framework. The better the evidence, the faster the validation.' },
        { kind: 'checklist', items: [
          'Passport or another documento de identificação',
          'NIF — if you have one; not having a NIF should not be a reason to ignore the request, but the centre may ask you to obtain one for registration',
          'Residence permit, título CPLP, visa D1-D8, proteção temporária UA or another stay document — if you have one',
          'Foreign school certificates, statements, transcripts, inserts, diplomas — even without an apostille they are useful as evidence',
          'Translation of key documents into português if the centre cannot assess the original',
          'CV in Portugal/Europass format',
          'Declarações de entidade patronal, contracts, recibos verdes, certificados de formação',
          'Work samples: reports, projects, photos, instructions, portfolio, recommendations',
          'For profissional: description of duties, length of service, equipment/software, processes, responsibility',
          'For escolar: texts, calculations, digital skills, civic competence, examples of problem-solving'
        ] },
        { kind: 'warning', text: 'Do not buy “ready-made RVCC” from intermediaries. Certification is issued only through the Centros Qualifica network and goes through validação/júri. Paid promises to “obtain 12.º ano without participation” are a fraud risk.' }
      ]
    },
    {
      id: 'process',
      title: 'How the process works: portfólio, validação, júri',
      content: [
        { kind: 'paragraph', text: 'After inscrição, the centre assigns a técnico de orientação, formadores and a calendário. The timeframe depends on the level, your readiness and the waiting list: fast cases take a few months, complex ones take longer. There is no official universal guarantee of “within 30 days”.' },
        { kind: 'checklist', items: [
          'Acolhimento — initial registration and data collection',
          'Diagnóstico — assessment of the objective: RVCC escolar, profissional, formação or another pathway',
          'Encaminhamento — referral to a specific process',
          'Reconhecimento — interviews and tasks where you describe your experience',
          'Portfólio reflexivo — collection of evidence and texts in Portuguese',
          'Validação — formadores compare the evidence with the framework',
          'Formação complementar — short training if competences are missing',
          'Certificação — final decision after a sessão de júri',
          'Issuing of a certificado de qualificações or diploma/certificado for the corresponding level'
        ] },
        { kind: 'paragraph', text: 'The júri usually includes the centre’s specialists and, for professional RVCC, a representative of the field. This is not a school exam in the classic sense, but a portfolio defence and competence check. However, you will have to answer independently and in Portuguese.' }
      ]
    },
    {
      id: 'after-certificate',
      title: 'After the certificate: where to use it and what not to confuse it with',
      content: [
        { kind: 'paragraph', text: 'RVCC certification is entered into the Portuguese qualifications system and can be used for work, IEFP, category progression, access to formação, completion of 9.º ano or 12.º ano. For many adult migrants, this is more practical than spending years restoring school archives in the country of origin.' },
        { kind: 'checklist', items: [
          'For vacancies: state “9.º ano obtido por processo RVCC” or “12.º ano obtido por RVCC”',
          'For IEFP: attach the certificado de qualificações to the inscrição or candidatura',
          'For further training: ask Centro Qualifica about cursos EFA, CET, formações modulares',
          'For university: check access conditions in advance; RVCC secundário by itself does not cancel ensino superior competition rules',
          'For regulated professions: check the ordem profissional or entidade competente',
          'For immigration procedures: RVCC can help with integration and employment, but is not a separate basis for a residence permit',
          'Keep a digital and paper copy of the certificado/diploma; if lost, contact the centre that handled the process'
        ] },
        { kind: 'warning', text: 'If you already have a fully recognised diploma, RVCC may not be the best route. First compare: equivalência/reconhecimento of foreign education, professional certification through an ordem/sector, or RVCC. Centro Qualifica should help choose the pathway, not automatically enrol everyone on RVCC.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição and support at Centro Qualifica', amountEUR: 0, note: 'In the Centros Qualifica network, the procedure is usually free for the candidate.' },
    { label: 'Translation of foreign documents', amountEURMin: 20, amountEURMax: 60, note: 'Indicative price per page from translators in Portugal; not always required, depending on the centre and the document language.' },
    { label: 'Notarial copies or certifications', amountEURMin: 10, amountEURMax: 40, note: 'Optional, if the centre or employer requests certified copies.' }
  ],
  sources: [
    {
      title: 'Qualifica portal — search for Centros Qualifica and information for adults',
      url: 'https://www.qualifica.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANQEP — official description of RVCC',
      url: 'https://www.anqep.gov.pt/np4/rvcc.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Catálogo Nacional de Qualificações — professional qualification frameworks',
      url: 'https://catalogo.anqep.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
