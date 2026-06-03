export default {
  editorialVoice: 'hackportugal',
  id: 'fa-painel-solar-residencial',
  categoryId: 'housing_buy',
  title: 'Fundo Ambiental: ваучер на солнечные панели для жилья',
  tldr: 'Fundo Ambiental периодически открывает конкурсы на компенсацию солнечных панелей для жилья: solar fotovoltaico для autoconsumo и solar térmico для горячей воды. В типичных Aviso лимит по дому доходил примерно до 2 500 €, но это не постоянная льгота: в мае 2026 нужно ждать нового Aviso/PRR-раунда и смотреть условия конкретной волны. Понадобятся жильё в Португалии, NIF, отсутствие долгов в AT/Segurança Social, счёт-фактура и установщик из допустимого списка.',
  tags: ['fundoambiental', 'solar', 'жильё', 'upac'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это за ваучер и кому он нужен',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental — государственный фонд, через который Португалия распределяет субсидии на энергоэффективность жилья. Для солнечных систем это обычно не «скидка в магазине», а компенсация части расходов после установки и подачи заявки в портал Fundo Ambiental.' },
        { kind: 'paragraph', text: 'Поддержка может покрывать solar fotovoltaico — панели для собственного потребления электроэнергии, и solar térmico — панели для нагрева воды. В прошлых раундах Edifícios + Sustentáveis лимиты по отдельным типологиям доходили примерно до 2 500 € на dwelling, но точные проценты, потолки и eligible expenses всегда задаются конкретным Aviso.' },
        { kind: 'warning', text: 'На май 2026 это не автоматическое право владельца жилья. Если новый Aviso ещё не открыт, нельзя гарантировать выплату за установку «задним числом». Перед подписанием договора проверьте дату admissibilidade das despesas в текущем Aviso.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Кто обычно проходит по условиям',
      content: [
        { kind: 'checklist', items: [
          'Жильё находится в Португалии: квартира или дом, используемые как habitação.',
          'Заявитель имеет NIF и доступ к Portal do Fundo Ambiental; для экспатов подходит NIF + email/пароль, иногда CMD упрощает вход.',
          'Заявитель — собственник, совладелец, usufrutuário или другой titular, если это прямо допускает Aviso.',
          'Нет долгов в Autoridade Tributária и Segurança Social; обычно нужны certidões de não dívida.',
          'Расходы подтверждены fatura и recibo на имя заявителя с португальским NIF.',
          'Оборудование новое, установлено в eligible dwelling и соответствует техническим требованиям Aviso.',
          'Установщик/компания соответствует требованиям Fundo Ambiental; в некоторых раундах нужно выбирать из списка aderentes или предъявлять сертификацию.',
          'IBAN принадлежит заявителю; компенсация приходит банковским переводом после проверки.',
          'Заявка подана в срок и до исчерпания бюджета конкурса.'
        ] },
        { kind: 'warning', text: 'Арендатор без согласия собственника почти всегда находится в слабой позиции: панели меняют техническую конфигурацию жилья и требуют autorização do proprietário/condomínio. Для квартиры дополнительно проверьте правила condomínio и доступ к крыше.' }
      ]
    },
    {
      id: 'amounts-and-2026-timing',
      title: 'Сколько дают и когда ждать волну 2026',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental работает через Aviso: документ конкурса задаёт бюджет, даты, проценты компенсации, лимит на тип оборудования и список документов. В 2026 ориентируйтесь не на рекламный баннер установщика, а на PDF Aviso на fundoambiental.pt.' },
        { kind: 'paragraph', text: 'Практический ориентир для домашней солнечной системы: компенсация может быть частичной — например, до 85% eligible cost в прежних энергоэффективных программах, но с потолком по типологии. Для solar térmico или PV со storage лимит мог быть выше, около 2 500 €; для простого PV без батареи потолок мог быть ниже. В новой волне цифры могут отличаться.' },
        { kind: 'checklist', items: [
          'Проверяйте раздел «Avisos Abertos» на fundoambiental.pt.',
          'Смотрите название программы: Edifícios + Sustentáveis, Vale Eficiência или другой PRR/Clima instrument — условия разные.',
          'Фиксируйте дату открытия и дату admissibilidade das despesas.',
          'Уточняйте, можно ли подавать уже установленную систему или только расходы после публикации Aviso.',
          'Проверяйте, есть ли повышенный лимит для районов вне Lisboa/Porto или для уязвимых домохозяйств.',
          'Не рассчитывайте на выплату, если бюджет Aviso закончился: заявки обычно рассматриваются по порядку submission и комплектности.'
        ] }
      ]
    },
    {
      id: 'before-installation',
      title: 'Что сделать до установки панелей',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-property', title: '1. Проверить объект и ограничения', content: [
            { kind: 'checklist', items: [
              'Для дома: ориентация крыши, тени, состояние черепицы, мощность подключения.',
              'Для квартиры: протокол condomínio, право пользоваться крышей, место для инвертора и кабеля.',
              'Для исторических зон: ограничения Câmara Municipal или DGPC могут запретить видимые панели.',
              'Для solar térmico: место под бак, трассы воды и нагрузка на крышу.',
              'Для PV: предполагаемое потребление днём, наличие heat pump, EV charger или батареи.'
            ] }
          ] },
          { id: 'choose-installer', title: '2. Выбрать установщика без ловушек', content: [
            { kind: 'checklist', items: [
              'Попросите orçamento с разбивкой: панели, инвертор, структура, кабели, защита, монтаж, IVA.',
              'Проверьте, соответствует ли компания требованиям текущего Aviso и есть ли она в списке допустимых fornecedores/instaladores, если список опубликован.',
              'Попросите datasheet оборудования и гарантию: панели обычно 12–25 лет, инвертор часто 5–10 лет.',
              'Проверьте, включает ли цена регистрацию UPAC в DGEG, если она нужна.',
              'Не платите 100% до проверки документов для Fundo Ambiental.'
            ] }
          ] },
          { id: 'paper-trail', title: '3. Сразу собрать правильные документы', content: [
            { kind: 'checklist', items: [
              'Fatura с вашим NIF и адресом объекта.',
              'Recibo или comprovativo de pagamento: банковский перевод, Multibanco, MB WAY с traceable proof.',
              'Certidão predial или caderneta predial urbana для связи заявителя с объектом.',
              'Certidões de não dívida AT и Segurança Social.',
              'Фото до/после, если их требует Aviso.',
              'Техническая ficha оборудования и declaração do instalador.',
              'Comprovativo IBAN на имя заявителя.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'dgeg-and-grid',
      title: 'Регистрация UPAC и подключение к сети',
      content: [
        { kind: 'paragraph', text: 'PV для собственного потребления в Португалии регулируется режимом UPAC. Малые системы обычно проходят упрощённую регистрацию, но пороги и обязанности зависят от installed capacity. Установщик должен объяснить, нужна ли comunicação prévia, регистрация в DGEG или certificado de exploração.' },
        { kind: 'paragraph', text: 'Если система отдаёт излишки в сеть, это не то же самое, что субсидия Fundo Ambiental. Продажа excedentes требует договора с comercializador/agregador и может иметь налоговые последствия. Для обычного домохозяйства ключевая экономия — уменьшение счёта EDP/Galp/Iberdrola и потребления из сети в дневные часы.' },
        { kind: 'warning', text: 'Не устанавливайте панели «sem legalização». При продаже дома, страховом случае или проверке condomínio отсутствие документов DGEG/instalador может стать проблемой.' }
      ]
    },
    {
      id: 'application',
      title: 'Как подать заявку в Fundo Ambiental',
      content: [
        { kind: 'checklist', items: [
          'Создайте аккаунт на fundoambiental.pt и выберите нужный Aviso.',
          'Заполните dados do beneficiário: NIF, адрес, контакты, IBAN.',
          'Укажите объект: morada, artigo matricial, тип жилья.',
          'Выберите тип intervention: solar fotovoltaico, solar térmico, storage, если доступно.',
          'Загрузите fatura, recibo, технические документы, certidões AT/SS и proof of ownership.',
          'Проверьте, что суммы без/с IVA совпадают с требованиями формы.',
          'Отправьте candidatura и сохраните comprovativo submission.',
          'Отвечайте на pedidos de esclarecimento быстро: пропуск срока ведёт к indeferimento.',
          'После aprovação дождитесь pagamento; сроки могут быть от нескольких недель до многих месяцев.'
        ] },
        { kind: 'warning', text: 'Если заявка отклонена, обычно можно подать reclamação/contestação в срок, указанный в уведомлении. Но отсутствие обязательного документа, неверная дата fatura или установщик вне условий Aviso часто не лечатся постфактум.' }
      ]
    }
  ],
  costs: [
    { label: 'Ориентир субсидии Fundo Ambiental на dwelling', amountEURMax: 2500, note: 'Не гарантированный лимит 2026; зависит от конкретного Aviso и типологии оборудования.' },
    { label: 'Домашняя PV-система без батареи 2–4 kW', amountEURMin: 2500, amountEURMax: 6000, note: 'Рыночный порядок цены с установкой; сильно зависит от крыши, инвертора и бренда.' },
    { label: 'PV с батареей', amountEURMin: 6000, amountEURMax: 12000, note: 'Батарея повышает self-consumption, но не всегда окупается без точного расчёта профиля потребления.' },
    { label: 'Solar térmico для горячей воды', amountEURMin: 1800, amountEURMax: 4500, note: 'Зависит от бака, числа коллекторов, крыши и гидравлики.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — официальный портал программ и Avisos', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGEG — Autoconsumo e UPAC', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/autoconsumo-e-comunidades-de-energia-renovavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 15/2022 — organização e funcionamento do Sistema Elétrico Nacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022-177634016', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — Certificação energética e eficiência em edifícios', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
