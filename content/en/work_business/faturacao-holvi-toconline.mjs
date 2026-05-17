export default {
  editorialVoice: 'hackportugal',
  id: 'faturacao-holvi-toconline',
  categoryId: 'work_business',
  title: 'Invoicing software for recibos verdes: Holvi, ToConline, Visee, Faturalia',
  tldr: 'A self-employed person in Portugal can issue recibos verdes free of charge in Portal das Finanças. But if you need proper customer records, recurring invoices, SAF-T export, QR and ATCUD, you use certified software: ToConline, Visee, Faturalia, MOLONI. Budget in 2026: from €0 to €30/month. Holvi is convenient as a bank account + invoices, but the fiscal invoice for AT must come from Portal das Finanças or software with AT certification.',
  tags: ['recibosverdes', 'invoicing', 'atcud', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'What is mandatory in 2026: QR, ATCUD, AT certificate',
      content: [
        { kind: 'paragraph', text: 'For recibos verdes there are two different scenarios. First: you issue a recibo verde eletrónico directly in Portal das Finanças — this is free and already complies with AT requirements. Second: you use external faturação software — then the document must be fiscally correct: QR code, ATCUD, series, comunicação à AT and, in most practical cases, certified software.' },
        { kind: 'checklist', items: [
          'ATCUD has been mandatory on fiscal documents since 2023: it is the series validation code + document number.',
          'QR code is mandatory on faturas and recibos issued by faturação software.',
          'Document series must be reported to AT before use in order to obtain a código de validação.',
          'Faturas must be submitted to AT via SAF-T/PT or webservice within the statutory deadlines.',
          'Portal das Finanças generates the recibo verde eletrónico itself — no separate software is needed.',
          'If the software is not AT-certified, do not treat it as a fiscal replacement for Portal das Finanças.',
          'A PDF invoice for the client and a fiscal invoice for AT are not the same thing.'
        ] },
        { kind: 'warning', text: 'Do not send the client an “invoice” from a non-certified service as the only tax document. For IRS/IVA in Portugal, the document must be issued through Portal das Finanças or through software recognised by AT.' }
      ]
    },
    {
      id: 'when-portal-is-enough',
      title: 'When the free Portal das Finanças is enough',
      content: [
        { kind: 'paragraph', text: 'If you have 1–5 clients per month, services without complex stock management, and you work as a trabalhador independente, Portal das Finanças is usually enough. You go to Finanças → Faturas e Recibos Verdes → Emitir, choose the client, atividade, IVA, retenção na fonte and document type.' },
        { kind: 'checklist', items: [
          'Suitable for a freelancer with simple services: IT, design, consulting, teaching, marketing.',
          'Costs €0: no subscription fee, no SAF-T setup, no certificate purchase.',
          'Supports fatura, recibo and fatura-recibo.',
          'Data goes straight to AT — there is no need to send SAF-T separately.',
          'You can download a PDF and send it to the client.',
          'Downside: weak CRM, no attractive templates, little automation, inconvenient for dozens of documents.',
          'Downside: bank reconciliation, receivables reports and recurring invoices are almost absent.'
        ] },
        { kind: 'paragraph', text: 'If you are on isenção de IVA under art. 53 CIVA, you state the relevant exemption basis on the document. For 2026, the small-regime reference point is €15,000 annual turnover; if you are approaching the threshold, discuss the transition to IVA with a contabilista in advance.' }
      ]
    },
    {
      id: 'software-comparison',
      title: 'What to choose: Holvi, ToConline, Visee, Faturalia, MOLONI',
      content: [
        { kind: 'substeps', items: [
          { id: 'toconline', title: 'ToConline — the most “Portuguese” option', content: [
            { kind: 'paragraph', text: 'ToConline is a popular Portuguese platform for faturação, gestão and communication with a contabilista. Its strength is local tax logic: séries, ATCUD, QR, SAF-T, IVA, retenção, export for the accountant.' },
            { kind: 'checklist', items: [
              'Good for recibos verdes with regular B2B clients.',
              'Suitable if your accountant already works in ToConline.',
              'Includes management of clients, products/services and reports.',
              'Check the plan: some functions may be in paid plans.',
              'The best choice if you need minimum “foreign exotica” and maximum PT compliance.'
            ] }
          ] },
          { id: 'holvi', title: 'Holvi — bank + invoices, but check fiscal compliance', content: [
            { kind: 'paragraph', text: 'Holvi is convenient as a business account with a card, IBAN, expense categories and client invoicing. But for Portugal the key issue is not the PDF design, but the AT certificate, ATCUD, QR and comunicação à AT.' },
            { kind: 'warning', text: 'If the specific Holvi product for your account is not listed among programas de faturação certificados AT, use Holvi for banking records and reminders, and issue the fiscal invoice/recibo in Portal das Finanças or in certified software.' }
          ] },
          { id: 'visee-faturalia-moloni', title: 'Visee, Faturalia, MOLONI — inexpensive PT services', content: [
            { kind: 'paragraph', text: 'Visee, Faturalia and MOLONI are usually chosen for simple faturação, a quick start and a price in the €0–€30/month range. For self-employed people, what matters is not “pretty invoices” but AT certification, correct tax fields and SAF-T export.' },
            { kind: 'checklist', items: [
              'Check the AT certificate number on the service website and in the Portal das Finanças list.',
              'Make sure the service supports ATCUD and QR code.',
              'Check whether it has recibos, faturas-recibo and credit notes, not only ordinary invoices.',
              'Check support for retenção na fonte for recibos verdes.',
              'Check SAF-T/PT export and automatic comunicação à AT.',
              'Check whether you can give a contabilista access without handing over your Finanças password.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'setup',
      title: 'How to set up the software without mistakes',
      content: [
        { kind: 'paragraph', text: 'Before the first document, set up the tax parameters, not the logo. A mistake in IVA or retenção is later corrected with a nota de crédito or cancellation, and the client will have to change their accounting.' },
        { kind: 'checklist', items: [
          'Check the start of atividade in Finanças: CAE/CIRS, regime de IVA, regime de contabilidade.',
          'Enter NIF, name and morada fiscal exactly as in Finanças.',
          'Set up document séries for 2026 and obtain a código de validação for ATCUD.',
          'Choose document types: fatura, recibo, fatura-recibo, nota de crédito.',
          'Set up IVA: normal, isenção art. 53 CIVA, autoliquidação or operações intracomunitárias — according to your situation.',
          'Set up retenção na fonte: for many B2B services in Portugal it may be 25%, but there are exceptions and dispensa.',
          'Check clients: NIF português, EU VAT ID via VIES, address, country.',
          'Create a test document for a small client or in draft before issuing invoices in bulk.',
          'Give your accountant access to the software or export SAF-T/Excel every month.',
          'Keep PDFs and data for at least the tax audit period; do not rely only on the client’s email.'
        ] },
        { kind: 'warning', text: 'Do not use the same document number in two systems. If you started a series in Portal das Finanças and then moved to ToConline/MOLONI, the new software must have its own series and ATCUD.' }
      ]
    },
    {
      id: 'pricing-and-choice',
      title: 'How much it costs and which option to take',
      content: [
        { kind: 'paragraph', text: 'For most expat freelancers the choice is simple: up to a few invoices per month — Portal das Finanças for €0. If you have many clients, IVA, EU clients, recurring invoices or your accountant asks for SAF-T — use Portuguese certified software.' },
        { kind: 'checklist', items: [
          '€0/month: Portal das Finanças — enough for simple recibos verdes.',
          '€5–€15/month: basic plans from PT services for poucas faturas and simple records.',
          '€15–€30/month: more automation, reports, bank reconciliations, users and integrations.',
          'Holvi makes sense if business banking, a card and expense control matter to you.',
          'ToConline makes sense if an accountant in Portugal already uses it.',
          'MOLONI/Faturalia/Visee make sense if you need simple certified invoicing without heavy accounting.',
          'Do not buy an annual plan until you have checked AT certification, ATCUD, QR and SAF-T on a real document.'
        ] },
        { kind: 'paragraph', text: 'Faturação software does not replace IRS, IVA and Segurança Social declarations. It helps issue documents and transmit data, but responsibility for the IVA regime, withholdings, Modelo 3 IRS and quarterly declaração trimestral remains with you.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças: recibos verdes eletrónicos', amountEUR: 0, note: 'Free; the best starting point for a simple trabalhador independente.' },
    { label: 'Basic faturação software', amountEURMin: 5, amountEURMax: 15, note: 'Usually enough for a small number of clients and simple SAF-T/ATCUD.' },
    { label: 'Advanced faturação/gestão plan', amountEURMin: 15, amountEURMax: 30, note: 'More users, reports, automation, integrations and accountant support.' },
    { label: 'Contabilista to check the IVA/IRS regime', amountEURMin: 50, amountEURMax: 150, note: 'Not mandatory for everyone, but useful with IVA, EU clients, retenção and growing turnover.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: taxpayer support and programas de faturação certificados',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: rules on invoice processing and document retention',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 195/2020: QR code and ATCUD in fiscally relevant documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/195-2020-140510604',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ToConline: online faturação and gestão in Portugal',
      url: 'https://www.toconline.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
