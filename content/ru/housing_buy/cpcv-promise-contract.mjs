export default {
  editorialVoice: 'hackportugal',
  id: 'cpcv-promise-contract',
  categoryId: 'housing_buy',
  title: 'CPCV — предварительный договор купли-продажи жилья и sinal',
  tldr: 'CPCV — contrato-promessa de compra e venda: предварительный договор, который обычно подписывают за 2–8 недель до escritura. Покупатель вносит sinal, часто 10–20% цены. По art. 442 Código Civil: если срывается покупатель — теряет sinal; если продавец — возвращает sinal в двойном размере. В 2026 безопасный CPCV должен включать условия кредита, проверки лицензий/долгов и, по возможности, registo provisório de aquisição.',
  tags: ['cpcv', 'sinal', 'покупка', 'imobiliário'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cpcv',
      title: 'Что такое CPCV и почему его подписывают',
      content: [
        { kind: 'paragraph', text: 'CPCV — это не “бронь квартиры”, а юридически обязательное обещание купить и продать объект. Он фиксирует цену, сроки, sinal, условия выхода и дату будущей escritura или Documento Particular Autenticado.' },
        { kind: 'paragraph', text: 'В Португалии CPCV подписывают до финальной сделки, потому что банку нужно время на mortgage approval, valuation, страховки и подготовку escritura. Для покупки без кредита CPCV тоже используют: продавец снимает объект с рынка, покупатель получает время на due diligence.' },
        { kind: 'warning', text: 'Не подписывайте CPCV “по шаблону агентства”, если не проверены документы объекта. После подписи потеря sinal может быть законной, даже если вы просто передумали.' }
      ]
    },
    {
      id: 'sinal-rules',
      title: 'Sinal: сколько вносить и что говорит art. 442 CC',
      content: [
        { kind: 'paragraph', text: 'Sinal — задаток, который подтверждает серьёзность сделки. На рынке жилья часто просят 10–20% цены, но закон не устанавливает обязательный процент. Для дорогих объектов и сделок с кредитом можно договариваться о меньшем sinal, например 5–10%, если продавец согласен.' },
        { kind: 'checklist', items: [
          'Если покупатель нарушил CPCV без законного основания — продавец обычно удерживает sinal.',
          'Если продавец нарушил CPCV — покупатель может требовать возврат sinal в двойном размере.',
          'Эти последствия следуют из art. 442 Código Civil, если стороны не прописали другой допустимый механизм.',
          'Sinal должен быть прямо назван в договоре как “sinal e princípio de pagamento”, а не просто “reserva”.',
          'Платите банковским переводом на счёт продавца или escrow/conta cliente адвоката/solicitador, не наличными.',
          'В назначении платежа укажите объект, NIF сторон и “sinal CPCV”.',
          'Сохраняйте comprovativo de transferência: он понадобится при споре, банку и для комплаенса.'
        ] },
        { kind: 'warning', text: '“Agência segura o imóvel por 5 000 €” — это не всегда sinal по art. 442. Если платёж идёт агентству, должен быть отдельный письменный документ: кто получает деньги, на каком основании, возвращаются ли они и когда становятся sinal.' }
      ]
    },
    {
      id: 'clauses-to-include',
      title: 'Что обязательно прописать в CPCV',
      content: [
        { kind: 'paragraph', text: 'Хороший CPCV должен быть скучным и конкретным: кто продаёт, что продаёт, за сколько, когда, при каких условиях сделка отменяется без штрафа и какие документы продавец обязан дать до escritura.' },
        { kind: 'checklist', items: [
          'Полные данные сторон: имя, NIF, семейное положение, regime de bens, адрес, документ ID.',
          'Точное описание объекта: artigo matricial, descrição predial, fração, адрес, площадь, гараж/кладовая.',
          'Цена, сумма sinal, график последующих платежей и способ оплаты.',
          'Крайний срок escritura: например до 60 или 90 дней, с механизмом продления по вине банка/Conservatória.',
          'Условие кредита: CPCV действует только при aprovação final do crédito habitacional; при отказе банка sinal возвращается.',
          'Список документов продавца: caderneta predial, certidão permanente, licença de utilização или legal exemption, ficha técnica da habitação, certificado energético, condomínio statement.',
          'Гарантия отсутствия долгов: IMI, condomínio, utilities, ипотека, аресты, penhoras, usufruto, arrendamento.',
          'Кто платит IMT, Imposto do Selo, escritura, registo, погашение ипотеки продавца.',
          'Состояние объекта и включённые вещи: мебель, техника, кондиционеры, solar panels, парковка.',
          'Последствия breach: потеря sinal, возврат в двойном размере, execução específica по art. 830 Código Civil, если стороны её не исключают.'
        ] },
        { kind: 'warning', text: 'Если покупаете с ипотекой, clause “subject to mortgage approval” критична. Предварительное одобрение банка не равно финальному одобрению после avaliação. Без такой оговорки отказ банка может не спасти sinal.' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Проверки до подписи: минимум для экспата',
      content: [
        { kind: 'paragraph', text: 'До CPCV нужно проверить не только продавца, но и сам объект. В Португалии встречаются пристройки без лицензии, неузаконенные мансарды, долги condomínio и ограничения в Conservatória.' },
        { kind: 'checklist', items: [
          'Certidão permanente do registo predial: собственник, ипотеки, аресты, usufruto, servidões.',
          'Caderneta predial urbana в Portal das Finanças: artigo, VPT, площадь, назначение.',
          'Licença de utilização или подтверждение, что объект освобождён от неё по возрасту/режиму.',
          'Certificado energético: обязателен при продаже, класс влияет на кредит и ремонты.',
          'Ficha técnica da habitação для объектов, где она требуется.',
          'Declaração de condomínio: нет долгов, понятны mensalidade и planned works.',
          'Проверка Câmara Municipal: лицензии, works, urbanismo, особенно для moradia, anexos, attic, basement.',
          'Если продавец компания: certidão comercial, полномочия подписанта, IVA/налоговые нюансы.',
          'Если продавец нерезидент: кто подписывает, есть ли доверенность, нужно ли удержание налога в особых случаях.'
        ] },
        { kind: 'warning', text: 'Агент по недвижимости работает на сделку, а не на юридическую защиту покупателя. Для CPCV на сотни тысяч евро нормальная практика — нанять advogado или solicitador до подписи, а не за день до escritura.' }
      ]
    },
    {
      id: 'provisional-registration',
      title: 'Registo provisório de aquisição: защита покупателя',
      content: [
        { kind: 'paragraph', text: 'Registo provisório de aquisição — предварительная регистрация будущей покупки в Conservatória do Registo Predial. Она делает вашу позицию видимой для третьих лиц и снижает риск, что продавец повторно продаст объект или обременит его до escritura.' },
        { kind: 'paragraph', text: 'Обычно заявление подаёт advogado, solicitador, notário или conservador через serviços de registo. Для регистрации нужен CPCV с достаточной идентификацией объекта и сторон; иногда требуется reconhecimento presencial das assinaturas.' },
        { kind: 'checklist', items: [
          'Особенно полезно, если между CPCV и escritura больше 30–45 дней.',
          'Рекомендуется при покупке у застройщика, при сложной цепочке продаж или если продавец в финансовом стрессе.',
          'Проверьте срок действия provisório и что его можно конвертировать в definitivo после escritura.',
          'Убедитесь, что банк согласен с формулировками CPCV и будущей регистрацией ипотеки.',
          'После escritura покупка должна быть зарегистрирована окончательно; provisório сам по себе не делает вас собственником.'
        ] },
        { kind: 'warning', text: 'Registo provisório не заменяет due diligence. Если в реестре уже есть ипотека, penhora или спор, предварительная регистрация не “очищает” объект — нужно юридическое решение до сделки.' }
      ]
    },
    {
      id: 'signing-and-after',
      title: 'Подписание, налоги и путь к escritura',
      content: [
        { kind: 'paragraph', text: 'CPCV можно подписать лично или по доверенности. Для повышенной доказательной силы подписи часто делают с reconhecimento presencial в notário, advogado или solicitador. Если объект продаётся с передачей владения до escritura, требования к форме и налоговым последствиям нужно проверять отдельно.' },
        { kind: 'checklist', items: [
          'До подписи получите финальную версию CPCV на португальском; перевод на русский — только вспомогательный.',
          'Сверьте имена, NIF, IBAN, artigo matricial и descrição predial с документами.',
          'Не переводите sinal до подписания или одновременного обмена подписанными экземплярами.',
          'Сразу после CPCV зафиксируйте deadline для mortgage valuation, seguro de vida, seguro multirriscos и escritura.',
          'IMT и Imposto do Selo обычно платятся перед escritura, не в момент CPCV.',
          'На escritura продавец должен погасить ипотеку или принести distrate/cancelamento da hipoteca.',
          'После финальной сделки проверьте registo definitivo и обновление ownership в Finanças.'
        ] },
        { kind: 'warning', text: 'Если продавец просит “передать ключи после CPCV”, это уже риск владения без собственности. Нужны отдельные clauses: кто платит condomínio, utilities, страховку, ремонт, что происходит при срыве escritura.' }
      ]
    }
  ],
  costs: [
    { label: 'Sinal по CPCV', amountEURMin: 0, amountEURMax: 0, note: 'Закон не фиксирует сумму; на практике часто 10–20% цены объекта. Для объекта 300 000 € это обычно 30 000–60 000 €.' },
    { label: 'Юридическая проверка CPCV', amountEURMin: 300, amountEURMax: 1500, note: 'Рыночный ориентир для advogado/solicitador; сложные сделки, застройщики и ипотека стоят дороже.' },
    { label: 'IMT и Imposto do Selo', amountEURMin: 0, amountEURMax: 0, note: 'Обычно платятся перед escritura. Сумма зависит от цены, VPT, типа объекта и статуса покупателя; это не плата за CPCV.' }
  ],
  sources: [
    {
      title: 'Código Civil — Decreto-Lei 47344/1966, включая art. 410, 442 и 830',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Justiça.gov.pt — Comprar ou vender casa',
      url: 'https://justica.gov.pt/Servicos/Comprar-vender-casa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IRN — Registo Predial Online',
      url: 'https://www.predialonline.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
