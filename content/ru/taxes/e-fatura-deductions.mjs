export default {
  editorialVoice: 'hackportugal',
  id: 'e-fatura-deductions',
  categoryId: 'taxes',
  title: 'e-Fatura: валидация чеков и налоговые вычеты IRS',
  tldr: 'e-Fatura — раздел Portal das Finanças, где собираются чеки с вашим NIF. Для IRS 2025, подаваемого с 1 апреля по 30 июня 2026, проверьте и подтвердите фактуры до 25 февраля 2026: без валидации часть расходов не попадёт в вычеты. Основные лимиты: общие семейные расходы — 35% до 250 € на налогоплательщика, медицина — 15% до 1 000 €, образование — 30% до 800 €, аренда жилья — 15% до установленного лимита, IVA по ресторанам/ремонту/ветеринарии/спортзалам — до 250 € на домохозяйство.',
  tags: ['irs', 'efatura', 'вычеты', 'nif'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'Что такое e-Fatura и почему это деньги',
      content: [
        { kind: 'paragraph', text: 'e-Fatura связывает чеки и счета-фактуры с вашим NIF. Когда магазин, клиника, ресторан, школа или арендодатель передаёт фактуру в Finanças, она появляется в вашей личной зоне. Эти данные затем автоматически подтягиваются в декларацию IRS.' },
        { kind: 'paragraph', text: 'Для расходов 2025 года ключевая дата — 25 февраля 2026: до неё нужно подтвердить висящие фактуры, назначить категорию и исправить ошибки. Декларация IRS за 2025 год подаётся с 1 апреля по 30 июня 2026.' },
        { kind: 'checklist', items: [
          'Всегда просите добавить NIF в чек: “com número de contribuinte, por favor”.',
          'Проверяйте e-Fatura хотя бы раз в квартал, не только в феврале.',
          'Особенно важны медицина, образование, аренда, рестораны, ремонт авто/мото, парикмахерские, ветеринария, спортзалы.',
          'Чеки без NIF обычно не дают IRS-вычетов.',
          'Если фактура висит как “pendente”, она может не попасть в правильную категорию без вашего действия.',
          'Если у вас есть дети, проверяйте e-Fatura каждого члена agregado familiar отдельно.'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'Как зайти и что проверить',
      content: [
        { kind: 'paragraph', text: 'Зайдите на faturas.portaldasfinancas.gov.pt через NIF + senha de acesso или Chave Móvel Digital (CMD). Если у вас семья, проверьте NIF каждого взрослого и ребёнка: расходы распределяются по налогоплательщикам.' },
        { kind: 'checklist', items: [
          'Откройте “Despesas dedutíveis em IRS” — общий обзор вычетов.',
          'Откройте “Verificar faturas” или “Complementar Informação Faturas” — список проблемных фактур.',
          'Проверьте, нет ли статуса “pendente”.',
          'Назначьте сектор расхода: saúde, educação, habitação, lares, despesas gerais familiares или другой.',
          'Для despesas mistas укажите, связана ли покупка с профессиональной деятельностью.',
          'Сохраните изменения и повторно проверьте итоговую страницу вычетов.',
          'Скачайте или сохраните спорные чеки: аптеки, школы, арендные платежи, крупные медицинские расходы.'
        ] },
        { kind: 'warning', text: 'Пароль Finanças не приходит мгновенно: если вы новый резидент с NIF, запросите senha de acesso заранее. В феврале из-за нагрузки портал может работать медленно.' }
      ]
    },
    {
      id: 'categories',
      title: 'Категории вычетов IRS в 2026',
      content: [
        { kind: 'paragraph', text: 'Ниже — основные вычеты, которые обычно видны через e-Fatura и Portal das Finanças для декларации IRS. Лимиты применяются по правилам Código do IRS и могут дополнительно ограничиваться общим потолком вычетов в зависимости от дохода семьи.' },
        { kind: 'checklist', items: [
          'Despesas gerais familiares: 35% расходов, максимум 250 € на налогоплательщика; для семьи с двумя взрослыми обычно до 500 €.',
          'Monoparental: для одинокого родителя ставка по общим семейным расходам — 45%, максимум 335 €.',
          'Saúde: 15% медицинских расходов, максимум 1 000 € на домохозяйство; расходы с IVA 23% обычно требуют receita médica.',
          'Educação e formação: 30% расходов, общий лимит 800 €; подходят школы, университеты, creche, livros escolares, formação с правильным CAE.',
          'Habitação — rendas: 15% арендных платежей за постоянное жильё, если договор зарегистрирован в Finanças и выдаются recibos de renda eletrónicos.',
          'Lares: 25% расходов на дома престарелых и поддержку пожилых родственников, с отдельным лимитом.',
          'Exigência de fatura: часть IVA по ресторанам, alojamento, парикмахерским, ремонту авто/мото, ветеринарии, ginásios и mensal passes; общий лимит обычно 250 € на домохозяйство.'
        ] },
        { kind: 'warning', text: 'Наличие чека в e-Fatura не означает автоматический возврат всей суммы. IRS-вычет уменьшает налог к уплате, а не возвращает стоимость покупки. Если удержанного IRS было мало, фактический возврат может быть ниже видимого лимита.' }
      ]
    },
    {
      id: 'validate',
      title: 'Валидация до 25 февраля: что нажимать',
      content: [
        { kind: 'substeps', items: [
          { id: 'pending', title: '1. Разобрать “Faturas Pendentes”', content: [
            { kind: 'paragraph', text: 'Откройте каждую фактуру со статусом pendente. Система просит выбрать сектор, потому что продавец имеет несколько видов деятельности или данные неполные.' },
            { kind: 'checklist', items: [
              'Аптека: выберите saúde; если есть IVA 23%, отметьте наличие receita médica только если она реально есть.',
              'Школа, universidade, creche: выберите educação, если поставщик имеет подходящий CAE.',
              'Ресторан или café: обычно restauração e alojamento для вычета части IVA.',
              'Oficina: manutenção e reparação de veículos automóveis или motociclos.',
              'Ginásio: atividades de clubes desportivos / ginásios, если отображается соответствующий сектор.'
            ] }
          ] },
          { id: 'professional', title: '2. Отметить профессиональные расходы', content: [
            { kind: 'paragraph', text: 'Если вы на recibos verdes или ведёте atividade aberta, часть фактур может быть вопросом “Âmbito da atividade profissional?”. Для личных расходов отвечайте “Não”; для расходов бизнеса — “Sim” полностью или частично, если портал предлагает долю.' }
          ] },
          { id: 'children', title: '3. Проверить детей и супруга', content: [
            { kind: 'paragraph', text: 'Детские расходы часто попадают на NIF ребёнка: escola, creche, explicações, saúde. Войдите в e-Fatura каждого dependente с его NIF и паролем Finanças или через доступ представителя, если он настроен.' }
          ] }
        ] }
      ]
    },
    {
      id: 'missing-or-wrong',
      title: 'Если чека нет или категория неправильная',
      content: [
        { kind: 'paragraph', text: 'Продавцы обычно передают фактуры до 5-го числа следующего месяца, но задержки бывают. Если к февралю чека нет, можно зарегистрировать его вручную через “Registar Faturas”, но сохраняйте оригинал: Finanças может запросить подтверждение.' },
        { kind: 'checklist', items: [
          'Проверьте, был ли NIF напечатан на чеке правильно.',
          'Сравните дату, сумму, NIF продавца и номер фактуры.',
          'Если NIF не добавили при оплате, позже исправить через e-Fatura обычно нельзя — просите продавца аннулировать и выпустить правильную фактуру, если это ещё возможно.',
          'Если категория неправильная, попробуйте изменить её в “Complementar Informação”.',
          'Если портал не даёт выбрать educação/saúde, проблема может быть в CAE продавца; запросите у поставщика корректную фактуру или пояснение.',
          'Для аренды проверьте не e-Fatura, а recibos de renda eletrónicos и contrato de arrendamento в Portal das Finanças.',
          'После 25 февраля исправления сложнее: часть данных можно оспорить позже в период reclamação, но лучше не рассчитывать на это.'
        ] },
        { kind: 'warning', text: 'Не добавляйте вручную фиктивные или уже учтённые фактуры. Дубли и неподтверждённые расходы могут привести к корректировке IRS, juros compensatórios и штрафам.' }
      ]
    },
    {
      id: 'irs-filing',
      title: 'Как это попадает в декларацию IRS',
      content: [
        { kind: 'paragraph', text: 'После закрытия e-Fatura Finanças рассчитывает deduções à coleta. Перед подачей IRS проверьте страницу “Despesas para Deduções à Coleta” и затем Modelo 3 или IRS Automático, если он вам доступен.' },
        { kind: 'checklist', items: [
          'До 15 марта обычно становятся видны итоговые суммы вычетов.',
          'С 15 по 31 марта обычно можно reclamar despesas gerais familiares и exigência de fatura, если суммы неверны.',
          'С 1 апреля по 30 июня 2026 подаётся IRS за 2025 год.',
          'Перед отправкой декларации симулируйте результат: “Simular”.',
          'Сравните tributação conjunta и separada, если вы женаты или в união de facto.',
          'Если вы недавно переехали, проверьте налоговое резидентство: резидент Portugal декларирует мировой доход, нерезидент — только португальский доход.',
          'Сохраните подтверждение подачи и liquidação IRS, когда она появится.'
        ] },
        { kind: 'warning', text: 'e-Fatura не заменяет налоговую проверку декларации. Для expat-ситуаций — доход из-за рубежа, remote work, IFICI, крипто, продажа имущества, двойное резидентство — лучше отдельно проверить Modelo 3 и anexos.' }
      ]
    }
  ],
  costs: [
    { label: 'Доступ к e-Fatura', amountEUR: 0, note: 'Бесплатно через Portal das Finanças.' },
    { label: 'Senha de acesso Finanças', amountEUR: 0, note: 'Запрашивается бесплатно; письмо приходит на налоговый адрес.' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'Бесплатная цифровая аутентификация, если у вас есть подходящий документ и активный номер телефона.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Manual e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/efatura_portal.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
