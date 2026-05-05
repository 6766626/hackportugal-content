export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Покупка недвижимости в Португалии — пошагово',
  tldr: 'Иностранцы могут покупать недвижимость без ограничений. Путь: NIF → поиск → CPCV + sinal 10% → финансирование/юридическая проверка → escritura у нотариуса → регистрация. Налоги: IMT (1-10% прогрессивно), IS 0,8%. Общие расходы 8-12% сверх цены. Важно: с 7 октября 2023 (Lei 56/2023) Golden Visa через покупку жилой недвижимости отменён — этот маршрут ВНЖ больше недоступен для новых заявок. Важно: с 7 октября 2023 (Lei 56/2023) Golden Visa через покупку жилой недвижимости отменён — этот маршрут ВНЖ больше недоступен для новых заявок.',
  tags: ['покупка', 'недвижимость', 'escritura', 'imt'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'preparation',
      title: 'Подготовка',
      content: [
        { kind: 'checklist', items: [
          'Получить NIF',
          'Открыть счёт в португальском банке (ActivoBank, Millennium, Caixa)',
          'Определить бюджет (цена + ~10% расходов)',
          'Решить: наличные или ипотека (см. отдельный гайд)',
          'Выбрать адвоката — рекомендуется для нерезидентов, € 500-2000'
        ]}
      ]
    },
    {
      id: 'search',
      title: 'Поиск',
      content: [
        { kind: 'checklist', items: [
          'Idealista.pt — главный агрегатор',
          'Imovirtual.com',
          'Casa Sapo, Supercasa, ERA, Century 21',
          'OLX Imóveis — часто от собственников',
          'Риелторы — комиссию платит продавец (обычно 5%)'
        ]},
        { kind: 'warning', text: 'Цены 2026 в Lisboa: € 4000-8000/м² центр, € 3000-5000/м² пригороды. Algarve: € 2500-6000/м². Север (Braga, Coimbra): € 1500-3000/м².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Юридическая проверка (до подписания)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — статус собственности, обременения',
          'Caderneta Predial Urbana — налоговая карточка',
          'Licença de utilização — лицензия на жилое использование',
          'Ficha Técnica da Habitação — технический паспорт (для построек после 2004 года)',
          'Certificado Energético (CE) — энергосертификат (обязателен)',
          'Отсутствие задолженностей перед condomínio (товариществом собственников)',
          'Отсутствие задолженностей по IMI'
        ]},
        { kind: 'paragraph', text: 'Всё это проверяет адвокат — около 1-2 недель.' }
      ]
    },
    {
      id: 'cpcv',
      title: 'CPCV (Contrato Promessa de Compra e Venda)',
      content: [
        { kind: 'paragraph', text: 'Предварительный договор. Сильнее, чем простое предложение. Обязывает обе стороны.' },
        { kind: 'checklist', items: [
          'Стороны + NIF',
          'Описание недвижимости + матрикальный номер',
          'Цена + способ оплаты',
          'Задаток (sinal) 10-20% — передаётся продавцу',
          'Срок до escritura (обычно 30-90 дней)',
          'Штрафы за расторжение: покупатель отказался — теряет sinal; продавец — возвращает sinal × 2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (нотариальный акт)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Подготовка документов у нотариуса', content: [
            { kind: 'paragraph', text: 'Нотариус собирает актуальные выписки, проверяет стороны, готовит проект.' }
          ]},
          { id: 'e2', title: '2. Оплата налогов ДО escritura', content: [
            { kind: 'checklist', items: [
              'IMT — через Portal das Finanças (налоговый портал), подтверждение на escritura',
              'IS 0,8% — автоматически',
              'При ипотеке — IS на ипотеку 0,6%'
            ]}
          ]},
          { id: 'e3', title: '3. Подписание', content: [
            { kind: 'paragraph', text: 'У нотариуса. Обе стороны + переводчик, если нужно. Оплата продавцу банковским чеком / переводом. Банк выдаёт ипотечные средства.' }
          ]},
          { id: 'e4', title: '4. Регистрация в Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Обычно делает нотариус в электронном виде. Право собственности переходит с регистрацией.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'После покупки',
      content: [
        { kind: 'checklist', items: [
          'Уведомить Finanças о смене адреса (если это основное жильё)',
          'Переоформить ЖКХ на себя (EDP, Águas, газ)',
          'Страховка жилья обязательна, если есть ипотека',
          'IMI (муниципальный налог) — платится ежегодно в мае/августе, 0,3-0,8% от фискальной стоимости',
          'Если планируете сдавать в аренду — регистрация в Finanças + возможно лицензия AL для краткосрочной аренды'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT для основного жилья (до € 106 346)', amountEUR: 0, note: 'OE 2026 порог (escalões подняты на 2%); для непостоянного жилья — от 1%' },
    { label: 'IMT для основного жилья (€ 106 346 – € 145 471)', amountEURMin: 0, amountEURMax: 2800, note: '2%' },
    { label: 'IMT (€ 145 471 – € 198 347)', amountEURMin: 2800, amountEURMax: 6900, note: '5%' },
    { label: 'IMT (€ 198 347 – € 330 539)', amountEURMin: 6900, amountEURMax: 18000, note: '7%' },
    { label: 'IMT (€ 330 539 – € 661 078)', amountEURMin: 18000, amountEURMax: 60000, note: '8%' },
    { label: 'IMT (€ 661 078+)', amountEURMin: 40000, amountEURMax: 100000, note: 'фиксированная ставка 6% либо 7,5% > € 1 150 853' },
    { label: 'Молодые покупатели до 35 лет (основное жильё ≤ € 330 539)', amountEUR: 0, note: 'IMT+IS 0% по Decreto-Lei 44/2024; условия (резидентство, основное жильё, без предыдущей собственности и т.п.) проверять в актуальном тексте' },
    { label: 'IMT для покупателей из налоговых офшоров', amountEUR: 0, note: 'фиксированная ставка 10% — независимо от стоимости' },
    { label: 'IS (гербовый)', amountEUR: 0, note: '0,8% от стоимости (для молодых до 35 = 0%)' },
    { label: 'Escritura + нотариус', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Регистрация', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Адвокат', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Страховка жилья ежегодно', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI ежегодно', amountEURMin: 100, amountEURMax: 3000, note: '0,3-0,45% фискальной стоимости, ставку назначает Câmara Municipal' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Pedir registo predial', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Comprar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Certificado Energético', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}