export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão — удостоверение гражданина Португалии (иностранцам — Título de Residência)',
  tldr: 'Cartão de Cidadão (CC) — национальное удостоверение личности гражданина Португалии; принимается как travel document в ЕС/ЕЭЗ/Швейцарии и ряде стран. Связывает гражданские, налоговые (NIF), соцстраховые (NISS) и SNS (utente) идентификаторы, если они присвоены. Иностранные резиденты обычно получают Título de Residência (карточку ВНЖ) — это подтверждение права проживания, но не полный аналог CC: нет голосования, нет CC-eID/цифровой подписи. Замена/продление — в IRN или Loja de Cidadão.',
  tags: ['cc', 'документы', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Кто получает CC',
      content: [
        { kind: 'checklist', items: [
          'Граждане Португалии (обязательно с 20-го дня после регистрации рождения)',
          'Новорождённые граждане PT: CC можно запросить сразу через сервис Nascer Cidadão при регистрации рождения',
          'Иностранные резиденты обычно не получают CC — их основной документ Título de Residência (право проживания), он не полный аналог CC',
          'Отдельные исключения: граждане Бразилии со статусом равенства прав (Estatuto de Igualdade) могут получить CC'
        ]},
        { kind: 'warning', text: 'Если вы натурализовались → после регистрации в Registo Civil можно запросить CC. Процесс описан ниже.' }
      ]
    },
    {
      id: 'functions',
      title: 'Функции CC',
      content: [
        { kind: 'checklist', items: [
          'Удостоверение личности гражданина PT; принимается как travel document для поездок в ЕС/ЕЭЗ/Швейцарию и ряд стран. За пределы этих режимов — нужен паспорт',
          'Содержит/связывает NIF (налоговый номер), если присвоен',
          'Содержит/связывает NISS (номер социального страхования), если присвоен',
          'Содержит/связывает Número de Utente (номер пациента SNS), если присвоен',
          'Биометрический: фото; отпечатки пальцев — с установленного законом возраста (с 12 лет по Regulamento UE 2019/1157)',
          'Чип для цифровой подписи (требует USB-ридер или телефон с NFC) при активных сертификатах',
          'PIN для активации',
          'Голосование на выборах (для граждан Португалии)',
          'Идентификация в кооперативах, библиотеках, школах'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'Первое получение',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Для новорождённых', content: [
            { kind: 'paragraph', text: 'CC можно запросить отдельно при регистрации рождения, часто сразу через Nascer Cidadão / Conservatória. Для гражданина PT документ обязателен с 20-го дня после регистрации рождения. Срок действия CC до 25 лет — 5 лет.' }
          ]},
          { id: 'f2', title: 'Для натурализованных граждан', content: [
            { kind: 'paragraph', text: 'После завершения процесса гражданства и регистрации в Registo Civil можно запросить первый CC в IRN/Loja de Cidadão/консульстве. Срок изготовления зависит от типа заказа: normal, urgente, extremamente urgente — и места получения.' }
          ]}
        ]}
      ]
    },
    {
      id: 'renew',
      title: 'Продление / замена',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Когда продлевать', content: [
            { kind: 'paragraph', text: 'Срок действия: 5 лет для граждан младше 25 лет; 10 лет для граждан от 25 лет. За 6 мес до истечения — запись на продление.' }
          ]},
          { id: 'r2', title: 'Как', content: [
            { kind: 'paragraph', text: 'Записаться через ePortugal/IRN, выбрать доступный balcão IRN/Loja de Cidadão/Espaço Cidadão (если конкретная услуга там доступна). При обычном продлении обычно нужен текущий CC и PIN-letter; подтверждение адреса нужно, если меняете адрес или орган его запросит.\n\nСрок изготовления зависит от типа заказа (normal/urgente/extremamente urgente) и места выдачи.' }
          ]},
          { id: 'r3', title: 'Потеря / кража', content: [
            { kind: 'paragraph', text: 'Срочно отменить (cancelar) CC и цифровые сертификаты через ePortugal/Autenticação.gov или Linha Cartão de Cidadão. При краже — подать заявление в полицию (PSP/GNR)\.\n\nЗатем запросить новый CC в IRN/Loja de Cidadão/консульстве по применимому тарифу (normal/urgente/extremamente urgente)\.\n\nПолицейский протокол не обязателен при простой потере, но важен при краже.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'Цифровая сторона CC',
      content: [
        { kind: 'paragraph', text: 'CC можно использовать для autenticação.gov и входа во многие государственные сервисы при активных сертификатах и наличии PIN, ридера или совместимого телефона с NFC. Для части сервисов могут быть доступны/требоваться альтернативы (CMD, собственный логин).' },
        { kind: 'paragraph', text: 'Иностранцы обычно используют Chave Móvel Digital (CMD): для активации нужны NIF и действительный документ/карта резидента; доступные способы активации зависят от ситуации. CMD покрывает большинство e-government логинов, но не является физическим удостоверением личности.' }
      ]
    }
  ],
  costs: [
    { label: 'Граждане младше 25 лет (normal, в Португалии)', amountEUR: 15 },
    { label: 'Граждане от 25 лет (normal, в Португалии)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Urgente (от 3 рабочих дней, в Португалии)', amountEUR: 33 },
    { label: 'Extremamente urgente (зависит от места и времени подачи)', amountEUR: 53 },
    { label: 'Онлайн-скидка при онлайн-продлении', amountEUR: 0, note: 'обычно −10%' },
    { label: 'Замена после потери/кражи', amountEUR: 0, note: 'тариф = новый pedido normal/urgente по возрасту, а не фиксированная плоская ставка' }
  ],
  sources: [
    { title: 'ePortugal — Cartão de Cidadão (pedir/renovar/cancelar)', url: 'https://eportugal.gov.pt/servicos/pedir-o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão (serviço)', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Cartão de Cidadão', url: 'https://www.autenticacao.gov.pt/o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Regulamento (UE) 2019/1157 — биометрия eID', url: 'https://eur-lex.europa.eu/eli/reg/2019/1157/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}