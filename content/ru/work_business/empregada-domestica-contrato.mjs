export default {
  editorialVoice: 'hackportugal',
  id: 'empregada-domestica-contrato',
  categoryId: 'work_business',
  title: 'Empregada doméstica: официальное оформление домашнего работника',
  tldr: 'Домработница, няня, сиделка, cozinheira или jardineiro в частном доме — это trabalhador do serviço doméstico. В 2026 оформляйте письменно, регистрируйте в Segurança Social в течение 15 дней до начала работы и платите взносы ежемесячно. Норма — до 40 ч/нед, минимум для full-time — SMN 920 € × 14, отпуск 22 рабочих дня. С 2023 скрытие работника от Segurança Social может стать уголовным преступлением: до 3 лет тюрьмы или штраф до 360 дней.',
  tags: ['doméstica', 'контракт', 'segurança-social', 'работа'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-is-domestic-worker',
      title: 'Кого нужно оформлять как trabalhador do serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'Если человек регулярно работает в вашем частном доме и получает оплату, это не «помощь по договорённости», а домашний труд. Режим применяется к limpeza, lavandaria, cozinha, babysitting, cuidados a idosos, jardinagem, водительским услугам для семьи и похожей работе для household, а не для компании.' },
        { kind: 'checklist', items: [
          'Уборщица приходит каждую неделю на 3–6 часов — оформлять нужно.',
          'Няня забирает ребёнка из школы 5 дней в неделю — оформлять нужно.',
          'Сиделка живёт в доме с пожилым родственником — оформлять нужно, с особыми условиями проживания и отдыха.',
          'Садовник обслуживает только ваш дом и получает оплату напрямую от вас — оформлять нужно.',
          'Клининговая компания выставляет factura-recibo с IVA — это не ваш trabalhador; её работников оформляет компания.',
          'Разовая помощь один раз без регулярности — обычно не трудовой договор, но лучше оплатить через recibo/factura, если человек действует как самозанятый.'
        ] },
        { kind: 'warning', text: 'Не путайте с recibos verdes. Если вы задаёте график, место, инструкции и платите регулярно, это признаки трудовых отношений. Назвать человека «freelancer» недостаточно.' }
      ]
    },
    {
      id: 'contract',
      title: 'Сделайте письменный contrato de trabalho doméstico',
      content: [
        { kind: 'paragraph', text: 'Для expat-семьи безопасный стандарт в 2026 — письменный договор до первого рабочего дня. Он нужен для Segurança Social, страховки, доказательства зарплаты, графика и при споре с ACT/судом. Если договор срочный, письменная форма обязательна; для бессрочной занятости тоже не экономьте на бумаге.' },
        { kind: 'checklist', items: [
          'Данные работодателя: имя, NIF, NISS, адрес проживания.',
          'Данные работника: имя, NIF, NISS, документ, адрес.',
          'Дата начала работы и тип договора: sem termo или termo certo.',
          'Функции: limpeza, cozinha, babysitting, cuidador, motorista, jardineiro и т. п.',
          'Место работы: адрес дома или несколько адресов семьи.',
          'График: дни недели, часы, перерывы, максимум 40 ч/нед.',
          'Оплата: месячная или почасовая gross, сроки выплаты, Multibanco/перевод.',
          'Subsídio de Natal и subsídio de férias: 13-я и 14-я выплаты или пропорциональная часть.',
          'Отпуск: 22 рабочих дня в год при полном году работы.',
          'Питание/проживание, если предоставляются, и что именно считается частью вознаграждения.',
          'Сроки уведомления при прекращении договора и испытательный срок, если применим.',
          'Обязательная страховка acidentes de trabalho.'
        ] },
        { kind: 'warning', text: 'Не включайте в договор удержание паспорта, запрет выходить из дома, оплату «только наличными без recibo» или круглосуточную доступность. Для live-in worker всё равно нужны отдых, личное время и соблюдение 40 ч/нед.' }
      ]
    },
    {
      id: 'social-security-registration',
      title: 'Зарегистрируйте работника в Segurança Social до начала',
      content: [
        { kind: 'paragraph', text: 'Работодатель-физлицо регистрирует trabalhador do serviço doméstico через gov.pt или Segurança Social Direta. Срок — в 15-дневный период до начала работы, то есть не после первого дня. Практически: подписали договор → сразу подали admissão → работник выходит.' },
        { kind: 'substeps', items: [
          { id: 'prepare-access', title: '1. Подготовьте доступы и номера', content: [
            { kind: 'checklist', items: [
              'Ваш NIF и NISS как empregador.',
              'Доступ к Segurança Social Direta или Chave Móvel Digital (CMD).',
              'NISS работника; если его нет, сначала запросите NISS.',
              'NIF работника, если есть.',
              'Дата начала договора.',
              'График и предполагаемая remuneração.',
              'Тип базы взносов: remuneração convencional или remuneração real.'
            ] }
          ] },
          { id: 'submit-admission', title: '2. Подайте admissão', content: [
            { kind: 'paragraph', text: 'На gov.pt выберите serviço «Registar trabalhador do serviço doméstico». Система направляет в Segurança Social Direta. Укажите данные работника, дату начала, режим работы и оплату. Сохраните comprovativo em PDF.' }
          ] },
          { id: 'pay-contributions', title: '3. Платите взносы каждый месяц', content: [
            { kind: 'paragraph', text: 'Взносы платятся за предыдущий месяц, обычно с 10-го по 20-е число следующего месяца, через referência Multibanco/Segurança Social Direta. Не перекладывайте всю сумму на работника: доля работодателя — ваша обязанность.' }
          ] }
        ] },
        { kind: 'warning', text: 'С 2023 года скрытие работника от Segurança Social — не просто административный риск. Если admissão не сообщена в срок и ситуация затягивается, может применяться crime de ocultação de trabalhador: до 3 лет лишения свободы или штраф до 360 дней.' }
      ]
    },
    {
      id: 'money-and-contributions',
      title: 'Сколько платить: зарплата, взносы, отпускные',
      content: [
        { kind: 'paragraph', text: 'Минимальная оплата full-time в 2026 ориентируется на SMN 920 € в месяц, обычно 14 выплат в год: 12 зарплат + subsídio de férias + subsídio de Natal. Для part-time считайте пропорционально часам, но не ниже минимальной ставки.' },
        { kind: 'paragraph', text: 'Для Segurança Social у домашнего труда есть два режима базы. Remuneração real — взносы с фактической зарплаты. Remuneração convencional — база по IAS; в 2026 IAS = 537,13 €, часовая условная база около 3,10 €. Это база для взносов, а не разрешение платить работнику 3,10 €/ч.' },
        { kind: 'checklist', items: [
          'Full-time 40 ч/нед: не ниже 920 € gross/мес × 14 в 2026.',
          'Part-time: зарплата пропорциональна часам, плюс пропорциональные отпускные и рождественские.',
          'Отпуск: 22 рабочих дня оплачиваемого отпуска в год.',
          'Subsídio de férias обычно платится перед отпуском или по договорённому графику.',
          'Subsídio de Natal обычно до 15 декабря или пропорционально при прекращении договора.',
          'Со взносов работника можно удерживать только его долю, а не долю работодателя.',
          'Платите банковским переводом и храните comprovativo; наличные без следа — плохая идея.',
          'Для IRS работника выдавайте подтверждения выплат; у работодателя могут быть лимиты на налоговые вычеты, проверяйте в Portal das Finanças.'
        ] },
        { kind: 'warning', text: 'Рыночные ставки в Лиссабоне/Кашкайше/Порту часто выше минимума: уборка 8–15 €/ч gross и больше. Но Segurança Social и трудовые права рассчитываются не от «рынка», а от оформленной зарплаты и закона.' }
      ]
    },
    {
      id: 'insurance-and-compliance',
      title: 'Страховка, график и документы на каждый месяц',
      content: [
        { kind: 'paragraph', text: 'Домашний работник — ваш employee. У семьи появляются обязанности работодателя: страхование от несчастных случаев, учёт рабочего времени, платежи в Segurança Social, отпуск и корректное прекращение договора.' },
        { kind: 'checklist', items: [
          'Оформите seguro de acidentes de trabalho para serviço doméstico до начала работы.',
          'Храните contrato, comprovativo de admissão, полис, recibos/расчётные листы и платежи минимум несколько лет.',
          'Ведите простой табель: даты, часы, сверхурочные, отпуск, больничные.',
          'Не превышайте 40 ч/нед без законной компенсации и согласования.',
          'Давайте еженедельный отдых; для live-in worker отдельно фиксируйте периоды отдыха.',
          'При болезни работник получает baixa médica через SNS/SNS24, а не «просто не приходит».',
          'При изменении зарплаты, часов или прекращении договора обновляйте данные в Segurança Social.',
          'При увольнении выплатите зарплату, отпускные, рождественскую пропорцию и компенсации, если положены.'
        ] },
        { kind: 'warning', text: 'Если работник — иностранный гражданин без права работать, это отдельный риск для семьи. Проверьте ВНЖ, CPLP/временный документ, autorização de residência или другой документ, дающий право на работу в Португалии.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Типичные ошибки expat-семей',
      content: [
        { kind: 'checklist', items: [
          'Наняли «на пару месяцев» и не зарегистрировали, потому что «она сама попросила наличными». Риск остаётся у работодателя.',
          'Путают limpeza через компанию и личную empregada doméstica.',
          'Регистрируют в Segurança Social после начала работы. Срок — до начала, в пределах 15 дней заранее.',
          'Платят 12 месячных зарплат и забывают subsídio de férias и subsídio de Natal.',
          'Нет seguro de acidentes de trabalho: падение на лестнице в вашем доме станет дорогой проблемой.',
          'Почасовая ставка устно «включает всё», но в договоре не указано, что с отпускными и Natal.',
          'Live-in nanny фактически работает 24/7. Проживание в доме не отменяет лимит рабочего времени и отдых.',
          'Не закрывают contrato в Segurança Social после увольнения, и взносы продолжают начисляться.'
        ] },
        { kind: 'paragraph', text: 'Правильная схема простая: письменный договор, admissão заранее, страховка, зарплата на счёт, взносы каждый месяц. Это дешевле, чем штрафы, спор с ACT или уголовная история из-за неоформленного труда.' }
      ]
    }
  ],
  costs: [
    { label: 'Минимальная зарплата full-time в 2026', amountEUR: 920, note: 'SMN за месяц, обычно 14 выплат в год: 12 зарплат + férias + Natal.' },
    { label: 'IAS 2026 для условной базы Segurança Social', amountEUR: 537.13, note: 'Remuneração convencional; часовая база около 3,10 € для расчёта взносов, не минимальная зарплата.' },
    { label: 'Взносы Segurança Social при remuneração convencional', amountEURMin: 0, amountEURMax: 0, note: 'Ставка обычно 28,3% от условной базы: 18,9% работодатель + 9,4% работник.' },
    { label: 'Взносы Segurança Social при remuneração real', amountEURMin: 0, amountEURMax: 0, note: 'Ставка обычно 33,3% от фактической зарплаты: 22,3% работодатель + 11% работник.' },
    { label: 'Seguro de acidentes de trabalho doméstico', amountEURMin: 30, amountEURMax: 120, note: 'Ориентир в год; зависит от часов, функций, зарплаты и страховщика.' }
  ],
  sources: [
    {
      title: 'gov.pt: регистрация trabalhador do serviço doméstico',
      url: 'https://www.gov.pt/servicos/registar-trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: trabalhador do serviço doméstico',
      url: 'https://www.seg-social.pt/trabalhador-do-servico-domestico',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 235/92: regime jurídico do contrato de serviço doméstico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1992-34519175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023: Agenda do Trabalho Digno и crime de ocultação de trabalhador',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
