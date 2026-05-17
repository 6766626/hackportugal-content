export default {
  editorialVoice: 'hackportugal',
  id: 'centro-dia-idosos-bairro',
  categoryId: 'healthcare',
  title: 'Centro de Dia — daytime support for older people',
  tldr: 'Centro de Dia is a day centre for older people: the person lives at home, and during the day receives meals, supervision, activities, help with hygiene and often transporte. They are usually run by an IPSS/ Misericórdia/local associação, with hours of roughly 8:00–18:00 on weekdays. In 2026 the price is usually €200–500/month and depends on household income; places are found through Carta Social, Junta de Freguesia, Segurança Social and local IPSS. This is an alternative to ERPI if the family wants to keep the older person at home but cannot leave them alone during the day.',
  tags: ['older-people', 'ipss', 'care', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Centro de Dia is',
      content: [
        { kind: 'paragraph', text: 'Centro de Dia is a daytime social service for older people who live at home but need support during the day. It is not a care home: there is no overnight stay, and permanent residence remains at the family home or the older person’s own home.' },
        { kind: 'paragraph', text: 'Typical format: in the morning the person is collected or comes independently; at the centre there is breakfast/lunch/afternoon snack, activities, supervision, help with basic hygiene, taking medicines according to the family/doctor’s instructions, socialisation; in the evening they return home.' },
        { kind: 'checklist', items: [
          'For older people who should not stay alone all day',
          'For families where relatives work from 9:00 to 18:00',
          'For people with mild or moderate loss of autonomy',
          'For preventing isolation, depression and falls at home',
          'For those for whom ERPI is still too early or psychologically difficult',
          'For restoring a routine after hospitalisation, if there is night-time care at home'
        ] }
      ]
    },
    {
      id: 'services',
      title: 'What is usually included 🧓',
      content: [
        { kind: 'paragraph', text: 'The set of services depends on the specific IPSS and the agreement with Segurança Social. Before enrolment, ask for the regulamento interno and tabela de comparticipações: these state what is included, what is paid separately and how the mensalidade is calculated.' },
        { kind: 'checklist', items: [
          'Meals: usually breakfast, lunch and lanche; sometimes takeaway dinner',
          'Social and cognitive activities: gymnastics, memory, music, crafts',
          'Supervision during the day and contact with the family if the person’s condition worsens',
          'Help with hygiene: washing, scheduled shower, changing clothes — if the centre provides this',
          'Support with taking medicines according to the plan provided by the family/doctor',
          'Transporte casa-centro-casa: often available, but radius and price are limited',
          'Celebrations, excursions, visitas culturais — sometimes for an extra charge',
          'Coordination with Centro de Saúde or family doctor if needed'
        ] },
        { kind: 'warning', text: 'Centro de Dia does not replace a medical inpatient unit, serviço de urgência, a 24-hour carer or ERPI. If there is dementia requiring 24/7 care, risk of wandering, aggression, permanent bedbound status or night-time episodes — the centre may refuse and suggest ERPI, SAD or cuidados continuados.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Where to look for a place',
      content: [
        { kind: 'paragraph', text: 'The most practical approach is not to look for the “best centre in Portugal”, but for nearby institutions in your concelho/freguesia: transporting an older person every day quickly becomes the main constraint.' },
        { kind: 'substeps', items: [
          { id: 'carta-social', title: '1. Check Carta Social', content: [
            { kind: 'paragraph', text: 'On cartasocial.pt choose distrito, concelho, freguesia and the resposta social “Centro de Dia”. The cards usually show entidade, morada, telefone, capacidade and sometimes situação da resposta.' }
          ] },
          { id: 'local-network', title: '2. Ask Junta de Freguesia and Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Junta often knows the real waiting lists, transporte and IPSS that accept residents from the area. In small freguesias this is faster than waiting for an email reply.' }
          ] },
          { id: 'social-security', title: '3. Contact Segurança Social', content: [
            { kind: 'paragraph', text: 'If the situation is urgent — the older person is alone, after discharge, or the family cannot cope — request atendimento social at Segurança Social. They can refer you to the rede social local or suggest respostas sociais com acordo de cooperação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Documents and enrolment',
      content: [
        { kind: 'paragraph', text: 'The document pack varies, but an IPSS almost always assesses personal details, health condition, income and family situation. For a foreigner, NIF, address and legal stay are important; a residence permit helps, but a specific centre may accept documents based on a visa, CRUE or another status — check in advance.' },
        { kind: 'checklist', items: [
          'Older person’s document: Cartão de Cidadão, residence permit or passport',
          'NIF of the older person and, often, NIF of the responsible relative',
          'Número de utente SNS and contact details of the Centro de Saúde/family doctor',
          'List of diagnoses, medicines, allergies, dietary restrictions',
          'Relatório médico, if there is dementia, diabetes, disability, falls, incontinence',
          'Proof of address: atestado de residência, rental contract or utilities bill',
          'Comprovativos de rendimentos: pension, IRS, declaração da Segurança Social, bank statements — if required',
          'Contacts of the responsible person and permissions for emergency contact',
          'If necessary: atestado médico de incapacidade multiuso'
        ] },
        { kind: 'paragraph', text: 'After submission, there is usually an entrevista social: they ask who the older person lives with, who collects them in the evening, whether there is an entrance/stairs/lift, whether transporte is needed, whether the person can eat independently, use the toilet, and orient themselves in time and place.' }
      ]
    },
    {
      id: 'price-and-contract',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'In an IPSS with an acordo de cooperação, the price is usually not “fixed like a subscription”, but a mensalidade/comparticipação familiar calculated according to household income and the institution’s rules. In practice, families often see a range of €200–500/month, but with higher income, transporte and additional services, the amount may be higher.' },
        { kind: 'checklist', items: [
          'Ask for the tabela de comparticipações before signing the contract',
          'Check whether fraldas, medicines, hygiene products and podologia are included',
          'Check the transporte price and route radius',
          'Ask whether days of absence, hospitalisation and family holidays are charged',
          'Check the horário: many centres operate roughly 8:00–18:00, Monday–Friday',
          'Check whether they operate on feriados, in August and between Natal/Ano Novo',
          'Ask for the written regulamento interno and contrato de prestação de serviços',
          'Check the aviso prévio period for termination — often 30 days'
        ] },
        { kind: 'warning', text: 'Do not focus only on price. For the older person, distance, stability of transporte, staff, meals, the ability to contact the family quickly and the centre’s willingness to work with specific diagnoses are more important.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'If there is no place or a different level of care is needed',
      content: [
        { kind: 'paragraph', text: 'Waiting lists in good IPSS are normal, especially in Lisboa, Porto, Cascais, Oeiras, Algarve and the suburbs. Join the waiting list at several centres at once and look at alternatives in parallel.' },
        { kind: 'checklist', items: [
          'SAD — Serviço de Apoio Domiciliário: help at home, meals, hygiene, cleaning, medicines',
          'ERPI — Estrutura Residencial para Pessoas Idosas: permanent 24/7 residence',
          'Centro de Convívio — lighter than Centro de Dia: more socialisation, less care',
          'Cuidados Continuados — medical and rehabilitation network after illness/hospitalisation, through SNS',
          'Private carer: flexible, but usually more expensive with a daily schedule',
          'Combination: Centro de Dia during the day + apoio domiciliário in the evening/morning'
        ] },
        { kind: 'paragraph', text: 'If the older person has recently been discharged from hospital, ask the hospital social worker or Centro de Saúde to help with encaminhamento. They have contacts in the rede social local and can understand more quickly which type of resposta social is suitable.' }
      ]
    }
  ],
  costs: [
    { label: 'Centro de Dia in an IPSS, guide price', amountEURMin: 200, amountEURMax: 500, note: 'The mensalidade usually depends on household income and the institution’s rules; transporte and consumables may be separate.' },
    { label: 'Transporte casa-centro-casa', amountEURMin: 0, amountEURMax: 100, note: 'Sometimes included, sometimes paid separately; depends on distance and route.' },
    { label: 'Private Centro de Dia', amountEURMin: 400, amountEURMax: 900, note: 'Market prices vary greatly by region, hours, meals and level of care.' }
  ],
  sources: [
    { title: 'Carta Social — search for respostas sociais, including Centro de Dia', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt/idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — information about instituições particulares de solidariedade social', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
