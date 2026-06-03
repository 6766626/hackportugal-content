export default {
  editorialVoice: 'hackportugal',
  id: 'common-scams',
  categoryId: 'emergency_rights',
  title: 'Common scams in Portugal and how to avoid them',
  tldr: 'Scams targeting newcomers in Portugal: fake rental adverts, bogus “representatives” for NIF, phishing in the name of AIMA/Finanças, SMS attacks with QR codes, theft at cash machines. In the EU, consumer protection is strong — complain to PSP, DECO, Banco de Portugal, CICDR. Never pay upfront for something you have not seen in person.',
  tags: ['scams', 'safety', 'fraud'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'housing-scams',
      title: 'Rental and housing scams',
      content: [
        { kind: 'paragraph', text: 'One of the most common types. They target foreigners who are looking for housing from abroad.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'The classic “owner abroad” scheme', content: [
            { kind: 'paragraph', text: 'Advert: a good flat at a below-market price. The “owner” says they live in the UK/DE/US and asks for an upfront payment for a “booking” via Western Union/cryptocurrency/bank transfer before a viewing. After the transfer — silence.' },
            { kind: 'warning', text: 'RULE: never pay for a flat you have not seen in person. Always check that the owner owns the property (extract from the Conservatória do Registo Predial).' }
          ]},
          { id: 's2', title: 'Fake agents', content: [
            { kind: 'paragraph', text: 'An “agent” shows a flat they have no right to rent out: they obtain the keys, take the deposit and disappear. The real owner turns up a week later.' },
            { kind: 'warning', text: 'RULE: check the agent’s licence with AMI (Associação dos Mediadores Imobiliários, ami.pt). Professional agents have an AMI number, which they state in the advert.' }
          ]},
          { id: 's3', title: 'Changing the terms on signing day', content: [
            { kind: 'paragraph', text: 'The contract is agreed, but on the day of signing “the terms change” — a higher deposit, a shorter term, additional fees.' },
            { kind: 'warning', text: 'RULE: read EVERY clause of the contract. Refuse to sign on the spot — take 24 hours to review it. By law, you have the right to do this.' }
          ]}
        ]}
      ]
    },
    {
      id: 'nif-niss-scams',
      title: 'NIF and NISS scams',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'The “representative” overcharges', content: [
            { kind: 'paragraph', text: 'Officially, a NIF at Finanças is free; a fiscal representative for third-country citizens costs €60-150. Some “services” ask for €300-500. This is an overpayment.' }
          ]},
          { id: 'n2', title: 'Fake NIF certificates', content: [
            { kind: 'paragraph', text: '“Get a NIF in an hour” from suspicious websites. The NIF issued may be fake or not registered with AT. Without an entry in AT, the number is useless.' },
            { kind: 'warning', text: 'CHECK: log in to Portal das Finanças (the tax portal) with the issued NIF and temporary password — if the login works, the NIF is real.' }
          ]},
          { id: 'n3', title: 'Continuing the arrangement without consent', content: [
            { kind: 'paragraph', text: 'After you receive your residence permit, the “representative” continues to receive tax correspondence — and hides it or extorts money. After receiving a residence permit, the representative must be formally cancelled on Portal das Finanças.' }
          ]}
        ]}
      ]
    },
    {
      id: 'phishing',
      title: 'Phishing in the name of AIMA/Finanças/banks',
      content: [
        { kind: 'checklist', items: [
          '⚠️ SMS “AIMA: your residence permit has been suspended, click to renew” — phishing. AIMA never sends links by SMS',
          '⚠️ Email “Finanças: you owe €XXX, pay via the link” — phishing. AT sends official letters by CTT post',
          '⚠️ SMS “your bank: suspicious transaction, confirm” — phishing. Never follow links from SMS messages',
          '⚠️ “MB WAY: confirm payment with code XXXX” — if you did not initiate the payment, DO NOT confirm. The scammer knows your number and is trying to debit money',
          '✅ ALWAYS access the portal officially (via a bookmark or Google), not via a link',
          '✅ For your bank — call the number on the back of your card'
        ]}
      ]
    },
    {
      id: 'atm-scams',
      title: 'Cash machine scams',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Skimmers (card-reading devices) — check the keypad and card slot before use',
          '⚠️ “Helpers” near Multibanco — never accept help, refuse politely',
          '⚠️ “Your card is stuck” — the scammer asks you to enter your PIN again, then takes the card. Never enter your PIN in this scenario',
          '✅ Use cash machines inside bank branches (it is safer)',
          '✅ Cover the keypad with your hand when entering your PIN',
          '✅ If it is blocked — call your bank immediately',
          '✅ Withdrawal limits of €200-400/day → scam losses are limited'
        ]}
      ]
    },
    {
      id: 'tourist-scams',
      title: 'Tourist scams (including expats)',
      content: [
        { kind: 'checklist', items: [
          '🎫 “Prize draw” / “Promotion” in the street — they ask you to sign a petition/survey → distract you in order to steal from you',
          '💰 “Drug sales” in Bairro Alto / Cais do Sodré — the goods are often fake, and the situation may be provoked by the police',
          '🚕 Taxi trap at the airport — fixed fares to central Lisbon are ~€15-20; if it is more, it is a scam. Better to use Uber/Bolt/FreeNow',
          '👛 Pickpockets on tram 28 (Lisbon), Baixa-Chiado metro, Rossio — keep your bag in front of you',
          '🏧 “Currency exchange” at unofficial points — they always cheat on the rate. Use banks or official exchange offices',
          '🎭 Fake touts for fado bars/restaurants in the streets — they pull you into an “authentic” place where the bill is 3-5 times higher',
          '📱 Wi-Fi “free_airport” — may be fake. Use a VPN or mobile internet'
        ]}
      ]
    },
    {
      id: 'money-laundering',
      title: 'Money transfer scams',
      content: [
        { kind: 'checklist', items: [
          '❌ “I will exchange Sberbank → Revolut, 5% fee” on Telegram/Facebook — in 80% of cases it is a scam',
          '❌ Unverified crypto exchangers — use only regulated exchanges',
          '❌ “Friends and family” transfers to strangers — PayPal/Revolut do not protect such transactions',
          '✅ Official channels: Wise (Transferwise), Revolut, regulated banks',
          '✅ Cryptocurrency: use exchanges with KYC (Kraken, Bitstamp, Coinbase)',
          '✅ If sanctions apply — consult a lawyer in Portugal on compliance, not “representatives” in chats'
        ]}
      ]
    },
    {
      id: 'where-report',
      title: 'Where to report',
      content: [
        { kind: 'checklist', items: [
          '🚨 PSP — 112 (emergency) or the nearest police station. For filing a police report',
          '🌐 Cibercrime — report at cibercrime.ministeriopublico.pt for online fraud',
          '💰 Banco de Portugal — portal for complaints about banks and financial services',
          '📞 DECO PROteste — 218 410 801, consumer rights protection',
          '⚖️ Provedor do Cliente — ombudsman for complaints about banks and insurance companies',
          '🏠 Instituto da Habitação (IHRU) — for housing disputes',
          '👥 CICDR — commission against discrimination',
          '📧 Portal da Queixa (portaldaqueixa.com) — general portal for public complaints'
        ]}
      ]
    },
    {
      id: 'prevention',
      title: 'General protection principles',
      content: [
        { kind: 'checklist', items: [
          '🛡️ The “24-hour” rule: never make major financial decisions on the same day. Always sleep on it',
          '🔍 Check through official registers: AMI (property), RAM (cars), Conservatória (ownership), OA (lawyers)',
          '👨‍👩‍👦 Trust verified contacts, not chats. A private lawyer or solicitor in Portugal is cheaper than losing €10,000',
          '💼 Document EVERYTHING: emails, SMS messages, screenshots, photos. In court, this is evidence',
          '💳 Do not use your main card for online purchases. Use an additional card with a €1000 limit',
          '🔐 2FA everywhere — banks, Gov.pt, AIMA',
          '📱 Protection against SIM swapping — PIN on the SIM and on the operator account',
          '🇷🇺 If you speak Russian — do not “get acquainted” on Telegram with people offering help: these are often traps'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'PSP — Polícia de Segurança Pública', url: 'https://www.psp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cibercrime — Gabinete de Cibercrime (Ministério Público)', url: 'https://cibercrime.ministeriopublico.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Banco de Portugal — financial services consumer rights', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DECO Proteste — consumer rights', url: 'https://www.deco.proteste.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMI — Associação dos Mediadores Imobiliários', url: 'https://www.ami.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
