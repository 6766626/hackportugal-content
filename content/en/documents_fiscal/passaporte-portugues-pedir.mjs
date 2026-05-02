export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Getting a Portuguese passport: IRN, agendamento and fees',
  tldr: 'The Passaporte Eletrónico Português is issued only to Portuguese citizens: a residence permit, NIF or many years living in the country do not in themselves give you the right to a passport. In April 2026, the basic fee for a standard pedido in Portugal is €65. Fast-track options cost more: around €85 for expresso and more for urgente/aeroporto. Booking is done via justiça.gov.pt, IRN, Loja de Cidadão or by phone. The photo, signature and biometrics are taken on site; adults need a Cartão de Cidadão.',
  tags: ['passport', 'irn', 'documents', 'booking'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Who can actually get a passport 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'A Portuguese passport is a document for a Portuguese citizen. You cannot obtain it automatically through a residence permit, D7, D8, NIF, buying property or 5 years of residence. You must first have Portuguese citizenship and registration in the Portuguese civil status system.' },
        { kind: 'checklist', items: [
          'You are already a Portuguese citizen by birth, marriage, naturalisation or another basis',
          'Your birth or acquisition of citizenship is registered with a Conservatória / IRN',
          'You have a valid Cartão de Cidadão or, in older cases, a Bilhete de Identidade',
          'The details on your Cartão de Cidadão are up to date: name, date of birth, citizenship, signature',
          'If the passport is needed for a child, the child must also be a Portuguese citizen',
          'If you have only just received citizenship approval, wait for the assento de nascimento and apply for the Cartão de Cidadão first'
        ] },
        { kind: 'warning', text: 'The new citizenship legislation approved on 01.04.2026 is not yet a promulgated law in force as of the verification date. For a passport, what matters is not the fact that you have applied for citizenship, but that citizenship registration has already been completed.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for IRN or Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'In most standard cases, you do not need to bring a separate photograph: the photo, signature and biometric data are taken directly at the counter. Fingerprints are taken under the rules for biometric passports; the procedure is different for small children.' },
        { kind: 'checklist', items: [
          'A valid Cartão de Cidadão physically with you',
          'Your old Passaporte Eletrónico Português, if this is a renewal or replacement',
          'Confirmation of the agendamento, if you booked online',
          'A payment method: card, Multibanco or cash, if that specific balcão accepts it',
          'For a minor: the child must be present',
          'For a minor: the child’s Cartão de Cidadão',
          'For a minor: the presence of a parent or legal representative with an identity document',
          'If the passport has been lost or stolen: a loss/theft statement; sometimes police involvement or a declaração is required depending on the situation'
        ] },
        { kind: 'warning', text: 'Do not plan to apply for a passport on the same day that you have only just received your Cartão de Cidadão after naturalisation. The data must appear correctly in the IRN systems; it is sometimes safer to wait a few days.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Where to book: agendamento',
      content: [
        { kind: 'paragraph', text: 'In Portugal, passports are issued at balcões do Passaporte Eletrónico Português: IRN offices, some Lojas de Cidadão, and the structures of the Região Autónoma dos Açores and Madeira. Abroad, this is done through consulates. For a resident of Portugal, the most usual route is to book online on justiça.gov.pt or choose the nearest Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Open justiça.gov.pt and find the service Pedir o passaporte eletrónico português',
          'Choose the district and an available balcão IRN / Loja de Cidadão',
          'Check that the appointment is specifically for passaporte, not for Cartão de Cidadão',
          'If there are no online slots, try neighbouring concelhos, not only Lisboa or Porto',
          'For urgent cases, check balcões with expresso / urgente service',
          'You can call Linha Registos: +351 211 950 500',
          'In large cities, slots often appear in waves in the morning or after cancellations'
        ] },
        { kind: 'paragraph', text: 'On the day of the visit, arrive 10-15 minutes early. The officer will check your identity, take your photo, signature and biometrics, print the pedido confirmation and indicate the date/place for collection.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Fees and timings in 2026',
      content: [
        { kind: 'paragraph', text: 'The basic price of a standard passport requested in Portugal is €65. This is the state fee for a standard pedido. Fast-track options cost more and depend on the type chosen: expresso, urgente or urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: €65, standard production time',
          'Expresso: around €85, faster than the normal option',
          'Urgente: more expensive than expresso; check the price at the time of booking and with the balcão',
          'Urgente aeroporto: the most expensive urgent option, not available everywhere',
          'Delivery to an address, if available and selected, is paid separately',
          'Payment is usually made when submitting the application',
          'Timings are counted in working days and depend on the time of submission and the place of collection'
        ] },
        { kind: 'warning', text: 'Do not buy tickets based on a promised timeframe without a buffer. Even with an urgent option, delays are possible due to technical problems, public holidays, errors in Cartão de Cidadão data or the need for additional checks.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validity and collection',
      content: [
        { kind: 'paragraph', text: 'The Passaporte Eletrónico Português has a limited validity period. Under the official rules, a standard passport is usually valid for 5 years; for very young children, the validity may be shorter. Before travelling, check the requirements of the destination country: many states require the passport to remain valid for at least 6 months after entry.' },
        { kind: 'checklist', items: [
          'You must collect the passport where indicated on the comprovativo do pedido',
          'Take your Cartão de Cidadão and the receipt/pedido confirmation',
          'The old passport may be cancelled; if it contains valid visas, ask in advance whether you can keep it after cancellation',
          'Check the name, date of birth, passport number and expiry date directly at the counter',
          'For a child, collection is usually done by a parent or legal representative',
          'If the passport is not collected on time, check with the balcão how long it is kept before return/archiving'
        ] },
        { kind: 'paragraph', text: 'A Portuguese passport does not replace the Cartão de Cidadão within Portugal. For tax, SNS, banks, CMD and most internal procedures, the main document remains the Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard pedido for a Passaporte Eletrónico Português in Portugal', amountEUR: 65, note: 'Basic state fee as of the verification date; standard production time' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Fast-track option; availability and actual timing depend on the balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'For urgent travel; not available in all locations and may require a separate submission option' }
  ],
  sources: [
    {
      title: 'Official Passaporte Eletrónico Português portal',
      url: 'https://www.passaporte.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Pedir o passaporte eletrónico português',
      url: 'https://justica.gov.pt/Servicos/Pedir-o-passaporte-eletronico-portugues',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: agendamento de serviços do IRN',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
