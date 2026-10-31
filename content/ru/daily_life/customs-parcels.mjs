export default {
  recentlyChangedAt: "2026-10-31",

  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Растаможка посылок из стран вне ЕС — как платить меньше',
  tldr: "Для интернет-заказов, отправленных потребителю из-за пределов ЕС, с 01.07.2026 действует переходная пошлина 3 € за товарную категорию в малых отправлениях до 150 €. С 01.11.2026 добавляется сбор ЕС за обработку 2 € за строку таможенной декларации (товарную категорию), а не просто за коробку; по разъяснению таможни Нидерландов он охватывает и интернет-отправления дороже 150 €. IVA/НДС и отдельная услуга перевозчика могут добавляться. Проверьте разбивку итоговой цены: IOSS относится к НДС и не означает отсутствия остальных платежей. Эти правила дистанционной торговли не следует автоматически переносить на личные подарки или багаж. Открывайте отслеживание и оплату вручную на официальном сайте перевозчика, а не по случайной SMS-ссылке.",
  tags: ['таможня', 'посылка', 'IVA', 'CTT', 'DHL'],
  estimatedReadMinutes: 6,
  changeSummary: "Посылки из-за пределов ЕС: сбор с 1 ноября",
  steps: [
    {
      "id": "legal-basis",
      "title": "Посылки из-за пределов ЕС: сбор с 1 ноября",
      "content": [
        {
          "kind": "paragraph",
          "text": "Для интернет-заказов, отправленных потребителю из-за пределов ЕС, с 01.07.2026 действует переходная пошлина 3 € за товарную категорию в малых отправлениях до 150 €. С 01.11.2026 добавляется сбор ЕС за обработку 2 € за строку таможенной декларации (товарную категорию), а не просто за коробку; по разъяснению таможни Нидерландов он охватывает и интернет-отправления дороже 150 €. IVA/НДС и отдельная услуга перевозчика могут добавляться. Проверьте разбивку итоговой цены: IOSS относится к НДС и не означает отсутствия остальных платежей. Эти правила дистанционной торговли не следует автоматически переносить на личные подарки или багаж. Открывайте отслеживание и оплату вручную на официальном сайте перевозчика, а не по случайной SMS-ссылке."
        }
      ]
    },
    {
      "id": "how-ctt-works",
      "title": "Как проходит посылка через CTT",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "c1",
              "title": "1. Поступление на таможню",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Посылка прибывает в сортировочный центр CTT в Cabo Ruivo (Lisboa). Таможня оценивает её по счёту и бланку CN22/CN23."
                }
              ]
            },
            {
              "id": "c2",
              "title": "2. Уведомление",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Получатель получает SMS + email со ссылкой на Portal CTT, где указан таможенный статус + сумма платежа."
                }
              ]
            },
            {
              "id": "c3",
              "title": "3. Оплата",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Способы: карта, MB WAY, Multibanco, SIBS MB",
                    "Сбор CTT за desalfandegamento — зависит от типа отправления и процедуры; актуальные тарифы на ctt.pt",
                    "Срок оплаты: 10 дней, затем возврат отправителю",
                    "Подтверждение личности — скан вашего Cartão de Cidadão/ВНЖ"
                  ]
                }
              ]
            },
            {
              "id": "c4",
              "title": "4. Доставка",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "CTT доставит домой (под подпись) или в Loja CTT (ближайший почтовый пункт). Срок после оплаты — 1–3 дня."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "couriers",
      "title": "Курьеры (DHL, FedEx, UPS) — дороже, но быстрее",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "💵 Сбор за обработку: DHL 15–40 €, FedEx 10–30 €, UPS 15–25 €",
            "⚡ Часто таможенное оформление уже сделано до прибытия",
            "📞 Курьер звонит, если нужны документы",
            "🏃 Срок — около 24–48 часов после прибытия в Португалию",
            "⚠️ Коммерческая посылка требует счёт с кодом HS"
          ]
        }
      ]
    },
    {
      "id": "diy",
      "title": "Самостоятельное оформление: сначала уточните условия",
      "content": [
        {
          "kind": "paragraph",
          "text": "До подачи собственной декларации согласуйте с перевозчиком доступность процедуры и требуемые данные. Упрощённая декларация H7 подходит не для всех товаров; ограничения и акцизы проверяются отдельно. Самостоятельная подача не освобождает от государственных пошлин, IVA или применимого сбора ЕС. Экономия на услуге перевозчика зависит от его условий, а не гарантируется."
        }
      ]
    },
    {
      "id": "common",
      "title": "Частые вопросы",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "q1",
              "title": "Подарок от друга — платить?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Формально до 45 € действует освобождение, но только если отправитель указал «GIFT» на CN22/CN23 и заявленная стоимость < 45 €. Выше — обычные правила."
                }
              ]
            },
            {
              "id": "q2",
              "title": "AliExpress / Shein — они платят IVA?",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "IOSS (Import One-Stop Shop) применяется к товарам собственной стоимостью до 150 € и не действует на подакцизные товары. Если маркетплейс зарегистрирован в IOSS, IVA взимается в момент покупки («VAT included» в чеке). Но внимание: IOSS закрывает только IVA — новую пошлину 3 €/категория (с 01.07.2026) и сбор за оформление это не отменяет; следите за уведомлениями CTT/курьера и за тем, как маркетплейсы перестроят цены."
                }
              ]
            },
            {
              "id": "q3",
              "title": "Книги / техника / одежда — разная пошлина?",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Книги: 0 % пошлины, IVA 6 %",
                    "Одежда: до 12 % пошлины + IVA 23 %",
                    "Электроника: 0–4 % пошлины + IVA 23 %",
                    "Украшения: 2,5 % пошлины + IVA 23 %",
                    "Косметика: 0 % пошлины + IVA 23 %",
                    "Игрушки: 0–4,7 % пошлины + IVA 23 %"
                  ]
                }
              ]
            },
            {
              "id": "q4",
              "title": "Посылка не пришла / потерялась",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "CTT — отслеживание + заявление через Livro de Reclamações (книга жалоб). Курьеры — страховка. Срок розыска — 30–60 дней."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  costs: [
    { label: 'IVA на товар > 0 €', amountEUR: 0, note: '23 % от стоимости + доставка' },
    { label: 'Сбор CTT за desalfandegamento', amountEURMin: 5, amountEURMax: 15, note: 'тариф зависит от продукта/процедуры; см. ctt.pt' },
    { label: 'Обработка DHL/UPS/FedEx', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Пошлина на посылку ≤ 150 € (с 01.07.2026)', amountEUR: 3, note: '3 € за каждую категорию товара в посылке' },
    { label: 'Таможенная пошлина (товар > 150 €)', amountEUR: 0, note: '0–17 % по HS' }
  ],
  sources: [
    {
      "title": "CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da União Europeia",
      "url": "https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-07-10"
    },
    {
      "title": "Portal das Finanças (налоговый портал) — Alfândegas",
      "url": "https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "Regulamento (UE) 952/2013 — Código Aduaneiro",
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952",
      "kind": "law",
      "language": "en",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "CTT — Encomendas do estrangeiro",
      "url": "https://www.ctt.pt/",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-04-22"
    },
    {
      "title": "ePortugal — Importar bens de países fora da UE",
      "url": "https://www.gov.pt/",
      "kind": "official",
      "language": "pt",
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
  lastVerified: '2026-07-10',
  verifyIntervalDays: 365
}