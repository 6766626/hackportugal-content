export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT and Imposto do Selo when buying property',
  tldr: 'When buying property in Portugal, the buyer pays IMT and Imposto do Selo before the escritura. The base is the higher of the transaction price and the VPT from the caderneta predial. For housing for própria e permanente in Continente in 2026, a progressive IMT table applies: 0% up to €106,346, then 2–8%, with separate rates of 6% and 7.5% for expensive properties (escalões updated by OE 2026 +2%)\.\n\nImposto do Selo on the purchase is 0.8%. For jovens até 35 buying their first permanent home, there is an exemption up to €330,539 and partial relief up to €661,078.',
  tags: ['imt', 'selo', 'escritura', 'property'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'What exactly the buyer pays',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, a tax on the transfer of property. Imposto do Selo — stamp duty. Both are usually paid before signing the escritura or documento particular autenticado; otherwise the notary/solicitador will not complete the transaction.' },
        { kind: 'checklist', items: [
          'IMT is paid by the buyer, not the seller.',
          'Imposto do Selo on the purchase is 0.8% of the taxable base.',
          'The taxable base is the higher of two values: the price in the contract or the VPT from the caderneta predial.',
          'For a mortgage loan there is a separate Imposto do Selo: usually 0.6% of the loan amount for a term of 5+ years.',
          'Bank loan fees are additionally subject to Imposto do Selo at 4%.',
          'Payment is made using a guia/DUC, usually via Multibanco, homebanking or on Portal das Finanças.',
          'Proof of payment must be brought to the escritura.',
          'If the transaction falls through after payment, a refund is possible, but it is a separate procedure through Finanças.'
        ] },
        { kind: 'warning', text: 'Do not calculate the tax only on the price in the CPCV. If the VPT is higher than the transaction price, Finanças will charge IMT and Selo on the VPT. This often comes up in cheap intra-family sales or older properties that have been revalued.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'IMT rates for housing in Continente',
      content: [
        { kind: 'paragraph', text: 'For urban housing, the rates depend on its use: habitação própria e permanente — the buyer’s main home; habitação secundária or arrendamento — a second home, investment or rental. In Madeira and Açores, regional tables apply.' },
        { kind: 'paragraph', text: 'For habitação própria e permanente in Continente, the 2026 table (OE 2026, escalões increased by 2%) uses the following thresholds: up to €106,346 — 0%; €106,346–€145,471 — 2% minus parcela a abater of €2,126.92; €145,471–€198,347 — 5% minus €6,491.03; €198,347–€330,539 — 7% minus €10,457.98; €330,539–€661,078 — 8% minus €13,763.38; €661,078–€1,150,853 — flat rate of 6%; above €1,150,853 — flat rate of 7.5%.' },
        { kind: 'checklist', items: [
          'Main home up to €106,346 in Continente: IMT = €0, but Selo at 0.8% remains unless there is a separate relief.',
          'Main home at €250,000: IMT = 250,000 × 7% − €10,457.98 = €7,042.02.',
          'Main home at €350,000: IMT = 350,000 × 8% − €13,763.38 = €14,236.62.',
          'A second home/investment is usually taxed from the first euro: there is no zero-rate relief band as there is for a main home.',
          'Prédio rústico: IMT rate of 5%.',
          'Other urban properties not for housing: IMT rate of 6.5%.',
          'A buyer connected to a jurisdiction on the paraísos fiscais list may fall under an IMT rate of 10%.',
          'If you are buying a share, the tax is calculated according to the transaction rules and the value of the share being transferred, but the notary will still check the VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Relief for young buyers up to 35',
      content: [
        { kind: 'paragraph', text: 'Since 2024 there has been a regime for jovens até 35 anos on the first purchase of habitação própria e permanente (DL 44/2024). In 2026, the practical full-relief threshold is tied to the 4th IMT escalão: up to €330,539. The relief covers IMT and Imposto do Selo on the purchase.' },
        { kind: 'checklist', items: [
          'The buyer must be no older than 35 on the date of the escritura.',
          'The property must be for habitação própria e permanente, not for rental and not as a second home.',
          'The buyer must not own residential property on the transaction date or have owned it in the last 3 years.',
          'Up to €330,539: IMT = €0 and Selo on the purchase = €0.',
          'From €330,539 to €661,078: the relief is partial; tax is paid only above the protected part under the Finanças mechanism.',
          'Above €661,078: the relief does not apply.',
          'If two people are buying and only one meets the conditions, the relief applies only to that person’s share.',
          'After purchase, the home must be used as the main home; a change of use may lead to the loss of the relief and additional tax to pay.'
        ] },
        { kind: 'paragraph', text: 'Example: a flat for a main home at €350,000. Under the 2026 table, the normal IMT is €14,236.62 and Selo is €2,800. For a buyer under 35 on a first purchase (DL 44/2024), the relief covers the part up to €330,539; the amount payable is the proportional share only above €330,539.' },
        { kind: 'warning', text: 'Before the CPCV, check the relief with a solicitador/advogado and with Finanças. An error in the “first home” status is usually discovered right before the escritura, when there is no longer time to restructure the transaction.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How payment works before the escritura',
      content: [
        { kind: 'paragraph', text: 'In practice, the calculation is done by the notary, advogado, solicitador, Casa Pronta or the bank. But responsibility for accuracy and payment lies with the buyer. Without a comprovativo de pagamento, the transaction will not proceed.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Gather the property data', content: [
            { kind: 'checklist', items: [
              'Caderneta predial with the VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra from the CPCV or draft escritura.',
              'Use: própria e permanente or secundária/investimento.',
              'Buyers’ shares, if several people are buying.',
              'Age and conditions for the jovem relief, if applicable.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Issue the guias de pagamento', content: [
            { kind: 'paragraph', text: 'Guias for IMT and Imposto do Selo can be issued through Portal das Finanças or via the professional handling the transaction. The guia will contain a referência para pagamento and a deadline.' }
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
      title: 'How to budget for the transaction',
      content: [
        { kind: 'paragraph', text: 'IMT and Selo are not the only costs. For a safe budget, include taxes, notarial costs, registo, bank fees and the property valuation. With a mortgage, the bank often debits some costs even before the escritura.' },
        { kind: 'checklist', items: [
          'For a main home at €200,000: IMT is approximately €3,747.08, Selo €1,600.',
          'For a main home at €300,000: IMT is approximately €10,747.08, Selo €2,400.',
          'For a main home at €500,000: IMT is approximately €26,506.50, Selo €4,000.',
          'If the price is below the VPT, recalculate all examples using the VPT.',
          'With a mortgage, add Selo on the loan: 0.6% for a term of 5+ years.',
          'Add registo/escritura: often several hundred euros; with Casa Pronta it is normally cheaper than a complex notarial transaction.',
          'Add an advogado/solicitador if due diligence checks are needed: usually from hundreds to several thousand euros depending on complexity.',
          'Do not spend the entire deposit on the CPCV: the taxes must be available in cash by the escritura date.'
        ] },
        { kind: 'warning', text: 'The bank finances the purchase price, but usually does not finance IMT, Imposto do Selo and notarial costs. The buyer must have this money separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo on the purchase', amountEURMin: 0, amountEURMax: 0, note: 'Rate of 0.8% of the price or VPT, whichever is higher; the amount depends on the property. With the jovem relief, it may be €0 up to €330,539.' },
    { label: 'IMT for a main home in Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressive under the 2026 table (OE 2026 +2%): 0% up to €106,346, then 2–8%; for expensive properties, flat rates of 6% (from €661,078) or 7.5% (from €1,150,853).' },
    { label: 'Imposto do Selo on a mortgage', amountEURMin: 0, amountEURMax: 0, note: 'Usually 0.6% of the loan amount for a term of 5+ years; 0.5% for a term of 1 to 5 years; bank fees are subject to Selo at 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Guide figure for a standard transaction; complex notarial deeds, powers of attorney and translations increase the cost.' }
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
      title: 'Portal das Finanças: tax benefits for young people buying their first home',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00644.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
