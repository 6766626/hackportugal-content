export default {
  editorialVoice: 'hackportugal',
  id: 'coimbra',
  categoryId: 'travel_portugal',
  title: 'Coimbra — Portugal’s oldest university',
  tldr: 'Coimbra is a university city in the centre of the country, 1–2 hours from Lisbon or Porto by train. Universidade de Coimbra (UNESCO, 1290) with the legendary Biblioteca Joanina. An ancient academic atmosphere, the male version of fado. 1 day is enough.',
  tags: ['coimbra', 'university', 'day trip'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisboa-Santa Apolónia/Oriente → Coimbra-B: 1 h 45 min, AP train, €20–28',
          '🚆 Porto-Campanhã → Coimbra-B: 1 h, €15–25',
          '🚆 From Coimbra-B (main intercity station) to Coimbra (centre) — urban train, 6 min, €1.60',
          '🚌 Rede Expressos / FlixBus: 2–2.5 h, €10–15',
          '🚗 By car: via the A1 Lisboa-Porto — 2 h from Lisbon, 1.5 h from Porto'
        ]}
      ]
    },
    {
      id: 'university',
      title: 'Universidade de Coimbra (UNESCO)',
      content: [
        { kind: 'paragraph', text: 'The main attraction is the country’s oldest university (1290), one of the oldest in Europe. It is on a hill in the city centre. Combined admission ticket with the library — €14.' },
        { kind: 'checklist', items: [
          '📚 Biblioteca Joanina (1728) — a Baroque library with 60,000 volumes from the 16th–18th centuries. Special bats protect the books from insects! 20-minute slots',
          '🎓 Capela de São Miguel — the university chapel with a Baroque organ',
          '🏛️ Paço das Escolas — courtyard with a monument to João III, terrace overlooking the Mondego river',
          '🗼 Torre da Universidade — bell tower, climb €5',
          '🏛️ Museu da Ciência — 18th–19th-century scientific collections. €5',
          '🎓 Sala dos Capelos — the main hall for degree-awarding ceremonies'
        ]}
      ]
    },
    {
      id: 'old-city',
      title: 'Old city',
      content: [
        { kind: 'checklist', items: [
          '⛪ Sé Velha — old 12th-century cathedral, Romanesque style. €3',
          '⛪ Sé Nova — new 16th-century cathedral, Baroque',
          '🏛️ Mosteiro de Santa Cruz — royal pantheon, tombs of the first kings Afonso I and Sancho I. €4',
          '🌳 Jardim Botânico da Universidade — one of the oldest in Europe (18th century), free',
          '🏛️ Portagem / Parque Manuel Braga — Mondego riverfront, Santa Clara bridge',
          '🛕 Mosteiro de Santa Clara-a-Velha — ruins of a Gothic monastery by the river. €4',
          '🎨 Museu Nacional Machado de Castro — former bishop’s palace and Roman cryptoporticus. €6'
        ]}
      ]
    },
    {
      id: 'academic-traditions',
      title: 'Academic traditions',
      content: [
        { kind: 'paragraph', text: 'Coimbra students wear black cloaks (capas e batinas) — a tradition dating back to the 13th century. In spring, in May, Queima das Fitas takes place, a graduation festival with processions, concerts and songs.' },
        { kind: 'checklist', items: [
          '🎵 Fado de Coimbra — the male version of fado, performed only by men in cloaks. It differs from Lisbon fado. Concerts at Fado ao Centro or ao Capricho',
          '🎓 Praxe — student initiation rituals for first-year students (September-October)',
          '🎪 Queima das Fitas — 8 days in May, concerts in Santa Cruz park',
          '🎭 Bar Académico — student bars, though it is easy to enter with a pass'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nearby',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conímbriga (15 km) — ruins of Portugal’s best-preserved Roman city (1st–3rd centuries AD). Mosaics, forum, baths. €5',
          '🌲 Serra da Lousã (30 km) — mountains with schist villages (Talasnal, Candal, Cerdeira)',
          '⛰️ Penela (30 km) — 12th-century medieval castle',
          '🏖️ Figueira da Foz (45 km) — beach resort on the ocean',
          '🌊 Aveiro (60 km) — the “Portuguese Venice”, canals'
        ]}
      ]
    },
    {
      id: 'food',
      title: 'What to try',
      content: [
        { kind: 'checklist', items: [
          '🥩 Chanfana — kid goat in red wine (regional dish)',
          '🥖 Pastéis de Tentúgal — crisp pastry with custard (from 16th-century nuns)',
          '🧁 Pastéis de Santa Clara — round pastries with sweet bean filling',
          '🍷 Bairrada wines — sparkling and red wines from the neighbouring region',
          '🍸 Arraia — local aperitif, often with port',
          '🍖 Restaurante Zé Manel dos Ossos — a cult tavern since 1967, meat and beans'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Universidade de Coimbra — UNESCO heritage', url: 'https://www.uc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Coimbra — municipal tourism', url: 'https://www.visitportugal.com/en/node/73754', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Centro — region', url: 'https://www.turismodocentro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
