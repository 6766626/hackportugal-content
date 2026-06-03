export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-h-deducoes',
  categoryId: 'taxes',
  title: 'IRS Anexo H: все вычеты saúde, educação, lares и imóvel',
  tldr: 'Anexo H в Modelo 3 IRS — место, где в декларации 2026 за доходы 2025 проверяют и при необходимости исправляют вычеты: saúde 15% до 1 000 € на семью, educação 30% до 800 €, lares 25% до 403,75 €, аренда жилья 15% до 700–800 € (OE 2024/25), проценты по старой ипотеке до 296 €. Большинство сумм подтягивается из e-Fatura автоматически, но если правите вручную — храните счета 4 года. Abono de família не декларируется как доход; “casamento jovem 750 €” не является стандартной строкой Anexo H.',
  tags: ['irs', 'anexo-h', 'вычеты', 'finanças'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-anexo-h-does',
      title: 'Что делает Anexo H',
      content: [
        { kind: 'paragraph', text: 'Anexo H — приложение к Modelo 3 IRS для налоговых льгот и вычетов à coleta. Для обычного экспата оно важно прежде всего из-за расходов, которые Finanças подтягивает из e-Fatura: медицина, образование, дома престарелых, аренда жилья и старые ипотечные проценты.' },
        { kind: 'paragraph', text: 'Декларация IRS в 2026 году подаётся за доходы 2025 года с 1 апреля по 30 июня 2026. Если вы подаёте IRS Automático, Anexo H обычно не заполняется вручную, но суммы всё равно надо проверить в симуляции.' },
        { kind: 'checklist', items: [
          'Проверьте e-Fatura: NIF должен быть указан в счёте в момент покупки или оплаты.',
          'Расходы семьи считаются по household: супруги/união de facto и dependentes.',
          'Если суммы Finanças верные — обычно оставляйте автоматические значения.',
          'Если меняете суммы вручную в Anexo H, вы берёте на себя обязанность доказать их документами.',
          'Счета, recibos и договор аренды храните минимум 4 года.',
          'Расходы за границей ЕС/ЕЭЗ можно заявлять, но нужны документы и связь с вашим NIF/налоговым резидентством.',
          'Anexo H не заменяет Anexo J для иностранных доходов и не оформляет IRS Jovem.'
        ] }
      ]
    },
    {
      id: 'main-deductions',
      title: 'Главные вычеты: saúde, educação, lares, imóvel',
      content: [
        { kind: 'paragraph', text: 'Ключевые лимиты для декларации IRS 2026 за 2025 год:' },
        { kind: 'checklist', items: [
          'Saúde: 15% расходов на медицину, максимум 1 000 € на household. Сюда входят консультации, анализы, hospital, аптека, взносы по медицинскому страхованию, если они признаны расходами на saúde.',
          'Saúde с IVA 23% засчитывается только при наличии рецепта или медицинского обоснования в e-Fatura.',
          'Educação e formação: 30% расходов, максимум 800 € на household. Школы, университеты, creche, учебники, propinas, признанные курсы.',
          'Estudante deslocado: аренда жилья для студента, живущего вдали от постоянного адреса, может входить в educação при правильном contrato de arrendamento и регистрации в Portal das Finanças; общий лимит educação может увеличиваться по специальным правилам.',
          'Lares: 25% расходов с lares, apoio domiciliário и аналогичными учреждениями, максимум 403,75 €.',
          'Imóvel — аренда постоянного жилья: 15% rentas по contrato de arrendamento, максимум 700–800 € (после индексации OE 2024/25).',
          'Imóvel — ипотечные проценты: вычет по juros de crédito à habitação применим в основном к старым кредитам, заключённым до 31.12.2011, максимум 296 €.',
          'IMI, condomínio, ремонт и мебель не становятся вычетом Anexo H только потому, что связаны с жильём.'
        ] },
        { kind: 'warning', text: 'Лимиты “1 000 € (saúde) / 800 € (educação) / 403,75 € (lares) / 700–800 € (аренда HPP) / 296 € (juros старой ипотеки)” — это максимальный вычет из налога, а не сумма расходов.\n\nНапример, чтобы получить 1 000 € по saúde, нужно иметь около 6 666,67 € признанных медицинских расходов.' }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Как проверить и исправить в Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в декларацию IRS', content: [
            { kind: 'paragraph', text: 'Зайдите в Portal das Finanças → IRS → Entregar Declaração → Modelo 3. Нужен NIF и пароль Finanças или Chave Móvel Digital (CMD).' }
          ] },
          { id: 'open-h', title: '2. Открыть Anexo H', content: [
            { kind: 'paragraph', text: 'Добавьте Anexo H, если подаёте не полностью автоматическую декларацию или хотите проверить deduções à coleta. У семейной декларации Anexo H один на household.' }
          ] },
          { id: 'choose-values', title: '3. Решить: автоматические суммы или ручной ввод', content: [
            { kind: 'paragraph', text: 'В разделе расходов Finanças показывает суммы, рассчитанные по e-Fatura и данным договоров аренды. Если выбираете ручное исправление, значения Anexo H заменяют автоматические данные по соответствующей категории.' },
            { kind: 'checklist', items: [
              'Сверьте saúde с аптеками, CUF/Luz/хоспиталами, страховой и recibos.',
              'Сверьте educação с escolas, universidades, creche, propinas и учебниками.',
              'Проверьте, что contrato de arrendamento зарегистрирован арендодателем в Finanças.',
              'Для аренды проверьте recibos de renda eletrónicos или годовую declaração, если арендодатель освобождён от электронных recibos.',
              'Для ипотечных процентов проверьте годовую справку банка.',
              'Если расход принадлежит ребёнку, убедитесь, что ребёнок указан как dependente в вашей декларации.'
            ] }
          ] },
          { id: 'simulate', title: '4. Сделать симуляцию до отправки', content: [
            { kind: 'paragraph', text: 'Нажмите Simular и сравните результат с вариантом без ручных правок. Иногда исправление одной строки не даёт экономии из-за общего лимита вычетов или низкого налога к уплате.' }
          ] }
        ] }
      ]
    },
    {
      id: 'limits-and-income-cap',
      title: 'Почему вычет может не сработать полностью',
      content: [
        { kind: 'paragraph', text: 'Португальские вычеты уменьшают IRS à coleta, то есть уже рассчитанный налог. Если налог к уплате низкий, неиспользованная часть вычета обычно не возвращается сверх удержанного/уплаченного IRS.' },
        { kind: 'checklist', items: [
          'Есть отдельный лимит по каждой категории: saúde, educação, lares, imóvel.',
          'Есть общий лимит deduções à coleta, который зависит от rendimento coletável household.',
          'Для низких доходов общий лимит выше; для высоких доходов он уменьшается.',
          'Семьи с 3 и более dependentes получают увеличение общего лимита на 5% за каждого dependente.',
          'Если вы нерезидент по IRS, доступность части вычетов зависит от выбранного режима и доли доходов из Португалии/ЕС.',
          'Если вы стали резидентом в середине года, проверяйте статус резидентства и период проживания: это влияет на декларацию сильнее, чем Anexo H.',
          'IFICI/NHR, IRS Jovem и другие режимы налогообложения доходов не являются “расходами” Anexo H.'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на e-Fatura. Наличие счёта в e-Fatura не гарантирует полный вычет: важны категория, NIF, тип IVA, подтверждающий документ и общий лимит IRS.' }
      ]
    },
    {
      id: 'family-abono-casamento',
      title: 'Дети, abono de família и “casamento jovem 750 €”',
      content: [
        { kind: 'paragraph', text: 'Abono de família — социальная выплата Segurança Social. Она не является обычным налогооблагаемым доходом IRS и не декларируется как расход в Anexo H.\n\nНалоговые вычеты за dependentes обычно рассчитываются автоматически, если дети правильно указаны в household.' },
        { kind: 'checklist', items: [
          'Проверьте composição do agregado familiar в Portal das Finanças до подачи декларации.',
          'Укажите dependentes с NIF; без NIF ребёнка часть автоматических вычетов и e-Fatura может потеряться.',
          'Расходы ребёнка на saúde и educação должны быть с NIF ребёнка или корректно привязаны к household.',
          'Разведённые родители должны проверить residência alternada и распределение расходов.',
          'Abono de família не нужно “добавлять” в Anexo H как доход или вычет.',
          'Фиксированные вычеты за dependentes считаются отдельно от лимитов saúde/educação.'
        ] },
        { kind: 'warning', text: 'На национальном уровне IRS по состоянию на 03.05.2026 нет стандартной строки Anexo H “casamento jovem 750 €”, которую можно просто вписать как вычет. Если в медиа или у консультанта фигурирует “750 € за casamento jovem”, проверьте официальный код льготы в Portal das Finanças: это может относиться к другому режиму, региональной мере или к IRS Jovem, но не к обычным расходам saúde/educação/lares/imóvel.' }
      ]
    },
    {
      id: 'documents',
      title: 'Что сохранить на случай проверки',
      content: [
        { kind: 'paragraph', text: 'Finanças может запросить подтверждения после подачи декларации. Особенно часто вопросы возникают по ручным правкам Anexo H, иностранным счетам, аренде и медицинским расходам с IVA 23%.' },
        { kind: 'checklist', items: [
          'Faturas-recibo и recibos с NIF плательщика или dependente.',
          'Медицинские рецепты для товаров/услуг с IVA 23%.',
          'Справки страховой о медицинских платежах и reimbursements.',
          'Счета школ, universidades, creche, centros de formação.',
          'Contrato de arrendamento, recibos de renda и подтверждение, что жильё — habitação permanente.',
          'Годовая справка банка по juros de crédito à habitação, если кредит старый и подходит под режим.',
          'Документы lares или apoio domiciliário с NIF учреждения.',
          'Подтверждение статуса dependente, если ребёнок учится, живёт отдельно или есть residência alternada.',
          'Документы по иностранным расходам с переводом при необходимости.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Подача Modelo 3 IRS через Portal das Finanças', amountEUR: 0, note: 'Самостоятельная подача онлайн бесплатна.' },
    { label: 'Типичная помощь contabilista с IRS', amountEURMin: 40, amountEURMax: 120, note: 'Цена зависит от количества anexos, иностранного дохода и ручных правок Anexo H.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, deduções à coleta и entrega da declaração',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_a_coleta/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — despesas para dedução à coleta / e-Fatura',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Rendimentos/Declaracao/Deducoes_beneficios_taxas/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — artigos 78.º a 85.º sobre deduções à coleta',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — Portal e-Fatura',
      url: 'https://faturas.portaldasfinancas.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
,
    { title: 'AT — Folheto IRS deduções 2025', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/IRS_deducoes_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
