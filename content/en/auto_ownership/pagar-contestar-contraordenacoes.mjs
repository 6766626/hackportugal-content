export default {
  editorialVoice: 'hackportugal',
  id: 'pagar-contestar-contraordenacoes',
  categoryId: 'auto_ownership',
  title: 'Portal das Contraordenações: paying and contesting fines online',
  tldr: 'The ANSR Portal das Contraordenações is the official account area for road fines: login via Cartão de Cidadão or Chave Móvel Digital, view cases by NIF, pay by Multibanco reference, submit a defesa/requerimento online and check pontos da carta. In 2026, a defence is usually submitted within 15 working days after notification. Instalments can be requested for fines from €210, minimum €50 per payment, usually up to 12 instalments.',
  tags: ['fines', 'ansr', 'contraordenações', 'mb', 'driving licence'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-portal-does',
      title: 'What you can do on the ANSR portal',
      content: [
        { kind: 'paragraph', text: 'Portal das Contraordenações is the Autoridade Nacional de Segurança Rodoviária account area for administrative road cases: speeding, parking, alcohol, using a phone while driving, running a red light, lack of documents and other contraordenações rodoviárias.' },
        { kind: 'checklist', items: [
          'View cases linked to your NIF / driver document',
          'See the auto de contraordenação number, date, place, Código da Estrada article and case status',
          'Obtain payment details: entidade, referência, montante for Multibanco / home banking',
          'Submit a defesa — a written objection to the fine',
          'Submit a requerimento: instalments, identification of the actual driver, change of address, request for copies',
          'Upload documents and evidence in PDF',
          'Check pontos da carta — driving licence points',
          'Track ANSR notifications and decisions'
        ] },
        { kind: 'warning', text: 'The portal works only for ANSR road contraordenações. EMEL, municipal parking, Via Verde / portagens, IMT, Finanças or court fines may be payable in other systems.' }
      ]
    },
    {
      id: 'login-and-find-case',
      title: 'Login: NIF, CC, CMD and finding the case',
      content: [
        { kind: 'paragraph', text: 'Go to portalcontraordenacoes.ansr.pt and click autenticação. In 2026, the standard login is via Cartão de Cidadão with PIN/reader or Chave Móvel Digital (CMD). After login, the portal shows cases linked to your identifier/NIF.' },
        { kind: 'checklist', items: [
          'Prepare your NIF and access to CMD or Cartão de Cidadão',
          'If you have a residence permit but no Cartão de Cidadão, activate Chave Móvel Digital in advance via ePortugal / IRN / Espaço Cidadão, if available for your document',
          'Check the “Os meus processos” section or a similar list of cases',
          'Compare the case number with the paper notification: auto / processo / data da infração',
          'Check the prazo: usually 15 working days from notification for payment/defesa',
          'Download or save the notification PDF and detalhes do processo',
          'If the fine is for a vehicle, but someone else was driving, look for the identificação do condutor option'
        ] },
        { kind: 'warning', text: 'If you do not have CMD/Cartão de Cidadão, online access may not work. In that case, use the details from the paper notification and contact ANSR using the contacts in the letter: by registered post, email/form or in person through available service points. Do not wait for the deadline to expire just because of login problems.' }
      ]
    },
    {
      id: 'pay-online',
      title: 'Paying a fine by Multibanco reference',
      content: [
        { kind: 'paragraph', text: 'The notification and/or portal show the entidade, referência and montante. You can pay at Multibanco, via home banking or in a banking app under “Pagamentos ao Estado / Pagamento de Serviços”, depending on the bank and type of reference.' },
        { kind: 'substeps', items: [
          { id: 'get-reference', title: '1. Get the reference', content: [
            { kind: 'checklist', items: [
              'Open the case on Portal das Contraordenações',
              'Find the “Pagamento” / “Referência MB” section',
              'Check the amount: coima, custas, depósito or pagamento voluntário',
              'Check the expiry date of the reference',
              'Save the PDF or a screenshot with the payment details'
            ] }
          ] },
          { id: 'pay', title: '2. Pay and keep proof', content: [
            { kind: 'checklist', items: [
              'Enter entidade, referência, montante without rounding',
              'Check that you are paying ANSR / Estado, not a third-party recipient',
              'Save the comprovativo as a PDF',
              'After a few days, check the case status on the portal',
              'If the status has not updated, send the comprovativo to ANSR with the case number'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Pagamento voluntário pelo mínimo often closes the issue regarding the coima, but does not always close the case entirely: for a contraordenação grave or muito grave there may be a separate penalty, such as inhibição de conduzir and loss of points. If you want to dispute the merits, first assess whether the payment will be considered an admission/voluntary payment or a depósito.' }
      ]
    },
    {
      id: 'parcelamento',
      title: 'Instalments: when a fine can be split',
      content: [
        { kind: 'paragraph', text: 'For large road fines, you can request pagamento em prestações. ANSR’s practical rule for 2026: the fine amount must be at least €210, each payment must be at least €50, and instalments are usually limited to 12 monthly payments.' },
        { kind: 'checklist', items: [
          'Check that montante da coima ≥ €210',
          'Calculate the payments so that each prestação is at least €50',
          'Submit a requerimento through the portal in your case or in writing to ANSR',
          'State the case number, NIF, name, address, email, telephone',
          'Write how many prestações you are requesting and why instalments are needed',
          'Attach documents on income/expenses if they support the need',
          'Wait for ANSR’s decision and new payment details',
          'Pay strictly on time: missing one instalment may make the entire remaining amount immediately payable'
        ] },
        { kind: 'warning', text: 'Do not assume instalments are approved automatically. Until ANSR issues a despacho/decision, the original payment deadline may still matter. If the deadline is close, submit the requerimento immediately after receiving the notification.' }
      ]
    },
    {
      id: 'contest-defense',
      title: 'How to submit a defesa online',
      content: [
        { kind: 'paragraph', text: 'A defesa is a written objection in the case. The typical deadline under the Código da Estrada is 15 working days from the date of notification. Count working days specifically; weekends and official public holidays are not included. If the notification was received by registered post, the date is usually the delivery date or the legally established deemed delivery date.' },
        { kind: 'checklist', items: [
          'Open the relevant processo on the portal',
          'Select “Apresentar defesa” / “Requerimento”',
          'Write in Portuguese; it is better not to use English or Russian',
          'State the case number, NIF, carta de condução number, address and email',
          'Describe the facts: why the offence was not committed, radar/place/number plate error, incorrect driver identification, breach of notification procedure',
          'Attach evidence: photos, GPS, recibos, parking tickets, tickets, car rental agreement, employer declaração',
          'If there was another driver, submit identificação do condutor with their details and evidence',
          'If you request witnesses, state their name, address and exactly what they confirm',
          'Save the comprovativo de submissão with the date and time'
        ] },
        { kind: 'warning', text: 'Submitting a defesa does not guarantee suspension of all consequences. For serious offences, ANSR may still issue a decision on coima, custas, inhibição de conduzir and point deduction. For alcohol, acidente, excesso grande de velocidade, reincidência or risk of losing the licence, it is better to show the case to an advogado.' }
      ]
    },
    {
      id: 'points-and-after-decision',
      title: 'Points, the decision and what to do next',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a driver usually has 12 pontos da carta. Points are deducted after a final decision, not simply at the moment of the radar. On Portal das Contraordenações you can check your current saldo de pontos and sanctions history.' },
        { kind: 'checklist', items: [
          'A grave contraordenação usually deducts 2 or 3 points, depending on the offence',
          'A muito grave usually deducts 4 or 5 points',
          'A road crime can deduct 6 points',
          'At 4–5 points, ANSR may require you to attend an ação de formação',
          'At 1–3 points, a novo exame de condução may be ordered',
          'At 0 points, the driving licence is cancelled, and you cannot obtain a new one immediately',
          'Check the portal after payment or the decision: the status update is not always immediate',
          'Keep all comprovativos at least until the case is finally closed'
        ] },
        { kind: 'paragraph', text: 'If you receive a decisão condenatória and disagree, the next step is an impugnação judicial within the established deadline, usually through the tribunal competente. This is no longer a simple online complaint: check the prazo in the ANSR decision and obtain legal advice.' }
      ]
    }
  ],
  costs: [
    { label: 'Access to Portal das Contraordenações', amountEUR: 0, note: 'The official ANSR portal is free; you pay only the fine/coima itself, custas or sanctions in the case.' },
    { label: 'Minimum fine amount for requesting instalments', amountEUR: 210, note: 'Practical threshold for pagamento em prestações in 2026.' },
    { label: 'Minimum instalment payment', amountEUR: 50, note: 'Each prestação must be at least €50; usually a maximum of 12 monthly payments.' }
  ],
  sources: [
    { title: 'ANSR Portal das Contraordenações', url: 'https://portalcontraordenacoes.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: checking the Portal das Contraordenações', url: 'https://www2.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — Decreto-Lei 114/94, articles on contraordenações, payment, defence and points', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
