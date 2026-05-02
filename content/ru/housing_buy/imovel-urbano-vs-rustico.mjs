export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-urbano-vs-rustico',
  categoryId: 'housing_buy',
  title: 'Imóvel urbano vs rústico: IMI, налоги и разрешения',
  tldr: 'В Portugal prédio urbano — дом, квартира, участок под строительство или объект с городским назначением; prédio rústico — сельхоз/лесная земля. IMI разный: urbano обычно 0,3–0,45% от VPT в год, rústico — 0,8%. Но главный риск не ставка, а право строить: на rústico часто нельзя строить жильё без совместимости с PDM/PDI, RAN/REN, ICNF и лицензии Câmara Municipal. IUC к земле не относится: это налог на транспорт. Перед покупкой проверяйте caderneta predial, certidão permanente, PDM и ограничения.',
  tags: ['imi', 'rústico', 'urbano', 'pdm', 'покупка'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'definitions',
      title: '1. Что значит urbano, rústico и misto',
      content: [
        { kind: 'paragraph', text: 'Классификация объекта в Finanças называется natureza do prédio. Она видна в caderneta predial и влияет на IMI, оценку VPT, IMT при покупке и допустимые действия с землёй.' },
        { kind: 'checklist', items: [
          'Prédio urbano — квартира, дом, коммерческое помещение, склад, промышленный объект, а также terreno para construção.',
          'Prédio rústico — земля сельскохозяйственного или лесного назначения, где доход предполагается от земли, а не от здания.',
          'Prédio misto — один объект содержит и rústico, и urbano части: например, дом + сельхозземля в одной регистрации.',
          'VPT — valor patrimonial tributário, налоговая стоимость в Finanças; от неё считается IMI.',
          'Caderneta predial — карточка объекта в Finanças: natureza, VPT, área, proprietário, artigo matricial.',
          'Certidão permanente do registo predial — регистрация в Conservatória: собственник, ипотека, сервитуты, аресты.',
          'Descrição predial и artigo matricial — не одно и то же: первая запись в Conservatória, второй — налоговая запись в Finanças.',
          'Рекламное “quinta”, “monte”, “ruína” или “terreno com viabilidade” ничего не доказывает без PDM/PDI и письменной информации Câmara Municipal.'
        ] },
        { kind: 'warning', text: 'Если в объявлении написано “rústico com ruína”, это не означает, что можно восстановить дом для жилья. Руина может не иметь легальной licença de utilização, быть вне urban perimeter или находиться в RAN/REN/зоне ICNF.' }
      ]
    },
    {
      id: 'taxes',
      title: '2. Налоги: IMI, IMT, IS, AIMI и где тут IUC',
      content: [
        { kind: 'paragraph', text: 'Главная регулярная разница — IMI. Для urbano ставка устанавливается Câmara Municipal в пределах 0,3–0,45% от VPT в год. Для rústico ставка фиксированная — 0,8% от VPT. Платёж приходит через Portal das Finanças обычно в мае; при сумме свыше 100 € возможны 2–3 платежа по календарю Finanças.' },
        { kind: 'checklist', items: [
          'IMI urbano: 0,3–0,45% от VPT; конкретную ставку по concelho проверяйте на Portal das Finanças.',
          'IMI rústico: 0,8% от VPT.',
          'IMT при покупке жилья urbano для постоянного проживания — прогрессивная шкала; для второго жилья/инвестиций шкала иная.',
          'IMT для prédio rústico обычно 5% от цены сделки или VPT, берётся большая величина.',
          'IMT для other urban property, не жилья для собственного постоянного проживания, часто 6,5%.',
          'Imposto do Selo при покупке недвижимости — 0,8% от цены/VPT, берётся большая величина.',
          'AIMI применяется к дорогостоящей городской недвижимости: обычно к сумме VPT urbano habitacional и terrenos para construção выше 600 000 € на человека; rústico в базу AIMI обычно не входит.',
          'IRS/IRC при продаже: прирост капитала считается не по слову urbano/rústico, а по цене покупки, цене продажи, расходам, резидентскому статусу и срокам.',
          'IUC — это налог на автомобили, мотоциклы, лодки и некоторые транспортные средства. Он не является налогом на imóvel и не платится за землю или дом.',
          'Трактор, прицеп или сельхозтехника могут иметь свои регистрационные/транспортные правила, но это отдельно от IMI на участок.'
        ] },
        { kind: 'warning', text: 'Низкий IMI на rústico не компенсирует риск, если вы покупаете землю “под дом”, а Câmara Municipal не подтверждает право строительства. Потеря может быть не налоговой, а юридической: объект останется сельхозземлёй без жилья.' }
      ]
    },
    {
      id: 'construction',
      title: '3. Можно ли строить на rústico',
      content: [
        { kind: 'paragraph', text: 'Решает не Finanças, а территориальное планирование: PDM или PDI, planta de ordenamento, planta de condicionantes, RAN, REN, ICNF, Rede Natura 2000, пожарные ограничения и правила Câmara Municipal. Налоговая классификация rústico — только один сигнал, но не полный ответ.' },
        { kind: 'checklist', items: [
          'Запросите у продавца caderneta predial, certidão permanente, planta cadastral и любые старые лицензии.',
          'Проверьте PDM/PDI на сайте Câmara Municipal: категория земли, urban perimeter, espaços agrícolas, florestais, naturais, industriais.',
          'Проверьте planta de condicionantes: RAN, REN, servidões administrativas, domínio hídrico, linhas elétricas, дороги, охранные зоны.',
          'Если участок лесной или в зоне повышенного пожарного риска, проверьте ICNF и муниципальные regras de gestão de combustível.',
          'Для строительства нужен projeto, поданный архитектором/инженером, и licença или comunicação prévia в Câmara Municipal.',
          '“Viabilidade de construção” лучше получать письменно: pedido de informação prévia (PIP) или официальная informação urbanística.',
          'Восстановление ruína может быть проще, чем новое строительство, только если есть доказанная законность существующей постройки и допустимое uso.',
          'Скважина, септик, подъезд, электричество и водоснабжение требуют отдельных проверок; наличие соседского подключения не даёт вам автоматического права.',
          'Мобильный дом, tiny house, caravan или contentor не всегда обходят правила: если есть постоянное размещение, подключения и жилое использование, Câmara может считать это urban operation.'
        ] },
        { kind: 'warning', text: 'Покупка rústico с устным обещанием агента “потом поменяете на urbano” — красный флаг. Изменение классификации зависит от PDM/PDI, процедур Câmara Municipal и иногда от региональных/национальных ограничений. Это не делается простым заявлением в Finanças.' }
      ]
    },
    {
      id: 'due-diligence',
      title: '4. Проверка перед CPCV и escritura',
      content: [
        { kind: 'paragraph', text: 'Для expat-покупателя безопасная логика такая: сначала проверить право собственности и ограничения, потом налоги, потом подписывать CPCV. Особенно это важно в сельской недвижимости, где границы, доступ и постройки часто описаны хуже, чем в городе.' },
        { kind: 'checklist', items: [
          'Сверьте продавца в certidão permanente с человеком, который подписывает CPCV.',
          'Проверьте, нет ли hipoteca, penhora, arresto, usufruto, direito de preferência, servidão de passagem.',
          'Сверьте площадь в caderneta predial, Conservatória, cadastro и реальную площадь на карте; расхождения — обычный источник споров.',
          'Проверьте acesso: публичная дорога или только сервитут через соседей; устная договорённость не равна зарегистрированному праву.',
          'Попросите licença de utilização для существующего дома или подтверждение освобождения от неё для старых объектов.',
          'Проверьте, не является ли объект AUGI, незаконной застройкой или частью неоформленного наследства.',
          'Запросите dívida de condomínio, если это urbano в здании или condomínio fechado.',
          'Проверьте IMI arrears: долги продавца не должны перейти на вас, но могут осложнить сделку.',
          'Для сельхозземли проверьте права арендаторов, соседей, сообществ baldios и возможные direitos de preferência.',
          'В CPCV включите условие о возврате sinal, если PIP/urbanistic information подтвердит невозможность заявленного использования.',
          'Не переводите большой sinal без проверки адвокатом или solicitador, особенно если покупаете удалённо.'
        ] }
      ]
    },
    {
      id: 'agricultor-familiar',
      title: '5. Agricultor familiar: полезно, но не “магическая льгота”',
      content: [
        { kind: 'paragraph', text: 'Estatuto da Agricultura Familiar — режим для малых семейных хозяйств. Он может давать доступ к программам поддержки, приоритетам и некоторым административным упрощениям, но сам по себе не превращает rústico в urbano и не даёт автоматического права строить дом.' },
        { kind: 'checklist', items: [
          'Статус запрашивается через компетентные сельскохозяйственные сервисы, обычно с привязкой к exploração agrícola.',
          'Нужны доказательства реальной сельхоздеятельности, а не просто владение участком.',
          'Доходы семьи, объём труда и структура хозяйства имеют значение; критерии проверяются по действующим правилам.',
          'Статус может быть полезен для субсидий, местных рынков, коротких цепочек поставок и программ развития сельских территорий.',
          'Для строительства жилья всё равно решают PDM/PDI, Câmara Municipal, RAN/REN и другие ограничения.',
          'Если цель — жить на земле, заранее уточняйте допустимость habitação do agricultor или apoio agrícola именно в этой зоне.',
          'Сельхозпостройка, armazém agrícola или apoio agrícola не равны жилому дому: менять использование без лицензии нельзя.'
        ] },
        { kind: 'warning', text: 'Не покупайте rústico только потому, что продавец говорит “оформите agricultor familiar и построите”. Запросите письменное заключение Câmara Municipal и проверьте режимы RAN/REN/ICNF до сделки.' }
      ]
    },
    {
      id: 'conversion',
      title: '6. Как rústico становится urbano',
      content: [
        { kind: 'paragraph', text: 'На практике есть два разных процесса: градостроительное разрешение на использование/строительство и налоговое обновление в Finanças. Finanças не легализует строительство — она только отражает объект в matriz после факта или после документов Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Сначала проверьте PDM/PDI: разрешает ли зона urban use или строительство конкретного типа.',
          'Если нужна предварительная позиция, подайте PIP в Câmara Municipal.',
          'Если проект допустим, архитектор подаёт projeto de arquitetura и специализации; Câmara выдаёт лицензию или принимает comunicação prévia.',
          'После завершения работ оформляется autorização de utilização, если применимо.',
          'Затем подаётся Modelo 1 do IMI в Finanças для обновления matriz и VPT.',
          'Смена VPT может повысить IMI: rústico с низким VPT после легального дома становится urbano с новой оценкой.',
          'Массовая смена зоны с rústico на urbano возможна через изменение PDM/PDI, но это политико-административный процесс, не индивидуальная “заявка покупателя”.',
          'Если дом построен незаконно, легализация возможна не всегда; штрафы и приказ о сносе реальны.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'IMI urbano', amountEURMin: 0, amountEURMax: 0, note: '0,3–0,45% от VPT в год; ставка зависит от município, сумма в евро считается индивидуально.' },
    { label: 'IMI rústico', amountEURMin: 0, amountEURMax: 0, note: '0,8% от VPT в год.' },
    { label: 'IMT при покупке prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Обычно 5% от цены сделки или VPT, применяется большая величина.' },
    { label: 'Imposto do Selo при покупке', amountEURMin: 0, amountEURMax: 0, note: '0,8% от цены сделки или VPT, применяется большая величина.' },
    { label: 'Pedido de informação prévia / urbanistic information', amountEURMin: 20, amountEURMax: 300, note: 'Муниципальные сборы различаются по Câmara Municipal и типу запроса.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IMI, taxas municipais и informação matricial',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IMI: классификация prédio rústico, urbano и misto',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34500175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ICNF: condicionantes ambientais, floresta, Rede Natura и gestão de combustível',
      url: 'https://www.icnf.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regime jurídico dos instrumentos de gestão territorial: PDM/PDI и планирование территории',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-66785843',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
