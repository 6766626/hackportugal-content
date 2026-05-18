export default {
  editorialVoice: 'hackportugal',
  id: 'doctoralia-marcacao-medico',
  categoryId: 'healthcare',
  title: 'Doctoralia и Linkare — поиск и запись к частному врачу',
  tldr: 'В Португалии частного врача быстрее всего искать через Doctoralia.pt: 25 000+ врачей и клиник, отзывы, цены, языки, онлайн-календарь и фильтры по Médis/Multicare. Linkare удобен для анализов, exames и части специалистов: можно сравнить слоты и записаться без звонков. Типичный приём у частного терапевта стоит 50–80 €, у специалиста 70–120 €, с seguro de saúde часто 15–40 €. Перед визитом всегда подтверждайте цену, страховую сеть и нужен ли referral.',
  tags: ['doctoralia', 'linkare', 'медицина', 'seguro'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-private',
      title: 'Когда идти в частную медицину',
      content: [
        { kind: 'paragraph', text: 'SNS остаётся базовой системой, но для экспата частный врач часто быстрее: приём можно получить в тот же день или в течение недели, выбрать язык врача, район, клинику и цену. Это особенно полезно до получения número de utente, при длинной очереди к médico de família или когда нужен узкий специалист.' },
        { kind: 'checklist', items: [
          'Нужен приём сегодня/на этой неделе, а в SNS нет слотов',
          'Нужен врач, говорящий по-английски, испански или русски',
          'Нужна dermatologia, ginecologia, pediatria, psiquiatria, ortopedia, oftalmologia без долгого ожидания',
          'Нужен second opinion перед операцией или лечением',
          'Нужны анализы, ecografia, raio-X, TAC, ressonância magnética',
          'Есть seguro de saúde: Médis, Multicare, AdvanceCare, Allianz, Tranquilidade и т.п.',
          'Вы пока без ВНЖ или без número de utente, но готовы оплатить частно'
        ] }
      ]
    },
    {
      id: 'doctoralia',
      title: 'Doctoralia.pt: основной поиск врача',
      content: [
        { kind: 'paragraph', text: 'Doctoralia.pt — крупнейший агрегатор частных врачей в Португалии: более 25 000 врачей и клиник, профили, отзывы пациентов, онлайн-календарь, адреса, цены и часть страховых фильтров. Для Лиссабона, Порту, Браги, Коимбры, Алгарве и Мадейры это обычно первый сайт для поиска especialista.' },
        { kind: 'checklist', items: [
          'Откройте doctoralia.pt и выберите especialidade: “Clínico geral”, “Dermatologista”, “Ginecologista”, “Pediatra”, “Psiquiatra”',
          'Укажите город или почтовый индекс: Lisboa, Porto, Cascais, Oeiras, Braga, Faro и т.д.',
          'Отфильтруйте “Marcação online”, если хотите записаться без звонка',
          'Проверьте “Opiniões”: смотрите не только рейтинг, но и свежесть отзывов',
          'Проверьте цену консультации: “Consulta privada” или “Primeira consulta”',
          'Если есть страховка, ищите “Seguro de saúde” и название сети: Médis, Multicare, AdvanceCare',
          'Проверьте языки в профиле врача; если не указано, напишите в чат/позвоните в клинику',
          'Сохраните подтверждение записи из email/SMS/WhatsApp'
        ] },
        { kind: 'warning', text: 'Цена на Doctoralia не всегда финальная. Дополнительные процедуры, exames, удаление родинки, citologia, ecografia, relatório médico или срочная консультация могут оплачиваться отдельно. Перед визитом напишите: “Qual é o preço total da consulta? Aceitam o meu seguro?”' }
      ]
    },
    {
      id: 'linkare-myclinic',
      title: 'Linkare, MyClinic и клиники напрямую',
      content: [
        { kind: 'paragraph', text: 'Linkare.pt полезен, когда задача не только “найти врача”, но и быстро записаться на анализы, exames или консультацию специалиста. В зависимости от города доступны лабораторные исследования, диагностические процедуры и médicos especialistas с онлайн-маркировкой.' },
        { kind: 'paragraph', text: 'MyClinic и сайты сетей частных клиник тоже стоит проверять напрямую: CUF, Lusíadas, Hospital da Luz, Trofa Saúde, Joaquim Chaves Saúde, Germano de Sousa, Unilabs. Иногда свободные слоты на сайте клиники появляются раньше, чем в агрегаторе.' },
        { kind: 'checklist', items: [
          'Для анализов ищите “análises clínicas”, “check-up”, “exames”',
          'Для диагностики ищите “ecografia”, “raio-X”, “TAC”, “ressonância magnética”, “endoscopia”',
          'Уточняйте, нужен ли pedido médico: для некоторых exames клиника может требовать направление',
          'Если нужен результат на английском, запросите “relatório em inglês” заранее',
          'Для страховой проверьте, является ли конкретная клиника prestador convencionado',
          'Для срочного вопроса звонок часто быстрее онлайн-формы',
          'Для детей уточняйте наличие pediatra и возрастные ограничения'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'Как не переплатить со страховкой Médis/Multicare',
      content: [
        { kind: 'paragraph', text: 'Seguro de saúde в Португалии обычно работает через rede convencionada: вы платите copagamento, а не полную цену. Но один и тот же врач может принимать частно, по Médis, по Multicare или только по одной сети — это нужно подтвердить до визита.' },
        { kind: 'checklist', items: [
          'Проверьте врача в приложении страховой: Médis, Multicare, AdvanceCare и т.п.',
          'Сверьте адрес: врач может работать в нескольких клиниках, но страховка действует не везде',
          'Спросите у клиники: “Trabalham com a rede Médis/Multicare para esta consulta?”',
          'Уточните copagamento: часто 15–40 € вместо 70–120 €',
          'Проверьте carência: у новой страховки может быть период ожидания',
          'Для психиатрии, беременности, стоматологии и физиотерапии лимиты часто отдельные',
          'Возьмите cartão do seguro, NIF и документ личности',
          'Если платите полностью, попросите fatura com NIF — её можно учитывать в despesas de saúde в IRS'
        ] },
        { kind: 'warning', text: 'Фильтр “страховка” на агрегаторе — не гарантия покрытия. Финальное правило всегда у страховой и клиники на дату визита. В 2026 году лучше проверять через приложение страховой и подтверждать по телефону.' }
      ]
    },
    {
      id: 'appointment-day',
      title: 'День приёма: что взять и что спросить',
      content: [
        { kind: 'checklist', items: [
          'Документ личности: паспорт, Cartão de Cidadão или ВНЖ',
          'NIF — для fatura и IRS',
          'Cartão do seguro или данные полиса, если есть seguro de saúde',
          'Número de utente SNS, если уже есть',
          'Список лекарств с дозировками и аллергии',
          'Старые анализы, exames, выписки, снимки, PDF на телефоне',
          'Запросите receita eletrónica, если нужны лекарства',
          'Спросите, нужен ли follow-up и сколько он стоит',
          'Если нужен документ для работы/школы/визового дела, попросите relatório médico или declaração'
        ] },
        { kind: 'paragraph', text: 'Оплата обычно картой, MB WAY или Multibanco. В маленьких кабинетах иногда принимают только cartão/Multibanco или наличные, поэтому лучше уточнить заранее.' }
      ]
    }
  ],
  costs: [
    { label: 'Частный терапевт / clínico geral', amountEURMin: 50, amountEURMax: 80, note: 'Типичная цена без страховки; в крупных сетях может быть выше.' },
    { label: 'Частный специалист', amountEURMin: 70, amountEURMax: 120, note: 'Dermatologia, ginecologia, pediatria, ortopedia, psiquiatria; процедуры и exames отдельно.' },
    { label: 'Приём по seguro de saúde', amountEURMin: 15, amountEURMax: 40, note: 'Обычный copagamento в rede convencionada; зависит от полиса и клиники.' },
    { label: 'Базовые análises clínicas', amountEURMin: 10, amountEURMax: 60, note: 'Цена зависит от набора анализов и наличия направления/страховки.' }
  ],
  sources: [
    { title: 'Doctoralia Portugal — поиск врачей, отзывы и marcação online', url: 'https://www.doctoralia.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Linkare Portugal — запись на exames, análises и специалистов', url: 'https://www.linkare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
