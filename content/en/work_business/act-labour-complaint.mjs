export default {
  editorialVoice: 'hackportugal',
  id: 'act-labour-complaint',
  categoryId: 'work_business',
  title: 'Complaint to ACT against an employer: non-payment, dismissal, working conditions',
  tldr: 'ACT — Autoridade para as Condições do Trabalho: Portugal’s labour inspectorate. In 2026, you can submit a complaint online via gov.pt/ACT free of charge: non-payment of salary, no recibo de vencimento, unlawful hours, unsafe conditions, sham recibos verdes, breaches during dismissal. ACT can carry out an inspection and fine the employer, but a dispute about compensation and recognition of a dismissal as unlawful is usually decided by the Tribunal do Trabalho; in the labour court, there is first a mandatory attempt at conciliation.',
  tags: ['act', 'work', 'dismissal', 'salary'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-complain',
      title: 'When to go to ACT, and when to think about court straight away',
      content: [
        { kind: 'paragraph', text: 'ACT accepts complaints about breaches of labour law: salary not paid, holiday/Christmas allowances not accrued, no written contract, no recibo de vencimento issued, being forced to work overtime without pay, horário de trabalho not respected, no segurança e saúde no trabalho, dismissal handled with irregularities.' },
        { kind: 'paragraph', text: 'It is important to distinguish: ACT is an inspectorate. It checks the employer, requests documents, can draw up an auto de notícia and impose a coima. But ACT usually does not “recover” your salary like a bailiff and does not recognise a dismissal as unlawful in place of the court.' },
        { kind: 'checklist', items: [
          'ACT is suitable if the breach is ongoing or affects other workers: non-payment, no rosters, no acidentes de trabalho insurance, a dangerous workplace.',
          'Tribunal do Trabalho is needed if you want to obtain specific amounts: salary, férias, subsídio de férias, subsídio de Natal, horas extra, indemnização.',
          'In dismissal cases, the deadline is critical: challenging the unlawfulness of a despedimento is usually filed with the Tribunal do Trabalho within 60 days of receiving the written decision/the dismissal date.',
          'A worker’s employment credits under Código do Trabalho art. 337 can usually be claimed within 1 year from the day after the contract ends.',
          'If you are still working, a complaint to ACT may be confidential for inspection purposes, but from the facts the employer often understands the source — prepare evidence in advance.',
          'If there is a risk to life/health in the workplace, submit a complaint immediately and record photos/videos, dates and witnesses.'
        ] },
        { kind: 'warning', text: 'Do not wait for ACT’s reply if your 60-day deadline for challenging a dismissal is already running. A complaint to ACT does not stop procedural deadlines in the Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Put together an evidence pack 📁',
      content: [
        { kind: 'paragraph', text: 'The more specific the complaint, the greater the chance of an inspection. Do not write “the employer is bad”; write dates, amounts, schedules, names, the site address and exactly what was breached.' },
        { kind: 'checklist', items: [
          'Your details: name, NIF, NISS if you have one, telephone, email, address.',
          'Employer details: company name, NIPC/NIF, sede address and workplace address, name of the gerente/chefe.',
          'Contrato de trabalho or evidence of work without a contract: correspondence, shifts, badges, access permissions, photos of uniform, schedules.',
          'Recibos de vencimento, extratos bancários, comprovativos de transferência, messages about delayed payment.',
          'Timesheet/horário, shift records, WhatsApp/Slack/Email with requests to work weekends or overtime.',
          'Dismissal letter, comunicação de despedimento, acordo de revogação, aviso prévio, any documents you were asked to sign.',
          'Evidence of unsafe conditions: photos, videos, witnesses, absence of EPI, absence of formação, acidentes, relatório médico.',
          'If you are on recibos verdes but work like an employee: fixed schedule, manager, employer’s workplace, exclusivity, monthly payment.',
          'Debt calculation: month, bruto/líquido amount, what has not been paid — salário, subsídios, férias, horas extra, compensação.'
        ] },
        { kind: 'warning', text: 'Do not sign an acordo de revogação, quitação or “received everything” without checking. Such documents can make later recovery more difficult, even if the money was not in fact paid.' }
      ]
    },
    {
      id: 'file-act-online',
      title: 'How to submit a complaint to ACT online',
      content: [
        { kind: 'paragraph', text: 'The official route is the “Fazer uma queixa à Autoridade para as Condições do Trabalho (ACT)” service on gov.pt or the act.gov.pt website. The complaint is free of charge. In 2026 this is the main channel for a pedido de intervenção inspetiva.' },
        { kind: 'substeps', items: [
          { id: 'open-service', title: '1. Open the gov.pt or ACT service', content: [
            { kind: 'paragraph', text: 'Find the “Fazer uma queixa à ACT” service. If you have Chave Móvel Digital or Cartão de Cidadão, login is more convenient; without them, use the available ACT forms/contacts listed on the website.' }
          ] },
          { id: 'choose-topic', title: '2. Choose the breach topic', content: [
            { kind: 'checklist', items: [
              'Retribuição/salários — non-payment of salary.',
              'Tempo de trabalho — hours, overtime, weekends, descanso.',
              'Contrato de trabalho — no contract or false recibos verdes.',
              'Despedimento — breaches during dismissal.',
              'Segurança e saúde no trabalho — dangerous conditions.',
              'Igualdade e não discriminação — discrimination, pregnancy, parenthood, harassment.'
            ] }
          ] },
          { id: 'write-facts', title: '3. Describe the facts using the “who-what-when-where” structure', content: [
            { kind: 'paragraph', text: 'Example: “I have been working at Restaurante X, Rua Y, Lisboa, since 03.02.2026. No contract was issued. A salary of €920 bruto was promised verbally, and nothing has been paid for March 2026. I worked 6 days a week for 10 hours, and there are no recibos de vencimento.\n\nDocuments and correspondence are attached”.' }
          ] },
          { id: 'attach-files', title: '4. Attach files and submit', content: [
            { kind: 'paragraph', text: 'Upload PDF/JPG/PNG: contract, recibos, bank statements, correspondence, photos of working conditions. Save the comprovativo/case number.' }
          ] }
        ] },
        { kind: 'warning', text: 'ACT is not obliged to correspond with you like a lawyer and does not always report all inspection results. Keep the complaint number: it will be useful to a lawyer, sindicato or Ministério Público at the Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'after-complaint',
      title: 'What happens after the complaint',
      content: [
        { kind: 'paragraph', text: 'The ACT inspector assesses the complaint and may request documents from the employer, carry out a visita inspetiva, interview workers, check payroll, rosters, segurança e saúde no trabalho, seguros, contratos.' },
        { kind: 'checklist', items: [
          'If the breach is confirmed, ACT may issue an order to remedy the breach.',
          'For administrative labour offences, the employer may receive a coima.',
          'In dangerous conditions, ACT may require immediate safety measures.',
          'If it sees signs of a criminal offence or a serious breach, ACT may forward the materials to the competent authorities.',
          'ACT can help record the breach, which is useful in court.',
          'The employer has no right to retaliar — worsen conditions, threaten, dismiss you because of the complaint; record such actions separately.',
          'If the debt is not paid voluntarily, prepare a claim in the Tribunal do Trabalho.'
        ] },
        { kind: 'paragraph', text: 'For non-payment of salary, also send the employer a written demand in parallel: email + carta registada com aviso de receção. State the amounts, periods, IBAN, payment deadline, for example 5 working days. This does not replace court action, but it shows good faith and records the debt.' }
      ]
    },
    {
      id: 'tribunal-do-trabalho',
      title: 'If you need money or recognition that the dismissal was unlawful: Tribunal do Trabalho',
      content: [
        { kind: 'paragraph', text: 'Employment disputes are heard by the Tribunal do Trabalho. Workers can often access the Ministério Público at the court, a sindicato or an advogado. If your income is low, apply for apoio judiciário through Segurança Social: you can request exemption from court costs and the appointment of an advogado.' },
        { kind: 'checklist', items: [
          'Non-payment of salary: claim salário, subsídio de férias, subsídio de Natal, férias não gozadas, horas extra, juros de mora.',
          'Dismissal: check the type — despedimento disciplinar, coletivo, extinção do posto de trabalho, inadaptação, caducidade, revogação.',
          'Challenging a despedimento: for most individual dismissals (disciplinar, extinção do posto de trabalho, inadaptação) the deadline is short — 60 days from receipt of the written decision under Código do Trabalho art. 387. For a despedimento coletivo a separate 6-month deadline applies, from the date the contract ends, under art. 388. Revogação and caducidade are challenged under different rules — show the documents to a lawyer urgently.',
          'After termination of the contract, employment credits are usually claimed within 1 year under art. 337 Código do Trabalho.',
          'In the labour court, a tentativa de conciliação/audiência de partes is held: the judge tries to reconcile the parties before further proceedings.',
          'If an agreement is reached, it is recorded in an auto and becomes enforceable.',
          'If there is no conciliation, the case continues: contestação, prova, audiência de julgamento, sentença.',
          'Do not agree to payment “in cash” without a recibo/declaração: later it is harder to prove the remaining debt.'
        ] },
        { kind: 'warning', text: 'If you are offered a “mutual agreement” instead of dismissal, check the consequences for subsídio de desemprego. An acordo de revogação does not always give the right to unemployment benefit; the grounds and quotas provided by law matter.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Specific points for foreigners',
      content: [
        { kind: 'paragraph', text: 'The right to salary, safe conditions and protection against unlawful dismissal does not depend on nationality. Even if you have a temporary visa, are waiting for AIMA or do not have a perfect document pack, the employer does not gain the right not to pay.' },
        { kind: 'checklist', items: [
          'Do not give your employer the original of your passport, residence permit, Cartão de Cidadão, NIF or bank card.',
          'If the employer threatens to “cancel your visa”, record the threats in writing. The employer is not AIMA.',
          'Ask for contrato de trabalho and recibos de vencimento: they are important for your residence permit, NISS, IRS and Segurança Social.',
          'If you were set up as recibos verdes but in practice are subordinate like a worker, this may be falso trabalho independente.',
          'The monthly minimum wage SMN in mainland Portugal in 2026 is €920 bruto (before deductions) for full-time work; what reaches your account after the Segurança Social contribution is usually lower (around €818 líquido). Paying less than this rate for full-time work is not allowed, except under special lawful regimes.',
          'Keep evidence in your personal email/cloud, not only in your work account.',
          'If your Portuguese is weak, write the complaint in simple phrases; you can attach documents in English/Russian, but it is better to provide the key facts in Portuguese.'
        ] },
        { kind: 'warning', text: 'Illegal employment can create immigration and tax risks, but it does not deprive you of the right to claim payment for work actually performed. In complex cases, go to an advogado, sindicato or Ministério Público at the Tribunal do Trabalho before signing any papers.' }
      ]
    }
  ],
  costs: [
    { label: 'Complaint to ACT via gov.pt/ACT', amountEUR: 0, note: 'The public service is free of charge.' },
    { label: 'Carta registada com aviso de receção to the employer', amountEURMin: 3, amountEURMax: 7, note: 'Depends on weight and CTT service; useful for recording the demand.' },
    { label: 'Initial consultation with an advogado on employment law', amountEURMin: 50, amountEURMax: 150, note: 'The market varies greatly by city and urgency; if your income is low, check apoio judiciário.' }
  ],
  sources: [
    {
      title: 'gov.pt: submit a complaint to the Autoridade para as Condições do Trabalho',
      url: 'https://www2.gov.pt/en/servicos/fazer-uma-queixa-a-autoridade-para-as-condicoes-do-trabalho-act-',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT: official website of the Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, including art. 337 and art. 387',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código de Processo do Trabalho — labour procedure and conciliation rules',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34582975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
