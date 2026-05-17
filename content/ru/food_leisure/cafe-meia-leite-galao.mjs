export default {
  editorialVoice: 'hackportugal',
  id: 'cafe-meia-leite-galao',
  categoryId: 'food_leisure',
  title: 'Кофейная культура: meia de leite, galão, bica, garoto, abatanado',
  tldr: 'В Португалии кофе заказывают коротко и точно: bica — эспрессо, garoto — эспрессо с каплей молока, meia de leite — чашка «половина кофе / половина молока», galão — высокий стакан с большим количеством молока, abatanado — местный вариант американо, descafeinado — без кофеина. В обычном café в 2026 ориентируйтесь на 0,80–1,50 € за базовые позиции; в туристических местах, pastelaria с видом и specialty-кофейнях будет дороже.',
  tags: ['кафе', 'кофе', 'bica', 'galão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'basic-map',
      title: 'Карта напитков без паники',
      content: [
        { kind: 'paragraph', text: 'Португальское café — это не только место, но и сам эспрессо. Если сказать просто “um café”, почти всегда принесут маленький эспрессо. В Лиссабоне его часто называют bica, в Порту и на севере — чаще cimbalino.' },
        { kind: 'checklist', items: [
          'Bica / café — маленький эспрессо, обычно 25–35 мл.',
          'Café cheio — эспрессо, налитый чуть полнее обычного.',
          'Café curto / italiana — более короткий и крепкий эспрессо.',
          'Garoto — эспрессо с небольшим количеством молока или молочной пены.',
          'Meia de leite — чашка примерно наполовину кофе, наполовину горячее молоко.',
          'Galão — высокий стакан: много молока, немного кофе; мягче, чем meia de leite.',
          'Abatanado — большой чёрный кофе, близко к американо, но вкус зависит от машины и кафе.',
          'Descafeinado — кофе без кофеина; можно pedir как bica, meia de leite или galão.'
        ] }
      ]
    },
    {
      id: 'how-to-order',
      title: 'Как заказать по-португальски ☕',
      content: [
        { kind: 'paragraph', text: 'Формула простая: “Queria…” или “Um/uma…, por favor”. В повседневном café это звучит естественнее, чем длинные фразы на английском. Оплата часто после напитка у стойки; в местах с обслуживанием за столом — официанту.' },
        { kind: 'checklist', items: [
          '“Uma bica, por favor.” — один эспрессо.',
          '“Um café cheio, se faz favor.” — эспрессо чуть полнее.',
          '“Um garoto, por favor.” — эспрессо с каплей молока.',
          '“Uma meia de leite.” — кофе с молоком в чашке.',
          '“Um galão.” — высокий стакан молочного кофе.',
          '“Um abatanado.” — большой чёрный кофе.',
          '“Descafeinado, por favor.” — без кофеина.',
          '“Com leite frio?” — если хотите холодное молоко отдельно или вместо горячего, уточните “com leite frio”.'
        ] },
        { kind: 'warning', text: 'Latte, flat white и cappuccino есть не везде. В обычной pastelaria безопаснее просить meia de leite или galão. Cappuccino в туристических местах может означать что угодно: от кофе с пеной до напитка с корицей и взбитыми сливками.' }
      ]
    },
    {
      id: 'milk-difference',
      title: 'Meia de leite vs galão vs garoto',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка новичков — считать meia de leite и galão одним и тем же. Оба с молоком, но размер, посуда и баланс разные.' },
        { kind: 'substeps', items: [
          { id: 'meia-de-leite', title: 'Meia de leite', content: [
            { kind: 'paragraph', text: 'Подаётся в чашке. Обычно это более «кофейный» вариант: примерно половина кофе и половина горячего молока. Хорошо для завтрака с torrada, croissant или pastel de nata.' }
          ] },
          { id: 'galao', title: 'Galão', content: [
            { kind: 'paragraph', text: 'Подаётся в высоком стакане. Молока заметно больше, кофе мягче. Если вы привыкли к латте, начинайте с galão.' }
          ] },
          { id: 'garoto', title: 'Garoto', content: [
            { kind: 'paragraph', text: 'Это не детский кофе, несмотря на название. По сути маленький эспрессо, смягчённый каплей молока. Удобно, если bica кажется слишком резкой, а meia de leite — слишком большой.' }
          ] }
        ] }
      ]
    },
    {
      id: 'prices-and-places',
      title: 'Цены в 2026 и где пить',
      content: [
        { kind: 'paragraph', text: 'В обычном bairro café или pastelaria базовый кофе остаётся дешёвым по европейским меркам. Разброс зависит от города, района, посадки за столом и туристичности места.' },
        { kind: 'checklist', items: [
          'Bica / café у стойки: часто около 0,80–1,10 €.',
          'Bica за столиком или в центре Лиссабона/Порту: примерно 1,00–1,50 €.',
          'Garoto: обычно близко к цене bica или немного дороже.',
          'Meia de leite: часто 1,10–1,50 € в обычной pastelaria.',
          'Galão: часто 1,20–1,70 €, особенно если подают за столом.',
          'Abatanado: обычно 1,00–1,60 €.',
          'Specialty coffee: эспрессо, фильтр или flat white могут стоить 2,00–4,50 € и выше.',
          'Pastel de nata + bica как быстрый перекус: ориентир 2,00–3,50 € вне туристических ловушек.'
        ] },
        { kind: 'warning', text: 'Цена у стойки и цена за столиком могут отличаться. Меню с ценами должно быть доступно, но в маленьких кафе его иногда надо попросить: “Tem a lista de preços, por favor?”' }
      ]
    },
    {
      id: 'local-etiquette',
      title: 'Этикет: стойка, вода, чаевые',
      content: [
        { kind: 'paragraph', text: 'Кофе в Португалии — быстрый социальный ритуал. Многие пьют bica за 2 минуты у стойки, не открывая ноутбук. Долгая работа с компьютером нормальна в specialty-кофейнях, но не всегда уместна в маленькой pastelaria в час завтрака или обеда.' },
        { kind: 'checklist', items: [
          'Если хотите быстро и дешевле — пейте у balcão, то есть у стойки.',
          'Если садитесь за стол, ждите официанта или уточните у стойки, как принято в этом кафе.',
          'Воду к эспрессо автоматически дают не всегда; попросите “um copo de água”.',
          'Сахар часто кладут пакетиком на блюдце; без сахара специально говорить не нужно.',
          'Растительное молоко есть не везде; спрашивайте “tem bebida vegetal?”.',
          'Чаевые за кофе необязательны; можно оставить 0,10–0,50 € мелочью за приятный сервис.',
          'MB WAY и карта распространены, но маленькие кафе могут предпочитать наличные для суммы до 5 €.',
          'Если заказываете “para levar”, уточните: не каждое старое café работает в формате takeaway.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bica / café в обычном café', amountEURMin: 0.8, amountEURMax: 1.5, note: 'Ориентир на 2026; у стойки дешевле, в туристических местах дороже.' },
    { label: 'Meia de leite', amountEURMin: 1.1, amountEURMax: 1.5, note: 'Типичная цена в pastelaria вне премиальных и specialty-мест.' },
    { label: 'Galão', amountEURMin: 1.2, amountEURMax: 1.7, note: 'Высокий стакан, больше молока; цена зависит от посадки и района.' },
    { label: 'Specialty coffee', amountEURMin: 2, amountEURMax: 4.5, note: 'Flat white, фильтр, single origin и похожие позиции в современных кофейнях.' }
  ],
  sources: [
    { title: 'Visit Portugal — еда и напитки Португалии', url: 'https://www.visitportugal.com', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'A Brasileira — историческое кафе Лиссабона и bica', url: 'https://www.abrasileira.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Delta Cafés — португальская кофейная культура', url: 'https://www.deltacafes.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
