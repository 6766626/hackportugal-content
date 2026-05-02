export default {
  editorialVoice: 'hackportugal',
  id: 'via-card-electronic-toll',
  categoryId: 'auto_trips',
  title: 'Via Verde и альтернативы — все способы платить за дороги',
  tldr: 'Via Verde — электронное устройство для проезда без остановок. Это не единственный способ. Альтернативы: Via Card (одноразовая), предоплаченная Toll Card для туристов, постоплата через CTT / Payshop в течение 5 дней, EasyToll для иностранных номеров. Если проехали Scut (бывшую дорогу без пунктов оплаты) без устройства — у вас есть 5 рабочих дней, чтобы заплатить на почте, иначе штраф ×25.',
  tags: ['via verde', 'toll', 'платные дороги', 'scut'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'options',
      title: 'Какие варианты существуют',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'Via Verde (лучший вариант для резидентов)', content: [
            { kind: 'checklist', items: [
              'Электронный идентификатор (зелёная коробочка на лобовом стекле)',
              'Автоматическое списание с банковского счёта / карты',
              'Работает на ВСЕХ платных дорогах, парковках EMEL, АЗС Galp/Repsol (скидки), паромах Transtejo, Soflusa',
              'Установка: заказать онлайн на viaverde.pt, приходит почтой, или получить в отделениях Via Verde/CTT',
              'Залог 27,50 € возвратный + 2 €/мес',
              'Бесплатно (без абонентской платы): подписка Via Verde Gratuita для тех, у кого <8 €/мес трафика'
            ]}
          ]},
          { id: 'o2', title: 'Via Card (для кратких поездок)', content: [
            { kind: 'paragraph', text: 'Пластиковая предоплаченная карта на определённую сумму (5, 10, 20 €). Используется в «электронных» пунктах оплаты на старых платных дорогах (A1, A2) — вставляете в устройство Via Verde на контактной полосе. НЕ работает на Scut (дорогах без пунктов оплаты).' }
          ]},
          { id: 'o3', title: 'EasyToll (для иностранных номеров)', content: [
            { kind: 'paragraph', text: 'При первом въезде на Scut привязываете банковскую карту к номерному знаку на терминалах EasyToll (есть у границы и в аэропортах). После этого проезд списывается автоматически. Действует 30 дней.' }
          ]},
          { id: 'o4', title: 'TollCard (предоплаченная для туристов)', content: [
            { kind: 'paragraph', text: 'Карта с балансом 5/10/20/40 €. Активируется по SMS → затем списывается баланс. Купить можно на заправках Galp, Repsol, BP. Для коротких поездок.' }
          ]},
          { id: 'o5', title: 'CTT / Payshop (после факта)', content: [
            { kind: 'paragraph', text: 'Если проехали Scut без Via Verde и не привязали EasyToll — в течение 5 рабочих дней оплатите на почте CTT или в Payshop по номерному знаку. После 5 дней — штраф + судебный процесс через AT.' }
          ]}
        ]}
      ]
    },
    {
      id: 'scut-explained',
      title: 'Что такое ex-SCUT и какие сейчас бесплатны',
      content: [
        { kind: 'paragraph', text: 'SCUT (Sem Cobrança ao Utilizador) — бывшие дороги без пунктов оплаты. С течением времени часть из них стала платной через электронные порталы (без кабинок), а с **01.01.2025** правительство **отменило сборы** на ряде ex-SCUT — A22, A23, A24, A25 и частях A28, плюс A4 и A13/A13-1. Перед поездкой проверяйте текущий статус каждой трассы (Infraestruturas de Portugal, Via Verde) — режим может ещё меняться.' },
        { kind: 'checklist', items: [
          '✅ С 01.01.2025 БЕСПЛАТНО: A22 Algarve, A23 Beira Interior, A24 Interior Norte, A25 Beira Litoral, части A28 Norte Litoral, A4 Marão, A13/A13-1',
          '💳 Платные через pórtico eletrónico (электронные порталы, без кабинок): A29 Espinho-Ovar, A41/A42 Porto circular и оставшиеся участки',
          '📷 Признак платной дороги: портал над дорогой с табличкой «Pórtico Eletrónico»',
          '🟢 При проезде с Via Verde: зелёный свет = прошло; ⚠️ без Via Verde — статус «нужно заплатить» через CTT/Payshop в указанный срок (обычно от 48 ч до 15 раб. дней для португальских номеров)'
        ]}
      ]
    },
    {
      id: 'proehali-bez',
      title: 'Проехали Scut без Via Verde — что делать',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Если авто с португальским номером', content: [
            { kind: 'checklist', items: [
              '5 рабочих дней на оплату на почте CTT / Payshop',
              'Возьмите номерной знак + дату/примерное время проезда',
              'После 5 дней — уведомление от AT со штрафом ×25 стоимости проезда (обычно 25-125 €)',
              'Дополнительно судебные издержки 30-100 €',
              'Оплачивать лучше быстро — минимальный штраф действует в течение 15 дней'
            ]}
          ]},
          { id: 'p2', title: 'Если авто с иностранным номером', content: [
            { kind: 'checklist', items: [
              'Уведомление идёт через национальный регистрационный орган вашей страны',
              'Номер EU: действует Директива 2011/82/EU — информация передаётся, штраф приходит',
              'Не EU (РФ, UA, BY, CH, USA): письмо от Infraestruturas de Portugal приходит по адресу регистрации',
              'Если игнорировать — при следующем въезде в Португалию на границе могут остановить и потребовать оплатить',
              'Решение: привязать EasyToll до поездки либо установить Via Verde Visitors'
            ]}
          ]},
          { id: 'p3', title: 'Оспорить штраф', content: [
            { kind: 'paragraph', text: 'Через AT portaldasfinancas.gov.pt → e-balcão. Основания: сломанное Via Verde, дубликат штрафа, неправильный номер. Срок — 15 дней с получения уведомления.' }
          ]}
        ]}
      ]
    },
    {
      id: 'via-verde-visitors',
      title: 'Via Verde Visitors (для краткосрочных поездок)',
      content: [
        { kind: 'checklist', items: [
          'Электронное устройство как обычное Via Verde, но с фиксированным сроком 1 неделя / 2 недели / 1 месяц',
          'Цена: 6 / 8 / 12 € + предоплаченный баланс',
          'Заказать онлайн или в отделениях Via Verde',
          'Для арендных машин — часто входит в пакет аренды (проверяйте)',
          'После возврата — залог возвращается'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Via Verde — залог (возвратный)', amountEUR: 27.50 },
    { label: 'Via Verde — абонентская плата', amountEUR: 2, note: '/мес' },
    { label: 'Via Verde Gratuita (при <8 €/мес трафика)', amountEUR: 0 },
    { label: 'Via Card (предоплаченная)', amountEURMin: 5, amountEURMax: 40 },
    { label: 'Via Verde Visitors (1 неделя)', amountEUR: 6 },
    { label: 'EasyToll активация', amountEUR: 0, note: '+проезд' },
    { label: 'Штраф за неоплату проезда', amountEURMin: 25, amountEURMax: 125, note: '~25× стоимости проезда' }
  ],
  sources: [
    { title: 'Via Verde — официальный портал', url: 'https://www.viaverde.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — portagens', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EasyToll — привязка для иностранцев', url: 'https://www.portugaltolls.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Директива 2011/82/EU — трансграничное взыскание', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0082', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}