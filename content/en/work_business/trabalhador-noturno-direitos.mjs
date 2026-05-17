export default {
  editorialVoice: 'hackportugal',
  id: 'trabalhador-noturno-direitos',
  categoryId: 'work_business',
  title: 'Night work in Portugal — employee rights and the 25% supplement',
  tldr: 'Under the Código do Trabalho, the default night period is 22:00–07:00. If you regularly work at least 3 hours during this period, you are a trabalhador noturno: night hours are paid with a 25% supplement, there are limits on working time and mandatory free medical checks. In 2026, with the SMN at €920, an hour is worth about €5.31, and the night supplement is +€1.33/hour. Exceptions may apply for regimes/CCT where the night-time nature is already included in pay: parts of the public sector, hospitals, transport, tourism.',
  tags: ['work', 'night', 'salary', 'act'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts-as-night',
      title: 'What counts as night work 🌙',
      content: [
        { kind: 'paragraph', text: 'In Portugal, the night period is defined by the Código do Trabalho. If a collective agreement — contrato coletivo de trabalho, CCT — has not set a different period, the standard applies: from 22:00 to 07:00.' },
        { kind: 'paragraph', text: 'A CCT may change the night period, but it must last between 7 and 11 hours and must include the interval between 00:00 and 05:00. So first check your contrato de trabalho and the applicable CCT: hotelaria, segurança privada, saúde, transportes, call centres often have their own rules.' },
        { kind: 'checklist', items: [
          'A night shift from 22:00–06:00 — almost all of it counts as night work.',
          'A shift from 18:00–02:00 — the night hours are usually 22:00–02:00.',
          'A shift from 05:00–13:00 — the night hours are usually 05:00–07:00.',
          'If the CCT has set, for example, 23:00–06:00, the supplement is calculated according to that period.',
          'Breaks that are not paid as working time usually do not give the right to the night supplement.',
          'The supplement is calculated on the night hours actually worked, not simply on the name of the shift.'
        ] }
      ]
    },
    {
      id: 'who-is-night-worker',
      title: 'Who is considered a trabalhador noturno',
      content: [
        { kind: 'paragraph', text: 'A one-off shift until midnight does not always make you a trabalhador noturno. The law identifies a separate status for night workers because medical checks and limits on working time apply to them.' },
        { kind: 'checklist', items: [
          'You are a trabalhador noturno if you normally work at least 3 hours of your daily working time during the night period.',
          'You may also be considered a trabalhador noturno if each year you perform at night a number of hours equivalent to 3 hours per working day, under the rules of the law or CCT.',
          'The status matters for health and safety, schedules and limits, but the 25% supplement applies to night hours as such.',
          'The employer must keep a registo de tempos de trabalho: start, end, breaks, overtime.',
          'Keep escalas, WhatsApp/Teams messages, picagens, recibos de vencimento — these are evidence if the supplement is not paid.',
          'If the schedule is “rotativo”, only the hours inside the night period count as night hours.'
        ] }
      ]
    },
    {
      id: 'pay-increment',
      title: 'The 25% supplement: how to calculate the money',
      content: [
        { kind: 'paragraph', text: 'The basic rule in the Código do Trabalho: night work is paid with a 25% increase compared with equivalent daytime work. The supplement must be visible in the recibo de vencimento or be clearly included in the agreed pay system, if this is legally provided for.' },
        { kind: 'paragraph', text: 'Formula for a monthly salary at 40 h/week: hourly rate = salário mensal / (40 × 52 / 12). With the 2026 SMN at €920, this is about €5.31/hour. The 25% night supplement is about €1.33 for each night hour. Total night hour: about €6.64 before taxes and Segurança Social.' },
        { kind: 'checklist', items: [
          'Example: 8 night hours at an SMN of €920 give about €10.62 of night supplement per shift.',
          '10 night shifts of 8 hours — about €106.15 gross supplement for the month.',
          'If part of the shift is daytime and part is night-time, +25% is applied only to the night hours.',
          'If night work is also overtime, the rules for both night work and trabalho suplementar apply; the calculation depends on the pay structure and CCT.',
          'The supplement is subject to IRS and Segurança Social like salary.',
          'The employer cannot “offset” the supplement with tips, ajudas de custo or undeclared payments.'
        ] },
        { kind: 'warning', text: 'If the recibo de vencimento has no line such as “trabalho nocturno/noturno” or a clear fixed supplemento, ask for a written explanation of the calculation. The oral phrase “isso já está incluído” is not enough if the contract/CCT/pay table does not confirm it.' }
      ]
    },
    {
      id: 'limits-and-health',
      title: 'Hour limits and medical checks',
      content: [
        { kind: 'paragraph', text: 'Night work is considered riskier for health, so the law requires control of schedules and medical monitoring. This is the employer’s obligation, not a “benefício” at the employee’s request.' },
        { kind: 'checklist', items: [
          'The usual rule under the Código do Trabalho is up to 8 hours per day and 40 hours per week, unless there is a permitted adaptabilidade/banco de horas/CCT regime.',
          'For a trabalhador noturno under averaging regimes, the normal daily period must not exceed 8 hours on average over the set period.',
          'If the work involves special risks, strong physical or mental strain, it is not permitted to work more than 8 hours in any 24 hours when night work is performed.',
          'The employer must provide a free and confidential health assessment before assigning the worker to night work.',
          'After night work begins, medical checks must be carried out regularly and at least annually.',
          'If a doctor links health problems to night work, the employer must, where possible, transfer the worker to suitable daytime work.',
          'Pregnant workers, workers who have recently given birth and breastfeeding workers have separate protective rules; night work may be prohibited or restricted on the basis of a medical opinion.',
          'Night work by minors is generally prohibited or heavily restricted.'
        ] }
      ]
    },
    {
      id: 'exceptions',
      title: 'When the 25% may not be paid',
      content: [
        { kind: 'paragraph', text: 'Exceptions exist, but they do not mean that any employer can remove the 25% with one line in the contract. You need to look at the Código do Trabalho, CCT, estatuto da carreira and exactly how the salary is structured.' },
        { kind: 'checklist', items: [
          'A CCT may replace the 25% with an equivalent reduction in working time or a fixed supplement.',
          'The supplement may not be paid separately if the salary is lawfully set already taking the night-time nature of the work into account.',
          'For activities carried out exclusively or predominantly at night, pay rules may differ.',
          'For activities that by nature or law must operate at night for the public, special regimes often apply: hospitais, farmácias, hotelaria, restauração, segurança, transportes.',
          'In Administração Pública and for civil servants, special LGTFP/career/table rules apply, not always the standard private-sector Código do Trabalho scheme.',
          'In medical and transport sectors, you almost always need to check the CCT or public estatuto: there may be shift, night and on-call supplements instead of a simple +25% line.',
          'If you are on recibos verdes, you are not an “employee” under an employment contract; but in the case of a falso recibo verde you can demand recognition of an employment relationship.'
        ] },
        { kind: 'warning', text: 'The phrase “horário por turnos” in the contract does not by itself cancel the night supplement. The exception must follow from the law, CCT or a transparent salary structure.' }
      ]
    },
    {
      id: 'how-to-claim',
      title: 'How to claim payment if the employer avoids it',
      content: [
        { kind: 'paragraph', text: 'Start in writing and calmly. In Portugal it is important to create a provable history: what you asked, which hours you indicated, how the employer replied or stayed silent.' },
        { kind: 'checklist', items: [
          'Gather the contrato de trabalho, CCT if known, recibos de vencimento, escalas, picagens, emails, WhatsApp, entry/exit records.',
          'Make a table: date, shift start, shift end, night hours, rate, expected 25% supplement.',
          'Send the employer an email or carta registada: ask for rectificação dos recibos and pagamento do trabalho noturno for the specific months.',
          'Ask them to state the legal basis if the employer believes the supplement is already included or is not due.',
          'If there is no reply, submit a denúncia to ACT — Autoridade para as Condições do Trabalho. A complaint can be submitted online or at a serviço local da ACT.',
          'ACT can carry out an inspection and impose a coima, but usually does not “recover the money” directly for you.',
          'To recover amounts, you may need the Tribunal do Trabalho, an advogado or a sindicato.',
          'Salary claims under an employment contract can usually be brought up to 1 year after the contract ends; do not wait for dismissal if the amounts are increasing every month.'
        ] },
        { kind: 'warning', text: 'Do not agree to pagamento por fora. Night supplements must go through payroll: this affects IRS, Segurança Social, sick pay, subsidies and your future pension.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting a complaint to ACT', amountEUR: 0, note: 'A denúncia to ACT is free; an inspection does not guarantee automatic recovery of the debt.' },
    { label: 'Estimate of the night supplement at the 2026 SMN', amountEUR: 1.33, note: 'About +€1.33 gross for each night hour at a salary of €920 and 40 h/week.' },
    { label: 'Lawyer for an employment dispute', amountEURMin: 60, amountEURMax: 150, note: 'Typical initial consultation; the price depends on the city, language and complexity of the case.' }
  ],
  sources: [
    {
      title: 'Código do Trabalho — Lei n.º 7/2009, articles on trabalho noturno',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — information on trabalho noturno and workers’ rights',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — requests for inspection intervention and employment complaints',
      url: 'https://www.act.gov.pt/(pt-PT)/Itens/QueixasDenuncias/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
