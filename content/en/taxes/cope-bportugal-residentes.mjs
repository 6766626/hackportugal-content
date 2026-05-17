export default {
  editorialVoice: 'hackportugal',
  id: 'cope-bportugal-residentes',
  categoryId: 'taxes',
  title: 'COPE: Banco de Portugal report on external transactions and positions from €250,000',
  tldr: 'COPE is a Banco de Portugal statistical report, not an AT tax return. In 2026, Portuguese residents whose annual transactions with non-residents or external positions reach €250,000 must file a report on operações e posições com o exterior. The threshold was raised from €100,000 from the 2024 reporting year. This affects companies, recibos verdes and potentially private residents with large foreign accounts/brokers.',
  tags: ['cope', 'bportugal', 'taxes', 'reporting'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cope',
      title: 'What COPE is and why it is not IRS',
      content: [
        { kind: 'paragraph', text: 'COPE — Comunicação de Operações e Posições com o Exterior: a report for Banco de Portugal on cross-border economic and financial transactions of Portuguese residents with non-residents, as well as on external positions — for example, accounts, loans, securities or amounts owed to/from non-residents.' },
        { kind: 'paragraph', text: 'The purpose is statistics for Portugal’s balance of payments and international investment position. It is not IRS, not IVA, not Modelo 3, not Annex J and not a report to Finanças. Even if you have declared everything correctly to AT, an obligation to Banco de Portugal may exist separately.' },
        { kind: 'checklist', items: [
          'COPE is filed with Banco de Portugal, not with Finanças.',
          'The threshold in 2026 is €250,000 of annual transactions or external positions.',
          'The threshold is calculated on gross amounts, not on profit.',
          'Transactions with non-residents include receipts and payments for services, goods, interest, dividends, loans and investments.',
          'Positions include assets and liabilities with non-residents: foreign accounts, brokerage accounts, loans, receivables/payables.',
          'The reporting is statistical, but sanctions may apply for ignoring Banco de Portugal requests.'
        ] }
      ]
    },
    {
      id: 'who-must-report',
      title: 'Who should check the €250,000 threshold',
      content: [
        { kind: 'paragraph', text: 'Banco de Portugal refers to “entidades residentes” — resident units. In practice, this definitely includes Portuguese companies, branches, sole traders and recibos verdes. Private expats with large foreign accounts or brokerage portfolios should also not automatically assume they are outside the scope: if you are a Portuguese resident and hold/move significant sums abroad, check the obligation or request written clarification from Banco de Portugal.' },
        { kind: 'checklist', items: [
          'You are an Lda/Unipessoal in Portugal and sell services to clients in the USA, UK, EU or other countries.',
          'You are on recibos verdes and issue invoices to non-residents for around €250,000 a year or more.',
          'A Portuguese company imports/exports goods for large amounts.',
          'You have a foreign brokerage account with a portfolio from €250,000.',
          'You have a foreign bank account with balances around €250,000 or more.',
          'You gave or received a large loan from a non-resident.',
          'The company has large receivables or payables with non-residents.',
          'You regularly transfer large sums between Portugal and foreign financial institutions.'
        ] },
        { kind: 'warning', text: 'Having a Portuguese bank does not mean that “the bank has already filed everything for you”. The bank may transmit its own payment statistics, but COPE as a report by the resident unit on its external transactions/positions may remain your obligation.' }
      ]
    },
    {
      id: 'threshold',
      title: 'How to calculate the threshold: €250,000 is not profit, but the scale of transactions/positions',
      content: [
        { kind: 'paragraph', text: 'In 2026, the exemption threshold is €250,000. It was raised from €100,000 from the 2024 reporting year. The idea is simple: if the annual volume of external transactions or external positions reaches €250,000, you need to check the obligation to file COPE.' },
        { kind: 'checklist', items: [
          'Count gross receipts from non-residents: for example, €260,000 in invoices to clients in the USA — the threshold is reached.',
          'Count gross payments to non-residents: for example, imports/contractors/licences abroad.',
          'Do not net them off: €180,000 of receipts + €90,000 of payments is €270,000 of external transaction turnover.',
          'For investments, look not only at realised profit, but also at purchase/sale transactions, dividends, interest and external positions.',
          'A foreign brokerage portfolio of €300,000 may create an obligation even without frequent trading.',
          'Positions are balances/liabilities with non-residents on the reporting date, not only movements of money.',
          'If the amount is close to €250,000, keep a monthly table: date, counterparty country, transaction type, currency, amount in €.'
        ] },
        { kind: 'warning', text: 'Do not confuse this with tax thresholds: SMN €920, IAS €537.13, IVA and IRS rates do not apply here. COPE belongs to Banco de Portugal’s statistical reporting system.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How COPE is filed in practice',
      content: [
        { kind: 'paragraph', text: 'The report is filed through Banco de Portugal channels for statistical reporting. It is usually handled by an accountant, finance department or consultant, because transactions need to be correctly classified by codes, countries and types of financial instruments.' },
        { kind: 'checklist', items: [
          'Check who the reporting unit is: an individual, ENI/recibos verdes, Lda, branch or other structure.',
          'Collect bank statements for Portuguese and foreign accounts.',
          'Collect broker reports: positions at the end of the period, trades, dividends, interest, fees.',
          'Export invoices/receipts to non-residents and payments to non-residents from the accounts.',
          'Separate transactions by counterparty countries, currencies and transaction types.',
          'Register access to Banco de Portugal reporting services or pass the task to a contabilista certificado.',
          'File reporting on a monthly basis if you do not fall under the exemption.',
          'Keep the threshold calculation and supporting documents at least in case of a Banco de Portugal request.'
        ] },
        { kind: 'paragraph', text: 'The standard deadline for COPE statistical reports is by the 15th working day after the end of the reporting month. If you have exceeded the threshold for the first time or are not sure from which month to start, it is better not to wait until the end of the year: write to Banco de Portugal and keep the reply on record.' }
      ]
    },
    {
      id: 'examples',
      title: 'Typical scenarios for expats',
      content: [
        { kind: 'substeps', items: [
          { id: 'remote-contractor', title: 'Recibos verdes with foreign clients', content: [
            { kind: 'paragraph', text: 'You live in Portugal, work as a freelancer and issued invoices to clients in the USA and UK for €255,000 during the year. Even if IRS tax is paid through AT and some expenses reduce the taxable base, COPE looks at external gross turnover. The €250,000 threshold has been reached.' }
          ] },
          { id: 'foreign-broker', title: 'Foreign broker', content: [
            { kind: 'paragraph', text: 'You became a Portuguese tax resident and hold Interactive Brokers/another non-resident broker with a portfolio of €320,000. Even if there are few trades, the external position is above €250,000. Check the COPE obligation separately from Annex J in IRS.' }
          ] },
          { id: 'company-import-export', title: 'Lda with imports and exports', content: [
            { kind: 'paragraph', text: 'A Portuguese Lda bought services from non-residents for €120,000 and sold services to non-residents for €160,000. Total external turnover is €280,000, not “profit”. The company should check the obligation to file COPE.' }
          ] },
          { id: 'low-volume', title: 'Small transfers and pension', content: [
            { kind: 'paragraph', text: 'A D7 resident receives a foreign pension of €24,000 a year and transfers €30,000 of savings to a Portuguese account. If there are no other large external assets/transactions, the €250,000 threshold is far away. But an IRS tax return may still be required.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Mistakes that are costly to fix',
      content: [
        { kind: 'checklist', items: [
          'Counting only profit, not the gross volume of transactions.',
          'Ignoring a foreign brokerage account because “these are personal investments”.',
          'Thinking that Annex J in IRS replaces COPE.',
          'Thinking that CRS/FATCA exchange between banks replaces your Banco de Portugal report.',
          'Failing to account for loans between a Portuguese company and a foreign shareholder/founder.',
          'Mixing transactions of a resident Portuguese Lda and the owner’s personal transactions.',
          'Not keeping statements from foreign banks and brokers with balances at month-end.',
          'Discovering the threshold only at the annual accounting closing and missing monthly deadlines.'
        ] },
        { kind: 'warning', text: 'If you have already exceeded €250,000 in previous periods and have not filed anything, do not submit “at random”. First reconstruct the calendar of transactions and positions, then ask a contabilista or consultant to contact Banco de Portugal about the correct way to regularise.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Banco de Portugal: Reporting of external transactions and positions',
      url: 'https://www.bportugal.pt/page/reporting-external-transactions-and-positions',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: official website and statistical reporting section',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
