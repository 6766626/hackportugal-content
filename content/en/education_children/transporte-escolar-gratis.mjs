export default {
  editorialVoice: 'hackportugal',
  id: 'transporte-escolar-gratis',
  categoryId: 'education_children',
  title: 'Free school transport: responsibility of the município',
  tldr: 'In Portugal, school transport is organised by the Câmara Municipal/município, not by the school. In 2026, free transport is usually available to children aged 6–18 in ensino básico and ensino secundário, if the school is more than 3 km from home and the child attends the assigned/publicly designated school. The application is submitted to the município after matrícula; NIF, address, school and timetable are needed. For children under 12, there must be an accompanying adult on school transport.',
  tags: ['school', 'transport', 'municipality', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Who is responsible and who pays',
      content: [
        { kind: 'paragraph', text: 'Transporte escolar is the responsibility of the município. In practice this means: the route, bus/taxi/pass, operator, application deadlines and rules for returning cards are defined by the Câmara Municipal where the child lives.' },
        { kind: 'paragraph', text: 'The school confirms the matrícula and timetable, but does not “issue transport” itself. If the school office says “this is with the Câmara”, that is normal: apply through the município website, Balcão Único or the Educação/Transportes Escolares department.' },
        { kind: 'checklist', items: [
          'Age: usually children and teenagers aged 6–18 in escolaridade obrigatória',
          'Levels: ensino básico and ensino secundário',
          'Distance: home is more than 3 km from the school',
          'School: as a rule, the nearest or officially assigned escola da área de residência / Agrupamento',
          'Address: confirmed by NIF/Finanças, atestado de residência, rental contract or bill — depending on the município',
          'Form of support: free passe, school bus, municipal route, taxi escolar or reimbursement',
          'Responsible authority: Câmara Municipal, even if the transport is operated by Carris, STCP, CP, Rodoviária, Vimeca, Fertagus or a local operator'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Check eligibility for free transport',
      content: [
        { kind: 'paragraph', text: 'The basic rule for 2026: free school transport is provided to pupils in compulsory education if the distance from the place of residence to the school exceeds 3 km. The município may specify how it measures the distance: by road, by the shortest walking route or via a GIS map.' },
        { kind: 'checklist', items: [
          'The child is aged between 6 and 18 or is still completing escolaridade obrigatória',
          'There is a confirmed matrícula or renovação de matrícula for the school year',
          'The school belongs to your area or the child has been officially directed there',
          'The home is more than 3 km from the school',
          'There is no other free school option closer to home that the family voluntarily refused to use',
          'The child actually lives in that município',
          'The application is submitted within the deadlines published by the Câmara Municipal',
          'For special educational needs there may be a separate arrangement, including adapted transport'
        ] },
        { kind: 'warning', text: 'If the family chooses a private school or a public school outside the area “by personal choice”, the município may refuse free transport or pay only the cost of the route to the assigned school. This must be checked in the regulamento municipal de transportes escolares.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply 🚌',
      content: [
        { kind: 'paragraph', text: 'Apply immediately after matrícula/renovação de matrícula. In most municípios, the application window opens in spring–summer before the school year: as a guide, May–July, but the exact dates are local. A late application is often processed only after lessons have already started.' },
        { kind: 'substeps', items: [
          { id: 'find-page', title: '1. Find the Câmara Municipal page', content: [
            { kind: 'paragraph', text: 'On the município website, look for the section “Educação”, “Transportes Escolares”, “Ação Social Escolar” or “Balcão Online”. In small municípios, applications are sometimes accepted by email or in person at the Balcão Único.' }
          ] },
          { id: 'prepare-documents', title: '2. Prepare the documents', content: [
            { kind: 'checklist', items: [
              'Child’s document: passport, Cartão de Cidadão or residence permit',
              'Child’s NIF, if they already have one',
              'NIF of the parent/encarregado de educação',
              'Proof of address: atestado de residência, contrato de arrendamento, fatura de água/luz/telecom or certidão fiscal de domicílio',
              'Proof of matrícula or declaração da escola',
              'Name of the Agrupamento/Escola and school year',
              'Timetable, if the município asks for horários',
              'Photo of the child for the passe, if required',
              'IBAN, if reimbursement of expenses is provided instead of a travel pass'
            ] }
          ] },
          { id: 'submit', title: '3. Apply online or in person', content: [
            { kind: 'paragraph', text: 'After submitting, keep the comprovativo. If the child needs a route with a transfer, check who issues the card: the município, the school or the transport operator.' }
          ] },
          { id: 'confirm', title: '4. Receive the passe or timetable', content: [
            { kind: 'paragraph', text: 'Before the start of the school year, the município usually publishes lists/routes or sends an email. Check the stop, the morning time and after-school time, rules for delays and the dispatcher’s contact details.' }
          ] }
        ] }
      ]
    },
    {
      id: 'under-12',
      title: 'Children under 12: accompanying adult',
      content: [
        { kind: 'paragraph', text: 'For young children, it is not only the right to free transport that matters, but also safety. On school transport for children under 12, there must be an accompanying adult — usually a funcionário/monitor, contratado pelo município or by the operator.' },
        { kind: 'checklist', items: [
          'Check whether there is a monitor/acompanhante on the route',
          'Ask for the boarding and drop-off rules: who is authorised to collect the child',
          'Give the school and operator the phone numbers of both parents',
          'If the child is in 1.º ciclo, check whether they are taken to the school entrance or only to the stop',
          'Notify in writing if the child is collected by a nanny, avó/avô or another adult',
          'Check seat belts and fixed seats, especially in a taxi escolar or carrinha',
          'Save the contact details of the Câmara Municipal and the transport operator in case of delay'
        ] },
        { kind: 'warning', text: 'Do not agree to a verbal “they are old enough, they can travel alone” if the child is under 12 and the route is registered as school transport. Ask for written confirmation from the município about the acompanhamento arrangements.' }
      ]
    },
    {
      id: 'problems',
      title: 'If you are refused or the route is inconvenient',
      content: [
        { kind: 'paragraph', text: 'Refusals are most often linked to three reasons: the distance is less than 3 km, the school was chosen outside the area, or the application was submitted after the deadline. Ask for a written decision with a reference to the regulamento municipal — without it, it is difficult to challenge.' },
        { kind: 'checklist', items: [
          'Check how the município measured the 3 km: by road or as the crow flies',
          'Compare the address recorded at the school, Finanças and in the application',
          'Ask the Agrupamento to confirm that the school was officially assigned',
          'If the child has necessidades educativas especiais, attach the relatório técnico-pedagógico or confirmation from the school',
          'If there is no public transport, ask about taxi escolar or circuito especial',
          'If the walking route is dangerous, attach photos/maps: lack of pavement, lighting, crossings',
          'Submit a reclamação to the Câmara Municipal via the Livro de Reclamações Eletrónico or Balcão Único',
          'At the same time, inform the Agrupamento headteacher: the school can confirm the need for the route'
        ] },
        { kind: 'warning', text: 'Do not buy an annual travel pass in advance expecting an automatic refund. Many municípios reimburse only after prior approval of the application or only for specific operators.' }
      ]
    }
  ],
  costs: [
    { label: 'Free school transport when the conditions are met', amountEUR: 0, note: 'The município pays for or provides a passe/route for ensino básico/secundário when the distance is usually >3 km.' },
    { label: 'Duplicate/replacement transport card', amountEURMin: 5, amountEURMax: 15, note: 'There is no single national tariff; it depends on the operator and the município.' }
  ],
  sources: [
    {
      title: 'Direção-Geral da Educação — school transport and organisation of the school network',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — education, matrícula and public services for families',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 21/2019 — transfer of education responsibilities to municípios',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/21-2019-118748848',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2006 — transporte coletivo de crianças and accompaniment',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2006-672586',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
