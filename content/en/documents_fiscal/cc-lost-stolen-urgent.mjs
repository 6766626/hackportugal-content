export default {
  editorialVoice: 'hackportugal',
  id: 'cc-lost-stolen-urgent',
  categoryId: 'documents_fiscal',
  title: 'Lost or stolen Cartão de Cidadão: urgent replacement',
  tldr: 'If the Cartão de Cidadão is lost or stolen, first cancel the card and certificates: online, by phone on +351 210 990 111, or in person at IRN. In case of theft, make an auto de notícia/participação with PSP or GNR and bring it for the replacement. An urgent CC in 2026 costs €30 / €33 and is usually ready faster than the standard process; extremo urgente is €50 / €53, with collection at limited balcões, often on the same day or within 24 hours. If you do not have a passport, take any documents and, if necessary, witnesses.',
  tags: ['cc', 'irn', 'documents', 'psp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'Who needs this and what counts as an urgent replacement',
      content: [
        { kind: 'paragraph', text: 'Cartão de Cidadão is the identity document for Portuguese citizens. A foreign AIMA residence permit is not replaced through this procedure. This guide is relevant for naturalised citizens, children with Portuguese citizenship, and families where one member has a CC.' },
        { kind: 'paragraph', text: 'After the loss, theft, robbery, or destruction of the card, you need to cancel the old CC and request a new card or segunda via. If you need to fly, sign a transaction, go to the bank, or complete an urgent act with a notary, ask for a pedido urgente or pedido extremo urgente.' },
        { kind: 'warning', text: 'Do not confuse an “agendamento” with card production. Booking through gov.pt/IRN is needed for application or collection, but the urgency level itself is chosen and paid for when requesting the Cartão de Cidadão.' }
      ]
    },
    {
      id: 'cancel-card',
      title: '1. Cancel the old CC immediately',
      content: [
        { kind: 'paragraph', text: 'Cancellation blocks the electronic certificates, signature, and use of the lost card. This is especially important if the card was stolen together with the PIN letter, phone, bank cards, or documents showing your NIF.' },
        { kind: 'checklist', items: [
          'Call Linha Cartão de Cidadão: +351 210 990 111 if you do not have access to online services.',
          'If you have CMD or the card codes, check whether you can cancel it through gov.pt.',
          'You can cancel it in person at an IRN balcão, Espaço Cidadão, or Loja de Cidadão with the Cartão de Cidadão service.',
          'Record the date and method of cancellation: this will be useful if fraudulent activity appears later.',
          'If the card was stolen, go to PSP/GNR before applying for a new CC.',
          'If a card that has already been cancelled is found, it cannot be used: you still need a new CC.'
        ] },
        { kind: 'warning', text: 'If you do not cancel the CC and it is used, it will be harder to prove that you did not consent. In case of theft, do not stop at cancellation: you need a police report.' }
      ]
    },
    {
      id: 'police-report',
      title: '2. In case of theft, make a participação with PSP or GNR',
      content: [
        { kind: 'paragraph', text: 'For simple loss, the police are usually not mandatory. For theft, robbery, pickpocketing, or a break-in to a car or flat, you need an auto de notícia / participação from PSP or GNR. In practice, IRN may ask for this document, especially if you are specifically reporting furto/roubo and do not have another identity document.' },
        { kind: 'checklist', items: [
          'Go to the nearest PSP station in a town or city, or GNR in rural areas.',
          'State that your Cartão de Cidadão has been stolen and ask for a written participação.',
          'Provide your NIF, date of birth, address, and the place and time of the theft if you know them.',
          'If bank cards, a phone, carta de condução, or passport were stolen, include everything in one report.',
          'Ask for a paper or digital copy with the case number.',
          'Take the participação to your IRN appointment.',
          'If the theft happened abroad, make a report to the local police and, if possible, notify the Portuguese consulate.'
        ] },
        { kind: 'warning', text: 'PSP/GNR do not issue a new CC. They only record the theft. The new card is processed through IRN/Justiça/gov.pt.' }
      ]
    },
    {
      id: 'book-and-choose-priority',
      title: '3. Book with IRN and choose the urgency level',
      content: [
        { kind: 'paragraph', text: 'Bookings are made through gov.pt: services related to Cartão de Cidadão. Choose a balcão that offers emissão/renovação/levantamento. In major cities, slots run out quickly; check neighbouring concelhos and Lojas de Cidadão.' },
        { kind: 'substeps', items: [
          { id: 'normal', title: 'Standard pedido', content: [
            { kind: 'paragraph', text: 'Suitable if you have a passport or another document and no urgent trip. In Portugal, standard production usually takes around 7 working days, but actual collection depends on the balcão and the appointment for levantamento.' }
          ] },
          { id: 'urgent', title: 'Pedido urgente', content: [
            { kind: 'paragraph', text: 'In 2026 it costs €30 for a card valid for up to 5 years and €33 for a card valid for more than 5 years. Use this if you need the document quickly, but not today. Timeframes are shorter than standard; the specific collection day is confirmed by the balcão.' }
          ] },
          { id: 'extreme', title: 'Pedido extremo urgente', content: [
            { kind: 'paragraph', text: 'In 2026 it costs €50 for a card valid for up to 5 years and €53 for a card valid for more than 5 years. This is a mode for collection at limited locations, usually Lisbon/Porto, often on the same day or in about 24 hours, if the request is submitted in time and there are no technical blocks.' }
          ] }
        ] },
        { kind: 'warning', text: 'Not all balcões handle extremo urgente and not all counters are available without an appointment. If you have a flight, court hearing, notarial transaction, or hospital admission, say so clearly at the desk and show proof.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: '4. What to bring if the CC is lost and you have no other ID',
      content: [
        { kind: 'paragraph', text: 'IRN must establish your identity. The more indirect documents you have, the lower the risk of refusal or postponement. If your passport was also stolen, bring the police report and anything that links you to your Portuguese identity.' },
        { kind: 'checklist', items: [
          'Passport, if you have one.',
          'Old CC, if the card is damaged but physically in your possession.',
          'Auto de notícia / participação from PSP or GNR in case of theft.',
          'NIF, Cartão de Cidadão number, or a copy of the old card if it was saved on your phone, with your bank, or at work.',
          'Certidão de nascimento portuguesa or assento details, if available.',
          'Portuguese carta de condução or foreign driving licence.',
          'Residence permit from another country, cartão bancário with your name, work badge, child’s school document — as additional evidence.',
          'Comprovativo de morada: bill, contrato de arrendamento, atestado de residência, if you are changing your address at the same time.',
          'Phone with access to e-mail/SMS if a contact is needed for notifications.',
          'Witnesses with valid ID, if you have no identity document at all and the balcão asks for confirmation.'
        ] },
        { kind: 'warning', text: 'If you are changing details — address, name, marital status — this is no longer just a segunda via. Additional documents may be required and the timeframe may differ from an urgent reissue.' }
      ]
    },
    {
      id: 'pickup-and-after',
      title: '5. Collection, PIN and what to check after issue',
      content: [
        { kind: 'paragraph', text: 'The new CC is usually collected in person at the specified balcão. The PIN codes from the letter are needed for activation. For urgent and extremo urgente, confirm exactly where the levantamento will take place: the application location and collection location may differ.' },
        { kind: 'checklist', items: [
          'Check the name, date of birth, validade, NIF, NISS and número de utente, if they are shown.',
          'Keep the PIN letter separate from the card.',
          'Activate the certificates if you use assinatura digital.',
          'Update the document with your bank, employer, insurer, telecoms provider, and in services where the old CC was listed as ID.',
          'If your phone was stolen, reissue the SIM/eSIM and change passwords, especially gov.pt, e-mail, and banking apps.',
          'If the old CC is found after the new one has been issued, do not use it and do not give it to third parties.'
        ] },
        { kind: 'warning', text: 'An urgent card does not solve access to CMD if the phone or number has been lost. CMD recovery may require a separate procedure through gov.pt/IRN.' }
      ]
    }
  ],
  costs: [
    { label: 'Cartão de Cidadão — standard pedido, card valid for up to 5 years', amountEUR: 15, note: 'Indicative cost for applying in Portugal; the actual mode is chosen at IRN.' },
    { label: 'Cartão de Cidadão — standard pedido, card valid for more than 5 years', amountEUR: 18, note: 'Usually applies to citizens over 25, when the card is issued for 10 years.' },
    { label: 'Pedido urgente — card valid for up to 5 years', amountEUR: 30, note: 'Urgent production; availability depends on the balcão.' },
    { label: 'Pedido urgente — card valid for more than 5 years', amountEUR: 33, note: 'Urgent production for a card with a longer validade.' },
    { label: 'Pedido extremo urgente — card valid for up to 5 years', amountEUR: 50, note: 'Emergency collection at limited locations, often on the same day or in around 24 hours.' },
    { label: 'Pedido extremo urgente — card valid for more than 5 years', amountEUR: 53, note: 'Emergency collection for a card with a longer validade.' }
  ],
  sources: [
    { title: 'gov.pt: booking services related to Cartão de Cidadão', url: 'https://www2.gov.pt/en/servicos/agendar-um-servico-relacionado-com-o-cartao-de-cidadao', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Justiça/IRN: Cartão de Cidadão, application, collection, timeframes and cost', url: 'https://justica.gov.pt/Registos/Identificacao/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
