export default {
  editorialVoice: 'hackportugal',
  id: 'iva-tax-free-aeroporto',
  categoryId: 'before_arrival',
  title: 'Tax-Free shopping at the airport: IVA refunds for non-residents',
  tldr: 'Tax-Free in Portugal is an IVA refund for goods bought by a non-EU resident and taken out in personal luggage. Minimum — €50 on one recibo/fatura. At Lisboa, Porto and Faro airports there is eTax-Free: first you validate the purchase with the Autoridade Tributária, then you receive the money from the Tax Free operator. The IVA rate is up to 23%, but the actual refund is usually lower: IVA is included in the price, plus a 5–10% fee. Residents of Portugal are not entitled to a refund.',
  tags: ['iva', 'taxfree', 'airport', 'finanças'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'Who is entitled to Tax-Free',
      content: [
        { kind: 'paragraph', text: 'Tax-Free is an IVA refund scheme for viajantes residentes em país terceiro: people whose permanent address is outside the EU. A foreign national with a Portuguese residence permit is considered a resident of Portugal for this procedure and is not entitled to a refund.' },
        { kind: 'checklist', items: [
          'You live outside the EU and can prove this with a passport/document',
          'The goods were bought in Portugal in a shop that works with Tax-Free/eTax-Free',
          'The amount of one fatura/recibo is at least €50 including IVA',
          'The goods are new, have not been used in the EU and are taken out in personal luggage',
          'You take the goods outside the EU no later than the end of the 3rd month after the month of purchase',
          'You have a boarding pass and the goods are available for customs inspection',
          'You do not show a Cartão de Cidadão, título de residência or another document proving residence in Portugal'
        ] },
        { kind: 'warning', text: 'Tax-Free is not a way to “get 23% of the receipt back”. At an IVA rate of 23%, the tax part of the price is 23/123, i.e. about 18.7% of the price including IVA. The operator will deduct a fee from this, often 5–10% of the refund amount.' }
      ]
    },
    {
      id: 'in-shop',
      title: 'In the shop: arrange a Tax-Free fatura',
      content: [
        { kind: 'paragraph', text: 'Say at the till: “Tax-Free, please”. The shop must issue an electronic eTax-Free declaration or an operator form such as Global Blue, Planet, Innova Tax Free. Without the correct fatura, a refund at the airport is usually impossible.' },
        { kind: 'checklist', items: [
          'Passport of a non-EU resident',
          'Permanent residential address outside the EU',
          'Fatura/recibo for an amount from €50',
          'Tax-Free form or electronic eTax-Free number',
          'Bank card, if you want the refund to a card',
          'Original packaging and tags — preferably do not open them before departure',
          'Keep the goods separate: customs may ask to see them physically'
        ] },
        { kind: 'warning', text: 'If you live in Portugal and are simply flying on holiday outside the EU, Tax-Free does not apply. Entitlement is determined by residence, not by citizenship and not by the flight destination.' }
      ]
    },
    {
      id: 'airport-flow',
      title: 'At LIS/OPO/FAO airport: order of steps',
      content: [
        { kind: 'paragraph', text: 'eTax-Free operates in Lisboa, Porto and Faro. The general logic: first validation with the Autoridade Tributária/Customs, then receiving the money from the Tax-Free operator. Arrive early: in high season the queue may take 30–60 minutes.' },
        { kind: 'substeps', items: [
          {
            id: 'before-checkin',
            title: '1. Before checking in baggage',
            content: [
              { kind: 'paragraph', text: 'If the purchases are in your suitcase, go first to the eTax-Free station/Customs, not straight to check-in. Customs has the right to ask to see the goods.' }
            ]
          },
          {
            id: 'validate',
            title: '2. eTax-Free validation',
            content: [
              { kind: 'checklist', items: [
                'Scan your passport',
                'Scan your boarding pass',
                'Scan the QR code/eTax-Free number or present the form',
                'Follow the system signal: “green” usually means automatic approval',
                'If you get “red”, go to the customs/AT officer with the goods and documents'
              ] }
            ]
          },
          {
            id: 'refund',
            title: '3. Receive the refund',
            content: [
              { kind: 'paragraph', text: 'After customs validation, go to the Tax-Free operator’s counter. A refund to a card is usually better value and safer, but it may take several days or weeks. Cash is faster, but the fee is often higher.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-much',
      title: 'How much you will actually get back',
      content: [
        { kind: 'paragraph', text: 'In mainland Portugal the standard IVA rate is 23%. In Madeira and Açores the rates are lower, and reduced rates apply to some goods. But even at 23%, the refund is not calculated as 23% of the price, because IVA is already included in the receipt.' },
        { kind: 'paragraph', text: 'Example: a purchase of €123. Inside the price, IVA is €23. The operator deducts a fee. If the fee is 10%, you will receive about €20.70, not €28.29 and not 23% of the whole purchase.' },
        { kind: 'checklist', items: [
          'Price including IVA: €123',
          'Taxable base: €100',
          'IVA 23%: €23',
          'Operator fee of 5–10% reduces the payout',
          'The smaller the receipt, the more noticeable the fee',
          'A card refund is often better value than cash',
          'The shop may not work with all operators'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes',
      content: [
        { kind: 'checklist', items: [
          'Checking in the suitcase with the purchases before customs inspection',
          'A purchase for €49.99: the €50 threshold has not been reached',
          'Trying to arrange Tax-Free using several small receipts instead of one recibo/fatura',
          'Using the goods before departure: clothes without tags, electronics in active use',
          'Not taking your passport to the shop',
          'Arriving at the airport right before boarding',
          'Thinking that a Portuguese residence permit is not visible: during a check, residence may become grounds for refusal',
          'Waiting for a refund without customs validation — the operator will not pay out the money'
        ] },
        { kind: 'warning', text: 'If you leave the EU not from Portugal but, for example, via Madrid, Paris or Frankfurt, final customs validation is usually done at the last EU airport before departure outside the Union. The Portuguese shop must still issue the correct Tax-Free form.' }
      ]
    }
  ],
  costs: [
    { label: 'Minimum amount of one purchase for Tax-Free', amountEUR: 50, note: 'Threshold for one recibo/fatura including IVA; several receipts are usually not combined.' },
    { label: 'Approximate operator fee', amountEURMin: 1, amountEURMax: 10, note: 'Depends on the amount and the operator; in practice it is deducted from the refund, often about 5–10% of the IVA amount, but tariffs may be progressive.' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária / Portal das Finanças: Tax Free for travellers',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lisboa Airport: airport services and Tax Free',
      url: 'https://www.aeroportolisboa.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 19/2017: e-Taxfree regime in Portugal',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/19-2017-106446139',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
