export default {
  editorialVoice: 'hackportugal',
  id: 'online-vs-store-14-days',
  categoryId: 'daily_life',
  title: '14 days to return goods — how it works for online purchases and shops',
  tldr: 'For distance purchases (online, by phone, by catalogue) you have an unconditional right to return goods within 14 days without giving a reason (Decreto-Lei 24/2014 + EU 2011/83). In a physical shop, returns are at the seller’s discretion if there is no defect. Exceptions for online purchases: food, sealed cosmetics and hygiene products, digital content after downloading, personalised goods.',
  tags: ['returns', 'online shopping', 'consumer rights', '14 days'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'online-unconditional',
      title: 'Online: 14 days, no questions asked',
      content: [
        { kind: 'paragraph', text: 'Distance purchases (on the internet, by phone, by catalogue, at exhibitions outside a shop) fall under Decreto-Lei 24/2014. The right of withdrawal (direito de livre resolução) applies for 14 calendar days from the moment you receive the goods.' },
        { kind: 'checklist', items: [
          'You do not need to explain the reason',
          'The countdown starts on the day of physical delivery',
          'For digital services — from the moment the contract is signed',
          'For a set of goods delivered in parts — from receipt of the last part',
          'You can return a partially unpacked item if you inspected it as you would in a shop'
        ]},
        { kind: 'warning', text: 'The seller is obliged to inform you about the right of withdrawal. If they did not do this, the period is extended to 12 months.' }
      ]
    },
    {
      id: 'how-to-return-online',
      title: 'How to return an online purchase',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Notify the seller within 14 days', content: [
            { kind: 'paragraph', text: 'The format is flexible: email, a form on the website, a recorded phone call. A phrase in Portuguese: “Exerço o meu direito de livre resolução nos termos do Decreto-Lei 24/2014”. You can use the standard form from Annex B to the law.' }
          ]},
          { id: 'o2', title: '2. Send the goods back', content: [
            { kind: 'checklist', items: [
              'The deadline for sending them back is 14 days from the notification',
              'Return delivery is at the buyer’s expense only if the seller informed you of this in advance; otherwise the seller must pay for it',
              'Keep the tracking number and receipt — this is your proof',
              'The goods should be in reasonable packaging, with accessories'
            ]}
          ]},
          { id: 'o3', title: '3. Receive your money', content: [
            { kind: 'paragraph', text: 'The seller must refund the money within 14 days from receiving the notification, but may withhold the refund until receiving the goods. The refund method must be the same as the payment method. They cannot deduct a “processing” fee.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exceptions',
      title: 'When the 14 days do NOT apply',
      content: [
        { kind: 'paragraph', text: 'Art. 17 of Decreto-Lei 24/2014 lists the exceptions:' },
        { kind: 'checklist', items: [
          '🍎 Perishable goods or goods with a short shelf life (food, flowers)',
          '🎨 Personalised goods (engraving, made-to-measure tailoring)',
          '💧 Sealed hygiene or health goods after opening (cosmetics, underwear, contact lenses)',
          '📀 Sealed audio, video or software after opening',
          '🎟️ Bookings with a fixed date (hotel, plane, concert)',
          '💻 Digital content after downloading has started, if the buyer agreed',
          '📰 Newspapers and periodicals (except subscriptions)',
          '🍷 Alcoholic drinks in contracts where the price is agreed at conclusion and delivery takes place after >30 days, and the value depends on market fluctuations',
          '🧾 Goods mixed with others after delivery (fuel, gravel)'
        ]}
      ]
    },
    {
      id: 'physical-store',
      title: 'In a shop: returns at the seller’s discretion',
      content: [
        { kind: 'paragraph', text: 'A purchase in a physical shop with no defect — return is NOT guaranteed by law. Everything depends on the shop’s policy.' },
        { kind: 'checklist', items: [
          '🏬 Large chains (Continente, Pingo Doce, Worten, Fnac, H&M, Zara) often give 15–30 days',
          '🧾 A receipt is required, and the item must be in its original packaging',
          '💳 Usually refunds are made to the card if you paid by card, or a voucher for the same amount is issued',
          '🛍️ During seasonal sales, the rule “exchange only” often applies',
          '⚠️ Without a receipt, the chances are practically zero'
        ]},
        { kind: 'warning', text: 'The existence of a “14-day right of return” in a physical shop is a myth. It is the seller’s discretion or an advertising promise.' }
      ]
    },
    {
      id: 'conflicts',
      title: 'Disputes and complaints',
      content: [
        { kind: 'checklist', items: [
          'The seller ignores you — submit a complaint in the Livro de Reclamações (paper version or `livroreclamacoes.pt`)',
          'A copy is automatically sent to ASAE or the sector regulator',
          'In parallel, you can submit a complaint to the Centro de Arbitragem de Conflitos de Consumo in your region (CASA — the specialised Centro de Arbitragem do Sector Automóvel, with separate centres for other sectors)',
          'If the seller is from another EU country — European Consumer Centre Portugal (cec.consumidor.pt)',
          'Julgado de Paz (small claims court) — hears civil cases within its material jurisdiction up to the statutory limit; there is no €200 “threshold”'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Online return delivery', amountEURMin: 5, amountEURMax: 15, note: 'Standard CTT / MRW delivery, the seller may pay for it themselves' },
    { label: 'Julgado de Paz', amountEUR: 70 }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 24/2014 — distance contracts', url: 'https://dre.pt/dre/detalhe/decreto-lei/24-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Directive 2011/83 — consumer rights', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Livro de Reclamações — official portal', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — online purchases and returns', url: 'https://www.gov.pt/cidadaos/-/informacoes/direitos-do-consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
