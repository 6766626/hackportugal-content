export default {
  editorialVoice: 'hackportugal',
  id: 'rental-sites-compared',
  categoryId: 'housing_rent',
  title: 'Где искать аренду жилья — сайты и стратегия',
  tldr: 'Четыре основных канала: агрегаторы (Idealista, Imovirtual, Supercasa), среднесрочная аренда (Flatio, Uniplaces), напрямую от собственников (OLX Imóveis, группы Facebook), агенты (Century 21, ERA, RE/MAX). Для долгосрочной аренды начните с Idealista + OLX. Для переезда до получения NIF — Flatio / Uniplaces (принимают просто паспорт).\n\nСредний срок поиска в Лиссабоне/Порту — 3–8 недель.',
  tags: ['аренда', 'idealista', 'imovirtual', 'olx', 'flatio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'aggregators',
      title: 'Агрегаторы — долгосрочная аренда',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Idealista (idealista.pt)', content: [
            { kind: 'checklist', items: [
              'Крупнейший агрегатор в Португалии и Испании',
              'Фильтры: цена, количество комнат, метраж, животные, терраса, гараж, энергетический сертификат',
              'Уведомления о новых объявлениях по email / в приложении',
              '70% объявлений от агентов, 30% от собственников',
              'Приложение на английском/испанском, не на русском'
            ]}
          ]},
          { id: 'a2', title: 'Imovirtual (imovirtual.com)', content: [
            { kind: 'paragraph', text: 'Второй по величине. Больше региональных объявлений (маленькие города). Комиссии агентов те же.' }
          ]},
          { id: 'a3', title: 'Supercasa (supercasa.pt)', content: [
            { kind: 'paragraph', text: 'Меньше премиум-жилья, но много средне-бюджетного. Удобные карты и фильтры.' }
          ]},
          { id: 'a4', title: 'Casa Sapo (casa.sapo.pt)', content: [
            { kind: 'paragraph', text: 'Старейший агрегатор. Часто дублирует Idealista/Imovirtual, но есть эксклюзивы от мелких агентств.' }
          ]}
        ]}
      ]
    },
    {
      id: 'medium-term',
      title: 'Среднесрочная аренда и жильё с мебелью — для новоприбывших',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Flatio (flatio.com)', content: [
            { kind: 'checklist', items: [
              'Чешская платформа, сильна в Португалии',
              'Всё с мебелью и включёнными коммунальными услугами',
              'Контракт от 1 мес до 12+ мес',
              'Принимают паспорт + бронь без NIF',
              'Платформа берёт комиссию с арендодателя, клиент сверху ничего не доплачивает',
              'Дороже Idealista на 20–40 %, но проще для новоприбывших'
            ]}
          ]},
          { id: 'm2', title: 'Uniplaces (uniplaces.com)', content: [
            { kind: 'paragraph', text: 'Для студентов. Квартиры и комнаты, часто возле университетов. Залог онлайн через платформу. Без NIF принимают.' }
          ]},
          { id: 'm3', title: 'Spotahome, Nestpick, HousingAnywhere', content: [
            { kind: 'paragraph', text: 'Международные платформы. Меньше объявлений в Португалии, но вариант для тех, кто ищет до переезда.' }
          ]},
          { id: 'm4', title: 'Airbnb (долгосрочное проживание)', content: [
            { kind: 'paragraph', text: 'С 2024 года в Португалии ограничена краткосрочная аренда (AL). Долгосрочные объявления через «Monthly stays» — 28+ дней, скидки до 40 %. Без португальского контракта, но дорого.' }
          ]}
        ]}
      ]
    },
    {
      id: 'direct',
      title: 'Напрямую от собственника',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'OLX Imóveis (olx.pt)', content: [
            { kind: 'checklist', items: [
              'Крупнейшая платформа объявлений в Португалии',
              '60 % от частников (без агента = без комиссии)',
              'Отклики приходят быстрее, чем на Idealista',
              'Больше рисков мошенничества (всегда смотреть лично)',
              'Никогда не вносите предоплату до осмотра'
            ]}
          ]},
          { id: 'd2', title: 'Группы Facebook', content: [
            { kind: 'paragraph', text: 'Группы по городам: «Arrendamento Lisboa», «Casas para Alugar Porto», «Expats in PT — Housing». Модерация слабая, но быстрые сделки возможны. Проверяйте профиль арендодателя.' }
          ]},
          { id: 'd3', title: 'Сарафанное радио / объявления на доске', content: [
            { kind: 'paragraph', text: 'В маленьких городах до сих пор работает. Спросите в Junta de Freguesia (районное управление), кафе, кондитерских. Часто без комиссии.' }
          ]}
        ]}
      ]
    },
    {
      id: 'agents',
      title: 'Агенты (через офисы)',
      content: [
        { kind: 'substeps', items: [
          { id: 'ag1', title: 'Когда обращаться', content: [
            { kind: 'paragraph', text: 'Если нет времени искать самому или нужна консультация. Комиссия: обычно 1 месячная аренда + IVA (с арендодателя, но отражается в цене).' }
          ]},
          { id: 'ag2', title: 'Крупные сети', content: [
            { kind: 'checklist', items: [
              'Century 21 — 150+ офисов',
              'ERA Imobiliária — крупнейшая в Португалии',
              'RE/MAX — американская, сильна в Lisboa/Porto',
              'Coldwell Banker — премиум',
              'Engel & Völkers — премиум'
            ]}
          ]},
          { id: 'ag3', title: 'Что требует агент', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / ВНЖ / паспорт',
              'NIF',
              'Подтверждение дохода (контракт за 3 мес / выписка)',
              'Поручитель или страховка аренды',
              'Первый месяц + залог (обычно 2–3 месяца)',
              'Поручительство компании — если работаете'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'strategy',
      title: 'Стратегия поиска',
      content: [
        { kind: 'checklist', items: [
          '📅 Начинайте искать ЗА 4–6 недель до въезда',
          '🔔 Настройте уведомления на Idealista + OLX — новые объявления быстро разбирают',
          '📲 Отвечайте в течение часа, в выходные смотрите',
          '💬 Сообщение арендодателю: имя, дата приезда, работаю/учусь, стабильный доход',
          '🏠 Всегда осматривайте лично или через видеозвонок',
          '💶 Не вносите предоплату на Revolut без подписанного контракта',
          '🤝 Договаривайтесь — цена часто завышена на 5–15 %',
          '📄 Каждый контракт регистрируется в налоговой через Portal das Finanças — это требование закона'
        ]},
        { kind: 'warning', text: 'Типичные мошеннические схемы: запрос предоплаты через Western Union, «бронирование» без показа, «арендодатель живёт в другой стране». Всегда встречайтесь лично или используйте проверенную платформу.' }
      ]
    }
  ],
  sources: [
    { title: 'Instituto da Habitação e Reabilitação Urbana (IHRU)', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — Contratos de Arrendamento', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMI — Associação dos Mediadores Imobiliários', url: 'https://www.ami.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Arrendar casa', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}