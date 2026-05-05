export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'Как выписать recibo verde (электронный чек самозанятого) — пошагово',
  tldr: 'Recibo verde — электронный чек самозанятого / ИП. Выписывается в Portal das Finanças (налоговый портал) → «Recibos Verdes Eletrónicos». Нужны: открытая деятельность, NIF клиента, сумма, описание услуги. IVA зависит от режима: обычный 23 % или освобождение при обороте < 15 000 €/год. Пример для ИП в первый год: обычно без IVA, по специальному режиму. Срок выставления — до 5-го дня следующего месяца после оплаты.',
  tags: ['recibo verde', 'ип', 'самозанятый', 'деятельность'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'Что нужно перед первым recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Открытая деятельность в Finanças (Início de Atividade)',
          '✅ CAE — код вашей деятельности (консалтинг — 7022, ИТ — 6201)',
          '✅ NIF и пароль от Portal das Finanças (или Chave Móvel Digital)',
          '✅ Решение по IVA: специальный режим (если первый год + оборот < 15 000 €) или обычный режим 23 %',
          '✅ Активный NISS для Segurança Social (социальное страхование)',
          '✅ IBAN для получения оплаты'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Выставление recibo — пошагово',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Вход в Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → «Os Seus Serviços» → «Emitir Faturas e Recibos Eletrónicos» → «Recibos».' }
          ]},
          { id: 's2', title: '2. Заполнить данные клиента', content: [
            { kind: 'checklist', items: [
              'NIF клиента (португальский или иностранный)',
              'Имя / название компании',
              'Адрес (автоматически, если португальский NIF)',
              'Если клиент вне ЕС — «Não sujeito a IVA» выбирается автоматически'
            ]}
          ]},
          { id: 's3', title: '3. Описание услуги', content: [
            { kind: 'checklist', items: [
              'Дата выполнения',
              'Описание (кратко: «Serviços de consultoria», «Desenvolvimento de software»)',
              'Количество / единица (h — часы, un. — единица)',
              'Цена за единицу',
              'Общая сумма'
            ]}
          ]},
          { id: 's4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Специальный режим: 0 % IVA, надпись «IVA — regime de isenção art. 53»',
              'Обычный режим: 23 % IVA на сумму',
              'Исключение: клиент в другой стране ЕС с VAT-кодом → 0 % IVA (обратное начисление)',
              'Клиент вне ЕС → 0 % IVA'
            ]}
          ]},
          { id: 's5', title: '5. Удержание IRS', content: [
            { kind: 'checklist', items: [
              'Клиент-юрлицо в Португалии удерживает 11.5 % (artigo 101 CIRS)',
              'Клиент-физлицо в Португалии — без удержания',
              'Иностранный клиент — без удержания',
              'Статус IFICI — удержание 11.5 %, но возврат при годовой декларации'
            ]}
          ]},
          { id: 's6', title: '6. Отправка', content: [
            { kind: 'paragraph', text: 'PDF recibo автоматически отправляется клиенту на электронную почту и доступен в Portal das Finanças. Клиент подтверждает получение оплаты в своём Portal das Finanças.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'Когда выставлять',
      content: [
        { kind: 'checklist', items: [
          '📅 По завершении услуги ИЛИ получении оплаты (что раньше)',
          '⏰ До 5-го числа следующего месяца после оплаты',
          '⚠️ Просрочка — штраф 150–3 750 € по CIVA',
          '🔄 Авансовая оплата → recibo на аванс, финальный — при доплате',
          '💳 Оплата картой → сразу recibo (когда деньги поступили в банк)',
          '🧾 Электронный и бумажный формат — с 2024+ только электронные для recibos verdes (электронных чеков самозанятого)'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Исправление ошибок',
      content: [
        { kind: 'checklist', items: [
          '⛔ Recibo УЖЕ выставлен — изменить нельзя. Только аннулировать и выписать новый',
          '🔄 Аннулирование — в Portal das Finanças в течение 48 часов',
          '🚨 После 48 часов — nota de crédito (на отрицательную сумму) + новый recibo',
          '📅 В текущем квартале — включается в текущую декларацию по IVA'
        ]}
      ]
    },
    {
      id: 'tax-obligations',
      title: 'Сопутствующие налоговые обязательства',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'IVA — раз в квартал (если обычный режим)', content: [
            { kind: 'checklist', items: [
              'Declaração Periódica (периодическая декларация) до 20-го числа следующего месяца после квартала',
              'Оплата — до 25-го',
              'Специальный режим (< 15 000 €) освобождён'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — каждый месяц', content: [
            { kind: 'paragraph', text: '21,4 % базы. Для впервые регистрируемых trabalhador independente — полное освобождение первые 12 месяцев (а не «скидка 50%»). Минимум 20 €/мес после льготы.' }
          ]},
          { id: 't3', title: 'IRS — раз в год (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'Март–июнь. Упрощённый режим: 75 % от оборота считается доходом (25 % — презюмируемые расходы). Для IFICI — фиксированная ставка 20 %.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IVA (CIVA)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1984-55502475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Emitir recibos verdes', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}