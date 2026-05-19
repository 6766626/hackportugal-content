export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-correios-services',
  categoryId: 'daily_life',
  title: 'CTT Correios — post, parcels, public services',
  tldr: 'CTT (Correios de Portugal) is a privatised company operating under the universal postal service concession. In addition to delivering letters and parcels, CTT operates as a bank (Banco CTT), a bill-payment point (Pagamentos), a collection point and, in some branches, as Espaço Cidadão. Tariffs change often — check current prices in the CTT tarifário/simulator. International collection points: GLS, DPD, DHL, UPS, Amazon — use the apps for tracking.',
  tags: ['ctt', 'post', 'parcel', 'correios', 'bank', 'amazon'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'services',
      title: '📮 What CTT does',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Post (core service)', content: [
            { kind: 'checklist', items: [
              '✉️ Letters: Carta Normal (without tracking) — tariffs depend on weight, check the current ones in the CTT tarifário',
              '📬 Carta Registada (registered post) + optional aviso de receção (extra fee)',
              '📦 Encomenda Postal (parcel): tariffs by weight category, see the CTT table',
              '🇪🇺 EU: tariffs depend on weight/format, see the CTT international tariff',
              '🌍 International sending: prices according to the table on ctt.pt',
              '⚡ Correio Verde — a prepaid envelope/packaging product (not a “speed surcharge”); the price depends on the envelope format'
            ]}
          ]},
          { id: 's2', title: 'CTT Expresso', content: [
            { kind: 'checklist', items: [
              '🚀 Fast delivery within Portugal in 24 hours — 2 kg parcel from €8',
              '🌐 International express delivery through CTT’s own network and partners (DHL/UPS are separate companies and are not integrated as CTT partners by default)',
              '📍 Tracking automatically by SMS or email',
              '🏛️ Collection point: your local CTT branch or a partner (Pingo Doce, BP, Galp — but not all locations; depends on the point)',
              '⚖️ Storage time depends on the product (for post offices usually ~10-15 days, for lockers/pickup points it may be shorter); check the aviso'
            ]}
          ]},
          { id: 's3', title: 'Banco CTT', content: [
            { kind: 'checklist', items: [
              '🏦 A bank founded by CTT in 2016',
              '💳 Free account with no fees',
              '💰 Mortgages, loans, insurance',
              '⚠️ Services are available in CTT branches, but banking operations are handled separately and not by every counter operator',
              '🌐 Website bancoctt.pt'
            ]}
          ]},
          { id: 's4', title: 'Pagamentos and Espaço Cidadão', content: [
            { kind: 'checklist', items: [
              '💸 Bill payments (electricity, water, gas, IRS) — in cash at the branch',
              '🛡️ Lusitania insurance policies',
              '🏛️ Espaço Cidadão (public services) in some CTT branches — the set of services depends on the location; typically: address change, applications, certificates. Cartão de Cidadão services are limited, and NIF for foreigners is usually NOT issued at CTT/Espaço Cidadão',
              '💰 Santa Casa lottery tickets',
              '📞 Mobile phone top-up for all operators'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: '📤 How to send a parcel',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'At a CTT branch (classic method)', content: [
            { kind: 'checklist', items: [
              '🏛️ Find the nearest branch: ctt.pt → “Encontrar Loja”',
              '📦 Arrive with the parcel: pack it in advance if you have a suitable box at home',
              '🆔 Cartão de Cidadão/passport',
              '📋 Fill in the address form (etiqueta)',
              '💳 Pay — by card or cash',
              '📜 Receive the tracking number',
              '⏱️ Queue at the branch: 5–30 minutes. Worse at Lisboa Saldanha, better in the suburbs'
            ]}
          ]},
          { id: 'p2', title: 'Via CTT Locky / cacifos (locker)', content: [
            { kind: 'checklist', items: [
              '🤖 CTT cacifos network (Locky) — near shopping centres and CTT branches',
              '📱 Pay online in advance on ctt.pt and choose a cacifo',
              '🔢 Receive a QR code',
              '🚀 Scan it at the locker, the compartment opens, place the parcel inside',
              '✅ Available 24/7',
              '💰 Prices/conditions depend on the product; for some formats, online is cheaper than the counter — check before sending'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'receiving',
      title: '📥 Receiving a parcel',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'At home (delivery)', content: [
            { kind: 'checklist', items: [
              '🏠 If the address is correct — the postman leaves the letter in the letterbox, and a small parcel at the door',
              '⚠️ If the parcel does not fit — they leave a note (aviso de chegada)',
              '🏛️ Go to the CTT branch with the aviso + Cartão de Cidadão (or passport/residence permit for foreigners); storage time is usually ~10-15 days, depending on the product',
              '🚚 Large parcels (>5 kg) — they will call and arrange redelivery'
            ]}
          ]},
          { id: 'r2', title: 'From Pingo Doce / BP (CTT Expresso)', content: [
            { kind: 'checklist', items: [
              '📲 SMS or email with the tracking number and partner address',
              '🛒 Pingo Doce / Continente / BP / Galp — some locations have a CTT pickup point (not all; check in tracking)',
              '🆔 Cartão de Cidadão + tracking number',
              '⏱️ Kept for 7 days, then sent back'
            ]}
          ]},
          { id: 'r3', title: 'Amazon / international shipments', content: [
            { kind: 'checklist', items: [
              '🛒 Amazon usually delivers via CTT Expresso or GLS',
              '🚚 GLS — through its own locker or partner',
              '📦 DHL Express — DHL point or DHL branch',
              '🚚 UPS Access Point: grocery shops, AKI, petrol stations',
              '⚠️ Import IVA applies to non-EU parcels and below €150 (the €150 threshold relates mainly to customs duties). Customs clearance is usually through the CTT customs portal/customs broker',
              '💸 IVA: 23% mainland, 16% Madeira, 16% Açores (regional rates); + CTT handling fee, depends on shipment type and IOSS/prepaid VAT status'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Useful apps',
      content: [
        { kind: 'checklist', items: [
          '📦 CTT Mobile (App Store / Google Play) — tracking, CTT branch search, tariffs',
          '🚚 PostManager — universal tracker for CTT, GLS, DHL, UPS',
          '📍 17track — for international parcels (Aliexpress, eBay)',
          '🛒 Amazon — built-in tracking',
          '🇪🇺 EasyTrack — single tracker for carriers in the EU'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📦 Packing at home saves money — at a CTT branch a box costs extra, around €5',
          '📅 Monday has the biggest queues: weekend shipments have built up. Better to go on Thursday',
          '⏰ After 16:00, the item will no longer go out the same day: the collection vehicle has left',
          '🇷🇺/🇧🇾 Sending parcels to the Russian Federation/Belarus: restrictions have applied since 2022; check current CTT rules/sanctions requirements before sending',
          '🌐 Aliexpress / Temu — normally 14–30 days, sometimes they get lost. You can request a refund through the platform',
          '🛡️ Registered letter (Carta Registada) — for important papers: contracts, AT documents',
          '⚖️ If CTT has lost a parcel: livro de reclamações + Anacom (anacom.pt → Reclamação)',
          '🏠 A letterbox is mandatory: every home has a box, check your flat number on it',
          '📨 For urgent document sending — DHL/UPS are faster, but 5–10 times more expensive',
          '💰 Cashback with the Continente Card works when paying bills via CTT Pagamentos'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Carta Normal up to 20g (PT)', amountEURMin: 0.55, amountEURMax: 0.65, note: 'CTT tariffs change — see the tarifário' },
    { label: 'Carta Registada + aviso', amountEURMin: 4.5, amountEURMax: 5.5, note: 'see the current price on ctt.pt' },
    { label: '2 kg parcel (PT)', amountEURMin: 5.5, amountEURMax: 7, note: 'see the tarifário' },
    { label: '5 kg parcel (PT)', amountEURMin: 9, amountEURMax: 12 },
    { label: '2 kg parcel to the EU', amountEURMin: 13, amountEURMax: 18 },
    { label: 'CTT Expresso 24h up to 2 kg', amountEURMin: 8, amountEURMax: 15 },
    { label: 'CTT customs clearance (handling fee)', amountEURMin: 7, amountEURMax: 15, note: 'plus IVA on the goods value; depends on shipment type and IOSS/prepaid VAT' }
  ],
  sources: [
    { title: 'CTT — Correios de Portugal', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — postal services regulator', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
