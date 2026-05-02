export default {
  editorialVoice: 'hackportugal',
  id: 'cp-comboios-intercity',
  categoryId: 'public_transport',
  title: 'CP — trains: Alfa Pendular, Intercidades and suburban services',
  tldr: 'CP (Comboios de Portugal) is the state railway company. Main train categories: Alfa Pendular (fast, Lisbon — Porto 2:50, ~€30), Intercidades (slower, ~€25), Regional/Urbano (suburban and regional). It is best to buy tickets in advance — 60 days ahead via cp.pt or the “CP — Comboios de Portugal” app. Discounts: young people up to 30 — 50%, children aged 4–12 — 50%, ≥65 — 50%. Luggage is free. Bicycles: on Regional, and at weekends on Urbano.',
  tags: ['cp', 'train', 'alfa pendular', 'intercidades', 'lisbon porto', 'train'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'categories',
      title: '🚂 Train categories',
      content: [
        { kind: 'substeps', items: [
          { id: 'ap', title: 'Alfa Pendular (AP) — flagship service', content: [
            { kind: 'checklist', items: [
              '⚡ Lisboa Sta Apolónia/Oriente → Porto Campanhã: 2:50',
              '⚡ Lisbon → Faro: 3:00',
              '🪑 Comfort: 2 classes (Conforto + Turística), Wi-Fi, power sockets, restaurant car',
              '💰 Price: €25–35 standard, 1st class €35–50',
              '🎟️ Booking is mandatory (numbered seats)',
              '📅 Early tickets Tarifa Antecipada: -25% to -50%, available 60 days ahead'
            ]}
          ]},
          { id: 'ic', title: 'Intercidades (IC) — regional expresses', content: [
            { kind: 'checklist', items: [
              '🕐 Lisbon → Porto: 3:30 (~€5 cheaper than AP)',
              '🕐 Lisbon → Faro: 3:30',
              '🕐 Lisbon → Évora / Beja: 1:30 / 3:00',
              '💰 Price: €18–30',
              '🎟️ Booking is mandatory',
              '🪑 1st class is available (€5–10 extra)',
              '🚲 Bicycles in a dedicated carriage (on request)'
            ]}
          ]},
          { id: 'regional', title: 'Regional + InterRegional — slow trains', content: [
            { kind: 'checklist', items: [
              '⏰ All stations, 50–80 km/h',
              '💰 Price: €5–15 (short routes)',
              '🎟️ No booking (day ticket)',
              '🚲 Bicycles free of charge',
              '👨‍👩‍👧 Ideal for short trips: Lisboa-Sintra, Porto-Aveiro'
            ]}
          ]},
          { id: 'urbano', title: 'Urbano — suburban trains', content: [
            { kind: 'checklist', items: [
              '🚉 Lisbon: 4 lines (Sintra, Cascais, Azambuja, Sado)',
              '🚉 Porto: lines to Aveiro, Braga, Marco de Canaveses',
              '💳 Carris Metro Lisboa: the Navegante card for €30/month covers the Sintra/Cascais lines',
              '💳 Porto: the Andante card covers Urbano',
              '⏰ Frequent: every 15–30 min'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'buying-tickets',
      title: '🎟️ Where to buy',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Online (recommended)', content: [
            { kind: 'checklist', items: [
              '🌐 cp.pt — official website, NO Russian (PT/EN only)',
              '📱 “CP — Comboios de Portugal” app (iOS/Android)',
              '🔒 The ticket is saved in the app as a QR code — no need to print it',
              '📅 Booking 60 days ahead — lowest prices',
              '💳 Accepted: Multibanco, MB WAY, Visa/Mastercard cards, PayPal'
            ]}
          ]},
          { id: 'station', title: 'At the station', content: [
            { kind: 'checklist', items: [
              '🤖 Station ticket machine — card payment, printed ticket',
              '👤 Ticket office — cash/card, there may be a queue',
              '⚠️ For Regional/Urbano trains, the validation machine may be on the platform itself',
              '🚫 Buying a ticket on the train is NOT always possible — fine up to €100'
            ]}
          ]},
          { id: 'discounts', title: 'Discounts', content: [
            { kind: 'checklist', items: [
              '🧒 Children aged 4–12: -50% (under 4 free if no separate seat)',
              '👨‍🎓 Young people (Cartão Jovem ≤30): -25% on the fare + additional promotions',
              '👴 ≥ 65 years: -50%',
              '👨‍👩‍👧‍👦 Family (≥3): -25% for everyone',
              '🎫 Tarifa Antecipada: -25% to -50%, limited availability',
              '👨‍🎓 Students (Cartão de Estudante): -25%',
              '🎖️ CP employees: free (for them and their family)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '⏰ AP and IC often run to timetable — delays are rare',
          '🚉 In Lisbon, AP/IC depart from Sta Apolónia (centre) or Oriente (east); check when buying',
          '🚉 In Porto, the main station is Campanhã (east); from there you can take an Urbano train to São Bento (centre)',
          '📦 Hand luggage is free (up to 30 kg or 2 items + backpack). Large luggage — separate carriage on IC',
          '🐕 Small animals in a carrier: free. Large dogs with a muzzle — 50% of the ticket price',
          '🚲 Bicycle: free on Regional; on IC — bicycle carriage on request; not allowed on AP',
          '☕ Wi-Fi on AP/IC works on the Lisbon — Porto route, and is weaker on other routes',
          '📶 GSM signal is poor in mountain tunnels — download everything you need in advance',
          '⌨️ If the train is rescheduled — the ticket is valid on the next train in the same category'
        ]}
      ]
    },
    {
      id: 'special-routes',
      title: '🌟 Special routes',
      content: [
        { kind: 'checklist', items: [
          '🍷 **Linha do Douro** (Porto-Régua-Pocinho) — scenic route along the Douro river, wine region. Regional train, 4 h to Pocinho. Tourist season',
          '🌊 **Linha do Algarve** (Lagos-Faro-VRSA) — Algarve beaches, IC + Regional',
          '⛰️ **Linha Beira Alta** (Lisboa-Pampilhosa-Guarda) — mountain route to the Spanish border',
          '🇪🇸 **Sud Express / Lusitânia** (Lisboa-Hendaye/Madrid) — historic night trains, **suspended since 2020** and as of 2026 there is no regular service; may resume in the future (updates: cp.pt and Renfe)',
          '🚂 **Comboio Histórico do Vouga** — tourist steam train, summer/autumn'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'AP Lisboa-Porto Turística', amountEURMin: 25, amountEURMax: 35 },
    { label: 'AP 1st class (Conforto)', amountEURMin: 35, amountEURMax: 50 },
    { label: 'IC Lisboa-Porto', amountEURMin: 18, amountEURMax: 30 },
    { label: 'Regional short route', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Tarifa Antecipada (60 days)', amountEURMin: 12, amountEURMax: 25, note: '-25% to -50%' }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Institute for Mobility and Transport', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
