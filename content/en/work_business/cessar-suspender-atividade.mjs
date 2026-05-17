export default {
  editorialVoice: 'hackportugal',
  id: 'cessar-suspender-atividade',
  categoryId: 'work_business',
  title: 'Closing or suspending recibos verdes: cessação/suspensão atividade',
  tldr: 'Recibos verdes are closed or suspended online in Portal das Finanças via Entregar Declaração de Alterações / Cessação de Atividade. If you are in regime simplificado and without contabilidade organizada, you can usually file it yourself; with contabilidade organizada, submissão through a contabilista certificado is required. Changes are filed within 15 days, cessação within 30 days. The service is free, but after closure IRS, IVA and Segurança Social remain due for periods already worked.',
  tags: ['recibosverdes', 'finanças', 'irs', 'iva'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-close-or-suspend',
      title: 'When to close and when to suspend',
      content: [
        { kind: 'paragraph', text: 'Atividade aberta in Finanças means that you can officially issue recibos verdes and have tax obligations for IRS, IVA and, where the conditions apply, Segurança Social. If you no longer work as a trabalhador independente, it is better not to leave atividade open “just in case”.' },
        { kind: 'checklist', items: [
          'Cessação de atividade — final closure: you stop working as self-employed in Portugal.',
          'Suspensão da atividade — a temporary pause: you plan to return to recibos verdes and do not want to close the profile completely.',
          'Alteração de atividade — not closure, but a change of details: CAE/CIRS, address, IVA, regime, IBAN, turnover forecast.',
          'If you are leaving Portugal and will no longer receive income through recibos verdes, cessação is usually needed.',
          'If you simply have no clients for 1–2 months, closure is not always mandatory, but check Segurança Social and IVA.',
          'If atividade is open for the whole year or part of the year, IRS Modelo 3 with Anexo B for that year must still be filed in 2027.',
          'If you are in the normal IVA regime, final declarações periódicas de IVA may remain after closure.',
          'If you are in regime simplificado without contabilidade organizada, you can usually file the declaration yourself in Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'Cessação in Finanças does not cancel recibos verdes already issued, does not write off IVA payable, and does not replace the annual IRS declaration. Only future tax activity is closed.' }
      ]
    },
    {
      id: 'three-reason-categories',
      title: '3 categories of reasons in Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'When filing a change or closure, Portal das Finanças asks you to choose the type of operation and the reason. The wording on the portal may change slightly, but in practice it comes down to three categories.' },
        { kind: 'checklist', items: [
          '1. Cessação — activity has ended definitively: you no longer provide services, closed a freelance project, moved to a contrato de trabalho, relocated, or stopped carrying out independent activity.',
          '2. Suspensão — activity is temporarily not being carried out: a pause without recibos verdes, a break between contracts, holiday, illness, waiting for a new project.',
          '3. Alteração / reinício — activity is not being closed: you are changing activity codes, IVA regime, turnover forecast, address, IBAN, or restarting previously suspended atividade.',
          'For most expat scenarios, the reason is chosen according to the facts: “deixou de exercer atividade” for closure, or temporary suspensão if you plan to return.',
          'The event date is more important than the filing date: enter the real date of cessation or suspension, because IRS, IVA and Segurança Social are calculated from it.',
          'If there is doubt between suspension and cessação, check the consequences for IVA and Segurança Social before submitting.'
        ] },
        { kind: 'warning', text: 'Do not choose cessação retrospectively without checking. If after the stated date there were already recibos verdes, IVA transactions or bank receipts for services, an inconsistency may appear in e-Fatura, IRS or IVA.' }
      ]
    },
    {
      id: 'online-process',
      title: 'How to close or suspend online 🧾',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Go to portaldasfinancas.gov.pt with your NIF and password or via Chave Móvel Digital (CMD). Check that you have access to your personal área pessoal, not only to e-Fatura.' }
          ] },
          { id: 'find-service', title: '2. Find the atividade declaration', content: [
            { kind: 'paragraph', text: 'Look for the sections Todos os Serviços → Atividade → Declarações → Entregar Declaração de Alterações de Atividade or Cessação de Atividade. On gov.pt this service is described as changing, suspending, restarting or ending the atividade de trabalho independente de pessoa singular.' }
          ] },
          { id: 'choose-action', title: '3. Choose the operação', content: [
            { kind: 'checklist', items: [
              'Alteração — if you are changing parameters but not closing atividade.',
              'Suspensão — if you are temporarily stopping work.',
              'Reinício — if you are returning after suspensão.',
              'Cessação — if you are closing atividade definitively.',
              'The início/suspensão/cessação date must match the real date of the last operation or cessation of work.'
            ] }
          ] },
          { id: 'submit', title: '4. Check and submit', content: [
            { kind: 'paragraph', text: 'Before submissão, download or save the draft, check the regime de IVA, CAE/CIRS codes, date and reason. After submitting, save the comprovativo da declaração as a PDF.' }
          ] }
        ] }
      ]
    },
    {
      id: 'deadlines-and-who-can-file',
      title: 'Deadlines and who can file themselves',
      content: [
        { kind: 'paragraph', text: 'For trabalhadores independentes, the general deadlines for atividade declarations apply. Changes to details are filed within 15 days from the date of the change. Cessação de atividade is filed within 30 days from the date the activity ended. These deadlines matter for IRS and IVA.' },
        { kind: 'checklist', items: [
          'Regime simplificado + without contabilidade organizada: you can usually file it yourself online.',
          'Contabilidade organizada: the declaration must be prepared or filed by a contabilista certificado.',
          'If there were recibos verdes with IVA, check the last declaração periódica de IVA.',
          'If there were retenções na fonte, they are reflected by the client and in your IRS.',
          'If you changed your country of tax residence, separately update morada fiscal and representação fiscal, if required.',
          'If you are closing atividade because you are moving into employment, a contrato de trabalho does not automatically close recibos verdes.',
          'If you opened atividade recently, closure does not cancel the fact that activity started for Segurança Social.',
          'If the closure is linked to atividade opened by mistake, it is better to contact AT through e-Balcão and keep the reply.'
        ] },
        { kind: 'warning', text: 'Automatic exchange between Finanças and Segurança Social exists, but do not rely on it blindly. After cessação or suspensão, go to Segurança Social Direta and check the trabalhador independente status and quarterly declarações.' }
      ]
    },
    {
      id: 'after-closing',
      title: 'What to do after closure',
      content: [
        { kind: 'checklist', items: [
          'Download the comprovativo de cessação/suspensão from Portal das Finanças.',
          'Check that new recibos verdes cannot accidentally be issued after the cessação date.',
          'Close all draft recibos verdes and issue any missing documents for work done before the closure date.',
          'If you are in the IVA normal regime, file the final declaração periódica de IVA for the relevant period.',
          'In 2027, file IRS Modelo 3 for 2026 with Anexo B if there was Category B income in 2026.',
          'Check Anexo SS in IRS: it is often required for income from atividade independente, but there are exceptions.',
          'In Segurança Social Direta, check whether a declaração trimestral is expected for the quarter in which atividade was still open.',
          'Keep PDF evidence for at least several years: recibos, comprovativo, IVA, IRS, Segurança Social payments.',
          'If a client asks for an invoice after cessação for work performed before closure, first check with a contabilista or AT so as not to breach the cessação date.'
        ] },
        { kind: 'paragraph', text: 'The service for closing or changing atividade in Portal Finanças is free. Only the services of a contabilista certificado may be paid, if you have contabilidade organizada or a complex situation involving IVA/international income.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes by expats',
      content: [
        { kind: 'checklist', items: [
          'Leaving atividade open after moving away and forgetting about IRS/IVA.',
          'Closing atividade but not filing IRS for the year in which there were recibos verdes.',
          'Assuming that ausência de rendimentos automatically closes atividade.',
          'Confusing cessação in Finanças with cancellation of NIF, NISS or tax residence.',
          'Not checking Segurança Social Direta after closure.',
          'uing a recibo verde after the cessação date.',
          'Not saving the comprovativo and later having no proof of the closure date.',
          'Choosing alteração instead of cessação and thinking that atividade is closed.',
          'Ignoring IVA if there were previously declarations under the normal regime.',
          'Closing atividade retrospectively without reconciling it with actual payments and invoices.'
        ] },
        { kind: 'warning', text: 'If you have foreign clients, reverse charge, VAT-ID/VIES, crypto/IT consultancy, mixed income or a change of residence in the middle of the year, it is better to check the closure with a contabilista. A mistake in the date can cost more than a consultation.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing cessação/suspensão in Portal das Finanças', amountEUR: 0, note: 'The public service is free when you file it yourself.' },
    { label: 'Contabilista certificado', amountEURMin: 30, amountEURMax: 150, note: 'Indicative cost for one-off help; with contabilidade organizada, filing is usually done through an accountant.' }
  ],
  sources: [
    {
      title: 'gov.pt: changing, suspending, restarting or ending atividade independente',
      url: 'https://www2.gov.pt/en/servicos/fazer-alteracoes-a-atividade-de-trabalho-independente-de-uma-pessoa-singular',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: atividade independente area and atividade declarations',
      url: 'https://www.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS in DRE: obrigações declarativas de início, alteração e cessação',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA in DRE: declarações de alteração e cessação de atividade',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: '',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
