export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — гражданское партнёрство в Португалии',
  tldr: 'União de facto — юридический статус совместного проживания, признаётся после **2 лет совместного проживания** по Lei 7/2001. Даёт ЧАСТЬ прав супругов: совместное налогообложение IRS, право на Reagrupamento Familiar и ряд социальных льгот. ⚠️ Это НЕ полный эквивалент брака — оставшийся в живых партнёр **не является статутарным наследником** по умолчанию (нужно завещание/специальная процедура); доступ к SNS обычно НЕ возникает «через» партнёра автоматически. Для **гражданства по união** Lei 37/81 art. 3 n.3 требует **судебное решение** (sentença declarativa) о >3 лет união с гражданином Португалии — простой регистрации в Junta de Freguesia для целей гражданства НЕ достаточно. Регистрация в Junta de Freguesia (Lei 7/2001) — простой административный акт для налоговых/социальных целей. Работает для разнополых и однополых пар.',
  tags: ['união', 'сожительство', 'партнёрство', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'Что это и как работает',
      content: [
        { kind: 'paragraph', text: 'União de facto — юридическое признание пары, живущей вместе. Регулируется Lei 7/2001 (применяется к двум людям независимо от пола; Lei 23/2010 — это закон о same-sex marriage, не о união). Не требует церемонии, не является браком, но даёт ряд сопоставимых прав.' },
        { kind: 'checklist', items: [
          '💑 Пара любого пола и гражданства (разнополая или однополая)',
          '📅 Минимум 2 года совместного проживания',
          '🏠 Общее жильё — доказуемо договором аренды на двоих, коммунальными счетами, общим адресом в Finanças',
          '👫 Оба — дееспособные совершеннолетние',
          '❌ Не состоять в действующем браке с другим лицом',
          '❌ Не иметь impedimentos из art. 2 Lei 7/2001: прямые предки/потомки, 2-я степень бокового родства (братья/сёстры), прямая свойственность (sogra/sogro и т.п.)'
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Какие права даёт',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '💰 Налоги и финансы', content: [
            { kind: 'checklist', items: [
              'Совместная подача IRS (**tributação conjunta**)',
              'Вычет алиментов, медицинских и образовательных расходов партнёра',
              '⚠️ Партнёр в união **не является автоматическим наследником** — нужно завещание/планирование. При безвозмездных передачах surviving partner обычно освобождён от Imposto do Selo 10% (Código do Imposto do Selo art. 6)',
              'Право на пенсию пережившего партнёра (pensão de sobrevivência) при смерти партнёра',
              '⚠️ Нет общего режима «spousal alimony» как при разводе. Возможные claims after breakup/death ограничены и зависят от фактов; при финансовой зависимости — лучше получить юр. консультацию'
            ]}
          ]},
          { id: 'r2', title: '🏥 Медицина и SNS', content: [
            { kind: 'checklist', items: [
              'Segurança Social: união может быть релевантна для определённых семейных пособий и survivor benefits, но каждый имеет собственный NISS и contribution/benefit status',
              'SNS: партнёрство само по себе **не** «прикрепляет» к SNS через партнёра — нужен собственный lawful residence и SNS user number; união помогает доказать общий адрес/домохозяйство',
              'Частные страховки — тариф для супругов (семейные планы)',
              'Больничные посещения как близкого человека — обычно легче, но для четких полномочий принимать решения в медицине оформляйте formal advance directive / procurador de cuidados de saúde (Lei 25/2012)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Иммиграция', content: [
            { kind: 'checklist', items: [
              '**Reagrupamento Familiar** через гражданина/резидента Португалии — возможен; ожидайте дополнительных доказательств durable relationship/cohabitation (AIMA может запросить больше документов, чем у супругов)',
              '**Гражданство по união** после 3 лет с гражданином PT по art. 3 Lei 37/81 — обычно требуется **предварительное reconhecimento judicial** união de facto в гражданском суде; certificado Junta для гражданства недостаточен',
              '**Виза для партнёра**: если гражданин Португалии едет работать за рубеж, партнёр-иностранец может получить статус близкого родственника',
              'Для свободного передвижения граждан EU: партнёр-сожитель может рассматриваться как durable partner при должных доказательствах cohabitation/отношений (Lei 37/2006, Директива 2004/38/EC)'
            ]}
          ]},
          { id: 'r4', title: '🏠 Жильё', content: [
            { kind: 'checklist', items: [
              'Аренда: партнёр-созаявитель, право продолжать аренду при смерти основного арендатора',
              'Собственность: совместное приобретение без дополнительных налогов',
              'Социальное жильё: пара считается «agregado familiar»',
              '⚠️ Family home имеет специфические защиты (особенно для аренды и при смерти/разрыве), но união **не даёт автоматического вето** не-собственника на продажу. Если хотите защиты — оформляйте совладение или защитите контрактом'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-prove',
      title: 'Как доказать / оформить',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Вариант A — сертификат от Junta de Freguesia', content: [
            { kind: 'checklist', items: [
              'Самый быстрый и простой способ',
              'В Junta de Freguesia по месту жительства с: Cartão de Cidadão/ВНЖ обоих, 2 свидетеля (соседи, друзья), Atestado de Residência',
              'Свидетели под присягой подтверждают, что вы живёте вместе ≥ 2 лет',
              'Выдают **Certificado de União de Facto** в день визита (стоимость муниципальная — уточните в Junta)',
              'Достаточно для многих бытовых/налоговых целей, но каждый орган может запросить доп. доказательства. Для гражданства IRN через união обычно НЕДОСТАТОЧНО (нужно reconhecimento judicial); для AIMA — ожидайте доп. доказательств cohabitation'
            ]}
          ]},
          { id: 'p2', title: 'Вариант B — регистрация в Conservatória (опционально)', content: [
            { kind: 'checklist', items: [
              'Registo civil da união — опциональный акт; в основном фиксирует ситуацию в гражданском реестре PT, где это юридически возможно',
              'Для иностранцев без португальского assento de nascimento практический эффект зависит от их civil registration status',
              'Не создаёт дополнительных прав и **не заменяет** judicial recognition для гражданства',
              'Стоимость: уточните на IRN/ePortugal перед визитом — фиксированной символической цены нет'
            ]}
          ]},
          { id: 'p3', title: 'Вариант C — совместная декларация IRS', content: [
            { kind: 'paragraph', text: 'IRS joint filing помогает доказать общую жизнь для налоговых целей, но не обязывает AIMA/IRN/суды. Для гражданства по art. 3 с гражданином PT — планируйте reconhecimento judicial união de facto, а не просто certificado Junta.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Разрыв / dissolução',
      content: [
        { kind: 'checklist', items: [
          'Dissolução происходит по: смерти, браку или воле одного/обоих партнёров (Lei 7/2001 art. 8)',
          'Если разрыв инициируется для обоснования юридических эффектов — может потребоваться judicial declaration',
          'Уведомите AT/Segurança Social/AIMA/IRN там, где это релевантно',
          'После разрыва: алименты ограничены и не как при разводе; раздел имущества — по общему праву (не matrimonial)',
          'Стоимость зависит от органа/процедуры (не единый «€10»). Уточняйте на IRN/ePortugal',
          'Не сообщили — можете остаться как união в документах, что может блокировать новые отношения'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs брак',
      content: [
        { kind: 'checklist', items: [
          '🔸 **União**: проще создать/прекратить, без церемонии, без судебного развода',
          '🔸 **Брак**: супруг — законный наследник; default property regime = communion of acquired assets (если не выбран другой режим). Больше защит для family home и представительства',
          '🔸 **Для гражданства**: для união с гражданином PT обычно нужно judicial recognition; брак процедурно проще для IRN',
          '🔸 **Для иммиграции**: брак даёт более сильный статус; união требует доказательств durable relationship',
          '🔸 **Для социальной сферы**: pensão de sobrevivência работает для обоих, но детали зависят от взносов',
          '🔸 **Налогообложение**: обе формы позволяют tributação conjunta'
        ]},
        { kind: 'warning', text: 'Для Reagrupamento Familiar — собирайте сильные доказательства cohabitation/отношений и проверяйте текущий список AIMA. Для гражданства по união с гражданином PT — планируйте reconhecimento judicial; одной регистрации в Conservatória недостаточно. ⚠️ Reforma Lei da Nacionalidade: Decreto AR 48/XVII промульгирован Президентом Сегуру 03.05.2026 — на дату 17.05.2026 ещё ожидает публикации в DRE; перед подачей сверяйтесь с актуальной редакцией закона.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de União de Facto (Junta de Freguesia)', amountEURMin: 0, amountEURMax: 20, note: 'муниципальная цена; уточняйте в конкретной Junta' },
    { label: 'Регистрация в Conservatória do Registo Civil', note: 'по emolument-таблице IRN — проверяйте на ePortugal перед визитом' },
    { label: 'Dissolução', note: 'зависит от процедуры (Junta/registo civil/суд) — единой цены нет' }
  ],
  sources: [
    { title: 'Lei 7/2001 — União de facto (consolidada)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34455975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — União de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo de União de Facto', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}