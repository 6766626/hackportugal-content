export default {
  editorialVoice: 'hackportugal',
  id: 'carta-social-rede-social',
  categoryId: 'healthcare',
  title: 'Carta Social — национальная база социальных учреждений',
  tldr: 'Carta Social — бесплатная государственная карта и поиск по социальным учреждениям Португалии: creche, ama, ATL/CATL, centro de dia, lar/ERPI, apoio domiciliário, IPSS и частные лицензированные организации. В 2026 база доступна на cartasocial.pt, фильтруется по distrito, concelho, freguesia и типу resposta social; часто показывает контакты, вместимость и вакансии. Для реального места всё равно звоните учреждению: данные о vagas обновляются не всегда ежедневно.',
  tags: ['carta social', 'ipss', 'creche', 'lar', 'соцуслуги'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Carta Social и когда она нужна',
      content: [
        { kind: 'paragraph', text: 'Carta Social — официальная национальная база Ministério do Trabalho, Solidariedade e Segurança Social по “respostas sociais”: учреждениям и услугам социальной поддержки. Это не запись в очередь и не сервис оплаты, а справочник лицензированных или признанных организаций с адресами, телефонами, типом услуги и частью данных о вместимости.' },
        { kind: 'checklist', items: [
          'Найти creche для ребёнка до 3 лет рядом с домом или работой',
          'Проверить ATL/CATL — atividades de tempos livres после школы',
          'Найти centro de dia для пожилого родственника',
          'Найти lar/ERPI — Estrutura Residencial para Pessoas Idosas',
          'Найти serviço de apoio domiciliário — помощь на дому',
          'Проверить IPSS, misericórdia, fundação, associação или частную entidade',
          'Сравнить учреждения по município перед переездом',
          'Получить телефоны и e-mail для прямого запроса о vagas'
        ] }
      ]
    },
    {
      id: 'how-to-search',
      title: 'Как искать на cartasocial.pt 🔎',
      content: [
        { kind: 'paragraph', text: 'Откройте cartasocial.pt и используйте поиск по карте или форму “Pesquisa”. Самый практичный сценарий — сначала выбрать территорию, потом тип услуги. В Португалии муниципалитет называется concelho; район внутри муниципалитета — freguesia.' },
        { kind: 'checklist', items: [
          'Выберите distrito: например Lisboa, Porto, Setúbal, Faro, Braga',
          'Выберите concelho/município: например Cascais, Oeiras, Sintra, Porto, Loulé',
          'При необходимости сузьте до freguesia',
          'Выберите área: infância, população idosa, deficiência, família/comunidade и т.п.',
          'Выберите resposta social: creche, CATL, centro de dia, ERPI, apoio domiciliário',
          'Откройте карточку учреждения и сохраните название юридического лица, адрес, телефон, e-mail',
          'Проверьте “capacidade” и “utentes”/“vagas”, если поле доступно',
          'Сразу звоните: наличие свободного места лучше подтверждать устно и по e-mail'
        ] },
        { kind: 'warning', text: 'Поле о вакансиях полезно для ориентира, но не является гарантией места. В популярных concelhos вокруг Lisboa и Porto creche и ERPI могут иметь лист ожидания даже если в базе видна свободная capacidade.' }
      ]
    },
    {
      id: 'popular-categories',
      title: 'Какие категории искать: русско-португальская шпаргалка',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'Дети', content: [
            { kind: 'checklist', items: [
              'Creche — ясли обычно до 3 лет',
              'Creche familiar / ama — уход у зарегистрированной няни или семейная форма',
              'CATL / ATL — занятия и присмотр вне школьного времени',
              'Centro de atividades de tempos livres — полное название ATL',
              'Intervenção precoce — ранняя помощь детям с особенностями развития'
            ] }
          ] },
          { id: 'elderly', title: 'Пожилые', content: [
            { kind: 'checklist', items: [
              'ERPI — lar, резиденция для пожилых с проживанием',
              'Centro de dia — дневной центр без ночёвки',
              'Centro de convívio — социальная активность и общение',
              'Serviço de apoio domiciliário — помощь на дому: питание, гигиена, быт',
              'Acolhimento familiar — семейное размещение, доступно не везде'
            ] }
          ] },
          { id: 'other-support', title: 'Инвалидность, семья, кризисные ситуации', content: [
            { kind: 'checklist', items: [
              'Centro de atividades e capacitação para a inclusão — дневная поддержка людей с инвалидностью',
              'Lar residencial — проживание для людей с инвалидностью',
              'Comunidade de inserção — поддержка социальной интеграции',
              'Centro de atendimento — консультационная и социальная помощь',
              'Casa de abrigo — защищённое размещение, обычно для жертв violência doméstica'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'ipss-private-public',
      title: 'IPSS, частные и государственные: как читать карточку',
      content: [
        { kind: 'paragraph', text: 'В Carta Social встречаются разные типы entidades. IPSS — Instituição Particular de Solidariedade Social: частная некоммерческая организация с социальным статусом, часто с соглашением с Segurança Social. Также бывают misericórdias, associações, fundações, cooperativas, муниципальные структуры и коммерческие частные учреждения.' },
        { kind: 'checklist', items: [
          '“Natureza jurídica” показывает тип организации: IPSS, associação, sociedade, fundação и т.д.',
          '“Resposta social” — конкретная услуга, а не всё учреждение целиком',
          'Одна entidade может иметь несколько respostas sociais по одному адресу',
          '“Capacidade” — разрешённое количество мест, не равно свободным местам',
          '“Utentes” — фактически обслуживаемые пользователи на дату обновления',
          '“Acordo de cooperação” с Segurança Social может означать субсидируемые места',
          'Частные учреждения могут быть лицензированы, но без субсидируемой цены',
          'Для creche проверьте отдельно программу Creche Feliz, если нужен бесплатный или субсидируемый вариант'
        ] }
      ]
    },
    {
      id: 'next-actions',
      title: 'Что делать после того, как нашли учреждение',
      content: [
        { kind: 'paragraph', text: 'Carta Social даёт контакты, но реальная запись идёт напрямую через учреждение, Câmara Municipal, Segurança Social или отдельную платформу — зависит от типа услуги и муниципалитета. Для expat-семьи лучше вести таблицу: 10–20 вариантов, дата звонка, ответ, список документов, цена, очередь.' },
        { kind: 'checklist', items: [
          'Позвоните и спросите: “Tem vagas?” и “Há lista de espera?”',
          'Попросите e-mail и отправьте письменный запрос, чтобы был след',
          'Уточните mensalidade, inscrição, alimentação, fraldas/medicação, transporte',
          'Спросите, есть ли acordo com a Segurança Social или Creche Feliz',
          'Попросите список документов: NIF, NISS, utente, ВНЖ/паспорт, comprovativo de morada, IRS',
          'Для пожилых уточните медицинские ограничения, ночной уход, врачебное сопровождение',
          'Проверьте учреждение лично: доступность, запах, персонал, меню, безопасность',
          'Если вам отказывают без объяснений, попросите de admissão и наличие livro de reclamações'
        ] },
        { kind: 'warning', text: 'Не переводите “резервационный депозит” незнакомой организации только по WhatsApp. Проверяйте, что название, NIF и адрес совпадают с карточкой Carta Social и официальным e-mail учреждения.' }
      ]
    }
  ],
  costs: [
    { label: 'Поиск в Carta Social', amountEUR: 0, note: 'База cartasocial.pt бесплатна и не требует NIF, CMD или регистрации.' },
    { label: 'Звонки и визиты', amountEURMin: 0, amountEURMax: 20, note: 'Обычно бесплатно; возможны расходы на телефон/транспорт. Стоимость самой услуги устанавливает учреждение.' }
  ],
  sources: [
    { title: 'Carta Social — официальный поиск социальных учреждений и respostas sociais', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'GEP — Carta Social, Gabinete de Estratégia e Planeamento (MTSSS)', url: 'https://www.gep.mtsss.gov.pt/carta-social', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Segurança Social — IPSS и социальные ответы', url: 'https://www.seg-social.pt/ipss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
