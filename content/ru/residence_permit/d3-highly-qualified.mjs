export default {
  editorialVoice: 'hackportugal',
  id: 'd3-highly-qualified',
  categoryId: 'residence_permit',
  title: 'Виза D3 (высококвалифицированный специалист)',
  tldr: 'D3 — для высококвалифицированной работы в Португалии: нужен contrato de trabalho или promessa de contrato, как правило с португальским работодателем/португальской структурой иностранной компании. Для чисто удалённой работы на иностранную компанию без португальского контракта смотрите D8. Порог: годовая gross remuneration ≥ 1,5× national average gross annual salary или ≥ 3× IAS (в 2026 = €1 611,39/мес). Доступ к IFICI 20% — ТОЛЬКО если деятельность попадает в утверждённый список (наука, НИОКР, вузы, стартапы) и соблюдены условия IFICI; не для обычных удалённых разработчиков.',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d3', 'внж', 'высококвалифицированный', 'ict'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who',
      title: 'Кто подходит',
      content: [
        { kind: 'checklist', items: [
          'ИТ-инженеры, разработчики, специалисты по анализу данных',
          'Инженеры (механические, электрические и т.д.)',
          'Научные сотрудники, исследователи',
          'Консультанты, менеджеры, аналитики высокого уровня',
          'Медицинские специалисты с дипломом (после нострификации)'
        ]}
      ]
    },
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Диплом о высшем образовании или квалификация, соответствующая высококвалифицированной деятельности (с апостилем и переводом). В отдельных случаях может приниматься подтверждённый релевантный профессиональный опыт',
          'Для регулируемых профессий (медицина, инженерия и т.д.) — признание диплома и/или регистрация в профессиональной Ordem',
          'Contrato de trabalho или promessa de contrato для высококвалифицированной деятельности, обычно МИНИМУМ на 1 год',
          'Порог зарплаты: годовая gross remuneration ≥ 1,5× national average gross annual salary или ≥ 3× IAS. В 2026 IAS = €537,13 → 3× IAS = €1 611,39/мес. Если считать по средней зарплате, пересчитывайте именно годовую gross сумму и уточняйте практику конкретного консульства/AIMA. Учитывайте, что португальская зарплата часто обсуждается за 14 выплат',
          'Справка о несудимости',
          'Медстраховка на время до регистрации в SNS'
        ]},
        { kind: 'warning', text: 'Cartão Azul UE (EU Blue Card) — ОТДЕЛЬНЫЙ режим со своими правилами (Lei 23/2007 art. 121-A и далее; Directive (EU) 2021/1883). Порог также считается от national average gross annual salary, с особыми/пониженными коэффициентами для некоторых профессий — НЕ используйте фиксированные €4 400/мес без проверки актуального порога AIMA/MNE.' }
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Найти работодателя', content: [
            { kind: 'paragraph', text: 'Ищите на LinkedIn, Landing.Jobs, ITJobs.pt, NetJobs.' }
          ]},
          { id: 's2', title: '2. Получить трудовой договор', content: [
            { kind: 'paragraph', text: 'Работодатель готовит трудовой договор, часто регистрирует в Segurança Social (социальное страхование).' }
          ]},
          { id: 's3', title: '3. Подать на визу в консульстве', content: [
            { kind: 'paragraph', text: 'На визу D3 подаёте вы, не работодатель. В консульстве по стране проживания.' }
          ]},
          { id: 's4', title: '4. NIF + въезд + AIMA', content: [
            { kind: 'paragraph', text: 'NIF часто оформляют заранее. NISS обычно оформляется после начала трудовых отношений / через работодателя. Проверьте, указана ли AIMA appointment в визе; если нет — добивайтесь записи через AIMA.' }
          ]},
          { id: 's5', title: '5. Подать на налоговый режим IFICI (если деятельность подходит)', content: [
            { kind: 'paragraph', text: 'IFICI НЕ автоматический для D3. Режим даёт 20% IRS на eligible net employment/self-employment income от listed scientific, innovation или qualified activities на срок до 10 лет, если выполнены условия IFICI: подходящая деятельность, подходящий работодатель/организация (с регистрацией, где применимо), отсутствие налогового резидентства в PT за предыдущие 5 лет и отсутствие несовместимого использования NHR. Заявление обычно подают до **15 января** года, следующего за годом становления резидентом (Portaria 352/2024/1; EBF art. 58-A).' }
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'AIMA — pedido/análise de concessão de autorização de residência', amountEUR: 133, note: 'тариф с 01.03.2026' },
    { label: 'AIMA — emissão do título de residência para atividade altamente qualificada (Lei 23/2007 art. 90)', amountEUR: 307.20, note: 'тариф с 01.03.2026; для Cartão Azul UE применяется свой тариф' },
    { label: 'Нострификация диплома', amountEURMin: 100, amountEURMax: 300, note: 'если требуется' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'Vistos MNE — виза D3 для высококвалифицированных специалистов', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — вид на жительство для высококвалифицированных специалистов', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria 352/2024/1 — список квалифицированных профессий IFICI', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-913098024', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Estatuto dos Benefícios Fiscais art. 58-A — режим IFICI', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34423775', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}