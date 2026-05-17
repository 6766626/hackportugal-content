export default {
  editorialVoice: 'hackportugal',
  id: 'lojas-mago-do-pao',
  categoryId: 'food_leisure',
  title: 'Свежий хлеб и пекарни: Mago do Pão, Padaria Portuguesa, Confeitaria Nacional',
  tldr: 'В Португалии хороший хлеб проще искать не в супермаркете, а в padaria/pastelaria: обычная булка стоит 0,20–0,45 €, большой pão alentejano, broa или regueifa — обычно 1–3 € за штуку. Padaria Portuguesa — удобная сеть с 50+ точками в Lisboa и Porto, Mago do Pão — формат «ехать специально за качеством», Confeitaria Nacional работает с 1829 года и сильна в классической выпечке. Для pastel de nata отдельно держите в списке Manteigaria.',
  tags: ['хлеб', 'padaria', 'pastelaria', 'lisboa'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'how-bakeries-work',
      title: 'Как устроены португальские пекарни',
      content: [
        { kind: 'paragraph', text: 'Padaria — место, где покупают хлеб домой. Pastelaria/confeitaria — кафе с выпечкой, кофе и часто лёгкими завтраками. На практике вывески смешиваются: в одной точке могут продавать pão, croissant, pastel de nata, суп дня и bifana.' },
        { kind: 'checklist', items: [
          'Самый свежий хлеб обычно утром: 07:00–10:00.',
          'Вторая волна выпечки бывает к обеду, но не везде.',
          'К 18:00–20:00 популярные виды могут закончиться.',
          'Хлеб часто продают поштучно, а не по весу.',
          'Попросить можно так: “Um pão alentejano, por favor” или “Queria uma broa”.',
          'Если нужен нарезанный хлеб: “Pode fatiar?” — не каждая пекарня режет.',
          'Карты принимают почти везде, но для маленькой покупки 1–2 € лучше иметь монеты или MB WAY.',
          'Пакеты могут стоить отдельно; местные часто приходят со своей сумкой.'
        ] }
      ]
    },
    {
      id: 'what-to-buy',
      title: 'Что брать: pão alentejano, broa, regueifa',
      content: [
        { kind: 'paragraph', text: 'Португальский хлеб сильно отличается по регионам. Если вы только приехали, не ограничивайтесь “pão de forma” из супермаркета: это тостовый хлеб, а не то, что местные покупают к супу, сыру и sardinhas.' },
        { kind: 'checklist', items: [
          'Pão alentejano — плотный пшеничный хлеб с толстой коркой и кисловатым вкусом; хорошо к azeite, queijo, presunto и супам.',
          'Broa — кукурузный или кукурузно-ржаной хлеб, более влажный и крошливый; хорош к caldo verde и рыбе.',
          'Regueifa — мягкий плетёный хлеб, особенно распространён на севере; удобен для завтрака и тостов.',
          'Papo-seco / carcaça — маленькая белая булка для sandes; дешёвая ежедневная база.',
          'Bolo do caco — мадейрская лепёшка; часто подают с чесночным маслом, но на материке это скорее кафе/стритфуд, чем обычная padaria.',
          'Pão de centeio — ржаной хлеб; ищите в ремесленных пекарнях и на рынках.',
          'Pastel de nata — не хлеб, но главный тест на качество pastelaria: хрустящее тесто, крем без вкуса муки, подача тёплым.'
        ] }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Куда идти: быстрый список мест',
      content: [
        { kind: 'substeps', items: [
          {
            id: 'padaria-portuguesa',
            title: 'Padaria Portuguesa — когда нужна надёжная сеть',
            content: [
              { kind: 'paragraph', text: 'A Padaria Portuguesa — крупная сеть с 50+ точками в Lisboa и Porto. Это практичный вариант для завтрака, кофе, pão, croissant и быстрых перекусов. Качество более предсказуемое, чем «вау», зато удобно: много адресов, понятное меню, нормальные часы работы.' },
              { kind: 'checklist', items: [
                'Ищите ближайшую точку на официальном сайте или в Google Maps.',
                'Хорошо подходит для экспатов в первые недели: легко заказать без сложного португальского.',
                'Типичный заказ: meia de leite + croissant / pão com manteiga.',
                'Для хлеба домой смотрите, что лежит за стойкой, а не только витрину с пирожными.',
                'В часы завтрака и обеда возможны очереди.'
              ] }
            ]
          },
          {
            id: 'mago-do-pao',
            title: 'Mago do Pão — за независимым качеством',
            content: [
              { kind: 'paragraph', text: 'Mago do Pão воспринимайте как точку для тех, кто хочет не просто «купить хлеб», а найти хороший ремесленный pão. У независимых пекарен ассортимент чаще меняется по дням, поэтому лучше приходить утром и спрашивать, что только вышло из печи: “O que saiu agora?”' },
              { kind: 'warning', text: 'У небольших пекарен график, отпуск и ассортимент могут меняться без идеального обновления сайта или Google Maps. Перед поездкой специально проверьте свежие отзывы и часы работы.' }
            ]
          },
          {
            id: 'confeitaria-nacional',
            title: 'Confeitaria Nacional — историческая классика с 1829 года',
            content: [
              { kind: 'paragraph', text: 'Confeitaria Nacional в Lisboa работает с 1829 года. Это не самая дешёвая булочная «на каждый день», а историческая confeitaria для классической португальской выпечки, кофе и подарочных сладостей. Хороший адрес, если к вам приехали гости или хочется увидеть старую lisboeta-культуру.' },
              { kind: 'checklist', items: [
                'Идите за атмосферой, тортами, bolos и традиционными сладостями.',
                'В центре Lisboa почти всегда туристический поток.',
                'Цены выше, чем в районной padaria.',
                'На Рождество особенно актуальны bolo-rei и сезонная выпечка.'
              ] }
            ]
          },
          {
            id: 'manteigaria',
            title: 'Manteigaria — отдельная остановка за pastel de nata',
            content: [
              { kind: 'paragraph', text: 'Manteigaria — не хлебная лавка, а специализированное место для pastel de nata. Смысл идти именно туда: пирожные часто подают тёплыми, производство видно на месте, поток высокий — значит, витрина быстро обновляется.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'prices',
      title: 'Цены в 2026: сколько считать нормой',
      content: [
        { kind: 'paragraph', text: 'Хлеб остаётся одной из недорогих повседневных покупок. Разброс зависит от района, размера и «ремесленности»: туристический центр Lisboa дороже, районная padaria дешевле, artisanal sourdough дороже обычного pão.' },
        { kind: 'checklist', items: [
          'Маленькая булка papo-seco/carcaça: примерно 0,20–0,45 €.',
          'Обычный батон или небольшой pão: около 0,80–1,50 €.',
          'Большой pão alentejano, broa или regueifa: чаще 1–3 €.',
          'Ремесленный хлеб на закваске: часто 3–6 € и выше.',
          'Pastel de nata: обычно 1,20–1,80 €, в туристических местах может быть выше.',
          'Кофе bica/espresso: часто 0,80–1,20 € у стойки, дороже за столиком в центре.',
          'Завтрак кофе + выпечка в сети: ориентир 2,50–5 €.'
        ] },
        { kind: 'warning', text: 'Если видите pão за 5–8 €, проверьте вес и формат: это может быть artisanal sourdough, органическая мука или большая буханка. Для обычного ежедневного хлеба 1–3 € за штуку — нормальный ориентир.' }
      ]
    },
    {
      id: 'ordering-tips',
      title: 'Как заказывать без стресса',
      content: [
        { kind: 'paragraph', text: 'В Португалии нормально сначала поздороваться, потом заказывать. В маленьких местах это важнее, чем идеальная грамматика. Достаточно простых фраз.' },
        { kind: 'checklist', items: [
          '“Bom dia” — доброе утро; говорите при входе.',
          '“Queria um pão alentejano, por favor” — мне один pão alentejano, пожалуйста.',
          '“Tem pão quente?” — есть тёплый хлеб?',
          '“É de hoje?” — это сегодняшнее?',
          '“Pode cortar/fatiar?” — можете нарезать?',
          '“Para levar” — с собой.',
          '“Para comer aqui” — здесь.',
          '“Com cartão?” — можно картой?',
          '“Obrigado/obrigada” — спасибо.'
        ] },
        { kind: 'paragraph', text: 'Если вы едите на месте, цена может отличаться от take-away, особенно в туристических районах и исторических cafés. Это нормально: обслуживание за столиком часто дороже стойки.' }
      ]
    }
  ],
  costs: [
    { label: 'Маленькая булка papo-seco/carcaça', amountEURMin: 0.2, amountEURMax: 0.45, note: 'Обычная районная padaria, цена зависит от города и размера.' },
    { label: 'Большой pão alentejano / broa / regueifa', amountEURMin: 1, amountEURMax: 3, note: 'Нормальный ориентир для ежедневного хлеба в 2026 году.' },
    { label: 'Pastel de nata', amountEURMin: 1.2, amountEURMax: 1.8, note: 'В туристических местах Lisboa и Porto может быть дороже.' },
    { label: 'Ремесленный хлеб на закваске', amountEURMin: 3, amountEURMax: 6, note: 'Зависит от веса, муки и пекарни; не сравнивайте напрямую с супермаркетом.' }
  ],
  sources: [
    { title: 'Официальный сайт A Padaria Portuguesa: адреса и меню', url: 'https://www.padariaportuguesa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Официальный сайт Confeitaria Nacional: история с 1829 года и продукты', url: 'https://confeitarianacional.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Официальный сайт Manteigaria: pastel de nata и точки продаж', url: 'https://manteigaria.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
