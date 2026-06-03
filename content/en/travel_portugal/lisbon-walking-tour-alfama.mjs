export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-walking-tour-alfama',
  categoryId: 'travel_portugal',
  title: 'Walking route through Alfama — Lisbon’s oldest district',
  tldr: 'A 3 km route taking 2.5–3.5 hours through the heart of medieval Lisbon. Start — Sé de Lisboa, finish — Miradouro da Graça. A gentle climb along narrow cobbled streets, a castle, 3 viewpoints, and the Fado Museum. Easy to combine with dinner in one of the local taverns with live fado.',
  tags: ['lisbon', 'alfama', 'walking tour', 'fado', 'sights'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Route',
      content: [
        { kind: 'walkingRoute', distanceKm: 3.0, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Sé de Lisboa',
            description: 'A 12th-century cathedral, the oldest church in the city. It survived 3 earthquakes. Inside — a cloister with archaeological excavations from the Roman and Visigothic periods.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD%D0%B0',
              en: 'https://en.wikipedia.org/wiki/Lisbon_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_de_Lisboa'
            },
            coord: { lat: 38.7099, lon: -9.1335 }
          },
          {
            name: '2. Igreja de Santo António',
            description: 'Built on the birthplace of Saint Anthony of Padua in 1195. In the basement — a crypt. On 13 June the city celebrates a festival with a wedding marathon right by the church.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%B8%D0%B9_%D0%9F%D0%B0%D0%B4%D1%83%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9',
              en: 'https://en.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisbon)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisboa)'
            },
            coord: { lat: 38.7105, lon: -9.1338 }
          },
          {
            name: '3. Miradouro de Santa Luzia',
            description: 'A viewpoint with an azulejo panel, “The Capture of Lisbon from the Moors” (1147). From here you get the best view of Alfama’s tiled roofs and the Tagus. A breeze, benches, and a flower-covered pergola.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Miradouro_de_Santa_Luzia',
              pt: 'https://pt.wikipedia.org/wiki/Miradouro_de_Santa_Luzia'
            },
            coord: { lat: 38.7118, lon: -9.1303 }
          },
          {
            name: '4. Miradouro das Portas do Sol',
            description: '50 m higher — the “Gates of the Sun”. A statue of Saint Vincent, the city’s patron saint, with a raven. From here you can see the dome of São Vicente de Fora and Campo de Santa Clara with the Feira da Ladra market on Tuesdays and Saturdays.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Alfama',
              pt: 'https://pt.wikipedia.org/wiki/Alfama'
            },
            coord: { lat: 38.7121, lon: -9.1295 }
          },
          {
            name: '5. Castelo de São Jorge',
            description: 'A Moorish fortress at the top of the hill. 11th-century walls, a restored citadel, 11 towers. Peacocks wander around the grounds. A 360° panorama of the whole of Lisbon.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D1%8F_(%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Jorge_Castle',
              pt: 'https://pt.wikipedia.org/wiki/Castelo_de_S%C3%A3o_Jorge'
            },
            coord: { lat: 38.7139, lon: -9.1335 }
          },
          {
            name: '6. Igreja de São Vicente de Fora',
            description: 'A 16th-century monastery, with azulejo panels based on La Fontaine’s fables. In the pantheon — the tombs of the kings of the House of Braganza (1640–1910). You can go up to the roof — a view of Alfama from another angle.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%92%D0%B8%D0%BD%D1%81%D0%B5%D0%BD%D1%82%D0%B0_(%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD)',
              en: 'https://en.wikipedia.org/wiki/Monastery_of_S%C3%A3o_Vicente_de_Fora',
              pt: 'https://pt.wikipedia.org/wiki/Mosteiro_de_S%C3%A3o_Vicente_de_Fora'
            },
            coord: { lat: 38.7156, lon: -9.1281 }
          },
          {
            name: '7. Museu do Fado',
            description: 'A museum of Portuguese fado — an urban song tradition included on UNESCO’s list of intangible heritage. Singers’ biographies, old records, performances.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B4%D1%83',
              en: 'https://en.wikipedia.org/wiki/Museu_do_Fado',
              pt: 'https://pt.wikipedia.org/wiki/Museu_do_Fado'
            },
            coord: { lat: 38.7122, lon: -9.1276 }
          },
          {
            name: '8. Miradouro da Graça',
            description: 'The final viewpoint under pine trees, with a view of the castle and the river. Nearby — Graça church and one of the district’s best local taverns, “Damas”. In the evening — sunset over the castle.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Gra%C3%A7a_(Lisbon)',
              pt: 'https://pt.wikipedia.org/wiki/Miradouro_da_Gra%C3%A7a'
            },
            coord: { lat: 38.7177, lon: -9.1311 }
          }
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          '👟 Comfortable shoes are essential — the cobbled calçada portuguesa is slippery in the rain',
          '🕙 Best time — 09:30–12:00 or after 16:30, to avoid the midday heat',
          '💧 Take water with you — there are cafés, but they are few and often expensive',
          '🎒 Watch your pockets in the tourist crowds around Sé and Castelo',
          '🚇 Start of the route — 3 min from Baixa-Chiado metro (exit “Rua Augusta”)',
          '🎟️ Castelo de São Jorge: ticket €17 (2026), book online',
          '🎵 In the evening in Alfama — dozens of local taverns with live fado (dinner + wine ~€35–50/person)'
        ]}
      ]
    },
    {
      id: 'about-alfama',
      title: 'About Alfama',
      content: [
        { kind: 'paragraph', text: 'Alfama is one of the few districts that survived the 1755 earthquake. The name comes from the Arabic “al-hamma” (“hot spring”). Before the Reconquista it was a Moorish quarter, and later a fishing district. Today it is a UNESCO-protected historic area with unique architecture, where narrow lanes, houses with flower-filled balconies, and rows of azulejos sit side by side.' },
        { kind: 'wikiLink', title: 'The 1755 earthquake — district context', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%81%D1%81%D0%B0%D0%B1%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D1%82%D1%80%D1%8F%D1%81%D0%B5%D0%BD%D0%B8%D0%B5_(1755)',
          en: 'https://en.wikipedia.org/wiki/1755_Lisbon_earthquake',
          pt: 'https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — what to see in Alfama', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Lisboa — Heritage', url: 'https://www.lisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — intangible heritage: fado', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
