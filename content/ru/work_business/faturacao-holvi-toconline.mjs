export default {
  editorialVoice: 'hackportugal',
  id: 'faturacao-holvi-toconline',
  categoryId: 'work_business',
  title: 'Программы выставления счетов для recibos verdes: Holvi, ToConline, Visee, Faturalia',
  tldr: 'Самозанятый в Португалии может бесплатно выставлять recibos verdes в Portal das Finanças. Но если нужен нормальный учёт клиентов, повторяющиеся счета, экспорт SAF-T, QR и ATCUD, берут сертифицированную программу: ToConline, Visee, Faturalia, MOLONI.\n\nБюджет в 2026: от 0 € до 30 €/мес. Holvi удобен как банковский счёт + инвойсы, но fiscal invoice для AT должен быть из Portal das Finanças или программы с сертификатом AT.',
  tags: ['recibosverdes', 'faturação', 'atcud', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'Что обязательно в 2026: QR, ATCUD, сертификат AT',
      content: [
        { kind: 'paragraph', text: 'Для recibos verdes есть два разных сценария. Первый: вы выставляете recibo verde eletrónico прямо в Portal das Finanças — это бесплатно и уже соответствует требованиям AT. Второй: вы используете внешнюю программу faturação — тогда документ должен быть фискально корректным: QR code, ATCUD, серия, comunicação à AT и, в большинстве практических случаев, сертифицированное ПО.' },
        { kind: 'checklist', items: [
          'ATCUD обязателен на фискальных документах с 2023 года: это код валидации серии + номер документа.',
          'QR code обязателен на faturas и recibos, выдаваемых программами faturação.',
          'Серии документов нужно сообщать в AT до использования, чтобы получить código de validação.',
          'Faturas нужно передавать в AT через SAF-T/PT или webservice в установленные сроки.',
          'Portal das Finanças сам формирует recibo verde eletrónico — отдельная программа не нужна.',
          'Если программа не сертифицирована AT, не считайте её фискальной заменой Portal das Finanças.',
          'Счёт в PDF для клиента и fiscal invoice для AT — не одно и то же.'
        ] },
        { kind: 'warning', text: 'Не отправляйте клиенту “invoice” из несертифицированного сервиса как единственный налоговый документ. Для IRS/IVA в Португалии документ должен быть выдан через Portal das Finanças или через ПО, признаваемое AT.' }
      ]
    },
    {
      id: 'when-portal-is-enough',
      title: 'Когда достаточно бесплатного Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'Если у вас 1–5 клиентов в месяц, услуги без сложного склада и вы работаете как trabalhador independente, Portal das Finanças обычно достаточно. Вы заходите в Finanças → Faturas e Recibos Verdes → Emitir, выбираете клиента, atividade, IVA, retenção na fonte и тип документа.' },
        { kind: 'checklist', items: [
          'Подходит для фрилансера с простыми услугами: IT, дизайн, консалтинг, обучение, маркетинг.',
          'Не стоит 0 €: нет абонентской платы, нет настройки SAF-T, нет покупки сертификата.',
          'Поддерживает fatura, recibo и fatura-recibo.',
          'Данные сразу у AT — не нужно отдельно отправлять SAF-T.',
          'Можно скачать PDF и отправить клиенту.',
          'Минус: слабый CRM, нет красивых шаблонов, мало автоматизации, неудобно для десятков документов.',
          'Минус: банковская сверка, отчёты по дебиторке и recurring invoices почти отсутствуют.'
        ] },
        { kind: 'paragraph', text: 'Если вы на isenção de IVA по art. 53 CIVA, в документе указываете соответствующее основание освобождения. На 2026 ориентир малого режима — 15 000 € годового оборота; если приближаетесь к лимиту, заранее обсудите с contabilista переход на IVA.' }
      ]
    },
    {
      id: 'software-comparison',
      title: 'Что выбрать: Holvi, ToConline, Visee, Faturalia, MOLONI',
      content: [
        { kind: 'substeps', items: [
          { id: 'toconline', title: 'ToConline — самый “португальский” вариант', content: [
            { kind: 'paragraph', text: 'ToConline — популярная португальская платформа для faturação, gestão и связи с contabilista. Сильная сторона — локальная налоговая логика: séries, ATCUD, QR, SAF-T, IVA, retenção, экспорт для бухгалтера.' },
            { kind: 'checklist', items: [
              'Хорош для recibos verdes с регулярными B2B-клиентами.',
              'Подходит, если бухгалтер уже работает в ToConline.',
              'Есть управление клиентами, продуктами/услугами, отчётами.',
              'Проверяйте тариф: часть функций может быть в платных планах.',
              'Лучший выбор, если нужен минимум “иностранной экзотики” и максимум PT compliance.'
            ] }
          ] },
          { id: 'holvi', title: 'Holvi — банк + инвойсы, но проверяйте fiscal compliance', content: [
            { kind: 'paragraph', text: 'Holvi удобен как business account с карточкой, IBAN, категориями расходов и выставлением клиентских инвойсов. Но для Португалии ключевой вопрос не дизайн PDF, а сертификат AT, ATCUD, QR и comunicação à AT.' },
            { kind: 'warning', text: 'Если конкретный продукт Holvi для вашего аккаунта не указан в списке programas de faturação certificados AT, используйте Holvi для банковского учёта и напоминаний, а fiscal invoice/recibo выдавайте в Portal das Finanças или в сертифицированной программе.' }
          ] },
          { id: 'visee-faturalia-moloni', title: 'Visee, Faturalia, MOLONI — недорогие PT-сервисы', content: [
            { kind: 'paragraph', text: 'Visee, Faturalia и MOLONI обычно выбирают за простую faturação, быстрый старт и цену в диапазоне 0–30 €/мес. Для самозанятых важны не “красивые счета”, а наличие сертификации AT, корректных налоговых полей и экспорта SAF-T.' },
            { kind: 'checklist', items: [
              'Проверьте номер сертификата AT на сайте сервиса и в списке Portal das Finanças.',
              'Убедитесь, что сервис поддерживает ATCUD и QR code.',
              'Проверьте, есть ли recibos, faturas-recibo и credit notes, а не только обычные invoices.',
              'Проверьте поддержку retenção na fonte для recibos verdes.',
              'Проверьте экспорт SAF-T/PT и автоматическую comunicação à AT.',
              'Проверьте, можно ли дать доступ contabilista без передачи вашего пароля Finanças.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'setup',
      title: 'Как настроить программу без ошибок',
      content: [
        { kind: 'paragraph', text: 'Перед первым документом настройте не логотип, а налоговые параметры. Ошибка в IVA или retenção потом исправляется nota de crédito или аннулированием, а клиенту придётся менять свою бухгалтерию.' },
        { kind: 'checklist', items: [
          'Проверьте начало atividade в Finanças: CAE/CIRS, regime de IVA, regime de contabilidade.',
          'Введите NIF, имя, morada fiscal точно как в Finanças.',
          'Настройте séries документов на 2026 год и получите código de validação для ATCUD.',
          'Выберите типы документов: fatura, recibo, fatura-recibo, nota de crédito.',
          'Настройте IVA: normal, isenção art. 53 CIVA, autoliquidação или operações intracomunitárias — по вашей ситуации.',
          'Настройте retenção na fonte: для многих услуг B2B в Португалии может быть 25%, но есть исключения и dispensa.',
          'Проверьте клиентов: NIF português, VAT ID ЕС через VIES, адрес, страна.',
          'Сделайте тестовый документ на малого клиента или в черновике, прежде чем массово выставлять счета.',
          'Дайте бухгалтеру доступ к программе или экспортируйте SAF-T/Excel каждый месяц.',
          'Храните PDF и данные не менее срока налоговой проверки; не полагайтесь только на почту клиента.'
        ] },
        { kind: 'warning', text: 'Не используйте один и тот же номер документа в двух системах. Если начали серию в Portal das Finanças, а потом перешли в ToConline/MOLONI, новая программа должна иметь свои серии и ATCUD.' }
      ]
    },
    {
      id: 'pricing-and-choice',
      title: 'Сколько стоит и какой вариант брать',
      content: [
        { kind: 'paragraph', text: 'Для большинства expat-фрилансеров выбор простой: до нескольких счетов в месяц — Portal das Finanças за 0 €. Если клиентов много, есть IVA, EU-клиенты, recurring invoices или бухгалтер просит SAF-T — берите португальскую сертифицированную программу.' },
        { kind: 'checklist', items: [
          '0 €/мес: Portal das Finanças — достаточно для простых recibos verdes.',
          '5–15 €/мес: базовые тарифы PT-сервисов для poucas faturas и простого учёта.',
          '15–30 €/мес: больше автоматизации, отчётов, банковских сверок, пользователей и интеграций.',
          'Holvi имеет смысл, если вам важны business banking, карта и контроль расходов.',
          'ToConline имеет смысл, если бухгалтер в Португалии уже использует его.',
          'MOLONI/Faturalia/Visee имеют смысл, если нужен простой certified invoicing без тяжёлой бухгалтерии.',
          'Не покупайте годовой тариф, пока не проверили AT certification, ATCUD, QR и SAF-T на реальном документе.'
        ] },
        { kind: 'paragraph', text: 'Программа faturação не заменяет декларации IRS, IVA и Segurança Social. Она помогает выставлять документы и передавать данные, но ответственность за режим IVA, удержания, Modelo 3 IRS и квартальные declaração trimestral остаётся на вас.' }
      ]
    }
  ],
  costs: [
    { label: 'Portal das Finanças: recibos verdes eletrónicos', amountEUR: 0, note: 'Бесплатно; лучший старт для простого trabalhador independente.' },
    { label: 'Базовая программа faturação', amountEURMin: 5, amountEURMax: 15, note: 'Обычно хватает для малого числа клиентов и простого SAF-T/ATCUD.' },
    { label: 'Расширенный тариф faturação/gestão', amountEURMin: 15, amountEURMax: 30, note: 'Больше пользователей, отчётов, автоматизации, интеграций и поддержки бухгалтера.' },
    { label: 'Contabilista для проверки режима IVA/IRS', amountEURMin: 50, amountEURMax: 150, note: 'Не обязательно для всех, но полезно при IVA, EU-клиентах, retenção и росте оборота.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: apoio ao contribuinte и programas de faturação certificados',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Faturacao/Paginas/certificacao-de-software.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 28/2019: regras de processamento de faturas e conservação de documentos',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/28-2019-119622094',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 195/2020: QR code e ATCUD nos documentos fiscalmente relevantes',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/195-2020-140510604',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ToConline: faturação e gestão online em Portugal',
      url: 'https://www.toconline.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
