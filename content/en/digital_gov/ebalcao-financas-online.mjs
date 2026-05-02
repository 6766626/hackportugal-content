export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — dealing with AT online without a visit',
  tldr: 'e-Balcão is the Autoridade Tributária online ticketing system on Portal das Finanças: Suporte → e-Balcão. In 2026, it can realistically resolve most issues without a visit to Finanças: NIF address, IRS, recibos verdes, IVA, IMI, IUC, certificates, declaration errors, notifications. A reply usually arrives within 5–10 working days; urgent matters are better duplicated with a call to CAT. Each request is assigned a referência: you use it to track the status and attach documents.',
  tags: ['finanças', 'ebalcão', 'taxes', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What e-Balcão is and when it replaces a visit',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is the official channel for written enquiries to Autoridade Tributária e Aduaneira via Portal das Finanças. It is not a chat: you create a pedido de informação or reclamação simples, choose a subject, attach PDF/JPG files and wait for a reply in your personal account.' },
        { kind: 'paragraph', text: 'For an expat, this is the main way to communicate with Finanças without booking an appointment at a branch. Practically all non-urgent questions about NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC and notifications can be started via e-Balcão.' },
        { kind: 'checklist', items: [
          'Changing or confirming morada fiscal if the system does not allow you to do it automatically',
          'IRS questions: declaração, divergências, reembolsos, notas de liquidação',
          'Opening, changing and closing atividade for recibos verdes',
          'IVA questions: enquadramento, declarações periódicas, isenção art. 53 CIVA',
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
          'Check that you are logged in under the correct NIF: your personal one, not a company or spouse’s NIF',
          'If the senha de acesso has been lost, request a new one on Portal das Finanças in advance: the letter with the code is sent to the tax address',
          'Before submitting a request, update your email and telefone in Dados Pessoais',
          'Scan documents as PDF; make photos readable, without cropped edges',
          'Use clear file names: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'If the request relates to an AT notification, attach the notification itself and state the processo or documento number',
          'Write in Portuguese; a short machine translation is better than a long text in Russian'
        ] },
        { kind: 'warning', text: 'e-Balcão is inside Portal das Finanças. Do not send NIF, senha de acesso or tax documents through links from SMS/WhatsApp/email. Phishing sites often copy the Finanças interface.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'How to create a request so it is not closed with a template reply',
      content: [
        { kind: 'paragraph', text: 'The main mistake is choosing a subject that is too general and writing “please help”. AT staff reply strictly within the selected category. The more precise the subject, dates, amounts and attached documents, the higher the chance of getting a workable solution on the first attempt.' },
        { kind: 'substeps', items: [
          {
            id: 'choose-topic',
            title: '1. Choose the subject and subcategory',
            content: [
              { kind: 'paragraph', text: 'In e-Balcão, first choose the Imposto or área: IRS, IVA, IMI, IUC, Atividade, Cadastro, Pagamentos, Cobrança, Património, Benefícios fiscais. If in doubt, choose the category by tax, not “Outros”.' }
            ]
          },
          {
            id: 'write-request',
            title: '2. Write a short text',
            content: [
              { kind: 'checklist', items: [
                'Start with the core point: “Pretendo corrigir a morada fiscal…”',
                'State the NIF, name and tax year if the question is about IRS',
                'State dates: date of entry, date of the rental contract, date of the recibo, date of the notification',
                'State amounts in euros if the dispute concerns pagamento, reembolso, liquidação',
                'Refer to the AT document number: referência, nota de liquidação, processo, declaração',
                'At the end, formulate the action: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Attach evidence',
            content: [
              { kind: 'paragraph', text: 'Usually a PDF of the contract, comprovativo de morada, declaração, recibo, bank confirmation or a screenshot of the error is enough. Do not send unnecessary documents: this slows processing and increases the risk of requests for clarification.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Timeframes, referência and checking the reply',
      content: [
        { kind: 'paragraph', text: 'After submission, e-Balcão assigns a referência to the request. Save it: this number is how you check the status, reply to clarification requests and prove that you contacted AT within the deadline.' },
        { kind: 'checklist', items: [
          'Normal reply time in 2026: about 5–10 working days',
          'For complex IRS, IVA, inheritance, IMI or international taxation questions, the timeframe may be longer',
          'Check the status and replies in e-Balcão → Consultar Questões',
          'If AT asks for additional documents, reply in the same ticket rather than creating a new one',
          'If the prazo in a notification is expiring, do not wait silently: call CAT and, if necessary, book an appointment at a serviço de finanças',
          'Download or save a PDF/screenshot of the AT reply, especially if it affects IRS, IVA or a fine',
          'If the reply is clearly off-topic, create a follow-up with the referência of the old request and briefly explain what was not resolved'
        ] },
        { kind: 'warning', text: 'An e-Balcão reply is not always a binding tax ruling. For an official binding tax interpretation, use pedido de informação vinculativa under the rules of Lei Geral Tributária, not an ordinary e-Balcão ticket.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Typical scenarios for expats',
      content: [
        { kind: 'paragraph', text: 'If you have just moved, e-Balcão is often needed even before the first IRS. It is a convenient way to record questions in writing when Finanças branches have no appointments or a counter officer gives a contradictory verbal answer.' },
        { kind: 'checklist', items: [
          'NIF and morada fiscal: clarify the address status, representative fiscal, confirmation of tax residency',
          'IRS: why income, rent, dependentes, despesas gerais familiares, saúde, educação did not appear automatically',
          'Recibos verdes: which regime to choose, why you cannot emitir recibo, how to close atividade',
          'IVA: whether you need to file declaração periódica, why a dívida appeared, how to correct enquadramento',
          'IMI/IMT: questions about buying property, caderneta predial, exemptions, notas de cobrança',
          'IUC: vehicle tax, linking matrícula, payment and fines',
          'Pagamentos: lost referência Multibanco, double payment, pedido de reembolso',
          'Notificações: what an AT letter means and what prazo applies for replying'
        ] },
        { kind: 'paragraph', text: 'For simple technical questions, you can first try searching Portal das Finanças and the FAQ. But if the question relates to a deadline, amount, fine or your tax resident status, it is better to create an e-Balcão request: a written trail is more important than verbal advice.' }
      ]
    },
    {
      id: 'limits',
      title: 'When e-Balcão is not suitable',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is convenient, but it does not replace every procedure. Some actions require a separate form, confirmation via CMD/Cartão de Cidadão, in-person identification or submission to another authority.' },
        { kind: 'checklist', items: [
          'Urgent unblocking of access if there is no senha de acesso and no CMD',
          'A complex tax dispute where execução fiscal or a court deadline is already ongoing',
          'Requesting a binding tax opinion: informação vinculativa is needed',
          'Questions about AIMA, Segurança Social, SNS, Câmara Municipal are not within AT’s competence',
          'Changing the address for holders of Cartão de Cidadão is usually done via ePortugal/CMD, not by a simple ticket',
          'Filing IRS, declaração periódica IVA and emissão de recibos verdes are done in the relevant sections of the portal; e-Balcão only helps with problems',
          'If a coima has already been issued, a separate defesa, reclamação graciosa or pagamento com redução may be required'
        ] },
        { kind: 'warning', text: 'Do not use e-Balcão as a way to “extend a deadline”. If the legal prazo for a reply, payment or filing a declaration is expiring, the mere fact of asking a question in e-Balcão usually does not suspend the deadline.' }
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
      title: 'Portal das Finanças — Support and contacts of Autoridade Tributária',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
