export default {
  editorialVoice: 'hackportugal',
  id: 'subsidio-mudanca-municipal',
  categoryId: 'housing_rent',
  title: 'Apoio à mudança: муниципалитеты, которые платят за переезд',
  tldr: 'В Португалии нет единой национальной выплаты «за переезд», но отдельные municípios во внутренних регионах дают apoios à fixação de novos residentes: обычно 2 000–5 000 € на семью или заявителя. В 2026 такие программы встречаются у Mértola, Ourique, Torre de Moncorvo, Pampilhosa da Serra и похожих concelhos. Почти всегда нужно реально переехать, прописаться, не иметь долгов Finanças/Segurança Social и прожить минимум 2 года — иначе деньги могут потребовать назад.',
  tags: ['mudança', 'município', 'жильё', 'субсидии'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за выплаты',
      content: [
        { kind: 'paragraph', text: 'Apoio à mudança или apoio à fixação de novos residentes — местная мера Câmara Municipal, а не право по национальному закону. Муниципалитеты во внутренних и малонаселённых районах используют её, чтобы привлечь работников, семьи с детьми, удалённых специалистов и предпринимателей.' },
        { kind: 'paragraph', text: 'Типичный размер в 2026 году — от 2 000 € до 5 000 €. Иногда сумма фиксированная, иногда складывается из базовой выплаты за переезд, доплаты за каждого ребёнка, поддержки аренды, покупки/ремонта жилья или открытия бизнеса.' },
        { kind: 'warning', text: 'Это не замена визе D1–D8, ВНЖ, contrato de arrendamento или доходу. Муниципалитет может одобрить выплату только после проверки фактического проживания и документов; бюджет программы часто ограничен и заявки закрываются без долгого предупреждения.' }
      ]
    },
    {
      id: 'where-to-look',
      title: 'Где искать программы в 2026',
      content: [
        { kind: 'paragraph', text: 'Смотрите не портал ePortugal, а сайт конкретной Câmara Municipal: разделы Apoios, Incentivos, Habitação, Fixação de População, Regulamentos Municipais, Avisos или Balcão Único. У маленьких municípios информация часто лежит PDF-регламентом и отдельным aviso de abertura.' },
        { kind: 'checklist', items: [
          'Mértola — программы поддержки fixação de novos residentes и семей во внутреннем Alentejo; проверяйте свежий aviso на cm-mertola.pt.',
          'Ourique — местные incentivos à fixação de população/famílias; условия зависят от действующего regulamento municipal.',
          'Torre de Moncorvo — типичный пример município do interior с поддержкой новых жителей и семей; суммы и окна заявок публикует Câmara.',
          'Pampilhosa da Serra — известна мерами привлечения жителей, включая поддержку семей, жилья и переезда; проверяйте актуальный edital.',
          'Соседние concelhos в Beira Interior, Trás-os-Montes, Baixo Alentejo и Centro могут иметь похожие выплаты, но не рекламируют их на английском.',
          'Если на сайте нет страницы, пишите в Balcão Único или Gabinete de Apoio ao Munícipe: спросите “apoio à fixação de novos residentes / apoio à mudança”.'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто обычно проходит',
      content: [
        { kind: 'paragraph', text: 'Условия отличаются по regulamento municipal, но логика почти везде одинаковая: муниципалитет платит не за намерение переехать, а за фактическое поселение в concelho и обязательство жить там установленный срок.' },
        { kind: 'checklist', items: [
          'Заявитель старше 18 лет, с NIF и законным пребыванием в Португалии: ВНЖ, виза, Cartão de Cidadão или registo de cidadão UE.',
          'Новый адрес находится именно в этом município, подтверждён contrato de arrendamento, escritura, caderneta predial, declaração do senhorio или atestado de residência.',
          'Вы переносите domicílio fiscal в Finanças на адрес в concelho.',
          'Вы регистрируетесь в Junta de Freguesia и можете получить atestado de residência.',
          'Вы не были резидентом этого município в последние 1–3 года — точный период смотрите в регламенте.',
          'У вас нет долгов перед Finanças, Segurança Social и самим município.',
          'Есть связь с работой или экономической активностью: contrato de trabalho, recibos verdes, удалённая работа, empresa, atividade aberta или план трудоустройства.',
          'Вы обязуетесь жить в município обычно минимум 24 месяца; при досрочном отъезде субсидию могут вернуть пропорционально или полностью.',
          'Если выплата семейная, супруг/партнёр и дети тоже должны быть зарегистрированы по новому адресу.'
        ] },
        { kind: 'warning', text: 'Экспаты не исключены автоматически, но документы должны быть португальскими и проверяемыми. Паспорт + Airbnb на месяц почти никогда не подходят: нужен реальный адрес и устойчивое проживание.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы: готовьте до подачи',
      content: [
        { kind: 'paragraph', text: 'Самая частая причина отказа — не сумма дохода, а неполный пакет: нет справки об отсутствии долгов, налоговый адрес ещё в Лиссабоне/Порту, договор аренды не зарегистрирован в Finanças или заявка подана после закрытия окна.' },
        { kind: 'checklist', items: [
          'Documento de identificação: ВНЖ, паспорт + ВНЖ/виза, Cartão de Cidadão или EU registration certificate.',
          'NIF всех взрослых заявителей.',
          'Comprovativo de domicílio fiscal из Portal das Finanças с адресом в município.',
          'Atestado de residência от Junta de Freguesia или другой документ, прямо указанный в регламенте.',
          'Contrato de arrendamento, comprovativo de compra жилья или declaração de cedência de habitação.',
          'Comprovativo de situação profissional: contrato de trabalho, declaração da entidade patronal, início de atividade, recibos verdes, certidão permanente da empresa.',
          'Certidão de não dívida às Finanças.',
          'Declaração de situação contributiva regularizada da Segurança Social.',
          'IBAN на имя заявителя.',
          'Declaração de compromisso de residência por 2 года, если она требуется формой.',
          'Состав домохозяйства: certidão de nascimento детей, casamento/união de facto, если есть семейные доплаты.'
        ] }
      ]
    },
    {
      id: 'application-process',
      title: 'Как подать заявку без потери окна',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-regulation', title: '1. Найдите regulamento и aviso de abertura', content: [
            { kind: 'paragraph', text: 'Regulamento объясняет постоянные правила, а aviso de abertura — конкретное окно 2026 года: даты, бюджет, форма, лимит заявок и e-mail/платформа подачи. Без aviso программа может существовать “на бумаге”, но заявки не принимать.' }
          ] },
          { id: 'confirm-by-email', title: '2. Подтвердите детали письмом', content: [
            { kind: 'paragraph', text: 'Напишите в Câmara Municipal до переезда или сразу после. Попросите подтвердить: открыт ли prazo de candidatura, можно ли подаваться иностранцу с вашим типом ВНЖ, принимают ли contrato de trabalho remoto и какой минимальный срок проживания.' }
          ] },
          { id: 'move-and-register', title: '3. Переезжайте и меняйте адреса', content: [
            { kind: 'paragraph', text: 'Сначала должен появиться доказуемый адрес: аренда/покупка/cedência, затем domicílio fiscal в Finanças, atestado de residência в Junta de Freguesia и только потом заявка, если регламент не разрешает предварительное одобрение.' }
          ] },
          { id: 'submit', title: '4. Подайте полный пакет', content: [
            { kind: 'paragraph', text: 'Подача обычно идёт через Balcão Único, e-mail Câmara или presencialmente. Попросите comprovativo de entrega с датой и номером процесса.' }
          ] },
          { id: 'after-approval', title: '5. Сохраните доказательства проживания', content: [
            { kind: 'paragraph', text: 'После выплаты храните договор аренды, счета água/luz/internet, recibos de renda, IRS, школьную регистрацию детей и любые письма Câmara. Муниципалитет может проверять, живёте ли вы там весь срок обязательства.' }
          ] }
        ] }
      ]
    },
    {
      id: 'risks-and-tactics',
      title: 'Риски и практичная тактика',
      content: [
        { kind: 'checklist', items: [
          'Не подписывайте дорогой долгий договор только ради субсидии: бюджет может закончиться до вашей подачи.',
          'Сначала проверьте транспорт, школы, Centro de Saúde, интернет и рынок работы: 5 000 € не компенсируют невозможность жить в месте 2 года.',
          'Если работаете удалённо, заранее получите письмо работодателя о remote work из Португалии или подготовьте recibos verdes/contratos de prestação de serviços.',
          'Спросите, можно ли совмещать municipal grant с Porta 65, Apoio ao Arrendamento или другими программами; иногда кумуляция ограничена.',
          'Уточните налоговый режим выплаты: многие apoios municipais не являются зарплатой, но всё равно сохраняйте decisão de atribuição и recibo для IRS.',
          'Если семья переезжает частями, уточните, какая дата считается началом residência: дата договора, atestado, mudança do domicílio fiscal или decisão Câmara.',
          'Проверяйте obrigação de restituição: при отъезде раньше 24 месяцев деньги могут потребовать вернуть полностью, с процентами или пропорционально.'
        ] },
        { kind: 'warning', text: 'Не доверяйте объявлениям агентств “поможем получить 5 000 € за переезд” без ссылки на официальный regulamento municipal. Единственный надёжный источник — Câmara Municipal и опубликованный aviso.' }
      ]
    }
  ],
  costs: [
    { label: 'Типичная муниципальная выплата за переезд/фиксацию резидента', amountEURMin: 2000, amountEURMax: 5000, note: 'Диапазон по программам municípios do interior; точная сумма зависит от регламента, семьи, детей и бюджета.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Тариф зависит от Junta; иногда бесплатно, иногда несколько евро.' },
    { label: 'Смена domicílio fiscal в Finanças', amountEUR: 0, note: 'Бесплатно через Portal das Finanças или presencialmente.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Mértola — официальный сайт муниципалитета и разделы apoios/avisos', url: 'https://www.cm-mertola.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Ourique — официальный сайт и regulamentos municipais', url: 'https://www.cm-ourique.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Município de Torre de Moncorvo — официальный сайт, avisos и apoios municipais', url: 'https://www.cm-moncorvo.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Pampilhosa da Serra — официальный сайт и programas de apoio', url: 'https://www.cm-pampilhosadaserra.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
