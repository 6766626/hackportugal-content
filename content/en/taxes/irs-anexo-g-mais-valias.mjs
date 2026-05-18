export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — capital gains tax: property, shares, funds, crypto',
  tldr: 'Anexo G is filed together with Modelo 3 IRS if, during the year, there were taxable mais-valias **from Portuguese sources**: sale of property in Portugal, shares/ETF/holdings through a PORTUGUESE broker, crypto <365 days. ⚠️ **Mais-valias from FOREIGN sources** (sale of property abroad, shares/ETF/funds through a foreign broker, etc.) for a Portuguese tax resident are declared in **Anexo J** (not Anexo G) — with the calculation for eliminating double taxation. For Portuguese tax residents, gains on property are usually included in IRS only at 50% and taxed at progressive rates; shares/ETF/funds are more often taxed autonomously at 28%, but you can choose englobamento. The sale of a primeira habitação may be exempt if reinvested in a new HPP within 24 months before or 36 months after the sale.',
  tags: ['irs', 'anexog', 'maisvalias', 'taxes'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'When Anexo G is needed',
      content: [
        { kind: 'paragraph', text: 'Anexo G is an attachment to Modelo 3 IRS for capital gains from **Portuguese sources** that are not automatically exempt. In April–June 2026 you file IRS for 2025 income; 2026 transactions will go into the 2027 return. **Mais-valias from foreign sources** go in Anexo J.' },
        { kind: 'checklist', items: [
          'Anexo G: sale of property in Portugal (or a share in it).',
          'Anexo G: sale of Portuguese shares/ETF/bonds/units/holdings/options through a PORTUGUESE broker.',
          'Anexo G: sale of crypto-assets by a resident if the holding period is < 365 days or the asset does not fall under an exemption.',
          'Anexo G: compensation for assignment of rights, option, cessão onerosa and similar transactions under Código do IRS art. 10.',
          '⚠️ **Anexo J** (not G): sale of PROPERTY ABROAD by a Portuguese resident.',
          '⚠️ **Anexo J** (not G): sale of shares/ETF/funds through a FOREIGN broker (Interactive Brokers, Schwab, Tinkoff, Trade Republic outside PT, etc.).',
          '⚠️ **Anexo J** (not G): foreign capital gain of any type (dividends and interest also go in Anexo J, but in other sections).',
          'You are non-resident, but sold Portuguese property or Portuguese assets: also Anexo G in the Portuguese IRS.'
        ] },
        { kind: 'warning', text: 'Anexo G/J does not replace CRS/DAC7 exchange. Finanças often sees foreign brokerage accounts, bank receipts and sales through notaries. “Broker abroad” does not mean “do not declare”. Foreign sources mean Anexo J, indicating the source country and tax withheld abroad, for the elimination of double taxation.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Property: 50% of the gain in IRS',
      content: [
        { kind: 'paragraph', text: 'For a Portuguese tax resident, the taxable gain from the sale of property is usually calculated as follows: preço de venda − valor de aquisição corrigido − documented expenses. Then 50% of the positive result is included in IRS. This half is added to the rest of the income and taxed at progressive IRS rates, not at a fixed 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: identification of the imóvel, purchase date, sale date, valor de aquisição, valor de realização.',
          'Valor de aquisição is the purchase price from the escritura, or the valor patrimonial tributário if it was higher and was used for IMT/IS.',
          'If the property was held for more than 24 months, the purchase price is indexed by the desvalorização da moeda coefficient published annually.',
          'Expenses usually include IMT, Imposto do Selo on purchase, notary, registo predial, estate agent commission on sale, certificado energético, documented obras de valorização from the last 12 years.',
          'IMI, condomínio, mortgage interest and ordinary repairs “for living” usually do not reduce the gain.',
          'If the property was inherited, the acquisition date and value are taken under inheritance rules: usually the valor patrimonial tributário on the date of transfer/stamp duty.',
          'If there are several sellers, each declares their share and their own amounts.'
        ] },
        { kind: 'warning', text: 'Keep invoices with NIF, escritura, recibos, comprovativos de pagamento. For obras de valorização without an invoice with NIF, Finanças often does not accept the expense.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Exemption: primeira habitação and reinvestment',
      content: [
        { kind: 'paragraph', text: 'The gain from the sale of habitação própria e permanente (HPP, main permanent home) may be fully or partially exempt if you reinvest the proceeds in the purchase, construction or improvement of another HPP in Portugal, the EU or the EEA with exchange of tax information.' },
        { kind: 'checklist', items: [
          'The new property must become your habitação própria e permanente, not Airbnb, a second home or an investment property.',
          'Reinvestment deadline: 24 months before the sale or 36 months after the sale.',
          'In Anexo G Quadro 5, you indicate the intention to reinvest, amounts already reinvested and the amount you plan to reinvest.',
          'If there was a mortgage on the sold home, for the exemption calculation the valor de realização is taken after deducting repayment of the loan linked to the HPP being sold.',
          'Partial reinvestment gives a partial exemption: not all of the mais-valia disappears.',
          'If you declared an intention but did not reinvest within the deadline, you will have to file a replacement return or Finanças will make an additional IRS assessment with juros compensatórios.',
          'For people over 65 or pensioners there is a separate regime: reinvestment in an insurance contract, fundo de pensões or PPR within 6 months, subject to the conditions of Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” in the everyday sense is not the same as an automatic relief. For IRS, what matters is HPP status: actual permanent residence, address in Finanças, proof of residence and compliance with the reinvestment deadlines.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Shares, ETF, funds and crypto: usually 28%',
      content: [
        { kind: 'paragraph', text: 'The sale of shares, ETF, bonds, funds and holdings is reported in Anexo G, usually in the valores mobiliários section. The positive balance for the year is often taxed at the autonomous rate of 28%. You can choose englobamento — then the profit is added to the rest of the income and taxed at progressive IRS rates; this is beneficial only with low overall income or to offset losses in future years.' },
        { kind: 'checklist', items: [
          'Enter each transaction or aggregate according to the permitted rules in the Modelo 3 instructions: purchase date, sale date, ISIN/code, country, purchase price, sale price, commissions.',
          'Broker commissions reduce the gain if they are linked to the purchase/sale and supported by a statement.',
          'Losses on securities can be offset against gains in the same category; carrying losses forward usually requires choosing englobamento.',
          'For assets held for less than 365 days, taxpayers with very high income may be subject to mandatory englobamento under the Código do IRS rules.',
          'ETF and funds at foreign brokers do not become “invisible”: a Portuguese tax resident declares worldwide results.',
          'Crypto-assets: gains from the sale of crypto that are not valores mobiliários are usually taxed at 28% if held for less than 365 days; if held for 365+ days, ordinary crypto is exempt, except for legal exclusions.',
          'Crypto-to-crypto exchange under Portuguese rules is not always treated as a final taxable disposal in the same way as exchanging crypto for fiat; check the transaction type and the exchange reporting.'
        ] },
        { kind: 'warning', text: 'Do not confuse dividend/interest with capital gains. Dividends and interest usually do not go in Anexo G, but in Anexo E or Anexo J if the source is abroad.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file in Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Gather documents', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda for property.',
              'Caderneta predial and certidão permanente, if available.',
              'IMT and Imposto do Selo calculation on purchase.',
              'Invoices with NIF for the agent, notary, registo, obras de valorização.',
              'Mortgage certificate for loan repayment on sale of the HPP.',
              'Broker annual statement: trades, ISIN, dates, currencies, commissions.',
              'Exchange rates into euros on the transaction dates if the broker is in USD/GBP/another currency.',
              'Reinvestment details: CPCV, escritura for the new HPP, payments, mortgage.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Fill in Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'In Portal das Finanças, open IRS → Entregar Declaração Modelo 3. Add Anexo G. For foreign income, Anexo J is sometimes also needed: for example, if the broker withheld foreign tax or the income is classified as foreign financial income.' }
          ] },
          { id: 'simulate', title: '3. Compare tributação autónoma and englobamento', content: [
            { kind: 'paragraph', text: 'For securities, the Portal allows you to simulate the return. Check the version without englobamento and with englobamento. With low income, the progressive rate may be below 28%; with middle and high income, the autonomous 28% is often more favourable.' }
          ] },
          { id: 'submit', title: '4. Submit and keep evidence', content: [
            { kind: 'paragraph', text: 'The IRS return for 2025 is filed from 1 April to 30 June 2026. After submission, keep the comprovativo, liquidação and all documents for at least 4 years; for property and reinvestment it is better to keep them longer.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Declaring only the money brought into Portugal, not the actual sale of the asset. For a resident, the transaction matters, not the money transfer.',
          'Assuming property is always taxed at 28%. For a resident, usually 50% of the gain is taxed under the progressive IRS scale.',
          'Not declaring HPP reinvestment in Quadro 5 in the year of sale, then remembering 2 years later.',
          'Including furniture, household appliances, condomínio and IMI as expenses — Finanças may disallow such amounts.',
          'Not converting USD/GBP transactions into euros at the correct rate.',
          'Mixing up Anexo G, G1, E and J: exempt gains may go in G1, dividends in E/J, foreign financial income often in J.',
          'Forgetting losses: if they are not declared, they will not help reduce tax.',
          'Filing as “casado separado” without checking: for a couple, joint or separate filing can significantly change the final result on capital gains.'
        ] },
        { kind: 'warning', text: 'If the transaction amount is large — property, stock options, sale of an ETF portfolio — do the calculation before filing the return. Correcting IRS is possible, but interest and penalties are cheaper to prevent than to dispute with Autoridade Tributária.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, Modelo 3 return forms and instructions',
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
      title: 'Código do IRS — art. 43, Mais-valias: determination rules',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, special and autonomous rates',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/ra/Pages/irs72ra_201901.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
