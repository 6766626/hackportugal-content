export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS for pensioners aged 65+: special rules and deductions',
  tldr: 'In IRS, being aged 65+ on its own does not exempt you from filing, but pensioners have important differences: pension income goes as Categoria H, a dedução específica of €4,350 applies to each pension recipient rather than the usual €4,104 for salary. You can claim lares: 25% of expenses with a cap of about €403. Pensão de alimentos: the recipient declares the income, the payer deducts 20% under a court/notarial decision. The Modelo 3 return for 2025 is filed from 1 April to 30 June 2026.',
  tags: ['irs', 'pensions', '65plus', 'care-homes', 'deductions'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Which pensioners file IRS in 2026',
      content: [
        { kind: 'paragraph', text: 'If you have become a tax resident of Portugal, IRS covers your worldwide income: Portuguese pension, foreign pension, rent, interest, dividends, capital gains and some benefits. Being aged 65+ does not cancel the obligation to submit Modelo 3 if income exceeds the exemption thresholds or there is foreign income.' },
        { kind: 'checklist', items: [
          'Filing for 2025 income: from 1 April to 30 June 2026.',
          'A Portuguese pension usually falls under Categoria H and appears in Modelo 3 via Anexo A if pre-filled by the AT.',
          'A foreign pension of a Portuguese resident is declared in Anexo J, even if tax has already been withheld abroad.',
          'If the pension is taxable only in another country under a Convenção para Evitar Dupla Tributação, it is still usually shown in Anexo J with the method to eliminate double taxation.',
          'If a couple has joint taxation, income and deductions are calculated for both spouses; sometimes separate taxation is more advantageous.',
          'If you have recibos verdes, rental income, a sale of shares or real estate, the relevant IRS annexes are added on top of the pension rules.'
        ] },
        { kind: 'warning', text: 'Do not confuse a residence permit and tax residency. For IRS, the tax residency tests matter: typically 183+ days in Portugal within 12 months or having accommodation that suggests permanent residence.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'Main relief: dedução específica €4,350',
      content: [
        { kind: 'paragraph', text: 'Pension income in Categoria H is reduced by the dedução específica. For IRS returns filed in 2026, use €4,350 per titular with pension income as a reference. This is higher than the standard dedução específica of €4,104 for employment income in Categoria A.' },
        { kind: 'checklist', items: [
          'The deduction applies to the tax base, not to the tax itself: the gross pension income is reduced first, then the IRS scale applies.',
          'If the annual pension is below €4,350, the deduction does not create negative income: the tax base for that category effectively becomes €0.',
          'If both spouses receive a pension, the deduction applies separately to each recipient.',
          'Portuguese entidades pagadoras usually transmit the data to the AT automatically, but foreign pensions must be entered manually in Anexo J.',
          'Additional mandatory contributions to health subsystems or professional schemes may have separate treatment, but they do not replace checking the pre-filled return.',
          'If you receive both salary and pension, income may fall into different categories; deductions do not always add up mechanically.'
        ] },
        { kind: 'warning', text: 'Check the IRS simulation before submission. A frequent mistake for pensioners with a foreign pension is to leave Anexo J empty because "tax has already been withheld in the source country". For a Portuguese resident this carries the risk of an assessment and a fine.' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares and care: deduction up to €403',
      content: [
        { kind: 'paragraph', text: 'Expenses for lares, casas de repouso, apoio domiciliário and institutions for the elderly can give a deduction of 25% of the amount with an annual cap of about €403. This is a dedução à coleta: it reduces the IRS already calculated, not the income.' },
        { kind: 'checklist', items: [
          'The invoice must carry your NIF or the NIF of the family member for whom the expense is claimed.',
          'Check the expense category in e-Fatura: lares must be classified correctly.',
          'You may include expenses of the taxpayer, spouse, ascendente or a relative up to the 3rd degree, if the CIRS conditions are met.',
          'For an ascendente it is usually important that their income does not exceed the limits linked to the minimum pension/SMN.',
          'Expenses for ordinary housing rent are not lares.',
          'Medical services within a lar can go as saúde if issued by a separate medical entity and with the correct CAE/IVA.',
          'If the lar has not uploaded the factura to e-Fatura, ask them to correct it before the invoice review period closes.'
        ] },
        { kind: 'warning', text: 'The €403 cap is not a cash refund. It only works if you have calculated IRS to be reduced. With a very low pension and zero IRS, the deduction may not give an actual refund.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: who pays and who receives',
      content: [
        { kind: 'paragraph', text: 'Pensão de alimentos is handled asymmetrically in IRS. The recipient declares it as income in Categoria H, and the payer may deduct 20% of the amounts paid if the payments are based on a court decision or an officially approved agreement.' },
        { kind: 'checklist', items: [
          'The recipient of pensão de alimentos shows the amounts in the return as pension/alimony income.',
          'The payer claims a dedução à coleta of 20% of the amounts paid under a court decision or an agreement homologado nos termos da lei.',
          'Informal transfers "by arrangement" without a legal basis may not give a deduction.',
          'If the recipient is within the same IRS agregado familiar, the payer usually cannot apply the deduction.',
          'Keep the sentença, agreement, bank proof and the recipient\'s NIF.',
          'If alimony is paid from abroad or to another country, check how this is reflected in Anexo J and in the source country.'
        ] },
        { kind: 'warning', text: 'A common case for expat pensioners: alimony under a court decision from another country. The AT may request a translation and confirmation of the document\'s legal force. It is better to have a certified translation into Portuguese.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'What being aged 65+ does NOT give automatically',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have a universal rule "you turned 65 — you do not pay IRS". Most reliefs are tied not to age by itself, but to the type and amount of income, household composition, disability, expenses and validated invoices.' },
        { kind: 'checklist', items: [
          'IRS Jovem does not apply to 65+ pensioners: it is a regime for young taxpayers by age and the start of working life.',
          'IFICI, the new regime instead of NHR, is not an automatic pension relief and does not replace the Categoria H rules.',
          'If you have a disability with grau de incapacidade permanente of 60%+, separate IRS rules apply; an Atestado Médico de Incapacidade Multiuso is required.',
          'For a family that supports an elderly parent, there may be a dedução por ascendente, but this is a deduction for the children/relatives, not for the pensioner themselves.',
          'Municipal IMI reliefs for elderly and low-income households are not IRS and are checked separately with the Câmara Municipal/Finanças.',
          'A pensioner with income from rent, investments or a property sale may pay significant IRS even if the main pension is small.'
        ] },
        { kind: 'warning', text: 'Do not submit the return just because it is "automática". IRS Automático is convenient, but is poorly suited to foreign pensions, foreign taxes, lares, alimony and non-standard family situations.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist before submission',
      content: [
        { kind: 'checklist', items: [
          'Log in to the Portal das Finanças with NIF + password or Chave Móvel Digital.',
          'Check residência fiscal, morada fiscal and the composition of the agregado familiar.',
          'Reconcile the pre-filled pension statements with annual statements from pension funds.',
          'Add foreign pensions in Anexo J and indicate tax withheld abroad, if applicable.',
          'Check e-Fatura: saúde, lares, general family expenses and invoices with the correct NIF.',
          'Compare joint vs separate taxation for spouses via simular.',
          'Save the PDF of the return, the comprovativo de entrega and the nota de liquidação.',
          'If the pension amount, source country or the double tax treaty are contentious, seek advice from a contabilista certificado by 30 June.'
        ] },
        { kind: 'paragraph', text: 'After submission the AT usually assigns the status declaração certa, depois liquidação processada. The refund is paid to the IBAN indicated in Finanças. If the IBAN is a foreign SEPA one, it is accepted, but sometimes requires additional verification.' }
      ]
    }
  ],
  costs: [
    { label: 'Specific deduction for Categoria H pensions', amountEUR: 4350, note: 'Reduces the taxable pension income of each pension recipient.' },
    { label: 'Standard specific deduction for Categoria A', amountEUR: 4104, note: 'Reference for comparison with employment income.' },
    { label: 'Lares deduction', amountEURMax: 403, note: '25% of expenses, but not above the annual cap; the actual benefit depends on the IRS calculated.' },
    { label: 'Pensão de alimentos for the payer', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: a 20% deduction from legally confirmed payments.' }
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
      title: 'Código do IRS — Categoria H, specific deductions and deductions to tax due',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — submission of the Modelo 3 IRS return',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html',
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
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
