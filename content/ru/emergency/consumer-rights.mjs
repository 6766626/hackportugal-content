export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights',
  categoryId: 'emergency_rights',
  title: 'Права потребителя — возврат, обмен, гарантия',
  tldr: 'В PT действует стандартная для EU защита потребителя: 14 дней на отказ от онлайн/удалённой покупки (DL 24/2014), 3 года гарантии на новые товары (Lei 84/2021), 1 год на б/у. При проблеме: подать жалобу через Livro de Reclamações Online (livroreclamacoes.pt), обратиться в DECO Proteste за помощью, в ECC Net — по трансграничным спорам в EU. Магазины обязаны принимать товары с дефектами и предлагать замену/ремонт/возврат. Если отказывают — жалоба в ASAE (asae.gov.pt).',
  tags: ['потребитель', 'возврат', 'гарантия', 'жалоба', 'deco', 'asae'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rights-overview',
      title: '⚖️ Базовые права',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Гарантия на товары (Lei 84/2021)', content: [
            { kind: 'checklist', items: [
              '✅ Новые товары: 3 года гарантии (раньше было 2 — изменено в 2022)',
              '✅ Б/у товары: тоже 3 года по умолчанию; стороны могут письменно сократить срок, но не менее чем до 18 месяцев',
              '✅ Гарантия покрывает ДЕФЕКТЫ соответствия — не износ и не повреждение по вине покупателя',
              '🔁 При дефекте продавец обязан предложить: ремонт ИЛИ замену ИЛИ скидку ИЛИ возврат денег',
              '⏰ В первые 2 года действует презумпция, что дефект был с момента продажи (бремя доказательства на продавце)',
              '📋 Храните квитанцию (talão de compra) и упаковку весь срок гарантии'
            ]}
          ]},
          { id: 'r2', title: 'Право на отказ (только онлайн/дистанционно)', content: [
            { kind: 'checklist', items: [
              '🌐 14 дней на отказ при покупке онлайн / по телефону / на дому (DL 24/2014)',
              '🚫 БЕЗ объяснения причин',
              '✅ Возврат денег в полном объёме в течение 14 дней',
              '🚚 Обратная доставка обычно за счёт покупателя (если магазин не указал иначе)',
              '🚫 Исключения: персонализированные товары, скоропортящиеся товары, нижнее бельё (распакованное), ПО (распакованное), подписки (после активации)',
              '⚠️ В офлайн-магазине правило 14 дней НЕ действует (но многие магазины добровольно делают возврат в течение 30 дней — спросите)'
            ]}
          ]},
          { id: 'r3', title: 'Информация и ценники', content: [
            { kind: 'checklist', items: [
              '🏷️ Цена ВКЛЮЧАЕТ IVA (НДС) — без скрытых доплат',
              '⚖️ Если на кассе цена выше, чем на ярлыке, продавец обязан продать по более низкой цене',
              '📜 Этикетка должна содержать: ингредиенты, страну происхождения, срок годности (для еды)',
              '🌐 На сайте — все цены с IVA, доставка отдельно',
              '⚠️ «Чёрные пятницы»: цена должна быть НИЖЕ средней за последние 30 дней (Directiva Omnibus EU)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: '📋 Как подать жалобу',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Шаг 1 — Livro de Reclamações', content: [
            { kind: 'checklist', items: [
              '📓 У каждого торгового заведения или поставщика услуг по закону должна быть «Livro de Reclamações» (физическая или электронная)',
              '📝 Попросите её — обязаны выдать в любой момент',
              '✍️ Заполняете 3 копии: вам, заведению, регулятору',
              '🌐 Альтернатива — Livro de Reclamações Online на livroreclamacoes.pt (тот же эффект)',
              '⏰ Обязательный срок ответа от заведения: 15 дней',
              '👮 Регулятор (ASAE/DGC) реагирует, иногда штрафует магазин'
            ]}
          ]},
          { id: 'l2', title: 'Шаг 2 — DECO Proteste (помощь)', content: [
            { kind: 'checklist', items: [
              '🛡️ DECO — крупнейшая ассоциация защиты потребителей',
              '💰 Платная подписка: 25 €/мес — личный консультант, образцы писем, медиация',
              '🆓 Базовая помощь бесплатна: 707 200 200 (горячая линия)',
              '📩 Обращение через сайт deco.proteste.pt',
              '📚 Журнал «Pro Teste» с тестами товаров и услуг'
            ]}
          ]},
          { id: 'l3', title: 'Шаг 3 — Регулятор', content: [
            { kind: 'checklist', items: [
              '⚖️ ASAE (Autoridade de Segurança Alimentar e Económica) — общий контроль торговли, asae.gov.pt',
              '⚡ ERSE (электричество, газ) — erse.pt',
              '📞 ANACOM (телеком, интернет) — anacom.pt',
              '🏥 INFARMED (медикаменты) — infarmed.pt',
              '🏦 Banco de Portugal (банки) — bportugal.pt',
              '🚗 AT IMT (авто) — imt-ip.pt',
              '✈️ ANAC (авиация) — anac.pt'
            ]}
          ]},
          { id: 'l4', title: 'Шаг 4 — Суд / Julgados de Paz', content: [
            { kind: 'checklist', items: [
              '⚖️ Julgados de Paz: малые иски до 15 000 € — быстрее обычного суда',
              '💰 Единый сбор 70 € (платит проигравшая сторона); при мировом соглашении в медиации — 50 €',
              '⏱️ Решение обычно за 2-6 мес',
              '🎓 Адвокат не обязателен (для исков ≤ 3 740 €)',
              '🏛️ Адреса: julgadosdepaz.mj.pt'
            ]}
          ]},
          { id: 'l5', title: 'Трансграничный спор (другая страна EU)', content: [
            { kind: 'checklist', items: [
              '🇪🇺 Centro Europeu do Consumidor (ECC-Net): cec.consumidor.pt',
              '🆓 Бесплатная помощь, медиация между покупателем из PT и иностранным магазином в EU',
              '📧 ec.europa.eu/consumers — для подачи онлайн',
              '⏱️ Решение через ECC обычно за 2-3 мес'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sample-cases',
      title: '🎯 Типичные случаи',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Сломался телефон через 8 мес', content: [
            { kind: 'checklist', items: [
              '✅ В пределах 3 лет гарантии — обращение в магазин',
              '📋 Магазин ОБЯЗАН предложить: ремонт/замену/возврат',
              '⏰ Срок ремонта: максимум 30 дней; если дольше — право на замену/возврат',
              '⚠️ Если отказывают — Livro de Reclamações + ASAE'
            ]}
          ]},
          { id: 's2', title: 'Купил онлайн неудобную одежду', content: [
            { kind: 'checklist', items: [
              '✅ 14 дней с получения — отказ без объяснений',
              '📦 Упаковать (не обязательно «как новое», но товар не должен быть повреждён)',
              '📩 Уведомить продавца по email: «exerço o meu direito de livre resolução»',
              '📮 Отправить обратно (стоимость доставки на покупателе)',
              '💸 Деньги возвращают в течение 14 дней',
              '⚠️ Нижнее бельё, распакованная обувь — могут отказать на отдельных условиях'
            ]}
          ]},
          { id: 's3', title: 'Авиакомпания отменила рейс', content: [
            { kind: 'checklist', items: [
              '🛫 Регламент EU 261/2004 — компенсация 250-600 € + изменение маршрута',
              '📜 См. отдельный гайд про авиакомпенсации (eu-flight-compensation)',
              '🏛️ Регулятор: ANAC (anac.pt)'
            ]}
          ]},
          { id: 's4', title: 'Скрытые комиссии в банке', content: [
            { kind: 'checklist', items: [
              '🏦 Banco de Portugal — Portal do Cliente Bancário',
              '📋 Reclamação онлайн на bportugal.pt',
              '⏱️ Ответ банка обязателен в течение 30 дней',
              '⚖️ Банк ОБЯЗАН раскрыть все комиссии в «PFFI» (folheto fiscal)'
            ]}
          ]},
          { id: 's5', title: 'Просроченное в супермаркете', content: [
            { kind: 'checklist', items: [
              '🏪 ASAE: фотография + чек + видео — жалоба на asae.gov.pt',
              '⚠️ Если съели — обращение к врачу; страховка магазина может покрыть ущерб',
              '💰 Штрафы ASAE магазину: 2 000-30 000 €',
              '🛒 Continente / Pingo Doce обычно делают полный возврат + бонус на карту'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '📷 Фотографируйте товар при получении — это доказательство, если он повреждён',
          '🧾 Храните чеки в Google Drive — приложение ChequeCloud работает',
          '📅 Записывайте дату покупки — для отсчёта гарантии',
          '🤝 Сначала по-хорошему: в 90% случаев менеджер магазина решит сам, без жалоб',
          '⚠️ Если магазин закрылся: гарантия переходит на производителя (если есть — Apple, Samsung, Bosch)',
          '🌐 Проверяйте магазин на «Livro de Reclamações» — частые жалобы = не покупайте',
          '📚 «Direitos do Consumidor» — официальный бесплатный буклет DGC',
          '🇪🇺 Трансграничные споры в EU: Centro Europeu do Consumidor (cec.consumidor.gov.pt) и consumer-redress.ec.europa.eu — платформа EU ODR (ec.europa.eu/odr) закрыта с 20 июля 2025',
          '⚖️ Годовое членство в DECO Proteste окупается одной серьёзной проблемой',
          '🛡️ Кредитка: чарджбэк через банк — крайнее средство (банк отзовёт списание)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'обязательно бесплатно' },
    { label: 'Подписка DECO Proteste', amountEURMin: 25, amountEURMax: 25, note: '€/мес' },
    { label: 'Julgados de Paz — единый сбор', amountEUR: 70, note: '50 € при мировом соглашении' },
    { label: 'Адвокат для серьёзного дела', amountEURMin: 200, amountEURMax: 1500, note: '€ единоразово' }
  ],
  sources: [
    { title: 'Livro de Reclamações Online', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 84/2021 — Garantia de bens', url: 'https://diariodarepublica.pt/dr/detalhe/lei/84-2021-176053057', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 24/2014 — Contratos à distância', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Centro Europeu do Consumidor (ECC-Net Portugal)', url: 'https://cec.consumidor.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}