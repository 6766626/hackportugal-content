export default {
  editorialVoice: 'hackportugal',
  id: 'agua-quente-solar-obrigatorio',
  categoryId: 'housing_buy',
  title: 'Горячая вода и ВИЭ в новостройках: когда нужен solar térmico и чем его можно заменить',
  tldr: 'По старому DL 80/2006 для новых зданий при подходящей солнечной экспозиции обычно требовались солнечные коллекторы для AQS или эквивалентное решение на ВИЭ; часто ориентировались на высокий солнечный вклад в годовую потребность. В действующем режиме DL 101-D/2020 требование формулируется через энергетические показатели/SCE и вклад ВИЭ, а не как универсальная обязанность ставить именно solar térmico. В 2026 году сам DL 80/2006 уже заменён режимом SCE и DL 101-D/2020, но смысл остался: новое здание должно пройти энергетическую сертификацию и показать вклад ВИЭ. Для существующих домов установка не обязательна, но возможны субсидии через Fundo Ambiental по открытым avisos.',
  tags: ['solar', 'água-quente', 'sce', 'жильё'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'Что именно обязательно в новом доме',
      content: [
        { kind: 'paragraph', text: 'Solar térmico — это не солнечные панели для электричества, а коллекторы, которые греют бытовую горячую воду: душ, кухня, санузлы. В португальских документах ищите termos: sistemas solares térmicos, AQS — águas quentes sanitárias, depósito acumulador, apoio elétrico/gás/bomba de calor.' },
        { kind: 'paragraph', text: 'В старом RCCTE/DL 80/2006 это было практическое правило для новых зданий при благоприятной экспозиции, с возможностью обоснованных исключений или альтернативных ВИЭ-решений. Цифру 70% стоит воспринимать как исторический проектный ориентир, а не как действующий универсальный минимум 2026 года.' },
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
          'Помните: фотовольтаика сама по себе не является системой AQS — она производит электричество. Но в действующем SCE-проекте PV вместе с bomba de calor или другим оборудованием может быть альтернативой solar térmico, если расчёт энергетических показателей проходит.',
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
        { kind: 'paragraph', text: 'Запросите projeto de especialidades, memória descritiva или caderno de encargos, telas finais либо документы condomínio, Certificado Energético SCE, manual da instalação и гарантии. Ficha técnica da habitação имеет смысл просить только если объект старый и такая ficha была выдана до отмены режима. Если покупаете off-plan, внесите характеристики AQS в contrato-promessa.' }
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
