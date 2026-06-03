export default {
  editorialVoice: 'hackportugal',
  id: 'finding-doctor',
  categoryId: 'healthcare',
  title: 'Найти врача в Португалии',
  tldr: 'Семейный врач (médico de família) — бесплатно через SNS в Centro de Saúde (государственная поликлиника) по месту жительства, но очередь на запись 2–14 дней. Специалисты SNS — очередь 1–12 мес. Для срочного — больница SNS (Urgência).\n\nЧастные клиники (CUF, Lusíadas, HPA) — без очереди за деньги (~€ 50–80 первый приём).',
  tags: ['врач', 'SNS', 'Centro de Saúde', 'специалист'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'family-doctor',
      title: 'Семейный врач (médico de família)',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Регистрация', content: [
            { kind: 'paragraph', text: 'В Centro de Saúde вашего района. Нужны NIF, NISS, Utente (см. руководство по SNS). Иногда свободного врача нет — записывают в лист ожидания.' }
          ]},
          { id: 'f2', title: 'Запись на приём', content: [
            { kind: 'checklist', items: [
              '📞 SNS 24 (808 24 24 24) — общий канал, запись в ваш Centro de Saúde',
              '📱 Приложение SNS 24 — смартфон',
              '🌐 sns24.gov.pt — онлайн',
              '🏢 Очно в Centro de Saúde — стойка приёма',
              'Обычно 2–14 дней до свободного времени'
            ]}
          ]},
          { id: 'f3', title: 'На приёме', content: [
            { kind: 'paragraph', text: 'Для простуды, хронических болезней, вопросов общего здоровья. Врач может дать направление к специалисту или назначить анализы. Рецепт — электронный, приходит в SMS.' }
          ]},
          { id: 'f4', title: 'Если нет семейного врача', content: [
            { kind: 'paragraph', text: 'Остаётесь в листе ожидания. Через 3–6 мес врача обычно назначают. При острой необходимости можно записаться к любому доступному врачу Centro de Saúde.' }
          ]}
        ]}
      ]
    },
    {
      id: 'specialists',
      title: 'Специалисты по SNS',
      content: [
        { kind: 'paragraph', text: 'По направлению от семейного врача → очередь на приём к специалисту. Очереди длинные:' },
        { kind: 'checklist', items: [
          'Кардиолог: 3–6 мес',
          'Офтальмолог: 2–4 мес',
          'Дерматолог: 4–8 мес',
          'Гинеколог / уролог: 2–4 мес',
          'Ортопед: 3–6 мес',
          'Стоматолог: SNS почти не покрывает — платно',
          'Психолог / психиатр: 4–12 мес'
        ]},
        { kind: 'paragraph', text: 'Пока вы ждёте приёма, симптомы могут измениться. Если срочно — Urgência (отделение неотложной помощи).' }
      ]
    },
    {
      id: 'private',
      title: 'Частные клиники',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Главные сети', content: [
            { kind: 'checklist', items: [
              'Hospital da Luz / Luz Saúde — крупнейшая, по всей Португалии',
              'CUF — премиальная сеть, Lisboa/Porto/Algarve',
              'Lusíadas Saúde — вторая крупная сеть',
              'HPA Saúde — лидер в Algarve',
              'Trofa Saúde — Porto/Norte',
              'Clinica Médis — клиника с сетью врачей'
            ]}
          ]},
          { id: 'p2', title: 'Как записаться', content: [
            { kind: 'paragraph', text: 'Телефон / сайт / приложение. Часто приём на следующий день. Первый приём € 50–80, анализы отдельно. Со страховкой (Médis, Multicare) — доплата € 15–30.' }
          ]},
          { id: 'p3', title: 'Работа со страховкой', content: [
            { kind: 'paragraph', text: 'Показать карту страховки → прайс применяется автоматически. Без страховки — полный прайс. Стоматолог — почти всегда платно даже по SNS.' }
          ]}
        ]}
      ]
    },
    {
      id: 'urgencia',
      title: 'Urgência (неотложная помощь)',
      content: [
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Когда идти', content: [
            { kind: 'checklist', items: [
              'Острая боль',
              'Перелом / серьёзная травма',
              'Температура >39°C не сбивается',
              'Симптомы ишемии, инсульта',
              'Серьёзные аллергические реакции'
            ]}
          ]},
          { id: 'u2', title: 'Манчестерская сортировка', content: [
            { kind: 'paragraph', text: 'Вы приходите → медсестра оценивает состояние → присваивает цвет приоритета (красный = 0 мин, оранжевый = 10 мин, жёлтый = 60 мин, зелёный = 120 мин, синий = 240 мин, белый = не срочно, идите в Centro de Saúde).' }
          ]},
          { id: 'u3', title: 'Стоимость', content: [
            { kind: 'paragraph', text: 'С 2022 года (DL 37/2022) большинство taxas moderadoras SNS отменены, но в Serviço de Urgência они могут взиматься, если пациент пришёл без предварительного referenciamento SNS24/семейного врача и нет госпитализации/исключения. Если цвет «белый/синий» (не срочно), могут направить в Centro de Saúde.' }
          ]},
          { id: 'u4', title: 'Частная неотложная помощь', content: [
            { kind: 'paragraph', text: 'В частной клинике (CUF, Luz) — без очереди, но € 80–150 за первый приём. Быстрее, если очередь в SNS 4+ часа.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'SNS — официальный портал', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS 24 — онлайн-услуги', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACSS — статистика SNS', url: 'https://www.acss.min-saude.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}