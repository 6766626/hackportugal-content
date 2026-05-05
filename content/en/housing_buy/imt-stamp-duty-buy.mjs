export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT and Imposto do Selo when buying property',
  tldr: 'When buying property in Portugal, the buyer pays IMT and Imposto do Selo before the escritura. The base is the higher of the transaction price and the VPT from the caderneta predial. For habitação própria e permanente in the Continente in 2026 a progressive IMT table applies: 0% up to €106,346, then 2–8%, with flat rates of 6% and 7.5% for high-value properties (escalões updated by OE 2026 +2%). Imposto do Selo on the purchase is 0.8%. For buyers up to 35 on a first purchase of habitação própria e permanente there is an exemption up to €330,539 and partial relief up to €661,078.',
  tags: ['imt', 'imposto do selo', 'deed', 'property'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'What exactly the buyer pays',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, a tax on the transfer of real estate. Imposto do Selo — the stamp duty. Both are usually paid before signing the escritura or the documento particular autenticado, otherwise the notary/solicitador will not complete the deal.' },
        { kind: 'checklist', items: [
          'IMT is paid by the buyer, not the seller.',
          'Imposto do Selo on the purchase is 0.8% of the tax base.',
          'The tax base is the higher of the two values: the contract price or the VPT from the caderneta predial.',
          'For a mortgage there is a separate Imposto do Selo: usually 0.6% of the loan amount for terms of 5+ years.',
          'Bank fees on the loan are additionally subject to Imposto do Selo at 4%.',
          'Payment is made via a guia/DUC, usually through Multibanco, home banking or on the Portal das Finanças.',
          'Proof of payment must be brought to the escritura.',
          'If the deal falls through after payment, a refund is possible, but it is a separate procedure via Finanças.'
        ] },
        { kind: 'warning', text: 'Do not calculate the tax only from the price in the CPCV. If the VPT is higher than the transaction price, Finanças will charge IMT and Selo on the VPT. This often comes up in cheap intra-family sales or older properties with a revaluation.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'IMT rates for housing in the Continente',
      content: [
        { kind: 'paragraph', text: 'For urban housing the rates depend on the intended use: habitação própria e permanente — the buyer’s main home; habitação secundária or arrendamento — a second home, investment or rental. Madeira and the Azores apply regional tables.' },
        { kind: 'paragraph', text: 'For habitação própria e permanente in the Continente, the 2026 table (OE 2026, escalões raised by 2%) uses these thresholds: up to €106,346 — 0%; €106,346–€145,471 — 2% minus parcela a abater €2,126.92; €145,471–€198,347 — 5% minus €6,491.03; €198,347–€330,539 — 7% minus €10,457.98; €330,539–€661,078 — 8% minus €13,763.38; €661,078–€1,150,853 — flat rate 6%; above €1,150,853 — flat rate 7.5%.' },
        { kind: 'checklist', items: [
          'Main home up to €106,346 in the Continente: IMT = €0, but Selo at 0.8% still applies unless a separate relief applies.',
          'Main home €250,000: IMT = €250,000 × 7% − €10,252.92 = €7,247.08.',
          'Main home €350,000: IMT = €350,000 × 8% − €13,493.50 = €14,506.50.',
          'A second home/investment is usually taxed from the first euro: there is no zero bracket as for a main home.',
          'Prédio rústico: IMT rate 5%.',
          'Other urban properties not for housing: IMT rate 6.5%.',
          'A buyer connected with a jurisdiction on the paraísos fiscais list may face an IMT rate of 10%.',
          'If you are buying a share, the tax is calculated under the rules of the transaction and the value of the share transferred, but the notary will still check the VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Relief for young buyers up to 35 years old',
      content: [
        { kind: 'paragraph', text: 'Since 2024 there is a regime for buyers up to 35 years old on the first purchase of habitação própria e permanente (DL 44/2024). In 2026 the practical threshold for full relief is tied to the 4th IMT escalão: up to €330,539. The relief covers IMT and Imposto do Selo on the purchase.' },
        { kind: 'checklist', items: [
          'The buyer must be no older than 35 on the date of the escritura.',
          'The property must be for habitação própria e permanente, not for letting and not as a second home.',
          'The buyer must not own residential property on the date of the transaction and in the previous 3 years.',
          'Up to €330,539: IMT = €0 and Selo on the purchase = €0.',
          'From €330,539 to €661,078: the relief is partial; tax is paid only on the amount above the protected portion under the Finanças mechanics.',
          'Above €661,078: the relief does not apply.',
          'If two people are buying and only one meets the conditions, the relief applies only to their share.',
          'After purchase the property must be used as the main home; a change of use may lead to the loss of the relief and payment of additional tax.'
        ] },
        { kind: 'paragraph', text: 'Example: a flat for the main home at €350,000. Under the 2026 table the normal IMT is €14,236.62, Selo is €2,800. For a buyer up to 35 on a first purchase (DL 44/2024) the relief covers the portion up to €330,539; only the proportional amount above €330,539 remains payable.' },
        { kind: 'warning', text: 'Before the CPCV confirm the relief with a solicitador/advogado and with Finanças. An error in the "first home" status is usually discovered right before the escritura, when there is no time to restructure the deal.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How payment is made before the escritura',
      content: [
        { kind: 'paragraph', text: 'In practice the calculation is done by a notary, advogado, solicitador, Casa Pronta or the bank. But responsibility for accuracy and payment lies with the buyer. Without a comprovativo de pagamento the deal will not proceed.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Collect the property data', content: [
            { kind: 'checklist', items: [
              'Caderneta predial with the VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra from the CPCV or the draft escritura.',
              'Intended use: própria e permanente or secundária/investimento.',
              'Buyers’ shares if several people are buying.',
              'Age and conditions for the jovem relief, if applicable.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Issue the guias de pagamento', content: [
            { kind: 'paragraph', text: 'The IMT and Imposto do Selo guias can be generated via the Portal das Finanças or by the professional handling the deal. The guia will include a payment reference and a deadline.' }
          ] },
          { id: 'pay-before-deed', title: '3. Pay before signing', content: [
            { kind: 'checklist', items: [
              'Pay IMT and Selo before the escritura, not after.',
              'Save the comprovativos as PDFs.',
              'Check that the buyer’s NIF is correct.',
              'Check that the property’s matriz/VPT match the documents.',
              'Send the confirmations to the notary or solicitador.',
              'If there is a mortgage, separately check the Selo on the loan and the bank’s fees.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'How to budget the transaction',
      content: [
        { kind: 'paragraph', text: 'IMT and Selo are not the only costs. For a safe budget, include taxes, notarial costs, registo, bank fees and the property valuation. With a mortgage the bank often charges some costs even before the escritura.' },
        { kind: 'checklist', items: [
          'For a main home at €200,000: IMT about €3,747.08, Selo €1,600.',
          'For a main home at €300,000: IMT about €10,747.08, Selo €2,400.',
          'For a main home at €500,000: IMT about €26,506.50, Selo €4,000.',
          'If the price is lower than the VPT, recalculate all examples using the VPT.',
          'With a mortgage add the Selo on the loan: 0.6% for terms of 5+ years.',
          'Add registo/escritura: often a few hundred euros; with Casa Pronta it is typically cheaper than a complex notarial deed.',
          'Add an advogado/solicitador if due diligence is needed: usually from hundreds to several thousand euros depending on complexity.',
          'Do not spend the entire deposit on the CPCV: you will need cash for taxes by the escritura date.'
        ] },
        { kind: 'warning', text: 'The bank finances the purchase price but usually does not finance IMT, Imposto do Selo or notarial costs. The buyer must have this money separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo on the purchase', amountEURMin: 0, amountEURMax: 0, note: 'Rate 0.8% of the price or VPT, whichever is higher; the amount depends on the property. With the jovem relief it can be €0 up to €330,539.' },
    { label: 'IMT for a main home in the Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressive under the 2026 table (OE 2026 +2%): 0% up to €106,346, then 2–8%; for high‑value properties flat rates of 6% (from €661,078) or 7.5% (from €1,150,853).' },
    { label: 'Imposto do Selo on the mortgage', amountEURMin: 0, amountEURMax: 0, note: 'Usually 0.6% of the loan amount for terms of 5+ years; 0.5% for terms from 1 to 5 years; bank fees are subject to Selo at 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Benchmark for a standard deal; complex notarial acts, powers of attorney and translations increase the cost.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IMT (CIMT), index',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimt/Pages/codigo-do-imt-indice.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-05'
    },
    {
      title: 'Código do IMT — Decreto-Lei 287/2003, consolidated version',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34573375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Imposto do Selo — consolidated version',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34486675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: tax benefits for young people when buying their first home',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00644.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
