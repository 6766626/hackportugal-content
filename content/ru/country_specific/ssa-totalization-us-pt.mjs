export default {
  editorialVoice: 'hackportugal',
  id: 'ssa-totalization-us-pt',
  categoryId: 'country_specific',
  title: 'Социальное страхование США (SSA) для резидентов Португалии',
  tldr: 'Американскую пенсию Social Security можно получать, живя в Португалии: выплаты идут через SSA/Federal Benefits Unit при посольстве США в Лиссабоне, обычно на счёт в PT. Если не хватает 40 US credits, соглашение US–Portugal о totalization позволяет зачесть периоды взносов в Segurança Social; для US-выплаты нужно минимум 6 US credits. Заявление на totalization подают с SSA-2490-BK. Medicare за границей почти не работает.',
  tags: ['ssa', 'пенсия', 'totalization', 'сша', 'segurança-social'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalization-does',
      title: 'Что даёт соглашение US–Portugal',
      content: [
        { kind: 'paragraph', text: 'У США и Португалии действует соглашение о социальном обеспечении: оно помогает избежать двойных взносов и позволяет суммировать страховые периоды для пенсии, инвалидности и выплат пережившим членам семьи.' },
        { kind: 'paragraph', text: 'В США обычное право на retirement benefits требует 40 credits. В 2026 году 1 credit начисляется за 1 810 $ заработка, максимум 4 credits за год. Если 40 credits нет, SSA может зачесть португальские периоды взносов, но только если у вас есть минимум 6 US credits.' },
        { kind: 'warning', text: 'Totalization не делает «двойную пенсию». США платят только пропорциональную часть по вашим американским earnings record. Португалия отдельно считает свою пенсию по правилам Segurança Social.' }
      ]
    },
    {
      id: 'who-should-use',
      title: 'Кому это нужно',
      content: [
        { kind: 'checklist', items: [
          'Гражданам США и green card holders, которые живут в Португалии и хотят оформить Social Security retirement, disability или survivors benefits.',
          'Тем, кто работал в США меньше 10 лет и не набрал 40 credits.',
          'Тем, кто работал в Португалии по contrato de trabalho или recibos verdes и платил взносы в Segurança Social.',
          'Супругам, бывшим супругам, вдовам/вдовцам и детям, которые претендуют на family или survivors benefits.',
          'Самозанятым американцам в Португалии, которым важно понять, где платить social security contributions.',
          'Работникам, временно отправленным из США в Португалию или из Португалии в США, чтобы не платить взносы в обе системы.'
        ] },
        { kind: 'paragraph', text: 'Если у вас уже есть 40 US credits, португальские периоды обычно не увеличат американскую пенсию. Но они могут быть важны для португальской пенсии: в Португалии стандартный минимальный contributory period для old-age pension — 15 лет взносов, а normal pension age в 2026 году — 66 лет и 7 месяцев.' }
      ]
    },
    {
      id: 'how-to-claim-from-portugal',
      title: 'Как подать заявление из Португалии',
      content: [
        { kind: 'paragraph', text: 'Резиденты Португалии обычно работают не с локальным офисом SSA в США, а с Federal Benefits Unit (FBU) при посольстве США в Лиссабоне. FBU принимает заявления, проверяет документы и передаёт дело в SSA.' },
        { kind: 'substeps', items: [
          { id: 'prepare-records', title: '1. Соберите записи о стаже', content: [
            { kind: 'checklist', items: [
              'SSN и доступ к my Social Security, если есть.',
              'Паспорт США или другой документ личности.',
              'Свидетельство о рождении; при семейных выплатах — marriage certificate, divorce decree, death certificate.',
              'W-2, 1099, tax returns или другие доказательства американского заработка, если earnings record неполный.',
              'NISS и português record: declaração de carreira contributiva / histórico de remunerações из Segurança Social Direta.',
              'Даты работы в США и Португалии: работодатели, адреса, периоды, тип занятости.',
              'IBAN португальского счёта для international direct deposit или данные американского счёта.'
            ] }
          ] },
          { id: 'contact-fbu', title: '2. Свяжитесь с FBU Lisbon', content: [
            { kind: 'paragraph', text: 'Напишите в FBU через страницу U.S. Embassy Lisbon / Federal Benefits. Не отправляйте оригиналы без инструкции FBU. Обычно FBU назначает телефонный/видео контакт или просит загрузить/прислать копии.' }
          ] },
          { id: 'file-forms', title: '3. Заполните формы SSA', content: [
            { kind: 'paragraph', text: 'Для обычной retirement claim используются формы SSA на retirement benefits; если нужны португальские credits, добавляется SSA-2490-BK — Application for Benefits Under a U.S. International Social Security Agreement.' },
            { kind: 'warning', text: 'SSA-2490-BK важна именно для totalization. Если вы просто подали обычную заявку и не указали португальские периоды, SSA может не запросить данные у Portugal Segurança Social.' }
          ] },
          { id: 'wait-verification', title: '4. Дождитесь обмена данными', content: [
            { kind: 'paragraph', text: 'SSA запрашивает подтверждение португальских страховых периодов через компетентные органы. Сроки не фиксированы: простые дела идут быстрее, дела с несколькими странами, разводами, military service или self-employment могут занимать месяцы.' }
          ] }
        ] }
      ]
    },
    {
      id: 'payments-and-life-in-portugal',
      title: 'Выплаты, банки и контроль проживания',
      content: [
        { kind: 'paragraph', text: 'SSA может платить benefits резидентам Португалии. Деньги можно получать international direct deposit на португальский банковский счёт или на счёт в США. При переводе в PT учитывайте банковские комиссии и курс, если счёт не в долларах.' },
        { kind: 'checklist', items: [
          'Сообщайте SSA/FBU о смене адреса в Португалии.',
          'Сообщайте о браке, разводе, смерти супруга, начале/окончании работы и изменении гражданства, если это влияет на benefits.',
          'Проверяйте почту: SSA рассылает Foreign Enforcement Questionnaire, обычно формы SSA-7162 или SSA-7161.',
          'Если анкету не вернуть вовремя, выплаты могут быть приостановлены до подтверждения жизни и адреса.',
          'Medicare почти не покрывает медицинские услуги за пределами США; для Португалии нужны SNS, частная страховка или оба варианта.',
          'Part B premiums могут продолжать удерживаться из Social Security, даже если вы живёте в Португалии; отказ и повторное подключение могут иметь штрафы.'
        ] },
        { kind: 'warning', text: 'Не игнорируйте письма SSA из-за португальской почты. Практичный вариант — держать актуальный адрес, сканы всех отправок и регулярно проверять связь с FBU.' }
      ]
    },
    {
      id: 'contributions-and-double-tax',
      title: 'Взносы: как не платить в две системы',
      content: [
        { kind: 'paragraph', text: 'Соглашение также регулирует, в какую систему платить social security contributions. Общая логика: работник платит в систему страны, где работает, но для временной командировки может сохраняться система страны отправления.' },
        { kind: 'checklist', items: [
          'Если американская компания временно отправляет вас работать в Португалию, обычно можно запросить Certificate of Coverage в SSA и продолжать платить FICA в США, а не Segurança Social в PT.',
          'Если португальская компания временно отправляет сотрудника в США, сертификат обычно запрашивается в Portugal Segurança Social.',
          'Если вы self-employed и живёте/работаете в Португалии, часто применяется покрытие страны проживания: взносы в Segurança Social вместо US self-employment tax, при наличии правильного сертификата.',
          'US tax return всё равно может быть обязательна для граждан США, даже если social security contributions платятся в Португалии.',
          'Для recibos verdes в Португалии следите за Segurança Social Direta: quarterly declarations, база взносов и возможные exemptions не заменяются SSA.'
        ] },
        { kind: 'warning', text: 'Certificate of Coverage нужно оформлять до спора с налоговой/соцстрахом, а не после начисления долгов. Для US self-employment tax и Portuguese Segurança Social лучше согласовать позицию с US/Portugal tax adviser.' }
      ]
    },
    {
      id: 'tax-and-planning',
      title: 'Налоги и планирование',
      content: [
        { kind: 'paragraph', text: 'Social Security benefits и португальская пенсия — это не только вопрос SSA. У американцев остаётся US tax filing; у налоговых резидентов Португалии есть обязанности по IRS. Налоговый режим зависит от резидентства, типа выплаты, договора об избежании двойного налогообложения и вашей структуры доходов.' },
        { kind: 'checklist', items: [
          'Скачайте Social Security Statement до подачи: проверьте earnings record и предполагаемый benefit.',
          'Сравните сценарии claim age: 62, full retirement age и 70 лет; ранний claim уменьшает выплату пожизненно.',
          'Если есть Portuguese pension, запросите simulação в Segurança Social Direta.',
          'Проверьте, как выплаты будут отражаться в IRS Modelo 3 и US Form 1040.',
          'Храните все SSA notices, SSA-2490-BK, сертификаты coverage и подтверждения от Segurança Social.',
          'Не планируйте медицину в Португалии через Medicare: регистрируйтесь в SNS и рассматривайте частную страховку.'
        ] },
        { kind: 'paragraph', text: 'С 2025 года в США отменены WEP/GPO для Social Security, поэтому иностранная государственная пенсия больше не должна уменьшать benefit по этим правилам. Но SSA всё равно может запрашивать сведения о foreign pension для правильной обработки дела.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача заявления SSA/FBU', amountEUR: 0, note: 'SSA не берёт пошлину за retirement/totalization claim и форму SSA-2490-BK.' },
    { label: 'Certificate of Coverage', amountEUR: 0, note: 'Обычно без госпошлины; возможны расходы на консультанта или заверенные переводы, если их попросит конкретный орган.' }
  ],
  sources: [
    {
      title: 'SSA: соглашение США и Португалии о социальном обеспечении',
      url: 'https://www.ssa.gov/international/Agreement_Pamphlets/portugal.html',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA POMS GN 01727.001: Portugal — overview of totalization agreement',
      url: 'https://secure.ssa.gov/apps10/poms.nsf/lnx/0201727001',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SSA: Federal Benefits Units для заявителей за пределами США',
      url: 'https://www.ssa.gov/foreign/foreign.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: pensão de velhice и правила доступа',
      url: 'https://www.seg-social.pt/pensao-de-velhice',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
