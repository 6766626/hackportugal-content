export default {
  editorialVoice: 'hackportugal',
  id: 'carris-eletricos-lisboa',
  categoryId: 'public_transport',
  title: 'Лиссабонские электротрамваи 12, 15, 18, 28: туристы vs местные',
  tldr: 'Электротрамваи Carris — не музей, а обычный транспорт. 28E красивый, но почти всегда забит туристами и карманниками; местным он полезен только вне пиков. 15E — нормальный способ до Belém и Algés, чаще современный трамвай. 12E, 18E и 24E помогают в холмистых районах, где метро нет. С Navegante поездка включена в проездной; разовый билет у водителя в elétrico дорогой — около 3,30 € в 2026.',
  tags: ['carris', 'электротрамвай', 'lisboa', 'navegante'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: 'Какие линии реально нужны',
      content: [
        { kind: 'paragraph', text: 'В Лиссабоне слово elétrico означает трамвай Carris. Часть линий обслуживается историческими жёлтыми вагонами, часть — современными сочленёнными трамваями. Это городские маршруты, поэтому Navegante, zapping и обычные правила Carris действуют так же, как в автобусе.' },
        { kind: 'checklist', items: [
          '28E Martim Moniz — Campo de Ourique: открытка Лиссабона через Graça, Alfama, Baixa, Chiado, Estrela; красиво, но самый туристический и самый проблемный по карманникам.',
          '12E Praça da Figueira — Martim Moniz — Castelo — Baixa: короткая петля по центру и холмам; полезна, если живёте или часто ходите в Castelo / Mouraria.',
          '15E Praça da Figueira / Cais do Sodré — Belém — Algés: практичный маршрут к Belém, LX Factory рядом через Alcântara, MAAT, Jerónimos; обычно это современный трамвай, а не ретро-вагон.',
          '18E Cais do Sodré — Ajuda / Cemitério da Ajuda: полезен для Ajuda, Tapada da Ajuda, дворца Ajuda и верхней Alcântara.',
          '24E Campolide — Príncipe Real — Chiado / Praça Luís de Camões: не в названии гайда, но для местных часто полезнее 28E, если нужно между Campolide, Rato, Príncipe Real и Chiado.',
          'Подъёмники Elevador da Glória, Bica, Lavra и Santa Justa — отдельные средства Carris; туристически перегружены и оплачиваются по своим правилам.'
        ] }
      ]
    },
    {
      id: 'locals-vs-tourists',
      title: 'Где туристическая ловушка, а где транспорт',
      content: [
        { kind: 'paragraph', text: '28E — плохой выбор для ежедневной жизни, если вы можете пройти 10 минут до метро или автобуса. Очереди на Martim Moniz и Campo de Ourique, переполненные вагоны, медленное движение по узким улицам и частые задержки делают его ненадёжным.' },
        { kind: 'checklist', items: [
          'Для вида и первого знакомства: 28E один раз, лучше рано утром.',
          'Для Belém: берите 15E, поезд Cascais line от Cais do Sodré до Belém/Algés или автобус — не ждите «жёлтый ретро-трамвай».',
          'Для Alfama / Castelo: 12E часто удобнее и короче, чем 28E, но тоже тесный.',
          'Для Ajuda: 18E практичнее туристического 15E, если конечная точка выше Belém.',
          'Для Príncipe Real и Chiado: 24E или пешком/автобус часто быстрее 28E.',
          'Для поездки с коляской, большим чемоданом или велосипедом исторические вагоны неудобны: ступеньки, узкий проход, мало места.'
        ] },
        { kind: 'warning', text: 'Не планируйте пересадку на поезд, самолёт или визит в AIMA через 28E с точным временем. Пробки, припаркованные машины на рельсах и туристические очереди легко добавляют 20–40 минут.' }
      ]
    },
    {
      id: 'tickets',
      title: 'Оплата: Navegante, zapping и билет у водителя',
      content: [
        { kind: 'paragraph', text: 'Если у вас есть действующий Navegante municipal Lisboa или Navegante metropolitano, поездка на Carris уже включена: валидируйте карту при входе. Для жителей это главный способ пользоваться elétricos без переплаты.' },
        { kind: 'checklist', items: [
          'Navegante municipal Lisboa: обычно 30 € / месяц, действует внутри муниципалитета Lisboa на Carris, Metro и других городских операторах по условиям тарифа.',
          'Navegante metropolitano: обычно 40 € / месяц, покрывает всю Área Metropolitana de Lisboa.',
          'Zapping на карте Navegante ocasional / Viva Viagem дешевле билета у водителя и подходит для редких поездок.',
          'Билет у водителя в elétrico в 2026 — около 3,30 € за поездку; это туристическая цена за отсутствие подготовки.',
          'Карта Navegante ocasional стоит около 0,50 € и покупается/пополняется в автоматах Metro, CP, Fertagus, на станциях и в некоторых pontos de venda.',
          'В исторических трамваях вход обычно через переднюю дверь; валидатор находится у водителя.',
          'Не прикладывайте одну и ту же карту за двух людей: каждому пассажиру нужна своя валидированная карта или билет.'
        ] },
        { kind: 'warning', text: 'Контролёры Carris работают и на туристических линиях. «Я только одну остановку» не помогает: штрафы за безбилетный проезд в Португалии обычно кратны тарифу и могут быть неприятно высокими.' }
      ]
    },
    {
      id: 'timing',
      title: 'Когда ехать, чтобы не страдать',
      content: [
        { kind: 'paragraph', text: 'Правило простое: чем ближе к полудню и круизным/экскурсионным часам, тем хуже. На 28E туристический пик часто сильнее обычного commuter peak.' },
        { kind: 'checklist', items: [
          'Лучшее время для 28E: будний день до 08:30 или после 19:30, кроме праздничных вечеров.',
          'Плохое время для 28E: 10:00–17:00 почти круглый год; летом, на Пасху и в декабре очереди особенно длинные.',
          '15E к Belém перегружен в выходные, праздники и дни крупных событий у Mosteiro dos Jerónimos, MAAT, Centro Cultural de Belém и LX Factory.',
          'Если на остановке 28E уже стоит очередь на 2–3 вагона, почти всегда быстрее идти пешком вниз или взять автобус/Metro.',
          'Проверяйте приложение Carris, Google Maps или Moovit, но помните: на узких улицах прогнозы трамваев менее стабильны, чем метро.',
          'В дождь исторические трамваи заполняются быстрее: люди меньше идут пешком, а посадка/высадка замедляется.'
        ] }
      ]
    },
    {
      id: 'pickpockets',
      title: 'Карманники: как ездить безопасно',
      content: [
        { kind: 'paragraph', text: '28E, 12E и остановки в Baixa, Martim Moniz, Sé, Portas do Sol, Chiado — классические места для карманников. Риск не в насилии, а в плотной толпе, резких торможениях и «случайных» толчках.' },
        { kind: 'checklist', items: [
          'Телефон не держите в заднем кармане и не кладите в наружный карман рюкзака.',
          'Рюкзак в переполненном вагоне держите спереди.',
          'Сумку закрывайте молнией и держите рукой со стороны застёжки.',
          'Не стойте у дверей с телефоном в руке: это удобная точка для рывка перед закрытием дверей.',
          'Не показывайте пачку наличных при покупке билета у водителя.',
          'Если кто-то создаёт искусственную давку при посадке, лучше пропустите вагон.',
          'Паспорт для прогулки по Lisboa обычно не нужен: носите копию/фото, оригинал оставляйте в безопасном месте, если нет конкретной административной причины брать его с собой.',
          'При краже карты сразу блокируйте банковское приложение и подавайте participação в PSP, особенно если нужен документ для банка или страховки.'
        ] },
        { kind: 'warning', text: 'Самая дорогая ошибка — ехать на 28E с чемоданом, паспортом, ноутбуком и открытым рюкзаком после прилёта. Для переезда используйте Metro, такси/TVDE или автобус с нормальным пространством.' }
      ]
    },
    {
      id: 'practical-alternatives',
      title: 'Практичные альтернативы по тем же районам',
      content: [
        { kind: 'paragraph', text: 'Для жизни в Лиссабоне электротрамвай — не всегда лучший транспорт. Часто быстрее комбинировать Metro, автобусы Carris, поезд CP и пеший спуск.' },
        { kind: 'checklist', items: [
          'Alfama / Castelo: Metro до Martim Moniz, Rossio или Terreiro do Paço плюс пешком; вниз идти проще, чем ждать 28E.',
          'Belém: поезд CP от Cais do Sodré до Belém или Algés часто быстрее 15E в часы пробок.',
          'Alcântara / LX Factory: автобусы Carris или поезд до Alcântara-Mar / Alcântara-Terra могут быть удобнее 15E.',
          'Estrela / Campo de Ourique: автобусы и пешие маршруты от Rato часто надёжнее 28E.',
          'Ajuda: 18E хорош, но проверьте автобусные альтернативы, если едете вечером или в выходной.',
          'Príncipe Real / Chiado: 24E, Metro Baixa-Chiado/Rato и пешком — нормальная локальная схема.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Билет у водителя в elétrico Carris', amountEUR: 3.30, note: 'Ориентир на 2026; дороже, чем zapping или проездной.' },
    { label: 'Navegante municipal Lisboa', amountEUR: 30, note: 'Месячный проездной внутри Lisboa; трамваи Carris включены.' },
    { label: 'Navegante metropolitano', amountEUR: 40, note: 'Месячный проездной по Área Metropolitana de Lisboa.' },
    { label: 'Карта Navegante ocasional / Viva Viagem', amountEUR: 0.50, note: 'Носитель для zapping или разовых билетов; пополнение отдельно.' }
  ],
  sources: [
    { title: 'Carris — маршруты, расписания и информация по carreiras', url: 'https://www.carris.pt/viaje/carreiras/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carris — Tarifário (preços de bilhetes e passes)', url: 'https://www.carris.pt/compre/tarifario/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Carris — Novas Tarifas 2026', url: 'https://www.carris.pt/descubra/novo-tarifario-2026/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Navegante — проездные и тарифная система Lisboa/AML', url: 'https://www.navegante.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carris — официальный сайт оператора транспорта Lisboa', url: 'https://www.carris.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
