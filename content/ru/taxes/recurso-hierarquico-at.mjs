export default {
  editorialVoice: 'hackportugal',
  id: 'recurso-hierarquico-at',
  categoryId: 'taxes',
  title: 'Иерархическое обжалование решений Finanças: recurso hierárquico',
  tldr: 'Recurso hierárquico — административная жалоба на решение Finanças вышестоящему руководителю Autoridade Tributária. Типичный срок — 30 дней с уведомления о решении, подача через Portal das Finanças → Contencioso → Recurso Hierárquico или письменно в Serviço de Finanças. Это не «пауза» по долгу: cobrança и execução fiscal обычно продолжаются, если нет гарантии/приостановки. В 2026 используйте его для спорных liquidações, отказов по reclamação graciosa, IMI/IRS/IVA-решений, но не пропускайте судебные сроки.',
  tags: ['finanças', 'налоги', 'обжалование', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое recurso hierárquico',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico — это просьба пересмотреть налоговое решение не тем же инспектором/службой, а вышестоящим органом Autoridade Tributária e Aduaneira. База — Código de Procedimento e de Processo Tributário (CPPT), особенно art. 66 и 67.' },
        { kind: 'paragraph', text: 'На практике это административный путь между «просто написать в Finanças» и судом. Его используют, когда вы получили desfavorável: отказ, частичный отказ, дополнительную liquidação, решение по reclamação graciosa, штрафное/процедурное решение или иной акт AT, который затрагивает ваши права.' },
        { kind: 'checklist', items: [
          'Срок по общему правилу: 30 дней с даты уведомления решения Finanças.',
          'Подаётся адресно вышестоящему органу, но через службу/орган, который вынес спорное решение.',
          'Можно подать онлайн через Portal das Finanças: Contencioso → Recurso Hierárquico.',
          'Можно подать письменно в Serviço de Finanças с подтверждением приёма.',
          'Это не то же самое, что reclamação graciosa: reclamação обычно сначала просит саму AT исправить акт; recurso hierárquico поднимает спор выше.',
          'Это не судебный процесс: решение остаётся внутри AT.',
          'Для сложных сумм по IRS, IVA, IMI, AIMI, IMT лучше до подачи показать текст contabilista certificado или адвокату по налогам.'
        ] }
      ]
    },
    {
      id: 'deadline',
      title: 'Срок 30 дней: как считать',
      content: [
        { kind: 'paragraph', text: 'Ключевой риск — пропустить prazo. В налоговых спорах срок обычно считается с момента, когда решение считается вам уведомленным: дата получения carta registada, дата leitura в Caixa Postal Eletrónica/ViaCTT, дата уведомления в Portal das Finanças или дата, указанная в электронном уведомлении.' },
        { kind: 'checklist', items: [
          'Сохраните PDF уведомления и конверт/почтовый трекинг, если письмо пришло по Correios.',
          'Проверьте Caixa Postal Eletrónica/ViaCTT: для многих налогоплательщиков электронное уведомление юридически значимо.',
          'Не считайте срок «с даты, когда я заметил письмо», если уведомление уже считается доставленным по закону.',
          'Если последний день выпадает на выходной/праздник, обычно срок переносится на следующий рабочий день, но не стройте стратегию на этом.',
          'Для уведомлений, связанных с execução fiscal, сроки могут быть короче или идти параллельно с другими сроками.',
          'Если вы одновременно думаете о суде, отдельно проверьте срок impugnação judicial: recurso hierárquico не всегда безопасно «замораживает» судебную стратегию.'
        ] },
        { kind: 'warning', text: 'Не ждите ответа Finanças «когда-нибудь». Recurso hierárquico обычно имеет devolutivo effect: спор передаётся выше, но cobrança налога, juros и execução fiscal сами по себе не останавливаются. Для приостановки взыскания часто нужна garantia idónea, pagamento em prestações или другой формальный механизм.' }
      ]
    },
    {
      id: 'prepare',
      title: 'Что подготовить до подачи',
      content: [
        { kind: 'paragraph', text: 'Хороший recurso hierárquico — это не эмоциональное письмо. Он должен быстро показать: какой акт вы обжалуете, почему он незаконен или ошибочен, какие доказательства это подтверждают и какое решение вы просите принять.' },
        { kind: 'checklist', items: [
          'Ваш NIF, имя, адрес fiscal и контактный e-mail/телефон.',
          'Идентификация решения: номер processo, liquidação, demonstração de acerto de contas, nota de cobrança, despacho или referência do documento.',
          'Дата уведомления и доказательство уведомления.',
          'Краткая хронология: что вы подали, когда Finanças ответили, что именно отказали/начислили.',
          'Юридические основания: нормы CIRS/CIRC/CIVA/CIMI/CIMT/LGT/CPPT, если применимо.',
          'Фактические доказательства: договор аренды, recibos de renda, recibos verdes, declaração de IRS, faturas, comprovativos de pagamento, certificado de residência fiscal, Atestado de Residência, банковские выписки.',
          'Чёткий pedido: отменить liquidação, признать вычет, вернуть imposto, исправить cadastro, отменить juros/coima и т.п.',
          'PDF-файлы с понятными именами: 01-notificacao.pdf, 02-declaracao-irs.pdf, 03-contrato.pdf.',
          'Если документ не на PT/EN, подготовьте перевод или хотя бы пояснение на португальском.'
        ] },
        { kind: 'warning', text: 'Пишите на португальском. Русский текст Finanças не обязан рассматривать по существу, а машинный перевод без структуры часто ухудшает дело. Минимум: «Exmo. Senhor Diretor de Finanças…», факты, правовые основания, pedido, anexos.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Подача через Portal das Finanças',
      content: [
        { kind: 'paragraph', text: 'В 2026 основной путь — Portal das Finanças. Нужен NIF и пароль AT или Chave Móvel Digital (CMD). Если у вас нет доступа, восстановите пароль заранее: доставка письма с кодом может занять дни, а prazo не ждёт.' },
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Откройте portaldasfinancas.gov.pt → Iniciar Sessão. Войдите по NIF/senha или CMD. Проверьте, что вы действуете от своего NIF, а не от компании/третьего лица.' }
          ] },
          { id: 'menu', title: '2. Найти форму', content: [
            { kind: 'paragraph', text: 'Идите в Serviços / Cidadãos → Contencioso → Recurso Hierárquico. Названия пунктов в Portal могут слегка меняться, поэтому используйте поиск по сайту: «recurso hierárquico».' }
          ] },
          { id: 'fill', title: '3. Заполнить заявление', content: [
            { kind: 'checklist', items: [
              'Выберите налог/область: IRS, IVA, IMI, IMT, IUC, coimas или другое.',
              'Укажите номер processo или liquidação.',
              'Вставьте краткое изложение доводов в поле descrição.',
              'Прикрепите PDF с полным текстом recurso и anexos.',
              'Проверьте лимиты размера файлов; если нужно, объедините/сожмите PDF.',
              'Отправьте и скачайте comprovativo de entrega.'
            ] }
          ] },
          { id: 'proof', title: '4. Сохранить доказательство подачи', content: [
            { kind: 'paragraph', text: 'Сразу сохраните comprovativo, номер процесса и скриншот страницы подтверждения. Это ваш щит, если позже Finanças скажет, что жалоба не поступила или поступила вне срока.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-submission',
      title: 'Что происходит после подачи',
      content: [
        { kind: 'paragraph', text: 'Орган, который вынес спорный акт, получает recurso и может сам пересмотреть позицию либо направить дело вышестоящему руководителю. По CPPT решение по recurso hierárquico должно быть принято в административные сроки, но на практике ожидание может растянуться.' },
        { kind: 'checklist', items: [
          'Проверяйте Portal das Finanças → A minha área → Mensagens / Processos / Contencioso.',
          'Следите за ViaCTT или Caixa Postal Eletrónica, если она активирована.',
          'Если пришёл pedido de elementos, отвечайте в указанный срок и прикладывайте только релевантные доказательства.',
          'Если налог к оплате уже выставлен, проверьте prazo de pagamento: recurso не отменяет автоматом obrigação de pagamento.',
          'При риске execução fiscal спросите в Serviço de Finanças про garantia, pagamento em prestações или suspensão da execução.',
          'Если решение положительное, проверьте, что AT реально исправила liquidação/cadastro и вернула деньги с juros indemnizatórios, если они положены.',
          'Если отказали, оцените impugnação judicial или ação administrativa с адвокатом.'
        ] },
        { kind: 'warning', text: 'Не путайте «жалоба подана» и «долг заморожен». Если есть nota de cobrança на 3 000 € и prazo оплаты истекает, после истечения могут начисляться juros de mora и начаться execução fiscal, даже пока recurso hierárquico рассматривается.' }
      ]
    },
    {
      id: 'when-to-use',
      title: 'Когда recurso hierárquico уместен, а когда нет',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico полезен, когда ошибка Finanças видна по документам и вы хотите административно исправить решение без суда.\n\nНапример: AT не учла налоговое резидентство, отказала в вычете, неверно посчитала IMI/IMT, не приняла доказательства по IRS, неправильно обработала declaração de substituição.' },
        { kind: 'checklist', items: [
          'Уместно: есть письменное решение Finanças и вы укладываетесь в 30 дней.',
          'Уместно: сумма спора не оправдывает суд, но документы сильные.',
          'Уместно: нужно создать формальный след перед дальнейшим спором.',
          'Осторожно: спор уже в execução fiscal — нужны отдельные инструменты защиты.',
          'Осторожно: вопрос требует свидетелей, экспертизы или сложного толкования закона — суд может быть эффективнее.',
          'Не заменяет revisão oficiosa: revisão oficiosa — отдельный механизм исправления налогового акта, часто используемый, когда обычные сроки уже прошли.',
          'Не заменяет reclamação graciosa: если вы ещё на стадии первичного оспаривания liquidação, проверьте, какой инструмент даёт лучший срок и эффект.'
        ] },
        { kind: 'paragraph', text: 'Практическая тактика для экспата: если речь о небольшом IRS/IMI и срок 30 дней жив — подайте recurso hierárquico аккуратно и быстро. Если речь о крупной сумме, NHR/IFICI, двойном резидентстве, IVA или риске взыскания — не экономьте на консультации: ошибка в выборе процедуры может стоить дороже налога.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача recurso hierárquico в Finanças', amountEUR: 0, note: 'Госпошлины за административную подачу обычно нет.' },
    { label: 'Консультация contabilista/налогового консультанта', amountEURMin: 60, amountEURMax: 200, note: 'Ориентир за разбор простого IRS/IMI-кейса; Лиссабон/Порту и срочность дороже.' },
    { label: 'Адвокат по налогам', amountEURMin: 150, amountEURMax: 500, note: 'Ориентир за первичную консультацию или подготовку позиции; судебный спор считается отдельно.' },
    { label: 'Garantia для приостановки execução fiscal', amountEURMin: 0, amountEURMax: 0, note: 'Сумма зависит от долга, juros и custos; банк может брать комиссии за банковскую гарантию.' }
  ],
  sources: [
    { title: 'CPPT — Código de Procedimento e de Processo Tributário, art. 66–67 о recurso hierárquico', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34500675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'LGT — Lei Geral Tributária, общие гарантии налогоплательщиков', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34438775', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Re-activar: что такое recurso hierárquico в налоговом контексте', url: 'https://www.re-activar.pt/faqs/o-que-e-um-recurso-hierarquico-no-contexto-fiscal/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Caixa Geral de Depósitos: revisão oficiosa и отличие от других способов исправления налогов', url: 'https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/revisao-oficiosa.aspx', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
