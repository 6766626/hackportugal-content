export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Регистрация в SNS и получение número de utente',
  tldr: 'Número de utente — персональный номер в SNS. Даёт право на семейного врача, госпитализацию, льготные рецепты. Оформляется в Centro de Saúde по месту жительства. ВНЖ — основной путь, но НЕ единственный: иностранцы с законным пребыванием (виза, registo de cidadão UE) могут оформить utente; лица без ВНЖ, проживающие в Португалии >90 дней, тоже имеют право (DL 67/2014). NISS не является универсальным обязательным документом — некоторые Centro de Saúde могут запрашивать его дополнительно, но это не общая норма SNS.',
  tags: ['sns', 'utente', 'медицина'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'Что это и зачем',
      content: [
        { kind: 'paragraph', text: 'Número de utente — 9-значный идентификатор в SNS. Без него приёмы оплачиваются как для нерезидента.' },
        { kind: 'paragraph', text: 'Даёт: бесплатного семейного врача, осмотры, анализы, скорую 112, госпитализацию, льготы в аптеке (до 90% скидки на рецепт), прививки.' }
      ]
    },
    {
      id: 'how',
      title: 'Как получить',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Найти свой Centro de Saúde', content: [
            { kind: 'paragraph', text: 'На sns24.gov.pt или sns.pt по почтовому коду.' }
          ]},
          { id: 's2', title: '2. Прийти лично с документами', content: [
            { kind: 'checklist', items: ['Документ, удостоверяющий личность: ВНЖ / CC / паспорт + виза / regis CRUE для EU', 'NIF', 'Подтверждение адреса (Atestado de Residência от Junta de Freguesia, счёт ЖКХ или договор аренды)', '⚠️ NISS — НЕ универсальное требование SNS; некоторые Centro de Saúde могут запросить его дополнительно, особенно если у вас статус наёмного работника или самозанятого'] }
          ]},
          { id: 's3', title: '3. Заполнить форму регистрации', content: [
            { kind: 'paragraph', text: 'Centro de Saúde зарегистрирует вас и присвоит номер utente. Иногда выдают временный, постоянный приходит позже.' }
          ]},
          { id: 's4', title: '4. Получить семейного врача', content: [
            { kind: 'timeline', text: 'От немедленно до 6 мес в зависимости от региона. В Лиссабоне/Порту очередь больше, в провинциях быстрее.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Если ВНЖ ещё нет',
      content: [
        { kind: 'paragraph', text: 'По DL 67/2014 (право на доступ к SNS) и Constituição art. 64, доступ к SNS не зависит исключительно от ВНЖ. Лица без ВНЖ, проживающие в Португалии **более 90 дней**, имеют право на utente — для оформления требуется Atestado de Residência от Junta de Freguesia, **подтверждающий проживание >90 дней** (стандартного подтверждения адреса для людей без легального статуса может не хватить — Junta de Freguesia учитывает свидетелей и фактическое присутствие).' },
        { kind: 'warning', text: 'Экстренная медицинская помощь, беременные, дети до 18 лет, инфекционные заболевания (туберкулёз, ВИЧ) — приём в SNS гарантирован независимо от документов и статуса.' }
      ]
    },
    {
      id: 'private',
      title: 'Параллельно: частная страховка',
      content: [
        { kind: 'paragraph', text: 'SNS + частная страховка — нормальная практика. Популярные: Médis, Multicare (Fidelidade), Tranquilidade. От 25 €/мес за базовый план до 80 €/мес за полный. Покрывает частные клиники и сокращает очереди.' }
      ]
    }
  ],
  documents: [
    { title: 'Документ, удостоверяющий личность', note: 'ВНЖ / CC / паспорт + виза или CRUE для EU' },
    { title: 'NIF' },
    { title: 'Подтверждение адреса', note: 'Atestado de Residência, договор аренды или счёт ЖКХ' },
    { title: 'NISS', note: 'не универсально обязательно; некоторые Centro de Saúde могут запросить' }
  ],
  costs: [{ label: 'Регистрация в SNS', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Portal Oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DL 67/2014 — Direito de Acesso ao SNS', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/67-2014-25344876', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS24 — Portal Cidadão', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Inscrição no SNS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/inscrever-se-no-servico-nacional-de-saude-sns-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}