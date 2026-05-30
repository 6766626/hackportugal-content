export default {
  editorialVoice: 'hackportugal',
  id: 'ler-factura-luz',
  categoryId: 'daily_life',
  title: 'Как читать счёт за электричество: consumo, taxas и расчёт',
  tldr: 'Счёт EDP, Galp, Iberdrola или Endesa состоит из 3 главных частей: potência contratada в kVA — фиксированная плата за мощность, consumo в kWh — фактическая или оценочная энергия, и налоги/taxas. В 2026 в континентальной Португалии на счёте обычно есть contribuição audiovisual RTP 2,85 € + IVA 6%, taxa DGEG около 0,07 €/мес + IVA 23%, IEC 0,001 €/kWh и IVA 6%/13%/23% по правилам. Главное — проверить, стоит ли leitura real или estimativa: если счёт оценочный, передайте показания в E-REDES или поставщику.',
  tags: ['luz', 'edp', 'счёт', 'iva', 'kwh'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'structure',
      title: '1. Найдите 5 ключевых блоков в factura da luz',
      content: [
        { kind: 'paragraph', text: 'У разных поставщиков дизайн разный, но логика одинаковая: поставщик продаёт энергию, оператор сети считает доступ к сети и показания, государство добавляет налоги и сборы. Счёт может называться factura, fatura или nota de débito.' },
        { kind: 'checklist', items: [
          'Dados do contrato — имя, адрес, NIF, CPE и поставщик',
          'CPE — идентификатор точки потребления, нужен при смене поставщика',
          'Potência contratada — мощность в kVA: 3,45 / 4,6 / 5,75 / 6,9 kVA и выше',
          'Ciclo horário — simples, bi-horário или tri-horário',
          'Consumo — количество kWh за период',
          'Leitura real или estimativa — реальное или оценочное показание',
          'Tarifas de acesso às redes — сетевые тарифы, иногда встроены в цену kWh',
          'Taxas e impostos — IVA, contribuição audiovisual, DGEG, IEC',
          'Total a pagar и data limite de pagamento — сумма и срок оплаты'
        ] },
        { kind: 'warning', text: 'Не сравнивайте только “total a pagar” между месяцами. Зима, кондиционер, бойлер, оценочные показания и изменение potência contratada могут дать скачок без изменения тарифа.' }
      ]
    },
    {
      id: 'potencia',
      title: '2. Potência contratada: за что вы платите каждый день',
      content: [
        { kind: 'paragraph', text: 'Potência contratada — максимальная мощность, которую можно одновременно использовать. Она указывается в kVA и оплачивается как фиксированная часть: €/dia или €/mês. Даже если вы уехали и потребили 0 kWh, эта часть останется.' },
        { kind: 'paragraph', text: 'Типичные бытовые уровни: 3,45 kVA — маленькая квартира без одновременной нагрузки; 4,6 kVA — частый минимум для квартиры с бойлером/духовкой; 5,75 или 6,9 kVA — если есть электрическая плита, бойлер, обогреватели, кондиционеры или семья.' },
        { kind: 'checklist', items: [
          'Если при включении чайника + духовки + бойлера выбивает quadro elétrico/ICP — potência может быть низкой',
          'Если ничего никогда не выбивает, но стоит 6,9 kVA в маленькой квартире — возможно, вы переплачиваете фиксированную часть',
          'Понижение potência экономит каждый день, но не уменьшает цену kWh',
          'Повышение potência увеличивает фиксированную часть счёта',
          'Смена potência обычно делается через поставщика, без визита в офис',
          'Для домов с wallbox, тепловым насосом или полностью электрическим отоплением 6,9 kVA может быть мало'
        ] },
        { kind: 'paragraph', text: 'IVA на фиксированную часть зависит от мощности и региона. Для континентальной Португалии в 2026 ориентир такой: при baixa tensão normal сниженные/промежуточные ставки применяются к части potência до установленных лимитов, а более высокая часть облагается 23%.\n\nНа практике смотрите строку IVA в счёте: поставщик обязан разбить base tributável по ставкам 6%, 13% и 23%.' }
      ]
    },
    {
      id: 'consumo',
      title: '3. Consumo kWh: реальное потребление и тарифные зоны',
      content: [
        { kind: 'paragraph', text: 'Consumo — это разница между предыдущим и текущим показанием счётчика. Единица — kWh. Формула простая: kWh × preço kWh. Если у вас bi-horário или tri-horário, расчёт идёт отдельно по зонам времени.' },
        { kind: 'checklist', items: [
          'Simples — одна цена за kWh весь день',
          'Bi-horário — обычно vazio дешевле, fora de vazio дороже',
          'Tri-horário — vazio, cheias и ponta',
          'Vazio выгоден, если стиралка, бойлер, посудомойка или зарядка авто реально работают ночью/в выходные',
          'Если вы почти всё потребляете вечером в ponta/fora de vazio, bi-horário может быть дороже simples',
          'Цена kWh может включать energy + tarifas de acesso às redes или показываться отдельными строками',
          'На либерализованном рынке цена зависит от договора, а не только от ERSE'
        ] },
        { kind: 'paragraph', text: 'IVA на consumo в континентальной Португалии: с 1 января 2025 по Lei n.º 38/2024 для мощности до 6,9 kVA первые 200 kWh за 30 дней облагаются 6%; для многодетных семей (5+ человек) лимит — 300 kWh за 30 дней после подтверждения статуса; потребление сверх лимита облагается 23%. Если расчётный период не 30 дней, лимит пропорционально пересчитывается.' },
        { kind: 'warning', text: 'Если в счёте период 60 дней, лимит для сниженного IVA по consumo не “200 kWh”, а примерно 400 kWh. Поэтому строки IVA могут выглядеть неожиданно: часть kWh по 6%, остаток по 23%.' }
      ]
    },
    {
      id: 'taxas',
      title: '4. Taxas и impostos: почему к энергии добавляются ещё строки',
      content: [
        { kind: 'paragraph', text: 'В factura da luz есть платежи, которые не являются вашей ценой за электричество. Они обязательны и появляются у всех поставщиков, хотя названия строк могут немного отличаться.' },
        { kind: 'checklist', items: [
          'Contribuição audiovisual / CAV / RTP — 2,85 € в месяц + IVA 6%, итого около 3,02 €',
          'Для beneficiário da tarifa social de eletricidade CAV обычно снижается до 1,00 € + IVA 6%',
          'При очень низком годовом потреблении до 400 kWh CAV может не взиматься',
          'Taxa de Exploração DGEG — около 0,07 € в месяц + IVA 23%',
          'IEC / Imposto Especial de Consumo de Eletricidade — 0,001 €/kWh + IVA 23%',
          'IVA — применяется не к одной общей сумме, а к разным базам: 6%, 13% и 23%',
          'Juros, penalizações или custos de cobrança появляются только при просрочках/особых операциях'
        ] },
        { kind: 'paragraph', text: 'Пример быстрой проверки: если CAV в обычной квартире около 3,02 € за месяц — это нормально. Если счёт за 2 месяца, строка будет около 6,04 €. DGEG за месяц — примерно 0,09 € с IVA, то есть это не причина большого счёта.' },
        { kind: 'warning', text: 'На Madeira и Açores ставки IVA ниже региональных, поэтому суммы IVA отличаются от континентальной Португалии. Правило чтения счёта то же, но проценты в строках налога будут другими.' }
      ]
    },
    {
      id: 'leituras',
      title: '5. Leitura real vs estimativa: где чаще всего ошибка',
      content: [
        { kind: 'paragraph', text: 'Самая важная строка — тип показаний. Leitura real означает, что счёт основан на реальном показании счётчика: дистанционно, от E-REDES или переданном вами. Estimativa означает расчёт по прогнозу. После estimativa следующий счёт может резко вырасти или стать ниже из-за acerto.' },
        { kind: 'checklist', items: [
          'Найдите в счёте bloco “Leituras” или “Detalhe de consumo”',
          'Проверьте дату предыдущей и текущей leitura',
          'Смотрите слова real, comunicada pelo cliente, estimada или acerto',
          'Сверьте текущую leitura со счётчиком дома',
          'Если счётчик умный, telecontagem всё равно может не работать постоянно',
          'Передавайте показания в janela de comunicação, указанное в счёте',
          'Передать leitura можно через сайт/app поставщика, E-REDES, телефон или иногда Multibanco',
          'Сохраните screenshot/подтверждение передачи показаний',
          'Если пришёл завышенный acerto, запросите detalhe de leituras и reclamação у поставщика'
        ] },
        { kind: 'paragraph', text: 'Формула для ручной проверки: текущая leitura − предыдущая leitura = kWh. Затем kWh умножаются на цену вашего тарифа. Для bi-horário проверяйте отдельно vazio и fora de vazio: у счётчика обычно несколько регистров.' },
        { kind: 'warning', text: 'Не игнорируйте estimativa несколько месяцев подряд. Если поставщик занижал оценку, потом придёт acerto за накопленную разницу; если завышал — деньги вернутся зачётом, но cash-flow всё равно неприятный.' }
      ]
    },
    {
      id: 'check',
      title: '6. Мини-аудит счёта за 10 минут',
      content: [
        { kind: 'paragraph', text: 'Один раз разберите счёт по строкам и сохраните нормальные значения для вашей квартиры. После этого любой странный месяц будет виден сразу.' },
        { kind: 'checklist', items: [
          'Проверьте, что NIF, адрес и CPE верные',
          'Сравните potência contratada с реальной жизнью: не слишком ли высокая',
          'Посчитайте kWh/день: total kWh ÷ число дней периода',
          'Сравните kWh/день с прошлым месяцем и аналогичным сезоном',
          'Убедитесь, что leitura не estimativa без причины',
          'Проверьте, не поменялся ли ciclo horário или preço kWh',
          'Посмотрите, нет ли serviços adicionais: assistência técnica, seguros, manutenção',
          'Проверьте CAV, DGEG и IEC: они должны быть маленькими и предсказуемыми',
          'Если счёт вырос, ищите сначала consumo/acerto, потом preço kWh, потом potência',
          'Для спора сначала reclamação у поставщика, затем Livro de Reclamações или ERSE/CNIACC'
        ] },
        { kind: 'paragraph', text: 'Практический ориентир: большой скачок обычно дают не DGEG и не CAV, а отопление/бойлер, кондиционер, оценочные показания, acerto после нескольких месяцев estimativa или окончание промо-тарифа.' }
      ]
    }
  ],
  costs: [
    { label: 'Contribuição audiovisual RTP / CAV', amountEUR: 2.85, note: 'В месяц без IVA; с IVA 6% — около 3,02 € в континентальной Португалии' },
    { label: 'CAV для tarifa social', amountEUR: 1.00, note: 'В месяц без IVA; с IVA 6% — около 1,06 €' },
    { label: 'Taxa de Exploração DGEG', amountEUR: 0.07, note: 'Около 0,07 € в месяц без IVA; с IVA 23% — около 0,09 €' },
    { label: 'IEC / Imposto Especial de Consumo de Eletricidade', amountEUR: 0.001, note: 'За 1 kWh без IVA; применяется к потреблению' },
    { label: 'Передача показаний leitura', amountEUR: 0, note: 'Через E-REDES или поставщика обычно бесплатно' }
  ],
  sources: [
    { title: 'ERSE: информация для потребителей электроэнергии и разбор счёта', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: тарифы, цены и IVA на электроэнергию', url: 'https://www.erse.pt/atividade/regulacao/tarifas-e-precos-eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DECO Proteste: как читать счёт за электричество', url: 'https://www.deco.proteste.pt/casa-energia/eletricidade-gas', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES: передача показаний счётчика', url: 'https://www.e-redes.pt/pt-pt/como-ler-o-contador', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSExplica: применение IVA в счёте за электричество (200/300 kWh, Lei n.º 38/2024)', url: 'https://www.erse.pt/media/tcsfm4n2/ersexplica_iva-fatura_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
