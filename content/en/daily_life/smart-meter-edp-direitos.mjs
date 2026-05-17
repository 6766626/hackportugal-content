export default {
  editorialVoice: 'hackportugal',
  id: 'smart-meter-edp-direitos',
  categoryId: 'daily_life',
  title: 'E-REDES smart meters: consumer rights',
  tldr: 'In Portugal, the electricity meter usually belongs to the network operator E-REDES, not to EDP Comercial and not to the tenant. The mass replacement with smart meters was due to be completed by E-REDES by the end of 2024; in 2026 installation and scheduled replacement are free for the customer. A smart meter provides telecontagem: automatic readings, fewer estimativas, and online consumption viewing. But accuracy can be challenged, access to data is regulated by ERSE/GDPR, and suppliers are not allowed to impose a new tariff “because of the meter”.',
  tags: ['edp', 'e-redes', 'meters', 'electricity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-is-who',
      title: 'Who is responsible: E-REDES ≠ EDP Comercial',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is an electricity supplier — for example EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy — and a distribution network operator. In most of mainland Portugal the operator is E-REDES. It is E-REDES that manages the meter, meter readings, equipment replacement and technical faults.' },
        { kind: 'checklist', items: [
          'Your electricity contract and bill are with your comercializador: EDP Comercial, Endesa, Galp, etc.',
          'The meter, leitura, avaria, potência contratada at technical level are in the E-REDES area.',
          'CPE is the supply point code, usually starting with PT; it is needed for requests and switching supplier.',
          'A smart meter does not tie you to EDP: you can change supplier.',
          'An E-REDES employee must have identification; they should not sell tariffs on site.',
          'If someone calls you “from EDP/E-REDES” and demands that you sign a new contract because of a smart meter — that is a reason to check through an official contact.'
        ] }
      ]
    },
    {
      id: 'installation-rights',
      title: 'Installation and replacement: what is free ✅',
      content: [
        { kind: 'paragraph', text: 'The scheduled replacement of an analogue meter with a contador inteligente is part of network modernisation. For a standard baixa tensão normal customer it should not cost money: E-REDES replaces the equipment as the network operator. The mass E-REDES rollout was planned to be completed by the end of 2024, so in 2026 an analogue meter is already an exception: an old house, closed access, a technical problem or communications not yet activated.' },
        { kind: 'checklist', items: [
          'Scheduled smart meter installation — €0 for the customer.',
          'Replacement of a faulty meter, if the customer is not at fault — €0.',
          'You do not need to enter into a new contract with EDP Comercial just because of a new meter.',
          'If the meter is inside the flat/house, E-REDES may ask for access at an agreed time.',
          'If the meter is outside, replacement often takes place without your involvement.',
          'After installation, check the meter number and CPE in the documents/customer area.',
          'Photograph the old and new readings on the day of replacement.',
          'If the bill rose sharply after replacement, do not wait 3 months: request a check of the leituras immediately.'
        ] },
        { kind: 'warning', text: 'What is free is the scheduled technical replacement. If you yourself ask to move the meter, change the supply entry, increase the potência contratada with work in the switchboard or redo the instalação elétrica, this may cost money and be carried out through an electrician/certification.' }
      ]
    },
    {
      id: 'data-and-telecounting',
      title: 'Telecontagem and access to data',
      content: [
        { kind: 'paragraph', text: 'A smart meter in itself does not always mean active telecontagem yet. The meter must be integrated into the smart grid. When it is active, readings are sent automatically, and bills depend less on estimativas. In the E-REDES Balcão Digital and with some suppliers, you can view consumption history — usually by day, and where data is available, over shorter intervals as well.' },
        { kind: 'checklist', items: [
          'Check the telecontagem status in the E-REDES Balcão Digital by CPE.',
          'If telecontagem is active, you usually do not need to submit a monthly leitura.',
          'If telecontagem is not yet active, continue submitting readings to the supplier or E-REDES during the period indicated on the bill.',
          'Detailed consumption data is personal data: its use is regulated by ERSE and GDPR.',
          'The supplier receives the data needed for billing; extended access and analytics services may require consent.',
          'You can request access to your data through E-REDES and the supplier customer area.',
          'For local real-time monitoring, some meters support HAN/local port; availability depends on the model and E-REDES activation.',
          'If the data in the EDP Comercial and E-REDES apps differs, first check the CPE, billing period and type of leitura: real, estimada or corrigida.'
        ] },
        { kind: 'warning', text: 'Do not give strangers your CPE, NIF, IBAN and SMS codes “to activate the smart meter”. Smart meter installation does not require your bank code and does not require a new tariff contract.' }
      ]
    },
    {
      id: 'opt-in-opt-out',
      title: 'Consent, refusal and privacy',
      content: [
        { kind: 'paragraph', text: 'The meter is part of the distribution network, so a scheduled equipment replacement cannot be treated as an ordinary “optional” commercial service. E-REDES has the right to maintain and replace metering equipment. But the consumer retains rights to information, personal data protection, access to their readings and restriction of commercial use of detailed data.' },
        { kind: 'checklist', items: [
          'You have the right to know who has arrived, from which company, why the meter is being changed and which CPE is affected.',
          'You have the right to receive confirmation of the installation and the final readings of the old/new meter.',
          'You have the right to refuse a supplier marketing offer, even if it is linked to a smart meter.',
          'You have the right to ask the supplier or E-REDES to explain which data is used for the bill.',
          'You have the right to withdraw consent for additional commercial services if they are not mandatory for billing and network operation.',
          'You have the right to complain in the Livro de Reclamações and to ERSE if data is used non-transparently.',
          'You are not obliged to pay a “taxa de contador inteligente” for the mere fact of installation.'
        ] },
        { kind: 'warning', text: 'A full “opt-out” from the metering device itself is limited in practice: the network operator must have a functioning meter to measure consumption. If the issue is privacy, ask not for removal, but for an explanation of the data regime, telecontagem and consents.' }
      ]
    },
    {
      id: 'accuracy-disputes',
      title: 'If the meter is wrong or the bill has become suspicious',
      content: [
        { kind: 'paragraph', text: 'A sharp increase in the bill after smart meter installation is often not due to an “accelerated meter”, but to the end of estimativas: the old bill may have been underestimated for months, and then a correção arrived. But an error cannot be ruled out. Act in writing and keep photos of the display.' },
        { kind: 'substeps', items: [
          { id: 's1-compare', title: '1. Compare the bill and the actual readings', content: [
            { kind: 'checklist', items: [
              'Find the type of leitura on the bill: real, estimada or corrigida.',
              'Photograph the meter display with the date.',
              'Compare the CPE and meter number on the bill.',
              'Check the period: sometimes the bill covers more than 30 days.',
              'Check the potência contratada and tariff: simples, bi-horário, tri-horário.'
            ] }
          ] },
          { id: 's2-contact', title: '2. Write to the supplier and E-REDES', content: [
            { kind: 'paragraph', text: 'The supplier is responsible for the bill and payment, E-REDES for measurement data. In the request, state your NIF, CPE, bill number, replacement date, photos of the readings and what exactly you dispute: leitura, consumo, potência or avaria.' }
          ] },
          { id: 's3-verification', title: '3. Request a meter check', content: [
            { kind: 'paragraph', text: 'If the dispute is not resolved by reconciling the data, you can request a technical check/verification of the meter. Under sector rules, if the device is outside the permitted margin of error, the costs and adjustment should not fall on the customer; if the meter is working correctly, the check may be charged to the customer according to the applicable tariffs.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not stop paying the whole bill without a strategy: debt may lead to a disconnection procedure. It is safer to pay the undisputed part, open a reclamação and request in writing the suspensão/adjustment of the disputed amount.' }
      ]
    },
    {
      id: 'analog-quirks',
      title: 'What changes after an analogue meter',
      content: [
        { kind: 'paragraph', text: 'The main change is fewer manual leituras and fewer surprises from estimativas. But the first months after replacement can be “messy”: closing the old period, correction of accumulated estimates, communications activation not on the same day.' },
        { kind: 'checklist', items: [
          'After installation, keep a photo of the old leitura: this protects against an incorrect correção.',
          'Check the first and second bill after replacement especially carefully.',
          'If telecontagem is not active, continue submitting readings manually.',
          'Do not confuse EDP Comercial with E-REDES: a complaint about the bill goes to the supplier, a complaint about measurement goes to E-REDES.',
          'When renting a flat, ask the landlord for a photo of the meter on the move-in day and move-out day.',
          'When changing occupant, always record the CPE and leitura, otherwise you may pay someone else’s leftover consumption.',
          'If the meter is in a shared cabinet, ask the condomínio how to get access for a photo.',
          'To save money, look not only at kWh but also at potência contratada: unnecessary 6.9 kVA instead of 3.45/4.6 kVA creates a constant overpayment.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Scheduled E-REDES smart meter installation', amountEUR: 0, note: 'Should not be charged to the customer as a separate service.' },
    { label: 'Scheduled replacement of a faulty meter without customer fault', amountEUR: 0, note: 'Usually covered by the network operator.' },
    { label: 'Meter check in a dispute', amountEURMin: 0, amountEURMax: 100, note: 'The exact amount depends on the applicable tariffs and the result of the check; if a meter error is confirmed, the customer should not bear the costs.' }
  ],
  sources: [
    { title: 'E-REDES: smart meters, readings and Balcão Digital', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: electricity consumer rights and commercial relations', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: Livro de Reclamações and dispute resolution in the energy sector', url: 'https://www.erse.pt/consumidores-de-energia/pedidos-de-informacao-reclamacoes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
