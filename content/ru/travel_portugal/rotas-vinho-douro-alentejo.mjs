export default {
  editorialVoice: 'hackportugal',
  id: 'rotas-vinho-douro-alentejo',
  categoryId: 'travel_portugal',
  title: 'Винные маршруты: Rotas do Vinho Douro, Alentejo и Tejo',
  tldr: 'В Португалии винные маршруты — это не “музей с дегустацией”, а сеть quintas, adegas, ресторанов и инфоцентров. В Douro/Porto Wine Route — 60+ хозяйств, типичный визит с дегустацией стоит 15–50 €; в Alentejo удобная база — Évora/Reguengos de Monsaraz; Tejo и Lisboa проще для однодневной поездки из Лиссабона. Бронируйте заранее, не планируйте больше 2–3 дегустаций в день и назначайте водителя.',
  tags: ['vinho', 'douro', 'alentejo', 'tejo', 'туризм'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-routes-are',
      title: 'Что такое Rotas do Vinho 🍷',
      content: [
        { kind: 'paragraph', text: 'Rotas do Vinho — региональные винные маршруты: карты производителей, винных погребов, дегустационных залов, отелей, ресторанов и туристических сервисов. Это не единый государственный билет: каждую quinta или adega обычно бронируют отдельно.' },
        { kind: 'paragraph', text: 'Для экспата в Португалии это лучший способ понять регионы без туристической спешки: Douro — террасы и Port wine, Alentejo — широкие пейзажи и мощные красные вина, Tejo/Lisboa — доступные поездки из Лиссабона на день.' },
        { kind: 'checklist', items: [
          'Проверяйте официальный регион: Douro/Porto через IVDP, общую винную информацию через IVV',
          'Бронируйте визиты на сайте quinta/adega или по email — walk-in в 2026 году не гарантирован',
          'Смотрите язык тура: PT/EN почти всегда, RU редко',
          'Уточняйте, включён ли tour + tasting или только prova',
          'Планируйте 2, максимум 3 дегустации в день',
          'Закладывайте 60–120 минут на одну quinta',
          'Не садитесь за руль после дегустаций: Uber/Bolt вне городов доступны нестабильно',
          'Покупку вина можно оформить на месте; доставку по Португалии часто делают за доплату'
        ] }
      ]
    },
    {
      id: 'douro-porto',
      title: 'Douro и Rota do Vinho do Porto',
      content: [
        { kind: 'paragraph', text: 'Douro — самый зрелищный маршрут: террасные виноградники вдоль реки Douro, Port wine, DOC Douro и исторические quintas. Практическая база — Peso da Régua, Pinhão, Lamego или Vila Nova de Gaia, если хотите сначала понять Port wine в lodges у Порту.' },
        { kind: 'paragraph', text: 'Rota do Vinho do Porto/Douro объединяет 60+ quintas и винных объектов. В 2026 году типичная цена визита с дегустацией — 15–50 € на человека: базовая prova дешевле, тур по виноградникам, выдержанные Port/Tawny или lunch pairing дороже.' },
        { kind: 'checklist', items: [
          'Лучший сезон: май–июнь и сентябрь–октябрь; vindima в сентябре бронируется заранее',
          'Маршрут без машины: поезд Linha do Douro до Régua или Pinhão + такси/трансфер',
          'Маршрут с машиной: N222 красивая, но узкая и утомительная; закладывайте время',
          'Для Port wine: включите Vila Nova de Gaia, если живёте у Порту или едете впервые',
          'Для пейзажей: Pinhão и São João da Pesqueira дают самый “открыточный” Douro',
          'Для серьёзной дегустации: спрашивайте DOC Douro reds/whites и Port отдельно',
          'Для семейной поездки: выбирайте quintas с рестораном или picnic option',
          'Проверяйте, является ли visita privada отдельной услугой — она может стоить заметно дороже'
        ] },
        { kind: 'warning', text: 'Douro выглядит компактно на карте, но дороги медленные. Не ставьте Régua, Pinhão, São João da Pesqueira и Vila Nova de Foz Côa в один день с дегустациями — получится гонка, а не винный маршрут.' }
      ]
    },
    {
      id: 'alentejo',
      title: 'Alentejo: Évora, Reguengos и Monsaraz',
      content: [
        { kind: 'paragraph', text: 'Rota dos Vinhos do Alentejo — один из самых удобных винных маршрутов для выходных. Центры притяжения: Évora, Reguengos de Monsaraz, Estremoz, Borba, Redondo, Vidigueira. Регион известен тёплым климатом, красными купажами, talha wine и винодельнями с хорошей инфраструктурой для гостей.' },
        { kind: 'checklist', items: [
          'База на 1–2 ночи: Évora для ресторанов и логистики',
          'База для пейзажей: Monsaraz/Reguengos de Monsaraz',
          'Типичный визит: 15–35 € за tour + tasting, премиальные дегустации дороже',
          'Летом жара часто выше 35 °C — ставьте дегустации утром или ближе к вечеру',
          'В Évora есть wine bar и дегустационные форматы без поездки по adegas',
          'Для talha wine спрашивайте дегустации в Vidigueira, Vila de Frades и окрестностях',
          'Рестораны в Alentejo популярны по выходным — бронируйте lunch заранее',
          'Между adegas лучше ехать на машине с трезвым водителем или брать частный тур'
        ] },
        { kind: 'paragraph', text: 'Alentejo хорош для тех, кто хочет совместить вино, гастрономию и спокойный rural stay. Здесь меньше драматичных дорог, чем в Douro, но расстояния между объектами большие, а общественный транспорт для винного туризма почти бесполезен.' }
      ]
    },
    {
      id: 'tejo-lisboa',
      title: 'Tejo и Lisboa: винный день из Лиссабона',
      content: [
        { kind: 'paragraph', text: 'Если вы живёте в Лиссабоне и не хотите ехать на ночёвку, смотрите регионы Tejo и Lisboa. Tejo удобен через Santarém, Cartaxo, Almeirim, Tomar и Ribatejo-зону; Lisboa — через Bucelas, Colares, Torres Vedras, Óbidos и окрестности.' },
        { kind: 'paragraph', text: 'Rota dos Vinhos do Tejo и Rota dos Vinhos de Lisboa обычно проще логистически, чем Douro: меньше горных дорог, больше вариантов для однодневного тура, ниже средний чек на базовые дегустации.' },
        { kind: 'checklist', items: [
          'Из Лиссабона в Tejo удобно ехать машиной; Santarém — понятная первая точка',
          'Для Lisboa DOC Colares заранее уточняйте расписание — многие визиты только по записи',
          'Bucelas хорош для белых вин и короткой поездки из столицы',
          'Óbidos можно совместить с вином, историческим центром и ginjinha',
          'Типичный бюджет дегустации: 10–30 € на человека',
          'Если едете поездом, проверяйте “последнюю милю” до adega — пешком часто далеко',
          'Для компаний 4–6 человек частный трансфер может быть выгоднее, чем аренда авто + риск с алкоголем',
          'Не путайте Tejo как винный регион с туристической набережной в Lisboa — это отдельная DOC/IG география'
        ] }
      ]
    },
    {
      id: 'booking-safety',
      title: 'Как бронировать и не испортить поездку',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-region', title: '1. Выберите регион под формат', content: [
            { kind: 'paragraph', text: 'Douro — на 2–3 дня и пейзажи; Alentejo — выходные с едой и отелем; Tejo/Lisboa — дневная поездка из Лиссабона; Gaia — быстрый Port wine без машины.' }
          ] },
          { id: 'book-directly', title: '2. Бронируйте напрямую', content: [
            { kind: 'paragraph', text: 'Пишите quinta/adega: дата, время, число людей, язык, нужен ли almoço/pairing, есть ли дети, кто не пьёт алкоголь. Многие хозяйства отвечают быстрее по форме на сайте или WhatsApp.' }
          ] },
          { id: 'plan-transport', title: '3. Сначала транспорт, потом дегустации', content: [
            { kind: 'paragraph', text: 'Главная ошибка — забронировать 3 дегустации в разных долинах и потом обнаружить, что такси нет. В rural Portugal транспорт надо планировать до оплаты визитов.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Иметь подтверждение брони в email/WhatsApp',
          'Прийти за 10 минут до начала тура',
          'Взять воду, солнцезащиту и удобную обувь для виноградников',
          'Сообщить заранее о беременности, непереносимости алкоголя или food restrictions',
          'Проверить правила для детей: некоторые quintas допускают, но дегустационная зона не всегда family-friendly',
          'Не рассчитывать на бесплатную отмену в день визита',
          'Покупать вино после дегустации, а не до — вкусы меняются по сету',
          'Сохранять чеки, если везёте бутылки в багаже или отправляете доставкой'
        ] },
        { kind: 'warning', text: 'В Португалии допустимый лимит алкоголя за рулём низкий, а для новых водителей и профессионалов ещё строже. Практическое правило для винного маршрута: водитель не дегустирует или пользуется spit bucket без “чуть-чуть попробую”.' }
      ]
    }
  ],
  costs: [
    { label: 'Базовая дегустация в Tejo/Lisboa', amountEURMin: 10, amountEURMax: 30, note: 'Обычно prova нескольких вин; тур может оплачиваться отдельно.' },
    { label: 'Визит с дегустацией в Douro', amountEURMin: 15, amountEURMax: 50, note: 'Типичный диапазон для tour + tasting; premium Port, private visit и lunch pairing стоят дороже.' },
    { label: 'Визит с дегустацией в Alentejo', amountEURMin: 15, amountEURMax: 35, note: 'Зависит от adega, числа вин и включённой экскурсии.' },
    { label: 'Частный винный тур с транспортом', amountEURMin: 90, amountEURMax: 250, note: 'Ориентир на человека при малой группе; цена сильно зависит от региона, языка и включённого обеда.' }
  ],
  sources: [
    { title: 'IVDP — Instituto dos Vinhos do Douro e do Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Rota dos Vinhos do Alentejo — маршруты и производители', url: 'https://www.vinhosdoalentejo.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Comissão Vitivinícola Regional do Tejo — Vinhos do Tejo', url: 'https://www.vinhosdotejo.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
