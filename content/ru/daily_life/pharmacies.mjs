export default {
  editorialVoice: 'hackportugal',
  id: 'pharmacies',
  categoryId: 'healthcare',
  title: 'Аптеки в Португалии — Farmácia и Parafarmácia',
  tldr: 'Farmácia (зелёный крест) — продаёт рецептурные и безрецептурные лекарства, есть консультация фармацевта. Parafarmácia — только безрецептурные препараты и уходовая косметика. Comparticipação SNS (15-90% по escalão A/B/C/D) применяется к рецептам, выписанным в системе с корректной идентификацией пользователя/бенефициара — NIF сам по себе не даёт SNS-скидку. Farmácia de serviço — дежурная аптека по escala de serviço.',
  tags: ['аптека', 'farmácia', 'рецепт', 'sns'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'types',
      title: 'Farmácia vs Parafarmácia',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Farmácia (полноценная аптека)', content: [
            { kind: 'paragraph', text: 'Зелёный крест на вывеске. Лицензия INFARMED. Только здесь продаются рецептурные лекарства. Фармацевт даёт консультацию бесплатно. Обычно работает 9:00–19:30 + суббота до 13:00.' }
          ]},
          { id: 't2', title: 'Parafarmácia (парафармация)', content: [
            { kind: 'paragraph', text: 'В супермаркетах или отдельно. Только безрецептурные товары: витамины, уходовая косметика, некоторые безрецептурные препараты (ибупрофен, сироп от кашля). Цены на 10–20% ниже, чем в Farmácia. Очень популярны Auchan Bem-Estar, Celeiro, Wells.' }
          ]}
        ]}
      ]
    },
    {
      id: 'prescription',
      title: 'Рецепт (receita médica)',
      content: [
        { kind: 'paragraph', text: 'Рецепт получаете у врача (SNS или частного). Электронный — приходит SMS с кодом и паролем. Бумажный — если его выдал частный врач без связи с SNS.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'В аптеке', content: [
            { kind: 'paragraph', text: 'Показать код рецепта (SMS) + паспорт/Cartão de Cidadão (или Número de Utente). Фармацевт видит рецепт в системе. Оплата со скидкой SNS (15-90% по escalões A/B/C/D режима geral; для некоторых заболеваний действуют специальные режимы comparticipação).' }
          ]},
          { id: 'p2', title: 'Скидки SNS', content: [
            { kind: 'checklist', items: [
              'Escalão A (жизненно важные) — скидка 90%',
              'Escalão B (необходимые) — скидка 69%',
              'Escalão C (важные) — скидка 37%',
              'Escalão D (дополнительные) — скидка 15%',
              'Пенсионеры с низким доходом получают дополнительную скидку',
              'Дети до 12 лет — дополнительные скидки'
            ]}
          ]},
          { id: 'p3', title: 'Без рецепта', content: [
            { kind: 'paragraph', text: 'Многие препараты продаются свободно без рецепта. Но антибиотики, снотворные и сильные обезболивающие — только по рецепту, в отличие от некоторых стран, где их продают свободно.' }
          ]}
        ]}
      ]
    },
    {
      id: 'night',
      title: 'Ночная / дежурная аптека',
      content: [
        { kind: 'paragraph', text: 'Farmácia de Serviço — дежурство организуется по escala de serviço (графику), как правило, посменно между аптеками в зоне. Это не гарантия, что в каждой freguesia есть аптека 24/7, — проверяйте список дежурных. График вывешен на двери любой Farmácia или на сайте.' },
        { kind: 'checklist', items: [
          '📍 farmaciasdeservico.net — сайт со списком дежурных аптек по почтовому коду',
          '📞 Linha 1400 / 1400safe.pt — служба INFARMED для поиска лекарств и дежурных аптек; INFARMED (infarmed.pt) — «Localize farmácia»; 112 — только экстренная помощь',
          '💊 После 22:00 звоните по видеодомофону — аптекарь выдаёт через окошко',
          '💰 Ночью наценка около € 2,50 сверху'
        ]}
      ]
    },
    {
      id: 'common-meds',
      title: 'Где что купить',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Голова/насморк/простуда', content: [
            { kind: 'paragraph', text: 'Parafarmácia или Farmácia: Ibuprofeno, Paracetamol (Ben-U-Ron), Bisolvon, Cegripe.' }
          ]},
          { id: 'm2', title: 'Аллергия', content: [
            { kind: 'paragraph', text: 'Loratadina, Cetirizina часто доступны без рецепта; многие формы desloratadina (бренд Aerius) в Португалии классифицированы как MSRM — отпускаются по рецепту. Уточняйте у фармацевта.' }
          ]},
          { id: 'm3', title: 'Антибиотики', content: [
            { kind: 'paragraph', text: 'Только по рецепту. Amoxicilina, Azitromicina.' }
          ]},
          { id: 'm4', title: 'Крем/мазь', content: [
            { kind: 'paragraph', text: 'Солнцезащита и уходовая косметика — любая Parafarmácia. Avène, La Roche-Posay, Uriage, Nuxe популярны.' }
          ]},
          { id: 'm5', title: 'Контрацептивы', content: [
            { kind: 'paragraph', text: 'Презервативы — везде. Противозачаточные таблетки — по рецепту, но со скидкой SNS недорого.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'INFARMED — регулятор аптек', url: 'https://www.infarmed.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Linha 1400 / 1400safe.pt — поиск лекарств и дежурных аптек (INFARMED)', url: 'https://www.1400safe.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Farmácias de Serviço — дежурные аптеки', url: 'https://www.farmaciasdeservico.net/', kind: 'reference', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Ordem dos Farmacêuticos', url: 'https://www.ordemfarmaceuticos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}