export default {
  editorialVoice: 'hackportugal',
  id: 'ato-isolado',
  categoryId: 'taxes',
  title: 'Ato Isolado — one-off invoice without opening atividade',
  tldr: 'Ato Isolado is a way to legally issue a one-off invoice in Portugal without abertura de atividade, if the service or sale is genuinely one-off and is not a regular activity. The practical limit for exemption from declaração de início de atividade is up to €25,000 per transaction; if it is repeated, Finanças expects abertura de atividade. IVA at 23% is usually charged on the mainland and retenção na fonte IRS of 25% may apply for services under art. 151.º CIRS if the client is a company.',
  tags: ['ato-isolado', 'irs', 'iva', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Ato Isolado is',
      content: [
        { kind: 'paragraph', text: 'Ato Isolado is a one-off transaction: you provided a service or sold goods once and want to issue an official document through Portal das Finanças without registering a permanent atividade as a trabalhador independente.' },
        { kind: 'paragraph', text: 'The income falls under IRS as categoria B. It is not a “tax loophole”, but a regime for occasional, unforeseen or irregular transactions. If you regularly do design, consultancy, lessons, development, translations or provide services to the same client — that is already abertura de atividade and recibos verdes.' },
        { kind: 'checklist', items: [
          'Suitable for a single one-off project, bonus consultation, one-off lecture, sale of a service or work under a prestação de serviços contract',
          'Does not require abertura de atividade if the transaction does not exceed €25,000',
          'Issued online in Portal das Finanças',
          'Can be a Fatura-Recibo Ato Isolado if you are paid immediately',
          'Can first be a Fatura Ato Isolado and later a Recibo if payment will be made later',
          'Income is declared in IRS for the relevant year',
          'Usually does not create an obligation to pay Segurança Social as a trabalhador independente'
        ] }
      ]
    },
    {
      id: 'when-you-can-use',
      title: 'When you can and cannot use it',
      content: [
        { kind: 'paragraph', text: 'The key Finanças test is not the amount in itself, but the nature of the transaction. Ato Isolado must be genuinely isolated.\n\nThe €25,000 limit is important for exemption from filing declaração de início de atividade, but it does not turn regular freelance work “up to €25,000 a year” into a lawful Ato Isolado.' },
        { kind: 'checklist', items: [
          'Allowed: run one workshop for €800 for a company',
          'Allowed: build a website once for a company you know for €2,500',
          'Allowed: sell a professional service once with no plans to continue',
          'Risky: issuing an Ato Isolado every month to the same client',
          'Risky: 3–4 “one-off” invoices for similar services during the year',
          'Not allowed as a permanent replacement for recibos verdes in regular self-employment',
          'If the transaction is above €25,000, abertura de atividade is usually needed before issuing the invoice',
          'If you already have an atividade in this field, use normal faturas-recibo, not Ato Isolado'
        ] },
        { kind: 'warning', text: 'The phrase “you can do it once a year up to €25,000” is a simplification. The law refers to an occasional transaction and exemption from declaração de início for a transaction up to €25,000. Repetition matters more than the calendar year.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Taxes: IVA, IRS and retenção',
      content: [
        { kind: 'paragraph', text: 'For IVA, Ato Isolado is usually treated as a taxable transaction. In mainland Portugal the standard rate is 23%, Madeira 22%, Açores 18%. The exemption under art. 53.º CIVA for small turnover usually does not apply to Ato Isolado; exceptions may exist due to the nature of the transaction, for example medical, educational or insurance services under art. 9.º CIVA.' },
        { kind: 'paragraph', text: 'For IRS, the income is declared in the annual IRS declaration for the year in which the income is received. For a resident, it is added to other income and taxed at progressive IRS rates; in 2026 the first IRS rate is 11.97% for the first bracket. The final result depends on all income, deductions and residence status.' },
        { kind: 'checklist', items: [
          'IVA: usually add 23% to the price on the mainland, if the service is not exempt under CIVA',
          'IVA payment deadline: by the end of the month following completion of the transaction',
          'IRS: include the income in the IRS declaration, usually Anexo B',
          'Retenção na fonte: if the client is a company or entidade com contabilidade organizada, IRS may be withheld',
          'Typical retenção for professional services from tabela art. 151.º CIRS — 25%',
          'For some other categoria B income, the withholding rate may be 11.5%',
          'Dispensa de retenção under art. 101.º-B CIRS can be applied if the conditions are met and income does not exceed the threshold of the IVA regime under art. 53.º CIVA',
          'If the client is an individual without contabilidade organizada, retenção is usually not applied'
        ] },
        { kind: 'warning', text: 'If you are not sure whether retenção is needed, ask the client before issuing the invoice. Correcting an Ato Isolado after payment is harder than choosing the correct IVA and IRS fields from the start.' }
      ]
    },
    {
      id: 'how-to-issue',
      title: 'How to issue an Ato Isolado in Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'You need a NIF and access to Portal das Finanças. CMD is not mandatory, but it is convenient for logging into public services. The document is created in the faturas e recibos verdes section, even if atividade is not open.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Go to portaldasfinancas.gov.pt → Cidadãos → Serviços → Faturas e Recibos Verdes. Log in with your NIF and password or via Chave Móvel Digital.' }
          ] },
          { id: 'choose-document', title: '2. Choose the document', content: [
            { kind: 'checklist', items: [
              'Fatura-Recibo Ato Isolado — if the service has been provided and the money received immediately',
              'Fatura Ato Isolado — if you are issuing the invoice first',
              'Recibo Ato Isolado — if you later confirm payment for an already issued fatura',
              'Do not choose a normal recibo verde if atividade is not open'
            ] }
          ] },
          { id: 'fill-fields', title: '3. Fill in the details', content: [
            { kind: 'checklist', items: [
              'Client’s NIF',
              'Client’s nome or denominação social',
              'Description of the service or goods in Portuguese or English',
              'Transaction date',
              'Valor base sem IVA',
              'Regime de IVA: rate of 23%, 22%, 18% or isenção with legal reference',
              'Retenção na fonte IRS: rate or dispensa with legal reference',
              'Código CIRS/CAE, if the system asks for activity classification'
            ] }
          ] },
          { id: 'validate', title: '4. Check before issuing', content: [
            { kind: 'paragraph', text: 'Before emissão, check the amount, IVA rate and retenção. After issue, the document is already visible to the client and Finanças; cancellation or correction is possible, but creates unnecessary traces and questions.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-issuing',
      title: 'What to do after issuing',
      content: [
        { kind: 'paragraph', text: 'After emissão, you have two main obligations: pay IVA if it was charged, and include the income in IRS. The mere fact of issuing an Ato Isolado does not mean automatic registration with Segurança Social as a trabalhador independente.' },
        { kind: 'checklist', items: [
          'Download the PDF of the document and send it to the client',
          'If IVA was charged, pay it by the end of the following month',
          'Keep the IVA payment confirmation',
          'Keep the contract, order e-mail, proof of payment and correspondence',
          'Check whether the client withheld retenção na fonte and issued declaração anual de rendimentos',
          'Next year, file IRS with Anexo B within the normal deadline of 1 April — 30 June',
          'Do not forget to include the Ato Isolado, even if tax has already been partially withheld by the client',
          'If the work became regular after the Ato Isolado, open atividade before the next invoice'
        ] },
        { kind: 'warning', text: 'Do not postpone IVA. For Ato Isolado, this is not “your income”, but tax that you collected from the client and must transfer to the Estado.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Typical expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Issuing several Ato Isolado one after another instead of abertura de atividade',
          'Agreeing on a price of “€1,000” and then forgetting that IVA at 23% may be added on top',
          'Not discussing retenção with a corporate client and receiving less money in the account',
          'Choosing isenção de IVA without a legal basis',
          'Thinking that Ato Isolado does not need to be shown in IRS',
          'Confusing the €25,000 limit with permission for regular annual freelance work',
          'Using Ato Isolado when an atividade is already open for the same service',
          'Not keeping documents proving the one-off nature of the transaction'
        ] },
        { kind: 'paragraph', text: 'Practical approach: if this is the first and probably only invoice, Ato Isolado is convenient. If you are already looking for clients, planning to repeat the service or doing it as a profession — open atividade and work through recibos verdes.' }
      ]
    }
  ],
  costs: [
    { label: 'Issuing Ato Isolado in Portal das Finanças', amountEUR: 0, note: 'There is no state fee' },
    { label: 'IVA in mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Usually 23% of the base; this is tax to be transferred, not a fixed fee' },
    { label: 'Retenção na fonte IRS for many professional services', amountEURMin: 0, amountEURMax: 0, note: 'Often 25% of the base, withheld by the client where there is an obligation' }
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
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
