export default {
  editorialVoice: 'hackportugal',
  id: 'act-labour-complaint',
  categoryId: 'work_business',
  title: 'Жалоба в ACT на работодателя: невыплата, увольнение, условия труда',
  tldr: 'ACT — Autoridade para as Condições do Trabalho: инспекция труда Португалии. В 2026 жалобу можно подать онлайн через gov.pt/ACT бесплатно: невыплата зарплаты, отсутствие recibo de vencimento, незаконные часы, небезопасные условия, фиктивные recibos verdes, нарушения при увольнении. ACT может провести инспекцию и оштрафовать работодателя, но спор о компенсации и признании увольнения незаконным обычно решает Tribunal do Trabalho; в трудовом суде сначала проводится обязательная попытка примирения.',
  tags: ['act', 'работа', 'увольнение', 'зарплата'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-complain',
      title: 'Когда идти в ACT, а когда сразу думать о суде',
      content: [
        { kind: 'paragraph', text: 'ACT принимает жалобы на нарушение трудового законодательства: зарплата не выплачена, отпускные/рождественские не начислены, нет письменного договора, не выдают recibo de vencimento, заставляют работать сверхурочно без оплаты, не соблюдают horário de trabalho, нет segurança e saúde no trabalho, увольнение оформлено с нарушениями.' },
        { kind: 'paragraph', text: 'Важно разделять: ACT — инспекция. Она проверяет работодателя, требует документы, может составить auto de notícia и наложить coima. Но ACT обычно не “взыскивает” вашу зарплату как судебный пристав и не признаёт увольнение незаконным вместо суда.' },
        { kind: 'checklist', items: [
          'ACT подходит, если нарушение продолжается или затрагивает других работников: не платят, нет графиков, нет страховки от acidentes de trabalho, опасное рабочее место.',
          'Tribunal do Trabalho нужен, если вы хотите получить конкретные суммы: зарплату, férias, subsídio de férias, subsídio de Natal, horas extra, indemnização.',
          'При увольнении срок критичен: оспаривание незаконности despedimento обычно подаётся в Tribunal do Trabalho в течение 60 дней с получения письменного решения/даты увольнения.',
          'Трудовые кредиты работника по Código do Trabalho art. 337 обычно можно требовать в течение 1 года со дня, следующего за прекращением договора.',
          'Если вы ещё работаете, жалоба в ACT может быть конфиденциальной для целей инспекции, но по фактам работодатель часто понимает источник — подготовьте доказательства заранее.',
          'Если есть риск для жизни/здоровья на рабочем месте, подавайте жалобу немедленно и фиксируйте фото/видео, даты, свидетелей.'
        ] },
        { kind: 'warning', text: 'Не ждите ответа ACT, если у вас уже идёт 60-дневный срок на оспаривание увольнения. Жалоба в ACT не останавливает процессуальные сроки в Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Соберите пакет доказательств 📁',
      content: [
        { kind: 'paragraph', text: 'Чем конкретнее жалоба, тем выше шанс инспекции. Пишите не “работодатель плохой”, а даты, суммы, графики, имена, адрес объекта и что именно нарушено.' },
        { kind: 'checklist', items: [
          'Ваши данные: имя, NIF, NISS если есть, телефон, email, адрес.',
          'Данные работодателя: название компании, NIPC/NIF, адрес sede и адрес места работы, имя gerente/chefe.',
          'Contrato de trabalho или доказательства работы без договора: переписки, смены, badges, доступы, фото формы, расписания.',
          'Recibos de vencimento, extractos bancários, comprovativos de transferência, сообщения о задержке оплаты.',
          'Табель/horário, записи смен, WhatsApp/Slack/Email с просьбами выйти в выходные или переработать.',
          'Письмо об увольнении, comunicação de despedimento, acordo de revogação, aviso prévio, любые документы, которые просили подписать.',
          'Доказательства небезопасных условий: фото, видео, свидетели, отсутствие EPI, отсутствие formação, acidentes, relatório médico.',
          'Если вы на recibos verdes, но работаете как штатный сотрудник: фиксированный график, начальник, рабочее место работодателя, эксклюзивность, ежемесячная оплата.',
          'Расчёт долга: месяц, сумма bruto/neto, что не оплачено — salário, subsídios, férias, horas extra, compensação.'
        ] },
        { kind: 'warning', text: 'Не подписывайте acordo de revogação, quitação или “получил всё” без проверки. Такие документы могут осложнить последующее взыскание, даже если деньги фактически не выплатили.' }
      ]
    },
    {
      id: 'file-act-online',
      title: 'Как подать жалобу в ACT онлайн',
      content: [
        { kind: 'paragraph', text: 'Официальный путь — сервис “Fazer uma queixa à Autoridade para as Condições do Trabalho (ACT)” на gov.pt или сайт act.gov.pt. Жалоба бесплатна. В 2026 это основной канал для pedido de intervenção inspetiva.' },
        { kind: 'substeps', items: [
          { id: 'open-service', title: '1. Откройте сервис gov.pt или ACT', content: [
            { kind: 'paragraph', text: 'Найдите услугу “Fazer uma queixa à ACT”. Если есть Chave Móvel Digital или Cartão de Cidadão, вход удобнее; без них используйте доступные формы/контакты ACT, указанные на сайте.' }
          ] },
          { id: 'choose-topic', title: '2. Выберите тему нарушения', content: [
            { kind: 'checklist', items: [
              'Retribuição/salários — невыплата зарплаты.',
              'Tempo de trabalho — часы, переработки, выходные, descanso.',
              'Contrato de trabalho — отсутствие договора или ложные recibos verdes.',
              'Despedimento — нарушения при увольнении.',
              'Segurança e saúde no trabalho — опасные условия.',
              'Igualdade e não discriminação — дискриминация, беременность, родительство, harassment.'
            ] }
          ] },
          { id: 'write-facts', title: '3. Опишите факты по схеме “кто-что-когда-где”', content: [
            { kind: 'paragraph', text: 'Пример: “Работаю в Restaurante X, Rua Y, Lisboa, с 03.02.2026. Договор не выдали. Зарплата 920 € net была обещана устно, за март 2026 не выплачено 920 €. Работал 6 дней в неделю по 10 часов, recibos de vencimento нет. Документы и переписка приложены”.' }
          ] },
          { id: 'attach-files', title: '4. Приложите файлы и отправьте', content: [
            { kind: 'paragraph', text: 'Загрузите PDF/JPG/PNG: договор, recibos, банковские выписки, переписку, фото условий труда. Сохраните comprovativo/номер обращения.' }
          ] }
        ] },
        { kind: 'warning', text: 'ACT не обязана вести с вами переписку как адвокат и не всегда сообщает все результаты инспекции. Номер жалобы сохраните: он пригодится юристу, sindicato или Ministério Público при Tribunal do Trabalho.' }
      ]
    },
    {
      id: 'after-complaint',
      title: 'Что происходит после жалобы',
      content: [
        { kind: 'paragraph', text: 'Инспектор ACT оценивает жалобу и может запросить документы у работодателя, провести visita inspetiva, опросить работников, проверить payroll, графики, segurança e saúde no trabalho, seguros, contratos.' },
        { kind: 'checklist', items: [
          'Если нарушение подтверждено, ACT может выдать предписание устранить нарушение.',
          'За административные трудовые нарушения работодатель может получить coima.',
          'При опасных условиях ACT может потребовать немедленных мер безопасности.',
          'Если видит признаки преступления или серьёзного нарушения, ACT может передать материалы компетентным органам.',
          'ACT может помочь зафиксировать нарушение, что полезно в суде.',
          'Работодатель не имеет права retaliar — ухудшать условия, угрожать, увольнять за жалобу; такие действия фиксируйте отдельно.',
          'Если долг не выплачен добровольно, готовьте требование в Tribunal do Trabalho.'
        ] },
        { kind: 'paragraph', text: 'По невыплате зарплаты параллельно направьте работодателю письменное требование: email + carta registada com aviso de receção. Укажите суммы, периоды, IBAN, срок оплаты, например 5 рабочих дней. Это не заменяет суд, но показывает добросовестность и фиксирует долг.' }
      ]
    },
    {
      id: 'tribunal-do-trabalho',
      title: 'Если нужны деньги или признание увольнения незаконным: Tribunal do Trabalho',
      content: [
        { kind: 'paragraph', text: 'Трудовые споры рассматривает Tribunal do Trabalho. Для работника часто доступны Ministério Público при суде, sindicato или advogado. Если доход низкий, подавайте apoio judiciário через Segurança Social: можно просить освобождение от судебных расходов и назначение advogado.' },
        { kind: 'checklist', items: [
          'Невыплата зарплаты: требуйте salário, subsídio de férias, subsídio de Natal, férias não gozadas, horas extra, juros de mora.',
          'Увольнение: проверьте тип — despedimento disciplinar, coletivo, extinção do posto de trabalho, inadaptação, caducidade, revogação.',
          'Оспаривание despedimento: ориентир — 60 дней с получения решения/даты увольнения по Código do Trabalho art. 387; не пропускайте срок.',
          'После прекращения договора трудовые кредиты обычно предъявляются в течение 1 года по art. 337 Código do Trabalho.',
          'В суде по трудовым делам проводится tentativa de conciliação/audiência de partes: судья пытается примирить стороны до дальнейшего разбирательства.',
          'Если соглашение достигнуто, оно фиксируется в auto и становится исполнимым.',
          'Если примирения нет, дело идёт дальше: contestação, prova, audiência de julgamento, sentença.',
          'Не соглашайтесь на выплату “в конверте” без recibo/declaração: потом сложнее доказать остаток долга.'
        ] },
        { kind: 'warning', text: 'Если вам предлагают “mutual agreement” вместо увольнения, проверьте последствия для subsídio de desemprego. Acordo de revogação не всегда даёт право на пособие по безработице; важны основания и квоты, предусмотренные законом.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Особенности для иностранцев',
      content: [
        { kind: 'paragraph', text: 'Право на зарплату, безопасные условия и защиту от незаконного увольнения не зависит от гражданства. Даже если у вас временная виза, ожидание AIMA или нет идеального пакета документов, работодатель не получает права не платить.' },
        { kind: 'checklist', items: [
          'Не отдавайте работодателю оригинал паспорта, ВНЖ, Cartão de Cidadão, NIF или банковскую карту.',
          'Если работодатель угрожает “аннулировать визу”, фиксируйте угрозы письменно. Работодатель не является AIMA.',
          'Попросите contrato de trabalho и recibos de vencimento: они важны для ВНЖ, NISS, IRS и Segurança Social.',
          'Если вас оформили как recibos verdes, но вы фактически подчинены как работник, это может быть falso trabalho independente.',
          'Минимальная месячная зарплата SMN в континентальной Португалии в 2026 — 920 €; ниже полной ставки за полный рабочий день платить нельзя, кроме специальных законных режимов.',
          'Сохраняйте доказательства на личной почте/облаке, а не только в рабочем аккаунте.',
          'Если португальский слабый, пишите жалобу простыми фразами; можно приложить документы на английском/русском, но ключевые факты лучше дать на португальском.'
        ] },
        { kind: 'warning', text: 'Нелегальная занятость может создавать иммиграционные и налоговые риски, но это не лишает вас права требовать оплату за фактически выполненную работу. В сложных случаях идите к advogado, sindicato или Ministério Público при Tribunal do Trabalho до подписания любых бумаг.' }
      ]
    }
  ],
  costs: [
    { label: 'Жалоба в ACT через gov.pt/ACT', amountEUR: 0, note: 'Государственная услуга бесплатна.' },
    { label: 'Carta registada com aviso de receção работодателю', amountEURMin: 3, amountEURMax: 7, note: 'Зависит от веса и услуги CTT; полезно для фиксации требования.' },
    { label: 'Первичная консультация advogado по трудовому праву', amountEURMin: 50, amountEURMax: 150, note: 'Рынок сильно различается по городу и срочности; при низком доходе проверьте apoio judiciário.' }
  ],
  sources: [
    {
      title: 'gov.pt: подать жалобу в Autoridade para as Condições do Trabalho',
      url: 'https://www2.gov.pt/en/servicos/fazer-uma-queixa-a-autoridade-para-as-condicoes-do-trabalho-act-',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ACT: официальный сайт Autoridade para as Condições do Trabalho',
      url: 'https://www.act.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do Trabalho — Lei 7/2009, включая art. 337 и art. 387',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código de Processo do Trabalho — порядок трудового процесса и примирения',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1999-34582975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
