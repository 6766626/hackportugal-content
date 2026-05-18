export default {
  editorialVoice: 'hackportugal',
  id: 'loja-do-cidadao-deep',
  categoryId: 'digital_gov',
  title: 'Loja do Cidadão глубоко: какие сервисы где доступны',
  tldr: 'Loja do Cidadão — не «одно окно для всего», а сеть крупных центров, где под одной крышей работают balcões разных ведомств: Finanças, IRN, Segurança Social, IMT, ACT, CTT, EDP, иногда AIMA. Espaço Cidadão — облегчённая версия в Junta de Freguesia, Câmara Municipal или CTT: помогает с цифровыми услугами ePortugal, CMD, справками и заявками, но не заменяет профильное ведомство. В 2026 почти всё зависит от конкретной локации и записи через ePortugal/SIGA.',
  tags: ['loja', 'eportugal', 'документы', 'serviços'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-loja',
      title: 'Что такое Loja do Cidadão',
      content: [
        { kind: 'paragraph', text: 'Loja do Cidadão — физический центр госуслуг и коммунальных/публичных операторов. Идея простая: вместо поездок в Finanças, IRN, Segurança Social, IMT, ACT, CTT или EDP вы идёте в одно здание, где у каждого ведомства свой balcão, очередь и набор услуг.' },
        { kind: 'paragraph', text: 'Ключевой нюанс: Loja do Cidadão не является единым органом. Сотрудник Finanças не оформит услугу IRN, а balcão CTT не решит вопрос AIMA. Проверяйте не только адрес Loja, но и наличие конкретного ведомства внутри неё.' },
        { kind: 'checklist', items: [
          'Подходит, если нужно за один визит закрыть несколько бытовых задач: NIF/Finanças, CTT, коммунальные контракты, справки',
          'Часто удобнее обычного офиса ведомства: длинные часы работы, электронная очередь, несколько balcões рядом',
          'Не гарантирует наличие AIMA, IRN или IMT в каждой локации',
          'Многие услуги принимают только по предварительной marcação',
          'Для части услуг можно взять талон на месте, но лимит талонов заканчивается утром',
          'Услуги ведомств оплачиваются по их обычным тарифам; вход и талон бесплатны'
        ] }
      ]
    },
    {
      id: 'loja-vs-espaco',
      title: 'Loja do Cidadão vs Espaço Cidadão',
      content: [
        { kind: 'paragraph', text: 'Espaço Cidadão — маленькая точка помощи с публичными цифровыми услугами. Обычно находится в Junta de Freguesia, Câmara Municipal, библиотеке, CTT или другом местном офисе. Это не полноценная Loja do Cidadão.' },
        { kind: 'checklist', items: [
          'Loja do Cidadão: несколько ведомств физически сидят в одном здании',
          'Espaço Cidadão: сотрудник помогает подать онлайн-заявку или получить услугу через ePortugal',
          'Loja полезна для сложных дел: IRN, IMT, Segurança Social, Finanças, ACT, коммунальные операторы',
          'Espaço полезен для простых цифровых действий: справки, подтверждения, CMD, помощь с порталами',
          'В Espaço Cidadão обычно нет профильного инспектора Finanças, IRN, IMT или AIMA',
          'В маленьких freguesias Espaço Cidadão может быть единственной точкой очной помощи',
          'Если нужна юридически значимая регистрация, биометрия, ВНЖ, водительские права или акт гражданского состояния — заранее проверяйте, делает ли это именно выбранная точка'
        ] },
        { kind: 'warning', text: 'Не планируйте AIMA, cartão de residência, обмен водительских прав, registo civil или сложный IRS через Espaço Cidadão без проверки. В большинстве случаев Espaço только направит вас на онлайн-сервис или в профильный balcão.' }
      ]
    },
    {
      id: 'services-map',
      title: 'Какие сервисы где искать',
      content: [
        { kind: 'paragraph', text: 'Состав Loja do Cidadão отличается по городу. В Лиссабоне, Порту, Браге, Коимбре, Авейру, Фару и других крупных центрах выбор шире; в небольших городах часть ведомств отсутствует или работает по ограниченному графику.' },
        { kind: 'substeps', items: [
          { id: 'financas', title: 'Finanças / Autoridade Tributária', content: [
            { kind: 'checklist', items: [
              'Вопросы NIF и налогового адреса, если услуга доступна в этой Loja',
              'Помощь с Portal das Finanças и паролем',
              'IMI, IUC, IVA, IRS — консультации и базовые операции',
              'Pagamento voluntário и разбор налоговых уведомлений',
              'Для сложного IRS, статуса резидента или IFICI лучше брать запись в конкретный Serviço de Finanças'
            ] }
          ] },
          { id: 'irn', title: 'IRN / Conservatória', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão для граждан Португалии',
              'Registo civil: рождения, браки, смерти — если есть balcão IRN',
              'Сертификаты и certidões',
              'Некоторые услуги по гражданству и регистрации актов',
              'Не все Conservatória-услуги доступны в каждой Loja; для национальности часто нужен отдельный balcão или Conservatória'
            ] }
          ] },
          { id: 'imt-act-social', title: 'IMT, ACT, Segurança Social', content: [
            { kind: 'checklist', items: [
              'IMT: водительские права, замена/обмен, транспортные вопросы — только в локациях с balcão IMT',
              'ACT: трудовые жалобы, informação laboral, условия труда',
              'Segurança Social: NISS, contribuições, prestações, segurança social direta',
              'Для NISS иностранцам часто быстрее использовать Segurança Social Direta или запись в профильный офис',
              'Если дело связано с работодателем, возьмите contrato de trabalho, recibos de vencimento и переписку'
            ] }
          ] },
          { id: 'utilities', title: 'CTT, EDP и другие операторы', content: [
            { kind: 'checklist', items: [
              'CTT: почта, уведомления, некоторые платежи и serviços públicos',
              'EDP/энергетика: контракты, смена titular, вопросы счетов — если оператор представлен',
              'Águas/municipal services могут быть в муниципальных Lojas, но не везде',
              'Для коммунальных контрактов берите NIF, договор аренды или escritura, показания счётчиков и IBAN',
              'Коммерческие операторы внутри Loja работают по своим правилам и тарифам'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'aima-reality',
      title: 'AIMA в Loja do Cidadão: осторожно',
      content: [
        { kind: 'paragraph', text: 'После замены SEF на AIMA в октябре 2023 миграционные услуги распределены между AIMA, IRN и цифровыми каналами. В 2026 наличие balcão AIMA в Loja do Cidadão не означает, что там можно прийти без записи и оформить любой ВНЖ.' },
        { kind: 'checklist', items: [
          'Проверяйте на сайте AIMA, есть ли atendimento presencial в нужной Loja',
          'Для ВНЖ почти всегда нужна предварительная запись или вызов AIMA',
          'Не все balcões AIMA принимают первичную подачу, продление, биометрию и замену карты',
          'Для art. 75 и других процедур действуют отдельные пошлины AIMA; с 01.03.2026, например, admission fee составляет 133 €, а autorização de residência art. 75 — 307,20 €',
          'Берите паспорт, визу D1-D8 или другой статус, NIF, NISS при наличии, comprovativo de morada, contrato de trabalho/recibos verdes/доходы, seguro/SNS, фотографии только если указано',
          'Если запись дана в конкретный posto AIMA, нельзя самовольно заменить его на ближайшую Loja'
        ] },
        { kind: 'warning', text: 'Не покупайте «слоты в AIMA» у посредников. Официальная запись бесплатна; оплачиваются только пошлины процедуры. Если вас просят MB WAY-перевод за запись, это почти всегда риск мошенничества.' }
      ]
    },
    {
      id: 'how-to-plan-visit',
      title: 'Как спланировать визит без потери дня',
      content: [
        { kind: 'paragraph', text: 'Правильная последовательность: сначала найти услугу, потом локацию, потом тип приёма. Ошибка экспатов — ехать в ближайшую Loja do Cidadão, не проверив, есть ли там нужный balcão и принимает ли он без записи.' },
        { kind: 'checklist', items: [
          'Откройте ePortugal или страницу atendimento nas Lojas de Cidadão',
          'Ищите не только город, а конкретную услугу: NIF, carta de condução, certidão, Segurança Social, AIMA',
          'Проверьте horário: часы Loja и часы конкретного balcão могут отличаться',
          'Проверьте формат: senha на месте, marcação online, atendimento telefónico или только цифровая услуга',
          'Если доступна запись через SIGA/ePortugal, берите её — это снижает риск отказа',
          'Приходите за 15-20 минут до записи; для talão sem marcação — рано утром',
          'Возьмите оригиналы и копии: паспорт/ВНЖ, NIF, comprovativo de morada, contrato, IBAN, документы по делу',
          'Держите Portuguese phone number и email под рукой: уведомления и códigos часто приходят по SMS/email',
          'После приёма просите comprovativo или número do processo'
        ] }
      ]
    },
    {
      id: 'when-not-to-use',
      title: 'Когда лучше не идти в Loja',
      content: [
        { kind: 'paragraph', text: 'Loja do Cidadão экономит время на стандартных операциях, но не всегда лучший маршрут. Для сложных кейсов профильный офис, онлайн-портал или адвокат/contabilista быстрее и безопаснее.' },
        { kind: 'checklist', items: [
          'Сложная налоговая резиденция, IFICI, ретроактивный IRS — лучше Serviço de Finanças или contabilista',
          'Гражданство, спорные документы, смена имени, transcrição de casamento — лучше Conservatória/IRN с нужной компетенцией',
          'Судебные, арендные и трудовые конфликты — Loja не заменяет адвоката, Julgado de Paz или ACT',
          'AIMA с просроченным статусом, отказом или нестандартной процедурой — проверяйте официальный канал и готовьте dossier',
          'Если услуга уже полностью доступна онлайн через Portal das Finanças, Segurança Social Direta, IMT Online или ePortugal, визит может быть лишним',
          'Если нужен срочный документ, звоните/проверяйте расписание: balcão внутри Loja может быть закрыт на ремонт, забастовку или локальное ограничение'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Вход, электронный талон или запись в Loja do Cidadão', amountEUR: 0, note: 'Бесплатно; оплачиваются только услуги конкретных ведомств.' },
    { label: 'Помощь в Espaço Cidadão', amountEUR: 0, note: 'Обычно бесплатна, но сертификаты, certidões и копии могут иметь отдельную пошлину.' },
    { label: 'Миграционные пошлины AIMA', amountEURMin: 133, amountEURMax: 307.2, note: 'Примеры после 01.03.2026: admission fee 133 €, autorização de residência art. 75 — 307,20 €; точная сумма зависит от процедуры.' }
  ],
  sources: [
    {
      title: 'Официальная страница gov.pt об atendimento nas Lojas de Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nas-lojas-de-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: поиск мест очного atendimento de serviços públicos',
      url: 'https://eportugal.gov.pt/locais-de-atendimento-de-servicos-publicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Официальная страница gov.pt об atendimento nos Espaços Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA: Lojas e atendimento presencial',
      url: 'https://aima.gov.pt/pt/lojas-aima',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
