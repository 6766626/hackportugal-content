export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-correios-services',
  categoryId: 'daily_life',
  title: 'CTT Correios — post, parcels, public services',
  tldr: 'CTT (Correios de Portugal) is the state postal service. In addition to delivering letters and parcels within Portugal and abroad, CTT operates as a bank (Banco CTT), a bill-payment point (Pagamentos), a collection point (CTT Expresso), and in some branches as an Espaço Cidadão. To send a parcel, use a CTT branch or a CTT Box (locker). 2026 prices: letter up to 20 g = €0.55; parcel up to 2 kg — from €5. International collection points: GLS, DPD, DHL, UPS, Amazon at Pingo Doce — use the apps for tracking.',
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
              '✉️ **Letters**: Carta Normal (no tracking) — up to 20 g €0.55 within Portugal, up to 50 g €0.80',
              '📬 **Carta Registada** (registered) — €2.80 + €1.90 for aviso de receção',
              '📦 **Encomenda Postal** (parcel): up to 2 kg — €5.50, up to 5 kg — €9.80, up to 30 kg — €26',
              '🇪🇺 **EU**: Carta up to 20 g — €1.30; 2 kg parcel — €13.50',
              '🌍 **International shipment**: prices according to the table on ctt.pt',
              '⚡ **Carta Verde** (1–2 days): roughly 1.5 times the standard tariff'
            ]}
          ]},
          { id: 's2', title: 'CTT Expresso', content: [
            { kind: 'checklist', items: [
              '🚀 Fast delivery within Portugal in 24 hours — 2 kg parcel from €8',
              '🌐 International express delivery through the DHL/UPS partner network',
              '📍 Tracking automatically by SMS or email',
              '🏛️ Collection point: your local CTT branch or a partner (Pingo Doce, BP, Galp)',
              '⚖️ If the parcel is not collected within 15 days, it is returned to the sender'
            ]}
          ]},
          { id: 's3', title: 'Banco CTT', content: [
            { kind: 'checklist', items: [
              '🏦 Bank founded by CTT in 2016',
              '💳 Free account with no fees',
              '💰 Mortgages, loans, insurance',
              '⚠️ Services are available in CTT branches, but banking operations are handled separately and not by every counter agent',
              '🌐 Website bancoctt.pt'
            ]}
          ]},
          { id: 's4', title: 'Pagamentos and Espaço Cidadão', content: [
            { kind: 'checklist', items: [
              '💸 Bill payment (electricity, water, gas, IRS) — in cash at a branch',
              '🛡️ Lusitania insurance policies',
              '🏛️ Espaço Cidadão (public services) in larger CTT branches: NIF, CC, address change, certificates',
              '💰 Santa Casa lottery tickets',
              '📞 Mobile top-ups for all operators'
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
              '📦 Bring the parcel: pack it in advance if you have a suitable box at home',
              '🆔 Cartão de Cidadão/passport',
              '📋 Fill in the address label (etiqueta)',
              '💳 Pay — by card or cash',
              '📜 Get a tracking number',
              '⏱️ Queue time at the branch is 5–30 minutes: worse at Lisboa Saldanha, better in the suburbs'
            ]}
          ]},
          { id: 'p2', title: 'Via CTT Box (locker)', content: [
            { kind: 'checklist', items: [
              '🤖 Lockers near shopping centres and CTT branches',
              '📱 Pay online in advance on ctt.pt → choose “CTT Box”',
              '🔢 Receive a QR code',
              '🚀 Scan it at the locker, a compartment opens, place the parcel inside',
              '✅ Available 24/7',
              '💰 Same tariffs as at the branch, but without the queue'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'receiving',
      title: '📥 Receive a parcel',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'At home (delivery)', content: [
            { kind: 'checklist', items: [
              '🏠 If the address is correct, the postman leaves the letter in the letterbox and a small parcel at the door',
              '⚠️ If the parcel does not fit, they leave a note (aviso de chegada)',
              '🏛️ Go to the CTT branch with the aviso + Cartão de Cidadão, collect within 15 days',
              '🚚 Large parcels (>5 kg) — they will call and arrange redelivery'
            ]}
          ]},
          { id: 'r2', title: 'From Pingo Doce / BP (CTT Expresso)', content: [
            { kind: 'checklist', items: [
              '📲 SMS or email with the tracking number and partner address',
              '🛒 Pingo Doce / Continente / BP / Galp — most have a CTT point',
              '🆔 Cartão de Cidadão + tracking number',
              '⏱️ Held for 7 days, then sent back'
            ]}
          ]},
          { id: 'r3', title: 'Amazon / international shipments', content: [
            { kind: 'checklist', items: [
              '🛒 Amazon usually delivers via CTT Expresso or GLS',
              '🚚 GLS — through its own locker or a partner',
              '📦 DHL Express — DHL point or DHL branch',
              '🚚 UPS Access Point: grocery shops, AKI, petrol stations',
              '⚠️ If the parcel is from outside the EU and worth more than €150 — customs clearance through Finanças, IVA + import duties',
              '💸 IVA 23% + CTT handling fee of about €7–13'
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
          '📦 **CTT Mobile** (App Store / Google Play) — tracking, CTT branch search, tariffs',
          '🚚 **PostManager** — universal tracker for CTT, GLS, DHL, UPS',
          '📍 **17track** — for international parcels (Aliexpress, eBay)',
          '🛒 **Amazon** — built-in tracking',
          '🇪🇺 **EasyTrack** — single tracker for carriers in the EU'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📦 Packing at home saves money — at a CTT branch, a box costs about €5 extra',
          '📅 Monday has the longest queues: shipments have built up over the weekend. Thursday is better',
          '⏰ After 16:00, the shipment will no longer leave the same day: the collection vehicle has gone',
          '🇷🇺/🇧🇾 Sending to the Russian Federation/Belarus: restrictions since 2022. Money can be sent via Wise/PayPal equivalents, but physical parcels only via third countries',
          '🌐 Aliexpress / Temu — usually 14–30 days, sometimes parcels get lost. You can request a refund through the platform',
          '🛡️ Registered letter (Carta Registada) — for important papers: contracts, AT documents',
          '⚖️ If CTT loses a parcel: livro de reclamações + Anacom (anacom.pt → Reclamação)',
          '🏠 A letterbox is mandatory: every home has one; check that your flat number is on it',
          '📨 For urgent document shipments — DHL/UPS are faster, but 5–10 times more expensive',
          '💰 Continente Card cashback works when paying bills via CTT Pagamentos'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Carta Normal up to 20 g (PT)', amountEUR: 0.55 },
    { label: 'Carta Registada with aviso', amountEUR: 4.70 },
    { label: '2 kg parcel (PT)', amountEUR: 5.50 },
    { label: '5 kg parcel (PT)', amountEUR: 9.80 },
    { label: '2 kg parcel to the EU', amountEUR: 13.50 },
    { label: 'CTT Expresso 24h up to 2 kg', amountEURMin: 8, amountEURMax: 12 },
    { label: 'IVA + customs clearance (>€150)', amountEURMin: 25, amountEURMax: 60, note: 'percentage of value' }
  ],
  sources: [
    { title: 'CTT — Correios de Portugal', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — postal services regulator', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
