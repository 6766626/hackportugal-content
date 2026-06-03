export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-saude-medis-multicare',
  categoryId: 'healthcare',
  title: 'Страховки здоровья в Португалии: Médis vs Multicare vs AdvanceCare',
  tldr: 'В 2026 частная медицинская страховка в Португалии обычно стоит 30–60 €/мес для 25–35 лет, 60–100 €/мес после 45 и 100–150 €+/мес после 60, если включены госпитализация и амбулаторные лимиты. Médis — премиальная сеть Ageas с сильным сервисом; Multicare от Fidelidade — крупнейший массовый игрок; AdvanceCare — сеть/администратор, часто через Generali Tranquilidade и корпоративные планы. Смотрите не бренд, а plafond, copagamentos, exclusions и período de carência.',
  tags: ['seguro', 'saúde', 'médis', 'multicare', 'advancecare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market-map',
      title: 'Кто есть кто на рынке',
      content: [
        { kind: 'paragraph', text: 'В Португалии частная страховка здоровья не заменяет SNS, а дополняет его: быстрее попасть к especialista, сделать exames, получить доступ к частным больницам CUF, Lusíadas, Luz Saúde, Trofa Saúde и локальным clínicas convencionadas.' },
        { kind: 'checklist', items: [
          'Médis — бренд saúde insurance группы Ageas Portugal. Обычно воспринимается как более премиальный продукт: хорошее приложение, сильная сеть, удобная телемедицина и поддержка.',
          'Multicare — страхование здоровья группы Fidelidade. Один из крупнейших игроков: много корпоративных договоров, широкая сеть, часто хорошее покрытие по всей стране.',
          'AdvanceCare — не всегда “страховая компания” в узком смысле, а сеть и администратор медицинских услуг. Часто встречается в полисах Generali Tranquilidade и корпоративных пакетах.',
          'Все три работают по модели rede convencionada: вы идёте к врачу из сети и платите copagamento вместо полной цены.',
          'Если врач вне сети, нужен режим reembolso: вы платите 100%, отправляете factura-recibo и ждёте частичный возврат.',
          'Для экспата главный критерий — не логотип, а наличие нужных клиник рядом с домом и лимиты на госпитализацию, роды, стоматологию, психиатрию и exames.'
        ] },
        { kind: 'warning', text: 'Не покупайте полис только по цене. Самый дешёвый план часто покрывает только consultas и descontos, но не даёт полноценной hospitalização. Для визы, ипотеки или семьи такой план может быть бесполезен.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Сколько стоит в 2026 💶',
      content: [
        { kind: 'paragraph', text: 'Точная цена зависит от idade, morada, histórico clínico, franquia, copagamentos и выбранных coberturas. У страховщиков цены часто считаются индивидуально, особенно после 55–60 лет.' },
        { kind: 'checklist', items: [
          '25–35 лет: примерно 30–60 €/мес за нормальный индивидуальный план с консультациями, exames и базовой hospitalização.',
          '35–45 лет: примерно 45–80 €/мес, если есть hospitalização от 25 000–50 000 € в год.',
          '45–60 лет: примерно 60–100 €/мес; исключения и анкета здоровья становятся важнее.',
          '60+ лет: часто 100–150 €+/мес, а некоторые планы закрыты для нового вступления после определённого возраста.',
          'Семья 2 взрослых + ребёнок: часто 100–220 €/мес в зависимости от уровня покрытия.',
          'Dental обычно идёт отдельным модулем или как сеть скидок, а не полноценное страхование.',
          'Maternidade/parto почти всегда требует waiting period и отдельный plafond.',
          'Корпоративный план через работодателя почти всегда выгоднее индивидуального: меньше цена, иногда слабее questionnaire médico.'
        ] },
        { kind: 'paragraph', text: 'Если бюджет ограничен, лучше взять план с hospitalização и умеренными copagamentos, чем “витринный” план с красивым приложением, но без серьёзных лимитов на операции.' }
      ]
    },
    {
      id: 'compare-brands',
      title: 'Сравнение Médis, Multicare и AdvanceCare',
      content: [
        { kind: 'substeps', items: [
          { id: 'medis', title: 'Médis: когда подходит', content: [
            { kind: 'checklist', items: [
              'Подходит, если важны приложение, поддержка, телемедицина и премиальный UX.',
              'Хороший выбор для Лиссабона, Порту, Cascais, Oeiras, Braga, Coimbra, Algarve, где много частных клиник.',
              'Часто удобна для expat family: pediatria, consultas online, exames в крупных сетях.',
              'Проверяйте лимит hospitalização: дешёвые варианты могут быть слишком узкими.',
              'Смотрите copagamento за consulta de especialidade: типично 15–30 €, но зависит от плана.'
            ] }
          ] },
          { id: 'multicare', title: 'Multicare: когда подходит', content: [
            { kind: 'checklist', items: [
              'Подходит, если нужна максимально массовая и привычная сеть от Fidelidade.',
              'Часто встречается у работодателей и в банковских/партнёрских продуктах.',
              'Хороший вариант, если вы живёте не только в Лиссабоне/Порту: покрытие по стране обычно сильное.',
              'Удобна для семейных пакетов и корпоративных upgrades.',
              'Проверяйте reembolso: в базовых планах он может быть слабым или отсутствовать.'
            ] }
          ] },
          { id: 'advancecare', title: 'AdvanceCare / Generali: когда подходит', content: [
            { kind: 'checklist', items: [
              'Подходит, если полис даёт доступ к широкой rede AdvanceCare рядом с вашим адресом.',
              'Часто встречается в продуктах Generali Tranquilidade и групповых страховках.',
              'Может быть выгоднее по цене, особенно в корпоративном канале.',
              'Важно понять, кто именно seguradora: AdvanceCare как сеть не всегда является вашим страховщиком по договору.',
              'Перед покупкой проверьте, принимают ли вашу карту нужные CUF/Lusíadas/Luz/местные clínicas.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'fine-print',
      title: 'Что читать в contrato перед оплатой',
      content: [
        { kind: 'paragraph', text: 'В португальских полисах решают не рекламные “доступ к 30 000 врачей”, а condições particulares и condições gerais. Попросите PDF до оплаты и проверьте ключевые пункты.' },
        { kind: 'checklist', items: [
          'Capital / plafond hospitalização: сколько страховка платит за операции и стационар в год.',
          'Ambulatório: лимит на consultas, exames, tratamentos, fisioterapia.',
          'Copagamentos: сколько вы платите за consulta, urgência, exame, cirurgia.',
          'Franquia: сумма, которую вы оплачиваете сами до включения покрытия.',
          'Reembolso fora da rede: есть ли возврат вне сети и какой процент.',
          'Período de carência: срок ожидания до начала покрытия.',
          'Exclusões: хронические, preexistentes, психиатрия, fertilidade, косметология, спорт высокого риска.',
          'Maternidade: покрытие беременности, parto normal/cesariana, лимит и waiting period.',
          'Idade limite de adesão: до какого возраста можно войти в план.',
          'Renovação anual: может ли страховщик изменить цену или условия при продлении.'
        ] },
        { kind: 'warning', text: 'Pre-existing conditions почти всегда либо исключаются, либо требуют оценки врачом страховщика. Не скрывайте диагнозы: при дорогостоящем claim страховщик может запросить историю и отказать в оплате.' }
      ]
    },
    {
      id: 'waiting-periods',
      title: 'Período de carência: когда страховка реально начинает работать',
      content: [
        { kind: 'paragraph', text: 'Período de carência — срок ожидания после начала договора. В этот период вы платите взносы, но часть покрытий ещё не действует. Конкретные сроки отличаются по плану, но структура рынка похожая.' },
        { kind: 'checklist', items: [
          'Urgência por acidente обычно покрывается сразу или почти сразу.',
          'Consultas и exames часто имеют ожидание около 30–60 дней.',
          'Hospitalização и cirurgias часто имеют ожидание около 90–180 дней.',
          'Parto, gravidez и tratamentos de infertilidade часто требуют 365 дней или больше.',
          'Psychiatry, psicologia, physiotherapy и стоматология могут иметь отдельные лимиты и ожидания.',
          'Если переходите от другого страховщика без перерыва, иногда можно просить redução/eliminação de carências, но это не автоматическое право.',
          'Корпоративные планы иногда дают лучшие условия по carências, особенно при массовом включении сотрудников.'
        ] },
        { kind: 'warning', text: 'Если вы уже беременны, планируете операцию или лечите хроническое заболевание, не рассчитывайте, что новая страховка оплатит это сразу. Сначала получите письменное подтверждение от seguradora или mediador.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Практический выбор для экспата',
      content: [
        { kind: 'paragraph', text: 'Алгоритм простой: выберите не бренд, а сценарий использования. Для одного человека 30 лет без хронических болезней и для семьи с ребёнком в Cascais оптимальный полис будет разным.' },
        { kind: 'checklist', items: [
          'Откройте карты Médis, Multicare и AdvanceCare и проверьте 5–10 клиник рядом с домом и работой.',
          'Проверьте, есть ли в сети конкретные больницы: CUF, Hospital da Luz, Lusíadas, Trofa Saúde или локальная clínica.',
          'Сравните minimum hospitalização: для спокойствия лучше смотреть планы от 25 000–50 000 € в год и выше.',
          'Посчитайте реальную цену: monthly premium + copagamentos + franquia + dental add-on.',
          'Если нужны роды — смотрите maternidade, plafond и 365-дневный waiting period до беременности, а не после.',
          'Если нужен психолог/психиатр — проверяйте отдельное покрытие; в базовых планах оно часто ограничено.',
          'Попросите proposta и condições gerais на английском или португальском; устные обещания агента не считаются.',
          'Если работодатель даёт корпоративный Multicare/Médis/AdvanceCare, сначала оцените upgrade — он часто выгоднее отдельного семейного полиса.'
        ] },
        { kind: 'paragraph', text: 'Базовая рекомендация: Médis — если важен сервис и premium UX; Multicare — если нужна максимально привычная и широкая сеть; AdvanceCare/Generali — если цена хорошая и нужные клиники реально принимают карту.' }
      ]
    }
  ],
  costs: [
    { label: 'Индивидуальный план 25–35 лет', amountEURMin: 30, amountEURMax: 60, note: 'Ориентир за месяц в 2026; зависит от покрытия и copagamentos.' },
    { label: 'Индивидуальный план 45–60 лет', amountEURMin: 60, amountEURMax: 100, note: 'При наличии hospitalização и ambulatório; анкета здоровья обязательна.' },
    { label: 'Индивидуальный план 60+', amountEURMin: 100, amountEURMax: 150, note: 'Может быть выше; возможны возрастные ограничения на вступление.' },
    { label: 'Copagamento за consulta de especialidade', amountEURMin: 15, amountEURMax: 30, note: 'Типичный диапазон в сети; точная сумма указана в таблице copagamentos.' },
    { label: 'Семейный план 2 взрослых + ребёнок', amountEURMin: 100, amountEURMax: 220, note: 'Ориентир за месяц; корпоративные планы могут быть дешевле.' }
  ],
  sources: [
    { title: 'Médis — официальные планы и сеть saúde', url: 'https://www.medis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Multicare — официальные планы и rede médica', url: 'https://www.multicare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Generali Tranquilidade — seguros de saúde и rede AdvanceCare', url: 'https://www.generali.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF — надзор за страховым рынком Portugal', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
