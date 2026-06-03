export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Регистрация в SNS и получение número de utente',
  tldr: 'Número de utente — персональный номер в SNS. Даёт право встать в список на семейного врача, на госпитализацию, льготные рецепты. Оформляется в Centro de Saúde / USF по месту жительства. Обычно нужны паспорт/ID, NIF, документ о законном пребывании (ВНЖ, виза, certificado de registo UE) или, если ВНЖ нет, atestado da Junta de Freguesia, прямо подтверждающий проживание в Португалии более 90 дней (Despacho n.º 25360/2001). NISS обычно не требуется для número de utente. Этот номер ≠ NIF: для здравоохранения нужен именно número de utente.',
  tags: ['sns', 'utente', 'медицина'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'Что это и зачем',
      content: [
        { kind: 'paragraph', text: 'Número de utente — 9-значный идентификатор в SNS. Без него сложнее записываться в SNS и получать льготные рецепты; часть плановых услуг может оплачиваться по тарифам SNS как для лиц без подтверждённого права на SNS. Экстренная помощь и защищённые случаи доступны независимо от номера.' },
        { kind: 'paragraph', text: 'Даёт доступ к SNS и постановку в список на médico de família (сам врач не всегда назначается сразу; в ряде регионов можно долго быть sem médico de família), осмотры, анализы, госпитализацию, льготы в аптеке (до 95% скидки на рецепт), прививки PNV. Линию 112 могут вызывать все находящиеся в Португалии независимо от utente — номер помогает с дальнейшим учётом и оплатой/льготами.' }
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
            { kind: 'checklist', items: ['ID/паспорт + документ о статусе: cartão de residência/ВНЖ, cartão de cidadão, certificado de registo cidadão UE, действующая виза/доказательство законного пребывания; если ВНЖ нет — atestado da Junta de Freguesia о проживании более 90 дней', 'NIF', 'Подтверждение адреса (atestado, счёт ЖКХ или договор аренды)', '⚠️ NISS обычно НЕ нужен для número de utente. Если он есть — можно взять с собой; отказ только из-за отсутствия NISS стоит оспаривать и просить письменное основание'] }
          ]},
          { id: 's3', title: '3. Заполнить форму регистрации', content: [
            { kind: 'paragraph', text: 'Centro de Saúde зарегистрирует вас и присвоит номер utente. Иногда выдают временный, постоянный приходит позже.' }
          ]},
          { id: 's4', title: '4. Получить семейного врача', content: [
            { kind: 'timeline', text: 'Сам número de utente обычно выдают в день обращения или в течение 1–14 дней. Назначение médico de família — отдельный этап: от сразу до многих месяцев в зависимости от региона. В Лиссабоне/Порту очередь больше, в провинциях быстрее.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'Если ВНЖ ещё нет',
      content: [
        { kind: 'paragraph', text: 'Иностранцы без ВНЖ тоже могут получить доступ к SNS, но обычно требуется atestado da Junta de Freguesia, прямо указывающий, что вы проживаете в Португалии более 90 дней (Despacho n.º 25360/2001).\n\nЧасто Junta просит двух свидетелей-резидентов freguesia или другие доказательства адреса. Без такого подтверждения гарантированы экстренная помощь и отдельные защищённые случаи; за плановую помощь могут выставлять счёт по тарифам SNS.' },
        { kind: 'warning', text: 'Экстренная помощь оказывается независимо от документов. Кроме того, беременные, несовершеннолетние, вакцинация, инфекционные заболевания/угрозы общественному здоровью, планирование семьи и некоторые другие защищённые ситуации имеют особый режим доступа.\n\nНа практике всё равно просите número de utente provisório и письменное основание при отказе.' }
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
    { title: 'Документ, удостоверяющий личность + статус', note: 'ВНЖ / CC / паспорт + виза или certificado de registo UE; без ВНЖ — atestado da Junta de Freguesia о проживании >90 дней' },
    { title: 'NIF' },
    { title: 'Подтверждение адреса', note: 'Atestado de Residência, договор аренды или счёт ЖКХ' },
    { title: 'NISS — не обязателен', note: 'не нужен для número de utente, но можно взять, если уже есть' }
  ],
  costs: [{ label: 'Регистрация в SNS', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Portal Oficial', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Despacho n.º 25360/2001 — acesso de cidadãos estrangeiros ao SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Portal Cidadão', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Pedir o número de utente do SNS', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-utente-do-sns', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}