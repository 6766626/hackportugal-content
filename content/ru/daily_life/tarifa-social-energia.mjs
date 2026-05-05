export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-social-energia',
  categoryId: 'daily_life',
  title: 'Tarifa Social: социальный тариф на электричество, газ и воду',
  tldr: 'Tarifa Social — автоматическая скидка для домохозяйств с низким доходом: электричество −33,8%, природный газ −31,2%, вода — по правилам município. Работает через сверку NIF с Segurança Social и Autoridade Tributária, поэтому подходит и экспатам с португальским NIF, если контракт на жильё оформлен на них и доход/пособие проходит критерии. В 2026 для электричества нужен contrato doméstico на постоянное жильё и мощность до 6,9 kVA.',
  tags: ['tarifa', 'energia', 'вода', 'nif'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что даёт Tarifa Social',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social de Energia — не отдельный дешёвый поставщик, а регулируемая скидка к счёту. Её применяет ваш поставщик электричества или газа после подтверждения права через государственные базы.' },
        { kind: 'checklist', items: [
          'Электричество: скидка 33,8% на регулируемые компоненты тарифа; в счёте обычно видна строка Tarifa Social.',
          'Природный газ: скидка 31,2% для бытовых клиентов низкого давления с небольшим годовым потреблением.',
          'Вода, канализация и отходы: Tarifa Social da Água зависит от Câmara Municipal / serviço municipal; размер и формула разные по município.',
          'Скидка применяется к постоянному месту проживания, а не к любому второму дому или туристической квартире.',
          'Нужен португальский NIF у держателя договора с E-REDES/поставщиком, поставщиком газа или муниципальной водой.',
          'Гражданство не важно: экспат с NIF, адресом в Португалии и подходящим доходом может получить тариф.'
        ] },
        { kind: 'warning', text: 'Tarifa Social не отменяет весь счёт. IVA, potência contratada, taxas, audiovisuel contribution и услуги поставщика могут оставаться частично или полностью к оплате.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто проходит по критериям в 2026',
      content: [
        { kind: 'paragraph', text: 'Главная логика: держатель договора должен быть “cliente economicamente vulnerável”. Право проверяется по NIF через Segurança Social и Autoridade Tributária. Для электричества также важны технические условия договора.' },
        { kind: 'checklist', items: [
          'Электричество: contrato doméstico для habitação permanente.',
          'Potência contratada по электричеству — до 6,9 kVA включительно.',
          'Держатель договора получает одно из пособий: Complemento Solidário para Idosos, Rendimento Social de Inserção, subsídio social de desemprego, abono de família, pensão social de velhice, pensão social de invalidez или complemento da prestação social para a inclusão.',
          'Альтернатива по электричеству: низкий годовой доход домохозяйства. В 2026 ориентир — 12 × IAS = 6 445,56 € в год, с увеличением на членов домохозяйства без дохода по правилам режима.',
          'Природный газ: бытовой договор, baixa pressão, consumo anual до 500 m³ и статус экономически уязвимого клиента.',
          'Вода: критерии задаёт município; часто принимают те же социальные пособия или доход ниже лимита, привязанного к IAS.',
          'Долги перед поставщиком сами по себе не должны автоматически лишать права на Tarifa Social, но могут мешать смене поставщика или заключению нового договора.'
        ] },
        { kind: 'warning', text: 'Если договор оформлен на арендодателя, родственника или бывшего жильца, автоматическая сверка не сработает для вас. Сначала переоформите contrato de eletricidade/gás/água на свой NIF.' }
      ]
    },
    {
      id: 'automatic',
      title: 'Как включается автоматически',
      content: [
        { kind: 'paragraph', text: 'Для электричества и природного газа режим задуман как автоматический. Поставщик периодически отправляет NIF держателя договора на проверку, а государственные системы подтверждают или отклоняют право без передачи поставщику деталей о вашем пособии или доходе.' },
        { kind: 'checklist', items: [
          'Проверьте, что в contrato указан ваш NIF, а не NIF арендодателя.',
          'Проверьте morada fiscal в Finanças и адрес договора: для постоянного жилья расхождения лучше исправить.',
          'Убедитесь, что potência contratada не выше 6,9 kVA, если хотите социальный тариф на электричество.',
          'Проверьте в Segurança Social Direta, что пособие активно и привязано к вашему NIF.',
          'Если основание — доход, проверьте последнюю декларацию IRS или отсутствие декларации, если вы ещё не обязаны её подавать.',
          'Посмотрите PDF-счёт: скидка обычно отображается как “Tarifa Social”, “Desconto Tarifa Social” или похожая строка.',
          'Если скидка появилась, отдельно подавать заявление обычно не нужно.'
        ] },
        { kind: 'paragraph', text: 'На практике первая автоматическая активация может занять несколько циклов выставления счетов. Если вы только переоформили договор или получили пособие, проверьте следующий и последующий счёт.' }
      ]
    },
    {
      id: 'manual-request',
      title: 'Если скидка не появилась: ручной запрос',
      content: [
        { kind: 'paragraph', text: 'Если вы уверены, что проходите критерии, но в счёте нет скидки, подайте pedido de atribuição da tarifa social поставщику. Это можно сделать в área de cliente, по email, в loja или через поддержку.' },
        { kind: 'checklist', items: [
          'PDF последнего счёта за электричество или газ.',
          'NIF держателя договора.',
          'CPE для электричества или CUI для газа — указаны в счёте.',
          'Documento de identificação: ВНЖ, Cartão de Cidadão или паспорт.',
          'Подтверждение постоянного адреса: contrato de arrendamento, atestado de residência или другой документ, если поставщик просит.',
          'Declaração da Segurança Social о пособии, если автоматическая проверка не сработала.',
          'IRS/nota de liquidação или declaração de rendimentos, если основание — низкий доход.',
          'Для воды — заявление в Câmara Municipal, SMAS или муниципальную компанию водоснабжения; у каждого município свой formulário.'
        ] },
        { kind: 'warning', text: 'Не отправляйте в общий чат поддержки лишние медицинские или миграционные документы. Для Tarifa Social обычно достаточно NIF, договора, адреса и подтверждения социального/доходного критерия.' }
      ]
    },
    {
      id: 'water',
      title: 'Вода: почему всё зависит от município',
      content: [
        { kind: 'paragraph', text: 'Tarifa Social da Água регулируется иначе, чем электричество и газ. Государство создало рамку, но конкретный тариф, автоматичность, список документов и размер скидки устанавливает município или entidade gestora: Câmara Municipal, SMAS, EMAR, Águas de Gaia и т. п.' },
        { kind: 'checklist', items: [
          'Найдите на сайте вашей Câmara Municipal раздел “tarifa social da água”, “tarifário social” или “ação social”.',
          'Проверьте, распространяется ли льгота только на água или также на saneamento и resíduos urbanos.',
          'Уточните лимит потребления: часто скидка действует только на базовые м³, а повышенное потребление оплачивается по обычной шкале.',
          'Проверьте, нужен ли contrato da água на ваш NIF.',
          'Если вы снимаете комнату и вода включена в аренду, получить персональную скидку обычно невозможно.',
          'Некоторые municípios делают автоматическую проверку через AT/Segurança Social, другие требуют ежегодное заявление.',
          'При переезде в другой concelho право нужно проверять заново.'
        ] },
        { kind: 'paragraph', text: 'Практический ориентир: электричество и газ сначала проверяйте у коммерческого поставщика, воду — у município или муниципальной компании, которая выставляет счёт.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Договор на электричество оставлен на арендодателя: скидка проверяется по его NIF, а не по вашему.',
          'Вы выбрали potência 10,35 kVA “на всякий случай”: для социального тарифа на электричество лимит 6,9 kVA.',
          'Morada fiscal в Finanças всё ещё иностранная или старая португальская.',
          'Пособие оформлено на супруга, а договор — на другого человека; автоматическая сверка может не совпасть.',
          'Вы ждёте скидку на bottled gas: Tarifa Social de Gás Natural относится к природному газу по сети, не к баллонам.',
          'Вы думаете, что NHR/IFICI или тип визы D7/D8 сами дают право: нет, решают доход, пособие и параметры договора.',
          'После смены поставщика не проверили первый счёт: скидка должна переноситься, но сбои бывают.',
          'Для воды подали запрос поставщику электричества вместо Câmara Municipal или SMAS.'
        ] },
        { kind: 'paragraph', text: 'Если отказали, попросите причину письменно: “não elegível por potência”, “NIF não validado”, “contrato não doméstico”, “morada não permanente”. По формулировке обычно понятно, что исправлять.' }
      ]
    }
  ],
  sources: [
    {
      title: 'ERSE: Tarifa Social — тарифы и цены',
      url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/tarifa-social/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE: раздел для граждан о счетах и энергии',
      url: 'https://www.erse.pt/atividade/consumidores/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 138-A/2010 — Tarifa Social de eletricidade',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/138-a-2010-306111',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diário da República: Decreto-Lei 101/2011 — Tarifa Social de gás natural',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-2011-671579',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
