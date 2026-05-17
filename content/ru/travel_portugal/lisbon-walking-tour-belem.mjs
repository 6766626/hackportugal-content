export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-walking-tour-belem',
  categoryId: 'travel_portugal',
  title: 'Белен — маршрут эпохи великих открытий',
  tldr: 'Маршрут 4 км на 4 часа с посещением музеев или без них — от Mosteiro dos Jerónimos через Padrão dos Descobrimentos до Torre de Belém. Район Белен хранит памятники «золотого века» мореплавания: Васко да Гамы, Энрике Мореплавателя, Магеллана. По пути — легендарная кондитерская Pastéis de Belém (с 1837 года).',
  tags: ['лиссабон', 'белен', 'пешая экскурсия', 'открытия', 'юнеско'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Маршрут',
      content: [
        { kind: 'walkingRoute', distanceKm: 4.0, durationMinutes: 240, difficulty: 'easy', points: [
          {
            name: '1. Mosteiro dos Jerónimos',
            description: 'Мануэлинский монастырь XVI века, объект ЮНЕСКО с 1983 г. Финансировалсяом на специи из Индии. Здесь находятся могилы Васко да Гамы и Луиша де Камоэнса. Внутренний двор — жемчужина стиля.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Монастырь_иеронимитов',
              en: 'https://en.wikipedia.org/wiki/Jer%C3%B3nimos_Monastery',
              pt: 'https://pt.wikipedia.org/wiki/Mosteiro_dos_Jer%C3%B3nimos'
            },
            coord: { lat: 38.6979, lon: -9.2068 }
          },
          {
            name: '2. Pastéis de Belém',
            description: 'Пирожные — предшественники pastéis de nata по оригинальному рецепту монахов-иеронимитов с 1837 года. Очередь на вынос движется быстро, но лучше взять кофе в зале с панно из азулежу.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Past%C3%A9is_de_Bel%C3%A9m',
              pt: 'https://pt.wikipedia.org/wiki/Past%C3%A9is_de_Bel%C3%A9m'
            },
            coord: { lat: 38.6975, lon: -9.2030 }
          },
          {
            name: '3. MAAT (Museu de Arte, Arquitetura e Tecnologia)',
            description: 'Современный музей под волнистой крышей-сёрфбордом от Amanda Levete. Внутри — выставки дизайна и видеоарта, сверху — панорама реки Тежу.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/MAAT_(museum)',
              pt: 'https://pt.wikipedia.org/wiki/Museu_de_Arte,_Arquitetura_e_Tecnologia'
            },
            coord: { lat: 38.6965, lon: -9.1949 }
          },
          {
            name: '4. Padrão dos Descobrimentos',
            description: 'Монумент высотой 52 м в форме каравеллы с 33 фигурами первопроходцев: Энрике Мореплаватель, Магеллан, Васко да Гама и др. На площади — роза ветров из мрамора (дар ЮАР, 1960).',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Памятник_первооткрывателям',
              en: 'https://en.wikipedia.org/wiki/Monument_to_the_Discoveries',
              pt: 'https://pt.wikipedia.org/wiki/Padr%C3%A3o_dos_Descobrimentos'
            },
            coord: { lat: 38.6939, lon: -9.2057 }
          },
          {
            name: '5. Jardim da Praça do Império',
            description: 'Сад с фонтаном между монастырём Jerónimos и Тежу. Вокруг фонтана — 32 герба старых провинций. Отличное место для пикника перед Torre de Belém.',
            wikipedia: {
              pt: 'https://pt.wikipedia.org/wiki/Pra%C3%A7a_do_Imp%C3%A9rio'
            },
            coord: { lat: 38.6971, lon: -9.2063 }
          },
          {
            name: '6. Torre de Belém',
            description: 'Крепость-маяк XVI века, объект ЮНЕСКО. Исторически встречала корабли, возвращавшиеся из Индии. Символ Лиссабона. Внутри — каменный носорог (первая европейская скульптура этого животного).',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Белемская_башня',
              en: 'https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower',
              pt: 'https://pt.wikipedia.org/wiki/Torre_de_Bel%C3%A9m'
            },
            coord: { lat: 38.6916, lon: -9.2160 }
          },
          {
            name: '7. Museu Nacional dos Coches',
            description: 'По желанию. Самая большая коллекция королевских карет в мире. Роскошные барочные изделия XVII–XIX вв. с позолотой и росписью.',
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
      title: 'Как добраться и логистика',
      content: [
        { kind: 'checklist', items: [
          '🚋 Трамвай №15 от Praça da Figueira — прямой, 20 мин',
          '🚆 Поезд линии Cascais от Cais do Sodré, выход «Belém», 10 мин',
          '🚶 Из центра пешком вдоль Тежу — около 1 часа, живописно',
          '💶 Jerónimos + Torre: комбинированный билет 16 € (экономия 4 €) на Visit Lisboa',
          '⏰ Бронировать онлайн — в кассе очередь до 1,5 часа',
          '❌ Torre de Belém по понедельникам закрыта, Jerónimos тоже'
        ]}
      ]
    },
    {
      id: 'context',
      title: 'Исторический контекст',
      content: [
        { kind: 'paragraph', text: 'В XV–XVI вв. Португалия — сверхдержава. Васко да Гама открыл морской путь в Индию (1498), Педро Кабрал — Бразилию (1500), Магеллан обогнул земной шар (1519–1522). Богатство специй финансировало этот район.' },
        { kind: 'wikiLink', title: 'Эпоха великих географических открытий — обзор', urls: {
          ru: 'https://ru.wikipedia.org/wiki/Эпоха_географических_открытий',
          en: 'https://en.wikipedia.org/wiki/Age_of_Discovery',
          pt: 'https://pt.wikipedia.org/wiki/Era_dos_Descobrimentos'
        }},
        { kind: 'wikiLink', title: 'Васко да Гама', urls: {
          ru: 'https://ru.wikipedia.org/wiki/Васко_да_Гама',
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