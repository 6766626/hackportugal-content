export default {
  editorialVoice: 'hackportugal',
  id: 'casa-restaurar-licenciamento',
  categoryId: 'housing_buy',
  title: 'Реставрация старой квартиры: licenciamento da Câmara, ARU и льгота IMI',
  tldr: 'В старой квартире в Португалии нельзя начинать «реставрацию» как обычный ремонт, если трогаете фасад, структуру, общие части, окна, балконы, azulejos или дом стоит в ARU / зоне património. Нужны архитектор, проверка Câmara Municipal и иногда DGPC. Муниципальные taxas за processo часто 100–500 €, но проект и fiscalização стоят отдельно. В ARU возможны IMI: 3 года освобождения после reabilitação, затем продление ещё на 5 лет для HPP или аренды, плюс IRS 30% расходов до 500 €.',
  tags: ['aru', 'imi', 'licenciamento', 'obra'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'diagnostico',
      title: '1. Сначала определить: ремонт или obra sujeita a controlo',
      content: [
        { kind: 'paragraph', text: 'В 2026 году действует RJUE с изменениями SIMPLEX urbanístico. Простая внутренняя отделка без изменения структуры, фасада, инженерных стояков и общих частей обычно не требует licença. Но старые квартиры почти всегда имеют «ловушки»: деревянные перекрытия, несущие стены, фасадные окна, исторические азулежу, ventilação, chaminés, condomínio и зоны охраны património.' },
        { kind: 'checklist', items: [
          'Покраска, полы, кухня без переноса стояков — обычно obra de conservação, часто без licenciamento',
          'Снос стен, усиление балок, открытие проёмов — нужен arquitecto / engenheiro и контроль Câmara',
          'Замена окон на другой материал, цвет или desenho — риск отказа, особенно в Lisboa / Porto / centros históricos',
          'Кондиционер на фасаде, закрытие varanda, изменение guardas — почти всегда требует проверки Câmara',
          'Работы в общих частях: telhado, fachada, escadas, colunas — нужны condomínio и обычно Câmara',
          'Дом в ARU не означает автоматическое разрешение: ARU даёт льготы, но не отменяет правила urbanismo',
          'Дом в zona de proteção или imóvel classificado — может потребоваться parecer DGPC или муниципальной структуры património'
        ] },
        { kind: 'warning', text: 'Не полагайтесь на фразу продавца «pode remodelar tudo». До покупки запросите у Câmara Municipal histórico do processo, planta aprovada и проверьте, нет ли obras ilegais. После сделки штрафы и обязанность legalização переходят фактически к новому владельцу.' }
      ]
    },
    {
      id: 'verificar-zona',
      title: '2. Проверить ARU, património и ограничения по адресу',
      content: [
        { kind: 'paragraph', text: 'Перед сметой нужно понять режим здания. В Лиссабоне, например, Rua Garrett / Chiado, Baixa Pombalina, Alfama, Mouraria и Avenida da Liberdade часто попадают в зоны с особыми правилами фасада, caixilharia, вывесок, кондиционеров, telhados и материалов. В таких местах архитектор должен читать не только RJUE, но и PDM, regulamento municipal, cartas de património и правила ARU.' },
        { kind: 'checklist', items: [
          'Проверьте адрес на сайте Câmara Municipal: PDM, condicionantes, ARU, loteamento, licença de utilização',
          'Проверьте DGPC: imóvel classificado, monumento nacional, interesse público, zona especial de proteção',
          'Запросите у продавца: caderneta predial, certidão permanente, licença de utilização, ficha técnica da habitação если применимо',
          'Попросите plantas aprovadas: текущая планировка должна совпадать с тем, что зарегистрировано в Câmara',
          'Если дом до 1951 года, не делайте вывод «лицензия не нужна»: могут быть требования по segurança, salubridade и património',
          'Если квартира в prédio em propriedade horizontal, проверьте título constitutivo и regras do condomínio',
          'Для ARU сохраните доказательство, что объект находится в зоне: это понадобится для IMI / IMT / IVA / IRS льгот'
        ] },
        { kind: 'warning', text: 'В исторических районах «такие же пластиковые окна, как у соседа» не являются доказательством законности. Câmara может потребовать восстановить original caixilharia, цвет, desenho или убрать наружные блоки AC.' }
      ]
    },
    {
      id: 'licenciamento',
      title: '3. Что подавать в Câmara: comunicação prévia, licença или isenção',
      content: [
        { kind: 'paragraph', text: 'Форма зависит от работ и муниципалитета. В типовом сценарии архитектор готовит levantamento, projeto de arquitetura, peças desenhadas, memória descritiva, termo de responsabilidade и при необходимости specialty projects: estabilidade, águas, esgotos, eletricidade, acústica, térmica, segurança contra incêndio.' },
        { kind: 'substeps', items: [
          { id: 'isencao', title: 'Obras isentas', content: [
            { kind: 'paragraph', text: 'Небольшие внутренние работы без влияния на структуру, фасад, безопасность и общие системы могут быть isentas de controlo prévio. Но разумно получить письменное подтверждение архитектора или informação da Câmara, особенно перед продажей квартиры в будущем.' }
          ] },
          { id: 'comunicacao', title: 'Comunicação prévia', content: [
            { kind: 'paragraph', text: 'Часто используется для работ, которые соответствуют установленным правилам и не требуют полноценной лицензии. После корректной подачи и оплаты taxas можно начинать в сроки, установленные RJUE и муниципальными процедурами, но ошибки в документах создают риск embargo.' }
          ] },
          { id: 'licenca', title: 'Licença administrativa', content: [
            { kind: 'paragraph', text: 'Нужна для более чувствительных случаев: изменение фасада, структуры, объёма, использования, работы в охраняемых зонах, существенная reabilitação. В Lisboa и Porto сроки зависят от района и нагрузки служб; закладывайте месяцы, а не недели.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Нанять архитектора, который уже подавал процессы именно в этой Câmara',
          'Сделать levantamento существующего состояния до демонтажа',
          'Согласовать с condomínio шум, доступ, лифт, entulho, страховку подрядчика',
          'Получить orçamento с IVA отдельно: 6% возможно только при соблюдении условий reabilitação / ARU, иначе обычно 23%',
          'Подать processo на balcão urbanístico municipal или через портал Câmara',
          'Оплатить taxas municipais; для малых процессов часто 100–500 €, но в крупных городах и сложных проектах больше',
          'Не начинать работы, пока архитектор письменно не подтвердит, что начало законно',
          'После завершения получить comprovativos, termo de responsabilidade и при необходимости atualização da licença de utilização'
        ] }
      ]
    },
    {
      id: 'beneficios-fiscais',
      title: '4. IMI, IRS и IVA: как не потерять льготы ARU',
      content: [
        { kind: 'paragraph', text: 'Главная льгота для реставрации — regime de reabilitação urbana. По Estatuto dos Benefícios Fiscais для prédios urbanos objeto de reabilitação в ARU или зданий старше 30 лет возможно освобождение от IMI на 3 года с года завершения работ. Оно может быть продлено ещё на 5 лет, если объект используется как habitação própria e permanente или сдаётся в arrendamento para habitação permanente.' },
        { kind: 'checklist', items: [
          'Проверьте, что объект в ARU или соответствует критерию здания старше 30 лет и reabilitação признана Câmara',
          'До работ сделайте vistoria / avaliação do estado de conservação, если Câmara этого требует',
          'После работ запросите certidão / reconhecimento da reabilitação urbana в Câmara',
          'Подайте pedido de isenção de IMI в Finanças с муниципальным подтверждением',
          'IMI exemption не автоматическая: без документа Câmara Finanças обычно не применит льготу',
          'IRS: можно заявить 30% расходов на reabilitação до лимита 500 € при соблюдении условий EBF и наличии faturas с NIF',
          'IVA 6% по работам возможен для некоторых empreitadas de reabilitação urbana, но не для любой покупки мебели, техники или декора',
          'Сохраняйте faturas-recibo, contratos de empreitada, comprovativos de pagamento и фотографии до/после минимум 4 года'
        ] },
        { kind: 'warning', text: 'Не путайте «квартира находится в ARU» и «все работы автоматически с IVA 6% и IMI 5 лет». Нужны правильный тип работ, подтверждение Câmara и корректные faturas. Если подрядчик ставит 6% без основания, налоговый риск может лечь и на владельца.' }
      ]
    },
    {
      id: 'contratos',
      title: '5. Договор с архитектором и подрядчиком: что прописать',
      content: [
        { kind: 'paragraph', text: 'Старая квартира — это не косметический ремонт. В смете часто всплывают скрытые проблемы: балки, humidade, канализация, электричество без terra, asbestos/fibrocimento, незаконные mezzanines, слабая акустика. Нужны не только дизайнер, но архитектор с опытом licenciamento и инженер.' },
        { kind: 'checklist', items: [
          'В договоре с архитектором: levantamento, estudo prévio, projeto, submissão à Câmara, respostas a notificações, acompanhamento de obra',
          'Отдельно указать, кто получает parecer DGPC / património, если адрес в охраняемой зоне',
          'В договоре с empreiteiro: prazo, preço, IVA, materiais, garantias, seguro de acidentes de trabalho, remoção de entulho',
          'Прописать retention 5–10% до устранения дефектов и entrega dos documentos finais',
          'Запросить alvará или registo do empreiteiro в IMPIC для соответствующего типа работ',
          'Для condomínio: уведомление о сроках, шуме, лифте, proteção das zonas comuns, ответственность за повреждения',
          'Для покупки под реставрацию: включить в CPCV условие проверки licenciamento, ARU и возможности работ',
          'Для património-зон: включить cláusulas património — запрет менять фасад, caixilharia, azulejos, cantarias без письменного разрешения'
        ] },
        { kind: 'warning', text: 'Самая дорогая ошибка — снести всё до разрешений. Если Câmara наложит embargo, вы платите простой бригады, legalização, штраф и иногда восстановление первоначального состояния.' }
      ]
    },
    {
      id: 'practical-plan',
      title: '6. Практический план перед покупкой или стартом obra',
      content: [
        { kind: 'paragraph', text: 'Для expat-покупателя безопасный порядок такой: сначала due diligence, потом сделка, затем проект, потом Câmara, и только после этого obra. Если квартира покупается под flip или аренду, заранее посчитайте не только строительную смету, но и месяцы ожидания, IMI, condomínio, juros по кредиту и невозможность сдавать объект во время работ.' },
        { kind: 'checklist', items: [
          'Неделя 1: запросить документы у продавца и condomínio',
          'Неделя 1–2: архитектор проверяет Câmara, ARU, DGPC, plantas и незаконные изменения',
          'Неделя 2–3: preliminary budget с 15–25% резервом на скрытые дефекты',
          'До CPCV: включить условие выхода, если Câmara / património не позволяют планируемую reabilitação',
          'После покупки: заказать projeto и подать comunicação prévia / licença / pedido de informação',
          'Во время obra: хранить diário de obra, фото, faturas с NIF, акты скрытых работ',
          'После obra: запросить признание reabilitação и подать IMI exemption',
          'Перед продажей или арендой: убедиться, что utilização, планировка и документы совпадают'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Taxas municipais за небольшой processo urbanístico', amountEURMin: 100, amountEURMax: 500, note: 'Ориентир для простых подач; Câmara, площадь и тип работ могут увеличить сумму.' },
    { label: 'Архитектор для levantamento + submissão', amountEURMin: 1500, amountEURMax: 6000, note: 'Для квартиры; сложные зоны património, specialty projects и fiscalização оплачиваются отдельно.' },
    { label: 'IRS deduction на reabilitação', amountEUR: 500, note: 'Лимит вычета: 30% eligible расходов до 500 € при соблюдении условий EBF и наличии faturas.' },
    { label: 'IMI exemption после reabilitação', amountEUR: 0, note: 'Льгота не сумма, а освобождение: 3 года, с возможным продлением ещё на 5 лет для HPP или долгосрочной жилой аренды.' }
  ],
  sources: [
    {
      title: 'Câmara Municipal de Lisboa — Urbanismo, licenciamento и reabilitação urbana',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGPC — Património cultural, imóveis classificados и zonas de proteção',
      url: 'https://www.dgpc.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Decreto-Lei 555/99, RJUE, com alterações do SIMPLEX urbanístico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34567875',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — Estatuto dos Benefícios Fiscais, benefícios à reabilitação urbana',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1989-34554075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
