export default {
  editorialVoice: 'hackportugal',
  id: 'subsidios-natal-ferias',
  categoryId: 'work_business',
  title: 'Subsídio de Férias and Subsídio de Natal — 13th and 14th salaries',
  tldr: 'In Portugal, an employee with a contrato de trabalho usually has 14 salaries per year: 12 monthly salaries, Subsídio de Férias and Subsídio de Natal. Natal is paid by 15 December, Férias before the start of holiday, unless there is another written agreement. In the year of hiring/termination, the amounts are calculated proportionally to the time worked. Both subsidies are subject to IRS and Segurança Social, but IRS withholding is calculated separately. recibos verdes do not have an automatic 13th/14th salary.',
  tags: ['salary', 'work', 'irs', 'holiday'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What it is: 13th and 14th salaries',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal is the Christmas subsidy, effectively the 13th salary. Subsídio de Férias is the holiday subsidy, effectively the 14th salary. For employees, this is not a “goodwill” bonus, but an employer obligation under the Código do Trabalho.' },
        { kind: 'paragraph', text: 'If the contract says “salário anual €25,200 em 14 meses”, this usually means €1,800 gross per month × 14. If it says “em 12 meses”, check whether the subsídios are included in the monthly amount through duodécimos or whether it is a breach/incomplete wording.' },
        { kind: 'checklist', items: [
          'Subsídio de Natal: the minimum is equal to 1 month of base pay for a full year of work.',
          'Subsídio de Férias: the minimum is equal to pay for the holiday period and the holiday subsidy under the rules of art. 264 Código do Trabalho.',
          'The right applies to employees with a contrato de trabalho: sem termo, termo certo, termo incerto, full-time and part-time.',
          'Part-time employees receive it proportionally to their salary and working schedule.',
          'A temporary contract does not remove the right to both subsídios.',
          'Trainees with a genuine employment contract have the right; for educational/professional programmes, check the specific regime.',
          'recibos verdes, freelancers and contractors have no automatic right — it can only be built into the service price.'
        ] }
      ]
    },
    {
      id: 'when-paid',
      title: 'When they must be paid 📅',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal under art. 263 Código do Trabalho must be paid by 15 December each year. This is a deadline, not an “approximate date”. The employer may pay earlier, for example with the November salary.' },
        { kind: 'paragraph', text: 'Subsídio de Férias under art. 264 Código do Trabalho is paid before the start of the holiday period. If holiday is split into parts, in practice payment may be linked to the main holiday period or to the rules in the contrato / instrumento de regulamentação coletiva de trabalho.' },
        { kind: 'checklist', items: [
          'If you go on holiday on 1 August, the holiday subsidy should normally arrive before 1 August.',
          'If holiday is agreed for several periods, check the internal payroll rules.',
          'If you do not take holiday because the contract is ending, unused férias and the corresponding amounts are paid in the final settlement.',
          'In the year of hiring, Natal and Férias are not always equal to a full monthly salary — a pro-rata calculation applies.',
          'In the year of termination, proportional parts for the current year and compensation for unused holiday are paid.',
          'In the recibo de vencimento, the amounts must be shown as separate lines, not hidden in “prémio”.'
        ] },
        { kind: 'warning', text: 'If the employer says “in Portugal we have 12 salaries, there is no 13th or 14th”, this is a red flag. The exception is when subsídios are lawfully paid in instalments as part of 12 monthly payments, i.e. in duodécimos, and this is visible in the payslip.' }
      ]
    },
    {
      id: 'prorata',
      title: 'How to calculate pro rata',
      content: [
        { kind: 'paragraph', text: 'For a full calendar year, each subsidy is usually equal to one gross monthly salary. If you did not work the whole year, the amount is calculated proportionally to the time worked. Practical formula for Natal: monthly base salary × months worked in the year / 12.' },
        { kind: 'substeps', items: [
          { id: 'example-hire', title: 'Example: hired on 1 April', content: [
            { kind: 'paragraph', text: 'Salary €2,000 gross. In 2026, you work from April to December, i.e. 9 months. Subsídio de Natal ≈ €2,000 × 9 / 12 = €1,500 gross. Holiday rights in the first year are also built up proportionally: usually 2 working days of holiday for each month of the contract, capped at 20 days in the first year.' }
          ] },
          { id: 'example-exit', title: 'Example: termination on 30 June', content: [
            { kind: 'paragraph', text: 'Salary €2,000 gross. For the current year, Natal ≈ €2,000 × 6 / 12 = €1,000 gross. In addition, the employer must settle holiday rights: unused férias, subsídio de férias for days already accrued and proportional amounts for the current year.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Check the contract start date, not the first working day “by arrangement”.',
          'Look at salário base, regular allowances and the rules of your acordo coletivo, if one applies.',
          'Commissions, bonuses and ajudas de custo are not always included in the base for subsídios.',
          'Sick leave, parental leave and long suspensions may affect the calculation — check the Segurança Social regime and payroll.',
          'On termination, request a detalhe do acerto de contas: holiday, Natal, Férias, compensation, IRS/SS withholdings.',
          'Keep recibos de vencimento and comprovativo de pagamento at least until the IRS tax inspection period is over.'
        ] }
      ]
    },
    {
      id: 'duodecimos',
      title: 'Duodécimos: when they are paid in instalments',
      content: [
        { kind: 'paragraph', text: 'Duodécimos means paying the 13th and/or 14th salary as 1/12 each month. The monthly net pay then looks higher, but there may be no large separate payment in December and before holiday, or it may be smaller.' },
        { kind: 'paragraph', text: 'In the private sector, duodécimos must be based on the contract, collective regulation or a written agreement/clear payroll practice. The employer should not simply make the full payment disappear without showing the monthly shares in the recibo de vencimento.' },
        { kind: 'checklist', items: [
          'In the payslip, look for lines such as “Subsídio de Natal - duodécimos” and “Subsídio de Férias - duodécimos”.',
          '1/12 of €2,000 = €166.67 gross per month for one subsidy.',
          'If both subsídios are paid fully in duodécimos: €166.67 + €166.67 = €333.34 gross on top each month with a €2,000 salary.',
          'If 50% is paid in duodécimos, the remaining 50% must arrive on the usual deadlines.',
          'Compare annual gross, not just monthly net: €2,000 × 14 = €28,000 per year.',
          'When changing jobs, duodécimos complicate the final settlement: check that you have not been overpaid or underpaid on the proportions.'
        ] },
        { kind: 'warning', text: 'Do not confuse “12 payments” in an offer with absence of subsídios. For an employee in Portugal, what matters is annual gross and the payment mechanism: 14 months, 12 months with duodécimos or a mixed scheme.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: 'Taxes: IRS and Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Both subsídios are taxed as employment income Categoria A: IRS and Segurança Social contributions. The standard employee contribution to Segurança Social is 11% of gross pay, and the employer’s is usually 23.75%. Contributions are withheld through payroll.' },
        { kind: 'paragraph', text: 'For IRS, withholding on Subsídio de Natal and Subsídio de Férias is calculated separately from the normal monthly salary. In other words, the employer should not add “salary + subsidy” and apply an inflated monthly withholding rate to the total amount. The final tax is still recalculated in the annual IRS return.' },
        { kind: 'checklist', items: [
          'In the month the subsidy is paid, the net amount will be lower than the gross amount because of IRS and 11% Segurança Social.',
          'If you have duodécimos, tax and Segurança Social are withheld monthly on those shares.',
          'In the annual Modelo 3 IRS, subsídios are included in total employment income.',
          'The withholding rate depends on marital status, dependentes, Continente/Açores/Madeira and the retenção na fonte tables for the specific year.',
          'The minimum salary SMN in 2026 is €920; even at SMN, the right to subsídios remains.',
          'If the employer pays “por fora” without a payslip, this is a risk for your residence permit, IRS, Segurança Social and future benefits.'
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'If they do not pay or calculate incorrectly',
      content: [
        { kind: 'paragraph', text: 'First ask HR for a written calculation: salário base, period worked, férias vencidas, férias proporcionais, Natal proporcional, IRS and Segurança Social withholdings. The error is often linked to duodécimos or the contract start date.' },
        { kind: 'checklist', items: [
          'Gather the contrato de trabalho and all adendas.',
          'Download recibos de vencimento for the whole year.',
          'Save bank salary credits.',
          'Check whether there is an acordo coletivo in your sector.',
          'Ask HR in writing about the legal basis for the calculation.',
          'If there is no reply — submit a request/complaint to ACT.',
          'On termination, do not sign a declaração de quitação if the calculation is unclear or the amounts are disputed.',
          'For large sums, contact an advogado or sindicato before signing an agreement.'
        ] },
        { kind: 'warning', text: 'ACT is useful for complaints about breaches of employment law, but it does not replace an individual lawyer in a dispute about a complex termination, non-compete, compensation or international payroll.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Código do Trabalho — Lei n.º 7/2009, arts. 263 and 264',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — employees',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS withholding at source',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
