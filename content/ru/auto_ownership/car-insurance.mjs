export default {
  editorialVoice: 'hackportugal',
  id: 'car-insurance',
  categoryId: 'auto_ownership',
  title: 'Автостраховка в Португалии — RC обязательна, Casco — по желанию',
  tldr: 'Responsabilidade Civil (страхование гражданской ответственности) — обязательное ОСАГО для каждого зарегистрированного в Португалии автомобиля (Decreto-Lei 291/2007)\.\n\nПокрывает ущерб третьим лицам. Casco / Danos Próprios — покрытие вашего автомобиля, по желанию.\n\nЦены 2026: базовая RC от 180 €/год, полный пакет — 400–1200 €. Онлайн-покупка на сайтах Tranquilidade / Fidelidade / Zurich / Ageas или через брокеров. Новый водитель (2 года стажа) доплачивает 20–50 %.',
  tags: ['страховка', 'rc', 'casco', 'автострахование'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Типы покрытия',
      content: [
        { kind: 'substeps', items: [
          { id: 'rc', title: 'RC — Responsabilidade Civil Obrigatória', content: [
            { kind: 'checklist', items: [
              'Обязательна по закону (Decreto-Lei 291/2007)',
              'Покрывает ущерб третьим лицам (автомобили, люди)',
              'Минимальные страховые суммы RC: установлены законом/ASF (см. ст. 12 DL 291/2007); важно различать лимит на пострадавшего и лимит на событие — проверяйте актуальные суммы в публикациях ASF',
              'Certificado Internacional de Seguro Automóvel / antiga Carta Verde — для EU/EEA португальская RC действует автоматически, но сертификат полезно иметь; для некоторых стран вне EU/EEA он может быть обязателен',
              'Без действующей RC: для легкового авто coima обычно **500–2500 €**, возможна apreensão/imobilização do veículo и ответственность перед Fundo de Garantia Automóvel/потерпевшими'
            ]}
          ]},
          { id: 'danos-p', title: 'Danos Próprios / Casco', content: [
            { kind: 'checklist', items: [
              'Покрывает повреждения вашего автомобиля',
              'Виды: полное покрытие, ограниченное (кража/пожар), от всех рисков',
              'Обычно требуется при лизинге или кредите',
              'Франшиза (franquia) — от 250 до 2500 €'
            ]}
          ]},
          { id: 'assist', title: 'Assistência em Viagem', content: [
            { kind: 'paragraph', text: 'Эвакуатор + помощь на дороге. Не обязательна, но очень полезна. Часто входит в пакет за 30–60 €/год. Подробнее в гайде «Пробитое колесо на трассе».' }
          ]},
          { id: 'vida', title: 'Ocupantes', content: [
            { kind: 'paragraph', text: 'Страхование жизни пассажиров на случай ДТП. Дополнительно 30–80 €/год.' }
          ]},
          { id: 'legal', title: 'Proteção Jurídica', content: [
            { kind: 'paragraph', text: 'Юридическая помощь при спорах / исках. 20–50 €/год.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Как купить',
      content: [
        { kind: 'checklist', items: [
          '💻 Сайты страховщиков (Tranquilidade, Fidelidade, Zurich, Ageas, Allianz, Liberty, MGEN, Ocidental)',
          '🔍 Брокеры (агрегаторы): офлайн около банков, онлайн — MB Easy, MudeyYa',
          '🏦 Через банк — часто привязывается к ипотеке',
          '📄 Нужны: DUA, CC/ВНЖ, carta de condução, NIF',
          '📅 Действует с выбранной даты',
          '💳 Оплата ежемесячно / ежеквартально / ежегодно — ежегодно обычно дешевле',
          '📱 Полис — в цифровом виде, на электронную почту; Carta Verde — PDF',
          '🚗 В машине держать: полис или Carta Verde (для проверки)'
        ]}
      ]
    },
    {
      id: 'factors',
      title: 'Что влияет на цену',
      content: [
        { kind: 'checklist', items: [
          '🚗 Модель / объём / мощность',
          '📅 Возраст водителя (< 25 → +30 %; > 70 → +15 %)',
          '📜 Стаж (< 2 лет → +40 %)',
          '🏅 Бонус-малус (BM): 1–14, скидка до 60 %',
          '📍 Регион проживания (Lisboa > Coimbra > Algarve)',
          '🚙 Пробег в год (< 10 000 / < 20 000 / безлимитный)',
          '🏠 Парковка: гараж / улица',
          '📈 Sinistralidade — прошлые ДТП',
          '🔒 Иммобилайзер / GPS — скидка 5–15 %'
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'Как заявить страховой случай (sinistro)',
      content: [
        { kind: 'checklist', items: [
          '📝 Declaração Amigável (европротокол) на месте ДТП (см. гайд)',
          '📷 Фото места, повреждений, номеров',
          '📧 Уведомить страховую в течение 8 дней',
          '🔧 Ремонт — в мастерской сети страховщика или согласованной мастерской (смета)',
          '💶 Franquia — первые 250–2500 € платит клиент',
          '📅 Срок рассмотрения — 30–60 дней',
          '⚖️ Отказ → обжалование через ASF (Autoridade de Supervisão de Seguros)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          '🛍️ Сравнить 3–5 предложений — цены могут различаться в 2 раза',
          '📅 Смена страховщика — за 30 дней до окончания, письменное заявление об отмене',
          '🚗 При продаже авто страховка продавца **не переходит** к покупателю — покупатель оформляет свою RC до начала движения. Продавец уведомляет страховщика о продаже и может запросить прекращение договора/возврат части премии или перенос полиса на другой автомобиль',
          '🆘 Номер ASF 213 847 900 — для жалоб',
          '🌍 Carta Verde обязательна для поездки в другие страны ЕС',
          '📉 После 5 лет без аварий — бонус-малус идёт до минимума'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Базовая RC (опытный водитель 1.4 л)', amountEURMin: 180, amountEURMax: 280 },
    { label: 'RC + частичное Casco', amountEURMin: 400, amountEURMax: 700 },
    { label: 'Все виды покрытия (полный пакет)', amountEURMin: 700, amountEURMax: 1500 },
    { label: 'Coima за вождение без RC (легковой авто)', amountEURMin: 500, amountEURMax: 2500 }
  ],
  sources: [
    { title: 'Decreto-Lei 291/2007 — Seguro automóvel', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34522075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Seguro automóvel', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}