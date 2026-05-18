export default {
  editorialVoice: 'hackportugal',
  id: 'claim-claii-integracao',
  categoryId: 'country_specific',
  title: 'CLAIM/CLAII — местные центры поддержки интеграции мигрантов',
  tldr: 'CLAIM — бесплатные местные пункты помощи мигрантам: объясняют, какие документы нужны для AIMA, Finanças, SNS, Segurança Social, школы, жилья и работы, помогают заполнить формы и записаться онлайн. Сеть работает в 90+ муниципалитетах через Câmara Municipal/Junta de Freguesia, AIMA и бывшую структуру ACM; старое название CLAII ещё встречается на сайтах. Это не ускоритель ВНЖ и не адвокат, госпошлины AIMA/IRN/Finanças оплачиваются отдельно.',
  tags: ['claim', 'мигранты', 'aima', 'интеграция'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-claim',
      title: 'Что такое CLAIM и почему старое название CLAII ещё встречается',
      content: [
        { kind: 'paragraph', text: 'CLAIM — Centros Locais de Apoio à Integração de Migrantes, местные центры поддержки интеграции мигрантов. Это бесплатная первичная помощь по бытовым, административным и интеграционным вопросам: документы, записи, письма от госорганов, доступ к SNS, школе, соцстраху, трудовым правам.' },
        { kind: 'paragraph', text: 'CLAII — старое название сети: Centros Locais de Apoio à Integração de Imigrantes. На некоторых муниципальных сайтах, табличках и PDF оно всё ещё используется. В быту CLAIM и CLAII часто означают одно и то же: локальный кабинет поддержки мигрантов.' },
        { kind: 'paragraph', text: 'CLAIM обычно работает при Câmara Municipal, Junta de Freguesia, associação local, Santa Casa или другой местной организации, но методически связан с AIMA и наследием ACM. Поэтому качество и часы приёма зависят от конкретного муниципалитета.' }
      ]
    },
    {
      id: 'what-they-help-with',
      title: 'С чем реально помогают 🧾',
      content: [
        { kind: 'checklist', items: [
          'AIMA: объяснить тип процедуры, список документов, что означает письмо/уведомление, как подготовиться к приёму',
          'Finanças: NIF, morada fiscal, acesso ao Portal das Finanças, базовые вопросы IRS/IVA без налогового планирования',
          'Segurança Social: NISS, Segurança Social Direta, семейные и социальные пособия, если есть право',
          'SNS: número de utente, Centro de Saúde, направление к SNS24, базовая ориентация по доступу к медицине',
          'Школа и дети: matrícula, equivalência escolar, контакт со школой или Câmara по транспорту/питанию',
          'Работа: базовая информация о contrato de trabalho, recibos verdes, ACT, IEFP и правах работника',
          'Жильё и адрес: atestado de residência, контакты Junta de Freguesia, разъяснение писем от арендодателя/муниципалитета',
          'Перевод смысла документов: помощь понять письмо на португальском, но не нотариальный перевод',
          'Запись и навигация по порталами: ePortugal, AIMA, Segurança Social Direta, Portal das Finanças, SNS24',
          'Направление в CNAIM, юриста, associação, linha telefónica или другой сервис, если вопрос сложный'
        ] },
        { kind: 'warning', text: 'CLAIM не выдаёт ВНЖ, NIF, NISS или número de utente сам по себе. Центр помогает подготовить и подать/объяснить документы, но решение принимает соответствующий орган: AIMA, Finanças, Segurança Social, SNS, IRN, Câmara Municipal или школа.' }
      ]
    },
    {
      id: 'limits',
      title: 'Ограничения: чего CLAIM не может сделать',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка — идти в CLAIM как в “обходной путь” к AIMA. Это не работает. CLAIM не имеет отдельной квоты слотов AIMA, не ускоряет рассмотрение ВНЖ и не отменяет штрафы, пошлины или требования закона.' },
        { kind: 'checklist', items: [
          'Не гарантирует запись в AIMA и не продаёт слоты',
          'Не принимает решение по autorização de residência, продлению ВНЖ или гражданству',
          'Не заменяет advogado/solicitador в споре, суде, жалобе или сложном налоговом деле',
          'Не делает заверенный перевод, апостиль, reconhecimento de assinatura или нотариальное действие',
          'Не оплачивает за вас госпошлины AIMA, IRN, Finanças, IMT, IMI, IUC или другие платежи',
          'Не обязан говорить по-русски: языки зависят от конкретного центра и сотрудников',
          'Не является экстренной службой: при угрозе жизни звоните 112, по медицине — SNS24 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Если кто-то представляется “сотрудником CLAIM” и просит деньги за запись в AIMA, ускорение ВНЖ или оформление документов “без очереди”, это красный флаг. Официальная консультация CLAIM бесплатна; государственные сборы платятся только официальным способом.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Как найти ближайший CLAIM',
      content: [
        { kind: 'substeps', items: [
          { id: 'search-official', title: '1. Ищите через официальные сайты', content: [
            { kind: 'paragraph', text: 'Начните с aima.gov.pt и acm.gov.pt: ищите “CLAIM”, “Centro Local de Apoio à Integração de Migrantes” или “rede CLAIM”. В результатах обычно есть список центров, адрес, телефон, email, entidade promotora и часы приёма.' }
          ] },
          { id: 'municipality-site', title: '2. Проверьте сайт Câmara Municipal', content: [
            { kind: 'paragraph', text: 'На муниципальных сайтах услуга может называться CLAIM, CLAII, Gabinete de Apoio ao Imigrante, Espaço Cidadão Migrante или Integração de Migrantes. Поиск по сайту Câmara + “CLAIM” часто быстрее, чем общий поиск Google.' }
          ] },
          { id: 'book-before-going', title: '3. Уточните запись до визита', content: [
            { kind: 'checklist', items: [
              'Позвоните или напишите email: многие центры принимают только по marcação',
              'Уточните языки консультации: português, inglês, francês, árabe, ucraniano и др.',
              'Спросите, можно ли прийти без ВНЖ, но с паспортом и визой/доказательством пребывания',
              'Попросите подтвердить список документов для вашей темы',
              'Если центр в вашей freguesia перегружен, спросите, принимает ли соседний муниципалитет'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'Что взять на консультацию',
      content: [
        { kind: 'paragraph', text: 'Чем лучше подготовка, тем полезнее визит. Сотрудник CLAIM обычно не может “угадать” вашу ситуацию без дат въезда, типа визы, писем от ведомств и фактического адреса.' },
        { kind: 'checklist', items: [
          'Паспорт и копия страницы с личными данными',
          'Виза D1-D8, шенгенская виза, штамп въезда или другой документ о въезде/пребывании',
          'ВНЖ, cartão de residência, manifestação/доказательство процедуры AIMA — если есть',
          'NIF и данные доступа к Portal das Finanças — если уже есть',
          'NISS и доступ к Segurança Social Direta — если уже есть',
          'Договор аренды, comprovativo de morada, atestado de residência или счёт за коммунальные услуги',
          'Все письма/SMS/email от AIMA, Finanças, Segurança Social, SNS, IRN, Câmara или школы',
          'Трудовой договор, recibos verdes, recibos de vencimento или declaração de início de atividade — если вопрос о работе',
          'Свидетельства о рождении/браке, школьные документы детей, переводы — если вопрос семейный',
          'Список конкретных вопросов на бумаге или в телефоне, чтобы не забыть на приёме'
        ] },
        { kind: 'warning', text: 'Не отдавайте оригиналы документов надолго без расписки и не передавайте пароли от Portal das Finanças, Segurança Social Direta, email или CMD третьим лицам. На консультации можно вводить данные самому на своём телефоне.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'Когда CLAIM особенно полезен',
      content: [
        { kind: 'paragraph', text: 'CLAIM лучше всего работает как “переводчик системы”: вам объясняют, куда идти, какой документ нужен, что написано в письме и какой следующий шаг. Это особенно полезно в первые 3–6 месяцев в Португалии, когда одновременно нужны NIF, адрес, SNS, школа, работа и AIMA.' },
        { kind: 'checklist', items: [
          'Вы только приехали и не понимаете, с чего начать легализацию быта',
          'Получили письмо от AIMA/Finanças/SNS и не понимаете дедлайн или требование',
          'Нужно подготовиться к приёму AIMA и проверить комплект документов',
          'Нужно зарегистрировать ребёнка в школе или понять муниципальные правила',
          'Нужно объяснить Centro de Saúde, почему у вас есть право на número de utente',
          'Вы не говорите по-португальски и нужен посредник для первого контакта с местной службой',
          'Нужна маршрутизация: CLAIM скажет, когда вопрос уже требует advogado, ACT, CNAIM, Segurança Social или Tribunal'
        ] },
        { kind: 'paragraph', text: 'Если вопрос срочный и юридически рискованный — отказ AIMA, истекающий срок обжалования, выселение, долг, домашнее насилие, задержание, сложная налоговая проверка — используйте CLAIM только как точку входа и сразу просите направление к профильной службе или юристу.' }
      ]
    }
  ],
  costs: [
    { label: 'Консультация CLAIM/CLAII', amountEUR: 0, note: 'Бесплатно; центр не должен брать деньги за приём или разъяснение документов' },
    { label: 'Государственные пошлины', amountEURMin: 0, amountEURMax: 307.2, note: 'CLAIM не отменяет официальные сборы. Например, после 01.03.2026 сборы AIMA могут включать 133 € за admission и 307,20 € по art. 75 в зависимости от процедуры' }
  ],
  sources: [
    { title: 'AIMA — Agência para a Integração, Migrações e Asilo: информация и сервисы для мигрантов', url: 'https://aima.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACM — архивная и справочная информация о CLAIM/CNAIM и интеграции мигрантов', url: 'https://www.acm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — государственный портал услуг и контактов публичной администрации', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
