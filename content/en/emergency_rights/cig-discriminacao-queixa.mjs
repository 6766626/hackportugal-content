export default {
  editorialVoice: 'hackportugal',
  id: 'cig-discriminacao-queixa',
  categoryId: 'emergency_rights',
  title: 'CIG — complaint about discrimination based on sex, gender identity or sexual orientation',
  tldr: 'CIG — Comissão para a Cidadania e a Igualdade de Género — accepts complaints and reports about discrimination based on sex, sexual orientation, gender identity, gender expression and sex characteristics. The complaint is free: via the CIG form, email or letter. This is not the "police" and not a court: CIG registers, advises and forwards the case to ACT, CITE, PSP/GNR, Câmara Municipal, ERS, Banco de Portugal or another competent structure. For labour disputes submit to ACT/CITE in parallel; for threats — 112.',
  tags: ['cig', 'discrimination', 'lgbti', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-cig',
      title: 'When to contact CIG',
      content: [
        { kind: 'paragraph', text: 'CIG is the national commission in Portugal for equality, citizenship, gender-based violence and non-discrimination. For an expat this is an official entry point if you are discriminated against because of sex, pregnancy, maternity/paternity, sexual orientation, gender identity, gender expression or sex characteristics.' },
        { kind: 'checklist', items: [
          'An employer refuses to hire, promote or renew a contract because of sex, pregnancy, orientation or gender identity.',
          'You are refused service or humiliated in a bar, gym, hotel, clinic, school, bank or public service.',
          'A landlord, agency or condomínio refuses housing because of a same-sex couple, trans status or a "non-conforming family".',
          'You are forced to use a form of address, name or documents contrary to Lei 38/2018 on self-determination of gender identity.',
          'There is sexual harassment, sexist harassment or a hostile environment at work.',
          'An advert, job posting or rental listing contains a discriminatory condition.',
          'You need not only sanctions but also an official trail: registration of the complaint, advice and referral to the right authority.'
        ] },
        { kind: 'warning', text: 'If there is physical danger, stalking, threats, domestic violence or a hate crime — call 112 first, PSP/GNR or Linha Nacional de Emergência Social 144. A CIG complaint does not replace urgent protection and a criminal report.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Gather evidence before filing',
      content: [
        { kind: 'paragraph', text: 'Portuguese authorities respond better to a clear chronology and documents. There is no need to write a long emotional story: make a short description of the facts, dates, location, who said/did what, the consequences, and what you are asking for.' },
        { kind: 'checklist', items: [
          'Your details: name, NIF, email, phone, address in Portugal, language of communication.',
          'Details of the offender: company, NIPC/NIF if known, address, name of the employee or manager.',
          'Date, time and place of each episode.',
          'Screenshots of WhatsApp, email, SMS, adverts, reviews, internal chats.',
          'Photos, video, audio — if obtained lawfully; do not publish them on social media before getting advice.',
          'Employment contract, recibos de vencimento, escala, carta de despedimento, if this is about work.',
          'Contrato de arrendamento, correspondence with the senhorio/agency, the Imovirtual/Idealista listing, if this is about housing.',
          'Names of witnesses and their contacts.',
          'Medical documents or a psychological relatório if there was harm to health.',
          'A copy of any complaint already filed in the Livro de Reclamações, ACT, PSP/GNR, CITE or another structure.'
        ] },
        { kind: 'warning', text: 'Do not send original documents. Make PDF copies. In the text of the complaint include only the personal information that is necessary: CIG is an official body, but materials may be forwarded to the competent inspectorate or the public prosecutor’s office.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a queixa/denúncia with CIG',
      content: [
        { kind: 'paragraph', text: 'The main route is the CIG "Queixas e Denúncias" section on the website. Filing a complaint is free. You can write in Portuguese; if your Portuguese is weak, submit in English and attach a short summary in PT via DeepL/translator. Russian is better used only as an attachment, otherwise processing may slow down.' },
        { kind: 'substeps', items: [
          { id: 'online-form', title: '1. Online via the CIG website', content: [
            { kind: 'paragraph', text: 'Open cig.gov.pt → the "Queixas e Denúncias" area. Complete the form, attach files and save proof of submission: a screenshot of the page, the email auto-acknowledgement or the process number, if one is issued.' }
          ] },
          { id: 'email', title: '2. Email to CIG', content: [
            { kind: 'paragraph', text: 'If the form is unavailable, send an email to the official CIG contact listed on cig.gov.pt. Subject: "Queixa por discriminação — orientação sexual / identidade de género / sexo". In the email: who you are, who the offender is, the facts by dates, what evidence is attached, what you are asking for.' }
          ] },
          { id: 'paper', title: '3. Letter or in-person request', content: [
            { kind: 'paragraph', text: 'You can send a written denúncia to CIG by post to the address indicated on the website, or apply through other public services that will forward the case. For urgent cases this is slower than online/email.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Write "Queixa" if you are the injured party; "Denúncia" if you are reporting a fact as a witness.',
          'State whether you want your contact details to be kept confidential when the case is forwarded.',
          'Ask CIG to confirm receipt and to inform you which authority the case will be sent to.',
          'If this is about work — at the end explicitly request encaminhamento para ACT/CITE.',
          'If this is about a service/shop/bank/clinic — ask to indicate the competent authority and keep the Livro de Reclamações.',
          'If this is about housing — attach the listing, correspondence and the refusal; ask to assess discrimination in access to bens e serviços/habitação.'
        ] }
      ]
    },
    {
      id: 'parallel-authorities',
      title: 'Where to file in parallel',
      content: [
        { kind: 'paragraph', text: 'CIG is useful as a coordinator and the official equality channel, but sanctions are often imposed by another authority. Therefore, if there is specific harm it is better to file in parallel: this way you do not miss deadlines and you increase the chance of a response.' },
        { kind: 'checklist', items: [
          'Work: ACT — complaint against the employer; CITE — equality between men and women, pregnancy, parental rights, sexual harassment and discrimination at work.',
          'Dismissal, pay, harassment: ACT + a lawyer/trade union; deadlines for employment disputes may be short.',
          'Threat, assault, stalking, hate speech: PSP/GNR or Ministério Público; in danger — 112.',
          'Domestic violence or violence in relationships: 112, PSP/GNR, APAV, Linha 800 202 148; CIG has materials and referrals on violência doméstica.',
          'A public service refused or humiliated you: Livro de Reclamações, Provedor de Justiça and a complaint to the supervisory authority.',
          'Healthcare: Livro de Reclamações + ERS, if the problem is with a clinic/hospital.',
          'Bank/insurance: Livro de Reclamações + Banco de Portugal or ASF.',
          'Rent/agency: Livro de Reclamações for the agency, a complaint to CIG, if there is loss — a lawyer/court.'
        ] },
        { kind: 'warning', text: 'Do not wait for CIG’s reply if a dismissal, eviction or an appeal deadline is running. CIG does not suspend despedimento, despejo, a bank refusal or a disciplinary process.' }
      ]
    },
    {
      id: 'what-happens-next',
      title: 'What happens after you file',
      content: [
        { kind: 'paragraph', text: 'After receiving your submission CIG usually analyses the facts, may request clarifications and forwards the material to the competent organisation. In simple cases you will receive an informational reply: where to apply, which rules apply, which documents to add.' },
        { kind: 'checklist', items: [
          'Keep the process number, the date of submission and a copy of all attachments.',
          'If there is no reply within 15–30 days, send a follow-up with the subject "Pedido de informação sobre queixa enviada em DD/MM/2026".',
          'Keep a table: date, authority, channel, process number, responsible email, next step.',
          'If the case was forwarded to ACT/CITE/police, respond to that authority, but keep CIG in copy for important updates.',
          'If you need monetary or moral damages, CIG will not recover them itself — you need a lawyer and court/amicable settlement.',
          'If discrimination continues, submit additional evidence in a separate message with the same process number.'
        ] },
        { kind: 'paragraph', text: 'Legal basis for 2026: Código do Trabalho art. 24–25 prohibits discrimination at work, including sexo, orientação sexual and identidade de género; Lei 38/2018 protects the right to self-determination of gender identity and expressão de género; Lei 14/2008 regulates the prohibition of discrimination on the grounds of sex in access to goods and services.' }
      ]
    }
  ],
  costs: [
    { label: 'Submitting a complaint to CIG', amountEUR: 0, note: 'Free via the official website/email/letter.' },
    { label: 'Livro de Reclamações online', amountEUR: 0, note: 'Free; useful for services, shops, clinics, banks, agencies.' },
    { label: 'Lawyer for a court claim', amountEURMin: 80, amountEURMax: 200, note: 'Typical initial private consultation; depends on the city and complexity.' }
  ],
  sources: [
    { title: 'CIG — official website of the Comissão para a Cidadania e a Igualdade de Género', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG — Complaint for discrimination on the grounds of sex, sexual orientation, gender identity and expression, and sex characteristics', url: 'https://www.cig.gov.pt/area-servicos/servicos/queixa-por-discriminacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 38/2018 — right to self-determination of gender identity and gender expression', url: 'https://diariodarepublica.pt/dr/detalhe/lei/38-2018-115933863', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — Lei 7/2009, equality and non-discrimination at work', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
