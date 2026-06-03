export default {
  editorialVoice: 'hackportugal',
  id: 'credito-pessoal-tan-taeg',
  categoryId: 'banking',
  title: 'Crédito Pessoal: consumer credit, TAN, TAEG and how to compare',
  tldr: 'In Portugal, crédito pessoal is regulated by DL 133/2009: it is usually consumer credit from €200 to €75,000, not a mortgage. Compare TAEG, not TAN: it includes interest, fees, taxes and mandatory services. You have 14 calendar days to withdraw from the contract. Banco de Portugal publishes maximum TAEG quarterly and provides an official comparador at clientebancario.bportugal.pt.',
  tags: ['credit', 'taeg', 'loan', 'banks'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-personal-credit',
      title: 'What crédito pessoal is',
      content: [
        { kind: 'paragraph', text: 'Crédito pessoal is consumer credit without real-estate collateral: renovation, appliances, holidays, debt consolidation, education, health, or a car without a mortgage. Under the legal regime of DL 133/2009, it usually covers contracts from €200 to €75,000.' },
        { kind: 'paragraph', text: 'It is not a cartão de crédito and not a descoberto autorizado. A personal loan has an amount, a term, a schedule of prestações mensais and a contractual rate. The bank must provide a standard information form in advance so that you can compare offers before signing.' },
        { kind: 'checklist', items: [
          'Loan amount: how much you will actually receive in your account.',
          'Prazo: term in months; for ordinary crédito pessoal, banks follow Banco de Portugal limits on consumer-credit terms.',
          'Prestação mensal: monthly payment.',
          'TAN: nominal annual interest rate.',
          'TAEG: real annual cost of credit with mandatory expenses.',
          'MTIC: montante total imputado ao consumidor — the total you will pay the bank over the full term.',
          'Abertura/processamento fee, if any.',
          'Imposto do Selo: tax on the loan and interest.',
          'Seguro: insurance, if the bank makes it a condition of the rate or approval.'
        ] }
      ]
    },
    {
      id: 'tan-vs-taeg',
      title: 'TAN vs TAEG: what to compare',
      content: [
        { kind: 'paragraph', text: 'TAN is only the interest rate on the money. It does not show the full price of the loan. Two banks may offer the same TAN, but one may add a fee, mandatory insurance and a tax burden — the final overpayment will be higher.' },
        { kind: 'paragraph', text: 'TAEG is the taxa anual de encargos efetiva global. It includes interest, fees, taxes and mandatory expenses linked to obtaining the loan. Therefore, to compare offers, use TAEG and MTIC, not the advertised TAN.' },
        { kind: 'warning', text: 'A low TAN in an advert does not mean a cheap loan. Check the TAEG, MTIC and monthly payment amount in the bank document, not on the banner.' },
        { kind: 'checklist', items: [
          'If the TAEG is higher, the loan is usually more expensive for the same amount and term.',
          'If the term is longer, the prestação mensal is lower, but the MTIC is almost always higher.',
          'If insurance is mandatory for the rate, its cost must be reflected in the TAEG.',
          'If the bank offers “sem comissões”, still check Imposto do Selo and MTIC.',
          'If the rate is variável, the payment may change; fixed rates are more common for personal loans.',
          'Compare offers only with the same loan amount, term and purpose.'
        ] }
      ]
    },
    {
      id: 'legal-limits-and-approval',
      title: 'Limits, income and approval in 2026',
      content: [
        { kind: 'paragraph', text: 'In Portugal, there is no universal formula saying that “the bank must lend X salaries”. The amount depends on net income, job stability, household expenses, other loans in the Central de Responsabilidades de Crédito and the bank’s internal risk rules.' },
        { kind: 'paragraph', text: 'Banco de Portugal applies macroprudential recommendations: banks must assess DSTI — the share of all loan payments in net income. A practical market benchmark: if all prestações after the new loan approach 50% of net income, approval becomes difficult or the amount is reduced.' },
        { kind: 'checklist', items: [
          'Show your net monthly income: recibos de vencimento, contrato de trabalho, declaração IRS, recibos verdes.',
          'For recém-chegados, the bank may ask for 3–6 months of account movements in Portugal.',
          'NIF is practically always mandatory; NISS is often needed to confirm employment status.',
          'A residence permit, EU Cartão de Cidadão or passport + visa helps confirm legal stay.',
          'Credit-card debts and overdraft are visible to the bank via the CRC and reduce the available amount.',
          'A stable contrato sem termo is usually stronger than a short contrato a termo or new recibos verdes.',
          'If the income is foreign, the bank may apply a haircut or ask for documents with translation.',
          'Ordinary crédito pessoal is often limited to a term of up to 7 years; specific purposes such as education, health, renewable energy or a car may have other limits under the rules of the bank and Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Do not take out a loan “for someone else”. For the bank, the borrower is the person who signed the contract, even if the money was actually received by a friend, partner or relative.' }
      ]
    },
    {
      id: 'how-to-compare',
      title: 'How to compare offers through Banco de Portugal',
      content: [
        { kind: 'paragraph', text: 'The official comparison point is Banco de Portugal’s Portal do Cliente Bancário: clientebancario.bportugal.pt. It has a comparador de crédito aos consumidores and reference pages on TAEG, TAN, MTIC and consumer rights.' },
        { kind: 'substeps', items: [
          { id: 'prepare-inputs', title: '1. Prepare identical parameters', content: [
            { kind: 'checklist', items: [
              'Loan purpose: pessoal, automóvel, educação, saúde, consolidação.',
              'Amount: for example €5,000, €10,000 or €20,000.',
              'Term: for example 24, 48, 60 or 84 months.',
              'Rate type: fixed or variável, if available.',
              'Insurance: mandatory or optional.',
              'Fees: abertura, processamento, manutenção, if the bank applies them.'
            ] }
          ] },
          { id: 'compare-output', title: '2. Look at TAEG and MTIC', content: [
            { kind: 'paragraph', text: 'Choose 3–5 banks and compare TAEG, MTIC and prestação mensal. The lowest payment is not always the best: with a long term, the total overpayment may be much higher.' }
          ] },
          { id: 'check-usury-rate', title: '3. Check the maximum TAEG', content: [
            { kind: 'paragraph', text: 'Banco de Portugal publishes taxas máximas for consumer credit quarterly. If the TAEG is above the maximum for the credit category on the contract date, this is a red flag: check the calculation and complain to Banco de Portugal.' }
          ] }
        ] }
      ]
    },
    {
      id: 'rights-after-signing',
      title: 'After signing: 14 days, early repayment, complaints',
      content: [
        { kind: 'paragraph', text: 'Under DL 133/2009, the consumer has 14 calendar days for livre revogação — withdrawal from the contract without giving a reason. The period is counted from the date the contract is concluded or from the date all mandatory terms are received, if they were provided later.' },
        { kind: 'paragraph', text: 'If you withdraw after receiving the money, you must repay the principal and interest for the actual days of using the credit. This usually has to be done within 30 days after sending the withdrawal notice.' },
        { kind: 'checklist', items: [
          'Send the withdrawal in writing: email with confirmation, carta registada or through the channel specified in the contract.',
          'Keep the comprovativo of sending and the calculation of the amount to be repaid.',
          'Early repayment is possible at any time.',
          'With a fixed rate, compensation to the bank is limited by law: usually up to 0.5% of the amount repaid early if more than 1 year remains until the end of the contract, and up to 0.25% if 1 year or less remains.',
          'With a variável rate, an early-repayment fee for consumer credit is usually not charged.',
          'If the bank imposed a product, did not explain the TAEG or refused to provide documents — submit a reclamação in the Livro de Reclamações and to Banco de Portugal.',
          'Check the credit intermediary: they must be registered with Banco de Portugal.'
        ] },
        { kind: 'warning', text: 'Do not pay a “taxa de aprovação” to unknown intermediaries before the loan is disbursed. Legal banks and registered intermediários de crédito can be checked on the Banco de Portugal website; offers via WhatsApp with advance payment are a common fraud scheme.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Banco de Portugal — Portal do Cliente Bancário: crédito aos consumidores and comparador',
      url: 'https://clientebancario.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal — taxas máximas and supervisão do crédito aos consumidores',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 133/2009 — regime do crédito aos consumidores',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34555075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
