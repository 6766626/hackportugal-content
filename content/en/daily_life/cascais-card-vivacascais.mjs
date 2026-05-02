export default {
  editorialVoice: 'hackportugal',
  id: 'cascais-card-vivacascais',
  categoryId: 'daily_life',
  title: 'Cascais Card / Viva Cascais — Cascais resident card',
  tldr: 'Cartão Viver Cascais / Viva Cascais is the municipal card from Câmara Municipal de Cascais for residents, workers and students in the Cascais municipality. In 2026 it is needed to access municipal benefits: BUS LINE/MobiCascais, parking via Cascais Próxima, swimming pools, sport, culture, events and local discounts. Application is usually free online via Cascais ID; you need NIF, an identity document and proof of a connection with Cascais: address, work or study.',
  tags: ['cascais', 'vivacascais', 'transport', 'parking'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this card is',
      content: [
        { kind: 'paragraph', text: 'Cartão Viver Cascais is the municipal benefits card of Câmara Municipal de Cascais. In everyday use it is often called Cascais Card or Viva Cascais, because access to services is through the digital Cascais ID account, the municipality website and apps.' },
        { kind: 'paragraph', text: 'The card does not replace a residence permit, Cartão de Cidadão, NIF, Navegante or a bank card. It is a local pass for discounts and tariffs specifically in the concelho de Cascais: Cascais, Estoril, Carcavelos, Parede, Alcabideche, São Domingos de Rana.' },
        { kind: 'checklist', items: [
          'Cascais residents — by residential address in the municipality',
          'Cascais workers — if the workplace is in the municipality',
          'Cascais students — if the educational institution is in the municipality',
          'Children — through a parent/legal representative',
          'Foreign nationals — available on the same terms, if they have a NIF and proof of a connection with Cascais'
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'What it gives you in 2026',
      content: [
        { kind: 'paragraph', text: 'The set of benefits depends on your profile: munícipe, trabalhador or estudante. Check active benefícios in your personal account/app, because Câmara de Cascais periodically changes partners, tariffs and the rules for individual services.' },
        { kind: 'checklist', items: [
          'BUS LINE / MobiCascais: Cascais municipal bus routes with a preferential regime for confirmed card users',
          'Parking: resident and preferential conditions in Cascais Próxima zones, if your address/zone falls under the estacionamento rules',
          'Piscinas Municipais: discounts or special tariffs for municipal swimming pools',
          'Desporto: benefits for sports activities, municipal complexes and programmes',
          'Cultura: discounts on some shows, concerts, museums and Câmara Municipal de Cascais events',
          'Bibliotecas and municipal services: simplified identification in some municipal services',
          'Partners: local discounts with commercial partners, if they are active in the current Câmara list'
        ] },
        { kind: 'warning', text: 'Do not plan your budget on the basis that “everything is free”. Free access or a discount depends on the specific service, your status and the current conditions. Before travelling, parking or buying a ticket, check the tariff in MobiCascais/Cascais Próxima or on cm-cascais.pt.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The application is usually submitted online. The system asks you to identify the person and prove a connection with Cascais. For a foreign national, standard Portuguese documents are suitable: NIF, residence permit or passport, proof of address/work/study.' },
        { kind: 'checklist', items: [
          'NIF',
          'Identity document: residence permit, Cartão de Cidadão for PT/EU citizens or passport',
          'Address in Cascais: contrato de arrendamento, escritura, water/electricity/internet bill or atestado de residência from Junta de Freguesia',
          'If you do not live in Cascais but work there: declaração da entidade patronal or employment contract with the workplace in Cascais',
          'If you are a student: declaração de matrícula or student document from an educational institution in Cascais',
          'For a child: the child’s document, the child’s NIF if available, the parent’s document and proof of parental authority if requested by the system',
          'Email and Portuguese mobile number for confirmations',
          'Access to Cascais ID / Câmara personal account'
        ] },
        { kind: 'warning', text: 'Atestado de residência from Junta de Freguesia is useful if you do not have a rental contract in your own name or utility bills. To issue an atestado, the Junta usually asks for an identity document, NIF, proof of address and sometimes two witnesses from the freguesia.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply online',
      content: [
        { kind: 'substeps', items: [
          { id: 'create-cascais-id', title: '1. Create Cascais ID', content: [
            { kind: 'paragraph', text: 'Go to the Câmara Municipal de Cascais website and create a personal account. Use an email to which you have permanent access: confirmations and application notifications are sent there.' }
          ] },
          { id: 'choose-profile', title: '2. Choose a profile', content: [
            { kind: 'paragraph', text: 'In the application, choose the basis: residente/munícipe, trabalhador or estudante. This determines which documents will be requested and which benefits will be activated.' }
          ] },
          { id: 'upload-documents', title: '3. Upload documents', content: [
            { kind: 'paragraph', text: 'The scan or photo must be legible: the name, NIF, address, date and signature/organisation logo must be visible. It is better to prepare files in PDF or JPG.' }
          ] },
          { id: 'wait-validation', title: '4. Wait for validação', content: [
            { kind: 'paragraph', text: 'The municipality checks the documents. If anything is missing, the application will be returned for correction. The timeframe depends on service workload; in practice, allow several working days, and do not leave the application to the last minute before urgent parking or buying a pass.' }
          ] },
          { id: 'use-digital-card', title: '5. Use the digital card', content: [
            { kind: 'paragraph', text: 'After approval, the card is available digitally. Different apps/services in the municipal ecosystem may be used for buses, parking and discounts, so check exactly where you need to link Cartão Viver Cascais.' }
          ] }
        ] }
      ]
    },
    {
      id: 'transport-parking',
      title: 'Transport and parking: where mistakes are most common',
      content: [
        { kind: 'paragraph', text: 'The main confusion: Cartão Viver Cascais, MobiCascais, BUS LINE, Cascais Próxima and Navegante are not the same thing. The card confirms your right to the preferential municipal regime, but the journey or parking itself may require separate validation in an app, on a validator or in the operator’s service.' },
        { kind: 'checklist', items: [
          'For the bus, check that your card profile is active specifically for BUS LINE/MobiCascais',
          'If the route goes beyond Cascais, the conditions may differ from municipal routes',
          'Navegante is needed for the AML metropolitan network and is not replaced by Cartão Viver Cascais',
          'For parking, check the zone: residente, comerciante, visitante and paid zones have different rules',
          'The address on the card must match the zone where you are requesting resident parking',
          'The vehicle may require separate registration by matrícula',
          'A parking fine will not be cancelled simply because you have a card: it is important to activate the correct regime before parking',
          'If you change address, work or study, update the card details, otherwise benefits may be disabled'
        ] },
        { kind: 'warning', text: 'If you have just moved to Cascais and are waiting for card confirmation, do not assume that benefits apply retroactively. Until validação, pay for transport and parking at the normal tariff.' }
      ]
    },
    {
      id: 'renewal-problems',
      title: 'Renewal, change of address and problems',
      content: [
        { kind: 'paragraph', text: 'The card is linked to whether your details are up to date. If you have moved out of Cascais, changed employer, finished studying or changed address within the municipality, update your profile. For some benefits, Câmara may periodically ask for new proof.' },
        { kind: 'checklist', items: [
          'Check the card validity period and status in your personal account',
          'Keep PDFs/scans of the rental contract, atestado, declaração da entidade patronal and matrícula',
          'If refused, open the Câmara message: it usually states which document is illegible or unsuitable',
          'If a document is in the name of a spouse/partner, add proof of cohabitation if the system allows it',
          'If there is no response, use the contactos Câmara Municipal de Cascais or atendimento municipal',
          'After approval, check the benefit in the specific service: swimming pool, parking, bus, cultural venue',
          'Do not pass the card to other people: benefits are personal'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Applying for Cartão Viver Cascais', amountEUR: 0, note: 'Usually free; individual municipal services, parking, sport or events may be charged according to their own tariffs.' },
    { label: 'Atestado de residência at Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'The tariff depends on the freguesia and the type of certificate; it is only needed if there is no other proof of address.' }
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
