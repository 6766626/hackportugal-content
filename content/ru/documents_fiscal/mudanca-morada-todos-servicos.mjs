export default {
  editorialVoice: 'hackportugal',
  id: 'mudanca-morada-todos-servicos',
  categoryId: 'documents_fiscal',
  title: 'Смена адреса в Португалии: батч-изменение во всех сервисах',
  tldr: 'После переезда в Португалии адрес нужно обновить не только в Finanças. В 2026 главный онлайн-маршрут — gov.pt / ePortugal “Mudança de Morada”: он меняет morada fiscal и передаёт адрес в часть госорганов, но полноценно работает в основном для Cartão de Cidadão + CMD. Владельцам ВНЖ нужно отдельно обновить Finanças и уведомить AIMA в течение 60 дней. Не забудьте Segurança Social, SNS, банки, коммуналку, IMT для авто, страховки и доставки.',
  tags: ['morada', 'finanças', 'aima', 'адрес'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'mapa',
      title: 'Карта: где адрес меняется автоматически, а где вручную',
      content: [
        { kind: 'paragraph', text: 'В Португалии нет одного “магического” изменения адреса для всех частных и государственных сервисов. gov.pt / ePortugal “Mudar de Morada” — хороший старт, но его покрытие зависит от вашего документа и цифровой идентификации.' },
        { kind: 'checklist', items: [
          'Finanças / Autoridade Tributária: morada fiscal — критично для IRS, IMI, штрафов, писем и уведомлений',
          'AIMA: для держателей ВНЖ уведомление об изменении адреса обязательно в течение 60 дней',
          'Segurança Social: адрес для писем, пособий, взносов и NISS',
          'SNS / Centro de Saúde: адрес влияет на привязку к Centro de Saúde и семейному врачу',
          'Junta de Freguesia: новый atestado de residência, если нужен для школы, банка, AIMA, SNS или обмена водительских документов',
          'Банки и брокеры: Millennium, Caixa, ActivoBank, Santander, Revolut, Wise, Interactive Brokers и др. — KYC-адрес не всегда подтягивается из Finanças',
          'Коммунальные и телеком: EDP, Galp, MEO, NOS, Vodafone, Águas, condomínio',
          'IMT и авто: адрес в документах водителя/владельца, особенно если есть автомобиль, IUC, страховка, Via Verde',
          'Страховые: авто, дом, здоровье, responsabilidade civil',
          'Онлайн-магазины и лояльность: Worten, Continente, Pingo Doce, Amazon, CTT, курьерские профили'
        ] }
      ]
    },
    {
      id: 'govpt',
      title: '1. Попробуйте батч через gov.pt / ePortugal',
      content: [
        { kind: 'paragraph', text: 'Официальный сервис называется “Mudar de Morada” / “Change the address”. Он находится на ePortugal и gov.pt. Для граждан с Cartão de Cidadão адрес меняется онлайн через Chave Móvel Digital (CMD) или card reader + PIN от Cartão de Cidadão.' },
        { kind: 'checklist', items: [
          'Зайдите на ePortugal: услуга “Mudar de Morada”',
          'Авторизуйтесь через CMD или Cartão de Cidadão',
          'Укажите новый адрес: rua, número, andar, código postal, localidade',
          'Выберите entidades, которым нужно сообщить адрес, если сервис предлагает список',
          'Подтвердите запрос',
          'Дождитесь письма с кодом подтверждения на новый адрес, если процедура требует код',
          'Завершите подтверждение онлайн в срок, указанный в письме',
          'Сохраните comprovativo / comprovativo de alteração de morada в PDF'
        ] },
        { kind: 'warning', text: 'Для многих экспатов с título de residência, а не Cartão de Cidadão, батч-сервис ePortugal может быть недоступен или не закрывать все ведомства. В таком случае делайте “ручной батч”: Finanças онлайн, AIMA отдельно, затем Segurança Social, SNS, банки и поставщики.' }
      ]
    },
    {
      id: 'financas',
      title: '2. Обновите morada fiscal в Finanças',
      content: [
        { kind: 'paragraph', text: 'Morada fiscal — главный юридический адрес для налогов. На него завязаны IRS, IMI, IUC, уведомления Autoridade Tributária, штрафы и сроки ответа. Даже если письма AT уходят на старый адрес, это обычно не отменяет их последствий.' },
        { kind: 'substeps', items: [
          {
            id: 'financas-online',
            title: 'Через Portal das Finanças',
            content: [
              { kind: 'checklist', items: [
                'Зайдите на Portal das Finanças',
                'Авторизуйтесь по NIF + senha или через CMD',
                'Найдите “Alterar Morada” / “Dados Cadastrais”',
                'Введите новый адрес полностью по CTT-формату',
                'Проверьте código postal: 0000-000 + localidade',
                'Подтвердите изменение',
                'Скачайте comprovativo de morada fiscal'
              ] }
            ]
          },
          {
            id: 'financas-eportugal',
            title: 'Через ePortugal',
            content: [
              { kind: 'paragraph', text: 'Если вам доступен gov.pt “Mudar de Morada”, изменение может быть передано в Autoridade Tributária автоматически. После завершения всё равно зайдите в Portal das Finanças и проверьте, что morada fiscal действительно изменилась.' }
            ]
          }
        ] },
        { kind: 'warning', text: 'Если вы уехали из Португалии или меняете налоговое резидентство, это не просто “смена адреса”. Может понадобиться назначение representante fiscal и анализ статуса IRS-резидента. Не меняйте страну адреса в Finanças вслепую.' }
      ]
    },
    {
      id: 'aima',
      title: '3. AIMA: держателям ВНЖ — обязательно за 60 дней',
      content: [
        { kind: 'paragraph', text: 'Если у вас autorização de residência / ВНЖ, изменение адреса нужно сообщить AIMA в течение 60 дней. Это отдельная обязанность иностранца по Lei 23/2007 (статья 86). Замена адреса в Finanças сама по себе не гарантирует, что AIMA получила и внесла новый адрес.' },
        { kind: 'checklist', items: [
          'Подготовьте скан ВНЖ с двух сторон',
          'Паспорт',
          'NIF',
          'Новый comprovativo de morada: договор аренды, счёт коммуналки, declaração do senhorio или atestado de residência',
          'Comprovativo de morada fiscal из Finanças, если есть',
          'Сообщите AIMA через доступный официальный канал: portal / contact form / atendimento, если требуется запись',
          'Сохраните доказательство отправки: PDF, email, número de processo, screenshot',
          'Если AIMA просит личный визит — возьмите оригиналы документов'
        ] },
        { kind: 'warning', text: 'Не ждите продления ВНЖ, чтобы сообщить адрес. При письмах, convocatórias и решениях AIMA старый адрес может создать реальные проблемы: пропущенный срок, отсутствие уведомления, лишняя запись или задержка продления.' }
      ]
    },
    {
      id: 'public-services',
      title: '4. Остальные госуслуги: Segurança Social, SNS, Junta, IMT',
      content: [
        { kind: 'paragraph', text: 'После Finanças и AIMA пройдитесь по государственным сервисам. Это занимает 1–2 часа, но экономит недели переписки, если позже понадобится пособие, врач, школа, авто или подтверждение адреса.' },
        { kind: 'checklist', items: [
          'Segurança Social Direta: обновите morada в профиле, особенно если есть contrato de trabalho, recibos verdes, пособия или дети',
          'SNS / Centro de Saúde: сообщите новый адрес; при переезде в другой район может поменяться Centro de Saúde',
          'Junta de Freguesia: запросите новый atestado de residência, если нужен официальный адрес для банка, школы, SNS, AIMA или водительских процедур',
          'Câmara Municipal: проверьте локальные услуги — estacionamento residente, EMEL, dísticos, школьный транспорт, муниципальные льготы',
          'IMT: если есть carta de condução portuguesa, автомобиль, регистрация владельца или нужны уведомления по транспорту',
          'Autoridade Tributária для авто: проверьте IUC и адрес уведомлений в Finanças',
          'Via Verde / Brisa / парковочные сервисы: обновите адрес счёта и автомобиля',
          'Школа, университет, creche, ATL: адрес влияет на район, квоты и коммуникацию'
        ] },
        { kind: 'warning', text: 'Atestado de residência от Junta de Freguesia — это не автоматическая смена адреса в Finanças или AIMA. Это только подтверждение фактического проживания по адресу, которое часто используют как доказательство.' }
      ]
    },
    {
      id: 'private-services',
      title: '5. Частные сервисы: банки, коммуналка, доставка',
      content: [
        { kind: 'paragraph', text: 'Частные компании почти никогда не получают ваш новый адрес из gov.pt автоматически. Особенно важно обновить адрес там, где есть KYC, счета, карты, штрафы, доставка SIM-карт, страховые документы и возвраты.' },
        { kind: 'checklist', items: [
          'Банки: Millennium, Caixa Geral de Depósitos, ActivoBank, Novo Banco, Santander, BPI — загрузите comprovativo de morada',
          'Финтех: Revolut, Wise, N26, брокеры — проверьте residential address и tax residence',
          'Электричество и газ: EDP, Galp, Iberdrola, Endesa — адрес договора и адрес корреспонденции могут быть разными',
          'Вода: Águas do município / SMAS — закройте старый договор или смените titularidade',
          'Интернет и мобильная связь: MEO, NOS, Vodafone, NOWO',
          'Страховки: auto, casa, saúde; по авто адрес может влиять на риск и цену',
          'Работодатель или accountant: адрес в payroll, IRS, recibos verdes и invoices',
          'CTT: при необходимости оформите reexpedição de correspondência со старого адреса на новый',
          'Онлайн-магазины: Worten, Continente, Pingo Doce, Amazon, IKEA, курьеры DHL/DPD/CTT Expresso',
          'Assinaturas: ginásio, escolas, clubes, médicos privados, ветеринар, подписки'
        ] },
        { kind: 'warning', text: 'Перед выездом со старого жилья сфотографируйте счётчики воды, электричества и газа, закройте или перенесите contratos и сохраните leitura final. Иначе можно платить за потребление следующего жильца.' }
      ]
    }
  ],
  costs: [
    { label: 'Смена адреса через ePortugal / gov.pt', amountEUR: 0, note: 'Обычно бесплатно; нужна CMD или Cartão de Cidadão/card reader, если процедура доступна' },
    { label: 'Comprovativo de morada fiscal в Finanças', amountEUR: 0, note: 'Скачивается онлайн бесплатно' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'Тариф зависит от Junta; в некоторых freguesias бесплатно, часто 5–15 €' },
    { label: 'Reexpedição de correspondência CTT', amountEURMin: 20, amountEURMax: 80, note: 'Зависит от срока, направления и типа услуги; проверяйте актуальный тариф CTT' }
  ],
  sources: [
    {
      title: 'ePortugal: смена адреса / Mudar de Morada',
      url: 'https://www.gov.pt/servicos/alterar-a-morada-em-varias-entidades-publicas-e-privadas',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: портал государственных услуг Португалии',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 23/2007 (ст. 86): правовой режим въезда, пребывания и выезда иностранцев, обязанность сообщать адрес за 60 дней',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34554775',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: изменение налогового адреса',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Morada/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
