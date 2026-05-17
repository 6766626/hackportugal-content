export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-funeral-ss',
  categoryId: 'emergency_rights',
  title: 'Funeral Grant — Subsídio de Funeral from Segurança Social',
  tldr: 'Subsídio de Funeral is a one-off Segurança Social payment towards part of the funeral costs: in 2026 the standard amount is €219.96. The application is submitted within 6 months after the death via Segurança Social Direta / gov.pt or at a balcão da Segurança Social. For a spouse, children, parents and other direct relatives, this is not a poverty test: what matters is the family relationship, proof that the funeral was paid for, and the deceased person’s status as a beneficiário da Segurança Social.',
  tags: ['funeral', 'segurança-social', 'benefit', 'niss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this payment is',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Funeral is not compensation for the full cost of a funeral, but a fixed one-off Segurança Social payment. As of April 2026, the amount on the official Segurança Social page is €219.96.' },
        { kind: 'paragraph', text: 'It is usually requested by the person who paid for the funeral of the deceased beneficiário da Segurança Social: a spouse/partner in união de facto, child, parent or another direct-line relative. For these close relatives, the payment is not means-tested: Segurança Social does not assess your income as a condition of entitlement.' },
        { kind: 'warning', text: 'Do not confuse it with subsídio por morte and reembolso de despesas de funeral. Subsídio por morte is a separate, larger payment to surviving family members on the death of an insured person/pensioner. Reembolso de despesas de funeral applies in other scenarios and depends on the actual expenses. If you are not sure, apply through the gov.pt/Segurança Social service: the system and the staff member will direct you to the correct form.' }
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
          'For a spouse, parents and children, proof of low income is not required.',
          'The applicant must have a NISS; if they do not have one, they first obtain a NISS or apply with identification at a Segurança Social office.',
          'A Portuguese IBAN or SEPA account is needed so that Segurança Social can transfer the payment.',
          'Foreign nationals with a residence permit, visa, Cartão de Cidadão, CRUE or another lawful document can apply on the same terms, if the requirements relating to the deceased person and the expenses are met.'
        ] },
        { kind: 'paragraph', text: 'If the funeral was paid for by someone who is not a relative — for example, a friend, neighbour or employer — Segurança Social may assess the situation differently and request additional evidence. In that case, keep all payment documents and correspondence with the funeral agency in advance.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: what to prepare',
      content: [
        { kind: 'checklist', items: [
          'Applicant’s document: Cartão de Cidadão, residence permit, passport with visa or another ID.',
          'The applicant’s NISS and, if available, the deceased person’s NISS.',
          'Assento de óbito / certidão de óbito or another official death document.',
          'Fatura and recibo from the agência funerária: preferably with the applicant’s NIF and the deceased person’s details.',
          'Proof of family relationship: certidão de nascimento, certidão de casamento, união de facto or documents from the Conservatória/IRN.',
          'Applicant’s IBAN: bank certificate, statement or confirmation in Segurança Social Direta.',
          'If a representative is acting: procuração and the representative’s ID.',
          'If the documents are not Portuguese: translation and, where required, apostila / legalização.'
        ] },
        { kind: 'warning', text: 'The main mistake is when the funeral bill is issued in another person’s name. Segurança Social pays the person who has proved the expenses. If you paid, ask the agência funerária to issue the fatura/recibo to your NIF straight away.' }
      ]
    },
    {
      id: 'deadline-and-application',
      title: 'Deadline and application',
      content: [
        { kind: 'paragraph', text: 'The application must be submitted within 6 months after the death. Do not wait for inheritance procedures to finish: the benefit is linked to funeral expenses and the application deadline, not to the partilha de herança.' },
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online via gov.pt / Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Go to the “Pedir o subsídio de funeral” service on gov.pt. Login is usually done using Chave Móvel Digital (CMD), Cartão de Cidadão or access to Segurança Social Direta.' },
            { kind: 'checklist', items: [
              'Check your details: name, NISS, NIF, address, IBAN.',
              'Enter the deceased person’s details and date of death.',
              'Upload the certidão de óbito and the funeral agency documents.',
              'Attach proof of family relationship if the system does not see it automatically.',
              'Save the comprovativo de submissão — it is needed if there is a dispute about the deadline.'
            ] }
          ] },
          { id: 'counter', title: 'In person at Segurança Social', content: [
            { kind: 'paragraph', text: 'If you do not have CMD, do not have access to Segurança Social Direta or the documents are complex, go to a balcão da Segurança Social. Take originals and copies. In larger cities, it is better to book in advance via Linha Segurança Social or e-Clic/online services, if available.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'After submission: payment and refusals',
      content: [
        { kind: 'paragraph', text: 'After approval, the money is transferred to the applicant’s IBAN. Processing time depends on the district and the completeness of the documents: if everything is uploaded correctly, it is usually quicker; if the recibo, proof of relationship or IBAN is missing, Segurança Social will send a request for correction.' },
        { kind: 'checklist', items: [
          'Monitor notifications in Segurança Social Direta and letters sent to your registered address.',
          'If a pedido de elementos arrives, reply within the stated deadline.',
          'If the application is refused because of documents, request the written grounds for refusal.',
          'Check whether the family is entitled to subsídio por morte instead.',
          'If the deceased person received a pension, clarify the termination of the pension and any possible survivor benefits.',
          'Keep funeral invoices for at least several years: they may be needed for inheritance or tax matters.'
        ] },
        { kind: 'warning', text: 'The benefit is small — €219.96, while the average funeral agency invoice in Portugal is often significantly higher. Do not plan the funeral on the assumption that Segurança Social will cover the costs in full.' }
      ]
    }
  ],
  costs: [
    { label: 'Subsídio de Funeral', amountEUR: 219.96, note: 'Fixed one-off Segurança Social payment as of April 2026.' },
    { label: 'Application submission', amountEUR: 0, note: 'No state fee is charged via gov.pt/Segurança Social Direta or a balcão da Segurança Social.' }
  ],
  sources: [
    {
      title: 'Segurança Social: Funeral Grant',
      url: 'https://www.seg-social.pt/subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Request the funeral grant',
      url: 'https://www.gov.pt/servicos/pedir-o-subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
