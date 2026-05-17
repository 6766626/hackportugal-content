export default {
  editorialVoice: 'hackportugal',
  id: 'universidade-senior',
  categoryId: 'daily_life',
  title: 'Universidade Sénior — образование для пенсионеров',
  tldr: 'Universidade Sénior — португальский формат U3A: дневные курсы для людей старшего возраста без экзаменов и дипломов. По стране работают 200+ таких школ, многие входят в сеть RUTIS и запускаются Câmaras Municipais, Juntas de Freguesia, IPSS или ассоциациями. Типичная цена в 2026 году: inscrição 10–30 € и mensalidade 30–50 € за много занятий: línguas, cultura, informática, dança, artes, saúde. Запись обычно через Câmara/Junta или напрямую в secretaria школы.',
  tags: ['senior', 'образование', 'câmara', 'rutis'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Universidade Sénior',
      content: [
        { kind: 'paragraph', text: 'Universidade Sénior — это не университет в академическом смысле, а местный образовательный и социальный проект для людей старшего возраста. Формат похож на U3A: занятия ради общения, активности и обучения, без вступительных экзаменов, оценок и официальной степени.' },
        { kind: 'paragraph', text: 'В Португалии такие школы часто работают при Câmara Municipal, Junta de Freguesia, IPSS, misericórdia, associação cultural или parish/social centre. Часть входит в RUTIS — Rede de Universidades Seniores, крупнейшую сеть таких проектов.' },
        { kind: 'checklist', items: [
          'обычный возраст входа — 50+, 55+ или 60+; точный порог задаёт конкретная школа',
          'статус пенсионера часто НЕ обязателен: важнее возраст и наличие мест',
          'занятия идут днём, обычно с сентября/октября по июнь/июль',
          'нет диплома nível superior и нет академических ECTS',
          'цель — обучение, социализация, профилактика изоляции, активное старение',
          'для иностранцев это хороший способ практиковать португальский и войти в местное сообщество'
        ] }
      ]
    },
    {
      id: 'subjects-and-language',
      title: 'Что обычно преподают 📚',
      content: [
        { kind: 'paragraph', text: 'Набор предметов зависит от муниципалитета. В маленьких городах расписание может быть компактным, в Лиссабоне, Порту, Коимбре, Браге и Алгарве выбор обычно шире. Преподаватели часто работают на волонтёрской основе или по муниципальной программе.' },
        { kind: 'checklist', items: [
          'línguas: português, inglês, espanhol, francês',
          'informática: смартфон, email, Segurança Social Direta, Finanças, MB WAY',
          'cultura portuguesa: история, литература, música, cinema',
          'artes: pintura, cerâmica, fotografia, teatro, canto coral',
          'dança и movimento: ginástica, yoga, pilates, dança tradicional',
          'saúde: alimentação, memória, bem-estar, prevenção de quedas',
          'cidadania: права пожилых, доступ к SNS, serviços públicos',
          'экскурсии, visitas de estudo, концерты, праздники и межмуниципальные встречи'
        ] },
        { kind: 'warning', text: 'Если ваш португальский пока слабый, заранее спросите про turmas de português para estrangeiros или предметы, где язык менее критичен: dança, artes, ginástica, música. Английский как язык общения не гарантирован.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Как найти ближайшую школу',
      content: [
        { kind: 'paragraph', text: 'Начинайте с RUTIS и сайта вашей Câmara Municipal. Если в municipio нет отдельной Universidade Sénior, похожая программа может называться Academia Sénior, Universidade da Terceira Idade, Espaço Sénior, Programa Envelhecimento Ativo или Atividades Sénior.' },
        { kind: 'checklist', items: [
          'откройте rutis.pt и проверьте список/контакты Rede de Universidades Seniores',
          'на сайте Câmara Municipal ищите “universidade sénior”, “academia sénior”, “envelhecimento ativo”',
          'спросите в Junta de Freguesia по адресу проживания',
          'проверьте IPSS, centro social, misericórdia и associação recreativa в вашей freguesia',
          'посмотрите Facebook-страницы Câmara/Junta: расписания часто публикуют там раньше, чем на сайте',
          'позвоните в secretaria и спросите: idade mínima, mensalidade, horários, documentos, vagas',
          'если мест нет — попросите поставить в lista de espera на следующий semestre/ano letivo'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Запись через Câmara, Junta или secretaria',
      content: [
        { kind: 'paragraph', text: 'Регистрация обычно офлайн: в secretaria Universidade Sénior, balcão da Câmara Municipal, Junta de Freguesia или офисе IPSS. Онлайн-форма бывает, но не везде. Набор чаще открывается в июне–сентябре на новый учебный год; свободные места могут появляться в январе.' },
        { kind: 'checklist', items: [
          'documento de identificação: паспорт, Cartão de Cidadão или ВНЖ',
          'NIF — часто нужен для ficha de inscrição и recibo',
          'comprovativo de morada: счёт, договор аренды, atestado de residência или документ от Junta',
          'контактный телефон и email',
          'фото tipo passe — иногда просят для cartão de aluno',
          'список выбранных дисциплин или horário pretendido',
          'медицинская информация для ginástica/dança — только если школа требует',
          'оплата inscrição и первого месяца, обычно наличными, Multibanco или transferência'
        ] },
        { kind: 'warning', text: 'Не все школы принимают людей из соседнего município по той же цене. Муниципальные проекты могут давать приоритет residentes da freguesia/concelho и просить comprovativo de morada.' }
      ]
    },
    {
      id: 'costs-and-expectations',
      title: 'Сколько стоит и чего ожидать в 2026',
      content: [
        { kind: 'paragraph', text: 'Типичная модель — небольшой ежегодный регистрационный взнос плюс mensalidade. В 2026 году для обычных муниципальных/ассоциативных школ реалистичный диапазон — 30–50 € в месяц за доступ к нескольким или “безлимитным” занятиям по расписанию. В некоторых Câmaras цена ниже или символическая, если программа финансируется муниципалитетом.' },
        { kind: 'checklist', items: [
          'inscrição обычно платится один раз в год',
          'mensalidade может не взиматься в августе, если занятий нет',
          'материалы для pintura, cerâmica, fotografia и excursões часто оплачиваются отдельно',
          'занятия могут отменяться при нехватке учеников или преподавателя',
          'волонтёрский формат означает меньше бюрократии, но и меньше “сервисности”, чем в частной школе',
          'расписание меняется каждый год: сохраняйте контакты secretaria',
          'если вы уезжаете на несколько месяцев, спросите про suspensão da mensalidade'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição anual', amountEURMin: 10, amountEURMax: 30, note: 'Разовый взнос при записи; в муниципальных проектах может быть 0 € или символическая сумма.' },
    { label: 'Mensalidade', amountEURMin: 30, amountEURMax: 50, note: 'Типичный диапазон за месяц в 2026 году за несколько дисциплин или “безлимит” по расписанию школы.' },
    { label: 'Материалы и выезды', amountEURMin: 5, amountEURMax: 40, note: 'Оплачиваются отдельно: pintura, cerâmica, fotografia, visitas de estudo, транспорт, билеты.' }
  ],
  sources: [
    { title: 'RUTIS — Rede de Universidades Seniores', url: 'https://rutis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — поиск социальных учреждений и IPSS', url: 'https://www.cartasocial.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — enquadramento das IPSS', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
