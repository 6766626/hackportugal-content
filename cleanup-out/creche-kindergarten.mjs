export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Ясли и детский сад в Португалии',
  tldr: 'Ясли (Creche, 0–3 года) — платные, даже государственные, с оплатой по доходу: € 0–400/мес. Детский сад (Jardim de Infância, 3–6 лет, дошкольное образование) — бесплатный в государственных учреждениях. С 5 лет — обязательный. Запись через Segurança Social Direta (онлайн-портал социального страхования) для Creche или Portal das Matrículas для Jardim de Infância.',
  tags: ['creche', 'детсад', 'jardim de infância', 'дети'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Типы учреждений',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Бесплатные ясли (Creche Gratuita, 0–3 года) — с сент. 2022', content: [
            { kind: 'paragraph', text: 'Программа «Creche Feliz»: бесплатно для детей 1–2-го уровня abono de família. С 2024–2025 учебного года расширяется на всех детей до 3 лет. Действует в государственных и солидарных учреждениях (IPSS).' }
          ]},
          { id: 't2', title: 'Creche IPSS (солидарные учреждения)', content: [
            { kind: 'paragraph', text: 'Частные некоммерческие учреждения. Работают по договору с Segurança Social. Оплата по доходу: € 0–400/мес.' }
          ]},
          { id: 't3', title: 'Частные ясли (Creche Privada)', content: [
            { kind: 'paragraph', text: 'Коммерческие учреждения. € 400–1200/мес. в Лиссабоне и Порту. Есть международные варианты с английским, французским или немецким языком.' }
          ]},
          { id: 't4', title: 'Детский сад (Jardim de Infância, 3–6 лет, бесплатно)', content: [
            { kind: 'paragraph', text: 'Часть государственной школьной системы. Бесплатный. Обязательный с 5 лет (с 2022).' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-creche',
      title: 'Запись в Creche',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Подать через Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → Segurança Social Direta → Família → Creche Feliz. Выбрать учреждения (до 5).' }
          ]},
          { id: 'c2', title: '2. Документы', content: [
            { kind: 'checklist', items: [
              'NISS ребёнка и родителей',
              'Декларация IRS / справка о доходе',
              'Свидетельство о рождении',
              'Подтверждение адреса'
            ]}
          ]},
          { id: 'c3', title: '3. Приоритет', content: [
            { kind: 'paragraph', text: 'Уровень abono de família + братья/сёстры в том же учреждении + близость к адресу работы или проживания.' }
          ]},
          { id: 'c4', title: '4. Ждать ответа', content: [
            { kind: 'timeline', text: '1–6 мес. В Лиссабоне и Порту очередь в Creche огромная — подавайте до рождения или в 1–2 мес.' }
          ]}
        ]}
      ]
    },
    {
      id: 'apply-jardim',
      title: 'Запись в Jardim de Infância',
      content: [
        { kind: 'substeps', items: [
          { id: 'j1', title: '1. Portal das Matrículas', content: [
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → регистрация → выбрать школьное объединение.' }
          ]},
          { id: 'j2', title: '2. Сроки', content: [
            { kind: 'paragraph', text: 'Основная сессия — апрель–май для следующего учебного года (сентябрь). Свободные места — до середины июня.' }
          ]},
          { id: 'j3', title: '3. Приоритет', content: [
            { kind: 'paragraph', text: 'Возраст (дети старше — первыми), зона, братья/сёстры.' }
          ]}
        ]}
      ]
    },
    {
      id: 'private-international',
      title: 'Международные частные сады',
      content: [
        { kind: 'paragraph', text: 'Для русскоязычных семей популярные варианты в Лиссабоне:' },
        { kind: 'checklist', items: [
          'Русский клуб Carlos Freixo, Oeiras — русский язык и культура',
          'St. Julian\'s School (Carcavelos) — британский, 2–18 лет',
          'International Preparatory School — американский, 3–15 лет',
          'Escola Alemã (Lisboa) — немецкий',
          'Lycée Français Charles Lepierre — французский'
        ]},
        { kind: 'paragraph', text: 'Стоимость € 8 000–18 000/год.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz / гос.', amountEUR: 0, note: 'бесплатно для 1–2-го уровня' },
    { label: 'Creche IPSS', amountEURMin: 0, amountEURMax: 400, note: '/мес., по доходу' },
    { label: 'Частная Creche', amountEURMin: 400, amountEURMax: 1200, note: '/мес. в крупных городах' },
    { label: 'Государственный Jardim de Infância', amountEUR: 0 },
    { label: 'Частный / международный Jardim', amountEURMin: 300, amountEURMax: 1500, note: '/мес.' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Educação Pré-Escolar', url: 'https://www.dge.mec.pt/educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}