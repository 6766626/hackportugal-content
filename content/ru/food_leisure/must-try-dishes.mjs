export default {
  editorialVoice: 'hackportugal',
  id: 'must-try-dishes',
  categoryId: 'food_leisure',
  title: 'Что обязательно попробовать в Португалии — по регионам',
  tldr: 'Португальская кухня очень региональная. Лиссабон: сардины, amêijoas à Bulhão Pato. Порту: Francesinha, Tripas à moda do Porto. Алентежу: cozido, açorda. Север: caldo verde. Мадейра: espetadas. Азоры: cozido das Furnas. Главное блюдо-икона — bacalhau (треска), у которой «365 рецептов». И pastéis de nata на десерт — везде.',
  tags: ['еда', 'блюда', 'кухня', 'рестораны', 'регионы'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'lisbon-center',
      title: 'Лиссабон и центральное побережье',
      content: [
        { kind: 'checklist', items: [
          '🐟 Sardinhas assadas — сардины на гриле, сезон июнь–сентябрь. Праздник Santo António (13.06) — день сардин',
          '🐚 Amêijoas à Bulhão Pato — моллюски в чесночно-лаймовом бульоне с кинзой',
          '🍲 Bacalhau à Brás — треска соломкой с картошкой и яйцом, главное домашнее блюдо',
          '🍛 Arroz de marisco — рис с морепродуктами в томатном соусе',
          '🧀 Queijo da Serra da Estrela — мягкий овечий сыр DOP, с августа по март',
          '🥐 Pastéis de nata — заварной крем в хрустящем тесте, сверху корица',
          '🍷 Vinho de Carcavelos — историческое креплёное белое вино района Cascais'
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
          '🍷 Vinho verde — молодое лёгкое вино с лёгкой искоркой, лучший региональный выбор',
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
          '🍮 Pão de Rala — миндально-тыквенный десерт монастырского происхождения'
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
          '🦐 Gambas à la Plancha — креветки на гриле с солью',
          '🐟 Xerém de conquilhas — кукурузная каша с моллюсками',
          '🍯 Medronho — алкоголь из земляничного дерева, местный крепкий напиток 48%',
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
              'Bolo do caco — лепёшка из сладкого картофеля с чесночным маслом',
              'Poncha — ром + мёд + лимон + местный фрукт',
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
        { kind: 'paragraph', text: 'Треска — самая важная рыба для португальцев, хотя почти вся ловится в норвежских водах. Пословица: «365 способов приготовить bacalhau, по одному на каждый день года». Вот топ-6:' },
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
          '🧀 Casa de pasto — дневной обед с menu do dia (8–12 €)',
          '❌ Избегайте ресторанов с «туристическим меню» и фото еды снаружи',
          '✅ Ищите заведения, где едят местные: обед после 13:00, ужин после 20:00',
          '💡 Вопрос «O que é típico aqui?» откроет тайны региона'
        ]},
        { kind: 'warning', text: 'Couvert — закуски на столе (хлеб, оливки, сыр) в Португалии НЕ бесплатны, они всегда платные. Отказывайтесь: «нет, obrigado», если не хотите, иначе они будут в счёте.' }
      ]
    }
  ],
  sources: [
    { title: 'Turismo de Portugal — Gastronomia', url: 'https://www.visitportugal.com/en/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Mediterranean diet (PT inclusion)', url: 'https://ich.unesco.org/en/RL/mediterranean-diet-00884', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Wines of Portugal — регионы', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}