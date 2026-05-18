export default {
  editorialVoice: 'hackportugal',
  id: 'carris-metropolitana',
  categoryId: 'public_transport',
  title: 'Carris Metropolitana — автобусный оператор Большого Лиссабона',
  tldr: 'Carris Metropolitana — единая сеть пригородных автобусов Área Metropolitana de Lisboa, запущенная поэтапно с 2022 года. Это не городская Carris Lisboa: оператор покрывает 15 муниципалитетов вокруг Лиссабона, включая Sintra, Loures, Mafra, Oeiras, Almada, Setúbal, Montijo.\n\nВ 2026 году основной способ оплаты — Navegante: 30 € за муниципальный pass или 40 € за metropolitano. Маршруты четырёхзначные, расписания часто проверяйте в приложении или на сайте.',
  tags: ['автобусы', 'navegante', 'lisboa', 'транспорт'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Carris Metropolitana',
      content: [
        { kind: 'paragraph', text: 'Carris Metropolitana — бренд автобусной сети Área Metropolitana de Lisboa. Его создали, чтобы заменить разрозненных частных перевозчиков единой системой маршрутов, нумерации, расписаний и интеграции с Navegante.' },
        { kind: 'paragraph', text: 'Запуск шёл поэтапно с 2022 года. Поэтому у старых жителей и Google-карт ещё встречаются старые названия линий, остановок и операторов. В 2026 году ориентируйтесь на carrismetropolitana.pt, приложение Carris Metropolitana и Navegante.' },
        { kind: 'checklist', items: [
          'Это автобусы Большого Лиссабона, а не метро и не поезд',
          'Это не Carris Lisboa: городские автобусы внутри Lisboa обслуживает Carris',
          'Маршруты Carris Metropolitana часто заходят на крупные транспортные узлы Lisboa: Oriente, Campo Grande, Colégio Militar, Sete Rios, Cais do Sodré',
          'Сеть работает в 15 муниципалитетах Área Metropolitana de Lisboa',
          'Cascais в основном обслуживается отдельной сетью MobiCascais, хотя поездки в соседние зоны могут пересекаться с Navegante',
          'Barreiro имеет собственный муниципальный оператор TCB',
          'Нумерация маршрутов четырёхзначная: это нормально, не ошибка'
        ] }
      ]
    },
    {
      id: 'coverage',
      title: 'Где ездит: зоны и муниципалитеты',
      content: [
        { kind: 'paragraph', text: 'Сеть поделена на операционные зоны. Для пассажира важнее не цвет зоны, а номер линии, направление и тип pass Navegante. Но зоны помогают понять, почему автобус в Sintra выглядит так же, как автобус в Setúbal.' },
        { kind: 'checklist', items: [
          'Área 1: Amadora, Oeiras, Sintra и связи с Lisboa',
          'Área 2: Loures, Mafra, Odivelas, Vila Franca de Xira и связи с Lisboa',
          'Área 3: Almada, Seixal, Sesimbra и южный берег Tejo',
          'Área 4: Alcochete, Moita, Montijo, Palmela, Setúbal',
          'Lisboa внутри города: обычно Carris, Metro, CP, Fertagus и Transtejo/Soflusa, а не Carris Metropolitana',
          'Cascais: проверяйте MobiCascais и CP Linha de Cascais',
          'Barreiro: проверяйте TCB и речные переправы'
        ] },
        { kind: 'warning', text: 'Не покупайте pass только по названию города. Если вы живёте в Sintra, а работаете в Lisboa, вам почти всегда нужен Navegante Metropolitano за 40 €, а не муниципальный pass за 30 €.' }
      ]
    },
    {
      id: 'tickets',
      title: 'Оплата: Navegante, pass и разовые поездки',
      content: [
        { kind: 'paragraph', text: 'В 2026 году Carris Metropolitana интегрирована в систему Navegante. Самый простой сценарий для экспата: оформить персональную карту Navegante, загрузить месячный pass и валидировать карту при каждой посадке в автобус.' },
        { kind: 'checklist', items: [
          'Navegante Municipal — 30 € в месяц, действует внутри одного выбранного муниципалитета',
          'Navegante Metropolitano — 40 € в месяц, действует по всей Área Metropolitana de Lisboa',
          'Pass действует на участвующих операторах: Carris Metropolitana, Carris, Metro Lisboa, CP в пределах AML, Fertagus, Transtejo/Soflusa и других по правилам Navegante',
          'Валидируйте карту при каждой посадке, даже если у вас месячный pass',
          'Пополнение возможно в автоматах Metro/CP, Payshop, некоторых киосках и через поддерживаемые приложения/банкоматы в зависимости от карты',
          'Разовые билеты у водителя обычно менее выгодны и могут не давать нормальной пересадки',
          'Для ежедневных поездок между муниципалитетами почти всегда выгоднее pass за 40 €, чем отдельные билеты'
        ] },
        { kind: 'warning', text: 'Если валидатор не сработал, не игнорируйте. На контроле аргумент «у меня есть pass, но я не приложил карту» может закончиться штрафом. Пробуйте второй валидатор или сообщите водителю сразу.' }
      ]
    },
    {
      id: 'route-numbers',
      title: 'Как читать маршруты и не уехать не туда',
      content: [
        { kind: 'paragraph', text: 'После перехода на Carris Metropolitana многие старые номера исчезли. Новые линии обычно имеют 4 цифры. У одной и той же остановки могут быть разные платформы для направлений, а у одного направления — варианты через разные bairros.' },
        { kind: 'checklist', items: [
          'Всегда проверяйте конечную остановку, а не только номер линии',
          'Смотрите направление на электронном табло автобуса',
          'На остановке сканируйте QR-код: он ведёт к актуальному расписанию',
          'В приложении Carris Metropolitana включите геолокацию и избранные остановки',
          'Проверяйте расписание отдельно для dias úteis, sábado, domingo и feriado',
          'Вечером, в воскресенье и в праздники интервалы могут резко увеличиваться',
          'В пригородах последний автобус может уходить намного раньше, чем в Lisboa',
          'Google Maps полезен, но при расхождении с официальным сайтом доверяйте Carris Metropolitana'
        ] },
        { kind: 'paragraph', text: 'Типичная ошибка новичка: выбрать маршрут по ближайшей остановке, но не заметить, что автобус идёт в обратную сторону или делает длинную петлю через соседние районы. В пригородах это может добавить 30–50 минут.' }
      ]
    },
    {
      id: 'daily-use',
      title: 'Практика на каждый день',
      content: [
        { kind: 'substeps', items: [
          { id: 'before-moving', title: 'До аренды жилья', content: [
            { kind: 'paragraph', text: 'Проверьте не только расстояние до Lisboa, но и реальное расписание автобуса утром и вечером. Дом в 18 км от офиса может быть хуже, чем дом в 35 км, если нет частой линии до поезда или метро.' },
            { kind: 'checklist', items: [
              'Найдите ближайшие остановки на carrismetropolitana.pt',
              'Проверьте первый и последний рейс в рабочий день',
              'Проверьте воскресенье и feriados',
              'Посмотрите пересадку на CP, Metro, Fertagus или barco',
              'Сравните время в 08:00 и в 22:00',
              'Проверьте, нужен ли вам только municipal pass или metropolitano'
            ] }
          ] },
          { id: 'commuting', title: 'Для ежедневной поездки', content: [
            { kind: 'paragraph', text: 'Сохраняйте 2–3 альтернативных маршрута. В пригородах одна отмена рейса может ломать всю цепочку пересадок, особенно если дальше у вас поезд CP или паром Transtejo/Soflusa.' },
            { kind: 'checklist', items: [
              'Держите Navegante пополненным до 1 числа месяца',
              'Приезжайте на остановку на 3–5 минут раньше',
              'Следите за avisos и alterações на сайте оператора',
              'При забастовках проверяйте минимальные услуги',
              'Для аэропорта Lisboa часто быстрее связка автобус + Metro, а не прямой пригородный автобус'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Если автобус не пришёл или маршрут изменился',
      content: [
        { kind: 'paragraph', text: 'Carris Metropolitana регулярно публикует изменения маршрутов, временные объезды, отмены остановок из-за работ и корректировки расписаний. Это особенно заметно в новых районах, у школ, промышленных зон и при дорожных работах Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Проверьте avisos на carrismetropolitana.pt',
          'Сравните расписание на остановке с расписанием в приложении',
          'Убедитесь, что сегодня не feriado municipal',
          'Проверьте, не перенесена ли остановка на соседнюю rua',
          'Сфотографируйте номер линии, остановку и время, если хотите подать жалобу',
          'Для системной жалобы используйте Livro de Reclamações Eletrónico или контакты оператора',
          'Если опоздание критично, стройте маршрут через CP/Metro/Fertagus, где интервалы обычно предсказуемее'
        ] },
        { kind: 'warning', text: 'В пригородах не планируйте юридические, AIMA, Finanças, экзамены IMT или медицинские визиты «впритык» только на одном автобусе. Закладывайте минимум 30–45 минут буфера.' }
      ]
    }
  ],
  costs: [
    { label: 'Navegante Municipal', amountEUR: 30, note: 'Месячный pass внутри одного муниципалитета Área Metropolitana de Lisboa' },
    { label: 'Navegante Metropolitano', amountEUR: 40, note: 'Месячный pass по всей Área Metropolitana de Lisboa; обычно нужен для поездок пригород ↔ Lisboa' },
    { label: 'Персональная карта Navegante', amountEURMin: 7, amountEURMax: 12, note: 'Обычное оформление дешевле, срочное дороже; цена зависит от пункта выдачи и срока' }
  ],
  sources: [
    { title: 'Официальный сайт Carris Metropolitana: маршруты, расписания, avisos', url: 'https://www.carrismetropolitana.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Официальный портал Navegante: тарифы и pass в Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Transportes Metropolitanos de Lisboa: информация о сети и операторах', url: 'https://www.tmlmobilidade.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
