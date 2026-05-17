export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-desemprego-pedido',
  categoryId: 'work_business',
  title: 'Subsídio de Desemprego: unemployment benefit via IEFP and Segurança Social',
  tldr: 'Subsídio de Desemprego is an insurance-based benefit for those who lost their job through no fault of their own. In 2026, the basic condition is: at least 360 days of work under a contrato de trabalho with contributions to Segurança Social in the 24 months before dismissal. You must register as desempregado with IEFP and submit the application to Segurança Social within 90 consecutive days from the date of unemployment. The amount is usually 65% of the remuneração de referência, capped at 2.5 IAS = €1,342.83.',
  tags: ['unemployment', 'iefp', 'work', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-can-claim',
      title: 'Who is entitled to the benefit',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Desemprego is not social assistance “because you are poor”, but an insurance payment from Segurança Social. It is available if contributions were paid for you as an employee and the unemployment was involuntary.' },
        { kind: 'checklist', items: [
          'You lived and worked in Portugal legally: residence permit, visa with the right to work, Cartão de Cidadão / EU status — depending on the situation.',
          'You had a contrato de trabalho, and the employer paid contribuições to Segurança Social.',
          'There are at least 360 days of paid work with contributions in the 24 months before the date of unemployment.',
          'The dismissal was involuntário: despedimento, caducidade do contrato, extinção do posto de trabalho, employer insolvency, etc.',
          'You are fit for work and ready to look for a job.',
          'You registered with IEFP as a candidato a emprego.',
          'You are not receiving an old-age or disability pension that is incompatible with the benefit.',
          'You are not working full-time and are not concealing income.'
        ] },
        { kind: 'warning', text: 'If you resigned voluntarily without recognised justa causa, the standard Subsídio de Desemprego is usually not available. Before signing an acordo de revogação, check whether the employer will record the situation as unemployment that gives entitlement to the benefit.' }
      ]
    },
    {
      id: 'deadline',
      title: '90 days: the main deadline',
      content: [
        { kind: 'paragraph', text: 'The application must be submitted within 90 consecutive days from the date unemployment begins. The period is counted in calendar days, not working days.' },
        { kind: 'paragraph', text: 'In practice, the process consists of two parts: registering with IEFP as unemployed and submitting the application to Segurança Social. Without registration with IEFP, the benefit will not be awarded.' },
        { kind: 'checklist', items: [
          'Day 1 — the contract end date or the dismissal date stated by the employer.',
          'Immediately request the Declaração de Situação de Desemprego from the employer if it has not been sent electronically.',
          'Register with IEFP online or in person at the Centro de Emprego for your place of residence.',
          'Submit the application via Segurança Social Direta or a Segurança Social service desk.',
          'Keep proof of IEFP registration and application submission.',
          'If you miss the 90 days, the benefit does not automatically disappear, but the payment period is reduced by the days of delay.'
        ] },
        { kind: 'warning', text: 'Do not wait until the last week: errors in the NISS, address, bank IBAN, or the absence of the employer’s electronic declaration can take days to resolve. For expats, this is a common cause of delays.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents and details',
      content: [
        { kind: 'paragraph', text: 'Segurança Social can see most of the data itself: NISS, employer, contributions, contrato dates. But in practice it is better to have a complete set of documents, especially if you moved recently, changed residence permit status, or worked for several employers.' },
        { kind: 'checklist', items: [
          'NISS and access to Segurança Social Direta.',
          'NIF and current address in Finanças / Segurança Social.',
          'Documento de identificação: residence permit, Cartão de Cidadão, passport + permit/visa, CRUE for EU citizens.',
          'IBAN of a Portuguese or SEPA account in your name.',
          'Declaração de Situação de Desemprego from the employer, if it was not sent directly.',
          'Contrato de trabalho and dismissal / não renovação letter, if there is a dispute or the data do not match.',
          'Recent recibos de vencimento — useful for checking the salary base.',
          'Access to the e-mail and phone number listed with IEFP and Segurança Social.',
          'For work in another EU/EEA/Switzerland country — documents on insurance periods, usually form U1.'
        ] },
        { kind: 'paragraph', text: 'If you worked in another EU/EEA/Switzerland country, insurance periods may be counted under social security coordination rules, but this is not an instant process. Allow time for the periods to be confirmed.' }
      ]
    },
    {
      id: 'amount-and-duration',
      title: 'How much is paid and for how long',
      content: [
        { kind: 'paragraph', text: 'The standard formula: the benefit is 65% of the remuneração de referência. This base is calculated from salaries on which contributions were paid during the set period before unemployment. Segurança Social calculates it automatically.' },
        { kind: 'checklist', items: [
          'Cap in 2026: 2.5 IAS = €1,342.83 per month, because IAS 2026 = €537.13.',
          'The minimum is usually linked to the IAS, but if your net remuneração de referência is below the IAS, the benefit cannot exceed that net base.',
          'The benefit must not be higher than 75% of the net remuneração de referência.',
          'In some family situations, a 10% increase may be possible: for example, both spouses/partners receive unemployment benefit and there are dependentes, or a single parent with dependentes.',
          'The payment period depends on age and contribution record on the date of unemployment.',
          'The older the worker and the longer the contribution periods, the longer the payment period.',
          'It is best to check the exact period in Segurança Social Direta after applying: your contribuições periods are shown there.'
        ] },
        { kind: 'paragraph', text: 'As a duration guide: payments may run from a few months to more than a year, and for older workers with a long contribution record — longer. But entitlement to the benefit itself starts with the basic condition of 360 days of work with contributions in the last 24 months.' },
        { kind: 'warning', text: 'Do not confuse the bruto salary in the contrato with the benefit amount paid into your account. Segurança Social applies the formula, caps, and net-base limits; the final amount may be noticeably lower than 65% of your “perceived” income, especially if there were bonuses, variable pay, or part-time work.' }
      ]
    },
    {
      id: 'after-approval',
      title: 'What to do after approval',
      content: [
        { kind: 'paragraph', text: 'After the benefit is awarded, you must remain available for the labour market. IEFP may call you to meetings, offer formação profissional, check your job search, and refer you to vacancies.' },
        { kind: 'checklist', items: [
          'Regularly check your e-mail, SMS, and IEFP personal account.',
          'Attend IEFP convocatórias on the appointed day.',
          'Do not refuse suitable work or training without a valid reason.',
          'Report starting work, recibos verdes, sick leave, leaving the country, or a change of address.',
          'Keep evidence of your job search: applications, letters, entrevistas.',
          'Check payments in Segurança Social Direta.',
          'If you find part-time work or low-paid work, check your entitlement to Subsídio de Desemprego Parcial.',
          'If the decision is negative, submit a reclamação within the stated deadline and attach the employer’s documents.'
        ] },
        { kind: 'warning', text: 'Receiving the benefit while actually working “off the books” risks repayment of all amounts, fines, and problems with future applications. For foreigners, this can also look bad when renewing a residence permit if debts or breaches come to light.' }
      ]
    },
    {
      id: 'special-cases',
      title: 'Common expat cases',
      content: [
        { kind: 'substeps', items: [
          { id: 'recibos-verdes', title: 'Recibos verdes', content: [
            { kind: 'paragraph', text: 'The usual Subsídio de Desemprego is for employees. Self-employed people on recibos verdes usually do not qualify for this benefit. Separate regimes exist for them, such as subsídio por cessação de atividade, with different conditions and contribution periods.' }
          ] },
          { id: 'fixed-term-contract', title: 'Contrato a termo ended', content: [
            { kind: 'paragraph', text: 'If a fixed-term contract ended and the employer did not renew it, this is usually considered involuntary unemployment. Check that the employer correctly recorded the caducidade and sent the Declaração de Situação de Desemprego.' }
          ] },
          { id: 'mutual-agreement', title: 'Acordo de revogação', content: [
            { kind: 'paragraph', text: 'Termination by mutual agreement does not always give entitlement to the benefit. In some cases, entitlement is preserved if the legal conditions and the employer’s quotas are met, but this must be checked before signing.' }
          ] },
          { id: 'moving-abroad', title: 'Moving away from Portugal', content: [
            { kind: 'paragraph', text: 'If you leave Portugal, entitlement to payment may be suspended or may require special procedures. To look for work in another EU country, export of the benefit may be possible under European rules, but this must be arranged in advance through Segurança Social / IEFP.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Application for Subsídio de Desemprego', amountEUR: 0, note: 'Registration with IEFP and the application to Segurança Social are free of charge.' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Used for Segurança Social benefit limits.' },
    { label: 'Maximum monthly benefit amount', amountEUR: 1342.83, note: '2.5 × IAS in 2026; the actual amount depends on the salary base and limits.' }
  ],
  sources: [
    {
      title: 'IEFP: information on Subsídio de Desemprego',
      url: 'https://www.iefp.pt/en/subsidio-desemprego',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: application for Subsídio de Desemprego',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/trabalho/desemprego/subsidio-desemprego',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: Indexante dos Apoios Sociais amounts',
      url: 'https://www.seg-social.pt/ias',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
