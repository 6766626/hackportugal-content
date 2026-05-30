export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-refeicao-empregado',
  categoryId: 'work_business',
  title: 'Subsídio de Refeição: питание от работодателя без IRS и Segurança Social',
  tldr: 'Subsídio de Refeição — дневная компенсация на питание. В частном секторе она не обязательна по общему Código do Trabalho, но часто прописана в contrato de trabalho или CCT; для госслужащих Administração Pública действует 6,15 € в рабочий день. В 2026 cash освобождён от IRS/Segurança Social до 6,15 €, а cartão/vale refeição — до 10,46 €. Всё сверх лимита считается зарплатой и облагается налогом и взносами.',
  tags: ['работа', 'irs', 'refeição', 'зарплата'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Subsídio de Refeição',
      content: [
        { kind: 'paragraph', text: 'Subsídio de Refeição — не «бонус», а отдельная строка в recibo de vencimento: работодатель платит фиксированную сумму за каждый фактически отработанный день, чтобы покрыть питание.' },
        { kind: 'paragraph', text: 'В Administração Pública базовая сумма на апрель 2026 — 6,15 € в день. Эта цифра часто используется как ориентир и в частных компаниях, но частный работодатель обязан платить subsídio de refeição только если это написано в вашем contrato de trabalho, regulamento interno или применимом CCT — contrato coletivo de trabalho.' },
        { kind: 'checklist', items: [
          'Платится обычно за рабочие дни, а не за выходные.',
          'Обычно не платится за отпуск, больничный и отсутствие без сохранения зарплаты.',
          'Может выплачиваться деньгами вместе с зарплатой.',
          'Может выплачиваться на cartão refeição или в виде vale refeição.',
          'Частые карты: Edenred, Pluxee ex-Sodexo, Coverflex, Euroticket.',
          'Сумма должна быть видна в payslip/recibo de vencimento отдельной строкой.',
          'Если вы работаете part-time, сумма может быть пропорциональна часам, если так установлено договором или CCT.'
        ] }
      ]
    },
    {
      id: 'tax-free-limits-2026',
      title: 'Лимиты без налогов в 2026',
      content: [
        { kind: 'paragraph', text: 'Для IRS и Segurança Social важен не сам факт выплаты, а способ выплаты и дневной лимит. На апрель 2026 применяются такие практические лимиты: cash — до 6,15 € в день; cartão/vale refeição — до 10,46 € в день.' },
        { kind: 'checklist', items: [
          'Cash 6,15 € в день: 0 € IRS и 0 € Segurança Social.',
          'Cash 7 € в день: 6,15 € освобождены, 0,85 € считается зарплатой.',
          'Cartão refeição 10,46 € в день: 0 € IRS и 0 € Segurança Social.',
          'Cartão refeição 11 € в день: 10,46 € освобождены, 0,54 € считается зарплатой.',
          'Сумма сверх лимита входит в base de incidência contributiva.',
          'На превышение удерживается IRS по вашей ставке withholding tax.',
          'На превышение обычно начисляется Segurança Social: 11% работник и 23,75% работодатель.',
          'Лимит применяется за день, а не как месячный «банк» без привязки к дням.'
        ] },
        { kind: 'warning', text: 'Старый лимит cash 5,20 € уже не является актуальным ориентиром для 2026. Для текущей практики используйте 6,15 € cash и 10,46 € cartão/vale.' }
      ]
    },
    {
      id: 'cash-vs-card',
      title: 'Деньгами или картой: что выгоднее',
      content: [
        { kind: 'paragraph', text: 'Если работодатель готов платить больше 6,15 € в день, карта почти всегда выгоднее: безналоговый потолок выше — 10,46 € вместо 6,15 €. При 22 рабочих днях это до 230,12 € в месяц без IRS и Segurança Social через cartão refeição против 135,30 € cash.' },
        { kind: 'checklist', items: [
          'Cash удобнее: деньги приходят на обычный банковский счёт.',
          'Cash свыше 6,15 € быстро теряет выгоду из-за IRS и Segurança Social.',
          'Cartão refeição выгоднее при суммах 6,16–10,46 € в день.',
          'Cartão обычно принимают в супермаркетах, ресторанах, cafés, take-away и food delivery, если MCC продавца подходит.',
          'Cartão нельзя нормально использовать для аренды, топлива, одежды или снятия наличных.',
          'Баланс карты обычно переносится на следующий месяц, но проверяйте условия провайдера.',
          'При увольнении неиспользованный баланс карты обычно остаётся у работника, но доступ зависит от условий эмитента.'
        ] },
        { kind: 'warning', text: 'Не путайте cartão refeição с обычной банковской картой. Налоговое освобождение зависит от того, что это именно meal card/voucher с ограниченным использованием на питание.' }
      ]
    },
    {
      id: 'private-sector-rights',
      title: 'Если работодатель не платит',
      content: [
        { kind: 'paragraph', text: 'В частном секторе в Португалии нет универсального правила «каждый работник обязан получать subsídio de refeição». Поэтому первый шаг — проверить не слухи, а документы.' },
        { kind: 'checklist', items: [
          'Откройте contrato de trabalho: есть ли строка subsídio de refeição, valor diário, cash/cartão.',
          'Проверьте CCT вашей отрасли: hotelaria, construção, limpeza, call center, IT outsourcing и другие сектора могут иметь обязательные условия.',
          'Посмотрите recibo de vencimento: выплата должна быть отдельной строкой.',
          'Сравните число оплаченных дней с реальными рабочими днями месяца.',
          'Проверьте, не включил ли работодатель питание внутрь base salary — это важно для отпускных, natal и компенсаций.',
          'Если условие уже есть в договоре или CCT, работодатель не должен просто убрать выплату в одностороннем порядке.',
          'Если условия нарушаются, сначала запросите письменное объяснение у HR/payroll.',
          'При системном нарушении можно обращаться в ACT — Autoridade para as Condições do Trabalho.'
        ] },
        { kind: 'warning', text: 'Фраза «это benefit, поэтому можем отменить когда захотим» не всегда верна. Если выплата закреплена в contrato, CCT или стала устойчивой частью условий труда, нужна юридическая проверка перед отменой.' }
      ]
    },
    {
      id: 'how-to-read-payslip',
      title: 'Как проверить recibo de vencimento',
      content: [
        { kind: 'paragraph', text: 'В payslip ищите отдельную строку вроде Subsídio de Refeição, Subs. Alimentação, Ticket Refeição или Cartão Refeição. Рядом обычно указаны количество дней и дневная ставка.' },
        { kind: 'checklist', items: [
          'Количество дней: обычно 20–23 в зависимости от месяца и вашего графика.',
          'Дневная ставка: например 6,15 €, 7,63 €, 9,60 € или 10,46 €.',
          'Способ выплаты: вместе с salário líquido или отдельной загрузкой на cartão.',
          'Isento: часть до лимита не должна попадать в IRS/Segurança Social.',
          'Tributável: только превышение над 6,15 € cash или 10,46 € cartão должно облагаться.',
          'Если вы были в отпуске весь месяц, subsídio de refeição обычно будет 0 €.',
          'Если работали remote из дома, право зависит от договора/CCT и внутренней политики, но многие работодатели продолжают платить.',
          'Сохраняйте payslips: они пригодятся для споров с HR, ACT и при проверке IRS.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Безналоговый cash-лимит', amountEUR: 6.15, note: 'В день, если выплата идёт деньгами вместе с зарплатой.' },
    { label: 'Безналоговый лимит cartão/vale refeição', amountEUR: 10.46, note: 'В день, если используется meal card или voucher с ограниченным назначением.' },
    { label: 'Пример за 22 рабочих дня cash', amountEUR: 135.30, note: '22 × 6,15 € без IRS и Segurança Social.' },
    { label: 'Пример за 22 рабочих дня cartão', amountEUR: 230.12, note: '22 × 10,46 € без IRS и Segurança Social.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Código do IRS, art. 2: tributação do subsídio de refeição',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs2.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — enquadramento contributivo dos trabalhadores por conta de outrem',
      url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Portaria n.º 51-B/2026/1: atualização do subsídio de refeição na Administração Pública para 6,15 €',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/51-b-2026-1031110274',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-30'
    },
    {
      title: 'DRE — Código do Trabalho, Lei n.º 7/2009',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}
