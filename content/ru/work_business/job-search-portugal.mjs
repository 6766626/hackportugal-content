export default {
  editorialVoice: 'hackportugal',
  id: 'job-search-portugal',
  categoryId: 'work_business',
  title: 'Поиск работы в Португалии — сайты и стратегия',
  tldr: 'Четыре канала: общие (LinkedIn, Net-Empregos, Jobs.at), IT (Landing.jobs, ITJobs.pt, RemoteOK, We Work Remotely, Welcome to the Jungle), руководящие вакансии (Michael Page, Hays), удалённая работа на португальские компании из-за границы. Минимальная зарплата 2026 — 920 €/мес до вычета налогов. Средняя IT-зарплата мидл-специалиста — 2 500–4 000 € до вычета налогов; сеньор — 4 500–7 500 €. Для иностранцев знание португальского/английского необходимо; только английский — в IT и стартапах.',
  tags: ['работа', 'вакансии', 'linkedin', 'it', 'найм'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'general',
      title: 'Общие порталы вакансий',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'LinkedIn', content: [
            { kind: 'checklist', items: [
              'Доминирует в IT, маркетинге, продажах, топ-менеджменте',
              'Лучший для экспатов — большинство рекрутеров говорит по-английски',
              'Уведомления по ключевым словам и географии',
              'LinkedIn Premium (30 €/мес) ускоряет отклики'
            ]}
          ]},
          { id: 'g2', title: 'Net-Empregos (net-empregos.com)', content: [
            { kind: 'paragraph', text: 'Крупнейший португальский портал. Вакансии всех уровней и отраслей. Много вакансий на португальском — для низкоквалифицированных позиций португальский часто обязателен.' }
          ]},
          { id: 'g3', title: 'Indeed.pt', content: [
            { kind: 'paragraph', text: 'Агрегатор. Дублирует LinkedIn + Net-Empregos + прямые вакансии. Удобный фильтр «англоязычные вакансии».' }
          ]},
          { id: 'g4', title: 'Jobs.at (PT)', content: [
            { kind: 'paragraph', text: 'Немецкая платформа, популярна в DACH-компаниях в Португалии. Много вакансий на английском, хорошие условия.' }
          ]},
          { id: 'g5', title: 'IEFP — Instituto do Emprego', content: [
            { kind: 'paragraph', text: 'Государственный портал. Регистрация обязательна для безработных с пособием. Низкоквалифицированные вакансии + некоторые субсидии.' }
          ]}
        ]}
      ]
    },
    {
      id: 'it',
      title: 'Специализированные IT-порталы',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Landing.jobs', content: [
            { kind: 'checklist', items: [
              'Крупнейшая IT-платформа Португалии',
              'Фильтры для удалённой, гибридной и офисной работы',
              'Прозрачные зарплаты',
              'Много стартапов и растущих компаний',
              'Помогают с переездом (визы, релокация)'
            ]}
          ]},
          { id: 'i2', title: 'ITJobs.pt', content: [
            { kind: 'paragraph', text: 'Локальный португальский IT-портал. Больше корпоративных и крупных компаний (банки, телеком). Часто требуется португальский.' }
          ]},
          { id: 'i3', title: 'RemoteOK / We Work Remotely / Welcome to the Jungle', content: [
            { kind: 'paragraph', text: 'Международные удалённые вакансии (Stack Overflow Jobs закрыт ещё в 2022). Португальские компании присутствуют, платят по европейским стандартам. Часто полностью на английском.' }
          ]},
          { id: 'i4', title: 'Wellfound (AngelList)', content: [
            { kind: 'paragraph', text: 'Сообщество стартапов. В Лиссабоне сильное присутствие. Опционы и зарплата прозрачны.' }
          ]}
        ]}
      ]
    },
    {
      id: 'executive',
      title: 'Руководящие вакансии / скрытый рынок',
      content: [
        { kind: 'checklist', items: [
          'Michael Page — подбор на руководящие позиции, 60K+',
          'Hays — позиции среднего и старшего уровня',
          'Adecco / Randstad — временные и постоянные позиции',
          'SpencerStuart, Korn Ferry — топ-менеджмент',
          'Нетворкинг на митапах (Lisbon Entrepreneurs, Porto Tech Hub) — часто находят до публикации'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Процесс найма',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Резюме по португальскому стандарту', content: [
            { kind: 'checklist', items: [
              '1–2 страницы максимум',
              'Фото — часто ожидают (меньше чем раньше)',
              'Europass для португальских корпораций',
              'Прямой стиль LinkedIn для стартапов и удалённой работы',
              'Даты DD/MM/YYYY (не в американском формате)'
            ]}
          ]},
          { id: 'p2', title: '2. Этапы интервью', content: [
            { kind: 'checklist', items: [
              'Первичный отбор HR (20 мин, португальский/английский)',
              'Техническое интервью (для IT)',
              'Собеседование с менеджером',
              'Кейс / тестовое задание',
              'Финальное собеседование с топ-менеджером или владельцем',
              'Письменное предложение — обязательно проверять'
            ]}
          ]},
          { id: 'p3', title: '3. Переговоры о зарплате', content: [
            { kind: 'paragraph', text: 'В Португалии зарплаты обсуждаемы. Фраза «Qual é a vossa banda salarial?» (какой у вас диапазон) — стандарт. Не говорите первую цифру; если настаивают — указывайте ожидаемую сумму до вычета налогов, обычно с запасом для переговоров.' }
          ]},
          { id: 'p4', title: '4. Трудовой договор', content: [
            { kind: 'checklist', items: [
              'Типы трудового договора: sem termo (бессрочный), a termo certo (срочный с фиксированной датой), a termo incerto (срочный без фиксированной даты). Recibos verdes — не трудовой договор, а prestação de serviços/самозанятость; проверьте риск falso recibo verde',
              'Испытательный срок (período experimental): 90 дней / 180 для сеньоров',
              'Мин. зарплата 2026: 920 €/мес до вычета налогов',
              'Обычно 14 выплат в год: 12 зарплат + subsídio de férias + subsídio de Natal; иногда субсидии выплачиваются частями (duodécimos)',
              'ДМС — часто бонус'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: 'Для иностранцев — специфика',
      content: [
        { kind: 'checklist', items: [
          '🔑 Знание языка: английского для IT/стартапов достаточно. Португальский для корпоративного сектора/продаж обязателен',
          '🌍 Удалённая работа — компания из другой страны ЕС: найм в Португалии через EOR (Deel, Remote, Oyster)',
          '🎓 Признание дипломов: для регулируемых профессий (врач, архитектор, инженер) — через DGES + Ordens',
          '🔒 Виза D3 (высококвалифицированный специалист) — предложение работы обязательно',
          '🌴 IFICI/NHR 2.0 может дать 20% IRS на eligible employment/self-employment income, но только для квалифицированных профессий и деятельности из утверждённых перечней (Estatuto dos Benefícios Fiscais art. 58-A; Portaria 352/2024/1) и при выполнении условий режима; обычная IT-должность сама по себе не гарантирует право',
          '📋 Граждане вне ЕС: виза D1/D3 оформляется в консульстве/VFS на основании трудового контракта (или предварительного предложения о работе) и требований к деятельности. Никакого отдельного «Contrato de Trabalho com Visto» от AIMA нет; AIMA выдаёт ВНЖ уже после въезда',
          '💼 Сайты компаний с явным фокусом на экспатов: Unbabel, Mollie, Farfetch, Outsystems, Revolut PT'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Мин. зарплата в Португалии 2026', amountEUR: 920, note: 'до вычета налогов/мес' },
    { label: 'Средняя зарплата по стране', amountEUR: 1700, note: 'до вычета налогов/мес' },
    { label: 'IT-разработчик мидл-уровня', amountEURMin: 2500, amountEURMax: 4000, note: 'до вычета налогов/мес' },
    { label: 'IT сеньор + лид', amountEURMin: 4500, amountEURMax: 7500, note: 'до вычета налогов/мес' }
  ],
  sources: [
    { title: 'IEFP — Instituto do Emprego e Formação Profissional', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — Estatísticas de salários', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do Trabalho (трудовой кодекс)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}