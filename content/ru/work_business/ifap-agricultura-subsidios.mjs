export default {
  editorialVoice: 'hackportugal',
  id: 'ifap-agricultura-subsidios',
  categoryId: 'work_business',
  title: 'IFAP: субсидии PEPAC для микро-фермеров и agricultor familiar',
  tldr: 'IFAP платит сельхозсубсидии по PEPAC 2023-2027: базовые/экологические выплаты, apoios associados и режимы для малых хозяйств. Для экспата с участком это не «деньги за землю»: нужны NIF, IBAN, регистрация beneficiário IFAP, parcelas в iSIP/parcelário, atividade agrícola и ежегодный Pedido Único. Реалистично для микро-хозяйства — примерно 500-3 000 € в год, но сумма зависит от культур, гектаров, животных и правил года. Estatuto da Agricultura Familiar даёт приоритеты и льготы, но требует семейного труда, доходов от сельского хозяйства и лимитов.',
  tags: ['ifap', 'pepac', 'ферма', 'agricultura'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-ifap-pays',
      title: 'Что реально платит IFAP',
      content: [
        { kind: 'paragraph', text: 'IFAP — Instituto de Financiamento da Agricultura e Pescas. Через него проходят выплаты PEPAC 2023-2027: прямые платежи CAP, экологические меры, компенсации по зонам, животные/культуры и часть инвестпроектов. Для маленького участка важны не гранты на «мечту в деревне», а ежегодный Pedido Único и корректная регистрация хозяйства.' },
        { kind: 'paragraph', text: 'Типичный микро-фермер с несколькими гектарами оливок, виноградника, фруктового сада, пастбища или огорода может видеть порядок 500-3 000 € в год. Это не гарантированная ставка: выплаты считаются по eligible hectares, культуре, региону, правам/режимам, экологическим обязательствам, животным и бюджету конкретной кампании.' },
        { kind: 'checklist', items: [
          'PEPAC действует на период 2023-2027; заявки и выплаты идут ежегодными кампаниями',
          'Основная форма — Pedido Único, подаётся через Portal do IFAP или entidade reconhecida',
          'Нужны parcelas, внесённые в iSIP/parcelário, с правильными культурами и площадями',
          'Земля должна быть вашей, арендованной или законно используемой; «сосед разрешил» без документа рискованно',
          'Для животных нужны корректные регистрации в SNIRA/BDN и соблюдение ветеринарных правил',
          'Продажа продукции требует atividade aberta в Finanças и нормальных счетов/faturas',
          'Субсидии могут проверяться на месте и по спутниковому мониторингу',
          'Ошибки в площадях, культурах или двойное декларирование земли ведут к сокращениям и возвратам'
        ] }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Кто может подать заявку как экспат',
      content: [
        { kind: 'paragraph', text: 'Гражданство обычно не является ключевым фильтром. Важнее быть идентифицированным в Португалии как beneficiário IFAP, иметь NIF, банковский счёт с IBAN, доступ к Portal do IFAP и законное право использовать сельхозземлю. Для резидента с ВНЖ, гражданина ЕС с CRUE или компании Lda путь практически одинаковый: сначала регистрация хозяйства, потом ежегодная заявка.' },
        { kind: 'checklist', items: [
          'NIF и доступ к Finanças; для онлайн-процессов удобны Chave Móvel Digital или Cartão de Cidadão',
          'IBAN на имя заявителя или компании',
          'Документ на землю: escritura/caderneta predial, договор аренды, comodato или outro título válido',
          'Регистрация beneficiário IFAP и dados de identificação atualizados',
          'Parcelário/iSIP: каждая сельхозплощадь должна быть нарисована и классифицирована',
          'Atividade agrícola в Finanças, если есть регулярная продажа продукции или предпринимательская деятельность',
          'NISS и Segurança Social — если вы работаете как trabalhador independente или нанимаете работников',
          'Отсутствие критических долгов перед Autoridade Tributária и Segurança Social для многих мер поддержки',
          'Для органики — contrato с entidade certificadora и соблюдение режима produção biológica'
        ] },
        { kind: 'warning', text: 'Покупка quinta или terreno rústico сама по себе не даёт ВНЖ и не создаёт права на субсидии. IFAP смотрит на реальную сельхозэксплуатацию, документы на пользование землёй и соблюдение правил кампании.' }
      ]
    },
    {
      id: 'register-ifap',
      title: 'Как зарегистрироваться в IFAP и подготовить участок',
      content: [
        { kind: 'paragraph', text: 'Практический путь для новичка — не пытаться сразу заполнить всё самому, а пойти в associação agrícola, gabinete técnico или entidade reconhecida в вашем concelho. Они видят местные культуры, знают parcelário и обычно подают Pedido Único за небольшую плату. Но ответственность за данные остаётся на вас.' },
        { kind: 'substeps', items: [
          { id: 'beneficiario', title: '1. Стать beneficiário IFAP', content: [
            { kind: 'paragraph', text: 'Регистрация создаёт ваш número de beneficiário/NIFAP и привязывает NIF, адрес, контакты и IBAN. Проверьте, что имя в IFAP совпадает с банковским счётом и налоговыми данными.' }
          ] },
          { id: 'parcelario', title: '2. Внести землю в parcelário/iSIP', content: [
            { kind: 'paragraph', text: 'Каждую parcela рисуют на карте, указывают культуру, площадь, режим использования и границы. Для старых quinta часто выясняется, что кадастр, caderneta predial и фактический забор не совпадают — это нужно разрулить до заявки.' }
          ] },
          { id: 'activity', title: '3. Упорядочить налоговый статус', content: [
            { kind: 'paragraph', text: 'Если вы продаёте оливковое масло, овощи, яйца, мёд или услуги, откройте atividade в Finanças с подходящим CAE/CIRS. Малый оборот может попадать под освобождение IVA по art. 53 CIVA, если соблюдён годовой лимит 15 000 €, но это не отменяет faturas и IRS.' }
          ] },
          { id: 'evidence', title: '4. Собрать доказательства хозяйства', content: [
            { kind: 'checklist', items: [
              'caderneta predial rústica или договор аренды/comodato',
              'план parcelas из iSIP',
              'фотографии культур, деревьев, систем полива, пастбищ',
              'счета на семена, растения, корм, удобрения, сертификацию',
              'ветеринарные и SNIRA/BDN записи для животных',
              'договор с lagar, adega, cooperativa или покупателями, если есть',
              'сертификат produção biológica, если заявляете органические меры'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'pedido-unico',
      title: 'Ежегодный Pedido Único: где теряют деньги',
      content: [
        { kind: 'paragraph', text: 'Pedido Único — ежегодная декларация/заявка на выплаты. Кампания обычно открывается в начале года и закрывается весной; точные даты IFAP публикует каждый год. В 2026 проверяйте calendário da campanha на ifap.pt: опоздание или исправления после срока могут означать штрафы, уменьшение выплаты или отказ.' },
        { kind: 'checklist', items: [
          'Проверьте, какие parcelas реально eligible: лес, двор, дом, бассейн и дороги не оплачиваются как сельхозплощадь',
          'Не завышайте гектары: спутниковый мониторинг и проверки быстро находят расхождения',
          'Укажите правильную культуру: olival, vinha, frutos secos, pastagem permanente, hortícolas и т.д.',
          'Сверьте обязательства по eco-regimes: они могут дать доплату, но требуют доказательств',
          'Если заявляете животных, сверяйте даты, номера, движение и ветеринарные записи',
          'Храните документы минимум несколько лет: IFAP может запросить их после выплаты',
          'Отдельно считайте налог: субсидии могут быть доходом для IRS/IRC в зависимости от вашего режима',
          'После подачи проверяйте mensagens/notificações в Portal do IFAP, а не только email'
        ] },
        { kind: 'warning', text: 'Самая дорогая ошибка новичков — подать землю, которой фактически пользуется сосед, арендатор или прежний владелец. Двойная заявка на одну parcela почти всегда приводит к конфликту, блокировке и проверкам.' }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: 'Estatuto da Agricultura Familiar: зачем он нужен',
      content: [
        { kind: 'paragraph', text: 'Estatuto da Agricultura Familiar создан Decreto-Lei 64/2018. Это не отдельная «зарплата от государства», а признание семейного сельхозхозяйства. Титул может дать приоритет или более выгодные условия в некоторых мерах PEPAC, программах развития сельских территорий, рынках locais, capacitação и административных процедурах.' },
        { kind: 'paragraph', text: 'Критерии проверяются не по красивому описанию quinta, а по доходам, труду семьи, регистрации хозяйства и лимитам. На практике титул полезен тем, кто действительно живёт сельским хозяйством хотя бы частично, а не просто владеет загородным домом с садом.' },
        { kind: 'checklist', items: [
          'Заявитель должен быть titular de exploração agrícola familiar и совершеннолетним',
          'Хозяйство должно быть зарегистрировано и идентифицировано в IFAP/parcelário',
          'Семейный труд должен быть существенной частью trabalho total da exploração',
          'Доля дохода от сельского хозяйства в доходе семьи должна соответствовать правилам estatuto',
          'Доход семьи и объём прямых платежей CAP не должны превышать установленные лимиты',
          'Нужны актуальные данные Finanças и Segurança Social',
          'Титул reconhecimento обычно запрашивается онлайн через экосистему IFAP/DGADR',
          'После признания нужно поддерживать критерии; при изменениях титул могут не продлить или аннулировать'
        ] },
        { kind: 'warning', text: 'Не путайте agricultor familiar с автоматическим налоговым спецрежимом. IVA, IRS, Segurança Social, санитарные разрешения, лицензии на воду/скважину и правила продажи продуктов остаются отдельными обязанностями.' }
      ]
    },
    {
      id: 'micro-farm-playbook',
      title: 'Рабочий план для микро-хозяйства на 2026',
      content: [
        { kind: 'paragraph', text: 'Если вы только купили или арендуете участок, цель первого года — не максимальная субсидия, а чистые данные. Исправьте parcelário, легализуйте пользование землёй, выберите культуры, откройте atividade при продажах и подайте аккуратный Pedido Único. Только после этого имеет смысл добавлять органику, животных, eco-regimes или инвестпроекты.' },
        { kind: 'checklist', items: [
          'Январь-февраль: собрать документы на землю, NIF, IBAN, доступы Portal do IFAP/Finanças',
          'Февраль-март: сходить в associação agrícola и проверить parcelário/iSIP',
          'До подачи Pedido Único: решить, какие культуры и площади реально заявлять',
          'Весна: подать Pedido Único в срок кампании 2026 и сохранить comprovativo',
          'Лето-осень: отвечать на уведомления IFAP, держать участок в заявленном состоянии',
          'При продажах: emitir faturas, вести расходы и учитывать субсидии для IRS',
          'Перед новыми инвестициями: проверить PEPAC avisos abertos, а не покупать технику «под будущий грант»',
          'Если доход от хозяйства становится регулярным: проверить Estatuto da Agricultura Familiar и Segurança Social'
        ] },
        { kind: 'warning', text: 'Гранты на трактор, irrigation, estufa или turismo rural — это не та же процедура, что ежегодные прямые платежи. Обычно нужен aviso aberto, бизнес-план, orçamento, собственное финансирование и ожидание одобрения до расходов. Покупка до aprovação часто не компенсируется.' }
      ]
    }
  ],
  costs: [
    { label: 'Регистрация beneficiário IFAP', amountEUR: 0, note: 'Обычно бесплатно; возможны расходы, если всё делает associação/gabinete.' },
    { label: 'Помощь associação agrícola с Pedido Único', amountEURMin: 25, amountEURMax: 150, note: 'Ориентир для микро-заявки; зависит от региона, числа parcelas и членства.' },
    { label: 'Реалистичная ежегодная выплата микро-хозяйству', amountEURMin: 500, amountEURMax: 3000, note: 'Не тариф IFAP, а практический порядок для малых участков; фактическая сумма считается по PEPAC.' },
    { label: 'Сертификация produção biológica', amountEURMin: 150, amountEURMax: 500, note: 'В год для маленького производителя; цена зависит от entidade certificadora и культур.' }
  ],
  sources: [
    { title: 'IFAP — Portal oficial: Pedido Único и apoios PEPAC', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PEPAC Portugal 2023-2027 — Plano Estratégico da PAC', url: 'https://www.pepacc.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGADR — Estatuto da Agricultura Familiar', url: 'https://www.dgadr.gov.pt/estatuto-da-agricultura-familiar', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 64/2018 — Estatuto da Agricultura Familiar', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2018-116068879', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
