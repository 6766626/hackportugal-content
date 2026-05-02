export default {
  editorialVoice: 'hackportugal',
  id: 'om-enfermeiros-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Enfermeiros: как иностранной медсестре легально работать в Португалии',
  tldr: 'Медсестра в Португалии — регулируемая профессия: одного диплома и ВНЖ недостаточно. Типовой путь для диплома из-за рубежа в 2026: сделать Reconhecimento Específico диплома медсестры в португальском публичном вузе по DL 66/2018, подтвердить португальский минимум C1, собрать справки и подать inscrição в Ordem dos Enfermeiros через Balcão Único. Без активной регистрации в OE работать enfermeiro/enfermeira нельзя.',
  tags: ['enfermagem', 'oe', 'диплом', 'работа'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-oe',
      title: 'Зачем нужна Ordem dos Enfermeiros',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Enfermeiros (OE) — профессиональная палата медсестёр. В Португалии enfermeiro/enfermeira — регулируемая профессия: работодатель в SNS, частной клинике, доме престарелых или agência de cuidados может взять вас именно медсестрой только при действующей inscrição в OE.' },
        { kind: 'paragraph', text: 'ВНЖ, NIF, NISS и трудовой договор решают иммиграционную и налоговую часть, но не дают права использовать профессиональный титул “enfermeiro”. Для этого нужен номер cédula profissional / inscrição na Ordem.' },
        { kind: 'warning', text: 'Не путайте работу “cuidador”, “auxiliar de ação médica” или “assistente operacional” с работой медсестрой. Это другие функции и обычно ниже оплата. Выполнение актов enfermeiro без регистрации в OE может создать проблемы и для вас, и для работодателя.' }
      ]
    },
    {
      id: 'check-path',
      title: 'Определите свой путь: ЕС или не ЕС',
      content: [
        { kind: 'paragraph', text: 'OE смотрит не на ваш паспорт, а на происхождение квалификации: где вы получили диплом медсестры и имеете ли право практики в стране выдачи. Самый частый путь для дипломов из Украины, РФ, Беларуси, Бразилии и других стран вне автоматических схем ЕС — академическое reconhecimento в Португалии, затем inscrição в OE.' },
        { kind: 'checklist', items: [
          'Диплом из Португалии: после conclusão do curso подаёте inscrição в OE напрямую.',
          'Диплом из ЕС/ЕЭЗ/Швейцарии: возможна профессиональная процедура признания по правилам ЕС; OE всё равно проверит документы и право практики.',
          'Диплом из третьей страны: обычно нужен Reconhecimento Específico в публичном вузе Португалии по Decreto-Lei 66/2018.',
          'Если уже работали медсестрой за рубежом: заранее запросите certificate of good standing / declaração de não sanção в вашей палате или регуляторе.',
          'Если страна не имеет палаты медсестёр: подготовьте официальное объяснение от компетентного органа или работодателя, что санкций/запрета нет.',
          'Все иностранные документы должны быть легализованы: Apostille Hague или консульская легализация, если страна не в Гаагской конвенции.',
          'Документы не на португальском, английском, французском или испанском часто требуют tradução certificada; для вузов лучше уточнять заранее.'
        ] }
      ]
    },
    {
      id: 'specific-recognition',
      title: '1️⃣ Reconhecimento Específico диплома в публичном вузе',
      content: [
        { kind: 'paragraph', text: 'Reconhecimento Específico — это португальское признание, что ваш иностранный диплом соответствует конкретному циклу/области обучения в Португалии. Для enfermagem его делают через публичные instituições de ensino superior, у которых есть курс Enfermagem. Правовая база — Decreto-Lei 66/2018.' },
        { kind: 'paragraph', text: 'Подача идёт не в OE, а в выбранный вуз. Сроки и комиссии различаются: часть вузов открывает окна подачи, часть принимает круглый год. В реальности закладывайте 3–9 месяцев, особенно если назначат анализ currículo, интервью, exames или дополнительные unidades curriculares.' },
        { kind: 'checklist', items: [
          'Диплом о высшем/среднем профессиональном сестринском образовании — как требует выбранный вуз.',
          'Приложение к диплому с часами, кредитами, дисциплинами и оценками.',
          'Программа курса / syllabus: клиническая практика, фармакология, adult nursing, maternal, pediatrics, mental health и т.д.',
          'Документ о длительности обучения и количестве clinical hours, если это не видно из приложения.',
          'Паспорт или Cartão de Cidadão / título de residência, если уже есть.',
          'Резюме и подтверждения стажа — не всегда обязательны, но помогают при анализе.',
          'Apostille/легализация и certified translations, если применимо.',
          'Квитанция оплаты emolumentos вуза.'
        ] },
        { kind: 'warning', text: 'Не подавайте в OE “просто диплом” без reconhecimento, если ваш диплом не португальский и не проходит отдельный профессиональный режим ЕС. OE, как правило, вернёт вас к академическому признанию, и вы потеряете месяцы.' }
      ]
    },
    {
      id: 'portuguese-c1',
      title: '2️⃣ Португальский язык: готовьте C1',
      content: [
        { kind: 'paragraph', text: 'Для общения с пациентами, врачами и заполнения clinical records OE требует достаточное владение португальским. Практический безопасный ориентир на 2026 год — certificado de língua portuguesa nível C1. Самый узнаваемый вариант — CAPLE DAPLE C1, но OE может принимать и другие документы, если они соответствуют требованиям процедуры.' },
        { kind: 'checklist', items: [
          'Планируйте язык параллельно с reconhecimento: ждать решения вуза и только потом начинать C1 — почти всегда потеря времени.',
          'CAPLE DAPLE C1 проводится не каждый месяц и места заканчиваются; проверяйте calendário CAPLE заранее.',
          'Для работы в больнице нужен не “туристический” Portuguese, а медицинская коммуникация: triagem, medicação, dor, alergias, consentimento, registos.',
          'Если учились на португальском, сохраните справку вуза о языке обучения — она может помочь.',
          'Если вы из Бразилии, язык обычно не главный барьер, но OE всё равно может запросить формальные документы по процедуре.',
          'Английский полезен в частной медицине и Algarve/Lisboa, но не заменяет португальский для OE и SNS.'
        ] },
        { kind: 'warning', text: 'Уровень B2 часто недостаточен для регулируемой медицинской практики. Если вуз или OE в конкретном случае принимает иной документ, это исключение нужно подтверждать письменно до подачи.' }
      ]
    },
    {
      id: 'oe-registration',
      title: '3️⃣ Inscrição в OE через Balcão Único',
      content: [
        { kind: 'paragraph', text: 'После reconhecimento и языкового подтверждения подавайте inscrição na Ordem dos Enfermeiros через Balcão Único. Это онлайн-портал OE для заявлений, загрузки документов, оплаты и отслеживания статуса.' },
        { kind: 'checklist', items: [
          'Создайте доступ в Balcão Único OE и выберите pedido de inscrição.',
          'Загрузите documento de identificação: паспорт, Cartão de Cidadão или título de residência.',
          'Укажите NIF; для работы и выставления налоговых документов он фактически необходим.',
          'Приложите certificado/declaração de Reconhecimento Específico от публичного вуза.',
          'Приложите диплом и приложение к диплому, даже если reconhecimento уже получено.',
          'Приложите certificado de língua portuguesa C1 или другой документ, который OE принимает в вашем случае.',
          'Приложите certificado de registo criminal, если требуется в актуальной форме OE.',
          'Приложите certificate of good standing / declaração profissional из страны, где вы были зарегистрированы медсестрой.',
          'Оплатите emolumentos OE и ждите análise do processo.',
          'После одобрения получите inscrição/cédula и только тогда подписывайте договор именно как enfermeiro/enfermeira.'
        ] },
        { kind: 'paragraph', text: 'Срок зависит от полноты документов. Если OE делает pedido de elementos adicionais, отвечайте быстро и одним пакетом: неполные ответы перезапускают переписку. Сохраняйте PDF-квитанции, emails и номер processo.' }
      ]
    },
    {
      id: 'employment-reality',
      title: 'После регистрации: работа, договор и статус',
      content: [
        { kind: 'paragraph', text: 'С активной inscrição в OE можно искать работу в SNS, hospitais privados, clínicas, lares, cuidados continuados, saúde ocupacional, home care. Для трудового договора потребуются NIF, NISS, банковский IBAN, адрес и легальный статус проживания/работы.' },
        { kind: 'checklist', items: [
          'Для наёмной работы работодатель оформляет Segurança Social; NISS нужен до начала или в первые дни процесса.',
          'Для prestação de serviços / recibos verdes вы открываете atividade в Finanças и платите Segurança Social как trabalhador independente.',
          'Проверяйте, указан ли в договоре титул enfermeiro и категория/функции, а не auxiliar.',
          'Уточняйте turnos, ночные, выходные и subsídio de refeição до подписания.',
          'Для SNS и крупных частных сетей могут запросить cartão de vacinas, occupational health exam и registo criminal.',
          'Если у вас ВНЖ по учёбе или ожидание AIMA, проверьте право на работу именно в вашем статусе.',
          'Поддерживайте quotas OE и актуальные контакты в Balcão Único; просрочки могут мешать подтверждению статуса работодателю.'
        ] },
        { kind: 'warning', text: 'Иммиграционная часть отдельно: OE не выдаёт визу и ВНЖ. Если вы переезжаете из-за рубежа, заранее планируйте подходящий маршрут D1/D3/D8 или другой статус. С 23.10.2025 действует Lei 61/2025, поэтому “въехать туристом и легализоваться позже” больше не является надёжной стратегией.' }
      ]
    }
  ],
  costs: [
    { label: 'Reconhecimento Específico в публичном вузе', amountEURMin: 300, amountEURMax: 700, note: 'Ориентир по emolumentos; точная сумма зависит от вуза и может меняться ежегодно.' },
    { label: 'CAPLE DAPLE C1', amountEURMin: 110, amountEURMax: 140, note: 'Ориентир за экзамен; проверяйте центр и calendário CAPLE на 2026 год.' },
    { label: 'Tradução certificada / apostille', amountEURMin: 20, amountEURMax: 80, note: 'Обычно за документ или страницу; зависит от страны, языка и срочности.' },
    { label: 'Inscrição и quotas OE', amountEURMin: 0, amountEURMax: 150, note: 'Смотрите актуальную tabela de emolumentos/quotas в Balcão Único OE перед подачей; суммы зависят от типа pedido.' }
  ],
  sources: [
    {
      title: 'Ordem dos Enfermeiros — orientações gerais para inscrição',
      url: 'https://www.ordemenfermeiros.pt/a-ordem/inscreva-se/orienta%C3%A7%C3%B5es-gerais-para-inscri%C3%A7%C3%A3o-na-ordem-dos-enfermeiros/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Enfermeiros — Balcão Único',
      url: 'https://balcaounico.ordemenfermeiros.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — reconhecimento de graus e diplomas estrangeiros',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 66/2018 — regime jurídico de reconhecimento de graus académicos e diplomas estrangeiros',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
