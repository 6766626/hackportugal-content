export default {
  editorialVoice: 'hackportugal',
  id: 'madeira-irs-rates',
  categoryId: 'taxes',
  title: 'IRS in Madeira: a separate tax rate for residents of the autonomous region',
  tldr: 'Tax residents of Madeira use a separate IRS table, not the mainland Portugal table. In 2026 Madeira has reduced rates: for the lower bracket MCS indicates 8.75% versus the mainland reference 12.50%; however, the current nationwide first IRS rate for 2026 is 11.97%, so check the final calculation in the AT simulator. For capital income, the standard special rate in Madeira is 19.6% instead of 28%. The key condition is fiscal domicile in Madeira.',
  tags: ['irs', 'madeira', 'taxes', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'What exactly is different in Madeira',
      content: [
        { kind: 'paragraph', text: 'Madeira is a Região Autónoma, so for residents of the region IRS is calculated using its own regional scale. This is not a discount that you have to request separately, but a separate table of rates applied in the annual Modelo 3 return if your tax domicile belongs to Madeira.' },
        { kind: 'paragraph', text: 'The main practical difference is lower progressive IRS rates and lower special rates for some passive income. According to MCS materials for 2026, the first regional Madeira rate is 8.75%, and the standard special rate on capital income is 19.6% instead of 28% in mainland Portugal.' },
        { kind: 'warning', text: 'Do not confuse three regimes: ordinary Madeira regional rates, IFICI and Zona Franca/MIBC. Moving to Madeira by itself does not make you an IFICI participant and does not grant MIBC corporate benefits.' }
      ]
    },
    {
      id: 'who-qualifies',
      title: 'Who is entitled to Madeira rates',
      content: [
        { kind: 'paragraph', text: 'Madeira rates apply to individuals who are tax residents of Portugal and have fiscal domicile in the Região Autónoma da Madeira. For an expat this usually means: you live on the island, have updated your address with Finanças and file IRS as a resident.' },
        { kind: 'checklist', items: [
          'You are a tax resident of Portugal: usually 183+ days in the country during the year or housing indicating an intention to live there permanently.',
          'Your address in the NIF has been updated to Madeira via Portal das Finanças, balcão Finanças or with the help of a representante fiscal.',
          'You have proof of residence: a rental contract, escritura/caderneta predial, a utility bill or atestado de residência.',
          'The Modelo 3 IRS states the correct fiscal domicile belonging to the Região Autónoma da Madeira.',
          'Income is declared as resident income in Portugal, including foreign income, if you have become a tax resident.',
          'If you moved during the year, the actual move date and the date the address was changed with Finanças matter — do not leave the old mainland address until filing IRS.',
          'If you have a spouse/partner and a joint return, check the address and residence status of both taxpayers.'
        ] },
        { kind: 'warning', text: 'Owning a flat in Madeira is not the same as Madeira tax residency. Finanças looks at fiscal domicile and the actual connection to the region, not only at the purchase of property.' }
      ]
    },
    {
      id: 'income-types',
      title: 'Which income benefits from the regional rate',
      content: [
        { kind: 'paragraph', text: 'The reduction is most noticeable on ordinary taxable income: salary, pension, self-employment/recibos verdes, and part of rental income when choosing englobamento. In 2026 the first nationwide IRS rate for the mainland after updates is 11.97%, but Madeira applies its own reduced regional table; MCS commercial reviews separately indicate a lower Madeira rate of 8.75%.' },
        { kind: 'checklist', items: [
          'Categoria A — salary under a contrato de trabalho.',
          'Categoria B — recibos verdes, freelancing, sole trader.',
          'Categoria H — pensions, if they are taxable in Portugal.',
          'Categoria F — rent, if you choose englobamento instead of the autonomous rate.',
          'Categoria E — interest and dividends: there is often a choice between retenção liberatória/special rate and englobamento.',
          'Categoria G — capital gains: depends on the type of asset, residency and englobamento rules.',
          'Foreign income must also be declared if you are resident in Portugal; double taxation treaties and foreign tax credit apply.'
        ] },
        { kind: 'paragraph', text: 'For capital income, Madeira often provides direct savings: the standard special rate of 28% on the mainland is reduced by 30%, that is, to 19.6%. This is especially important for interest, certain dividends, rental income under the autonomous rate and some capital gains.' }
      ]
    },
    {
      id: 'how-to-set-up',
      title: 'How not to lose the Madeira rate',
      content: [
        { kind: 'substeps', items: [
          { id: 'change-address', title: '1. Update your fiscal domicile', content: [
            { kind: 'paragraph', text: 'After moving, change the address in your NIF to Madeira. If you have a Cartão de Cidadão or Chave Móvel Digital (CMD), some operations can be done online; for foreigners with a residence permit it is often easier via Portal das Finanças or in person at a serviço de Finanças.' }
          ] },
          { id: 'keep-proof', title: '2. Keep proof of residence', content: [
            { kind: 'checklist', items: [
              'Contrato de arrendamento registered with Finanças.',
              'Recibos de renda from the landlord.',
              'Electricity, water and internet bills in your name.',
              'Atestado de residência from the Junta de Freguesia.',
              'Employment contract or recibos verdes with activity in Madeira.',
              'Tickets and moving documents if the year was transitional.'
            ] }
          ] },
          { id: 'file-irs', title: '3. Check Modelo 3 before submitting', content: [
            { kind: 'paragraph', text: 'IRS filing usually runs from 1 April to 30 June for the previous tax year. In the return, check the address, region, household composition, anexos and taxation regime for E/F/G income: sometimes englobamento is more advantageous, sometimes the special 19.6% rate is better.' }
          ] }
        ] }
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'They left the NIF address in Lisbon/Porto, even though they live in Madeira.',
          'They think an Airbnb rental for 2 months automatically gives regional rates.',
          'They do not declare foreign interest, dividends or a brokerage account because the money did not come to Portugal.',
          'They compare only the lowest rate, but do not calculate the whole IRS: deductions, social security, surcharge and foreign tax credit can change the result.',
          'They confuse withholding tax with final tax: withholding at source is not always equal to the final IRS.',
          'They do not check whether englobamento is advantageous for interest, dividends, rent and capital gains.',
          'They rely on old NHR tables: NHR is closed to new applicants, it has been replaced by IFICI, and the Madeira regional rate exists separately.'
        ] },
        { kind: 'warning', text: 'If Finanças considers that your real tax domicile is not in Madeira, the return may be recalculated under mainland rules and an additional payment, juros compensatórios and a fine may be charged.' }
      ]
    }
  ],
  costs: [
    { label: 'Changing fiscal domicile with Finanças', amountEUR: 0, note: 'Usually free; costs are possible only for notarial/translation documents or a representative.' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'The fee depends on the freguesia; it is often needed as proof of address.' },
    { label: 'Accountant/consultor fiscal for IRS', amountEURMin: 80, amountEURMax: 300, note: 'Typical range for a private return with foreign income; complex cases cost more.' }
  ],
  sources: [
    {
      title: 'MCS: Personal Income Tax in Madeira vs Mainland Portugal in 2026',
      url: 'https://mcs.pt/personal-income-tax-in-madeira-vs-mainland-portugal-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MCS: Reduced IRS Rates in Madeira — Who Qualifies in 2026',
      url: 'https://mcs.pt/reduced-irs-rates-in-madeira-who-qualifies-in-2026/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: IRS Code, general rates and special rates',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/irs/Pages/irs68.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Organic Law 2/2013 — Finance Law of the Autonomous Regions',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2013-34545875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
