export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-aggregator',
  categoryId: 'daily_life',
  title: 'Discount cards, promo codes and cashback in Portugal — where to save',
  tldr: 'Main loyalty programmes: Cartão Continente (Continente — the strongest, discounts + accumulation for Galp fuel), Pingo Doce Poupa Mais (with BP), Cartão Jovem Europeu (for ages 12-29, discounts in 60+ shops and museums), Decathlon Card (10% return on Decathlon brands), KIWOKO Card (pet shops, free with registration), Oceanário/Zoo de Lisboa (annual pass pays for itself in 2 visits).\n\nCashback sites: Letyshops PT, eBuyClub PT. Promo aggregators: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt. For festivals, concerts and cultural events — Cartão Jovem gives up to 50% discount (huge savings for students).\n\nAlso: discount programmes Cartão dos Bombeiros, Cartão de Família Numerosa, IRS refund through e-fatura.',
  tags: ['discounts', 'promo codes', 'cartão continente', 'cashback', 'saving'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'supermarkets',
      title: 'Supermarkets — the biggest savings',
      content: [
        { kind: 'paragraph', text: 'Cartão Continente is the strongest loyalty programme in Portugal. According to the chain’s own data, active users save ~10% of their annual basket total. Pingo Doce is in second place.' },
        { kind: 'substeps', items: [
          {
            id: 'continente',
            title: 'Cartão Continente',
            content: [
              { kind: 'checklist', items: [
                '🛒 Free: get it in any Continente in 1 minute (passport + email)',
                '⛽ Accumulation: 10 cents per litre of fuel at Galp goes to your Continente balance (Galp Frota)',
                '💸 Minimum 2% accumulated discounts on your annual purchase amount',
                '🎟️ Exclusive coupons: personal “cupões” arrive in the app + by SMS, sometimes 30-50% off categories',
                '🆕 Continente Carrega: subscription for “5%/10% off” in Continente shops (paid, pays off if you spend >€150/month)',
                '📱 “Continente” app — essential, coupons cannot be activated without it'
              ]}
            ]
          },
          {
            id: 'pingo',
            title: 'Pingo Doce Poupa Mais',
            content: [
              { kind: 'checklist', items: [
                '🛒 Free: get it in-store, register on pingodoce.pt',
                '⛽ BP fuel programme: €2 on your BP fuel balance for every €40 in Pingo Doce',
                '⛽ 1,000 BP Premier Plus points = €5 in Pingo Doce',
                '💸 “Ganhe 20%”: some products give 20% back to your Poupa Mais balance',
                '📱 “Pingo Doce” app — for activating coupons'
              ]}
            ]
          },
          {
            id: 'lidl',
            title: 'Lidl Plus / Auchan Plus',
            content: [
              { kind: 'checklist', items: [
                '🛒 Lidl Plus: free via the app — weekly coupons, “bonus queue” scratch cards',
                '🛒 Auchan Plus: free, points accumulated are converted into a discount',
                '🛒 Mini Preço, Aldi: no loyalty programmes, discounts only through weekly promotions'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'youth-card',
      title: 'Cartão Jovem Europeu — a must-have for ages 12-29',
      content: [
        { kind: 'paragraph', text: 'State programme from IPDJ (Instituto Português do Desporto e Juventude). Valid in all 38 countries of the European Youth Card Association. Validity period is 1 year. Since 2024 issuance of the standard Cartão Jovem in Portugal is free (it previously cost €10).' },
        { kind: 'checklist', items: [
          '🎯 Age: 12-29 (inclusive)',
          '💶 Price: free since 2024 (previously €10). Term: 1 year',
          '🎫 Discounts in Portugal: ~60 business categories from cinema (FNAC -10%) to festivals (NOS Alive -15%)',
          '🚊 Transport: CP (trains) -25%, FlixBus -10%, Carris -50% on the tourist pass',
          '🏛️ Museums: free entry to many state museums in Lisbon/Porto',
          '🌍 Abroad: hostels, bars, cafés, gyms — a million offers across Europe',
          '🎓 School/university students: application through school/university, sometimes free',
          '🌐 cartaojovem.pt — ordering, checking current promos'
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
          '📉 Discounts: ~20% on public transport, museums, swimming pools, cultural events',
          '🏠 Discounts on electricity (EDP), internet (MEO, NOS, Vodafone) — usually 20-30%',
          '🎓 Discounts in schools, kindergartens and camps',
          '📋 How to get it: through ACSS (Conselho Nacional Famílias Numerosas), children’s birth certificates are needed',
          '🌐 famnumerosas.pt'
        ]}
      ]
    },
    {
      id: 'specific-stores',
      title: 'Programmes for specific shops',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'pet',
            title: 'Pet shops',
            content: [
              { kind: 'checklist', items: [
                '🐶 KIWOKO Card: free, 5% back on KIWOKO brands, discounted vet consultations',
                '🐶 Petland Card: free, bonus points',
                '🐶 PetXP / Animais & Cª: local programmes, ask in-store'
              ]}
            ]
          },
          {
            id: 'sport',
            title: 'Sport',
            content: [
              { kind: 'checklist', items: [
                '⚽ Decathlon Card: free via the app, 10% back on Decathlon brands (Quechua, Domyos, Kalenji), free returns for items within 365 days',
                '🏃 Sport Zone Card: free, discounts during promotions',
                '🏃 SportLife / Worten Sport: local programmes'
              ]}
            ]
          },
          {
            id: 'culture',
            title: 'Culture and entertainment',
            content: [
              { kind: 'checklist', items: [
                '🎪 Oceanário de Lisboa: annual pass €39 (adult) — pays for itself in 2 visits (entry €22). Children enter free with a parent’s pass',
                '🦁 Jardim Zoológico de Lisboa: annual pass €50 — pays for itself in 3 visits',
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
                '👗 Cartão Springfield / OYSHO / Mango: free via the brand app',
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
      title: 'Cashback sites and coupons',
      content: [
        { kind: 'checklist', items: [
          '💸 Letyshops Portugal: 2-15% return on purchases in major shops (Amazon PT, MediaMarkt, Booking.com); withdrawal after €5 accumulated',
          '💸 eBuyClub PT: same principle, more active in clothing',
          '💸 ShopBuddies PT: focus on FashionUnited',
          '🎟️ Radarcupao.pt: catalogue of active promo codes for Portuguese e-shops',
          '🎟️ Ocacapromocoes.pt: “promo hunting” — community finds and coupons',
          '🎟️ Cuponation.pt: international equivalent',
          '📰 Mensagem-Mexer / Lifestyle blogs: periodically post first-order codes (Uber Eats, Glovo, Bolt Food)'
        ]}
      ]
    },
    {
      id: 'efatura',
      title: 'e-Fatura — VAT refund through the tax authority',
      content: [
        { kind: 'paragraph', text: 'Every time you give your NIF at the checkout, you add the receipt to e-Fatura.gov.pt. At the end of the year, you can recover part of the IVA (VAT) as a deduction from IRS. This is not a “discount”, but real money back.' },
        { kind: 'checklist', items: [
          '🍽️ Restaurants and catering: 15% of IVA',
          '🚗 Car and motorcycle repairs: 15% of IVA',
          '💇 Hairdressers/beauty salons: 15% of IVA',
          '🐾 Veterinary services: 15% of IVA (medicines for animals — 35%)',
          '💪 Gyms, transport passes, newspapers and magazines: 15% of IVA',
          '⚠️ Combined limit for all these categories — €250 per year together (not €250 each)',
          '🏠 Gas, electricity, water: 15% of IVA',
          '🎓 Education (including courses, tutors): 30% (max €800)',
          '🏥 Health (including pharmacies): 15% (max €1000)',
          '⚠️ IMPORTANT: give your NIF, otherwise the receipt is not counted. After purchase, check on e-fatura.portaldasfinancas.gov.pt — there you can “approve” disputed receipts'
        ]},
        { kind: 'paragraph', text: 'For more details — see the separate “e-Fatura deductions” guide.' }
      ]
    }
  ],
  sources: [
    { title: 'Cartão Continente — official website', url: 'https://cartaocontinente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Pingo Doce — Poupa Mais', url: 'https://www.pingodoce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IPDJ — Cartão Jovem Europeu (official website)', url: 'https://cartaojovem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ACSS — Conselho Nacional Famílias Numerosas', url: 'https://famnumerosas.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — e-Fatura', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365,
  changeSummary: 'New guide: discount cards and promos in Portugal. Cartão Continente (main one), Pingo Doce Poupa Mais, Cartão Jovem Europeu (ages 12-29, ~60 discount categories), Cartão Família Numerosa (for 3+ children), shop programmes (KIWOKO, Decathlon, FNAC), cashback sites (Letyshops, eBuyClub), coupon aggregators (Radarcupao, Ocacapromocoes), e-Fatura IVA refund through IRS.'
}
