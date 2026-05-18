export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-misericordia-saude',
  categoryId: 'healthcare',
  title: 'Cartão da Misericórdia: благотворительные клиники Santa Casa',
  tldr: 'Misericórdias — сеть местных благотворительных учреждений IPSS, не замена SNS, а параллельный низкобюджетный доступ к врачам, стоматологии и социальной поддержке. В Лиссабоне это Santa Casa da Misericórdia de Lisboa; в других городах — отдельные Santas Casas. Приём обычно стоит около 10–15 €, стоматология и анализы — по прайсу учреждения. ВНЖ и número de utente часто не обязательны, но почти всегда попросят паспорт/ВНЖ, NIF, адрес и доказательство дохода.',
  tags: ['misericordia', 'sns', 'клиника', 'соцпомощь'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Misericórdia и чем она полезна',
      content: [
        { kind: 'paragraph', text: 'Santa Casa da Misericórdia — это не одна государственная больница и не страховая. Это сеть независимых благотворительных организаций IPSS. Самая известная — Santa Casa da Misericórdia de Lisboa (SCML). В других муниципалитетах работают свои Santas Casas, объединённые в União das Misericórdias Portuguesas.' },
        { kind: 'paragraph', text: 'Для экспата это практичный вариант, когда número de utente SNS ещё не оформлен, семейного врача нет, частная страховка не покрывает нужную услугу или доход низкий. Доступ зависит от конкретного учреждения: где-то есть поликлиника, стоматология и анализы, где-то только дом престарелых и социальная служба.' },
        { kind: 'checklist', items: ['Консультации врачей общей практики по социальному тарифу', 'Стоматология: осмотр, гигиена, лечение кариеса, протезирование — если услуга есть в вашей Misericórdia', 'Психология, физиотерапия, медсестринские процедуры — по местному списку', 'Социальная поддержка: продукты, одежда, помощь пожилым, направление к técnico de serviço social', 'Помощь семьям с детьми и людям с инвалидностью', 'Иногда — аптека, анализы, рентген или партнёрские цены у внешних провайдеров'] }
      ]
    },
    {
      id: 'find-local',
      title: 'Найдите свою Santa Casa по адресу',
      content: [
        { kind: 'paragraph', text: 'Правильный путь — искать не “Cartão da Misericórdia Portugal”, а конкретную организацию по муниципалитету: “Santa Casa da Misericórdia de Lisboa”, “Misericórdia do Porto”, “Santa Casa da Misericórdia de Cascais”, “Misericórdia de Braga” и т.д. У каждой свои правила, цены и список услуг.' },
        { kind: 'checklist', items: ['Откройте сайт União das Misericórdias Portuguesas и найдите Misericórdia по concelho', 'Проверьте сайт или Facebook конкретной Santa Casa: раздел Saúde, Serviços Clínicos, Clínica Social, Ação Social', 'Позвоните и спросите: “Têm consultas médicas para utentes externos?”', 'Уточните, нужен ли Cartão de Utente / Cartão da Misericórdia / inscrição social', 'Спросите цену consulta de medicina geral и primeira consulta', 'Уточните, принимают ли без número de utente SNS', 'Попросите список документов для estrangeiro residente em Portugal'] },
        { kind: 'warning', text: 'Нет единого национального “Cartão da Misericórdia”, который автоматически действует во всех клиниках. Карта или inscrição обычно локальная: вы регистрируетесь в конкретной Misericórdia, и льготы действуют там или у её партнёров.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для регистрации 🧾',
      content: [
        { kind: 'paragraph', text: 'Misericórdias работают как социальные учреждения, поэтому часто оценивают не только личность, но и фактическое проживание и доход семьи. Для первичной медицинской консультации набор может быть проще; для льготной цены, продуктовой помощи или стоматологии по социальному тарифу документов обычно больше.' },
        { kind: 'checklist', items: ['Паспорт или ВНЖ; для граждан EU — cartão de cidadão / ID + certificado CRUE, если есть', 'NIF', 'Португальский адрес: договор аренды, recibo de renda, счёт за коммунальные услуги или atestado de residência от Junta de Freguesia', 'Контактный телефон и email', 'Número de utente SNS, если уже есть — полезно, но часто не является обязательным', 'NISS, если есть; для некоторых социальных программ могут попросить', 'Доказательство дохода: recibos de vencimento, IRS, declaração de desemprego, recibos verdes, extrato bancário — зависит от учреждения', 'Состав семьи: документы детей, свидетельство о браке/união de facto, если считают доход домохозяйства', 'Медицинские документы: рецепты, выписки, результаты анализов, список лекарств'] },
        { kind: 'warning', text: 'Если у вас нет ВНЖ и número de utente, не говорите “я не имею права на SNS”. Это неверно: доступ к SNS имеет отдельные правила. Misericórdia может принять вас как частного/социального пациента, но параллельно оформляйте número de utente в Centro de Saúde.' }
      ]
    },
    {
      id: 'prices',
      title: 'Сколько стоит и где подвох',
      content: [
        { kind: 'paragraph', text: 'Цены не регулируются единым государственным тарифом.\n\nВ 2026 году типичный социальный приём у врача в благотворительной клинике может стоить около 10–15 €, но в Лиссабоне, Порту и частично субсидируемых услугах цена отличается. Специалисты, стоматология, анализы и физиотерапия почти всегда оплачиваются отдельно.' },
        { kind: 'checklist', items: ['Спросите цену primeira consulta и consulta de seguimento — они могут отличаться', 'Уточните, нужна ли ежегодная inscrição или Cartão da Misericórdia', 'Проверьте, входит ли рецепт, перевязка, справка или направление в стоимость', 'Для стоматологии запросите orçamento до лечения', 'Спросите, есть ли acordo с Multicare, Médis, AdvanceCare или другими страховками', 'Уточните способы оплаты: Multibanco, MB WAY, наличные, банковская карта', 'Попросите recibo/fatura с NIF — может пригодиться для IRS как despesa de saúde', 'Проверьте сроки ожидания: дешёвый приём может быть не срочным'] },
        { kind: 'warning', text: 'Misericórdia не обязана принимать всех по минимальной цене. Льготы обычно завязаны на residência na área, доход, возраст, инвалидность, семейную ситуацию или направление социального работника.' }
      ]
    },
    {
      id: 'how-to-use',
      title: 'Практический сценарий: если SNS ещё не готов',
      content: [
        { kind: 'substeps', items: [
          { id: 'call', title: '1. Позвоните в свою Misericórdia', content: [
            { kind: 'paragraph', text: 'Фраза на португальском: “Sou estrangeiro residente em Portugal, ainda não tenho médico de família. Gostaria de saber se posso marcar consulta na clínica social e quais são os documentos necessários.”' }
          ] },
          { id: 'book', title: '2. Запишитесь на medicina geral', content: [
            { kind: 'paragraph', text: 'Для первичного запроса лучше начинать с врача общей практики. Он оценит ситуацию, выпишет рецепт, направит к специалисту или подскажет, где дешевле сделать анализы.' }
          ] },
          { id: 'bring', title: '3. Принесите все документы и лекарства', content: [
            { kind: 'paragraph', text: 'Возьмите паспорт/ВНЖ, NIF, адрес, список лекарств и предыдущие диагнозы. Если нужна льготная цена, принесите доказательство дохода сразу — это экономит второй визит.' }
          ] },
          { id: 'parallel-sns', title: '4. Параллельно оформляйте SNS', content: [
            { kind: 'paragraph', text: 'Misericórdia помогает закрыть быстрые бытовые медицинские задачи, но госпитализация, беременность, хронические заболевания, вакцинация и экстренная помощь должны быть привязаны к SNS. Número de utente остаётся ключевым документом для жизни в Португалии.' }
          ] }
        ] }
      ]
    },
    {
      id: 'when-not-enough',
      title: 'Когда Misericórdia не заменит врача или больницу',
      content: [
        { kind: 'paragraph', text: 'Для неотложных ситуаций используйте SNS 24 по номеру 808 24 24 24 или 112 при угрозе жизни. Благотворительная клиника не предназначена для инсульта, инфаркта, тяжёлой травмы, острой боли в груди, сильной аллергической реакции, осложнений беременности или психиатрического кризиса.' },
        { kind: 'checklist', items: ['112 — экстренная помощь при угрозе жизни', 'SNS 24 — медицинская triagem и направление в urgência', 'Centro de Saúde — utente, семейный врач, вакцинация, хронические рецепты', 'Hospital público — urgência и госпитализация', 'Misericórdia — доступная консультация, стоматология, социальная поддержка, когда услуга есть локально', 'Частная страховка — быстрее для специалистов и диагностики, но с лимитами и copagamentos'] }
      ]
    }
  ],
  costs: [
    { label: 'Социальная консультация врача', amountEURMin: 10, amountEURMax: 15, note: 'Ориентир по рынку благотворительных/социальных клиник; точный тариф устанавливает конкретная Misericórdia.' },
    { label: 'Регистрация или локальный Cartão da Misericórdia', amountEURMin: 0, amountEURMax: 20, note: 'Не везде существует; иногда бесплатно, иногда ежегодный взнос или плата за карту.' },
    { label: 'Стоматологический осмотр', amountEURMin: 15, amountEURMax: 35, note: 'Если стоматология есть в учреждении; лечение оплачивается по orçamento.' }
  ],
  sources: [
    { title: 'Santa Casa da Misericórdia de Lisboa — serviços e ação social', url: 'https://www.scml.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'União das Misericórdias Portuguesas — rede nacional de Misericórdias', url: 'https://www.umpmisericordias.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contacto e orientação para cuidados de saúde', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
