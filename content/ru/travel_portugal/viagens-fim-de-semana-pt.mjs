export default {
  editorialVoice: 'hackportugal',
  id: 'viagens-fim-de-semana-pt',
  categoryId: 'travel_portugal',
  title: 'Куда поехать на выходные: топ направлений из Лиссабона и Порту',
  tldr: 'В Португалии выходные реально планировать без отпуска: из Лиссабона — Sintra/Cascais за 30–45 мин, Setúbal и Arrábida за 1 ч, Évora за 1,5 ч, Coimbra за 2 ч, Algarve за 2,5–3 ч, Madeira за 1,5 ч полёта. Из Порту — Douro, Aveiro и Viana do Castelo около 1 ч, Galicia в Испании около 2 ч на машине. В 2026 заранее проверяйте CP, Rede Expressos/FlixBus, платные дороги Via Verde и жильё: летом и в праздники цены легко удваиваются.',
  tags: ['viagens', 'выходные', 'lisboa', 'porto', 'turismo'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'how-to-plan',
      title: 'Как планировать поездку на 2 дня',
      content: [
        { kind: 'paragraph', text: 'Главное правило Португалии: расстояния короткие, но сезонность жёсткая. В апреле–июне и сентябре выходные комфортнее, чем в августе: меньше пробок, ниже цены на жильё, проще парковка у пляжей и miradouros.' },
        { kind: 'checklist', items: [
          'Проверяйте не только километры, но и время выезда: в пятницу после 17:00 A1, A2, A5, A28 и мосты Лиссабона быстро забиваются',
          'Для поезда смотрите CP: Lisboa–Coimbra около 2 ч на Alfa Pendular/Intercidades, Porto–Aveiro около 40–60 мин',
          'Для автобусов сравнивайте Rede Expressos, FlixBus и Citi Express: иногда билет в одну сторону стоит дешевле кофе в аэропорту',
          'Если едете на машине, заранее проверьте платные дороги: A2 в Algarve, A1 в Coimbra/Porto, A28 на севере, A6 в Évora',
          'Для аренды авто берите машину в пятницу утром или в субботу рано: офисы в аэропортах дороже, но работают дольше',
          'В высокий сезон бронируйте жильё за 2–4 недели; для Madeira, Algarve, Douro и Sintra — ещё раньше',
          'Не планируйте 5 городов за 2 дня: лучше один регион + 1–2 точки, иначе выходные превращаются в логистику',
          'В природных парках Arrábida, Peneda-Gerês и на пляжах Algarve проверяйте ограничения на въезд и парковку летом'
        ] },
        { kind: 'warning', text: 'Цены на жильё в праздники и long weekends резко растут. Португальские feriados плюс школьные каникулы могут сделать обычный guesthouse в Algarve или Douro дороже городского отеля в Лиссабоне.' }
      ]
    },
    {
      id: 'from-lisbon',
      title: 'Из Лиссабона: быстрые маршруты 🚆🚗',
      content: [
        { kind: 'substeps', items: [
          { id: 'sintra-cascais', title: 'Sintra + Cascais — 30–45 мин', content: [
            { kind: 'paragraph', text: 'Классика без ночёвки. Sintra — дворцы, лес, Castelo dos Mouros, Palácio da Pena; Cascais — океан, Boca do Inferno, пляжи и ужин у воды. Поездом удобно: Lisboa–Sintra от Rossio, Lisboa–Cascais от Cais do Sodré.' },
            { kind: 'checklist', items: [
              'Лучше выезжать до 09:00: очереди к Palácio da Pena и парковка в Sintra быстро становятся болью',
              'Не пытайтесь ехать к дворцам на своей машине в пик сезона — используйте автобус/такси/пеший маршрут',
              'Для одного дня: утром Sintra, вечером Cascais или Cabo da Roca',
              'Для романтических выходных: ночёвка в Sintra или Cascais, воскресенье у Guincho'
            ] }
          ] },
          { id: 'setubal-arrabida', title: 'Setúbal + Arrábida — около 1 ч', content: [
            { kind: 'paragraph', text: 'Хороший вариант с машиной: Serra da Arrábida, Portinho da Arrábida, Praia de Galapinhos, рыба и choco frito в Setúbal. Летом часть дорог и парковок ограничивают, поэтому лучше приезжать рано.' },
            { kind: 'checklist', items: [
              'Для природы: Miradouro do Portinho da Arrábida и пляжи у гор',
              'Для еды: Setúbal, choco frito, peixe grelhado, Moscatel de Setúbal',
              'Для парома: можно связать маршрут с Tróia, но закладывайте время и стоимость переправы',
              'Без машины маршрут возможен, но неудобен: автобус до Setúbal + такси/локальный транспорт'
            ] }
          ] },
          { id: 'evora', title: 'Évora — 1–1,5 ч', content: [
            { kind: 'paragraph', text: 'Лучшие выходные для тех, кто устал от океана: белый Alentejo, Templo Romano, Capela dos Ossos, vinho, azeite и спокойный центр. На машине около 1,5 ч, автобусом обычно 1,5–2 ч.' },
            { kind: 'checklist', items: [
              'Идеально на 1 ночь: суббота Évora, воскресенье винодельня или Monsaraz',
              'Летом очень жарко: в июле–августе планируйте сиесту и воду',
              'Паркуйтесь за стенами исторического центра — внутри узкие улицы',
              'Бронируйте рестораны заранее, особенно в субботу вечером'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'lisbon-longer-weekend',
      title: 'Из Лиссабона: если есть 2–3 дня',
      content: [
        { kind: 'paragraph', text: 'Если вы готовы к более длинной дороге или перелёту, из Лиссабона удобно уехать в Coimbra, Algarve или Madeira. Это уже не “после обеда туда-обратно”, а полноценные выходные с ночёвкой.' },
        { kind: 'checklist', items: [
          'Coimbra — около 2 ч на поезде Alfa Pendular/Intercidades: университет, Biblioteca Joanina, Mondego, хорошая остановка между Лиссабоном и Порту',
          'Algarve — около 2,5–3 ч на машине до Faro/Albufeira/Lagos; поезд до Faro тоже возможен, но пляжи удобнее с авто',
          'Lagos и Sagres — лучше на 2 ночи: скалы, Ponta da Piedade, закаты, ветер и серф',
          'Tavira — спокойнее западного Algarve, хороша для пар и тех, кто не хочет клубной атмосферы',
          'Madeira — около 1,5 ч полёта из Lisboa до Funchal; на 2 ночи реально, но лучше 3–4 дня из-за levadas и гор',
          'Для Madeira берите машину только если уверенно водите: уклоны, тоннели и парковка в Funchal требуют спокойных нервов'
        ] },
        { kind: 'warning', text: 'Madeira и Algarve в 2026 остаются направлениями с сильным туристическим спросом. Дешёвый перелёт не означает дешёвую поездку: проверьте багаж, трансфер, аренду авто, депозит и стоимость парковки.' }
      ]
    },
    {
      id: 'from-porto',
      title: 'Из Порту: Douro, Aveiro, Viana, Galicia',
      content: [
        { kind: 'substeps', items: [
          { id: 'douro', title: 'Douro — около 1 ч до Amarante/Peso da Régua дальше', content: [
            { kind: 'paragraph', text: 'Douro — виноградники, miradouros, quintas и дорога вдоль реки. На машине удобно строить маршрут Porto–Amarante–Peso da Régua–Pinhão. Поезд по Linha do Douro — один из самых красивых железнодорожных маршрутов страны.' },
            { kind: 'checklist', items: [
              'Для первого раза: Régua + Pinhão + дегустация в quinta',
              'Для поезда: садитесь у окна, проверяйте расписание CP заранее',
              'Для машины: дорога красивая, но извилистая — не планируйте дегустации без трезвого водителя',
              'Осень во время vindimas дороже, но особенно красива'
            ] }
          ] },
          { id: 'aveiro', title: 'Aveiro — около 1 ч', content: [
            { kind: 'paragraph', text: 'Самый простой однодневный маршрут из Порту: каналы, barcos moliceiros, ovos moles, Costa Nova с полосатыми домами. Поездом из Porto Campanhã/São Bento обычно 40–60 мин.' },
            { kind: 'checklist', items: [
              'Без машины: Aveiro центр + автобус/такси до Costa Nova',
              'С машиной: добавьте Praia da Barra и маяк Farol da Barra',
              'Хорошо для гостей, которые впервые приехали в север Португалии',
              'Зимой берите ветровку: у лагуны и океана часто сильный ветер'
            ] }
          ] },
          { id: 'viana-galicia', title: 'Viana do Castelo и Galicia — 1–2 ч', content: [
            { kind: 'paragraph', text: 'Viana do Castelo — около 1 ч на север: Santuário de Santa Luzia, пляжи, Атлантика, более спокойная атмосфера, чем в Порту. Galicia в Испании — около 2 ч до Vigo или чуть больше до Santiago de Compostela, если едете на машине.' },
            { kind: 'checklist', items: [
              'Viana do Castelo хороша на день: центр, Santa Luzia, Praia do Cabedelo',
              'Для Galicia проверьте документы: паспорт/Cartão de Cidadão/ВНЖ, страховку авто и условия аренды для выезда в Испанию',
              'Vigo — быстрый испанский уикенд с морепродуктами',
              'Santiago de Compostela лучше на 1 ночь, чтобы не провести весь день за рулём',
              'Помните о разнице в правилах парковки, скоростях и дорожных штрафах в Испании'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'budget-and-season',
      title: 'Бюджет, сезон и ошибки новичков',
      content: [
        { kind: 'paragraph', text: 'Ориентиры зависят от сезона, но для 2026 реалистично считать не только транспорт и отель, а всю связку: платные дороги, парковки, топливо, еда, входные билеты, багаж у лоукостера и такси до аэропорта.' },
        { kind: 'checklist', items: [
          'Самый дешёвый формат: поезд/автобус + 1 ночь в guesthouse вне центра',
          'Самый удобный формат для Arrábida, Douro, Algarve и Costa Nova — машина',
          'Для Sintra, Cascais, Coimbra и Aveiro машина часто не нужна',
          'В августе избегайте Algarve без брони: жильё, рестораны и парковка будут главным стрессом',
          'В январе–марте хорошие цены на отели, но в горах и у океана нужна тёплая одежда',
          'Пасха, 25 de Abril, 1 de Maio, 10 de Junho, 15 de Agosto и 5 de Outubro часто создают длинные выходные',
          'Если едете с собакой, заранее фильтруйте alojamento pet-friendly и правила пляжей',
          'Если нет NIF/португальской карты, проверьте, принимает ли парковка/автомат иностранные карты; MB WAY есть не везде'
        ] },
        { kind: 'warning', text: 'Не оставляйте вещи в машине на видном месте, особенно у пляжей, miradouros и туристических парковок. Разбитое стекло ради рюкзака — типичный сценарий выходных поездок.' }
      ]
    }
  ],
  costs: [
    { label: 'Поезд Lisboa–Sintra или Lisboa–Cascais', amountEURMin: 2.4, amountEURMax: 3.0, note: 'Ориентир за поездку в одну сторону с городским транспортным носителем; проверяйте актуальный тариф CP/Área Metropolitana de Lisboa' },
    { label: 'Поезд Porto–Aveiro', amountEURMin: 4, amountEURMax: 10, note: 'Зависит от типа поезда: urbano дешевле, Intercidades/Alfa Pendular дороже' },
    { label: 'Бюджетная ночь в guesthouse вне пика', amountEURMin: 45, amountEURMax: 90, note: 'За номер, не за человека; в Algarve, Madeira, Douro и праздники может быть значительно выше' },
    { label: 'Аренда авто на выходные', amountEURMin: 35, amountEURMax: 120, note: 'В день, без топлива и платных дорог; цена зависит от сезона, страховки, депозита и пункта выдачи' },
    { label: 'Перелёт Lisboa–Madeira', amountEURMin: 60, amountEURMax: 220, note: 'Туда-обратно без багажа при раннем бронировании; в праздники и летом дороже' }
  ],
  sources: [
    { title: 'VisitPortugal — официальный туристический портал Португалии', url: 'https://www.visitportugal.com', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'CP — расписания и билеты на поезда', url: 'https://www.cp.pt/passageiros/en', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Rede Expressos — междугородние автобусы', url: 'https://rede-expressos.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANA/VINCI Airports — аэропорты Португалии и рейсы', url: 'https://www.ana.pt/en', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
