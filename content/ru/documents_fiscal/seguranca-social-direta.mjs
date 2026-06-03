export default {
  editorialVoice: 'hackportugal',
  id: 'seguranca-social-direta',
  categoryId: 'documents_fiscal',
  title: 'Segurança Social Direta: все онлайн-сервисы SSD',
  tldr: 'Segurança Social Direta — личный кабинет Segurança Social: NISS, взносы, recibos verdes, пособия по болезни/безработице/родительству, регистрация empregado doméstico, симуляторы пенсии и семейных выплат. Вход — через NISS + пароль или Chave Móvel Digital (CMD). В 2026 запрос NISS для иностранца подаётся онлайн бесплатно; ключевые ставки: работник 11%, работодатель обычно 23,75%, independent worker 21,4%, IAS 537,13 €. SSD нужен почти всем, кто работает, платит взносы или ждёт пособия.',
  tags: ['ssd', 'niss', 'segurança-social', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'Segurança Social Direta, или SSD, — официальный онлайн-кабинет Segurança Social. Это не налоговая Finanças и не AIMA: здесь отражаются социальные взносы, стаж, пособия, пенсии и статусы работника/самозанятого.' },
        { kind: 'paragraph', text: 'SSD нужен не только тем, кто уже работает. Через портал можно запросить NISS, проверить, платит ли работодатель взносы, подать заявления на пособия, увидеть долги, скачать декларации и управлять данными семьи.' },
        { kind: 'checklist', items: [
          'Запросить NISS для иностранного гражданина',
          'Проверить carreira contributiva — месяцы и суммы взносов',
          'Увидеть remunerações declaradas работодателем',
          'Подать или отслеживать subsídio de doença, desemprego, parentalidade',
          'Подать quarterly declaration для recibos verdes',
          'Посмотреть pagamentos e recebimentos — начисления, выплаты, долги',
          'Получить declarações для банка, аренды, пособий или иммиграционных процедур',
          'Зарегистрировать trabalhador de serviço doméstico как работодатель',
          'Использовать simulador de pensões и другие симуляторы'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Как войти: CMD или пароль SSD 🔐',
      content: [
        { kind: 'paragraph', text: 'Вход в SSD возможен двумя основными способами: через Chave Móvel Digital (CMD) или через NISS + palavra-chave Segurança Social. Для экспата практичнее иметь оба варианта: CMD часто быстрее, пароль SSD спасает, если CMD не активирована или сменился телефон.' },
        { kind: 'substeps', items: [
          { id: 'cmd', title: 'Вход через Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'CMD — государственная цифровая идентификация. Её можно использовать на gov.pt, ePortugal, Finanças, Segurança Social Direta и других порталах. Для входа обычно нужен номер телефона, PIN CMD и одноразовый код.' },
            { kind: 'checklist', items: [
              'Активируйте CMD заранее: онлайн с Cartão de Cidadão или лично в Espaço Cidadão / IRN / других точках обслуживания',
              'Проверьте, что к CMD привязан актуальный португальский или иностранный номер телефона',
              'Сохраните PIN CMD отдельно от SIM-карты',
              'Если меняете номер телефона, обновите CMD до потери доступа к старому номеру'
            ] }
          ] },
          { id: 'password', title: 'Вход через NISS + пароль', content: [
            { kind: 'paragraph', text: 'Если у вас уже есть NISS, на странице Segurança Social Direta можно запросить пароль доступа. В некоторых случаях пароль отправляют по адресу, зарегистрированному в Segurança Social; поэтому адрес должен быть актуальным.' },
            { kind: 'checklist', items: [
              'Нужен NISS — Número de Identificação da Segurança Social',
              'Нужен актуальный адрес, телефон и e-mail в системе Segurança Social',
              'После первого входа проверьте и обновите contactos',
              'Не используйте пароль SSD в Finanças, банках или частных сервисах',
              'Если пароль не приходит, обращайтесь через e-Clic, Linha Segurança Social или presencial atendimento'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Не передавайте доступ бухгалтеру, работодателю или арендодателю. В SSD видны ваши взносы, пособия, семейные данные и возможные долги. Для бухгалтера безопаснее использовать отдельные полномочия или ограниченный обмен документами.' }
      ]
    },
    {
      id: 'niss-online',
      title: 'Запрос NISS онлайн для иностранца',
      content: [
        { kind: 'paragraph', text: 'NISS — номер социальной идентификации. Он нужен для трудового договора, recibos verdes, взносов, пособий и части административных процедур. В 2026 иностранцы могут подать запрос NISS онлайн через formulário Pedido de NISS — Cidadão Estrangeiro на сайте Segurança Social.' },
        { kind: 'checklist', items: [
          'Паспорт, Cartão de Cidadão ЕС или другой документ идентификации',
          'NIF, если уже есть',
          'ВНЖ, виза или другой документ легального пребывания, если применимо',
          'Контактный e-mail и телефон',
          'Адрес в Португалии или адрес для связи',
          'Документ, подтверждающий трудовую/самозанятую деятельность, если он есть: contrato de trabalho, declaração da entidade empregadora, início de atividade',
          'Для представителя — доверенность и документы представителя'
        ] },
        { kind: 'paragraph', text: 'Подача запроса бесплатная. После присвоения NISS вы сможете запросить пароль SSD и проверить, появилась ли ваша запись в системе. Если NISS нужен работодателю, не ждите «пока компания всё сделает»: проверьте присвоение самостоятельно.' },
        { kind: 'warning', text: 'NISS сам по себе не даёт ВНЖ, не заменяет NIF и не подтверждает налоговое резидентство. Это номер Segurança Social, а не иммиграционный статус.' }
      ]
    },
    {
      id: 'contributions',
      title: 'Взносы, стаж и recibos verdes',
      content: [
        { kind: 'paragraph', text: 'Один из главных разделов SSD — consulta da carreira contributiva. Здесь видно, за какие месяцы и с каких сумм были заявлены взносы. Это критично для пособий и будущей пенсии: Segurança Social считает права не по трудовому договору на бумаге, а по зарегистрированным remunerações и взносам.' },
        { kind: 'checklist', items: [
          'Работник по contrato de trabalho обычно платит 11% из зарплаты',
          'Работодатель обычно платит 23,75% сверх зарплаты',
          'Independent worker на recibos verdes в стандартном режиме платит 21,4%',
          'Declaração trimestral для recibos verdes подаётся в январе, апреле, июле и октябре',
          'В SSD можно увидеть contribuições a pagar и referências Multibanco',
          'Можно проверить dívida à Segurança Social и запросить планы оплаты, если доступны',
          'Можно скачать declarações de situação contributiva',
          'Стаж для пособий и пенсий проверяйте по месяцам, а не только по годовой сумме'
        ] },
        { kind: 'warning', text: 'Если работодатель удерживает 11% из зарплаты, но в SSD нет remunerações, это красный флаг. Попросите расчётные листки recibo de vencimento и письменно уточните у работодателя; при необходимости обращайтесь в ACT и Segurança Social.' }
      ]
    },
    {
      id: 'benefits-and-services',
      title: 'Пособия, пенсии и serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'SSD — основной канал для заявлений и отслеживания выплат. Не все пособия «запрашиваются с нуля» вручную: например, больничный часто начинается с Certificado de Incapacidade Temporária, который врач SNS отправляет в электронном виде, а в SSD вы проверяете статус, суммы и недостающие данные.' },
        { kind: 'checklist', items: [
          'Subsídio de doença — больничный, если есть необходимый prazo de garantia и электронный CIT',
          'Subsídio de desemprego — пособие по безработице после регистрации в IEFP и при соблюдении стажа',
          'Subsídio parental — выплаты при рождении ребёнка и licença parental',
          'Abono de família — семейное пособие, зависит от доходов household и escalão',
          'Prestações por deficiência ou dependência — отдельные выплаты при подтверждённых условиях',
          'Simulador de pensões — ориентировочный расчёт будущей пенсии по данным carreira contributiva',
          'Registo de trabalhador de serviço doméstico — регистрация домашнего работника работодателем',
          'Pedidos e mensagens — отслеживание заявлений, уведомлений и запросов Segurança Social'
        ] },
        { kind: 'paragraph', text: 'Для serviço doméstico SSD позволяет работодателю зарегистрировать связь, заявлять remunerações и платить взносы. Это важно для нянь, домработниц, сиделок и семей, которые нанимают человека напрямую, а не через агентство.' },
        { kind: 'warning', text: 'Пособия имеют сроки и условия. Для desemprego важны регистрация в IEFP и стаж взносов; для parentalidade — сроки подачи и правильное указание licença; для doença — электронный CIT и данные работодателя. Не откладывайте проверку SSD до момента, когда деньги уже должны прийти.' }
      ]
    },
    {
      id: 'practical-routine',
      title: 'Практичная рутина для экспата',
      content: [
        { kind: 'paragraph', text: 'После получения NISS и первого входа в SSD настройте кабинет как рабочий инструмент. Это занимает меньше часа, но экономит недели переписки, если работодатель ошибся, пособие зависло или Segurança Social отправила уведомление.' },
        { kind: 'checklist', items: [
          'Проверьте nome, дата рождения, NIF, адрес, e-mail и телефон',
          'Активируйте notificações digitais, если понимаете последствия и регулярно проверяете портал',
          'Раз в месяц проверяйте remunerações declaradas работодателем',
          'Раз в квартал проверяйте recibos verdes и declaração trimestral, если вы self-employed',
          'Скачивайте comprovativos и declarações в PDF сразу после подачи заявлений',
          'Сохраняйте referências Multibanco и comprovativos de pagamento',
          'Перед сменой работы проверьте, что старый работодатель закрыл vínculo корректно',
          'Перед подачей на пособие проверьте IBAN и household в системе',
          'Не игнорируйте mensagens da Segurança Social — часть сроков считается с даты уведомления'
        ] },
        { kind: 'warning', text: 'SSD, Finanças и AIMA не синхронизируют всё мгновенно. Смена адреса, семейного статуса, IBAN или статуса деятельности может требовать отдельных обновлений в нескольких системах.' }
      ]
    }
  ],
  costs: [
    { label: 'Запрос NISS для иностранного гражданина', amountEUR: 0, note: 'Подача через официальный онлайн-формуляр Segurança Social бесплатна' },
    { label: 'Доступ к Segurança Social Direta', amountEUR: 0, note: 'Вход через CMD или NISS + пароль без госпошлины' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'Активация CMD как государственная услуга бесплатна; возможны только обычные расходы связи/SMS у оператора' }
  ],
  sources: [
    { title: 'Segurança Social Direta — официальный портал', url: 'https://www.seg-social.pt/seguranca-social-direta', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pedido de NISS — Cidadão Estrangeiro', url: 'https://www.seg-social.pt/pedido-de-formulario-niss-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Pedir o Número de Identificação da Segurança Social', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Pedir a Chave Móvel Digital', url: 'https://www.gov.pt/servicos/pedir-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
