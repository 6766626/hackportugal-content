export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-taxes',
  categoryId: 'taxes',
  title: 'Cryptocurrency in Portugal — taxes 2026',
  tldr: 'Until 2022, cryptocurrency was not taxed for individuals — a “tax haven”. From 2023 (OE 2023), the following was introduced: **28% tax on gains when selling after <1 year**; **0% after ≥365 days of holding** (long-term capital gains); **staking, mining, professional trading** — taxed as operating income. IVA 0% on exchange. Declaration in IRS via Anexo G and category E for staking. IFICI does not cover cryptocurrency. Exchanges and P2P are available; major banks accept transfers from Bitstamp, Kraken, Bitfinex with AML checks.',
  tags: ['cryptocurrency', 'crypto', 'taxes', 'bitcoin'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'regime',
      title: 'Current tax regime (OE 2023+)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '📅 Short-term sale (<1 year)', content: [
            { kind: 'checklist', items: [
              '**28% tax** on profit (capital gain)',
              'Declared in IRS **Anexo G** (Mais-Valias)',
              'Profit = sale price − purchase price − fees',
              'Losses can be offset against gains for the same year; carry-forward for 5 years',
              'Applies to: BTC, ETH, all altcoins, NFT, derivatives'
            ]}
          ]},
          { id: 'r2', title: '📅 Long-term sale (≥365 days)', content: [
            { kind: 'checklist', items: [
              '**0% tax** when selling after ≥365 days of holding (long-term capital gain exempt)',
              'Condition: the token was held for ≥ 365 consecutive days by the same taxpayer',
              '⚠️ **Crypto-to-crypto exchange**: formally considered alienação onerosa, BUT the Portuguese regime usually defers taxation until a subsequent exchange of cryptocurrency into fiat / goods / services (that is, until the “exit” from cryptoassets). Acquisition cost and dates are tracked for each position; the exact mechanism is disputed, and consultation with an accountant is recommended',
              'Transfer between your own wallets is NOT alienação; the counter is not interrupted',
              'FIFO: you sell first what was bought first (for tax accounting)'
            ]}
          ]},
          { id: 'r3', title: '💼 Professional trading', content: [
            { kind: 'checklist', items: [
              'If AT considers your activity professional (regularity, significant volume) — it is taxed as **Categoria B** (business income)',
              'Progressive scale 11.97-48% + social contributions 21.4%',
              'Professional criteria: regularity, volume, infrastructure (API, automation), main activity',
              'Registration of atividade in Finanças with CAE for financial services'
            ]}
          ]},
          { id: 'r4', title: '💰 Staking / lending / mining', content: [
            { kind: 'checklist', items: [
              'Taxed as **Categoria E** (investment income) — 28% flat rate',
              'Mining: if significant — as Categoria B (business income)',
              'Airdrops: not taxed upon receipt; tax on sale',
              'DeFi yield farming: 28% upon receipt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'declaration',
      title: 'How to declare in IRS',
      content: [
        { kind: 'paragraph', text: 'Cryptocurrency is declared annually (April-June for the previous tax year). This is done in the standard IRS return via Portal das Finanças.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Calculating gains and losses', content: [
            { kind: 'checklist', items: [
              'Export the transaction history from each exchange for the year (CSV / Excel)',
              'Gains and losses for each closed position: sale − purchase − fees',
              'Holding ≥ 365 days — separately, taxed at 0%',
              'Conversion of USDT/USDC into € at the exchange rate on the transaction date',
              'Tools: **Koinly**, **CoinTracking**, **Accointing** — €50-200/year, automatic import from all exchanges, generate a report for IRS in PT'
            ]}
          ]},
          { id: 'd2', title: 'Completing Anexo G', content: [
            { kind: 'checklist', items: [
              'Quadro 18: Mais-valias com criptoativos',
              'Code “R01” — short-term sale',
              'Code “R02” — long-term sale (0%, but declare for record-keeping)',
              'State: amount of valor de realização, valor de aquisição, dates',
              'Losses: separately in Quadro 20 for carry-forward'
            ]}
          ]},
          { id: 'd3', title: 'Staking in Anexo E', content: [
            { kind: 'paragraph', text: 'Separate from Anexo G. Code “E21” — rendimentos de criptoativos. The amount received in € is stated as at the date of receipt.' }
          ]}
        ]}
      ]
    },
    {
      id: 'bank',
      title: 'Banks and fiat deposits/withdrawals',
      content: [
        { kind: 'checklist', items: [
          '✅ **ActivoBank, Millennium BCP, Novobanco** — accept transfers from Bitstamp, Kraken, Bitfinex, Coinbase with the correct description “sale of cryptocurrency” + AML documents',
          '⚠️ **Caixa Geral, Santander, BPI** — often block / require an explanation of the source of funds',
          '❌ **Revolut**, **Wise** — restrictions on large cryptocurrency-related transfers',
          '📋 When transferring €5000+: the bank will request a **Declaração de Origem dos Fundos** (declaration of source of funds), wallet screenshots, transaction hash, exchange statements',
          '💳 Prepaid cards from exchanges (Wirex, Crypto.com): work with Apple Pay in PT',
          '🏦 **Banco Invest** and digital banks — more open to cryptocurrency clients',
          '⚖️ Suspicious patterns (P2P without documents, mixer services) → the bank will close the account under AML'
        ]}
      ]
    },
    {
      id: 'exchanges',
      title: 'Using exchanges from PT',
      content: [
        { kind: 'checklist', items: [
          '**Binance**: registered with BaFin (Germany) — available in PT. Complete KYC with a PT residence permit',
          '**Kraken**: licensed in the EU, convenient for PT, fast SEPA withdrawals',
          '**Bitstamp**: registered in Luxembourg, fast SEPA',
          '**Coinbase**: works, but fees are higher',
          '**Bitpanda**: Austrian, suitable for users from PT',
          '**Mercado Bitcoin**: Brazilian exchange, not always convenient for PT residents',
          '🛑 **For citizens of the Russian Federation**: sanctions — Binance closed accounts with Russian KYC in 2024. Use with a PT residence permit / non-Russian Federation passport, check regulatory status'
        ]}
      ]
    },
    {
      id: 'ifici',
      title: 'IFICI and cryptocurrency',
      content: [
        { kind: 'warning', text: 'IFICI (former NHR) **does NOT cover** cryptocurrency income. If you are under IFICI — cryptocurrency is taxed under the general rules (28% for short-term sale). This distinguishes PT from other jurisdictions (for example, Switzerland is fully crypto-friendly), but the regime with 365+ days of holding = 0% is still one of the best in the EU.' }
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 For the 0% long-term regime: use **loss harvesting for tax optimisation** only while taking the 365-day rule into account. Do not exchange unless necessary',
          '📊 Keep a **chronological register** of purchases/sales — IRS may request evidence during an audit',
          '🧾 Keep: CSV from exchanges, screenshots of wallet addresses, transaction hashes — minimum 4 years (AT audit period)',
          '💼 **An accountant is recommended** if the portfolio is >€50,000 or there are many active trades — €300-800/year',
          '📱 Tax software **Koinly** — €49/year for <100 transactions',
          '🚫 **Do not withdraw** large amounts without documents — risk of the bank account being blocked permanently',
          '🌍 **Double taxation**: if you are resident in PT but hold cryptocurrency on a US exchange — declaration in PT (country of residence). Complete US W-8BEN for non-resident status in the US'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Short-term tax (<1 year)', amountEUR: 0, note: '28% of profit' },
    { label: 'Long-term (≥1 year)', amountEUR: 0, note: '0%' },
    { label: 'Staking / lending', amountEUR: 0, note: '28% of income' },
    { label: 'Koinly subscription', amountEURMin: 49, amountEURMax: 199, note: '€/year' },
    { label: 'Accountant specialising in cryptocurrency', amountEURMin: 300, amountEURMax: 800, note: '€/year' }
  ],
  sources: [
    { title: 'Portal das Finanças — Cryptoassets', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — Mais-valias (art. 10)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'OE 2023 — introduction of the regime', url: 'https://diariodarepublica.pt/dr/detalhe/lei/24-d-2022-203934281', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Koinly — tax reports for PT', url: 'https://koinly.io/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
