export default {
  editorialVoice: 'hackportugal',
  id: 'porto-card-residente',
  categoryId: 'daily_life',
  title: 'Porto Card Resident: резидентская карта Порту',
  tldr: 'Cartão Porto. — бесплатная муниципальная карта Câmara Municipal do Porto для тех, кто живёт, учится или работает в concelho do Porto. Это не туристическая Porto Card. Нужна для скидок на культуру, спорт и муниципальные услуги, а молодым резидентам — как вход в экосистему Cartão Jovem Municipal / Movijovem. Для Andante Sub23 сама карта не заменяет студенческое подтверждение, но помогает собрать локальные льготы в одном профиле. Оформление обычно онлайн или через CMP; готовьте NIF, документ личности и подтверждение адреса/учёбы/работы.',
  tags: ['porto', 'cartão', 'скидки', 'andante'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за карта и чем она не является',
      content: [
        { kind: 'paragraph', text: 'Cartão Porto. — резидентская карта Câmara Municipal do Porto. Она привязана к муниципалитету Порту, а не ко всей Área Metropolitana do Porto. Право обычно получают люди, которые живут, учатся или работают в concelho do Porto.' },
        { kind: 'paragraph', text: 'Не путайте её с туристической Porto Card, которую продают гостям города для транспорта и музеев на 1–4 дня. Резидентская карта не является проездным Andante, не заменяет ВНЖ, NIF, Cartão de Cidadão или atestado de residência.' },
        { kind: 'checklist', items: [
          'Для резидентов: подтверждение адреса в concelho do Porto',
          'Для студентов: подтверждение обучения в учреждении на территории Porto',
          'Для работников: подтверждение работы в Porto',
          'Для молодёжи: доступ к локальным молодёжным преимуществам, связанным с Cartão Jovem Municipal / Movijovem',
          'Для повседневной жизни: скидки и бесплатные/льготные входы в муниципальные культурные и спортивные объекты',
          'Для транспорта: полезна как часть локального пакета льгот, но не заменяет Andante Sub23'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может оформить',
      content: [
        { kind: 'paragraph', text: 'CMP описывает Cartão Porto. как муниципальный инструмент для связи жителей и пользователей города с услугами Câmara Municipal do Porto. На практике экспату важно доказать одну из трёх связей с городом: residência, estudo или trabalho.' },
        { kind: 'checklist', items: [
          'Вы живёте в freguesia муниципалитета Porto: Bonfim, Campanhã, Paranhos, Ramalde и др.',
          'У вас есть NIF и португальский адрес',
          'Вы можете показать contrato de arrendamento, recibo de renda, счёт за коммунальные услуги или atestado de residência от Junta de Freguesia',
          'Вы учитесь в школе, университете или другом учреждении в Porto',
          'Вы работаете у работодателя с местом работы в Porto или имеете declaração da entidade patronal',
          'Несовершеннолетнему обычно нужен законный представитель',
          'ВНЖ полезен как ID, но сама карта — муниципальная, а не иммиграционная'
        ] },
        { kind: 'warning', text: 'Если вы живёте в Vila Nova de Gaia, Matosinhos, Maia или Gondomar, но часто ездите в Porto, это не то же самое, что проживание в concelho do Porto. Для статуса резидента CMP может потребовать именно адрес в Porto.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы: что подготовить заранее',
      content: [
        { kind: 'paragraph', text: 'Точный список документов зависит от вашего основания: резидент, студент или работник. Перед подачей проверьте актуальную форму на сайте cm-porto.pt, потому что CMP может менять способ подтверждения и цифровые каналы.' },
        { kind: 'checklist', items: [
          'Documento de identificação: ВНЖ, паспорт, Cartão de Cidadão или другой допустимый ID',
          'NIF',
          'Подтверждение адреса: atestado de residência, contrato de arrendamento, recibo de renda, счёт за água/luz/gás/internet',
          'Если вы студент: declaração de matrícula или comprovativo de inscrição',
          'Если вы работник: declaração da entidade empregadora или другой документ о месте работы',
          'Контактный email и португальский телефон',
          'Для детей/подростков: ID законного представителя и подтверждение родства/опеки, если запросят',
          'Фото может потребоваться, если карта выпускается в физическом формате'
        ] },
        { kind: 'warning', text: 'Адрес в Finanças сам по себе не всегда достаточен для муниципальной процедуры. Если вы недавно переехали, быстрее всего получить atestado de residência в Junta de Freguesia по месту фактического проживания.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявку 📝',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-page', title: '1. Откройте раздел Cartão Porto. на сайте CMP', content: [
            { kind: 'paragraph', text: 'Начинайте с официального сайта Câmara Municipal do Porto. Ищите раздел Cartão Porto. или benefícios Cartão Porto. Не используйте страницы туристической Porto Card: это другой продукт.' }
          ] },
          { id: 'create-profile', title: '2. Создайте или подтвердите профиль', content: [
            { kind: 'paragraph', text: 'Если доступна онлайн-заявка, заполните данные, загрузите документы и проверьте email. В некоторых случаях CMP может направить вас в atendimento municipal или запросить дополнительные доказательства.' }
          ] },
          { id: 'submit-documents', title: '3. Загрузите подтверждения', content: [
            { kind: 'paragraph', text: 'Файл должен быть читаемым: имя, адрес, дата и организация-эмитент должны быть видны. Для аренды лучше приложить договор и последний recibo de renda, если он есть.' }
          ] },
          { id: 'wait-validation', title: '4. Дождитесь проверки', content: [
            { kind: 'paragraph', text: 'CMP проверяет право на карту. Сроки не являются универсальными: в периоды обновления учебного года и массовых заявок ожидание обычно дольше.' }
          ] },
          { id: 'use-card', title: '5. Используйте цифровую или физическую карту', content: [
            { kind: 'paragraph', text: 'После одобрения проверьте, где карта отображается: в личном кабинете, приложении или как физическая карта. На кассах музеев, бассейнов и мероприятий могут попросить ID вместе с картой.' }
          ] }
        ] }
      ]
    },
    {
      id: 'benefits',
      title: 'Какие льготы реально ожидать',
      content: [
        { kind: 'paragraph', text: 'Смысл Cartão Porto. — муниципальные преимущества, а не универсальная скидочная карта на всё. Список партнёров и правил меняется, поэтому перед покупкой билета или абонемента проверяйте конкретный объект на cm-porto.pt.' },
        { kind: 'checklist', items: [
          'Скидки или льготный доступ к культурным объектам CMP',
          'Льготы на мероприятия Teatro Municipal do Porto и другие муниципальные программы, если они включены в актуальный список',
          'Преимущества в библиотеках, музеях, галереях и городских инициативах',
          'Скидки на спорт и lazer в муниципальных объектах, если они указаны в правилах',
          'Молодёжные преимущества через Cartão Jovem Municipal / Movijovem для подходящего возраста',
          'Локальные кампании CMP для жителей Porto',
          'Партнёрские скидки, которые нужно проверять перед оплатой',
          'Иногда требуется предварительная регистрация на конкретное событие, одной карты на входе может быть недостаточно'
        ] },
        { kind: 'warning', text: 'Не планируйте бюджет, исходя из постоянной скидки. Муниципальные преимущества могут быть ограничены датами, квотами, возрастом, местом проживания или наличием мест.' }
      ]
    },
    {
      id: 'transport-youth',
      title: 'Andante Sub23 и Movijovem: где связь, а где нет',
      content: [
        { kind: 'paragraph', text: 'Cartão Porto. полезна молодым резидентам как муниципальная карта и точка входа в локальные молодёжные программы, включая Cartão Jovem Municipal / Movijovem, если вы подходите по возрасту и условиям. Но транспортные права Andante оформляются по правилам Andante и национальных программ, а не только через CMP.' },
        { kind: 'checklist', items: [
          'Andante Sub23 — это транспортный профиль/льгота для студентов, а не функция Cartão Porto.',
          'Для Andante Sub23 обычно нужны ID, NIF, фотография и declaração de matrícula/документ учебного заведения.',
          'Персональная карта Andante обычно стоит 6 € при выпуске.',
          'Обычный Andante Municipal в Porto стоит 30 €/мес, Andante Metropolitano — 40 €/мес; студенческая льгота может снизить стоимость или сделать проезд бесплатным при выполнении условий программы.',
          'Cartão Jovem Municipal / Movijovem даёт молодёжные скидки, но не является самостоятельным проездным.',
          'Если вам меньше 23 лет и вы учитесь, проверяйте одновременно три вещи: CMP, Movijovem и Andante.',
          'Если вы только переехали, сначала стабилизируйте адрес, NIF и matrícula: без них льготы чаще всего не подтвердят.'
        ] },
        { kind: 'warning', text: 'Не покупайте туристическую Porto Card вместо Andante или Cartão Porto. Туристическая карта рассчитана на краткосрочных гостей и не доказывает резидентский статус.' }
      ]
    }
  ],
  costs: [
    { label: 'Cartão Porto.', amountEUR: 0, note: 'Муниципальная карта CMP для подходящих жителей/студентов/работников; проверяйте актуальные условия выпуска на cm-porto.pt.' },
    { label: 'Выпуск персональной карты Andante', amountEUR: 6, note: 'Ориентир для физической персональной карты Andante; сама Cartão Porto. её не заменяет.' },
    { label: 'Andante Municipal', amountEUR: 30, note: 'Обычный месячный проездной для одной муниципальной зоны; студентам Sub23 могут применяться отдельные льготы.' },
    { label: 'Andante Metropolitano', amountEUR: 40, note: 'Обычный месячный проездной для Área Metropolitana do Porto; не является частью Cartão Porto.' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — Cartão Porto.', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — serviços e benefícios municipais', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — passes, títulos e cartão personalizado', url: 'https://andante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Movijovem — Cartão Jovem', url: 'https://www.cartaojovem.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
