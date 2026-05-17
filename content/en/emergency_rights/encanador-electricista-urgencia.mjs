export default {
  editorialVoice: 'hackportugal',
  id: 'encanador-electricista-urgencia',
  categoryId: 'emergency_rights',
  title: 'Plumber and electrician — who to call in a 24/7 emergency',
  tldr: 'If a pipe bursts or there is a short circuit in Portugal, first turn off the water/electricity and check the apólice do seguro: home assistance in seguro multirriscos may pay for the call-out or provide its own contractor. A private encanador/electricista 24/7 usually charges €60–120/hour + deslocação + IVA 23%, with higher rates at night/weekends. Before paying, require the price in writing, the company NIF, fatura/recibo and do not agree to “diagnostics” without a limit.',
  tags: ['emergency', 'encanador', 'electricista', 'seguro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'first-minutes',
      title: 'First 5 minutes: stop the damage',
      content: [
        { kind: 'paragraph', text: 'Before calling a tradesperson, your task is not to “repair” but to reduce damage and avoid creating a risk to life. In an apartment building, immediately warn the neighbours below and the condomínio/administrador if water may be coming through shared risers.' },
        { kind: 'checklist', items: [
          'Burst water pipe: turn off the torneira de segurança at the appliance or the main registro/torneira de corte da água in the flat.',
          'Flooding from a riser or shared pipes: call the condomínio/administrador, because this may be responsabilidade do condomínio.',
          'Sparks, burning smell, quadro elétrico tripping: switch off the disjuntor geral and do not switch it back on until it has been inspected.',
          'Water has reached sockets/the fuse board: do not touch wet switches; only switch off the main circuit breaker with dry hands if it is safe.',
          'Smell of gas: do not call an “electrician to check”, do not turn on lights, open windows, turn off the gas and call 112 or the gas supplier’s emergency line.',
          'Take photos/videos before cleaning up: the location of the incident, meters, damage, time and date — this is needed for seguro.',
          'If you are a tenant: immediately write to the senhorio/agency on WhatsApp/email so that the notification is recorded.'
        ] },
        { kind: 'warning', text: 'Do not agree to opening walls, replacing the fuse board or a “complete overhaul” at night without a written orçamento. An emergency tradesperson should deal with the emergency, not sell a major renovation under pressure.' }
      ]
    },
    {
      id: 'who-to-call',
      title: 'Who to call: private tradesperson, platform or insurance',
      content: [
        { kind: 'paragraph', text: 'In Portugal, emergency plumbers are found using searches such as canalizador 24 horas, piquete canalização, desentupimento urgente; electricians — electricista 24 horas, avaria elétrica, piquete elétrico. Encanador is a Brazilian word; in Portugal people more often say canalizador, but many tradespeople understand both terms.' },
        { kind: 'substeps', items: [
          { id: 'insurance-first', title: '1. Check seguro first', content: [
            { kind: 'paragraph', text: 'If you have seguro multirriscos habitação or tenant insurance with assistência ao lar, call the insurer’s emergency line before a private tradesperson. The policy may cover the call-out, a temporary leak repair, door opening, an electrician, a locksmith, or send a contractor without prepayment.' }
          ] },
          { id: 'platforms', title: '2. If insurance does not help — platforms', content: [
            { kind: 'paragraph', text: 'For searches, use Habitissimo, Fixando, Zaask, PortugalMaster, Google Maps and local Facebook/WhatsApp groups. Platforms have the advantage of reviews and written messages; the downside is that at night fewer tradespeople are available, and the price must still be confirmed by the specific provider.' }
          ] },
          { id: 'building-admin', title: '3. In a flat — call the condomínio', content: [
            { kind: 'paragraph', text: 'If the emergency is connected with shared pipes, coluna montante, the roof, façade, shared fuse board or a meter in a shared area, a private tradesperson can only stop the damage temporarily. Permanent repair must be organised by the condomínio or entidade gestora.' }
          ] }
        ] }
      ]
    },
    {
      id: 'price-check',
      title: 'Price before the call-out: what to ask by phone',
      content: [
        { kind: 'paragraph', text: 'A typical emergency call-out by a private plumber or electrician in 2026: €60–120/hour for labour. Deslocação, taxa de urgência, a night/weekend surcharge, materials and IVA 23% may be added separately. In Lisbon, Porto and the Algarve, urgent call-outs are usually closer to the upper end.' },
        { kind: 'checklist', items: [
          'How much is the deslocação to my address?',
          'How much is 1 hour of labour and what is the minimum charge: 1 hour, 2 hours or a fixed package?',
          'Is there a taxa de urgência for noite, fim de semana or feriado?',
          'Does the price include IVA 23% or will IVA be added on top?',
          'How much does diagnosis cost if I refuse the repair?',
          'What is the price of a standard part: torneira, sifão, tubo flexível, disjuntor, tomada?',
          'Can you send an orçamento or at least a price range on WhatsApp before the call-out?',
          'Do you issue a fatura/recibo with NIF and a description of the work?',
          'What guarantee is there on the work carried out and materials?',
          'Will the tradesperson come from a company or as a trabalhador independente with recibos verdes?'
        ] },
        { kind: 'warning', text: 'The phrase “we will look now and tell you later” without a price for the call-out and diagnosis is a red flag. At minimum, record in a message: deslocação, hourly rate, IVA, night surcharge and a limit on work without your separate consent.' }
      ]
    },
    {
      id: 'before-paying',
      title: 'Before paying: documents and signs of a proper tradesperson',
      content: [
        { kind: 'paragraph', text: 'Paying cash without a fatura is risky: insurance may refuse reimbursement, and in a dispute you will have no evidence. Even if the repair is small, ask for a document from the company or a recibo from the self-employed provider.' },
        { kind: 'checklist', items: [
          'Company name or name of the prestador de serviços and NIF.',
          'Phone, email or morada for a complaint after the repair.',
          'Fatura/recibo with the date, property address and description of the work.',
          'Separation of “mão de obra”, “deslocação”, “materiais”, “IVA”.',
          'Photo of the replaced part and, if possible, the old part left with you until the insurance matter is closed.',
          'For electrical work: the tradesperson must not bypass protection, fit “bugs”, disconnect earthing or increase circuit breakers without checking the cable.',
          'For plumbing: after the repair, check for leaks for 10–15 minutes with the water running and ask to be shown exactly what was replaced.',
          'Payment by MB WAY/transferência is better than cash: a payment trail remains.',
          'If you pay cash, a fatura is still mandatory; ask for “pago em numerário” to be stated.'
        ] },
        { kind: 'warning', text: 'Do not hand over a bank card “as a deposit” and do not pay the full amount in advance to an unfamiliar tradesperson. A small advance for a rare part is acceptable, but with written confirmation and the recipient’s NIF.' }
      ]
    },
    {
      id: 'insurance-claims',
      title: 'Seguro and disputes: how to recover money or complain',
      content: [
        { kind: 'paragraph', text: 'If the damage is covered by the policy, the insurer usually asks for fotos, participação do sinistro, fatura/recibo, the tradesperson’s report and sometimes a declaração do condomínio or neighbour. The sooner you call the insurer, the lower the risk that expenses will be treated as “unauthorised”.' },
        { kind: 'checklist', items: [
          'Open the apólice and find the coberturas: danos por água, riscos elétricos, assistência ao lar, responsabilidade civil.',
          'Call the insurer’s linha de assistência 24h and ask for the processo/sinistro number.',
          'Check the plafond: limit for call-out, labour hours, materials, number of call-outs per year.',
          'Do not throw away damaged parts until the insurer authorises it, if this is safe.',
          'Collect before/after photos, video of the leak or fuse board, messages with the tradesperson and recibo.',
          'If the emergency came from the neighbour above, record the neighbour’s contact details and their insurer.',
          'If shared parts of the building are at fault, request the seguro do condomínio details from the condomínio.',
          'In a dispute with the tradesperson, first make a written complaint by email/WhatsApp, then use the Livro de Reclamações.'
        ] },
        { kind: 'paragraph', text: 'Livro de Reclamações Eletrónico is suitable for a complaint against a registered service provider. If the company does not issue a fatura or pushes for payment without a document, you can also complain to the Autoridade Tributária e Aduaneira and ASAE, but in practical terms for reimbursement it is more important to save evidence immediately and not pay disputed “extras” without a breakdown.' }
      ]
    }
  ],
  costs: [
    { label: 'Emergency plumber/electrician', amountEURMin: 60, amountEURMax: 120, note: 'Usual hourly range for labour on an urgent call-out; deslocação, night surcharge, materials and IVA 23% may be separate.' },
    { label: 'IVA on domestic repairs', amountEUR: 23, note: 'The standard IVA rate in mainland Portugal is 23%; check whether it is included in the quoted price.' },
    { label: 'Home assistance through seguro', amountEURMin: 0, amountEURMax: 50, note: 'A policy call-out is often free or subject to an excess/limit; it depends on the apólice and plafond.' }
  ],
  sources: [
    { title: 'DECO PROteste — consumer rights for home services and repairs', url: 'https://www.deco.proteste.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — official filing of complaints against service providers', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE — information for electricity consumers and emergency situations', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária e Aduaneira — faturas, NIF and tax documents', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
