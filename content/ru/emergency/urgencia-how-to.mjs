export default {
  editorialVoice: 'hackportugal',
  id: 'urgencia-how-to',
  categoryId: 'emergency_rights',
  title: 'Как не сидеть в urgência весь день',
  tldr: 'Urgência в Португалии работает по Manchester Triage System — цвет зависит от срочности состояния. Красный — немедленно, оранжевый — ≤ 10 мин, жёлтый — ≤ 60 мин, зелёный — ≤ 120 мин, синий — ≤ 240 мин. Чтобы сократить ожидание: (1) сначала SNS 24 (808 24 24 24) — медсестринский триаж по клиническим алгоритмам (не врач по телефону), направит на нужный уровень; (2) Atendimento Complementar в Centro de Saúde (ночью/в выходные); (3) частные urgências (CUF, Lusíadas, Luz) — € 20–80; (4) приложение «Tempos de Espera SNS» для проверки очереди.\n\n⚠️ Номера 808 тарифицируются по тарифу абонента: мобильные и иностранные SIM-карты могут быть платными.',
  tags: ['urgência', 'скорая', 'sns', 'manchester'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'before',
      title: '📞 Перед тем как ехать — позвоните в SNS 24',
      content: [
        { kind: 'paragraph', text: 'SNS 24 (808 24 24 24) — государственная медицинская линия, работает 24/7. Медсестринский триаж по клиническим алгоритмам (это не разговор с врачом)\.\n\nСама услуга бесплатна, но номер 808 тарифицируется по тарифу абонента: мобильные и иностранные SIM-карты могут оплачиваться поминутно:' },
        { kind: 'checklist', items: [
          '🟢 Не срочно → записаться к семейному врачу в Centro de Saúde',
          '🟡 Нужна помощь, но не прямо сейчас → частная клиника / несрочный приём',
          '🟠 Срочно, но не экстренно → специализированная urgência (педиатрическая, детская, гинекологическая)',
          '🔴 Экстренно → вызвать INEM (112) или ехать в urgência',
          'Языки: PT + EN (сказать «English please»)',
          'Приложение SNS 24: чат с врачом, видеозвонок — без ожидания телефонного оператора',
          '💡 У SNS 24 часто меньше загрузка, чем у urgência: 15 мин на диагностику'
        ]}
      ]
    },
    {
      id: 'manchester',
      title: '🎨 Manchester Triage System — как вас оценят',
      content: [
        { kind: 'paragraph', text: 'При поступлении в urgência вас первым делом сортирует медсестра или медбрат на триаже: опрос 3–5 мин → присваивают цвет.' },
        { kind: 'checklist', items: [
          '🔴 Vermelho (красный) — EMERGÊNCIA: приём немедленно. Остановка сердца, инсульт, тяжёлая травма, потеря сознания',
          '🟠 Laranja (оранжевый) — MUITO URGENTE: в ≤ 10 мин. Сильная боль в груди, затруднённое дыхание, крупное кровотечение',
          '🟡 Amarelo (жёлтый) — URGENTE: в ≤ 60 мин. Умеренная боль, лихорадка с ухудшением, сломанная конечность',
          '🟢 Verde (зелёный) — POUCO URGENTE: в ≤ 120 мин. Рана без кровотечения, умеренные боли, тошнота',
          '🔵 Azul (синий) — NÃO URGENTE: в ≤ 240 мин (4 часа!). Симптомы ≤ 7 дней, лёгкая простуда, слабая боль',
          '⚪ Branco — не требует неотложной помощи (нужно идти к семейному врачу) — отправляют домой'
        ]},
        { kind: 'warning', text: '80% пациентов в Португалии приходят с жёлтым/зелёным/синим цветом — и ждут по 2–4 часа. Если вам присвоили синий — реалистичнее записаться в Centro de Saúde или пойти в частную клинику.' }
      ]
    },
    {
      id: 'shortcuts',
      title: '⚡ Как сократить ожидание',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Centro de Saúde — Atendimento Complementar', content: [
            { kind: 'checklist', items: [
              'В центрах здоровья есть отдельный «Atendimento Complementar» — для ситуаций, не требующих госпитализации',
              'Работают как минимум до 20:00 в некоторых центрах, некоторые — 24/7 (Cascais, Almada)',
              'Запись через SNS 24 (звонок / приложение) — приходите к назначенному времени',
              'Ожидание: обычно 10–30 мин',
              'Бесплатно — пользовательские сборы в первичной помощи SNS отменены (реформа Decreto-Lei 37/2022)'
            ]}
          ]},
          { id: 's2', title: '2. Hospital Urgência — менее загруженная', content: [
            { kind: 'checklist', items: [
              'В Лиссабоне: Hospital Beatriz Ângelo (Loures) — обычно быстрее, чем Santa Maria',
              'Hospital de Cascais (если живёте в Cascais/Estoril) — часто спокойнее',
              'Porto: Hospital de São João — 4–6 часов; Hospital de Pedro Hispano (Matosinhos) — иногда 2–3 часа',
              '📱 Приложение «Tempos de Espera SNS» — реальное время ожидания по всем больницам!',
              '💡 Проверьте перед выездом — езжайте в менее загруженное место'
            ]}
          ]},
          { id: 's3', title: '3. Утро с понедельника по четверг', content: [
            { kind: 'checklist', items: [
              'Самые загруженные часы: вечер (18:00–23:00) и выходные',
              'Самые свободные: понедельник–четверг 9:00–12:00',
              'Избегайте: воскресенье вечером (всё, что не открылось в выходные, приходит туда)',
              'Избегайте: июнь–сентябрь (туристы + отпускной период в центрах здоровья)'
            ]}
          ]},
          { id: 's4', title: '4. Частная urgência', content: [
            { kind: 'checklist', items: [
              'Стоимость: € 20–80 за визит без страховки, € 0–15 доплаты с частной страховкой',
              'Сеть: CUF, Lusíadas, Luz, Trofa, Hospital da Misericórdia',
              'Ожидание: обычно 15–45 мин',
              'Работают 24/7 в крупных центрах, с 8:00 до 24:00 — в меньших',
              'Консультация, анализы, рентген, УЗИ — на месте',
              'Рецепты можно сразу отнести в аптеку (например, Lusíadas Farmácia рядом)'
            ]}
          ]},
          { id: 's5', title: '5. Специализированные urgência', content: [
            { kind: 'checklist', items: [
              'Pediátrica (дети до 15–18 лет): отдельные отделения. В Лиссабоне — Hospital Dona Estefânia. В Porto — Centro Materno-Infantil do Norte (CHUSJ/ULS Santo António, после интеграции бывшего Maria Pia)',
              'Gnecológica / Obstétrica: Maternidade Alfredo da Costa (Lisboa), Maternidade Júlio Dinis (Porto)',
              'Psiquiátrica: Hospital Magalhães Lemos (Porto), Hospital Júlio de Matos (Lisboa)',
              'Estomatológica (зубы): Hospital São José и частные клиники (IMD, Dental Family)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-bring',
      title: '📋 Что взять с собой',
      content: [
        { kind: 'checklist', items: [
          '🆔 CC / ВНЖ / паспорт',
          '📇 Número de Utente (SNS) — без него всё равно примут, но процесс будет дольше',
          '💊 Список текущих лекарств — написанный или фото на телефоне',
          '📄 Медицинская история: хронические заболевания, аллергии, операции',
          '💳 Банковская карта: на случай если выпишут платные лекарства (часть покрывается SNS, остальное платно)',
          '📚 Книга / зарядка / еда — ожидание может быть 2–4 часа',
          '🗣️ PT-словарь / переводчик: 90% врачей понимают EN, но ухаживающий персонал — часто нет'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Общие советы',
      content: [
        { kind: 'checklist', items: [
          '🔁 Семейный врач (médico de família) — главный ключ. Регистрация в центре здоровья по месту жительства, бесплатно. У каждого резидента с Número de Utente есть право на одного',
          '📝 Рецепт: médico de família выписывает на 3–6 мес для хронических заболеваний — не надо каждый раз ходить в urgência',
          '📞 Сначала SNS 24, всегда — они сами решат, нужна ли urgência',
          '💻 MySNS portal (mysns.min-saude.pt): смотреть свои рецепты, записи, результаты анализов',
          '🚑 INEM (112): только для реально угрожающих жизни состояний. За ложные вызовы штрафуют',
          '🌙 Ночные часы в urgência: если можете подождать до утра — подождите. 2–4 утра — самое сложное время'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS 24 — 808 24 24 24', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Tempos de Espera SNS (приложение и сайт)', url: 'https://tempos.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGS — Manchester Triage System', url: 'https://www.dgs.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}