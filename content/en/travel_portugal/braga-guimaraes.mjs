export default {
  editorialVoice: 'hackportugal',
  id: 'braga-guimaraes',
  categoryId: 'travel_portugal',
  title: 'Braga and Guimarães — the “cradle of Portugal”',
  tldr: 'Braga is the “Portuguese Rome”, the religious capital, with an 11th-century cathedral and the famous Bom Jesus do Monte (UNESCO).\n\nGuimarães (UNESCO) is where Portugal was born in 1128, with the castle of the first king, Afonso Henriques. From Porto — 1 hour by train. Both cities can be seen in a day with Porto as your base.',
  tags: ['braga', 'guimaraes', 'north', 'unesco'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Porto-Campanhã → Braga: 1 hr by IC/AP train, €7–12',
          '🚆 Porto-Campanhã → Guimarães: 50 min by urban train, €4.70',
          '🚌 Between Braga and Guimarães there is no direct CP train (only with a change at Lousado, ~1.5 hrs). Better by bus ~40–50 min (Rede Expressos / GetBus, ~€5–7) or by car ~30 min (A3+A11)',
          '🚌 Rede Expressos: Porto-Braga 45 min, €7; Porto-Guimarães 1 hr, €7',
          '🚗 Car: Porto-Braga 50 min via the A3, Porto-Guimarães 50 min via the A7'
        ]}
      ]
    },
    {
      id: 'braga',
      title: 'Braga — the “Portuguese Rome”',
      content: [
        { kind: 'paragraph', text: 'The country’s oldest city (Roman Bracara Augusta, founded in 16 BC). An archiepiscopal capital, with 35+ churches. Religious festivals (Semana Santa, processions) are the best season.' },
        { kind: 'checklist', items: [
          '⛪ Sé de Braga — the country’s oldest cathedral (11th century), combining Romanesque, Gothic and Manueline styles. €5',
          '⛪ Bom Jesus do Monte (UNESCO) — a Baroque sanctuary on a hill 5 km from the centre. The legendary “stairway of the 5 senses”, and an 1882 funicular powered by water counterweight. Funicular — €3',
          '⛪ Santuário do Sameiro — a second hilltop sanctuary next to Bom Jesus',
          '🏛️ Palácio do Raio — a Baroque palace with an azulejo façade',
          '🏛️ Capela dos Coimbras (1525) — a Gothic chapel',
          '🏛️ Museu dos Biscainhos — a 17th-century palace with a garden',
          '🏛️ Igreja da Misericórdia — Renaissance',
          '🌳 Parque de Santa Bárbara — a central park with fountains',
          '🎪 Semana Santa Braga — Holy Week with the largest processions in Iberia'
        ]}
      ]
    },
    {
      id: 'guimaraes',
      title: 'Guimarães — UNESCO',
      content: [
        { kind: 'paragraph', text: 'The historic capital of Portugal until 1139. On the wall is the inscription “Aqui nasceu Portugal” (“Portugal was born here”). The compact historic centre is UNESCO-listed.' },
        { kind: 'checklist', items: [
          '🏰 Castelo de Guimarães (10th century) — the castle where Afonso Henriques, the first king, was born. €5',
          '🏛️ Paço dos Duques de Bragança (15th century) — a castle-palace in Burgundian style, the residence of the dukes. €5 (during restoration works; normally €10)',
          '⛪ Igreja de São Miguel do Castelo — a 12th-century Romanesque chapel, the place of Afonso’s baptism',
          '🏛️ Largo da Oliveira — the main square with an ancient olive tree and a Gothic monument',
          '⛪ Igreja da Nossa Senhora da Oliveira — a Gothic monastery-church',
          '🏰 Muralha antiga — medieval walls',
          '🚡 Teleférico da Penha — cable car to Mount Penha, with views. €5 return',
          '🏛️ Museu Alberto Sampaio — medieval art in monastery galleries'
        ]}
      ]
    },
    {
      id: 'combined-itinerary',
      title: 'One-day itinerary (Braga + Guimarães)',
      content: [
        { kind: 'checklist', items: [
          '09:00 — train Porto-Campanhã → Braga (1 hr)',
          '10:00–12:00 — Braga centre: Sé, Palácio do Raio, Largo do Paço',
          '12:00–14:00 — Bom Jesus do Monte (bus 2 or taxi €10). Lunch in a café by the funicular',
          '14:00 — bus Braga → Guimarães (~45 min; no direct train — only with a change at Lousado, ~1.5 hrs)',
          '15:00–18:00 — castle, Dukes’ Palace, historic centre, Largo da Oliveira',
          '18:00–19:00 — Teleférico da Penha at sunset (optional)',
          '19:30 — train to Porto (50 min)'
        ]}
      ]
    },
    {
      id: 'food-regional',
      title: 'Northern cuisine',
      content: [
        { kind: 'checklist', items: [
          '🍖 Cabidela — chicken in a blood sauce (regional dish)',
          '🐟 Bacalhau à Braga — cod with potato croquettes',
          '🥟 Pudim do Abade de Priscos — Braga’s famous dessert made with pork fat',
          '🥖 Bola de Berlim — a doughnut, but a special one in Braga',
          '🍷 Vinho Verde — the home region: light white wines',
          '🍴 Restaurante Inácio (Braga) — traditional cuisine since 1954',
          '🍴 Histórico by Papaboa (Guimarães) — in a restored 13th-century palace'
        ]}
      ]
    },
    {
      id: 'events',
      title: 'Key events',
      content: [
        { kind: 'checklist', items: [
          '✝️ Semana Santa Braga (March-April) — the largest Holy Week processions',
          '🎪 São João de Braga (23-24 June) — the festival of Saint John',
          '🎭 Guimarães Capital Europeia da Cultura 2012 — a legacy of exhibition spaces',
          '🎄 Christmas — Guimarães turns into a “city of light”',
          '🎺 Noite Branca de Braga (September) — a white night of the arts'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Visit Braga — municipal tourism', url: 'https://www.visitbraga.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Guimarães', url: 'https://www.cm-guimaraes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Porto e Norte', url: 'https://www.portoenorte.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
