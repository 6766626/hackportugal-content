export default {
  editorialVoice: 'hackportugal',
  id: 'lar-residencias-idosos',
  categoryId: 'healthcare',
  title: 'Lar de Idosos / ERPI — дома престарелых в Португалии',
  tldr: 'ERPI — официальное название домов престарелых в Португалии: Estruturas Residenciais para Pessoas Idosas.\n\nВ 2026 году места делятся на социальные через Segurança Social/IPSS и полностью частные. Социальное место обычно обходится примерно в 600–1 500 €/мес и зависит от доходов семьи; IPSS без полного субсидирования — 800–2 500 €/мес; частные ERPI — 1 500–4 500 €/мес. Очереди длинные: 12–36 месяцев в Лиссабоне, Порту и прибрежных районах. Проверяйте лицензию через Carta Social.',
  tags: ['erpi', 'idosos', 'saúde', 'соцпомощь'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-erpi',
      title: 'Что такое ERPI и чем отличается от «сиделки»',
      content: [
        { kind: 'paragraph', text: 'Lar de Idosos в разговорной речи почти всегда означает ERPI — Estrutura Residencial para Pessoas Idosas. Это учреждение с проживанием, питанием, уходом, базовой медицинской поддержкой и социальной активностью для пожилых людей, которые не могут безопасно жить одни или нуждаются в постоянной помощи.' },
        { kind: 'paragraph', text: 'ERPI — не больница и не unidade de cuidados continuados. Если человеку нужна реабилитация после инсульта, паллиативная помощь или круглосуточное медицинское наблюдение, сначала проверяют направление через SNS/RNCCI. ERPI подходит для долгосрочного бытового ухода: питание, гигиена, лекарства, наблюдение, помощь при передвижении.' },
        { kind: 'checklist', items: [
          'ERPI / Lar de Idosos — постоянное проживание пожилого человека',
          'Centro de Dia — дневной центр без ночёвки',
          'Serviço de Apoio Domiciliário — помощь на дому: еда, гигиена, уборка, лекарства',
          'Residência Sénior privada — коммерческий дом престарелых, часто дороже, но быстрее',
          'IPSS — некоммерческая организация с соглашениями с Segurança Social',
          'Santa Casa da Misericórdia — частый оператор социальных ERPI в муниципалитетах',
          'RNCCI — сеть продолжительного ухода после болезни, это не обычный дом престарелых'
        ] }
      ]
    },
    {
      id: 'types-and-prices',
      title: 'Типы мест и реальные цены в 2026',
      content: [
        { kind: 'paragraph', text: 'Цена зависит не только от качества учреждения, но и от типа места. Самое важное различие: место с соглашением Segurança Social, место в IPSS без полного субсидирования и полностью частное место.' },
        { kind: 'checklist', items: [
          'Социальное место через Segurança Social/IPSS: примерно 600–1 500 €/мес, сумма считается по доходам пожилого человека и семьи',
          'IPSS с частичной оплатой или без доступного субсидированного места: примерно 800–2 500 €/мес',
          'Частная ERPI / residência sénior: примерно 1 500–4 500 €/мес',
          'Лиссабон, Cascais, Oeiras, Porto, Algarve обычно дороже внутренних районов',
          'Комната на 2–3 человека дешевле одноместной',
          'Лежачий пациент, деменция, ночной надзор, кислород, специальные диеты и подгузники могут увеличить счёт',
          'Вступительный депозит или caução у частных домов часто равен 1 месяцу оплаты',
          'Дополнительно могут оплачиваться лекарства, памперсы, транспорт, физиотерапия, парикмахер, стоматология и частные консультации'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на рекламную цену “desde 1 200 €”. Попросите minuta do contrato и список extras до подписания. В ERPI 1 400 €/мес легко превращаются в 1 700–1 900 €/мес из-за лекарств, подгузников, прачечной или транспорта.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'Как искать место: Carta Social, Segurança Social, município',
      content: [
        { kind: 'paragraph', text: 'Начинайте с Carta Social — это официальный каталог социальных учреждений Португалии. Там можно искать ERPI по distrito, concelho и freguesia, видеть тип ответа social, вместимость и контакты. Затем звоните напрямую в учреждения и параллельно обращайтесь в Segurança Social по месту проживания.' },
        { kind: 'substeps', items: [
          {
            id: 'search-carta-social',
            title: '1. Проверить учреждения в Carta Social',
            content: [
              { kind: 'checklist', items: [
                'Откройте cartasocial.pt',
                'Выберите resposta social: Estrutura Residencial para Pessoas Idosas',
                'Фильтруйте по concelho, где семья реально может навещать пожилого человека',
                'Сохраните 10–20 контактов: очередь почти везде',
                'Проверьте, указана ли entidade proprietária: IPSS, Misericórdia, private company',
                'Звоните, а не ждите ответа на email: у ERPI часто слабая административная коммуникация'
              ] }
            ]
          },
          {
            id: 'contact-social-security',
            title: '2. Записаться в Segurança Social',
            content: [
              { kind: 'paragraph', text: 'Для социального места важна avaliação socioeconómica: доходы, состояние здоровья, степень зависимости, наличие семьи, жильё, срочность. Запись делается через Segurança Social Direta, Linha Segurança Social или atendimento presencial.' }
            ]
          },
          {
            id: 'ask-local-network',
            title: '3. Подключить Centro de Saúde и Junta de Freguesia',
            content: [
              { kind: 'paragraph', text: 'Семейный врач, assistente social в Centro de Saúde, Junta de Freguesia и Câmara Municipal часто знают локальные IPSS, Santa Casa da Misericórdia и списки ожидания лучше, чем центральные сайты.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-and-admission',
      title: 'Документы и критерии приёма',
      content: [
        { kind: 'paragraph', text: 'Приём в ERPI почти всегда means-tested: учреждение смотрит доходы и имущество пожилого человека, поддержку семьи, медицинские потребности и социальный риск. Для иностранцев важны легальное проживание, NIF, SNS/utente и понятные документы о доходах.' },
        { kind: 'checklist', items: [
          'Паспорт, ВНЖ или Cartão de Cidadão / residência card',
          'NIF',
          'Número de utente SNS',
          'NISS, если есть',
          'Документ о пенсии: Segurança Social, Caixa Geral de Aposentações или иностранная пенсия',
          'IRS declaration / nota de liquidação или доказательство отсутствия IRS в Португалии',
          'Банковские выписки, если учреждение просит оценить доходы',
          'Relatório médico от семейного врача или специалиста',
          'Список лекарств и диагнозов',
          'Контакт ответственного родственника или representante legal',
          'Документ о incapacidade или grau de dependência, если есть',
          'Procuração или court guardianship, если пожилой человек не может подписывать договор'
        ] },
        { kind: 'warning', text: 'Если у пожилого человека деменция и он уже не понимает последствия договора, обычной подписи может быть недостаточно. Нужна доверенность, оформленная заранее, или legal representation через суд. Не откладывайте это до момента кризиса.' }
      ]
    },
    {
      id: 'waiting-lists-and-urgent-cases',
      title: 'Очереди: почему 12–36 месяцев и что делать срочно',
      content: [
        { kind: 'paragraph', text: 'В 2026 году спрос на ERPI выше предложения. В больших городах и на побережье типичная очередь на социальное место — 12–36 месяцев. Быстрее бывает во внутренних районах, но это усложняет визиты семьи и контроль качества.' },
        { kind: 'checklist', items: [
          'Встаньте в несколько очередей одновременно: IPSS, Misericórdia, private ERPI',
          'Не ждите “идеального” места рядом с домом — проверьте соседние concelhos',
          'Попросите assistente social оформить relatório social, если ситуация срочная',
          'Если есть риск падений, насилия, бездомности или невозможности ухода, сообщите Segurança Social и SNS',
          'Рассмотрите временно Serviço de Apoio Domiciliário + Centro de Dia',
          'Для восстановления после госпитализации спросите врача о RNCCI, а не ERPI',
          'Для частного места торгуйтесь по extras и caução, но не по базовой безопасности',
          'Посетите учреждение лично без предупреждения в разное время, если возможно'
        ] },
        { kind: 'warning', text: '“Есть место завтра, оплатите депозит по MB WAY” — красный флаг. Проверяйте юридическое лицо, лицензию, адрес, contrato de prestação de serviços и наличие учреждения в Carta Social. Не переводите caução физическому лицу без договора и recibo.' }
      ]
    },
    {
      id: 'quality-check',
      title: 'Как проверить качество и договор перед заселением',
      content: [
        { kind: 'paragraph', text: 'Цена не гарантирует качество. Важнее лицензия, персонал, прозрачный договор, доступ семьи, план ухода и реакция на падения, инфекции, деменцию и лекарства.' },
        { kind: 'checklist', items: [
          'Проверьте ERPI в Carta Social и совпадение адреса с договором',
          'Попросите licença de funcionamento или номер регистрации',
          'Уточните ratio персонала днём и ночью',
          'Спросите, кто управляет лекарствами и как фиксируются ошибки',
          'Проверьте наличие enfermeiro, médico assistente, fisioterapia, plano individual de cuidados',
          'Посмотрите запах, чистоту, состояние ванных, кнопки вызова, питание',
          'Уточните правила визитов, видеозвонков и выхода на прогулки',
          'Попросите menu semanal и список включённых услуг',
          'Проверьте, можно ли расторгнуть договор и за сколько дней',
          'Уточните, что происходит при госпитализации: сохраняется ли место и оплачивается ли полный месяц',
          'Попросите все extras в письменном приложении к договору'
        ] },
        { kind: 'paragraph', text: 'Для экспатов важный практический вопрос — язык. В частных домах в Лиссабоне, Cascais, Porto и Algarve чаще есть персонал с английским; русский язык встречается редко. Если пожилой человек не говорит по-португальски, заранее продумайте карточку с диагнозами, лекарствами, аллергиями и базовыми фразами.' }
      ]
    }
  ],
  costs: [
    { label: 'Социальное место Segurança Social / IPSS', amountEURMin: 600, amountEURMax: 1500, note: 'Ориентир в месяц; фактическая comparticipação зависит от доходов пожилого человека и семьи.' },
    { label: 'IPSS без полного субсидирования', amountEURMin: 800, amountEURMax: 2500, note: 'Ориентир в месяц; цена зависит от региона, комнаты и уровня зависимости.' },
    { label: 'Частная ERPI / residência sénior', amountEURMin: 1500, amountEURMax: 4500, note: 'Ориентир в месяц; премиальные объекты в Cascais, Lisboa, Porto и Algarve могут быть выше.' },
    { label: 'Caução / депозит в частной ERPI', amountEURMin: 1500, amountEURMax: 4500, note: 'Часто равен 1 месяцу оплаты; условия возврата должны быть в договоре.' }
  ],
  sources: [
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — pesquisa oficial de ERPI и outras respostas sociais', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — apoio social a pessoas idosas', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
