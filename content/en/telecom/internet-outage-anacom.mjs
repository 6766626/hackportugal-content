export default {
  editorialVoice: 'hackportugal',
  id: 'internet-outage-anacom',
  categoryId: 'telecom',
  title: 'Complaint to ANACOM about a provider and contract termination',
  tldr: 'If fibra/internet in Portugal is not working, first log an avaria with the operator and get a número de avaria/protocolo. Under Lei 16/2022, if the service is unavailable for more than 24 hours due to the operator, compensation is due at least proportionally to the mensalidade. If the fault lasts more than 15 days after being reported, the consumer may terminate the contract without fidelização/penalty. ANACOM accepts complaints and supervises, but money is usually recovered through Livro de Reclamações and consumer arbitration.',
  tags: ['anacom', 'internet', 'complaint', 'fibra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'fix-proof',
      title: '1. Record the fault, not just “the internet went down”',
      content: [
        { kind: 'paragraph', text: 'In a dispute with MEO, NOS, Vodafone, NOWO or another operator, what matters is not emotion, but the date of the first avaria report. It is usually from that date that the 24 hours for compensation and the 15 days for the right to terminate the contract without penalty are counted.' },
        { kind: 'checklist', items: [
          'Call support or write in the app/área de cliente and open an avaria.',
          'Ask for the número de avaria or número de protocolo.',
          'Record the date, time, operator’s name and a brief description of the problem.',
          'Take screenshots of speedtest, router/ONT status, and errors in the operator’s app.',
          'Keep SMS/e-mail about the técnico visit and visit rescheduling.',
          'If only Wi-Fi is not working, the provider may dispute it; test with an Ethernet cable if possible.',
          'If the problem is general in the building/neighbourhood, ask neighbours to open an avaria too.',
          'Do not throw away the router/ONT and do not change equipment without the operator’s instruction.'
        ] },
        { kind: 'warning', text: 'Do not stop paying and do not cancel débito direto as a first step. The provider may charge a dívida, block services and pass the debt to a collector. First create a written trail: avaria, reclamação, pedido de compensação/resolução.' }
      ]
    },
    {
      id: 'rights',
      title: '2. What rights the law gives in 2026',
      content: [
        { kind: 'paragraph', text: 'The main law is Lei 16/2022, Lei das Comunicações Eletrónicas. For a household customer, two practical rules matter: compensation for service unavailability and the right to terminate the contract if the fault is not fixed for too long.' },
        { kind: 'checklist', items: [
          'If the service is unavailable for more than 24 hours — consecutive or accumulated within a billing period — for reasons attributable to the operator, the customer is entitled to compensation.',
          'The minimum compensation is the proportional part of the mensalidade for the period of unavailability; the contract may give more, but not less.',
          'The period during which the service was not provided should not be charged as a normal service.',
          'If the avaria lasts more than 15 days after being reported to the operator, the consumer may terminate the contract without encargos — that is, without a penalty for fidelização.',
          'The right applies to the service that is actually not being provided: fibra, TV, telefone fixo, pacote 3P/4P.',
          'If the operator proves that the breakdown was caused by the customer, their equipment, works in the flat or force majeure, compensation may be disputed.',
          'The SLA in the contract or ficha de informação simplificada may promise a specific prazo de reparação; if it is breached, demand that the contractual compensation be applied.',
          'Compensation is usually issued as crédito na fatura, not as a cash transfer.'
        ] },
        { kind: 'warning', text: 'It is safer to count the 15 days from the officially registered avaria, not from the first oral conversation saying “my signal is bad”. That is why the case number is critical.' }
      ]
    },
    {
      id: 'complaint-operator',
      title: '3. First send a written reclamação to the operator',
      content: [
        { kind: 'paragraph', text: 'Before ANACOM, it is better to send the operator a clear written demand. This speeds up a refund and creates evidence that you asked not just for a repair, but for compensation or termination.' },
        { kind: 'checklist', items: [
          'Go to the área de cliente or send an e-mail/message through the operator’s official channel.',
          'State the NIF titular do contrato, morada de instalação, customer number and avaria number.',
          'Write the date when the unavailability started and exactly what is not working.',
          'Demand reparação imediata and crédito proporcional na fatura for the period sem serviço.',
          'If more than 15 days have passed: explicitly write pedido de resolução do contrato sem encargos por indisponibilidade superior a 15 dias após comunicação da avaria.',
          'Ask for a written reply and the reclamação number.',
          'Attach screenshots, SMS about técnico rescheduling, photos of the ONT/router, speedtest.',
          'Keep a PDF/screenshot of the sent message.'
        ] },
        { kind: 'paragraph', text: 'Wording in Portuguese: “Solicito a reparação da avaria n.º ___, a compensação proporcional pela indisponibilidade do serviço superior a 24 horas e, caso a indisponibilidade exceda 15 dias desde a comunicação da avaria, a resolução do contrato sem encargos, nos termos da Lei n.º 16/2022.”' }
      ]
    },
    {
      id: 'anacom-livro',
      title: '4. Complaint: Livro de Reclamações and ANACOM',
      content: [
        { kind: 'paragraph', text: 'ANACOM is the communications regulator. It is useful when the operator systematically breaches the rules, does not reply, refuses compensation or tries to charge a fidelização penalty after a 15-day avaria. But ANACOM usually does not act as your lawyer and does not award individual compensation like a court.' },
        { kind: 'substeps', items: [
          { id: 'livro', title: 'Livro de Reclamações Eletrónico', content: [
            { kind: 'paragraph', text: 'Submit an official reclamação at livroreclamacoes.pt. The operator is obliged to receive the complaint and respond according to the required procedure. This is the most practical channel for a household dispute.' },
            { kind: 'checklist', items: [
              'Select sector: Comunicações eletrónicas.',
              'Select operador: MEO/NOS/Vodafone/NOWO, etc.',
              'Describe the facts by date: avaria aberta, visitas falhadas, dias sem serviço.',
              'State the demand: compensação, crédito na fatura, resolução sem encargos.',
              'Attach evidence if the form allows it.',
              'Keep the comprovativo da reclamação.'
            ] }
          ] },
          { id: 'anacom', title: 'ANACOM', content: [
            { kind: 'paragraph', text: 'Through the ANACOM website, you can submit an exposição/complaint to the regulator. The point is to record a breach of communications rules and make the operator explain itself to the supervisor.' },
            { kind: 'checklist', items: [
              'Attach a copy of the reclamação to the operator or Livro de Reclamações.',
              'Attach the contract/fatura and ficha contratual, if available.',
              'State the avaria number and the number of days without service.',
              'Write separately if the operator demands a penalização for fidelização despite 15+ days without service.',
              'Do not limit yourself to the phrase “internet lenta”; write “serviço indisponível” or specific speed measurements.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'ANACOM does not replace a tribunal arbitral. If you need a refund, cancellation of a debt or recognition of termination, a Centro de Arbitragem de Conflitos de Consumo will often be required.' }
      ]
    },
    {
      id: 'termination',
      title: '5. How to terminate without a penalty after 15 days',
      content: [
        { kind: 'paragraph', text: 'If the service is unavailable for more than 15 days after the avaria report, do not simply “stop using it”. Send a formal pedido de resolução. Otherwise the operator may consider the contract active and continue issuing faturas.' },
        { kind: 'checklist', items: [
          'Check that more than 15 days have passed since the date of the número de avaria/protocolo.',
          'Send a pedido de resolução do contrato sem encargos through the área de cliente, e-mail, loja with comprovativo, or carta registada.',
          'State that the reason is indisponibilidade do serviço superior a 15 dias após comunicação da avaria.',
          'Demand the contract end date and a final bill without penalização por fidelização.',
          'Ask for instructions on returning the router/ONT/box and the return deadline.',
          'Return the equipment against a receipt or keep the comprovativo de envio.',
          'Check the next fatura: there should be no fidelização penalty and no charge for the period sem serviço.',
          'If the penalty still arrives — Livro de Reclamações + ANACOM + pedido in consumer arbitration.'
        ] },
        { kind: 'warning', text: 'If mobile numbers are included in the pacote, the operator may try to keep the mobile part or change the price. In the statement, write whether you are terminating the entire pacote or only the fixed service, and ask for the new price calculation before agreeing.' }
      ]
    },
    {
      id: 'arbitration',
      title: '6. If the operator does not refund money or sends a debt',
      content: [
        { kind: 'paragraph', text: 'For an individual outcome, use the Centro de Arbitragem de Conflitos de Consumo for your place of residence or CNIACC. Telecom disputes for consumers are usually suitable for consumer arbitration, especially when the amount is small and the issue concerns faturas, a fidelização penalty or refusal to terminate.' },
        { kind: 'checklist', items: [
          'Gather the contract, faturas, avaria number, correspondence, Livro de Reclamações, and the operator’s reply.',
          'Calculate the amount: mensalidade/30 × days without service + unlawful penalty + incorrect faturas.',
          'Submit a pedido de mediação/arbitragem to the competent centre.',
          'Ask for the resolução sem encargos to be recognised, the dívida to be cancelled and a nota de crédito to be issued.',
          'If the debt is already with a collection agency, dispute the dívida in writing and attach the case number.',
          'Do not ignore cartas de injunção or court notices: there are short deadlines for oposição.'
        ] },
        { kind: 'paragraph', text: 'The practical minimum: avaria number, proof of 15+ days without service and a written demand to terminate without penalty. Without these three things, the dispute becomes much weaker.' }
      ]
    }
  ],
  costs: [
    { label: 'Complaint in Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Submitted online free of charge.' },
    { label: 'Complaint/exposição to ANACOM', amountEUR: 0, note: 'The regulatory channel is free of charge.' },
    { label: 'Carta registada with aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'CTT estimate; depends on weight and additional services.' }
  ],
  sources: [
    {
      title: 'ANACOM Portal do Consumidor — compensation for unavailability of a communications service',
      url: 'https://www.anacom-consumidor.pt/-/em-caso-de-avaria-os-consumidores-passam-a-ter-o-direito-de-serem-compensados-pela-indisponibilidade-dos-servicos-de-comunicacoes-eletronicas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Lei n.º 16/2022 — Lei das Comunicações Eletrónicas',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022-187481298',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações Eletrónico — complaint submission portal',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM: consumer information on reclamações',
      url: 'https://www.anacom-consumidor.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
