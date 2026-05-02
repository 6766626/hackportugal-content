export default {
  editorialVoice: 'hackportugal',
  id: 'agua-municipal-ligar-contador',
  categoryId: 'daily_life',
  title: 'Подключение воды и счётчика: EPAL Lisboa, Águas do Porto и муниципальные операторы',
  tldr: 'Вода в Португалии подключается не через единую компанию, а через муниципального оператора: EPAL в Lisboa, Águas do Porto в Porto, SIMAR в Loures/Odivelas, SMAS/Águas в других Câmara Municipal. Обычно нужны NIF, документ личности, договор аренды/купли или autorização do proprietário, IBAN для débito direto и показания счётчика. Заявка часто онлайн. Разовый депозит/garantia встречается около 30–80 €, ориентир — ~60 €, точная сумма зависит от тарифа оператора и типа договора.',
  tags: ['água', 'epal', 'счётчик', 'жкх'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'find-operator',
      title: '1. Найдите своего оператора воды',
      content: [
        { kind: 'paragraph', text: 'В Португалии водоснабжение — муниципальная услуга. Нельзя выбрать “поставщика” как интернет или мобильную связь: договор заключается с оператором, который обслуживает конкретный адрес.' },
        { kind: 'checklist', items: [
          'Lisboa: EPAL — Empresa Portuguesa das Águas Livres',
          'Porto: Águas e Energia do Porto / Águas do Porto',
          'Loures и Odivelas: SIMAR Loures e Odivelas',
          'Cascais: Águas de Cascais',
          'Sintra: SMAS de Sintra',
          'Oeiras и Amadora: SIMAS Oeiras e Amadora',
          'Almada: SMAS de Almada',
          'В маленьких городах ищите “Águas”, “SMAS” или “Serviços Municipalizados” на сайте Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'Если вы снимаете жильё, сначала спросите у landlord/агента: вода уже активна и надо только сменить titular, или счётчик отключён и нужен новый contrato de fornecimento.' }
      ]
    },
    {
      id: 'documents',
      title: '2. Подготовьте документы',
      content: [
        { kind: 'paragraph', text: 'Набор почти одинаковый у EPAL, Águas do Porto и SMAS, но муниципальные операторы могут просить дополнительные формы. Для иностранца ВНЖ не всегда обязателен: часто достаточно паспорта/Cartão de Cidadão EU + NIF.' },
        { kind: 'checklist', items: [
          'NIF',
          'Паспорт, Cartão de Cidadão, ВНЖ или другой документ личности',
          'Договор аренды, escritura/caderneta predial, contrato-promessa или autorização do proprietário',
          'Полный адрес: rua, número, andar, código postal, freguesia',
          'Данные счётчика: número do contador и текущая leitura, если счётчик уже стоит',
          'Фото счётчика крупно: номер + показания',
          'IBAN португальского или SEPA-счёта для débito direto, если хотите автосписание',
          'Email и португальский номер телефона',
          'Иногда: licença de utilização или artigo matricial для нового/нестандартного объекта'
        ] },
        { kind: 'warning', text: 'Не подписывайте акт приёма квартиры без фото показаний воды, электричества и газа. Старый долг обычно привязан к прежнему titular, но спор по фактическому потреблению между датой въезда и датой договора решается только документами и фото.' }
      ]
    },
    {
      id: 'apply',
      title: '3. Подайте заявку онлайн или в balcão',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: 'Онлайн-заявка', content: [
            { kind: 'paragraph', text: 'У крупных операторов есть área de cliente и формы “celebrar contrato”, “novo contrato”, “ligação de água” или “mudança de titularidade”. Загружаете документы, указываете IBAN и выбираете способ получения fatura: email или бумага.' },
            { kind: 'paragraph', text: 'EPAL и Águas do Porto позволяют решать большую часть операций удалённо. Для первого договора иногда всё равно назначают визит техника для открытия воды, проверки plombagem или установки/замены счётчика.' }
          ] },
          { id: 'counter', title: 'Лично в офисе', content: [
            { kind: 'paragraph', text: 'Если онлайн-форма не принимает иностранный документ, адрес не находится в базе или нужен срочный запуск, идите в loja/balcão do cliente. Возьмите оригиналы документов и копии в PDF на телефоне.' }
          ] },
          { id: 'landlord', title: 'Если договор остаётся на landlord', content: [
            { kind: 'paragraph', text: 'Так делать можно, но это хуже для арендатора: вы не контролируете débito direto, не получаете официальные faturas на своё имя и сложнее доказывать адрес. Для долгосрочной аренды обычно лучше оформить água на себя.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fees-and-deposit',
      title: '4. Сколько платить при подключении',
      content: [
        { kind: 'paragraph', text: 'Точные суммы зависят от оператора, диаметра счётчика, типа объекта и того, нужно ли физическое подключение. В обычной квартире с существующим contador чаще речь не о строительном подключении, а о новом договоре или смене titular.' },
        { kind: 'checklist', items: [
          'Депозит/garantia/caução: часто около 30–80 €, практический ориентир — ~60 €',
          'У некоторых операторов depósito не берут при débito direto или возвращают/зачитывают при расторжении договора',
          'Установка или замена счётчика может быть бесплатной в рамках обслуживания либо платной по тарифу оператора',
          'В новых объектах ligação ao ramal, vistoria и serviços acessórios могут стоить заметно дороже обычной смены titular',
          'Первый счёт может включать воду, saneamento, resíduos urbanos и фиксированные tarifas de disponibilidade',
          'IVA на воду и связанные услуги зависит от типа услуги; в fatura обычно уже показан отдельными строками'
        ] },
        { kind: 'warning', text: 'Не ориентируйтесь на сумму соседа как на закон. У EPAL, Águas do Porto, SIMAR и SMAS разные regulamentos tarifários. Перед оплатой проверьте PDF “Tarifário 2026” именно вашего município.' }
      ]
    },
    {
      id: 'meter-reading-billing',
      title: '5. Показания: leitura mensal vs faturação',
      content: [
        { kind: 'paragraph', text: 'После подключения следите за показаниями. Если оператор не получает leitura real, счёт может быть рассчитан по estimativa. Потом придёт acerto: доплата или зачёт.' },
        { kind: 'checklist', items: [
          'Раз в месяц отправляйте leitura do contador через área de cliente, приложение, телефонную линию или форму на сайте',
          'Смотрите окно подачи: многие операторы указывают конкретные дни месяца в fatura',
          'Фото счётчика храните минимум до следующего acerto',
          'Если contador внутри квартиры, обеспечьте доступ técnico по уведомлению',
          'Если пришла estimativa слишком высокая, сразу подайте leitura real и попросите correção/acerto',
          'Подключите fatura eletrónica, чтобы не пропускать счета',
          'Débito direto удобен, но проверяйте сумму до даты cobrança; спорный счёт лучше оспаривать до списания'
        ] },
        { kind: 'paragraph', text: 'Обычная fatura de água в Португалии часто включает не только воду. Внутри могут быть abastecimento, saneamento, resíduos sólidos urbanos, taxa de gestão de resíduos и фиксированные componentes. Поэтому счёт “за воду” может расти даже при небольшом потреблении.' }
      ]
    },
    {
      id: 'move-out-problems',
      title: '6. При выезде, протечке или споре',
      content: [
        { kind: 'checklist', items: [
          'При выезде заранее подайте denúncia/rescisão do contrato',
          'Сделайте финальную leitura с фото в день передачи ключей',
          'Попросите final bill и возврат/зачёт caução, если она была',
          'Не оставляйте договор на своё имя после окончания аренды',
          'При аварии звоните на piquete/avarias вашего оператора, а не в Câmara Municipal общего профиля',
          'Если счёт резко вырос, проверьте autoclismo, бойлер, садовый кран и скрытые протечки',
          'Попросите vistoria/verificação do contador, если подозреваете ошибку счётчика',
          'Если оператор не решает спор, подайте reclamação в Livro de Reclamações eletrónico и затем в ERSAR/centro de arbitragem'
        ] },
        { kind: 'warning', text: 'Большой acerto за несколько месяцев обычно не отменяют только потому, что вы “не знали про leitura”. Оспаривать реально, если есть фото показаний, доказанная протечка, ошибка titularidade или неправильная estimativa после переданной leitura.' }
      ]
    }
  ],
  costs: [
    { label: 'Депозит / caução / garantia', amountEURMin: 30, amountEURMax: 80, note: 'Частый диапазон у муниципальных операторов; ориентир ~60 €. Может не применяться при débito direto или возвращаться при закрытии договора.' },
    { label: 'Обычная смена titular / новый договор при существующем счётчике', amountEURMin: 0, amountEURMax: 50, note: 'Зависит от оператора и тарифов 2026; иногда включается в первый счёт.' },
    { label: 'Физическое подключение, vistoria или serviços acessórios', amountEURMin: 20, amountEURMax: 150, note: 'Для новых объектов, отключённого ramal или нестандартной установки сумма может быть выше.' }
  ],
  sources: [
    { title: 'EPAL — клиенты, договоры и обслуживание воды в Lisboa', url: 'https://www.epal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Águas do Porto — contratos, leituras, faturação и apoio ao cliente', url: 'https://www.aguasdoporto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSAR — права потребителей услуг воды, saneamento и resíduos', url: 'https://www.ersar.pt/pt/consumidor', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações eletrónico — жалобы на коммунальных операторов', url: 'https://www.livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
