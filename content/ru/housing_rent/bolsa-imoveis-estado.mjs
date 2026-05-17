export default {
  editorialVoice: 'hackportugal',
  id: 'bolsa-imoveis-estado',
  categoryId: 'housing_rent',
  title: 'Bolsa de Imóveis do Estado: государственная база жилья для аренды',
  tldr: 'Bolsa de Imóveis do Estado на imoveis.gov.pt — витрина объектов государства: часть выставляется на arrendamento, venda или concessão. Это не единая очередь на социальное жильё и не гарантия квартиры. Для аренды смотрите конкретный aviso: кто может подать заявку, renda, срок, документы и дедлайн. Экспатам обычно нужны NIF, легальное пребывание/ВНЖ, доходы в Portugal/IRS или эквивалент, отсутствие долгов Finanças/Segurança Social. Подача чаще бесплатна; аренда и caução зависят от конкурса.',
  tags: ['аренда', 'imoveis', 'habitação', 'estado'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это на практике',
      content: [
        { kind: 'paragraph', text: 'imoveis.gov.pt — официальный портал недвижимости, принадлежащей государству, публичным институтам и некоторым госкомпаниям. Там публикуют объекты для продажи, аренды, concessão или иных процедур. Для арендатора важны объявления с типом operação: arrendamento или arrendamento para habitação.' },
        { kind: 'paragraph', text: 'Portal da Habitação — отдельная экосистема IHRU для жилищных программ: arrendamento acessível, Apoio ao Arrendamento, 1.º Direito, Porta 65 и другие. Иногда объявление на imoveis.gov.pt ведёт к правилам или заявке через IHRU/Portal da Habitação.' },
        { kind: 'warning', text: 'Не путайте Bolsa de Imóveis do Estado с “социальной квартирой от Câmara Municipal”. Муниципальное жильё обычно оформляется через Câmara Municipal/Junta и имеет отдельные списки ожидания. На imoveis.gov.pt вы участвуете в конкретном concurso/aviso по конкретному объекту.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может подать заявку',
      content: [
        { kind: 'paragraph', text: 'Единого правила для всех объектов нет: условия задаёт aviso. Но для жилой аренды государственные объявления обычно проверяют личность, налоговую идентификацию, законное пребывание и способность платить renda.' },
        { kind: 'checklist', items: [
          'NIF в Portugal',
          'документ личности: паспорт, Cartão de Cidadão, ВНЖ или другой документ законного пребывания',
          'адрес для уведомлений и email/телефон',
          'доказательство доходов: IRS, recibos de vencimento, recibos verdes, трудовой договор, пенсия или иностранные доходы с переводом',
          'declaração de não dívida в Finanças, если aviso требует',
          'declaração de situação contributiva в Segurança Social, если aviso требует',
          'состав семьи/agregado familiar: супруг, дети, иждивенцы',
          'подтверждение, что у вас нет подходящего жилья в собственности в соответствующем município, если это условие указано',
          'для программ renda acessível — соответствие лимитам дохода и taxa de esforço, указанным в правилах программы',
          'для студентов/молодых работников — справка из университета или contrato de trabalho, если объект предназначен для этой группы'
        ] },
        { kind: 'warning', text: 'Иностранный гражданин не исключается автоматически, но “турист без права проживания” почти всегда проигрывает: для долгосрочного договора государственный арендодатель обычно требует легальное пребывание, NIF и проверяемый доход.' }
      ]
    },
    {
      id: 'how-to-search',
      title: 'Как искать объект на imoveis.gov.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Откройте портал', content: [
            { kind: 'paragraph', text: 'Зайдите на imoveis.gov.pt и используйте поиск по distrito, concelho, freguesia, типу imóvel и operação. Ищите слова “arrendamento”, “habitação”, “renda acessível”, “concurso” и “aviso”.' }
          ] },
          { id: 'read-listing', title: '2. Скачайте aviso и peças do procedimento', content: [
            { kind: 'paragraph', text: 'Карточка объекта часто выглядит простой, но юридически важны PDF-документы: aviso, caderno de encargos, minuta do contrato, planta, условия visita, срок подачи и критерии выбора.' }
          ] },
          { id: 'check-rent', title: '3. Проверьте renda и расходы', content: [
            { kind: 'paragraph', text: 'В объявлении должна быть указана renda mensal или база для предложения. Смотрите, включены ли condomínio, IMI, страхование, вода/электричество/газ и кто оплачивает ремонт. В обычной аренде коммунальные услуги почти всегда оплачивает tenant.' }
          ] },
          { id: 'visit', title: '4. Запишитесь на visita', content: [
            { kind: 'paragraph', text: 'Для старых государственных объектов visita критична: состояние может быть “as is”. Проверьте влажность, окна, электрику, certificado energético, наличие кухни, лифта и транспорт.' }
          ] }
        ] }
      ]
    },
    {
      id: 'application',
      title: 'Подача заявки: что подготовить',
      content: [
        { kind: 'paragraph', text: 'Формат подачи указан в aviso: онлайн-форма, email, физическая entrega em mão или заказное письмо. Не отправляйте “как удобно”: государственные конкурсы могут отклонить заявку за неправильный канал или пропуск подписи.' },
        { kind: 'checklist', items: [
          'formulário de candidatura из aviso',
          'копия документа личности всех взрослых членов семьи',
          'NIF всех заявителей',
          'ВНЖ/виза/документ законного пребывания, если вы не гражданин PT/EU',
          'последняя declaração de IRS и nota de liquidação; если недавно приехали — иностранная налоговая декларация/контракт/выписки с переводом',
          '3 последних payslips или recibos verdes',
          'declaração de não dívida Finanças и Segurança Social, если требуется',
          'comprovativo de morada: договор аренды, atestado de residência, счёт коммунальных услуг',
          'declaração de honra о составе семьи, отсутствии жилья или соответствии условиям программы',
          'документы о приоритете: инвалидность, дети, monoparental, displacement, если aviso даёт баллы',
          'подпись: цифровая через CMD/Cartão de Cidadão или собственноручная, как требует процедура'
        ] },
        { kind: 'warning', text: 'Дедлайны считаются строго. Если prazo заканчивается в 17:00 рабочего дня, email в 17:03 может быть недействительным. Сохраняйте comprovativo de submissão/recibo de entrega.' }
      ]
    },
    {
      id: 'contract-terms',
      title: 'Договор, срок и повышение аренды',
      content: [
        { kind: 'paragraph', text: 'После отбора публикуется lista provisória/final или уведомление победителю. Затем подписывается contrato de arrendamento. Для жилья применяются правила NRAU/Código Civil, а для arrendamento acessível — ещё специальные условия программы, включая ограничения renda и требования к сроку.' },
        { kind: 'checklist', items: [
          'срок договора: смотрите minuta; в доступной аренде часто используется долгий срок, а для студентов может быть сезонный/учебный срок',
          'caução: обычно 1–2 mensalidades, но точная сумма в aviso/contrato',
          'rendas adiantadas: проверьте, сколько месяцев нужно оплатить при подписании',
          'обновление renda: для обычных договоров annual coefficient на 2026 год — 2,16%, если договор не содержит иной законной схемы и нет исключения',
          'obras: мелкий текущий уход обычно за арендатором, структурный ремонт — за собственником, но старые здания требуют внимательного чтения',
          'subarrendamento/Alojamento Local почти всегда запрещены без письменного разрешения',
          'регистрация договора в Finanças — обязанность арендодателя; просите recibos de renda',
          'выезд: соблюдайте срок pré-aviso из договора и закона, иначе можно потерять часть caução'
        ] },
        { kind: 'warning', text: 'Низкая renda не означает “бессрочно и безусловно”. В государственных и доступных программах нарушение условий — не проживаете сами, скрыли доходы, сдали комнату, накопили долг — может привести к расторжению.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Если подходящих объектов нет',
      content: [
        { kind: 'paragraph', text: 'На imoveis.gov.pt жилых объектов может быть мало, особенно в Lisboa, Porto, Cascais, Oeiras и Algarve. Проверяйте параллельно Portal da Habitação и муниципальные программы Câmara Municipal по месту проживания.' },
        { kind: 'checklist', items: [
          'Portal da Habitação: программы IHRU и informações sobre arrendamento acessível',
          'Câmara Municipal: habitação municipal, renda apoiada, concursos locais',
          'Porta 65: поддержка аренды для молодых арендаторов, если подходите по возрасту и доходам',
          'Apoio ao Arrendamento: смотрите актуальные условия на portaldahabitacao.pt',
          'частный рынок: Idealista, Imovirtual, OLX, агентства с licença AMI',
          'кооперативы и fundações: иногда публикуют renda acessível вне imoveis.gov.pt'
        ] },
        { kind: 'paragraph', text: 'Практика: заведите таблицу с объектами, deadline, renda, требуемыми документами и статусом. Государственные объявления появляются нерегулярно, а срок подачи может быть коротким.' }
      ]
    }
  ],
  costs: [
    { label: 'Поиск на imoveis.gov.pt', amountEUR: 0, note: 'Официальный портал бесплатный; не платите посредникам за “доступ к базе”.' },
    { label: 'Подача заявки', amountEUR: 0, note: 'Обычно бесплатно, если aviso не предусматривает специфический сбор или гарантию.' },
    { label: 'Caução при подписании', amountEURMin: 920, amountEURMax: 2400, note: 'Типично 1–2 месячные renda; фактическая сумма зависит от объекта. Диапазон ориентировочный для доступной аренды, не лимит закона.' },
    { label: 'Certidão de não dívida онлайн', amountEUR: 0, note: 'В Finanças и Segurança Social обычно скачивается бесплатно при наличии доступа.' }
  ],
  sources: [
    {
      title: 'Официальный портал Imóveis do Estado',
      url: 'https://imoveis.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação — программы IHRU и аренда жилья',
      url: 'https://www.portaldahabitacao.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 68/2019 — Programa de Arrendamento Acessível',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/68-2019-122317335',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código Civil — regime do contrato de arrendamento',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
