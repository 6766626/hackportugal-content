export default {
  editorialVoice: 'hackportugal',
  id: 'passport-change-mid-residency',
  categoryId: 'residence_permit',
  title: 'Changing your foreign passport while your residence permit is valid — what to update',
  tldr: 'If you have received a new foreign passport, your valid Portuguese residence permit usually does not become invalid: the título de residência number remains the same, and NIF/NISS/utente do not change either. But the new passport number must be updated with AIMA at the next renewal or via a contact/request, with Finanças as your identification document, with your bank for KYC, and with your employer/university. For travel, carry your new passport + cartão de residência; the old passport is useful if it contains visas, stamps, or the old number in your AIMA file.',
  tags: ['passport', 'aima', 'residence permit', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-changes',
      title: 'What changes, and what does not',
      content: [
        { kind: 'paragraph', text: 'Changing your foreign passport is a change of identification document, not a change of your immigration status. A residence permit in Portugal is linked to your process at AIMA and to your título de residência number, not only to your passport number.' },
        { kind: 'checklist', items: [
          'NIF does not change: it is your tax number for life.',
          'NISS does not change: your Segurança Social number remains the same.',
          'Número de utente SNS does not change.',
          'Cartão de residência usually remains valid until the validade date, provided your name, nationality, date of birth, or type of residence permit has not changed.',
          'The new passport number must be updated with the institutions where the passport is used as an identification document.',
          'Do not throw away the old passport: it may contain D1-D8 visas, entry stamps, or the old passport number for cross-checking with AIMA/the bank.'
        ] },
        { kind: 'warning', text: 'If your name, transliteration, nationality, date of birth, or sex changed when you changed passport, this is no longer a “simple passport replacement”. You need to check with AIMA: the details on the cartão de residência must match the valid document.' }
      ]
    },
    {
      id: 'aima',
      title: 'AIMA: when and how to notify',
      content: [
        { kind: 'paragraph', text: 'AIMA must have your current passport in your immigration file. In practice, the passport number is most often updated when renewing the residence permit: you submit the new passport as the main document, and the old one if you need to prove your visa/entry history.' },
        { kind: 'checklist', items: [
          'Make a scan of the new passport: the page with the photo, number, issue date, and expiry date.',
          'Keep a scan of the old passport and the pages with visas/stamps, if any.',
          'If your residence permit renewal is soon — update the passport as part of the renewal document package.',
          'If renewal is still far away, check the AIMA personal area/channel or send a request through AIMA’s official contacts with the subject relating to updating document details.',
          'For an in-person appointment at AIMA, take both passports: the new original and the old original, or a copy if the old one was taken by the consulate.',
          'If the residence permit card was lost or stolen together with the old passport, this is a separate procedure: first make a denúncia to the police, then request a duplicate/replacement cartão de residência.'
        ] },
        { kind: 'warning', text: 'Do not expect AIMA to automatically learn about the new passport from your country’s consulate. Portuguese authorities usually only see the documents that you yourself have submitted to the process.' }
      ]
    },
    {
      id: 'financas-and-tax',
      title: 'Finanças: update the document, not the NIF',
      content: [
        { kind: 'paragraph', text: 'At Finanças, your NIF remains the same, but the cadastro fiscal may store an identification document: passport, cartão de residência, or Cartão de Cidadão for Portuguese citizens. If the old passport was your main ID, update it to the new one.' },
        { kind: 'checklist', items: [
          'Check your details in Portal das Finanças: NIF, name, morada fiscal, identification document.',
          'If you have access to Portal das Finanças, submit a request via e-balcão or book an appointment at a Serviço de Finanças.',
          'Attach a copy of the new passport and, if necessary, a copy of the cartão de residência.',
          'If you have a fiscal representative, check whether the representative can submit/support the update.',
          'If you have already become tax resident in Portugal, check your morada fiscal separately: changing passport does not automatically change your address.',
          'IRS, IVA, recibos verdes, IMI, IUC, and other taxes remain linked to the NIF, not to the passport number.'
        ] },
        { kind: 'warning', text: 'Do not open a new NIF because of a new passport. Two NIFs for one person create problems with IRS, banks, contratos, and Segurança Social.' }
      ]
    },
    {
      id: 'banks-work-services',
      title: 'Bank, work, SNS, and everyday services',
      content: [
        { kind: 'paragraph', text: 'Banks and financial services are required to keep the client’s KYC details up to date. If the old passport was recorded with the bank, it is better to update it straight away: otherwise, operations may be restricted, or documents may be requested for transfers or when renewing a card.' },
        { kind: 'checklist', items: [
          'Bank: upload the new passport in the app/online banking or go to a branch with your passport and cartão de residência.',
          'MB WAY/Multibanco do not in themselves require a new passport, but they depend on the bank profile.',
          'Employer: send the new passport to HR, especially if the contrato de trabalho and payroll store the ID document.',
          'Contabilista: notify them if you are self-employed with recibos verdes and the passport is listed in your records.',
          'SNS/Centro de Saúde: the utente number does not change, but you can ask reception to update the document.',
          'Segurança Social: NISS does not change; an update is needed if the old passport is listed in the profile or you are asked to confirm your identity.',
          'University, school, insurer, telecoms operator, housing rental: update it wherever the contract directly contains the old passport number.'
        ] }
      ]
    },
    {
      id: 'travel',
      title: 'Travelling with a new passport and an old residence permit',
      content: [
        { kind: 'paragraph', text: 'To enter Portugal and travel within Schengen, you need a valid passport and a valid cartão de residência. If the residence permit is still valid, changing passport usually does not require a new visa.' },
        { kind: 'checklist', items: [
          'Travel with the new valid passport and the physical residence permit card.',
          'Take the old passport if it contained a national D1-D8 visa, the first entry stamp, or if it is listed in old AIMA documents.',
          'If the old passport was taken when the new one was issued, keep copies of important pages and a certificate/endorsement from the consulate, if issued.',
          'Check that the name in the new passport matches the name on the cartão de residência and airline ticket.',
          'If your name changed after marriage/divorce, first assess whether the cartão de residência needs replacing, not only whether the passport needs updating.',
          'Do not hand the cartão de residência to the airline as a “visa”: it is your residence document; show it together with your passport when your right to enter is checked.'
        ] },
        { kind: 'warning', text: 'If the residence permit has expired, a new passport alone does not solve the entry problem. You need a valid renewal/confirmation of the AIMA process or another document recognised on the date of travel.' }
      ]
    },
    {
      id: 'practical-order',
      title: 'Practical order of actions',
      content: [
        { kind: 'checklist', items: [
          '1. Obtain the new passport and make PDF scans of the new and old passports.',
          '2. Check that the name, date of birth, and nationality match the cartão de residência.',
          '3. Notify/prepare the update for AIMA: immediately via an available channel or at the next residence permit renewal.',
          '4. Update the document with Finanças if the passport was your ID in the tax cadastro.',
          '5. Update KYC with the bank and financial services.',
          '6. Notify your employer, contabilista, university, insurer, and other counterparties where the contract states the passport number.',
          '7. Until the next residence permit renewal, keep the old passport or certified/ordinary copies of it together with your immigration documents.'
        ] },
        { kind: 'paragraph', text: 'The main rule: NIF, NISS, utente, and the residence permit number itself are not “reissued” because of a new passport. What is updated is the document you use to prove your identity.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Notify AIMA/Finanças/bank of the new passport',
      amountEUR: 0,
      note: 'Usually free, provided no new card is issued and there are no notarial/translation services.'
    },
    {
      label: 'Replacement or duplicate cartão de residência',
      amountEURMin: 0,
      amountEURMax: 307.2,
      note: 'Not always needed; the fee depends on the grounds and the type of AIMA procedure. From 01/03/2026, under the updated AIMA table, separate procedures, for example art. 75, cost €307.20.'
    },
    {
      label: 'New foreign passport at your country’s consulate',
      amountEURMin: 0,
      amountEURMax: 250,
      note: 'The cost depends on the country of nationality, urgency, and consular tariff; this is not a Portuguese fee.'
    }
  ],
  sources: [
    {
      title: 'ePortugal: renewing autorização de residência',
      url: 'https://www2.gov.pt/en/servicos/renovar-a-autorizacao-de-residencia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA: official portal of Agência para a Integração, Migrações e Asilo',
      url: 'https://aima.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: support and e-balcão',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: customer identification and prevention of money laundering',
      url: 'https://www.bportugal.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
