export default {
  editorialVoice: 'hackportugal',
  id: 'internet-outage-anacom',
  categoryId: 'telecom',
  title: 'Жалоба в ANACOM на провайдера и расторжение договора',
  tldr: 'Если fibra/интернет в Португалии не работает, сначала фиксируйте avaria у оператора и берите número de avaria/protocolo. По Lei 16/2022 при недоступности услуги более 24 часов по вине оператора положена компенсация минимум пропорционально mensalidade. Если неисправность длится более 15 дней после сообщения, потребитель может расторгнуть договор без fidelização/штрафа. ANACOM принимает жалобы и надзирает, но деньги обычно выбивают через Livro de Reclamações и consumer arbitration.',
  tags: ['anacom', 'internet', 'жалоба', 'fibra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'fix-proof',
      title: '1. Зафиксируйте аварию, а не просто «интернет пропал»',
      content: [
        { kind: 'paragraph', text: 'В споре с MEO, NOS, Vodafone, NOWO или другим оператором решает не эмоция, а дата первого сообщения об avaria. Именно от неё обычно считают 24 часа для компенсации и 15 дней для права расторгнуть договор без штрафа.' },
        { kind: 'checklist', items: [
          'Позвоните в поддержку или напишите в app/área de cliente и откройте avaria.',
          'Попросите número de avaria или número de protocolo.',
          'Запишите дату, время, имя оператора и краткое описание проблемы.',
          'Сделайте скриншоты speedtest, статуса router/ONT, ошибок в app оператора.',
          'Сохраните SMS/e-mail о визите técnico и переносах визита.',
          'Если не работает только Wi-Fi, провайдер может спорить; проверяйте кабелем Ethernet, если возможно.',
          'Если проблема общая в здании/районе, попросите соседей также открыть avaria.',
          'Не выбрасывайте router/ONT и не меняйте оборудование без указания оператора.'
        ] },
        { kind: 'warning', text: 'Не прекращайте платить и не отменяйте débito direto как первый шаг. Провайдер может начислить dívida, заблокировать услуги и передать долг взыскателю. Сначала создайте письменный след: avaria, reclamação, pedido de compensação/resolução.' }
      ]
    },
    {
      id: 'rights',
      title: '2. Какие права даёт закон в 2026 году',
      content: [
        { kind: 'paragraph', text: 'Основной закон — Lei 16/2022, Lei das Comunicações Eletrónicas. Для бытового клиента важны две практические нормы: компенсация за недоступность услуги и право расторгнуть договор, если неисправность не устранена слишком долго.' },
        { kind: 'checklist', items: [
          'Если услуга недоступна более 24 последовательных часов по причинам, относимым к оператору, клиент имеет право на компенсацию.',
          'Минимум компенсации — пропорциональная часть mensalidade за период недоступности; договор может давать больше, но не меньше.',
          'Период, когда услуга не предоставлялась, не должен оплачиваться как нормальная услуга.',
          'Если avaria длится более 15 дней после сообщения оператору, потребитель может расторгнуть договор без encargos — то есть без штрафа за fidelização.',
          'Право работает по услуге, которая реально не предоставляется: fibra, TV, telefone fixo, pacote 3P/4P.',
          'Если оператор докажет, что поломка вызвана клиентом, его оборудованием, ремонтом в квартире или форс-мажором, компенсацию могут оспорить.',
          'SLA в договоре или ficha de informação simplificada может обещать конкретный prazo de reparação; если он нарушен, требуйте применить договорную компенсацию.',
          'Компенсация обычно оформляется crédito na fatura, а не наличным переводом.'
        ] },
        { kind: 'warning', text: '15 дней считаются безопаснее от официально зарегистрированной avaria, а не от первого устного разговора «у меня плохо ловит». Поэтому номер заявки критичен.' }
      ]
    },
    {
      id: 'complaint-operator',
      title: '3. Сначала письменная reclamação оператору',
      content: [
        { kind: 'paragraph', text: 'До ANACOM лучше направить оператору чёткое письменное требование. Это ускоряет возврат денег и создаёт доказательство, что вы попросили не просто ремонт, а компенсацию или расторжение.' },
        { kind: 'checklist', items: [
          'Зайдите в área de cliente или отправьте e-mail/сообщение через официальный канал оператора.',
          'Укажите NIF titular do contrato, morada de instalação, номер клиента и номер avaria.',
          'Напишите дату начала недоступности и что именно не работает.',
          'Потребуйте reparação imediata и crédito proporcional na fatura за период sem serviço.',
          'Если прошло более 15 дней: прямо напишите pedido de resolução do contrato sem encargos por indisponibilidade superior a 15 dias após comunicação da avaria.',
          'Попросите письменный ответ и номер reclamação.',
          'Приложите скриншоты, SMS о переносах técnico, фото ONT/router, speedtest.',
          'Сохраните PDF/скрин отправленного сообщения.'
        ] },
        { kind: 'paragraph', text: 'Формулировка по-португальски: “Solicito a reparação da avaria n.º ___, a compensação proporcional pela indisponibilidade do serviço superior a 24 horas e, caso a indisponibilidade exceda 15 dias desde a comunicação da avaria, a resolução do contrato sem encargos, nos termos da Lei n.º 16/2022.”' }
      ]
    },
    {
      id: 'anacom-livro',
      title: '4. Жалоба: Livro de Reclamações и ANACOM',
      content: [
        { kind: 'paragraph', text: 'ANACOM — регулятор связи. Она полезна, когда оператор системно нарушает правила, не отвечает, отказывает в компенсации или пытается взять штраф за fidelização после 15-дневной avaria. Но ANACOM обычно не выступает вашим адвокатом и не присуждает индивидуальную компенсацию как суд.' },
        { kind: 'substeps', items: [
          { id: 'livro', title: 'Livro de Reclamações Eletrónico', content: [
            { kind: 'paragraph', text: 'Подайте официальную reclamação на livroreclamacoes.pt. Оператор обязан получить жалобу и ответить в установленном порядке. Это самый практичный канал для бытового спора.' },
            { kind: 'checklist', items: [
              'Выберите sector: Comunicações eletrónicas.',
              'Выберите operador: MEO/NOS/Vodafone/NOWO и т.п.',
              'Опишите факты по датам: avaria aberta, visitas falhadas, dias sem serviço.',
              'Укажите требование: compensação, crédito na fatura, resolução sem encargos.',
              'Приложите доказательства, если форма позволяет.',
              'Сохраните comprovativo da reclamação.'
            ] }
          ] },
          { id: 'anacom', title: 'ANACOM', content: [
            { kind: 'paragraph', text: 'Через сайт ANACOM можно подать exposição/complaint регулятору. Смысл — зафиксировать нарушение правил связи и заставить оператора объясняться перед надзором.' },
            { kind: 'checklist', items: [
              'Приложите копию reclamação оператору или Livro de Reclamações.',
              'Приложите договор/fatura и ficha contratual, если есть.',
              'Укажите номер avaria и количество дней без услуги.',
              'Отдельно напишите, если оператор требует penalização за fidelização несмотря на 15+ дней без услуги.',
              'Не ограничивайтесь фразой “internet lenta”; пишите “serviço indisponível” или конкретные измерения скорости.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'ANACOM не заменяет tribunal arbitral. Если нужен возврат денег, отмена долга или признание расторжения, часто потребуется Centro de Arbitragem de Conflitos de Consumo.' }
      ]
    },
    {
      id: 'termination',
      title: '5. Как расторгнуть без штрафа после 15 дней',
      content: [
        { kind: 'paragraph', text: 'Если услуга недоступна более 15 дней после сообщения avaria, не просто “перестаньте пользоваться”. Отправьте formal pedido de resolução. Иначе оператор может считать договор активным и продолжать выставлять faturas.' },
        { kind: 'checklist', items: [
          'Проверьте, что прошло более 15 дней с даты número de avaria/protocolo.',
          'Отправьте pedido de resolução do contrato sem encargos через área de cliente, e-mail, loja с comprovativo или carta registada.',
          'Укажите, что причина — indisponibilidade do serviço superior a 15 dias após comunicação da avaria.',
          'Потребуйте дату прекращения договора и final bill без penalização por fidelização.',
          'Попросите инструкции по возврату router/ONT/box и срок возврата.',
          'Сдайте оборудование под расписку или сохраните comprovativo de envio.',
          'Проверьте следующую fatura: не должно быть штрафа за fidelização и платы за период sem serviço.',
          'Если штраф всё равно пришёл — Livro de Reclamações + ANACOM + pedido в consumer arbitration.'
        ] },
        { kind: 'warning', text: 'Если в pacote включены мобильные номера, оператор может попытаться оставить мобильную часть или изменить цену. В заявлении пишите, расторгаете весь pacote или только фиксированную услугу, и просите расчёт новой цены до согласия.' }
      ]
    },
    {
      id: 'arbitration',
      title: '6. Если оператор не возвращает деньги или шлёт долг',
      content: [
        { kind: 'paragraph', text: 'Для индивидуального результата используйте Centro de Arbitragem de Conflitos de Consumo по месту жительства или CNIACC. Telecom-споры для потребителей обычно подходят для consumer arbitration, особенно когда сумма небольшая и речь о faturas, штрафе за fidelização или отказе расторгнуть.' },
        { kind: 'checklist', items: [
          'Соберите договор, faturas, номер avaria, переписку, Livro de Reclamações, ответ оператора.',
          'Посчитайте сумму: mensalidade/30 × дни без услуги + незаконный штраф + ошибочные faturas.',
          'Подайте pedido de mediação/arbitragem в компетентный центр.',
          'Просите признать resolução sem encargos, аннулировать dívida и выдать nota de crédito.',
          'Если долг уже у collection agency, письменно оспорьте dívida и приложите номер процесса.',
          'Не игнорируйте cartas de injunção или уведомления суда: там действуют короткие сроки для oposição.'
        ] },
        { kind: 'paragraph', text: 'Практический минимум: номер avaria, доказательство 15+ дней без услуги и письменное требование расторгнуть без штрафа. Без этих трёх вещей спор становится гораздо слабее.' }
      ]
    }
  ],
  costs: [
    { label: 'Жалоба в Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Подаётся онлайн бесплатно.' },
    { label: 'Жалоба/экспозиция в ANACOM', amountEUR: 0, note: 'Регуляторный канал бесплатный.' },
    { label: 'Carta registada с aviso de receção', amountEURMin: 3, amountEURMax: 6, note: 'Ориентир CTT; зависит от веса и дополнительных услуг.' }
  ],
  sources: [
    {
      title: 'ANACOM Portal do Consumidor — компенсация за индоступность услуги связи',
      url: 'https://www.anacom-consumidor.pt/-/em-caso-de-avaria-os-consumidores-passam-a-ter-o-direito-de-serem-compensados-pela-indisponibilidade-dos-servicos-de-comunicacoes-eletronicas',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Lei n.º 16/2022 — Lei das Comunicações Eletrónicas',
      url: 'https://diariodarepublica.pt/dr/detalhe/lei/16-2022-187481298',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações Eletrónico — портал подачи жалоб',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANACOM: информация для потребителей о reclamações',
      url: 'https://www.anacom-consumidor.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
