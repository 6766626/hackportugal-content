export default {
  editorialVoice: 'hackportugal',
  id: 'andante-porto',
  categoryId: 'public_transport',
  title: 'Andante — Porto’s unified card: metro, bus, suburban trains',
  tldr: 'Andante is a unified travel pass for the Porto metro, STCP buses and CP suburban trains in the metropolitan area. Zone-based system: the further you go, the more expensive it is. For tourists — Andante Tour for 1/3 days (€7–15). For residents — monthly Z2 pass for €30/month, unlimited regional MetroPorto — €40/month. You can buy a card from a metro ticket machine (Andante Azul = occasional card, €0.60) or PayShop. There is also Andante eTransit in the app.',
  tags: ['andante', 'porto', 'metro', 'bus', 'stcp', 'travel pass'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'system',
      title: '🗺️ Andante zone system',
      content: [
        { kind: 'paragraph', text: 'The MetroPorto region is divided into 12 zones. The ticket is calculated according to the number of zones your route passes through.' },
        { kind: 'checklist', items: [
          '🟦 Z2 — 1–2 zones: Porto centre (Trindade, Bolhão, São Bento), Vila Nova de Gaia',
          '🟩 Z3 — 3 zones: Maia, Matosinhos, Gondomar, Senhora da Hora',
          '🟧 Z4 — 4 zones: Vila do Conde, Espinho',
          '🟨 Z5+ — more distant suburbs: Aveiro, Trofa',
          '⚠️ The fare depends on the departure zone and destination zone. The system is not straightforward, but ticket machines calculate the price automatically'
        ]}
      ]
    },
    {
      id: 'options',
      title: '🎫 Card and ticket options',
      content: [
        { kind: 'substeps', items: [
          { id: 'occasional', title: 'Occasional tickets — for tourists and infrequent trips', content: [
            { kind: 'checklist', items: [
              '🟪 Andante Azul — card for €0.60 (can be topped up with occasional tickets)',
              '💰 Single Z2: €1.40 — 1 hour in zone 2',
              '💰 Andante 24h Tour 1: €7 — unlimited travel for one day in Z4',
              '💰 Andante 24h Tour 3: €15 — 3 days in Z4',
              '💰 Andante Tour 24h (Z2): €4.15 — for those travelling only around the centre',
              '🎟️ You can buy it and validate it straight away at the gate or on the bus'
            ]}
          ]},
          { id: 'monthly', title: 'Monthly passes (for residents)', content: [
            { kind: 'checklist', items: [
              '👤 Andante Mensal Z2 (Porto centre): €30/month',
              '👤 Andante Mensal Z3: €35/month',
              '👤 Andante Mensal Z4: €40/month',
              '🚇 Mensal MetroPorto (unlimited across the whole region): €40/month',
              '🎓 Andante Estudante (for students): -50%, ≈€15',
              '👴 Andante Sénior (>65): -50%',
              '👨‍👩‍👧 Andante Família (3+ people) — shared pass, -25% for each person',
              '⚠️ To apply, you need an Andante Branca (personalised) — photo + Cartão de Cidadão, at a metro station'
            ]}
          ]},
          { id: 'app', title: 'Andante app (eTransit)', content: [
            { kind: 'checklist', items: [
              '📱 “Anda” (App Store / Google Play) — official app',
              '🛒 Buy tickets on your phone, QR code at the gate',
              '🔋 Confirm the journey via NFC with one tap of the phone',
              '💳 Link a card, automatic payment',
              '📊 Journey history, spending statistics'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-use',
      title: '🚇 How to use it',
      content: [
        { kind: 'checklist', items: [
          '🎫 At a metro station — tap the card on the gate, check the colour: green means everything is fine, red means no ticket or the wrong zone',
          '🚌 On an STCP bus — tap the card on the validator when boarding',
          '🚞 On a CP suburban train — validate the ticket at the machine on the platform or ask the inspector',
          '⏰ The ticket is time-based — after the first validation it is valid for 1–2 hours depending on the number of zones',
          '🔁 Within this time, you can make transfers without paying again',
          '⚠️ Inspections at stations and on buses — fine of €60–120 if you travel without a ticket or with an expired ticket'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🌅 Cheaper at weekends: Andante Família for 4 people = €7.50 unlimited',
          '🚖 Uber/Bolt in Porto can sometimes be cheaper than the bus for 3–4 people over a short distance (€1–2/person)',
          '🛒 Buying an Andante Branca (personalised) is better value in the long term if you plan to live here',
          '🚲 BUGA — Porto city bikes, free with a deposit',
          '🚜 Aveiro / Espinho are accessible with Andante Z5 — beach for €2 a day!',
          '📅 The 1st of the month — crowds at Trindade metro for pass applications; go on the 5th–10th'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Andante Azul (card)', amountEUR: 0.60 },
    { label: 'Single Z2', amountEUR: 1.40 },
    { label: 'Andante Tour 24h Z4', amountEUR: 7 },
    { label: 'Andante Tour 3 days', amountEUR: 15 },
    { label: 'Mensal Z2', amountEUR: 30 },
    { label: 'Mensal MetroPorto (unlimited)', amountEUR: 40 }
  ],
  sources: [
    { title: 'Metro do Porto — official website', url: 'https://www.metrodoporto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'STCP — Sociedade de Transportes Colectivos do Porto', url: 'https://www.stcp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
