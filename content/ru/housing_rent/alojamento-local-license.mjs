export default {
  editorialVoice: 'hackportugal',
  id: 'alojamento-local-license',
  categoryId: 'housing_rent',
  title: 'Alojamento Local (AL): лицензия на краткосрочную аренду',
  tldr: 'Alojamento Local — регистрация жилья для краткосрочной аренды туристам через Câmara Municipal и RNAL.\n\nВ 2026 году режим основан на DL 128/2014, с изменениями Mais Habitação и последующими правками: municípios могут создавать zonas de contenção и zonas de crescimento sustentável, где новые AL ограничены или приостановлены. Без номера RNAL нельзя легально размещать объект на Airbnb/Booking. Проверьте регламент Câmara до покупки квартиры под AL.',
  tags: ['al', 'аренда', 'rnal', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-al',
      title: 'Что считается Alojamento Local',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local (AL) — это краткосрочное размещение за плату, обычно для туристов, когда объект не является отелем, туристическим комплексом или empreendimento turístico. Регистрация даёт номер RNAL, который нужно указывать в объявлениях, договорах, счетах и на платформах вроде Airbnb, Booking и Vrbo.' },
        { kind: 'checklist', items: ['Moradia — отдельный дом', 'Apartamento — квартира или автономная фракция', 'Estabelecimento de hospedagem — комнаты/гостевой дом; если преобладают dormitories, может быть hostel', 'Quartos — сдача комнат в вашем основном жилье, обычно максимум 3 комнаты', 'AL не заменяет licença de utilização: объект должен быть пригоден для жилья или услуг', 'AL не равен долгосрочной аренде: IRS, IVA и обязанности перед hóspedes другие'] },
        { kind: 'warning', text: 'Если квартира находится в кондоминиуме, проверьте título constitutivo da propriedade horizontal и actas da assembleia. Для hostel в квартире обычно нужна предварительная авторизация condomínio. Для обычного apartamento формально регистрация возможна без общего разрешения, но condomínio может добиваться прекращения AL при доказанных нарушениях и по процедуре закона.' }
      ]
    },
    {
      id: 'check-municipality',
      title: 'Сначала проверьте Câmara и зоны ограничения',
      content: [
        { kind: 'paragraph', text: 'Главный риск в 2026 году — не техническая подача, а местный запрет. После Mais Habitação и последующих изменений муниципалитеты получили ключевую роль: они могут утверждать regulamento municipal do alojamento local, zonas de contenção и zonas de crescimento sustentável. В таких зонах новые регистрации AL могут быть ограничены, зависеть от квот или временно приостановлены.' },
        { kind: 'checklist', items: ['Откройте сайт Câmara Municipal по адресу объекта', 'Ищите “Alojamento Local”, “zonas de contenção”, “regulamento municipal”', 'Проверьте, разрешены ли новые AL для modalidade apartamento', 'Уточните, есть ли квоты по freguesia, улице или prédio', 'Проверьте, не действует ли suspensão de novos registos', 'Сравните адрес с картой RNAL и муниципальной картой зон', 'Если объект в Lisboa, Porto, Cascais, Albufeira, Lagos, Loulé или другой туристической зоне — не покупайте под AL без письменной проверки у Câmara', 'Попросите у продавца caderneta predial, certidão permanente predial и actas condomínio до CPCV'] },
        { kind: 'warning', text: 'Наличие AL у соседней квартиры не гарантирует, что вы получите новый номер. Старые RNAL могли быть выданы до создания зоны contenção. В 2026 году “куплю квартиру и потом оформлю Airbnb” — высокий юридический риск.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы и условия до подачи',
      content: [
        { kind: 'paragraph', text: 'Регистрация AL подаётся как comunicação prévia com prazo через Balcão do Empreendedor/ePortugal или муниципальный портал, после чего Câmara проверяет документы и может возразить. Практически подготовьте объект как бизнес: пожарная безопасность, livro de reclamações, табличка, страховка и налоговая активность.' },
        { kind: 'checklist', items: ['NIF владельца или компании', 'Доступ к portal с Chave Móvel Digital, Cartão de Cidadão или представитель с procuração', 'Caderneta predial urbana из Finanças', 'Certidão permanente predial или código de acesso', 'Licença de utilização / autorização de utilização или документ, подтверждающий назначение объекта', 'Договор аренды с разрешением на subarrendamento/AL, если вы не собственник', 'Termo de responsabilidade о соблюдении требований AL', 'Seguro de responsabilidade civil для эксплуатации AL', 'Livro de reclamações físico и электронный', 'Extintor, manta de incêndio, аптечка, инструкции безопасности и контакты 112', 'Табличка AL у входа по модели закона', 'Declaração de início/alteração de atividade в Finanças с подходящим CAE, обычно 55201 или 55204 по ситуации'] },
        { kind: 'warning', text: 'Обычный договор аренды для проживания почти всегда запрещает коммерческую краткосрочную сдачу. Если вы арендатор и запускаете AL без письменного разрешения senhorio, рискуете расторжением договора, долгами и жалобой в Câmara.' }
      ]
    },
    {
      id: 'registration',
      title: 'Подача и получение номера RNAL',
      content: [
        { kind: 'substeps', items: [
          { id: 'submit', title: '1. Подайте comunicação prévia', content: [
            { kind: 'paragraph', text: 'Подача идёт онлайн через Balcão do Empreendedor/ePortugal или через систему вашей Câmara. Вы выбираете modalidade AL, указываете адрес, вместимость, владельца exploração и прикладываете документы. После подачи запись попадает в RNAL — Registo Nacional de Alojamento Local.' }
          ] },
          { id: 'wait', title: '2. Дождитесь срока возражения Câmara', content: [
            { kind: 'paragraph', text: 'По DL 128/2014 Câmara может провести проверку и возразить, если документы неверны, объект не соответствует назначению, находится в зоне запрета или нарушает municipal regulation. В типовом режиме срок возражения короче для обычных modalidades и длиннее для hostel; на практике ориентируйтесь на инструкции вашей Câmara и не принимайте гостей до уверенности, что номер активен.' }
          ] },
          { id: 'publish', title: '3. Используйте номер RNAL везде', content: [
            { kind: 'checklist', items: ['Укажите номер RNAL в объявлении Airbnb/Booking', 'Разместите табличку AL у входа', 'Выдавайте faturas-recibo через Finanças или сертифицированную программу', 'Подавайте comunicação de hóspedes estrangeiros в систему компетентных органов, если применимо', 'Ведите livro de reclamações eletrônico', 'Храните страховку и документы объекта доступными для проверки'] }
          ] }
        ] },
        { kind: 'warning', text: 'Платформы и Câmara могут сверять объявления с RNAL. Реклама без действительного RNAL — типичный повод для штрафа и удаления объявления.' }
      ]
    },
    {
      id: 'taxes-and-duties',
      title: 'Налоги, сборы и операционные обязанности',
      content: [
        { kind: 'paragraph', text: 'AL — это не “просто аренда”. Для физлица доход обычно декларируется в IRS как категория B, если деятельность зарегистрирована, или по другой схеме в зависимости от структуры. Для компании — IRC.\n\nНалоговая модель влияет на IVA, despesas, contabilidade organizada и social security.' },
        { kind: 'checklist', items: ['Откройте или измените atividade в Finanças до первых гостей', 'Проверьте режим IVA: освобождение по art. 53 CIVA возможно только при выполнении лимитов и условий; иначе ставка обычно 6%/13%/23% по конкретной услуге и региону требует проверки у contabilista', 'Выдавайте счета за каждое бронирование, включая комиссии платформ', 'Проверьте tourist tax: Lisboa, Porto и многие municípios взимают taxa turística за ночь', 'Учитывайте IMI как собственник; AL сам по себе не отменяет IMI', 'Платите condominium charges и соблюдайте regulamento do condomínio', 'Сообщайте изменения: вместимость, владелец exploração, контакты, прекращение деятельности', 'Следите за local rules по шуму, мусору, check-in и occupancy limits'] },
        { kind: 'warning', text: 'Налоговая оптимизация AL зависит от статуса резидентства, расходов, ипотеки, IVA и количества объектов. Перед стартом дешевле оплатить contabilista, чем потом исправлять IRS/IVA и штрафы.' }
      ]
    },
    {
      id: 'loss-of-license',
      title: 'Когда AL могут остановить или отменить',
      content: [
        { kind: 'paragraph', text: 'Номер RNAL не является “вечным иммунитетом”. Câmara, ASAE, condomínio и соседи могут инициировать проверки. Муниципальные правила в 2026 году особенно важны: в zonas de contenção возможны дополнительные условия, ограничения передачи эксплуатации и local suspension.' },
        { kind: 'checklist', items: ['Câmara выявила ложные сведения в comunicação prévia', 'Объект не соответствует licença de utilização', 'Нет обязательной страховки или safety equipment', 'AL работает в зоне, где новые регистрации запрещены или приостановлены', 'Систематические жалобы на шум, мусор, безопасность или нарушение правил condomínio', 'Condomínio принял решение по процедуре закона против эксплуатации AL при доказанном ущербе спокойствию жильцов', 'Не обновлены данные владельца или capacidade', 'Используется чужой номер RNAL или номер другого объекта'] },
        { kind: 'warning', text: 'Покупка недвижимости “с AL” требует отдельного due diligence. Проверьте, передаётся ли эксплуатация, нет ли муниципального запрета на новые регистрации, активен ли RNAL, есть ли жалобы condomínio и соответствует ли объект документам. Не полагайтесь только на скриншот объявления Airbnb.' }
      ]
    }
  ],
  costs: [
    { label: 'Регистрация AL в Câmara/RNAL', amountEURMin: 0, amountEURMax: 100, note: 'Государственная подача часто бесплатна или с небольшим муниципальным сбором; зависит от Câmara.' },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 60, amountEURMax: 250, note: 'Ориентир в год для небольшого объекта; зависит от покрытия, лимитов и страховщика.' },
    { label: 'Livro de reclamações eletrônico', amountEURMin: 0, amountEURMax: 25, note: 'Регистрация электронного livro обычно бесплатна, но физическая книга/поставщики могут стоить отдельно.' },
    { label: 'Базовое оснащение безопасности', amountEURMin: 50, amountEURMax: 200, note: 'Огнетушитель, manta de incêndio, аптечка, signage; фактическая сумма зависит от объекта.' },
    { label: 'Contabilista', amountEURMin: 40, amountEURMax: 150, note: 'Типичный месячный диапазон для малого AL; компания и IVA обычно дороже.' }
  ],
  sources: [
    { title: 'RNAL — Pesquisa AL no Registo Nacional de Turismo', url: 'https://rnt.turismodeportugal.pt/RNT/Pesquisa_AL.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Turismo de Portugal — Estabelecimentos de Alojamento Local | Registo', url: 'https://business.turismodeportugal.pt/pt/Planear_Iniciar/Licenciamento_Registo_da_Atividade/Alojamento_Local/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 128/2014 — regime jurídico da exploração dos estabelecimentos de alojamento local', url: 'https://dre.pt/dre/detalhe/decreto-lei/128-2014-25676943', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Programa Mais Habitação и изменения режима AL', url: 'https://dre.pt/dre/detalhe/lei/56-2023-222477692', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Alojamento Local: registo e comunicação prévia', url: 'https://eportugal.gov.pt/servicos/registar-um-estabelecimento-de-alojamento-local', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
