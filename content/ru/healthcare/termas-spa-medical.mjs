export default {
  editorialVoice: 'hackportugal',
  id: 'termas-spa-medical',
  categoryId: 'healthcare',
  title: 'Termas: лечебные термы Португалии и comparticipação SNS',
  tldr: 'В Португалии termalismo — не просто spa, а медицинские процедуры на термальной воде. Если семейный врач SNS назначит tratamentos termais и вы выберете лицензированные termas-aderentes, SNS компенсирует **35% стоимости процедур** через **выплату comparticipação напрямую термальному учреждению-aderente** (а не возврат пациенту). Базовый годовой лимит на utente установлен Portaria n.º 337-C/2018 — €95; периодически Министерство здравоохранения может публиковать обновлённую portaria/despacho — **проверяйте актуальный лимит и условия на sns.gov.pt и в выбранном термальном учреждении перед записью**. Типичный 14-дневный курс стоит 220–500 € без проживания. Популярные направления: Caldas da Rainha, Monfortinho, São Pedro do Sul, Vidago.',
  tags: ['termas', 'sns', 'здоровье', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-counts',
      title: 'Что считается лечебными termas, а что — просто spa',
      content: [
        { kind: 'paragraph', text: 'Termas в португальском медицинском смысле — это лицензированное estabelecimento termal, где используются águas minerais naturais с признанными терапевтическими показаниями. Там есть médico hidrologista / médico responsável, клиническая карта и назначенные процедуры: ингаляции, души, ванны, грязи, питьевой курс, массажи как часть лечения.' },
        { kind: 'paragraph', text: 'Обычный hotel spa, бассейн с подогретой водой, sauna circuit или wellness-пакет для отдыха не дают права на comparticipação SNS. Компенсируются только медицински назначенные tratamentos termais в участвующих термах.' },
        { kind: 'checklist', items: [
          'Нужен número de utente SNS',
          'Нужна медицинская причина: ревматология, опорно-двигательный аппарат, дыхательные пути, дерматология, пищеварение — зависит от конкретной воды',
          'Нужно направление / prescrição от врача SNS, обычно médico de família',
          'Термы должны быть лицензированы DGS и участвовать в системе comparticipação',
          'Компенсация относится к процедурам, а не к отелю, питанию, дороге или туристическому spa',
          'На месте обычно всё равно нужна первичная consulta termal перед началом курса'
        ] }
      ]
    },
    {
      id: 'sns-reimbursement',
      title: 'Как работает comparticipação SNS в 2026',
      content: [
        { kind: 'paragraph', text: 'Базовое правило (Portaria n.º 337-C/2018): SNS компенсирует **35% стоимости назначенных tratamentos termais**, но не выше годового лимита на utente. Базовый лимит portaria — **€95/год**. Лимит может пересматриваться отдельной portaria/despacho — перед записью проверяйте текущее значение на sns.gov.pt и/или непосредственно в termas-aderente. Comparticipação выплачивается **напрямую термальному учреждению**, а не пациенту: вы платите свою часть (65%) термам, а 35% (до лимита) SNS перечисляет учреждению. Пример: если курс стоит €200, ваша часть — €130, SNS перечислит termas €70.' },
        { kind: 'paragraph', text: 'Обычно схема не выглядит как “скидка на кассе”. Вы оплачиваете термам курс, сохраняете документы и подаёте их по правилам, которые термы объясняют на месте: fatura-recibo с NIF, подтверждение выполнения процедур и медицинская prescription / termo de responsabilidade, если требуется.' },
        { kind: 'checklist', items: [
          'Проверьте, что ваш médico de família оформляет именно prescrição de tratamentos termais, а не просто рекомендацию “поехать на воды”',
          'До бронирования спросите у termas: “São aderentes à comparticipação do SNS em 2026?”',
          'Уточните, какой mínimo de dias они требуют для лечебного курса: часто 12–14 дней',
          'Попросите orçamento с разбивкой: consulta termal, inscrição, tratamentos, spa extras',
          'Платите с NIF на fatura — без NIF возврат может стать проблемой',
          'Сохраните comprovativo de pagamento и документ о завершении курса',
          'Не смешивайте в одной сумме медицинские процедуры и косметический spa, если хотите нормальную бухгалтерию для возврата'
        ] },
        { kind: 'warning', text: 'SNS не оплачивает проживание. 14 дней в São Pedro do Sul или Vidago могут быть дешёвыми по процедурам, но дорогими по отелю в высокий сезон. Считайте бюджет целиком: лечение + жильё + дорога + питание.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Пошагово: как получить назначение и не потерять компенсацию',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Запишитесь к médico de família', content: [
            { kind: 'paragraph', text: 'Объясните диагноз и цель: боли в суставах, хронический ринит/синусит, бронхит, кожные проблемы, восстановление после травм. Возьмите старые exames, relatório médico, список лекарств.' }
          ] },
          { id: 'prescription', title: '2. Получите prescrição para tratamentos termais', content: [
            { kind: 'paragraph', text: 'Попросите врача указать терапевтическую область и необходимость курса. Для SNS важна медицинская prescription, а не туристическая рекомендация.' }
          ] },
          { id: 'choose-termas', title: '3. Выберите лицензированные termas', content: [
            { kind: 'paragraph', text: 'Проверьте объект на Termas de Portugal и на сайте самих терм. Позвоните и уточните: принимают ли prescription SNS, какие документы нужны, сколько дней курс, есть ли médico termal в нужные даты.' }
          ] },
          { id: 'onsite', title: '4. Пройдите consulta termal на месте', content: [
            { kind: 'paragraph', text: 'Местный врач адаптирует программу: например, 14 дней ингаляций, душей, ванн или питьевого курса. Некоторые процедуры противопоказаны при онкологии, тяжёлой сердечной недостаточности, острых инфекциях, беременности — решает врач.' }
          ] },
          { id: 'paperwork', title: '5. Заберите документы для возврата', content: [
            { kind: 'checklist', items: [
              'Fatura-recibo с вашим NIF',
              'Comprovativo de pagamento',
              'Документ о выполненных tratamentos termais',
              'Копия или реквизиты prescription',
              'IBAN, если подача идёт через возмещение',
              'Контакт бухгалтерии терм на случай запроса SNS'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'destinations',
      title: 'Куда ехать: 4 понятных направления',
      content: [
        { kind: 'paragraph', text: 'Португалия маленькая, но термальные курорты очень разные. Выбор лучше делать не по красоте отеля, а по indicação terapêutica конкретной воды и логистике: сможете ли вы 12–14 дней подряд ходить на процедуры.' },
        { kind: 'checklist', items: [
          'Caldas da Rainha — исторический Hospital Termal Rainha D. Leonor; удобно из Лиссабона, часто рассматривают для ревматологии, опорно-двигательных и дыхательных жалоб',
          'Termas de Monfortinho — восток Castelo Branco, ближе к испанской границе; тихий формат, часто выбирают для кожи, дыхательных и ревматических показаний',
          'Termas de São Pedro do Sul — один из самых известных и посещаемых термальных центров страны; сильная инфраструктура, популярно для ревматологии, реабилитации и дыхательных процедур',
          'Vidago / Vidago Palace — север, Trás-os-Montes; известен минеральными водами и питьевыми курсами, часто ассоциируется с пищеварительными и метаболическими показаниями',
          'Если живёте в Algarve или Alentejo, проверьте также ближайшие termas: иногда экономия на дороге важнее “топового” бренда',
          'Для курса с детьми заранее уточняйте возрастные ограничения и наличие педиатрического сопровождения'
        ] },
        { kind: 'warning', text: 'Не все показания одинаковы во всех термах. “У меня астма” или “болит спина” — недостаточно: врач должен сопоставить диагноз, состав воды, процедуры и противопоказания.' }
      ]
    },
    {
      id: 'budget',
      title: 'Сколько стоит 14-дневный курс',
      content: [
        { kind: 'paragraph', text: 'Реалистичный бюджет на одного взрослого в 2026: медицинская часть 220–500 € за 12–14 дней, если брать не luxury wellness, а лечебный курс. После применения 35% comparticipação SNS (до базового годового лимита €95 или актуального) ваша часть обычно 130–400 €. Лимит проверяйте перед записью.' },
        { kind: 'checklist', items: [
          'Consulta termal: обычно 35–60 €',
          'Inscrição / taxa administrativa: 10–25 €',
          'Пакет процедур 12–14 дней: примерно 180–420 €',
          'Итого лечение до возврата: примерно 220–500 €',
          'Базовый годовой лимит SNS: **€95/год** (Portaria 337-C/2018) — выплачивается напрямую termas; актуальный лимит проверяйте на sns.gov.pt',
          'Жильё: от 40–70 €/ночь в простом alojamento до 120–250 €/ночь в hotel termal',
          'Дорога: автобус/поезд дешевле, но до некоторых терм удобнее только на машине',
          'Spa extras, массажи “relax”, косметология и бассейны обычно не входят в медицинскую компенсацию'
        ] },
        { kind: 'paragraph', text: 'Самый частый способ сэкономить — ехать вне августа и праздников, жить не в hotel termal, а в apartamento/local guesthouse рядом, и покупать только медицинский pacote, назначенный врачом.' }
      ]
    }
  ],
  costs: [
    { label: 'Compensação SNS за tratamentos termais', amountEURMax: 95, note: '35% стоимости процедур, базовый годовой лимит Portaria 337-C/2018 = €95. Возможны более новые portaria/despacho — проверяйте на sns.gov.pt. Выплата идёт напрямую termas-aderente.' },
    { label: 'Consulta termal', amountEURMin: 35, amountEURMax: 60, note: 'Первичный осмотр врача в термах; цена зависит от курорта' },
    { label: 'Лечебный курс 12–14 дней', amountEURMin: 220, amountEURMax: 500, note: 'Без проживания и дороги; luxury spa-пакеты могут быть дороже' },
    { label: 'Фактическая стоимость после применения comparticipação', amountEURMin: 130, amountEURMax: 405, note: 'Если курс подходит под comparticipação и применён базовый лимит €95 SNS' }
  ],
  sources: [
    { title: 'DGS: termalismo и лицензирование estabelecimentos termais', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Termas de Portugal: каталог терм, показания и контакты', url: 'https://www.termasdeportugal.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria n.º 337-C/2018 (com alterações): regime de comparticipação pelo SNS dos tratamentos termais', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/337-c-2018-117669735', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS: cuidados de saúde e acesso através do número de utente', url: 'https://www.sns.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
