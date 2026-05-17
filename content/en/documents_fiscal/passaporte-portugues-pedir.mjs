export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Getting a Portuguese passport: IRN, agendamento and fees',
  tldr: 'The Passaporte Eletrónico Português is issued only to Portuguese citizens: a residence permit, NIF or many years living in the country do not in themselves give you the right to a passport. In April 2026, the basic fee for a normal pedido in Portugal is €65. Urgent options cost more: around €85 for expresso and higher for urgente/aeroporto. Appointments are made via justiça.gov.pt, IRN, Loja de Cidadão or by phone. The photo, signature and biometrics are taken on site; adults need a Cartão de Cidadão.',
  tags: ['passport', 'irn', 'documents', 'appointment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Who can actually get a passport 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'A Portuguese passport is a document for a Portuguese citizen. You cannot obtain it on the basis of a residence permit, D7, D8, NIF, buying property or 5 years of residence automatically. First, you must have Portuguese citizenship and be registered in the Portuguese civil registry system.' },
        { kind: 'checklist', items: [
          'You are already a Portuguese citizen by birth, marriage, naturalisation or another legal basis',
          'Your birth or acquisition of citizenship is registered with the Conservatória / IRN',
          'You have a valid Cartão de Cidadão or, in older cases, a Bilhete de Identidade',
          'The details on the Cartão de Cidadão are up to date: name, date of birth, citizenship, signature',
          'If the passport is for a child, the child must also be a Portuguese citizen',
          'If you have only just received approval for citizenship, wait for the assento de nascimento and first apply for the Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'The new citizenship legislation (Decreto AR 48/XVII) was promulgated by President Seguro on 03/05/2026 and will enter into force after publication in the Diário da República. For a passport, what matters is not the fact that you have applied for citizenship, but that the citizenship registration has already been completed.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for IRN or Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'In most standard cases you do not need to bring a separate photograph: the photo, signature and biometric data are taken directly at the counter. Fingerprints are taken under biometric passport rules; the procedure is different for small children.' },
        { kind: 'checklist', items: [
          'Valid Cartão de Cidadão physically with you',
          'Old Passaporte Eletrónico Português, if this is a renewal or replacement',
          'Proof of agendamento, if you booked online',
          'Payment method: card, Multibanco or cash, if the specific balcão accepts it',
          'For a minor: the child must be present',
          'For a minor: the child’s Cartão de Cidadão',
          'For a minor: presence of a parent or legal representative with an identity document',
          'If the passport has been lost or stolen: a loss/theft statement; in some cases police involvement or a declaração may be required depending on the situation'
        ] },
        { kind: 'warning', text: 'Do not plan to apply for a passport on the same day you have just received your Cartão de Cidadão after naturalisation. The data must be displayed correctly in IRN systems; sometimes it is safer to wait a few days.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Where to book: agendamento',
      content: [
        { kind: 'paragraph', text: 'In Portugal, passports are issued at balcões do Passaporte Eletrónico Português: IRN branches, some Lojas de Cidadão, and offices in the Região Autónoma dos Açores and Madeira. Abroad, this is done through consulates. For a resident of Portugal, the usual route is to book online on justiça.gov.pt or choose the nearest Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Open justiça.gov.pt and find the service Pedir o passaporte eletrónico português',
          'Choose the district and an available balcão IRN / Loja de Cidadão',
          'Check that the appointment is specifically for passaporte, not for Cartão de Cidadão',
          'If there are no online slots, try neighbouring concelhos, not only Lisboa or Porto',
          'For urgent cases, check balcões with expresso / urgente options',
          'You can call Linha Registos: +351 211 950 500',
          'In large cities, slots often appear in waves in the morning or after cancellations'
        ] },
        { kind: 'paragraph', text: 'On the day of your visit, arrive 10-15 minutes early. The officer will verify your identity, take your photo, signature and biometrics, print the pedido confirmation and indicate the date/place for collection.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Fees and timings in 2026',
      content: [
        { kind: 'paragraph', text: 'The basic price for a standard passport requested in Portugal is €65. This is the state fee for a standard pedido. Urgent options cost more and depend on the type selected: expresso, urgente or urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: €65, standard production time',
          'Expresso: around €85, faster than the standard option',
          'Urgente: more expensive than expresso; check the price at the time of booking and with the balcão',
          'Urgente aeroporto: the most expensive urgent option, not available everywhere',
          'Delivery to an address, if available and selected, is paid separately',
          'Payment is usually made when submitting the application',
          'Timings are counted in working days and depend on the time of submission and place of collection'
        ] },
        { kind: 'warning', text: 'Do not buy tickets based on a promised timeframe without allowing a buffer. Even with an urgent option, delays are possible due to technical problems, public holidays, errors in Cartão de Cidadão data or the need for additional checks.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validity and collection',
      content: [
        { kind: 'paragraph', text: 'The Passaporte Eletrónico Português has a limited validity period. Under the official rules, a standard passport is usually valid for 5 years; for very young children the period may be shorter. Before travelling, check the requirements of the destination country: many states require the passport to be valid for at least another 6 months after entry.' },
        { kind: 'checklist', items: [
          'You must collect the passport where indicated on the comprovativo do pedido',
          'Take your Cartão de Cidadão and the receipt/pedido confirmation',
          'The old passport may be cancelled; if it contains valid visas, ask in advance whether you can keep it in cancelled form',
          'Check the name, date of birth, passport number and validity period directly at the counter',
          'For a child, collection is usually done by a parent or legal representative',
          'If the passport is not collected on time, ask the balcão how long it is kept before return/archiving'
        ] },
        { kind: 'paragraph', text: 'A Portuguese passport does not replace the Cartão de Cidadão inside Portugal. For taxes, SNS, banking, CMD and most internal procedures, the main document remains the Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard pedido for a Passaporte Eletrónico Português in Portugal', amountEUR: 65, note: 'Basic state fee on the verification date; standard production time' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Fast-track option; availability and actual timeframe depend on the balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'For urgent trips; not available in all locations and may require a separate application mode' }
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
      title: 'Justiça.gov.pt: agendamento for IRN services',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
