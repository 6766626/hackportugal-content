export default {
  editorialVoice: 'hackportugal',
  id: 'social-supports',
  categoryId: 'healthcare',
  title: 'Социальная помощь в Португалии — RSI, субсидии, пособия',
  tldr: 'Португалия даёт широкий набор социальных пособий резидентам: **RSI** (rendimento social de inserção) — минимум для доходов <242 €/мес; **Subsídio de desemprego** (пособие по безработице) — 65% средней зарплаты до 12-30 мес; **Subsídio de habitação** (жилищная субсидия) — до 200 €/мес; **Tarifa Social Energia** — скидка 33% на электричество; **habitação social** (социальное жильё) — аренда по доходу. Требования: NISS, минимальный стаж взносов в Segurança Social (зависит от пособия), легальное проживание.',
  tags: ['rsi', 'subsídio', 'социальная помощь', 'пособие'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rsi',
      title: '💰 RSI — Rendimento Social de Inserção',
      content: [
        { kind: 'paragraph', text: 'RSI — базовое пособие для лиц / семей с доходом ниже минимума. Государство гарантирует минимальный доход (социальный контракт «ти даёшь труд, мы даём базовый доход»).' },
        { kind: 'checklist', items: [
          '📊 **Размер**: ~242,30 €/мес для первого взрослого (2026, привязка к базовому значению Segurança Social). +50% на супруга (~121 €), +30% на ребёнка',
          '🧾 **Условия**: совокупный доход семьи < пороговой суммы; не иметь значительного имущества; готовность работать (есть обязанность искать работу через IEFP)',
          '📅 **Длительность**: 12 мес, продление каждый год при сохранении условий',
          '👨‍👩‍👧 **Для иностранцев**: легальное проживание в PT ≥ 1 года (3 лет для граждан не из EU). Исключение: беженцы, TPD — с момента получения статуса',
          '📍 **Подача**: SS Direta → «Prestações» → «Rendimento Social de Inserção», или в отделении ISS',
          '⏱️ **Обработка**: 30-60 дней',
          '📋 **Обязательства**: регистрация в IEFP как ищущий работу, посещение обязательных курсов / собеседований, не отказываться от «подходящей» работы'
        ]},
        { kind: 'warning', text: 'RSI несовместим с: subsídio de desemprego, полноценной работой (>RSI-порога), значительным имуществом (>4× RSI в банке). Несоблюдение правил = потеря на 2 года.' }
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
              'Уволен **не по своей вине** (ст. 381, 387 Código do Trabalho) — сокращение, банкротство, ликвидация должности',
              '❌ Добровольное увольнение — не дают (исключение: серьёзные личные обстоятельства)',
              '❌ ИП (recibos verdes) без cessação de atividade — не покрывается',
              'Нужно быть готовым работать и зарегистрированным в IEFP'
            ]}
          ]},
          { id: 'u2', title: 'Размер и срок', content: [
            { kind: 'checklist', items: [
              '**65% средней зарплаты** за последние 12 мес (брутто), максимум ~ 2.5× IAS = 1 342 €/мес (2026)',
              'Минимум: 1× IAS = 537,13 €/мес',
              'Срок зависит от возраста + стажа:',
              '  < 30 лет, 540-720 взносов: 12-18 мес',
              '  30-40 лет, 720-1080: 18-24 мес',
              '  ≥ 50 лет, 1800+: до 30 мес',
              'После истечения: Subsídio Social de Desemprego (80% RSI, 6-18 мес дополнительно) если низкий доход семьи'
            ]}
          ]},
          { id: 'u3', title: 'Подача', content: [
            { kind: 'checklist', items: [
              '**Шаг 1**: регистрация в Centro de Emprego (IEFP) как безработный',
              '**Шаг 2**: на SS Direta — «Prestações» → «Subsídio de desemprego» → заполнить',
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
              '**Porta 65 Jovem**: для молодёжи 18-35 лет — до 200 €/мес субсидия на аренду',
              '**Apoio ao Arrendamento** (IHRU): для семей с низким доходом, до 50% арендной платы',
              'Требования: доход семьи ≤ 4× IAS, договор аренды',
              'Подача: ihru.pt → Candidaturas',
              'Обработка: 2-6 мес'
            ]}
          ]},
          { id: 'h2', title: 'Habitação Social (муниципальное жильё)', content: [
            { kind: 'checklist', items: [
              'Аренда квартиры у муниципалитета по формуле (доход × %)',
              'Ставка: обычно 20-80 €/мес (зависит от дохода и размера семьи)',
              'Очередь: 3-10 лет в Лиссабоне / Порту, быстрее в регионах',
              'Подача: в Câmara Municipal по месту жительства',
              'Приоритет: многодетные семьи, инвалиды, пенсионеры, жертвы домашнего насилия'
            ]}
          ]},
          { id: 'h3', title: 'Renda Acessível', content: [
            { kind: 'paragraph', text: 'Программа для работающих людей со средним и низким доходом: аренда на 20-30% ниже рыночной в специально отведённых зданиях. Распределение через SIGA, бюджет от муниципалитетов.' }
          ]}
        ]}
      ]
    },
    {
      id: 'energy',
      title: '⚡ Tarifa Social de Energia',
      content: [
        { kind: 'checklist', items: [
          'Скидка **33,8%** на электричество + **10%** на газ',
          'Автоматически применяется, если вы в одной из категорий:',
          '  - получатель RSI',
          '  - Subsídio de desemprego',
          '  - Abono de Família 1-2 эшелон',
          '  - Пенсионер с доходом < 6 820 €/год',
          '  - Complemento Solidário para Idosos',
          'EDP / Galp / Endesa — автоматическое применение по данным Segurança Social',
          'Если не применилось — запрос через поставщика + сверка через сайт dgeg.gov.pt',
          'Действует постоянно, пока статус сохраняется'
        ]}
      ]
    },
    {
      id: 'other-benefits',
      title: '🎁 Другие пособия',
      content: [
        { kind: 'checklist', items: [
          '🧒 **Abono de Família**: для детей < 18 / 24 студент / 27 инвалид. 40-190 €/мес в зависимости от эшелона (см. отдельный гайд)',
          '👶 **Subsídio Parental**: 120-180 дней декрета 100% / 90% зарплаты',
          '🎒 **Apoio às despesas escolares**: скидка на учебники, материалы — ISS.gov.pt',
          '🧑‍🎓 **Bolsa de estudo**: для университета — DGES, 500-5 000 €/год',
          '♿ **Complemento por Dependência**: для инвалидов и нуждающихся в уходе — до 100-200 €/мес',
          '👵 **Complemento Solidário para Idosos (CSI)**: для пенсионеров с доходом < IAS',
          '🧑‍⚕️ **Isenção de taxas moderadoras**: автоматически для получателей пособий + беременные, дети < 18, пенсионеры > 65 с низким доходом'
        ]}
      ]
    },
    {
      id: 'how-to-apply',
      title: '📋 Общий процесс подачи',
      content: [
        { kind: 'checklist', items: [
          '1. Зайти в **SS Direta** (seg-social.pt) или отделение ISS',
          '2. Собрать: CC/ВНЖ, NISS, IBAN, доказательства дохода (3-12 мес), состав семьи, документы иждивенцев',
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
    { label: 'RSI первому взрослому', amountEUR: 242.30, note: '€/мес 2026' },
    { label: 'Минимум Subsídio desemprego', amountEUR: 537.13, note: '€/мес (1 IAS)' },
    { label: 'Максимум Subsídio desemprego', amountEUR: 1342, note: '€/мес (2.5 IAS)' },
    { label: 'Porta 65 Jovem (аренда)', amountEURMin: 100, amountEURMax: 200, note: '€/мес' },
    { label: 'Habitação social (аренда)', amountEURMin: 20, amountEURMax: 80, note: '€/мес' },
    { label: 'Скидка Tarifa Social energia', amountEUR: 0, note: '33.8% от счёта' }
  ],
  sources: [
    { title: 'Segurança Social — prestações', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IHRU — Apoios ao arrendamento', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IEFP — Centro de Emprego', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Tarifa Social Energia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal65 — Porta 65 Jovem', url: 'https://www.portaldahabitacao.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}