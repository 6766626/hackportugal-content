export default {
  editorialVoice: 'hackportugal',
  id: 'cantina-escolar-precos',
  categoryId: 'education_children',
  title: 'Школьное питание Cantina: цены и социальный escalão',
  tldr: 'Cantina escolar — школьная столовая в госшколах. В 2025/2026 учебном году цена зависит от цикла школы, município и ASE: в 2.º/3.º ciclo обычно escalão A — бесплатно, B — 0,73 €, без ASE — около 1,85 €; в 1.º ciclo питание часто администрирует Câmara Municipal, и тариф может быть от 1,46 € для социального escalão до 4,05 € без поддержки. ASE запрашивают через Portal das Matrículas или в secretaria школы; решение привязано к escalão do abono de família.',
  tags: ['cantina', 'ase', 'школа', 'дети'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cantina',
      title: 'Что такое Cantina escolar',
      content: [
        { kind: 'paragraph', text: 'Cantina escolar — школьная столовая. В государственных школах обед обычно включает суп, основное блюдо, хлеб, фрукт или десерт и воду. Меню публикуется школой, agrupamento de escolas или Câmara Municipal.' },
        { kind: 'paragraph', text: 'В Португалии питание не всегда автоматически «включено в школу». Родитель обычно должен записать ребёнка на refeições, пополнить школьный счёт и заранее отметить дни питания в системе школы, município или через карточку aluno.' },
        { kind: 'warning', text: 'Цены для 1.º ciclo и pré-escolar часто устанавливает Câmara Municipal, а для 2.º/3.º ciclo и secundário — agrupamento/школа по правилам ASE. Поэтому две школы в соседних concelhos могут иметь разные интерфейсы оплаты и разные сроки заказа.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Цены в 2026: normal, escalão A и B',
      content: [
        { kind: 'paragraph', text: 'Базовая логика такая: если у семьи одобрен ASE, ребёнок платит меньше или не платит. ASE связан с доходом семьи и обычно опирается на escalão do abono de família, который назначает Segurança Social.' },
        { kind: 'checklist', items: [
          '2.º и 3.º ciclo: escalão A — обычно бесплатно.',
          '2.º и 3.º ciclo: escalão B — обычно 0,73 € за обед.',
          '2.º и 3.º ciclo: без ASE — около 1,85 € за обед при обычном школьном тарифе.',
          'Secundário: тариф может быть выше, особенно если школа применяет отдельную цену для ensino secundário или позднего заказа.',
          '1.º ciclo: питание чаще администрирует Câmara Municipal; встречается тариф около 1,46 € для социального escalão и около 4,05 € без поддержки.',
          'Pré-escolar: правила почти всегда муниципальные; проверяйте tabela de preços da Câmara Municipal.',
          'Поздний заказ или покупка «на день» может стоить дороже обычного бронирования.',
          'Отмена обеда после установленного дедлайна обычно не возвращает деньги.'
        ] },
        { kind: 'warning', text: 'Не путайте escalão A/B для ASE с внутренними муниципальными escalões de rendimento. В 1.º ciclo некоторые municípios используют собственную таблицу, где названия escalão могут отличаться от школьного ASE.' }
      ]
    },
    {
      id: 'how-to-get-ase',
      title: 'Как получить ASE через Portal das Matrículas',
      content: [
        { kind: 'paragraph', text: 'ASE — Ação Social Escolar. Это школьная социальная поддержка: питание, учебники, иногда school supplies и transportes escolares. Для иностранной семьи механизм тот же: нужен NIF ребёнка/родителей, доступ к Portal das Matrículas и подтверждение семейного escalão.' },
        { kind: 'checklist', items: [
          'Зайдите на Portal das Matrículas через autenticação.gov.pt, Chave Móvel Digital (CMD) или Cartão de Cidadão.',
          'Выберите matrícula или renovação de matrícula на нужный учебный год.',
          'В блоке Ação Social Escolar отметьте запрос на ASE.',
          'Приложите declaração de escalão do abono de família из Segurança Social Direta, если портал или школа просит файл.',
          'Если abono de família ещё не назначен, подайте его в Segurança Social как можно раньше.',
          'Проверьте e-mail и сообщения от agrupamento: школа может запросить недостающие документы.',
          'После решения уточните в secretaria, активирован ли escalão в системе cantina.',
          'Если переехали в другой concelho или школу, проверьте, перенёсся ли ASE автоматически — часто нужно подтверждение заново.'
        ] },
        { kind: 'paragraph', text: 'Обычно право на ASE подтверждают до начала учебного года, но можно подать позже, если семья переехала, ребёнок впервые поступает в португальскую школу или изменились доходы.' }
      ]
    },
    {
      id: 'payment-and-booking',
      title: 'Оплата и бронирование обедов',
      content: [
        { kind: 'paragraph', text: 'У каждой школы своя система: SIGA, GIAE, Inovar, Unicard, Município online, Multibanco reference, MB WAY или школьная карточка aluno. Данные выдаёт secretaria школы или Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Получите логин родителя в системе школы или município.',
          'Проверьте, что ребёнок привязан к правильной turma и escola.',
          'Пополните баланс через Multibanco, MB WAY, transferência или presencialmente, если школа это допускает.',
          'Забронируйте refeições на неделю или месяц — многие школы требуют сделать это заранее.',
          'Проверьте дедлайн: часто заказ на следующий день закрывается накануне утром или днём.',
          'Отменяйте обед заранее, если ребёнок заболел или едет на visita de estudo.',
          'Сохраняйте comprovativos оплат хотя бы до конца учебного года.',
          'Если баланс ушёл в минус, доступ к заказу питания могут временно заблокировать.'
        ] },
        { kind: 'warning', text: 'Если ребёнок с первого дня идёт в школу без активного доступа к системе cantina, напишите в secretaria заранее. В первые недели сентября очереди большие, а без брони ребёнку могут не выдать обед.' }
      ]
    },
    {
      id: 'special-diets-and-problems',
      title: 'Аллергии, религия, вегетарианское меню и споры',
      content: [
        { kind: 'paragraph', text: 'Школы обычно публикуют ementa mensal и информацию об аллергенах. Альтернативное меню возможно, но его надо согласовать заранее: чаще всего через secretaria, direção do agrupamento или serviço de refeições da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Для аллергии или медицинской диеты принесите declaração médica на португальском или английском.',
          'Для вегетарианского меню уточните форму запроса: некоторые municípios требуют отдельный formulário.',
          'Для религиозных ограничений напишите письменный pedido à direção da escola.',
          'Проверьте, действует ли специальное меню каждый день или только при предварительном заказе.',
          'Если ребёнку дали неправильное блюдо, фиксируйте дату, escola, turma и фото ementa.',
          'Сначала обращайтесь в secretaria или coordenação da escola.',
          'Если проблема повторяется, пишите в direção do agrupamento и Câmara Municipal.',
          'По вопросам качества питания можно просить livro de reclamações или использовать Livro de Reclamações Eletrónico.'
        ] },
        { kind: 'paragraph', text: 'Для маленьких детей полезно первые недели спрашивать учителя, ел ли ребёнок в cantina. Система может показывать «обед списан», но это не гарантирует, что ребёнок реально поел.' }
      ]
    }
  ],
  costs: [
    { label: '2.º/3.º ciclo, ASE escalão A', amountEUR: 0, note: 'Обычно бесплатно при одобренной Ação Social Escolar.' },
    { label: '2.º/3.º ciclo, ASE escalão B', amountEUR: 0.73, note: 'Обычно 50% льготного школьного тарифа.' },
    { label: '2.º/3.º ciclo, без ASE', amountEUR: 1.85, note: 'Типовой нормальный тариф; школа может применять отдельную цену для позднего заказа.' },
    { label: '1.º ciclo, социальный тариф município', amountEUR: 1.46, note: 'Муниципальная таблица; зависит от Câmara Municipal и статуса семьи.' },
    { label: '1.º ciclo, без социальной поддержки', amountEUR: 4.05, note: 'Встречающийся муниципальный normal tariff; проверяйте tabela de preços своего concelho.' }
  ],
  sources: [
    {
      title: 'DGE — Ação Social Escolar и школьное питание',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — Pedidos de matrícula e renovação (pré-escolar, básico, secundário)',
      url: 'https://www.gov.pt/servicos/fazer-pedidos-de-matricula-e-renovacao-de-matricula-nos-ensinos-pre-escolar-basico-e-secundario',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Portal das Matrículas — пользовательский портал для родителей',
      url: 'https://www.portaldasmatriculas.edu.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
