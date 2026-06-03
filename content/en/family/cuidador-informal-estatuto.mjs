export default {
  editorialVoice: 'hackportugal',
  id: 'cuidador-informal-estatuto',
  categoryId: 'healthcare',
  title: 'Cuidador Informal: informal carer status for caring for parents and relatives',
  tldr: 'Estatuto do Cuidador Informal under Lei 100/2019 is an official status for a person who regularly or permanently cares for a dependent relative in Portugal. It gives a cartão de identificação, a support plan, training, the right to descanso do cuidador and, for a cuidador informal principal, monthly Segurança Social support: in 2026 the reference maximum is 1.1 IAS, i.e. €590.84, and the amount depends on household income. Applying is free via Segurança Social Direta or a balcão.',
  tags: ['carer', 'family', 'segurança-social', 'care'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-status-gives',
      title: 'What Cuidador Informal status gives you',
      content: [
        { kind: 'paragraph', text: 'Cuidador Informal is not an employment contract and not a medical profession. It is recognition by Segurança Social that you are in fact caring for a dependent person: an elderly parent, spouse, relative with a disability or chronic illness.' },
        { kind: 'checklist', items: [
          'Cartão de identificação do cuidador informal — proof of status',
          'Plano de Intervenção Específico: an individual support plan from Segurança Social and SNS',
          'Care training: moving, nutrition, hygiene, medicines, fall prevention',
          'Psychosocial support and consultations',
          'Descanso do cuidador — temporary respite through RNCCI, apoio domiciliário or other social responses, if a place is available',
          'Priority support from Segurança Social and healthcare services',
          'For a cuidador informal principal — the right to request subsídio de apoio ao cuidador informal principal',
          'Information on other benefits: Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa, disability benefits'
        ] },
        { kind: 'warning', text: 'Cuidador informal status does not replace a residence permit, NISS, SNS or the right to work. It is a family-social status within Segurança Social.' }
      ]
    },
    {
      id: 'principal-or-non-principal',
      title: 'Two types: principal and não principal',
      content: [
        { kind: 'paragraph', text: 'When applying, you choose the type of carer. This affects the right to financial support and compatibility with work.' },
        { kind: 'substeps', items: [
          { id: 'principal', title: 'Cuidador informal principal', content: [
            { kind: 'paragraph', text: 'This is a person who lives with the person cared for and provides continuous care. This is usually the status needed by children who have moved in with an elderly parent or brought a parent to live with them.' },
            { kind: 'checklist', items: [
              'Lives with the pessoa cuidada in the same household',
              'Provides care continuously, not occasionally',
              'Does not receive payment for this care',
              'As a rule, does not carry out paid professional activity',
              'May be eligible for subsídio de apoio ao cuidador informal principal if they pass the income assessment'
            ] }
          ] },
          { id: 'non-principal', title: 'Cuidador informal não principal', content: [
            { kind: 'paragraph', text: 'This is a relative who helps regularly but is not the main permanent carer. For example, they come every day after work, coordinate doctors, shopping and medicines.' },
            { kind: 'checklist', items: [
              'May continue working',
              'Is not required to live with the pessoa cuidada',
              'Receives a cartão and access to training/support',
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
        { kind: 'paragraph', text: 'The basic logic is this: the carer must be an adult resident of Portugal, and the person cared for must be someone with confirmed dependency and a need for help from another person.' },
        { kind: 'checklist', items: [
          'The carer usually must be 18+',
          'The carer must have legal residence in Portugal and a NISS',
          'Relationship with the person cared for: spouse, unido de facto, relative or in-law up to the 4th degree',
          'The person cared for lives in Portugal and has a NISS',
          'The person cared for is in a situation of dependency and needs care from a third person',
          'The person cared for receives or may receive a related benefit: for example Complemento por Dependência or Subsídio por Assistência de Terceira Pessoa',
          'There must be consent from the person cared for, if they are capable of giving it; otherwise a representative or the acompanhamento de maior regime applies',
          'For principal, cohabitation and continuous care are required',
          'For financial support, the household income of the cuidador informal principal is assessed'
        ] },
        { kind: 'warning', text: 'If an elderly parent lives in a lar/residência with public funding for full care, the status and especially financial support may be unavailable. Segurança Social looks at the actual care, residence and social responses already being received.' }
      ]
    },
    {
      id: 'money-2026',
      title: 'Money in 2026: subsídio for a cuidador informal principal',
      content: [
        { kind: 'paragraph', text: 'The financial benefit is called subsídio de apoio ao cuidador informal principal. It is not an automatic pension and not a salary. Segurança Social calculates household income and applies limits linked to IAS.' },
        { kind: 'checklist', items: [
          'IAS in 2026: €537.13',
          'The reference (cap) of the benefit is 1.1 IAS: €590.84 in 2026',
          'The needs threshold for principal is usually calculated in relation to 1.3 IAS: €698.27',
          'The subsídio = the difference between the €590.84 reference and the calculated household income, so the amount is individual',
          'The calculation may include salaries, pensions, social benefits, rental income and other regular household income',
          'If income is above the limit, the status may be recognised but the subsídio may not be granted',
          'The benefit is issued to the cuidador informal principal, not to the person cared for',
          'The IBAN must be Portuguese or a SEPA account accepted by Segurança Social',
          'From 2026, the cuidador informal subsídio itself no longer counts as income when assessing other social benefits',
          'If income, address, household composition, hospitalisation or placement in an institution changes, Segurança Social must be notified'
        ] },
        { kind: 'warning', text: 'Do not plan the family budget as if the payment will be exactly €590.84. That is only the upper reference; in practice, the amount depends on Segurança Social’s calculation and may be zero even with recognised status.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply',
      content: [
        { kind: 'paragraph', text: 'You can apply online through Segurança Social Direta or in person at a serviço de atendimento da Segurança Social. For expat families, it is more convenient to gather the documents in advance and check that the NISS is active for both the carer and the person cared for.' },
        { kind: 'substeps', items: [
          { id: 'prepare', title: '1. Prepare the documents', content: [
            { kind: 'checklist', items: [
              'Carer’s identity document: Cartão de Cidadão, residence permit or passport + proof of legal stay',
              'Carer’s NIF and NISS',
              'Identity document, NIF and NISS of the pessoa cuidada',
              'Proof of address and cohabitation, if principal is requested',
              'Medical documents on dependency and the need for care',
              'Documents on Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa or another relevant benefit of the person cared for',
              'Consent of the pessoa cuidada or the representative’s document',
              'Household income details',
              'IBAN for the payment, if you are requesting the subsídio'
            ] }
          ] },
          { id: 'submit', title: '2. Submit the pedido de reconhecimento', content: [
            { kind: 'paragraph', text: 'In Segurança Social Direta, look for the family/disability/Estatuto do Cuidador Informal section. If the online route is unavailable because of foreigner status or a NISS error, book an appointment at a balcão Segurança Social and submit the application there.' }
          ] },
          { id: 'assessment', title: '3. Wait for the assessment', content: [
            { kind: 'paragraph', text: 'The services check the family relationship, residence, dependency, income and benefits already granted. They may request additional documents or contact the Centro de Saúde.' }
          ] },
          { id: 'card-plan', title: '4. Receive the cartão and support plan', content: [
            { kind: 'paragraph', text: 'After recognition, you receive a cartão de identificação do cuidador informal and are connected to the Plano de Intervenção Específico. Ask for the contacts of the responsible técnico, available training and descanso do cuidador options in your município to be provided in writing.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-expat-points',
      title: 'Practical points for expats',
      content: [
        { kind: 'checklist', items: [
          'If you are bringing an elderly parent to Portugal, first settle the immigration basis: visa/residence permit, NIF, NISS, SNS',
          'Without a NISS for the parent, the route to benefits and recognition of dependency is usually blocked',
          'Translate medical discharge summaries into Portuguese, especially diagnoses, medicines, degree of dependency and the need for help from a third person',
          'Ask the médico de família or Centro de Saúde to record functional dependency: walking, nutrition, hygiene, memory, fall risk',
          'Atestado multiuso is useful for disability, but on its own it does not replace the dependency assessment for Segurança Social',
          'If care interferes with work, first compare the options: baixa médica, assistência a familiares, unpaid leave, part-time, and only then rely on principal status',
          'Keep Segurança Social letters, benefit decisions and recibos: they will be needed at review',
          'If you are refused, request the written grounds and prazo for reclamação or recurso hierárquico'
        ] },
        { kind: 'warning', text: 'The main mistake is to submit only the application for Estatuto do Cuidador Informal, but not arrange the basic dependency benefit for the person cared for. For the principal subsídio, Segurança Social almost always checks whether dependency has been recognised through the relevant social mechanisms.' }
      ]
    }
  ],
  costs: [
    { label: 'Application for reconhecimento do Estatuto do Cuidador Informal', amountEUR: 0, note: 'There is no state fee; there may be costs for translations, medical certificates and travel.' },
    { label: 'Indicative maximum monthly support for principal in 2026', amountEURMax: 590.84, note: '1.1 IAS 2026; the actual amount equals the difference from the calculated income and depends on Segurança Social.' },
    { label: '1.3 IAS threshold for the needs assessment in 2026', amountEUR: 698.27, note: 'Used as a key income reference; Segurança Social rules apply.' }
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
