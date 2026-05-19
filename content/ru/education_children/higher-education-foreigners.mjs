export default {
  editorialVoice: 'hackportugal',
  id: 'higher-education-foreigners',
  categoryId: 'education_children',
  title: 'Высшее образование в Португалии — для иностранных студентов',
  tldr: 'Бакалавриат (licenciatura) — 3 года, магистратура (mestrado) — 2 года, PhD (doutoramento) — 3–4 года. Поступление — через Concurso Nacional de Acesso (для резидентов Португалии) или Concurso Especial para Estudantes Internacionais (только для граждан вне ЕС).\n\nСтоимость: резиденты ЕС платят как португальцы — 700–1400 €/год в государственных вузах, не-ЕС — 2000–7000 €/год в государственных вузах, 3500–15000 €/год в частных. Топовые вузы: Universidade de Lisboa, Universidade do Porto, Universidade Nova de Lisboa, Universidade de Coimbra (5 в мире в top 500)\.\n\nErasmus+ — полный доступ. D4 Student Visa для граждан не-ЕС.',
  tags: ['высшее', 'licenciatura', 'университет', 'erasmus'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'levels',
      title: '🎓 Уровни и длительность',
      content: [
        { kind: 'checklist', items: [
          'Licenciatura (бакалавриат): 3 года, 180 ECTS — основной первый цикл',
          'Mestrado (магистратура): 1,5–2 года, 90–120 ECTS — второй цикл',
          'Mestrado Integrado: для некоторых регулируемых профессий. Medicina — обычно 6 лет / 360 ECTS; Arquitetura — часто 5 лет / 300 ECTS; в Engenharia многие antigos mestrados integrados были reorganized в licenciatura + mestrado (сверяйте каждый курс в DGES)',
          'Doutoramento (PhD): 3–4 года — третий цикл',
          'CTeSP (Curso Técnico Superior Profissional): 2 года, 120 ECTS — профессиональное образование, без академической степени',
          'Pós-graduação: короткие специализированные курсы (6–12 мес.)'
        ]}
      ]
    },
    {
      id: 'admission',
      title: '📝 Способы поступления',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Граждане PT/ЕС/ЕЭЗ/Швейцарии и некоторые non-EU резиденты (CNA)', content: [
            { kind: 'checklist', items: [
              'Concurso Nacional de Acesso (CNA): общий конкурс — применяется, если вы НЕ считаетесь Estudante Internacional',
              'CNA also applies to non-EU residents с легальным проживанием в Португалии >2 непрерывных лет к 1 января года поступления (не считая времени только по student permit) или с estatuto de igualdade',
              'Вступительные экзамены (Exames Nacionais) в 12-м классе — обязательны для конкурса',
              'Распределение по баллам: nota do secundário + provas de ingresso (веса по курсам у DGES)',
              'PT/EU в гос. licenciatura: propina до ~€697/год максимум',
              'Если у вас иностранный школьный диплом — нужно equivalência + сдать local exam'
            ]}
          ]},
          { id: 'a2', title: 'Граждане не-ЕС', content: [
            { kind: 'checklist', items: [
              'Concurso Especial para Estudantes Internacionais (CEIE)',
              'Отдельный от CNA процесс — каждый университет решает сам',
              'Требования: диплом средней школы, подходящий для высшего образования в стране происхождения + certificado de equivalência (1–3 мес. на получение через DGES)',
              'Часто — собственные вступительные экзамены университета / портфолио / собеседование',
              'Сроки подачи: обычно февраль–апрель (для старта в сентябре)',
              'Оплата как для не-ЕС: 2000–7000 €/год в государственных вузах, 3500–15000 € в частных',
              '⚠️ Некоторые факультеты медицины и ветеринарии имеют квоту только для граждан Португалии/ЕС — граждане не-ЕС не могут поступить'
            ]}
          ]},
          { id: 'a3', title: 'Maiores de 23 (для взрослых)', content: [
            { kind: 'paragraph', text: 'Отдельный конкурс для людей старше 23 лет без стандартного диплома. Свои тесты в университете. Работает для иностранцев с довузовским опытом.' }
          ]},
          { id: 'a4', title: 'Перевод из другого университета', content: [
            { kind: 'checklist', items: [
              'Если уже учились в иностранном вузе — перевод возможен',
              'ECTS-кредиты переводятся (если вуз аккредитован)',
              'Процесс: regresso ao ensino superior',
              'Лучше переводиться на 2-й или 3-й год в португальский вуз'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-universities',
      title: '🏛️ Топовые университеты',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Лиссабон', content: [
            { kind: 'checklist', items: [
              'Universidade de Lisboa (ULisboa) — крупнейший, топ-300 QS. Медицина, право, инженерия, искусство',
              'Universidade Nova de Lisboa — современный, топ-300 QS. Экономика (NovaSBE — один из лучших в Европе), инженерия, здравоохранение',
              'Universidade Católica Portuguesa (UCP) — частный, престижный (католический) — право, менеджмент',
              'Iscte (Instituto Universitário de Lisboa) — социальные науки, бизнес',
              'ISCSP — политология, международные отношения'
            ]}
          ]},
          { id: 'u2', title: 'Порту', content: [
            { kind: 'checklist', items: [
              'Universidade do Porto (UP) — 2-й крупнейший, топ-300 QS. Инженерия, медицина, архитектура',
              'Universidade Católica Portuguesa (Porto) — частный, бизнес, здравоохранение',
              'Escola Superior Artística do Porto — искусство'
            ]}
          ]},
          { id: 'u3', title: 'Регионы', content: [
            { kind: 'checklist', items: [
              'Universidade de Coimbra — один из старейших в Европе (с 1290 г.). UNESCO. Медицина, философия, инженерия',
              'Universidade de Aveiro — материаловедение, инженерия',
              'Universidade do Minho (Braga/Guimarães) — информатика',
              'Universidade do Algarve — морские науки, туризм',
              'Universidade da Madeira, Açores — региональные'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Стоимость',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Государственные университеты', content: [
            { kind: 'checklist', items: [
              'ЕС/резиденты, считающиеся national/EU: licenciatura — до ~€697/год максимум (DGES propina cap); магистратура и PhD — отдельные тарифы',
              'Не-ЕС (CEEI, Estudante Internacional): international propinas устанавливает каждый университет/курс — смотрите edital конкретного курса',
              'Некоторые факультеты медицины / инженерии — в верхней части этого диапазона'
            ]}
          ]},
          { id: 'c2', title: 'Частные университеты', content: [
            { kind: 'checklist', items: [
              '3500–15000 €/год — зависит от программы',
              'NovaSBE MBA: 30000–50000 €/год',
              'UCP Law: 5000–8000 €/год',
              'ISG Business School: 4000–7000 €',
              'Признание: в ЕС работает; для работодателей в США — признаются в основном топовые бренды'
            ]}
          ]},
          { id: 'c3', title: 'Дополнительные расходы', content: [
            { kind: 'checklist', items: [
              '📚 Учебники: 100–300 €/семестр (можно купить б/у в группах Facebook)',
              '🏠 Общежитие (residência universitária): 150–300 €/мес.',
              '🍽️ Столовая университета: 2,65 €/приём пищи (cantina social)',
              '🚇 Студенческий проездной: 30 €/мес. (Lisbon/Porto)',
              'Медстраховка (для студентов не-ЕС): ~25 €/мес.',
              '💳 Карта Acedo (студенческая): скидки на транспорт, еду, билеты'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bolsa',
      title: '💼 Стипендии и финансирование',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'DGES — национальные bolsas', content: [
            { kind: 'checklist', items: [
              'Для резидентов Португалии: размер зависит от дохода и тарифа DGES — проверяйте актуальные значения на dges.gov.pt и в Serviços de Ação Social вашего вуза',
              'Подача: ежегодно по календарю DGES после поступления',
              'Через Serviços de Ação Social каждого университета',
              'Условие нуждаемости рассчитывается через rendimento per capita агрегата — проверяйте формулу на dges.gov.pt'
            ]}
          ]},
          { id: 'b2', title: 'Международные стипендии', content: [
            { kind: 'checklist', items: [
              'Erasmus+: для резидентов / краткосрочный обмен, 800–1000 €/мес.',
              'Camões Institute bolsas: для граждан PALOP, Timor-Leste, Brasil',
              'FCT (Fundação para a Ciência e Tecnologia): PhD-стипендия — сумма периодически обновляется; смотрите актуальный tabela de bolsas FCT (subsídio + propinas согласно регламенту)',
              'EU Marie Skłodowska-Curie: для PhD/post-doc — €3000+/мес.',
              'University-specific: все топовые вузы имеют стипендиальные программы по заслугам (50–100% скидки на tuition)',
              'Конкуренция: медицина — самая сложная; науки и инженерия — шансы лучше'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'language',
      title: '🗣️ Язык обучения',
      content: [
        { kind: 'checklist', items: [
          'Бакалавриат: большинство программ на португальском; некоторые программы бакалавриата на английском (Nova, IST, ISEG)',
          'Mestrado: 30–50% на английском в топовых вузах',
          'PhD: часто на английском, язык диссертации на выбор',
          'Требование по португальскому: A2–B1 для бакалавриата (если обучение на португальском), CIPLE или школьный сертификат',
          'Требование по английскому: IELTS 6.0+ / TOEFL 80+ для англоязычных программ',
          'Курсы португальского для иностранцев бесплатны в большинстве вузов'
        ]}
      ]
    },
    {
      id: 'd4-visa',
      title: '🛂 D4 Student Visa',
      content: [
        { kind: 'checklist', items: [
          'Для студентов не-ЕС, обучающихся очно по программе в португальском вузе',
          'Документы: acceptance letter, proof of funds (ориентир минимум 12×SMN в год для основного заявителя — в 2026 это €11 040; консульство/VFS может принимать стипендию, банковский баланс, спонсорство и/или prepaid accommodation), медстраховка, жильё',
          'Подача в консульстве страны проживания',
          'Срок: 1–3 мес.',
          'Виза → въезд → в AIMA для residence permit D4 (плюс отдельный AIMA fee — таблица в силе с 01.03.2026)',
          'После окончания: можно запросить autorização de residência para procura de trabalho ou criação de empresa — обычно до 12 месяцев (Lei 23/2007 art. 122). Это не та же процедура, что внешнее visto para procura de trabalho на 120+60 дней',
          'Или переход на D3 / D8 / D2 после получения контракта / открытия бизнеса',
          'Для гражданства: по действующему праву нет коэффициента 0.5 — годы с действующим título de residência студента обычно считаются как обычное легальное проживание (Lei 37/81 art. 6). ⚠️ Decreto AR 48/XVII промульгирован Президентом Сегуру 03.05.2026 — опубликован 18.05.2026 как Lei Orgânica n.º 1/2026, в силе с 19.05.2026; правила натурализации после этой даты — 7 лет CPLP+EU / 10 лет для остальных, переходное положение защищает дела, поданные ДО 19.05.2026'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Licenciatura в гос. вузе (national/EU)', amountEURMax: 697, note: '€/год — DGES propina cap' },
    { label: 'Licenciatura в гос. вузе (Estudante Internacional / CEEI)', note: 'устанавливает каждый вуз/курс — смотрите edital' },
    { label: 'Licenciatura в частном вузе', amountEURMin: 3500, amountEURMax: 15000, note: '€/год' },
    { label: 'Residência universitária', amountEURMin: 150, amountEURMax: 300, note: '€/мес' },
    { label: 'Bolsa FCT PhD', note: 'смотрите актуальный tabela de bolsas FCT' }
  ],
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 36/2014 — Estatuto do Estudante Internacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/36-2014', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 66/2018 — Reconhecimento de graus e diplomas estrangeiros', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 23/2007 (art. 122 — residência após estudos)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34532975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'CNA — Concurso Nacional de Acesso', url: 'https://www.dges.gov.pt/guias/indest.asp', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'FCT — Fundação para a Ciência e Tecnologia', url: 'https://www.fct.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Study in Portugal', url: 'https://www.studyinportugal.pt/', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}