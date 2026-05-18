export default {
  editorialVoice: 'hackportugal',
  id: 'caderneta-predial-imovel',
  categoryId: 'housing_buy',
  title: 'Caderneta Predial — паспорт недвижимости от Finanças',
  tldr: 'Caderneta Predial — бесплатная налоговая выписка по объекту недвижимости в Portal das Finanças. В ней видны artigo matricial, владелец для целей IMI, адрес, площади, тип urbano/rústico, VPT и данные для расчёта IMI. Нужна при покупке, продаже, ипотеке, споре с арендодателем/соседом, проверке площади и налога. Онлайн скачивается за 2–5 минут по NIF владельца; это не замена certidão permanente do registo predial из Conservatória.',
  tags: ['finanças', 'imóvel', 'imi', 'покупка'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Caderneta Predial',
      content: [
        { kind: 'paragraph', text: 'Caderneta Predial, или caderneta predial urbana/rústica, — налоговая карточка объекта в Autoridade Tributária e Aduaneira через Portal das Finanças. Это запись matriz predial: как Finanças видит объект для IMI, оценки VPT и налоговых уведомлений.' },
        { kind: 'checklist', items: [
          'artigo matricial — главный налоговый идентификатор объекта',
          'distrito, concelho, freguesia и morada',
          'тип объекта: urbano, rústico или misto',
          'fração autónoma, если это квартира в condomínio',
          'titular или titulares — владелец/совладельцы в налоговой базе',
          'área total, área de implantação, área bruta privativa, área bruta dependente',
          'afetação: habitação, comércio, serviços, estacionamento и т.п.',
          'VPT — Valor Patrimonial Tributário, налоговая стоимость',
          'год inscrição na matriz и данные avaliação',
          'элементы расчёта VPT: localização, qualidade/conforto, vetustez'
        ] },
        { kind: 'warning', text: 'Caderneta Predial не доказывает право собственности так же, как registo predial. Для сделки, ипотеки и проверки залогов нужна certidão permanente do registo predial из Conservatória/IRN. Если данные Finanças и Conservatória расходятся, это красный флаг для юриста.' }
      ]
    },
    {
      id: 'why-needed',
      title: 'Зачем она нужна покупателю, владельцу и арендатору',
      content: [
        { kind: 'paragraph', text: 'Для владельца Caderneta Predial — базовый документ по IMI. Для покупателя — быстрый способ понять, что именно продаётся: квартира, гараж, кладовая, участок, отдельная fração или часть prédio. Для арендатора документ полезен, если нужно проверить адрес, владельца, назначение помещения или спорную площадь.' },
        { kind: 'checklist', items: [
          'покупка недвижимости: сверить artigo matricial с contrato-promessa и escritura',
          'продажа: нотариус, банк и агент запросят актуальную caderneta',
          'ипотека: банк использует данные объекта и VPT в пакете due diligence',
          'IMI: понять, с какого VPT считается налог',
          'спор по площади: сравнить área bruta privativa и фактические метры',
          'condomínio: проверить fração и назначение парковки/кладовой',
          'аренда: убедиться, что объект зарегистрирован как habitação, а не comércio/serviços',
          'наследство или развод: определить налоговый идентификатор имущества',
          'перепланировка: увидеть, обновлены ли данные после obras/licença',
          'проверка rural land: понять, rústico это или urbano и какой artigo указан'
        ] },
        { kind: 'paragraph', text: 'В 2026 году IMI по городским объектам обычно считается как VPT × ставка Câmara Municipal: 0,3–0,45% для prédios urbanos. Для prédios rústicos базовая ставка CIMI — 0,8%. Поэтому старый или завышенный VPT напрямую влияет на ежегодный налог.' }
      ]
    },
    {
      id: 'how-to-download',
      title: 'Как бесплатно скачать в Portal das Finanças 💻',
      content: [
        { kind: 'paragraph', text: 'Скачать может владелец объекта или его представитель с доступом к NIF. Нужен вход в Portal das Finanças: NIF + пароль, Chave Móvel Digital (CMD) или Cartão de Cidadão с reader/app.' },
        { kind: 'checklist', items: [
          'Откройте portaldasfinancas.gov.pt',
          'Войдите через Iniciar Sessão',
          'В поиске портала введите “património predial” или “caderneta predial”',
          'Откройте раздел Consultar Património Predial / Prédios',
          'Выберите нужный prédio или fração в списке объектов',
          'Нажмите obter comprovativo / caderneta predial',
          'Скачайте PDF и сохраните с датой в названии файла',
          'Проверьте, что в PDF совпадают morada, artigo, fração и titular',
          'Для сделки отправляйте только свежую версию, скачанную перед подписанием CPCV/escritura'
        ] },
        { kind: 'paragraph', text: 'Онлайн-выписка через Portal das Finanças бесплатна. Если у вас нет доступа к NIF умершего родственника, бывшего супруга или продавца, просите собственника скачать PDF либо оформляйте запрос через нотариуса/advogado/solicitador в рамках сделки.' }
      ]
    },
    {
      id: 'how-to-read',
      title: 'Как читать ключевые поля без юриста',
      content: [
        { kind: 'substeps', items: [
          { id: 'artigo', title: 'Artigo matricial', content: [
            { kind: 'paragraph', text: 'Это налоговый номер объекта внутри freguesia. В документах он обычно выглядит как prédio urbano/rústico, artigo X, fração Y. В сделке artigo должен совпадать в Caderneta Predial, certidão permanente, licença de utilização и договоре.' }
          ] },
          { id: 'classification', title: 'Urbano, rústico или misto', content: [
            { kind: 'paragraph', text: 'Urbano — городская недвижимость: квартира, дом, гараж, магазин. Rústico — сельский участок. Misto — объект с городской и сельской частью. Для покупки земли это критично: возможность строительства не следует из одной caderneta, её надо проверять в Câmara Municipal через PDM, licença и certidão.' }
          ] },
          { id: 'areas', title: 'Площади', content: [
            { kind: 'paragraph', text: 'Área bruta privativa — основная приватная площадь квартиры/дома. Área bruta dependente — зависимые помещения: гараж, кладовая, чердак, технические зоны. Рекламные “100 м²” в Idealista могут не совпадать с налоговой площадью.' }
          ] },
          { id: 'vpt', title: 'VPT', content: [
            { kind: 'paragraph', text: 'Valor Patrimonial Tributário — не рыночная цена, а налоговая стоимость. Квартира может продаваться за 450 000 €, а иметь VPT 180 000 €. IMI считается от VPT, а не от цены покупки.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Красные флаги перед покупкой или спором',
      content: [
        { kind: 'warning', text: 'Не подписывайте CPCV и не переводите sinal только по Caderneta Predial. Она не показывает ипотеку, penhora, usufruto, servidões и часть юридических ограничений. Для этого нужна certidão permanente do registo predial и проверка юристом.' },
        { kind: 'checklist', items: [
          'в Caderneta указан один titular, а продаёт другой человек',
          'адрес похож, но artigo или fração не совпадают с certidão permanente',
          'квартира продаётся с гаражом, но гараж не указан как fração/parte comum/área dependente',
          'объект рекламируется как T2, а afetação или áreas выглядят как escritório/serviços',
          'после пристройки, закрытия балкона или превращения чердака в комнату данные не обновлены',
          'земля продаётся “под строительство”, но caderneta только rústica',
          'VPT очень старый, а продавец обещает “низкий IMI навсегда”',
          'есть расхождение между morada fiscal и фактическим адресом',
          'в prédio misto непонятно, какая часть urbano, а какая rústico',
          'продавец отказывается дать свежий PDF из Portal das Finanças'
        ] },
        { kind: 'paragraph', text: 'Если вы уже владелец и видите ошибку в площади, назначении или titular, обычно исправление идёт через Finanças с Modelo 1 do IMI, документы Câmara Municipal, escritura и/или registo predial. Исправление может изменить VPT и будущий IMI — иногда вниз, иногда вверх.' }
      ]
    },
    {
      id: 'vpt-imi-update',
      title: 'VPT, IMI и когда просить переоценку',
      content: [
        { kind: 'paragraph', text: 'VPT влияет на IMI, IMT при некоторых операциях и налоговые расчёты. Владелец может запросить atualização/reavaliação через Modelo 1 do IMI, но обычно не чаще одного раза в 3 года. Это не автоматическая скидка: если коэффициенты изменились не в вашу пользу, VPT может вырасти.' },
        { kind: 'checklist', items: [
          'проверьте год avaliação в caderneta',
          'сравните VPT с текущей налоговой логикой и ставкой IMI вашей Câmara Municipal',
          'если объект старый, коэффициент vetustez иногда снижает VPT',
          'если район подорожал по zonamento, переоценка может увеличить VPT',
          'перед Modelo 1 do IMI попросите расчёт у contabilista/solicitador',
          'после obras, licença de utilização или изменения площади обновление может быть обязательным',
          'ставки IMI по município публикуются ежегодно; в 2026 ориентир для urbanos — 0,3–0,45%'
        ] },
        { kind: 'paragraph', text: 'Простой расчёт: если VPT 200 000 € и ставка IMI в município 0,35%, годовой IMI будет около 700 €. Если после переоценки VPT станет 170 000 €, IMI при той же ставке будет около 595 €.' }
      ]
    }
  ],
  costs: [
    { label: 'Скачивание Caderneta Predial в Portal das Finanças', amountEUR: 0, note: 'Бесплатно для владельца/представителя с доступом к NIF.' },
    { label: 'Ориентир IMI для prédio urbano', amountEURMin: 0, amountEURMax: 0, note: 'Не фиксированная сумма: обычно VPT × 0,3–0,45% в год, ставка зависит от Câmara Municipal.' },
    { label: 'Ориентир IMI для prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Не фиксированная сумма: по CIMI базовая ставка 0,8% от VPT.' }
  ],
  sources: [
    { title: 'Portal das Finanças — apoio ao contribuinte и serviços de património predial', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — entrada nos serviços online da Autoridade Tributária', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto Municipal sobre Imóveis (CIMI) — ставки IMI и regras do VPT', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34577875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
