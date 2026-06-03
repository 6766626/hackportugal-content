export default {
  editorialVoice: 'hackportugal',
  id: 'residential-parking',
  categoryId: 'auto_trips',
  title: 'Резидентская парковка — Лиссабон, Кашкаиш, Сетубал',
  tldr: 'В крупных городах муниципалитет выдаёт резидентам льготные парковочные разрешения (dístico de residente) — от бесплатного до ~130 €/год. Привязано к месту проживания (Atestado de Residência) и регистрации автомобиля. Лиссабоном управляет EMEL, Кашкаишем — Cascais Próxima, Сетубалом — Divisão de Trânsito. Без dístico резиденту придётся платить почасово как туристу.',
  tags: ['парковка', 'dístico', 'резидент'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Лиссабон — EMEL',
      content: [
        { kind: 'paragraph', text: 'EMEL (Empresa Municipal de Mobilidade e Estacionamento de Lisboa) управляет всей платной парковкой в городе. Резиденты одной из 24 freguesias Лиссабона могут получить dístico de residente.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Условия', content: [
            { kind: 'checklist', items: [
              'Подтверждение проживания — Atestado de Residência от Junta de Freguesia в зоне парковки (не в соседней)',
              'Автомобиль зарегистрирован на ваш NIF в IMT (не на кого-то другого)',
              'Действующий техосмотр (IPO) и страховка',
              'IUC оплачен (нет задолженностей)'
            ]}
          ]},
          { id: 'l2', title: 'Где подать', content: [
            { kind: 'paragraph', text: 'EMEL.pt → Dísticos → «Pedir Dístico» — онлайн через Chave Móvel Digital. Либо в отделении EMEL (Av. Casal Ribeiro). Выдаётся за 7-14 дней.' }
          ]},
          { id: 'l3', title: 'Цена', content: [
            { kind: 'checklist', items: [
              '1-я машина по адресу: бесплатно',
              '2-я машина по адресу: €54/год',
              '3-я машина по адресу: €132/год',
              'Cartão Visitante (гостевой): €25 — карта с балансом, первые 30 минут бесплатно, далее почасово',
              'До 3 разрешений на один адрес'
            ]}
          ]},
          { id: 'l4', title: 'Зоны', content: [
            { kind: 'paragraph', text: 'Dístico действует ТОЛЬКО в вашей freguesia. Для соседних — платить почасово. Для электромобилей и гибридов есть отдельный тариф, плюс бесплатная парковка в некоторых зонах (см. ниже).' }
          ]}
        ]}
      ]
    },
    {
      id: 'cascais',
      title: 'Кашкаиш — Cascais Próxima',
      content: [
        { kind: 'paragraph', text: 'Муниципалитет Кашкаиша оформляет резидентскую парковку через Cascais Próxima. Жители муниципалитета получают карту viver Cascais (городское удостоверение), она даёт доступ к льготной парковке.' },
        { kind: 'checklist', items: [
          'Сначала — получить карту viver Cascais (см. отдельный гайд)',
          'После активации — подача на dístico на cascaisproxima.pt',
          'Первый год: бесплатно',
          'Далее: €10-30/год в зависимости от зоны',
          'Работает в центре Кашкаиша и Эшторила — в других зонах муниципалитета (Alcabideche, São Domingos de Rana) парковка бесплатная'
        ]}
      ]
    },
    {
      id: 'setubal',
      title: 'Сетубал — Câmara Municipal',
      content: [
        { kind: 'checklist', items: [
          'Atestado de Residência от Junta de Freguesia + регистрация автомобиля на NIF',
          'Подача в Divisão de Trânsito, Rua Dr. Francisco Santana Ramos',
          'Cartão de Residente для парковки — €20/год',
          'Работает в центре Сетубала; Azeitão, Palmela и дальше — бесплатная парковка'
        ]}
      ]
    },
    {
      id: 'ev-benefits',
      title: 'Бесплатная парковка для электромобилей',
      content: [
        { kind: 'checklist', items: [
          'Лиссабон: EMEL — первые 2 часа бесплатно для электромобилей с зелёным номерным знаком (маркировка MEV); с 2026 года для машин из соседних муниципалитетов льгота ограничена',
          'Порту: парковка для электромобилей — скидка 50% в муниципальных зонах',
          'Кашкаиш: бесплатная парковка для электромобилей на муниципальных зарядных станциях',
          'По всей стране: бесплатная парковка в зонах зарядки Mobi.E во время зарядки',
          'Отличительный знак: электромобили получают отдельный символ в свидетельстве + зелёную рамку номерного знака'
        ]}
      ]
    },
    {
      id: 'fines',
      title: 'Штрафы без dístico',
      content: [
        { kind: 'checklist', items: [
          'Парковка без dístico или оплаты: 30-50 € (при быстрой оплате)',
          'Парковка на месте для людей с инвалидностью без карты: 60-300 € (ст. 145 Código da Estrada) + 2 штрафных балла',
          'Эвакуация: 80-150 € + хранение 15 €/день',
          'Скидка 50% при оплате в течение 15 дней (минимальный размер штрафа)',
          'Обжаловать штраф — через EMEL.pt или Câmara, срок 30 дней'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Лиссабон EMEL dístico (1-я машина)', amountEUR: 0, note: 'бесплатно' },
    { label: 'Лиссабон EMEL dístico (2-я машина)', amountEUR: 54, note: '/год' },
    { label: 'Cascais dístico', amountEURMin: 10, amountEURMax: 30, note: '/год, 1-й бесплатно' },
    { label: 'Setúbal cartão residente', amountEUR: 20, note: '/год' },
    { label: 'Штраф без dístico', amountEURMin: 30, amountEURMax: 50 }
  ],
  sources: [
    { title: 'EMEL — Dístico de Residente', url: 'https://www.emel.pt/pt/disticos/estacionamento-nos-bairros-historicos/distico-de-residente/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Cascais Próxima — Estacionamento', url: 'https://www.cascaisproxima.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Câmara Municipal de Setúbal — Trânsito', url: 'https://www.mun-setubal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}