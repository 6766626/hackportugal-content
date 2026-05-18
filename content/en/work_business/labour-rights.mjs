export default {
  editorialVoice: 'hackportugal',
  id: 'labour-rights',
  categoryId: 'work_business',
  title: 'our rights in Portugal — what employees to know',
  tldr: 'Employment in Portugal are governed the Código do Trabalho (Lei 7/2009).\n\nThe essentials: a 40-hour week (max. 48 hours including overtime), 22 working days of holiday + 13 public holidays, parental leave of 120-180 days paid at 90-100%, dismissal requires justification + compensation (cap of 12-20 months’ salary), minimum wage €920/month in 2026. Probation period: 90 days (general), 180 (positions of responsibility), 240 (management roles).\n\nTrade unions are active: CGTP-IN and UGT. Complaints about breaches of labour rights are submitted to ACT (Autoridade para as Condições do Trabalho).',
  tags: ['labour', 'employee rights', 'code'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'contract-types',
      title: '📋 Types of contracts',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Contrato sem termo (open-ended)', content: [
            { kind: 'checklist', items: [
              'Standard contract, with no end date',
              'Probation period: 90 days (ordinary), 180 (responsibility), 240 (management roles, highly qualified roles)',
              'Dismissal by the employer: requires justification (despedimento por justa causa, extinção, inadequação) + compensation',
              'Resignation by the employee: 30 days’ notice (up to 2 years with the company) or 60 days (more)'
            ]}
          ]},
          { id: 'c2', title: 'Contrato a termo certo (fixed-term with a fixed date)', content: [
            { kind: 'checklist', items: [
              'Specific end date. After the Agenda do Trabalho Digno (Lei 13/2023): the general maximum is **2 years** (including renewals). The minimum depends on the justification; for typical cases — 6 months',
              'Only for objective reasons listed in the Código do Trabalho (market conditions, temporary project, replacement of an employee, etc.)',
              'Maximum of **3 renewals**, and the total duration of renewals may not exceed the initial term',
              'At the end of the term, if not converted into an open-ended contract — compensation according to Lei 13/2023 (general rate of 24 days of basic salary + diuturnidades for each year); the specific calculation depends on the situation'
            ]}
          ]},
          { id: 'c3', title: 'Contrato a termo incerto (fixed-term without a fixed date)', content: [
            { kind: 'paragraph', text: 'Fixed-term without a fixed date (until completion of a project / replacement of someone on parental leave). Maximum **4 years** (after Lei 13/2023). Compensation follows the same general rules as termo certo.' }
          ]},
          { id: 'c4', title: 'Contrato de prestação de serviços / Recibo Verde', content: [
            { kind: 'paragraph', text: 'A format similar to being self-employed.\n\nYou pay taxes yourself through Anexo B. There are no employee labour rights under the Código do Trabalho — paid holiday from the employer, subsídios de férias/Natal, protection against dismissal. But when paying contributions to Segurança Social, an independent worker may have access to some social benefits (doença, parentalidade) subject to conditions. For protection, the contract must reflect genuine independent status; otherwise this is “falso recibo verde” — it may lead to recognition of an employment contract, additional Segurança Social assessments and ACT coimas (the amount depends on the category of breach).' }
          ]}
        ]}
      ]
    },
    {
      id: 'pay',
      title: '💰 Salary and taxes',
      content: [
        { kind: 'checklist', items: [
          '**Minimum wage 2026**: €920/month × 14 (including 13th salary + holiday pay)',
          '**Subsídio de férias** (holiday allowance): 1 monthly salary in June',
          '**Subsídio de Natal** (13th salary): 1 monthly salary in December',
          '**Subsídio de alimentação** (meal allowance): not mandatory, but common. €6-9/working day. Up to €6/day is not subject to IRS when paid in cash; with cartão/vale refeição the limit is higher — €10.20/day',
          '**Overtime (horas extras)** under art. 268 CT + Lei 13/2023 (Agenda do Trabalho Digno): rates **depend on the annual volume**. **Up to 100 hours/year**: +25% for the first hour on a working day, +37.5% for subsequent hours, +50% on a rest day/public holiday. **From the 101st hour/year**: rates increase to +50%/+75%/+100%. A collective agreement may set more favourable conditions',
          '**Night work** (22:00-07:00): +25% extra',
          '**Work on descanso semanal/feriado**: usually +50% for each hour; in some cases descanso compensatório is also due. A collective agreement may set better conditions (Código do Trabalho arts. 268, 269)',
          '**Deductions**: IRS (progressive scale 11.97-48%), Segurança Social 11%. The difference between gross and net is approximately 22-35% depending on salary',
          '**Payslip (recibo de vencimento)**: must be issued monthly, with a breakdown of all deductions'
        ]}
      ]
    },
    {
      id: 'time',
      title: '⏰ Working time',
      content: [
        { kind: 'checklist', items: [
          '**Standard**: 40 hours per week, 8 hours per day',
          'Maximum overtime: 150 hours/year (for most sectors)',
          'Lunch break: 1-2 hours, minimum 1 hour if the working day is >6 hours',
          'Break between shifts: ≥ 11 hours',
          'Weekly rest day: 1 mandatory + 1 additional (usually Saturday+Sunday)',
          'Flexible schedule: possible by agreement',
          '**Remote work (teletrabalho)**: regulated by Lei 83/2021 — written contract, payment of electricity/communications by the employer, right to disconnect'
        ]}
      ]
    },
    {
      id: 'leave',
      title: '🏖️ Holiday and sick leave',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Férias (annual leave)', content: [
            { kind: 'checklist', items: [
              '**22 working days** (standard) = approximately 31 calendar days',
              '⚠️ Additional days for assiduidade (previously +1–3 days) **were abolished by Lei 23/2012** and no longer apply as a Código do Trabalho rule — they may exist only under a collective agreement, internal policy or individual agreement',
              'Must be used during the calendar year (cannot be carried over without agreement)',
              'Paid at 100% + subsídio de férias',
              'If dismissed: compensation for unused days'
            ]}
          ]},
          { id: 'l2', title: 'Sick leave', content: [
            { kind: 'checklist', items: [
              'First 3 days — not paid (as a general rule)',
              'From the 4th day — Subsídio de doença from Segurança Social, 55-75% of average salary',
              'For long-term illness (>365 days) — 70%',
              'Medical certificate (baixa) from a family doctor or emergency department',
              '**Time off work** — up to 4 hours for medical appointments without salary reduction'
            ]}
          ]},
          { id: 'l3', title: 'Parental leave', content: [
            { kind: 'checklist', items: [
              '**120 days**: 100% of salary (standard)',
              '**150 days**: 80% (if shared with the partner)',
              '**180 days**: **90%** (since 2023, Lei 13/2023 — if both parents take ≥ 30 days)',
              '**Father**: 28 mandatory days + 8 optional (Lei 90/2019)',
              'Pregnancy: 30+ days before birth — mandatory leave',
              'Breastfeeding: 2 × 30 min per day of paid breaks until the child is one year old'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'dismissal',
      title: '🚪 Dismissal — your rights',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Despedimento por justa causa (for employee fault)', content: [
            { kind: 'paragraph', text: 'The employer must prove a serious breach: absenteeism, theft, serious conflict, systematic breach of duties. Written notice + right to defend yourself (direito de audiência prévia).\n\nIf the court finds the dismissal unlawful — compensation + reinstatement.' }
          ]},
          { id: 'd2', title: 'Despedimento colectivo / extinção (redundancy)', content: [
            { kind: 'checklist', items: [
              'Objective reasons: economic, market, technological',
              '30-75 days’ notice (depends on length of service)',
              'Compensation: **14 days’ salary for each year of service** (cap of 12 × monthly salary or minimum 3 × monthly salaries)',
              'Subsídio de desemprego: after dismissal for a reason not attributable to the employee'
            ]}
          ]},
          { id: 'd3', title: 'Abandono do trabalho', content: [
            { kind: 'paragraph', text: 'If an employee disappears for > 10 working days without a valid reason — the employer may treat this as resignation by the employee. This removes the right to compensation + Subsídio de desemprego.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights-conflicts',
      title: '⚖️ Conflicts and protection',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Trade unions', content: [
            { kind: 'checklist', items: [
              '**CGTP-IN** — the largest, left-wing, 600,000 members',
              '**UGT** — centrist, 400,000',
              '**FESAP**, **STE** — for civil servants',
              'Membership fee: 0.5-1% of salary',
              'Protection: collective bargaining, legal assistance, strikes'
            ]}
          ]},
          { id: 'r2', title: 'ACT — labour inspectorate', content: [
            { kind: 'checklist', items: [
              'Autoridade para as Condições do Trabalho',
              'Anonymous complaint: act.gov.pt → “Queixa / Denúncia”',
              'ACT checks: working conditions, salaries, overtime, workplace safety, falso recibos verdes',
              'Fines for the employer: €500-61,000'
            ]}
          ]},
          { id: 'r3', title: 'Courts — Tribunal do Trabalho', content: [
            { kind: 'checklist', items: [
              'For disputes about unlawful dismissal, unpaid salaries',
              'Deadline: 1 year after the event',
              'A lawyer is not mandatory (but recommended)',
              'Free legal aid (apoio judiciário) — if income < IAS × 1.5',
              'Average timeframe: 6-18 months',
              'Outcome: reinstatement / compensation + court costs'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Minimum wage 2026', amountEUR: 920, note: '€/month gross' },
    { label: 'Compensation on dismissal', amountEUR: 0, note: '14 days × years of service' },
    { label: 'Trade union membership', amountEUR: 0, note: '0.5-1% of salary' },
    { label: 'Employment lawyer', amountEURMin: 50, amountEURMax: 150, note: '€/hour' }
  ],
  sources: [
    { title: 'Código do Trabalho (Lei 7/2009 consolidated)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — work-related benefits', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CGTP-IN', url: 'https://www.cgtp.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UGT', url: 'https://www.ugt.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
