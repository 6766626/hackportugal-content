export default {
  editorialVoice: 'hackportugal',
  id: 'viver-em-comunidade-condominio',
  categoryId: 'housing_rent',
  title: 'Условия condomínio: quotas, assembleia, regulamento',
  tldr: 'Condomínio в Португалии — это не «добровольный чат жильцов», а юридический режим prédio em propriedade horizontal. Каждый собственник платит quotas по permilagem, обычно 20–100 € в месяц за квартиру, плюс взносы на obras. Ежегодная assembleia утверждает бюджет, отчёты, администратора и работы. Fundo comum de reserva обязателен: минимум 10% от годового бюджета. Арендатор обычно соблюдает regulamento, но голосует и отвечает перед condomínio собственник.',
  tags: ['condomínio', 'аренда', 'квартира', 'quotas'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-condominio',
      title: 'Что такое condomínio и кто за что отвечает',
      content: [
        { kind: 'paragraph', text: 'Condomínio возникает, когда здание разделено на самостоятельные фракции — квартиры, магазины, гаражи — и общие части: лестницы, лифты, крыша, фасад, стояки, входная дверь, двор. Юридическая база — Código Civil, art. 1414–1438-A, и Decreto-Lei 268/94.' },
        { kind: 'checklist', items: [
          'Condómino — собственник фракции, а не арендатор.',
          'Administrador do condomínio — выбранный управдом/компания, исполняет решения assembleia и собирает quotas.',
          'Assembleia de condóminos — собрание собственников, где утверждают бюджет, работы, отчёты и regulamento.',
          'Quotas — регулярные взносы на обслуживание здания: уборка, свет, лифт, страховка, мелкий ремонт.',
          'Fundo comum de reserva — обязательный резерв на крупные работы по общим частям.',
          'Regulamento do condomínio — внутренние правила дома: шум, мусор, животные, парковка, использование общих зон.',
          'Арендатор обязан соблюдать правила дома, но долги перед condomínio обычно остаются ответственностью собственника, если договор аренды не переложил часть расходов на арендатора.'
        ] },
        { kind: 'warning', text: 'Если вы снимаете квартиру, не подписывайте «condomínio incluído» на словах. В договоре аренды должно быть ясно: кто платит monthly quotas, кто платит obras extraordinárias, и включены ли гараж, лифт, бассейн, storage room.' }
      ]
    },
    {
      id: 'quotas-and-reserve',
      title: 'Quotas и fundo comum de reserva: сколько платить',
      content: [
        { kind: 'paragraph', text: 'Размер quotas не одинаковый для всех квартир. Обычно он считается по permilagem — доле вашей фракции в здании, указанной в caderneta predial / título constitutivo da propriedade horizontal. Большая квартира, гараж или терраса часто дают большую долю расходов.' },
        { kind: 'checklist', items: [
          'Типичный диапазон в обычном доме без бассейна и консьержа: 20–100 € в месяц за квартиру.',
          'Дом с лифтом, гаражом, садом, бассейном или portaria может стоить 100–250 €+ в месяц.',
          'Fundo comum de reserva обязателен по DL 268/94: минимум 10% от последнего годового бюджета condomínio.',
          'Деньги резерва используют для conservation works: крыша, фасад, стояки, лифт, structural repairs.',
          'Extra quotas возможны, если резерв не покрывает работы: например, фасад на 40 000 € делят между condóminos по permilagem.',
          'Просрочка quotas может привести к cobrança judicial; протокол assembleia с суммой долга является исполнительным документом при соблюдении требований закона.',
          'При покупке квартиры нотариус/банк обычно запрашивает declaração de dívida do condomínio — справку о долгах по взносам.'
        ] },
        { kind: 'warning', text: 'Низкая quota не всегда плюс. Если дом годами собирал по 10–15 € и не формировал резерв, новый собственник может быстро получить extra quota на крышу, лифт или фасад в тысячи евро.' }
      ]
    },
    {
      id: 'assembleia',
      title: 'Assembleia: когда проходит и как голосуют',
      content: [
        { kind: 'paragraph', text: 'Обычная annual assembleia собирается для утверждения счетов прошлого года и бюджета нового года. По Código Civil art. 1431 она проводится в первой половине января, но regulamento или решение condóminos может перенести обычное собрание на первый квартал.' },
        { kind: 'checklist', items: [
          'Созыв делает administrador письмом, email или другим согласованным способом с повесткой дня.',
          'Проверьте, есть ли доверенность: собственник может передать право голоса другому человеку.',
          'Голоса обычно считаются по permilagem, а не «одна квартира = один голос».',
          'Обычные решения принимаются большинством присутствующего капитала, если закон не требует большего.',
          'Работы по conservação общих частей обычно утверждаются assembleia; срочные работы administrador может заказать сам и потом отчитаться.',
          'Изменение título constitutivo, использование общих частей не по назначению или серьёзные строительные изменения могут требовать единогласия или квалифицированного большинства.',
          'Протокол assembleia — ata — нужно запросить и хранить: он подтверждает бюджет, quotas, долги и решения по obras.',
          'Если вы купили квартиру недавно, попросите последние 2–3 atas до сделки: там часто видны будущие расходы.'
        ] },
        { kind: 'paragraph', text: 'Для экспата практический минимум — узнать контакты administrador, дату следующей assembleia, размер monthly quota, saldo do fundo comum de reserva и есть ли approved works на ближайшие 12–24 месяца.' }
      ]
    },
    {
      id: 'regulamento',
      title: 'Regulamento: правила дома, шум, мусор, животные',
      content: [
        { kind: 'paragraph', text: 'Regulamento do condomínio обязателен, если в здании больше 4 condóminos. В нём фиксируют внутренний порядок: как пользоваться общими зонами, где хранить велосипеды, когда можно делать ремонт, что запрещено на фасаде и балконах.' },
        { kind: 'checklist', items: [
          'Шум: общий ночной период по Regulamento Geral do Ruído — с 23:00 до 07:00; муниципальные правила и полиция могут вмешиваться при нарушениях.',
          'Ремонт: часто разрешён только в рабочие дни и дневные часы; уточняйте правила Câmara Municipal и condomínio.',
          'Мусор: в Лиссабоне и других городах есть расписание выноса lixo indiferenciado, reciclagem и monos; штрафы возможны за неправильный вынос.',
          'Животные: condomínio не может произвольно запретить законное содержание домашних животных внутри вашей фракции, но может регулировать общие зоны, поводок, лифт, уборку.',
          'Фасад и балконы: кондиционер, маркиза, спутниковая тарелка, закрытие varanda часто требуют разрешения condomínio и иногда Câmara Municipal.',
          'Гараж: нельзя автоматически использовать parking place как склад, мастерскую или зарядку EV без соблюдения правил безопасности.',
          'Alojamento Local: отдельные ограничения зависят от закона, муниципальных зон и решений condomínio; не считайте, что квартира автоматически подходит под AL.'
        ] },
        { kind: 'warning', text: 'Правило из чата WhatsApp не равно regulamento. Просите письменный regulamento и atas. Но даже если правила плохо оформлены, общие нормы о шуме, безопасности, фасаде и общих частях всё равно действуют.' }
      ]
    },
    {
      id: 'renters-buyers-check',
      title: 'Чек-лист для арендатора и покупателя',
      content: [
        { kind: 'substeps', items: [
          { id: 'tenant', title: 'Если вы арендуете', content: [
            { kind: 'checklist', items: [
              'В договоре аренды проверьте пункт despesas de condomínio.',
              'Обычные quotas чаще платит собственник, но договор может переложить их на арендатора — это должно быть написано.',
              'Extra quotas на фасад, крышу, лифт и структурные работы обычно должны оставаться за собственником.',
              'Попросите regulamento до въезда, особенно если есть собака, велосипед, гараж, кондиционер или планы ремонта.',
              'Уточните правила шума, лифта при переезде, вывоза мебели и использования garagem/arrecadação.',
              'Если administrador пишет вам напрямую о долгах, пересылайте собственнику и управляющему агенту; юридический должник обычно condómino.'
            ] }
          ] },
          { id: 'buyer', title: 'Если вы покупаете', content: [
            { kind: 'checklist', items: [
              'Запросите declaração de não dívida ao condomínio.',
              'Попросите последние atas assembleia за 2–3 года.',
              'Проверьте monthly quota и saldo do fundo comum de reserva.',
              'Ищите в atas слова obras, infiltrações, fachada, telhado, elevador, garagem, dívida.',
              'Сравните состояние здания с размером резерва: старый дом + маленький фонд = риск extra quota.',
              'Проверьте, есть ли профессиональный administrador или всё держится на одном соседe-добровольце.',
              'Если покупаете top floor или basement, отдельно проверяйте протечки крыши, terraço, humidade и responsabilidades comuns.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'disputes',
      title: 'Споры: сначала ata и administrador, потом Julgado de Paz',
      content: [
        { kind: 'paragraph', text: 'Типичная цепочка: сначала пишете administrador с фактами, фото, датами и ссылкой на regulamento; затем вопрос выносится на assembleia; если не решается — жалоба в Câmara Municipal, полиция при шуме/опасности, или civil claim.' },
        { kind: 'checklist', items: [
          'По шуму ночью: фиксируйте даты, видео/аудио для себя, вызывайте PSP/GNR при систематических нарушениях.',
          'По протечкам: письменно уведомите собственника, administrador и соседа сверху; просите vistoria и страховую.',
          'По долгам condomínio: administrador действует против собственника-должника, не против арендатора без договорной обязанности.',
          'По незаконным работам в общих частях: требуйте ata с разрешением и, если затронут фасад/структура, проверку Câmara Municipal.',
          'По мелким гражданским спорам можно идти в Julgado de Paz, если он есть в вашей территории и сумма в пределах компетенции.',
          'Julgados de Paz рассматривают гражданские дела до 15 000 €; стандартная taxa de justiça — 70 € за процесс, обычно делится между сторонами по исходу дела.'
        ] },
        { kind: 'warning', text: 'Не удерживайте rent или condominium fee самовольно без юридической консультации. В Португалии это часто ухудшает позицию: сначала письменное уведомление, доказательства, prazo para resolver, затем официальная процедура.' }
      ]
    }
  ],
  costs: [
    { label: 'Обычные monthly quotas', amountEURMin: 20, amountEURMax: 100, note: 'Типичный диапазон для квартиры в обычном доме; не законный тариф, зависит от permilagem, лифта, гаража, услуг и города.' },
    { label: 'Fundo comum de reserva', amountEURMin: 0, amountEURMax: 0, note: 'Минимум 10% от годового бюджета condomínio; платится как часть quotas или отдельной строкой.' },
    { label: 'Julgado de Paz', amountEUR: 70, note: 'Стандартная taxa de justiça за процесс; дела до 15 000 €, если Julgado de Paz компетентен территориально и по предмету.' }
  ],
  sources: [
    { title: 'Código Civil — propriedade horizontal, art. 1414–1438-A', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 268/94 — regime do condomínio, fundo comum de reserva и cobrança', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/268-1994-619403', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Lisboa — ruído, regras municipais и контакты', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Julgados de Paz — competência, custos и funcionamento', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
