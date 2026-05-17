export default {
  editorialVoice: 'hackportugal',
  id: 'vhf-radio-marinha-cep',
  categoryId: 'food_leisure',
  title: 'Морское радио VHF — лицензия CEP и сертификат оператора',
  tldr: 'Если у тебя на борту есть VHF-радиостанция (или планируешь установить), нужны два документа: 1) Licença de Estação (CEP) от ANACOM (Autoridade Nacional de Comunicações — национальный регулятор связи) на саму радиостанцию — 30–80 € в год; 2) Certificado de Operador (SRC/LRC) — личный допуск к работе в эфире, по сути «права» оператора. SRC (Short Range Certificate) — для VHF у берега, экзамен 80–150 €. LRC (Long Range Certificate) — для DSC и спутниковой/дальней связи. Без этих документов работа на морских частотах — нарушение, штрафы до 2 000 €. Аварийный канал 16 при включённом VHF нужно постоянно прослушивать. Иностранные сертификаты RYA SRC, ICC VHF и UKHO признаются.',
  tags: ['vhf', 'radio', 'anacom', 'src', 'navegacao'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда VHF и её лицензии нужны',
      content: [
        { kind: 'checklist', items: [
          'Класс плавания Costeira («прибрежный») и выше: VHF обязательна (Decreto-Lei 124/2004)',
          'Класс плавания Local («местный»): VHF не обязательна, но настоятельно рекомендуется',
          'Марины часто требуют держать связь на канале 16 при входе и выходе',
          'Любое использование VHF требует двух документов: лицензии на станцию и сертификата оператора',
          'Ручная VHF тоже считается радиостанцией — действуют те же требования по лицензированию',
          'Приёмник «только прослушивание» лицензии не требует, но в Португалии есть ограничения на хранение морских приёмников без функции передачи'
        ] }
      ]
    },
    {
      id: 'cep-station',
      title: 'CEP — Licença de Estação (на саму станцию)',
      content: [
        { kind: 'paragraph', text: 'CEP — это лицензия на конкретную установку VHF на твоей лодке. Привязана к судну, а не к человеку.' },
        { kind: 'checklist', items: [
          'Выдаёт ANACOM',
          'Подача: на anacom.pt → электронные формуляры (e‑formulários) → Estações de barco',
          'Понадобится: регистрация лодки, данные VHF (модель, серийный номер, наличие DSC), MMSI',
          'MMSI (Maritime Mobile Service Identity) — обязательный 9‑значный идентификатор для DSC',
          'MMSI оформляется через ANACOM и бесплатно при подаче на CEP',
          'Стоимость CEP: 30–80 € в год (зависит от категории судна)',
          'Продление: ежегодно; оплатить можно через Multibanco (платёж через банкомат/онлайн) или MB WAY (мобильный платёжный сервис)'
        ] },
        { kind: 'paragraph', text: 'Если меняешь лодку, CEP не переносится — оформляй заново.' }
      ]
    },
    {
      id: 'src-operator',
      title: 'SRC — сертификат оператора (на тебя)',
      content: [
        { kind: 'paragraph', text: 'SRC (Short Range Certificate) — личный сертификат оператора; без него выходить в эфир нельзя.' },
        { kind: 'checklist', items: [
          'Кто выдаёт: ANACOM через аккредитованные морские школы',
          'Минимальный возраст: 16 лет',
          'Курс: 8–16 часов теории плюс практика работы с радио',
          'Содержание: правила радиосвязи, фонетический алфавит NATO, обзор каналов, работа с DSC, аварийные процедуры, MAYDAY/PAN-PAN/SECURITE',
          'Стоимость курса: 100–200 €',
          'Экзамен: тест + практическая часть на VHF и DSC',
          'Сертификат бессрочный',
          'Если уже есть RYA SRC или ICC VHF — у ANACOM упрощённое признание'
        ] },
        { kind: 'paragraph', text: 'LRC (Long Range Certificate) — для дальней связи (MF/HF, спутниковая). Обычно нужно для океанских переходов. Курс 30–50 часов, ~250–400 €.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Получение SRC — пошагово',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Найди школу',
            content: [
              { kind: 'paragraph', text: 'Список аккредитованных ANACOM курсов смотри на anacom.pt → Radiocomunicações marítimas. Многие школы — те же, что готовят к шкиперским правам. Часто есть комбо: Patrão Local + SRC за один курс ~700 €.' }
            ]
          },
          {
            id: 's2',
            title: 'Запишись на курс',
            content: [
              { kind: 'paragraph', text: 'Курсы проходят 1–2 раза в месяц в Cascais, Lisboa, Setúbal, Vilamoura, Porto. Популярные школы: Sea Boat Academy, Náutica Escola, Cascais Marina (CMI). Обычно это 2–3 полных дня или 4–6 вечерних занятий.' }
            ]
          },
          {
            id: 's3',
            title: 'Сдай экзамен',
            content: [
              { kind: 'checklist', items: [
                'Теория: ~30 вопросов, нужно минимум 80% правильных ответов',
                'Практика: передача MAYDAY/PAN-PAN, использование DSC',
                'Знание Правил радиосвязи ITU',
                'Каналы: 16 (аварийный/вызывной), 67 (связь с Capitania — портовой капитанией), 74 (портовые операции), 70 (DSC)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Получи SRC',
            content: [
              { kind: 'paragraph', text: 'Школа подаёт твои данные в ANACOM; через 2–4 недели сертификат приходит по почте или на email. Может быть электронный (с QR) или пластиковый.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Признание иностранных сертификатов',
      content: [
        { kind: 'checklist', items: [
          'RYA SRC — признаётся ANACOM напрямую, нужно зарегистрироваться',
          'ICC VHF endorsement — признаётся',
          'UK CAA SRC (после Brexit) — требуется переэкзаменовка в Португалии',
          'NRR/NDA из Германии и Франции — признаются в рамках ЕС',
          'US FCC GMDSS / Marine Operator — требуется проверить эквивалентность',
          'Российский «Радиосвязь морская» — обычно не признаётся, нужен полный курс',
          'Стоимость регистрации/признания: 50–100 €'
        ] }
      ]
    },
    {
      id: 'usage-rules',
      title: 'Правила использования VHF',
      content: [
        { kind: 'checklist', items: [
          'Канал 16 (156.800 MHz) — аварийный и вызывной: при включённой VHF его нужно постоянно слушать',
          'Последовательность вызова: своё судно ×3, вызываемая станция ×3, затем переход на рабочий канал',
          'Канал 70 — только для DSC аварий/вызовов, не для голосовой связи',
          'Канал 67 — связь с Capitania в Lisboa и Cascais',
          'Канал 74 — портовые операции',
          'Каналы 6, 8, 72, 77 — связь «судно–судно»',
          'Не флудить и не вести частные беседы в эфире',
          'Не использовать на суше — морская VHF предназначена для работы на воде',
          'MAYDAY — угроза жизни, PAN-PAN — срочная помощь, SECURITE — навигационная опасность',
          'После передачи MAYDAY все сохраняют тишину на 16‑м до завершения ситуации'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Штрафы',
      content: [
        { kind: 'checklist', items: [
          'Использование VHF без CEP: 250–1 500 €',
          'Работа в эфире без SRC: 500–2 000 €',
          'Ложный MAYDAY: 1 000–5 000 € + уголовное преследование',
          'Работа на не морской частоте: 250–1 000 €',
          'Помехи авиационной/береговой радиосвязи: уголовное преследование'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'CEP — лицензия на станцию', amountEURMin: 30, amountEURMax: 80, note: 'В год' },
    { label: 'Назначение MMSI', amountEUR: 0, note: 'Бесплатно с CEP' },
    { label: 'Курс SRC', amountEURMin: 100, amountEURMax: 200 },
    { label: 'Экзамен SRC', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Курс LRC (для дальних походов)', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Признание иностранного сертификата', amountEURMin: 50, amountEURMax: 150 },
    { label: 'VHF стационарная (Standard Horizon, Icom)', amountEURMin: 200, amountEURMax: 700 },
    { label: 'VHF ручная', amountEURMin: 100, amountEURMax: 350 }
  ],
  sources: [
    { title: 'ANACOM — Radiocomunicações marítimas', url: 'https://www.anacom.pt/render.jsp?categoryId=320', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANACOM — Certificados de Operador', url: 'https://www.anacom.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 53/2009 — radiocomunicações', url: 'https://dre.pt/dre/detalhe/decreto-lei/53-2009-606037', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ITU Radio Regulations', url: 'https://www.itu.int/pub/R-REG-RR', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}