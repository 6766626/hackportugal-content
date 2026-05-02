export default {
  editorialVoice: 'hackportugal',
  id: 'banks-compared',
  categoryId: 'banking',
  title: 'Португальские банки и необанки — сравнение 2026',
  tldr: 'Три уровня: классические банки (Millennium, CGD, Santander, BPI, Novo Banco) — полный сервис, офисы, кредиты, но комиссии 4–8 €/мес. Онлайн-банки ActivoBank / BiG — без комиссий за счёт, IBAN PT, MB WAY. Необанки Revolut / Wise / N26 — европейский IBAN (LT/DE/BE), дешёвые переводы, но ограничения для пенсионных и официальных выплат.',
  tags: ['банк', 'счёт', 'IBAN', 'MB WAY', 'Revolut'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'classic',
      title: 'Классические банки — полный сервис',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Millennium BCP', content: [
            { kind: 'checklist', items: [
              'Крупнейший частный банк Португалии',
              'Счёт: 4,50 €/мес (с зарплатой 0 €)',
              'Приложение на русском/английском',
              'Сеть ~400 отделений',
              'Хорош для ипотеки нерезидентам',
              'Комиссия за перевод SEPA: 0 €, SWIFT: 15–40 €'
            ]}
          ]},
          { id: 'c2', title: 'Caixa Geral de Depósitos (CGD)', content: [
            { kind: 'checklist', items: [
              'Государственный, самый крупный',
              'Счёт: 6 €/мес (со зарплатой/для студентов — 0 €)',
              '~600 отделений по всей Португалии',
              'Строгий KYC для нерезидентов',
              'Сильная ипотечная программа'
            ]}
          ]},
          { id: 'c3', title: 'Santander Totta', content: [
            { kind: 'checklist', items: [
              'Испанская группа, универсальный банк',
              'Счёт: 7 €/мес',
              'Приложение на русском/английском',
              'Легко открывают счета нерезидентам',
              'Конвертация EUR ↔ другие валюты по выгодному курсу'
            ]}
          ]},
          { id: 'c4', title: 'BPI', content: [
            { kind: 'paragraph', text: 'Часть CaixaBank (Испания). Хорош для инвестиций и управления капиталом. Счёт 6 €/мес. Меньше отделений, но сильное приложение.' }
          ]},
          { id: 'c5', title: 'Novo Banco', content: [
            { kind: 'paragraph', text: 'Бывший BES. Стабильный после реструктуризации. 4 €/мес. Один из немногих, кто лояльно открывает счета иностранцам с ВНЖ.' }
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Онлайн-банки с IBAN PT',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'ActivoBank (Millennium)', content: [
            { kind: 'checklist', items: [
              'IBAN PT, без комиссии за счёт',
              'Полноценное приложение, MB WAY',
              'Дебетовая Visa бесплатно',
              'Подходит для зарплаты, Recibo Verde, аренды',
              'Нет отделений — всё онлайн + кол-центр',
              'Открытие: полностью онлайн с NIF и ВНЖ/Cartão de Cidadão'
            ]}
          ]},
          { id: 'o2', title: 'BiG (Banco de Investimento Global)', content: [
            { kind: 'paragraph', text: 'Специализирован на инвестициях. Хорош для брокерских операций, IBAN PT. Для повседневного банковского обслуживания — чуть слабее ActivoBank.' }
          ]},
          { id: 'o3', title: 'Moey! (цифровой банк Caixa Económica)', content: [
            { kind: 'paragraph', text: 'Цифровой бренд CGD (Caixa Geral de Depósitos) с полностью онлайн-регистрацией. IBAN PT, бесплатный базовый счёт, виртуальные карты. Альтернатива ActivoBank. (Vivid Money — ранее упоминался — вышел из розничного рынка в 2024 году, больше не принимает новых клиентов.)' }
          ]}
        ]}
      ]
    },
    {
      id: 'neobanks',
      title: 'Европейские необанки',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'Revolut', content: [
            { kind: 'checklist', items: [
              'С 2024 Revolut открыл филиал Revolut Bank в Португалии и даёт **IBAN PT (PT50) бесплатно всем новым клиентам** (Standard/Plus/Premium). Ранее IBAN PT был за Premium+',
              'Бесплатные SEPA + обмен 20 валют',
              'Криптовалюта, акции, золото',
              'Лимит 100 000 € на иностранный счёт банка EU (санкции для РФ, Reg 833/2014)',
              'MB WAY — не поддерживается в Revolut/Wise/N26'
            ]}
          ]},
          { id: 'n2', title: 'Wise', content: [
            { kind: 'checklist', items: [
              'IBAN: BE (Бельгия)',
              'Лучшие курсы для международных переводов',
              'Дебетовая Mastercard бесплатно',
              'Меньше банковских функций, но точнее курс',
              'Подходит как дополнительный счёт для валютных операций'
            ]}
          ]},
          { id: 'n3', title: 'N26', content: [
            { kind: 'paragraph', text: 'IBAN DE. Немецкий банк, популярен у немцев и скандинавов. Лимит пополнения из некоторых стран.' }
          ]}
        ]},
        { kind: 'warning', text: 'Необанки с IBAN не PT часто НЕ принимаются: госпорталами Finanças (для возврата средств), Segurança Social (социальное страхование), некоторыми арендодателями. Основной счёт — португальский.' }
      ]
    },
    {
      id: 'how-to-open',
      title: 'Как открыть счёт',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Резидент Португалии (с ВНЖ)', content: [
            { kind: 'checklist', items: [
              'Документы: Cartão de Cidadão/ВНЖ, NIF, подтверждение адреса, подтверждение дохода',
              'Онлайн (ActivoBank, BiG) или в отделении',
              'Открытие: 1 день онлайн, 3–7 дней в отделении',
              'Первый депозит: обычно 250 €'
            ]}
          ]},
          { id: 'h2', title: 'Нерезидент (без ВНЖ)', content: [
            { kind: 'checklist', items: [
              'NIF обязателен',
              'Банки: Millennium, Santander, Novo Banco (самые лояльные)',
              'Подтверждение дохода из-за границы (справка о зарплате)',
              'Минимальный депозит: 250–1000 €',
              'Ограничение 100 000 € на депозит для граждан РФ (санкции)',
              'Без ВНЖ счета блокируются при подозрении на отмывание денег (AML)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'mb-way',
      title: 'MB WAY — платежи и переводы по телефону',
      content: [
        { kind: 'paragraph', text: 'MB WAY — португальская система мгновенных платежей от SIBS. Как Revolut, но только для IBAN PT.' },
        { kind: 'checklist', items: [
          '📱 Привязать номер к португальскому банку через приложение банка или приложение MB WAY',
          '💸 Переводы по телефону мгновенно, до 2500 €/день, 5000 €/мес',
          '🛒 Оплата в магазинах по NFC / QR',
          '🎟️ Генерация разовых виртуальных карт',
          '🆓 Бесплатно для физлиц',
          '🔄 Между всеми португальскими банками',
          '❌ НЕ работает в Revolut / Wise / N26'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Классический банк (комиссия/мес)', amountEURMin: 4, amountEURMax: 8 },
    { label: 'Онлайн-банк с IBAN PT', amountEUR: 0 },
    { label: 'Revolut Standard (IBAN PT бесплатно)', amountEUR: 0, note: 'с 2024 IBAN PT всем' },
    { label: 'Revolut Premium', amountEUR: 9, note: '€/мес, больше лимитов/страховка' },
    { label: 'Первый депозит', amountEURMin: 250, amountEURMax: 1000 }
  ],
  sources: [
    { title: 'Banco de Portugal — Lista de instituições', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGD — Fundo de Garantia de Depósitos (гарантия 100 000 €)', url: 'https://www.fgd.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — Comparador de comissões', url: 'https://clientebancario.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SIBS — MB WAY официальный', url: 'https://www.mbway.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}