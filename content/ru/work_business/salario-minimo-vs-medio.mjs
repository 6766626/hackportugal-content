export default {
  editorialVoice: 'hackportugal',
  id: 'salario-minimo-vs-medio',
  categoryId: 'work_business',
  title: 'Salário Mínimo Nacional 2026: 920 € и сравнение с salário médio',
  tldr: 'В 2026 году Salário Mínimo Nacional в Португалии — 920 € брутто в месяц, обычно 14 выплат в год: 12 зарплат + subsídio de férias + subsídio de Natal. На руки при полной ставке и без IRS удержания это около 818,80 € за выплату после 11% Segurança Social. Для работодателя такая зарплата стоит 1 138,50 € за выплату из-за 23,75% взноса. Salário médio около 1 300 € брутто, а Lisbon software dev — примерно 2 500–4 500 € брутто.',
  tags: ['smn', 'зарплата', 'ss', 'работа'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-smn',
      title: 'Что такое SMN в 2026',
      content: [
        { kind: 'paragraph', text: 'Salário Mínimo Nacional, официально retribuição mínima mensal garantida, — минимальная месячная брутто-зарплата за full-time работу. В 2026 году сумма — 920 €.' },
        { kind: 'paragraph', text: 'В Португалии зарплату обычно считают не как 12, а как 14 выплат в год: 12 обычных месяцев, subsídio de férias и subsídio de Natal. Поэтому годовой минимум при полной ставке — 920 € × 14 = 12 880 € брутто.' },
        { kind: 'checklist', items: [
          'SMN 2026: 920 € брутто в месяц',
          'Годовой SMN: 12 880 € брутто при 14 выплатах',
          'Почасовой минимум напрямую из закона не выводится одинаково для всех графиков: смотрите contrato de trabalho и instrumento de regulamentação coletiva, если есть',
          'Part-time считается пропорционально: 50% ставки ≈ 460 € брутто',
          'Subsídio de alimentação не заменяет зарплату и не входит в SMN',
          'Комиссии, бонусы и prémios не должны маскировать оплату ниже минималки',
          'Стажировки, recibos verdes и prestação de serviços — отдельные режимы, SMN как трудовая гарантия к ним не применяется автоматически'
        ] }
      ]
    },
    {
      id: 'net-reality',
      title: 'Сколько остаётся на руки',
      content: [
        { kind: 'paragraph', text: 'Работник платит 11% в Segurança Social. С 920 € это 101,20 €. Если нет удержания IRS, чистая выплата получается около 818,80 €.' },
        { kind: 'paragraph', text: 'Это не значит, что годовой IRS всегда ноль для любой семьи: итог зависит от статуса, dependentes, вычетов, региона и других доходов. Но для одной минимальной зарплаты в стандартной ситуации удержание IRS обычно отсутствует или минимально.' },
        { kind: 'checklist', items: [
          'Брутто: 920 €',
          'Взнос работника в Segurança Social 11%: 101,20 €',
          'Ориентир нетто за одну выплату: 818,80 €',
          'Ориентир нетто за 14 выплат: 11 463,20 € до возможной финальной корректировки IRS',
          'Работодатель отдельно платит 23,75% Segurança Social: 218,50 €',
          'Полная стоимость для работодателя: 1 138,50 € за выплату',
          'Годовая стоимость для работодателя: 15 939 €',
          'Если вам предлагают 920 € “líquido”, требуйте письменный расчёт брутто, SS и IRS'
        ] },
        { kind: 'warning', text: 'В Португалии “salário líquido” в разговоре часто считают приблизительно. Юридически важны брутто, categoria profissional, horário, 14 выплат, SS и IRS withholding table. Проверяйте payslip: recibo de vencimento.' }
      ]
    },
    {
      id: 'vs-average',
      title: 'SMN против salário médio',
      content: [
        { kind: 'paragraph', text: 'Ориентир salário médio, который часто используют в бытовых сравнениях, — около 1 300 € брутто в месяц за regular remuneration. Это не “средний комфортный доход”, а статистический ориентир: в Лиссабоне и Порту аренда быстро съедает разницу.' },
        { kind: 'checklist', items: [
          'SMN 2026: 920 € брутто / около 818,80 € нетто за выплату',
          'Salário médio: около 1 300 € брутто / грубо 1 020–1 100 € нетто за выплату, зависит от IRS',
          'Разница брутто между 920 € и 1 300 €: 380 €',
          'После SS и IRS разница на руки часто меньше, чем кажется по брутто',
          '1 300 € × 14 = 18 200 € брутто в год',
          'При 1 300 € работник платит SS 143 € за выплату',
          'Работодательская стоимость 1 300 €: 1 608,75 € за выплату',
          'Для иммиграционных, банковских и арендных проверок обычно смотрят стабильный брутто-доход и contrato, а не только “net”'
        ] },
        { kind: 'paragraph', text: 'Если сравниваете офферы, приводите всё к одной базе: 12 или 14 выплат, включён ли subsídio de alimentação, есть ли prémios, какие часы, remote/hybrid, срочный или бессрочный contrato.' }
      ]
    },
    {
      id: 'lisbon-tech',
      title: 'Ориентиры для Lisbon software dev',
      content: [
        { kind: 'paragraph', text: 'Для Lisbon software dev в 2026 году типичный рыночный коридор сильно выше SMN: примерно 2 500–4 500 € брутто в месяц для middle/senior ролей в португальском контракте. Junior, support и QA manual могут быть ниже; international remote и contractor — выше, но с другими налогами и рисками.' },
        { kind: 'checklist', items: [
          '2 500 € брутто × 14 = 35 000 € в год',
          '4 500 € брутто × 14 = 63 000 € в год',
          'Employee SS: 11% с зарплаты',
          'Employer SS: 23,75% сверх зарплаты',
          'Нетто при 2 500 € брутто часто около 1 650–1 850 € за выплату, зависит от IRS и семейного статуса',
          'Нетто при 4 500 € брутто часто около 2 650–3 000 € за выплату, зависит от IRS и вычетов',
          'Stock options, prémios, ajudas de custo и meal allowance считайте отдельно: налоговый режим разный',
          'Если компания предлагает recibos verdes вместо трудового договора, сравнивайте не брутто, а полный annual net после IRS, IVA, SS и отсутствия paid holidays'
        ] },
        { kind: 'warning', text: 'Оффер 2 500 € как employee и invoice 2 500 € как recibos verdes — не одно и то же. У самозанятого нет 13-й/14-й зарплаты, оплачиваемого отпуска, защиты увольнения и работодательского SS; это должно компенсироваться более высокой ставкой.' }
      ]
    },
    {
      id: 'how-to-check-contract',
      title: 'Как проверить свой contrato и payslip',
      content: [
        { kind: 'paragraph', text: 'Минимальная проверка: в contrato de trabalho должна быть указана брутто-зарплата не ниже SMN для полной ставки, horário de trabalho, категория, место работы, вид договора и правила выплат.' },
        { kind: 'checklist', items: [
          'Проверьте, что salário base при full-time не ниже 920 €',
          'Уточните, платят ли 14 выплат или 12 с duodécimos',
          'Проверьте, указан ли subsídio de alimentação отдельно от base salary',
          'Сверьте recibo de vencimento: base, SS 11%, IRS, meal allowance, overtime',
          'Сверхурочные должны отражаться отдельно, а не “входить” молча в минималку',
          'Если вы работаете ночью, в праздники или по сменам, проверьте доплаты',
          'При коллективном договоре sector/categoria может требовать зарплату выше SMN',
          'При сомнениях пишите в ACT или используйте Livro de Reclamações eletrónico'
        ] },
        { kind: 'paragraph', text: 'ACT — главный орган по трудовым нарушениям: невыплата зарплаты, оплата ниже SMN, отсутствие recibo de vencimento, фиктивные recibos verdes, незаконные часы и давление подписать “по соглашению”.' }
      ]
    }
  ],
  costs: [
    { label: 'SMN 2026, брутто за выплату', amountEUR: 920, note: 'Обычно 14 выплат в год при full-time contrato de trabalho' },
    { label: 'SMN 2026, ориентир нетто за выплату', amountEUR: 818.8, note: 'После 11% Segurança Social; IRS зависит от ситуации, но на минималке часто без удержания' },
    { label: 'Стоимость SMN для работодателя за выплату', amountEUR: 1138.5, note: '920 € + 23,75% Segurança Social' },
    { label: 'Ориентир salário médio', amountEUR: 1300, note: 'Брутто за месяц; нетто зависит от IRS withholding table и семейного статуса' },
    { label: 'Lisbon software dev, ориентир брутто', amountEURMin: 2500, amountEURMax: 4500, note: 'Для middle/senior employee-контрактов; market range, не legal minimum' }
  ],
  sources: [
    { title: 'DRE — Decreto-Lei об актуализации retribuição mínima mensal garantida', url: 'https://dre.pt/dre/detalhe/decreto-lei', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ACT — informação sobre retribuição mínima mensal garantida e direitos laborais', url: 'https://www.act.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social — contribuições para trabalhadores por conta de outrem', url: 'https://www.seg-social.pt/trabalhadores-por-conta-de-outrem', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INE — estatísticas de remunerações em Portugal', url: 'https://www.ine.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
