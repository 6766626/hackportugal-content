export default {
  editorialVoice: 'hackportugal',
  id: 'atl-actividades-tempos-livres',
  categoryId: 'education_children',
  title: 'ATL and CAF: after-school care for 6-10-year-old schoolchildren in Portugal',
  tldr: 'For 1.º ciclo, years 1-4, after lessons there are usually free AEC and paid/subsidised CAF/ATL: supervision in the morning, lunch, the end of the day and school holidays. Registration often opens together with matrícula/renovação on portal-matriculas.gov.pt in spring-summer 2026, but the rules and prices are set by the município or IPSS. Families with escalão A/B da Ação Social Escolar usually pay less or €0; social cases and children with special needs have priority.',
  tags: ['atl', 'caf', 'school', 'lunch', 'ase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-atl',
      title: 'What ATL, CAF and AEC are',
      content: [
        { kind: 'paragraph', text: 'In Portuguese primary school, a child’s day is divided between compulsory lessons and additional services. Parents often call everything “ATL”, but legally and organisationally these may be different things.' },
        { kind: 'checklist', items: [
          'AEC — Atividades de Enriquecimento Curricular: free optional activities after lessons in 1.º ciclo, for example inglês, atividade física, música, artes.',
          'CAF — Componente de Apoio à Família: supervision before lessons, after AEC, during the lunch break and sometimes during school holidays.',
          'ATL — Atividades de Tempos Livres: a broader name for after-school care; it is often run by an IPSS, associação de pais, Santa Casa, Junta de Freguesia or private operator.',
          'Refeições escolares — school lunch; it is usually arranged separately through the município/school portal, but often in the same application package.',
          'Transportes escolares — school transport; the rules depend on distância casa-escola, age and the municipality.',
          'For children aged 6-10, the key service is CAF/ATL, because lessons and AEC usually finish before the end of the parents’ working day.'
        ] }
      ]
    },
    {
      id: 'where-to-enrol',
      title: 'Where to enrol the child 📝',
      content: [
        { kind: 'paragraph', text: 'The first entry point is Portal das Matrículas. For 2026, this is the main state portal for matrícula and renovação de matrícula. When submitting or renewing school enrolment, check the sections on Ação Social Escolar, refeições, transportes and atividades de apoio à família. However, payment itself and final confirmation of the place often happen later through the município, agrupamento de escolas or IPSS.' },
        { kind: 'substeps', items: [
          { id: 'portal', title: '1. Portal das Matrículas', content: [
            { kind: 'checklist', items: [
              'Log in via autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão or the representative’s details.',
              'Choose matrícula/renovação for 1.º ciclo.',
              'Check whether there are items for Ação Social Escolar, refeições, transportes, AAAF/CAF or atividades.',
              'Upload documents if the portal or school asks for them.',
              'Save the comprovativo da matrícula — it may be requested by the município or IPSS.'
            ] }
          ] },
          { id: 'municipio', title: '2. Município or Agrupamento de Escolas', content: [
            { kind: 'paragraph', text: 'After submitting on the portal, go to the Câmara Municipal website for the school’s area. Many municipalities have a separate “Portal da Educação” for lunches, CAF/ATL, transport and payments.' }
          ] },
          { id: 'operator', title: '3. IPSS / associação / ATL', content: [
            { kind: 'paragraph', text: 'If the after-school care is run by an IPSS or associação de pais, they may have their own form, contract, mensalidade and list of documents. Do not expect automatic enrolment only because you indicated interest in Portal das Matrículas.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and details that are usually requested',
      content: [
        { kind: 'paragraph', text: 'There is no single national list: the school and município may ask for different documents. For expats, it is important to gather the Portuguese identifiers of the child and parents in advance.' },
        { kind: 'checklist', items: [
          'NIF of the child and encarregado de educação.',
          'Documento de identificação of the child: passport, Cartão de Cidadão or residence permit, if already available.',
          'Parents’/guardian’s details: NIF, address, telephone, email.',
          'Comprovativo de morada: contrato de arrendamento, utility bill or atestado de residência from the Junta de Freguesia.',
          'Comprovativo do agregado familiar from Finanças or Segurança Social, if requested for benefits.',
          'Escalão do abono de família: A, B or another — affects Ação Social Escolar.',
          'NISS of the child/parent, if already available; it is not always mandatory, but is often needed for Segurança Social and benefits.',
          'Declaração médica or informação de saúde: allergies, medication, dietary restrictions.',
          'IBAN or autorização de débito direto, if the município collects payment automatically.',
          'Contacts of the people authorised to collect the child from ATL/CAF.'
        ] },
        { kind: 'warning', text: 'If the family has just arrived and does not yet have escalão do abono de família, do not postpone ATL enrolment. Submit the application with the available documents and arrange NISS/Segurança Social in parallel. Ask the school or município to assess the situação socioeconómica — in some places a temporary assessment by the social service may be possible.' }
      ]
    },
    {
      id: 'priority-and-costs',
      title: 'Who gets priority and how much it costs',
      content: [
        { kind: 'paragraph', text: 'AEC in state schools are free. CAF/ATL and lunches may be free or paid — it depends on the município, operator and escalão da Ação Social Escolar. The national logic is that lower-income families receive more support, but the specific tabela de preços is published by the municipality.' },
        { kind: 'checklist', items: [
          'Children with escalão A/B da Ação Social Escolar usually receive priority.',
          'Social cases flagged by Comissão de Proteção de Crianças e Jovens, Segurança Social or the school social service are considered as a priority.',
          'Children with deficiência, necessidades específicas or medical restrictions may have additional priority and adaptations.',
          'Children already attending the same agrupamento often have an advantage when renewing.',
          'Working parents may receive priority for CAF, but this is not a national rule — check the regulamento municipal.',
          'Lunch for escalão A is usually free; for escalão B, 50% is often paid; without a benefit, the full municipal price is paid.',
          'CAF/ATL may cost €0 for escalão A, a subsidised amount for escalão B and the full mensalidade for others.',
          'Holidays, extra manhãs/tardes and extended horário may be charged separately.'
        ] },
        { kind: 'warning', text: 'Do not confuse AEC and ATL. If you need supervision until 18:30-19:00, free AEC alone are almost never enough: they cover only part of the day. Check the horário de funcionamento CAF/ATL before signing the contract.' }
      ]
    },
    {
      id: 'practical-timing',
      title: 'Practical timetable for 2026',
      content: [
        { kind: 'paragraph', text: 'The exact matrícula and renovação dates are published each year by the Ministério da Educação and Portal das Matrículas. In practice, for 1.º ciclo, enrolment and renewal take place in spring-summer; municipal applications for lunches, transport and CAF/ATL often open immediately after school matrícula or in June-July.' },
        { kind: 'checklist', items: [
          'April-May: check the matrícula/renovação deadlines on portal-matriculas.gov.pt and your agrupamento website.',
          'May-June: submit matrícula or renovação; save the comprovativo.',
          'June-July: open the Câmara Municipal website and submit applications for refeições, transportes, CAF/ATL.',
          'July-August: sign the contract with the IPSS/associação, if the after-school care is not municipal.',
          'Before the start of September: check the horário, price, payment method and list of authorised people for pickup.',
          'First week of school: confirm with the professora titular and ATL coordinator where the child has lunch and where they go after lessons.'
        ] },
        { kind: 'warning', text: 'ATL places near popular schools run out quickly. If you are moving to Portugal in the summer, write to the agrupamento, Câmara Municipal and nearby IPSS at the same time — do not wait to receive a residence permit if the child already has a NIF, address and school matrícula.' }
      ]
    },
    {
      id: 'questions-to-ask',
      title: 'What to ask before paying',
      content: [
        { kind: 'paragraph', text: 'Before agreeing to a specific ATL/CAF, ask questions in writing. This is especially important if the child does not yet speak Portuguese well.' },
        { kind: 'checklist', items: [
          'Until what time is the child supervised: 17:30, 18:30 or 19:00?',
          'Is almoço included in the price or paid separately through the município?',
          'Is there a lanche after lessons and who brings it?',
          'Does ATL operate during interrupções letivas: Christmas, Carnival, Easter, summer holidays?',
          'What is the mensalidade for your escalão ASE and is there a taxa de inscrição?',
          'How do you report the child’s absence so that you do not pay for lunch?',
          'Who helps with homework and is there apoio ao estudo?',
          'Are there staff who speak English, and how do they support immigrant children?',
          'How is the autorização de saída and the list of people who can collect the child arranged?',
          'What happens during a school strike or canteen closure?'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AEC in a state school', amountEUR: 0, note: 'Free optional 1.º ciclo activities; they do not replace full ATL until the evening.' },
    { label: 'School lunch, escalão A', amountEUR: 0, note: 'Usually free under Ação Social Escolar; confirmed by the município/agrupamento.' },
    { label: 'School lunch, escalão B', amountEURMin: 0.7, amountEURMax: 0.9, note: 'Often around 50% of the full price; the exact amount depends on the municipal tariff.' },
    { label: 'Municipal or IPSS CAF/ATL', amountEURMin: 0, amountEURMax: 80, note: 'Typical range for subsidised/municipal programmes; private ATL may be more expensive.' },
    { label: 'Private ATL without benefits', amountEURMin: 100, amountEURMax: 250, note: 'Indicative range for large cities; holidays and meals are often paid separately.' }
  ],
  sources: [
    { title: 'Direção-Geral da Educação — Atividades de Enriquecimento Curricular and 1.º ciclo', url: 'https://www.dge.mec.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal do Governo — Portal das Matrículas and education services', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Matrículas — matrícula e renovação online', url: 'https://portaldasmatriculas.edu.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
