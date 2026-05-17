export default {
  editorialVoice: 'hackportugal',
  id: 'rrc-oncologia-sns',
  categoryId: 'healthcare',
  title: 'Онкологический маршрут SNS: Rede de Referenciação Oncológica и TMRG',
  tldr: 'При подозрении на рак маршрут в SNS начинается у Médico de Família: он фиксирует suspeita, назначает первичные exames и направляет через CTH/SIGA в больницу сети Rede de Referenciação Oncológica. Для срочных случаев используется приоритет P1 / Alerta-Oncológico. Юридические TMRG для первой больничной консультации: 30 дней для muito prioritária, 60 для prioritária, 120 для normal. Если срок сорван — жалоба в ERS и Livro de Reclamações.',
  tags: ['онкология', 'sns', 'tmrg', 'aima', 'ers'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'route',
      title: 'Как устроен маршрут: от MGF до consulta decisão terapêutica',
      content: [
        { kind: 'paragraph', text: 'В SNS онкологический маршрут не начинается с самостоятельной записи в IPO. Нормальный вход — через Médico de Família / MGF в Centro de Saúde или через urgência, если симптомы острые. MGF оформляет подозрение, назначает базовые exames и делает электронное направление в больницу через CTH/SIGA.' },
        { kind: 'paragraph', text: 'Дальше направление попадает в hospital da área de referenciação — больницу, закреплённую за вашим адресом и диагнозом в Rede de Referenciação Hospitalar de Oncologia Médica. Для Лиссабона это может быть, например, IPO Lisboa, CHULN / Hospital de Santa Maria, CHLO, ULS São José и другие центры в зависимости от опухоли, места проживания и доступной специализации.' },
        { kind: 'checklist', items: [
          'MGF фиксирует sintomas de alarme: кровь, необъяснимая потеря веса, опухоль, стойкая боль, изменения родинок, патологические анализы',
          'MGF назначает первичные exames: análises, ecografia, RX, mamografia, colonoscopia, TAC — по клинической ситуации',
          'Если подозрение серьёзное, направление маркируется как muito prioritário / P1 или через Alerta-Oncológico, если этот канал доступен в регионе',
          'Больница делает triagem do pedido: принимает, меняет приоритет или возвращает запрос с просьбой о дополнительных данных',
          'После первой consulta hospitalar назначают staging: TAC, RM, PET, biópsia, anatomia patológica, marcadores',
          'Случай выносят на reunião multidisciplinar / consulta de grupo',
          'После этого проводится consulta de decisão terapêutica: пациенту объясняют план — cirurgia, quimioterapia, radioterapia, imunoterapia, vigilância или комбинация'
        ] }
      ]
    },
    {
      id: 'rede-referencia',
      title: 'Что такое Rede de Referenciação Oncológica',
      content: [
        { kind: 'paragraph', text: 'Rede de Referenciação Hospitalar de Oncologia Médica — это официальная карта потоков пациентов между SNS-больницами. Идея простая: не каждая больница должна лечить любой рак. Простые этапы могут идти в местной ULS, сложные случаи — в региональный или национальный центр, включая IPO.' },
        { kind: 'paragraph', text: 'Сеть учитывает тип опухоли, стадию, необходимость cirurgia complexa, radioterapia, medicina nuclear, hematologia, трансплантации, клинических trials и мультидисциплинарных команд. Поэтому “хочу именно в IPO” не всегда автоматически сработает: врач должен обосновать направление, а больница — принять его по сети.' },
        { kind: 'checklist', items: [
          'IPO Lisboa, IPO Porto и IPO Coimbra — специализированные онкологические институты, но не единственная точка лечения рака',
          'CHULN / Hospital de Santa Maria лечит многие онкологические случаи и имеет онкологические, хирургические и радиотерапевтические команды',
          'ULS и hospitais centrais могут вести диагностику, операцию, химиотерапию или follow-up ближе к дому',
          'Пациента могут перевести между больницами, если нужна технология или команда, которой нет в исходной ULS',
          'Правильная фраза для врача: “pode referenciar como suspeita oncológica / prioridade P1 se clinicamente indicado?”',
          'Для второго мнения в SNS обычно нужен новый pedido / referenciação, а не просто звонок в другую больницу'
        ] },
        { kind: 'warning', text: 'Rede de Referenciação — не частная страховка и не свободный выбор любой больницы. Но если есть клинические основания — редкая опухоль, сложная операция, отсутствие нужного лечения в местной ULS — просите MGF или hospital specialist прямо указать это в referral.' }
      ]
    },
    {
      id: 'tmrg',
      title: 'TMRG: какие сроки можно требовать',
      content: [
        { kind: 'paragraph', text: 'TMRG — Tempos Máximos de Resposta Garantidos, гарантированные максимальные сроки ответа в SNS для плановой помощи. Они отсчитываются не “с момента, когда вы испугались симптомов”, а с момента регистрации правильного pedido в системе SNS: например, referral от MGF в CTH/SIGA или hospital order.' },
        { kind: 'checklist', items: [
          'Primeira consulta de especialidade hospitalar muito prioritária: до 30 календарных дней',
          'Primeira consulta de especialidade hospitalar prioritária: до 60 календарных дней',
          'Primeira consulta de especialidade hospitalar normal: до 120 календарных дней',
          'При подозрении на рак врач должен обосновать приоритет клинически; само слово “cancro” не гарантирует автоматический P1',
          'P1 / Alerta-Oncológico — практический ускоренный канал для suspeita oncológica, но юридически проверяйте, какой приоритет стоит в SIGA',
          'Если hospital triage снизил приоритет, просите письменное объяснение или повторную оценку через MGF',
          'Для urgência TMRG плановой консультации не применяется: если есть красные флаги, надо ехать в urgência или звонить SNS 24 / 808 24 24 24'
        ] },
        { kind: 'warning', text: 'Не ждите 30 дней молча, если симптомы ухудшаются: кровотечение, желтуха, неврологический дефицит, сильная одышка, кишечная непроходимость, резкая слабость, высокая температура на фоне лечения — это повод для urgência / 112, а не спор о TMRG.' }
      ]
    },
    {
      id: 'documents',
      title: 'Что подготовить перед визитом к MGF или в больницу',
      content: [
        { kind: 'paragraph', text: 'В онкологии скорость часто теряется не из-за отсутствия врача, а из-за неполного пакета: старые exames, нет текста заключения, снимки только в частном приложении, нет данных о лекарствах. Соберите всё заранее и принесите в бумаге + PDF.' },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF и документ личности: ВНЖ, Cartão de Cidadão, паспорт или EU-регистрация',
          'Список симптомов с датами: когда началось, что ухудшается, вес, температура, боль, кровотечение',
          'Все análises, relatórios de ecografia / TAC / RM / mamografia / colonoscopia',
          'Изображения exames на CD, USB или ссылкой, если частная клиника выдаёт доступ',
          'Результаты biópsia / anatomia patológica, если уже есть',
          'Список лекарств: антикоагулянты, гормоны, иммунодепрессанты, добавки',
          'Аллергии, хронические болезни, операции, семейная история рака',
          'Контактный телефон, который реально отвечает на португальские звонки',
          'Если плохо говорите по-португальски — переводчик или заранее написанная заметка на PT'
        ] }
      ]
    },
    {
      id: 'if-delayed',
      title: 'Если направление зависло или срок TMRG нарушен',
      content: [
        { kind: 'paragraph', text: 'Первое действие — не жалоба, а проверка статуса. Попросите в Centro de Saúde распечатку или подтверждение, что referral действительно отправлен, с датой, specialty, hospital и priority. Частая проблема: pedido вернули врачу, запрос ждёт доп. exames или телефон пациента не отвечает.' },
        { kind: 'substeps', items: [
          { id: 'check-referral', title: '1. Проверить pedido в Centro de Saúde', content: [
            { kind: 'checklist', items: [
              'Дата отправки referral',
              'Специальность: Oncologia Médica, Cirurgia, Gastro, Pneumologia, Ginecologia и т.п.',
              'Больница назначения',
              'Приоритет: muito prioritária / prioritária / normal',
              'Есть ли nota clínica с suspeita oncológica',
              'Не был ли pedido devolvido pela triagem hospitalar'
            ] }
          ] },
          { id: 'ask-retriage', title: '2. Просить retriagem или новый referral', content: [
            { kind: 'paragraph', text: 'Если появились новые симптомы или частный exame подтвердил подозрение, MGF может добавить данные и попросить retriagem. Важно: фраза “tenho medo” слабее, чем конкретное “perda de 8 kg em 2 meses + anemia + sangue nas fezes + colonoscopia com lesão suspeita”.' }
          ] },
          { id: 'complain', title: '3. Жаловаться, если TMRG превышен', content: [
            { kind: 'checklist', items: [
              'Подайте reclamação в Livro de Reclamações físico или eletrónico больницы / ULS',
              'Укажите дату referral, specialty, приоритет и TMRG, который превышен',
              'Приложите доказательства: SMS, письма, распечатки, exames',
              'Отдельно подайте жалобу в ERS — Entidade Reguladora da Saúde',
              'Попросите не компенсацию, а конкретное действие: marcação de consulta / reavaliação da prioridade / transferência para outra unidade'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Жалоба в ERS не заменяет медицинскую помощь. Если состояние быстро ухудшается, параллельно обращайтесь в urgência. В онкологии административный спор и клиническая срочность должны идти одновременно.' }
      ]
    },
    {
      id: 'private-parallel',
      title: 'Можно ли ускориться через частный сектор',
      content: [
        { kind: 'paragraph', text: 'Да, многие пациенты делают часть диагностики privately: colonoscopia, RM, PET, biópsia, second opinion. Это может ускорить факты для MGF и hospital triage, но не создаёт автоматического права на лечение в конкретном IPO. Чтобы частный результат “сработал” в SNS, нужен relatório médico и, желательно, цифровые изображения.' },
        { kind: 'checklist', items: [
          'Просите не только снимок, но и relatório médico assinado',
          'Для biópsia забирайте полный anatomia patológica report',
          'Спросите, можно ли передать lâminas / blocos para revisão no SNS',
          'Принесите результаты MGF и попросите anexar ao pedido CTH/SIGA',
          'Если частный врач пишет письмо, пусть укажет suspected diagnosis, ICD/термины PT и urgency',
          'Не начинайте лечение privately без понимания, примет ли SNS уже начатую схему и где будет follow-up'
        ] },
        { kind: 'warning', text: 'Частная диагностика полезна, но может стоить сотни евро и не всегда покрывается страховкой при pre-existing condition. Перед exame уточняйте copagamento, autorização prévia и срок выдачи relatório.' }
      ]
    }
  ],
  costs: [
    { label: 'Консультации и лечение по маршруту SNS с número de utente', amountEUR: 0, note: 'Taxas moderadoras в SNS в основном отменены; онкологический маршрут через SNS не должен требовать оплаты консультации.' },
    { label: 'Частная second opinion у онколога', amountEURMin: 80, amountEURMax: 200, note: 'Ориентир по частному рынку; цена зависит от клиники и врача, страховка может покрывать частично.' },
    { label: 'Частная RM / TAC / colonoscopia без покрытия', amountEURMin: 150, amountEURMax: 800, note: 'Диапазон широкий; всегда просите orçamento и срок relatório до записи.' }
  ],
  sources: [
    {
      title: 'SNS — Programa Nacional para as Doenças Oncológicas',
      url: 'https://www.sns.gov.pt/institucional/programas-de-saude-prioritarios/programa-nacional-para-as-doencas-oncologicas/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'ePortugal — Tempos Máximos de Resposta Garantidos (TMRG)',
      url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/tempos-maximos-de-resposta-garantidos-tmrg',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS — Reclamações dos utentes dos serviços de saúde',
      url: 'https://www.ers.pt/pt/utentes/reclamacoes/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria n.º 153/2017 — TMRG no SNS',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/153-2017-106988080',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
