export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF для ребёнка — как оформить',
  tldr: 'NIF ребёнку нужен для: записи в школу или детский сад, оформления SNS (Número de Utente), страховки, частных медицинских услуг, получения Abono de Família. Дети — граждане Португалии получают NIF автоматически при рождении через Balcão do Nado Vivo. Детям-иностранцам — лично в Finanças или через представителя онлайн. Бесплатно.',
  tags: ['nif', 'дети', 'документы'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда NIF ребёнку обязателен',
      content: [
        { kind: 'checklist', items: [
          'Запись в государственную или частную школу, детский сад или ясли',
          'Регистрация в SNS (Número de Utente) — через Centro de Saúde',
          'Подача на Abono de Família (детское пособие)',
          'Оформление медицинской страховки на ребёнка',
          'Включение ребёнка в Reagrupamento Familiar',
          'Наследование, получение подарков и переводов'
        ]}
      ]
    },
    {
      id: 'path-pt-born',
      title: 'Если ребёнок родился в Португалии',
      content: [
        { kind: 'paragraph', text: 'В больнице работает Balcão do Nado Vivo («Окно новорождённого») — единая процедура регистрации младенца.' },
        { kind: 'checklist', items: [
          'В течение 20 дней после рождения — регистрация имени в Conservatória do Registo Civil',
          'Автоматически присваивается NIF + NISS + Número de Utente одним пакетом',
          'Родители получают Cédula de Nascimento в электронном виде или Assento de Nascimento',
          'Если родители — иностранцы, ребёнок наследует их гражданство; португальское гражданство — только если один из родителей является резидентом Португалии ≥ 1 год (Lei 37/81 ст. 1.1.f)'
        ]}
      ]
    },
    {
      id: 'path-foreign',
      title: 'Если ребёнок приехал из-за рубежа',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Вариант A — лично в Finanças', content: [
            { kind: 'checklist', items: [
              'Записаться на приём на Portal das Finanças или прийти в порядке живой очереди',
              'Оба родителя или один родитель + доверенность от второго, а также ребёнок',
              'Документы: паспорт ребёнка, свидетельство о рождении (с апостилем + присяжным переводом, если документ не на португальском или английском), NIF обоих родителей',
              'Подтверждение адреса в Португалии: контракт аренды или Atestado de Residência',
              'NIF выдаётся в день визита, бесплатно'
            ]}
          ]},
          { id: 'f2', title: 'Вариант B — дистанционно через представителя', content: [
            { kind: 'paragraph', text: 'Если родители — граждане третьих стран и ещё не находятся в Португалии, действует тот же механизм, что и для взрослого NIF через фискального представителя. Представитель указывается временным, после получения ВНЖ его можно снять. Стоимость — 70–150 € через юриста или компанию.' }
          ]},
          { id: 'f3', title: 'Вариант C — для граждан ЕС/CPLP', content: [
            { kind: 'paragraph', text: 'Представитель не требуется. Родитель — гражданин ЕС/CPLP приходит с паспортом ребёнка и свидетельством о рождении. Можно указать домашний адрес в стране ЕС/CPLP.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'После получения NIF',
      content: [
        { kind: 'checklist', items: [
          'NIF ребёнка привязан к родителю-управляющему в Portal das Finanças: родитель управляет им до 18 лет ребёнка',
          'Активировать Portal das Finanças для ребёнка — если родителю нужно от имени ребёнка видеть налоги; обычно до 18 лет это не требуется',
          'Предоставить NIF в школу или детский сад при записи',
          'Для SNS (Número de Utente) следующий шаг — обратиться в Centro de Saúde по месту жительства',
          'Для Abono de Família — подача через Segurança Social Direta родителя на ребёнка'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Частые сложности',
      content: [
        { kind: 'warning', text: 'Апостиль + присяжный перевод свидетельства о рождении: для стран вне Гаагской конвенции (Канада, Китай) потребуется консульская легализация вместо апостиля. Для Украины с 2024 — онлайн-апостиль через Дию.' },
        { kind: 'warning', text: 'Если ребёнок рождён от ЭКО или с неизвестным отцом — укажите только одного родителя; Finanças принимает это без проблем.' },
        { kind: 'warning', text: 'Перевод имени ребёнка — сверьтесь с тем, как оно будет указано в паспорте. Разные транслитерации (MARIIA/MARIA/MARYA) создают проблемы при поступлении в школу и получении Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Свидетельство о рождении', note: 'апостиль + присяжный перевод, если документ не на португальском или английском' },
    { title: 'Паспорт ребёнка', note: 'оригинал + копия' },
    { title: 'Паспорта родителей', note: 'оба, с NIF' },
    { title: 'Atestado de Residência', note: 'или контракт аренды' }
  ],
  costs: [
    { label: 'Госпошлина Finanças', amountEUR: 0 },
    { label: 'Апостиль + перевод свидетельства', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Фискальный представитель (если дистанционно)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Portal das Finanças — NIF', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Cédula de Nascimento', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}