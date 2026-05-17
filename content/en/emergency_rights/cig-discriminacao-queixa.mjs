export default {
  editorialVoice: 'hackportugal',
  id: 'cig-discriminacao-queixa',
  categoryId: 'emergency_rights',
  title: 'CIG — complaint about discrimination based on sex, identity or orientation',
  tldr: 'CIG — Comissão para a Cidadania e a Igualdade de Género — accepts queixas e denúncias about discrimination based on sex, orientação sexual, identidade de género, expressão de género and características sexuais. A complaint is free: via the CIG form, email or letter. It is not the “police” and not a court: CIG registers, advises and refers the case to ACT, CITE, PSP/GNR, Câmara Municipal, ERS, Banco de Portugal or another competent body. For workplace disputes, file in parallel with ACT/CITE; for threats, call 112.',
  tags: ['cig', 'discrimination', 'lgbti', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-cig',
      title: 'When to contact CIG',
      content: [
        { kind: 'paragraph', text: 'CIG is Portugal’s state commission for equality, citizenship, gender-based violence and non-discrimination. For an expat, it is the official entry point if you are discriminated against because of sex, pregnancy, maternity/paternity, sexual orientation, gender identity, gender expression or sex characteristics.' },
        { kind: 'checklist', items: [
          'An employer refuses recruitment, promotion or contract renewal because of sex, pregnancy, orientation or gender identity.',
          'You are refused service or humiliated in a bar, gym, hotel, clinic, school, bank or public service.',
          'A landlord, agency or condomínio refuses housing because of a same-sex couple, trans status or an “unsuitable family”.',
          'You are forced to use a form of address, name or documents contrary to Lei 38/2018 on self-determination of gender identity.',
          'There is sexual harassment, sexist harassment or a hostile environment at work.',
          'An advertisement, job advert or rental advert contains a discriminatory condition.',
          'You need not only a sanction, but also an official trail: registration of the complaint, advice and referral to the correct authority.'
        ] },
        { kind: 'warning', text: 'If there is physical danger, stalking, threats, domestic violence or a hate crime — call 112, PSP/GNR or Linha Nacional de Emergência Social 144 first. A CIG complaint does not replace urgent protection or a criminal complaint.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Gather evidence before filing',
      content: [
        { kind: 'paragraph', text: 'Portuguese authorities respond better to a timeline and documents. You do not need to write a long emotional story: make a short description of the facts, dates, place, who said/did what, what the consequences were and what you are asking for.' },
        { kind: 'checklist', items: [
          'Your details: name, NIF, email, phone number, address in Portugal, language of communication.',
          'Details of the offender: company, NIPC/NIF if known, address, name of the employee or manager.',
          'Date, time and place of each incident.',
          'Screenshots of WhatsApp, email, SMS, adverts, reviews, internal chats.',
          'Photos, videos, audio — if obtained lawfully; do not publish them on social media before getting advice.',
          'Employment contract, recibos de vencimento, rota, dismissal letter, if this is work-related.',
          'Contrato de arrendamento, correspondence with the senhorio/agency, Imovirtual/Idealista advert, if this is housing-related.',
          'Names of witnesses and their contact details.',
          'Medical documents or relatório psicológico, if there was harm to health.',
          'A copy of an already filed complaint with Livro de Reclamações, ACT, PSP/GNR, CITE or another body.'
        ] },
        { kind: 'warning', text: 'Do not send original documents. Make PDF copies. In the text of the complaint, include only the necessary personal information: CIG is an official body, but the materials may be passed to the competent inspectorate or public prosecutor.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a queixa/denúncia with CIG',
      content: [
        { kind: 'paragraph', text: 'The main route is the CIG “Queixas e Denúncias” section on the website. Filing a complaint is free. You can write in Portuguese; if your Portuguese is weak, file in English and attach a short summary in PT via DeepL/a translator. It is better to use Russian only as an attachment, otherwise processing may be slower.' },
        { kind: 'substeps', items: [
          { id: 'online-form', title: '1. Online via the CIG website', content: [
            { kind: 'paragraph', text: 'Open cig.gov.pt → the “Queixas e Denúncias” area. Fill in the form, attach files and save proof of submission: a screenshot of the page, an automatic email confirmation or a case number, if issued.' }
          ] },
          { id: 'email', title: '2. Email to CIG', content: [
            { kind: 'paragraph', text: 'If the form is unavailable, send an email to the official CIG contact listed on cig.gov.pt. Subject: “Queixa por discriminação — orientação sexual / identidade de género / sexo”. In the email: who you are, who the offender is, the facts by date, which evidence is attached, and what you are asking for.' }
          ] },
          { id: 'paper', title: '3. Letter or in-person contact', content: [
            { kind: 'paragraph', text: 'You can send a written denúncia to CIG at the postal address listed on the website, or contact other public services that will refer the case. For urgent cases this is slower than online/email.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Write “Queixa” if you are the affected person; “Denúncia” if you are reporting the facts as a witness.',
          'State whether you want your contact details to remain confidential when the case is forwarded.',
          'Ask CIG to confirm receipt and tell you which authority the case will be sent to.',
          'If this is work-related — at the end, explicitly ask for encaminhamento para ACT/CITE.',
          'If this is a service/shop/bank/clinic — ask them to identify the competent authority and keep the Livro de Reclamações.',
          'If this is housing — attach the advert, correspondence and refusal; ask them to assess discrimination in access to bens e serviços/habitação.'
        ] }
      ]
    },
    {
      id: 'parallel-authorities',
      title: 'Where to file in parallel',
      content: [
        { kind: 'paragraph', text: 'CIG is useful as a coordinator and official equality channel, but sanctions are often issued by another authority. So where there is specific harm, it is better to file in parallel: this way you do not miss deadlines and you increase the chance of a response.' },
        { kind: 'checklist', items: [
          'Work: ACT — complaint about the employer; CITE — equality between men and women, pregnancy, parental rights, sexual harassment and discrimination at work.',
          'Dismissal, pay, harassment: ACT + lawyer/union; deadlines in employment disputes can be short.',
          'Threat, assault, stalking, hate speech: PSP/GNR or Ministério Público; in danger — 112.',
          'Domestic violence or violence in relationships: 112, PSP/GNR, APAV, Linha 800 202 148; CIG has materials and referrals on violência doméstica.',
          'A public service refused service or humiliated you: Livro de Reclamações, Provedor de Justiça and a complaint to the supervisory authority.',
          'Healthcare: Livro de Reclamações + ERS, if the problem is in a clinic/hospital.',
          'Bank/insurance: Livro de Reclamações + Banco de Portugal or ASF.',
          'Rental/agency: Livro de Reclamações for the agency, complaint to CIG, and in case of harm — advogado/tribunal.'
        ] },
        { kind: 'warning', text: 'Do not wait for CIG’s reply if a dismissal, eviction or appeal deadline is running. CIG does not suspend a despedimento, despejo, bank refusal or disciplinary process.' }
      ]
    },
    {
      id: 'what-happens-next',
      title: 'What happens after filing',
      content: [
        { kind: 'paragraph', text: 'After receipt, CIG usually analyses the facts, may ask for clarification and refer the material to the competent organisation. In simple cases, you will receive an information response: where to go, which rules apply, which documents to add.' },
        { kind: 'checklist', items: [
          'Keep the case number, submission date and a copy of all attachments.',
          'If there is no reply after 15–30 days, send a follow-up with the subject “Pedido de informação sobre queixa enviada em DD/MM/2026”.',
          'Keep a table: date, authority, channel, case number, responsible email, next step.',
          'If the case has been passed to ACT/CITE/police, reply to that authority from then on, but keep CIG copied on important updates.',
          'If you need compensation for money or non-material damage, CIG will not recover it itself — you need an advogado and court/settlement.',
          'If the discrimination continues, submit additional evidence in a separate email with the same case number.'
        ] },
        { kind: 'paragraph', text: 'Legal basis as of 2026: Código do Trabalho art. 24–25 prohibits discrimination in employment, including sexo, orientação sexual and identidade de género; Lei 38/2018 protects the right to self-determination of gender identity and expressão de género; Lei 14/2008 regulates the prohibition of discrimination based on sex in access to goods and services.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing a complaint with CIG', amountEUR: 0, note: 'Free via the official website/email/letter.' },
    { label: 'Livro de Reclamações online', amountEUR: 0, note: 'Free; useful for services, shops, clinics, banks, agencies.' },
    { label: 'Advogado for a court claim', amountEURMin: 80, amountEURMax: 200, note: 'Typical initial private consultation; depends on the city and complexity.' }
  ],
  sources: [
    { title: 'CIG — official website of Comissão para a Cidadania e a Igualdade de Género', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG — Queixa por discriminação em razão do sexo, orientação sexual, identidade e expressão de género e características sexuais', url: 'https://www.cig.gov.pt/area-servicos/servicos/queixa-por-discriminacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 38/2018 — right to self-determination of gender identity and gender expression', url: 'https://diariodarepublica.pt/dr/detalhe/lei/38-2018-115933863', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — Lei 7/2009, equality and non-discrimination at work', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
