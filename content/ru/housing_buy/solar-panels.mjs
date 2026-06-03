export default {
  editorialVoice: 'hackportugal',
  id: 'solar-panels',
  categoryId: 'housing_buy',
  title: 'Солнечные панели — установка, разрешения, экономия',
  tldr: 'Португалия — топ-3 стран ЕС по солнечному потенциалу. Системы UPAC (Unidade de Produção para Autoconsumo) — пороги по DL 15/2022 / SERUP: очень малые системы (до ~700 W без инжекции в сеть) могут быть exempt от prior control; >700 W и ≤30 кВт — обычно mera comunicação prévia через DGEG/SERUP; >30 кВт — более тяжёлый prior control.\n\nСтоимость под ключ: 4 000-12 000 € для типичной квартиры/дома. Окупаемость 5-9 лет. Для получения денег за excedente нужен bidirectional smart meter и договор продажи с comercializador/agregador (net metering 1:1 в PT НЕТ)\.\n\nFundo Ambiental не гарантирует ежегодное финансирование — сверяйте actual Aviso на fundoambiental.pt.',
  tags: ['солнечные панели', 'солнечная энергия', 'автопотребление', 'Fundo Ambiental'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-solar',
      title: '☀️ Почему PT — отличное место',
      content: [
        { kind: 'checklist', items: [
          '🌞 Солнечная радиация: 1500-1700 кВт·ч/м²/год — топ-3 в ЕС (после Кипра, Мальты)',
          '☀️ Среднестатистический день: 5-7 часов пиковой солнечной активности',
          '⚡ Цены на электричество: 0.16-0.25 €/кВт·ч (среди самых высоких в ЕС) → быстрая окупаемость',
          '📏 Домашняя система 5 кВт генерирует 7 000-9 000 кВт·ч/год — покрывает потребности большинства семейных домохозяйств',
          '💰 Экономия: 800-1 500 €/год для среднестатистической семьи с системой 5 кВт',
          '🌍 Снижение выбросов CO2: ~3 тонны/год от системы 5 кВт',
          '📈 Стоимость недвижимости: добавляет 5-10% к стоимости недвижимости'
        ]}
      ]
    },
    {
      id: 'system-types',
      title: '🔌 Типы систем',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Residential UPAC ≤30 кВт (типичные дома/квартиры)', content: [
            { kind: 'checklist', items: [
              'Большинство домашних систем — по mera comunicação prévia через DGEG/SERUP (не лицензия)',
              'Очень малые системы (~до 700 W без инжекции в сеть) могут быть exempt от prior control',
              'Самый популярный вариант для квартир / домов',
              'Инвертор + панели на крыше / балконе / пристройке',
              'Собственное потребление + подача в сеть (если есть излишки и оборудован bidirectional meter)',
              'Стоимость: 4 000-12 000 € под ключ',
              'Срок установки: 1-3 дня'
            ]}
          ]},
          { id: 's2', title: 'UPAC > 30 кВт', content: [
            { kind: 'checklist', items: [
              'Требует более тяжёлой регистрации/сертификации',
              'Для крупных домов / коммерческих объектов',
              'Стоимость: 10 000-30 000+ €',
              'Может быть выгоднее для бизнеса (вычеты по IRC)',
              '>1 MW — лицензирование'
            ]}
          ]},
          { id: 's3', title: 'Чистая продажа энергии в сеть', content: [
            { kind: 'checklist', items: [
              'Pure production/sale to grid — отдельный электропроизводственный проект под текущими правилами SEN',
              'Это не обычный residential UPAC',
              'Требования DGEG/ERSE и наличие grid capacity',
              'Менее популярно для жилья — автопотребление обычно выгоднее'
            ]}
          ]},
          { id: 's4', title: 'Гибридная система с аккумулятором', content: [
            { kind: 'checklist', items: [
              'Солнечная система + литиевый аккумулятор (Tesla Powerwall, BYD, LG Chem)',
              'Стоимость: +5 000-12 000 € к базовой системе',
              'Польза: использовать солнечную энергию вечером, резервное питание при отключениях',
              'Окупаемость дольше, но больше независимости от сети',
              'Подходит для сельской местности / частых отключений'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Детализация стоимости',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Стандарт 2026 под ключ', content: [
            { kind: 'checklist', items: [
              '3 кВт (квартира): 3 500-5 500 € (8-10 панелей, инвертор, монтаж)',
              '5 кВт (небольшой дом): 5 500-8 500 € (12-15 панелей)',
              '6.9 кВт (типичная мощность частного дома; mera comunicação prévia, лицензия начинается с >30 кВт по DL 15/2022): 7 500-11 000 €',
              '+ аккумулятор 10 кВт·ч: +5 000-8 000 €',
              '+ интеграция с умным домом: +500-1 500 €'
            ]}
          ]},
          { id: 'c2', title: 'Что входит', content: [
            { kind: 'checklist', items: [
              'Солнечные панели (260-450 W каждая)',
              'Инвертор (строковый или микроинверторы)',
              'Крепёжное оборудование',
              'Кабели, переключатели, предохранители',
              'Умный счётчик / система мониторинга',
              'Работы по установке',
              'Регистрация в DGEG (часто делает установщик)',
              'IVA: с 1 июля 2025 льготная ставка 6% на солнечные панели отменена — применяется стандартная ставка 23% (verba 2.37 Lista I прекратила действие). Возврат к 6% обсуждался при OE2026, но на сегодня не действует'
            ]}
          ]},
          { id: 'c3', title: 'Субсидии — Fundo Ambiental', content: [
            { kind: 'checklist', items: [
              'Fundo Ambiental не гарантирует ежегодное финансирование — проверяйте actual open Aviso на fundoambiental.pt',
              'Прошлые residential efficiency calls имели конкретные caps и reimbursement rates, но 2026 amounts зависят от активной программы',
              'Calls open irregularly с собственными deadlines, budgets и eligibility rules — мониторьте Fundo Ambiental и Diário da República',
              'Не закладывайте субсидию в бюджет проекта до утверждения вашей заявки',
              'MAE — программа от муниципалитетов (некоторые города дополняют)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Процесс установки',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Сметы', content: [
            { kind: 'checklist', items: [
              'Получить 3+ сметы от установщиков',
              'Топ установщики: Galp Solar, EDP Solar, Dynegy, Solposto, EnergyON, SunEnergy',
              'Неаффилированные часто дешевле, проверьте отзывы',
              'Запросить: марку панелей (LG, JA Solar, Trina), марку инвертора (Huawei, Fronius, SolarEdge), гарантию, сроки установки'
            ]}
          ]},
          { id: 'p2', title: '2. Структурная оценка', content: [
            { kind: 'checklist', items: [
              'Осмотр крыши — ориентация (юг лучше всего), наклон, прочность конструкции',
              'Итог: 90%+ домов в PT подходят',
              'Кондоминиум: согласие общего собрания, если крыша общая',
              'Квартира без индивидуальной крыши: панели на балконе / окне — системы на 100-500 W',
              'Если панели используют common parts — нужно одобрение assembleia condomínio по правилам кондоминиума. При отказе — юр. консультация; автоматического статутарного права на установку на общей крыше нет'
            ]}
          ]},
          { id: 'p3', title: '3. Документы', content: [
            { kind: 'checklist', items: [
              'Caderneta predial (подтверждение собственности или письменное согласие арендодателя)',
              'NIF, CC',
              'Electricity bill с CPE, NIF/ID',
              'Технические данные панелей/инвертора, декларации установщика',
              'Счёт за электроэнергию за последние 12 мес — рассчитать оптимальный размер системы',
              'Если в кондоминиуме и используются common parts: протокол одобрения assembleia'
            ]}
          ]},
          { id: 'p4', title: '4. Установка', content: [
            { kind: 'checklist', items: [
              '1-3 дня монтажа',
              'Подключение к вашему электрощиту',
              'Установка/настройка bidirectional smart meter — выполняет distribution network operator (обычно E-REDES в континентальной PT). Comercializador (поставщик) — отдельная сущность',
              'Тест + активация',
              'Регистрация на портале DGEG (часто делает установщик)'
            ]}
          ]},
          { id: 'p5', title: '5. Компенсация за излишки', content: [
            { kind: 'checklist', items: [
              'Избыточная солнечная энергия может подаваться в сеть → компенсация от вашего comercializador (EDP, Galp, Endesa, Iberdrola и др.) при наличии bidirectional smart meter и договора продажи',
              '⚠️ Net metering в смысле 1:1 зачёта в Португалии НЕТ — без договора продажи surplus может уходить в сеть без оплаты',
              'Тариф: обычно ниже розничной цены электроэнергии',
              'Для крупных UPAC — отдельный договор с comercializador/agregador'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tax',
      title: '💼 Налоговый аспект',
      content: [
        { kind: 'checklist', items: [
          'IVA reduzido может применяться к поставке/установке фотоэлектрических панелей по актуальной редакции VAT List I — уточняйте treatment в invoice у установщика',
          'Вычет по IRS прямо для домашних солнечных систем не предусмотрен (это инвестиция, а не расход)',
          'Налог на недвижимость (IMI): некоторые муниципалитеты предлагают снижение для домов с солнечными системами (скидка 5-15%)',
          'Excedente sale: для физлиц доход от продажи surplus small UPAC может быть исключён из IRS до statutory annual limit; выше — или для business activity — действуют tax/VAT rules. Подтвердите с бухгалтером/comercializador',
          'Солнечные системы для бизнеса (коммерческие UPAC): амортизация по Decreto Regulamentar 25/2009 (обычно 5-10% годовых для энергооборудования) — НЕ автоматический «полный вычет за 8-10 лет». Возврат IVA доступен ТОЛЬКО если предприятие — VAT-taxable с правом вычета и счета оформлены корректно; для частичных/исключённых деятельностей вычет ограничен. Уточняйте с TOC/CC'
        ]}
      ]
    },
    {
      id: 'rental',
      title: '🏠 Если арендуете',
      content: [
        { kind: 'checklist', items: [
          'Любая фиксированная установка требует письменного согласия владельца; для removable balcony plug-in систем также проверяйте lease, regulamento condomínio и электробезопасность',
          'Лизинг солнечных систем (Iberdrola, Galp solar leasing): провайдер устанавливает, вы платите ежемесячный платёж — экономия меньше, но без первоначальных вложений',
          'Кооперативы (Sociedade Cooperativa de Energia): общественная солнечная энергетика — вы участвуете в большей системе',
          'Владение панелей и возможность забрать при выезде должны быть согласованы письменно с владельцем ДО установки'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Система 3 кВт (квартира)', amountEURMin: 3500, amountEURMax: 5500 },
    { label: 'Система 5 кВт (небольшой дом)', amountEURMin: 5500, amountEURMax: 8500 },
    { label: 'Система 6.9 кВт', amountEURMin: 7500, amountEURMax: 11000 },
    { label: 'Дополнительный аккумулятор 10 кВт·ч', amountEURMin: 5000, amountEURMax: 8000 },
    { label: 'Субсидия Fundo Ambiental', note: 'размеры/условия зависят от активного Aviso — не закладывайте до утверждения заявки' },
    { label: 'Годовая экономия 5 кВт', amountEURMin: 800, amountEURMax: 1500, note: '€/год' }
  ],
  sources: [
    { title: 'DGEG — Direção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Fundo Ambiental', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 15/2022 — Sistema Elétrico Nacional / autoconsumo', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SERUP — Sistema Eletrónico de Registo de Unidades de Produção', url: 'https://serup.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'APREN — Renewable Energies Portugal', url: 'https://www.apren.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}