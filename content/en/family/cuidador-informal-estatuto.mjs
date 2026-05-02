export default {
  editorialVoice: 'hackportugal',
  id: 'cuidador-informal-estatuto',
  categoryId: 'healthcare',
  title: 'Cuidador Informal: informal carer status for caring for parents and relatives',
  tldr: 'Estatuto do Cuidador Informal under Lei 100/2019 is an official status for a person who regularly or permanently cares for a dependent relative in Portugal. It gives a cartão de identificação, a support plan, training, the right to descanso do cuidador and, for a cuidador informal principal, monthly Segurança Social support: in 2026 the maximum is usually capped at IAS €537.13 and depends on household income. Applying is free via Segurança Social Direta or at a balcão.',
  tags: ['carer', 'family', 'segurança-social', 'care'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-status-gives',
      title: 'What Cuidador Informal status gives you',
      content: [
        { kind: 'paragraph', text: 'Cuidador Informal is not an employment contract and not a medical profession. It is Segurança Social recognition that you are in practice caring for a person with dependency: an elderly parent, spouse, relative with a disability or chronic illness.' },
        { kind: 'checklist', items: [
          'Cartão de identificação do cuidador informal — confirmation of the status',
          'Plano de Intervenção Específico: an individual support plan from Segurança Social and SNS',
          'Care training: moving, nutrition, hygiene, medicines, fall prevention',
          'Psychosocial support and advice',
          'Descanso do cuidador — temporary respite through RNCCI, apoio domiciliário or other social responses, if a place is available',
          'Priority follow-up by Segurança Social and healthcare services',
          'For a cuidador informal principal — the right to request subsídio de apoio ao cuidador informal principal',
          'Information about other benefits: Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa, disability benefits'
        ] },
        { kind: 'warning', text: 'Cuidador informal status does not replace a residence permit, NISS, SNS or the right to work. It is a family and social status within Segurança Social.' }
      ]
    },
    {
      id: 'principal-or-non-principal',
      title: 'Two types: principal and não principal',
      content: [
        { kind: 'paragraph', text: 'When applying, you choose the type of carer. This determines entitlement to financial support and compatibility with work.' },
        { kind: 'substeps', items: [
          { id: 'principal', title: 'Cuidador informal principal', content: [
            { kind: 'paragraph', text: 'This is a person who lives with the cared-for person and provides permanent care. This is usually the status needed by children who have moved in with an elderly parent or have brought the parent to live with them.' },
            { kind: 'checklist', items: [
              'Lives with the pessoa cuidada in the same household',
              'Provides care permanently, not occasionally',
              'Does not receive payment for this care',
              'As a rule, does not carry out paid professional activity',
              'May be eligible for subsídio de apoio ao cuidador informal principal if they pass the income assessment'
            ] }
          ] },
          { id: 'non-principal', title: 'Cuidador informal não principal', content: [
            { kind: 'paragraph', text: 'This is a relative who helps regularly but is not the main permanent carer. For example, they come every day after work, coordinate doctors, shopping and medicines.' },
            { kind: 'checklist', items: [
              'Can continue working',
              'Is not required to live with the pessoa cuidada',
              'Receives the cartão and access to training/follow-up',
              'Usually has no right to the monthly subsídio for principal',
              'Suitable if care is shared between several relatives'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can obtain recognition',
      content: [
        { kind: 'paragraph', text: 'The basic logic is as follows: the carer must be an adult resident of Portugal, and the cared-for person must be someone with confirmed dependency and a need for help from another person.' },
        { kind: 'checklist', items: [
          'The carer must usually be 18+',
          'The carer must have lawful residence in Portugal and NISS',
          'Relationship with the cared-for person: spouse, unido de facto, relative or in-law up to the 4th degree',
          'The cared-for person lives in Portugal and has NISS',
          'The cared-for person is in a situation of dependency and needs care from a third person',
          'The cared-for person receives or may receive a related benefit: for example Complemento por Dependência or Subsídio por Assistência de Terceira Pessoa',
          'There must be consent from the cared-for person, if they are able to give it; otherwise a representative or the acompanhamento de maior regime applies',
          'For principal, cohabitation and permanent care are required',
          'For financial support, the household income of the cuidador informal principal is assessed'
        ] },
        { kind: 'warning', text: 'If an elderly parent lives in a lar/residência with state-funded full care, the status and especially financial support may be unavailable. Segurança Social looks at actual care, residence and social responses already being received.' }
      ]
    },
    {
      id: 'money-2026',
      title: 'Money in 2026: subsídio for cuidador informal principal',
      content: [
        { kind: 'paragraph', text: 'The cash benefit is called subsídio de apoio ao cuidador informal principal. It is not an automatic pension and not a salary. Segurança Social calculates household income and applies limits linked to the IAS.' },
        { kind: 'checklist', items: [
          'IAS in 2026: €537.13',
          'The needs threshold for principal is usually calculated relative to 1.3 IAS: €698.27',
          'The maximum monthly support should not be treated as guaranteed: the amount is individual',
          'The calculation may include salaries, pensions, social benefits, rental income and other regular household income',
          'If income is above the limit, the status may be recognised but no subsídio awarded',
          'The benefit is issued to the cuidador informal principal, not to the cared-for person',
          'The IBAN must be Portuguese or a SEPA account accepted by Segurança Social',
          'If income, address, household composition, hospitalisation or placement in an institution changes, you must notify Segurança Social'
        ] },
        { kind: 'warning', text: 'Do not plan the family budget as if the payment will be exactly €537.13. In practice, the amount depends on Segurança Social calculation and may be zero even with recognised status.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply',
      content: [
        { kind: 'paragraph', text: 'You can apply online through Segurança Social Direta or in person at a serviço de atendimento da Segurança Social. For expat families, it is more convenient to gather the documents in advance and check that the NISS is active for both the carer and the cared-for person.' },
        { kind: 'substeps', items: [
          { id: 'prepare', title: '1. Prepare the documents', content: [
            { kind: 'checklist', items: [
              'Carer identity document: Cartão de Cidadão, residence permit or passport + proof of lawful stay',
              'NIF and NISS of the carer',
              'Identity document, NIF and NISS of the pessoa cuidada',
              'Proof of address and cohabitation, if principal is being requested',
              'Medical documents about dependency and the need for care',
              'Documents about Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa or another relevant benefit of the cared-for person',
              'Consent of the pessoa cuidada or representative document',
              'Household income details',
              'IBAN for payment, if you are requesting subsídio'
            ] }
          ] },
          { id: 'submit', title: '2. Submit the pedido de reconhecimento', content: [
            { kind: 'paragraph', text: 'In Segurança Social Direta, look for the family/disability/Estatuto do Cuidador Informal section. If the online route is unavailable because of foreigner status or a NISS error, book an appointment at a balcão Segurança Social and submit the application there.' }
          ] },
          { id: 'assessment', title: '3. Wait for the assessment', content: [
            { kind: 'paragraph', text: 'The services check the family relationship, residence, dependency, income and benefits already awarded. They may request additional documents or contact the Centro de Saúde.' }
          ] },
          { id: 'card-plan', title: '4. Receive the cartão and support plan', content: [
            { kind: 'paragraph', text: 'After recognition, you receive a cartão de identificação do cuidador informal and are connected to the Plano de Intervenção Específico. Ask for the contact details of the responsible técnico, available training and descanso do cuidador options in your município to be provided in writing.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-expat-points',
      title: 'Practical points for expats',
      content: [
        { kind: 'checklist', items: [
          'If you are bringing an elderly parent to Portugal, first resolve the immigration basis: visa/residence permit, NIF, NISS, SNS',
          'Without the parent having NISS, the route to benefits and recognition of dependency is usually blocked',
          'Translate medical reports into Portuguese, especially diagnoses, medicines, degree of dependency and the need for help from a third person',
          'Ask the médico de família or Centro de Saúde to record functional dependency: walking, nutrition, hygiene, memory, risk of falls',
          'Atestado multiuso is useful in cases of disability, but by itself it does not replace the dependency assessment for Segurança Social',
          'If care interferes with work, first compare the options: baixa médica, assistência a familiares, unpaid leave, part-time, and only then rely on principal status',
          'Keep Segurança Social letters, benefit decisions and recibos: they will be needed at reassessment',
          'If you are refused, request the written grounds and the prazo for reclamação or recurso hierárquico'
        ] },
        { kind: 'warning', text: 'The main mistake is submitting only the application for Estatuto do Cuidador Informal, but not arranging the basic dependency benefit for the cared-for person. For the principal subsídio, Segurança Social almost always checks whether dependency has been recognised through the relevant social mechanisms.' }
      ]
    }
  ],
  costs: [
    { label: 'Application for reconhecimento do Estatuto do Cuidador Informal', amountEUR: 0, note: 'There is no state fee; there may be costs for translations, medical certificates and travel.' },
    { label: 'Indicative maximum monthly principal support in 2026', amountEURMax: 537.13, note: 'Linked to IAS 2026; the actual amount depends on income and Segurança Social calculation.' },
    { label: '1.3 IAS threshold for the needs assessment in 2026', amountEUR: 698.27, note: 'Used as a key income benchmark; Segurança Social rules apply.' }
  ],
  sources: [
    {
      title: 'Segurança Social: recognition of Estatuto do Cuidador Informal',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/familia/deficiencia-incapacidade/reconhecimento-estatuto-cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Cuidador Informal guide',
      url: 'https://www.gov.pt/guias/cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 100/2019 — Estatuto do Cuidador Informal',
      url: 'https://dre.pt/dre/detalhe/lei/100-2019-124500714',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
