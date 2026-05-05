export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Удостоверение капитана прогулочного судна — категории и обучение (Carta de Navegador de Recreio)',
  tldr: 'Carta de Navegador de Recreio — официальное удостоверение капитана для управления частной прогулочной лодкой. Категории: MARINHEIRO (до 5 миль, мотор до 30 кВт), PATRÃO LOCAL (до 12 миль, до 50 кВт), PATRÃO COSTEIRO (до 25 миль), PATRÃO ALTO MAR (без ограничений). Минимальный возраст: 16 лет для Marinheiro, 18 — для Patrão. Обучение в аккредитованных школах: 30–100 часов, экзамен в Capitania do Porto, теория и практика. Стоимость: примерно 250–1 500 € в зависимости от категории. Иностранные права (RYA Day Skipper, ICC, ASA) можно конвертировать через AMN (морская администрация Португалии) с упрощённым экзаменом.',
  tags: ['carta', 'navegador', 'capitao', 'amn', 'curso'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда нужна Carta — мотор/размер',
      content: [
        { kind: 'paragraph', text: 'Лицензия капитана нужна не для каждой лодки. Базовые правила по мощности двигателя и размеру:' },
        { kind: 'checklist', items: [
          'Без удостоверения: только лодки с мотором ≤ 4.5 кВт (~6 л.с.) и длиной ≤ 7 м',
          'MARINHEIRO: мотор до 30 кВт (~40 л.с.) или парус, до 5 миль от берега',
          'PATRÃO LOCAL: мотор до 50 кВт (~67 л.с.), до 12 миль',
          'PATRÃO COSTEIRO: без ограничений по мощности, до 25 миль',
          'PATRÃO ALTO MAR: без ограничений по мощности и расстоянию',
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
          'Курс в аккредитованной школе AMN'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Обучение: где и как',
      content: [
        { kind: 'paragraph', text: 'Список аккредитованных школ смотри на amn.pt → Carta de Navegador → Escolas. Больше всего школ в Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 часов (теория + ~10 часов практики), ~250–400 €',
          'PATRÃO LOCAL: ~50 часов, ~400–600 €',
          'PATRÃO COSTEIRO: ~80 часов, ~600–1000 €',
          'PATRÃO ALTO MAR: 100+ часов, ~1000–1500 € + морская практика ~200 миль',
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
              { kind: 'paragraph', text: 'Школа подаёт заявку от твоего имени. Либо можно записаться самостоятельно через AMN. Ожидание обычно 2–6 недель.' }
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
                'Можно забрать в Capitania или получить по почте',
                'Действует до 70 лет; затем медосмотр каждые 5 лет',
                'Пластиковая карточка, как водительские права'
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
        { kind: 'paragraph', text: 'Если у тебя уже есть иностранные капитанские права, многие из них можно конвертировать через AMN, обычно с упрощённым экзаменом.' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → обычно конвертируется в Patrão Costeiro с теоретическим экзаменом',
          'RYA Yachtmaster Coastal/Offshore → Patrão Alto Mar',
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
          'Заявление в AMN с указанием желаемой категории',
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
          'Для океана и переходов между островами Азор — минимум Patrão Costeiro',
          'Курсы CMI (международные) нередко дают и португальскую Carta, и ICC',
          'Школы в Cascais и Vilamoura проводят обучение на английском, по итогам выдают португальскую Carta',
          'Лучшее время записываться: октябрь–март (низкий сезон и ниже цены)',
          'Не покупай лодку до сдачи на Carta — управлять ей будет некому',
          'Учти сборы за стоянку в маринах: в Cascais ~30 €/день, в Lagos ~25 €, в Vilamoura ~50 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Курс MARINHEIRO', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Курс PATRÃO LOCAL', amountEURMin: 400, amountEURMax: 600 },
    { label: 'Курс PATRÃO COSTEIRO', amountEURMin: 600, amountEURMax: 1000 },
    { label: 'Курс PATRÃO ALTO MAR', amountEURMin: 1000, amountEURMax: 1500 },
    { label: 'Курс: гидроцикл (mota de água)', amountEURMin: 150, amountEURMax: 250 },
    { label: 'Экзамен в Capitania', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Конвертация иностранных прав', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Медосмотр для Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Повторный медосмотр (после 70 лет, каждые 5 лет)', amountEUR: 30 }
  ],
  sources: [
    { title: 'AMN — Carta de Navegador de Recreio', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — escolas reconhecidas', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — embarcações de recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 568/89 — categorias e formação', url: 'https://dre.pt/dre/detalhe/portaria/568-1989-580367', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}