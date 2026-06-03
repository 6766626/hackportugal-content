export default {
  editorialVoice: 'hackportugal',
  id: 'brazil-specific',
  categoryId: 'country_specific',
  title: 'Бразильцы в Португалии — CPLP и Estatuto de Igualdade',
  tldr: 'Бразильцы в Португалии: безвиз 90 дней, подача на ВНЖ изнутри страны через соглашение о мобильности CPLP. После 3 лет резидентства — Estatuto de Igualdade: политические и экономические права наравне с португальцами. По действующему закону (Lei Orgânica n.º 1/2026, в силе с 19.05.2026) — гражданство после 7 лет легального проживания для граждан CPLP; заявления, поданные до 18.05.2026, рассматриваются по прежней редакции (5 лет). Это один из самых простых путей иммиграции в Португалию.',
  audience: { countryCodes: ['BR'] },
  tags: ['бразилия', 'cplp', 'estatuto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'entry',
      title: 'Въезд и первые шаги',
      content: [
        { kind: 'checklist', items: [
          '✈️ Прямые рейсы TAP/LATAM/Azul: São Paulo/Rio/Recife → Lisboa/Porto',
          '🛂 Безвиз 90 дней в Шенгене по бразильскому паспорту',
          '🆔 На границе — заявить цель: «vou residir em Portugal ao abrigo do Acordo de Mobilidade CPLP» (соглашение о мобильности CPLP)',
          '📅 Запись в AIMA — в первые 30–60 дней после въезда',
          '🏠 Арендовать жильё с договором',
          '🎫 Получить NIF в Finanças (без представителя — CPLP)'
        ]}
      ]
    },
    {
      id: 'cplp-path',
      title: 'Путь через CPLP',
      content: [
        { kind: 'paragraph', text: 'Основной маршрут для бразильцев — соглашение о мобильности CPLP. Процесс:' },
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Въезд + NIF + жильё', content: [
            { kind: 'paragraph', text: 'В первые дни.' }
          ]},
          { id: 'c2', title: '2. Запись в AIMA', content: [
            { kind: 'paragraph', text: 'Через официальный портал AIMA или по телефону 217 115 000. Выбрать «Acordo de Mobilidade CPLP».' }
          ]},
          { id: 'c3', title: '3. Подать документы', content: [
            { kind: 'checklist', items: [
              'Паспорт Бразилии',
              'NIF',
              'Atestado de Residência от Junta de Freguesia (районное управление)',
              'Подтверждение средств: рабочий контракт или выписки из банка (минимум 1 IAS = € 537,13 в месяц либо депозит 12 × IAS = € 6 445,56)',
              'Справка о несудимости из Бразилии (апостиль + перевод — хотя португальский понимают, переводы часто требуют)',
              '2 фото 3×4'
            ]}
          ]},
          { id: 'c4', title: '4. Получить ВНЖ', content: [
            { kind: 'paragraph', text: 'Первичный — на 1 год. Продление на 2 года × 2 → итого 5 лет.' }
          ]}
        ]}
      ]
    },
    {
      id: 'estatuto-igualdade',
      title: 'Estatuto de Igualdade — уникальная привилегия',
      content: [
        { kind: 'paragraph', text: 'После 3 лет резидентства в Португалии бразильцы могут подать на Estatuto de Igualdade de Direitos Políticos (политическое равенство) или Civis (гражданское равенство).' },
        { kind: 'checklist', items: [
          'Политическое равенство: голосование на муниципальных выборах, работа на госслужбе (кроме высших должностей)',
          'Гражданское равенство: те же гражданские права, что у португальцев',
          'Подача через IRN (Conservatória)',
          'Основание: Tratado de Amizade, Cooperação e Consulta Brasil-Portugal (2000)',
          'По Estatuto de Igualdade бразильцы могут проживать и работать в Португалии без ограничений'
        ]}
      ]
    },
    {
      id: 'citizenship',
      title: 'Гражданство',
      content: [
        { kind: 'paragraph', text: 'Гражданам CPLP проще всего получить португальское гражданство:' },
        { kind: 'checklist', items: [
          'Действующий закон: Lei da Nacionalidade (Lei 37/81) в редакции Lei Orgânica n.º 1/2026 (опубликована в DRE 18.05.2026, в силе с 19.05.2026) — 7 лет легального проживания для граждан CPLP и ЕС, 10 лет для остальных',
          'Переходное положение: к заявлениям, поданным до 18.05.2026, применяется прежняя редакция (5 лет)',
          'Срок отсчитывается от выдачи первого ВНЖ; время ожидания (включая MdI) в стаж не засчитывается',
          'Язык A2 — не требуется (португальский родной)',
          'С португальским паспортом — гражданство ЕС'
        ]},
        { kind: 'warning', text: 'Двойное гражданство — тонкость. Португалия разрешает любое двойное гражданство. Конституция Бразилии (ст. 12, §4) разрешает двойное гражданство в двух случаях: (1) вы родились гражданином Бразилии (nato) и получаете португальское — бразильское сохраняется автоматически; (2) вы натурализованный бразилец и добровольно приобретаете другое гражданство — бразильское теряется. Если Португалия является вашей родной страной, а бразильский паспорт вы получали через натурализацию — ЛИБО отказаться от одного, ЛИБО остаться только бразильцем.' }
      ]
    },
    {
      id: 'practical',
      title: 'Практика',
      content: [
        { kind: 'checklist', items: [
          'Работа: LinkedIn, Indeed, InfoJobs. Бразильцев много в IT, стартапах, туризме',
          'Признание диплома (equivalência): DGES для высшего образования, DGE для школьного',
          'Обмен прав: по соглашению CPLP, без экзамена в IMT',
          'Банк: ActivoBank, Caixa — принимают бразильцев без сложностей',
          'Жильё: в Лиссабоне аренда T1 — € 1000–1500, в Порту — € 700–1100',
          'Налоги: Португалия облагает мировой доход резидентов. Бразилия освобождает при резидентстве в Португалии'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Бразильское сообщество',
      content: [
        { kind: 'checklist', items: [
          'Посольство Бразилии в Лиссабоне: Estrada das Laranjeiras 144',
          'Консульства: Porto, Faro',
          'Casa do Brasil em Lisboa',
          '~500 000+ бразильцев легально в Португалии по данным AIMA конца 2024 (крупнейшая иностранная диаспора)',
          'Сильнейшая диаспора — в Lisboa, Porto, Algarve',
          'Религия: евангелисты, католики — много общин',
          'Супермаркеты: бразильские отделы в Continente, специализированные магазины в Arroios/Martim Moniz'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Estatuto de Igualdade', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tratado de Amizade Brasil-Portugal (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-do-presidente-da-republica/79-2000', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPLP — официальный портал', url: 'https://www.cplp.org/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}