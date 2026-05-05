export default {
  editorialVoice: 'hackportugal',
  id: 'imi-property-tax',
  categoryId: 'housing_buy',
  title: 'IMI — муниципальный налог на недвижимость',
  tldr: 'IMI платит каждый собственник недвижимости в Португалии: налог считается от Valor Patrimonial Tributário (VPT), а не от цены покупки. В 2026 ставки: 0,3–0,45% для городской недвижимости, 0,8% для сельской, 7,5% для владельцев из офшорных юрисдикций. Счёт приходит в Finanças весной: платёж в мае, либо май/ноябрь, либо май/август/ноябрь. Для primeira habitação possível льгота до 3 лет при VPT ≤ 125 000 € и доходе ≤ 153 300 €; “IMI jovem” зависит от município.',
  tags: ['imi', 'недвижимость', 'finanças', 'vpt'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-imi',
      title: 'Что такое IMI и кто платит',
      content: [
        { kind: 'paragraph', text: 'IMI — Imposto Municipal sobre Imóveis, ежегодный муниципальный налог на владение недвижимостью. Его платит тот, кто был собственником, узуфруктуарием или superficiário объекта на 31 декабря предыдущего года.' },
        { kind: 'paragraph', text: 'Если вы купили квартиру в июле 2025, IMI за 2025 год обычно придёт вам в 2026, потому что на 31.12.2025 собственником были вы. Если продали объект до 31 декабря, следующий IMI обычно уже платит покупатель.' },
        { kind: 'checklist', items: ['Платят владельцы квартир, домов, земли, гаражей, кладовых и долей в недвижимости', 'Налог администрирует Autoridade Tributária e Aduaneira через Portal das Finanças', 'Деньги идут в бюджет município, поэтому ставка зависит от Câmara Municipal', 'IMI не заменяет condomínio: это отдельный налог, не коммунальные платежи', 'IMI не равен IMT: IMT платится при покупке, IMI — каждый год', 'Нерезиденты тоже платят IMI, если владеют недвижимостью в Португалии'] }
      ]
    },
    {
      id: 'calculation',
      title: 'Как считается сумма: VPT × ставка',
      content: [
        { kind: 'paragraph', text: 'Формула простая: IMI = Valor Patrimonial Tributário × ставка município. VPT — налоговая стоимость объекта в Caderneta Predial, рассчитанная Finanças. Она часто ниже рыночной цены, но не всегда.' },
        { kind: 'checklist', items: ['Городская недвижимость — prédios urbanos: ставка 0,3–0,45%', 'Сельская недвижимость — prédios rústicos: ставка 0,8%', 'Объекты у владельцев из юрисдикций с благоприятным налоговым режимом: 7,5%', 'Муниципалитет ежегодно утверждает ставку и сообщает её Finanças', 'Один и тот же объект в Lisboa, Cascais, Porto или Albufeira может иметь разный IMI из-за ставки município', 'Сумма к оплате появляется в Portal das Finanças в разделе Pagamentos или IMI', 'Пример: VPT 200 000 € × 0,35% = 700 € IMI за год'] },
        { kind: 'warning', text: 'IMI считается от VPT, а не от цены в escritura. Если вы купили квартиру за 450 000 €, но VPT 180 000 €, налог считается с 180 000 €. Если VPT завышен из-за старых коэффициентов, можно запросить reavaliação, но иногда пересчёт увеличивает налог — сначала проверьте симулятор.' }
      ]
    },
    {
      id: 'payment-calendar',
      title: 'Когда и как платить в 2026',
      content: [
        { kind: 'paragraph', text: 'Finanças выпускает nota de cobrança весной за предыдущий налоговый год. Уведомление обычно видно в Portal das Finanças; бумажное письмо может не прийти вовремя, особенно если адрес устарел.' },
        { kind: 'checklist', items: ['До 100 € включительно — один платёж в мае', 'Более 100 € и до 500 € включительно — два платежа: май и ноябрь', 'Более 500 € — три платежа: май, август и ноябрь', 'Можно заплатить всю сумму сразу в мае, даже если Finanças разбила её на части', 'Оплата доступна через Multibanco, homebanking, MB WAY, débito direto или balcão dos CTT', 'Для оплаты используйте referência de pagamento из nota de cobrança', 'Проверьте e-Balcão и Portal das Finanças, если nota de cobrança не появилась к маю'] },
        { kind: 'warning', text: 'Просрочка даёт juros de mora и может перейти в cobrança coerciva. Для экспатов частая причина — старый налоговый адрес или отсутствие доступа к Portal das Finanças. Обновите morada fiscal и включите уведомления.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'Льготы: primeira habitação, low income, dependents, IMI jovem',
      content: [
        { kind: 'paragraph', text: 'Главная национальная льгота — временное освобождение от IMI для habitação própria e permanente. В 2026 базовые условия по Estatuto dos Benefícios Fiscais: объект используется как постоянное собственное жильё, VPT объекта не выше 125 000 €, совокупный доход household для IRS не выше 153 300 €. Обычно льгота действует до 3 лет.' },
        { kind: 'checklist', items: ['Адрес в Finanças должен быть изменён на адрес купленного жилья', 'Объект должен быть afetado a habitação própria e permanente', 'Проверьте Caderneta Predial: тип объекта, VPT, владельцы, доли', 'Запрос льготы подаётся через Portal das Finanças или e-Balcão, если автоматом не применилось', 'Низкодоходные households могут иметь отдельное постоянное освобождение при выполнении лимитов по доходу и VPT', 'IMI familiar: município может дать вычет за иждивенцев — обычно 30 € за 1, 70 € за 2, 140 € за 3 и более', '“IMI jovem” не является единой национальной льготой: это муниципальная мера, условия по возрасту, доходу, сроку и проценту скидки задаёт Câmara Municipal', 'Покупка primeira habitação молодыми до 35 лет имеет отдельные льготы по IMT и Imposto do Selo; не путайте их с IMI'] },
        { kind: 'warning', text: 'Не рассчитывайте на льготу только потому, что это первая квартира. Для IMI важны VPT, доход, статус habitação própria e permanente и решение município. Перед покупкой проверьте ставку и льготы конкретной Câmara Municipal.' }
      ]
    },
    {
      id: 'practical-checks',
      title: 'Что проверить после покупки',
      content: [
        { kind: 'checklist', items: ['Получите Caderneta Predial Urbana в Portal das Finanças', 'Проверьте VPT, artigo matricial, fração, площадь и назначение объекта', 'Смените morada fiscal на новый адрес, если это постоянное жильё', 'Проверьте, подана ли comunicação do contrato/escritura нотариусом или solicitador в Finanças', 'Посмотрите ставку IMI вашего município на год оплаты', 'Проверьте право на isenção de IMI и IMI familiar', 'Добавьте débito direto, если не хотите пропустить платёж', 'Если объект сдаётся, учитывайте IMI в расчёте доходности вместе с IRS, condomínio, страховкой и ремонтом'] },
        { kind: 'paragraph', text: 'Для инвесторов важно считать не только IMI. Если суммарная VPT городской недвижимости у физлица превышает 600 000 €, может возникнуть AIMI — Adicional ao IMI. Для супругов/união de facto при совместной декларации порог обычно 1 200 000 €. AIMI — отдельный налог, не часть обычного IMI.' }
      ]
    }
  ],
  costs: [
    { label: 'IMI для городской недвижимости', amountEURMin: 0, amountEURMax: 0, note: 'Ставка 0,3–0,45% от VPT в год; сумма зависит от município и VPT.' },
    { label: 'IMI для сельской недвижимости', amountEURMin: 0, amountEURMax: 0, note: 'Ставка 0,8% от VPT в год.' },
    { label: 'IMI familiar', amountEURMin: 30, amountEURMax: 140, note: 'Возможный муниципальный вычет: 30 € за 1 иждивенца, 70 € за 2, 140 € за 3 и более; применяется только если município утвердил меру.' },
    { label: 'Временная isenção для habitação própria e permanente', amountEUR: 0, note: 'До 3 лет при выполнении условий: VPT ≤ 125 000 € и доход household ≤ 153 300 €.' }
  ],
  sources: [
    { title: 'Finanças — Código do IMI (CIMI), índice', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cimi/Pages/cimi1.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Código do IMI — Decreto-Lei 287/2003, консолидированная версия', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2003-148011287', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças: IMI и pagamento de impostos', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: покупка жилья и налоги на недвижимость', url: 'https://eportugal.gov.pt/cidadaos/comprar-arrendar-ou-vender-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
