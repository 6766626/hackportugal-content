export default {
  editorialVoice: 'hackportugal',
  id: 'pintor-carpinteiro-habitissimo',
  categoryId: 'daily_life',
  title: 'Как найти маляра, плотника или ремонтную бригаду: Habitissimo, Fixando, ZAask',
  tldr: 'В Португалии ремонтников ищут через Habitissimo, Fixando, ZAask, OLX Serviços, Facebook-группы и рекомендации соседей. Для клиента заявки обычно бесплатны; мастера платят платформе за лид или комиссию, фактически закладывая 10–20% в цену. В 2026 просите orçamento por escrito, NIF/recibo, страховку, фото работ и сроки. Для работ от нескольких сотен евро фиксируйте contrato или хотя бы e-mail/WhatsApp-смету; при споре — Livro de Reclamações и Centro de Arbitragem.',
  tags: ['ремонт', 'habitissimo', 'fixando', 'obra'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'where-to-search',
      title: 'Где искать мастера 🔎',
      content: [
        { kind: 'paragraph', text: 'Для мелкого ремонта — покраска, carpintaria, сборка кухни, плитка, электрика, сантехника — в Португалии работают несколько массовых каналов. Лучший результат даёт не один сайт, а 3–5 параллельных запросов с одинаковым описанием задачи.' },
        { kind: 'checklist', items: [
          'Habitissimo.pt — сильный по obras, remodelações, pintura, canalização, eletricidade; оставляете заявку, получаете контакты/предложения.',
          'Fixando.pt — маркетплейс услуг: pintor, carpinteiro, handyman, limpeza pós-obra, mudanças; удобно для быстрых работ.',
          'ZAask.pt — похожая модель заявок и orçamento; часто используют для ремонта, уборки, сборки мебели, дизайна.',
          'OLX Serviços — много частников и маленьких бригад; цены ниже, но проверка слабее.',
          'Google Maps — ищите “pintor Lisboa”, “carpinteiro Porto”, “remodelações Cascais” и смотрите свежие отзывы.',
          'Facebook/WhatsApp-группы района — полезно для рекомендаций “сосед уже делал”.',
          'Condomínio / administrador do prédio — часто знает проверенных canalizador, eletricista, pintor по вашему дому.'
        ] }
      ]
    },
    {
      id: 'how-platforms-work',
      title: 'Как работают Habitissimo, Fixando и ZAask',
      content: [
        { kind: 'paragraph', text: 'Для клиента размещение заявки обычно бесплатно. Деньги платит специалист: за контакт, кредит, лид или комиссию платформы. Поэтому “бесплатные 3 orçamento” не означают, что платформа бесплатна для рынка: расходы мастера часто заложены в итоговую цену.' },
        { kind: 'checklist', items: [
          'Опишите работу по-португальски или по-английски: площадь в м², адрес/район, сроки, фото, доступ к лифту, этаж.',
          'Просите orçamento detalhado: работа, материалы, IVA, сроки, способ оплаты, гарантия.',
          'Сравнивайте минимум 3 предложения: слишком дешёвое часто означает “без IVA”, без страховки или с доплатами потом.',
          'Уточняйте, кто покупает материалы: вы, мастер или “incluído”. Для краски и дерева это сильно меняет цену.',
          'Если специалист просит аванс, нормальная практика — небольшой sinal под материалы, но не 100% вперёд.',
          'Просите NIF или название empresa/empresário em nome individual — потом можно проверить atividade и выставление recibo/fatura.',
          'Комиссия/стоимость лидов для мастеров не всегда публична и зависит от категории, региона и модели платформы; ориентируйтесь, что она может увеличивать цену примерно на 10–20%.'
        ] },
        { kind: 'warning', text: 'Не соглашайтесь на “só dinheiro, sem fatura” для заметной работы. Без fatura/recibo почти невозможно доказать услугу, требовать гарантию, подать Livro de Reclamações или использовать спор в Centro de Arbitragem.' }
      ]
    },
    {
      id: 'request-template',
      title: 'Что написать в заявке, чтобы получить нормальную смету',
      content: [
        { kind: 'paragraph', text: 'Португальские мастера часто не отвечают на vague-заявки “нужно покрасить квартиру”. Чем точнее запрос, тем меньше “surpresas” в день работ.' },
        { kind: 'checklist', items: [
          'Тип работы: pintura interior, carpintaria, montagem de móveis, remodelação de casa de banho, cozinha, pladur, azulejos.',
          'Объём: площадь стен/пола в м², количество комнат, дверей, окон, шкафов.',
          'Состояние: есть ли влажность/mofo, трещины, старая плитка, неровные стены, демонтаж.',
          'Материалы: “com materiais incluídos” или “mão de obra apenas”.',
          'Адрес: город, freguesia, этаж, лифт, парковка для carrinha.',
          'Доступ: можно ли шуметь в будни, правила condomínio, есть ли autorização для obras.',
          'Срок: “visita esta semana, obra em maio 2026”, срочность и дедлайн.',
          'Фото/видео: общий план + крупные дефекты + размеры.',
          'Документы: попросите fatura com NIF, seguro de responsabilidade civil и orçamento por escrito.'
        ] },
        { kind: 'paragraph', text: 'Пример короткого текста: “Procuro pintor para apartamento T2 em Almada, 72 m², paredes e tetos, pequenas fissuras, sem humidade. Pretendo orçamento com materiais incluídos, IVA/fatura, prazo de execução e disponibilidade em maio de 2026. Posso enviar fotos e marcar visita.”' }
      ]
    },
    {
      id: 'vetting',
      title: 'Как проверить мастера до аванса',
      content: [
        { kind: 'paragraph', text: 'Главная задача — понять, это реальный profissional с историей или случайный посредник.\n\nВ Португалии много хороших маленьких бригад, но рынок фрагментирован: один и тот же человек может называться “empresa de remodelações”, не имея команды и страховки.' },
        { kind: 'checklist', items: [
          'Попросите портфолио именно похожих работ: до/после, не только красивые картинки из интернета.',
          'Проверьте отзывы на платформе, Google и Facebook; смотрите не средний балл, а свежие жалобы за последние 6–12 месяцев.',
          'Спросите, кто физически придёт на объект: сам мастер, subempreiteiro или неизвестная бригада.',
          'Попросите NIF/NIPC и название для fatura; для компании можно сверить данные в pesquisa pública de empresa.',
          'Уточните seguro de acidentes de trabalho и responsabilidade civil, особенно если работа с лестницами, крышей, электрикой.',
          'Не платите крупный аванс без письменного orçamento и идентификации получателя.',
          'Для электрики и газа используйте квалифицированных специалистов; “handyman” не должен менять quadro elétrico или газовую instalação без компетенции.',
          'Согласуйте уборку и вывоз entulho: строительный мусор нельзя просто оставить у ecoponto.',
          'Проверьте, нужны ли разрешения condomínio или Câmara Municipal, если это шумная/структурная obra.'
        ] }
      ]
    },
    {
      id: 'price-reality',
      title: 'Цены и авансы в 2026',
      content: [
        { kind: 'paragraph', text: 'Цены сильно зависят от Лиссабона/Порту/Алгарве, срочности, парковки, материалов и размера работы. Маленькая задача часто имеет “taxa mínima” за выезд, даже если работа на 30 минут.' },
        { kind: 'checklist', items: [
          'Покраска комнаты: часто считают за м² или фиксированной суммой после visita; материалы и подготовка стен могут удвоить цену.',
          'Покраска квартиры T1/T2: просите отдельные строки за стены, потолки, reparações, primário, tinta и limpeza.',
          'Плотник/carpinteiro: цена зависит от материала MDF/contraplacado/madeira, фурнитуры, покраски и монтажа.',
          'Мелкий handyman: обычно выгоднее объединить 3–5 задач в один выезд.',
          'Ремонт ванной/кухни: обязательно требуйте календарь этапов и кто отвечает за сантехнику, электрику, плитку.',
          'Нормальный аванс: sinal на материалы или бронирование даты; для маленьких работ часто оплата после завершения.',
          'Оплата: transferência bancária лучше наличных — остаётся след платежа.',
          'Fatura com NIF может включать IVA; если вам предлагают цену “sem IVA”, сравнивайте честно: это не тот же уровень защиты.'
        ] }
      ]
    },
    {
      id: 'contract-and-complaints',
      title: 'Когда нужен contrato и как жаловаться',
      content: [
        { kind: 'paragraph', text: 'Для мелкой сборки мебели достаточно письменного orçamento в WhatsApp/e-mail и оплаты после работ. Для ремонта на сотни или тысячи евро нужен документ: contrato de prestação de serviços или хотя бы orçamento assinado с условиями.' },
        { kind: 'checklist', items: [
          'В contrato/orçamento укажите стороны: имя, NIF/NIPC, адрес, телефон.',
          'Опишите работу и исключения: что входит, что не входит, кто покупает материалы.',
          'Зафиксируйте цену: com IVA или sem IVA, по этапам, условия допработ.',
          'Сроки: дата начала, длительность, штрафы или право расторжения при задержке.',
          'Оплата: аванс, этапы, финальный платёж после vistoria.',
          'Гарантия: что исправляют бесплатно и в какой срок.',
          'Фото “до” и “после” храните вместе с перепиской, orçamento, fatura и доказательствами оплаты.',
          'Если исполнитель — компания или profissional с Livro de Reclamações, можно жаловаться через Livro de Reclamações Eletrónico.',
          'Для потребительских споров используйте Centro de Arbitragem de Conflitos de Consumo по региону.'
        ] },
        { kind: 'warning', text: 'Livro de Reclamações работает против зарегистрированных поставщиков товаров/услуг. Если вы наняли “человека из OLX” без fatura, NIF, договора и перевода на его имя, доказать отношения намного сложнее.' }
      ]
    }
  ],
  costs: [
    { label: 'Заявка клиента на Habitissimo/Fixando/ZAask', amountEUR: 0, note: 'Обычно бесплатно для клиента; условия платформ могут меняться по категории.' },
    { label: 'Надбавка, которую мастер может заложить из-за стоимости лида/комиссии', amountEURMin: 10, amountEURMax: 20, note: 'Ориентир в процентах от цены, не официальный тариф; зависит от платформы и типа работы.' },
    { label: 'Livro de Reclamações Eletrónico', amountEUR: 0, note: 'Подача жалобы потребителем бесплатна.' }
  ],
  sources: [
    {
      title: 'Habitissimo Portugal — платформа поиска специалистов для obras и serviços',
      url: 'https://www.habitissimo.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Fixando Portugal — платформа заявок на услуги и ремонт',
      url: 'https://www.fixando.pt',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações Eletrónico — официальная книга жалоб',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Direção-Geral do Consumidor — информация о правах потребителей и resolução alternativa de litígios',
      url: 'https://www.consumidor.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
