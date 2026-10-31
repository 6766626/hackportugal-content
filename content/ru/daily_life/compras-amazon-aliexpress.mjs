export default {
  recentlyChangedAt: "2026-10-31",

  editorialVoice: 'hackportugal',
  id: 'compras-amazon-aliexpress',
  categoryId: 'daily_life',
  title: 'Amazon ES/PT, AliExpress и eBay в Португалии: доставка, IVA и пошлины',
  tldr: "Смотрите, откуда реально отправляют товар, а не только на домен магазина. Товар со склада ЕС, уже выпущенный в свободное обращение, обычно не требует импортного оформления покупателем. Для отправки из-за пределов ЕС учитывайте НДС, пошлину и с 1 ноября 2026 новый сбор ЕС за обработку.",
  tags: ['amazon', 'aliexpress', 'ctt', 'пошлины'],
  estimatedReadMinutes: 6,
  changeSummary: "Посылки из-за пределов ЕС: сбор с 1 ноября",
  steps: [
    {
      "id": "platforms",
      "title": "Проверьте продавца и место отправки",
      "content": [
        {
          "kind": "paragraph",
          "text": "В Amazon, AliExpress, eBay и других маркетплейсах смотрите конкретного продавца, страну отправки, условия возврата и состав итоговой цены. Домен страны и надпись «доставка в Португалию» не доказывают отправку со склада ЕС. Товар в свободном обращении, отправленный из ЕС, обычно не требует нового импортного оформления у покупателя."
        }
      ]
    },
    {
      "id": "tax-rules",
      "title": "Посылки из-за пределов ЕС: сбор с 1 ноября",
      "content": [
        {
          "kind": "paragraph",
          "text": "Для интернет-заказов, отправленных потребителю из-за пределов ЕС, с 01.07.2026 действует переходная пошлина 3 € за товарную категорию в малых отправлениях до 150 €. С 01.11.2026 добавляется сбор ЕС за обработку 2 € за строку таможенной декларации (товарную категорию), а не просто за коробку; по разъяснению таможни Нидерландов он охватывает и интернет-отправления дороже 150 €. IVA/НДС и отдельная услуга перевозчика могут добавляться. Проверьте разбивку итоговой цены: IOSS относится к НДС и не означает отсутствия остальных платежей. Эти правила дистанционной торговли не следует автоматически переносить на личные подарки или багаж. Открывайте отслеживание и оплату вручную на официальном сайте перевозчика, а не по случайной SMS-ссылке."
        }
      ]
    },
    {
      "id": "ctt-clearance",
      "title": "Как работает CTT desalfandegamento",
      "content": [
        {
          "kind": "paragraph",
          "text": "Если посылка из-за пределов ЕС приходит обычной почтой, почти всегда её обрабатывает CTT. Статус может поменяться на “A aguardar procedimentos declarativos” или “Desalfandegamento”. Тогда нужно зайти в портал CTT, подтвердить данные и оплатить начисления."
        },
        {
          "kind": "checklist",
          "items": [
            "Откройте tracking на ctt.pt и проверьте, требуется ли “desalfandegar”.",
            "Подготовьте invoice/recibo: скрин заказа с ценой товара, доставкой, валютой и именем получателя.",
            "Если IVA уже оплачен на AliExpress/eBay/Amazon, приложите подтверждение “VAT included” или invoice с IOSS/VAT.",
            "Проверьте NIF и адрес: имя на заказе должно совпадать с документами или хотя бы быть очевидно связано с получателем.",
            "Оплатите IVA, возможную пошлину и serviço de apresentação/desalfandegamento CTT онлайн.",
            "После оплаты посылка обычно выпускается и идёт на доставку; в пиковые периоды задержка может быть 3–10 рабочих дней.",
            "Если не предоставить документы вовремя, посылку могут вернуть отправителю."
          ]
        },
        {
          "kind": "warning",
          "text": "CTT не “придумывает налог”: он собирает суммы по импортным правилам Autoridade Tributária e Aduaneira. Но ошибки бывают — особенно когда магазин взял IVA по IOSS, а номер IOSS не попал в почтовые данные. В таком случае подавайте invoice и спорьте через портал CTT до оплаты, если система позволяет."
        }
      ]
    },
    {
      "id": "marketplace-tactics",
      "title": "Перед оплатой заказа",
      "content": [
        {
          "kind": "paragraph",
          "text": "Сохраните страницу товара и заказ с детализацией налогов и доставки. Уточните, кто оплачивает импортные расходы и возврат. Не рассчитывайте на освобождение только потому, что стоимость ниже 150 €. При сомнении запросите у продавца полный расчёт до оплаты."
        }
      ]
    },
    {
      "id": "how-to-estimate",
      "title": "Посчитайте полную цену",
      "content": [
        {
          "kind": "paragraph",
          "text": "Сложите товар, доставку, применимые пошлины, сбор ЕС за обработку и услугу перевозчика; отдельно проверьте IVA и какие суммы уже включены в checkout. «VAT included» подтверждает только НДС. Для обычных импортных ставок важны код товара и происхождение; не используйте одну ставку для всех товаров. Сравните итог с предложением, отправляемым из ЕС."
        }
      ]
    }
  ],
  costs: [
    { label: 'IVA на импорт в mainland Portugal', amountEURMin: 0, amountEURMax: 0, note: 'Ставка 23% от налоговой базы; сумма зависит от цены товара, доставки, пошлины и сборов.' },
    { label: 'Порог для упрощённого IOSS', amountEUR: 150, note: 'До 150 € маркетплейс может собрать IVA при checkout; свыше 150 € нужна обычная импортная декларация.' },
    { label: 'Обычная доставка Amazon.es в Portugal mainland', amountEURMin: 0, amountEURMax: 8, note: 'Зависит от Prime, суммы заказа, продавца и товара; типичный срок 2–5 рабочих дней.' },
    { label: 'Доставка AliExpress economy из Китая', amountEURMin: 0, amountEURMax: 5, note: 'Часто бесплатная или дешёвая; типичный срок 3–8 недель, быстрее при Choice/EU-warehouse.' },
    { label: 'Оформление импорта CTT/курьером', amountEURMin: 2, amountEURMax: 30, note: 'Зависит от стоимости, типа отправления и оператора; актуальный тариф проверяйте на ctt.pt перед оплатой.' }
  ],
  sources: [
    {
      "title": "Portal das Finanças: informação aduaneira и импортные правила",
      "url": "https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Compras/Encomendas_postais/Encomendas_Postais_Comercio_Eletronico/Paginas/default.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "Portal das Finanças: IVA и taxas em vigor",
      "url": "https://pauta.portaldasfinancas.gov.pt/pt/faqs/Pages/importacoes-via-internet-impostos.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: desalfandegar encomendas",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index/desalfandegar-encomendas",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT: receber encomendas internacionais e custos de desalfandegamento",
      "url": "https://www.ctt.pt/empresas/encomendas-e-correio/receber/desalfandegar-encomendas/index",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-28"
    },
    {
      "title": "CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da UE (01.07.2026)",
      "url": "https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-07-10"
    },
    {
      "title": "Council of the EU — small parcels, reviewed 23.10.2026",
      "url": "https://www.consilium.europa.eu/en/policies/eu-action-influx-of-small-parcels/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    },
    {
      "title": "Dutch Customs — EU handling fee, updated 22.10.2026",
      "url": "https://www.douane.nl/en/themes/import-and-export/import/e-commerce/handling-fee-for-e-commerce/",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-10-31"
    }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
