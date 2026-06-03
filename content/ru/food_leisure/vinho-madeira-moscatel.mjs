export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-madeira-moscatel',
  categoryId: 'food_leisure',
  title: 'Vinho da Madeira и Moscatel: португальские креплёные вина',
  tldr: 'Vinho da Madeira и Moscatel de Setúbal — креплёные вина, но это не «ещё один портвейн». Madeira бывает от сухого Sercial до сладкой Malvasia/Malmsey, выдержки 5, 10, 15, 20, 30, 40 и 50 лет; нормальная цена в 2026: 10 years за 18–35 €, 20 years за 70–130 €. Moscatel de Setúbal DOP обычно дешевле: базовый 5–9 €, 10 years 18–35 €, редкий Moscatel Roxo дороже. Смотрите DOP/selo, сорт, возраст и способ выдержки.',
  tags: ['vinho', 'madeira', 'moscatel', 'dop'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за вина и чем они отличаются от Porto',
      content: [
        { kind: 'paragraph', text: 'Оба вина fortified: брожение останавливают добавлением винного спирта, поэтому часть сахара остаётся в вине, а крепость обычно получается около 17–22% vol. Но стиль другой: Porto чаще фруктовый и плотный, Madeira — окислительная, ореховая, с высокой кислотностью, Moscatel de Setúbal — ароматный, апельсиново-медовый, с мускатной кожицей.' },
        { kind: 'checklist', items: [
          'Vinho da Madeira — остров Madeira, контролируется IVBAM; ищите «Madeira» / «Vinho da Madeira» и selo de garantia.',
          'Moscatel de Setúbal — DOP Setúbal / Península de Setúbal; ищите DOP, Moscatel de Setúbal или Moscatel Roxo.',
          'Madeira лучше переносит открытую бутылку: из-за окислительной выдержки она может стоять неделями и месяцами без резкой потери качества.',
          'Moscatel после открытия тоже устойчивее обычного вина, но ароматнее пить за 2–6 недель, хранить в холодильнике.',
          'Оба вина пьют маленькими порциями 60–90 мл, не как столовое vinho tinto.',
          'Для подарка безопаснее брать Madeira 10 years или Moscatel Roxo 10 years: выглядят серьёзно, но ещё не стоят как коллекционные бутылки.'
        ] }
      ]
    },
    {
      id: 'madeira-styles',
      title: 'Vinho da Madeira: Sercial, Verdelho, Bual, Malmsey',
      content: [
        { kind: 'paragraph', text: 'Классическая шкала Madeira читается по сорту и сладости. На полке супермаркета также часто будет Tinta Negra — рабочий сорт, из которого делают много доступной Madeira. Это не автоматически плохо: у хороших производителей Tinta Negra 5–10 years может быть отличной покупкой.' },
        { kind: 'checklist', items: [
          'Sercial — самый сухой стиль; лимон, миндаль, солёность. Пить как аперитив, к оливкам, сырам, миндалю.',
          'Verdelho — medium dry; больше тела, карамель, сухофрукты, цитрус. Хорошо к супам, грибам, копчёной рыбе.',
          'Bual / Boal — medium sweet; орехи, инжир, карамель. Универсален к десертам без чрезмерного сахара.',
          'Malvasia / Malmsey — сладкий стиль; патока, кофе, шоколад, финики. К шоколаду, bolo de mel, сырам с плесенью.',
          'Tinta Negra — может выпускаться в разных уровнях сладости; проверяйте слова dry, medium dry, medium sweet, sweet.',
          'Terrantez и Bastardo — редкие сорта; обычно дороже и интереснее для винных энтузиастов, а не для первой бутылки.'
        ] },
        { kind: 'warning', text: 'Не покупайте Madeira только по слову «old» на красивой этикетке. Для предсказуемого качества ищите конкретную возрастную категорию: 5, 10, 15, 20, 30, 40 или 50 years / anos, либо Colheita / Frasqueira с годом урожая.' }
      ]
    },
    {
      id: 'age-and-label',
      title: 'Как читать возраст: 5–50 years, Colheita, Frasqueira',
      content: [
        { kind: 'paragraph', text: 'Возраст на Madeira — это не возраст каждой капли, а стиль и средний профиль партии, утверждённый под контролем региона. Чем выше возраст, тем больше концентрация, кислотность, орехово-йодный профиль и цена. Для большинства людей sweet spot — 10 или 15 years.' },
        { kind: 'checklist', items: [
          '5 years / Reserva — базовый серьёзный уровень; обычно 8–15 € за 0,75 л.',
          '10 years / Reserva Velha или Special Reserve — лучший старт для знакомства; обычно 18–35 €.',
          '15 years / Extra Reserve — заметно глубже, часто 30–60 €.',
          '20 years — уже подарочный и гастрономический уровень; часто 70–130 €.',
          '30 years — 120–250 €, покупать у понятного производителя, не вслепую.',
          '40 и 50 years — 250–700 €+; это коллекционная покупка, особенно у Blandy’s, D’Oliveiras, Barbeito, Henriques & Henriques, Justino’s.',
          'Colheita — Madeira одного года урожая, выдержанная минимум несколько лет в бочке; дешевле Frasqueira, но может быть очень интересной.',
          'Frasqueira / Garrafeira — винтажная Madeira одного года урожая с длительной выдержкой в дереве; это уже коллекционный сегмент.'
        ] }
      ]
    },
    {
      id: 'production',
      title: 'Как делают креплёные вина: fortification, estufagem, canteiro',
      content: [
        { kind: 'paragraph', text: 'Fortification работает просто: виноград бродит, дрожжи превращают сахар в алкоголь, затем добавляют нейтральный винный спирт. Брожение останавливается, сахар остаётся. Момент добавления спирта влияет на сладость: раньше — слаще, позже — суше.' },
        { kind: 'checklist', items: [
          'Madeira после крепления проходит нагрев и окислительную выдержку — поэтому у неё вкус орехов, карамели, сухофруктов, йода и высокая стабильность.',
          'Estufagem — более быстрый метод: вино нагревают в ёмкостях примерно до 45–50 °C на несколько месяцев; часто используется для молодых и доступных вин.',
          'Canteiro — медленная выдержка в бочках на тёплых складах без активного нагрева; метод для более дорогих и сложных Madeira.',
          'Moscatel de Setúbal делают из мускатных сортов; после крепления вино часто настаивается на кожице, поэтому появляются апельсиновая цедра, чай, мёд, роза и специи.',
          'Moscatel Roxo — более редкий розовый/краснокожий мускатный сорт; обычно дороже обычного Moscatel de Setúbal.',
          'DOP и selo de garantia важны: они подтверждают регион, категорию и контроль, а не просто маркетинговую надпись на бутылке.'
        ] }
      ]
    },
    {
      id: 'moscatel-setubal',
      title: 'Moscatel de Setúbal: что брать и сколько платить',
      content: [
        { kind: 'paragraph', text: 'Moscatel de Setúbal — хороший «чит-код» для экспата: португальский, узнаваемый, обычно дешевле Porto и Madeira, отлично идёт к sobremesas, queijo Azeitão, миндальному печенью и апельсиновым десертам. В ресторанах его часто подают как digestivo.' },
        { kind: 'checklist', items: [
          'Базовый Moscatel de Setúbal DOP — 5–9 € в супермаркете; хорош для готовки, простого десерта и вечеринки.',
          'Moscatel de Setúbal Superior / 5 years — часто 10–18 €; заметно чище и богаче.',
          '10 years — 18–35 €; лучший уровень для подарка без переплаты.',
          '20 years — 45–90 €; уже серьёзная бутылка для сыра, десерта или коллекции.',
          '30/40 years и старые розливы — 100–250 €+; покупать в garrafeira или у производителя.',
          'Moscatel Roxo — ищите отдельно на этикетке; 10 years часто стоит 25–60 €, редкие старые версии дороже.',
          'IPTM/индикации типичности и региональные seals могут встречаться в описаниях и на документах, но для покупателя главный ориентир — DOP Setúbal, производитель, возраст и selo da comissão vitivinícola.'
        ] },
        { kind: 'warning', text: 'Сладость не равна качеству. Дешёвый Moscatel может быть липким и простым; у хорошего вина должна быть кислотность, аромат кожуры цитруса и длинное послевкусие, а не только сахар.' }
      ]
    },
    {
      id: 'buy-serve-store',
      title: 'Где покупать, как подавать и хранить',
      content: [
        { kind: 'checklist', items: [
          'Супермаркеты Continente, Pingo Doce, Auchan, El Corte Inglés подходят для 5–10 years и базового Moscatel.',
          'Для 15+ years, Frasqueira, Colheita и Moscatel Roxo лучше идти в garrafeira: Garrafeira Nacional, Napoleão, местные винные магазины, магазины производителей.',
          'Madeira Sercial/Verdelho подавайте охлаждённой: примерно 10–12 °C.',
          'Bual/Malmsey и Moscatel подавайте слегка охлаждёнными: примерно 12–14 °C, не комнатные 24 °C летом.',
          'После открытия Madeira храните вертикально, в темноте; холодильник полезен, но не обязателен для короткого срока.',
          'Moscatel после открытия лучше держать в холодильнике и закрывать вакуумной пробкой.',
          'Для кухни берите недорогую Madeira или Moscatel, но не «vinho licoroso» без региона, если рецепт строится именно на Madeira/Moscatel.',
          'В самолёт: стандартная бутылка 0,75 л в багаже обычно ок; в ручную кладь нельзя, если не duty free sealed bag.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Madeira 5 years', amountEURMin: 8, amountEURMax: 15, note: 'Обычная цена в супермаркете или garrafeira за 0,75 л в 2026.' },
    { label: 'Madeira 10 years', amountEURMin: 18, amountEURMax: 35, note: 'Оптимальный первый уровень: Sercial, Verdelho, Bual или Malmsey.' },
    { label: 'Madeira 20 years', amountEURMin: 70, amountEURMax: 130, note: 'Подарочный уровень; цена сильно зависит от производителя и сорта.' },
    { label: 'Moscatel de Setúbal DOP базовый', amountEURMin: 5, amountEURMax: 9, note: 'Массовый уровень, часто доступен в Continente/Pingo Doce/Auchan.' },
    { label: 'Moscatel de Setúbal 10 years', amountEURMin: 18, amountEURMax: 35, note: 'Хороший баланс цены и качества; Moscatel Roxo обычно дороже.' }
  ],
  sources: [
    { title: 'IVBAM: Vinho da Madeira — официальный институт Madeira', url: 'https://ivbam.madeira.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IVV: Instituto da Vinha e do Vinho — вина Portugal и DOP/IGP', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Comissão Vitivinícola Regional da Península de Setúbal — Moscatel de Setúbal', url: 'https://vinhosdesetubal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
