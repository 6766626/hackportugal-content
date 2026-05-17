export default {
  editorialVoice: 'hackportugal',
  id: 'iva-reembolso-pedido',
  categoryId: 'taxes',
  title: 'IVA refund after overpayment: pedido de reembolso from €250',
  tldr: 'If a recibos verdes worker or company has more input IVA on expenses than output IVA on sales, the credit does not have to be carried forward: you can request a refund through the declaração periódica de IVA, field 95 “Montante a reembolsar”. The minimum for a pedido de reembolso is €250. Filing is done in Portal das Finanças together with the monthly or quarterly return; standard AT processing is around 30 days with automatic validation and up to 60 days under the general rule in art. 22 CIVA. The money is paid to the IBAN registered in Finanças.',
  tags: ['iva', 'refund', 'finanças', 'recibos verdes'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-it-applies',
      title: 'When you can request an IVA refund',
      content: [
        { kind: 'paragraph', text: 'A pedido de reembolso is the refund of accumulated IVA credit. It arises when deductible IVA on purchases, imports, rent, accounting, equipment and other business expenses is higher than the IVA you charged to clients.' },
        { kind: 'checklist', items: [
          'You are registered as a sujeito passivo de IVA: a self-employed person with atividade aberta or a company.',
          'You file a declaração periódica de IVA — mensal or trimestral.',
          'The return results in crédito de imposto, not IVA a pagar.',
          'The amount to be refunded in field 95 is at least €250.',
          'The expenses genuinely relate to IVA-taxable activity.',
          'Invoices are issued to your NIF or NIPC and are visible/recorded in e-Fatura or accounting records.',
          'The IBAN is confirmed in Portal das Finanças.',
          'There are no missing IVA returns, IES/DA or other mandatory reports that AT may use as grounds for a delay.'
        ] },
        { kind: 'warning', text: 'If you operate under the isenção art. 53 CIVA regime, you normally do not charge IVA to clients and do not deduct IVA on expenses. This means the standard pedido de reembolso through field 95 is not suitable for you.' }
      ]
    },
    {
      id: 'field-95',
      title: 'Field 95: what exactly to enter',
      content: [
        { kind: 'paragraph', text: 'In the declaração periódica de IVA, after the tax calculation, the system shows whether there is IVA a pagar or credit. If you want the credit refunded in cash, the amount is entered in quadro 06, campo 95 — “Montante a reembolsar”. If you want to carry it forward to the next period, use campo 96 — “Excesso a reportar”.' },
        { kind: 'checklist', items: [
          'You can request the whole credit or only part of it, provided field 95 remains ≥€250.',
          'The remainder that you do not ask to be refunded is carried forward to later periods.',
          'The amount cannot be “made up”: it must arise from the calculation in the return.',
          'If the crédito is less than €250, the pedido de reembolso will not go through — the amount is carried forward.',
          'For companies with ongoing investment, a refund is often more useful than endlessly carrying the credit forward.',
          'For freelancers with small expenses, it is simpler to carry forward the crédito until it reaches €250.'
        ] },
        { kind: 'warning', text: 'Do not confuse this with tourist tax free. This is about an IVA refund to a business or self-employed taxpayer registered in the Portuguese VAT system.' }
      ]
    },
    {
      id: 'before-submitting',
      title: 'Checks before submitting to Finanças',
      content: [
        { kind: 'paragraph', text: 'AT automatically cross-checks returns, e-Fatura, previous periods, debts and bank details. The cleaner the preparation, the higher the chance of receiving the refund without manual review.' },
        { kind: 'checklist', items: [
          'Check that the atividade aberta includes the actual CAE/CIRS codes for your activity.',
          'Reconcile all outgoing invoices/recibos verdes with the IVA amounts in the return.',
          'Check incoming invoices: NIF/NIPC, date, IVA rate, connection with the business.',
          'Exclude non-deductible IVA: personal expenses, part of passenger car expenses, fines, entertainment expenses above the permitted limit.',
          'Make sure there are no missing declarações periódicas de IVA for previous periods.',
          'Check that Modelo 10, IES/DA and retenções na fonte, where applicable, have been filed.',
          'Go to Finanças → Dados Cadastrais → IBAN and confirm the bank account.',
          'Save the PDF of the return, the list of invoices and the credit calculation — AT may request documents.'
        ] },
        { kind: 'warning', text: 'If you claim a large reembolso shortly after opening atividade or buying expensive equipment, this is not prohibited, but the risk of a document request is higher. Keep the invoice, proof of payment, contract and an explanation of business use.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a pedido de reembolso online',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Authenticate using NIF + password, Chave Móvel Digital or Cartão de Cidadão. For a company, access by a representative or contabilista certificado is usually required.' }
          ] },
          { id: 'declaration', title: '2. Open the declaração periódica de IVA', content: [
            { kind: 'paragraph', text: 'The path in Portal das Finanças changes, but the section is usually found via IVA → Declaração Periódica → Entregar declaração. Select the period: monthly or quarterly.' }
          ] },
          { id: 'calculate', title: '3. Fill in IVA and calculate the crédito', content: [
            { kind: 'paragraph', text: 'Enter taxable operations, IVA liquidado, IVA dedutível, regularizações and other fields. After the calculation, check that there is an excesso/crédito.' }
          ] },
          { id: 'request', title: '4. Fill in campo 95', content: [
            { kind: 'paragraph', text: 'Enter the refund amount in field 95. If you are carrying forward part of the credit, check field 96. Submit the return and save the comprovativo.' }
          ] },
          { id: 'follow-up', title: '5. Track the status', content: [
            { kind: 'paragraph', text: 'The refund status can be checked in Portal das Finanças in the IVA / reembolsos area. If AT asks for documents, reply by the deadline via e-Balcão or the channel stated in the notification.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-payment',
      title: 'Deadlines: return, 30/60 days and payment',
      content: [
        { kind: 'paragraph', text: 'In 2026, the standard filing deadlines for the declaração periódica de IVA are: monthly regime — by the 20th day of the second month after the period; quarterly regime — by the 20th day of the second month after the quarter. For example, IVA for January 2026 is filed by 20 March 2026, and Q1 2026 by 20 May 2026.' },
        { kind: 'paragraph', text: 'After the pedido de reembolso, AT processes the refund in around 30 days if the return passes automatic checks and there are no discrepancies. Under the general rule in art. 22 CIVA, the refund must be made by the end of the second month after the request is submitted, so use a deadline of up to 60 days as a guide.' },
        { kind: 'checklist', items: [
          'The money is transferred to the IBAN registered in Finanças.',
          'If the IBAN is not confirmed, payment will be delayed.',
          'If there are tax debts, AT may offset the refund against the debt.',
          'If documents are requested, the timeline is effectively extended until the reply and review.',
          'If the return is replaced by a declaração de substituição, the deadline may start again.',
          'If AT misses the legal deadline without reason, juros indemnizatórios may accrue, but in practice this requires separate monitoring.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Entering an amount below €250 in campo 95 — the system or AT will not accept the pedido de reembolso.',
          'Claiming IVA on expenses without an invoice issued to your NIF/NIPC.',
          'Deducting IVA on personal purchases, family trips or household expenses with no business connection.',
          'Working under art. 53 CIVA but trying to recover IVA on expenses.',
          'Not updating the IBAN after changing bank.',
          'Missing a quarterly return and trying to obtain a refund in the next period.',
          'Ignoring prorata where there are both operations with and without the right to deduct IVA.',
          'Thinking that an IVA refund is income. It is not income for IRS/IRC, but a refund of previously paid indirect tax; however, the accounting must be correct.'
        ] },
        { kind: 'warning', text: 'If the refund amount is substantial and you do not have a contabilista certificado, it is better to pay for a review of the return. An IVA error can lead to correções, coimas and juros compensatórios.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing a pedido de reembolso in Portal das Finanças', amountEUR: 0, note: 'There is no state fee; there may be an accountant’s fee if you use a contabilista certificado.' },
    { label: 'Minimum refund amount', amountEUR: 250, note: 'Campo 95 declaração periódica de IVA; a smaller crédito is carried forward to the next period.' }
  ],
  sources: [
    {
      title: 'gov.pt: Refund of Value Added Tax (IVA) in Portugal',
      url: 'https://www2.gov.pt/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/impostos-para-atividades-economicas-em-portugal/reembolso-de-imposto-sobre-valor-acrescentado-iva-em-portugal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 22 — right to deduct, carry forward and reembolso',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: IVA — reporting obligations and declaração periódica',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/civa_rep/Pages/iva22.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
