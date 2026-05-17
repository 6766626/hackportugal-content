export default {
  editorialVoice: 'hackportugal',
  id: 'olx-custojusto-vinted',
  categoryId: 'daily_life',
  title: 'OLX, CustoJusto, Vinted — buying and selling used goods',
  tldr: 'The main second-hand platforms in Portugal: OLX (everything from furniture to cars, ~5 m listings), CustoJusto (classifieds style, big audience in the north), Vinted (clothing, shoes, bags only — with buyer protection). Vinted is the only one with proper escrow (the platform holds the funds until the buyer confirms receipt). OLX and CustoJusto have no protection — you carry the risk. IMPORTANT: since 2024, platforms report large sellers to Finanças (EU DAC7 directive): if you sell >€2,000 or >30 items per year, the tax authority gets notified. Top scams 2025–2026: fake "payment confirmed" SMS, fake payment pages, MB Way push schemes.',
  tags: ['olx', 'custojusto', 'vinted', 'second-hand', 'scams', 'safety'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'platforms-overview',
      title: 'Three platforms — pick the right one',
      content: [
        { kind: 'paragraph', text: 'Portugal has three main second-hand platforms. Each has its own sweet spot.' },
        { kind: 'substeps', items: [
          {
            id: 'olx-pt',
            title: 'OLX — the most general-purpose',
            content: [
              { kind: 'checklist', items: [
                '🌐 olx.pt — the largest second-hand marketplace in Portugal (~5 m active listings)',
                '🚗 Categories: everything from furniture and clothing to cars, property and jobs',
                '💬 Communication via built-in chat + phone',
                '💳 Payment DIRECTLY between parties — the platform is NOT an intermediary',
                '⚠️ NO buyer protection: all disputes are between you and the seller',
                '💸 Listings are free (for private users); promotion costs extra',
                '📱 iOS/Android app, profiles with ratings'
              ]}
            ]
          },
          {
            id: 'custojusto',
            title: 'CustoJusto — the traditional "local" one',
            content: [
              { kind: 'checklist', items: [
                '🌐 custojusto.pt — the Portuguese counterpart of OLX, historically with a larger audience in the north',
                '🏠 Strong categories: furniture, tools, garden equipment, property',
                '💬 Contact by phone or email — built-in chat is less developed',
                '⚠️ NO buyer protection',
                '💸 Free listings',
                '📱 App less popular than OLX'
              ]}
            ]
          },
          {
            id: 'vinted-pt',
            title: 'Vinted — clothing with escrow protection',
            content: [
              { kind: 'checklist', items: [
                '🌐 vinted.pt — clothing, shoes, bags, accessories only; other categories are not allowed',
                '🛡️ Buyer protection IS provided: Vinted holds the money until receipt is confirmed',
                '💳 Card payment via the platform (Vinted Wallet)',
                '💸 Sellers — FREE (no commission)',
                '💸 Buyers — "Buyer Protection" fee ~€0.70 + 5% of the item price',
                '📦 Shipping via CTT with label printing from the app',
                '⚖️ Returns: within 2 days of receipt — you can open an "item not as described" dispute'
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
        { kind: 'paragraph', text: 'Since 2024, all online platforms in the EU are required to report users who exceed certain sales thresholds to the tax authority. This is Directive DAC7 (Council Directive (EU) 2021/514), implemented in Portugal as Decreto-Lei 53/2023.' },
        { kind: 'checklist', items: [
          '🚨 Threshold: €2,000 in total revenue OR 30+ transactions per calendar year',
          '📨 The platform (OLX, Vinted, CustoJusto) automatically reports to Finanças those who exceed the threshold',
          '⚖️ If you\'re just selling PERSONAL belongings (clothes, furniture from your home), that\'s NOT a business — no tax — but Finanças may still ask you for an explanation',
          '💼 If you regularly buy and resell, that\'s now atividade comercial — you need recibos verdes (matching CAE code) or a legal entity',
          '🔍 Finanças can request explanations in the IRS Anexo — be ready to prove they were PERSONAL items (proof of original purchase, age, personal use)'
        ]},
        { kind: 'warning', text: 'Real 2025 case: a Vinted seller sold >€2,000 of clothing in a year (her own, not resale), got a request from Finanças, spent 3 months providing evidence. It ended without a fine, but lots of headaches. Save original purchase receipts for clothing if you plan to sell.' }
      ]
    },
    {
      id: 'common-scams',
      title: 'Top scams 2025–2026',
      content: [
        { kind: 'paragraph', text: 'Banco de Portugal published an official warning in November 2025 about new schemes targeting OLX and Vinted users. The most common ones:' },
        { kind: 'substeps', items: [
          {
            id: 'scam-fake-payment',
            title: 'Fake "payment confirmed" SMS',
            content: [
              { kind: 'paragraph', text: 'You sold an item. The buyer sends an SMS supposedly "from MB Way" saying the payment went through. The screenshot looks legitimate. You ship the item. No money ever arrives.' },
              { kind: 'checklist', items: [
                '✅ Defence: ALWAYS verify the payment landed in YOUR bank account, NOT through SMS, but via your bank\'s app',
                '❌ SMS "MB Way paid" is almost always fake',
                '❌ Don\'t ship the item until you see the money in your account'
              ]}
            ]
          },
          {
            id: 'scam-phishing-link',
            title: 'Fake payment page',
            content: [
              { kind: 'paragraph', text: 'A buyer writes: "I\'ll pay via Vinted, but you need to confirm via this link: vinted-pt-secure.com/confirm". The link is phishing, the form steals card details.' },
              { kind: 'checklist', items: [
                '✅ Vinted NEVER sends payment links outside its own app',
                '✅ All legitimate Vinted transactions happen only inside the vinted.pt site/app',
                '❌ vinted-pt-secure, vinted-payment, vinted-confirm — all fakes',
                '🚨 If you opened a page and entered card details: IMMEDIATELY block the card via the bank, notify the bank, file a queixa with PJ at canalcyber.pj.pt'
              ]}
            ]
          },
          {
            id: 'scam-mbway-push',
            title: 'MB Way "security" push',
            content: [
              { kind: 'paragraph', text: 'An SMS "supposedly from the bank": "Confirm the push notification in MB Way to verify your identity." Victim opens the app, taps "confirm" — that\'s the money going to the scammer.' },
              { kind: 'checklist', items: [
                '✅ ALWAYS read the MB Way push text in full before tapping',
                '✅ A push labelled "Pagar" — you are sending money; "Receber" — you are receiving',
                '❌ Don\'t tap "confirm" at someone else\'s request — even if they say "for security"',
                '🔒 If in doubt — cancel, then call the bank using the number on the back of your card'
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
        { kind: 'paragraph', text: 'DECO PROteste is Portugal\'s main consumer-rights association. Their official guidance for buying second-hand:' },
        { kind: 'checklist', items: [
          '📜 Read the platform\'s Termos e Condições — especially the returns section',
          '🔒 DO NOT step outside the platform to pay (you lose any protection)',
          '⭐ Check the seller\'s reputation: rating, number of transactions, reviews',
          '👴 Older profiles (3+ years) are usually more reliable than new ones',
          '💰 Too-low prices = red flag (a new iPhone for €200 is almost certainly a scam)',
          '🤝 For expensive purchases — meet in person, inspect the item (for electronics, check the IMEI on blacklist.gsma.com)',
          '📸 Ask for detailed photos from different angles, of the serial number, and of the item working',
          '🧾 For expensive items — ask for the original purchase receipt (protects you against stolen goods)',
          '💳 Ideal: card payment via a platform with escrow (Vinted, eBay) or PayPal Goods & Services',
          '🚫 Never pay via Western Union, Bitcoin, or gift cards — these are always scams'
        ]},
        { kind: 'warning', text: 'If you become a victim of fraud: 1) block the card via the bank, 2) file a queixa with PSP/GNR within 6 months (the statute of limitations), 3) report it on the platform (to get the scammer blocked), 4) for financial attacks — file a complaint with PJ at canalcyber.pj.pt' }
      ]
    },
    {
      id: 'seller-safety',
      title: 'How to sell safely',
      content: [
        { kind: 'checklist', items: [
          '✅ ALWAYS confirm the money is in YOUR account via your bank\'s app before shipping the item',
          '✅ For CTT with pago na entrega (cash on delivery) — you take the money on delivery, safe for the seller',
          '📦 Vinted: use only the built-in shipping — you get a tracking number and insurance',
          '🏠 In-person meeting: in a public place (café, mall), not at home; for expensive items — bring a friend',
          '📸 Photograph the item BEFORE shipping (protects against false "not received / damaged" claims)',
          '🧾 Keep all chat conversations on the platform — they are evidence in disputes',
          '⚠️ Don\'t share your bank account number, NIB or passport with the buyer — MB Way / IBAN is enough for transfers',
          '🚨 If the buyer "insists" on going outside the platform — that\'s a red flag'
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternative platforms',
      content: [
        { kind: 'checklist', items: [
          '📚 Wallapop — Spanish platform, active in larger Portuguese cities (Lisbon, Porto), good for furniture and appliances',
          '🚗 Standvirtual — № 1 in Portugal for used cars, cars-only',
          '🏠 Imovirtual / Idealista — for real estate (see separate guides on renting/buying)',
          '🛒 Facebook Marketplace — lots of listings, but also lots of scams; NO protection',
          '👶 Bebés & Bebés (FB groups) — great for kids\' items, organised by city',
          '📦 Lokoo, Trocafone — specialised for electronics, with second-hand phone verification before sale'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — alert on MB Way scams on OLX/Vinted (2025)', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — second-hand online shopping: precautions', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 53/2023 — transposition of DAC7 (platform obligations)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/53-2023-214867521', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'EUR-Lex — Council Directive (EU) 2021/514 (DAC7)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021L0514', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'OLX Portugal — tips for safe use (platform help)', url: 'https://help.olx.pt/olxpthelp/s/article/dicas-importantes-para-usares-o-olx-em-segurana-V33', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'PJ — Cybercrime reporting channel', url: 'https://canalcyber.pj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'New guide: OLX, CustoJusto, Vinted in Portugal. Platform comparison, tax implications of DAC7 (>€2,000 or >30 sales = reported to Finanças), top 2025-2026 scams (fake payment SMS, phishing links, MB Way push), DECO PROteste safety tips for buying and selling.'
}
