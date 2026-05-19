export default {
  editorialVoice: 'hackportugal',
  id: 'cp-comboios-intercity',
  categoryId: 'public_transport',
  title: 'CP — поезда: Alfa Pendular, Intercidades и пригородные',
  tldr: 'CP (Comboios de Portugal) — государственная железнодорожная компания. Главные категории поездов: Alfa Pendular (быстрый, Лиссабон — Порту 2:50, ~30 €), Intercidades (медленнее, ~25 €), Regional/Urbano (пригородные и региональные)\.\n\nПокупать билеты лучше заранее — за 60 дней через cp.pt или приложение «CP — Comboios de Portugal». Скидки: молодёжь до 30 лет — 50%, дети 4–12 лет — 50%, ≥65 лет — 50%. Багаж — бесплатно. Велосипеды: в Regional, а также по выходным в Urbano.',
  tags: ['cp', 'поезд', 'alfa pendular', 'intercidades', 'lisboa porto', 'comboio'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'categories',
      title: '🚂 Категории поездов',
      content: [
        { kind: 'substeps', items: [
          { id: 'ap', title: 'Alfa Pendular (AP) — флагман', content: [
            { kind: 'checklist', items: [
              '⚡ Lisboa Sta Apolónia/Oriente → Porto Campanhã: 2:50',
              '⚡ Лиссабон → Faro: 3:00',
              '🪑 Комфорт: 2 класса (Conforto + Turística), Wi-Fi, розетки, вагон-ресторан',
              '💰 Цена: 25–35 € стандарт, 1 класс 35–50 €',
              '🎟️ Бронирование обязательно (нумерованные места)',
              '📅 Ранние билеты Tarifa Antecipada: -25% до -50%, доступны за 60 дней'
            ]}
          ]},
          { id: 'ic', title: 'Intercidades (IC) — региональные экспрессы', content: [
            { kind: 'checklist', items: [
              '🕐 Лиссабон → Порту: 3:30 (~5 € дешевле AP)',
              '🕐 Лиссабон → Faro: 3:30',
              '🕐 Лиссабон → Évora / Beja: 1:30 / 3:00',
              '💰 Цена: 18–30 €',
              '🎟️ Бронирование обязательно',
              '🪑 1 класс есть (5–10 € сверху)',
              '🚲 Велосипеды в специальном вагоне (по запросу)'
            ]}
          ]},
          { id: 'regional', title: 'Regional + InterRegional — медленные поезда', content: [
            { kind: 'checklist', items: [
              '⏰ Все станции, 50–80 км/ч',
              '💰 Цена: 5–15 € (короткие маршруты)',
              '🎟️ Без бронирования (билет на день)',
              '🚲 Велосипеды бесплатно',
              '👨‍👩‍👧 Идеально для коротких поездок: Lisboa-Sintra, Porto-Aveiro'
            ]}
          ]},
          { id: 'urbano', title: 'Urbano — пригородные поезда', content: [
            { kind: 'checklist', items: [
              '🚉 Лиссабон: 4 линии (Sintra, Cascais, Azambuja, Sado)',
              '🚉 Порту: линии до Aveiro, Braga, Marco de Canaveses',
              '💳 Carris Metro Lisboa: карта Navegante за 30 €/мес покрывает линии Sintra/Cascais',
              '💳 Порту: карта Andante покрывает Urbano',
              '⏰ Часто: каждые 15–30 мин'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'buying-tickets',
      title: '🎟️ Где покупать',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Онлайн (рекомендуется)', content: [
            { kind: 'checklist', items: [
              '🌐 cp.pt — официальный сайт, русского языка НЕТ (только PT/EN)',
              '📱 Приложение «CP — Comboios de Portugal» (iOS/Android)',
              '🔒 Билет сохраняется в приложении в виде QR-кода — распечатывать не нужно',
              '📅 Бронирование за 60 дней — самые низкие цены',
              '💳 Принимают: Multibanco, MB WAY, карты Visa/Mastercard, PayPal'
            ]}
          ]},
          { id: 'station', title: 'На станции', content: [
            { kind: 'checklist', items: [
              '🤖 Автомат на станции — оплата картой, распечатанный билет',
              '👤 Касса — наличные/карта, возможна очередь',
              '⚠️ Для поездов Regional/Urbano автомат проверки может быть на самой платформе',
              '🚫 Купить билет в поезде можно НЕ всегда — штраф до 100 €'
            ]}
          ]},
          { id: 'discounts', title: 'Скидки', content: [
            { kind: 'checklist', items: [
              '🧒 Дети 4–12 лет: -50% (до 4 лет бесплатно, если без отдельного места)',
              '👨‍🎓 Молодёжь (Cartão Jovem ≤30): -25% по тарифу + дополнительные акции',
              '👴 ≥ 65 лет: -50%',
              '👨‍👩‍👧‍👦 Семья (≥3): -25% на всех',
              '🎫 Tarifa Antecipada: -25% до -50%, количество ограничено',
              '👨‍🎓 Студенты (Cartão de Estudante): -25%',
              '🎖️ Сотрудники CP: бесплатно (для них и семьи)'
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
          '⏰ AP и IC часто ходят по расписанию — задержки редкие',
          '🚉 В Лиссабоне AP/IC отправляются со станций Sta Apolónia (центр) или Oriente (восток); проверяйте при покупке',
          '🚉 В Порту основная станция — Campanhã (восток), дальше до São Bento (центр) можно доехать на электричке Urbano',
          '📦 Ручной багаж бесплатно (до 30 кг или 2 места + рюкзак). Большой багаж — отдельный вагон в IC',
          '🐕 Маленькие животные в переноске: бесплатно. Крупные собаки в наморднике — 50% билета',
          '🚲 Велосипед: в Regional бесплатно; в IC — велосипедный вагон по запросу; в AP — нельзя',
          '☕ Wi-Fi в AP/IC работает на маршруте Лиссабон — Порту, на других маршрутах слабее',
          '📶 Сигнал GSM плохой в горных тоннелях — скачайте всё нужное заранее',
          '⌨️ Если поезд перенесли — билет действителен на следующий поезд той же категории'
        ]}
      ]
    },
    {
      id: 'special-routes',
      title: '🌟 Особые маршруты',
      content: [
        { kind: 'checklist', items: [
          '🍷 Linha do Douro (Porto-Régua-Pocinho) — живописный маршрут вдоль реки Дору, винодельческая зона. Поезд Regional, 4 ч до Pocinho. Туристический сезон',
          '🌊 Linha do Algarve (Lagos-Faro-VRSA) — пляжи Алгарве, IC + Regional',
          '⛰️ Linha Beira Alta (Lisboa-Pampilhosa-Guarda) — горный маршрут к испанской границе',
          '🇪🇸 Sud Express / Lusitânia (Lisboa-Hendaye/Madrid) — исторические ночные поезда, приостановлены с 2020 и по состоянию на 2026 регулярного сообщения нет; могут возобновить в будущем (обновления: cp.pt и Renfe)',
          '🚂 Comboio Histórico do Vouga — туристический паровоз, лето/осень'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'AP Lisboa-Porto Turística', amountEURMin: 25, amountEURMax: 35 },
    { label: 'AP 1 класс (Conforto)', amountEURMin: 35, amountEURMax: 50 },
    { label: 'IC Lisboa-Porto', amountEURMin: 18, amountEURMax: 30 },
    { label: 'Regional короткий маршрут', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Tarifa Antecipada (60 дней)', amountEURMin: 12, amountEURMax: 25, note: '-25% до -50%' }
  ],
  sources: [
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Instituto da Mobilidade e dos Transportes', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}