export default {
  editorialVoice: 'hackportugal',
  id: 'berlengas-islands',
  categoryId: 'travel_portugal',
  title: 'Берленги — природный заповедник и остров-крепость',
  tldr: 'Arquipélago das Berlengas — группа гранитных островов в 10 км от Peniche. Биосферный заповедник ЮНЕСКО. Главный остров Berlenga Grande открыт с мая по сентябрь, лимит — 550 посетителей в день (бронирование обязательно). На острове: форт São João Baptista (XVII век, можно ночевать в «кельях»), пляжи, дайвинг, треккинг, морские пещеры. 45 мин на быстром катере, 1:15 на обычном.',
  tags: ['berlengas', 'острова', 'peniche', 'природа'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'booking',
      title: 'Бронирование посещения — обязательно',
      content: [
        { kind: 'paragraph', text: 'С 2011 года ICNF (Instituto da Conservação da Natureza e das Florestas) ограничивает посещение — 550 человек в день на Berlenga Grande, чтобы сохранить экосистему.' },
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Зарезервировать доступ ICNF', content: [
            { kind: 'paragraph', text: 'berlengaspass.icnf.pt (платформа BerlengasPass) → выбрать дату и количество человек. Здесь же оформляется обязательная плата за доступ/посещение (~3 € с человека), а не только бесплатное бронирование даты. Регистрация открывается за ≥ 30 дней до визита. Для июля-августа бронируйте в день открытия окна: места заканчиваются за часы.' }
          ]},
          { id: 'b2', title: '2. Купить билет на катер', content: [
            { kind: 'checklist', items: [
              'Feeling Berlenga, Viamar, Julius Berlengas — основные операторы (есть в порту Peniche)',
              'Быстрый катер: 22-28 € туда-обратно, 45 мин в одну сторону',
              'Обычный катер: 18-22 € туда-обратно, 1 ч 15 мин в одну сторону',
              'Летний график: рейсы 9:30 / 11:00 / 14:30',
              'Возврат с острова: 16:00 / 17:30',
              'В шторм рейсы отменяются — вам возвращают деньги или переносят поездку'
            ]}
          ]},
          { id: 'b3', title: '3. В день поездки', content: [
            { kind: 'checklist', items: [
              'Приехать в Peniche за 30 мин',
              'Причал Porto de Recreio (рядом большая автопарковка)',
              'Бронирование ICNF показать на бумаге или с телефона',
              'Солнцезащитный крем, воду, закуски купить в Peniche (на острове дорого и мало выбора)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-to-see',
      title: 'Что посмотреть на Berlenga Grande',
      content: [
        { kind: 'substeps', items: [
          { id: 'v1', title: '🏰 Форт São João Baptista', content: [
            { kind: 'paragraph', text: 'Построен в 1651 году на отдельном островке, соединён с основным каменным мостом. Можно ночевать в гостевом доме форта (от €40/ночь, бронь за 6 мес вперёд). Фото на закате с мостом — визитная карточка архипелага.' }
          ]},
          { id: 'v2', title: '🏖️ Praia do Carreiro do Mosteiro', content: [
            { kind: 'paragraph', text: 'Единственный песчаный пляж. Прозрачная вода, 18-22°C в сезон. Дайвинг и снорклинг — кристально чистая вода, много рыбы.' }
          ]},
          { id: 'v3', title: '🌊 Морские пещеры + Furado Grande', content: [
            { kind: 'paragraph', text: 'Тур на местной шлюпке (10-15 €, 45 мин): объезжают остров, заходят в Gruta Azul, Cova do Sonho, огромный тоннель Furado Grande. Заказать можно у рыбаков прямо на пляже.' }
          ]},
          { id: 'v4', title: '🥾 Треккинг', content: [
            { kind: 'paragraph', text: 'Единственная дорога с причала к форту — 1.5 км пешком, тропа по гранитным скалам. На острове нет транспорта. Маршруты: к маяку Duque de Bragança (вершина, 85 м), к маяку Farol, круговая тропа 3 км.' }
          ]}
        ]}
      ]
    },
    {
      id: 'stay-overnight',
      title: 'Остаться на ночь',
      content: [
        { kind: 'checklist', items: [
          '🏰 Forte São João Baptista — гостевой дом в бывших монашеских кельях. €40-60/ночь. Бронь за 5 месяцев',
          '🏕️ Campismo da Berlenga — кемпинг в палатках. €10-15/ночь + сбор за высадку. Нужно отдельно вписываться в окно ICNF (10 мест/ночь)',
          '🐟 Есть один ресторан Mar e Sol (фирменное блюдо — рыбная калдейрада, caldeirada; морские ежи). 15-25 €/человек',
          '❌ Нет магазинов, нет банкоматов, нет сотовой связи (изредка ловит Vodafone)',
          '⚡ Электричество только от солнечных батарей форта — с 18:00 до 23:00'
        ]}
      ]
    },
    {
      id: 'when-to-go',
      title: 'Когда лучше ехать',
      content: [
        { kind: 'checklist', items: [
          'Сезон: середина мая — конец сентября. Вне сезона катера не ходят',
          'Погода: июль-август — тепло, но много туристов. Май/июнь и сентябрь — идеально',
          'Воскресенье — меньше народа',
          'Шторм весной = частая отмена. Проверьте прогноз погоды для Peniche',
          'Ветер часто сильный — возьмите ветровку даже в жару',
          '☀️ День на Berlengas = 5-6 часов (прибытие с 11:00, обратно в 16:00-17:00)'
        ]}
      ]
    },
    {
      id: 'practical',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Примите таблетку от укачивания (Vertigin, Dramamine) за 30 мин до поездки — катер качает',
          '🥤 Вода 2 л/человек — на острове 3 €/бут',
          '🐟 Рыболовство на острове запрещено (природный заповедник)',
          '🐦 Есть чайки — ведут себя агрессивно, если еда открыта; не кормите',
          '🏊 Купаться только в специальной зоне — за пределами опасные течения',
          '♻️ Мусор уносите с собой',
          '📷 Телефон в пластиковый зип-пакет — морские брызги',
          '♿ Для людей с инвалидностью: доступ на Berlengas ограничен, пандусов нет'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Бронирование ICNF', amountEUR: 0 },
    { label: 'Катер туда-обратно (быстрый)', amountEURMin: 22, amountEURMax: 28 },
    { label: 'Катер туда-обратно (обычный)', amountEURMin: 18, amountEURMax: 22 },
    { label: 'Тур по морским пещерам', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Гостевой дом в форте', amountEURMin: 40, amountEURMax: 60, note: '€/ночь' },
    { label: 'Кемпинг', amountEURMin: 10, amountEURMax: 15, note: '€/ночь' }
  ],
  sources: [
    { title: 'BerlengasPass — ICNF (official reservation + fee)', url: 'https://berlengaspass.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'ICNF — Reserva Natural das Berlengas', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Peniche — Berlengas', url: 'https://visitpeniche.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}