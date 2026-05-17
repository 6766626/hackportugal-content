export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'Что обязательно попробовать в Португалии — по регионам',
  tldr: 'Португальская кухня очень региональная. Лиссабон: сардины, amêijoas à Bulhão Pato. Порту: Francesinha, Tripas à moda do Porto. Алентежу: açorda, migas, ensopado de borrego, carne de porco à alentejana. Север: caldo verde. Мадейра: espetadas. Азоры: cozido das Furnas. Главное блюдо-икона — bacalhau (треска), у которой «365 рецептов». И pastéis de nata на десерт — везде.',
  tags: ['еда', 'блюда', 'кухня', 'рестораны', 'регионы'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Лиссабон и центральное побережье',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — сардины на гриле, сезон июнь–сентябрь. Праздник Santo António (13.06) — день сардин',
          '🐚 Amêijoas à Bulhão Pato — моллюски в соусе из чеснока, оливкового масла, кинзы и лимона',
          '🍲 Bacalhau à Brás — треска соломкой с картошкой и яйцом, главное домашнее блюдо',
          '🍛 Arroz de marisco — рис с морепродуктами в томатном соусе',
          '🧀 Queijo Serra da Estrela DOP — мягкий овечий сыр из региона Serra da Estrela; лучший сезон обычно поздняя осень — весна',
          '🥐 Pastéis de nata — заварной крем в хрустящем тесте, сверху корица',
          '🍷 Vinho de Carcavelos — историческое креплёное DOC-вино зоны Oeiras/Cascais, чаще белое/янтарное, но не строго только белое'
        ]}
      ]
    },
    {
      id: 'porto-north',
      title: 'Порту и север',
      content: [
        { kind: 'checklist', items: [
          '🥪 Francesinha — сэндвич-монстр с мясом, колбасой, плавленым сыром и соусом из пива и томатов. Икона Порту',
          '🥬 Caldo verde — суп из капусты kale и картофеля с chouriço. Национальное зимнее блюдо',
          '🐄 Tripas à moda do Porto — рубец с фасолью. Портуанцев называют «tripeiros» за это блюдо',
          '🍷 Vinho Verde — вино северо-запада Португалии; часто лёгкое, свежее и слегка газированное, но есть и более сложные стили, особенно Alvarinho и Loureiro',
          '🍷 Porto — сладкое креплёное вино, от tawny до vintage. Дегустация в погребах Gaia',
          '🐟 Cabidela — курица или кролик в собственной крови, традиционное блюдо Minho',
          '🥖 Bolinhos de bacalhau — фрикадельки из трески, закуска повсюду'
        ]}
      ]
    },
    {
      id: 'alentejo-south',
      title: 'Алентежу и юг',
      content: [
        { kind: 'checklist', items: [
          '🍲 Açorda alentejana — хлебный суп с яйцом, кинзой, чесноком и оливковым маслом',
          '🐷 Carne de porco à alentejana — свинина с моллюсками amêijoas. Знаменитое сочетание «море и земля»',
          '🐑 Ensopado de borrego — тушёная ягнятина на хлебных лепёшках',
          '🐷 Presunto de Barrancos — хамон из иберийской свиньи на дубовой диете, DOP',
          '🍷 Vinhos do Alentejo — насыщенные красные вина с Touriga Nacional и Aragonez',
          '🥧 Sericaia со сливой — традиционный десерт из Elvas',
          '🍮 Pão de Rala — монастырский десерт из миндаля, яичных желтков и doce de gila/chila'
        ]}
      ]
    },
    {
      id: 'algarve',
      title: 'Алгарве',
      content: [
        { kind: 'checklist', items: [
          '🍲 Cataplana — медный котелок с рыбой или моллюсками в томатном бульоне. Готовится на двоих',
          '🐙 Polvo à lagareiro — осьминог, запечённый с оливковым маслом и раздавленным картофелем',
          '🦐 Gambas grelhadas / camarão grelhado — креветки на гриле с солью и лимоном',
          '🐟 Xerém de conquilhas — кукурузная каша с моллюсками',
          '🍯 Medronho — крепкая aguardente из плодов земляничного дерева, обычно около 40–50% ABV',
          '🥜 Doces de amêndoa — миндальные сладости'
        ]}
      ]
    },
    {
      id: 'islands',
      title: 'Мадейра и Азоры',
      content: [
        { kind: 'substeps', items: [
          { id: 'mad', title: 'Мадейра', content: [
            { kind: 'checklist', items: [
              'Espetada — говядина на шампуре из лаврового дерева',
              'Bolo do caco — пшеничная лепёшка с добавлением батата, обычно подаётся с чесночным маслом',
              'Poncha — aguardente de cana da Madeira + мёд + лимон/апельсин; бывают версии с маракуйей и другими фруктами',
              'Lapas — морские блюдечки на гриле',
              'Vinho da Madeira — креплёное вино, знаменитое с XV века'
            ]}
          ]},
          { id: 'azr', title: 'Азорские острова', content: [
            { kind: 'checklist', items: [
              'Cozido das Furnas — мясное рагу, приготовленное в вулканической почве за 6 часов',
              'Queijo de São Jorge — острый сыр DOP',
              'Bife à Regional — стейк с чесночным маслом и pimenta da terra',
              'Chicharros — мелкая жареная рыба',
              'Vinho dos Biscoitos — белое вино с виноградников на лаве'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bacalhau',
      title: 'Бакалхау — «365 рецептов»',
      content: [
        { kind: 'paragraph', text: 'Треска — самая важная рыба для португальцев, хотя сама Португалия почти не ловит эту рыбу: bacalhau в основном импортируется из Северной Атлантики, особенно из Норвегии и Исландии. Пословица: «365 способов приготовить bacalhau, по одному на каждый день года». Вот топ-6:' },
        { kind: 'checklist', items: [
          'à Brás — соломка с картошкой и яйцом',
          'à Gomes de Sá — кусками с картофелем и луком, запечённая',
          'com Natas — в сливочном соусе',
          'à Lagareiro — запечённая с раздавленным картофелем и оливковым маслом',
          'à Zé do Pipo — с картофельным пюре и майонезом, запечённая',
          'Pastéis de bacalhau — фрикадельки, закуска везде'
        ]}
      ]
    },
    {
      id: 'where-to-eat',
      title: 'Где искать аутентичную еду',
      content: [
        { kind: 'checklist', items: [
          '🏠 Tasca — маленький местный ресторан, низкие цены, высокое качество',
          '🍽️ Cervejaria — пивная со свежими морепродуктами',
          '🧀 Casa de pasto — дневной обед с menu do dia, часто около € 10–15 (в небольших городах иногда дешевле, в туристических районах дороже)',
          '❌ Избегайте ресторанов с «туристическим меню» и фото еды снаружи',
          '✅ Ищите заведения, где едят местные: обед после 13:00, ужин после 20:00',
          '💡 Вопрос «O que é típico aqui?» откроет тайны региона'
        ]},
        { kind: 'warning', text: 'Couvert в Португалии обычно платный, если вы его потребляете. Если не хотите — сразу откажитесь и не ешьте; за непрошенные и нетронутые закуски платить не обязаны. Цена couvert должна быть указана в меню/прайс-листе.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/en/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Mediterranean diet (PT inclusion)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — регионы', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}