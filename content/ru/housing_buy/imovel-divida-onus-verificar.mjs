export default {
  editorialVoice: 'hackportugal',
  id: 'imovel-divida-onus-verificar',
  categoryId: 'housing_buy',
  title: 'Проверка задолженностей и обременений недвижимости перед покупкой',
  tldr: 'Перед CPCV и escritura проверьте не только “красивую” caderneta predial. Главный документ — certidão permanente do registo predial: стоит 15 €, действует 6 месяцев и показывает владельца, ипотеки, penhora, usufruto, servidões и судебные записи. От продавца отдельно запросите certidão de não dívida из Finanças, последние IMI, declaração do condomínio и документы Câmara Municipal. Conservatória, Finanças и Câmara ведут разные реестры — совпадения нужно проверять вручную.',
  tags: ['imovel', 'dividas', 'onus', 'finanças', 'compra'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'three-registries',
      title: 'Поймите 3 разных источника: Conservatória, Finanças, Câmara',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет одного “супер-реестра”, где видно всё. Перед покупкой нужно сверять минимум три базы: Registo Predial, Autoridade Tributária / Finanças и Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Conservatória do Registo Predial — юридическая собственность и обременения: ипотека, penhora, arresto, usufruto, servidão, promessa com eficácia real, судебные иски.',
          'Predial Online — онлайн-доступ к certidão permanente do registo predial; это та же информация Registo Predial в электронном виде.',
          'Finanças / Portal das Finanças — налоговая карточка объекта: caderneta predial, artigo matricial, VPT, IMI, fiscal owner для налоговых целей.',
          'Câmara Municipal — лицензии, licença de utilização, urbanismo, illegal works, планы, возможные ограничения по строительству.',
          'Condomínio — долги по ежемесячным quotas, obras, fundo comum de reserva и будущие утверждённые расходы.',
          'Нотариус, solicitador или advogado не “угадывают” скрытые проблемы: они проверяют документы, которые вы или продавец им дали.'
        ] },
        { kind: 'warning', text: 'Caderneta predial из Finanças не доказывает право собственности. Это налоговый документ. Если в caderneta указан один человек, а в certidão predial другой — ориентируйтесь на Registo Predial и разбирайте расхождение до подписания CPCV.' }
      ]
    },
    {
      id: 'certidao-predial',
      title: 'Закажите certidão permanente do registo predial за 15 €',
      content: [
        { kind: 'paragraph', text: 'Это главный документ для проверки обременений. Заказывается на predialonline.justica.gov.pt. Стоимость электронной certidão permanente — 15 €, доступ действует 6 месяцев. Обычно достаточно кода доступа: PDF не нужен, нотариус и банк вводят код и видят актуальную запись.' },
        { kind: 'checklist', items: [
          'Попросите у продавца código da certidão permanente или закажите сами, если знаете freguesia, concelho, número de descrição predial.',
          'Проверьте “Descrição” — тип объекта, адрес, площадь, доли, fração autónoma, garagem, arrecadação.',
          'Проверьте “Inscrições” — кто собственник и на каком основании получил объект.',
          'Ищите “Hipoteca voluntária” — обычная банковская ипотека продавца.',
          'Ищите “Penhora”, “Arresto”, “Apreensão” — исполнительное производство, арест или изъятие.',
          'Ищите “Usufruto” — право пользования третьего лица; покупка голой собственности без права жить там возможна, но это совсем другой риск.',
          'Ищите “Servidão” — право прохода, проезда, коммуникаций или иное ограничение участка.',
          'Ищите “Ação” или “Registo de ação” — судебный спор по объекту.',
          'Сверьте descrição predial с caderneta predial: адрес, fração, artigo matricial, площади и назначение должны логически совпадать.'
        ] },
        { kind: 'warning', text: 'Ипотека продавца сама по себе не всегда проблема: на escritura банк продавца обычно выдаёт distrate / autorização de cancelamento da hipoteca после погашения. Проблема — если механизм снятия ипотеки не прописан в CPCV и не подтверждён банком до сделки.' }
      ]
    },
    {
      id: 'financas-tax-debt',
      title: 'Проверьте Finanças: caderneta, IMI и certidão de não dívida',
      content: [
        { kind: 'paragraph', text: 'Finanças показывает налоговую сторону объекта. Покупатель не может сам увидеть все налоговые долги продавца: certidão de dívida e não dívida запрашивает сам продавец в Portal das Finanças и передаёт вам или нотариусу.' },
        { kind: 'checklist', items: [
          'Запросите caderneta predial atualizada — свежую, не старый PDF из архива риелтора.',
          'Сверьте artigo matricial, fração, localização, área, afetação и VPT с certidão predial.',
          'Запросите у продавца certidão de não dívida из Finanças / Autoridade Tributária.',
          'Попросите comprovativos de pagamento do IMI минимум за последний год; если объект дорогой, попросите несколько лет.',
          'Проверьте, есть ли AIMI для дорогой недвижимости — это налог продавца до даты сделки, но долг может создавать риск взысканий.',
          'Уточните, кто платит IMI за год сделки: юридически IMI начисляется владельцу на 31 декабря налогового года, но стороны часто делают пропорциональный расчёт в договоре.',
          'Если объект принадлежит компании, запросите certidão permanente comercial компании и проверьте полномочия подписанта.',
          'Если продавец нерезидент, убедитесь, что у него есть NIF и fiscal representative, если он обязан его иметь.'
        ] },
        { kind: 'warning', text: 'Certidão de não dívida от Finanças не означает, что на объекте нет ипотеки или penhora. Налоговая справка и Registo Predial отвечают на разные вопросы. Нужны оба документа.' }
      ]
    },
    {
      id: 'condominio-and-municipality',
      title: 'Не забудьте condomínio и Câmara Municipal',
      content: [
        { kind: 'paragraph', text: 'Для квартиры в prédio em propriedade horizontal долги по condomínio — частая неприятность. Для дома или участка главный риск чаще находится в Câmara Municipal: лицензии, незаконные пристройки, отсутствие licença de utilização или ограничения urbanismo.' },
        { kind: 'checklist', items: [
          'Запросите declaração do administrador do condomínio о долгах, quotas и утверждённых расходах.',
          'Проверьте actas da assembleia de condóminos за 2–3 последних года: там могут быть утверждены obras на десятки тысяч евро.',
          'Попросите regulamento do condomínio, если важны short-term rental / Alojamento Local, животные, парковка, использование общих зон.',
          'Проверьте, включены ли garagem и arrecadação в ту же fração, отдельную fração или только в exclusive use common area.',
          'В Câmara Municipal запросите licença de utilização или подтверждение освобождения от неё для старых объектов.',
          'Для дома проверьте plantas aprovadas и совпадение фактической планировки с лицензированными планами.',
          'Для участка проверьте PDM, classificação do solo, ограничения REN / RAN, сервитуты дорог, линий электропередачи, водных зон.',
          'Если в объявлении написано “possibilidade de construir”, требуйте письменное подтверждение urbanismo, а не обещание агента.'
        ] },
        { kind: 'warning', text: 'Незаконная пристройка, закрытая varanda, переделанный гараж или бассейн без лицензии могут не отображаться в certidão predial. Это зона Câmara Municipal, а не Conservatória.' }
      ]
    },
    {
      id: 'cpcv-protection',
      title: 'Защитите себя в CPCV до передачи sinal',
      content: [
        { kind: 'paragraph', text: 'CPCV должен не просто фиксировать цену. Он должен распределять риски: какие долги продавец обязан закрыть, какие документы предоставить и что происходит, если проблема всплывает до escritura.' },
        { kind: 'checklist', items: [
          'Включите условие, что объект продаётся livre de ónus e encargos, кроме прямо перечисленных.',
          'Если есть ипотека, укажите, что она будет погашена и снята в день escritura через distrate / cancelamento da hipoteca.',
          'Приложите или перечислите código da certidão permanente, caderneta predial, licença de utilização, declaração do condomínio.',
          'Укажите крайний срок предоставления certidão de não dívida Finanças и declaração do condomínio.',
          'Пропишите право покупателя отказаться и вернуть sinal em dobro или sinal simples — в зависимости от согласованной конструкции — если продавец не может снять обременение.',
          'Не переводите крупный sinal до проверки certidão predial; стандартные 10% могут быть слишком высоким риском при спорном объекте.',
          'Для ипотеки покупателя добавьте cláusula de financiamento: возврат sinal, если банк откажет в кредитовании по причине объекта или оценки.',
          'Платите sinal банковским переводом на счёт продавца, указанного в certidão predial, а не наличными и не на счёт третьего лица без объяснения.'
        ] },
        { kind: 'warning', text: 'Риелтор работает на сделку, нотариус удостоверяет акт, банк защищает свой кредит. Если сумма серьёзная или объект нестандартный, нанимайте своего advogado или solicitador до CPCV, а не за день до escritura.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Красные флаги перед escritura',
      content: [
        { kind: 'paragraph', text: 'Если видите один из этих признаков, не подписывайте escritura без письменного объяснения специалиста и обновлённых документов.' },
        { kind: 'checklist', items: [
          'Продавец отказывается дать código da certidão permanente или даёт только старый PDF.',
          'В certidão есть penhora, arresto, ação или несколько ипотек, а продавец говорит “это формальность”.',
          'Описание fração в certidão predial не совпадает с тем, что вы физически покупаете.',
          'В объявлении есть парковка или кладовка, но в документах они не указаны.',
          'Caderneta predial показывает áreas или afetação, которые не совпадают с планами Câmara.',
          'Нет licença de utilização, и никто не может объяснить законное основание освобождения.',
          'Condomínio сообщает о будущих obras или долге, а продавец просит “решить потом”.',
          'Продавец в браке, наследство не оформлено, есть несовершеннолетние наследники или доверенность из-за границы без проверки полномочий.',
          'Цена заметно ниже рынка, но требуют быстрый sinal без due diligence.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Certidão permanente do registo predial', amountEUR: 15, note: 'Электронный код доступа через Predial Online, действует 6 месяцев.' },
    { label: 'Certidão de não dívida Finanças', amountEUR: 0, note: 'Обычно бесплатно в Portal das Finanças; запрашивает сам налогоплательщик-продавец.' },
    { label: 'Caderneta predial', amountEUR: 0, note: 'Бесплатно в Portal das Finanças для владельца объекта.' },
    { label: 'Юрист / solicitador для due diligence', amountEURMin: 300, amountEURMax: 1500, note: 'Рыночный диапазон зависит от сложности объекта, ипотеки, наследства, компании-продавца и проверки Câmara Municipal.' }
  ],
  sources: [
    { title: 'Predial Online — pedido de certidão permanente do registo predial', url: 'https://predialonline.justica.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — informação e serviços da Autoridade Tributária', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Registo Predial — Decreto-Lei 224/84', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — compra e venda de casa e documentação associada', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
