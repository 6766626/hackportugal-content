export default {
  editorialVoice: 'hackportugal',
  id: 'irs-auto-prefill',
  categoryId: 'taxes',
  title: 'IRS Automático — pre-filled tax return for simple cases',
  tldr: 'IRS Automático is a draft Modelo 3 tax return that Finanças pre-fills in advance using salary, pensions and e-Fatura. In the IRS 2026 campaign for 2025 income, returns are submitted from 1 April to 30 June 2026. If you are eligible for the regime and do nothing, the return is NOT submitted on 1 April: the provisional return only becomes final after the deadline. It is not suitable for all expats: recibos verdes, rental income, foreign income, crypto/shares usually require a standard Modelo 3.',
  tags: ['irs', 'finanças', 'taxes', 'e-fatura'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IRS Automático is',
      content: [
        { kind: 'paragraph', text: 'IRS Automático is an automatic pre-filled IRS tax return on Portal das Finanças. The tax authority pulls in salary or pension, tax withheld, Social Security, household composition and confirmed expenses from e-Fatura.' },
        { kind: 'paragraph', text: 'In the 2026 campaign, you submit income for 2025. The standard filing window is from 1 April to 30 June 2026. During this period you can check the automatic return, simulate the calculation, confirm it or reject it and submit a standard Modelo 3.' },
        { kind: 'warning', text: 'A common mistake: IRS Automático is not “submitted on 1 April”. It becomes available on 1 April. If the taxpayer does not confirm it and does not submit another return by 30 June, the provisional return is usually considered automatically submitted after the deadline, under the rules of art. 58-A CIRS.' }
      ]
    },
    {
      id: 'who-can-use',
      title: 'Who it is suitable for ✅',
      content: [
        { kind: 'paragraph', text: 'IRS Automático is designed for simple tax situations. For an expat, this usually works if you were a tax resident of Portugal for the whole of 2025 and received only Portuguese salary under a contrato de trabalho or a pension, with no self-employment and no foreign income.' },
        { kind: 'checklist', items: [
          'You are a tax resident of Portugal for the relevant year',
          'Income is only category A: salary, employment under an employment contract',
          'Or income is only category H: pensions',
          'Income was paid by Portuguese entities and is already reflected in Finanças',
          'No recibos verdes, ato isolado or other atividade aberta',
          'No rental income, Airbnb/AL, royalties, capital gains, sales of shares/ETFs/crypto',
          'No foreign salary, foreign dividends, interest, pension or bank accounts with income',
          'Your family situation is simple and matches the data in Finanças',
          'Expenses in e-Fatura have been checked before the campaign deadlines'
        ] },
        { kind: 'paragraph', text: 'If you are married/united de facto, Portal das Finanças usually shows options: separate filing and joint filing. Do not automatically choose the very first option — compare the simulations.' }
      ]
    },
    {
      id: 'who-should-not-use',
      title: 'When it is better NOT to confirm automatically',
      content: [
        { kind: 'paragraph', text: 'Expats often do not fit IRS Automático because of foreign income, remote work, investments or self-employed status. In such cases it is safer to open a standard Modelo 3 and add the necessary anexos.' },
        { kind: 'checklist', items: [
          'You opened atividade and issued recibos verdes — Anexo B is needed',
          'You have rental income in Portugal — usually Anexo F',
          'You sold property, shares, ETFs, bonds or crypto with a reportable event — Anexo G / G1 / J depending on the situation',
          'You have salary, pension, interest, dividends or capital gains from abroad — usually Anexo J',
          'You arrived or left during the year and were not resident for the whole year',
          'You have IFICI, old NHR/RNH or another special regime that affects taxation',
          'There is maintenance, disability, complex custody, dependentes in guarda conjunta or non-standard deductions',
          'e-Fatura data is incomplete: significant medical, education, rent or mortgage expenses were not pulled in',
          'The simulation shows an odd tax amount to pay even though IRS was withheld from salary throughout the year'
        ] },
        { kind: 'warning', text: 'If foreign income is missing from the automatic return, this does not mean it can be left undeclared. The tax authority may receive CRS/DAC data from banks and brokers later, and correcting it after an audit will be more expensive and more stressful.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'How to check on Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Finanças', content: [
            { kind: 'paragraph', text: 'Go to Portal das Finanças using NIF + senha de acesso, Chave Móvel Digital (CMD) or Cartão de Cidadão. Look for the section IRS → IRS Automático or Entregar declaração → IRS Automático.' }
          ] },
          { id: 'validate-family', title: '2. Check family and address', content: [
            { kind: 'checklist', items: [
              'NIF of the taxpayer and spouse/partner',
              'Estado civil on 31 December 2025',
              'Dependentes and their NIF',
              'Guarda conjunta, if there are children in joint custody',
              'Tax residence address',
              'IBAN for the IRS refund'
            ] }
          ] },
          { id: 'compare-simulations', title: '3. Compare simulations', content: [
            { kind: 'paragraph', text: 'Click Simular. If you are married or in união de facto, compare tributação separada and tributação conjunta. The Portal will show the refund or amount to pay for each option.' }
          ] },
          { id: 'confirm-or-reject', title: '4. Confirm or reject', content: [
            { kind: 'paragraph', text: 'If everything is correct, confirm the return and save the comprovativo. If there is an error or income/deduction is missing, do not confirm IRS Automático — submit a standard declaração Modelo 3 with the necessary attachments.' }
          ] }
        ] }
      ]
    },
    {
      id: 'refund-payment',
      title: 'IRS refund or payment',
      content: [
        { kind: 'paragraph', text: 'After confirmation, or after the provisional return automatically becomes final, Finanças issues the liquidação. If too much IRS was withheld, a reembolso will arrive in the IBAN. If too little was withheld, a nota de cobrança will appear for payment.' },
        { kind: 'checklist', items: [
          'Check the IBAN in Portal das Finanças in advance',
          'Download the comprovativo da declaração after confirmation',
          'Check the status: Rececionada → Certa → Liquidação processada → Reembolso emitido or Nota de cobrança',
          'Payment is made via Referência Multibanco, MB WAY, homebanking or on Portal das Finanças',
          'If the return was submitted with an error, file a declaração de substituição as early as possible',
          'If the amount to pay is unaffordable, you can request pagamento em prestações if the AT conditions are met'
        ] },
        { kind: 'warning', text: 'The automatic calculation does not remove your responsibility. Legally, the return is considered yours: if the data is incomplete, you will have to correct it and pay the difference, even if the error came from the pre-fill.' }
      ]
    },
    {
      id: 'practical-expat-check',
      title: 'Mini-checklist for expats before confirming',
      content: [
        { kind: 'checklist', items: [
          'I was definitely a tax resident of Portugal in 2025 or I understand how to declare a split-year situation',
          'I had no atividade aberta, recibos verdes or ato isolado',
          'I had no foreign salary, pension, dividends, interest, coupons or capital gains',
          'I checked e-Fatura and can see medical, education, rent and general family expenses',
          'I compared joint and separate filing if there is a spouse/partner',
          'The IBAN in Finanças is up to date',
          'I saved the PDF of the return and the comprovativo',
          'If there is any doubt — I submit a standard Modelo 3 or ask a contabilista'
        ] },
        { kind: 'paragraph', text: 'Practical rule: IRS Automático is good for “one Portuguese salary + ordinary expenses”. Anything involving relocation, several countries, investments, rental income or self-employment almost always requires a manual check.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS Automático and information on IRS filing',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 58-A, declaração automática de rendimentos',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal das Finanças, submission of the Modelo 3 IRS return',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
