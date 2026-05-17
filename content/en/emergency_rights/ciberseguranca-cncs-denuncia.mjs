export default {
  editorialVoice: 'hackportugal',
  id: 'ciberseguranca-cncs-denuncia',
  categoryId: 'emergency_rights',
  title: 'Cybersecurity: CNCS, PJ Crimes Informáticos and online reports',
  tldr: 'If money has been stolen via MB WAY, OLX, phishing, a fake AIMA/Finanças/SNS email or an account has been hacked, act in the first hours: block your card/MB WAY with the bank, preserve evidence, change passwords. CNCS/CERT.PT accepts incident reports and helps with technical classification, but it does not investigate crimes or recover money. A criminal report is filed with the Polícia Judiciária — Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica or through official police channels. Consumer disputes with sellers — DECO PROteste / Livro de Reclamações.',
  tags: ['cncs', 'pj', 'phishing', 'mbway', 'report'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'triage',
      title: 'First stop the damage: the first 30 minutes',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a cyber incident and a criminal offence are not the same thing. CNCS/CERT.PT is for reporting a technical incident: phishing site, malware, leak, DDoS, email compromise. The Polícia Judiciária is needed if there is theft of money, extortion, access to accounts, identity fraud or fraude informática under Lei 109/2009.' },
        { kind: 'checklist', items: [
          'Call the bank and ask them to block your card, MB WAY, transferências, cartões virtuais and homebanking access immediately.',
          'If you used MB WAY: block the linked cards and check the lista de dispositivos autorizados.',
          'Change the password for email, bank, Finanças, AIMA, SNS, redes sociais; enable 2FA via an app, not SMS, if possible.',
          'Take screenshots: SMS, email headers, phone number, IBAN, link, OLX/Facebook/Instagram profile, correspondence, comprovativos.',
          'Do not delete suspicious emails: save the .eml/.msg or the full cabeçalho técnico.',
          'If you sent a document: note the identity theft risk and keep a copy of what was sent.',
          'If you lost a device: remotely block the SIM/eSIM and Apple ID / Google accounts.',
          'If there is a threat to life or physical blackmail — call 112, do not wait for an online response.'
        ] },
        { kind: 'warning', text: 'Do not pay a “fee to recover money”, “taxa AIMA”, “desbloqueio MB WAY” or “multa Finanças” via a link from an SMS/email. Portuguese public authorities do not ask you to pay a fine or book an AIMA appointment through a random short link, WhatsApp or Revolut/IBAN of a private individual.' }
      ]
    },
    {
      id: 'cncs',
      title: 'CNCS / CERT.PT: report a cyber incident',
      content: [
        { kind: 'paragraph', text: 'Centro Nacional de Cibersegurança (CNCS) is the national cybersecurity authority. Its CERT.PT accepts incident notifications, analyses threats and can coordinate a technical response. It is not the police and not a court: CNCS does not open a criminal case, block a bank transfer at your request or recover money.' },
        { kind: 'checklist', items: [
          'Use the official website cncs.gov.pt and the CERT.PT / notificação de incidentes section.',
          'Specify the incident type: phishing, malware, ransomware, account takeover, DDoS, data breach, spoofing, scam website.',
          'Insert the full URLs of suspicious pages, not just screenshots.',
          'Attach email headers, the original .eml/.msg, SMS text, phone numbers, domains, IPs, file hashes, if available.',
          'Specify the date and time in Portugal, affected accounts, amount of loss, bank/platform.',
          'If you are a company or associação: add NIPC, contacto técnico, DPO/person responsible, scope of affected data.',
          'Save the CNCS case number/confirmation: it will be useful for the bank, PJ and insurer.'
        ] },
        { kind: 'warning', text: 'For organisations, an incident may also be a breach de dados pessoais. In that case, CNPD notification under the GDPR within 72 hours after becoming aware of the breach is assessed separately. CNCS and CNPD are different authorities.' }
      ]
    },
    {
      id: 'pj',
      title: 'Polícia Judiciária: when it is a crime',
      content: [
        { kind: 'paragraph', text: 'If money has been stolen from you, someone has accessed a bank account, obtained códigos MB WAY by deception, used your documents, is blackmailing you with intimate photos, or has hacked an email or shop — file a denúncia/queixa with the Polícia Judiciária. Within the PJ, this is handled by the Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica (UNC3T).' },
        { kind: 'checklist', items: [
          'File the report through official PJ channels or in person at a Polícia Judiciária station; if urgent, you can also go to the PSP/GNR, who will accept the denúncia and forward the materials.',
          'Describe the facts chronologically: date, time, platform, what you clicked, which codes you entered, where the money went.',
          'Attach the comprovativo da transferência, recipient IBAN, entidade/referência Multibanco, MB WAY number, scammer’s phone number.',
          'Attach correspondence from OLX, WhatsApp, Telegram, Instagram, Facebook Marketplace, email and SMS.',
          'State what you have already done: blocked the card, notified the bank, reported to CNCS, changed passwords.',
          'Ask the banco to open a processo de fraude/chargeback/contestação da operação — this is done in parallel with the criminal complaint.',
          'Keep a copy of the auto de notícia / comprovativo da denúncia: the bank often asks for it when considering a refund.'
        ] },
        { kind: 'paragraph', text: 'In Portuguese law, the main offences for such cases are burla informática, acesso ilegítimo, falsidade informática, interceção ilegítima and related offences under the Lei do Cibercrime, Lei 109/2009. You do not need to formulate the legal article yourself: it is more important to describe the facts and evidence accurately.' },
        { kind: 'warning', text: 'If the fraud involves a SEPA/Instant Transfer, time is critical. A report to the PJ does not replace a call to the bank: only the bank can try to stop or recall the payment urgently.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Common schemes in Portugal in 2026',
      content: [
        { kind: 'checklist', items: [
          'MB WAY “buyer”: a person on OLX says they will transfer money, but asks you to enter a phone number/code/“autorizar levantamento”. Result — money is debited from you.',
          'OLX / Facebook Marketplace courier scam: “DPD/CTT already paid, confirm card to receive”. The link leads to a fake payment page.',
          'Fake AIMA email/SMS: “regularização”, “agendamento”, “multa”, “taxa urgente”. Check the domain, do not pay through links in an email.',
          'Fake Finanças/Autoridade Tributária: “reembolso IRS”, “dívida fiscal”, “penhora”. Log in only through the portal das Finanças manually, not via SMS.',
          'Fake SNS/SNS24: “marcação”, “receita”, “multa consulta”. Do not enter dados bancários for a medical appointment.',
          'Revolut/crypto recovery scam: they promise to recover what was stolen for an advance payment or “taxa legal”. This is almost always the second stage of the scam.',
          'Rental scam: a flat in Lisboa/Porto/Algarve is too cheap, the landlord is abroad, and asks for a caução before viewing and a passport.',
          'Romance scam / sextortion: they quickly move communication to WhatsApp/Telegram, then ask for money or blackmail you by threatening to publish photos.'
        ] },
        { kind: 'paragraph', text: 'Rule: if you are being rushed, frightened with a fine, asked for a código SMS, código MB WAY, Cartão Matriz, bank token, Chave Móvel Digital or a photo of a residence permit/passport via messenger — stop the conversation and check manually through the official website.' }
      ]
    },
    {
      id: 'consumer',
      title: 'DECO, Livro de Reclamações and when it is not PJ',
      content: [
        { kind: 'paragraph', text: 'Not every online problem is cybercrime. If an official shop has not delivered goods, disputes a guarantee, refused a refund or imposed a service, first use the consumer route: livro de reclamações eletrónico, apoio ao cliente, chargeback through the bank, DECO PROteste or Centro de Arbitragem de Conflitos de Consumo.' },
        { kind: 'checklist', items: [
          'There is a real seller with NIF/NIPC, factura and address — start with the Livro de Reclamações eletrónico.',
          'Paid by card — open a chargeback/contestação with the bank with evidence.',
          'Paid by MB WAY to a private individual for goods from OLX and the goods disappeared — this already looks like burla, file a denúncia.',
          'Paid to a company IBAN — attach factura, contrato, emails, tracking and reclamação.',
          'If the dispute reaches arbitration, check the competent Centro de Arbitragem by place/sector.',
          'DECO PROteste is useful for complaint templates and putting pressure on a company, but it does not replace the police where a crime has occurred.'
        ] },
        { kind: 'warning', text: 'Do not send original documents “for identity verification” to a seller from OLX/Facebook. If you have already sent a passport/residence permit/NIF, state this in the report: risk of a later loan, SIM-swap or accounts being opened in your name.' }
      ]
    },
    {
      id: 'evidence',
      title: 'How to collect evidence so the complaint does not fall apart',
      content: [
        { kind: 'paragraph', text: 'The Portuguese police and bank work faster when evidence is structured. Create one folder: 01_bank, 02_messages, 03_emails, 04_links, 05_documents, 06_timeline. Do not edit original files; copies can be translated into Russian for yourself, but officially the originals in PT/EN will be useful.' },
        { kind: 'checklist', items: [
          'Timeline in one PDF: date, time, action, amount, who was involved.',
          'Bank comprovativos: transaction ID, IBAN, entidade/referência, cartão, merchant name.',
          'Screenshots with the date, time, phone number and URL visible.',
          'Email in .eml/.msg format plus screenshot; email headers are more important than a pretty screenshot.',
          'Save links as text and as a screenshot; scam sites disappear quickly.',
          'Do not contact the scammer after filing the complaint, unless the police ask you to keep the contact.',
          'If the correspondence language is Russian/English, attach a short summary in Portuguese or English.',
          'Keep originals at least until the bank/insurer’s decision and the closure of the investigation.'
        ] },
        { kind: 'paragraph', text: 'Mini-template for the subject of the report: “Denúncia de burla informática / phishing — perda de €[amount] — [bank/platform] — [date]”. In the text: “Sou residente em Portugal, NIF [if available], contacto [phone/email]. Solicito registo da denúncia e investigação dos factos.”' }
      ]
    }
  ],
  costs: [
    { label: 'Incident report to CNCS/CERT.PT', amountEUR: 0, note: 'Free; this is not legal representation and does not recover money.' },
    { label: 'Filing a denúncia/queixa with the police', amountEUR: 0, note: 'Usually free; costs are possible only for a lawyer, translations or notarised copies if they are needed.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Free official channel for a consumer complaint.' }
  ],
  sources: [
    {
      title: 'CNCS — Centro Nacional de Cibersegurança / CERT.PT',
      url: 'https://www.cncs.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Polícia Judiciária — cybercrime and PJ contacts',
      url: 'https://policiajudiciaria.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei do Cibercrime — Lei 109/2009',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/109-2009-489693',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico — official consumer complaints portal',
      url: 'https://www.livroreclamacoes.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
