export default {
  editorialVoice: 'hackportugal',
  id: 'currency-exchange',
  categoryId: 'banking',
  title: 'Currency exchange — where RUB / USD / GBP to EUR is cheapest',
  tldr: 'It is best to convert via Wise, Revolut or N26 (exchange rate ≈ mid-market + 0.4-0.5%). Portuguese banks charge a 1.5-3% spread (avoid). Exchange bureaux at the airport/city centre — up to 5% spread. At ATMs in Portugal, always refuse DCC and choose to be charged in EUR — then the rate is set by the issuing bank/card network. For large amounts (>€10,000) — bank transfer via a broker (CurrencyFair, OFX). For Russians after sanctions, routes are limited; crypto channels require VASP/CASP compliance and must not be used to circumvent sanctions.',
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
              '💳 **Wise card**: you can spend EUR from a multi-currency account; EUR account details are usually not a PT IBAN, and Wise is not a Portuguese bank',
              '🚀 EUR-EUR transfer: ≤ 1 hour, free',
              '🚀 USD/GBP → EUR: 1-2 days',
              '🇷🇺 RUB → EUR: NOT available (since 2022, sanctions)',
              '💰 Limits: up to €1,000,000/year for verified users',
              '🌐 wise.com or the app'
            ]}
          ]},
          { id: 'b2', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              '🟢 **Rate**: on weekdays — close to interbank within plan limits; on Standard, after the limit there is a fair-use fee; at weekends there is usually an additional mark-up',
              '💳 For Revolut customers migrated to the Portuguese branch, a PT IBAN may be available; check in the app. Non-residents/old accounts may have an LT or another IBAN',
              '🚀 Multi-currency account — hold USD/GBP',
              '⚡ Conversion is instant',
              '🇷🇺 RUB → EUR: effectively unavailable after sanctions',
              '⚠️ At weekends the rate is worse: spread +1%',
              '💰 Limits depend on the plan and country of registration; Standard has a monthly fair-use limit, Premium/Metal higher or with no weekday fair-use fee'
            ]}
          ]},
          { id: 'b3', title: 'N26', content: [
            { kind: 'checklist', items: [
              '🟢 German online bank, DE IBAN',
              '💱 N26 is a EUR account with a DE IBAN; good for card payments abroad at the Mastercard rate, but not a replacement for Wise/Revolut for holding and converting USD/GBP',
              '⚖️ For USD/GBP conversion, Wise/Revolut/FX broker is better',
              '💰 Free plan — basic functionality'
            ]}
          ]},
          { id: 'b4', title: 'Brokers for large amounts', content: [
            { kind: 'checklist', items: [
              '💼 **CurrencyFair**: for €10,000+, spread 0.3-0.5%',
              '💼 **OFX**: spread 0.4-0.7%, no commission',
              '💼 **Xe Money Transfer** (formerly HiFX): for UK residents and others',
              '⏱️ Transfer 1-3 days, the rate may be better than Wise for large amounts (depends on the quote)',
              '🆔 KYC is mandatory — passport + proof of source of funds'
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
          { id: 'a1', title: 'Exchange bureaux (Casas de Câmbio)', content: [
            { kind: 'checklist', items: [
              '⚠️ LIS airport: 5-7% spread, terrible rate',
              '⚠️ Tourist areas (Baixa Lisboa, Centro Porto): 4-6% spread',
              '⚠️ In a hotel / at reception: 6-10% spread',
              '✅ Use ONLY for small cash amounts in an emergency',
              '🛑 Do NOT exchange > €100 in cash — you lose €5+'
            ]}
          ]},
          { id: 'a2', title: 'Portuguese banks (for currency exchange)', content: [
            { kind: 'checklist', items: [
              '⚠️ Conversion at Millennium / Santander / CGD: 1.5-3% spread',
              '⚠️ ATM with a non-resident card: uses the issuing bank’s rate (often poor)',
              '⚠️ International SWIFT transfer: €25-50 + 1% on the rate',
              '✅ There are better options for large amounts'
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
        { kind: 'paragraph', text: 'After the 2022 sanctions, Russian Federation—EU currency flows are heavily restricted. SWIFT is closed for most Russian Federation banks, and rouble operations in the EU go through complex routes.' },
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Via a third country', content: [
            { kind: 'checklist', items: [
              '🇹🇷 **Turkey**: open an account with Türkiye İş Bankası, transfer RUB → TRY → USD → EUR',
              '🇷🇸 **Serbia**: Banka Intesa, NBS regulation is more liberal',
              '🇬🇪 **Georgia**: TBC Bank — a workable option',
              '🇰🇿 **Kazakhstan**: Halyk Bank — transfers from the Russian Federation still work',
              '⏱️ 3-7 days + 0.5-2% losses on the exchange rate',
              '⚠️ Russian Federation rules on currency transfers and cash export change often; separately check the Central Bank of the Russian Federation/customs limits on the date of the operation. Do not confuse bank transfers, transfers to your own foreign accounts, and cash export'
            ]}
          ]},
          { id: 'r2', title: 'Via cryptocurrency', content: [
            { kind: 'checklist', items: [
              '💵 USDT (Tether) — the most liquid for conversion',
              '💱 P2P crypto for RUB is heavily restricted and depends on the exchange/jurisdiction; Binance has left the Russian Federation and is not a reliable RUB-P2P route. Any crypto-to-bank cash-out in the EU requires documented source of funds and must not be used to circumvent sanctions',
              '⚠️ In Portugal, crypto operations may fall under IRS: gains when held for <365 days are usually taxed at 28% (if not aggregated); ≥365 days — qualifying assets may be exempt. Mining/staking/profit from professional activity — separate rules. Declaration depends on the type of income, not on total turnover',
              '⚠️ AML checks can be strict at EU banks when funds come from cryptocurrency',
              '📋 Keep the full transaction history for AT'
            ]}
          ]},
          { id: 'r3', title: 'Direct transfer (few banks)', content: [
            { kind: 'checklist', items: [
              '🏦 The sanctions status of Russian Federation banks differs across the EU/US/UK and changes often. Gazprombank and Rosselkhozbank have restrictions in different jurisdictions; do not state that a bank is “not under sanctions” without checking current lists',
              '⚠️ Most major Russian Federation banks (Sber, VTB, Alfa) — blocked for SWIFT (Reg 833/2014 art. 5h)',
              '🌐 UniCredit / Raiffeisen Russia — formally operate for specific transactions, but the correspondent bank and receiving EU bank may refuse for compliance reasons',
              '⏱️ Timeframe 5-15 days (if it does not get stuck)'
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
          '💸 **Averaging**: split a large amount into 3-5 portions, exchange over 2-4 weeks',
          '🏦 **Keep exchange receipts** — for AT, if required',
          '🛡️ **Sanctions protection**: do not keep large amounts in one bank/one currency',
          '⚖️ **AT declaration**: foreign accounts >€50,000 — mandatory Modelo 38 declaration',
          '📊 **Portuguese IRS**: exchange-rate differences on currency transactions — taxed as “mais-valias” (28%)',
          '⚠️ **Tax resident**: if you became a resident of Portugal and sold assets abroad — IRS on the difference',
          '🌐 **CMVM regulator**: the broker must be licensed in the EU; check cmvm.pt',
          '💰 **Cash flow**: keep a EUR reserve for 3-6 months of living costs, do not depend on currency movements'
        ]}
      ]
    },
    {
      id: 'compare',
      title: '📊 Fee comparison for 1000 USD → EUR',
      content: [
        { kind: 'paragraph', text: 'Approximate savings calculation on 1000 USD → EUR (mid-market rate ≈ 0.93):' },
        { kind: 'checklist', items: [
          '🟢 **Wise**: receive ≈ €925, loss ≈ €5 (0.5%)',
          '🟢 **Revolut Premium**: ≈ €928, loss ≈ €2',
          '🟡 **N26**: ≈ €925, loss ≈ €5',
          '🟠 **Portuguese bank**: ≈ €905, loss ≈ €25 (2.7%)',
          '🔴 **Airport exchange bureau**: ≈ €880, loss ≈ €50 (5.4%)',
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
    { label: 'Airport exchange bureau €1000', amountEURMin: 50, amountEURMax: 70 },
    { label: 'CurrencyFair for a large amount (>10k)', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'Banco de Portugal — Fee comparison tool', url: 'https://comparador.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CMVM — regulated brokers', url: 'https://www.cmvm.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Modelo 38 (accounts abroad)', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
