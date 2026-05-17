export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS for pensioners 65+: special rules and deductions',
  tldr: 'In IRS, being aged 65+ does not by itself exempt you from filing, but pensioners have important differences: pensões income falls under Categoria H, a dedução específica of €4,350 applies for each pension recipient, rather than the usual €4,104 for salary. You can claim lares: 25% of expenses with a limit of around €403. Pensão de alimentos: the recipient declares the income, the payer deducts 20% under a court or notarial decision. The Modelo 3 return for 2025 is filed from 1 April to 30 June 2026.',
  tags: ['irs', 'pension', '65plus', 'lares', 'deductions'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Which pensioners file IRS in 2026',
      content: [
        { kind: 'paragraph', text: 'If you became a tax resident of Portugal, IRS covers your worldwide income: Portuguese pension, foreign pension, rent, interest, dividends, capital gains and some benefits. Age 65+ does not remove the obligation to file Modelo 3 if income exceeds exemption thresholds or there is foreign income.' },
        { kind: 'checklist', items: [
          'Filing the return for 2025 income: from 1 April to 30 June 2026.',
          'A Portuguese pension usually falls under Categoria H and is reported in Modelo 3 via Anexo A if pre-filled by AT.',
          'A foreign pension of a Portugal resident is declared in Anexo J, even if tax has already been withheld abroad.',
          'If a pension is taxable only in another country under a Convenção para Evitar Dupla Tributação, it is still usually shown in Anexo J with the method for eliminating double taxation.',
          'If a couple uses joint taxation, income and deductions are calculated for both spouses; sometimes separate taxation is more advantageous.',
          'If there are recibos verdes, rent, sale of shares or property, the relevant IRS annexes are added to the pension rules.'
        ] },
        { kind: 'warning', text: 'Do not confuse a residence permit with tax residence. For IRS, the tax residence rules matter: usually 183+ days in Portugal over 12 months or having accommodation that suggests permanent residence.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'Main relief: dedução específica of €4,350',
      content: [
        { kind: 'paragraph', text: 'Pension income under Categoria H is reduced by a dedução específica. For IRS returns filed in 2026, use €4,350 as a reference for each titular with pension income. This is higher than the standard dedução específica of €4,104 for employment income under Categoria A.' },
        { kind: 'checklist', items: [
          'The deduction applies not to the tax itself, but to the taxable base: first bruto pension income is reduced, then the IRS bands are applied.',
          'If the annual pension is below €4,350, the deduction does not create negative income: the base for this category effectively becomes €0.',
          'If both spouses receive a pension, the deduction is applied separately to each recipient.',
          'Portuguese entidades pagadoras usually transmit data to AT automatically, but foreign pensions must be entered manually in Anexo J.',
          'Additional compulsory contributions to health subsystems or professional schemes may have separate treatment, but they do not replace checking the pre-filled return.',
          'If you receive both salary and pension, income may fall into different categories; deductions do not always add up mechanically.'
        ] },
        { kind: 'warning', text: 'Check the IRS simulation before submitting. For pensioners with a foreign pension, a common mistake is to leave Anexo J blank because “tax has already been withheld in the source country”. For a Portugal resident, this creates a risk of additional assessment and a fine.' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares and care: deduction up to €403',
      content: [
        { kind: 'paragraph', text: 'Expenses for lares, casas de repouso, apoio domiciliário and institutions for older people can give a deduction of 25% of the amount, with a limit of around €403 per year. This is a dedução à coleta: it reduces IRS already calculated, not income.' },
        { kind: 'checklist', items: [
          'The invoice must have your NIF or the NIF of the family member for whom the expense is being claimed.',
          'Check the expense category in e-Fatura: lares must be classified correctly.',
          'You can include expenses of the taxpayer, spouse, ascendente or relative up to the 3rd degree, if the CIRS conditions are met.',
          'For an ascendente, it is usually important that their income does not exceed the established limits linked to the minimum pension/SMN.',
          'Expenses for ordinary housing rent are not lares.',
          'Medical services inside a lar may be treated as saúde if invoiced by a separate medical entidade and with the correct CAE/IVA.',
          'If the lar has not submitted the factura to e-Fatura, ask them to correct it before the invoice-checking period closes.'
        ] },
        { kind: 'warning', text: 'The €403 limit is not a cash refund. It only works if you have calculated IRS to reduce. With a very low pension and zero IRS, the deduction may not produce an actual refund.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: who pays and who receives',
      content: [
        { kind: 'paragraph', text: 'Pensão de alimentos is treated asymmetrically in IRS. The recipient declares it as Categoria H income, while the payer can deduct 20% of the amounts paid if the payments are based on a court decision or an officially approved agreement.' },
        { kind: 'checklist', items: [
          'The recipient of pensão de alimentos shows the amounts in the return as pension/alimony income.',
          'The payer claims a dedução à coleta of 20% of the amounts paid under a court decision or agreement, homologado nos termos da lei.',
          'Informal transfers “by agreement” without a legal basis may not give a deduction.',
          'If the recipient is in the same agregado familiar IRS, the payer’s deduction usually does not apply.',
          'Keep the sentença, acordo, comprovativos bancários and the recipient’s NIF.',
          'If alimony is paid from abroad or to another country, check how it is reflected in Anexo J and in the source country.'
        ] },
        { kind: 'warning', text: 'For expat pensioners, a common case is alimony under a court decision from another country. AT may request a translation and confirmation of the document’s legal force. It is better to have a certified translation into Portuguese.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'What age 65+ does NOT give automatically',
      content: [
        { kind: 'paragraph', text: 'In Portugal, there is no universal rule that “you turn 65 and do not pay IRS”. Most reliefs are linked not to age itself, but to the type of income, amount of income, household composition, disability, expenses and confirmed invoices.' },
        { kind: 'checklist', items: [
          'IRS Jovem does not apply to pensioners aged 65+: it is a regime for young taxpayers based on age and the start of working life.',
          'IFICI, the new regime replacing NHR, is not an automatic pension relief and does not replace the Categoria H rules.',
          'If you are disabled with a grau de incapacidade permanente of 60%+, separate IRS rules apply; an Atestado Médico de Incapacidade Multiuso is required.',
          'For a family supporting an older parent, there may be a dedução por ascendente, but this is a deduction for the children/relatives, not for the pensioner themselves.',
          'Municipal IMI reliefs for older and low-income households are not IRS and are checked separately with the Câmara Municipal/Finanças.',
          'A pensioner with income from rent, investments or the sale of property may pay substantial IRS, even if the main pension is small.'
        ] },
        { kind: 'warning', text: 'Do not submit the return just because it is “automática”. IRS Automático is convenient, but poorly suited to foreign pensions, foreign taxes, lares, alimony and non-standard family situations.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist before submitting',
      content: [
        { kind: 'checklist', items: [
          'Log in to Portal das Finanças using NIF + password or Chave Móvel Digital.',
          'Check residência fiscal, morada fiscal and the composition of the agregado familiar.',
          'Compare pre-filled pension statements with annual certificates from pension funds.',
          'Add foreign pensions in Anexo J and indicate tax withheld abroad, if applicable.',
          'Check e-Fatura: saúde, lares, general family expenses and invoices with the correct NIF.',
          'Calculate joint vs separate taxation for spouses using simular.',
          'Save the PDF of the return, comprovativo de entrega and nota de liquidação.',
          'If the pension amount, source country or double taxation treaty is disputed, request advice from a contabilista certificado before 30 June.'
        ] },
        { kind: 'paragraph', text: 'After filing, AT usually assigns the status declaração certa, then liquidação processada. The refund arrives to the IBAN indicated in Finanças. If the IBAN is a foreign SEPA one, it is allowed, but sometimes requires additional checks.' }
      ]
    }
  ],
  costs: [
    { label: 'Dedução específica for Categoria H pensions', amountEUR: 4350, note: 'Reduces the taxable pension income of each pension recipient.' },
    { label: 'Standard dedução específica Categoria A', amountEUR: 4104, note: 'Reference point for comparison with employment income.' },
    { label: 'Lares deduction', amountEURMax: 403, note: '25% of expenses, but not above the annual limit; the actual benefit depends on the calculated IRS.' },
    { label: 'Pensão de alimentos for the payer', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: a deduction of 20% of legally confirmed payments.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deductions and Modelo 3',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — Categoria H, deduções específicas and deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — submission of the Modelo 3 IRS return',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — IRS for citizens resident in Portugal',
      url: 'https://eportugal.gov.pt/cidadaos/entregar-a-declaracao-de-irs',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
