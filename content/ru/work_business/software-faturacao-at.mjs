export default {
  editorialVoice: 'hackportugal',
  id: 'software-faturacao-at',
  categoryId: 'work_business',
  title: 'Программы выставления счетов с сертификацией AT: QR + ATCUD',
  tldr: 'В Португалии invoices/recibos должны оформляться через AT-certified software, Portal das Finanças или ручные типографские бланки — выбор зависит от оборота, учёта и способа работы. QR-код обязателен на fiscal documents с 2022 года, ATCUD — с 01.01.2023. Серии документов надо заранее сообщать в AT, иначе программа не получит validation code. Для бизнеса важно не только выдать счёт клиенту, но и передать его в e-Fatura обычно до 5-го числа следующего месяца.',
  tags: ['faturação', 'atcud', 'qr', 'efatura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое AT-certified invoicing software',
      content: [
        { kind: 'paragraph', text: 'AT-certified software — программа для выставления invoices, faturas-recibo, notas de crédito, notas de débito и других fiscal documents, сертифицированная Autoridade Tributária e Aduaneira. AT публикует официальный список таких программ на Portal das Finanças.' },
        { kind: 'paragraph', text: 'Сертификация означает не «удобная бухгалтерия», а соответствие фискальным требованиям: неизменяемая нумерация, SAF-T PT, QR-код, ATCUD, audit trail, корректные tax fields, экспорт и/или отправка данных в AT.' },
        { kind: 'checklist', items: [
          'Проверяйте программу в официальном списке AT, а не только по рекламе на сайте поставщика',
          'Уточняйте, поддерживает ли она Portuguese VAT/IVA, exemptions и reverse charge',
          'Проверяйте генерацию SAF-T PT и автоматическую comunicação de faturas',
          'Проверяйте ATCUD: программа должна уметь сообщать series в AT или импортировать validation code',
          'Для recibos verdes часто достаточно Portal das Finanças, если у вас простая деятельность',
          'Для lojas, e-commerce, restaurant, services с большим потоком документов обычно нужна коммерческая программа',
          'Счёт в PDF, сделанный в Word/Canva/Excel, не является валидным fiscal document'
        ] }
      ]
    },
    {
      id: 'mandatory-or-optional',
      title: 'Когда программа обязательна, а когда можно без неё',
      content: [
        { kind: 'paragraph', text: 'В 2026 году ключевой вопрос — как вы выставляете документы и какой у вас режим. Если вы используете компьютерную программу для faturação, она должна быть AT-certified. Нельзя заменить её обычной таблицей, шаблоном PDF или иностранной invoicing app без сертификации AT.' },
        { kind: 'checklist', items: [
          'Обязательна AT-certified программа, если вы используете software для выставления invoices в Португалии',
          'Обязательна при organised accounting или бизнес-процессах, где документы выпускаются через систему',
          'Практически обязательна для Lda, магазинов, ресторанов, онлайн-продаж, складского учёта и POS',
          'Может быть не нужна отдельная программа, если вы self-employed и выставляете faturas-recibo прямо в Portal das Finanças',
          'Могут использоваться ручные типографские бланки от autorized print shops, но это неудобно и не подходит большинству digital-бизнесов',
          'Если оборот растёт и документов много, переход на программу лучше сделать до хаоса в нумерации и SAF-T',
          'Иностранные Stripe/PayPal/Shopify receipts не заменяют португальскую invoice, если операция должна быть задокументирована по правилам PT'
        ] },
        { kind: 'warning', text: 'Не путайте «счёт клиенту» и «документ для AT». Коммерческий invoice из зарубежной системы может быть полезен для клиента, но для португальского налогового учёта нужен документ, выпущенный допустимым способом: AT-certified software, Portal das Finanças или разрешённые manual invoices.' }
      ]
    },
    {
      id: 'qr-atcud',
      title: 'QR-код и ATCUD: что должно быть на документе',
      content: [
        { kind: 'paragraph', text: 'QR-код обязателен на invoices и других fiscally relevant documents с 2022 года. Он содержит структурированные данные документа: NIF эмитента, тип документа, номер, дату, base taxable amounts, IVA, totals и другие поля по спецификации AT.' },
        { kind: 'paragraph', text: 'ATCUD обязателен с 01.01.2023. Это уникальный код документа, который выглядит как связка validation code серии и порядкового номера: например, ATCUD: XY7K9P-000123. Он печатается/показывается на документе рядом с QR-кодом.' },
        { kind: 'checklist', items: [
          'Перед использованием новой серии документов её надо сообщить в AT',
          'AT выдаёт validation code для этой series',
          'Программа соединяет validation code + sequential number и формирует ATCUD',
          'ATCUD должен быть на fatura, fatura-recibo, nota de crédito, nota de débito и других relevant documents',
          'QR-код должен быть читаемым в PDF и на бумаге',
          'Нельзя вручную «придумать» ATCUD без регистрации series в AT',
          'При смене программы, года, магазина, POS или типа документа проверьте, не нужна ли новая series',
          'Аннулирование или credit note не должны ломать последовательность нумерации'
        ] },
        { kind: 'warning', text: 'Самая частая ошибка мигрантов-предпринимателей: начать выставлять документы в новой программе, не активировав series в AT. Визуально invoice может выглядеть нормально, но без корректного ATCUD это фискальный риск.' }
      ]
    },
    {
      id: 'efatura-issuer-side',
      title: 'e-Fatura со стороны продавца: выдать счёт недостаточно',
      content: [
        { kind: 'paragraph', text: 'После выпуска invoices данные должны попасть в AT/e-Fatura. Это обязанность issuer-side: продавца, self-employed или компании. Клиент может видеть документ в своём e-Fatura, но это не заменяет вашу обязанность корректно сообщить документ.' },
        { kind: 'checklist', items: [
          'Стандартный срок comunicação de faturas — до 5-го числа месяца, следующего за месяцем выпуска документа',
          'Например, документы за апрель 2026 обычно должны быть сообщены до 05.05.2026',
          'Передача возможна через webservice программы, SAF-T PT upload или ручной ввод на Portal das Finanças',
          'Хорошая программа отправляет данные автоматически или напоминает о сроке',
          'После отправки проверяйте статус: rejected files и warnings надо исправлять',
          'Credit notes тоже должны быть сообщены, а не просто отправлены клиенту',
          'Если вы работаете с accountant, договоритесь письменно: кто именно отправляет SAF-T и до какой даты',
          'Не ждите IRS/IRC периода: e-Fatura — ежемесячная операционная обязанность'
        ] },
        { kind: 'warning', text: 'Штрафы обычно возникают не из-за отсутствия красивого PDF, а из-за несообщённых, поздно сообщённых или технически некорректных документов. Для малого бизнеса это особенно болезненно: ошибки копятся каждый месяц.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Как выбрать программу в 2026 году',
      content: [
        { kind: 'paragraph', text: 'Выбор зависит от модели бизнеса. Для одного freelancer с 5 invoices в месяц достаточно Portal das Finanças или базовой программы. Для магазина, ресторана, маркетплейса или B2B services с retenção na fonte, exemptions и foreign clients нужна система, которую понимает ваш contabilista.' },
        { kind: 'checklist', items: [
          'Найдите программу в официальном списке AT-certified software',
          'Проверьте поддержку QR + ATCUD + comunicação de séries',
          'Уточните, есть ли SAF-T PT export и автоматическая отправка в AT',
          'Проверьте Portuguese tax scenarios: IVA 23%/13%/6%, isenções, reverse charge, intra-EU, экспорт',
          'Проверьте поддержку NIF иностранного клиента и клиента без NIF',
          'Спросите accountant, сможет ли он импортировать данные из этой системы',
          'Проверьте роли пользователей: owner, accountant, cashier, sales',
          'Проверьте архив документов минимум на срок, который требует налоговый учёт',
          'Для e-commerce проверьте интеграции с Shopify, WooCommerce, Stripe, POS и inventory',
          'Не выбирайте только по цене: миграция series и исправление неправильных invoices стоят дороже'
        ] }
      ]
    },
    {
      id: 'practical-setup',
      title: 'Мини-чеклист запуска',
      content: [
        { kind: 'paragraph', text: 'Перед первым invoice настройте систему вместе с accountant. Ошибки в первом месяце потом трудно исправлять, особенно если уже отправлен SAF-T или клиент использовал invoice в своём учёте.' },
        { kind: 'checklist', items: [
          'Проверьте NIF, legal name, morada fiscal и CAE/CIRS activity',
          'Настройте IVA regime: normal, exemption under art. 53 CIVA или другой applicable regime',
          'Создайте отдельные series для типов документов и точек продаж, если нужно',
          'Сообщите series в AT и получите validation code',
          'Сделайте тестовый документ и проверьте QR + ATCUD',
          'Настройте email templates, но не меняйте fiscal fields вручную после выпуска',
          'Настройте monthly comunicação de faturas до 5-го числа',
          'Дайте accountant доступ или договоритесь об экспорте SAF-T',
          'Храните копии документов и подтверждения отправки в AT',
          'При смене программы заранее планируйте закрытие старых series и запуск новых'
        ] },
        { kind: 'warning', text: 'Если вы на recibos verdes и используете Portal das Finanças, отдельный софт может быть не нужен. Но если вы начинаете принимать массовые платежи, продавать товары или выпускать много документов, обсудите переход на сертифицированную программу до старта продаж.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças для recibos verdes', amountEUR: 0, note: 'Подходит для простых self-employed invoices/receipts, но не заменяет полноценную POS/e-commerce систему.' },
    { label: 'Базовая AT-certified программа', amountEURMin: 5, amountEURMax: 25, note: 'Обычно цена в месяц за freelancer/small business; функции ATCUD, SAF-T и e-Fatura проверяйте отдельно.' },
    { label: 'POS/e-commerce/retail пакет', amountEURMin: 20, amountEURMax: 80, note: 'Цена зависит от касс, пользователей, склада, интеграций и поддержки accountant.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: programas de faturação certificados',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Pages/programas-faturacao.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: código QR e ATCUD',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Pages/codigo-qr-atcud.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: apoio ao contribuinte — faturação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
