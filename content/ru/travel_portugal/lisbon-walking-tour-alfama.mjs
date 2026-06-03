export default {
  editorialVoice: 'hackportugal',
  id: 'lisbon-walking-tour-alfama',
  categoryId: 'travel_portugal',
  title: 'Пешеходный маршрут по Алфаме — старейшему району Лиссабона',
  tldr: 'Маршрут длиной 3 км, рассчитанный на 2,5–3,5 часа, через сердце средневекового Лиссабона. Начало — Sé de Lisboa, финиш — Miradouro da Graça. Неспешный подъём по узким мощёным улочкам, замок, 3 смотровые площадки, музей фаду. Удобно сочетать с ужином в одной из местных таверн с живым фаду.',
  tags: ['лиссабон', 'алфама', 'пешая экскурсия', 'фаду', 'достопримечательности'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route-overview',
      title: 'Маршрут',
      content: [
        { kind: 'walkingRoute', distanceKm: 3.0, durationMinutes: 180, difficulty: 'moderate', points: [
          {
            name: '1. Sé de Lisboa',
            description: 'Кафедральный собор XII века, древнейшая церковь города. Пережил 3 землетрясения. Внутри — клуатр с археологическими раскопками римской и вестготской эпох.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Собор_Лиссабона',
              en: 'https://en.wikipedia.org/wiki/Lisbon_Cathedral',
              pt: 'https://pt.wikipedia.org/wiki/S%C3%A9_de_Lisboa'
            },
            coord: { lat: 38.7099, lon: -9.1335 }
          },
          {
            name: '2. Igreja de Santo António',
            description: 'Построена на месте рождения святого Антония Падуанского в 1195 году. В подвале — крипта. 13 июня в городе праздник со свадебным марафоном прямо у церкви.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Антоний_Падуанский',
              en: 'https://en.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisbon)',
              pt: 'https://pt.wikipedia.org/wiki/Igreja_de_Santo_Ant%C3%B3nio_(Lisboa)'
            },
            coord: { lat: 38.7105, lon: -9.1338 }
          },
          {
            name: '3. Miradouro de Santa Luzia',
            description: 'Смотровая площадка с панно азулежу «Взятие Лиссабона у мавров» (1147). Отсюда лучший вид на черепичные крыши Алфамы и Тежу. Ветерок, скамейки, цветочная пергола.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Miradouro_de_Santa_Luzia',
              pt: 'https://pt.wikipedia.org/wiki/Miradouro_de_Santa_Luzia'
            },
            coord: { lat: 38.7118, lon: -9.1303 }
          },
          {
            name: '4. Miradouro das Portas do Sol',
            description: 'На 50 м выше — «Ворота Солнца». Статуя святого Винсента, покровителя города, с вороном. Отсюда виден купол São Vicente de Fora и Campo de Santa Clara с рынком Feira da Ladra по вторникам и субботам.',
            wikipedia: {
              en: 'https://en.wikipedia.org/wiki/Alfama',
              pt: 'https://pt.wikipedia.org/wiki/Alfama'
            },
            coord: { lat: 38.7121, lon: -9.1295 }
          },
          {
            name: '5. Castelo de São Jorge',
            description: 'Мавританская крепость на вершине холма. Стены XI века, восстановленная цитадель, 11 башен. По территории гуляют павлины. Панорама всего Лиссабона на 360°.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Замок_Святого_Георгия_(Лиссабон)',
              en: 'https://en.wikipedia.org/wiki/S%C3%A3o_Jorge_Castle',
              pt: 'https://pt.wikipedia.org/wiki/Castelo_de_S%C3%A3o_Jorge'
            },
            coord: { lat: 38.7139, lon: -9.1335 }
          },
          {
            name: '6. Igreja de São Vicente de Fora',
            description: 'Монастырь XVI века, панно азулежу по басням Лафонтена. В пантеоне — гробницы королей династии Браганса (1640–1910). Можно подняться на крышу — вид на Алфаму с другого ракурса.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Монастырь_Святого_Винсента_(Лиссабон)',
              en: 'https://en.wikipedia.org/wiki/Monastery_of_S%C3%A3o_Vicente_de_Fora',
              pt: 'https://pt.wikipedia.org/wiki/Mosteiro_de_S%C3%A3o_Vicente_de_Fora'
            },
            coord: { lat: 38.7156, lon: -9.1281 }
          },
          {
            name: '7. Museu do Fado',
            description: 'Музей португальского фаду — городского романса, включённого в список нематериального наследия ЮНЕСКО. Биографии певцов, старые пластинки, выступления.',
            wikipedia: {
              ru: 'https://ru.wikipedia.org/wiki/Фаду',
              en: 'https://en.wikipedia.org/wiki/Museu_do_Fado',
              pt: 'https://pt.wikipedia.org/wiki/Museu_do_Fado'
            },
            coord: { lat: 38.7122, lon: -9.1276 }
          },
          {
            name: '8. Miradouro da Graça',
            description: 'Финальная смотровая площадка под соснами с видом на замок и реку. Рядом — церковь Graça и одна из лучших местных таверн района, «Damas». Вечером — закат над замком.',
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
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          '👟 Удобная обувь обязательна — мощёная calçada portuguesa скользкая в дождь',
          '🕙 Лучшее время — 09:30–12:00 или после 16:30, чтобы избежать полуденной жары',
          '💧 Возьмите воду с собой — кафе есть, но встречаются редко и стоят дорого',
          '🎒 Следите за карманами в толпе туристов у Sé и Castelo',
          '🚇 Начало маршрута — в 3 мин от метро Baixa-Chiado (выход «Rua Augusta»)',
          '🎟️ Castelo de São Jorge: билет 17 € (2026), бронировать онлайн',
          '🎵 Вечером в Алфаме — десятки местных таверн с живым фаду (ужин + вино ~35–50 €/чел)'
        ]}
      ]
    },
    {
      id: 'about-alfama',
      title: 'Об Алфаме',
      content: [
        { kind: 'paragraph', text: 'Алфама — один из немногих районов, уцелевших после землетрясения 1755 года. Название происходит от арабского «al-hamma» («горячий источник»). До Реконкисты это был мавританский квартал, позже — рыбацкий. Сегодня это охраняемый ЮНЕСКО исторический район с уникальной архитектурой, где соседствуют узкие переулки, дома с балконами в цветах и ряды азулежу.' },
        { kind: 'wikiLink', title: 'Землетрясение 1755 года — контекст района', urls: {
          ru: 'https://ru.wikipedia.org/wiki/Лиссабонское_землетрясение_(1755)',
          en: 'https://en.wikipedia.org/wiki/1755_Lisbon_earthquake',
          pt: 'https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755'
        }}
      ]
    }
  ],
  sources: [
    { title: 'Visit Lisboa — что посмотреть в Алфаме', url: 'https://www.visitlisboa.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Lisboa — Património', url: 'https://www.lisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — нематериальное наследие: фаду', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}