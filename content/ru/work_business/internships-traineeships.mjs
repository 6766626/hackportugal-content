export default {
  editorialVoice: 'hackportugal',
  id: 'internships-traineeships',
  categoryId: 'work_business',
  title: 'Стажировки (Estágios) — программы и оплата',
  tldr: 'Estágios — частая стартовая точка карьеры в Португалии.\n\nТипы: IEFP estágios (например Estágios INICIAR / +Talento) — обычно 6–9 месяцев, bolsa зависит от уровня QNQ/образования и считается в IAS (от ~1.3 IAS); Estágios curriculares (университет-партнёр, часто без обязательной оплаты); Estágios de Inserção — отдельная мера IEFP для pessoas com deficiência e incapacidade (не путать с CEI+ для безработных); extracurricular регулируется Decreto-Lei 66/2011 (письменный контракт, seguro, bolsa не ниже IAS €537.13 в 2026); частные стажировки от компаний, 600-1500 €/мес.',
  tags: ['estágio', 'стажировка', 'iefp', 'выпускники'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: '📋 Типы стажировок',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Estágios Profissionais (IEFP) — самые популярные', content: [
            { kind: 'checklist', items: [
              'Государственная программа через IEFP',
              'Цель: первая работа для выпускников / переквалификация',
              'Длительность: обычно 6–9 мес в зависимости от меры',
              'Bolsa: зависит от уровня квалификации QNQ и считается в кратных IAS. При IAS 2026 €537.13 ориентиры: 1.3 IAS ≈ €698.27, 1.4 IAS ≈ €751.98, 1.6 IAS ≈ €859.41; проверяйте таблицу конкретной medida IEFP',
              '+ субсидия на питание ~6 €/рабочий день',
              'Заменить на: «+ subsídio de alimentação/refeição и seguro de acidentes; транспортная поддержка — только если предусмотрена конкретной medida IEFP или для специальных категорий.»',
              '+ страхование от несчастных случаев',
              'Подача: iefp.pt → Estágios → пройти регистрацию + подбор компании',
              'Конкурс: ~30 000 мест в год, заполняются за месяцы'
            ]}
          ]},
          { id: 't2', title: 'Estágios de Inserção / CEI+ (для разных категорий)', content: [
            { kind: 'checklist', items: [
              'Estágios de Inserção — мера IEFP для pessoas com deficiência e incapacidade, с собственной длительностью, eligibility и bolsa',
              'Для долгосрочно безработных IEFP предлагает другие меры — Contrato Emprego-Inserção / CEI+; это не обычная оплачиваемая стажировка, а occupational measure, условия оплаты другие',
              'Проверяйте актуальные меры на iefp.pt — программы периодически обновляются',
              'Часть мер связана с переходом в постоянную занятость'
            ]}
          ]},
          { id: 't3', title: 'Erasmus+ / EURES', content: [
            { kind: 'checklist', items: [
              'Erasmus+ Trainees: для студентов / недавних выпускников EU',
              '~3-6 мес в португальской компании',
              'Выплата Erasmus зависит от страны, доплата от EU + грант от домашнего университета',
              '600-1 100 €/мес общая сумма гранта',
              'EURES — портал EU с вакансиями, включая стажировки'
            ]}
          ]},
          { id: 't4', title: 'Частные стажировки', content: [
            { kind: 'checklist', items: [
              'Технологические компании (SAP, Siemens, Critical Software, Outsystems, Farfetch): 800-1500 €/мес',
              'Банки/консалтинг (PwC, Deloitte, KPMG, BCP, Santander): 700-1200 €',
              'Стартапы (лиссабонская сцена): 500-1000 €',
              'Маркетинг / дизайн: 600-900 €',
              'Extracurricular internship вне учебной программы регулируется Decreto-Lei 66/2011: нужен письменный contrato de estágio, seguro, bolsa de estágio не ниже IAS (€537.13 в 2026), плюс subsídio de refeição при условиях закона. Unpaid допустим в основном для curricular internships и отдельных исключений (например очень короткие стажировки до 3 месяцев без продления)',
              'Подача: linkedin.com/jobs с фильтром «internship», jobs.eu, glassdoor'
            ]}
          ]},
          { id: 't5', title: 'Учебные стажировки', content: [
            { kind: 'checklist', items: [
              'Часть учебной программы',
              'Обычно 3-6 мес',
              'Без обязательной оплаты (хотя многие компании платят 300-700 €)',
              'Координируются через университет-партнёр',
              'Посредник: карьерный офис вашего университета'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apply-iefp',
      title: '🎯 Как подаваться на estágio IEFP',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Регистрация в центре занятости', content: [
            { kind: 'checklist', items: [
              'Любой центр занятости по месту жительства',
              'Документы: CC/ВНЖ, NIF, NISS, диплом, CV',
              'Заполняете форму о квалификации, опыте, желаемых направлениях',
              'Получаете «Cartão de Inscrição» — статус ищущего работу',
              'Доступ к порталу iefp.pt'
            ]}
          ]},
          { id: 'a2', title: '2. Поиск подходящих estágio', content: [
            { kind: 'checklist', items: [
              'Net-Empregos / iefp.pt показывает открытые позиции estágio',
              'Компании должны заранее зарегистрироваться как принимающие организации',
              'Подача через портал или напрямую в компанию',
              'Собеседование обычно проводится; специалист IEFP может присоединиться'
            ]}
          ]},
          { id: 'a3', title: '3. Одобрение IEFP', content: [
            { kind: 'checklist', items: [
              'Компания + стажёр + IEFP подписывают трёхстороннее соглашение',
              'План обучения: чему вы будете учиться',
              'Назначается наставник (orientador) от компании',
              'Дата начала фиксируется'
            ]}
          ]},
          { id: 'a4', title: '4. Во время estágio', content: [
            { kind: 'checklist', items: [
              'Заменить на: «Обычно full-time по horário da entidade promotora, в пределах нормального рабочего времени. Возможность part-time нужно проверять в regulamento конкретной medida; по умолчанию на нее рассчитывать нельзя.»',
              'Bolsa выплачивается ежемесячно принимающей организацией; IEFP финансирует/возмещает часть расходов entidade promotora по правилам конкретной меры',
              'Периодические оценки специалистом IEFP',
              'Промежуточный + финальный отчёты (наставник)',
              'Возможно досрочное прекращение компанией (с обоснованием) или вами (без штрафа)'
            ]}
          ]},
          { id: 'a5', title: '5. После', content: [
            { kind: 'checklist', items: [
              'Сертификат IEFP о завершении',
              'Заменить на: «Часть стажировок переходит в трудовой договор, но доля зависит от программы, работодателя и года; проверяйте статистику/отчеты IEFP по конкретной medida.»',
              'Если предложения нет — возвращаетесь к поиску работы (право на subsídio de desemprego после estágio не возникает, но могут быть другие пособия)',
              'Заменить на: «Estágio IEFP можно указывать как профессиональный опыт, но для визы/ВНЖ он не всегда считается трудовым договором или достаточным основанием. Перед использованием estágio для иммиграционной подачи проверьте требования конкретной категории у AIMA/консульства.»'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🛂 Стажировки для иностранцев',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Граждане EU', content: [
            { kind: 'checklist', items: [
              'Полное равенство прав с резидентами Португалии',
              'Регистрация CRUE: ≥ 90 дней резидентства',
              'Подача на estágio IEFP наравне с португальцами',
              'Erasmus+ — основной путь для студентов'
            ]}
          ]},
          { id: 'f2', title: 'Не-EU (студенты / работники с визой D)', content: [
            { kind: 'checklist', items: [
              'D4 Student: можно работать до 20 часов в неделю — стажировка входит',
              'Procuro Trabalho (D-visa): estágio может засчитываться как «trabalhar»',
              'Заменить на: «D3 подходит для highly qualified activity, а не для обычной стажировки. Если позиция оформлена как internship/traineeship, нужно отдельно проверять подходящую визу/ВНЖ: student, traineeship/research/temporary stay или work-based route — в зависимости от договора и принимающей организации.»',
              'Estágios IEFP требуют ВНЖ / паспорт EU — туристическая виза не подходит',
              'TPD (Ukraine): полные права на работу, включая estágio'
            ]}
          ]},
          { id: 'f3', title: 'CPLP', content: [
            { kind: 'paragraph', text: 'Бразильцы по CPLP mobility имеют полные права на работу, включая estágio. Часто в IEFP подаются на равных условиях с португальцами.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '🎯 Подавайтесь рано: IEFP открывает наборы каждые 2-3 мес, места заполняются быстро',
          '📝 CV на португальском: максимум 2 страницы, фото обычно ожидается, рекомендации приветствуются',
          '🗣️ Язык: португальский для большинства; технологии / консалтинг / стартапы часто дружелюбны к английскому',
          '🌐 Технологическая / стартап-сцена в Лиссабоне: проще для иностранцев, больше англоязычное сообщество',
          'Заменить на: «Bolsa de estágio обычно может облагаться IRS как rendimento de trabalho/dependent income, но retenção na fonte зависит от суммы, статуса и актуальных таблиц; на низких bolsas удержание может быть нулевым. Итоговый налог считается в годовой декларации IRS.»',
          '🎓 Дополнительно к estágio: оформить Cartão Jovem (€8/год) — скидки на транспорт, музеи',
          '🏆 Outsystems / Critical: лучшие компании для технологических стажировок, возможен переход на полную занятость + поддержка с разрешением на работу',
          '📅 Сезонность: IT-стажировки — основной набор сентябрь / февраль; финансы — июнь-июль; государственные программы — ежеквартально'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Bolsa IEFP estágio (1.3 IAS)', amountEUR: 698, note: '≈€698.27/мес при IAS 2026 €537.13' },
    { label: 'Bolsa IEFP estágio (1.6 IAS)', amountEUR: 859, note: '≈€859.41/мес для более высокого уровня' },
    { label: 'Минимум для extracurricular (Decreto-Lei 66/2011)', amountEUR: 537, note: 'IAS 2026 €537.13' },
    { label: 'Частная технологическая стажировка', amountEURMin: 800, amountEURMax: 1500, note: '€/мес' },
    { label: 'Грант Erasmus+ для стажёра', amountEURMin: 600, amountEURMax: 1100, note: '€/мес' },
    { label: 'Учебная стажировка', amountEURMin: 0, amountEURMax: 700, note: '€/мес' }
  ],
  sources: [
    { title: 'IEFP — Estágios Profissionais', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Erasmus+ Portugal', url: 'https://erasmusmais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EURES Portugal', url: 'https://eures.europa.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}