export default {
  editorialVoice: 'hackportugal',
  id: 'ginasio-piscina-municipal',
  categoryId: 'daily_life',
  title: 'Муниципальные бассейны и спортзалы — дешевле Fitness Hut',
  tldr: 'Муниципальные piscinas и complexos desportivos в Lisboa, Porto и других concelhos часто стоят 30–60 € в месяц для residente, а разовое плавание — около 2–6 €. Это не частный gym: нужна регистрация в Câmara Municipal или у оператора комплекса, подтверждение адреса, иногда медицинская declaração. Расписание жёстче, мест меньше, зато есть льготы для детей, séniores, студентов и семей.',
  tags: ['спорт', 'piscina', 'ginásio', 'муниципальный'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое piscina municipal и complexo desportivo',
      content: [
        { kind: 'paragraph', text: 'Муниципальный спортзал или бассейн — объект Câmara Municipal, Junta de Freguesia, муниципальной компании или концессионера. В отличие от Fitness Hut, Solinca или Holmes Place, цена часто субсидируется для жителей concelho.' },
        { kind: 'paragraph', text: 'Форматы разные: свободное плавание, aulas de natação, hidroginástica, ginásio, pilates, yoga, futsal, padel, atletismo, занятия для детей и séniores. В Lisboa это сеть equipamentos desportivos municipais CML; в Porto — equipamentos и programas desportivos Câmara Municipal do Porto.' },
        { kind: 'warning', text: 'Не ждите частного сервиса: меньше часов, больше очередей на популярные слоты после 18:00, обязательная touca в бассейне, иногда закрытие дорожек под школы и клубы.' }
      ]
    },
    {
      id: 'prices',
      title: 'Сколько стоит в 2026',
      content: [
        { kind: 'paragraph', text: 'Тарифы утверждает муниципалитет или оператор объекта. В 2026 реальная вилка для residente обычно такая: 30–60 € в месяц за регулярные занятия или комбинированный доступ; отдельное свободное плавание часто 2–6 € за вход; inscrição/cartão может стоить 5–20 €.' },
        { kind: 'checklist', items: [
          'Residente concelho обычно платит меньше, чем non-residente',
          'Дети, студенты, séniores 65+, pessoas com deficiência и famílias numerosas часто получают скидки',
          'Утренние или дневные слоты дешевле вечерних',
          'Aulas com professor дороже, чем natação livre',
          'Помесячная оплата обычно без long-term contract, но места надо бронировать',
          'В некоторых бассейнах оплата идёт за период/триместр, а не как подписка gym',
          'Муниципальный gym может не включать бассейн автоматически — проверяйте pacote',
          'В августе часть объектов закрывается на manutenção или работает по сокращённому расписанию'
        ] },
        { kind: 'paragraph', text: 'Для сравнения: частный gym удобнее по часам и приложению, но итоговая цена с mensalidade, taxa de inscrição, manutenção и extras часто выше. Муниципальный вариант особенно выгоден семье с детьми или тем, кому нужен бассейн 1–3 раза в неделю.' }
      ]
    },
    {
      id: 'how-to-find',
      title: 'Как найти объект рядом',
      content: [
        { kind: 'paragraph', text: 'Ищите не по “gym”, а по португальским словам: piscina municipal, complexo desportivo municipal, pavilhão municipal, equipamentos desportivos, desporto municipal + название concelho.' },
        { kind: 'checklist', items: [
          'Lisboa: сайт Câmara Municipal de Lisboa → Desporto → Equipamentos desportivos',
          'Porto: сайт Câmara Municipal do Porto → Desporto → Equipamentos / Programas',
          'Oeiras, Cascais, Sintra, Almada, Matosinhos, Gaia имеют свои отдельные сети и тарифы',
          'Проверьте, кто управляет объектом: Câmara Municipal, empresa municipal, clube или concessionário',
          'Смотрите расписание “horário público” и “natação livre”, а не только школьные занятия',
          'Проверьте транспорт: многие бассейны дешевле, но неудобны без машины',
          'Позвоните перед визитом: места на aulas de natação часто заканчиваются в сентябре и январе',
          'Если сайт старый, актуальные vagas часто публикуют в PDF, Facebook муниципалитета или на ресепшене'
        ] },
        { kind: 'warning', text: 'Муниципальные цены и правила отличаются даже внутри одной агломерации. Прописка в Lisboa не даёт автоматически тариф residente в Oeiras или Cascais.' }
      ]
    },
    {
      id: 'registration',
      title: 'Как зарегистрироваться',
      content: [
        { kind: 'paragraph', text: 'Регистрация обычно делается лично на ресепшене спорткомплекса или через муниципальный портал. Для популярных бассейнов лучше идти в первые дни открытия inscrições на сезон.' },
        { kind: 'checklist', items: [
          'Документ личности: Cartão de Cidadão, ВНЖ или паспорт',
          'NIF — почти всегда нужен для ficha de inscrição и recibo',
          'Подтверждение адреса: atestado de residência, contrato de arrendamento, счёт água/luz или certidão de domicílio fiscal',
          'Фотография или фото на месте для cartão de utente',
          'IBAN или Multibanco/MB WAY для оплаты, если доступна débito direto',
          'Declaração médica или termo de responsabilidade — зависит от возраста, вида спорта и правил объекта',
          'Для детей: данные encarregado de educação, дата рождения, иногда boletim de vacinas или declaração',
          'Для льгот: Cartão Municipal, comprovativo de estudante, cartão sénior, comprovativo de família numerosa или deficiência'
        ] },
        { kind: 'paragraph', text: 'После регистрации вам дают cartão или número de utente municipal. С ним бронируют занятия, проходят турникет и оплачивают mensalidade.' }
      ]
    },
    {
      id: 'schedules-family',
      title: 'Расписание, дети и семейные скидки',
      content: [
        { kind: 'paragraph', text: 'Самые дефицитные места — детская natação после школы и взрослые занятия 18:00–21:00. На них часто есть lista de espera. Если у вас гибкий график, дневные слоты дешевле и свободнее.' },
        { kind: 'checklist', items: [
          'Записывайтесь в конце лета на учебный год: сентябрь — пик inscrições',
          'Для детей уточняйте уровень: adaptação ao meio aquático, iniciação, aperfeiçoamento',
          'Семейные descontos могут требовать одинаковый адрес всех участников',
          'Família numerosa в Португалии обычно подтверждается cartão/declaração соответствующего статуса, а не просто словами',
          'Пропуски занятий не всегда переносятся — смотрите regulamento',
          'На каникулы и feriados расписание меняется',
          'В бассейн почти всегда нужны touca, chinelos, fato de banho и душ до входа',
          'Некоторые комплексы требуют cadeado для шкафчика или монету-залог'
        ] },
        { kind: 'warning', text: 'Если вам нужен доступ “когда угодно” семь дней в неделю, муниципальный объект может раздражать. Если вы готовы ходить по расписанию, экономия за год на одного взрослого легко достигает нескольких сотен евро.' }
      ]
    },
    {
      id: 'lisbon-porto-tips',
      title: 'Lisboa и Porto: что проверить отдельно',
      content: [
        { kind: 'paragraph', text: 'В Lisboa сеть CML включает разные piscinas, pavilhões и espaços desportivos; часть объектов может быть под управлением freguesia или клубов. Начинайте с cm-lisboa.pt и затем проверяйте страницу конкретного equipamento.' },
        { kind: 'paragraph', text: 'В Porto смотрите cm-porto.pt: у Câmara есть municipal sports facilities и программы активного образа жизни. Для бассейнов и pavilhões условия зависят от объекта, сезона и категории пользователя.' },
        { kind: 'checklist', items: [
          'Скачайте tabela de preços / regulamento в PDF и проверьте дату документа',
          'Ищите слова residente, não residente, jovem, sénior, estudante, família',
          'Сравните preço mensal и preço por aula: иногда разовые входы выгоднее',
          'Уточните, включена ли страховка seguro desportivo',
          'Проверьте период оплаты: mês, época desportiva, trimestre или pack',
          'Спросите про suspensão temporária на отпуск или болезнь',
          'Сфотографируйте расписание на ресепшене: оно часто актуальнее сайта'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Свободное плавание, разовый вход', amountEURMin: 2, amountEURMax: 6, note: 'Типичная муниципальная вилка; зависит от concelho, возраста и статуса residente' },
    { label: 'Муниципальный бассейн или занятия, месяц', amountEURMin: 30, amountEURMax: 60, note: 'Обычная цена для residente при регулярном посещении или aulas' },
    { label: 'Inscrição / cartão de utente', amountEURMin: 5, amountEURMax: 20, note: 'Может взиматься при первой регистрации или ежегодном обновлении' },
    { label: 'Touca, chinelos, cadeado', amountEURMin: 10, amountEURMax: 30, note: 'Разовые расходы на экипировку для бассейна и шкафчика' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — Desporto и equipamentos desportivos municipais', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — Desporto, equipamentos и programas municipais', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal ePortugal — serviços municipais и contactos das câmaras municipais', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
