export default {
  editorialVoice: 'hackportugal',
  id: 'crue-eu-citizens',
  categoryId: 'residence_permit',
  title: 'CRUE — регистрация граждан ЕС/ЕЭЗ/Швейцарии',
  tldr: 'Граждане ЕС/ЕЭЗ/Швейцарии не нуждаются в визе, но обязаны зарегистрироваться в течение 30 дней пребывания — получить Certificado de Registo de Cidadão da União Europeia (CRUE). Оформляется в Câmara Municipal по месту жительства. ~€ 15, выдаётся в день визита.',
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
        { kind: 'paragraph', text: 'В течение 30 дней после 3 месяцев пребывания в Португалии (итого 4 месяца после въезда). Штраф за нарушение — € 400–1500.' },
        { kind: 'paragraph', text: 'На практике многие муниципалитеты принимают регистрацию сразу после въезда.' }
      ]
    },
    {
      id: 'where',
      title: 'Где получить',
      content: [
        { kind: 'paragraph', text: 'В Câmara Municipal по месту жительства. В некоторых муниципалитетах — в Junta de Freguesia.' },
        { kind: 'paragraph', text: 'Запись на www.portaldoeleitor.pt или напрямую в Câmara Municipal. В больших городах (Лиссабон, Порту) запись обязательна.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы',
      content: [
        { kind: 'checklist', items: [
          'Национальное удостоверение личности или паспорт',
          'Подтверждение адреса в Португалии (договор аренды / подтверждение проживания)',
          'Подтверждение ситуации (трудовой договор / регистрация студента / подтверждение финансовой самостоятельности):',
          '  • Работаете → трудовой договор',
          '  • Учитесь → подтверждение зачисления',
          '  • Самозанятый / предприниматель → подтверждение деятельности',
          '  • Пенсионер / имеете достаточные средства → подтверждение (пенсия, выписка из банка)'
        ]},
        { kind: 'paragraph', text: 'Требование «достаточных средств» — обычно декларация под присягой. Реальная проверка редка.' }
      ]
    },
    {
      id: 'after',
      title: 'После получения',
      content: [
        { kind: 'checklist', items: [
          'Получить NIF (Finanças) — см. гайд NIF EU/CPLP',
          'Получить NISS (если работаете)',
          'Регистрация в SNS (медицина)',
          'Обмен водительских прав — не нужен, права ЕС принимаются напрямую',
          'После 5 лет — постоянная резиденция (сертификат постоянного проживания)'
        ]},
        { kind: 'paragraph', text: 'Натурализация доступна после 5 лет (7 по закону на рассмотрении). Язык A2 для CIPLE.' }
      ]
    }
  ],
  costs: [
    { label: 'Пошлина CRUE', amountEUR: 15 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — регистрация гражданина União Europeia', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/registar-como-cidadao-da-uniao-europeia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei nº 37/2006 — въезд и проживание граждан ЕС', url: 'https://diariodarepublica.pt/dr/detalhe/lei/37-2006', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Your Europe — формальности проживания в Португалии', url: 'https://europa.eu/youreurope/citizens/residence/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}