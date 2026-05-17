export default {
  editorialVoice: 'hackportugal',
  id: 'university-admission',
  categoryId: 'education_children',
  title: 'Поступление в португальский университет — для иностранцев',
  tldr: 'Для поступления в португальский университет (бакалавриат, лиценциатура): через DGES / Concurso Nacional de Acesso ao Ensino Superior (CNAES регулирует правила доступа) — для португальских/EU выпускников; либо через **Concurso Especial para Estudantes Internacionais (CEEI)** по DL 36/2014 — для кандидатов со статусом Estudante Internacional (обычно non-EU, НЕ резиденты PT > 2 лет к 1 января года поступления, не члены семей EU и не лица с estatuto de igualdade). Нужно: equivalência/reconhecimento аттестата (через государственную школу/agrupamento по правилам DGE), португальский B1-B2 (CAPLE: DEPLE=B1, DIPLE=B2) или IELTS 6.0+ для англоязычных программ, мотивационное письмо. Стоимость: до ~€697/год для PT/EU в гос. licenciatura; для CEEI международные propinas устанавливает каждый вуз отдельно (обычно выше).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['университет', 'поступление', 'диплом', 'нострификация', 'dges', 'cnes'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'options',
      title: '🎓 Маршруты поступления',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Concurso Nacional (национальный)', content: [
            { kind: 'checklist', items: [
              '👥 Для: португальских/EU выпускников среднего образования (12 класс в Португалии)',
              '📊 Веса (nota do secundário + provas de ingresso) публикует DGES для каждой пары instituição/curso — формула зависит от вуза/курса; не считать 65/35 универсальным правилом',
              '⏰ Подача: июль-август',
              '🔢 Экзамены: математика, история, физика, химия — по требованию факультета',
              '✅ Результат: рекомендованный университет/курс через DGES',
              '⚠️ Не для иностранцев со школьным дипломом из страны вне EU'
            ]}
          ]},
          { id: 'o2', title: 'CEEI — Estudante Internacional (по DL 36/2014)', content: [
            { kind: 'checklist', items: [
              '👥 Для: кандидатов со статусом Estudante Internacional — обычно non-EU, **НО НЕ** EU/EEA, не члены семей EU, **не резиденты PT более 2 лет к 1 января года поступления** и не лица с применимым estatuto de igualdade. Проверяйте статус ДО выбора CEEI',
              '📊 Каждый университет принимает по своим критериям; vagas устанавливает каждый вуз/курс ежегодно — смотрите edital конкретного CEEI',
              '📑 Подача напрямую в вуз через его CEEI/International Student portal или Serviços Académicos/International Office; название платформы зависит от вуза',
              '⏰ Сроки: январь-июнь (зависит от вуза)',
              '💰 Цена: international propinas устанавливает каждый вуз — обычно выше национальных',
              '🌐 Подробнее: ulisboa.pt/internacional, up.pt/international, и edital каждого конкретного курса'
            ]}
          ]},
          { id: 'o3', title: 'CPLP / lusófonos', content: [
            { kind: 'checklist', items: [
              '🌐 Граждане CPLP (Бразилия, Кабо-Верде, Ангола и др.) могут подаваться на CEEI',
              '🆓 Некоторые вузы дают бразильцам/CPLP такую же цену, как португальцам — Universidade do Minho, Lusíada, IPS Setúbal',
              '📋 Признание ENEM (бразильский Единый госэкзамен) — действует в ULisboa, UPorto и других'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'document-equivalence',
      title: '📄 Эквивалентность диплома',
      content: [
        { kind: 'paragraph', text: 'Для поступления нужна эквивалентность вашего школьного аттестата португальскому «Ensino Secundário» (12 классов). Делается через DGE (Direção-Geral da Educação).' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Документы', content: [
            { kind: 'checklist', items: [
              '🎓 Школьный аттестат с апостилем (или легализован посольством Португалии)',
              '📊 Выписка оценок за последние 2-3 года (с апостилем)',
              '🌐 Сертифицированный перевод на португальский',
              '🆔 Паспорт + ВНЖ (если есть)',
              '📃 Заявление на эквивалентность'
            ]}
          ]},
          { id: 'e2', title: 'Процесс', content: [
            { kind: 'checklist', items: [
              '🏛️ Эквивалентность иностранного среднего образования оформляется через **escola pública / agrupamento de escolas** по правилам DGE (DL 227/2005, Portaria 224/2006); конкретная школа принимает заявление и документы',
              '⏱️ Обработка: 1-3 месяца (быстрее в малых городах)',
              '💰 Цена: зависит от школы/муниципалитета; обычно небольшая административная плата или бесплатно — уточняйте в школе',
              '📜 Получаете «Certificado de Equivalência» — школьный диплом признан в Португалии'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Язык обучения',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Португальский (большинство курсов)', content: [
            { kind: 'checklist', items: [
              '📜 Уровень: обычно B1-B2 минимум; для медицины и права — B2-C1',
              '🎓 **CAPLE**: CIPLE = A2, DEPLE = B1, **DIPLE = B2**, DAPLE = C1, DUPLE = C2 (caple.letras.ulisboa.pt). Если вуз требует B2 — нужен **DIPLE** или эквивалент',
              '💰 Стоимость зависит от уровня и центра CAPLE; проверяйте tabela de preços CAPLE',
              '📅 Сессии — по календарю CAPLE в аккредитованных центрах; даты и уровни зависят от центра, записываться нужно заранее',
              '🌐 Вуз может принять CAPLE DIPLE B2 или другой признанный сертификат португальского, если это указано в edital (DELE — это **испанский** сертификат Instituto Cervantes, не португальский)',
              '⚠️ Для кандидатов с образованием на португальском языке многие вузы освобождают от сертификата, но это зависит от edital; **CPLP citizenship by itself is not a universal exemption**'
            ]}
          ]},
          { id: 'l2', title: 'Английский (программы для иностранцев)', content: [
            { kind: 'checklist', items: [
              '📜 IELTS 6.0+ или TOEFL 80+',
              '🎓 Англоязычных licenciatura в PT **меньше**, чем магистратур (на master\'s level английский встречается чаще). Проверяйте language of instruction на сайте конкретного курса; медицина в гос. вузах обычно на португальском',
              '💰 Англоязычные программы обычно дороже (5 000-10 000 €/год)',
              '🌐 Список англоязычных программ: studyinportugal.pt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏆 Топ университеты',
      content: [
        { kind: 'checklist', items: [
          '🏛️ **Universidade de Lisboa (ULisboa)** — самый крупный, все факультеты, рейтинг #1 в Португалии',
          '🏛️ **Universidade do Porto (UPorto)** — сильная инженерия и медицина, #2',
          '🏛️ **Universidade de Coimbra (UCoimbra)** — старейший (1290), сильное право и гуманитарные науки',
          '🏛️ **NOVA Lisboa** — современный, программы на английском, MBA NOVA SBE престижен',
          '🏛️ **Universidade de Aveiro** — технологии, ИТ, инженерия',
          '🏛️ **Universidade do Minho** (Braga) — ИТ, биомед',
          '🎨 **Instituto Superior Técnico (IST)** — школа Universidade de Lisboa, флагман engineering/technology',
          '🏥 **Faculdade de Medicina de Lisboa** — топовый медфак',
          '💼 **Católica Lisbon SBE** — частный, сильный для бизнеса/MBA',
          '📚 Полный рейтинг: U-Multirank.eu или QS World University Rankings'
        ]}
      ]
    },
    {
      id: 'finance',
      title: '💰 Финансы',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Стоимость', content: [
            { kind: 'checklist', items: [
              '🟢 PT/EU в гос. licenciatura: до примерно **€697/год максимум** (DGES propina cap для national/EU students в гос. licenciatura/mestrado integrado abrangido)',
              '🟡 Иностранцы (CEEI): international propinas устанавливает каждый вуз — обычно выше; смотрите edital конкретного курса',
              '🔴 Частные вузы: 5 000-15 000 €/год',
              '💵 Жильё: комната ~€350-650+ в Lisbon/Porto (private market), меньше — в residences и в малых городах; studio в Lisbon часто €750-1 100+',
              '🍔 Еда: 200-300 €/мес',
              '📚 Учебники: 100-300 €/семестр'
            ]}
          ]},
          { id: 'f2', title: 'Стипендии и поддержка', content: [
            { kind: 'checklist', items: [
              '💰 **Bolsa de Acção Social (DGES)** — для португальских/EU студентов с низким доходом, 100-500 €/мес',
              '💰 **Erasmus+** — для семестра по обмену',
              '🇵🇹 **Bolsa Camões** — для иностранцев, изучающих португальскую культуру/язык',
              '🌍 **Fulbright** (для США), **DAAD** (для Германии) — совместные с Португалией',
              '💼 **Программы внутри вузов**: ULisboa → Bolsa de Excelência, NOVA → Merit Scholarships',
              '📋 Подача на стипендии обычно за 6 мес до начала семестра'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'visa',
      title: '🛂 Виза D4 (учебная)',
      content: [
        { kind: 'checklist', items: [
          '📜 После письма о зачислении из вуза — заявка на D4 в консульстве Португалии в стране вашего проживания',
          '📋 Документы: паспорт, письмо о зачислении, доказательство финансов (ориентир 12×IAS = **€6 445.56** в 2026; IAS 2026 = €537.13 — конкретный консульский пост может требовать дополнительные доказательства/больший буфер), страхование, подтверждение проживания',
          '⏱️ Обработка: 30-60 дней',
          '🎫 Действует: 4 мес для въезда, потом ВНЖ в AIMA (плюс отдельный AIMA fee — сверяйте actual fee table в силе с 01.03.2026)',
          '💼 При наличии autorização de residência para estudo студент высшего образования может работать по трудовому договору или как independent worker, уведомив AIMA и соблюдая правила Segurança Social/налогов (нет универсального лимита 20 ч/нед)',
          '🎓 После завершения higher education можно запросить продление/AR для поиска работы или создания бизнеса сроком до 1 года, при соблюдении условий (Lei 23/2007 art. 122) — это **не** консульская job-seeker visa'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Советы',
      content: [
        { kind: 'checklist', items: [
          '⏰ Начинать процесс за 1 год — нострификация диплома + язык + подача',
          '🇵🇹 Учить португальский ДО поступления — большинство курсов на португальском, даже «международные треки» имеют португальскую составляющую',
          '🤝 International Office / Serviços Académicos каждого вуза — лучший контакт; пишите им вопросы',
          '🏠 Жильё в студенческих общежитиях (residências) дешевле, но конкурс — подавать заранее',
          '📚 Erasmus+ во время учёбы открывает много возможностей',
          '🌍 После лиценциатуры — магистратура 1-2 года, докторантура 3-4 года',
          '💼 Reconhecimento иностранного higher-education degree: через **DGES reconhecimento platform** (DL 66/2018) — automatic/level/specific recognition. Сompetent Portuguese HEI и стоимость зависят от типа и уровня degree (обычно несколько сотен евро, сроки варьируются)',
          '⚠️ Для медицинских специалистов: признание ОЧЕНЬ сложное, обычно требует досдачи 1-2 года + резидентура'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Equivalência аттестата (через школу/agrupamento)', note: 'обычно небольшая административная плата или бесплатно — уточняйте в конкретной школе' },
    { label: 'Экзамен CAPLE', note: 'зависит от уровня и центра — смотрите tabela de preços CAPLE' },
    { label: 'PT/EU гос. licenciatura — propina (максимум по DGES)', amountEURMax: 697, note: '€/год для national/EU students' },
    { label: 'Иностранец (CEEI) — propina', note: 'устанавливает каждый вуз/курс — смотрите edital' },
    { label: 'Частный вуз', amountEURMin: 5000, amountEURMax: 15000, note: '€/год' },
    { label: 'Виза D4 (консульский сбор)', amountEUR: 90 },
    { label: 'AIMA residence permit/card после прибытия', note: 'проверяйте actual fee table в силе с 01.03.2026' },
    { label: 'Жизнь студента в Лиссабоне', amountEURMin: 700, amountEURMax: 1300, note: '€/мес (комната + еда + транспорт + книги)' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — Reconhecimento de graus e diplomas estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DGE — Equivalências de habilitações estrangeiras', url: 'https://www.dge.mec.pt/equivalencias-de-habilitacoes-estrangeiras', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CAPLE — португальский язык как иностранный', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}