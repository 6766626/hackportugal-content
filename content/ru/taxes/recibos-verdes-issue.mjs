export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'Как выписать recibo verde (электронный чек самозанятого) — пошагово',
  tldr: 'Recibo verde — электронный чек самозанятого / ИП. Выписывается в Portal das Finanças → «Recibos Verdes Eletrónicos». Нужны: открытая деятельность, NIF клиента, сумма, описание услуги. IVA зависит от режима: regime normal (часто 23% на материке, ставки зависят от услуги и региона) или regime de isenção art. 53 CIVA при обороте до €15 000/год при выполнении условий.\n\nСрок — до 5-го рабочего дня после момента exigibilidade (завершение услуги, выставление счёта или аванс).',
  tags: ['recibo verde', 'ип', 'самозанятый', 'деятельность'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'Что нужно перед первым recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Открытая деятельность в Finanças (Início de Atividade)',
          '✅ Код деятельности: CAE и/или код CIRS по art. 151 (CAE 5-значный: например 70220 — management consultancy, 62010 — computer programming)',
          '✅ NIF и пароль от Portal das Finanças (или Chave Móvel Digital)',
          '✅ Решение по IVA: regime de isenção art. 53 CIVA (ожидаемый/предыдущий годовой оборот ≤ €15 000 + другие условия) или regime normal (ставка зависит от услуги и региона; часто 23% на материке)',
          '✅ NISS нужен для Segurança Social; для emissão recibo достаточно abertura de atividade, NIF и доступа к Portal das Finanças',
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
              'Адрес — иногда подтягивается по PT NIF, но нужно проверить',
              'Для иностранных клиентов IVA зависит от B2B/B2C, страны и типа услуги — нужно проверить regras de localização art. 6 CIVA'
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
              'Regime de isenção art. 53 CIVA: IVA не начисляется; указать мотив — "IVA - regime de isenção [artigo 53.º do CIVA]". Это освобождение, не ставка 0%',
              'Regime normal de IVA: применить соответствующую ставку — часто 23% на материке для обычных услуг; ставка зависит от услуги и региона (Madeira/Açores — другие)',
              'B2B клиент в другой стране ЕС с действительным VAT/VIES: обычно IVA не начисляется в Португалии, указывается reverse charge / autoliquidação; проверьте VIES и возможную declaração recapitulativa',
              'Клиент вне ЕС: для B2B часто место налогообложения вне Португалии, IVA PT не начисляется; для B2C и special services — отдельные правила (не "0%")'
            ]}
          ]},
          { id: 's5', title: '5. Удержание IRS', content: [
            { kind: 'checklist', items: [
              'Клиент в Португалии — компания/entidade com contabilidade organizada: retenção зависит от вида деятельности — часто 25% для профессий из tabela art. 151 CIRS; 11,5% только для некоторых других доходов Cat. B',
              'Клиент-физлицо в Португалии — обычно без удержания',
              'Иностранный клиент — без португальского удержания',
              'При обороте до лимита и условиях может применяться dispensa de retenção по art. 101-B CIRS',
              'IFICI: eligible income облагается по ставке 20% в годовой декларации, но retenção не становится автоматически 11,5% — ставка/код по CIRS и инструкциям AT'
            ]}
          ]},
          { id: 's6', title: '6. Отправка', content: [
            { kind: 'paragraph', text: 'После emissão документ доступен в Portal das Finanças; его можно скачать в PDF и отправить клиенту. Отдельного подтверждения оплаты клиентом в Portal не предусмотрено как обязательный шаг.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'Когда выставлять',
      content: [
        { kind: 'checklist', items: [
          '📅 Обычно после выполнения услуги или при получении аванса; для непрерывных услуг — специальные правила exigibilidade',
          '⏰ В общем случае — до 5-го рабочего дня после момента exigibilidade (art. 36 CIVA)',
          '⚠️ За нарушение правил faturação возможны штрафы по RGIT; размер зависит от ситуации и статуса',
          '🔄 Авансовая оплата → recibo на аванс, финальный — при доплате',
          '💳 Оплата картой → сразу recibo (когда деньги поступили в банк)',
          '🧾 Recibos verdes обычно оформляются электронно через Portal das Finanças / AT-authorized системы; бумажные допустимы лишь в ограниченных случаях'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Исправление ошибок',
      content: [
        { kind: 'checklist', items: [
          '⛔ Recibo УЖЕ выставлен — изменить нельзя. Только аннулировать или выпустить корректирующий документ',
          '🔄 Anulação/correção делается в Portal das Finanças, но допустимость и последствия зависят от типа документа и уже поданных деклараций',
          '🚨 Если простой anulação невозможен или документ попал в декларации: nota de crédito, новый документ, declaração substitutiva или корректировка IVA/IRS — в зависимости от случая',
          '📅 В текущем квартале корректировка обычно отражается в текущей декларации по IVA'
        ]}
      ]
    },
    {
      id: 'tax-obligations',
      title: 'Сопутствующие налоговые обязательства',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'IVA — mensal ou trimestral, если в regime normal', content: [
            { kind: 'checklist', items: [
              'Trimestral: declaração periódica обычно до 20-го числа второго месяца после квартала; оплата — до 25-го того же месяца',
              'Mensal: до 20-го числа второго месяца после месяца отчёта',
              'Regime de isenção art. 53 CIVA (≤ €15 000/год и др. условия): без cobrança IVA и без declaração periódica de IVA'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — квартальная декларация', content: [
            { kind: 'paragraph', text: 'Trabalhadores independentes обычно платят 21,4% sobre o rendimento relevante: обычно 70% дохода от услуг или 20% от sales/production/hotelaria/restauração. Расчёт по квартальной declaração с возможной корректировкой ±25%. При первом início de atividade обычно есть isenção inicial 12 месяцев; после — минимум €20 в отдельных случаях. Месячный потолок базы — 12×IAS = €6 445,56 (IAS 2026 = €537,13).' }
          ]},
          { id: 't3', title: 'IRS — раз в год (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'Modelo 3 обычно подаётся с 1 апреля по 30 июня. В regime simplificado коэффициент зависит от вида дохода: для многих professional services — 0,75; для других — 0,35, 0,15 и др.; часть расходов может требовать подтверждения. IFICI даёт ставку 20% только для eligible income при выполнении условий.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Faturas e Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IVA (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34470075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Trabalhadores Independentes', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}