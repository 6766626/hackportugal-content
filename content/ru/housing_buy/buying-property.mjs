export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Покупка недвижимости в Португалии — пошагово',
  tldr: 'Иностранцы могут покупать недвижимость без ограничений. Путь: NIF → поиск → CPCV + sinal 10% → финансирование/юридическая проверка → escritura у нотариуса → регистрация. Налоги: **IMT** — marginal progressive scale с abatements (для own permanent residence — 0% до определённого порога, далее ставки растут поэтапно до фиксированной верхней ставки); **IS 0.8%**. Общие расходы 8-12% сверх цены. Важно: с 7 октября 2023 (Lei 56/2023) Golden Visa через покупку жилой недвижимости **отменён** — этот маршрут ВНЖ больше недоступен для новых заявок.\n\n**Молодёжная льгота до 35 лет** введена **Decreto-Lei 48-A/2024** (не DL 44/2024).',
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
          'Licença de utilização — практика после Simplex Urbanístico изменилась (presentation для escritura уже не требуется в прежнем виде), но проверять статус использования всё равно нужно для покупателя',
          'Ficha Técnica da Habitação — для построек после 2004 года; presentation для escritura также упрощён, но содержимое полезно для покупателя',
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
            { kind: 'paragraph', text: 'Обычно делает нотариус в электронном виде.\n\n**Право собственности переходит** действительным титулом купли-продажи (escritura pública/documento particular autenticado); registo predial критически важен для opposability против третьих лиц — без него вы не защищены от последующих сделок продавца. Регистрируйте незамедлительно.' }
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
          'IMI (муниципальный налог) — для urban residential **0.3–0.45% от VPT** (0.8% — для прежней rural ставки); ставку назначает Câmara Municipal. Уплата частями (1/2/3 раза в год) зависит от размера суммы',
          'Если планируете сдавать в аренду — регистрация в Finanças + возможно лицензия AL для краткосрочной аренды'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT — для own permanent residence (continente)', note: 'marginal progressive scale с abatements до определённого порога (0% базовый порог), затем растущие ставки; выше высшего порога — фиксированная ставка. Точные цифры на 2026 — см. AT/CIMT' },
    { label: 'IMT — для secondary/прочей residential', note: 'те же escalões, но без 0%-первого порога; начинается с 1%' },
    { label: 'Молодёжная льгота до 35 лет — основное жильё', amountEUR: 0, note: 'IMT+IS 0% по **Decreto-Lei 48-A/2024** до определённого ценового порога; условия (резидентство, отсутствие предыдущей собственности, основное жильё) — проверять в актуальном тексте' },
    { label: 'IMT для покупателей из налоговых офшоров', amountEUR: 0, note: 'фиксированная ставка 10% независимо от стоимости' },
    { label: 'IS (гербовый)', amountEUR: 0, note: '0.8% от стоимости (для молодых до 35 в пределах льготы = 0%)' },
    { label: 'Escritura + нотариус', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Регистрация', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Адвокат', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Страховка жилья ежегодно', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI ежегодно (urban residential)', amountEURMin: 100, amountEURMax: 3000, note: '0.3–0.45% VPT; ставка от Câmara Municipal. Уплата 1/2/3 раза в год по размеру' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Pedir registo predial', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Comprar casa', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Certificado Energético', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}