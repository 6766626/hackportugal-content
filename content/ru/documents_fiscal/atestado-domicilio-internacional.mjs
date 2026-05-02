export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-domicilio-internacional',
  categoryId: 'documents_fiscal',
  title: 'Atestado de Transposição de Domicílio Fiscal Internacional: справка о переносе налогового резидентства в Португалию',
  tldr: 'Atestado de Transposição de Domicílio Fiscal Internacional — бесплатная справка Finanças о том, что ваш domicílio fiscal перенесён в Португалию. Её часто просят налоговые органы, банки и работодатели за рубежом, когда нужно доказать, что вы стали налоговым резидентом PT и больше не декларируете себя как резидент в США/UK/РФ/другой стране. Запрашивается онлайн через Portal das Finanças → e-Balcão; обычно нужен NIF, обновлённый адрес в PT и год, с которого требуется подтверждение.',
  tags: ['finanças', 'nif', 'резидентство', 'налоги'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за документ',
      content: [
        { kind: 'paragraph', text: 'Atestado de Transposição de Domicílio Fiscal Internacional — это подтверждение Autoridade Tributária e Aduaneira, что ваш налоговый адрес, domicílio fiscal, перенесён в Португалию. На практике справка используется как доказательство для иностранной стороны: налоговой службы, банка, брокера, работодателя, пенсионного фонда или консульства.' },
        { kind: 'paragraph', text: 'Документ запрашивается через Portal das Finanças, обычно в e-Balcão. Госпошлины нет: Finanças выдаёт справку бесплатно в электронном виде, если в системе уже отражён ваш португальский налоговый адрес.' },
        { kind: 'warning', text: 'Это не то же самое, что Certificado de Residência Fiscal para efeitos de Convenção para Evitar a Dupla Tributação. Если иностранная налоговая просит именно сертификат налогового резидентства по соглашению об избежании двойного налогообложения, нужен отдельный документ Finanças.' }
      ]
    },
    {
      id: 'when-needed',
      title: 'Когда она нужна',
      content: [
        { kind: 'checklist', items: [
          'Иностранная налоговая просит доказать, что вы перестали быть её налоговым резидентом и перенесли центр налоговых интересов в Португалию.',
          'Банк или брокер за рубежом запрашивает подтверждение смены налогового адреса и CRS/FATCA-статуса.',
          'Работодатель, пенсионный фонд или страховая компания в другой стране просит документ о новом налоговом домициле.',
          'Вы закрываете налоговое резидентство в стране выезда и прикладываете подтверждение из PT.',
          'Нужно показать дату/год, с которого Finanças считает ваш domicílio fiscal португальским.',
          'Вы оформляете внутренний compliance-пакет для иностранного банка вместе с NIF, comprovativo de morada и IRS-данными.'
        ] },
        { kind: 'paragraph', text: 'Для США справка сама по себе не отменяет обязанности по гражданскому налогообложению и FATCA. Для UK, РФ и других стран она тоже не заменяет местные правила утраты налогового резидентства. Это португальское подтверждение, которое иностранная сторона оценивает по своим законам.' }
      ]
    },
    {
      id: 'before-request',
      title: 'Проверьте, что Finanças видит вас резидентом',
      content: [
        { kind: 'paragraph', text: 'Справку имеет смысл запрашивать после того, как в Portal das Finanças ваш domicílio fiscal уже стоит в Португалии. Если в профиле всё ещё иностранный адрес или не подтверждён ВНЖ/адрес, e-Balcão может отказать или попросить сначала обновить cadastro.' },
        { kind: 'checklist', items: [
          'Есть NIF и доступ к Portal das Finanças: senha de acesso или Chave Móvel Digital (CMD).',
          'В разделе Dados Cadastrais указан адрес в Португалии, а не адрес страны выезда.',
          'Если вы не гражданин ЕС/ЕЭЗ, у Finanças обычно должен быть действующий ВНЖ, виза или другой документ законного пребывания, когда это запрашивают для обновления адреса.',
          'Есть подтверждение адреса: contrato de arrendamento, escritura, recibo de renda, счёт коммунальных услуг или atestado de residência от Junta de Freguesia.',
          'Вы понимаете год, с которого нужна справка: например, 2025 или 2026, а не просто «сейчас».',
          'Если налоговый представитель был назначен только потому, что вы жили вне ЕС/ЕЭЗ, проверьте, не нужно ли обновить его статус после переноса адреса в PT.'
        ] },
        { kind: 'warning', text: 'Налоговое резидентство по CIRS art. 16 обычно возникает, если вы провели в Португалии более 183 дней в любые 12 месяцев, начинающиеся или заканчивающиеся в соответствующем году, либо имели здесь жильё в условиях, предполагающих намерение сделать его habitual residence. Наличие NIF само по себе не делает вас налоговым резидентом.' }
      ]
    },
    {
      id: 'request-online',
      title: 'Как запросить через e-Balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'Откройте portaldasfinancas.gov.pt и войдите по NIF + senha de acesso или через CMD. Проверьте, что вы работаете в личном кабинете нужного NIF, а не представителя/супруга.' }
          ] },
          { id: 'open-ebalcao', title: '2. Создать обращение в e-Balcão', content: [
            { kind: 'paragraph', text: 'Перейдите в e-Balcão → Atendimento e-balcão → Registar nova questão. Названия категорий в интерфейсе Finanças периодически меняются; выбирайте тему, связанную с cadastro, domicílio fiscal, residência fiscal или certidões.' }
          ] },
          { id: 'write-request', title: '3. Написать короткий запрос на португальском', content: [
            { kind: 'paragraph', text: 'В тексте попросите: “Solicito a emissão de Atestado de Transposição de Domicílio Fiscal Internacional, comprovativo da transferência do meu domicílio fiscal para Portugal, para efeitos de apresentação junto de autoridade/entidade estrangeira.” Укажите год и страну, для которой нужен документ.' }
          ] },
          { id: 'attach', title: '4. Прикрепить документы, если есть риск запроса', content: [
            { kind: 'checklist', items: [
              'Паспорт или Cartão de Cidadão/ВНЖ, если Finanças может попросить идентификацию.',
              'Comprovativo de morada в Португалии.',
              'Скрин или PDF из иностранной налоговой/банка с требованием справки, если формулировка нестандартная.',
              'Доверенность, если запрос подаёт contabilista или представитель.',
              'Перевод не нужен для Finanças, но может понадобиться иностранной стороне после выдачи.'
            ] }
          ] },
          { id: 'download', title: '5. Получить ответ и скачать PDF', content: [
            { kind: 'paragraph', text: 'Ответ приходит в e-Balcão. Если документ готов, Finanças прикладывает PDF или даёт инструкцию, где его скачать. Если отказали, обычно причина — неактуальный адрес, отсутствие подтверждения резидентства или запрос не в той категории.' }
          ] }
        ] }
      ]
    },
    {
      id: 'wording-and-use',
      title: 'Как использовать за границей',
      content: [
        { kind: 'paragraph', text: 'Перед отправкой иностранной стороне проверьте, что в справке правильно указаны имя, NIF, адрес, дата/год переноса domicílio fiscal и формулировка о Portugal. Если нужна апостиль или заверенный перевод, это требование не Finanças, а принимающего органа.' },
        { kind: 'checklist', items: [
          'Для банка часто достаточно PDF из Finanças + перевод на английский.',
          'Для налоговой службы за рубежом может понадобиться sworn/certified translation.',
          'Для стран Гаагской конвенции иногда просят apostila; уточняйте заранее, потому что электронные налоговые документы не всегда апостилируются напрямую.',
          'Если требуют именно treaty residence certificate, запрашивайте Certificado de Residência Fiscal, а не atestado de transposição.',
          'Храните исходный PDF и подтверждение e-Balcão: это полезно при споре о дате запроса.',
          'Если страна выезда считает резидентство по дням пребывания, приложите также travel history, договор аренды в PT, recibos de renda, трудовой договор или доказательства центра жизненных интересов.'
        ] },
        { kind: 'warning', text: 'Не заявляйте иностранной налоговой, что справка автоматически прекращает старое резидентство. В 2026 каждая страна применяет свои тесты: дни, постоянное жильё, центр жизненных интересов, гражданство, domicile, tie-breaker по налоговому соглашению.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Частые проблемы и быстрые решения',
      content: [
        { kind: 'checklist', items: [
          'В Finanças всё ещё иностранный адрес — сначала обновите domicílio fiscal, затем повторите запрос.',
          'Нет доступа к Portal das Finanças — восстановите senha de acesso или подключите CMD; без доступа e-Balcão недоступен.',
          'Иностранная сторона просит “tax residency certificate” — уточните, нужен ли Certificado de Residência Fiscal, а не этот atestado.',
          'В справке нет нужной даты — ответьте в том же e-Balcão и попросите исправить/уточнить период.',
          'Документ нужен срочно — укажите deadline и приложите письмо иностранного органа, но Finanças не гарантирует ускорение.',
          'Нужна справка за прошлый год — укажите конкретный ano fiscal и будьте готовы подтвердить, что в тот период вы уже соответствовали критериям резидентства.',
          'Вы переехали в PT, но ещё не подали первую декларацию IRS — это не всегда блокирует справку, но Finanças может запросить дополнительные доказательства фактического проживания.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Выдача справки Finanças через e-Balcão', amountEUR: 0, note: 'Госпошлина не взимается.' },
    { label: 'Заверенный перевод для иностранного органа', amountEURMin: 25, amountEURMax: 80, note: 'Не требуется Finanças; зависит от языка, страны и переводчика.' },
    { label: 'Апостиль/нотариальные действия', amountEURMin: 0, amountEURMax: 60, note: 'Только если требует принимающая страна; применимость к электронному PDF нужно проверять отдельно.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças — e-Balcão и личный кабинет налогоплательщика',
      url: 'https://www.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — Domicílio fiscal и dados cadastrais',
      url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS — art. 16: residência fiscal em território português',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
