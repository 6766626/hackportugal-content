export default {
  editorialVoice: 'hackportugal',
  id: 'uk-specific',
  categoryId: 'country_specific',
  title: 'Британцы в Португалии после Brexit',
  tldr: 'Британцы, проживавшие в Португалии до 31.12.2020, защищены Withdrawal Agreement и имеют специальные карты ВНЖ. Новые прибывающие после Brexit — граждане третьих стран, нужна D-виза. Налоговое соглашение Португалия—Великобритания действует. FATCA на Великобританию не действует, но CRS (автоматический обмен) — да.',
  audience: { countryCodes: ['GB'] },
  tags: ['uk', 'britanci', 'brexit', 'withdrawal agreement'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'wa-beneficiaries',
      title: 'Withdrawal Agreement (WA) — кто подпадает',
      content: [
        { kind: 'paragraph', text: 'Британские граждане, проживавшие в Португалии до 31 декабря 2020, защищены WA и имеют те же права, что и граждане ЕС: свобода работы, SNS, обучение.' },
        { kind: 'checklist', items: [
          'Статус: WA Beneficiary Residence Permit',
          'Carta de beneficiário do Acordo de Saída',
          'Те же права, что и у других граждан ЕС',
          'Не требуется менять на D-визу',
          'Применяется ко всем членам семьи, которые тоже были в Португалии до 31.12.2020'
        ]},
        { kind: 'paragraph', text: 'Если не оформили статус WA вовремя — обратитесь в AIMA сразу, возможно восстановление.' }
      ]
    },
    {
      id: 'after-brexit',
      title: 'Новые прибывающие (после 01.01.2021)',
      content: [
        { kind: 'paragraph', text: 'Британцы, приезжающие теперь, рассматриваются как граждане третьих стран (не ЕС). Требуется D-виза для ВНЖ.' },
        { kind: 'checklist', items: [
          'D7 (пассивный доход) — пенсионерам',
          'D8 (цифровой кочевник) — тем, кто работает удалённо. Популярно для IT-специалистов из Лондона',
          'D3 (квалифицированный специалист) — работа в португальской компании',
          'Golden Visa — крупным инвесторам',
          'Туристы: 90 дней в Шенгене без визы'
        ]},
        { kind: 'warning', text: 'CRUE (Certificado de Registo de Cidadão da União) — НЕ доступен британцам после Brexit. Некоторые Junta de Freguesia могут ошибочно выдать — это неверно. Должна быть D-виза или WA.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Налоги Великобритания ↔ Португалия',
      content: [
        { kind: 'checklist', items: [
          'Налоговое соглашение Португалия—Великобритания — в силе с 1968 года, обновлено протоколами (последний — 2016) — избежание двойного налогообложения',
          'Non-dom в Великобритании — не релевантно в Португалии (Португалия облагает мировой доход резидентов без опции non-dom)',
          'Резидент Португалии (>183 дней) — облагается мировым доходом в Португалии',
          'Британская пенсия (государственная, профессиональная): облагается в Португалии, где резидент. Великобритания может удержать налог у источника — зачёт через налоговый кредит за иностранный налог',
          'ISA — британская налоговая льгота не работает в Португалии: доход внутри ISA облагается в Португалии (дивиденды и проценты по обычным ставкам)',
          'SIPP — Португалия обычно признаёт как пенсионный план; выплаты облагаются как пенсионный доход, но налогообложение роста внутри SIPP — серая зона, часто нужен специалист',
          'CRS — британские банки отчитываются в Португалию автоматически (Common Reporting Standard)',
          'Режим IFICI: потенциально доступен британским цифровым кочевникам и квалифицированным специалистам'
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Документы из Великобритании',
      content: [
        { kind: 'checklist', items: [
          'Апостиль: Foreign, Commonwealth & Development Office (FCDO)',
          'Свидетельство о рождении: General Register Office (GRO) + апостиль FCDO',
          'Свидетельство о браке: аналогично',
          'DBS (Disclosure and Barring Service) — справка о несудимости',
          'Диплом: университет → апостиль FCDO',
          'Все документы должны быть переведены на португальский (присяжный перевод)'
        ]}
      ]
    },
    {
      id: 'banking',
      title: 'Банковские нюансы',
      content: [
        { kind: 'checklist', items: [
          'Британские банки (HSBC, Barclays и др.) — карты работают в Португалии',
          'Некоторые британские банки закрывают счета британским резидентам, переехавшим в ЕС (правила FCA)',
          'HSBC Premier International, Citi Plus — международные счета работают',
          'Revolut, Wise — отличный выбор для GBP↔EUR',
          'Португальские банки: ActivoBank, Millennium — принимают без сложностей'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Британское сообщество',
      content: [
        { kind: 'checklist', items: [
          'British Embassy Lisbon: Rua de São Bernardo 33',
          'British Council — культурные события, экзамены по английскому',
          'Algarve — крупнейшее сообщество британских экспатов',
          'Cascais — традиционная «английская бухта»',
          'British Hospital / Lusitânia — с британскими стандартами',
          'Британские школы: St Julian\'s (Carcavelos), The British School of Lisbon'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'British Embassy Lisbon', url: 'https://www.gov.uk/world/organisations/british-embassy-lisbon', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Acordo de Saída (WA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'HMRC — Portugal Tax Treaty', url: 'https://www.gov.uk/government/publications/portugal-tax-treaties', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'EU Commission — Brexit WA rights', url: 'https://commission.europa.eu/strategy-and-policy/relations-united-kingdom/eu-uk-withdrawal-agreement_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}