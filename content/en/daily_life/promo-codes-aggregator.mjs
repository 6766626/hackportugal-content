export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-aggregator',
  categoryId: 'daily_life',
  title: 'Discount cards, promo codes and cashback in Portugal — where to save',
  tldr: 'Main loyalty programmes: Cartão Continente (Continente — the strongest, discounts + Galp fuel balance), Pingo Doce Poupa Mais (with BP), Cartão Jovem Europeu (12-29 yrs, discounts at 60+ stores and museums), Decathlon Card (10% back on Decathlon brands), KIWOKO Card (pet shops, free with registration), Oceanário/Zoo de Lisboa (annual pass pays off in 2 visits). Cashback sites: Letyshops PT, eBuyClub PT. Promo aggregators: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt. At festivals, concerts and cultural events — Cartão Jovem gives up to 50% off (huge for students). Also: bombeiros, large-family card, IRS-VAT refund via e-fatura.',
  tags: ['discounts', 'promo', 'cartao continente', 'cashback', 'saving'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'supermarkets',
      title: 'Supermarkets — the main saving',
      content: [
        { kind: 'paragraph', text: 'Cartão Continente is the strongest loyalty programme in Portugal. According to the chain itself, active users save ~10% on their annual basket. Pingo Doce is second.' },
        { kind: 'substeps', items: [
          {
            id: 'continente',
            title: 'Cartão Continente',
            content: [
              { kind: 'checklist', items: [
                '🛒 Free: pick one up at any Continente in 1 minute (passport + email)',
                '⛽ Accumulation: 10 cents per litre of fuel at Galp goes to your Continente balance (Galp Frota)',
                '💸 At least 2% accumulated discount on annual purchases',
                '🎟️ Exclusive vouchers: personal "cupões" arrive via app + SMS, sometimes 30-50% off on entire categories',
                '🆕 Continente Carrega: subscription for "5%/10% off" in Continente stores (paid, worth it if you spend >€150/month)',
                '📱 "Continente" app — required; without it the vouchers won\'t activate'
              ]}
            ]
          },
          {
            id: 'pingo',
            title: 'Pingo Doce Poupa Mais',
            content: [
              { kind: 'checklist', items: [
                '🛒 Free: pick one up in store, register on pingodoce.pt',
                '⛽ BP fuel programme: €2 on BP fuel balance for every €40 in Pingo Doce',
                '⛽ 1,000 BP Premier Plus points = €5 to spend at Pingo Doce',
                '💸 "Ganhe 20%": some products give 20% back on the Poupa Mais balance',
                '📱 "Pingo Doce" app — to activate vouchers'
              ]}
            ]
          },
          {
            id: 'lidl',
            title: 'Lidl Plus / Auchan Plus',
            content: [
              { kind: 'checklist', items: [
                '🛒 Lidl Plus: free in the app — weekly vouchers, scratch-cards "bonus checkout"',
                '🛒 Auchan Plus: free, point accumulation converts to discount',
                '🛒 Minipreço, Aldi: no loyalty programme, only weekly promotions'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'youth-card',
      title: 'Cartão Jovem Europeu — must-have for 12-29 year olds',
      content: [
        { kind: 'paragraph', text: 'Government programme from IPDJ (Instituto Português do Desporto e Juventude). Valid in all 38 countries of the European Youth Card Association. 1-year validity, €11 (€8 online).' },
        { kind: 'checklist', items: [
          '🎯 Age: 12-29 (inclusive)',
          '💶 Price: €8 (online) or €11 (in IPDJ offices). Valid 1 year',
          '🎫 Discounts in Portugal: ~60 business categories from cinema (FNAC -10%) to festivals (NOS Alive -15%)',
          '🚊 Transport: CP (trains) -25%, FlixBus -10%, Carris -50% on the tourist pass',
          '🏛️ Museums: free entry to many state museums in Lisbon and Porto',
          '🌍 Abroad: hostels, bars, cafés, gyms — millions of offers across Europe',
          '🎓 Students: apply through school/university, sometimes free',
          '🌐 cartaojovem.pt — ordering, checking active promotions'
        ]}
      ]
    },
    {
      id: 'family-card',
      title: 'Cartão de Família Numerosa — for large families',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 For families with 3+ children (biological or adopted)',
          '💶 Free',
          '📉 Discounts: ~20% on state transport, museums, pools, cultural events',
          '🏠 Discounts on electricity (EDP), internet (MEO, NOS, Vodafone) — usually 20-30%',
          '🎓 Discounts at schools, kindergartens, camps',
          '📋 Get: via ACSS (Conselho Nacional Famílias Numerosas), need birth certificates for the children',
          '🌐 famnumerosas.pt'
        ]}
      ]
    },
    {
      id: 'specific-stores',
      title: 'Store-specific programmes',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'pet',
            title: 'Pet stores',
            content: [
              { kind: 'checklist', items: [
                '🐶 KIWOKO Card: free, 5% back on KIWOKO brands, discounted vet consultations',
                '🐶 Petland Card: free, bonus points',
                '🐶 PetXP / Animais & Cª: local programmes, ask in store'
              ]}
            ]
          },
          {
            id: 'sport',
            title: 'Sport',
            content: [
              { kind: 'checklist', items: [
                '⚽ Decathlon Card: free via app, 10% back on Decathlon brands (Quechua, Domyos, Kalenji), free returns within 365 days',
                '🏃 Sport Zone Card: free, discounts during promo periods',
                '🏃 SportLife / Worten Sport: local programmes'
              ]}
            ]
          },
          {
            id: 'culture',
            title: 'Culture and entertainment',
            content: [
              { kind: 'checklist', items: [
                '🎪 Oceanário de Lisboa: annual pass €39 (adult) — pays off in 2 visits (entry €22). Children free with parent\'s pass',
                '🦁 Jardim Zoológico de Lisboa: annual pass €50 — pays off in 3 visits',
                '🎬 NOS Cinemas Club: free, accumulation on tickets, free 10th ticket',
                '🎬 UCI Cinemas Card: similar programme',
                '🎟️ FNAC Card: €5 paid, discounts on concert tickets and books'
              ]}
            ]
          },
          {
            id: 'fashion',
            title: 'Clothing',
            content: [
              { kind: 'checklist', items: [
                '👕 Cartão Worten: free, discounts and bonus points',
                '👗 Cartão Springfield / OYSHO / Mango: free via the brand\'s app',
                '👠 Cartão MO: free, discounts on exclusive collections',
                '👞 Cartão Cinco / Salsa: free, local cashback'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'cashback',
      title: 'Cashback sites and vouchers',
      content: [
        { kind: 'checklist', items: [
          '💸 Letyshops Portugal: 2-15% back on large e-shops (Amazon PT, MediaMarkt, Booking.com); withdrawal after €5 accumulated',
          '💸 eBuyClub PT: same model, more active in fashion',
          '💸 ShopBuddies PT: focused on FashionUnited',
          '🎟️ Radarcupao.pt: catalog of active promo codes for Portuguese e-shops',
          '🎟️ Ocacapromocoes.pt: "promo hunting" — community of finds and codes',
          '🎟️ Cuponation.pt: international counterpart',
          '📰 Mensagem-Mexer / lifestyle blogs: regularly post first-order codes (Uber Eats, Glovo, Bolt Food)'
        ]}
      ]
    },
    {
      id: 'efatura',
      title: 'e-Fatura — IVA refund via the tax authority',
      content: [
        { kind: 'paragraph', text: 'Each time you give your NIF at checkout, the receipt is added to e-Fatura.gov.pt. At year-end you can recover some of the IVA (VAT) as a deduction from IRS. It\'s not a "discount", but real money back.' },
        { kind: 'checklist', items: [
          '🍽️ Restaurants: 15% of IVA (max €250 per year)',
          '🚗 Car and motorcycle repairs: 15% of IVA (max €250)',
          '💇 Hairdressers/beauty salons: 15% of IVA (max €250)',
          '🐾 Vet: 15% (max €250)',
          '🏠 Gas, electricity, water: 15% of IVA',
          '🎓 Education (including courses, tutors): 30% (max €800)',
          '🏥 Health (including pharmacies): 15% (max €1,000)',
          '⚠️ IMPORTANT: give your NIF, otherwise the receipt doesn\'t count. After purchase check on e-fatura.portaldasfinancas.gov.pt — you can "approve" disputed receipts there'
        ]},
        { kind: 'paragraph', text: 'For more — see the separate "e-Fatura deductions" guide.' }
      ]
    }
  ],
  sources: [
    { title: 'Cartão Continente — official site', url: 'https://cartaocontinente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Pingo Doce — Poupa Mais', url: 'https://www.pingodoce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IPDJ — Cartão Jovem Europeu (official site)', url: 'https://cartaojovem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ACSS — Conselho Nacional Famílias Numerosas', url: 'https://famnumerosas.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — e-Fatura', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'New guide: discount cards and promotions in Portugal. Cartão Continente (the main one), Pingo Doce Poupa Mais, Cartão Jovem Europeu (12-29 yrs, ~60 discount categories), Cartão Família Numerosa (for 3+ children), store programmes (KIWOKO, Decathlon, FNAC), cashback sites (Letyshops, eBuyClub), voucher aggregators (Radarcupao, Ocacapromocoes), e-Fatura VAT refund via IRS.'
}
