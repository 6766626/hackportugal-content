export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-taxes',
  categoryId: 'taxes',
  title: 'Cryptocurrency in Portugal — taxes 2026',
  tldr: 'Until 2022, cryptocurrency was not taxed for individuals — a “tax haven”. Since 2023 (OE 2023): 28% on sale for fiat/goods/services when held for <365 days; 0% when held for ≥365 days (caveat: transactions with counterparties/exchanges from blacklisted/non-cooperative jurisdictions may not qualify for the exemption); staking/lending — usually Categoria E, mining/professional trading — Categoria B. Fiat↔crypto exchange is usually exempt from IVA (not a “0% rate”). NFTs, security tokens, derivatives — separate classification, may not fall under the 365-day exemption. IFICI does not cover cryptocurrency.',
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
              '28% tax on taxable disposals: sale for fiat, payment for goods/services, exchange for non-crypto assets',
              'Declared in IRS Anexo G (Mais-Valias) using the current códigos/instruções for the relevant year',
              'Gain = disposal price − acquisition price − fees',
              'Losses are taken into account only under Categoria G rules; carry-forward usually requires choosing englobamento and meeting CIRS conditions — check when completing Modelo 3',
              'Applies to ordinary fungible cryptoassets. NFTs, security tokens, derivatives, CFDs, futures/options — separate classification, may not fall under the 365-day exemption'
            ]}
          ]},
          { id: 'r2', title: '📅 Long-term sale (≥365 days)', content: [
            { kind: 'checklist', items: [
              '0% tax on sale after ≥365 days of holding (long-term capital gain is exempt)',
              '⚠️ Caveat: do NOT apply the exemption mechanically — transactions with a counterparty/exchange in a blacklisted/non-cooperative jurisdiction (Portaria 150/2004) may not qualify for exemption',
              'Condition: the token was held for ≥ 365 consecutive days by the same taxpayer',
              '⚠️ Cryptocurrency-to-cryptocurrency exchange: formally considered alienação onerosa, BUT the Portuguese regime usually defers taxation until the subsequent exchange of cryptocurrency into fiat / goods / services (i.e. until the “exit” from cryptoassets). Acquisition cost and dates are tracked for each position; the exact mechanism is disputed, so consultation with an accountant is recommended',
              'Transfer between your own wallets — NOT alienação, the counter is not interrupted',
              'FIFO: you sell first what was bought first (for tax accounting)'
            ]}
          ]},
          { id: 'r3', title: '💼 Professional trading', content: [
            { kind: 'checklist', items: [
              'If AT considers your activity professional (regularity, significant volume) — it is taxed as Categoria B (business income)',
              'Progressive scale 11.97–48% + social security contributions 21.4%',
              'Professional criteria: regularity, volume, infrastructure (API, automation), main activity',
              'If this is proprietary trading — discuss the correct Categoria B/CAE enquadramento with a contabilista. If you provide services to third parties (custody, exchange, brokerage, asset management) — check Banco de Portugal/CMVM/MiCA/CASP and AML requirements; simple abertura de atividade is not sufficient'
            ]}
          ]},
          { id: 'r4', title: '💰 Staking / lending / mining', content: [
            { kind: 'checklist', items: [
              'Staking/lending rewards: usually Categoria E, 28% rate as autonomous taxation, with the option of englobamento. If the reward is paid in crypto — the taxable event may be deferred until disposal (check the special rules)',
              'Mining/validation: with organised/professional activity — usually Categoria B, not Categoria E',
              'Airdrops: not taxed on receipt; tax on sale',
              'DeFi yield farming: classify according to the mechanics (lending interest / liquidity mining / governance rewards). For passive income — may be Categoria E; for payments in crypto, check the taxation and valuation point. For complex DeFi protocols — obtain an opinion from a contabilista/AT'
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
              'Export transaction history from each exchange for the year (CSV / Excel)',
              'Gains and losses for each closed position: sale − purchase − fees',
              'Holding ≥ 365 days — separately, taxed at 0%',
              'Convert USDT/USDC into € at the exchange rate on the transaction date',
              'Tools: Koinly, CoinTracking, Accointing — €50-200/year, automatic import from all exchanges, generate a report for IRS in PT'
            ]}
          ]},
          { id: 'd2', title: 'Completing Anexo G', content: [
            { kind: 'checklist', items: [
              'Quadro 18: Mais-valias com criptoativos — use the current códigos from the official tabela on Portal das Finanças for the relevant tax return year',
              'Long-term ≥365 disposals may also require reporting; the place/quadro/code depends on the current Modelo 3',
              'State: the amount of valor de realização, valor de aquisição, dates',
              'Losses: check the current instruction for Categoria G and carry-forward conditions'
            ]}
          ]},
          { id: 'd3', title: 'Staking in Anexo E', content: [
            { kind: 'paragraph', text: 'Separate from Anexo G. Use the current Anexo E/Modelo 3 instructions. If the reward is received in fiat — the amount in EUR on the receipt date is declared; if the reward is received in crypto — special valuation/taxation rules apply, with possible deferral until disposal.' }
          ]}
        ]}
      ]
    },
    {
      id: 'bank',
      title: 'Banks and fiat deposits/withdrawals',
      content: [
        { kind: 'checklist', items: [
          '✅ ActivoBank, Millennium BCP, Novobanco — accept transfers from Bitstamp, Kraken, Bitfinex, Coinbase with a correct description “cryptocurrency sale” + AML documents',
          '⚠️ Caixa Geral, Santander, BPI — often block / require an explanation of source of funds',
          '❌ Revolut, Wise — restrictions on large transfers related to cryptocurrency',
          '📋 For transfers of €5,000+: the bank will request a Declaração de Origem dos Fundos (declaration of source of funds), wallet screenshots, transaction hash, exchange statements',
          '💳 Prepaid cards from exchanges (Wirex, Crypto.com): work with Apple Pay in PT',
          '🏦 Banco Invest and digital banks — more open to cryptocurrency clients',
          '⚖️ Suspicious patterns (P2P without documents, mixer services) → the bank will close the account under AML'
        ]}
      ]
    },
    {
      id: 'exchanges',
      title: 'Using exchanges from PT',
      content: [
        { kind: 'checklist', items: [
          'Binance: availability and onboarding for PT residents depend on the current EU/MiCA setup and the sanctions/KYC policy of the specific legal entity (Binance withdrew its BaFin licence application in Germany in 2023). Before use, check the current terms for Portugal',
          'Kraken: licensed in the EU, convenient for PT, fast SEPA withdrawals',
          'Bitstamp: registered in Luxembourg, fast SEPA',
          'Coinbase: works, but fees are higher',
          'Bitpanda: Austrian, suitable for users from PT',
          'Mercado Bitcoin: Brazilian exchange, not always convenient for PT residents',
          '🛑 For citizens of the Russian Federation: sanctions — Binance closed accounts with Russian KYC in 2024. Use with a PT residence permit / non-Russian Federation passport, check regulatory status'
        ]}
      ]
    },
    {
      id: 'ifici',
      title: 'IFICI and cryptocurrency',
      content: [
        { kind: 'warning', text: 'IFICI (formerly NHR) does NOT cover cryptocurrency income. If you are under IFICI — cryptocurrency is taxed under the general rules (28% for short-term sale). This distinguishes PT from other jurisdictions (for example, Switzerland is fully cryptocurrency-friendly), but the regime with 365+ days of holding = 0% is still one of the best in the EU.' }
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '📅 For the long-term 0% regime: use loss harvesting for tax optimisation only taking the 365-day rule into account. Do not exchange unnecessarily',
          '📊 Keep a chronological register of purchases/sales — IRS may request evidence during an audit',
          '🧾 Keep: CSVs from exchanges, screenshots of wallet addresses, transaction hashes — minimum 4 years (AT audit period)',
          '💼 An accountant is recommended if the portfolio is >€50,000 or there are many active trades — €300-800/year',
          '📱 Tax software Koinly — €49/year for <100 transactions',
          '🚫 Do not withdraw large sums without documents — risk of the bank account being blocked permanently',
          '🌍 Double taxation: if you are a PT resident but hold cryptocurrency on a US exchange — declaration in PT (country of residence). W-8BEN may be needed by a US platform to confirm non-US tax status for US-source income/withholding, but crypto gains as a PT tax resident are still declared in Portugal; US tax exposure depends on citizenship/green card/substantial presence and type of income'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Short-term tax (<1 year)', amountEUR: 0, note: '28% of gain' },
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
