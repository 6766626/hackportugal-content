export default {
  editorialVoice: 'hackportugal',
  id: 'nif-third-country',
  categoryId: 'documents_fiscal',
  title: 'Как получить NIF — граждане третьих стран',
  tldr: 'NIF (Número de Identificação Fiscal) — португальский налоговый номер, нужен для всего: аренды, банка, SIM, SNS. С 2022 (Ofício Circulado 90054/2022) сам факт получения NIF нерезидентом с адресом вне ЕС/ЕЭЗ не всегда требует фискального представителя — обязанность возникает при налоговой связи с Португалией (доход, недвижимость, авто, деятельность). Бесплатно в Finanças лично или 70–150 € через представителя онлайн (рыночный диапазон 2026).',
  audience: { citizenships: ['thirdCountry'] },
  tags: ['nif', 'документы', 'налоги', 'первые шаги'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'Что такое NIF и зачем он нужен',
      content: [
        { kind: 'paragraph', text: '9-значный налоговый номер. Выдаёт налоговая служба Autoridade Tributária e Aduaneira (AT). Без NIF нельзя: снять жильё по долгосрочному договору, открыть счёт в португальском банке, подписать трудовой договор, купить SIM по контракту, оформить SNS, купить авто или недвижимость.' },
        { kind: 'warning', text: 'Не путайте с NISS (социальный номер) — это отдельный номер в Segurança Social, он нужен для трудоустройства и пособий.' },
        { kind: 'paragraph', text: 'ВНЖ ≠ налоговое резидентство. Получение карты резидента само по себе не делает вас налоговым резидентом и не меняет ваш налоговый адрес в AT — это надо делать отдельно.' }
      ]
    },
    {
      id: 'variant-in-portugal',
      title: 'Вариант A. Лично в Finanças (если уже в Португалии)',
      audience: { statuses: ['visiting', 'newlyArrived', 'resident'] },
      content: [
        { kind: 'paragraph', text: 'Если вы лично идёте в Finanças, вы должны законно находиться в Португалии: по визе, по безвизовому режиму либо по действующему ВНЖ другой страны Шенгена (где это применимо).' },
        { kind: 'checklist', items: [
          'Паспорт (оригинал + копия)',
          'Для иностранного налогового адреса — подтверждение адреса из страны проживания (счёт, выписка банка не старше 3 месяцев). Португальский адрес лучше указывать только при реальном основании: договор аренды, Atestado de Residência, коммунальные счета. Отельный ваучер для налогового адреса обычно не подходит',
          'Если ваш налоговый адрес вне ЕС/ЕЭЗ и появляется налоговая связь с Португалией (доход/недвижимость/авто/деятельность) — по общему правилу нужно назначить fiscal representative с налоговым домицилем в Португалии. Альтернатива для многих физических лиц — подписка на электронные уведомления/цитирования в Portal das Finanças/Caixa Postal Eletrónica; для IVA/профессиональной деятельности и отдельных случаев представитель остаётся обязательным'
        ]},
        { kind: 'paragraph', text: 'Как попасть: сайт Finanças → "Agendamentos" → очный приём → выбрать услугу "Atribuição de Número de Contribuinte". В некоторых отделениях возможна живая очередь, но обслуживание без записи не гарантировано; лучше записываться или уточнять в конкретном serviço de finanças.' },
        { kind: 'timeline', text: 'Получите NIF в день визита (распечатают подтверждение с Número de Identificação Fiscal).' },
        { kind: 'cost', items: [{ label: 'Пошлина Finanças', amountEUR: 0 }] }
      ]
    },
    {
      id: 'variant-remote',
      title: 'Вариант B. Дистанционно через представителя',
      content: [
        { kind: 'paragraph', text: 'Если вы ещё не в Португалии или не хотите ехать и стоять в очереди — нанимаете фискального представителя (юрист/компания). Снять представителя можно после смены налогового адреса на португальский (обычно после переезда и оформления ВНЖ) — но именно через смену адреса в Portal das Finanças, а не автоматически при получении ВНЖ.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Выбрать представителя', content: [
            { kind: 'paragraph', text: 'Представитель — физическое или юридическое лицо с налоговым домицилем в Португалии. Варианты: португальский адвокат (Ordem dos Advogados — portal.oa.pt), solicitador, contabilista certificado либо компания/провайдер. Проверяйте договор, полномочия, цену продления и кто именно будет fiscal representative; специальной универсальной гос-сертификации «NIF-фирм» нет. Для деятельности с IVA могут применяться дополнительные требования.' }
          ]},
          { id: 's2', title: '2. Отправить документы', content: [
            { kind: 'checklist', items: ['Скан паспорта', 'Подтверждение адреса за последние 3 месяца (счёт, выписка банка)', 'Подписанная доверенность (procuração) — представитель обычно присылает шаблон'] }
          ]},
          { id: 's3', title: '3. Получить NIF на электронную почту', content: [
            { kind: 'timeline', text: 'Обычно 5–15 рабочих дней.' }
          ]}
        ]},
        { kind: 'cost', items: [{ label: 'Представитель', amountEURMin: 70, amountEURMax: 150, note: 'единоразово, часто включена 1 смена адреса' }] }
      ]
    },
    {
      id: 'after',
      title: 'После получения NIF',
      content: [
        { kind: 'checklist', items: [
          'Активировать пароль к Portal das Finanças (см. гайд "Получить пароль от Finanças")',
          'Проверить, что адрес корректно записан (важно для налоговой корреспонденции)',
          'Проверить статус резидент/нерезидент в AT и наличие фискального представителя — при необходимости обновить',
          'Сохранить подтверждение NIF (распечатку Número de Identificação Fiscal)'
        ]},
        { kind: 'warning', text: 'Если вы фактически стали налоговым резидентом Португалии (183+ дня или постоянное место проживания), отдельно смените налоговый адрес на португальский. Пока в AT указан иностранный адрес/статус нерезидента, португальский работодатель удерживает IRS как с нерезидента — для employment income обычно ставка 25% (Código do IRS art. 72; удержание у источника — по правилам retenção na fonte).' }
      ]
    }
  ],
  documents: [
    { title: 'Паспорт', note: 'оригинал + копия всех заполненных страниц' },
    { title: 'Подтверждение адреса', note: 'счёт ЖКХ / банковская выписка не старше 3 месяцев' },
    { title: 'Доверенность (procuração)', note: 'только для варианта с представителем' }
  ],
  costs: [
    { label: 'Госпошлина Finanças', amountEUR: 0 },
    { label: 'Через представителя (онлайн)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'Autoridade Tributária — Ofício Circulado n.º 90054/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/Paginas/Oficio_Circulado_90054_2022.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pedir NIF para pessoa singular', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-identificacao-fiscal-nif-para-pessoa-singular', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS — domicílio fiscal e tributação de não residentes', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}