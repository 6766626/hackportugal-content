export default {
  editorialVoice: 'hackportugal',
  id: 'emprestimo-jovem-banco-d',
  categoryId: 'banking',
  title: 'Empréstimo Jovem: state-guaranteed loans for young people up to age 35',
  tldr: 'In 2026, “Empréstimo Jovem” most often means Linha Jovem Habitação: a mortgage for a first permanent flat/house for people aged 18–35, with a state guarantee of up to 15% of the price so that the bank can finance up to 100% of the purchase. The property limit is €450,000, tax residence in Portugal is required, and you must not own another home. The rate is not subsidised: the bank assesses it as a normal mortgage; in 2026 the indicative range is around 3.3–4.0% TAN/TAEG. For businesses there are separate IFD/BPF/IAPMEI lines, but this is not “money for everyone under 35”.',
  tags: ['mortgage', 'jovem', 'guarantee', 'bank'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What you actually get: a guarantee, not a gift',
      content: [
        { kind: 'paragraph', text: 'Linha Jovem Habitação is a state guarantee for part of a mortgage loan to buy a primeira habitação própria e permanente. The aim is to close the gap between the usual bank limit of 80–90% LTV and buying without a large deposit.' },
        { kind: 'paragraph', text: 'The state may guarantee up to 15% of the transaction value. This allows the bank to grant a loan of up to 100% of the purchase price, but the decision is still made by the bank: it checks income, contrato de trabalho, IRS, debt burden, property valuation and the client’s risk.' },
        { kind: 'warning', text: 'This is not a subsidised interest rate and not a grant. If you stop paying, the bank will recover the debt from you; the state guarantee protects the bank, it does not release the buyer from the loan.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who qualifies in 2026',
      content: [
        { kind: 'checklist', items: [
          'Age from 18 to 35 inclusive on the date the credit agreement is signed',
          'Tax residence in Portugal: NIF with morada fiscal in PT and, as a rule, IRS/verified income',
          'Purchase of a first habitação própria e permanente — housing for your own permanent residence',
          'The buyer does not own another residential property',
          'Purchase price no higher than €450,000',
          'Income no higher than the programme’s set limit: as a guide, up to the 8th escalão IRS',
          'No overdue debts to Autoridade Tributária and Segurança Social',
          'No similar state guarantee used previously',
          'The bank approves the mortgage under its own stress test and taxa de esforço rules'
        ] },
        { kind: 'paragraph', text: 'Citizenship in itself is not the main criterion. For an expat, lawful stay, tax residence, provable income and the bank’s willingness to lend to a non-resident/new resident matter more. In practice, banks more often require a residence permit, contrato de trabalho sem termo or stable recibos verdes/foreign income with documents.' }
      ]
    },
    {
      id: 'numbers',
      title: 'Limits, rates and real money',
      content: [
        { kind: 'paragraph', text: 'The programme’s key limit is property up to €450,000. The state guarantee covers up to 15% of the price, but it does not pay for IMT, Imposto do Selo, escritura, avaliação, seguros or bank fees.' },
        { kind: 'paragraph', text: 'In 2026, market mortgage offers for young clients are usually roughly in the range of 3.3–4.0% TAN/TAEG, depending on Euribor/fixed rate, spread, life insurance, domiciliação de ordenado and cross-selling. The specific rate is only in the bank’s FINE.' },
        { kind: 'checklist', items: [
          'Example: a flat for €300,000',
          'A normal 90% mortgage would require around €30,000 as a deposit',
          'With the state guarantee, the bank can theoretically finance up to €300,000',
          'But the buyer still pays for the valuation, escritura, registos, insurance and bank fees',
          'If you are over 35 or this is not your first home, the line does not apply',
          'If the bank valuation is below the purchase price, the bank may reduce the loan amount'
        ] },
        { kind: 'warning', text: 'Do not sign a CPCV with a 10–20% sinal until the bank has confirmed pré-aprovação in writing and the possibility of using the state guarantee. Losing the sinal is a common risk if the bank refuses.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through a bank',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-docs', title: '1. Prepare the document pack', content: [
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit',
              'NIF and proof of morada fiscal in Portugal',
              'Declaração de IRS and nota de liquidação, if you have already filed IRS',
              'The last 3–6 recibos de vencimento or recibos verdes',
              'Declaração da entidade patronal / contrato de trabalho',
              'Bank account statements for 3–6 months',
              'Mapa de responsabilidades de crédito from Banco de Portugal',
              'Caderneta predial and certidão permanente for the property, if already chosen'
            ] }
          ] },
          { id: 'ask-banks', title: '2. Compare banks connected to the line', content: [
            { kind: 'paragraph', text: 'Check not only CGD and Millennium bcp: the list of banks under the state guarantee may be updated. Ask for FINE for fixed, variable and mixed-rate scenarios.' }
          ] },
          { id: 'preapproval', title: '3. Get pré-aprovação before the CPCV', content: [
            { kind: 'paragraph', text: 'Pré-aprovação is not the same as final credit approval, but it reduces risk. Clarify in writing: whether the bank applies Linha Jovem Habitação, what LTV it allows, which seguros are mandatory, and what maximum taxa de esforço applies.' }
          ] },
          { id: 'valuation', title: '4. Wait for avaliação and final approval', content: [
            { kind: 'paragraph', text: 'The bank orders a property valuation. If the avaliação is below the price, the loan amount may be calculated from the valuation rather than the price in the CPCV.' }
          ] }
        ] }
      ]
    },
    {
      id: 'business-lines',
      title: 'What if you need a business loan',
      content: [
        { kind: 'paragraph', text: 'For entrepreneurs, “jovem” is a separate story. Through IFD/Banco Português de Fomento, IAPMEI, guarantee societies and banks, there are linhas de crédito for PME, start-ups, inovação, empreendedorismo and mutual guarantee. They are not automatic consumer loans for everyone under 35.' },
        { kind: 'checklist', items: [
          'A business plan and atividade aberta / empresa are required',
          'The bank checks the project’s viabilidade económica',
          'Capitais próprios or a guarantee from the entrepreneur is often required',
          'A mutual guarantee society’s guarantee reduces the bank’s risk, but does not cancel the debt',
          'Conditions depend on the specific linha, CAE, region and company size',
          'IAPMEI is useful for PME status, programas de financiamento and advice',
          'IFD/BPF publish open lines and financial intermediaries'
        ] },
        { kind: 'warning', text: 'Do not confuse the mortgage Linha Jovem Habitação with loans for young entrepreneurs. They have different regulations, banks, spending purposes and selection criteria.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'What matters for an expat',
      content: [
        { kind: 'checklist', items: [
          'First update your morada fiscal in Finanças: without tax residence, the programme usually will not work',
          'Check that you have no debts to AT/Segurança Social',
          'If your income is from abroad, prepare tax returns, payslips, employment contract and translations',
          'Get a Mapa de responsabilidades de crédito, even if you have no loans in PT',
          'Compare spread and TAEG, not the advertised rate',
          'Clarify the cost of seguro de vida: for young people it is cheaper, but the price rises with medical conditions',
          'Do not treat 100% financing as a guaranteed scenario: the bank may ask for 5–10% of your own funds',
          'Check IMT/IS reliefs for young people separately: this is a tax measure, not part of the loan'
        ] },
        { kind: 'paragraph', text: 'A good strategy is to get two pré-aprovações from different banks and only then make an offer to the seller. For a foreigner with a short history in Portugal, this often determines the outcome of the deal.' }
      ]
    }
  ],
  costs: [
    { label: 'Property valuation by the bank', amountEURMin: 200, amountEURMax: 350, note: 'Usually paid by the buyer; the amount depends on the bank and the property' },
    { label: 'Opening/processing the mortgage application', amountEURMin: 250, amountEURMax: 600, note: 'Fees vary; check the bank’s FINE and preçário' },
    { label: 'Escritura, registo and notarial costs', amountEURMin: 700, amountEURMax: 1200, note: 'Excluding IMT and Imposto do Selo; depends on the Casa Pronta/notary channel' },
    { label: 'State guarantee under Linha Jovem Habitação', amountEUR: 0, note: 'There is usually no separate guarantee fee for the buyer, but the loan rate remains market-based' }
  ],
  sources: [
    { title: 'IFD — financial instruments and financing lines', url: 'https://www.ifd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IAPMEI — financing, PME and entrepreneurship', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 44/2024 — personal state guarantee for the acquisition of a first habitação própria e permanente', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/44-2024-870793703', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito à habitação and FINE', url: 'https://clientebancario.bportugal.pt/pt-pt/credito-habitacao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
