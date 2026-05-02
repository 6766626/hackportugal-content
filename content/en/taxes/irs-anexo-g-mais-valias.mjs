export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — capital gains tax: property, shares, funds, crypto',
  tldr: 'Anexo G is submitted together with Modelo 3 IRS if there were taxable mais-valias during the year: sale of real estate, shares, ETFs, holdings, crypto held for <365 days. For Portuguese tax residents, gains on real estate are usually included in IRS only at 50% and taxed at progressive rates; shares/ETFs/funds are more often taxed autonomously at 28%, but you can choose englobamento. The sale of a primeira habitação may be exempt if reinvested in a new HPP within 24 months before or 36 months after the sale.',
  tags: ['irs', 'anexog', 'maisvalias', 'taxes'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'When Anexo G is needed',
      content: [
        { kind: 'paragraph', text: 'Anexo G is an attachment to the Modelo 3 IRS return for capital gains that are not automatically exempt. In April–June 2026 you file IRS for 2025 income; 2026 transactions will go into the 2027 return.' },
        { kind: 'checklist', items: [
          'You sold a flat, house, land or a share in real estate in Portugal or abroad.',
          'You sold shares, ETFs, bonds, fund units, company stakes, options/futures or other valores mobiliários.',
          'You sold crypto-assets if the holding period was less than 365 days or the asset does not fall under an exemption.',
          'You received compensation for an assignment of rights, an option, cessão onerosa or a similar transaction listed in Código do IRS art. 10.',
          'You are a Portuguese tax resident: worldwide income is declared, including transactions with a foreign broker.',
          'You are a non-resident, but sold Portuguese real estate or Portuguese assets: an IRS return may also be required in Portugal.'
        ] },
        { kind: 'warning', text: 'Anexo G does not replace CRS/DAC7 exchange. Finanças often sees foreign brokerage accounts, bank receipts and sales through notaries. “Broker abroad” does not mean “do not declare”.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Real estate: 50% of the gain in IRS',
      content: [
        { kind: 'paragraph', text: 'For a Portuguese tax resident, the taxable gain from selling real estate is usually calculated as follows: preço de venda − valor de aquisição corrigido − documented expenses. Then 50% of the positive result is included in IRS. This half is added to other income and taxed at progressive IRS rates, not at a fixed 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identification of the imóvel, purchase date, sale date, valor de aquisição, valor de realização.',
          'Valor de aquisição is the purchase price from the escritura, or the valor patrimonial tributário if it was higher and was used for IMT/IS.',
          'If the property was held for more than 24 months, the purchase price is indexed using the desvalorização da moeda coefficient published annually.',
          'Expenses usually include IMT, Imposto do Selo on purchase, notary, registo predial, estate agent commission on sale, certificado energético, and documented obras de valorização from the last 12 years.',
          'IMI, condomínio, mortgage interest and ordinary “day-to-day” repairs usually do not reduce the gain.',
          'If the property was inherited, the acquisition date and value are taken under inheritance rules: usually the valor patrimonial tributário on the date of transfer/stamp duty.',
          'If there are several sellers, each declares their share and their amounts.'
        ] },
        { kind: 'warning', text: 'Keep invoices with NIF, escritura, recibos, comprovativos de pagamento. For obras de valorização without an invoice with NIF, Finanças often does not accept the expense.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Exemption: primeira habitação and reinvestment',
      content: [
        { kind: 'paragraph', text: 'The gain from selling habitação própria e permanente (HPP, main permanent home) may be fully or partially exempt if you reinvest the proceeds in the purchase, construction or improvement of another HPP in Portugal, the EU or the EEA with tax information exchange.' },
        { kind: 'checklist', items: [
          'The new property must become your habitação própria e permanente, not an Airbnb, second home or investment property.',
          'Reinvestment period: 24 months before the sale or 36 months after the sale.',
          'In Anexo G Quadro 5, you state the intention to reinvest, the amounts already reinvested and the amount you plan to reinvest.',
          'If there was a mortgage on the home sold, the exemption calculation uses the valor de realização after deducting repayment of the loan linked to the HPP being sold.',
          'Partial reinvestment gives a partial exemption: not all of the mais-valia disappears.',
          'If you declared an intention but did not reinvest within the deadline, you will have to submit a replacement return or Finanças will assess additional IRS with juros compensatórios.',
          'For people over 65 or pensioners, there is a separate regime: reinvestment in an insurance contract, fundo de pensões or PPR within 6 months, subject to the conditions of Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” in the everyday sense is not the same as automatic relief. For IRS, what matters is HPP status: actual permanent residence, address in Finanças, proof of residence and meeting the reinvestment deadlines.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Shares, ETFs, funds and crypto: usually 28%',
      content: [
        { kind: 'paragraph', text: 'The sale of shares, ETFs, bonds, funds and holdings is reported in Anexo G, usually in the valores mobiliários section. The positive balance for the year is often taxed at the autonomous rate of 28%. You can choose englobamento — then the gain is added to your other income and taxed at progressive IRS rates; this is only beneficial with low overall income or to offset losses in future years.' },
        { kind: 'checklist', items: [
          'Report each transaction or aggregate under the permitted rules in the Modelo 3 instructions: purchase date, sale date, ISIN/code, country, purchase price, sale price, commissions.',
          'Broker commissions reduce the gain if they are linked to the purchase/sale and supported by a statement.',
          'Losses on securities can be offset against gains in the same category; carrying losses forward usually requires choosing englobamento.',
          'For assets held for less than 365 days, taxpayers with very high income may be subject to mandatory englobamento under Código do IRS rules.',
          'ETFs and funds with foreign brokers do not become “invisible”: a Portuguese tax resident declares the worldwide result.',
          'Crypto-assets: gains from selling crypto that are not valores mobiliários are usually taxed at 28% if the holding period is less than 365 days; for ordinary crypto held for 365+ days there is an exemption, except for legal exceptions.',
          'A crypto-to-crypto exchange under Portuguese rules is not always treated as a final taxable disposal in the same way as a crypto-to-fiat exchange; check the type of transaction and the exchange’s reporting.'
        ] },
        { kind: 'warning', text: 'Do not confuse dividend/interest with capital gains. Dividends and interest usually go not in Anexo G, but in Anexo E or Anexo J if the source is abroad.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file in Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Gather the documents', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda for real estate.',
              'Caderneta predial and certidão permanente, if available.',
              'IMT and Imposto do Selo calculation on purchase.',
              'Invoices with NIF for the agent, notary, registo, obras de valorização.',
              'Mortgage certificate showing loan repayment on the sale of the HPP.',
              'Broker annual statement: trades, ISIN, dates, currencies, commissions.',
              'Exchange rates into euros on the transaction dates if the broker is in USD/GBP/another currency.',
              'Reinvestment details: CPCV, escritura for the new HPP, payments, mortgage.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Complete Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'In Portal das Finanças, open IRS → Entregar Declaração Modelo 3. Add Anexo G. For foreign income, Anexo J is sometimes also needed: for example, if the broker withheld foreign tax or the income is classified as foreign financial income.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma and englobamento', content: [
            { kind: 'paragraph', text: 'For securities, Portal allows you to simulate the return. Check the version without englobamento and with englobamento. With low income, the progressive rate may be lower than 28%; with medium and high income, the autonomous 28% is often more advantageous.' }
          ] },
          { id: 'submit', title: '4. Submit and keep evidence', content: [
            { kind: 'paragraph', text: 'The IRS return for 2025 is filed from 1 April to 30 June 2026. After submission, keep the comprovativo, liquidação and all documents for at least 4 years; for real estate and reinvestment, it is better to keep them for longer.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'checklist', items: [
          'Declaring only the money brought into Portugal, not the sale of the asset itself. For a resident, the transaction matters, not the money transfer.',
          'Assuming that real estate is always taxed at 28%. For a resident, 50% of the gain is usually taxed on the progressive IRS scale.',
          'Not declaring HPP reinvestment in Quadro 5 in the year of sale, then remembering 2 years later.',
          'Including furniture, household appliances, condomínio and IMI as expenses — Finanças may disallow these amounts.',
          'Not converting USD/GBP transactions into euros at the correct rate.',
          'Mixing up Anexo G, G1, E and J: exempt gains may go in G1, dividends in E/J, foreign financial income often in J.',
          'Forgetting about losses: if they are not declared, they will not help reduce tax.',
          'Filing as “casado separado” without checking: for a couple, a joint or separate return can significantly change the final result for capital gains.'
        ] },
        { kind: 'warning', text: 'If the transaction amount is large — real estate, stock options, sale of an ETF portfolio — do the calculation before submitting the return. Correcting IRS is possible, but interest and penalties are cheaper to prevent than to dispute with Autoridade Tributária.' }
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
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs10.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 43, Mais-valias: determination rules',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, special and autonomous rates',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs72.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
