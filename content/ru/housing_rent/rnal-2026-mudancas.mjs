export default {
  editorialVoice: 'hackportugal',
  id: 'rnal-2026-mudancas',
  categoryId: 'housing_rent',
  title: 'RNAL — Registo Nacional de Alojamento Local: изменения 2026',
  tldr: 'В 2026 AL снова регулируется в основном через DL 128/2014 с изменениями DL 76/2024: национальная «заморозка» новых apartamentos и автоматическое истечение регистраций из Mais Habitação отменены, но Câmara Municipal может вводить zonas de contenção и лимиты. Write: "Любой AL обязан иметь действительный RNAL-номер и указывать его в объявлениях. Отдельно, при размещении иностранных гостей, действуют обязанности по boletins de alojamento через соответствующую систему безопасности/AIMA; налоговые обязанности выполняются через Finanças." Remove "MARGEM" unless you explain exactly what system you mean and cite an official source. За нелегальный AL штраф: физлица до 4 000 €, компании 25 000–40 000 €. Доход обычно идёт в IRS categoria B.',
  tags: ['rnal', 'al', 'аренда', 'irs'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-changed-2026',
      title: 'Что изменилось к 2026',
      content: [
        { kind: 'paragraph', text: 'Alojamento Local — краткосрочное размещение туристов: apartamento, moradia, quartos, estabelecimentos de hospedagem/hostel. Регистрация делается в Registo Nacional de Alojamento Local — RNAL, технически через Balcão do Empreendedor/SIBA и портал Turismo de Portugal.' },
        { kind: 'paragraph', text: 'К апрелю 2026 ключевая реальность такая: часть ограничений Mais Habitação из Lei 56/2023 отменена DL 76/2024. Больше нет общей национальной приостановки новых регистраций AL в apartamentos и quartos в «напряжённых» зонах и нет автоматического пересмотра всех старых лицензий по схеме 2030 года.' },
        { kind: 'warning', text: 'Отмена национальной заморозки не означает «можно везде». Câmara Municipal может принять свой regulamento municipal, создать zona de contenção или zona de crescimento sustentável, отказать в новой регистрации, ограничить передачу номера или ввести дополнительные требования по району.' }
      ]
    },
    {
      id: 'before-register',
      title: 'Проверьте объект до подачи',
      content: [
        { kind: 'checklist', items: [
          'Адрес объекта и freguesia: проверьте на сайте Câmara Municipal, нет ли zona de contenção или локального моратория.',
          'Тип AL: apartamento, moradia, quartos, estabelecimento de hospedagem или hostel — от этого зависят требования.',
          'Право использовать объект: собственность, договор аренды или договор эксплуатации должны прямо позволять Alojamento Local.',
          'Если вы арендатор, нужен письменный договор с locador/senhorio, разрешающий AL; обычный contrato de arrendamento для жилья сам по себе не даёт права сдавать туристам.',
          'Add: "Для apartamento в prédio em propriedade horizontal проверьте título constitutivo и regulamento do condomínio: если они запрещают AL/uses incompatible with AL, регистрация может быть оспорена. Даже после регистрации assembleia de condóminos может, в предусмотренных законом случаях, pedir ao presidente da Câmara o cancelamento do registo, especially for repeated nuisance or disturbance."',
          'Segurança: огнетушитель, аптечка, аварийная информация, правила эвакуации и контакты 112.',
          'Livro de reclamações físico и eletrónico: для AL обязателен доступ к книге жалоб.',
          'Seguro de responsabilidade civil: обязателен для эксплуатации AL; отсутствие страховки может привести к отмене регистрации.',
          'NIF и atividade aberta в Finanças: чаще всего IRS categoria B с CAE/atividade для alojamento mobilado para turistas.'
        ] }
      ]
    },
    {
      id: 'register-rnal',
      title: 'Как получить RNAL-номер',
      content: [
        { kind: 'paragraph', text: 'Регистрация AL — это comunicação prévia com prazo в Câmara Municipal через Balcão do Empreendedor/SIBA. Write: "Регистрация подаётся как comunicação prévia com prazo через Balcão do Empreendedor. Номер/запись RNAL не означает, что можно сразу принимать гостей: нужно дождаться истечения применимого срока без oposição da Câmara, если муниципальные правила не требуют иного; Câmara может проверять документы и проводить vistoria."' },
        { kind: 'checklist', items: [
          'Зайдите через ePortugal/Balcão do Empreendedor или канал, указанный Câmara Municipal.',
          'Укажите titular da exploração: физлицо или компания, NIF/NIPC, адрес, контакты.',
          'Укажите modalidade AL и capacidade: число quartos, camas и utentes.',
          'Приложите caderneta predial urbana или certidão predial, если требуется.',
          'Приложите документ, легитимирующий эксплуатацию: escritura, contrato de arrendamento, contrato de exploração или autorização do proprietário.',
          'Подайте declaração de cumprimento dos requisitos legais: безопасность, higiene, seguro, livro de reclamações.',
          'После получения номера проверьте, что объект виден на rnal.turismodeportugal.pt.',
          'Разместите RNAL-номер во всех объявлениях: Airbnb, Booking, собственный сайт, Google, соцсети.'
        ] },
        { kind: 'warning', text: 'SIBA/MARGEM/RNAL в 2026 продолжают использоваться для регистрации и актуализации данных. Если меняется titular, адрес, capacity, modalidade, название или право пользования объектом — обновляйте запись, а не просто меняйте объявление на платформе.' }
      ]
    },
    {
      id: 'operation-compliance',
      title: 'Эксплуатация: что проверяют ASAE и Câmara',
      content: [
        { kind: 'paragraph', text: 'Проверки AL идут не только «на двери». ASAE, Câmara Municipal и Turismo de Portugal сопоставляют объявления, RNAL-номер, адрес, фотографии, отзывы, жалобы соседей и книгу жалоб. Операции ASAE Tour регулярно нацелены на нелегальные туристические размещения.' },
        { kind: 'checklist', items: [
          'RNAL-номер указан в каждом объявлении и совпадает с фактическим объектом.',
          'Название, адрес, capacity и тип объекта совпадают с RNAL.',
          'Гостям выдаётся informação ao utente: правила дома, контакты, emergency 112, жалобы.',
          'Есть livro de reclamações eletrónico и доступ к физической книге, если применимо.',
          'Есть действующий seguro de responsabilidade civil.',
          'Соблюдаются quiet hours, правила lixo, condomínio и муниципальные ограничения.',
          'Иностранные гости передаются в систему отчётности для alojamento turístico, если применимо по действующим правилам безопасности.',
          'Платежи проходят через банковский счёт/платформу, а доходы отражаются в Finanças.',
          'Если объектом управляет компания-оператор, договор с собственником покрывает AL, комиссии, ответственность, налоги и расторжение.'
        ] },
        { kind: 'warning', text: 'Нельзя использовать чужой RNAL-номер, номер соседней квартиры или старую регистрацию после смены объекта. Для инспекции это выглядит как exploração não registada.' }
      ]
    },
    {
      id: 'fines-and-tax',
      title: 'Штрафы и IRS в 2026',
      content: [
        { kind: 'paragraph', text: 'Separate them: "Exploração de AL sem registo válido é contraordenação muito grave: pessoas singulares 2 500–4 000 €, pessoas coletivas 25 000–40 000 €. Falhas de publicidade/identificação, como omitir o número de registo no anúncio, também são sancionáveis, mas devem ser tratadas separadamente conforme o artigo de contraordenações aplicável." Дополнительно возможны закрытие объекта, отмена регистрации и санкции от Câmara.' },
        { kind: 'paragraph', text: 'Налогово AL обычно считается предпринимательским доходом IRS categoria B, а не обычной долгосрочной арендой categoria F. В regime simplificado налогооблагаемая база зависит от вида AL: для apartamentos/moradias часто применяется коэффициент 0,35 к валовой выручке; для некоторых hospedagem — иной коэффициент. При больших расходах может быть выгодна contabilidade organizada.' },
        { kind: 'checklist', items: [
          'Откройте atividade в Finanças до начала приёма гостей.',
          'Выставляйте faturas-recibos или используйте сертифицированную систему, если требуется.',
          'Проверьте IVA: малый бизнес может применять освобождение art. 53 CIVA при обороте до 15 000 €, но туристические услуги и платформы требуют отдельной проверки.',
          'Комиссии Airbnb/Booking не отменяют обязанность декларировать полную выручку.',
          'Если вы нерезидент Portugal tax resident, проверьте retenção na fonte, соглашение об избежании двойного налогообложения и представителя.',
          'Муниципалитет может взимать taxa turística: например, в Lisboa и Porto она собирается с гостя и декларируется отдельно.',
          'Если собственник просто сдаёт объект оператору AL по долгосрочному договору, у собственника может быть IRS categoria F, а у оператора — categoria B/IRC.'
        ] },
        { kind: 'warning', text: 'Не путайте RNAL с налоговой регистрацией. Номер 12345/AL легализует туристическую эксплуатацию, но не заменяет atividade в Finanças, IVA-анализ, Social Security и IRS/IRC-декларации.' }
      ]
    },
    {
      id: 'practical-decision',
      title: 'Практическое решение для экспата',
      content: [
        { kind: 'substeps', items: [
          { id: 'owner', title: 'Если вы собственник', content: [
            { kind: 'paragraph', text: 'Сначала проверьте Câmara Municipal и condomínio, затем подавайте comunicação prévia. Не покупайте квартиру «под Airbnb», пока не проверили зону, протоколы condomínio и возможность передачи/новой регистрации AL.' }
          ] },
          { id: 'tenant', title: 'Если вы арендатор', content: [
            { kind: 'paragraph', text: 'Получите прямое письменное разрешение senhorio на Alojamento Local. Без него регистрация может быть оспорена, договор аренды расторгнут, а доходы и штрафы останутся на вас.' }
          ] },
          { id: 'manager', title: 'Если вы управляющий объектами', content: [
            { kind: 'paragraph', text: 'Договор с собственником должен описывать titular RNAL, право подписи, страхование, livro de reclamações, налоги, комиссии платформ, доступ для инспекций и ответственность за штрафы.' }
          ] }
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Подача RNAL через Balcão do Empreendedor', amountEUR: 0, note: 'Государственная регистрация обычно без пошлины Turismo de Portugal; отдельные муниципальные сборы зависят от Câmara Municipal.' },
    { label: 'Штраф за эксплуатацию AL без регистрации — физлицо', amountEURMin: 2500, amountEURMax: 4000, note: 'Contraordenação muito grave по режиму AL.' },
    { label: 'Штраф за эксплуатацию AL без регистрации — компания', amountEURMin: 25000, amountEURMax: 40000, note: 'Риск для Lda/операторов и профессиональных управляющих.' },
    { label: 'Seguro de responsabilidade civil', amountEURMin: 50, amountEURMax: 200, note: 'Ориентир в год для небольшого объекта; зависит от capacity, insurer и покрытия.' }
  ],
  sources: [
    { title: 'Turismo de Portugal — информация и сервисы Alojamento Local', url: 'https://www.turismodeportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'RNAL — Registo Nacional de Alojamento Local', url: 'https://rnal.turismodeportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 128/2014 — regime jurídico da exploração dos estabelecimentos de alojamento local', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2014-70686104', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — изменения режима Alojamento Local после Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-895143934', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
