export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — online enquiries to the AT without a visit',
  tldr: 'e-Balcão is the Autoridade Tributária ticketing on the Portal das Finanças: Suporte → e-Balcão. In 2026 you can realistically resolve most issues without visiting Finanças through it: NIF address, IRS, recibos verdes, IVA, IMI, IUC, certificates, declaration errors, notifications. A reply usually arrives within 5–10 working days; duplicate urgent matters with a call to the CAT. Each submission is given a referência: you use it to track status and attach documents.',
  tags: ['financas', 'e-balcao', 'taxes', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What e-Balcão is and when it replaces a visit',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is the official channel for written enquiries to the Autoridade Tributária e Aduaneira via the Portal das Finanças. This is not a chat: you create a pedido de informação or a reclamação simples, choose a topic, attach PDF/JPG files and wait for a reply in your account.' },
        { kind: 'paragraph', text: 'For an expat, this is the main way to communicate with Finanças without booking an appointment at a branch. Practically all non-urgent issues about NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC and notifications can be initiated through e-Balcão.' },
        { kind: 'checklist', items: [
          'Changing or confirming the morada fiscal when the system does not allow this automatically',
          'IRS questions: declaração, divergências, reembolsos, notas de liquidação',
          'Opening, changing and closing the atividade for recibos verdes',
          'IVA questions: enquadramento, declarações periódicas, isenção art. 53 CIVA',
          'Issues with IUC, IMI, AIMI, IMT and stamp duty Imposto do Selo',
          'Requesting certificates: certidão de domicílio fiscal, certidão de dívida e não dívida',
          'Replying to an AT letter or notification when it sets a prazo',
          'Correcting errors in the Portal das Finanças or in taxpayer data'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to sign in: Portal das Finanças → Suporte → e-Balcão',
      content: [
        { kind: 'paragraph', text: 'Open portaldasfinancas.gov.pt. Sign in with your NIF and senha de acesso, or via Chave Móvel Digital (CMD), or Cartão de Cidadão. After signing in: Suporte → e-Balcão → Registar Nova Questão.' },
        { kind: 'checklist', items: [
          'Ensure you are signing in under the correct NIF: your personal one, not a company NIF or your spouse’s',
          'If the senha de acesso is lost, request a new one on the Portal das Finanças in advance: the letter with the code arrives at your morada fiscal',
          'Before submitting, update your email and telefone in Dados Pessoais',
          'Scan documents to PDF; make photos legible and uncropped',
          'Give files clear names: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'If the enquiry relates to an AT notification, attach the notification itself and indicate the processo or documento number',
          'Write in Portuguese; a short machine translation is better than a long Russian text'
        ] },
        { kind: 'warning', text: 'e-Balcão sits inside the Portal das Finanças. Do not send your NIF, senha de acesso or tax documents via links from SMS/WhatsApp/email. Phishing sites often copy the Finanças interface.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'How to create a ticket so it is not closed with a template reply',
      content: [
        { kind: 'paragraph', text: 'The main mistake is choosing a topic that is too broad and writing “help”. An AT officer replies strictly within the selected category. The more precise the topic, dates, amounts and supporting documents, the higher the chance of getting a workable solution the first time.' },
        { kind: 'substeps', items: [
          {
            id: 'choose-topic',
            title: '1. Choose a topic and subcategory',
            content: [
              { kind: 'paragraph', text: 'In e-Balcão you first choose the Imposto or área: IRS, IVA, IMI, IUC, Atividade, Cadastro, Pagamentos, Cobrança, Património, Benefícios fiscais. If in doubt, pick the category by tax rather than “Outros”.' }
            ]
          },
          {
            id: 'write-request',
            title: '2. Write a short text',
            content: [
              { kind: 'checklist', items: [
                'Start with the gist: “Pretendo corrigir a morada fiscal…”',
                'State your NIF, name and the tax year if the question is about IRS',
                'State the dates: date of entry, date of the rental contract, recibo date, notification date',
                'State the amounts in euros if the dispute concerns pagamento, reembolso, liquidação',
                'Refer to the AT document number: referência, nota de liquidação, processo, declaração',
                'Finish with the requested action: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Attach evidence',
            content: [
              { kind: 'paragraph', text: 'Usually a PDF of the contract, comprovativo de morada, declaração, recibo, a bank confirmation or a screenshot of the error is enough. Do not send unnecessary documents: this slows processing and increases the risk of a request for clarifications.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Timelines, referência and tracking the reply',
      content: [
        { kind: 'paragraph', text: 'After submission, e-Balcão assigns a referência to your ticket. Save it: with this number you check status, reply to requests for details and prove that you contacted AT on time.' },
        { kind: 'checklist', items: [
          'Normal response time in 2026: roughly 5–10 working days',
          'For complex IRS, IVA, inheritance, IMI or international tax matters it can take longer',
          'See status and replies in e-Balcão → Consultar Questões',
          'If the AT asks for additional documents, reply in the same ticket rather than creating a new one',
          'If the prazo on a notification is expiring, do not wait in silence: call the CAT and, if necessary, book a serviço de finanças appointment',
          'Download or save a PDF/screenshot of the AT reply, especially if it affects IRS, IVA or a fine',
          'If the reply is clearly off-topic, create a follow-up with the referência of the old ticket and briefly explain what was not resolved'
        ] },
        { kind: 'warning', text: 'An e-Balcão reply is not always a binding tax ruling. For an official, binding tax interpretation you must use a pedido de informação vinculativa under the Lei Geral Tributária rules, not a regular e-Balcão ticket.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Typical scenarios for expats',
      content: [
        { kind: 'paragraph', text: 'If you have just moved, e-Balcão is often needed even before your first IRS. It is convenient for putting questions in writing when there are no appointments at Finanças or a counter clerk gives a contradictory oral answer.' },
        { kind: 'checklist', items: [
          'NIF and morada fiscal: clarify the address status, fiscal representative, confirmation of tax residency',
          'IRS: why incomes did not pull through, rent, dependentes, despesas gerais familiares, saúde, educação',
          'Recibos verdes: which regime to choose, why you cannot emitir recibo, how to close the atividade',
          'IVA: whether you need to file a declaração periódica, why a dívida appeared, how to fix the enquadramento',
          'IMI/IMT: questions about buying property, caderneta predial, exemptions, notas de cobrança',
          'IUC: car tax, linking the matrícula, payment and fines',
          'Pagamentos: lost Multibanco referência, double payment, pedido de reembolso',
          'Notificações: what the AT letter means and what prazo you have to reply'
        ] },
        { kind: 'paragraph', text: 'For simple technical questions you can first try the Portal das Finanças search and the FAQ. But if a question involves a deadline, amount, fine or your tax residency status, it is better to create an e-Balcão ticket: a written trail is more important than an oral tip.' }
      ]
    },
    {
      id: 'limits',
      title: 'When e-Balcão is not suitable',
      content: [
        { kind: 'paragraph', text: 'e-Balcão is convenient, but it does not replace every procedure. Some actions require a separate form, confirmation via CMD/Cartão de Cidadão, in-person identification or submission to another authority.' },
        { kind: 'checklist', items: [
          'Urgent access unblocking when you have neither a senha de acesso nor CMD',
          'A complex tax dispute where execução fiscal or a court deadline is already running',
          'Requesting a binding tax ruling: you need an informação vinculativa',
          'AIMA, Segurança Social, SNS, Câmara Municipal matters — these are not within AT’s remit',
          'Address change for Cartão de Cidadão holders is usually done via ePortugal/CMD, not by a simple ticket',
          'Filing IRS, the declaração periódica IVA and emissão de recibos verdes are done in the respective sections of the portal; e-Balcão only helps with problems',
          'If a coima has already been assessed, you may need a separate defence, reclamação graciosa or payment with redução'
        ] },
        { kind: 'warning', text: 'Do not use e-Balcão as a way to “extend the deadline”. If the legal prazo for a reply, payment or filing a return is expiring, the mere fact of submitting an e-Balcão question usually does not suspend the deadline.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — sign in and access to e-Balcão',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
