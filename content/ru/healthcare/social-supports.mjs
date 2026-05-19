export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Социальная помощь в Португалии — RSI, субсидии, пособия',
  tldr: 'Португалия даёт широкий набор социальных пособий резидентам: RSI (rendimento social de inserção) — доплата до референтной суммы домохозяйства (100% базы для заявителя, 70% за каждого следующего взрослого, 50% за ребёнка); Subsídio de desemprego — около 65% remuneração de referência, максимум 2,5×IAS (€1 342,83 в 2026), срок по таблице Segurança Social по возрасту и стажу; Porta 65 Jovem — субсидия на аренду (размер по таблицам IHRU, не фиксированный cap); Tarifa Social Energia Elétrica — около 33,8% скидки на eligible tariff components (для газа — отдельный тариф ~31,2%); habitação social — аренда по renda apoiada formula. Требования: легальное проживание в PT, проверка доходов/имущества, и иногда минимальный стаж взносов.',
  tags: ['rsi', 'subsídio', 'социальная помощь', 'пособие'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'RSI — доплата до референтной суммы домохозяйства для семей с очень низким доходом. Состав расчёта: 100% базовой суммы для заявителя, 70% для каждого следующего взрослого, 50% для каждого несовершеннолетнего; выплата = эта референтная сумма минус учитываемые доходы семьи.' },
        { kind: 'checklist', items: [
          '📊 Базовая сумма: около €242,8/мес для заявителя в 2026 (≈ 45,208% IAS €537,13); +70% этой суммы за каждого дополнительного взрослого; +50% за каждого несовершеннолетнего',
          '🧾 Условия: совокупный доход семьи < пороговой суммы; ограничение по движимому имуществу (обычно ≤ 60× IAS); готовность работать (есть обязанность искать работу через IEFP)',
          '📅 Длительность: 12 мес, продление каждый год при сохранении условий',
          '👨‍👩‍👧 Для иностранцев: законное проживание в Португалии; для граждан третьих стран Segurança Social обычно требует residence permit/легальное проживание не менее 1 года. Для беженцев и некоторых защищённых статусов — специальные правила (проверять актуальный Guia Prático RSI)',
          '📍 Подача: SS Direta → «Prestações» → «Rendimento Social de Inserção», или в отделении ISS',
          '⏱️ Обработка: 30-60 дней',
          '📋 Обязательства: регистрация в IEFP как ищущий работу, посещение обязательных курсов / собеседований, не отказываться от «подходящей» работы'
        ]},
        { kind: 'warning', text: 'Пособие по безработице, зарплата и другие доходы учитываются при расчёте RSI и могут уменьшить или исключить выплату. Движимое имущество семьи не должно превышать установленный лимит (обычно 60× IAS)\.\n\nНесоблюдение правил/сокрытие доходов = потеря права и санкции.' }
      ]
    },
    {
      id: 'unemployment',
      title: '📉 Subsídio de desemprego (пособие по безработице)',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Требования', content: [
            { kind: 'checklist', items: [
              '≥ 360 дней взносов в Segurança Social за последние 24 мес',
              'Состояние desemprego involuntário: despedimento coletivo, extinção do posto de trabalho, inadaptação, caducidade de contrato a termo, банкротство работодателя, расторжение работником с justa causa (подтверждённое документами)',
              '❌ Добровольное увольнение без justa causa — не дают',
              'Для recibos verdes обычный subsídio de desemprego не применяется. Возможны отдельные пособия при cessação de atividade для экономически зависимых trabalhadores independentes или empresários/gerentes при специальных условиях по взносам и прекращению деятельности',
              'Нужно быть готовым работать и зарегистрированным в IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Размер и срок', content: [
            { kind: 'checklist', items: [
              'Обычно 65% remuneração de referência: сумма зарегистрированных remunerations за первые 12 месяцев из 14 месяцев, предшествующих безработице, делённая на 360',
              'Максимум: 2,5× IAS = €1 342,83 в 2026 (не выше установленных ограничений по net reference remuneration)',
              'Минимум: обычно 1× IAS = €537,13 в 2026, но не выше net remuneration de referência; при очень низкой зарплате пособие может быть ниже IAS',
              'Срок определяется таблицей Segurança Social по возрасту и стажу: от 150 дней для молодых работников с минимальным стажем до 540 дней и более с добавочными днями за длинную карьеру. Подробную таблицу см. в Guia Prático Subsídio de Desemprego',
              'Subsídio social de desemprego доступен при low household income; размер обычно 80% IAS для одинокого или 100% IAS для лица с household; срок зависит от возраста/стажа и от того, назначается ли он initial или subsequent после subsídio de desemprego'
            ]}
          ]},
          { id: 'u3', title: 'Подача', content: [
            { kind: 'checklist', items: [
              'Шаг 1: регистрация в Centro de Emprego (IEFP) как безработный',
              'Шаг 2: на SS Direta — «Prestações» → «Subsídio de desemprego» → заполнить',
              'Или: через отделение ISS с документами (трудовой договор, письмо об увольнении)',
              '📅 Срок: в течение 90 дней после увольнения',
              '⏱️ Начисление: 30-45 дней на обработку, деньги приходят с обратным действием к дате увольнения'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'housing',
      title: '🏠 Жильё — субсидии и социальное жильё',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Subsídio de Renda / Porta 65', content: [
            { kind: 'checklist', items: [
              'Porta 65 Jovem: для 18–35 лет (в паре один из заявителей может быть до 37). Размер — процент от eligible rent по таблицам IHRU/Portal da Habitação, а не фиксированный cap €200. Размер рассчитывается симулятором Portal da Habitação',
              'Apoio extraordinário à renda — денежная поддержка арендаторам при высоком esforço com renda, обычно до €200/мес, по условиям закона и через AT/Segurança Social',
              'Programa de Arrendamento Acessível — договоры аренды с rent below reference values и налоговыми льготами для landlords. Это не универсальная субсидия 50%',
              'Критерии зависят от программы: Porta 65 — age, lease, tax residence, income/rent-effort и maximum rent tables; apoio extraordinário à renda — effort rate и household income criteria',
              'Подача: portaldahabitacao.pt → Candidaturas',
              'Обработка: 2-6 мес'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (муниципальное жильё)', content: [
            { kind: 'checklist', items: [
              'Аренда квартиры у муниципалитета по regime de renda apoiada (Lei 81/2014) на основе дохода и состава семьи; может быть очень низкой, без универсального диапазона',
              'Очередь: 3-10 лет в Лиссабоне / Порту, быстрее в регионах',
              'Подача: в Câmara Municipal по месту жительства',
              'Приоритеты зависят от муниципалитета: homelessness, unsafe housing, disability, elderly, minors/dependants, domestic violence victims, low income, overcrowding и др.'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'Программа для работающих людей со средним и низким доходом: национальный Programa de Arrendamento Acessível работает через rent below reference values и налоговые льготы для landlords. Муниципальные программы renda acessível подаются через сайты Câmara/municipal platforms и могут использовать lotteries; правила отличаются по городу.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          'Tarifa Social Electricidade: скидка около 33,8% на eligible regulated tariff components (итоговое снижение счёта ниже, потому что налоги и audiovisual contribution не дисконтируются одинаково). Требуется domestic low-voltage contract с potência contratada ≤ 6,9 kVA',
          'Tarifa Social Gás Natural: отдельная скидка около 31,2%. Критерии строже, чем для электричества — например, для категории abono de família пороги уже; полный список — на dgeg.gov.pt',
          'Автоматически применяется, если вы в одной из категорий (по полному списку DGEG для электричества):',
          '  - CSI (Complemento Solidário para Idosos)',
          '  - RSI (Rendimento Social de Inserção)',
          '  - Любой subsídio de desemprego: contributivo, social inicial, social subsequente, prolongamento, parcial, cessação atividade, cessação negócio, apoio desempregados de longa duração',
          '  - Abono de Família 1-2 эшелон',
          '  - Pensão Social de Velhice / Invalidez (для электричества)',
          '  - Complemento da Prestação Social para a Inclusão (для электричества)',
          '  - Households с annual income ≤ €6 272 (+€3 136 за каждого члена без дохода, до 10 человек). Актуальный порог — на dgeg.gov.pt',
          'EDP / Galp / Endesa и др. — автоматическое применение по данным Segurança Social / AT / NIF',
          'Если автоматическое сопоставление не сработало — попросите подтверждение в Segurança Social/AT, передайте поставщику; сверка через dgeg.gov.pt',
          'Действует постоянно, пока статус сохраняется'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Другие пособия',
      content: [
        { kind: 'checklist', items: [
          '🧒 Abono de Família: для детей < 18 / 24 студент / 27 инвалид. 40-190 €/мес в зависимости от эшелона (см. отдельный гайд)',
          '👶 Subsídio parental inicial: проценты зависят от выбранной длительности и sharing между родителями: 120 дней — 100%, 150 дней — 80% (или 100% при разделении по правилам SS), 180 дней — 90% при shared-leave rules. Проверять таблицу Segurança Social',
          '🎒 Apoio às despesas escolares: скидка на учебники, материалы — ISS.gov.pt',
          '🧑‍🎓 Bolsa de estudo: для университета — DGES, 500-5 000 €/год',
          '♿ Complemento por Dependência: для инвалидов и нуждающихся в уходе — до 100-200 €/мес',
          '👵 Complemento Solidário para Idosos (CSI): доплата для пожилых с annual resources ниже CSI reference threshold; учитываются доходы заявителя, супруга/партнёра и в ряде случаев children. Порог брать из актуального Guia Prático CSI',
          '🧑‍⚕️ Taxas moderadoras в SNS в основном отменены (Lei n.º 22/2022), но могут применяться в urgência без referral от SNS24/INEM/центра здоровья и без последующей госпитализации. Isenções существуют для minors, pregnant women, people with economic insufficiency, certain chronic conditions/disabilities и других legal categories'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Общий процесс подачи',
      content: [
        { kind: 'checklist', items: [
          '1. Зайти в SS Direta (seg-social.pt) или отделение ISS',
          '2. Собрать базовый комплект: CC/ВНЖ, NIF, NISS, IBAN, доказательства дохода (3-12 мес), состав семьи, документы иждивенцев. Список зависит от пособия: для desemprego нужна employer declaration/modelo RP5044 или эквивалент и IEFP registration; для housing — registered lease и tax data; для RSI — proof of household income/assets и residence status',
          '3. Подать онлайн или лично',
          '4. Ждать решения (30-90 дней)',
          '5. При одобрении — автоматические выплаты на IBAN ежемесячно',
          '6. Годовой пересмотр — подтвердить доходы, семейное положение',
          '⚠️ Не скрывайте доходы: Segurança Social сверяет данные с налоговой службой, придётся возвращать выплаты + штраф до 3-кратного размера'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'RSI базовая сумма для заявителя', amountEUR: 242.80, note: '€/мес 2026 (≈ 45,208% × IAS €537,13)' },
    { label: 'Минимум Subsídio desemprego', amountEUR: 537.13, note: '€/мес (1× IAS), но не выше net remuneration de referência' },
    { label: 'Максимум Subsídio desemprego', amountEUR: 1342.83, note: '€/мес (2,5× IAS 2026)' },
    { label: 'Porta 65 Jovem (аренда)', amountEUR: 0, note: 'размер варьируется — рассчитывается симулятором Portal da Habitação по eligible rent и municipality' },
    { label: 'Habitação social (аренда)', amountEUR: 0, note: 'рассчитывается муниципалитетом по renda apoiada formula (Lei 81/2014)' },
    { label: 'Tarifa Social electricity', amountEUR: 0, note: 'скидка ~33,8% на eligible tariff components (итоговое снижение счёта ниже после налогов)' },
    { label: 'Tarifa Social natural gas', amountEUR: 0, note: 'отдельная скидка ~31,2% для eligible low-pressure household contracts' }
  ],
  sources: [
    { title: 'Segurança Social — Guia Prático RSI', url: 'https://www.seg-social.pt/rendimento-social-de-insercao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Guia Prático Subsídio de Desemprego', url: 'https://www.seg-social.pt/subsidio-de-desemprego', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Subsídio Parental', url: 'https://www.seg-social.pt/parentalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Complemento Solidário para Idosos', url: 'https://www.seg-social.pt/complemento-solidario-para-idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IHRU / Portal da Habitação — Porta 65 Jovem', url: 'https://www.portaldahabitacao.pt/web/guest/porta-65-jovem', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IEFP — Centro de Emprego', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Energia Elétrica', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia-eletrica/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGEG — Tarifa Social de Gás Natural', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/gas-natural/tarifa-social/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}