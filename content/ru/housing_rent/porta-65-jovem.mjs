export default {
  editorialVoice: 'hackportugal',
  id: 'porta-65-jovem',
  categoryId: 'housing_rent',
  title: 'Porta 65 Jovem — субсидия на аренду для молодых 18–35 лет',
  tldr: 'Porta 65 Jovem — государственная субсидия IHRU на аренду жилья для молодых 18–35 лет в Португалии. Заявки в 2026 подаются онлайн круглый год через Portal da Habitação / gov.pt. Поддержка обычно даётся на 12 месяцев с возможностью продления до 60 месяцев; размер зависит от дохода, состава семьи, муниципалитета и лимита аренды. Есть надбавка 20% для жилья в área de reabilitação urbana, надбавки за детей на иждивении и дополнительная надбавка для семей monoparental.',
  tags: ['porta65', 'аренда', 'жильё', 'ihru'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что оплачивает Porta 65 Jovem',
      content: [
        { kind: 'paragraph', text: 'Porta 65 Jovem — не скидка от арендодателя, а ежемесячная государственная субсидия на часть renda. Деньги переводятся получателю на IBAN после одобрения заявки.' },
        { kind: 'paragraph', text: 'Программа рассчитана на молодых людей, которые арендуют жильё для постоянного проживания в Portugal continental или regiões autónomas. Для expat это практический способ снизить нагрузку по аренде, если уже есть NIF, доступ к Finanças и договор аренды.' },
        { kind: 'checklist', items: ['Заявка бесплатная и подаётся онлайн', 'Принимаются молодые 18–35 лет; в паре один из заявителей может быть старше — до 37 лет по правилам программы', 'Поддержка назначается на 12 месяцев', 'Можно продлевать, пока сохраняются условия, обычно до общего лимита 60 месяцев', 'Субсидия зависит от дохода household, размера аренды, муниципалитета и типологии жилья', 'Есть majoração 20% для жилья в área de reabilitação urbana', 'Есть надбавки за детей на иждивении: +15% за одного и +20% за двух и более', 'Для семьи monoparental добавляется ещё +5% (один иждивенец) или +10% (двое и более)', 'Заявки в 2026 принимаются круглый год, без старой модели коротких окон подачи'] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто может подать заявку',
      content: [
        { kind: 'paragraph', text: 'Иностранцы могут участвовать, если проживают в Португалии законно и соответствуют тем же условиям, что и португальские заявители. На практике нужны NIF, доступ к Portal das Finanças или Chave Móvel Digital, подтверждаемый доход и аренда жилья в Португалии.' },
        { kind: 'checklist', items: ['Возраст: от 18 до 35 лет включительно; для casal jovem допускается, что один элемент может иметь до 37 лет', 'Жильё используется как residência permanente, а не как Airbnb, quarto turístico или второй дом', 'Есть contrato de arrendamento или contrato-promessa, оформленный по правилам и связанный с NIF сторон', 'Арендодатель не является родителем, ребёнком, бабушкой/дедушкой, внуком или близким родственником заявителя', 'У заявителя и членов household нет другого подходящего жилья в том же районе, которое можно использовать для проживания', 'Household не получает несовместимую государственную поддержку на ту же аренду', 'Доходы household должны проходить лимиты программы; слишком низкий, неподтверждённый или слишком высокий доход может привести к отказу', 'Аренда должна быть совместима с доходом и лимитами, установленными для município и типологии жилья'] },
        { kind: 'warning', text: 'Если вы только переехали и ещё не декларировали доход в Portugal, заявка может быть сложнее: IHRU сверяет данные с Autoridade Tributária и Segurança Social. Подготовьте иностранные доходы, контракт, recibos de vencimento или документы о recibos verdes, но окончательное решение зависит от того, что система сможет проверить.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы и доступы до подачи',
      content: [
        { kind: 'paragraph', text: 'Подача идёт через Portal da Habitação / gov.pt. Вход обычно делается через NIF + senha do Portal das Finanças, Chave Móvel Digital или Cartão de Cidadão. У каждого совершеннолетнего члена household должны быть корректные налоговые данные.' },
        { kind: 'checklist', items: ['NIF каждого заявителя и совершеннолетнего члена household', 'Senha do Portal das Finanças или Chave Móvel Digital', 'Título de residência / cartão de residência / другой документ законного пребывания для non-EU expat', 'Contrato de arrendamento или contrato-promessa с данными жилья, renda mensal и NIF senhorio', 'Подтверждение, что договор зарегистрирован в Finanças, если он уже действует', 'IBAN португальского или SEPA-счёта на имя заявителя', 'Declaração de IRS за последний доступный год, если уже подавали IRS в Португалии', 'Доказательства текущего дохода: contrato de trabalho, recibos de vencimento, recibos verdes, declaração de início de atividade', 'Состав household: супруг/партнёр, дети, dependentes, situação monoparental', 'Проверка morada fiscal: она должна соответствовать арендуемому жилью, если договор уже действует'] },
        { kind: 'warning', text: 'Не подавайте заявку с «договором на словах». IHRU работает с проверяемыми данными: NIF, contrato, renda, доходы и household должны совпадать между Portal da Habitação, Finanças и Segurança Social.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать заявку онлайн',
      content: [
        { kind: 'substeps', items: [
          { id: 'login', title: '1. Войти на Portal da Habitação', content: [
            { kind: 'paragraph', text: 'Откройте услугу «Candidatar-se ao Porta 65 Jovem» на gov.pt или страницу Porta 65 Jovem на Portal da Habitação. Авторизуйтесь через доступный способ — чаще всего NIF + senha das Finanças или CMD.' }
          ]},
          { id: 'household', title: '2. Заполнить household', content: [
            { kind: 'paragraph', text: 'Укажите всех людей, которые будут жить в квартире и входят в agregação familiar. Ошибка в составе семьи меняет лимиты дохода, типологию жилья и размер субсидии.' }
          ]},
          { id: 'lease', title: '3. Внести данные договора аренды', content: [
            { kind: 'paragraph', text: 'Понадобятся адрес, artigo matricial или данные недвижимости, NIF senhorio, valor da renda, дата начала договора и типология. Если жильё находится в área de reabilitação urbana, отметьте это для возможной majoração 20%.' }
          ]},
          { id: 'income', title: '4. Проверить доходы и IBAN', content: [
            { kind: 'paragraph', text: 'Система подтягивает часть информации автоматически из Finanças и Segurança Social. Если данные старые или неполные, исправьте их до подачи — после отказа проще подать новую корректную заявку, чем спорить с очевидной ошибкой.' }
          ]},
          { id: 'submit', title: '5. Отправить и сохранить comprovativo', content: [
            { kind: 'paragraph', text: 'После отправки сохраните comprovativo da candidatura. Статус проверяется в личном кабинете. Если IHRU запросит дополнительные сведения, отвечайте быстро: пропущенный prazo может привести к arquivamento.' }
          ]}
        ]}
      ]
    },
    {
      id: 'amount-and-renewal',
      title: 'Сколько платят и как продлевать',
      content: [
        { kind: 'paragraph', text: 'Точную сумму заранее лучше считать в симуляторе IHRU: формула учитывает rendimento mensal corrigido, renda, município, número de pessoas, типологию и специальные надбавки. В 2026 нет универсальной ставки «всем 50%»: два человека с одинаковой арендой в Lisboa и Castelo Branco могут получить разный результат.' },
        { kind: 'checklist', items: ['Базовая субсидия — процент от допустимой аренды, а не обязательно от всей суммы, если ваша renda выше лимита программы', 'Жильё в área de reabilitação urbana может дать +20% к субсидии', 'Дети на иждивении дают +15% за одного и +20% за двух и более', 'Семье monoparental добавляется ещё +5% или +10% сверх надбавки за иждивенцев', 'Поддержка назначается на 12 месяцев', 'Продление не автоматическое: нужно снова подтвердить условия и доходы', 'Если сменили квартиру, состав семьи, доход или IBAN — обновите данные до новой заявки', 'Если доход резко вырос, субсидию могут снизить или не продлить', 'Если перестали жить в этом жилье, поддержку нужно прекратить, иначе возможен возврат сумм'] },
        { kind: 'warning', text: 'Не планируйте бюджет так, будто субсидия уже одобрена. Сначала платите аренду самостоятельно: решение IHRU может занять время, а отказ возможен из-за лимитов дохода, несоответствия договора или ошибок в данных Finanças.' }
      ]
    },
    {
      id: 'expat-pitfalls',
      title: 'Частые ошибки expat',
      content: [
        { kind: 'checklist', items: ['Morada fiscal всё ещё стоит у знакомых или в старом Airbnb', 'Договор аренды не зарегистрирован senhorio в Finanças', 'В договоре указан один человек, а заявка подана на пару или семью', 'Доход приходит из-за рубежа, но не отражён в IRS или не объяснён документами', 'Заявитель получает другую несовместимую жилищную поддержку', 'Аренда слишком высока относительно подтверждённого дохода', 'Квартира не соответствует household по типологии или лимитам муниципалитета', 'Нет доступа к Portal das Finanças, а senha запрашивается почтой и приходит не сразу', 'IBAN указан не на имя заявителя', 'Заявитель переехал, но не обновил данные в Portal da Habitação'] },
        { kind: 'paragraph', text: 'Практичный порядок для переезжающего: сначала NIF и доступ к Finanças, затем нормальный contrato de arrendamento, регистрация morada fiscal, затем IRS/доходные документы и только потом Porta 65 Jovem. Так меньше отказов из-за несостыковок.' }
      ]
    }
  ],
  costs: [
    { label: 'Подача заявки Porta 65 Jovem', amountEUR: 0, note: 'Государственная онлайн-услуга бесплатна' },
    { label: 'Atestado de residência в Junta de Freguesia, если нужен для адреса', amountEURMin: 0, amountEURMax: 15, note: 'Цена зависит от freguesia; для самой заявки обычно важнее morada fiscal и договор' },
    { label: 'Ежемесячная аренда до получения решения', amountEURMin: 1, amountEURMax: 9999, note: 'Субсидия не заменяет обязанность платить renda senhorio вовремя' }
  ],
  sources: [
    {
      title: 'Portal da Habitação — Porta 65 Jovem',
      url: 'https://www.portaldahabitacao.pt/porta-65-jovem1',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt — Candidatar-se ao Porta 65 Jovem',
      url: 'https://www.gov.pt/servicos/candidatar-se-ao-porta-65-jovem',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 308/2007 — regime Porta 65 Jovem (с последующими изменениями)',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2007-34564575',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Decreto-Lei n.º 42/2024 — расширение доступа к Porta 65 Jovem (в силе с 01.09.2024)',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/42-2024-870515824',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
