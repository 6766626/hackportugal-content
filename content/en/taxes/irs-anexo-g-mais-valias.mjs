export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — capital gains tax: property, shares, funds, crypto',
  tldr: 'Anexo G is filed together with the Modelo 3 IRS if, in the year, there were taxable mais-valias: sale of real estate, shares, ETFs, stakes, crypto held for <365 days. For tax residents of Portugal, gains on real estate are usually included in IRS at only 50% and taxed at the progressive rate; shares/ETFs/funds are more often taxed autonomously at 28%, but you can choose englobamento. The sale of a primeira habitação may be exempt if reinvested into a new HPP within 24 months before or 36 months after the sale.',
  tags: ['irs', 'anexo-g', 'capital-gains', 'taxes'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'When Anexo G is required',
      content: [
        { kind: 'paragraph', text: 'Anexo G is an appendix to the Modelo 3 IRS return for capital gains that are not automatically exempt. In April–June 2026 you file IRS for 2025 income; transactions in 2026 will be included in the 2027 return.' },
        { kind: 'checklist', items: [
          'You sold a flat, house, land or a share in real estate in Portugal or abroad.',
          'You sold shares, ETFs, bonds, fund units, company stakes, options/futures or other valores mobiliários (securities).',
          'You sold crypto-assets if the holding period was less than 365 days or the asset does not fall under an exemption.',
          'You received compensation for assignment of rights, an option, cessão onerosa or a similar operation listed in Código do IRS art. 10.',
          'You are a tax resident of Portugal: worldwide income is declared, including transactions with a foreign broker.',
          'You are a non-resident but sold Portuguese real estate or Portuguese assets: you may also need to file an IRS return in Portugal.'
        ] },
        { kind: 'warning', text: 'Anexo G does not replace CRS/DAC7 exchange. Finanças often sees foreign brokerage accounts, bank inflows and sales executed through notaries. “Broker abroad” does not mean “do not declare”.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Real estate: 50% of the gain in IRS',
      content: [
        { kind: 'paragraph', text: 'For a tax resident of Portugal, the taxable gain from the sale of real estate is usually calculated as: preço de venda − valor de aquisição corrigido − documented expenses. Then 50% of the positive result is included in IRS. This half is added to the rest of your income and taxed at progressive IRS rates, not a flat 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identification of the imóvel, purchase date, sale date, valor de aquisição, valor de realização.',
          'Valor de aquisição is the purchase price from the escritura, or the valor patrimonial tributário if it was higher and used for IMT/IS.',
          'If the property was held for more than 24 months, the purchase price is indexed by the desvalorização da moeda coefficient published annually.',
          'Expenses usually include IMT, Imposto do Selo on purchase, notary, registo predial, agency commission on sale, certificado energético, documented obras de valorização over the last 12 years.',
          'IMI, condomínio, mortgage interest and ordinary “living” repairs usually do not reduce the gain.',
          'If the property was inherited, the acquisition date and value are taken under inheritance rules: usually the valor patrimonial tributário at the date of transfer/stamp duty.',
          'If there are multiple sellers, each declares their share and their amounts.'
        ] },
        { kind: 'warning', text: 'Keep invoices with NIF, escritura, recibos, comprovativos de pagamento. For obras de valorização without a fatura with NIF, Finanças often does not accept the expense.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Exemption: primeira habitação and reinvestment',
      content: [
        { kind: 'paragraph', text: 'Gains from the sale of a habitação própria e permanente (HPP, main permanent home) can be fully or partially exempt if you reinvest the proceeds in the purchase, construction or improvement of another HPP in Portugal, the EU or the EEA with tax information exchange.' },
        { kind: 'checklist', items: [
          'The new property must become your habitação própria e permanente, not an Airbnb, second home or an investment property.',
          'Reinvestment period: 24 months before the sale or 36 months after the sale.',
          'In Anexo G Quadro 5, indicate the intention to reinvest, the amounts already reinvested and the amount you plan to reinvest.',
          'If there was a mortgage on the home sold, for the exemption calculation the valor de realização net of repayment of the loan linked to the HPP sold is considered.',
          'Partial reinvestment gives partial exemption: not all the mais-valia disappears.',
          'If you declared the intention but did not reinvest within the deadline, you will have to submit a replacement return or Finanças will assess IRS with juros compensatórios.',
          'For those aged 65 or over, or pensioners, there is a separate regime: reinvestment into an insurance contract, fundo de pensões or PPR within 6 months, subject to the conditions of Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” in the everyday sense is not an automatic relief. For IRS what matters is HPP status: actual permanent residence, address at Finanças, evidence of residence and compliance with reinvestment deadlines.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Shares, ETFs, funds and crypto: usually 28%',
      content: [
        { kind: 'paragraph', text: 'Sales of shares, ETFs, bonds, funds and stakes are reported in Anexo G, usually under valores mobiliários. The positive balance for the year is often taxed at the autonomous rate of 28%. You can choose englobamento — the profit will then be added to the rest of your income and taxed at progressive IRS rates; this is advantageous only with low overall income or to carry forward losses to future years.' },
        { kind: 'checklist', items: [
          'Enter each transaction or aggregate according to the permissible rules in the Modelo 3 instructions: purchase date, sale date, ISIN/code, country, purchase price, sale price, commissions.',
          'Broker commissions reduce the gain if they are related to purchase/sale and supported by a statement.',
          'Losses on securities can be offset against gains in the same category; carrying losses forward usually requires choosing englobamento.',
          'For assets held for less than 365 days, taxpayers with very high income may be subject to mandatory englobamento under the rules of the Código do IRS.',
          'ETFs and funds with foreign brokers do not become “invisible”: a tax resident of Portugal declares the worldwide result.',
          'Crypto-assets: gains from the sale of crypto that are not valores mobiliários are usually taxed at 28% if the holding period is less than 365 days; with 365+ days of holding, an exemption generally applies for ordinary crypto, subject to statutory exceptions.',
          'Crypto-to-crypto exchange under Portuguese rules is not always treated as a final taxable disposal in the same way as an exchange of crypto for fiat; check the operation type and the exchange’s reporting.'
        ] },
        { kind: 'warning', text: 'Do not confuse dividend/interest with capital gains. Dividends and interest usually do not go in Anexo G, but in Anexo E or Anexo J if the source is abroad.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file on the Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Gather documents', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda for real estate.',
              'Caderneta predial and certidão permanente, if available.',
              'IMT and Imposto do Selo calculation at purchase.',
              'Invoices with NIF for the agent, notary, registo, obras de valorização.',
              'Mortgage statement on loan repayment when selling an HPP.',
              'Broker annual statement: trades, ISIN, dates, currencies, commissions.',
              'Exchange rates to euro on the operation dates if the broker operates in USD/GBP/another currency.',
              'Reinvestment data: CPCV, escritura of the new HPP, payments, mortgage.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Fill in Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'In the Portal das Finanças open IRS → Entregar Declaração Modelo 3. Add Anexo G. For foreign-source income Anexo J is sometimes additionally required: for example, if the broker withheld foreign tax or the income is classified as foreign financial income.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma and englobamento', content: [
            { kind: 'paragraph', text: 'For securities the Portal allows you to simulate the return. Check the option without englobamento and with englobamento. With low income the progressive rate may be lower than 28%; with average and high income the autonomous 28% is often more favourable.' }
          ] },
          { id: 'submit', title: '4. Submit and keep evidence', content: [
            { kind: 'paragraph', text: 'The IRS return for 2025 is filed from 1 April to 30 June 2026. After submission keep the comprovativo, liquidação and all documents for at least 4 years; for real estate and reinvestment it is better to keep them for longer.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'checklist', items: [
          'They declare only money transferred into Portugal, not the fact of selling the asset. For a resident the transaction matters, not the money transfer.',
          'They think that real estate is always taxed at 28%. For a resident, usually 50% of the gain is taxed on the progressive IRS scale.',
          'They do not declare HPP reinvestment in Quadro 5 in the year of sale, but remember two years later.',
          'They include furniture, household appliances, condomínio and IMI as expenses — Finanças may disallow such amounts.',
          'They do not convert USD/GBP operations into euro at the correct rate.',
          'They mix up Anexo G, G1, E and J: exempt gains may go in G1, dividends — E/J, foreign financial income — often J.',
          'They forget about losses: if you do not declare them, they will not help reduce the tax.',
          'They file as “casado separado” without checking: for a couple, joint or separate filing can significantly change the outcome on capital gains.'
        ] },
        { kind: 'warning', text: 'If the transaction amount is large — real estate, stock options, sale of an ETF portfolio — do the calculation before filing the return. An IRS correction is possible, but interest and fines are cheaper to prevent than to argue with the Autoridade Tributária.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, forms and instructions for the Modelo 3 return',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 10, Mais-valias',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs10.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 43, Mais-valias: regras de determinação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, taxas especiais e autónomas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/ra/Pages/irs72ra_201901.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
