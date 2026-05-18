export default {
  editorialVoice: 'hackportugal',
  id: 'voto-imigrante-municipal',
  categoryId: 'country_specific',
  title: 'Право голоса мигрантов на муниципальных выборах в Portugal',
  tldr: 'В Португалии иностранцы могут голосовать на eleições autárquicas — выборы Câmara Municipal, Assembleia Municipal и Junta de Freguesia. EU-граждане голосуют при резидентстве и регистрации в recenseamento eleitoral. Brazil и Cabo Verde — при законном проживании обычно более 2 лет и взаимности. Ряд стран с договорной взаимностью, включая Argentina, Chile, Colombia, Iceland, Norway, New Zealand, Peru, United Kingdom, Uruguay, Venezuela, — при более длительном законном проживании. Регистрация бесплатна, проверка — eleitor.mai.gov.pt.',
  tags: ['voto', 'eleições', 'мигранты', 'cplp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-can-vote',
      title: 'Кто из иностранцев может голосовать 🗳️',
      content: [
        { kind: 'paragraph', text: 'Речь только о local elections / eleições autárquicas: Câmara Municipal, Assembleia Municipal и Assembleia de Freguesia. Это не даёт права голосовать на выборах Assembleia da República, Presidente da República или референдумах, кроме специальных режимов для отдельных граждан, например brasileiros com estatuto de igualdade de direitos políticos.' },
        { kind: 'checklist', items: [
          'Граждане EU, проживающие в Portugal: могут голосовать на муниципальных выборах после регистрации в recenseamento eleitoral.',
          'Граждане Brazil: право зависит от законного проживания, регистрации и режима взаимности; для более широких политических прав нужен Estatuto de Igualdade de Direitos Políticos.',
          'Граждане Cabo Verde: обычно входят в режим CPLP с взаимностью для eleições autárquicas после законного проживания более 2 лет.',
          'Граждане других стран с взаимностью: Argentina, Chile, Colombia, Iceland, Norway, New Zealand, Peru, United Kingdom, Uruguay, Venezuela — право зависит от срока законного проживания и актуальной декларации MAI/CNE.',
          'Возраст: 18+ на день выборов.',
          'Нужно быть зарегистрированным избирателем в freguesia проживания.',
          'Адрес в recenseamento eleitoral должен соответствовать фактическому месту проживания, потому что голосуют по своей freguesia.'
        ] },
        { kind: 'warning', text: 'Проверьте свою страну по актуальному списку CNE/MAI перед выборами. Список стран с взаимностью может обновляться декларациями государства; не полагайтесь на старые таблицы из блогов.' }
      ]
    },
    {
      id: 'residence-periods',
      title: 'Срок проживания: EU, CPLP и treaty countries',
      content: [
        { kind: 'paragraph', text: 'Для EU-граждан ключевое условие — проживание в Portugal и регистрация как eleitor. Минимальный срок проживания для municipal vote обычно не применяется так же, как для third-country nationals.' },
        { kind: 'paragraph', text: 'Для граждан стран Portuguese-speaking с взаимностью, на практике прежде всего Brazil и Cabo Verde, применяется правило законного проживания более 2 лет для активного избирательного права на local elections, если нет специального более широкого статуса.' },
        { kind: 'paragraph', text: 'Для “other treaty / reciprocity countries” нужно смотреть актуальную формулировку CNE и MAI. В публичных памятках часто смешивают активное право голосовать и пассивное право быть кандидатом: сроки для кандидатства выше. Если вам говорят “4 года”, уточните, идёт ли речь о голосовании или о возможности быть избранным.' },
        { kind: 'checklist', items: [
          'EU: residência + регистрация в recenseamento eleitoral.',
          'CPLP с взаимностью: обычно legal residence более 2 лет для голосования.',
          'Brazil: отдельно проверьте Estatuto de Igualdade, если хотите права шире муниципальных.',
          'Cabo Verde: проверьте срок legal residence и регистрацию.',
          'Argentina / Chile / Colombia / Iceland / Norway / New Zealand / Peru / UK / Uruguay / Venezuela: проверьте актуальный reciprocal list CNE.',
          'Для кандидатства сроки и правила строже, чем для голосования.',
          'Наличие NIF, NISS или SNS само по себе не создаёт voting right.'
        ] }
      ]
    },
    {
      id: 'register',
      title: 'Как зарегистрироваться в recenseamento eleitoral',
      content: [
        { kind: 'paragraph', text: 'Иностранцы обычно не попадают в списки автоматически. Нужно запросить inscrição no recenseamento eleitoral в freguesia/município по месту проживания или через доступные цифровые сервисы, если они открыты для вашего статуса.' },
        { kind: 'checklist', items: [
          'Проверьте статус и место голосования на eleitor.mai.gov.pt.',
          'Подготовьте паспорт или Cartão de Cidadão / national ID для EU-граждан.',
          'Подготовьте ВНЖ Portugal или Certificado de Registo de Cidadão da União Europeia для EU-граждан.',
          'Возьмите подтверждение адреса: atestado de residência, contrato de arrendamento, счёт utilities или документ Câmara/Junta, если просят.',
          'Укажите страну гражданства и основание права голоса: EU, CPLP/reciprocity или treaty reciprocity.',
          'Попросите подтверждение регистрации или сохраните print/screenshot из Portal do Eleitor.',
          'Проверьте freguesia после переезда: голосовать будете там, где зарегистрированы.'
        ] },
        { kind: 'warning', text: 'Регистрация и изменения в recenseamento eleitoral обычно закрываются за 60 дней до выборов. Если local elections назначены, не ждите последней недели: вас могут не включить в cadernos eleitorais текущего голосования.' }
      ]
    },
    {
      id: 'election-day',
      title: 'В день голосования',
      content: [
        { kind: 'paragraph', text: 'На local elections вы голосуете в assembleia de voto своей freguesia. Участок и номер eleitor проверяются на eleitor.mai.gov.pt или через SMS-сервисы MAI, если они активны к конкретным выборам.' },
        { kind: 'checklist', items: [
          'Возьмите действующий документ ID: Cartão de Cidadão, паспорт, national ID EU или ВНЖ.',
          'Заранее проверьте morada и freguesia в списках eleitor.',
          'На участке назовите имя и покажите ID.',
          'Вы получите бюллетени по муниципальным органам: Câmara Municipal, Assembleia Municipal, Assembleia de Freguesia.',
          'Голосование тайное; фотографировать бюллетень не нужно и может вызвать проблемы.',
          'Если вас нет в списке, попросите mesa проверить caderno eleitoral и данные по freguesia.',
          'Если недавно переехали, участок может быть по старой freguesia, пока изменение не обновлено.'
        ] }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Частые ошибки мигрантов',
      content: [
        { kind: 'checklist', items: [
          'Думать, что ВНЖ автоматически даёт право голосовать. Нет: нужна страна с подходящим режимом и регистрация.',
          'Путать municipal elections с national elections. Иностранное право голоса почти всегда ограничено local elections.',
          'Проверять только NIF-адрес в Finanças. Electoral address — отдельная запись в recenseamento eleitoral.',
          'Переехать в другую freguesia и не обновить регистрацию.',
          'Опоздать к 60-дневной приостановке перед выборами.',
          'Считать, что все CPLP-граждане автоматически имеют одинаковые права. Нужна взаимность и законное проживание.',
          'Путать право голосовать с правом быть кандидатом: для кандидатства правила строже.',
          'Полагаться на списки стран до Brexit или до новых деклараций MAI/CNE.'
        ] },
        { kind: 'paragraph', text: 'Если вы не уверены, напишите или сходите в Junta de Freguesia по адресу проживания и попросите проверить “inscrição no recenseamento eleitoral para cidadão estrangeiro”. Это бесплатная административная процедура.' }
      ]
    }
  ],
  costs: [
    { label: 'Регистрация в recenseamento eleitoral', amountEUR: 0, note: 'Бесплатно; возможны расходы только на получение подтверждения адреса, если Junta de Freguesia требует atestado.' },
    { label: 'Atestado de residência в Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'Тариф зависит от freguesia; иногда бесплатно для отдельных целей.' }
  ],
  sources: [
    {
      title: 'CNE — Comissão Nacional de Eleições: права иностранных избирателей и eleições autárquicas',
      url: 'https://www.cne.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal do Eleitor MAI — проверка recenseamento eleitoral и места голосования',
      url: 'https://www.eleitor.mai.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei n.º 13/99 — Regime Jurídico do Recenseamento Eleitoral',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1999-34439975',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei Orgânica n.º 1/2001 — Eleição dos titulares dos órgãos das autarquias locais',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei-organica/2001-34438175',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
