export default {
  editorialVoice: 'hackportugal',
  id: 'ctt-multibanco-pagamentos',
  categoryId: 'banking',
  title: 'Multibanco: оплата ЖКХ, штрафов, налогов и пополнение мобильного',
  tldr: 'Multibanco — не только банкомат для наличных. В 2026 через него обычно платят воду, свет, интернет, condomínio, штрафы, IMI/IUC/IRS/IVA, пополняют мобильный, делают transferências, вносят чеки и оплачивают покупки по entidade + referência. Для большинства платежей нужен NIF только на счёте/уведомлении, а не в банкомате. Комиссия для плательщика чаще 0 €, но переводы и операции с чеками зависят от тарифа банка.',
  tags: ['multibanco', 'платежи', 'налоги', 'mbway'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-multibanco',
      title: 'Что умеет Multibanco в 2026',
      content: [
        { kind: 'paragraph', text: 'Multibanco — португальская сеть банкоматов и платёжных сервисов SIBS. В меню банкомата можно не только снять деньги, но и оплатить счета по referência, налоги, штрафы, услуги государства, пополнить SIM-карту, сделать банковский перевод, запросить saldo/movimentos и иногда внести чек.' },
        { kind: 'checklist', items: [
          'Оплата ЖКХ: вода, электричество, газ, интернет, condomínio — обычно через Pagamento de Serviços/Compras',
          'Оплата налогов: IMI, IUC, IRS, IVA, Segurança Social — по данным из Portal das Finanças или уведомления',
          'Оплата штрафов: trânsito, парковка, полиция, portagens — если в уведомлении есть entidade/referência/valor',
          'Пополнение мобильного: MEO, NOS, Vodafone, Lycamobile и другие — через Carregamentos/Telemóveis',
          'Transferências: перевод на IBAN или по внутреннему меню банка, лимиты зависят от банка',
          'Depósito de cheques: только в банкоматах с функцией депозитов, часто — своего банка',
          'Pagamentos ao Estado: отдельный пункт меню для некоторых платежей государству',
          'MB WAY: отдельное приложение SIBS, но привязка карты часто подтверждается через Multibanco'
        ] },
        { kind: 'warning', text: 'Multibanco не отменяет сроки платежа. Если referência истекла, банкомат может отклонить платёж или принять его как просроченный только в специальных случаях. Для налогов и штрафов всегда проверяйте prazo limite на документе.' }
      ]
    },
    {
      id: 'pay-reference',
      title: 'Оплата по entidade + referência + valor',
      content: [
        { kind: 'paragraph', text: 'Самый частый формат португальских счетов — три поля: Entidade, Referência, Montante/Valor. Их печатают в PDF-счёте, письме, email, SMS или в личном кабинете поставщика. Это работает для коммуналки, интернет-провайдеров, школ, страховок, condomínio, интернет-магазинов и многих государственных платежей.' },
        { kind: 'substeps', items: [
          { id: 'insert-card', title: '1. Вставьте карту и выберите язык', content: [
            { kind: 'paragraph', text: 'В большинстве банкоматов есть português и English. Русского обычно нет. Введите PIN и выберите Pagamentos e Outros Serviços или Pagamentos.' }
          ] },
          { id: 'choose-payment', title: '2. Выберите Pagamento de Serviços/Compras', content: [
            { kind: 'paragraph', text: 'Название может немного отличаться по банку, но ищите Serviços/Compras. Для налогов иногда лучше использовать Pagamentos ao Estado, если такой пункт есть.' }
          ] },
          { id: 'enter-codes', title: '3. Введите entidade, referência и сумму', content: [
            { kind: 'checklist', items: [
              'Entidade — обычно 5 цифр',
              'Referência — обычно 9 цифр, но формат зависит от эмитента',
              'Montante/Valor — сумма в евро и центах',
              'Не округляйте: если счёт на 47,38 €, вводите 47,38 €',
              'Проверьте получателя на экране перед подтверждением',
              'Сохраните talão/comprovativo или сфотографируйте экран подтверждения'
            ] }
          ] },
          { id: 'keep-proof', title: '4. Сохраните comprovativo', content: [
            { kind: 'paragraph', text: 'Для спорных платежей — особенно штрафов, налогов, condomínio и аренды — храните comprovativo минимум до закрытия вопроса. Для налогов разумно держать PDF/фото вместе с уведомлением из Finanças.' }
          ] }
        ] },
        { kind: 'warning', text: 'Если сумма уже заполнена на счёте, не меняйте её без причины. Для некоторых referências сумма является частью контрольной логики: неверный valor приведёт к отказу или к платежу, который поставщик не сможет автоматически сопоставить.' }
      ]
    },
    {
      id: 'taxes-and-fines',
      title: 'Налоги, IMI/IUC и штрафы',
      content: [
        { kind: 'paragraph', text: 'Для налогов не нужно знать IBAN налоговой. В Portal das Finanças формируется documento de cobrança с referência de pagamento, суммой и сроком. По нему оплачивают IMI, IUC, IRS, IVA, coimas и другие суммы. В банкомате используйте Pagamentos ao Estado, если доступно, или Pagamento de Serviços/Compras — ориентируйтесь на формат документа.' },
        { kind: 'checklist', items: [
          'IMI: уведомление появляется в Portal das Finanças; платёж частями зависит от суммы налога',
          'IUC: платится ежегодно до конца месяца регистрации автомобиля; referência берётся в Finanças',
          'IRS: доплата по годовой декларации оплачивается по nota de cobrança',
          'IVA/recibos verdes: самозанятые платят по документу cobrança, если есть сумма к оплате',
          'Coimas Finanças: штрафы налоговой оплачиваются по данным в уведомлении',
          'Штрафы trânsito: используйте данные из письма ANSR/PSP/GNR или уведомления на месте',
          'Парковка/EMEL/муниципальные штрафы: способ зависит от муниципалитета, часто есть Multibanco reference',
          'Portagens/SCUT: если есть referência, платите как serviços; иногда проще через CTT/Payshop/онлайн-сервис'
        ] },
        { kind: 'warning', text: 'Для штрафов за trânsito оплата может означать depósito или pagamento voluntário, но не всегда закрывает право на защиту/обжалование. Читайте письмо: сроки, реквизиты и юридический эффект оплаты указаны там, а не в меню Multibanco.' },
        { kind: 'warning', text: 'Налоговые сроки в 2026 остаются жёсткими: просрочка может дать juros de mora и coima. Если referência не работает, проверьте в Portal das Finanças, не истёк ли prazo или не создан ли новый documento de cobrança.' }
      ]
    },
    {
      id: 'mobile-and-utilities',
      title: 'Мобильная связь и коммунальные счета',
      content: [
        { kind: 'paragraph', text: 'Пополнение мобильного делается через Carregamentos или Telemóveis. Вы выбираете оператора, вводите номер и сумму. Для предоплаченных SIM деньги обычно приходят быстро, но у виртуальных операторов и международных SIM может быть задержка или отдельное меню.' },
        { kind: 'checklist', items: [
          'MEO/NOS/Vodafone: обычно есть в меню Carregamentos',
          'Минимальная сумма пополнения зависит от оператора и тарифа; часто встречаются 5 €, 7,50 €, 10 € и выше',
          'Проверьте номер дважды: ошибочное пополнение чужого номера банк обычно не возвращает автоматически',
          'Для домашнего интернета и ТВ чаще используйте entidade/referência из счёта, а не меню мобильных пополнений',
          'Счета E-REDES, EDP, Galp, Endesa, Iberdrola, Águas municipais обычно оплачиваются как serviços',
          'Condomínio может присылать referência Multibanco или просить банковский перевод на IBAN',
          'Аренда жилья обычно платится банковским переводом, а не через Multibanco reference, если арендодатель не дал referência'
        ] },
        { kind: 'paragraph', text: 'Если у вас подключён débito direto, счёт списывается автоматически. Multibanco тогда нужен для разовой оплаты, если прямое списание не прошло, вы сменили банк или поставщик прислал отдельную cobrança.' },
        { kind: 'warning', text: 'Не платите повторно, если после оплаты счёт всё ещё висит в приложении поставщика. Обновление статуса может занять 1–3 рабочих дня. Сначала проверьте движения по счёту и comprovativo.' }
      ]
    },
    {
      id: 'transfers-cheques-mbway',
      title: 'Переводы, чеки и MB WAY',
      content: [
        { kind: 'paragraph', text: 'Через Multibanco можно делать transferências, но доступные типы и лимиты задаёт ваш банк. Иногда банкомат предлагает перевод только между счетами того же банка или по IBAN; иногда перевод удобнее сделать в приложении банка.' },
        { kind: 'checklist', items: [
          'Transferência normal: может идти в рабочий день/следующий рабочий день, зависит от банка и схемы',
          'Transferência imediata: в Португалии широко доступна, но наличие и комиссия зависят от банка и канала',
          'Лимиты по сумме: смотрите contrato/precário банка; для новых клиентов лимиты часто ниже',
          'Комиссия: операции в Multibanco для потребителя часто бесплатны, но переводы могут тарифицироваться банком',
          'Depósito de cheques: ищите банкомат с функцией depósito; обычно нужен конверт/сканирование и счёт получателя',
          'Зачисление чека не мгновенное: банк может показать saldo contabilístico и saldo disponível по-разному',
          'MB WAY привязывается к номеру телефона и карте; подтверждение может потребовать банкомат или app банка',
          'Pagamentos MB WAY и pedidos de dinheiro не то же самое, что Multibanco reference'
        ] },
        { kind: 'warning', text: 'Чеки в Португалии в 2026 всё ещё встречаются, но это не мгновенные деньги. Не отдавайте товар/ключи только потому, что человек “внёс чек”: дождитесь доступного баланса или используйте transferência imediata.' }
      ]
    },
    {
      id: 'safety-and-errors',
      title: 'Безопасность и частые ошибки',
      content: [
        { kind: 'paragraph', text: 'Главное правило: банкомат исполняет то, что вы подтвердили. При ошибке в referência, сумме или номере телефона возврат идёт не через “отмену в банкомате”, а через банк, поставщика услуги или получателя.' },
        { kind: 'checklist', items: [
          'Закрывайте PIN рукой; в туристических местах проверяйте накладки на картоприёмнике',
          'Не принимайте помощь незнакомцев у банкомата, особенно при “зависшей” карте',
          'Сохраняйте comprovativo по налогам, штрафам, аренде, condomínio и крупным счетам',
          'Сверяйте entidade и referência с оригинальным PDF/письмом, а не с пересланным скриншотом',
          'При подозрении на фишинг звоните в банк по номеру с карты/сайта, не по SMS',
          'Если банкомат не выдал наличные, но списал деньги, сразу зафиксируйте номер ATM, место, время и сумму',
          'Если карта удержана, блокируйте её в приложении банка или по hotline, не отходя далеко от банкомата',
          'Для платежей государству проверяйте статус в Portal das Finanças через 1–3 рабочих дня'
        ] },
        { kind: 'warning', text: 'Entidade/referência в фишинговом письме может выглядеть “португальски”. Если речь о налогах, штрафе, CTT, portagens или банке — заходите в официальный кабинет вручную, а не по ссылке из SMS/email.' }
      ]
    }
  ],
  costs: [
    { label: 'Оплата serviços/compras по Multibanco reference', amountEUR: 0, note: 'Обычно бесплатно для плательщика; комиссию платит получатель/мерчант, но редкие исключения зависят от банка и услуги.' },
    { label: 'Пополнение мобильного через Multibanco', amountEUR: 0, note: 'Комиссия банкомата обычно 0 €; минимальная сумма пополнения зависит от оператора и тарифа.' },
    { label: 'Банковский перевод через Multibanco', amountEURMin: 0, amountEURMax: 2, note: 'Ориентир для частных клиентов; точная комиссия и лимиты указаны в precário вашего банка.' },
    { label: 'Depósito de cheque', amountEURMin: 0, amountEURMax: 5, note: 'Может быть бесплатно или тарифицироваться банком; зачисление не мгновенное.' }
  ],
  sources: [
    { title: 'SIBS — сеть Multibanco и платёжные сервисы', url: 'https://www.sibs.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — банковские платежи и права пользователей', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — pagamentos ao Estado и documentos de cobrança', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANSR — штрафы за дорожные нарушения и pagamento voluntário', url: 'https://www.ansr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
