export default {
  editorialVoice: 'hackportugal',
  id: 'porto-walking-tour-ribeira',
  categoryId: 'travel_portugal',
  title: 'Пеший маршрут по историческому центру Порту',
  tldr: 'Маршрут 2.5 км на 3 часа: от башни Clérigos через книжный магазин Lello, собор Sé и вокзал São Bento до набережной Ribeira и моста Луиша I. Исторический центр включён в ЮНЕСКО. Много спусков, каменные лестницы — обувь решает. В конце — переход в Vila Nova de Gaia к винным погребам.',
  tags: ['порту', 'ribeira', 'пешая экскурсия', 'юнеско', 'достопримечательности'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Маршрут',
      content: [
        { kind: 'walkingRoute', distanceKm: 2.5, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Torre dos Clérigos',
            description: 'Башня-колокольня высотой 76 м XVIII века в стиле барокко. 225 ступенек на смотровую площадку — лучшая панорама Порту. Рядом — одноимённая церковь с овальным нефом, что встречается редко.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Башня_Клеригуш',
              en: 'https://en.wikipedia.org/wiki/Cl%C3%A9rigos_Church',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_dos_Cl%C3%A9rigos'
            },
            coord: { lat: 41.1458, lon: -8.6137 }
          },
          {
            name: '2. Livraria Lello',
            description: 'Книжный магазин 1906 года в стиле неоготики и ар-нуво. Деревянная винтовая лестница-легенда: вероятный прототип для Хогвартса, хотя Роулинг это отрицает. Вход — € 10, сумма засчитывается при покупке книги.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Книжный_магазин_Лелло_и_брат',
              en: 'https://en.wikipedia.org/wiki/Livraria_Lello',
              pt: 'https://pt.wikipedia.org/wiki/Livraria_Lello'
            },
            coord: { lat: 41.1470, lon: -8.6146 }
          },
          {
            name: '3. Igreja do Carmo',
            description: 'Два храма, слитые в один фасад, разделены самым узким домом Порту шириной 1 м. Боковая стена полностью покрыта панно из азулежу 1912 года.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Carmo_Church_(Porto)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_do_Carmo_(Porto)'
            },
            coord: { lat: 41.1471, lon: -8.6163 }
          },
          {
            name: '4. Estação de São Bento',
            description: 'Вокзал 1916 года. Вестибюль облицован 20 000 плиток азулежу: сцены из истории Португалии, битва при Аркуш-де-Валдевеш, въезд короля Жуана I в Порту.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Сан-Бенту_(вокзал)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Bento_railway_station',
              pt: 'https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_Ferrovi%C3%A1ria_de_Porto-S%C3%A3o_Bento'
            },
            coord: { lat: 41.1459, lon: -8.6107 }
          },
          {
            name: '5. Sé do Porto',
            description: 'Кафедральный собор XII века крепостного типа. Клуатр с азулежу XVIII века, серебряный алтарь в часовне Святого Причастия. Рядом — памятник Vimara Peres, первому графу Портукале.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Кафедральный_собор_Порту',
              en: 'https://en.wikipedia.org/wiki/Porto_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_Catedral_do_Porto'
            },
            coord: { lat: 41.1430, lon: -8.6112 }
          },
          {
            name: '6. Rua das Flores / Igreja da Misericórdia',
            description: 'Пешеходная улица с кафе, бутиками и туристическим потоком. Церковь Misericórdia — XVI век, рядом музей с шедевром «Fons Vitae» работы фламандских мастеров.',
            wikipedia: {
              pt: 'https://pt.wikipedia.org/wiki/Rua_das_Flores_(Porto)'
            },
            coord: { lat: 41.1440, lon: -8.6131 }
          },
          {
            name: '7. Palácio da Bolsa',
            description: 'Неоклассический дворец биржи 1850 года. Арабский зал — имитация Альгамбры, роспись заняла 18 лет. Экскурсии на португальском, английском, испанском и французском.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Palácio_da_Bolsa',
              en: 'https://en.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa',
              pt: 'https://pt.wikipedia.org/wiki/Pal%C3%A1cio_da_Bolsa'
            },
            coord: { lat: 41.1411, lon: -8.6155 }
          },
          {
            name: '8. Ribeira + Ponte Luís I',
            description: 'Набережная с цветными домами — ЮНЕСКО. Мост Луиша I 1886 года, автор — Теофил Сейриг, ученик Эйфеля. Пешком можно пройти по верхнему ярусу в Vila Nova de Gaia или вдоль реки по нижнему. Виды с моста — как на открытке.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Мост_Луиша_I',
              en: 'https://en.wikipedia.org/wiki/Dom_Lu%C3%ADs_I_Bridge',
              pt: 'https://pt.wikipedia.org/wiki/Ponte_Luís_I'
            },
            coord: { lat: 41.1402, lon: -8.6117 }
          }
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Практическая логистика',
      content: [
        { kind: 'checklist', items: [
          '👟 Крутые спуски от Clérigos к Ribeira — нужна обувь с нескользкой подошвой',
          '🎟️ Lello — вход по временным слотам; бронировать онлайн заранее',
          '🎟️ Palácio da Bolsa — только с гидом, экскурсии 30 мин, € 14',
          '🚇 Финиш у Ribeira → метро «São Bento» или «Jardim do Morro» (Gaia)',
          '🍷 Опционально: через мост в Gaia — винные погреба (Graham\'s, Sandeman, Taylor\'s, Cálem)',
          '📸 Закат с верхнего яруса моста Луиша — лучшее фото Порту'
        ]}
      ]
    },
    {
      id: 'context',
      title: 'Порту в контексте',
      content: [
        { kind: 'paragraph', text: 'Город дал имя стране («Portucale») и до сих пор делит с Лиссабоном неформальную «столичную» роль. В XIX веке — промышленный центр. Исторический центр внесён в ЮНЕСКО в 1996 г.' },
        { kind: 'wikiLink', title: 'Исторический центр Порту (ЮНЕСКО)', urls: {
          ru: 'https://ru.wikipedia.org/wiki/Исторический_центр_Порту',
          en: 'https://en.wikipedia.org/wiki/Historic_Centre_of_Oporto',
          pt: 'https://pt.wikipedia.org/wiki/Centro_Hist%C3%B3rico_do_Porto'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Porto — Centro Histórico', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Historic Centre of Oporto', url: 'https://whc.unesco.org/en/list/755/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal do Porto', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}