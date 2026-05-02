export default {
  editorialVoice: 'hackportugal',
  id: 'lojas-imprimir-fotocopiar',
  categoryId: 'daily_life',
  title: 'Где распечатать, отсканировать и заламинировать документы',
  tldr: 'Для AIMA, Finanças, SNS и школы быстрее всего идти не в крупный магазин, а в ближайшую papelaria / reprografia / centro de cópias: печать A4 обычно 0,10–0,30 € за страницу, скан 0,20–1 €, ламинирование A4 1–3 €. В крупных сетях смотрите Worten Resolve, FNAC и Loja CTT, но услуги зависят от конкретного филиала. Для срочной распечатки документов AIMA берите PDF на флешке и в email, просите “imprimir frente e verso” и “digitalizar para PDF”.',
  tags: ['печать', 'ctt', 'aima', 'документы'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-go',
      title: 'Куда идти в первую очередь',
      content: [
        { kind: 'paragraph', text: 'В Португалии бытовая печать называется impressão, копия — fotocópia, скан — digitalização, ламинирование — plastificação. Самый надёжный вариант — не торговый центр, а локальная papelaria, reprografia или centro de cópias рядом с метро, университетом, Câmara Municipal, Tribunal, Conservatória или Loja de Cidadão.' },
        { kind: 'checklist', items: [
          'Papelaria / reprografia — лучший вариант для AIMA-пакета, копий паспорта, contrato de arrendamento, IRS, recibos verdes',
          'Centro de cópias у университетов — дёшево и быстро, часто есть self-service печать',
          'Loja CTT — в некоторых отделениях доступны копии/печать/сканирование, но набор услуг зависит от филиала',
          'Worten Resolve — сервисная зона Worten; в отдельных магазинах помогают с печатью/сканированием, но это не гарантировано во всех точках',
          'FNAC — в крупных магазинах иногда есть услуги печати фото и цифровых сервисов; обычную A4-печать уточняйте заранее',
          'Библиотеки университетов и муниципальные bibliotecas — часто есть печать, но может потребоваться читательский билет или студенческий доступ',
          'Отели и coworking — подходят для 1–3 страниц срочно, но обычно дороже',
          'Junta de Freguesia иногда делает копии для собственных процедур, но не рассчитывайте на полноценный копи-центр'
        ] }
      ]
    },
    {
      id: 'aima-documents-fast',
      title: 'Как быстро распечатать документы для AIMA',
      content: [
        { kind: 'paragraph', text: 'Перед визитом в AIMA не ищите “идеальный” магазин. Ищите в Google Maps: “reprografia”, “fotocópias”, “papelaria”, “centro de cópias” + район. Открываются они обычно раньше торговых центров и лучше понимают, что такое “documentos para AIMA”.' },
        { kind: 'checklist', items: [
          'Сохраните все PDF в одну папку: passport, visto, comprovativo de morada, contrato, NIF, NISS, seguro, meios de subsistência',
          'Отправьте документы себе на email и продублируйте на USB-флешку',
          'Попросите: “Preciso imprimir estes documentos para AIMA”',
          'Если документ двусторонний, просите: “frente e verso”',
          'Для паспорта и cartões просите копию “a cores” — цветная копия дороже, но часто читается лучше',
          'Попросите скан “num único PDF” — один PDF-файл удобнее для отправки в AIMA, Finanças или юристу',
          'Проверьте, что на копии видны все края паспорта, визы, carimbo de entrada и QR-коды',
          'Сделайте 1 дополнительный комплект копий: AIMA иногда просит оставить копию, а оригиналы вернуть'
        ] },
        { kind: 'warning', text: 'Не ламинируйте оригиналы ВНЖ, паспорт, certidões, Cartão de Cidadão, títulos de residência и документы с печатью/QR-кодом. Ламинирование может сделать документ непригодным для проверки или сканирования.' }
      ]
    },
    {
      id: 'prices',
      title: 'Ориентиры по ценам в 2026',
      content: [
        { kind: 'paragraph', text: 'Цены не регулируются государством и зависят от города, района, срочности и цвета. В Лиссабоне, Порту и рядом с туристическими зонами дороже; у университетов обычно дешевле.' },
        { kind: 'checklist', items: [
          'Чёрно-белая печать A4: обычно 0,10–0,30 € за страницу',
          'Цветная печать A4: обычно 0,30–1 € за страницу',
          'Ксерокопия A4 ч/б: обычно 0,05–0,20 € за страницу при объёме',
          'Сканирование 1 страницы: обычно 0,20–1 €',
          'Сканирование пакета в один PDF: часто 2–5 € за небольшой комплект',
          'Ламинирование A4: обычно 1–3 €',
          'Печать с email/USB: обычно без доплаты, но некоторые lojas берут 0,50–1 € за открытие файла',
          'Срочная печать больших объёмов или переплёт: цена по orçamento'
        ] },
        { kind: 'warning', text: 'В Loja CTT, Worten и FNAC не рассчитывайте на единую цену по всей стране. Проверяйте конкретный balcão или loja: услуга может быть недоступна, аппарат может не работать, а очередь в CTT часто связана с почтой и банковскими услугами.' }
      ]
    },
    {
      id: 'what-to-say',
      title: 'Фразы на португальском',
      content: [
        { kind: 'paragraph', text: 'В копи-центрах достаточно простых фраз. Если документ важный, сначала распечатайте одну страницу и проверьте масштаб.' },
        { kind: 'checklist', items: [
          '“Queria imprimir estes documentos, por favor.” — Хочу распечатать эти документы',
          '“Pode imprimir em preto e branco?” — Можно распечатать чёрно-белым?',
          '“Preciso a cores.” — Нужно в цвете',
          '“Frente e verso, por favor.” — Двусторонняя печать',
          '“Uma cópia de cada documento.” — По одной копии каждого документа',
          '“Duas vias, por favor.” — Два экземпляра',
          '“Pode digitalizar para PDF?” — Можете отсканировать в PDF?',
          '“Tudo num único ficheiro PDF.” — Всё в один PDF-файл',
          '“Pode enviar para este email?” — Можете отправить на этот email?',
          '“Preciso plastificar esta folha.” — Нужно заламинировать этот лист'
        ] }
      ]
    },
    {
      id: 'privacy-and-files',
      title: 'Безопасность: паспорт, NIF, банковские выписки',
      content: [
        { kind: 'paragraph', text: 'Копи-центры часто открывают файлы на общем компьютере. Для документов AIMA это нормально, но не оставляйте доступ к почте, Google Drive, банковскому приложению или личному кабинету Finanças.' },
        { kind: 'checklist', items: [
          'Лучше приносить PDF на флешке, а не логиниться в свою почту на чужом компьютере',
          'Если отправляете email в loja, удалите письмо из “sent” не нужно — но попросите сотрудника закрыть вложения после печати',
          'Не отправляйте пароли, códigos de acesso и банковские данные в открытом виде',
          'Для банковских выписок заранее скачайте PDF из приложения банка',
          'Проверьте, что печатается актуальная версия: дата, имя, NIF, morada',
          'Не оставляйте лишние копии на прилавке или в корзине',
          'Если сканировали паспорт, попросите отправить файл вам и удалить локальную копию: “Pode apagar o ficheiro deste computador?”',
          'Для AIMA лучше иметь бумажный комплект + цифровую копию в телефоне'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Печать A4 чёрно-белая', amountEURMin: 0.10, amountEURMax: 0.30, note: 'Типичный диапазон за страницу в papelaria/reprografia; CTT и сетевые магазины могут отличаться' },
    { label: 'Печать A4 цветная', amountEURMin: 0.30, amountEURMax: 1, note: 'Зависит от покрытия цветом и типа бумаги' },
    { label: 'Сканирование', amountEURMin: 0.20, amountEURMax: 1, note: 'За страницу; пакет документов в один PDF часто считают отдельно' },
    { label: 'Ламинирование A4', amountEURMin: 1, amountEURMax: 3, note: 'Не используйте для оригиналов официальных документов' }
  ],
  sources: [
    { title: 'Worten — сеть магазинов и сервис Worten Resolve', url: 'https://www.worten.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CTT — отделения и услуги Loja CTT', url: 'https://www.ctt.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'FNAC Portugal — магазины и сервисы', url: 'https://www.fnac.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
