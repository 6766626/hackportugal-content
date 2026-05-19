export default {
  editorialVoice: 'hackportugal',
  id: 'cinemas-events',
  categoryId: 'daily_life',
  title: 'Кино, концерты, мероприятия — где покупать билеты и какие скидки',
  tldr: 'Кинотеатры: 6-10 € стандарт; у многих сетей бывают weekday/Tuesday promos, но условия проверяйте на сайте конкретного кинотеатра — скидки не всегда действуют на IMAX/3D/премьеры. Концерты и спектакли: Ticketline, Blueticket, BOL — главные агрегаторы. Театр в Лиссабоне 15-40 €, концерт 20-80 €, футбол Benfica / Sporting / Porto 15-60 €. Студенческие, Cartão Jovem и senior discounts встречаются часто, но зависят от организатора и требуют документ.',
  tags: ['кино', 'концерты', 'мероприятия', 'билеты'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cinemas',
      title: '🎬 Кинотеатры',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Основные сети', content: [
            { kind: 'checklist', items: [
              'NOS Cinemas — крупнейшая, 35+ в стране. Обычный билет 7.50-10 €, IMAX 12-15 €, 3D +2 €',
              'Cinemas UCI — El Corte Inglés Lisboa, UBBO Amadora, ArrábidaShopping (Vila Nova de Gaia); проверяйте актуальный список на uci.pt. Премиум-экраны, цены сравнимы',
              'Medeia Filmes — авторское кино, Cinema Ideal, Nimas (Lisbon), Trindade (Porto). Независимое кино, мировое кино',
              'FNAC — продаёт билеты на мероприятия и иногда проводит бесплатные/промо-события в магазинах, но это не сеть кинотеатров',
              'Cinema São Jorge (Avenida) — историческая площадка для фестивалей'
            ]}
          ]},
          { id: 'c2', title: 'Скидки', content: [
            { kind: 'checklist', items: [
              '⭐ Вторник/weekday deals — часто билеты около 5-7 €, но условия и исключения зависят от сети и сеанса (могут не действовать на IMAX/3D/премьеры)',
              '🎓 Студенты (с Cartão Jovem или студенческим билетом): 4.50-5.50 € в будни',
              '👵 65+ пенсионеры: 4.50-5.50 €',
              '🎬 Cartão NOS обычно даёт промо типа 2 билета по цене 1 для клиентов NOS; подписки и условия меняются — проверяйте NOS Cinemas. UCI имеет UCI Unlimited (проверяйте актуальную цену)',
              '🍿 Комбо-меню (попкорн+напиток) — +6-8 €',
              '🎫 Cartão Continente — накопление баллов за билеты в кино (при оплате связанной картой)'
            ]}
          ]},
          { id: 'c3', title: 'Оригинальные версии (VO)', content: [
            { kind: 'checklist', items: [
              'В Португалии почти все фильмы в оригинале с португальскими субтитрами (кроме детских анимаций — дубляж)',
              'Для англоязычных — идеально: английские фильмы на английском',
              'Для русскоговорящих: некоторые фильмы из РФ показывают на кинофестивалях',
              'Проверка: в расписании «VO» = оригинальная версия, «VP» = дубляж на португальский',
              'Ориентируйтесь не на время, а на маркировку VO/VOST/VP в расписании'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'concerts-theater',
      title: '🎭 Концерты, театр, шоу',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Где покупать билеты', content: [
            { kind: 'checklist', items: [
              'Ticketline (ticketline.pt) — крупнейший продавец билетов',
              'Blueticket — много спортивных мероприятий / фестивалей',
              'BOL — Bilheteira Online — классика, опера',
              'Fnac.pt — продавец билетов, в том числе онлайн',
              'Касса площадки — прямо в зале, часто дешевле всего (без сервисного сбора)',
              'MEO Blueticket — билетная платформа для концертов, спорта и фестивалей; иногда бывают промо от MEO'
            ]}
          ]},
          { id: 't2', title: 'Основные площадки', content: [
            { kind: 'checklist', items: [
              'MEO Arena (бывш. Altice Arena, Lisboa, Parque das Nações) — главная концертная площадка, Coldplay, Taylor Swift, фестивали',
              'Coliseu dos Recreios (Lisboa) — исторический зал, 4000 мест',
              'Super Bock Arena (Porto) — 8000 мест',
              'Teatro Nacional D. Maria II (Lisboa) — классический театр. Внимание: основное здание на Rossio закрыто на реконструкцию, спектакли проходят в рамках programação em trânsito на других площадках — проверяйте конкретный адрес в билете',
              'Teatro Nacional de São Carlos (Lisboa) — опера',
              'Casa da Música (Porto) — концерты от классики до джаза'
            ]}
          ]},
          { id: 't3', title: 'Типичные цены 2026', content: [
            { kind: 'checklist', items: [
              '🎭 Teatro Nacional / municipal theatre: примерно 10-30 €, цены зависят от спектакля и места',
              '🎼 Классическая музыка / опера: 20-70 €',
              '🎤 Концерт среднего уровня (португальские артисты): 20-40 €',
              '🎸 Международные стадионные туры (Coldplay и т. п.): 60-200+ €',
              '🎷 Джаз-клубы (Hot Clube de Portugal): 10-20 €',
              '🎪 Цирк / семейные шоу: 15-30 €',
              '🎁 Скидки: Cartão Jovem, пенсионеры, семейные пакеты (3+) — 20-40%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sports',
      title: '⚽ Футбол и спорт',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Футбольные матчи', content: [
            { kind: 'checklist', items: [
              'SL Benfica (Estádio da Luz, Lisboa): 15-60 € будний тур, 40-150 € Champions League',
              'Sporting CP (Estádio José Alvalade, Lisboa): 15-50 €',
              'FC Porto (Estádio do Dragão): 15-55 €',
              'Мелкие клубы (Boavista, Vitória SC, Gil Vicente): 10-25 €',
              'Национальная сборная (Estádio Nacional / Luz): 25-100 €'
            ]}
          ]},
          { id: 's2', title: 'Другое', content: [
            { kind: 'checklist', items: [
              'Футзал — популярен в Португалии, матчи 3-10 €',
              'Падел — индивидуальные занятия (см. отдельный гайд gyms-fitness)',
              'MMA / бокс — редко, 30-100 €',
              'Автоспорт — автодром Estoril, MotoGP Portimão',
              'Теннис — Oeiras Open / ATP Challenger events (бывший Millennium Estoril Open ATP 250 выпал из календаря после 2024); статус и даты меняются — проверяйте ATP calendar и Federação Portuguesa de Ténis'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'festivals',
      title: '🎉 Крупные фестивали',
      content: [
        { kind: 'checklist', items: [
          'NOS Alive (Algés/Lisboa, июль) — рок / инди, обычно 3 дня; day ticket/pass prices меняются ежегодно, проверяйте официальный сайт',
          'Rock in Rio Lisboa (июнь, раз в 2 года) — поп / рок, 100+ € день',
          'Primavera Sound Porto (июнь) — инди, 150+ €',
          'MEO Sudoeste (Zambujeira, август) — электронная музыка, 130-180 €',
          'EDP Cool Jazz (Cascais, июль) — джаз, 40-100 € вечер',
          'Festas de São João do Porto (23-24 июня) — традиционная культура, бесплатные городские мероприятия',
          'Festas de Lisboa / Lisboa na Rua (июнь) — городские бесплатные программы EGEAC, см. agenda',
          'Festa de Santo António (Lisbon, 12-13 июня) — большой городской фестиваль, бесплатно',
          'São João do Porto (23-24 июня) — фестиваль Porto'
        ]}
      ]
    },
    {
      id: 'outdoor-free',
      title: '🆓 Бесплатные события под открытым небом и городские мероприятия',
      content: [
        { kind: 'checklist', items: [
          'Cinema ao Ar Livre летом — бывают бесплатные муниципальные open-air screenings и платные коммерческие проекты; проверяйте Lisboa na Rua/EGEAC, Agenda Cultural de Lisboa, Porto municipal agenda и конкретный организатор',
          'Концерты на площадях: летом часто проходят бесплатные концерты в рамках municipal programmes (Festas de Lisboa/Lisboa na Rua), но расписание меняется ежегодно',
          'Noite Branca — особенно известна в Braga; в других городах похожие ночные культурные программы бывают нерегулярно, проверяйте agenda municipal',
          'Festival Elétrico — paid electronic music festival в районе Porto; цены и локация меняются, проверяйте официальный сайт',
          'Community events — ищите на Meetup, Eventbrite и в local cultural agendas',
          'Viva Brasil (Lisboa, июль) — бразильский фестиваль, бесплатно',
          'Книжные ярмарки: Feira do Livro de Lisboa (май-июнь в Parque Eduardo VII), Porto (сентябрь) — бесплатный вход'
        ]}
      ]
    },
    {
      id: 'discovery',
      title: '🔍 Как находить события',
      content: [
        { kind: 'checklist', items: [
          'Timeout Lisboa / Porto — еженедельная подборка',
          'Agenda Cultural de Lisboa — мэрия, бесплатная печатная версия / онлайн',
          'Meetup.com — языковой обмен, хайкинг, технологии',
          'Eventbrite PT — воркшопы, семинары, вечеринки',
          'Facebook events — лучше всего работает для сообществ экспатов',
          '@timeoutportugal Instagram',
          'Ticketline app — еженедельная подборка',
          'Bandas Portuguesas (Spotify / Apple Music playlists) — местная музыка',
          'Для free events часто нужна предварительная inscrição/reservation или levantamento de bilhete; места ограничены'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Кино, обычный билет', amountEURMin: 7.50, amountEURMax: 10 },
    { label: 'Кино во вторник (скидка)', amountEURMin: 5, amountEURMax: 7 },
    { label: 'Футбол, будний матч', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Teatro Nacional', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Международный концерт (арена)', amountEURMin: 60, amountEURMax: 200 },
    { label: 'Festival pass / multi-day', amountEURMin: 130, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Ticketline', url: 'https://ticketline.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Blueticket (MEO)', url: 'https://www.blueticket.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Agenda Cultural de Lisboa', url: 'https://www.agendalx.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Eventos', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}