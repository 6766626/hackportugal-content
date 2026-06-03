export default {
  editorialVoice: 'hackportugal',
  id: 'barcos-cacilhas-trafaria',
  categoryId: 'public_transport',
  title: 'Паромы Лиссабона: Cacilhas, Trafaria, Seixal, Montijo, Barreiro',
  tldr: 'Паромы Transtejo & Soflusa — быстрый способ пересечь Tejo без моста и пробок. Основные линии: Cais do Sodré–Cacilhas, Cais do Sodré–Seixal, Cais do Sodré–Montijo, Belém–Porto Brandão–Trafaria и Terreiro do Paço–Barreiro. В 2026 разовые билеты обычно стоят около 1,50–3,25 €, zapping иногда чуть дешевле, passe Navegante Metropolitano за 40 €/мес покрывает все эти линии. Лучший выбор для Almada/Cacilhas и Barreiro; для Pragal/Setúbal часто быстрее Fertagus.',
  tags: ['barcos', 'navegante', 'cacilhas', 'trafaria'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: 'Какие линии есть и куда они реально везут',
      content: [
        { kind: 'paragraph', text: 'В Лиссабоне речные линии через Tejo обслуживает Transtejo & Soflusa. Для экспата это не туристический аттракцион, а нормальный городской транспорт: валидатор, расписание, Navegante, пересадки на метро, поезд и автобусы.' },
        { kind: 'checklist', items: [
          'Cais do Sodré ⇄ Cacilhas — главная линия в Almada; удобно к Cristo Rei, Cacilhas, автобусам Carris Metropolitana и Metro Sul do Tejo.',
          'Belém ⇄ Porto Brandão ⇄ Trafaria — западная линия; полезна для Caparica/Trafaria, но расписание реже, чем у Cacilhas.',
          'Cais do Sodré ⇄ Seixal — прямая связь центра Лиссабона с Seixal; часто быстрее автобуса через мост.',
          'Cais do Sodré ⇄ Montijo — удобна, если живёте в Montijo и работаете около Cais do Sodré, Chiado, Baixa.',
          'Terreiro do Paço ⇄ Barreiro — линия Soflusa; хороший вариант для Barreiro и пересадки на поезда CP южного берега.',
          'Cais do Sodré — пересадка на зелёную ветку Metro, поезд Linha de Cascais, Carris, трамваи и электрички.',
          'Terreiro do Paço — пересадка на синюю ветку Metro и автобусы в Baixa/Alfama.',
          'Belém — пересадка на поезд Linha de Cascais, трамвай 15E и автобусы, но до терминала нужно закладывать пешее время.'
        ] }
      ]
    },
    {
      id: 'fares-navegante',
      title: 'Билеты, Navegante и zapping в 2026',
      content: [
        { kind: 'paragraph', text: 'Все эти линии входят в систему Navegante. Если у вас месячный passe Navegante Metropolitano за 40 €, отдельный билет на паром не нужен: просто валидируете карту на турникете. Navegante Municipal за 30 € работает только в пределах выбранного município и обычно не подходит для ежедневного пересечения Tejo между Лиссабоном и южным берегом.' },
        { kind: 'checklist', items: [
          'Passe Navegante Metropolitano: 40 €/мес — покрывает Лиссабонскую агломерацию (AML), включая паромы Transtejo/Soflusa, Metro, Carris, CP Urbanos, Fertagus в зоне AML и Carris Metropolitana.',
          'Passe Navegante Municipal: 30 €/мес — для поездок внутри одного município; перед покупкой проверьте, покрывает ли ваш маршрут.',
          'Zapping на cartão Navegante — удобно для редких поездок; на некоторых линиях списание дешевле разового билета.',
          'Разовый билет покупают в автомате или кассе терминала; он действует на конкретную речную линию, а не как полноценная пересадка на метро.',
          'Для Cais do Sodré ⇄ Cacilhas ориентир: разовый билет — около 2,00 €, zapping — около 1,60 €.',
          'Для Belém ⇄ Porto Brandão/Trafaria ориентир — около 1,50 €.',
          'Для Cais do Sodré ⇄ Seixal ориентир — около 2,85 €.',
          'Для Terreiro do Paço ⇄ Barreiro ориентир — около 2,95 €.',
          'Для Cais do Sodré ⇄ Montijo ориентир — около 3,25 €.',
          'Детские, школьные, sub23 и senior-тарифы зависят от статуса и оформления профиля Navegante; без профиля валидатор спишет обычный тариф.'
        ] },
        { kind: 'warning', text: 'Не путайте passe и zapping. Если на карте есть месячный Navegante Metropolitano, поездка покрыта. Если месячного passe нет, на карте должен быть положительный zapping-баланс или отдельный билет. Контролёры на паромах встречаются регулярно.' }
      ]
    },
    {
      id: 'when-to-use-boat',
      title: 'Когда паром лучше метро, поезда или автобуса',
      content: [
        { kind: 'paragraph', text: 'Через Tejo нет линии Metro. Альтернативы — поезд Fertagus по мосту 25 de Abril, автобусы через мосты и паромы. Выбор зависит не от карты, а от вашей конечной точки на южном берегу.' },
        { kind: 'checklist', items: [
          'Cacilhas ⇄ центр Лиссабона: почти всегда паром. Переход Cais do Sodré–Cacilhas занимает примерно 10 минут, плюс короткая пересадка на Metro/Carris.',
          'Almada velha, Cristo Rei, Cova da Piedade: часто паром до Cacilhas + автобус/Metro Sul do Tejo.',
          'Pragal, Corroios, Fogueteiro, Coina, Setúbal: часто быстрее Fertagus, потому что поезд идёт напрямую к Entrecampos, Sete Rios, Campolide и Roma-Areeiro.',
          'Seixal ⇄ Cais do Sodré/Chiado/Baixa: паром обычно конкурентен автобусам, особенно в час пик, когда мосты стоят.',
          'Barreiro ⇄ Baixa/Alfama: Soflusa до Terreiro do Paço удобнее, чем автобус через мост, если ваш пункт назначения в центре.',
          'Montijo ⇄ Cais do Sodré: паром удобен для ежедневных поездок в центр, но вечером и в выходные проверяйте интервалы заранее.',
          'Trafaria/Caparica: линия из Belém полезна, если вы уже на западной стороне Лиссабона; из Baixa часто быстрее ехать через Cacilhas или автобусом — зависит от расписания.',
          'Аэропорт: обычно не паром. Смотрите Metro/автобус/такси до Cais do Sodré или Terreiro do Paço, затем паром.'
        ] }
      ]
    },
    {
      id: 'schedules',
      title: 'Расписания: что проверить перед выходом',
      content: [
        { kind: 'paragraph', text: 'Расписание зависит от линии, дня недели, сезона и ремонта флота. У Cacilhas интервалы самые плотные; у Trafaria, Montijo и Seixal рейсы реже, особенно поздно вечером, в выходные и праздники.' },
        { kind: 'checklist', items: [
          'Проверяйте ttsl.pt в день поездки: там публикуются horários, suppressões и avisos.',
          'Закладывайте 5–10 минут на покупку/пополнение карты и проход турникетов.',
          'На Cacilhas в часы пик поток большой, но рейсы частые; очередь обычно движется быстро.',
          'На Trafaria и Porto Brandão не приезжайте “вслепую”: пропуск одного рейса может стоить 30–60 минут.',
          'Последние рейсы могут быть раньше, чем ожидает человек из города с ночным метро; после полуночи часто остаются автобусы, такси или TVDE.',
          'При тумане, сильном ветре, забастовке или технических проблемах рейсы могут отменять без долгого предварительного уведомления.',
          'В дни матчей, фестивалей и праздников у Cais do Sodré и Terreiro do Paço возможны очереди на вход.',
          'Google Maps полезен, но официальное расписание TTSL важнее, если есть расхождение.'
        ] },
        { kind: 'warning', text: 'Если у вас самолёт, медицинская запись или appointment в AIMA/Finanças, не планируйте маршрут с последним возможным паромом. Оставьте минимум один запасной рейс или альтернативу через мост.' }
      ]
    },
    {
      id: 'practical',
      title: 'Практика на терминале: карты, велосипеды, багаж',
      content: [
        { kind: 'paragraph', text: 'Терминалы работают как метро: вход через турникеты, валидатор считывает cartão Navegante. На крупных терминалах есть автоматы, кассы и иногда staff у ворот. В маленьких терминалах лучше иметь пополненную карту заранее.' },
        { kind: 'checklist', items: [
          'Носите физический cartão Navegante, если регулярно ездите. Банковская карта не всегда заменяет транспортную карту на этих линиях.',
          'Пополняйте zapping заранее в автоматах Metro, CP, Carris Metropolitana, PayShop или на поддерживаемых каналах Navegante.',
          'После валидации не выбрасывайте чек/билет до конца поездки.',
          'С велосипедом обычно можно пройти, если есть место и нет ограничения экипажа; в часы пик лучше избегать перегруженных рейсов.',
          'Самокаты и складные велосипеды проще провезти, если они сложены и не мешают проходу.',
          'С детской коляской проблем обычно нет, но на посадке держитесь правее и следуйте указаниям staff.',
          'С собакой уточняйте правила перевозки: поводок, намордник или переноска могут потребоваться в зависимости от размера животного.',
          'На борту нет полноценной камеры хранения; чемоданы держите рядом, проходы не блокируйте.',
          'На открытой палубе может быть ветрено даже в тёплый день; зимой утренний переход через Tejo ощущается холоднее, чем город.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Passe Navegante Metropolitano', amountEUR: 40, note: 'Месячный проездной по AML; покрывает Transtejo/Soflusa и большинство городского транспорта.' },
    { label: 'Passe Navegante Municipal', amountEUR: 30, note: 'Месячный проездной внутри одного município; для пересечения Tejo обычно недостаточен.' },
    { label: 'Разовый билет Cais do Sodré ⇄ Cacilhas', amountEUR: 2.0, note: 'Ориентир тарифа 2026; zapping на этой линии около 1,60 €.' },
    { label: 'Разовый билет Belém ⇄ Porto Brandão/Trafaria', amountEUR: 1.5, note: 'Ориентир тарифа 2026; проверяйте актуальную tabela tarifária TTSL.' },
    { label: 'Разовый билет Cais do Sodré ⇄ Seixal', amountEUR: 2.85, note: 'Ориентир тарифа 2026; проверяйте актуальную tabela tarifária TTSL.' },
    { label: 'Разовый билет Terreiro do Paço ⇄ Barreiro', amountEUR: 2.95, note: 'Ориентир тарифа 2026; проверяйте актуальную tabela tarifária TTSL.' },
    { label: 'Разовый билет Cais do Sodré ⇄ Montijo', amountEUR: 3.25, note: 'Ориентир тарифа 2026; проверяйте актуальную tabela tarifária TTSL.' }
  ],
  sources: [
    { title: 'TTSL — horários, tarifas и avisos Transtejo/Soflusa', url: 'https://ttsl.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transtejo — informação institucional e ligações fluviais', url: 'https://www.transtejo.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Navegante — passes e tarifas da Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
