export default {
  editorialVoice: 'hackportugal',
  id: 'dog-dangerous-breeds',
  categoryId: 'animals',
  title: 'Собаки в Португалии — регистрация, опасные породы, налог',
  tldr: 'Регистрация собак: SIAC (Sistema de Identificação dos Animais de Companhia) обязательна после установки микрочипа — бесплатно у ветеринара. Муниципальная лицензия (licença canina) — категория по типу собаки: **H = cão perigoso**, **G = cão potencialmente perigoso**, обычные категории — для остальных. По DL 315/2009: для cão perigoso/potencialmente perigoso обязательна страховка гражданской ответственности (минимум по закону), намордник + поводок в общественных местах, владелец совершеннолетний и без судимостей по определённым преступлениям. Список potencialmente perigoso (Portaria 422/2004 и обновления): Rottweiler, Pit Bull Terrier, Staffordshire Terrier, Tosa Inu, Fila Brasileiro, American Staffordshire Terrier, Dogo Argentino и помеси этих пород.',
  tags: ['собаки', 'животные', 'пёс', 'бойцовские'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'register',
      title: '📝 Регистрация собаки — обязательные шаги',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Микрочип (SIAC)', content: [
            { kind: 'checklist', items: [
              'Обязателен для **всех собак** ≥ 4 мес (и домашних кошек)',
              'Устанавливается ветеринаром — 20-40 €',
              'Автоматически регистрируется в SIAC (централизованной базе данных) — бесплатно',
              'Проверка чипа: siac.dgav.pt по номеру'
            ]}
          ]},
          { id: 'r2', title: '2. Licença Canina (муниципальная лицензия)', content: [
            { kind: 'checklist', items: [
              'Подаётся в Junta de Freguesia по месту жительства',
              'Документы: регистрация в SIAC, вакцинация от бешенства, справка о стерилизации (если стерилизована)',
              'Стоимость: **5-15 €/год** (зависит от муниципалитета; категории A/B — дороже, до 50 €)',
              'Жетон (medalha) — кольцо с номером, крепится на ошейник',
              'Продление ежегодно до 31 марта',
              'Штраф за отсутствие лицензии: 50-250 €'
            ]}
          ]},
          { id: 'r3', title: '3. Вакцинации', content: [
            { kind: 'checklist', items: [
              'Бешенство — обязательно ежегодно (подтверждается ветеринаром)',
              'Комбинированная (DHPPi+L) — рекомендуется ежегодно',
              'Питомниковый кашель — для активных собак / собак, часто посещающих грумера',
              'Ветеринар также проверяет титр антител при въезде из стран вне EU'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'dangerous-breeds',
      title: '⚠️ Cão perigoso (категория H) и potencialmente perigoso (категория G)',
      content: [
        { kind: 'paragraph', text: 'DL 315/2009 определяет «perigoso» и «potencialmente perigoso» — особые правила регистрации, страхования и обращения.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Cão potencialmente perigoso — список пород (категория G)', content: [
            { kind: 'checklist', items: [
              'American Pit Bull Terrier',
              'American Staffordshire Terrier',
              'Staffordshire Bull Terrier',
              'Rottweiler',
              'Dogo Argentino',
              'Fila Brasileiro',
              'Tosa Inu (Tosa Japanese)',
              'Cão de Fila de São Miguel',
              'Метисы этих пород (≥ 50% крови)',
              'Любая собака, проявившая агрессию к человеку или животному (без провокации), переводится в cão perigoso (категория H) (perigoso) по решению муниципального ветеринара'
            ]}
          ]},
          { id: 'd2', title: 'Требования к владельцу', content: [
            { kind: 'checklist', items: [
              '≥ 18 лет',
              'Без судимости за насилие',
              'Без противопоказаний по психике (медицинская справка)',
              'Проходить специальный курс «formação em comportamento canino» (в некоторых муниципалитетах)',
              'Обязательное страхование гражданской ответственности **≥ 50 000 €** (стоит 50-200 €/год)',
              'Декларация в Junta о наличии опасной собаки'
            ]}
          ]},
          { id: 'd3', title: 'Правила содержания', content: [
            { kind: 'checklist', items: [
              'На улице: **намордник (açaime) + поводок короче 1 м**',
              'Нельзя на детских площадках, в общественном транспорте, ресторанах',
              'Во дворе: забор ≥ 1.8 м, табличка «cão perigoso»',
              'Прогулка только со взрослым сопровождающим',
              'Не более 2 собак категории A/B в одном хозяйстве без специальной лицензии'
            ]}
          ]},
          { id: 'd4', title: 'Штрафы', content: [
            { kind: 'checklist', items: [
              'Без licença: 50-1 000 €',
              'Без страховки: 500-3 000 €',
              'Без намордника на улице: 500-1 500 €',
              'Нападение (даже без тяжёлых последствий): 1 000-3 750 €',
              'Повторные нарушения: изъятие собаки, запрет владения на 5 лет'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'breeding',
      title: '🐕‍🦺 Разведение и продажа',
      content: [
        { kind: 'checklist', items: [
          'Профессиональное разведение требует регистрации в DGAV (Direção-Geral de Alimentação e Veterinária)',
          'Разведение категории A/B — запрещено (с 2009) — возможна только стерилизация',
          'Продажа без чипа/регистрации — штраф до 3 750 €',
          'Кинологические клубы: Clube Português de Canicultura (cpc.pt) для официальных родословных'
        ]}
      ]
    },
    {
      id: 'abandoned',
      title: '🆘 Что делать с брошенной собакой',
      content: [
        { kind: 'checklist', items: [
          'Позвонить в муниципальный приют (canil): у каждого муниципалитета свой',
          'Или GNR SEPNA (природоохранная полиция) 217 653 100 — для диких животных / потенциально опасных случаев',
          'Помощь: União Zoófila (Lisboa), SOS Animal, Associação Animais de Rua — ONG',
          'В парках / на тропах собака без сопровождающего — сообщить SEPNA или пожарным',
          'Брошенная собака в Португалии — уголовное преступление, если доказан умысел (до 3 лет ареста по Lei 69/2014)'
        ]}
      ]
    },
    {
      id: 'vet-prices',
      title: '💰 Стоимость ветеринарии',
      content: [
        { kind: 'checklist', items: [
          '**Консультация**: 25-40 € (обычная), 50-80 € (специализированная клиника)',
          '**Кастрация/стерилизация**: 150-350 € (кобель), 200-500 € (сука)',
          '**Вакцинация (ежегодная)**: 30-50 €',
          '**Чип SIAC**: 20-40 €',
          '**Стоматология (чистка)**: 200-400 €',
          '**Анализы крови**: 40-100 €',
          '**Рентген**: 60-100 €',
          '**Emergência 24/7** (срочная помощь): 80-150 € только за консультацию',
          '**Эвтаназия + кремация**: 150-300 €',
          '🏥 **Страховка питомца**: 10-40 €/мес — Tranquilidade Pet, Médis Animal, PetPremium'
        ]}
      ]
    },
    {
      id: 'lost-found',
      title: '🔍 Пропавший питомец',
      content: [
        { kind: 'checklist', items: [
          'Немедленно: сообщить в SIAC (siac.dgav.pt) — статус "desaparecido"',
          'Муниципальный приют (canil) — проверять каждые 2-3 дня (собак часто приносят сюда)',
          'Социальные сети: группа Facebook «Animais Perdidos» в вашем регионе',
          'Расклеить объявления в районе — с фото, кличкой, телефоном (не раскрывать, что есть награда)',
          'При находке чужой собаки: сканировать чип у ветеринара (во всех ветеринарных клиниках есть считыватель)',
          'Нельзя присваивать найденную собаку — это кража по закону'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Микрочип SIAC', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Licença Canina (обычная)', amountEURMin: 5, amountEURMax: 15, note: '€/год' },
    { label: 'Licença Canina cão perigoso (категория H)/B', amountEURMin: 25, amountEURMax: 50, note: '€/год' },
    { label: 'Страховка для категорий A/B', amountEURMin: 50, amountEURMax: 200, note: '€/год' },
    { label: 'Вакцинация ежегодная', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Кастрация', amountEURMin: 150, amountEURMax: 500 }
  ],
  sources: [
    { title: 'DGAV — SIAC', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 315/2009 — cães perigosos (consolidado)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34469975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 69/2014 — maus tratos a animais', url: 'https://diariodarepublica.pt/dr/detalhe/lei/69-2014-56470378', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Clube Português de Canicultura', url: 'https://www.cpc.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}