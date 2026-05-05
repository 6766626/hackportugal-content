export default {
  editorialVoice: 'hackportugal',
  id: 'nif-eu-cplp',
  categoryId: 'documents_fiscal',
  title: 'Как получить NIF — граждане ЕС/ЕЭЗ/Швейцарии и CPLP',
  tldr: 'Необходимость налогового представителя определяется не гражданством, а налоговым резидентством / адресом и наличием налоговой обязанности в Португалии. Для адреса в ЕС/ЕЭЗ налоговый представитель обычно не требуется (принципы директив о взаимной помощи). Для адреса в CPLP вне ЕС действуют общие правила: представитель нужен при налоговой связи с Португалией. После Ofício Circulado 90054/2022 простой NIF без налоговых обязательств в Португалии часто можно оформить без представителя. Оформление в Finanças — бесплатно, один день.',
  audience: { citizenships: ['euEeaSwiss', 'cplp'] },
  tags: ['nif', 'документы', 'cplp', 'ес'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'why-easier',
      title: 'Почему проще',
      content: [
        { kind: 'paragraph', text: 'Для граждан ЕС/ЕЭЗ/Швейцарии и CPLP адрес страны происхождения принимается без налогового представителя. Заявление подаётся по паспорту и подтверждению адреса.' }
      ]
    },
    {
      id: 'how',
      title: 'Как получить',
      content: [
        { kind: 'checklist', items: [
          'Паспорт (оригинал)',
          'Подтверждение адреса (счёт, банковская выписка за 3 месяца). Для граждан ЕС принимается адрес домашней страны',
          'Граждане CPLP по Соглашению о мобильности CPLP часто уже имеют процесс в AIMA — NIF оформляется во время того же визита'
        ]},
        { kind: 'paragraph', text: 'Записаться на Portal das Finanças (налоговый портал) → "Agendamentos" → "Atribuição de NIF" либо прийти в порядке живой очереди (раньше 9:00 в Лиссабоне/Порту).' },
        { kind: 'timeline', text: 'NIF выдаётся в день визита.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'Граждане CPLP — важно',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Если вы находитесь в Португалии по Соглашению о мобильности CPLP, NIF можно получить сразу после въезда. Для бразильцев — особенно удобно, так как виза не требуется до 90 дней и можно подать на ВНЖ изнутри страны.' },
        { kind: 'warning', text: 'Lei 61/2025 (вступил в силу 23.10.2025) ужесточил правила въезда для граждан CPLP, кроме Бразилии: теперь требуется виза CPLP в консульстве до въезда. Исключение — только бразильцы (безвизовый въезд 90 дней). Уточняйте актуальные требования на vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'оригинал' },
    { title: 'Подтверждение адреса', note: 'из страны ЕС или CPLP либо из Португалии' }
  ],
  costs: [
    { label: 'Госпошлина Finanças', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — NIF', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obter NIF', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-numero-de-identificacao-fiscal-nif-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Acordo de Mobilidade CPLP', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}