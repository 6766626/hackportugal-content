export default {
  editorialVoice: 'hackportugal',
  id: 'junta-freguesia',
  categoryId: 'digital_gov',
  title: 'Junta de Freguesia — что это и какие услуги оказывает',
  tldr: 'Junta de Freguesia (юнта-фрегезия) — местный орган самоуправления, примерно как «сельсовет» или районная администрация. Выдаёт Atestado de Residência (справку о проживании, нужна для AIMA/SNS), регистрирует união de facto, решает вопросы содержания районных улиц, проводит мероприятия для пенсионеров и детей.',
  tags: ['junta', 'freguesia', 'atestado', 'местная администрация'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'Что такое Junta',
      content: [
        { kind: 'paragraph', text: 'Португалия административно делится так: distrito → concelho (муниципалитет, Câmara Municipal) → freguesia (приход). Junta de Freguesia — исполнительный орган freguesia. В Лиссабоне 24 freguesia, в Порту 7.' },
        { kind: 'paragraph', text: 'Junta — ближайший к жителю орган власти. Обычно находится рядом с домом, там короткая очередь и более человеческое отношение.' }
      ]
    },
    {
      id: 'services',
      title: 'Какие услуги оказывает',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência (справка о месте жительства) — подтверждает, что вы живёте по этому адресу (для AIMA, SNS, школы, банка, посольства)',
          'Atestado de Agregado Familiar — справка о составе семьи',
          'Atestado de Condição Económica — справка об экономическом положении для социальной помощи',
          'Registo de União de Facto — оформление гражданского партнёрства',
          'Autenticação de cópias — заверение копий документов',
          'Atestado de Incapacidade Económica — для бесплатной юридической помощи',
          'Recenseamento Eleitoral — включение в список избирателей для владельцев Cartão de Cidadão',
          'Registo de Cidadão Europeu (CRUE) — в некоторых Junta de Freguesia',
          'Разрешения на шумные работы и вывоз строительного мусора',
          'Культурные мероприятия — концерты, курсы, мастер-классы'
        ]}
      ]
    },
    {
      id: 'atestado',
      title: 'Как получить Atestado de Residência',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Документы', content: [
            { kind: 'checklist', items: [
              'Паспорт / ВНЖ / Cartão de Cidadão',
              'Подтверждение проживания: договор аренды / счёт за коммунальные услуги / IRS с адресом',
              '2 свидетеля-соседа (португальцы или владельцы Cartão de Cidadão) — ОБА НУЖНЫ ЛИЧНО в некоторых Junta de Freguesia',
              'Некоторые Junta de Freguesia принимают просто подписанное жильцами здания свидетельство'
            ]}
          ]},
          { id: 'a2', title: '2. Прийти в Junta de Freguesia', content: [
            { kind: 'paragraph', text: 'Без записи, обычно очередь 10-30 минут. Работают 9:00-17:00, обед 12:30-14:00.' }
          ]},
          { id: 'a3', title: '3. Получить справку сразу', content: [
            { kind: 'paragraph', text: 'Выдают в тот же день, € 2–5. Действует 90 дней.' }
          ]}
        ]}
      ]
    },
    {
      id: 'find',
      title: 'Как найти свою Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'По адресу:' },
        { kind: 'checklist', items: [
          'Поиск на сайте муниципалитета: «Junta de Freguesia» + ваш район',
          'ANAFRE — ассоциация всех Junta de Freguesia: anafre.pt',
          'В Лиссабоне: Olivais, Lumiar, Marvila, Alvalade, Campolide и т.д.',
          'В Порту: União de Freguesias do Centro Histórico, Aldoar-Foz-Nevogilde и т.д.'
        ]}
      ]
    },
    {
      id: 'extra',
      title: 'Дополнительные возможности',
      content: [
        { kind: 'checklist', items: [
          'В некоторых Junta de Freguesia есть бесплатные курсы португальского языка',
          'Летние лагеря для детей (férias ativas) — недорого, € 50–100 в неделю',
          'Бесплатная физкультура для пенсионеров (Movimento é Saúde)',
          'Библиотеки и читальные залы',
          'Юридическая консультация раз в месяц (Gabinete Jurídico)',
          'Поздравления с 80-летием, рождением ребёнка'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ANAFRE — Associação Nacional de Freguesias', url: 'https://www.anafre.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CML — Juntas de Freguesia de Lisboa', url: 'https://www.lisboa.pt/municipio/juntas-de-freguesia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CM-Porto — Juntas de Freguesia', url: 'https://www.cm-porto.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}