export default {
  editorialVoice: 'hackportugal',
  id: 's1-form-uk-pensioner',
  categoryId: 'healthcare',
  title: 'S1 form for British pensioners: access to the SNS in Portugal',
  tldr: 'S1 is the document under which the UK pays for your public healthcare in Portugal if you receive the UK State Pension or certain exportable benefits. In 2026, you request it from the NHS Business Services Authority, then register it with Segurança Social in Portugal and go to the Centro de Saúde for a número de utente SNS. The form is free; S1 does not cover private clinics or insurance.',
  tags: ['s1', 'sns', 'uk', 'pension'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'Who S1 is for',
      content: [
        { kind: 'paragraph', text: 'S1 is needed by British pensioners and some recipients of UK benefits who live in Portugal and want to use the SNS on the same terms as Portuguese residents. The cost of public treatment is paid by the UK, but care is provided through the Portuguese system.' },
        { kind: 'checklist', items: [
          'You receive the UK State Pension — the most common scenario.',
          'Or you receive certain exportable benefits from the UK that give entitlement to S1.',
          'You are moving to live in Portugal or are already a resident of Portugal.',
          'You are not working in Portugal as empregado/recibos verdes with normal Segurança Social contributions.',
          'You have a legal basis for residence: AIMA residence permit, residence card under the Withdrawal Agreement or another valid status.',
          'S1 may cover some dependants, but NHS BSA checks this individually.',
          'If you have not yet reached UK State Pension age, the fact of having a “private pension” alone is usually not enough.'
        ] },
        { kind: 'warning', text: 'S1 is not a visa, residence permit, NIF or private insurance. It only confirms who pays for your public healthcare after registration in Portugal.' }
      ]
    },
    {
      id: 'request-from-uk',
      title: '1. Request S1 from NHS BSA 🇬🇧',
      content: [
        { kind: 'paragraph', text: 'The form is issued by the NHS Business Services Authority, Overseas Healthcare Services. You must request S1 from the UK, not from the Portuguese SNS. Usually this is done after a decision to move has been made or after arrival, when your address in Portugal is clear.' },
        { kind: 'checklist', items: [
          'Contact NHS Overseas Healthcare Services using the contact details on GOV.UK.',
          'Prepare your National Insurance number.',
          'State your moving date or the date you started living in Portugal.',
          'Provide your Portuguese address if you already have one.',
          'Provide the details of your spouse/partner and dependants if you want to check their entitlement to cover.',
          'Check that the name on the S1 matches your passport and Portuguese documents.',
          'Keep the original S1 and make scans: Segurança Social often keeps or stamps copies.'
        ] },
        { kind: 'paragraph', text: 'Timings depend on NHS BSA and the post. In practice, allow several weeks, especially if dependants or an address need to be checked.' }
      ]
    },
    {
      id: 'register-social-security',
      title: '2. Register S1 with Segurança Social 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'After receiving S1, you need to register it with the Instituto da Segurança Social in Portugal. Without this registration, the Centro de Saúde may refuse full SNS registration as an S1-holder.' },
        { kind: 'checklist', items: [
          'Book an appointment or go to the serviço de atendimento da Segurança Social for your place of residence.',
          'Take the original S1 and a copy.',
          'UK passport.',
          'Residence document: AIMA residence permit, cartão de residência under the Withdrawal Agreement or another valid document.',
          'NIF.',
          'Proof of address: rental contract, utility bill or atestado de residência from the Junta de Freguesia.',
          'If you have a spouse/dependants — their documents and separate S1 forms, if NHS BSA issued them separately.',
          'Ask for confirmation of S1 registration or a stamped copy for the Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Do not confuse S1 registration with ordinary Segurança Social contributions. An S1 pensioner usually does not pay Portuguese social security contributions merely because of access to the SNS. But if you start working in Portugal, the cover rules may change.' }
      ]
    },
    {
      id: 'get-utente',
      title: '3. Get a número de utente at the Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'After Segurança Social, go to the Centro de Saúde for your residential address. They register you with the SNS and assign a número de utente — your SNS patient number.' },
        { kind: 'checklist', items: [
          'Confirmation of S1 registration with Segurança Social.',
          'Passport.',
          'Residence permit/resident card.',
          'NIF.',
          'Proof of address in the Centro de Saúde area.',
          'Contact details: Portuguese phone number and email.',
          'List of current medicines and diagnoses — useful for the first appointment.',
          'If you have an NHS medical summary, take a printout or PDF in English.'
        ] },
        { kind: 'paragraph', text: 'After registration, you use the SNS like a local resident: family doctor where places are available, referrals to specialists, prescriptions, tests, hospitalisation. Waiting times and availability depend on the area; Lisbon, Cascais, Algarve and Porto are often overloaded.' }
      ]
    },
    {
      id: 'what-covered',
      title: 'What S1 does and does not cover',
      content: [
        { kind: 'checklist', items: [
          'It covers treatment in the SNS: Centro de Saúde, public hospitals, referrals, part of prescription medicines.',
          'It gives access on the same terms as residents of Portugal, not “British private healthcare”.',
          'It does not cover private clinics unless they work under an agreement with the SNS for a specific referral.',
          'It does not replace travel insurance for trips, repatriation, flight cancellations and private medicine.',
          'It does not mean automatic allocation of a family doctor — in some areas there is a waiting list.',
          'It does not automatically cover care in a nursing home, domestic help or long-term care.',
          'For travel outside Portugal, check entitlement to a UK-issued GHIC/EHIC through NHS BSA.',
          'When moving from Portugal to another country, you need to check S1 and registration again.'
        ] },
        { kind: 'paragraph', text: 'In the SNS, most ordinary user charges have been abolished, but in specific cases, for example urgência without a referral from SNS 24/INEM/family doctor, taxas moderadoras may apply. Medicine subsidies depend on the medicine and the comparticipação regime.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems and how to solve them',
      content: [
        { kind: 'checklist', items: [
          'The Centro de Saúde asks for “NISS”: explain that you are registering as an S1-holder and show the Segurança Social confirmation.',
          'S1 has not arrived yet: temporarily use private insurance or paid access; emergency care through 112/SNS remains available.',
          'Your address has changed: update your address with Finanças, Segurança Social and the Centro de Saúde.',
          'Your spouse is below pension age: do not assume automatic cover — check with NHS BSA.',
          'You have started working in Portugal: inform NHS BSA and Segurança Social, because the country responsible for healthcare cover may change.',
          'There is no family doctor at the Centro de Saúde: ask for inscrição sem médico de família and use SNS 24 for triagem and referrals.',
          'Documents in English: S1 is usually accepted without translation, but locally they may ask for copies and proof of address in Portuguese.'
        ] },
        { kind: 'warning', text: 'Do not postpone S1 until a serious illness. Registration with Segurança Social and the SNS can take time, and private medicine in Portugal quickly becomes expensive in the case of hospitalisation or chronic treatment.' }
      ]
    }
  ],
  costs: [
    { label: 'Issue of the S1 form by NHS BSA', amountEUR: 0, note: 'Free; only call/postage costs may apply.' },
    { label: 'S1 registration with Segurança Social', amountEUR: 0, note: 'State registration is free.' },
    { label: 'Registration of número de utente in the SNS', amountEUR: 0, note: 'Free at the Centro de Saúde.' },
    { label: 'Private insurance for the waiting period', amountEURMin: 30, amountEURMax: 150, note: 'Monthly indication for an older person; it depends heavily on age, excess and exclusions.' }
  ],
  sources: [
    {
      title: 'GOV.UK: Healthcare in Portugal, including Madeira',
      url: 'https://www.gov.uk/guidance/healthcare-in-portugal-including-madeira',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'NHS Business Services Authority: Overseas Healthcare Services',
      url: 'https://www.nhsbsa.nhs.uk/contact-us/overseas-healthcare-services-contact-us',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: registration and access to the Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Blevins Franks: The S1 form for healthcare in Portugal',
      url: 'https://www.blevinsfranks.com/the-s1-form/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
