export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Растаможка посылок из стран вне ЕС — как платить меньше',
  tldr: '🆕 С 01.07.2026 беспошлинного порога 150 € больше нет: посылки из стран вне ЕС стоимостью до 150 € теперь платят фиксированную пошлину 3 € за каждую категорию товара (2 разных типа товара в посылке = 6 €) — поверх IVA, который берётся с любой посылки ещё с 2021 года, и сбора за оформление. Свыше 150 € — общий режим: IVA + пошлина по коду товара (0–17 %). Это удар по Shein/Temu/AliExpress и частным посылкам. Оформление идёт через получателя: CTT или курьер (DHL, FedEx, UPS) присылают SMS со ссылкой на оплату (карта, MB WAY, Multibanco). Сбор CTT за растаможку — от ~7 € + IVA; у курьеров — 10–40 €. Актуальные тарифы — на ctt.pt.',
  tags: ['таможня', 'посылка', 'IVA', 'CTT', 'DHL'],
  estimatedReadMinutes: 6,
  recentlyChangedAt: '2026-07-09',
  changeSummary: '🆕 С 01.07.2026 отменено освобождение от пошлины для посылок до 150 € из стран вне ЕС: теперь фикс 3 € за категорию товара + IVA + сбор за оформление (решение Совета ЕС, переходный режим до таможенной реформы). Свыше 150 € — общий режим без изменений.',
  steps: [
    {
      id: 'legal-basis',
      title: 'Правовой каркас 2026',
      content: [
        { kind: 'paragraph', text: 'Директива EU 2006/112 (VAT) + Регламент 952/2013 (Таможенный кодекс). В Португалии реализация — Código do IVA, Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Подарок физлицу от физлица: освобождение до 45 € (если не коммерческий)',
          '📦 Коммерческая посылка ≤ 150 € (с 01.07.2026): IVA 23 % + фиксированная пошлина 3 € за КАЖДУЮ категорию товара в посылке (2 разных типа = 6 €)',
          '📦 Коммерческая > 150 €: IVA + таможенная пошлина по коду HS (0–17 %) — без изменений',
          '📄 Любая товарная посылка из стран вне ЕС должна быть задекларирована через IOSS или импорт',
          '🌍 Региональные ставки IVA: у Madeira и Açores свои стандартные ставки (Açores — 16 %, Madeira — 22 % на 2026 год; уточняйте актуальные)',
          '🍷 Акцизы (IEC): алкоголь, табак, энергоносители — сверх IVA. Парфюм акцизом в ЕС не облагается — для него действуют обычные пошлина и IVA, без акциза',
          '🆕 Почему так: решение Совета ЕС — переходный упрощённый режим перед большой таможенной реформой ЕС; фикс 3 €/категория действует с 01.07.2026 до полноценной реформы'
        ]}
      ]
    },
    {
      id: 'how-ctt-works',
      title: 'Как проходит посылка через CTT',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Поступление на таможню', content: [
            { kind: 'paragraph', text: 'Посылка прибывает в сортировочный центр CTT в Cabo Ruivo (Lisboa). Таможня оценивает её по счёту и бланку CN22/CN23.' }
          ]},
          { id: 'c2', title: '2. Уведомление', content: [
            { kind: 'paragraph', text: 'Получатель получает SMS + email со ссылкой на Portal CTT, где указан таможенный статус + сумма платежа.' }
          ]},
          { id: 'c3', title: '3. Оплата', content: [
            { kind: 'checklist', items: [
              'Способы: карта, MB WAY, Multibanco, SIBS MB',
              'Сбор CTT за desalfandegamento — зависит от типа отправления и процедуры; актуальные тарифы на ctt.pt',
              'Срок оплаты: 10 дней, затем возврат отправителю',
              'Подтверждение личности — скан вашего Cartão de Cidadão/ВНЖ'
            ]}
          ]},
          { id: 'c4', title: '4. Доставка', content: [
            { kind: 'paragraph', text: 'CTT доставит домой (под подпись) или в Loja CTT (ближайший почтовый пункт). Срок после оплаты — 1–3 дня.' }
          ]}
        ]}
      ]
    },
    {
      id: 'couriers',
      title: 'Курьеры (DHL, FedEx, UPS) — дороже, но быстрее',
      content: [
        { kind: 'checklist', items: [
          '💵 Сбор за обработку: DHL 15–40 €, FedEx 10–30 €, UPS 15–25 €',
          '⚡ Часто таможенное оформление уже сделано до прибытия',
          '📞 Курьер звонит, если нужны документы',
          '🏃 Срок — около 24–48 часов после прибытия в Португалию',
          '⚠️ Коммерческая посылка требует счёт с кодом HS'
        ]}
      ]
    },
    {
      id: 'diy',
      title: 'Самостоятельная растаможка — дешевле',
      content: [
        { kind: 'paragraph', text: 'Через Portal Aduaneiro на portaldasfinancas.gov.pt → «Alfândegas». Declaração H7 — упрощённая декларация для недорогих посылок до 150 € (с 01.07.2026 по ним начисляется фикс 3 €/категория); она не подходит для подакцизных товаров и товаров с ограничениями.' },
        { kind: 'checklist', items: [
          '📝 Заполнить H7: описание товара, код CN (HS), стоимость, страна',
          '💰 Система рассчитает IVA + пошлину',
          '💳 Оплата через Multibanco',
          '📋 Распечатать подтверждение',
          '📬 Передать на месте получения (Loja CTT, таможенный склад)',
          '💶 Экономия: самостоятельная декларация избавляет от сбора DHL/UPS за обработку (30–40 €)'
        ]},
        { kind: 'warning', text: 'Требует португальского и понимания кодов HS. Для сложных случаев лучше оставить оформление CTT или курьеру.' }
      ]
    },
    {
      id: 'common',
      title: 'Частые вопросы',
      content: [
        { kind: 'substeps', items: [
          { id: 'q1', title: 'Подарок от друга — платить?', content: [
            { kind: 'paragraph', text: 'Формально до 45 € действует освобождение, но только если отправитель указал «GIFT» на CN22/CN23 и заявленная стоимость < 45 €. Выше — обычные правила.' }
          ]},
          { id: 'q2', title: 'AliExpress / Shein — они платят IVA?', content: [
            { kind: 'paragraph', text: 'IOSS (Import One-Stop Shop) применяется к товарам собственной стоимостью до 150 € и не действует на подакцизные товары. Если маркетплейс зарегистрирован в IOSS, IVA взимается в момент покупки («VAT included» в чеке). Но внимание: IOSS закрывает только IVA — новую пошлину 3 €/категория (с 01.07.2026) и сбор за оформление это не отменяет; следите за уведомлениями CTT/курьера и за тем, как маркетплейсы перестроят цены.' }
          ]},
          { id: 'q3', title: 'Книги / техника / одежда — разная пошлина?', content: [
            { kind: 'checklist', items: [
              'Книги: 0 % пошлины, IVA 6 %',
              'Одежда: до 12 % пошлины + IVA 23 %',
              'Электроника: 0–4 % пошлины + IVA 23 %',
              'Украшения: 2,5 % пошлины + IVA 23 %',
              'Косметика: 0 % пошлины + IVA 23 %',
              'Игрушки: 0–4,7 % пошлины + IVA 23 %'
            ]}
          ]},
          { id: 'q4', title: 'Посылка не пришла / потерялась', content: [
            { kind: 'paragraph', text: 'CTT — отслеживание + заявление через Livro de Reclamações (книга жалоб). Курьеры — страховка. Срок розыска — 30–60 дней.' }
          ]}
        ]}
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
    { title: 'CTT — Fim da isenção de direitos aduaneiros em compras até 150 € fora da União Europeia', url: 'https://www.ctt.pt/particulares/receber/desalfandegar/fim-da-isencao-de-direitos-aduaneiros-em-compras-ate-150-euros-fora-da-uniao-europeia', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'Portal das Finanças (налоговый портал) — Alfândegas', url: 'https://aduaneiro.portaldasfinancas.gov.pt/jsp/main.jsp', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (UE) 952/2013 — Código Aduaneiro', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Encomendas do estrangeiro', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importar bens de países fora da UE', url: 'https://www.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 365
}