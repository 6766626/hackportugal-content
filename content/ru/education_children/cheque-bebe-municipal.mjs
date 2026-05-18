export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-bebe-municipal',
  categoryId: 'education_children',
  title: 'Cheque-Bebé и муниципальные пособия на новорождённых',
  tldr: 'Cheque-Bebé — не национальная выплата, а муниципальная поддержка: ваучер или компенсация расходов на ребёнка. В 2026 Cascais даёт 500 €, Oeiras — 350 €, в малых municípios встречается 250–1 000 €. Обычно заявление подают в Câmara Municipal в течение 6 месяцев после рождения или усыновления. Ключевые условия: ребёнок и хотя бы один родитель с NIF и фактическим residência fiscal/адресом в município, отсутствие долгов перед Câmara и Finanças.',
  tags: ['cheque-bebé', 'município', 'дети', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Cheque-Bebé',
      content: [
        { kind: 'paragraph', text: 'Cheque-Bebé, Incentivo à Natalidade, Apoio à Natalidade или Bebé+ — местная выплата от Câmara Municipal. Это не пособие Segurança Social и не зависит напрямую от вашей визы D1-D8, ВНЖ AIMA или гражданства, если муниципальные правила не вводят отдельные ограничения.' },
        { kind: 'paragraph', text: 'Формат зависит от município: банковский перевод, cartão/vale для покупок у местных торговцев, возмещение по recibos/faturas или смешанная схема. Деньги обычно можно тратить на детские товары, аптеку, одежду, оборудование, иногда услуги saúde/educação.' },
        { kind: 'checklist', items: [
          'Cascais: Cheque-Bebé 500 € на ребёнка, по муниципальной программе Cascais Baby.',
          'Oeiras: Apoio à Natalidade 350 € на ребёнка.',
          'Малые municípios: часто 250–1 000 €, иногда больше при 2-м/3-м ребёнке.',
          'Срок подачи чаще всего 6 месяцев после рождения или усыновления.',
          'Это отдельная мера: она не отменяет abono de família, licença parental и налоговые вычеты IRS.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто обычно имеет право',
      content: [
        { kind: 'paragraph', text: 'Точные условия прописаны в Regulamento Municipal конкретной Câmara. Для экспатов главный риск — не сумма, а доказательство связи с município: адрес, NIF, residência fiscal и отсутствие долгов.' },
        { kind: 'checklist', items: [
          'Ребёнок родился или был усыновлён, и есть assento de nascimento / certidão de nascimento.',
          'Хотя бы один родитель или законный представитель проживает в município.',
          'У родителя есть NIF; часто требуют residência fiscal в этом município в Finanças.',
          'Ребёнок тоже имеет NIF или он должен быть оформлен до выплаты.',
          'Семья зарегистрирована по адресу: contrato de arrendamento, escritura, atestado de residência от Junta de Freguesia или счёт utilities.',
          'Нет долгов перед Câmara Municipal, муниципальными службами и иногда Autoridade Tributária.',
          'Заявление подано в срок: обычно до 6 месяцев после рождения, но в некоторых municípios срок 90 дней или 12 месяцев.',
          'Покупки, если нужна компенсация, сделаны после рождения ребёнка и оформлены fatura с NIF заявителя или ребёнка.'
        ] },
        { kind: 'warning', text: 'Не полагайтесь на «живу рядом с Cascais/Oeiras». Право обычно привязано к конкретному município, а не к району Greater Lisbon. Если ваш адрес в Amadora, Sintra или Lisboa, программа Cascais/Oeiras не применяется.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы: что подготовить заранее',
      content: [
        { kind: 'paragraph', text: 'Список немного различается, но базовый пакет почти одинаков. Лучше собрать его до рождения: после роддома сроки быстро теряются, особенно если нужно получить NIF ребёнка и certidão.' },
        { kind: 'checklist', items: [
          'Документ родителя: паспорт, Cartão de Cidadão, ВНЖ или другой ID.',
          'NIF родителя-заявителя.',
          'NIF ребёнка: оформляется в Finanças или через представителя, если ребёнок ещё младенец.',
          'Certidão de nascimento / assento de nascimento ребёнка.',
          'Comprovativo de morada: atestado de residência от Junta de Freguesia, договор аренды, escritura, счёт água/luz/telecom.',
          'Comprovativo de residência fiscal из Portal das Finanças, если Câmara это требует.',
          'IBAN заявителя, если выплата банковским переводом.',
          'Declaração de não dívida à Autoridade Tributária и Segurança Social — иногда Câmara запрашивает сама, иногда просит загрузить.',
          'Faturas с NIF, если программа работает как reimbursement, а не фиксированный чек.',
          'Formulário municipal, подписанный вручную или через Chave Móvel Digital (CMD), если подача онлайн.'
        ] }
      ]
    },
    {
      id: 'apply',
      title: 'Как подать заявление в Câmara Municipal',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-regulation', title: '1. Найдите страницу своей Câmara', content: [
            { kind: 'paragraph', text: 'Ищите на сайте Câmara слова “Cheque Bebé”, “Apoio à Natalidade”, “Incentivo à Natalidade”, “Bebé+”, “Regulamento Municipal”. Проверяйте год и PDF regulamento: суммы и сроки меняются ежегодно через orçamento municipal.' }
          ] },
          { id: 'confirm-deadline', title: '2. Проверьте срок подачи', content: [
            { kind: 'paragraph', text: 'Типичный срок — 6 месяцев с даты рождения или усыновления. Если ребёнок родился 10 апреля 2026, безопасный дедлайн — 10 октября 2026, если regulamento вашего município не даёт другой срок.' }
          ] },
          { id: 'submit', title: '3. Подайте онлайн или лично', content: [
            { kind: 'paragraph', text: 'Крупные Câmara принимают через balcão online/serviços online с CMD или email с PDF. В малых municípios часто проще идти лично в Balcão Único/Atendimento Municipal.' }
          ] },
          { id: 'track', title: '4. Отслеживайте запросы Câmara', content: [
            { kind: 'paragraph', text: 'Если не хватает документа, Câmara обычно даёт срок на исправление. Проверяйте email и caixa postal. Не отвечать — частая причина отказа.' }
          ] }
        ] }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Примеры сумм в 2026',
      content: [
        { kind: 'paragraph', text: 'Суммы ниже — ориентиры по действующим муниципальным программам на апрель 2026. Перед подачей всё равно открывайте сайт своей Câmara: пособия утверждаются локально и могут зависеть от orçamento, регистрации семьи и наличия долгов.' },
        { kind: 'checklist', items: [
          'Cascais — 500 € по Cheque-Bebé/Cascais Baby: заявка через Câmara Municipal de Cascais, обычно для residentes no concelho.',
          'Oeiras — 350 € по Apoio à Natalidade: заявка через Câmara Municipal de Oeiras, для жителей concelho.',
          'Внутренние районы и малые города — часто 500–1 000 €, иногда с повышением за 2-го/3-го ребёнка.',
          'Некоторые municípios платят не деньгами, а ваучером, который можно использовать только у aderentes locais.',
          'Некоторые программы требуют, чтобы покупки были сделаны в comércio local муниципалитета.'
        ] },
        { kind: 'warning', text: 'Не покупайте всё заранее без проверки правил. Если программа возмещает расходы только по faturas после рождения и только в магазинах concelho, чеки из Amazon, IKEA или другого município могут не принять.' }
      ]
    },
    {
      id: 'combine-benefits',
      title: 'С чем можно сочетать',
      content: [
        { kind: 'paragraph', text: 'Муниципальный Cheque-Bebé обычно можно получать параллельно с национальными выплатами. Это разные уровни: Câmara Municipal, Segurança Social и IRS.' },
        { kind: 'checklist', items: [
          'Abono de família para crianças e jovens — национальное пособие Segurança Social, зависит от дохода agregado familiar.',
          'Subsídio parental — выплаты во время licença parental, если есть взносы в Segurança Social.',
          'Dedução à coleta IRS за dependente — налоговый вычет в годовой декларации IRS.',
          'Reembolso de creche или apoio creche — если есть местные программы у Câmara или Santa Casa.',
          'Cheque-dentista, vacinação и SNS — через número de utente ребёнка.',
          'Муниципальные скидки на transportes, piscina, ATL, escola или manuais — проверяйте отдельно на сайте Câmara.'
        ] },
        { kind: 'warning', text: 'Если вы недавно переехали, сначала приведите в порядок адрес: NIF с правильной residência fiscal в Finanças, contrato/atestado и регистрация ребёнка. Многие отказы связаны не с гражданством, а с тем, что Câmara не видит вас резидентом município.' }
      ]
    }
  ],
  costs: [
    { label: 'Cascais — Cheque-Bebé', amountEUR: 500, note: 'Муниципальная поддержка на ребёнка; условия и форма выплаты по правилам Câmara Municipal de Cascais.' },
    { label: 'Oeiras — Apoio à Natalidade', amountEUR: 350, note: 'Муниципальная поддержка на ребёнка; подача в Câmara Municipal de Oeiras.' },
    { label: 'Типичный диапазон в других municípios', amountEURMin: 250, amountEURMax: 1000, note: 'Суммы сильно различаются; проверяйте regulamento municipal и orçamento на 2026.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Cascais — Cascais Baby / Cheque-Bebé', url: 'https://www.cm-cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Oeiras — Apoio à Natalidade', url: 'https://www.cm-oeiras.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal ePortugal — registo de nascimento и документы ребёнка', url: 'https://eportugal.gov.pt/servicos/registar-nascimento', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Tributária — NIF и certidões no Portal das Finanças', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
