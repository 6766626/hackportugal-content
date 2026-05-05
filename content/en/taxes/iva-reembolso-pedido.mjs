export default {
  editorialVoice: 'hackportugal',
  id: 'iva-reembolso-pedido',
  categoryId: 'taxes',
  title: 'IVA refund on overpayment: pedido de reembolso from €250',
  tldr: 'If your recibos verdes or company have input IVA on expenses higher than output IVA on sales, you can request a refund instead of carrying the credit forward, via the declaração periódica de IVA: field 95 “Montante a reembolsar”. The minimum for a pedido de reembolso is €250. Submission is done in the Portal das Finanças together with the monthly or quarterly declaration; AT’s standard processing is about 30 days for automatic validation and up to 60 days under the general rule of art. 22 CIVA. The money is paid to the IBAN registered in Finanças.',
  tags: ['iva', 'refund', 'finanças', 'recibosverdes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-it-applies',
      title: 'When you can request an IVA refund',
      content: [
        { kind: 'paragraph', text: 'A pedido de reembolso is a refund of the accumulated IVA credit. It arises when deductible IVA on purchases, imports, rent, accounting, equipment and other business expenses exceeds the IVA you charged your customers.' },
        { kind: 'checklist', items: [
          'You are registered as a sujeito passivo de IVA: a self-employed person with an atividade aberta or a company.',
          'You file the declaração periódica de IVA — monthly or quarterly.',
          'The declaration shows a crédito de imposto rather than IVA a pagar.',
          'The amount to refund in field 95 is at least €250.',
          'The expenses genuinely relate to IVA‑taxable activity.',
          'Invoices are issued to your NIF or NIPC and are visible/accounted for in e‑Fatura or the accounting records.',
          'IBAN is confirmed in the Portal das Finanças.',
          'There are no missing IVA, IES/DA or other mandatory returns that AT could use as grounds for delay.'
        ] },
        { kind: 'warning', text: 'If you operate under the isenção art. 53 CIVA regime, you generally do not charge IVA to customers and do not deduct IVA on expenses. Therefore, the standard pedido de reembolso via field 95 is not applicable to you.' }
      ]
    },
    {
      id: 'field-95',
      title: 'Field 95: what exactly to enter',
      content: [
        { kind: 'paragraph', text: 'In the declaração periódica de IVA, after calculating the tax, the system shows whether there is IVA a pagar or a crédito. If you want the credit refunded in cash, enter the amount in quadro 06, campo 95 — “Montante a reembolsar”. If you want to carry it forward to the next period, use campo 96 — “Excesso a reportar”.' },
        { kind: 'checklist', items: [
          'You may request the entire credit or only part of it, as long as field 95 remains ≥€250.',
          'Any remainder you do not request is carried forward to subsequent periods.',
          'You cannot “make up” the amount: it must result from the calculation of the declaration.',
          'If the crédito is less than €250, the pedido de reembolso will not go through — the amount is carried forward.',
          'For companies with ongoing investment, a refund is often more advantageous than endlessly carrying the credit forward.',
          'For freelancers with small expenses, it is simpler to carry the crédito forward until it reaches €250.'
        ] },
        { kind: 'warning', text: 'Do not confuse this with tourist tax free. This concerns a refund of IVA to a business or self‑employed taxpayer registered in the Portuguese IVA system.' }
      ]
    },
    {
      id: 'before-submitting',
      title: 'Checks before submitting to Finanças',
      content: [
        { kind: 'paragraph', text: 'AT automatically cross-checks declarations, e‑Fatura, prior periods, debts and bank details. The cleaner the preparation, the higher the chance of receiving the refund without a manual review.' },
        { kind: 'checklist', items: [
          'Check that your atividade aberta includes the actual CAE/CIRS codes of your activity.',
          'Reconcile all outgoing invoices/recibos verdes with the IVA amounts in the declaration.',
          'Check incoming invoices: NIF/NIPC, date, IVA rate, link to the business.',
          'Exclude non-deductible IVA: personal expenses, part of passenger car costs, fines, representation expenses beyond what is allowed.',
          'Ensure there are no missing declarações periódicas de IVA for prior periods.',
          'Check that Modelo 10, IES/DA and retenções na fonte, if applicable, have been filed.',
          'Go to Finanças → Dados Cadastrais → IBAN and confirm the bank account.',
          'Save the PDF of the declaration, the invoice list and the credit calculation — AT may request documents.'
        ] },
        { kind: 'warning', text: 'If you claim a large reembolso right after opening an atividade or buying expensive equipment, this is not prohibited, but the risk of a document request is higher. Keep the invoice, proof of payment, contract and an explanation of the business use.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to submit a pedido de reembolso online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to the Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Log in using NIF + password, Chave Móvel Digital or Cartão de Cidadão. For a company, access is usually required for a representative or a contabilista certificado.' }
          ] },
          { id: 'declaration', title: '2. Open the declaração periódica de IVA', content: [
            { kind: 'paragraph', text: 'The path in the Portal das Finanças changes, but the section is usually found via IVA → Declaração Periódica → Entregar declaração. Select the period: monthly or quarterly.' }
          ] },
          { id: 'calculate', title: '3. Fill in the IVA and calculate the crédito', content: [
            { kind: 'paragraph', text: 'Enter taxable operations, IVA liquidado, IVA dedutível, regularizações and other fields. After the calculation, check that an excesso/crédito has resulted.' }
          ] },
          { id: 'request', title: '4. Fill in campo 95', content: [
            { kind: 'paragraph', text: 'Enter the refund amount in field 95. If you are carrying part of the credit forward, check field 96. Submit the declaration and save the comprovativo.' }
          ] },
          { id: 'follow-up', title: '5. Track the status', content: [
            { kind: 'paragraph', text: 'You can view the refund status in the Portal das Finanças in the IVA / reembolsos area. If AT asks for documents, respond within the deadline via e‑Balcão or the channel indicated in the notice.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-payment',
      title: 'Deadlines: declaration, 30/60 days and payment',
      content: [
        { kind: 'paragraph', text: 'In 2026, the standard deadlines for filing the declaração periódica de IVA are: monthly regime — by the 20th day of the second month after the period; quarterly regime — by the 20th day of the second month after the quarter. For example, IVA for January 2026 is filed by 20 March 2026, and Q1 2026 — by 20 May 2026.' },
        { kind: 'paragraph', text: 'After a pedido de reembolso, AT processes the refund in roughly 30 days if the declaration passes automatic checks and there are no discrepancies. As a general rule under art. 22 CIVA, the refund must be made by the end of the second month after the request is submitted, so assume a timeframe of up to 60 days.' },
        { kind: 'checklist', items: [
          'The money is transferred to the IBAN registered in Finanças.',
          'If the IBAN is not confirmed, payment will be delayed.',
          'If there are tax debts, AT may offset the refund against the arrears.',
          'If documents are requested, the timeframe effectively stretches until you respond and AT reviews them.',
          'If the declaration is replaced by a declaração de substituição, the clock may restart.',
          'If AT misses the statutory deadline without cause, juros indemnizatórios may accrue, but in practice this requires separate follow-up.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'checklist', items: [
          'You put an amount under campo 95 that is less than €250 — the system or AT will not accept the pedido de reembolso.',
          'You claimed IVA on expenses without an invoice issued to your NIF/NIPC.',
          'You deducted IVA on personal purchases, family trips or household expenses with no business link.',
          'You operate under art. 53 CIVA but try to reclaim IVA on expenses.',
          'You did not update your IBAN after changing bank.',
          'You missed a quarterly declaration and are trying to get a refund in the next period.',
          'You do not account for prorata where there are both operations with and without the right to deduct IVA.',
          'You think an IVA refund is income. It is not income for IRS/IRC, but a refund of previously paid indirect tax; however, accounting records must be correct.'
        ] },
        { kind: 'warning', text: 'If the refund amount is substantial and you do not have a contabilista certificado, it is better to pay for a review of the declaration. An IVA error can lead to correções, coimas and juros compensatórios.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting a pedido de reembolso in the Portal das Finanças', amountEUR: 0, note: 'No fee; an accountant’s fee is possible if you use a contabilista certificado.' },
    { label: 'Minimum refund amount', amountEUR: 250, note: 'Campo 95 of the declaração periódica de IVA; a smaller credit is carried forward to the next period.' }
  ],
  sources: [
    {
      title: 'gov.pt: Refund of IVA in Portugal',
      url: 'https://www2.gov.pt/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/impostos-para-atividades-economicas-em-portugal/reembolso-de-imposto-sobre-valor-acrescentado-iva-em-portugal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 22 — right to deduction, carry-forward and refund',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA — declarative obligations and periodic declaration',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva22.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
