export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Закрытие atividade (ИП) и юрлица в Португалии',
  tldr: 'Закрытие recibos verdes (cessação de atividade): ст. 33 CIVA — через Portal das Finanças бесплатно в течение 15 дней после последнего выставленного чека. Нужно: подать финальную IVA-декларацию + Modelo 3 IRS (если был оборот в году) + уведомить Segurança Social. Закрытие Unipessoal / Lda — сложнее: dissolução + liquidação через Conservatória Comercial (200-400 €) + финальная отчётность. Процесс 6-12 мес. Если долги — банкротство (insolvência) через суд.',
  tags: ['cessação', 'закрытие ип', 'ликвидация', 'юрлицо'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Закрытие ИП (recibos verdes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Завершить активную работу', content: [
            { kind: 'checklist', items: [
              'Выставить последний recibo',
              'Получить оплаты от клиентов (в идеале за 30 дней до закрытия)',
              'Собрать все чеки поставщиков для IVA deduzida',
              'Уведомить клиентов о прекращении работы (электронное письмо, письмо) — это хорошая практика',
              'Активные контракты — расторгнуть или перенаправить'
            ]}
          ]},
          { id: 'c2', title: '2. Подать cessação в AT', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Serviços → Atividades → Cessação',
              'Указать дату последнего дня деятельности',
              'Причина: voluntary (чаще всего выбирать), trabalho subordinado (если ушли на зарплату), mudança de país, aposentação',
              'Отправить — процесс моментальный, сертификат приходит в течение часа',
              'Позволяет закрыть деятельность на любой день, в том числе ретроактивно (но с обоснованием)'
            ]}
          ]},
          { id: 'c3', title: '3. Финальный IVA', content: [
            { kind: 'checklist', items: [
              'Если были плательщиком IVA (>15k оборот) — подать финальную IVA-декларацию',
              'Период: квартал / месяц, в котором была cessação',
              'Срок: до 20-го числа следующего месяца',
              'Если IVA к уплате (вы должны AT) — оплатить',
              'Если кредит (AT должен вам) — получить возврат в 30-60 дней'
            ]}
          ]},
          { id: 'c4', title: '4. Финальный IRS', content: [
            { kind: 'checklist', items: [
              'В IRS-декларации (подача апрель-июнь следующего года) — Anexo B всё ещё заполнять',
              'Рассчитать налог со всего оборота за год cessação',
              'Если CTC / упрощённая категория — 75% как база',
              'Retenção na fonte (удержания клиентов) — зачитываются против налога',
              'Если сумма отрицательная — возврат'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'Автоматически получают уведомление от AT в течение 10 дней',
              'НО: если у вас была carência (12 мес освобождения) и вы не выплачивали взносы — в долгосрочной перспективе лучше подтвердить в Segurança Social Direta',
              'Финальный взнос за месяц cessação: 21.4% от 70% оборота того месяца',
              'Срок: 20-е число следующего месяца',
              '**После cessação**: взносы больше не начисляются; накопленный стаж остаётся (для будущей пенсии)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'reopen',
      title: '🔄 Открыть заново',
      content: [
        { kind: 'checklist', items: [
          'Reabertura atividade — возможна в любой момент через Portal das Finanças',
          'Но: если вы открыли и закрыли деятельность менее чем за 12 мес — AT может отметить это как подозрительное (попытка уйти от налогов)',
          'Рекомендуется держать ≥ 12 мес между закрытием и повторным открытием',
          'Новое открытие — как полностью новая регистрация: снова 12 мес carência освобождения от Segurança Social (если не работали по recibos verdes в предыдущие 3 года)'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Закрытие юрлица (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Гораздо сложнее и дороже, чем ИП. Процесс dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Этап 1: Dissolução (роспуск)', content: [
            { kind: 'checklist', items: [
              'Sócios (учредители) принимают решение на Assembleia Geral',
              'Подача в Conservatória Comercial — регистрация dissolução',
              'Публикация в Boletim Oficial',
              'Стоимость: 100-200 €'
            ]}
          ]},
          { id: 'l2', title: 'Этап 2: Liquidação (ликвидация)', content: [
            { kind: 'checklist', items: [
              'Назначение liquidatário (часто — последний административный управляющий)',
              'Инвентаризация активов и обязательств',
              'Продажа имущества, оплата долгов',
              'Финальный баланс',
              'Распределение между sócios в соответствии с долями',
              'Процесс: 6-18 мес',
              'Стоимость: сильно зависит от сложности. Простая unipessoal — 500-1000 €. Средняя Lda — 1500-5000 €. SA с активами — 5000-20000+'
            ]}
          ]},
          { id: 'l3', title: 'Этап 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Финальная регистрация в Conservatória Comercial',
              'Подача финальной отчётности в IES (Informação Empresarial Simplificada)',
              'Уведомление Segurança Social о прекращении',
              'Хранение бухгалтерских документов 5 лет (по закону)',
              'Certidão de encerramento — компания официально закрыта'
            ]}
          ]},
          { id: 'l4', title: 'Simplified dissolução (если нет активов / долгов)', content: [
            { kind: 'checklist', items: [
              '«Empresa na Hora» dissolução — за день в Conservatória',
              'Только для простых случаев: нет непогашенных долгов, задолженности перед AT, активов',
              'Стоимость: ~360 €',
              'Подходит ~40% компаний'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bankruptcy',
      title: '💸 Insolvência — если долги > активов',
      content: [
        { kind: 'checklist', items: [
          'Банкротство → через суд',
          'Ускоренная процедура через PER (Processo Especial de Revitalização), если ещё есть шансы выжить',
          'PEVE (Processo Especial de Viabilização) — для микробизнеса',
          'Полная insolvência с ликвидацией — 1-3 года, суд назначает administrador',
          'Для sócios: личная ответственность только если есть subsidiary liability, fraud или личные гарантии',
          'Unipessoal Lda — sócio защищён (ограниченная ответственность)',
          'ENI (Empresário em Nome Individual, = ИП в коммерческом значении) — полная личная ответственность',
          'Стоимость: судебные сборы 1000-5000 €, адвокат 2000-10000 €'
        ]}
      ]
    },
    {
      id: 'checklist-final',
      title: '✅ Финальный чек-лист',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Финансовые', content: [
            { kind: 'checklist', items: [
              'Все клиенты оплатили или receipts отмечены как списанные',
              'Все поставщики оплачены',
              'Финальный IVA подан',
              'Финальный IRS/IRC подан',
              'Финальный IES (для Lda) подан',
              'Взносы Segurança Social оплачены',
              'Закрыть банковский счёт компании (или перевести в личный)',
              'Отменить подписки (софт, домены, хостинг)'
            ]}
          ]},
          { id: 'f2', title: 'Юридические', content: [
            { kind: 'checklist', items: [
              'Уведомить регулятора, если деятельность была регулируемой (например, недвижимость — APEMIP; страхование — ASF)',
              'Отменить зарегистрированные товарные знаки (или передать)',
              'Отозвать делегированный доступ в Portal das Finanças для бывшего бухгалтера',
              'Передать архивные документы (хранить 5 лет)',
              'Уведомить Chave Móvel Digital / цифровые сертификаты — можно оставить активными'
            ]}
          ]},
          { id: 'f3', title: 'Административные', content: [
            { kind: 'checklist', items: [
              'Закрыть аккаунты в магазинах / у поставщиков',
              'Закрыть почтовый ящик компании (Gmail / Outlook)',
              'Удалить из Google My Business, соцсетей',
              'Настроить перенаправление домена / email',
              'Уведомить банк (не для личного счёта, а если был коммерческий)',
              'Отменить бизнес-страхование'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cessação atividade (ИП)', amountEUR: 0, note: 'бесплатно через Portal das Finanças' },
    { label: 'Финальные декларации (если через бухгалтера)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Simplified dissolução (Empresa na Hora)', amountEUR: 360 },
    { label: 'Закрытие Unipessoal (с ликвидацией)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Средняя Lda (полный процесс)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência (банкротство) через суд', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Insolvência (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}