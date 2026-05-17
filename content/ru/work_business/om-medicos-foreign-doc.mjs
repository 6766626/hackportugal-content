export default {
  editorialVoice: 'hackportugal',
  id: 'om-medicos-foreign-doc',
  categoryId: 'work_business',
  title: 'Ordem dos Médicos: регистрация иностранного врача в Португалии',
  tldr: 'Чтобы работать врачом в Португалии, иностранного диплома недостаточно: сначала нужно признание степени Medicina через DGES/португальский медфак по DL 66/2018, затем личная подача в Ordem dos Médicos. Базовый сбор за заявку — 385 €. OM проверяет документы, Good Standing и, как правило, требует Prova de Comunicação Médica. Для полной автономной регистрации важен стаж: если после диплома нет минимум 2 лет врачебной практики, могут направить на formação geral/практический путь до автономии.',
  tags: ['médicos', 'ordem', 'dges', 'работа'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'scope',
      title: 'Что даёт регистрация в Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Médicos — обязательная профессиональная палата для врачей в Португалии. Без inscrição ativa в OM нельзя законно работать médico в SNS, частной клинике, больнице, telemedicina или подписывать медицинские документы как врач.' },
        { kind: 'paragraph', text: 'Процесс состоит из двух разных блоков: академическое признание диплома через DGES/университет и профессиональная регистрация в OM. Признание диплома само по себе не даёт права практиковать.' },
        { kind: 'checklist', items: ['Подходит врачам с дипломом Medicina, полученным вне Португалии', 'Нужен NIF и действующий документ личности', 'Для не-EU обычно нужен легальный статус в Португалии или основание для работы', 'OM принимает документы лично в региональной секции', 'Базовая подача стоит 385 €', 'Португальский язык практически обязателен: пациентская коммуникация проверяется отдельно'] }
      ]
    },
    {
      id: 'recognition-dges',
      title: 'Шаг 1. Признать медицинский диплом через DGES',
      content: [
        { kind: 'paragraph', text: 'Иностранный диплом врача сначала проходит reconhecimento académico по Decreto-Lei 66/2018. Для Medicina обычно нужен reconhecimento específico: португальский вуз с медицинским факультетом сравнивает вашу программу с Mestrado Integrado em Medicina.' },
        { kind: 'checklist', items: ['Выберите тип признания на портале DGES: чаще всего reconhecimento específico', 'Подайте диплом, приложение с часами/ECTS, программу дисциплин и оценки', 'Сделайте apostila/legalização, если документ выдан вне EU и нет освобождения', 'Подготовьте перевод на португальский, если документы не на PT/EN/ES/FR по требованию вуза', 'Оплатите сбор университета: сумма зависит от вуза, часто несколько сотен евро', 'Следите за email университета: могут запросить дополнительные syllabi или интервью', 'Получите certidão de reconhecimento — именно её потом просит OM'] },
        { kind: 'warning', text: 'Не подавайте в OM только с оригинальным иностранным дипломом. Без португальского признания степени Medicina пакет обычно не рассматривают как готовый для inscrição.' }
      ]
    },
    {
      id: 'documents',
      title: 'Шаг 2. Собрать пакет для Ordem dos Médicos',
      content: [
        { kind: 'paragraph', text: 'OM требует личную подачу и проверяет не только диплом, но и профессиональную пригодность: личность, отсутствие дисциплинарных ограничений, Good Standing и стаж.' },
        { kind: 'checklist', items: ['Documento de identificação: паспорт, Cartão de Cidadão или ВНЖ', 'NIF', 'Certidão de reconhecimento do grau académico em Medicina в Португалии', 'Оригинал диплома и приложение — лучше иметь с переводом', 'Certificado de Registo Criminal из страны/стран проживания, актуальный на дату подачи', 'Certificate of Good Standing / professional status от медицинской палаты страны, где вы были зарегистрированы', 'Подтверждение стажа: трудовые договоры, справки больниц, лицензия, payroll/социальные взносы, описание функций', 'CV на португальском или английском', 'Фотография и заполненная форма OM', 'Доказательство адреса и контактов в Португалии'] },
        { kind: 'warning', text: 'Справки Good Standing и criminal record обычно имеют короткий срок действия. Не заказывайте их за много месяцев до записи в OM: к моменту подачи могут попросить новые.' }
      ]
    },
    {
      id: 'exam-language',
      title: 'Шаг 3. Сдать Prova de Comunicação Médica',
      content: [
        { kind: 'paragraph', text: 'Для иностранных врачей OM применяет проверку медицинской коммуникации — Prova de Comunicação Médica. Это не экзамен по всей медицине как для университета, а проверка способности безопасно общаться с пациентом и коллегами в португальской клинической среде.' },
        { kind: 'checklist', items: ['Готовьте португальский минимум на уровне уверенной консультации с пациентом', 'Тренируйте анамнез, жалобы, аллергии, лекарства, informed consent', 'Умейте объяснять диагноз, план лечения и риски простым португальским', 'Повторите термины SNS: centro de saúde, urgência, referenciação, receita, baixa médica', 'Проверьте, нужна ли именно вам prova: OM решает по досье, стране подготовки и профессиональному опыту', 'Не рассчитывайте работать только на английском: для лицензии важна безопасность общения в Португалии'] },
        { kind: 'warning', text: 'Наличие диплома, IFICI/NHR-статуса, трудового оффера или контракта с клиникой не отменяет требования OM к коммуникации и профессиональной регистрации.' }
      ]
    },
    {
      id: 'two-year-rule',
      title: 'Шаг 4. Проверить правило 2 лет практики',
      content: [
        { kind: 'paragraph', text: 'Ключевой фильтр OM — автономность практики. Если после окончания медицинского диплома у вас есть минимум 2 года реальной врачебной практики, это помогает получить регистрацию как médico с автономией. Стаж нужно доказать документально: должность, даты, full-time/part-time, клинические обязанности, подпись и печать работодателя.' },
        { kind: 'paragraph', text: 'Если 2 лет практики нет или документы слабые, OM может не дать полноценную автономную inscrição сразу. Возможный путь — прохождение formação geral / эквивалентного практического периода в Португалии до получения автономии. Это влияет на возможность самостоятельно принимать пациентов и подписывать акты.' },
        { kind: 'checklist', items: ['Считайте стаж после даты получения диплома Medicina, а не годы учёбы', 'Internship/residency может засчитываться, если это была врачебная клиническая работа', 'Волонтёрство без статуса врача обычно слабое доказательство', 'Справка должна быть конкретной: specialty/department, dates, workload, clinical duties', 'Если работали в нескольких странах, возьмите Good Standing и стажевые справки из каждой', 'Для EU/EEA квалификаций могут применяться отдельные правила признания, но OM всё равно проверяет регистрацию и good standing'] }
      ]
    },
    {
      id: 'submit-in-person',
      title: 'Шаг 5. Подать заявление лично и ждать решение',
      content: [
        { kind: 'paragraph', text: 'Подача делается очно в региональной секции OM: Norte, Centro, Sul, Açores или Madeira — обычно по месту проживания/работы. На практике лучше заранее написать email в нужную секцию, отправить сканы для предварительной проверки и попросить слот.' },
        { kind: 'checklist', items: ['Принесите оригиналы и копии всех документов', 'Оплатите сбор за abertura do processo/inscrição — 385 €', 'Сохраните comprovativo de pagamento', 'Уточните, когда будет Prova de Comunicação Médica и нужно ли донести документы', 'После одобрения получите número de cédula profissional', 'Проверьте статус inscrição на сайте OM до начала работы', 'Сообщите работодателю только после фактической активации регистрации'] },
        { kind: 'warning', text: 'Не начинайте clinical acts до получения активной cédula profissional. Работа врачом без регистрации в OM — риск для вас, работодателя, страховки responsabilidade civil и будущих заявлений в Португалии.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача/открытие процесса в Ordem dos Médicos', amountEUR: 385, note: 'Сбор за заявление иностранного врача; проверяйте актуальный valor na secção regional перед оплатой.' },
    { label: 'Признание диплома через университет/DGES', amountEURMin: 300, amountEURMax: 700, note: 'Тариф устанавливает выбранный вуз; для Medicina часто требуется reconhecimento específico.' },
    { label: 'Переводы, apostila/legalização, нотариальные копии', amountEURMin: 100, amountEURMax: 400, note: 'Зависит от страны выдачи документов и числа страниц программы обучения.' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Sul — FAQ for foreign doctors registration', url: 'https://www.omsul.pt/Portals/0/MQ-FAQS-ENG-OM-Medicos-Estrangeiros.pdf', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Ordem dos Médicos — официальный сайт и региональные секции', url: 'https://ordemdosmedicos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGES — reconhecimento de graus e diplomas estrangeiros', url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 66/2018 — regime de reconhecimento de graus académicos estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
