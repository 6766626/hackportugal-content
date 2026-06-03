export default {
  editorialVoice: 'hackportugal',
  id: 'judo-karate-criancas',
  categoryId: 'education_children',
  title: 'Judo, Karate и единоборства для детей',
  tldr: 'В Португалии детские секции Judo, Karate, Taekwondo и BJJ обычно принимают с 4–6 лет, а официальные соревнования чаще начинаются примерно с 8 лет — в зависимости от федерации и клуба. Муниципальные и школьные клубы стоят около 25–35 €/мес, частные academias — 35–50 €/мес, плюс kimono/dobok 25–70 €, лицензия и страховка. Проверьте, связан ли клуб с FPJ или FNK-P, есть ли seguro desportivo и exame médico-desportivo.',
  tags: ['judo', 'karate', 'дети', 'спорт'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'choose-sport',
      title: '1. Выберите вид единоборств под возраст и характер ребёнка',
      content: [
        { kind: 'paragraph', text: 'В Португалии самые доступные варианты для детей — Judo, Karate, Taekwondo и Brazilian Jiu-Jitsu. В крупных городах выбор шире, в небольших municípios чаще есть хотя бы judo или karate при associação desportiva, escola, ginásio или pavilhão municipal.' },
        { kind: 'checklist', items: [
          'Judo — много падений, захватов, дисциплины и физической координации; хороший выбор для 5–10 лет.',
          'Karate — стойки, удары, kata, контроль дистанции; подходит детям, которым важна структура и экзамены на пояса.',
          'Taekwondo — больше ударов ногами, растяжки и динамики; часто нравится активным детям.',
          'BJJ — борьба в партере, контроль и техника; полезно для самообороны, но клубы дороже и не везде есть детские группы.',
          'Для 4–6 лет ищите не “боевой спорт”, а turma infantil / iniciação с игровой моторикой.',
          'Для 7–12 лет уже важны регулярность, техника, безопасные спарринги и тренерская коммуникация с родителями.',
          'Если ребёнок тревожный или не говорит по-португальски, начните с пробной тренировки без давления на соревнования.'
        ] }
      ]
    },
    {
      id: 'check-club',
      title: '2. Проверьте клуб: федерация, страховка, тренер',
      content: [
        { kind: 'paragraph', text: 'Не выбирайте секцию только по близости к дому. В детских единоборствах важнее тренер, безопасность и связь клуба с федерацией: Federação Portuguesa de Judo (FPJ), Federação Nacional de Karate - Portugal (FNK-P) или соответствующая федерация по Taekwondo/BJJ.' },
        { kind: 'checklist', items: [
          'Спросите, зарегистрирован ли клуб в FPJ или FNK-P и может ли ребёнок получить licença federativa.',
          'Уточните, включён ли seguro desportivo в годовой взнос или оплачивается отдельно.',
          'Попросите имя тренера и его graduação / cédula de treinador, если клуб участвует в официальных соревнованиях.',
          'Посмотрите тренировку: дети должны падать на tatami, а не на твёрдом полу.',
          'В группе до 8 лет тренировка должна быть игровой, без жёстких спаррингов и “побед любой ценой”.',
          'Проверьте, есть ли разделение по возрасту: 4–6, 7–9, 10–12, adolescentes.',
          'Спросите, как клуб реагирует на травмы и есть ли аптечка/план действий.',
          'Уточните язык: в туристических зонах тренеры иногда говорят по-английски, но базовые команды будут на португальском.'
        ] },
        { kind: 'warning', text: 'Если клуб не может объяснить, какая страховка покрывает ребёнка, кто тренер и через какую федерацию проходят экзамены/соревнования, лучше искать другой вариант.' }
      ]
    },
    {
      id: 'costs-and-documents',
      title: '3. Бюджет и документы в 2026',
      content: [
        { kind: 'paragraph', text: 'Цены сильно зависят от города и формата. Муниципальные секции дешевле, но там меньше расписаний. Частные academias удобнее по времени, но дороже. Перед оплатой попросите пробное занятие: aula experimental часто бесплатная или стоит 5–10 €.' },
        { kind: 'checklist', items: [
          'Mensalidade: обычно 25–50 €/мес за 2–3 тренировки в неделю.',
          'Inscrição: часто 10–30 € при вступлении в клуб.',
          'Kimono / gi / dobok: детский комплект примерно 25–70 €; для BJJ качественный gi может быть дороже.',
          'Пояса и экзамены: иногда включены, иногда 10–30 € за exame de graduação.',
          'Licença federativa + seguro desportivo: сумма зависит от федерации, возраста и клуба; уточняйте ежегодно.',
          'Exame médico-desportivo: для федеративных спортсменов клуб может потребовать ежегодную справку, обычно у врача или clínica médica.',
          'Соревнования: inscrição на torneio часто оплачивается отдельно, плюс дорога и питание.',
          'Документы: имя ребёнка, дата рождения, NIF, contacto dos encarregados de educação, иногда número de utente SNS и фото.'
        ] },
        { kind: 'paragraph', text: 'Если ребёнок только переехал и ещё не имеет NIF или número de utente, многие частные клубы всё равно примут на пробные занятия, но для лицензии, страховки и официальных турниров данные обычно понадобятся.' }
      ]
    },
    {
      id: 'competitions',
      title: '4. Соревнования: обычно не раньше 8 лет',
      content: [
        { kind: 'paragraph', text: 'В детском спорте Португалии соревнования делят по возрастным escalões. В judo и karate первые официальные форматы для детей обычно начинаются около 8 лет, но точный возраст, правила контакта и формат зависят от федерации, associação regional и конкретного calendário.' },
        { kind: 'checklist', items: [
          'До 8 лет чаще проводят festivais, encontros, aulas abertas и игровые eventos sem pressão competitiva.',
          'С 8 лет возможны первые турниры с мягкими правилами и ограничениями по контакту.',
          'Для участия обычно нужны licença federativa, seguro desportivo и иногда exame médico-desportivo.',
          'Пояс сам по себе не гарантирует допуск: решает тренер и регламент турнира.',
          'Не записывайте ребёнка на соревнования, если он ещё не умеет безопасно падать, останавливаться по команде и соблюдать правила.',
          'Уточняйте у клуба calendário distrital/regional: турниры часто проходят по выходным и требуют поездок.'
        ] },
        { kind: 'warning', text: 'Соревнования не обязательны. Хороший детский клуб не должен давить на ребёнка ради медалей, особенно в первый год адаптации в Португалии.' }
      ]
    },
    {
      id: 'where-to-find',
      title: '5. Где искать секцию рядом с домом',
      content: [
        { kind: 'paragraph', text: 'Начните с официальных сайтов федераций и местных каналов. В Португалии многие секции работают при небольших associações, поэтому не у всех есть хороший сайт; часто актуальнее Facebook, Instagram или расписание pavilhão municipal.' },
        { kind: 'checklist', items: [
          'FPJ: ищите clubes, associações distritais и календарь judo.',
          'FNK-P: проверяйте clubes и associações по karate.',
          'Спросите в Câmara Municipal или Junta de Freguesia про atividades desportivas para crianças.',
          'Проверьте escola / ATL: у многих школ есть after-school karate, judo или taekwondo.',
          'Ищите по словам “judo crianças”, “karate infantil”, “taekwondo kids”, “jiu-jitsu crianças” + название города.',
          'Попросите 1–2 пробные тренировки в разных клубах и сравните атмосферу.',
          'Смотрите не только цену, но и дорогу: секция 2–3 раза в неделю должна быть логистически реальной.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Муниципальный или школьный клуб', amountEURMin: 25, amountEURMax: 35, note: 'Обычно 2 тренировки в неделю; мест может быть мало.' },
    { label: 'Частная academia / clube', amountEURMin: 35, amountEURMax: 50, note: 'Чаще 2–3 тренировки в неделю; BJJ в крупных городах может стоить выше.' },
    { label: 'Детское kimono / gi / dobok', amountEURMin: 25, amountEURMax: 70, note: 'Зависит от размера, плотности ткани и вида спорта.' },
    { label: 'Inscrição в клуб', amountEURMin: 10, amountEURMax: 30, note: 'Разовый вступительный платёж, не везде применяется.' },
    { label: 'Экзамен на пояс', amountEURMin: 10, amountEURMax: 30, note: 'Тариф устанавливает клуб/ассоциация; иногда включён в mensalidade.' }
  ],
  sources: [
    { title: 'Federação Portuguesa de Judo (FPJ) — клубы, календарь и федеративная информация', url: 'https://www.fpj.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Federação Nacional de Karate - Portugal (FNK-P) — структура, clubes и eventos', url: 'https://www.fnkp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'IPDJ — enquadramento do desporto federado e seguro desportivo', url: 'https://ipdj.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
