export default {
  editorialVoice: 'hackportugal',
  id: 'sintra-day-trip',
  categoryId: 'travel_portugal',
  title: 'Синтра — однодневная экскурсия из Лиссабона',
  tldr: 'Синтра — город из списка ЮНЕСКО с романтическими дворцами в горах, в 40 мин от Лиссабона поездом. Главное: Palácio da Pena, Castelo dos Mouros, Quinta da Regaleira. Полный маршрут — 1 день, активная ходьба по холмам. Приезжать рано, уезжать последним поездом. Обязательно онлайн-билеты.',
  tags: ['sintra', 'экскурсия', 'дворцы', 'lisboa'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'getting-there',
      title: 'Как добраться',
      content: [
        { kind: 'checklist', items: [
          '🚆 Поезд (рекомендуется): Rossio → Sintra, 40 мин, € 2,45. Расписание каждые 20–30 мин. Первый 06:15, последний 23:15',
          '🚆 Альтернативный: Oriente → Sintra через Entrecampos (1 ч)',
          '🚗 Авто: по A16 / IC19, 35–50 мин, парковка в сезон сложная',
          '🚌 Групповой тур из Лиссабона: € 50–90, обычно включает Cabo da Roca + Cascais',
          '💡 Совет: приезжать до 9:00, иначе толпы у Palácio da Pena'
        ]}
      ]
    },
    {
      id: 'main-sights',
      title: 'Главные достопримечательности',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Palácio Nacional da Pena (Замок Пена)', content: [
            { kind: 'paragraph', text: 'Разноцветный романтический дворец XIX в. на вершине горы. Символ Синтры. Вход в парк + дворец: € 14. Только парк: € 7,50. Открыто 9:30–19:00 летом, до 18:00 зимой. ОБЯЗАТЕЛЬНО онлайн-билеты с временным слотом.' }
          ]},
          { id: 's2', title: 'Castelo dos Mouros (Мавританский замок)', content: [
            { kind: 'paragraph', text: 'Каменные стены VIII–XII вв. на соседней горе. Виды 360°. Комбинированный билет с Palácio da Pena: € 20,50. Отдельно: € 8. Много ходьбы по стенам — не для тех, кто боится высоты.' }
          ]},
          { id: 's3', title: 'Quinta da Regaleira', content: [
            { kind: 'paragraph', text: 'Мистическая усадьба начала XX в. с подземным «колодцем инициации» (Poço Iniciático) — спиральная лестница в скале. € 15. Садовая часть — с готикой, гротами, туннелями. Обязательно к посещению.' }
          ]},
          { id: 's4', title: 'Palácio Nacional de Sintra', content: [
            { kind: 'paragraph', text: 'Городской дворец королей, XIII–XVIII вв. Два белых конических дымохода — узнаваемый силуэт. € 10. В центре исторической части.' }
          ]},
          { id: 's5', title: 'Palácio de Monserrate', content: [
            { kind: 'paragraph', text: 'Экзотический дворец-вилла в восточном стиле. Менее посещаем. € 8. 4 км от центра — такси.' }
          ]},
          { id: 's6', title: 'Convento dos Capuchos', content: [
            { kind: 'paragraph', text: 'Францисканский монастырь, спрятанный в лесу. Аскетичные кельи в стенах скал. € 7. 10 км от центра.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sample-itinerary',
      title: 'Примерный маршрут на день',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '09:00 — прибытие', content: [
            { kind: 'paragraph', text: 'Поезд из Rossio. На выходе — автобус 434 (€ 13,50 за суточный hop-on/hop-off билет (434/435); разовый билет ~€ 4 в одну сторону) или такси/Uber до Palácio da Pena (€ 6–8).' }
          ]},
          { id: 'r2', title: '09:30–11:30 — Palácio da Pena', content: [
            { kind: 'paragraph', text: 'С онлайн-слотом зайти внутрь, обойти дворец + сад (2 часа). Осмотр основных комнат + панорамные террасы.' }
          ]},
          { id: 'r3', title: '11:30–13:00 — Castelo dos Mouros', content: [
            { kind: 'paragraph', text: 'Спуститься пешком (30 мин по лесной тропе) или автобусом. Обойти стены по периметру.' }
          ]},
          { id: 'r4', title: '13:00–14:00 — обед', content: [
            { kind: 'paragraph', text: 'В центре Синтры. Традиционные queijadas и travesseiros de Sintra (выпечка). Кафе Piriquita — культовая пекарня с 1862 г.' }
          ]},
          { id: 'r5', title: '14:00–15:30 — Palácio Nacional de Sintra', content: [
            { kind: 'paragraph', text: 'Главный городской дворец. Быстрый осмотр 1 час.' }
          ]},
          { id: 'r6', title: '15:30–17:30 — Quinta da Regaleira', content: [
            { kind: 'paragraph', text: 'Пешком от центра 10 мин. Колодец инициации + туннели + сады. 2 часа минимум.' }
          ]},
          { id: 'r7', title: '17:30–19:00 — Cabo da Roca (опционально)', content: [
            { kind: 'paragraph', text: 'Самая западная точка Европы, 18 км от Синтры. Автобус 403 Scotturb, 40 мин. Закат над Атлантикой.' }
          ]},
          { id: 'r8', title: '19:30 — возврат', content: [
            { kind: 'paragraph', text: 'Поезд в Лиссабон. Последний Rossio 23:15.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          '🎫 ОБЯЗАТЕЛЬНО онлайн-билеты на Palácio da Pena (parquesdesintra.pt). В сезон слоты могут заканчиваться за неделю',
          '👟 Удобная обувь — очень много ходьбы по холмам и неровной брусчатке',
          '🧥 Свитер: в Palácio da Pena может быть ветрено и прохладно даже летом',
          '💧 Вода — кафе мало на вершине, захватите бутылку',
          '🎫 Комбинированный билет Palácio da Pena + Castelo dos Mouros + Monserrate — € 32, экономия € 8',
          '🚌 Автобус 434 (€ 13,50 за суточный hop-on/hop-off билет (434/435); разовый билет ~€ 4 в одну сторону) — охватывает все главные достопримечательности',
          '🚫 Избегайте Palácio da Pena после 11:00 — толпы; Quinta da Regaleira лучше в середине дня',
          '📸 Лучшее время для фото Palácio da Pena — утро (без теней) или закат',
          '🚗 На авто: парковка в городе € 3–5 в день, но дороги забиты',
          '💰 Lisboa Card НЕ покрывает дворцы Синтры — отдельные билеты'
        ]}
      ]
    },
    {
      id: 'season',
      title: 'Сезонность',
      content: [
        { kind: 'checklist', items: [
          '🌸 Весна (март–май) — идеальное время, цветение, умеренно туристов',
          '☀️ Лето (июнь–август) — очень много туристов, но дни длинные',
          '🍂 Осень (сентябрь–ноябрь) — красиво, +15–20°C, меньше толп',
          '🌧️ Зима (декабрь–февраль) — тихо, часто туман и дождь, но дворцы работают'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Parques de Sintra — Monte da Lua (оператор дворцов)', url: 'https://www.parquesdesintra.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Sintra — муниципальный туризм', url: 'https://www.visitsintra.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Sintra', url: 'https://www.visitportugal.com/en/destinos/lisboa-regiao/73779', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}