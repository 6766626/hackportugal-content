export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-do-porto-tipos',
  categoryId: 'food_leisure',
  title: 'Vinho do Porto: типы Tawny, Ruby, Vintage, LBV и как покупать',
  tldr: 'Vinho do Porto — креплёное вино из Região Demarcada do Douro, обычно 19–22% алкоголя. Для новичка безопасный выбор: Ruby Reserve за 10–18 € или Tawny 10 anos за 18–35 €. Tawny 20/30/40 anos — подарок и медленное питьё, 45–150 €+. Vintage — дорогой коллекционный портвейн конкретного года, требует декантации и часто стоит 70–300 €+. LBV — компромисс: один урожай, готов к питью, обычно 15–35 €. В Vila Nova de Gaia удобно сравнить стили в caves Sandeman, Graham’s, Taylor’s.',
  tags: ['vinho', 'porto', 'douro', 'гастрономия'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-port',
      title: 'Что такое Vinho do Porto',
      content: [
        { kind: 'paragraph', text: 'Vinho do Porto — не просто «сладкое красное». Это защищённое наименование вина из Região Demarcada do Douro. Брожение останавливают добавлением aguardente vínica, поэтому вино сохраняет природную сладость и получает крепость обычно около 19–22%.' },
        { kind: 'paragraph', text: 'Исторически портвейн выдерживали и отправляли из Vila Nova de Gaia, напротив Porto. Поэтому большинство известных caves — Sandeman, Graham’s, Taylor’s, Cálem, Ferreira, Kopke — находятся именно в Gaia, хотя виноград растёт в Douro.' },
        { kind: 'checklist', items: [
          'Ищите на бутылке «Vinho do Porto» или «Porto» и selo de garantia IVDP.',
          'Обычная бутылка — 750 мл; бывают half bottle 375 мл для Vintage/LBV.',
          'Крепость чаще 19–20%, но встречается до 22%.',
          'Портвейн пьют маленькими порциями: 60–90 мл, не как столовое вино.',
          'После открытия не все стили живут одинаково: Tawny дольше, Vintage меньше.',
          'Для подарка лучше Tawny 10/20 anos или хороший LBV, чем случайный дешёвый Ruby.'
        ] }
      ]
    },
    {
      id: 'main-types',
      title: 'Главные типы: что покупать без ошибки',
      content: [
        { kind: 'substeps', items: [
          { id: 'ruby', title: 'Ruby и Ruby Reserve', content: [
            { kind: 'paragraph', text: 'Ruby — самый фруктовый и прямой стиль: тёмные ягоды, вишня, шоколад. Базовый Ruby часто стоит 6–10 € и подходит для коктейлей или готовки. Ruby Reserve за 10–18 € заметно лучше: хороший вариант «попробовать портвейн» без переплаты.' }
          ] },
          { id: 'tawny', title: 'Tawny 10/20/30/40 anos', content: [
            { kind: 'paragraph', text: 'Tawny дольше выдерживают в бочке, поэтому он становится ореховым, карамельным, янтарным. Надпись 10, 20, 30 или 40 anos — это не точный возраст каждой капли, а стиль и средний профиль выдержки, утверждаемый IVDP.' },
            { kind: 'paragraph', text: 'Tawny 10 anos — лучший старт для дома: 18–35 €. 20 anos — уже серьёзный подарок: 45–80 €. 30/40 anos — премиальный сегмент, часто 90–200 €+.' }
          ] },
          { id: 'lbv', title: 'LBV — Late Bottled Vintage', content: [
            { kind: 'paragraph', text: 'LBV делают из одного урожая, но выдерживают дольше перед розливом, чем Vintage. Обычно он уже готов к питью и не требует долгого хранения. Цена в супермаркете и garrafeira чаще 15–35 €.' },
            { kind: 'paragraph', text: 'Если хотите «почти Vintage-идею», но без коллекционного бюджета и сложной декантации, берите LBV от известного дома.' }
          ] },
          { id: 'vintage', title: 'Vintage Port', content: [
            { kind: 'paragraph', text: 'Vintage — флагманский портвейн одного выдающегося года. Его разливают относительно рано, он развивается в бутылке десятилетиями и часто имеет осадок. Перед подачей нужна декантация.' },
            { kind: 'warning', text: 'Не покупайте Vintage «просто к ужину», если не готовы открыть, декантировать и выпить за 1–2 дня. Это не стиль для медленного допивания месяцами.' }
          ] }
        ] }
      ]
    },
    {
      id: 'white-rose-and-serving',
      title: 'White, Rosé и как подавать',
      content: [
        { kind: 'paragraph', text: 'White Port — белый портвейн: бывает суховатым, полусухим или сладким. В Porto его часто пьют охлаждённым или как Port Tonic: White Port + tonic water + лёд + лимон/мята. Базовая бутылка стоит примерно 7–15 €, выдержанные белые — дороже.' },
        { kind: 'paragraph', text: 'Rosé Port — современный лёгкий стиль, фруктовый и холодный. Это не классический «медитативный» портвейн, а скорее аперитив, коктейли и летняя терраса.' },
        { kind: 'checklist', items: [
          'Ruby, LBV: 14–16 °C, с шоколадом, ягодными десертами, queijo da Serra.',
          'Tawny: 12–14 °C, с орехами, crème brûlée, pastel de nata, сухофруктами.',
          'White/Rosé: 6–10 °C, как аперитив или Port Tonic.',
          'Vintage: 16–18 °C, декантировать из-за осадка.',
          'Tawny после открытия обычно спокойно живёт 4–8 недель в прохладе.',
          'Ruby Reserve/LBV лучше выпить за 1–3 недели.',
          'Vintage после открытия — максимум несколько дней, лучше 24–48 часов.'
        ] }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Как покупать в 2026: супермаркет, garrafeira, duty free',
      content: [
        { kind: 'paragraph', text: 'Для повседневной покупки в Continente, Pingo Doce, Auchan и El Corte Inglés нормальны Graham’s, Taylor’s, Ferreira, Sandeman, Cálem, Niepoort, Kopke, Dow’s, Quinta do Noval, Churchill’s. В garrafeira выбор шире, персонал поможет подобрать урожай и стиль.' },
        { kind: 'checklist', items: [
          'До 10 €: базовый Ruby, White или Tawny без возраста — нормально для коктейлей и кулинарии.',
          '10–18 €: Ruby Reserve или простой LBV на скидке — лучший бюджетный уровень.',
          '18–35 €: Tawny 10 anos или хороший LBV — безопасная покупка домой.',
          '45–80 €: Tawny 20 anos — сильный подарок без риска «не открыть правильно».',
          '70–300 €+: Vintage, старые Colheita, Tawny 30/40 anos — покупайте в garrafeira или у проверенного продавца.',
          'Проверяйте, что бутылка не стояла годами на солнце у витрины.',
          'Для Vintage смотрите год урожая, производителя, состояние пробки/капсулы и уровень вина.',
          'В аэропорту цены не всегда ниже: duty free удобен, но сравните с garrafeira в городе.'
        ] },
        { kind: 'warning', text: 'Слово «Port» за пределами Португалии иногда используют как общий стиль. В Португалии для настоящего Vinho do Porto ориентируйтесь на IVDP и происхождение Douro/Porto, а не только на сладость и крепость.' }
      ]
    },
    {
      id: 'visit-caves',
      title: 'Caves в Vila Nova de Gaia: как сходить без туристической ловушки',
      content: [
        { kind: 'paragraph', text: 'Caves в Vila Nova de Gaia — самый простой способ понять разницу между Ruby, Tawny и Vintage. Типичный тур длится 30–60 минут и заканчивается дегустацией 2–3 портвейнов. Бронировать лучше онлайн, особенно в выходные, летом и вокруг São João в июне.' },
        { kind: 'checklist', items: [
          'Sandeman — узнаваемый бренд, хорошие вводные туры для первого раза.',
          'Graham’s — сильная дегустационная линейка и вид на Porto, часто дороже базовых туров.',
          'Taylor’s — классика, большой visitor centre, удобно для самостоятельного знакомства.',
          'Kopke — хорош для Colheita и выдержанных стилей.',
          'Cálem/Ferreira — удобно расположены рядом с набережной Gaia.',
          'Если хотите учиться, берите tasting с Tawny 10/20 anos или LBV/Vintage comparison, а не самый дешёвый сет.',
          'Не планируйте 3–4 caves подряд: портвейн крепкий, впечатления быстро смешиваются.',
          'Покупать после тура удобно, но не обязательно: те же базовые бутылки часто дешевле в магазинах города.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Базовый Ruby / White / Rosé', amountEURMin: 6, amountEURMax: 15, note: 'Супермаркетный уровень, подходит для аперитива, коктейлей и готовки.' },
    { label: 'Ruby Reserve', amountEURMin: 10, amountEURMax: 18, note: 'Хороший бюджетный выбор для первого знакомства.' },
    { label: 'LBV', amountEURMin: 15, amountEURMax: 35, note: 'Один урожай, обычно готов к питью, без коллекционного бюджета.' },
    { label: 'Tawny 10 anos', amountEURMin: 18, amountEURMax: 35, note: 'Самый безопасный домашний и подарочный старт.' },
    { label: 'Tawny 20 anos', amountEURMin: 45, amountEURMax: 80, note: 'Подарочный уровень; 30/40 anos часто заметно дороже.' },
    { label: 'Vintage Port', amountEURMin: 70, amountEURMax: 300, note: 'Цена сильно зависит от года, производителя и состояния бутылки.' },
    { label: 'Тур по caves в Vila Nova de Gaia', amountEURMin: 18, amountEURMax: 60, note: 'Обычно включает экскурсию и дегустацию; премиальные сеты стоят дороже.' }
  ],
  sources: [
    { title: 'IVDP — Instituto dos Vinhos do Douro e do Porto: Vinho do Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Visit Portugal — Port Wine и посещение Porto/Gaia', url: 'https://www.visitportugal.com/en/content/port-wine', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Taylor’s Port — visitor centre и стили Port Wine', url: 'https://www.taylor.pt/en/visit-taylors/port-cellars', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Graham’s Port Lodge — дегустации в Vila Nova de Gaia', url: 'https://www.grahams-port.com/visit-grahams', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
