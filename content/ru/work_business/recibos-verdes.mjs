export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes',
  categoryId: 'work_business',
  title: 'Recibos Verdes — работа как самозанятый',
  tldr: 'Recibos Verdes — цифровые чеки самозанятого в Portal das Finanças. Используются фрилансерами и индивидуальными предпринимателями. В упрощённом режиме база IRS зависит от типа дохода: для большинства профессиональных услуг — 75% оборота, для других видов деятельности — иные коэффициенты по CIRS art. 31. Социальные взносы — 21,4% от relevant income (обычно 70% услуг или 20% продаж). IVA (НДС): isenção art. 53 CIVA при годовом обороте ≤ € 15 000.',
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
            { kind: 'paragraph', text: 'Выбрать код деятельности: CAE и/или код из tabela do artigo 151.º CIRS. Для профессиональных услуг (ИТ, консалтинг, дизайн) часто важен именно CIRS-код; при сомнении уточните у contabilista — выбор влияет на IRS coefficients и retenção.' }
          ]},
          { id: 'o3', title: '3. Выбрать режим', content: [
            { kind: 'checklist', items: [
              'Regime Simplificado — стандартный режим при годовом обороте до € 200 000. Коэффициенты базы зависят от типа дохода (не всегда 75%)',
              'Contabilidade Organizada — для крупных оборотов или по добровольному выбору, требует contabilista certificado'
            ]}
          ]},
          { id: 'o4', title: '4. IVA (НДС)', content: [
            { kind: 'checklist', items: [
              'Regime de isenção (CIVA art. 53) — при годовом/ожидаемом обороте ≤ € 15 000 и выполнении условий; при открытии atividade ожидаемый оборот считается пропорционально году',
              'Уточнить: «При обычном превышении лимита art. 53 за год alteração подаётся в январе следующего года, и IVA применяется с февраля; при утрате других условий сроки могут отличаться. После перехода в regime normal появляются periodic VAT returns и платежи IVA». Стандартная ставка 23% (или 13%/6% для отдельных услуг). Для B2B клиентов за границей часто применяется reverse charge / regras de localização'
            ]}
          ]},
          { id: 'o5', title: '5. Segurança Social (социальное страхование)', content: [
            { kind: 'paragraph', text: 'При первом открытии atividade enquadramento в Segurança Social обычно начинает действовать только после начального периода (обычно первые 12 месяцев — освобождение)\.\n\nЗатем ставка 21,4% на rendimento relevante: 70% услуг или 20% продаж/производства/hotel/restaurant, по квартальной декларации с возможностью корректировки базы в пределах правил.' }
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
            { kind: 'paragraph', text: 'Cidadão → Recibos e Faturas → Emitir Fatura-Recibo (если услуга уже оплачена), Fatura (если сначала выставляете счёт) или Recibo (когда поступила оплата). Это не зависит напрямую от того, в режиме IVA вы или в isenção.' }
          ]},
          { id: 'i2', title: '2. Заполнить реквизиты клиента', content: [
            { kind: 'paragraph', text: 'Имя, NIF, адрес. Для иностранных клиентов IVA зависит от regras de localização: B2B услуги зарубежной компании часто идут без португальского IVA / reverse charge или operação fora do campo; B2C и digital services могут облагаться иначе. Проверяйте по типу услуги и статусу клиента.' }
          ]},
          { id: 'i3', title: '3. Указать сумму и категорию', content: [
            { kind: 'paragraph', text: 'Услуги включаются в счёт. Написать: «Если вы не в isenção art. 53, при выпуске документа нужно выбрать применимую ставку IVA или основание não liquidação/isenção. Для иностранных клиентов и reverse charge не полагайтесь на “автоматически”: проверьте regras de localização и статус клиента».' }
          ]},
          { id: 'i4', title: '4. Удержание налога (retenção)', content: [
            { kind: 'paragraph', text: 'Retenção na fonte применяется не всегда: обычно когда португальский клиент — компания/entidade с organized accounting, обязанная удерживать. Частные лица обычно не удерживают. Малые TI могут иметь dispensa de retenção при условиях CIRS art. 101.º-B. Ставки зависят от типа дохода: часто 25% для professional services (art. 151), 11,5% для некоторых иных доходов, 16,5% для отдельных IP/прочих случаев. Для иностранных клиентов — обычно 0.' }
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
          'Для многих профессиональных услуг база IRS = 75% оборота; для других типов дохода действуют другие коэффициенты по CIRS art. 31',
          'Применяется прогрессивная шкала IRS на 2026: 11,97%–48% в 9 диапазонах',
          'Социальные взносы 21,4% на rendimento relevante: 70% услуг или 20% продаж/производства, по квартальной декларации',
          'Заменить на: «Pagamentos por conta de IRS могут быть назначены AT на основании предыдущей декларации/ликвидации IRS; это не автоматический налог для всех TI. Если назначены, обычно платятся 3 раза в год — в июле, сентябре и декабре».'
        ]},
        { kind: 'paragraph', text: 'Для субъектов IFICI (новый режим, заменил NHR с 2024): фиксированная ставка 20% на квалифицированную деятельность из утверждённых перечней при выполнении условий режима.' }
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
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}