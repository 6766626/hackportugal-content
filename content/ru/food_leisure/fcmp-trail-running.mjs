export default {
  editorialVoice: 'hackportugal',
  id: 'fcmp-trail-running',
  categoryId: 'food_leisure',
  title: 'Trail running и горный бег — federation card FCMP / FPA',
  tldr: 'Португалия — страна тысячи trail-забегов: Madeira Island Ultra Trail (MIUT), Trail dos Fenómenos в Açores, Templários trail, Costa Vicentina ultra, и сотни локальных. Чтобы участвовать в trail races нужна спортивная медсправка (atestado médico-desportivo, ~30-50 €) и часто federation card: FCMP (Federação Camp. de Montanhismo e Escalada) для trail-беговых трасс или FPA (Federação Portuguesa de Atletismo) для road races. Бесплатные местные забеги — без карты. Серьёзные ультра — требуют ITRA points и страховку. Federation card ~30-60 €/год, есть онлайн-курс safety + оформление.',
  tags: ['trail', 'corrida', 'fcmp', 'fpa', 'maraton'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'overview',
      title: 'Когда нужна и когда нет',
      content: [
        { kind: 'paragraph', text: 'В Португалии тысячи trail-беговых событий. Их регулируют две федерации:' },
        { kind: 'checklist', items: [
          'FCMP (Federação de Campismo e Montanhismo de Portugal): trail running, escalada, montanhismo, orientação. Большинство trail races',
          'FPA (Federação Portuguesa de Atletismo): дорожные забеги, marathons, halfs, IAAF events',
          'FPC (Federação Portuguesa de Ciclismo): для MTB и cyclocross событий',
          'ITRA (международный): ультратрейлы и UTMB qualifiers'
        ] },
        { kind: 'paragraph', text: 'Когда federation card обязательна:' },
        { kind: 'checklist', items: [
          'FCMP/FPA card: для большинства официальных trail/road races',
          'Бесплатные / благотворительные локальные забеги — обычно достаточно медсправки',
          'Ultra trails (50K+): часто требуют ITRA points + insurance + federation card',
          'Подростки до 18 лет: card часто бесплатно или со скидкой при родительском согласии',
          'Туристы (иностранцы из ЕС): можно использовать свою национальную card в Португалии (FFA Франция, RFEA Испания, FIDAL Италия и т.д.)',
          'Третьи страны (Россия, Украина, Бразилия): нужно либо португальская card либо «day license» (~5-15 €/гонка) если организатор предлагает'
        ] }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Получение FCMP card — пошагово',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Спортивная медкомиссия',
            content: [
              { kind: 'checklist', items: [
                'Atestado médico-desportivo: документ от спортивного врача о пригодности к нагрузкам',
                'Можно сделать у семейного врача или в спортивном центре',
                'Стоимость: 30-50 €, без SNS — 60-100 €',
                'Срок действия: 1 год для до 35 лет, 6 месяцев для старше',
                'Содержит: ECG, измерение давления, краткий осмотр, заключение о допуске'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Регистрация в local club',
            content: [
              { kind: 'paragraph', text: 'Federation card выдаётся через клуб (a federation не работает напрямую с физлицами). Нужно вступить в любой клуб FCMP — их сотни.' },
              { kind: 'checklist', items: [
                'Местные клубы: ищи "clube trail running + твой city"',
                'Атрибутика: Crónicas do Trail (Lisboa), Trail dos Fenómenos (Açores), Lousã Trail Sports',
                'Членство в клубе: 20-100 €/год — клубный взнос',
                'В обмен: тренировки, скидки на старты, экипировка, сообщество'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Карта федерации',
            content: [
              { kind: 'checklist', items: [
                'FCMP-карта: 30-60 €/год через клуб',
                'Включает: insurance liability + accident coverage',
                'Накладывается на медсправку (она у тебя должна быть)',
                'Действует с момента оплаты до 31 декабря текущего года',
                'Получаешь физическую карту + цифровой profile',
                'Skin-card можешь добавить в Apple Wallet (некоторые клубы делают)'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'big-races',
      title: 'Известные забеги — что бронировать',
      content: [
        { kind: 'checklist', items: [
          'Madeira Island Ultra Trail (MIUT): 115 км трасса через всю Madeira. Один из лучших ультра-трейлов в мире. Регистрация в августе на следующий апрель. ~150 €',
          'Trans Portugal Race: 350 км через всю Португалию, 7 дней',
          'Trail dos Fenómenos (Açores): 80 км по острову São Miguel',
          'Templários Trail (Tomar): 30/50/100 км в исторических местах',
          'Costa Vicentina Ultra: вдоль западного побережья',
          'Maratona de Lisboa (sábado de páscoa): IAAF road, 10 000 участников',
          'Maratona do Porto: октябрь, второй по размеру в Португалии',
          'Meia Maratona de Lisboa: март, начинается с 25 de Abril моста',
          'Серра-да-Эстрела SkyRace: на самой высокой точке материка'
        ] },
        { kind: 'paragraph', text: 'Booking platforms:' },
        { kind: 'checklist', items: [
          'PortugalCorrida (locally), Trail-running.pt: общенациональный календарь',
          'My Sportify: iOS/Android приложение',
          'ITRA: международный календарь и ranking',
          'FCMP сайт: список собственных стартов',
          'Local Câmara Municipal: организует туристические забеги'
        ] }
      ]
    },
    {
      id: 'safety-itra',
      title: 'Безопасность и ITRA points',
      content: [
        { kind: 'paragraph', text: 'Серьёзный trail running — это не просто бег. Подготовка важнее всего.' },
        { kind: 'checklist', items: [
          'ITRA points: международная система оценки. Каждый завершённый трейл даёт points в зависимости от длины и сложности',
          'Для UTMB: нужно 4-15 points в зависимости от дистанции (CCC, TDS, OCC)',
          'Для UTLO (Ultra Trail Lake Onega): требуют ITRA + medical',
          'Безопасное снаряжение mandatory list для ультра: aluminum survival blanket, запасные носки, телефон с full battery, food, water 1.5 L+, GPS',
          'Drop bags: на больших ультра — оставляешь сменную одежду в check points',
          'Coach или personal trainer: 50-100 €/час, важно для первой ультра'
        ] },
        { kind: 'warning', text: 'Trail running в Португалии летом — высокий риск тепловых ударов. Старты в июле-августе перенесены на 5:00-6:00 утра не случайно. Не пытайся бегать ультра в одиночку без support и без знания маршрута.' }
      ]
    },
    {
      id: 'gear',
      title: 'Снаряжение и где покупать',
      content: [
        { kind: 'checklist', items: [
          'Trail кроссовки: Salomon, Hoka, Altra, La Sportiva — 100-200 € пара',
          'Hydration vest 5L+: Salomon, UltrAspire, Decathlon — 50-150 €',
          'Бутылочки или резервуар: 15-50 €',
          'GPS часы: Garmin Fenix / Suunto Vertical — 400-1000 €',
          'Головной фонарь: Petzl, Black Diamond — 50-150 €',
          'Survival blanket: 5-15 €',
          'Магазины: Decathlon (бюджет), Sport Zone, Workplace Sports, Salomon Store Lisboa',
          'Online: Wiggle, BikeFit, Amazon EU'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Atestado médico-desportivo', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Членство в клубе FCMP', amountEURMin: 20, amountEURMax: 100, note: 'В год' },
    { label: 'FCMP card', amountEURMin: 30, amountEURMax: 60, note: 'В год' },
    { label: 'Маленький trail-старт (10-20 км)', amountEURMin: 15, amountEURMax: 35 },
    { label: 'Marathon регистрация', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Ultra (50-100 км)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'MIUT (115 км Madeira)', amountEUR: 160, note: 'С ITRA fee' },
    { label: 'Базовый комплект (обувь + жилет)', amountEURMin: 200, amountEURMax: 400 },
    { label: 'GPS часы продвинутые', amountEURMin: 500, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'IPDJ — federações desportivas oficiais (FCMP, FPA reconhecidas)', url: 'https://ipdj.gov.pt/federacoes-desportivas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registo praticantes desportivos', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 102/2018 — exames médicos desportivos', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-2018-117203174', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 248-A/2008 — regime jurídico dos contratos de seguro de federações desportivas', url: 'https://dre.pt/dre/detalhe/decreto-lei/248-a-2008-242876', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
