export default {
  editorialVoice: 'hackportugal',
  id: 'money-transfer',
  categoryId: 'banking',
  title: 'Transferring money from the CIS to Portugal — legal channels 2026',
  tldr: 'EU sanctions (2022+) blocked SWIFT for major Russian banks and restricted transfers. Legal channels remain: small Russian banks not under sanctions, non-sanctioned CIS banks (Kazakhstan, Armenia, Georgia), EU neobanks (via an intermediary), cryptocurrency through regulated exchanges. The key point is documenting the source of funds (AML/KYC).\n\nAnonymous transfers are impossible.',
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
          'Disconnection from SWIFT (see Article 5h and Annex XIV to Regulation 833/2014 in the current consolidated version; the list has changed through subsequent regulations, including the later addition of Sberbank)',
          'Ban on accepting deposits above €100,000 from citizens of the Russian Federation and persons residing in the Russian Federation (Regulation 833/2014 art. 5b). An exception applies to citizens/residents of the EU, EEA or Switzerland, including holders of a residence permit in Portugal. Bank AML/KYC still applies',
          'Mandatory documentation of the source of funds (AML 6th Directive, EU 2018/1673)',
          'Regulation 269/2014 — personal sanctions against listed persons (check via the EU Sanctions Map)',
          'For citizens of Belarus — a similar regime since 2022 (Reg (EC) 765/2006 art. 1u), with similar exceptions for a residence permit in the EU/EEA/Switzerland'
        ]},
        { kind: 'warning', text: 'Circumventing sanctions (through nominees, bypassing limits, using forged documents) is a criminal offence in the EU. Penalties may include up to 5 years in prison + confiscation.' }
      ]
    },
    {
      id: 'options',
      title: 'Legal transfer channels',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Non-sanctioned banks in the Russian Federation (available)', content: [
            { kind: 'paragraph', text: 'Some banks in the Russian Federation are not subject to EU blocking sanctions/the SWIFT ban, but the actual possibility of an EUR/USD transfer depends on correspondent banks and the receiving bank’s compliance; a transfer may be rejected without explanation. USD wires are especially difficult because of US correspondent-bank compliance:' },
            { kind: 'checklist', items: [
              'Raiffeisenbank (RU) — available, but fees have increased',
              'OTP Bank RU — available, limits apply',
              'UniCredit RU — available, restrictions apply',
              'Under Bank of Russia rules, temporary limits apply to transfers abroad; the limit and the right to transfer depend on the currency status of the sender/recipient and change regularly. Check the current message from the Central Bank of the Russian Federation before making a transfer'
            ]},
            { kind: 'warning', text: 'Check the bank’s current status on the EU Sanctions Map (sanctionsmap.eu). The list changes.' }
          ]},
          { id: 'o2', title: 'B. Via a third country (KZ, AM, GE, AE)', content: [
            { kind: 'paragraph', text: 'A common legal scheme: open an account in Kazakhstan / Armenia / Georgia / the UAE → transfer there from the Russian Federation → then from there to the EU. A trip is required to open the account.' },
            { kind: 'checklist', items: [
              'Kazakhstan: Kaspi, Halyk, Jusan — popular. A trip to KZ is required.',
              'Armenia: ACBA, Ameriabank — open accounts for non-residents from the Russian Federation',
              'Georgia: TBC, BoG — have tightened conditions, but work with documentation',
              'UAE: Emirates NBD, ADCB — require a residence visa or a large deposit'
            ]},
            { kind: 'paragraph', text: 'Then from these banks — SWIFT to your Portuguese bank. Prepare source-of-funds/source-of-wealth documents for any atypical or large receipts; the bank may request them even below €10,000, especially for transfers from/through high-risk jurisdictions.' }
          ]},
          { id: 'o3', title: 'C. Wise / Revolut (via EU residence)', content: [
            { kind: 'paragraph', text: 'Wise and Revolut operate as EU neobanks. For citizens of the Russian Federation/Belarus at present:' },
            { kind: 'checklist', items: [
              'Revolut with an address in the Russian Federation — accounts are closed / frozen',
              'Revolut with an address in Portugal (after obtaining a residence permit) — works. But top-ups from a Russian bank may be blocked',
              'Wise/Revolut: check the provider’s current policy. Not only the address in Portugal is critical, but also a residence permit/EU/EEA resident card; clients with an address/tax residence in the Russian Federation/Belarus or without confirmed EU/EEA residence may be rejected',
              'Tactic: open the account only after moving to Portugal (with a Portuguese address and residence permit), and top it up through a Portuguese bank or SEPA'
            ]}
          ]},
          { id: 'o4', title: 'D. Cryptocurrency (through regulated exchanges)', content: [
            { kind: 'paragraph', text: 'A crypto channel is possible only if both parties and the exchanges comply with sanctions/KYC. EU/EEA exchanges usually require confirmation that a Russian citizen is resident in the EU/EEA/Switzerland; Russia-resident clients may be rejected. Use only licensed/registered VASP/CASP; check the availability of Kraken/Bitstamp/Coinbase; Binance is not a reliable EU off-ramp after leaving the Russian Federation.' },
            { kind: 'checklist', items: [
              'Full KYC is required on both sides',
              'In Portugal, gains on crypto-assets held for <365 days are usually taxed at 28% or by aggregation; where held for ≥365 days, many gains are excluded, but there are exceptions. Mining/staking/remuneration/professional activity and transactions through blacklisted jurisdictions may be taxed differently',
              'Banco de Portugal maintains AML/CFT registration and supervision of VASPs; banks and exchanges monitor transactions and may request documents/report suspicious transactions',
              'When a large amount is received, the bank may request documents on the source of funds',
              'DO NOT use P2P/OTC exchangers without KYC — risk of funds being frozen'
            ]}
          ]},
          { id: 'o5', title: 'E. Cash across the border', content: [
            { kind: 'paragraph', text: 'When entering/leaving the EU, cash and equivalent instruments amounting to €10,000 or more must be declared (Reg (EU) 2018/1672); for unaccompanied funds, there may be an obligation to disclose information at the request of customs. Without a declaration — a fine and confiscation.' },
            { kind: 'warning', text: 'This route is impractical for large amounts — risks of loss, theft, and customs problems.' }
          ]}
        ]}
      ]
    },
    {
      id: 'source-of-funds',
      title: 'Documenting the source of funds',
      content: [
        { kind: 'paragraph', text: 'A Portuguese bank may request source of funds/source of wealth for any atypical transaction; in practice, this is especially common for large, cross-border, sanctions-sensitive, cash/crypto or poorly documented receipts. Prepare in advance:' },
        { kind: 'checklist', items: [
          'IRS return / tax return for the last 3 years',
          'Statement from the sending bank for the accumulation period',
          'Property sale contract in the country of origin (if relevant to the situation)',
          'Employment contract and salary certificate',
          'Inheritance — inheritance documents, apostille',
          'Investments — brokerage reports',
          'Sale of a business — sale and purchase agreement, taxes',
          'Gift — gift agreement with apostille',
          'Transfer of own funds — not considered a “gift”, justified by the entire chain'
        ]},
        { kind: 'warning', text: 'Not all documents require an apostille and certified translation; banks more often request an apostille for civil status records, notarial and court documents.\n\nPortugal does not have a single system of “sworn translators” — certification is done by a notary, lawyer/solicitador, consulate or chamber of commerce.\n\nThe validity period of a document depends on its type.' }
      ]
    },
    {
      id: 'taxes-pt',
      title: 'Taxes in Portugal on funds received',
      content: [
        { kind: 'checklist', items: [
          '💰 Transfer of YOUR OWN funds (savings) — NOT taxable in Portugal',
          '🎁 Gift from a first-line relative (parents/children/spouse) — NOT taxable (exemption from 10% stamp duty)',
          '🎁 Gift from other persons — 10% stamp duty if >€500',
          '💼 Income (dividends, interest) — taxed under Anexo E in IRS',
          '🏠 Sale of property in the country of origin — possible tax in Portugal (net of tax paid there)',
          '💎 Inheritance — 10% stamp duty, if not first line',
          '🔖 IFICI (the new regime replacing the NHR closed in 2024) where status is held — may reduce tax'
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '📋 Plan transfers 3-6 months BEFORE moving. After obtaining a residence permit — easier',
          '🏦 Do not put everything in one bank. Split across 2-3 banks for liquidity',
          '💶 The first large transaction into a Portuguese bank usually gets held for a compliance check for 3-14 days. This is normal',
          '📞 Notify the bank IN ADVANCE about the upcoming large receipt and provide documents on the source of funds',
          '⚖️ For large amounts (>€100,000), consult a specialist compliance lawyer',
          '🚫 DO NOT use “intermediaries” on Telegram/WhatsApp for transfers — high risk of losses',
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
