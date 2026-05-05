export default {
  editorialVoice: 'hackportugal',
  id: 'aceitar-pagamentos-cartao',
  categoryId: 'work_business',
  title: 'Card payment acceptance: POS, MB WAY merchant, SumUp and Stripe for the self-employed',
  tldr: 'In Portugal, self-employed/SMEs usually accept cards via a bank POS/SIBS, a SumUp mobile terminal, or online via Stripe. SumUp publicly lists a 1.69% per-transaction fee and no monthly fee; bank POS often have terminal rental and an MDR by contract. MB WAY for business is enabled as a merchant service via a bank/PSP, not as personal transfers. A POS receipt does not replace a fatura: the sale must be recorded in Portal das Finanças or certified invoicing software.',
  tags: ['pos', 'mbway', 'stripe', 'sumup', 'invoices'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-channel',
      title: '1. Choose the payment channel for your scenario',
      content: [
        { kind: 'paragraph', text: 'For a self-employed person in Portugal there is no single “mandatory” POS. You choose a provider: a bank/SIBS for a classic terminal, SumUp for a quick start with no rental, Stripe for online payments and subscriptions, MB WAY merchant for payments by phone number/QR/checkout.' },
        { kind: 'checklist', items: [
          'Offline services on site: SumUp or a bank POS.',
          'Shop, café, salon, steady flow: POS via a bank/SIBS with a contracted MDR.',
          'Online card payments: Stripe Checkout, Payment Links or a site integration.',
          'Portuguese audience: add MB WAY merchant — customers actively use MB WAY.',
          'One-off services without a website: Stripe Payment Link or SumUp payment link.',
          'B2B invoices: bank transfer + fatura-recibo is often cheaper than cards.',
          'High average ticket: compare the % fee and the fixed component, otherwise cards will eat the margin.'
        ] }
      ]
    },
    {
      id: 'providers',
      title: '2. What SIBS/POS, SumUp, Stripe and MB WAY offer',
      content: [
        { kind: 'substeps', items: [
          { id: 'sibs-pos', title: 'Bank POS / SIBS', content: [
            { kind: 'paragraph', text: 'SIBS is the infrastructure behind Multibanco, MB WAY and merchant solutions. POS is usually arranged not directly “with SIBS” but via a bank or acquirer: Millennium, Santander, CGD, BPI, Novo Banco, ActivoBank and other PSPs.' },
            { kind: 'checklist', items: [
              'Pros: familiar for Portuguese customers, Multibanco/cards/often MB WAY in one terminal.',
              'Cons: pricing often not public; there may be a monthly fee, terminal rental, minimum commission.',
              'Suitable for SMEs with steady turnover and a physical location.',
              'Before signing, request the MDR for EEA cards, non-EEA, commercial cards and refunds.'
            ] }
          ]},
          { id: 'sumup', title: 'SumUp', content: [
            { kind: 'paragraph', text: 'SumUp is convenient for freelancers, tradespeople, pop-up sales and small services: you buy the terminal, usually no monthly fee, and the fee is public. On the SumUp Portugal pricing page it states 1.69% per transaction for the card reader.' },
            { kind: 'warning', text: 'Check the current terminal price before buying: promotions change. More important than the device price are the turnover fee and settlement time.' }
          ]},
          { id: 'stripe', title: 'Stripe', content: [
            { kind: 'paragraph', text: 'Stripe is the main option for online cards, Payment Links, subscriptions, SaaS, consultations via a website. For Portugal, the standard card fee in 2026 typically starts at 1.5% + €0.25 per successful payment with EEA cards; UK/international cards are pricier.' },
            { kind: 'checklist', items: [
              'You need a NIF/NIPC, a bank IBAN, and owner identification.',
              'You can operate as an empresário em nome individual/recibos verdes or a company.',
              'A Stripe receipt is not a Portuguese fatura.',
              'Refunds and chargebacks have separate rules and may cost money.',
              'For online sales, check SCA/3‑D Secure and your refund policy.'
            ] }
          ]},
          { id: 'mbway-merchant', title: 'MB WAY merchant', content: [
            { kind: 'paragraph', text: 'MB WAY for business is enabled via a bank/PSP/SIBS as a merchant service: QR, request-to-pay, e-commerce checkout or POS. This is not the same as receiving funds to a personal MB WAY between individuals.' },
            { kind: 'warning', text: 'Do not use personal MB WAY transfers as your permanent business till: you will not have proper reporting, reconciliation or a merchant agreement, and the bank may question the origin of operations.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: '3. What to prepare for onboarding',
      content: [
        { kind: 'paragraph', text: 'Payment providers are obliged to perform KYC/AML checks. Even if you are just on recibos verdes, you will be asked to verify your identity, tax status and bank account.' },
        { kind: 'checklist', items: [
          'NIF and access to Portal das Finanças.',
          'Documento de identificação: passport, Cartão de Cidadão or residence permit.',
          'A Portuguese or SEPA IBAN in your name/company.',
          'Address in Portugal and phone/e-mail.',
          'Caderneta predial/tenancy agreement or proof of address — sometimes for risk review.',
          'Declaração de início de atividade at Finanças with the correct CAE/CIRS.',
          'For a company: certidão permanente, NIPC, dados dos sócios/beneficiário efetivo.',
          'Description of goods/services, website or social media if enabling online payments.',
          'Return policy and merchant contact details for e-commerce.'
        ] },
        { kind: 'warning', text: 'If your activity is not opened at Finanças, open the início de atividade first. Accepting commercial payments “to a personal card” without faturação is a tax risk under IRS/IVA and a risk of being blocked by a PSP.' }
      ]
    },
    {
      id: 'fees',
      title: '4. How to calculate fees and not misprice your margin',
      content: [
        { kind: 'paragraph', text: 'Compare more than just the percentage. Total cost = transaction fee + fixed component + terminal rental + chargeback/refund + integration cost + accountant time for reconciliation.' },
        { kind: 'checklist', items: [
          'SumUp: publicly 1.69% per transaction; monthly fee usually €0.',
          'Stripe cards EEA: benchmark 1.5% + €0.25 per successful payment; UK/international cards are pricier.',
          'Bank POS: MDR and monthly fee depend on the bank, turnover, sector and card type.',
          'MB WAY merchant: the fee is set by the bank/PSP; request pricing separately from card acquiring.',
          'For small tickets the fixed €0.25 in online acquiring can be painful.',
          'For tickets of €5–€10 it is often better to use a POS without a fixed component if the bank offers a low MDR.',
          'For tickets of €100–€500 the percentage and the presence of chargebacks matter more.',
          'Ask about the payout schedule: D+1, D+2, weekly payout or rolling reserve.',
          'Check whether there is a fee for terminal return, inactivity fee or minimum monthly fee.'
        ] },
        { kind: 'paragraph', text: 'Example: a €100 consultation via SumUp at 1.69% costs €1.69, about €98.31 will land in your account before taxes. An online Stripe payment with an EEA card at 1.5% + €0.25 costs €1.75, about €98.25 will land in your account before taxes.' }
      ]
    },
    {
      id: 'invoicing',
      title: '5. Link with faturação: POS receipt ≠ fatura',
      content: [
        { kind: 'paragraph', text: 'The payment provider confirms receipt of funds, but does not fulfil the tax obligation to issue a fatura. In Portugal the sale/service must be recorded via Portal das Finanças or certified invoicing software, if you use it.' },
        { kind: 'checklist', items: [
          'For recibos verdes: you can issue a fatura-recibo in Portal das Finanças after payment.',
          'If you issue a bill first, use a fatura and then a recibo after receiving funds.',
          'For retail and high volume, certified faturação with a QR Code and ATCUD is more convenient.',
          'Store the POS/Stripe/SumUp transaction ID alongside the fatura number for reconciliation.',
          'Separate gross sales, fees and net payout: the PSP fee is a business expense.',
          'If you are in the regime de isenção IVA under art. 53 CIVA, you still must issue a fatura with the correct exemption reason.',
          'If you charge IVA, the IVA amount is calculated on the full sale price, not on the amount after the PSP fee.',
          'Export monthly statements from Stripe/SumUp/the bank for your accountant.',
          'Issue a nota de crédito for a client refund, not just a “minus” on the statement.'
        ] },
        { kind: 'warning', text: 'Classic mistake: receive €98.31 after fees and issue a fatura for €98.31. The taxable sale was €100, and the €1.69 fee is your expense.' }
      ]
    },
    {
      id: 'setup-plan',
      title: '6. Practical launch plan in 1–3 days',
      content: [
        { kind: 'checklist', items: [
          'Check that your atividade is open at Finanças and that the CAE/CIRS matches the service.',
          'Decide whether you need a physical terminal, an online link, or both.',
          'For a quick start buy/order SumUp or create a Stripe Payment Link.',
          'If you have a shop/steady flow, ask 2–3 banks for a POS + MB WAY merchant proposal.',
          'Compare effective fees on your real tickets: €10, €50, €100, €500.',
          'Set up fatura-recibo or certified faturação before the first payment.',
          'Make a test payment of €1–€2 and check the receipt, payout and bank statement.',
          'Create a reconciliation spreadsheet: date, client, gross amount, fee, net, fatura number, payout batch.',
          'Tell clients which methods you accept: cartão, MB WAY, transferência bancária, dinheiro.'
        ] },
        { kind: 'paragraph', text: 'If you already have a Contabilista Certificado, agree with them how to record PSP fees and which reports to export monthly. This is cheaper than untangling chaos at year-end before IRS/IRC.' }
      ]
    }
  ],
  costs: [
    { label: 'SumUp card transaction fee', amountEURMin: 1.69, amountEURMax: 1.69, note: 'This is a percentage fee: 1.69% per transaction per the public SumUp Portugal page; entered here as a number due to the directory format.' },
    { label: 'Stripe card fee EEA', amountEURMin: 1.5, amountEURMax: 1.5, note: 'Benchmark: 1.5% + €0.25 per successful EEA card payment; Stripe fees depend on the method and the card’s country.' },
    { label: 'Stripe EEA fixed component', amountEUR: 0.25, note: 'Added to the percentage fee for a successful card payment at the standard rate.' },
    { label: 'Bank POS terminal rental', amountEURMin: 0, amountEURMax: 25, note: 'Typical market range per month; the exact monthly fee and MDR are only in the bank/PSP offer.' }
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
      title: 'Autoridade Tributária — invoicing rules and issuing faturas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
