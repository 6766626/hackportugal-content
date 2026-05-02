export default {
  editorialVoice: 'hackportugal',
  id: 'trabalho-tempo-parcial-ria',
  categoryId: 'work_business',
  title: 'Part-time work, contrato a termo certo and trabalho intermitente',
  tldr: 'In Portugal, part-time does not mean “no rights”: salário, férias, subsídio de Natal/férias and Segurança Social are calculated proportionally, but annual leave usually remains 22 working days. Contrato a termo certo in 2026 is allowed only where the employer has a temporary need under art. 140 Código do Trabalho; after Lei 13/2023 it can no longer be used to cover “first job” or long-term unemployment. The general fixed-term limit is up to 2 years, not a universal 18 months. RTI is a rare “called in when needed” regime: at least 5 months of work/year and compensation for inactivity usually 20%.',
  tags: ['work', 'part-time', 'contract', 'rti', 'act'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'part-time-basics',
      title: 'Tempo parcial: what remains in place on part-time',
      content: [
        { kind: 'paragraph', text: 'Trabalho a tempo parcial is work with a normal period shorter than that of a comparable full-time worker: fewer hours per week, fewer days per month or part of the year. In 2026 the standard full-time week in the private sector is usually up to 40 hours, but a collective agreement may provide for less.' },
        { kind: 'checklist', items: [
          'The contrato must be in writing and state the working hours/days and the comparison with the full-time schedule.',
          'If there is no written form or the part-time arrangement is poorly described, the dispute is usually interpreted against the employer.',
          'Salário is calculated proportionally: for 20 h/week instead of 40 h/week — at least 50% of the applicable full-time salário.',
          'SMN 2026 is €920 per month for full-time; for 50% employment, the reference point is not less than €460 gross, unless a more favourable CCT applies.',
          'Férias: the right to annual leave is not automatically “cut” to 11 days; 22 working days are usually maintained, but holiday pay corresponds to your part-time salary.',
          'Subsídio de férias and subsídio de Natal are paid based on your actual salary/length of service in the year.',
          'Segurança Social is withheld as usual: 11% from the employee and 23.75% from the employer for a standard contrato de trabalho.',
          'Recibos verdes are not a part-time contrato de trabalho: there is no automatic holiday pay, sick pay as an employee, or dismissal protection.'
        ] },
        { kind: 'warning', text: 'Meal allowance is not a universal obligation under the Código do Trabalho. If it is due under the contrato/CCT/company policy, for part-time the rule often applied is: full valor for a working day of 5+ hours, proportionally for a shorter day.' }
      ]
    },
    {
      id: 'termo-certo',
      title: 'Contrato a termo certo: when a fixed-term contract is lawful',
      content: [
        { kind: 'paragraph', text: 'Contrato a termo certo is an employment contract with a pre-known end date. It cannot be used simply because the employer “wants to try first”. An objective temporary reason under art. 140 Código do Trabalho is required.' },
        { kind: 'checklist', items: [
          'Replacement of a temporarily absent worker: parental leave, sick leave, holiday, temporary assignment.',
          'Seasonal work or a predictable peak in activity.',
          'Exceptional and temporary increase in orders.',
          'A project, event, obra or task of limited duration.',
          'Launch of a new activity or empresa/estabelecimento — only within the conditions of the law.',
          'The contract must contain a specific reason, not a generic phrase “necessidades temporárias da empresa”.',
          'The end date or the way it is determined must be stated directly.',
          'The work must match the stated reason: you cannot write “replacement of João” while in practice covering a permanent position.'
        ] },
        { kind: 'warning', text: 'After Lei 13/2023, in force since 01.05.2023, old grounds such as “trabalhador à procura de primeiro emprego” and “desempregado de longa duração” are no longer ordinary justifications for a contrato a termo certo. If HR gives you a template with old wording — ask for it to be corrected.' }
      ]
    },
    {
      id: 'duration-renewal',
      title: 'Term, renewals and contract end',
      content: [
        { kind: 'paragraph', text: 'In 2026 the general limit for contrato a termo certo under the Código do Trabalho is up to 2 years, including renewals. The statement “maximum 18 months” is not a universal rule: it appears in old materials and specific situations, but it cannot be used as the general ceiling for fixed-term contracts in 2026.' },
        { kind: 'checklist', items: [
          'There may be a maximum of 3 renewals.',
          'The total duration of renewals cannot exceed the initial term of the contract.',
          'If the term or reason is unlawful, the contract may be recognised as a contrato sem termo — open-ended.',
          'The probationary period for fixed-term contracts is usually 30 days if the contract is for 6+ months, and 15 days if it is under 6 months or the term is uncertain but expected to be short.',
          'The employer must give written notice of non-renewal at least 15 days before the end of the term.',
          'The employee must give notice of their own non-renewal at least 8 days in advance.',
          'In the case of caducidade initiated by the employer, compensation of 24 days of basic salary and diuturnidades for each year of service is usually due, proportionally for an incomplete year.',
          'If you continue working after the end date and the employer accepts it, keep records of hours, e-mails, recibos de vencimento: this is an argument in favour of an open-ended contract.'
        ] },
        { kind: 'warning', text: 'Do not backdate a “renovação” or “cessação por mútuo acordo” if you did not actually agree. In a dispute, e-mails, escalas, recibos de vencimento, bank payments and Slack/WhatsApp messages matter.' }
      ]
    },
    {
      id: 'rti',
      title: 'RTI / trabalho intermitente: “called in when needed”',
      content: [
        { kind: 'paragraph', text: 'Regime de trabalho intermitente is regulated by art. 157-160 Código do Trabalho. It is not an ordinary zero-hours contract. It can be used by companies with intermittent activity or variable intensity: tourism, eventos, seasonal operations, certain services.' },
        { kind: 'checklist', items: [
          'The contract must be in writing.',
          'The contract must state the work periods or the minimum number of hours/days per year.',
          'Annual work cannot be less than 5 full-time months.',
          'Of these 5 months, at least 3 months must be consecutive.',
          'The employer must call the worker in advance: usually at least 20 days.',
          'During the work period, normal salary, férias, subsídios and Segurança Social are paid.',
          'During the inactivity period, compensation set by the CCT or contract is paid; if nothing is provided — usually 20% of basic salary.',
          'During inactivity, the worker may work for another employer if the contract does not contain a lawful restriction and there is no conflict of interest.',
          'RTI must not replace a permanent part-time position with a regular schedule.'
        ] },
        { kind: 'warning', text: 'If you are “called by WhatsApp” without a written RTI, without compensation for inactivity and without recibos de vencimento, this is not lawful trabalho intermitente, but a risk of undeclared work. A complaint can be filed with ACT.' }
      ]
    },
    {
      id: 'what-to-check-before-signing',
      title: 'What to check before signing 🖊️',
      content: [
        { kind: 'checklist', items: [
          'Employer name, NIPC, address, place of work and função/categoria profissional.',
          'Type of contract: tempo parcial, termo certo, sem termo, temporário through an agência, RTI — these are different regimes.',
          'Gross salário, payment periodicity, subsídio de alimentação, subsídio de férias/Natal.',
          'Horas semanais, days of the week, shifts, escalas rules and payment for trabalho suplementar.',
          'The specific fixed-term reason, if it is termo certo.',
          'Start date, end date, number of renewals or renewal rules.',
          'CCT: many sectors have collective agreements with better rates and allowances.',
          'Probationary period and notice periods.',
          'Registration with Segurança Social: the employer must declare the employment contract.',
          'Right to férias, faltas justificadas, parental rights, sick leave through SNS/Segurança Social.',
          'Presence of a cláusula de exclusividade or non-compete — for part-time and RTI this is especially important.'
        ] },
        { kind: 'paragraph', text: 'For immigration purposes, keep the contrato assinado, recibos de vencimento, declaração da entidade patronal, extracto de remunerações da Segurança Social and IRS. AIMA and banks usually look not only at the contract, but also at actual payments.' }
      ]
    },
    {
      id: 'if-problem',
      title: 'If the employer breaks the rules',
      content: [
        { kind: 'paragraph', text: 'Start with a written request to HR: ask them to correct the contrato, issue recibos de vencimento, register hours or explain the basis for the termo certo/RTI. Write by e-mail, not only by messenger.' },
        { kind: 'checklist', items: [
          'Keep the signed contract and all versões.',
          'Download recibos de vencimento and bank statements.',
          'Keep a spreadsheet of hours, shifts, overtime and calls to work.',
          'Check Segurança Social Direta: are there remunerações.',
          'Ask the employer for a declaração de situação profissional.',
          'If salary is not paid or the contract is fake — file a denúncia with ACT.',
          'On dismissal, do not sign a quitclaim/“acordo” without calculating compensation.',
          'If the dispute affects your residence permit, consult an advogado/solicitador in parallel: job loss and lack of contributions can harm renewal.'
        ] },
        { kind: 'warning', text: 'ACT supervises labour law, but is not your lawyer in court. To recover money, obtain recognition of an open-ended contract or challenge dismissal, you may need the Tribunal do Trabalho.' }
      ]
    }
  ],
  costs: [
    { label: 'Complaint to ACT', amountEUR: 0, note: 'Filing a denúncia by an employee is free of charge.' },
    { label: 'Minimum full-time salary in 2026', amountEUR: 920, note: 'SMN; for part-time it applies proportionally to hours, unless a CCT provides more.' },
    { label: 'Compensation for inactivity under RTI', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: usually 20% of basic salary, unless the CCT/contract sets another valor.' }
  ],
  sources: [
    {
      title: 'ACT — employment contracts, tempo parcial and direitos do trabalhador',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, consolidated version',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023 — Agenda do Trabalho Digno, changes to the Código do Trabalho',
      url: 'https://dre.pt/dre/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — contributions for trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
