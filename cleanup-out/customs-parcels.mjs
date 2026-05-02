export default {
  editorialVoice: 'hackportugal',
  id: 'customs-parcels',
  categoryId: 'daily_life',
  title: 'Растаможка посылок из стран вне ЕС — как платить меньше',
  tldr: 'С 01.07.2021 отменён порог 22 € — сейчас любая посылка из стран вне ЕС облагается IVA 23 % + таможенной пошлиной, если стоимость выше 150 €. Оформление проходит через получателя: CTT или курьер (DHL, FedEx, UPS) присылают SMS со ссылкой на оплату. Оплата онлайн: карта, MB WAY, Multibanco. Сбор CTT за обработку — около 1,80 €, у курьеров — 10–40 €. Через Portal das Alfândegas дешевле, но сложнее.',
  tags: ['таможня', 'посылка', 'IVA', 'CTT', 'DHL'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Правовой каркас 2026',
      content: [
        { kind: 'paragraph', text: 'Директива EU 2006/112 (VAT) + Регламент 952/2013 (Таможенный кодекс). В Португалии реализация — Código do IVA, Código das Alfândegas.' },
        { kind: 'checklist', items: [
          '🎁 Подарок физлицу от физлица: освобождение до 45 € (если не коммерческий)',
          '📦 Коммерческая посылка < 150 €: только IVA 23 %, без пошлины',
          '📦 Коммерческая > 150 €: IVA + таможенная пошлина (0–17 % по коду HS)',
          '📄 Любая товарная посылка из стран вне ЕС должна быть задекларирована через IOSS или импорт',
          '🌍 Исключение: специальные зоны Мадейра и Азорские острова — пониженная IVA (16 % / 9 %)',
          '🍷 Акцизы (табак, алкоголь, парфюмерия) — сверх IVA'
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
              'Сбор CTT за обработку: 1,80 €',
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
        { kind: 'paragraph', text: 'Через Portal Aduaneiro на portaldasfinancas.gov.pt → «Alfândegas» → «Declaração H7» (для посылок < 150 €).' },
        { kind: 'checklist', items: [
          '📝 Заполнить H7: описание товара, код CN (HS), стоимость, страна',
          '💰 Система рассчитает IVA + пошлину',
          '💳 Оплата через Multibanco',
          '📋 Распечатать подтверждение',
          '📬 Передать на месте получения (Loja CTT, таможенный склад)',
          '💶 Экономия: 1,80 € CTT, но 30–40 € у DHL/UPS'
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
            { kind: 'paragraph', text: 'Крупные маркетплейсы после IOSS (с 2021) платят IVA на стадии покупки. Если видите поле «VAT included» в чеке — всё ок, в Португалии не платите. Если нет — CTT уведомит.' }
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
    { label: 'Сбор CTT за обработку', amountEUR: 1.80 },
    { label: 'Обработка DHL/UPS/FedEx', amountEURMin: 10, amountEURMax: 40 },
    { label: 'Таможенная пошлина (товар > 150 €)', amountEUR: 0, note: '0–17 % по HS' }
  ],
  sources: [
    { title: 'Portal das Finanças (налоговый портал) — Alfândegas', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulamento (UE) 952/2013 — Código Aduaneiro', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0952', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'CTT — Encomendas do estrangeiro', url: 'https://www.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importar bens de países fora da UE', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}