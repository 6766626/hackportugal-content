export default {
  editorialVoice: 'hackportugal',
  id: 'oe-engenheiros-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Engenheiros: как иностранному инженеру получить право подписывать проекты',
  tldr: 'Для большинства инженерных проектов в Португалии одной иностранной дипломной корочки недостаточно: чтобы подписывать peças escritas/desenhadas и termo de responsabilidade для Câmara Municipal, нужен статус в Ordem dos Engenheiros или другой признанной ordem/associação по специальности. В 2026 путь зависит от страны диплома: ЕС/ЕЭЗ — через Lei 9/2009 и признание профессиональной квалификации; UK Chartered Engineer — через MRA Engineering Council–OE; non-EU — обычно DGES reconhecimento + candidatura в OE + relatório profissional/оценка опыта.',
  tags: ['engenheiros', 'проекты', 'ordem', 'dges'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-oe',
      title: 'Зачем нужна Ordem dos Engenheiros',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Engenheiros (OE) — публичная профессиональная ассоциация инженеров. Членство само по себе не заменяет лицензию на строительство, но для проектирования оно часто является практическим пропуском: заказчик, Câmara Municipal, fiscalização и страховая хотят видеть, что técnico autor имеет действительную inscrição и компетенцию по специальности.' },
        { kind: 'paragraph', text: 'В проектах для licenciamento/comunicação prévia обычно подаются peças do projeto и termo de responsabilidade. Его подписывает técnico legalmente habilitado. Для инженерных дисциплин это, как правило, membro efetivo OE или специалист другой применимой профессиональной ассоциации, если закон допускает такую профессию для конкретного проекта.' },
        { kind: 'checklist', items: [
          'Строительные конструкции: estabilidade, betão, aço, geotecnia — обычно нужен инженер с соответствующей especialidade',
          'Águas, esgotos, águas pluviais, gás, térmica, acústica, segurança contra incêndio — проверяют профиль и опыт',
          'Электротехнические проекты: OE может быть достаточной, но для некоторых работ нужны отдельные правила DGEG/entidade inspetora',
          'Подпись архитектора не заменяет инженера по инженерным especialidades',
          'Иностранная компания может быть подрядчиком, но подписант проекта должен иметь португальскую профессиональную habilitação',
          'PDF с подписью без termo de responsabilidade и номера inscrição OE часто не принимают',
          'Для тендеров и крупных заказчиков могут требовать declaração emitida pela OE о состоянии членства'
        ] }
      ]
    },
    {
      id: 'choose-route',
      title: 'Выберите маршрут по происхождению квалификации',
      content: [
        { kind: 'substeps', items: [
          { id: 'eu-eea', title: 'Диплом и профессия из ЕС/ЕЭЗ/Швейцарии', content: [
            { kind: 'paragraph', text: 'Базовый режим — Lei 9/2009, которая переносит европейские правила признания профессиональных квалификаций. Вы подаёте в OE доказательства образования, права заниматься профессией в стране происхождения и профессионального опыта. OE может признать квалификацию напрямую или назначить medidas de compensação, если есть существенные различия.' },
            { kind: 'checklist', items: [
              'Паспорт/ID',
              'Диплом инженера и приложение с дисциплинами/ECTS',
              'Справка о праве заниматься профессией в стране происхождения, если профессия там регулируется',
              'Подтверждение стажа: работодатели, проекты, должности, даты',
              'CV на португальском или английском',
              'Справка об отсутствии дисциплинарных санкций, если применимо',
              'Переводы на португальский, если документы не на PT/EN/ES/FR по требованию OE'
            ] }
          ]},
          { id: 'uk-ceng', title: 'UK Chartered Engineer: маршрут Engineering Council — OE', content: [
            { kind: 'paragraph', text: 'После Brexit UK не считается ЕС-маршрутом, но действует Mutual Recognition Agreement между Engineering Council и Ordem dos Engenheiros. Он предназначен прежде всего для зарегистрированных Chartered Engineer (CEng), которые хотят получить профессиональное признание в Португалии.' },
            { kind: 'paragraph', text: 'На практике это не “автоматическая замена карточки”: OE всё равно проверяет документы, дисциплину, good standing и соответствие португальской especialidade. Но MRA снижает неопределённость и обычно сильнее, чем обычная non-EU заявка без профессионального статуса.' }
          ]},
          { id: 'non-eu', title: 'Диплом вне ЕС: reconhecimento + relatório profissional', content: [
            { kind: 'paragraph', text: 'Для дипломов из России, Беларуси, Украины, Казахстана, Бразилии и других non-EU стран OE обычно смотрит не только диплом, но и академическое признание в Португалии. Частый первый шаг — reconhecimento de grau académico через DGES/португальский вуз по Decreto-Lei 66/2018: reconhecimento automático, de nível или específico.' },
            { kind: 'paragraph', text: 'Дальше OE оценивает candidatura. Для non-EU инженера ключевой документ — relatório profissional: структурированный отчёт о проектах, ответственности, расчётах, нормах, ПО, объектах и роли кандидата. Его задача — доказать, что вы не просто “работали инженером”, а лично выполняли функции уровня português engenheiro.' }
          ]}
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Пакет документов для OE',
      content: [
        { kind: 'paragraph', text: 'Точный список зависит от especialidade и маршрута, но готовьте пакет заранее. Самая частая причина задержек — неполные приложения к диплому, отсутствие переводов и слишком общий CV без доказательств проектной ответственности.' },
        { kind: 'checklist', items: [
          'Documento de identificação: паспорт, Cartão de Cidadão или ВНЖ',
          'NIF и португальский адрес для переписки',
          'Диплом инженера; для non-EU — желательно уже с reconhecimento DGES или документом португальского вуза',
          'Histórico escolar / suplemento ao diploma: дисциплины, часы, ECTS или академическая нагрузка',
          'CV с датами, работодателями, должностями, типами проектов и вашей ролью',
          'Relatório profissional: 5–15 страниц по ключевым проектам, расчётам, нормативам, ответственности и результатам',
          'Портфолио: титульные листы проектов, anonymized drawings, расчётные записки, BIM/CAE-примеры, если можно раскрывать',
          'Справки работодателей или clientes о функциях и периодах работы',
          'Certificate of good standing / disciplinary record из профессиональной организации, если вы уже состояли в ней',
          'Переводы и легализация: apostila/legalização консульством, если документ выдан за пределами ЕС и OE/DGES этого требует',
          'Доказательство владения португальским не всегда формально требуется, но для подписания проектов вы должны понимать legislação, normas e regulamentos portugueses'
        ] },
        { kind: 'warning', text: 'Не подавайте “красивый” relatório profissional без доказательств. OE оценивает компетенции: расчётная ответственность, нормы, риск, supervisão, coordenação, interaction with authorities. Простое перечисление объектов без вашей функции часто возвращают на доработку.' }
      ]
    },
    {
      id: 'application',
      title: 'Как подать и что происходит после',
      content: [
        { kind: 'paragraph', text: 'Подача идёт через Ordem dos Engenheiros: онлайн-формы/контакты на сайте OE и региональная secção по месту проживания или работы. До подачи проверьте, в какую especialidade вы идёте: civil, eletrotécnica, mecânica, informática, ambiente, química, agronómica, geológica e minas и т.д. Неправильная especialidade затягивает процесс.' },
        { kind: 'checklist', items: [
          'Создайте учётную запись или запросите инструкции у secção regional OE',
          'Выберите modalidade: admissão как новый membro, признание квалификации ЕС, MRA UK или non-EU evaluation',
          'Загрузите дипломы, reconhecimento, CV, relatório profissional и подтверждения опыта',
          'Оплатите сборы OE по действующей tabela de emolumentos',
          'Отвечайте на pedidos de elementos adicionais — обычно дают срок, не игнорируйте письма',
          'При необходимости пройдите entrevista, prova, estágio или medidas de compensação',
          'После одобрения получите номер membro и статус; для подписи проектов нужен статус, который OE признаёт достаточным для данной especialidade',
          'Закажите declaração de inscrição/regularidade, если её требует Câmara Municipal или заказчик'
        ] },
        { kind: 'paragraph', text: 'Сроки сильно зависят от пакета и especialidade: простая заявка с европейским дипломом может идти быстрее, non-EU с reconhecimento и relatório profissional — месяцы. Планируйте подписание реального проекта только после получения подтверждения OE, а не после отправки заявки.' }
      ]
    },
    {
      id: 'signing-projects',
      title: 'Подписание проектов: что проверяют Câmara и заказчики',
      content: [
        { kind: 'paragraph', text: 'Когда членство получено, это ещё не означает право подписывать любой инженерный раздел. Смотрите habilitação por especialidade, требования конкретного муниципалитета и специальные режимы: segurança contra incêndio, gás, eletricidade, térmica/REH/RECS, acústica, estruturas especiais.' },
        { kind: 'checklist', items: [
          'В termo de responsabilidade указывайте полное имя, номер OE, especialidade и роль в проекте',
          'Проверяйте, требует ли Câmara свежую declaração da Ordem — иногда принимают только документ, выданный недавно',
          'Используйте квалифицированную электронную подпись, если процесс идёт через plataforma urbanística',
          'Не подписывайте разделы вне вашей компетенции: это дисциплинарный и страховой риск',
          'Храните расчёты, версии чертежей и переписку: fiscalização может спросить обоснование',
          'Уточняйте у страховщика responsabilidade civil profissional: членство OE не равно автоматическому покрытию всех рисков',
          'Для проектов под португальские нормы используйте Eurocódigos, legislação nacional и муниципальные regulamentos, а не только нормы страны происхождения'
        ] },
        { kind: 'warning', text: 'Подпись “за друга”, подпись проекта, который вы не проверяли, или использование чужого номера OE — прямой риск дисциплинарного дела, гражданской ответственности и отказа Câmara в licenciamento.' }
      ]
    },
    {
      id: 'practical-advice',
      title: 'Практические советы для иностранного инженера',
      content: [
        { kind: 'paragraph', text: 'Если ваша цель — работать в Португалии, а не просто получить красивый статус, начните с рынка: найдите местного gabinete de engenharia и первые проекты делайте под supervisão португальского senior engineer. Это ускоряет понимание Câmara, plataformas municipais, Eurocódigos, REH/RECS и процедур licenciamento.' },
        { kind: 'checklist', items: [
          'До переезда соберите оригиналы дипломов, приложения, справки работодателей и apostila',
          'Сделайте таблицу соответствия ваших дисциплин португальской especialidade OE',
          'Для non-EU заранее запустите reconhecimento DGES: без него OE может не принять академическую часть',
          'Если вы CEng из UK, сначала получите у Engineering Council подтверждение статуса и good standing',
          'Переведите ключевые документы на португальский присяжным/tradutor или способом, принимаемым OE',
          'В relatório profissional пишите конкретно: объект, год, площадь/мощность, нормы, расчёт, ваша подпись или ответственность',
          'Не обещайте клиенту срок licenciamento, пока OE не подтвердит habilitação',
          'После вступления следите за quotas и regularidade: просрочка членских взносов может испортить declaração для Câmara'
        ] }
      ]
    }
  ],
  costs: [
    {
      label: 'Reconhecimento académico DGES/вуз',
      amountEURMin: 27.3,
      amountEURMax: 600,
      note: 'Зависит от типа reconhecimento и учреждения; específico обычно дороже automático.'
    },
    {
      label: 'Переводы, apostila, заверения',
      amountEURMin: 20,
      amountEURMax: 250,
      note: 'За документ/пакет; зависит от страны выдачи и объёма приложения к диплому.'
    },
    {
      label: 'Сборы и quotas Ordem dos Engenheiros',
      amountEURMin: 0,
      amountEURMax: 300,
      note: 'Проверяйте актуальную tabela de emolumentos OE: суммы зависят от типа candidatura, статуса и secção.'
    }
  ],
  sources: [
    {
      title: 'Ordem dos Engenheiros — официальный сайт и правила вступления',
      url: 'https://www.ordemengenheiros.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Engineering Council — Mutual Recognition Agreement with Ordem dos Engenheiros',
      url: 'https://www.engc.org.uk/international-activity/european-recognition/mutual-recognition-agreement-portugal/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 9/2009 — reconhecimento das qualificações profissionais',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34532975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — reconhecimento de graus e diplomas estrangeiros',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
