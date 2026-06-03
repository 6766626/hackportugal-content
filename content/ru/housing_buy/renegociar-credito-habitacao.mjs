export default {
  editorialVoice: 'hackportugal',
  id: 'renegociar-credito-habitacao',
  categoryId: 'housing_buy',
  title: 'Renegociação do Crédito Habitação: как пересмотреть ипотеку в Португалии',
  tldr: 'Renegociação do crédito habitação — переговоры с банком о снижении нагрузки по ипотеке: срок, spread, временная carência de capital, смена индекса или перенос в другой банк. DL 80-A/2022 дал спецзащиту для variable-rate ипотек на permanent own housing с остатком ≤ 300 000 €, но этот чрезвычайный режим действовал с 26.11.2022 до 31.12.2023. В 2026 можно и нужно renegociar по общим правилам Banco de Portugal: банк не может брать комиссию за renegociação, навязывать продукты или ухудшать условия без согласия.',
  tags: ['ипотека', 'habitação', 'euribor', 'banco'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое renegociação и чем она отличается от transfer',
      content: [
        { kind: 'paragraph', text: 'Renegociação do crédito habitação — изменение условий действующей ипотеки с вашим банком. Обычно обсуждают spread, срок, тип ставки, carência de capital, календарь платежей и иногда объединение долгов. Transferência do crédito — перенос ипотеки в другой банк, то есть фактически новое кредитное одобрение и новая escritura.' },
        { kind: 'checklist', items: [
          'Renegociação: тот же банк, меньше бюрократии, нет комиссии за саму renegociação.',
          'Transferência: другой банк, часто можно получить лучший spread, но будут оценка недвижимости, регистрация и новая документация.',
          'Refinanciamento в русскоязычном обиходе часто означает оба сценария; в Португалии точнее говорить renegociação или transferência.',
          'Для variable-rate кредита ключевые параметры: Euribor 3/6/12M + spread.',
          'Для fixed-rate кредита сравнивайте не только mensalidade, но и комиссию за досрочное погашение.',
          'Если у вас mixed rate, смотрите, находитесь ли вы сейчас в фиксированном или переменном периоде.'
        ] }
      ]
    },
    {
      id: 'dl-80a-2022',
      title: 'DL 80-A/2022: что это давало и почему важно в 2026',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 80-A/2022 был чрезвычайным режимом после резкого роста Euribor. Он обязывал банки мониторить риск ухудшения taxa de esforço и предлагать меры клиентам с ипотекой на habitação própria permanente, если кредит был с variable rate или mixed rate в переменном периоде и остаток долга не превышал 300 000 €.' },
        { kind: 'checklist', items: [
          'Вступил в силу 26.11.2022.',
          'Спецрежим мониторинга и обязательных предложений действовал до 31.12.2023.',
          'Порог остатка долга: ≤ 300 000 €.',
          'Тип жилья: habitação própria permanente, не инвестиционная квартира и не short-term rental.',
          'Тип ставки: variable rate или mixed rate в периоде переменной ставки.',
          'Банк не мог брать комиссии за renegociação в рамках режима.',
          'Банк не мог повышать spread как условие реструктуризации.',
          'Банк не мог навязывать новые продукты или услуги как условие renegociação.',
          'Меры могли включать продление срока, временную carência de capital, снижение ставки, изменение структуры кредита или консолидацию.'
        ] },
        { kind: 'warning', text: 'В 2026 году DL 80-A/2022 важен как историческая и договорная база: если меры были согласованы тогда, они продолжают действовать по вашему contrato. Но требовать нового автоматического применения спецрежима 2022–2023 уже нельзя; используйте общие правила Banco de Portugal и переговорную позицию.' }
      ]
    },
    {
      id: 'prepare-numbers',
      title: 'Подготовьте цифры до разговора с банком',
      content: [
        { kind: 'paragraph', text: 'Банк принимает решение не по эмоциям, а по risco de incumprimento. Ваша задача — показать, что платеж можно стабилизировать и дефолт банку невыгоден.' },
        { kind: 'checklist', items: [
          'Остаток долга по ипотеке: capital em dívida.',
          'Текущая mensalidade и дата следующего пересмотра Euribor.',
          'Индекс: Euribor 3M, 6M или 12M.',
          'Spread и TAEG из FINE или последнего statement.',
          'Срок до конца кредита и возраст старшего заемщика к финалу срока.',
          'Чистый семейный доход: salários, recibos verdes, pensões, аренда.',
          'Все регулярные кредиты: cartão de crédito, crédito pessoal, auto.',
          'Taxa de esforço: доля всех кредитных платежей в чистом доходе.',
          'Стоимость страховок life/multiriscos и привязаны ли они к банку.',
          'Сравнение 2–3 предложений других банков или broker.'
        ] },
        { kind: 'paragraph', text: 'Минимальный пакет для expat: паспорт/Cartão de Residência, NIF, последние recibos de vencimento или recibos verdes, IRS/declaração de rendimentos, extractos bancários за 3–6 месяцев, caderneta predial, certidão permanente, apólices de seguro.' }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'Что просить у банка: рабочие варианты',
      content: [
        { kind: 'paragraph', text: 'Не просите абстрактно “сделать дешевле”. Дайте банку 2–3 конкретных сценария и попросите симуляцию с FINE для каждого.' },
        { kind: 'checklist', items: [
          'Снижение spread: например, если у вас 1,4–1,8%, проверьте рынок и попросите match.',
          'Продление срока кредита: снижает mensalidade, но увеличивает общие проценты.',
          'Carência de capital на 6–24 месяца: временно платите в основном проценты; полезно при падении дохода, но долг почти не уменьшается.',
          'Смена Euribor 12M на 6M или 3M: может быстрее отражать снижение ставок, но чаще пересматривает платеж.',
          'Переход на taxa mista: фиксированная ставка на 2–5 лет + variable rate после этого.',
          'Отмена или замена связанных продуктов: страховки, cartões, contas pacote, если они делают TAEG хуже.',
          'Консолидация дорогих потребкредитов только если итоговая TAEG и срок действительно лучше.',
          'Transferência para outro banco, если текущий банк не дает конкурентные условия.'
        ] },
        { kind: 'warning', text: 'Не соглашайтесь только на меньшую mensalidade без проверки custo total do crédito. Продление срока на 10 лет может выглядеть комфортно в месяц, но стоить десятки тысяч евро процентов.' }
      ]
    },
    {
      id: 'rights-and-red-flags',
      title: 'Права клиента и красные флаги',
      content: [
        { kind: 'paragraph', text: 'Banco de Portugal прямо указывает: клиент может попросить renegociação, а банк должен оценить запрос. Одобрение не автоматическое, но за сам процесс renegociação банк не должен взимать комиссии.' },
        { kind: 'checklist', items: [
          'Запрос делайте письменно: app банка, email gestor, balcão с comprovativo.',
          'Просите simulação и FINE до подписания aditamento.',
          'Проверьте, меняется ли spread, prazo, indexante, TAEG, MTIC и seguros.',
          'Банк не должен связывать renegociação с обязательной покупкой ненужных продуктов.',
          'Если условия ухудшаются, просите письменное объяснение.',
          'Если есть риск просрочки, обращайтесь до первого missed payment.',
          'При отказе подайте reclamação в Livro de Reclamações и Banco de Portugal.',
          'Не подписывайте blank forms или документы на португальском, которые не понимаете.',
          'Сравните предложение с transfer через другого банка или intermediário de crédito.'
        ] },
        { kind: 'warning', text: 'Просрочка по ипотеке быстро портит Central de Responsabilidades de Crédito. Для expat это может закрыть доступ к новому кредиту, аренде с банковскими гарантиями и иногда к renegociação на лучших условиях.' }
      ]
    },
    {
      id: 'transfer-costs',
      title: 'Если переносить ипотеку в другой банк',
      content: [
        { kind: 'paragraph', text: 'Transferência может дать лучший spread или фиксированную ставку, но это новое кредитное досье. В 2026 общий лимит комиссии за досрочное погашение: до 0,5% от погашаемого капитала для variable-rate кредита и до 2% для fixed-rate кредита. Временные освобождения, действовавшие в кризисные годы для variable-rate, не считайте автоматическими — проверяйте актуальный contrato и закон на дату операции.' },
        { kind: 'checklist', items: [
          'Попросите у текущего банка declaração de dívida.',
          'Сравните TAEG, не только spread.',
          'Проверьте стоимость life insurance: иногда низкий spread компенсируется дорогой страховкой.',
          'Уточните, кто платит avaliação, registos и serviço de solicitador.',
          'Попросите новый банк письменно указать все одноразовые расходы.',
          'Проверьте, будет ли сохранен срок или банк потребует shorter maturity.',
          'Не закрывайте текущие счета и страховки до завершения transfer.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Renegociação в своем банке', amountEUR: 0, note: 'Комиссия за саму renegociação do crédito habitação не взимается; возможны расходы только на связанные действия, если они реально нужны и согласованы.' },
    { label: 'Avaliação do imóvel при transfer', amountEURMin: 200, amountEURMax: 350, note: 'Типичный рыночный диапазон; зависит от банка и региона.' },
    { label: 'Досрочное погашение variable-rate кредита', amountEURMin: 0, amountEURMax: 0.5, note: 'До 0,5% от погашаемого капитала по общему режиму; это процент, не фиксированная сумма в евро.' },
    { label: 'Досрочное погашение fixed-rate кредита', amountEURMin: 0, amountEURMax: 2, note: 'До 2% от погашаемого капитала по общему режиму; особенно важно при transfer из фиксированной ставки.' }
  ],
  sources: [
    {
      title: 'Banco de Portugal: меры по crédito habitação и DL 80-A/2022',
      url: 'https://www.bportugal.pt/comunicado/credito-habitacao-entraram-em-vigor-medidas-para-mitigar-efeitos-do-aumento-das-taxas-de',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: how to renegotiate mortgage credit',
      url: 'https://clientebancario.bportugal.pt/en/how-renegotiate',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE: Decreto-Lei 80-A/2022, medidas excecionais para crédito habitação',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/80-a-2022-203898305',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Banco de Portugal: direitos no reembolso antecipado e transferência de crédito habitação',
      url: 'https://clientebancario.bportugal.pt/pt-pt/reembolso-antecipado',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
