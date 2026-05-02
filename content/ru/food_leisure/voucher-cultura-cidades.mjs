export default {
  editorialVoice: 'hackportugal',
  id: 'voucher-cultura-cidades',
  categoryId: 'food_leisure',
  title: 'Vale Cultura и культурные ваучеры: муниципальные программы',
  tldr: 'В Португалии нет единого национального Vale Cultura для всех резидентов: культурные ваучеры и скидки дают Câmara Municipal. В 2026 ориентируйтесь на Lisboa Cultura / Lisboa Cultural до 100 € на семью при открытом наборе, Cartão Porto / Porto Cultura и Cartão Viver Cascais. Обычно нужен NIF с фискальным адресом в муниципалитете, comprovativo de residência и иногда доход. Скидки на театры, концерты, музеи и кино — чаще 5–50 € или бесплатный вход по партнёрам.',
  tags: ['cultura', 'ваучеры', 'lisboa', 'porto', 'cascais'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это такое и где искать',
      content: [
        { kind: 'paragraph', text: 'Vale Cultura в бытовом смысле — это не один государственный документ, а набор муниципальных программ: ваучер, карта жителя или промокод, который Câmara Municipal субсидирует из городского бюджета.' },
        { kind: 'paragraph', text: 'В 2026 чаще встречаются три формата: прямой ваучер на покупку билетов, городская карта со скидками у партнёров и отдельные кампании для семей, молодёжи, пожилых или людей с низким доходом.' },
        { kind: 'checklist', items: ['Lisboa: программы Lisboa Cultura / Lisboa Cultural и культурные кампании Câmara Municipal de Lisboa', 'Porto: Cartão Porto и культурные льготы через муниципальные площадки и партнёров', 'Cascais: Cartão Viver Cascais / Cascais Cultura и скидки у местных партнёров', 'Rede de Bibliotecas, museus municipais, teatros municipais — часто отдельные бесплатные или льготные билеты', 'Проверять нужно сайт Câmara Municipal, а не только Instagram: наборы открываются и закрываются по бюджету'] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто обычно имеет право',
      content: [
        { kind: 'paragraph', text: 'Главное условие — связь с конкретным муниципалитетом. Для экспата это обычно означает NIF, фискальный адрес в городе и подтверждение проживания. Гражданство Португалии обычно не требуется, но легальное пребывание и документы могут запросить.' },
        { kind: 'checklist', items: ['NIF с morada fiscal в соответствующем concelho', 'Documento de identificação: паспорт, Cartão de Cidadão, ВНЖ или certificado de registo de cidadão UE', 'Comprovativo de residência: atestado de residência от Junta de Freguesia, договор аренды, счёт за коммунальные услуги или certidão de domicílio fiscal из Finanças', 'Возрастное условие, если программа для молодёжи, студентов, пенсионеров или семей с детьми', 'Доход семьи, если это социальный ваучер: могут запросить IRS, declaração de rendimentos или подтверждение escalão do abono de família', 'Отсутствие дубликата: один ваучер на agregado familiar или один cartão на жителя', 'Активная регистрация на портале Câmara Municipal или в Balcão Municipal'] },
        { kind: 'warning', text: 'NIF сам по себе не доказывает, что вы живёте в Lisboa, Porto или Cascais. Если morada fiscal всё ещё у налогового представителя или в другом городе, заявку могут отклонить.' }
      ]
    },
    {
      id: 'amounts',
      title: 'Сколько дают и на что тратить',
      content: [
        { kind: 'paragraph', text: 'Суммы зависят от города и кампании. Для Lisboa в 2026 ориентир по семейным культурным ваучерам — до 100 € на agregado familiar при открытом наборе и наличии бюджета. В Porto и Cascais чаще работает модель карты жителя: бесплатные входы, льготные билеты и скидки у партнёров.' },
        { kind: 'checklist', items: ['Театры municipais и независимые театры-партнёры', 'Концерты, фестивали, dança и performance', 'Museus municipais и выставки', 'Киносеансы, cinemateca, культурные центры', 'Oficinas, workshops, занятия для детей', 'Библиотеки, медиатеки и образовательные мероприятия', 'Иногда — покупка книг или участие в книжных ярмарках, если это прямо указано в правилах кампании'] },
        { kind: 'paragraph', text: 'Типичная выгода — скидка 5–50 € на билет или заказ, бесплатный вход в муниципальный музей, либо лимитированный баланс, который списывается при покупке у партнёра.' },
        { kind: 'warning', text: 'Ваучер почти всегда нельзя обменять на деньги, передать другому человеку, использовать после срока действия или потратить вне списка aderentes. Перед покупкой проверяйте regulamento и список партнёров.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявку 🧾',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-city', title: '1. Найдите актуальную программу своего города', content: [
            { kind: 'paragraph', text: 'Ищите на сайте Câmara Municipal разделы Cultura, Benefícios, Cartão Municipal, Apoios или Balcão Virtual. В Porto также проверяйте Cartão Porto, в Cascais — Viver Cascais.' }
          ]},
          { id: 'prepare-docs', title: '2. Подготовьте документы', content: [
            { kind: 'checklist', items: ['NIF', 'Документ личности или ВНЖ', 'Comprovativo de morada fiscal из Portal das Finanças', 'Atestado de residência от Junta de Freguesia, если просят фактический адрес', 'IRS/declaração de rendimentos, если программа зависит от дохода', 'Данные членов семьи, если ваучер на agregado familiar', 'Email и португальский номер телефона для кода подтверждения'] }
          ]},
          { id: 'submit', title: '3. Подайте онлайн или в Balcão Municipal', content: [
            { kind: 'paragraph', text: 'Большинство заявок принимают через портал муниципалитета. Если нет Chave Móvel Digital, часто можно подать лично в balcão с паспортом и NIF.' }
          ]},
          { id: 'approval', title: '4. Дождитесь одобрения и кода', content: [
            { kind: 'paragraph', text: 'Решение может прийти в личный кабинет, email или SMS. Ваучер может быть QR-кодом, PDF, номером карты или автоматической скидкой при покупке билета.' }
          ]},
          { id: 'redeem', title: '5. Используйте до окончания срока', content: [
            { kind: 'paragraph', text: 'На кассе или сайте партнёра выберите тариф/промокод программы. Сохраните recibo: если операция не прошла, Câmara или партнёр обычно просят доказательство покупки.' }
          ]}
        ]}
      ]
    },
    {
      id: 'city-notes',
      title: 'Особенности Lisboa, Porto и Cascais',
      content: [
        { kind: 'paragraph', text: 'Lisboa. Следите за cm-lisboa.pt: кампании Lisboa Cultura / Lisboa Cultural могут быть ограничены датами подачи и бюджетом. Приоритет иногда дают семьям-резидентам, детям, молодёжи или домохозяйствам с более низким доходом. Ориентир заявленного семейного лимита — до 100 € на семью, но всегда проверяйте regulamento конкретного года.' },
        { kind: 'paragraph', text: 'Porto. У города чаще работает не разовый “чек”, а Cartão Porto и культурные льготы: скидки на муниципальные театры, museus, Casa do Infante, Biblioteca Municipal и мероприятия партнёров. Правила привязаны к residência no Porto и регистрации на городском портале.' },
        { kind: 'paragraph', text: 'Cascais. Cartão Viver Cascais даёт жителям доступ к скидкам и льготам у муниципальных и частных партнёров, включая культуру, спорт и досуг. Для некоторых льгот нужны дополнительные профили: estudante, sénior, família или residente.' },
        { kind: 'warning', text: 'Названия “Porto Cultura” и “Cascais Cultura” часто используют неформально. Официальное название льготы может быть Cartão Porto, Cartão Viver Cascais или конкретная campanha cultural. В заявке используйте название с сайта Câmara.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Частые отказы и как исправить',
      content: [
        { kind: 'checklist', items: ['Morada fiscal в Finanças не совпадает с городом — обновите адрес и скачайте новое comprovativo', 'Договор аренды на партнёра, а не на вас — возьмите atestado de residência или declaração do senhorio', 'Программа уже закрыта — подпишитесь на newsletter Câmara и проверьте новые candidaturas', 'Доход семьи выше порога — ищите не социальный ваучер, а cartão municipal со скидками', 'Партнёр не принимает ваучер на выбранное событие — проверьте список aderentes и исключения', 'Код не работает онлайн — попробуйте кассу площадки или напишите suporte с NIF, кодом и скриншотом', 'Нет CMD — подавайте лично через Balcão Municipal, если это разрешено regulamento'] },
        { kind: 'paragraph', text: 'Практический лайфхак: сначала оформите городскую карту жителя, а уже потом подавайтесь на отдельные культурные кампании. Многие муниципалитеты используют карту как базовую проверку residência.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa Cultural / семейный ваучер', amountEURMax: 100, note: 'Ориентир для кампаний Lisboa при открытом наборе; точный лимит и даты зависят от regulamento года.' },
    { label: 'Скидка по городским картам', amountEURMin: 5, amountEURMax: 50, note: 'Типичный диапазон выгоды на билеты, музеи, концерты и workshops у партнёров.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 5, note: 'Цена зависит от freguesia; иногда бесплатно для социальных целей.' },
    { label: 'Оформление Cartão Porto / Viver Cascais', amountEUR: 0, note: 'Обычно бесплатно для резидентов, но платные дубликаты или физические карты возможны по муниципальным правилам.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — культура и муниципальные программы', url: 'https://www.cm-lisboa.pt/viver/cultura', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — культура и городские сервисы', url: 'https://www.cm-porto.pt/cultura', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Cartão Porto', url: 'https://www.cm-porto.pt/cartao-porto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — Cartão Viver Cascais', url: 'https://www.cascais.pt/cartao-viver-cascais', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
