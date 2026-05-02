export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-credito-debito-mb',
  categoryId: 'banking',
  title: 'Credit Card vs Debit Card vs Multibanco — what types of cards exist and how they work',
  tldr: 'In Portugal, a “card” can mean different things: cartão de débito takes money straight from your account; cartão de crédito gives you a credit limit and may charge interest; Multibanco is the national SIBS network for cash withdrawals, Estado/serviços payments and transfers; Visa/Mastercard are needed for international payments; pré-pago is topped up in advance. In 2026, almost all banks let you block a card in the app, but in case of fraud call your bank or SIBS Card Stop on 808 201 251.',
  tags: ['cards', 'multibanco', 'visa', 'fraud'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: '1. What types of cards exist in Portugal',
      content: [
        { kind: 'paragraph', text: 'The main confusion: Multibanco is not a separate bank and not necessarily a separate card. It is the national SIBS payment network. A card can simultaneously be your bank’s cartão de débito, work on Multibanco and have the international Visa or Mastercard brand.' },
        { kind: 'checklist', items: [
          'Cartão de débito — money is taken immediately from the conta à ordem; if there is no money, the transaction usually does not go through.',
          'Cartão de crédito — the bank gives you a plafond/limit; you can repay 100% on the statement date or in instalments with interest.',
          'Cartão Multibanco / débito MB — a card for the Portuguese Multibanco network: ATMs, pagamentos de serviços, Estado, telemóvel, carregamentos.',
          'Visa Debit / Mastercard Debit — a debit card that usually works online and abroad better than a pure MB card.',
          'Cartão pré-pago — a prepaid card: you top it up first, then spend; useful for children, travel and risk control.',
          'Cartão virtual — a virtual card in the bank app or MB WAY; suitable for online purchases and one-off payments.',
          'MB WAY — not a card, but a SIBS payment service linked to a phone number and card/account.'
        ] }
      ]
    },
    {
      id: 'debit-vs-credit',
      title: '2. Débito and crédito: the practical difference',
      content: [
        { kind: 'paragraph', text: 'For everyday expat life, a cartão de débito with Visa/Mastercard and access to Multibanco is almost always enough. A credit card is needed for specific cases: car hire, hotels with a deposit, buying flights, instalment payments, cashback or building a relationship with the bank.' },
        { kind: 'checklist', items: [
          'Débito: the payment immediately reduces the account balance.',
          'Débito: easier to obtain — usually issued when you open a conta à ordem.',
          'Débito: lower debt risk, but an overdraft/descoberto may be possible if the bank has enabled it.',
          'Crédito: there is a plafond — for example €1,000, €3,000 or more, at the bank’s discretion.',
          'Crédito: if you choose pagamento a 100%, interest is usually not charged if you repay in full on time.',
          'Crédito: if you pay in instalments, the TAEG/interest rate applies; check the FIN/Ficha de Informação Normalizada before signing.',
          'Crédito: a cash advance at an ATM is almost always expensive — fee + interest from the withdrawal date.',
          'Crédito: late payment damages your banking history and may appear in the Central de Responsabilidades de Crédito Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Do not confuse “cartão de crédito” with a regular Visa card. Visa/Mastercard is a payment scheme, not a type of debt. Visa Debit remains a debit card, even if it says Visa on it.' }
      ]
    },
    {
      id: 'multibanco',
      title: '3. What Multibanco can do 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'Multibanco is one of the most useful parts of the Portuguese banking system. Through an ATM or homebanking/app, you can carry out operations that in other countries often require a separate portal or a trip to the bank.' },
        { kind: 'checklist', items: [
          'Cash withdrawals at Multibanco ATMs throughout the country.',
          'Consulta de saldo and movimentos — balance and recent transactions.',
          'Pagamento de serviços — paying bills using entidade/referência/valor.',
          'Pagamentos ao Estado — taxes, IMI, IUC, fines and other Estado payments, if a referência has been issued.',
          'Transfers between Portuguese accounts and sometimes international transfers, depending on the bank.',
          'Carregamento telemóvel — topping up a mobile number.',
          'Carregamento de títulos de transporte — topping up some transport cards.',
          'Operações MB WAY — linking a card, confirming transactions, cardless withdrawals in some scenarios.',
          'Some ATMs offer depósito/cheques services, but this depends on the bank and the specific ATM.'
        ] },
        { kind: 'paragraph', text: 'If a terminal in a small café says “só Multibanco”, it may mean that international Visa/Mastercard is not accepted and that a card working on the Portuguese MB network is needed. Cards from Portuguese banks usually have no problem with this.' }
      ]
    },
    {
      id: 'online-and-abroad',
      title: '4. Online, travel and pré-pagos',
      content: [
        { kind: 'paragraph', text: 'For online purchases in 2026, 3D Secure is usually required: confirmation in the bank app, an SMS code or a push notification. If the card does not work on Amazon, Ryanair, Booking or foreign websites, check limits, permission for online/international payments and the card type.' },
        { kind: 'checklist', items: [
          'In the bank app, enable pagamentos online, pagamentos no estrangeiro and contactless if they are switched off.',
          'Set daily and monthly limits: ATM, POS, online, international.',
          'For subscriptions, use a virtual card or pré-pago with a separate limit.',
          'For car hire, crédito is often required rather than débito; check the rental company’s terms before paying.',
          'Outside the eurozone, choose payment in the local currency rather than conversion to EUR on the terminal, to avoid a poor DCC exchange rate.',
          'Do not keep large sums in the account linked to the card used for online purchases.',
          'MB WAY is good for payments in Portugal, but it does not replace Visa/Mastercard abroad.'
        ] },
        { kind: 'warning', text: 'Pré-pago is not always suitable for deposits at hotels, car hire and some subscriptions. The system sees it as a prepaid card and may reject it.' }
      ]
    },
    {
      id: 'security',
      title: '5. Blocking, fraud and chargeback',
      content: [
        { kind: 'paragraph', text: 'In 2026, a normal Portuguese bank should provide card management in the app: temporarily bloquear/desbloquear, change PIN, limits, online payments, contactless. But the app is not a substitute for an urgent call in case of theft or suspected fraud.' },
        { kind: 'checklist', items: [
          'Block the card in the bank app immediately.',
          'Call the bank using the number from the app/official website.',
          'If the bank is unavailable, use SIBS Card Stop: 808 201 251; from abroad they usually list +351 217 918 780.',
          'Write down the date, time, operator’s name and número de ocorrência/protocolo.',
          'Dispute the transactions through a reclamação/chargeback with the bank as quickly as possible.',
          'If a phone with MB WAY has been stolen, block the SIM with the operator and access to the banking app.',
          'Change passwords for e-mail, the bank and MB WAY if there is any risk of access to the device.',
          'In case of theft or obvious fraud, file a queixa with PSP/GNR or online, if applicable.'
        ] },
        { kind: 'warning', text: 'Never disclose your PIN, códigos SMS, códigos MB WAY, CMD details or full card details by phone. The bank and SIBS do not ask for confirmation codes in order to “cancel a fraudulent transaction”.' }
      ]
    },
    {
      id: 'choosing-card',
      title: '6. What an expat should choose',
      content: [
        { kind: 'paragraph', text: 'The minimum working setup: a conta à ordem with a Portuguese bank + a cartão de débito with Multibanco and Visa/Mastercard + an app with instant blocking + MB WAY. Add a credit card only if you understand the repayment schedule and fees.' },
        { kind: 'checklist', items: [
          'Check the comissão de disponibilização de cartão: with some banks the debit card is free, with others it costs €10–25 per year.',
          'Check the comissão de manutenção da conta: sometimes the card is “free”, but the account package has a fee.',
          'Confirm the limits for ATM/POS/online/international.',
          'Ask whether there is Visa Debit or Mastercard Debit, not only a national MB card.',
          'For salary and rent, a bank with strong homebanking and clear extractos is more convenient.',
          'If you take crédito, set up pagamento a 100% por débito direto.',
          'For children/guests/purchases on dubious websites, use pré-pago or a virtual card.',
          'Keep the bank support number separately from the phone — for example in a password manager or printed out.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Debit card', amountEURMin: 0, amountEURMax: 25, note: 'Typical annual market range; depends on the bank and conta à ordem package.' },
    { label: 'Credit card', amountEURMin: 0, amountEURMax: 50, note: 'The annual fee may be €0 with spending or in a premium package; check interest and TAEG in the FIN.' },
    { label: 'Prepaid card', amountEURMin: 0, amountEURMax: 15, note: 'There may be an issuance, top-up or maintenance fee; conditions vary greatly.' },
    { label: 'SIBS Card Stop', amountEUR: 0, note: 'Card blocking service; the call to 808 itself is charged according to the operator’s tariff.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal — customer rights, cards, payments and security',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — comparison of banking service fees',
      url: 'https://clientebancario.bportugal.pt/comparador-de-comissoes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Multibanco, MB WAY and payment infrastructure',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SIBS — Card Stop and payment card security',
      url: 'https://www.sibs.com',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
