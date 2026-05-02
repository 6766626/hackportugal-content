export default {
  editorialVoice: 'hackportugal',
  id: 'porto-areas-by-budget',
  categoryId: 'housing_rent',
  title: 'Где жить в Порту: районы по бюджету и типу семьи',
  tldr: 'Для семьи в Porto Metro в 2026 главный выбор — платить за локацию или за метры. Foz/Nevogilde и Boavista удобны, но T2 часто 1 500–2 300 €/мес. Matosinhos Sul даёт море и метро за 1 200–1 900 €. Vila Nova de Gaia дешевле при хорошей связке с центром: T2 950–1 500 €. Maia — лучший компромисс для семьи с машиной, школой и аэропортом: T2 850–1 250 €. Внутри Porto дешевле смотреть Paranhos, Bonfim, Campanhã, но проверяйте шум, парковку и состояние дома.',
  tags: ['porto', 'аренда', 'районы', 'семья'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'budget-map',
      title: 'Быстрая карта бюджета 🗺️',
      content: [
        { kind: 'paragraph', text: 'Ориентиры ниже — не официальная статистика, а практический диапазон объявлений и сделок для долгосрочной аренды весной 2026. Цена сильно зависит от лифта, гаража, энергоэффективности, мебели, близости метро и вида на море/реку.' },
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde: премиум у океана; T1 1 100–1 600 €, T2 1 600–2 500 €, T3 2 300–4 000 €', 'Boavista / Bessa / Pinheiro Manso: бизнес-ось, школы, офисы; T1 950–1 350 €, T2 1 400–2 100 €, T3 1 900–3 000 €', 'Cedofeita / Baixa / Bonfim: центр и жизнь без машины; T1 850–1 300 €, T2 1 200–1 800 €, T3 1 600–2 400 €', 'Paranhos / Constituição / Asprela: университеты, São João, метро; T1 750–1 050 €, T2 1 000–1 450 €, T3 1 300–1 900 €', 'Campanhã: дешевле и быстро меняется; T1 700–950 €, T2 900–1 300 €, T3 1 150–1 700 €', 'Matosinhos Sul / Leça / Senhora da Hora: море, метро, торговля; T1 850–1 250 €, T2 1 200–1 900 €, T3 1 600–2 700 €', 'Vila Nova de Gaia: больше метров за те же деньги; T1 700–1 000 €, T2 950–1 500 €, T3 1 250–2 100 €', 'Maia: семейный пригород, аэропорт, бизнес-парки; T1 650–900 €, T2 850–1 250 €, T3 1 100–1 700 €'] },
        { kind: 'warning', text: 'Если собственник предлагает “договор без recibos” или просит 6–12 месяцев наличными без recibo de renda, это риск: без официального договора сложнее оформить atestado de residência, школу, налоговый вычет IRS и защиту от незаконного выселения.' }
      ]
    },
    {
      id: 'by-family-type',
      title: 'Выбор по типу семьи',
      content: [
        { kind: 'substeps', items: [
          { id: 'solo-couple', title: 'Один человек или пара без детей', content: [
            { kind: 'paragraph', text: 'Лучше смотреть Cedofeita, Bonfim, Baixa, Boavista, Matosinhos Sul. Вы платите больше за T0/T1, но экономите время: кафе, coworking, метро, ночная жизнь и такси дешевле, чем ежедневная машина.' },
            { kind: 'checklist', items: ['Если работаете удалённо — проверяйте шум с улицы и качество окон', 'Если часто летаете — Maia или Senhora da Hora быстрее к аэропорту', 'Если важен океан — Matosinhos Sul практичнее Foz по цене', 'Если хотите “город пешком” — Cedofeita и Bonfim удобнее Gaia и Maia'] }
          ]},
          { id: 'family-kids', title: 'Семья с детьми', content: [
            { kind: 'paragraph', text: 'Приоритеты меняются: школа, спальни, лифт, парковка, парк, доступ к Centro de Saúde. Часто разумнее взять T3 в Gaia или Maia, чем тесный T2 в центре Porto.' },
            { kind: 'checklist', items: ['Для международных школ: Foz/Boavista удобны к Oporto British School, CLIP и Lycée Français International de Porto', 'Для публичной школы важен адрес: прикрепление зависит от morada и правил конкретной escola/agrupamento', 'Maia и Gaia чаще дают гараж и новые дома за меньшие деньги', 'Foz хороша для качества жизни, но бюджет на T3 редко ниже 2 300 €/мес', 'Paranhos удобен к Hospital de São João и университетской зоне, но смотрите плотность студентов и парковку'] }
          ]},
          { id: 'car-family', title: 'Семья с машиной', content: [
            { kind: 'paragraph', text: 'С машиной круг поиска резко расширяется: Maia, Valongo, Gondomar, Gaia вглубь от реки, Leça da Palmeira. Но считайте не только аренду: гараж, portagens, топливо, IUC, парковка у работы и школы.' },
            { kind: 'checklist', items: ['Ищите garagem/box в объявлении, а не “estacionamento fácil”', 'Проверяйте выезды на A4, A28, VCI, A1 и пробки утром', 'В старом Porto гараж может стоить отдельно 80–180 €/мес', 'В Gaia подъезд к Ponte da Arrábida и Ponte Luís I может быть узким местом в часы пик'] }
          ]}
        ]}
      ]
    },
    {
      id: 'areas-in-practice',
      title: 'Районы: плюсы, минусы, кому подходят',
      content: [
        { kind: 'checklist', items: ['Foz do Douro / Nevogilde — максимум качества жизни: океан, променад, частные школы, спокойнее центрa. Минусы: самая высокая аренда, ветер/влажность, мало дешёвых T2/T3.', 'Boavista / Bessa / Pinheiro Manso — компромисс для семьи и офиса: Casa da Música, деловая зона, доступ к Foz и Matosinhos. Минусы: трафик, шум на крупных проспектах, старый фонд без хорошей теплоизоляции.', 'Matosinhos Sul — лучший “океан + метро”: пляж, Mercado de Matosinhos, рестораны, метро до Porto. Минусы: цены уже почти как Porto, летом туристический шум, влажность.', 'Senhora da Hora / São Mamede de Infesta — практично и дешевле Matosinhos Sul: NorteShopping, метро, школы, быстрый доступ к Porto. Минусы: меньше “красивой Португалии”, больше спального suburb.', 'Vila Nova de Gaia — хороший бюджет на T2/T3, особенно Mafamude, Canidelo, Oliveira do Douro, Canelas. Минусы: мосты и трафик, разница между районами огромная — смотрите улицу, не только município.', 'Maia — семейный пригород: метро, аэропорт, бизнес-парки, новые дома, парковка. Минусы: меньше городской жизни, часто нужна машина, до океана дольше.', 'Paranhos / Asprela — удобно студентам, врачам, IT и семьям рядом с São João. Минусы: много комнатной аренды, не все дома подходят семье.', 'Campanhã — бюджетный вход в Porto и крупный транспортный узел. Минусы: район неоднородный; обязательно смотреть дом и улицу вечером.'] },
        { kind: 'paragraph', text: 'Не оценивайте район только по названию freguesia. В Porto одна и та же freguesia может включать очень разные улицы: тихий квартал, туристический шум, старый дом без лифта и новый condomínio через два квартала.' }
      ]
    },
    {
      id: 'transport-and-daily-life',
      title: 'Транспорт, школа, быт: что считать до договора',
      content: [
        { kind: 'paragraph', text: 'В Porto Metro нормальная жизнь часто строится вокруг метро, автобусов STCP/UNIR, поезда CP и автомобиля. Разница между “15 минут по карте” и реальной дорогой утром может решить весь выбор района.' },
        { kind: 'checklist', items: ['Абонемент Andante Municipal — обычно 30 €/мес внутри одного município; Andante Metropolitan — 40 €/мес по Área Metropolitana do Porto', 'Проверьте реальный маршрут до работы/школы в 08:00 и обратно в 18:00, а не только в воскресенье', 'Для детей смотрите escola pública, ATL, creche и частные школы до подписания договора', 'Проверьте Centro de Saúde: в перегруженных зонах семейного врача можно ждать долго', 'Смотрите Pingo Doce/Continente/Lidl/Mercadona пешком: ежедневная логистика важнее красивого вида', 'Если дом старый — спросите certificado energético, тип отопления, влажность, плесень, состояние окон', 'Для удалённой работы проверьте fibra: MEO, NOS, Vodafone не всегда имеют одинаковое покрытие в конкретном доме', 'Парковку проверяйте вечером в будний день; “há estacionamento na rua” в центре Porto часто означает 20 минут поиска'] },
        { kind: 'warning', text: 'Порту влажный. Квартира с плохими окнами и без солнца может казаться дешёвой, но зимой вы заплатите отоплением, осушителем, плесенью и здоровьем. Смотрите ориентацию, вентиляцию и запах в шкафах.' }
      ]
    },
    {
      id: 'contract-check',
      title: 'Перед подписанием аренды',
      content: [
        { kind: 'paragraph', text: 'В 2026 стандартный безопасный сценарий: письменный contrato de arrendamento, регистрация договора в Finanças собственником, recibos de renda, депозит и первый месяц банковским переводом. Повышение арендной платы в 2026 для старых договоров ориентируется на коэффициент 2,16%, если договор не устанавливает иное в рамках закона.' },
        { kind: 'checklist', items: ['Попросите caderneta predial или доказательство, что арендодатель имеет право сдавать жильё', 'В договоре должны быть адрес, срок, renda, caução, NIF сторон, условия расторжения, мебель и расходы', 'Снимите видео квартиры при въезде: стены, техника, окна, счётчики воды/электричества/газа', 'Уточните, включён ли condomínio в rent — обычно платит собственник, но коммунальные услуги платит арендатор', 'Не переводите caução до просмотра квартиры или проверки доверенности агента/собственника', 'Если нужны школа, SNS, NIF-адрес, AIMA-процедуры — убедитесь, что договор подходит как comprovativo de morada', 'Для животных получите письменное разрешение в договоре или email, не устное “sem problema”', 'Если договор на 1 год, проверьте правила продления и сроки denúncia/oposição à renovação'] },
        { kind: 'warning', text: 'Короткий contrato de alojamento local или “prestação de serviços” вместо аренды может не дать тех же прав, что contrato de arrendamento habitacional. Для семьи и документов лучше полноценный договор аренды жилья.' }
      ]
    }
  ],
  costs: [
    { label: 'Andante Municipal', amountEUR: 30, note: 'Месячный проездной обычно внутри одного município Porto Metro' },
    { label: 'Andante Metropolitan', amountEUR: 40, note: 'Месячный проездной по Área Metropolitana do Porto' },
    { label: 'T2 в Foz/Boavista', amountEURMin: 1400, amountEURMax: 2500, note: 'Ориентир долгосрочной аренды весной 2026; зависит от дома, гаража и состояния' },
    { label: 'T2 в Matosinhos/Gaia/Maia', amountEURMin: 850, amountEURMax: 1900, note: 'Нижняя граница чаще Maia/Gaia дальше от метро; верхняя — Matosinhos Sul и новые дома' },
    { label: 'Гараж/место в центре Porto', amountEURMin: 80, amountEURMax: 180, note: 'Если не включено в аренду; цена зависит от зоны и доступа' }
  ],
  sources: [
    { title: 'Câmara Municipal do Porto — официальный портал города Porto', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Matosinhos — официальный портал município Matosinhos', url: 'https://www.cm-matosinhos.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — тарифы и passes Área Metropolitana do Porto', url: 'https://andante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Idealista Portugal — рынок аренды Porto и municípios вокруг', url: 'https://www.idealista.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
