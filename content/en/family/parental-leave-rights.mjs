export default {
  editorialVoice: 'hackportugal',
  id: 'parental-leave-rights',
  categoryId: 'work_business',
  title: 'Parental leave and parental rights',
  tldr: 'Parental leave (licença parental) in Portugal in 2026: «inicial» — 180 days when leave is shared (Lei 13/2023 — 90% of salary); 120 days for the mother only — 100%. Father: 28 mandatory days + up to 7 additional. Job is protected during leave. Grandparents — 14 days «licença para grupos especiais». Breastfeeding: 1 hour per day until the child is 1 year old. Part-time up to the child’s 4th birthday is guaranteed by Lei 7/2009. For children with special needs — extended rights.',
  tags: ['parental leave', 'maternity leave', 'licença parental', 'mother', 'father', 'segurança social'],
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
              '👶 **Additional part**: 120 days for the mother only with pay at 100% of salary',
              '🤝 **Shared part** «inicial partilhada»: 180 days when the leave is shared with the father (90% of salary, under Lei 13/2023)',
              '⏰ You may start leave up to 30 days before the due date',
              '👼 Twins: +30 days',
              '👶 Triplets: +60 days'
            ]}
          ]},
          { id: 'father', title: 'Father — rights and obligations', content: [
            { kind: 'checklist', items: [
              '🛌 **28 mandatory days** in the first 6 weeks after birth (10 within the first 14 days; paid at 100%)',
              '➕ **+7 additional days** (consecutive or not) up to 4 months — paid at 100%',
              '🤝 **Shared part** (if there is agreement with the mother): a portion of the 90% 180‑day quota',
              '⚖️ Rights are protected — dismissal due to leave is unlawful (Lei 7/2009 art. 36)',
              '🏥 If the mother cannot take the leave or has died — the father receives her share of leave'
            ]}
          ]},
          { id: 'who-pays', title: 'Who pays', content: [
            { kind: 'checklist', items: [
              '🛡️ **Segurança Social** (Subsídio Parental) — the main source of payments',
              '💼 The employer does NOT pay during leave, but must keep the job',
              '💸 Calculation: average salary over the last 6 months × 90% or 100%',
              '⏰ Money is paid into the bank account monthly',
              '📑 The application is submitted by both the employer and the employee via Segurança Social Direta'
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
          { id: 'a1', title: 'Before birth', content: [
            { kind: 'checklist', items: [
              '📩 Notify the employer of the planned start date of leave at least 30 days in advance',
              '📋 Submit the «requerimento de subsídio parental» in Segurança Social Direta',
              '📑 Attach a medical certificate with the expected due date',
              '🤝 If the leave is shared (partilhada): submit a joint application with the father'
            ]}
          ]},
          { id: 'a2', title: 'After birth', content: [
            { kind: 'checklist', items: [
              '📜 The birth certificate must be submitted to Segurança Social within 30 days',
              '⏰ Confirm the start and end dates of leave via Segurança Social Direta',
              '📲 You may change the leave schedule: for example, extend or shorten the additional part',
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
        { kind: 'paragraph', text: 'Under Lei 7/2009 art. 47 the mother has the right to a daily reduction in working time for breastfeeding.' },
        { kind: 'checklist', items: [
          '🕐 **2 hours off the working day** for breastfeeding (1 hour in the morning + 1 hour after lunch OR 2 hours in one block)',
          '⏰ Until the child’s 1st birthday — without further requirements',
          '🍼 After 1 year — a medical certificate from the paediatrician is required',
          '🚫 The employer may NOT cut pay because of this',
          '📑 Application to the employer + a copy to Segurança Social',
          '👶 For formula feeding: the same 2 hours may be split between the mother and the father'
        ]}
      ]
    },
    {
      id: 'flexible-work',
      title: '⏰ Right to flexible working until age 4',
      content: [
        { kind: 'paragraph', text: 'Lei 7/2009 art. 56 gives parents the right to a flexible schedule (horário flexível) or reduced working time until the child is 4 years old.' },
        { kind: 'checklist', items: [
          '🕐 **Half-time**: half a working day + half pay',
          '🕐 **3/4 time**: 75% work and pay',
          '⏰ **Flexible schedule**: still 8 hours, but with the option to shift by ±1–2 hours',
          '✅ The employer MUST consider the request and may refuse only with justification (a refusal can be appealed to ACT — the labour inspectorate)',
          '📑 Apply 30 days before the desired date',
          '👨‍🦱 Both parents have this right',
          '⚖️ In case of refusal — escalate to CITE (Comissão para a Igualdade no Trabalho)'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '🌟 Special cases',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 **Adoption**: the same 180/120 days',
          '🏥 **Premature birth**: +30 days to the standard period',
          '♿ **Child with special needs**: up to 6 months of additional leave (with a medical report)',
          '👵 **Grandparents** (if parents cannot): 14 days «licença para avós»',
          '🤰 **Hospitalisation of the child after birth**: leave is suspended, then resumes',
          '📑 **Recibo Verde (self‑employed)**: have the same rights to the benefit if they have paid contributions to Segurança Social for at least 6 months',
          '🛂 **Foreigners with a residence permit**: the same rights, without restrictions'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '💰 90% or 100%: for most families, partilhada (180 days) is more advantageous — the father participates, and the mother receives more money for the same period',
          '📅 Plan it: 100% (120 days) → child in Creche/Jardim de Infância using partilhada → the father takes his quota',
          '🩺 Benefit calculation = average salary over 6 months. If you go on leave soon after a pay rise, it is better to wait 6 months',
          '🛡️ Parental leave by itself does NOT make the period lawful residence for citizenship — for naturalisation what matters are **lawful residence** (a valid residence permit/title) and the total period (under the current Lei 37/81 — 5 years; **Decreto AR 48/XVII was promulgated by President Seguro on 03.05.2026** and will increase the period to 7/10 years after publication in the DRE)',
          '⚖️ Protection from dismissal: during leave and for 12 months after return',
          '👶 If giving birth in Portugal — healthcare in SNS is free (including maternity ward, vaccinations, paediatrician)',
          '📑 Keep all certificates and applications — they may be needed for your next leave or a tax audit'
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
    { title: 'Segurança Social — Parental Benefit (Subsídio Parental)', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 7/2009 — Labour Code', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CITE — Commission for Equality at Work', url: 'https://cite.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
