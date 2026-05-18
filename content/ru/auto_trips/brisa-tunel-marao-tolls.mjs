export default {
  editorialVoice: 'hackportugal',
  id: 'brisa-tunel-marao-tolls',
  categoryId: 'auto_trips',
  title: 'Платные дороги Brisa и Túnel do Marão: тарифы и Via Verde',
  tldr: 'Brisa управляет ключевыми autoestradas: A1, A2, A5, A6, A8, A9, A14. Оплата обычно через portagem manual: взять билет на въезде и заплатить на выезде, или через Via Verde без остановки. Тариф зависит от класса 1–4: легковая машина почти всегда classe 1, фургон/SUV с высотой у передней оси ≥1,10 м может стать classe 2. Túnel do Marão на A4 оплачивается отдельно: ориентир 2026 — около 7–12 € для крупных классов, легковой класс 1 дешевле. Перед поездкой проверяйте симулятор Brisa/Via Verde.',
  tags: ['portagens', 'brisa', 'viaverde', 'a4'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-paid',
      title: 'Что именно платное',
      content: [
        { kind: 'paragraph', text: 'В Португалии платные дороги называются autoestradas com portagem. У Brisa это классические автомагистрали с шлагбаумами и билетами: A1 Lisboa–Porto, A2 Lisboa–Algarve, A5 Lisboa–Cascais, A6 Marateca–Caia, A8 Lisboa–Leiria, A9 CREL, A14 Figueira da Foz–Coimbra.' },
        { kind: 'paragraph', text: 'Túnel do Marão — платный участок на A4 между районом Amarante и Vila Real. Это не “городской тоннель”, а часть магистрали через Serra do Marão: при поездках Porto ↔ Trás-os-Montes он часто попадает в маршрут.' },
        { kind: 'checklist', items: [
          'A1: основной платный коридор Lisboa ↔ Porto',
          'A2: Lisboa ↔ Algarve, самый частый маршрут на юг',
          'A5: Lisboa ↔ Cascais, короткая, но платная',
          'A6: направление Évora / Espanha через Caia',
          'A8: Lisboa ↔ Oeste / Leiria',
          'A9: объездная CREL вокруг Lisboa',
          'A14: Figueira da Foz ↔ Coimbra',
          'A4 / Túnel do Marão: Porto / Amarante ↔ Vila Real / Bragança'
        ] }
      ]
    },
    {
      id: 'vehicle-class',
      title: 'Сначала проверьте classe 1–4 🚗',
      content: [
        { kind: 'paragraph', text: 'Тариф считается не “по марке машины”, а по классу для portagens. Ошибка класса — частая причина неожиданно высокого чека у фургонов, кемперов и больших SUV.' },
        { kind: 'checklist', items: [
          'Classe 1: мотоциклы и автомобили с высотой по вертикали у передней оси менее 1,10 м; обычные легковые машины обычно здесь',
          'Classe 2: 2 оси и высота у передней оси ≥1,10 м; сюда часто попадают фургоны, некоторые vans и коммерческие версии',
          'Classe 3: 3 оси и высота у передней оси ≥1,10 м',
          'Classe 4: 4 и более осей и высота у передней оси ≥1,10 м',
          'Прицеп может изменить класс, если меняет число осей в тарифной логике участка',
          'Via Verde использует тот же класс, который присвоен транспондеру/номеру автомобиля',
          'Мотоциклы с Via Verde могут иметь отдельный льготный режим на части сетей, но это надо проверять в тарифе конкретного оператора',
          'Если едете на арендованном авто — класс уже задан оператором аренды и привязан к устройству Via Verde, если оно установлено'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на “легковая/не легковая” в документах. Для portagem важна физическая высота у передней оси 1,10 м и количество осей. У campervan и carrinha тариф часто выше, чем ожидает водитель.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Как платить: manual, cartão, Via Verde',
      content: [
        { kind: 'paragraph', text: 'На дорогах Brisa обычно работает закрытая система: на въезде берёте билет, на выезде платите за фактический участок. На коротких участках может быть фиксированная praça de portagem.' },
        { kind: 'checklist', items: [
          'Въезд: выбирайте обычную полосу, берите ticket; не заезжайте в полосу “Via Verde” без устройства',
          'Выезд: отдаёте ticket оператору или вставляете в автомат',
          'Оплата: наличные, банковская карта, иногда Multibanco/автоматическая касса',
          'Via Verde: зелёная полоса, проезд без остановки; списание с привязанного счёта/карты',
          'В арендной машине: уточните у rent-a-car, активирован ли Via Verde и какая ежедневная комиссия',
          'Если билет потерян, оператор может начислить максимальный тариф по участку',
          'Если случайно проехали через Via Verde без устройства, фиксируйте дату, номер дороги, praça и обращайтесь к оператору/Via Verde — не ждите штрафного письма',
          'Для электронных-only дорог вне Brisa правила другие: оплата через CTT/Payshop/portagens eletrónicas; не путайте их с классическими шлагбаумами Brisa'
        ] },
        { kind: 'warning', text: 'Полоса Via Verde — не “быстрая полоса для всех”. Камера считывает транспондер/номер. Без активного устройства проезд превращается в неоплаченную portagem с административными расходами.' }
      ]
    },
    {
      id: 'tariffs-2026',
      title: 'Ориентиры по тарифам 2026',
      content: [
        { kind: 'paragraph', text: 'Точный тариф зависит от въезда, выезда, оператора, класса и ежегодной индексации. Для поездки лучше считать не “по километрам”, а через официальный simulador de portagens Brisa или Via Verde: вводите origem, destino и classe.' },
        { kind: 'checklist', items: [
          'A5 Lisboa–Cascais, classe 1: обычно около 1,95–2,15 € за короткий участок, зависит от точки въезда/выезда',
          'A1 Lisboa–Porto, classe 1: ориентир около 24–26 € за полный маршрут по платной A1',
          'A2 Lisboa–Algarve, classe 1: ориентир около 23–25 € до района Albufeira/Faro через A2',
          'A6 Lisboa/Marateca–Caia, classe 1: ориентир около 17–20 € на основном платном коридоре к Espanha',
          'A8 Lisboa–Leiria, classe 1: ориентир около 9–11 € за длинный проезд',
          'A9 CREL, classe 1: короткие поездки обычно несколько евро, часто 1–4 €',
          'A14 Figueira da Foz–Coimbra, classe 1: обычно несколько евро, примерно 3–5 €',
          'Túnel do Marão / A4: для classe 2–4 ориентир около 7–12 €; classe 1 обычно ниже, но проверяйте калькулятор перед поездкой'
        ] },
        { kind: 'paragraph', text: 'Для classe 2–4 сумма растёт заметно: фургон или campervan может заплатить на 60–150% больше легковой машины на том же маршруте. Поэтому перед поездкой Porto ↔ Algarve или Porto ↔ Vila Real проверка класса экономит реальные деньги.' },
        { kind: 'warning', text: 'Цифры выше — практические ориентиры для планирования бюджета, не юридический тарифный лист. Официальная сумма на день поездки — только в tarifário/simulador Brisa или Via Verde.' }
      ]
    },
    {
      id: 'via-verde-when-useful',
      title: 'Когда нужен Via Verde',
      content: [
        { kind: 'paragraph', text: 'Via Verde удобен, если вы живёте в Португалии и ездите по autoestradas чаще пары раз в месяц. Устройство привязывается к номеру автомобиля и способу оплаты. Списания видны в личном кабинете и приложении.' },
        { kind: 'checklist', items: [
          'Имеет смысл: регулярные поездки Lisboa–Cascais, Porto–Lisboa, Algarve, работа за городом',
          'Имеет смысл для экспатов: не надо разбираться с автоматами и очередями на portagem',
          'Полезно на парковках и некоторых сервисах, если тарифный план Via Verde это включает',
          'Не обязательно: если вы ездите по платным дорогам 1–2 раза в год, manual payment обычно достаточно',
          'Для арендной машины не покупайте свой транспондер: используйте опцию rent-a-car или платите вручную, если дорога это позволяет',
          'Проверяйте mensalidade/комиссию плана Via Verde: условия меняются и зависят от пакета',
          'После продажи автомобиля удалите номер из Via Verde, иначе чужие portagens могут списываться с вас'
        ] },
        { kind: 'warning', text: 'Via Verde не отменяет сам тариф дороги. Это способ оплаты. Вы платите ту же portagem по классу автомобиля плюс возможную абонентскую плату/комиссию выбранного плана.' }
      ]
    },
    {
      id: 'practical-route-hacks',
      title: 'Практические советы перед поездкой',
      content: [
        { kind: 'checklist', items: [
          'Перед дальним маршрутом откройте Brisa или Via Verde calculator и сохраните сумму скриншотом',
          'В навигаторе сравните маршрут “avoid tolls”: иногда экономия 20 € стоит лишних 60–90 минут',
          'На A1/A2 не въезжайте без топлива: станции есть, но цены на autoestrada часто выше городских',
          'Держите банковскую карту и немного наличных: автомат или карта могут не сработать на конкретной praça',
          'Не выбрасывайте ticket до конца поездки и оплаты',
          'Если едете с багажником на крыше, это обычно не меняет класс, потому что важна высота у передней оси, но коммерческий фургон — другое дело',
          'Для Túnel do Marão заранее проверьте погоду: альтернатива по старой горной дороге может быть медленнее и опаснее зимой',
          'Для бухгалтерии/recibos verdes сохраняйте faturas Via Verde или recibo da portagem, если поездка рабочая'
        ] },
        { kind: 'paragraph', text: 'Если нужен самый предсказуемый бюджет, планируйте: топливо + portagens + парковка. Для поездки Lisboa ↔ Porto на classe 1 только tolls туда-обратно могут дать около 50 €, без топлива.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 Lisboa–Porto, classe 1', amountEURMin: 24, amountEURMax: 26, note: 'Ориентир за полный маршрут по платной A1; точную сумму считайте в Brisa/Via Verde.' },
    { label: 'A2 Lisboa–Algarve, classe 1', amountEURMin: 23, amountEURMax: 25, note: 'Ориентир до района Algarve по A2; зависит от въезда/выезда.' },
    { label: 'Túnel do Marão / A4, classe 2–4', amountEURMin: 7, amountEURMax: 12, note: 'Практический диапазон для более крупных классов; classe 1 обычно дешевле.' },
    { label: 'Via Verde', amountEURMin: 0, amountEURMax: 2, note: 'Portagem оплачивается отдельно; возможна ежемесячная плата/комиссия по выбранному плану.' }
  ],
  sources: [
    { title: 'Brisa — portagens, rede de autoestradas и simulador', url: 'https://www.brisa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — тарифы, идентификатор и оплата portagens', url: 'https://www.viaverde.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Via Verde — планировщик маршрута и cálculo de portagens', url: 'https://www.viaverde.pt/particulares/ferramentas/calculador-de-portagens', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
