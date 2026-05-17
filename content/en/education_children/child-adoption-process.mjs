export default {
  editorialVoice: 'hackportugal',
  id: 'child-adoption-process',
  categoryId: 'education_children',
  title: 'Adopting a child in Portugal — 9 stages',
  tldr: 'Adoption in Portugal goes through Segurança Social or Santa Casa da Misericórdia de Lisboa: candidatura, mandatory formação, psychosocial assessment of up to 6 months, inclusion on the national list, matching with a child, transition period, pré-adoção of up to 6 months and a decision by the Tribunal de Família e Menores. The public part of the process is free, but for foreigners legal residence, translations, apostila and stable conditions are critical.',
  tags: ['adoption', 'children', 'segurança-social', 'court'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-can-adopt',
      title: 'Who can adopt in Portugal',
      content: [
        { kind: 'paragraph', text: 'Adotar uma criança is the judicial establishment of parenthood. After the court decision, the child becomes your child with the same rights as a biological child: surname, inheritance, parental responsibility, registration at the Conservatória.' },
        { kind: 'checklist', items: [
          'One applicant must usually be over 30; from 25 if adopting the child of a spouse/partner.',
          'A couple may adopt jointly if both are over 25 and have been married or in união de facto for more than 4 years.',
          'Same-sex couples have the right to joint adoption on the same general terms.',
          'On the date the child is placed with the applicant, the applicant should usually not be over 60.',
          'The age difference between the applicant and the child should usually not exceed 50 years; exceptions are possible if this is in the child’s interests.',
          'Physical and mental health, housing conditions, income, no criminal record and the ability to provide the child with a stable environment are required.',
          'A foreigner does not need Portuguese citizenship, but ordinary residence in Portugal and documents confirming legal status and family situation are required.',
          'If you do not live in Portugal, the international procedure applies through the central authority of the country of ordinary residence, rather than the usual candidatura at the Centro Distrital.'
        ] },
        { kind: 'warning', text: 'Adoption is not a way to “get a child faster”. The system starts from the interests of a specific child, not from a queue of adults. The narrower your criteria on the child’s age, health and history, the longer the wait.' }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Stages 1–3: candidatura, documents, formação',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-1-info', title: '1. Information and initial consultation', content: [
            { kind: 'paragraph', text: 'Start with the Segurança Social “Como adotar” page or the gov.pt “Adotar uma criança” service. They indicate where to apply according to your place of residence: Centro Distrital do Instituto da Segurança Social or, in the Lisbon area, Santa Casa da Misericórdia de Lisboa.' }
          ] },
          { id: 'stage-2-candidatura', title: '2. Submitting the candidatura', content: [
            { kind: 'paragraph', text: 'The application is submitted to the adoção body for your place of residence. Usually, a meeting is arranged and forms are issued. For a couple, the application is signed by both applicants.' },
            { kind: 'checklist', items: [
              'Documento de identificação: residence permit / Cartão de Cidadão / passport + proof of legal stay.',
              'NIF and contact details.',
              'Certidão de nascimento for each applicant.',
              'Certidão de casamento or proof of união de facto, if a couple is applying.',
              'Certificado do registo criminal from Portugal; foreigners may be asked for certificates from countries of previous residence.',
              'Atestado médico or declaração médica on health status.',
              'IRS / declaração de rendimentos / employment contract / recibos verdes — proof of income.',
              'Proof of address: rental contract, escritura, utility bill or atestado de residência.',
              'For foreign documents: apostila or consular legalisation and translation into Portuguese, if the document is not in PT.'
            ] }
          ] },
          { id: 'stage-3-formacao', title: '3. Formação para adoção', content: [
            { kind: 'paragraph', text: 'After the candidatura is accepted, applicants complete mandatory preparation. This is not a formality: trauma, attachment, the child’s history, disclosure of the adoption, contact with the biological family, school adjustment and the real limitations of the system are discussed.' }
          ] }
        ] }
      ]
    },
    {
      id: 'assessment-and-approval',
      title: 'Stages 4–5: assessment of up to 6 months and decision',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-4-assessment', title: '4. Avaliação psicossocial — up to 6 months', content: [
            { kind: 'paragraph', text: 'After the candidatura and formação, the Segurança Social / Santa Casa team carries out a psychosocial assessment. The legal aim is to understand whether you can provide a specific child with safety, stability and long-term care.' },
            { kind: 'checklist', items: [
              'Individual interviews with each applicant.',
              'Interview with the couple, if the application is joint.',
              'Home visit and assessment of living conditions.',
              'Analysis of income, working pattern, family support and friends network.',
              'Discussion of motivation: why adoption, what kind of child, what boundaries.',
              'Checking readiness for an older child, siblings, developmental delays, trauma, disability.',
              'Cross-checking documents and certificates.',
              'Final technical opinion on suitability or unsuitability.'
            ] }
          ] },
          { id: 'stage-5-decision', title: '5. Decision on suitability and inclusão na lista nacional', content: [
            { kind: 'paragraph', text: 'Following the assessment, the application may be approved, rejected or clarifications may be requested. If the decision is positive, applicants receive the status of selecionados / candidatos aptos and are included in the national matching system.' },
            { kind: 'warning', text: 'A positive assessment does not mean a child will be proposed quickly. The wait depends on the profile you are prepared to accept. There are few infants without a serious history in the system; there are more older children, sibling groups and children with medical/developmental needs.' }
          ] }
        ] }
      ]
    },
    {
      id: 'matching-transition-pre-adoption',
      title: 'Stages 6–8: matching, introduction, pré-adoção',
      content: [
        { kind: 'substeps', items: [
          { id: 'stage-6-matching', title: '6. Matching a child from the national list', content: [
            { kind: 'paragraph', text: 'Adoção teams are not looking for the “next applicant”, but for a family suited to a specific child. They look at age, brothers/sisters, health, history of neglect/abuse, school, language, place of residence, and the applicants’ readiness for contact and therapy.' }
          ] },
          { id: 'stage-7-proposal', title: '7. Proposta and gradual introduction', content: [
            { kind: 'paragraph', text: 'If the profile matches, information about the child is presented to you. If you agree, an introduction plan begins: first through specialists, then in-person meetings, short visits and longer stays. The pace depends on the child’s age and condition.' }
          ] },
          { id: 'stage-8-pre-adocao', title: '8. Pré-adoção — usually up to 6 months', content: [
            { kind: 'paragraph', text: 'When the child moves in with the applicants, the pré-adoção period begins. It usually lasts up to 6 months. The team continues to provide support: visiting the home, speaking with the child, school, doctors and applicants, and recording the adjustment.' },
            { kind: 'checklist', items: [
              'Arrange a número de utente in the SNS for the child or update the details if a number already exists.',
              'Inform the school or Creche of the new family situation only to the extent needed for the child’s safety.',
              'Do not abruptly change the child’s name, language, school and surroundings without a recommendation from specialists.',
              'Keep the adoção team’s contacts and respond to requests quickly.',
              'Record medical appointments, therapy, behaviour, sleep, diet and school adjustment.',
              'Do not publish photos and the child’s story on social media before the court decision and without a risk assessment.',
              'Plan leave/flexible working: the first months require greater adult presence.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'court-and-after',
      title: 'Stage 9: court and life after the decision',
      content: [
        { kind: 'paragraph', text: 'If the pré-adoção is successful, the adoção body prepares a relatório and the case goes to the Tribunal de Família e Menores. The court checks whether the adoption is in the child’s interests and issues a sentença de adoção. After the decision becomes final, the child’s record is updated at the Conservatória.' },
        { kind: 'checklist', items: [
          'Obtain a copy of the sentença and monitor registration at the Conservatória / IRN.',
          'Update the child’s documents: assento de nascimento, Cartão de Cidadão or documents of a foreign child, if applicable.',
          'Update the agregado familiar in Finanças and Segurança Social.',
          'Check direito a abono de família and other family benefits, if income conditions are met.',
          'Request apoio psicológico, terapia da fala, pediatria de desenvolvimento or pedopsiquiatria, if recommended.',
          'Keep all reports and medical documents: they will be needed by the school, SNS and specialists.',
          'Continue speaking to the child about adoption honestly and in an age-appropriate way; concealment usually harms trust.'
        ] },
        { kind: 'warning', text: 'Before the court decision, the child is still in a transitional legal situation. Do not plan international travel, a change of country of residence or major legal steps without written agreement from the adoção team and, if necessary, the court.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting the candidatura, formação and assessment at Segurança Social / Santa Casa', amountEUR: 0, note: 'The state adoption procedure does not charge applicants.' },
    { label: 'Translation of a foreign document', amountEURMin: 20, amountEURMax: 60, note: 'Indicative per page; depends on the language, urgency and certification.' },
    { label: 'Apostila / legalisation of a foreign document', amountEURMin: 10, amountEURMax: 50, note: 'Depends on the country of issue; Portuguese authorities may require recent certificates.' },
    { label: 'Lawyer', amountEURMin: 0, amountEURMax: 1500, note: 'Not always needed in the standard national procedure, but useful for international, immigration or disputed matters.' }
  ],
  sources: [
    { title: 'Segurança Social: How to adopt', url: 'https://www.seg-social.pt/como-adotar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt: Adopt a child', url: 'https://www.gov.pt/servicos/adotar-uma-crianca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Jurídico do Processo de Adoção — Lei 143/2015', url: 'https://diariodarepublica.pt/dr/detalhe/lei/143-2015-70215246', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portuguese Civil Code: adoption, art. 1973.º et seq.', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
