export default {
  editorialVoice: 'hackportugal',
  id: 'tvde-driver-license',
  categoryId: 'work_business',
  title: 'TVDE: как стать водителем Uber/Bolt в Португалии',
  tldr: 'TVDE — легальная работа водителем через Uber, Bolt и другие plataformas eletrónicas. В 2026 водителю нужен certificado de motorista TVDE от IMT: права B более 3 лет, курс formação inicial 50h, медико-психологическая пригодность, registo criminal и заявка в IMT. Машина должна быть оформлена для TVDE в DUA/Certificado de Matrícula, иметь спецстраховку, inspeção и dístico TVDE. Работать можно только через licensed operador TVDE и регистрацию на платформе.',
  tags: ['tvde', 'uber', 'bolt', 'imt', 'работа'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-tvde-is',
      title: 'Что такое TVDE и кто реально может ездить',
      content: [
        { kind: 'paragraph', text: 'TVDE — Transporte Individual e Remunerado de Passageiros em Veículos Descaracterizados a partir de Plataforma Eletrónica. Это не такси: заказы идут через платформу, цена рассчитывается приложением, а перевозку юридически выполняет operador TVDE, зарегистрированный в IMT.' },
        { kind: 'paragraph', text: 'Базовый закон — Lei 45/2018. На практике в 2026 схема такая: водитель получает certificado de motorista TVDE, автомобиль оформляется как TVDE, оператор имеет licença TVDE, а Uber/Bolt проверяют документы перед активацией аккаунта.' },
        { kind: 'checklist', items: [
          'Водитель: carta de condução категории B более 3 лет',
          'Курс motorista TVDE — 50 часов в аккредитованной школе',
          'Certificado de motorista TVDE, выданный IMT',
          'Чистый или допустимый registo criminal для перевозки пассажиров',
          'Write: "Медицинская и психологическая пригодность по требованиям Grupo 2."',
          'Связь с licensed operador TVDE: свой оператор или работа через чужого',
          'Автомобиль с DUA/Certificado de Matrícula, где указано использование TVDE',
          'Страховка для atividade TVDE, не обычная частная ОСАГО',
          'Регистрация водителя и машины в Uber/Bolt'
        ] }
      ]
    },
    {
      id: 'driver-certificate',
      title: 'Получить certificado de motorista TVDE в IMT',
      content: [
        { kind: 'paragraph', text: 'Без certificado de motorista TVDE платформа не активирует водителя. Сертификат выдаёт IMT после курса и проверки требований. Обычно он действует 5 лет; продление делается до истечения срока через formação contínua/renovação и новую заявку.' },
        { kind: 'substeps', items: [
          { id: 'requirements', title: '1. Проверить личные требования', content: [
            { kind: 'checklist', items: [
              'Возраст не является главным фильтром, но нужна carta B более 3 лет',
              'Португальские или признанные в Португалии права',
              'NIF',
              'Адрес в Португалии',
              'Registo criminal recente — обычно просят свежий, не старше 3 месяцев',
              'Write: "Медицинская справка и avaliação psicológica по требованиям Grupo 2 — обязательны для certificado de motorista TVDE."',
              'Законное право работать в Португалии: ВНЖ, гражданство ЕС или другой статус с доступом к работе'
            ] }
          ] },
          { id: 'course', title: '2. Пройти curso TVDE 50h', content: [
            { kind: 'paragraph', text: 'Курс проходит в учебном центре, признанном IMT. Программа регулируется Portaria 293/2018 и включает безопасность, обслуживание пассажиров, правила TVDE, дорожное поведение, доступность для пассажиров с ограничениями и использование платформ.' },
            { kind: 'warning', text: 'Не покупайте “готовый certificado”. Платформы сверяют документ с IMT, а поддельный сертификат может закрыть доступ к Uber/Bolt и создать уголовные риски.' }
          ] },
          { id: 'imt-application', title: '3. Подать заявку в IMT', content: [
            { kind: 'paragraph', text: 'После курса школа обычно выдаёт declaração/certificado de formação. С ним подают заявку на certificado de motorista TVDE через сервисы IMT или по инструкции школы. Срок зависит от нагрузки IMT и полноты документов.' },
            { kind: 'checklist', items: [
              'Documento de identificação: Cartão de Cidadão, ВНЖ или паспорт с подтверждением статуса',
              'Carta de condução',
              'Certificado/declaração курса TVDE 50h',
              'Registo criminal',
              'Atestado médico и avaliação psicológica, если применимо',
              'NIF и контакты',
              'Квитанция оплаты IMT'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'operator-model',
      title: 'Выбрать модель: свой operador TVDE или работа через оператора',
      content: [
        { kind: 'paragraph', text: 'Водитель сам по себе не оказывает TVDE-услугу платформе. По Lei 45/2018 перевозку выполняет operador TVDE, зарегистрированный в IMT. Поэтому у вас есть два пути: устроиться/подключиться к существующему operador TVDE или создать собственного оператора.' },
        { kind: 'checklist', items: [
          'Через чужого оператора: быстрее старт, но комиссия/аренда/график зависят от договора',
          'Свой оператор: больше контроля, но нужны atividade/empresa, лицензия IMT, бухгалтерия, страхование и документы на машину',
          'Если открываете atividade как ENI или компанию, заранее обсудите CAE, IVA, IRS/IRC и Segurança Social с contabilista',
          'Платформа может заключать договор только с оператором, который прошёл проверку',
          'Договор с оператором должен ясно указывать, кто платит топливо, Via Verde, штрафы, обслуживание, страхование и комиссию платформы',
          'Проверьте, кто является владельцем аккаунта в Uber/Bolt и куда поступают выплаты'
        ] },
        { kind: 'warning', text: '“Сдам аккаунт Uber/Bolt” и работа на чужом профиле — риск блокировки, проблем со страховкой и ответственности при ДТП. Водитель в поездке должен совпадать с водителем, зарегистрированным в платформе.' }
      ]
    },
    {
      id: 'vehicle-documents',
      title: 'Подготовить автомобиль: DUA, страховка, inspeção, dístico',
      content: [
        { kind: 'paragraph', text: 'Обычной легковой машины с частной страховкой недостаточно. Автомобиль должен быть связан с atividade TVDE и пройти проверку документов у платформы. Uber/Bolt могут вводить собственные требования к возрасту, классу, состоянию и экологичности авто — они строже или иначе сформулированы, чем закон.' },
        { kind: 'checklist', items: [
          'DUA/Certificado de Matrícula с указанием использования для TVDE или соответствующей anotação',
          'Лёгковой автомобиль для пассажирских перевозок, обычно до 9 мест включая водителя',
          'Matrícula portuguesa',
          'Seguro automóvel для transporte remunerado/TVDE, а не обычное частное страхование',
          'Write: "Inspeção válida по режиму, применимому к TVDE/transportes remunerados; не полагайтесь на обычный график частного автомобиля — проверьте periodicidade в IMT/centro de inspeção и у платформы."',
          'Dístico TVDE на автомобиле по правилам Lei 45/2018',
          'Документ владельца или договор аренды/leasing, если машина не ваша',
          'Фотографии автомобиля и документов для Uber/Bolt',
          'Via Verde полезна практически обязательно, но это не заменяет документы TVDE'
        ] },
        { kind: 'warning', text: 'Если в DUA нет правильной finalidade/afetação TVDE или страховка не покрывает платную перевозку пассажиров, при ДТП страховая может спорить с выплатой. Это один из самых дорогих рисков TVDE.' }
      ]
    },
    {
      id: 'platform-registration',
      title: 'Зарегистрироваться в Uber/Bolt и пройти активацию',
      content: [
        { kind: 'paragraph', text: 'После IMT-сертификата и подготовки автомобиля водитель загружает документы в Uber Driver, Bolt Driver или кабинет оператора. Проверка не мгновенная: платформа сверяет личность, сертификат, права, автомобиль, страхование и связь с оператором.' },
        { kind: 'checklist', items: [
          'Профиль водителя с реальным именем и фотографией',
          'Carta de condução',
          'Certificado de motorista TVDE от IMT',
          'Документ личности и право на работу',
          'Registo criminal, если платформа просит обновить',
          'Данные operador TVDE и подтверждение связи с ним',
          'DUA/Certificado de Matrícula автомобиля',
          'Seguro TVDE',
          'Inspeção válida',
          'IBAN для выплат оператору или водителю — зависит от модели'
        ] },
        { kind: 'paragraph', text: 'До первой смены проверьте тарифы комиссии, правила отмен, аэропортовые зоны, штрафы за жалобы, правила детских кресел, перевозку животных и лимиты времени за рулём. У Uber и Bolt эти правила обновляются чаще, чем закон.' }
      ]
    },
    {
      id: 'tax-and-practical',
      title: 'Налоги, расходы и ежедневная экономика',
      content: [
        { kind: 'paragraph', text: 'TVDE выглядит как “сел и поехал”, но экономика зависит от комиссии платформы, комиссии оператора, аренды машины, топлива, страховки и налогов. Если вы самозанятый или свой operador, заранее настройте recibos verdes/фактурацию, Segurança Social и учёт расходов.' },
        { kind: 'checklist', items: [
          'NIF обязателен для договоров, налогов и платформ',
          'NISS нужен для Segurança Social, если вы работаете как trabalhador independente или сотрудник',
          'Recibos verdes подходят не всегда: модель зависит от того, водитель вы, оператор или оба сразу',
          'Write: "Комиссии платформы/оператора уменьшают вашу экономическую маржу, но налоговая база зависит от модели: trabalhador independente em regime simplificado, contabilidade organizada, ENI или sociedade. Не считайте автоматически, что все комиссии вычитаются из IRS/IRC; настройте faturação и IVA с contabilista."',
          'Расходы: топливо/зарядка, мойка, шины, обслуживание, парковки, portagens, Via Verde, страховка',
          'Сохраняйте faturas com NIF по расходам, связанным с деятельностью',
          'Если обороты растут, режим IVA и contabilidade organizada лучше обсудить с contabilista',
          'Штрафы IMT/ANSR/платформы за документы и поведение могут быть выше, чем дневная выручка'
        ] },
        { kind: 'warning', text: 'Не считайте выручку в приложении “зарплатой”. Из неё ещё уходят комиссия, оператор, автомобиль, топливо, страховка, Segurança Social и IRS/IRC. Перед арендой машины попросите у оператора расчёт net после всех удержаний.' }
      ]
    }
  ],
  costs: [
    { label: 'Курс motorista TVDE 50h', amountEURMin: 150, amountEURMax: 350, note: 'Рыночная цена школ; зависит от города и формата' },
    { label: 'Заявка/сертификат IMT TVDE', amountEURMin: 30, amountEURMax: 60, note: 'Проверяйте актуальную taxa IMT при подаче' },
    { label: 'Registo criminal online', amountEUR: 5, note: 'Обычно дешевле онлайн; лично может отличаться' },
    { label: 'Atestado médico + avaliação psicológica', amountEURMin: 60, amountEURMax: 140, note: 'Если требуется для Grupo 2/процесса школы или IMT' },
    { label: 'Seguro automóvel TVDE', amountEURMin: 700, amountEURMax: 1800, note: 'Годовая вилка сильно зависит от машины, стажа и страховщика' }
  ],
  sources: [
    { title: 'IMT: página oficial TVDE', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/TVDE/Paginas/TVDE.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 45/2018 — regime jurídico TVDE', url: 'https://dre.pt/dre/detalhe/lei/45-2018-115991688', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 293/2018 — formação de motoristas TVDE', url: 'https://dre.pt/dre/detalhe/portaria/293-2018-116820880', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Uber Portugal: requisitos para motoristas TVDE', url: 'https://www.uber.com/pt/pt-pt/drive/requirements/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
