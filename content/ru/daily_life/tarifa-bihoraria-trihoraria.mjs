export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-bihoraria-trihoraria',
  categoryId: 'daily_life',
  title: 'Тариф Bi-horária и Tri-horária: экономия на электричестве в peak/off-peak',
  tldr: 'В Португалии для doméstico BTN обычно доступны Simples, Bi-horária и Tri-horária. Bi-horária даёт дешёвые часы vazio ночью и часть выходных; Tri-horária делит день на vazio/cheias/ponta и выгодна только если вы реально переносите потребление. Переключение делается у comercializador, обычно бесплатно. В 2026 проверяйте расчёт в Simulador ERSE: чаще всего смысл появляется при расходе от 2 500 kWh/год и ≥30–40% потребления в vazio.',
  tags: ['eletricidade', 'erse', 'тарифы', 'vazio'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'Что означают Simples, Bi-horária и Tri-horária',
      content: [
        { kind: 'paragraph', text: 'В домашнем сегменте BTN — baixa tensão normal, обычно до 20,7 kVA — цена электричества состоит из potência contratada, энергии kWh, сетевых тарифов, IVA и мелких сборов. Time-of-use меняет именно цену kWh по часам.' },
        { kind: 'checklist', items: [
          'Simples — одна цена kWh весь день. Самый безопасный вариант, если вы не управляете потреблением.',
          'Bi-horária — две зоны: vazio дешевле, fora de vazio дороже. Подходит для бойлера, стиралки, посудомойки, EV, heat pump ночью.',
          'Tri-horária — три зоны: vazio дешевле, cheias средняя, ponta самая дорогая. Выгодна дисциплинированным домам и тем, кто избегает ponta.',
          'Ciclo diário — одинаковая логика часов каждый день, проще для новичков.',
          'Ciclo semanal — в выходные больше часов vazio; часто лучше для семей, которые стирают/готовят/заряжают авто на выходных.',
          'Коммерческая цена зависит от вашего comercializador: EDP Comercial, Galp, Goldenergy, Iberdrola, Endesa, Repsol и др.',
          'ERSE не продаёт электричество, но регулирует рынок и даёт официальный Simulador ERSE для сравнения.'
        ] }
      ]
    },
    {
      id: 'hours',
      title: 'Часы vazio / cheias / ponta в 2026',
      content: [
        { kind: 'paragraph', text: 'Точные расписания зависят от выбранного ciclo и континентальной Португалии / регионов. В счёте ищите “opção horária” и “ciclo”. Ниже — типовая сетка для Portugal Continental, которую используют поставщики; перед подписанием сверяйте PDF ficha contratual.' },
        { kind: 'substeps', items: [
          { id: 'bi-diario', title: 'Bi-horária, ciclo diário', content: [
            { kind: 'checklist', items: [
              'Vazio: примерно 22:00–08:00 каждый день.',
              'Fora de vazio: примерно 08:00–22:00 каждый день.',
              'Плюс: легко запомнить.',
              'Минус: воскресенье не становится полностью дешёвым.'
            ] }
          ] },
          { id: 'bi-semanal', title: 'Bi-horária, ciclo semanal', content: [
            { kind: 'checklist', items: [
              'Будни: vazio примерно 00:00–07:00.',
              'Суббота: vazio ночью, часть дня и поздний вечер; середина дня делится на зоны.',
              'Воскресенье: обычно весь день vazio.',
              'Плюс: хорошо, если основные стирки, бойлер, духовка и зарядка EV приходятся на выходные.',
              'Минус: будним вечером после работы цена уже fora de vazio.'
            ] }
          ] },
          { id: 'tri', title: 'Tri-horária', content: [
            { kind: 'checklist', items: [
              'Vazio — самые дешёвые часы, обычно ночь и значительная часть воскресенья в ciclo semanal.',
              'Cheias — средние часы.',
              'Ponta — самые дорогие часы утром и вечером в будни; зимой и летом интервалы отличаются.',
              'Tri-horária имеет смысл, если вы почти не включаете крупные нагрузки в ponta.',
              'Если дома электрическое отопление вечером, Tri-horária часто ухудшает счёт.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь только на слово “bi-horária дешевле”. Дешевле только vazio. Если основное потребление — 18:00–23:00 в будни, счёт может вырасти.' }
      ]
    },
    {
      id: 'when-worth',
      title: 'Когда это действительно выгодно',
      content: [
        { kind: 'paragraph', text: 'Грубое правило на 2026: Bi-horária чаще начинает окупаться при годовом потреблении от 2 500 kWh и если минимум 30–40% kWh можно перенести в vazio. Для квартир с 1–2 людьми, газовой плитой и расходом 1 200–1 800 kWh/год разница часто мизерная.' },
        { kind: 'checklist', items: [
          'Выгодно: электрический бойлер с таймером ночью.',
          'Выгодно: зарядка электромобиля дома после 00:00.',
          'Выгодно: стиралка/сушилка/посудомойка с delayed start.',
          'Выгодно: heat pump, если можно греть воду/дом ночью без потери комфорта.',
          'Выгодно: семья активно использует воскресенье для энергоёмких задач при ciclo semanal.',
          'Сомнительно: вы готовите на электричестве каждый вечер в 19:00–21:00.',
          'Сомнительно: кондиционер/обогрев работает вечером в будни.',
          'Сомнительно: вы снимаете жильё на короткий срок и не контролируете технику.'
        ] },
        { kind: 'paragraph', text: 'Самый практичный тест: возьмите 12 последних счетов, найдите consumo kWh/ano и сравните в Simulador ERSE. Если уже есть smart meter, в área de cliente E-REDES или у поставщика можно посмотреть профиль по 15/30/60 минутам и понять, сколько реально попадает в vazio.' }
      ]
    },
    {
      id: 'switch',
      title: 'Как переключиться у comercializador',
      content: [
        { kind: 'paragraph', text: 'Переключение тарифа — это изменение контракта с поставщиком, а не поход в Câmara Municipal. Обычно достаточно личного кабинета, телефона или формы на сайте comercializador. Смена поставщика или опции тарифа на свободном рынке для doméstico обычно бесплатна, если у вас нет отдельного периода fidelização за пакет услуг.' },
        { kind: 'checklist', items: [
          'Найдите CPE — Código de Ponto de Entrega — в старом счёте.',
          'Проверьте potência contratada: 3,45 / 4,6 / 5,75 / 6,9 kVA и т.д.; не меняйте её “на всякий случай”, это отдельная фиксированная стоимость.',
          'Выберите Simples, Bi-horária или Tri-horária.',
          'Выберите ciclo diário или ciclo semanal, если поставщик даёт выбор.',
          'Попросите ficha contratual и preço kWh по каждой зоне: vazio, fora de vazio или cheias/ponta.',
          'Уточните, есть ли fidelização, пакет с газом/страховкой/assistência и штраф за досрочный выход.',
          'Проверьте, что contador поддерживает multi-horário; современные smart meters обычно поддерживают.',
          'После первого счёта сверяйте: opção horária, ciclo, kWh по зонам и дату начала нового тарифа.'
        ] },
        { kind: 'warning', text: 'Если поставщик обещает “самый дешёвый тариф”, но не показывает цену kWh по зонам и potência contratada с IVA, сравнение бессмысленно. Просите значения в €/kWh и €/dia.' }
      ]
    },
    {
      id: 'mistakes',
      title: 'Типичные ошибки экспатов',
      content: [
        { kind: 'checklist', items: [
          'Сравнивают только цену kWh vazio и игнорируют дорогие ponta/fora de vazio.',
          'Берут Tri-horária при работе из дома и активной кухне вечером.',
          'Не проверяют ciclo semanal: в будни дешёвое окно может быть только глубокой ночью.',
          'Ставят potência contratada выше нужной: фиксированная часть растёт каждый день, даже если kWh мало.',
          'Не используют таймер бойлера: он греет воду в дорогие часы и съедает экономию.',
          'Не смотрят ERSE simulator и верят рекламному “desconto 20%”, который может применяться к ограниченной части цены.',
          'Забывают, что IVA на электричество зависит от компонентов счёта и лимитов потребления; итоговая цена не равна голому €/kWh из рекламы.',
          'При аренде не согласуют смену titular do contrato с landlord и продолжают платить по старому дорогому контракту.'
        ] },
        { kind: 'paragraph', text: 'Минимальная настройка для экономии: включите delayed start на стиралке и посудомойке, поставьте timer/smart plug на бойлер, переносите EV charging на ночь, а в Tri-horária избегайте духовки, сушилки и обогревателей в ponta.' }
      ]
    },
    {
      id: 'erse-check',
      title: 'Как посчитать через Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'Официальный Simulador ERSE — лучший способ не гадать. Он сравнивает предложения свободного и регулируемого рынка по вашему профилю, мощности и годовому потреблению.' },
        { kind: 'checklist', items: [
          'Откройте simulador.erse.pt.',
          'Выберите eletricidade или eletricidade + gás, если у вас bundle.',
          'Введите potência contratada из счёта.',
          'Введите годовое потребление kWh; если есть данные по зонам, внесите их отдельно.',
          'Сравните Simples и Bi-horária при одинаковой potência.',
          'Отдельно проверьте Tri-horária, если у вас EV, бойлер или heat pump с расписанием.',
          'Смотрите итоговую годовую стоимость, а не только “desconto”.',
          'Сохраните результат PDF/скриншотом перед звонком поставщику.'
        ] },
        { kind: 'warning', text: 'Цены на свободном рынке меняются. Перепроверяйте тариф минимум раз в 6 месяцев или после письма “alteração de preços” от comercializador.' }
      ]
    }
  ],
  costs: [
    { label: 'Смена опции тарифа у comercializador', amountEUR: 0, note: 'Обычно бесплатно для doméstico; возможны условия fidelização в пакетах с допуслугами.' },
    { label: 'Smart plug / таймер для бойлера', amountEURMin: 10, amountEURMax: 35, note: 'Не обязателен, но часто даёт больше экономии, чем сама смена тарифа без дисциплины.' },
    { label: 'Расход, при котором Bi-horária чаще имеет смысл', amountEUR: 0, note: 'Ориентир не в евро: от 2 500 kWh/год и ≥30–40% потребления в vazio; проверять в Simulador ERSE.' }
  ],
  sources: [
    { title: 'ERSE — информация о потребителях электроэнергии и тарифных опциях', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Simulador ERSE — официальный симулятор тарифов eletricidade/gás', url: 'https://www.simulador.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES — ciclos horários и счётчики для baixa tensão', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
