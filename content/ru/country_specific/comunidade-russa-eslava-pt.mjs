export default {
  editorialVoice: 'hackportugal',
  id: 'comunidade-russa-eslava-pt',
  categoryId: 'country_specific',
  title: 'Русская, украинская и белорусская диаспоры в Португалии',
  tldr: 'В Португалии есть заметные русскоязычные и восточноевропейские сообщества: Lisboa, Cascais, Porto, Algarve, Braga. Украинская община резко выросла после 2022 года: Португалия выдала десятки тысяч proteções temporárias, и вместе с украинцами, жившими здесь и раньше, это одно из крупнейших сообществ среди non-EU. Для практики полезны Casa Ucraniana Lisboa, православные приходы, Centro Russo Lisboa и Telegram-чаты, но документы, ВНЖ, TPD, NIF/NISS и AIMA всегда проверяйте только по AIMA/ePortugal.',
  tags: ['диаспора', 'украинцы', 'русские', 'telegram', 'aima'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'map',
      title: 'Где искать «своих» в Португалии',
      content: [
        { kind: 'paragraph', text: 'Русскоязычная и восточноевропейская жизнь в Португалии не сосредоточена в одном районе. Основные точки — Lisboa и Cascais, Porto/Gaia, Braga, Aveiro, Coimbra, Algarve. В Lisboa больше юридической и гуманитарной инфраструктуры; в Cascais и Oeiras — школы, приходы и семейные мероприятия; в Porto и Braga — студенческие и IT-сообщества.' },
        { kind: 'checklist', items: [
          'Casa Ucraniana Lisboa — украинская культурная, гуманитарная и информационная точка в Lisboa',
          'Украинские ассоциации в Porto, Braga, Algarve — ищите по названию города + “associação ucraniana”',
          'Igreja Ortodoxa Russa / православные приходы в Cascais и Lisboa — богослужения, общение, семейные контакты',
          'Centro Russo Lisboa — культурные события, язык, литература, встречи',
          'Русскоязычные родительские группы: школы, кружки, логопеды, няни, обмен учебниками',
          'IT/remote-work встречи: чаще через Telegram, Meetup, LinkedIn и локальные coworking-чаты',
          'Волонтёрские точки помощи украинцам: одежда, переводы, сопровождение в serviços públicos',
          'Junta de Freguesia и Câmara Municipal иногда публикуют локальные migrant events и integration days'
        ] }
      ]
    },
    {
      id: 'telegram',
      title: 'Telegram и чаты: полезно, но не юридический источник',
      content: [
        { kind: 'paragraph', text: 'Для бытовых вопросов Telegram часто быстрее официальных сайтов: аренда комнаты, запись к врачу, переводчик, школа, где сделать apostila, какой Centro de Saúde принимает. Но правила AIMA, IRS, TPD, NISS и SNS в чатах часто пересказывают с ошибками или по старому опыту SEF.' },
        { kind: 'checklist', items: [
          '@portugalpages — общий русскоязычный поток по Португалии, жильё, услуги, новости',
          '@aimairn — практические обсуждения AIMA/IRN, записи, документы, кейсы',
          'Локальные чаты “Lisboa русские”, “Porto Ukraine”, “Braga expats”, “Algarve русскоязычные”',
          'Чаты мам/пап: escola, jardim de infância, pediatra, vacinação, atividades',
          'Профессиональные группы: IT, design, construção, beleza, motoristas, limpeza',
          'Группы взаимопомощи для украинцев под proteção temporária',
          'Барахолки: мебель, детские вещи, техника, перевозки',
          'Чаты по аренде комнат — проверяйте договор, NIF владельца и recibo de renda'
        ] },
        { kind: 'warning', text: 'Не отправляйте паспорт, título de residência, номер cartão bancário, коды MB WAY/CMD и доступ к email “помощникам из чата”. Запись в AIMA/IRN, NISS, NIF и SNS не требует передачи банковских кодов. Если просят оплатить “гарантированную vaga AIMA” — это красный флаг.' }
      ]
    },
    {
      id: 'ukrainians-tpd',
      title: 'Украинцы и proteção temporária в 2026',
      content: [
        { kind: 'paragraph', text: 'После вторжения России в Украину Португалия применяет режим proteção temporária по общеевропейской Temporary Protection Directive. В публичной статистике Португалии фигурируют десятки тысяч выданных защит украинцам; вместе с украинцами, жившими в стране до 2022 года, это делает украинскую общину одной из крупнейших восточноевропейских групп в Португалии. Формулировку “100k+ украинцев” лучше понимать как оценку масштаба всей украинской присутствующей/связанной общины, а не как число активных карточек TPD на конкретную дату.' },
        { kind: 'checklist', items: [
          'Официальный статус, продления и документы проверяйте на AIMA и ePortugal, не по скриншотам из чатов',
          'Proteção temporária обычно даёт доступ к NIF, NISS, SNS, рынку труда и школе для детей',
          'Для школы ребёнка: паспорт/ID, адрес, прививки, предыдущие документы об обучении, если есть',
          'Для SNS: номер utente, Centro de Saúde по адресу, при срочности — SNS 24 или urgência',
          'Для работы: NISS, NIF, договор или recibos verdes, IBAN, inscrição na Segurança Social',
          'Для аренды: договор, recibos de renda, подтверждение адреса для Finanças и serviços públicos',
          'Для продлений ВНЖ/защиты: отслеживайте изменения AIMA, потому что процедуры менялись после замены SEF',
          'Центры интеграции мигрантов CLAIM/CNAIM (теперь под AIMA) помогают с интеграцией, языком, переводами и социальной навигацией'
        ] },
        { kind: 'warning', text: 'AIMA заменила SEF в октябре 2023 года. Если инструкция говорит “идите в SEF”, она устарела. В 2026 году проверяйте, относится ли вопрос к AIMA, IRN, Finanças, Segurança Social, SNS или Câmara Municipal: это разные ведомства.' }
      ]
    },
    {
      id: 'offline',
      title: 'Офлайн: как входить в сообщество без токсичности',
      content: [
        { kind: 'paragraph', text: 'Восточноевропейская диаспора в Португалии неоднородна: разные гражданства, языки, политические позиции, религия, опыт войны, эмиграции и релокации. На практике лучше разделять: помощь с документами, дружеское общение, политические дискуссии, религиозная жизнь, бизнес-услуги.' },
        { kind: 'checklist', items: [
          'Идите на открытые встречи: language exchange, воскресные службы, благотворительные ярмарки, культурные вечера',
          'Для детей ищите кружки по району: música, dança, futebol, xadrez, artes',
          'Если нужен переводчик — спрашивайте опыт именно с AIMA/IRN/Finanças, а не просто “говорит по-португальски”',
          'Для психологической помощи украинцам ищите проекты с trauma-informed подходом и украинским/русским языком',
          'Для работы не ограничивайтесь “своими”: LinkedIn, IEFP, Net-Empregos, Indeed, рекрутеры дают шире рынок',
          'Для бизнеса проверяйте recibo/fatura, NIF поставщика, livro de reclamações и отзывы вне Telegram',
          'На встречах не фотографируйте людей и детей без согласия, особенно беженцев и активистов',
          'Если конфликтная тема — война, санкции, гражданство — лучше заранее уточнить правила группы'
        ] }
      ]
    },
    {
      id: 'official-help',
      title: 'Официальная помощь: куда идти вместо слухов',
      content: [
        { kind: 'paragraph', text: 'Для миграционных и интеграционных вопросов используйте официальные каналы. AIMA занимается миграцией, документами и интеграцией: она унаследовала функции SEF и упразднённого ACM. Поддержка по интеграции, правам мигрантов и уязвимым группам теперь идёт через сеть центров CLAIM/CNAIM под AIMA, а информацию ищите на aima.gov.pt и ePortugal.' },
        { kind: 'checklist', items: [
          'AIMA — ВНЖ, proteção temporária, appointments, миграционные процедуры',
          'IRN — Conservatória, гражданство, Cartão de Cidadão для имеющих право, certidões',
          'Finanças — NIF, morada fiscal, IRS, recibos verdes, IVA',
          'Segurança Social — NISS, пособия, descontos, семейные выплаты',
          'SNS / Centro de Saúde — número de utente, семейный врач, вакцинация',
          'IEFP — работа, курсы, português, признание навыков',
          'Câmara Municipal / Junta de Freguesia — atestado de residência, местные программы, школа и жильё',
          'CLAIM/CNAIM (под AIMA) — ориентация мигрантов, переводы, социальная и юридическая навигация'
        ] },
        { kind: 'warning', text: 'Если вопрос юридически важный — ВНЖ, гражданство, налоговое резидентство, развод, опека, долг, уголовное дело — используйте advogado/solicitador с cédula profissional. “Консультант из диаспоры” без лицензии не должен подавать себя как юрист.' }
      ]
    },
    {
      id: 'practical-checklist',
      title: 'Мини-чеклист новичка из Восточной Европы',
      content: [
        { kind: 'paragraph', text: 'Если вы только приехали, не пытайтесь решить всё через один чат. Разделите задачи по ведомствам и срокам: легальный статус, адрес, налоги, медицина, школа, работа, банк, язык.' },
        { kind: 'checklist', items: [
          'Сохраните официальные сайты AIMA, ePortugal, Finanças, Segurança Social, SNS 24',
          'Сделайте NIF и обновите morada fiscal, когда появился стабильный адрес',
          'Оформите NISS, если работаете, открываете atividade или имеете право на соцподдержку',
          'Получите número de utente в Centro de Saúde по месту проживания',
          'Для детей сразу идите в agrupamento de escolas или Câmara Municipal по адресу',
          'Подключите Chave Móvel Digital, если есть подходящий документ и номер телефона',
          'Заведите банковский счёт/IBAN и включите Multibanco/MB WAY осторожно',
          'Запишитесь на португальский: IEFP, escolas, муниципальные курсы, частные группы',
          'Найдите 1–2 локальные группы по району, а не только общепортугальские чаты',
          'Проверяйте важные новости по первоисточнику: AIMA/DRE/ePortugal'
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'AIMA — Agência para a Integração, Migrações e Asilo',
      url: 'https://www.aima.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CLAIM/CNAIM (под AIMA) — центры поддержки и интеграции мигрантов',
      url: 'https://www.gov.pt/servicos/centros-nacionais-de-apoio-a-integracao-de-migrantes-cnaim-',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'ePortugal — официальные услуги государства для жителей и иностранцев',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — доступ к системе здравоохранения и serviços digitais SNS',
      url: 'https://www.sns24.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
