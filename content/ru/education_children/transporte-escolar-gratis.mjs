export default {
  editorialVoice: 'hackportugal',
  id: 'transporte-escolar-gratis',
  categoryId: 'education_children',
  title: 'Бесплатный школьный транспорт: ответственность município',
  tldr: 'В Португалии школьный транспорт организует Câmara Municipal/município, а не школа.\n\nВ 2026 году бесплатный проезд обычно положен детям 6–18 лет в ensino básico и ensino secundário, если школа находится дальше 3 км от дома и ребёнок учится в закреплённой/публично назначенной школе. Заявка подаётся в município после matrícula; нужны NIF, адрес, школа и расписание. Для детей до 12 лет на школьном транспорте должен быть сопровождающий взрослый.',
  tags: ['escola', 'transporte', 'município', 'дети'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Кто отвечает и кто платит',
      content: [
        { kind: 'paragraph', text: 'Transporte escolar — компетенция município. Практически это означает: маршрут, автобус/такси/проездной, оператор, сроки подачи и правила возврата карточек определяет Câmara Municipal по месту проживания ребёнка.' },
        { kind: 'paragraph', text: 'Школа подтверждает matrícula и расписание, но не “выдаёт транспорт” сама. Если секретариат школы говорит “это в Câmara”, это нормально: подавайте заявку через сайт município, Balcão Único или отдел Educação/Transportes Escolares.' },
        { kind: 'checklist', items: [
          'Возраст: обычно дети и подростки 6–18 лет в escolaridade obrigatória',
          'Уровни: ensino básico и ensino secundário',
          'Расстояние: дом дальше 3 км от школы',
          'Школа: как правило, ближайшая или официально назначенная escola da área de residência / Agrupamento',
          'Адрес: подтверждается NIF/Finanças, atestado de residência, договором аренды или счётом — зависит от município',
          'Форма помощи: бесплатный passe, школьный автобус, муниципальный маршрут, taxi escolar или компенсация',
          'Ответственный орган: Câmara Municipal, даже если транспорт выполняет Carris, STCP, CP, Rodoviária, Vimeca, Fertagus или местный оператор'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Проверьте право на бесплатный проезд',
      content: [
        { kind: 'paragraph', text: 'Базовое правило для 2026 года: бесплатный школьный транспорт предоставляется учащимся обязательного образования, если расстояние от места проживания до школы превышает 3 км. Município может детализировать, как измеряет расстояние: по дороге, по кратчайшему пешеходному маршруту или через GIS-карту.' },
        { kind: 'checklist', items: [
          'Ребёнку от 6 до 18 лет или он ещё завершает escolaridade obrigatória',
          'Есть подтверждённая matrícula или renovação de matrícula на учебный год',
          'Школа относится к вашей зоне или ребёнок направлен туда официально',
          'Дом находится более чем в 3 км от школы',
          'Нет другой бесплатной школьной опции ближе к дому, которую семья добровольно отказалась использовать',
          'Ребёнок фактически проживает в данном município',
          'Заявка подана в сроки, опубликованные Câmara Municipal',
          'Для special educational needs может быть отдельный режим, включая адаптированный транспорт'
        ] },
        { kind: 'warning', text: 'Если семья выбирает частную школу или публичную школу вне зоны “по личному выбору”, município может отказать в бесплатном транспорте или оплатить только стоимость маршрута до закреплённой школы. Это надо проверять в regulamento municipal de transportes escolares.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявку 🚌',
      content: [
        { kind: 'paragraph', text: 'Подавайте заявку сразу после matrícula/renovação de matrícula. В большинстве municípios окно заявок открывается весной–летом перед учебным годом: ориентир — май–июль, но точные даты местные. Поздняя заявка часто обрабатывается уже после начала занятий.' },
        { kind: 'substeps', items: [
          { id: 'find-page', title: '1. Найдите страницу Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Ищите на сайте município раздел “Educação”, “Transportes Escolares”, “Ação Social Escolar” или “Balcão Online”. В маленьких municípios заявку иногда принимают по email или лично в Balcão Único.' }
          ] },
          { id: 'prepare-documents', title: '2. Подготовьте документы', content: [
            { kind: 'checklist', items: [
              'Документ ребёнка: паспорт, Cartão de Cidadão или ВНЖ',
              'NIF ребёнка, если уже есть',
              'NIF родителя/encarregado de educação',
              'Доказательство адреса: atestado de residência, contrato de arrendamento, fatura de água/luz/telecom или certidão fiscal de domicílio',
              'Подтверждение matrícula или declaração da escola',
              'Название Agrupamento/Escola и учебный год',
              'Расписание, если município просит horários',
              'Фото ребёнка для passe, если требуется',
              'IBAN, если предусмотрена компенсация расходов, а не проездной'
            ] }
          ] },
          { id: 'submit', title: '3. Подайте онлайн или лично', content: [
            { kind: 'paragraph', text: 'После отправки сохраните comprovativo. Если ребёнку нужен маршрут с пересадкой, проверьте, кто выдаёт карточку: município, школа или транспортный оператор.' }
          ] },
          { id: 'confirm', title: '4. Получите passe или расписание', content: [
            { kind: 'paragraph', text: 'Перед началом учебного года município обычно публикует списки/маршруты или отправляет email. Проверьте остановку, время утром и после уроков, правила опозданий и контакт диспетчера.' }
          ] }
        ] }
      ]
    },
    {
      id: 'under-12',
      title: 'Дети до 12 лет: сопровождающий взрослый',
      content: [
        { kind: 'paragraph', text: 'Для маленьких детей важно не только право на бесплатный проезд, но и безопасность. На школьном транспорте для детей до 12 лет должен быть сопровождающий взрослый — обычно funcionário/monitor, contratado pelo município или оператором.' },
        { kind: 'checklist', items: [
          'Уточните, есть ли monitor/acompanhante на маршруте',
          'Попросите правила посадки и высадки: кто имеет право забрать ребёнка',
          'Передайте школе и оператору телефоны обоих родителей',
          'Если ребёнок в 1.º ciclo, уточните, доводят ли его до входа школы или только до остановки',
          'Сообщите письменно, если ребёнка забирает няня, avó/avô или другой взрослый',
          'Проверьте ремни безопасности и фиксированные места, особенно в taxi escolar или carrinha',
          'Сохраните контакт Câmara Municipal и транспортного оператора на случай задержки'
        ] },
        { kind: 'warning', text: 'Не соглашайтесь на устное “он уже большой, доедет сам”, если ребёнку меньше 12 лет и маршрут оформлен как школьный транспорт. Попросите письменное подтверждение от município о режиме acompanhamento.' }
      ]
    },
    {
      id: 'problems',
      title: 'Если отказали или маршрут неудобный',
      content: [
        { kind: 'paragraph', text: 'Отказы чаще всего связаны с тремя причинами: расстояние меньше 3 км, школа выбрана вне зоны, заявка подана после срока. Попросите письменное решение с ссылкой на regulamento municipal — без него сложно спорить.' },
        { kind: 'checklist', items: [
          'Проверьте, как município измерил 3 км: по дороге или по прямой',
          'Сравните адрес, указанный в школе, Finanças и заявке',
          'Попросите Agrupamento подтвердить, что школа назначена официально',
          'Если ребёнок с necessidades educativas especiais, приложите relatório técnico-pedagógico или подтверждение школы',
          'Если нет общественного транспорта, спросите про taxi escolar или circuito especial',
          'Если маршрут опасный пешком, приложите фото/карты: отсутствие тротуара, освещения, переходов',
          'Подайте reclamação в Câmara Municipal через Livro de Reclamações Eletrónico или Balcão Único',
          'Параллельно сообщите директору Agrupamento: школа может подтвердить необходимость маршрута'
        ] },
        { kind: 'warning', text: 'Не покупайте годовой проездной заранее, рассчитывая на автоматический возврат. Многие municípios компенсируют только после предварительного одобрения заявки или только по конкретным операторам.' }
      ]
    }
  ],
  costs: [
    { label: 'Бесплатный школьный транспорт при выполнении условий', amountEUR: 0, note: 'Município оплачивает или предоставляет passe/маршрут для ensino básico/secundário при расстоянии обычно >3 км.' },
    { label: 'Дубликат/замена транспортной карты', amountEURMin: 5, amountEURMax: 15, note: 'Не единый национальный тариф; зависит от оператора и município.' }
  ],
  sources: [
    {
      title: 'Direção-Geral da Educação — transporte escolar и организация школьной сети',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — образование, matrícula и serviços públicos для семей',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 21/2019 — передача компетенций в сфере образования municípios',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/21-2019-118748848',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2006 — transporte coletivo de crianças и сопровождение',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2006-672586',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
