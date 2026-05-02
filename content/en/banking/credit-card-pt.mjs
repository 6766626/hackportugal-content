export default {
  editorialVoice: 'hackportugal',
  id: 'credit-card-pt',
  categoryId: 'banking',
  title: 'Credit cards in Portugal — how to get one and what types there are',
  tldr: 'Credit cards in Portugal differ from Russia/Ukraine: a real credit facility with a limit and monthly payment is a “cartão de crédito”. A debit card linked to an account is a “cartão de débito”; it is often called an MB card. To get a cartão de crédito you need: NIF + NISS + resident status for at least 6 months + regular income: an employment contract or recibos verdes. The limit is usually 1–3 monthly salaries. Main banks: Millennium BCP, ActivoBank, Santander, BPI. Premium cards are Visa Gold/Platinum, World Mastercard. A good credit history is built over 6–12 months.',
  tags: ['credit card', 'cartão de crédito', 'bank', 'credit', 'cashback'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'difference',
      title: '💳 Debit or credit',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Debit card (cartão de débito)', content: [
            { kind: 'checklist', items: [
              '✅ Linked to a current account; you spend your own money',
              '✅ Works in Multibanco, cash machines and payment terminals',
              '✅ Free or €1–2/month',
              '✅ Overdraft spending may be possible by agreement with the bank',
              '⚠️ MB Net for online payments is a separate virtual card',
              '⚠️ It is not counted as credit in your credit history'
            ]}
          ]},
          { id: 'd2', title: 'Credit card (cartão de crédito)', content: [
            { kind: 'checklist', items: [
              '💵 The bank sets the limit based on income',
              '💵 You pay at the end of the month: the full amount or part of it with interest',
              '🔁 100% repayment without interest may be possible during the grace period (carência)',
              '📊 It appears in the Banco de Portugal credit history (CRC)',
              '🎁 Cashback, miles, travel insurance',
              '⚠️ The annual interest rate is usually 12–22% if you do not repay 100%',
              '💰 Annual fee: €0–150 depending on the card tier'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '✅ Requirements for approval',
      content: [
        { kind: 'checklist', items: [
          '🪪 Resident status: residence permit or EU registration for at least 6 months',
          '🆔 NIF + NISS',
          '💰 Regular income: employment contract, recibos verdes for at least 12 months, pension',
          '📊 Credit history: in the first 6–12 months of living in Portugal there is no history, so the limit will be small — €300–500',
          '⚠️ Unemployment or a dependent residence permit = refusal or a limit only against your own collateral',
          '🏦 An existing account with this bank improves your chances',
          '⛔ Debts in the Mapa de Responsabilidades de Crédito (CRC) = automatic refusal'
        ]}
      ]
    },
    {
      id: 'cards',
      title: '🎴 Popular cards',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Basic cards up to €30/year', content: [
            { kind: 'checklist', items: [
              '🟢 **Millennium Cartão Premium**: €0 service fee, 1% cashback on selected purchases, limit €500–3000',
              '🟢 **ActivoBank Visa Classic**: €0 service fee, limit €500–2500, suitable for online purchases',
              '🟢 **Santander Light**: €0 service fee, basic limit',
              '🟢 **CGD Caixa Worldwide**: €19/year, accepted in 200+ countries',
              '🟢 **BPI 5 estrelas**: €25/year, millions of BPI cash machines'
            ]}
          ]},
          { id: 'c2', title: 'Cashback and rewards', content: [
            { kind: 'checklist', items: [
              '🟡 **Millennium World Mastercard**: €75/year, 0.5–1% cashback + travel insurance',
              '🟡 **ActivoBank Gold**: €50/year, insurance + 0.5% cashback',
              '🟡 **CGD Universal Plus**: €30/year, 1% cashback at Continente / Pingo Doce',
              '🟡 **Santander Light Visa**: 0.3% cashback, €35/year',
              '🟡 **Wizink White**: €0/year, 0% IRR for 24 months for balance transfers'
            ]}
          ]},
          { id: 'c3', title: 'Premium cards (Platinum, World Elite)', content: [
            { kind: 'checklist', items: [
              '🟣 **Millennium Visa Platinum**: €150/year, 1–2% cashback, lounge access, insurance',
              '🟣 **BPI World Elite Mastercard**: €250/year, premium concierge service',
              '🟣 **Santander Select**: €200/year, premium family package',
              '🟣 **Caixa Geral Visa Infinite**: €300/year, exclusive concierge service',
              '⚠️ Income for Platinum is usually from €50,000/year'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'You are already a customer of the bank', content: [
            { kind: 'checklist', items: [
              '💻 Via online banking — usually one click on “pedir cartão de crédito”',
              '📊 The bank automatically calculates the limit based on salary',
              '✅ Decision in 1–3 working days',
              '📦 The card arrives by post in 5–7 days'
            ]}
          ]},
          { id: 'a2', title: 'You are not a customer of the bank', content: [
            { kind: 'checklist', items: [
              '🏛️ Book an appointment at a branch',
              '📋 Bring: residence permit/Cartão de Cidadão, NIF, NISS, payslip (recibo de vencimento) for 3 months, comprovativo de morada, tax return (modelo 3), if you have recibos verdes',
              '💼 Decision in 5–15 working days',
              '✍️ Sign the contract'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'building-credit',
      title: '📈 How to build a credit history',
      content: [
        { kind: 'paragraph', text: 'Portugal does not have a public credit score like in the US (FICO). Banco de Portugal maintains the CRC (Mapa de Responsabilidades de Crédito) — a list of your loans and arrears. Banks use their own internal scoring.' },
        { kind: 'checklist', items: [
          '✅ Repay the credit card 100% every month — this increases the bank’s trust',
          '✅ Receive salary or income from recibos through the same bank for at least 6 months',
          '✅ After 12 months, ask to increase the limit via online banking',
          '✅ Do not constantly use more than 70% of the limit',
          '⛔ Arrears = a black mark for 5 years',
          '⛔ Opening many credit cards at once = banks will reduce the limit',
          '📊 You can request the CRC statement for free: bportugal.pt → “Mapa de Responsabilidades”',
          '💰 A good history after 12 months = access to mortgages and car loans'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '💳 The first credit card is the hardest; it gets easier after that',
          '🎁 Cashback at Continente / Pingo Doce + credit card = double benefit: supermarket card + credit card cashback',
          '🌍 For trips abroad, paying by credit card is worthwhile: they often include insurance and chargeback, i.e. a refund in cases of fraud',
          '⚖️ IMPORTANT: MANY Russian credit cards are blocked for payments in Portugal — you need a local card',
          '🚫 Never take a cash advance from a credit card — 5% fee + interest from day one',
          '🔁 Carência — the option to defer payment for 1–3 months; useful in a crisis, but the bank may record it in the CRC',
          '⚖️ DEC (Direito a Esquecimento de Crédito): after 5 years, debts are cancelled if they have not been reactivated',
          '🏆 Wizink White with a 0% APR balance transfer for 24 months — a lifeline if you have debts on other credit cards'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Annual fee for a basic credit card', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Annual fee for a premium credit card', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Annual rate in case of missed payment', amountEURMin: 12, amountEURMax: 22, note: '%' },
    { label: 'Fee for withdrawing cash with a credit card', amountEURMin: 5, amountEURMax: 25 }
  ],
  sources: [
    { title: 'Banco de Portugal — Mapa de Responsabilidades', url: 'https://www.bportugal.pt/page/mapa-de-responsabilidades-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Credit Cards (Bank Customer Portal)', url: 'https://clientebancario.bportugal.pt/pt-pt/cartoes-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
