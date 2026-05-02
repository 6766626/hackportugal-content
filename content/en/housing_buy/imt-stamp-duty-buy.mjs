export default {
  editorialVoice: 'hackportugal',
  id: 'imt-stamp-duty-buy',
  categoryId: 'housing_buy',
  title: 'IMT and Imposto do Selo when buying property',
  tldr: 'When buying property in Portugal, the buyer pays IMT and Imposto do Selo before the escritura. The base is the higher of the transaction price and the VPT from the caderneta predial. For habitação própria e permanente in Continente in 2026, a progressive IMT table applies: 0% up to €104,261, then 2–8%, with separate rates of 6% and 7.5% for expensive properties. Imposto do Selo on the purchase is 0.8%. For jovens até 35 buying their first permanent home, there is an exemption up to €324,058 and partial relief up to €648,022.',
  tags: ['imt', 'selo', 'escritura', 'property'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-pay',
      title: 'What exactly the buyer pays',
      content: [
        { kind: 'paragraph', text: 'IMT — Imposto Municipal sobre as Transmissões Onerosas de Imóveis, the property transfer tax. Imposto do Selo — stamp duty. Both are usually paid before signing the escritura or documento particular autenticado; otherwise, the notary/solicitador will not complete the transaction.' },
        { kind: 'checklist', items: [
          'IMT is paid by the buyer, not the seller.',
          'Imposto do Selo on the purchase — 0.8% of the taxable base.',
          'The taxable base is the higher of two values: the price in the contract or the VPT from the caderneta predial.',
          'For a mortgage loan, there is a separate Imposto do Selo: usually 0.6% of the loan amount for a term of 5+ years.',
          'Bank fees on the loan are additionally subject to Imposto do Selo at 4%.',
          'Payment is made by guia/DUC, usually via Multibanco, homebanking or on the Portal das Finanças.',
          'Proof of payment must be brought to the escritura.',
          'If the transaction falls through after payment, a refund is possible, but it is a separate procedure through Finanças.'
        ] },
        { kind: 'warning', text: 'Do not calculate the tax only on the price in the CPCV. If the VPT is higher than the transaction price, Finanças will charge IMT and Selo on the VPT. This often comes up in cheap intra-family sales or older properties with a reassessment.' }
      ]
    },
    {
      id: 'imt-rates-mainland',
      title: 'IMT rates for housing in Continente',
      content: [
        { kind: 'paragraph', text: 'For urban housing, the rates depend on the intended use: habitação própria e permanente — the buyer’s main home; habitação secundária or arrendamento — a second home, investment or rental. In Madeira and Açores, regional tables apply.' },
        { kind: 'paragraph', text: 'For habitação própria e permanente in Continente, the current Finanças table uses these thresholds: up to €104,261 — 0%; €104,261–€142,618 — 2% minus parcela a abater €2,085.22; €142,618–€194,458 — 5% minus €6,363.76; €194,458–€324,058 — 7% minus €10,252.92; €324,058–€648,022 — 8% minus €13,493.50; €648,022–€1,128,287 — flat rate 6%; above €1,128,287 — flat rate 7.5%.' },
        { kind: 'checklist', items: [
          'Main home up to €104,261 in Continente: IMT = €0, but Selo at 0.8% remains unless there is a separate relief.',
          'Main home €250,000: IMT = 250,000 × 7% − €10,252.92 = €7,247.08.',
          'Main home €350,000: IMT = 350,000 × 8% − €13,493.50 = €14,506.50.',
          'Second home/investment is usually taxed from the first euro: there is no preferential zero-rate band as there is for a main home.',
          'Prédio rústico: IMT rate 5%.',
          'Other urban properties not for housing: IMT rate 6.5%.',
          'A buyer linked to a jurisdiction on the paraísos fiscais list may fall under an IMT rate of 10%.',
          'If you buy a share, the tax is calculated according to the transaction rules and the value of the share being transferred, but the notary still checks the VPT.'
        ] }
      ]
    },
    {
      id: 'jovem-exemption',
      title: 'Relief for young buyers up to 35',
      content: [
        { kind: 'paragraph', text: 'Since 2024, a regime has applied for jovens até 35 anos on the first purchase of habitação própria e permanente. In 2026, the practical full-relief threshold is linked to the 4th escalão IMT: up to €324,058. The relief covers IMT and Imposto do Selo on the purchase.' },
        { kind: 'checklist', items: [
          'The buyer must be no more than 35 years old on the date of the escritura.',
          'The property must be for habitação própria e permanente, not for renting out and not as a second home.',
          'The buyer must not own residential property on the transaction date or have owned it in the previous 3 years.',
          'Up to €324,058: IMT = €0 and Selo on the purchase = €0.',
          'From €324,058 to €648,022: the relief is partial; tax is paid only above the protected portion under the Finanças mechanism.',
          'Above €648,022: the relief does not apply.',
          'If two people buy and only one meets the conditions, the relief applies only to that person’s share.',
          'After purchase, the home must be used as the main home; a change of use may lead to the loss of the relief and an additional tax payment.'
        ] },
        { kind: 'paragraph', text: 'Example: a flat for a main home costing €350,000. Ordinary IMT is €14,506.50, Selo is €2,800. For a buyer up to 35 on a first purchase, the amount still payable is approximately IMT of around €2,075.36 and Selo of around €207.54, because the relief covers the portion up to €324,058.' },
        { kind: 'warning', text: 'Before the CPCV, check the relief with a solicitador/advogado and with Finanças. An error in the “first home” status is usually discovered just before the escritura, when there is no longer time to restructure the transaction.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'How payment works before the escritura',
      content: [
        { kind: 'paragraph', text: 'In practice, the calculation is done by the notary, advogado, solicitador, Casa Pronta or the bank. But responsibility for accuracy and payment lies with the buyer. Without the comprovativo de pagamento, the transaction will not proceed.' },
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Gather the property details', content: [
            { kind: 'checklist', items: [
              'Caderneta predial with the VPT.',
              'Certidão permanente do registo predial.',
              'Preço de compra from the CPCV or draft escritura.',
              'Intended use: própria e permanente or secundária/investimento.',
              'Buyers’ shares, if several people are buying.',
              'Age and conditions for the jovem relief, if applicable.'
            ] }
          ] },
          { id: 'issue-guides', title: '2. Issue the guias de pagamento', content: [
            { kind: 'paragraph', text: 'IMT and Imposto do Selo guias can be issued through the Portal das Finanças or through the professional handling the transaction. The guia will contain a referência para pagamento and a deadline.' }
          ] },
          { id: 'pay-before-deed', title: '3. Pay before signing', content: [
            { kind: 'checklist', items: [
              'Pay IMT and Selo before the escritura, not afterwards.',
              'Save the comprovativos as PDFs.',
              'Check that the buyer’s NIF is entered correctly.',
              'Check that the property’s matriz/VPT match the documents.',
              'Send the confirmations to the notary or solicitador.',
              'If there is a mortgage, separately check Selo on the loan and the bank fees.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budgeting',
      title: 'How to budget for the transaction',
      content: [
        { kind: 'paragraph', text: 'IMT and Selo are not the only costs. For a safe budget, include taxes, notary costs, registo, bank fees and the property valuation. With a mortgage, the bank often debits some costs even before the escritura.' },
        { kind: 'checklist', items: [
          'For a main home at €200,000: IMT about €3,747.08, Selo €1,600.',
          'For a main home at €300,000: IMT about €10,747.08, Selo €2,400.',
          'For a main home at €500,000: IMT about €26,506.50, Selo €4,000.',
          'If the price is below the VPT, recalculate all examples based on the VPT.',
          'With a mortgage, add Selo on the loan: 0.6% for a term of 5+ years.',
          'Add registo/escritura: often several hundred euros; with Casa Pronta it is usually cheaper as standard than a complex notarial transaction.',
          'Add advogado/solicitador if due diligence checks are needed: usually from hundreds to several thousand euros, depending on complexity.',
          'Do not spend the entire deposit on the CPCV: the taxes are needed in cash by the escritura date.'
        ] },
        { kind: 'warning', text: 'The bank finances the purchase price, but usually does not finance IMT, Imposto do Selo and notary costs. The buyer must have this money separately.' }
      ]
    }
  ],
  costs: [
    { label: 'Imposto do Selo on the purchase', amountEURMin: 0, amountEURMax: 0, note: 'Rate of 0.8% of the price or VPT, whichever is higher; the amount depends on the property. With the jovem relief, it may be €0 up to €324,058.' },
    { label: 'IMT for a main home in Continente', amountEURMin: 0, amountEURMax: 0, note: 'Progressive: 0% up to €104,261, then 2–8%; for expensive properties, flat rates of 6% or 7.5%.' },
    { label: 'Imposto do Selo on a mortgage', amountEURMin: 0, amountEURMax: 0, note: 'Usually 0.6% of the loan amount for a term of 5+ years; 0.5% for a term from 1 to 5 years; bank fees are subject to Selo at 4%.' },
    { label: 'Registo/escritura', amountEURMin: 375, amountEURMax: 1000, note: 'Indicative range for a standard transaction; complex notarial deeds, powers of attorney and translations increase the cost.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IMT information leaflet',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IMT.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
