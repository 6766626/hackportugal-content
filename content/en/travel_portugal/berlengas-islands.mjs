export default {
  editorialVoice: 'hackportugal',
  id: 'berlengas-islands',
  categoryId: 'travel_portugal',
  title: 'Berlengas — a nature reserve and fortress island',
  tldr: 'Arquipélago das Berlengas is a group of granite islands 10 km from Peniche. A UNESCO Biosphere Reserve. The main island, Berlenga Grande, is open from May to September, with a limit of 550 visitors per day (booking required). On the island: São João Baptista fort (17th century, overnight stays possible in the “cells”), beaches, diving, hiking, sea caves. 45 min by fast boat, 1:15 by regular boat.',
  tags: ['berlengas', 'islands', 'peniche', 'nature'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'booking',
      title: 'Booking your visit — mandatory',
      content: [
        { kind: 'paragraph', text: 'Since 2011, ICNF (Instituto da Conservação da Natureza e das Florestas) has limited visits — 550 people per day on Berlenga Grande, in order to preserve the ecosystem.' },
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Reserve ICNF access', content: [
            { kind: 'paragraph', text: 'berlengareservas.icnf.pt → choose the date and number of people. Registration (without payment) opens ≥ 30 days before the visit. For July-August, book on the day the window opens: places run out within hours.' }
          ]},
          { id: 'b2', title: '2. Buy a boat ticket', content: [
            { kind: 'checklist', items: [
              'Feeling Berlenga, Viamar, Julius Berlengas — the main operators (available in Peniche harbour)',
              'Fast boat: €22-28 return, 45 min each way',
              'Regular boat: €18-22 return, 1:15 hour',
              'Summer timetable: departures 9:30 / 11:00 / 14:30',
              'Return from the island: 16:00 / 17:30',
              'In storms, sailings are cancelled — you are refunded or your trip is rescheduled'
            ]}
          ]},
          { id: 'b3', title: '3. On the day of the trip', content: [
            { kind: 'checklist', items: [
              'Arrive in Peniche 30 min early',
              'Pier: Porto de Recreio (large car park nearby)',
              'Show the ICNF booking on paper or on your phone',
              'Buy sunscreen, water and snacks in Peniche (on the island it is expensive and choice is limited)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-to-see',
      title: 'What to see on Berlenga Grande',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: '🏰 São João Baptista fort', content: [
            { kind: 'paragraph', text: 'Built in 1651 on a separate islet, connected to the main island by a stone bridge. You can stay overnight in the fort’s guesthouse (from €40/night, book 6 months ahead). A sunset photo with the bridge is the archipelago’s calling card.' }
          ]},
          { id: 'v2', title: '🏖️ Praia do Carreiro do Mosteiro', content: [
            { kind: 'paragraph', text: 'The only sandy beach. Clear water, 18-22°C in season. Diving and snorkelling — crystal-clear water, lots of fish.' }
          ]},
          { id: 'v3', title: '🌊 Sea caves + Furado Grande', content: [
            { kind: 'paragraph', text: 'Tour on a local dinghy (€10-15, 45 min): they go round the island, enter Gruta Azul, Cova do Sonho and the huge Furado Grande tunnel. You can book with the fishermen directly on the beach.' }
          ]},
          { id: 'v4', title: '🥾 Hiking', content: [
            { kind: 'paragraph', text: 'The only road from the pier to the fort is a 1.5 km walk, a trail over granite cliffs. There is no transport on the island. Routes: to the Duque de Bragança lighthouse (summit, 85 m), to the Farol lighthouse, 3 km circular trail.' }
          ]}
        ]}
      ]
    },
    {
      id: 'stay-overnight',
      title: 'Stay overnight',
      content: [
        { kind: 'checklist', items: [
          '🏰 Forte São João Baptista — guesthouse in former monastic cells. €40-60/night. Book 5 months ahead',
          '🏕️ Campismo da Berlenga — tent camping. €10-15/night + landing fee. You need to fit separately into the ICNF window (10 places/night)',
          '🐟 There is one restaurant, Mar e Sol (salted fish from cataleys, sea urchins). €15-25/person',
          '❌ No shops, no cash machines, no mobile signal (Vodafone occasionally works)',
          '⚡ Electricity only from the fort’s solar panels — from 18:00 to 23:00'
        ]}
      ]
    },
    {
      id: 'when-to-go',
      title: 'When to go',
      content: [
        { kind: 'checklist', items: [
          'Season: mid-May — end of September. Outside the season, boats do not run',
          'Weather: July-August — warm, but lots of tourists. May/June and September — ideal',
          'Sunday — fewer people',
          'Spring storms = frequent cancellations. Check the weather forecast for Peniche',
          'The wind is often strong — take a windbreaker even in hot weather',
          '☀️ A day on Berlengas = 5-6 hours (arrival from 11:00, back at 16:00-17:00)'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Take a seasickness tablet (Vertigin, Dramamine) 30 min before the trip — the boat rocks',
          '🥤 Water 2 l/person — €3/bottle on the island',
          '🐟 Fishing on the island is prohibited (nature reserve)',
          '🐛 There are seagulls — they behave aggressively if food is open; do not feed them',
          '🏊 Swim only in the designated area — outside it there are dangerous currents',
          '♻️ Take your rubbish with you',
          '📷 Put your phone in a plastic zip bag — sea spray',
          '🚁 For people with disabilities: access to Berlengas is limited, there are no ramps'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'ICNF booking', amountEUR: 0 },
    { label: 'Return boat (fast)', amountEURMin: 22, amountEURMax: 28 },
    { label: 'Return boat (regular)', amountEURMin: 18, amountEURMax: 22 },
    { label: 'Sea caves tour', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Guesthouse in the fort', amountEURMin: 40, amountEURMax: 60, note: '€/night' },
    { label: 'Camping', amountEURMin: 10, amountEURMax: 15, note: '€/night' }
  ],
  sources: [
    { title: 'ICNF — Berlengas bookings', url: 'https://berlengareservas.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — Reserva Natural das Berlengas', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Peniche — Berlengas', url: 'https://visitpeniche.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
