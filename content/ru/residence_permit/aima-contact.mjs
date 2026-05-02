export default {
  editorialVoice: 'hackportugal',
  id: 'aima-contact',
  categoryId: 'residence_permit',
  title: 'Как связаться с AIMA — все каналы',
  tldr: 'AIMA перегружена: линия 808 202 653 часто занята, электронная почта отвечает 2–6 недель, личный приём — только по предварительной записи. Реальный путь: личный кабинет AIMA Portal (portal.aima.gov.pt), записаться через Espaço Cidadão либо обратиться на специальную линию 800 203 373 для жителей, у которых уже есть процесс. Для срочных случаев — электронная почта по региону, список ниже.',
  tags: ['aima', 'контакты', 'связаться', 'телефон', 'электронная почта'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'channels',
      title: 'Каналы связи — по приоритету',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. AIMA Portal (portal.aima.gov.pt) — онлайн-кабинет', content: [
            { kind: 'paragraph', text: 'Основной канал с 2026. Вход через Chave Móvel Digital (государственная электронная подпись) или NIF+пароль. Статус дела, подача документов, уведомления, запись на приём. Покрывает 80 % обращений без звонков.' }
          ]},
          { id: 'c2', title: '2. Espaço Cidadão — личный приём', content: [
            { kind: 'paragraph', text: 'В некоторых Espaço Cidadão работают окна AIMA. Запись на ePortugal.gov.pt → «Agendamento (запись на приём) AIMA». Обычно 2–4 недели ожидания, но дают конкретную помощь по делу.' }
          ]},
          { id: 'c3', title: '3. Официальный телефон — 808 202 653', content: [
            { kind: 'checklist', items: [
              'Часы: пн–пт 09:00–17:30',
              'Стоимость — обычный городской тариф',
              'Часто занято; лучший шанс — первые 30 минут после открытия',
              'Говорите чётко по-португальски, английский возможен, но медленнее',
              'Для повторных звонков — чередуйте номер с кодом региона'
            ]}
          ]},
          { id: 'c4', title: '4. Специальная линия — 800 203 373', content: [
            { kind: 'paragraph', text: 'Бесплатная линия для лиц с ОТКРЫТЫМ процессом в AIMA. Нужен номер процесса (processo). Часы те же. Полезна для запроса статуса, жалоб, экстренной помощи.' }
          ]},
          { id: 'c5', title: '5. Электронная почта по регионам', content: [
            { kind: 'checklist', items: [
              'Lisboa — lisboa@aima.gov.pt',
              'Porto — porto@aima.gov.pt',
              'Centro (Coimbra, Leiria) — centro@aima.gov.pt',
              'Alentejo (Évora, Beja) — alentejo@aima.gov.pt',
              'Algarve (Faro) — algarve@aima.gov.pt',
              'Açores — acores@aima.gov.pt',
              'Madeira — madeira@aima.gov.pt',
              'Общий адрес — info@aima.gov.pt (ответ 2–6 недель)'
            ]},
            { kind: 'paragraph', text: 'Всегда указывайте processo, полное имя, NIF, дату подачи. Прикладывайте PDF документов.' }
          ]}
        ]}
      ]
    },
    {
      id: 'community-tools',
      title: 'Инструменты сообщества для дозвона',
      content: [
        { kind: 'paragraph', text: 'Линия AIMA 808 202 653 часто занята — сообщество придумало обходные способы. Эти инструменты неофициальные, но массово используются и экономят часы повторных звонков:' },
        { kind: 'checklist', items: [
          '🤖 Telegram-бот @callaimabot — автоматический дозвон в SEF/AIMA. Вы отправляете боту свой номер и процесс, он перезванивает на линию AIMA каждые N минут, пока не дозвонится, и соединяет вас с оператором. Бесплатно',
          '📱 Сообщество @aimacall — публикует успешные окна дозвона (статистика сообщений)',
          '💬 Чат @aimasefgroup — типичные вопросы решаются коллективно: проверка DUC, CN-кодов, ошибки при оплате',
          '⚠️ Эти сервисы НЕ официальные, AIMA их не регулирует. Ваши персональные данные передаются третьему лицу — решайте, готовы ли вы'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Практика: как добиться ответа',
      content: [
        { kind: 'checklist', items: [
          '📅 Запись в AIMA через портал — в среднем 15–60 дней ожидания. Записываться заранее',
          '☎️ Звонить лучше вторник–четверг. Понедельник и пятница — мёртвые. Первые 30 минут после открытия — самый высокий шанс дозвониться',
          '🗣️ Скрипт: «Bom dia, tenho o processo número X e gostaria de saber o estado» (добрый день, у меня процесс X, хотел бы узнать статус)',
          '📧 Письмо без processo часто игнорируется. Всегда прилагайте документы или скриншот портала',
          '📮 Петиции в Provedor de Justiça (омбудсмен) при длительной просрочке > 90 дней — реально ускоряют',
          '⚖️ Судебная мера против бездействия AIMA — административный иск через адвоката, обычно intimação para a prática de ato devido (CPTA). «Injunção» в Португалии — это процедура взыскания денежных требований, а не средство против административного бездействия (распространённая ошибка)'
        ]}
      ]
    },
    {
      id: 'physical-addresses',
      title: 'Физические адреса — крупные делегации',
      content: [
        { kind: 'checklist', items: [
          '📍 Lisboa Central — Av. António Augusto de Aguiar, 20',
          '📍 Lisboa Odivelas — Rua Correia Teles 140',
          '📍 Porto Central — Rua D. João IV, 863',
          '📍 Coimbra — Rua Venâncio Rodrigues, 25',
          '📍 Faro — Rua Cons. Bivar, 14',
          '📍 Funchal — Rua Nova da Rochinha 1, Madeira',
          '📍 Ponta Delgada — Rua Eng. José Cordeiro, Açores',
          '⚠️ БЕЗ предварительной записи НЕ принимают. Приём без записи не работает с 2024 г.'
        ]}
      ]
    },
    {
      id: 'when-escalate',
      title: 'Когда эскалировать',
      content: [
        { kind: 'checklist', items: [
          'Отказ AIMA → обжалование в суд 30 дней (Tribunal Administrativo)',
          'Молчание > 90 дней на петицию → жалоба в Provedor de Justiça (provedor-jus.pt)',
          'Непорядочность сотрудника → Inspecção-Geral dos Serviços (IGAI) министерства',
          'Проблемы с ВНЖ и риск депортации → срочно юрист из Ordem dos Advogados (Коллегия адвокатов Португалии) с иммиграционной практикой',
          'Уязвимая группа (беженцы, несовершеннолетние) → CPR (Conselho Português para os Refugiados)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — контакты и онлайн-запись', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA Portal — portal.aima.gov.pt', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Agendamento AIMA', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça — омбудсмен Португалии', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}