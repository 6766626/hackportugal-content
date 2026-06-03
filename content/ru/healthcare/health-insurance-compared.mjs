export default {
  editorialVoice: 'hackportugal',
  id: 'health-insurance-compared',
  categoryId: 'healthcare',
  title: 'Частная медстраховка в Португалии — Médis, Multicare, CUF и др.',
  tldr: 'SNS доступен зарегистрированным резидентам/utente; большинство основных услуг — без taxas moderadoras (Decreto-Lei n.º 37/2022), но лекарства, стоматология, очки и часть услуг оплачиваются отдельно или частично. Очереди на специалистов варьируются от недель до месяцев в зависимости от региона, приоритета и специальности. Частная страховка ускоряет — GP/urgent care часто в тот же день, specialists/exames за дни-недели. Ведущие страховщики: Médis (Ocidental–Ageas), Multicare (Fidelidade), Allianz Portugal, Generali Tranquilidade; AdvanceCare — сеть/администратор (не отдельный страховщик).\n\nЦены 2026: 30–80 €/мес базовый план, 100–250 €/мес полный. Для виз D7/D8 консульства обычно требуют travel medical insurance — точные требования у каждого консульства свои.',
  tags: ['страховка', 'здоровье', 'médis', 'multicare', 'частная медицина'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Зачем частная страховка при наличии SNS',
      content: [
        { kind: 'checklist', items: [
          '⏰ SNS: очереди к специалистам варьируются от недель до месяцев в зависимости от региона, приоритета и специальности',
          '🏥 Частная система обычно быстрее: GP/urgent care часто в тот же день, specialists/exames — от нескольких дней до недель в зависимости от сети и врача',
          '💊 Большинство taxas moderadoras в SNS отменены с 2022 года (Decreto-Lei n.º 37/2022); остаются, например, urgência без referral от SNS24/INEM/центра здоровья и некоторые услуги вне SNS',
          '🧪 Анализы/МРТ по SNS — от недель до месяцев; по страховке часто 1–2 недели',
          '💰 Вычет в IRS: 15% на despesas de saúde в пределах household cap (Código do IRS art. 78.º-C)',
          '🌍 Для виз D7 / D8 консульства обычно требуют travel medical insurance — конкретные требования отличаются по консульству',
          '👨‍⚕️ Выбор врача — по страховке обычно шире (в рамках сети); по SNS зависит от того, есть ли médico de família, и от системы referenciação'
        ]}
      ]
    },
    {
      id: 'providers',
      title: 'Основные страховщики',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Médis (Ageas)', content: [
            { kind: 'checklist', items: [
              'Популярен у иностранцев — приложение на английском',
              'Сеть ~300 прямых соглашений с клиниками',
              'Без предоплаты в партнёрских клиниках',
              'Пакеты: Basic, Complete, Health Total',
              'От 35 €/мес для здорового взрослого',
              'Высокий лимит годовых расходов (до 500 000 €)'
            ]}
          ]},
          { id: 'p2', title: 'Multicare (Fidelidade)', content: [
            { kind: 'checklist', items: [
              'Крупнейшая страховая группа в Португалии; Multicare — бренд медицинского страхования Fidelidade. Не государственная страховка (контрольный пакет — Fosun через Longrun Portugal)',
              'Сеть Hospital da Luz + CUF + Lusíadas',
              'Одна из самых широких сетей медицинских провайдеров',
              'Пакеты: Proteção, Vida, Vida+',
              'От 40 €/мес',
              'Сильная стоматология в пакете'
            ]}
          ]},
          { id: 'p3', title: 'AdvanceCare', content: [
            { kind: 'paragraph', text: 'Сеть/платформа медицинских услуг (managed-care/network administrator), а не отдельный страховщик. Часто задействована в страховых продуктах Generali Tranquilidade и партнёров; проверяйте, кто именно является юридическим страховщиком в полисе. От 30 €/мес.' }
          ]},
          { id: 'p4', title: 'Generali Tranquilidade', content: [
            { kind: 'paragraph', text: 'С 2024 года Tranquilidade принадлежит группе Generali и работает под брендом Generali Tranquilidade; в 2024 году она приобрела Liberty Seguros Portugal, юридическое слияние завершилось в 2025-м. Премиальные планы, международное покрытие, дороже, но сильная поддержка для иностранцев. От 50 €/мес.' }
          ]},
          { id: 'p4b', title: 'Allianz Portugal', content: [
            { kind: 'paragraph', text: 'Отдельная страховая группа (НЕ часть Tranquilidade/Generali). Health-планы и международное покрытие для экспатов. Сравнивайте отдельно.' }
          ]},
          { id: 'p5', title: 'ADSE (для работников публичного сектора)', content: [
            { kind: 'paragraph', text: 'ADSE — публичная подсистема здравоохранения для работников государственного сектора, пенсионеров публичной службы и их eligible dependants (Decreto-Lei n.º 7/2017). Это не частная страховая и не обычный полис для экспатов.' }
          ]}
        ]}
      ]
    },
    {
      id: 'clinics',
      title: 'Сети частных клиник',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Luz Saúde', content: [
            { kind: 'paragraph', text: 'Крупнейшая сеть в Лиссабоне и Порту. Hospital da Luz — флагман. Принимаемые страховки зависят от конкретного Hospital/Clínica da Luz, плана, врача и услуги; проверяйте acordo/convenção и pre-authorisation до визита.' }
          ]},
          { id: 'c2', title: 'CUF', content: [
            { kind: 'paragraph', text: 'Одна из крупнейших частных сетей в Португалии, с десятками unidades по стране. Хорошая хирургия и материнство. Сильное приложение с медицинской картой. Актуальный список — на сайте CUF.' }
          ]},
          { id: 'c3', title: 'Lusíadas Saúde', content: [
            { kind: 'paragraph', text: 'Крупная частная сеть больниц и клиник; с 2023 года принадлежит французской группе Vivalto Santé. Клиники в Лиссабоне, Порту, Algarve.' }
          ]},
          { id: 'c4', title: 'HPA Saúde (Algarve)', content: [
            { kind: 'paragraph', text: 'Доминирует на юге. Сильная кардиология и ортопедия.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-covered',
      title: 'Что обычно покрыто',
      content: [
        { kind: 'checklist', items: [
          '✅ Амбулаторные консультации (врачи всех специальностей)',
          '✅ Обследования (анализы, МРТ, КТ, УЗИ)',
          '✅ Госпитализация (частные больницы) — если включена в план, в пределах capital seguro, сети и после pre-authorisation',
          '✅ Cirurgias/hospitalização — если включены в план; emergency care проверять отдельно',
          '✅ Материнство (после 10–12 мес периода ожидания, обычно отдельный лимит)',
          '⚠️ Стоматология — часто отдельно',
          '⚠️ Офтальмология — часто отдельно',
          '❌ Pre-existing conditions обычно исключаются, если страховщик заранее письменно не принял их покрытие; иногда возможны лимиты, надбавка или carência. Обязательно читать Condições Particulares/Especiais',
          '⚠️ Чисто эстетическая/cosmetic surgery обычно исключена; reconstructive/medically necessary procedures могут покрываться при условиях полиса',
          '⚠️ Высокотехнологичное лечение (трансплантация, отдельные виды лечения рака) — ограниченно'
        ]}
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Как выбрать план',
      content: [
        { kind: 'checklist', items: [
          '🏥 Проверить сеть — какие ближайшие больницы / врачи',
          '💊 Hospitalização: смотрите capital anual, franquia/copagamento, limites por acto, quartos, cirurgia, urgência и правила pre-authorisation',
          '💰 Сравнивайте capital por garantia: ambulatório, hospitalização, parto, estomatologia, próteses, oncology; высокий общий capital не заменяет проверку sub-limits',
          '🤰 Планирование материнства — обычно отдельный лимит и carência 10–12 мес',
          '🧒 Дети в пакете — часто дешевле отдельного',
          '🇵🇹 Международное покрытие — для путешественников',
          '📅 Сравнить в течение 30 дней (право отказаться)',
          '✍️ Questionário de saúde — заполнять честно, иначе возможен отказ в выплате'
        ]}
      ]
    },
    {
      id: 'for-visa',
      title: 'Страховка для визы D7 / D8',
      content: [
        { kind: 'paragraph', text: 'Для D7/D8 консульства обычно требуют travel medical insurance с покрытием медицинской помощи и репатриации для въезда/периода действия визы. После приезда для AIMA/жизни нужен доступ к SNS (через número de utente) или частная страховка. Проверяйте требования конкретного консульства VFS/MNE.' },
        { kind: 'checklist', items: [
          '💶 Минимальное покрытие: 30 000 €',
          '🌍 Должна покрывать ВСЮ Шенгенскую зону',
          '📅 Срок: как требует конкретное консульство; часто полис должен покрывать период действия визы/первый въезд, а для дальнейшего проживания — SNS number или частная страховка',
          '✈️ Репатриация — обязательна в полисе',
          '💊 Экстренная медицина — обязательна',
          '⚠️ Не рассчитывайте на «commitment to buy on arrival» — если конкретное консульство явно не разрешает. Безопаснее приложить действующий travel medical insurance, соответствующий чек-листу консульства'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Базовый план (здоровый 30–40 лет)', amountEURMin: 30, amountEURMax: 55, note: '€/мес' },
    { label: 'Средний (госпитализация + специалисты)', amountEURMin: 60, amountEURMax: 120, note: '€/мес' },
    { label: 'Премиум (всё + стоматология + международное покрытие)', amountEURMin: 150, amountEURMax: 300, note: '€/мес' },
    { label: 'Страховка для визы (1 год)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Частная консультация без страховки', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 37/2022 — taxas moderadoras (отмена)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-2022-184054398', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Ministério da Saúde — SNS', url: 'https://www.sns.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ERS — Entidade Reguladora da Saúde', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ADSE, I.P.', url: 'https://www.adse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal dos Vistos MNE — requisitos D7/D8', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}