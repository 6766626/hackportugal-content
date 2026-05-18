export default {
  editorialVoice: 'hackportugal',
  id: 'salario-minimo-vs-medio',
  categoryId: 'work_business',
  title: 'Salário Mínimo Nacional 2026: €920 and comparison with average salary',
  tldr: 'In 2026, the Salário Mínimo Nacional in Portugal is €920 gross per month, usually paid in 14 instalments per year: 12 salaries + subsídio de férias + subsídio de Natal. Take-home pay at full-time hours and with no IRS withholding is around €818.80 per payment after 11% Segurança Social. For the employer, this salary costs €1,138.50 per payment because of the 23.75% contribution. The average salary is around €1,300 gross, while a Lisbon software dev is roughly €2,500–4,500 gross.',
  tags: ['smn', 'salary', 'ss', 'work'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-smn',
      title: 'What the SMN is in 2026',
      content: [
        { kind: 'paragraph', text: 'Salário Mínimo Nacional, officially retribuição mínima mensal garantida, is the minimum monthly gross salary for full-time work. Write: "In 2026, the national RMMG/SMN is €920 gross per month. In the Região Autónoma da Madeira and Região Autónoma dos Açores, the regional minimum salary may be higher — check the regional diploma/applicable collective agreement."' },
        { kind: 'paragraph', text: 'In Portugal, salary is usually calculated not as 12 but as 14 payments per year: 12 regular months, subsídio de férias and subsídio de Natal. Therefore, the annual minimum for full-time work is €920 × 14 = €12,880 gross.' },
        { kind: 'checklist', items: [
          'SMN 2026: €920 gross per month',
          'Annual SMN: €12,880 gross with 14 payments',
          'The hourly minimum cannot be derived directly from the law in the same way for all schedules: check the contrato de trabalho and instrumento de regulamentação coletiva, if any',
          'Part-time is calculated proportionally: 50% of full-time ≈ €460 gross',
          'Subsídio de alimentação does not replace salary and is not included in the SMN',
          'Commissions, bonuses and prémios must not disguise pay below the minimum wage',
          'Internships, recibos verdes and prestação de serviços are separate regimes; the SMN as an employment guarantee does not automatically apply to them'
        ] }
      ]
    },
    {
      id: 'net-reality',
      title: 'How much is left as take-home pay',
      content: [
        { kind: 'paragraph', text: 'The employee pays 11% to Segurança Social. On €920, that is €101.20. If there is no IRS withholding, the net payment is about €818.80.' },
        { kind: 'paragraph', text: 'This does not mean that annual IRS is always zero for every household: the final result depends on status, dependentes, deductions, region and other income. But for one minimum salary in a standard situation, IRS withholding is usually absent or minimal.' },
        { kind: 'checklist', items: [
          'Gross: €920',
          'Employee Segurança Social contribution 11%: €101.20',
          'Indicative net for one payment: €818.80',
          'Indicative net for 14 payments: €11,463.20 before any final IRS adjustment',
          'The employer separately pays 23.75% Segurança Social: €218.50',
          'Full cost for the employer: €1,138.50 per payment',
          'Annual cost for the employer: €15,939',
          'If you are offered €920 “líquido”, ask for a written calculation of gross, SS and IRS'
        ] },
        { kind: 'warning', text: 'In Portugal, “salário líquido” is often calculated approximately in conversation. What matters legally is gross pay, categoria profissional, horário, 14 payments, SS and the IRS withholding table. Check the payslip: recibo de vencimento.' }
      ]
    },
    {
      id: 'vs-average',
      title: 'SMN versus average salary',
      content: [
        { kind: 'paragraph', text: 'The average salary benchmark often used in everyday comparisons is around €1,300 gross per month for regular remuneration. This is not an “average comfortable income”, but a statistical benchmark: in Lisbon and Porto, rent quickly eats up the difference.' },
        { kind: 'checklist', items: [
          'SMN 2026: €920 gross / about €818.80 net per payment',
          'Average salary: around €1,300 gross / roughly €1,020–1,100 net per payment, depending on IRS',
          'Gross difference between €920 and €1,300: €380',
          'After SS and IRS, the take-home difference is often smaller than it appears from the gross figures',
          '€1,300 × 14 = €18,200 gross per year',
          'At €1,300, the employee pays SS of €143 per payment',
          'Employer cost of €1,300: €1,608.75 per payment',
          'For immigration, banking and rental checks, stable gross income and the contrato are usually considered, not only the “net” amount'
        ] },
        { kind: 'paragraph', text: 'If you are comparing offers, put everything on the same basis: 12 or 14 payments, whether subsídio de alimentação is included, whether there are prémios, what the hours are, remote/hybrid, fixed-term or open-ended contrato.' }
      ]
    },
    {
      id: 'lisbon-tech',
      title: 'Benchmarks for a Lisbon software dev',
      content: [
        { kind: 'paragraph', text: 'For a Lisbon software dev in 2026, the typical market range is much higher than the SMN: roughly €2,500–4,500 gross per month for middle/senior roles on a Portuguese contract. Junior, support and manual QA roles may be lower; international remote and contractor work may be higher, but with different taxes and risks.' },
        { kind: 'checklist', items: [
          '€2,500 gross × 14 = €35,000 per year',
          '€4,500 gross × 14 = €63,000 per year',
          'Employee SS: 11% of salary',
          'Employer SS: 23.75% on top of salary',
          'Net at €2,500 gross is often around €1,650–1,850 per payment, depending on IRS and family status',
          'Net at €4,500 gross is often around €2,650–3,000 per payment, depending on IRS and deductions',
          'Count stock options, prémios, ajudas de custo and meal allowance separately: the tax treatment differs',
          'If a company offers recibos verdes instead of an employment contract, compare not gross pay but full annual net after IRS, IVA, SS and the absence of paid holidays'
        ] },
        { kind: 'warning', text: 'An offer of €2,500 as an employee and an invoice of €2,500 as recibos verdes are not the same thing. A self-employed worker has no 13th/14th salary, paid holiday, dismissal protection or employer SS; this should be compensated by a higher rate.' }
      ]
    },
    {
      id: 'how-to-check-contract',
      title: 'How to check your contrato and payslip',
      content: [
        { kind: 'paragraph', text: 'Minimum check: the contrato de trabalho must state a gross salary not below the SMN for full-time hours, horário de trabalho, category, workplace, type of contract and payment rules.' },
        { kind: 'checklist', items: [
          'Check that salário base for full-time work is not below €920',
          'Confirm whether they pay 14 payments or 12 with duodécimos',
          'Check whether subsídio de alimentação is stated separately from base salary',
          'Compare the recibo de vencimento: base, SS 11%, IRS, meal allowance, overtime',
          'Overtime must be shown separately, not silently “included” in the minimum wage',
          'If you work nights, public holidays or shifts, check the supplements',
          'Under a collective agreement, the sector/categoria may require a salary above the SMN',
          'If in doubt, write to ACT or use the Livro de Reclamações eletrónico'
        ] },
        { kind: 'paragraph', text: 'ACT is the main authority for labour breaches: non-payment of salary, pay below the SMN, absence of recibo de vencimento, bogus recibos verdes, unlawful hours and pressure to sign “by agreement”.' }
      ]
    }
  ],
  costs: [
    { label: 'SMN 2026, gross per payment', amountEUR: 920, note: 'Usually 14 payments per year under a full-time contrato de trabalho' },
    { label: 'SMN 2026, indicative net per payment', amountEUR: 818.8, note: 'After 11% Segurança Social; IRS depends on the situation, but minimum wage often has no withholding' },
    { label: 'SMN cost for the employer per payment', amountEUR: 1138.5, note: '€920 + 23.75% Segurança Social' },
    { label: 'Average salary benchmark', amountEUR: 1300, note: 'Gross per month; net depends on the IRS withholding table and family status' },
    { label: 'Lisbon software dev, gross benchmark', amountEURMin: 2500, amountEURMax: 4500, note: 'For middle/senior employee contracts; market range, not a legal minimum' }
  ],
  sources: [
    { title: 'DRE — Decreto-Lei on the update of the retribuição mínima mensal garantida', url: 'Replace with the exact DRE permalink for the Decreto-Lei that updates the retribuição mínima mensal garantida to €920 for 2026, and include the decree number/date in the title.', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACT — information on retribuição mínima mensal garantida and labour rights', url: 'https://www.act.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — contributions for employees', url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INE — remuneration statistics in Portugal', url: 'https://www.ine.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
