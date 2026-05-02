export default {
  editorialVoice: 'hackportugal',
  id: 'tax-residency-rules',
  categoryId: 'taxes',
  title: 'Portuguese tax residency — the 183-day rule',
  tldr: 'A Portuguese tax resident pays IRS on worldwide income; a non-resident pays only on Portuguese-source income. In 2026, the basic rule under CIRS art. 16 is: >183 days in Portugal in any 12-month period beginning or ending in the tax year. But 183 days is not the only test: a home suitable as a habitual residence can make you resident earlier. On departure, split-year residence and exit tax on financial assets may apply.',
  tags: ['irs', '183 days', 'residence', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'core-rule',
      title: 'The main rule: 183 days is not a calendar-year myth',
      content: [
        { kind: 'paragraph', text: 'In Portugal, tax residency is determined by Código do IRS, art. 16. The best-known test: you become tax resident if you have been physically present in Portugal for more than 183 days, consecutively or in total, in any 12-month period that begins or ends in the relevant tax year.' },
        { kind: 'paragraph', text: 'This is not necessarily the period “from 1 January to 31 December”. For example, if you arrived on 1 September 2025 and lived without leaving until March 2026, the 12-month period crosses the 2026 year, and the days may create residence for part of 2026.' },
        { kind: 'checklist', items: [
          'Days of physical presence in Portugal are counted, including the day of arrival and the day of departure, if you were actually in the country for part of the day.',
          '183 days is the “more than 183” threshold, meaning 184 days or more.',
          'The days do not have to be consecutive: short trips abroad simply do not count as Portuguese days.',
          'The tax year for IRS is the calendar year: 1 January — 31 December.',
          'The IRS return for 2026 is usually filed from 1 April to 30 June 2027 via Portal das Finanças.',
          'The immigration stay rule for D7/D8 and tax residency are different regimes: a residence permit is not automatically the same as tax residency, but in practice it often leads to it.'
        ] }
      ]
    },
    {
      id: 'habitual-residence',
      title: 'The second test: habitual residence 🏠',
      content: [
        { kind: 'paragraph', text: 'Even if you spent fewer than 184 days in Portugal, you may become tax resident if, on any day of the relevant 12-month period, you have a home in Portugal in circumstances that indicate an intention to use it as a habitual residence — your normal, permanent place of life.' },
        { kind: 'paragraph', text: 'In practice, Finanças looks not only at the tenancy agreement, but at the overall facts: where your family is, where you work, where your children study, where your banking and everyday life are, and where you actually live.' },
        { kind: 'checklist', items: [
          'A long-term contrato de arrendamento for 12+ months increases the risk of residence.',
          'Your own flat or house, available for permanent living, is a strong factor.',
          'An atestado de residência from Junta de Freguesia confirms an address, but by itself does not determine tax status.',
          'Registering your address in your NIF as morada fiscal in Portugal is an important signal for Finanças.',
          'Connected utilities, internet, children’s school, an SNS family doctor — additional facts.',
          'If you live in a hotel or temporary Airbnb for 1–2 months, this is weaker, but it does not remove the day count.',
          'If you want to remain non-resident, keep evidence that your centre of vital interests is outside Portugal.'
        ] },
        { kind: 'warning', text: 'Beginner’s mistake: “I was there for fewer than 183 days, so I am definitely non-resident”. Incorrect. Portugal has a separate habitual residence test, and it may apply before the 184th day.' }
      ]
    },
    {
      id: 'what-residency-changes',
      title: 'What changes if you are tax resident',
      content: [
        { kind: 'paragraph', text: 'A Portuguese tax resident declares worldwide income in IRS: salary, dividends, interest, rental income, capital gains, pensions, income from recibos verdes, foreign accounts and brokers. A non-resident usually declares only Portuguese-source income.' },
        { kind: 'checklist', items: [
          'A resident files Modelo 3 IRS and, where there is foreign income, Anexo J.',
          'A non-resident with Portuguese rent, salary or capital gains may also be required to file IRS.',
          'The first IRS bracket in 2026 is 11.97%, but the final result depends on the scale, deductions and type of income.',
          'Many investment income items are taxed autonomously at 28%, but a resident can sometimes choose englobamento — inclusion in the general scale.',
          'For salary and self-employment, withholding na fonte and Segurança Social are important; NISS is needed for social contributions, but does not determine tax residency.',
          'Double taxation treaties resolve conflicts if two countries consider you resident.',
          'The old NHR for new applicants has effectively been replaced by IFICI; this is a separate preferential regime and it does not remove the residency test.'
        ] },
        { kind: 'warning', text: 'Do not confuse the address in your NIF with actual residence. Morada fiscal in Portugal is often used by Finanças as an indicator, but the decisive factors are the rules in CIRS art. 16 and the facts. If you have moved, update your morada fiscal within 60 days.' }
      ]
    },
    {
      id: 'split-year',
      title: 'Split-year residence: the year can be divided',
      content: [
        { kind: 'paragraph', text: 'Portugal applies the residência fiscal parcial regime. If you move to Portugal or leave it during the year, tax status may apply not for the whole calendar year, but from the first day of the period of stay until the last day, provided the CIRS conditions are met.' },
        { kind: 'substeps', items: [
          {
            id: 'arrival',
            title: 'On arrival',
            content: [
              { kind: 'paragraph', text: 'If you arrived and met the 183-day test or the habitual residence test, residence usually starts from the first day of presence in Portugal in the relevant period, not from the date you receive the AIMA residence permit.' }
            ]
          },
          {
            id: 'departure',
            title: 'On departure',
            content: [
              { kind: 'paragraph', text: 'If you left permanently, closed your home and moved your centre of life, you may be resident only until the date of departure. But you need to update your morada fiscal to a foreign address and have evidence: tickets, a new tenancy/employment contract, and a tax residence certificate from another country.' }
            ]
          }
        ] },
        { kind: 'checklist', items: [
          'Keep boarding passes, travel history, tenancy agreements and bills.',
          'Maintain a table of days by country: date of entry, date of departure, country, basis.',
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
        { kind: 'paragraph', text: 'When Portuguese tax residency ends, Portugal may tax the “unrealised” gain in the value of certain financial assets. This is called exit tax. The mechanics for individuals are linked to Código do IRS, in particular the capital gains taxation regimes when transferring tax residence outside Portugal.' },
        { kind: 'paragraph', text: 'In essence: if you have shares, company interests, fund units or other assets with a gain, Finanças may consider that a taxable gain has arisen on departure as the difference between the market value on the departure date and the acquisition price. For moves to the EU/EEA, deferral/instalment options are usually possible under the conditions of the law; for third countries, the risk of immediate tax is higher.' },
        { kind: 'checklist', items: [
          'Prepare a list of brokers, banks, crypto platforms and company interests before changing residence.',
          'Record the acquisition cost: broker reports, contract notes, bank statements.',
          'Determine the market value of assets on the departure date.',
          'Check whether the asset falls under the exit tax regime: shares, quotas, units, options, funds.',
          'Compare a move to the EU/EEA and outside the EU/EEA: the tax consequences may differ.',
          'Check the tax treaty with the new country: it does not always override Portuguese exit tax.',
          'Discuss the sale/transfer/holding of assets before departure with a contabilista or advogado fiscal, especially for a portfolio from €50,000.'
        ] },
        { kind: 'warning', text: 'Exit tax is an area where filing IRS yourself often ends in mistakes. If you are leaving Portugal with a substantial portfolio, interests in an Lda/SA or stock options, plan your tax exit before changing your morada fiscal.' }
      ]
    },
    {
      id: 'practical-check',
      title: 'Practical checklist for D7/D8 and new moves',
      content: [
        { kind: 'paragraph', text: 'For D7/D8, the typical scenario is: a person arrives with a visa, rents housing, obtains NIF/NISS/SNS, and then a residence permit from AIMA. Tax status is determined not by the date of the plastic card, but by days, housing and the actual centre of life.' },
        { kind: 'checklist', items: [
          'Before moving, decide whether you want to become Portuguese resident in the current year or from 1 January of the following year.',
          'Calculate the 184th day by the rolling 12-month period, not only by the calendar year.',
          'Do not set a Portuguese morada fiscal “just in case” if you are in fact still living in another country and want to preserve non-residence.',
          'If you already live in Portugal, update your NIF address and prepare for IRS as a resident.',
          'Check whether your country has a treaty with Portugal and which tie-breaker rules apply.',
          'Gather a foreign tax residence certificate if another country also considers you resident.',
          'For remote work, check not only IRS, but also social security: NISS, A1 for the EU, contributions as a trabalhador independente.',
          'For the IFICI preferential regime, check the separate requirements and registration deadlines; it is not an automatic benefit for all D7/D8.'
        ] },
        { kind: 'warning', text: 'If you receive income from abroad and became resident in Portugal, “the money did not arrive in a Portuguese account” does not exempt you from IRS. What matters is not the account, but tax residency and the source/type of income.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Residência Fiscal via Portal das Finanças', amountEUR: 0, note: 'Usually requested online free of charge; needed for banks, brokers and the application of tax treaties.' },
    { label: 'Contabilista consultation on residency/IRS', amountEURMin: 60, amountEURMax: 200, note: 'Typical range for a one-off consultation; complex cases involving exit tax and foreign assets cost more.' },
    { label: 'IRS preparation with Anexo J', amountEURMin: 100, amountEURMax: 400, note: 'Depends on the number of countries, brokers, rentals, crypto and self-employment.' }
  ],
  sources: [
    {
      title: 'Autoridade Tributária: Residents and non-residents — information leaflet',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_Residentes_Nao_Residentes.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS, art. 16 — tax residence',
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
