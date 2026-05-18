export default {
  editorialVoice: 'hackportugal',
  id: 'rcd-residuos-construcao-demolicao',
  categoryId: 'housing_buy',
  title: 'RCD: отходы строительства и сноса — как легально вывезти',
  tldr: 'RCD (resíduos de construção e demolição) — плитка, бетон, кирпич, гипсокартон, сантехника после ремонта.\n\nВ Португалии их нельзя бросать в обычные contentores или оставлять у мусорки: нужен Ecocentro для малых DIY-объёмов или лицензированная transportadora + aterro/operador RCD и e-GAR/Guia de Acompanhamento de Resíduos. Малые объёмы в муниципальный Ecocentro часто бесплатны, но лимиты разные; коммерческий вывоз в 2026 обычно 80–200 €/м³ плюс возможные сборы полигона.',
  tags: ['rcd', 'ремонт', 'ecocentro', 'gar'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-rcd',
      title: 'Что считается RCD, а что нет',
      content: [
        { kind: 'paragraph', text: 'RCD — это resíduos de construção e demolição: отходы от строительства, ремонта, сноса и небольших obras. В быту это чаще всего мешки с плиткой, цементом, штукатуркой, кирпичом, бетоном, гипсокартоном, остатками труб, дверей, окон, санфаянсом.' },
        { kind: 'checklist', items: [
          'Плитка, azulejos, керамика, кирпич, бетон — RCD.',
          'Штукатурка, цемент, песок, щебень, строительная пыль — RCD.',
          'Гипсокартон и изоляция — RCD, но могут требовать отдельной фракции.',
          'Старые двери, окна, ламинат, плинтусы — часто принимаются как RCD/volumosos, зависит от муниципалитета.',
          'Краска, растворители, клеи, герметики — не обычный RCD; это опасные отходы, уточняйте Ecocentro.',
          'Асбест/amianto — отдельная опасная категория; обычный перевозчик RCD не подходит.',
          'Бытовой мусор, картон от покупок, пищевые отходы — не RCD, идут в обычные потоки recycling/indiferenciados.'
        ] },
        { kind: 'warning', text: 'Нельзя оставлять строительные мешки рядом с обычными contentores. Даже если “все так делают”, это считается deposição ilegal de resíduos и может закончиться штрафом от Câmara Municipal или полиции муниципалитета.' }
      ]
    },
    {
      id: 'small-diy',
      title: 'Малый DIY-ремонт: везите в Ecocentro 🧱',
      content: [
        { kind: 'paragraph', text: 'Если вы сами поменяли пару рядов плитки, сняли унитаз или разобрали шкаф — самый дешёвый путь обычно муниципальный Ecocentro. Для жителей município приём малых объёмов часто бесплатный, но правила и лимиты устанавливает Câmara Municipal или межмуниципальная компания по отходам.' },
        { kind: 'checklist', items: [
          'Найдите “Ecocentro” на сайте своей Câmara Municipal или оператора resíduos urbanos.',
          'Проверьте лимит: в одних муниципалитетах считают мешки, в других — литры, кг или м³.',
          'Возьмите NIF и подтверждение адреса, если Ecocentro принимает только residentes.',
          'Разделите отходы: entulho mineral, madeira, metais, vidro, plástico, cartão, equipamentos eléctricos.',
          'Не смешивайте RCD с красками, маслами, растворителями, amianto.',
          'Перевозите в прочных мешках или caixas; строительная пыль должна быть закрыта.',
          'Сфотографируйте сдачу или сохраните талон Ecocentro, если ремонт в condomínio и нужно доказать вывоз.'
        ] },
        { kind: 'paragraph', text: 'В Лиссабоне Câmara Municipal ориентирует жителей на ecocentros и муниципальные каналы recolha для отдельных потоков. Практический смысл: не пытайтесь договориться с уборщиком дома или оставить мешки ночью — для RCD это не легальная схема.' }
      ]
    },
    {
      id: 'large-renovation',
      title: 'Средний и большой ремонт: licensed transportadora + operador RCD',
      content: [
        { kind: 'paragraph', text: 'Если отходов больше, чем помещается в багажник, или работает empreiteiro, оформляйте вывоз через лицензированную transportadora de resíduos. Она должна отвезти RCD на autorizated operador/aterro RCD: например, региональные системы и операторы вроде Valnor, Tratolixo или другие площадки, указанные в лицензиях APA/SILOGR.' },
        { kind: 'checklist', items: [
          'Попросите у empreiteiro заранее включить gestão de RCD в orçamento.',
          'Проверьте, кто является produtor do resíduo: собственник, contractor или оба по договору.',
          'Закажите big-bag, contentor или carrinha с лицензированной transportadora.',
          'Уточните код LER/EWC отходов: для обычного entulho часто используются строительные коды группы 17, но оператор должен классифицировать сам.',
          'Попросите e-GAR/Guia de Acompanhamento de Resíduos до или в момент перевозки.',
          'Проверьте пункт назначения: aterro RCD, centro de triagem, operador licenciado, а не “знакомый склад”.',
          'Сохраните invoice, e-GAR и comprovativo de receção минимум до конца ремонта; для obras licenciadas это может понадобиться Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'Если перевозчик предлагает “без документов дешевле”, риск остаётся у производителя отходов. При нелегальной свалке могут искать того, у кого был ремонт, по мешкам, адресным наклейкам, камерам condomínio или жалобам соседей.' }
      ]
    },
    {
      id: 'egar-gar',
      title: 'GAR/e-GAR: главный документ на перевозку',
      content: [
        { kind: 'paragraph', text: 'Guia de Acompanhamento de Resíduos сейчас в практике оформляется как e-GAR в системе SILIAMB/APA. Это электронная накладная, которая связывает производителя отходов, перевозчика и принимающего оператора. Для частного человека её обычно оформляет transportadora или contractor, но вы должны попросить копию/номер.' },
        { kind: 'checklist', items: [
          'В e-GAR должны быть produtor, transportador и destinatário.',
          'Должен быть указан тип отходов и примерное количество.',
          'Должна быть дата перевозки и регистрация транспортного средства/перевозчика.',
          'Destinatário должен подтвердить приём отходов.',
          'Если оператор принял меньше/другой тип отходов, просите исправление или объяснение.',
          'Для condominium works передайте копию administração do condomínio, если она требует отчёт.',
          'Для works с licenciamento/comunicação prévia храните документы вместе с processo da obra.'
        ] },
        { kind: 'paragraph', text: 'Для одного-двух мешков, сданных вами лично в Ecocentro, e-GAR обычно не требуется от резидента как от бытового пользователя. Но при коммерческом вывозе RCD документ должен быть частью услуги.' }
      ]
    },
    {
      id: 'prices-and-contract',
      title: 'Сколько стоит и что прописать в договоре 💶',
      content: [
        { kind: 'paragraph', text: 'Рынок сильно зависит от города, этажа, лифта, парковки, веса и типа отходов. Для экспата главный риск — купить “ремонт под ключ”, где вывоз не включён, а потом получить отдельный счёт за entulho.' },
        { kind: 'checklist', items: [
          'Коммерческий вывоз RCD по городу: ориентир 80–200 €/м³ в 2026, если включены мешки/погрузка/транспорт; тяжёлый бетон может считаться дороже.',
          'Big-bag у двери дешевле, но нужно место, разрешение condomínio и иногда licença de ocupação da via pública.',
          'Contentor на улице может требовать autorização da Câmara Municipal и оплату занятия публичного пространства.',
          'Aterro/operador может считать по тоннам; уточняйте, включён ли gate fee в цену.',
          'Подъём/спуск без лифта, узкая лестница, исторический центр, зона с ограниченным доступом — отдельная надбавка.',
          'Опасные отходы, amianto, загрязнённые материалы — отдельная услуга и другой ценник.',
          'В orçamento напишите: “inclui remoção, transporte licenciado, destino final autorizado e emissão de e-GAR”.'
        ] },
        { kind: 'warning', text: 'Не оплачивайте весь вывоз наличными без recibo/fatura и без e-GAR, если объём не “малый Ecocentro”. Дешёвый нелегальный вывоз может стать дорогим штрафом и проблемой при продаже квартиры или споре с condomínio.' }
      ]
    },
    {
      id: 'condominium-and-street',
      title: 'Condomínio, улица и соседи: не забудьте разрешения',
      content: [
        { kind: 'paragraph', text: 'Даже если отходы вывезены легально, можно нарушить правила дома или муниципалитета: шум, лифт, складирование в подъезде, ocupação da via pública. В старых домах Лиссабона и Порту это частая причина конфликтов.' },
        { kind: 'checklist', items: [
          'Сообщите administração do condomínio даты работ и вывоза.',
          'Уточните, можно ли использовать лифт для мешков RCD и нужна ли защита кабины.',
          'Не храните мешки в общих коридорах, на лестнице и у входа: это пожарный и санитарный риск.',
          'Если нужен contentor на улице, проверьте licença/ocupação de via pública в Câmara Municipal.',
          'Согласуйте horários de ruído: строительный шум в жилых домах обычно ограничен рабочими днями и дневным временем по муниципальным правилам.',
          'Попросите empreiteiro убирать пыль в common areas ежедневно.',
          'После вывоза сохраните фото “до/после” и документы, чтобы закрыть претензии соседей.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Малые DIY-отходы в муниципальный Ecocentro', amountEUR: 0, note: 'Часто бесплатно для жителей município; лимиты и принимаемые фракции зависят от Câmara Municipal.' },
    { label: 'Коммерческий вывоз RCD licensed transportadora', amountEURMin: 80, amountEURMax: 200, note: 'Ориентир за м³ в 2026 для обычного entulho; зависит от города, веса, этажа, погрузки и доступа.' },
    { label: 'Big-bag/contentor и размещение на улице', amountEURMin: 30, amountEURMax: 150, note: 'Может добавляться к вывозу; если занимает via pública, Câmara Municipal может требовать разрешение и сбор.' }
  ],
  sources: [
    { title: 'APA — resíduos de construção e demolição и правила gestão de resíduos', url: 'https://www.apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ecocentros, recolha и resíduos urbanos', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Geral de Gestão de Resíduos — Decreto-Lei 102-D/2020', url: 'https://dre.pt/dre/detalhe/decreto-lei/102-d-2020-150908012', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 145/2017 — Guia Eletrónica de Acompanhamento de Resíduos e-GAR', url: 'https://dre.pt/dre/detalhe/portaria/145-2017-106939482', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
