export default {
  editorialVoice: 'hackportugal',
  id: 'anexo-j-contas-estrangeiras',
  categoryId: 'taxes',
  title: 'Anexo J Quadro 11: how to declare Wise, Revolut, N26, Degiro and IBKR',
  tldr: 'If you have become a Portuguese tax resident, you must indicate foreign bank and brokerage accounts in IRS Modelo 3 under Anexo J, Quadro 11 — even if the balance is €0, there was no income and the account is "just Wise/Revolut". Accounts with financial institutions outside Portugal are declared: IBAN, BIC/SWIFT and country. For 2025 the return is filed from 1 April to 30 June 2026. The obligation is separate from declaring interest, dividends and sales of securities.',
  tags: ['irs', 'anexo-j', 'wise', 'revolut', 'broker'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-quadro-11',
      title: 'What is Quadro 11 and why you must not ignore it',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 in Anexo J to IRS Modelo 3 is the section for identifying accounts with financial institutions that are not resident in Portugal. The basis is art. 63.º-A da Lei Geral Tributária: IRS tax residents are obliged to report the existence and identification of foreign deposit and securities accounts.' },
        { kind: 'paragraph', text: 'This is not a tax on the account and not an income declaration. The mere fact of holding an account is reported separately: even if on 31 December the balance was €0, there were no transactions, the card was not used, or the brokerage account was opened "for the future".' },
        { kind: 'checklist', items: [
          'Wise with a BE/another foreign IBAN — usually must be reported',
          'Revolut with an LT/IE/another foreign IBAN — usually must be reported',
          'N26 with a DE IBAN — must be reported',
          'Degiro / flatex cash account with DE/NL details — must be reported',
          'IBKR, if there is an identifiable cash or brokerage account outside Portugal — must be reported',
          'PayPal without a bank IBAN is usually not a classic bank account for Quadro 11, but income via PayPal must still be declared in the relevant sections',
          'A Portuguese account with a PT50 IBAN at a bank/branch in Portugal is usually not included in Quadro 11'
        ] }
      ]
    },
    {
      id: 'who-must-file',
      title: 'Who must indicate foreign accounts',
      content: [
        { kind: 'paragraph', text: 'The obligation applies to Portuguese tax residents who file IRS Modelo 3. If in 2025 you were a Portuguese tax resident, then in the return filed from 1 April to 30 June 2026 you must check all foreign accounts that existed during 2025.' },
        { kind: 'checklist', items: [
          'You lived in Portugal for more than 183 days in 2025 — check Quadro 11',
          'You had an address of habitual residence in Portugal and resident status in Finanças — check Quadro 11',
          'You moved to Portugal mid-year and became a resident — indicate foreign accounts for the period of residency',
          'The account was opened but not used — you still must check the obligation',
          'The account was closed during the year — it is safer to indicate it if it existed during your period of tax residency',
          'The account belongs to a spouse in a joint return — declare it under the corresponding titular',
          'If you are only an authorised user or representative, and not the owner, check the bank’s wording and your role: art. 63.º-A covers the existence and identification of accounts linked to the taxpayer'
        ] },
        { kind: 'warning', text: 'Do not confuse tax residency with an AIMA residence permit. One can be a tax resident without a residence permit card, and vice versa. For IRS, what matters is your status in Finanças and the factual residency criteria.' }
      ]
    },
    {
      id: 'what-data-you-need',
      title: 'What data to gather: IBAN, BIC and country',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 requires account identification. In practice you need three things: the financial institution’s country, the account’s IBAN and the BIC/SWIFT. Take the data from the monthly statement, account details, tax report or a broker’s certificate.' },
        { kind: 'checklist', items: [
          'The IBAN in full, with or without spaces — as accepted by Portal das Finanças',
          'The bank’s or broker’s BIC/SWIFT: for example, an 8- or 11-character format',
          'Country of the institution: Germany for a DE IBAN, Lithuania for an LT IBAN, Belgium for a BE IBAN, etc.',
          'Provider name for your own notes: Wise, Revolut, N26, Degiro, Interactive Brokers',
          'Opening and closing dates — not always entered in Quadro 11, but useful for checking',
          'Annual reports for interest, dividends and asset sales — these are for other sections of Anexo J',
          'A screenshot of the account details as at 31 December and a PDF statement — keep for at least 4 years'
        ] },
        { kind: 'warning', text: 'Do not invent an IBAN/BIC for a broker. If IBKR or another broker does not show an individual IBAN, request a tax statement or confirmation from support. Quadro 11 must include real account identifiers, not funding details for an omnibus account if they are not your account.' }
      ]
    },
    {
      id: 'where-to-enter',
      title: 'Where to enter this on Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'In the IRS Modelo 3 return add Anexo J — Rendimentos obtidos no estrangeiro. Even if there is no foreign income, Anexo J may be needed specifically because of Quadro 11.' },
        { kind: 'substeps', items: [
          { id: 'open-modelo-3', title: '1. Open your IRS return', content: [
            { kind: 'paragraph', text: 'Portal das Finanças → IRS → Entregar Declaração → Modelo 3. For 2025 income the filing window runs from 1 April to 30 June 2026.' }
          ] },
          { id: 'add-anexo-j', title: '2. Add Anexo J', content: [
            { kind: 'paragraph', text: 'In the list of anexos select Anexo J. It is used not only for income from abroad, but also to identify foreign accounts.' }
          ] },
          { id: 'fill-quadro-11', title: '3. Complete Quadro 11', content: [
            { kind: 'checklist', items: [
              'Add a line for each foreign account',
              'Indicate the titular: taxpayer A, B or dependente, if applicable',
              'Choose the institution’s country',
              'Enter the IBAN',
              'Enter the BIC/SWIFT',
              'Check that PT accounts have not been added by mistake',
              'Save and run Validar before submission'
            ] }
          ] },
          { id: 'submit-and-save', title: '4. Submit and save evidence', content: [
            { kind: 'paragraph', text: 'After submission, save the comprovativo da entrega and the liquidação when it appears. Separately save the PDF statements for Wise/Revolut/N26/Degiro/IBKR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'income-is-separate',
      title: 'Account separate, income separate',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 does not replace income reporting. If there was interest, dividends, coupons, sales of ETFs/shares, crypto income or capital gains on a foreign account, these are reported in other quadros of Anexo J or other anexos depending on the income type.' },
        { kind: 'checklist', items: [
          'Interest from Wise Interest, Revolut Savings or a bank deposit — usually rendimento de capitais',
          'Dividends from shares/ETFs — declared separately, often with foreign withholding tax',
          'Sale of shares, ETFs, bonds — capital gains/losses; purchase/sale dates and prices are required',
          'A broker report in USD/GBP must be converted to euros at the applicable rate',
          'Include broker commissions only where they are tax‑allowable',
          'If there is no income, Quadro 11 may still be the only completed section of Anexo J'
        ] },
        { kind: 'warning', text: 'Finanças receives automatic CRS information exchange from foreign banks and brokers. A common mistake is to declare dividends but forget Quadro 11, or vice versa to indicate the account but not the interest/asset sales.' }
      ]
    },
    {
      id: 'mistakes-and-corrections',
      title: 'Common mistakes and how to fix them',
      content: [
        { kind: 'checklist', items: [
          '“The balance was €0, so I don’t need to” — you must check: the obligation concerns the existence of the account, not the balance',
          '“This is not a bank, it’s a neobank” — if there is a foreign IBAN and an institution outside Portugal, the account is usually reportable',
          '“Revolut will pass everything on itself” — CRS does not cancel your obligation in IRS',
          '“Degiro is investments, not an account” — Quadro 11 explicitly covers contas de títulos',
          '“I only have a foreign card” — check whether there is a linked deposit account/IBAN',
          '“I closed the account before 31 December” — if the account existed in the year of your residency, it is better to disclose it',
          '“I reported income in Anexo J, but not the account” — file a declaração de substituição'
        ] },
        { kind: 'paragraph', text: 'If the return has already been filed and you forgot Quadro 11, you generally submit a declaração de substituição via Portal das Finanças. If the 30 June 2026 deadline has not yet passed, fixing it is usually technically simpler and without a fine. After the deadline, fines under the RGIT are possible for an inaccurate or incomplete return; the typical range for breaches of declarative obligations is from €150 to €3,750, but the specific amount depends on the situation, the voluntariness of the correction and the decision of the Autoridade Tributária.' },
        { kind: 'warning', text: 'Do not wait for a letter from Finanças if you forgot Wise/Revolut/N26. A self‑initiated correction is almost always better than explaining after an automatic CRS match.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing IRS Modelo 3 online', amountEUR: 0, note: 'Via Portal das Finanças by yourself' },
    { label: 'Correction before the 30.06.2026 deadline', amountEUR: 0, note: 'Usually via declaração de substituição without a fine if the tax window is still open' },
    { label: 'Possible fine for an incomplete/inaccurate return', amountEURMin: 150, amountEURMax: 3750, note: 'Benchmark under the RGIT; the actual amount depends on the circumstances and the AT’s position' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, forms and instructions for Anexo J',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Geral Tributária — art. 63.º-A, obligation to mention foreign accounts',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — submission of the IRS Modelo 3 return',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}
