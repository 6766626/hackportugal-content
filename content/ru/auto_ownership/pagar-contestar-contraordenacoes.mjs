export default {
  editorialVoice: 'hackportugal',
  id: 'pagar-contestar-contraordenacoes',
  categoryId: 'auto_ownership',
  title: 'Portal das Contraordenações: оплата и обжалование штрафов онлайн',
  tldr: 'Portal das Contraordenações ANSR — официальный кабинет по дорожным штрафам: вход через Cartão de Cidadão или Chave Móvel Digital, просмотр процессов по NIF, оплата по Multibanco reference, подача defesa/requerimento онлайн и проверка pontos da carta. В 2026 году защита обычно подаётся в течение 15 рабочих дней после уведомления. Рассрочку можно просить для штрафов от 210 €, минимум 50 € за платёж, обычно до 12 частей.',
  tags: ['штрафы', 'ansr', 'contraordenações', 'mb', 'carta'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-portal-does',
      title: 'Что можно сделать на портале ANSR',
      content: [
        { kind: 'paragraph', text: 'Portal das Contraordenações — кабинет Autoridade Nacional de Segurança Rodoviária для дорожных административных дел: превышение скорости, парковка, алкоголь, телефон за рулём, проезд на красный, отсутствие документов и другие contraordenações rodoviárias.' },
        { kind: 'checklist', items: [
          'Посмотреть процессы, привязанные к вашему NIF / документу водителя',
          'Увидеть номер auto de contraordenação, дату, место, статью Código da Estrada и статус дела',
          'Получить данные для оплаты: entidade, referência, montante для Multibanco / homebanking',
          'Подать defesa — письменное возражение против штрафа',
          'Подать requerimento: рассрочка, идентификация фактического водителя, изменение адреса, запрос копий',
          'Загрузить документы и доказательства в PDF',
          'Проверить pontos da carta — баллы водительского удостоверения',
          'Отслеживать уведомления и решения ANSR'
        ] },
        { kind: 'warning', text: 'Портал работает только для дорожных contraordenações ANSR. Штрафы EMEL, муниципальной парковки, Via Verde / portagens, IMT, Finanças или судов могут оплачиваться в других системах.' }
      ]
    },
    {
      id: 'login-and-find-case',
      title: 'Вход: NIF, CC, CMD и поиск процесса',
      content: [
        { kind: 'paragraph', text: 'Зайдите на portalcontraordenacoes.ansr.pt и нажмите autenticação. В 2026 году стандартный вход — через Cartão de Cidadão с PIN/ридером или Chave Móvel Digital (CMD). После входа портал показывает процессы, связанные с вашим идентификатором/NIF.' },
        { kind: 'checklist', items: [
          'Подготовьте NIF и доступ к CMD или Cartão de Cidadão',
          'Если у вас ВНЖ, но нет Cartão de Cidadão, заранее активируйте Chave Móvel Digital через ePortugal / IRN / Espaço Cidadão, если доступно для вашего документа',
          'Проверьте раздел «Os meus processos» или аналогичный список процессов',
          'Сверьте номер процесса с бумажным уведомлением: auto / processo / data da infração',
          'Проверьте prazo: обычно 15 рабочих дней с момента уведомления для оплаты/defesa',
          'Скачайте или сохраните PDF уведомления и detalhes do processo',
          'Если штраф на автомобиль, но за рулём был другой человек, ищите опцию identificação do condutor'
        ] },
        { kind: 'warning', text: 'Если у вас нет CMD/Cartão de Cidadão, онлайн-доступ может не сработать. Тогда используйте данные из бумажного уведомления и обращайтесь в ANSR по контактам из письма: заказным письмом, email/форма или лично через доступные пункты обслуживания. Не ждите окончания срока только из-за проблем с логином.' }
      ]
    },
    {
      id: 'pay-online',
      title: 'Оплата штрафа по Multibanco reference',
      content: [
        { kind: 'paragraph', text: 'В уведомлении и/или на портале указываются entidade, referência и montante. Оплатить можно в Multibanco, homebanking или банковском приложении в разделе «Pagamentos ao Estado / Pagamento de Serviços», в зависимости от банка и типа reference.' },
        { kind: 'substeps', items: [
          { id: 'get-reference', title: '1. Получите reference', content: [
            { kind: 'checklist', items: [
              'Откройте процесс на Portal das Contraordenações',
              'Найдите secção «Pagamento» / «Referência MB»',
              'Сверьте сумму: coima, custas, depósito или pagamento voluntário',
              'Проверьте срок действия reference',
              'Сохраните PDF или скрин с реквизитами'
            ] }
          ] },
          { id: 'pay', title: '2. Оплатите и сохраните доказательство', content: [
            { kind: 'checklist', items: [
              'Введите entidade, referência, montante без округления',
              'Проверьте, что платите именно ANSR / Estado, а не стороннему получателю',
              'Сохраните comprovativo в PDF',
              'Через несколько дней проверьте статус процесса на портале',
              'Если статус не обновился, отправьте comprovativo в ANSR с номером процесса'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Pagamento voluntário pelo mínimo часто закрывает вопрос по coima, но не всегда закрывает дело целиком: при contraordenação grave или muito grave может идти отдельное наказание, например inhibição de conduzir и потеря баллов. Если хотите спорить по существу, сначала оцените, будет ли платёж считаться признанием/добровольной оплатой или depósito.' }
      ]
    },
    {
      id: 'parcelamento',
      title: 'Рассрочка: когда штраф можно разбить',
      content: [
        { kind: 'paragraph', text: 'Для крупных дорожных штрафов можно просить pagamento em prestações. Практическое правило ANSR на 2026 год: сумма штрафа должна быть не ниже 210 €, каждый платёж — минимум 50 €, рассрочка обычно ограничена 12 ежемесячными платежами.' },
        { kind: 'checklist', items: [
          'Проверьте, что montante da coima ≥ 210 €',
          'Рассчитайте платежи так, чтобы каждая prestação была не меньше 50 €',
          'Подайте requerimento через портал в своём процессе или письменно в ANSR',
          'Укажите номер процесса, NIF, имя, адрес, email, телефон',
          'Напишите, сколько prestações просите и почему нужна рассрочка',
          'Приложите документы о доходах/расходах, если они подтверждают необходимость',
          'Дождитесь решения ANSR и новых реквизитов для платежей',
          'Платите строго в сроки: пропуск одной части может сделать всю оставшуюся сумму немедленно подлежащей оплате'
        ] },
        { kind: 'warning', text: 'Не считайте рассрочку одобренной автоматически. Пока ANSR не вынесла despacho/решение, исходный срок оплаты может продолжать иметь значение. Если срок близко, подавайте requerimento сразу после получения уведомления.' }
      ]
    },
    {
      id: 'contest-defense',
      title: 'Как подать defesa онлайн',
      content: [
        { kind: 'paragraph', text: 'Defesa — письменное возражение по делу. Типичный срок по Código da Estrada — 15 рабочих дней с даты уведомления. Считайте именно рабочие дни; выходные и официальные праздники не включаются. Если уведомление получено заказным письмом, датой обычно считается дата вручения или юридически установленная дата фикции вручения.' },
        { kind: 'checklist', items: [
          'Откройте нужный processo на портале',
          'Выберите «Apresentar defesa» / «Requerimento»',
          'Пишите на португальском; английский или русский лучше не использовать',
          'Укажите номер процесса, NIF, номер carta de condução, адрес и email',
          'Опишите факты: почему нарушение не совершалось, ошибка радара/места/номера, неверная идентификация водителя, нарушение процедуры уведомления',
          'Приложите доказательства: фото, GPS, recibos, парковочные талоны, билеты, договор аренды автомобиля, declaração работодателя',
          'Если был другой водитель, подайте identificação do condutor с его данными и доказательством',
          'Если просите свидетелей, укажите имя, адрес и что именно они подтверждают',
          'Сохраните comprovativo de submissão с датой и часом'
        ] },
        { kind: 'warning', text: 'Подача defesa не гарантирует приостановку всех последствий. При серьёзных нарушениях ANSR может всё равно вынести решение о coima, custas, inhibição de conduzir и снятии баллов. Для alcool, acidente, excesso grande de velocidade, reincidência или риска потери прав лучше показать дело advogado.' }
      ]
    },
    {
      id: 'points-and-after-decision',
      title: 'Баллы, решение и что делать дальше',
      content: [
        { kind: 'paragraph', text: 'В Португалии у водителя обычно 12 pontos da carta. Баллы снимаются после окончательного решения, а не просто в момент радара. На Portal das Contraordenações можно проверить текущий saldo de pontos и историю санкций.' },
        { kind: 'checklist', items: [
          'Grave contraordenação обычно снимает 2 или 3 балла, в зависимости от нарушения',
          'Muito grave обычно снимает 4 или 5 баллов',
          'Дорожное преступление может снять 6 баллов',
          'При 4–5 баллах ANSR может обязать пройти ação de formação',
          'При 1–3 баллах может быть назначен novo exame de condução',
          'При 0 баллов водительское удостоверение аннулируется, и получить новое можно не сразу',
          'Проверяйте портал после оплаты или решения: обновление статуса не всегда мгновенное',
          'Сохраняйте все comprovativos минимум до окончательного закрытия процесса'
        ] },
        { kind: 'paragraph', text: 'Если пришло decisão condenatória и вы не согласны, следующий шаг — impugnação judicial в установленный срок, обычно через tribunal competente. Это уже не простая онлайн-жалоба: проверьте prazo в решении ANSR и получите юридическую консультацию.' }
      ]
    }
  ],
  costs: [
    { label: 'Доступ к Portal das Contraordenações', amountEUR: 0, note: 'Официальный портал ANSR бесплатный; платите только сам штраф/coima, custas или санкции по делу.' },
    { label: 'Минимальная сумма штрафа для запроса рассрочки', amountEUR: 210, note: 'Практическое пороговое значение для pagamento em prestações в 2026 году.' },
    { label: 'Минимальный платёж по рассрочке', amountEUR: 50, note: 'Каждая prestação должна быть не меньше 50 €; обычно максимум 12 ежемесячных платежей.' }
  ],
  sources: [
    { title: 'Portal das Contraordenações ANSR', url: 'https://portalcontraordenacoes.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: consultar o Portal das Contraordenações', url: 'https://www2.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada — Decreto-Lei 114/94, artigos sobre contraordenações, pagamento, defesa e pontos', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
