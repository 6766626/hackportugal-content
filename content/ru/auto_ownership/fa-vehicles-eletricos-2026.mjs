export default {
  editorialVoice: 'hackportugal',
  id: 'fa-vehicles-eletricos-2026',
  categoryId: 'auto_ownership',
  title: 'Fundo Ambiental: субсидия на электромобиль в 2026',
  tldr: 'Fundo Ambiental ежегодно выдаёт ваучеры на мобилиidade elétrica: в последнем полном цикле Avisos 2025 бюджет был 13,5 млн €, для физлиц — 4 000 € на новый 100% электрический легковой M1 до 38 500 € с НДС и сдачей старого авто на утилизацию; PHEV не проходили. На 03.05.2026 отдельный Aviso 2026 ещё нужно проверять на fundoambiental.pt: правила, лимиты и даты действуют только после публикации нового Aviso.',
  tags: ['fundoambiental', 'электромобиль', 'subsidio', 'auto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за субсидия',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental — государственный фонд, который ежегодно открывает программу Incentivo pela Introdução no Consumo de Veículos de Emissões Nulas. Это не скидка у дилера, а компенсация после покупки: вы покупаете транспорт, подаёте заявку онлайн, ждёте валидацию и получаете перевод на IBAN.' },
        { kind: 'paragraph', text: 'Важно: правила меняются каждый год. На 03.05.2026 на сайте Fundo Ambiental нужно проверять именно новый Aviso 2026. Последний полный опубликованный ориентир — Avisos Mobilidade Elétrica 2025: общий бюджет 13,5 млн €, лимиты по категориям и принцип “пока есть бюджет”.' },
        { kind: 'warning', text: 'Не подписывайте compra e venda только “ради субсидии”. Право на выплату возникает не из рекламы дилера, а из конкретного Aviso. Если 2026 Aviso изменит лимит цены, требование утилизации или список категорий, применяются новые правила.' }
      ]
    },
    {
      id: 'eligible-vehicles',
      title: 'Что обычно проходит: BEV, фургоны, велосипеды',
      content: [
        { kind: 'paragraph', text: 'В 2025 программа была ориентирована на veículos de emissões nulas — транспорт с нулевыми выбросами на месте эксплуатации. Для легковых авто это означало 100% электрический автомобиль, а не plug-in hybrid.' },
        { kind: 'checklist', items: [
          'Легковой 100% электрический M1 для физлица: ориентир 2025 — 4 000 €.',
          'Максимальная цена легкового авто по Aviso 2025: 38 500 € с IVA и всеми обязательными расходами в счёте.',
          'PHEV / híbrido plug-in: в Avisos 2025 не считались “emissões nulas” для этой поддержки.',
          'Новый лёгкий грузовой 100% электрический N1: ориентир 2025 — 6 000 €.',
          'Cargo bike / bicicleta de carga: ориентир 2025 — 50% стоимости до 1 500 €.',
          'Электровелосипед: ориентир 2025 — 50% стоимости до 500 €.',
          'Обычный велосипед: ориентир 2025 — 50% стоимости до 150 €.',
          'Электромотоцикл / мопед: ориентир 2025 — 50% стоимости до 500 €.',
          'Зарядка в condomínio: в 2025 была отдельная категория для condomínios, обычно не равна субсидии на личный wallbox в частном доме.'
        ] },
        { kind: 'warning', text: 'Покупка подержанного авто, импортированного авто с первой регистрацией за пределами правил Aviso, renting/leasing без перехода права собственности и авто дороже лимита часто не проходят. Проверяйте формулировку “aquisição” и “primeira matrícula” в текущем Aviso.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Кто может подать заявку в Португалии',
      content: [
        { kind: 'paragraph', text: 'Для экспата ключевой вопрос — не гражданство, а резидентность и налоговая чистота. В типовой модели Fundo Ambiental физлицо должно быть резидентом в Португалии, иметь NIF, доступ к Portal do Fundo Ambiental и IBAN, на который фонд перечислит деньги.' },
        { kind: 'checklist', items: [
          'NIF и доступ к autenticação.gov.pt / Chave Móvel Digital или другой поддерживаемой авторизации.',
          'Португальский адрес и статус резидента: ВНЖ, EU registration certificate или другой законный статус сам по себе не заменяет условия конкретного Aviso, но нужен для нормальной налоговой идентификации.',
          'Отсутствие долгов перед Autoridade Tributária: обычно нужна declaração de não dívida или согласие на проверку.',
          'Отсутствие долгов перед Segurança Social: даже если вы не работаете, портал может запросить подтверждение.',
          'IBAN на имя заявителя; лучше PT IBAN, хотя SEPA IBAN формально должен приниматься, на практике PT IBAN снижает трение.',
          'Счёт-фактура и recibo должны быть на того же заявителя, который подаёт заявку.',
          'Обычно один стимул на категорию/заявителя в рамках года, но точный лимит смотрите в Aviso 2026.',
          'Для легкового BEV по модели 2025 требовалась утилизация старого авто с ДВС; новый Aviso может сохранить или изменить это условие.'
        ] },
        { kind: 'warning', text: 'Если вы только переезжаете и ещё не являетесь резидентом Португалии, не рассчитывайте на Fundo Ambiental как на гарантированную скидку. Сначала проверьте eligibility в Aviso: “pessoas singulares residentes em território nacional” и документы, которые фонд принимает как доказательство.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы перед подачей',
      content: [
        { kind: 'paragraph', text: 'Заявка подаётся онлайн, но отказ чаще всего приходит из-за мелочей: не тот владелец в Documento Único Automóvel, цена выше лимита, нет сертификата утилизации или счёт оформлен на супруга.' },
        { kind: 'checklist', items: [
          'Fatura и recibo / comprovativo de pagamento на имя заявителя.',
          'Documento Único Automóvel или certificado de matrícula нового авто.',
          'Подтверждение первой регистрации в Португалии и даты matrícula в период, разрешённый Aviso.',
          'Comprovativo de IBAN на имя заявителя.',
          'Declaração de situação regularizada в Finanças или autorização para consulta.',
          'Declaração de situação regularizada в Segurança Social или autorização para consulta.',
          'Для категории с утилизацией: certificado de destruição от centro autorizado de tratamento de veículos em fim de vida.',
          'Доказательство, что старый автомобиль принадлежал заявителю в срок, требуемый Aviso, если такое условие есть.',
          'Технические характеристики транспорта: marca, modelo, versão, VIN/quadro, potência, тип батареи — в счёте или приложении.',
          'Для cargo bike/e-bike: счёт с чётким указанием модели и соответствия категории, а не просто “bicicleta”.'
        ] },
        { kind: 'warning', text: 'Цена 38 500 € в Aviso 2025 считалась с IVA. Дилерские “кампании” иногда показывают цену без обязательных расходов, ISV/IUC/доставки/документации. Для фонда важна сумма в fatura.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать на fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-aviso', title: '1. Найдите актуальный Aviso', content: [
            { kind: 'paragraph', text: 'Зайдите на fundoambiental.pt → Avisos → Mobilidade Elétrica. Откройте именно Aviso 2026, когда он опубликован, а не PDF прошлого года. Скачайте Regulamento/Aviso и список FAQ.' }
          ] },
          { id: 'register', title: '2. Авторизуйтесь и создайте candidatura', content: [
            { kind: 'paragraph', text: 'Используйте NIF и цифровую авторизацию. В анкете выберите категорию: легковой BEV, N1, cargo bike, e-bike, мотоцикл или зарядка condomínio — названия категорий должны совпадать с Aviso.' }
          ] },
          { id: 'upload', title: '3. Загрузите документы', content: [
            { kind: 'paragraph', text: 'Файлы лучше назвать понятно: fatura.pdf, recibo.pdf, dua.pdf, iban.pdf, certidao-at.pdf, certidao-ss.pdf, certificado-destruicao.pdf. Проверьте, что NIF, имя и VIN совпадают во всех документах.' }
          ] },
          { id: 'submit', title: '4. Отправьте и следите за статусом', content: [
            { kind: 'paragraph', text: 'После submissão заявка получает номер. Очередность обычно зависит от корректной подачи и наличия бюджета; неполный пакет может уйти на исправление и потерять темп.' }
          ] },
          { id: 'payment', title: '5. Получите выплату', content: [
            { kind: 'paragraph', text: 'После validação Fundo Ambiental перечисляет сумму на IBAN. Срок выплаты не гарантирован: в прошлых циклах ожидание могло занимать недели или месяцы из-за проверки документов и бюджетного лимита.' }
          ] }
        ] }
      ]
    },
    {
      id: 'strategy-2026',
      title: 'Практическая стратегия на 2026',
      content: [
        { kind: 'paragraph', text: 'Если вы покупаете электромобиль весной 2026, действуйте как бухгалтер: сначала проверьте Aviso, затем выбирайте модель и оформляйте документы. Дилер может помочь, но ответственность за заявку остаётся на вас.' },
        { kind: 'checklist', items: [
          'До заказа проверьте, опубликован ли Aviso 2026 и открыт ли prazo de candidaturas.',
          'Выбирайте авто с запасом ниже лимита: например, не 38 490 €, если дилер может добавить despesas administrativas.',
          'Спросите у дилера заранее, будет ли fatura с полной ценой, VIN и датой поставки.',
          'Если требуется утилизация, не сдавайте старое авто “в трейд-ин” без certificado de destruição от уполномоченного центра.',
          'Не оформляйте авто на супруга/компанию, если заявку будете подавать вы как физлицо.',
          'Проверьте отсутствие долгов в Finanças и Segurança Social до подачи, а не после отказа.',
          'Сохраните PDF всех документов и скриншот submissão.',
          'Не закладывайте субсидию как обязательный первый взнос: фонд платит постфактум и только после проверки.'
        ] },
        { kind: 'warning', text: 'Fundo Ambiental — конкурсный бюджет, а не социальное право. Даже при формальном соответствии фонд может закрыть приём после исчерпания средств. В 2026 окончательные суммы, квоты и даты берите только из опубликованного Aviso 2026.' }
      ]
    }
  ],
  costs: [
    { label: 'Легковой 100% электрический M1 для физлица', amountEUR: 4000, note: 'Ориентир Avisos 2025; цена авто до 38 500 € с IVA; в 2026 подтвердить по новому Aviso.' },
    { label: 'Лёгкий грузовой 100% электрический N1', amountEUR: 6000, note: 'Ориентир Avisos 2025; условия зависят от категории заявителя и Aviso.' },
    { label: 'Cargo bike / bicicleta de carga', amountEURMax: 1500, note: 'Ориентир Avisos 2025: до 50% стоимости, но не выше лимита.' },
    { label: 'Электровелосипед', amountEURMax: 500, note: 'Ориентир Avisos 2025: до 50% стоимости.' },
    { label: 'Обычный велосипед', amountEURMax: 150, note: 'Ориентир Avisos 2025: до 50% стоимости.' },
    { label: 'Электромотоцикл или мопед', amountEURMax: 500, note: 'Ориентир Avisos 2025: до 50% стоимости.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — официальный портал', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Aviso 06/2025: Veículos de Emissões Nulas (Mobilidade Verde Passageiros)', url: 'https://www.fundoambiental.pt/avisos-anteriores/apoios-20242/mitigacao-as-alteracoes-climaticas/incentivo-pela-aquisicao-de-veiculos-de-emissoes-nulas-ano-20252026-mobilidade-verde--passageiros.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
