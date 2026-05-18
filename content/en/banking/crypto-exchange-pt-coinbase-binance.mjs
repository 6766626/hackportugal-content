export default {
  editorialVoice: 'hackportugal',
  id: 'crypto-exchange-pt-coinbase-binance',
  categoryId: 'banking',
  title: 'Crypto exchanges in Portugal: Coinbase, Binance, Kraken under a NIF',
  tldr: 'In 2026, a crypto exchange in Portugal is not an “anonymous wallet”, but KYC under a NIF: passport/residence permit or Cartão de Cidadão, selfie, address, sometimes comprovativo de morada. Check Coinbase in the CMVM/CASP lists; Binance and Kraken operate through international/EU structures, while Criptoloja is PT-native. Card top-ups are usually 1–4%; SEPA is cheaper.\n\nTaxes: selling crypto held for <365 days is usually taxed under IRS at 28% via Anexo G/J; ≥365 days is often exempt, but you must keep your transaction history.',
  tags: ['crypto', 'nif', 'irs', 'exchanges'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-exchange',
      title: '1. Choose an exchange for your purpose',
      content: [
        { kind: 'paragraph', text: 'For a resident of Portugal, what matters is not only fees, but also which legal entity services the account, where reporting records are kept, and which documents can later be exported for IRS. In 2026, after MiCA, crypto services in the EU must operate through an authorised CASP or under a transitional regime; check the status on the CMVM and on the exchange’s own legal/terms page.' },
        { kind: 'checklist', items: [
          'Coinbase — convenient for beginners, good KYC, reports; check the current status in the CMVM/CASP lists and which entity is stated in the Terms.',
          'Binance — many pairs, P2P and cards; for Portugal, it is important to check which EU/EEA entity services the account and whether SEPA is available.',
          'Kraken — strong reputation and reports, but historically a US group; check the European entity, SEPA details and tax export.',
          'Criptoloja — a Portuguese crypto platform, easier to explain the origin of funds to a bank, but usually with less liquidity and a smaller range.',
          'For Brazilians: do not mix BRL accounts, CPF history and PT residency; after moving, tax reporting in Portugal is built around the NIF and tax residence.',
          'If the goal is only to buy BTC/ETH for the long term, choose an exchange with clear SEPA, 2FA and CSV export, not the one with the maximum number of tokens.'
        ] },
        { kind: 'warning', text: 'Do not rely on Telegram advice that “the exchange works in Portugal”. For the bank and Finanças, what matters is whether you can show KYC, source of funds, transaction history and an official exchange report.' }
      ]
    },
    {
      id: 'kyc-nif',
      title: '2. Complete KYC: NIF, document, address, selfie',
      content: [
        { kind: 'paragraph', text: 'Almost all major exchanges in 2026 require full identification. A NIF is not always needed on the first screen, but it is worth adding it straight away: this reduces the risk of manual review when withdrawing to a Portuguese bank and helps with your tax history.' },
        { kind: 'checklist', items: [
          'NIF — Portuguese tax number; use the same one as at your bank and on Portal das Finanças.',
          'Document: Cartão de Cidadão for PT citizens; for an expat — passport + título de residência / autorização de residência, sometimes EU ID.',
          'Address in Portugal: contrato de arrendamento, water/electricity/internet bill, declaration from the Junta de Freguesia or bank statement.',
          'Selfie / liveness check — phone camera, without glasses or filters; the name in the document must match the account.',
          'Phone: a Portuguese number is more convenient for SMS/banks, but it is better to enable app-based 2FA rather than rely on SMS.',
          'Bank account: the name of the IBAN holder must match the name on the exchange.',
          'If you are a US tax resident or have US indicia, expect additional FATCA/W forms.'
        ] },
        { kind: 'warning', text: 'Do not use a relative’s account, a “friend’s corporate card” or someone else’s IBAN. When withdrawing €, a Portuguese bank may freeze the incoming transfer until the origem dos fundos is explained.' }
      ]
    },
    {
      id: 'funding',
      title: '3. Deposits and withdrawals: card, SEPA, Portuguese bank',
      content: [
        { kind: 'paragraph', text: 'The cheapest and cleanest route is a SEPA transfer from your Portuguese IBAN to the exchange and back. A card is convenient for a first purchase, but it is more expensive and more often triggers limits. MB WAY is rarely supported directly; it usually works only as a way to top up a card/account at the bank, not the exchange.' },
        { kind: 'checklist', items: [
          'SEPA transfer: usually €0–1 on the bank side, crediting from a few minutes to 1 working day, but it depends on the exchange and instant SEPA.',
          'Debit card: convenient, but the fee is often 1–4% plus spread; the bank may decline a crypto merchant.',
          'Credit card: not recommended — higher risk of blocking, cash-advance fee and bank questions.',
          'Withdrawal to PT IBAN: withdraw only to an account in your own name; keep the PDF/CSV confirmation of the operation.',
          'Large amounts: prepare in advance comprovativo de rendimentos, payslips, IRS declarations, asset sale agreement or crypto purchase history.',
          'Do not split €20,000 into 20 transfers of €1,000 “so the bank does not notice”: that looks worse than one explainable transfer.',
          'When buying USDT/USDC, take into account issuer risk and the fact that a “stablecoin” is not the same as a bank deposit.'
        ] },
        { kind: 'warning', text: 'Portuguese banks are not obliged to accept crypto-origin funds automatically. Revolut/ActivoBank/Millennium/Novobanco may request documents or restrict operations; policy changes faster than tax law.' }
      ]
    },
    {
      id: 'tax-irs',
      title: '4. IRS taxes: Anexo G/J and the 365-day rule',
      content: [
        { kind: 'paragraph', text: 'Since 2023, Portugal has introduced special rules for criptoativos in IRS. For a private investor, the key point is this: gains from selling crypto held for less than 365 days are usually taxed as mais-valias at a rate of 28% or may be included in englobamento. If the asset was held for 365 days or more, gains on ordinary crypto assets are often exempt, but exceptions are possible for tokens qualifying as securities and for operations carried out on a professional basis.' },
        { kind: 'checklist', items: [
          'Selling crypto for EUR/USD/fiat is a taxable event.',
          'A crypto-to-crypto exchange is usually not taxed immediately; the cost basis is carried forward until exit into fiat/another taxable operation.',
          'Income from mining, staking, liquidity provision, airdrops and referrals may fall outside the same regime as a simple BTC sale.',
          'If the exchange or wallet is outside Portugal, reporting often goes through Anexo J; for a PT intermediary, Anexo G may be used.',
          'Keep the purchase date and price, sale date and price, fees, txid, exchange CSV and bank statements.',
          'IRS for 2025 income is filed in 2026 via Portal das Finanças, usually from 1 April to 30 June.',
          'The NIF on the exchange must match the NIF in the declaração de IRS.',
          'If you became a resident of Portugal in the middle of the year, split operations before and after the tax residence date.'
        ] },
        { kind: 'warning', text: 'The rule “held for more than a year — 0% tax” is not a universal indulgence. It does not replace proof of source of funds and does not always apply to professional activity, tokenised securities, derivatives or staking income.' }
      ]
    },
    {
      id: 'records-security',
      title: '5. What to keep and how not to lose access 🔐',
      content: [
        { kind: 'paragraph', text: 'The main expat mistake is to buy crypto, change country, phone and bank, and after 2 years have neither CSV, nor access to 2FA, nor proof of purchase. For Portugal, this is not only a security problem, but also a tax/banking one.' },
        { kind: 'checklist', items: [
          'Download CSV/PDF history at least once a quarter and before closing the account.',
          'Keep bank statements with transfers to and from the exchange.',
          'Keep KYC confirmations: not a screenshot of the document, but the verification date, exchange entity and email notifications.',
          'Enable 2FA via Authenticator/YubiKey; print backup codes and store them separately.',
          'Do not keep the entire portfolio on an exchange; for long-term storage use a hardware wallet, but record withdrawal addresses.',
          'For self-custody, write down the seed phrase offline; do not store it in iCloud/Google Drive/WhatsApp.',
          'If you use DeFi, keep a separate transaction log: bridge, swap, LP, staking, gas fees.',
          'Before a large cash-out, speak to a contabilista who has actually seen Anexo G/J for crypto, not someone who “does IRS in general”.'
        ] },
        { kind: 'warning', text: 'Finanças may request explanations later than the exchange keeps convenient reports. Do not rely on “Coinbase/Binance/Kraken will always show everything”. Export it yourself.' }
      ]
    }
  ],
  costs: [
    { label: 'SEPA deposit', amountEURMin: 0, amountEURMax: 1, note: 'Typical on the bank side; the exchange may charge a separate fee or spread.' },
    { label: 'Debit card purchase', amountEURMin: 1, amountEURMax: 4, note: 'Usually 1–4% of the amount plus spread; the exact fee is visible before confirmation.' },
    { label: 'IRS tax on gain <365 days', amountEURMin: 0, amountEURMax: 28, note: 'Usually 28% of the gain, not of the whole sale amount; englobamento under the progressive IRS scale is possible.' },
    { label: 'Contabilista for a declaration with crypto', amountEURMin: 80, amountEURMax: 250, note: 'Indicative price for IRS with Anexo G/J and exchange exports; complex DeFi may cost more.' }
  ],
  sources: [
    { title: 'CMVM — checking authorised entidades and information on criptoativos', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS, Modelo 3 declaration and Anexos G/J', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei n.º 24-D/2022 — State Budget 2023, tax regime for criptoativos', url: 'https://dre.pt/dre/detalhe/lei/24-d-2022-205557192', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulamento (UE) 2023/1114 — MiCA, regime for crypto-asset service providers in the EU', url: 'https://eur-lex.europa.eu/eli/reg/2023/1114/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
