export default {
  editorialVoice: 'hackportugal',
  id: 'promo-codes-aggregator',
  categoryId: 'daily_life',
  title: 'Скидочные карты, промокоды и кэшбэк в Португалии — где экономить',
  tldr: 'Главные программы лояльности: Cartão Continente (Continente — самый сильный, скидки + накопление на топливо Galp), Pingo Doce Poupa Mais (с BP), Cartão Jovem Europeu (для 12-29 лет, скидки в 60+ магазинах и музеях), Decathlon Card (10% возврат на бренды Decathlon), KIWOKO Card (зоомагазины, бесплатно с регистрации), Oceanário/Zoo de Lisboa (годовой абонемент окупается за 2 визита). Кэшбэк-сайты: Letyshops PT, eBuyClub PT. Промо-агрегаторы: radarcupao.pt, ocacapromocoes.pt, Cuponation.pt. На фестивалях, концертах, культурных событиях — Cartão Jovem даёт до 50% скидку (огромная экономия для студентов). Также: программы со скидкой Cartão dos Bombeiros, Cartão de Família Numerosa, IRS-возмещение через e-fatura.',
  tags: ['скидки', 'промокоды', 'cartão continente', 'кэшбэк', 'экономия'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'supermarkets',
      title: 'Супермаркеты — главная экономия',
      content: [
        { kind: 'paragraph', text: 'Cartão Continente — самая сильная программа лояльности в Португалии. Согласно собственным данным сети, активные пользователи экономят ~10% от чека за год. Pingo Doce — на втором месте.' },
        { kind: 'substeps', items: [
          {
            id: 'continente',
            title: 'Cartão Continente',
            content: [
              { kind: 'checklist', items: [
                '🛒 Бесплатно: получите в любом Continente за 1 минуту (паспорт + email)',
                '⛽ Накопление: 10 центов за литр топлива на Galp идёт на ваш Continente-баланс (Galp Frota)',
                '💸 Минимум 2% накопленных скидок на сумму годовых покупок',
                '🎟️ Эксклюзивные купоны: персональные «cupões» приходят в app + SMS, иногда 30-50% off на категории',
                '🆕 Continente Carrega: подписка на «5%/10% off» в Continente магазинах (платная, окупается если тратите >150 €/мес)',
                '📱 App «Continente» — обязателен, без него купоны не активируются'
              ]}
            ]
          },
          {
            id: 'pingo',
            title: 'Pingo Doce Poupa Mais',
            content: [
              { kind: 'checklist', items: [
                '🛒 Бесплатно: получите в магазине, регистрация на pingodoce.pt',
                '⛽ BP fuel program: 2 € на BP топливный баланс за каждые 40 € в Pingo Doce',
                '⛽ 1 000 BP Premier Plus points = 5 € в Pingo Doce',
                '💸 «Ganhe 20%»: некоторые продукты дают 20% обратно на Poupa Mais баланс',
                '📱 App «Pingo Doce» — для активации купонов'
              ]}
            ]
          },
          {
            id: 'lidl',
            title: 'Lidl Plus / Auchan Plus',
            content: [
              { kind: 'checklist', items: [
                '🛒 Lidl Plus: бесплатно через app — еженедельные купоны, scratch-cards «бонусная очередь»',
                '🛒 Auchan Plus: бесплатно, накопление баллов конвертируется в скидку',
                '🛒 Mini Preço, Aldi: без программ лояльности, скидки только промоакциями недели'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'youth-card',
      title: 'Cartão Jovem Europeu — must-have для 12-29 лет',
      content: [
        { kind: 'paragraph', text: 'Государственная программа IPDJ (Instituto Português do Desporto e Juventude). Действует во всех 38 странах European Youth Card Association. Срок действия 1 год, цена 11 € (по эквиваленту).' },
        { kind: 'checklist', items: [
          '🎯 Возраст: 12-29 лет (включительно)',
          '💶 Цена: 8 € (онлайн) или 11 € (в IPDJ-офисах). Срок: 1 год',
          '🎫 Скидки в Португалии: ~60 категорий бизнесов от кино (FNAC -10%) до фестивалей (NOS Alive -15%)',
          '🚊 Транспорт: CP (комбоиос) -25%, FlixBus -10%, Carris -50% на туристический пасс',
          '🏛️ Музеи: бесплатный вход во многие государственные музеи Лиссабона/Порту',
          '🌍 За границей: hostels, бары, кафе, спортзалы — миллион предложений по всей Европе',
          '🎓 Школьникам/студентам: подача через школу/университет, иногда бесплатно',
          '🌐 cartaojovem.pt — заказ, проверка действующих промо'
        ]}
      ]
    },
    {
      id: 'family-card',
      title: 'Cartão de Família Numerosa — для многодетных',
      content: [
        { kind: 'checklist', items: [
          '👨‍👩‍👧‍👦 Для семей с 3+ детьми (родными или приёмными)',
          '💶 Бесплатно',
          '📉 Скидки: ~20% на государственный транспорт, музеи, бассейны, культурные мероприятия',
          '🏠 Скидки на электричество (EDP), интернет (MEO, NOS, Vodafone) — обычно 20-30%',
          '🎓 Скидки в школах, детских садах, лагерях',
          '📋 Получение: через ACSS (Conselho Nacional Famílias Numerosas), нужны свидетельства о рождении детей',
          '🌐 famnumerosas.pt'
        ]}
      ]
    },
    {
      id: 'specific-stores',
      title: 'Программы конкретных магазинов',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'pet',
            title: 'Зоомагазины',
            content: [
              { kind: 'checklist', items: [
                '🐶 KIWOKO Card: бесплатно, 5% обратно на бренды KIWOKO, ветконсультации со скидкой',
                '🐶 Petland Card: бесплатно, бонусные баллы',
                '🐶 PetXP / Animais & Cª: локальные программы, спросите в магазине'
              ]}
            ]
          },
          {
            id: 'sport',
            title: 'Спорт',
            content: [
              { kind: 'checklist', items: [
                '⚽ Decathlon Card: бесплатно через app, 10% обратно на бренды Decathlon (Quechua, Domyos, Kalenji), бесплатный возврат вещей в течение 365 дней',
                '🏃 Sport Zone Card: бесплатно, скидки в течение акций',
                '🏃 SportLife / Worten Sport: локальные программы'
              ]}
            ]
          },
          {
            id: 'culture',
            title: 'Культура и развлечения',
            content: [
              { kind: 'checklist', items: [
                '🎪 Oceanário de Lisboa: годовой абонемент 39 € (взрослый) — окупается за 2 визита (вход 22 €). Дети бесплатно с абонементом родителя',
                '🦁 Jardim Zoológico de Lisboa: годовой абонемент 50 € — окупается за 3 визита',
                '🎬 NOS Cinemas Club: бесплатно, накопление за билеты, бесплатный 10-й билет',
                '🎬 UCI Cinemas Card: похожая программа',
                '🎟️ FNAC Card: 5 € платно, скидки на билеты на концерты, книги'
              ]}
            ]
          },
          {
            id: 'fashion',
            title: 'Одежда',
            content: [
              { kind: 'checklist', items: [
                '👕 Cartão Worten: бесплатно, скидки и бонусные баллы',
                '👗 Cartão Springfield / OYSHO / Mango: бесплатно через приложение бренда',
                '👠 Cartão MO: бесплатно, скидки на эксклюзивные коллекции',
                '👞 Cartão Cinco / Salsa: бесплатно, локальный кэшбэк'
              ]}
            ]
          }
        ]}
      ]
    },
    {
      id: 'cashback',
      title: 'Кэшбэк-сайты и купоны',
      content: [
        { kind: 'checklist', items: [
          '💸 Letyshops Portugal: 2-15% возврат на покупки в крупных магазинах (Amazon PT, MediaMarkt, Booking.com); вывод после 5 € накоплений',
          '💸 eBuyClub PT: тот же принцип, более активен в одежде',
          '💸 ShopBuddies PT: фокус на FashionUnited',
          '🎟️ Radarcupao.pt: каталог активных промокодов для португальских e-shop',
          '🎟️ Ocacapromocoes.pt: «охота на промо» — сообщество находок и купонов',
          '🎟️ Cuponation.pt: международный аналог',
          '📰 Mensagem-Mexer / Lifestyle blogs: периодически постят коды первого заказа (Uber Eats, Glovo, Bolt Food)'
        ]}
      ]
    },
    {
      id: 'efatura',
      title: 'e-Fatura — возврат НДС через налоговую',
      content: [
        { kind: 'paragraph', text: 'Каждый раз, давая ваш NIF на кассе, вы добавляете чек в e-Fatura.gov.pt. В конце года можно вернуть часть IVA (НДС) как вычет из IRS. Это не «скидка», но реальные деньги обратно.' },
        { kind: 'checklist', items: [
          '🍽️ Рестораны: 15% от IVA (макс 250 € в год)',
          '🚗 Ремонты авто и мотоциклов: 15% от IVA (макс 250 €)',
          '💇 Парикмахерские/салоны красоты: 15% от IVA (макс 250 €)',
          '🐾 Ветеринария: 15% (макс 250 €)',
          '🏠 Газ, электричество, вода: 15% от IVA',
          '🎓 Образование (включая курсы, репетиторов): 30% (макс 800 €)',
          '🏥 Здоровье (включая аптеки): 15% (макс 1000 €)',
          '⚠️ ВАЖНО: давайте NIF, иначе чек не учитывается. После покупки проверяйте на e-fatura.portaldasfinancas.gov.pt — там можно «утвердить» спорные чеки'
        ]},
        { kind: 'paragraph', text: 'Подробнее — см. отдельный гайд «e-Fatura deductions».' }
      ]
    }
  ],
  sources: [
    { title: 'Cartão Continente — официальный сайт', url: 'https://cartaocontinente.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Pingo Doce — Poupa Mais', url: 'https://www.pingodoce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IPDJ — Cartão Jovem Europeu (официальный сайт)', url: 'https://cartaojovem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ACSS — Conselho Nacional Famílias Numerosas', url: 'https://famnumerosas.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — e-Fatura', url: 'https://faturas.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'Новый гайд: скидочные карты и промо в Португалии. Cartão Continente (главный), Pingo Doce Poupa Mais, Cartão Jovem Europeu (12-29 лет, ~60 категорий скидок), Cartão Família Numerosa (для 3+ детей), магазинные программы (KIWOKO, Decathlon, FNAC), кэшбэк-сайты (Letyshops, eBuyClub), купонные агрегаторы (Radarcupao, Ocacapromocoes), e-Fatura возврат IVA через IRS.'
}
