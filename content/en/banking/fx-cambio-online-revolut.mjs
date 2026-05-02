export default {
  editorialVoice: 'hackportugal',
  id: 'fx-cambio-online-revolut',
  categoryId: 'banking',
  title: 'Currency exchange in Portugal: Revolut, Wise and câmbio in central Lisboa',
  tldr: 'For €→USD/GBP and back in 2026, Revolut or Wise are almost always better value: the rate is close to mid-market and the fee is visible before confirmation. Banks in Portugal often give 3–5% worse value because of spread and fees, especially for cash. It is better to exchange cash not at the airport, but at a licensed câmbio in central Lisboa, for example around Baixa/Chiado, comparing the buy/sell rate. At cash machines, always choose to pay in the local currency without DCC.',
  tags: ['fx', 'revolut', 'wise', 'câmbio', 'banks'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'best-default',
      title: 'Basic rule: online is better than a cash exchange office',
      content: [
        { kind: 'paragraph', text: 'If you need to exchange euros into USD, GBP, CHF, PLN or another major currency, look at Revolut and Wise first. They show the rate and fee before the transaction, and the final result is usually closer to the interbank mid-market rate than at a Portuguese bank or tourist câmbio.' },
        { kind: 'checklist', items: [
          'For a trip from Portugal to the US/UK: convert €→USD/GBP in Revolut or Wise and pay by card.',
          'For receiving a salary or transfer from abroad: Wise is often convenient for international account details and a transparent fee.',
          'For daily spending in Portugal, keep your main currency in €.',
          'For large amounts, compare the final amount after all fees, not just the rate.',
          'For cash, use câmbio only if you actually need banknotes.',
          'Do not exchange at Lisboa/Porto airport, except for an emergency amount for a taxi/metro.',
          'At a cash machine abroad, decline conversion by the cash machine operator: choose “charge in local currency”.'
        ] }
      ]
    },
    {
      id: 'revolut-wise',
      title: 'Revolut and Wise: how not to overpay',
      content: [
        { kind: 'paragraph', text: 'Revolut is convenient for quick in-app exchanges and card spending while travelling. Wise is strong for international transfers and a clear breakdown: rate, fee, amount received. In both cases, do not trust the word “free”: check the final screen before confirming.' },
        { kind: 'checklist', items: [
          'Compare “you pay” and “recipient gets”, not the advertised rate.',
          'Check the free exchange limit in your Revolut plan: on standard plans, there may be a markup after the limit.',
          'Take account of weekends and non-working market hours: some services add a markup to protect against rate movements.',
          'With Wise, the fee depends on the currency pair, payment method and amount; a bank transfer is usually cheaper than paying by card.',
          'For €→USD/GBP, the difference between Revolut/Wise and a normal bank is often noticeable from as little as €500–€1,000.',
          'Do not keep large amounts in fintech without a reason: for long-term storage, use a bank with a full security strategy.',
          'Enable push notifications, card limits, and one-use virtual cards for online purchases.'
        ] },
        { kind: 'warning', text: 'Revolut and Wise are not a “Portuguese bank branch” in the everyday sense. For IRS, rent, salary and débito direto in Portugal, it is sometimes more convenient to have a PT IBAN at a local bank, even if you do currency exchange through fintech.' }
      ]
    },
    {
      id: 'cash-lisbon',
      title: 'Cash in Lisboa: câmbio in the centre, not the airport',
      content: [
        { kind: 'paragraph', text: 'If you need cash USD/GBP/BRL or need to sell foreign banknotes for €, look for a licensed balcão de câmbio in central Lisboa: Baixa, Rossio, Restauradores, Chiado, Avenida da Liberdade. “Exchange Comércio Lisboa” and similar exchange offices in the tourist centre may be a reasonable option if the rate is displayed transparently and there is no hidden fee.' },
        { kind: 'checklist', items: [
          'Photograph or write down the “we buy” and “we sell” rate before exchanging.',
          'Ask directly: “Há comissão?” — is there a separate fee.',
          'Compare at least 2–3 places within a 10-minute walk.',
          'Check that the rate on the board applies specifically to your currency and amount.',
          'Do not hand over your passport/residence permit for a long time; for large transactions identification is normal, but the document should be returned immediately.',
          'Count the banknotes at the window before leaving.',
          'Keep the recibo/comprovativo for the exchange.',
          'Do not exchange with people on the street, even if the rate is better.'
        ] },
        { kind: 'warning', text: 'Airport bureau de change desks are almost always a poor option: wide spread, tourist markup, weak negotiating position. If you arrive without euros, withdraw a small amount from Multibanco without DCC or exchange the minimum until you reach the city.' }
      ]
    },
    {
      id: 'banks-atm-dcc',
      title: 'Banks and cash machines: where 3–5% disappears',
      content: [
        { kind: 'paragraph', text: 'Traditional banks in Portugal are convenient for salary, mortgage, IMI/IRS and Multibanco, but not for FX. On cash exchange and card transactions in a foreign currency, the bank may earn on the spread, the operação internacional fee and the payment network’s exchange rate.' },
        { kind: 'checklist', items: [
          'Do not exchange large amounts at a bank branch without comparing with Wise/Revolut.',
          'If paying with a Portuguese card outside the eurozone, check the comissão de serviço internacional in the bank’s tariff list.',
          'At a cash machine, choose “sem conversão” or “debit in local currency”.',
          'Decline Dynamic Currency Conversion if the screen offers to charge you immediately in € at a “guaranteed rate”.',
          'For cards in USD/GBP, keep a currency balance in advance if the service allows it.',
          'Check cash withdrawal limits and the cash machine fee separately from your card fee.',
          'For large transfers to Portugal, make a €10–€50 test first.'
        ] },
        { kind: 'warning', text: 'DCC looks convenient because it shows the amount in euros, but the rate is usually worse. Banco de Portugal regularly warns that the consumer must see the rate, fees and final amount, but you still need to check value for yourself.' }
      ]
    },
    {
      id: 'large-amounts',
      title: 'Large amounts: rent, deposit, buying a car',
      content: [
        { kind: 'paragraph', text: 'For €5,000–€50,000, a 1% difference is already €50–€500. Do not make a large exchange “in one click” without comparing. Get a quote from Wise, Revolut, your bank and, if necessary, a specialised FX provider.' },
        { kind: 'checklist', items: [
          'Record the date, rate and fee in a PDF/screenshot.',
          'Check the recipient’s name and IBAN: reversing an international transfer can take weeks.',
          'For a rental deposit, transfer to the senhorio/agency bank account, not in cash.',
          'For buying a car or property, discuss transfer limits and origem dos fundos in advance.',
          'Do not split payments artificially to bypass AML checks: this may trigger a block.',
          'Keep comprovativos for the bank, IRS and any possible check of the source of funds.',
          'If the money is coming from a country outside the EU, allow 1–3 working days for the bank’s compliance questions.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Revolut / Wise online exchange', amountEURMin: 0, amountEURMax: 15, note: 'The fee depends on the amount, currency pair, plan, payment method and timing of the transaction; the exact amount is shown in the app before confirmation.' },
    { label: 'Normal bank in Portugal', amountEURMin: 30, amountEURMax: 50, note: 'Typical loss of 3–5% on every €1,000 because of spread and fees; check the bank’s preçário.' },
    { label: 'Câmbio in a tourist area', amountEURMin: 20, amountEURMax: 80, note: 'The loss on €1,000 can vary greatly by location and currency; the airport is usually closer to the worst end.' },
    { label: 'DCC at a cash machine or terminal', amountEURMin: 30, amountEURMax: 70, note: 'As a guide, 3–7% loss on €1,000 compared with paying in local currency; always choose local currency.' }
  ],
  sources: [
    { title: 'Banco de Portugal: information for bank and payment customers', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Revolut Portugal: fees, currency exchange and plan tariffs', url: 'https://www.revolut.com/pt-PT/legal/fees/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Wise: fees and currency exchange rate', url: 'https://wise.com/pt/pricing/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal: warnings on Dynamic Currency Conversion and payment services', url: 'https://clientebancario.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
