export default {
  editorialVoice: 'hackportugal',
  id: 'advogado-consulta-gratuita',
  categoryId: 'emergency_rights',
  title: 'Бесплатная юридическая консультация: Junta de Freguesia + Ordem dos Advogados',
  tldr: 'В Португалии есть 3 практичных бесплатных маршрута: приём юриста/адвоката в вашей Junta de Freguesia, специализированные кабинеты для мигрантов и семей вроде GIAAP/структур CIG, и Apoio Judiciário по Lei 34/2004 — если доходы низкие, государство оплачивает адвоката, судебные пошлины или их рассрочку. Консультации в Junta обычно 1 раз в неделю/месяц по записи, не везде. Для суда нужен не “совет”, а официальный запрос через Segurança Social; пороги рассчитывают исходя из IAS 537,13 € (2026).',
  tags: ['адвокат', 'junta', 'apoiojudiciário', 'мигранты'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-exists',
      title: 'Какие бесплатные варианты реально работают',
      content: [
        { kind: 'paragraph', text: '“Бесплатная юридическая консультация” в Португалии — это не один сервис, а несколько разных каналов. Важно выбрать правильный: быстрый совет по бытовой проблеме, специализированная помощь для мигрантов/семьи/насилия или полноценный адвокат для суда.' },
        { kind: 'checklist', items: [
          'Junta de Freguesia — местный приходской совет; во многих Juntas есть бесплатный приём юриста или advogado по записи.',
          'Câmara Municipal — в некоторых муниципалитетах есть Gabinete Jurídico, Gabinete de Apoio ao Munícipe или мигрантский кабинет.',
          'GIAAP / Gabinetes de Informação, Atendimento e Apoio — консультации и направление по семейным, социальным и миграционным вопросам; наличие зависит от города и партнёрской сети.',
          'CIG — Comissão para a Cidadania e a Igualdade de Género; полезно при домашнем насилии, дискриминации, гендерном насилии, семейных кризисах.',
          'Ordem dos Advogados — участвует в системе назначения адвокатов по Apoio Judiciário и публикует информацию о доступе к праву.',
          'Apoio Judiciário — официальный механизм по Lei 34/2004: оплата адвоката, освобождение от custas judiciais или рассрочка для людей с недостаточными средствами.'
        ] },
        { kind: 'warning', text: 'Приём в Junta — это обычно первичная консультация. Юрист может объяснить права, проверить письмо, подсказать шаги, но не обязан вести ваше дело в суде, писать процессуальные документы или представлять вас перед AIMA, Tribunal, ACT или Finanças.' }
      ]
    },
    {
      id: 'junta-route',
      title: 'Маршрут 1: записаться в Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'Начинайте с Junta de Freguesia по адресу проживания. У многих Juntas консультации проходят раз в неделю или раз в месяц, часто вечером, по предварительной записи. Услуга может называться consulta jurídica gratuita, apoio jurídico, gabinete jurídico или atendimento jurídico.' },
        { kind: 'checklist', items: [
          'Найдите сайт вашей Junta de Freguesia или позвоните в secretaria.',
          'Спросите: “Têm consulta jurídica gratuita? Como posso marcar?”',
          'Уточните язык: португальский почти всегда; английский зависит от конкретного юриста.',
          'Опишите тему коротко: аренда, трудовой договор, долг, развод, ВНЖ, штраф, потребительский спор.',
          'Уточните, принимают ли нерезидентов прихода: некоторые Juntas помогают только зарегистрированным жителям.',
          'Попросите e-mail для отправки документов заранее, если консультация короткая.',
          'Если мест в вашей Junta нет, спросите про Câmara Municipal или соседние serviços sociais.'
        ] },
        { kind: 'paragraph', text: 'На встречу берите документы по делу: contrato de arrendamento, recibos, письма от senhorio, AIMA, Finanças, ACT, tribunal, emails, screenshots, NIF, паспорт/ВНЖ, comprovativo de morada. Чем меньше “истории словами”, тем полезнее консультация.' },
        { kind: 'warning', text: 'Не тяните со сроками. В Португалии многие ответы имеют короткие дедлайны: 10 дней, 15 дней, 30 дней. Бесплатная очередь в Junta не приостанавливает срок для жалобы, oposição, recurso или ответа на carta registada.' }
      ]
    },
    {
      id: 'migrant-family-help',
      title: 'Маршрут 2: мигранты, семья, насилие, дискриминация',
      content: [
        { kind: 'paragraph', text: 'Если проблема связана с семейным насилием, угрозами, разводом, детьми, дискриминацией, торговлей людьми или уязвимым положением, не ограничивайтесь общей консультацией в Junta. В таких случаях работают специализированные сети поддержки, включая структуры, связанные с CIG, муниципалитетами и НКО.' },
        { kind: 'checklist', items: [
          'При домашнем насилии звоните 112 при угрозе сейчас.',
          'Linha Nacional de Emergência Social: 144 — социальная экстренная помощь.',
          'Serviço de Informação às Vítimas de Violência Doméstica: 800 202 148 — бесплатная линия CIG, работает круглосуточно.',
          'SMS для жертв домашнего насилия: 3060, если говорить опасно.',
          'Попросите encaminhamento para apoio jurídico и apoio psicológico.',
          'Сохраняйте доказательства: mensagens, e-mails, fotos, relatórios médicos, queixa na PSP/GNR.',
          'Если есть дети, уточните меры защиты и regulação das responsabilidades parentais.',
          'Если вы мигрант без устойчивого статуса, всё равно обращайтесь: помощь жертвам насилия не должна зависеть от ВНЖ.'
        ] },
        { kind: 'paragraph', text: 'GIAAP и похожие кабинеты могут называться по-разному в зависимости от муниципалитета. Ищите на сайте Câmara Municipal слова “migrantes”, “igualdade”, “família”, “apoio jurídico”, “vítimas”. Они часто не ведут судебное дело, но помогают понять маршрут и направляют к адвокату, Segurança Social, PSP/GNR, CPCJ или Tribunal.' }
      ]
    },
    {
      id: 'apoio-judiciario',
      title: 'Маршрут 3: Apoio Judiciário, если нужен адвокат для суда',
      content: [
        { kind: 'paragraph', text: 'Apoio Judiciário — это официальная система доступа к праву и судам по Lei 34/2004. Она нужна, когда без адвоката не обойтись: суд, уголовное дело, семейное дело, иск, защита от иска, трудовой спор в суде, execução, insolvência. Решение принимает Segurança Social, а адвоката назначает Ordem dos Advogados.' },
        { kind: 'checklist', items: [
          'Подайте pedido de proteção jurídica в Segurança Social: онлайн через Segurança Social Direta или лично в serviço de atendimento.',
          'Укажите форму помощи: nomeação e pagamento da compensação de patrono, dispensa de taxa de justiça e demais encargos, pagamento faseado или consulta jurídica.',
          'Приложите документы о доходах, составе домохозяйства, аренде/ипотеке, счетах, безработице, пособиях, имуществе.',
          'В 2026 расчёты привязаны к IAS 537,13 €; Segurança Social смотрит не только зарплату, но и имущество/банковские остатки/состав семьи.',
          'Если заявление одобрено, Ordem dos Advogados назначает patrono или defensor.',
          'Если отказали, можно оспорить решение в установленный срок; не игнорируйте carta da Segurança Social.',
          'Если у вас срочный судебный срок, подавайте Apoio Judiciário немедленно и сохраняйте comprovativo de entrega.'
        ] },
        { kind: 'warning', text: 'Apoio Judiciário не означает, что “любой адвокат бесплатно”. Нельзя просто выбрать дорогого частного advogado и попросить государство оплатить счёт. В стандартном режиме адвоката назначает система через Ordem dos Advogados.' }
      ]
    },
    {
      id: 'how-to-prepare',
      title: 'Как подготовиться, чтобы консультация не прошла впустую',
      content: [
        { kind: 'paragraph', text: 'Бесплатные слоты короткие: часто 15–30 минут. Ваша задача — принести факты, даты и документы. Юрист не сможет помочь, если история начинается с “всё сложно” и без бумаг.' },
        { kind: 'checklist', items: [
          'Сделайте хронологию на 1 страницу: дата — событие — документ.',
          'Сформулируйте 3 вопроса: “что делать?”, “какой срок?”, “куда подавать?”.',
          'Принесите оригиналы и копии документов.',
          'Возьмите NIF, паспорт, ВНЖ или визу, comprovativo de morada.',
          'Если письмо пришло заказным, сохраните envelope и aviso de receção.',
          'Для аренды: contrato, recibos de renda, caução, переписка с senhorio, фотографии дефектов.',
          'Для работы: contrato, recibos de vencimento, horário, mensagens, despedimento, данные работодателя.',
          'Для миграционных вопросов: comprovativo do pedido AIMA, recibos, email AIMA, título/visa, entry stamp.',
          'Если нужен переводчик, возьмите человека, которому доверяете; не полагайтесь на автоматический перевод сложных юридических терминов.'
        ] },
        { kind: 'warning', text: 'Не подписывайте confissão de dívida, acordo de revogação, denúncia de contrato, acordo parental или любой документ “просто чтобы закрыть вопрос”, пока юрист не объяснит последствия. В Португалии подписанный acordo часто сложно откатить.' }
      ]
    },
    {
      id: 'when-pay',
      title: 'Когда бесплатного канала недостаточно',
      content: [
        { kind: 'paragraph', text: 'Бесплатные консультации хороши для диагностики и направления. Но есть ситуации, где нужен частный адвокат быстро, особенно если доходы выше порогов Apoio Judiciário или дело коммерчески важное.' },
        { kind: 'checklist', items: [
          'Получили citação от Tribunal и срок уже идёт.',
          'Есть despejo, injunção, execução или penhora.',
          'Работодатель уволил, не платит зарплату или требует подписать acordo.',
          'AIMA отказала или есть риск потери срока на resposta/recurso.',
          'Сумма спора значительная: депозит, покупка недвижимости, бизнес, налоговая проверка.',
          'Нужно письмо от адвоката на português jurídico.',
          'Вы не говорите по-португальски, а дело требует точных формулировок.'
        ] },
        { kind: 'paragraph', text: 'Попросите у адвоката письменную смету гонорара: consulta, análise documental, carta, processo judicial, IVA.\n\nВ Португалии юридические услуги обычно облагаются IVA 23%, если не применимо освобождение. Для первой платной консультации нормальный диапазон на рынке — примерно 60–150 €, но цены свободные.' }
      ]
    }
  ],
  costs: [
    { label: 'Консультация в Junta de Freguesia', amountEUR: 0, note: 'Обычно бесплатно, но доступность и расписание зависят от конкретной Junta.' },
    { label: 'Линия CIG 800 202 148', amountEUR: 0, note: 'Бесплатная круглосуточная линия для жертв домашнего насилия.' },
    { label: 'Apoio Judiciário', amountEUR: 0, note: 'Может покрыть адвоката и судебные расходы полностью или дать рассрочку; зависит от проверки средств Segurança Social.' },
    { label: 'Платная первичная консультация advogado', amountEURMin: 60, amountEURMax: 150, note: 'Ориентир по рынку; адвокаты сами устанавливают гонорары, часто плюс IVA 23%.' }
  ],
  sources: [
    { title: 'Ordem dos Advogados: доступ к праву и apoio judiciário', url: 'https://portal.oa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG: поддержка жертв домашнего насилия и контакты помощи', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social: proteção jurídica / apoio judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 34/2004: regime de acesso ao direito e aos tribunais', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34509975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
