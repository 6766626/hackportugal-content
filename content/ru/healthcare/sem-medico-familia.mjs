export default {
  editorialVoice: 'hackportugal',
  id: 'sem-medico-familia',
  categoryId: 'healthcare',
  title: 'Что делать без médico de família: consultas de recurso и consulta aberta',
  tldr: 'Отсутствие médico de família не лишает вас доступа к SNS. Если есть número de utente, обращайтесь в свой Centro de Saúde/USF/UCSP за consulta aberta, consulta de recurso или atendimento complementar; при симптомах звоните SNS 24 — 808 24 24 24, чтобы получить триаж и направление. С июня 2026 вводится практическая чистка списков: пациенты, не контактировавшие с cuidados de saúde primários 5 лет, могут потерять закреплённого врача, но не регистрацию в SNS.',
  tags: ['sns', 'utente', 'consulta', 'медицина'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-means',
      title: 'Без médico de família ≠ без медицины',
      content: [
        { kind: 'paragraph', text: 'В Португалии médico de família — это закреплённый семейный врач в cuidados de saúde primários. Он ведёт хронические болезни, рецепты, больничные baixa médica, направления к специалистам и профилактику. Но если врача вам ещё не назначили, вы всё равно остаётесь utente SNS и имеете право на приём в первичном звене.' },
        { kind: 'paragraph', text: 'На практике вас принимает врач “de recurso” или дежурный врач в формате consulta aberta. Названия отличаются по Unidade Local de Saúde: consulta aberta, consulta de recurso, atendimento complementar, consulta do dia, consulta aguda. Смысл один: слот для пациентов без своего médico de família или для срочных ситуаций у зарегистрированных пациентов.' },
        { kind: 'checklist', items: [
          'Проверьте, к какому Centro de Saúde / USF / UCSP вы прикреплены по адресу',
          'Возьмите número de utente, NIF, документ личности и ВНЖ/визу, если они есть',
          'Звоните утром: многие centros открывают слоты consulta aberta в день обращения',
          'Если симптомы острые — сначала звоните SNS 24: 808 24 24 24',
          'Если нужна неотложка, но не 112, просите triagem SNS 24 и encaminhamento',
          'Для рецептов и хронических заболеваний просите consulta programada de recurso',
          'Для больничного baixa médica уточняйте, может ли дежурный врач оформить CIT',
          'Не ждите “назначения семейного врача”, если проблема уже есть: просите альтернативный приём'
        ] }
      ]
    },
    {
      id: 'how-to-get-consulta',
      title: 'Как записаться на consulta aberta / de recurso',
      content: [
        { kind: 'substeps', items: [
          { id: 'call-center', title: '1. Позвонить или прийти в вашу unidade', content: [
            { kind: 'paragraph', text: 'Начните с телефона вашего Centro de Saúde, USF или UCSP. Если не отвечают, идите лично к balcão administrativo утром. В Лиссабоне, Порту и районах с перегрузкой личный визит часто эффективнее.' },
            { kind: 'checklist', items: [
              'Скажите: “Não tenho médico de família atribuído”',
              'Попросите: “consulta aberta” или “consulta de recurso”',
              'Кратко назовите проблему: температура, боль, давление, рецепт, анализы, baixa',
              'Уточните, есть ли vagas hoje или в ближайшие дни',
              'Попросите записать отказ или предложить альтернативу, если слотов нет'
            ] }
          ] },
          { id: 'sns24', title: '2. Позвонить SNS 24 при симптомах', content: [
            { kind: 'paragraph', text: 'SNS 24 — официальный медицинский триаж. Номер 808 24 24 24 работает 24/7. Оператор и медсестра оценивают симптомы и могут направить в Centro de Saúde, Serviço de Urgência или дать инструкции наблюдения дома.' },
            { kind: 'paragraph', text: 'Для иностранца это важно: направление от SNS 24 снижает риск бессмысленного ожидания в urgência и помогает системе понять, что вы пришли не “самотёком”.' }
          ] },
          { id: 'app-portal', title: '3. Проверить SNS 24 app / portal', content: [
            { kind: 'paragraph', text: 'Если у вас уже есть número de utente и доступ через Chave Móvel Digital, Cartão de Cidadão или другой поддерживаемый способ, проверьте Área Pessoal do SNS 24. Там видны unidade de saúde, назначенный médico de família, рецепты, exames и иногда доступные контакты.' }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'Что именно просить по ситуации',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка — говорить “у меня нет семейного врача, что делать?” и уходить без решения. Формулируйте запрос по медицинской задаче. Администратор не назначает диагноз, но должен направить вас в доступный канал приёма.' },
        { kind: 'checklist', items: [
          'Острая простуда, инфекция, боль, давление: “Preciso de consulta aberta hoje / o mais breve possível”',
          'Продление постоянного рецепта: “Preciso de renovação de medicação crónica”',
          'Анализы или контроль хронической болезни: “Preciso de consulta programada de recurso”',
          'Больничный: “Preciso de avaliação médica para Certificado de Incapacidade Temporária / baixa”',
          'Беременность: “Preciso de vigilância de saúde materna” — это не должно ждать семейного врача',
          'Ребёнок: “Consulta de saúde infantil” или “doença aguda”',
          'Вакцинация: спросите sala de vacinação, часто врач не нужен',
          'Психическое состояние без угрозы жизни: просите consulta médica и направление; при риске суицида — 112 или urgência',
          'Стоматология: в SNS ограниченный доступ; уточняйте cheque-dentista, если подходите по критериям'
        ] },
        { kind: 'warning', text: 'Если есть боль в груди, признаки инсульта, тяжёлая одышка, потеря сознания, сильное кровотечение, анафилаксия — не ждите consulta aberta. Звоните 112.' }
      ]
    },
    {
      id: 'if-refused',
      title: 'Если говорят “нет врача” или “нет vagas”',
      content: [
        { kind: 'paragraph', text: 'Перегрузка первичного звена реальна, но фраза “нет médico de família” не должна автоматически означать отказ от помощи. Просите конкретный альтернативный маршрут: другой день, atendimento complementar, Unidade de Saúde Familiar рядом, SNS 24, urgência básica или письменную информацию.' },
        { kind: 'checklist', items: [
          'Уточните: “Qual é a alternativa para utentes sem médico de família?”',
          'Попросите записать вас в список ожидания на consulta de recurso',
          'Спросите, есть ли atendimento complementar вечером или в выходные',
          'Проверьте, не прикреплены ли вы к другой unidade после переезда',
          'Обновите адрес в SNS/Centro de Saúde, если сменили freguesia',
          'Если проблема срочная — звоните SNS 24 прямо из холла и следуйте триажу',
          'Если систематически отказывают без решения — подайте reclamação в Livro de Reclamações или через ERS',
          'Сохраняйте даты звонков, имена, номер utente и ответы сотрудников'
        ] },
        { kind: 'warning', text: 'Не используйте urgência больницы как замену семейному врачу для обычных рецептов и справок. Без направления SNS 24 ожидание может быть долгим, а Serviço de Urgência рассчитан на неотложные состояния.' }
      ]
    },
    {
      id: 'five-year-rule',
      title: 'Правило 5 лет неактивности с июня 2026',
      content: [
        { kind: 'paragraph', text: 'С июня 2026 в cuidados de saúde primários запускается механизм актуализации списков: пациенты, которые 5 лет не имели контактов с первичным звеном, могут потерять закреплённого médico de família. Цель — освободить места у врачей для людей, которые реально живут в районе и нуждаются в наблюдении.' },
        { kind: 'paragraph', text: 'Это не означает потерю número de utente или права на SNS. Речь о списке конкретного семейного врача. Но для экспатов риск практический: если вы уехали, сменили адрес, не отвечаете на контакты или ни разу не обращались, система может считать вас неактивным.' },
        { kind: 'checklist', items: [
          'Раз в год проверяйте Área Pessoal do SNS 24: unidade, контакты, médico de família',
          'Обновляйте португальский телефон и email в Centro de Saúde',
          'После переезда меняйте прикрепление по новому адресу',
          'Не игнорируйте SMS/письма от SNS о подтверждении данных',
          'Сохраняйте хотя бы периодический контакт: вакцина, профилактика, рецепт, consulta',
          'Если врача сняли, просите reinscrição и включение в список utentes sem médico de família',
          'Если вы живёте в Португалии, но редко болеете, всё равно подтвердите актуальность данных'
        ] }
      ]
    },
    {
      id: 'practical-limits',
      title: 'Ограничения и что держать под рукой',
      content: [
        { kind: 'paragraph', text: 'Consulta aberta — это не полноценная замена постоянному médico de família. Дежурный врач обычно решает конкретную проблему: осмотр, рецепт, направление, больничный, анализы. Долгосрочное ведение диабета, гипертонии, беременности или психиатрии лучше оформлять через регулярные consultas programadas.' },
        { kind: 'checklist', items: [
          'Número de utente',
          'Документ личности и ВНЖ/виза, если есть',
          'NIF',
          'Список лекарств с дозировками',
          'Старые рецепты, выписки, результаты анализов',
          'Аллергии и хронические диагнозы на португальском или английском',
          'Контакты вашей USF/UCSP и адрес',
          'Телефон SNS 24: 808 24 24 24',
          'Для экстренных случаев: 112'
        ] },
        { kind: 'warning', text: 'Если у вас ещё нет número de utente, сначала решайте регистрацию в SNS в Centro de Saúde. Но экстренная помощь, беременность, дети и инфекционные риски не должны откладываться из-за отсутствия номера.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta в cuidados de saúde primários SNS', amountEUR: 0, note: 'Taxas moderadoras в первичном звене SNS отменены; приём в Centro de Saúde для utente обычно бесплатный.' },
    { label: 'Звонок SNS 24', amountEUR: 0, note: 'Медицинская услуга бесплатна; возможна стоимость звонка по тарифу оператора на номер 808.' },
    { label: 'Частный GP/medicina geral без страховки', amountEURMin: 40, amountEURMax: 90, note: 'Ориентир по частным клиникам; не заменяет регистрацию в SNS и не даёт автоматический доступ к направлениям SNS.' }
  ],
  sources: [
    {
      title: 'Caixa Geral de Depósitos: что делать, если нет médico de família',
      url: 'https://www.cgd.pt/Site/Saldo-Positivo/protecao/Pages/nao-tenho-medico-familia.aspx',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: acesso a consultas nos cuidados de saúde primários',
      url: 'https://www.sns24.gov.pt/guia/consulta-nos-cuidados-de-saude-primarios/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: contacto telefónico 808 24 24 24 и triagem',
      url: 'https://www.sns24.gov.pt/servico/atendimento-sns-24/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: права пользователей SNS и Livro de Reclamações',
      url: 'https://www.ers.pt/pt/utentes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
