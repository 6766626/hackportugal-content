export default {
  editorialVoice: 'hackportugal',
  id: 'reciclagem-oee-electronica',
  categoryId: 'daily_life',
  title: 'Утилизация электроники OEE/REEE: куда сдать телефон, ноутбук, телевизор',
  tldr: 'В Португалии старую электронику нельзя выбрасывать в lixo indiferenciado или обычные ecopontos. OEE/EEE после использования становится REEE и сдаётся бесплатно: в Worten/Continente и других продавцах при покупке аналога действует takeback 1-for-1; мелкую электронику до 25 см крупные магазины принимают без покупки; также есть ecocentros Câmara Municipal, pontos Electrão и ERP Portugal. Батарейки и аккумуляторы сдавайте отдельно в pilhão.',
  tags: ['reciclagem', 'reee', 'электроника', 'pilhão'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'Что считается OEE/REEE',
      content: [
        { kind: 'paragraph', text: 'В Португалии термин для электрического и электронного оборудования — EEE/OEE; отходы после использования — REEE. Практически всё, что работает от розетки, батарейки, аккумулятора, USB или солнечной панели, сдаётся отдельно от обычного мусора.' },
        { kind: 'checklist', items: [
          'Телефоны, планшеты, ноутбуки, мониторы, телевизоры',
          'Зарядки, кабели, роутеры, наушники, клавиатуры, мыши',
          'Мелкая техника: фен, утюг, блендер, тостер, электробритва',
          'Крупная техника: холодильник, стиральная машина, духовка, кондиционер',
          'Игрушки и гаджеты с батарейками или проводом',
          'Лампы и светодиодные светильники — сдавать отдельно, не в стекло',
          'Картриджи и тонеры — обычно отдельные контейнеры в магазинах/офисах',
          'Батарейки и съёмные аккумуляторы — не вместе с устройством, если можно безопасно вынуть'
        ] },
        { kind: 'warning', text: 'Не кладите электронику в зелёный/синий/жёлтый ecoponto: эти контейнеры для стекла, бумаги и упаковки. REEE принимают только специальные pontos de recolha, ecocentros или продавцы техники.' }
      ]
    },
    {
      id: 'retail-takeback',
      title: 'Магазины: Worten, Continente и правило 1-for-1',
      content: [
        { kind: 'paragraph', text: 'При покупке новой техники продавец обязан бесплатно принять старую технику того же типа и назначения — схема “1 por 1”. Это работает в магазинах электроники, гипермаркетах с отделом техники и при онлайн-доставке, если заранее выбрать/запросить recolha do equipamento usado.' },
        { kind: 'checklist', items: [
          'Покупаете новый телевизор — можете бесплатно сдать старый телевизор',
          'Покупаете ноутбук — сдаёте старый ноутбук или аналогичное устройство',
          'При доставке крупной техники домой заранее отметьте “recolha do antigo” или спросите поддержку',
          'Устройство должно быть отсоединено, разморожено/осушено, без личных вещей и мусора внутри',
          'Магазин не обязан забирать технику другого типа по правилу 1-for-1',
          'Мелкую электронику до 25 см крупные магазины электроники с торговой площадью от 400 м² принимают бесплатно даже без покупки',
          'В Worten часто есть caixas/pontos de recolha для кабелей, телефонов, батареек и мелкой техники',
          'В Continente ищите pilhão и зоны recolha; крупную технику проще сдавать через доставку новой покупки'
        ] },
        { kind: 'warning', text: 'Не оставляйте телевизор или холодильник у двери магазина без регистрации сдачи. Это может считаться abandono de resíduos; используйте стойку atendimento ao cliente или оформленную recolha.' }
      ]
    },
    {
      id: 'collection-points',
      title: 'Где найти ближайший пункт приёма',
      content: [
        { kind: 'paragraph', text: 'Если вы ничего не покупаете, используйте сеть pontos Electrão, ERP Portugal или муниципальные ecocentros. На сайтах операторов есть карты: вводите concelho/código postal и выбирайте тип отхода — REEE, pilhas, lâmpadas.' },
        { kind: 'substeps', items: [
          { id: 'electrao', title: 'Pontos Electrão', content: [
            { kind: 'paragraph', text: 'Electrão управляет сетью пунктов для электроники, батареек и ламп. Это могут быть магазины, школы, компании, juntas, ecocentros и временные кампании.' }
          ] },
          { id: 'erp', title: 'ERP Portugal', content: [
            { kind: 'paragraph', text: 'ERP Portugal также публикует карту onde reciclar. Удобно искать отдельно REEE, pilhas и аккумуляторы, потому что не каждый пункт принимает все категории.' }
          ] },
          { id: 'municipal', title: 'Câmara Municipal / ecocentro', content: [
            { kind: 'paragraph', text: 'Для крупной техники без покупки новой обычно лучше ecocentro вашего município. Некоторые câmaras предлагают recolha de monos/monstros ao domicílio по записи: звоните в Câmara Municipal или consulte “recolha de resíduos volumosos”.' }
          ] }
        ] }
      ]
    },
    {
      id: 'batteries-lamps-data',
      title: 'Батарейки, лампы и личные данные',
      content: [
        { kind: 'paragraph', text: 'Батарейки и аккумуляторы в Португалии собирают отдельно через pilhão — небольшие контейнеры в супермаркетах, школах, магазинах техники и ecocentros. Если батарея съёмная, выньте её и сдайте в pilhão; если встроенная, сдавайте устройство целиком как REEE.' },
        { kind: 'checklist', items: [
          'С телефона: сделайте backup, выйдите из iCloud/Google, удалите eSIM, выполните factory reset',
          'С ноутбука: зашифруйте диск или выполните secure erase перед сдачей',
          'Достаньте SIM, microSD, USB-накопители и банковские токены',
          'Для старых HDD/SSD с чувствительными данными используйте software wipe или физическое уничтожение у специалиста',
          'Лампы не бросайте в стеклянный ecoponto: особенно fluorescentes и lâmpadas económicas содержат вещества, требующие отдельной переработки',
          'Повреждённые или вздутые литиевые батареи не кладите в обычный pilhão: спросите ecocentro или магазин, как безопасно принять bateria danificada',
          'Заклейте контакты литиевых аккумуляторов изолентой, если сдаёте их отдельно',
          'Не разбирайте холодильники, кондиционеры и экраны самостоятельно'
        ] },
        { kind: 'warning', text: 'Пункт приёма не гарантирует уничтожение ваших данных. Утилизация REEE — это переработка, а не услуга cyber security. Ответственность за удаление данных остаётся на владельце.' }
      ]
    },
    {
      id: 'practical-scenarios',
      title: 'Быстрые сценарии для экспата',
      content: [
        { kind: 'checklist', items: [
          'Старый телефон: backup → reset → вынуть SIM / отвязать eSIM → сдать в Worten/пункт Electrão/ERP; батарейку отдельно только если съёмная',
          'Ноутбук: wipe/сброс → сдать в магазин с REEE box или ecocentro; зарядку можно сдавать вместе',
          'Телевизор: при покупке нового заказать recolha 1-for-1; без покупки — ecocentro или recolha de volumosos у Câmara',
          'Холодильник/стиральная машина: лучше оформлять забор при доставке новой техники; иначе звонить в Câmara Municipal',
          'Кабели и зарядки: мелкий REEE, сдавать в магазинные контейнеры или pontos Electrão/ERP',
          'Батарейки AA/AAA/кнопочные: pilhão в супермаркете, школе, магазине техники или ecocentro',
          'Лампы LED/fluorescentes: контейнер для lâmpadas, не стекло',
          'Если не уверены: ищите на карте Electrão/ERP по почтовому индексу и фильтруйте тип отхода'
        ] },
        { kind: 'paragraph', text: 'При переезде из квартиры не оставляйте электронику у мусорных баков “para quem quiser”. В больших городах это часто создаёт проблему для condomínio и муниципальных служб. Легальный путь почти всегда бесплатный, но требует отвезти вещь в правильный пункт или записать муниципальный вывоз.' }
      ]
    }
  ],
  costs: [
    { label: 'Сдача REEE в пункт Electrão/ERP или ecocentro', amountEUR: 0, note: 'Для домохозяйств обычно бесплатно; проверьте часы работы и категории отходов' },
    { label: 'Takeback 1-for-1 при покупке новой техники', amountEUR: 0, note: 'Бесплатно для аналогичного оборудования; при доставке закажите recolha заранее' },
    { label: 'Сдача батареек в pilhão', amountEUR: 0, note: 'Контейнеры есть в супермаркетах, магазинах техники, школах и ecocentros' }
  ],
  sources: [
    { title: 'Electrão — карта пунктов приёма и правила переработки', url: 'https://www.electrao.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERP Portugal — onde reciclar REEE, pilhas e lâmpadas', url: 'https://www.erp-recycling.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 152-D/2017 — regime unificado dos fluxos específicos de resíduos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/152-d-2017-114337042', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Agência Portuguesa do Ambiente — resíduos de equipamentos elétricos e eletrónicos', url: 'https://apambiente.pt/residuos/residuos-de-equipamentos-eletricos-e-eletronicos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
