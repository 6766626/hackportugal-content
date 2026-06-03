export default {
  editorialVoice: 'hackportugal',
  id: 'rvcc-anqep-centro-qualifica',
  categoryId: 'education_children',
  title: 'RVCC: признание уровня образования взрослых через Centro Qualifica',
  tldr: 'RVCC — бесплатная процедура для взрослых в Portugal, если школьный диплом из CPLP/Украины потерян, не признаётся работодателем или уровень образования нужно подтвердить по португальской шкале. Через Centro Qualifica можно получить certificação escolar: B1 = 4.º ano, B2 = 6.º ano, B3 = 9.º ano, secundário = 12.º ano, а также profissional по Catálogo Nacional de Qualificações.\n\nПроцесс идёт на португальском: inscrição, diagnóstico, portfólio reflexivo, validação и júri.',
  tags: ['rvcc', 'qualifica', 'образование', 'cplp', 'украина'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-rvcc-is',
      title: 'Что такое RVCC и кому это подходит',
      content: [
        { kind: 'paragraph', text: 'RVCC означает Reconhecimento, Validação e Certificação de Competências. Это не «перевод диплома», а признание компетенций, полученных в школе, на работе, в армии, бизнесе, уходе за семьёй, волонтёрстве или самообразовании. Процедуру ведут Centros Qualifica под координацией ANQEP.' },
        { kind: 'paragraph', text: 'Для мигрантов из CPLP и Украины RVCC полезен, когда невозможно быстро получить апостиль, архивную справку, нотариальный перевод или формальное reconhecimento/equivalência иностранного диплома. Итог RVCC — португальская сертификация уровня образования или профессиональной квалификации, которую понимают IEFP, работодатели и учебные центры.' },
        { kind: 'checklist', items: [
          'Нет на руках школьного диплома или аттестата',
          'Документ есть, но работодатель/курс требует португальский уровень B3 или secundário',
          'Нужен 9.º ano или 12.º ano для emprego, formação, concurso или cursos profissionais',
          'Есть большой практический опыт, но нет certificado profissional',
          'Вы взрослый и уже живёте в Portugal или планируете переезд',
          'Вы готовы проходить интервью, задания и защиту portfólio на португальском',
          'Вам не нужна академическая эквивалентность для университета — для этого используется отдельная процедура reconhecimento/equivalência'
        ] }
      ]
    },
    {
      id: 'levels',
      title: 'Какие уровни можно подтвердить',
      content: [
        { kind: 'paragraph', text: 'RVCC escolar подтверждает школьный уровень по португальской системе. Это важно: фраза «у меня 10 классов» из другой страны сама по себе не равна автоматически 9.º ano или 12.º ano в Portugal.' },
        { kind: 'checklist', items: [
          'B1 — соответствует 1.º ciclo do ensino básico, обычно 4.º ano',
          'B2 — соответствует 2.º ciclo do ensino básico, обычно 6.º ano',
          'B3 — соответствует 3.º ciclo do ensino básico, обычно 9.º ano',
          'Secundário — соответствует ensino secundário, обычно 12.º ano',
          'RVCC profissional — подтверждение профессиональных компетенций по Catálogo Nacional de Qualificações',
          'Profissional обычно требует релевантный опыт работы; часто ориентир — не менее 3 лет в области, но Centro Qualifica проверяет профиль индивидуально',
          'Можно получить частичную валидацию: недостающие unidades de competência закрываются коротким обучением или formação complementar'
        ] },
        { kind: 'warning', text: 'RVCC не заменяет автоматическое признание иностранного диплома для университета, регулируемых профессий или ordens profissionais. Для медицины, инженерии, учительства, юриспруденции и поступления в ensino superior проверяйте отдельные правила признания дипломов.' }
      ]
    },
    {
      id: 'enrolment',
      title: 'Как записаться в Centro Qualifica',
      content: [
        { kind: 'paragraph', text: 'Запись делается через портал Qualifica или напрямую в ближайшем Centro Qualifica: школы, IEFP, муниципальные центры и ассоциации. Вы не обязаны идти только по месту прописки, но на практике удобнее выбрать центр рядом с домом или работой.' },
        { kind: 'substeps', items: [
          { id: 'find-centro', title: '1. Найдите Centro Qualifica', content: [
            { kind: 'paragraph', text: 'На qualifica.gov.pt откройте поиск Centros Qualifica и выберите район. Если вы в Лиссабоне/Порту, лучше написать в 2–3 центра: очереди и специализации отличаются.' }
          ] },
          { id: 'send-contact', title: '2. Отправьте pedido de inscrição', content: [
            { kind: 'checklist', items: [
              'Nome completo',
              'Дата рождения',
              'Контактный телефон и email',
              'Текущий адрес в Portugal, если уже есть',
              'NIF, если уже получен',
              'Документ личности: паспорт, Cartão de Cidadão, ВНЖ, título CPLP или другой документ',
              'Последний известный уровень образования',
              'Опыт работы и желаемая область для RVCC profissional'
            ] }
          ] },
          { id: 'first-meeting', title: '3. Пройдите acolhimento и diagnóstico', content: [
            { kind: 'paragraph', text: 'На первой встрече техник Centro Qualifica определяет, нужен ли вам RVCC, курс EFA, Português Língua de Acolhimento, formação modular или обычная equivalência. Для иностранцев часто сначала рекомендуют подтянуть português, потому что доказательства и júri проходят на португальском.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы и доказательства: что готовить',
      content: [
        { kind: 'paragraph', text: 'Главный документ RVCC — не диплом, а portfólio reflexivo de aprendizagens: структурированное портфолио, где вы показываете, что уже умеете, и связываете это с референциалом компетенций. Чем лучше доказательства, тем быстрее валидация.' },
        { kind: 'checklist', items: [
          'Паспорт или другой documento de identificação',
          'NIF — если есть; отсутствие NIF не должно быть причиной игнорировать запрос, но центр может попросить оформить для регистрации',
          'ВНЖ, título CPLP, visa D1-D8, proteção temporária UA или иной документ пребывания — если есть',
          'Иностранные аттестаты, справки, табели, вкладыши, дипломы — даже без апостиля полезны как evidence',
          'Перевод ключевых документов на português, если центр не может оценить оригинал',
          'CV в формате Portugal/Europass',
          'Declarações de entidade patronal, contratos, recibos verdes, certificados de formação',
          'Примеры работ: отчёты, проекты, фото, инструкции, портфолио, рекомендации',
          'Для profissional: описание функций, стаж, оборудование/ПО, процессы, ответственность',
          'Для escolar: тексты, расчёты, цифровые навыки, гражданская компетентность, примеры решения задач'
        ] },
        { kind: 'warning', text: 'Не покупайте «готовое RVCC» у посредников. Сертификация выдаётся только через сеть Centros Qualifica и проходит через validação/júri. Платные обещания «сделать 12.º ano без участия» — риск мошенничества.' }
      ]
    },
    {
      id: 'process',
      title: 'Как проходит процесс: portfólio, validação, júri',
      content: [
        { kind: 'paragraph', text: 'После inscrição центр назначает técnico de orientação, formadores и calendário. Срок зависит от уровня, вашей готовности и очереди: быстрые случаи занимают несколько месяцев, сложные — дольше. Официальной универсальной гарантии «за 30 дней» нет.' },
        { kind: 'checklist', items: [
          'Acolhimento — первичная регистрация и сбор данных',
          'Diagnóstico — оценка цели: RVCC escolar, profissional, formação или другой путь',
          'Encaminhamento — направление на конкретный процесс',
          'Reconhecimento — интервью и задания, где вы описываете опыт',
          'Portfólio reflexivo — сбор доказательств и текстов на португальском',
          'Validação — formadores сопоставляют доказательства с референциалом',
          'Formação complementar — короткое обучение, если не хватает компетенций',
          'Certificação — итоговое решение после sessão de júri',
          'Выдача certificado de qualificações или diploma/certificado соответствующего уровня'
        ] },
        { kind: 'paragraph', text: 'На júri обычно присутствуют специалисты центра и, для профессионального RVCC, представитель области. Это не школьный экзамен в классическом виде, а защита портфолио и проверка компетенций. Но отвечать придётся самостоятельно и по-португальски.' }
      ]
    },
    {
      id: 'after-certificate',
      title: 'После сертификата: где использовать и что не путать',
      content: [
        { kind: 'paragraph', text: 'Сертификация RVCC вносится в португальскую систему квалификаций и может использоваться для работы, IEFP, повышения категории, доступа к formação, завершения 9.º ano или 12.º ano. Для многих взрослых мигрантов это практичнее, чем годами восстанавливать школьные архивы в стране исхода.' },
        { kind: 'checklist', items: [
          'Для вакансий: указывайте “9.º ano obtido por processo RVCC” или “12.º ano obtido por RVCC”',
          'Для IEFP: приложите certificado de qualificações к inscrição или candidatura',
          'Для дальнейшего обучения: спросите Centro Qualifica о cursos EFA, CET, formações modulares',
          'Для universidade: заранее уточняйте условия доступа; RVCC secundário сам по себе не отменяет конкурсные правила ensino superior',
          'Для регулируемых профессий: проверяйте ordem profissional или entidade competente',
          'Для иммиграционных процедур: RVCC может помочь с интеграцией и занятостью, но не является отдельным основанием для ВНЖ',
          'Храните цифровую и бумажную копию certificado/diploma; при потере обращайтесь в центр, который вёл процесс'
        ] },
        { kind: 'warning', text: 'Если у вас уже есть полный признанный диплом, RVCC может быть не лучшим маршрутом. Сначала сравните: equivalência/reconhecimento иностранного образования, профессиональная сертификация через ordem/setor или RVCC. Centro Qualifica должен помочь выбрать путь, а не автоматически записывать всех на RVCC.' }
      ]
    }
  ],
  costs: [
    { label: 'Inscrição и сопровождение в Centro Qualifica', amountEUR: 0, note: 'В сети Centros Qualifica процедура для кандидата обычно бесплатна.' },
    { label: 'Перевод иностранных документов', amountEURMin: 20, amountEURMax: 60, note: 'Ориентир за страницу у переводчиков в Portugal; не всегда требуется, зависит от центра и языка документа.' },
    { label: 'Нотариальные копии или заверения', amountEURMin: 10, amountEURMax: 40, note: 'Опционально, если центр или работодатель просит заверенные копии.' }
  ],
  sources: [
    {
      title: 'Портал Qualifica — поиск Centros Qualifica и информация для взрослых',
      url: 'https://www.qualifica.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANQEP — официальное описание RVCC',
      url: 'https://www.anqep.gov.pt/np4/rvcc.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Catálogo Nacional de Qualificações — референциалы профессиональных квалификаций',
      url: 'https://catalogo.anqep.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
