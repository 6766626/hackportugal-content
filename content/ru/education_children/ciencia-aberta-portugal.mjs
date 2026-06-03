export default {
  editorialVoice: 'hackportugal',
  id: 'ciencia-aberta-portugal',
  categoryId: 'education_children',
  title: 'Бесплатные научные события: Ciência Aberta и Noite dos Investigadores в Португалии',
  tldr: 'В Португалии много бесплатных научных событий для семей и взрослых: дни открытых лабораторий, мероприятия Ciência Viva, Pavilhão do Conhecimento в Лиссабоне, центры Ciência Viva по стране и Noite Europeia dos Investigadores.\n\nВ 2026 году главная ночь исследователей приходится на пятницу 25 сентября. Вход часто бесплатный, но почти всегда нужна онлайн-регистрация: места на лаборатории, телескопы и детские мастер-классы разбирают за часы.',
  tags: ['ciência', 'дети', 'lisboa', 'музеи'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за события',
      content: [
        { kind: 'paragraph', text: 'Ciência Aberta — не один фестиваль, а формат: университеты, исследовательские центры, музеи науки и лаборатории открывают двери для публики. Обычно это экскурсии по лабораториям, демонстрации, опыты для детей, встречи с учёными, наблюдения за небом, робототехника, биология, океан, климат, здоровье и AI.' },
        { kind: 'paragraph', text: 'Noite Europeia dos Investigadores — общеевропейская «ночь исследователей».\n\nВ Португалии она проходит ежегодно в последнюю пятницу сентября. В 2026 году это 25.09.2026. Формат семейный: стенды, мини-лекции, эксперименты, игры, научные шоу и разговоры с исследователями без академического пафоса.' },
        { kind: 'paragraph', text: 'Ciência Viva — главный ориентир для экспата: у сети есть портал с афишей, Pavilhão do Conhecimento в Lisboa и центры Ciência Viva по стране, включая материковую Португалию и острова. Это удобный способ найти события не только в Lisboa и Porto, но и в Aveiro, Coimbra, Algarve, Alentejo, Açores и Madeira.' }
      ]
    },
    {
      id: 'where-to-look',
      title: 'Где искать афишу 🔎',
      content: [
        { kind: 'checklist', items: [
          'cienciaviva.pt — главный календарь Ciência Viva, центры, сезонные программы и семейные активности',
          'pavconhecimento.pt — Pavilhão do Conhecimento в Parque das Nações, Lisboa; проверяйте agenda и oficinas',
          'fct.pt — новости FCT о Ciência Aberta, European Researchers’ Night и программах научной коммуникации',
          'сайты Universidade de Lisboa, NOVA, Universidade do Porto, Universidade de Coimbra, Universidade de Aveiro, Universidade do Minho',
          'страницы исследовательских центров: ITQB NOVA, i3S, Instituto Gulbenkian de Ciência, Técnico Lisboa, INESC, CIIMAR, CESAM',
          'Câmara Municipal и Junta de Freguesia — иногда публикуют локальные детские научные выходные',
          'Eventbrite и Blueticket — часть бесплатных регистраций уходит туда, даже если событие организует университет',
          'Instagram/Facebook центров Ciência Viva — там быстрее всего появляются посты про свободные места и отмены'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на английский. Большая часть афиш публикуется на португальском. Ищите слова: “ciência aberta”, “dia aberto”, “laboratório aberto”, “oficina”, “famílias”, “crianças”, “inscrição gratuita”, “Noite dos Investigadores”.' }
      ]
    },
    {
      id: 'best-places',
      title: 'Куда идти с детьми и без детей',
      content: [
        { kind: 'substeps', items: [
          { id: 'lisboa', title: 'Lisboa: Pavilhão do Conhecimento', content: [
            { kind: 'paragraph', text: 'Самая понятная точка входа для семьи в Lisboa. Постоянная экспозиция музея платная, но в дни Ciência Viva, Noite dos Investigadores и отдельных акций бывают бесплатные активности по регистрации. Локация удобная: Parque das Nações, рядом метро Oriente, поезд, автобусы и торговый центр Vasco da Gama.' }
          ] },
          { id: 'countrywide', title: 'Centros Ciência Viva по стране', content: [
            { kind: 'paragraph', text: 'Сеть Centros Ciência Viva — это 20+ научных центров и партнёрских площадок. Темы отличаются по региону: океан и рыболовство на побережье, геология и динозавры в центре страны, астрономия, лес, энергия, робототехника, биология, вулканология на островах.' }
          ] },
          { id: 'universities', title: 'Университеты и лаборатории', content: [
            { kind: 'paragraph', text: 'Для взрослых и подростков часто интереснее не музей, а “dia aberto” в реальной лаборатории: микроскопы, чистые комнаты, морская биология, медицинские исследования, инженерия, supercomputing, AI. Такие визиты почти всегда требуют регистрации, потому что группы маленькие: 10–25 человек.' }
          ] },
          { id: 'aveiro-porto-coimbra', title: 'Aveiro, Porto, Coimbra и север', content: [
            { kind: 'paragraph', text: 'В Aveiro следите за Universidade de Aveiro, Fábrica Centro Ciência Viva de Aveiro и городскими культурными площадками. В Porto — i3S, Universidade do Porto, CIIMAR и Casa da Música, если событие связано с наукой о звуке, музыке и технологиях. В Coimbra — университетские музеи и исследовательские центры.' }
          ] }
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Как записаться и не пролететь с местами',
      content: [
        { kind: 'paragraph', text: 'Бесплатный вход не означает свободный вход. Научные мастер-классы ограничены по возрасту, языку и безопасности. На популярные слоты в Lisboa, Porto, Aveiro и Coimbra места могут закончиться в день публикации формы.' },
        { kind: 'checklist', items: [
          'Подпишитесь на рассылку Ciência Viva и выбранного центра Ciência Viva в вашем округе',
          'За 2–3 недели до 25.09.2026 начните ежедневно проверять афишу Noite dos Investigadores',
          'Смотрите возраст: “M/6”, “M/8”, “M/12” означает минимальный возраст участника',
          'Проверяйте язык: “PT” почти всегда португальский; английские сессии помечают отдельно',
          'Регистрируйте каждого участника, включая ребёнка, если форма требует индивидуальной регистрации',
          'Сохраняйте email-подтверждение и QR-код; иногда его проверяют на входе',
          'Приходите за 10–15 минут: если вас нет, место могут отдать очереди',
          'Если не сможете прийти — отмените регистрацию; это нормальная практика и помогает другим семьям'
        ] },
        { kind: 'warning', text: 'Для лабораторных визитов могут требовать закрытую обувь, запретить еду, коляски, фото или вход детям младше указанного возраста. Это не бюрократия, а правила безопасности лаборатории.' }
      ]
    },
    {
      id: 'language-and-family',
      title: 'Язык, возраст и практические лайфхаки',
      content: [
        { kind: 'paragraph', text: 'Большинство событий рассчитано на португалоязычную публику, но формат визуальный: опыты, стенды, игры и демонстрации часто понятны детям даже с базовым PT. Для подростков и взрослых английский чаще встречается в университетских событиях, особенно в международных лабораториях.' },
        { kind: 'checklist', items: [
          'Для детей 4–7 лет выбирайте “oficina para famílias”, “mãos na massa”, “experiências”',
          'Для 8–12 лет хорошо заходят робототехника, химические опыты, астрономия, динозавры, океан',
          'Для 13+ ищите “laboratório aberto”, “visita guiada”, “investigadores”, “engenharia”, “IA”',
          'Берите воду и перекус: бесплатные события могут длиться 2–4 часа, кафе рядом есть не всегда',
          'Проверяйте транспорт заранее: вечерние события после 22:00 сложнее с автобусами вне Lisboa/Porto',
          'Если ребёнок учится в португальской школе, такие события помогают с языком и словарём по Estudo do Meio / Ciências Naturais',
          'Спросите в школе или ATL: иногда классы получают групповые приглашения раньше публичной регистрации'
        ] },
        { kind: 'paragraph', text: 'Хорошая стратегия для новой семьи в Португалии: начать с Pavilhão do Conhecimento или ближайшего Centro Ciência Viva, затем раз в месяц проверять “agenda” университета в вашем городе. Это дешёвый способ влиться в местную среду без идеального португальского.' }
      ]
    },
    {
      id: 'calendar-2026',
      title: 'Календарь 2026: когда особенно следить',
      content: [
        { kind: 'checklist', items: [
          'Январь–март: дни открытых дверей университетов и школьные научные недели',
          'Апрель–май: весенние “dias abertos”, активности вокруг школ, библиотек и муниципалитетов',
          'Июнь–сентябрь: летние программы Ciência Viva, наблюдения природы, астрономия, океан, полевые экскурсии',
          '25 сентября 2026: Noite Europeia dos Investigadores, главная дата года',
          'Октябрь–ноябрь: Semana da Ciência e Tecnologia и события вокруг Dia Nacional da Cultura Científica',
          'Декабрь: семейные научные каникулы в музеях и центрах Ciência Viva'
        ] },
        { kind: 'warning', text: 'Даты локальных событий меняются каждый год. Проверяйте первоисточник за 1–2 недели до поездки, особенно если едете из другого города или с детьми.' }
      ]
    }
  ],
  costs: [
    { label: 'Большинство событий Ciência Aberta / Noite dos Investigadores', amountEUR: 0, note: 'Бесплатно, но часто нужна предварительная регистрация' },
    { label: 'Обычный вход в музей вне спецсобытия', amountEURMin: 5, amountEURMax: 15, note: 'Зависит от центра Ciência Viva, возраста и семейного билета; проверяйте тариф конкретной площадки' },
    { label: 'Городской транспорт', amountEURMin: 1.8, amountEURMax: 3, note: 'Типичный разовый проезд в Lisboa/Porto; выгоднее Navegante/Andante, если уже пользуетесь' }
  ],
  sources: [
    { title: 'Ciência Viva — официальный портал сети и афиша научных событий', url: 'https://www.cienciaviva.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'FCT — Fundação para a Ciência e a Tecnologia, Ciência Aberta и научная коммуникация', url: 'https://www.fct.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pavilhão do Conhecimento — agenda и семейные активности в Lisboa', url: 'https://www.pavconhecimento.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Marie Skłodowska-Curie Actions — European Researchers’ Night 2026/2027', url: 'https://marie-sklodowska-curie-actions.ec.europa.eu/actions/msca-and-citizens/join-a-celebration-of-science', kind: 'official', language: 'en', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
