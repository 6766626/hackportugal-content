export default {
  editorialVoice: 'hackportugal',
  id: 'banks-compared',
  categoryId: 'banking',
  title: 'Portuguese banks and neobanks — 2026 comparison',
  tldr: 'Three tiers: traditional banks (Millennium, CGD, Santander, BPI, Novo Banco) — full service, branches, loans, but fees of €4–8/month. Online banks ActivoBank / BiG — no account fees, IBAN PT, MB WAY. Neobanks Revolut / Wise / N26 — European IBAN (LT/DE/BE), cheap transfers, but limitations for pension and official payments.',
  tags: ['bank', 'account', 'iban', 'mb way', 'revolut'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'classic',
      title: 'Traditional banks — full service',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Millennium BCP', content: [
            { kind: 'checklist', items: [
              'Portugal’s largest private bank',
              'Account: €4.50/month (with salary €0)',
              'App in Russian/English',
              'Network of ~400 branches',
              'Good for mortgages for non-residents',
              'SEPA transfer fee: €0, SWIFT: €15–40'
            ]}
          ]},
          { id: 'c2', title: 'Caixa Geral de Depósitos (CGD)', content: [
            { kind: 'checklist', items: [
              'State-owned, the largest',
              'Account: €6/month (with salary/for students — €0)',
              '~600 branches across Portugal',
              'Strict KYC for non-residents',
              'Strong mortgage programme'
            ]}
          ]},
          { id: 'c3', title: 'Santander Totta', content: [
            { kind: 'checklist', items: [
              'Spanish group, universal bank',
              'Account: €7/month',
              'App in Russian/English',
              'They open accounts for non-residents easily',
              'EUR ↔ other currency conversion at a favourable rate'
            ]}
          ]},
          { id: 'c4', title: 'BPI', content: [
            { kind: 'paragraph', text: 'Part of CaixaBank (Spain). Good for investments and wealth management. Account €6/month. Fewer branches, but a strong app.' }
          ]},
          { id: 'c5', title: 'Novo Banco', content: [
            { kind: 'paragraph', text: 'Former BES. Stable after restructuring. €4/month. One of the few that is accommodating when opening accounts for foreigners with a residence permit.' }
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Online banks with IBAN PT',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'ActivoBank (Millennium)', content: [
            { kind: 'checklist', items: [
              'IBAN PT, no account fee',
              'Full-featured app, MB WAY',
              'Free Visa debit card',
              'Suitable for salary, recibos verdes, rent',
              'No branches — everything online + call centre',
              'Opening: fully online with NIF and residence permit/Cartão de Cidadão'
            ]}
          ]},
          { id: 'o2', title: 'BiG (Banco de Investimento Global)', content: [
            { kind: 'paragraph', text: 'Specialised in investments. Good for brokerage operations, IBAN PT. For everyday banking — slightly weaker than ActivoBank.' }
          ]},
          { id: 'o3', title: 'Moey! (Caixa Económica digital bank)', content: [
            { kind: 'paragraph', text: 'Digital brand of CGD (Caixa Geral de Depósitos) with fully online registration. IBAN PT, free basic account, virtual cards. An alternative to ActivoBank. (Vivid Money — previously mentioned — exited the retail market in 2024 and no longer accepts new customers.)' }
          ]}
        ]}
      ]
    },
    {
      id: 'neobanks',
      title: 'European neobanks',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              'Since 2024 Revolut has opened a Revolut Bank branch in Portugal and gives **IBAN PT (PT50) free to all new customers** (Standard/Plus/Premium). Previously IBAN PT was for Premium+',
              'Free SEPA + exchange in 20 currencies',
              'Cryptocurrency, shares, gold',
              'Limit of €100,000 on a foreign EU bank account (sanctions for the Russian Federation, Reg 833/2014)',
              'MB WAY — not supported in Revolut/Wise/N26'
            ]}
          ]},
          { id: 'n2', title: 'Wise', content: [
            { kind: 'checklist', items: [
              'IBAN: BE (Belgium)',
              'Best rates for international transfers',
              'Free Mastercard debit card',
              'Fewer banking features, but a more accurate rate',
              'Suitable as an additional account for currency operations'
            ]}
          ]},
          { id: 'n3', title: 'N26', content: [
            { kind: 'paragraph', text: 'IBAN DE. German bank, popular with Germans and Scandinavians. Top-up limits from some countries.' }
          ]}
        ]},
        { kind: 'warning', text: 'Neobanks with a non-PT IBAN are often NOT accepted by: government portals Finanças (for refunds), Segurança Social (social security), some landlords. The main account should be Portuguese.' }
      ]
    },
    {
      id: 'how-to-open',
      title: 'How to open an account',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Portugal resident (with residence permit)', content: [
            { kind: 'checklist', items: [
              'Documents: Cartão de Cidadão/residence permit, NIF, proof of address, proof of income',
              'Online (ActivoBank, BiG) or in a branch',
              'Opening: 1 day online, 3–7 days in a branch',
              'Initial deposit: usually €250'
            ]}
          ]},
          { id: 'h2', title: 'Non-resident (without residence permit)', content: [
            { kind: 'checklist', items: [
              'NIF is mandatory',
              'Banks: Millennium, Santander, Novo Banco (the most accommodating)',
              'Proof of income from abroad (salary certificate)',
              'Minimum deposit: €250–1000',
              '€100,000 deposit limit for citizens of the Russian Federation (sanctions)',
              'Without a residence permit, accounts are blocked if money laundering is suspected (AML)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'mb-way',
      title: 'MB WAY — payments and transfers by phone',
      content: [
        { kind: 'paragraph', text: 'MB WAY — the Portuguese instant payments system from SIBS. Like Revolut, but only for IBAN PT.' },
        { kind: 'checklist', items: [
          '📱 Link your number to a Portuguese bank via the bank app or the MB WAY app',
          '💸 Phone transfers are instant, up to €2500/day, €5000/month',
          '🛒 Payment in shops by NFC / QR',
          '🎟️ Generate one-off virtual cards',
          '🆓 Free for individuals',
          '🔄 Between all Portuguese banks',
          '❌ Does NOT work in Revolut / Wise / N26'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Traditional bank (fee/month)', amountEURMin: 4, amountEURMax: 8 },
    { label: 'Online bank with IBAN PT', amountEUR: 0 },
    { label: 'Revolut Standard (free IBAN PT)', amountEUR: 0, note: 'since 2024 IBAN PT for everyone' },
    { label: 'Revolut Premium', amountEUR: 9, note: '€/month, higher limits/insurance' },
    { label: 'Initial deposit', amountEURMin: 250, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'Banco de Portugal — List of institutions', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGD — Fundo de Garantia de Depósitos (€100,000 guarantee)', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Fee comparison tool', url: 'https://clientebancario.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SIBS — official MB WAY', url: 'https://www.mbway.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
