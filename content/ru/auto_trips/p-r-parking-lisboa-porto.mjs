export default {
  editorialVoice: 'hackportugal',
  id: 'p-r-parking-lisboa-porto',
  categoryId: 'auto_trips',
  title: 'Park & Ride (P+R): парковки у метро и поездов в Лиссабоне и Порту',
  tldr: 'P+R в Португалии — это не единая госпрограмма, а набор бесплатных, дешёвых и обычных платных парковок у Metro, CP, Fertagus и крупных терминалов. В 2026 году реально экономить так: оставлять машину на окраине или у пересадки, дальше ехать по Navegante/Andante. В Лиссабоне Sete Rios и Cais do Sodré удобны, но обычно платные и центральные; Senhor Roubado, Pragal, Estádio Nacional — типичные варианты “оставил и поехал”. В Порту смотрите Rio Tinto, Senhora da Hora, Estádio do Dragão, Campanhã; Trindade — центр, не дешёвый P+R.',
  tags: ['парковка', 'lisboa', 'porto', 'metro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'concept',
      title: 'Как работает P+R в Португалии',
      content: [
        { kind: 'paragraph', text: 'Park & Ride здесь чаще называют parques dissuasores или просто parques junto à estação. Идея простая: не заезжать в центр, оставить машину у метро, CP, Fertagus или автобусного терминала и дальше ехать общественным транспортом.' },
        { kind: 'paragraph', text: 'Главная ловушка: “P+R” не означает автоматически бесплатно. Один объект может быть бесплатным муниципальным парком, другой — частным подземным паркингом, третий — парком EMEL с почасовым тарифом. Тарифы и правила меняются чаще, чем схемы метро, поэтому перед поездкой проверяйте сайт оператора или табло на въезде.' },
        { kind: 'checklist', items: [
          'Ищите слова: parque dissuasor, estacionamento, parque junto à estação, interface',
          'Проверяйте максимальный дневной тариф: иногда 24 часа дешевле, чем 6 часов по центру',
          'Смотрите расписание последнего Metro/CP/Fertagus обратно',
          'Не оставляйте вещи на сиденьях: P+R часто стоят у крупных развязок',
          'Сохраняйте билет парковки до выезда; оплата обычно в автомате до посадки в машину',
          'Для ежедневных поездок выгоднее месячные Navegante или Andante, а не разовые билеты'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Лиссабон: где оставлять машину 🚗 + Metro/CP',
      content: [
        { kind: 'paragraph', text: 'В Большом Лиссабоне нет одной карты всех бесплатных P+R. Практический подход — выбирать парковку по направлению въезда: север через Odivelas/Loures, запад через Oeiras/Cascais, юг через Almada/Pragal, восток через Oriente/Moscavide.' },
        { kind: 'checklist', items: [
          'Senhor Roubado / Odivelas — удобны для въезда с севера и пересадки на Linha Amarela Metro; проверяйте фактический статус парковки на месте',
          'Sete Rios — сильный транспортный узел: Metro, CP, автобусы Rede Expressos; обычно это не “бесплатная окраина”, а платный городской вариант',
          'Cais do Sodré — удобно для Linha Verde, CP Cascais и паромов, но это центр; используйте только если нужен именно этот узел, а не экономия',
          'Pragal — хороший вариант с юга: Fertagus до Entrecampos/Sete Rios/Roma-Areeiro, рядом подъезды из Almada и A2; парковки часто платные, но дешевле центра',
          'Estádio Nacional / Cruz Quebrada / Algés — подходит для западного коридора Oeiras–Lisboa и пересадки на CP Cascais, но в дни мероприятий парковки могут закрывать',
          'Oriente / Moscavide / Encarnação — восточный въезд, аэропорт, Parque das Nações; много платных парковок, бесплатные места быстро исчезают утром'
        ] },
        { kind: 'warning', text: 'Не оставляйте машину “как все” на обочине у станций. В Лиссабоне и пригородах регулярно работают Polícia Municipal, EMEL и муниципальные эвакуаторы. Штраф + reboque легко превращают бесплатную парковку в самую дорогую поездку недели.' }
      ]
    },
    {
      id: 'porto',
      title: 'Порту: Metro do Porto и пригородные парковки',
      content: [
        { kind: 'paragraph', text: 'В Порту логика P+R обычно лучше: Metro do Porto прямо связывает пригороды, аэропорт, Matosinhos, Maia, Gondomar и центр. Самый удобный сценарий — оставить машину не в Baixa, а у станции вне исторического центра и доехать по Andante.' },
        { kind: 'checklist', items: [
          'Rio Tinto — практичный восточный вариант для въезда со стороны Gondomar/Valongo и пересадки на Metro/поезд',
          'Senhora da Hora — крупная развязка Metro для Matosinhos, Póvoa, аэропорта и центра; парковки вокруг станции могут быстро заполняться',
          'Estádio do Dragão — удобен у VCI и Metro, но в дни матчей FC Porto и мероприятий режим парковок меняется',
          'Campanhã — крупный узел CP, Metro и автобусов; удобно для поездов, но парковки чаще платные и загруженные',
          'Trindade — главный пересадочный узел Metro в центре; это не дешёвый P+R, а место для короткой городской остановки, если вообще есть свободные места',
          'Aeroporto / Verdes / Botica — варианты для тех, кто едет из Maia/Vila do Conde/Póvoa и хочет дальше в центр на Metro'
        ] },
        { kind: 'paragraph', text: 'На сайте Metro do Porto проверяйте станцию, линию, доступность парковки и ближайшие остановки. В 2026 году правила оплаты и доступность мест зависят от конкретного оператора парковки, а не только от Metro.' }
      ]
    },
    {
      id: 'money',
      title: 'Сколько это стоит в 2026',
      content: [
        { kind: 'paragraph', text: 'Бесплатные места существуют, но их меньше, чем кажется по старым форумам. На популярных узлах бесплатная зона часто занята к 08:00–09:00, а рядом работают платные parques с почасовым или дневным тарифом.' },
        { kind: 'checklist', items: [
          'Бесплатно: муниципальные открытые парковки у некоторых станций и стадионов, если нет события или ограничения',
          'Дёшево: периферийные парки с дневным тарифом примерно 1–4 €',
          'Средне: станции-пересадки и торговые зоны — часто 4–10 € за день',
          'Дорого: Cais do Sodré, Baixa, Trindade, Parque das Nações, аэропорт — считайте как обычный городской паркинг',
          'Плюс транспорт: разовый билет Metro/CP или месячный Navegante/Andante',
          'Для ежедневного комьюта считайте не только парковку, но и топливо, portagens, IUC и время на въезд в центр'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь на Google Maps как на источник цены. Он часто показывает “free parking” по отзывам пользователей, но не знает о новых паркоматах, ночных ограничениях, работах Câmara Municipal или матчах.' }
      ]
    },
    {
      id: 'routine',
      title: 'Практический алгоритм на каждый день',
      content: [
        { kind: 'substeps', items: [
          { id: 'route', title: '1. Выберите транспортную линию, а не парковку', content: [
            { kind: 'paragraph', text: 'Сначала решите, куда вам нужно в центре: Saldanha, Baixa-Chiado, Entrecampos, São Bento, Trindade, Aliados. Затем выбирайте станцию на той же линии, чтобы не делать лишние пересадки.' }
          ] },
          { id: 'backup', title: '2. Держите запасной вариант', content: [
            { kind: 'paragraph', text: 'Для каждой поездки имейте “план Б” в 1–2 станциях дальше. Если Senhor Roubado, Senhora da Hora или Pragal заполнены, не тратьте 20 минут на круги — едьте к следующей станции.' }
          ] },
          { id: 'payment', title: '3. Проверьте оплату до ухода', content: [
            { kind: 'paragraph', text: 'Посмотрите, как платить: Multibanco, карта, MB WAY, автомат, приложение оператора. Некоторые парки требуют оплату до выезда, а не у шлагбаума.' }
          ] },
          { id: 'security', title: '4. Оставьте машину “пустой”', content: [
            { kind: 'paragraph', text: 'Уберите сумки, навигатор, кабели, документы, очки и детские вещи в багажник до въезда на парковку. Не делайте это демонстративно уже на месте.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Открытая муниципальная парковка у станции', amountEUR: 0, note: 'Если нет временных ограничений, мероприятий или новых паркоматов' },
    { label: 'Периферийный P+R / parque dissuasor', amountEURMin: 1, amountEURMax: 4, note: 'Типичный порядок дневной стоимости; проверяйте конкретный парк' },
    { label: 'Городской паркинг у крупного узла', amountEURMin: 4, amountEURMax: 10, note: 'Sete Rios, Campanhã, Oriente и похожие узлы часто попадают сюда' },
    { label: 'Центральная парковка', amountEURMin: 10, amountEURMax: 25, note: 'Cais do Sodré, Baixa, Trindade, аэропорт и туристические зоны' }
  ],
  sources: [
    { title: 'EMEL: официальная карта и список парковок Lisboa', url: 'https://www.emel.pt/pt/onde-estacionar/parques', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro do Porto: станции, линии и информация для пассажиров', url: 'https://www.metroporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metro Lisboa: сеть, станции и планирование поездки', url: 'https://www.metrolisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CP Comboios de Portugal: городские и пригородные поезда', url: 'https://www.cp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
