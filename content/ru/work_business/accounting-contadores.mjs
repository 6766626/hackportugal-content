export default {
  editorialVoice: 'hackportugal',
  id: 'accounting-contadores',
  categoryId: 'work_business',
  title: 'Как найти бухгалтера (contabilista) в Португалии',
  tldr: 'Для юрлиц (Lda, SA) и для ИП/freelancers на contabilidade organizada — обязателен Contabilista Certificado (член OCC). Для recibos verdes в regime simplificado бухгалтер не обязателен даже если вы стали IVA-плательщиком, но часто полезен.\n\nСтоимость: 50-150 €/мес для ИП, 200-600 €/мес для маленького юрлица. Искать: OCC.pt (каталог), LinkedIn, русско- и англоговорящие специалисты в группах экспатов.',
  tags: ['contabilista', 'бухгалтер', 'toc', 'ип'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-need',
      title: '❓ Когда бухгалтер обязателен',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Recibos verdes (ИП)', content: [
            { kind: 'checklist', items: [
              '< 15 000 € оборот/год — бухгалтер не обязателен, можете подавать сами через Portal das Finanças (IRS simplificado)',
              '> 15 000 € оборот — обычно теряете isenção de IVA (CIVA art. 53) и должны подавать IVA; бухгалтер не обязателен, если остаётесь в regime simplificado, но может быть полезен',
              'Contabilidade organizada обязательна при выходе из regime simplificado (обычно после превышения €200 000 в течение двух налоговых периодов подряд по CIRS art. 28) или по добровольному выбору — тогда нужен Contabilista Certificado',
              'С режимом IFICI — часто нанимают даже при малом обороте для сложных деклараций'
            ]}
          ]},
          { id: 'w2', title: 'Юридические лица', content: [
            { kind: 'checklist', items: [
              'Все Lda, Unipessoal Lda и SA обычно должны иметь Contabilista Certificado, члена OCC. «TOC» — старое разговорное название',
              'Важно: IES (Informação Empresarial Simplificada) — сдаётся ежегодно',
              'Comunicação de faturas в AT — обычно ежемесячно, до установленного срока, через e-fatura/SAF-T или certified invoicing software',
              'Аудитор/ROC обычно не нужен маленькой Lda. Для Lda без conselho fiscal обязанность возникает при превышении 2 из 3 порогов: total do balanço €1,5 млн, vendas líquidas €3 млн, среднее число работников 50. Для SA и регулируемых сфер правила строже'
            ]}
          ]},
          { id: 'w3', title: 'Когда не нужен', content: [
            { kind: 'checklist', items: [
              'Сотрудник по трудовому договору — работодатель платит налоги за вас',
              'Обычная долгосрочная аренда как физлицо — Anexo F в IRS; contabilista certificado обычно не обязателен независимо от суммы. Для alojamento local или арендного бизнеса может применяться категория B/IVA',
              'Фрилансер < 15k — упрощённый режим через Portal самостоятельно',
              'Инвестиционный доход без активной деятельности — Anexo G, E в IRS'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'where-find',
      title: '🔍 Где искать',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Официальный каталог (OCC)', content: [
            { kind: 'checklist', items: [
              'Ordem dos Contabilistas Certificados — occ.pt',
              'Раздел «Encontrar Contabilista» — поиск по городу, специализации',
              'Проверить регистрацию у всех, с кем общаетесь — не работайте с незарегистрированными',
              'Нюанс: правительство требует, чтобы TOC сообщали обо всех клиентах — если бухгалтер без регистрации, он нарушает закон, и его подписи недействительны'
            ]}
          ]},
          { id: 'f2', title: 'Сообщества экспатов', content: [
            { kind: 'checklist', items: [
              'Группы Facebook: "Portugal Americans", "Expats in Lisbon", "Русскоязычные в Португалии" — спросить рекомендации',
              'Telegram: @portugalpages — справочник; @lisbon_chat — периодически обсуждают бухгалтеров',
              'LinkedIn: поиск "TOC English-speaking Portugal" — есть подкатегория для специалистов, работающих с экспатами',
              'Reddit: r/Portugal, r/portugalexpats — ветка с рекомендациями обновляется регулярно',
              'Коворкинги: часто имеют партнёров-бухгалтеров со скидкой для членов (Avila Spaces, Cowork Central)'
            ]}
          ]},
          { id: 'f3', title: 'Специализированные фирмы', content: [
            { kind: 'checklist', items: [
              'Для IFICI / NHR: крупные фирмы знают тонкости — PwC, KPMG, Deloitte (дорого: 1500-5000 €/год)',
              'С цифровым подходом: JustAccounts, Cegoc, Gurunima — онлайн-бухгалтерия с поддержкой на английском, 50-150 €/мес',
              'Международные бренды: Berkshire Accounting, PortugalClue, NHRPortugal',
              'Локальные: в каждом городе есть — спросите в жилом комплексе'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'prices',
      title: '💰 Сколько стоит',
      content: [
        { kind: 'checklist', items: [
          '🎯 Recibos verdes simple (< 15k оборот): не обязательно, но для помощи с IRS — 100-200 € разово',
          '🎯 Recibos verdes с IVA (15-75k): 50-150 €/мес или поквартально; в regime simplificado декларация IVA обычно поквартальная (ежемесячная — при обороте выше порога CIVA, €650 000)',
          '🎯 Recibos verdes высокий оборот (75k+): 100-200 €/мес + SAF-T',
          '🏢 Unipessoal Lda (мелкий юр): 150-300 €/мес',
          '🏢 SA / большой Lda: 300-800 €/мес + аудитор',
          '➕ Отдельно: годовой отчёт IES — 100-300 €; консультации 50-100 €/час',
          '🌐 Наценка за английский: +30-50% к локальным ценам',
          '💳 Оплата: чаще ежемесячное прямое списание или перевод, некоторые — поквартально'
        ]}
      ]
    },
    {
      id: 'checklist',
      title: '✅ Чек-лист: что должен делать',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Ежемесячно / периодически', content: [
            { kind: 'checklist', items: [
              'Декларации IVA (квартал / месяц) — обычно до 20-го числа второго месяца после периода, оплата до 25-го (CIVA art. 41)',
              'Segurança Social отчёты — если у вас сотрудники',
              'Retenção na fonte — удержания с ИП-контракторов, поставщиков',
              'SAF-T — для больших оборотов'
            ]}
          ]},
          { id: 'c2', title: 'Ежегодно', content: [
            { kind: 'checklist', items: [
              'IRS (физлица / ИП) — подача апрель-июнь',
              'Modelo 22 (IRC для компаний) — подача до 31 мая',
              'IES (информационная декларация) — до 15 июля',
              'Декларация дивидендов / распределения прибыли',
              'Активный статус (atividades) — обновить, если поменялось CAE / адрес'
            ]}
          ]},
          { id: 'c3', title: 'По запросу', content: [
            { kind: 'checklist', items: [
              'Регистрация новой atividade в AT',
              'Закрытие atividade (cessação)',
              'Подача заявлений в AT (dispensas, reclamações)',
              'Ответ на notificações AT (аудиты, запросы)',
              'Помощь с заявлением на IFICI или NHR',
              'Советы по оптимизации налогов'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'red-flags',
      title: '🚩 На что обратить внимание',
      content: [
        { kind: 'checklist', items: [
          '✅ Регистрация в OCC — обязательна. Бухгалтер должен быть членом Ordem',
          '✅ Письменный договор — описаны объём работ, сроки, стоимость',
          '✅ Ежемесячные отчёты — хорошие бухгалтеры шлют сводку каждый месяц',
          '✅ Доступ к Portal AT — через вашу CMD / CC, не через его аккаунт',
          '✅ Английский или русский — если вы не говорите по-португальски, ищите двуязычного специалиста',
          '❌ «Мы оптимизируем, вы не пожалеете» без подробностей — красный флаг, потенциальная незаконная схема',
          '❌ Без регистрации в OCC или с аннулированной регистрацией — нельзя подписывать, ваши декларации будут отклонены',
          '❌ Не отвечает неделями — меняйте',
          '❌ Требует копию PIN CMD — нет, никогда. Вы всегда сами подтверждаете',
          '❌ «Не сообщу AT о вашем статусе» — вы ответственны перед AT, бухгалтер — помощник, но ответственность ваша'
        ]}
      ]
    },
    {
      id: 'change',
      title: '🔄 Как сменить бухгалтера',
      content: [
        { kind: 'checklist', items: [
          '1. Найти нового — по рекомендациям или через каталог OCC',
          '2. Уведомить старого письменно о прекращении услуг (обычно email достаточно)',
          '3. Запросить передачу документов — все ваши декларации, контракты с AT за 4+ года',
          '4. Новый бухгалтер регистрируется как ваш TOC на Portal AT (через вас с CMD)',
          '5. Сменить доступ в Portal — старому убрать',
          '6. Проверить первый месяц работы нового — на чистоту перехода',
          '⚠️ Смена посреди года — возможно, но сложнее (новый должен принять вашу историческую отчётность)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Бухгалтер для ИП без IVA', amountEURMin: 0, amountEURMax: 200, note: '€/год' },
    { label: 'Бухгалтер для ИП с IVA', amountEURMin: 50, amountEURMax: 150, note: '€/мес' },
    { label: 'Unipessoal Lda (мелкий юр)', amountEURMin: 150, amountEURMax: 300, note: '€/мес' },
    { label: 'Наценка за английский/русский', amountEUR: 0, note: '+30-50%' },
    { label: 'Годовой отчёт IES (отдельно)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'Ordem dos Contabilistas Certificados (OCC)', url: 'https://www.occ.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — obrigações declarativas', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}