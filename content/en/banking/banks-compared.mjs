export default {
  editorialVoice: 'hackportugal',
  id: 'banks-compared',
  categoryId: 'banking',
  title: 'Portuguese banks and neobanks — 2026 comparison',
  tldr: 'Three levels: traditional banks (Millennium, CGD, Santander, BPI, Novobanco) — full service, branches, loans, but fees of €4–8/month. Online banks ActivoBank / BiG — no account fees, PT IBAN, MB WAY. Neobanks: Revolut may issue a PT or LT IBAN depending on migration/account; Wise usually has a BE IBAN; N26 has a DE IBAN. Cheap transfers, but limitations for pension and official payments.',
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
              'Account: €4.50/month (with salary: €0)',
              'App usually PT/EN; do not count on a Russian version',
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
              'App usually PT/EN/ES; do not count on a Russian version',
              'They readily open accounts for non-residents',
              'EUR ↔ other currencies conversion at a favourable rate'
            ]}
          ]},
          { id: 'c4', title: 'BPI', content: [
            { kind: 'paragraph', text: 'Part of CaixaBank (Spain). Good for investments and wealth management. Account €6/month. Fewer branches, but a strong app.' }
          ]},
          { id: 'c5', title: 'Novobanco', content: [
            { kind: 'paragraph', text: 'Former BES. Stable after restructuring. €4/month. One of the few that is flexible about opening accounts for foreigners with a residence permit.' }
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Online banks with a PT IBAN',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'ActivoBank (Millennium)', content: [
            { kind: 'checklist', items: [
              'PT IBAN, no account fee',
              'Full-featured app, MB WAY',
              'Free Visa debit card',
              'Suitable for salary, recibos verdes, rent',
              'Mostly online + call centre; there are physical service points, but not a traditional branch network',
              'Opening: fully online with NIF and residence permit/Cartão de Cidadão'
            ]}
          ]},
          { id: 'o2', title: 'BiG (Banco de Investimento Global)', content: [
            { kind: 'paragraph', text: 'Specialises in investments. Good for brokerage operations, PT IBAN. For everyday banking, slightly weaker than ActivoBank.' }
          ]},
          { id: 'o3', title: 'Moey! (digital brand of Crédito Agrícola)', content: [
            { kind: 'paragraph', text: 'Digital brand of Crédito Agrícola / Caixa Central de Crédito Agrícola Mútuo with fully online registration. PT IBAN, free basic account and card, 100% mobile onboarding when KYC is completed. An alternative to ActivoBank. (Vivid Money — previously mentioned — exited the retail market in 2024 and no longer accepts new clients.)' }
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
              'Revolut is gradually moving clients in Portugal to a PT IBAN through the Portuguese branch of Revolut Bank UAB; availability depends on the account/onboarding status and Revolut’s terms on the opening date. Check in the app which IBAN has been issued: PT, LT or another',
              'Free SEPA + exchange in 20 currencies (within plan limits; at weekends there is usually an additional markup)',
              'Cryptocurrency, shares, gold',
              'EU sanctions: EU banks cannot accept deposits above €100,000 from citizens of the Russian Federation/persons residing in the Russian Federation, and Russian legal entities, unless an exception applies. For citizens of the Russian Federation with a residence permit/permanent residence in the EU/EEA/Switzerland, an important exception applies, but the bank may still request enhanced KYC',
              'MB WAY — not supported in Revolut/Wise/N26'
            ]}
          ]},
          { id: 'n2', title: 'Wise', content: [
            { kind: 'checklist', items: [
              'IBAN: BE (Belgium)',
              'Best rates for international transfers',
              'Debit card: a physical card is usually available for a one-off fee; a virtual card may be free. Check the Wise tariff for Portugal',
              'Fewer banking features, but a more accurate exchange rate',
              'Suitable as an additional account for currency operations'
            ]}
          ]},
          { id: 'n3', title: 'N26', content: [
            { kind: 'paragraph', text: 'DE IBAN. German bank, popular with Germans and Scandinavians. Top-up limits from some countries.' }
          ]}
        ]},
        { kind: 'warning', text: 'In practice, a PT IBAN is easier for Finanças, Segurança Social, salary, rent and direct debit. Under SEPA rules, IBAN discrimination is prohibited, but for a foreign IBAN manual validation/documents may be required, and some landlords or companies still try to demand a PT IBAN. It is better to keep your main account with a Portuguese bank.' }
      ]
    },
    {
      id: 'how-to-open',
      title: 'How to open an account',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Resident of Portugal (with a residence permit)', content: [
            { kind: 'checklist', items: [
              'Documents: Cartão de Cidadão/residence permit, NIF, proof of address, proof of income',
              'Online (ActivoBank, BiG) or in a branch',
              'Opening: 1 day online, 3–7 days in a branch',
              'Initial deposit: usually €250'
            ]}
          ]},
          { id: 'h2', title: 'Non-resident (without a residence permit)', content: [
            { kind: 'checklist', items: [
              'NIF is mandatory',
              'Banks: Millennium, Santander, Novobanco (the most flexible)',
              'Proof of income from abroad (salary certificate)',
              'Minimum deposit: €250–1,000',
              'EU sanctions (Reg 833/2014): EU banks cannot accept deposits above €100,000 from citizens of the Russian Federation/persons residing in the Russian Federation. For citizens of the Russian Federation with a residence permit/permanent residence in the EU/EEA/Switzerland, an exception applies, but the bank may request enhanced KYC and proof of residency',
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
        { kind: 'paragraph', text: 'MB WAY is the Portuguese instant payments system from SIBS. Like Revolut, but only for PT IBANs.' },
        { kind: 'checklist', items: [
          '📱 Link a number to a Portuguese bank via the bank app or the MB WAY app',
          '💸 Transfers by phone are instant; a typical MB WAY limit is up to €750 per transfer, and the specific bank may set lower daily/monthly limits',
          '🛒 In-store payment by NFC / QR',
          '🎟️ Generation of one-off virtual cards',
          '🆓 Paying for purchases is usually free for the customer; P2P transfers may be free within the bank’s limits/terms',
          '🔄 Between all Portuguese banks',
          '❌ Does NOT work in Revolut / Wise / N26'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Traditional bank (fee/month)', amountEURMin: 4, amountEURMax: 8 },
    { label: 'Online bank with a PT IBAN', amountEUR: 0 },
    { label: 'Revolut Standard (PT IBAN free)', amountEUR: 0, note: 'since 2024 PT IBAN for everyone' },
    { label: 'Revolut Premium', amountEUR: 10, note: '~€9.99/month, higher limits/insurance' },
    { label: 'Initial deposit', amountEURMin: 250, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'Banco de Portugal — List of institutions', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGD — Fundo de Garantia de Depósitos (guarantee €100,000)', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Fee comparison tool', url: 'https://clientebancario.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SIBS — official MB WAY', url: 'https://www.mbway.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
