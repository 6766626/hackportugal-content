export default {
  editorialVoice: 'hackportugal',
  id: 'irs-anexo-g-mais-valias',
  categoryId: 'taxes',
  title: 'IRS Anexo G — налог на прирост капитала: квартира, акции, фонды, crypto',
  tldr: 'Anexo G подаётся вместе с Modelo 3 IRS, если в году были taxable mais-valias: продажа недвижимости, акций, ETF, долей, crypto <365 дней. Для налоговых резидентов Португалии прирост по недвижимости обычно включается в IRS только на 50% и облагается по прогрессивной ставке; акции/ETF/фонды чаще облагаются автономно 28%, но можно выбрать englobamento. Продажа primeira habitação может быть освобождена при реинвестировании в новую HPP за 24 мес до или 36 мес после продажи.',
  tags: ['irs', 'anexog', 'maisvalias', 'налоги'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-anexo-g',
      title: 'Когда нужен Anexo G',
      content: [
        { kind: 'paragraph', text: 'Anexo G — приложение к декларации Modelo 3 IRS для прироста капитала, который не освобождён автоматически. В апреле–июне 2026 вы подаёте IRS за доходы 2025 года; сделки 2026 года попадут в декларацию 2027.' },
        { kind: 'checklist', items: [
          'Продали квартиру, дом, землю или долю в недвижимости в Португалии или за границей.',
          'Продали акции, ETF, облигации, паи фондов, доли в компаниях, options/futures или другие valores mobiliários.',
          'Продали crypto-assets, если срок владения был менее 365 дней или актив не подпадает под освобождение.',
          'Получили компенсацию за уступку прав, опцион, cessão onerosa или похожую операцию, указанную в Código do IRS art. 10.',
          'Вы налоговый резидент Португалии: декларируется мировой доход, включая сделки у зарубежного брокера.',
          'Вы нерезидент, но продали португальскую недвижимость или португальские активы: тоже может быть декларация IRS в Португалии.'
        ] },
        { kind: 'warning', text: 'Anexo G не заменяет CRS/DAC7-обмен. Finanças часто видит зарубежные брокерские счета, банковские поступления и продажи через нотариусов. “Брокер за границей” не означает “не декларировать”.' }
      ]
    },
    {
      id: 'real-estate',
      title: 'Недвижимость: 50% прироста в IRS',
      content: [
        { kind: 'paragraph', text: 'Для налогового резидента Португалии налогооблагаемый прирост от продажи недвижимости обычно считается так: preço de venda − valor de aquisição corrigido − документально подтверждённые расходы. Затем в IRS включается 50% положительного результата. Эта половина добавляется к остальному доходу и облагается по прогрессивным ставкам IRS, а не фиксированно 28%.' },
        { kind: 'checklist', items: [
          'Quadro 4 Anexo G: идентификация imóvel, дата покупки, дата продажи, valor de aquisição, valor de realização.',
          'Valor de aquisição — цена покупки из escritura, либо valor patrimonial tributário, если он был выше и использовался для IMT/IS.',
          'Если недвижимость была во владении более 24 месяцев, цена покупки индексируется коэффициентом desvalorização da moeda, публикуемым ежегодно.',
          'В расходы обычно входят IMT, Imposto do Selo при покупке, нотариус, registo predial, агентская комиссия при продаже, certificado energético, подтверждённые obras de valorização за последние 12 лет.',
          'IMI, condomínio, проценты по ипотеке и обычный ремонт “для жизни” обычно не уменьшают прирост.',
          'Если объект был унаследован, дата и стоимость приобретения берутся по правилам наследования: обычно valor patrimonial tributário на дату передачи/гербового налога.',
          'Если продавцов несколько, каждый декларирует свою долю и свои суммы.'
        ] },
        { kind: 'warning', text: 'Сохраняйте invoices с NIF, escritura, recibos, comprovativos de pagamento. Для obras de valorização без factura с NIF Finanças часто не принимает расход.' }
      ]
    },
    {
      id: 'hpp-reinvestment',
      title: 'Освобождение: primeira habitação и реинвестирование',
      content: [
        { kind: 'paragraph', text: 'Прирост от продажи habitação própria e permanente (HPP, основное постоянное жильё) может быть полностью или частично освобождён, если вы реинвестируете выручку в покупку, строительство или улучшение другой HPP в Португалии, EU или EEE с обменом налоговой информацией.' },
        { kind: 'checklist', items: [
          'Новая недвижимость должна стать вашей habitação própria e permanente, а не Airbnb, second home или инвестиционный объект.',
          'Срок реинвестирования: 24 месяца до продажи или 36 месяцев после продажи.',
          'В Anexo G Quadro 5 указывают намерение реинвестировать, уже реинвестированные суммы и сумму, которую планируете реинвестировать.',
          'Если была ипотека на проданном жилье, для расчёта освобождения учитывается valor de realização за вычетом погашения кредита, связанного с продаваемой HPP.',
          'Частичное реинвестирование даёт частичное освобождение: не вся mais-valia исчезает.',
          'Если заявили намерение, но не реинвестировали в срок, придётся подать заменяющую декларацию или Finanças доначислит IRS с juros compensatórios.',
          'Для лиц старше 65 лет или пенсионеров есть отдельный режим: реинвестирование в договор страхования, fundo de pensões или PPR в течение 6 месяцев, при соблюдении условий Código do IRS art. 10.'
        ] },
        { kind: 'warning', text: '“Primeira habitação” в бытовом смысле не равна автоматической льготе. Для IRS важен статус HPP: фактическое постоянное проживание, адрес в Finanças, доказательства проживания и соблюдение сроков реинвестирования.' }
      ]
    },
    {
      id: 'shares-funds-crypto',
      title: 'Акции, ETF, фонды и crypto: обычно 28%',
      content: [
        { kind: 'paragraph', text: 'Продажа акций, ETF, облигаций, фондов и долей отражается в Anexo G, обычно в разделе valores mobiliários. Положительный баланс за год часто облагается автономной ставкой 28%. Можно выбрать englobamento — тогда прибыль добавят к остальному доходу и обложат по прогрессивным ставкам IRS; это выгодно только при низком общем доходе или для зачёта убытков в будущие годы.' },
        { kind: 'checklist', items: [
          'Указывайте каждую операцию или агрегируйте по допустимым правилам инструкции Modelo 3: дата покупки, дата продажи, ISIN/код, страна, цена покупки, цена продажи, комиссии.',
          'Комиссии брокера уменьшают прирост, если связаны с покупкой/продажей и подтверждены отчётом.',
          'Убытки по securities можно зачесть против прироста той же категории; перенос убытков обычно требует выбора englobamento.',
          'Для активов, удержанных менее 365 дней, у налогоплательщиков с очень высоким доходом может применяться обязательное englobamento по правилам Código do IRS.',
          'ETF и фонды у иностранных брокеров не становятся “невидимыми”: налоговый резидент Португалии декларирует мировой результат.',
          'Crypto-assets: прирост от продажи crypto, не являющихся valores mobiliários, обычно облагается 28%, если срок владения менее 365 дней; при владении 365+ дней для обычных crypto действует освобождение, кроме исключений закона.',
          'Обмен crypto-to-crypto в португальских правилах не всегда трактуется как финальная taxable disposal так же, как обмен crypto на fiat; проверяйте тип операции и отчётность биржи.'
        ] },
        { kind: 'warning', text: 'Не путайте dividend/interest с capital gains. Дивиденды и проценты обычно идут не в Anexo G, а в Anexo E или Anexo J, если источник за границей.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'Как подать в Portal das Finanças',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-documents', title: '1. Соберите документы', content: [
            { kind: 'checklist', items: [
              'Escritura/contrato de compra e venda по недвижимости.',
              'Caderneta predial и certidão permanente, если есть.',
              'Расчёт IMT и Imposto do Selo при покупке.',
              'Invoices с NIF по агенту, нотариусу, registo, obras de valorização.',
              'Ипотечная справка о погашении кредита при продаже HPP.',
              'Broker annual statement: trades, ISIN, даты, валюты, комиссии.',
              'Курсы валют к евро на даты операций, если брокер в USD/GBP/другой валюте.',
              'Данные по реинвестированию: CPCV, escritura новой HPP, платежи, ипотека.'
            ] }
          ] },
          { id: 'fill-modelo3', title: '2. Заполните Modelo 3 + Anexo G', content: [
            { kind: 'paragraph', text: 'В Portal das Finanças откройте IRS → Entregar Declaração Modelo 3. Добавьте Anexo G. Для зарубежных доходов иногда дополнительно нужен Anexo J: например, если брокер удержал иностранный налог или доход классифицируется как иностранный финансовый доход.' }
          ] },
          { id: 'simulate', title: '3. Сравните tributação autónoma и englobamento', content: [
            { kind: 'paragraph', text: 'Для ценных бумаг Portal позволяет симулировать декларацию. Проверьте вариант без englobamento и с englobamento. При низком доходе прогрессивная ставка может быть ниже 28%; при среднем и высоком доходе автономные 28% часто выгоднее.' }
          ] },
          { id: 'submit', title: '4. Подайте и сохраните доказательства', content: [
            { kind: 'paragraph', text: 'Декларация IRS за 2025 год подаётся с 1 апреля по 30 июня 2026. После отправки сохраните comprovativo, liquidação и все документы минимум 4 года; по недвижимости и реинвестированию лучше хранить дольше.' }
          ] }
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки expat’ов',
      content: [
        { kind: 'checklist', items: [
          'Декларируют только деньги, заведённые в Португалию, а не сам факт продажи актива. Для резидента важна сделка, а не перевод денег.',
          'Считают, что недвижимость всегда облагается 28%. Для резидента обычно облагается 50% прироста по прогрессивной шкале IRS.',
          'Не заявляют реинвестирование HPP в Quadro 5 в год продажи, а вспоминают через 2 года.',
          'Берут в расходы мебель, бытовую технику, condomínio и IMI — Finanças может снять такие суммы.',
          'Не переводят USD/GBP операции в евро по корректному курсу.',
          'Смешивают Anexo G, G1, E и J: освобождённые gains могут идти в G1, дивиденды — E/J, иностранные финансовые доходы — часто J.',
          'Забывают про убытки: если их не задекларировать, они не помогут уменьшить налог.',
          'Подают как “casado separado” без проверки: для пары совместная или раздельная декларация может сильно менять итог по capital gains.'
        ] },
        { kind: 'warning', text: 'Если сумма сделки крупная — недвижимость, stock options, продажа портфеля ETF — сделайте расчёт до подачи декларации. Исправление IRS возможно, но проценты и штрафы дешевле предотвратить, чем спорить с Autoridade Tributária.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — IRS, modelos e instruções da declaração Modelo 3',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/modelos_formularios/irs/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 10, Mais-valias',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs10.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 43, Mais-valias: regras de determinação',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs43.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 72, taxas especiais e autónomas',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs/Pages/irs72.aspx',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
