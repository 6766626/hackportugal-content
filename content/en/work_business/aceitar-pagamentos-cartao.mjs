export default {
  editorialVoice: 'hackportugal',
  id: 'aceitar-pagamentos-cartao',
  categoryId: 'work_business',
  title: 'Accepting card payments: POS, MB WAY merchant, SumUp and Stripe for the self-employed',
  tldr: 'In Portugal, self-employed workers/SMEs usually accept cards via a bank POS/SIBS, a SumUp mobile terminal, or online via Stripe. SumUp publicly states a 1.69% transaction fee and no monthly fee; bank POS solutions often have terminal rental and MDR by agreement. MB WAY for business is connected as a merchant service through a bank/PSP, not as personal transfers. A POS receipt does not replace a fatura: the sale must be issued in Portal das Finanças or certified invoicing software.',
  tags: ['pos', 'mbway', 'stripe', 'sumup', 'invoices'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: '1. Choose the payment channel for your scenario',
      content: [
        { kind: 'paragraph', text: 'For a self-employed person in Portugal, there is no single “mandatory” POS. You choose the provider: a bank/SIBS for a classic terminal, SumUp for a quick start without rental, Stripe for online payments and subscriptions, MB WAY merchant for payments by phone number/QR/checkout.' },
        { kind: 'checklist', items: [
          'Offline on-site services: SumUp or a bank POS.',
          'Shop, café, salon, regular flow: POS through a bank/SIBS with an agreed MDR.',
          'Online card payment: Stripe Checkout, Payment Links or website integration.',
          'Portuguese audience: add MB WAY merchant — customers actively use MB WAY.',
          'One-off services without a website: Stripe Payment Link or SumUp payment link.',
          'B2B invoices: bank transfer + fatura-recibo is often cheaper than cards.',
          'High average transaction value: compare the % fee and the fixed component, otherwise cards will eat into the margin.'
        ] }
      ]
    },
    {
      id: 'providers',
      title: '2. What SIBS/POS, SumUp, Stripe and MB WAY provide',
      content: [
        { kind: 'substeps', items: [
          { id: 'sibs-pos', title: 'Bank POS / SIBS', content: [
            { kind: 'paragraph', text: 'SIBS is the infrastructure for Multibanco, MB WAY and solutions for merchants. A POS is usually arranged not directly “with SIBS”, but through a bank or acquirer: Millennium, Santander, CGD, BPI, Novobanco, ActivoBank and other PSPs.' },
            { kind: 'checklist', items: [
              'Pros: familiar to Portuguese customers, Multibanco/cards/often MB WAY in one terminal.',
              'Cons: tariffs are often not public; there may be a monthly fee, terminal rental, minimum fee.',
              'Suitable for SMEs with steady turnover and a physical location.',
              'Before signing, request the MDR for EEA cards, non-EEA cards, commercial cards and refunds.'
            ] }
          ]},
          { id: 'sumup', title: 'SumUp', content: [
            { kind: 'paragraph', text: 'SumUp is convenient for freelancers, tradespeople, pop-up sales and small services: the terminal is purchased, there is usually no monthly fee, and the fee is public. The SumUp Portugal pricing page states 1.69% per transaction for a card reader.' },
            { kind: 'warning', text: 'Check the current terminal price before buying: promotions change. What matters more is not the device price, but the fee on turnover and the time it takes for money to be credited.' }
          ]},
          { id: 'stripe', title: 'Stripe', content: [
            { kind: 'paragraph', text: 'Stripe is the main option for online cards, Payment Links, subscriptions, SaaS, and consultations via a website. For Portugal, Stripe’s standard card fee in 2026 usually starts from 1.5% + €0.25 for a successful payment with EEA cards; UK/international cards are more expensive.' },
            { kind: 'checklist', items: [
              'You need a NIF/NIPC, a bank IBAN, and owner identification.',
              'You can operate as an empresário em nome individual/recibos verdes or a company.',
              'A Stripe receipt is not a Portuguese fatura.',
              'Refunds and chargebacks have separate rules and may cost money.',
              'For online sales, check SCA/3-D Secure and the refunds policy.'
            ] }
          ]},
          { id: 'mbway-merchant', title: 'MB WAY merchant', content: [
            { kind: 'paragraph', text: 'MB WAY for business is connected through a bank/PSP/SIBS as a merchant service: QR, request-to-pay, checkout in e-commerce, or POS. This is not the same as receiving money on personal MB WAY between private individuals.' },
            { kind: 'warning', text: 'Do not use personal MB WAY transfers as a permanent business till: you will not have proper reporting, reconciliation or a merchant agreement, and the bank may ask about the origin of the transactions.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: '3. What to prepare for setup',
      content: [
        { kind: 'paragraph', text: 'Payment providers are required to carry out KYC/AML checks. Even if you are simply using recibos verdes, you will be asked to confirm your identity, tax status and bank account.' },
        { kind: 'checklist', items: [
          'NIF and access to Portal das Finanças.',
          'Identification document: passport, Cartão de Cidadão or residence permit.',
          'Portuguese or SEPA IBAN in your name/company name.',
          'Address in Portugal and phone/e-mail.',
          'Caderneta predial/rental contract or proof of address — sometimes for risk review.',
          'Declaração de início de atividade in Finanças with the correct CAE/CIRS.',
          'For a company: certidão permanente, NIPC, dados dos sócios/beneficiário efetivo.',
          'Description of goods/services, website or social media if you are connecting online payments.',
          'Refund policy and contactos do comerciante for e-commerce.'
        ] },
        { kind: 'warning', text: 'If activity has not been opened in Finanças, first open início de atividade. Accepting commercial payments “to a personal card” without invoicing is a tax risk for IRS/IVA and a blocking risk with the PSP.' }
      ]
    },
    {
      id: 'fees',
      title: '4. How to calculate fees and avoid getting the margin wrong',
      content: [
        { kind: 'paragraph', text: 'Do not compare only the percentage. The final cost = transaction fee + fixed component + terminal rental + chargeback/refund + integration cost + accounting time for reconciliation.' },
        { kind: 'checklist', items: [
          'SumUp: publicly 1.69% per transaction; monthly fee usually €0.',
          'Stripe EEA cards: benchmark 1.5% + €0.25 per successful payment; UK/international cards are more expensive.',
          'Bank POS: MDR and monthly fee depend on the bank, turnover, sector and card type.',
          'MB WAY merchant: the fee is set by the bank/PSP; request the price separately from card acquiring.',
          'For small transactions, the fixed €0.25 in online acquiring can be painful.',
          'For €5–10 transactions, a POS without a fixed component is often more advantageous if the bank offers a low MDR.',
          'For €100–500 transactions, the percentage and the presence of chargebacks matter more.',
          'Ask about the payout period: D+1, D+2, weekly payout or rolling reserve.',
          'Check whether there is a terminal return fee, inactivity fee or minimum monthly fee.'
        ] },
        { kind: 'paragraph', text: 'Example: a €100 consultation via SumUp at 1.69% costs €1.69, and about €98.31 reaches the account before taxes. An online Stripe payment by EEA card at 1.5% + €0.25 costs €1.75, and about €98.25 reaches the account before taxes.' }
      ]
    },
    {
      id: 'invoicing',
      title: '5. Link with invoicing: POS receipt ≠ fatura',
      content: [
        { kind: 'paragraph', text: 'The payment provider confirms receipt of money, but does not fulfil the tax obligation to issue a fatura. In Portugal, the sale/service must be recorded through Portal das Finanças or certified software de faturação, if you use it.' },
        { kind: 'checklist', items: [
          'For recibos verdes: you can issue a fatura-recibo in Portal das Finanças after payment.',
          'If you issue an invoice first, use a fatura and then a recibo after receiving the money.',
          'For retail and high volume, certified invoicing with QR Code and ATCUD is more convenient.',
          'Keep the POS/Stripe/SumUp transaction ID alongside the fatura number for reconciliation.',
          'Separate gross sales, fees and net payout: the PSP fee is a business expense.',
          'If you are under the regime de isenção IVA under art. 53 CIVA, still issue a fatura with the correct exemption reason.',
          'If you charge IVA, the IVA amount is calculated on the full sale price, not on the amount after the PSP fee.',
          'Export monthly statements from Stripe/SumUp/bank for the accountant.',
          'Issue a nota de crédito for a customer refund, rather than just a “minus” in the statement.'
        ] },
        { kind: 'warning', text: 'Classic mistake: receiving €98.31 after the fee and issuing a fatura for €98.31. The taxable sale was €100, and the €1.69 fee is your expense.' }
      ]
    },
    {
      id: 'setup-plan',
      title: '6. Practical launch plan in 1–3 days',
      content: [
        { kind: 'checklist', items: [
          'Check that atividade aberta is in Finanças and that the CAE/CIRS matches the service.',
          'Decide whether you need a physical terminal, an online link, or both channels.',
          'For a quick start, buy/order SumUp or create a Stripe Payment Link.',
          'If you have a shop/flow, request a POS + MB WAY merchant offer from 2–3 banks.',
          'Compare the effective fee on your real transaction values: €10, €50, €100, €500.',
          'Set up fatura-recibo or certified invoicing before the first payment.',
          'Make a test payment of €1–2 and check the receipt, payout and bank statement.',
          'Create a reconciliation table: date, customer, gross amount, fee, net, fatura number, payout batch.',
          'Tell customers which methods you accept: cartão, MB WAY, transferência bancária, dinheiro.'
        ] },
        { kind: 'paragraph', text: 'If you already have a Contabilista Certificado, agree with them how to record PSP fees and which reports to export monthly. This is cheaper than sorting out chaos at the end of the year before IRS/IRC.' }
      ]
    }
  ],
  costs: [
    { label: 'SumUp card transaction fee', amountEURMin: 1.69, amountEURMax: 1.69, note: 'This is the fee percentage: 1.69% per transaction according to the public SumUp Portugal page; the field is shown as a number because of the guide format.' },
    { label: 'Stripe EEA card fee', amountEURMin: 1.5, amountEURMax: 1.5, note: 'Benchmark: 1.5% + €0.25 per successful EEA card payment; Stripe tariffs depend on the method and the card country.' },
    { label: 'Stripe EEA fixed component', amountEUR: 0.25, note: 'Added to the percentage fee for a successful card payment under the standard tariff.' },
    { label: 'Bank POS rental', amountEURMin: 0, amountEURMax: 25, note: 'Typical market range per month; the exact monthly fee and MDR are only in the bank/PSP offer.' }
  ],
  sources: [
    {
      title: 'SIBS — merchant solutions: POS, MB WAY and Multibanco',
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
      title: 'Autoridade Tributária — invoicing rules and issuing faturas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
