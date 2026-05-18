export default {
  editorialVoice: 'hackportugal',
  id: 'ebalcao-financas-online',
  categoryId: 'digital_gov',
  title: 'e-Balcão Finanças — обращения в AT онлайн без визита',
  tldr: 'e-Balcão — онлайн-тикетинг Autoridade Tributária на Portal das Finanças: Suporte → e-Balcão.\n\nВ 2026 году через него реально закрыть большинство вопросов без визита в Finanças: NIF-адрес, IRS, recibos verdes, IVA, IMI, IUC, справки, ошибки деклараций, уведомления. Ответ обычно приходит за 5–10 рабочих дней, срочные темы лучше дублировать звонком в CAT. Каждому обращению присваивается referência: по ней отслеживают статус и прикладывают документы.',
  tags: ['finanças', 'ebalcão', 'налоги', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое e-Balcão и когда он заменяет визит',
      content: [
        { kind: 'paragraph', text: 'e-Balcão — официальный канал письменных обращений в Autoridade Tributária e Aduaneira через Portal das Finanças. Это не чат: вы создаёте pedido de informação или reclamação simples, выбираете тему, прикладываете PDF/JPG и ждёте ответа в личном кабинете.' },
        { kind: 'paragraph', text: 'Для экспата это главный способ общаться с Finanças без записи в отделение. Практически все неэкстренные вопросы по NIF, IRS, atividade, recibos verdes, IVA, IMI, IUC и уведомлениям можно начать через e-Balcão.' },
        { kind: 'checklist', items: [
          'Изменение или подтверждение morada fiscal, если система не даёт сделать это автоматически',
          'Вопросы по IRS: declaração, divergências, reembolsos, notas de liquidação',
          'Открытие, изменение и закрытие atividade для recibos verdes',
          'Вопросы по IVA: enquadramento, declarações periódicas, isenção art. 53 CIVA',
          'Проблемы с IUC, IMI, AIMI, IMT и гербовым сбором Imposto do Selo',
          'Запрос справок: certidão de domicílio fiscal, certidão de dívida e não dívida',
          'Ответ на письмо или уведомление AT, если в нём указан prazo',
          'Исправление ошибок в Portal das Finanças или данных налогоплательщика'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Как войти: Portal das Finanças → Suporte → e-Balcão',
      content: [
        { kind: 'paragraph', text: 'Откройте portaldasfinancas.gov.pt. Вход выполняется по NIF и senha de acesso, либо через Chave Móvel Digital (CMD), либо Cartão de Cidadão. После входа: меню Suporte → e-Balcão → Registar Nova Questão.' },
        { kind: 'checklist', items: [
          'Проверьте, что входите под правильным NIF: личным, а не NIF компании или супруга',
          'Если senha de acesso потеряна, запросите новую на Portal das Finanças заранее: письмо с кодом приходит на налоговый адрес',
          'Перед обращением обновите email и telefone в Dados Pessoais',
          'Сканируйте документы в PDF; фотографии делайте читаемыми, без обрезанных краёв',
          'Названия файлов делайте понятными: contrato_arrendamento.pdf, recibo_renda_jan2026.pdf',
          'Если обращение связано с уведомлением AT, приложите само уведомление и укажите номер processo или documento',
          'Пишите по-португальски; короткий машинный перевод лучше длинного русского текста'
        ] },
        { kind: 'warning', text: 'e-Balcão находится внутри Portal das Finanças. Не отправляйте NIF, senha de acesso и налоговые документы через ссылки из SMS/WhatsApp/email. Фишинговые сайты часто копируют интерфейс Finanças.' }
      ]
    },
    {
      id: 'create-ticket',
      title: 'Как создать обращение, чтобы его не закрыли шаблонным ответом',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка — выбрать слишком общую тему и написать “помогите”. Сотрудник AT отвечает строго в рамках выбранной категории. Чем точнее тема, даты, суммы и приложенные документы, тем выше шанс получить рабочее решение с первого раза.' },
        { kind: 'substeps', items: [
          {
            id: 'choose-topic',
            title: '1. Выберите тему и подкатегорию',
            content: [
              { kind: 'paragraph', text: 'В e-Balcão сначала выбирается Imposto или área: IRS, IVA, IMI, IUC, Atividade, Cadastro, Pagamentos, Cobrança, Património, Benefícios fiscais. Если сомневаетесь, выбирайте категорию по налогу, а не “Outros”.' }
            ]
          },
          {
            id: 'write-request',
            title: '2. Напишите короткий текст',
            content: [
              { kind: 'checklist', items: [
                'Начните с сути: “Pretendo corrigir a morada fiscal…”',
                'Укажите NIF, имя и налоговый год, если вопрос по IRS',
                'Укажите даты: дата въезда, дата договора аренды, дата recibo, дата уведомления',
                'Укажите суммы в евро, если спор по pagamento, reembolso, liquidação',
                'Сошлитесь на номер документа AT: referência, nota de liquidação, processo, declaração',
                'В конце сформулируйте действие: “Solicito a correção”, “Solicito esclarecimento”, “Solicito reanálise”'
              ] }
            ]
          },
          {
            id: 'attach-files',
            title: '3. Приложите доказательства',
            content: [
              { kind: 'paragraph', text: 'Обычно достаточно PDF договора, comprovativo de morada, declaração, recibo, банковского подтверждения или скриншота ошибки. Не отправляйте лишние документы: это замедляет обработку и повышает риск запроса уточнений.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'tracking',
      title: 'Сроки, referência и контроль ответа',
      content: [
        { kind: 'paragraph', text: 'После отправки e-Balcão присваивает обращению referência. Сохраните её: по этому номеру вы проверяете статус, отвечаете на уточнения и доказываете, что обратились в срок.' },
        { kind: 'checklist', items: [
          'Нормальный срок ответа в 2026 году: примерно 5–10 рабочих дней',
          'По сложным вопросам IRS, IVA, наследства, IMI или международного налогообложения срок может быть дольше',
          'Статус и ответы смотрите в e-Balcão → Consultar Questões',
          'Если AT просит дополнительные документы, отвечайте в том же тикете, а не создавайте новый',
          'Если prazo по уведомлению истекает, не ждите молча: звоните в CAT и при необходимости записывайтесь в serviço de finanças',
          'Скачайте или сохраните PDF/скрин ответа AT, особенно если он влияет на IRS, IVA или штраф',
          'Если ответ явно не по теме, создайте follow-up с referência старого обращения и кратко объясните, что не было решено'
        ] },
        { kind: 'warning', text: 'Ответ e-Balcão не всегда является binding tax ruling. Для официального обязательного налогового толкования используется pedido de informação vinculativa по правилам Lei Geral Tributária, а не обычный тикет e-Balcão.' }
      ]
    },
    {
      id: 'use-cases',
      title: 'Типовые сценарии для экспатов',
      content: [
        { kind: 'paragraph', text: 'Если вы только переехали, e-Balcão часто нужен ещё до первого IRS. Через него удобно фиксировать вопросы письменно, когда в отделениях Finanças нет записи или сотрудник на стойке даёт устный противоречивый ответ.' },
        { kind: 'checklist', items: [
          'NIF и morada fiscal: уточнить статус адреса, представителя fiscal, подтверждение налогового резидентства',
          'IRS: почему не подтянулись доходы, аренда, dependentes, despesas gerais familiares, saúde, educação',
          'Recibos verdes: какой regime выбрать, почему не получается emitir recibo, как закрыть atividade',
          'IVA: нужно ли подавать declaração periódica, почему появилась dívida, как исправить enquadramento',
          'IMI/IMT: вопросы по покупке недвижимости, caderneta predial, exemptions, notas de cobrança',
          'IUC: налог на автомобиль, привязка matrícula, оплата и штрафы',
          'Pagamentos: потерянная referência Multibanco, двойная оплата, pedido de reembolso',
          'Notificações: что означает письмо AT и какой prazo для ответа'
        ] },
        { kind: 'paragraph', text: 'Для простых технических вопросов можно сначала попробовать поиск на Portal das Finanças и FAQ. Но если вопрос связан со сроком, суммой, штрафом или вашим статусом налогового резидента, лучше создать e-Balcão: письменный след важнее устного совета.' }
      ]
    },
    {
      id: 'limits',
      title: 'Когда e-Balcão не подходит',
      content: [
        { kind: 'paragraph', text: 'e-Balcão удобен, но не заменяет все процедуры. Некоторые действия требуют отдельной формы, подтверждения через CMD/Cartão de Cidadão, личной идентификации или подачи в другом ведомстве.' },
        { kind: 'checklist', items: [
          'Срочная разблокировка доступа, если нет senha de acesso и CMD',
          'Сложный налоговый спор, где уже идёт execução fiscal или court deadline',
          'Запрос обязательного налогового заключения: нужен informação vinculativa',
          'Вопросы AIMA, Segurança Social, SNS, Câmara Municipal — это не компетенция AT',
          'Смена адреса для владельцев Cartão de Cidadão обычно делается через ePortugal/CMD, а не простым тикетом',
          'Подача IRS, declaração periódica IVA и emissão de recibos verdes выполняются в соответствующих разделах портала, e-Balcão только помогает с проблемами',
          'Если уже начислен штраф coima, может потребоваться отдельная defesa, reclamação graciosa или pagamento с redução'
        ] },
        { kind: 'warning', text: 'Не используйте e-Balcão как способ “продлить срок”. Если законный prazo на ответ, оплату или подачу декларации истекает, сам факт вопроса в e-Balcão обычно не приостанавливает срок.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — вход и доступ к e-Balcão',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Apoio ao contribuinte и e-Balcão',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
