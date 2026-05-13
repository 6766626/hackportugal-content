export default {
  editorialVoice: 'hackportugal',
  id: 'passaporte-portugues-pedir',
  categoryId: 'documents_fiscal',
  title: 'Getting a Portuguese passport: IRN, appointments and fees',
  tldr: 'Passaporte Eletrónico Português is issued only to Portuguese citizens: a residence permit, NIF or a long period living in the country do not by themselves grant a right to a passport. In April 2026 the base fee for a standard pedido in Portugal is €65. Express options cost more: around €85 for expresso and higher for urgente/aeroporto. Appointments are made via justiça.gov.pt, IRN, a Loja de Cidadão or by phone. Photo, signature and biometrics are captured on site; adults need a Cartão de Cidadão.',
  tags: ['passport', 'irn', 'documents', 'appointment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Who can actually get a passport 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'A Portuguese passport is a document for a citizen of Portugal. It cannot be obtained on the basis of a residence permit, D7, D8, NIF, buying property or five years of residence automatically. You must first have Portuguese citizenship and be registered in the Portuguese civil registration system.' },
        { kind: 'checklist', items: [
          'You are already a citizen of Portugal by birth, marriage, naturalisation or another ground',
          'Your birth or acquisition of citizenship is registered in the Conservatória / IRN',
          'You have a valid Cartão de Cidadão or, in older cases, a Bilhete de Identidade',
          'The data on your Cartão de Cidadão are up to date: name, date of birth, citizenship, signature',
          'If the passport is for a child, the child must also be a Portuguese citizen',
          'If you have only just received citizenship approval, wait for the assento de nascimento and first obtain a Cartão de Cidadão'
        ] },
        { kind: 'warning', text: 'The new citizenship legislation (Decreto AR 48/XVII) was promulgated by President Seguro on 03.05.2026 and will enter into force after publication in the Diário da República. For a passport, what matters is not the fact of applying for citizenship, but the citizenship registration having been completed.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for IRN or Loja de Cidadão',
      content: [
        { kind: 'paragraph', text: 'In most routine cases you do not need to bring a separate photo: the photo, signature and biometric data are captured right at the counter. Fingerprints are taken under the biometric-passport rules; for very young children the procedure differs.' },
        { kind: 'checklist', items: [
          'A valid Cartão de Cidadão, and have it with you',
          'Your old Passaporte Eletrónico Português if this is a renewal or replacement',
          'Appointment confirmation, if you booked online',
          'Means of payment: card, Multibanco or cash, if the specific balcão accepts it',
          'For a minor: the child must be present',
          'For a minor: the child’s Cartão de Cidadão',
          'For a minor: a parent or legal representative must be present with identification',
          'In case of loss or theft: a statement of loss/theft; sometimes the police must be involved or a declaração required depending on the situation'
        ] },
        { kind: 'warning', text: 'Do not plan to apply for a passport on the same day you have just received your Cartão de Cidadão after naturalisation. The data must appear correctly in IRN systems; it is sometimes safer to wait a few days.' }
      ]
    },
    {
      id: 'where-book',
      title: 'Where to book: agendamento',
      content: [
        { kind: 'paragraph', text: 'In Portugal, passports are issued at balcões do Passaporte Eletrónico Português: IRN offices, certain Lojas de Cidadão, and structures of the Região Autónoma dos Açores and Madeira. Abroad — via consulates. For someone resident in Portugal, the usual route is to book online at justiça.gov.pt or choose the nearest Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Open justiça.gov.pt and find the service Pedir o passaporte eletrónico português',
          'Choose the district and an available IRN / Loja de Cidadão balcão',
          'Check that the appointment is for the passaporte, not for the Cartão de Cidadão',
          'If there are no online slots, try neighbouring concelhos, not only Lisboa or Porto',
          'For urgent needs, check balcões with an expresso / urgente mode',
          'You can call Linha Registos: +351 211 950 500',
          'In big cities, slots often appear in waves in the morning or after cancellations'
        ] },
        { kind: 'paragraph', text: 'On the day of your visit, arrive 10-15 minutes early. The operator will verify your identity, capture your photo, signature and biometrics, print a comprovativo do pedido, and indicate the date/place for collection.' }
      ]
    },
    {
      id: 'fees-and-speed',
      title: 'Fees and timelines in 2026',
      content: [
        { kind: 'paragraph', text: 'The base price of a standard passport requested in Portugal is €65. This is the state fee for a standard pedido. Express modes cost more and depend on the chosen type: expresso, urgente or urgente aeroporto.' },
        { kind: 'checklist', items: [
          'Normal: €65, standard production time',
          'Expresso: around €85, faster than the normal mode',
          'Urgente: more expensive than expresso; check the price at the time of booking and at the balcão',
          'Urgente aeroporto: the most expensive urgent mode, not available everywhere',
          'Delivery to an address, if available and selected, incurs an additional charge',
          'Payment is usually made when submitting the application',
          'Timelines are counted in working days and depend on the time of submission and the collection location'
        ] },
        { kind: 'warning', text: 'Do not buy tickets based on the promised timeline without a buffer. Even with an urgent mode, delays are possible due to technical problems, holidays, errors in Cartão de Cidadão data or the need for additional checks.' }
      ]
    },
    {
      id: 'validity-and-pickup',
      title: 'Validity and collection',
      content: [
        { kind: 'paragraph', text: 'Passaporte Eletrónico Português has a limited validity period. Under the official rules a standard passport is usually valid for 5 years; for very young children the period may be shorter. Before travelling, check the requirements of the destination country: many states require the passport to be valid for at least 6 months after entry.' },
        { kind: 'checklist', items: [
          'Collect the passport at the place indicated on the comprovativo do pedido',
          'Bring your Cartão de Cidadão and the receipt/confirmation of the pedido',
          'The old passport may be cancelled; if it contains valid visas, ask in advance whether it can be left with you in a cancelled state',
          'Check the name, date of birth, passport number and expiry date right at the counter',
          'For a child, collection is usually done by a parent or legal representative',
          'If the passport is not collected in time, ask the balcão how long it is kept before return/archiving'
        ] },
        { kind: 'paragraph', text: 'A Portuguese passport does not replace the Cartão de Cidadão within Portugal. For taxes, SNS, banks, CMD and most internal procedures the main document remains the Cartão de Cidadão.' }
      ]
    }
  ],
  costs: [
    { label: 'Standard pedido Passaporte Eletrónico Português in Portugal', amountEUR: 65, note: 'Base state fee on the verification date; standard production time' },
    { label: 'Pedido expresso', amountEUR: 85, note: 'Accelerated mode; availability and actual timeline depend on the balcão' },
    { label: 'Urgente / aeroporto', amountEURMin: 95, amountEURMax: 100, note: 'For urgent trips; not available everywhere and may require a specific submission mode' }
  ],
  sources: [
    {
      title: 'Official portal Passaporte Eletrónico Português',
      url: 'https://www.passaporte.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Request the Passaporte Eletrónico Português',
      url: 'https://justica.gov.pt/Servicos/Pedir-o-passaporte-eletronico-portugues',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: booking appointments for IRN services',
      url: 'https://justica.gov.pt/Servicos/Agendar-atendimento-nos-servicos-do-IRN',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
