export default {
  editorialVoice: 'hackportugal',
  id: 'uber-eats-restaurante-onboarding',
  categoryId: 'work_business',
  title: 'Регистрация ресторана на Uber Eats / Glovo / Bolt Food',
  tldr: 'Подключение ресторана к Uber Eats, Glovo или Bolt Food в Португалии — это не просто загрузить меню: платформы обычно берут comissão 25–30% + IVA, договоры могут включать промо-скидки, штрафы за отмены и ограничения видимости. К апрелю 2026 ресторан должен иметь легальную atividade, ASAE/ленивый HACCP-пакет, Livro de Reclamações, цены с IVA и фискальные документы с QR/ATCUD через сертифицированный software, иначе споры с платформой быстро превращаются в проблемы с AT и ASAE.',
  tags: ['restaurante', 'delivery', 'asae', 'atcud'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'before-apps',
      title: '1. Проверьте, что ресторан легален до онбординга',
      content: [
        { kind: 'paragraph', text: 'Платформы принимают не «идею ресторана», а действующий operador económico. Перед заявкой должны совпадать NIF/NIPC, название, IBAN, CAE и адрес точки, откуда реально готовится еда. Если кухня работает из квартиры или «dark kitchen» без корректной atividade, это риск блокировки аккаунта и проверки ASAE.' },
        { kind: 'checklist', items: [
          'Открыта atividade в Finanças: обычно CAE 56101 Restaurante tipo tradicional, 56102 Restaurante com lugares ao balcão, 56103 Restaurante sem serviço de mesa или другой подходящий CAE',
          'Есть comunicação prévia / licenciamento через Balcão do Empreendedor или Câmara Municipal, если применимо к помещению',
          'NIF/NIPC и certidão permanente компании или declaração de início de atividade для empresário em nome individual',
          'Conta bancária с IBAN на имя того же titular, который подписывает договор с платформой',
          'Seguro de acidentes de trabalho для работников и соблюдение ACT, если есть персонал',
          'Sistema HACCP или упрощённые процедуры segurança alimentar: температуры, limpeza, pragas, fornecedores, rastreabilidade',
          'Livro de Reclamações físico в заведении и Livro de Reclamações Eletrónico, если продаёте/обслуживаете потребителей',
          'Ementa/preços с IVA включённым; информация об аллергенах по Regulamento (UE) 1169/2011',
          'Фискальный software сертифицирован AT и умеет QR code + ATCUD'
        ] },
        { kind: 'warning', text: 'Не подписывайте договор с платформой на «чужой NIF» или через знакомую компанию. При споре выплаты, IVA, IRS/IRC и ответственность перед ASAE останутся на том, чей NIF указан в договоре.' }
      ]
    },
    {
      id: 'choose-platform',
      title: '2. Сравните комиссию и скрытую экономику',
      content: [
        { kind: 'paragraph', text: 'В Португалии Uber Eats, Glovo и Bolt Food обычно работают как маркетплейс + логистика. Комиссия не установлена законом: её дают в коммерческом предложении и договоре. Для small restaurant в 2026 реальный ориентир — 25–30% от заказа, иногда ниже при самовывозе или собственных курьерах, иногда выше с paid visibility, promos и delivery handled by platform.' },
        { kind: 'checklist', items: [
          'Comissão: процент от food subtotal или от всей корзины — проверьте базу расчёта',
          'IVA на комиссию платформы: 30% + 23% IVA = 36,9% только в cash-flow. Если ваше предприятие — VAT-taxable с правом вычета, этот IVA вычитается как input VAT (или reverse charge для платформ из-за рубежа) — экономическая нагрузка остаётся 30%, не 36,9%. Уточняйте с TOC',
          'Кто оплачивает промо: скидка «-20%» часто списывается с ресторана полностью или частично',
          'Delivery fee: остаётся платформе или влияет на вашу выплату — смотрите payout statement',
          'Refunds: кто платит за «missing item», холодную еду, отмену курьера и chargeback',
          'Minimum order и packaging fee: можно ли добавить отдельную цену за упаковку',
          'Срок выплат: ежедневно, еженедельно или по settlement cycle; как обрабатываются отрицательные балансы',
          'Эксклюзивность: запрет работать с другими apps или требование price parity',
          'Срок расторжения: notice period, возврат планшета/оборудования, штрафы за early termination'
        ] },
        { kind: 'paragraph', text: 'Считайте delivery-меню отдельно. Блюдо за €10 в зале при комиссии 30% в gross cash terms оставляет примерно €7 до food cost, упаковки, персонала и output VAT с продажи. Если IVA на комиссию платформы вы вычитаете как input VAT (стандартный VAT-taxable режим), экономический impact комиссии = 30% (а не 36,9%). Часто delivery-цены делают на 10–20% выше, но проверьте, не запрещает ли договор price parity.' }
      ]
    },
    {
      id: 'documents-onboarding',
      title: '3. Подготовьте пакет для Uber Eats / Glovo / Bolt Food',
      content: [
        { kind: 'paragraph', text: 'Онбординг обычно проходит онлайн: форма партнёра, проверка документов, коммерческое предложение, договор, меню, обучение планшету/app и тестовый заказ. Срок сильно зависит от города и спроса: от нескольких дней до 3–4 недель.' },
        { kind: 'substeps', items: [
          { id: 'legal-docs', title: 'Юридические документы', content: [
            { kind: 'checklist', items: [
              'NIF/NIPC владельца или компании',
              'Certidão permanente comercial или código de acesso, если это sociedade',
              'Declaração de início de atividade, если вы ENI / recibos verdes',
              'Documento de identificação legal representative',
              'IBAN proof: банковская справка или extracto с именем titular',
              'Адрес точки приготовления и contact person',
              'CAE и тип деятельности restauração / take-away / catering, если применимо'
            ] }
          ] },
          { id: 'menu-assets', title: 'Меню и операционные данные', content: [
            { kind: 'checklist', items: [
              'Меню с final prices с IVA включённым',
              'Описание блюд на PT минимум; EN полезен в Лиссабоне, Порту, Алгарве',
              'Аллергены: gluten, lactose, nuts, eggs, fish, shellfish и т.д.',
              'Фото блюд: без вводящей в заблуждение подачи и с реальным portion size',
              'Время приготовления по категориям: 10, 20, 30+ минут',
              'Часы работы delivery отдельно от зала',
              'Зоны отключения при перегрузе кухни',
              'Packaging plan: герметичность, горячее/холодное отдельно, маркировка заказа'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Если платформа присылает договор на английском или испанском, запросите португальскую версию или письменное подтверждение ключевых условий: комиссия, IVA, выплаты, refunds, exclusividade, расторжение. В споре важен текст договора, а не слова sales manager.' }
      ]
    },
    {
      id: 'billing-atcud',
      title: '4. Настройте faturação, ATCUD и сверку выплат',
      content: [
        { kind: 'paragraph', text: 'С 2023 года португальские фискальные документы должны иметь QR code и ATCUD, если используются серии, предварительно сообщённые Autoridade Tributária. В 2026 это уже обычная проверка бухгалтера и AT. Delivery-заказы не освобождают ресторан от emissão de fatura/fatura simplificada.' },
        { kind: 'checklist', items: [
          'Используйте software certificado pela AT: Vendus, Moloni, ZoneSoft, Sage, TOConline, Primavera или другой сертифицированный продукт',
          'Сообщите séries à AT до использования, чтобы на документах был ATCUD',
          'Настройте интеграцию POS ↔ delivery apps или ручной daily import заказов',
          'Если клиент просит NIF, фискальный документ должен включать NIF клиента',
          'Разделяйте revenue from food, delivery/packaging fee, refunds, discounts и platform commission',
          'Проверяйте, кто является продавцом перед клиентом: ресторан или платформа как агент; это влияет на документы и reconciliação',
          'Сохраняйте monthly statements платформы, invoices de comissão и proof of payouts',
          'Сверяйте IVA: продажи ресторана, IVA на комиссию платформы, reverse charge — только если применимо по месту регистрации поставщика услуг',
          'Держите бухгалтеру отдельный отчёт по каждой app: Uber Eats, Glovo, Bolt Food'
        ] },
        { kind: 'paragraph', text: 'Практический контроль: сумма фискальных продаж за день ≠ сумма банковского поступления, потому что платформа удерживает comissão, refunds и promo contributions. Ошибка новичков — декларировать только net payout. Для AT обычно важна gross sale, а комиссия — расход с отдельным документом.' },
        { kind: 'warning', text: 'ATCUD — не «номер заказа Uber». Это уникальный код фискального документа, сформированный на основе серии, сообщённой AT. Скрин из планшета платформы не заменяет fatura.' }
      ]
    },
    {
      id: 'asae-compliance',
      title: '5. ASAE: что проверяют у delivery-ресторана',
      content: [
        { kind: 'paragraph', text: 'ASAE проверяет не только зал, но и cozinha, take-away, dark kitchens, маркировку, гигиену и жалобы потребителей. Delivery увеличивает риск: еда уезжает из-под вашего контроля, но ответственность за безопасность продукта до передачи потребителю всё равно может вернуться к restaurante/operator.' },
        { kind: 'checklist', items: [
          'HACCP records: temperaturas frigoríficos, arcas, hot holding, receção de mercadorias',
          'Rastreabilidade fornecedores: invoices, lotes, datas de validade',
          'Separação cru/cozinhado и prevenção de contaminação cruzada',
          'Plano de limpeza и registo de higienização',
          'Controlo de pragas с договором или внутренними записями',
          'Formação básica de higiene alimentar для персонала',
          'Упаковка food grade, подходящая для горячей/жирной еды',
          'Allergen information доступна до покупки в app и на упаковке/чеке, если нужно',
          'Livro de Reclamações и ответ на reclamação в срок',
          'Цены и promo не вводят в заблуждение: цена, количество, composição блюда соответствуют факту'
        ] },
        { kind: 'warning', text: 'ASAE может прийти после жалобы из app: «food poisoning», аллерген не указан, недовес, плесень, посторонний предмет, отсутствие Livro de Reclamações. Храните фото/логи приготовления спорных заказов минимум до закрытия спора с платформой.' }
      ]
    },
    {
      id: 'disputes-2026',
      title: '6. Типовые споры 2026 и как снизить потери',
      content: [
        { kind: 'paragraph', text: 'Самые частые конфликты — не регистрация, а жизнь после запуска: внезапные refunds, плохой ranking, принудительные акции, задержки выплат, claims по качеству, отключение меню и спор о комиссии. Письменная дисциплина важнее переписки в WhatsApp с менеджером.' },
        { kind: 'checklist', items: [
          'Сохраняйте договор, addenda, emails о commission и promos в отдельной папке',
          'Для каждого disputed order фиксируйте order ID, время, фото пакета, чек/fatura, имя сотрудника',
          'Отключайте app при перегрузе кухни: высокий cancellation rate ухудшает visibility',
          'Не подтверждайте заказ, если ингредиента нет: missing item почти всегда приводит к refund',
          'Проверяйте monthly payout statement до закрытия бухгалтерского месяца',
          'Запрашивайте credit note, если платформа исправляет комиссию или refund',
          'Не соглашайтесь на exclusividade без компенсации: lower commission, marketing budget или guaranteed visibility',
          'При изменении комиссии требуйте письменное notice и дату вступления',
          'Если платформа удержала крупную сумму, направляйте formal complaint через partner support и затем Livro de Reclamações Eletrónico/юриста, если применимо'
        ] },
        { kind: 'paragraph', text: 'Для маленького ресторана безопасная стратегия — начать с 1–2 платформ, ограничить delivery-меню, поднять цены под комиссию, настроить ATCUD-счета с первого дня и еженедельно сверять выплаты. Подключать все apps сразу имеет смысл только если кухня выдерживает поток без падения качества.' }
      ]
    }
  ],
  costs: [
    { label: 'Комиссия платформы за delivery orders (% от заказа, НЕ евро)', amountEURMin: 0, amountEURMax: 0, note: 'Ориентир 25–30% от стоимости заказа (не фиксированная сумма в евро). К комиссии добавляется IVA 23%, но для VAT-taxable ресторана с правом вычета этот IVA на практике вычитается как input VAT (или применяется reverse charge для иностранного поставщика) — не считайте 23% дополнительной издержкой автоматически. Коммерческие условия зависят от города, оборота, логистики и переговоров.' },
    { label: 'Стартовая настройка / фото / оборудование', amountEURMin: 0, amountEURMax: 350, note: 'Может быть бесплатно по акции или включать планшет, фотосъёмку, активацию. Проверяйте договор и возврат оборудования при расторжении.' },
    { label: 'Фискальный software с ATCUD', amountEURMin: 10, amountEURMax: 60, note: 'Типичный месячный диапазон для малого ресторана; цена зависит от POS, количества терминалов и интеграций.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Регистрация на официальной платформе бесплатна; физическая книга покупается отдельно у авторизованных продавцов.' }
  ],
  sources: [
    {
      title: 'ASAE: безопасность пищевых продуктов, fiscalização económica и обязанности операторов',
      url: 'https://www.asae.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária: regras de faturação, QR Code e ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: processamento de faturas e arquivo de documentos fiscalmente relevantes',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 10/2015: RJACSR para comércio, serviços e restauração',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/10-2015-66229840',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
