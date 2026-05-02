export default {
  editorialVoice: 'hackportugal',
  id: 'digital-signature',
  categoryId: 'digital_gov',
  title: 'Квалифицированная электронная подпись — Chave Móvel Digital (государственная электронная подпись) и Cartão de Cidadão',
  tldr: 'В Португалии действует квалифицированная электронная подпись — Assinatura Digital Qualificada (QES): электронная подпись с той же юридической силой, что и собственноручная. Два официальных инструмента: Chave Móvel Digital (мобильная подпись) и Cartão de Cidadão (удостоверение гражданина Португалии) + USB-ридер/NFC. С QES можно подписывать договоры аренды, нотариальные документы, подавать документы в AIMA/Finanças/IRN без бумаги.',
  tags: ['электронная подпись', 'подпись', 'cmd', 'Cartão de Cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Правовой каркас',
      content: [
        { kind: 'paragraph', text: 'Электронная подпись в ЕС регулируется регламентом eIDAS (Regulation (EU) 910/2014). В Португалии Decreto-Lei (декрет-закон) 12/2021 адаптирует eIDAS в национальное законодательство.' },
        { kind: 'checklist', items: [
          'Три уровня подписи по eIDAS:',
          '  • Простая (SES) — email, SMS-код и т.п. Базовая доказательная сила',
          '  • Усовершенствованная (AES) — криптографически уникальная, связана с подписантом',
          '  • Квалифицированная (QES) — AES + сертификат QTSP + устройство QSCD. Юридически эквивалентна собственноручной во всём ЕС',
          '🇵🇹 Португалия предоставляет QES через два официальных инструмента: CMD и цифровой Cartão de Cidadão'
        ]}
      ]
    },
    {
      id: 'cmd-signature',
      title: 'Подпись через Chave Móvel Digital (CMD)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Активация функции подписи', content: [
            { kind: 'paragraph', text: 'Если CMD активирована, функция подписи включается отдельно. На autenticacao.gov.pt → «Ativar Assinatura Digital» → подтверждение PIN и SMS. Бесплатно.' }
          ]},
          { id: 'c2', title: '2. Подписание документа', content: [
            { kind: 'checklist', items: [
              'Открыть документ на портале цифровой подписи Autenticação.gov',
              'Загрузить PDF',
              'Ввести PIN CMD',
              'Подтвердить SMS-кодом или push-уведомлением через приложение Autenticação',
              'Скачать подписанный PDF — с криптографическим сертификатом'
            ]}
          ]},
          { id: 'c3', title: '3. Проверка подписи', content: [
            { kind: 'paragraph', text: 'Любой может проверить подпись на autenticacao.gov.pt/validacao-de-assinaturas — там видно имя подписанта, время и статус.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cc-signature',
      title: 'Подпись через Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'Для граждан Португалии с Cartão de Cidadão (нерезидентам эта опция недоступна — у них ВНЖ без чипа подписи). Нужен USB-ридер или телефон с NFC.' },
        { kind: 'substeps', items: [
          { id: 'cc1', title: '1. Активация функции подписи', content: [
            { kind: 'paragraph', text: 'При первом получении Cartão de Cidadão функция подписи часто выключена. Активация — в любом Espaço Cidadão либо онлайн через Autenticação.gov с USB-ридером.' }
          ]},
          { id: 'cc2', title: '2. Установка программы', content: [
            { kind: 'paragraph', text: 'Скачать настольное приложение «Autenticação.gov» (macOS/Windows/Linux) — официальную государственную программу Португалии.' }
          ]},
          { id: 'cc3', title: '3. Подписание', content: [
            { kind: 'paragraph', text: 'Вставить Cartão de Cidadão в ридер → открыть PDF в приложении Autenticação.gov → подписать → ввести PIN Cartão de Cidadão → готово.' }
          ]},
          { id: 'cc4', title: '4. PIN-коды', content: [
            { kind: 'checklist', items: [
              'PIN Autenticação (вход на госпорталы) — 4 цифры',
              'PIN Assinatura (подпись) — 4 цифры, отдельный',
              'PUK (разблокировка) — 8 цифр, в конверте Cartão de Cidadão',
              'Забыли PIN → до 3 попыток → блокировка → разблокировать на eportugal.gov.pt с PUK'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-cases',
      title: 'Где можно использовать',
      content: [
        { kind: 'checklist', items: [
          '📄 Contrato de arrendamento (договор аренды жилья) — без явки к нотариусу',
          '💼 Трудовые договоры',
          '📋 Декларация IRS и другие налоговые декларации',
          '🏛️ Запросы в AIMA через онлайн-портал',
          '⚖️ Судебные решения и процессуальные документы',
          '🏢 Сделки с компаниями (Empresa na Hora)',
          '🏥 Доступ к медицинским записям SNS 24',
          '🎓 Университетские заявления, дипломы',
          '📜 Доверенность (procuração) с цифровой подписью',
          '💰 Банковские операции (некоторые банки принимают QES вместо личного присутствия)'
        ]}
      ]
    },
    {
      id: 'cross-border',
      title: 'Трансграничное признание (ЕС и не-ЕС)',
      content: [
        { kind: 'paragraph', text: 'По eIDAS подпись из одной страны ЕС признаётся во всех остальных. Подпись CMD из Португалии имеет полную юридическую силу в Германии, Испании, Франции, Италии и др.' },
        { kind: 'paragraph', text: 'Проверка: подписанный PDF можно валидировать на любом портале ЕС (DSS Validator от Европейской комиссии — dss.nowina.lu).' },
        { kind: 'warning', text: 'За пределами ЕС (РФ, США, Китай) признание зависит от локальных законов и соглашений. В РФ подпись eIDAS не признаётся автоматически — для документов, предназначенных для РФ, нужна отдельная российская УКЭП.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Коммерческие QTSP',
      content: [
        { kind: 'paragraph', text: 'Помимо государственных CMD и Cartão de Cidadão, в Португалии работают коммерческие поставщики квалифицированных доверительных услуг (QTSP). Большинству они не нужны — CMD покрывает 99% случаев.' },
        { kind: 'checklist', items: [
          'DigitalSign (Португалия) — крупнейший коммерческий QTSP',
          'Multicert — корпоративные решения',
          'Bundesdruckerei / D-Trust (Германия) — применимы в Португалии',
          'Список всех QTSP в ЕС — EU Trust List (eidas.ec.europa.eu/efda/browse)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — центр электронной идентификации', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 910/2014 — eIDAS', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32014R0910', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 12/2021 (адаптация eIDAS в Португалии)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/12-2021', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMA — Agência para a Modernização Administrativa', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}