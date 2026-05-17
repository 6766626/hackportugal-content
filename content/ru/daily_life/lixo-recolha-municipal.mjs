export default {
  editorialVoice: 'hackportugal',
  id: 'lixo-recolha-municipal',
  categoryId: 'daily_life',
  title: 'Сбор мусора и переработка: графики и правила муниципалитетов',
  tldr: 'В Португалии мусор — муниципальная услуга: график, ночные часы выноса, bulky waste / monstros, зелёные отходы и ecocentro зависят от Câmara Municipal. В Лиссабоне CML даёт расписание по зонам и онлайн-заявку на recolha de monstros; в Porto правила публикует Câmara/Porto Ambiente. Базовая сортировка в 2026: azul бумага, amarelo пластик/металл/embalagens, verde стекло, castanho bioresíduos, cinzento indiferenciado; масло — только в oleão.',
  tags: ['lixo', 'reciclagem', 'муниципалитет', 'ecoponto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'municipio-first',
      title: '1. Сначала проверьте свой município, а не “общие правила”',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет единого национального расписания вывоза бытового мусора. За ежедневный сбор, контейнеры, графики по улицам, monstros, verdes и ecocentros отвечает Câmara Municipal или муниципальная компания.' },
        { kind: 'checklist', items: [
          'Найдите сайт своей Câmara Municipal: Lisboa — cm-lisboa.pt, Porto — cm-porto.pt.',
          'Ищите разделы “Higiene Urbana”, “Resíduos Urbanos”, “Recolha de Resíduos”, “Ecopontos”, “Ecocentros”.',
          'Проверяйте адрес по улице: в крупных городах график отличается по zona/freguesia и даже по стороне улицы.',
          'Если живёте в condomínio, уточните у administração do condomínio: часто есть свои баки и часы выставления на улицу.',
          'Если снимаете квартиру, спросите landlord о dias de recolha и где именно стоят contentores.',
          'Не ориентируйтесь на соседний район: перенос контейнера на 200 м может означать другой маршрут и другой день.',
          'Сбор мусора включается в счёт за воду как tarifa de resíduos / saneamento; отдельный договор обычно не нужен.'
        ] }
      ]
    },
    {
      id: 'five-bin-system',
      title: '2. Сортировка: 5 основных потоков ♻️',
      content: [
        { kind: 'paragraph', text: 'В 2026 реальная бытовая схема — не “один мусорный бак”, а несколько потоков. Цвета в большинстве муниципалитетов совпадают, но детали по bioresíduos и подземным контейнерам зависят от города.' },
        { kind: 'checklist', items: [
          'Azul — бумага и картон: коробки, газеты, бумажные пакеты. Грязная салфетка, жирная коробка от пиццы и бумага с остатками еды — не сюда.',
          'Amarelo — пластиковая и металлическая упаковка, пакеты, банки, Tetra Pak / embalagens de cartão para alimentos líquidos. Желательно смять, чтобы не занимали объём.',
          'Verde — стеклянная тара: бутылки и банки. Керамика, зеркала, лампы, Pyrex и оконное стекло — не сюда.',
          'Castanho — bioresíduos: пищевые отходы и иногда садовая органика. Доступность зависит от município; в некоторых домах дают коричневый контейнер или ключ/карту.',
          'Cinzento / indiferenciado — остаточный мусор: то, что не идёт в переработку и не является опасным отходом.',
          'Oleão — отдельный бак для использованного пищевого масла. Масло нужно остудить, перелить в закрытую пластиковую бутылку и положить целиком в oleão.',
          'Pilhão — батарейки и мелкие аккумуляторы, обычно рядом с ecoponto, в супермаркетах или Junta de Freguesia.',
          'VALORMED — лекарства и блистеры: сдавайте в аптеки, не в обычный мусор.'
        ] },
        { kind: 'warning', text: 'Не выливайте óleo alimentar usado в раковину или унитаз. Это забивает канализацию, портит saneamento и может привести к штрафу по муниципальным правилам.' }
      ]
    },
    {
      id: 'lisbon',
      title: '3. Лиссабон: CML, зоны и recolha de monstros',
      content: [
        { kind: 'paragraph', text: 'В Lisboa правила публикует Câmara Municipal de Lisboa. На сайте CML можно проверить графики recolha по зонам и заказать сбор крупногабаритных предметов — recolha de monstros.' },
        { kind: 'checklist', items: [
          'Проверьте свою zona de recolha на cm-lisboa.pt: расписание зависит от freguesia и типа улицы.',
          'Обычный бытовой lixo обычно выставляют только в разрешённый вечерний/ночной интервал, указанный для зоны.',
          'Monstros — мебель, матрасы, крупные предметы, иногда бытовая техника. Их нельзя просто оставить у ecoponto.',
          'Заявку на recolha de monstros подают онлайн через сервис CML / “Na Minha Rua” или по муниципальным каналам, указав адрес, телефон, тип и количество предметов.',
          'Выносите предметы только в подтверждённый день и место, обычно рядом с входом в здание, не блокируя тротуар, дорогу, пожарный доступ и контейнеры.',
          'Обрезки растений и ветки — verdes; в Lisboa для них тоже действует отдельная муниципальная схема/заявка, а не обычный бак.',
          'Строительный мусор от ремонта — entulho / resíduos de construção. Это не monstros: нужен ecocentro, saco próprio или лицензированный оператор.'
        ] },
        { kind: 'warning', text: 'В Лиссабоне оставленный без заявки матрас, диван или шкаф считается deposição indevida. Даже если “все так делают”, штраф и жалоба через fiscalização возможны.' }
      ]
    },
    {
      id: 'porto-and-other-cities',
      title: '4. Porto и другие города: где искать график',
      content: [
        { kind: 'paragraph', text: 'В Porto информация о recolha de resíduos, ecopontos, ecocentros и pedidos de recolha публикуется через Câmara Municipal do Porto и городские сервисы. Логика такая же: адрес → график → правильный поток отходов → заявка для крупного мусора.' },
        { kind: 'checklist', items: [
          'На cm-porto.pt ищите “Ambiente”, “Resíduos”, “Recolha de Monstros”, “Ecocentros” или “Porto Ambiente”.',
          'Для мебели, матрасов, бытовой техники и verdes используйте pedido de recolha; не оставляйте улично без подтверждения.',
          'Если рядом нет ecoponto нужного цвета, ищите карту ecopontos/ecocentros на сайте município.',
          'В малых городах часто действует сбор “porta-a-porta” по дням недели: контейнер или мешок выставляют вечером перед конкретным днём.',
          'В исторических центрах Lisboa, Porto, Coimbra, Évora, Braga могут быть подземные контейнеры или ограниченные часы из-за узких улиц.',
          'В туристических зонах fiscalização активнее: жалобы на мусор часто подают соседи, condomínio и Junta de Freguesia.'
        ] }
      ]
    },
    {
      id: 'special-waste',
      title: '5. Что нельзя класть в обычный бак',
      content: [
        { kind: 'paragraph', text: 'Опасные и специальные отходы в Португалии идут отдельными каналами. Если сомневаетесь, ищите ecocentro своего município или пункт приёма в магазине.' },
        { kind: 'checklist', items: [
          'Электроника и бытовая техника — Ponto Eletrão, магазин при покупке новой техники или ecocentro.',
          'Лампы, люминесцентные трубки, LED и мелкая электроника — специализированные контейнеры, не verde.',
          'Батарейки — pilhão.',
          'Лекарства, сиропы, блистеры и коробки от лекарств — VALORMED в аптеке.',
          'Краски, растворители, масла, химия, пестициды — ecocentro или специальная municipal recolha.',
          'Строительный мусор, плитка, цемент, сантехника после ремонта — не бытовой lixo; оформляйте через ecocentro/оператора.',
          'Одежда и обувь — textile containers, charity, lojas sociais; грязный текстиль без вариантов идёт в indiferenciado.',
          'Шприцы и медицинские отходы — уточняйте у farmácia/centro de saúde; не выбрасывайте иглы в обычный пакет.'
        ] }
      ]
    },
    {
      id: 'practical-routine',
      title: '6. Практичная рутина для квартиры',
      content: [
        { kind: 'checklist', items: [
          'Сделайте дома 3 маленьких пакета: amarelo, azul, vidro; bioresíduos — отдельное ведро с крышкой, если есть castanho.',
          'Сфотографируйте табличку на ближайшем contentor: там часто указаны часы deposição и телефон/QR муниципалитета.',
          'Сохраните ссылку на страницу своего município и карту ecopontos в заметки.',
          'Перед переездом или покупкой мебели заранее забронируйте recolha de monstros на нужную дату.',
          'Не оставляйте коробки от IKEA/Amazon целиком: сложите и отправьте в azul, иначе контейнер быстро переполнится.',
          'Если ecoponto переполнен, не ставьте пакеты рядом: найдите другой пункт или сообщите через приложение/сайт município.',
          'В condomínio не меняйте место выставления баков без согласования: это частая причина штрафов и конфликтов с соседями.'
        ] },
        { kind: 'warning', text: 'Муниципальные правила меняются чаще, чем национальные. Перед крупным выбросом, ремонтом или переездом проверяйте сайт Câmara Municipal в день заявки.' }
      ]
    }
  ],
  costs: [
    { label: 'Обычный вывоз бытового мусора', amountEUR: 0, note: 'Отдельно при выносе не платится; муниципальная tarifa de resíduos обычно включена в счёт за воду и зависит от município/потребления.' },
    { label: 'Ecoponto, oleão, pilhão', amountEUR: 0, note: 'Для бытового использования бесплатно.' },
    { label: 'Recolha de monstros по заявке', amountEUR: 0, note: 'В Lisboa и Porto для домашних пользователей обычно бесплатная муниципальная услуга при соблюдении правил записи; проверяйте лимиты и условия своего município.' },
    { label: 'Ecocentro для бытовых отходов', amountEUR: 0, note: 'Обычно бесплатно для residents при бытовых объёмах; строительные и коммерческие отходы могут требовать отдельной процедуры или оплаты.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Higiene Urbana, recolha de resíduos и monstros', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Ambiente, resíduos urbanos и recolha municipal', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos urbanos и separação de resíduos', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — serviços municipais e gestão de resíduos', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
