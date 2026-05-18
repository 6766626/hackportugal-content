export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Сбор моллюсков (apanha de bivalves) — лицензия и санитарные зоны',
  tldr: 'Сбор моллюсков на пляже и в прибрежной зоне (ameijoa, berbigão, conquilha, longueirão) — отдельная категория Pesca Lúdica (любительское рыболовство) от DGRM (Генеральное управление морских ресурсов)\.\n\nЛицензия "Apanha Apeada": ~10 € на 3 дня, ~25 € на год. Дневной лимит: 1 кг с раковиной на человека. Собирать можно ТОЛЬКО в санитарно классифицированных зонах (zonas classificadas): IPMA (Институт моря и атмосферы) публикует список A/B/C каждый месяц. Сбор в неклассифицированных зонах — незаконен ИЛИ требует обязательной термической обработки (даже если вид разрешён)\.\n\nЗапрещены: лом, любые механические инструменты, а также сбор раковин меньше минимального размера (ameijoa 25 мм, berbigão 25 мм, longueirão 100 мм)\.\n\nЛицензия Pesca Lúdica à linha для удочки НЕ покрывает сбор моллюсков — нужна отдельная лицензия.',
  tags: ['bivalves', 'mariscagem', 'apanha', 'ameijoa', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'Что такое apanha de bivalves и почему отдельная лицензия 🐚',
      content: [
        { kind: 'paragraph', text: 'Apanha de bivalves — это любительский сбор двустворчатых моллюсков и других съедобных морских организмов в прибрежной зоне: на песчаных пляжах во время отлива, на скалах, в эстуариях.\n\nВ Португалии это вид Pesca Lúdica (любительское рыболовство), юридически регулируется DGRM (Генеральное управление морских ресурсов), а санитарный контроль осуществляет IPMA (Институт моря и атмосферы).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Другие моллюски: pé-de-burrinho, lapa (пателла), mexilhão (мидии) на скалах',
          'Ракообразные: caranguejo, camarão, percebes (морские желуди) — частично попадают сюда',
          'Иглокожие: ouriço-do-mar (морской ёж) — особо регулируется',
          'НЕ входит: ловля удочкой (нужна Pesca Lúdica à linha), вытаскивание осьминога руками из норы (запрещено с 2017), лангусты (только профессиональная добыча)'
        ] },
        { kind: 'warning', text: 'Лицензия Pesca Lúdica à linha (для удочки) НЕ действует на bivalves. И наоборот. Многие думают: «у меня есть лицензия», идут копать ameijoa в Algarve и получают штраф 250-500 €.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Санитарные зоны — самое важное',
      content: [
        { kind: 'paragraph', text: 'Это вопрос здоровья. Двустворчатые моллюски фильтруют воду и накапливают токсины (биотоксины из водорослей — “красные приливы”), бактерии (E. coli, Salmonella), тяжёлые металлы. IPMA каждый месяц публикует обновлённую карту: какие зоны разрешены, для каких видов и в каком виде их можно потреблять.' },
        { kind: 'checklist', items: [
          'Класс A (взял и съел): редкость; например, ameijoa из Ria Formosa в хорошие месяцы',
          'Класс B (собирать можно, но обязательна термическая обработка): большинство зон Португалии. Варить минимум 5 минут или выдерживать 2–3 дня в чистой солёной воде',
          'Класс C (требуется индустриальная депурация): для любителей недоступно',
          'PROIBIDO (запрещено): сбор и потребление полностью запрещены, обычно из‑за пиков биотоксинов',
          'Неклассифицированная зона (zona não classificada): сбор и потребление запрещены — санитарного контроля нет'
        ] },
        { kind: 'paragraph', text: 'IPMA обновляет карту каждую неделю на ipma.pt → Mar e Pesca → Bivalves. Есть и приложение IPMA для iOS и Android, где можно быстро проверить зону по координатам.' },
        { kind: 'warning', text: 'Сбор в зоне PROIBIDO даже в малых количествах = до 1500 € штрафа + риск отравления. Биотоксины не разрушаются варкой! Пики — март–май и сентябрь–октябрь после весенних/осенних “цветений” водорослей.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Получение лицензии Apanha Apeada',
      content: [
        { kind: 'paragraph', text: 'Оформи на portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Apanha Apeada. Вход по Chave Móvel Digital (CMD; мобильная цифровая подпись) или Cartão de Cidadão (гражданская карта).' },
        { kind: 'checklist', items: [
          '3 дня: ~10 €',
          '1 месяц: ~15 €',
          '1 год: ~25 €',
          '3 года: ~60 €',
          'Лицензия именная, передавать нельзя'
        ] },
        { kind: 'paragraph', text: 'Комбо «à linha apeada + apanha» иногда выгоднее, если ты и рыбачишь, и собираешь моллюсков.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Правила: инструменты, размеры, лимиты',
      content: [
        { kind: 'paragraph', text: 'Минимальные размеры — критично соблюдать:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa и ameijoa-japonesa: 25 мм диаметр раковины',
          'Berbigão: 25 мм',
          'Longueirão / navalha: 100 мм длина',
          'Mexilhão (мидии): 50 мм',
          'Lapa (пателла): 30 мм',
          'Устрица плоская (ostra plana): 60 мм; португальская: 80 мм',
          'Polvo (осьминог): 750 г (но руками вытаскивать из норы запрещено с 2017)',
          'Percebes: 25 мм у основания прикрепления'
        ] },
        { kind: 'paragraph', text: 'Дневной лимит:' },
        { kind: 'checklist', items: [
          'Все bivalves суммарно: 1 кг с раковиной на человека в сутки',
          'Percebes: 0,5 кг суммарно (особо охраняемый вид!)',
          'Mexilhão: 1 кг',
          'Polvo: до 5 кг (набрать сложно, но правило есть)'
        ] },
        { kind: 'paragraph', text: 'Разрешённые и запрещённые инструменты:' },
        { kind: 'checklist', items: [
          '✅ Только ручной сбор (пальцы, тонкая палочка)',
          '✅ Сито/решето для измерения размера и просеивания песка',
          '✅ Sacha (мини‑грабли) шириной до 30 см и зубьями максимум 5 см',
          '✅ Деревянный нож для percebes',
          '❌ Любая лопата с черенком',
          '❌ Mantas/ras (виды сетей)',
          '❌ Мотопомпы для откачки воды или песка',
          '❌ Гидроинъекция (запрещена повсеместно с 2014)',
          '❌ Электрошокеры'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Где и когда собирать — лучшие точки',
      content: [
        { kind: 'paragraph', text: 'Главное правило: перед выездом проверь актуальную карту IPMA за текущий месяц. Статусы зон меняются.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): главная «фабрика» ameijoa в Португалии. Olhão, Tavira, Faro. Часто класс A или B.',
          'Ria de Aveiro: berbigão и ameijoa. Сезон — зима и весна.',
          'Ria de Alvor: смешанные bivalves.',
          'Estuário do Sado (Setúbal): ameijoa и berbigão. Часть зон в природном резервате (Reserva Natural) с дополнительными правилами.',
          'Lagoa de Albufeira: ameijoa, иногда класс A.',
          'Ribeira do Lavre, канальчики Ria Formosa: longueirão — классика.',
          'Costa Vicentina: percebes на скалах (ОЧЕНЬ опасно для новичков, ежегодно бывают смертельные случаи).',
          'Berlengas: ВСЁ ЗАПРЕЩЕНО — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'Лучшее время — отлив. Таблицы приливов и отливов (calendário de marés): ipma.pt или приложение Tides Near Me. За 2 часа до пика отлива и 1 час после — оптимально.' },
        { kind: 'warning', text: 'Не задерживайся дольше отлива. Прилив быстро заходит в Ria Formosa и эстуарии — каждый год случаются утопления заблудившихся сборщиков. Никогда не выходи один. Телефон с зарядом — обязателен.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'Как обработать собранное',
      content: [
        { kind: 'paragraph', text: 'Для класса B (большинство зон) перед едой обязательна обработка.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Очистка от песка',
            content: [
              { kind: 'checklist', items: [
                'Замочи в солёной воде (35 г соли на 1 л) при «морской» температуре 12–18 °C',
                'Минимум 3–4 часа, лучше на ночь',
                'Меняй воду каждые 2–3 часа: ameijoa активно «выплёвывает» песок',
                'Добавь кукурузную муку — моллюски быстрее очищаются'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Термическая обработка',
            content: [
              { kind: 'checklist', items: [
                'Для класса B обязательно: варить минимум 5 минут при ~90 °C или жарить не менее 10 минут',
                'Закладывай в уже кипящую воду или на хорошо разогретую сковороду',
                'Раковины открылись — готово; не открылись — выбрось, не ешь',
                'Классика: Ameijoas à Bulhão Pato — белое вино, чеснок, кинза',
                'Carne de porco com ameijoas — классика Алентежу'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'НИКОГДА не ешь сырыми, если зона не класса A. Биотоксины (PSP, ASP, DSP) не разрушаются варкой; термическая обработка убивает бактерии, но не токсины. Если сейчас пик токсинов — даже варёные моллюски могут быть опасны. Всегда сверяйся с IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Кто проверяет и какие штрафы',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima (морская полиция) — на пляжах и в эстуариях',
          'GNR-SEPNA (Нац. республиканская гвардия, служба охраны природы) — в природных парках',
          'Capitania (портовая капитания) — в портах',
          'ASAE (инспекция экономики и пищевой безопасности) проверяет рестораны и продавцов на источник bivalves'
        ] },
        { kind: 'checklist', items: [
          'Без лицензии: 100–500 € + конфискация улова и инструмента',
          'Сбор в зоне PROIBIDO: 250–1500 €',
          'Размер ниже минимума: 100–300 € за каждое нарушение',
          'Превышение дневного лимита: 100–500 €',
          'Запрещённые инструменты (помпа, лопата): до 1500 €',
          'Попытка продать собранное: 500–3000 € + уголовное преследование при повторе',
          'Сбор percebes без лицензии: до 1500 € (особенно строго в Costa Vicentina)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apanha Apeada — 3 дня', amountEUR: 10 },
    { label: 'Apanha Apeada — 1 месяц', amountEUR: 15 },
    { label: 'Apanha Apeada — 1 год', amountEUR: 25 },
    { label: 'Combo (à linha + apanha) — год', amountEURMin: 35, amountEURMax: 50, note: 'Проверь итоговую цену на портале DGRM при оформлении' },
    { label: 'Sacha (грабли) для bivalves', amountEURMin: 15, amountEURMax: 35, note: 'В Decathlon и рыболовных магазинах' },
    { label: 'Штраф без лицензии', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Штраф в зоне PROIBIDO', amountEURMin: 250, amountEURMax: 1500 }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica e Apanha', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — Bivalves: zonas e classificação sanitária', url: 'https://www.ipma.pt/pt/bivalves/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA Bivalves App — карта зон в реальном времени (iOS/Android)', url: 'https://www.ipma.pt/pt/bivalves/avisos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica e Apanha', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 27/2001 — минимальный размер por espécie', url: 'https://dre.pt/dre/detalhe/portaria/27-2001-411720', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}