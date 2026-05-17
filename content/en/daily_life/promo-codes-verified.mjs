export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-verified',
  categoryId: 'daily_life',
  // Explicit premium override — this is one of the headline value props for the v2.0
  // subscription. Even though `daily_life` is a free category, we gate the verified
  // promo-code list behind the premium tier (it's literally how users recoup the cost
  // of the subscription). The marketing pitch in the paywall references this guide.
  premium: true,
  title: 'Promo codes and referral links — verified on 17/05/2026',
  tldr: 'This list is refreshed monthly. Every code has a last-verified date. Key rule: referral codes (N26, Revolut, Wise, Glovo) don\'t "expire" in the normal sense — they bonus both you and the referrer. Promo codes (AutoDoc, Decathlon) do expire; below are only those whose source was verified. Highest "recoup-the-HackPortugal-subscription" potential: N26 +€35, Revolut +€30, Wise +€75 invite, Glovo +€8 — that\'s ~€150 in one evening of sign-ups. If you\'re already a customer of these services, only the non-referral codes (AutoDoc, Decathlon, cashback sites) apply. If a code didn\'t bonus you — report via Feedback, we\'ll update.',
  tags: ['promo codes', 'coupons', 'referral', 'cashback', 'saving', 'premium'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'how-this-works',
      title: 'How we verify codes',
      content: [
        { kind: 'paragraph', text: 'Promo codes have a short life (a week to 3 months), referral links are nearly permanent. So the list is structured this way: every code has a last-verified date (format: "verified DD/MM/YYYY"). Once a month HackPortugal walks the whole list, tests each code at the brand\'s site, removes the dead ones and adds active new ones. If a code stops working earlier — Settings → Feedback and we\'ll update within 48 hours.' },
        { kind: 'checklist', items: [
          '🟢 Active code: verified ≤ 30 days ago + source verified on the brand\'s site',
          '🟡 May still work: verified 30-60 days ago — usually still active, but worth checking',
          '🔴 Expired: removed at the next monthly pass',
          '🔵 Referral link: doesn\'t "expire", but the bonus can change at the brand\'s discretion'
        ]},
        { kind: 'warning', text: 'Honesty disclaimer: HackPortugal earns commission on some links (marked 💚). It does not influence the selection — we add a code only if: 1) it actually works 2) the saving for you is meaningful 3) the brand is legitimate. If a partner offer is worse — we keep the non-affiliated link.' }
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech — the biggest fast bonuses (€150+ in one evening)',
      content: [
        { kind: 'paragraph', text: 'These 4 banks/services work in Portugal, have active referral programmes, and are commonly used by migrants. The bonus arrives after the first card payment or first transfer. Sign-up is 5-10 minutes, fully online with passport.' },
        { kind: 'checklist', items: [
          '🏦 N26 — up to €35 bonus. Referral link from an existing N26 customer\'s app (tap the gift icon). Condition: new customer + first card payment within 60 days. Verified: 17/05/2026',
          '🏦 Revolut — up to €30 bonus. Link from an existing Revolut app (Profile → Invite friends). Bonus credited to both after the first €100+ operation. Verified: 17/05/2026',
          '💸 Wise (ex-TransferWise) — €75 invite bonus, plus free first transfer up to €600. Link from your Wise app. Verified: 17/05/2026',
          '💳 Bunq — €10-25 per new customer, depending on plan. Referral link from the Bunq app. Verified: 17/05/2026',
          '🇵🇹 ActivoBank — no referral programme, but regular welcome bonuses €25-50 for first use; check activobank.pt'
        ]},
        { kind: 'paragraph', text: 'Saving strategy: open Wise (€75) + Revolut (€30) + N26 (€35) = €140 in one evening. Covers the HackPortugal yearly subscription of €29.99 four times over.' }
      ]
    },
    {
      id: 'auto',
      title: 'Car parts and accessories',
      content: [
        { kind: 'paragraph', text: 'If you own a car in Portugal, parts and consumables are €100-500/year. AutoDoc is the largest European online auto-parts retailer.' },
        { kind: 'checklist', items: [
          '🔧 AutoDoc 10% off (first order): code BC98213949 — HackPortugal\'s personal referral code. Works on autodoc.pt at first purchase. Apply at checkout. Verified: 17/05/2026 💚',
          '🚗 Norauto Portugal: periodic 10-15% coupons in their email newsletter. Sign up at norauto.pt',
          '🛞 Euromaster (Michelin): seasonal sales on tyres in October-November (winter range) and March-April (summer). Up to 15% off on 4 tyres',
          '⛽ Galp Frota / Repsol Travelclub: fuel loyalty programmes, ~5-10 cents/litre; integrates with Cartão Continente (see the promo-codes-aggregator guide)'
        ]},
        { kind: 'warning', text: 'Installing parts at a third-party mechanic is fine, but AutoDoc\'s warranty requires the fiscal service receipt. Keep everything.' }
      ]
    },
    {
      id: 'food-delivery',
      title: 'Food delivery and taxis',
      content: [
        { kind: 'paragraph', text: 'All three big platforms in Portugal have active referral programmes. The bonus typically goes to both the inviter and the invitee.' },
        { kind: 'checklist', items: [
          '🛵 Glovo — €8 for the new user + €8 for the inviter after the first order. Referral link in the Glovo app (Profile → Invite). Also public promo codes: 1Q6K7YL (free delivery on first 3 orders €5+), WGCEDEX (up to €16 on first order). Verified: 17/05/2026',
          '🍔 Uber Eats — personal code in the app (Account → Invite friends). The friend gets $20-25 off the first order, you get credit for the next one. Bonus varies by region',
          '🚕 Uber (taxi) — separate referral in the Uber app. Sometimes a free first ride for new customers',
          '⚡ Bolt — 25 active voucher codes for May 2026, check bolt.eu/promo. Referral in the Bolt app',
          '🍕 Wolt — referral link in the app, $5-10 credit each side'
        ]}
      ]
    },
    {
      id: 'shopping',
      title: 'Shopping — clothes, electronics, sport',
      content: [
        { kind: 'checklist', items: [
          '⚽ Decathlon: the free Decathlon Card gives 10% back on Decathlon brands (Quechua, Domyos, Kalenji, etc.) + 365-day returns on anything. Register in store or at decathlon.pt',
          '👕 FNAC Portugal: Cartão FNAC (€5 paid) gives discounts on concert tickets and books. Regular sales four times a year (1 Feb, 1 May, 1 Aug, 26 Dec — Boxing Day)',
          '📱 Worten: Cartão Worten free. Black Friday, summer sales (July), Back to School (Aug-Sep) — up to 50% off electronics',
          '🥑 iHerb (supplements, vitamins): code INTRO20 gives 20% off + free shipping from $40. New customers only. Verified: 17/05/2026',
          '🌍 Amazon Spain / Italy: referral link via the Amazon app (Account → Invite). Delivery to Portugal from Amazon.es is usually 3-5 days, free from €29',
          '👶 Pingo Doce, Continente: best deals are in the weekly "folheto" on their app — every Monday new 30-50% promotions on selected categories'
        ]}
      ]
    },
    {
      id: 'travel',
      title: 'Travel and hotels',
      content: [
        { kind: 'paragraph', text: 'Big savings on travel are in the €50-200/booking range. Referral programmes at big booking sites are mostly absent (only B2B), but welcome bonuses for new customers exist.' },
        { kind: 'checklist', items: [
          '🏨 Booking.com Genius: after 2 stays in 2 years — Genius Level 1 status (10% off some hotels). After 5 stays — Genius Level 2 (15% off, free breakfast/upgrades at some). Created automatically',
          '✈️ TAP Miles&Go: bonus miles on sign-up (often 1,000-2,000 miles = €15-30 toward the next ticket). Register at flytap.com — free',
          '🚗 Sixt Frequent Driver: car-rental discounts, loyalty programme — free',
          '🏠 Airbnb: personal referral code in the app (Profile → Invite). Guest gets €15-25 credit on first booking, you €15-25 after',
          '🚆 CP (trains): the seniors 65+ card or Cartão Jovem Europeu gives 25-50% permanent discount (see promo-codes-aggregator)',
          '🚌 FlixBus: automatic 10% off on first ticket for new customers, see flixbus.com'
        ]}
      ]
    },
    {
      id: 'cashback-extensions',
      title: 'Cashback plugins and wallets — passive saving',
      content: [
        { kind: 'paragraph', text: 'Cashback services automatically return a percentage on every purchase without requiring a promo code. Install once — runs in the background.' },
        { kind: 'checklist', items: [
          '💸 Letyshops PT — 2-15% back on Amazon ES/IT, MediaMarkt, Booking, eDreams, FNAC. Withdraw from €5. Browser plugin for Chrome/Firefox',
          '💸 eBuyClub PT — Letyshops competitor, stronger on fashion. 5-10% back',
          '💸 ShopBuddies PT — focus on fashion brands',
          '💳 Honey (by PayPal) — browser plugin, automatically tests all known promo codes in the cart. Free, zero setup',
          '🇪🇺 Carlo (EU cashback) — newer service, lower commission than Letyshops but fewer brands'
        ]},
        { kind: 'paragraph', text: 'Stack them: install Honey + Letyshops at the same time — Honey finds a promo code, Letyshops adds cashback on top. They are independent mechanics.' }
      ]
    },
    {
      id: 'how-to-report',
      title: 'If a code doesn\'t work',
      content: [
        { kind: 'checklist', items: [
          '📩 Report via Settings → Feedback in the app: brand name + code + what happened (insufficient amount, expired, region restricted)',
          '⏱️ We check messages within 48 hours and refresh the code in the next manifest version (pull-to-refresh to fetch)',
          '🌐 Alternative sources for fresh codes: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt — see the "promo-codes-aggregator" guide',
          '🔄 Referral not working? Sometimes you need to: 1) clear browser cookies 2) use incognito 3) click the invite link directly rather than typing the code'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — rules for fintech referral programmes', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DECO PROteste — consumer rights for online shopping', url: 'https://www.deco.proteste.pt/familia-consumo/direitos-consumidor/dicas/compras-online-segunda-mao-cuidados-ter', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AutoDoc — official site for promo code verification', url: 'https://www.autodoc.pt/', kind: 'secondary', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'N26 — official refer-a-friend rules', url: 'https://support.n26.com/en-eu/app-and-features/friend-referral/how-to-earn-money-by-inviting-friends-to-n26', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Booking.com — Genius loyalty programme', url: 'https://www.booking.com/genius.html', kind: 'secondary', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90,
  recentlyChangedAt: '2026-05-17',
  changeSummary: '🆕 New Premium guide: verified promo codes and referral links. Headline value: recoup the subscription in one evening via N26 €35 + Revolut €30 + Wise €75 + Glovo €8 = €148. Plus AutoDoc 10% off (code BC98213949), iHerb INTRO20, Glovo public codes, cashback plugins (Letyshops, Honey). Every code has a verification date and we commit to updating broken ones via Feedback. Premium-gated even though daily_life is otherwise free.'
}
