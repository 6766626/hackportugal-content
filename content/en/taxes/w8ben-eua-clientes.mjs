export default {
  editorialVoice: 'hackportugal',
  id: 'w8ben-eua-clientes',
  categoryId: 'taxes',
  title: 'W-8BEN: how to reduce US withholding from 30% to the treaty rate for Stripe, Amazon and IBKR',
  tldr: 'W-8BEN is an IRS form for non-US resident individuals. If you are a tax resident of Portugal, it confirms foreign status and allows the Portugal–US tax treaty to be applied: usually 0% for services/business income without a permanent establishment in the US, 10% for some Amazon KDP royalties and 15% for US dividends with a broker such as IBKR. The form is valid until 31 December of the third following year: signed in April 2026 — renew by 31.12.2029.',
  tags: ['w8ben', 'irs', 'treaty', 'taxes', 'ibkr'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'What W-8BEN does',
      content: [
        { kind: 'paragraph', text: 'By default, the US may withhold 30% on certain payments to foreign persons: dividends, royalties, certain platform payments. W-8BEN tells the withholding agent that you are not a US person and provides a basis to apply the treaty rate instead of 30%.' },
        { kind: 'paragraph', text: 'For a resident of Portugal, the Convention Between the United States of America and the Portuguese Republic for the Avoidance of Double Taxation applies. In practice, this is not one single rate, but a rate by type of income.' },
        { kind: 'checklist', items: [
          'freelance services provided from Portugal: usually 0% in the US if there is no permanent establishment / fixed base in the US',
          'business profits: Article 7, usually 0% in the US without a permanent establishment',
          'independent personal services: Article 15, usually 0% without a fixed base in the US and in the absence of prolonged physical presence in the US',
          'royalties, including some Amazon KDP payments: Article 12, for the Portugal–US treaty usually up to 10%, not 0%',
          'dividends on US shares with IBKR: Article 10, usually 15% for a portfolio investor',
          'capital gains on ordinary US shares: usually 0% withholding in the US, but declared in Portugal',
          'the form does not cancel Portuguese IRS: a resident of Portugal declares worldwide income'
        ] },
        { kind: 'warning', text: 'W-8BEN is for individuals only. If the payment recipient is a Portuguese Lda, US LLC, UK LTD or another company, W-8BEN-E or another form is usually needed. US citizens, green card holders and persons with US tax residency do not use W-8BEN.' }
      ]
    },
    {
      id: 'when-platforms-ask',
      title: 'Where it is requested: Stripe, Amazon, IBKR',
      content: [
        { kind: 'paragraph', text: 'The form is rarely sent directly to the IRS. Usually you complete a tax interview inside the platform, and the platform keeps the W-8BEN as the withholding agent.' },
        { kind: 'checklist', items: [
          'Amazon KDP: requests a tax interview before royalty payments; without treaty benefits it may withhold 30%',
          'Amazon Associates / affiliate: the income classification may differ from KDP royalties; check the wording in the tax interview',
          'IBKR, Schwab, US brokers: W-8BEN is needed for reduced withholding on US dividends — usually 15% instead of 30%',
          'Stripe / Stripe Atlas / marketplaces: the form may be required to confirm foreign status and zero withholding on services',
          'US client via a platform: if this is payment for services performed from Portugal, 0% under Article 7 or 15 is often used',
          'US LLC: if you own a foreign-owned disregarded LLC, the form depends on the structure and type of payment; do not complete W-8BEN mechanically',
          'if the platform does not let you select the Portugal treaty, check that the country of tax residence is stated as Portugal, not your passport country'
        ] }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'How to complete the key fields',
      content: [
        { kind: 'paragraph', text: 'Field names may differ in an online interview, but the logic is the same as on IRS Form W-8BEN.' },
        { kind: 'checklist', items: [
          'Line 1 / Name: first name and surname as in your passport or residence permit',
          'Line 2 / Country of citizenship: citizenship, for example Russian Federation, Brazil, Ukraine; this is not necessarily Portugal',
          'Line 3 / Permanent residence address: your real residential address in Portugal; do not use a PO Box or an intermediary’s address',
          'Line 4 / Mailing address: complete only if the postal address is different',
          'Line 5 / U.S. TIN: usually blank if you do not have an SSN/ITIN; some situations require an ITIN, but for most brokers and platforms a foreign TIN is enough',
          'Line 6a / Foreign tax identifying number: your Portuguese NIF',
          'Line 8 / Date of birth: date of birth in the platform’s format; on the paper IRS form this is usually MM-DD-YYYY',
          'Line 9 / Treaty country: Portugal, if you are a tax resident of Portugal',
          'Line 10 / Special rates and conditions: completed when the platform requires a specific treaty article and rate',
          'Signature: signed by the beneficial owner themselves; an agent/accountant only with authority'
        ] },
        { kind: 'warning', text: 'NIF on W-8BEN is not a “Portuguese equivalent of an SSN”, but a foreign TIN for the treaty claim. If you have only just moved and have not yet become a tax resident of Portugal, you cannot automatically claim Portugal treaty benefits.' }
      ]
    },
    {
      id: 'line-10-examples',
      title: 'Examples of Line 10 for the treaty rate',
      content: [
        { kind: 'paragraph', text: 'Line 10 is not always needed. Brokers often apply Article 10 automatically after you select Portugal. Amazon and some platforms may ask you to specify the article, rate and explanation.' },
        { kind: 'substeps', items: [
          {
            id: 'services',
            title: 'Services / freelance work from Portugal — 0%',
            content: [
              { kind: 'paragraph', text: 'For services physically performed from Portugal, Article 7 Business Profits or Article 15 Independent Personal Services is usually used. The idea: the income is taxed in Portugal if you do not have a permanent establishment / fixed base in the US.' },
              { kind: 'checklist', items: [
                'Article: 7 or 15 — depends on the platform’s wording',
                'Rate of withholding: 0%',
                'Type of income: services / business profits / independent personal services',
                'Explanation: resident of Portugal, no permanent establishment or fixed base in the United States, services performed outside the United States'
              ] }
            ]
          },
          {
            id: 'amazon-kdp',
            title: 'Amazon KDP royalties — usually 10%',
            content: [
              { kind: 'paragraph', text: 'KDP more often classifies payments to authors as royalties. For the Portugal–US treaty, check Article 12: the rate on royalties is usually limited to 10% of the gross amount. This is better than 30%, but not 0%.' },
              { kind: 'checklist', items: [
                'Article: 12',
                'Rate of withholding: 10%',
                'Type of income: royalties / copyright royalties',
                'Explanation: beneficial owner is a resident of Portugal under the Portugal–US income tax treaty'
              ] }
            ]
          },
          {
            id: 'ibkr-dividends',
            title: 'IBKR and US dividends — usually 15%',
            content: [
              { kind: 'paragraph', text: 'For US shares, the broker withholds tax at source on dividends. For a tax resident of Portugal, the treaty rate is usually 15% under Article 10 instead of the standard 30%.' },
              { kind: 'checklist', items: [
                'Article: 10',
                'Rate of withholding: 15%',
                'Type of income: dividends',
                'Line 10 is often not completed manually: IBKR applies the rate after a valid W-8BEN',
                'the tax withheld in the US is then taken into account in Portugal IRS as a foreign tax credit within Portuguese rules'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Do not copy someone else’s rate from the internet. The treaty rate depends on the type of income. For a resident of Portugal, Amazon KDP royalties are not the same as freelance services or dividends with a broker.' }
      ]
    },
    {
      id: 'validity-and-renewal',
      title: 'Validity period and when to renew',
      content: [
        { kind: 'paragraph', text: 'W-8BEN is valid from the date of signature until the last day of the third following calendar year. If signed on 15.04.2026, the form is valid until 31.12.2029. The platform will usually ask for renewal in advance.' },
        { kind: 'checklist', items: [
          'renew the form if your country of tax residence changes',
          'renew it if your name, address or NIF changes',
          'renew it if you receive a US green card, SSN/ITIN or become a US tax resident',
          'renew it if the income starts being paid to a company rather than to you personally',
          'save a PDF/screenshot of the tax interview and the submission date',
          'check the actual withholding in the annual tax statement: 1042-S, broker activity statement, Amazon tax report',
          'if 30% was withheld because the form had expired, the platform does not always issue a refund; sometimes a US tax filing is needed, which is expensive and slow'
        ] }
      ]
    },
    {
      id: 'portugal-tax',
      title: 'What to declare in Portugal afterwards',
      content: [
        { kind: 'paragraph', text: 'W-8BEN is not a Portuguese tax return. If you are a tax resident of Portugal, Portugal IRS taxes worldwide income: US income must be included in Modelo 3 IRS in the correct category.' },
        { kind: 'checklist', items: [
          'US dividends: usually Categoria E; a foreign tax credit may be available for the 15% withholding in the US',
          'capital gains on shares/ETFs: usually Categoria G; the US more often does not withhold tax, but Portugal taxes them under its own rules',
          'Amazon KDP royalties: classification depends on the facts — royalties, author income or self-employment; check with a contabilista',
          'freelance services: often Categoria B / recibos verdes, if the activity is carried out as self-employed',
          'US withholding does not replace IVA, Segurança Social and Portuguese IRS',
          'if you apply IFICI or another regime, W-8BEN is still completed separately for the US',
          'keep platform reports for at least 4 years, preferably 10 years for your personal archive'
        ] },
        { kind: 'warning', text: 'If you have NHR legacy, IFICI, empresa, US LLC, partnership income, stock options or large royalties, do not rely on the platform tax interview as tax advice. An error in W-8BEN may lead to under-withholding in the US or an incorrect declaration in Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting W-8BEN through the platform', amountEUR: 0, note: 'There is no IRS fee; the form is usually completed online with the withholding agent' },
    { label: 'Obtaining an ITIN, if genuinely needed', amountEUR: 0, note: 'The IRS does not charge a fee, but a Certified Acceptance Agent or document shipping may cost extra' },
    { label: 'Consultation with a contabilista / tax adviser', amountEURMin: 80, amountEURMax: 250, note: 'Typical one-off review of the treaty, IRS/Portugal filings and income classification' }
  ],
  sources: [
    {
      title: 'IRS: About Form W-8BEN',
      url: 'https://www.irs.gov/forms-pubs/about-form-w-8-ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: Instructions for Form W-8BEN',
      url: 'https://www.irs.gov/instructions/iw8ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'U.S. Treasury: Tax Treaties',
      url: 'https://home.treasury.gov/policy-issues/tax-policy/treaties',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: Portugal income tax treaty PDF',
      url: 'https://www.irs.gov/pub/irs-trty/portugal.pdf',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
