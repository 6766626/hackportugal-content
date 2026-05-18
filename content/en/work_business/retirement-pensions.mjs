export default {
  editorialVoice: 'hackportugal',
  id: 'retirement-pensions',
  categoryId: 'work_business',
  title: 'Pension system — Segurança Social, PPR, for retirees',
  tldr: 'State pension: the normal age in 2026 is 66 years and 9 months (it increases according to the life-expectancy formula). The minimum entitlement period is usually 15 years of contributions; the amount is calculated by Segurança Social.\n\n**PPR** (Plano Poupança-Reforma) is a private pension with tax benefits (deduction of up to 20% of contributions in IRS). Foreign pensions (Russian Federation, USA, United Kingdom) fall under IRS — taxed at progressive rates (10% NHR limit for those who had the old NHR; NHR closed in 2024 and was replaced by IFICI, which does not cover pensions). For foreigners: international social security agreements count contribution periods.',
  tags: ['pension', 'retirement age', 'ppr', 'old age'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'state-pension',
      title: '🏛️ State pension (Pensão por Velhice)',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '2026 conditions', content: [
            { kind: 'checklist', items: [
              '🎂 **Age**: 66 years and 9 months in 2026; reviewed annually using the life-expectancy formula (in 2025 it was 66 years and 7 months)',
              '📅 **Minimum contribution record**: 15 years for pension entitlement',
              '🏆 **Amount**: calculated using the Segurança Social formula (remuneração de referência × taxa global de formação). 40+ years are important for special regimes, but do not automatically mean a “full” pension',
              '💼 **Early claiming**: generally from age 60 with 40 years of contributions, with a permanent redução of 0.5% for each month of antecipação and a possible fator de sustentabilidade. No penalties — only for special long career regimes',
              '🐌 **Carreiras muito longas**: for example, age 60+ and a 48-year contributive career, or age 60+ and 46 years of contributions if contributions started before the established early age. Check the simulation in Segurança Social Direta',
              '⏳ **Late retirement** (after full retirement age): bonus for each additional year'
            ]}
          ]},
          { id: 's2', title: 'Amount', content: [
            { kind: 'checklist', items: [
              'The formula is complex: Segurança Social calculates the remuneração de referência and taxa global de formação da pensão. It is better to use the simulação in Segurança Social Direta. The simplification 2.5% × 40 years is not the official formula',
              '**Minimum** depends on contribution record (bands <15 / 15-20 / 21-30 / 31+ years). With IAS 2026 at €537.13, check the exact figures in the current portaria de atualização das pensões',
              '**Average**: ~€530/month',
              '**Maximum**: 12× IAS = €6,445.56/month (but requires maximum contributions throughout working life)',
              'Pensão is paid 14 times a year (12 + holiday and Christmas payments)'
            ]}
          ]},
          { id: 's3', title: 'Application and start', content: [
            { kind: 'checklist', items: [
              '**3-6 months before retirement age**: apply via Segurança Social Direta',
              'Documents: NISS record, employment history, identity document',
              'Request a calculation on the portal — find out the estimated amount',
              'Process: 3-6 months',
              'Pension starts from the reforma date; first payment — in the following month',
              'You do not need to “leave work” — you can work part-time + receive a pension'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'ppr',
      title: '💼 PPR — private pension with tax benefits',
      content: [
        { kind: 'paragraph', text: 'Plano Poupança-Reforma is the main instrument for personal retirement savings in Portugal.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Tax benefits', content: [
            { kind: 'checklist', items: [
              '✅ **IRS deduction of 20% of contributions**:',
              '  - <35 years: up to **€400/year** deduction (for €2,000 of contributions = €400)',
              '  - 35-50 years: up to **€350/year**',
              '  - >50 years: up to **€300/year**',
              '✅ **0% capital gains tax** when withdrawing in retirement (if the term is complied with)',
              '✅ **8% tax** on early withdrawal (versus the usual 28%)',
              '⚠️ Limit: minimum holding period of 5 years before retirement age 60, otherwise a penalty applies',
              '💡 For optimisation: contribute the maximum for the age limit each year — the best tax benefits in Portugal'
            ]}
          ]},
          { id: 'p2', title: 'What to invest in', content: [
            { kind: 'checklist', items: [
              '**PPR fundo (investment fund)**: variable return, 1-3% annual fee',
              '**PPR seguro (insurance product)**: guaranteed return ~2-4%, lower fees, but lower potential',
              '**Self-managed PPR (rare in Portugal)**: ETFs or individual shares — through specialised providers',
              '**Top providers**: Caixa, Millennium BCP, Santander, Patris, Optimize',
              '**Best by performance**: comparison on ASF.pt'
            ]}
          ]},
          { id: 'p3', title: 'Withdrawing funds', content: [
            { kind: 'checklist', items: [
              '**Normal**: on reaching retirement age, as a lump sum or monthly annuity',
              '**Early with tax penalty**: before age 60, if the investment is active — 28% rate on capital gains',
              '**Special withdrawal in difficult circumstances**: unemployment > 12 months, serious illness, disability — 8% rate',
              '**Inheritance**: PPR passes to heirs without inheritance tax (Imposto do Selo 0% for PPR)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign-pensions',
      title: '🌍 Foreign pensions in Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Taxation', content: [
            { kind: 'checklist', items: [
              'Portuguese tax residents are taxed on their worldwide income',
              'Foreign pensions are declared in Anexo H of the IRS return',
              '**Standard tax**: progressive scale 11.97-48%',
              '**Old NHR (before 2024)**: fixed 10% for foreign pensions × 10 years (for those who qualified in time)',
              '**IFICI (new, 2024+)**: does NOT cover foreign pensions',
              '**Double tax treaties (DTT)**: Portugal has them with the Russian Federation, Brazil, the USA, the United Kingdom, France, Germany, Spain — double taxation is usually avoided through a credit',
              'DTT with Russia (1968 protocol) — pensions from the Russian Federation are taxed only in the country of residence (that is, in Portugal) — a straightforward situation',
              'USA: pensions are taxed in both countries, but FTC + treaty article are reconciled — consult a specialist'
            ]}
          ]},
          { id: 'f2', title: 'Receiving a foreign pension in Portugal', content: [
            { kind: 'checklist', items: [
              'Open a bank account in Portugal',
              'Provide IBAN + proof of residence to the pension authority in your country',
              'Some prefer SEPA, some — international SWIFT',
              'Currency conversion fees: 1-3% if the currency is not euro',
              '**Wise / Revolut**: better rates for monthly transfers',
              'Russian Federation: transfers via SWIFT after sanctions — restricted, you need to use a non-sanctioned bank'
            ]}
          ]},
          { id: 'f3', title: 'Pension portability in the EU', content: [
            { kind: 'checklist', items: [
              'Contribution periods in any EU country count towards the pension calculation in Portugal',
              'EU citizens receive a pension according to the country of last employment',
              '**Regulation (EC) 883/2004**: coordination of social security systems',
              'If you worked in 3 countries — each pays its proportional share',
              'Apply through Segurança Social in Portugal — they contact the other countries'
            ]}
          ]},
          { id: 'f4', title: 'Russia / Brazil / Ukraine: bilateral agreements', content: [
            { kind: 'checklist', items: [
              '**Russia-Portugal**: 1995 bilateral social security agreement — contribution periods are counted, but there is a lot of bureaucracy',
              '**Brazil-Portugal**: full mutual recognition, work ≥ 1 year in either country counts',
              '**Ukraine-Portugal**: 2017 agreement, operational',
              '**Belarus-Portugal**: no direct agreement; contribution periods are not counted',
              'Process: Segurança Social requests employment history from the foreign authority, may take 6-18 months'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'senior-benefits',
      title: '👵 Benefits for retirees',
      content: [
        { kind: 'checklist', items: [
          '🚇 **Transport**: 50% discount on metro/buses in Lisbon for 65+',
          '🎫 **CP (trains)**: 50% discount with the Sénior fare for 65+',
          '🎭 **Museums**: free or 50% almost everywhere',
          '🎬 **Cinema**: €4-5 (versus €7-10)',
          '💊 **Medicines**: enhanced SNS subsidies (escalão A — 90% subsidy)',
          '🏊 **Municipal swimming pools**: 50% discount',
          '⚡ **Tarifa Social Energia**: 33% discount on electricity for low income',
          '🏠 **IMI exemption**: for main residence, owner ≥ 65, low income',
          '💰 **Complemento Solidário para Idosos (CSI)**: top-up to minimum income (€565/month 2026) for low-income retirees',
          '🍴 **Cantinas Sociais**: meals €1.5-3 for elderly people in need',
          '📞 **Linha do Idoso (760 24 24 24)**: help and information for elderly people',
          '🏥 **Apoio Domiciliário**: home care services through the municipality / Misericórdias'
        ]}
      ]
    },
    {
      id: 'planning',
      title: '📊 Retirement planning when moving to Portugal',
      content: [
        { kind: 'checklist', items: [
          '📅 **5-10 years before retirement**: open a PPR, contribute the maximum within the limit',
          '📊 **Diversify**: ~50% PPR, 25% global ETFs (through a Portuguese broker), 25% property',
          '🇪🇺 **If you have an EU pension**: confirm portability to Portugal',
          '💰 **Minimum income for a comfortable retirement in Portugal**: €1,500-2,000/month for the Lisboa area, €1,200-1,500 for the regions',
          '🏥 **Health**: SNS cover is sufficient; a private top-up at ~€80-150/month adds comfort',
          '🏠 **Consider buying** in the Algarve / regions — cheaper and a comfortable climate',
          '👨‍👩‍👧 **Reagrupamento for an elderly parent**: children can bring parents if they live in Portugal (see the relevant guide)',
          '⚠️ **Inflation protection**: Portuguese state pensions are indexed to inflation; PPR — depends on the instrument',
          '📞 **Consultation**: financial adviser + accountant (especially for pension situations involving several countries)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Minimum state pension (depends on contribution record)', amountEUR: 0, note: 'See the official mínimos 2026 table by contribution record (<15 / 15-20 / 21-30 / 31+ years)' },
    { label: 'Average state pension', amountEUR: 530, note: '€/month' },
    { label: 'Maximum PPR contribution (for 20% deduction)', amountEUR: 2000, note: '€/year up to 35' },
    { label: 'IRS deduction on PPR <35', amountEUR: 400, note: '€/year' },
    { label: 'Complemento Solidário para Idosos', amountEUR: 565, note: '€/month top-up' }
  ],
  sources: [
    { title: 'Segurança Social — Pensions', url: 'https://www.seg-social.pt/pensoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — PPR comparison', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EC) 883/2004 — coordination of EU social security', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32004R0883', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
