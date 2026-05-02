export default {
  editorialVoice: 'hackportugal',
  id: 'cancel-telecom-fidelizacao',
  categoryId: 'telecom',
  title: 'Cancelling a telecoms contract via cessacaodecontratos.pt',
  tldr: 'cessacaodecontratos.pt is the official portal for cancelling contracts with Vodafone, MEO, NOS, NOWO and other telecoms operators. Login is via Chave Móvel Digital or Cartão de Cidadão. You can first request “informação contratual”: the operator must reply within 3 working days and show the fidelização period, end date and penalty. If there is fidelização, the early-exit charge is limited by law: only proportional costs/benefits actually stated in the contract, not an arbitrary “remaining subscription fee”.',
  tags: ['telecoms', 'fidelização', 'contract', 'anacom'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-portal-does',
      title: 'What cessacaodecontratos.pt does',
      content: [
        { kind: 'paragraph', text: 'cessacaodecontratos.pt is a single online point for terminating electronic communications contracts: internet, TV, mobile, fixed telephone and 3P/4P/5P bundles. The portal does not “argue” with the operator for you, but it legally records the request and forwards it to the provider.' },
        { kind: 'checklist', items: [
          'you can request information about the current contract before cancellation',
          'you can submit the cessação do contrato request itself',
          'authentication via Chave Móvel Digital (CMD) or Cartão de Cidadão is required',
          'suitable for individuals and small customers if the contract is in your NIF',
          'the operator replies through the portal / contact details given in the request',
          'the request leaves a record: date, operator, service, type of action',
          'if the operator ignores it or calculates the penalty incorrectly — the next step is a complaint in the Livro de Reclamações and to ANACOM'
        ] },
        { kind: 'warning', text: 'The portal does not cancel debt on bills already issued. If there are unpaid faturas, the operator may continue collection even after cancellation.' }
      ]
    },
    {
      id: 'prepare-before-login',
      title: 'What to prepare before logging in 🔐',
      content: [
        { kind: 'paragraph', text: 'The most common mistake is clicking “cancelar” without understanding whether there is fidelização and how much it costs to leave. First gather the contract details and request contractual information.' },
        { kind: 'checklist', items: [
          'Chave Móvel Digital is active and linked to a Portuguese number; or you have Cartão de Cidadão + card reader',
          'NIF of the contract holder',
          'customer / conta / contrato number with the operator',
          'installation address of the service, if it is home internet or TV',
          'current email and phone number for the operator’s reply',
          'latest fatura PDF — it usually contains the número de cliente and billing period',
          'if you are moving — the new address and moving date',
          'if cancelling because the holder has died — certidão de óbito and documents of the heir/representative',
          'if cancelling due to a change in circumstances — supporting documents: desemprego, incapacidade, emigration, lack of coverage at the new address'
        ] },
        { kind: 'warning', text: 'If the contract is not in your name, your CMD will not help: the request must be submitted by the titular do contrato or an authorised representative. For a spouse/neighbour/former tenant, the portal does not “reassign” the contract.' }
      ]
    },
    {
      id: 'request-contract-info',
      title: 'First request informação contratual',
      content: [
        { kind: 'paragraph', text: 'On cessacaodecontratos.pt, choose the option to request information about the contract, not immediate cancellation. This is a safe step: it does not disconnect the service, but it forces the operator to disclose the key terms.' },
        { kind: 'checklist', items: [
          'go to cessacaodecontratos.pt',
          'choose authentication via Chave Móvel Digital or Cartão de Cidadão',
          'choose the operator: Vodafone, MEO, NOS, NOWO or another available provider',
          'state the service: móvel, internet fixa, TV, telefone fixo or pacote',
          'enter the customer/contract number and contact details',
          'choose pedido de informação contratual',
          'send the request and save the comprovativo / referência'
        ] },
        { kind: 'paragraph', text: 'The operator must reply within 3 working days. The reply should contain details of the contract term, whether there is fidelização, the end date of the loyalty period, the amount of encargos por cessação antecipada and the method for returning equipment.' },
        { kind: 'warning', text: '3 working days is not “3 calendar days”. Weekends and public holidays do not count. If there is no reply, save the comprovativo and submit a complaint through the Livro de Reclamações Eletrónico, attaching evidence.' }
      ]
    },
    {
      id: 'understand-fidelizacao-penalty',
      title: 'How to check the fidelização penalty',
      content: [
        { kind: 'paragraph', text: 'In Portugal, fidelização in telecoms contracts usually cannot be longer than 24 months. The operator must offer options with no fidelização or with a shorter term, but they are often more expensive. A new fidelização period does not arise silently: it requires your consent, for example with an upgrade, a new discount, new equipment or a change of bundle.' },
        { kind: 'paragraph', text: 'If you leave before the end of the fidelização, the operator may charge encargos por cessação antecipada. But this is not an arbitrary amount and is not always “all remaining months”. Under Lei 16/2022, the charge must be linked to the benefits you actually received and/or the operator’s costs for installation, activation, equipment or promotional conditions stated in the contract. The amount must decrease proportionally according to the remaining term.' },
        { kind: 'checklist', items: [
          'check the start date and end date of the fidelização',
          'check which “vantagens” are stated in the contract: discount, instalação grátis, ativação grátis, router, box, oferta de mensalidades',
          'ask for a detailed penalty calculation, not a single “penalização” line',
          'compare: how many months remain and how the proportion is calculated',
          'if the operator counts all remaining mensalidades — demand the legal basis and a breakdown',
          'if the fidelização has already ended — there should be no early-cancellation penalty',
          'after the fidelização ends, the contract may continue, but you have the right to cancel it with the usual notice under the contract terms',
          'save the operator’s PDF reply: it will be useful in a dispute'
        ] },
        { kind: 'warning', text: 'Returning equipment is a separate issue. Even if the fidelização penalty is €0, the operator may charge the cost of the router/box/ONT if you do not return them on time and according to the operator’s procedure.' }
      ]
    },
    {
      id: 'submit-cancellation',
      title: 'Submitting cancellation through the portal',
      content: [
        { kind: 'paragraph', text: 'Once the amount is clear, submit the pedido de cessação. In the form, state the date from which you want the service to end and the reason. If the reason gives you the right to leave without a penalty, attach the documents immediately.' },
        { kind: 'checklist', items: [
          'choose pedido de cessação do contrato',
          'state the same NIF and customer number as in the contract',
          'choose the services you are terminating: the whole bundle or a separate SIM/service',
          'state the desired disconnection date',
          'if there is a special ground — attach a document: moving home, death, unemployment, incapacidade, lack of coverage',
          'ask for written confirmation of the cessação date and final amount',
          'save the submission comprovativo',
          'after disconnection, check the final fatura',
          'return the equipment and obtain confirmation of return'
        ] },
        { kind: 'paragraph', text: 'For home internet and TV, the operator usually requires equipment to be returned at a loja, CTT point or via courier — it depends on the company. Do not throw away boxes, serial numbers and comprovativo de entrega until the final bill is closed.' },
        { kind: 'warning', text: 'If you are porting a number to another operator, do not manually cancel the mobile contract before portabilidade is complete. Otherwise you may lose the number. First arrange the porting with the new operator, then close any remaining services.' }
      ]
    },
    {
      id: 'if-operator-refuses',
      title: 'If the operator delays, does not reply or inflated the amount',
      content: [
        { kind: 'paragraph', text: 'Act in writing. A phone call to the call centre is almost useless for a dispute: ask for a case number and confirmation by email/SMS.' },
        { kind: 'checklist', items: [
          'save the comprovativo from cessacaodecontratos.pt',
          'save the operator’s reply or proof that there was no reply within 3 working days',
          'ask for a detailed calculation of encargos por cessação antecipada',
          'compare the calculation with the contract and Lei 16/2022',
          'submit a reclamação in the Livro de Reclamações Eletrónico',
          'state that the dispute concerns cessação de contrato and fidelização',
          'attach faturas, the contract, the operator’s reply and the portal comprovativo',
          'if the dispute over the amount is large — contact a Centro de Arbitragem de Conflitos de Consumo',
          'in parallel, you can report the situation to ANACOM, especially if there is a systemic breach'
        ] },
        { kind: 'warning', text: 'Do not cancel the débito direto at the bank as the only way to “terminate the contract”. This does not end the contract; it creates dívida, juros and the risk of the debt being passed to a collection agency.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Submitting a request on cessacaodecontratos.pt',
      amountEUR: 0,
      note: 'The portal itself is free; you only need active CMD or Cartão de Cidadão.'
    },
    {
      label: 'Early cancellation while fidelização is in force',
      amountEURMin: 0,
      amountEURMax: 999,
      note: 'There is no universal tariff. The amount depends on the remaining term and the benefits/costs stated in the contract; by law it must be proportional and justified.'
    },
    {
      label: 'Failure to return router/box/ONT',
      amountEURMin: 50,
      amountEURMax: 300,
      note: 'Market guide only; the exact amount depends on the operator and equipment. Always obtain comprovativo of return.'
    }
  ],
  sources: [
    {
      title: 'Official contract cancellation portal cessacaodecontratos.pt',
      url: 'https://www.cessacaodecontratos.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM Consumidor: how to cancel your communications contract',
      url: 'https://www.anacom-consumidor.pt/-/sabe-como-cancelar-o-seu-contrato-de-comunicacoes-',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 16/2022 — Lei das Comunicações Eletrónicas',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022-185423463',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
