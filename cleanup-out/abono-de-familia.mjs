export default {
  editorialVoice: 'hackportugal',
  id: 'ono-de-familia',
  categoryId: 'education_children',
  title: 'Abono de Família — пособие на ребёнка',
  tldr: 'Abono de Família — ежемесячное пособие на ребёнка до 18 лет (до 24 лет при учёбе). Размер € 38–180 в месяц зависит от дохода семьи и возраста ребёнка. Подача — через Segurança Social Direta, выплата автоматическая. Для резидентов с NISS.',
  tags: ['abono', 'пособие', 'семья', 'дети'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'who',
      title: 'Кто имеет право',
      content: [
        { kind: 'checklist', items: [
          'Резидент Португалии с NISS',
          'Есть ребёнок до 18 лет (до 24 лет, если учится; до 27 лет, если есть инвалидность)',
          'Доход семьи ниже порога (зависит от эшелона — проверяйте актуальные значения по годам)',
          'Ребёнок зарегистрирован в SNS и школе (если возраст обязательного обучения)',
          'Для иностранцев-резидентов с NISS — право с момента получения легального статуса (требование стажа ≥ 3 лет было отменено Decreto-Lei 8/2019; любой легальный резидент с NISS имеет право)'
        ]},
        { kind: 'paragraph', text: 'DL 8/2019 и последующие реформы отменили минимальный стаж резидентства для Abono.' }
      ]
    },
    {
      id: 'amount',
      title: 'Размер (на 2026)',
      content: [
        { kind: 'paragraph', text: 'Определяется эшелоном (escalão) по доходу. Пороги привязаны к IAS 2026 = € 537,13. Суммы на январь 2026 по данным ISS:' },
        { kind: 'checklist', items: [
          '1º escalão (самый низкий доход) — € 190,98 в месяц на ребёнка ≤36 мес.; € 75,13 на ребёнка старше',
          '2º escalão — € 161,65 / € 75,13',
          '3º escalão — € 132,07 (≤36 мес.) / € 59,33 (36–72 мес.) / € 54,35 (>72 мес.)',
          '4º escalão — € 88,43 / € 44,77',
          '5º escalão — Abono не выплачивается'
        ]},
        { kind: 'paragraph', text: 'Монородительские семьи: +35%. Bonificação por deficiência — фиксированная доплата при инвалидности. Дополнительная надбавка extraordinário — для 2-го и последующих детей ≤36 мес. по эшелонам 1–4. Актуальные значения и границы эшелонов — всегда на seg-social.pt.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Как подать',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Зайти в Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'seg-social.pt → SSD → вход через Chave Móvel Digital или NISS+пароль.' }
          ]},
          { id: 'a2', title: '2. «Família» → «Abono de Família»', content: [
            { kind: 'paragraph', text: 'Меню → «Requerer Abono de Família». Заполнить онлайн.' }
          ]},
          { id: 'a3', title: '3. Приложить документы', content: [
            { kind: 'checklist', items: [
              'Свидетельство о рождении ребёнка (скан)',
              'NISS и NIF ребёнка',
              'Подтверждение из школы (для возраста обязательного обучения)',
              'IBAN для зачисления'
            ]}
          ]},
          { id: 'a4', title: '4. Дождаться подтверждения', content: [
            { kind: 'timeline', text: '30–60 дней. Первая выплата — ретроактивно с момента подачи.' }
          ]}
        ]}
      ]
    },
    {
      id: 'updates',
      title: 'Поддержание',
      content: [
        { kind: 'paragraph', text: 'Эшелон пересчитывается автоматически после подачи IRS (август-сентябрь). Для сохранения пособия подавайте IRS своевременно.' },
        { kind: 'paragraph', text: 'При смене адреса, школы или дохода — обновить данные в SSD в течение 30 дней.' }
      ]
    },
    {
      id: 'related',
      title: 'Связанные пособия',
      content: [
        { kind: 'checklist', items: [
          'Bolsa de Estudo — стипендия для школьников из малообеспеченных семей',
          'ASE (Acção Social Escolar) — бесплатные обеды, транспорт, учебники',
          'Garantia para a Infância — дополнительное пособие для 1-го и 2-го эшелонов',
          'Subsídio Parental — декретные выплаты (мама/папа)',
          'Licença Parental — декретный отпуск (120–180 дней)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Segurança Social — Abono de Família', url: 'https://www.seg-social.pt/abono-de-familia-para-criancas-e-jovens', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Pedir Abono de Família', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/pedir-abono-de-familia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 176/2003 — Abono de Família', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/176-2003', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}