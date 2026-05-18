export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Подача IRS — налоговая декларация физического лица',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. Подаётся ежегодно с 1 апреля по 30 июня в Portal das Finanças (налоговый портал).\n\nНалоговые резиденты обычно декларируют мировой доход; есть освобождения от подачи по art. 58 CIRS (низкие/окончательно обложенные доходы)\.\n\nЕсть автоматическая предзаполненная версия (IRS Automático) для предусмотренных AT простых случаев.',
  tags: ['irs', 'налоги', 'декларация'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Кто подаёт',
      content: [
        { kind: 'checklist', items: [
          'Налоговые резиденты Португалии: пребывание >183 дней в любом 12-мес. периоде, начинающемся/заканчивающемся в году, или habitual abode (art. 16 CIRS). Обычно подают, но есть исключения по art. 58 CIRS',
          'Нерезиденты с доходом из Португалии — подают только на португальский доход',
          'Субъекты NHR/IFICI — подают с особыми формами/отметками'
        ]},
        { kind: 'warning', text: 'Резиденты обычно декларируют мировой доход. NHR/IFICI дают льготы по правилам режима, не полное освобождение.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Сроки',
      content: [
        { kind: 'paragraph', text: 'Декларация за год N подаётся между 1 апреля и 30 июня года N+1. Независимо от категории дохода (зарплата, Recibo Verde (электронные чеки самозанятого), аренда и т.д.).' },
        { kind: 'warning', text: 'За просрочку — coima обычно €150–€3 750 (RGIT art. 116) с возможным снижением при быстрой добровольной подаче. Если нашли ошибку — подайте declaração de substituição; не подавайте заведомо неверные данные.' }
      ]
    },
    {
      id: 'categories',
      title: 'Категории доходов',
      content: [
        { kind: 'checklist', items: [
          'Категория A — доходы от наёмной работы / зарплата',
          'Категория B — самозанятость (Recibo Verde)',
          'Категория E — инвестиционный доход (дивиденды, проценты)',
          'Категория F — аренда недвижимости',
          'Категория G — прирост капитала (продажа акций, криптовалюта)',
          'Категория H — пенсии',
          'Иностранный доход — в приложении J'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Процесс подачи',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. IRS Automático (если подходите)', content: [
            { kind: 'paragraph', text: 'IRS Automático доступен только для предусмотренных AT простых случаев — обычно для части Categoria A/H без иностранного дохода (Anexo J), без сложных приложений и льгот. Проверить eligibility — на Portal das Finanças → IRS → IRS Automático.' }
          ]},
          { id: 's2', title: '2. Ручная подача (Modelo 3)', content: [
            { kind: 'paragraph', text: 'Если есть дополнительные источники — подача через Portal das Finanças → IRS → Entregar. Нужно заполнить Modelo 3 + нужные приложения (Anexos).' }
          ]},
          { id: 's3', title: '3. Приложения', content: [
            { kind: 'checklist', items: [
              'Anexo A — доходы от наёмной работы (Categoria A) и пенсии (Categoria H), выплаченные португальскими плательщиками',
              'Anexo B — Recibo Verde (упрощённый режим)',
              'Anexo C — Recibo Verde (организованный бухучёт)',
              'Anexo E — инвестиции',
              'Anexo F — аренда',
              'Anexo G — прирост капитала',
              'Anexo H — вычеты (здоровье, образование, еда, жильё)',
              'Anexo J — иностранный доход'
            ]}
          ]},
          { id: 's4', title: '4. Проверка и отправка', content: [
            { kind: 'paragraph', text: 'Автоматическая проверка. После отправки — подтверждение подачи (comprovativo de entrega). Статус — на Portal das Finanças.' }
          ]},
          { id: 's5', title: '5. Результат', content: [
            { kind: 'paragraph', text: 'К июлю-августу — расчёт (liquidação). Если переплата — возврат. Если недоплата — срок оплаты до 31 августа.' }
          ]}
        ]}
      ]
    },
    {
      id: 'deductions',
      title: 'Главные вычеты (Anexo H)',
      content: [
        { kind: 'checklist', items: [
          'Медицинские расходы — 15% до €1 000',
          'Образование — 30% до €800 на семью (а не на ребёнка)',
          'Общие семейные расходы (счета с NIF) — 35% до €250 на налогоплательщика',
          'Exigência de fatura (рестораны/отели, ремонт авто/мото, парикмахерские, ветеринары, спортзалы и др.) — 15% от уплаченного IVA, общий лимит €250 на домохозяйство',
          'Аренда постоянного жилья — 15% до €700 для IRS 2025 (с дальнейшим повышением по переходному графику), при сообщённых договорах/e-recibos',
          'Проценты по кредиту на постоянное собственное жильё — 15% до €296 только для договоров до 31.12.2011',
          'PPR — 20% взносов: до €400 (младше 35 лет), €350 (35–50), €300 (старше 50)'
        ]},
        { kind: 'paragraph', text: 'Чтобы вычеты засчитались — запрашивайте NIF во всех чеках. e-Fatura в Portal das Finanças автоматически собирает счета; до установленного срока проверьте и классифицируйте расходы.' }
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR и IFICI — особенности',
      content: [
        { kind: 'paragraph', text: 'NHR для уже зарегистрированных действует до конца 10-летнего периода: 20% на ряд португальских доходов от high value-added activities; по иностранным доходам режим зависит от категории и DTA (не универсальные 0%); иностранные пенсии для новых NHR — обычно 10%.' },
        { kind: 'paragraph', text: 'IFICI с 2024 — 20% ставка на eligible net employment/business income по утверждённому перечню (Estatuto dos Benefícios Fiscais art. 58-A, Portaria 352/2024/1)\.\n\nНужна регистрация в AT/компетентной entity (FCT, ANI, Startup Portugal, AICEP/IAPMEI) в установленный срок. Несовместим с NHR. Подача — через профиль IFICI + Modelo 3 с отметкой.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Entregar IRS', url: 'https://eportugal.gov.pt/servicos/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS (Diário da República)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Dispensa de entrega da declaração de IRS', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_Dispensa_Entrega.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}