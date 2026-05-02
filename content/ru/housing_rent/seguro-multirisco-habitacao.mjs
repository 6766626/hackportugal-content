export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-multirisco-habitacao',
  categoryId: 'housing_rent',
  title: 'Seguro Multirriscos Habitação — страховка квартиры',
  tldr: 'Seguro Multirriscos Habitação — страховка жилья в Португалии. Для собственника квартиры в condomínio минимум страхование от пожара обязателен по Código Civil art. 1429; при ипотеке банк почти всегда требует multirriscos с покрытием здания на сумму реконструкции. Для арендатора полис не обязателен, но полезен для имущества, протечек и responsabilidade civil. Типичная цена в 2026: 100–300 €/год за квартиру, дороже при высокой страховой сумме и расширенных покрытиях.',
  tags: ['seguro', 'habitação', 'аренда', 'ипотека'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-covers',
      title: 'Что покрывает multirriscos 🏠',
      content: [
        { kind: 'paragraph', text: 'Seguro Multirriscos Habitação — не один стандартный продукт, а пакет покрытий. Базовый риск — incêndio, raio e explosão. Остальное добавляется в зависимости от полиса: daños por água, roubo, fenómenos sísmicos, responsabilidade civil, recheio, assistência ao lar.' },
        { kind: 'checklist', items: [
          'Incêndio, raio e explosão — пожар, молния, взрыв; ключевое покрытие для собственников.',
          'Danos por água — протечки из труб, бойлера, стиральной машины; важно в старых домах Лиссабона/Порту.',
          'Inundações/tempestades — дождь, затопление, сильный ветер; условия и исключения смотрите отдельно.',
          'Roubo/furto — кража имущества; обычно требует следов взлома и участия PSP/GNR.',
          'Responsabilidade civil familiar или proprietário/inquilino — ущерб соседям, например если ваша труба залила нижнюю квартиру.',
          'Recheio — мебель, техника, одежда, личные вещи; страхуется отдельно от стен и конструкций.',
          'Assistência ao lar — вызов сантехника, электрика, слесаря; лимиты часто небольшие.',
          'Fenómenos sísmicos — землетрясение; в Португалии часто продаётся как дополнительное покрытие, особенно актуально для Lisboa/Algarve/Açores.'
        ] },
        { kind: 'warning', text: 'Название “multirriscos” не гарантирует, что покрыты кража, землетрясение или имущество арендатора. Смотрите condições particulares: riscos cobertos, exclusões, franquia, capital seguro и limites por sinistro.' }
      ]
    },
    {
      id: 'mandatory-or-not',
      title: 'Обязательно ли оформлять',
      content: [
        { kind: 'paragraph', text: 'Для арендатора в Португалии seguro multirriscos обычно не обязателен по закону. Но договор аренды может требовать полис responsabilidade civil или seguro de recheio; это договорное условие, а не универсальная норма.' },
        { kind: 'paragraph', text: 'Для собственника квартиры в режиме propriedade horizontal закон требует страхование от пожара для каждой fração autónoma и общих частей. На практике это покрывается либо индивидуальным полисом владельца, либо коллективным полисом condomínio. Ответственность за наличие покрытия лежит на собственниках.' },
        { kind: 'paragraph', text: 'При ипотеке банк требует страхование жилья как условие кредита. Обычно нужен multirriscos с покрытием здания минимум на valor de reconstrução, а не на рыночную цену квартиры. Банк может предложить свой полис, но вы вправе сравнить рынок и заключить страховку у другого страховщика, если она соответствует требованиям кредита.' },
        { kind: 'checklist', items: [
          'Арендатор без требования в contrato de arrendamento — полис добровольный.',
          'Арендатору полезны recheio и responsabilidade civil, потому что страховка владельца не покрывает ваши вещи.',
          'Собственник квартиры в condomínio — минимум incêndio обязателен.',
          'Собственник дома moradia без condomínio — закон может не требовать multirriscos, но банк потребует при ипотеке.',
          'Ипотека — банк контролирует наличие полиса и может быть beneficiário/credor hipotecário.',
          'Condomínio может иметь общий полис, но он не всегда покрывает recheio и индивидуальные улучшения квартиры.'
        ] }
      ]
    },
    {
      id: 'how-much',
      title: 'Сколько стоит в 2026',
      content: [
        { kind: 'paragraph', text: 'Обычный диапазон для квартиры — примерно 100–300 €/год. Маленькая квартира с базовыми рисками может стоить ближе к 100–150 €/год; полис с recheio, assistência, responsabilidade civil и fenómenos sísmicos часто выходит 200–400 €/год и выше.' },
        { kind: 'paragraph', text: 'Цена зависит не от цены покупки квартиры, а от страховой суммы и рисков. Для здания страховщики используют valor de reconstrução: сколько стоит заново построить эквивалентную площадь, без стоимости земли и локационной премии.' },
        { kind: 'checklist', items: [
          'Capital seguro para edifício — страховая сумма для стен, перекрытий, крыши, встроенных систем.',
          'Capital seguro para recheio — отдельная сумма для мебели, техники, одежды, украшений.',
          'Franquia — ваша доля при убытке; например 0 €, 50 €, 100 € или процент от ущерба.',
          'Местоположение — Lisboa, Algarve, зоны риска затопления/землетрясений могут быть дороже.',
          'Возраст и состояние здания — старые трубы, деревянные перекрытия, отсутствие manutenção повышают риск.',
          'Покрытие fenómenos sísmicos обычно заметно увеличивает премию.',
          'Банковский пакет может давать скидку по spread, но сам полис часто дороже рыночного.'
        ] },
        { kind: 'warning', text: 'Не занижайте capital seguro, чтобы сэкономить 20–40 € в год. При недостаточном капитале страховщик может применить regra proporcional: выплатить только часть ущерба.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'Как оформить без лишних переплат',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Соберите данные по объекту', content: [
            { kind: 'checklist', items: [
              'Адрес и código postal.',
              'Тип жилья: apartamento, moradia, fração em propriedade horizontal.',
              'Год постройки или примерный возраст здания.',
              'Площадь: área bruta privativa и, если есть, garagem/arrecadação.',
              'Этаж, наличие лифта, охраны, сигнализации.',
              'Есть ли ипотека и требования банка к capital seguro.',
              'Хотите ли страховать recheio и на какую сумму.'
            ] }
          ] },
          { id: 'compare-quotes', title: '2. Сравните 3–5 предложений', content: [
            { kind: 'paragraph', text: 'Запросите симуляции у Fidelidade, Tranquilidade, Allianz, Liberty/Liberty Seguros или через брокера mediador de seguros. Сравнивайте не только премию, но и franquias, исключения и лимиты.' },
            { kind: 'checklist', items: [
              'Попросите condições particulares и condições gerais до оплаты.',
              'Проверьте, включён ли danos por água без слишком узких исключений.',
              'Проверьте лимит responsabilidade civil перед соседями.',
              'Для арендатора убедитесь, что recheio действительно включён.',
              'Для ипотеки проверьте, принимает ли банк полис внешнего страховщика.',
              'Сравните годовую оплату и mensalidade: помесячно может быть дороже.'
            ] }
          ] },
          { id: 'sign-and-pay', title: '3. Подпишите и оплатите', content: [
            { kind: 'paragraph', text: 'Обычно нужны NIF, адрес, документ удостоверения личности, IBAN или карта, данные квартиры. Полис активируется после emissão da apólice и оплаты prémio. Храните apólice, recibo и контакты assistência.' }
          ] }
        ] }
      ]
    },
    {
      id: 'claim',
      title: 'Что делать при протечке, пожаре или краже',
      content: [
        { kind: 'paragraph', text: 'Сроки уведомления указаны в полисе; безопасная практика — сообщить страховщику сразу, в течение 24–48 часов, и не выбрасывать повреждённые вещи до осмотра perito.' },
        { kind: 'checklist', items: [
          'Сначала остановите ущерб: перекройте воду, отключите электричество, вызовите emergência при пожаре.',
          'Сделайте фото и видео до уборки: источник, повреждения, общие планы, детали.',
          'Сообщите condomínio или senhorio, если затронуты общие части или соседние квартиры.',
          'Позвоните в assistência da seguradora и получите номер sinistro.',
          'При краже подайте queixa в PSP/GNR и сохраните документ.',
          'Соберите счета ремонта, покупки техники, фотографии серийных номеров, старые recibos.',
          'Не признавайте письменно вину перед соседями без согласования со страховщиком.',
          'Проверьте, удержана ли franquia и правильно ли применён capital seguro.'
        ] },
        { kind: 'warning', text: 'Типичный конфликт: страховка владельца покрывает стены, но не вещи арендатора; страховка condomínio покрывает общие части, но не ваш ремонт кухни; danos por água может не покрывать постепенную утечку из-за falta de manutenção.' }
      ]
    }
  ],
  costs: [
    { label: 'Базовый multirriscos для квартиры', amountEURMin: 100, amountEURMax: 200, note: 'Ориентир в год: incêndio, danos por água, responsabilidade civil с ограничениями.' },
    { label: 'Расширенный полис с recheio и assistência', amountEURMin: 200, amountEURMax: 400, note: 'Ориентир в год; зависит от capital seguro, franquia и покрытия землетрясения.' },
    { label: 'Полис арендатора для имущества и гражданской ответственности', amountEURMin: 60, amountEURMax: 180, note: 'Обычно дешевле, потому что не страхует конструкцию здания.' }
  ],
  sources: [
    { title: 'ASF — информация для потребителей о страховании', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito à habitação и связанные страхования', url: 'https://clientebancario.bportugal.pt/pt-pt/credito-habitacao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1429, seguro obrigatório contra incêndio в propriedade horizontal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 72/2008 — regime jurídico do contrato de seguro', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/72-2008-249969', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
