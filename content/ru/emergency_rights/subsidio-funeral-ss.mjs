export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-funeral-ss',
  categoryId: 'emergency_rights',
  title: 'Subsídio de Funeral — пособие на погребение от Segurança Social',
  tldr: 'Subsídio de Funeral — разовая выплата Segurança Social на часть расходов на похороны: в 2026 году стандартная сумма — 261,25 €. Заявление подают в течение 6 месяцев (отсчёт идёт с первого дня месяца, следующего за месяцем смерти) через Segurança Social Direta / gov.pt или в balcão da Segurança Social. Для супруга, детей, родителей и других прямых родственников это не проверка бедности: важны родство, факт оплаты похорон и статус умершего как beneficiário da Segurança Social.',
  tags: ['funeral', 'segurança-social', 'пособие', 'niss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за выплата',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Funeral — не компенсация всей стоимости похорон, а фиксированная разовая помощь Segurança Social. На 2026 год сумма по официальной странице Segurança Social — 261,25 €.' },
        { kind: 'paragraph', text: 'Обычно её просит человек, который оплатил похороны умершего beneficiário da Segurança Social: супруг/партнёр в união de facto, ребёнок, родитель или другой родственник по прямой линии. Для таких близких родственников выплата не является means-tested: Segurança Social не оценивает ваш доход как условие права.' },
        { kind: 'warning', text: 'Не путайте с subsídio por morte и reembolso de despesas de funeral. Subsídio por morte — отдельная, более крупная выплата пережившим членам семьи при смерти застрахованного/пенсионера. Reembolso de despesas de funeral применяется в других сценариях и зависит от фактических расходов. Если не уверены, подавайте через serviço gov.pt/Segurança Social: система и сотрудник направят к правильной форме.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Кто может подать заявление',
      content: [
        { kind: 'checklist', items: [
          'Заявитель реально оплатил похороны: фatura/recibo должны быть на его имя или явно подтверждать оплату им.',
          'Умерший был beneficiário da Segurança Social или подпадал под режим, указанный Segurança Social для этой выплаты.',
          'Заявитель — супруг, бывший супруг при применимых условиях, pessoa em união de facto, ребёнок, родитель, дедушка/бабушка, внук/внучка или другой родственник, если он оплатил funeral.',
          'Для супруга, родителей и детей не требуется подтверждать низкий доход.',
          'У заявителя должен быть NISS; если его нет, сначала оформляют NISS или подают с идентификацией в отделении Segurança Social.',
          'Нужен португальский IBAN или счёт SEPA, на который Segurança Social сможет перечислить выплату.',
          'Иностранцы с ВНЖ, визой, Cartão de Cidadão, CRUE или другим законным документом могут подавать на тех же условиях, если выполняются требования по умершему и расходам.'
        ] },
        { kind: 'paragraph', text: 'Если похороны оплатил не родственник — например, друг, сосед или работодатель, — Segurança Social может рассматривать ситуацию иначе и запросить дополнительные доказательства. В таком случае заранее сохраните все документы об оплате и переписку с funeral agency.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы: что подготовить',
      content: [
        { kind: 'checklist', items: [
          'Документ заявителя: Cartão de Cidadão, ВНЖ, паспорт с визой или другой ID.',
          'NISS заявителя и, если есть, NISS умершего.',
          'Assento de óbito / certidão de óbito или другой официальный документ о смерти.',
          'Fatura и recibo от agência funerária: желательно с NIF заявителя и данными умершего.',
          'Доказательство родства: certidão de nascimento, certidão de casamento, união de facto или документы из Conservatória/IRN.',
          'IBAN заявителя: банковская справка, выписка или подтверждение в Segurança Social Direta.',
          'Если действует представитель: procuração и ID представителя.',
          'Если документы не португальские: перевод и, когда требуется, apostila / legalização.'
        ] },
        { kind: 'warning', text: 'Главная ошибка — счёт за похороны оформлен на другого человека. Segurança Social платит тому, кто доказал расходы. Если платили вы, просите agência funerária сразу оформить fatura/recibo на ваш NIF.' }
      ]
    },
    {
      id: 'deadline-and-application',
      title: 'Срок и подача заявления',
      content: [
        { kind: 'paragraph', text: 'Заявление нужно подать в течение 6 месяцев; срок отсчитывается с первого дня месяца, следующего за месяцем смерти. Не ждите окончания наследственных процедур: пособие привязано к расходам на похороны и сроку подачи, а не к partilha de herança.' },
        { kind: 'substeps', items: [
          { id: 'online', title: 'Онлайн через gov.pt / Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Зайдите на услугу “Requerer o subsídio de funeral à Segurança Social” на gov.pt. Для входа обычно используют Chave Móvel Digital (CMD), Cartão de Cidadão или доступ к Segurança Social Direta.' },
            { kind: 'checklist', items: [
              'Проверьте свои данные: имя, NISS, NIF, адрес, IBAN.',
              'Укажите данные умершего и дату смерти.',
              'Загрузите certidão de óbito и документы funeral agency.',
              'Приложите доказательство родства, если система не видит его автоматически.',
              'Сохраните comprovativo de submissão — он нужен при споре о сроке.'
            ] }
          ] },
          { id: 'counter', title: 'Лично в Segurança Social', content: [
            { kind: 'paragraph', text: 'Если нет CMD, нет доступа к Segurança Social Direta или документы сложные, идите в balcão da Segurança Social. Возьмите оригиналы и копии. В крупных городах лучше заранее записаться через Linha Segurança Social или e-Clic/serviços online, если доступно.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'После подачи: выплата и отказы',
      content: [
        { kind: 'paragraph', text: 'После одобрения деньги перечисляют на IBAN заявителя.\n\nСрок обработки зависит от района и полноты документов: если всё загружено корректно, обычно быстрее; если не хватает recibo, документа о родстве или IBAN, Segurança Social пришлёт запрос на исправление.' },
        { kind: 'checklist', items: [
          'Следите за уведомлениями в Segurança Social Direta и письмами на адрес регистрации.',
          'Если пришёл pedido de elementos, отвечайте в указанный срок.',
          'Если отказали из-за документов, запросите письменное основание отказа.',
          'Проверьте, не полагается ли семье вместо этого subsídio por morte.',
          'Если умерший получал пенсию, уточните прекращение пенсии и возможные survivor benefits.',
          'Сохраняйте счета за похороны минимум несколько лет: они могут понадобиться для наследства или налоговых вопросов.'
        ] },
        { kind: 'warning', text: 'Пособие небольшое — 261,25 €, а средний счёт похоронного агентства (funeral agency invoice) в Португалии часто существенно выше. Не планируйте похороны исходя из того, что Segurança Social покроет расходы полностью.' }
      ]
    }
  ],
  costs: [
    { label: 'Subsídio de Funeral', amountEUR: 261.25, note: 'Фиксированная разовая выплата Segurança Social в 2026 году.' },
    { label: 'Подача заявления', amountEUR: 0, note: 'Через gov.pt/Segurança Social Direta или balcão da Segurança Social госпошлина не взимается.' }
  ],
  sources: [
    {
      title: 'Segurança Social: Subsídio de Funeral',
      url: 'https://www.seg-social.pt/subsidio-de-funeral',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'gov.pt: Requerer o subsídio de funeral à Segurança Social',
      url: 'https://www.gov.pt/servicos/requerer-o-subsidio-de-funeral-a-seguranca-social',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
