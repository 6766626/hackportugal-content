export default {
  recentlyChangedAt: "2026-10-31",
  changeSummary: "Посылки из-за пределов ЕС: сбор с 1 ноября",

  editorialVoice: 'hackportugal',
  id: 'ctt-mail-parcels-advanced',
  categoryId: 'daily_life',
  title: 'CTT — переадресация почты, посылки, растаможка онлайн',
  tldr: "В CTT доступны переадресация, хранение и отслеживание почты. Проверяйте тариф выбранной услуги и условия компенсации перед оплатой. Для интернет-посылок из-за пределов ЕС учитывайте IVA, применимую пошлину, сбор ЕС с 01.11.2026 и отдельное оформление перевозчика. IOSS решает вопрос НДС, но не отменяет остальные платежи.",
  tags: ['ctt', 'почта', 'посылки', 'растаможка'],
  estimatedReadMinutes: 5,
  steps: [
    {
      "id": "forwarding",
      "title": "📬 Переадресация почты при переезде",
      "content": [
        {
          "kind": "paragraph",
          "text": "При смене адреса в Португалии (внутренний переезд) или отъезде за границу — CTT перенаправит всю поступающую корреспонденцию."
        },
        {
          "kind": "substeps",
          "items": [
            {
              "id": "f1",
              "title": "Reencaminhamento Postal (перенаправление)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "3 мес: 17,55 €",
                    "6 мес: 28,90 €",
                    "12 мес: 51,30 €",
                    "Заказ: ctt.pt → «Mudança de morada» или в любом отделении CTT",
                    "Начинает работать через 3 рабочих дня после заказа",
                    "Перенаправляются все письма и незарегистрированные посылки",
                    "Заказные отправления (registada) → уведомление идёт на новый адрес, сама посылка — в исходное отделение, нужно забрать"
                  ]
                }
              ]
            },
            {
              "id": "f2",
              "title": "Reserva Domiciliária (удержание)",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "9,60 € за период до 2 мес",
                    "Почта не доставляется, а удерживается в вашем отделении CTT",
                    "Полезно при длительном отпуске или командировке",
                    "Забрать всё в отделении в указанную дату"
                  ]
                }
              ]
            },
            {
              "id": "f3",
              "title": "Mudança de Morada — официально",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Не путать с reencaminhamento. Смена адреса в Finanças, IRN, AIMA — через ePortugal «Mudança de morada» бесплатно, но изменяет не почтовую доставку, а официальные записи."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "parcels-eu",
      "title": "📦 Посылки из ЕС",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Без пошлин и IVA — ЕС единый рынок",
            "Приходят через 2-7 дней стандартной доставкой",
            "Трекинг: на ctt.pt по номеру или через приложение CTT",
            "Если не застали дома: извещение («aviso») в почтовом ящике, 14 дней на получение в отделении",
            "Потом → возврат отправителю"
          ]
        }
      ]
    },
    {
      "id": "parcels-non-eu",
      "title": "Посылки из-за пределов ЕС: сбор с 1 ноября",
      "content": [
        {
          "kind": "paragraph",
          "text": "Для интернет-заказов, отправленных потребителю из-за пределов ЕС, с 01.07.2026 действует переходная пошлина 3 € за товарную категорию в малых отправлениях до 150 €. С 01.11.2026 добавляется сбор ЕС за обработку 2 € за строку таможенной декларации (товарную категорию), а не просто за коробку; по разъяснению таможни Нидерландов он охватывает и интернет-отправления дороже 150 €. IVA/НДС и отдельная услуга перевозчика могут добавляться. Проверьте разбивку итоговой цены: IOSS относится к НДС и не означает отсутствия остальных платежей. Эти правила дистанционной торговли не следует автоматически переносить на личные подарки или багаж. Открывайте отслеживание и оплату вручную на официальном сайте перевозчика, а не по случайной SMS-ссылке."
        }
      ]
    },
    {
      "id": "iossi",
      "title": "IOSS: что уже оплачено",
      "content": [
        {
          "kind": "paragraph",
          "text": "IOSS позволяет магазину собрать IVA при покупке подходящих товаров в отправлении до 150 €. Сохраните счёт и подтверждение IVA. Не путайте IVA с пошлиной 3 € за категорию и сбором ЕС 2 € за строку декларации с ноября. Если IVA требуют повторно, перед оплатой уточните, были ли корректно переданы данные IOSS. Для отправлений дороже 150 € действует обычная процедура, а ставка пошлины зависит от классификации товара."
        }
      ]
    },
    {
      "id": "issues",
      "title": "🆘 Проблемы с посылкой",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "i1",
              "title": "Потерялась посылка",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Трек показывает \"Delivered\", но ничего нет → проверить консьержа, соседей",
                    "Подать жалобу на ctt.pt → «Apresentar reclamação»",
                    "Срок расследования: 10-30 дней",
                    "Компенсация за потерянную: до 50 € (обычная), до 500 € (Registado), до объявленной стоимости (Seguro)",
                    "Международные через EMS — вам доплатит страна-отправитель"
                  ]
                }
              ]
            },
            {
              "id": "i2",
              "title": "Посылка задержалась в таможне",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Проверить статус на ctt.pt, ищите \"Aguarda desalfandegamento\"",
                    "Если нет SMS о Desalfandegamento — позвонить CTT 707 262 626",
                    "Иногда нужно вручную отправить счёт в CTT (на e-mail desalfandegamento@ctt.pt)",
                    "Срок удержания в таможне: 30 дней, потом → возврат"
                  ]
                }
              ]
            },
            {
              "id": "i3",
              "title": "Повреждена при доставке",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Сфотографировать повреждение + упаковку ДО открытия",
                    "Подать жалобу в 8 дней",
                    "Возврат по seguro / минимум для обычной посылки"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  costs: [
    { label: 'Reencaminhamento 3 мес', amountEUR: 17.55 },
    { label: 'Reencaminhamento 6 мес', amountEUR: 28.90 },
    { label: 'Reencaminhamento 12 мес', amountEUR: 51.30 },
    { label: 'Reserva Domiciliária', amountEUR: 9.60 },
    { label: 'Сбор CTT за растаможку (150-1000 €)', amountEUR: 12, note: 'зависит от товара; ~14 € при льготной IVA' },
    { label: 'Сбор ЕС за категорию (с 1 июля 2026)', amountEUR: 3, note: 'за каждую категорию товара, посылки до 150 €' },
    { label: 'IVA на посылки из стран вне ЕС', amountEUR: 0, note: '23% от стоимости+доставки' },
    { label: 'Пошлина (>150 €, до 1 июля 2026)', amountEUR: 0, note: '0-17% от стоимости+доставки' }
  ],
  sources: [
    {
      "title": "CTT — Desalfandegamento Online",
      "url": "https://www.ctt.pt/",
      "kind": "company",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "AT — Alfândega",
      "url": "https://info.portaldasfinancas.gov.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "EU Taxation — IOSS",
      "url": "https://taxation-customs.ec.europa.eu/ioss_en",
      "kind": "official",
      "language": "en",
      "lastRetrieved": "2026-04-22"
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
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}