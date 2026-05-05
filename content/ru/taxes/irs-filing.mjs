export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Подача IRS — налоговая декларация физического лица',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. Подаётся ежегодно с 1 апреля по 30 июня в Portal das Finanças (налоговый портал). Для резидентов обязательна независимо от источника дохода. Есть автоматическая предзаполненная версия (IRS Automático) для простых случаев.',
  tags: ['irs', 'налоги', 'декларация'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'who',
      title: 'Кто подаёт',
      content: [
        { kind: 'checklist', items: [
          'Все налоговые резиденты Португалии (прожили ≥ 183 дней или центр интересов в Португалии)',
          'Нерезиденты с доходом из Португалии — подают только на португальский доход',
          'Субъекты IFICI — подают с особыми формами'
        ]},
        { kind: 'warning', text: 'Резиденты декларируют ВЕСЬ мировой доход, включая иностранный. NHR/IFICI дают освобождения.' }
      ]
    },
    {
      id: 'deadline',
      title: 'Сроки',
      content: [
        { kind: 'paragraph', text: 'Декларация за год N подаётся между 1 апреля и 30 июня года N+1. Независимо от категории дохода (зарплата, Recibo Verde (электронные чеки самозанятого), аренда и т.д.).' },
        { kind: 'warning', text: 'Пропуск срока — штраф € 150–3750. Лучше подать с ошибкой и исправить (modelo de substituição).' }
      ]
    },
    {
      id: 'categories',
      title: 'Категории доходов',
      content: [
        { kind: 'checklist', items: [
          'Категория A — зарплата, пенсия',
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
            { kind: 'paragraph', text: 'Для категории A (зарплата) без других источников Finanças готовит декларацию. Вы просто проверяете и одобряете. Проверить можно на Portal das Finanças → IRS → IRS Automático.' }
          ]},
          { id: 's2', title: '2. Ручная подача (Modelo 3)', content: [
            { kind: 'paragraph', text: 'Если есть дополнительные источники — подача через Portal das Finanças → IRS → Entregar. Нужно заполнить Modelo 3 + нужные приложения (Anexos).' }
          ]},
          { id: 's3', title: '3. Приложения', content: [
            { kind: 'checklist', items: [
              'Anexo A — зарплата/пенсия',
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
          'Медицинские расходы — 15% до € 1000',
          'Образование — 30% до € 800 на семью (а не на ребёнка)',
          'Коммунальные услуги (электричество, газ, вода) — 15% до € 250',
          'Счета из ресторанов — 15% до € 250',
          'Аренда — 15% до € 700–800 (постепенный рост по OE 2024/25)',
          'Ипотека — 15% до € 296 (только для ипотек до 2011)',
          'Общие расходы (Faturas.pt) — 35% до € 250',
          'PPR (пенсионный счёт) — 20% до € 400'
        ]},
        { kind: 'paragraph', text: 'Чтобы вычеты засчитались — запрашивайте NIF во всех чеках (Faturas.pt автоматически собирает).' }
      ]
    },
    {
      id: 'nhr-ifici',
      title: 'NHR и IFICI — особенности',
      content: [
        { kind: 'paragraph', text: 'NHR (до 2024): 20% на квалифицированную работу + 0% на иностранный доход. Действующим субъектам — до конца 10-летнего периода.' },
        { kind: 'paragraph', text: 'IFICI (с 2024): 20% на квалифицированную деятельность. Подача через Portal das Finanças → профиль IFICI + Modelo 3 с отметкой.' }
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — IRS', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlirsweb2024', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Entregar IRS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/entregar-o-irs', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS (DRE)', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}