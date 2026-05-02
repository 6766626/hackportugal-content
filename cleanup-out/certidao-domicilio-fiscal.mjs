export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — подтверждение налогового адреса',
  tldr: 'Certidão de domicílio fiscal — официальная справка от Autoridade Tributária, подтверждающая ваш налоговый адрес в Португалии. Нужна для: подачи на гражданство, открытия счёта в некоторых банках, регистрации автомобиля, продления ВНЖ в пограничных случаях, подтверждения резидентства для применения соглашений об избежании двойного налогообложения. Бесплатно, скачивается онлайн через Portal das Finanças за 2 минуты.',
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
          'Certificado de residência fiscal для зарубежных налоговых органов — подтверждает, что вы налоговый резидент Португалии, для применения соглашений об избежании двойного налогообложения',
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
          { id: 'o2', title: '2. Меню "Cidadãos" → "Certidões"', content: [
            { kind: 'paragraph', text: 'Меню слева → "Serviços" → "Certidões" → "Certidão de Residência Fiscal" или "Certidão de Domicílio Fiscal" (зависит от вашего статуса — резидент или нерезидент).' }
          ]},
          { id: 'o3', title: '3. Выбрать тип и год', content: [
            { kind: 'checklist', items: [
              'Domicílio Fiscal — простая справка о текущем адресе (для банков, AIMA)',
              'Residência Fiscal — справка о налоговом резидентстве за конкретный год (для двойного налогообложения)',
              'Выбрать язык — португальский по умолчанию, есть версия на английском для международного использования'
            ]}
          ]},
          { id: 'o4', title: '4. Скачать PDF', content: [
            { kind: 'paragraph', text: 'Выдаётся моментально, с QR-кодом для проверки подлинности. Банки и AIMA принимают электронную версию, распечатанную на принтере.' }
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
          'Выдают распечатанную версию с печатью — срок выдачи в день обращения'
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
          'IRN / AIMA — принимают до 6 месяцев',
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
        { kind: 'warning', text: 'Для нерезидентов (не являющихся налоговыми резидентами Португалии) Portal das Finanças показывает только адрес страны происхождения. Если нужно подтвердить адрес в Португалии для небюрократических целей (банк) — вместо налоговой справки используйте Atestado de Residência от Junta de Freguesia.' }
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
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}