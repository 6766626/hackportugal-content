export default {
  editorialVoice: 'hackportugal',
  id: 'eni-vs-sociedade-unipessoal',
 categoryId: 'work_business',
 title: 'ENI vs Sociedade Unipessoal: choosing a self-employment structure',
  tldr: 'ENI is a quick start as a trabalhador independente/Empresário em Nome Individual: open atividade in Finanças for free, you may qualify for the IVA exemption up to €15,000/year under art. 53 CIVA, but liability is with your personal assets. Sociedade Unipessoal por Quotas is a separate company with a NIPC and limited liability, but it is more expensive: Empresa na Hora €360, an accountant usually €100-250/month, IRC 20% and IVA from the first euro. The €12,500/year threshold in 2026 is already outdated.',
  tags: ['eni', 'lda', 'iva', 'business'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'quick-choice',
      title: 'Quick choice: when ENI, when Unipessoal',
      content: [
        { kind: 'paragraph', text: 'ENI and a regular trabalhador independente, in tax practice, both go through your personal atividade in Finanças and category B IRS income. Sociedade Unipessoal por Quotas is a separate legal person: a company with one shareholder, its own NIPC, bank account, accounting and corporate liability.' },
        { kind: 'checklist', items: [
          'Choose ENI if you are testing the market, turnover is low, contractual risks are low, and there are no employees or major equipment.',
          'ENI suits freelancers, consultants, designers, IT specialists, teachers and service tradespeople if clients accept recibos verdes.',
          'Choose Sociedade Unipessoal if there is significant commercial risk: office rent, warehouse, employees, physical goods, warranty obligations, large B2B contracts.',
          'Unipessoal often looks more solid to corporate clients: a contract with a company, NIPC, commercial certidão permanente.',
          'If protecting personal assets matters, ENI is weaker: business debts are your personal debts.',
          'If turnover is unstable and expenses are low, ENI is usually cheaper and simpler.',
          'If there are many expenses and you need a salary + dividends structure, Unipessoal may be more tax-efficient, but only after calculation with a contabilista certificado.'
        ] }
      ]
    },
    {
      id: 'eni',
      title: 'ENI / atividade em nome individual: advantages and risks',
      content: [
        { kind: 'paragraph', text: 'ENI is opened through Portal das Finanças as início de atividade. Usually this takes one visit to Finanças or an online declaration if you have access to the portal. No separate NIPC is created: you operate under your own NIF.' },
        { kind: 'checklist', items: [
          'Registration with Finanças — €0.',
          'Income goes into IRS as category B.',
          'You can be in the regime simplificado if annual income does not exceed €200,000.',
          'Under the simplified regime, the taxable base is calculated using coefficients: for example, for many services 75% of income is applied, and part of the expenses is recognised automatically or through proof.',
          'IVA exemption under art. 53 CIVA in 2026 may be possible with turnover up to €15,000/year, if the other conditions of the regime are met.',
          'The €12,500/year threshold is an old value; in 2026 you should not rely on it.',
          'Social contributions for a trabalhador independente are usually calculated quarterly; the standard rate is 21.4% of relevant income.',
          'For services, relevant income is usually 70% of income; for sales of goods, 20%.',
          'There is an exemption from Segurança Social during the first 12 months of the first atividade, but it must be checked against the specific situation.'
        ] },
        { kind: 'warning', text: 'The main downside of ENI is unlimited liability. If a client claims damages, a supplier files a lawsuit, or a tax/contribution debt arises, you are not liable with the “business”, but with all personal assets: bank account, car, share in property.' }
      ]
    },
    {
      id: 'unipessoal',
      title: 'Sociedade Unipessoal por Quotas: what changes',
      content: [
        { kind: 'paragraph', text: 'Sociedade Unipessoal por Quotas is an Lda with one shareholder. The company has its own NIPC, share capital, gerente, bank account, accounting and files corporate reports. Liability is usually limited to the capital contribution, but personal guarantees, tax breaches and mixing personal/corporate money can pierce this protection.' },
        { kind: 'checklist', items: [
          'Creation through Empresa na Hora usually costs €360.',
          'Minimum capital is practically flexible: quotas can start from €1, but banks and clients take reasonable capital more seriously.',
          'A Contabilista Certificado is required; the typical market for a small company is around €100-250/month, more with payroll, imports, e-commerce or a high document volume.',
          'The company must keep contabilidade organizada.',
          'The IVA exemption under art. 53 CIVA usually does not apply to companies with organised accounting; in practice an Lda charges IVA from the first euro if the activity is not exempt under a special rule.',
          'Profit is subject to IRC: the standard rate in mainland Portugal is 20%; for PME a reduced rate of 16% may apply to the first €50,000 of taxable profit.',
          'Municipal derrama may add up to 1.5% depending on the Câmara Municipal.',
          'Company money is not your personal money: it is withdrawn as gerente salary, dividends, reimbursement of expenses or other properly documented payments.'
        ] },
        { kind: 'warning', text: 'Unipessoal does not mean “taxes are automatically lower”. If you withdraw all profit to yourself, IRC, possible derrama, Segurança Social on the gerente salary and IRS/28% on dividends appear. Savings are possible, but they must be calculated against your turnover, expenses and family IRS rate.' }
      ]
    },
    {
      id: 'tax-and-vat',
      title: 'Taxes and IVA: the key €15,000 fork',
      content: [
        { kind: 'paragraph', text: 'For most new freelancers, the main practical question is IVA. In 2026 the current small-turnover exemption limit under art. 53 CIVA is €15,000/year, not €12,500. If you, as ENI, stay within the limit and meet the conditions, you can issue recibos without IVA with a note of the exemption regime.' },
        { kind: 'checklist', items: [
          'ENI up to €15,000/year: often without IVA under art. 53 CIVA, with simpler pricing for private clients.',
          'ENI above €15,000/year: you usually need to move to the normal regime IVA, file declarações periódicas and charge IVA.',
          'If you sell to B2B clients in the EU, reverse charge, recapitulative statements and VIES may arise — this does not remove the obligation to open atividade correctly.',
          'Unipessoal: budget for the IVA regime and regular reporting from the start if the activity is not exempt under a special rule.',
          'IRS for ENI is progressive: in 2026 the first IRS rate is 11.97%, but the real rate depends on total family income, deductions and place of tax residence.',
          'IRC for a company is calculated on profit after expenses, not on turnover.',
          'Large documented expenses, equipment, subcontractors and salaries more often make a company more logical.'
        ] },
        { kind: 'warning', text: 'Do not choose the structure only because of the IVA threshold. If you exceed €15,000 almost immediately, ENI’s IVA advantage disappears, but personal liability remains.' }
      ]
    },
    {
      id: 'decision-process',
      title: 'How to decide without guesswork',
      content: [
        { kind: 'paragraph', text: 'Make a 12-month calculation. In Portugal, the business structure affects not only tax, but also client trust, access to contracts, liability and administration costs.' },
        { kind: 'checklist', items: [
          'Estimate turnover: up to €15,000, €15,000-50,000, €50,000-200,000 or higher.',
          'Calculate expenses: software, equipment, rent, transport, subcontractors, marketing, insurance.',
          'Check the risk of claims: access to client data, financial advice, repairs, construction, medicine, logistics, e-commerce.',
          'Ask clients whether they need a contract with an Lda or whether a recibo verde is enough.',
          'Calculate accountant and payroll costs for Unipessoal.',
          'Check whether professional civil liability insurance is needed regardless of the structure.',
          'Model money withdrawals: ENI = personal income; Unipessoal = salary, dividends or reimbursement.',
          'Before moving from ENI to Lda, close/change atividade, transfer contracts, update bank details and invoicing terms.'
        ] }
      ]
    },
    {
      id: 'practical-rule',
      title: 'Practical rule for an expat',
      content: [
        { kind: 'paragraph', text: 'If you have just moved, are getting your first contracts and are unsure about turnover, ENI is often the best start: fast, free, less bureaucracy. If the business already brings stable income, there are risky contracts or you are hiring people, Sociedade Unipessoal is usually safer and more professional.' },
        { kind: 'paragraph', text: 'A typical path: start as ENI, validate demand, then open a Unipessoal when turnover, risks or client requirements justify it. But if the activity is high-risk from the outset — for example, construction work, trading goods, medical/financial services, storing other people’s data or B2B contracts with indemnity clauses — it is better to consider a company immediately.' },
        { kind: 'warning', text: 'Do not mix personal and business money in a Unipessoal. Paying personal rent, groceries or travel from the company account without a basis creates tax and corporate risks.' }
      ]
    }
  ],
  costs: [
    { label: 'Opening ENI / início de atividade', amountEUR: 0, note: 'Through Portal das Finanças or a Finanças office' },
    { label: 'Creating a Sociedade Unipessoal through Empresa na Hora', amountEUR: 360, note: 'Standard company registration cost' },
    { label: 'Certificado de admissibilidade de firma', amountEURMin: 75, amountEURMax: 150, note: 'Needed for a custom name; standard and urgent request' },
    { label: 'Accountant for Unipessoal', amountEURMin: 100, amountEURMax: 250, note: 'Typical monthly range for a small company; e-commerce/payroll costs more' }
  ],
  sources: [
    {
      title: 'RoyalTax: ENI or One-person Company in Portugal',
      url: 'https://royaltax.pt/tpost/u7g2zkbkb1-individual-entrepreneur-eni-or-one-perso',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: Empresa na Hora and company registration',
      url: 'https://eportugal.gov.pt/servicos/criar-uma-empresa-na-hora',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: início de atividade',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00286.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA, art. 53: regime especial de isenção',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
