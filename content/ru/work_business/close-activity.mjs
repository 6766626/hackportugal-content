export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Закрытие atividade (ИП) и юрлица в Португалии',
  tldr: 'Закрытие recibos verdes (cessação de atividade): через Portal das Finanças бесплатно.\n\nСрок — обычно 30 дней с даты прекращения деятельности; при поздней подаче возможна coima. Нужно: подать финальную IVA-декларацию (если были в нормальном режиме) + Modelo 3 IRS (если был оборот в году) + уведомить Segurança Social. Закрытие Unipessoal / Lda — сложнее: dissolução + liquidação через Conservatória Comercial + финальная отчётность.\n\nПроцесс 6-12 мес. Если долги — банкротство (insolvência) через суд.',
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
              'Можно указать фактическую дату прекращения, в том числе прошлую, но если 30-дневный срок пропущен — возможна coima и запрос доказательств от AT'
            ]}
          ]},
          { id: 'c3', title: '3. Финальный IVA', content: [
            { kind: 'checklist', items: [
              'Если вы были в normal IVA regime и подавали periodic IVA declarations — подайте последнюю декларацию за период cessação. Если вы были в isenção art. 53 CIVA, periodic IVA обычно не подаётся',
              'Период: квартал / месяц, в котором была cessação',
              'Срок: по обычным правилам периода IVA — декларация обычно до 20-го числа второго месяца после месяца/квартала, оплата до 25-го (CIVA arts. 27, 41)',
              'Если IVA к уплате (вы должны AT) — оплатить',
              'Если есть crédito de IVA, можно запросить reembolso в финальной/периодической декларации при соблюдении условий CIVA; срок зависит от проверки AT и не гарантирован (не рассчитывайте на фиксированные 30–60 дней)'
            ]}
          ]},
          { id: 'c4', title: '4. Финальный IRS', content: [
            { kind: 'checklist', items: [
              'В IRS-декларации (подача апрель-июнь следующего года) — Anexo B всё ещё заполнять',
              'Рассчитать налог со всего оборота за год cessação',
              'В regime simplificado база считается по коэффициенту CIRS art. 31: часто 75% для профессиональных услуг, но для других доходов коэффициенты иные',
              'Retenção na fonte (удержания клиентов) — зачитываются против налога',
              'Если сумма отрицательная — возврат'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'Автоматически получают уведомление от AT в течение 10 дней',
              'НО: если у вас была carência (12 мес освобождения) и вы не выплачивали взносы — в долгосрочной перспективе лучше подтвердить в Segurança Social Direta',
              'Взносы TI считаются по quarterly declaration: relevant income обычно 70% услуг или 20% sales/production/hotel/restaurant за предыдущий квартал, ставка TI 21,4%. После cessação проверьте последнюю квартальную декларацию в Segurança Social Direta',
              'Срок оплаты взносов SS — обычно с 10-го по 20-е число следующего месяца',
              'После cessação: взносы больше не начисляются; накопленный стаж остаётся (для будущей пенсии)'
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
          'Частые открытия/закрытия без реальной причины могут вызвать вопросы AT/SS, поэтому храните доказательства фактической деятельности и причин cessação/reabertura',
          'На практике лучше держать заметный интервал между закрытием и повторным открытием, если это не вынужденная мера',
          'При reabertura правила Segurança Social зависят от предыдущего enquadramento и длительности перерыва. Не рассчитывайте автоматически на новые 12 месяцев без взносов — проверьте Segurança Social Direta или запросите подтверждение у SS либо contabilista'
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
              'Публикация регистрационного акта производится электронно через портал официальных публикаций коммерческих актов (IRN) после регистрации в Conservatória Comercial',
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
              'После cessação/encerramento бухгалтер подаёт финальные декларации: declaração de cessação, Modelo 22 IRC в специальный срок после прекращения, IES/DA в специальный срок, финальный IVA и retenções na fonte, если применимо',
              'Уведомление Segurança Social о прекращении',
              'Хранение бухгалтерских документов 5 лет (по закону)',
              'Certidão de encerramento — компания официально закрыта'
            ]}
          ]},
          { id: 'l4', title: 'Dissolução e liquidação imediata (ускоренный вариант)', content: [
            { kind: 'checklist', items: [
              '«Empresa na Hora» dissolução — за день в Conservatória',
              'Только для простых случаев: нет непогашенных долгов, задолженности перед AT, активов',
              'Госпошлина — по таблице emolumentos IRN/RERN; для немедленной dissolução/liquidação ориентир около €300, но перед подачей проверьте актуальный тариф IRN',
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
          'PER (processo especial de revitalização) — процедура оздоровления и переговоров с кредиторами для компаний в трудном экономическом положении или на грани неплатёжеспособности; это не ликвидационное банкротство',
          'PEVE был временной COVID-процедурой (действовал до 30.06.2023) и в 2026 году не является стандартным вариантом; для реструктуризации обычно смотрят PER/RERE, для ликвидации — insolvência',
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
              'После оплаты долгов, налогов и утверждения ликвидационного баланса распределить остаток между sócios по правилам ликвидации и закрыть банковский счёт компании',
              'Отменить подписки (софт, домены, хостинг)'
            ]}
          ]},
          { id: 'f2', title: 'Юридические', content: [
            { kind: 'checklist', items: [
              'Аннулировать или передать отраслевые лицензии у профильного регулятора: недвижимость/mediação imobiliária — IMPIC; страхование — ASF; turismo/animação turística — Turismo de Portugal и т.д.',
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
    { label: 'Dissolução e liquidação imediata (Empresa na Hora)', amountEUR: 300, note: 'emolumento IRN, включая регистрацию' },
    { label: 'Закрытие Unipessoal (с ликвидацией)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Средняя Lda (полный процесс)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência (банкротство) через суд', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Insolvência (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}