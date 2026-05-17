export default {
  editorialVoice: 'hackportugal',
  id: 'cruz-vermelha-portuguesa',
  categoryId: 'emergency_rights',
  title: 'Cruz Vermelha Portuguesa: социальная помощь, курсы first aid и волонтёрство',
  tldr: 'Cruz Vermelha Portuguesa — не замена 112 и INEM, а сеть местных делегаций: неэкстренная перевозка больных, apoio domiciliário для пожилых, помощь уязвимым семьям, мигрантам и беженцам, курсы primeiros socorros и волонтёрство. В 2026 сертифицированные курсы первой помощи обычно стоят 80–150 €, цены на ambulância для неэкстренных поездок зависят от делегации и километража. В экстренной ситуации звоните 112, а не в Red Cross напрямую.',
  tags: ['cruzvermelha', '112', 'помощь', 'курсы'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-does',
      title: 'Что делает Cruz Vermelha Portuguesa',
      content: [
        { kind: 'paragraph', text: 'Cruz Vermelha Portuguesa, CVP — португальская часть Международного движения Красного Креста. Это частная гуманитарная организация с сетью местных delegações. Услуги отличаются по муниципалитетам: в Лиссабоне, Порту, Алгарве и маленьких concelhos набор программ может быть разным.' },
        { kind: 'checklist', items: [
          'неэкстренная перевозка больных и людей с ограниченной мобильностью на ambulância или transporte adaptado',
          'курсы primeiros socorros, suporte básico de vida и AED/DAE, иногда с сертификатом',
          'apoio domiciliário: помощь пожилым дома, питание, гигиена, сопровождение',
          'социальная помощь семьям в уязвимом положении: продукты, одежда, ориентация по услугам',
          'поддержка мигрантов, просителей убежища и беженцев через локальные проекты',
          'медико-социальные структуры: lares, centros de dia, creches, clínicas — там, где они есть',
          'волонтёрство: socorrismo, social, youth, logística, campanhas, apoio a eventos'
        ] },
        { kind: 'warning', text: 'CVP — не “скорая по подписке”. При боли в груди, инсульте, тяжёлой травме, потере сознания, сильном кровотечении, удушье, пожаре или угрозе жизни звоните 112. Диспетчер направит INEM, bombeiros, PSP/GNR или другие службы.' }
      ]
    },
    {
      id: 'ambulance',
      title: 'Ambulância: когда Red Cross везёт, а когда звонить 112',
      content: [
        { kind: 'paragraph', text: 'Многие делегации CVP оказывают transporte de doentes não urgentes: поездки на консультацию, диализ, реабилитацию, выписку из больницы, перевозку лежачего пациента. Это платная услуга, если она не покрыта SNS, страховкой или социальной программой.' },
        { kind: 'checklist', items: [
          'экстренно и бесплатно через систему спасения: звоните 112',
          'неэкстренная медицинская поездка: звоните в местную delegação CVP заранее',
          'уточните, нужен ли médico, enfermeiro, maca, cadeira de rodas или acompanhante',
          'попросите orçamento до поездки: базовая подача + километры + ожидание + доплаты',
          'если поездку назначил SNS, спросите в unidade de saúde, положен ли transporte de doentes по направлению',
          'для частной страховки проверьте, нужна ли autorização prévia и factura с NIF',
          'сохраните factura/recibo: иногда расходы можно заявить страховке или использовать в IRS как health expense, если соответствует правилам Finanças'
        ] },
        { kind: 'warning', text: 'Не тратьте время на звонки в делегацию CVP, если состояние может ухудшиться за минуты. 112 — единая точка входа; INEM решает, какую бригаду отправить.' }
      ]
    },
    {
      id: 'first-aid-courses',
      title: 'Курсы первой помощи: что выбрать и сколько стоит',
      content: [
        { kind: 'paragraph', text: 'CVP проводит formação в области primeiros socorros. Названия и длительность зависят от школы/делегации, но для экспата полезны три формата: базовая первая помощь, Suporte Básico de Vida и SBV-DAE/AED — использование автоматического наружного дефибриллятора.' },
        { kind: 'checklist', items: [
          'ожидаемый бюджет в 2026: обычно 80–150 € за сертифицированный курс для частного лица',
          'язык: чаще португальский; в крупных городах иногда есть английские группы или корпоративный курс',
          'длительность: от коротких модулей на несколько часов до 12–25 часов для расширенных программ',
          'сертификат: заранее спросите, выдаётся ли certificado de formação и признаётся ли он работодателем',
          'практика: проверьте, есть ли отработка CPR на манекене и тренажёр DAE',
          'для работы с детьми выбирайте курс с choking/engasgamento и pediatria',
          'для ресторанов, школ, спортклубов и офисов уточняйте требования ACT, работодателя и страховщика'
        ] },
        { kind: 'paragraph', text: 'Запись обычно делается через сайт CVP, e-mail или телефон местной делегации. На практике быстрее всего: найти делегацию по concelho, написать “Quero informações sobre curso de primeiros socorros/SBV-DAE para particulares” и попросить próximas datas, preço, duração, idioma, certificado.' }
      ]
    },
    {
      id: 'social-support',
      title: 'Социальная поддержка: пожилые, семьи, мигранты, беженцы',
      content: [
        { kind: 'paragraph', text: 'Социальная помощь CVP работает локально и часто через партнёрства с Segurança Social, Câmara Municipal, Junta de Freguesia, escolas, hospitais и другими IPSS. Это не единая “федеральная льгота”: каждая delegação оценивает ситуацию и ресурсы.' },
        { kind: 'checklist', items: [
          'пожилые: apoio domiciliário, refeições, higiene, acompanhamento a consultas, teleassistência — если доступно в вашей зоне',
          'люди с инвалидностью или временной потерей мобильности: transporte adaptado и сопровождение',
          'семьи с низким доходом: cabazes alimentares, roupa, produtos de higiene, encaminhamento social',
          'мигранты и беженцы: ориентация по услугам, интеграционные проекты, гуманитарная помощь',
          'дети и молодёжь: школьная поддержка, каникулы, youth programmes — зависит от delegação',
          'чрезвычайные ситуации: временная помощь после пожара, наводнения, выселения или семейного кризиса'
        ] },
        { kind: 'paragraph', text: 'Для обращения подготовьте NIF, документ личности или ВНЖ, подтверждение адреса, composição do agregado familiar, последние recibos de vencimento/IRS/declaração da Segurança Social, договор аренды или расходы на жильё, медицинские документы при необходимости. Если документов нет, всё равно попросите atendimento social: CVP может направить в правильную службу.' },
        { kind: 'warning', text: 'CVP не заменяет Segurança Social, SNS, AIMA или Câmara Municipal. Для пособий, ВНЖ, SNS utente и жилья нужны официальные процедуры; Red Cross помогает с поддержкой и encaminhamento, но не “выдаёт статус”.' }
      ]
    },
    {
      id: 'volunteer',
      title: 'Как стать волонтёром',
      content: [
        { kind: 'paragraph', text: 'Волонтёрство в CVP — нормальный способ интеграции в Португалии: практика языка, локальные контакты, понимание системы помощи. Иностранцев принимают, но требования зависят от роли: для socorrismo и работы на мероприятиях нужна formação, для социальной помощи — интервью и правила конфиденциальности.' },
        { kind: 'checklist', items: [
          'найдите delegação по месту жительства на cruzvermelha.pt',
          'заполните форму волонтёра или напишите e-mail с темой “Voluntariado”',
          'укажите языки: russo, inglês, português, ucraniano — это ценно для помощи мигрантам',
          'опишите доступность: будни/выходные, часы в неделю, есть ли автомобиль',
          'выберите направление: emergência, social, juventude, logística, formação, tradução',
          'пройдите интервью и вводное обучение',
          'для работы с детьми или уязвимыми группами могут попросить registo criminal',
          'не обещайте больше времени, чем реально можете дать: расписания смен учитываются заранее'
        ] },
        { kind: 'paragraph', text: 'Если португальский пока слабый, начните с logística, campanhas, переводов, сортировки пожертвований или поддержки мероприятий. Для медицинских ролей и общения с пациентами язык и обучение критичны.' }
      ]
    },
    {
      id: 'contacts',
      title: 'Как быстро найти правильный контакт',
      content: [
        { kind: 'paragraph', text: 'Главный сайт CVP — cruzvermelha.pt. Там ищите “Delegações” или контакты национальной структуры. Для повседневных задач почти всегда нужен не центральный офис, а местная delegação в вашем concelho.' },
        { kind: 'checklist', items: [
          'для скорой угрозы жизни: 112',
          'для медицинского совета без угрозы жизни: SNS 24 — 808 24 24 24',
          'для неэкстренной ambulância: местная delegação CVP или bombeiros da área',
          'для курса first aid: отдел formação местной CVP',
          'для пожилого родственника: perguntar por apoio domiciliário / serviço social',
          'для беженцев и гуманитарной помощи: perguntar por apoio social / migrações / refugiados',
          'для волонтёрства: perguntar por voluntariado'
        ] },
        { kind: 'paragraph', text: 'Полезная фраза по-португальски: “Bom dia, moro em [concelho] e gostaria de saber se a Cruz Vermelha local tem [transporte de doentes não urgentes / curso de primeiros socorros / apoio domiciliário / voluntariado]. Podem enviar preços, horários e documentos necessários?”' }
      ]
    }
  ],
  costs: [
    { label: 'Курс primeiros socorros / SBV', amountEURMin: 80, amountEURMax: 150, note: 'Типичный диапазон для сертифицированных курсов в 2026; точная цена зависит от длительности, делегации и формата.' },
    { label: 'Неэкстренная ambulância CVP', amountEURMin: 0, amountEURMax: 999, note: 'Нет единого тарифа по стране: может покрываться SNS/страховкой/социальной программой или оплачиваться по подаче, километрам, ожиданию и оснащению.' },
    { label: 'Волонтёрство', amountEUR: 0, note: 'Подача заявки бесплатна; обучение и экипировка зависят от роли и делегации.' }
  ],
  sources: [
    { title: 'Cruz Vermelha Portuguesa — официальный сайт и услуги', url: 'https://www.cruzvermelha.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Cruz Vermelha Portuguesa — Contactos e delegações', url: 'https://www.cruzvermelha.pt/contacte-nos.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'INEM — номер 112 и экстренная медицинская помощь', url: 'https://www.inem.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — контакт 808 24 24 24 и медицинская ориентация', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
