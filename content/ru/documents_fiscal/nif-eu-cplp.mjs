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
        { kind: 'paragraph', text: 'Если ваш налоговый адрес находится в ЕС/ЕЭЗ, представитель обычно не требуется. Если адрес вне ЕС/ЕЭЗ, включая страны CPLP, Finanças может выдать NIF, но при последующих налоговых обязательствах проверьте требование о representante fiscal или подключении электронных уведомлений. Правило зависит от налогового адреса, а не от паспорта.' }
      ]
    },
    {
      id: 'how',
      title: 'Как получить',
      content: [
        { kind: 'checklist', items: [
          'Паспорт (оригинал)',
          'Свежий документ с адресом — например, счёт за коммунальные услуги, банковская выписка или иной документ, который принимает конкретное отделение Finanças; желательно выданный в последние 3 месяца',
          'NIF оформляется через Finanças/AT. Наличие процесса в AIMA сам по себе не гарантирует выдачу NIF на том же визите; проверяйте, есть ли отдельная запись/окно Finanças'
        ]},
        { kind: 'paragraph', text: 'Если у вас ещё нет NIF, онлайн-запись через Portal das Finanças может быть недоступна (многие функции требуют NIF/пароль)\.\n\nПроверьте Atendimento por Marcação/контакты AT, звонок в Centro de Atendimento Telefónico или возможность личного обращения в отделение Finanças/Loja do Cidadão.' },
        { kind: 'timeline', text: 'NIF обычно выдаётся в день успешного приёма; срок не включает ожидание записи — в крупных городах очередь может занять больше времени.' }
      ]
    },
    {
      id: 'cplp-note',
      title: 'Граждане CPLP — важно',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Если вы находитесь в Португалии по Соглашению о мобильности CPLP, NIF можно получить сразу после въезда. Для бразильцев — особенно удобно, так как виза не требуется до 90 дней и можно подать на ВНЖ изнутри страны.' },
        { kind: 'warning', text: 'Lei 61/2025 (вступил в силу 23.10.2025) ужесточил правила въезда для граждан CPLP, кроме Бразилии: теперь требуется виза CPLP в консульстве до въезда. Исключение — только бразильцы (безвизовый въезд 90 дней)\.\n\nУточняйте актуальные требования на vistos.mne.gov.pt.' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'оригинал' },
    { title: 'Подтверждение фактического адреса', note: 'в Португалии, в ЕС/ЕЭЗ или за пределами ЕС/ЕЭЗ; если адрес вне ЕС/ЕЭЗ — проверьте правила о representante fiscal при возникновении налоговых обязательств' }
  ],
  costs: [
    { label: 'Госпошлина Finanças', amountEUR: 0 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 1,
  sources: [
    { title: 'ePortugal — Obter NIF', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 61/2025 — изменения CPLP (DRE)', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2025', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — CPLP', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}