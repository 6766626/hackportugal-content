export default {
  editorialVoice: 'hackportugal',
  id: 'cascais-card-vivacascais',
  categoryId: 'daily_life',
  title: 'Cascais Card / Viva Cascais — Cascais resident card',
  tldr: 'Cartão Viver Cascais / Viva Cascais is the Câmara Municipal de Cascais municipal card for residents, workers and students in the Cascais municipality. In 2026 it is needed to access municipal benefits: BUS LINE/MobiCascais, parking through Cascais Próxima, swimming pools, sport, culture, events and local discounts. Application is usually free online through Cascais ID; you need a NIF, identity document and proof of a connection to Cascais: address, work or study.',
  tags: ['cascais', 'vivacascais', 'transport', 'parking'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this card is',
      content: [
        { kind: 'paragraph', text: 'Cartão Viver Cascais is the Câmara Municipal de Cascais municipal benefits card. In everyday use it is often called the Cascais Card or Viva Cascais, because access to services goes through the Cascais ID digital account, the municipality’s website and apps.' },
        { kind: 'paragraph', text: 'The card does not replace a residence permit, Cartão de Cidadão, NIF, Navegante or bank card. It is a local pass for discounts and fares specifically in the concelho de Cascais: Cascais, Estoril, Carcavelos, Parede, Alcabideche, São Domingos de Rana.' },
        { kind: 'checklist', items: [
          'Cascais residents — based on an address of residence in the municipality',
          'Cascais workers — if the place of work is in the municipality',
          'Cascais students — if the educational institution is in the municipality',
          'Children — through a parent/legal representative',
          'Foreign nationals — available on the same conditions, if they have a NIF and proof of a connection to Cascais'
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'What it provides in 2026',
      content: [
        { kind: 'paragraph', text: 'The set of benefits depends on your profile: munícipe, trabalhador or estudante. Check the active benefícios in your personal account/app, because Câmara de Cascais periodically changes partners, fares and the rules for individual services.' },
        { kind: 'checklist', items: [
          'BUS LINE / MobiCascais: Cascais municipal bus routes with a preferential regime for confirmed card users',
          'Parking: resident and preferential conditions in Cascais Próxima zones, if your address/zone falls under the estacionamento rules',
          'Piscinas Municipais: discounts or special rates for municipal swimming pools',
          'Desporto: benefits for sports classes, municipal complexes and programmes',
          'Cultura: discounts on some performances, concerts, museums and Câmara Municipal de Cascais events',
          'Bibliotecas and municipal services: simplified identification for some municipal services',
          'Partners: local discounts with commercial partners, if they are active on the current Câmara list'
        ] },
        { kind: 'warning', text: 'Do not plan your budget on the basis that “everything is free”. Whether something is free or discounted depends on the specific service, your status and the conditions in force. Before travelling, parking or buying a ticket, check the fare in MobiCascais/Cascais Próxima or on cm-cascais.pt.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'Applications are usually submitted online. The system asks you to identify the person and prove a connection to Cascais. For a foreign national, standard Portuguese documents are suitable: NIF, residence permit or passport, proof of address/work/study.' },
        { kind: 'checklist', items: [
          'NIF',
          'Identity document: residence permit, Cartão de Cidadão for PT/EU citizens or passport',
          'Address in Cascais: contrato de arrendamento, escritura, water/electricity/internet bill or atestado de residência from the Junta de Freguesia',
          'If you do not live in Cascais but work there: declaração da entidade patronal or employment contract with the workplace in Cascais',
          'If you are a student: declaração de matrícula or student document from an educational institution in Cascais',
          'For a child: the child’s document, the child’s NIF if available, the parent’s document and proof of parental authority, if the system requests it',
          'Email and Portuguese mobile number for confirmations',
          'Access to Cascais ID / Câmara personal account'
        ] },
        { kind: 'warning', text: 'Atestado de residência from the Junta de Freguesia is useful if you do not have a rental contract in your own name or utility bills. To issue an atestado, the Junta usually asks for an identity document, NIF, proof of address and sometimes two witnesses from the freguesia.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply online',
      content: [
        { kind: 'substeps', items: [
          { id: 'create-cascais-id', title: '1. Create a Cascais ID', content: [
            { kind: 'paragraph', text: 'Go to the Câmara Municipal de Cascais website and create a personal account. Use an email address to which you have permanent access: confirmations and application notifications will be sent there.' }
          ] },
          { id: 'choose-profile', title: '2. Choose a profile', content: [
            { kind: 'paragraph', text: 'In the application, choose the basis: residente/munícipe, trabalhador or estudante. This determines which documents will be requested and which benefits will be activated.' }
          ] },
          { id: 'upload-documents', title: '3. Upload documents', content: [
            { kind: 'paragraph', text: 'The scan or photo must be readable: name, NIF, address, date and the organisation’s signature/logo must be visible. It is best to prepare files in PDF or JPG.' }
          ] },
          { id: 'wait-validation', title: '4. Wait for validação', content: [
            { kind: 'paragraph', text: 'The municipality checks the documents. If something is missing, the application will be returned for correction.\n\nThe timeframe depends on service workload; in practice, allow several working days, and before urgent parking or buying a pass do not leave the application until the last moment.' }
          ] },
          { id: 'use-digital-card', title: '5. Use the digital card', content: [
            { kind: 'paragraph', text: 'After approval, the card is available digitally. Different apps/services in the municipal ecosystem may be used for buses, parking and discounts, so check exactly where you need to link the Cartão Viver Cascais.' }
          ] }
        ] }
      ]
    },
    {
      id: 'transport-parking',
      title: 'Transport and parking: where people most often make mistakes',
      content: [
        { kind: 'paragraph', text: 'The main confusion: Cartão Viver Cascais, MobiCascais, BUS LINE, Cascais Próxima and Navegante are not the same thing. The card confirms your right to the preferential municipal regime, but the journey or parking itself may require separate validation in an app, on a validator or in the operator’s service.' },
        { kind: 'checklist', items: [
          'For the bus, check that your card profile is active specifically for BUS LINE/MobiCascais',
          'If the route goes beyond Cascais, the conditions may differ from municipal routes',
          'Navegante is needed for the AML metropolitan network and is not replaced by Cartão Viver Cascais',
          'For parking, check the zone: residente, comerciante, visitante and paid zones have different rules',
          'The address on the card must correspond to the zone where you are requesting resident parking',
          'The vehicle may require separate registration by matrícula',
          'A parking fine is not cancelled simply because you have a card: it is important to activate the correct regime before parking',
          'When you change address, work or study, update the data on the card, otherwise benefits may be disabled'
        ] },
        { kind: 'warning', text: 'If you have just moved to Cascais and are waiting for card confirmation, do not assume that benefits apply retroactively. Until validação, pay for transport and parking at the standard rate.' }
      ]
    },
    {
      id: 'renewal-problems',
      title: 'Renewal, change of address and problems',
      content: [
        { kind: 'paragraph', text: 'The card is linked to your data being up to date. If you have moved out of Cascais, changed employer, finished your studies or changed address within the municipality, update your profile. For some benefits, the Câmara may periodically ask for new proof.' },
        { kind: 'checklist', items: [
          'Check the card’s validity period and status in your personal account',
          'Keep PDFs/scans of your rental contract, atestado, declaração da entidade patronal and matrícula',
          'If refused, open the Câmara message: it usually states which document is unreadable or unsuitable',
          'If a document is in the name of a spouse/partner, add proof of cohabitation, if the system allows this',
          'If there is no reply, use the Câmara Municipal de Cascais contactos or atendimento municipal',
          'After approval, check the benefit in the specific service: swimming pool, parking, bus, cultural venue',
          'Do not pass the card to other people: benefits are personal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Cartão Viver Cascais application', amountEUR: 0, note: 'Usually free; individual municipal services, parking, sport or events may be charged according to their own rates.' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'The fee depends on the freguesia and the type of certificate; it is only needed if there is no other proof of address.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Cascais — official municipal services website',
      url: 'https://www.cm-cascais.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — Cartão Viver Cascais',
      url: 'https://www.cm-cascais.pt/cartao-viver-cascais',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — MobiCascais and transport',
      url: 'https://www.cm-cascais.pt/mobi-cascais',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Cascais Próxima — parking and mobility in Cascais',
      url: 'https://www.cascaisproxima.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
