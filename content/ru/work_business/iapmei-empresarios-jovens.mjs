export default {
  editorialVoice: 'hackportugal',
  id: 'iapmei-empresarios-jovens',
  categoryId: 'work_business',
  title: 'IAPMEI: поддержка молодых предпринимателей до 35 лет',
  tldr: 'IAPMEI не выдаёт «автоматический грант до 35 лет»: деньги идут только через открытые avisos Portugal 2030/COMPETE 2030 и региональные программы. Vale Empreendedorismo обычно покрывает консультации/план запуска до 10 000 € eligible costs, а не зарплату основателю. Подаваться нужно через Balcão dos Fundos; старый balcao2020.pt — наследие Portugal 2020. Нужны NIF, компания/ENI в Португалии, чистые Finanças/Segurança Social и бизнес-план.',
  tags: ['iapmei', 'empreendedorismo', 'pme', 'гранты'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что реально даёт IAPMEI в 2026',
      content: [
        { kind: 'paragraph', text: 'IAPMEI — агентство Ministério da Economia, которое ведёт PME, стартапы, сертификацию PME и часть стимулов Portugal 2030. Для молодых предпринимателей до 35 лет поддержка обычно не оформлена как постоянная «льгота по паспорту», а появляется в конкретных avisos: Vale Empreendedorismo, inovação produtiva, qualificação PME, digitalização, empreendedorismo qualificado.' },
        { kind: 'paragraph', text: 'Vale Empreendedorismo — самый понятный формат для нового бизнеса: ваучер на внешние услуги, например бизнес-план, market fit, прототип, юридическую/финансовую подготовку, стратегию вывода продукта. Типичный потолок, который встречается в youth/new business calls, — до 10 000 € eligible costs, но ставка софинансирования, лимиты и допустимые расходы каждый раз задаются текстом aviso.' },
        { kind: 'warning', text: 'Не закладывайте грант как гарантированный cash-in. Большинство программ работает по reimbursement: сначала платите поставщику и показываете faturas/recibos, затем получаете компенсацию после проверки. На практике нужен запас оборотных денег.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может претендовать',
      content: [
        { kind: 'checklist', items: [
          'Возраст: если aviso помечен как jovem empreendedor, обычно используется формула «até 35 anos» — как правило, до 35 лет включительно (то есть до 36-летия) у основателя/контролирующих socios на дату подачи; точная граница и дата проверки — в самом aviso.',
          'Бизнес должен быть в Португалии: ENI/empresário em nome individual или sociedade с NIPC, sede/estabelecimento в PT.',
          'Экспат может участвовать, если у него есть право работать/вести бизнес в Португалии: ВНЖ, виза с разрешением на деятельность, EU residence, либо другой законный статус.',
          'NIF обязателен; для компании — certidão permanente, CAE, IBAN компании, contabilidade organizada при необходимости.',
          'Нет долгов в Finanças и Segurança Social: нужны certidões de não dívida или разрешение на автоматическую проверку.',
          'PME Certification на портале IAPMEI часто обязательна для компаний, уже созданных как micro/PME.',
          'Проект не должен быть начат до допустимой даты: расходы до подачи/решения часто не принимаются.',
          'Поставщики услуг должны быть независимыми: нельзя покупать консультации у своей же компании, родственников или связанных socios.',
          'Поддержка обычно подпадает под regra de minimis: общий лимит помощи de minimis в ЕС — 300 000 € за 3 года на одно предприятие.',
          'Сектора с ограничениями: финансы, недвижимость как инвестиция, азартные игры, часть сельского хозяйства/рыболовства и чистая торговля могут быть исключены конкретным aviso.'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Где искать открытые конкурсы и подаваться',
      content: [
        { kind: 'paragraph', text: 'В 2026 ориентируйтесь не на слухи в чатах, а на три места: сайт IAPMEI, портал COMPETE 2030 и Balcão dos Fundos. Старый balcao2020.pt относится к Portugal 2020; многие ссылки всё ещё живут, но новые Portugal 2030 заявки идут через Balcão dos Fundos.' },
        { kind: 'substeps', items: [
          { id: 'find-aviso', title: '1. Найти aviso', content: [
            { kind: 'paragraph', text: 'На compete2030.gov.pt откройте Avisos и фильтруйте по «Empreendedorismo», «PME», «Inovação», «Qualificação» или «Vales». На iapmei.pt проверяйте новости и страницы «Incentivos».' }
          ] },
          { id: 'read-rules', title: '2. Прочитать aviso целиком', content: [
            { kind: 'checklist', items: [
              'дата открытия и закрытия',
              'территория: Continente, Norte, Centro, Lisboa, Alentejo, Algarve, Açores/Madeira',
              'кто beneficiary: pessoa singular, ENI, sociedade, PME до X лет',
              'максимальный incentivo: например до 10 000 € по ваучеру',
              'ставка софинансирования: 50%, 60%, 75% или фиксированная сумма',
              'минимальный/максимальный orçamento',
              'разрешённые despesas elegíveis',
              'критерии оценки и баллы',
              'нужно ли создать рабочие места',
              'срок исполнения проекта'
            ] }
          ] },
          { id: 'submit', title: '3. Подать candidatura', content: [
            { kind: 'paragraph', text: 'Вход — через autenticação.gov.pt, Chave Móvel Digital или Cartão de Cidadão. Для компании часто нужен доступ как representante legal. Заполняете formulário, загружаете бизнес-план, orçamento/quotes, документы компании и декларации.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Пакет документов: что подготовить заранее',
      content: [
        { kind: 'checklist', items: [
          'NIF основателя и NIPC компании, если sociedade уже создана.',
          'Documento de identificação: паспорт + ВНЖ/виза/CRUE для EU, если применимо.',
          'Certidão permanente comercial или código de acesso.',
          'CAE, дата начала atividade в Finanças, declaração de início de atividade для ENI.',
          'Certidões de situação regularizada в Autoridade Tributária и Segurança Social.',
          'PME Certification IAPMEI, если компания уже действует и aviso требует PME.',
          'Business plan на 2–3 года: продукт, рынок, клиенты, pricing, конкуренты, каналы продаж.',
          'Plano financeiro: investimento, cash-flow, break-even, источники cofinanciamento.',
          'Orçamentos от независимых поставщиков: консалтинг, разработка, маркетинг, сертификация, прототип.',
          'CV/founder profile: опыт, образование, роль каждого socio.',
          'Декларация de minimis и список уже полученных грантов/субсидий.',
          'IBAN компании и доказательство, что у вас есть деньги на собственную часть расходов.'
        ] },
        { kind: 'warning', text: 'Если у вас ещё нет компании, проверьте aviso до регистрации. Некоторые конкурсы требуют «empresa criada há menos de 2 anos», а некоторые — чтобы деятельность ещё не началась. Неправильная дата início de atividade может убить заявку.' }
      ]
    },
    {
      id: 'selection-reality',
      title: 'Шансы, сроки и типичные причины отказа',
      content: [
        { kind: 'paragraph', text: 'Публичной единой «success rate» по молодёжным заявкам IAPMEI нет: процент зависит от aviso, региона и бюджета. В популярных ваучерах деньги заканчиваются быстро, а конкуренция выше в Lisboa/Porto и digital/consulting проектах. Реалистичный горизонт: 2–4 недели на подготовку, 2–6 месяцев на решение, затем исполнение проекта и reimbursement.' },
        { kind: 'checklist', items: [
          'Сильнее выглядят проекты с уже подтверждённым спросом: LOI, первые клиенты, пилоты, pre-sales.',
          'Оценка выше, если есть инновация, экспортный потенциал, цифровой/зелёный компонент и квалифицированная команда.',
          'Слабые заявки: «открыть кафе/магазин» без отличия, рынка и финансовой модели.',
          'Частый отказ: расходы не eligible — аренда, обычные операционные расходы, зарплата founder, старый ноутбук, маркетинг без связи с проектом.',
          'Частый отказ: долги в Finanças/Segurança Social на момент проверки.',
          'Частый отказ: поставщик связан с заявителем или orçamento выглядит искусственно.',
          'Частый отказ: проект начат до подачи, уже оплачены услуги, уже подписан контракт.',
          'Частый отказ: компания не проходит критерий PME или CAE не подходит под aviso.'
        ] },
        { kind: 'paragraph', text: 'Если нужна поддержка не на консультации, а на зарплату/создание рабочего места, проверьте параллельно IEFP Empreende XXI и меры criação do próprio emprego. Это не IAPMEI, но для начинающих предпринимателей часто практичнее, чем ожидание подходящего aviso COMPETE 2030.' }
      ]
    },
    {
      id: 'practical-plan',
      title: 'Практический план на 30 дней',
      content: [
        { kind: 'checklist', items: [
          'День 1–3: проверьте миграционный статус и право вести atividade; без этого не тратьте время на заявку.',
          'День 3–5: получите/проверьте NIF, доступ к Portal das Finanças, Segurança Social Direta, CMD.',
          'День 5–10: решите форму: ENI или sociedade por quotas; для грантов sociedade часто выглядит сильнее, но дороже в бухгалтерии.',
          'День 10–14: сделайте PME Certification на IAPMEI, если компания уже создана.',
          'День 14–20: соберите 2–3 orçamento от независимых поставщиков под Vale Empreendedorismo/Vales.',
          'День 20–25: подготовьте business plan и финансовую модель; переведите ключевые материалы на португальский.',
          'День 25–30: зарегистрируйтесь в Balcão dos Fundos, настройте представительство компании и подпишитесь на avisos COMPETE 2030.',
          'Параллельно: держите резерв на собственную часть расходов и IVA. Важно: возвращаемый IVA обычно не eligible — если компания может его вычесть/вернуть, в гранте он не компенсируется. Невозмещаемый IVA может быть eligible, только если это прямо допускает aviso.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Vale Empreendedorismo / ваучер на услуги', amountEURMax: 10000, note: 'Типичный потолок eligible costs для youth/new business ваучеров; точный лимит и % софинансирования смотрите в конкретном aviso.' },
    { label: 'Регистрация sociedade por quotas онлайн', amountEUR: 220, note: 'Empresa Online; может отличаться при нестандартном уставе/услугах юриста.' },
    { label: 'Бухгалтерия microempresa', amountEURMin: 100, amountEURMax: 250, note: 'Обычный диапазон в месяц без payroll и сложного IVA; не грант, но нужен для compliance.' },
    { label: 'Certidão permanente comercial', amountEUR: 25, note: 'Обычно на 1 год; часто требуется код доступа вместо PDF.' }
  ],
  sources: [
    { title: 'IAPMEI — incentivos, PME и empreendedorismo', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'COMPETE 2030 — avisos Portugal 2030 для PME и empreendedorismo', url: 'https://www.compete2030.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Balcão dos Fundos — подача candidaturas Portugal 2030', url: 'https://balcaofundosue.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Comissão Europeia — regras de auxílios de minimis 2024–2030', url: 'https://competition-policy.ec.europa.eu/state-aid/legislation/regulations/de-minimis-regulation_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
