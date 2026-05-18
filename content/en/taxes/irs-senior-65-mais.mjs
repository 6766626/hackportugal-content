export default {
  editorialVoice: 'hackportugal',
  id: 'irs-senior-65-mais',
  categoryId: 'taxes',
  title: 'IRS for pensioners 65+: special rules and deductions',
  tldr: 'In IRS, being aged 65+ does not by itself exempt you from filing a return. With OE 2025 (Lei 45-A/2024), the dedução específica base for **both categories A and H** is linked to the formula **max(€4,104; 8.54 × IAS for that year)**.\n\n**For 2025 income (2026 return): €4,462.15** (8.54 × IAS 2025 €522.50) — for each pension recipient (Categoria H) or employee (Categoria A). You can claim lares: 25% of expenses with a limit of around €403. Pensão de alimentos: the recipient declares the income, the payer deducts 20% under a court or notarial decision. The Modelo 3 return for 2025 must be filed from 1 April to 30 June 2026.',
  tags: ['irs', 'pension', '65plus', 'lares', 'deductions'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-files',
      title: 'Which pensioners file IRS in 2026',
      content: [
        { kind: 'paragraph', text: 'If you have become a tax resident of Portugal, IRS covers your worldwide income: Portuguese pension, foreign pension, rent, interest, dividends, capital gains and some benefits. Being aged 65+ does not remove the obligation to file Modelo 3 if income exceeds the exemption thresholds or there is foreign income.' },
        { kind: 'checklist', items: [
          'Filing the return for 2025 income: from 1 April to 30 June 2026.',
          'A Portuguese pension usually falls under Categoria H and is reported in Modelo 3 through Anexo A if pre-filled by AT.',
          'A foreign pension of a Portuguese resident is declared in Anexo J, even if tax has already been withheld abroad.',
          'If the pension is taxable only in another country under a Convenção para Evitar Dupla Tributação, it is still usually shown in Anexo J with the double taxation relief method.',
          'If a couple chooses joint taxation, income and deductions are calculated for both spouses; sometimes separate taxation is more favourable.',
          'If there are recibos verdes, rent, sale of shares or property, the relevant IRS annexes are added to the pension rules.'
        ] },
        { kind: 'warning', text: 'Do not confuse a residence permit with tax residence. For IRS, the tax residence rules matter: usually 183+ days in Portugal over 12 months or having accommodation that suggests habitual residence.' }
      ]
    },
    {
      id: 'specific-deduction',
      title: 'Main relief: dedução específica €4,462.15 for 2025 income',
      content: [
        { kind: 'paragraph', text: 'After OE 2025 (Lei n.º 45-A/2024), the dedução específica base under Código do IRS art. 25 (Categoria A — employment) and art. 53 (Categoria H — pensions) is linked to the formula **max(€4,104; 8.54 × IAS for that year)**. For 2025 income: 8.54 × €522.50 = **€4,462.15** — the same for categories A and H (the same basic amount). For 2026 income, the reference is: 8.54 × €537.13 ≈ **€4,587.09** (2027 return).\n\nCategoria H NO longer has a separate increased deduction — there is a single base.' },
        { kind: 'checklist', items: [
          'For the IRS 2026 return (for 2025 income) — the base is €4,462.15 for each titular with Categoria H OR Categoria A income.',
          'The deduction applies not to the tax itself, but to the taxable base: first bruto pension/salary income is reduced, then the IRS scale is applied.',
          'If the annual pension/salary is below €4,462.15, the deduction does not create negative income: the base for that category effectively becomes €0.',
          'If both spouses receive a pension, the deduction is applied separately to each recipient.',
          'Portuguese entidades pagadoras usually send data to AT automatically, but foreign pensions must be entered manually in Anexo J.',
          'Additional mandatory contributions to health subsystems or professional schemes may have separate treatment, but they do not replace checking the pre-filled return.',
          'If you receive both salary and pension, the income may fall into different categories; deductions do not always add together mechanically.',
          'If mandatory Segurança Social/professional scheme contributions are higher than the basic dedução específica, the higher amount applies in Categoria A (under CIRS art. 25 rules).'
        ] },
        { kind: 'warning', text: 'Check the IRS simulation before submitting. For pensioners with a foreign pension, a common mistake is to leave Anexo J empty because “tax has already been withheld in the source country”. For a Portuguese resident, this creates a risk of additional assessment and a fine. Also do not use the old figures €4,350 / €4,104 — after the 2025 reform the base is unified (€4,462.15 for 2025 income).' }
      ]
    },
    {
      id: 'lares',
      title: 'Lares and care: deduction up to €403',
      content: [
        { kind: 'paragraph', text: 'Expenses for lares, casas de repouso, apoio domiciliário and institutions for elderly people can give a deduction of 25% of the amount with a limit of around €403 per year. This is a dedução à coleta: it reduces the IRS already calculated, not the income.' },
        { kind: 'checklist', items: [
          'The invoice must include your NIF or the NIF of the family member for whom the expense is claimed.',
          'Check the expense category in e-Fatura: lares must be classified correctly.',
          'You can include expenses of the taxpayer, spouse, ascendente or relative up to the 3rd degree, if the CIRS conditions are met.',
          'For an ascendente, it is usually important that their income does not exceed the established limits linked to the minimum pension/SMN.',
          'Expenses for ordinary housing rent are not lares.',
          'Medical services inside a lar may be treated as saúde if they are invoiced by a separate medical entidade and have the correct CAE/IVA.',
          'If the lar has not submitted the factura to e-Fatura, ask for it to be corrected before the invoice checking period closes.'
        ] },
        { kind: 'warning', text: 'The €403 limit is not a cash refund. It only works if you have calculated IRS to reduce. With a very low pension and zero IRS, the deduction may not produce an actual refund.' }
      ]
    },
    {
      id: 'alimony',
      title: 'Pensão de alimentos: who pays and who receives',
      content: [
        { kind: 'paragraph', text: 'Pensão de alimentos is treated asymmetrically in IRS. The recipient declares it as Categoria H income, while the payer may deduct 20% of the amounts paid if the payments are based on a court decision or an officially approved agreement.' },
        { kind: 'checklist', items: [
          'The recipient of pensão de alimentos shows the amounts in the return as pension/maintenance income.',
          'The payer claims a dedução à coleta of 20% of the amounts paid under a court decision or agreement, homologado nos termos da lei.',
          'Informal transfers “by agreement” without a legal basis may not give a deduction.',
          'If the recipient is in the same agregado familiar IRS, the payer’s deduction usually does not apply.',
          'Keep the sentença, acordo, comprovativos bancários and the recipient’s NIF.',
          'If maintenance is paid from abroad or to another country, check how it is reported in Anexo J and in the source country.'
        ] },
        { kind: 'warning', text: 'For expat pensioners, a common case is maintenance under a court decision from another country. AT may request a translation and confirmation of the document’s legal force. It is better to have a certified translation into Portuguese.' }
      ]
    },
    {
      id: 'age-65-nuances',
      title: 'What age 65+ does NOT give automatically',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is no universal rule that “you turn 65 — you do not pay IRS”. Most reliefs are tied not to age itself, but to the type of income, amount of income, household composition, disability, expenses and confirmed invoices.' },
        { kind: 'checklist', items: [
          'IRS Jovem does not apply to pensioners aged 65+: it is a regime for young taxpayers based on age and the start of working life.',
          'IFICI, the new regime replacing NHR, is not an automatic pension relief and does not replace Categoria H rules.',
          'If you have a disability with grau de incapacidade permanente 60%+, separate IRS rules apply; an Atestado Médico de Incapacidade Multiuso is required.',
          'For a family supporting an elderly parent, there may be a dedução por ascendente, but this is a deduction for the children/relatives, not for the pensioner themselves.',
          'Municipal IMI benefits for elderly and low-income households are not IRS and are checked separately with the Câmara Municipal/Finanças.',
          'A pensioner with income from rent, investments or the sale of property may pay substantial IRS, even if the main pension is small.'
        ] },
        { kind: 'warning', text: 'Do not submit the return only because it is “automática”. IRS Automático is convenient, but it is poorly suited to foreign pensions, foreign taxes, lares, maintenance payments and non-standard family situations.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist before submission',
      content: [
        { kind: 'checklist', items: [
          'Log in to Portal das Finanças using NIF + password or Chave Móvel Digital.',
          'Check residência fiscal, morada fiscal and the composition of the agregado familiar.',
          'Compare the pre-filled pension statements with the annual certificates from pension funds.',
          'Add foreign pensions in Anexo J and state the tax withheld abroad, if applicable.',
          'Check e-Fatura: saúde, lares, general family expenses and invoices with the correct NIF.',
          'Calculate joint vs separate taxation for spouses through simular.',
          'Save the PDF of the return, comprovativo de entrega and nota de liquidação.',
          'If the pension amount, source country or double taxation treaty is disputed — request advice from a contabilista certificado before 30 June.'
        ] },
        { kind: 'paragraph', text: 'After filing, AT usually assigns the status declaração certa, then liquidação processada. The refund is paid to the IBAN registered in Finanças. If the IBAN is a foreign SEPA IBAN, it is acceptable, but sometimes requires an additional check.' }
      ]
    }
  ],
  costs: [
    { label: 'Dedução específica for 2025 income (Categoria H and A) — single base', amountEUR: 4462.15, note: '8.54 × IAS 2025 (€522.50) = €4,462.15 — applies to each titular with Categoria H income (pensions) or A income (employment) in the IRS 2026 return.' },
    { label: 'Reference Dedução específica for 2026 income (2027 return)', amountEUR: 4587.09, note: '8.54 × IAS 2026 (€537.13) ≈ €4,587.09.' },
    { label: 'Lares deduction', amountEURMax: 403, note: '25% of expenses, but not above the annual limit; the actual benefit depends on the calculated IRS.' },
    { label: 'Pensão de alimentos for the payer', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: deduction of 20% of legally evidenced payments.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
