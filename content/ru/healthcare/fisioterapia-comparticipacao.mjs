export default {
  editorialVoice: 'hackportugal',
  id: 'fisioterapia-comparticipacao',
  categoryId: 'healthcare',
  title: 'Fisioterapia с comparticipação SNS и частными страховками',
  tldr: 'В Португалии физиотерапию можно пройти через SNS по направлению médico de família: после отмены большинства taxas moderadoras в 2022 году для назначенных SNS процедур пациент обычно платит 0 €, но ждёт место и идёт в clínica convencionada. Частно — быстрее: обычно 25–40 € за сеанс, курс 5–15 сеансов = 125–600 €. Страховки Médis, Multicare, AdvanceCare и др. часто дают copagamento или reimburso, но требуют prescrição médica.',
  tags: ['fisioterapia', 'sns', 'страховка', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: '3 рабочих маршрута: SNS, seguro, частно',
      content: [
        { kind: 'paragraph', text: 'Fisioterapia в Португалии обычно относится к Medicina Física e de Reabilitação. Для мигранта практический выбор такой: ждать направление через SNS, использовать частную страховку или платить напрямую.' },
        { kind: 'checklist', items: [
          'SNS: сначала consulta у médico de família в Centro de Saúde; врач выдаёт prescrição/credencial на физиотерапию.',
          'SNS с comparticipação: процедуры выполняются в больнице SNS или в частной clínica convencionada с SNS.',
          'После Decreto-Lei 37/2022 большинство taxas moderadoras в SNS отменены; назначенная SNS физиотерапия обычно обходится пациенту в 0 €.',
          'Частная страховка: запись быстрее, но условия зависят от сети и плана — copagamento, plafonds, reimburso.',
          'Полностью частно: можно записаться без ожидания, но клиника может попросить prescrição médica, особенно после травм, операций и при хронической боли.',
          'Популярные сети и клиники: Fisiogaspar, Mais Saúde, Físio MAR; также много местных clínicas de fisioterapia в каждом concelho.'
        ] }
      ]
    },
    {
      id: 'sns-referral',
      title: 'Как получить физиотерапию через SNS',
      content: [
        { kind: 'paragraph', text: 'Нормальный путь — через médico de família. Если семейного врача ещё нет, просите consulta aberta / consulta do dia в своём Centro de Saúde или звоните SNS 24: 808 24 24 24. При острой травме — urgência или 112.' },
        { kind: 'substeps', items: [
          { id: 'book-consulta', title: '1. Запишитесь к врачу SNS', content: [
            { kind: 'checklist', items: [
              'Возьмите número de utente.',
              'Опишите проблему конкретно: боль, ограничение движения, дата травмы, операция, падение, неврологические симптомы.',
              'Принесите выписки, exames, relatório из частной клиники, если есть.',
              'Попросите prescrição para Medicina Física e de Reabilitação / fisioterapia, если врач считает это показанным.'
            ] }
          ] },
          { id: 'find-clinic', title: '2. Найдите clínica convencionada', content: [
            { kind: 'paragraph', text: 'С направлением SNS вас могут направить в unidade SNS или в частную клинику с convenção. В крупных городах очередь может быть заметной; в пригородах и малых городах иногда быстрее.' }
          ] },
          { id: 'start-sessions', title: '3. Подтвердите курс и стоимость до первого сеанса', content: [
            { kind: 'checklist', items: [
              'Спросите, принимает ли клиника credencial SNS именно по fisioterapia/MFR.',
              'Уточните, сколько сеансов одобрено.',
              'Проверьте, нужно ли платить alguma taxa; в большинстве SNS-направлений после 2022 года пациентская taxa moderadora = 0 €.',
              'Попросите расписание сразу на весь курс, чтобы не растягивать лечение на месяцы.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'private-insurance',
      title: 'Если есть частная страховка',
      content: [
        { kind: 'paragraph', text: 'У страховок в Португалии физиотерапия почти всегда идёт по правилам сети: либо copagamento в клинике-партнёре, либо reimburso после оплаты. Названия сетей: Médis, Multicare, AdvanceCare, Future Healthcare, RNA Medical и др.' },
        { kind: 'checklist', items: [
          'Проверьте в app страховщика раздел Fisioterapia / Medicina Física e Reabilitação.',
          'Уточните, нужна ли prescrição médica. Часто нужна, даже если вы идёте в частную клинику.',
          'Спросите лимит: количество сеансов в год, plafond в €, процент reimburso.',
          'В сети страховщика copagamento часто выгоднее, чем reimburso вне сети.',
          'Для reimburso сохраняйте fatura-recibo с NIF, prescrição médica и relatório/declaração de presença, если требует страховщик.',
          'Если физиотерапия связана с acidente de trabalho, seguro automóvel или спортом, сначала уточняйте, кто платит: обычная saúde-страховка может отказать.'
        ] },
        { kind: 'warning', text: 'Не покупайте пакет из 10–15 частных сеансов до проверки страхового покрытия. Некоторые планы покрывают только врачебную consulta de fisiatria, но не сами sessões de fisioterapia, или покрывают их только в конкретной rede.' }
      ]
    },
    {
      id: 'private-prices',
      title: 'Сколько стоит частно в 2026',
      content: [
        { kind: 'paragraph', text: 'Рынок сильно зависит от города и специализации. В Лиссабоне, Cascais, Porto и Algarve цены выше; в небольших городах ниже. Домашний визит дороже, особенно если нужен реабилитологический уход после операции или инсульта.' },
        { kind: 'checklist', items: [
          'Обычный сеанс fisioterapia в клинике: примерно 25–40 €.',
          'Курс 5 сеансов: примерно 125–200 €.',
          'Курс 10 сеансов: примерно 250–400 €.',
          'Курс 15 сеансов: примерно 375–600 €.',
          'Первичная avaliação может оплачиваться отдельно или входить в первый сеанс.',
          'Домашняя fisioterapia ao domicílio часто стоит дороже обычного сеанса; цену подтверждайте заранее.',
          'Послеоперационная, неврологическая, спортивная или тазовая физиотерапия может стоить выше базового диапазона.'
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'Что спросить у клиники перед записью',
      content: [
        { kind: 'paragraph', text: 'Хорошая клиника заранее объяснит, кто ведёт лечение, сколько длится сеанс, будет ли индивидуальная работа или групповой формат, какие документы нужны для SNS/seguro.' },
        { kind: 'checklist', items: [
          'Tem convenção com SNS para Medicina Física e Reabilitação?',
          'Aceitam a minha seguradora: Médis, Multicare, AdvanceCare или другую?',
          'Preciso de prescrição médica?',
          'Qual é o preço por sessão e por pacote?',
          'A avaliação inicial está incluída?',
          'Quanto dura cada sessão: 30, 45 или 60 минут?',
          'É tratamento individual или em grupo?',
          'Выдаёте fatura com NIF и документы для reimburso?',
          'Есть ли физиотерапевт с опытом по моей проблеме: coluna, joelho, ombro, pós-operatório, neurologia, pavimento pélvico?'
        ] },
        { kind: 'warning', text: 'Красные флаги: обещают “вылечить за 1 сеанс”, не спрашивают диагноз и лекарства, не оформляют fatura, не объясняют план лечения, навязывают большой пакет без avaliação.' }
      ]
    }
  ],
  costs: [
    { label: 'Физиотерапия через SNS по направлению', amountEUR: 0, note: 'Обычно 0 € taxa moderadora после отмены большинства пользовательских сборов; нужна prescrição SNS и место в unidade/convencionada.' },
    { label: 'Частный сеанс в клинике', amountEURMin: 25, amountEURMax: 40, note: 'Типичный диапазон за базовую sessão de fisioterapia в 2026; специализированные и домашние визиты могут быть дороже.' },
    { label: 'Курс 10 частных сеансов', amountEURMin: 250, amountEURMax: 400, note: 'Частый объём курса после травм, боли в спине, колене или плече; страховка может покрыть часть.' }
  ],
  sources: [
    { title: 'SNS 24 — портал доступа к услугам SNS и контакт 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 37/2022 — отмена большинства taxas moderadoras в SNS', url: 'https://dre.pt/dre/detalhe/decreto-lei/37-2022-183984849', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Entidade Reguladora da Saúde — права пользователей медицинских услуг', url: 'https://www.ers.pt/pt/utentes/direitos-e-deveres-dos-utentes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fisiogaspar — пример частной сети физиотерапии в Португалии', url: 'https://www.fisiogaspar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
