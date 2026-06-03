export default {
  editorialVoice: 'hackportugal',
  id: 'gender-marker-change-pt',
  categoryId: 'documents_fiscal',
  title: 'Changing the gender marker and name in Portuguese documents',
  tldr: 'In Portugal, citizens aged 18 and over change the sex record and name at the Conservatória do Registo Civil by self-determination: without surgery, diagnosis or court. For ages 16-17, legal representatives and a doctor’s/psychologist’s report on a free and informed decision are required. The registration service is free; new Cartão de Cidadão and passport are paid separately. Foreign residents usually first change their passport/birth certificate in their country of citizenship, then update NIF, AIMA, SNS, bank and work records in Portugal.',
  tags: ['gender', 'documents', 'conservatória', 'aima'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal basis and who can apply',
      content: [
        { kind: 'paragraph', text: 'The procedure is based on Lei 38/2018: Portugal recognises the right to self-determination of gender identity and expression. For adult Portuguese citizens, changing the sex record and consequente alteração de nome próprio is done administratively at the Conservatória do Registo Civil, not through court.' },
        { kind: 'checklist', items: [
          'Aged 18+: the application is submitted in person; medical certificates, surgery, hormone therapy or a psychiatric diagnosis are not required',
          'Aged 16-17: the application is submitted by legal representatives; a doctor’s or psychologist’s report is also required, confirming the capacity to make a free and informed decision',
          'Under 16: there is no standard procedure for changing the sex record in the Registo Civil',
          'The “sexo” entry in the birth record is changed and, if desired, the nome próprio',
          'In 2026, Portuguese civil registration works with binary markers: feminino / masculino; there is no separate X / non-binary marker in the Cartão de Cidadão and passport',
          'After the entry in the Registo Civil, documents must be replaced separately: Cartão de Cidadão, passport, driving licence, tax and medical records'
        ] },
        { kind: 'warning', text: 'If you are not a Portuguese citizen, the Conservatória usually does not “rewrite” your foreign birth certificate. For most residents, the route has two steps: first change documents in the country of citizenship, then update Portuguese registers based on the new foreign documents.' },
        { kind: 'warning', text: 'Important: in March 2026 Parliament approved, at first reading (na generalidade), a revision of this regime — possibly bringing back a mandatory medical report for adults too. As of late May 2026 the bill is still at committee stage (especialidade): there has been no final vote, promulgation or publication in the Diário da República, so the current rules under Lei 38/2018 still apply. Check the current version of the law before applying.' }
      ]
    },
    {
      id: 'conservatoria-process',
      title: 'Process at the Conservatória do Registo Civil',
      content: [
        { kind: 'paragraph', text: 'The request is called pedido de registo de mudança da menção do sexo e de nome próprio. It can be submitted at the Conservatória do Registo Civil. In practice, it is more convenient to go to a large Conservatória or Loja de Cidadão with a serviço de registo civil; appointments depend on the branch.' },
        { kind: 'checklist', items: [
          'Take your Cartão de Cidadão or another identity document',
          'Prepare your NIF and contact details — they are not always mandatory for the registration itself, but are needed for subsequent updates',
          'State which marker should be entered: feminino or masculino',
          'If you are changing your name, choose a new nome próprio that is acceptable for Portuguese civil registration',
          'Submit the application in person; for adults, the basis is your own free expression of will',
          'Ask for proof of submission and confirm when you can obtain the updated certidão de nascimento',
          'After registration, order new documents: Cartão de Cidadão and, if needed, passaporte eletrónico português'
        ] },
        { kind: 'paragraph', text: 'The Conservatória checks the application and enters the change in the civil status record. After this, the updated registo civil becomes the basis for the other Portuguese documents.' }
      ]
    },
    {
      id: 'minors',
      title: 'If the applicant is aged 16-17',
      content: [
        { kind: 'paragraph', text: 'For ages 16-17, the law requires additional protection: the application is not submitted fully independently. Legal representatives are required, as well as a medical or psychological report confirming that the minor’s decision is free, informed and made with sufficient maturity.' },
        { kind: 'checklist', items: [
          'Minor’s document: Cartão de Cidadão or passport',
          'Documents of the legal representatives',
          'Proof of parental authority, if this is not clear from the Cartão de Cidadão / registo civil',
          'Report from a médico or psicólogo',
          'Application for the new gender marker',
          'Application for the new nome próprio, if the name is also changing',
          'Contact details for Conservatória notifications'
        ] },
        { kind: 'warning', text: 'If one of the legal representatives does not agree or there is a conflict of parental authority, the Conservatória may require additional resolution. In this situation, it is better to obtain advice from a lawyer or apoio judiciário in advance.' }
      ]
    },
    {
      id: 'foreign-residents',
      title: 'Foreign residents: a two-step route',
      content: [
        { kind: 'paragraph', text: 'For an expat without Portuguese citizenship, the key document is the passport and/or birth certificate from the country of citizenship. In everyday registers, Portugal usually follows the data in the foreign passport: name, date of birth, citizenship and gender marker in AIMA, Finanças, SNS, the bank and the employment contract should match the identity document.' },
        { kind: 'substeps', items: [
          { id: 'step-1-home-country', title: '1. First change the documents of the country of citizenship', content: [
            { kind: 'checklist', items: [
              'Check the rules of your country: civil registry office / consulate / court / migration authority',
              'Obtain a new passport with the updated name and, if the country allows it, gender marker',
              'If the birth certificate was changed or there is a court decision, obtain a legalised copy',
              'For documents outside the EU, an Apostille or consular legalisation is usually required',
              'Have a translation into Portuguese made by a sworn translator or through a recognised procedure, if the Portuguese authority requests it'
            ] }
          ] },
          { id: 'step-2-portugal', title: '2. Then update Portuguese registers', content: [
            { kind: 'checklist', items: [
              'AIMA: replace the details in the autorização de residência / cartão de residência based on the new passport',
              'Finanças: update the nome fiscal and NIF details in Portal das Finanças or Serviço de Finanças',
              'SNS: update the número de utente at the Centro de Saúde',
              'Segurança Social: update the NISS, if you have one',
              'Bank: update KYC details, bank cards, MB WAY and signatures',
              'Employer or client for recibos verdes: update the contract, payroll, invoices',
              'IMT: replace the carta de condução if the name has changed',
              'Insurance companies, university, telecom, landlord: bring contracts into line with the new name'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Do not change your name “piecemeal” only at the bank or with your employer if the passport and AIMA are still old. A name mismatch between the passport, residence permit, NIF and bank profile can block KYC, salary, IRS, rent and international travel.' }
      ]
    },
    {
      id: 'after-approval',
      title: 'What to replace after approval',
      content: [
        { kind: 'paragraph', text: 'The change of record at the Conservatória itself does not automatically update all systems. After the registo de mudança, you need to go through the main identification points. The more contracts and licences you have, the more important it is to do this within one month.' },
        { kind: 'checklist', items: [
          'Cartão de Cidadão: new document after the Registo Civil update',
          'Passaporte eletrónico português: if you travel or live outside Portugal',
          'Carta de condução at IMT',
          'NIF and Portal das Finanças profile',
          'NISS and Segurança Social Direta',
          'Número de utente and SNS24',
          'Banks, brokers, Revolut / Wise / MB WAY',
          'Employer, contrato de trabalho, recibos verdes, Autoridade Tributária invoices',
          'Rental contract, utilities, telecom, insurance companies',
          'Diplomas, university records, professional licences, Ordem profissional, if applicable'
        ] },
        { kind: 'paragraph', text: 'Keep old and new certidões, the Conservatória confirmation and copies of old documents. They will be useful for explaining continuity of identity to banks, for tax history, diplomas, visas for other countries and employer checks.' }
      ]
    },
    {
      id: 'practical-risks',
      title: 'Practical risks and how to reduce them',
      content: [
        { kind: 'checklist', items: [
          'Before applying, check the spelling of the name with accents: João / Joao, Sofia / Sofía — for systems, these are different strings',
          'If you have tickets, visas or an AIMA appointment, do not change your passport right before travel without allowing extra time',
          'If you are waiting for renewal of your residence permit, check with AIMA whether the new passport can be added to the current process or whether it is better to wait for the card',
          'For IRS, keep evidence that the old and new names relate to the same NIF',
          'For diplomas and professional licences, ask in advance whether they accept a certidão de nascimento / deed poll / court order',
          'If your country of citizenship does not recognise the required marker, Portugal may still correctly use your new name for some local contracts, but AIMA and passport details will remain a limitation',
          'In cases of discrimination in services, school, healthcare or work, keep written refusals; complaints can be sent to the Comissão para a Cidadania e a Igualdade de Género and Livro de Reclamações'
        ] },
        { kind: 'warning', text: 'In 2026, “self-identification” in the Portuguese Registo Civil does not equal automatic international recognition. For travel, consular actions and AIMA, the decisive document remains the passport of your country of citizenship.' }
      ]
    }
  ],
  costs: [
    { label: 'Registration of change of sex and name at the Conservatória', amountEUR: 0, note: 'The pedido de registo de mudança de sexo e de nome próprio service is free.' },
    { label: 'New Cartão de Cidadão', amountEUR: 18, note: 'Standard issue/renewal in Portugal; urgent options cost more.' },
    { label: 'Passaporte eletrónico português', amountEUR: 65, note: 'Standard passport in Portugal; urgency and issue abroad increase the price.' },
    { label: 'Translations, Apostille, legalisation of foreign documents', amountEURMin: 20, amountEURMax: 150, note: 'Depends on the country, language and number of documents; for foreign residents this is often the main variable.' }
  ],
  sources: [
    {
      title: 'gov.pt: request registration of change of sex and name',
      url: 'https://www2.gov.pt/en/servicos/pedir-o-registo-de-mudanca-de-sexo-e-de-nome-proprio',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt: Registo Civil services and information',
      url: 'https://justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 38/2018: direito à autodeterminação da identidade de género e expressão de género',
      url: 'https://dre.pt/dre/detalhe/lei/38-2018-115933863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN: Registo Civil and civil identification documents',
      url: 'https://irn.justica.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
