export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Продление ВНЖ через онлайн-портал AIMA',
  tldr: 'В 2026 продление ВНЖ нужно начинать онлайн, но маршрут зависит от даты истечения и типа карты. Обычные карты, истекшие начиная с 01.07.2025, продлеваются через portal-renovacoes.aima.gov.pt. Старые карты, истекшие с 22.02.2020 по 30.06.2025, идут через services.aima.gov.pt/RAR/reqrenew или письмо AIMA/EMAIMA; CPLP, ARI и карты родственников граждан ЕС имеют отдельные правила. По gov.pt запрос можно подать с 90 дней до окончания карты. Для карт, истёкших после 30.06.2025, право проживания сохраняется 6 месяцев после даты истечения; если за это время вы начали продление и имеете comprovativo/recibo, AIMA считает пребывание законным до завершения процесса — даже после этих 6 месяцев. После регистрации запроса и оплаты AIMA выдаёт comprovativo на 180 дней: носите его вместе с истёкшей картой.',
  tags: ['aima', 'внж', 'продление', 'онлайн'],
  estimatedReadMinutes: 10,
  recentlyChangedAt: '2026-06-23',
  changeSummary: 'Исправлена трактовка 6-месячного срока (Decreto Regulamentar 84/2007 ст. 63.º n.º 14) и добавлена ситуация после дедлайна 15.04.2026 по разъяснениям AIMA.',
  steps: [
    {
      id: 'which-portal',
      title: 'Сначала выберите правильный маршрут',
      content: [
        { kind: 'paragraph', text: 'В 2026 у AIMA нет одного универсального входа для всех продлений. Если выбрать неверный портал, процесс может не появиться или уйти в неправильный канал.' },
        { kind: 'checklist', items: [
          '✅ ВНЖ истёк или истекает с 01.07.2025: основной маршрут — portal-renovacoes.aima.gov.pt',
          '✅ ВНЖ истёк с 22.02.2020 по 30.06.2025: если не было письма от AIMA/EMAIMA, используйте services.aima.gov.pt/RAR/reqrenew; на 23.06.2026 юридически это уже срочный случай, потому что срок 15.04.2026 прошёл',
          '✅ CPLP: отдельная процедура на services.aima.gov.pt/CPLP, не обычный portal-renovacoes',
          '✅ ARI / Golden Visa: отдельный поток ARI в Portal das Renovações, доступен с 16.02.2026 по объявлению AIMA',
          '✅ Residente de Longa Duração: AIMA открыла продление в Portal das Renovações, но проверьте NISS и адрес',
          '❌ Первичная карта после визы D, первый ВНЖ, CRUE граждан ЕС и карты родственников граждан ЕС — это не обычное продление через этот портал'
        ]},
        { kind: 'warning', text: 'Если менялись имя, адрес, NIF, паспорт, NISS или другие данные, сначала подайте обновление через контактную форму AIMA с темой Alteração de Dados. AIMA отдельно пишет, что изменения персональных данных не делаются как обычный запрос продления.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'Когда подавать',
      content: [
        { kind: 'checklist', items: [
          '🗓️ По gov.pt подать можно с 90 дней до окончания карты; временное ВНЖ нужно запрашивать к продлению не позднее чем за 30 дней до конца срока',
          '✅ Практически: начинайте проверять портал за 90 дней и подавайте сразу, как AIMA открыла вашу дату/категорию',
          '⚠️ Карты, истёкшие после 30.06.2025: по Decreto Regulamentar 84/2007, ст. 63.º n.º 14 право проживания сохраняется 6 месяцев после даты истечения. Если за это время вы начали продление и имеете comprovativo/recibo, AIMA считает пребывание законным до завершения процесса — даже после этих 6 месяцев.',
          '⚠️ Если карта истекла до 30.06.2025 и вы не начали продление до 15.04.2026, не тяните: подайте запрос через services.aima.gov.pt/RAR/reqrenew и параллельно обсудите ситуацию с advogado или CLAIM',
          '🧾 После регистрации запроса и оплаты AIMA выдаёт comprovativo на 180 дней. Это подтверждение процесса, но не полноценная карта для поездок по Шенгену'
        ]},
        { kind: 'warning', text: 'Не рассчитывайте на старые автоматические продления. AIMA прямо объявила конец автоматических пророг и связала легальный статус с начатым процессом продления.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'Что проверить перед стартом',
      content: [
        { kind: 'checklist', items: [
          '📧 Доступ к e-mail, который вы укажете в AIMA: туда приходит пароль, платёжная информация и уведомления; проверяйте Spam',
          '🪪 Номер действующей/истёкшей карты ВНЖ, NIF, дата рождения и паспорт должны совпадать с данными в базе AIMA',
          '🏠 Morada должна быть актуальной: новая карта отправляется на адрес в процессе/AIMA',
          '🔢 NISS нужен для успешной проверки; если NISS есть, но AIMA его не видит, обновите данные через contact form',
          '💸 До подачи проверьте отсутствие долгов в Finanças и Segurança Social; если портал долго валидирует, пригодятся свежие certidões',
          '🔐 Chave Móvel Digital не является единственным способом входа в Portal das Renovações, но полезна для получения справок, criminal record certificate и других госдокументов',
          '📄 Подготовьте цветные PDF/JPG, читаемые, без обрезанных краёв; список документов в портале важнее любого общего чеклиста'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Пошаговая подача через portal-renovacoes',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Зарегистрируйтесь или войдите', content: [
            { kind: 'paragraph', text: 'Откройте portal-renovacoes.aima.gov.pt и создайте доступ по данным карты/документа. AIMA описывает процесс как регистрацию в портале: пароль отправляется на указанный e-mail.' },
            { kind: 'warning', text: 'Не путайте Portal das Renovações с общим Portal de Serviços AIMA. Общий портал нужен для других услуг, но продление обычной карты после 01.07.2025 идёт через renovações.' }
          ]},
          { id: 's2', title: '2. Дождитесь автоматических проверок', content: [
            { kind: 'paragraph', text: 'После регистрации система делает проверки, в том числе по фискальной и социальной ситуации. По практическому гайду из Downloads это может занять несколько дней, поэтому не оставляйте процесс на последнюю неделю.' },
            { kind: 'checklist', items: [
              'Finanças: certidão de não dívida',
              'Segurança Social: comprovativo de situação contributiva / regularidade',
              'Если портал завис на валидации, сохраните скриншоты и дату попытки'
            ]}
          ]},
          { id: 's3', title: '3. Создайте Novo Pedido', content: [
            { kind: 'paragraph', text: 'Когда валидации пройдены, нажмите Novo Pedido и выберите Renovação de Autorização de Residência. Комментарий обычно можно оставить пустым, если портал не просит объяснение.' },
            { kind: 'warning', text: 'Если система показывает неверную категорию, старый адрес, чужой NISS или не даёт начать процесс, не отправляйте вслепую. Сначала обновите данные через contact form AIMA и сохраните comprovativo обращения.' }
          ]},
          { id: 's4', title: '4. Оплатите DUC/Multibanco', content: [
            { kind: 'paragraph', text: 'После успешного запроса портал формирует документ для оплаты. AIMA пишет, что оплата возможна только через 24 часа после выпуска guias. В пользовательских кейсах срок на оплату часто отображался как 10 дней, но ориентируйтесь на срок, который написан в вашем кабинете.' },
            { kind: 'warning', text: 'Сумма зависит от категории, цифрового канала, возраста, льгот и типа карты. Не подставляйте старые суммы из чатов: платите ровно по DUC/платёжной странице.' }
          ]},
          { id: 's5', title: '5. Загрузите документы', content: [
            { kind: 'paragraph', text: 'По практическому гайду и кейсам сообщества после оплаты открывается загрузка документов; часто дают 10 дней. Если портал показывает другой срок, верьте порталу. Не ждите письма: проверяйте кабинет вручную.' },
            { kind: 'checklist', items: [
              'Карта ВНЖ — обе стороны',
              'Паспорт — страница с данными и страницы со штампами/визами, если портал просит',
              'Comprovativo de condições de alojamento: договор аренды, domicílio fiscal, recibos de renda, atestado de residência или другой документ из вашего списка',
              'Comprovativo de meios de subsistência: трудовой договор, recibos verdes/faturas, IRS, банковские выписки, пенсия или документы по вашей статье',
              'Certidão de não dívida Finanças',
              'Comprovativo de situação contributiva / regularidade Segurança Social, если применимо',
              'Comprovativo de sistema de saúde: número de utente SNS или страховка, если применимо',
              'Requerimento Inicial / Modelo 1, если портал просит; для продления выбирайте Renovação de A.R. TEMPORÁRIA/PERMANENTE и указывайте статью вашего ВНЖ',
              'Autorização para consulta do registo criminal português или certificado do registo criminal — что именно просит ваш экран'
            ]},
            { kind: 'warning', text: 'Список документов персональный. Для D7, D8, art. 88/89/90, estudante, reagrupamento familiar и menores набор отличается; общий чеклист не заменяет список из вашего процесса.' }
          ]},
          { id: 's6', title: '6. Сохраните comprovativo', content: [
            { kind: 'paragraph', text: 'После регистрации запроса и оплаты AIMA выдаёт recibo/comprovativo de pedido de renovação. По объявлению AIMA от 15.10.2025 он действует 180 дней.' },
            { kind: 'checklist', items: [
              'Сохраните PDF в облако, телефон и e-mail',
              'Носите с собой истёкшую карту ВНЖ + comprovativo',
              'Для банков, SNS, школы и работодателя в Португалии это обычно главный документ ожидания',
              'Для поездок за пределы Португалии это не равнозначно действующей карте ВНЖ; авиакомпания или другая страна Шенгена может не принять PDF'
            ]}
          ]},
          { id: 's7', title: '7. Следите за статусом и e-mail', content: [
            { kind: 'paragraph', text: 'После оплаты AIMA начинает анализ. В кейсах из сообщества после проверки документов появляются зелёные отметки, затем статус вроде concluído/deferido и письмо. Если запросят дополнительные документы, срок ответа обычно короткий — не пропустите уведомление.' },
            { kind: 'timeline', text: 'Реальные сроки сильно гуляют: от нескольких недель до нескольких месяцев. Если 90 дней нет движения, начинайте письменный трек: contact form AIMA, региональный e-mail, Livro Amarelo/Provedor de Justiça; для долгой просрочки обсуждайте с advogado административную процедуру против бездействия.' }
          ]},
          { id: 's8', title: '8. Получите карту', content: [
            { kind: 'paragraph', text: 'После deferimento карта обычно отправляется по CTT на актуальный адрес. Поэтому адрес в AIMA критичен. Если карта не приходит после одобрения, фиксируйте дату deferimento, проверяйте почтовый ящик/aviso CTT и обращайтесь в AIMA.' }
          ]}
        ]}
      ]
    },
    {
      id: 'old-expired',
      title: 'Если карта истекла до 30.06.2025',
      content: [
        { kind: 'paragraph', text: 'Это уже не обычный сценарий portal-renovacoes. AIMA разделяет старые истёкшие карты и карты после 01.07.2025: по старым отвечает Estrutura de Missão / services.aima.gov.pt, а AIMA обеспечивает продления после 01.07.2025.' },
        { kind: 'checklist', items: [
          'Если получали письмо от renovacao.ar@aima.gov.pt — следуйте ссылке из письма и сохраняйте все подтверждения',
          'Если письма не было — AIMA указывает services.aima.gov.pt/RAR/reqrenew для карт, истёкших с 22.02.2020 по 30.06.2025',
          'После запроса вас должны связать по e-mail для подтверждения, оплаты, возможного atendimento presencial/биометрии и загрузки документов',
          'AIMA обещала disponibilizar recibo comprovativo до 10 рабочих дней после подтверждения оплаты',
          'CPLP, ARI и карты UE/familiares не входят в этот RAR-сервис'
        ]},
        { kind: 'warning', text: 'На 23.06.2026 дедлайн 15.04.2026 уже прошёл. Новой общей прорроги после 15.04.2026 правительство не вводило. По позиции AIMA, владельцы карт, истёкших до 30.06.2025, которые не начали продление, считаются в нерегулярном положении; защищает только зарегистрированный на портале процесс с comprovativo. Если вы ещё не подавали — срочно подайте через services.aima.gov.pt/RAR/reqrenew и проконсультируйтесь с advogado/CLAIM.' }
      ]
    },
    {
      id: 'documents-details',
      title: 'Документы: что часто путают',
      content: [
        { kind: 'substeps', items: [
          { id: 'doc1', title: 'Жильё', content: [
            { kind: 'paragraph', text: 'Подтверждение жилья может быть разным: contrato de arrendamento, recibos de renda, domicílio fiscal, atestado de residência, declaração do proprietário или документы собственности. Загружайте именно тот тип, который просит портал.' }
          ]},
          { id: 'doc2', title: 'Доход', content: [
            { kind: 'paragraph', text: 'Для наёмной работы обычно готовят contrato de trabalho, recibos de vencimento и IRS/declaração. Для independente — atividade aberta, recibos verdes/faturas, IRS и банковскую выписку. Для D7 — пенсия, пассивный доход и движение по счету. Логика AIMA: доход должен быть понятным, регулярным и связанным с вашей статьёй.' }
          ]},
          { id: 'doc3', title: 'Registo criminal', content: [
            { kind: 'paragraph', text: 'Justiça.gov.pt прямо пишет, что иностранцы при запросе/продлении ВНЖ могут авторизовать AIMA на доступ к португальскому регистру судимости вместо похода за сертификатом в balcão. Но если ваш конкретный экран просит certificado, его можно заказать онлайн; цена 5 €, выпуск онлайн может занять до 3 рабочих дней.' }
          ]},
          { id: 'doc4', title: 'Modelo 1 / Requerimento Inicial', content: [
            { kind: 'paragraph', text: 'В практическом PDF из Downloads отдельно разобран Modelo 1. Если портал просит Requerimento Inicial, заполните персональные данные, отметьте Renovação de A.R. TEMPORÁRIA/PERMANENTE и укажите статью Lei 23/2007, по которой у вас выдан текущий ВНЖ.' }
          ]},
          { id: 'doc5', title: 'Несовершеннолетние и семья', content: [
            { kind: 'paragraph', text: 'У детей и reagrupamento familiar часто появляются дополнительные документы: свидетельства, согласия родителей, документы основного заявителя, доказательство семейной связи. Не копируйте список взрослого D7/D8 на ребёнка без проверки экрана.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs-2026',
      title: 'Сборы AIMA в 2026',
      content: [
        { kind: 'paragraph', text: 'Актуальная таблица AIMA по Portaria 307/2023 показывает две колонки: обычный тариф и сниженный тариф для цифрового канала. Portal das Renovações сам считает точную сумму; ниже — ориентиры для проверки DUC, а не замена платёжного документа.' },
        { kind: 'checklist', items: [
          'Receção e Análise для продления AR temporária/permanente: 133,00 €; в цифровом канале 99,80 €',
          'Art. 75(1) Concessão ou Renovação AR Temporária: 114,30 €; в цифровом канале 85,80 €',
          'Art. 76(2) Renovação/Alteração de Dados AR Permanente: 61,90 €; в цифровом канале 46,30 €',
          'Art. 90-A(2) Renovação ARI: 4 210,30 €; в цифровом канале 3 157,80 €',
          '2-я копия карты: обычно 50% от соответствующей taxa de emissão'
        ]},
        { kind: 'warning', text: 'Строка 307,20 € в таблице относится к Apreciação do Pedido для dispensa de visto consular по отдельным статьям, а не к стандартному продлению art. 75. Для обычного продления не используйте её как универсальную сумму.' }
      ]
    },
    {
      id: 'if-rejected-or-delayed',
      title: 'Если запрос завис или пришёл отказ',
      content: [
        { kind: 'paragraph', text: 'Сначала отделите техническую задержку портала от процессуального запроса AIMA. Техническая задержка — нет кнопки, не прошла валидация, не активна оплата. Процессуальный запрос — AIMA уже попросила документ, исправление или назначила atendimento.' },
        { kind: 'checklist', items: [
          'Сохраняйте скриншоты экранов, e-mail, DUC, comprovativo оплаты и номер процесса',
          'Если валидация Finanças/Segurança Social висит, приложите свежие certidões в обращение AIMA',
          'Если пришёл pedido de elementos / aperfeiçoamento, отвечайте в срок из письма, обычно он короткий',
          'Если пришёл indeferimento, не спорьте в чате: покажите письмо advogado, потому что сроки на audiência prévia/reclamação/recurso зависят от типа акта',
          'Если comprovativo на 180 дней истекает, а решения нет, заранее пишите в AIMA и фиксируйте попытку продления/разъяснения статуса'
        ]},
        { kind: 'warning', text: 'Comprovativo помогает доказать, что процесс начат, но не делает просроченную карту полноценным travel document. Для поездок за пределы Португалии риск остаётся до физической карты.' }
      ]
    },
    {
      id: 'not-renewal',
      title: 'Что не является обычным продлением',
      content: [
        { kind: 'checklist', items: [
          'Первичная карта после визы D: primeira concessão / emissão inicial через AIMA, а не продление',
          'CRUE граждан ЕС: оформляется по правилам граждан ЕС, не через portal-renovacoes',
          'Cartão de residência para familiar de cidadão da UE: отдельная процедура AIMA',
          'CPLP: отдельный канал services.aima.gov.pt/CPLP и часто биометрия/appointment',
          'Переход на permanente впервые: это не то же самое, что продлить временный ВНЖ; проверяйте отдельный гайд по permanente',
          'Студенты, которые не завершили обучение и работают по art. 122(j), и некоторые highly qualified/student-without-visa случаи — AIMA публикует отдельные contact-form маршруты'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Карта ВНЖ', note: 'обе стороны, даже если карта уже истекла' },
    { title: 'Паспорт', note: 'страница с данными; дополнительные страницы, если портал просит' },
    { title: 'Comprovativo de alojamento', note: 'договор, recibos, domicílio fiscal, atestado или другой документ из вашего списка' },
    { title: 'Comprovativo de meios de subsistência', note: 'зарплата, recibos verdes, IRS, пенсия, банковские выписки — по вашей статье' },
    { title: 'Certidão de não dívida Finanças', note: 'полезно подготовить заранее' },
    { title: 'Comprovativo de situação contributiva Segurança Social', note: 'если применимо; проверьте NISS' },
    { title: 'SNS / медицинская страховка', note: 'если требуется вашей категорией' },
    { title: 'Modelo 1 / Requerimento Inicial', note: 'если портал просит; указать Renovação и статью Lei 23/2007' },
    { title: 'Autorização para consulta do registo criminal или certificado', note: 'зависит от требования на экране' }
  ],
  costs: [
    { label: 'Receção e Análise — продление AR', amountEUR: 133, note: 'цифровой канал: 99,80 €' },
    { label: 'Art. 75(1) — renovação AR temporária', amountEUR: 114.30, note: 'цифровой канал: 85,80 €' },
    { label: 'Art. 76(2) — renovação/alteração AR permanente', amountEUR: 61.90, note: 'цифровой канал: 46,30 €' },
    { label: 'Art. 90-A(2) — renovação ARI', amountEUR: 4210.30, note: 'цифровой канал: 3 157,80 €' },
    { label: 'Certificado do registo criminal online', amountEUR: 5 },
    { label: 'Штраф/риск за просрочку', amountEURMin: 75, amountEURMax: 300, note: 'зависит от ситуации; не заменяет консультацию' }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 180,
  sources: [
    { title: 'gov.pt — Renovar a autorização de residência', url: 'https://www.gov.pt/servicos/renovar-a-autorizacao-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Portal das Renovações já está disponível', url: 'https://aima.gov.pt/pt/noticias/o-portal-das-renovacoes-ja-esta-disponivel', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Portal de Renovações: Autorizações de Residência', url: 'https://aima.gov.pt/pt/noticias/portal-de-renovacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Fim das Prorrogações Automáticas', url: 'https://aima.gov.pt/pt/noticias/asfn', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Esclarecimento: Direito de Residência', url: 'https://aima.gov.pt/pt/noticias/direito-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — AR expirada entre 22.02.2020 e 30.06.2025', url: 'https://aima.gov.pt/pt/noticias/dskhf', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — services.aima.gov.pt para renovações antigas', url: 'https://aima.gov.pt/pt/noticias/services-aima-gov-pt-novo-servico-para-renovacao-de-autorizacoes-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Renovação do Título de Residente de Longa Duração', url: 'https://aima.gov.pt/pt/noticias/renovacao-do-titulo-de-residente-de-longa-duracao', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'AIMA — Tabela de Taxas', url: 'https://aima.gov.pt/documents/tabela-de-taxas-e-demais-encargos-a-cobrar-pelos-procedimentos-administrativos.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'Justiça.gov.pt — Registo criminal de pessoas', url: 'https://justica.gov.pt/Servicos/Pedir-e-consultar-registo-criminal-de-pessoas', kind: 'official', language: 'pt', lastRetrieved: '2026-06-14' },
    { title: 'Lei 23/2007 — regime jurídico de entrada, permanência, saída e afastamento', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-06-14' }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 45
}
