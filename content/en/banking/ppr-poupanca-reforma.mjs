export default {
  editorialVoice: 'hackportugal',
  id: 'ppr-poupanca-reforma',
  categoryId: 'banking',
  title: 'PPR — retirement savings and a 20% IRS deduction',
  tldr: 'PPR (Plano Poupança Reforma) is a Portuguese retirement product: either a fund or life insurance. For a Portuguese tax resident, a contribution gives a 20% IRS deduction: maximum €400 up to age 35, €350 from 35 to 50, €300 after 50. On a legal withdrawal, PPR gains are usually taxed at 8% instead of the standard 28%. But if you take the money out “just because” after receiving the deduction, you will have to repay the tax benefit with a 10% surcharge for each year.',
  tags: ['ppr', 'irs', 'pension', 'taxes'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-ppr',
      title: 'What a PPR is and who needs one',
      content: [
        { kind: 'paragraph', text: 'PPR means Plano Poupança Reforma. It is not the state Segurança Social pension, but a private product for long-term savings: a bank/insurance PPR with capital guarantee, or an investment PPR fund with market risk.' },
        { kind: 'paragraph', text: 'The main reason to use a PPR in Portugal is tax-related: the contribution reduces the IRS payable, and gains on a proper withdrawal are taxed at a favourable rate. For an expat, it is one of the few mainstream tools where the tax advantage is clear in advance.' },
        { kind: 'checklist', items: [
          'Suitable for Portuguese tax residents who file IRS Modelo 3',
          'Especially useful for those who have IRS payable: salary, recibos verdes, rent, investment income',
          'Also works for foreigners: Portuguese citizenship is not required',
          'Does not make sense if you have no IRS tax to pay: the deduction does not turn into “cashback” beyond the tax due',
          'Is not a deposit of up to €100,000 covered by the Fundo de Garantia de Depósitos if it is a fund or unit-linked insurance',
          'Suitable for a 5+ year horizon; for a 3-month emergency fund, a normal deposit or conta poupança is better'
        ] }
      ]
    },
    {
      id: 'irs-deduction',
      title: 'IRS deduction: 20% of the contribution',
      content: [
        { kind: 'paragraph', text: 'Under art. 21 Estatuto dos Benefícios Fiscais, PPR contributions give a tax deduction of 20% of the amount paid in. The limit depends on the subscriber’s age on 1 January of the contribution year.' },
        { kind: 'checklist', items: [
          'Up to age 35: maximum deduction of €400 per year, requiring a €2,000 contribution',
          'From 35 to 50: maximum deduction of €350 per year, requiring a €1,750 contribution',
          'Over 50 and until retirement: maximum deduction of €300 per year, requiring a €1,500 contribution',
          'If you contribute less, the deduction equals 20% of the actual contribution',
          'If you contribute more than the limit, the excess part does not give an additional deduction',
          'The contribution must be made by 31 December of the relevant year',
          'In the IRS return for 2026, the deduction is reported in the 2027 IRS campaign, usually from 1 April to 30 June',
          'The deduction reduces the tax payable, but is limited by the general deductions à coleta system'
        ] },
        { kind: 'paragraph', text: 'Example: you are 34, a tax resident, and contribute €2,000 to a PPR in 2026. In IRS 2026, you can potentially reduce your tax by €400. If your final IRS payable before the deduction was €250, you cannot get €400 back solely because of the PPR: the deduction cannot create negative tax beyond the applicable rules.' },
        { kind: 'warning', text: 'If you have only just moved and have not yet become a Portuguese tax resident, check your year of residence. You can buy a PPR with a NIF, but the tax advantage only appears in Portuguese IRS.' }
      ]
    },
    {
      id: 'tax-on-withdrawal',
      title: 'Tax on withdrawal: 8% instead of 28%',
      content: [
        { kind: 'paragraph', text: 'The usual tax on investment income in Portugal is 28%. A favourable regime applies to PPR: when withdrawn in legally permitted cases, gains are usually taxed at an effective rate of 8%, provided the holding periods are met.' },
        { kind: 'checklist', items: [
          'Favourable withdrawal: old-age retirement',
          'Reaching age 60',
          'Long-term unemployment of the subscriber or a family member',
          'Permanent incapacity for work',
          'Serious illness',
          'Death of the subscriber: withdrawal by heirs/beneficiaries',
          'Payment of regular mortgage instalments on habitação própria e permanente',
          'For the age-60 and pension cases, a term of at least 5 years is usually required for the relevant contributions'
        ] },
        { kind: 'paragraph', text: 'If you withdraw a PPR outside the permitted conditions, the tax rate on gains depends on the holding period: up to 5 years — 21.5%, from 5 to 8 years — 17.2%, after 8 years — 8.6%. This may still be lower than 28%, but the problem is not the rate; it is the repayment of the tax benefit.' },
        { kind: 'warning', text: 'The key trap: if you used the IRS deduction and take the money out outside the legal conditions, you must repay the tax benefit received plus 10% for each year elapsed since the year you received the deduction. So do not put money into a PPR that you may urgently need.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'How to choose a PPR without fooling yourself',
      content: [
        { kind: 'paragraph', text: 'The word PPR does not mean “risk-free”. The market has conservative insurance PPRs with capital guarantees, mixed PPRs, and PPR funds with equities/bonds. The tax wrapper is the same; the risk and fees are different.' },
        { kind: 'checklist', items: [
          'Check the product type: seguro PPR, fundo PPR or unit-linked',
          'Look at the comissão de subscrição: entry fee',
          'Look at the comissão de gestão anual: annual fee, often more important than the entry fee',
          'Check the comissão de reembolso: withdrawal fee',
          'Clarify whether there is a garantia de capital; if so, who provides the guarantee',
          'Compare performance over 3, 5 and 10 years, but do not buy solely on past performance',
          'Check the portfolio composition: equities, bonds, deposits, geography',
          'Clarify the minimum contribution and the option of reforços mensais',
          'Check the rules for transferring a PPR to another provider',
          'Keep the Documento de Informação Fundamental / ficha técnica'
        ] },
        { kind: 'paragraph', text: 'A practical approach: if you only want the tax deduction and low risk over 5–8 years, look at a conservative PPR with low fees. If your horizon is 15–25 years, an investment PPR may be more logical, but drawdowns will be real.' }
      ]
    },
    {
      id: 'how-to-use',
      title: 'Steps to take in 2026',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-residency', title: '1. Check tax residence', content: [
            { kind: 'paragraph', text: 'A PPR makes sense for IRS if you are a Portuguese tax resident in 2026 or will definitely file IRS as a resident. A NIF by itself is not the same as tax residence.' }
          ] },
          { id: 'calculate-limit', title: '2. Calculate your limit', content: [
            { kind: 'paragraph', text: 'Determine your age on 1 January 2026: under 35 — €2,000 contribution for a €400 deduction; 35–50 — €1,750 for €350; over 50 — €1,500 for €300.' }
          ] },
          { id: 'choose-provider', title: '3. Choose a bank, insurer or management company', content: [
            { kind: 'paragraph', text: 'PPRs are sold, for example, by banks, seguradoras and sociedades gestoras. Compare risk, fees, liquidity and transfer rules, not the brand.' }
          ] },
          { id: 'subscribe', title: '4. Subscribe and pay in by 31 December', content: [
            { kind: 'paragraph', text: 'You usually need a NIF, identity document, address, IBAN, tax residence and a MiFID investor questionnaire/insurance questionnaire. The contribution can be made as a lump sum or through regular reforços.' }
          ] },
          { id: 'irs', title: '5. Check IRS', content: [
            { kind: 'paragraph', text: 'The provider usually reports contributions to Autoridade Tributária, but before filing Modelo 3, check Anexo H and the documents. Keep annual statements and comprovativos de subscrição.' }
          ] }
        ] }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Buying a PPR as a non-resident and expecting an IRS deduction — there may be no deduction',
          'Contributing €2,000 after age 35 and expecting a €400 deduction — the limit is already €350',
          'Treating 20% as a guaranteed return — it is a tax deduction, not product income',
          'Forgetting that the deduction is limited by the amount of IRS payable',
          'Withdrawing the money after 2 years “for renovation” and triggering repayment of the benefit with a 10% surcharge for each year',
          'Choosing a product with a high annual management fee for the sake of a small tax bonus',
          'Confusing PPR with state Segurança Social contributions and the future pension',
          'Not checking how the PPR will be taxed in the country of a future move'
        ] },
        { kind: 'warning', text: 'If you plan to leave Portugal in 1–2 years, a PPR may be inconvenient: the tax advantage is tied to Portuguese IRS, and the withdrawal rules are long-term. Before buying, check the emigration scenario and taxation in the new country.' }
      ]
    }
  ],
  sources: [
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, art. 21: PPR and tax benefits',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS: Modelo 3 / Anexo H forms and instructions',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PwC Portugal Tax Summaries — individual tax credits and incentives',
      url: 'https://taxsummaries.pwc.com/portugal/individual/other-tax-credits-and-incentives',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CGD Saldo Positivo — PPR tax benefits',
      url: 'https://www.cgd.pt/Site/Saldo-Positivo/protecao/Pages/beneficios-fiscais-ppr.aspx',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
