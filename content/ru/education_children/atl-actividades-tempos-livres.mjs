export default {
  editorialVoice: 'hackportugal',
  id: 'atl-actividades-tempos-livres',
  categoryId: 'education_children',
  title: 'ATL и CAF: продлёнка для школьников 6–10 лет в Португалии',
  tldr: 'Для 1.º ciclo, 1–4 классы, после уроков обычно есть бесплатные AEC и платная/льготная CAF/ATL: присмотр утром, обед, конец дня и каникулы. Запись часто открывается вместе с matrícula/renovação на portal-matriculas.gov.pt весной-летом 2026, но правила и цены задаёт município или IPSS. Семьи с escalão A/B da Ação Social Escolar обычно платят меньше или 0 €; социальные случаи и дети с особыми потребностями имеют приоритет.',
  tags: ['atl', 'caf', 'школа', 'обед', 'ase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-atl',
      title: 'Что такое ATL, CAF и AEC',
      content: [
        { kind: 'paragraph', text: 'В начальной школе Португалии день ребёнка делится на обязательные уроки и дополнительные сервисы. Родители часто называют всё «ATL», но юридически и организационно это могут быть разные вещи.' },
        { kind: 'checklist', items: [
          'AEC — Atividades de Enriquecimento Curricular: бесплатные необязательные занятия после уроков в 1.º ciclo, например inglês, atividade física, música, artes.',
          'CAF — Componente de Apoio à Família: присмотр до уроков, после AEC, в обеденный перерыв и иногда в школьные каникулы.',
          'ATL — Atividades de Tempos Livres: более широкое название продлёнки; часто её ведёт IPSS, associação de pais, Santa Casa, Junta de Freguesia или частный оператор.',
          'Refeições escolares — школьный обед; обычно оформляется отдельно через município/школьный портал, но часто в том же пакете заявлений.',
          'Transportes escolares — школьный транспорт; правила зависят от distância casa-escola, возраста и муниципалитета.',
          'Для детей 6–10 лет ключевой сервис — CAF/ATL, потому что уроки и AEC обычно заканчиваются раньше рабочего дня родителей.'
        ] }
      ]
    },
    {
      id: 'where-to-enrol',
      title: 'Где записывать ребёнка 📝',
      content: [
        { kind: 'paragraph', text: 'Первый вход — Portal das Matrículas. На 2026 год это основной государственный портал для matrícula и renovação de matrícula. При подаче или обновлении записи в школу проверьте разделы про Ação Social Escolar, refeições, transportes и atividades de apoio à família. Но сама оплата и окончательное подтверждение места часто идут уже через município, agrupamento de escolas или IPSS.' },
        { kind: 'substeps', items: [
          { id: 'portal', title: '1. Portal das Matrículas', content: [
            { kind: 'checklist', items: [
              'Зайдите через autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão или данные представителя.',
              'Выберите matrícula/renovação для 1.º ciclo.',
              'Проверьте, есть ли пункты Ação Social Escolar, refeições, transportes, AAAF/CAF или atividades.',
              'Загрузите документы, если портал или школа их запрашивает.',
              'Сохраните comprovativo da matrícula — его могут попросить в município или IPSS.'
            ] }
          ] },
          { id: 'municipio', title: '2. Município или Agrupamento de Escolas', content: [
            { kind: 'paragraph', text: 'После подачи на портале зайдите на сайт Câmara Municipal по месту школы. У многих муниципалитетов есть отдельный «Portal da Educação» для обедов, CAF/ATL, транспорта и оплат.' }
          ] },
          { id: 'operator', title: '3. IPSS / associação / ATL', content: [
            { kind: 'paragraph', text: 'Если продлёнку ведёт IPSS или associação de pais, у них может быть своя форма, договор, mensalidade и список документов. Не ждите автоматического зачисления только потому, что вы указали интерес в Portal das Matrículas.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы и данные, которые обычно просят',
      content: [
        { kind: 'paragraph', text: 'Единого национального списка нет: школа и município могут просить разные документы. Для экспатов важно заранее собрать португальские идентификаторы ребёнка и родителей.' },
        { kind: 'checklist', items: [
          'NIF ребёнка и encarregado de educação.',
          'Documento de identificação ребёнка: паспорт, Cartão de Cidadão или ВНЖ, если уже есть.',
          'Данные родителей/опекуна: NIF, адрес, телефон, email.',
          'Comprovativo de morada: contrato de arrendamento, счёт коммунальных услуг или atestado de residência от Junta de Freguesia.',
          'Comprovativo do agregado familiar из Finanças или Segurança Social, если просят для льгот.',
          'Escalão do abono de família: A, B или другой — влияет на Ação Social Escolar.',
          'NISS ребёнка/родителя, если он уже есть; не всегда обязателен, но часто нужен для Segurança Social и льгот.',
          'Declaração médica или informação de saúde: аллергии, лекарства, ограничения питания.',
          'IBAN или autorização de débito direto, если município списывает оплату автоматически.',
          'Контакты лиц, которым разрешено забирать ребёнка из ATL/CAF.'
        ] },
        { kind: 'warning', text: 'Если семья только приехала и ещё не имеет escalão do abono de família, не откладывайте запись в ATL. Подайте заявление с доступными документами и параллельно оформляйте NISS/Segurança Social. Попросите школу или município рассмотреть situação socioeconómica — в некоторых местах возможна временная оценка социальной службой.' }
      ]
    },
    {
      id: 'priority-and-costs',
      title: 'Кто получает приоритет и сколько стоит',
      content: [
        { kind: 'paragraph', text: 'AEC в государственных школах бесплатные. CAF/ATL и обеды могут быть бесплатными или платными — зависит от município, оператора и escalão da Ação Social Escolar. Национальная логика такая: семьи с меньшим доходом получают больше поддержки, но конкретная tabela de preços публикуется муниципалитетом.' },
        { kind: 'checklist', items: [
          'Приоритет обычно получают дети с escalão A/B da Ação Social Escolar.',
          'Социальные случаи, отмеченные Comissão de Proteção de Crianças e Jovens, Segurança Social или школьной социальной службой, рассматриваются приоритетно.',
          'Дети с deficiência, necessidades específicas или медицинскими ограничениями могут иметь дополнительный приоритет и адаптацию.',
          'Дети, уже посещающие тот же agrupamento, часто имеют преимущество при продлении.',
          'Работающие родители могут получить приоритет в CAF, но это правило не национальное — смотрите regulamento municipal.',
          'Обед для escalão A обычно бесплатный; для escalão B часто оплачивается 50%; без льготы платится полная муниципальная цена.',
          'CAF/ATL может стоить 0 € для escalão A, льготную сумму для escalão B и полную mensalidade для остальных.',
          'Каникулы, manhãs/tardes extras и продлённый horário могут тарифицироваться отдельно.'
        ] },
        { kind: 'warning', text: 'Не путайте AEC и ATL. Если вам нужен присмотр до 18:30–19:00, одних бесплатных AEC почти никогда недостаточно: они закрывают только часть дня. Уточняйте horário de funcionamento CAF/ATL до подписания договора.' }
      ]
    },
    {
      id: 'practical-timing',
      title: 'Практический календарь на 2026',
      content: [
        { kind: 'paragraph', text: 'Точные даты matrícula и renovação ежегодно публикуют Ministério da Educação и Portal das Matrículas. На практике для 1.º ciclo запись и обновление идут весной-летом; муниципальные заявки на обеды, транспорт и CAF/ATL часто открываются сразу после школьной matrícula или в июне-июле.' },
        { kind: 'checklist', items: [
          'Апрель–май: проверьте сроки matrícula/renovação на portal-matriculas.gov.pt и сайт вашего agrupamento.',
          'Май–июнь: подайте matrícula или renovação; сохраните comprovativo.',
          'Июнь–июль: откройте сайт Câmara Municipal и подайте заявки на refeições, transportes, CAF/ATL.',
          'Июль–август: подпишите договор с IPSS/associação, если продлёнка не муниципальная.',
          'До начала сентября: проверьте horário, цену, способ оплаты, список разрешённых лиц для pickup.',
          'Первая неделя школы: подтвердите у professora titular и координатора ATL, где ребёнок обедает и куда идёт после уроков.'
        ] },
        { kind: 'warning', text: 'Места в ATL рядом с популярными школами заканчиваются быстро. Если вы переезжаете в Португалию летом, пишите одновременно в agrupamento, Câmara Municipal и ближайшие IPSS — не ждите получения ВНЖ, если у ребёнка уже есть NIF, адрес и школьная matrícula.' }
      ]
    },
    {
      id: 'questions-to-ask',
      title: 'Что спросить перед оплатой',
      content: [
        { kind: 'paragraph', text: 'Перед тем как соглашаться на конкретный ATL/CAF, задайте вопросы письменно. Это особенно важно, если ребёнок ещё плохо говорит по-португальски.' },
        { kind: 'checklist', items: [
          'До какого времени ребёнок находится под присмотром: 17:30, 18:30 или 19:00?',
          'Входит ли almoço в цену или оплачивается отдельно через município?',
          'Есть ли lanche после уроков и кто его приносит?',
          'Работает ли ATL в interrupções letivas: Рождество, Карнавал, Пасха, летние каникулы?',
          'Какая mensalidade для вашего escalão ASE и есть ли taxa de inscrição?',
          'Как сообщать об отсутствии ребёнка, чтобы не платить за обед?',
          'Кто помогает с домашними заданиями и есть ли apoio ao estudo?',
          'Есть ли сотрудники, говорящие по-английски, и как поддерживают детей-иммигрантов?',
          'Как оформляется autorização de saída и список людей, которые могут забирать ребёнка?',
          'Что происходит при забастовке школы или закрытии столовой?'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AEC в государственной школе', amountEUR: 0, note: 'Бесплатные необязательные занятия 1.º ciclo; не заменяют полный ATL до вечера.' },
    { label: 'Школьный обед, escalão A', amountEUR: 0, note: 'Обычно бесплатно в рамках Ação Social Escolar; подтверждается município/agrupamento.' },
    { label: 'Школьный обед, escalão B', amountEURMin: 0.7, amountEURMax: 0.9, note: 'Часто около 50% полной цены; точная сумма зависит от муниципального тарифа.' },
    { label: 'CAF/ATL муниципальный или IPSS', amountEURMin: 0, amountEURMax: 80, note: 'Типичный диапазон для льготных/муниципальных программ; частные ATL могут быть дороже.' },
    { label: 'Частный ATL без льгот', amountEURMin: 100, amountEURMax: 250, note: 'Ориентир для больших городов; каникулы и питание часто оплачиваются отдельно.' }
  ],
  sources: [
    { title: 'Direção-Geral da Educação — Atividades de Enriquecimento Curricular и 1.º ciclo', url: 'https://www.dge.mec.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal do Governo — Portal das Matrículas и serviços da educação', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Matrículas — matrícula e renovação online', url: 'https://portaldasmatriculas.edu.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
