export default {
  editorialVoice: 'hackportugal',
  id: 'brokerage-account-pt',
  categoryId: 'banking',
  title: 'Brokerage account in Portugal: DEGIRO, IBKR, Trading 212, XTB with NIF',
  tldr: 'With a Portuguese NIF, you can open an account with EU brokers: DEGIRO, IBKR, Trading 212, XTB. Check whether the intermediary is registered with the CMVM or operates under an EU passport, who holds the assets, and which compensation scheme applies: the Portuguese SII covers up to €25,000, but foreign brokers usually use the scheme of the licensing country. For US shares, complete W-8BEN: dividend withholding is usually 15% instead of 30%. A Portuguese tax resident declares foreign dividends, interest and trades in IRS, most often through Anexo J.',
  tags: ['broker', 'nif', 'irs', 'cmvm', 'w8ben'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'choose-broker',
      title: '1. Choose a broker and check the licence',
      content: [
        { kind: 'paragraph', text: 'NIF by itself does not create a “Portuguese brokerage account”. Most popular platforms open an account with a foreign EU legal entity and serve clients from Portugal under the prestação de serviços / livre prestação de serviços mechanism — the EU passport. This is normal, but it is important to understand exactly who your broker is.' },
        { kind: 'checklist', items: [
          'DEGIRO — check the current legal entity in the contract: usually flatexDEGIRO Bank / DEGIRO B.V.; services in Portugal are provided as a foreign intermediary.',
          'IBKR — for EU residents, usually Interactive Brokers Ireland Limited; tax forms and reports are exported from Client Portal.',
          'Trading 212 — for EU clients, often Trading 212 Markets Ltd, licensed by the Cyprus Securities and Exchange Commission; check the licensing country during onboarding.',
          'XTB — XTB S.A. with a branch / services in Portugal; often more convenient for Portuguese clients, but you still declare tax yourself.',
          'Check the broker on the CMVM website: registration status, country of origin, authorised services, regulator warnings.',
          'Do not confuse the app, intermediary bank, custodian and investment firm: the compensation scheme depends on the licensed legal entity, not the brand in the App Store.'
        ] },
        { kind: 'warning', text: 'If a broker promises “guaranteed income”, asks for a transfer to a personal IBAN, operates only through Telegram/WhatsApp, or is absent from regulator registers, this is a red flag. CMVM regularly publishes warnings about unlicensed intermediaries.' }
      ]
    },
    {
      id: 'documents',
      title: '2. What you will need to open an account',
      content: [
        { kind: 'paragraph', text: 'For an expat in Portugal, standard broker KYC takes from a few minutes to a few days. NIF is required as a tax identifier; if you are already a Portuguese tax resident, state Portugal as your tax residence.' },
        { kind: 'checklist', items: [
          'NIF — taxpayer number from Finanças.',
          'Identity document: passport, cartão de residência / residence permit, Cartão de Cidadão for PT citizens.',
          'Address in Portugal: tenancy agreement, utility bill, bank statement or atestado de residência.',
          'Tax residence self-certification under CRS/FATCA: country of tax residence and TIN/NIF.',
          'IBAN for deposits and withdrawals — preferably in your name; a SEPA transfer is usually the cheapest option.',
          'Declaration of investment experience and objectives: the broker must assess appropriateness for complex products.',
          'Proof of source of funds for large amounts: payslips, contrato de trabalho, recibos verdes, sale of property, savings.',
          'For US securities — W-8BEN, if the broker provides access to US shares/ETFs.'
        ] },
        { kind: 'warning', text: 'If you have not yet become a Portuguese tax resident but have already obtained a NIF, do not automatically state Portugal. Tax residence is not just a NIF: it is usually 183+ days in the year or habitual residence on 31 December. An error in tax residence affects CRS exchange and reporting.' }
      ]
    },
    {
      id: 'w8ben',
      title: '3. W-8BEN for US shares',
      content: [
        { kind: 'paragraph', text: 'W-8BEN is a form for non-US individuals. It is needed so that the broker applies the US—Portugal tax treaty to dividends from US shares. Without the form, standard US withholding is often 30%; with a correct W-8BEN for a Portuguese resident, it is usually 15% on dividends.' },
        { kind: 'checklist', items: [
          'Completed inside the broker interface; there is usually no need to send a paper form.',
          'State your legal name as in your document, country of citizenship, residential address and tax residence.',
          'Foreign TIN — your NIF, if you are a Portuguese tax resident.',
          'The form usually remains valid until 31 December of the third calendar year after the year of signing, unless your details have changed.',
          'If you have moved, changed tax residence or changed your name, update W-8BEN with the broker.',
          'W-8BEN reduces US withholding at source, but does not remove the obligation to declare the income in Portuguese IRS.',
          'For US ETFs, retail clients in the EU are often subject to PRIIPs/KID restrictions: many American ETFs cannot be bought directly, but you can hold positions already bought or buy UCITS ETFs.'
        ] },
        { kind: 'warning', text: 'The 15% withheld in the US on dividends is not always the “final tax” for Portugal. In IRS you declare gross income and tax withheld abroad; Finanças calculates the foreign tax credit within the CIRS rules.' }
      ]
    },
    {
      id: 'tax-reporting',
      title: '4. How to declare in IRS: Anexo J, E, G',
      content: [
        { kind: 'paragraph', text: 'A Portuguese tax resident declares worldwide income. For brokers such as DEGIRO, IBKR, Trading 212 and often XTB, income is usually considered foreign-source if the securities, account or paying agent are located outside Portugal. In practice, most expats complete Anexo J.' },
        { kind: 'checklist', items: [
          'Dividends and interest from abroad — usually Anexo J, the quadro for rendimentos de capitais, category E.',
          'Sale of shares, ETFs, bonds and options with a foreign source — usually Anexo J, category G gains/losses.',
          'Portuguese dividends/interest already processed by a Portuguese paying agent may go through Anexo E or already be withheld at source; check the declaração anual do banco.',
          'Sale of Portuguese securities through a Portuguese intermediary — often Anexo G; through a foreign broker, the situation requires checking the source and report.',
          'The standard autonomous rate on many dividends, interest and capital gains is 28%, but you can choose englobamento if it is beneficial under your IRS bracket.',
          'If you choose englobamento for part of the income, it may apply more widely within the category; do not click the option without calculation.',
          'Keep the broker’s annual statement, trade confirmations, FX rates and withholding tax reports for at least 4 years.',
          'In IRS 2026 for 2025 income, filing usually runs from 1 April to 30 June; for 2026 income, the return will be filed in 2027.'
        ] },
        { kind: 'warning', text: 'The tax base for trades is calculated in euros. If the purchase/sale is in USD or GBP, conversion at the correct exchange rate is required. Broker reports do not always match the Finanças logic: check fees, FX, corporate actions and fractional shares manually.' }
      ]
    },
    {
      id: 'protection',
      title: '5. Asset protection: SII, foreign schemes and cash',
      content: [
        { kind: 'paragraph', text: 'Investments are not insured against market falls. Compensation schemes do not cover losses on shares/ETFs, but the failure of an intermediary to return money or instruments belonging to you under certain conditions.' },
        { kind: 'checklist', items: [
          'The Portuguese Sistema de Indemnização aos Investidores (SII) covers up to €25,000 per investor, but applies to participants in the Portuguese system.',
          'With a foreign EU broker, the scheme of the licensing country usually applies, not the Portuguese SII.',
          'IBKR Ireland — see the Irish Investor Compensation Scheme: usually up to 90% of losses with a €20,000 limit for eligible clients.',
          'Cypriot investment firms usually fall under the Investor Compensation Fund with a limit of up to €20,000 for eligible clients.',
          'With bank brokers, free cash may fall under a deposit guarantee scheme up to €100,000, but this depends on where and how the cash is held.',
          'Client securities should usually be segregated from the broker’s assets, but in insolvency there may be delays, reconciliations and legal costs.',
          'For larger portfolios, it is sensible to diversify brokers and keep copies of reports outside the app.'
        ] },
        { kind: 'warning', text: 'The phrase “protection up to €100,000” often refers to a bank deposit, not to shares and ETFs. For investment instruments, look specifically at investor compensation, segregation of assets and the broker’s legal entity.' }
      ]
    },
    {
      id: 'practical-setup',
      title: '6. Practical setup after opening',
      content: [
        { kind: 'paragraph', text: 'Before the first deposit, set up reporting. This will save hours during the IRS period and reduce the risk of errors in Anexo J.' },
        { kind: 'checklist', items: [
          'Download the PDF/CSV annual activity statement for each calendar year.',
          'Enable reports on dividends, interest, withholding tax, realised gains/losses and fees.',
          'Keep the ISIN, purchase date, sale date, quantity, price, currency, fees and FX.',
          'Do not mix personal and corporate funds: an individual account ≠ an LDA/empresa account.',
          'Check whether the broker issues a Portuguese tax report; even if it does, responsibility for IRS remains with you.',
          'For accumulating ETFs, taxation usually arises on sale, not on reinvestment inside the fund; for distributing ETFs, dividends are declared annually.',
          'If you use margin, options, CFDs or securities lending, factor in additional risks, interest and more complex tax reporting.',
          'Before leaving Portugal, update your tax residence with the broker and in Finanças; CRS will continue exchanging data according to the stated country.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Opening an account with DEGIRO / IBKR / Trading 212 / XTB', amountEUR: 0, note: 'Usually free; fees arise on trades, FX, exchange fees, inactivity or withdrawals — depending on the tariff and the country of the legal entity.' },
    { label: 'W-8BEN', amountEUR: 0, note: 'Completed free of charge with the broker; reduces US withholding on dividends where tax residence is correct.' },
    { label: 'Filing IRS through Portal das Finanças', amountEUR: 0, note: 'Self-filing is free; an accountant for Anexo J usually costs extra.' },
    { label: 'Investor compensation in Portugal: SII', amountEURMax: 25000, note: 'Compensation limit per investor for participants in the Portuguese system; for foreign brokers, check the scheme of the licensing country.' }
  ],
  sources: [
    { title: 'CMVM — registers of financial intermediaries and investor warnings', url: 'https://www.cmvm.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — IRS and Modelo 3 / Anexos returns', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — taxation of income, categories E and G', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Sistema de Indemnização aos Investidores — information on investor protection', url: 'https://www.cmvm.pt/pt/EstatisticasEstudosEPublicacoes/Pages/Sistema-de-Indemnizacao-aos-Investidores.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
