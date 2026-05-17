export default {
  editorialVoice: 'hackportugal',
  id: 'anexo-j-contas-estrangeiras',
  categoryId: 'taxes',
  title: 'Anexo J Quadro 11: how to declare Wise, Revolut, N26, Degiro and IBKR',
  tldr: 'If you have become a tax resident of Portugal, in IRS Modelo 3 you must report foreign bank and brokerage accounts in Anexo J, Quadro 11 — even if the balance is €0, there was no income and the account is “just Wise/Revolut”. Accounts at financial institutions outside Portugal are declared: IBAN, BIC/SWIFT and country. For 2025, the declaration is submitted from 1 April to 30 June 2026. This obligation is separate from declaring interest, dividends and sales of securities.',
  tags: ['irs', 'anexo-j', 'wise', 'revolut', 'broker'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-quadro-11',
      title: 'What Quadro 11 is and why you cannot ignore it',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 in Anexo J to IRS Modelo 3 is the section for identifying accounts at financial institutions that are not resident in Portugal. The basis is art. 63.º-A da Lei Geral Tributária: IRS tax residents are required to report the existence and identification of foreign deposit and securities accounts.' },
        { kind: 'paragraph', text: 'This is not a tax on the account and not an income declaration. The mere existence of the account is reported separately: even if on 31 December the balance was €0, there were no transactions, the card was not used or the brokerage account was opened “for the future”.' },
        { kind: 'checklist', items: [
          'Wise with a BE/other foreign IBAN — usually report it',
          'Revolut with an LT/IE/other foreign IBAN — usually report it',
          'N26 with a DE IBAN — report it',
          'Degiro / flatex cash account with DE/NL details — report it',
          'IBKR, if there is an identifiable cash or brokerage account outside Portugal — report it',
          'PayPal without a bank IBAN is usually not a classic bank account for Quadro 11, but income received via PayPal must still be declared in the relevant sections',
          'A Portuguese account with a PT50 IBAN at a bank/branch in Portugal is usually not included in Quadro 11'
        ] }
      ]
    },
    {
      id: 'who-must-file',
      title: 'Who must report foreign accounts',
      content: [
        { kind: 'paragraph', text: 'The obligation applies to tax residents of Portugal who submit IRS Modelo 3. If in 2025 you were a tax resident of Portugal, then in the declaration submitted from 1 April to 30 June 6 you need to check all foreign accounts that existed during 2025.' },
        { kind: 'checklist', items: [
          'You in Portugal for more than 183 days in 2025 — check Quadro 11',
          'You had a habitual residence address in Portugal and resident status in Finanças — check Quadro 11',
          'You moved to Portugal in the middle of the year and became resident — report foreign accounts for the period of residency',
          'The account was opened but not used — still check the obligation',
          'The account was closed during the year — it is safer to report it if it existed during your period of tax residency',
          'The account belongs to a spouse in a joint declaration — it is reported under the relevant titular',
          'If you are only an authorised user or representative, not the owner, check the bank’s wording and your role: art. 63.º-A covers the existence and identification of accounts linked to the taxpayer'
        ] },
        { kind: 'warning', text: 'Do not confuse tax residency with an AIMA residence permit. You can be a tax resident without a residence permit card, and vice versa. For IRS, what matters is your status in Finanças and the factual residency criteria.' }
      ]
    },
    {
      id: 'what-data-you-need',
      title: 'What data to collect: IBAN, BIC and country',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 requires identification of the account. In practice, you need three things: the country of the financial institution, the account IBAN and the BIC/SWIFT. Take the data from the monthly statement, account details, tax report or broker confirmation.' },
        { kind: 'checklist', items: [
          'Full IBAN, without spaces or with spaces — as accepted by Portal das Finanças',
          'BIC/SWIFT of the bank or broker: for example, an 8- or 11-character format',
          'Country of the institution: Germany for a DE IBAN, Lithuania for an LT IBAN, Belgium for a BE IBAN, etc.',
          'Provider name for your own records: Wise, Revolut, N26, Degiro, Interactive Brokers',
          'Opening and closing date — not always entered in Quadro 11, but useful in case of a check',
          'Annual reports on interest, dividends and asset sales — these are for other sections of Anexo J',
          'Screenshot of the account details as at 31 December and PDF statement — keep them for at least 4 years'
        ] },
        { kind: 'warning', text: 'Do not invent an IBAN/BIC for a broker. If IBKR or another broker does not show an individual IBAN, request a tax statement or confirmation from support. Quadro 11 should contain real account identifiers, not payment details for topping up an omnibus account if they are not your account.' }
      ]
    },
    {
      id: 'where-to-enter',
      title: 'Where to enter this in Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'In the IRS Modelo 3 declaration, add Anexo J — Rendimentos obtidos no estrangeiro. Even if there is no foreign income, Anexo J may be needed specifically because of Qu 11.' },
        { kind: 'substeps', items: [
          { id: 'open-modelo-3', title: '1. Open the IRS declaration', content: [
            { kind: 'paragraph', text: 'Portal das Finanças → IRS → Entregar Declaração → Modelo 3. For 2025 income, submission runs from 1 April to 30 June 2026.' }
          ] },
          { id: 'add-anexo-j', title: '2. Add Anexo J', content: [
            { kind: 'paragraph', text: 'In the list of anexos, select Anexo J. It is used not only for income from abroad, but also for identifying foreign accounts.' }
          ] },
          { id: 'fill-quadro-11', title: '3. Fill in Quadro 11', content: [
            { kind: 'checklist', items: [
              'Add one row for each foreign account',
              'Indicate the titular: taxpayer A, B or dependente, if applicable',
              'Select the country of the institution',
              'Enter the IBAN',
              'Enter the BIC/SWIFT',
              'Check that PT accounts have not been added by mistake',
              'Save and run Validar before submission'
            ] }
          ] },
          { id: 'submit-and-save', title: '4. Submit and save evidence', content: [
            { kind: 'paragraph', text: 'After submissão, save the comprovativo da entrega and liquidação when it becomes available. Separately save PDF statements for Wise/Revolut/N26/Degiro/IBKR.' }
          ] }
        ] }
      ]
    },
    {
      id: 'income-is-separate',
      title: 'Account separately, income separately',
      content: [
        { kind: 'paragraph', text: 'Quadro 11 does not replace income reporting. If there was interest, dividends, coupons, sales of ETFs/shares, crypto income capital gains on a foreign account, they are declared in other quadros of Anexo J or other anexos depending on the type of income.' },
        { kind: 'checklist', items: [
          'Interest from Wise Interest, Revolut Savings or a bank deposit — usually rendimento de capitais',
          'Dividends from shares/ETFs — separate reporting, often with foreign withholding tax',
          'Sale of shares, ETFs, bonds — capital/loss; purchase/sale dates and prices are needed',
          'A broker report in/GBP must be converted into euros using the applicable exchange rate',
          'Take broker fees into account only where they are tax-deductible',
          'If there is no income, Quadro 11 may still be the only completed section of Anexo J'
        ] },
        { kind: 'warning', text: 'Finanças receives CRS automatic exchange of information from foreign banks and brokers. A typical mistake is to declare dividends but forget Quadro 11, or conversely to report the account but not report interest/asset sales.' }
      ]
    },
    {
      id: 'mistakes-and-corrections',
      title: 'Common mistakes and how to correct them',
      content: [
        { kind: 'checklist', items: [
          '“The balance was €0, so it is not needed” — you need to check: the obligation concerns the existence of the account, not the balance',
          '“This is not a bank, it is aobank” — if there is a foreign IBAN and the institution is outside Portugal, the account is usually reportable',
          '“Revolut will send everything itself” — CRS does not cancel your IRS obligation',
          '“Degiro is investments, not an account” — Quadro 11 covers contas de títulos',
          '“I only have a foreign card” — check whether there is a linked deposit account/IBAN',
          '“I closed the account before 31 December” — if the account existed in the year of your residency, it is better to disclose it',
          '“I reported income in Anexo J, but not the account” — submit a declaração de substituição'
        ] },
        { kind: 'paragraph', text: 'If the declaration has already been submitted and you forgot Quadro 11, you usually submit a declaração de substituição through Portal das Finanças. If the 30 June 2026 deadline has not yet passed, the correction is usually technically simpler and without a penalty. After the deadline, fines may apply under the RGIT for an inaccurate or incomplete declaration; the typical range for breaches of reporting obligations is from €150 to €3,750, but the specific amount depends on the situation, whether the correction is voluntary and the decision of Autoridade Tributária.' },
        { kind: 'warning', text: 'Do not wait for a letter from Finanças if you forgot Wise/Revolut/N26. Correcting it on your own initiative is almost always better than explaining after an automatic CRS cross-check.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting IRS Modelo 3 online', amountEUR: 0, note: 'By yourself through Portal das Finanças' },
    { label: 'Correction before the 30/06/2026 deadline', amountEUR: 0, note: 'Usually through a declaração de substituição without a penalty if the tax filing period is still open' },
    { label: 'Possible fine for an incomplete/inaccurate declaration', amountEURMin: 150, amountEURMax: 3750, note: 'Indicative RGIT range; the actual amount depends on the circumstances and AT’s position' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, forms and Anexo J instructions',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Geral Tributária — art. 63.º-A, obligation to mention accounts abroad',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
 kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — submission of the IRS Modelo 3 declaration',
      url: 'https://www.portaldasfinancas.gov.pt/at/html.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
