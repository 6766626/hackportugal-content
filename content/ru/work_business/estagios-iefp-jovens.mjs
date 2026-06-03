export default {
  editorialVoice: 'hackportugal',
  id: 'estagios-iefp-jovens',
  categoryId: 'work_business',
  title: 'Estágios IEFP: стажировки для молодых через биржу труда',
  tldr: 'Estágios IEFP — оплачиваемые стажировки через Centro de Emprego/IEFP для входа на португальский рынок труда.\n\nВ 2026 году стандартные молодёжные стажировки IEFP (Estágios INICIAR, +Talento) рассчитаны на возраст 18–35 лет; кандидату 30–35 лет особый статус не нужен. Деньги платит работодатель, IEFP компенсирует ему часть расходов. По правилам 2026 года gross bolsa — 913,12 €/мес для квалификации QNQ уровня 4 и 966,83 €/мес для уровня 5: фактическая сумма зависит от IAS 537,13 €, уровня квалификации и программы.',
  tags: ['iefp', 'стажировка', 'работа', 'jovens'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Estágio IEFP и кто платит',
      content: [
        { kind: 'paragraph', text: 'Estágio IEFP — не обычный трудовой договор, а программа профессиональной стажировки, которую утверждает IEFP. Стажёр работает у компании по плану стажировки, получает bolsa de estágio, subsídio de alimentação и страхование от несчастных случаев. Деньги ежемесячно перечисляет работодатель; IEFP затем возмещает работодателю часть расходов по правилам конкретной меры.' },
        { kind: 'paragraph', text: 'Для экспата главный плюс — легальный первый опыт в Португалии, строка в CV и шанс получить contrato de trabalho после стажировки. Главный минус — стажировка временная, обычно до 12 месяцев, и не гарантирует найм.' },
        { kind: 'warning', text: 'Не путайте: IEFP не «доплачивает вам сверху» напрямую. Сумма из вакансии (например, 913,12 €/мес) — это обычно gross bolsa, которую платит компания; компенсация IEFP идёт работодателю.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Кто может участвовать в 2026',
      content: [
        { kind: 'paragraph', text: 'Базовая целевая группа стандартных молодёжных стажировок IEFP (Estágios INICIAR, +Talento) — люди 18–35 лет, зарегистрированные в Centro de Emprego как desempregado или à procura do 1.º emprego. Кандидату 30–35 лет особый статус не нужен — это обычный молодой соискатель. Старше 35 лет тоже можно по INICIAR, если квалификация получена за последние 24 месяца; отдельные режимы (RSI, долгосрочная безработица, Inserção+) — для других уязвимых групп.' },
        { kind: 'checklist', items: [
          'Возраст 18–35 лет для стандартных молодёжных Estágios INICIAR / +Talento',
          'Кандидату 30–35 лет особый статус не требуется — это обычный молодой соискатель',
          'Старше 35 — проверяйте право по конкретной candidatura: квалификация за последние 24 месяца, RSI, инвалидность, долгосрочная безработица',
          'Нужна регистрация в IEFP как candidato a emprego',
          'Нужно законное пребывание и право работать в Португалии: ВНЖ, виза с правом работы или другой допустимый статус',
          'Нужен NIF; NISS почти всегда потребуется для выплат и Segurança Social',
          'Нужен португальский адрес: договор аренды, atestado de residência или другой proof of address',
          'Нельзя проходить IEFP-стажировку у работодателя, где вы уже фактически работаете по обычному contrato de trabalho',
          'Работодатель должен быть одобрен IEFP и подать candidatura по открытой программе'
        ] },
        { kind: 'warning', text: 'Если у вас туристический въезд или виза без права работы, IEFP-стажировка не решает миграционный статус. Сначала проверьте право работать и продлевать пребывание через AIMA.' }
      ]
    },
    {
      id: 'money',
      title: 'Сколько платят: bolsa зависит от уровня квалификации',
      content: [
        { kind: 'paragraph', text: 'В 2026 году базовый индекс IAS — 537,13 €. Bolsa в Estágios INICIAR / +Talento считается как множитель IAS и зависит от уровня квалификации по Quadro Nacional de Qualificações: 913,12 €/мес gross (уровень 4, 1,7 × IAS) и 966,83 €/мес gross (уровень 5, 1,8 × IAS). Поэтому сумма в объявлении может отличаться по категориям.' },
        { kind: 'checklist', items: [
          'Bolsa de estágio — gross-сумма до налогов и Segurança Social',
          'Subsídio de alimentação платится отдельно за рабочие дни (в 2026 ориентир — 6,15 €/день)',
          'Seguro de acidentes de trabalho обязан обеспечить работодатель',
          'IEFP компенсирует работодателю часть bolsa, питания и страховки по правилам программы',
          'Стажёр обычно делает descontos para Segurança Social; проверьте recibo de vencimento',
          'IRS может удерживаться, если доход и личная ситуация попадают под retenção na fonte',
          'Стажировка не равна SMN: минимальная зарплата 2026 — 920 €, но bolsa IEFP считается по своим правилам',
          'Если компания обещает «net» определённую сумму, попросите письменный расчёт gross/net до подписания'
        ] },
        { kind: 'warning', text: 'Не соглашайтесь на схему «официально estágio, неофициально полный рабочий день без выплат». Жалобы подаются в IEFP и ACT, но лучше не начинать с серой договорённости.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как податься через Centro de Emprego',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Зарегистрируйтесь в IEFP', content: [
            { kind: 'paragraph', text: 'Онлайн через iefponline.iefp.pt или лично в Centro de Emprego по адресу проживания. На практике личный визит полезен, если у вас иностранные документы, свежий ВНЖ или нет Chave Móvel Digital.' },
            { kind: 'checklist', items: [
              'Паспорт или cartão de residência',
              'NIF',
              'NISS, если уже есть',
              'Подтверждение адреса',
              'CV на португальском или английском',
              'Дипломы, сертификаты, histórico escolar',
              'Документы о признании диплома, если профессия регулируемая',
              'IBAN португальского или SEPA-счёта'
            ] }
          ] },
          { id: 'profile', title: '2. Обновите perfil profissional', content: [
            { kind: 'paragraph', text: 'В кабинете IEFP укажите образование, языки, опыт, желаемые funções и concelhos, где готовы работать. Чем точнее профиль, тем больше релевантных encaminhamentos от técnico do IEFP.' }
          ] },
          { id: 'search', title: '3. Ищите вакансии с пометкой Estágio IEFP', content: [
            { kind: 'paragraph', text: 'Смотрите IEFP Online, LinkedIn, Net-Empregos и сайты компаний. В отклике сразу пишите, что вы зарегистрированы в IEFP и подходите под Estágio IEFP; для работодателя это важно, потому что без вашей регистрации candidatura не пройдёт.' }
          ] },
          { id: 'employer-submits', title: '4. Работодатель подаёт candidatura', content: [
            { kind: 'paragraph', text: 'Финальную заявку в IEFP подаёт компания: план стажировки, tutor, duração, bolsa, место работы. IEFP проверяет право работодателя и кандидата. Начинать стажировку до formal approval рискованно: расходы могут не признать.' }
          ] }
        ] }
      ]
    },
    {
      id: 'program-types',
      title: 'Какие программы встречаются',
      content: [
        { kind: 'paragraph', text: 'Названия мер IEFP меняются по годам и avisos de abertura. В 2026 году ориентируйтесь не на старое название из блога, а на активную страницу IEFP и aviso конкретной candidatura.' },
        { kind: 'checklist', items: [
          'Estágios Profissionais / молодёжные стажировки — типовой путь для 18–35 после учёбы или при первом опыте',
          'Estágios INICIAR — формат для начала профессиональной карьеры; условия зависят от открытого aviso IEFP',
          'Estágios IPN или стажировки через инкубаторы/партнёров — часто оформляются через компанию/организацию, но правила финансирования всё равно надо сверять с IEFP',
          'Inserção+ — меры интеграции для людей в уязвимом положении; для 30+ важно наличие статуса вроде RSI или длительной безработицы',
          'Стажировки для pessoas com deficiência e incapacidade — отдельные правила и повышенная поддержка работодателя',
          'После estágio работодатель может получить стимул за contratação sem termo или contrato a termo, если открыт соответствующий apoio'
        ] },
        { kind: 'warning', text: 'Если рекрутер говорит «это IEFP, но регистрироваться не надо», попросите номер меры и aviso. Для настоящей IEFP-стажировки регистрация кандидата и одобрение IEFP — ключевые элементы.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Практика для экспата: как повысить шанс',
      content: [
        { kind: 'checklist', items: [
          'Сделайте CV в европейском, но коротком формате: 1–2 страницы, без длинной биографии',
          'Добавьте уровень португальского: A2/B1 часто решает больше, чем идеальный английский',
          'Получите NISS заранее, если уже имеете право: компании не любят задержки с оформлением',
          'Спросите у IEFP técnico, под какую меру вы проходите: 18–35, RSI, долгосрочно безработный, primeiro emprego',
          'На собеседовании уточните gross bolsa, alimentação, horário, tutor и вероятность найма после estágio',
          'Не скрывайте миграционный статус: работодателю нужно понимать, можно ли законно оформить стажировку',
          'Если диплом иностранный, подготовьте перевод или признание через DGES, если профессия требует',
          'Сохраняйте все e-mails, plano de estágio и recibos de vencimento'
        ] },
        { kind: 'paragraph', text: 'Хорошая стратегия: сначала зарегистрироваться в IEFP, затем писать компаниям напрямую с фразой «estou inscrito no IEFP e elegível para estágio profissional». Для малого бизнеса это снимает часть бюрократического страха.' }
      ]
    }
  ],
  costs: [
    { label: 'Регистрация кандидата в IEFP', amountEUR: 0, note: 'Бесплатно онлайн или в Centro de Emprego' },
    { label: 'Bolsa, квалификация QNQ уровня 4 (1,7 × IAS)', amountEUR: 913.12, note: 'IAS 2026 = 537,13 €; gross в месяц для Estágios INICIAR / +Talento' },
    { label: 'Bolsa, квалификация QNQ уровня 5 (1,8 × IAS)', amountEUR: 966.83, note: 'Gross в месяц; фактическая сумма зависит от программы и квалификации' }
  ],
  sources: [
    { title: 'IEFP — меры de estágios и apoios ao emprego', url: 'https://www.iefp.pt/estagios', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP Online — inscrição, ofertas de emprego e candidaturas', url: 'https://iefponline.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — inscrição no Centro de Emprego', url: 'https://www.gov.pt/pt/servicos/inscrever-se-no-centro-de-emprego', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — IEFP e políticas públicas de emprego', url: 'https://www.gov.pt/pt/entidades/instituto-do-emprego-e-formacao-profissional', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
