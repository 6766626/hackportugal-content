export default {
  editorialVoice: 'hackportugal',
  id: 'horta-comunitaria-bairro',
  categoryId: 'daily_life',
  title: 'Hortas comunitárias: общественные огороды в районах Португалии',
  tldr: 'Hortas comunitárias — муниципальные огороды для жителей: маленький участок, вода, компост и правила без пестицидов. В Lisboa программа CML Hortas Comunitárias стоит около 3 €/мес за talhão; в Cascais есть Hortas Solidárias, похожие проекты работают в Porto, Loures, Almada и других municípios. Обычно нужен NIF с адресом в município, доказательство проживания и регистрация в лист ожидания. Реальный срок ожидания в 2026: часто 6–12 мес, в центральных freguesias дольше.',
  tags: ['hortas', 'bairro', 'огород', 'lisboa', 'cascais'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое horta comunitária',
      content: [
        { kind: 'paragraph', text: 'Horta comunitária — это муниципальный или районный огород, где жителям дают небольшой talhão: участок для овощей, зелени и иногда цветов. Обычно это не аренда земли в классическом смысле, а временное право пользования по правилам Câmara Municipal или Junta de Freguesia.' },
        { kind: 'paragraph', text: 'Формат особенно популярен в Lisboa, Cascais, Porto, Loures, Almada, Oeiras, Sintra и других municípios. Цель — не коммерческое фермерство, а самообеспечение, экология, общение с соседями и использование пустующих городских земель.' },
        { kind: 'checklist', items: [
          'Выращивают овощи, зелень, ягоды, ароматические растения',
          'Участок обычно маленький: хватает для семьи, но не для продажи урожая',
          'Вода часто включена или доступна на общей точке',
          'Запрещены химические пестициды и агрессивные удобрения',
          'Нельзя строить сараи, теплицы и заборы без разрешения',
          'Участок нужно регулярно обрабатывать: заброшенные talhões забирают',
          'Есть общие дни уборки, компостирования и обучения',
          'Почти всегда действует лист ожидания'
        ] }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Где искать программу в своём município',
      content: [
        { kind: 'paragraph', text: 'Ищите на сайте вашей Câmara Municipal по словам “hortas comunitárias”, “hortas urbanas”, “hortas solidárias”, “agricultura urbana” или “ambiente”. В крупных городах заявки часто идут через муниципальный портал; в маленьких — через Junta de Freguesia.' },
        { kind: 'substeps', items: [
          { id: 'lisboa', title: 'Lisboa — CML Hortas Comunitárias', content: [
            { kind: 'paragraph', text: 'В Lisboa сеть hortas управляется Câmara Municipal de Lisboa. По состоянию на 2026 участник платит символический взнос около 3 €/мес за talhão. Заявка обычно подаётся онлайн через муниципальные сервисы или по инструкции CML; распределение зависит от свободных участков и очереди.' }
          ] },
          { id: 'cascais', title: 'Cascais — Hortas Solidárias', content: [
            { kind: 'paragraph', text: 'В Cascais действует программа Hortas Solidárias. Она ориентирована на жителей concelho и часто имеет социальный компонент: устойчивое питание, обучение, включение пожилых людей и семей. Условия и доступные hortas публикует Câmara Municipal de Cascais.' }
          ] },
          { id: 'other-municipios', title: 'Porto, Loures, Almada и другие', content: [
            { kind: 'paragraph', text: 'В Porto встречаются районные hortas в рамках программ reabilitação urbana и bairros; в Loures и Almada есть муниципальные hortas urbanas/comunitárias. Названия и формы заявок отличаются, но логика одна: резидент município, документы, очередь, правила пользования.' }
          ] }
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может получить участок',
      content: [
        { kind: 'paragraph', text: 'Базовое требование — жить в соответствующем município или freguesia. Для экспата это обычно означает: NIF, адрес в Finanças в этом concelho и документ, подтверждающий проживание. Национальность обычно не важна: ВНЖ не всегда прямо требуется, но вам нужно показать законное и фактическое проживание по адресу.' },
        { kind: 'checklist', items: [
          'NIF с актуальным адресом в município',
          'Documento de identificação: паспорт, ВНЖ, Cartão de Cidadão или CRUE для граждан ЕС',
          'Comprovativo de morada: договор аренды, счёт за luz/água/internet, atestado de residência от Junta de Freguesia',
          'Контактный email и португальский номер телефона',
          'Декларация, что вы принимаете regulamento da horta',
          'Иногда — подтверждение состава семьи или социального статуса',
          'Иногда — приоритет для пожилых, безработных, семей с низким доходом или жителей конкретного bairro',
          'Один участок на домохозяйство: дублирующие заявки могут отклонить'
        ] },
        { kind: 'warning', text: 'Если вы недавно переехали и адрес в NIF ещё старый, сначала обновите morada в Finanças. Многие municípios сверяют адрес именно по налоговому профилю, а не только по договору аренды.' }
      ]
    },
    {
      id: 'application-process',
      title: 'Как подать заявку и сколько ждать',
      content: [
        { kind: 'paragraph', text: 'Процесс небыстрый. В популярных районах Lisboa, Cascais и Porto свободные talhões появляются после отказов, переездов или расширения сети. Реалистичный срок ожидания в 2026 — 6–12 месяцев; в центральных freguesias и у моря может быть дольше.' },
        { kind: 'checklist', items: [
          'Найдите страницу программы на сайте Câmara Municipal или Junta de Freguesia',
          'Проверьте, какие hortas относятся к вашему адресу',
          'Заполните formulário de candidatura',
          'Загрузите NIF, удостоверение личности и comprovativo de morada',
          'Выберите предпочтительную horta, если форма это позволяет',
          'Сохраните номер заявки или email-подтверждение',
          'Раз в 2–3 месяца проверяйте статус, но не подавайте дубликаты без причины',
          'Когда вас пригласят, подпишите termo de responsabilidade/regulamento',
          'Оплатите первый взнос, если он предусмотрен',
          'Получите номер talhão и инструкции по доступу'
        ] },
        { kind: 'warning', text: 'Не покупайте инструменты и рассаду заранее. Очередь не гарантирует конкретную дату, а муниципалитет может предложить участок в другой horta или попросить подтвердить, что вы всё ещё живёте в concelho.' }
      ]
    },
    {
      id: 'rules-and-etiquette',
      title: 'Правила и соседская этика 🌱',
      content: [
        { kind: 'paragraph', text: 'Horta comunitária — это не дача. Земля общая, вода общая, соседи рядом. Хорошая репутация важна: если вы не соблюдаете правила, участок могут передать следующему в очереди.' },
        { kind: 'checklist', items: [
          'Не используйте химические гербициды и инсектициды',
          'Не занимайте чужие грядки, проходы и общие зоны',
          'Не продавайте урожай как коммерческий продукт, если правила это запрещают',
          'Поливайте экономно: летом в Португалии бывают ограничения воды',
          'Не оставляйте пластик, мусор, старые горшки и строительные материалы',
          'Соблюдайте horários de funcionamento, если horta закрывается на ключ',
          'Участвуйте в dias comunitários: уборка, компост, ремонт дорожек',
          'Сообщайте координатору о вредителях, поломке крана или конфликте',
          'Если уезжаете на лето, договоритесь о поливе или официально предупредите',
          'Если больше не можете ухаживать, откажитесь от участка письменно'
        ] },
        { kind: 'paragraph', text: 'Для экспатов horta — хороший способ встроиться в bairro: соседи подскажут, что реально растёт в вашей зоне, когда сажать couve, tomate, coentros, alface и как спасаться от caracóis без химии.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Если очередь длинная',
      content: [
        { kind: 'paragraph', text: 'Очередь 6–12 месяцев — нормальная ситуация, поэтому стоит иметь план Б. Особенно если вы живёте в центре Lisboa или Cascais, где спрос выше предложения.' },
        { kind: 'checklist', items: [
          'Проверьте соседние freguesias: иногда Junta ведёт отдельный список',
          'Спросите в associação de moradores вашего bairro',
          'Ищите “horta pedagógica” — иногда нужны волонтёры без отдельного участка',
          'Проверьте Facebook-группы района: бывают частные shared gardens',
          'Если есть varanda, начните с vasos: ervas aromáticas, tomate cherry, morangos',
          'Уточните у арендодателя правила condomínio для горшков на балконе',
          'Для детей ищите hortas escolares или oficinas ambientais в Câmara',
          'В пригородах иногда дешевле договориться с соседом о маленьком terreno, но оформляйте письменно'
        ] },
        { kind: 'warning', text: 'Не занимайте пустой участок самовольно. В Португалии много земли выглядит “ничьей”, но у неё есть владелец: Câmara, Estado, частник или condomínio. Самовольная посадка может закончиться жалобой и демонтажем.' }
      ]
    }
  ],
  costs: [
    { label: 'Lisboa CML Hortas Comunitárias', amountEUR: 3, note: 'Ориентировочный ежемесячный взнос за talhão; проверяйте актуальный regulamento и edital конкретной horta.' },
    { label: 'Базовые инструменты', amountEURMin: 25, amountEURMax: 70, note: 'Перчатки, маленькая enxada, tesoura de poda, regador; часто часть инструментов есть в общей зоне.' },
    { label: 'Семена и рассада на старт', amountEURMin: 10, amountEURMax: 40, note: 'Зависит от сезона; на рынках и в viveiros дешевле, чем в больших магазинах.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Habitação Municipal и Hortas Comunitárias',
      url: 'https://habitacao.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Cascais — Hortas Solidárias',
      url: 'https://www.cm-cascais.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal Lisboa — serviços municipais e ambiente urbano',
      url: 'https://www.lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
