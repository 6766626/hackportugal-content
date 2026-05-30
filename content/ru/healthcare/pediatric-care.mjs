export default {
  editorialVoice: 'hackportugal',
  id: 'pediatric-care',
  categoryId: 'healthcare',
  title: 'Педиатр в Португалии — SNS, частные врачи, чего ожидать',
  tldr: 'После регистрации ребёнку присваивают Número de Utente; médico de família назначают, если в USF/UCSP есть свободные списки — иначе ребёнок остаётся sem médico de família, но сохраняет доступ к вакцинации, программе Saúde Infantil через unidade/consulta aberta/enfermagem и urgent care. Плановые консультации Saúde Infantil e Juvenil по графику DGS (1.ª semana; 1, 2, 4, 6, 9, 12, 15, 18 мес; 2, 3, 4, 5 лет; 6–7, 8, 10, 12–13 и 15–18 лет) — бесплатно. Pediatria в SNS — через направление в hospital/specialty care; в частном секторе педиатры часто ведут и обычные профилактические консультации (60–120 €/визит без страховки)\.\n\nДетская urgência: Hospital Dona Estefânia (Lisboa), Hospital Pediátrico (Coimbra), Hospital de São João (Porto). При угрозе жизни — 112; иначе сначала SNS 24 (808 24 24 24).',
  tags: ['педиатр', 'дети', 'sns', 'médico de família'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'sns-system',
      title: '🏥 Как работает SNS для детей',
      content: [
        { kind: 'paragraph', text: 'Важное отличие от РФ/BR: в SNS первичное наблюдение обычно ведут médico de família (medicina geral e familiar) и enfermeiro de família. Pediatria в SNS обычно доступна через направление в hospital/specialty care. В частном секторе педиатры часто ведут и обычные профилактические консультации.' },
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Регистрация ребёнка в SNS', content: [
            { kind: 'checklist', items: [
              '1. После рождения / приезда — в Centro de Saúde по месту жительства',
              '2. Документы: ID/passport или Cartão de Cidadão ребёнка, свидетельство о рождении, NIF (при наличии), proof of address/residence status. NISS обычно НЕ требуется для número de utente — это разные номера',
              '3. Присвоят Número de Utente (пожизненный)',
              '4. Если в USF/UCSP есть свободные списки — назначат médico de família. Если нет — ребёнок остаётся sem médico de família, но сохраняет доступ к вакцинации, программе Saúde Infantil через unidade/consulta aberta/enfermagem',
              '5. Автоматически включат в программу Saúde Infantil e Juvenil — плановые визиты по графику DGS',
              '⚠️ Значительная часть utentes в Португалии остаются sem médico de família; актуальные цифры — в SNS Transparência / ACSS reports'
            ]}
          ]},
          { id: 'f2', title: 'Saúde Infantil e Juvenil — плановые визиты', content: [
            { kind: 'checklist', items: [
              'Бесплатно для utente, по DGS Programa Nacional de Saúde Infantil e Juvenil:',
              '🍼 Первый год: 1.ª semana de vida; 1, 2, 4, 6, 9, 12 мес — вес/рост, развитие, вакцины, питание',
              '🧒 1–5 лет: 15, 18 мес; 2, 3, 4, 5 лет — речь, моторика, вакцины',
              '📚 Школа: 6–7, 8, 10 лет — рост, зрение, слух, вакцины',
              '🧑 Подросток: 12–13 и 15–18 лет — половое развитие, психоэмоциональное состояние, самостоятельность',
              '📱 Напоминания приходят в приложение SNS 24',
              '📋 Электронная карта вакцин и консультаций — в приложении (локальное расписание может отличаться)'
            ]}
          ]},
          { id: 'f3', title: 'Специалист pediatra', content: [
            { kind: 'checklist', items: [
              'Направление от médico de família через систему referenciação/SIGA SNS на consulta hospitalar; для детей без taxas moderadoras. Ожидание зависит от приоритета и hospital — может занять недели или много месяцев',
              'Для срочного случая: частный pediatra за 60–120 € / визит',
              'Распространённые направления: детская эндокринология, детская неврология, детская дерматология',
              'Частный pediatra со страховкой (Médis/Multicare): доплата 10–25 €'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private-clinics',
      title: '💼 Частные педиатры и клиники',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Когда идти в частную клинику', content: [
            { kind: 'checklist', items: [
              'Нет médico de família в SNS (лист ожидания)',
              'Языковой барьер — врачи SNS не всегда говорят по-английски',
              'Быстрая запись (24-48 ч в частной клинике)',
              'Дополнительные услуги: оценка питания, психолог, логопед',
              'Кажется, что семейный врач не специалист по конкретной проблеме'
            ]}
          ]},
          { id: 'c2', title: 'Сети клиник', content: [
            { kind: 'checklist', items: [
              'CUF Pediatrics (Lisboa, Porto, Algarve) — комплексные услуги',
              'Lusíadas Pediatrics — Amadora, Porto',
              'Hospital da Luz Pediatrics — Lisboa, Setúbal',
              'Grupo Trofa Saúde — район Porto',
              'Joaquim Chaves — клиники формата retail',
              'Сеть AdvanceCare — через страховку'
            ]}
          ]},
          { id: 'c3', title: 'Цены без страховки', content: [
            { kind: 'checklist', items: [
              'Консультация общего педиатра: 60–100 €',
              'Subspecialty consultation (неврология, кардиология, эндокринология педиатрические): 80–150 €',
              'Частная urgência pediátrica: 50–80 €',
              'Анализы и обследования (анализ крови, УЗИ): 30–150 € за исследование',
              'Пакет «наблюдение в первый год»: 300–600 € (ежемесячные приёмы + контроль этапов развития)'
            ]}
          ]},
          { id: 'c4', title: 'С частной страховкой', content: [
            { kind: 'checklist', items: [
              'Médis: семейный план ~100–180 €/мес, доплата 10–20 €',
              'Multicare (Fidelidade): ~80–150 €/мес, такая же доплата',
              'AdvanceCare (Generali): более индивидуальные планы',
              'Tranquilidade: прогрессивный вариант',
              'Для ребёнка отдельно: ~20–40 €/мес',
              'Для simples consultas de pediatria carência часто отсутствует или короткая, но это зависит от apólice; проверяйте carências for exams, hospitalization, pre-existing conditions and newborn inclusion'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: '🚨 Детская urgência',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Больницы с педиатрической urgência', content: [
            { kind: 'checklist', items: [
              '🏥 Lisboa: Hospital Dona Estefânia — основной педиатрический',
              '🏥 Porto: Hospital de São João, Centro Materno-Infantil do Norte',
              '🏥 Coimbra: Hospital Pediátrico',
              '🏥 Faro: педиатрическое отделение Hospital de Faro',
              '🏥 Cascais: Hospital de Cascais (педиатрическое отделение)',
              'Частные: CUF Tejo Pediatric, Luz Pediatric — меньше очередей',
              '⚠️ Перед поездкой проверяйте serviços de urgência disponíveis на страницах SNS/ULS или звоните SNS 24: pediatric emergency units могут иметь временные ограничения. Для частных hospitals подтверждайте часы работы детской urgência and accepted ages перед визитом'
            ]}
          ]},
          { id: 'u2', title: 'Когда идти в urgência', content: [
            { kind: 'checklist', items: [
              '🚨 При угрозе жизни — 112 (единый европейский номер экстренной помощи)',
              '🔴 ДА: высокая температура у ребёнка <3 мес (любая >38°C), судороги, сильная одышка, обморок, тяжёлая травма, аллергическая реакция',
              '🟡 Обычно не надо: простуда без осложнений, температура до 39°C у детей постарше, лёгкая травма',
              '📞 В неэкстренных/сомнительных случаях сначала звоните SNS 24: 808 24 24 24 — оператор/медсестра проведёт телефонную triagem и скажет, куда идти. Manchester Triage применяется уже после прибытия в hospital emergency',
              '💡 Во многих Centro de Saúde есть Atendimento Complementar — менее загруженная альтернатива'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'vaccinations-children',
      title: '💉 Вакцины PNV для детей',
      content: [
        { kind: 'paragraph', text: 'См. отдельный гайд «Прививки в Португалии» — полная схема PNV + особенности.' }
      ]
    }
  ],
  sources: [
    { title: 'DGS — Programa Nacional de Saúde Infantil e Juvenil', url: 'https://www.dgs.pt/documentos-e-publicacoes/programa-tipo-de-atuacao-em-saude-infantil-e-juvenil.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS 24 — Saúde Infantil', url: 'https://www.sns24.gov.pt/tema/crescer-saudavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — Serviços de Urgência', url: 'https://www.sns.gov.pt/sns/servicos-de-urgencia/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Hospital Dona Estefânia (педиатрический)', url: 'https://www.chlc.min-saude.pt/urgencias-2/urgencia-pediatrica-hospital-de-dona-estefania/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}