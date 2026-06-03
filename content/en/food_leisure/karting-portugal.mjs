export default {
  editorialVoice: 'hackportugal',
  id: 'karting-portugal',
  categoryId: 'food_leisure',
  title: 'Karting in Portugal — where to race (2026)',
  tldr: 'There are around 15 active karting centres across Portugal. The main ones: OKL — Outdoor Karting Lisboa (Pontinha, the only outdoor track in Lisbon), Karting Almancil (Algarve, opened in 1992, ~250,000 visitors per year), Kartódromo Internacional do Algarve (professional FIA track), Kartódromo do Baltar (Paredes, 1,023-metre track).\n\n2026 prices: individual 15-minute session — from €13–25, 30 minutes — from €30–40. Children’s age: from 3 years old (Mini F1 at Karting Almancil), classic adult karts — from 12–13 years old (height ≥1.40 m usually).\n\nAdvance booking is strongly recommended at weekends and in summer.',
  tags: ['karting', 'children', 'attractions', 'sport'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-it-works',
      title: 'How karting works in Portugal',
      content: [
        { kind: 'paragraph', text: 'Karting in Portugal is either the “leisure” option (Family Park, 10–30 minute rental) or the “sporting” option (FIA tracks, kart clubs, competitions). The first option suits tourists and families. Most tracks operate all year round, but in the summer heat (July-August) they often close during the midday hours.' },
        { kind: 'checklist', items: [
          '🏁 Session: typically 10, 15 or 30 minutes (5–8 minutes of “warm-up” lap time included)',
          '👕 What you need: closed shoes, long trousers or jeans; helmet and overalls are provided on site',
          '🆔 Document: for teenagers — parents’ passport/CC and a signed consent form',
          '💳 Payment: cards everywhere, cash optional',
          '📅 Booking: at weekends and during school holidays — 1–3 days in advance, especially in Lisbon and the Algarve'
        ]},
        { kind: 'warning', text: 'Karting is contraindicated for pregnant people, people with cardiovascular conditions, epilepsy, or those who have recently had surgery. Most centres ask you to sign a health declaration on site.' }
      ]
    },
    {
      id: 'lisbon-region',
      title: 'Lisbon and the metropolitan area',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'okl',
            title: 'OKL — Outdoor Karting Lisboa (Pontinha)',
            content: [
              { kind: 'paragraph', text: 'The only outdoor kart track in the Lisbon metropolitan area itself. An open-air track with more than 30 years of operation. Very convenient — on the blue metro line (Pontinha station), 15 minutes from the centre.' },
              { kind: 'checklist', items: [
                '📍 Pontinha (near the metro), Lisbon',
                '💶 15 minutes: €25',
                '💶 30 minutes: €40',
                '🎂 Children: junior kart from ~8 years old (by height, not younger)',
                '🌐 oklisboa.com'
              ]}
            ]
          },
          {
            id: 'kart-montijo',
            title: 'Kart Montijo',
            content: [
              { kind: 'checklist', items: [
                '📍 Montijo (south bank of the Tagus), ~30 km from Lisbon',
                '🕐 Open daily 10:00–18:30',
                '🎉 Popular location for birthdays and corporate events',
                '🌐 kartmontijo.com'
              ]}
            ]
          },
          {
            id: 'fun-track',
            title: 'Fun Track Lisboa (Alcântara)',
            content: [
              { kind: 'checklist', items: [
                '📍 Doca do Espanhol, Alcântara, Lisbon',
                '👶 Karts for different ages “from 2 to 100 years old”',
                '🚇 Convenient access: tram 15E or train to Belém'
              ]}
            ]
          },
          {
            id: 'kart-odivelas',
            title: 'Kartódromo de Odivelas (Odilândia)',
            content: [
              { kind: 'checklist', items: [
                '📍 Odivelas (near Strada shopping centre)',
                '🎈 Programmes for children and adults, with tandem karting available (2 people in one kart)'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Algarve — tourist and professional',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'karting-almancil',
            title: 'Karting Almancil (Family Park)',
            content: [
              { kind: 'paragraph', text: 'The Algarve’s best-known “family” karting venue, opened in 1992 by Ayrton Senna himself. ~250,000 visitors per year. Ideal for families with children of different ages.' },
              { kind: 'checklist', items: [
                '📍 Almancil, ~12 km from Faro airport, ~8 km from Vilamoura',
                '🛞 760 m × 8.5 m track, open-air',
                '👶 3–6 years old: Mini F1 (special mini karts for the youngest children)',
                '🧒 7–12 years old: junior kart',
                '🧑 13+: 200cc; for experienced drivers — 390cc',
                '💶 10 minutes: ~€25; promos from €13/person',
                '📞 +351 289 399 899',
                '🌐 kartingalgarve.com'
              ]}
            ]
          },
          {
            id: 'kart-aia',
            title: 'Autódromo Internacional do Algarve — Kartódromo',
            content: [
              { kind: 'paragraph', text: 'A professional FIA-certified track, part of the famous Algarve racing circuit. Used in championships. Rentals are available for tourists.' },
              { kind: 'checklist', items: [
                '📍 Portimão, next to the main racing circuit',
                '⏱️ 15/30/45/60 minute sessions',
                '💶 Prices: from €16 (15 minutes) — the cheapest option for a serious track',
                '🏆 Track days and certifications may be available',
                '🌐 autodromodoalgarve.com'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'north',
      title: 'North — Porto and the region',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'kartodromo-baltar',
            title: 'Kartódromo de Baltar (Paredes)',
            content: [
              { kind: 'checklist', items: [
                '📍 Baltar, Paredes (~30 km from Porto)',
                '🛞 Impressive long track — 1,023 metres',
                '🏎️ Used for Campeonato Portugal de Karting competitions',
                '👥 Good for group races and corporate events'
              ]}
            ]
          },
          {
            id: 'campera',
            title: 'Karting Campera',
            content: [
              { kind: 'checklist', items: [
                '📍 Campera (central-northern Portugal)',
                '🏆 Professional competitions and Endurance — endurance races',
                '🌐 camperakarting.com'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'how-to-book',
      title: 'How to book and what to bring',
      content: [
        { kind: 'checklist', items: [
          '📲 Book online on the centre’s website — usually a 10–20% discount vs the desk',
          '🎟️ Alternative: Odisseias / GetYourGuide — they often have promo codes and an “experience + restaurant” package',
          '⏰ Book for the middle of the day on weekdays — in summer these are the freest slots',
          '👕 Clothing: long trousers/jeans are MANDATORY (even in summer — protection from engine burns); closed shoes',
          '👓 Glasses: contact lenses are fine, ordinary glasses are risky — the glass may break on impact',
          '📷 Photo/video: most centres sell a “race video recording” for €5–10',
          '🎂 Birthday: group packages for 5–15 people from €15/person; includes cake, balloons, entertainer'
        ]},
        { kind: 'warning', text: 'Alcohol is strictly prohibited — “after” is acceptable, not “before”. This is the law, not a polite request: an alcohol test may be carried out, and drunk people will not be allowed in without a refund.' }
      ]
    }
  ],
  costs: [
    { label: 'OKL Lisboa — 15 minutes', amountEUR: 25 },
    { label: 'OKL Lisboa — 30 minutes', amountEUR: 40 },
    { label: 'Karting Almancil — 10 minutes', amountEUR: 25 },
    { label: 'AIA Kartódromo — 15 minutes', amountEUR: 16 },
    { label: 'Promo/group rates', amountEURMin: 13, amountEURMax: 20 }
  ],
  sources: [
    { title: 'OKL — Outdoor Karting Lisboa (official website)', url: 'https://www.oklisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Karting Almancil — Kartingalgarve.com', url: 'https://www.kartingalgarve.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Karting Almancil — Visit Portugal (official tourism portal)', url: 'https://www.visitportugal.com/en/NR/exeres/9C868EAC-9BAB-43E0-A82C-D1E644C01D9A', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Autódromo do Algarve — Kart Rental (official website)', url: 'https://autodromodoalgarve.com/pt/driving-experiences/aluguer-de-karts/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Kart Montijo (official website)', url: 'https://kartmontijo.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'New guide: karting in Portugal — ~15 centres. Main locations: OKL (the only outdoor track in Lisbon, €25/15 min), Karting Almancil (Algarve, opened by Senna in 1992, Mini F1 for children from 3 years old), AIA Kartódromo (FIA-certified), Baltar (1,023 m). 2026 prices, age categories, booking tips.'
}
