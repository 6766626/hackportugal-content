export default {
  editorialVoice: 'hackportugal',
  id: 'traffic-fines',
  categoryId: 'auto_trips',
  title: 'Штрафы ПДД в Португалии — виды, баллы, обжалование',
  tldr: 'Штрафы ANSR (Autoridade Nacional de Segurança Rodoviária) делятся на лёгкие (leves), серьёзные (graves), очень серьёзные (muito graves). У водителя 12 баллов в системе «carta por pontos» — они списываются за нарушения. При 0 баллов — приостановка прав. Скидка 50 % при оплате в течение 15 дней. Обжалование — письменно в ANSR или суд в течение 15 дней.',
  tags: ['штраф', 'пдд', 'ansr', 'баллы'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Классификация штрафов',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Leve (лёгкие)', content: [
            { kind: 'checklist', items: [
              '60–300 € для физического лица, 300–1500 € для юридического лица',
              'Пример: неиспользование ремня, пересечение ЛП, непропуск пешехода',
              'Без списания баллов'
            ]}
          ]},
          { id: 't2', title: 'Grave (серьёзные)', content: [
            { kind: 'checklist', items: [
              '120–600 €',
              '−3 балла',
              'Пример: превышение скорости на 30–60 км/ч на трассе, пересечение сплошной, обгон на переходе'
            ]}
          ]},
          { id: 't3', title: 'Muito Grave (очень серьёзные)', content: [
            { kind: 'checklist', items: [
              '500–2500 €',
              'От −4 до −6 баллов',
              'Пример: превышение скорости более чем на 60 км/ч, вождение в состоянии алкогольного опьянения, выезд на встречную полосу, проезд на красный',
              'Возможна приостановка прав до 2 лет'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'points',
      title: 'Carta por pontos — 12 баллов',
      content: [
        { kind: 'paragraph', text: 'Carta por pontos действует с 01.06.2016. У каждого водителя есть 12 баллов, которые списываются при нарушениях. Баллы восстанавливаются автоматически: +1 за каждые 3 года без нарушений.' },
        { kind: 'checklist', items: [
          '⬇️ Снятие баллов: дорожное преступление (crime rodoviário) −6, очень серьёзное административное нарушение (contra-ordenação muito grave) −5, серьёзное нарушение (grave) −3 за нарушение. Формального «предупреждения» на 9 баллах нет',
          '⬇️ Ниже определённого уровня IMT может назначить обучение / переобучение (acção de formação)',
          '⬇️ Достижение 0 баллов = аннулирование водительского удостоверения (cassação do título); новые права нельзя получить 2 года, затем — процедура с нуля',
          '🚨 0 баллов сразу при: превышении скорости более чем на 80 км/ч, алкоголе более 1.2 g/l, fuga (скрылся)',
          '📅 Баллы восстанавливаются: +1 за 3 года',
          '✅ Курс повышения квалификации (Curso de aperfeiçoamento) — можно восстановить 4 балла 1 раз в 5 лет'
        ]}
      ]
    },
    {
      id: 'speeding',
      title: 'Штрафы за превышение скорости',
      content: [
        { kind: 'paragraph', text: 'По правилам: город — 50 км/ч, за городом — 90 км/ч, автомагистраль — 120 км/ч. Минимальная погрешность камер — 7 %. Штрафы:' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'До 20 км/ч в городе / 30 км/ч за городом — Leve', content: [
            { kind: 'paragraph', text: '60–300 €, без списания баллов' }
          ]},
          { id: 's2', title: '20–40 / 30–60 км/ч — Grave', content: [
            { kind: 'paragraph', text: '120–600 €, −3 балла, возможный запрет на вождение на 1–6 месяцев' }
          ]},
          { id: 's3', title: '> 40 / > 60 км/ч — Muito Grave', content: [
            { kind: 'paragraph', text: '500–2500 €, −4/−6 баллов, запрет на вождение на 2–24 месяца' }
          ]}
        ]}
      ]
    },
    {
      id: 'alcohol',
      title: 'Алкоголь и наркотики',
      content: [
        { kind: 'checklist', items: [
          '🍺 > 0.5 g/l, при стаже менее 2 лет — > 0.2 g/l: Grave — 250–1250 €, −3 балла, запрет на вождение на 1–12 месяцев',
          '🥃 > 0.8 g/l: Muito Grave — 500–2500 €, −4 балла, запрет на вождение на 2–12 месяцев',
          '🍾 > 1.2 g/l: уголовное дело — до 1 года тюрьмы или штраф, −6 баллов, запрет на вождение на 3–24 месяца',
          '💊 Наркотики: приравнены к > 1.2 g/l, плюс уголовная ответственность',
          '🚨 Fuga (скрылся с места с подозрением на алкоголь) — 0 баллов сразу'
        ]}
      ]
    },
    {
      id: 'payment',
      title: 'Оплата штрафа',
      content: [
        { kind: 'checklist', items: [
          '📬 Пришло письмо Auto de Contra-Ordenação с референсом',
          '✂️ Pagamento voluntário: при добровольной оплате в установленный срок (обычно 15 рабочих дней с уведомления) платится **минимальная сумма** coima, а не «скидка 50%». Конкретная минимальная сумма указана в уведомлении',
          '💳 Способы: ANSR онлайн, Portal das Finanças, Multibanco, CTT/Payshop',
          '📅 Срок полной оплаты — 30 дней после уведомления',
          '⏰ Просрочка — +30 %, затем судебный процесс',
          '💸 Долг > 50 € — заблокирует IPO и продажу машины'
        ]}
      ]
    },
    {
      id: 'appeal',
      title: 'Обжалование',
      content: [
        { kind: 'checklist', items: [
          '📝 Письменная Impugnação в течение 15 дней с даты уведомления',
          '📬 Адрес: ANSR (Autoridade Nacional de Segurança Rodoviária) или GNR, откуда пришёл штраф',
          '📸 Доказательства: свидетели, видео с регистратора, фото знаков',
          '🏛️ Автоматически попадает в Tribunal de Pequena Instância Criminal',
          '⚖️ Платите только после решения суда',
          '⚠️ Если проиграли суд — плюс судебные издержки (~50–200 €)'
        ]},
        { kind: 'warning', text: 'Если не обжалуете и не оплатите — штраф становится исполнительным документом. Взыскать могут с зарплаты, IBAN или арестованного имущества.' }
      ]
    }
  ],
  costs: [
    { label: 'Штраф Leve', amountEURMin: 60, amountEURMax: 300 },
    { label: 'Штраф Grave', amountEURMin: 120, amountEURMax: 600 },
    { label: 'Штраф Muito Grave', amountEURMin: 500, amountEURMax: 2500 },
    { label: 'Pagamento voluntário (минимальная сумма coima)', amountEUR: 0, note: 'при добровольной оплате в установленный срок платится минимальная сумма, указанная в уведомлении' }
  ],
  sources: [
    { title: 'Código da Estrada (ПДД Португалии)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1994-55253174', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANSR — Autoridade Nacional de Segurança Rodoviária', url: 'https://www.ansr.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pagar coima de trânsito', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pagar-coimas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}