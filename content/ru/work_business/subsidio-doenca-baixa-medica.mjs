export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-doenca-baixa-medica',
  categoryId: 'work_business',
  title: 'Subsídio de Doença / Baixa Médica — больничный для наёмного работника',
  tldr: 'В Португалии больничный для наёмного работника оформляется через CIT — certificado de incapacidade temporária. Его выдаёт médico de família, SNS/больница или другой уполномоченный врач; короткую ausência até 3 dias можно задекларировать через SNS24, но это не оплачиваемый subsídio. Segurança Social платит обычно с 4-го дня: 55% remuneração de referência до 30 дней, 60% за 31–90, 70% за 91–365, 75% после 365. С 1-го дня платят при госпитализации, амбулаторной операции, туберкулёзе и некоторых исключениях.',
  tags: ['baixa', 'doença', 'segurança-social', 'работа'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое baixa médica и кто платит',
      content: [
        { kind: 'paragraph', text: 'Baixa médica — это временная нетрудоспособность. Для Segurança Social она существует только как CIT: certificado de incapacidade temporária para o trabalho. Обычная справка от врача без CIT может оправдать отсутствие для работодателя, но не запускает выплату subsídio de doença.' },
        { kind: 'paragraph', text: 'Для trabalhador por conta de outrem выплату делает Segurança Social, а не работодатель. Работодатель фиксирует ausência justificada, прекращает начислять зарплату за дни больничного, а Segurança Social перечисляет пособие на ваш IBAN, если выполнены условия.' },
        { kind: 'checklist', items: [
          'Вы работаете по contrato de trabalho и за вас подают declarações de remunerações в Segurança Social',
          'Есть NISS и активная регистрация в Segurança Social',
          'CIT выдан врачом и отправлен электронно в Segurança Social',
          'Вы сообщили работодателю о больничном в срок, принятый в компании',
          'IBAN добавлен в Segurança Social Direta',
          'Соблюдён prazo de garantia: обычно 6 месяцев с зарегистрированными заработками',
          'Для работников нужен índice de profissionalidade: минимум 12 дней с оплатой в первые 4 месяца из последних 6 перед болезнью'
        ] }
      ]
    },
    {
      id: 'how-to-open',
      title: 'Как открыть больничный: CIT, médico de família, SNS24',
      content: [
        { kind: 'paragraph', text: 'Если вы реально заболели и не можете работать, стандартный путь — врач. Это может быть médico de família в Centro de Saúde, atendimento SNS, больница или уполномоченный врач, который может выпустить CIT. CIT обычно уходит в Segurança Social электронно; вам дают бумажную/цифровую копию с датами и кодами.' },
        { kind: 'substeps', items: [
          { id: 'call-or-book', title: '1. Связаться с SNS24 или Centro de Saúde', content: [
            { kind: 'paragraph', text: 'Звоните SNS24: 808 24 24 24, используйте app/portal SNS24 или связывайтесь со своим Centro de Saúde. При срочных симптомах — 112 или urgência.' }
          ] },
          { id: 'doctor-issues-cit', title: '2. Получить CIT у врача', content: [
            { kind: 'paragraph', text: 'Врач указывает период incapacidade, тип болезни и режим: можно ли выходить из дома, нужна ли госпитализация, есть ли продление. Даты важны: Segurança Social считает выплату по календарным дням, а не только рабочим.' }
          ] },
          { id: 'tell-employer', title: '3. Сообщить работодателю', content: [
            { kind: 'paragraph', text: 'Передайте работодателю подтверждение baixa: копию CIT или данные для проверки. Не отправляйте лишние медицинские детали — работодателю нужны даты и факт оправданного отсутствия, а не диагноз.' }
          ] },
          { id: 'check-ssd', title: '4. Проверить Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'Зайдите в Segurança Social Direta → Doença / Prestações и проверьте, появился ли процесс. Если IBAN не указан, добавьте его заранее: без IBAN выплата задерживается.' }
          ] }
        ] }
      ]
    },
    {
      id: 'three-day-sns24',
      title: '⚠️ До 3 дней через SNS24: удобно, но обычно без выплаты',
      content: [
        { kind: 'paragraph', text: 'В Португалии есть autodeclaração de doença через SNS24: работник сам декларирует болезнь до 3 последовательных дней. Это способ оправдать отсутствие перед работодателем без визита к врачу.' },
        { kind: 'checklist', items: [
          'Оформляется через SNS24, app SNS24 или Linha SNS24',
          'Максимум 3 последовательных дня за один раз',
          'Можно использовать не более 2 раз в календарный год',
          'Работодатель может проверить документ по коду',
          'Это не CIT от врача',
          'Segurança Social не платит subsídio de doença за такую autodeclaração',
          'Если болезнь продолжается, нужен врач и CIT с 4-го дня или с фактической даты, которую врач обоснованно укажет'
        ] },
        { kind: 'warning', text: 'Не путайте: “оправдать отсутствие” и “получить пособие” — разные вещи. Autodeclaração SNS24 закрывает вопрос дисциплины на работе, но не создаёт права на деньги от Segurança Social.' }
      ]
    },
    {
      id: 'payment-rules',
      title: 'Сколько платят и с какого дня',
      content: [
        { kind: 'paragraph', text: 'Размер считается от remuneração de referência — дневной базы, рассчитанной по зарегистрированным зарплатам в Segurança Social. Упрощённо: берутся заработки за первые 6 месяцев из 8 месяцев перед месяцем начала болезни и делятся на 180. Субсидии отпускные/рождественские могут учитываться по специальным правилам, поэтому фактическая база в Segurança Social может отличаться от вашей “зарплаты на руки”.' },
        { kind: 'checklist', items: [
          'До 30 дней болезни: 55% remuneração de referência',
          'С 31-го по 90-й день: 60%',
          'С 91-го по 365-й день: 70%',
          'С 366-го дня: 75%',
          'При низкой базе или наличии 3+ детей/ребёнка с инвалидностью первые ставки могут увеличиваться на 5 п.п. при условиях Segurança Social',
          'Для наёмного работника обычный período de espera — 3 дня: выплата начинается с 4-го дня',
          'С 1-го дня платят при internamento hospitalar, cirurgia de ambulatório, tuberculose и в некоторых связанных с parentalidade ситуациях',
          'Максимальная длительность для trabalhador por conta de outrem обычно 1095 дней; при туберкулёзе действует особый режим'
        ] },
        { kind: 'paragraph', text: 'Пример: если ваша remuneração de referência условно 60 € в день, то при обычной baixa на 10 календарных дней Segurança Social заплатит только за дни 4–10: 7 × 60 € × 55% = 231 €. Первые 3 дня в стандартном случае не оплачиваются Segurança Social.' },
        { kind: 'warning', text: 'Subsídio de doença не равен зарплате. Если у вас аренда, кредит или dependentes, держите резерв: при короткой болезни потеря часто чувствуется именно из-за первых 3 неоплачиваемых дней и ставки 55%.' }
      ]
    },
    {
      id: 'employee-actions',
      title: 'Что сделать работнику, чтобы не потерять деньги',
      content: [
        { kind: 'checklist', items: [
          'Проверьте, что у вас есть NISS и доступ к Segurança Social Direta',
          'Добавьте и подтвердите IBAN в Segurança Social Direta заранее',
          'Сохраняйте копию CIT и коды проверки для работодателя',
          'Сообщайте работодателю о болезни как можно раньше: email, HR-портал, Slack/Teams — как принято в компании',
          'Если врач продлевает baixa, убедитесь, что новый CIT идёт без разрыва дат',
          'Если процесс не появился в Segurança Social Direta через несколько дней, звоните Segurança Social или проверяйте у врача, был ли CIT отправлен',
          'Не работайте во время baixa, если CIT запрещает работу: это может привести к возврату пособия и проблемам с работодателем',
          'Если вы заболели во время férias, срочно уточните у HR правила переноса отпуска: нужен медицинский документ и соблюдение процедуры'
        ] },
        { kind: 'paragraph', text: 'Деньги обычно приходят банковским переводом от Segurança Social. Сроки зависят от того, насколько быстро CIT попал в систему, есть ли у вас подтверждённый IBAN и нет ли расхождений в contribuições работодателя.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Частые ситуации у экспатов',
      content: [
        { kind: 'paragraph', text: 'Если вы недавно переехали и работаете меньше 6 месяцев в Португалии, права на subsídio de doença может ещё не быть: Segurança Social смотрит на зарегистрированные периоды заработка. Внутри ЕС иногда применяются правила координации соцстраха, но это отдельная процедура с документами страны прежнего страхования.' },
        { kind: 'checklist', items: [
          'Контракт есть, но работодатель не платил contribuições: пособие может зависнуть — проверяйте carreira contributiva',
          'Вы на recibos verdes: правила похожи, но период ожидания и лимиты отличаются от trabalhador por conta de outrem',
          'Вы на испытательном сроке: право на baixa не исчезает, но нужна корректная коммуникация с работодателем',
          'Удалённая работа из дома во время baixa не “безопасный компромисс”: если вы нетрудоспособны, работать нельзя без разрешённого режима',
          'Диагноз работодателю раскрывать не нужно; медицинская информация защищена',
          'Если болезнь связана с acidente de trabalho или doença profissional, это не обычный subsídio de doença — подключается страховая/режим профессиональных рисков'
        ] },
        { kind: 'warning', text: 'Не подписывайте “добровольное” отсутствие без оплаты вместо baixa, если вы реально больны. Это лишает вас стандартного следа CIT и может стоить пособия.' }
      ]
    }
  ],
  costs: [
    { label: 'Autodeclaração de doença через SNS24', amountEUR: 0, note: 'Бесплатно, до 3 дней, максимум 2 раза в год; обычно без выплаты subsídio de doença' },
    { label: 'Приём в SNS для получения CIT', amountEUR: 0, note: 'В SNS пользовательские сборы для большинства первичных обращений отменены; частная консультация оплачивается по тарифу клиники/страховки' },
    { label: 'Минимальная зарплата SMN 2026', amountEUR: 920, note: 'Ориентир для зарплат; пособие считается не от SMN, а от зарегистрированной remuneração de referência' },
    { label: 'IAS 2026', amountEUR: 537.13, note: 'Индикатор социальных выплат; используется в ряде лимитов и минимальных правил Segurança Social' }
  ],
  sources: [
    { title: 'Segurança Social — Subsídio de Doença', url: 'https://www.seg-social.pt/subsidio-de-doenca', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS24 — портал медицинских услуг и autodeclaração de doença', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — faltas justificadas por doença', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
