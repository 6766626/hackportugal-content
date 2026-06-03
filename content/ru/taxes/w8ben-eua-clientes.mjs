export default {
  editorialVoice: 'hackportugal',
  id: 'w8ben-eua-clientes',
  categoryId: 'taxes',
  title: 'W-8BEN: как снизить удержание США с 30% до treaty-ставки для Stripe, Amazon и IBKR',
  tldr: 'W-8BEN — форма IRS для физлиц-нерезидентов США. Если вы налоговый резидент Португалии, она подтверждает foreign status и позволяет применить Portugal–US tax treaty: обычно 0% для услуг/бизнес-дохода без постоянного представительства в США, 10% для части royalties по Amazon KDP и 15% для дивидендов США у брокера вроде IBKR. Форма действует до 31 декабря третьего следующего года: подписали в апреле 2026 — обновить до 31.12.2029.',
  tags: ['w8ben', 'irs', 'treaty', 'налоги', 'ibkr'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-does',
      title: 'Что делает W-8BEN',
      content: [
        { kind: 'paragraph', text: 'По умолчанию США могут удерживать 30% с некоторых выплат иностранцам: dividends, royalties, certain platform payments. W-8BEN сообщает платёжному агенту, что вы не US person, и даёт основание применить treaty rate вместо 30%.' },
        { kind: 'paragraph', text: 'Для резидента Португалии применим Convention Between the United States of America and the Portuguese Republic for the Avoidance of Double Taxation. На практике это не одна ставка, а ставка по типу дохода.' },
        { kind: 'checklist', items: [
          'услуги фрилансера, оказанные из Португалии: обычно 0% в США, если нет permanent establishment / fixed base в США',
          'business profits: Article 7, обычно 0% в США без permanent establishment',
          'independent personal services: Article 15, обычно 0% без fixed base в США и при отсутствии длительного физического присутствия в США',
          'royalties, включая часть выплат Amazon KDP: Article 13, для Portugal–US treaty обычно до 10%, а не 0%',
          'дивиденды акций США у IBKR: Article 10, обычно 15% для портфельного инвестора',
          'capital gains по обычным акциям США: обычно 0% withholding в США, но декларируются в Португалии',
          'форма не отменяет португальский IRS: резидент Португалии декларирует worldwide income'
        ] },
        { kind: 'warning', text: 'W-8BEN — только для физлиц. Если получатель платежа — португальская Lda, US LLC, UK LTD или другая компания, обычно нужна W-8BEN-E или другая форма. US citizens, green card holders и лица с US tax residency не используют W-8BEN.' }
      ]
    },
    {
      id: 'when-platforms-ask',
      title: 'Где её просят: Stripe, Amazon, IBKR',
      content: [
        { kind: 'paragraph', text: 'Форма редко отправляется напрямую в IRS. Обычно вы заполняете tax interview внутри платформы, а платформа хранит W-8BEN как withholding agent.' },
        { kind: 'checklist', items: [
          'Amazon KDP: просит tax interview перед выплатами royalties; без treaty может удерживать 30%',
          'Amazon Associates / affiliate: квалификация дохода может отличаться от KDP royalties; проверяйте wording в tax interview',
          'IBKR, Schwab, брокеры США: W-8BEN нужен для reduced withholding по дивидендам США — обычно 15% вместо 30%',
          'Stripe / Stripe Atlas / маркетплейсы: форма может требоваться для подтверждения foreign status и нулевого withholding по услугам',
          'US-клиент через платформу: если это оплата услуг, выполненных из Португалии, часто используется 0% по Article 7 или 15',
          'US LLC: если вы владелец foreign-owned disregarded LLC, форма зависит от структуры и типа платежа; не заполняйте W-8BEN механически',
          'если платформа не даёт выбрать Portugal treaty, проверьте, что страна налогового резидентства указана как Portugal, а не страна паспорта'
        ] }
      ]
    },
    {
      id: 'how-to-fill',
      title: 'Как заполнить ключевые поля',
      content: [
        { kind: 'paragraph', text: 'Названия полей могут отличаться в онлайн-интервью, но логика та же, что в IRS Form W-8BEN.' },
        { kind: 'checklist', items: [
          'Line 1 / Name: имя и фамилия как в паспорте или ВНЖ',
          'Line 2 / Country of citizenship: гражданство, например Russian Federation, Brazil, Ukraine; это не обязательно Portugal',
          'Line 3 / Permanent residence address: реальный адрес проживания в Португалии; не используйте PO Box или адрес посредника',
          'Line 4 / Mailing address: заполняйте только если почтовый адрес отличается',
          'Line 5 / U.S. TIN: обычно пусто, если у вас нет SSN/ITIN; некоторые ситуации требуют ITIN, но для большинства брокеров и платформ достаточно foreign TIN',
          'Line 6a / Foreign tax identifying number: ваш португальский NIF',
          'Line 8 / Date of birth: дата рождения в формате платформы; в бумажной форме IRS обычно MM-DD-YYYY',
          'Line 9 / Treaty country: Portugal, если вы налоговый резидент Португалии',
          'Line 10 / Special rates and conditions: заполняется, когда платформа требует конкретную treaty article и ставку',
          'Signature: подписывает сам beneficial owner; агент/бухгалтер — только с полномочиями'
        ] },
        { kind: 'warning', text: 'NIF в W-8BEN — это не “португальский аналог SSN”, а foreign TIN для treaty claim. Если вы только переехали и ещё не стали налоговым резидентом Португалии, нельзя автоматически заявлять Portugal treaty benefits.' }
      ]
    },
    {
      id: 'line-10-examples',
      title: 'Примеры Line 10 для treaty rate',
      content: [
        { kind: 'paragraph', text: 'Line 10 нужен не всегда. Брокеры часто применяют Article 10 автоматически после выбора Portugal. Amazon и некоторые платформы могут просить указать article, rate и explanation.' },
        { kind: 'substeps', items: [
          {
            id: 'services',
            title: 'Услуги / фриланс из Португалии — 0%',
            content: [
              { kind: 'paragraph', text: 'Для услуг, выполненных физически из Португалии, обычно используют Article 7 Business Profits или Article 15 Independent Personal Services. Смысл: доход облагается в Португалии, если у вас нет permanent establishment / fixed base в США.' },
              { kind: 'checklist', items: [
                'Article: 7 или 15 — зависит от формулировки платформы',
                'Rate of withholding: 0%',
                'Type of income: services / business profits / independent personal services',
                'Explanation: resident of Portugal, no permanent establishment or fixed base in the United States, services performed outside the United States'
              ] }
            ]
          },
          {
            id: 'amazon-kdp',
            title: 'Amazon KDP royalties — обычно 10%',
            content: [
              { kind: 'paragraph', text: 'KDP чаще классифицирует выплаты авторам как royalties. Для Portugal–US treaty проверяйте Article 13: ставка по royalties обычно ограничена 10% gross amount. Это лучше, чем 30%, но не 0%.' },
              { kind: 'checklist', items: [
                'Article: 13',
                'Rate of withholding: 10%',
                'Type of income: royalties / copyright royalties',
                'Explanation: beneficial owner is a resident of Portugal under the Portugal–US income tax treaty'
              ] }
            ]
          },
          {
            id: 'ibkr-dividends',
            title: 'IBKR и дивиденды США — обычно 15%',
            content: [
              { kind: 'paragraph', text: 'По акциям США брокер удерживает налог у источника с dividends. Для налогового резидента Португалии treaty rate обычно 15% по Article 10 вместо стандартных 30%.' },
              { kind: 'checklist', items: [
                'Article: 10',
                'Rate of withholding: 15%',
                'Type of income: dividends',
                'Line 10 часто не заполняется вручную: IBKR применяет ставку после валидной W-8BEN',
                'удержанный в США налог затем учитывается в Portugal IRS как foreign tax credit в пределах португальских правил'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'Не копируйте чужую ставку из интернета. Treaty rate зависит от типа дохода. Для резидента Португалии royalties по Amazon KDP — не то же самое, что услуги фрилансера или дивиденды у брокера.' }
      ]
    },
    {
      id: 'validity-and-renewal',
      title: 'Срок действия и когда обновлять',
      content: [
        { kind: 'paragraph', text: 'W-8BEN действует с даты подписания до последнего дня третьего следующего календарного года. Если подписали 15.04.2026, форма действует до 31.12.2029. Платформа обычно заранее попросит renewal.' },
        { kind: 'checklist', items: [
          'обновляйте форму при смене страны налогового резидентства',
          'обновляйте при смене имени, адреса или NIF',
          'обновляйте, если получили US green card, SSN/ITIN или стали US tax resident',
          'обновляйте, если доход стал выплачиваться компании, а не вам лично',
          'сохраняйте PDF/скриншот tax interview и дату отправки',
          'сверяйте фактическое удержание в annual tax statement: 1042-S, broker activity statement, Amazon tax report',
          'если удержали 30% из-за просрочки формы, платформа не всегда делает refund; иногда нужен US tax filing, что дорого и долго'
        ] }
      ]
    },
    {
      id: 'portugal-tax',
      title: 'Что потом декларировать в Португалии',
      content: [
        { kind: 'paragraph', text: 'W-8BEN не является португальской налоговой декларацией. Если вы налоговый резидент Португалии, Portugal IRS облагает worldwide income: доходы из США надо включать в Modelo 3 IRS в правильной категории.' },
        { kind: 'checklist', items: [
          'дивиденды США: обычно Categoria E; возможен foreign tax credit за 15% withholding в США',
          'capital gains по акциям/ETF: обычно Categoria G; США чаще не удерживают налог, но Португалия облагает по своим правилам',
          'Amazon KDP royalties: квалификация зависит от фактов — royalties, авторские доходы или self-employment; проверьте с contabilista',
          'фриланс-услуги: часто Categoria B / recibos verdes, если деятельность ведётся как самозанятый',
          'US withholding не заменяет IVA, Segurança Social и португальский IRS',
          'если вы применяете IFICI или другой режим, W-8BEN всё равно заполняется отдельно для США',
          'храните отчёты платформ минимум 4 года, лучше 10 лет для личного архива'
        ] },
        { kind: 'warning', text: 'Если у вас NHR legacy, IFICI, empresa, US LLC, partnership income, stock options или крупные royalties, не полагайтесь на tax interview платформы как на налоговую консультацию. Ошибка в W-8BEN может привести к недоудержанию в США или неправильной декларации в Португалии.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача W-8BEN через платформу', amountEUR: 0, note: 'IRS fee нет; форма обычно заполняется онлайн у withholding agent' },
    { label: 'Получение ITIN, если реально нужен', amountEUR: 0, note: 'IRS не берёт пошлину, но Certified Acceptance Agent или пересылка документов могут стоить дополнительно' },
    { label: 'Консультация contabilista / tax adviser', amountEURMin: 80, amountEURMax: 250, note: 'Типичный разовый разбор treaty, IRS/Portugal декларации и классификации дохода' }
  ],
  sources: [
    {
      title: 'IRS: About Form W-8BEN',
      url: 'https://www.irs.gov/forms-pubs/about-form-w-8-ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: Instructions for Form W-8BEN',
      url: 'https://www.irs.gov/instructions/iw8ben',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'U.S. Treasury: Tax Treaties',
      url: 'https://home.treasury.gov/policy-issues/tax-policy/treaties',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRS: Portugal income tax treaty PDF',
      url: 'https://www.irs.gov/pub/irs-trty/portugal.pdf',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
