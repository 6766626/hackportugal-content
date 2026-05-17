export default {
  editorialVoice: 'hackportugal',
  id: 'pet-adoption-shelters',
  categoryId: 'animals',
  title: 'Усыновить животное в Португалии — приюты и процесс',
  tldr: 'В Португалии усыновление в приюте бесплатно или с символическим взносом (10-50 €) для покрытия стерилизации и чипа. Главные источники: муниципальные CRO (Centro de Recolha Oficial), частные ассоциации (União Zoófila, ANIMAL, Bianca, СВ), Animais de Rua (Lisboa), Casa dos Animais Lisboa. На сайте adopt.cao.pt — национальная база. Закон требует чипа + регистрации в SIAC + страхования (для собак опасных пород). Стерилизация обычно включена.',
  tags: ['усыновление', 'приют', 'собака', 'кошка', 'cro', 'animal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where-to-adopt',
      title: '🏠 Где искать животное',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Муниципальные приюты (CRO)', content: [
            { kind: 'checklist', items: [
              '🏛️ Каждый муниципалитет имеет CRO (Centro de Recolha Oficial)',
              '📍 Lisboa: Casa dos Animais Lisboa (CAL) — Parque das Conchas',
              '📍 Porto: Centro Municipal de Recolha Animal (gato/cão) — Camarinha',
              '📍 Cascais: Canil Municipal de Cascais',
              '📍 Sintra: муниципальный приют Sintra',
              '🌐 Все CRO: cm-cidade.pt → Animais de Companhia',
              '💰 Сборы 10-30 € (только покрытие стерилизации)',
              '⚠️ Часто переполнены — животные долго ждут усыновления'
            ]}
          ]},
          { id: 'w2', title: 'Частные ассоциации', content: [
            { kind: 'checklist', items: [
              '🐕 **União Zoófila** (zoofila.pt) — крупнейшая, Lisboa',
              '🐱 **ANIMAL** (animal.pt) — национальная',
              '🦴 **Bianca** (bianca.pt) — Algarve, специализация на пожилых собаках',
              '🐶 **SOS Animal** (sosanimal.pt) — спасение',
              '🐈 **Gatos de Rua** (gatosderua.pt) — стерилизация городских кошек',
              '💰 Сборы 30-100 € (на покрытие стерилизации, прививок, чипа)',
              '✅ Часто проводят осмотр, выявляют поведенческие проблемы заранее'
            ]}
          ]},
          { id: 'w3', title: 'Платформы поиска', content: [
            { kind: 'checklist', items: [
              '🌐 **adopt.cao.pt** — национальная база (собаки и кошки)',
              '🌐 **adoptar.pt** — частная база, много объявлений',
              '📱 **Tirar de Caixa** (Lisboa) — группа в Facebook',
              '📱 **Adopta Lisboa** — приложение для усыновления',
              '📱 **Pawsome** — недорогое приложение для просмотра'
            ]}
          ]},
          { id: 'w4', title: 'Случайные находки', content: [
            { kind: 'checklist', items: [
              '🚨 Бездомное животное на улице — позвонить 112 (если в опасности) или в местный CRO',
              '⚖️ Найдено животное — закон требует попытаться найти владельца (фото в соцсетях, объявление)',
              '🔢 Сканировать чип в любой ветеринарной клинике (ID — pet-id.pt)',
              '⏰ Если 30 дней не нашлось владельца — можно официально усыновить'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Процесс усыновления',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Шаг 1 — Заявка', content: [
            { kind: 'checklist', items: [
              '🌐 Анкета на сайте приюта или лично',
              '🆔 CC / ВНЖ + подтверждение адреса',
              '🏠 Описание жилья: квартира/дом, размер, балкон, разрешены ли животные',
              '👨‍👩‍👧 Кто живёт (взрослые/дети/другие животные)',
              '⏰ Сколько времени животное будет одно',
              '📞 Контактные данные'
            ]}
          ]},
          { id: 'p2', title: 'Шаг 2 — Визит и подбор', content: [
            { kind: 'checklist', items: [
              '🐾 Прийти в приют, познакомиться с животными',
              '⏰ Тест-прогулка для собак (25-30 мин выгулять, посмотреть характер)',
              '🐱 Тест контакта для кошек (взаимодействие, реакция на руки)',
              '👨‍⚕️ Беседа с волонтёром о поведении животного, истории, проблемах здоровья'
            ]}
          ]},
          { id: 'p3', title: 'Шаг 3 — Проверка жилья (для собак)', content: [
            { kind: 'checklist', items: [
              '🏠 Многие приюты делают проверку жилья — приходит волонтёр',
              '✅ Проверяет: безопасный балкон/двор, нет открытых окон, есть место для лежака',
              '⚖️ Потенциально опасные породы (см. ниже): нужны licença especial в Junta, seguro de responsabilidade civil минимум €50 000 и спец. требования к идентификации',
              '🚫 Если проверка жилья не пройдена — могут отказать',
              '⏱️ Решение в 1-3 дня'
            ]}
          ]},
          { id: 'p4', title: 'Шаг 4 — Контракт и забор', content: [
            { kind: 'checklist', items: [
              '📜 Подписать «Termo de Adopção» (контракт усыновления)',
              '💰 Заплатить сбор (если есть)',
              '📋 Получить документы: паспорт животного, Caderneta Sanitária, карточка чипа',
              '🪪 Чип уже зарегистрирован в SIAC на ваше имя (или передаётся вам для перерегистрации)',
              '🐾 Забрать животное (приготовить переноску, поводок)',
              '⚠️ Первые недели — период адаптации, животное будет переживать переезд'
            ]}
          ]},
          { id: 'p5', title: 'Шаг 5 — Регистрация в SIAC', content: [
            { kind: 'checklist', items: [
              '🌐 SIAC — Sistema de Informação de Animais de Companhia (siac.vet)',
              '📝 Передача/изменение titular в SIAC — в установленный срок (обычно 15 дней после передачи). Уточните, делает ли это CRO/associação сразу или нужно идти к veterinário',
              '🆔 NIF, CC, информация о животном',
              '💰 Бесплатно',
              '🚨 Без перерегистрации = штраф до 500 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: '💰 Финансовые обязательства',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Изначальные', content: [
            { kind: 'checklist', items: [
              '💰 Сбор за усыновление 0-100 €',
              '🧪 Стерилизация (если не сделано): кошка 80-150 €, собака 150-300 €',
              '💉 Прививки (если не сделано): 50-100 €',
              '🦠 Дегельминтизация: 10-20 €',
              '🛏️ Лежак, миски, поводок, наполнитель: 50-150 €',
              '📜 Страхование (для собак): 30-100 €/год'
            ]}
          ]},
          { id: 'c2', title: 'Ежемесячные', content: [
            { kind: 'checklist', items: [
              '🍖 Корм для собаки (15 кг): 30-80 €',
              '🍗 Корм для кошки: 20-50 €',
              '🩺 Плановый ветеринар: 10-30 €/мес в среднем',
              '🚿 Груминг (длинношёрстные собаки): 30-60 € каждые 6 нед',
              '💊 Антипаразитарные: 10-20 €',
              '📅 Ежегодные прививки: 60-100 €',
              '⚠️ Срочный ветеринар (онкология, операция): 500-2 000 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: '🏠 После усыновления',
      content: [
        { kind: 'checklist', items: [
          '🎓 **Первые 30 дней адаптации**: тихо, не водить много гостей, дайте время',
          '🩺 Первый плановый осмотр у ветеринара (собственного, не приютского) — 2 нед после усыновления',
          '💪 **Поведенческий специалист** (для собак с травмой): кинолог с позитивным подходом',
          '🐾 Прогулки 2-3 раза в день (собаки), игры (кошки)',
          '📸 Социальные сети: помогите приюту — публикуйте фото, рекомендуйте',
          '🎁 Возвращение в приют (если не подошло): обычно есть 30 дней для возврата; не выкидывайте на улицу!',
          '⚖️ Закон Lei 92/95: жестокое обращение = до 2 лет тюрьмы + 5 000 € штраф'
        ]}
      ]
    },
    {
      id: 'opasnye-porody',
      title: '⚠️ Cães perigosos e potencialmente perigosos — regime legal',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 315/2009, изменённый Lei 110/2015; список raças potencialmente perigosas — Portaria 422/2004. Для усыновления требуются дополнительные условия.' },
        { kind: 'checklist', items: [
          '🐕 **Потенциально опасные породы**: Cão de Fila Brasileiro, Dogo Argentino, Pit Bull Terrier, Rottweiler, American Staffordshire Terrier, Staffordshire Bull Terrier, Tosa Inu — и их cruzamentos',
          '📋 **Licença de detenção** в Junta de Freguesia',
          '💼 **Seguro de responsabilidade civil** минимум €50 000',
          '🐾 **Курс поведения** + сертификат',
          '🩺 **Комплексное обследование** хозяина (медицинское, психологическое)',
          '🚶 **На прогулке**: намордник + короткий поводок ≤1 м + взрослый ≥ 16 лет',
          '⚠️ Тяжелее усыновить — приюты придирчивы',
          '📜 Поведенческие тесты для самой собаки'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Сбор за усыновление', amountEURMin: 0, amountEURMax: 100 },
    { label: 'Стерилизация кошка', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Стерилизация собака', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Корм собаке/мес', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Ветеринар плановый/мес', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Страхование опасных пород/год', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'SIAC — Sistema de Informação de Animais de Companhia', url: 'https://www.siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 92/95 — Proteção animal', url: 'https://diariodarepublica.pt/dr/detalhe/lei/92-1995-241458', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 315/2009 + Lei 110/2015 — Cães perigosos', url: 'https://diariodarepublica.pt/dr/detalhe/lei/110-2015-69859225', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria 422/2004 — Lista de raças potencialmente perigosas', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/422-2004', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}