export default {
  editorialVoice: 'hackportugal',
  id: 'centro-dia-idosos-bairro',
  categoryId: 'healthcare',
  title: 'Centro de Dia — дневная помощь пожилым',
  tldr: 'Centro de Dia — дневной центр для пожилых: человек живёт дома, а днём получает питание, присмотр, занятия, помощь с гигиеной и часто transporte. Обычно работают IPSS/ Misericórdia/associação local, график примерно 8:00–18:00 по будням. Цена в 2026 чаще 200–500 €/мес и зависит от доходов семьи; места ищут через Carta Social, Junta de Freguesia, Segurança Social и местные IPSS. Это альтернатива ERPI, если семья хочет сохранить пожилого дома, но не может оставлять его одного днём.',
  tags: ['idosos', 'ipss', 'уход', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Centro de Dia',
      content: [
        { kind: 'paragraph', text: 'Centro de Dia — социальная дневная услуга для пожилых людей, которые живут дома, но нуждаются в поддержке в течение дня. Это не дом престарелых: ночёвки нет, постоянное проживание остаётся дома у семьи или самого пожилого.' },
        { kind: 'paragraph', text: 'Типичный формат: утром забирают или человек приходит сам, в центре завтрак/обед/полдник, занятия, наблюдение, помощь с базовой гигиеной, приёмом лекарств по инструкции семьи/врача, социализация; вечером возвращение домой.' },
        { kind: 'checklist', items: [
          'Для пожилых, которые не должны оставаться одни весь день',
          'Для семей, где родственники работают с 9:00 до 18:00',
          'Для людей с лёгкой или умеренной потерей автономии',
          'Для профилактики изоляции, депрессии и падений дома',
          'Для тех, кому ERPI пока рано или психологически тяжело',
          'Для восстановления режима после госпитализации, если дома есть ночной уход'
        ] }
      ]
    },
    {
      id: 'services',
      title: 'Что обычно входит 🧓',
      content: [
        { kind: 'paragraph', text: 'Состав услуг зависит от конкретной IPSS и договора с Segurança Social. Перед записью просите regulamento interno и tabela de comparticipações: там написано, что включено, что оплачивается отдельно и как считается mensalidade.' },
        { kind: 'checklist', items: [
          'Питание: обычно завтрак, обед и lanche; иногда ужин на вынос',
          'Социальные и когнитивные занятия: гимнастика, память, музыка, рукоделие',
          'Наблюдение в течение дня и связь с семьёй при ухудшении состояния',
          'Помощь с гигиеной: умывание, душ по расписанию, смена одежды — если центр это предоставляет',
          'Поддержка в приёме лекарств по схеме, предоставленной семьёй/врачом',
          'Transporte casa-centro-casa: часто есть, но радиус и цена ограничены',
          'Праздники, экскурсии, visitas culturais — иногда за доплату',
          'Координация с Centro de Saúde или семейным врачом при необходимости'
        ] },
        { kind: 'warning', text: 'Centro de Dia не заменяет медицинский стационар, serviço de urgência, круглосуточную сиделку или ERPI. Если есть деменция с уходом 24/7, риск побегов, агрессия, постоянное лежачее состояние или ночные эпизоды — центр может отказать и предложить ERPI, SAD или cuidados continuados.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Где искать место',
      content: [
        { kind: 'paragraph', text: 'Самый практичный путь — искать не “лучший центр в Португалии”, а ближайшие учреждения в вашем concelho/freguesia: перевозка пожилого каждый день быстро становится главным ограничением.' },
        { kind: 'substeps', items: [
          { id: 'carta-social', title: '1. Проверить Carta Social', content: [
            { kind: 'paragraph', text: 'На cartasocial.pt выберите distrito, concelho, freguesia и resposta social “Centro de Dia”. В карточках обычно видно entidade, morada, telefone, capacidade и иногда situação da resposta.' }
          ] },
          { id: 'local-network', title: '2. Спросить Junta de Freguesia и Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Junta часто знает реальные очереди, transporte и IPSS, которые принимают жителей района. В маленьких freguesias это быстрее, чем ждать ответа по email.' }
          ] },
          { id: 'social-security', title: '3. Обратиться в Segurança Social', content: [
            { kind: 'paragraph', text: 'Если ситуация срочная — пожилой один, после выписки, семья не справляется — запрашивайте atendimento social в Segurança Social. Они могут направить в rede social local или подсказать respostas sociais com acordo de cooperação.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents-and-application',
      title: 'Документы и запись',
      content: [
        { kind: 'paragraph', text: 'Пакет документов различается, но IPSS почти всегда оценивает личные данные, состояние здоровья, доходы и семейную ситуацию. Для иностранца важны NIF, адрес и законное пребывание; ВНЖ помогает, но конкретный центр может принять документы по визе, CRUE или другому статусу — уточняйте заранее.' },
        { kind: 'checklist', items: [
          'Документ пожилого: Cartão de Cidadão, ВНЖ или паспорт',
          'NIF пожилого и, часто, NIF ответственного родственника',
          'Número de utente SNS и контакт Centro de Saúde/семейного врача',
          'Список диагнозов, лекарств, аллергий, ограничений питания',
          'Relatório médico, если есть деменция, диабет, инвалидность, падения, недержание',
          'Подтверждение адреса: atestado de residência, договор аренды или счёт utilities',
          'Comprovativos de rendimentos: пенсия, IRS, declaração da Segurança Social, банковские выписки — по требованию',
          'Контакты ответственного лица и разрешения на экстренную связь',
          'При необходимости: atestado médico de incapacidade multiuso'
        ] },
        { kind: 'paragraph', text: 'После подачи обычно проводят entrevista social: спрашивают, с кем живёт пожилой, кто забирает вечером, есть ли подъезд/лифт, нужен ли transporte, может ли человек есть сам, ходить в туалет, ориентироваться во времени и месте.' }
      ]
    },
    {
      id: 'price-and-contract',
      title: 'Сколько стоит в 2026',
      content: [
        { kind: 'paragraph', text: 'У IPSS с acordo de cooperação цена обычно не “фиксированная как абонемент”, а mensalidade/comparticipação familiar, рассчитанная по доходам семьи и правилам учреждения. На практике семьи часто видят диапазон 200–500 €/мес, но при высоком доходе, transporte и допуслугах сумма может быть выше.' },
        { kind: 'checklist', items: [
          'Попросите tabela de comparticipações до подписания договора',
          'Уточните, входят ли fraldas, медикаменты, средства гигиены и podologia',
          'Проверьте цену transporte и радиус маршрута',
          'Спросите, оплачиваются ли дни отсутствия, госпитализация и отпуск семьи',
          'Уточните horário: многие центры работают примерно 8:00–18:00, понедельник–пятница',
          'Проверьте, есть ли работа по feriados, в августе и между Natal/Ano Novo',
          'Попросите письменный regulamento interno и contrato de prestação de serviços',
          'Уточните срок aviso prévio для расторжения — часто 30 дней'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на цену. Для пожилого важнее расстояние, стабильность transporte, персонал, питание, возможность быстро связаться с семьёй и готовность центра работать с конкретными диагнозами.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Если места нет или нужен другой уровень ухода',
      content: [
        { kind: 'paragraph', text: 'Очереди в хороших IPSS нормальны, особенно в Lisboa, Porto, Cascais, Oeiras, Algarve и пригородах. Вставайте в лист ожидания сразу в нескольких центрах и параллельно смотрите альтернативы.' },
        { kind: 'checklist', items: [
          'SAD — Serviço de Apoio Domiciliário: помощь на дому, питание, гигиена, уборка, лекарства',
          'ERPI — Estrutura Residencial para Pessoas Idosas: постоянное проживание 24/7',
          'Centro de Convívio — легче Centro de Dia: больше социализация, меньше ухода',
          'Cuidados Continuados — медицинско-реабилитационная сеть после болезни/госпитализации, через SNS',
          'Частная сиделка: гибко, но обычно дороже при ежедневном графике',
          'Комбинация: Centro de Dia днём + apoio domiciliário вечером/утром'
        ] },
        { kind: 'paragraph', text: 'Если пожилой недавно выписан из больницы, попросите hospital social worker или Centro de Saúde помочь с encaminhamento. У них есть контакты rede social local и они быстрее понимают, какой тип resposta social подходит.' }
      ]
    }
  ],
  costs: [
    { label: 'Centro de Dia в IPSS, ориентир', amountEURMin: 200, amountEURMax: 500, note: 'Обычно mensalidade зависит от доходов семьи и правил учреждения; transporte и расходники могут быть отдельно.' },
    { label: 'Transporte casa-centro-casa', amountEURMin: 0, amountEURMax: 100, note: 'Иногда включён, иногда оплачивается отдельно; зависит от расстояния и маршрута.' },
    { label: 'Частный Centro de Dia', amountEURMin: 400, amountEURMax: 900, note: 'Рыночные цены сильно различаются по региону, графику, питанию и уровню ухода.' }
  ],
  sources: [
    { title: 'Carta Social — поиск respostas sociais, включая Centro de Dia', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — respostas sociais para pessoas idosas', url: 'https://www.seg-social.pt/idosos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — informação sobre instituições particulares de solidariedade social', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
