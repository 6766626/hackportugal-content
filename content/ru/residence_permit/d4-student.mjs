export default {
  editorialVoice: 'hackportugal',
  id: 'd4-student',
  categoryId: 'residence_permit',
  title: 'Виза D4 (студент) — бакалавриат, магистратура, аспирантура',
  tldr: 'D4 / residence visa for study — прежде всего для высшего образования и некоторых признанных долгосрочных программ. Для языковых/подготовительных курсов часто применяется temporary stay visa, а не D4. Студент с ВНЖ для высшего образования может работать по найму или как self-employed при соблюдении закона и уведомлении AIMA — общего лимита 20 часов в неделю в этом режиме нет. После завершения обучения можно запросить ВНЖ/продление для поиска работы или предпринимательства до 1 года (это НЕ та же «job seeker visa» для въезда извне).',
  audience: { citizenships: ['thirdCountry', 'cplp'] },
  tags: ['d4', 'студент', 'внж', 'обучение'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'requirements',
      title: 'Требования',
      content: [
        { kind: 'checklist', items: [
          'Зачисление в аккредитованный вуз (для D4) или признанную долгосрочную программу обучения; для языковых/подготовительных курсов часто применяется temporary stay visa',
          'Подтверждение оплаты за первый год обучения',
          'Ориентир по средствам на 2026: до €920/мес × 12 = €11 040, если консульство применяет SMN. Стипендия, оплаченная учёба/жильё или termo de responsabilidade могут учитываться. Проверяйте чек-лист конкретного консульства/VFS',
          'Жильё в Португалии (договор аренды или общежитие)',
          'Медстраховка',
          'Справка о несудимости',
          'Для граждан CPLP — упрощённый процесс'
        ]}
      ]
    },
    {
      id: 'apply',
      title: 'Как поступить',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Выбрать программу', content: [
            { kind: 'paragraph', text: 'Для non-EU international students подача обычно напрямую в выбранный государственный или частный вуз через Concurso Especial para Estudantes Internacionais (Decreto-Lei 36/2014). DGES (www.dges.gov.pt) администрирует национальный конкурс доступа и полезен как справочник системы высшего образования, но НЕ является единым порталом подачи для иностранцев.' }
          ]},
          { id: 'a2', title: '2. Признание среднего образования / equivalência', content: [
            { kind: 'paragraph', text: 'Вуз может сам оценить аттестат для конкурса international students. Для формальной equivalência ao ensino secundário процедура обычно идёт через португальскую школу/образовательные органы (DGEstE/DGE), не через DGES. Проверяйте инструкцию конкретного вуза.' }
          ]},
          { id: 'a3', title: '3. Подать документы в университет', content: [
            { kind: 'paragraph', text: 'Сроки: для государственных — июль–август, для частных — круглый год в некоторых программах.' }
          ]},
          { id: 'a4', title: '4. Получить письмо о зачислении', content: [
            { kind: 'paragraph', text: 'Нужно для визы D4.' }
          ]},
          { id: 'a5', title: '5. Подать на визу D4', content: [
            { kind: 'paragraph', text: 'В консульстве, с зачислением, подтверждением финансов и страховкой.' }
          ]}
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'Права по D4',
      content: [
        { kind: 'checklist', items: [
          'Работа по найму или как self-employed при уведомлении AIMA и соблюдении трудового, налогового и миграционного режима; общего лимита 20 ч/нед в Португалии для D4 НЕТ, но стипендия/вуз могут ограничивать занятость',
          'После легализации можно регистрироваться в SNS / centro de saúde. SNS в основном tendencialmente gratuito, но лекарства и некоторые услуги оплачиваются частично; до регистрации нужна медстраховка',
          'Продление на срок обучения',
          'При наличии job offer после диплома можно менять основание ВНЖ на профессиональную деятельность; для high-qualified roles возможен режим highly qualified activity. Возможность зависит от контракта, зарплаты/квалификации и решения AIMA',
          'После завершения обучения можно запросить ВНЖ/продление для поиска работы или предпринимательства сроком до 1 года (Lei 23/2007 art. 122) — это НЕ job seeker visa для въезда из-за рубежа'
        ]}
      ]
    },
    {
      id: 'cplp-note',
      title: 'Граждане CPLP',
      audience: { citizenships: ['cplp'] },
      content: [
        { kind: 'paragraph', text: 'Бразильцы могут поступать в некоторые вузы с ENEM (бразильский экзамен). Как миграционный путь возможна либо учебная виза/ВНЖ, либо при выполнении условий и доступности процедуры — CPLP residence permit. Это надо проверять по актуальным правилам AIMA/консульства и требованиям вуза. CPLP-режим НЕ универсальная замена D4 для всех ситуаций.' },
        { kind: 'paragraph', text: 'Прочие граждане CPLP: по соглашению доступны образовательные программы обмена. Проверяйте на сайте нужного вуза.' }
      ]
    }
  ],
  costs: [
    { label: 'Консульская виза', amountEUR: 90 },
    { label: 'Государственный университет', amountEURMin: 700, amountEURMax: 7000, note: 'в год, для иностранцев' },
    { label: 'Частный университет', amountEURMin: 3500, amountEURMax: 15000, note: 'в год' },
    { label: 'Языковой/подготовительный курс', amountEURMin: 500, amountEURMax: 2000, note: 'Принимается консульством только если подходит под соответствующую visa category и учреждение/программа аккредитованы; CIPLE-prep сам по себе не гарантирует D4' },
    { label: 'AIMA — оформление/выдача residence permit и продления', amountEURMin: 0, amountEURMax: 400, note: 'По действующей таблице сборов AIMA с 01.03.2026; сумма зависит от типа акта и срочности/канала' }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'DGES — Direção-Geral do Ensino Superior', url: 'https://www.dges.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Vistos MNE — Visto de Estudo', url: 'https://vistos.mne.gov.pt/pt/vistos-nacionais/informacao-geral/tipo-de-visto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Estudantes estrangeiros', url: 'https://aima.gov.pt/pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}