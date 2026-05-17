export default {
  editorialVoice: 'hackportugal',
  id: 'creches-gratis-3a5-anos',
  categoryId: 'education_children',
  title: 'Бесплатные creches для детей 0–3 лет: Programa Creche Feliz',
  tldr: 'Creche Feliz — программа бесплатных яслей для детей до 3 лет в Portugal. В 2026 она покрывает mensalidade, inscrição, alimentação и базовый уход в creches aderentes, если ребёнок входит в охваченный возрастной контингент и есть место. Нужны NIF ребёнка/родителей, NISS ребёнка и подтверждение адреса. Заявка фактически идёт через поиск места на Carta Social и контакт с creche. Главный риск — не право, а нехватка vagas, особенно Lisboa, Porto, Cascais, Oeiras.',
  tags: ['creche', 'дети', 'crechefeliz', 'segurançasocial'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'Что такое Creche Feliz и что бесплатно',
      content: [
        { kind: 'paragraph', text: 'Programa Creche Feliz — государственная схема, по которой Segurança Social оплачивает место ребёнка в creche aderente. Для семьи базовая creche становится 0 € в месяц, но только если учреждение участвует в программе и у него есть свободная vaga.' },
        { kind: 'checklist', items: [
          'Обычно покрывается mensalidade — ежемесячная плата за creche.',
          'Покрывается inscrição / matrícula, если она входит в стандартные услуги программы.',
          'Покрывается питание ребёнка в рамках обычного расписания creche.',
          'Покрываются базовые higiene e cuidados — стандартный уход в яслях.',
          'Программа относится к creche, то есть в основном к возрасту 0–3 года до перехода в pré-escolar.',
          'Право не зависит от того, является ли семья португальской: экспаты с документами и регистрациями тоже могут пользоваться программой.',
          'Бесплатность работает только в creches aderentes: IPSS, Misericórdias, социальный сектор и частные учреждения, присоединившиеся к программе.'
        ] },
        { kind: 'warning', text: 'Creche Feliz не означает гарантированное место рядом с домом. В 2026 дефицит vagas остаётся главным ограничением: учреждение может быть бесплатным по программе, но полностью заполненным.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто имеет право в 2026',
      content: [
        { kind: 'paragraph', text: 'Ключевой критерий — ребёнок должен быть принят в creche aderente и относиться к возрасту, охваченному программой. В 2026 программа уже применяется как массовая схема для детей до 3 лет, включая детей, родившихся после 1 сентября 2021 года, и последующие контингенты.' },
        { kind: 'checklist', items: [
          'Ребёнок проживает в Portugal и имеет NIF.',
          'У ребёнка есть NISS или он оформляется через Segurança Social; многие creches попросят NISS до финальной регистрации.',
          'Один или оба родителя / responsáveis legais имеют NIF.',
          'У семьи есть адрес в Portugal: договор аренды, счёт, atestado de residência или другой документ, который примет учреждение.',
          'Ребёнок ещё не перешёл в pré-escolar; обычно creche — это 0–3 года.',
          'Учреждение должно быть aderente ao Programa Creche Feliz.',
          'Место должно быть подтверждено самой creche; одной регистрации на сайте недостаточно.'
        ] },
        { kind: 'warning', text: 'Условия «residência 5 anos» и «não em ERPI» не относятся к Creche Feliz. ERPI — это estrutura residencial para pessoas idosas, то есть дома для пожилых. Для бесплатной creche такие критерии не применяются; ориентируйтесь на правила Segurança Social и конкретной creche.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'Как искать место через Carta Social',
      content: [
        { kind: 'paragraph', text: 'Carta Social — основной публичный каталог социальных учреждений. Через него удобно проверять creches, участвующие в Creche Feliz, и наличие заявленных vagas. Но финальное решение всё равно принимает конкретная creche после контакта с семьёй.' },
        { kind: 'substeps', items: [
          { id: 'open-carta-social', title: '1. Откройте Carta Social', content: [
            { kind: 'paragraph', text: 'Зайдите на cartasocial.pt и ищите resposta social «Creche» по concelho, freguesia или почтовому индексу.' }
          ] },
          { id: 'filter-creche-feliz', title: '2. Проверяйте участие в Creche Feliz', content: [
            { kind: 'paragraph', text: 'Выбирайте учреждения, где указано участие в Programa Creche Feliz или наличие vagas gratuitas. Не все частные creches участвуют в программе.' }
          ] },
          { id: 'contact-creche', title: '3. Свяжитесь с creche напрямую', content: [
            { kind: 'checklist', items: [
              'Позвоните и уточните vagas на нужный месяц.',
              'Спросите, входит ли конкретная vaga в Creche Feliz.',
              'Уточните, принимают ли ребёнка вашего возраста.',
              'Попросите список документов по e-mail.',
              'Уточните horário: полный день, продлёнка, питание.',
              'Спросите, есть ли waiting list и как часто она обновляется.'
            ] }
          ] },
          { id: 'confirm-registration', title: '4. Подтвердите matrícula', content: [
            { kind: 'paragraph', text: 'После согласия creche подаёте документы, подписываете regulamento interno и matrícula. Только после этого место считается реальным.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы, которые обычно просят',
      content: [
        { kind: 'paragraph', text: 'Список немного отличается по учреждениям, но для экспатов лучше подготовить пакет заранее. Если у ребёнка ещё нет NISS, уточните в creche, можно ли подать matrícula с comprovativo de pedido.' },
        { kind: 'checklist', items: [
          'Паспорт или Cartão de Cidadão ребёнка, если есть.',
          'NIF ребёнка.',
          'NISS ребёнка или подтверждение запроса NISS.',
          'Паспорт / Cartão de Cidadão / ВНЖ родителей или responsáveis legais.',
          'NIF родителей.',
          'NISS родителей, если есть.',
          'Comprovativo de morada: договор аренды, счёт, atestado de residência от Junta de Freguesia.',
          'Boletim de vacinas / документ о прививках.',
          'Данные SNS: número de utente, если уже оформлен.',
          'Контакты для emergência и autorização de recolha — кто имеет право забирать ребёнка.',
          'IBAN могут попросить даже при mensalidade 0 €, например для питания вне программы или дополнительных услуг.'
        ] },
        { kind: 'warning', text: 'Если вы только переехали, не ждите ВНЖ для начала поиска. Многие семьи начинают обзвон creches уже с NIF, адресом и паспортами, а недостающие документы досылают позже — но правила зависят от учреждения.' }
      ]
    },
    {
      id: 'capacity-and-priority',
      title: 'Очереди, приоритеты и реальность мест',
      content: [
        { kind: 'paragraph', text: 'В 2026 бесплатность увеличила спрос. В крупных муниципалитетах ребёнок может формально иметь право на Creche Feliz, но не получить место в нужной freguesia. Практическая стратегия — подаваться в 10–20 creches, включая соседние freguesias и маршруты по дороге на работу.' },
        { kind: 'checklist', items: [
          'Начинайте поиск за 6–12 месяцев до желаемой даты старта.',
          'Подавайте заявки и в IPSS, и в частные creches aderentes.',
          'Проверяйте не только Lisboa/Porto, но и соседние concelhos: Amadora, Odivelas, Loures, Almada, Gaia, Matosinhos, Maia.',
          'Уточняйте возрастную группу: berçário до 12 месяцев обычно имеет меньше мест.',
          'Сохраняйте e-mail-подтверждения заявок и ответы creches.',
          'Просите поставить ребёнка в lista de espera письменно.',
          'Раз в 3–4 недели обновляйте контакт: места появляются при переездах семей.',
          'Проверьте Câmara Municipal: некоторые municípios имеют свои карты creches, субсидии или pré-inscrição.'
        ] },
        { kind: 'warning', text: 'Не платите «резервирование» наличными без recibo. Если учреждение говорит, что место бесплатное по Creche Feliz, но требует обязательные платежи сверх программы, попросите письменное объяснение, за что именно сумма.' }
      ]
    },
    {
      id: 'what-is-not-free',
      title: 'Что может остаться платным',
      content: [
        { kind: 'paragraph', text: 'Creche Feliz покрывает базовую creche, но не превращает все услуги учреждения в бесплатные. Часто платными остаются необязательные услуги или то, что выходит за стандартный regulamento.' },
        { kind: 'checklist', items: [
          'Продлённый horário до раннего утра или позднего вечера.',
          'Транспорт creche–casa.',
          'Форма, панама, рюкзак или индивидуальные материалы.',
          'Дополнительные занятия: inglês, música, natação, dança.',
          'Экскурсии и праздники.',
          'Специальное питание, если оно не входит в обычный план учреждения.',
          'Штрафы за поздний забор ребёнка.',
          'Фотосессии, альбомы и другие необязательные услуги.'
        ] },
        { kind: 'paragraph', text: 'Перед подписанием matrícula попросите regulamento interno и tabela de preços. В нормальной ситуации mensalidade по Creche Feliz — 0 €, а все дополнительные платежи должны быть ясно описаны и отделены от базовой услуги.' }
      ]
    }
  ],
  costs: [
    { label: 'Mensalidade в creche aderente по Creche Feliz', amountEUR: 0, note: 'Базовая ежемесячная плата покрывается программой при наличии подтверждённой vaga.' },
    { label: 'Inscrição / matrícula', amountEUR: 0, note: 'В рамках программы обычно покрывается; уточняйте, не берёт ли учреждение плату за дополнительные услуги.' },
    { label: 'Дополнительные услуги', amountEURMin: 10, amountEURMax: 150, note: 'Продлёнка, транспорт, форма, кружки и экскурсии могут оплачиваться отдельно.' }
  ],
  sources: [
    { title: 'Gov.pt: aderir ao Programa Creche Feliz', url: 'https://www.gov.pt/servicos/aderir-ao-programa-creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social: Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social: pesquisa de creches e respostas sociais', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE: Lei 41/2023', url: 'https://diariodarepublica.pt/dr/detalhe/lei/41-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
