export default {
  editorialVoice: 'hackportugal',
  id: 'coimbra',
  categoryId: 'travel_portugal',
  title: 'Coimbra — the oldest university in Portugal',
  tldr: 'Coimbra is a university city in the centre of the country, 1 h from Lisbon or Porto by train. Universidade de Coimbra (UNESCO, 1290) with the legendary Biblioteca Joanina. Atmosphere of an ancient academy, the male variant of fado. One day is enough.',
  tags: ['coimbra', 'university', 'excursion'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'arrival',
      title: 'How to get there',
      content: [
        { kind: 'checklist', items: [
          '🚆 Lisbon–Santa Apolónia/Oriente → Coimbra-B: 1 h 45 min, AP train, €20–28',
          '🚆 Porto–Campanhã → Coimbra-B: 1 h, €15–25',
          '🚆 From Coimbra-B (main intercity station) to Coimbra (centre) — urban commuter train, 6 min, €1.60',
          '🚌 Rede Expressos / FlixBus: 2–2.5 h, €10–15',
          '🚗 By car: via A1 Lisbon–Porto — 2 h from Lisbon, 1.5 h from Porto'
        ]}
      ]
    },
    {
      id: 'university',
      title: 'Universidade de Coimbra (UNESCO)',
      content: [
        { kind: 'paragraph', text: 'The main attraction is the country’s oldest university (1290), one of the oldest in Europe. On a hill in the city centre. Combined admission ticket incl. library — €14.' },
        { kind: 'checklist', items: [
          '📚 Biblioteca Joanina (1728) — Baroque library with 60,000 volumes from the 16th–18th centuries. Special bats protect the books from insects! 20-minute sessions',
          '🎓 Capela de São Miguel — university chapel with a Baroque organ',
          '🏛️ Paço das Escolas — courtyard with a statue of João III, terrace overlooking the Mondego river',
          '🗼 Torre da Universidade — bell tower, climb €5',
          '🏛️ Museu da Ciência — 18th–19th-century scientific collections. €5',
          '🎓 Sala dos Capelos — main hall for degree-conferral ceremonies'
        ]}
      ]
    },
    {
      id: 'old-city',
      title: 'Old Town',
      content: [
        { kind: 'checklist', items: [
          '⛪ Sé Velha — 12th-century old cathedral, Romanesque style. €3',
          '⛪ Sé Nova — 16th-century new cathedral, Baroque',
          '🏛️ Mosteiro de Santa Cruz — royal pantheon, tombs of the first kings Afonso I and Sancho I. €4',
          '🌳 Jardim Botânico da Universidade — one of the oldest in Europe (18th century), free',
          '🏛️ Portagem / Parque Manuel Braga — Mondego riverfront, Santa Clara bridge',
          '🛕 Mosteiro de Santa Clara-a-Velha — ruins of a Gothic riverside monastery. €4',
          '🎨 Museu Nacional Machado de Castro — former episcopal palace and Roman cryptoporticus. €6'
        ]}
      ]
    },
    {
      id: 'academic-traditions',
      title: 'Academic traditions',
      content: [
        { kind: 'paragraph', text: 'Coimbra students wear black capes (capas e batinas) — a custom since the 13th century. In spring, in May, Queima das Fitas takes place, a graduation festival: processions, concerts, songs.' },
        { kind: 'checklist', items: [
          '🎵 Fado de Coimbra — the male variant of fado, performed only by men in capes. Different from Lisbon fado. Concerts at Fado ao Centro or ao Capricho',
          '🎓 Praxe — student initiation rituals for freshers (September–October)',
          '🎪 Queima das Fitas — 8 days in May, concerts in Parque de Santa Cruz',
          '🎭 Bar Académico — student bars, but easy to enter with a pass'
        ]}
      ]
    },
    {
      id: 'nearby',
      title: 'Nearby',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conímbriga (15 km) — ruins of the largest Roman city in Portugal, 2nd century BCE. Mosaics, forum, baths. €5',
          '🌲 Serra da Lousã (30 km) — mountains with schist villages (Talasnal, Candal, Cerdeira)',
          '⛰️ Penela (30 km) — 12th-century medieval castle',
          '🏖️ Figueira da Foz (45 km) — beach resort on the Atlantic',
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
          '🥖 Pastéis de Tentúgal — crispy pastry with custard (from 16th-century nuns)',
          '🧁 Pastéis de Santa Clara — round pies with sweet bean filling',
          '🍷 Bairrada wines — sparkling and red wines from the neighbouring region',
          '🍸 Arraia — local aperitif, often with port wine',
          '🍖 Restaurante Zé Manel dos Ossos — cult tavern since 1967, meat and beans'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Universidade de Coimbra — UNESCO heritage', url: 'https://www.uc.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Coimbra — municipal tourism', url: 'https://www.visitportugal.com/en/node/73754', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo do Centro — region', url: 'https://www.turismodocentro.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
