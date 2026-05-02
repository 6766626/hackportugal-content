export default {
  editorialVoice: 'hackportugal',
  id: 'parental-leave-rights',
  categoryId: 'work_business',
  title: 'Maternity leave and parental rights',
  tldr: 'Maternity leave (licença parental) in Portugal in 2026: “inicial” — 180 days when leave is shared (Lei 13/2023 — 90% of salary); 120 days for the mother only — 100%. Father: 28 mandatory days + up to 7 additional days. The job is protected during leave. Grandparents — 14 days “licença para grupos especiais”. Breastfeeding: 1 hour per day until the child is 1 year old. Moving to part-time until the child is 4 is guaranteed by Lei 7/2009. Extended rights apply for children with special needs.',
  tags: ['maternity', 'maternity leave', 'licença parental', 'mother', 'father', 'Segurança Social'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'overview',
      title: '👶 Leave structure',
      content: [
        { kind: 'substeps', items: [
          { id: 'mother', title: 'Mother — mandatory and additional parts', content: [
            { kind: 'checklist', items: [
              '🏥 **Mandatory part**: 6 weeks immediately after birth (minimum leave)',
              '👶 **Additional part**: 120 days for the mother only, paid at 100% of salary',
              '🤝 **Shared part** “inicial partilhada”: 180 days when leave is shared with the father (90% of salary, under Lei 13/2023)',
              '⏰ Leave can start 30 days before the due date',
              '👼 For twins: +30 days',
              '👶 For triplets: +60 days'
            ]}
          ]},
          { id: 'father', title: 'Father — rights and obligations', content: [
            { kind: 'checklist', items: [
              '🛌 **28 mandatory days** in the first 6 weeks after birth (10 — in the first 14 days; paid at 100%)',
              '➕ **+7 additional days** (consecutive or not) up to 4 months — paid at 100%',
              '🤝 **Shared part** (if there is an agreement with the mother): part of the 90% 180-day quota',
              '⚖️ Rights are protected — dismissal because of leave is unlawful (Lei 7/2009 art. 36)',
              '🏥 If the mother cannot take leave or has died — the father receives her part of the leave'
            ]}
          ]},
          { id: 'who-pays', title: 'Who pays', content: [
            { kind: 'checklist', items: [
              '🛡️ **Segurança Social** (Subsídio Parental) — the main source of payments',
              '💼 The employer does NOT pay during leave, but keeps the job open',
              '💸 Calculation: average salary for the last 6 months × 90% or 100%',
              '⏰ Money is paid into the bank account monthly',
              '📑 The application is submitted by the employer and the employee themselves via Segurança Social Direta'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apply',
      title: '📋 How to apply',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Before the birth', content: [
            { kind: 'checklist', items: [
              '📩 Notify the employer of the planned leave start date no later than 30 days in advance',
              '📋 Submit the “requerimento de subsídio parental” in Segurança Social Direta',
              '📑 Attach a medical certificate with the expected due date',
              '🤝 If the leave is shared (partilhada): submit a joint statement with the father'
            ]}
          ]},
          { id: 'a2', title: 'After the birth', content: [
            { kind: 'checklist', items: [
              '📜 The birth certificate must be submitted to Segurança Social within 30 days',
              '⏰ Confirm the start and end dates of the leave via Segurança Social Direta',
              '📲 The leave schedule can be changed: for example, extend or shorten the additional part',
              '💰 The first payment arrives within 30 days after registration'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'breastfeeding',
      title: '🤱 Breastfeeding — rights',
      content: [
        { kind: 'paragraph', text: 'Under Lei 7/2009 art. 47, the mother has the right to a daily reduction in working time for breastfeeding.' },
        { kind: 'checklist', items: [
          '🕐 **2-hour reduction in the working day** when breastfeeding (1 hour in the morning + 1 hour after lunch OR 2 hours in one block)',
          '⏰ Until the child’s 1st birthday — without further questions',
          '🍼 After 1 year — a medical certificate from the paediatrician is required',
          '🚫 The employer CANNOT reduce salary because of this',
          '📑 Statement to the employer + copy to Segurança Social',
          '👶 For formula feeding: the same 2 hours may be shared by the mother and father'
        ]}
      ]
    },
    {
      id: 'flexible-work',
      title: '⏰ Right to flexible working until age 4',
      content: [
        { kind: 'paragraph', text: 'Lei 7/2009 art. 56 gives parents the right to flexible working (horário flexível) or reduced working time until the child is 4 years old.' },
        { kind: 'checklist', items: [
          '🕐 **Part-time**: half a working day + half salary',
          '🕐 **3/4 time**: 75% of work and salary',
          '⏰ **Flexible working**: the same 8 hours, but with the possibility of shifting by +/- 1–2 hours',
          '✅ The employer MUST consider the application and may refuse only with justification (the refusal can be challenged at ACT — the labour inspectorate)',
          '📑 The application is submitted 30 days before the desired date',
          '👨‍🦱 Both parents have this right',
          '⚖️ In case of refusal — contact CITE (Comissão para a Igualdade no Trabalho)'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '🌟 Special cases',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 **Adoption**: the same 180/120 days',
          '🏥 **Premature birth**: +30 days added to the standard period',
          '♿ **Child with special needs**: up to 6 months of additional leave (with a medical report)',
          '👵 **Grandparents** (if the parents cannot): 14 days “licença para avós”',
          '🤰 **Hospitalisation of the child after birth**: leave is suspended, then resumes',
          '📑 **Recibo Verde (sole trader)**: they have the same benefit rights if they paid contributions to Segurança Social for at least 6 months',
          '🛂 **Foreigners with a residence permit**: the same rights, without restrictions'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '💰 90% or 100%: for most families, partilhada (180 days) is better value — the father participates, and the mother receives more money for the same period',
          '📅 Plan ahead: 100% (120 days) → child in nursery/creche using partilhada → father takes his quota',
          '🩺 Benefit calculation = average salary for 6 months. If you go on maternity leave shortly after a pay rise, it is better to wait 6 months',
          '🛡️ Maternity leave by itself **does not make** the period legal residence for citizenship — for naturalisation, what matters is **legal residence** (valid residence permit/title) and the total period (under the current Lei 37/81 — 5 years; the new law AR 17/XVII was approved on 01.04.2026, as of 28.04.2026 it has NOT been promulgated)',
          '⚖️ Protection from dismissal: during leave and for 12 months after returning',
          '👶 If giving birth in Portugal — healthcare in SNS is free (including maternity hospital, vaccinations, paediatrician)',
          '📑 Keep all certificates and statements — they may be needed for the next maternity leave or a tax audit'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsídio Parental — paid by Segurança Social', amountEUR: 0, note: 'not out of pocket' },
    { label: 'Application submission', amountEUR: 0 },
    { label: 'Document translation (if needed)', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Lei 13/2023 — Amendment to the Labour Code', url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-208854851', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 7/2009 — Labour Code', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CITE — Commission for Equality at Work', url: 'https://cite.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
