export default {
  editorialVoice: 'hackportugal',
  id: 'credit-card-pt',
  categoryId: 'banking',
  title: 'Credit cards in Portugal — how to get one and what types there are',
  tldr: 'Credit cards in Portugal are different from Russia/Ukraine: a real credit product with a limit and monthly payment is a “cartão de crédito”. A debit card linked to an account is a “cartão de débito”; it is often called an MB card. Usually, for a cartão de crédito the bank asks for NIF, ID/residence permit or certificado de registo for EU citizens, comprovativo de morada, proof of income and sometimes NISS/proof of social contributions. Length of residence and relationship with the bank improve your chances, but a specific threshold (“6+ months”) is banking practice, not law. Main banks: Millennium BCP, ActivoBank, Santander, BPI.',
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
              '✅ Linked to a current account, you spend your own money',
              '✅ Works in Multibanco, ATMs and payment terminals',
              '✅ Free or €1–2/month',
              '✅ Overspending up to an overdraft may be possible by agreement with the bank',
              '⚠️ MB Net for online payments is a separate virtual card',
              '⚠️ It does not count as credit in your credit history'
            ]}
          ]},
          { id: 'd2', title: 'Credit card (cartão de crédito)', content: [
            { kind: 'checklist', items: [
              '💵 The limit is set by the bank based on income',
              '💵 You pay at the end of the month: the full amount or part of it with interest',
              '🔁 You can choose pagamento a 100% on the debit date — then interest on purchases is usually not charged',
              '📊 It appears in the Banco de Portugal credit history (CRC)',
              '🎁 Cashback, miles, travel insurance',
              '⚠️ If you do not pay 100%, TAN/TAEG are charged under the contract; check the FIN/FINE and the quarterly limites máximos de TAEG Banco de Portugal',
              '💰 Annual fee: €0–150 depending on the card tier'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '✅ Requirements to obtain one',
      content: [
        { kind: 'checklist', items: [
          '🪪 Confirmed legal status/address in Portugal; length of residence and relationship with the bank improve your chances, but the specific threshold depends on the bank',
          '🆔 NIF is mandatory; NISS is often requested from employees/recibos verdes workers, but the document list depends on the bank and the source of income',
          '💰 Regular income: employment contract, recibos verdes, pension or other sources',
          '📊 Credit history: in the first 6–12 months of living in Portugal there is no history, so the limit will be small — €300–500',
          '⚠️ If you do not have your own confirmed income, the bank will often refuse or offer a very low limit; sometimes a joint applicant/guarantor may be possible',
          '🏦 An existing account with this bank improves your chances',
          '⛔ Arrears/incumprimento or excessive debt burden in the CRC will almost certainly worsen the decision; ordinary loans with no arrears are not, by themselves, an automatic refusal'
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
              '🟢 Millennium Cartão Premium: €0 service fee, 1% cashback on occasional purchases, limit €500–3000',
              '🟢 ActivoBank Visa Classic: €0 service fee, limit €500–2500, suitable for online purchases',
              '🟢 Santander Light: €0 service fee, basic limit',
              '🟢 CGD Caixa Worldwide: €19/year, accepted in 200+ countries',
              '🟢 BPI 5 estrelas: €25/year, millions of BPI ATMs'
            ]}
          ]},
          { id: 'c2', title: 'Cashback and bonuses', content: [
            { kind: 'checklist', items: [
              '🟡 Millennium World Mastercard: €75/year, 0.5–1% cashback + travel insurance',
              '🟡 ActivoBank Gold: €50/year, insurance + 0.5% cashback',
              '🟡 CGD Universal Plus: €30/year, 1% cashback at Continente / Pingo Doce',
              '🟡 Santander Light Visa: 0.3% cashback, €35/year',
              '🟡 Wizink White: €0/year, 0% APR for 24 months for debt transfer'
            ]}
          ]},
          { id: 'c3', title: 'Premium cards (Platinum, World Elite)', content: [
            { kind: 'checklist', items: [
              '🟣 Millennium Visa Platinum: €150/year, 1–2% cashback, lounge access, insurance',
              '🟣 BPI World Elite Mastercard: €250/year, premium concierge service',
              '🟣 Santander Select: €200/year, premium family package',
              '🟣 Caixa Geral Visa Infinite: €300/year, exclusive concierge service',
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
          { id: 'a1', title: 'You are already a bank customer', content: [
            { kind: 'checklist', items: [
              '💻 Via online banking — usually one click on “pedir cartão de crédito”',
              '📊 The bank automatically calculates the limit based on salary',
              '✅ Decision in 1–3 working days',
              '📦 The card arrives by post in 5–7 days'
            ]}
          ]},
          { id: 'a2', title: 'You are not a bank customer', content: [
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
        { kind: 'paragraph', text: 'Portugal does not have a public credit score like in the USA (FICO). Banco de Portugal maintains the CRC (Mapa de Responsabilidades de Crédito) — a list of your loans and arrears. Banks use their own internal scoring.' },
        { kind: 'checklist', items: [
          '✅ Pay off the credit card at 100% every month — this increases the bank’s trust',
          '✅ Receive salary or income from recibos through the same bank for 6 months',
          '✅ After 12 months, ask to increase the limit via online banking',
          '✅ Do not constantly use more than 70% of the limit',
          '⛔ An overdue payment goes into CRC reporting and can seriously worsen access to credit; after regularisation, it is important to check how the bank updated the status in the CRC',
          '⛔ Opening many credit cards at once = banks will reduce the limit',
          '📊 You can request a CRC statement for free: bportugal.pt → “Mapa de Responsabilidades”',
          '💰 A good history after 12 months = access to mortgages and car loans'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '💳 The first credit card is the hardest; it gets easier afterwards',
          '🎁 Cashback at Continente / Pingo Doce + credit card = double benefit: supermarket card + credit card cashback',
          '🌍 For trips abroad, paying by credit card is advantageous: they often include insurance and chargeback, meaning money back in the event of fraud',
          '⚖️ IMPORTANT: MANY Russian credit cards are blocked for payments in Portugal — you need a local card',
          '🚫 Never make a cash advance from a credit card — 5% fee + interest from day one',
          '🔁 If you cannot pay 100% — agree a modalidade de pagamento or restructuring with the bank in advance; non-payment without an agreement = incumprimento and deterioration of the CRC',
          '⚖️ Do not confuse: direito ao esquecimento (Lei 75/2021) concerns the prohibition of discrimination in access to credit/insurance for people with an oncological/disability history, not the writing off of debts. Prescrição periods for debts depend on the type of obligation — legal/DECO advice is needed',
          '🏆 Wizink White with balance transfer at 0% APR for 24 months — a lifeline if you have debts on other credit cards'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Annual fee for a basic credit card', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Annual fee for a premium credit card', amountEURMin: 100, amountEURMax: 300 },
    { label: 'TAN/TAEG with revolving/pagamento fracionado', amountEUR: 0, note: 'Depends on the card; it cannot exceed the quarterly taxas máximas Banco de Portugal — check the FIN/FINE' },
    { label: 'Cash withdrawal fee from a credit card', amountEURMin: 5, amountEURMax: 25 }
  ],
  sources: [
    { title: 'Banco de Portugal — Mapa de Responsabilidades', url: 'https://www.bportugal.pt/page/mapa-de-responsabilidades-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Credit Cards (Portal do Cliente Bancário)', url: 'https://clientebancario.bportugal.pt/pt-pt/cartoes-de-credito', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
