export default {
  editorialVoice: 'hackportugal',
  id: 'ciberseguranca-cncs-denuncia',
  categoryId: 'emergency_rights',
  title: 'Cybersecurity: CNCS, PJ Crimes Informáticos and online complaints',
  tldr: 'If money has been stolen through MB WAY, OLX, phishing, a fake AIMA/Finanças/SNS email, or an account has been hacked, act in the first few hours: block the card/MB WAY with the bank, preserve evidence, change passwords. CNCS/CERT.PT receives incident reports and helps with technical classification, but it does not investigate crimes or recover money. A criminal report is filed with Polícia Judiciária — Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica or through official police channels. Consumer disputes with sellers — DECO PROteste / Livro de Reclamações.',
  tags: ['cncs', 'pj', 'phishing', 'mbway', 'complaint'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'triage',
      title: 'First stop the damage: the first 30 minutes',
      content: [
        { kind: 'paragraph', text: 'In Portugal, a cyber incident and a criminal offence are not the same thing. CNCS/CERT.PT is for reporting a technical incident: phishing site, malware, leak, DDoS, email compromise. Polícia Judiciária is needed if there is theft of money, extortion, access to accounts, identity fraud or fraude informática under Lei 109/2009.' },
        { kind: 'checklist', items: [
          'Call the bank and ask them to block the card, MB WAY, transferências, cartões virtuais and homebanking access immediately.',
          'If you used MB WAY: block the linked cards and check the lista de dispositivos autorizados.',
          'Change the password for email, bank, Finanças, AIMA, SNS, redes sociais; enable 2FA via an app, not SMS, if possible.',
          'Take screenshots: SMS, email headers, phone number, IBAN, link, OLX/Facebook/Instagram profile, correspondence, comprovativos.',
          'Do not delete suspicious emails: save the .eml/.msg or the full cabeçalho técnico.',
          'If you sent a document: mark the risk of identity theft and keep a copy of what was sent.',
          'If you lost a device: remotely block the SIM/eSIM and Apple ID / Google accounts.',
          'If there is a threat to life or physical blackmail — call 112, do not wait for an online reply.'
        ] },
        { kind: 'warning', text: 'Do not pay a “refund fee”, “AIMA tax”, “MB WAY unblock fee” or “Finanças fine” through a link from an SMS/email. Portuguese public authorities do not ask you to pay a fine or book an AIMA appointment through a random short link, WhatsApp or Revolut/IBAN of an individual.' }
      ]
    },
    {
      id: 'cncs',
      title: 'CNCS / CERT.PT: report a cyber incident',
      content: [
        { kind: 'paragraph', text: 'Centro Nacional de Cibersegurança (CNCS) is the national cybersecurity authority. Its CERT.PT receives incident notifications, analyses threats and may coordinate the technical response. It is not the police or a court: CNCS does not open a criminal case, does not block a bank transfer at your request and does not recover money.' },
        { kind: 'checklist', items: [
          'Use the official cncs.gov.pt website and the CERT.PT / notificação de incidentes section.',
          'State the type of incident: phishing, malware, ransomware, account takeover, DDoS, data breach, spoofing, scam website.',
          'Paste the full URLs of suspicious pages, not just screenshots.',
          'Attach email headers, the original .eml/.msg, SMS text, phone numbers, domains, IPs, file hashes, if available.',
          'State the date and time in Portugal, affected accounts, amount of loss, bank/platform.',
          'If you are a company or associação: add NIPC, contact técnico, DPO/responsible person, scale of the affected data.',
          'Keep the CNCS case number/confirmation: it will be useful for the bank, PJ and insurer.'
        ] },
        { kind: 'warning', text: 'For organisations, an incident may also be a breach de dados pessoais. In that case, CNPD notification under GDPR is assessed separately within 72 hours after becoming aware of the breach. CNCS and CNPD are different authorities.' }
      ]
    },
    {
      id: 'pj',
      title: 'Polícia Judiciária: when it is a crime',
      content: [
        { kind: 'paragraph', text: 'If money has been stolen from you, someone gained access to a bank account, tricked you into giving códigos MB WAY, used your documents, is blackmailing you with intimate photos, hacked an email account or shop — file a denúncia/queixa with Polícia Judiciária. In PJ this is handled by the Unidade Nacional de Combate ao Cibercrime e Criminalidade Tecnológica (UNC3T).' },
        { kind: 'checklist', items: [
          'File the report through official PJ channels or in person at a Polícia Judiciária office; in urgent cases you can also go to PSP/GNR, which will receive the denúncia and forward the material.',
          'Describe the facts chronologically: date, time, platform, what you clicked, which codes you entered, where the money went.',
          'Attach comprovativo da transferência, recipient IBAN, entidade/referência Multibanco, MB WAY number, scammer phone number.',
          'Attach correspondence from OLX, WhatsApp, Telegram, Instagram, Facebook Marketplace, email and SMS.',
          'State what you have already done: blocked the card, notified the bank, reported to CNCS, changed passwords.',
          'Ask the banco to open a processo de fraude/chargeback/contestação da operação — this is done in parallel with the criminal complaint.',
          'Keep a copy of the auto de notícia / comprovativo da denúncia: the bank often asks for it when considering a refund.'
        ] },
        { kind: 'paragraph', text: 'In Portuguese law, the main offences for such cases are burla informática, acesso ilegítimo, falsidade informática, interceção ilegítima and related offences under the Lei do Cibercrime, Lei 109/2009. You do not have to formulate the legal article yourself: it is more important to describe the facts and evidence accurately.' },
        { kind: 'warning', text: 'If the fraud is connected with a SEPA/Instant Transfer, time is critical. A report to PJ does not replace calling the bank: only the bank can try to urgently stop or recall the payment.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Common scams in Portugal in 2026',
      content: [
        { kind: 'checklist', items: [
          'MB WAY “buyer”: someone on OLX says they will transfer money, but asks you to enter a phone number/code/“autorizar levantamento”. The result — money is debited from you.',
          'OLX / Facebook Marketplace courier scam: “DPD/CTT already paid, confirm card to receive”. The link leads to a fake payment page.',
          'Fake AIMA email/SMS: “regularização”, “agendamento”, “multa”, “taxa urgente”. Check the domain, do not pay through links in the email.',
          'Fake Finanças/Autoridade Tributária: “reembolso IRS”, “dívida fiscal”, “penhora”. Log in only by manually going to portal das Finanças, not via SMS.',
          'Fake SNS/SNS24: “marcação”, “receita”, “multa consulta”. Do not enter dados bancários for a medical appointment.',
          'Revolut/crypto recovery scam: they promise to recover stolen money for an advance payment or “taxa legal”. This is almost always the second stage of the fraud.',
          'Rental scam: a flat in Lisboa/Porto/Algarve is too cheap, the landlord is abroad, asks for caução before viewing and for a passport.',
          'Romance scam / sextortion: they quickly move the conversation to WhatsApp/Telegram, then ask for money or blackmail you by threatening to publish photos.'
        ] },
        { kind: 'paragraph', text: 'Rule: if you are rushed, frightened with a fine, asked for código SMS, código MB WAY, Cartão Matriz, bank token, Chave Móvel Digital or a photo of your residence permit/passport via messenger — stop the conversation and check manually through the official website.' }
      ]
    },
    {
      id: 'consumer',
      title: 'DECO, Livro de Reclamações and when it is not for PJ',
      content: [
        { kind: 'paragraph', text: 'Not every online problem is cybercrime. If an official shop has not delivered goods, is disputing a warranty, refused a refund or imposed a service, first use the consumer route: livro de reclamações eletrónico, apoio ao cliente, chargeback through the bank, DECO PROteste or Centro de Arbitragem de Conflitos de Consumo.' },
        { kind: 'checklist', items: [
          'There is a genuine seller with NIF/NIPC, factura and address — start with Livro de Reclamações eletrónico.',
          'You paid by card — open a chargeback/contestação with the bank with evidence.',
          'You paid an individual by MB WAY for an item on OLX and the item disappeared — this already looks like burla, file a denúncia.',
          'You paid to a company IBAN — attach factura, contrato, emails, tracking and reclamação.',
          'If the dispute goes to arbitration, check the competent Centro de Arbitragem by location/sector.',
          'DECO PROteste is useful for complaint templates and putting pressure on the company, but it does not replace the police when there is a crime.'
        ] },
        { kind: 'warning', text: 'Do not send original documents “for identity verification” to a seller from OLX/Facebook. If you have already sent a passport/residence permit/NIF, state this in the report: risk of a later loan, SIM-swap or accounts opened in your name.' }
      ]
    },
    {
      id: 'evidence',
      title: 'How to collect evidence so the complaint does not fall apart',
      content: [
        { kind: 'paragraph', text: 'Portuguese police and the bank work faster when the evidence is structured. Make one folder: 01_bank, 02_messages, 03_emails, 04_links, 05_documents, 06_timeline. Do not edit original files; you can translate copies into English for yourself, but officially the originals in PT/EN will be useful.' },
        { kind: 'checklist', items: [
          'Timeline in one PDF: date, time, action, amount, who was involved.',
          'Bank comprovativos: transaction ID, IBAN, entidade/referência, cartão, merchant name.',
          'Screenshots with visible date, time, phone number and URL.',
          'Email in .eml/.msg format plus screenshot; email headers are more important than a pretty screenshot.',
          'Save links as text and via screenshot; scam websites disappear quickly.',
          'Do not contact the scammer after filing the complaint, unless the police ask you to preserve contact.',
          'If the language of the correspondence is Russian/English, attach a short summary in Portuguese or English.',
          'Keep the originals at least until the bank/insurer decision and the closure of the investigation.'
        ] },
        { kind: 'paragraph', text: 'Mini-template for the subject of the report: “Denúncia de burla informática / phishing — perda de €[amount] — [bank/platform] — [date]”. In the text: “Sou residente em Portugal, NIF [if any], contacto [phone/email]. Solicito registo da denúncia e investigação dos factos.”' }
      ]
    }
  ],
  costs: [
    { label: 'Reporting an incident to CNCS/CERT.PT', amountEUR: 0, note: 'Free; this is not legal representation and not money recovery.' },
    { label: 'Filing a denúncia/queixa with the police', amountEUR: 0, note: 'Usually free; costs are possible only for a lawyer, translations or notarised copies, if they are needed.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Free official consumer complaint channel.' }
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
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
