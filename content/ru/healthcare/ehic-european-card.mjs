export default {
  editorialVoice: 'hackportugal',
  id: 'ehic-european-card',
  categoryId: 'healthcare',
  title: 'CESD — Европейская карта медстрахования (EHIC)',
  tldr: 'Cartão Europeu de Seguro de Doença (CESD), он же EHIC — даёт доступ к государственной медицине во всех странах ЕС, ЕЭЗ, Швейцарии и Великобритании по тем же условиям, что у местных жителей. Бесплатно, 5 лет. Выдаётся резидентам PT со Segurança Social (NISS) через SS Direta за 10 минут. Пластик приходит по почте за 10-14 дней, но временный сертификат можно скачать PDF сразу.',
  tags: ['ehic', 'cesd', 'медицина', 'путешествия'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who-can',
      title: 'Кто может получить',
      content: [
        { kind: 'checklist', items: [
          'Резиденты Португалии с активным NISS (работаете, самозанятый, пенсионер, безработный на пособии)',
          'Иждивенцы (дети, супруг) — оформляются через главного застрахованного',
          'Студенты Erasmus — через SS своего вуза',
          'Граждане ЕС, получающие пенсию в PT — через Segurança Social',
          '❌ Туристы / не-резиденты — нет, им нужна частная туристическая страховка'
        ]}
      ]
    },
    {
      id: 'what-covers',
      title: 'Что покрывает',
      content: [
        { kind: 'paragraph', text: 'CESD работает в 31 стране: 27 ЕС + Норвегия, Исландия, Лихтенштейн, Швейцария, Великобритания (по Brexit соглашению с 2021 UK-EHIC / GHIC работает взаимно).' },
        { kind: 'checklist', items: [
          '✅ Неотложная помощь в госбольнице (urgência) — по местным условиям',
          '✅ Госпитализация при острых состояниях',
          '✅ Осмотры по хронике (диализ, химиотерапия) — предварительно согласовать',
          '✅ Скорая (112) — бесплатно для экстренных случаев',
          '✅ Рецептурные лекарства — с местной доплатой как резиденты',
          '❌ Частные клиники — НЕ покрываются (нужна туристическая страховка)',
          '❌ Возврат домой санавиацией — НЕ покрывается',
          '❌ Роды за рубежом (плановые) — нет',
          '❌ Стоматология (кроме экстренных случаев)',
          '❌ Вакцинация'
        ]},
        { kind: 'warning', text: 'CESD дополняет, не заменяет туристическую страховку. Для комфортной поездки (репатриация, приватные клиники, багаж) всё равно купите полис на €10-30 у страховщика.' }
      ]
    },
    {
      id: 'how-get',
      title: 'Как получить',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Вход в SS Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Iniciar sessão. Вход: NISS + пароль, либо CMD, либо Cartão de Cidadão.' }
          ]},
          { id: 'g2', title: '2. Меню "Família" → "Cartão Europeu de Seguro de Doença"', content: [
            { kind: 'paragraph', text: 'Либо поиск по "CESD" в строке. Откроется статус карты — есть / истекает / нет.' }
          ]},
          { id: 'g3', title: '3. Заказать карту', content: [
            { kind: 'checklist', items: [
              'Указать адрес доставки (обычно подтягивается из профиля)',
              'Добавить иждивенцев (спросит про них)',
              'Подтвердить — выдаётся бесплатно',
              'Пластик — 10-14 рабочих дней по почте',
              'Временный сертификат (Certificado Provisório de Substituição) — скачать PDF сразу, валиден 3 мес'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-abroad',
      title: 'Как использовать за границей',
      content: [
        { kind: 'checklist', items: [
          'В госбольнице: показать CESD + паспорт',
          'Врач сам занимается бухгалтерией — вы платите только co-payment как местный (в Испании 0 €, во Франции 30% от тарифа, в Германии 10 €/день госпитализации)',
          'Если заплатили из кармана (врач не узнал карту / не было под рукой) — сохраните все чеки, возврат через Segurança Social по возвращении',
          'Если в частной клинике — CESD не работает, но чеки сохраните для частной страховки'
        ]}
      ]
    },
    {
      id: 'lost',
      title: 'Потеря, продление, смена данных',
      content: [
        { kind: 'checklist', items: [
          'Срок: 5 лет с даты выдачи — продлевается автоматически через SS Direta',
          'Потеряли за границей — запросить Certificado Provisório онлайн, прислать по email в госбольницу',
          'Смена NISS (редко) — карта остаётся, данные обновятся',
          'Переезд в другую страну ЕС — NISS теряется, CESD становится недействительной',
          'Дети исполнилось 18 — они оформляют собственную карту (если учатся / работают)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'CESD (карта и продление)', amountEUR: 0 },
    { label: 'Временный сертификат (Provisório)', amountEUR: 0 },
    { label: 'Туристическая страховка (рекомендуется дополнительно)', amountEURMin: 10, amountEURMax: 30, note: 'за поездку' }
  ],
  sources: [
    { title: 'Segurança Social — CESD', url: 'https://www.seg-social.pt/cartao-europeu-de-seguro-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — pedido CESD online', url: 'https://www.seg-social.pt/pedido-cartao-europeu-seguro-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'EU — Your social security rights', url: 'https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
