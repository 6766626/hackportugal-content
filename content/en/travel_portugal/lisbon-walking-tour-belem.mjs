export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-walking-tour-belem',
  categoryId: 'travel_portugal',
  title: 'Belém — a route through the Age of Discovery',
  tldr: 'A 4 km, 4-hour route with or without museum visits — from Mosteiro dos Jerónimos via Padrão dos Descobrimentos to Torre de Belém. Belém preserves monuments from the “golden age” of seafaring: Vasco da Gama, Henry the Navigator, Magellan. Along the way — the legendary Pastéis de Belém pastry shop (since 1837).',
  tags: ['lisbon', 'belém', 'walking tour', 'discoveries', 'unesco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Route',
      content: [
        { kind: 'walkingRoute', distanceKm: 4.0, durationMinutes: 240, difficulty: 'easy', points: [
          {
            name: '1. Mosteiro dos Jerónimos',
            description: 'A 16th-century Manueline monastery, a UNESCO site since 1983. It was funded by the spice trade from India. The tombs of Vasco da Gama and Luís de Camões are here. The cloister is the jewel of the style.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C_%D0%B8%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BC%D0%B8%D1%82%D0%BE%D0%B2',
              en: 'https://en.wikipedia.org/wiki/Jer%C3%B3nimos_Monastery',
              pt: 'https://pt.wikipedia.org/wiki/Mosteiro_dos_Jer%C3%B3nimos'
            },
            coord: { lat: 38.6979, lon: -9.2068 }
          },
          {
            name: '2. Pastéis de Belém',
            description: 'The pastries — forerunners of pastéis de nata — have been made to the original recipe of the Jerónimos monks since 1837. The takeaway queue moves quickly, but it is better to have a coffee inside in the room with azulejo panels.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Past%C3%A9is_de_Bel%C3%A9m',
              pt: 'https://pt.wikipedia.org/wiki/Past%C3%A9is_de_Bel%C3%A9m'
            },
            coord: { lat: 38.6975, lon: -9.2030 }
          },
          {
            name: '3. MAAT (Museu de Arte, Arquitetura e Tecnologia)',
            description: 'A contemporary museum beneath a wavy surfboard-like roof by Amanda Levete. Inside — design and video-art exhibitions; above — a panorama of the River Tagus.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/MAAT_(museum)',
              pt: 'https://pt.wikipedia.org/wiki/Museu_de_Arte,_Arquitetura_e_Tecnologia'
            },
            coord: { lat: 38.6965, lon: -9.1949 }
          },
          {
            name: '4. Padrão dos Descobrimentos',
            description: 'A 52 m-high monument in the shape of a caravel, with 33 figures of pioneers: Henry the Navigator, Magellan, Vasco da Gama and others. On the square — a marble wind rose (a gift from South Africa, 1960).',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC',
              en: 'https://en.wikipedia.org/wiki/Monument_to_the_Discoveries',
              pt: 'https://pt.wikipedia.org/wiki/Padr%C3%A3o_dos_Descobrimentos'
            },
            coord: { lat: 38.6939, lon: -9.2057 }
          },
          {
            name: '5. Jardim da Praça do Império',
            description: 'A garden with a fountain between the Jerónimos monastery and the Tagus. Around the fountain are 32 coats of arms of the old provinces. An excellent picnic spot before Torre de Belém.',
            wikipedia: {
              pt: 'https://pt.wikipedia.org/wiki/Pra%C3%A7a_do_Imp%C3%A9rio'
            },
            coord: { lat: 38.6971, lon: -9.2063 }
          },
          {
            name: '6. Torre de Belém',
            description: 'A 16th-century fortress-lighthouse, and a UNESCO site. Historically, it welcomed ships returning from India. A symbol of Lisbon. Inside — a stone rhinoceros (the first European sculpture of this animal).',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B5%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B0%D1%88%D0%BD%D1%8F',
              en: 'https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower',
              pt: 'https://pt.wikipedia.org/wiki/Torre_de_Bel%C3%A9m'
            },
            coord: { lat: 38.6916, lon: -9.2160 }
          },
          {
            name: '7. Museu Nacional dos Coches',
            description: 'Optional. The largest collection of royal coaches in the world. Luxurious Baroque pieces from the 17th–19th centuries, with gilding and painted decoration.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/National_Coach_Museum',
              pt: 'https://pt.wikipedia.org/wiki/Museu_Nacional_dos_Coches'
            },
            coord: { lat: 38.6973, lon: -9.1990 }
          }
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'How to get there and logistics',
      content: [
        { kind: 'checklist', items: [
          '🚋 Tram no. 15 from Praça da Figueira — direct, 20 min',
          '🚆 Cascais line train from Cais do Sodré, get off at “Belém”, 10 min',
          '🚶 On foot from the centre along the Tagus — about 1 hour, scenic',
          '💶 Jerónimos + Torre: combined ticket €16 (save €4) on Visit Lisboa',
          '⏰ Book online — the ticket-office queue can be up to 1.5 hours',
          '❌ Torre de Belém is closed on Mondays; Jerónimos is too'
        ]}
      ]
    },
    {
      id: 'context',
      title: 'Historical context',
      content: [
        { kind: 'paragraph', text: 'In the 15th–16th centuries, Portugal was a superpower. Vasco da Gama opened the sea route to India (1498), Pedro Cabral reached Brazil (1500), and Magellan circumnavigated the globe (1519–1522). Wealth from spices funded this district.' },
        { kind: 'wikiLink', title: 'Age of Discovery — overview', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%AD%D0%BF%D0%BE%D1%85%D0%B0_%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B9',
          en: 'https://en.wikipedia.org/wiki/Age_of_Discovery',
          pt: 'https://pt.wikipedia.org/wiki/Era_dos_Descobrimentos'
        }},
        { kind: 'wikiLink', title: 'Vasco da Gama', urls: {
          ru: 'https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D0%BA%D0%BE_%D0%B4%D0%B0_%D0%93%D0%B0%D0%BC%D0%B0',
          en: 'https://en.wikipedia.org/wiki/Vasco_da_Gama',
          pt: 'https://pt.wikipedia.org/wiki/Vasco_da_Gama'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — Belém', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Monastery of the Hieronymites and Tower of Belém', url: 'https://whc.unesco.org/en/list/263/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Patrimonio Cultural PT', url: 'https://www.patrimoniocultural.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
