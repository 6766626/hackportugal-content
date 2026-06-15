export default {
  editorialVoice: 'hackportugal',
  id: 'check-traffic-fines',
  categoryId: 'auto_ownership',
  title: 'Как проверить, есть ли штрафы за авто и нарушения ПДД в Португалии',
  tldr: 'В Португалии нет одного надежного поиска “по номеру машины” для всех штрафов. Дорожные contraordenações смотрят через Balcão do Condutor / Portal das Contraordenações ANSR, но нормальный вход обычно требует Chave Móvel Digital или Cartão de Cidadão.\n\nЕсли у вас ВНЖ без Cartão de Cidadão, кабинет может быть недоступен или пустой даже с CMD. Тогда проверяйте по типу долга: ANSR/GNR/PSP для дорожных дел, муниципалитет для легкой парковки, CTT/Via Verde/Ascendi для portagens.',
  tags: ['штрафы', 'ansr', 'авто', 'portagens', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-check',
      title: 'Сначала разделите штрафы по типу',
      content: [
        { kind: 'paragraph', text: 'Одна из главных ловушек: штраф “за машину” в Португалии может быть в разных системах. Пустой Portal das Contraordenações не означает, что нет долгов по парковке или электронным платным дорогам.' },
        { kind: 'checklist', items: [
          'ANSR / polícia / GNR / PSP: превышение скорости, красный свет, телефон, алкоголь, grave/muito grave, баллы carta de condução.',
          'Муниципальная парковка: EMEL, Câmara Municipal, Polícia Municipal или концессионер парковки. Легкие парковочные нарушения обычно проверяются у муниципалитета, где они произошли.',
          'Portagens: неоплаченные электронные платные дороги проверяются через CTT, Via Verde, Ascendi, Via Livre/Globalvia или Portal de Pagamento de Portagens.',
          'Прокатная машина: rental company может взять свой admin fee и отдельно передать ваши данные органу, который выписал штраф.',
          'Частная парковка или гараж: это может быть не государственная coima, а договорный долг перед оператором.'
        ] },
        { kind: 'warning', text: 'Не ищите все только по matrícula. Для ANSR основная привязка идет к водителю/arguido, NIF, carta de condução и процессу, а не просто к номеру автомобиля.' }
      ]
    },
    {
      id: 'online-cabinet',
      title: 'Онлайн: Balcão do Condutor и Portal das Contraordenações',
      content: [
        { kind: 'paragraph', text: 'Balcão do Condutor на gov.pt показывает баллы, историю contraordenações, текущие дела и coimas por pagar. Для входа gov.pt указывает Chave Móvel Digital или Cartão de Cidadão. Portal das Contraordenações ANSR позволяет смотреть процессы, cadastro и подавать requerimentos: defesa, рассрочка, consulta de processo.' },
        { kind: 'checklist', items: [
          'Попробуйте Balcão do Condutor через gov.pt, если у вас есть CMD или Cartão de Cidadão.',
          'Проверьте Portal das Contraordenações ANSR: процессы, cadastro, pontos da carta, pedidos и документы по делу.',
          'Если у вас уже есть старый аккаунт портала, иногда доступен вход по NIF/senha; для нового пользователя рассчитывайте на CMD/Cartão de Cidadão.',
          'Если у вас иностранная carta de condução или недавно обмененная carta, данные могут не матчиться автоматически.',
          'Если кабинет пустой, сохраните скрин/дату проверки, но не считайте это доказательством отсутствия всех штрафов.',
          'Проверьте endereço fiscal и адрес в документах автомобиля: официальные уведомления часто приходят физической почтой.'
        ] },
        { kind: 'warning', text: 'CMD сама по себе не гарантирует, что вы увидите все. У многих резидентов без Cartão de Cidadão и без португальской carta de condução кабинет либо не открывается, либо не показывает старые/чужие по привязке процессы.' }
      ]
    },
    {
      id: 'if-no-access',
      title: 'Если нет CMD/CC или кабинет пустой',
      content: [
        { kind: 'paragraph', text: 'Практический путь — идти не “в один сайт”, а по органам. Возьмите NIF, паспорт/ВНЖ, carta de condução, matrícula, Documento Único Automóvel или договор аренды/лизинга, и любые бумажные avisos.' },
        { kind: 'checklist', items: [
          'Для дорожных contraordenações спросите в Secção de Contraordenações PSP или Gabinete de Atendimento ao Cidadão GNR по месту жительства.',
          'Можно обратиться в Espaço Cidadão / поддержку gov.pt, если вопрос именно во входе через CMD или Balcão do Condutor.',
          'Если автомобиль не ваш, запросите у владельца, лизинговой компании или rental company копии уведомлений и подтверждение, кто указан как condutor.',
          'Если было письмо от ANSR, используйте номер auto/processo из письма — по нему запрос намного сильнее.',
          'Если вы только подозреваете штраф, укажите диапазон дат, matrícula, NIF, номер carta de condução и адрес для ответа.',
          'Если дело касается легкой парковки, обращайтесь в муниципалитет/оператора города, а не в ANSR.'
        ] },
        { kind: 'warning', text: 'Не ждите, пока получится вход в кабинет, если уже пришло заказное письмо. Срок для defesa/оплаты обычно считается от уведомления, а не от дня, когда вы наконец смогли зайти онлайн.' }
      ]
    },
    {
      id: 'ask-ansr',
      title: 'Как запросить у ANSR информацию о процессах',
      content: [
        { kind: 'paragraph', text: 'Официальные общие контакты ANSR: mail@ansr.pt и телефон 21 423 68 00. Для формального pedido de consulta de processo или envio de prova fotográfica обычно используют форму F304; для копий/сертификатов могут быть отдельные формы и сборы.' },
        { kind: 'checklist', items: [
          'В теме письма пишите: Pedido de informação sobre processos de contraordenação rodoviária.',
          'В тексте укажите: nome completo, NIF, data de nascimento, número de identificação, número da carta de condução, país emissor da carta, matrícula, morada, telefone/email.',
          'Если есть номер auto/processo, поставьте его в первую строку.',
          'Попросите проверить “processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula”.',
          'Приложите копии документов только если это нужно для идентификации; закройте лишние данные, которые не относятся к запросу.',
          'Для формального requerimento по делу безопаснее отправлять через портал, заказным письмом или email с сертифицированной цифровой подписью.'
        ] },
        { kind: 'paragraph', text: 'Короткая фраза на португальском: “Venho solicitar informação sobre a eventual existência de processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula abaixo indicados. Não consigo consultar a informação no Portal das Contraordenações por não dispor de Cartão de Cidadão / por a autenticação não apresentar processos.”' },
        { kind: 'warning', text: 'Простой email без цифровой подписи может помочь как обращение, но не всегда заменяет юридически значимый requerimento. Если есть срок defesa или нужна копия процесса, используйте официальный путь из уведомления.' }
      ]
    },
    {
      id: 'parking-tolls',
      title: 'Парковка и portagens проверяются отдельно',
      content: [
        { kind: 'paragraph', text: 'gov.pt отдельно отмечает: легкие парковочные contraordenações с ноября 2018 года нужно проверять у município, где нарушение произошло. Для Лиссабона это часто EMEL/Câmara Municipal de Lisboa, для Porto — Câmara Municipal do Porto, в других городах — местная Câmara или концессионер.' },
        { kind: 'checklist', items: [
          'Ищите на сайте муниципалитета раздел estacionamento, contraordenações, polícia municipal, avisos или coimas.',
          'Если на бумажке есть referência Multibanco или номер aviso, используйте именно канал из уведомления.',
          'Для электронных portagens проверьте CTT “Portagens em dívida” по matrícula; CTT предупреждает, что показывает только долги, которые еще доступны к оплате в CTT.',
          'Проверьте Via Verde “Pagamentos em Falta / consultar por matrícula”, если нет идентификатора или подозреваете неоплаченный проезд.',
          'Для Ascendi/Via Livre/Globalvia используйте Portal de Pagamento de Portagens или сайт конкретного оператора.',
          'Смотрите не только сегодня: поездки могут появляться с задержкой, а после истечения срока уходить в другой процесс взыскания.'
        ] },
        { kind: 'warning', text: 'Portagens — это не то же самое, что штраф ANSR. Сначала это плата за проезд плюс административные расходы; если долго не платить, дело может стать дороже и уйти в взыскание.' }
      ]
    },
    {
      id: 'scams',
      title: 'Проверяйте фишинг и странные письма',
      content: [
        { kind: 'paragraph', text: 'ANSR регулярно предупреждает о фальшивых email/SMS с “штрафами” и ссылками на оплату. Официальные уведомления ANSR отправляются физической почтой; при сомнениях проверяйте через официальный сайт, mail@ansr.pt или телефон ANSR.' },
        { kind: 'checklist', items: [
          'Не платите по ссылке из email/SMS, если письмо не совпадает с официальным бумажным уведомлением.',
          'Сверяйте entidade, referência, montante и номер процесса.',
          'Не вводите банковские данные на страницах из сокращенных ссылок.',
          'Если пришел email от имени ANSR, проверьте домен отправителя и позвоните/напишите в ANSR через контакты с gov.pt.',
          'Храните comprovativos оплаты и ответы органов минимум до закрытия процесса.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Проверка Balcão do Condutor / Portal das Contraordenações', amountEUR: 0, note: 'Сам доступ бесплатный; нужны CMD/Cartão de Cidadão или уже действующий доступ к порталу.' },
    { label: 'Запрос информации в ANSR', amountEUR: 0, note: 'Обычный информационный запрос бесплатный; копии, certidão или envio postal могут иметь отдельные сборы.' },
    { label: 'Заказное письмо в ANSR', amountEURMin: 4, amountEURMax: 8, note: 'Ориентир по почтовым расходам; зависит от услуги CTT и вложений.' },
    { label: 'Административные расходы CTT по portagens', amountEURMin: 0.32, amountEURMax: 2.56, note: 'CTT указывает такой диапазон административных расходов, которые добавляются к плате за проезд при генерации оплаты.' }
  ],
  sources: [
    { title: 'gov.pt: Consultar o Portal das Contraordenações', url: 'https://www.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Balcão do Condutor', url: 'https://www2.gov.pt/balcao-do-condutor', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Consultar o histórico de contraordenações rodoviárias', url: 'https://www.gov.pt/servicos/consultar-o-historico-de-contraordenacoes-rodoviarias', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Autoridade Nacional de Segurança Rodoviária', url: 'https://www.gov.pt/entidades/autoridade-nacional-de-seguranca-rodoviaria', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'ANSR: formulários de contraordenações', url: 'https://www.ansr.pt/Contraordenacoes/Formularios', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'CTT: consultar portagens em dívida', url: 'https://www.ctt.pt/forms/portagens-em-divida', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'Via Verde: pagamentos em falta por matrícula', url: 'https://www.viaverde.pt/particulares/pagamentos-em-falta/consultar-por-matricula', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' }
  ],
  lastVerified: '2026-06-15',
  verifyIntervalDays: 120
}
