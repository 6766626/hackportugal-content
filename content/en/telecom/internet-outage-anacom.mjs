export default {
  editorialVoice: 'hackportugal',
  id: 'internet-outage-anacom',
  categoryId: 'telecom',
  title: 'Complaint to ANACOM about the provider and contract termination',
  tldr: 'If fibra/internet in Portugal is not working, first log an avaria with the operator and get the número de avaria/protocolo. Under Lei 16/2022, if the service is unavailable for more than 24 hours due to the operator, you are entitled to compensation at least proportional to the mensalidade. If the fault lasts more than 15 days after it is reported, the consumer may terminate the contract without fidelização/penalty. ANACOM accepts complaints and supervises, but money is usually recovered via the Livro de Reclamações and consumer arbitration.',
  tags: ['anacom', 'internet', 'complaint', 'fibre'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'fix-proof',
      title: '1. Record the avaria, not just “the internet is down”',
      content: [
        { kind: 'paragraph', text: 'In a dispute with MEO, NOS, Vodafone, NOWO or another operator, what matters is not emotion but the date of the first avaria report. That is what they usually use to count the 24 hours for compensation and the 15 days for the right to terminate the contract without a penalty.' },
        { kind: 'checklist', items: [
          'Call support or write in the app/área de cliente and open an avaria.',
          'Ask for the número de avaria or número de protocolo.',
          'Record the date, time, the agent’s name, and a brief description of the problem.',
          'Take screenshots of speed tests, router/ONT status, and errors in the operator’s app.',
          'Keep SMS/e-mails about técnico visits and any rescheduling.',
          'If only Wi‑Fi is not working, the provider may dispute it; test with an Ethernet cable if possible.',
          'If the issue is building/area‑wide, ask neighbours to open an avaria too.',
          'Do not discard the router/ONT or change equipment without the operator’s instruction.'
        ] },
        { kind: 'warning', text: 'Do not stop paying or cancel débito direto as a first step. The provider may add a dívida, block services, and send the debt to collections. First, create a paper trail: avaria, reclamação, pedido de compensação/resolução.' }
      ]
    },
    {
      id: 'rights',
      title: '2. What rights the law gives you in 2026',
      content: [
        { kind: 'paragraph', text: 'The main law is Lei 16/2022, Lei das Comunicações Eletrónicas. For a household customer, two practical rules matter: compensation for service unavailability and the right to terminate the contract if the fault is not fixed for too long.' },
        { kind: 'checklist', items: [
          'If the service is unavailable for more than 24 consecutive hours for reasons attributable to the operator, the client is entitled to compensation.',
          'The minimum compensation is the proportional part of the mensalidade for the period of unavailability; the contract may grant more, but not less.',
          'The period when the service was not provided should not be billed as normal service.',
          'If the avaria lasts more than 15 days after being reported to the operator, the consumer may terminate the contract without encargos — that is, without a fidelização penalty.',
          'The right applies to the service actually not being provided: fibre, TV, landline, 3P/4P package.',
          'If the operator proves the fault was caused by the client, their equipment, works in the flat, or force majeure, the compensation may be challenged.',
          'An SLA in the contract or ficha de informação simplificada may promise a specific prazo de reparação; if it is breached, demand application of the contractual compensation.',
          'Compensation is usually applied as a crédito na fatura, not a cash transfer.'
        ] },
        { kind: 'warning', text: 'It is safer to count 15 days from the officially registered avaria, not from the first verbal “my signal is bad” conversation. Hence the ticket number is critical.' }
      ]
    },
    {
      id: 'complaint-operator',
      title: '3. First, a written reclamação to the operator',
      content: [
        { kind: 'paragraph', text: 'Before ANACOM, send the operator a clear written demand. This speeds up refunds and creates evidence that you asked not just for a repair but for compensation or termination.' },
        { kind: 'checklist', items: [
          'Go to the área de cliente or send an e‑mail/message via the operator’s official channel.',
          'Provide the NIF do titular do contrato, morada de instalação, customer number, and the avaria number.',
          'State the start date of unavailability and what exactly is not working.',
          'Demand reparação imediata and a crédito proporcional na fatura for the period sem serviço.',
          'If more than 15 days have passed: explicitly write a pedido de resolução do contrato sem encargos por indisponibilidade superior a 15 dias após comunicação da avaria.',
          'Ask for a written reply and the reclamação number.',
          'Attach screenshots, SMS about técnico rescheduling, photos of the ONT/router, speed tests.',
          'Save a PDF/screenshot of what you sent.'
        ] },
        { kind: 'paragraph', text: 'Wording in Portuguese: “Solicito a reparação da avaria n.º ___, a compensação proporcional pela indisponibilidade do serviço superior a 24 horas e, caso a indisponibilidade exceda 15 dias desde a comunicação da avaria, a resolução do contrato sem encargos, nos termos da Lei n.º 16/2022.”' }
      ]
    },
    {
      id: 'anacom-livro',
      title: '4. Complaint: Livro de Reclamações and ANACOM',
      content: [
        { kind: 'paragraph', text: 'ANACOM is the telecoms regulator. It helps when an operator systematically breaks the rules, does not respond, refuses compensation, or tries to charge a fidelização penalty after a 15‑day+ avaria. But ANACOM usually does not act as your lawyer and does not award individual compensation like a court.' },
        { kind: 'substeps', items: [
          { id: 'livro', title: 'Livro de Reclamações Eletrónico', content: [
            { kind: 'paragraph', text: 'Submit an official reclamação on livroreclamacoes.pt. The operator must receive the complaint and reply within the set deadlines. This is the most practical channel for a household dispute.' },
            { kind: 'checklist', items: [
              'Choose sector: Comunicações eletrónicas.',
              'Choose the operator: MEO/NOS/Vodafone/NOWO, etc.',
              'Describe the facts by date: avaria opened, failed visits, days sem serviço.',
              'State your demand: compensação, crédito na fatura, resolução sem encargos.',
              'Attach evidence if the form allows.',
              'Save the comprovativo da reclamação.'
            ] }
          ] },
          { id: 'anacom', title: 'ANACOM', content: [
            { kind: 'paragraph', text: 'On the ANACOM website you can file an exposição/complaint to the regulator. The purpose is to record a breach of telecoms rules and force the operator to explain itself to the supervisor.' },
            { kind: 'checklist', items: [
              'Attach a copy of your reclamação to the operator or the Livro de Reclamações.',
              'Attach the contract/fatura and ficha contratual, if available.',
              'Provide the avaria number and the number of days without service.',
              'State separately if the operator is demanding a fidelização penalty despite 15+ days without service.',
              'Do not stop at “internet lenta”; write “serviço indisponível” or provide specific speed measurements.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'ANACOM does not replace the tribunal arbitral. If you need a refund, debt cancellation, or recognition of termination, you will often need the Centro de Arbitragem de Conflitos de Consumo.' }
      ]
    },
    {
      id: 'termination',
      title: '5. How to terminate without a penalty after 15 days',
      content: [
        { kind: 'paragraph', text: 'If the service is unavailable for more than 15 days after reporting the avaria, do not just “stop using it”. Send a formal pedido de resolução. Otherwise, the operator may treat the contract as active and keep issuing faturas.' },
        { kind: 'checklist', items: [
          'Check that more than 15 days have passed since the número de avaria/protocolo date.',
          'Send a pedido de resolução do contrato sem encargos via the área de cliente, e‑mail, loja with comprovativo, or carta registada.',
          'State that the reason is indisponibilidade do serviço superior a 15 dias após comunicação da avaria.',
          'Request the termination date and a final bill without penalização por fidelização.',
          'Ask for instructions and the deadline to return the router/ONT/box.',
          'Return equipment with a receipt or keep the comprovativo de envio.',
          'Check the next fatura: there should be no fidelização penalty and no charges for the sem serviço period.',
          'If a penalty still appears — Livro de Reclamações + ANACOM + a request to consumer arbitration.'
        ] },
        { kind: 'warning', text: 'If the pacote includes mobile numbers, the operator may try to keep the mobile part or change the price. In your request, state whether you are terminating the entire package or only the fixed service, and ask for the new price calculation before consenting.' }
      ]
    },
    {
      id: 'arbitration',
      title: '6. If the operator does not refund or sends you a debt claim',
      content: [
        { kind: 'paragraph', text: 'For an individual outcome, use the Centro de Arbitragem de Conflitos de Consumo in your area of residence or CNIACC. Consumer telecoms disputes are usually suitable for consumer arbitration, especially when the amount is small and concerns faturas, a fidelização penalty, or refusal to terminate.' },
        { kind: 'checklist', items: [
          'Gather the contract, faturas, avaria number, correspondence, Livro de Reclamações, and the operator’s response.',
          'Calculate the amount: mensalidade/30 × days without service + unlawful penalty + incorrect faturas.',
          'File a pedido de mediação/arbitragem with the competent centre.',
          'Ask to recognise resolução sem encargos, cancel the dívida, and issue a nota de crédito.',
          'If the debt is already with a collection agency, dispute the dívida in writing and attach the case number.',
          'Do not ignore cartas de injunção or court notices: short deadlines apply for oposição.'
        ] },
        { kind: 'paragraph', text: 'The practical minimum: the avaria number, proof of 15+ days without service, and a written demand to terminate without a penalty. Without these three, the case becomes much weaker.' }
      ]
    }
  ],
  costs: [
    { label: 'Complaint via Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Filed online free of charge.' },
    { label: 'Complaint/exposição to ANACOM', amountEUR: 0, note: 'Regulatory channel is free.' },
    { label: 'Carta registada com aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'CTT reference; depends on weight and add‑on services.' }
  ],
  sources: [
    {
      title: 'ANACOM Portal do Consumidor — compensation for unavailability of the electronic communications service',
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
      title: 'Livro de Reclamações Eletrónico — complaints submission portal',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM: consumer information about complaints',
      url: 'https://www.anacom-consumidor.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
