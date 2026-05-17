export default {
  editorialVoice: 'hackportugal',
  id: 'navegante-lisboa',
  categoryId: 'public_transport',
  title: 'Navegante — проездной Большого Лиссабона',
  tldr: 'Navegante — единый проездной для региона Lisboa: метро, автобусы Carris, электрички CP, речные паромы Transtejo, Fertagus, MTS. Два главных типа: месячный Metropolitano (за 40 €) или Municipal (30 €). Дети до 12 лет — бесплатно (с 2024), дети 13–18 лет и студенты — 20 €. Покупается в автомате метро, офисах Carris или через приложение.',
  tags: ['navegante', 'проездной', 'лиссабон', 'метро', 'автобус'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'types',
      title: 'Типы карт',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Navegante Metropolitano (40 €/мес)', content: [
            { kind: 'paragraph', text: 'Работает во ВСЕЙ агломерации Lisboa (Lisboa + Sintra + Cascais + Almada + Loures + Odivelas + Vila Franca + Mafra + 10 других). Покрывает метро, Carris, пригородные поезда CP, Transtejo, Fertagus, MTS Seixal. Лучший выбор, если ездите между муниципалитетами.' }
          ]},
          { id: 't2', title: 'Navegante Municipal (30 €/мес)', content: [
            { kind: 'paragraph', text: 'Только в ВАШЕМ муниципалитете. Для жителя Lisboa — только Lisboa (включая метро + Carris). Для жителя Cascais — только Cascais + CP в пределах муниципалитета. НЕ работает за границей муниципалитета.' }
          ]},
          { id: 't3', title: 'Navegante Social / льготы', content: [
            { kind: 'checklist', items: [
              'Дети до 12 лет — БЕСПЛАТНО (с 2024)',
              '13–18 лет + студенты до 23 лет — 20 €/мес',
              'Пожилые 65+ — 20 €/мес',
              'Беженцы / получатели соцподдержки — до 50 %'
            ]}
          ]},
          { id: 't4', title: 'Zapping — оплата за поездку', content: [
            { kind: 'paragraph', text: 'Предоплаченный баланс на карте Navegante. Поездка — около 1,80 € в метро, 2 € на автобусе. Скидка 15 % от обычного тарифа. Для редких поездок.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-get',
      title: 'Как получить',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: '1. Физическая карта Navegante (пластиковая карта)', content: [
            { kind: 'checklist', items: [
              'Зайти в любой киоск Metro Lisboa или офис Carris',
              'Документы: Cartão de Cidadão/ВНЖ + фото',
              'Первая карта: 6 € + первый месячный проездной',
              'Выдача моментально',
              'Карта действительна бессрочно'
            ]}
          ]},
          { id: 'g2', title: '2. Navegante через Viva Viagem / жёлтую карту', content: [
            { kind: 'paragraph', text: 'Старая система. Бумажная карта за 50 центов, пополняется Zapping или проездным на 24 часа (6,80 €). Хорошо подходит для туристов.' }
          ]},
          { id: 'g3', title: '3. Navegante через приложение (цифровой)', content: [
            { kind: 'paragraph', text: 'Скачать приложение «Navegante» (Android / iOS). Привязать существующую карту через NFC или создать цифровой кошелёк. Пополнение через MB WAY, карта.' }
          ]},
          { id: 'g4', title: '4. Apple Wallet / Google Pay', content: [
            { kind: 'paragraph', text: 'С 2025 Navegante интегрирован. Navegante Wallet Pass в iPhone/Android — приложил к турникету, проехал. Удобно, заменяет пластик.' }
          ]}
        ]}
      ]
    },
    {
      id: 'operators',
      title: 'Какие операторы покрыты',
      content: [
        { kind: 'checklist', items: [
          '🚇 Metro de Lisboa — 4 линии',
          '🚌 Carris — 165+ автобусных линий + трамваи + подъёмники',
          '🚆 CP Urbanos de Lisboa — линии Cascais, Sintra, Azambuja',
          '⛴️ Transtejo + Soflusa — Barreiro, Cacilhas, Trafaria, Porto Brandão',
          '🚂 Fertagus — линия Setúbal (через мост 25 Abril)',
          '🚌 Carris Metropolitana — пригородные автобусы',
          '🛤️ MTS — Metro Sul do Tejo (Almada/Seixal)',
          '🚲 GIRA — велошеринг (отдельно, не по проездному)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Практические советы',
      content: [
        { kind: 'checklist', items: [
          '💰 Месяц считается с даты активации (не календарный)',
          '🔄 Продление за 5 дней до окончания — без перерыва',
          '📅 Автоплатёж через MB WAY / прямой дебет — удобно',
          '🏃 В метро проходите по одной карте, прикладывайте к зоне считывания — моментально',
          '📱 В автобусах Carris — прикладывайте при ВХОДЕ',
          '🚆 CP — прикладывайте при ВХОДЕ на станции, иногда при выходе',
          '🎒 Штраф за безбилетный проезд: 120 € сразу (уменьшенный 60 € при оплате в течение 20 дней)',
          '🎓 Студенческий проездной — только со справкой о зачислении'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Navegante Metropolitano', amountEUR: 40, note: '€/мес' },
    { label: 'Navegante Municipal', amountEUR: 30, note: '€/мес' },
    { label: 'Дети 13–18 / студенты', amountEUR: 20, note: '€/мес' },
    { label: 'Пожилые 65+', amountEUR: 20 },
    { label: 'Первая карта (пластик)', amountEUR: 6 },
    { label: 'Штраф за безбилетный проезд', amountEURMin: 60, amountEURMax: 120 }
  ],
  sources: [
    { title: 'Navegante — сайт оператора', url: 'https://www.navegante.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Metropolitano de Lisboa', url: 'https://www.metrolisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Carris — общественный транспорт Lisboa', url: 'https://www.carris.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CP — Comboios de Portugal', url: 'https://www.cp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMT — Autoridade da Mobilidade e dos Transportes', url: 'https://www.amt-autoridade.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}