export default {
  editorialVoice: 'hackportugal',
  id: 'emprestimo-jovem-banco-d',
  categoryId: 'banking',
  title: 'Empréstimo Jovem: кредиты с госгарантией для молодых до 35 лет',
  tldr: 'В 2026 году “Empréstimo Jovem” чаще всего означает Linha Jovem Habitação: ипотека на первую постоянную квартиру/дом для людей 18–35 лет с госгарантией до 15% цены, чтобы банк мог финансировать до 100% покупки.\n\nЛимит недвижимости — 450 000 €, нужна налоговая резиденция в Португалии и отсутствие другого жилья. Ставка не субсидируется: банк считает обычную ипотеку, в 2026 ориентир около 3,3–4,0% TAN/TAEG. Для бизнеса есть отдельные линии IFD/BPF/IAPMEI, но это не “деньги всем до 35”.',
  tags: ['ипотека', 'jovem', 'garantia', 'banco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что именно дают: гарантия, а не подарок',
      content: [
        { kind: 'paragraph', text: 'Linha Jovem Habitação — государственная гарантия по части ипотечного кредита для покупки primeira habitação própria e permanente. Цель — закрыть разрыв между обычным банковским лимитом 80–90% LTV и покупкой без большого первоначального взноса.' },
        { kind: 'paragraph', text: 'Государство может гарантировать до 15% стоимости сделки. Это позволяет банку выдать кредит вплоть до 100% цены покупки, но решение всё равно принимает банк: он проверяет доход, contrato de trabalho, IRS, долговую нагрузку, оценку недвижимости и риск клиента.' },
        { kind: 'warning', text: 'Это не субсидированная ставка и не грант. Если вы перестанете платить, банк взыскивает долг с вас; госгарантия защищает банк, а не освобождает покупателя от кредита.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто подходит в 2026 году',
      content: [
        { kind: 'checklist', items: [
          'Возраст от 18 до 35 лет включительно на дату заключения кредитного договора',
          'Налоговая резиденция в Португалии: NIF с morada fiscal в PT и, как правило, IRS/подтверждённые доходы',
          'Покупка первой habitação própria e permanente — жилья для собственного постоянного проживания',
          'У покупателя нет другого жилого объекта в собственности',
          'Цена покупки не выше 450 000 €',
          'Доход не выше установленного лимита программы: ориентир — до 8-го escalão IRS',
          'Нет просроченных долгов перед Autoridade Tributária и Segurança Social',
          'Не использовалась аналогичная государственная гарантия раньше',
          'Кредитный договор заключён до 31 декабря 2026 года — крайний срок программы (возможно продление, но оно не гарантировано)',
          'Банк одобряет ипотеку по своим правилам stress test и taxa de esforço'
        ] },
        { kind: 'paragraph', text: 'Гражданство само по себе не является главным критерием. Для экспата важнее законное пребывание, налоговая резиденция, подтверждаемый доход и готовность банка кредитовать нерезидента/нового резидента.\n\nНа практике банки чаще требуют ВНЖ, contrato de trabalho sem termo или стабильные recibos verdes/зарубежный доход с документами.' }
      ]
    },
    {
      id: 'numbers',
      title: 'Лимиты, ставки и реальные деньги',
      content: [
        { kind: 'paragraph', text: 'Ключевой лимит программы — недвижимость до 450 000 €. Госгарантия покрывает до 15% цены, но не оплачивает IMT, Imposto do Selo, escritura, avaliação, seguros и банковские комиссии.' },
        { kind: 'paragraph', text: 'В 2026 году рыночные ипотечные предложения для молодых клиентов обычно находятся примерно в диапазоне 3,3–4,0% TAN/TAEG, в зависимости от Euribor/фиксированной ставки, spread, страхования жизни, domiciliação de ordenado и cross-selling. Конкретная ставка — только в FINE банка.' },
        { kind: 'checklist', items: [
          'Пример: квартира 300 000 €',
          'Обычная ипотека 90% потребовала бы около 30 000 € первоначального взноса',
          'С госгарантией банк теоретически может профинансировать до 300 000 €',
          'Но покупатель всё равно платит оценку, escritura, registos, страхование и банковские комиссии',
          'Если вам больше 35 или это не первое жильё — линия не применяется',
          'Если оценка банка ниже цены покупки, банк может уменьшить сумму кредита'
        ] },
        { kind: 'warning', text: 'Не подписывайте CPCV с sinal 10–20%, пока банк письменно не подтвердил pré-aprovação и возможность использования госгарантии. Потеря sinal — обычный риск при отказе банка.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как податься через банк',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-docs', title: '1. Соберите пакет документов', content: [
            { kind: 'checklist', items: [
              'Паспорт или Cartão de Cidadão / ВНЖ',
              'NIF и подтверждение morada fiscal в Португалии',
              'Declaração de IRS и nota de liquidação, если уже подавали IRS',
              '3–6 последних recibos de vencimento или recibos verdes',
              'Declaração da entidade patronal / contrato de trabalho',
              'Выписки банковских счетов за 3–6 месяцев',
              'Mapa de responsabilidades de crédito из Banco de Portugal',
              'Caderneta predial и certidão permanente объекта, если объект уже выбран'
            ] }
          ] },
          { id: 'ask-banks', title: '2. Сравните банки, подключённые к линии', content: [
            { kind: 'paragraph', text: 'Проверяйте не только CGD и Millennium bcp: список банков по госгарантии может обновляться. Просите FINE для сценариев с фиксированной, переменной и смешанной ставкой.' }
          ] },
          { id: 'preapproval', title: '3. Получите pré-aprovação до CPCV', content: [
            { kind: 'paragraph', text: 'Pré-aprovação не равна окончательному кредиту, но снижает риск. Уточните письменно: банк применяет Linha Jovem Habitação, какой LTV допускает, какие seguros обязательны, какая taxa de esforço максимальна.' }
          ] },
          { id: 'valuation', title: '4. Дождитесь avaliação и финального ok', content: [
            { kind: 'paragraph', text: 'Банк заказывает оценку недвижимости. Если avaliação ниже цены, сумма кредита может быть рассчитана от оценки, а не от цены в CPCV.' }
          ] }
        ] }
      ]
    },
    {
      id: 'business-lines',
      title: 'А если нужен кредит на бизнес',
      content: [
        { kind: 'paragraph', text: 'Для предпринимателей “jovem” — это отдельная история. Через IFD/Banco Português de Fomento, IAPMEI, гарантийные общества и банки существуют linhas de crédito для PME, стартапов, inovação, empreendedorismo и mutual guarantee. Они не являются автоматическим потребкредитом для всех до 35 лет.' },
        { kind: 'checklist', items: [
          'Нужен бизнес-план и atividade aberta / empresa',
          'Банк проверяет viabilidade económica проекта',
          'Часто требуется capitais próprios или гарантия предпринимателя',
          'Гарантия взаимного общества снижает риск банка, но не отменяет долг',
          'Условия зависят от конкретной linha, CAE, региона и размера компании',
          'IAPMEI полезен для статуса PME, programas de financiamento и консультаций',
          'IFD/BPF публикуют открытые линии и финансовых посредников'
        ] },
        { kind: 'warning', text: 'Не путайте ипотечную Linha Jovem Habitação с кредитами для молодых предпринимателей. У них разные регламенты, банки, цели расходов и критерии отбора.' }
      ]
    },
    {
      id: 'expat-tips',
      title: 'Что важно экспату',
      content: [
        { kind: 'checklist', items: [
          'Сначала обновите morada fiscal в Finanças: без налоговой резиденции программа обычно не сработает',
          'Проверьте, что у вас нет долгов AT/Segurança Social',
          'Если доход из-за границы — подготовьте налоговые декларации, payslips, трудовой договор и переводы',
          'Сделайте Mapa de responsabilidades de crédito, даже если кредитов в PT нет',
          'Сравнивайте spread и TAEG, а не рекламную ставку',
          'Уточните стоимость seguro de vida: у молодых он дешевле, но при заболеваниях цена растёт',
          'Не закладывайте финансирование на 100% как гарантированный сценарий: банк может попросить 5–10% собственных средств',
          'Проверяйте IMT/IS льготы для молодых отдельно: это налоговая мера, не часть кредита'
        ] },
        { kind: 'paragraph', text: 'Хорошая стратегия — получить две pré-aprovações в разных банках и только потом делать оферту продавцу. Для иностранца с короткой историей в Португалии это часто решает исход сделки.' }
      ]
    }
  ],
  costs: [
    { label: 'Оценка недвижимости банком', amountEURMin: 200, amountEURMax: 350, note: 'Обычно оплачивает покупатель; сумма зависит от банка и объекта' },
    { label: 'Открытие/оформление ипотечного процесса', amountEURMin: 250, amountEURMax: 600, note: 'Комиссии различаются; смотрите FINE и preçário банка' },
    { label: 'Escritura, registo и нотариальные расходы', amountEURMin: 700, amountEURMax: 1200, note: 'Без учёта IMT и Imposto do Selo; зависит от канала Casa Pronta/нотариуса' },
    { label: 'Госгарантия Linha Jovem Habitação', amountEUR: 0, note: 'Для покупателя отдельной комиссии за гарантию обычно нет, но ставка кредита остаётся рыночной' }
  ],
  sources: [
    { title: 'IFD — instrumentos financeiros e linhas de financiamento', url: 'https://www.ifd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IAPMEI — financiamento, PME e empreendedorismo', url: 'https://www.iapmei.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 44/2024 — garantia pessoal do Estado para aquisição da primeira habitação própria e permanente', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/44-2024-870793703', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito à habitação e FINE', url: 'https://clientebancario.bportugal.pt/pt-pt/credito-habitacao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
