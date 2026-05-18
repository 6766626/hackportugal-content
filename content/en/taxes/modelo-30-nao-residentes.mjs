export default {
  editorialVoice: 'hackportugal',
  id: 'modelo-30-nao-residentes',
  categoryId: 'taxes',
  title: 'Modelo 30 — monthly declaration of payments to non-residents',
  tldr: 'Modelo 30 is filed with Finanças when an empresa, ENI or atividade pays income to a non-resident: a foreign contractor, landlord, consultant, rights holder, creditor.\n\nThe deadline is by the end of the 2nd month after payment: payment on 10/04/2026 → declaration by 30/06/2026. It is filed even when applying a Convenção para Evitar Dupla Tributação via Modelo 21-RFI. Late filing usually risks a coima of €150 to €3,750 under the RGIT.',
  tags: ['modelo30', 'non-residents', 'irs', 'irc', 'withholding'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Modelo 30 is and when it comes up',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 is a monthly declaração de rendimentos pagos ou colocados à disposição de sujeitos passivos não residentes. Put simply: a report to Finanças on income that a Portuguese payer has paid to a person or company without tax residence in Portugal.' },
        { kind: 'paragraph', text: 'For an expat, this usually arises not in private life, but when you have a sociedade, ENI or atividade aberta: you have paid a foreign developer, marketer, consultant, lawyer, landlord, interest, royalties, dividends or other income which, under Portuguese rules, is considered non-resident income.' },
        { kind: 'checklist', items: [
          'A Portuguese Lda pays a freelancer from Spain, the USA, Brazil or Ukraine for services.',
          'Atividade / recibos verdes pays a foreign contractor as a business expense.',
          'A Portuguese company pays rent to a non-resident landlord for a property in Portugal.',
          'A company pays dividends/shareholder remuneration to a non-resident shareholder.',
          'There is interest on a loan to a non-resident.',
          'There are royalties, licences, software/IP payments to a non-resident.',
          'You applied a reduced rate or exemption under a double tax treaty — reporting is still usually required.',
          'The payment was not made in cash, but by set-off/withholding/colocação à disposição — a Modelo 30 event may still arise.'
        ] }
      ]
    },
    {
      id: 'who-files',
      title: 'Who is required to file',
      content: [
        { kind: 'paragraph', text: 'The obligation lies with the entidade devedora or entidade pagadora: the party that must pay the income or actually pays it. This may be a company, associação, condomínio, ENI or an individual with atividade, if the payment relates to their economic activity.' },
        { kind: 'paragraph', text: 'An ordinary employee without atividade who simply buys a service from a foreigner for personal needs does not, as a rule, become a regular Modelo 30 filer. But if you have a NIF with atividade aberta or an empresa, your accountant should check every foreign payment.' },
        { kind: 'warning', text: 'Do not confuse Modelo 30 with IVA recapitulativa / VIES. VIES reports intra-EU transactions for IVA. Modelo 30 reports non-resident income for IRS/IRC and retenção na fonte. Sometimes both reports are needed for the same transaction.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Deadlines: monthly, but with a 2-month lag',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 is filed by the end of the 2nd month following the month of payment, vencimento, liquidação, apuramento or colocação à disposição of the income. Do not wait for the annual IRS/IRC — this is specifically a monthly obligation.' },
        { kind: 'checklist', items: [
          'Payment on 05/01/2026 → file by 31/03/2026.',
          'Payment on 29/02/2026 → file by 30/04/2026.',
          'Payment on 10/04/2026 → file by 30/06/2026.',
          'Payment on 31/12/2026 → file by 28/02/2027.',
          'If there were several payments to non-residents in the month, they are included in the declaration for the relevant month.',
          'If there were no payments to non-residents, a nil Modelo 30 is usually not filed.',
          'If the deadline falls on a weekend/public holiday, the general rules for moving tax deadlines to the next working day apply.'
        ] },
        { kind: 'warning', text: 'Practical mistake: using the invoice date as the reference point. For Modelo 30, what matters is not only the factura, but the moment of pagamento, vencimento or colocação à disposição. Agree with your accountant which date they use in your situation.' }
      ]
    },
    {
      id: 'withholding-and-treaties',
      title: 'Retenção na fonte and double tax treaties',
      content: [
        { kind: 'paragraph', text: 'Modelo 30 does not replace tax withholding. If, under Portuguese rules, IRS/IRC must be withheld from non-resident income, the payer withholds retenção na fonte, pays it to Finanças and files Modelo 30 separately.' },
        { kind: 'paragraph', text: 'The rate depends on the type of income, the recipient’s status and the tax treaty. In typical cases, non-residents often see 25% for business/professional income, rents, royalties or corporate income, but dividends to individuals may be at 28%, while a treaty may reduce the rate or provide an exemption. Do not use one rate for all payments.' },
        { kind: 'checklist', items: [
          'Check the recipient’s tax residence on the payment date.',
          'Determine the type of income: services, rent, royalties, interest, dividends, pensions, commissions, etc.',
          'Check whether the income is considered Portugal-source income.',
          'Check the applicable Código do IRS or Código do IRC.',
          'If there is a Convenção para Evitar Dupla Tributação, obtain Modelo 21-RFI before payment or before applying the reduced rate.',
          'Keep the recipient’s certificado de residência fiscal if it is required.',
          'If the treaty documents are not ready, it is safer to withhold tax at the domestic rate and then deal with refund/regularização.',
          'In Modelo 30, report not only the income amount, but also the tax withheld or the basis for not withholding.'
        ] },
        { kind: 'warning', text: 'Modelo 21-RFI is not a “declaration instead of Modelo 30”. It is a document for applying treaty relief. Even when tax is not withheld because of a treaty, Modelo 30 usually remains the payer’s reporting obligation.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file in Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Collect the payment data', content: [
            { kind: 'checklist', items: [
              'NIF of the Portuguese payer.',
              'Month and year of payment or colocação à disposição.',
              'Name/company name of the non-resident.',
              'Recipient’s country of tax residence.',
              'Recipient’s foreign tax identification number, if any.',
              'Income type according to the Modelo 30 tables.',
              'Gross amount before withholdings.',
              'Amount of retenção na fonte, if withheld.',
              'Basis for the reduced rate or exemption, if a treaty was applied.',
              'Modelo 21-RFI / certificado de residência fiscal details, if used.'
            ] }
          ] },
          { id: 'submit-online', title: '2. File the declaration online', content: [
            { kind: 'paragraph', text: 'Log in to Portal das Finanças with your NIF and senha or via Chave Móvel Digital. The section is usually in Entregar > Declarações > Modelo 30 or via the search on the Finanças website. The declaration can be completed online or submitted as a file if the accounting software generates XML.' }
          ] },
          { id: 'save-proof', title: '3. Save the evidence', content: [
            { kind: 'checklist', items: [
              'Comprovativo de entrega Modelo 30.',
              'A copy of the invoice/contract with the non-resident.',
              'Bank payment confirmation.',
              'Comprovativo de pagamento retenção na fonte, if there was one.',
              'Modelo 21-RFI and certificado de residência fiscal.',
              'Correspondence about the recipient’s tax status.',
              'Rate calculation and reference to the treaty/article, if you applied a relief.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'mistakes',
      title: 'Common mistakes and penalties',
      content: [
        { kind: 'checklist', items: [
          'Not filing Modelo 30 because “the supplier issued an invoice without IVA”. IVA and IRS/IRC reporting are different regimes.',
          'Assuming that if the contractor is from the EU, Modelo 30 is not needed. EU status by itself does not cancel the obligation.',
          'Paying the gross amount to a non-resident when retenção na fonte should have been withheld.',
          'Applying a treaty without Modelo 21-RFI or without confirmation of tax residence.',
          'Reporting by invoice date instead of the payment/colocação à disposição date.',
          'Forgetting payments to non-resident founders: dividends, interest, management fees.',
          'Not reconciling Modelo 30 with accounting expenses and bank payments.',
          'Thinking that a personal NIF without an empresa is always safe: if atividade is open and the payment is connected to it, the obligation may arise.'
        ] },
        { kind: 'paragraph', text: 'For failing to file or late filing of a tax declaration, the RGIT usually provides for a coima of €150 to €3,750. If the error relates to tax that was not withheld, the risk amount is higher: Finanças may demand the tax itself, juros compensatórios and separate penalties.' },
        { kind: 'warning', text: 'If you have found missed Modelo 30 filings for previous months, do not wait for an inspection. Ask a contabilista to file the missing declaration/declaração de substituição and separately check retenção na fonte. Voluntary correction is usually cheaper than a notice from AT.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing Modelo 30 with Finanças', amountEUR: 0, note: 'There is no state fee; filing via Portal das Finanças is free.' },
    { label: 'Accountant preparation of one declaration', amountEURMin: 20, amountEURMax: 75, note: 'Market guide for small businesses; complex treaty cases cost more.' },
    { label: 'Penalty for non-filing/late filing of the declaration', amountEURMin: 150, amountEURMax: 3750, note: 'Typical coima range under RGIT art. 116; the final amount depends on the facts and the taxpayer’s conduct.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Modelo 30: income paid to non-residents',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — Decreto-Lei 442-A/88, reporting obligations and retenção na fonte',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34464575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — double tax treaties and RFI forms',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/convencoes_evitar_dupla_tributacao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime Geral das Infrações Tributárias — coimas for missing declarations',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2001-34459875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
