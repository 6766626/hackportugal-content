export default {
  editorialVoice: 'hackportugal',
  id: 'olx-custojusto-vinted',
  categoryId: 'daily_life',
  title: 'OLX, CustoJusto, Vinted — buying and selling second-hand items',
  tldr: 'The main second-hand platforms in Portugal: OLX (everything from furniture to cars, ~5 million listings), CustoJusto (classifieds format, large audience in the north), Vinted (clothes/shoes/bags only, buyer protection). Vinted is the only one with real escrow protection (the platform holds the money until receipt is confirmed). OLX and CustoJusto — no protection, everything is your responsibility.\n\nIMPORTANT: since 2024, platforms have been reporting data on large sales to Finanças (EU DAC7 directive): if you sell >€2,000 or >30 items per year — the tax authority receives a notification. Main scams in 2025–2026: fake “payment confirmed” SMS messages, fake payment pages, MB Way schemes.',
  tags: ['olx', 'custojusto', 'vinted', 'second-hand', 'scams', 'security'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'platforms-overview',
      title: 'Three platforms — which is for what',
      content: [
        { kind: 'paragraph', text: 'There are three main second-hand platforms in Portugal. Each one fits its own category.' },
        { kind: 'substeps', items: [
          {
            id: 'olx-pt',
            title: 'OLX — the most versatile',
            content: [
              { kind: 'checklist', items: [
                '🌐 olx.pt — the largest second-hand marketplace in Portugal (~5 million active listings)',
                '🚗 Categories: everything from furniture and clothes to cars, property, jobs',
                '💬 Communication via built-in chat + phone',
                '💳 Payment DIRECTLY between the parties — the platform does NOT act as an intermediary',
                '⚠️ NO buyer protection: all disputes are between you and the seller',
                '💸 Listing is free (for private individuals); promotion is paid',
                '📱 iOS/Android app, profiles with ratings'
              ]}
            ]
          },
          {
            id: 'custojusto',
            title: 'CustoJusto — the traditional “local” one',
            content: [
              { kind: 'checklist', items: [
                '🌐 custojusto.pt — the Portuguese equivalent of OLX, historically with a larger audience in the north',
                '🏠 Strong categories: furniture, tools, garden equipment, property',
                '💬 Contact by phone or email — the built-in chat is less developed',
                '⚠️ NO buyer protection',
                '💸 Listing is free',
                '📱 The app is less popular than OLX’s'
              ]}
            ]
          },
          {
            id: 'vinted-pt',
            title: 'Vinted — clothes with escrow protection',
            content: [
              { kind: 'checklist', items: [
                '🌐 vinted.pt — clothes, shoes, bags, accessories only; other categories are prohibited',
                '🛡️ Buyer protection EXISTS: Vinted holds the money until receipt is confirmed',
                '💳 Payment by card through the platform (Vinted Wallet)',
                '💸 For the seller — FREE (no commission)',
                '💸 For the buyer — “Buyer Protection” fee ~€0.70 + 5% of the item price',
                '📦 Delivery via CTT with the option to print the label directly from the app',
                '⚖️ Return: within 2 days of receipt — you can open an “item not as described” dispute'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'dac7-tax',
      title: 'Taxes: DAC7 — platforms report to Finanças',
      content: [
        { kind: 'paragraph', text: 'Since 2024, all online platforms in the EU have been required to report data to the tax authority on users who exceed sales thresholds. This is the DAC7 directive (Council Directive 2021/514/EU), in Portugal — Lei n.º 36/2023, de 26 de julho.' },
        { kind: 'checklist', items: [
          '🚨 Threshold: €2,000 in total revenue OR 30+ transactions per calendar year',
          '📨 The platform (OLX, Vinted, CustoJusto) automatically sends the data of those who exceeded the threshold to Finanças',
          '⚖️ If you are simply selling PERSONAL ITEMS (clothes, furniture from your own flat) — this is NOT a business activity, there is no tax, but you may be asked for a declaration',
          '💼 If you regularly buy and resell — this is already atividade comercial, you need recibos verdes (suitable CAE) or cooperation with a legal entity',
          '🔍 Finanças may ask you for explanations regarding the “offset” in the IRS annex — be prepared to prove that these were PERSONAL items (photos showing origin, age, personal use)'
        ]},
        { kind: 'warning', text: 'Real 2025 case: a Vinted seller sold >€2,000 worth of clothes in a year (her own, not reselling), received a request from Finanças, and spent 3 months gathering evidence. It ended without a fine, but with a lot of stress. Keep receipts from the original purchases of clothes if you plan to sell them.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Main scams in 2025–2026',
      content: [
        { kind: 'paragraph', text: 'In November 2025, Banco de Portugal issued an official warning to OLX and Vinted users about new schemes. These are the most common:' },
        { kind: 'substeps', items: [
          {
            id: 'scam-fake-payment',
            title: 'Fake “payment confirmed” SMS',
            content: [
              { kind: 'paragraph', text: 'You have sold an item. The buyer sends an SMS “supposedly from MB Way” saying that the payment has gone through. The screenshot looks genuine. You send the item. There was no money.' },
              { kind: 'checklist', items: [
                '✅ Protection: ALWAYS check that the money has arrived in your banking app NOT VIA SMS, but through the bank app',
                '❌ An “MB Way paid” SMS is almost always fake',
                '❌ Do not send the item until you see the money in your account'
              ]}
            ]
          },
          {
            id: 'scam-phishing-link',
            title: 'Fake payment page',
            content: [
              { kind: 'paragraph', text: 'The buyer writes: “I will pay via Vinted, but you need to confirm through this link: vinted-pt-secure.com/confirm”. The link is phishing, and the form steals card details.' },
              { kind: 'checklist', items: [
                '✅ Vinted NEVER sends payment links outside its own app',
                '✅ All legitimate Vinted transactions take place only inside the vinted.pt website/app',
                '❌ vinted-pt-secure, vinted-payment, vinted-confirm — all fake',
                '🚨 If you opened the page and entered card details: IMMEDIATELY block the card through your bank, report it the bank, file a queixa with PJ via canalcyber.pj.pt'
              ]}
            ]
          },
          {
            id: 'scam-mbway-push',
            title: 'MB Way “security” push notification',
            content: [
              { kind: 'paragraph', text: 'SMS “supposedly from the bank”: “Confirm the push notification in MB Way to verify your identity”. The victim opens the app, taps “confirm” — and the money goes to the scammer.' },
              { kind: 'checklist', items: [
                '✅ ALWAYS read the MB Way push notification text IN FULL before tapping',
                '✅ A push marked “Pagar” means you are sending money; “Receber” means you are receiving it',
                '❌ Do not tap “confirm” at someone else’s request — even if they ask “for security”',
                '🔒 If in doubt — cancel it, call the bank using the number on the back of your card'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'buyer-safety',
      title: 'How to buy safely (DECO PROteste advice)',
      content: [
        { kind: 'paragraph', text: 'DECO PROteste is Portugal’s main consumer rights association. Their official recommendations for buying second-hand:' },
        { kind: 'checklist', items: [
          '📜 Read the platform’s Termos e Condições — especially the returns section',
          '🔒 Do NOT leave the platform for payment (you lose protection, if it exists)',
          '⭐ Check reputation: rating, number of deals, reviews',
          '👴 Older profiles (3+ years) are usually more reliable than new ones',
          '💰 Too low a price = red flag (a new iPhone for €200 is almost certainly a scam)',
          '🤝 For expensive purchases — meet in person, check the item (for electronics — check IMEI serial numbers on blacklist.gsma.com)',
          '📸 Ask for detailed photos from different angles, a photo of the serial number, and photos of the item working',
          '🧾 For expensive items — ask for the receipt from the original purchase (protects against buying stolen goods)',
          '💳 Ideal: card payment through a platform with escrow (Vinted, eBay) or PayPal Goods & Services',
          '🚫 Never pay by Western Union, Bitcoin, gift cards — this is always a scam'
        ]},
        { kind: 'warning', text: 'If you become a victim of fraud: 1) Block the card with your bank, 2) File a queixa with PSP/GNR within 6 months (this is the limitation period), 3) Report it on the platform (to block the scammer), 4) For financial attacks — report to PJ via canalcyber.pj.pt' }
      ]
    },
    {
      id: 'seller-safety',
      title: 'How to sell safely',
      content: [
        { kind: 'checklist', items: [
          '✅ ALWAYS check that the money has arrived IN YOUR account via the bank app before sending the item',
          '✅ For CTT with pago na entrega (cash on delivery) — you receive the money at the moment of collection, safe for the seller',
          '📦 Vinted: use only built-in delivery — you will have a tracking number and insurance',
          '🏠 In-person meeting: in a public place (café, shopping centre), not at your home; for expensive items — take a friend with you',
          '📸 Take photos of the item BEFORE sending it (protection against false “not received/damaged” claims)',
          '🧾 Keep all correspondence in the platform chat — it is evidence in a dispute',
          '⚠️ Do not give the buyer your bank account number, NIB or passport — MB Way / IBAN is enough for a transfer',
          '🚨 If the buyer “insistently” asks to leave the platform — this is a red flag'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternative platforms',
      content: [
        { kind: 'checklist', items: [
          '📚 Wallapop — Spanish platform, active in large Portuguese cities (Lisbon, Porto), convenient for furniture and appliances',
          '🚗 Standvirtual — No. 1 in Portugal for second-hand cars, specialises only in cars',
          '🏠 Imovirtual / Idealista — for property (see separate guides on renting/buying)',
          '🛒 Facebook Marketplace — many listings, but also many scams; NO protection',
          '👶 Bebes & Bebés (FB groups) — excellent for children’s items by city',
          '📦 Lokoo, Trocafone — specialised in electronics, with checks of second-hand phones before sale'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — alert on MB Way scams on OLX/Vinted platforms (2025)', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — second-hand online purchases: precautions', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 36/2023, de 26 de julho — DAC7 transposition (platform obligations)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/36-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'EUR-Lex — Council Directive (EU) 2021/514 (DAC7)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021L0514', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'OLX Portugal — tips for using OLX safely (platform help)', url: 'https://help.olx.pt/olxpthelp/s/article/dicas-importantes-para-usares-o-olx-em-segurana-V33', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'PJ — Cybercrime Reporting Channel', url: 'https://canalcyber.pj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180,
  changeSummary: 'New guide: OLX, CustoJusto, Vinted in Portugal. Platform comparison, DAC7 tax consequences (>€2,000 or >30 sales = reported to Finanças), main scams in 2025-2026 (fake payment SMS messages, phishing links, MB Way push notifications), DECO PROteste advice on safe buying/selling.'
}
