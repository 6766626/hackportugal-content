export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Удостоверение капитана прогулочного судна — категории и обучение (Carta de Navegador de Recreio)',
  tldr: 'Carta de Navegador de Recreio — официальное удостоверение капитана для управления частной прогулочной лодкой.\n\nКатегории: MARINHEIRO (до 3 миль от берега / 10 миль от порта-убежища), PATRÃO LOCAL (до 6 миль от берега / 25 миль от порта-убежища), PATRÃO DE COSTA (до 40 миль от берега), PATRÃO DE ALTO MAR (без ограничений)\.\n\nМинимальный возраст: 16 лет для Marinheiro, 18 — для Patrão. Обучение в аккредитованных школах: 30–100 часов, экзамен в Capitania do Porto, теория и практика.\n\nСтоимость: примерно 250–1 500 € в зависимости от категории. Иностранные права (RYA Day Skipper, ICC, ASA) можно конвертировать через DGRM (морскую администрацию Португалии) с упрощённым экзаменом.',
  tags: ['carta', 'navegador', 'capitao', 'dgrm', 'curso'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда нужна Carta — мотор/размер',
      content: [
        { kind: 'paragraph', text: 'Лицензия капитана нужна не для каждой лодки. Базовые правила по мощности двигателя и размеру:' },
        { kind: 'checklist', items: [
          'Без удостоверения: только лодки длиной менее 5 м с мотором менее 4.5 кВт (~6 л.с.), при дневном плавании в пределах акватории порта',
          'MARINHEIRO JÚNIOR: малое прогулочное судно до 6 м, мотор до 4.5 кВт, только дневное плавание, не далее 1 мили от линии малой воды и 3 миль от любого порта-убежища',
          'MARINHEIRO: дневное плавание, не далее 3 миль от берега и 10 миль от любого порта-убежища',
          'PATRÃO LOCAL: в виду берега, не далее 6 миль от берега и 25 миль от любого порта-убежища',
          'PATRÃO DE COSTA: до 40 миль от берега',
          'PATRÃO DE ALTO MAR: без ограничения по району',
          'Гидроцикл (mota de água): нужна отдельная Carta para motas de água — упрощённый курс'
        ] },
        { kind: 'paragraph', text: 'Классы плавания: Local (местный район плавания), Costeira (прибрежный район), Largo (открытое море).' },
        { kind: 'warning', text: 'Арендодатели в Algarve и Cascais нередко говорят: «берите моторку 5 м без прав». Проверь двигатель: если он мощнее 4.5 кВт — нужна минимум Marinheiro. Иначе чартерная фирма рискует штрафом, а ты можешь лишиться страховки в случае инцидента.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Требования для получения',
      content: [
        { kind: 'checklist', items: [
          'Минимум 16 лет (Marinheiro) или 18 лет (Patrão)',
          'Медсправка о годности к управлению судном (30–50 €)',
          'Умение плавать: 50 м без остановки под наблюдением (для всех категорий)',
          'Визовые ограничения отсутствуют: иностранцы могут получить наравне с португальцами',
          'NIF (налоговый номер) и Cartão de Cidadão (гражданская карта) или паспорт + подтверждение адреса',
          'Курс в аккредитованной DGRM школе'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Обучение: где и как',
      content: [
        { kind: 'paragraph', text: 'Список аккредитованных DGRM школ смотри на dgrm.pt/formacao1. Больше всего школ в Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 часов (теория + ~10 часов практики), ~250–400 €',
          'PATRÃO LOCAL: ~50 часов, ~400–600 €',
          'PATRÃO DE COSTA: ~80 часов, ~600–1000 €',
          'PATRÃO DE ALTO MAR: 100+ часов, ~1000–1500 € + морская практика ~200 миль',
          'Mota de água: ~16 часов, ~150–250 €',
          'Программа: основы навигации, Правила предотвращения столкновений (COLREGS), радиосвязь VHF (база), метеорология, безопасность, предотвращение и действия при авариях'
        ] },
        { kind: 'paragraph', text: 'Популярные школы: Sea Boat Academy (Cascais), Náutica Escola (Lisboa), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. CMI и другие международные организации тоже проводят курсы.' }
      ]
    },
    {
      id: 'exam',
      title: 'Экзамен и получение Carta',
      content: [
        { kind: 'paragraph', text: 'Экзамен проходит в Capitania do Porto (капитания порта):' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Запись на экзамен',
            content: [
              { kind: 'paragraph', text: 'Школа подаёт заявку от твоего имени через BMar (Balcão Eletrónico do Mar). Либо можно записаться самостоятельно через DGRM. Ожидание обычно 2–6 недель.' }
            ]
          },
          {
            id: 's2',
            title: 'Теоретический экзамен',
            content: [
              { kind: 'paragraph', text: 'Тест из ~30–50 вопросов в зависимости от категории. Темы: COLREGS (правила расхождения), работа с картами, метеорология, безопасность, обязательное оборудование. Проходной балл — 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Практический экзамен',
            content: [
              { kind: 'paragraph', text: 'Для категорий Patrão и выше. Нужно показать: швартовку к причалу, «человек за бортом», использование радиостанции VHF, работу с GPS, навигацию по компасу.' }
            ]
          },
          {
            id: 's4',
            title: 'Получение Carta',
            content: [
              { kind: 'checklist', items: [
                'Готовность: примерно через 2–4 недели',
                'Выдаётся DGRM в электронном виде с ключом доступа; доступна в приложении gov.pt',
                'Продлевается с медосмотром: до 70 лет — перед истечением срока, с 70 лет — каждые 5 лет, с 80 лет — каждые 2 года'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Конвертация иностранных прав',
      content: [
        { kind: 'paragraph', text: 'Если у тебя уже есть иностранные капитанские права, многие из них может признать DGRM (equiparação). Подаёшь заявку онлайн; DGRM сверяет компетенции, программу и часы обучения с требованиями Decreto-Lei 93/2018 и присваивает соответствующую категорию (иногда с дополнительным экзаменом). Сбор: 89,37 € (цифровая карта) или 99,30 € (цифровая + пластиковая).' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → обычно конвертируется в Patrão de Costa с теоретическим экзаменом',
          'RYA Yachtmaster Coastal/Offshore → Patrão de Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local или Costeiro в зависимости от отметок',
          'ASA (US) Bareboat Cruising 104+ → как правило конвертируется',
          'Российское «Удостоверение судоводителя» → чаще требует переэкзаменовки; иногда проще пройти курс с нуля',
          'Украинское «Посвідчення на право керування малим судном» → переэкзамен по теории',
          'Бразильская «Habilitação Náutica» → упрощённый процесс по линии соглашений CPLP'
        ] },
        { kind: 'paragraph', text: 'Документы для конвертации:' },
        { kind: 'checklist', items: [
          'Оригинал иностранных прав + присяжный перевод на португальский',
          'Судовой журнал/логи плавания (logbook) — желательно',
          'Медсправка',
          'Заявление в DGRM с указанием желаемой категории',
          'Стоимость: 100–300 € + упрощённый экзамен'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          'Хочется просто покататься на катере с друзьями в бухте Лиссабона — бери Marinheiro. Пара недель курса, ~300 €',
          'Планируешь аренду лодки в Algarve / на Madeira / на Азорских островах — смотри в сторону Patrão Local: без него многие компании не сдают суда',
          'Для океана и переходов между островами Азор — минимум Patrão de Costa',
          'Курсы CMI (международные) нередко дают и португальскую Carta, и ICC',
          'Школы в Cascais и Vilamoura проводят обучение на английском, по итогам выдают португальскую Carta',
          'Лучшее время записываться: октябрь–март (низкий сезон и ниже цены)',
          'Не покупай лодку до сдачи на Carta — управлять ею будет некому',
          'Учти сборы за стоянку в маринах: в Cascais ~30 €/день, в Lagos ~25 €, в Vilamoura ~50 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Курс MARINHEIRO', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Курс PATRÃO LOCAL', amountEURMin: 400, amountEURMax: 600 },
    { label: 'Курс PATRÃO DE COSTA', amountEURMin: 600, amountEURMax: 1000 },
    { label: 'Курс PATRÃO DE ALTO MAR', amountEURMin: 1000, amountEURMax: 1500 },
    { label: 'Курс: гидроцикл (mota de água)', amountEURMin: 150, amountEURMax: 250 },
    { label: 'Экзамен в Capitania', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Конвертация иностранных прав', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Медосмотр для Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Повторный медосмотр (после 70 лет, каждые 5 лет)', amountEUR: 30 }
  ],
  sources: [
    { title: 'DGRM — Carta de Navegador de Recreio', url: 'https://www.dgrm.pt/am-nr-navegador-recreio', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'DGRM — Equiparação de carta de navegador de recreio', url: 'https://www.dgrm.pt/equiparacao-de-carta-de-navegador-de-recreio', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'DGRM — escolas/entidades formadoras acreditadas', url: 'https://www.dgrm.pt/formacao1', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 93/2018 — Regime Jurídico da Náutica de Recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/93-2018-116954925', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}