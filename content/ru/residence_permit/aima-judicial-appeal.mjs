export default {
  editorialVoice: 'hackportugal',
  id: 'aima-judicial-appeal',
  categoryId: 'residence_permit',
  title: 'AIMA отказала: иерархическое обжалование и иск в TAC',
  tldr: 'Если AIMA отказала в ВНЖ или продлении, не ждите, что всё «само исправится»: обычно есть 3 месяца с даты уведомления на recurso hierárquico или ação administrativa в Tribunal Administrativo de Círculo de Lisboa. Судебный путь требует advogado; базовая court fee часто около 76,50 € (0,75 UC), но гонорар юриста — основной расход. До финального отказа проверьте, не была ли это audiência prévia: на ответ часто дают 10 рабочих дней.',
  tags: ['aima', 'tac', 'обжалование', 'внж'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'identify-decision',
      title: '1. Понять, что именно прислала AIMA',
      content: [
        { kind: 'paragraph', text: 'Первое действие — отделить проект отказа от финального отказа. В письмах AIMA часто используется юридический язык: audiência prévia, indeferimento, projeto de decisão, decisão final. От этого зависит срок и стратегия.' },
        { kind: 'checklist', items: [
          'Если написано audiência prévia или projeto de indeferimento — это ещё не финальный отказ; обычно можно ответить и донести документы.',
          'Если написано decisão de indeferimento, indeferido или decisão final — это уже оспариваемый административный акт.',
          'Срок считайте с даты уведомления: email, личный кабинет, заказное письмо или дата фактического получения.',
          'Сохраните оригинальный email AIMA с заголовками, PDF, конверт CTT, aviso de receção, скриншоты портала.',
          'Проверьте, по какой процедуре отказ: primeira autorização de residência, renovação, reagrupamento familiar, CPLP, art. 88/89, D7/D8 и т.д.',
          'Не смешивайте отказ консульства по визе D и отказ AIMA по ВНЖ: органы разные, но судебный маршрут часто всё равно идёт через административные суды.',
          'Проверьте, указала ли AIMA основания: falta de meios de subsistência, ausência de seguro/SNS, antecedentes criminais, falta de alojamento, documentos caducados.'
        ] },
        { kind: 'warning', text: 'Если это audiência prévia, не подавайте сразу «иск из паники». Сначала ответьте по существу в срок, приложив недостающие документы. Пропуск этого этапа ухудшает позицию в суде.' }
      ]
    },
    {
      id: 'deadlines',
      title: '2. Сроки: 10 рабочих дней, 3 месяца и почему нельзя тянуть',
      content: [
        { kind: 'paragraph', text: 'В 2026 практическая развилка такая: до финального отказа — ответ на audiência prévia; после финального отказа — административное обжалование или суд. Для impugnação de ato administrativo в CPTA базовый срок для частных лиц — 3 месяца. Для recurso hierárquico facultativo по административному акту также ориентируются на срок судебного оспаривания, если специальная норма не даёт другой срок.' },
        { kind: 'checklist', items: [
          'AIMA прислала projeto de indeferimento: часто дают 10 рабочих дней на audiência prévia.',
          'AIMA вынесла финальный отказ: ориентир — 3 месяца на ação administrativa в TAC.',
          'Recurso hierárquico: тоже планируйте как 3-месячный deadline, если адвокат не подтвердил специальный срок.',
          'Сроки считаются не «до конца месяца», а от даты уведомления.',
          'Если последний день выпадает на выходной/праздник, применяются правила процессуального исчисления сроков — пусть считает advogado/solicitador.',
          'Подача административной жалобы может влиять на течение судебного срока, но это не повод подавать её «для продления времени» без стратегии.',
          'Если есть риск выезда, депортации, потери работы или разрыва семьи, обсудите providência cautelar вместе с основным иском.'
        ] },
        { kind: 'warning', text: 'Не ждите ответа AIMA месяцами, если срок в суд истекает. Главная ошибка — подать recurso hierárquico, не контролировать эффект на судебный prazo и пропустить окно для TAC.' }
      ]
    },
    {
      id: 'hierarchical-appeal',
      title: '3. Recurso hierárquico: когда имеет смысл',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico — это административное обжалование внутри системы: вы просите вышестоящий орган пересмотреть решение AIMA. Это дешевле суда и иногда работает, если отказ технический: не увидели документ, ошиблись в датах, не учли оплату, перепутали тип заявления.' },
        { kind: 'checklist', items: [
          'Подготовьте краткую хронологию: дата въезда, виза, запись AIMA, подача, biometria, запросы AIMA, ответы, дата отказа.',
          'Разберите каждый довод AIMA по пунктам: «AIMA утверждает X — фактически Y — доказательство Z».',
          'Приложите актуальные документы: паспорт, виза, comprovativo de entrada, NIF, NISS, contrato de arrendamento/atestado, meios de subsistência, seguro/SNS, certificado criminal.',
          'Документы на русском языке переводите на PT/EN у присяжного/сертифицированного переводчика, если они существенные.',
          'Отправляйте так, чтобы был след: заказное письмо с aviso de receção, email/portal с подтверждением, protocolo при личной подаче.',
          'Просите отменить indeferimento и возобновить процедуру, а не просто «пересмотреть ситуацию».',
          'Сохраните доказательство подачи — оно понадобится, если потом идти в TAC.'
        ] },
        { kind: 'paragraph', text: 'Минус: AIMA перегружена, и recurso hierárquico не всегда даёт быстрый результат. Если отказ затрагивает право на семейную жизнь, работу, продление законного пребывания или вы уже близко к 3 месяцам, часто разумнее сразу готовить судебный иск.' }
      ]
    },
    {
      id: 'tac-action',
      title: '4. Иск в Tribunal Administrativo de Círculo de Lisboa',
      content: [
        { kind: 'paragraph', text: 'Судебный путь — ação administrativa de impugnação de ato administrativo. Для решений AIMA и консульских визовых отказов на практике часто используют Tribunal Administrativo de Círculo de Lisboa, особенно когда ответчик — центральный орган. Подавать должен advogado: в административных судах представительство адвокатом обычно обязательно.' },
        { kind: 'checklist', items: [
          'Найдите advogado с практикой AIMA/TAC, а не просто «миграционного консультанта».',
          'Попросите письменную оценку: срок, подсудность, шансы, цена, нужна ли providência cautelar.',
          'Передайте адвокату полный файл, включая все письма AIMA, даже если они кажутся неважными.',
          'Иск должен просить annulment/declaração de nulidade решения и, при необходимости, обязанность AIMA рассмотреть заявление заново.',
          'Если отказ явно угрожает работе, семье, учёбе или праву оставаться в Португалии, обсудите срочную обеспечительную меру.',
          'Базовая taxa de justiça может быть около 76,50 € (0,75 UC при UC 102 €), но итоговые court costs зависят от цены и типа процесса.',
          'Гонорар advogado обычно намного выше court fee; заранее согласуйте этапы: análise, petição inicial, audiência, recursos.'
        ] },
        { kind: 'warning', text: 'TAC не «выдаёт ВНЖ вместо AIMA». Суд обычно отменяет незаконное решение и заставляет администрацию пересмотреть дело по закону. Поэтому доказательная база должна закрывать причины отказа, а не только показывать, что вам «очень нужно» остаться.' }
      ]
    },
    {
      id: 'evidence',
      title: '5. Что собрать до юриста и суда',
      content: [
        { kind: 'paragraph', text: 'Сильное дело — это не эмоциональное письмо, а аккуратная папка доказательств. Чем быстрее вы соберёте файл, тем меньше юрист потратит времени на восстановление картины и тем ниже риск пропуска срока.' },
        { kind: 'checklist', items: [
          'Паспорт: страницы с данными, визами, штампами въезда/выезда.',
          'Виза D1-D8, CPLP-документы или иное основание пребывания.',
          'Comprovativo de manifestação/appointment/biometria/submission в AIMA.',
          'Все уведомления AIMA: pedidos de elementos, audiência prévia, decisão final.',
          'Доказательства ответов AIMA: email sent, comprovativo postal, protocolo, screenshots.',
          'NIF, NISS, número de utente SNS или медицинская страховка.',
          'Адрес: contrato de arrendamento, recibos de renda, atestado de residência, utility bills.',
          'Доходы: contrato de trabalho, recibos de vencimento, recibos verdes, extratos bancários, IRS, declaração da entidade patronal.',
          'Семья: certidão de casamento/nascimento, escola детей, доказательства совместного проживания.',
          'Criminal record certificates и переводы, если вопрос был в antecedentes criminais.'
        ] },
        { kind: 'paragraph', text: 'Сделайте одну PDF-папку по датам и отдельную таблицу-хронологию. Названия файлов: 2025-11-03_AIMA_pedido-elementos.pdf, 2025-11-10_resposta_comprovativo.pdf. Это банально, но в судебных делах экономит часы.' }
      ]
    },
    {
      id: 'strategy',
      title: '6. Практическая стратегия после отказа',
      content: [
        { kind: 'paragraph', text: 'Выбор между recurso hierárquico и TAC зависит от причины отказа, срочности и качества доказательств. Если ошибка очевидная и легко исправляется — можно начать с административного пути. Если отказ юридически спорный, срок горит или последствия тяжёлые — не откладывайте суд.' },
        { kind: 'checklist', items: [
          'В первые 48 часов: определить тип письма и дату уведомления.',
          'В первую неделю: собрать полный файл и получить консультацию advogado.',
          'До ответа на audiência prévia: закрыть все фактические пробелы документами.',
          'До 3 месяцев: либо подать recurso hierárquico с контролем судебного срока, либо ação administrativa в TAC.',
          'Не выезжайте из Португалии без оценки риска, если ваш статус спорный или документ истёк.',
          'Не полагайтесь на устные обещания call center AIMA — в споре важны письменные доказательства.',
          'Если отказ связан с работой, предупредите работодателя аккуратно: вам может понадобиться declaração da entidade patronal.',
          'Если есть дети/супруг/медицинские обстоятельства, фиксируйте это документально — это важно для proportionality и fundamental rights.'
        ] },
        { kind: 'warning', text: 'Консультанты без cédula profissional не могут вести судебное дело в TAC. Они могут помогать с документами, но иск, обеспечительные меры и процессуальные сроки должен контролировать advogado.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa de justiça при подаче в TAC', amountEUR: 76.5, note: 'Ориентир 0,75 UC при UC 102 €; итог зависит от типа и стоимости дела.' },
    { label: 'Recurso hierárquico без юриста', amountEURMin: 0, amountEURMax: 50, note: 'Госпошлины часто нет; расходы — почта, переводы, заверения. Юрист оплачивается отдельно.' },
    { label: 'Консультация advogado', amountEURMin: 80, amountEURMax: 250, note: 'Типичный диапазон за первичный разбор файла; сложные дела дороже.' },
    { label: 'Судебное сопровождение advogado', amountEURMin: 1000, amountEURMax: 4000, note: 'Рынок сильно различается по срочности, обеспечительным мерам и числу заседаний.' }
  ],
  sources: [
    {
      title: 'MNE: механизмы обжалования отказов по национальным визам',
      url: 'https://vistos.mne.gov.pt/en/national-visas/appeal-mechanisms',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPTA: Código de Processo nos Tribunais Administrativos, сроки и административные иски',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2002-34490075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPA: Código do Procedimento Administrativo, административные жалобы и recurso hierárquico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-105602322',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Move to Cascais: обзор судебного обжалования решений AIMA',
      url: 'https://movetocascais.com/lawyer-services/judicial-appeal-of-aima-decisions-protecting-your-rights/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
