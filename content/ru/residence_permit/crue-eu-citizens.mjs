export default {
  editorialVoice: 'hackportugal',
  id: 'crue-eu-citizens',
  categoryId: 'residence_permit',
  title: 'CRUE — регистрация граждан ЕС/ЕЭЗ/Швейцарии',
  tldr: 'Граждане ЕС/ЕЭЗ/Швейцарии не нуждаются в визе. Если планируете жить в Португалии БОЛЕЕ 3 месяцев — нужно зарегистрироваться в течение 30 дней после истечения первых 3 месяцев пребывания и получить Certificado de Registo de Cidadão da União Europeia (CRUE).\n\nОформляется в Câmara Municipal по месту жительства. ~€ 15 (для детей младше 6 лет — €7,50), выдаётся обычно в день визита; ожидание записи зависит от муниципалитета.',
  audience: { citizenships: ['euEeaSwiss'] },
  tags: ['crue', 'ес', 'регистрация'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what',
      title: 'Что такое CRUE',
      content: [
        { kind: 'paragraph', text: 'CRUE = Certificado de Registo de Cidadão da União Europeia. Подтверждает ваше право проживать в Португалии как гражданина ЕС. Действует 5 лет, после — постоянная резиденция.' },
        { kind: 'warning', text: 'Это НЕ аналог ВНЖ для граждан третьих стран — CRUE не даёт больше прав, чем у вас уже есть как у гражданина ЕС. Это просто регистрация проживания.' }
      ]
    },
    {
      id: 'when',
      title: 'Когда регистрироваться',
      content: [
        { kind: 'paragraph', text: 'CRUE нужен только при намерении оставаться в Португалии БОЛЕЕ 3 месяцев; для пребывания до 3 месяцев гражданину ЕС обычно достаточно действительного ID/паспорта. По Lei n.º 37/2006 art. 14: регистрация делается в течение 30 дней после истечения первых 3 месяцев пребывания. Штраф за нарушение — € 400–1500.' },
        { kind: 'paragraph', text: 'На практике многие муниципалитеты принимают регистрацию сразу после въезда.' }
      ]
    },
    {
      id: 'where',
      title: 'Где получить',
      content: [
        { kind: 'paragraph', text: 'Обычно — в Câmara Municipal по месту жительства. В отдельных муниципалитетах часть обслуживания может быть делегирована Junta de Freguesia, но это нужно проверять локально.' },
        { kind: 'paragraph', text: 'Запись зависит от муниципалитета: проверяйте сайт вашей Câmara Municipal или связывайтесь с balcão/serviços municipais напрямую. Portal do Eleitor для CRUE НЕ используется (это сайт по избирательным вопросам). В больших городах (Лиссабон, Порту) запись обязательна.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы',
      content: [
        { kind: 'paragraph', text: 'По Lei n.º 37/2006 art. 7, конкретные документы зависят от категории:' },
        { kind: 'checklist', items: [
          'Национальное удостоверение личности или паспорт',
          'Подтверждение адреса в Португалии (договор аренды / подтверждение проживания)',
          'Работник / самозанятый: declaração под присягой о работе или independent activity, контракт или declaração de início de atividade, если просят',
          'Студент: подтверждение зачисления + declaração о достаточных средствах и (когда применимо) медицинское покрытие',
          'Экономически неактивный / пенсионер: declaração о достаточных средствах и (когда применимо) медицинское покрытие'
        ]},
        { kind: 'paragraph', text: 'Часто достаточно declaração sob compromisso de honra, но конкретная Câmara может запросить выписки, пенсию, контракт, enrolment letter или иные подтверждения — проверьте список вашего муниципалитета заранее.' }
      ]
    },
    {
      id: 'after',
      title: 'После получения',
      content: [
        { kind: 'checklist', items: [
          'NIF можно и обычно стоит получить ДО CRUE или параллельно — он часто нужен для аренды, работы и коммунальных услуг',
          'NISS (если работаете)',
          'Регистрация в SNS / centro de saúde — обычно с NIF, CRUE и подтверждением адреса; в зависимости от ситуации могут запросить NISS, S1 или другое подтверждение права на медобслуживание',
          'Обмен водительских прав — не нужен, права ЕС принимаются напрямую',
          'После 5 лет — отдельная процедура запроса certificado de residência permanente; это не автоматическая замена CRUE'
        ]},
        { kind: 'paragraph', text: 'По действующему праву натурализация после 5 лет легального проживания при выполнении остальных условий, включая знание португальского A2.\n\n03.05.2026 Президент Сегуру промульгировал Decreto AR 48/XVII — после публикации в DRE срок для граждан ЕС/ЕЭЗ/Швейцарии вырастет до 7 лет (приравнены к CPLP).' }
      ]
    }
  ],
  costs: [
    { label: 'Пошлина CRUE', amountEUR: 15, note: 'для детей младше 6 лет — около €7,50; сверяйтесь с tabela вашей Câmara Municipal' }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — регистрация гражданина União Europeia', url: 'https://www.gov.pt/servicos/registar-cidadao-uniao-europeia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 37/2006 — въезд и проживание граждан ЕС', url: 'https://diariodarepublica.pt/dr/detalhe/lei/37-2006', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Your Europe — формальности проживания в Португалии', url: 'https://europa.eu/youreurope/citizens/residence/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}