export default {
  editorialVoice: 'hackportugal',
  id: 'ato-isolado',
  categoryId: 'taxes',
  title: 'Ato Isolado — a one-off invoice without opening atividade',
  tldr: 'Ato Isolado is a way to legally issue a one-off invoice in Portugal without abertura de atividade, if the service or sale is genuinely one-off and not a regular activity. A practical limit for exemption from the declaração de início de atividade is up to €25,000 per transaction; if it is repeated, Finanças expect an abertura de atividade. IVA at 23% is usually charged on the mainland and an IRS retenção na fonte of 25% may apply to services under art. 151.º CIRS if the customer is a company.',
  tags: ['ato-isolado', 'irs', 'iva', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What is an Ato Isolado',
      content: [
        { kind: 'paragraph', text: 'An Ato Isolado is a one-off transaction: you provided a service or sold a good once and want to issue an official document through the Portal das Finanças without registering a permanent activity as a trabalhador independente.' },
        { kind: 'paragraph', text: 'The income falls under IRS as categoria B. This is not a “tax loophole” but a regime for occasional, unforeseen or irregular transactions. If you regularly do design, consulting, lessons, development, translations, or provide services to the same client — that is abertura de atividade and recibos verdes.' },
        { kind: 'checklist', items: [
          'Suitable for a single one-off project, an ad hoc consultation, a one-off lecture, the sale of a service or a job under a prestação de serviços agreement',
          'Does not require abertura de atividade if the transaction does not exceed €25,000',
          'Issued online in the Portal das Finanças',
          'Can be a Fatura-Recibo Ato Isolado if you are paid immediately',
          'Can first be a Fatura Ato Isolado and later a Recibo if payment will come later',
          'Income is declared in IRS for the relevant year',
          'Usually does not create an obligation to pay Segurança Social as a trabalhador independente'
        ] }
      ]
    },
    {
      id: 'when-you-can-use',
      title: 'When you can and when you cannot',
      content: [
        { kind: 'paragraph', text: 'The key Finanças test is not the amount per se but the nature of the transaction. An Ato Isolado must truly be isolated. The €25,000 limit matters for exemption from filing a declaração de início de atividade, but it does not turn regular freelancing “up to €25,000 a year” into a lawful Ato Isolado.' },
        { kind: 'checklist', items: [
          'You can: run a single workshop for a company for €800',
          'You can: build a website once for a friend’s company for €2,500',
          'You can: make a one-off sale of a professional service with no plans to continue',
          'Risky: issuing an Ato Isolado every month to the same client',
          'Risky: 3–4 “one-off” invoices for similar services within a year',
          'Not allowed as a permanent substitute for recibos verdes in regular self-employment',
          'If the transaction is above €25,000, you usually need an abertura de atividade before the invoice',
          'If you already carry out atividade in this field, use ordinary faturas-recibo, not an Ato Isolado'
        ] },
        { kind: 'warning', text: 'The phrase “you can do it once a year up to €25,000” is an oversimplification. The law speaks about an occasional transaction and exemption from the declaração de início for a transaction up to €25,000. Repeatability matters more than the calendar year.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Taxes: IVA, IRS and retenção',
      content: [
        { kind: 'paragraph', text: 'For IVA an Ato Isolado is usually a taxable transaction. On mainland Portugal the standard rate is 23%, Madeira — 22%, Açores — 18%. The exemption in art. 53.º CIVA for small turnover usually does not apply to an Ato Isolado; there are exceptions based on the nature of the transaction, e.g., medical, educational or insurance services under art. 9.º CIVA.' },
        { kind: 'paragraph', text: 'For IRS the income is declared in the annual IRS declaration for the year the income is received. For a resident it is aggregated with other income and taxed at progressive IRS rates; in 2026 the first IRS rate is 11.97% for the first bracket. The outcome depends on all income, deductions and residence status.' },
        { kind: 'checklist', items: [
          'IVA: usually add 23% to the price on the mainland if the service is not exempt under CIVA',
          'IVA payment deadline: by the end of the month following completion of the transaction',
          'IRS: include the income in the IRS return, usually Anexo B',
          'Retenção na fonte: if the client is a company or an entidade com contabilidade organizada, IRS may be withheld',
          'A typical withholding for professional services from the table in art. 151.º CIRS is 25%',
          'For some other categoria B income the withholding rate may be 11.5%',
          'You may apply a dispensa de retenção under art. 101.º-B CIRS if the conditions are met and income does not exceed the IVA threshold in art. 53.º CIVA',
          'If the client is an individual without contabilidade organizada, withholding is usually not applied'
        ] },
        { kind: 'warning', text: 'If you are not sure whether retenção is needed, ask the client before issuing the document. Correcting an Ato Isolado after payment is harder than selecting the right IVA and IRS fields from the outset.' }
      ]
    },
    {
      id: 'how-to-issue',
      title: 'How to issue an Ato Isolado in the Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'You need a NIF and access to the Portal das Finanças. CMD is not mandatory but is convenient for accessing public services. The document is created under faturas e recibos verdes, even if an atividade is not open.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to the Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Go to portaldasfinancas.gov.pt → Cidadãos → Serviços → Faturas e Recibos Verdes. Log in with your NIF and password or via Chave Móvel Digital.' }
          ] },
          { id: 'choose-document', title: '2. Choose the document', content: [
            { kind: 'checklist', items: [
              'Fatura-Recibo Ato Isolado — if the service has been provided and the money is received immediately',
              'Fatura Ato Isolado — if you first issue an invoice',
              'Recibo Ato Isolado — if you later confirm payment for an already issued fatura',
              'Do not choose a standard recibo verde if an atividade is not open'
            ] }
          ] },
          { id: 'fill-fields', title: '3. Fill in the details', content: [
            { kind: 'checklist', items: [
              'Client’s NIF',
              'Client’s nome or denominação social',
              'Description of the service or good in Portuguese or English',
              'Date of the transaction',
              'Valor base sem IVA',
              'Regime de IVA: rate 23%, 22%, 18% or isenção with the legal citation',
              'Retenção na fonte IRS: rate or dispensa with the legal citation',
              'Código CIRS/CAE, if the system asks for an activity classification'
            ] }
          ] },
          { id: 'validate', title: '4. Check before issuing', content: [
            { kind: 'paragraph', text: 'Before emissão, check the amount, the IVA rate and the retenção. After issuance the document is visible to the client and Finanças; cancellation or correction is possible but creates unnecessary traces and questions.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-issuing',
      title: 'What to do after issuing',
      content: [
        { kind: 'paragraph', text: 'After emissão you have two main obligations: pay IVA if it was charged, and include the income in IRS. The mere fact of an Ato Isolado does not mean automatic registration with Segurança Social as a trabalhador independente.' },
        { kind: 'checklist', items: [
          'Download the PDF of the document and send it to the client',
          'If IVA was charged, pay it by the end of the following month',
          'Keep proof of IVA payment',
          'Keep the contract, the order e-mail, proof of payment and correspondence',
          'Check whether the client withheld retenção na fonte and issued the declaração anual de rendimentos',
          'In the following year file IRS with Anexo B in the usual window 1 April — 30 June',
          'Do not forget to include the Ato Isolado, even if tax has already been partially withheld by the client',
          'If after the Ato Isolado the work has become regular, open an atividade before the next invoice'
        ] },
        { kind: 'warning', text: 'Do not delay IVA. For an Ato Isolado this is not “your income”, but a tax you collected from the client and must remit to the Estado.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Typical mistakes expats make',
      content: [
        { kind: 'checklist', items: [
          'Issuing several Ato Isolado in a row instead of an abertura de atividade',
          'Agreeing a price of “€1,000”, then forgetting that 23% IVA may be added on top',
          'Not discussing retenção with a corporate client and receiving less money into the account',
          'Choosing an isenção de IVA without a legal basis',
          'Thinking an Ato Isolado does not need to be reported in IRS',
          'Confusing the €25,000 threshold with permission for regular annual freelancing',
          'Using an Ato Isolado when an atividade is already open for the same service',
          'Not keeping documents that evidence the one-off nature of the transaction'
        ] },
        { kind: 'paragraph', text: 'A practical approach: if this is the first and likely only invoice — an Ato Isolado is convenient. If you are already looking for clients, plan to repeat the service or do it as a profession — open an atividade and work via recibos verdes.' }
      ]
    }
  ],
  costs: [
    { label: 'Issuing an Ato Isolado in the Portal das Finanças', amountEUR: 0, note: 'No government fee' },
    { label: 'IVA on mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Usually 23% of the base; this is tax to be remitted, not a fixed fee' },
    { label: 'IRS retenção na fonte for many professional services', amountEURMin: 0, amountEURMax: 0, note: 'Often 25% of the base, withheld by the client when required' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: IRS — Atos Isolados, information leaflet',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_atividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — categoria B, atos isolados and retenção na fonte',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/Cod_download/Documents/CIRS.pdf',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — taxable persons, início de atividade and IVA rules',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva31.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — recibos verdes and faturas-recibo',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
