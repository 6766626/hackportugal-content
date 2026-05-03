export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Getting a Portuguese passport: IRN, agendamento and fees',
  tldr: 'Passaporte Eletrónico Português is issued only to citizens of Portugal: a residence permit, NIF or long residence in the country do not by themselves grant a right to a passport. In April 2026 the base fee for a standard pedido in Portugal is €65. Urgent modes cost more: a reference point is €85 for expresso and higher for urgente/aeroporto. Booking is done via justiça.gov.pt, IRN, Loja de Cidadão or by phone. Photo, signature and biometrics are captured on site; adults need a Cartão de Cidadão.',
  tags: ['passport', 'irn', 'documents', 'appointment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Who can actually get a passport 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'A Portuguese passport is a document of a citizen of Portugal. It cannot be obtained on the basis of a residence permit, D7, D8, NIF, buying property or 5 years of residence automatically. First, there must be Portuguese citizenship and registration in the Portuguese civil registration system.' },
        { kind: 'checklist', items: [
          'You are already a citizen of Portugal by birth, marriage, naturalisation or another ground',
          'Your birth or acquisition of citizenship is registered in the Conservatória / IRN',
          'You have a valid Cartão de Cidadão or, in older cases, a Bilhete de Identidade',
          'The data on the Cartão de Cidadão are up to date: name, date of birth, nationality, signature',
          'If the passport is needed for a child, the child must also be a Portuguese citizen',
          'If you have only just received citizenship approval, wait for the assento de nascimento and first obtain a Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'The new nationality legislation, approved on 01.04.2026, at the date of verification is not yet a promulgated law in force. For a passport, what matters is not the fact of applying for nationality but the citizenship having already been registered.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for IRN or Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'In most standard cases there is no need to bring a separate photograph: photo, signature and biometric data are captured right at the counter. Fingerprints are taken according to biometric passport rules; for very young children the procedure is different.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão valid and physically with you',
          'Old Passaporte Eletrónico Português, if this is a renewal or replacement',
          'Appointment confirmation (agendamento), if you booked online',
          'Means of payment: card, Multibanco or cash, if the specific balcão accepts it',
          'For a minor: presence of the child',
          'For a minor: Cartão de Cidadão of the child',
          'For a minor: presence of a parent or legal representative with an identification document',
          'In case of loss or theft of the passport: a statement of loss/theft; sometimes police involvement or a declaração may be required depending on the situation'
        ] },
        { kind: 'warning', text: 'Do not plan to apply for a passport on the same day you have just received your Cartão de Cidadão after naturalisation. The data must be correctly visible in IRN systems; sometimes it is safer to wait a few days.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Where to book: agendamento',
      content: [
        { kind: 'paragraph', text: 'In Portugal the passport is processed at balcões do Passaporte Eletrónico Português: IRN branches, certain Lojas de Cidadão, and structures of the Região Autónoma dos Açores and Madeira. Abroad — through consulates. For a resident of Portugal the most common route is to book online on justiça.gov.pt or choose the nearest Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Open justiça.gov.pt and find the service Pedir o passaporte eletrónico português',
          'Choose the district and an available balcão IRN / Loja de Cidadão',
          'Check that the booking is for passaporte, not for Cartão de Cidadão',
          'If there are no online slots, try neighbouring concelhos, not only Lisboa or Porto',
          'For urgent cases check balcões with expresso / urgente modes',
          'You can call Linha Registos: +351 211 950 500',
          'In big cities, slots often appear in waves in the morning or after cancellations'
        ] },
        { kind: 'paragraph', text: 'On the day of the visit, arrive 10-15 minutes early. The operator will verify identity, capture the photo, signature and biometrics, print the pedido confirmation and indicate the date/place of collection.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Fees and times in 2026',
      content: [
        { kind: 'paragraph', text: 'The base price of a standard passport requested in Portugal is €65. This is the state fee for the standard pedido. Urgent modes cost more and depend on the type chosen: expresso, urgente or urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: €65, standard production time',
          'Expresso: around €85, faster than the standard mode',
          'Urgente: more expensive than expresso; check the price at the time of booking and at the balcão',
          'Urgente aeroporto: the most expensive urgent mode, not available everywhere',
          'Delivery to an address, if available and chosen, is paid additionally',
          'Payment is usually made when submitting the application',
          'Timeframes are counted in working days and depend on the time of submission and the place of collection'
        ] },
        { kind: 'warning', text: 'Do not buy tickets based on the promised timeframe without a buffer. Even with an urgent mode, delays are possible due to technical problems, holidays, errors in Cartão de Cidadão data or the need for additional checks.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validity and collection',
      content: [
        { kind: 'paragraph', text: 'Passaporte Eletrónico Português has a limited validity period. Under the official rules a standard passport is usually valid for 5 years; for very young children the term may be shorter. Before travelling, check the requirements of the destination country: many states require the passport to be valid for at least 6 months after entry.' },
        { kind: 'checklist', items: [
          'You must collect the passport at the place indicated on the comprovativo do pedido',
          'Take your Cartão de Cidadão and the receipt/confirmation of the pedido',
          'The old passport may be cancelled; if it contains valid visas, ask in advance whether it can be returned to you cancelled',
          'Check the name, date of birth, passport number and validity period right at the counter',
          'For a child, collection is usually done by a parent or legal representative',
          'If the passport is not collected in time, ask the balcão how long it is kept before return/archiving'
        ] },
        { kind: 'paragraph', text: 'A Portuguese passport does not replace the Cartão de Cidadão within Portugal. For taxes, SNS, banking, CMD and most domestic procedures the main document remains the Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard application for Passaporte Eletrónico Português in Portugal', amountEUR: 65, note: 'Base state fee at the date of verification; standard production timeframe' },
    { label: 'Expresso application', amountEUR: 85, note: 'Accelerated mode; availability and actual timeframe depend on the balcão' },
    { label: 'Urgent / airport', amountEURMin: 95, amountEURMax: 100, note: 'For urgent trips; not available everywhere and may require a specific submission mode' }
  ],
  sources: [
    {
      title: 'Official portal: Passaporte Eletrónico Português',
      url: 'https://www.passaporte.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Request the Portuguese electronic passport',
      url: 'https://justica.gov.pt/Servicos/Pedir-o-passaporte-eletronico-portugues',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Book an appointment for IRN services',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
