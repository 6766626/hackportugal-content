export default {
  editorialVoice: 'hackportugal',
  id: 'apoio-aleitamento-materno',
  categoryId: 'healthcare',
  title: 'Apoio à amamentação: поддержка грудного вскармливания в SNS',
  tldr: 'В Португалии помощь с грудным вскармливанием можно получить бесплатно через SNS: в Centro de Saúde у enfermeira de saúde materna/infantil, в роддоме через Cantinho da Amamentação и по телефону Linha SOS Amamentação 213 880 915 (пн–пт 10:00–18:00). Нужен número de utente, но в срочных ситуациях помощь не должны откладывать. На работе Código do Trabalho art. 47 даёт до 2 часов в день на amamentação/aleitação: обычно 2 периода по 1 часу, минимум до 1 года ребёнка, а при фактическом грудном вскармливании — дольше с подтверждением.',
  tags: ['amamentação', 'sns', 'роды', 'работа'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-sns-offers',
      title: 'Что даёт SNS при грудном вскармливании',
      content: [
        { kind: 'paragraph', text: 'Apoio à amamentação — это не отдельная платная услуга, а часть наблюдения беременности, послеродового периода и здоровья ребёнка в SNS. Основная точка входа — ваш Centro de Saúde: consulta de enfermagem de saúde materna, consulta de saúde infantil и семейный врач.' },
        { kind: 'checklist', items: ['проверка прикладывания и позиции ребёнка', 'помощь при боли, трещинах, нагрубании груди', 'оценка набора веса ребёнка и количества мокрых подгузников', 'план докорма, если он действительно нужен', 'поддержка при сцеживании и хранении молока', 'советы при возвращении на работу', 'направление в больницу или urgência при подозрении на мастит, обезвоживание ребёнка или сильную потерю веса'] },
        { kind: 'warning', text: 'Если у матери температура, озноб, красная болезненная зона на груди, гнойные выделения, ребёнок вялый, плохо ест или мало мочится — не ждите плановой консультации. Звоните SNS 24 или обращайтесь в urgência.' }
      ]
    },
    {
      id: 'where-to-go',
      title: 'Куда обращаться: Centro de Saúde, роддом, линия SOS',
      content: [
        { kind: 'substeps', items: [
          { id: 'centro-saude', title: '1. Centro de Saúde по адресу проживания', content: [
            { kind: 'paragraph', text: 'Попросите consulta de enfermagem para apoio à amamentação или consulta de saúde infantil. Если вы уже закреплены за unidade de saúde familiar, пишите через Portal SNS 24, звоните в секретариат или приходите лично.' },
            { kind: 'checklist', items: ['número de utente матери', 'número de utente ребёнка, если уже выдан', 'Cartão de Cidadão / ВНЖ / паспорт', 'Boletim de Saúde da Grávida или выписка из роддома', 'Boletim de Saúde Infantil e Juvenil ребёнка', 'список вопросов: боль, частота кормлений, докорм, вес, сцеживание'] }
          ]},
          { id: 'hospital', title: '2. Cantinho da Amamentação в роддоме или больнице', content: [
            { kind: 'paragraph', text: 'Во многих maternidades и hospitais SNS есть Cantinho da Amamentação — кабинет или команда, где помогают с лактацией после выписки. Обычно это особенно полезно в первые 2–6 недель, когда возникают трещины, застой, проблемы с прикладыванием или докормом.' }
          ]},
          { id: 'phone-app', title: '3. Linha SOS Amamentação и приложение', content: [
            { kind: 'paragraph', text: 'Linha SOS Amamentação: 213 880 915 (пн–пт 10:00–18:00). Это линия Associação SOS Amamentação, где консультируют по типичным проблемам кормления. Это лиссабонский городской номер, звонок оплачивается по обычному тарифу. Также доступно приложение SOS-Amamentação: удобно фиксировать кормления и быстро искать контакты поддержки.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-ask-in-portuguese',
      title: 'Как сформулировать запрос по-португальски',
      content: [
        { kind: 'paragraph', text: 'В SNS лучше говорить конкретно: не «мне нужен консультант», а описать симптом и попросить enfermagem de apoio à amamentação. Так секретариат быстрее направит к нужной медсестре или врачу.' },
        { kind: 'checklist', items: ['“Preciso de apoio à amamentação.” — Мне нужна помощь с грудным вскармливанием.', '“Tenho dor ao amamentar.” — Больно кормить.', '“O bebé não pega bem na mama.” — Ребёнок плохо захватывает грудь.', '“Tenho fissuras no mamilo.” — Трещины соска.', '“A mama está muito dura e dolorosa.” — Грудь твёрдая и болезненная.', '“Tenho febre e dor na mama.” — Температура и боль в груди.', '“O bebé perdeu peso / não está a ganhar peso.” — Ребёнок потерял вес / не набирает.', '“Preciso de ajuda para extrair e conservar leite.” — Нужна помощь со сцеживанием и хранением молока.'] },
        { kind: 'warning', text: 'Не соглашайтесь автоматически на смесь только потому, что «так проще». Если ребёнок стабилен, попросите план: сколько докорма, чем давать, как часто контроль веса и как сохранить лактацию.' }
      ]
    },
    {
      id: 'work-rights',
      title: 'Право на перерывы на работе: CT art. 47',
      content: [
        { kind: 'paragraph', text: 'Código do Trabalho art. 47 даёт работнице право на dispensa para amamentação — освобождение от работы для кормления грудью. Если грудного вскармливания нет, мать или отец могут использовать dispensa para aleitação до достижения ребёнком 1 года.' },
        { kind: 'checklist', items: ['стандартно — 2 периода в день максимум по 1 часу каждый, то есть до 2 часов в день', 'иной график можно согласовать с работодателем письменно', 'при близнецах добавляется 30 минут в день за каждого ребёнка сверх первого', 'для неполного рабочего дня действует пропорция, но минимум 30 минут в день', 'перерывы считаются рабочим временем и не должны уменьшать зарплату', 'если ребёнку больше 1 года и мать продолжает кормить грудью, работодатель может запросить медицинское подтверждение', 'уведомьте работодателя заранее, обычно минимум за 10 дней, со ссылкой на amamentação/aleitação'] },
        { kind: 'warning', text: 'Работодатель не может заменить эти 2 часа “доброй волей”, отпуском или неоплачиваемым временем. Если давят, фиксируйте письменно и обращайтесь в ACT — Autoridade para as Condições do Trabalho.' }
      ]
    },
    {
      id: 'expat-practicalities',
      title: 'Что важно экспатам',
      content: [
        { kind: 'paragraph', text: 'Лучше оформить número de utente матери и ребёнка как можно раньше. Ребёнок, родившийся в Португалии, получает медицинское наблюдение через SNS; регистрацию в Centro de Saúde обычно делают по месту жительства семьи.' },
        { kind: 'checklist', items: ['если utente ещё нет, всё равно обращайтесь в Centro de Saúde или hospital — особенно в первые дни после родов', 'возьмите выписку из роддома, boletim ребёнка и документы родителей', 'в частных роддомах тоже просите relatório de alta для передачи в SNS', 'если не говорите по-португальски, заранее подготовьте фразы или придите с переводчиком', 'при плановом визите возьмите ребёнка, подгузники, пелёнку и бутылочку/сцеженное молоко, если докармливаете', 'если используете молокоотсос, можно показать модель и режим сцеживания медсестре', 'при депрессии, тревоге или ощущении “я не справляюсь” просите также consulta de saúde mental/perinatal'] }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de enfermagem / apoio à amamentação в SNS', amountEUR: 0, note: 'Для пользователей SNS с número de utente; в срочных ситуациях помощь не должна откладываться из-за бюрократии.' },
    { label: 'Linha SOS Amamentação 213 880 915 (пн–пт 10:00–18:00)', amountEUR: 0, note: 'Телефонная линия поддержки грудного вскармливания; лиссабонский городской номер, звонок по обычному тарифу.' },
    { label: 'Частный консультант по лактации', amountEURMin: 40, amountEURMax: 100, note: 'Ориентир по рынку за визит/онлайн-консультацию; не заменяет медицинскую помощь при температуре, мастите или проблемах с весом ребёнка.' }
  ],
  sources: [
    { title: 'DGS — рекомендации и материалы по aleitamento materno', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — gravidez, pós-parto, bebé и доступ к услугам SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Trabalho — art. 47, dispensa para amamentação ou aleitação', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Associação SOS Amamentação — Linha SOS Amamentação 213 880 915', url: 'https://www.sosamamentacao.org.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
