export default {
  editorialVoice: 'hackportugal',
  id: 'bolsa-investigacao-fct',
  categoryId: 'education_children',
  title: 'Bolsa de Investigação FCT — стипендии для исследователей',
  tldr: 'FCT — главный госфонд науки Португалии. Иностранцы могут подаваться на doutoramento, project grants, post-doc/BIPD и контракты Estímulo ao Emprego Científico: гражданство Португалии обычно не требуется, английский часто достаточен. В 2026 ориентиры: doutoramento около 1 300 €/мес, post-doc около 1 700 €/мес, junior research contract около 2 200 €/мес gross. Подача через myFCT/Ciência Vitae; нужен план, supervisor/host и дипломы.',
  tags: ['fct', 'bolsa', 'doutoramento', 'исследования'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое FCT и какие выплаты бывают',
      content: [
        { kind: 'paragraph', text: 'Fundação para a Ciência e a Tecnologia, I.P. — государственное агентство, которое финансирует PhD, исследовательские проекты, лаборатории и научные контракты. Для экспата важно: многие конкурсы открыты для non-Portuguese candidates, если вы соответствуете академическим требованиям и у вас есть принимающая организация.' },
        { kind: 'checklist', items: [
          'Bolsa de Doutoramento — индивидуальная PhD-стипендия; в 2026 типичный monthly maintenance allowance около 1 300 €/мес при работе в Португалии.',
          'Bolsa de Investigação в проекте — временная стипендия внутри конкретного funded project; суммы зависят от степени: licenciatura, mestrado, doutoramento.',
          'Bolsa de Investigação Pós-Doutoral / BIPD — post-doc стипендия, обычно около 1 700–1 800 €/мес; используется ограниченно и не заменяет постоянную работу.',
          'Estímulo ao Emprego Científico / CEEC — не стипендия, а трудовой контракт исследователя; junior level стартует примерно от 2 200 €/мес gross, обычно 14 выплат в год.',
          'FCT также может покрывать propinas для PhD до установленного лимита, personal accident insurance и социальное страхование в предусмотренных случаях.'
        ] },
        { kind: 'warning', text: 'Не путайте bolsa и contrato. Bolsa обычно не является трудовым договором, не даёт стандартных отпускных/Christmas allowance и не удерживает IRS как зарплата. CEEC и DL 57/2016 contracts — это employment contract с IRS, Segurança Social и трудовыми правами.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может подаваться: гражданство, язык, ВНЖ',
      content: [
        { kind: 'paragraph', text: 'FCT не ограничивает большинство научных конкурсов только гражданами Португалии. На практике важнее диплом, научный профиль, тема, supervisor и host institution: universidade, laboratório associado, unidade de I&D или empresa в консорциуме.' },
        { kind: 'checklist', items: [
          'Для PhD: обычно нужен mestrado или equivalent academic degree; иногда принимают licenciatura с сильным CV, если университет допускает к doutoramento.',
          'Для post-doc/BIPD: нужен PhD, часто с ограничением по дате получения степени и связью с конкретным проектом.',
          'Для CEEC: нужен PhD и research track record; уровень Junior/Assistant/Principal зависит от лет после PhD и публикаций.',
          'Португальский язык не всегда обязателен: STEM, social sciences и international PhD programmes часто работают на английском.',
          'Если диплом не португальский, могут попросить reconhecimento de grau или доказательство equivalence; это оформляется через DGES/университеты.',
          'Для выплаты в Португалии почти всегда понадобятся NIF, банковский IBAN SEPA, адрес и документы законного пребывания.',
          'Если вы переезжаете из-за стипендии/контракта, обычно смотрят визы D3, D4, D5 или research visa route в зависимости от статуса и host agreement.'
        ] },
        { kind: 'warning', text: 'Формальная победа в конкурсе FCT не заменяет иммиграционный статус. Для въезда и ВНЖ через AIMA всё равно нужны виза/основание пребывания, страховка/SNS, адрес и документы принимающей организации.' }
      ]
    },
    {
      id: 'where-to-find-calls',
      title: 'Где искать конкурсы в 2026',
      content: [
        { kind: 'paragraph', text: 'Есть два разных рынка. Первый — крупные индивидуальные конкурсы FCT, например doutoramento или CEEC. Второй — вакансии внутри проектов: университет получил funding и публикует bolsa для конкретного кандидата.' },
        { kind: 'checklist', items: [
          'fct.pt — официальный сайт FCT: страницы Apoios, Bolsas, Emprego Científico, concursos abertos.',
          'myFCT — личный кабинет для подачи на индивидуальные FCT calls.',
          'EURAXESS Portugal — частый канал для project-funded research fellowships и контрактов.',
          'Сайты университетов: Universidade de Lisboa, Universidade do Porto, Universidade de Coimbra, NOVA, Minho, Aveiro, ISCTE и др.',
          'Сайты research units: INESC, ITQB NOVA, i3S, Champalimaud, INL, LIP, CICS.NOVA, CES и др.',
          'LinkedIn и mailing lists лабораторий — полезны, но финальный edital должен быть официально опубликован.'
        ] },
        { kind: 'paragraph', text: 'Сроки не единые. Doutoramento обычно имеет ежегодный national call, который открывается на несколько недель; project grants могут появляться круглый год и закрываться через 10–20 рабочих дней. CEEC выходит отдельными программными окнами, и между call и результатами может пройти много месяцев.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для заявки',
      content: [
        { kind: 'paragraph', text: 'Готовьте пакет заранее: самые долгие части — признание диплома, рекомендательные письма и согласование work plan с supervisor. В проектных bolsas дедлайн короткий, поэтому PDF-документы должны быть готовы до публикации edital.' },
        { kind: 'checklist', items: [
          'CV в формате Ciência Vitae; часто также ORCID и список публикаций.',
          'Паспорт или Cartão de Cidadão/ВНЖ, если уже живёте в Португалии.',
          'Дипломы и transcripts: bachelor/master/PhD в зависимости от конкурса.',
          'Перевод диплома на Portuguese или English, если оригинал на русском/другом языке.',
          'Reconhecimento de grau, если прямо требуется edital или university admission.',
          'Research plan: тема, objectives, methodology, timeline, risks, expected outputs.',
          'Письмо supervisor или host institution с подтверждением приёма.',
          'Motivation letter и иногда две reference letters.',
          'Proof of enrolment/admission в doutoramento — часто нужен до подписания договора, не всегда на момент первой подачи.',
          'NIF и IBAN — обычно требуются уже на этапе заключения договора и выплат.'
        ] },
        { kind: 'warning', text: 'Читайте edital построчно. В Португалии заявки часто отклоняют не за слабую науку, а за формальность: не тот формат CV, нет подписи, диплом без оценки, файл загружен после deadline или отсутствует declaration of honour.' }
      ]
    },
    {
      id: 'money-and-tax',
      title: 'Деньги, налоги и социальное страхование',
      content: [
        { kind: 'paragraph', text: 'Стипендия FCT обычно платится ежемесячно на банковский счёт. Это maintenance allowance, а не salary. Поэтому сравнивать 1 300 € bolsa и 1 300 € gross salary напрямую нельзя: у них разный налоговый и социальный режим.' },
        { kind: 'checklist', items: [
          'Doutoramento в Португалии: ориентир 2026 — около 1 300 €/мес net-like allowance.',
          'Post-doc/BIPD: ориентир — около 1 700–1 800 €/мес, зависит от таблицы FCT и edital.',
          'CEEC Junior: около 2 200 €/мес gross, но это зарплата: IRS и Segurança Social удерживаются как у работника.',
          'Bolsa обычно освобождена от IRS, если соответствует Estatuto do Bolseiro de Investigação и не является оплатой обычной работы.',
          'FCT может компенсировать Seguro Social Voluntário по правилам grant agreement; проверьте, кто подаёт заявление и какие сроки.',
          'PhD grant может включать tuition support для propinas до лимита FCT; сверх лимита платит студент или host, если не согласовано иначе.',
          'Выплаты могут задерживаться в начале, пока подписывается contrato de bolsa и проверяются документы.',
          'Для аренды жилья landlord может хуже воспринимать bolsa, чем employment contract; приготовьте grant letter, банковскую историю и guarantor/deposit.'
        ] },
        { kind: 'warning', text: 'Если вы выполняете постоянные обязанности лаборатории как штатный сотрудник, но оформлены как bolseiro, это риск misclassification. Для таких задач закон всё чаще требует contrato de trabalho, особенно после реформ научной занятости.' }
      ]
    },
    {
      id: 'application-strategy',
      title: 'Практическая стратегия подачи',
      content: [
        { kind: 'paragraph', text: 'Лучший путь — сначала найти supervisor/группу, а потом подбирать funding. Холодная заявка в FCT без поддержки host institution почти всегда слабее, чем заявка, встроенная в реальный проект лаборатории.' },
        { kind: 'checklist', items: [
          'За 3–6 месяцев до call выберите 5–10 research groups и напишите PI короткое письмо: тема, CV, 2–3 релевантные публикации/проекта.',
          'Попросите PI подтвердить, подходит ли ваша тема под стратегию unidade de I&D и может ли он быть supervisor.',
          'Сравните evaluation criteria прошлого года: academic merit, host conditions, work plan, societal impact, publications.',
          'Не обещайте португальский, если его нет; честно пишите English working proficiency и план учить Portuguese для интеграции.',
          'Если диплом российский/украинский/другой non-EU, заранее уточните recognition у выбранного университета.',
          'Подайте на несколько каналов одновременно: FCT individual call, project bolsa, university scholarship, Marie Skłodowska-Curie, Erasmus Mundus, company-funded PhD.',
          'После результата проверьте appeal/reclamação deadline: если оценка содержит фактическую ошибку, можно подать возражение.'
        ] },
        { kind: 'paragraph', text: 'Для семьи планируйте бюджет реалистично. 1 300 €/мес PhD bolsa в Лиссабоне или Порту покрывает скромную жизнь одного человека, но для пары/детей почти всегда нужен второй доход или savings.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача заявки FCT', amountEUR: 0, note: 'Официальные FCT applications обычно без fee.' },
    { label: 'Reconhecimento de grau', amountEURMin: 30, amountEURMax: 600, note: 'Зависит от типа признания и университета; automatic recognition дешевле, specific/level recognition дороже.' },
    { label: 'Перевод диплома', amountEURMin: 25, amountEURMax: 80, note: 'Ориентир за страницу у certified translator; апостиль оплачивается отдельно в стране выдачи.' },
    { label: 'PhD propinas сверх лимита FCT', amountEURMin: 0, amountEURMax: 3000, note: 'Если tuition fee выше лимита поддержки FCT, разницу должен покрыть студент или host по договорённости.' }
  ],
  sources: [
    { title: 'FCT — Bolsas de Investigação', url: 'https://www.fct.pt/financiamento/programas-de-financiamento/bolsas/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'FCT — atualização de valores das bolsas para 2026', url: 'https://www.fct.pt/en/fct-atualizou-o-valor-das-bolsas-para-2026/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'FCT — Emprego Científico / Estímulo ao Emprego Científico', url: 'https://www.fct.pt/financiamento/programas-de-financiamento/emprego-cientifico/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Estatuto do Bolseiro de Investigação — Lei 40/2004', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-58216179', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
