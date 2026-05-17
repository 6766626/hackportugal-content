export default {
  editorialVoice: 'hackportugal',
  id: 'acores-irs-rates',
  categoryId: 'taxes',
  title: 'IRS на Азорах: отдельные таблицы удержания 2026 для резидентов АР',
  tldr: 'Если вы налоговый резидент Região Autónoma dos Açores, зарплата или пенсия в 2026 удерживается не по таблицам Continente и не по Madeira, а по отдельным tabelas de retenção na fonte dos Açores, утверждённым Despacho 1179/2026. Это авансовое удержание IRS, а не окончательный налог: финальный расчёт всё равно делается в декларации Modelo 3 за 2026 год в 2027. Проверьте, что работодатель/пенсионный фонд применяет именно Açores, особенно при удалённой работе на компанию с материка.',
  tags: ['irs', 'açores', 'налоги', 'retenção'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-different',
      title: 'Что отличается на Азорах',
      content: [
        { kind: 'paragraph', text: 'Região Autónoma dos Açores имеет собственные таблицы retenção na fonte для IRS. В 2026 году они утверждены Despacho 1179/2026 и применяются отдельно от таблиц Continente и Madeira.' },
        { kind: 'paragraph', text: 'Retenção na fonte — это ежемесячный аванс по IRS, который работодатель, пенсионный фонд или другой плательщик удерживает с дохода. Это не финальная ставка налога: окончательная сумма считается после подачи Modelo 3 в 2027 году с учётом всех доходов, вычетов, семейного состава и резидентства.' },
        { kind: 'checklist', items: [
          'Если вы живёте и являетесь налоговым резидентом на Азорах — применяются таблицы Açores.',
          'Если работодатель находится в Lisboa/Porto, но ваше налоговое резидентство и адрес в Finanças — Açores, удержание должно быть по таблицам Açores.',
          'Если вы живёте на материке, но работодатель зарегистрирован на Азорах — сами по себе таблицы Açores не применяются.',
          'Для Madeira есть свои таблицы; нельзя смешивать Madeira и Açores.',
          'Для recibos verdes стандартная retenção зависит от типа дохода и правил CIRS, а не от зарплатной таблицы работника.'
        ] }
      ]
    },
    {
      id: 'who-uses',
      title: 'Кому это важно в 2026',
      content: [
        { kind: 'paragraph', text: 'Практически это касается всех, кто получает зарплату или пенсию и имеет налоговый адрес в Azores: São Miguel, Terceira, Faial, Pico, Santa Maria, São Jorge, Graciosa, Flores или Corvo.' },
        { kind: 'checklist', items: [
          'Наёмные работники по contrato de trabalho.',
          'Пенсионеры с пенсией, облагаемой IRS в Португалии.',
          'Экспаты на D7/D8/D1-D3, которые уже стали налоговыми резидентами на Азорах.',
          'Сотрудники португальских компаний, работающие удалённо с Азорских островов.',
          'Семьи, где один супруг работает на материковую компанию, но household зарегистрирован в Açores.',
          'Люди, переехавшие с Continente на Açores в течение 2026 года и обновившие налоговый адрес.'
        ] },
        { kind: 'warning', text: 'Главный риск — payroll по инерции ставит Continente. Разница обнаруживается только в recibo de vencimento или при годовом IRS, когда может появиться неожиданная доплата или возврат.' }
      ]
    },
    {
      id: 'check-payroll',
      title: 'Как проверить, что удерживают правильно',
      content: [
        { kind: 'paragraph', text: 'Проверка занимает 10 минут. Нужны recibo de vencimento за месяц 2026 года, ваш семейный статус для IRS и подтверждение налогового адреса в Finanças.' },
        { kind: 'substeps', items: [
          { id: 'address', title: '1. Проверьте morada fiscal', content: [
            { kind: 'paragraph', text: 'В Portal das Finanças откройте Dados Pessoais → Morada Fiscal. Адрес должен быть на Азорах. Если адрес ещё материковый, payroll формально может применять неправильную таблицу.' }
          ] },
          { id: 'payslip', title: '2. Откройте recibo de vencimento', content: [
            { kind: 'checklist', items: [
              'Найдите строку IRS или Retenção IRS.',
              'Проверьте месячную базу: salário base + регулярные надбавки, если они облагаются.',
              'Проверьте, есть ли отдельные строки subsídio de refeição, duodécimos, prémios.',
              'Сравните удержание с таблицей Açores для вашего статуса: não casado, casado 1 titular, casado 2 titulares, dependentes.',
              'Если сумма совпадает с таблицей Continente, а вы резидент Açores — пишите payroll.'
            ] }
          ] },
          { id: 'ask-hr', title: '3. Попросите HR исправить', content: [
            { kind: 'paragraph', text: 'Напишите коротко: “A minha morada fiscal é na Região Autónoma dos Açores. Peço a aplicação das tabelas de retenção na fonte de IRS dos Açores para 2026, aprovadas pelo Despacho 1179/2026.” Приложите comprovativo de morada fiscal, если просят.' }
          ] }
        ] }
      ]
    },
    {
      id: 'not-final-tax',
      title: 'Не путайте удержание и финальный IRS',
      content: [
        { kind: 'paragraph', text: 'Таблица retenção решает только, сколько удержать сейчас. Финальный IRS за 2026 год считается в 2027 году в декларации Modelo 3. Там учитываются прогрессивные ставки, deductions, dependentes, despesas gerais familiares, saúde, educação, rendas, PPR и другие вычеты.' },
        { kind: 'checklist', items: [
          'Меньшее удержание каждый месяц не означает, что налог “прощён”.',
          'Если удерживали слишком мало — будет nota de cobrança к оплате после liquidação.',
          'Если удерживали слишком много — будет reembolso.',
          'При смене региона в середине года важны даты фактического и налогового резидентства.',
          'Доходы из-за рубежа декларируются отдельно; таблица удержания работодателя их не видит.',
          'Наличие IFICI, старого NHR или льготного режима не отменяет обязанности проверить payroll.'
        ] },
        { kind: 'warning', text: 'Если вы получаете иностранную зарплату без португальского payroll, таблицы retenção na fonte могут вообще не применяться. Но это не освобождает от IRS: доход всё равно может декларироваться в Portugal как налоговым резидентом.' }
      ]
    },
    {
      id: 'minimum-wage-and-thresholds',
      title: 'Контекст 2026: SMN, IAS и низкие доходы',
      content: [
        { kind: 'paragraph', text: 'В 2026 году salário mínimo nacional составляет 920 € в месяц, IAS — 537,13 €. Эти величины важны для социальных и налоговых расчётов, но не заменяют таблицы удержания. Для зарплаты нужно смотреть именно таблицу Açores 2026 по типу семьи и числу dependentes.' },
        { kind: 'paragraph', text: 'Если зарплата близка к SMN, удержание IRS может быть нулевым или низким в зависимости от семейного положения. Но Segurança Social обычно удерживается отдельно: стандартно 11% с работника по contrato de trabalho, если нет специального режима.' },
        { kind: 'warning', text: 'Не используйте калькуляторы “Portugal 2026” без выбора региона. Многие онлайн-калькуляторы по умолчанию считают Continente и дают неверную retenção для Açores.' }
      ]
    },
    {
      id: 'moving-region',
      title: 'Если переезжаете между Continente, Madeira и Açores',
      content: [
        { kind: 'paragraph', text: 'При переезде регион для удержания не меняется магически. Нужно обновить morada fiscal и сообщить работодателю. Для граждан с Cartão de Cidadão это делается через ePortugal/CMD или presencialmente; для иностранцев с ВНЖ — через Portal das Finanças или atendimento, в зависимости от доступа.' },
        { kind: 'checklist', items: [
          'Обновите morada fiscal сразу после переезда.',
          'Сохраните comprovativo de alteração de morada.',
          'Сообщите HR/payroll месяц, с которого применять Açores.',
          'Проверьте следующий recibo de vencimento.',
          'Если удерживали по старой таблице несколько месяцев, попросите корректировку в payroll.',
          'При сомнениях покажите бухгалтеру все payslips за год и даты переезда.'
        ] },
        { kind: 'paragraph', text: 'Ошибки удержания обычно исправляются через последующие payroll-месяцы или через финальную liquidação IRS. Но лучше исправить в течение года, чтобы не получить крупную доплату весной-летом 2027.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Portal das Finanças: таблицы retenção na fonte IRS',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/tabela_ret_doclib/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IRS на Portal das Finanças',
      url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs99.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'PwC Inforfisco: IRS — tabelas de retenção na fonte 2026',
      url: 'https://www.pwc.pt/pt/pwcinforfisco/flash/irs-e-seguranca-social/irs-tabela-taxas-retencao-fonte-continente-20260.html',
      kind: 'company',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'TOC Online: atualização das tabelas de IRS para os Açores',
      url: 'https://toconline.pt/novidades/atualizacao-das-tabelas-de-irs-para-os-acores/',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
