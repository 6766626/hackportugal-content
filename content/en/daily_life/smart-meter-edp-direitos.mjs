export default {
  editorialVoice: 'hackportugal',
  id: 'smart-meter-edp-direitos',
  categoryId: 'daily_life',
  title: 'E-REDES smart meters: consumer rights',
  tldr: 'In Portugal the electricity meter usually belongs to the network operator E-REDES, not EDP Comercial nor the tenant. The mass replacement with a smart meter should have been completed by E-REDES by the end of 2024; in 2026 installation and planned replacement are free for the customer. A smart meter provides telecontagem: automatic readings, fewer estimativas, and viewing of consumption online. But accuracy can be challenged, access to data is regulated by ERSE/GDPR, and salespeople have no right to impose a new tariff “because of the meter”.',
  tags: ['edp', 'e-redes', 'meters', 'electricity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-is-who',
      title: 'Who does what: E-REDES ≠ EDP Comercial',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is an electricity supplier — for example EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy — and a distribution network operator. In most of mainland Portugal the operator is E-REDES. It is E-REDES that manages the meter, meter readings, equipment replacement and technical faults.' },
        { kind: 'checklist', items: [
          'The contract and electricity bill are with your comercializador: EDP Comercial, Endesa, Galp, etc.',
          'The meter, leitura, avaria, potência contratada at the technical level are E-REDES’s remit.',
          'CPE is the supply point code, usually starting with PT; you need it for requests and switching supplier.',
          'A smart meter does not tie you to EDP: you can change supplier.',
          'An E-REDES employee must carry identification; they should not be selling tariffs on the spot.',
          'If someone calls “from EDP/E-REDES” and insists you must sign a new contract because of a smart meter — that is a reason to verify through an official contact.'
        ] }
      ]
    },
    {
      id: 'installation-rights',
      title: 'Installation and replacement: what is free ✅',
      content: [
        { kind: 'paragraph', text: 'Planned replacement of an analogue meter with a contador inteligente is part of network modernisation. For a typical baixa tensão normal customer it should not cost money: E-REDES replaces the equipment as the network operator. The mass E-REDES rollout was planned to be completed by the end of 2024, so in 2026 an analogue meter is already an exception: an old house, locked access, a technical issue, or communication not yet activated.' },
        { kind: 'checklist', items: [
          'Planned smart meter installation — €0 for the customer.',
          'Replacement of a faulty meter, if not the customer\'s fault — €0.',
          'You do not need to sign a new contract with EDP Comercial just because of a new meter.',
          'If the meter is inside the flat/house, E-REDES may ask for access at an agreed time.',
          'If the meter is outside, replacement often happens without your involvement.',
          'After installation check the meter serial number and CPE in the documents/online account.',
          'Photograph the old and new readings on the day of replacement.',
          'If the bill rose sharply after replacement, do not wait 3 months: immediately request a check of leituras.'
        ] },
        { kind: 'warning', text: 'What is free is the planned technical replacement. If you yourself request moving the meter, changing the supply entry, increasing potência contratada with works in the board, or redoing the instalação elétrica, this may cost money and be carried out via an electrician/certification.' }
      ]
    },
    {
      id: 'data-and-telecounting',
      title: 'Telecontagem and data access',
      content: [
        { kind: 'paragraph', text: 'A smart meter by itself does not always mean active telecontagem. The meter must be integrated into the smart network. When it is active, readings are sent automatically and bills rely less on estimativas. In the E-REDES Balcão Digital and with some suppliers you can see consumption history — usually by day and, where available, at shorter intervals.' },
        { kind: 'checklist', items: [
          'Check the telecontagem status in the E-REDES Balcão Digital using your CPE.',
          'If telecontagem is active, sending a monthly leitura is usually not necessary.',
          'If telecontagem is not yet active, continue to submit readings to the supplier or E-REDES during the period stated on the bill.',
          'Detailed consumption data are personal data: their use is regulated by ERSE and GDPR.',
          'The supplier receives the data needed for billing; extended access and analytics services may require consent.',
          'You can request access to your data through E-REDES and the supplier\'s online account.',
          'For local real-time monitoring some meters support a HAN/local port; availability depends on the model and E-REDES activation.',
          'If the data in the EDP Comercial and E-REDES apps differ, first check the CPE, billing period and leitura type: real, estimada or corrigida.'
        ] },
        { kind: 'warning', text: 'Do not give unknown people your CPE, NIF, IBAN and SMS codes “to activate a smart meter”. Your bank code is not needed for smart meter installation and no new tariff contract is required.' }
      ]
    },
    {
      id: 'opt-in-opt-out',
      title: 'Consent, refusal and privacy',
      content: [
        { kind: 'paragraph', text: 'The meter is part of the distribution network, so a planned equipment replacement cannot be treated as an ordinary opt-in commercial service. E-REDES has the right to service and replace the metering device. But consumers retain rights to information, personal data protection, access to their own readings and to limit commercial use of detailed data.' },
        { kind: 'checklist', items: [
          'You are entitled to know who has arrived, from which company, why the meter is being replaced and which CPE is affected.',
          'You are entitled to receive installation confirmation and the final readings of the old/new meter.',
          'You are entitled to refuse a supplier\'s marketing offer, even if it is linked to a smart meter.',
          'You are entitled to ask the supplier or E-REDES to clarify which data are used for the bill.',
          'You are entitled to withdraw consents for additional commercial services, if they are not mandatory for billing and network operation.',
          'You are entitled to complain via the Livro de Reclamações and to ERSE if data are used non-transparently.',
          'You are not obliged to pay a “taxa de contador inteligente” for the mere fact of installation.'
        ] },
        { kind: 'warning', text: 'A full “opt-out” from the metering device itself is practically limited: the network operator must have a working meter to measure consumption. If your concern is privacy, ask not for removal but for clarification of the data regime, telecontagem and consents.' }
      ]
    },
    {
      id: 'accuracy-disputes',
      title: 'If the meter is wrong or the bill looks suspicious',
      content: [
        { kind: 'paragraph', text: 'A sharp bill increase after installing a smart meter is often not due to a “speeded-up meter”, but to the end of estimativas: the old bill may have been understated for months and then a correção arrived. But an error cannot be ruled out. Act in writing and keep photos of the display.' },
        { kind: 'substeps', items: [
          { id: 's1-compare', title: '1. Compare the bill with actual readings', content: [
            { kind: 'checklist', items: [
              'Find the leitura type on the bill: real, estimada or corrigida.',
              'Photograph the meter display with the date.',
              'Compare the CPE and meter serial number on the bill.',
              'Check the period: sometimes the bill covers more than 30 days.',
              'Check the potência contratada and tariff: simples, bi-horário, tri-horário.'
            ] }
          ] },
          { id: 's2-contact', title: '2. Write to the supplier and to E-REDES', content: [
            { kind: 'paragraph', text: 'The supplier is responsible for the bill and payment, E-REDES for the measurement data. In your request include your NIF, CPE, bill number, replacement date, photos of readings, and what exactly you are disputing: leitura, consumo, potência or avaria.' }
          ] },
          { id: 's3-verification', title: '3. Request meter verification', content: [
            { kind: 'paragraph', text: 'If the dispute is not resolved by reconciling data, you can request a technical test/verification of the meter. Under the sector rules, if the device is outside the permissible error, the costs and correction should not fall on the customer; if the meter is compliant, the check may be charged to the customer at the applicable tariffs.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not stop paying the entire bill without a strategy: debt may lead to a disconnection procedure. It is safer to pay the undisputed part, open a reclamação and request in writing the suspension/correction of the disputed amount.' }
      ]
    },
    {
      id: 'analog-quirks',
      title: 'What changes after an analogue meter',
      content: [
        { kind: 'paragraph', text: 'The main change is fewer manual leituras and fewer surprises from estimativas. But the first months after replacement can be “messy”: closing the old period, correcting accumulated estimates, and activation of communications not on the same day.' },
        { kind: 'checklist', items: [
          'After installation keep a photo of the old leitura: it protects against an incorrect correção.',
          'Check the first and second bill after replacement especially carefully.',
          'If telecontagem is not active, continue to submit readings manually.',
          'Do not confuse EDP Comercial with E-REDES: a billing complaint goes to the supplier, a measurement complaint to E-REDES.',
          'When renting, ask the landlord for a photo of the meter on the move-in day and move-out day.',
          'When the occupant changes, always record the CPE and leitura, otherwise you may pay someone else\'s backlog.',
          'If the meter is in a shared cabinet, ask the condomínio how to get access for photos.',
          'For savings look not only at kWh but also at potência contratada: unnecessary 6,9 kVA instead of 3,45/4,6 kVA leads to a constant overpayment.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Planned E-REDES smart meter installation', amountEUR: 0, note: 'Should not be charged to the customer as a separate service.' },
    { label: 'Planned replacement of a faulty meter where the customer is not at fault', amountEUR: 0, note: 'Usually covered by the network operator.' },
    { label: 'Meter verification in a dispute', amountEURMin: 0, amountEURMax: 100, note: 'The exact amount depends on the applicable tariffs and the result of the test; if a meter error is confirmed, the customer should not bear the costs.' }
  ],
  sources: [
    { title: 'E-REDES: smart meters, readings and Balcão Digital', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: electricity consumers’ rights and commercial relations', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: Livro de Reclamações and dispute resolution in the energy sector', url: 'https://www.erse.pt/consumidores-de-energia/pedidos-de-informacao-reclamacoes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
