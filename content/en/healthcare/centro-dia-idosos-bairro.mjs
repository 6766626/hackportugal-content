export default {
  editorialVoice: 'hackportugal',
  id: 'centro-dia-idosos-bairro',
  categoryId: 'healthcare',
  title: 'Centro de Dia — day support for older people',
  tldr: 'Centro de Dia is a day centre for older people: the person lives at home and during the day receives meals, supervision, activities, help with hygiene and often transporte. They are usually run by an IPSS/Misericórdia/local associação, with hours roughly 08:00–18:00 on weekdays. In 2026 the price is often €200–500/month and depends on household income; places are found through Carta Social, Junta de Freguesia, Segurança Social and local IPSS. This is an alternative to ERPI if the family wants to keep the older person at home but cannot leave them alone during the day.',
  tags: ['older people', 'ipss', 'care', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Centro de Dia is',
      content: [
        { kind: 'paragraph', text: 'Centro de Dia is a social day service for older people who live at home but need support during the day. It is not a care home: there is no overnight stay, and the person continues to live permanently at their own home or with family.' },
        { kind: 'paragraph', text: 'Typical format: in the morning the person is picked up or comes independently; at the centre there is breakfast/lunch/afternoon snack, activities, supervision, help with basic hygiene, taking medication according to the family’s/doctor’s instructions, socialisation; in the evening they return home.' },
        { kind: 'checklist', items: [
          'For older people who should not be left alone all day',
          'For families where relatives work from 09:00 to 18:00',
          'For people with mild or moderate loss of autonomy',
          'To prevent isolation, depression and falls at home',
          'For those for whom ERPI is still too early or psychologically difficult',
          'To restore routine after hospitalisation, if there is night-time care at home'
        ] }
      ]
    },
    {
      id: 'services',
      title: 'What is usually included 🧓',
      content: [
        { kind: 'paragraph', text: 'The set of services depends on the specific IPSS and its agreement with Segurança Social. Before enrolling, ask for the regulamento interno and tabela de comparticipações: these state what is included, what is paid separately and how the mensalidade is calculated.' },
        { kind: 'checklist', items: [
          'Meals: usually breakfast, lunch and lanche; sometimes takeaway dinner',
          'Social and cognitive activities: exercise, memory work, music, handicrafts',
          'Supervision during the day and contact with the family if the person’s condition worsens',
          'Help with hygiene: washing, scheduled showering, changing clothes — if the centre provides this',
          'Support with taking medication according to the schedule provided by the family/doctor',
          'Transporte casa-centro-casa: often available, but the radius and price are limited',
          'Celebrations, trips, visitas culturais — sometimes for an additional fee',
          'Coordination with Centro de Saúde or the family doctor when necessary'
        ] },
        { kind: 'warning', text: 'Centro de Dia does not replace a medical inpatient ward, serviço de urgência, a 24-hour carer or ERPI. If there is dementia requiring 24/7 care, risk of wandering, aggression, a permanent bedridden state or night-time episodes, the centre may refuse admission and suggest ERPI, SAD or cuidados continuados.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Where to look for a place',
      content: [
        { kind: 'paragraph', text: 'The most practical approach is not to look for the “best centre in Portugal”, but for nearby facilities in your concelho/freguesia: transporting an older person every day quickly becomes the main constraint.' },
        { kind: 'substeps', items: [
          { id: 'carta-social', title: '1. Check Carta Social', content: [
            { kind: 'paragraph', text: 'On cartasocial.pt, select distrito, concelho, freguesia and the resposta social “Centro de Dia”. The records usually show the entidade, morada, telefone, capacidade and sometimes situação da resposta.' }
          ] },
          { id: 'local-network', title: '2. Ask Junta de Freguesia and Câmara Municipal', content: [
            { kind: 'paragraph', text: 'The Junta often knows the real waiting lists, transporte and IPSS that accept residents of the area. In small freguesias this is faster than waiting for an email reply.' }
          ] },
          { id: 'social-security', title: '3. Contact Segurança Social', content: [
            { kind: 'paragraph', text: 'If the situation is urgent — the older person is alone, has just been discharged, or the family is not coping — request atendimento social at Segurança Social. They can refer you to the rede social local or suggest respostas sociais com acordo de cooperação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Documents and enrolment',
      content: [
        { kind: 'paragraph', text: 'The document package varies, but an IPSS almost always assesses personal data, health condition, income and family situation. For a foreign national, NIF, address and lawful stay are important; a residence permit helps, but the specific centre may accept documents based on a visa, CRUE or another status — check in advance.' },
        { kind: 'checklist', items: [
          'Older person’s document: Cartão de Cidadão, residence permit or passport',
          'Older person’s NIF and, often, the responsible relative’s NIF',
          'Número de utente SNS and contact details for Centro de Saúde/family doctor',
          'List of diagnoses, medicines, allergies and dietary restrictions',
          'Relatório médico, if there is dementia, diabetes, disability, falls or incontinence',
          'Proof of address: atestado de residência, rental contract or utility bill',
          'Comprovativos de rendimentos: pension, IRS, declaração da Segurança Social, bank statements — if requested',
          'Contact details of the responsible person and permissions for emergency contact',
          'If necessary: atestado médico de incapacidade multiuso'
        ] },
        { kind: 'paragraph', text: 'After applying, there is usually an entrevista social: they ask who the older person lives with, who picks them up in the evening, whether there are stairs/a lift, whether transporte is needed, and whether the person can eat independently, use the toilet, and orient themselves in time and place.' }
      ]
    },
    {
      id: 'price-and-contract',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'At an IPSS with an acordo de cooperação, the price is usually not “fixed like a subscription”, but a mensalidade/comparticipação familiar calculated according to household income and the institution’s rules. In practice, families often see a range of €200–500/month, but with higher income, transporte and additional services the amount can be higher.' },
        { kind: 'checklist', items: [
          'Ask for the tabela de comparticipações before signing the contract',
          'Check whether fraldas, medicines, hygiene products and podologia are included',
          'Check the transporte price and the route radius',
          'Ask whether days of absence, hospitalisation and family holidays are charged',
          'Clarify the horário: many centres operate roughly 08:00–18:00, Monday–Friday',
          'Check whether they operate on feriados, in August and between Natal/Ano Novo',
          'Ask for the written regulamento interno and contrato de prestação de serviços',
          'Clarify the aviso prévio period for termination — often 30 days'
        ] },
        { kind: 'warning', text: 'Do not focus only on price. For an older person, the distance, stability of transporte, staff, meals, ability to contact the family quickly and the centre’s willingness to work with specific diagnoses are more important.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'If there is no place or a different level of care is needed',
      content: [
        { kind: 'paragraph', text: 'Waiting lists at good IPSS are normal, especially in Lisboa, Porto, Cascais, Oeiras, Algarve and the suburbs. Join the waiting list at several centres at once and look at alternatives in parallel.' },
        { kind: 'checklist', items: [
          'SAD — Serviço de Apoio Domiciliário: home support, meals, hygiene, cleaning, medicines',
          'ERPI — Estrutura Residencial para Pessoas Idosas: permanent 24/7 residential care',
          'Centro de Convívio — lighter than Centro de Dia: more socialisation, less care',
          'Cuidados Continuados — medical and rehabilitation network after illness/hospitalisation, through SNS',
          'Private carer: flexible, but usually more expensive for a daily schedule',
          'Combination: Centro de Dia during the day + apoio domiciliário in the evening/morning'
        ] },
        { kind: 'paragraph', text: 'If the older person has recently been discharged from hospital, ask the hospital social worker or Centro de Saúde for help with encaminhamento. They have contacts in the rede social local and can more quickly understand which type of resposta social is suitable.' }
      ]
    }
  ],
  costs: [
    { label: 'Centro de Dia in an IPSS, guide price', amountEURMin: 200, amountEURMax: 500, note: 'The mensalidade usually depends on household income and the institution’s rules; transporte and consumables may be separate.' },
    { label: 'Transporte casa-centro-casa', amountEURMin: 0, amountEURMax: 100, note: 'Sometimes included, sometimes paid separately; depends on distance and route.' },
    { label: 'Private Centro de Dia', amountEURMin: 400, amountEURMax: 900, note: 'Market prices vary greatly by region, schedule, meals and level of care.' }
  ],
  sources: [
    { title: 'Carta Social — search for respostas sociais, including Centro de Dia', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt/idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — information on instituições particulares de solidariedade social', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
