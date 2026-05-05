export default {
  editorialVoice: 'hackportugal',
  id: 'imi-property-tax',
  categoryId: 'housing_buy',
  title: 'IMI — municipal property tax',
  tldr: 'Every property owner in Portugal pays IMI: the tax is calculated from the Valor Patrimonial Tributário (VPT), not the purchase price. In 2026 the rates are: 0.3–0.45% for urban property, 0.8% for rural, 7.5% for owners from offshore jurisdictions. The bill appears in Finanças in spring: payment in May, or May/November, or May/August/November. For primeira habitação a relief of up to 3 years is possible when VPT ≤ €125,000 and income ≤ €153,300; “IMI jovem” depends on the municipality.',
  tags: ['imi', 'property', 'finanças', 'vpt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-imi',
      title: 'What IMI is and who pays it',
      content: [
        { kind: 'paragraph', text: 'IMI — Imposto Municipal sobre Imóveis, the annual municipal tax on owning property. It is paid by whoever was the owner, usufructuary or superficiário of the property on 31 December of the previous year.' },
        { kind: 'paragraph', text: 'If you bought a flat in July 2025, the IMI for 2025 will usually come to you in 2026 because on 31.12.2025 you were the owner. If you sold the property before 31 December, the next IMI is usually paid by the buyer.' },
        { kind: 'checklist', items: ['Owners of flats, houses, land, garages, storerooms and shares in property pay it', 'The tax is administered by Autoridade Tributária e Aduaneira via the Portal das Finanças', 'The money goes to the municipality’s budget, so the rate depends on the Câmara Municipal', 'IMI does not replace the condomínio: it is a separate tax, not utilities or service charges', 'IMI is not the same as IMT: IMT is paid on purchase, IMI is paid every year', 'Non-residents also pay IMI if they own property in Portugal'] }
      ]
    },
    {
      id: 'calculation',
      title: 'How the amount is calculated: VPT × rate',
      content: [
        { kind: 'paragraph', text: 'The formula is simple: IMI = Valor Patrimonial Tributário × municipal rate. VPT is the taxable value shown in the Caderneta Predial, calculated by Finanças. It is often below market price, but not always.' },
        { kind: 'checklist', items: ['Urban property — prédios urbanos: rate 0.3–0.45%', 'Rural property — prédios rústicos: rate 0.8%', 'Properties owned by entities from jurisdictions with a privileged tax regime: 7.5%', 'The municipality sets the rate annually and reports it to Finanças', 'The same type of property in Lisboa, Cascais, Porto or Albufeira may have different IMI due to the municipal rate', 'The amount due appears in the Portal das Finanças under Pagamentos or IMI', 'Example: VPT €200,000 × 0.35% = €700 IMI for the year'] },
        { kind: 'warning', text: 'IMI is calculated from the VPT, not from the price in the escritura. If you bought a flat for €450,000 but the VPT is €180,000, the tax is calculated from €180,000. If the VPT is overstated due to outdated coefficients, you can request a reavaliação, but sometimes the reassessment increases the tax — check the simulator first.' }
      ]
    },
    {
      id: 'payment-calendar',
      title: 'When and how to pay in 2026',
      content: [
        { kind: 'paragraph', text: 'Finanças issues a nota de cobrança in spring for the previous tax year. The notice is usually visible in the Portal das Finanças; a paper letter may not arrive in time, especially if your address is outdated.' },
        { kind: 'checklist', items: ['Up to €100 inclusive — one payment in May', 'Over €100 and up to €500 inclusive — two payments: May and November', 'Over €500 — three payments: May, August and November', 'You can pay the full amount in May even if Finanças split it into instalments', 'Payment is available via Multibanco, homebanking, MB WAY, débito direto or at a CTT counter (balcão dos CTT)', 'Use the referência de pagamento from the nota de cobrança to pay', 'Check e-Balcão and the Portal das Finanças if the nota de cobrança has not appeared by May'] },
        { kind: 'warning', text: 'Late payment accrues juros de mora and can move to cobrança coerciva. For expats, frequent causes are an old tax address or no access to the Portal das Finanças. Update your morada fiscal and enable notifications.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Reliefs: primeira habitação, low income, dependants, IMI jovem',
      content: [
        { kind: 'paragraph', text: 'The main national relief is a temporary exemption from IMI for habitação própria e permanente. In 2026 the basic conditions under the Estatuto dos Benefícios Fiscais are: the property is used as your permanent own home, the property’s VPT is not higher than €125,000, and the household’s income for IRS is not higher than €153,300. The relief usually lasts up to 3 years.' },
        { kind: 'checklist', items: ['Your address in Finanças must be changed to the address of the purchased home', 'The property must be afetado a habitação própria e permanente', 'Check the Caderneta Predial: property type, VPT, owners, shares', 'Submit the relief request via the Portal das Finanças or e-Balcão if it was not applied automatically', 'Low-income households may have a separate permanent exemption if they meet the income and VPT limits', 'IMI familiar: the municipality may grant a deduction for dependants — typically €30 for 1, €70 for 2, €140 for 3 or more', '“IMI jovem” is not a single national relief: it is a municipal measure; the age, income, duration and discount percentage are set by the Câmara Municipal', 'The purchase of a primeira habitação by young people up to 35 has separate reliefs for IMT and Imposto do Selo; do not confuse them with IMI'] },
        { kind: 'warning', text: 'Do not count on a relief just because this is your first flat. For IMI, VPT, income, habitação própria e permanente status and the municipality’s decision are what matter. Before buying, check the rate and reliefs of the specific Câmara Municipal.' }
      ]
    },
    {
      id: 'practical-checks',
      title: 'What to check after buying',
      content: [
        { kind: 'checklist', items: ['Get the Caderneta Predial Urbana in the Portal das Finanças', 'Check the VPT, artigo matricial, fração, area and designated use of the property', 'Change your morada fiscal to the new address if this is your permanent home', 'Check whether the comunicação do contrato/escritura was submitted to Finanças by the notary or solicitador', 'Look up your municipality’s IMI rate for the year of payment', 'Check your entitlement to isenção de IMI and IMI familiar', 'Add a débito direto if you do not want to miss a payment', 'If the property is rented out, include IMI in your yield calculation together with IRS, condomínio, insurance and maintenance'] },
        { kind: 'paragraph', text: 'For investors, it is important to consider more than just IMI. If the cumulative VPT of urban property owned by an individual exceeds €600,000, AIMI — Adicional ao IMI — may apply. For spouses/união de facto filing jointly the threshold is usually €1,200,000. AIMI is a separate tax, not part of ordinary IMI.' }
      ]
    }
  ],
  costs: [
    { label: 'IMI for urban property', amountEURMin: 0, amountEURMax: 0, note: 'Rate 0.3–0.45% of VPT per year; the amount depends on the municipality and the VPT.' },
    { label: 'IMI for rural property', amountEURMin: 0, amountEURMax: 0, note: 'Rate 0.8% of VPT per year.' },
    { label: 'IMI familiar', amountEURMin: 30, amountEURMax: 140, note: 'Possible municipal deduction: €30 for 1 dependant, €70 for 2, €140 for 3 or more; applies only if the municipality has approved the measure.' },
    { label: 'Temporary isenção for habitação própria e permanente', amountEUR: 0, note: 'Up to 3 years if conditions are met: VPT ≤ €125,000 and household income ≤ €153,300.' }
  ],
  sources: [
    { title: 'Finanças — Código do IMI (CIMI), index', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi1.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Código do IMI — Decreto-Lei 287/2003, consolidated version', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-148011287', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IMI and tax payments', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: buying a home and property taxes', url: 'https://eportugal.gov.pt/cidadaos/comprar-arrendar-ou-vender-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
