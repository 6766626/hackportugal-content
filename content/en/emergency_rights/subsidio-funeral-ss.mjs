export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-funeral-ss',
  categoryId: 'emergency_rights',
  title: 'Subsídio de Funeral — funeral grant from Segurança Social',
  tldr: 'Subsídio de Funeral is a one-off Segurança Social payment covering part of funeral costs: in 2026 the standard amount is €261.25. The application is submitted within 6 months of the death (counted from the first day of the month following the death) via Segurança Social Direta / gov.pt or at a balcão da Segurança Social. For a spouse, children, parents and other direct relatives, this is not a means test: what matters is the family relationship, proof that the funeral was paid for, and the deceased person’s status as a beneficiário da Segurança Social.',
  tags: ['funeral', 'segurança-social', 'grant', 'niss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this payment is',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Funeral is not compensation for the full cost of a funeral, but a fixed one-off Segurança Social support payment. For 2026, the amount on the official Segurança Social page is €261.25.' },
        { kind: 'paragraph', text: 'It is usually requested by the person who paid for the funeral of the deceased beneficiário da Segurança Social: a spouse/partner in união de facto, child, parent or another direct-line relative. For these close relatives, the payment is not means-tested: Segurança Social does not assess your income as a condition of entitlement.' },
        { kind: 'warning', text: 'Do not confuse it with subsídio por morte or reembolso de despesas de funeral. Subsídio por morte is a separate, larger payment to surviving family members when an insured person/pensioner dies. Reembolso de despesas de funeral applies in other scenarios and depends on the actual costs. If you are not sure, apply through the gov.pt/Segurança Social service: the system and the officer will direct you to the correct form.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply',
      content: [
        { kind: 'checklist', items: [
          'The applicant actually paid for the funeral: the fatura/recibo must be in their name or clearly confirm that they made the payment.',
          'The deceased person was a beneficiário da Segurança Social or fell under the scheme specified by Segurança Social for this payment.',
          'The applicant is a spouse, former spouse under the applicable conditions, pessoa em união de facto, child, parent, grandparent, grandchild or another relative, if they paid for the funeral.',
          'For a spouse, parents and children, it is not necessary to prove low income.',
          'The applicant must have a NISS; if they do not have one, they first obtain a NISS or apply with identification at a Segurança Social office.',
          'A Portuguese IBAN or SEPA account is needed so that Segurança Social can transfer the payment.',
          'Foreign nationals with a residence permit, visa, Cartão de Cidadão, CRUE or another lawful document may apply on the same terms, provided the requirements concerning the deceased person and the expenses are met.'
        ] },
        { kind: 'paragraph', text: 'If the funeral was paid for by someone who is not a relative — for example, a friend, neighbour or employer — Segurança Social may assess the situation differently and request additional evidence. In that case, keep all payment documents and correspondence with the funeral agency in advance.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: what to prepare',
      content: [
        { kind: 'checklist', items: [
          'Applicant’s document: Cartão de Cidadão, residence permit, passport with visa or other ID.',
          'The applicant’s NISS and, if available, the deceased person’s NISS.',
          'Assento de óbito / certidão de óbito or another official death document.',
          'Fatura and recibo from the agência funerária: preferably with the applicant’s NIF and the deceased person’s details.',
          'Proof of relationship: certidão de nascimento, certidão de casamento, união de facto or documents from Conservatória/IRN.',
          'Applicant’s IBAN: bank certificate, statement or confirmation in Segurança Social Direta.',
          'If a representative is acting: procuração and the representative’s ID.',
          'If the documents are not Portuguese: translation and, where required, apostila / legalização.'
        ] },
        { kind: 'warning', text: 'The main mistake is having the funeral invoice issued to another person. Segurança Social pays the person who proved the expenses. If you paid, ask the agência funerária to issue the fatura/recibo to your NIF straight away.' }
      ]
    },
    {
      id: 'deadline-and-application',
      title: 'Deadline and application',
      content: [
        { kind: 'paragraph', text: 'The application must be submitted within 6 months, counted from the first day of the month following the death. Do not wait for inheritance procedures to finish: the grant is linked to funeral expenses and the application deadline, not to partilha de herança.' },
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online via gov.pt / Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Go to the “Requerer o subsídio de funeral à Segurança Social” service on gov.pt. Login is usually via Chave Móvel Digital (CMD), Cartão de Cidadão or access to Segurança Social Direta.' },
            { kind: 'checklist', items: [
              'Check your details: name, NISS, NIF, address, IBAN.',
              'Enter the deceased person’s details and date of death.',
              'Upload the certidão de óbito and the funeral agency documents.',
              'Attach proof of relationship if the system does not detect it automatically.',
              'Save the comprovativo de submissão — it is needed if there is a dispute about the deadline.'
            ] }
          ] },
          { id: 'counter', title: 'In person at Segurança Social', content: [
            { kind: 'paragraph', text: 'If you do not have CMD, do not have access to Segurança Social Direta, or the documents are complex, go to a balcão da Segurança Social. Take originals and copies. In large cities, it is better to book in advance via Linha Segurança Social or e-Clic/online services, if available.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'After submission: payment and refusals',
      content: [
        { kind: 'paragraph', text: 'After approval, the money is transferred to the applicant’s IBAN.\n\nProcessing time depends on the district and the completeness of the documents: if everything has been uploaded correctly, it is usually faster; if the recibo, proof of relationship or IBAN is missing, Segurança Social will send a request for correction.' },
        { kind: 'checklist', items: [
          'Monitor notifications in Segurança Social Direta and letters sent to your registered address.',
          'If you receive a pedido de elementos, reply within the stated deadline.',
          'If the application is refused because of documents, request the written grounds for refusal.',
          'Check whether the family may instead be entitled to subsídio por morte.',
          'If the deceased person was receiving a pension, clarify the termination of the pension and any possible survivor benefits.',
          'Keep funeral invoices for at least several years: they may be needed for inheritance or tax matters.'
        ] },
        { kind: 'warning', text: 'The grant is small — €261.25, while the average funeral agency invoice in Portugal is often significantly higher. Do not plan the funeral on the assumption that Segurança Social will cover the costs in full.' }
      ]
    }
  ],
  costs: [
    { label: 'Subsídio de Funeral', amountEUR: 261.25, note: 'Fixed one-off Segurança Social payment in 2026.' },
    { label: 'Application submission', amountEUR: 0, note: 'No state fee is charged via gov.pt/Segurança Social Direta or at a balcão da Segurança Social.' }
  ],
  sources: [
    {
      title: 'Segurança Social: Subsídio de Funeral',
      url: 'https://www.seg-social.pt/subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'gov.pt: Requerer o subsídio de funeral à Segurança Social',
      url: 'https://www.gov.pt/servicos/requerer-o-subsidio-de-funeral-a-seguranca-social',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
