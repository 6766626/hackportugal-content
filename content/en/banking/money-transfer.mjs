export default {
  editorialVoice: 'hackportugal',
  id: 'money-transfer',
  categoryId: 'banking',
  title: 'Transferring money from the CIS to Portugal — legal channels 2026',
  tldr: 'EU sanctions (2022+) have blocked SWIFT for major Russian banks and restricted transfers. Legal channels remain: smaller Russian banks not under sanctions, non-sanctioned CIS banks (Kazakhstan, Armenia, Georgia), EU neobanks (via an intermediary), cryptocurrency through regulated exchanges. The key point is documenting the source of funds (AML/KYC). Anonymous transfers are not possible.',
  audience: { countryCodes: ['RU', 'BY', 'KZ', 'KG', 'UZ'] },
  tags: ['transfers', 'sanctions', 'bank', 'aml'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'sanctions-context',
      title: 'Regulatory context',
      content: [
        { kind: 'paragraph', text: 'Since February 2022, the EU has introduced a series of sanctions packages against the banking sector of the Russian Federation. The main restrictions are:' },
        { kind: 'checklist', items: [
          'Disconnection from SWIFT — Sberbank, VTB, Otkritie, Rossiya, Promsvyazbank, Novikombank, Sovcombank, VEB and several others (list in Regulation (EU) 2022/328 and subsequent regulations)',
          '€100,000 limit on deposits by citizens of the Russian Federation in EU banks (Regulation 833/2014, Art. 5b)',
          'Ban on accepting deposits > €100,000 from citizens of the Russian Federation in EU banks (applies from 2022)',
          'Mandatory documentation of the source of funds (AML 6th Directive, EU 2018/1673)',
          'Regulation 269/2014 — personal sanctions against listed individuals (check via EU Sanctions Map)',
          'For citizens of Belarus — a similar regime since 2022'
        ]},
        { kind: 'warning', text: 'Circumventing sanctions (through nominees, bypassing limits, using forged documents) is a criminal offence in the EU. Penalties may include up to 5 years in prison + confiscation.' }
      ]
    },
    {
      id: 'options',
      title: 'Legal transfer channels',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Non-sanctioned Russian Federation banks (available)', content: [
            { kind: 'paragraph', text: 'Several banks are NOT on the SWIFT sanctions list and allow EUR/USD transfers to the EU:' },
            { kind: 'checklist', items: [
              'Raiffeisenbank (RU) — available, but fees have increased',
              'OTP Bank RU — available, limits apply',
              'UniCredit RU — available, restrictions apply',
              'Monthly withdrawal limit from the Russian Federation — USD 1 million for individuals (for residents of Portugal)'
            ]},
            { kind: 'warning', text: 'Check the bank’s current status in EU Sanctions Map (sanctionsmap.eu). The list changes.' }
          ]},
          { id: 'o2', title: 'B. Via a third country (KZ, AM, GE, AE)', content: [
            { kind: 'paragraph', text: 'A common legal arrangement: open an account in Kazakhstan / Armenia / Georgia / UAE → transfer there from the Russian Federation → then from there to the EU. Requires travel to open the account.' },
            { kind: 'checklist', items: [
              'Kazakhstan: Kaspi, Halyk, Jusan — popular. A trip to KZ is needed.',
              'Armenia: ACBA, Ameriabank — open accounts for non-residents of the Russian Federation',
              'Georgia: TBC, BoG — have tightened conditions, but work with documents',
              'UAE: Emirates NBD, ADCB — require a residence visa or a large deposit'
            ]},
            { kind: 'paragraph', text: 'Then from these banks — SWIFT to your Portuguese bank. When receiving amounts from €10,000, prepare documents proving the source of funds.' }
          ]},
          { id: 'o3', title: 'C. Wise / Revolut (via EU residence)', content: [
            { kind: 'paragraph', text: 'Wise and Revolut operate as EU neobanks. For citizens of the Russian Federation/Belarus at present:' },
            { kind: 'checklist', items: [
              'Revolut with an address in the Russian Federation — accounts are closed / frozen',
              'Revolut with an address in Portugal (after obtaining a residence permit) — works. But top-ups from a Russian bank may be blocked',
              'Wise — similar policy',
              'Tactic: open the account only after moving to Portugal (with a Portuguese address and residence permit), top up via a Portuguese bank or SEPA'
            ]}
          ]},
          { id: 'o4', title: 'D. Cryptocurrency (through regulated exchanges)', content: [
            { kind: 'paragraph', text: 'Legal arrangement: buy USDT/USDC/BTC on a Russian exchange → transfer to Kraken/Bitstamp/Binance → sell for EUR → withdraw to a Portuguese IBAN.' },
            { kind: 'checklist', items: [
              'Full KYC is required on both sides',
              'Taxes: in Portugal, capital gains from cryptocurrency have been taxable since 2023 (28% if held for < 1 year, 0% if > 1 year)',
              'Banco de Portugal monitors cryptocurrency transfers',
              'When a large sum arrives, the bank may request documents proving the source of funds',
              'Do NOT use P2P/OTC exchangers without KYC — risk of funds being frozen'
            ]}
          ]},
          { id: 'o5', title: 'E. Cash across the border', content: [
            { kind: 'paragraph', text: 'EU declaration threshold: €10,000 or equivalent. Above this — a customs declaration is mandatory. Without a declaration — fine and confiscation.' },
            { kind: 'warning', text: 'This route is impractical for large sums — risks of loss, theft, and customs problems.' }
          ]}
        ]}
      ]
    },
    {
      id: 'source-of-funds',
      title: 'Documenting the source of funds',
      content: [
        { kind: 'paragraph', text: 'For amounts from €10,000-15,000, a Portuguese bank is required to request documents proving the source of funds. Prepare in advance:' },
        { kind: 'checklist', items: [
          'IRS declaration / tax return for the last 3 years',
          'Statement from the sending bank for the accumulation period',
          'Property sale agreement in the country of origin (if relevant)',
          'Employment contract and salary certificate',
          'Inheritance — inheritance documents, apostille',
          'Investments — brokerage reports',
          'Sale of a business — sale and purchase agreement, taxes',
          'Gift — gift agreement with apostille',
          'Transfer of your own funds — not considered a “gift”, substantiated by the full chain'
        ]},
        { kind: 'warning', text: 'All documents — apostilled + sworn translation into Portuguese. Documents older than 6 months are often not accepted.' }
      ]
    },
    {
      id: 'taxes-pt',
      title: 'Taxes in Portugal on funds received',
      content: [
        { kind: 'checklist', items: [
          '💰 Transfer of YOUR OWN funds (savings) — NOT taxable in Portugal',
          '🎁 Gift from a first-degree relative (parents/children/spouse) — NOT taxable (exemption from 10% stamp duty)',
          '🎁 Gift from other persons — 10% stamp duty if >€500',
          '💼 Income (dividends, interest) — taxed under Anexo E in IRS',
          '🏠 Sale of property in the country of origin — tax may be due in Portugal (net of tax paid there)',
          '💎 Inheritance — 10% stamp duty if not first-degree',
          '🔖 NHR/IFICI if you have the status — may reduce tax'
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📋 Plan transfers 3-6 months BEFORE moving. After obtaining a residence permit — easier',
          '🏦 Do not keep everything in one bank. Distribute across 2-3 banks for liquidity',
          '💶 The first large transaction into a Portuguese bank usually gets held for a compliance check for 3-14 days. This is normal',
          '📞 Notify the bank IN ADVANCE about the upcoming large incoming transfer and provide documents proving the source of funds',
          '⚖️ For large sums (>€100,000), consult a specialised compliance lawyer',
          '🚫 Do NOT use “intermediaries” on Telegram/WhatsApp for transfers — high risk of losses',
          '📊 Keep ALL transfer receipts for future tax returns'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — AML and international transfers', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Sanctions Map — checking sanctions status', url: 'https://www.sanctionsmap.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 833/2014 (sanctions)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0833', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2018/1673 — AML 6', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32018L1673', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — declaration of foreign income', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 90
}
