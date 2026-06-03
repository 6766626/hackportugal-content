export default {
  editorialVoice: 'hackportugal',
  id: 'irs-municipal-devolucao',
  categoryId: 'taxes',
  title: 'IRS Municipal: возврат до 5% подоходного налога от município',
  tldr: 'IRS Municipal — это не отдельная льгота и не заявление: município может вернуть жителю до 5% IRS через расчёт Finanças. В декларации IRS за 2025 год, подаваемой в 2026, возврат применяется автоматически, если ваш NIF-адрес на 31.12.2025 был в município с devolução. Примеры на 2026: Lisboa — 2,5%, Porto — 3%, Cascais — 5%. Проверьте адрес в Finanças до конца года: неверный domicílio fiscal = деньги уйдут не тому município либо льготы не будет вовсе.',
  tags: ['irs', 'municipal', 'налоги', 'finanças'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что такое IRS Municipal',
      content: [
        { kind: 'paragraph', text: 'Каждый município имеет право на долю до 5% от IRS жителей с налоговым адресом на его территории. Это предусмотрено Lei 73/2013, art. 26 — Regime Financeiro das Autarquias Locais.' },
        { kind: 'paragraph', text: 'Если município решает не забирать всю долю, разница возвращается налогоплательщику как devolução / benefício municipal в расчёте IRS. Максимум — 5%.' },
        { kind: 'paragraph', text: 'Это не значит, что вам вернут 5% от зарплаты или от всего удержанного налога. Расчёт идёт внутри liquidação IRS по формуле AT, от вашей coleta líquida после применимых вычетов.' },
        { kind: 'warning', text: 'IRS Municipal работает только для налоговых резидентов Португалии, которые подают IRS Modelo 3. Для нерезидентов с португальским доходом эта муниципальная devolução обычно не применяется.' }
      ]
    },
    {
      id: 'examples-2026',
      title: 'Примеры ставок в 2026',
      content: [
        { kind: 'paragraph', text: 'Для IRS за 2025 год, который подаётся с 1 апреля по 30 июня 2026, município уже передали свои решения в Autoridade Tributária. Ставки нужно проверять по году дохода, а не по дате подачи декларации.' },
        { kind: 'checklist', items: [
          'Lisboa — devolução 2,5%',
          'Porto — devolução 3%',
          'Cascais — devolução 5%',
          'Если município даёт 0% devolução, житель не получает муниципальный возврат',
          'Если município даёт 5%, это максимальная муниципальная devolução',
          'Ставки могут меняться каждый налоговый год решением Assembleia Municipal',
          'Проверка делается на Portal das Finanças в разделе Taxas do Município'
        ] },
        { kind: 'paragraph', text: 'На практике разница может быть небольшой для людей с низкой coleta IRS и заметнее для семей с высоким облагаемым доходом. Возврат появляется в итоговой liquidação IRS, отдельно подавать заявление не нужно.' }
      ]
    },
    {
      id: 'address-rule',
      title: 'Главное условие: адрес NIF в правильном município',
      content: [
        { kind: 'paragraph', text: 'Finanças смотрит на ваш domicílio fiscal — налоговый адрес, привязанный к NIF. Обычно важен адрес на 31 декабря года дохода. Для декларации IRS 2025, подаваемой в 2026, критична ситуация на 31.12.2025.' },
        { kind: 'checklist', items: [
          'Проверьте адрес в Portal das Finanças: Dados Pessoais → Morada Fiscal',
          'Если переехали, обновите morada fiscal как можно раньше',
          'С Cartão de Cidadão адрес меняется через ePortugal / CMD и затем подтверждается кодом',
          'Иностранцы без Cartão de Cidadão обычно меняют адрес через Portal das Finanças или serviço de Finanças',
          'Адрес в договоре аренды сам по себе не меняет domicílio fiscal',
          'Адрес в AIMA, банке, SNS или у работодателя не заменяет адрес в Finanças',
          'Если супруги подают совместную декларацию, проверьте адреса обоих NIF'
        ] },
        { kind: 'warning', text: 'Частая ошибка экспатов: жить в Cascais или Oeiras, но оставить NIF-адрес в Lisboa, у fiscal representative или по старому Airbnb. Тогда IRS Municipal считается по старому município, даже если фактически вы жили в другом месте.' }
      ]
    },
    {
      id: 'how-to-check',
      title: 'Как проверить и увидеть возврат',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-rate', title: '1. Проверить ставку município', content: [
            { kind: 'paragraph', text: 'Откройте таблицу Taxas do Município на Portal das Finanças или сводку ANMP. Ищите год дохода и название município. Важно отличать «participação no IRS» от «devolução»: benefício для жителя — это часть, которую município не забирает.' }
          ] },
          { id: 'submit-irs', title: '2. Подать IRS как обычно', content: [
            { kind: 'paragraph', text: 'Срок подачи IRS за 2025 год — с 1 апреля по 30 июня 2026. Используйте IRS Automático, если он доступен, или Modelo 3 вручную. Отдельного поля для заявления на IRS Municipal обычно заполнять не нужно.' }
          ] },
          { id: 'see-settlement', title: '3. Проверить demonstração de liquidação', content: [
            { kind: 'paragraph', text: 'После обработки декларации скачайте Nota de Liquidação / Demonstração de Liquidação в Portal das Finanças. Муниципальная devolução отражается в расчёте как benefício или redução, влияющая на итог: refund больше или imposto a pagar меньше.' }
          ] }
        ] }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Практические сценарии для экспатов',
      content: [
        { kind: 'checklist', items: [
          'Переехали в Португалию в 2025 и стали налоговым резидентом: проверьте, что NIF-адрес был обновлён до 31.12.2025',
          'Жили часть года в Lisboa, потом переехали в Cascais: обычно учитывается domicílio fiscal на конец года',
          'Работодатель удерживал IRS по месту офиса в Porto, но вы живёте в Braga: município определяется не офисом, а вашим NIF-адресом',
          'Вы самозанятый на recibos verdes: правило такое же, município берётся по domicílio fiscal',
          'У вас нет налога к уплате после вычетов: муниципальная devolução может быть нулевой или очень маленькой',
          'Получаете reembolso IRS: devolução увеличивает возврат, но не приходит отдельным переводом',
          'Должны доплатить IRS: devolução уменьшает сумму к оплате'
        ] },
        { kind: 'paragraph', text: 'Для налогового планирования это мелочь по сравнению с резидентством, режимом IFICI, ставками IRS и deductions, но адрес NIF исправить легко. Если município возвращает 5%, не теряйте этот автоматический бонус.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças — Taxas do Município / Participação variável no IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00073.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ANMP — informação municipal sobre participação no IRS',
      url: 'https://anmp.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 73/2013, art. 26 — participação variável dos municípios no IRS',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2013-50002386',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
