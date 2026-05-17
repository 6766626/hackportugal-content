export default {
  editorialVoice: 'hackportugal',
  id: 'subsidios-natal-ferias',
  categoryId: 'work_business',
  title: 'Subsídio de Férias и Subsídio de Natal — 13-я и 14-я зарплаты',
  tldr: 'В Португалии у работника по contrato de trabalho обычно 14 зарплат в год: 12 месячных, Subsídio de Férias и Subsídio de Natal. Natal платят до 15 декабря, Férias — до начала отпуска, если нет другого письменного соглашения. В год найма/увольнения суммы считаются пропорционально отработанному времени. Оба субсидия облагаются IRS и Segurança Social, но для IRS удержание считается отдельно. У recibos verdes автоматической 13-й/14-й зарплаты нет.',
  tags: ['зарплата', 'trabalho', 'irs', 'ferias'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это: 13-я и 14-я зарплаты',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal — рождественский субсидий, фактически 13-я зарплата. Subsídio de Férias — отпускной субсидий, фактически 14-я зарплата. Для наёмных работников это не бонус “по доброй воле”, а обязанность работодателя по Código do Trabalho.' },
        { kind: 'paragraph', text: 'Если в контракте указано “salário anual 25 200 € em 14 meses”, это обычно означает 1 800 € брутто в месяц × 14. Если указано “em 12 meses”, проверьте, включены ли subsídios в месячную сумму через duodécimos или речь о нарушении/неполной формулировке.' },
        { kind: 'checklist', items: [
          'Subsídio de Natal: минимум равен 1 месячной базовой оплате за полный год работы.',
          'Subsídio de Férias: минимум равен оплате периода отпуска и отпускному субсидию по правилам art. 264 Código do Trabalho.',
          'Право возникает у работников с contrato de trabalho: sem termo, termo certo, termo incerto, full-time и part-time.',
          'Part-time получает пропорционально своей зарплате и графику.',
          'Временный контракт не отменяет право на оба subsídios.',
          'У стажёров с реальным трудовым договором право есть; у учебных/профессиональных программ смотрите конкретный режим.',
          'У recibos verdes, фрилансеров и подрядчиков автоматического права нет — его можно только заложить в цену услуг.'
        ] }
      ]
    },
    {
      id: 'when-paid',
      title: 'Когда должны платить 📅',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Natal по art. 263 Código do Trabalho должен быть выплачен до 15 декабря каждого года. Это крайний срок, не “примерная дата”. Работодатель может заплатить раньше, например с ноябрьской зарплатой.' },
        { kind: 'paragraph', text: 'Subsídio de Férias по art. 264 Código do Trabalho выплачивается до начала периода отпуска. Если отпуск разбит на части, на практике выплата может быть связана с основным периодом отпуска или с правилами в contrato / instrumento de regulamentação coletiva de trabalho.' },
        { kind: 'checklist', items: [
          'Уходите в отпуск 1 августа — отпускной субсидий обычно должен прийти до 1 августа.',
          'Если отпуск согласован на несколько периодов, проверьте внутренние правила payroll.',
          'Если вы не берёте отпуск из-за окончания контракта, неиспользованные férias и соответствующие суммы выплачиваются при расчёте.',
          'В год найма Natal и Férias не всегда равны полной месячной зарплате — применяется пропорция.',
          'В год увольнения выплачиваются пропорциональные части за текущий год и компенсация за неиспользованный отпуск.',
          'В recibo de vencimento суммы должны быть выделены отдельными строками, а не спрятаны в “prémio”.'
        ] },
        { kind: 'warning', text: 'Если работодатель говорит “у нас в Португалии 12 зарплат, 13-й и 14-й нет”, это красный флаг. Исключение — когда subsídios законно платятся частями в составе 12 месячных выплат, то есть в duodécimos, и это видно в payslip.' }
      ]
    },
    {
      id: 'prorata',
      title: 'Как считать пропорционально',
      content: [
        { kind: 'paragraph', text: 'Для полного календарного года каждый субсидий обычно равен одной месячной зарплате брутто. Если вы работали не весь год, сумма считается пропорционально отработанному времени. Практическая формула для Natal: месячная базовая зарплата × месяцы работы в году / 12.' },
        { kind: 'substeps', items: [
          { id: 'example-hire', title: 'Пример: найм 1 апреля', content: [
            { kind: 'paragraph', text: 'Зарплата 2 000 € брутто. В 2026 году вы работаете с апреля по декабрь, то есть 9 месяцев. Subsídio de Natal ≈ 2 000 € × 9 / 12 = 1 500 € брутто. Отпускные права в первый год тоже формируются пропорционально: обычно 2 рабочих дня отпуска за каждый месяц контракта, с лимитом 20 дней в первый год.' }
          ] },
          { id: 'example-exit', title: 'Пример: увольнение 30 июня', content: [
            { kind: 'paragraph', text: 'Зарплата 2 000 € брутто. За текущий год Natal ≈ 2 000 € × 6 / 12 = 1 000 € брутто. Дополнительно работодатель должен закрыть отпускные права: неиспользованные férias, subsídio de férias за уже возникшие дни и пропорциональные суммы за текущий год.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Проверьте дату начала контракта, а не дату первого рабочего дня “по договорённости”.',
          'Смотрите salário base, регулярные надбавки и правила вашего acordo coletivo, если он применяется.',
          'Премии, бонусы и ajudas de custo не всегда входят в базу для subsídios.',
          'Больничный, parental leave и длительные приостановки могут влиять на расчёт — смотрите режим Segurança Social и payroll.',
          'При увольнении запросите detalhe do acerto de contas: отпуск, Natal, Férias, компенсации, удержания IRS/SS.',
          'Храните recibos de vencimento и comprovativo de pagamento минимум до завершения налоговой проверки IRS.'
        ] }
      ]
    },
    {
      id: 'duodecimos',
      title: 'Duodécimos: когда платят частями',
      content: [
        { kind: 'paragraph', text: 'Duodécimos — это выплата 13-й и/или 14-й зарплаты по 1/12 каждый месяц. Тогда месячный нетто выглядит выше, но в декабре и перед отпуском крупной отдельной выплаты может не быть или она будет меньше.' },
        { kind: 'paragraph', text: 'В частном секторе duodécimos должны быть основаны на договоре, коллективном регулировании или письменном соглашении/понятной payroll-практике. Работодатель не должен просто исчезнуть с полной выплатой, не показывая ежемесячные доли в recibo de vencimento.' },
        { kind: 'checklist', items: [
          'В payslip ищите строки вроде “Subsídio de Natal - duodécimos” и “Subsídio de Férias - duodécimos”.',
          '1/12 от 2 000 € = 166,67 € брутто в месяц за один субсидий.',
          'Если оба subsídios платятся полностью в duodécimos: 166,67 € + 166,67 € = 333,34 € брутто сверху каждый месяц при зарплате 2 000 €.',
          'Если платят 50% в duodécimos, оставшиеся 50% должны прийти в обычные сроки.',
          'Сравнивайте annual gross, а не только monthly net: 2 000 € × 14 = 28 000 € в год.',
          'При смене работы duodécimos усложняют финальный расчёт: проверьте, что вам не переплатили и не недоплатили пропорции.'
        ] },
        { kind: 'warning', text: 'Не путайте “12 payments” в оффере с отсутствием subsídios. Для работника в Португалии важно annual gross и механизм выплаты: 14 месяцев, 12 месяцев с duodécimos или смешанная схема.' }
      ]
    },
    {
      id: 'tax-social-security',
      title: 'Налоги: IRS и Segurança Social',
      content: [
        { kind: 'paragraph', text: 'Оба subsídios облагаются как трудовой доход Categoria A: IRS и взносами Segurança Social. Стандартный взнос работника в Segurança Social — 11% от брутто, у работодателя обычно 23,75%. Взносы удерживаются в payroll.' },
        { kind: 'paragraph', text: 'Для IRS удержание с Subsídio de Natal и Subsídio de Férias считается отдельно от обычной месячной зарплаты. То есть работодатель не должен сложить “зарплата + субсидий” и применить к общей сумме завышенную месячную ставку удержания. Итоговый налог всё равно пересчитывается в годовой декларации IRS.' },
        { kind: 'checklist', items: [
          'В месяце выплаты субсидия нетто будет меньше брутто из-за IRS и 11% Segurança Social.',
          'Если у вас duodécimos, налог и Segurança Social удерживаются ежемесячно с этих долей.',
          'В Modelo 3 IRS за год subsídios входят в общий трудовой доход.',
          'Ставка удержания зависит от семейного положения, dependentes, Continente/Açores/Madeira и таблиц retenção na fonte на конкретный год.',
          'Минимальная зарплата SMN в 2026 году — 920 €; даже при SMN право на subsídios сохраняется.',
          'Если работодатель платит “por fora” без payslip, это риск для ВНЖ, IRS, Segurança Social и будущих пособий.'
        ] }
      ]
    },
    {
      id: 'problems',
      title: 'Если не платят или считают неправильно',
      content: [
        { kind: 'paragraph', text: 'Сначала запросите у HR письменный расчёт: salário base, период работы, férias vencidas, férias proporcionais, Natal proporcional, удержания IRS и Segurança Social. Часто ошибка связана с duodécimos или датой начала контракта.' },
        { kind: 'checklist', items: [
          'Соберите contrato de trabalho и все adendas.',
          'Скачайте recibos de vencimento за весь год.',
          'Сохраните банковские поступления зарплаты.',
          'Проверьте, есть ли acordo coletivo в вашей отрасли.',
          'Письменно спросите HR о правовом основании расчёта.',
          'Если ответа нет — подайте запрос/жалобу в ACT.',
          'При увольнении не подписывайте declaração de quitação, если расчёт непонятен или суммы спорные.',
          'Для крупных сумм обратитесь к advogado или sindicato до подписания соглашения.'
        ] },
        { kind: 'warning', text: 'ACT полезна для жалоб на нарушение трудового законодательства, но она не заменяет индивидуального юриста в споре о сложном увольнении, non-compete, компенсации или международном payroll.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Código do Trabalho — Lei n.º 7/2009, arts. 263 и 264',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT — Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS retenção na fonte',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
