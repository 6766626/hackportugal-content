export default {
  editorialVoice: 'hackportugal',
  id: 'claim-claii-integracao',
  categoryId: 'country_specific',
  title: 'CLAIM/CLAII — local support centres for migrant integration',
  tldr: 'CLAIM are free local help points for migrants: they explain which documents are needed for AIMA, Finanças, SNS, Segurança Social, schools, housing and work, help fill in forms and make online appointments. The network operates in 90+ municipalities through Câmara Municipal/Junta de Freguesia, AIMA and the former ACM structure; the old name CLAII still appears on websites. It is not a residence permit accelerator and not a lawyer; AIMA/IRN/Finanças state fees are paid separately.',
  tags: ['claim', 'migrants', 'aima', 'integration'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-claim',
      title: 'What CLAIM is and why the old name CLAII still appears',
      content: [
        { kind: 'paragraph', text: 'CLAIM means Centros Locais de Apoio à Integração de Migrantes, local support centres for migrant integration. It is free first-line help with everyday, administrative and integration matters: documents, appointments, letters from public authorities, access to SNS, school, social security and labour rights.' },
        { kind: 'paragraph', text: 'CLAII is the old name of the network: Centros Locais de Apoio à Integração de Imigrantes. On some municipal websites, signs and PDFs it is still used. In everyday use, CLAIM and CLAII often mean the same thing: a local migrant support office.' },
        { kind: 'paragraph', text: 'CLAIM usually operates within a Câmara Municipal, Junta de Freguesia, local associação, Santa Casa or another local organisation, but is methodologically linked to AIMA and ACM’s legacy. Therefore, quality and opening hours depend on the specific municipality.' }
      ]
    },
    {
      id: 'what-they-help-with',
      title: 'What they actually help with 🧾',
      content: [
        { kind: 'checklist', items: [
          'AIMA: explain the type of procedure, list of documents, what a letter/notification means, and how to prepare for an appointment',
          'Finanças: NIF, morada fiscal, acesso ao Portal das Finanças, basic IRS/IVA questions without tax planning',
          'Segurança Social: NISS, Segurança Social Direta, family and social benefits, if you are entitled',
          'SNS: número de utente, Centro de Saúde, referral to SNS24, basic guidance on access to healthcare',
          'School and children: matrícula, equivalência escolar, contact with the school or Câmara regarding transport/meals',
          'Work: basic information on contrato de trabalho, recibos verdes, ACT, IEFP and workers’ rights',
          'Housing and address: atestado de residência, Junta de Freguesia contacts, clarification of letters from a landlord/municipality',
          'Explaining the meaning of documents: help to understand a letter in Portuguese, but not a sworn translation',
          'Appointments and navigating portals: ePortugal, AIMA, Segurança Social Direta, Portal das Finanças, SNS24',
          'Referral to CNAIM, a lawyer, associação, linha telefónica or another service if the matter is complex'
        ] },
        { kind: 'warning', text: 'CLAIM does not issue a residence permit, NIF, NISS or número de utente by itself. The centre helps prepare and submit/explain documents, but the decision is made by the relevant authority: AIMA, Finanças, Segurança Social, SNS, IRN, Câmara Municipal or school.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limits: what CLAIM cannot do',
      content: [
        { kind: 'paragraph', text: 'The main mistake is going to CLAIM as a “back door” to AIMA. This does not work. CLAIM has no separate quota of AIMA slots, does not speed up residence permit processing and does not cancel fines, fees or legal requirements.' },
        { kind: 'checklist', items: [
          'Does not guarantee an AIMA appointment and does not sell slots',
          'Does not decide on a residence permit, residence permit renewal or citizenship',
          'Does not replace an advogado/solicitador in a dispute, court case, complaint or complex tax matter',
          'Does not provide a certified translation, apostille, reconhecimento de assinatura or notarial act',
          'Does not pay AIMA, IRN, Finanças, IMT, IMI, IUC state fees or other payments for you',
          'Is not required to speak Russian: languages depend on the specific centre and staff',
          'Is not an emergency service: if life is at risk call 112; for healthcare call SNS24 808 24 24 24'
        ] },
        { kind: 'warning', text: 'If someone presents themselves as a “CLAIM employee” and asks for money for an AIMA appointment, speeding up a residence permit or processing documents “without queuing”, this is a red flag. Official CLAIM consultation is free; government charges are paid only through official channels.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'How to find the nearest CLAIM',
      content: [
        { kind: 'substeps', items: [
          { id: 'search-official', title: '1. Search through official websites', content: [
            { kind: 'paragraph', text: 'Start with aima.gov.pt and acm.gov.pt: search for “CLAIM”, “Centro Local de Apoio à Integração de Migrantes” or “rede CLAIM”. Results usually include a list of centres, address, telephone, email, entidade promotora and opening hours.' }
          ] },
          { id: 'municipality-site', title: '2. Check the Câmara Municipal website', content: [
            { kind: 'paragraph', text: 'On municipal websites, the service may be called CLAIM, CLAII, Gabinete de Apoio ao Imigrante, Espaço Cidadão Migrante or Integração de Migrantes. Searching the Câmara website + “CLAIM” is often faster than a general Google search.' }
          ] },
          { id: 'book-before-going', title: '3. Check appointment requirements before visiting', content: [
            { kind: 'checklist', items: [
              'Call or write an email: many centres see people only by marcação',
              'Check consultation languages: português, inglês, francês, árabe, ucraniano, etc.',
              'Ask whether you can come without a residence permit, but with a passport and visa/proof of stay',
              'Ask them to confirm the document list for your topic',
              'If the centre in your freguesia is overloaded, ask whether a neighbouring municipality accepts people'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'What to bring to the consultation',
      content: [
        { kind: 'paragraph', text: 'The better the preparation, the more useful the visit. A CLAIM staff member usually cannot “guess” your situation without entry dates, visa type, letters from authorities and your actual address.' },
        { kind: 'checklist', items: [
          'Passport and a copy of the page with personal details',
          'D1-D8 visa, Schengen visa, entry stamp or another entry/stay document',
          'Residence permit, cartão de residência, manifestation/proof of AIMA procedure — if you have it',
          'NIF and access details for Portal das Finanças — if you already have them',
          'NISS and access to Segurança Social Direta — if you already have them',
          'Rental contract, comprovativo de morada, atestado de residência or a utility bill',
          'All letters/SMS/email from AIMA, Finanças, Segurança Social, SNS, IRN, Câmara or school',
          'Employment contract, recibos verdes, recibos de vencimento or declaração de início de atividade — if the matter concerns work',
          'Birth/marriage certificates, children’s school documents, translations — if the matter is family-related',
          'A list of specific questions on paper or on your phone, so you do not forget them during the appointment'
        ] },
        { kind: 'warning', text: 'Do not hand over original documents for a long time without a receipt, and do not give passwords for Portal das Finanças, Segurança Social Direta, email or CMD to third parties. During a consultation, you can enter the data yourself on your own phone.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'When CLAIM is especially useful',
      content: [
        { kind: 'paragraph', text: 'CLAIM works best as a “system translator”: they explain where to go, which document is needed, what a letter says and what the next step is. This is especially useful during the first 3–6 months in Portugal, when you need NIF, address, SNS, school, work and AIMA all at once.' },
        { kind: 'checklist', items: [
          'You have just arrived and do not understand where to start legalising everyday life',
          'You have received a letter from AIMA/Finanças/SNS and do not understand the deadline or requirement',
          'You need to prepare for an AIMA appointment and check the document set',
          'You need to enrol a child in school or understand municipal rules',
          'You need to explain to the Centro de Saúde why you are entitled to a número de utente',
          'You do not speak Portuguese and need an intermediary for first contact with a local service',
          'You need routing: CLAIM will tell you when the matter already requires an advogado, ACT, CNAIM, Segurança Social or Tribunal'
        ] },
        { kind: 'paragraph', text: 'If the matter is urgent and legally risky — AIMA refusal, an expiring appeal deadline, eviction, debt, domestic violence, detention, a complex tax audit — use CLAIM only as an entry point and immediately ask for referral to a specialist service or lawyer.' }
      ]
    }
  ],
  costs: [
    { label: 'CLAIM/CLAII consultation', amountEUR: 0, note: 'Free; the centre should not charge money for an appointment or for explaining documents' },
    { label: 'Government fees', amountEURMin: 0, amountEURMax: 307.2, note: 'CLAIM does not cancel official charges. For example, after 01.03.2026 AIMA fees may include €133 for admission and €307.20 under art. 75 depending on the procedure' }
  ],
  sources: [
    { title: 'AIMA — Agência para a Integração, Migrações e Asilo: information and services for migrants', url: 'https://aima.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACM — archived and reference information on CLAIM/CNAIM and migrant integration', url: 'https://www.acm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — government portal for services and public administration contacts', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
