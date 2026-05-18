export default {
  editorialVoice: 'hackportugal',
  id: 'passes-aveiro-coimbra-algarve',
  categoryId: 'public_transport',
  title: 'Региональные проездные: Aveiro, Coimbra, Algarve, Centro',
  tldr: 'Вне Лиссабона и Порту нет единого “Navegante”: проездные зависят от региона и оператора. В 2026 ориентир по PART — до 30 € в месяц внутри одного município и до 40 € за межмуниципальный/региональный pass, но Aveirobus, Coimbra Smart Card, Vamus Algarve и Move Centro имеют свои карты, зоны и скидки. Перед покупкой проверяйте маршрут на passe.pt: CP, городские автобусы и междугородние линии часто считаются отдельно.',
  tags: ['passes', 'транспорт', 'algarve', 'coimbra', 'aveiro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'how-it-works',
      title: 'Как устроены региональные pass в 2026',
      content: [
        { kind: 'paragraph', text: 'В Португалии региональные проездные субсидируются через PART/PROTransP, но не превращают страну в одну тарифную зону. Практический максимум для обычного пользователя — около 30 € за месячный pass внутри одного município и 40 € за intermunicipal/regional pass, если регион включил маршрут в свою систему.' },
        { kind: 'paragraph', text: 'Главная ошибка экспатов — купить “городской” pass и ожидать, что он покроет поездки в соседний concelho, CP или частного междугороднего оператора. В Aveiro, Coimbra, Algarve и Centro один и тот же пластик/приложение может выглядеть похоже, но покрытие разное.' },
        { kind: 'checklist', items: [
          'Проверяйте не название региона, а конкретный маршрут: origem → destino.',
          'Смотрите, входит ли оператор: Aveirobus, SMTUC/Coimbra, Vamus, Move Centro, CP или другой.',
          'Уточняйте тип pass: municipal, intermunicipal, regional, urbano, estudante, sénior.',
          'Обычный месячный pass обычно действует календарный месяц, а не 30 дней с даты покупки.',
          'Первичная карта часто стоит отдельно: обычно 3–7 €, зависит от оператора.',
          'Для льгот почти всегда нужен NIF и документ: ВНЖ/паспорт, comprovativo de morada, declaração de matrícula или справка Segurança Social.',
          'Пополнение возможно в kiosks/lojas do operador, Multibanco, Payshop, app или онлайн — но не везде одинаково.',
          'Если ездите редко, сравните с caderneta/предоплаченными поездками: pass окупается не всегда.'
        ] }
      ]
    },
    {
      id: 'aveiro',
      title: 'Aveiro и Aveirobus',
      content: [
        { kind: 'paragraph', text: 'Aveirobus — городской транспорт Aveiro. Он удобен для ежедневных поездок по городу, университету, estação, Glicínias, hospital и жилым зонам внутри município. Для поездок Aveiro ↔ Ílhavo, Águeda, Estarreja, Ovar, Oliveira do Bairro или других concelhos уже нужен межмуниципальный вариант, если маршрут включён в региональный тариф.' },
        { kind: 'checklist', items: [
          'Если живёте и работаете/учитесь внутри Aveiro: сначала смотрите городской mensal Aveirobus.',
          'Если ездите из соседнего concelho: проверяйте intermunicipal pass на passe.pt по точным остановкам.',
          'CP Linha do Norte / Linha do Vouga обычно не считается автоматически частью Aveirobus-pass.',
          'Студентам Universidade de Aveiro стоит проверить студенческий pass и отдельные соглашения с município.',
          'Для льготного pass подготовьте NIF, документ личности и proof of address в Aveiro или регионе.',
          'Карту лучше оформлять заранее в начале месяца: в первые рабочие дни очереди выше.'
        ] },
        { kind: 'warning', text: 'Aveirobus-pass не равен “проездному по округу Aveiro”. Если маршрут обслуживает другой оператор или поезд CP, нужна отдельная проверка тарифа.' }
      ]
    },
    {
      id: 'coimbra',
      title: 'Coimbra Smart Card и транспорт Coimbra',
      content: [
        { kind: 'paragraph', text: 'В Coimbra городской транспорт исторически связан с SMTUC и картой Coimbra Smart Card. Она покрывает городские автобусные маршруты Coimbra, но не всегда покрывает междугородние поездки из Condeixa-a-Nova, Lousã, Miranda do Corvo, Mealhada, Figueira da Foz или других municípios региона.' },
        { kind: 'paragraph', text: 'Для жизни в самом городе обычно достаточно городского pass. Для commuting из пригородов проверяйте межмуниципальные pass Região de Coimbra/Move Centro и конкретного оператора. В 2026 нормальный ориентир цены: до 30 € municipal и до 40 € intermunicipal, если маршрут включён в субсидируемую сеть.' },
        { kind: 'checklist', items: [
          'Внутри Coimbra: ищите mensal urbano / SMTUC / Coimbra Smart Card.',
          'Из пригородов: ищите intermunicipal/regional pass, а не только SMTUC.',
          'Проверьте, нужен ли отдельный pass для поездов CP Coimbra-B, Coimbra, Figueira da Foz или Serpins.',
          'Студентам Universidade de Coimbra и Instituto Politécnico de Coimbra: проверьте Passe Gratuito Jovem Estudante/Sub23 через учебное заведение и оператора.',
          'Семьям с детьми: школьные passes оформляются через escola/município, не всегда напрямую в кассе.',
          'Для социального тарифа может потребоваться declaração da Segurança Social или composição do agregado familiar.'
        ] }
      ]
    },
    {
      id: 'algarve',
      title: 'Vamus Algarve',
      content: [
        { kind: 'paragraph', text: 'Vamus Algarve — основной бренд региональных автобусов Algarve. Он важен, если вы живёте не в одном центре, а ездите между Faro, Loulé, Albufeira, Portimão, Lagos, Tavira, Olhão, Silves, Lagoa или Vila Real de Santo António.' },
        { kind: 'paragraph', text: 'В 2026 для регулярных поездок по Algarve чаще всего смотрят municipal pass для одного concelho или regional/intermunicipal pass Vamus. Практический потолок для обычного месячного регионального pass — около 40 €, но городские сети, аэропортовые маршруты, туристические shuttle и поезд CP Linha do Algarve могут иметь отдельные правила.' },
        { kind: 'checklist', items: [
          'Проверьте маршрут на vamusalgarve.pt или passe.pt: в Algarve расстояния большие, а частота рейсов разная по сезонам.',
          'Faro Airport, praia routes и летние усиленные линии могут отличаться по тарифу.',
          'CP Linha do Algarve не включайте в расчёт pass, пока не увидите это прямо в условиях.',
          'Если живёте в Loulé/Albufeira/Portimão/Lagos и ездите только внутри concelho, municipal pass может быть дешевле регионального.',
          'Для молодых студентов используйте Passe Gratuito Jovem Estudante/Sub23, если соответствуете требованиям.',
          'Для sénior/социальных скидок спросите в Câmara Municipal и у Vamus: часть льгот финансируется муниципально.'
        ] },
        { kind: 'warning', text: 'В Algarve расписание сильнее зависит от сезона, чем в Coimbra или Aveiro. Перед покупкой pass проверьте не только цену, но и фактическое число рейсов в рабочие дни, выходные и после 20:00.' }
      ]
    },
    {
      id: 'move-centro',
      title: 'Move Centro: когда нужен региональный pass Centro',
      content: [
        { kind: 'paragraph', text: 'Move Centro — зонтичная региональная логика для поездок в центральной Португалии, где маршруты часто идут между municípios и CIM. Она полезна тем, кто живёт в небольшом городе и ездит в Coimbra, Aveiro, Viseu, Castelo Branco, Leiria, Guarda или другой центр на работу, учёбу или к врачу.' },
        { kind: 'paragraph', text: 'Главное — не покупать pass “по названию региона”. В Centro много операторов и маршрутов, поэтому сначала ищите связку origem/destino на passe.pt, затем проверяйте место оформления карты и пополнения.' },
        { kind: 'checklist', items: [
          'Определите точные paragens: не только город, но и остановку отправления/прибытия.',
          'Проверьте, municipal это поездка или intermunicipal: от этого зависит цена и pass.',
          'Спросите, действует ли pass на все рейсы оператора или только на указанную linha.',
          'Уточните, можно ли пополнить онлайн; в малых городах иногда нужна loja/agente.',
          'Если маршрут включает CP + bus, считайте их отдельно, пока интеграция не подтверждена.',
          'Сохраните comprovativo de carregamento: при сбое валидатора это ваш аргумент.'
        ] }
      ]
    },
    {
      id: 'buying-checklist',
      title: 'Как купить без лишних расходов',
      content: [
        { kind: 'substeps', items: [
          { id: 'route', title: '1. Сначала проверьте маршрут', content: [
            { kind: 'paragraph', text: 'Откройте passe.pt и введите origem/destino. Если сервис показывает несколько операторов, сравните покрытие: иногда дешевле купить один regional pass, иногда — городской pass + разовые билеты.' }
          ] },
          { id: 'documents', title: '2. Подготовьте документы', content: [
            { kind: 'checklist', items: [
              'Документ личности: Cartão de Cidadão, ВНЖ или паспорт.',
              'NIF.',
              'Comprovativo de morada, если pass привязан к residência/município.',
              'Фото, если оператор делает персональную карту.',
              'Declaração de matrícula для 4_18/Sub23/Jovem Estudante.',
              'Документ Segurança Social для социального тарифа, если применимо.',
              'Банковская карта/Multibanco или наличные: маленькие agentes не всегда принимают всё.'
            ] }
          ] },
          { id: 'validate', title: '3. Проверьте карту после пополнения', content: [
            { kind: 'paragraph', text: 'После carregamento проверьте receipt: месяц, зоны, origem/destino, operador. Ошибку проще исправить сразу в loja, чем после штрафа у контролёра.' }
          ] }
        ] },
        { kind: 'warning', text: 'Не выбрасывайте старую карту при переезде внутри региона. Иногда на неё можно записать новый профиль или pass, а новая карта стоит отдельно.' }
      ]
    }
  ],
  costs: [
    { label: 'Обычный municipal pass', amountEURMax: 30, note: 'Типичный субсидируемый потолок 2026 для поездок внутри одного município; фактическая цена зависит от оператора.' },
    { label: 'Обычный intermunicipal/regional pass', amountEURMax: 40, note: 'Ориентир 2026 для межмуниципальных поездок в рамках PART/региональной сети, если маршрут включён.' },
    { label: 'Выпуск транспортной карты', amountEURMin: 3, amountEURMax: 7, note: 'Разово; зависит от Aveirobus, Coimbra/SMTUC, Vamus, Move Centro или местного agente.' },
    { label: 'Passe Gratuito Jovem Estudante / Sub23', amountEUR: 0, note: 'Для eligible студентов/школьников при ежегодном подтверждении matrícula; оформляется по правилам оператора и учебного заведения.' }
  ],
  sources: [
    {
      title: 'Passe.pt — поиск проездных и тарифов по маршруту',
      url: 'https://www.passe.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Transportes & Viagens — информация о региональных перевозках и passes',
      url: 'https://www.transporteseviagens.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AMAL — PART (Programa de Apoio à Redução Tarifária nos Transportes Públicos)',
      url: 'https://amal.pt/atividades/mobilidade-e-transportes/autoridade-de-transportes/part',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-05'
    },
    {
      title: 'AMT — informação ao consumidor sobre transporte público de passageiros',
      url: 'https://www.amt-autoridade.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
