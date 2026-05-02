export default {
  editorialVoice: 'hackportugal',
  id: 'iva-autoliquidacao-ue-b2b',
  categoryId: 'taxes',
  title: 'Reverse charge / autoliquidação IVA: счета клиентам в ЕС B2B',
  tldr: 'Если вы в Португалии выставляете счёт компании из ЕС с действительным VAT ID в VIES, обычно Portuguese IVA не начисляется: место налогообложения переносится к клиенту, а в счёте пишется «IVA - autoliquidação». До отправки счёта проверьте VAT ID в VIES и сохраните доказательство. Операции B2B по ЕС попадают в Declaração Recapitulativa, обычно до 20-го числа после периода. Для B2C reverse charge почти никогда не работает: часто нужен PT IVA или OSS.',
  tags: ['iva', 'vies', 'b2b', 'recapitulativa'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-applies',
      title: 'Когда работает autoliquidação в ЕС B2B',
      content: [
        { kind: 'paragraph', text: 'Autoliquidação / reverse charge означает: вы не добавляете Portuguese IVA в счёт, а клиент сам начисляет VAT в своей стране. Для типичного фрилансера в Португалии это применяется к услугам B2B клиенту из другой страны ЕС, если клиент является taxable person и дал действительный VAT ID.' },
        { kind: 'checklist', items: [
          'Вы зарегистрированы в Португалии как sujeito passivo de IVA: компания, empresário em nome individual или recibos verdes.',
          'Клиент находится в другой стране ЕС, не в Португалии.',
          'Клиент — бизнес, а не частное лицо.',
          'У клиента есть действительный VAT ID, проверяемый через VIES.',
          'Услуга подпадает под общее правило B2B: место налогообложения — страна клиента по CIVA art. 6.º, n.º 6, al. a).',
          'Вы не начисляете 23%, 13% или 6% Portuguese IVA в счёте.',
          'В счёте указана причина: «IVA - autoliquidação».',
          'Операция отражается в Declaração Recapitulativa и в periodic IVA return, если вы обязаны подавать IVA.'
        ] },
        { kind: 'warning', text: 'Если клиент из Португалии, это не внутрисоюзная B2B-услуга: обычно начисляется Portuguese IVA, кроме специальных exemptions. Если клиент из США/UK/Швейцарии — это не VIES и не Declaração Recapitulativa ЕС; правила места оказания услуг всё равно проверяются отдельно.' }
      ]
    },
    {
      id: 'vies-check',
      title: 'Проверка клиента в VIES перед счётом',
      content: [
        { kind: 'paragraph', text: 'VIES — официальный сервис Еврокомиссии для проверки VAT ID компаний ЕС. Для reverse charge это ключевое доказательство, что клиент действительно B2B. Проверяйте VAT ID до каждого первого счёта и затем регулярно, особенно если сотрудничество длится месяцами.' },
        { kind: 'checklist', items: [
          'Откройте VIES: ec.europa.eu/taxation_customs/vies/.',
          'Выберите страну клиента и введите VAT ID без пробелов и лишних символов.',
          'Если VIES возвращает valid — сохраните PDF/скриншот с датой и временем.',
          'Сверьте название и адрес компании с договором, PO, email-доменом и данными для инвойса.',
          'Если VIES показывает invalid — не применяйте autoliquidação, пока клиент не исправит VAT ID.',
          'Если VIES временно недоступен — сделайте повторную проверку позже и сохраните доказательство попытки.',
          'Для испанских клиентов проверяйте именно NIF-IVA, а не просто налоговый номер; у некоторых компаний номер есть, но intra-EU VAT не активирован.',
          'Храните VIES-доказательства вместе со счётом не менее срока налоговой давности.'
        ] },
        { kind: 'warning', text: 'Ошибка «valid» в VIES не делает частное лицо бизнес-клиентом автоматически. Но отсутствие действительного VAT ID почти всегда ломает B2B reverse charge для ЕС: Finanças может потребовать Portuguese IVA, juros compensatórios и штраф.' }
      ]
    },
    {
      id: 'invoice-text',
      title: 'Как выписать счёт: точная формулировка',
      content: [
        { kind: 'paragraph', text: 'В Portuguese invoice / recibo verde сумма услуги указывается без IVA. В поле причины неначисления IVA выбирайте «IVA - autoliquidação». В тексте счёта полезно дополнительно указать юридическое основание: «Reverse charge — serviço localizado no Estado-Membro do adquirente, nos termos do art. 6.º, n.º 6, al. a) do CIVA».' },
        { kind: 'checklist', items: [
          'Данные продавца: ваше имя/компания, NIF, адрес в Португалии.',
          'Данные клиента: юридическое название, адрес, VAT ID с кодом страны, например DE123456789.',
          'Описание услуги: конкретно, без расплывчатого «consulting» там, где можно написать «software development», «design», «marketing services».',
          'Дата оказания услуги или период: например «services provided in March 2026».',
          'Tax base: сумма без IVA.',
          'IVA rate: не ставьте 23%; в Portal das Finanças выбирайте причину «IVA - autoliquidação».',
          'Обязательная пометка: «IVA - autoliquidação».',
          'Рекомендуемая доп. пометка: «Reverse charge / VAT due by the customer».',
          'Валюта: можно выставлять в €, а если в другой валюте — сохраняйте курс пересчёта для бухгалтерии.',
          'Сохраните договор, переписку, VIES-проверку и подтверждение оплаты.'
        ] },
        { kind: 'warning', text: 'Не используйте «Isento art. 53.º» как замену reverse charge. Art. 53.º CIVA — это малый режим освобождения от IVA в Португалии, а «IVA - autoliquidação» — другой механизм. Если вы на art. 53.º, уточните у contabilista, нужно ли менять режим до начала внутрисоюзных B2B-операций.' }
      ]
    },
    {
      id: 'recapitulativa',
      title: 'Declaração Recapitulativa: что подать в Finanças',
      content: [
        { kind: 'paragraph', text: 'Внутрисоюзные B2B-услуги с reverse charge обычно попадают в Declaração Recapitulativa. Это отдельная декларация в Portal das Finanças, где по каждому клиенту указывается VAT ID и сумма операций. Она не заменяет обычную periodic IVA return.' },
        { kind: 'checklist', items: [
          'Проверьте, что в Finanças у вас открыт activity code и корректный IVA regime.',
          'Зайдите в Portal das Finanças → IVA → Declaração Recapitulativa.',
          'Укажите период, к которому относятся услуги.',
          'Для каждого EU B2B клиента внесите страну, VAT ID и taxable amount.',
          'Суммы должны совпадать с выставленными счетами и IVA return.',
          'Обычно срок — до 20-го числа месяца после соответствующего периода; если срок попадает на выходной/праздник, ориентируйтесь на ближайший рабочий день, но не тяните.',
          'Даже если IVA к оплате 0 €, обязанность по recapitulativa может сохраняться.',
          'Сохраняйте comprovativo de entrega после отправки.',
          'Если ошиблись в VAT ID или сумме — подайте substituição/исправление как можно раньше.'
        ] },
        { kind: 'warning', text: 'Штрафы за пропущенные налоговые декларации в Португалии часто дороже самой бухгалтерии. Если вы регулярно выставляете счета в ЕС, заведите календарь: invoice date, VIES proof, Declaração Recapitulativa, periodic IVA return, IRS/IRC.' }
      ]
    },
    {
      id: 'b2c-and-edge-cases',
      title: 'B2B ≠ B2C: где reverse charge не спасает',
      content: [
        { kind: 'paragraph', text: 'Главная ошибка фрилансеров — применять «IVA - autoliquidação» к любому клиенту из ЕС. Для частных лиц из ЕС это почти всегда неверно. B2C-услуги облагаются по другим правилам: иногда Portuguese IVA, иногда IVA страны потребителя через OSS, иногда специальные правила по недвижимости, событиям, обучению или электронным услугам.' },
        { kind: 'checklist', items: [
          'B2B EU client с valid VAT ID: обычно reverse charge и Declaração Recapitulativa.',
          'B2C EU private person: reverse charge не применяется.',
          'B2C digital services, SaaS, downloadable products, online content: часто место налогообложения — страна клиента; может понадобиться OSS.',
          'B2C обычные консультации/дизайн/маркетинг: правило зависит от характера услуги; не копируйте B2B-схему.',
          'Услуги, связанные с недвижимостью: часто облагаются там, где находится объект.',
          'Обучение, мероприятия, admission to events: возможны специальные правила по месту фактического проведения или доступа.',
          'Клиент без valid VAT ID, но говорит «мы компания»: попросите активировать intra-EU VAT и дождитесь VIES valid.',
          'Marketplace/платформа может быть deemed supplier или агентом — проверьте договор и VAT treatment.',
          'Если вы выставили счёт с Portuguese IVA по ошибке, исправление делается через nota de crédito и новый счёт, а не через переписку в email.'
        ] },
        { kind: 'warning', text: 'OSS и reverse charge — разные режимы. OSS нужен для некоторых B2C-продаж/услуг в ЕС, чтобы декларировать IVA стран клиентов через единое окно. Для B2B reverse charge с VAT ID OSS обычно не используется.' }
      ]
    },
    {
      id: 'practical-controls',
      title: 'Мини-чеклист перед отправкой инвойса',
      content: [
        { kind: 'paragraph', text: 'Перед тем как отправить счёт клиенту в ЕС, пройдитесь по короткому контролю. Это занимает 3 минуты и экономит часы объяснений с бухгалтером и Finanças.' },
        { kind: 'checklist', items: [
          'Страна клиента — ЕС, но не Португалия.',
          'Клиент — компания/профессионал, не consumer.',
          'VAT ID valid в VIES на дату счёта.',
          'Название и адрес в инвойсе совпадают с VIES или корпоративными данными клиента.',
          'В счёте нет Portuguese IVA.',
          'Выбрана причина «IVA - autoliquidação».',
          'В описании есть понятная услуга и период.',
          'Счёт попадёт в Declaração Recapitulativa.',
          'Сумма попадёт в periodic IVA return в правильные поля.',
          'VIES proof, invoice PDF и договор сохранены в одной папке.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Проверка VAT ID в VIES', amountEUR: 0, note: 'Официальный сервис Еврокомиссии бесплатный.' },
    { label: 'Подача Declaração Recapitulativa', amountEUR: 0, note: 'В Portal das Finanças бесплатно; бухгалтер может брать отдельную fee.' },
    { label: 'Бухгалтер для recibos verdes/IVA', amountEURMin: 40, amountEURMax: 120, note: 'Типичный месячный диапазон для фрилансера; зависит от числа счетов, IVA, OSS и IRS.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: informação e serviços de IVA',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'VIES: проверка VAT ID в ЕС',
      url: 'https://ec.europa.eu/taxation_customs/vies/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA на Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: Declaração Recapitulativa IVA',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
