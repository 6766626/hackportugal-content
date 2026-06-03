export default {
  editorialVoice: 'hackportugal',
  id: 'feriados-2026',
  categoryId: 'daily_life',
  title: 'Праздники и выходные в Португалии',
  tldr: 'В Португалии около 13 национальных праздников + 1-2 муниципальных. Ключевые: Ano Novo (1.01), Carnaval (февраль), Páscoa (Пасха, март/апрель), 25 de Abril (революция), 1 de Maio, 10 de Junho (Camões), Santos Populares в июне, Assunção 15.08, 5 de Outubro (Республика), 1 de Novembro (Всех Святых), 1 de Dezembro (Восстановление независимости), 8 de Dezembro, Natal 25.12. «Ponte» («мост») — когда праздник во вторник или четверг, пятница или понедельник часто тоже становятся выходными.',
  tags: ['праздники', 'выходные', 'Португалия'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'national',
      title: 'Национальные праздники 2026',
      content: [
        { kind: 'checklist', items: [
          '1 января — Ano Novo (Новый год) — четверг',
          '17 февраля — Carnaval (вторник) — неофициальный праздник, но многие не работают',
          '3 апреля — Sexta-feira Santa (Страстная пятница)',
          '5 апреля — Páscoa (Пасха, воскресенье)',
          '25 апреля — Dia da Liberdade (25 Апреля, революция гвоздик) — суббота',
          '1 мая — Dia do Trabalhador (День труда) — пятница',
          '4 июня — Corpo de Deus (Тело Господне) — четверг',
          '10 июня — Dia de Portugal (день Камоэнса, португальская идентичность) — среда',
          '15 августа — Assunção (Успение) — суббота',
          '5 октября — Implantação da República (Республика) — понедельник',
          '1 ноября — Todos os Santos (Все святые) — воскресенье',
          '1 декабря — Restauração da Independência — вторник',
          '8 декабря — Imaculada Conceição — вторник',
          '25 декабря — Natal (Рождество) — пятница'
        ]},
        { kind: 'warning', text: '24 июня (в Порту — São João) и 13 июня (в Лиссабоне — Santo António) — муниципальные праздники, нерабочие в соответствующих городах.' }
      ]
    },
    {
      id: 'santos-populares',
      title: 'Santos Populares (июнь) — главный культурный месяц',
      content: [
        { kind: 'paragraph', text: 'Весь июнь по всей стране отмечают «народных святых»:' },
        { kind: 'checklist', items: [
          '13 июня — Santo António (Лиссабон). Уличные гулянья в Alfama, сардины на углях. Marchas Populares 12 июня на Avenida da Liberdade',
          '24 июня — São João (Порту). Битва пластиковыми молотками, алкатруз на голове, фейерверки над Дору — легендарное событие',
          '29 июня — São Pedro: муниципальные праздники в ряде городов (Sintra, Seixal, Póvoa de Varzim и др.; в Setúbal муниципальный праздник — 15 сентября). Рыбацкие фестивали'
        ]},
        { kind: 'paragraph', text: 'Для жителей это сардины, португальские песни, гирлянды и полные людей парки. Отличный способ почувствовать местную культуру.' }
      ]
    },
    {
      id: 'pontes',
      title: 'Pontes — как португальцы удлиняют выходные',
      content: [
        { kind: 'paragraph', text: '«Ponte» — «мост» между праздником и выходными. Если праздник во вторник, многие берут отгул в понедельник → 4-дневные выходные.' },
        { kind: 'paragraph', text: 'В 2026 классические pontes:' },
        { kind: 'checklist', items: [
          '25 апреля (сб) — не слишком выгодно',
          '1 мая (пт) — длинные выходные 1-3 мая',
          '10 июня (ср) — середина недели, удобного «моста» нет',
          '5 октября (пн) — 3-4-5 октября длинные выходные',
          '8 декабря (вт) — многие берут 7.12 → 4-дневные выходные'
        ]}
      ]
    },
    {
      id: 'working-hours',
      title: 'Работа в праздники',
      content: [
        { kind: 'checklist', items: [
          'Государственные учреждения — банки, Finanças, AIMA, школы — закрыты',
          'Супермаркеты (Continente, Lidl) обычно работают, но по сокращённому графику',
          'Рестораны открыты, популярные туристические места работают',
          'Дежурная аптека — Farmácia de serviço — открыта',
          'Почта CTT закрыта',
          'Транспорт работает по расписанию выходного дня'
        ]}
      ]
    },
    {
      id: 'personal-days',
      title: 'Дополнительные дни отпуска',
      content: [
        { kind: 'paragraph', text: 'По закону работник в Португалии имеет:' },
        { kind: 'checklist', items: [
          '22 рабочих дня отпуска в год',
          'Subsídio de férias (отпускные) — соответствует базовой зарплате за период отпуска; по закону выплачивается до начала отпуска',
          'Subsídio de Natal — соответствует месячной зарплате, обычно выплачивается до 15 декабря',
          'Брак (свадьба) — 15 последовательных дней отсутствия по Código do Trabalho',
          'Смерть близких родственников — срок ausência justificada зависит от степени родства (от 2 до 20 дней по CT art. 251)',
          'Выходной в день рождения, если работодатель согласен; это частая практика'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo de Portugal — Código do Trabalho (трудовой кодекс)', url: 'https://www.dgert.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Diário da República — Lei 7/2009 (Código do Trabalho)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}