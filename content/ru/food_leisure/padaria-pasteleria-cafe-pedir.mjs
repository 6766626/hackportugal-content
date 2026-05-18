export default {
  editorialVoice: 'hackportugal',
  id: 'padaria-pasteleria-cafe-pedir',
  categoryId: 'food_leisure',
  title: 'Padaria, pastelaria, café: что заказывать и как',
  tldr: 'В португальской padaria берут хлеб домой, в pastelaria — выпечку и кофе у стойки, в café — быстрый завтрак или перекус. Базовый заказ: “uma bica” в Лиссабоне или “um cimbalino” в Порту, “um galão” с молоком, “um pastel de nata”. Хлеб: pão da casa — местный белый/пшеничный, pão de mistura — смесь пшеницы и ржи, broa — кукурузный, regueifa — праздничная плетёнка. Couvert в ресторане можно не трогать и вернуть: платить обязаны только за то, что заказали или начали есть.',
  tags: ['кафе', 'padaria', 'pastelaria', 'кофе', 'couvert'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'places',
      title: 'Разобраться в форматах: padaria, pastelaria, café',
      content: [
        { kind: 'paragraph', text: 'В Португалии эти слова часто пересекаются: одна точка может называться “Padaria Pastelaria Café” и продавать хлеб, пирожные, кофе, сэндвичи и обеды prato do dia. Но логика заказа разная.' },
        { kind: 'checklist', items: [
          'Padaria — хлебная лавка/пекарня. Заходят за pão, carcaça, bijou, broa, pão de mistura, regueifa. Часто есть кофе и несколько пирожных.',
          'Pastelaria — выпечка и сладости: pastel de nata, queijada, mil-folhas, bola de Berlim, pão de Deus. Обычно можно позавтракать у стойки.',
          'Café — кофе, тосты, croissant misto, torrada, sumos, cerveja, иногда простые блюда. Это не обязательно “спешелти”.',
          'Snack-bar — café с большим упором на быстрые обеды: bifana, prego, sopa, omelete, prato do dia.',
          'Tasca — простая народная еда, часто семейное место: суп, bacalhau, febras, arroz de pato, vinho da casa. Интерьер может быть старым, еда — отличной.',
          'Cervejaria — место про пиво и закуски/морепродукты: imperial, fino, amêijoas, camarão, prego, francesinha на севере.'
        ] }
      ]
    },
    {
      id: 'bread',
      title: 'Хлеб: что просить в padaria 🍞',
      content: [
        { kind: 'paragraph', text: 'Португальский хлеб сильно региональный. Если не знаете, что брать, просите “pão da casa” — вам дадут основной хлеб этой пекарни. Для завтрака и бутербродов чаще берут маленькие булочки, для супа и сыра — более плотный pão de mistura или broa.' },
        { kind: 'checklist', items: [
          'Pão da casa — “домашний” хлеб конкретной пекарни. Состав не универсален: спросите “é de trigo?” если нужен пшеничный.',
          'Pão de mistura — смесь муки, чаще пшеница + рожь. Более тёмный и плотный, хорошо к супу, сыру, presunto.',
          'Broa — кукурузный хлеб, плотный, желтоватый, популярен на севере и в центре. Хорош к caldo verde и sardinhas.',
          'Regueifa — мягкая плетёная булка/хлеб, особенно типична для севера. Бывает сладковатая, часто берут к завтраку.',
          'Carcaça / papo-seco / bijou — маленькая белая булочка; название зависит от региона. Просите “duas carcaças” или “quatro bijous”.',
          'Pão fatiado — нарезанный хлеб. Если хотите нарезать буханку в магазине: “Pode fatiar, por favor?”',
          'Mal cozido / bem cozido — менее или более пропечённый. Если любите тёмную корку: “bem cozido”.'
        ] },
        { kind: 'paragraph', text: 'Фразы: “Queria um pão de mistura, por favor” — хотел(а) бы pão de mistura. “Tem pão integral?” — есть цельнозерновой? “É fresco de hoje?” — свежий сегодня?' }
      ]
    },
    {
      id: 'coffee',
      title: 'Кофе: bica, garoto, galão и как не получить не то ☕',
      content: [
        { kind: 'paragraph', text: 'Португальский стандарт — маленький крепкий espresso. В Лиссабоне часто говорят bica, в Порту — cimbalino, по стране поймут “um café”. Кофе обычно пьют быстро у стойки; за столиком иногда дороже, если есть serviço de mesa.' },
        { kind: 'checklist', items: [
          'Um café / uma bica — espresso в маленькой чашке.',
          'Cimbalino — то же самое в Порту и на севере.',
          'Café cheio — espresso, налитый почти до края; мягче по вкусу.',
          'Café curto — короткий и крепкий.',
          'Garoto / pingo — маленький кофе с каплей молока. Названия региональные.',
          'Meia de leite — большая чашка: примерно половина кофе, половина молока.',
          'Galão — кофе с молоком в высоком стакане, мягче и молочнее, чем meia de leite.',
          'Abatanado — длинный чёрный кофе, ближе к americano, но не фильтр.',
          'Descafeinado — без кофеина; уточните “de máquina” если хотите из кофемашины, а не растворимый пакетик.'
        ] },
        { kind: 'paragraph', text: 'Практичный заказ на завтрак: “Uma meia de leite e uma torrada, por favor” или “Um galão e um pastel de nata”. Если хотите корицу к nata: “com canela”.' }
      ]
    },
    {
      id: 'pastry',
      title: 'Выпечка: что выбрать в pastelaria 🥐',
      content: [
        { kind: 'paragraph', text: 'В pastelaria обычно сначала смотрят витрину, потом называют позицию и количество. Если едите на месте: “para comer aqui”. Если с собой: “para levar”. Многие сладости очень сладкие: кофе без сахара — нормальная пара.' },
        { kind: 'checklist', items: [
          'Pastel de nata — классика с заварным кремом. Во множественном: pastéis de nata.',
          'Queijada — маленький пирог с творожно-сырной или молочной начинкой; известны варианты de Sintra, de Évora, de leite.',
          'Mil-folhas — слоёное пирожное с кремом, португальская версия mille-feuille.',
          'Bola de Berlim — пончик без дырки, обычно с creme pasteleiro. На пляжах продают летом, но в pastelaria есть круглый год.',
          'Pão de Deus — мягкая булка с кокосовой шапкой; хороший вариант к galão.',
          'Croissant misto — круассан с сыром и ветчиной; бывает сладкий португальский, не французский слоёный.',
          'Torrada — толстый тост с маслом, часто половина большого pão de forma. Заказывают на завтрак.',
          'Tosta mista — горячий сэндвич с queijo и fiambre.'
        ] },
        { kind: 'warning', text: 'Аллергии уточняйте прямо: “Tem frutos secos?”, “Tem leite?”, “Tem ovo?”. В маленьких pastelaria риск перекрёстного контакта высокий: витрина и щипцы часто общие.' }
      ]
    },
    {
      id: 'ordering',
      title: 'Как заказать и оплатить без неловкости',
      content: [
        { kind: 'paragraph', text: 'В маленьких местах нормально заказать у стойки, сразу съесть там же и оплатить в конце. В туристических зонах могут просить оплату сразу. Очередь часто неформальная: запомните, кто был перед вами, и скажите “era a seguir” только если точно ваша очередь.' },
        { kind: 'checklist', items: [
          'Начало заказа: “Bom dia, queria…” — вежливее, чем прямое “dê-me”.',
          'На месте: “É para comer aqui”. С собой: “É para levar”.',
          'Попросить счёт: “A conta, por favor” или у стойки “Posso pagar?”.',
          'Карта: “Posso pagar com cartão?” Маленькие cafés иногда принимают карту только от 5 € или предпочитают Multibanco/MB WAY.',
          'Чек с NIF: “Com contribuinte, por favor” и продиктовать NIF до оплаты.',
          'Без NIF: “Sem contribuinte”.',
          'Если хотите воду из-под крана: “Um copo de água, por favor”. Бутылочная — “água sem gás” или “com gás”.',
          'Чаевые в café не обязательны. Оставить 0,10–0,50 € за кофе или округлить счёт — нормально, но не требуется.'
        ] },
        { kind: 'paragraph', text: 'Полезная мини-фраза: “O que recomenda?” — что посоветуете? В хорошей padaria это часто приводит к лучшему хлебу дня, а не к самому дорогому товару.' }
      ]
    },
    {
      id: 'couvert',
      title: 'Couvert: хлеб, масло, оливки — можно отказаться',
      content: [
        { kind: 'paragraph', text: 'Couvert — это хлеб, масло, оливки, сыр, паштет или другие закуски, которые в ресторане могут поставить до заказа. В café/pastelaria это встречается реже, но в tasca, cervejaria и ресторанах — часто.' },
        { kind: 'checklist', items: [
          'Платить нужно только за couvert, который вы заказали или начали есть.',
          'Если не хотите, сразу скажите: “Não queremos couvert, obrigado/obrigada”.',
          'Если поставили без вопроса — не трогайте и попросите убрать: “Pode retirar, por favor?”',
          'Цены должны быть в меню или прейскуранте. Если цены нет, спорьте до оплаты, а не после.',
          'Хлеб на столе не всегда бесплатный. В Португалии это частая ловушка для новичков.',
          'В счёте ищите строки “couvert”, “pão”, “manteiga”, “azeitonas”, “queijo”.',
          'Если включили то, что вы не ели и просили убрать, попросите исправить: “Não consumimos isto”.'
        ] },
        { kind: 'warning', text: 'Не устраивайте спор на эмоциях: попросите Livro de Reclamações или электронную жалобу через livroreclamacoes.pt. Для потребительских споров в ресторанах и cafés полезны DECO Proteste и ASAE.' }
      ]
    }
  ],
  costs: [
    { label: 'Café / bica у стойки', amountEURMin: 0.80, amountEURMax: 1.30, note: 'Обычный диапазон вне туристических точек; за столиком и в центре Лиссабона/Порту может быть выше.' },
    { label: 'Galão или meia de leite', amountEURMin: 1.20, amountEURMax: 2.20, note: 'Цена зависит от города и формата заведения.' },
    { label: 'Pastel de nata', amountEURMin: 1.10, amountEURMax: 1.80, note: 'В известных туристических pastelaria может стоить дороже.' },
    { label: 'Torrada', amountEURMin: 1.50, amountEURMax: 3.00, note: 'Часто большая порция с маслом; уточняйте, если нужен простой тост.' },
    { label: 'Couvert в tasca/ресторане', amountEURMin: 1.50, amountEURMax: 6.00, note: 'Зависит от состава: хлеб и масло дешевле, сыр/паштет/оливки дороже. Можно отказаться, если не ели.' }
  ],
  sources: [
    {
      title: 'DECO Proteste: права потребителя в ресторанах и cobrança de couvert',
      url: 'https://www.deco.proteste.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ASAE: informação ao consumidor, preços e livro de reclamações',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações Eletrónico: подача жалобы онлайн',
      url: 'https://www.livroreclamacoes.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
