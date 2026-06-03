export default {
  editorialVoice: 'hackportugal',
  id: 'bairros-sustentaveis-fa',
  categoryId: 'daily_life',
  title: 'Bairros + Sustentáveis: какие кварталы включены и какие льготы дают',
  tldr: 'Bairros + Sustentáveis — официальный перечень приоритетных кварталов для энергоэффективности и улучшения жилья. Если ваш адрес попадает в такой bairro, для заявок Fundo Ambiental, включая E-LAR, обычно не нужно доказывать Tarifa Social de Energia: сам адрес даёт право на повышенный приоритет/допуск. Проверять нужно не «район на слух», а конкретную улицу/porta в списке Fundo Ambiental или Portal da Habitação; примеры: Cova da Moura, Quinta da Fonte, Porto Seixo.',
  tags: ['habitação', 'energia', 'bairro', 'fundoambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое Bairros + Sustentáveis',
      content: [
        { kind: 'paragraph', text: 'Bairros + Sustentáveis — не отдельная «скидочная карта», а статус территории. Государство отмечает кварталы с уязвимым жилищным фондом, энергетической бедностью и потребностью в ремонте/декарбонизации. После этого жители таких адресов получают упрощённый доступ к некоторым программам Fundo Ambiental и жилищным мерам.' },
        { kind: 'paragraph', text: 'Для экспата практический смысл простой: если вы арендуете или купили жильё в таком bairro, адрес может заменить требование Tarifa Social de Energia Elétrica в отдельных конкурсах Fundo Ambiental, например в E-LAR. То есть право возникает из местоположения жилья, а не из вашего дохода.' },
        { kind: 'warning', text: 'Статус относится к конкретной зоне/адресам, а не ко всему município или freguesia. «Живу рядом с Cova da Moura» или «это социальное жильё» недостаточно: система смотрит официальный список/географический периметр.' }
      ]
    },
    {
      id: 'included-neighbourhoods',
      title: 'Какие bairros включены',
      content: [
        { kind: 'paragraph', text: 'Полный перечень публикуется в материалах Fundo Ambiental и Portal da Habitação. В 2026 его нужно проверять по официальному списку, потому что для заявок важен не маркетинговый район, а точный адрес: município, freguesia, rua, número de polícia, иногда bloco/lote.' },
        { kind: 'checklist', items: [
          'Cova da Moura / Alto da Cova da Moura — Amadora',
          'Quinta da Fonte — Loures',
          'Porto Seixo / Bairro do Porto Seixo — район, фигурирующий в перечнях приоритетных bairros',
          'Другие bairros municipais или зоны социального жилья, включённые в официальный anexo/lista Fundo Ambiental',
          'Кварталы, выбранные через программы reabilitação urbana, energia и habitação, если они прямо указаны в списке',
          'Адреса внутри периметра bairro, даже если договор аренды оформлен на частного собственника',
          'Не включаются автоматически: вся freguesia, весь concelho, «старый центр» города или любая zona ARU без прямого указания',
          'Не включаются автоматически: жильё рядом с bairro, но за пределами официального perímetro'
        ] },
        { kind: 'paragraph', text: 'Если вы видите название своего района в новостях, всё равно проверяйте официальный PDF/таблицу. Для подачи заявки по E-LAR или другой мере Fundo Ambiental оператор будет сверять адрес, а не устное название bairro.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Какие льготы это даёт ⚡',
      content: [
        { kind: 'paragraph', text: 'Главная выгода — доступ к мерам энергетической эффективности для домохозяйств без необходимости быть получателем Tarifa Social. В 2026 это особенно важно для иностранцев: многие экспаты не проходят по социальному тарифу из-за дохода, статуса договора на электричество или недавнего переезда, но могут жить в приоритетном bairro.' },
        { kind: 'checklist', items: [
          'E-LAR: возможность подать заявку как residente em Bairro + Sustentável, без Tarifa Social de Energia Elétrica, если aviso программы это допускает',
          'Приоритет или отдельная категория в конкурсах Fundo Ambiental для замены неэффективного оборудования',
          'Поддержка электрификации быта: переход с газового оборудования на электрическое там, где это предусмотрено aviso',
          'Меры против энергетической бедности: отопление, горячая вода, бытовая техника, энергоэффективность жилья — в зависимости от открытого конкурса',
          'Возможность участия арендатора, если aviso разрешает и есть документы на проживание по адресу',
          'Не является автоматической выплатой: нужно подать candidatura, приложить документы и дождаться одобрения',
          'Не отменяет требования по счёту-фактуре, NIF, IBAN, comprovativo de morada и техническим условиям программы'
        ] },
        { kind: 'warning', text: 'Bairros + Sustentáveis не даёт универсальную скидку на аренду, IMI, IRS, воду или электричество. Это именно критерий доступа/приоритета для конкретных avisos Fundo Ambiental и связанных жилищно-энергетических программ.' }
      ]
    },
    {
      id: 'how-to-check-address',
      title: 'Как проверить свой адрес',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-official-list', title: '1. Найдите официальный список', content: [
            { kind: 'paragraph', text: 'Откройте сайт Fundo Ambiental и раздел конкретной программы, например E-LAR. Ищите anexos, lista de Bairros + Sustentáveis, FAQ или campo «Bairro + Sustentável» в форме candidatura.' }
          ] },
          { id: 'compare-address', title: '2. Сверьте адрес дословно', content: [
            { kind: 'checklist', items: [
              'Município',
              'Freguesia',
              'Название bairro',
              'Rua / avenida / praça',
              'Número de polícia',
              'Lote, bloco, cave, esquerdo/direito — если указано',
              'Código postal',
              'Имя собственника или contrato de arrendamento не заменяют адресную проверку'
            ] }
          ] },
          { id: 'ask-municipality', title: '3. Если адрес на границе — спросите município', content: [
            { kind: 'paragraph', text: 'Напишите в Câmara Municipal или Junta de Freguesia и попросите подтверждение, что адрес входит в perímetro do Bairro + Sustentável. Это полезно, если улица делится между включённой и невключённой зонами.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для заявки',
      content: [
        { kind: 'paragraph', text: 'Набор документов зависит от конкретного aviso Fundo Ambiental. Для E-LAR и похожих мер обычно готовьте подтверждение личности, адреса и права пользоваться жильём. У иностранцев чаще всего проблема не в NIF, а в том, что договор энергии или аренды оформлен на другого человека.' },
        { kind: 'checklist', items: [
          'NIF заявителя',
          'Documento de identificação: Cartão de Cidadão, ВНЖ или паспорт',
          'Comprovativo de morada: contrato de arrendamento, atestado de residência, счёт коммунальных услуг или справка от Câmara/Junta',
          'Доказательство проживания именно по адресу в Bairro + Sustentável',
          'IBAN на имя заявителя для выплаты, если программа возмещает расходы',
          'Fatura-recibo или orçamento от поставщика/установщика, если требуется',
          'Declaração do senhorio/autorização, если работы затрагивают недвижимость арендодателя',
          'Счёт за электричество, если мера связана с заменой оборудования или электрификацией',
          'Фотографии старого оборудования/места установки — если это указано в aviso',
          'Declaração de não dívida às Finanças e Segurança Social, если aviso требует'
        ] },
        { kind: 'warning', text: 'Если вы живёте без письменного договора аренды, подача становится сложнее. Atestado de residência помогает подтвердить адрес, но не всегда заменяет право на проведение работ в жилье.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки',
      content: [
        { kind: 'checklist', items: [
          'Считать, что весь Лиссабон/Порту/Amadora/Loures включён — нет, только конкретные bairros',
          'Подаваться по названию района без проверки улицы и номера дома',
          'Думать, что Tarifa Social всё равно обязательна — для жителей Bairro + Sustentável в ряде avisos это альтернативный критерий',
          'Покупать оборудование до открытия/одобрения конкурса, хотя aviso может требовать дату после подачи или после решения',
          'Оформлять fatura на другого человека: NIF в счёте должен совпадать с заявителем, если aviso не допускает исключений',
          'Игнорировать согласие арендодателя: для арендатора это критично при работах в квартире',
          'Путать Bairros + Sustentáveis с ARU, Porta 65, 1.º Direito или Bairro Saudável — это разные инструменты',
          'Не сохранять PDF, faturas, comprovativos и e-mails: Fundo Ambiental может запросить их при проверке'
        ] },
        { kind: 'paragraph', text: 'Самая безопасная схема: сначала проверить адрес в официальном списке, затем прочитать aviso конкретной программы, затем получить orçamento/fatura с правильным NIF и только потом платить.' }
      ]
    }
  ],
  costs: [
    { label: 'Проверка адреса в официальных списках', amountEUR: 0, note: 'Сайты Fundo Ambiental и Portal da Habitação бесплатны' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'Стоимость зависит от freguesia; иногда бесплатно для простого подтверждения адреса' },
    { label: 'Подача candidatura в Fundo Ambiental', amountEUR: 0, note: 'Госпошлины обычно нет; расходы возникают на документы, оборудование или установку' }
  ],
  sources: [
    {
      title: 'Fundo Ambiental — avisos, candidaturas и меры поддержки энергоэффективности',
      url: 'https://www.fundoambiental.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação — программы habitação, bairros и reabilitação',
      url: 'https://www.portaldahabitacao.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Plano de Recuperação e Resiliência — инвестиции в habitação и eficiência energética',
      url: 'https://recuperarportugal.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
