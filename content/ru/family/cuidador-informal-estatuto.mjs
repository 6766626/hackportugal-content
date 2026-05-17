export default {
  editorialVoice: 'hackportugal',
  id: 'cuidador-informal-estatuto',
  categoryId: 'healthcare',
  title: 'Cuidador Informal: статус неформального опекуна для ухода за родителями и родственниками',
  tldr: 'Estatuto do Cuidador Informal по Lei 100/2019 — официальный статус для человека, который регулярно или постоянно ухаживает за зависимым родственником в Португалии. Даёт cartão de identificação, план сопровождения, обучение, право на descanso do cuidador и, для cuidador informal principal, месячную поддержку Segurança Social: в 2026 максимум обычно ограничен IAS 537,13 € и зависит от доходов семьи. Подача бесплатна через Segurança Social Direta или balcão.',
  tags: ['cuidador', 'семья', 'segurança-social', 'уход'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-status-gives',
      title: 'Что даёт статус Cuidador Informal',
      content: [
        { kind: 'paragraph', text: 'Cuidador Informal — это не рабочий контракт и не медицинская профессия. Это признание Segurança Social, что вы фактически ухаживаете за человеком с зависимостью: пожилым родителем, супругом, родственником с инвалидностью или хроническим заболеванием.' },
        { kind: 'checklist', items: [
          'Cartão de identificação do cuidador informal — подтверждение статуса',
          'Plano de Intervenção Específico: индивидуальный план поддержки от Segurança Social и SNS',
          'Обучение уходу: перемещение, питание, гигиена, лекарства, профилактика падений',
          'Психосоциальная поддержка и консультации',
          'Descanso do cuidador — временная передышка через RNCCI, apoio domiciliário или другие социальные ответы, если есть место',
          'Приоритетное сопровождение службами Segurança Social и здравоохранения',
          'Для cuidador informal principal — право запросить subsídio de apoio ao cuidador informal principal',
          'Информация о других выплатах: Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa, disability benefits'
        ] },
        { kind: 'warning', text: 'Статус cuidador informal не заменяет ВНЖ, NISS, SNS или право на работу. Это семейно-социальный статус внутри Segurança Social.' }
      ]
    },
    {
      id: 'principal-or-non-principal',
      title: 'Два типа: principal и não principal',
      content: [
        { kind: 'paragraph', text: 'При заявлении выбирают тип опекуна. От него зависит право на денежную поддержку и совместимость с работой.' },
        { kind: 'substeps', items: [
          { id: 'principal', title: 'Cuidador informal principal', content: [
            { kind: 'paragraph', text: 'Это человек, который живёт вместе с подопечным и обеспечивает постоянный уход. Обычно именно этот статус нужен детям, которые переехали к пожилому родителю или забрали родителя к себе.' },
            { kind: 'checklist', items: [
              'Проживает с pessoa cuidada в одном домохозяйстве',
              'Оказывает уход постоянно, а не эпизодически',
              'Не получает оплату за этот уход',
              'Как правило, не ведёт оплачиваемую профессиональную деятельность',
              'Может претендовать на subsídio de apoio ao cuidador informal principal, если проходит проверку доходов'
            ] }
          ] },
          { id: 'non-principal', title: 'Cuidador informal não principal', content: [
            { kind: 'paragraph', text: 'Это родственник, который помогает регулярно, но не является основным постоянным опекуном. Например, приезжает каждый день после работы, координирует врачей, покупки и лекарства.' },
            { kind: 'checklist', items: [
              'Может продолжать работать',
              'Не обязан проживать вместе с pessoa cuidada',
              'Получает cartão и доступ к обучению/сопровождению',
              'Обычно не имеет права на месячный subsídio для principal',
              'Подходит, если уход делится между несколькими родственниками'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может получить признание',
      content: [
        { kind: 'paragraph', text: 'Базовая логика такая: опекун должен быть взрослым резидентом Португалии, а подопечный — человеком с подтверждённой зависимостью и потребностью в помощи другого лица.' },
        { kind: 'checklist', items: [
          'Опекуну обычно должно быть 18+',
          'Опекун должен иметь законное проживание в Португалии и NISS',
          'Связь с подопечным: супруг, unido de facto, родственник или свойственник до 4-й степени',
          'Подопечный проживает в Португалии и имеет NISS',
          'Подопечный находится в ситуации зависимости и нуждается в уходе третьего лица',
          'Подопечный получает или может получать связанную выплату: например Complemento por Dependência или Subsídio por Assistência de Terceira Pessoa',
          'Должно быть согласие подопечного, если он способен его дать; иначе действуют представитель или режим acompanhamento de maior',
          'Для principal требуется совместное проживание и постоянный уход',
          'Для денежной поддержки проверяются доходы домохозяйства cuidador informal principal'
        ] },
        { kind: 'warning', text: 'Если пожилой родитель живёт в lar/residência с государственным финансированием полного ухода, статус и особенно денежная поддержка могут быть недоступны. Segurança Social смотрит на фактический уход, проживание и уже получаемые социальные ответы.' }
      ]
    },
    {
      id: 'money-2026',
      title: 'Деньги в 2026: subsídio для cuidador informal principal',
      content: [
        { kind: 'paragraph', text: 'Денежная выплата называется subsídio de apoio ao cuidador informal principal. Это не автоматическая пенсия и не зарплата. Segurança Social считает доходы домохозяйства и применяет лимиты, привязанные к IAS.' },
        { kind: 'checklist', items: [
          'IAS в 2026 году: 537,13 €',
          'Порог нуждаемости для principal обычно считается относительно 1,3 IAS: 698,27 €',
          'Максимальная месячная поддержка не должна восприниматься как гарантированная: сумма индивидуальна',
          'В расчёт могут входить зарплаты, пенсии, социальные выплаты, доходы от аренды и другие регулярные доходы семьи',
          'Если доходы выше лимита, статус могут признать, но subsídio не назначить',
          'Выплата оформляется на cuidador informal principal, а не на подопечного',
          'IBAN должен быть португальским или SEPA-счётом, принятым Segurança Social',
          'При изменении доходов, адреса, состава семьи, госпитализации или помещении в учреждение нужно уведомлять Segurança Social'
        ] },
        { kind: 'warning', text: 'Не планируйте бюджет семьи так, будто выплата будет ровно 537,13 €. На практике сумма зависит от расчёта Segurança Social и может быть нулевой при признанном статусе.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявление',
      content: [
        { kind: 'paragraph', text: 'Подать можно онлайн через Segurança Social Direta или лично в serviço de atendimento da Segurança Social. Для семей экспатов удобнее заранее собрать документы и проверить, что NISS активен у опекуна и подопечного.' },
        { kind: 'substeps', items: [
          { id: 'prepare', title: '1. Подготовьте документы', content: [
            { kind: 'checklist', items: [
              'Документ личности опекуна: Cartão de Cidadão, ВНЖ или паспорт + подтверждение законного пребывания',
              'NIF и NISS опекуна',
              'Документ личности, NIF и NISS pessoa cuidada',
              'Подтверждение адреса и совместного проживания, если запрашивается principal',
              'Медицинские документы о зависимости и потребности в уходе',
              'Документы о Complemento por Dependência, Subsídio por Assistência de Terceira Pessoa или другой релевантной выплате подопечного',
              'Согласие pessoa cuidada или документ представителя',
              'Данные о доходах домохозяйства',
              'IBAN для выплаты, если запрашиваете subsídio'
            ] }
          ] },
          { id: 'submit', title: '2. Подайте pedido de reconhecimento', content: [
            { kind: 'paragraph', text: 'В Segurança Social Direta ищите раздел семьи/инвалидности/Estatuto do Cuidador Informal. Если онлайн-путь недоступен из-за статуса иностранца или ошибки NISS, записывайтесь в balcão Segurança Social и подавайте заявление там.' }
          ] },
          { id: 'assessment', title: '3. Дождитесь оценки', content: [
            { kind: 'paragraph', text: 'Службы проверяют семейную связь, проживание, зависимость, доходы и уже назначенные выплаты. Могут запросить дополнительные документы или связаться с Centro de Saúde.' }
          ] },
          { id: 'card-plan', title: '4. Получите cartão и план сопровождения', content: [
            { kind: 'paragraph', text: 'После признания вы получаете cartão de identificação do cuidador informal и подключаетесь к Plano de Intervenção Específico. Просите письменно указать контакты ответственного técnico, доступное обучение и варианты descanso do cuidador в вашем município.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-expat-points',
      title: 'Практика для экспатов',
      content: [
        { kind: 'checklist', items: [
          'Если вы привозите пожилого родителя в Португалию, сначала решите миграционную базу: виза/ВНЖ, NIF, NISS, SNS',
          'Без NISS у родителя путь к выплатам и признанию зависимости обычно блокируется',
          'Переведите медицинские выписки на португальский, особенно диагнозы, лекарства, степень зависимости и необходимость помощи третьего лица',
          'Попросите médico de família или Centro de Saúde зафиксировать функциональную зависимость: ходьба, питание, гигиена, память, риск падений',
          'Atestado multiuso полезен при инвалидности, но сам по себе не заменяет оценку зависимости для Segurança Social',
          'Если уход мешает работе, сначала сравните варианты: baixa médica, assistência a familiares, unpaid leave, part-time, а уже потом рассчитывайте на статус principal',
          'Сохраняйте письма Segurança Social, решения о выплатах и recibos: они понадобятся при пересмотре',
          'Если отказали, запросите письменное основание и prazo для reclamação или recurso hierárquico'
        ] },
        { kind: 'warning', text: 'Главная ошибка — подать только заявление на Estatuto do Cuidador Informal, но не оформить подопечному базовую выплату по зависимости. Для subsídio principal Segurança Social почти всегда смотрит, признана ли зависимость через соответствующие социальные механизмы.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача заявления на reconhecimento do Estatuto do Cuidador Informal', amountEUR: 0, note: 'Госпошлины нет; возможны расходы на переводы, медицинские справки и поездки.' },
    { label: 'Ориентир максимальной месячной поддержки principal в 2026', amountEURMax: 537.13, note: 'Привязано к IAS 2026; фактическая сумма зависит от доходов и расчёта Segurança Social.' },
    { label: 'Порог 1,3 IAS для проверки нуждаемости в 2026', amountEUR: 698.27, note: 'Используется как ключевой ориентир доходов; применяются правила Segurança Social.' }
  ],
  sources: [
    {
      title: 'Segurança Social: reconhecimento do Estatuto do Cuidador Informal',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/familia/deficiencia-incapacidade/reconhecimento-estatuto-cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: guia Cuidador Informal',
      url: 'https://www.gov.pt/guias/cuidador-informal',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 100/2019 — Estatuto do Cuidador Informal',
      url: 'https://dre.pt/dre/detalhe/lei/100-2019-124500714',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
