export default {
  editorialVoice: 'hackportugal',
  id: 'mb-way-fraude-burlas',
  categoryId: 'emergency_rights',
  title: 'MB WAY: fraud and how to protect yourself on OLX, SMS and messengers',
  tldr: 'MB WAY is safe as long as you do not give away codes or approve transactions. The main scams in 2026: a “buyer” on OLX asks for your MB WAY/Multibanco to “receive money”, phishing SMS messages pretending to be from CMD/Autenticação.gov/a bank, and calls “from support”. In 2023, according to Banco de Portugal, losses from payment fraud in Portugal reached €12.3 million. If you have already clicked/approved something — immediately block the card with your bank, call MB WAY/SIBS, file a complaint with PSP/GNR/PJ and open a dispute with the bank.',
  tags: ['mbway', 'fraud', 'olx', 'phishing'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-scams-work',
      title: 'How MB WAY scams work',
      content: [
        { kind: 'paragraph', text: 'MB WAY is linked to your phone number and bank card. The phone number alone does not give access to your money. Fraud starts when you are made to: activate MB WAY on someone else’s phone through Multibanco, tell someone a code from an SMS, click a phishing link, or approve a transaction in the app.' },
        { kind: 'checklist', items: [
          'OLX / Facebook Marketplace: the “buyer” says they will pay through MB WAY and guides you to Multibanco to “receive the money”. In reality, you are adding their phone number to your card.',
          'Fake “refund”: they send a request that looks like receiving money, but it is “Enviar dinheiro” — a transfer from your card.',
          'SMS pretending to be from CMD, Autenticação.gov, a bank, CTT, Finanças: the link leads to a copy of a website where they steal your NIF, password, bank details or confirmation code.',
          'Call “from the bank/MB WAY”: they scare you with talk of a hack and urgently ask you to tell them an SMS code or approve a “transaction cancellation”. That is the scammer’s transaction.',
          'WhatsApp/Telegram: they send a QR code or link “to pay for delivery”, “seguro OLX”, “pagamento seguro”. OLX does not require you to enter bank logins through external links.',
          'Sender number spoofing: an SMS may appear in the same thread where genuine bank or gov.pt messages previously appeared. You should trust not the sender name, but the action they are asking you to take.'
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags: when to end the conversation immediately',
      content: [
        { kind: 'checklist', items: [
          'You are asked to go to Multibanco to “receive a transfer”. You do not need an ATM to receive money through MB WAY.',
          'You are asked to select “MB WAY” at the ATM and enter another person’s phone number.',
          'You are asked to reveal an SMS code, código de ativação, código de segurança, PIN MB WAY or a one-time bank code.',
          'You are asked to approve a push notification “to cancel a payment”. Approval in the app almost always means consent to a transaction.',
          'The buyer pressures you: “the courier is already on the way”, “payment only now”, “OLX bloqueia a conta”.',
          'The link is not on an official domain: not gov.pt, not autenticação.gov.pt, not your bank’s website, not mbway.pt.',
          'The message contains language mistakes, strange punctuation, shortened links, domains such as .click, .top, .info.',
          'You are asked to install AnyDesk, TeamViewer, RustDesk or a “bank security app”. A bank does not ask for remote access to your phone.',
          'The buyer is ready to buy without viewing, above the asking price and with “delivery via OLX/CTT”. This is a typical bait.'
        ] },
        { kind: 'warning', text: 'Main rule: MB WAY codes, bank SMS codes, PINs and in-app approvals are like cash. If you revealed a code or approved a transaction, the bank may treat this as “strong customer authentication” and a refund dispute will be harder.' }
      ]
    },
    {
      id: 'safe-use',
      title: 'How to use MB WAY safely',
      content: [
        { kind: 'paragraph', text: 'For a normal transfer through MB WAY, the recipient’s phone number in the app is enough. When selling on OLX, it is safer to give the buyer your MB WAY number and wait for the incoming transfer in your bank/MB WAY app. Do not go to Multibanco following the buyer’s instructions.' },
        { kind: 'checklist', items: [
          'Check the transaction in the app: “Receber” means incoming, “Enviar” means you are sending money.',
          'Set MB WAY limits in your bank app: daily limit, per-transaction limit, online payment limit.',
          'Remove cards you rarely use from MB WAY, or keep a separate card with a low limit.',
          'Enable bank and MB WAY notifications for every transaction.',
          'Never enter bank details after following a link from an SMS. Open the website manually or through the official app.',
          'Check domains: government services — gov.pt or autenticação.gov.pt; MB WAY — mbway.pt; bank — the bank’s official domain.',
          'Update the MB WAY app and your banking app only through the App Store / Google Play.',
          'Do not store your PIN MB WAY in notes, WhatsApp or photos.',
          'If you are selling an expensive item, use a SEPA bank transfer, cash at an in-person meeting, or secure delivery with payment through the official platform, not a link from the buyer.'
        ] }
      ]
    },
    {
      id: 'if-clicked-or-paid',
      title: 'If you have already clicked a link, revealed a code or money has left your account',
      content: [
        { kind: 'substeps', items: [
          { id: 'first-10-minutes', title: 'The first 10 minutes', content: [
            { kind: 'checklist', items: [
              'Immediately call the bank using the number on the card/official website, not the number from the SMS.',
              'Ask them to block the card, MB WAY, online banking and all suspicious transactions.',
              'In the bank app, remove the card from MB WAY and reduce limits to €0, if you still have access.',
              'Call MB WAY/SIBS support if the transaction went through MB WAY, and report the phone number, time and amount.',
              'Change your bank, email and gov.pt/CMD passwords if you entered them on a phishing website.',
              'If you gave remote access — disconnect the internet, delete the remote access app, check the device and change passwords from another device.'
            ] }
          ] },
          { id: 'same-day-evidence', title: 'Gather evidence the same day', content: [
            { kind: 'checklist', items: [
              'Screenshots of the OLX/Facebook advert and the other person’s profile.',
              'The full conversation, phone numbers, WhatsApp, Telegram, email.',
              'SMS with the phishing link and the sender header.',
              'Screenshots of MB WAY/bank transactions: date, time, amount, recipient/IBAN, referência, transaction ID.',
              'The phishing website URL, if it remains in your browser history.',
              'The bank case number and the operator’s name, if provided.',
              'Card/account statement showing the fraudulent transaction.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Do not keep messaging the scammer “so they return the money” and do not pay a “refund fee”. Often after the first theft there is a second round: “lawyer”, “PSP”, “Interpol”, “bank” — all demanding a new payment.' }
      ]
    },
    {
      id: 'report-and-recover',
      title: 'Where to report it and how to seek a refund',
      content: [
        { kind: 'paragraph', text: 'The order is: first the bank — blocking and transaction dispute; then the police — crime report; then, if the bank refuses without a proper explanation, a complaint to Banco de Portugal through Livro de Reclamações or Portal do Cliente Bancário. The faster you notify the bank, the better the chance of limiting losses.' },
        { kind: 'checklist', items: [
          'Bank: submit a written reclamação/impugnação de operação não autorizada. Ask for the case number.',
          'PSP or GNR: file a denúncia. In cities it is usually PSP, outside cities often GNR. You can also contact Polícia Judiciária for cybercrime.',
          'Banco de Portugal: complaint about the bank if it does not reply, delays or refuses without analysis. BdP does not “return money” directly, but supervises the bank’s conduct.',
          'Livro de Reclamações Eletrónico: the official complaint channel for a bank/payment provider.',
          'OLX/Facebook/WhatsApp: report the profile and advert, attach the crime report so the profile can be blocked.',
          'CMD/Autenticação.gov phishing: do not enter data; the message can be forwarded/reported through the official gov.pt channels listed on the warning page.'
        ] },
        { kind: 'paragraph', text: 'Under Portugal’s payment services regime (PSD2, Decreto-Lei 91/2018), after notifying the bank you are not liable for new unauthorised transactions. Before notification, the payer may be liable for up to €50, but if the bank proves fraud or gross negligence by the customer — for example, voluntarily revealing the code and approving the transaction — the refund may be contested. So state the facts in your application: when you noticed it, when you notified the bank, which actions you did not perform and which approvals were obtained by deception.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing a denúncia with PSP/GNR', amountEUR: 0, note: 'Reporting a crime is free; ask for a comprovativo/case number.' },
    { label: 'Card blocking by the bank', amountEURMin: 0, amountEURMax: 15, note: 'Many banks block cards free of charge; card reissue may cost according to the account tariff.' },
    { label: 'Complaint to Banco de Portugal / Livro de Reclamações', amountEUR: 0, note: 'Official complaints are free.' }
  ],
  sources: [
    {
      title: 'gov.pt: warning about fraudulent SMS messages pretending to be from Chave Móvel Digital and Autenticação.gov',
      url: 'https://www2.gov.pt/en/burlas-e-sms-fraudulentas-em-nome-de-chave-movel-digital-ou-autenticacao-gov',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: payment security and what to do in case of fraud',
      url: 'https://clientebancario.bportugal.pt/pt-pt/seguranca-nos-pagamentos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 91/2018: regime jurídico dos serviços de pagamento e da moeda eletrónica',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/91-2018-116095188',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'MB WAY / SIBS: security recommendations',
      url: 'https://www.mbway.pt/seguranca/',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
