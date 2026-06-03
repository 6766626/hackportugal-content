export default {
  editorialVoice: 'hackportugal',
  id: 'irs-jovem',
  categoryId: 'taxes',
  title: 'IRS Jovem — income tax relief for young people up to 35',
  tldr: 'IRS Jovem reduces IRS for residents of Portugal aged up to and including 35: 100% exemption in the 1st year, 75% in the 2nd–4th years, 50% in the 5th–7th years, 25% in the 8th–10th years.\n\nThe exempt income limit is 55 × IAS, i.e. €29,542.15 in 2026. It applies to category A and B income if you are not a dependente and do not use NHR/IFICI/Programa Regressar. In the IRS 2026 return, 2025 income is filed for the period 1 April–30 June 2026.',
  tags: ['irs', 'jovem', 'taxes', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IRS Jovem provides in 2026',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem is a partial exemption from IRS income tax for young tax residents of Portugal. Since 2025, the model has been expanded: it is no longer necessary to prove a specific level of education, and the maximum relief period is 10 years of receiving income.' },
        { kind: 'paragraph', text: 'The relief applies to category A income — salary under a contrato de trabalho — and category B income — self-employment, recibos verdes, atividade aberta in Finanças. It reduces the taxable part of income, not the IRS rate itself.' },
        { kind: 'checklist', items: ['1st year of receiving income: 100% exemption', '2nd, 3rd and 4th years: 75% exemption', '5th, 6th and 7th years: 50% exemption', '8th, 9th and 10th years: 25% exemption', 'Annual exemption cap: 55 × IAS', 'IAS 2026: €537.13', '2026 cap: €29,542.15 of exempt income', 'The remaining part of the income is taxed at the normal IRS rates', 'First IRS rate in 2026: 11.97% for the lowest band of taxable income (2025 income)'] },
        { kind: 'warning', text: 'The €29,542.15 cap is the limit on the amount of income that can be exempted from IRS, not the maximum salary for eligibility. If income is higher, the relief applies only within the limit.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem is not available only to Portuguese citizens. An expat can use the relief if they are a tax resident of Portugal and declare category A or B income here.' },
        { kind: 'checklist', items: ['Age — up to and including 35 on 31 December of the relevant tax year', 'You are a tax resident of Portugal in that year', 'You have a NIF and access to Portal das Finanças', 'You receive a salary or income from recibos verdes / atividade independente', 'You are not listed as a dependente in the tax return of your parents or another household', 'You do not use NHR — regime dos residentes não habituais', 'You do not use IFICI — Incentivo Fiscal à Investigação Científica e Inovação', 'You do not use Programa Regressar', 'You have no tax debt that blocks the normal filing of the IRS return'] },
        { kind: 'paragraph', text: 'For foreigners, the key criterion is tax residence, not the type of visa. D1, D2, D3, D4, D7, D8, a work-based residence permit or residência para atividade independente do not in themselves grant the relief, but they allow you to live and work in Portugal; the tax relief is handled through IRS.' }
      ]
    },
    {
      id: 'how-years-count',
      title: 'How the 10 years of relief are counted',
      content: [
        { kind: 'paragraph', text: 'The scheme is designed for the first 10 years of receiving employment or professional income. What matters is not only the year you moved to Portugal, but also your income history, if it has already been reported to the Portuguese tax system.' },
        { kind: 'checklist', items: ['If you became a tax resident for the first time and declared income in Portugal for the first time in 2025 — in IRS 2026 this is usually the 1st year of relief', 'If you have already worked in Portugal before, Finanças may not count the current year as the first', 'Years without category A/B income should generally not “use up” the relief, but check the pre-filled tax return', 'If in one year you have both salary and recibos verdes, the relief applies to eligible income within the overall limit', 'If you turned 36 before 31 December of the tax year, the relief no longer applies for that year', 'If you were a dependente in your parents’ tax return, IRS Jovem does not apply to you separately for that year'] },
        { kind: 'warning', text: 'Do not confuse the tax year and the filing year. From 1 April to 30 June 2026, the IRS return is filed for 2025 income. 2026 income will be declared in spring 2027.' }
      ]
    },
    {
      id: 'withholding',
      title: 'How to receive the relief directly in your salary',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem can be used in two ways: receive the full effect when filing the IRS return, or ask your employer to take the relief into account in retenção na fonte — the monthly tax withholding from salary.' },
        { kind: 'checklist', items: ['Tell your employer that you want to apply IRS Jovem in retenção na fonte', 'Submit a written statement indicating that you meet the conditions of art. 12-B CIRS', 'State the expected year of relief: 1st, 2nd, 3rd, etc.', 'Check your payslip: IRS withholding should decrease', 'If you work for several employers, notify each one so as not to exceed the limit', 'If you are self-employed, withholding at source depends on the client and the type of recibo verde; the final calculation will still be made in the IRS return', 'Keep a copy of the statement to the employer and your payslips'] },
        { kind: 'warning', text: 'If the employer applies too much relief, Finanças will recalculate the tax in the annual return. Any underpayment will have to be repaid through the nota de liquidação.' }
      ]
    },
    {
      id: 'filing-irs',
      title: 'How to indicate it in the IRS return',
      content: [
        { kind: 'paragraph', text: 'The IRS return is usually filed in Portal das Finanças from 1 April to 30 June. In 2026, you declare 2025 income. Before submitting, check the automatic pre-filling: IRS Jovem may not be selected automatically, especially for new residents and self-employed people.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'You need a NIF and Finanças password or Chave Móvel Digital (CMD). Check that your address in Finanças is Portuguese and that your resident status is correct.' }
          ] },
          { id: 'check-income', title: '2. Check Anexo A or Anexo B', content: [
            { kind: 'checklist', items: ['Anexo A — salary', 'Anexo B — atividade independente / recibos verdes', 'Check the NIF of the employer or clients', 'Check the IRS withheld', 'Check contribuições para Segurança Social', 'Check that you are not marked as dependente'] }
          ] },
          { id: 'select-benefit', title: '3. Select IRS Jovem', content: [
            { kind: 'paragraph', text: 'In the relevant section of the return, choose to apply IRS Jovem and indicate the year of relief. The Finanças interface changes, so look for fields with “IRS Jovem”, “artigo 12.º-B do CIRS” and the year of application.' }
          ] },
          { id: 'simulate', title: '4. Run a simulação', content: [
            { kind: 'paragraph', text: 'Before submitting, click Simular. Compare the version with IRS Jovem and without it. If the difference is zero, check your age, dependente status, year of relief and incompatible regimes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: ['Opening atividade and thinking that IRS Jovem applies automatically — it does not, the return still needs to be checked', 'Using IFICI and trying to activate IRS Jovem at the same time — the regimes are incompatible', 'Moving on D8 and assuming that foreign income automatically falls under IRS Jovem — the relief relates to categories A/B, but the source and structure of the income must be declared correctly', 'Not changing the tax address to Portugal and formally remaining a non-resident in Finanças', 'The employer not applying the relief in withholdings, although the annual return may still refund the overpayment', 'Counting age 35 as “until the birthday”; for IRS, the relevant age is the age on 31 December of the tax year', 'Confusing bruto, rendimento coletável and the exemption amount: the €29,542.15 limit relates to the exempt part of eligible income'] },
        { kind: 'warning', text: 'If you have a complex situation — foreign employer, stock options, split payroll, crypto income, work for a company outside Portugal — do not rely only on the automatic tax return. An error in the income category can cost more than the relief itself.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing the IRS return through Portal das Finanças', amountEUR: 0, note: 'Self-filing is free.' },
    { label: 'Consultation with a contabilista on IRS Jovem', amountEURMin: 50, amountEURMax: 150, note: 'Indicative range for a simple return with Anexo A/B; complex foreign income costs more.' },
    { label: 'Maximum income exempt under IRS Jovem in 2026', amountEUR: 29542.15, note: '55 × IAS 2026; the actual saving depends on the IRS rate and total income.' }
  ],
  sources: [
    { title: 'Gov.pt: new IRS Jovem model from 2025', url: 'https://www2.gov.pt/en/noticias/novo-modelo-de-irs-jovem-em-2025', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IRS Jovem', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_jovem_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 45-A/2024 — Orçamento do Estado for 2025, IRS Jovem changes', url: 'https://diariodarepublica.pt/dr/detalhe/lei/45-a-2024-902610097', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — art. 12.º-B, IRS Jovem regime', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
