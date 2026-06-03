export default {
  editorialVoice: 'hackportugal',
  id: 'erasmus-mais-mobilidade',
  categoryId: 'education_children',
  title: 'Erasmus+ — обмен и стажировка для студентов в Португалии',
  tldr: 'Erasmus+ доступен не по паспорту, а через португальский вуз или instituto politécnico с Erasmus Charter for Higher Education. Студент подаётся через International Office своей instituição de ensino superior. В 2026 году грант обычно около 350–800 €/мес: сумма зависит от страны, типа мобильности, top-up за стажировку, fewer opportunities и green travel. Учёба длится 2–12 мес, Erasmus Estágios — тоже 2–12 мес; общий лимит обычно 12 мес на цикл обучения.',
  tags: ['erasmus', 'стажировка', 'universidade', 'bolsa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-apply',
      title: 'Кто может участвовать',
      content: [
        { kind: 'paragraph', text: 'Erasmus+ для студентов в Португалии работает через ваш португальский вуз, polytechnic или другую instituição de ensino superior. Гражданство не главное: участвовать могут иностранцы, если они официально зачислены в португальское учебное заведение, которое имеет Erasmus Charter for Higher Education и открывает конкурс на мобильность.' },
        { kind: 'checklist', items: [
          'Вы enrolled student в португальском ensino superior: licenciatura, mestrado, doutoramento или short-cycle, если вуз допускает.',
          'Ваш вуз участвует в Erasmus+ и имеет межвузовские соглашения с host university.',
          'Для обмена на учёбу обычно нужно быть минимум на 2-м году licenciatura, но конкретное правило задаёт вуз.',
          'Для Erasmus Estágios стажировку можно делать во время обучения или как recent graduate, если заявка подана до окончания курса.',
          'Общий лимит мобильности обычно 12 месяцев на каждый цикл: licenciatura, mestrado, doutoramento.',
          'Для integrated master лимит может быть до 24 месяцев, если это предусмотрено программой.',
          'Статус ВНЖ в Португалии не заменяет требования вуза: нужны matrícula, успеваемость и approval от координатора курса.'
        ] }
      ]
    },
    {
      id: 'types',
      title: 'Два основных формата: учёба и Erasmus Estágios',
      content: [
        { kind: 'substeps', items: [
          { id: 'study-mobility', title: 'Учёба в партнёрском вузе', content: [
            { kind: 'paragraph', text: 'Student mobility for studies — семестр или год в host university. Длительность обычно 2–12 месяцев. Предметы заранее фиксируются в Learning Agreement, чтобы ECTS засчитались в Португалии после возвращения.' },
            { kind: 'checklist', items: [
              'Выберите вуз из списка партнёров вашего факультета.',
              'Проверьте язык преподавания и минимальный уровень языка.',
              'Согласуйте дисциплины и ECTS с координатором курса.',
              'После отбора получите nomination от португальского вуза.',
              'Host university пришлёт свои формы, дедлайны и housing-инструкции.'
            ] }
          ] },
          { id: 'traineeship', title: 'Erasmus Estágios — стажировка за границей', content: [
            { kind: 'paragraph', text: 'Erasmus Estágios — traineeship/internship в компании, лаборатории, NGO, университете или иной организации за пределами Португалии. Длительность обычно 2–12 месяцев. Это не просто поездка: нужны work plan, supervisor, Learning Agreement for Traineeships и подтверждение от принимающей организации.' },
            { kind: 'checklist', items: [
              'Стажировку можно искать самому или через контакты факультета.',
              'Принимающая организация должна подтвердить задачи, даты, supervisor и рабочий язык.',
              'Для recent graduates заявка обычно должна быть одобрена до официального завершения обучения.',
              'Стажировка должна иметь академический или профессиональный смысл для вашего курса.',
              'Оплачиваемая стажировка возможна, но грант Erasmus+ всё равно зависит от правил вашего вуза.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'money',
      title: 'Сколько платят в 2026',
      content: [
        { kind: 'paragraph', text: 'Размер bolsa Erasmus+ не единый для всей Европы. Национальное агентство и португальский вуз публикуют таблицу на конкретный call. В 2026 году для долгосрочной мобильности реальный диапазон для студентов из Португалии обычно около 350–800 €/мес: ниже — учёба в странах с меньшей ставкой, выше — стажировка, top-up fewer opportunities, дорогие направления или международная мобильность.' },
        { kind: 'checklist', items: [
          'Грант на учёбу часто считается по country group: страна с высокой, средней или более низкой стоимостью жизни.',
          'Erasmus Estágios обычно получает доплату к базовой ставке, часто около 150 €/мес, если это предусмотрено call.',
          'Студенты с fewer opportunities могут получить дополнительный top-up, часто около 250 €/мес для долгосрочной мобильности.',
          'Green travel может дать разовую доплату и дополнительные travel days, если едете поездом, автобусом или car-sharing вместо самолёта.',
          'Краткосрочная blended mobility оплачивается по дневной ставке, обычно 79 €/день до 14-го дня и 56 €/день с 15-го по 30-й день, плюс возможные top-up.',
          'Деньги часто платят частями: аванс до или в начале поездки и остаток после подачи документов.',
          'Грант не обязан покрывать всю жизнь за границей: жильё, депозит, перелёт и первые недели часто нужно оплатить заранее.'
        ] },
        { kind: 'warning', text: 'Не планируйте бюджет только по верхней цифре 800 €/мес. Финальная сумма появляется в Financial Agreement вашего португальского вуза. Один и тот же студент может получить разные суммы в зависимости от страны, длительности, типа mobility и top-up.' }
      ]
    },
    {
      id: 'application',
      title: 'Как податься через португальский вуз',
      content: [
        { kind: 'paragraph', text: 'Заявка почти всегда идёт через Gabinete de Relações Internacionais / International Office вашего учебного заведения, а не напрямую через erasmus.pt. Вуз публикует edital или regulamento с дедлайнами, критериями ранжирования и списком партнёров.' },
        { kind: 'checklist', items: [
          'Найдите страницу Erasmus+ на сайте своего вуза или факультета.',
          'Проверьте deadline: основные конкурсы часто открываются за 6–10 месяцев до поездки.',
          'Выберите 2–5 принимающих вузов или стажировочных направлений, если форма это допускает.',
          'Подготовьте histórico escolar / transcript, CV, мотивационное письмо, документ ID/ВНЖ и IBAN.',
          'Проверьте средний балл и минимальное число ECTS: многие вузы ранжируют по успеваемости.',
          'После отбора дождитесь nomination в host university.',
          'Заполните Learning Agreement, Online Learning Agreement или Learning Agreement for Traineeships.',
          'Подпишите Grant Agreement / Financial Agreement до выезда.',
          'Оформите жильё, страховку, банковскую карту и, если нужно, визу страны назначения.'
        ] }
      ]
    },
    {
      id: 'language',
      title: 'Язык: от A2 до C1 — зависит от места',
      content: [
        { kind: 'paragraph', text: 'Erasmus+ не устанавливает один универсальный уровень языка для всех. Требование задаёт host university, компания-стажировка или факультет. В 2026 году типичная картина такая: для англоязычных предметов часто требуют B1/B2; для медицины, права, педагогики или клинических практик может понадобиться C1; для некоторых стажировок, где работа простая или есть supervisor на английском, минимально принимают A2/B1.' },
        { kind: 'checklist', items: [
          'Проверьте language requirements на странице host university до подачи.',
          'Если предметы на местном языке, одного английского может быть недостаточно.',
          'Сертификат IELTS/TOEFL/Cambridge не всегда обязателен: иногда хватает declaração от вуза или теста факультета.',
          'OLS — Online Language Support — может использоваться для assessment и языковых курсов, но не всегда заменяет официальный сертификат.',
          'Для стажировок уточните язык работы, язык safety briefing и язык общения с клиентами/пациентами.',
          'Если host требует C1, не рассчитывайте, что португальский вуз сможет это обойти.'
        ] },
        { kind: 'warning', text: 'Самая частая ошибка — выбрать вуз по городу, а потом обнаружить, что нужные дисциплины читаются на немецком, французском, итальянском или испанском. Сначала язык и ECTS, потом город.' }
      ]
    },
    {
      id: 'after-selection',
      title: 'После отбора: документы, зачёт ECTS и отчёт',
      content: [
        { kind: 'paragraph', text: 'Отбор — это не конец процесса. Чтобы не потерять грант и зачёт предметов, следите за документами и сроками. Erasmus+ очень бюрократичен: подписи до выезда, подтверждение прибытия, изменения Learning Agreement в срок, transcript или traineeship certificate после окончания.' },
        { kind: 'checklist', items: [
          'До выезда: Grant Agreement, Learning Agreement, страховка, acceptance letter, при необходимости виза.',
          'В первый день: Certificate of Arrival или аналогичная форма host institution.',
          'При изменении предметов: обновите Learning Agreement during mobility, обычно в первые недели семестра.',
          'Во время стажировки: сохраняйте timesheets, emails supervisor и описание задач.',
          'После окончания: Certificate of Attendance с точными датами.',
          'Для учёбы: Transcript of Records с ECTS и оценками.',
          'Для стажировки: Traineeship Certificate или evaluation от принимающей организации.',
          'Заполните EU Survey; без него вуз может задержать остаток гранта.',
          'Проверьте, что ECTS перенесены в ваш португальский transcript.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Грант Erasmus+ на долгосрочную мобильность', amountEURMin: 350, amountEURMax: 800, note: 'Ориентир на месяц в 2026; финальная ставка зависит от страны, типа mobility и правил португальского вуза.' },
    { label: 'Доплата за Erasmus Estágios', amountEURMin: 100, amountEURMax: 150, note: 'Часто применяется как monthly top-up к базовой ставке, если это предусмотрено call.' },
    { label: 'Top-up fewer opportunities', amountEUR: 250, note: 'Типичная месячная доплата для долгосрочной mobility при подтверждённом праве; критерии задаёт вуз и программа.' },
    { label: 'Краткосрочная mobility, дни 1–14', amountEUR: 79, note: 'Ориентировочная дневная ставка Erasmus+ для short-term blended mobility.' },
    { label: 'Краткосрочная mobility, дни 15–30', amountEUR: 56, note: 'Ориентировочная дневная ставка после 14-го дня.' }
  ],
  sources: [
    { title: 'Erasmus+ Portugal — официальный портал программы в Португалии', url: 'https://www.erasmus.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission — Erasmus+ opportunities for individuals', url: 'https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'European Commission — Erasmus+ Programme Guide 2026', url: 'https://erasmus-plus.ec.europa.eu/erasmus-programme-guide', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
