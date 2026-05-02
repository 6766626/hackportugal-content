export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Зачисление ребёнка в португальскую школу',
  tldr: 'Обучение в Португалии обязательно с 6 до 18 лет. Государственные школы бесплатные, зачисление — по району проживания через Portal das Matrículas. Возможны частные школы (€ 3 000–15 000 в год) и международные (€ 10 000–25 000 в год). Приём новых учеников — до 15 июня для начала обучения в сентябре, иностранцы могут подавать документы в течение года.',
  tags: ['школа', 'образование', 'зачисление', 'дети'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Типы школ',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Государственные школы', content: [
            { kind: 'paragraph', text: 'Бесплатные для всех резидентов. Качество варьируется по региону, рейтинги доступны публично. Язык обучения — португальский. Для детей, для которых португальский не родной, есть программа PLNM — португальский как неродной.' }
          ]},
          { id: 't2', title: 'Частные школы', content: [
            { kind: 'paragraph', text: '€ 3 000–15 000 в год. Меньшие классы, больше внеклассных занятий. Язык обучения — португальский или двуязычные программы.' }
          ]},
          { id: 't3', title: 'Международные школы', content: [
            { kind: 'paragraph', text: '€ 10 000–25 000 в год. Программы IB, британская, французская или американская. Лиссабон, Порту, Алгарве. Популярные школы: St. Julian\'s, CAISL (Carlucci American International School of Lisbon), International Preparatory, German School, French Lycée.' }
          ]},
          { id: 't4', title: 'Домашнее обучение', content: [
            { kind: 'paragraph', text: 'Разрешено при регистрации в DGESTE. Ежегодные экзамены проходят в школе-партнёре.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Структура образования',
      content: [
        { kind: 'checklist', items: [
          'Ясли, Creche (0–3 года) — не обязательно, платно даже в государственных учреждениях',
          'Дошкольное образование, Pré-escolar / Jardim de Infância (3–6 лет) — с 5 лет обязательно',
          '1º Ciclo (1–4 класс, 6–10 лет) — обязательно',
          '2º Ciclo (5–6 класс, 10–12 лет) — обязательно',
          '3º Ciclo (7–9 класс, 12–15 лет) — обязательно',
          'Secundário (10–12 класс, 15–18 лет) — обязательно. Выбор: академические или профессиональные курсы'
        ]}
      ]
    },
    {
      id: 'enrollment',
      title: 'Процесс зачисления',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Определить школьное объединение по месту жительства', content: [
            { kind: 'paragraph', text: 'На portaldasmatriculas.edu.gov.pt введите почтовый код → список школ вашей зоны. Приоритет отдаётся детям из этой зоны.' }
          ]},
          { id: 'e2', title: '2. Регистрация на портале', content: [
            { kind: 'paragraph', text: 'Portal das Matrículas → зарегистрироваться через Chave Móvel Digital (государственная электронная подпись) + Cartão de Cidadão родителя, если есть.' }
          ]},
          { id: 'e3', title: '3. Подать заявление на зачисление', content: [
            { kind: 'paragraph', text: 'Окно основной сессии для 2026–2027 учебного года: 14 апреля – 14 мая 2026 (Portal das Matrículas, дошкольное образование + 1-й класс 1º Ciclo). Для 2º Ciclo, 3º Ciclo и Secundário — свои сроки, проверяйте распоряжение для каждого года. Для перевода или переезда — в любое время, но желательно до конца июля.' }
          ]},
          { id: 'e4', title: '4. Документы', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / паспорт ребёнка',
              'Cartão de Cidadão / паспорт родителя',
              'NIF ребёнка и родителей',
              'Подтверждение адреса (Atestado de Residência от Junta de Freguesia)',
              'Табель из предыдущей школы (апостиль + перевод для иностранных документов)',
              'Карточка прививок (boletim de vacinas)',
              'Número de Utente (номер пациента SNS)',
              'Фото 3×4'
            ]}
          ]},
          { id: 'e5', title: '5. Ожидание результата', content: [
            { kind: 'timeline', text: 'Для 1-го класса — результаты в конце июля. Для перевода школа отвечает за 30 дней.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — португальский как неродной',
      content: [
        { kind: 'paragraph', text: 'Для детей, не говорящих по-португальски, есть программа PLNM. Дополнительные часы языка (2–5 в неделю), адаптация оценок в первые 2 года. Автоматически применяется при зачислении иностранного ребёнка в государственную школу.' }
      ]
    },
    {
      id: 'financial',
      title: 'Финансовая поддержка',
      content: [
        { kind: 'checklist', items: [
          'Бесплатные учебники для всех учеников государственных школ',
          'ASE (Acção Social Escolar) — для семей с низким доходом: бесплатные обеды, транспорт, экскурсии',
          'Abono de Família (пособие на ребёнка) — ежемесячное пособие на ребёнка (см. отдельный гайд)',
          'Вычет IRS за образование — 30% до € 800 на ребёнка'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Matrículas — официальный', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Direcção-Geral da Educação', url: 'https://www.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Inscrever criança em escola', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/matricular-ou-renovar-a-matricula-no-ensino-obrigatorio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}