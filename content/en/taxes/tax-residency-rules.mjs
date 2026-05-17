export default {
  editorialVoice: 'hackportugal',
  id: 'tax-residency-rules',
  categoryId: 'taxes',
  title: 'Portuguese tax residency — the 183-day rule',
  tldr: 'A Portuguese tax resident pays IRS on worldwide income; a non-resident pays only on Portuguese-source income. In 2026, the basic CIRS art. 16 rule is: >183 days in Portugal in any 12-month period starting or ending in the tax year. But 183 days is not the only test: accommodation suitable as a habitual residence can make you resident earlier. On departure, partial residency and exit tax on financial assets may apply.',
  tags: ['irs', '183days', 'residency', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'core-rule',
      title: 'The main rule: 183 days is not a calendar-year myth',
      content: [
        { kind: 'paragraph', text: 'In Portugal, tax residency is determined by Código do IRS, art. 16. The best-known test: you become tax resident if you have been physically present in Portugal for more than 183 days, consecutive or in total, in any 12-month period that starts or ends in the relevant tax year.' },
        { kind: 'paragraph', text: 'This is not necessarily the period “from 1 January to 31 December”. For example, if you arrived on 1 September 2025 and lived without leaving until March 2026, the 12-month period crosses 2026, and the days may create residency for part of 2026.' },
        { kind: 'checklist', items: [
          'Days of physical presence in Portugal are counted, including the day of arrival and the day of departure, if you were actually in the country for part of the day.',
          '183 days is the “more than 183” threshold, meaning 184 days or more.',
          'The days do not have to be consecutive: short trips abroad simply do not count as Portuguese days.',
          'The tax year for IRS is the calendar year: 1 January — 31 December.',
          'The IRS return for 2026 is usually submitted from 1 April to 30 June 2027 through Portal das Finanças.',
          'The immigration stay rule under D7/D8 and tax residency are different regimes: a residence permit is not automatically the same as tax residency, but often leads to it in practice.'
        ] }
      ]
    },
    {
      id: 'habitual-residence',
      title: 'The second test: habitual residence 🏠',
      content: [
        { kind: 'paragraph', text: 'Even if you have spent fewer than 184 days in Portugal, you may become tax resident if, on any day of the relevant 12-month period, you have accommodation in Portugal in conditions that show an intention to use it as a habitual residence — your ordinary, permanent place of life.' },
        { kind: 'paragraph', text: 'In practice, Finanças looks not only at the tenancy agreement, but at the overall facts: where your family is, where you work, where your children study, where your banking and day-to-day life are, and where you actually live.' },
        { kind: 'checklist', items: [
          'A long-term contrato de arrendamento for 12+ months increases the residency risk.',
          'Your own flat or house, available for permanent living, is a strong factor.',
          'An atestado de residência from the Junta de Freguesia confirms the address, but does not by itself decide tax status.',
          'Registering your address in the NIF as morada fiscal in Portugal is an important signal for Finanças.',
          'Connected utilities, internet, children’s school, an SNS family doctor — these are additional facts.',
          'If you live in a hotel or temporary Airbnb for 1–2 months, this is weaker, but it does not cancel the day count.',
          'If you want to remain non-resident, keep evidence that your centre of vital interests is outside Portugal.'
        ] },
        { kind: 'warning', text: 'Beginner’s mistake: “I was there for fewer than 183 days, so I am definitely non-resident”. Incorrect. Portugal has a separate habitual residence test, and it can apply before the 184th day.' }
      ]
    },
    {
      id: 'what-residency-changes',
      title: 'What changes if you are tax resident',
      content: [
        { kind: 'paragraph', text: 'A Portuguese tax resident declares worldwide income in IRS: salary, dividends, interest, rent, capital gains, pensions, income from recibos verdes, foreign accounts and brokers. A non-resident usually declares only Portuguese-source income.' },
        { kind: 'checklist', items: [
          'A resident submits Modelo  IRS and, where there is foreign income, Anexo J.',
          'A non-resident with Portuguese rent, salary or capital gains may also be required to submit IRS.',
          'The first IRS bracket in 2026 is 11.97%, but the final result depends on the scale, deductions and type of income.',
          'Many investment income items are taxed autonomously at 28%, but a resident can sometimes choose englobamento — inclusion in the general progressive scale.',
          'For salary and self-employment, retenções na fonte and Segurança Social matter; NISS is needed for social contributions, but it does not determine tax residency.',
          'Double-taxation treaties resolve conflicts if two countries consider you resident.',
          'The old NHR for new applicants has effectively been replaced by IFICI; this is a separate preferential regime and it does not cancel the residency test.'
        ] },
        { kind: 'warning', text: 'Do not confuse the address in the NIF with actual residency. Morada fiscal in Portugal is often used by Finanças as an indicator, but the CIRS art. 16 rules and the facts decide. If you have moved, update your morada fiscal within 60 days.' }
      ]
    },
    {
      id: 'split-year',
      title: 'Partial residency: the year can be split',
      content: [
        { kind: 'paragraph', text: 'Portugal applies the residência fiscal parcial regime. If you move to Portugal or leave Portugal during the year, tax status may apply not for the whole calendar year, but from the first day of the stay period to the last day, provided the CIRS conditions are met.' },
        { kind: 'substeps', items: [
          {
            id: 'arrival',
            title: 'On arrival',
            content: [
              { kind: 'paragraph', text: 'If you arrived and met the 183-day test or the habitual residence test, residency usually starts from the first day of presence in Portugal in the relevant period, not from the date of receiving the AIMA residence permit.' }
            ]
          },
          {
            id: 'departure',
            title: 'On departure',
            content: [
              { kind: 'paragraph', text: 'If you left permanently, closed your accommodation and moved your centre of life, you may be resident only until the departure date. But you need to update your morada fiscal to a foreign address and have evidence: tickets, a new tenancy/employment contract, and a tax-residency certificate from another country.' }
            ]
          }
        ] },
        { kind: 'checklist', items: [
          'Keep boarding passes, travel history, tenancy agreements and bills.',
          'Maintain a table of days by country: entry date, exit date, country, basis.',
          'Request a Certificado de Residência Fiscal on Portal das Finanças if a bank, broker or foreign tax authority needs it.',
          'If you became non-resident, appoint a representante fiscal only if your situation requires it; for EU/EEA residents the regime is usually softer than for third countries.',
          'In a dispute with another country, use the tie-breaker in the tax treaty: permanent home, centre of vital interests, habitual abode, nationality.'
        ] }
      ]
    },
    {
      id: 'exit-tax',
      title: 'Exit tax: what to check before leaving',
      content: [
        { kind: 'paragraph', text: 'When Portuguese tax residency ends, Portugal may tax the “unrealised” increase in value of certain financial assets. This is called exit tax. The mechanism for individuals is linked to Código do IRS, in particular the capital-gains taxation regimes when tax residency is moved outside Portugal.' },
        { kind: 'paragraph', text: 'The essence: if you have shares, company interests, fund units or other assets with gains, Finanças may consider that a taxable gain arose on departure as the difference between the market value on the departure date and the acquisition price. For a move to the EU/EEA, deferral/instalment options are usually possible under the conditions of the law; for third countries, the risk of an immediate tax is higher.' },
        { kind: 'checklist', items: [
          'Prepare a list of brokers, banks, crypto platforms and company interests before changing residency.',
          'Document the acquisition cost: broker reports, contract notes, bank statements.',
          'Determine the market value of the assets on the departure date.',
          'Check whether the asset falls under the exit tax regime: shares, quotas, units, options, funds.',
          'Compare a move to the EU/EEA and outside the EU/EEA: the tax consequences may differ.',
          'Check the tax treaty with the new country: it does not always cancel Portuguese exit tax.',
          'Discuss selling/transferring/holding assets before departure with a contabilista or advogado fiscal, especially with a portfolio from €50,000.'
        ] },
        { kind: 'warning', text: 'Exit tax is an area where self-filing IRS often ends in mistakes. If you leave Portugal with a substantial portfolio, interests in an Lda/SA or stock options, plan your tax exit before changing your morada fiscal.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist for D7/D8 and new relocations',
      content: [
        { kind: 'paragraph', text: 'For D7/D8, a typical scenario is: a person arrives with a visa, rents accommodation, obtains NIF/NISS/SNS, then a residence permit at AIMA. Tax status is not determined by the date of the plastic card, but by days, accommodation and the actual centre of life.' },
        { kind: 'checklist', items: [
          'Before moving, decide whether you want to become resident in Portugal in the current year or from 1 January of the following year.',
          'Calculate the 184th day by the rolling 12-month period, not only by the calendar year.',
          'Do not set a Portuguese morada fiscal “just in case” if you are still actually living in another country and want to preserve non-residency.',
          'If you already live in Portugal, update the NIF address and prepare for IRS as a resident.',
          'Check whether your country has a treaty with Portugal and which tie-breaker rules apply.',
          'Collect a foreign tax residence certificate if another country also considers you resident.',
          'For remote work, check not only IRS but also social security: NISS, A1 for the EU, contributions as a trabalhador independente.',
          'For the IFICI preferential regime, check the separate requirements and registration deadlines; it is not an automatic benefit for all D7/D8 holders.'
        ] },
        { kind: 'warning', text: 'If you receive income from abroad and have become resident in Portugal, “the money did not arrive in a Portuguese account” does not exempt you from IRS. What matters is not the account, but tax residency and the source/type of income.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Residência Fiscal through Portal das Finanças', amountEUR: 0, note: 'Usually requested online free of charge; needed for banks, brokers and applying tax treaties.' },
    { label: 'Contabilista consultation on residency/IRS', amountEURMin: 60, amountEURMax: 200, note: 'Typical range for a one-off consultation; complex cases with exit tax and foreign assets cost more.' },
    { label: 'Preparation of IRS with Anexo J', amountEURMin: 100, amountEURMax: 400, note: 'Depends on the number of countries, brokers, rentals, crypto and self-employment.' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: Residents and non-residents — information leaflet',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS, art. 16 — tax residency',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: Tax residency certificate',
      url: 'https://sitfiscal.portaldasfinancas.gov.pt/certidao/emitirCertidaoForm.action',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: IRS — Modelo 3 return',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
