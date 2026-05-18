export default {
  editorialVoice: 'hackportugal',
  id: 'garagem-mecanica-bairro',
  categoryId: 'auto_ownership',
  title: 'Гаражи и oficinas в районе: как выбрать местного механика',
  tldr: 'В Португалии независимая oficina часто дешевле дилера и удобнее для старых авто: revisão обычно 60–150 €, замена колодок/дисков 150–400 €, диагностика 25–60 €. Ищите по Google Maps, Habitissimo, рекомендациям соседей и сетям Bosch Car Service, Norauto, Midas, Feu Vert, ACP. Всегда просите orçamento до работ, fatura с NIF после оплаты и список деталей. При навязанных работах, отказе выдать счёт или “ремонте без результата” жалоба идёт через Livro de Reclamações и ASAE.',
  tags: ['oficina', 'авто', 'механик', 'asae'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Где искать oficina рядом',
      content: [
        { kind: 'paragraph', text: 'В Португалии “garagem” в быту часто означает маленькую независимую мастерскую, а официально чаще пишут oficina auto, oficina mecânica, reparação automóvel. Для обычной revisão, тормозов, шин, аккумулятора и диагностики не обязательно ехать к дилеру: местная oficina обычно быстрее и дешевле.' },
        { kind: 'checklist', items: [
          'Google Maps: ищите “oficina auto”, “mecânico”, “revisão auto”, “pneus”, “travões” + ваш район',
          'Habitissimo: удобно для запроса нескольких orçamento, особенно по кузовным работам и pintura',
          'Группы района в Facebook/WhatsApp/Telegram: спросите “oficina honesta no bairro”',
          'Junta de Freguesia и соседи: в маленьких городах рекомендации часто надёжнее рекламы',
          'Сети: Bosch Car Service, Norauto, Midas, Feu Vert — дороже маленькой oficina, но стандартизированнее',
          'ACP: полезен для членов клуба, эвакуации, проверок и консультаций по авто',
          'Дилер марки: лучше для гарантии, отзывных кампаний, сложной электроники и свежих машин'
        ] }
      ]
    },
    {
      id: 'first-filter',
      title: 'Первичный фильтр: как понять, что мастерская нормальная',
      content: [
        { kind: 'paragraph', text: 'Хорошая oficina не обязательно выглядит как шоурум. Важнее прозрачность: мастер принимает машину, фиксирует симптомы, заранее говорит диапазон цены и звонит до установки дорогих деталей.' },
        { kind: 'checklist', items: [
          'Рейтинг Google не ниже 4,2 и не только 5 отзывов от друзей',
          'В отзывах есть конкретика: “revisão”, “travões”, “embreagem”, “diagnóstico”, а не только “muito bom”',
          'Мастер сразу спрашивает matrícula, VIN или модель/год/двигатель',
          'До работ дают orçamento или хотя бы письменную смету в WhatsApp/SMS',
          'Согласуют marcas das peças: оригинал, OEM или aftermarket',
          'Готовы показать старые заменённые детали по запросу',
          'Выдают fatura/recibo с NIF, а не только “pague em dinheiro sem IVA”',
          'Есть Livro de Reclamações físico или доступ к электронному Livro de Reclamações',
          'Не давят фразами “опасно ехать, надо всё менять сегодня”, если проблема не критическая'
        ] },
        { kind: 'warning', text: 'Красный флаг: oficina отказывается назвать цену до начала, просит оставить машину “на пару дней посмотрим”, не записывает пробег и жалобы, предлагает оплату только наличными без fatura. Это не всегда мошенничество, но риск спора резко выше.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Типичные цены в 2026 году',
      content: [
        { kind: 'paragraph', text: 'Цены зависят от региона, марки, двигателя, качества деталей и доступа к узлу. Лиссабон, Cascais, Porto и Algarve обычно дороже внутренних районов. Для популярных европейских моделей B/C-класса ориентиры такие:' },
        { kind: 'checklist', items: [
          'Revisão simples: масло + масляный фильтр + базовая проверка — 60–150 €',
          'Revisão completa: масло, фильтры, уровни, диагностика — 120–250 €',
          'Компьютерная диагностика OBD — 25–60 €, иногда бесплатно при дальнейшем ремонте',
          'Замена передних колодок — 80–180 €',
          'Колодки + диски на одной оси — 150–400 €',
          'Аккумулятор с установкой — 80–220 €',
          'Замена шин: монтаж/балансировка обычно 10–20 € за колесо без стоимости шин',
          'Заправка кондиционера — 50–100 €, если нет утечки',
          'Почасовая работа независимой oficina — часто 30–60 €/час; дилер может быть заметно дороже'
        ] },
        { kind: 'warning', text: 'Очень дешёвая revisão за 30–40 € часто не включает качественное масло, фильтры или IVA. Спросите, какое масло заливают: вязкость, допуск производителя и марка должны подходить вашему двигателю.' }
      ]
    },
    {
      id: 'booking-and-paperwork',
      title: 'Как записаться и что сказать по-португальски',
      content: [
        { kind: 'paragraph', text: 'В маленьких oficinas запись часто идёт через WhatsApp. Пишите коротко: модель, год, двигатель, matrícula, пробег, симптомы, что уже меняли. Фото ошибки на панели и видео звука помогают сильнее, чем длинное описание.' },
        { kind: 'checklist', items: [
          '“Preciso de uma revisão. Pode dar orçamento?” — нужна revisão, можете дать смету?',
          '“Qual é o preço com IVA e mão de obra incluída?” — цена с IVA и работой?',
          '“Que marca de óleo e filtros vai usar?” — какие масло и фильтры будете использовать?',
          '“Antes de trocar peças caras, ligue-me por favor.” — перед заменой дорогих деталей позвоните мне',
          '“Pode enviar orçamento por WhatsApp?” — можете прислать смету в WhatsApp?',
          '“Quero fatura com NIF.” — нужен счёт с NIF',
          '“Pode guardar as peças antigas para eu ver?” — можете оставить старые детали, чтобы я посмотрел?',
          '“Quando fica pronto?” — когда будет готово?'
        ] },
        { kind: 'paragraph', text: 'Минимальный набор документов при сдаче авто: Documento Único Automóvel или данные автомобиля, ваш контакт, NIF для fatura, описание проблемы. Не оставляйте в машине документы, деньги, Via Verde, ценные вещи и лишние ключи.' }
      ]
    },
    {
      id: 'inspection-and-safety',
      title: 'IPO, IMT и безопасность: где граница между ремонтом и обязательствами',
      content: [
        { kind: 'paragraph', text: 'Обычная oficina ремонтирует авто, но не заменяет inspeção periódica obrigatória (IPO).\n\nСрок IPO зависит от типа и возраста машины; проверяйте по Documento Único Automóvel и правилам IMT. Если машина провалила IPO, oficina может устранить дефекты, но повторная проверка делается в centro de inspeção.' },
        { kind: 'checklist', items: [
          'Перед покупкой б/у авто закажите pré-inspeção или диагностику в независимой oficina',
          'После ремонта тормозов, рулевого, подвески и шин требуйте тест-драйв и подтверждение работ в fatura',
          'Если горит check engine, airbag, ABS или ESP — не ограничивайтесь “сбросом ошибки”',
          'При аварии и кузовном ремонте уточняйте, затронуты ли airbags, sensores, estrutura, alinhamento',
          'Для гибридов и EV выбирайте oficina с опытом high voltage, а не любую garagem',
          'Для машин на гарантии уточняйте, не повлияет ли обслуживание вне дилера на гарантийные условия',
          'После замены ремня ГРМ просите указать в fatura пробег и комплект деталей'
        ] },
        { kind: 'warning', text: 'Не соглашайтесь “пройти IPO через знакомых”. Легальная проверка проводится только в autorizados centros de inspeção. Манипуляции с пробегом, emissions или DPF/EGR могут создать проблемы при IPO, продаже и страховом случае.' }
      ]
    },
    {
      id: 'complaints',
      title: 'Если вас обманули: fatura, Livro de Reclamações, ASAE',
      content: [
        { kind: 'paragraph', text: 'Спор легче выиграть, если у вас есть след: orçamento, переписка, фото/видео до ремонта, fatura, список деталей и дата сдачи машины. Устная договорённость “сделаем недорого” почти бесполезна.' },
        { kind: 'checklist', items: [
          'Сначала спокойно запросите письменное объяснение: что сделали, какие детали поставили, почему цена выросла',
          'Попросите копию fatura и детализированный recibo: peças, mão de obra, IVA',
          'Если цена выросла без согласования — укажите, что orçamento не был одобрен',
          'Если неисправность не устранена — попросите повторную диагностику без новой оплаты',
          'Сохраните WhatsApp, звонки, фото деталей, показания одометра и ошибку на панели',
          'Заполните Livro de Reclamações físico на месте или электронный Livro de Reclamações',
          'При отказе выдать Livro de Reclamações или fatura подавайте жалобу в ASAE',
          'При крупном ущербе используйте advogado, Centro de Arbitragem de Conflitos de Consumo или страховую правовую защиту'
        ] },
        { kind: 'warning', text: 'Не забирайте машину “без бумаг”, если спор уже возник. Оплата наличными без fatura лишает вас доказательств и обычно означает, что IVA не был задекларирован.' }
      ]
    }
  ],
  costs: [
    { label: 'Revisão simples', amountEURMin: 60, amountEURMax: 150, note: 'Масло, масляный фильтр и базовая проверка; зависит от масла и двигателя.' },
    { label: 'Revisão completa', amountEURMin: 120, amountEURMax: 250, note: 'Масло, несколько фильтров, уровни, диагностика; у дилера может быть дороже.' },
    { label: 'Диагностика OBD', amountEURMin: 25, amountEURMax: 60, note: 'Иногда засчитывается в стоимость ремонта, если оставляете машину.' },
    { label: 'Замена тормозных колодок/дисков', amountEURMin: 150, amountEURMax: 400, note: 'Одна ось: диски + колодки + работа; премиальные детали дороже.' },
    { label: 'Монтаж и балансировка шин', amountEURMin: 10, amountEURMax: 20, note: 'Обычно за колесо, без стоимости самой шины.' }
  ],
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes: правила транспорта и inspeção', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACP — Automóvel Club de Portugal: автоуслуги, помощь и потребительская информация', url: 'https://www.acp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica: fiscalização económica и жалобы', url: 'https://www.asae.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Eletrónico — официальный портал жалоб потребителей', url: 'https://www.livroreclamacoes.pt/Inicio/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
