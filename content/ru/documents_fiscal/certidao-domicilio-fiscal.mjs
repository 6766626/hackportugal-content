export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — подтверждение налогового адреса',
  tldr: 'Certidão de domicílio fiscal — официальная справка от Autoridade Tributária, подтверждающая ваш налоговый адрес в Португалии. Нужна для: подачи на гражданство, открытия счёта в некоторых банках, регистрации автомобиля, продления ВНЖ в пограничных случаях. Не путать: для подтверждения налогового резидентства по соглашениям об избежании двойного налогообложения нужна отдельная Certidão de Residência Fiscal. Бесплатно, скачивается онлайн через Portal das Finanças за 2 минуты.',
  tags: ['certidão', 'адрес', 'finanças'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'what-for',
      title: 'Для чего нужна',
      content: [
        { kind: 'checklist', items: [
          'Подача на гражданство Португалии — IRN иногда запрашивает',
          'Открытие счёта в банке, если нет другого подтверждения адреса',
          'Регистрация автомобиля в IMT — подтверждение адреса владельца',
          'Продление ВНЖ в спорных случаях — AIMA запрашивает',
          'Не путать: для зарубежных налоговых и применения DTT нужна отдельная Certidão de Residência Fiscal, а не certidão de domicílio fiscal',
          'Подача жалобы в Provedor de Justiça, суд, Finanças'
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Получить онлайн (самый простой путь)',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Вход в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → Iniciar sessão → NIF + пароль, либо Chave Móvel Digital, либо Cartão de Cidadão.' }
          ]},
          { id: 'o2', title: '2. Найти услугу', content: [
            { kind: 'paragraph', text: 'В поиске Portal das Finanças введите «certidão domicílio fiscal» или откройте Todos os Serviços → Certidões → Pedir certidão и выберите нужный тип.' }
          ]},
          { id: 'o3', title: '3. Выбрать тип и год', content: [
            { kind: 'checklist', items: [
              'Certidão de Domicílio Fiscal — если нужен адрес в AT (банк, AIMA)',
              'Certidão de Residência Fiscal — если нужно подтвердить налоговое резидентство Португалии за конкретный год для иностранного налогового органа/DTT',
              'Для residência fiscal часто доступна версия на английском; для domicílio fiscal обычно достаточно португальского PDF с кодом верификации'
            ]}
          ]},
          { id: 'o4', title: '4. Скачать PDF', content: [
            { kind: 'paragraph', text: 'Выдаётся моментально, с QR-кодом для проверки подлинности. Обычно принимают PDF/распечатку с кодом верификации, но банк или AIMA могут запросить другой или более свежий proof of address.' }
          ]}
        ]}
      ]
    },
    {
      id: 'offline',
      title: 'Получить лично в Finanças (если нет онлайн-доступа)',
      content: [
        { kind: 'checklist', items: [
          'Запись через Portal das Finanças на очный приём',
          'Документы: NIF + Cartão de Cidadão/ВНЖ + паспорт',
          'Запросить у сотрудника "certidão de domicílio fiscal"',
          'Обычно выдают или помогают распечатать certidão в день обращения; формат и срок зависят от serviço de finanças и типа справки'
        ]}
      ]
    },
    {
      id: 'validity',
      title: 'Срок действия',
      content: [
        { kind: 'checklist', items: [
          'Официального срока нет — справка отражает адрес на момент выдачи',
          'Банки часто требуют справку "не старше 3 месяцев"',
          'IRN/AIMA: зависит от процедуры; безопаснее подавать справку не старше 3 месяцев, если в конкретном списке документов не указан иной срок',
          'Если адрес сменился — запросите новую, старая становится недействительной',
          'Для certificado de residência fiscal — действителен на конкретный налоговый год'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Частые проблемы',
      content: [
        { kind: 'warning', text: 'Если адрес в Finanças старый и вы переехали — сначала смените его (см. гайд «Смена налогового адреса»). Иначе справка подтвердит старый адрес.' },
        { kind: 'warning', text: 'У нерезидентов domicílio fiscal в AT обычно — зарубежный адрес налогового проживания, а не португальский; поэтому certidão может не подтвердить фактический адрес в Португалии. Если нужно подтвердить адрес в Португалии (например, для банка), можно использовать Atestado de Residência от Junta de Freguesia — но Junta выдаёт его только при подтверждении фактического проживания; список доказательств зависит от freguesia, а банк заранее стоит спросить, какой proof of address он принимает.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de domicílio fiscal (онлайн)', amountEUR: 0 },
    { label: 'Certidão de residência fiscal (для соглашений об избежании двойного налогообложения)', amountEUR: 0 }
  ],
  timelineDaysMin: 0,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://www.gov.pt/servicos/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}