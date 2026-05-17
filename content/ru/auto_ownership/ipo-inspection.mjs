export default {
  editorialVoice: 'hackportugal',
  id: 'ipo-inspection',
  categoryId: 'auto_ownership',
  title: 'Техосмотр IPO — как, когда и сколько',
  tldr: 'Inspeção Periódica Obrigatória (IPO) — обязательный техосмотр. Новый легковой автомобиль (категория M1 — легковой пассажирский) — первый IPO через 4 года, далее раз в 2 года до 8 лет, после — ежегодно. Проходится в аккредитованных IMT центрах (Controlauto, SGS, Tecnauto, Strada и другие операторы). Стоит около 30-40 € для легкового автомобиля. Базовый режим — Decreto-Lei 144/2017; тарифные таблицы и периодичность периодически обновляются Portaria IMT. С собой: DUA, страховка, удостоверение личности владельца, права.',
  tags: ['ipo', 'техосмотр', 'imt', 'авто'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Правовая база',
      content: [
        { kind: 'paragraph', text: 'IPO регулируется Decreto-Lei (декрет-закон) 144/2017 и Portaria 178/2023. Контроль — IMT (Instituto da Mobilidade e dos Transportes). Сертифицированные центры работают по концессии, с единой базой данных IMT.' }
      ]
    },
    {
      id: 'frequency',
      title: 'Частота техосмотра',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Легковые автомобили (категория B, до 3.5 т)', content: [
            { kind: 'checklist', items: [
              'Новый: первый IPO через 4 года с даты регистрации',
              'От 4 до 8 лет: раз в 2 года',
              'После 8 лет: ежегодно',
              'Такси / аренда / автошкола / коммерческий автопарк: ежегодно независимо от возраста'
            ]}
          ]},
          { id: 'f2', title: 'Мотоциклы', content: [
            { kind: 'paragraph', text: 'Первый IPO через 4 года, далее каждые 2 года (независимо от возраста).' }
          ]},
          { id: 'f3', title: 'Грузовые > 3.5 т и автобусы', content: [
            { kind: 'paragraph', text: 'Ежегодно с первого года использования.' }
          ]},
          { id: 'f4', title: 'Электромобили и гибриды', content: [
            { kind: 'paragraph', text: 'Те же сроки. Дополнительно — проверка изоляции высоковольтной проводки.' }
          ]}
        ]},
        { kind: 'warning', text: 'Срок IPO записан на стикере под лобовым стеклом и в Portal das Contra-Ordenações (IMT). Просрочка — штраф 250–1250 €.' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'Как записаться',
      content: [
        { kind: 'checklist', items: [
          '💻 Сайты центров (Controlauto, SGS, Riberalves, Tecnauto, Auto-Inspeção) — запись 7/7',
          '📞 В крупных центрах часто можно пройти без записи за 15–30 мин ожидания',
          '🗓️ Можно записаться до 3 мес до окончания предыдущего срока',
          '📍 Ограничение — только в Португалии, центр выбирается любой'
        ]},
        { kind: 'paragraph', text: 'Список всех аккредитованных центров публикует IMT на своём сайте в разделе «Inspeção Técnica de Veículos».' }
      ]
    },
    {
      id: 'documents',
      title: 'Что брать с собой',
      content: [
        { kind: 'checklist', items: [
          '📄 DUA (Documento Único Automóvel) — техпаспорт',
          '📄 Certificado de Matrícula (если документы старого образца)',
          '📄 Действующий страховой полис (полис обязательного автострахования)',
          '🆔 Cartão de Cidadão (удостоверение гражданина Португалии) владельца (или ВНЖ + паспорт)',
          '🚗 Автомобиль с работающими ремнями, тормозами, огнями',
          '⚠️ Аварийный треугольник, светоотражающий жилет, аптечка',
          '🔧 Шины не старше 10 лет, рисунок минимум 1.6 мм'
        ]},
        { kind: 'warning', text: 'Если документы на владельца-юрлицо — доверенность от фирмы с печатью.' }
      ]
    },
    {
      id: 'the-process',
      title: 'Процесс осмотра',
      content: [
        { kind: 'paragraph', text: 'Занимает 25–40 минут. Проверяют:' },
        { kind: 'checklist', items: [
          '🔦 Освещение (фары, габариты, поворотники, стопы)',
          '🛑 Тормозная система (стенд)',
          '🚨 Амортизация (стенд)',
          '🛞 Шины / глубина протектора',
          '📋 Номера кузова и двигателя сверяют с DUA',
          '💨 Выбросы CO2 (пробка в глушитель)',
          '🪞 Зеркала, стеклоочистители',
          '🎯 Геометрия света («alinhamento de faróis»)',
          '🪑 Ремни безопасности и подушки',
          '🔋 ABS / ESP / электроника (OBD-диагностика)'
        ]}
      ]
    },
    {
      id: 'results',
      title: 'Результат и что делать, если отказали',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Aprovado (зелёный)', content: [
            { kind: 'paragraph', text: 'Получаете новую наклейку и обновлённый DUA. Всё в IMT автоматически.' }
          ]},
          { id: 'r2', title: 'Aprovado com Deficiências Ligeiras (оранжевый)', content: [
            { kind: 'paragraph', text: 'Прошли, но нужны мелкие исправления — они зафиксированы в протоколе. Пересдавать не нужно, исправить до следующего IPO.' }
          ]},
          { id: 'r3', title: 'Reprovado (красный)', content: [
            { kind: 'checklist', items: [
              'Ездить нельзя сразу (если критичные дефекты) или до ремонта (если не критичные)',
              'Срок на пересдачу — 30 дней в ТОМ ЖЕ центре по сниженной цене',
              'После 30 дней — полный IPO заново',
              'Повторно не пересдали за 30 дней + 7 — IMT выписывает штраф'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO для легкового автомобиля (категория B)', amountEURMin: 30, amountEURMax: 40 },
    { label: 'Мотоцикл', amountEURMin: 20, amountEURMax: 28 },
    { label: 'Повторный IPO (пересдача)', amountEURMin: 12, amountEURMax: 18 },
    { label: 'Штраф за просрочку IPO', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'IMT — Inspeção Técnica de Veículos', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Pages/Inspeccao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 144/2017 — Regime de inspeção técnica (техосмотр)', url: 'https://dre.pt/dre/detalhe/decreto-lei/144-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 178/2023 — tarifas e periodicidade', url: 'https://dre.pt/dre/detalhe/portaria/178-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Fazer a inspeção periódica do veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/realizar-a-inspecao-periodica-ao-veiculo-ipo-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}