export default {
  editorialVoice: 'hackportugal',
  id: 'creche-kindergarten',
  categoryId: 'education_children',
  title: 'Ясли и детский сад в Португалии',
  tldr: 'Creche (обычно 0–3) бывает IPSS/социальная, частная и реже муниципальная. По программе **Creche Feliz** место может быть бесплатным в покрытых учреждениях (в основном IPSS/социальная сеть)\.\n\nJardim de Infância / educação pré-escolar (3–6 лет) — в гос. сети бесплатная образовательная часть; питание, transporte и AAAF/prolongamento могут оплачиваться отдельно. Посещение pré-escolar **необязательно** — обязательное школьное образование начинается с 6 лет. Запись на Creche Feliz: Segurança Social Direta; на Jardim de Infância: Portal das Matrículas.',
  tags: ['creche', 'детсад', 'jardim de infância', 'дети'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Типы учреждений',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Creche Feliz (бесплатные ясли для eligible мест) — с 2022', content: [
            { kind: 'paragraph', text: 'Бесплатное место в **покрытых** учреждениях — преимущественно социальная/солидарная сеть IPSS; частные creches с прибылью могут участвовать только при соблюдении правил программы (обычно когда нет подходящего места в социальной сети)\.\n\nИзначально (2022/23) ограничение по 1–2 эшелонам abono — на 2026 уже не основное правило. Стандартная mensalidade — €0; «extras» (доп. услуги, расширенные часы) могут оплачиваться отдельно.' }
          ]},
          { id: 't2', title: 'Creche IPSS вне Creche Feliz', content: [
            { kind: 'paragraph', text: 'Если место не покрыто Creche Feliz, может применяться comparticipação familiar по доходу согласно правилам учреждения/Segurança Social. Питание обычно включено в стандарт.' }
          ]},
          { id: 't3', title: 'Частные ясли (Creche Privada)', content: [
            { kind: 'paragraph', text: 'Коммерческие учреждения. € 400–1200/мес в Лиссабоне и Порту. Есть международные варианты с английским, французским или немецким языком.' }
          ]},
          { id: 't4', title: 'Jardim de Infância / educação pré-escolar (3–6 лет)', content: [
            { kind: 'paragraph', text: 'В государственной сети образовательная часть бесплатна. **Посещение не обязательно** — обязательная школа начинается с 6 лет. Питание, transporte escolar и AAAF/prolongamento могут быть платными или субсидированными в зависимости от муниципалитета и эшелона Ação Social Escolar (ASE).' }
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
            { kind: 'paragraph', text: 'Для мест по Creche Feliz: SSD → Família → Creche Feliz / Pedido de Creche. Уточняйте текущий лимит выбора учреждений в портале. Для частных creches или мест вне программы подавайте напрямую в учреждение.' }
          ]},
          { id: 'c2', title: '2. Документы', content: [
            { kind: 'checklist', items: [
              'NISS ребёнка и родителей',
              'Declaração de IRS и nota de liquidação / справка о доходах',
              'Свидетельство о рождении',
              'Подтверждение адреса',
              'При необходимости comprovativo do escalão de abono / состава домохозяйства'
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
            { kind: 'paragraph', text: 'portaldasmatriculas.edu.gov.pt → login/authentication (Chave Móvel Digital / CC / NIF+пароль AT) → выбрать в порядке предпочтения учреждения/agrupamentos. Если не можете авторизоваться онлайн — обратитесь в школу/agrupamento.' }
          ]},
          { id: 'j2', title: '2. Сроки', content: [
            { kind: 'paragraph', text: 'Календарь публикуется ежегодно (despacho); обычно apresentação заявок на pré-escolar/1.º ano — в апреле–мае. Точные даты и сроки публикации placements — на Portal das Matrículas для конкретного учебного года.' }
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
          'International Preparatory School — англоязычная international/British-style школа; диапазоны возраста/цен сверяйте на сайте',
          'Escola Alemã (Lisboa) — немецкий',
          'Lycée Français Charles Lepierre — французский'
        ]},
        { kind: 'paragraph', text: 'Стоимость tuition обычно € 8 000–18 000/год, но first-year registration/capital fees, питание, форма, транспорт и after-school care обычно идут extra — сверяйте fee table конкретной школы.' }
      ]
    }
  ],
  costs: [
    { label: 'Creche Feliz (покрытое место)', amountEUR: 0, note: 'стандартная mensalidade €0 в основном в IPSS/социальной сети; частные участвующие только по правилам программы; extras/extended services могут оплачиваться' },
    { label: 'Creche IPSS вне Creche Feliz', note: 'comparticipação familiar по доходу — варьируется по учреждению/семейной формуле' },
    { label: 'Частная Creche', amountEURMin: 400, amountEURMax: 1200, note: '/мес в крупных городах' },
    { label: 'Государственный Jardim de Infância (образовательная часть)', amountEUR: 0, note: 'питание/AAAF/transporte могут оплачиваться муниципалитетом/ASE' },
    { label: 'Частный / международный Jardim', amountEURMin: 300, amountEURMax: 1500, note: '/мес' }
  ],
  sources: [
    { title: 'Segurança Social — Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Matrículas', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Orientações Curriculares para a Educação Pré-Escolar', url: 'https://www.dge.mec.pt/orientacoes-curriculares-para-educacao-pre-escolar', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}