export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Social support in Portugal — RSI, subsidies, benefits',
  tldr: 'Portugal provides a wide range of social benefits to residents: **RSI** (rendimento social de inserção) — a minimum for incomes <€242/month; **Subsídio de desemprego** (unemployment benefit) — 65% of the average salary for up to 12-30 months; **Subsídio de habitação** (housing subsidy) — up to €200/month; **Tarifa Social Energia** — 33% discount on electricity; **habitação social** (social housing) — rent based on income. Requirements: NISS, minimum contribution record with Segurança Social (depends on the benefit), legal residence.',
  tags: ['rsi', 'subsídio', 'social support', 'benefit'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'RSI is a basic benefit for individuals / families with income below the minimum. The state guarantees a minimum income (a social contract: “you provide work, we provide a basic income”).' },
        { kind: 'checklist', items: [
          '📊 **Amount**: ~€242.30/month for the first adult (2026, linked to the Segurança Social reference value). +50% for a spouse (~€121), +30% per child',
          '🧾 **Conditions**: household income below the threshold amount; no significant assets; willingness to work (there is an obligation to look for work through IEFP)',
          '📅 **Duration**: 12 months, renewable each year if conditions continue to be met',
          '👨‍👩‍👧 **For foreigners**: legal residence in PT ≥ 1 year (3 years for non-EU citizens). Exception: refugees, TPD — from the moment status is granted',
          '📍 **Application**: SS Direta → “Prestações” → “Rendimento Social de Inserção”, or at an ISS office',
          '⏱️ **Processing**: 30-60 days',
          '📋 **Obligations**: registration with IEFP as a jobseeker, attendance at compulsory courses / interviews, not refusing “suitable” work'
        ]},
        { kind: 'warning', text: 'RSI is incompatible with: subsídio de desemprego, full-time work (>RSI threshold), significant assets (>4× RSI in the bank). Failure to comply with the rules = loss for 2 years.' }
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
              'Dismissed **through no fault of your own** (art. 381, 387 Código do Trabalho) — redundancy, bankruptcy, abolition of the role',
              '❌ Voluntary resignation — not granted (exception: serious personal circumstances)',
              '❌ Self-employed workers (recibos verdes) without cessação de atividade — not covered',
              'You must be willing to work and registered with IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Amount and duration', content: [
            { kind: 'checklist', items: [
              '**65% of average salary** over the last 12 months (gross), maximum ~ 2.5× IAS = €1,342/month (2026)',
              'Minimum: 1× IAS = €537.13/month',
              'Duration depends on age + contribution record:',
              '  < 30 years, 540-720 contributions: 12-18 months',
              '  30-40 years, 720-1080: 18-24 months',
              '  ≥ 50 years, 1800+: up to 30 months',
              'After expiry: Subsídio Social de Desemprego (80% RSI, additional 6-18 months) if household income is low'
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
              '**Porta 65 Jovem**: for young people aged 18-35 — up to €200/month rent subsidy',
              '**Apoio ao Arrendamento** (IHRU): for low-income families, up to 50% of the rent',
              'Requirements: household income ≤ 4× IAS, tenancy agreement',
              'Application: ihru.pt → Candidaturas',
              'Processing: 2-6 months'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (municipal housing)', content: [
            { kind: 'checklist', items: [
              'Renting a flat from the municipality according to a formula (income × %)',
              'Rate: usually €20-80/month (depends on income and household size)',
              'Waiting list: 3-10 years in Lisbon / Porto, faster in the regions',
              'Application: at the Câmara Municipal of your place of residence',
              'Priority: large families, disabled people, pensioners, victims of domestic violence'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'A programme for working people on medium and low incomes: rent 20-30% below the market rate in designated buildings. Allocation through SIGA, budget from municipalities.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          'Discount of **33.8%** on electricity + **10%** on gas',
          'Applied automatically if you are in one of the categories:',
          '  - RSI recipient',
          '  - Subsídio de desemprego',
          '  - Abono de Família 1st-2nd bracket',
          '  - Pensioner with income < €6,820/year',
          '  - Complemento Solidário para Idosos',
          'EDP / Galp / Endesa — automatic application based on Segurança Social data',
          'If it has not been applied — request it through the supplier + check via the dgeg.gov.pt website',
          'Valid continuously while the status is maintained'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Other benefits',
      content: [
        { kind: 'checklist', items: [
          '🧒 **Abono de Família**: for children < 18 / 24 student / 27 disabled. €40-190/month depending on bracket (see separate guide)',
          '👶 **Subsídio Parental**: 120-180 days of parental leave at 100% / 90% of salary',
          '🎒 **Apoio às despesas escolares**: discount on textbooks, materials — ISS.gov.pt',
          '🧑‍🎓 **Bolsa de estudo**: for university — DGES, €500-5,000/year',
          '♿ **Complemento por Dependência**: for disabled people and those needing care — up to €100-200/month',
          '👵 **Complemento Solidário para Idosos (CSI)**: for pensioners with income < IAS',
          '🧑‍⚕️ **Isenção de taxas moderadoras**: automatic for benefit recipients + pregnant women, children < 18, pensioners > 65 on low incomes'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 General application process',
      content: [
        { kind: 'checklist', items: [
          '1. Go to **SS Direta** (seg-social.pt) or an ISS office',
          '2. Gather: Cartão de Cidadão/residence permit, NISS, IBAN, proof of income (3-12 months), household composition, dependants’ documents',
          '3. Apply online or in person',
          '4. Wait for the decision (30-90 days)',
          '5. If approved — automatic monthly payments to your IBAN',
          '6. Annual review — confirm income, family status',
          '⚠️ Do not hide income: Segurança Social cross-checks data with the tax authority; you will have to repay the benefits + a fine of up to 3 times the amount'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'RSI for the first adult', amountEUR: 242.30, note: '€/month 2026' },
    { label: 'Minimum Subsídio desemprego', amountEUR: 537.13, note: '€/month (1 IAS)' },
    { label: 'Maximum Subsídio desemprego', amountEUR: 1342, note: '€/month (2.5 IAS)' },
    { label: 'Porta 65 Jovem (rent)', amountEURMin: 100, amountEURMax: 200, note: '€/month' },
    { label: 'Habitação social (rent)', amountEURMin: 20, amountEURMax: 80, note: '€/month' },
    { label: 'Tarifa Social energia discount', amountEUR: 0, note: '33.8% of the bill' }
  ],
  sources: [
    { title: 'Segurança Social — benefits', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IHRU — rental support', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IEFP — Centro de Emprego', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Tarifa Social Energia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal65 — Porta 65 Jovem', url: 'https://www.portaldahabitacao.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
