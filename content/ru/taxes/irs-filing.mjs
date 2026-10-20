export default {
  editorialVoice: 'hackportugal',
  id: 'irs-filing',
  categoryId: 'taxes',
  title: 'Подача IRS — налоговая декларация физического лица',
  tldr: 'IRS = Imposto sobre o Rendimento das Pessoas Singulares. Подаётся ежегодно с 1 апреля по 30 июня в Portal das Finanças (налоговый портал).\n\nНалоговые резиденты обычно декларируют мировой доход; есть освобождения от подачи по art. 58 CIRS (низкие/окончательно обложенные доходы).\n\nЕсть автоматическая предзаполненная версия (IRS Automático) для предусмотренных AT простых случаев.',
  tags: ['irs', 'налоги', 'декларация'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: "2026-10-20",
  changeSummary: "Опубликовано снижение удержаний IRS на ноябрь: условия для материка и Азорских островов, исключения, возврат обычных удержаний в декабре. Обновлён статус PPL 108/XVII/2 и проекта OE2027.",
  pendingLaw: {
    "summary": "Парламент уже одобрил PPL 108/XVII/2, что прямо указано в Despacho 12523-A/2026. Ноябрьское снижение удержаний опубликовано и применяется с 01.11.2026. Однако на 20.10.2026 проверенная страница AT со ст. 68 CIRS по-прежнему содержит шкалу 12,5–48%; в проверенных источниках не найден опубликованный декрет-закон, вводящий новые годовые ставки. Ожидаемую шкалу 12,2–48% не используйте как подтверждённую действующую норму без проверки публикации. Представленный 08.10 проект OE2027 также пока не окончательный закон.",
    "sourceUrl": "https://diariodarepublica.pt/dr/detalhe/despacho/12523-a-2026-1180337885"
  },
  steps: [
    {
      "id": "who",
      "title": "Кто подаёт",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Налоговые резиденты Португалии: пребывание >183 дней в любом 12-мес. периоде, начинающемся/заканчивающемся в году, или habitual abode (art. 16 CIRS). Обычно подают, но есть исключения по art. 58 CIRS",
            "Нерезиденты с доходом из Португалии — подают только на португальский доход",
            "Субъекты NHR/IFICI — подают с особыми формами/отметками"
          ]
        },
        {
          "kind": "warning",
          "text": "Резиденты обычно декларируют мировой доход. NHR/IFICI дают льготы по правилам режима, не полное освобождение."
        }
      ]
    },
    {
      "id": "deadline",
      "title": "Сроки",
      "content": [
        {
          "kind": "paragraph",
          "text": "Декларация за год N подаётся между 1 апреля и 30 июня года N+1 — независимо от категории дохода: зарплата, Recibo Verde (электронные чеки самозанятого), аренда и т.д."
        },
        {
          "kind": "warning",
          "text": "За просрочку — coima обычно €150–€3 750 (RGIT art. 116) с возможным снижением при быстрой добровольной подаче. Если нашли ошибку — подайте declaração de substituição; не подавайте заведомо неверные данные."
        }
      ]
    },
    {
      "id": "categories",
      "title": "Категории доходов",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Категория A — доходы от наёмной работы / зарплата",
            "Категория B — самозанятость (Recibo Verde)",
            "Категория E — инвестиционный доход (дивиденды, проценты)",
            "Категория F — аренда недвижимости",
            "Категория G — прирост капитала (продажа акций, криптовалюта)",
            "Категория H — пенсии",
            "Иностранный доход — в приложении J"
          ]
        }
      ]
    },
    {
      "id": "process",
      "title": "Процесс подачи",
      "content": [
        {
          "kind": "substeps",
          "items": [
            {
              "id": "s1",
              "title": "1. IRS Automático (если подходите)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "IRS Automático доступен только для предусмотренных AT простых случаев — обычно для части Categoria A/H без иностранного дохода (Anexo J), без сложных приложений и льгот. Проверить eligibility — на Portal das Finanças → IRS → IRS Automático."
                }
              ]
            },
            {
              "id": "s2",
              "title": "2. Ручная подача (Modelo 3)",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Если есть дополнительные источники — подача через Portal das Finanças → IRS → Entregar. Нужно заполнить Modelo 3 + нужные приложения (Anexos)."
                }
              ]
            },
            {
              "id": "s3",
              "title": "3. Приложения",
              "content": [
                {
                  "kind": "checklist",
                  "items": [
                    "Anexo A — доходы от наёмной работы (Categoria A) и пенсии (Categoria H), выплаченные португальскими плательщиками",
                    "Anexo B — Recibo Verde (упрощённый режим)",
                    "Anexo C — Recibo Verde (организованный бухучёт)",
                    "Anexo E — инвестиции",
                    "Anexo F — аренда",
                    "Anexo G — прирост капитала",
                    "Anexo H — вычеты (здоровье, образование, еда, жильё)",
                    "Anexo J — иностранный доход"
                  ]
                }
              ]
            },
            {
              "id": "s4",
              "title": "4. Проверка и отправка",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "Автоматическая проверка. После отправки — подтверждение подачи (comprovativo de entrega). Статус — на Portal das Finanças."
                }
              ]
            },
            {
              "id": "s5",
              "title": "5. Результат",
              "content": [
                {
                  "kind": "paragraph",
                  "text": "К июлю-августу — расчёт (liquidação). Если переплата — возврат. Если недоплата — срок оплаты до 31 августа."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "deductions",
      "title": "Главные вычеты (Anexo H)",
      "content": [
        {
          "kind": "checklist",
          "items": [
            "Медицинские расходы — 15% до €1 000",
            "Образование — 30% до €800 на семью (а не на ребёнка)",
            "Общие семейные расходы (счета с NIF) — 35% до €250 на налогоплательщика",
            "Exigência de fatura (рестораны/отели, ремонт авто/мото, парикмахерские, ветеринары, спортзалы и др.) — 15% от уплаченного IVA, общий лимит €250 на домохозяйство",
            "Аренда постоянного жилья: 15% допустимых расходов; общий предел для доходов 2026 года — 900 €, с 2027 — 1 000 € (art. 78-E CIRS и art. 15 DL 97/2026). Более высокие пределы для низких доходов сохраняются. Это вычет из налога, не автоматическая выплата и не льгота исключительно для RSAA.",
            "Проценты по кредиту на постоянное собственное жильё — 15% до €296 только для договоров до 31.12.2011",
            "PPR — 20% взносов: до €400 (младше 35 лет), €350 (35–50), €300 (старше 50)"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Чтобы вычеты засчитались — запрашивайте NIF во всех чеках. e-Fatura в Portal das Finanças автоматически собирает счета; до установленного срока проверьте и классифицируйте расходы."
        }
      ]
    },
    {
      "id": "nhr-ifici",
      "title": "NHR и IFICI — особенности",
      "content": [
        {
          "kind": "paragraph",
          "text": "NHR для уже зарегистрированных действует до конца 10-летнего периода: 20% на ряд португальских доходов от high value-added activities; по иностранным доходам режим зависит от категории и DTA (не универсальные 0%); иностранные пенсии для новых NHR — обычно 10%."
        },
        {
          "kind": "paragraph",
          "text": "IFICI с 2024 — 20% ставка на eligible net employment/business income по утверждённому перечню (Estatuto dos Benefícios Fiscais art. 58-A, Portaria 352/2024/1).\n\nНужна регистрация в AT/компетентной entity (FCT, ANI, Startup Portugal, AICEP/IAPMEI) в установленный срок. Несовместим с NHR. Подача — через профиль IFICI + Modelo 3 с отметкой."
        }
      ]
    },
    {
      "id": "november-2026-withholding",
      "title": "Удержания IRS в ноябре 2026",
      "content": [
        {
          "kind": "paragraph",
          "text": "С 1 по 30 ноября 2026 на материке удерживают 50% суммы IRS, рассчитанной по таблицам Despacho 233-A/2026, с зарплат и пенсий, включая выплаченную в ноябре рождественскую премию. Исключение: месячный доход выше верхней границы предпоследней ступени применимой таблицы удержаний. С 1 декабря возвращается обычный расчёт; ошибочное ноябрьское удержание плательщик может исправить до конца декабря. Для Азорских островов аналогичное правило установлено отдельно Despacho 12610-A/2026 на базе региональных таблиц 1179/2026. Мадейра этими двумя актами не охвачена. Это уменьшение авансового платежа, а не скидка 50% на итоговый годовой налог."
        }
      ]
    }
  ],
  sources: [
    {
      "title": "Portal das Finanças — IRS",
      "url": "https://www.portaldasfinancas.gov.pt/at/html/index.html",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "ePortugal — Entregar IRS",
      "url": "https://www.gov.pt/servicos/entregar-o-irs",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "Código do IRS (Diário da República)",
      "url": "https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "AT — Dispensa de entrega da declaração de IRS",
      "url": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Folheto_IRS_Dispensa_Entrega.pdf",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-05-17"
    },
    {
      "title": "Despacho n.º 12523-A/2026 — retenção de IRS em novembro (Continente)",
      "url": "https://diariodarepublica.pt/dr/detalhe/despacho/12523-a-2026-1180337885",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "AT — Despacho n.º 12610-A/2026: retenção de IRS em novembro (Açores)",
      "url": "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/legislacao/diplomas_legislativos/Documents/despacho-12610-a-2026.pdf",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "AT — Código do IRS, artigo 68.º: taxas gerais",
      "url": "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs68.aspx",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "Governo — apresentação da proposta de Orçamento do Estado para 2027 (08.10.2026)",
      "url": "https://portugal.gov.pt/pt/gc25/comunicacao/noticias/oe-2027-um-portugal-mais-preparado-com-mais-rendimento-e-investimento",
      "kind": "official",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    },
    {
      "title": "Decreto-Lei n.º 97/2026 — RSAA e medidas fiscais para habitação",
      "url": "https://diariodarepublica.pt/dr/detalhe/decreto-lei/97-2026-1124493227",
      "kind": "law",
      "language": "pt",
      "lastRetrieved": "2026-10-20"
    }
  ],
  lastVerified: '2026-09-25',
  verifyIntervalDays: 180
}
