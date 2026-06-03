export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-correios-services',
  categoryId: 'daily_life',
  title: 'CTT Correios — почта, посылки, госуслуги',
  tldr: 'CTT (Correios de Portugal) — приватизированная компания, работающая под концессией универсальной почтовой услуги. Помимо доставки писем и посылок, CTT работает как банк (Banco CTT), точка оплаты счетов (Pagamentos), пункт выдачи, в части отделений — как Espaço Cidadão. Тарифы часто меняются — актуальные цены проверяйте в CTT tarifário/симуляторе. Международные пункты выдачи: GLS, DPD, DHL, UPS, Amazon — пользуйтесь приложениями для отслеживания.',
  tags: ['ctt', 'почта', 'посылка', 'correios', 'банк', 'amazon'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'services',
      title: '📮 Что делает CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Почта (основное)', content: [
            { kind: 'checklist', items: [
              '✉️ Письма: Carta Normal (без отслеживания) — тарифы зависят от веса, проверяйте актуальные в tarifário CTT',
              '📬 Carta Registada (заказное) + опционально aviso de receção (доплата)',
              '📦 Encomenda Postal (посылка): тарифы по весовым категориям, см. таблицу CTT',
              '🇪🇺 EU: тарифы зависят от веса/формата, см. CTT international tariff',
              '🌍 Международная отправка: цены по таблице на ctt.pt',
              '⚡ Correio Verde — prepaid envelope/packaging продукт (не «доплата за скорость»); цена зависит от формата конверта'
            ]}
          ]},
          { id: 's2', title: 'CTT Expresso', content: [
            { kind: 'checklist', items: [
              '🚀 Быстрая доставка по Португалии за 24 часа — посылка 2 кг от € 8',
              '🌐 Международная экспресс-доставка через собственную сеть CTT и партнёров (DHL/UPS — отдельные компании, не интегрированы как партнёры CTT по умолчанию)',
              '📍 Отслеживание автоматически по СМС или электронной почте',
              '🏛️ Пункт выдачи: ваше местное отделение CTT или партнёр (Pingo Doce, BP, Galp — но не все локации; зависит от точки)',
              '⚖️ Срок хранения зависит от продукта (для почтовых отправлений обычно ~10-15 дней, для lockers/pickup points может быть короче); проверяйте aviso'
            ]}
          ]},
          { id: 's3', title: 'Banco CTT', content: [
            { kind: 'checklist', items: [
              '🏦 Банк, основанный CTT в 2016',
              '💳 Бесплатный счёт без комиссий',
              '💰 Ипотеки, кредиты, страхование',
              '⚠️ Услуги доступны в отделениях CTT, но банковские операции выполняются отдельно и не у любого оператора',
              '🌐 Сайт bancoctt.pt'
            ]}
          ]},
          { id: 's4', title: 'Pagamentos и Espaço Cidadão', content: [
            { kind: 'checklist', items: [
              '💸 Оплата счетов (электричество, вода, газ, IRS) — наличными в отделении',
              '🛡️ Страховые полисы Lusitania',
              '🏛️ Espaço Cidadão (госуслуги) в части отделений CTT — набор услуг зависит от локации; типично: изменение адреса, заявления, справки. услуги по Cartão de Cidadão ограничены, NIF для иностранцев обычно НЕ оформляется в CTT/Espaço Cidadão',
              '💰 Лотерейные билеты Santa Casa',
              '📞 Пополнение мобильного телефона для всех операторов'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sending',
      title: '📤 Как отправить посылку',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'В отделении CTT (классический способ)', content: [
            { kind: 'checklist', items: [
              '🏛️ Найти ближайшее отделение: ctt.pt → «Encontrar Loja»',
              '📦 Прийти с посылкой: упакуйте заранее, если дома есть подходящая коробка',
              '🆔 CC/паспорт',
              '📋 Заполнить адресный бланк (etiqueta)',
              '💳 Оплатить — картой или наличными',
              '📜 Получить трек-номер',
              '⏱️ В отделении очередь 5–30 минут: хуже в Lisboa Saldanha, лучше в пригородах'
            ]}
          ]},
          { id: 'p2', title: 'Через CTT Locky / cacifos (автомат)', content: [
            { kind: 'checklist', items: [
              '🤖 Сеть cacifos CTT (Locky) — возле торговых центров и отделений CTT',
              '📱 Заранее оплачиваете онлайн на ctt.pt и выбираете cacifo',
              '🔢 Получаете QR-код',
              '🚀 Сканируете его на автомате, открывается ячейка, кладёте посылку',
              '✅ Доступно 24/7',
              '💰 Цены/условия зависят от продукта; для некоторых форматов онлайн дешевле, чем на стойке в отделении — проверяйте перед отправкой'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'receiving',
      title: '📥 Получить посылку',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Дома (доставка)', content: [
            { kind: 'checklist', items: [
              '🏠 Если адрес правильный — почтальон оставляет письмо в почтовом ящике, а мелкую посылку у двери',
              '⚠️ Если посылка не помещается — оставляют записку (aviso de chegada)',
              '🏛️ Идти в отделение CTT с aviso + CC (или паспорт/ВНЖ для иностранцев); срок хранения обычно ~10-15 дней, зависит от продукта',
              '🚚 Большие посылки (>5 кг) — позвонят и договорятся о повторной доставке'
            ]}
          ]},
          { id: 'r2', title: 'Из Pingo Doce / BP (CTT Expresso)', content: [
            { kind: 'checklist', items: [
              '📲 СМС или письмо на электронную почту с трек-номером и адресом партнёра',
              '🛒 Pingo Doce / Continente / BP / Galp — у части локаций есть CTT pickup point (не у всех; проверяйте в трекинге)',
              '🆔 CC + трек-номер',
              '⏱️ Хранят 7 дней, потом отправляют обратно'
            ]}
          ]},
          { id: 'r3', title: 'Amazon / международные отправления', content: [
            { kind: 'checklist', items: [
              '🛒 Amazon обычно доставляет через CTT Expresso или GLS',
              '🚚 GLS — через свой автомат или партнёра',
              '📦 DHL Express — пункт DHL или отделение DHL',
              '🚚 UPS Access Point: продуктовые магазины, AKI, заправки',
              '⚠️ Импортный IVA начисляется на посылки из-за пределов ЕС независимо от стоимости (порог €150 относится в основном к таможенным пошлинам). Растаможка обычно через CTT customs portal/customs broker',
              '💸 IVA: 23% mainland, 22% Madeira, 16% Açores (региональные ставки); + сбор CTT за обработку, зависит от типа отправления и IOSS/prepaid VAT status'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Полезные приложения',
      content: [
        { kind: 'checklist', items: [
          '📦 CTT Mobile (App Store / Google Play) — отслеживание, поиск отделений CTT, тарифы',
          '🚚 PostManager — универсальный трекер для CTT, GLS, DHL, UPS',
          '📍 17track — для международных посылок (Aliexpress, eBay)',
          '🛒 Amazon — встроенное отслеживание',
          '🇪🇺 EasyTrack — единый трекер для перевозчиков в EU'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '📦 Упаковка дома экономит деньги — в отделении CTT коробка стоит дополнительно около € 5',
          '📅 Понедельник — самые большие очереди: накопились отправления за выходные. Лучше идти в четверг',
          '⏰ После 16:00 отправление уже не уйдёт в тот же день: машина забора отправлений уехала',
          '🇷🇺/🇧🇾 Отправка посылок в РФ/BY: с 2022 действуют ограничения; проверяйте текущие правила CTT/санкционные требования перед отправкой',
          '🌐 Aliexpress / Temu — стандартно 14–30 дней, иногда теряются. Можно потребовать возврат через платформу',
          '🛡️ Заказное письмо (Carta Registada) — для важных бумаг: контракты, документы AT',
          '⚖️ Если CTT потеряли посылку: livro de reclamações + Anacom (anacom.pt → Reclamação)',
          '🏠 Почтовый ящик обязателен: у каждого дома есть ящик, проверьте номер вашей квартиры на нём',
          '📨 Для срочной отправки документов — DHL/UPS быстрее, но в 5–10 раз дороже',
          '💰 Кешбэк по Continente Card работает при оплате счетов через CTT Pagamentos'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Carta Normal до 20г (PT)', amountEURMin: 0.55, amountEURMax: 0.65, note: 'тарифы CTT меняются — см. tarifário' },
    { label: 'Carta Registada + aviso', amountEURMin: 4.5, amountEURMax: 5.5, note: 'актуальную цену см. на ctt.pt' },
    { label: 'Посылка 2 кг (PT)', amountEURMin: 5.5, amountEURMax: 7, note: 'см. tarifário' },
    { label: 'Посылка 5 кг (PT)', amountEURMin: 9, amountEURMax: 12 },
    { label: 'Посылка 2 кг в EU', amountEURMin: 13, amountEURMax: 18 },
    { label: 'CTT Expresso 24h до 2 кг', amountEURMin: 8, amountEURMax: 15 },
    { label: 'Растаможка CTT (handling fee)', amountEURMin: 7, amountEURMax: 15, note: 'плюс IVA на стоимость товара; зависит от типа отправления и IOSS/prepaid VAT' }
  ],
  sources: [
    { title: 'CTT — Correios de Portugal', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANACOM — регулятор почтовых услуг', url: 'https://www.anacom.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}