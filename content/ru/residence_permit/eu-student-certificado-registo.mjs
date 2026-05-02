export default {
  editorialVoice: 'hackportugal',
  id: 'eu-student-certificado-registo',
  categoryId: 'residence_permit',
  title: 'EU/Erasmus-студент: Certificado de Registo вместо визы D4',
  tldr: 'Гражданину ЕС/EEE/Швейцарии, который едет учиться в Португалию по Erasmus или на полный курс, не нужна виза D4 и не нужен ВНЖ через AIMA. Первые 3 месяца можно жить без регистрации, затем в течение 30 дней нужно запросить Certificado de Registo de Cidadão da União Europeia в Câmara Municipal по адресу проживания. Пошлина — 15 €. Обычно нужны паспорт/ID, подтверждение зачисления, адрес, EHIC/страховка и декларация о средствах.',
  tags: ['ue', 'erasmus', 'crue', 'студент'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'not-d4',
      title: 'Главное: вам не D4 и не AIMA',
      content: [
        { kind: 'paragraph', text: 'Если у вас гражданство ЕС, EEE или Швейцарии, вы пользуетесь свободой передвижения. Для учёбы в Португалии не оформляется национальная студенческая виза D4: D4 — для граждан третьих стран.' },
        { kind: 'paragraph', text: 'Ваш документ на проживание после первых 3 месяцев — Certificado de Registo de Cidadão da União Europeia, часто сокращают как CRUE или Certificado de Registo. Это не autorização de residência и не карточка ВНЖ.' },
        { kind: 'checklist', items: [
          'До 90 дней: можно находиться в Португалии без регистрации как гражданин ЕС/EEE/Швейцарии',
          'Если планируете жить более 3 месяцев: нужно зарегистрироваться',
          'Срок: в течение 30 дней после истечения первых 3 месяцев, то есть фактически до конца 4-го месяца',
          'Куда: Câmara Municipal по месту проживания; AIMA для этого сертификата не нужна',
          'Junta de Freguesia обычно нужна для atestado de residência или подтверждения адреса, но сам Certificado de Registo обычно выдаёт Câmara Municipal',
          'Пошлина за Certificado de Registo — 15 €',
          'Сертификат обычно действителен 5 лет или на заявленный срок проживания, если он меньше'
        ] },
        { kind: 'warning', text: 'Не подавайте на D4, если вы гражданин ЕС/EEE/Швейцарии. Консульская виза D4 и запись в AIMA относятся к студентам из третьих стран; для EU/Erasmus это лишний и неправильный маршрут.' }
      ]
    },
    {
      id: 'when-to-register',
      title: 'Когда идти за Certificado de Registo',
      content: [
        { kind: 'paragraph', text: 'Правило из Lei 37/2006: гражданин ЕС имеет право проживать в Португалии более 3 месяцев, если он учится, имеет медицинское покрытие и достаточные средства, чтобы не становиться необоснованной нагрузкой для социальной системы.' },
        { kind: 'checklist', items: [
          'День 1–90: легальное пребывание без отдельной регистрации',
          'День 91–120: окно для запроса Certificado de Registo',
          'Если приехали на семестр Erasmus более чем на 3 месяца — сертификат нужен',
          'Если программа ровно до 90 дней — сертификат обычно не требуется',
          'Если остаётесь после Erasmus на стажировку, работу или второй семестр — зарегистрируйтесь до конца 4-го месяца',
          'Если меняете муниципалитет, уточните в новой Câmara Municipal, нужно ли обновить адрес'
        ] },
        { kind: 'warning', text: 'За неподачу запроса на Certificado de Registo в установленный срок Lei 37/2006 предусматривает coima. На практике студентов чаще сначала просят оформить документ, но рассчитывать на это не стоит.' }
      ]
    },
    {
      id: 'documents',
      title: 'Документы для EU/Erasmus-студента',
      content: [
        { kind: 'paragraph', text: 'Список немного отличается по муниципалитетам. Перед визитом проверьте сайт своей Câmara Municipal или напишите в atendimento. Но базовый набор для студента почти везде одинаковый.' },
        { kind: 'checklist', items: [
          'Паспорт или national ID card страны ЕС/EEE/Швейцарии',
          'NIF, если уже есть; формально это не условие права на проживание, но муниципалитеты часто просят для записи/квитанции',
          'Подтверждение адреса в Португалии: договор аренды, declaração do senhorio, счёт за коммунальные услуги или atestado de residência от Junta de Freguesia',
          'Документ о зачислении: declaração de matrícula, acceptance letter, Erasmus learning agreement или справка университета',
          'EHIC — Cartão Europeu de Seguro de Doença — или частная медицинская страховка',
          'Декларация о достаточных средствах: часто это простая declaração sob compromisso de honra; иногда просят выписку банка или подтверждение стипендии',
          'Подтверждение оплаты пошлины 15 €, если Câmara просит оплатить заранее',
          'Контакты в Португалии: телефон и email'
        ] },
        { kind: 'paragraph', text: 'Для “достаточных средств” закон не устанавливает фиксированную сумму для EU-студента. На практике разумно иметь подтверждение стипендии Erasmus, помощи родителей или банковский баланс, покрывающий жильё и расходы. Для ориентира: SMN в 2026 году — 920 € в месяц, но это не официальный порог для CRUE.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать: Câmara, запись и получение',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-camara', title: '1. Найдите свою Câmara Municipal', content: [
            { kind: 'paragraph', text: 'Идите в Câmara Municipal по фактическому адресу проживания, а не по адресу университета, если это разные муниципалитеты. Например, живёте в Almada и учитесь в Lisboa — обычно обращаться нужно в Câmara Municipal de Almada.' }
          ] },
          { id: 'book-or-walk-in', title: '2. Уточните формат приёма', content: [
            { kind: 'paragraph', text: 'В малых городах часто принимают без записи. В Lisboa, Porto, Cascais, Oeiras и других загруженных муниципалитетах может быть обязательная marcação online или по телефону.' }
          ] },
          { id: 'bring-originals', title: '3. Возьмите оригиналы и копии', content: [
            { kind: 'paragraph', text: 'Сотрудник сверит личность, адрес и основание проживания. В большинстве случаев заявление заполняется на месте. Если адрес подтверждается через Junta de Freguesia, заранее получите atestado de residência.' }
          ] },
          { id: 'pay-fee', title: '4. Оплатите 15 €', content: [
            { kind: 'paragraph', text: 'Пошлина за выдачу Certificado de Registo — 15 €. Обычно можно оплатить картой или Multibanco, но в небольших муниципалитетах лучше иметь наличные.' }
          ] },
          { id: 'receive-certificate', title: '5. Получите бумажный сертификат', content: [
            { kind: 'paragraph', text: 'CRUE часто выдают сразу в день обращения. Это бумажный документ A4/сертификат, который нужно хранить: его могут просить банк, работодатель, Finanças, SNS, университетская служба или арендодатель.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-certificate',
      title: 'Что делать после получения',
      content: [
        { kind: 'paragraph', text: 'Certificado de Registo закрывает вопрос легального проживания как гражданина ЕС, но не заменяет остальные бытовые регистрации.' },
        { kind: 'checklist', items: [
          'Сохраните оригинал и скан CRUE в облаке',
          'Сообщите университету португальский адрес, если это требуется для Erasmus/bolsa',
          'Оформите или обновите NIF-адрес в Finanças, если стали налоговым резидентом',
          'Получите número de utente в SNS в Centro de Saúde, если планируете пользоваться государственной медициной',
          'Оформите NISS, если будете работать по contrato de trabalho или recibos verdes',
          'Если нашли работу, CRUE остаётся действительным: менять его на “рабочий ВНЖ” не нужно',
          'После 5 лет законного непрерывного проживания можно запрашивать Certificado de Residência Permanente para cidadão da UE/EEE/Suíça'
        ] },
        { kind: 'warning', text: 'CRUE не является португальским Cartão de Cidadão и не даёт португальское гражданство автоматически. Это только регистрация права проживания гражданина ЕС в Португалии.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de Registo de Cidadão da União Europeia', amountEUR: 15, note: 'Официальная пошлина за первичную выдачу CRUE' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 10, note: 'Зависит от Junta; иногда бесплатно, иногда несколько евро' },
    { label: 'Частная страховка, если нет EHIC', amountEURMin: 15, amountEURMax: 50, note: 'Ориентир за базовый студенческий/медицинский план в месяц' }
  ],
  sources: [
    {
      title: 'AIMA: Certificado de Registo para nacionais UE',
      url: 'https://aima.gov.pt/pt/nacionais-ue-e-familiares/nacionais-ue/certificado-de-registo-para-nacionais-ue',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: Certificado de residência permanente para cidadão da UE/EEE/Suíça',
      url: 'https://www2.gov.pt/servicos/pedir-o-certificado-de-residencia-permanente-para-cidadao-da-ue/eee/suica',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 37/2006: regime jurídico de entrada, permanência e residência de cidadãos da UE e familiares',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34517175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
