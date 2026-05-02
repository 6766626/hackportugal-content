export default {
  editorialVoice: 'hackportugal',
  id: 'smart-meter-edp-direitos',
  categoryId: 'daily_life',
  title: 'E-REDES smart meters: consumer rights',
  tldr: 'In Portugal, the electricity meter usually belongs to the network operator E-REDES, not to EDP Comercial and not to the tenant. The mass replacement with smart meters was due to be completed by E-REDES by the end of 2024; in 2026, installation and scheduled replacement are free for the customer. A smart meter provides telecontagem: automatic readings, fewer estimates, and online consumption viewing. But accuracy can be challenged, access to data is regulated by ERSE/GDPR, and suppliers are not allowed to force you onto a new tariff “because of the meter”.',
  tags: ['edp', 'e-redes', 'meters', 'electricity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-is-who',
      title: 'Who is responsible: E-REDES ≠ EDP Comercial',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is an electricity supplier — for example EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy — and a distribution network operator. In most of mainland Portugal, the operator is E-REDES. It is E-REDES that manages the meter, readings, equipment replacement and technical faults.' },
        { kind: 'checklist', items: [
          'Your contract and electricity bill are with your comercializador: EDP Comercial, Endesa, Galp, etc.',
          'The meter, leitura, avaria, potência contratada at the technical level are in the E-REDES area.',
          'CPE is the supply point code, usually starting with PT; it is needed for contacts and switching supplier.',
          'A smart meter does not tie you to EDP: you can change supplier.',
          'An E-REDES employee must have identification; they should not sell tariffs on site.',
          'If someone calls you “from EDP/E-REDES” and demands that you sign a new contract because of a smart meter — that is a reason to check via an official contact.'
        ] }
      ]
    },
    {
      id: 'installation-rights',
      title: 'Installation and replacement: what is free ✅',
      content: [
        { kind: 'paragraph', text: 'The scheduled replacement of an analogue meter with a contador inteligente is part of network modernisation. For an ordinary baixa tensão normal customer, it should not cost money: E-REDES replaces the equipment as the network operator. The E-REDES mass rollout was planned for completion by the end of 2024, so in 2026 an analogue meter is already an exception: an old building, closed access, a technical issue, or a communication link that has not yet been activated.' },
        { kind: 'checklist', items: [
          'Scheduled smart meter installation — €0 for the customer.',
          'Replacement of a faulty meter, if the customer is not at fault — €0.',
          'You do not need to sign a new contract with EDP Comercial just because of a new meter.',
          'If the meter is inside the flat/house, E-REDES may ask for access at an agreed time.',
          'If the meter is outside, replacement often takes place without your involvement.',
          'After installation, check the meter number and CPE in the documents/customer account.',
          'Photograph the old and new readings on the day of replacement.',
          'If the bill rises sharply after replacement, do not wait 3 months: request a check of the leituras immediately.'
        ] },
        { kind: 'warning', text: 'What is free is the scheduled technical replacement. If you yourself ask to move the meter, change the service connection, increase the potência contratada with work in the distribution board, or redo the instalação elétrica, this may cost money and be carried out through an electrician/certification.' }
      ]
    },
    {
      id: 'data-and-telecounting',
      title: 'Telecontagem and access to data',
      content: [
        { kind: 'paragraph', text: 'A smart meter by itself does not always mean active telecontagem. The meter needs to be integrated into the smart network. When it is active, readings are sent automatically and bills depend less on estimates. In the E-REDES Balcão Digital and with some suppliers, you can view consumption history — usually by day, and, where data is available, at shorter intervals too.' },
        { kind: 'checklist', items: [
          'Check the telecontagem status in the E-REDES Balcão Digital using the CPE.',
          'If telecontagem is active, you usually do not need to submit a leitura every month.',
          'If telecontagem is not yet active, continue submitting readings to the supplier or E-REDES during the period indicated on the bill.',
          'Detailed consumption data is personal data: its use is regulated by ERSE and GDPR.',
          'The supplier receives the data needed for billing; extended access and analytics services may require consent.',
          'You can request access to your data through E-REDES and the supplier’s customer account.',
          'For local real-time monitoring, some meters support a HAN/local port; availability depends on the model and E-REDES activation.',
          'If the data in the EDP Comercial and E-REDES apps differs, first check the CPE, billing period and type of leitura: real, estimada or corrigida.'
        ] },
        { kind: 'warning', text: 'Do not give CPE, NIF, IBAN or SMS codes to strangers “to activate the smart meter”. Installing a smart meter does not require your banking code and does not require a new tariff contract.' }
      ]
    },
    {
      id: 'opt-in-opt-out',
      title: 'Consent, refusal and privacy',
      content: [
        { kind: 'paragraph', text: 'The meter is part of the distribution network, so the scheduled replacement of equipment cannot be treated as an ordinary optional commercial service. E-REDES has the right to service and replace the measuring device. But the consumer retains rights to information, protection of personal data, access to their own readings, and limits on the commercial use of detailed data.' },
        { kind: 'checklist', items: [
          'You have the right to know who has come, from which company, why the meter is being changed and which CPE is affected.',
          'You have the right to receive confirmation of installation and the final readings of the old/new meter.',
          'You have the right to refuse a supplier’s marketing offer, even if it is linked to a smart meter.',
          'You have the right to ask the supplier or E-REDES to explain which data is used for the bill.',
          'You have the right to withdraw consent for additional commercial services if they are not mandatory for billing and network operation.',
          'You have the right to complain in the Livro de Reclamações and to ERSE if data is used in a non-transparent way.',
          'You are not obliged to pay a “taxa de contador inteligente” simply because the meter was installed.'
        ] },
        { kind: 'warning', text: 'A full “opt-out” from the measuring device itself is limited in practice: the network operator must have a working meter to measure consumption. If the issue is privacy, ask not for removal but for an explanation of the data regime, telecontagem and consents.' }
      ]
    },
    {
      id: 'accuracy-disputes',
      title: 'If the meter is wrong or the bill looks suspicious',
      content: [
        { kind: 'paragraph', text: 'A sharp increase in the bill after smart meter installation is often not due to an “accelerated meter”, but to the end of estimates: the old bill may have been understated for months, followed by a correção. But an error cannot be ruled out. Act in writing and keep photos of the display.' },
        { kind: 'substeps', items: [
          { id: 's1-compare', title: '1. Compare the bill and the actual readings', content: [
            { kind: 'checklist', items: [
              'Find the type of leitura on the bill: real, estimada or corrigida.',
              'Photograph the meter display with the date.',
              'Compare the CPE and meter number on the bill.',
              'Check the period: sometimes a bill covers more than 30 days.',
              'Check the potência contratada and tariff: simples, bi-horário, tri-horário.'
            ] }
          ] },
          { id: 's2-contact', title: '2. Write to the supplier and E-REDES', content: [
            { kind: 'paragraph', text: 'The supplier is responsible for the bill and payment, E-REDES for the measurement data. In your contact, state the NIF, CPE, bill number, replacement date, photos of the readings, and exactly what you are disputing: leitura, consumo, potência or avaria.' }
          ] },
          { id: 's3-verification', title: '3. Request a meter check', content: [
            { kind: 'paragraph', text: 'If the dispute is not resolved by reconciling the data, you can request a technical check/verification of the meter. Under sector rules, if the device is outside the permitted error margin, the costs and adjustment should not fall on the customer; if the meter is working correctly, the check may be charged to the customer according to the applicable tariffs.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not stop paying the entire bill without a strategy: the debt may lead to a disconnection procedure. It is safer to pay the undisputed part, open a reclamação and request in writing the suspensão/adjustment of the disputed amount.' }
      ]
    },
    {
      id: 'analog-quirks',
      title: 'What changes after an analogue meter',
      content: [
        { kind: 'paragraph', text: 'The main change is fewer manual leituras and fewer surprises from estimates. But the first months after replacement can be “messy”: closure of the old period, correction of accumulated estimates, and communication not being activated on the same day.' },
        { kind: 'checklist', items: [
          'After installation, keep a photo of the old leitura: this protects you against an incorrect correção.',
          'Check the first and second bills after replacement especially carefully.',
          'If telecontagem is not active, continue submitting readings manually.',
          'Do not confuse EDP Comercial with E-REDES: a complaint about the bill goes to the supplier, a complaint about measurement goes to E-REDES.',
          'When renting a flat, ask the landlord for a photo of the meter on the move-in day and move-out day.',
          'When changing occupant, always record the CPE and leitura, otherwise you may pay someone else’s tail-end consumption.',
          'If the meter is in a communal cabinet, ask the condomínio how to get access for a photo.',
          'To save money, look not only at kWh but also at potência contratada: unnecessary 6.9 kVA instead of 3.45/4.6 kVA creates a constant overpayment.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Scheduled E-REDES smart meter installation', amountEUR: 0, note: 'Should not be billed to the customer as a separate service.' },
    { label: 'Scheduled replacement of a faulty meter where the customer is not at fault', amountEUR: 0, note: 'Usually covered by the network operator.' },
    { label: 'Meter check in a dispute', amountEURMin: 0, amountEURMax: 100, note: 'The exact amount depends on the applicable tariffs and the outcome of the check; if a meter error is confirmed, the customer should not bear the costs.' }
  ],
  sources: [
    { title: 'E-REDES: smart meters, leituras and Balcão Digital', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: electricity consumer rights and commercial relationships', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: Livro de Reclamações and dispute resolution in the energy sector', url: 'https://www.erse.pt/consumidores/reclamacoes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
