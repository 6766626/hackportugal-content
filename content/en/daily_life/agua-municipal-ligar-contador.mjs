export default {
  editorialVoice: 'hackportugal',
  id: 'agua-municipal-ligar-contador',
  categoryId: 'daily_life',
  title: 'Connecting water and the meter: EPAL Lisboa, Águas do Porto and municipal operators',
  tldr: 'Water in Portugal is not connected through a single company, but through a municipal operator: EPAL in Lisboa, Águas do Porto in Porto, SIMAR in Loures/Odivelas, SMAS/Águas in other Câmara Municipal areas. You usually need a NIF, identity document, rental/purchase contract or autorização do proprietário, IBAN for débito direto and meter readings. The application is often online. A one-off deposit/garantia is often around €30–80, with ~€60 as a guide; the exact amount depends on the operator’s tariff and the type of contract.',
  tags: ['water', 'epal', 'meter', 'utilities'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'find-operator',
      title: '1. Find your water operator',
      content: [
        { kind: 'paragraph', text: 'In Portugal, water supply is a municipal service. You cannot choose a “supplier” as you would for internet or mobile service: the contract is made with the operator that serves the specific address.' },
        { kind: 'checklist', items: [
          'Lisboa: EPAL — Empresa Portuguesa das Águas Livres',
          'Porto: Águas e Energia do Porto / Águas do Porto',
          'Loures and Odivelas: SIMAR Loures e Odivelas',
          'Cascais: Águas de Cascais',
          'Sintra: SMAS de Sintra',
          'Oeiras and Amadora: SIMAS Oeiras e Amadora',
          'Almada: SMAS de Almada',
          'In smaller towns, look for “Águas”, “SMAS” or “Serviços Municipalizados” on the Câmara Municipal website'
        ] },
        { kind: 'paragraph', text: 'If you are renting, first ask the landlord/agent: is the water already active and you only need to change the titular, or is the meter disconnected and a new contrato de fornecimento is needed.' }
      ]
    },
    {
      id: 'documents',
      title: '2. Prepare the documents',
      content: [
        { kind: 'paragraph', text: 'The set is almost the same for EPAL, Águas do Porto and SMAS, but municipal operators may ask for additional forms. For a foreign national, a residence permit is not always mandatory: a passport/Cartão de Cidadão EU + NIF is often enough.' },
        { kind: 'checklist', items: [
          'NIF',
          'Passport, Cartão de Cidadão, residence permit or another identity document',
          'Rental contract, escritura/caderneta predial, contrato-promessa or autorização do proprietário',
          'Full address: rua, número, andar, código postal, freguesia',
          'Meter details: número do contador and current leitura, if the meter is already installed',
          'Close-up photo of the meter: number + readings',
          'IBAN of a Portuguese or SEPA account for débito direto, if you want automatic payment',
          'Email and Portuguese phone number',
          'Sometimes: licença de utilização or artigo matricial for a new/non-standard property'
        ] },
        { kind: 'warning', text: 'Do not sign the flat handover record without photos of the water, electricity and gas readings. Old debt is usually linked to the previous titular, but a dispute about actual consumption between the move-in date and the contract date can only be resolved with documents and photos.' }
      ]
    },
    {
      id: 'apply',
      title: '3. Apply online or at the balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online application', content: [
            { kind: 'paragraph', text: 'Large operators have an área de cliente and forms such as “celebrar contrato”, “novo contrato”, “ligação de água” or “mudança de titularidade”. You upload documents, provide the IBAN and choose how to receive the fatura: by email or on paper.' },
            { kind: 'paragraph', text: 'EPAL and Águas do Porto allow most operations to be handled remotely. For a first contract, they may still schedule a technician’s visit to turn on the water, check the plombagem or install/replace the meter.' }
          ] },
          { id: 'counter', title: 'In person at the office', content: [
            { kind: 'paragraph', text: 'If the online form does not accept a foreign document, the address cannot be found in the database or you need urgent activation, go to the loja/balcão do cliente. Take the original documents and PDF copies on your phone.' }
          ] },
          { id: 'landlord', title: 'If the contract remains in the landlord’s name', content: [
            { kind: 'paragraph', text: 'This is possible, but it is worse for the tenant: you do not control the débito direto, you do not receive official faturas in your own name and it is harder to prove your address. For a long-term rental, it is usually better to put the água in your own name.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fees-and-deposit',
      title: '4. How much you pay when connecting',
      content: [
        { kind: 'paragraph', text: 'Exact amounts depend on the operator, the meter diameter, the type of property and whether a physical connection is required. In a standard flat with an existing contador, this is usually not a construction connection, but a new contract or a change of titular.' },
        { kind: 'checklist', items: [
          'Deposit/garantia/caução: often around €30–80, with ~€60 as a practical guide',
          'Some operators do not take a depósito with débito direto, or they refund/credit it when the contract is terminated',
          'Meter installation or replacement may be free as part of service provision or charged according to the operator’s tariff',
          'In new properties, ligação ao ramal, vistoria and serviços acessórios can cost noticeably more than a standard change of titular',
          'The first bill may include water, saneamento, resíduos urbanos and fixed tarifas de disponibilidade',
          'IVA on water and related services depends on the type of service; in the fatura it is usually already shown as separate lines'
        ] },
        { kind: 'warning', text: 'Do not treat your neighbour’s amount as the law. EPAL, Águas do Porto, SIMAR and SMAS have different regulamentos tarifários. Before paying, check the “Tarifário 2026” PDF for your exact município.' }
      ]
    },
    {
      id: 'meter-reading-billing',
      title: '5. Readings: leitura mensal vs faturação',
      content: [
        { kind: 'paragraph', text: 'After connection, keep an eye on the readings. If the operator does not receive a leitura real, the bill may be calculated by estimativa. An acerto will then arrive: an extra payment or a credit.' },
        { kind: 'checklist', items: [
          'Once a month, submit the leitura do contador via the área de cliente, app, phone line or website form',
          'Check the submission window: many operators indicate specific days of the month in the fatura',
          'Keep meter photos at least until the next acerto',
          'If the contador is inside the flat, provide técnico access when notified',
          'If the estimativa received is too high, immediately submit a leitura real and request a correção/acerto',
          'Activate fatura eletrónica so you do not miss bills',
          'Débito direto is convenient, but check the amount before the cobrança date; it is better to dispute a contested bill before the debit'
        ] },
        { kind: 'paragraph', text: 'A standard fatura de água in Portugal often includes more than just water. It may contain abastecimento, saneamento, resíduos sólidos urbanos, taxa de gestão de resíduos and fixed componentes. Therefore a “water” bill can rise even with low consumption.' }
      ]
    },
    {
      id: 'move-out-problems',
      title: '6. When moving out, dealing with a leak or a dispute',
      content: [
        { kind: 'checklist', items: [
          'When moving out, submit the denúncia/rescisão do contrato in advance',
          'Take a final leitura with a photo on the day you hand over the keys',
          'Ask for the final bill and the refund/credit of the caução, if there was one',
          'Do not leave the contract in your name after the rental ends',
          'In an emergency, call your operator’s piquete/avarias, not the general Câmara Municipal line',
          'If the bill rises sharply, check the autoclismo, boiler, garden tap and hidden leaks',
          'Ask for a vistoria/verificação do contador if you suspect a meter error',
          'If the operator does not resolve the dispute, submit a reclamação in the Livro de Reclamações eletrónico and then to ERSAR/centro de arbitragem'
        ] },
        { kind: 'warning', text: 'A large acerto for several months is usually not cancelled just because you “didn’t know about leitura”. It is realistically disputable if there are photos of readings, a proven leak, a titularidade error or an incorrect estimativa after a submitted leitura.' }
      ]
    }
  ],
  costs: [
    { label: 'Deposit / caução / garantia', amountEURMin: 30, amountEURMax: 80, note: 'Common range among municipal operators; guide ~€60. May not apply with débito direto or may be refunded when the contract is closed.' },
    { label: 'Standard change of titular / new contract with an existing meter', amountEURMin: 0, amountEURMax: 50, note: 'Depends on the operator and 2026 tariffs; sometimes included in the first bill.' },
    { label: 'Physical connection, vistoria or serviços acessórios', amountEURMin: 20, amountEURMax: 150, note: 'For new properties, a disconnected ramal or a non-standard installation, the amount may be higher.' }
  ],
  sources: [
    { title: 'EPAL — customers, contracts and water service in Lisboa', url: 'https://www.epal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Águas do Porto — contratos, leituras, faturação and apoio ao cliente', url: 'https://www.aguasdoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSAR — consumer rights for water, saneamento and resíduos services', url: 'https://www.ersar.pt/pt/consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações eletrónico — complaints about utility operators', url: 'https://www.livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
