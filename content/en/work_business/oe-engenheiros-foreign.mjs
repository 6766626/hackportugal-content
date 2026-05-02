export default {
  editorialVoice: 'hackportugal',
  id: 'oe-engenheiros-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Engenheiros: how a foreign engineer can obtain the right to sign projects',
  tldr: 'For most engineering projects in Portugal, a foreign degree certificate alone is not enough: to sign peças escritas/desenhadas and a termo de responsabilidade for the Câmara Municipal, you need status with the Ordem dos Engenheiros or another recognised ordem/associação for the speciality. In 2026, the route depends on the country of the degree: EU/EEA — via Lei 9/2009 and recognition of professional qualifications; UK Chartered Engineer — via the Engineering Council–OE MRA; non-EU — usually DGES reconhecimento + application to the OE + relatório profissional/assessment of experience.',
  tags: ['engineers', 'projects', 'ordem', 'dges'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-oe',
      title: 'Why the Ordem dos Engenheiros is needed',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Engenheiros (OE) is a public professional association for engineers. Membership in itself does not replace a construction licence, but for design work it is often the practical pass: the client, Câmara Municipal, fiscalização and insurer want to see that the técnico autor has a valid inscrição and competence in the speciality.' },
        { kind: 'paragraph', text: 'For licenciamento/comunicação prévia projects, the peças do projeto and termo de responsabilidade are usually submitted. It is signed by a técnico legalmente habilitado. For engineering disciplines, this is generally a membro efetivo OE or a specialist from another applicable professional association, if the law allows that profession for the specific project.' },
        { kind: 'checklist', items: [
          'Building structures: estabilidade, betão, aço, geotecnia — an engineer with the relevant especialidade is usually required',
          'Águas, esgotos, águas pluviais, gás, térmica, acústica, segurança contra incêndio — profile and experience are checked',
          'Electrical engineering projects: OE may be sufficient, but for some works separate DGEG/entidade inspetora rules are required',
          'An architect’s signature does not replace an engineer for engineering especialidades',
          'A foreign company may be the contractor, but the project signatory must have Portuguese professional habilitação',
          'A signed PDF without a termo de responsabilidade and OE inscrição number is often not accepted',
          'For tenders and major clients, a declaração emitida pela OE on membership status may be required'
        ] }
      ]
    },
    {
      id: 'choose-route',
      title: 'Choose the route according to the origin of the qualification',
      content: [
        { kind: 'substeps', items: [
          { id: 'eu-eea', title: 'Degree and profession from the EU/EEA/Switzerland', content: [
            { kind: 'paragraph', text: 'The basic regime is Lei 9/2009, which transposes the European rules on recognition of professional qualifications. You submit evidence to the OE of education, the right to practise the profession in the country of origin and professional experience. The OE may recognise the qualification directly or impose medidas de compensação if there are substantial differences.' },
            { kind: 'checklist', items: [
              'Passport/ID',
              'Engineering degree and transcript with subjects/ECTS',
              'Certificate of the right to practise the profession in the country of origin, if the profession is regulated there',
              'Proof of experience: employers, projects, positions, dates',
              'CV in Portuguese or English',
              'Certificate of no disciplinary sanctions, if applicable',
              'Translations into Portuguese if the documents are not in PT/EN/ES/FR, as required by the OE'
            ] }
          ]},
          { id: 'uk-ceng', title: 'UK Chartered Engineer: Engineering Council — OE route', content: [
            { kind: 'paragraph', text: 'After Brexit, the UK is not treated as an EU route, but a Mutual Recognition Agreement is in force between the Engineering Council and the Ordem dos Engenheiros. It is primarily intended for registered Chartered Engineers (CEng) who want professional recognition in Portugal.' },
            { kind: 'paragraph', text: 'In practice, this is not an “automatic card swap”: the OE still checks documents, discipline, good standing and alignment with the Portuguese especialidade. But the MRA reduces uncertainty and is usually stronger than an ordinary non-EU application without professional status.' }
          ]},
          { id: 'non-eu', title: 'Degree outside the EU: reconhecimento + relatório profissional', content: [
            { kind: 'paragraph', text: 'For degrees from Russia, Belarus, Ukraine, Kazakhstan, Brazil and other non-EU countries, the OE usually looks not only at the degree but also at academic recognition in Portugal. A common first step is reconhecimento de grau académico through DGES/a Portuguese university under Decreto-Lei 66/2018: reconhecimento automático, de nível or específico.' },
            { kind: 'paragraph', text: 'The OE then assesses the candidatura. For a non-EU engineer, the key document is the relatório profissional: a structured report on projects, responsibilities, calculations, standards, software, assets and the candidate’s role. Its purpose is to prove that you did not simply “work as an engineer”, but personally performed functions at português engenheiro level.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Document package for the OE',
      content: [
        { kind: 'paragraph', text: 'The exact list depends on the especialidade and route, but prepare the package in advance. The most common reasons for delays are incomplete degree transcripts, missing translations and an overly general CV without evidence of design responsibility.' },
        { kind: 'checklist', items: [
          'Documento de identificação: passport, Cartão de Cidadão or residence permit',
          'NIF and Portuguese address for correspondence',
          'Engineering degree; for non-EU — preferably already with DGES reconhecimento or a document from a Portuguese university',
          'Histórico escolar / suplemento ao diploma: subjects, hours, ECTS or academic workload',
          'CV with dates, employers, positions, project types and your role',
          'Relatório profissional: 5–15 pages on key projects, calculations, standards, responsibilities and results',
          'Portfolio: project cover sheets, anonymised drawings, calculation notes, BIM/CAE examples, if they can be disclosed',
          'Certificates from employers or clientes on duties and periods of work',
          'Certificate of good standing / disciplinary record from a professional organisation, if you have already been a member of one',
          'Translations and legalisation: apostille/legalização by a consulate, if the document was issued outside the EU and the OE/DGES requires this',
          'Proof of Portuguese proficiency is not always formally required, but to sign projects you must understand legislação, normas e regulamentos portugueses'
        ] },
        { kind: 'warning', text: 'Do not submit a “polished” relatório profissional without evidence. The OE assesses competences: calculation responsibility, standards, risk, supervisão, coordenação, interaction with authorities. A simple list of buildings without your function is often returned for revision.' }
      ]
    },
    {
      id: 'application',
      title: 'How to apply and what happens afterwards',
      content: [
        { kind: 'paragraph', text: 'Applications are made through the Ordem dos Engenheiros: online forms/contacts on the OE website and the regional secção for your place of residence or work. Before applying, check which especialidade you are entering: civil, eletrotécnica, mecânica, informática, ambiente, química, agronómica, geológica e minas, etc. The wrong especialidade delays the process.' },
        { kind: 'checklist', items: [
          'Create an account or request instructions from the OE secção regional',
          'Choose the modalidade: admissão as a new membro, EU qualification recognition, UK MRA or non-EU evaluation',
          'Upload degrees, reconhecimento, CV, relatório profissional and proof of experience',
          'Pay the OE fees according to the current tabela de emolumentos',
          'Respond to pedidos de elementos adicionais — a deadline is usually given, so do not ignore emails',
          'If necessary, complete an entrevista, prova, estágio or medidas de compensação',
          'After approval, receive the membro number and status; to sign projects you need a status that the OE recognises as sufficient for that especialidade',
          'Order a declaração de inscrição/regularidade if required by the Câmara Municipal or client'
        ] },
        { kind: 'paragraph', text: 'Timelines depend heavily on the package and especialidade: a simple application with a European degree may proceed faster, while a non-EU application with reconhecimento and relatório profissional may take months. Plan to sign a real project only after receiving OE confirmation, not after submitting the application.' }
      ]
    },
    {
      id: 'signing-projects',
      title: 'Signing projects: what the Câmara and clients check',
      content: [
        { kind: 'paragraph', text: 'Once membership is obtained, this still does not mean the right to sign every engineering section. Check the habilitação por especialidade, the requirements of the specific municipality and special regimes: segurança contra incêndio, gás, eletricidade, térmica/REH/RECS, acústica, estruturas especiais.' },
        { kind: 'checklist', items: [
          'In the termo de responsabilidade, state your full name, OE number, especialidade and role in the project',
          'Check whether the Câmara requires a recent declaração da Ordem — sometimes only a recently issued document is accepted',
          'Use a qualified electronic signature if the process is handled through a plataforma urbanística',
          'Do not sign sections outside your competence: this is a disciplinary and insurance risk',
          'Keep calculations, drawing versions and correspondence: fiscalização may ask for justification',
          'Clarify responsabilidade civil profissional with the insurer: OE membership does not automatically equal cover for all risks',
          'For projects under Portuguese standards, use Eurocódigos, legislação nacional and municipal regulamentos, not only the standards of the country of origin'
        ] },
        { kind: 'warning', text: 'Signing “for a friend”, signing a project you have not checked, or using someone else’s OE number is a direct risk of disciplinary proceedings, civil liability and refusal of licenciamento by the Câmara.' }
      ]
    },
    {
      id: 'practical-advice',
      title: 'Practical advice for a foreign engineer',
      content: [
        { kind: 'paragraph', text: 'If your aim is to work in Portugal, not merely obtain an attractive status, start with the market: find a local gabinete de engenharia and carry out your first projects under the supervisão of a Portuguese senior engineer. This speeds up your understanding of the Câmara, plataformas municipais, Eurocódigos, REH/RECS and licenciamento procedures.' },
        { kind: 'checklist', items: [
          'Before moving, collect original degrees, transcripts, employer certificates and apostille',
          'Create a correspondence table between your subjects and the Portuguese OE especialidade',
          'For non-EU, start DGES reconhecimento in advance: without it, the OE may not accept the academic part',
          'If you are a CEng from the UK, first obtain confirmation of status and good standing from the Engineering Council',
          'Translate key documents into Portuguese via a sworn/tradutor route or another method accepted by the OE',
          'In the relatório profissional, be specific: asset, year, area/capacity, standards, calculation, your signature or responsibility',
          'Do not promise a client a licenciamento timeline until the OE has confirmed the habilitação',
          'After admission, keep track of quotas and regularidade: overdue membership fees can spoil the declaração for the Câmara'
        ] }
      ]
    }
  ],
  costs: [
    {
      label: 'Academic reconhecimento via DGES/university',
      amountEURMin: 27.3,
      amountEURMax: 600,
      note: 'Depends on the type of reconhecimento and institution; específico is usually more expensive than automático.'
    },
    {
      label: 'Translations, apostille, certifications',
      amountEURMin: 20,
      amountEURMax: 250,
      note: 'Per document/package; depends on the issuing country and the size of the degree transcript.'
    },
    {
      label: 'Ordem dos Engenheiros fees and quotas',
      amountEURMin: 0,
      amountEURMax: 300,
      note: 'Check the current OE tabela de emolumentos: amounts depend on the type of candidatura, status and secção.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Engenheiros — official website and admission rules',
      url: 'https://www.ordemengenheiros.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Engineering Council — Mutual Recognition Agreement with Ordem dos Engenheiros',
      url: 'https://www.engc.org.uk/international-activity/european-recognition/mutual-recognition-agreement-portugal/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 9/2009 — recognition of professional qualifications',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34532975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — recognition of foreign degrees and diplomas',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
