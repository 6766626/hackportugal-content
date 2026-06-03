export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — contacting AT online without a visit',
  tldr: 'e-Balcão is the Autoridade Tributária online ticketing system on Portal das Finanças: Suporte → e-Balcão.\n\nIn 2026, it is realistically possible to resolve most issues through it without visiting Finanças: NIF address, IRS, recibos verdes, IVA, IMI, IUC, certificates, declaration errors, notifications. A reply usually arrives within 5–10 working days; urgent matters are better duplicated by calling CAT. Each request is assigned a referência: you use it to track the status and attach documents.',
  tags: ['finanças', 'ebalcão', 'taxes', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What e-Balcão is and when it replaces a visit',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is the official channel for written requests to Autoridade Tributária e Aduaneira through Portal das Finanças. It is not a chat: you create a pedido de informação or reclamação simples, choose a topic, attach PDF/JPG files and wait for a reply in your personal area.' },
        { kind: 'paragraph', text: 'For an expat, this is the main way to communicate with Finanças without booking an appointment at an office. Practically all non-urgent questions about NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC and notifications can be started through e-Balcão.' },
        { kind: 'checklist', items: [
          'Changing or confirming morada fiscal if the system does not allow you to do it automatically',
          'Questions about IRS: declaração, divergências, reembolsos, notas de liquidação',
          'Opening, changing and closing atividade for recibos verdes',
          'Questions about IVA: enquadramento, declarações periódicas, isenção art. 53 CIVA',
          'Problems with IUC, IMI, AIMI, IMT and stamp duty Imposto do Selo',
          'Requesting certificates: certidão de domicílio fiscal, certidão de dívida e não dívida',
          'Replying to an AT letter or notification if it states a prazo',
          'Correcting errors in Portal das Finanças or taxpayer data'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to log in: Portal das Finanças → Suporte → e-Balcão',
      content: [
        { kind: 'paragraph', text: 'Open portaldasfinancas.gov.pt. Login is done with NIF and senha de acesso, or via Chave Móvel Digital (CMD), or Cartão de Cidadão. After logging in: menu Suporte → e-Balcão → Registar Nova Questão.' },
        { kind: 'checklist', items: [
          'Check that you are logged in under the correct NIF: your personal one, not a company’s or spouse’s NIF',
          'If the senha de acesso has been lost, request a new one on Portal das Finanças in advance: the letter with the code is sent to the tax address',
          'Before submitting a request, update your email and telefone in Dados Pessoais',
          'Scan documents as PDF; make photographs readable, without cropped edges',
          'Make file names clear: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'If the request is related to an AT notification, attach the notification itself and state the processo or documento number',
          'Write in Portuguese; a short machine translation is better than a long text in another language'
        ] },
        { kind: 'warning', text: 'e-Balcão is inside Portal das Finanças. Do not send NIF, senha de acesso and tax documents through links from SMS/WhatsApp/email. Phishing sites often copy the Finanças interface.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'How to create a request so it is not closed with a template reply',
      content: [
        { kind: 'paragraph', text: 'The main mistake is choosing a topic that is too general and writing “help”. An AT officer replies strictly within the selected category. The more precise the topic, dates, amounts and attached documents are, the higher the chance of getting a workable solution the first time.' },
        { kind: 'substeps', items: [
          {
            id: 'choose-topic',
            title: '1. Choose the topic and subcategory',
            content: [
              { kind: 'paragraph', text: 'In e-Balcão, you first choose the Imposto or área: IRS, IVA, IMI, IUC, Atividade, Cadastro, Pagamentos, Cobrança, Património, Benefícios fiscais. If in doubt, choose the category by tax, not “Outros”.' }
            ]
          },
          {
            id: 'write-request',
            title: '2. Write a short text',
            content: [
              { kind: 'checklist', items: [
                'Start with the point: “Pretendo corrigir a morada fiscal…”',
                'State the NIF, name and tax year if the question is about IRS',
                'State dates: date of entry, date of rental contract, date of recibo, date of notification',
                'State amounts in euros if the dispute is about pagamento, reembolso, liquidação',
                'Refer to the AT document number: referência, nota de liquidação, processo, declaração',
                'At the end, formulate the action: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Attach evidence',
            content: [
              { kind: 'paragraph', text: 'Usually a PDF of the contract, comprovativo de morada, declaração, recibo, bank confirmation or screenshot of the error is enough. Do not send unnecessary documents: this slows processing and increases the risk of a request for clarification.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Timelines, referência and monitoring the reply',
      content: [
        { kind: 'paragraph', text: 'After submission, e-Balcão assigns a referência to the request. Save it: with this number you check the status, reply to clarification requests and prove that you contacted them within the deadline.' },
        { kind: 'checklist', items: [
          'Normal reply time in 2026: around 5–10 working days',
          'For complex IRS, IVA, inheritance, IMI or international taxation questions, the timeframe may be longer',
          'Check the status and replies in e-Balcão → Consultar Questões',
          'If AT asks for additional documents, reply in the same ticket rather than creating a new one',
          'If the prazo in a notification is about to expire, do not wait silently: call CAT and, if necessary, book an appointment at a serviço de finanças',
          'Download or save a PDF/screenshot of the AT reply, especially if it affects IRS, IVA or a fine',
          'If the reply is clearly off topic, create a follow-up with the referência of the old request and briefly explain what was not resolved'
        ] },
        { kind: 'warning', text: 'An e-Balcão reply is not always a binding tax ruling. For an official binding tax interpretation, a pedido de informação vinculativa is used under the rules of the Lei Geral Tributária, not an ordinary e-Balcão ticket.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Common scenarios for expats',
      content: [
        { kind: 'paragraph', text: 'If you have just moved, e-Balcão is often needed even before your first IRS. It is a convenient way to record questions in writing when there are no appointments at Finanças offices or the counter officer gives a verbal answer that contradicts other information.' },
        { kind: 'checklist', items: [
          'NIF and morada fiscal: clarify address status, representative fiscal, confirmation of tax residency',
          'IRS: why income, rent, dependentes, despesas gerais familiares, saúde, educação were not pulled through',
          'Recibos verdes: which regime to choose, why it is not possible to emitir recibo, how to close atividade',
          'IVA: whether you need to submit declaração periódica, why a dívida appeared, how to correct enquadramento',
          'IMI/IMT: questions about buying property, caderneta predial, exemptions, notas de cobrança',
          'IUC: vehicle tax, linking matrícula, payment and fines',
          'Pagamentos: lost referência Multibanco, double payment, pedido de reembolso',
          'Notificações: what an AT letter means and what prazo applies for the reply'
        ] },
        { kind: 'paragraph', text: 'For simple technical questions, you can first try searching Portal das Finanças and the FAQ. But if the question relates to a deadline, amount, fine or your tax resident status, it is better to create an e-Balcão request: a written trail is more important than verbal advice.' }
      ]
    },
    {
      id: 'limits',
      title: 'When e-Balcão is not suitable',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is convenient, but it does not replace every procedure. Some actions require a separate form, confirmation through CMD/Cartão de Cidadão, in-person identification or filing with another authority.' },
        { kind: 'checklist', items: [
          'Urgent unblocking of access if there is no senha de acesso and no CMD',
          'A complex tax dispute where execução fiscal or a court deadline is already under way',
          'Requesting a binding tax opinion: informação vinculativa is required',
          'Questions for AIMA, Segurança Social, SNS, Câmara Municipal — these are not within AT’s competence',
          'Changing address for holders of Cartão de Cidadão is usually done through ePortugal/CMD, not by a simple ticket',
          'Submitting IRS, declaração periódica IVA and emissão de recibos verdes are done in the relevant portal sections; e-Balcão only helps with problems',
          'If a coima fine has already been assessed, a separate defesa, reclamação graciosa or pagamento with redução may be required'
        ] },
        { kind: 'warning', text: 'Do not use e-Balcão as a way to “extend a deadline”. If the legal prazo for replying, paying or submitting a declaration is expiring, the mere fact of asking a question in e-Balcão usually does not suspend the deadline.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — login and access to e-Balcão',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Apoio ao contribuinte and e-Balcão',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
