export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-descent',
  categoryId: 'nationality',
  title: 'Гражданство Португалии по родству',
  tldr: 'Доступно внукам и правнукам португальцев, если подтверждается связь. Бабушка или дедушка-португалец + доказательство связи = право на гражданство. Для внука — автоматическое право при рождении + регистрация. Для правнука — более сложный процесс.',
  tags: ['гражданство', 'родство', 'предки'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: 'Категории по родству',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Ребёнок португальца (любое поколение)', content: [
            { kind: 'paragraph', text: 'Если один из родителей — португалец (получил гражданство к моменту рождения ребёнка), ребёнок автоматически имеет право на португальское гражданство. Регистрация — в Conservatória.' }
          ]},
          { id: 'd2', title: 'Внук португальца', content: [
            { kind: 'paragraph', text: 'Если бабушка или дедушка — гражданин Португалии (и эта связь подтверждается документами), внук может подать заявление на гражданство. Требуется «связь с португальским сообществом» — язык A2 или культурная связь.' }
          ]},
          { id: 'd3', title: 'Правнук и далее', content: [
            { kind: 'paragraph', text: 'Возможно, но сложнее — требуется более сильное доказательство связи: проживание в Португалии, владение языком, семейные корни.' }
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Свидетельство о рождении заявителя',
          'Свидетельство о рождении родителя, через которого подтверждается родство',
          'Свидетельство о рождении бабушки или дедушки (если заявитель — внук)',
          'Свидетельство о гражданстве предка (запись в Conservatória или паспорт)',
          'Португальский язык A2 (или эквивалент)',
          'Справка о несудимости',
          'Отсутствие военной службы в стране, противостоящей Португалии (редкое требование)'
        ]},
        { kind: 'warning', text: 'Цепочка свидетельств должна быть непрерывной. Если предок потерял гражданство или записи утеряны, процесс сложнее.' }
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Собрать родословную', content: [
            { kind: 'paragraph', text: 'Апостиль + присяжный перевод всех свидетельств. Для записей из архивов Португалии — запрос через Arquivo Nacional.' }
          ]},
          { id: 'p2', title: '2. Проверить запись предка', content: [
            { kind: 'paragraph', text: 'На сайте IRN или через запрос в Conservatória — убедиться, что запись существует.' }
          ]},
          { id: 'p3', title: '3. Сдать CIPLE A2', content: [
            { kind: 'paragraph', text: 'Кроме детей португальцев — им это не требуется.' }
          ]},
          { id: 'p4', title: '4. Подать заявление в IRN', content: [
            { kind: 'paragraph', text: 'Conservatória dos Registos Centrais (Lisboa) либо консульство.' }
          ]}
        ]}
      ]
    },
    {
      id: 'sefardi',
      title: 'Сефардские евреи — режим под угрозой отмены',
      content: [
        { kind: 'paragraph', text: 'Ускоренный способ для сефардских евреев был введён в Lei da Nacionalidade через **Lei Orgânica n.º 1/2013** (затем регулирование детализировано Decreto-Lei 30-A/2015) и действовал почти 10 лет. Существенное ужесточение режима действует с **01.09.2022** — через **Decreto-Lei n.º 26/2022**, которое изменило Regulamento da Nacionalidade и потребовало доказательств реальной связи с Португалией (проживание, экономические или культурные связи). После этого число заявок резко упало.' },
        { kind: 'paragraph', text: '**03.05.2026 Президент Сегуру промульгировал Decreto AR 48/XVII** (после прохождения через TC переименован с 17/XVII) — закон полностью отменяет ускоренный сефардский путь. Закон вступит в силу на следующий день после публикации в Diário da República (ожидается в ближайшие дни). Сегуру в речи 03.05.2026 публично попросил рассматривать уже поданные дела по старым правилам ради юридической безопасности. По действующему праву до публикации в DRE этот способ ещё технически работает в режиме после Decreto-Lei 26/2022.' },
        { kind: 'warning', text: 'Если планируете подать заявление — делайте это СРОЧНО, до публикации Decreto 48/XVII в DRE. Подача закрепляет дело в старом режиме (особенно с учётом просьбы Президента к IRN). После публикации новый закон полностью устранит этот путь.' }
      ]
    }
  ],
  costs: [
    { label: 'Пошлина IRN', amountEUR: 250 },
    { label: 'Архивные запросы', amountEURMin: 50, amountEURMax: 300 },
    { label: 'Переводы + апостили', amountEURMin: 200, amountEURMax: 600 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nacionalidade por efeito da vontade ou origem', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade) — consolidado', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 2/2022 — ужесточение сефардского способа', url: 'https://diariodarepublica.pt/dr/detalhe/lei/2-2022-179324500', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 30-A/2015 — Regulamento da Nacionalidade (сефардский)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/30-a-2015-66714746', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Arquivo Nacional Torre do Tombo', url: 'https://antt.dglab.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 90
}