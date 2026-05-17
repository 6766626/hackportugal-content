export default {
  editorialVoice: 'hackportugal',
  id: 'agua-quente-solar-obrigatorio',
  categoryId: 'housing_buy',
  title: 'Solar térmico: обязательная горячая вода от солнца в новом строительстве',
  tldr: 'В Португалии солнечный нагрев воды стал обязательным для нового жилья ещё по DL 80/2006: проект должен предусматривать solar térmico для águas quentes sanitárias, обычно с расчётным покрытием около 70% годовой потребности, если крыша/фасад технически подходят. В 2026 сам DL 80/2006 уже заменён режимом SCE и DL 101-D/2020, но смысл остался: новое здание должно пройти энергетическую сертификацию и показать вклад ВИЭ. Для существующих домов установка не обязательна, но возможны incentivos через Fundo Ambiental по открытым avisos.',
  tags: ['solar', 'água-quente', 'sce', 'жильё'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'Что именно обязательно в новом доме',
      content: [
        { kind: 'paragraph', text: 'Solar térmico — это не солнечные панели для электричества, а коллекторы, которые греют бытовую горячую воду: душ, кухня, санузлы. В португальских документах ищите termos: sistemas solares térmicos, AQS — águas quentes sanitárias, depósito acumulador, apoio elétrico/gás/bomba de calor.' },
        { kind: 'paragraph', text: 'DL 80/2006 ввёл практическую обязанность предусматривать солнечные коллекторы в новых зданиях для AQS, при наличии подходящей солнечной экспозиции. Типовой ориентир — покрытие не менее 70% годовой потребности горячей воды солнечной энергией; оставшиеся пики закрывает apoio: электрический ТЭН, газовый котёл или bomba de calor.' },
        { kind: 'warning', text: 'В 2026 DL 80/2006 уже не является действующим базовым режимом энергоэффективности: его заменили последующие SCE-правила, сейчас ключевой акт — Decreto-Lei 101-D/2020. Но при покупке новостройки смысл для покупателя тот же: проект должен быть совместим с энергетическим сертификатом и требованиями к ВИЭ/AQS.' }
      ]
    },
    {
      id: 'where-to-check-before-buying',
      title: 'Что проверить перед покупкой новостройки 🏗️',
      content: [
        { kind: 'checklist', items: [
          'Попросите Certificado Energético SCE: класс, номер сертификата, дата, técnico perito qualificado.',
          'В техническом описании квартиры проверьте слова solar térmico или sistema solar para AQS.',
          'Уточните объём depósito acumulador: для T1/T2 часто 150–200 л, для T3/T4 — 200–300 л и больше.',
          'Проверьте, индивидуальная система у квартиры или общая система condomínio.',
          'Уточните тип apoio: электрический, газовый, bomba de calor; это влияет на счета зимой.',
          'Спросите, где физически стоят коллекторы: крыша, терраса, техническая зона; есть ли доступ для обслуживания.',
          'Попросите manual de utilização e manutenção и гарантию производителя.',
          'Проверьте, включена ли система в escritura/caderneta predial как часть здания или это оборудование condomínio.',
          'Если продавец говорит “у нас photovoltaic”, уточните отдельно: photovoltaic даёт электричество, но не заменяет автоматически solar térmico для AQS.',
          'Для здания после 2021 года попросите подтверждение, что проект прошёл SCE по DL 101-D/2020 и применимым portarias.'
        ] }
      ]
    },
    {
      id: 'existing-homes',
      title: 'Если дом уже построен: обязанности нет, но есть смысл',
      content: [
        { kind: 'paragraph', text: 'Для уже существующего жилья установка solar térmico обычно не обязательна. Исключения могут появляться при глубокой реконструкции, смене систем AQS или при требованиях проекта/licenciamento в Câmara Municipal. Для обычной квартиры, купленной на вторичке, никто не заставит срочно ставить коллектор.' },
        { kind: 'paragraph', text: 'Экономика зависит от потребления горячей воды. Семья из 3–4 человек с электрическим бойлером обычно получает самый заметный эффект: летом apoio почти не нужен, зимой система снижает нагрузку, но не заменяет резерв полностью.' },
        { kind: 'warning', text: 'В многоквартирном доме нельзя просто поставить коллектор на крышу без согласия condomínio. Крыша обычно общая часть здания; нужны acta da assembleia de condóminos, технический проект и иногда comunicação/licença в Câmara Municipal.' }
      ]
    },
    {
      id: 'incentives',
      title: 'Incentivos и Fundo Ambiental в 2026',
      content: [
        { kind: 'paragraph', text: 'Для существующих домов субсидии идут не автоматически, а через конкретные avisos Fundo Ambiental: например, программы повышения энергоэффективности зданий могут включать solar térmico, bombas de calor, insulation и окна. Условия меняются по aviso: процент поддержки, максимальная сумма, регион, дата счёта, обязательные сертификаты оборудования.' },
        { kind: 'checklist', items: [
          'Проверяйте только официальный сайт Fundo Ambiental и avisos abertos.',
          'Не покупайте оборудование “под субсидию”, пока не прочитали дату допустимых расходов.',
          'Сохраняйте fatura с NIF владельца жилья.',
          'Оплачивайте банковским способом, чтобы был comprovativo de pagamento.',
          'Проверяйте, что installer выдаёт declaração técnica и ficha do equipamento.',
          'Для некоторых avisos требуется Certificado Energético до/после работ.',
          'Если жильё в аренде, заранее получите письменное согласие собственника.',
          'Для condomínio уточняйте, подаёт заявку собственник, administração do condomínio или каждый condómino отдельно.'
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Красные флаги в рекламе и договоре',
      content: [
        { kind: 'checklist', items: [
          '“Painéis solares incluídos” без уточнения: photovoltaic или solar térmico.',
          'Нет Certificado Energético SCE до escritura.',
          'В contrato-promessa не описаны системы AQS и apoio.',
          'Застройщик обещает класс A+, но не даёт номер SCE или pré-certificado.',
          'Коллекторы указаны, но нет depósito acumulador или места для него.',
          'Система общая, но в orçamento condomínio не заложено обслуживание.',
          'Продавец говорит, что solar térmico “не нужен, потому что есть кондиционер”. Это разные системы.',
          'Нет доступа к крыше/технической зоне для ежегодной проверки.',
          'Гарантия только на установку, но не на коллекторы, насос, контроллер и бак.'
        ] },
        { kind: 'paragraph', text: 'Нормальная формулировка для due diligence: запросите у продавца projeto de especialidades, ficha técnica da habitação, Certificado Energético SCE, manual da instalação solar térmica и гарантийные документы. Если покупаете off-plan, внесите характеристики AQS в contrato-promessa.' }
      ]
    }
  ],
  costs: [
    { label: 'Solar térmico для квартиры/небольшого дома', amountEURMin: 1800, amountEURMax: 3500, note: 'Ориентир за комплект с баком 150–300 л и установкой; цена зависит от крыши, труб, доступа и apoio.' },
    { label: 'Ежегодное обслуживание', amountEURMin: 80, amountEURMax: 150, note: 'Проверка давления, гликоля, насоса, контроллера и утечек; у condomínio может быть общий контракт.' },
    { label: 'Certificado Energético SCE для жилья', amountEURMin: 150, amountEURMax: 350, note: 'Рыночный ориентир для квартиры/дома; зависит от площади и perito qualificado.' }
  ],
  sources: [
    {
      title: 'ADENE — Sistema de Certificação Energética dos Edifícios',
      url: 'https://www.adene.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGEG — Energia solar térmica e eficiência energética',
      url: 'https://www.dgeg.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 80/2006 — Regulamento das Características de Comportamento Térmico dos Edifícios',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/80-2006-672115',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 101-D/2020 — desempenho energético dos edifícios e SCE',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/101-d-2020-150570704',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
