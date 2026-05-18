export default {
  editorialVoice: 'hackportugal',
  id: 'biblioteca-municipal-cartao',
  categoryId: 'daily_life',
  title: 'Cartão de Leitor: бесплатные муниципальные библиотеки',
  tldr: 'Муниципальные библиотеки в Португалии бесплатны: в Lisboa работает сеть BLX примерно из 15 библиотек, в Porto — Biblioteca Municipal Almeida Garrett и городские филиалы, в Coimbra — Biblioteca Municipal. Cartão de Leitor обычно оформляют бесплатно за 5–15 минут по паспорту/ВНЖ, NIF и comprovativo de morada. Домой дают книги, DVD, аудиокниги и детские издания; стандартный срок займа часто 21 день, с продлением, если нет брони.',
  tags: ['biblioteca', 'cartão', 'книги', 'blx'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-you-get',
      title: 'Что даёт Cartão de Leitor',
      content: [
        { kind: 'paragraph', text: 'Cartão de Leitor — читательский билет муниципальной библиотеки. Это один из самых недооценённых бесплатных сервисов для экспатов: доступ к книгам на португальском и других языках, детским залам, рабочим столам, Wi‑Fi, мероприятиям, клубам чтения и иногда к цифровым ресурсам.' },
        { kind: 'checklist', items: [
          'Бесплатное оформление в муниципальной библиотеке вашего города',
          'Выдача книг на дом — обычно до 21 дня, правила зависят от município',
          'DVD, CD, аудиокниги, комиксы и детские книги — если есть в фонде конкретной библиотеки',
          'Продление срока, если документ не забронирован другим читателем',
          'Бронирование книг через онлайн-каталог, где он подключён',
          'Рабочие места, розетки и Wi‑Fi — удобно, если дома шумно или нет офиса',
          'Детские часы, oficinas, выставки, языковые и культурные события',
          'Доступ к фондам всей сети: например, BLX в Lisboa объединяет городские библиотеки'
        ] }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Где искать библиотеку в Lisboa, Porto и Coimbra',
      content: [
        { kind: 'paragraph', text: 'В Португалии библиотеки управляются муниципалитетами, поэтому правила регистрации и срок выдачи немного отличаются. Начинайте с сайта Câmara Municipal вашего города или с поиска “biblioteca municipal + название города”.' },
        { kind: 'checklist', items: [
          'Lisboa: сеть BLX — Bibliotecas de Lisboa; около 15 муниципальных библиотек и тематические пространства по районам',
          'Porto: Biblioteca Municipal Almeida Garrett в Jardins do Palácio de Cristal — главный городской адрес, плюс муниципальные сервисы чтения',
          'Coimbra: Biblioteca Municipal de Coimbra и городские читальные пространства',
          'Cascais, Oeiras, Sintra, Almada, Braga, Aveiro, Faro тоже имеют бесплатные муниципальные библиотеки',
          'Если живёте не в Lisboa/Porto, ищите “Cartão de Leitor”, “inscrição de leitor” или “empréstimo domiciliário” на сайте município',
          'Не обязательно быть гражданином Португалии: обычно достаточно жить в городе и подтвердить адрес'
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для оформления',
      content: [
        { kind: 'paragraph', text: 'Оформление обычно занимает один визит. В крупных городах могут выдать физическую карту или создать запись в системе и привязать её к вашему documento de identificação.' },
        { kind: 'checklist', items: [
          'Паспорт, Cartão de Cidadão, ВНЖ или другой документ с фото',
          'NIF — часто спрашивают для регистрации в системе',
          'Comprovativo de morada: договор аренды, счёт за luz/água/internet, declaração da Junta de Freguesia, certificado de domicílio fiscal из Finanças',
          'Португальский номер телефона',
          'E-mail для уведомлений о сроках возврата и бронированиях',
          'Для детей: документ ребёнка и documento de identificação родителя/ответственного',
          'Если адрес в документе старый, возьмите отдельное подтверждение morada',
          'Если нет NIF, всё равно спросите на стойке: некоторые библиотеки регистрируют временно по паспорту, но полноценная запись чаще требует NIF'
        ] },
        { kind: 'warning', text: 'Правила не федеральные. Одна библиотека может принять contrato de arrendamento, другая попросит comprovativo de morada свежее 3 месяцев. Перед визитом проверьте раздел “Inscrição” или “Regulamento” на сайте вашей Câmara Municipal.' }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Как получить карту за один визит',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-library', title: '1. Выберите ближайшую библиотеку', content: [
            { kind: 'paragraph', text: 'Откройте сайт BLX, CM Porto, CM Coimbra или своего município. Проверьте horário: многие библиотеки закрыты по воскресеньям, а часть имеет короткий график по субботам.' }
          ] },
          { id: 'bring-documents', title: '2. Возьмите документы', content: [
            { kind: 'paragraph', text: 'Минимальный набор: ID с фото, NIF и comprovativo de morada. Если хотите оформить ребёнка, берите документы родителя и ребёнка.' }
          ] },
          { id: 'fill-form', title: '3. Заполните ficha de inscrição', content: [
            { kind: 'paragraph', text: 'На стойке скажите: “Quero fazer o Cartão de Leitor”. Сотрудник внесёт ваши данные, объяснит лимиты выдачи и сроки возврата.' }
          ] },
          { id: 'test-catalog', title: '4. Проверьте онлайн-каталог', content: [
            { kind: 'paragraph', text: 'Попросите показать, как искать книги, продлевать empréstimo и делать reserva. В сетях вроде BLX это экономит много времени.' }
          ] }
        ] }
      ]
    },
    {
      id: 'borrowing-rules',
      title: 'Сроки, лимиты и штрафы',
      content: [
        { kind: 'paragraph', text: 'Базовая логика в муниципальных библиотеках похожа: берёте документы на дом, возвращаете в срок, при необходимости продлеваете. Частый срок займа — 21 день, но лимиты по количеству книг/DVD и возможность продления устанавливает конкретная Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Проверяйте prazo de devolução в чеке, e-mail или личном кабинете',
          'Продлевайте до истечения срока, особенно если уезжаете из города',
          'Если книга забронирована другим читателем, продление могут не дать',
          'DVD и мультимедиа иногда выдаются на меньший срок, чем книги',
          'Справочные издания, редкие книги и свежая пресса обычно только для чтения на месте',
          'За просрочку чаще блокируют новые займы до возврата; денежные штрафы зависят от регламента município',
          'За потерю или порчу могут попросить заменить документ или оплатить стоимость',
          'При смене адреса или e-mail обновите данные, чтобы получать уведомления'
        ] },
        { kind: 'warning', text: 'Не путайте муниципальную библиотеку с университетской. Библиотеки Universidade de Lisboa, Universidade do Porto или Universidade de Coimbra могут иметь отдельные правила доступа и платные внешние карты для людей не из университета.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Лайфхаки для экспатов',
      content: [
        { kind: 'paragraph', text: 'Библиотека — хороший способ быстрее встроиться в район: там есть афиши местных событий, бесплатные занятия для детей, разговорные клубы и спокойное место для работы.' },
        { kind: 'checklist', items: [
          'Ищите livros em inglês, francês, espanhol и livros bilingues для детей',
          'Для изучения языка берите livros de leitura fácil и детские книги на português europeu',
          'Спросите у библиотекаря про clubes de leitura и atividades para famílias',
          'Используйте библиотеку как бесплатный коворкинг на 2–4 часа, но уточняйте правила звонков и еды',
          'В Lisboa проверяйте не только центральные библиотеки BLX, но и районные — там меньше очередь на популярные книги',
          'В Porto совмещайте визит в Biblioteca Municipal Almeida Garrett с прогулкой в Jardins do Palácio de Cristal',
          'Если переехали в другой município, оформите новую карту: старый Cartão de Leitor не всегда работает в другой сети',
          'Сохраняйте e-mail с датой возврата — это лучший способ не получить блокировку за просрочку'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Оформление Cartão de Leitor', amountEUR: 0, note: 'В муниципальных библиотеках обычно бесплатно' },
    { label: 'Пользование читальным залом и Wi‑Fi', amountEUR: 0, note: 'Бесплатно, если сервис доступен в конкретной библиотеке' },
    { label: 'Замена утерянной книги или DVD', amountEURMin: 5, amountEURMax: 40, note: 'Не фиксированный тариф: зависит от стоимости документа и регламента município' }
  ],
  sources: [
    { title: 'BLX — Bibliotecas de Lisboa, сеть муниципальных библиотек Lisboa', url: 'https://blx.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Biblioteca Municipal Almeida Garrett', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Coimbra — Biblioteca Municipal', url: 'https://www.cm-coimbra.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
