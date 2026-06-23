export default {
  editorialVoice: 'hackportugal',
  id: 'reconhecimento-habilitacoes-estrangeiras',
  categoryId: 'education_children',
  title: 'Recognition of a foreign degree in Portugal (DGES / NARIC)',
  tldr: 'For a foreign higher-education degree to "work" in Portugal — for studying, public competitions, regulated professions — you usually need to have it recognised. This is handled by DGES through the Centro ENIC-NARIC Portugal (online application at dges.gov.pt). There are three kinds: reconhecimento automático (automatic recognition, for degrees/countries on a published list), reconhecimento de nível (level recognition — matching to licenciatura/mestrado/doutoramento) and reconhecimento específico (specific recognition — comparison with a particular Portuguese programme, often for regulated professions). For doctors, nurses, engineers, lawyers and teachers you additionally need admission from the relevant professional body (Ordem) or regulator. Secondary-school education is recognised separately. The service is paid; timelines depend on the kind.',
  tags: ['diploma', 'reconhecimento', 'DGES', 'NARIC'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: '2026-06-23',
  changeSummary: 'New guide: recognition of foreign higher-education degrees in Portugal — DGES/ENIC-NARIC, the three kinds of recognition, regulated professions, school-level equivalence.',
  steps: [
    {
      id: 'when-needed',
      title: 'When recognition is actually needed',
      content: [
        { kind: 'paragraph', text: 'A degree does not always have to be officially recognised — sometimes a translation is enough for an employer. But recognition becomes mandatory in a number of situations.' },
        { kind: 'checklist', items: [
          '🎓 Enrolling in the next level (master\'s/doctorate) or continuing your studies.',
          '🏛️ Taking part in public competitions (concursos públicos) and jobs where the law requires a confirmed level.',
          '⚕️ Regulated professions (doctor, nurse, pharmacist, engineer, architect, lawyer, teacher and others) — without recognition and admission from the regulator you cannot work in the profession.',
          '💼 Sometimes — for a salary grade, allowances or proof of qualifications to an employer.',
          'If you need the degree "just for your CV", a tradução certificada (certified translation) is often enough — but check the requirements of the specific employer/institution.'
        ] }
      ]
    },
    {
      id: 'three-types',
      title: 'The three kinds of recognition (DGES / ENIC-NARIC)',
      content: [
        { kind: 'paragraph', text: 'Higher education is recognised by DGES through the Centro ENIC-NARIC Portugal. Choose the right kind — it determines the timeline, the cost and the outcome.' },
        { kind: 'checklist', items: [
          '✅ Reconhecimento automático (automatic recognition) — the fastest: for degrees from the countries/list for which a decision on automatic recognition has already been made. The degree is matched to a Portuguese level straight away.',
          '📊 Reconhecimento de nível (level recognition) — matching to a level (licenciatura, mestrado, doutoramento) without tying it to a specific field. Suitable for most general purposes.',
          '🎯 Reconhecimento específico (specific recognition) — comparison with a particular Portuguese programme/degree; needed when the field itself matters (often for regulated professions and continuing studies). It is carried out by a university.',
          'ℹ️ Informação NARIC (NARIC information) — a statement of which level your qualification corresponds to in your country of origin (not recognition itself, but sometimes it is enough).'
        ] }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply',
      content: [
        { kind: 'checklist', items: [
          'Apply online through the DGES portal (dges.gov.pt), in the reconhecimento section.',
          'Documents: the degree and its supplement (transcript/suplemento), ID, and sometimes a description of the programme and hours.',
          'Legalisation: apostila (Hague Convention) or consular legalisation — depending on the country.',
          'Translations: a tradução certificada (certified translation) into Portuguese if the documents are not in Portuguese/English (check the requirements).',
          'Paying the taxa (fee): the service is paid, and the amount depends on the kind of recognition.',
          'Timelines: automatic recognition is faster; nível and específico take longer (specific recognition can take months, since a university assesses it).'
        ] },
        { kind: 'warning', text: 'A government reform may change which body is responsible for recognition and what the portal is called. Before applying, check the current information on dges.gov.pt.' }
      ]
    },
    {
      id: 'regulated',
      title: 'Regulated professions — a two-step path',
      content: [
        { kind: 'paragraph', text: 'For regulated professions academic recognition is not enough: you also need admission from the professional regulator (Ordem). These are two separate processes.' },
        { kind: 'checklist', items: [
          'First — recognition of the degree (DGES/ENIC-NARIC, or específico through a university).',
          'Then — registration/admission with the relevant Ordem: Ordem dos Médicos, Enfermeiros, Médicos Dentistas, Engenheiros, Advogados, and so on.',
          'The regulator may require an exam, work experience (estágio), knowledge of Portuguese, or an ethics check.',
          'For teachers, recognition and access to the profession go through their own procedures (DGAE and equivalence).',
          'Plan your time: for medicine and law the path is long, so start early.'
        ] },
        { kind: 'paragraph', text: 'Related guides: recognition for doctors, nurses, engineers, lawyers, dentists and teachers — in separate guides for each profession.' }
      ]
    },
    {
      id: 'school',
      title: 'A school diploma — a separate path',
      content: [
        { kind: 'checklist', items: [
          'Secondary education (for enrolling in school/university) is recognised not through DGES but through equivalence (equivalência) — usually at the receiving school or through the relevant education services.',
          'For foreigners enrolling in universities there are separate rules and exams — see the guide on foreigners enrolling in higher education.',
          'For children moving here, grade-level equivalence is arranged when they enrol in school — see the guide on enrolling in school.',
          'Always bring your education documents with an apostila and a translation — it is needed almost everywhere.'
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'DGES — Reconhecimento de Graus e Diplomas Estrangeiros de Ensino Superior',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'DGES — Centro ENIC/NARIC Portugal',
      url: 'https://www.dges.gov.pt/pt/pagina/centro-naric',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'ACM — How to obtain recognition of foreign qualifications',
      url: 'https://www.acm.gov.pt/pt/-/como-obter-reconhecimento-de-qualificacoes-estrangeira-1',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 180
}
