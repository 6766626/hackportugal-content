export default {
  editorialVoice: 'hackportugal',
  id: 'irs-jovem',
  categoryId: 'taxes',
  title: 'IRS Jovem — income tax relief for young people up to 35',
  tldr: 'IRS Jovem reduces IRS for residents of Portugal up to and including 35: 100% exemption in the 1st year, 75% in the 2nd–4th, 50% in the 5th–7th, 25% in the 8th–10th. The exempt income cap is 55 × IAS, i.e. €29,542.15 in 2026. Works for category A and B income, if you are not a dependente and are not using NHR/IFICI/Programa Regressar. In the 2026 IRS return you file 2025 income between 1 April and 30 June 2026.',
  tags: ['irs', 'jovem', 'taxes', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IRS Jovem offers in 2026',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem is a partial exemption from the IRS personal income tax for young tax residents of Portugal. From 2025 the scheme was expanded: you no longer need to prove a specific education level, and the maximum benefit period is 10 years of receiving income.' },
        { kind: 'paragraph', text: 'The relief applies to category A income — salary under a contrato de trabalho — and category B — self-employment, recibos verdes, atividade aberta at Finanças. It reduces the taxable portion of income, not the IRS rate itself.' },
        { kind: 'checklist', items: ['1st year of earning income: 100% exemption', '2nd, 3rd and 4th years: 75% exemption', '5th, 6th and 7th years: 50% exemption', '8th, 9th and 10th years: 25% exemption', 'Annual exemption cap: 55 × IAS', 'IAS 2026: €537.13', '2026 cap: €29,542.15 of exempt income', 'The remaining part of income is taxed at the standard IRS rates', 'First IRS bracket in 2026: 11.97% for the lowest band of taxable income'] },
        { kind: 'warning', text: 'The €29,542.15 cap is the limit of income that can be exempted from IRS, not a maximum salary to qualify. If your income is higher, the relief only applies within the cap.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem is not only for Portuguese citizens. An expat can use the relief if they are a tax resident of Portugal and declare category A or B income here.' },
        { kind: 'checklist', items: ['Age — up to and including 35 on 31 December of the relevant tax year', 'You are a tax resident of Portugal in that year', 'You have a NIF and access to Portal das Finanças', 'You receive a salary or income from recibos verdes / atividade independente', 'You are not listed as a dependente in your parents’ or another household’s return', 'You are not applying NHR — regime dos residentes não habituais', 'You are not applying IFICI — Incentivo Fiscal à Investigação Científica e Inovação', 'You are not applying Programa Regressar', 'You have no tax debt that blocks normal filing of the IRS return'] },
        { kind: 'paragraph', text: 'For foreigners the key criterion is tax residency, not the visa type. D1, D2, D3, D4, D7, D8, a residence permit for work or residência para atividade independente do not themselves grant the relief, but allow you to live and work in Portugal; the tax relief is claimed through IRS.' }
      ]
    },
    {
      id: 'how-years-count',
      title: 'How the 10 years of relief are counted',
      content: [
        { kind: 'paragraph', text: 'The scheme is intended for the first 10 years of earning employment or professional income. What matters is not only the year you moved to Portugal but also your income history if it has already been reported to the Portuguese tax system.' },
        { kind: 'checklist', items: ['If you first become a tax resident and first declare income in Portugal in 2025, then in IRS 2026 this is usually your 1st benefit year', 'If you have worked in Portugal before, Finanças may consider the current year not to be your first', 'Years without category A/B income should generally not “use up” the benefit, but check the pre-filled return', 'If in one year you have both salary and recibos verdes, the relief applies to eligible income within the overall cap', 'If you turn 36 before 31 December of the tax year, the relief no longer applies for that year', 'If you were a dependente on your parents’ return, IRS Jovem does not apply to you separately for that year'] },
        { kind: 'warning', text: 'Do not confuse the tax year and the filing year. From 1 April to 30 June 2026 you file the IRS return for 2025 income. 2026 income will be declared in spring 2027.' }
      ]
    },
    {
      id: 'withholding',
      title: 'How to get the relief already in your salary',
      content: [
        { kind: 'paragraph', text: 'IRS Jovem can be used in two ways: obtain the full effect when filing the IRS return, or ask your employer to apply the relief in retenção na fonte — the monthly tax withholding from your salary.' },
        { kind: 'checklist', items: ['Tell your employer you want to apply IRS Jovem in retenção na fonte', 'Submit a written statement confirming you meet the conditions of art. 12-B CIRS', 'Indicate the expected benefit year: 1st, 2nd, 3rd, etc.', 'Check your payslip: IRS withholding should decrease', 'If you work for multiple employers, inform each one so as not to exceed the cap', 'If you are self-employed, withholding at source depends on the client and the type of recibo verde; the final calculation will still be in the IRS return', 'Keep a copy of the statement to your employer and your payslips'] },
        { kind: 'warning', text: 'If your employer applies too much relief, Finanças will recalculate the tax in the annual return. Any underpayment will have to be repaid via the nota de liquidação.' }
      ]
    },
    {
      id: 'filing-irs',
      title: 'How to claim it in the IRS return',
      content: [
        { kind: 'paragraph', text: 'The IRS return is filed in Portal das Finanças typically from 1 April to 30 June. In 2026 you declare 2025 income. Before submitting, check the automatic pre-fill: IRS Jovem may not be selected automatically, especially for new residents and the self-employed.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'You need your NIF and Finanças password or Chave Móvel Digital (CMD). Check that your address in Finanças is Portuguese and your residency status is correct.' }
          ] },
          { id: 'check-income', title: '2. Check Anexo A or Anexo B', content: [
            { kind: 'checklist', items: ['Anexo A — salary', 'Anexo B — atividade independente / recibos verdes', 'Check your employer’s or clients’ NIF', 'Check withheld IRS', 'Check contribuições para Segurança Social', 'Check that you are not marked as a dependente'] }
          ] },
          { id: 'select-benefit', title: '3. Select IRS Jovem', content: [
            { kind: 'paragraph', text: 'In the relevant section of the return, choose to apply IRS Jovem and indicate the year of the benefit. The Finanças interface changes, so look for fields with “IRS Jovem”, “artigo 12.º-B do CIRS” and the year of application.' }
          ] },
          { id: 'simulate', title: '4. Run a simulation', content: [
            { kind: 'paragraph', text: 'Before submitting, click Simular. Compare the version with IRS Jovem and without it. If the difference is zero, check age, dependente status, the benefit year and incompatible regimes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: ['Opened an atividade and assume IRS Jovem applies automatically — it does not; you still need to check the return', 'Use IFICI and at the same time try to enable IRS Jovem — the regimes are incompatible', 'Moved on a D8 and think foreign income automatically falls under IRS Jovem — the relief concerns categories A/B, but the source and structure of income must be correctly declared', 'Did not change the tax address to Portugal and formally remain a non-resident in Finanças', 'The employer does not apply the relief in withholdings, although the annual return may still refund any overpayment', 'Count 35 years as “until the birthday”; for IRS what matters is age on 31 December of the tax year', 'Confuse bruto, rendimento coletável and the exempt amount: the €29,542.15 cap refers to the exempt portion of eligible income'] },
        { kind: 'warning', text: 'If you have a complex situation — foreign employer, stock options, split payroll, crypto income, working for a company outside Portugal — do not rely solely on the automatic return. A mistake in the income category can cost more than the relief itself.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing the IRS return via Portal das Finanças', amountEUR: 0, note: 'Self-filing is free.' },
    { label: 'Consultation with a contabilista on IRS Jovem', amountEURMin: 50, amountEURMax: 150, note: 'Guide price for a simple return with Anexo A/B; complex foreign income costs more.' },
    { label: 'Maximum income exempt under IRS Jovem in 2026', amountEUR: 29542.15, note: '55 × IAS 2026; the actual saving depends on the IRS rate and total income.' }
  ],
  sources: [
    { title: 'Gov.pt: new IRS Jovem model from 2025', url: 'https://www2.gov.pt/en/noticias/novo-modelo-de-irs-jovem-em-2025', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IRS Jovem', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_jovem_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 45-A/2024 — Orçamento do Estado para 2025, changes to IRS Jovem', url: 'https://diariodarepublica.pt/dr/detalhe/lei/45-a-2024-902610097', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — art. 12.º-B, IRS Jovem regime', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
