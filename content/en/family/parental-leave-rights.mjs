export default {
  editorialVoice: 'hackportugal',
  id: 'parental-leave-rights',
  categoryId: 'work_business',
  title: 'Maternity leave and parental rights',
  tldr: 'Maternity leave (licença parental) in Portugal in 2026: licença parental inicial — 120 days (100%), Replace with: “120 days — 100%; 150 days without sharing — 80%; 150 days partilhada — 100%; 180 days partilhada — 83% or 90% with enhanced sharing under Lei 13/2023”.\n\nAfter the mother’s 6 compulsory weeks, the remaining time may be shared by the parents. Father: 28 compulsory days (7 — immediately after the birth, 21 — within 42 days) + up to 7 additional days together with the mother. The job is protected during leave. Breastfeeding/aleitação: usually 2 hours per day (2 periods × 1 hour), after 1 year for breastfeeding — a medical certificate is required. The right to horário flexível / part-time work — until the child is 12 years old (Código do Trabalho art. 55/56). For children with special needs — extended rules apply.',
  tags: ['maternity', 'maternity leave', 'licença parental', 'mother', 'father', 'segurança social'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'overview',
      title: '👶 Leave structure',
      content: [
        { kind: 'substeps', items: [
          { id: 'mother', title: 'Mother — compulsory and additional parts', content: [
            { kind: 'checklist', items: [
              '🏥 **Compulsory part**: 6 weeks (42 days) immediately after childbirth — taken only by the mother',
              '👶 **Licença parental inicial**: 120 days paid at 100% (after the mother’s compulsory 42 days, the remainder may be used by the mother or the father)',
              '🤝 **Inicial partilhada**: 150 days (at a different rate) or 180 days paid at 90% if the conditions for sharing leave between the parents are met (Lei 13/2023)',
              '⏰ Leave may be started before childbirth with a medical certificate (generally about 10 days before)',
              '👼 For twins: +30 days',
              '👶 For triplets: +60 days'
            ]}
          ]},
          { id: 'father', title: 'Father — rights and obligations', content: [
            { kind: 'checklist', items: [
              '🛌 **28 compulsory days**: 7 consecutive days immediately after the birth + 21 within 42 days after the birth (consecutively or with breaks)',
              '➕ **+7 additional days** after the 28 compulsory days, provided they coincide with the mother’s licença parental inicial',
              '🤝 **Shared part** (by agreement with the mother): the father’s compulsory minimum exclusive period — mandatory for partilhada of 150/180 days',
              '⚖️ Rights are protected — dismissal because of leave is unlawful (Lei 7/2009 art. 36)',
              '🏥 If the mother cannot take leave or has died — the father receives her part of the leave'
            ]}
          ]},
          { id: 'who-pays', title: 'Who pays', content: [
            { kind: 'checklist', items: [
              '🛡️ **Segurança Social** (Subsídio Parental) — the main source of payments',
              '💼 The employer does NOT pay during leave, but keeps the job position',
              '💸 Calculation: remuneração de referência = the sum of earnings for the first 6 of the last 8 months / 180; then the rate is 100%, 90%, 83%, 80%, etc. (depending on the scheme)',
              '⏰ Money is paid into the bank account monthly',
              '📑 The employee submits the benefit application through Segurança Social Direta; the employer separately records the absence and reports salary data'
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
          { id: 'a1', title: 'Before childbirth', content: [
            { kind: 'checklist', items: [
              '📩 If the mother starts leave before childbirth — notify the employer with a medical certificate, generally 10 days in advance (in urgent cases — as soon as possible)',
              '📋 Submit the “requerimento de subsídio parental” through Segurança Social Direta',
              '📑 Attach a medical certificate with the expected date of childbirth',
              '🤝 If the leave is shared (partilhada): submit a joint declaration with the father'
            ]}
          ]},
          { id: 'a2', title: 'After childbirth', content: [
            { kind: 'checklist', items: [
              '📜 Within 7 days after the birth, inform the employer of the leave dates; for partilhada — a joint declaration by the parents',
              '⏰ The subsídio application to Segurança Social must be submitted within 6 months from the first day of leave/the event; if submitted late, the benefit may be reduced',
              '📲 The leave schedule can be changed through Segurança Social Direta: for example, to extend or shorten the additional part',
              '💰 Payment arrives after SS approval to the indicated IBAN; there is no guaranteed timeframe, it depends on processing of the application'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'breastfeeding',
      title: '🤱 Breastfeeding — rights',
      content: [
        { kind: 'paragraph', text: 'Under Lei 7/2009 art. 47, the mother has the right to a daily reduction of working time for breastfeeding.' },
        { kind: 'checklist', items: [
          '🕐 **2-hour reduction of the working day** when breastfeeding (1 hour in the morning + 1 hour after lunch OR 2 hours in one block)',
          '⏰ Until the child’s 1st birthday — without additional questions',
          '🍼 After 1 year — a medical certificate from the paediatrician is required',
          '🚫 The employer may NOT reduce salary because of this',
          '📑 Application to the employer; after 1 year, when breastfeeding, attach a medical certificate (a copy to Segurança Social is usually not required — this is an employment right, not an SS benefit)',
          '👶 For formula feeding: the same 2 hours may be shared by the mother and father',
          '👯 For multiple births: +30 minutes for each child beyond the first'
        ]}
      ]
    },
    {
      id: 'flexible-work',
      title: '⏰ Flexible schedule and part-time work until the child is 12',
      content: [
        { kind: 'paragraph', text: 'Código do Trabalho art. 55 governs trabalho a tempo parcial, and art. 56 governs horário flexível for an employee with a child under 12; for a child with a disability/chronic illness, extended rules apply without a strict age limit.' },
        { kind: 'checklist', items: [
          '🕐 **Half-time**: half the working day + half the salary',
          '🕐 **3/4 time**: 75% of work and salary',
          '⏰ **Flexible schedule**: the same hours, but with the possibility of shifting the start/end of the day',
          '✅ If intending to refuse, the employer must follow a special procedure and send the case to **CITE** for a prior opinion (this is the key body specifically for these refusals)',
          '📑 The application is submitted in advance (under the rules of the Labour Code)',
          '👨‍🦱 Both parents have this right',
          '⚖️ ACT (labour inspectorate) — for complaints about breaches of employment law, but it does not replace CITE'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: '🌟 Special cases',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 **Adoption**: the same 120/150/180 days under the relevant schemes',
          '🏥 **Hospitalisation of the child after childbirth / birth before 33 weeks**: special rules apply for extending/suspending licença parental inicial; confirm dates with Segurança Social/the employer',
          '♿ **Child with special needs**: extended rights/additional leave based on a medical opinion (see Código do Trabalho)',
          '👵 **Grandparents**: special rights in specific cases — for example, up to 30 consecutive days after the birth of a grandchild if the child’s parent is under 16 and the grandchild lives with the grandmother/grandfather; there is no universal “14 days if the parents cannot” rule (see Código do Trabalho art. 50)',
          '📑 **Recibo Verde (sole trader)**: may be entitled to subsídio parental if the prazo de garantia is met (usually 6 months of registered remuneration) and if the contribution situation is regularised; employer employment guarantees do not apply to them',
          '🛂 **Foreign nationals working in Portugal**: the same employment rights; SS benefit depends on registration, contributions and meeting the prazo de garantia. If contributions are insufficient, social benefits may be possible subject to a means test'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '💰 Replace with: “180 days partilhada may be an advantageous scheme, but check the rate: 83% in the ordinary shared option or 90% with enhanced sharing under Lei 13/2023. Compare the total family income and each parent’s ability to take the required exclusive period”., but compare the total family income and the father’s real ability to take his part',
          '📅 Before/after the birth, choose the licença parental inicial scheme: 120, 150 or partilhada 150/180 days; for 180 days partilhada, agree the mother’s and father’s periods with the employers in advance',
          '🩺 Benefit calculation: remuneração de referência = earnings for 6 of the previous 8 months / 180. If you go on maternity leave soon after a pay rise, the new salary may not fully make it into the base',
          '🛡️ Maternity leave does not interrupt the length of lawful residence if the residence permit remains valid/extended. For citizenship, check the current version of Lei da Nacionalidade: **Decreto AR 48/XVII was promulgated by President Seguro on 03/05/2026** and will increase the period to 7/10 years after publication in the DRE — as of 17/05/2026 the current rule is 5 years (Lei 37/81)',
          '⚖️ Protection against dismissal: dismissal of a pregnant, recently postpartum or breastfeeding worker, or a worker on parental leave, requires a special procedure and a prior opinion from **CITE**; there is no universal immunity for 12 months after returning',
          '👶 In the SNS, pregnancy monitoring, childbirth, vaccination and paediatric care are usually free/exempt from taxas moderadoras; foreign nationals should arrange a número de utente in advance',
          '📑 Keep all certificates and applications — they may be needed for the next maternity leave or a tax audit'
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
    { title: 'Lei 13/2023 — Amendment to the Código do Trabalho', url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-208854851', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 7/2009 — Código do Trabalho', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CITE — Commission for Equality in Labour', url: 'https://cite.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
