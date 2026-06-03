export default {
  editorialVoice: 'hackportugal',
  id: 'cancel-gym-fidelizacao',
  categoryId: 'emergency_rights',
  title: 'Расторжение договора с фитнес-клубом во время fidelização',
  tldr: 'В Португалии fidelização в фитнес-клубе не означает «нельзя уйти». 14 дней на отказ есть только для договора, заключённого онлайн, по телефону или вне клуба; если подписали на стойке, автоматического cooling-off нет. Досрочно расторгать можно при justa causa: болезнь/травма, безработица, переезд, существенное изменение условий. Нужны доказательства и carta registada com aviso de receção. Требование оплатить все месяцы до конца срока можно оспаривать как чрезмерное.',
  tags: ['ginásio', 'fidelização', 'права', 'contrato'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'check-contract',
      title: '1. Проверьте, где и как был заключён договор',
      content: [
        { kind: 'paragraph', text: 'Первый вопрос: вы подписали договор лично в клубе или оформили его дистанционно? От этого зависит право на отказ без объяснения причин.' },
        { kind: 'checklist', items: [
          'Онлайн, через приложение, по телефону или вне помещения клуба — обычно действует 14-дневное право на расторжение по Decreto-Lei 24/2014.',
          'На стойке клуба, после личной продажи в помещении ginásio — общего законного права «передумать за 14 дней» нет, если сам договор этого не обещает.',
          'Найдите срок fidelização: 3, 6, 12 или 24 месяца — у фитнес-клубов часто 12 месяцев, но нужно смотреть конкретный contrato.',
          'Проверьте cláusula de cancelamento: срок предварительного уведомления, email/адрес, требуемые документы.',
          'Проверьте penalty: требуют ли оплатить все месяцы до конца срока или только разумную компенсацию.',
          'Сохраните contrato, regulamento interno, recibos/faturas, сообщения WhatsApp/email и скриншоты личного кабинета.'
        ] },
        { kind: 'warning', text: 'Не путайте «приостановить mensalidade» и «расторгнуть contrato». Заморозка из-за болезни или отпуска часто продлевает fidelização, а не завершает её.' }
      ]
    },
    {
      id: 'fourteen-days',
      title: '2. Если ещё не прошло 14 дней 🧾',
      content: [
        { kind: 'paragraph', text: 'Для дистанционных и внеофисных договоров потребитель может отказаться в течение 14 дней без объяснения причин. Срок обычно считается с даты заключения договора или получения условий на durable medium — PDF/email.' },
        { kind: 'checklist', items: [
          'Отправьте заявление до истечения 14-го дня.',
          'Напишите: «Exerço o meu direito de livre resolução nos termos do Decreto-Lei 24/2014».',
          'Укажите имя, NIF, номер клиента, дату договора, IBAN для возврата.',
          'Отправьте способом, который оставляет доказательство: email с подтверждением, área de cliente, но лучше carta registada.',
          'Попросите подтверждение отмены débito direto SEPA.',
          'Если уже списали вступительный взнос или mensalidade, потребуйте возврат пропорционально правилам DL 24/2014.',
          'Сохраните comprovativo de envio и копию письма.'
        ] },
        { kind: 'warning', text: 'Если вы подписали договор лично в помещении фитнес-клуба, 14-дневный отказ по DL 24/2014 обычно не применяется. Тогда переходите к расторжению по justa causa или к переговорам.' }
      ]
    },
    {
      id: 'valid-grounds',
      title: '3. Основания для досрочного выхода из fidelização',
      content: [
        { kind: 'paragraph', text: 'У фитнес-клубов нет отдельного «иммигрантского» режима: применяются договор, общие правила гражданского права и защита потребителя. Практически сильные основания — те, из-за которых пользование клубом стало невозможным или чрезмерно обременительным.' },
        { kind: 'checklist', items: [
          'Болезнь, травма, беременность с медицинским запретом тренировок — declaração médica с указанием невозможности/противопоказания.',
          'Постоянная или длительная нетрудоспособность — relatório médico, baixa médica, hospital discharge.',
          'Безработица или резкое падение дохода — declaração do IEFP, carta de despedimento, доказательства прекращения contrato de trabalho.',
          'Переезд в другой город/страну, где нет клуба той же сети в разумной доступности — contrato de arrendamento, atestado de residência, contrato de trabalho abroad, билет/регистрация адреса.',
          'Существенное изменение условий клубом — закрытие ближайшего зала, сильное сокращение часов, отмена услуг, ради которых вы заключали договор.',
          'Непрозрачные или чрезмерные штрафы — например, требование оплатить 100% всех будущих mensalidades без реального ущерба клуба.',
          'Продажа договора с обещаниями, которых нет в письменных условиях — сохраняйте рекламу, сообщения менеджера, testemunhas.'
        ] },
        { kind: 'paragraph', text: 'DECO прямо рекомендует не ограничиваться устным разговором на ресепшене: заявление нужно делать письменно и с доказательствами. Чем лучше документы, тем выше шанс закрыть contrato без оплаты остатка fidelização.' }
      ]
    },
    {
      id: 'send-letter',
      title: '4. Отправьте carta registada com aviso de receção',
      content: [
        { kind: 'paragraph', text: 'Даже если клуб просит написать в приложение, безопасный путь — заказное письмо с уведомлением о вручении на юридический адрес компании. Email можно отправить параллельно, но carta registada проще доказывать в споре.' },
        { kind: 'checklist', items: [
          'В шапке: ваше имя, NIF, адрес, email, telefone, número de sócio/cliente.',
          'Адресат: юридическое лицо из договора или fatura, не только название бренда.',
          'Тема: «Resolução do contrato de prestação de serviços de ginásio por justa causa».',
          'Кратко опишите основание: doença, desemprego, mudança de residência или alteração das condições.',
          'Приложите копии доказательств, не оригиналы.',
          'Попросите прекратить cobrança с конкретной даты и подтвердить отсутствие долга.',
          'Попросите удалить/не использовать autorização de débito direto SEPA после даты расторжения.',
          'Укажите срок ответа: например, 10 рабочих дней.',
          'Сохраните копию письма, квитанцию CTT и aviso de receção.'
        ] },
        { kind: 'paragraph', text: 'Формулировка: «Venho resolver o contrato por justa causa, com efeitos a partir de [data], devido a [motivo], facto superveniente que impede a utilização normal dos serviços. Solicito a confirmação escrita do cancelamento e a cessação de quaisquer cobranças futuras.»' }
      ]
    },
    {
      id: 'payments-and-disputes',
      title: '5. Что делать со списаниями и угрозами долга',
      content: [
        { kind: 'paragraph', text: 'Не исчезайте молча и не просто блокируйте карту: это даёт клубу аргумент, что вы нарушили contrato без уведомления. Сначала отправьте расторжение, затем контролируйте débito direto.' },
        { kind: 'checklist', items: [
          'В homebanking отмените autorização de débito direto SEPA после отправки письма.',
          'Если списание уже прошло, запросите возврат у банка в сроки SEPA и параллельно спорьте с клубом письменно.',
          'Не подписывайте «acordo de pagamento», если не согласны с долгом: подпись может признать задолженность.',
          'Если требуют все mensalidades до конца fidelização, попросите юридическое основание и расчёт ущерба.',
          'Подайте жалобу в Livro de Reclamações eletrónico, если клуб игнорирует письмо или продолжает списывать.',
          'Обратитесь в Centro de Arbitragem de Conflitos de Consumo по месту жительства или месту клуба.',
          'Для сумм до нескольких тысяч евро арбитраж потребительских споров часто быстрее и дешевле суда.',
          'Если пришло cobrança/empresa de recuperação de créditos, отвечайте письменно: долг оспаривается, contrato расторгнут по justa causa, документы приложены.'
        ] },
        { kind: 'warning', text: 'Фитнес-клуб может спорить с вашей justa causa. Поэтому ключевое — доказать событие после заключения договора и реальную невозможность пользоваться услугой, а не просто «передумал/дорого/нет мотивации».' }
      ]
    }
  ],
  costs: [
    { label: 'Carta registada nacional', amountEURMin: 3, amountEURMax: 6, note: 'Ориентир за заказное письмо CTT; итог зависит от веса и aviso de receção.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Подача жалобы онлайн бесплатна.' },
    { label: 'Centro de Arbitragem de Conflitos de Consumo', amountEURMin: 0, amountEURMax: 30, note: 'Во многих центрах бесплатно или символический сбор; проверяйте тариф конкретного центра.' }
  ],
  sources: [
    {
      title: 'DECO PROteste: условия и спорные cláusulas в договорах ginásios',
      url: 'https://www.deco.proteste.pt/saude/exercicio-fisico/dossies/ginasios-conheca-clausulas-regulamentos',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 24/2014: дистанционные и внеофисные договоры, 14-дневное право livre resolução',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572450',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 446/85: cláusulas contratuais gerais и недопустимые условия',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/446-1985-397216',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico: официальная подача жалобы потребителя',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
