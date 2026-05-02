export default {
  editorialVoice: 'hackportugal',
  id: 'cae-choice-self-employed',
  categoryId: 'work_business',
  title: 'CAE: как выбрать код деятельности для recibos verdes',
  tldr: 'Для recibos verdes вы выбираете не «профессию на визитке», а налоговую деятельность в Finanças: код CIRS art. 151 для свободных профессий и/или CAE Rev.4 для предпринимательской деятельности. Ошибка влияет на IVA, retenção na fonte, Segurança Social и иногда на IFICI. В 2026 порог освобождения IVA по art. 53 CIVA — 15 000 € оборота в год; стандартная ставка Segurança Social для trabalhador independente — 21,4%. CAE можно менять онлайн, но задним числом лучше не играть.',
  tags: ['cae', 'recibosverdes', 'iva', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cae-vs-cirs',
      title: '1. Понять разницу: CAE ≠ CIRS',
      content: [
        { kind: 'paragraph', text: 'В recibos verdes у самозанятого могут быть два типа кодов. CAE — Código de Atividade Económica, классификация экономической деятельности по CAE Rev.4. CIRS art. 151 — список профессиональных кодов для IRS: программисты, консультанты, дизайнеры, врачи, юристы и другие prestação de serviços.' },
        { kind: 'paragraph', text: 'Если вы продаёте услуги как профессионал, Finanças часто ожидает CIRS-код. Если вы ведёте бизнес-активность — e-commerce, производство, аренда оборудования, агентство, обучение как компания-подобная деятельность — нужен CAE. Можно иметь основной код и дополнительные коды.' },
        { kind: 'checklist', items: [
          'Фриланс-разработка ПО: часто CIRS 1332 / 1335 или близкий профессиональный код, а не только CAE',
          'IT-консалтинг как бизнес-услуга: может понадобиться CAE 62020 или другой код из раздела J',
          'Онлайн-магазин: CAE торговли, а не CIRS «консультант»',
          'Аренда жилья через alojamento local: CAE из размещения, не CIRS',
          'Дизайн, маркетинг, copywriting: обычно CIRS, но агентская модель может требовать CAE',
          'Курсы и обучение: зависит от формата — индивидуальные уроки, школа, онлайн-платформа',
          'Если в invoice/recibo вы описываете услугу, которой нет в выбранной atividade, код надо добавить до регулярной работы'
        ] }
      ]
    },
    {
      id: 'search-classificacao',
      title: '2. Искать код в Classificação.pt, а не по форумам',
      content: [
        { kind: 'paragraph', text: 'Официальный поиск CAE находится на classificacao.pt. В 2026 используется CAE Rev.4. Ищите по португальским словам: “consultoria informática”, “programação”, “comércio eletrónico”, “formação”, “design”, “marketing”, “alojamento”, “tradução”. Читайте не только название, но и notas explicativas: что входит и что исключено.' },
        { kind: 'checklist', items: [
          'Откройте classificacao.pt/cae и ищите по PT-термину',
          'Проверьте полный 5-значный код, а не только раздел A–U',
          'Откройте notas explicativas: там часто есть исключения',
          'Сравните 2–3 соседних кода: например software, consultoria, processamento de dados',
          'Проверьте, не относится ли ваша работа к CIRS art. 151 вместо CAE',
          'Если деятельность смешанная, выберите одну основную и добавьте secundárias',
          'Сохраните скрин/URL кода: пригодится бухгалтеру и при проверке'
        ] },
        { kind: 'warning', text: 'Название на английском или русском не имеет силы. В declaração de início/alteração de atividade Finanças оперирует португальскими кодами и описаниями.' }
      ]
    },
    {
      id: 'tax-effects',
      title: '3. Проверить налоговые последствия: IVA, retenção, IRS',
      content: [
        { kind: 'paragraph', text: 'Код деятельности сам по себе не всегда определяет налог, но он запускает правильные вопросы в Finanças: облагается ли услуга IVA, есть ли освобождение, нужна ли retenção na fonte, подходит ли regime simplificado или contabilidade organizada.' },
        { kind: 'checklist', items: [
          'IVA art. 53 CIVA: в 2026 освобождение возможно, если оборот за предыдущий год не превышал 15 000 € и соблюдены условия режима',
          'Если клиент вне Португалии, проверьте regras de localização do IVA и reverse charge — особенно B2B в ЕС',
          'Некоторые медицинские, образовательные и страховые операции могут быть isentas по другим статьям CIVA, но это не автоматическое освобождение для всех преподавателей/терапевтов',
          'Retenção na fonte по IRS часто зависит от типа услуги и клиента; для многих услуг ставка 25%, но есть исключения и dispensa при низком обороте',
          'В regime simplificado налоговая база зависит от коэффициента: многие услуги считаются по 75%, продажи товаров — по 15%, но детали зависят от кода и характера дохода',
          'Если оборот растёт, заранее проверьте переход на IVA normal и обязанность подавать declarações periódicas',
          'Для операций с ЕС может понадобиться declaração recapitulativa и корректная регистрация VIES'
        ] },
        { kind: 'warning', text: 'Не выбирайте “удобный” код только ради IVA или IRS. Если описание recibo не совпадает с atividade, у AT есть основание доначислить налог, штраф и проценты.' }
      ]
    },
    {
      id: 'social-security-ifici',
      title: '4. Учесть Segurança Social и IFICI',
      content: [
        { kind: 'paragraph', text: 'Для trabalhador independente стандартная ставка взносов Segurança Social — 21,4%. База считается не от CAE напрямую, а от rendimento relevante: обычно 70% дохода от услуг и 20% от продажи товаров/производства. Но код помогает классифицировать деятельность и избежать споров, когда у вас смешанные услуги и продажи.' },
        { kind: 'paragraph', text: 'Для IFICI, режима налогового стимула, заменившего старый NHR для новых резидентов, CAE может быть критичен не как “магическое слово”, а как доказательство, что деятельность относится к допустимой экономической сфере или высококвалифицированной функции. В 2026 правила IFICI завязаны на конкретные виды деятельности, работодателя/заказчика, квалификацию и регистрацию в установленный срок.' },
        { kind: 'checklist', items: [
          'Первый год atividade может давать освобождение от Segurança Social до 12 месяцев, если это первая регистрация как trabalhador independente',
          'После освобождения декларации Segurança Social обычно подаются ежеквартально',
          'Если вы одновременно employee и recibos verdes, может быть освобождение от взносов по TI при выполнении условий',
          'Для IFICI заранее проверьте, что ваш CAE/функция совпадает с перечнем допустимых atividades',
          'Не меняйте CAE задним числом только ради IFICI — это риск при проверке',
          'Сохраняйте контракты, invoices, descrição de serviços и дипломы/сертификаты: одного CAE недостаточно'
        ] }
      ]
    },
    {
      id: 'register-change',
      title: '5. Зарегистрировать или изменить atividade в Finanças',
      content: [
        { kind: 'paragraph', text: 'Коды указываются в declaração de início de atividade или declaração de alterações на Portal das Finanças. Нужны NIF, доступ к Portal das Finanças или CMD, адрес, предполагаемый оборот, режим IVA, IBAN и выбранные CAE/CIRS.' },
        { kind: 'substeps', items: [
          { id: 'start', title: 'Открытие atividade', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Cidadãos → Serviços → Atividade → Início de Atividade',
              'Укажите дату начала: она должна соответствовать реальной первой услуге/продаже',
              'Выберите основную atividade и дополнительные, если они уже нужны',
              'Укажите previsão de volume de negócios — от неё зависит режим IVA',
              'Проверьте campo de IVA: art. 53, regime normal или специальное освобождение',
              'Сохраните comprovativo da declaração'
            ] }
          ] },
          { id: 'change', title: 'Изменение CAE/CIRS', content: [
            { kind: 'paragraph', text: 'Если вы начали новую линию услуг, подайте declaração de alterações до выставления регулярных recibos по новой деятельности. Изменение обычно бесплатно и делается онлайн.' }
          ] }
        ] },
        { kind: 'warning', text: 'Если у вас уже есть оборот, клиенты из ЕС, IFICI, наём сотрудников или спорная IVA-льгота, не открывайте atividade “наугад”. Один час contabilista certificado обычно дешевле, чем исправление деклараций за год.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача início/alteração de atividade на Portal das Finanças', amountEUR: 0, note: 'Самостоятельно онлайн бесплатно' },
    { label: 'Консультация contabilista certificado по CAE/IVA/IFICI', amountEURMin: 50, amountEURMax: 150, note: 'Ориентир за разовую консультацию; сложные IFICI/IVA-кейсы дороже' }
  ],
  sources: [
    {
      title: 'Официальный поиск CAE Rev.4 — Classificação Portuguesa das Atividades Económicas',
      url: 'https://www.classificacao.pt/cae',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — início de atividade и obrigações fiscais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_actividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — art. 53, regime especial de isenção',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — Guia Prático do Trabalhador Independente',
      url: 'https://www.seg-social.pt/trabalhadores-independentes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
