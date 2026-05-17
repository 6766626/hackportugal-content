export default {
  editorialVoice: 'hackportugal',
  id: 'acores-irs-rates',
  categoryId: 'taxes',
  title: 'IRS in the Açores: separate 2026 withholding tables for autonomous region residents',
  tldr: 'If you are a tax resident of Região Autónoma dos Açores, your salary or pension in 2026 is withheld not under the Continente tables and not under Madeira, but under the separate tabelas de retenção na fonte dos Açores, approved by Despacho 1179/2026. This is advance IRS withholding, not the final tax: the final calculation is still made in the Modelo 3 return for 2026 in 2027. Check that your employer/pension fund applies Açores specifically, especially if you work remotely for a company on the mainland.',
  tags: ['irs', 'açores', 'taxes', 'retenção'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'What is different in the Açores',
      content: [
        { kind: 'paragraph', text: 'Região Autónoma dos Açores has its own retenção na fonte tables for IRS. In 2026 they are approved by Despacho 1179/2026 and apply separately from the Continente and Madeira tables.' },
        { kind: 'paragraph', text: 'Retenção na fonte is a monthly advance payment of IRS that the employer, pension fund or other payer withholds from income. It is not the final tax rate: the final amount is calculated after filing Modelo 3 in 2027, taking into account all income, deductions, family composition and residence.' },
        { kind: 'checklist', items: [
          'If you live and are a tax resident in the Açores — the Açores tables apply.',
          'If your employer is in Lisboa/Porto, but your tax residence and address in Finanças are in the Açores, withholding must be under the Açores tables.',
          'If you live on the mainland but your employer is registered in the Açores, the Açores tables do not apply by themselves.',
          'Madeira has its own tables; you cannot mix Madeira and Açores.',
          'For recibos verdes, the standard retenção depends on the type of income and CIRS rules, not on the employee salary table.'
        ] }
      ]
    },
    {
      id: 'who-uses',
      title: 'Who this matters for in 2026',
      content: [
        { kind: 'paragraph', text: 'In practice, this affects everyone who receives a salary or pension and has a tax address in the Azores: São Miguel, Terceira, Faial, Pico, Santa Maria, São Jorge, Graciosa, Flores or Corvo.' },
        { kind: 'checklist', items: [
          'Employees under a contrato de trabalho.',
          'Pensioners with a pension subject to IRS in Portugal.',
          'Expats on D7/D8/D1-D3 who have already become tax residents in the Açores.',
          'Employees of Portuguese companies working remotely from the Azores.',
          'Families where one spouse works for a mainland company, but the household is registered in Açores.',
          'People who moved from Continente to Açores during 2026 and updated their tax address.'
        ] },
        { kind: 'warning', text: 'The main risk is that payroll applies Continente out of habit. The difference is only noticed on the recibo de vencimento or during the annual IRS, when an unexpected additional payment or refund may appear.' }
      ]
    },
    {
      id: 'check-payroll',
      title: 'How to check that withholding is correct',
      content: [
        { kind: 'paragraph', text: 'The check takes 10 minutes. You need a recibo de vencimento for a month in 2026, your family status for IRS and confirmation of your tax address in Finanças.' },
        { kind: 'substeps', items: [
          { id: 'address', title: '1. Check your morada fiscal', content: [
            { kind: 'paragraph', text: 'In Portal das Finanças, open Dados Pessoais → Morada Fiscal. The address must be in the Açores. If the address is still on the mainland, payroll may formally apply the wrong table.' }
          ] },
          { id: 'payslip', title: '2. Open the recibo de vencimento', content: [
            { kind: 'checklist', items: [
              'Find the IRS or Retenção IRS line.',
              'Check the monthly base: salário base + regular allowances, if taxable.',
              'Check whether there are separate lines for subsídio de refeição, duodécimos, prémios.',
              'Compare the withholding with the Açores table for your status: não casado, casado 1 titular, casado 2 titulares, dependentes.',
              'If the amount matches the Continente table and you are an Açores resident — write to payroll.'
            ] }
          ] },
          { id: 'ask-hr', title: '3. Ask HR to correct it', content: [
            { kind: 'paragraph', text: 'Write briefly: “A minha morada fiscal é na Região Autónoma dos Açores. Peço a aplicação das tabelas de retenção na fonte de IRS dos Açores para 2026, aprovadas pelo Despacho 1179/2026.” Attach a comprovativo de morada fiscal if requested.' }
          ] }
        ] }
      ]
    },
    {
      id: 'not-final-tax',
      title: 'Do not confuse withholding with final IRS',
      content: [
        { kind: 'paragraph', text: 'The retenção table only decides how much to withhold now. Final IRS for 2026 is calculated in 2027 in the Modelo 3 return. It takes into account progressive rates, deductions, dependentes, despesas gerais familiares, saúde, educação, rendas, PPR and other deductions.' },
        { kind: 'checklist', items: [
          'Lower withholding every month does not mean the tax has been “forgiven”.',
          'If too little was withheld — there will be a nota de cobrança to pay after liquidação.',
          'If too much was withheld — there will be a reembolso.',
          'When changing region in the middle of the year, the dates of actual and tax residence matter.',
          'Foreign income is declared separately; the employer withholding table does not see it.',
          'Having IFICI, the old NHR or a favourable regime does not remove the duty to check payroll.'
        ] },
        { kind: 'warning', text: 'If you receive a foreign salary without Portuguese payroll, the retenção na fonte tables may not apply at all. But this does not exempt you from IRS: the income may still have to be declared in Portugal as a tax resident.' }
      ]
    },
    {
      id: 'minimum-wage-and-thresholds',
      title: '2026 context: SMN, IAS and low incomes',
      content: [
        { kind: 'paragraph', text: 'In 2026, the salário mínimo nacional is €920 per month, IAS is €537.13. These amounts are important for social and tax calculations, but they do not replace the withholding tables. For salary, you must look specifically at the Açores 2026 table by family type and number of dependentes.' },
        { kind: 'paragraph', text: 'If salary is close to SMN, IRS withholding may be zero or low depending on family situation. But Segurança Social is usually withheld separately: normally 11% from the employee under a contrato de trabalho, if there is no special regime.' },
        { kind: 'warning', text: 'Do not use “Portugal 2026” calculators without selecting the region. Many online calculators calculate Continente by default and give incorrect retenção for Açores.' }
      ]
    },
    {
      id: 'moving-region',
      title: 'If you move between Continente, Madeira and Açores',
      content: [
        { kind: 'paragraph', text: 'When moving, the region for withholding does not change magically. You need to update your morada fiscal and inform your employer. For citizens with Cartão de Cidadão this is done via ePortugal/CMD or in person; for foreigners with a residence permit — via Portal das Finanças or atendimento, depending on access.' },
        { kind: 'checklist', items: [
          'Update your morada fiscal immediately after moving.',
          'Keep the comprovativo de alteração de morada.',
          'Tell HR/payroll the month from which to apply Açores.',
          'Check the next recibo de vencimento.',
          'If withholding used the old table for several months, ask payroll for a correction.',
          'If in doubt, show your accountant all payslips for the year and the moving dates.'
        ] },
        { kind: 'paragraph', text: 'Withholding errors are usually corrected through subsequent payroll months or through the final IRS liquidação. But it is better to correct them during the year so you do not receive a large additional payment in spring-summer 2027.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IRS retenção na fonte tables',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/tabela_ret_doclib/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS on Portal das Finanças',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs99.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PwC Inforfisco: IRS — 2026 retenção na fonte tables',
      url: 'https://www.pwc.pt/pt/pwcinforfisco/flash/irs-e-seguranca-social/irs-tabela-taxas-retencao-fonte-continente-20260.html',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'TOC Online: update to the IRS tables for the Açores',
      url: 'https://toconline.pt/novidades/atualizacao-das-tabelas-de-irs-para-os-acores/',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
