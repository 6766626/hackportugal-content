export default {
  editorialVoice: 'hackportugal',
  id: 'autocaravana-pernoita-rules',
  categoryId: 'auto_trips',
  title: 'Кемпер и autocaravana: где можно ночевать в Португалии',
  tldr: 'В 2026 правила для autocaravana уже не такие жёсткие, как сразу после Lei 92/2019: вне охраняемых зон pernoita разрешена до 48 часов в одном município, если место не запрещено знаками или муниципальными правилами. В Rede Natura 2000, áreas protegidas и прибрежных POOC/POC ночёвка и aparcamento вне специально разрешённых мест запрещены. Штрафы: 60–300 € за нарушение общего лимита, 120–600 € в охраняемых/прибрежных зонах.',
  tags: ['autocaravana', 'кемпер', 'pernoita', 'штрафы'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'current-rule',
      title: 'Главное правило 2026: где можно ночевать',
      content: [
        { kind: 'paragraph', text: 'Lei 92/2019 ввела более жёсткий режим для autocaravanas, но текущая практическая рамка в Código da Estrada была смягчена последующими изменениями. На апрель 2026 базовое правило такое: pernoita в autocaravana разрешена до 48 часов подряд в одном município, если это не запрещённая зона и нет местного запрета.' },
        { kind: 'checklist', items: [
          'Можно ночевать в parques de autocaravanismo, áreas de serviço para autocaravanas и parques de campismo e caravanismo.',
          'В обычном разрешённом месте вне охраняемых зон — максимум 48 часов в том же município.',
          'Если место специально обозначено для autocaravanas, действуют правила этого места: лимит часов, оплата, сервисы, запрет на столы/тенты.',
          'Муниципалитет может запретить или ограничить pernoita знаками, regulamento municipal или временными правилами.',
          'Обычная парковка днём не равна ночёвке: pernoita — нахождение с людьми внутри между 21:00 и 07:00.',
          'Если вы разложили тент, столы, стулья, вывели ступеньки, поставили клинья или заняли больше площади — это уже похоже на aparcamento/campismo и риск штрафа выше.'
        ] }
      ]
    },
    {
      id: 'where-forbidden',
      title: 'Где нельзя: побережье, парки, Natura 2000',
      content: [
        { kind: 'paragraph', text: 'Самая частая ошибка — ночевать у пляжа, на утёсе или в природном парке, потому что “все так делают”. Именно там чаще всего работают GNR, Polícia Marítima и fiscalização municipal.' },
        { kind: 'checklist', items: [
          'Запрещена pernoita и aparcamento вне разрешённых мест в áreas protegidas.',
          'Запрещена ночёвка вне разрешённых мест в Rede Natura 2000.',
          'Запрещена ночёвка вне разрешённых мест в зонах, покрытых coastal planning plans: POOC/POC, прибрежные охраняемые полосы.',
          'Запрещено ставить кемпер на дюнах, пляжных подъездах, лесных дорогах с ограничением, пожарных проходах.',
          'Запрещено сливать águas residuais, химический туалет или серую воду вне service point.',
          'Запрещено разводить огонь и барбекю вне разрешённых зон; летом риск штрафов и уголовных последствий выше.',
          'Если есть знак “Proibida a pernoita de autocaravanas” или “Parqueamento proibido” — не спорьте на месте, уезжайте.'
        ] },
        { kind: 'warning', text: 'Алгарве, Costa Vicentina, Peniche, Ericeira, Arrábida, Sintra-Cascais, Gerês и пляжные парковки — зоны повышенного контроля. Даже если приложение показывает “ночёвка возможна”, знак и закон важнее отзывов.' }
      ]
    },
    {
      id: 'parking-vs-camping',
      title: 'Парковка, pernoita и campismo — не одно и то же',
      content: [
        { kind: 'paragraph', text: 'Португальские правила различают простую стоянку, ночёвку и размещение “лагерем”. Чем больше вы выходите за габариты автомобиля, тем выше риск, что инспектор сочтёт это aparcamento/campismo вне разрешённого места.' },
        { kind: 'checklist', items: [
          'Estacionamento: автомобиль стоит в пределах разметки и не занимает больше площади, чем его габариты.',
          'Pernoita: люди находятся в autocaravana между 21:00 и 07:00.',
          'Aparcamento: стоянка с признаками размещения — выдвинутый тент, столы, стулья, клинья, ступеньки, внешние баки.',
          'Campismo selvagem: фактический дикий кемпинг вне camping/parque/ASA; это нельзя легализовать фразой “мы просто переночевали”.',
          'Окна и крыша сами по себе обычно не проблема, но тент, мебель и верёвки для белья — красный флаг.',
          'Не занимайте две ячейки парковки, не блокируйте доступ к пляжу, мусорным контейнерам, домам и пожарным дорогам.',
          'Ночёвка в легковой машине формально не делает её autocaravana, но местные запреты на camping/pernoita могут применяться шире.'
        ] }
      ]
    },
    {
      id: 'how-to-find-legal-place',
      title: 'Как найти легальное место для ночёвки',
      content: [
        { kind: 'paragraph', text: 'Безопасный алгоритм: сначала ищите официальную ASA или parque de campismo, потом проверяйте муниципальные знаки на месте. Приложения полезны, но не являются источником права.' },
        { kind: 'checklist', items: [
          'Ищите “Área de Serviço para Autocaravanas”, “Parque de Autocaravanas”, “Parque de Campismo”.',
          'Проверяйте, есть ли табличка с лимитом: 24 h, 48 h, 72 h, “só serviço”, “sem pernoita”.',
          'Смотрите, входит ли место в Parque Natural, Rede Natura 2000 или прибрежную защищённую зону.',
          'Если стоите вне ASA, не оставайтесь более 48 часов в одном município.',
          'Оплачивайте паркомат или app, если парковка платная; autocaravana не освобождает от обычных правил trânsito.',
          'Сливайте águas cinzentas и cassete WC только в service point.',
          'Храните чек/скрин оплаты и фото знаков на случай спора.',
          'В сомнительных местах спросите Câmara Municipal, posto de turismo или GNR.'
        ] },
        { kind: 'paragraph', text: 'FCMP и местные клубы caravanismo обычно публикуют полезные разъяснения и списки мест, но финальное решение всегда за законом, муниципальными знаками и инспектором на месте.' }
      ]
    },
    {
      id: 'fines-and-practical-defense',
      title: 'Штрафы и что делать при проверке',
      content: [
        { kind: 'paragraph', text: 'Основные штрафы по текущему Código da Estrada: 60–300 € за нарушение общего правила pernoita/aparcamento и 120–600 € за нарушение в áreas protegidas, Rede Natura 2000 или прибрежных плановых зонах. Сумма зависит от квалификации нарушения и места.' },
        { kind: 'checklist', items: [
          'Не спорьте агрессивно с GNR, Polícia Marítima или fiscalização municipal.',
          'Попросите указать конкретную норму, знак или зону, на которой основан штраф.',
          'Сфотографируйте место, знаки, разметку, координаты и отсутствие/наличие запрета.',
          'Если вы стояли в пределах 48 часов, сохраните доказательства времени прибытия: парковочный чек, трек, фото.',
          'Если это была официальная ASA/parque, сохраните чек оплаты или подтверждение бронирования.',
          'Не признавайте “campismo”, если вы фактически только парковались без тента, мебели и расширения габаритов.',
          'При получении auto de contraordenação можно оплатить или оспорить в установленный срок; детали будут в уведомлении.'
        ] },
        { kind: 'warning', text: 'Самый дорогой сценарий — пляж/природный парк + ночёвка + вынесенная мебель + слив воды. Это почти гарантированный конфликт и штраф ближе к верхней части диапазона.' }
      ]
    }
  ],
  costs: [
    { label: 'Штраф за нарушение общего правила pernoita/aparcamento', amountEURMin: 60, amountEURMax: 300, note: 'Например, превышение 48 часов в одном município или ночёвка там, где действует местный запрет.' },
    { label: 'Штраф в áreas protegidas, Rede Natura 2000 или прибрежных POC/POOC', amountEURMin: 120, amountEURMax: 600, note: 'Применяется, если ночёвка или aparcamento были вне специально разрешённого места.' },
    { label: 'Официальная ASA или parque de autocaravanas', amountEURMin: 0, amountEURMax: 15, note: 'Типичный диапазон за ночь/сутки без учёта camping высокого сезона; сервис воды/электричества может оплачиваться отдельно.' }
  ],
  sources: [
    { title: 'Lei 92/2019 — режим для circulação e permanência de autocaravanas', url: 'https://dre.pt/dre/detalhe/lei/92-2019-124441018', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código da Estrada consolidado — art. 50-A sobre autocaravanas', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-116041830', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 66/2021 — alteração das regras de pernoita de autocaravanas', url: 'https://dre.pt/dre/detalhe/lei/66-2021-169570084', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Federação de Campismo e Montanhismo de Portugal — informação sobre caravanismo', url: 'https://www.fcmp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
