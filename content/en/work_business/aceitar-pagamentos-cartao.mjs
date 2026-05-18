export default {
  editorialVoice: 'hackportugal',
  id: 'aceitar-pagamentos-cartao',
  categoryId: 'work_business',
  title: 'Accepting card payments: POS, MB WAY merchant, SumUp and Stripe for the self-employed',
  tldr: 'In Portugal, self-employed workers/PME usually accept cards through a bank POS/SIBS, a SumUp mobile terminal, or online via Stripe. SumUp publicly states a 1.69% transaction fee and no mensalidade; bank POS solutions often have terminal rental and an MDR agreed by contract. MB WAY for business is connected as a merchant service through a bank/PSP, not as personal transfers. A POS receipt does not replace a fatura: the sale must be issued in Portal das Finanças or certified faturação software.',
  tags: ['pos', 'mbway', 'stripe', 'sumup', 'invoices'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: '1. Choose the payment channel for your situation',
      content: [
        { kind: 'paragraph', text: 'For a self-employed person in Portugal, there is no single “mandatory” POS. You choose the provider: a bank/SIBS for a classic terminal, SumUp for a quick start without rental, Stripe for online payments and subscriptions, MB WAY merchant for payments by phone number/QR/checkout.' },
        { kind: 'checklist', items: [
          'Offline services on site: SumUp or a bank POS.',
          'Shop, café, salon, regular flow: POS through a bank/SIBS with a contractual MDR.',
          'Online card payment: Stripe Checkout, Payment Links or website integration.',
          'Portuguese audience: add MB WAY merchant — customers actively use MB WAY.',
          'One-off services without a website: Stripe Payment Link or SumUp payment link.',
          'B2B invoices: bank transfer + fatura-recibo is often cheaper than card.',
          'High average ticket: compare the percentage fee and fixed component, otherwise card fees will eat into your margin.'
        ] }
      ]
    },
    {
      id: 'providers',
      title: '2. What SIBS/POS, SumUp, Stripe and MB WAY provide',
      content: [
        { kind: 'substeps', items: [
          { id: 'sibs-pos', title: 'Bank POS / SIBS', content: [
            { kind: 'paragraph', text: 'SIBS is the infrastructure for Multibanco, MB WAY and solutions for comerciantes. A POS is usually arranged not directly “with SIBS”, but through a bank or acquirer: Millennium, Santander, CGD, BPI, Novobanco, ActivoBank and other PSPs.' },
            { kind: 'checklist', items: [
              'Pros: familiar to Portuguese customers, Multibanco/cards/often MB WAY in one terminal.',
              'Cons: tariffs are often not public; there may be a mensalidade, terminal rental, or minimum fee.',
              'Suitable for PME with steady turnover and a physical location.',
              'Before signing, ask for the MDR for EEA cards, non-EEA cards, commercial cards and refunds.'
            ] }
          ]},
          { id: 'sumup', title: 'SumUp', content: [
            { kind: 'paragraph', text: 'SumUp is convenient for freelancers, tradespeople, pop-up sales and small services: the terminal is purchased, there is usually no mensalidade, and the fee is public. The SumUp Portugal pricing page states 1.69% per transaction for the card reader.' },
            { kind: 'warning', text: 'Check the current terminal price before buying: promotions change. More important than the device price are the turnover fee and the time it takes for money to be paid out.' }
          ]},
          { id: 'stripe', title: 'Stripe', content: [
            { kind: 'paragraph', text: 'Stripe is the main option for online cards, Payment Links, subscriptions, SaaS and website-based consultations. For Portugal, Stripe’s standard card fee in 2026 usually starts from 1.5% + €0.25 per successful payment with EEA cards; UK/international cards cost more.' },
            { kind: 'checklist', items: [
              'You need a NIF/NIPC, bank IBAN and owner identification.',
              'You can operate as an empresário em nome individual/recibos verdes or as a company.',
              'A Stripe receipt is not a Portuguese fatura.',
              'Refunds and chargebacks have separate rules and may cost money.',
              'For online sales, check SCA/3-D Secure and your refund policy.'
            ] }
          ]},
          { id: 'mbway-merchant', title: 'MB WAY merchant', content: [
            { kind: 'paragraph', text: 'MB WAY for business is connected through a bank/PSP/SIBS as a merchant service: QR, request-to-pay, e-commerce checkout or POS. This is not the same as accepting money to a personal MB WAY between individuals.' },
            { kind: 'warning', text: 'Do not use personal MB WAY transfers as a permanent business till: you will not have proper reporting, reconciliation or a merchant contract, and the bank may ask about the origin of the transactions.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: '3. What to prepare for onboarding',
      content: [
        { kind: 'paragraph', text: 'Payment providers are required to carry out KYC/AML checks. Even if you are simply operating with recibos verdes, you will be asked to confirm your identity, tax status and bank account.' },
        { kind: 'checklist', items: [
          'NIF and access to Portal das Finanças.',
          'Documento de identificação: passport, Cartão de Cidadão or residence permit.',
          'Portuguese or SEPA IBAN in your name/company name.',
          'Address in Portugal and phone/e-mail.',
          'Caderneta predial/rental contract or proof of address — sometimes for risk review.',
          'Declaração de início de atividade in Finanças with the correct CAE/CIRS.',
          'For a company: certidão permanente, NIPC, dados dos sócios/beneficiário efetivo.',
          'Description of goods/services, website or social media if you are enabling online payments.',
          'Refund policy and contactos do comerciante for e-commerce.'
        ] },
        { kind: 'warning', text: 'If the activity has not been opened in Finanças, first open início de atividade. Accepting commercial payments “to a personal card” without faturação is a tax risk for IRS/IVA and a blocking risk with the PSP.' }
      ]
    },
    {
      id: 'fees',
      title: '4. How to calculate fees and avoid margin mistakes',
      content: [
        { kind: 'paragraph', text: 'Do not compare only the percentage. Total cost = transaction fee + fixed component + terminal rental + chargeback/refund + integration cost + accounting time for reconciliation.' },
        { kind: 'checklist', items: [
          'SumUp: publicly 1.69% per transaction; mensalidade is usually €0.',
          'Stripe EEA cards: benchmark 1.5% + €0.25 per successful payment; UK/international cards cost more.',
          'Bank POS: MDR and mensalidade depend on the bank, turnover, sector and card type.',
          'MB WAY merchant: the fee is set by the bank/PSP; ask for the price separately from card acquiring.',
          'For small tickets, the fixed €0.25 in online acquiring can be painful.',
          'For €5–10 tickets, a POS with no fixed component is often more favourable if the bank offers a low MDR.',
          'For €100–500 tickets, the percentage and the existence of chargebacks matter more.',
          'Ask about payout timing: D+1, D+2, weekly payout or rolling reserve.',
          'Check whether there is a terminal return fee, inactivity fee or minimum monthly fee.'
        ] },
        { kind: 'paragraph', text: 'Example: a €100 consultation through SumUp at 1.69% costs €1.69, and around €98.31 reaches the account before taxes. An online Stripe payment with an EEA card at 1.5% + €0.25 costs €1.75, and around €98.25 reaches the account before taxes.' }
      ]
    },
    {
      id: 'invoicing',
      title: '5. Link with faturação: POS receipt ≠ fatura',
      content: [
        { kind: 'paragraph', text: 'The payment provider confirms receipt of money, but it does not fulfil the tax obligation to issue a fatura.\n\nIn Portugal, the sale/service must be recorded through Portal das Finanças or certified software de faturação, if you use it.' },
        { kind: 'checklist', items: [
          'For recibos verdes: you can issue a fatura-recibo in Portal das Finanças after payment.',
          'If you issue the invoice first, use a fatura and then a recibo after receiving the money.',
          'For retail and high volume, certified faturação with QR Code and ATCUD is more convenient.',
          'Keep the POS/Stripe/SumUp transaction ID next to the fatura number for reconciliation.',
          'Separate gross sales, fees and net payout: the PSP fee is a business expense.',
          'If you are in regime de isenção IVA under art. 53 CIVA, still issue a fatura with the correct exemption reason.',
          'If you charge IVA, the IVA amount is calculated on the full sale price, not on the amount after the PSP fee.',
          'Export monthly statements from Stripe/SumUp/the bank for the accountant.',
          'Process a customer refund with a nota de crédito, not just a “minus” in the statement.'
        ] },
        { kind: 'warning', text: 'Classic mistake: receiving €98.31 after the fee and issuing a fatura for €98.31. The taxable sale was €100, and the €1.69 fee is your expense.' }
      ]
    },
    {
      id: 'setup-plan',
      title: '6. Practical launch plan for 1–3 days',
      content: [
        { kind: 'checklist', items: [
          'Check that atividade aberta in Finanças and the CAE/CIRS matches the service.',
          'Decide whether you need a physical terminal, an online link or both channels.',
          'For a quick start, buy/order SumUp or create a Stripe Payment Link.',
          'If you have a shop/flow, ask 2–3 banks for a POS + MB WAY merchant proposal.',
          'Compare the effective fee on your real tickets: €10, €50, €100, €500.',
          'Set up fatura-recibo or certified faturação before the first payment.',
          'Make a test payment of €1–2 and check the receipt, payout and bank statement.',
          'Create a reconciliation table: date, customer, gross amount, fee, net, fatura number, payout batch.',
          'Tell customers which methods you accept: cartão, MB WAY, transferência bancária, dinheiro.'
        ] },
        { kind: 'paragraph', text: 'If you already have a Contabilista Certificado, agree with them how to record PSP fees and which reports to export monthly. This is cheaper than unpicking chaos at the end of the year before IRS/IRC.' }
      ]
    }
  ],
  costs: [
    { label: 'SumUp card transaction fee', amountEURMin: 1.69, amountEURMax: 1.69, note: 'This is the fee percentage: 1.69% per transaction according to SumUp Portugal’s public page; the field is shown as a number because of the guide format.' },
    { label: 'Stripe EEA card fee', amountEURMin: 1.5, amountEURMax: 1.5, note: 'Benchmark: 1.5% + €0.25 per successful EEA card payment; Stripe tariffs depend on the method and the card country.' },
    { label: 'Stripe EEA fixed component', amountEUR: 0.25, note: 'Added to the percentage fee for a successful card payment under the standard tariff.' },
    { label: 'Bank POS rental', amountEURMin: 0, amountEURMax: 25, note: 'Typical market range per month; the exact mensalidade and MDR are only in the bank/PSP proposal.' }
  ],
  sources: [
    {
      title: 'SIBS — solutions for merchants: POS, MB WAY and Multibanco',
      url: 'https://www.sibs.com/merchant-and-corporate/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SumUp Portugal — prices and fees',
      url: 'https://sumup.pt/precos/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Stripe Portugal — pricing for cards and payment methods',
      url: 'https://stripe.com/pt/pricing',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — faturação rules and issuing faturas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
