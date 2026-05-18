export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-misericordia-saude',
  categoryId: 'healthcare',
  title: 'Cartão da Misericórdia: Santa Casa charitable clinics',
  tldr: 'Misericórdias are a network of local charitable IPSS institutions: not a replacement for the SNS, but a parallel low-cost route to doctors, dentistry and social support.\n\nIn Lisbon this is Santa Casa da Misericórdia de Lisboa; in other cities, separate Santas Casas. An appointment usually costs around €10–15, while dentistry and tests are charged according to the institution’s price list. A residence permit and número de utente are often not mandatory, but you will almost always be asked for a passport/residence permit, NIF, address and proof of income.',
  tags: ['misericordia', 'sns', 'clinic', 'socialsupport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Misericórdia is and how it can help',
      content: [
        { kind: 'paragraph', text: 'Santa Casa da Misericórdia is not a single public hospital and not an insurer. It is a network of independent charitable IPSS organisations. The best-known is Santa Casa da Misericórdia de Lisboa (SCML). Other municipalities have their own Santas Casas, grouped under União das Misericórdias Portuguesas.' },
        { kind: 'paragraph', text: 'For an expat, this is a practical option when the SNS número de utente has not yet been issued, there is no family doctor, private insurance does not cover the service needed, or income is low. Access depends on the specific institution: some have an outpatient clinic, dentistry and tests, while others only have a care home and social service.' },
        { kind: 'checklist', items: ['General practitioner consultations at a social tariff', 'Dentistry: check-up, hygiene, caries treatment, prosthetics — if the service exists at your Misericórdia', 'Psychology, physiotherapy, nursing procedures — according to the local list', 'Social support: food, clothing, help for older people, referral to a técnico de serviço social', 'Support for families with children and people with disabilities', 'Sometimes — a pharmacy, tests, X-rays or partner prices with external providers'] }
      ]
    },
    {
      id: 'find-local',
      title: 'Find your local Santa Casa by address',
      content: [
        { kind: 'paragraph', text: 'The right approach is not to search for “Cartão da Misericórdia Portugal”, but for the specific organisation by municipality: “Santa Casa da Misericórdia de Lisboa”, “Misericórdia do Porto”, “Santa Casa da Misericórdia de Cascais”, “Misericórdia de Braga”, and so on. Each has its own rules, prices and list of services.' },
        { kind: 'checklist', items: ['Open the União das Misericórdias Portuguesas website and find the Misericórdia by concelho', 'Check the website or Facebook page of the specific Santa Casa: the Saúde, Serviços Clínicos, Clínica Social or Ação Social section', 'Call and ask: “Têm consultas médicas para utentes externos?”', 'Check whether a Cartão de Utente / Cartão da Misericórdia / inscrição social is required', 'Ask the price of a consulta de medicina geral and a primeira consulta', 'Check whether they accept people without a SNS número de utente', 'Ask for the list of documents for an estrangeiro residente em Portugal'] },
        { kind: 'warning', text: 'There is no single national “Cartão da Misericórdia” that automatically works in all clinics. The card or inscrição is usually local: you register with a specific Misericórdia, and the benefits apply there or with its partners.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for registration 🧾',
      content: [
        { kind: 'paragraph', text: 'Misericórdias operate as social institutions, so they often assess not only identity, but also actual residence and household income. For an initial medical consultation, the set of documents may be simpler; for a reduced price, food support or dentistry at a social tariff, more documents are usually required.' },
        { kind: 'checklist', items: ['Passport or residence permit; for EU citizens — cartão de cidadão / ID + CRUE certificate, if available', 'NIF', 'Portuguese address: rental contract, recibo de renda, utility bill or atestado de residência from the Junta de Freguesia', 'Contact telephone number and email', 'SNS número de utente, if you already have one — useful, but often not mandatory', 'NISS, if available; it may be requested for some social programmes', 'Proof of income: recibos de vencimento, IRS, declaração de desemprego, recibos verdes, bank statement — depends on the institution', 'Household composition: children’s documents, marriage certificate/união de facto, if they calculate household income', 'Medical documents: prescriptions, discharge summaries, test results, list of medicines'] },
        { kind: 'warning', text: 'If you do not have a residence permit and número de utente, do not say “I am not entitled to the SNS”. This is incorrect: access to the SNS has separate rules. A Misericórdia may accept you as a private/social patient, but you should apply for a número de utente at the Centro de Saúde in parallel.' }
      ]
    },
    {
      id: 'prices',
      title: 'How much it costs and where the catch is',
      content: [
        { kind: 'paragraph', text: 'Prices are not regulated by one single state tariff.\n\nIn 2026, a typical social appointment with a doctor at a charitable clinic may cost around €10–15, but in Lisbon, Porto and partly subsidised services the price differs. Specialists, dentistry, tests and physiotherapy are almost always paid for separately.' },
        { kind: 'checklist', items: ['Ask the price of a primeira consulta and a consulta de seguimento — they may differ', 'Check whether an annual inscrição or Cartão da Misericórdia is required', 'Check whether a prescription, dressing, certificate or referral is included in the price', 'For dentistry, request an orçamento before treatment', 'Ask whether there is an acordo with Multicare, Médis, AdvanceCare or other insurers', 'Check payment methods: Multibanco, MB WAY, cash, bank card', 'Ask for a recibo/fatura with NIF — it may be useful for IRS as a despesa de saúde', 'Check waiting times: a cheap appointment may not be urgent'] },
        { kind: 'warning', text: 'A Misericórdia is not obliged to accept everyone at the minimum price. Benefits are usually tied to residência na área, income, age, disability, family situation or a referral from a social worker.' }
      ]
    },
    {
      id: 'how-to-use',
      title: 'Practical scenario: if the SNS is not ready yet',
      content: [
        { kind: 'substeps', items: [
          { id: 'call', title: '1. Call your Misericórdia', content: [
            { kind: 'paragraph', text: 'Phrase in Portuguese: “Sou estrangeiro residente em Portugal, ainda não tenho médico de família. Gostaria de saber se posso marcar consulta na clínica social e quais são os documentos necessários.”' }
          ] },
          { id: 'book', title: '2. Book medicina geral', content: [
            { kind: 'paragraph', text: 'For an initial request, it is better to start with a general practitioner. They will assess the situation, issue a prescription, refer you to a specialist or suggest where to do tests more cheaply.' }
          ] },
          { id: 'bring', title: '3. Bring all documents and medicines', content: [
            { kind: 'paragraph', text: 'Take your passport/residence permit, NIF, address, list of medicines and previous diagnoses. If you need a reduced price, bring proof of income straight away — it saves a second visit.' }
          ] },
          { id: 'parallel-sns', title: '4. Apply for SNS in parallel', content: [
            { kind: 'paragraph', text: 'Misericórdia helps cover quick everyday medical needs, but hospitalisation, pregnancy, chronic diseases, vaccination and emergency care should be linked to the SNS. The número de utente remains a key document for life in Portugal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'when-not-enough',
      title: 'When Misericórdia will not replace a doctor or hospital',
      content: [
        { kind: 'paragraph', text: 'For urgent situations, use SNS 24 on 808 24 24 24 or 112 when life is at risk. A charitable clinic is not intended for stroke, heart attack, serious trauma, acute chest pain, severe allergic reaction, pregnancy complications or a psychiatric crisis.' },
        { kind: 'checklist', items: ['112 — emergency help when life is at risk', 'SNS 24 — medical triagem and referral to urgência', 'Centro de Saúde — utente, family doctor, vaccination, chronic prescriptions', 'Hospital público — urgência and hospitalisation', 'Misericórdia — affordable consultation, dentistry, social support, where the service exists locally', 'Private insurance — faster for specialists and diagnostics, but with limits and copagamentos'] }
      ]
    }
  ],
  costs: [
    { label: 'Social doctor’s consultation', amountEURMin: 10, amountEURMax: 15, note: 'Market guideline for charitable/social clinics; the exact tariff is set by the specific Misericórdia.' },
    { label: 'Registration or local Cartão da Misericórdia', amountEURMin: 0, amountEURMax: 20, note: 'Does not exist everywhere; sometimes free, sometimes an annual fee or card charge.' },
    { label: 'Dental check-up', amountEURMin: 15, amountEURMax: 35, note: 'If dentistry exists at the institution; treatment is paid for according to the orçamento.' }
  ],
  sources: [
    { title: 'Santa Casa da Misericórdia de Lisboa — services and social action', url: 'https://www.scml.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'União das Misericórdias Portuguesas — national Misericórdias network', url: 'https://www.umpmisericordias.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contact and guidance for healthcare', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
