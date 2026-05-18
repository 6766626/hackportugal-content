export default {
  editorialVoice: 'hackportugal',
  id: 's1-form-uk-pensioner',
  categoryId: 'healthcare',
  title: 'Форма S1 для британских пенсионеров: доступ к SNS в Португалии',
  tldr: 'S1 — документ, по которому UK оплачивает ваше государственное медобслуживание в Португалии, если вы получаете UK State Pension или некоторые exportable benefits.\n\nВ 2026 году его запрашивают в NHS Business Services Authority, затем регистрируют в Segurança Social в Португалии и идут в Centro de Saúde за número de utente SNS. Форма бесплатная; частные клиники и страховку S1 не покрывает.',
  tags: ['s1', 'sns', 'uk', 'пенсия'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-use',
      title: 'Кому подходит S1',
      content: [
        { kind: 'paragraph', text: 'S1 нужен британским пенсионерам и некоторым получателям британских пособий, которые живут в Португалии и хотят пользоваться SNS на тех же условиях, что и резиденты Португалии. Расходы по государственному лечению оплачивает UK, но обслуживание идёт через португальскую систему.' },
        { kind: 'checklist', items: [
          'Вы получаете UK State Pension — самый частый сценарий.',
          'Или получаете определённые exportable benefits из UK, дающие право на S1.',
          'Вы переезжаете жить в Португалию или уже являетесь резидентом Португалии.',
          'Вы не работаете в Португалии как empregado/recibos verdes с обычными взносами в Segurança Social.',
          'У вас есть легальное основание проживания: ВНЖ AIMA, residence card по Withdrawal Agreement или другой действующий статус.',
          'S1 может покрывать некоторых dependants, но это проверяется NHS BSA индивидуально.',
          'Если вы ещё не достигли UK State Pension age, одного факта “частной пенсии” обычно недостаточно.'
        ] },
        { kind: 'warning', text: 'S1 не является визой, ВНЖ, NIF или частной страховкой. Он только подтверждает, кто оплачивает ваше государственное здравоохранение после регистрации в Португалии.' }
      ]
    },
    {
      id: 'request-from-uk',
      title: '1. Запросите S1 в NHS BSA 🇬🇧',
      content: [
        { kind: 'paragraph', text: 'Форму выдаёт NHS Business Services Authority, отдел Overseas Healthcare Services. Запрашивать S1 нужно у UK, а не в Portuguese SNS. Обычно это делают после принятого решения о переезде или уже после прибытия, когда понятен адрес в Португалии.' },
        { kind: 'checklist', items: [
          'Свяжитесь с NHS Overseas Healthcare Services через контакты на GOV.UK.',
          'Подготовьте National Insurance number.',
          'Укажите дату переезда или дату начала проживания в Португалии.',
          'Укажите португальский адрес, если он уже есть.',
          'Сообщите данные супруга/партнёра и dependants, если хотите проверить их право на покрытие.',
          'Проверьте, что имя в S1 совпадает с паспортом и португальскими документами.',
          'Сохраните оригинал S1 и сделайте сканы: Segurança Social часто забирает или штампует копии.'
        ] },
        { kind: 'paragraph', text: 'Сроки зависят от NHS BSA и почты. На практике закладывайте несколько недель, особенно если требуется проверка dependants или адреса.' }
      ]
    },
    {
      id: 'register-social-security',
      title: '2. Зарегистрируйте S1 в Segurança Social 🇵🇹',
      content: [
        { kind: 'paragraph', text: 'После получения S1 его нужно зарегистрировать в Instituto da Segurança Social в Португалии. Без этой регистрации Centro de Saúde может отказать в полноценной записи в SNS как S1-holder.' },
        { kind: 'checklist', items: [
          'Запишитесь или придите в serviço de atendimento da Segurança Social по месту проживания.',
          'Возьмите оригинал S1 и копию.',
          'Паспорт UK.',
          'Документ проживания: ВНЖ AIMA, cartão de residência по Withdrawal Agreement или другой действующий документ.',
          'NIF.',
          'Подтверждение адреса: договор аренды, счёт коммунальных услуг или atestado de residência от Junta de Freguesia.',
          'Если есть супруг/dependants — их документы и отдельные S1, если NHS BSA выдала их отдельно.',
          'Попросите подтверждение регистрации S1 или stamped copy для Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'Не путайте регистрацию S1 с обычными взносами Segurança Social. S1-пенсионер обычно не платит португальские social security contributions только из-за доступа к SNS. Но если вы начинаете работать в Португалии, правила покрытия могут измениться.' }
      ]
    },
    {
      id: 'get-utente',
      title: '3. Получите número de utente в Centro de Saúde',
      content: [
        { kind: 'paragraph', text: 'После Segurança Social идите в Centro de Saúde по адресу проживания. Там вас регистрируют в SNS и присваивают número de utente — номер пациента SNS.' },
        { kind: 'checklist', items: [
          'Подтверждение регистрации S1 в Segurança Social.',
          'Паспорт.',
          'ВНЖ/карта резидента.',
          'NIF.',
          'Подтверждение адреса в зоне Centro de Saúde.',
          'Контакты: португальский телефон и email.',
          'Список текущих лекарств и диагнозов — полезно для первого приёма.',
          'Если есть NHS medical summary, возьмите распечатку или PDF на английском.'
        ] },
        { kind: 'paragraph', text: 'После регистрации вы пользуетесь SNS как местный резидент: семейный врач при наличии мест, направления к специалистам, рецепты, анализы, госпитализация. Очереди и доступность зависят от района; Лиссабон, Cascais, Algarve и Porto часто перегружены.' }
      ]
    },
    {
      id: 'what-covered',
      title: 'Что покрывает и не покрывает S1',
      content: [
        { kind: 'checklist', items: [
          'Покрывает лечение в SNS: Centro de Saúde, государственные больницы, направления, часть рецептурных лекарств.',
          'Даёт доступ на тех же условиях, что и у жителей Португалии, а не “британский private healthcare”.',
          'Не покрывает частные клиники, если они не работают по договору с SNS по конкретному направлению.',
          'Не заменяет travel insurance для поездок, репатриации, отмены рейсов и частной медицины.',
          'Не означает автоматического получения семейного врача — в некоторых районах есть очередь.',
          'Не покрывает уход в доме престарелых, бытовую помощь и long-term care автоматически.',
          'Для поездок за пределы Португалии проверьте право на UK-issued GHIC/EHIC через NHS BSA.',
          'При переезде из Португалии в другую страну нужно заново проверить S1 и регистрацию.'
        ] },
        { kind: 'paragraph', text: 'В SNS большинство обычных пользовательских сборов отменены, но в отдельных случаях, например urgência без направления SNS 24/INEM/семейного врача, могут применяться taxas moderadoras. Льготы на лекарства зависят от препарата и режима comparticipação.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Частые проблемы и как их решать',
      content: [
        { kind: 'checklist', items: [
          'Centro de Saúde просит “NISS”: объясните, что вы регистрируетесь как S1-holder, и покажите подтверждение Segurança Social.',
          'S1 ещё не пришёл: временно используйте частную страховку или платный доступ; экстренная помощь через 112/SNS остаётся доступной.',
          'Адрес изменился: обновите адрес в Finanças, Segurança Social и Centro de Saúde.',
          'Супруг младше пенсионного возраста: не предполагайте автоматическое покрытие — уточните у NHS BSA.',
          'Вы начали работать в Португалии: сообщите NHS BSA и Segurança Social, потому что страна, ответственная за healthcare cover, может измениться.',
          'В Centro de Saúde нет семейного врача: просите inscrição sem médico de família и используйте SNS 24 для triagem и направлений.',
          'Документы на английском: обычно S1 принимают без перевода, но на местах могут попросить копии и подтверждение адреса на португальском.'
        ] },
        { kind: 'warning', text: 'Не откладывайте S1 до серьёзной болезни. Регистрация в Segurança Social и SNS может занять время, а частная медицина в Португалии быстро становится дорогой при госпитализации или хроническом лечении.' }
      ]
    }
  ],
  costs: [
    { label: 'Выдача формы S1 NHS BSA', amountEUR: 0, note: 'Бесплатно; возможны только расходы на звонки/почту.' },
    { label: 'Регистрация S1 в Segurança Social', amountEUR: 0, note: 'Государственная регистрация бесплатна.' },
    { label: 'Регистрация número de utente в SNS', amountEUR: 0, note: 'В Centro de Saúde бесплатно.' },
    { label: 'Частная страховка на период ожидания', amountEURMin: 30, amountEURMax: 150, note: 'Ориентир в месяц для пожилого человека сильно зависит от возраста, франшизы и исключений.' }
  ],
  sources: [
    {
      title: 'GOV.UK: Healthcare in Portugal, including Madeira',
      url: 'https://www.gov.uk/guidance/healthcare-in-portugal-including-madeira',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'NHS Business Services Authority: Overseas Healthcare Services',
      url: 'https://www.nhsbsa.nhs.uk/contact-us/overseas-healthcare-services-contact-us',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: inscrição e acesso ao Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Blevins Franks: The S1 form for healthcare in Portugal',
      url: 'https://www.blevinsfranks.com/the-s1-form/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
