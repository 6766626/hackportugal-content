export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — работа как самозанятый',
  tldr: 'Recibos Verdes — цифровые чеки самозанятого в Portal das Finanças. Используются фрилансерами и индивидуальными предпринимателями. Упрощённый режим: 75% оборота — налоговая база, 25% — автоматический вычет. Социальные взносы — 21,4%. IVA (НДС) — только если оборот > € 15 000/год.',
  tags: ['recibos verdes', 'ИП', 'самозанятость', 'atividade'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'open',
      title: 'Открыть Início de Atividade',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Зайти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'С вашим NIF и паролем.' }
          ]},
          { id: 'o2', title: '2. Cidadão → Alterar Atividade → Abrir Atividade', content: [
            { kind: 'paragraph', text: 'Выбрать CAE — код деятельности. Для ИТ — 62010 (программирование), для консалтинга — 70220, для дизайна — 74100.' }
          ]},
          { id: 'o3', title: '3. Выбрать режим', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — стандартный режим для оборота < € 200 000/год. Упрощённая база.',
              'Contabilidade Organizada — для крупных оборотов или по желанию, требует бухгалтера.'
            ]}
          ]},
          { id: 'o4', title: '4. IVA (НДС)', content: [
            { kind: 'checklist', items: [
              'Оборот ≤ € 15 000/год — освобождение от IVA (Regime de Isenção)',
              'Оборот > € 15 000 — регистрация IVA, ставка 23% (или 13%/6% для некоторых услуг)'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social (социальное страхование)', content: [
            { kind: 'paragraph', text: 'Для впервые регистрируемых trabalhador independente — полное освобождение от взносов первые 12 месяцев. С 13-го месяца — 21,4% от relevant income (обычно 70% среднего ежемесячного оборота).' }
          ]}
        ]}
      ]
    },
    {
      id: 'invoicing',
      title: 'Выписать Recibo Verde (электронный чек самозанятого)',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: '1. В Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (для услуг) или Fatura (если вы зарегистрированы как плательщик IVA).' }
          ]},
          { id: 'i2', title: '2. Заполнить реквизиты клиента', content: [
            { kind: 'paragraph', text: 'Имя, NIF, адрес. Если клиент за пределами ЕС — по правилам обратного начисления, IVA = 0.' }
          ]},
          { id: 'i3', title: '3. Указать сумму и категорию', content: [
            { kind: 'paragraph', text: 'Услуги включаются в счёт. IVA начисляется автоматически, если вы в режиме IVA.' }
          ]},
          { id: 'i4', title: '4. Удержание налога (retenção)', content: [
            { kind: 'paragraph', text: 'Для португальских клиентов — 11,5%, 16,5% или 25% удерживается автоматически. Для иностранных — 0.' }
          ]},
          { id: 'i5', title: '5. Подписать и отправить клиенту', content: [
            { kind: 'paragraph', text: 'Цифровой документ. Клиент учитывает его в своей бухгалтерии.' }
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Налоги на конец года',
      content: [
        { kind: 'paragraph', text: 'В упрощённом режиме:' },
        { kind: 'checklist', items: [
          'Налоговая база = 75% от оборота (25% автоматического вычета)',
          'Применяется прогрессивная шкала IRS на 2026: 11,97%–48% в 9 диапазонах',
          'Социальные взносы (21,4% от 70% оборота)',
          'Квартальные авансовые платежи IRS с июля второго года деятельности'
        ]},
        { kind: 'paragraph', text: 'Для субъектов IFICI: фиксированная ставка 20% на квалифицированную деятельность.' }
      ]
    },
    {
      id: 'tips',
      title: 'Советы',
      content: [
        { kind: 'checklist', items: [
          'Сертифицированный бухгалтер — рекомендуется, € 50–150/мес',
          'Храните все Recibos Verdes 10 лет',
          'Подавайте IRS ежегодно в апреле-июне',
          'Если клиенты — только международные, сохраняйте банковские подтверждения для AIMA/Finanças',
          'Первый год без социальных взносов — отличная возможность начать'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Trabalhadores Independentes', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Abrir Atividade', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/abrir-atividade-de-trabalhador-independente', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}