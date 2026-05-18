export default {
  editorialVoice: 'hackportugal',
  id: 'rental-deposit-fiador',
  categoryId: 'housing_rent',
  title: 'Caução и fiador — депозит и поручитель при аренде',
  tldr: 'В Португалии арендодатель часто просит 2 renda caução + 1–2 renda adiantadas + fiador. С 2026 ориентир по закону: caução для жилья ограничена 2 месячными арендами, предоплата renda — максимум 2 месяца по art. 1076 Código Civil. Значит «4 месяца деньгами на старте» — верхняя легальная конструкция; больше лучше не платить без юриста. Fiador законен, но можно торговаться: seguro de renda/seguro-fiança, гарантия банка, больший доход, трудовой контракт, оплата через recibos de renda.',
  tags: ['аренда', 'caução', 'fiador', 'contrato'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-landlords-ask',
      title: 'Что обычно просят при аренде 🏠',
      content: [
        { kind: 'paragraph', text: 'Caução — залоговый депозит. Он покрывает долги по аренде, неоплаченные коммунальные услуги, ущерб квартире сверх нормального износа и расходы, прямо указанные в contrato de arrendamento.' },
        { kind: 'paragraph', text: 'Fiador — поручитель. Если арендатор не платит, landlord может требовать долг с fiador. Для экспатов это самая частая проблема: многие собственники хотят fiador с доходом и имуществом в Португалии.' },
        { kind: 'checklist', items: [
          'Типичная просьба в Лиссабоне/Порту в 2026: 1 renda текущего месяца + 1–2 renda adiantadas + 1–2 renda caução',
          'Нормальный «потолок денег на входе» по закону: до 2 месяцев caução и до 2 месяцев предоплаты renda',
          'Fiador часто требуют даже при высоком доходе, особенно если нет португальского трудового договора',
          'Собственник может попросить IRS, recibos de vencimento, contrato de trabalho, NIF, паспорт/ВНЖ, выписки банка',
          'Для удалёнщиков и recém-chegados помогают: contrato sem termo, carta da empresa, налоговая декларация, savings statement',
          'Все суммы должны быть прописаны в contrato: что является renda, что caução, что adiantamento',
          'Аренда должна декларироваться в Finanças, а платежи — подтверждаться recibos de renda или банковским переводом'
        ] }
      ]
    },
    {
      id: 'legal-limits',
      title: 'Лимиты по закону: сколько можно брать',
      content: [
        { kind: 'paragraph', text: 'Ключевая норма — art. 1076 Código Civil. Для arrendamento urbano стороны могут договориться о предоплате аренды, но не более чем за 2 месяца. Caução как гарантия исполнения обязательств арендатора ограничена суммой, эквивалентной 2 месячным арендам.' },
        { kind: 'paragraph', text: 'Пример: аренда 1 200 € / месяц. Законная денежная схема на старте может быть: 1 200 € за первый месяц + до 2 400 € renda adiantada + до 2 400 € caução.\n\nНа практике часто считают проще: «2 rendas + 2 cauções» = 4 800 €, где нужно чётко подписать, какая часть является депозитом, а какая — предоплатой.' },
        { kind: 'warning', text: 'Если landlord просит 6–12 месяцев вперёд «потому что вы иностранец», это высокий риск. После изменений рынка и Mais Habitação безопасный ориентир — не превышать 2 месяца предоплаты renda и 2 месяца caução без письменного заключения юриста.' },
        { kind: 'checklist', items: [
          'Caução: максимум 2 месячные аренды для жилья',
          'Renda adiantada: максимум 2 месяца вперёд',
          'Fiador: законом не запрещён, но его ответственность должна быть ясно описана',
          'Seguro de renda или seguro-fiança: допустимая альтернатива, если landlord согласен',
          'Банковская гарантия: возможна, но для новых резидентов часто дорогая или недоступная',
          'Наличные без recibo: не соглашаться',
          'Комиссия агентства: обычно платит landlord, но проверяйте, что вам не навязывают незаконную «taxa»'
        ] }
      ]
    },
    {
      id: 'contract-wording',
      title: 'Что проверить в contrato до перевода денег',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка — отправить депозит по WhatsApp-обещанию. До оплаты нужен проект contrato de arrendamento, identificação do senhorio, подтверждение права сдавать квартиру и IBAN на имя собственника или управляющей компании.' },
        { kind: 'checklist', items: [
          'Полное имя, NIF и адрес senhorio; если собственников несколько — подписи всех или procuração',
          'Адрес квартиры, artigo matricial или caderneta predial, срок аренды и дата начала',
          'Размер renda, срок оплаты, IBAN и назначение платежа',
          'Отдельная строка: caução — сумма, цель, условия возврата',
          'Отдельная строка: rendas adiantadas — за какие месяцы они засчитываются',
          'Кто платит água, luz, gás, internet, condomínio, pequenas reparações',
          'Можно ли держать pet, регистрировать адрес для ВНЖ/AIMA, получать atestado de residência',
          'Условия расторжения: срок уведомления tenant и landlord',
          'Опись мебели, техники, счётчиков и состояние квартиры с фотографиями',
          'Обязанность senhorio регистрировать договор в Finanças и выдавать recibos de renda'
        ] },
        { kind: 'warning', text: 'Не подписывайте пункт «caução не возвращается при любом выезде арендатора». Залог не является штрафом по умолчанию. Удержание должно быть связано с долгом, ущербом или договорной обязанностью, которую можно доказать.' }
      ]
    },
    {
      id: 'fiador-and-alternatives',
      title: 'Если требуют fiador: варианты для экспата',
      content: [
        { kind: 'paragraph', text: 'Идеальный fiador для португальского landlord — резидент Португалии с NIF, стабильным доходом, IRS, recibos de vencimento и иногда недвижимостью. Родственник из России, Бразилии или другой страны обычно не подходит: с него трудно взыскать долг в Португалии.' },
        { kind: 'paragraph', text: 'Ответственность fiador может быть очень широкой. В договоре часто пишут renúncia ao benefício da excussão prévia — отказ от права требовать, чтобы landlord сначала взыскивал долг с арендатора. Тогда fiador может стать первым адресатом претензии.' },
        { kind: 'checklist', items: [
          'Предложите seguro de renda / seguro-fiança: страховая платит landlord при вашей просрочке, вы платите премию',
          'Покажите трудовой контракт, payslips, recibos verdes, IRS/налоговую декларацию и банковские накопления',
          'Предложите автоматический перевод renda и подтверждение дохода 3–4× rent',
          'Попросите заменить fiador на caução в пределах законного лимита, а не добавлять всё сразу',
          'Если есть компания-работодатель, попросите carta de conforto или corporate guarantee',
          'Для студентов: иногда принимают fiador родителей + подтверждение средств, но это зависит от landlord',
          'Для краткого первого жилья используйте serviced apartment или residência с официальным contrato, пока строите историю в Португалии'
        ] },
        { kind: 'warning', text: 'Не просите случайного знакомого стать fiador «формально». Это юридическое обязательство, а не рекомендация. При долге по аренде, juros, судебных расходах и ремонте сумма быстро растёт.' }
      ]
    },
    {
      id: 'return-of-deposit',
      title: 'Возврат caução при выезде',
      content: [
        { kind: 'paragraph', text: 'В законе нет универсального срока «вернуть caução за 7/30 дней». Рабочая практика — вернуть после entrega das chaves, проверки квартиры, сверки счетов água/luz/gás и подписания auto de entrega. Хороший contrato заранее ставит срок, например 15 или 30 дней.' },
        { kind: 'checklist', items: [
          '⚠️ Срок уведомления (aviso) проверьте по contrato и Código Civil arts. 1098/1100: для многих жилых fixed-term contratos он составляет **60 или 120 дней** в зависимости от длительности договора и от того, oposição à renovação это или denúncia. НЕ полагайтесь на «30 дней» по умолчанию — можно опоздать с законным сроком',
          'Отправляйте aviso de denúncia письменно: email с подтверждением, carta registada или другой способ из договора',
          'Сфотографируйте квартиру в день выезда: стены, пол, мебель, техника, счётчики',
          'Составьте auto de entrega das chaves: дата, состояние, показания счётчиков, список ключей',
          'Передайте доказательства оплаты всех rendas и utilities',
          'Попросите письменный расчёт удержаний, если landlord хочет оставить часть caução',
          'Нормальный износ — не ваша ответственность: старение краски, следы обычного использования, амортизация мебели',
          'Не засчитывайте caução как последний месяц аренды без письменного согласия landlord',
          'Если депозит не возвращают — сначала carta registada с prazo, затем Julgado de Paz/адвокат/суд в зависимости от суммы'
        ] },
        { kind: 'warning', text: 'Самая частая потеря caução — отсутствие доказательств состояния квартиры при въезде. Делайте фото/видео в первые 24–48 часов и отправляйте landlord по email, чтобы была дата.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Красные флаги и безопасная оплата 🚩',
      content: [
        { kind: 'checklist', items: [
          'Просят депозит до просмотра квартиры или видеозвонка с показом адреса',
          'IBAN не совпадает с именем собственника/агентства',
          'Отказываются показать caderneta predial, licença/документы или procuração',
          'Говорят, что contrato не нужен, потому что «так дешевле без Finanças»',
          'Просят 6–12 месяцев вперёд без юридической структуры',
          'Не хотят выдавать recibo de renda',
          'Слишком низкая цена для района и срочное давление «сегодня платите или потеряете»',
          'В договоре нет условий возврата caução',
          'Агент просит плату от арендатора за услугу, которую вы не заказывали письменно'
        ] },
        { kind: 'paragraph', text: 'Платите банковским переводом с назначением: “Caução contrato arrendamento [адрес]” или “Renda mês [месяц/год]”. Сохраняйте comprovativo. MB WAY удобен, но для крупных сумм банковский перевод лучше как доказательство.' }
      ]
    }
  ],
  costs: [
    { label: 'Caução при аренде жилья', amountEURMin: 0, amountEURMax: 1840, note: 'Лимит — до 2 месячных аренд. Пример для renda 920 €: максимум 1 840 € caução.' },
    { label: 'Renda adiantada', amountEURMin: 0, amountEURMax: 1840, note: 'Предоплата аренды — максимум 2 месяца. Пример для renda 920 €: максимум 1 840 €.' },
    { label: 'Seguro de renda / seguro-fiança', amountEURMin: 150, amountEURMax: 800, note: 'Ориентир зависит от rent, профиля арендатора и покрытия; landlord должен принять такую замену добровольно.' }
  ],
  sources: [
    {
      title: 'DRE — Lei 6/2006, NRAU, arrendamento urbano',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34468375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Código Civil consolidado, art. 1076 sobre antecipação de rendas e caução',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS art. 41.º, rendimentos prediais e arrendamento',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs41.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — arrendar casa em Portugal',
      url: 'https://eportugal.gov.pt/cidadaos/arrendar-casa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
