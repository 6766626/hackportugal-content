export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Social support in Portugal — RSI, subsidies, benefits',
  tldr: 'Portugal offers a wide range of social benefits to residents: **RSI** (rendimento social de inserção) — a top-up to the household reference amount (100% of the base for the applicant, 70% for each additional adult, 50% for a child); **Subsídio de desemprego** — around 65% of remuneração de referência, maximum 2.5×IAS (€1,342.83 in 2026), duration according to the Segurança Social table by age and contribution record; **Porta 65 Jovem** — rent subsidy (amount according to IHRU tables, no fixed cap); **Tarifa Social Energia Elétrica** — around 33.8% discount on eligible tariff components (for gas — separate tariff ~31.2%); **habitação social** — rent under the renda apoiada formula. Requirements: legal residence in PT, income/assets assessment, and sometimes a minimum contribution record.',
  tags: ['rsi', 'subsídio', 'social support', 'benefit'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'RSI is a top-up to the household reference amount for families with very low income. Calculation components: 100% of the base amount for the applicant, 70% for each additional adult, 50% for each minor; payment = this reference amount minus the family income taken into account.' },
        { kind: 'checklist', items: [
          '📊 **Base amount**: around €242.80/month for the applicant in 2026 (≈ 45.208% of IAS €537.13); +70% of this amount for each additional adult; +50% for each minor',
          '🧾 **Conditions**: total family income < threshold amount; limit on movable assets (usually ≤ 60× IAS); willingness to work (there is an obligation to look for work through IEFP)',
          '📅 **Duration**: 12 months, renewable each year if conditions continue to be met',
          '👨‍👩‍👧 **For foreigners**: legal residence in Portugal; for third-country nationals, Segurança Social usually requires a residence permit/legal residence for at least 1 year. For refugees and certain protected statuses — special rules (check the current Guia Prático RSI)',
          '📍 **Application**: SS Direta → “Prestações” → “Rendimento Social de Inserção”, or at an ISS office',
          '⏱️ **Processing**: 30-60 days',
          '📋 **Obligations**: registration with IEFP as a jobseeker, attendance at compulsory courses / interviews, not refusing “suitable” work'
        ]},
        { kind: 'warning', text: 'Unemployment benefit, salary and other income are taken into account when calculating RSI and may reduce or exclude the payment. The family’s movable assets must not exceed the established limit (usually 60× IAS). Non-compliance with the rules/concealment of income = loss of entitlement and penalties.' }
      ]
    },
    {
      id: 'unemployment',
      title: '📉 Subsídio de desemprego (unemployment benefit)',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Requirements', content: [
            { kind: 'checklist', items: [
              '≥ 360 days of contributions to Segurança Social in the last 24 months',
              '**desemprego involuntário** status: despedimento coletivo, extinção do posto de trabalho, inadaptação, caducidade de contrato a termo, employer bankruptcy, termination by the worker with justa causa (supported by documents)',
              '❌ Voluntary resignation without justa causa — not granted',
              'For recibos verdes, the usual subsídio de desemprego does not apply. Separate benefits may be available on cessação de atividade for economically dependent trabalhadores independentes or empresários/gerentes under special contribution and activity-termination conditions',
              'You must be available to work and registered with IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Amount and duration', content: [
            { kind: 'checklist', items: [
              'Usually **65% remuneração de referência**: the sum of registered remunerations for the first 12 months of the 14 months preceding unemployment, divided by 360',
              'Maximum: **2.5× IAS = €1,342.83 in 2026** (not above the established limits based on net reference remuneration)',
              'Minimum: usually **1× IAS = €537.13 in 2026**, but not above net remuneration de referência; with a very low salary, the benefit may be below IAS',
              'Duration is determined by the Segurança Social table according to age and contribution record: from 150 days for young workers with the minimum record to 540 days and more with additional days for a long career. See the detailed table in the Guia Prático Subsídio de Desemprego',
              '**Subsídio social de desemprego** is available with low household income; the amount is usually 80% of IAS for a single person or 100% of IAS for a person with a household; duration depends on age/contribution record and on whether it is granted as initial or subsequent after subsídio de desemprego'
            ]}
          ]},
          { id: 'u3', title: 'Application', content: [
            { kind: 'checklist', items: [
              '**Step 1**: register at Centro de Emprego (IEFP) as unemployed',
              '**Step 2**: on SS Direta — “Prestações” → “Subsídio de desemprego” → complete the form',
              'Or: through an ISS office with documents (employment contract, dismissal letter)',
              '📅 Deadline: within 90 days after dismissal',
              '⏱️ Payment start: 30-45 days for processing, money is paid retroactively to the dismissal date'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'housing',
      title: '🏠 Housing — subsidies and social housing',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Subsídio de Renda / Porta 65', content: [
            { kind: 'checklist', items: [
              '**Porta 65 Jovem**: for ages 18–35 (in a couple, one of the applicants may be up to 37). The amount is a percentage of eligible rent according to IHRU/Portal da Habitação tables, not a fixed €200 cap. The amount is calculated by the Portal da Habitação simulator',
              '**Apoio extraordinário à renda** — cash support for tenants with high esforço com renda, usually up to €200/month, under the conditions of the law and through AT/Segurança Social',
              '**Programa de Arrendamento Acessível** — rental contracts with rent below reference values and tax benefits for landlords. This is not a universal 50% subsidy',
              'Criteria depend on the programme: Porta 65 — age, lease, tax residence, income/rent-effort and maximum rent tables; apoio extraordinário à renda — effort rate and household income criteria',
              'Application: portaldahabitacao.pt → Candidaturas',
              'Processing: 2-6 months'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (municipal housing)', content: [
            { kind: 'checklist', items: [
              'Renting a flat from the municipality under the regime de renda apoiada (Lei 81/2014) based on income and family composition; it can be very low, with no universal range',
              'Waiting list: 3-10 years in Lisbon / Porto, faster in the regions',
              'Application: at the Câmara Municipal for your place of residence',
              'Priorities depend on the municipality: homelessness, unsafe housing, disability, elderly, minors/dependants, domestic violence victims, low income, overcrowding, etc.'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'A programme for working people on middle and low incomes: the national Programa de Arrendamento Acessível works through rent below reference values and tax benefits for landlords. Municipal renda acessível programmes are applied for through Câmara websites/municipal platforms and may use lotteries; rules differ by city.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          '**Tarifa Social Electricidade**: discount of around **33.8%** on eligible regulated tariff components (the final bill reduction is lower because taxes and the audiovisual contribution are not discounted in the same way). A domestic low-voltage contract with potência contratada ≤ 6.9 kVA is required',
          '**Tarifa Social Gás Natural**: separate discount of around **31.2%**. Criteria are **stricter** than for electricity — for example, for the abono de família category the thresholds are narrower; the full list is on dgeg.gov.pt',
          'Applied automatically if you are in one of the categories (according to the full DGEG list for electricity):',
          '  - **CSI** (Complemento Solidário para Idosos)',
          '  - **RSI** (Rendimento Social de Inserção)',
          '  - **Any subsídio de desemprego**: contributivo, social inicial, social subsequente, prolongamento, parcial, cessação atividade, cessação negócio, apoio desempregados de longa duração',
          '  - **Abono de Família 1-2 tier**',
          '  - **Pensão Social de Velhice / Invalidez** (for electricity)',
          '  - **Complemento da Prestação Social para a Inclusão** (for electricity)',
          '  - Households with annual income ≤ €6,272 (+€3,136 for each member without income, up to 10 people). The current threshold is on dgeg.gov.pt',
          'EDP / Galp / Endesa, etc. — automatic application using Segurança Social / AT / NIF data',
          'If automatic matching did not work — request confirmation from Segurança Social/AT and send it to the supplier; check through dgeg.gov.pt',
          'Valid continuously while the status is maintained'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Other benefits',
      content: [
        { kind: 'checklist', items: [
          '🧒 **Abono de Família**: for children < 18 / 24 student / 27 disabled. €40-190/month depending on tier (see separate guide)',
          '👶 **Subsídio parental inicial**: percentages depend on the chosen duration and sharing between parents: 120 days — 100%, 150 days — 80% (or 100% when shared under SS rules), 180 days — 90% under shared-leave rules. Check the Segurança Social table',
          '🎒 **Apoio às despesas escolares**: discount on textbooks, materials — ISS.gov.pt',
          '🧑‍🎓 **Bolsa de estudo**: for university — DGES, €500-5,000/year',
          '♿ **Complemento por Dependência**: for disabled people and those needing care — up to €100-200/month',
          '👵 **Complemento Solidário para Idosos (CSI)**: top-up for older people with annual resources below the CSI reference threshold; the income of the applicant, spouse/partner and, in some cases, children is taken into account. Take the threshold from the current Guia Prático CSI',
          '🧑‍⚕️ **Taxas moderadoras in SNS** have largely been abolished (Lei n.º 22/2022), but may apply in urgência without a referral from SNS24/INEM/health centre and without subsequent hospitalisation. Isenções exist for minors, pregnant women, people with economic insufficiency, certain chronic conditions/disabilities and other legal categories'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 General application process',
      content: [
        { kind: 'checklist', items: [
          '1. Log in to **SS Direta** (seg-social.pt) or go to an ISS office',
          '2. Gather the basic set: CC/residence permit, NIF, NISS, IBAN, proof of income (3-12 months), household composition, dependant documents. The list depends on the benefit: for desemprego you need the employer declaration/modelo RP5044 or equivalent and IEFP registration; for housing — registered lease and tax data; for RSI — proof of household income/assets and residence status',
          '3. Apply online or in person',
          '4. Wait for the decision (30-90 days)',
          '5. If approved — automatic monthly payments to the IBAN',
          '6. Annual review — confirm income and family status',
          '⚠️ Do not conceal income: Segurança Social cross-checks data with the tax authority, and you will have to repay benefits + a fine of up to 3 times the amount'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'RSI base amount for the applicant', amountEUR: 242.80, note: '€/month 2026 (≈ 45.208% × IAS €537.13)' },
    { label: 'Minimum Subsídio desemprego', amountEUR: 537.13, note: '€/month (1× IAS), but not above net remuneration de referência' },
    { label: 'Maximum Subsídio desemprego', amountEUR: 1342.83, note: '€/month (2.5× IAS 2026)' },
    { label: 'Porta 65 Jovem (rent)', amountEUR: 0, note: 'amount varies — calculated by the Portal da Habitação simulator according to eligible rent and municipality' },
    { label: 'Habitação social (rent)', amountEUR: 0, note: 'calculated by the municipality under the renda apoiada formula (Lei 81/2014)' },
    { label: 'Tarifa Social electricity', amountEUR: 0, note: 'discount ~33.8% on eligible tariff components (final bill reduction is lower after taxes)' },
    { label: 'Tarifa Social natural gas', amountEUR: 0, note: 'separate discount ~31.2% for eligible low-pressure household contracts' }
  ],
  sources: [
    { title: 'Segurança Social — Guia Prático RSI', url: 'https://www.seg-social.pt/rendimento-social-de-insercao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Guia Prático Subsídio de Desemprego', url: 'https://www.seg-social.pt/subsidio-de-desemprego', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Complemento Solidário para Idosos', url: 'https://www.seg-social.pt/complemento-solidario-para-idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IHRU / Portal da Habitação — Porta 65 Jovem', url: 'https://www.portaldahabitacao.pt/web/guest/porta-65-jovem', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IEFP — Centro de Emprego', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Energia Elétrica', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia-eletrica/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Gás Natural', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/gas-natural/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
