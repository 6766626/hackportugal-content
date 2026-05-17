export default {
  editorialVoice: 'hackportugal',
  id: 'school-enrollment',
  categoryId: 'education_children',
  title: 'Зачисление ребёнка в португальскую школу',
  tldr: 'Обучение в Португалии обязательно с 6 до 18 лет (или до завершения secundário). Государственные школы бесплатные, зачисление — по району проживания через Portal das Matrículas. Возможны частные школы (€ 3 000–15 000/год) и международные (€ 10 000–25 000/год). Основные окна matrícula зависят от уровня обучения и ежегодного despacho; для pré-escolar/1.º ano 2026/2027 — 22 апреля – 1 июня 2026 (Despacho 4472-A/2026). Для переезда/перевода школа может принять заявление в течение года при наличии места.',
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
          { id: 't4', title: 'Домашнее обучение (ensino doméstico/individual)', content: [
            { kind: 'paragraph', text: 'Разрешено, но ребёнок должен быть зачислен в школу, оформляется запрос с responsável educativo и индивидуальным планом; оценивание — по правилам школы/законодательства. Перед выбором проверьте требования Portaria n.º 69/2019 и актуальные инструкции DGEstE/DGE.' }
          ]}
        ]}
      ]
    },
    {
      id: 'levels',
      title: 'Структура образования',
      content: [
        { kind: 'checklist', items: [
          'Ясли, Creche (0–3 года) — не обязательно; стоимость зависит от учреждения и условий семьи, но для многих детей действует бесплатная программа Creche Feliz',
          'Дошкольное образование, Pré-escolar / Jardim de Infância (3–6 лет) — факультативно; государство обеспечивает сеть мест, но обязательное обучение начинается с 6 лет',
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
            { kind: 'paragraph', text: 'Войти можно через autenticação.gov.pt: Chave Móvel Digital, Cartão de Cidadão или credenciais do Portal das Finanças (NIF+пароль AT). Если у родителей нет доступа к цифровым средствам — matrícula можно оформить при поддержке школы/agrupamento.' }
          ]},
          { id: 'e3', title: '3. Подать заявление на зачисление', content: [
            { kind: 'paragraph', text: 'Окно основной сессии для 2026–2027 учебного года: 22 апреля – 1 июня 2026 (Portal das Matrículas, дошкольное образование + 1-й класс 1º Ciclo), согласно Despacho n.º 4472-A/2026. Для 2º Ciclo, 3º Ciclo и Secundário — свои сроки, проверяйте распоряжение для каждого года. Для перевода или переезда — в любое время, но желательно до конца июля.' }
          ]},
          { id: 'e4', title: '4. Документы', content: [
            { kind: 'paragraph', text: 'Обычно просят: ID ребёнка и родителя, NIF, подтверждение адреса, табель/sworn translation, карточку прививок, фото. Если у ребёнка нет NIF, número de utente, atestado da junta или иностранного полного пакета — школа НЕ должна блокировать доступ к обязательному образованию: возможно временное зачисление и параллельная процедура equivalência/posicionamento.' },
            { kind: 'checklist', items: [
              'Обычно просят: Cartão de Cidadão / паспорт ребёнка и родителя',
              'NIF ребёнка и родителей (если есть)',
              'Подтверждение адреса (atestado de residência ИЛИ другие документы)',
              'Табель из предыдущей школы (апостиль + sworn translation для иностранных документов)',
              'Карточка прививок (boletim de vacinas)',
              'Если есть: Número de Utente, фото 3×4'
            ]}
          ]},
          { id: 'e5', title: '5. Ожидание результата', content: [
            { kind: 'timeline', text: 'Даты публикации списков colocação и turmas ежегодно указываются в despacho/на Portal das Matrículas; для переводов сроки зависят от школы и наличия места.' }
          ]}
        ]}
      ]
    },
    {
      id: 'plnm',
      title: 'PLNM — португальский как неродной',
      content: [
        { kind: 'paragraph', text: 'PLNM назначается после оценки уровня владения португальским, обычно для учеников с недостаточным уровнем языка. Это **не автоматическое** право/обязанность для каждого иностранца — школа определяет уровень и меры поддержки по правилам DGE (Portaria 223-A/2018 и 226-A/2018). Ребёнок-иностранец с хорошим португальским может не попасть в PLNM, а ребёнок с португальским гражданством, для которого португальский не родной, может попасть.' }
      ]
    },
    {
      id: 'financial',
      title: 'Финансовая поддержка',
      content: [
        { kind: 'checklist', items: [
          'Бесплатные **manuais escolares** через MEGA/vouchers для учеников госшкол и некоторых школ с contrato de associação; рабочие тетради и материалы часто оплачиваются отдельно',
          'ASE (**Ação Social Escolar**) — поддержка по escalão do abono de família: питание, транспорт, материалы и visitas de estudo могут быть бесплатными или субсидированными',
          'Abono de Família (пособие на ребёнка) — см. отдельный гайд',
          'Вычет IRS за образование — 30% eligible expenses, обычно до € 800 на **agregado familiar** (не на ребёнка); лимит может увеличиваться в отдельных случаях (например при rent for displaced student)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Matrículas — официальный', url: 'https://portaldasmatriculas.edu.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGE — Direcção-Geral da Educação', url: 'https://www.dge.mec.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Inscrever criança em escola', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/matricular-ou-renovar-a-matricula-no-ensino-obrigatorio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}