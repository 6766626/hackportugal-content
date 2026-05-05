export default {
  editorialVoice: 'hackportugal',
  id: 'tax-residency-rules',
  categoryId: 'taxes',
  title: 'Portugal tax residency — the 183-day rule',
  tldr: 'A tax resident of Portugal pays IRS on worldwide income, a non-resident — only on income from a Portuguese source. In 2026 the basic rule CIRS art. 16: >183 days in Portugal in any 12‑month period starting or ending in the tax year. But 183 days is not the only test: accommodation suitable as a habitual residence can make you a resident earlier. On departure, split-year treatment and an exit tax on financial assets may apply.',
  tags: ['irs', '183-day rule', 'tax residency', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'core-rule',
      title: 'The core rule: 183 days — not a calendar myth',
      content: [
        { kind: 'paragraph', text: 'In Portugal, tax residency is determined by the Código do IRS, art. 16. The best-known test: you become a tax resident if you were physically present in Portugal for more than 183 days, consecutively or in total, in any 12‑month period that starts or ends in the relevant tax year.' },
        { kind: 'paragraph', text: 'This is not necessarily the period “1 January to 31 December”. For example, if you arrived on 1 September 2025 and lived without leaving until March 2026, the 12‑month period crosses 2026, and the days can create residency for part of 2026.' },
        { kind: 'checklist', items: [
          'Days of physical presence in Portugal count, including the day of arrival and the day of departure, if you were actually in the country for part of the day.',
          '183 days is a “more than 183” threshold, i.e., 184 days or more.',
          'The days do not have to be consecutive: short trips abroad simply do not count as Portuguese days.',
          'The tax year for IRS is the calendar year: 1 January — 31 December.',
          'The IRS return for 2026 is usually filed from 1 April to 30 June 2027 via the Portal das Finanças.',
          'Immigration stay rules for D7/D8 and tax residency are different regimes: a residence permit is not automatically equal to tax residency, but often leads to it in practice.'
        ] }
      ]
    },
    {
      id: 'habitual-residence',
      title: 'Second test: habitual residence 🏠',
      content: [
        { kind: 'paragraph', text: 'Even if you spent fewer than 184 days in Portugal, you can become a tax resident if, on any day of the relevant 12‑month period, you have accommodation in Portugal in conditions that show an intention to use it as a habitual residence — a usual, permanent place of residence.' },
        { kind: 'paragraph', text: 'In practice, Finanças looks not only at the lease agreement but at the body of facts: where the family is, where you work, where the children study, where your banking and daily life are, where you actually live.' },
        { kind: 'checklist', items: [
          'A long-term contrato de arrendamento of 12+ months increases the risk of residency.',
          'Your own flat or house, available for permanent living, is a strong factor.',
          'An atestado de residência from the Junta de Freguesia confirms the address, but by itself does not determine tax status.',
          'Registering your address in the NIF as a morada fiscal in Portugal is an important signal for Finanças.',
          'Connected utilities, internet, children’s school, family doctor in the SNS — additional facts.',
          'If you live in a hotel or temporary Airbnb for 1–2 months, this is weaker, but it does not cancel the day count.',
          'If you want to remain a non-resident, keep evidence of the centre of vital interests outside Portugal.'
        ] },
        { kind: 'warning', text: 'Beginner’s mistake: “I was under 183 days, so definitely a non-resident”. Incorrect. Portugal has a separate habitual residence test, and it can apply before the 184th day.' }
      ]
    },
    {
      id: 'what-residency-changes',
      title: 'What changes if you are a tax resident',
      content: [
        { kind: 'paragraph', text: 'A tax resident of Portugal declares worldwide income in IRS: salary, dividends, interest, rent, capital gains, pensions, income from recibos verdes, foreign accounts and brokers. A non-resident usually declares only income from a Portuguese source.' },
        { kind: 'checklist', items: [
          'A resident files Modelo 3 IRS and, if there is foreign income, Anexo J.',
          'A non-resident with Portuguese rental income, salary or capital gains may also be required to file IRS.',
          'The first IRS bracket in 2026 is 11.97%, but the outcome depends on the scale, deductions and the type of income.',
          'Many investment incomes are taxed autonomously at 28%, but a resident can sometimes choose englobamento — inclusion in the general scale.',
          'For employment and self-employment, withholding na fonte and Segurança Social are important; NISS is required for social contributions but does not determine tax residency.',
          'Double taxation treaties resolve conflicts if two countries consider you a resident.',
          'The old NHR for new applicants is effectively replaced by IFICI; this is a separate preferential regime and does not override the residency test.'
        ] },
        { kind: 'warning', text: 'Do not confuse the address in your NIF with actual residency. A morada fiscal in Portugal is often used by Finanças as an indicator, but CIRS art. 16 and the facts decide. If you have moved, update your morada fiscal within 60 days.' }
      ]
    },
    {
      id: 'split-year',
      title: 'Split-year treatment: you can split the year',
      content: [
        { kind: 'paragraph', text: 'Portugal applies the residência fiscal parcial regime. If you move to Portugal or leave it during the year, tax status may apply not for the whole calendar year, but from the first day of the period of presence to the last day, subject to the conditions of the CIRS.' },
        { kind: 'substeps', items: [
          {
            id: 'arrival',
            title: 'On arrival',
            content: [
              { kind: 'paragraph', text: 'If you arrive and meet the 183‑day or habitual residence test, residency usually starts from the first day of presence in Portugal in the relevant period, not from the date of obtaining an AIMA residence permit.' }
            ]
          },
          {
            id: 'departure',
            title: 'On departure',
            content: [
              { kind: 'paragraph', text: 'If you have left for good, closed your accommodation and moved your centre of life, you can be a resident only up to the date of departure. But you must update your morada fiscal to a foreign address and have evidence: tickets, a new lease/employment contract, a tax residence certificate from the other country.' }
            ]
          }
        ] },
        { kind: 'checklist', items: [
          'Keep boarding passes, travel history, lease agreements and invoices.',
          'Maintain a day-by-country table: date of entry, date of exit, country, basis.',
          'Request a Certificado de Residência Fiscal on the Portal das Finanças if needed by a bank, broker or foreign tax authority.',
          'If you have become a non-resident, appoint a representante fiscal only if your situation requires it; for EU/EEA residents the regime is usually softer than for third countries.',
          'In a dispute with another country, use the tie-breaker from the tax treaty: permanent home, centre of vital interests, habitual abode, nationality.'
        ] }
      ]
    },
    {
      id: 'exit-tax',
      title: 'Exit tax: what to check before leaving',
      content: [
        { kind: 'paragraph', text: 'When ceasing to be a tax resident, Portugal may tax the “unrealised” appreciation of certain financial assets. This is called exit tax. The mechanics for individuals are linked to the Código do IRS, in particular the capital gains taxation regimes when tax residency is transferred outside Portugal.' },
        { kind: 'paragraph', text: 'In essence: if you have shares, equity, fund units or other assets with gains, Finanças may deem that a taxable gain arises on departure as the difference between market value on the date of departure and acquisition cost. For moves within the EU/EEA, deferral/instalment options are usually possible subject to legal conditions; for third countries, the risk of immediate tax is higher.' },
        { kind: 'checklist', items: [
          'Prepare a list of brokers, banks, crypto platforms and shareholdings before changing residency.',
          'Document the acquisition cost: broker reports, contract notes, bank statements.',
          'Determine the market value of the assets on the date of departure.',
          'Check whether the asset falls under the exit tax regime: shares, quotas, units, options, funds.',
          'Compare a move within the EU/EEA and outside the EU/EEA: tax consequences may differ.',
          'Check the tax treaty with the new country: it does not always eliminate Portuguese exit tax.',
          'Discuss selling/transferring/holding assets before departure with a contabilista or advogado fiscal, especially with a portfolio from €50,000.'
        ] },
        { kind: 'warning', text: 'Exit tax is an area where self-filing of IRS often ends in errors. If you are leaving Portugal with a substantial portfolio, shareholdings in an Lda/SA or stock options, plan the tax exit before changing your morada fiscal.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist for D7/D8 and new moves',
      content: [
        { kind: 'paragraph', text: 'For D7/D8 a typical scenario: a person arrives with a visa, rents accommodation, gets NIF/NISS/SNS, then a residence permit at AIMA. Tax status is determined not by the date on the plastic card, but by days, accommodation and the actual centre of life.' },
        { kind: 'checklist', items: [
          'Before moving, decide whether you want to become a resident of Portugal in the current year or from 1 January of the next year.',
          'Count the 184th day based on a rolling 12‑month period, not only by the calendar year.',
          'Do not set a Portuguese morada fiscal “just in case” if you actually still live in another country and want to keep non-resident status.',
          'If you already live in Portugal, update the NIF address and prepare for IRS as a resident.',
          'Check whether your country has a treaty with Portugal and which tie-breaker rules apply.',
          'Collect a foreign tax residence certificate if the other country also considers you a resident.',
          'For remote work, check not only IRS but also social security: NISS, A1 for the EU, contributions as a trabalhador independente.',
          'For the IFICI preferential regime, check the separate requirements and registration deadlines; it is not an automatic benefit for all D7/D8.'
        ] },
        { kind: 'warning', text: 'If you receive foreign-source income and have become a resident of Portugal, “the money did not hit a Portuguese account” does not exempt you from IRS. What matters is not the account, but tax residency and the source/type of income.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Residência Fiscal via the Portal das Finanças', amountEUR: 0, note: 'Usually requested online free of charge; needed for banks, brokers and applying tax treaties.' },
    { label: 'Consultation with a contabilista on residency/IRS', amountEURMin: 60, amountEURMax: 200, note: 'Typical range for a one-off consultation; complex cases with exit tax and foreign assets cost more.' },
    { label: 'IRS preparation with Anexo J', amountEURMin: 100, amountEURMax: 400, note: 'Depends on the number of countries, brokers, rentals, crypto and self-employment.' }
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
      title: 'Portal das Finanças: Tax residence certificate',
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
