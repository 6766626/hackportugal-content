export default {
  editorialVoice: 'hackportugal',
  id: 'oa-advogados-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Advogados: иностранный юрист в Португалии без BR-реципрокности',
  tldr: 'В Португалии нельзя просто “перевести” статус адвоката: слово advogado защищено, доступ к профессии даёт только Ordem dos Advogados (OA).\n\nПосле прекращения практической BR-реципрокности прямой путь для non-EU юристов — признание диплома в португальском вузе/DGES, затем допуск в OA и estágio 12 месяцев (não prorrogável / без продления) с patrono и финальной оценкой. С 1 апреля 2024 года по Lei n.º 6/2024, de 19 de janeiro estágio длится 12 месяцев, прежняя поэтапная структура и prova de agregação отменены. Юристы EU/EEA идут отдельно по Diretiva 98/5/CE: могут зарегистрироваться под домашним профессиональным титулом.',
  tags: ['oa', 'advogado', 'юрист', 'diploma', 'estágio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-protected',
      title: 'Что реально защищено: advogado ≠ jurista',
      content: [
        { kind: 'paragraph', text: 'В Португалии “advogado” — регулируемая профессия. Для представительства клиентов в суде, подписания процессуальных документов, адвокатской тайны и использования титула advogado нужна inscrição в Ordem dos Advogados (OA).' },
        { kind: 'paragraph', text: 'Иностранный диплом юриста сам по себе не даёт права практиковать как advogado. Можно работать legal consultant, paralegal, contract manager, compliance, tax/legal operations, но нельзя вводить клиентов в заблуждение, что вы португальский advogado.' },
        { kind: 'checklist', items: [
          'Осторожно: платная legal consultation для третьих лиц в Португалии может попадать под actos próprios dos advogados e solicitadores. Без inscrição в OA безопаснее работать in-house, в back-office/legal operations либо как foreign-law specialist с чётко очерченным scope, а по португальским вопросам — под ответственностью advogado/solicitador. Не давайте Portuguese-law advice и не представляйте клиентов перед органами/судами.',
          'Можно: работать in-house в компании, в compliance, privacy, contracts, AML, relocation/legal operations',
          'Можно как сотрудник/back-office/paralegal готовить черновики и переводы для advogado/solicitador, если именно зарегистрированный профессионал отвечает перед клиентом. Нельзя самостоятельно продавать подготовку юридических документов как услугу, если это попадает под actos próprios.',
          'Нельзя: использовать титул advogado без inscrição в OA',
          'Нельзя: представлять клиента в португальском суде как advogado',
          'Нельзя: открывать “sociedade de advogados” без соблюдения правил OA',
          'Нельзя: обещать клиенту услуги, зарезервированные для адвокатов, если вы не член OA'
        ] },
        { kind: 'warning', text: 'Португальский рынок очень формальный: даже если вы адвокат в РФ, Украине, США, Турции или другой non-EU стране, для OA это не автоматический эквивалент português advogado.' }
      ]
    },
    {
      id: 'non-eu-route',
      title: 'Путь non-EU юриста: признание диплома + OA + estágio',
      content: [
        { kind: 'paragraph', text: 'Для юристов из стран вне EU/EEA без действующей реципрокности базовый путь в 2026 году: признать юридическое образование в Португалии, затем пройти процедуру допуска в OA. Это долгий путь, потому что OA проверяет не только диплом, но и пригодность к португальской адвокатской практике.' },
        { kind: 'checklist', items: [
          'Собрать диплом, приложение с часами/ECTS, программы дисциплин, подтверждение статуса в иностранной адвокатской палате, если есть',
          'Сделать apostila/legalização по стране выдачи документа',
          'Сделать certified translation на португальский, если документы не на PT/EN/ES/FR в приемлемой форме',
          'Подать на reconhecimento de grau académico в португальский вуз через систему DGES/учреждение',
          'Получить признание степени, обычно nível/licenciatura или mestrado conforme caso',
          'Проверить, требует ли OA дополнительные документы о добропорядочности, отсутствии incompatibilidades и criminal record',
          'Подать заявление на inscrição как candidato a advogado estagiário',
          'Пройти estágio под руководством patrono и финальную оценку (jury) по trabalho final о теме Deontologia Profissional'
        ] },
        { kind: 'paragraph', text: 'С 1 апреля 2024 года по Lei n.º 6/2024, de 19 de janeiro estágio в OA длится 12 месяцев (não prorrogável / без продления). Прежняя поэтапная структура и prova de agregação отменены: больше нет prova de acesso, prova escrita или exame/agregação. В estágio входит работа под руководством patrono, 40 часов Deontologia Profissional и финальная оценка — обсуждение перед жюри вашего trabalho final по теме deontologia (шкала 0–20, проходной балл ≥10), плюс relatório final de patrono и relatório final de estagiário.' },
        { kind: 'warning', text: 'Признание диплома вузом не означает автоматическое принятие в OA. OA — отдельный профессиональный фильтр: может запросить документы, отказать при incompatibilidades или потребовать прохождение полного estágio.' }
      ]
    },
    {
      id: 'brazil-reciprocity',
      title: 'Бразилия: почему старый “быстрый” путь больше не стоит считать рабочим',
      content: [
        { kind: 'paragraph', text: 'До 2023 года многие бразильские advogados рассчитывали на более прямой режим взаимности между OA Portugal и OAB Brasil. В реальности после разрыва/приостановки этого режима нельзя планировать релокацию по старой логике “я адвокат в OAB — значит быстро впишусь в OA”.' },
        { kind: 'paragraph', text: 'На апрель 2026 безопасная практическая позиция: если у вас нет EU route и нет индивидуально подтверждённого OA основания для прямой регистрации, готовьтесь к обычному пути иностранного диплома — reconhecimento académico, документы, inscrição como estagiário и estágio 12 месяцев (não prorrogável).' },
        { kind: 'checklist', items: [
          'Не покупайте консультацию, где обещают inscrição в OA “по старому acordo” без проверки актуальных правил OA',
          'Попросите у консультанта ссылку на действующую страницу OA и конкретную норму Estatuto da OA',
          'Сразу закладывайте время на признание диплома: месяцы, не недели',
          'Закладывайте португальский юридический язык: процесс, prazos, peças processuais, deontologia',
          'Если вы уже в OAB, приложите certificate of good standing, но не считайте его заменой estágio',
          'Если цель — быстро работать, ищите interim-роли: legal operations, immigration support, compliance, contracts'
        ] },
        { kind: 'warning', text: 'Самая частая ошибка — писать на сайте “advogado em Portugal” до inscrição в OA. Корректнее: “jurista”, “legal consultant”, “advogado inscrito no Brasil/Rússia/etc.” и чётко указать юрисдикцию.' }
      ]
    },
    {
      id: 'eu-route',
      title: 'EU/EEA юристы: отдельный режим по Diretiva 98/5/CE',
      content: [
        { kind: 'paragraph', text: 'Если вы уже квалифицированный адвокат в государстве EU/EEA, применяется режим установления по Diretiva 98/5/CE. Он позволяет зарегистрироваться в Португалии под профессиональным титулом страны происхождения, например Rechtsanwalt, avocat, abogado, avvocato, solicitor и т.п.' },
        { kind: 'checklist', items: [
          'Подтвердить действующую регистрацию в домашней адвокатской палате EU/EEA',
          'Подать документы в OA для inscrição как advogado da União Europeia под home-country title',
          'Практиковать в Португалии с указанием исходного титула и профессиональной организации',
          'Соблюдать правила OA: deontologia, segredo profissional, conflict of interest, advertising limits',
          'Для некоторых процессуальных действий работать совместно с português advogado, если это требует национальное право',
          'После длительной эффективной и регулярной практики в праве Португалии/EU возможна интеграция в профессию в Португалии по правилам директивы',
          'Альтернативно может применяться путь признания профессиональной квалификации/aptidão, если человек хочет титул advogado напрямую'
        ] },
        { kind: 'warning', text: 'EU/EEA route не даёт прав только из-за паспорта: нужно быть профессионально квалифицированным адвокатом в государстве EU/EEA под одним из признанных титулов. При этом сама Diretiva 98/5/CE адресована advogados nacionais de Estados-Membros и тем, кто пользуется правом свободного передвижения в EU/EEA, поэтому non-EU гражданину с квалификацией в EU bar нужно заранее получить письменное подтверждение OA, что этот режим к нему применим.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'Практический план на 2026: как не потерять год',
      content: [
        { kind: 'paragraph', text: 'Если вы переезжаете в Португалию и хотите когда-нибудь стать advogado, разделите план на два трека: легальный доход сейчас и профессиональная квалификация OA параллельно. Полный путь редко укладывается в один год.' },
        { kind: 'substeps', items: [
          { id: 'month-1', title: '1. До переезда или в первый месяц', content: [
            { kind: 'checklist', items: [
              'Получите свежие справки из своей палаты: status/good standing/disciplinary record',
              'Поднимите учебные планы и часы по каждой юридической дисциплине',
              'Сделайте apostila/legalização на диплом и приложение',
              'Проверьте, какой португальский вуз принимает reconhecimento именно по Direito',
              'Начните юридический португальский: гражданский процесс, административное право, fiscal, deontologia'
            ] }
          ] },
          { id: 'months-2-6', title: '2. Месяцы 2–6', content: [
            { kind: 'checklist', items: [
              'Подайте reconhecimento de grau académico',
              'Соберите NIF, адрес, ВНЖ/виза, criminal record, документы о professional standing',
              'Свяжитесь с Conselho Regional OA по месту будущей практики',
              'Найдите потенциального patrono — адвоката OA, готового взять estagiário',
              'Параллельно ищите работу без защищённого титула: compliance, contracts, privacy, corporate support'
            ] }
          ] },
          { id: 'after-recognition', title: '3. После признания диплома', content: [
            { kind: 'checklist', items: [
              'Подавайте в OA на admissibilidade/inscrição как advogado estagiário',
              'Планируйте 40 часов Deontologia Profissional и trabalho final по теме deontologia (prova de acesso/agregação больше нет)',
              'Планируйте 12 месяцев estágio (não prorrogável) без иллюзии полной коммерческой самостоятельности',
              'Ведите портфолио практики, обучения и документов для финальной avaliação',
              'Не меняйте публичный титул на advogado до решения OA о полноценной inscrição'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-risks',
      title: 'Документы, язык и типичные отказы',
      content: [
        { kind: 'paragraph', text: 'OA и университеты смотрят на формальные документы. “Я 10 лет практиковал” помогает, но не заменяет академическое признание и профессиональный допуск. Переводы, апостили и несовпадение ФИО часто тормозят процесс сильнее, чем сам экзамен.' },
        { kind: 'checklist', items: [
          'Паспорт/Cartão de Cidadão/ВНЖ, если уже есть',
          'NIF и португальский адрес для корреспонденции',
          'Диплом Direito/юридического факультета и приложение',
          'Подробные syllabus/programas das unidades curriculares',
          'Apostila или консульская легализация, если требуется',
          'Перевод на португальский присяжным/сертифицированным переводчиком',
          'Certificado de registo criminal из стран проживания',
          'Certificate of good standing из иностранной адвокатской палаты, если вы уже адвокат',
          'Декларация об отсутствии incompatibilidades с адвокатской деятельностью',
          'Доказательства португальского адреса и контактов'
        ] },
        { kind: 'warning', text: 'Португальский язык критичен. Даже если формально не указан уровень B2/C1, экзамены, estágio, deontologia и процессуальные документы идут на португальском. Без юридического PT путь в OA практически нереалистичен.' }
      ]
    }
  ],
  costs: [
    {
      label: 'Признание иностранного диплома Direito',
      amountEURMin: 150,
      amountEURMax: 700,
      note: 'Тариф устанавливает конкретный португальский вуз/учреждение; для сложного reconhecimento с анализом программ обычно дороже, чем автоматическое признание.'
    },
    {
      label: 'Переводы, apostila/legalização, нотариальные копии',
      amountEURMin: 100,
      amountEURMax: 600,
      note: 'Зависит от страны выдачи, числа страниц учебных программ и требований к certified translation.'
    },
    {
      label: 'Процедуры OA: inscrição, estágio, quotas, exames',
      amountEURMin: 300,
      amountEURMax: 1200,
      note: 'Суммы меняются по Conselho Regional и типу процедуры; перед подачей проверяйте актуальную tabela de emolumentos OA.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Advogados — Admissão / Admission FAQ',
      url: 'https://portal.oa.pt/ordem/admissao-admission-faq/admissao/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Advogados — Diretiva 98/5/CE sobre estabelecimento de advogados da União Europeia',
      url: 'https://portal.oa.pt/ordem/regras-profissionais/legislacao-internacional/directiva-985ce/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto da Ordem dos Advogados, Lei n.º 145/2015 (изменён Lei n.º 6/2024)',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2015-72859741',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PGDLisboa — Estatuto da Ordem dos Advogados, Art. 195 (Lei n.º 6/2024, de 19 de janeiro): estágio de 12 meses',
      url: 'https://pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=3790&tabela=leis&ficha=1&pagina=1',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'DGES — Reconhecimento de graus académicos e diplomas estrangeiros',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
