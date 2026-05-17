export default {
  editorialVoice: 'hackportugal',
  id: 'usa-specific',
  categoryId: 'country_specific',
  title: 'Американцы в Португалии — FATCA и двойное налогообложение',
  tldr: 'У США и Португалии есть соглашение об избежании двойного налогообложения. Но США облагают граждан налогом по всему миру по принципу налогообложения по гражданству — FATCA обязывает португальские банки отчитываться. Декларации в IRS и Португалии нужно подавать обеим странам. FBAR (>$10k на иностранных счетах) обязателен.',
  audience: { countryCodes: ['US'] },
  tags: ['usa', 'fatca', 'налоги', 'двойное'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'tax-basics',
      title: 'Основы налогообложения',
      content: [
        { kind: 'paragraph', text: 'США — одна из немногих стран, облагающих граждан налогом по всему миру независимо от резидентства. Налоговое соглашение Португалии и США 1994 года помогает избежать двойного налогообложения, но не освобождает от декларирования.' },
        { kind: 'checklist', items: [
          'Если вы налоговый резидент Португалии (>183 дней) — Португалия облагает весь мировой доход',
          'Как гражданин США — IRS также требует декларации (Form 1040 + Schedule B)',
          'Исключение иностранного заработанного дохода (Foreign Earned Income Exclusion, FEIE) — $132 900 на 2026 (2025: $130 000). Сумма индексируется ежегодно; актуальное значение — на irs.gov',
          'Зачёт иностранного налога (Foreign Tax Credit, FTC) — зачёт налога, уплаченного в Португалии, против налога США',
          'FBAR (FinCEN Form 114) — если все иностранные счета суммарно > $10 000 на любой день в году (подаётся отдельно от 1040)',
          'Form 8938 (индивидуальная отчётность FATCA) — если иностранные активы > $200 000 на конец года (или $300 000 в любой день) для резидентов за рубежом, подающих декларацию как single; $400 000 / $600 000 для married filing jointly. Не заменяет FBAR — подавать нужно обе формы'
        ]}
      ]
    },
    {
      id: 'fatca',
      title: 'FATCA — отчётность банков',
      content: [
        { kind: 'paragraph', text: 'FATCA обязывает все португальские банки отчитываться перед IRS о счетах граждан США. Большинство португальских банков принимают граждан США, но отказы случаются из-за нагрузки по соблюдению требований.' },
        { kind: 'checklist', items: [
          'Банки, принимающие американцев: ActivoBank, Millennium, Caixa, Novobanco',
          'Некоторые банки (Santander, BPI) могут отказать',
          'Форму W-9 обязательно нужно заполнить при открытии счёта',
          'Ежегодный отчёт банка в IRS отправляется автоматически',
          'Для брокерских счетов (инвестирование) выбор ограничен, Interactive Brokers подходит'
        ]}
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR / IFICI для американцев',
      content: [
        { kind: 'paragraph', text: 'Старый NHR (до 2024) был очень выгоден: 10% на пенсии из США + 20% на квалифицированную работу + 0% на дивиденды из США. Те, кто успел до 2024, сохраняют режим на 10 лет.' },
        { kind: 'paragraph', text: 'IFICI (2024+): плоская ставка 20%, но список квалифицированных профессий уже уже. Традиционному удалённому работнику сложнее попасть. FEIE + FTC — основная защита.' }
      ]
    },
    {
      id: 'visas',
      title: 'Визы из США',
      content: [
        { kind: 'checklist', items: [
          'Паспорт США: безвизовый Шенген на 90 дней',
          'Для переезда: D7 (пенсионеры), D8 (удалёнщики) популярны',
          'Golden Visa — доступна, процесс стандартный',
          'Консульство Португалии: NYC, Washington DC, Miami, Chicago, Boston, Providence, San Francisco, Los Angeles, Newark, Houston',
          'Процесс получения визы занимает 60-90 дней. Американские документы легко апостилируются через Secretary of State'
        ]}
      ]
    },
    {
      id: 'investments',
      title: 'Инвестиции — сложности',
      content: [
        { kind: 'checklist', items: [
          'PFIC (Passive Foreign Investment Company) — фонды ЕС часто считаются PFIC, тяжёлая отчётность в IRS',
          'Vanguard / Fidelity / Charles Schwab — резидентам США обычно легче',
          'US-ETF — лучше португальских/европейских фондов для американцев',
          'Roth IRA — не облагается налогом в Португалии (договор защищает)',
          '401(k) — пенсионные выплаты облагаются в Португалии',
          'Португальский пенсионный фонд (PPR) — США считают PFIC, плохой выбор для гражданина США'
        ]}
      ]
    },
    {
      id: 'healthcare',
      title: 'Здравоохранение',
      content: [
        { kind: 'checklist', items: [
          'SNS — после получения ВНЖ доступен бесплатно',
          'Частная страховка — Médis, Multicare ~€50-100/мес на 1 чел',
          'Medicare (США) — не работает в Португалии',
          'Международная страховка (Cigna, Allianz) — для путешествий'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Американское сообщество',
      content: [
        { kind: 'checklist', items: [
          'Посольство США в Лиссабоне: Av. Das Forças Armadas',
          'American Club of Portugal (ACP) — социальный клуб',
          'AMCHAM Portugal (American Chamber of Commerce) — бизнес-нетворкинг',
          'International Christian Fellowship',
          'Крупные сообщества экспатов — Cascais, Algarve, Lisbon',
          'IRS International: +1 267-941-1000 (для вопросов FBAR / FATCA / FEIE)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'US Embassy Lisbon', url: 'https://pt.usembassy.gov/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'IRS International — FEIE / FBAR', url: 'https://www.irs.gov/individuals/international-taxpayers', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'US-Portugal Tax Treaty (IRS)', url: 'https://www.irs.gov/businesses/international-businesses/portugal-tax-treaty-documents', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (налоговый портал) — резидентство', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}