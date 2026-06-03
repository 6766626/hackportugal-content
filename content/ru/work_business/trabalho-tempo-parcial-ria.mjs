export default {
  editorialVoice: 'hackportugal',
  id: 'trabalho-tempo-parcial-ria',
  categoryId: 'work_business',
  title: 'Работа на полставки, contrato a termo certo и trabalho intermitente',
  tldr: 'В Португалии part-time не означает «без прав»: salário, férias, subsídio de Natal/férias и Segurança Social считаются пропорционально, но отпуск обычно остаётся 22 рабочих дня. Contrato a termo certo в 2026 допустим только при временной потребности работодателя по art. 140 Código do Trabalho; после Lei 13/2023 нельзя прикрывать им «первую работу» или долгую безработицу. Общий лимит fixed-term — до 2 лет, а не универсальные 18 мес. RTI — редкий режим «вызывают, когда нужно»: минимум 5 мес работы в год и компенсация за простой обычно 20%.',
  tags: ['trabalho', 'part-time', 'contrato', 'rti', 'act'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'part-time-basics',
      title: 'Tempo parcial: что сохраняется на полставки',
      content: [
        { kind: 'paragraph', text: 'Trabalho a tempo parcial — это работа с нормальным периодом меньше сопоставимого full-time работника: меньше часов в неделю, меньше дней в месяце или часть года. В 2026 стандартная full-time неделя в частном секторе обычно до 40 часов, но коллективный договор может дать меньше.' },
        { kind: 'checklist', items: [
          'Contrato должен быть письменным и указывать часы/дни работы и сравнение с full-time графиком.',
          'Если письменная форма не соблюдена, договор по закону считается заключённым на full-time (art. 153 Código do Trabalho). То же последствие наступает, если в договоре не указан нормальный период работы и нет сравнения с full-time.',
          'Salário считается пропорционально: при 20 ч/нед вместо 40 ч/нед — минимум 50% от применимого full-time salário.',
          'SMN 2026 — 920 € в месяц для full-time; для 50% занятости ориентир — не ниже 460 € брутто, если нет более выгодного CCT.',
          'Férias: право на отпуск не «режется» автоматически до 11 дней; обычно сохраняются 22 рабочих дня, но оплата отпускных соответствует вашей part-time зарплате.',
          'Subsídio de férias и subsídio de Natal платятся исходя из вашей фактической зарплаты/стажа в году.',
          'Segurança Social удерживается как обычно: 11% с работника и 23,75% с работодателя для стандартного contrato de trabalho.',
          'Recibos verdes — не part-time contrato de trabalho: там нет автоматических отпускных, больничных как у работника и защиты от увольнения.'
        ] },
        { kind: 'warning', text: 'Meal allowance не является универсальной обязанностью Código do Trabalho. Если он положен по contrato/CCT/policy компании, для part-time часто применяют правило: полный valor при рабочем дне 5+ часов, пропорционально при меньшем дне.' }
      ]
    },
    {
      id: 'termo-certo',
      title: 'Contrato a termo certo: когда срочный контракт законен',
      content: [
        { kind: 'paragraph', text: 'Contrato a termo certo — срочный трудовой договор с заранее известной датой окончания. Он не может использоваться просто потому, что работодатель «сначала хочет попробовать». Нужна объективная временная причина из art. 140 Código do Trabalho.' },
        { kind: 'checklist', items: [
          'Замена временно отсутствующего работника: parental leave, sick leave, отпуск, временная командировка.',
          'Сезонная работа или предсказуемый пик активности.',
          'Исключительный и временный рост заказов.',
          'Проект, мероприятие, obra или задача с ограниченной длительностью.',
          'Запуск новой деятельности или empresa/estabelecimento — только в рамках условий закона.',
          'В договоре должна быть конкретная причина, а не общая фраза «necessidades temporárias da empresa».',
          'Дата окончания или способ её определения должны быть написаны прямо.',
          'Работа должна соответствовать заявленной причине: нельзя писать «замена João», а фактически закрывать постоянную позицию.'
        ] },
        { kind: 'warning', text: 'После Lei 13/2023, действующей с 01.05.2023, старые основания вроде «trabalhador à procura de primeiro emprego» и «desempregado de longa duração» больше не являются обычным оправданием для contrato a termo certo. Если HR даёт шаблон со старой формулировкой — просите исправить.' }
      ]
    },
    {
      id: 'duration-renewal',
      title: 'Срок, продления и окончание договора',
      content: [
        { kind: 'paragraph', text: 'В 2026 общий лимит contrato a termo certo по Código do Trabalho — до 2 лет, включая продления. Утверждение «максимум 18 месяцев» не является универсальным правилом: оно встречается в старых материалах и отдельных ситуациях, но как общий потолок для fixed-term в 2026 использовать его нельзя.' },
        { kind: 'checklist', items: [
          'Продлений может быть максимум 3.',
          'Суммарная длительность продлений не может превышать первоначальный срок договора.',
          'Если срок или причина нарушены, договор может быть признан contrato sem termo — бессрочным.',
          'Пробный период для fixed-term обычно 30 дней, если договор на 6+ месяцев, и 15 дней, если меньше 6 месяцев или срок неопределён, но ожидаемо короткий.',
          'Работодатель должен письменно предупредить о non-renewal минимум за 15 дней до конца срока.',
          'Работник должен предупредить о своём non-renewal минимум за 8 дней.',
          'При caducidade по инициативе работодателя обычно положена компенсация 24 дня базовой зарплаты и diuturnidades за каждый год стажа, пропорционально неполному году.',
          'Если вы продолжаете работать после даты окончания и работодатель это принимает, фиксируйте часы, e-mails, recibos de vencimento: это аргумент в пользу бессрочного договора.'
        ] },
        { kind: 'warning', text: 'Не подписывайте задним числом «renovação» или «cessação por mútuo acordo», если фактически вы не соглашались. В споре важны e-mails, escalas, recibos de vencimento, банковские выплаты и переписка в Slack/WhatsApp.' }
      ]
    },
    {
      id: 'rti',
      title: 'RTI / trabalho intermitente: «вызывают, когда нужно»',
      content: [
        { kind: 'paragraph', text: 'Regime de trabalho intermitente регулируется art. 157-160 Código do Trabalho. Это не обычный zero-hours contract. Его можно использовать у компаний с прерывистой деятельностью или переменной интенсивностью: туризм, eventos, сезонные операции, некоторые услуги.' },
        { kind: 'checklist', items: [
          'Договор обязательно письменный.',
          'В договоре должны быть указаны периоды работы или минимальное число часов/дней в год.',
          'Годовая работа не может быть меньше 5 месяцев full-time.',
          'Из этих 5 месяцев минимум 3 месяца должны быть последовательными.',
          'Работодатель должен вызвать работника заранее: обычно минимум за 20 дней.',
          'В период работы платятся обычная зарплата, férias, subsídios и Segurança Social.',
          'В период простоя платится компенсация, установленная CCT или договором; если ничего нет — обычно 20% от базовой зарплаты.',
          'Во время простоя работник может работать у другого работодателя, если договор не содержит законного ограничения и нет конфликта интересов.',
          'RTI не должен подменять постоянную part-time позицию с регулярным графиком.'
        ] },
        { kind: 'warning', text: 'Если вас «вызывают по WhatsApp» без письменного RTI, без компенсации за простой и без recibos de vencimento, это не легальный trabalho intermitente, а риск незадекларированной работы. Жалобу можно подать в ACT.' }
      ]
    },
    {
      id: 'what-to-check-before-signing',
      title: 'Что проверить перед подписью 🖊️',
      content: [
        { kind: 'checklist', items: [
          'Название работодателя, NIPC, адрес, место работы и função/categoria profissional.',
          'Тип договора: tempo parcial, termo certo, sem termo, temporário через agência, RTI — это разные режимы.',
          'Gross salário, periodicidade оплаты, subsídio de alimentação, subsídio de férias/Natal.',
          'Horas semanais, дни недели, смены, правила escalas и оплату trabalho suplementar.',
          'Конкретную причину fixed-term, если это termo certo.',
          'Дату начала, дату окончания, число renewals или правила продления.',
          'CCT: многие отрасли имеют коллективные договоры с лучшими ставками и надбавками.',
          'Пробный период и notice periods.',
          'Регистрацию в Segurança Social: работодатель должен декларировать трудовой договор.',
          'Право на férias, faltas justificadas, parental rights, sick leave через SNS/Segurança Social.',
          'Наличие cláusula de exclusividade или non-compete — для part-time и RTI это особенно важно.'
        ] },
        { kind: 'paragraph', text: 'Для иммиграционных целей храните contrato assinado, recibos de vencimento, declaração da entidade patronal, extracto de remunerações da Segurança Social и IRS. AIMA и банки обычно смотрят не только на договор, но и на фактические выплаты.' }
      ]
    },
    {
      id: 'if-problem',
      title: 'Если работодатель нарушает правила',
      content: [
        { kind: 'paragraph', text: 'Начните с письменного запроса HR: попросите исправить contrato, выдать recibos de vencimento, зарегистрировать часы или объяснить основание termo certo/RTI. Пишите e-mail, а не только мессенджер.' },
        { kind: 'checklist', items: [
          'Сохраните подписанный договор и все versões.',
          'Скачайте recibos de vencimento и банковские выписки.',
          'Ведите таблицу часов, смен, overtime и вызовов на работу.',
          'Проверьте Segurança Social Direta: есть ли remunerações.',
          'Попросите у работодателя declaração de situação profissional.',
          'Если зарплату не платят или contract fake — подайте denúncia в ACT.',
          'При увольнении не подписывайте quitclaim/«acordo» без расчёта компенсаций.',
          'Если спор влияет на ВНЖ, параллельно консультируйтесь с advogado/solicitador: потеря работы и отсутствие взносов могут ударить по продлению.'
        ] },
        { kind: 'warning', text: 'ACT контролирует трудовое законодательство, но не является вашим адвокатом в суде. Для взыскания денег, признания бессрочного договора или оспаривания увольнения может понадобиться Tribunal do Trabalho.' }
      ]
    }
  ],
  costs: [
    { label: 'Жалоба в ACT', amountEUR: 0, note: 'Подача denúncia работником бесплатна.' },
    { label: 'Минимальная зарплата full-time в 2026', amountEUR: 920, note: 'SMN; для part-time применяется пропорционально часам, если CCT не даёт больше.' },
    { label: 'Компенсация за простой при RTI', amountEURMin: 0, amountEURMax: 0, note: 'Не фиксированная сумма: обычно 20% от базовой зарплаты, если CCT/договор не устанавливает другой valor.' }
  ],
  sources: [
    {
      title: 'ACT — трудовые договоры, tempo parcial и direitos do trabalhador',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, versão consolidada',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 13/2023 — Agenda do Trabalho Digno, изменения Código do Trabalho',
      url: 'https://dre.pt/dre/detalhe/lei/13-2023-211340863',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — contribuições dos trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 139/2025 — RMMG (SMN) 920 € на материке с 01.01.2026',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/139-2025-992879809',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
