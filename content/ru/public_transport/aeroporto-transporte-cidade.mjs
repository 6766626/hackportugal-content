export default {
  editorialVoice: 'hackportugal',
  id: 'aeroporto-transporte-cidade',
  categoryId: 'public_transport',
  title: 'Транспорт из аэропорта в город — Lisbon, Porto, Faro',
  tldr: 'В 2026 самый предсказуемый трансфер: LIS → Lisboa на метро linha Vermelha за 1,85 € + карта 0,50 €, OPO → Porto на Metro do Porto linha E за билет Z4 около 2,25 € + Andante 0,60 €. Из Faro Airport сначала автобус Próximo 16 до Faro, дальше Vamus по Algarve; прямые региональные рейсы зависят от сезона. Такси из аэропорта обычно дороже Bolt/Uber: Lisboa 12–25 €, Porto 25–35 €, Faro 10–15 €, ночью и с багажом выше.',
  tags: ['аэропорт', 'metro', 'uber', 'vamus'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon Airport (LIS) → Lisboa',
      content: [
        { kind: 'paragraph', text: 'Главный лайфхак Lisbon Airport: метро находится прямо у Terminal 1. Linha Vermelha идёт до Alameda / Saldanha, дальше пересадка на зелёную, жёлтую или синюю линии. До Saldanha обычно около 20 минут без пробок.' },
        { kind: 'checklist', items: [
          'Метро: 1,85 € за поездку Carris/Metro + 0,50 € за карту Navegante occasional / Viva Viagem, если её ещё нет',
          'Режим метро: примерно 06:30–01:00; ночью используйте такси, Bolt, Uber или автобус',
          'До Baixa/Chiado: linha Vermelha до Alameda, затем linha Verde до Baixa-Chiado',
          'До Cais do Sodré: linha Vermelha до Alameda, linha Verde до Cais do Sodré',
          'До Oriente: linha Vermelha, 3 станции; удобно для поездов CP и автобусов Rede Expressos / FlixBus',
          'Городские автобусы Carris от аэропорта есть, но они менее удобны с чемоданами и зависят от пробок',
          'Старый формат Aerobus Lisboa не стоит считать гарантированным вариантом на 2026: проверяйте актуальность в день прилёта, базовый официальный маршрут — метро/автобус/такси'
        ] },
        { kind: 'warning', text: 'Если прилетаете в Terminal 2, сначала нужен бесплатный shuttle до Terminal 1. Метро и большинство городского транспорта находятся у Terminal 1; закладывайте 10–20 минут.' }
      ]
    },
    {
      id: 'porto',
      title: 'Porto Airport (OPO) → Porto',
      content: [
        { kind: 'paragraph', text: 'В Porto самый простой вариант — Metro do Porto linha E / Violeta от Aeroporto до Trindade. Trindade — главный пересадочный узел; оттуда легко добраться до Aliados, Bolhão, São Bento, Casa da Música и Vila Nova de Gaia.' },
        { kind: 'checklist', items: [
          'Нужен билет Andante Z4: в 2026 ориентир около 2,25 € за поездку + 0,60 € за карту Andante Azul',
          'До Trindade обычно 25–30 минут',
          'До São Bento: Aeroporto → Trindade, затем пересадка на linha D / Amarela до São Bento',
          'До Campanhã: Aeroporto → Trindade, затем пересадка на линии A/B/C/F или поезд CP, если удобнее',
          'Карту Andante надо валидировать перед посадкой и при каждой пересадке',
          'Метро в Porto не круглосуточное; поздним вечером проверяйте последний рейс в приложении Anda или на сайте Metro do Porto',
          'С большим багажом метро обычно удобнее автобуса: нет доплаты за чемодан, но не блокируйте двери и проход'
        ] },
        { kind: 'paragraph', text: 'Такси из OPO до центра Porto обычно выходит 25–35 € днём, дороже ночью, в праздники и при дальнем районе. Bolt/Uber часто показывают 15–25 €, но при surge pricing могут быть дороже такси.' }
      ]
    },
    {
      id: 'faro',
      title: 'Faro Airport (FAO) → Faro и Algarve',
      content: [
        { kind: 'paragraph', text: 'У Faro Airport нет метро и нет железнодорожной станции прямо в аэропорту. Базовая схема: автобус Próximo до Faro Terminal Rodoviário / города, затем региональные автобусы Vamus Algarve или поезд CP со станции Faro.' },
        { kind: 'checklist', items: [
          'Faro Airport → центр Faro: городской автобус Próximo, чаще всего linha 16, билет у водителя обычно около 2,60 €',
          'До автовокзала Faro: примерно 15–25 минут, зависит от трафика и расписания',
          'Faro → Albufeira / Portimão / Lagos / Tavira: проверяйте Vamus Algarve; расписания заметно меняются по сезону',
          'Для поездов CP нужно доехать из аэропорта до станции Faro; пешком из аэропорта нельзя считать удобным вариантом',
          'Прямые Aerobus/шаттлы по Algarve могут работать сезонно; в апреле–октябре рейсов обычно больше, зимой меньше',
          'Если прилет поздний, заранее проверяйте последний автобус Vamus: после 21:00–22:00 выбор резко падает',
          'Для семьи 3–4 человека до курортов Algarve такси/transfer иногда рациональнее автобуса, особенно ночью'
        ] },
        { kind: 'warning', text: 'Не планируйте стыковку “самолёт → последний Vamus” без запаса. В Faro задержка багажа на 20–40 минут легко ломает вечерний маршрут по Algarve.' }
      ]
    },
    {
      id: 'taxi-apps',
      title: 'Такси, Bolt и Uber: реальные ориентиры',
      content: [
        { kind: 'paragraph', text: 'В аэропортах Португалии официальная стойка такси обычно у выхода arrivals. Bolt/Uber забирают пассажиров в выделенных pick-up зонах; приложение покажет точную точку. Цена в приложении фиксируется до поездки, у такси — по счётчику.' },
        { kind: 'checklist', items: [
          'LIS → Baixa/Chiado: Bolt/Uber часто 10–18 €, такси обычно 12–25 €',
          'LIS → Cascais / Oeiras: приложение часто 25–45 €, такси может быть 35–60 €',
          'OPO → Trindade/Aliados: Bolt/Uber часто 15–25 €, такси обычно 25–35 €',
          'OPO → Vila Nova de Gaia: закладывайте 20–35 € через приложение, больше ночью',
          'FAO → центр Faro: Bolt/Uber часто 6–10 €, такси обычно 10–15 €',
          'FAO → Albufeira: часто 35–55 € через приложение/transfer, такси может быть выше',
          'FAO → Lagos: часто 80–120 €; автобус дешевле, но дольше и зависит от расписания',
          'Ночью, в дождь, при забастовках и после нескольких прилётов цена Bolt/Uber может прыгать в 1,5–3 раза'
        ] },
        { kind: 'warning', text: 'У такси возможны надбавки за багаж, ночной тариф, выходные/праздники и поездку за пределы муниципалитета. Перед посадкой убедитесь, что включён taxímetro, а не “договорная” цена наличными.' }
      ]
    },
    {
      id: 'luggage-rules',
      title: 'Багаж и билеты: что важно с чемоданами',
      content: [
        { kind: 'paragraph', text: 'В метро Lisboa и Porto отдельной оплаты за обычный чемодан нет. Ограничение практическое: багаж не должен мешать проходу, дверям, эвакуации и другим пассажирам. В автобусах правила строже: водитель может отказать, если чемодан слишком большой или салон переполнен.' },
        { kind: 'checklist', items: [
          'Покупайте и валидируйте билет до входа в метро; контролёры в Lisboa и Porto работают регулярно',
          'Не выбрасывайте карту Navegante occasional / Viva Viagem или Andante: её можно пополнять',
          'В Lisboa одна карта обычно хранит один тип продукта; если меняете тариф, автомат может попросить “очистить” карту',
          'В Porto зона билета важна: из аэропорта в центр нужен Z4, не Z2',
          'В автобусах держите чемодан рядом с собой, не ставьте в проход и у дверей',
          'С детской коляской метро обычно удобнее: есть лифты, но часть станций старые — закладывайте время',
          'Если у вас велосипед, доска для серфа или 3+ больших чемодана, берите van/taxi XL или заранее заказанный transfer'
        ] },
        { kind: 'paragraph', text: 'Практическое правило: один человек + один большой чемодан — метро нормально. Два взрослых + ребёнок + 3 чемодана после ночного рейса — часто дешевле по нервам взять Bolt/Uber XL или такси.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa: метро LIS → город', amountEUR: 1.85, note: 'Разовая поездка Carris/Metro; карта Navegante occasional / Viva Viagem оплачивается отдельно' },
    { label: 'Lisboa: карта Navegante occasional / Viva Viagem', amountEUR: 0.50, note: 'Пополняемая бумажная карта для occasional tickets' },
    { label: 'Porto: Metro do Porto Aeroporto → центр', amountEUR: 2.25, note: 'Ориентир для билета Andante Z4 в 2026; проверьте автомат перед покупкой' },
    { label: 'Porto: карта Andante Azul', amountEUR: 0.60, note: 'Нужна для разовых поездок Metro do Porto / STCP' },
    { label: 'Faro: автобус аэропорт → город', amountEUR: 2.60, note: 'Ориентир для билета у водителя на городском автобусе Próximo' },
    { label: 'Такси/Bolt/Uber из аэропорта в центр', amountEURMin: 6, amountEURMax: 35, note: 'Faro дешевле, Porto обычно дороже; surge pricing и ночные тарифы меняют цену' }
  ],
  sources: [
    { title: 'ANA Aeroportos — Lisbon Airport: транспорт из аэропорта', url: 'https://www.aeroportolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANA Aeroportos — Porto Airport: транспорт из аэропорта', url: 'https://www.aeroportoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto — тарифы Andante и линия Aeroporto', url: 'https://www.metrodoporto.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Vamus Algarve — региональные автобусы Algarve', url: 'https://vamusalgarve.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
