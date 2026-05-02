export default {
  editorialVoice: 'hackportugal',
  id: 'iuc-tax',
  categoryId: 'auto_ownership',
  title: 'IUC — ежегодный налог на автомобиль',
  tldr: 'Imposto Único de Circulação (IUC) — ежегодный налог на владение автомобилем в Португалии. Оплачивается в месяц годовщины первой регистрации машины. Расчёт зависит от класса (A–E), объёма двигателя, выбросов CO2 и года. Для легкового автомобиля 1.4 л бензин — обычно 40–120 €, большой дизель — 300–700 €. Оплата онлайн через Portal das Finanças, картой / MB WAY / Multibanco. Просрочка — штраф 10–50 %.',
  tags: ['iuc', 'налог', 'авто', 'circulação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-pays',
      title: 'Кто платит и когда',
      content: [
        { kind: 'checklist', items: [
          'Налогоплательщик IUC для категорий A–E — собственник/держатель, зарегистрированный в Conservatória в момент возникновения налогового обязательства (то есть в месяц годовщины регистрации). Не «на 1 января»',
          'Срок оплаты — до конца месяца годовщины первой регистрации в Португалии (для импортных б/у — обычно дата португальской регистрации/matrícula)',
          'Пример: португальская регистрация автомобиля 10 марта 2020 — IUC платится до 31 марта каждого года',
          'При продаже автомобиля IUC ложится на того, кто числится держателем в момент возникновения обязательства',
          '⚠️ Для импортных б/у машин: ставка налога может рассчитываться с учётом первой регистрации в EU/EEA, но месяц оплаты — по португальской регистрации'
        ]},
        { kind: 'warning', text: 'Неуплата IUC — это налоговый долг перед AT (Autoridade Tributária): начисляются проценты, штрафы, возможна penhora. IUC не является автоматическим условием для прохождения техосмотра IPO, и долг — личный долг налогоплательщика; продажа автомобиля формально не блокируется одним лишь долгом по IUC, но при сделке надо учитывать риск перехода ответственности и задолженности.' }
      ]
    },
    {
      id: 'rates',
      title: 'Ставки — категории и классы',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Категория A — лёгкие < 1100 cc (до 1981)', content: [
            { kind: 'paragraph', text: 'Винтажные машины. 15–25 € в год.' }
          ]},
          { id: 'c2', title: 'Категория B — лёгкие с бензиновым двигателем (1982+)', content: [
            { kind: 'paragraph', text: 'Стандартная категория. Ставка зависит от объёма двигателя и выбросов CO2. 1.0–1.4 л = 40–70 €; 1.6–2.0 л = 90–170 €; 2.5+ л = 300+ €.' }
          ]},
          { id: 'c3', title: 'Категория E — мотоциклы (> 250 cc)', content: [
            { kind: 'paragraph', text: '30–100 €.' }
          ]},
          { id: 'c4', title: 'Категория C — грузовые до 12 т', content: [
            { kind: 'paragraph', text: '50–300 € в зависимости от массы.' }
          ]},
          { id: 'c5', title: 'Электромобили', content: [
            { kind: 'paragraph', text: 'Освобождены от IUC (только Imposto sobre os Veículos, IVA при покупке + номинальная плата).' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Полная формула — Código do IUC, ст. 9–15 (dre.pt). Простой калькулятор — на Portal das Finanças перед оплатой.' }
      ]
    },
    {
      id: 'how-to-pay',
      title: 'Как оплатить',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → «IUC» → «Consultar / Pagar»',
          '📄 Генерируется платёжный документ с entidade + referência + montante',
          '💳 Multibanco по referência',
          '📱 MB WAY',
          '🏦 Внутрибанковский перевод',
          '🏪 Payshop / CTT — наличными',
          '📧 Подтверждение оплаты сохраняется в Portal das Finanças'
        ]}
      ]
    },
    {
      id: 'late-payment',
      title: 'Просрочка',
      content: [
        { kind: 'checklist', items: [
          '⏰ +30 дней — штраф 10 % от IUC',
          '⏰ +60 дней — +20 %',
          '⏰ +90 дней — +30 %',
          '💼 > 90 дней — дело в Finanças → возможна penhora salarial',
          '🚫 Блокировка DUA — не пройдёте IPO, не продадите машину',
          '✅ План оплаты частями (parcelamento) — возможен для суммы > 102 €'
        ]},
        { kind: 'warning', text: 'При покупке б/у автомобиля обязательно спросите у продавца подтверждение оплаты IUC (comprovativo) за последние 3 года. Без него вы можете унаследовать долг.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Освобождения и скидки',
      content: [
        { kind: 'checklist', items: [
          '♿ Люди с инвалидностью ≥ 60 % — полное освобождение',
          '🚜 Сельскохозяйственная техника на фермерское хозяйство — освобождение',
          '🇵🇹 Дипломаты — освобождение',
          '⚡ Электромобили категорий B/E — освобождение',
          '🚗 Первый год для ветеранов и многодетных — скидка',
          '🏝️ Madeira и Açores — пониженные местные ставки'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Лёгкое 1.0–1.4 л бензин', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Лёгкое 1.6–2.0 л', amountEURMin: 90, amountEURMax: 170 },
    { label: 'Лёгкое > 2.0 л', amountEURMin: 200, amountEURMax: 500 },
    { label: 'Мотоцикл', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'Código do IUC (consolidado)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34442375', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pagar o IUC', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-o-imposto-unico-de-circulacao-iuc-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}