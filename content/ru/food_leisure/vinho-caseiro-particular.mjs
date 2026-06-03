export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Своё домашнее вино — что разрешено без лицензии',
  tldr: 'Если у тебя на участке растёт виноград, ты можешь делать вино для собственного потребления без лицензий.\n\nДля автопотребления регистрация в IVV не нужна при объёме до 4000 л в год; декларация о производстве не требуется при объёме до 1000 л (10 гл), если вино не продаётся.\n\nПри продаже или больших объёмах — регистрация и декларации в IVV (Instituto da Vinha e do Vinho) обязательны. Продажа — серьёзный регулируемый бизнес: нужны атестат качества, сертификации IGP/DOC, IVA, registo в IVV. Для квинт с виноградом стоит выяснить, входит ли участок в DOC-регион — это влияет на разрешённые сорта и стиль. Смешивать с обычными винами и продавать как DOC без сертификации = большой штраф.',
  tags: ['vinho', 'wine', 'ivdp', 'doc', 'caseiro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Лимиты на личное потребление',
      content: [
        { kind: 'paragraph', text: 'Португалия — один из крупнейших производителей вина в мире (примерно 10-11-е место по объёму). Закон относится к домашнему производству относительно мягко, но есть чёткие правила:' },
        { kind: 'checklist', items: [
          'До 1000 л/год (10 гл) для семьи и без продажи: декларация о производстве (DCP) в IVV не требуется. Делай и пей, дари соседям',
          'До 4000 л/год для автопотребления: регистрация (inscrição) в IVV (Instituto da Vinha e do Vinho) не нужна',
          'Свыше 1000 л или любая продажа: нужны регистрация в IVV и обязательные декларации (сбор/производство), даже без продажи свыше лимита',
          'Коммерческое производство: регистрация виноградника, atestado, регулярные пробы',
          'Лимиты считаются на «семью» (agregado familiar), не на каждого взрослого'
        ] },
        { kind: 'paragraph', text: 'Это касается вина «vinho de mesa» — обычного. Для других продуктов:' },
        { kind: 'checklist', items: [
          'Aguardente (бренди, виноградная водка): требует licenciamento alfandegário (таможенная лицензия), даже малый объём',
          'Vinagre (уксус): для личного — не регулируется',
          'Licor (наливка) — без сахара/спирта добавок: до 30 л/год без декларации'
        ] }
      ]
    },
    {
      id: 'doc-regions',
      title: 'DOC регионы и виноград на участке',
      content: [
        { kind: 'paragraph', text: 'Если твой участок в одном из DOC (Denominação de Origem Controlada) регионов, у тебя есть выбор: использовать сертификацию или нет. Без сертификации твоё вино — это «vinho regional» или «vinho» (общая категория).' },
        { kind: 'checklist', items: [
          'Douro DOC: классический портвейн и сухое. Сорта: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: молодые лёгкие вина. Сорта: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: тяжёлые красные. Aragonez, Trincadeira, Castelão',
          'Dão DOC: тонкие красные и белые. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: классические Baga, Maria Gomes',
          'Madeira DOC: десертные. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: «vinho regional» — между DOC и общим. Большая гибкость',
          'Algarve: 4 DOC региона + общая регион',
          'Açores: вулканические почвы, специфические сорта (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'Чтобы делать DOC-вино, нужна сертификация в Comissão Vitivinícola Regional (CVR) соответствующего региона. Минимум: registo виноградника в IVV + анализы вина + дегустация комиссии.' }
      ]
    },
    {
      id: 'making',
      title: 'Процесс — что нужно',
      content: [
        { kind: 'paragraph', text: 'Базовый набор для семейного производства до 100 л:' },
        { kind: 'checklist', items: [
          'Виноград: 100 кг = ~70-75 л вина',
          'Раздавилка (esmagador): ручная ~150 € или прокат от 30 €/день',
          'Фермент (cuba de fermentação): пластиковый бак с крышкой 100 л — 50-100 €',
          'Сульфит (metabissulfito de potássio): обязательно, против бактерий. ~10 € на сезон',
          'Дрожжи (leveduras enológicas): ~5 €/пакет на 100 л',
          'Гидрометр (densímetro) + ареометр (refractometro): измерять сахар. ~30-50 €',
          'Бутылки тёмное стекло 0.75 л: 0.5-1 € штука',
          'Пробки натуральные (сорту корка из Алгарве): 0.20-0.50 € штука',
          'Капсулы и этикетки: дополнительно для красоты',
          'Бочка (если хочешь): дубовая 25-50 л = 200-500 €. Для красных дольше старения'
        ] },
        { kind: 'paragraph', text: 'Процесс упрощённо:' },
        { kind: 'checklist', items: [
          'Сбор: середина сентября — конец октября в зависимости от региона',
          'Раздавилка + удаление гребней (engaço)',
          'Сульфит сразу',
          'Дрожжи через 24 часа',
          'Брожение: 7-15 дней при ~22-26°C',
          'Перекачка в чистый бак (trasfega): отделить от осадка (borras)',
          'Долив (аж до края), плотная крышка',
          'Старение: 3-12 месяцев в зависимости от стиля',
          'Розлив в бутылки',
          'Дозревание в бутылке: 6-12 месяцев минимум для красных'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'Если хочешь продавать — серьёзные требования',
      content: [
        { kind: 'paragraph', text: 'Коммерция — это другая лига. Помимо стандартного бизнес-набора нужны:' },
        { kind: 'checklist', items: [
          'Регистрация виноградника в IVV (RVCC — Registo Vitivinícola)',
          'Декларации сбора и производства каждый сезон',
          'Анализы вина: alcoholic strength, sulfites, acidity, microorganisms',
          'Лаборатория аккредитована IPAC: ~80-200 € за полный анализ',
          'Этикетки по EU 2019/787: вид, регион, alcoholic %, объём, NIF, страна, аллергены (sulfites, eggs)',
          'Lote Code (партия): обязательно',
          'Atividade aberta в Finanças: код CIRS 1102 — produção de vinhos',
          'IVA: 13% reduced для vinho de mesa, 23% для премиум',
          'Продажа на рынках: лицензия от Câmara, акциз AT (alcohol tax) ~0.10 €/л',
          'Online продажа: ASAE контролирует, обязательная регистрация продавца',
          'Экспорт за пределы EU: лицензия Direção Geral das Alfândegas (таможня)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Советы и фестивали',
      content: [
        { kind: 'checklist', items: [
          'Если у тебя 5-10 виноградных лоз на даче — рассчитывай примерно на 50-70 л вина за сезон (это уже семейный запас)',
          'Сорт «vinhão» (Vinho Verde region) — самый «дачный»: легко делается, доступная техника',
          'Местные фермеры (vinicultores) часто принимают оливки/виноград от соседей за процент или деньги',
          'Adega cooperativa — местная коопертива виноделов, может принять твой виноград и сделать общее вино',
          'Regional festas: Festa das Vindimas в Palmela (сентябрь), Vinho Verde Festival в Northwest, Festa do Vinho в Madeira',
          'Курсы для энтузиастов: IVDP в Porto, Universidade de Evora, ESAS Castelo Branco',
          'Книги: «Manual do Vinho Caseiro» (на португальском), много YouTube каналов'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Штрафы за нарушения',
      content: [
        { kind: 'checklist', items: [
          'Производство свыше лимита без декларации IVV: 100-1000 €',
          'Продажа без registo: 500-5000 €',
          'Использование DOC name без сертификации: 1500-25000 €',
          'Подделка регионального имени: уголовное',
          'Aguardente без таможенной лицензии: 500-25000 € + конфискация',
          'Не платить алкогольный акциз при продаже: 1000-50000 €'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Виноград (если покупаешь)', amountEURMin: 0.50, amountEURMax: 2, note: 'За кг; на 100 л — 100-150 кг' },
    { label: 'Стартовый комплект (бак, дрожжи, сульфит)', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Раздавилка ручная', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Бутылки 0.75 л на 100 л вина', amountEURMin: 70, amountEURMax: 130, note: '~130 бутылок' },
    { label: 'Дубовая бочка 25-50 л', amountEURMin: 200, amountEURMax: 500, note: 'Опционально для красного' },
    { label: 'Анализ для коммерции', amountEURMin: 80, amountEURMax: 200, note: 'Лабораторный' },
    { label: 'Сертификация DOC', amountEURMin: 200, amountEURMax: 500, note: 'Через CVR' }
  ],
  sources: [
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — regime jurídico do sector vinho', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — apoio à viticultura', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
