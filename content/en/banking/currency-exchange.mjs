export default {
  editorialVoice: 'hackportugal',
  id: 'currency-exchange',
  categoryId: 'banking',
  title: 'Currency exchange — where RUB / USD / GBP to EUR is best value',
  tldr: 'It is usually best to convert through Wise, Revolut or N26 (exchange rate ≈ mid-market + 0.4-0.5%). Portuguese banks take a 1.5-3% spread (avoid). Exchange offices at airports/in city centres — up to 5% spread. ATMs in Portugal use your card-issuing bank’s rate (if you use a non-resident card). For large sums (>€10,000) — bank transfer through a broker (CurrencyFair, OFX). For Russians: SWIFT sanctions mean you need a route via a third country (Turkey, Serbia, Georgia) or via cryptocurrency.',
  tags: ['currency', 'exchange', 'wise', 'revolut', 'rub', 'usd', 'exchange rate'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'best-options',
      title: '💱 Best exchange methods',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Wise (formerly TransferWise)', content: [
            { kind: 'checklist', items: [
              '🟢 **Rate**: mid-market + 0.4-0.5% (the cheapest among legal options)',
              '💳 **Wise card** (PT IBAN): you can spend in EUR from a multi-currency account',
              '🚀 EUR-EUR transfer: ≤ 1 hour, free',
              '🚀 USD/GBP → EUR: 1-2 days',
              '🇷🇺 RUB → EUR: NOT available (since 2022, sanctions)',
              '💰 Limits: up to €1,000,000/year for verified users',
              '🌐 wise.com or app'
            ]}
          ]},
          { id: 'b2', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              '🟢 **Rate**: mid-market + 0.5% at weekends / free on Premium',
              '💳 PT IBAN free for everyone (since 2024)',
              '🚀 Multi-currency account — hold USD/GBP',
              '⚡ Instant conversion',
              '🇷🇺 RUB → EUR: 1.5-3% spread + fee (if it works)',
              '⚠️ At weekends the rate is worse: spread +1%',
              '💰 Free plan: €1,000/month exchange; Premium — unlimited'
            ]}
          ]},
          { id: 'b3', title: 'N26', content: [
            { kind: 'checklist', items: [
              '🟢 German online bank, DE IBAN',
              '💱 Conversion to EUR: free for cardholders',
              '⚖️ Good for USD/GBP, not for RUB',
              '💰 Free plan — basic functionality'
            ]}
          ]},
          { id: 'b4', title: 'Brokers for large sums', content: [
            { kind: 'checklist', items: [
              '💼 **CurrencyFair**: for €10,000+, spread 0.3-0.5%',
              '💼 **OFX**: spread 0.4-0.7%, no fee',
              '💼 **HiFX (Lloyds)**: for UK residents',
              '⏱️ Transfer 1-3 days, better rate than Wise for large sums',
              '🆔 KYC required — passport + proof of source of funds'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'avoid',
      title: '🚫 Avoid',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Exchange offices (Casas de Câmbio)', content: [
            { kind: 'checklist', items: [
              '⚠️ LIS airport: 5-7% spread, terrible rate',
              '⚠️ Tourist areas (Baixa Lisboa, Centro Porto): 4-6% spread',
              '⚠️ In a hotel / at reception: 6-10% spread',
              '✅ Use ONLY for small amounts of cash in an emergency',
              '🛑 Do NOT exchange >€100 in cash — you lose €5+'
            ]}
          ]},
          { id: 'a2', title: 'Portuguese banks (for currency exchange)', content: [
            { kind: 'checklist', items: [
              '⚠️ Conversion at Millennium / Santander / CGD: 1.5-3% spread',
              '⚠️ ATM with a non-resident card: uses the card-issuing bank’s rate (often poor)',
              '⚠️ International SWIFT transfer: €25-50 + 1% on the rate',
              '✅ There are better options for large sums'
            ]}
          ]},
          { id: 'a3', title: 'Western Union / MoneyGram', content: [
            { kind: 'checklist', items: [
              '⚠️ Spread 5-12%',
              '⚠️ Use only if the recipient has no bank account or online access',
              '✅ For emergency cash transfers to developing countries'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rubles',
      title: '🇷🇺 RUB → EUR specifics (2026)',
      content: [
        { kind: 'paragraph', text: 'After the 2022 sanctions, currency flows Russian Federation—EU are heavily restricted. SWIFT is closed to most Russian Federation banks, and rouble operations in the EU run through complex routes.' },
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Via a third country', content: [
            { kind: 'checklist', items: [
              '🇹🇷 **Turkey**: open an account at Türkiye İş Bankası, transfer RUB → TRY → USD → EUR',
              '🇷🇸 **Serbia**: Banka Intesa, NBS regulation is more liberal',
              '🇬🇪 **Georgia**: TBC Bank — a working option',
              '🇰🇿 **Kazakhstan**: Halyk Bank — transfers from the Russian Federation still work',
              '⏱️ 3-7 days + 0.5-2% loss on the rate',
              '⚠️ Limits on exporting RUB from the Russian Federation: USD 1m/year for individuals'
            ]}
          ]},
          { id: 'r2', title: 'Via cryptocurrency', content: [
            { kind: 'checklist', items: [
              '💵 USDT (Tether) — the most liquid for conversion',
              '💱 P2P on Binance/Bybit: buy USDT for RUB → sell for EUR (~1% loss)',
              '⚠️ IMPORTANT: Portugal requires an IRS declaration if turnover is >€5,000/year',
              '⚠️ AML checks can be strict in EU banks when funds arrive from cryptocurrency',
              '📋 Keep the full transaction history for the AT'
            ]}
          ]},
          { id: 'r3', title: 'Direct transfer (a few banks)', content: [
            { kind: 'checklist', items: [
              '🏦 Russian Federation banks NOT under sanctions: Gazprombank (for energy), Rosselkhozbank (for agriculture) — partly work',
              '⚠️ Most large Russian Federation banks (Sber, VTB, Alfa) — blocked for SWIFT',
              '🌐 UniCredit / Raiffeisen Russia — work, but fees are expensive (3-5%)',
              '⏱️ Timeframes 5-15 days (if it does not get stuck)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 **Rate tracking**: set an alert in Wise/Revolut, exchange when the rate is favourable',
          '💸 **Averaging**: split a large sum into 3-5 portions, exchange over 2-4 weeks',
          '🏦 **Keep exchange receipts** — for the AT, if needed',
          '🛡️ **Sanctions protection**: do not keep large sums in one bank/one currency',
          '⚖️ **AT declaration**: foreign accounts >€50,000 — mandatory Modelo 38 declaration',
          '📊 **Portuguese IRS**: exchange-rate differences on currency operations — taxed as “mais-valias” (28%)',
          '⚠️ **Tax resident**: if you became a Portuguese resident and sold assets abroad — IRS on the difference',
          '🌐 **CMVM regulator**: the broker must hold a licence in the EU; check cmvm.pt',
          '💰 **Cash flow**: have an EUR reserve for 3-6 months of living costs, do not depend on currency movements'
        ]}
      ]
    },
    {
      id: 'compare',
      title: '📊 Fee comparison for 1000 USD → EUR',
      content: [
        { kind: 'paragraph', text: 'Approximate saving calculation on 1000 USD → EUR (mid-market rate ≈ 0.93):' },
        { kind: 'checklist', items: [
          '🟢 **Wise**: receive ≈ €925, loss ≈ €5 (0.5%)',
          '🟢 **Revolut Premium**: ≈ €928, loss ≈ €2',
          '🟡 **N26**: ≈ €925, loss ≈ €5',
          '🟠 **Portuguese bank**: ≈ €905, loss ≈ €25 (2.7%)',
          '🔴 **Airport exchange office**: ≈ €880, loss ≈ €50 (5.4%)',
          '🔴 **Western Union**: ≈ €870, loss ≈ €60'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Wise EUR-EUR transfer', amountEUR: 0 },
    { label: 'Wise USD → EUR (1000)', amountEUR: 5, note: 'spread ≈ 0.5%' },
    { label: 'Revolut Premium', amountEUR: 8, note: '€/month' },
    { label: 'Portuguese bank currency spread on €1000', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Airport exchange office €1000', amountEURMin: 50, amountEURMax: 70 },
    { label: 'CurrencyFair for a large sum (>10k)', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'Banco de Portugal — Fee comparator', url: 'https://comparador.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — regulated brokers', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Modelo 38 (accounts abroad)', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
