export default {
  editorialVoice: 'hackportugal',
  id: 'faturacao-holvi-toconline',
  categoryId: 'work_business',
  title: 'Invoicing programmes for recibos verdes: Holvi, ToConline, Visee, Faturalia',
  tldr: 'A self-employed person in Portugal can issue recibos verdes for free in the Portal das Finanças. But if you need proper client management, recurring invoices, SAF-T export, QR and ATCUD, you use certified software: ToConline, Visee, Faturalia, MOLONI. Budget in 2026: from €0 to €30/month. Holvi is convenient as a bank account + invoices, but the fiscal invoice for AT must come from the Portal das Finanças or software certified by AT.',
  tags: ['recibosverdes', 'invoicing', 'atcud', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'What is mandatory in 2026: QR, ATCUD, AT certificate',
      content: [
        { kind: 'paragraph', text: 'For recibos verdes there are two different scenarios. First: you issue a recibo verde eletrónico directly in the Portal das Finanças — it is free and already complies with AT requirements. Second: you use external faturação software — then the document must be fiscally correct: QR code, ATCUD, série, comunicação à AT and, in most practical cases, AT-certified software.' },
        { kind: 'checklist', items: [
          'ATCUD has been mandatory on fiscal documents since 2023: it is the series validation code + the document number.',
          'A QR code is mandatory on faturas and recibos issued by faturação software.',
          'Document séries must be reported to AT before use to obtain a código de validação.',
          'Faturas must be transmitted to AT via SAF-T/PT or webservice within the prescribed deadlines.',
          'The Portal das Finanças itself generates the recibo verde eletrónico — no separate software is needed.',
          'If the programme is not AT-certified, do not treat it as a fiscal replacement for the Portal das Finanças.',
          'A PDF invoice for the client and a fiscal invoice for AT are not the same thing.'
        ] },
        { kind: 'warning', text: 'Do not send the client an “invoice” from a non-certified service as the only tax document. For IRS/IVA in Portugal, the document must be issued via the Portal das Finanças or software recognised by AT.' }
      ]
    },
    {
      id: 'when-portal-is-enough',
      title: 'When the free Portal das Finanças is enough',
      content: [
        { kind: 'paragraph', text: 'If you have 1–5 clients per month, provide services without complex stock, and you work as a trabalhador independente, the Portal das Finanças is usually sufficient. You go to Finanças → Faturas e Recibos Verdes → Emitir, choose the client, atividade, IVA, retenção na fonte and document type.' },
        { kind: 'checklist', items: [
          'Suitable for a freelancer with simple services: IT, design, consulting, training, marketing.',
          'Costs €0: no subscription fee, no SAF-T setup, no certificate purchase.',
          'Supports fatura, recibo and fatura-recibo.',
          'Data goes straight to AT — no need to submit SAF-T separately.',
          'You can download a PDF and send it to the client.',
          'Minus: weak CRM, no beautiful templates, little automation, inconvenient for dozens of documents.',
          'Minus: bank reconciliation, accounts receivable reports and recurring invoices are almost absent.'
        ] },
        { kind: 'paragraph', text: 'If you are under isenção de IVA under art. 53 CIVA, indicate the relevant exemption basis in the document. For 2026 the small scheme benchmark is €15,000 annual turnover; if you approach the limit, discuss in advance with your accountant switching to IVA.' }
      ]
    },
    {
      id: 'software-comparison',
      title: 'What to choose: Holvi, ToConline, Visee, Faturalia, MOLONI',
      content: [
        { kind: 'substeps', items: [
          { id: 'toconline', title: 'ToConline — the most "Portuguese" option', content: [
            { kind: 'paragraph', text: 'ToConline is a popular Portuguese platform for invoicing, management and working with your accountant. Its strength is local tax logic: séries, ATCUD, QR, SAF-T, IVA, retenção, exports for the accountant.' },
            { kind: 'checklist', items: [
              'Good for recibos verdes with regular B2B clients.',
              'Suitable if your accountant already works in ToConline.',
              'Includes client management, products/services and reports.',
              'Check the plan: some features may be in paid tiers.',
              'Best choice if you want minimal “foreign exotica” and maximum Portuguese compliance.'
            ] }
          ] },
          { id: 'holvi', title: 'Holvi — bank + invoices, but check fiscal compliance', content: [
            { kind: 'paragraph', text: 'Holvi is convenient as a business account with card, IBAN, expense categories and issuing client invoices. But for Portugal the key question is not the PDF design, it is AT certification, ATCUD, QR and comunicação à AT.' },
            { kind: 'warning', text: 'If the specific Holvi product for your account is not listed among the AT programas de faturação certificados, use Holvi for banking and reminders, and issue the fiscal invoice/recibo in the Portal das Finanças or in certified software.' }
          ] },
          { id: 'visee-faturalia-moloni', title: 'Visee, Faturalia, MOLONI — inexpensive PT services', content: [
            { kind: 'paragraph', text: 'Visee, Faturalia and MOLONI are usually chosen for simple faturação, a quick start and a price range of €0–30/month. For the self-employed, what matters is not “pretty invoices” but AT certification, correct tax fields and SAF-T export.' },
            { kind: 'checklist', items: [
              'Check the AT certificate number on the service’s website and in the Portal das Finanças list.',
              'Ensure the service supports ATCUD and a QR code.',
              'Check there are recibos, faturas-recibo and credit notes, not only ordinary invoices.',
              'Check support for retenção na fonte for recibos verdes.',
              'Check SAF-T/PT export and automatic comunicação à AT.',
              'Check whether you can give your accountant access without sharing your Finanças password.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'setup',
      title: 'How to configure a programme without mistakes',
      content: [
        { kind: 'paragraph', text: 'Before your first document, set up tax parameters rather than the logo. An error in IVA or retenção is later corrected with a nota de crédito or annulment, and the client will have to adjust their own accounting.' },
        { kind: 'checklist', items: [
          'Check the início de atividade in Finanças: CAE/CIRS, regime de IVA, regime de contabilidade.',
          'Enter your NIF, name and morada fiscal exactly as in Finanças.',
          'Set up document séries for 2026 and obtain the código de validação for ATCUD.',
          'Choose document types: fatura, recibo, fatura-recibo, nota de crédito.',
          'Configure IVA: normal, isenção art. 53 CIVA, autoliquidação or operações intracomunitárias — according to your situation.',
          'Configure retenção na fonte: for many B2B services in Portugal it may be 25%, but there are exceptions and dispensas.',
          'Validate clients: NIF português, EU VAT ID via VIES, address, country.',
          'Create a test document for a small client or as a draft before issuing documents at scale.',
          'Give your accountant access to the software or export SAF-T/Excel every month.',
          'Keep PDFs and data for at least the tax audit period; do not rely solely on the client’s email.'
        ] },
        { kind: 'warning', text: 'Do not use the same document number in two systems. If you started a série in the Portal das Finanças and later moved to ToConline/MOLONI, the new programme must have its own séries and ATCUD.' }
      ]
    },
    {
      id: 'pricing-and-choice',
      title: 'How much it costs and which option to choose',
      content: [
        { kind: 'paragraph', text: 'For most expat freelancers the choice is simple: up to a few invoices per month — the Portal das Finanças at €0. If you have many clients, IVA, EU clients, recurring invoices or your accountant requests SAF-T — choose Portuguese AT-certified software.' },
        { kind: 'checklist', items: [
          '€0/month: Portal das Finanças — sufficient for simple recibos verdes.',
          '€5–15/month: basic PT service tiers for poucas faturas and simple bookkeeping.',
          '€15–30/month: more automation, reports, bank reconciliation, users and integrations.',
          'Holvi makes sense if business banking, a card and expense control are important to you.',
          'ToConline makes sense if your accountant in Portugal already uses it.',
          'MOLONI/Faturalia/Visee make sense if you need simple certified invoicing without heavy accounting.',
          'Do not buy an annual plan until you have verified AT certification, ATCUD, QR and SAF-T on a real document.'
        ] },
        { kind: 'paragraph', text: 'Faturação software does not replace IRS, IVA and Segurança Social returns. It helps you issue documents and transmit data, but responsibility for the IVA regime, withholdings, Modelo 3 IRS and the quarterly declaração trimestral remains with you.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças: recibos verdes eletrónicos', amountEUR: 0, note: 'Free; the best starting point for a simple trabalhador independente.' },
    { label: 'Basic invoicing programme', amountEURMin: 5, amountEURMax: 15, note: 'Usually enough for a small number of clients and simple SAF-T/ATCUD.' },
    { label: 'Advanced invoicing/management plan', amountEURMin: 15, amountEURMax: 30, note: 'More users, reports, automation, integrations and accountant support.' },
    { label: 'Accountant to review your IVA/IRS regime', amountEURMin: 50, amountEURMax: 150, note: 'Not required for everyone but helpful if you have IVA, EU clients, retenção and growing turnover.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: taxpayer support and certified invoicing software',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: rules for processing invoices and retention of documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 195/2020: QR code and ATCUD on fiscally relevant documents',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/195-2020-140510604',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ToConline: online invoicing and management in Portugal',
      url: 'https://www.toconline.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
