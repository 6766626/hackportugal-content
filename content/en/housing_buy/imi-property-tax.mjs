export default {
  editorialVoice: 'hackportugal',
  id: 'imi-property-tax',
  categoryId: 'housing_buy',
  title: 'IMI — municipal property tax',
  tldr: 'IMI is paid by every property owner in Portugal: the tax is calculated on the Valor Patrimonial Tributário (VPT), not on the purchase price. In 2026 the rates are: 0.3–0.45% for urban property, 0.8% for rural property, 7.5% for owners from offshore jurisdictions. The bill arrives in Finanças in spring: payment is in May, or May/November, or May/August/November. For primeira habitação a relief of up to 3 years is possible where VPT ≤ €125,000 and income ≤ €153,300; “IMI jovem” depends on the município.',
  tags: ['imi', 'property', 'finanças', 'vpt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-imi',
      title: 'What IMI is and who pays it',
      content: [
        { kind: 'paragraph', text: 'IMI — Imposto Municipal sobre Imóveis, an annual municipal tax on owning property. It is paid by whoever was the owner, usufructuary or superficiário of the property on 31 December of the previous year.' },
        { kind: 'paragraph', text: 'If you bought a flat in July 2025, the IMI for 2025 will usually come to you in 2026, because on 31.12.2025 you were the owner. If you sold the property before 31 December, the next IMI is usually already paid by the buyer.' },
        { kind: 'checklist', items: ['Owners of flats, houses, land, garages, storage rooms and shares in property pay it', 'The tax is administered by the Autoridade Tributária e Aduaneira through Portal das Finanças', 'The money goes to the município budget, so the rate depends on the Câmara Municipal', 'IMI does not replace condomínio: it is a separate tax, not utility charges', 'IMI is not the same as IMT: IMT is paid on purchase, IMI — every year', 'Non-residents also pay IMI if they own property in Portugal'] }
      ]
    },
    {
      id: 'calculation',
      title: 'How the amount is calculated: VPT × rate',
      content: [
        { kind: 'paragraph', text: 'The formula is simple: IMI = Valor Patrimonial Tributário × município rate. VPT is the tax value of the property in the Caderneta Predial, calculated by Finanças. It is often lower than the market price, but not always.' },
        { kind: 'checklist', items: ['Urban property — prédios urbanos: rate 0.3–0.45%', 'Rural property — prédios rústicos: rate 0.8%', 'Properties owned by owners from jurisdictions with a favourable tax regime: 7.5%', 'The municipality approves the rate annually and reports it to Finanças', 'The same property in Lisboa, Cascais, Porto or Albufeira may have a different IMI because of the município rate', 'The amount payable appears in Portal das Finanças in the Pagamentos or IMI section', 'Example: VPT €200,000 × 0.35% = €700 IMI for the year'] },
        { kind: 'warning', text: 'IMI is calculated on the VPT, not on the price in the escritura. If you bought a flat for €450,000, but the VPT is €180,000, the tax is calculated on €180,000. If the VPT is overstated because of old coefficients, you can request a reavaliação, but sometimes recalculation increases the tax — check the simulator first.' }
      ]
    },
    {
      id: 'payment-calendar',
      title: 'When and how to pay in 2026',
      content: [
        { kind: 'paragraph', text: 'Finanças issues the nota de cobrança in spring for the previous tax year. The notice is usually visible in Portal das Finanças; a paper letter may not arrive on time, especially if the address is outdated.' },
        { kind: 'checklist', items: ['Up to and including €100 — one payment in May', 'More than €100 and up to and including €500 — two payments: May and November', 'More than €500 — three payments: May, August and November', 'You can pay the full amount immediately in May, even if Finanças has split it into instalments', 'Payment is available via Multibanco, homebanking, MB WAY, débito direto or balcão dos CTT', 'For payment, use the referência de pagamento from the nota de cobrança', 'Check e-Balcão and Portal das Finanças if the nota de cobrança has not appeared by May'] },
        { kind: 'warning', text: 'Late payment leads to juros de mora and may move to cobrança coerciva. For expats a common reason is an old tax address or lack of access to Portal das Finanças. Update your morada fiscal and enable notifications.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Reliefs: primeira habitação, low income, dependants, IMI jovem',
      content: [
        { kind: 'paragraph', text: 'The main national relief is a temporary IMI exemption for habitação própria e permanente. In 2026 the basic conditions under the Estatuto dos Benefícios Fiscais are: the property is used as your own permanent home, the property VPT is no higher than €125,000, the household’s aggregate income for IRS is no higher than €153,300. The relief usually applies for up to 3 years.' },
        { kind: 'checklist', items: ['The address in Finanças must be changed to the address of the purchased home', 'The property must be afetado a habitação própria e permanente', 'Check the Caderneta Predial: property type, VPT, owners, shares', 'The relief request is submitted through Portal das Finanças or e-Balcão if it was not applied automatically', 'Low-income households may have a separate permanent exemption if the income and VPT limits are met', 'IMI familiar: the município may grant a deduction for dependants — usually €30 for 1, €70 for 2, €140 for 3 or more', '“IMI jovem” is not a single national relief: it is a municipal measure, and the conditions on age, income, duration and discount percentage are set by the Câmara Municipal', 'Purchase of primeira habitação by young people under 35 has separate reliefs for IMT and Imposto do Selo; do not confuse them with IMI'] },
        { kind: 'warning', text: 'Do not count on a relief just because it is your first flat. For IMI, VPT, income, habitação própria e permanente status and the município decision matter. Before buying, check the rate and reliefs of the specific Câmara Municipal.' }
      ]
    },
    {
      id: 'practical-checks',
      title: 'What to check after purchase',
      content: [
        { kind: 'checklist', items: ['Obtain the Caderneta Predial Urbana in Portal das Finanças', 'Check the VPT, artigo matricial, fração, area and use of the property', 'Change your morada fiscal to the new address if this is your permanent home', 'Check whether the comunicação do contrato/escritura has been submitted to Finanças by the notary or solicitador', 'Look up the IMI rate of your município for the payment year', 'Check entitlement to isenção de IMI and IMI familiar', 'Add débito direto if you do not want to miss a payment', 'If the property is rented out, include IMI in the yield calculation together with IRS, condomínio, insurance and repairs'] },
        { kind: 'paragraph', text: 'For investors it is important to calculate more than just IMI. If the total VPT of urban property owned by an individual exceeds €600,000, AIMI — Adicional ao IMI — may arise. For spouses/união de facto filing jointly, the threshold is usually €1,200,000. AIMI is a separate tax, not part of ordinary IMI.' }
      ]
    }
  ],
  costs: [
    { label: 'IMI for urban property', amountEURMin: 0, amountEURMax: 0, note: 'Rate 0.3–0.45% of VPT per year; the amount depends on the município and VPT.' },
    { label: 'IMI for rural property', amountEURMin: 0, amountEURMax: 0, note: 'Rate 0.8% of VPT per year.' },
    { label: 'IMI familiar', amountEURMin: 30, amountEURMax: 140, note: 'Possible municipal deduction: €30 for 1 dependant, €70 for 2, €140 for 3 or more; applied only if the município has approved the measure.' },
    { label: 'Temporary isenção for habitação própria e permanente', amountEUR: 0, note: 'Up to 3 years if the conditions are met: VPT ≤ €125,000 and household income ≤ €153,300.' }
  ],
  sources: [
    { title: 'Finanças — Código do IMI (CIMI), index', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi1.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Código do IMI — Decreto-Lei 287/2003, consolidated version', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-148011287', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IMI and pagamento de impostos', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: buying a home and property taxes', url: 'https://www.gov.pt/cidadaos/comprar-arrendar-ou-vender-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
