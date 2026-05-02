export default {
  editorialVoice: 'hackportugal',
  id: 'cascais-card-vivacascais',
  categoryId: 'daily_life',
  title: 'Cascais Card / Viva Cascais — карта резидента Кашкайша',
  tldr: 'Cartão Viver Cascais / Viva Cascais — муниципальная карта Câmara Municipal de Cascais для жителей, работников и студентов округа Cascais. В 2026 она нужна для доступа к льготам муниципалитета: BUS LINE/MobiCascais, парковка через Cascais Próxima, бассейны, спорт, культура, мероприятия и местные скидки. Оформление обычно бесплатное онлайн через Cascais ID; нужны NIF, документ личности и подтверждение связи с Cascais: адрес, работа или учёба.',
  tags: ['cascais', 'vivacascais', 'транспорт', 'парковка'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за карта',
      content: [
        { kind: 'paragraph', text: 'Cartão Viver Cascais — карта муниципальных льгот Câmara Municipal de Cascais. В быту её часто называют Cascais Card или Viva Cascais, потому что доступ к услугам идёт через цифровой аккаунт Cascais ID, сайт и приложения муниципалитета.' },
        { kind: 'paragraph', text: 'Карта не заменяет ВНЖ, Cartão de Cidadão, NIF, Navegante или банковскую карту. Это локальный пропуск к скидкам и тарифам именно в concelho de Cascais: Cascais, Estoril, Carcavelos, Parede, Alcabideche, São Domingos de Rana.' },
        { kind: 'checklist', items: [
          'Жителям Cascais — по адресу проживания в муниципалитете',
          'Работникам Cascais — если место работы находится в муниципалитете',
          'Студентам Cascais — если учебное заведение находится в муниципалитете',
          'Детям — через родителя/законного представителя',
          'Иностранцам — доступна на тех же условиях, если есть NIF и подтверждение связи с Cascais'
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'Что даёт в 2026',
      content: [
        { kind: 'paragraph', text: 'Набор льгот зависит от вашего профиля: munícipe, trabalhador или estudante. Проверяйте активные benefícios в личном кабинете/приложении, потому что Câmara de Cascais периодически меняет партнёров, тарифы и правила отдельных услуг.' },
        { kind: 'checklist', items: [
          'BUS LINE / MobiCascais: муниципальные автобусные маршруты Cascais с льготным режимом для подтверждённых пользователей карты',
          'Парковка: резидентские и льготные условия в зонах Cascais Próxima, если ваш адрес/зона подпадает под правила estacionamento',
          'Piscinas Municipais: скидки или специальные тарифы на муниципальные бассейны',
          'Desporto: льготы на спортивные занятия, муниципальные комплексы и программы',
          'Cultura: скидки на некоторые спектакли, концерты, музеи и мероприятия Câmara Municipal de Cascais',
          'Bibliotecas и municipal services: упрощённая идентификация в части муниципальных сервисов',
          'Партнёры: локальные скидки у коммерческих партнёров, если они активны в текущем списке Câmara'
        ] },
        { kind: 'warning', text: 'Не планируйте бюджет исходя из “всё бесплатно”. Бесплатность или скидка зависит от конкретной услуги, вашего статуса и действующих условий. Перед поездкой, парковкой или покупкой билета проверьте тариф в MobiCascais/Cascais Próxima или на cm-cascais.pt.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для заявки',
      content: [
        { kind: 'paragraph', text: 'Обычно заявка подаётся онлайн. Система просит идентифицировать человека и доказать связь с Cascais. Для иностранца подойдут стандартные португальские документы: NIF, ВНЖ или паспорт, подтверждение адреса/работы/учёбы.' },
        { kind: 'checklist', items: [
          'NIF',
          'Документ личности: ВНЖ, Cartão de Cidadão для граждан PT/EU или паспорт',
          'Адрес в Cascais: contrato de arrendamento, escritura, счёт за воду/электричество/интернет или atestado de residência от Junta de Freguesia',
          'Если вы не живёте, но работаете в Cascais: declaração da entidade patronal или трудовой договор с местом работы в Cascais',
          'Если вы студент: declaração de matrícula или студенческий документ учебного заведения в Cascais',
          'Для ребёнка: документ ребёнка, NIF ребёнка при наличии, документ родителя и подтверждение родительских полномочий, если система запросит',
          'Email и португальский мобильный номер для подтверждений',
          'Доступ к Cascais ID / личному кабинету Câmara'
        ] },
        { kind: 'warning', text: 'Atestado de residência от Junta de Freguesia полезен, если у вас нет договора аренды на своё имя или коммунальных счетов. Для получения atestado Junta обычно просит документ личности, NIF, доказательство адреса и иногда двух свидетелей из freguesia.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как оформить онлайн',
      content: [
        { kind: 'substeps', items: [
          { id: 'create-cascais-id', title: '1. Создайте Cascais ID', content: [
            { kind: 'paragraph', text: 'Зайдите на сайт Câmara Municipal de Cascais и создайте личный аккаунт. Используйте email, к которому у вас есть постоянный доступ: туда приходят подтверждения и уведомления по заявке.' }
          ] },
          { id: 'choose-profile', title: '2. Выберите профиль', content: [
            { kind: 'paragraph', text: 'В заявке выберите основание: residente/munícipe, trabalhador или estudante. От этого зависит, какие документы запросят и какие льготы активируются.' }
          ] },
          { id: 'upload-documents', title: '3. Загрузите документы', content: [
            { kind: 'paragraph', text: 'Скан или фото должны быть читаемыми: имя, NIF, адрес, дата и подпись/логотип организации должны быть видны. Файлы лучше подготовить в PDF или JPG.' }
          ] },
          { id: 'wait-validation', title: '4. Дождитесь validação', content: [
            { kind: 'paragraph', text: 'Муниципалитет проверяет документы. Если чего-то не хватает, заявку вернут на исправление. Срок зависит от загрузки сервиса; на практике закладывайте несколько рабочих дней, а перед срочной парковкой или покупкой абонемента не оставляйте оформление на последний момент.' }
          ] },
          { id: 'use-digital-card', title: '5. Используйте цифровую карту', content: [
            { kind: 'paragraph', text: 'После одобрения карта доступна в цифровом виде. Для автобусов, парковки и скидок могут использоваться разные приложения/сервисы муниципальной экосистемы, поэтому проверьте, где именно нужно привязать Cartão Viver Cascais.' }
          ] }
        ] }
      ]
    },
    {
      id: 'transport-parking',
      title: 'Транспорт и парковка: где чаще всего ошибаются',
      content: [
        { kind: 'paragraph', text: 'Главная путаница: Cartão Viver Cascais, MobiCascais, BUS LINE, Cascais Próxima и Navegante — не одно и то же. Карта подтверждает ваше право на льготный муниципальный режим, но сама поездка или парковка может требовать отдельной валидации в приложении, на валидаторе или в сервисе оператора.' },
        { kind: 'checklist', items: [
          'Для автобуса проверьте, что ваш профиль карты активен именно для BUS LINE/MobiCascais',
          'Если маршрут выходит за пределы Cascais, условия могут отличаться от муниципальных маршрутов',
          'Navegante нужен для метрополитенской сети AML и не заменяется Cartão Viver Cascais',
          'Для парковки проверьте зону: residente, comerciante, visitante и платные зоны имеют разные правила',
          'Адрес в карте должен соответствовать зоне, где вы просите резидентскую парковку',
          'Автомобиль может потребовать отдельной регистрации по matrícula',
          'Штраф за парковку не отменяют только потому, что у вас есть карта: важно активировать правильный режим до стоянки',
          'При смене адреса, работы или учёбы обновите данные в карте, иначе льготы могут отключить'
        ] },
        { kind: 'warning', text: 'Если вы только переехали в Cascais и ждёте подтверждение карты, не считайте, что льготы действуют задним числом. До validação оплачивайте транспорт и парковку по обычному тарифу.' }
      ]
    },
    {
      id: 'renewal-problems',
      title: 'Продление, смена адреса и проблемы',
      content: [
        { kind: 'paragraph', text: 'Карта привязана к актуальности ваших данных. Если вы переехали из Cascais, сменили работодателя, закончили учёбу или поменяли адрес внутри муниципалитета, обновите профиль. Для части льгот Câmara может периодически просить новое подтверждение.' },
        { kind: 'checklist', items: [
          'Проверяйте срок действия и статус карты в личном кабинете',
          'Сохраняйте PDF/сканы договора аренды, atestado, declaração da entidade patronal и matrícula',
          'При отказе откройте сообщение Câmara: обычно там указано, какой документ нечитабелен или не подходит',
          'Если документ на имя супруга/партнёра, добавьте подтверждение совместного проживания, если система это допускает',
          'Если нет ответа, используйте contactos Câmara Municipal de Cascais или atendimento municipal',
          'После одобрения проверьте льготу в конкретном сервисе: бассейн, парковка, автобус, культурная площадка',
          'Не передавайте карту другим людям: льготы персональные'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Оформление Cartão Viver Cascais', amountEUR: 0, note: 'Обычно бесплатно; отдельные муниципальные услуги, парковка, спорт или мероприятия могут оплачиваться по своим тарифам.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Тариф зависит от freguesia и типа справки; нужен только если нет другого подтверждения адреса.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Cascais — официальный сайт муниципальных услуг',
      url: 'https://www.cm-cascais.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — Cartão Viver Cascais',
      url: 'https://www.cm-cascais.pt/cartao-viver-cascais',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — MobiCascais и транспорт',
      url: 'https://www.cm-cascais.pt/mobi-cascais',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Cascais Próxima — парковка и мобильность в Cascais',
      url: 'https://www.cascaisproxima.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
