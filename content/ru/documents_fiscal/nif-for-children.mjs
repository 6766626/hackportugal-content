export default {
  editorialVoice: 'hackportugal',
  id: 'nif-for-children',
  categoryId: 'documents_fiscal',
  title: 'NIF для ребёнка — как оформить',
  tldr: 'NIF ребёнка часто просят: для школы, оформления SNS (Número de Utente), страховки, частных мед.услуг, Abono de Família. Если ребёнок получает португальское гражданство и оформляется первый Cartão de Cidadão/Nascer Cidadão, NIF/NISS/Número de Utente обычно присваиваются в рамках этой процедуры. Для ребёнка-иностранца (даже родившегося в PT) NIF оформляется отдельно в Finanças. Бесплатно.',
  tags: ['nif', 'дети', 'документы'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда NIF ребёнка обычно просят',
      content: [
        { kind: 'checklist', items: [
          'Запись в государственную или частную школу, детский сад или ясли',
          'Регистрация в SNS (Número de Utente) — через Centro de Saúde',
          'Abono de Família — кроме NIF обычно нужен NISS ребёнка/связка в Segurança Social и выполнение условий по резидентству и доходам',
          'Оформление медицинской страховки на ребёнка',
          'Включение ребёнка в Reagrupamento Familiar',
          'Наследование, получение подарков и переводов'
        ]},
        { kind: 'paragraph', text: 'Для школы и SNS отсутствие NIF не должно блокировать базовый доступ, но NIF часто нужен для административных записей, пособий, страховок и налоговых/финансовых действий.' }
      ]
    },
    {
      id: 'path-pt-born',
      title: 'Если ребёнок родился в Португалии',
      content: [
        { kind: 'paragraph', text: 'В больнице работает Balcão do Nado Vivo («Окно новорождённого») — единая процедура регистрации младенца.' },
        { kind: 'checklist', items: [
          'В течение 20 дней после рождения — регистрация имени в Conservatória do Registo Civil',
          'Если ребёнку оформляют португальский Cartão de Cidadão/Nascer Cidadão, вместе с ним обычно присваиваются NIF, NISS и Número de Utente одним пакетом',
          'Если ребёнок остаётся иностранным гражданином, уточняйте отдельно: NIF — в Finanças, utente — в centro de saúde, NISS — в Segurança Social/ISS',
          'Родители получают Cédula de Nascimento в электронном виде или Assento de Nascimento',
          'Гражданство ребёнка зависит от законов страны родителей. По действующей Lei n.º 37/81 art. 1.º ребёнок, родившийся в PT от иностранных родителей, может быть português de origem, если на момент рождения один из родителей проживает в PT не менее 1 года и не находится на службе иностранного государства; есть и другие специальные основания. Новый закон о гражданстве, одобренный 01.04.2026, ожидает промульгации'
        ]}
      ]
    },
    {
      id: 'path-foreign',
      title: 'Если ребёнок приехал из-за рубежа',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Вариант A — лично в Finanças', content: [
            { kind: 'checklist', items: [
              'Записаться на приём на Portal das Finanças или прийти в порядке живой очереди',
              'Оба родителя или один родитель + доверенность от второго, а также ребёнок',
              'Документы: паспорт ребёнка, свидетельство о рождении (апостиль/легализация, если применимо, + заверенный перевод на португальский; для документов ЕС — проверить Reg. (EU) 2016/1191 о multilingual standard form), NIF обоих родителей',
              'Подтверждение адреса в Португалии: контракт аренды или Atestado de Residência',
              'NIF выдаётся в день визита, бесплатно'
            ]}
          ]},
          { id: 'f2', title: 'Вариант B — дистанционно через представителя', content: [
            { kind: 'paragraph', text: 'Если родители — граждане третьих стран и ещё не находятся в Португалии, действует тот же механизм, что и для взрослого NIF через фискального представителя. После переезда нужно изменить morada fiscal на адрес в Portugal/EU/EEA — тогда representante fiscal обычно можно снять; сам ВНЖ без смены morada fiscal в Finanças этого не делает.\n\nСтоимость — 70–150 € через юриста или компанию.' }
          ]},
          { id: 'f3', title: 'Вариант C — если налоговый адрес в Portugal/EU/EEA', content: [
            { kind: 'paragraph', text: 'Если налоговый адрес ребёнка/родителя находится в Portugal/EU/EEA, fiscal representative обычно не нужен. Если адрес в третьей стране (включая CPLP), правила о representante fiscal/электронных уведомлениях нужно проверять отдельно; CPLP-гражданство само по себе не даёт EU-режим.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'После получения NIF',
      content: [
        { kind: 'checklist', items: [
          'Родитель/законный представитель действует от имени ребёнка; при необходимости можно запросить пароль Portal das Finanças для NIF ребёнка. Для налогов важна корректная связка ребёнка в agregado familiar',
          'Активировать Portal das Finanças для ребёнка — если родителю нужно от имени ребёнка видеть налоги; обычно до 18 лет это не требуется',
          'Предоставить NIF в школу или детский сад при записи',
          'Для SNS (Número de Utente) следующий шаг — обратиться в Centro de Saúde по месту жительства',
          'Для Abono de Família — подача через Segurança Social Direta родителя на ребёнка'
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Частые сложности',
      content: [
        { kind: 'warning', text: 'Если страна выдачи свидетельства не участвует в Гаагской конвенции об апостиле, нужна консульская легализация. Проверяйте статус страны в HCCH Apostille status table — Канада (с 11.01.2024) и Китай (с ноября 2023, материковая часть) уже используют апостиль. Для Украины — онлайн-апостиль через Дию. Для документов ЕС возможна multilingual standard form по Reg. (EU) 2016/1191 без перевода.' },
        { kind: 'warning', text: 'Если ребёнок рождён от ЭКО или с неизвестным отцом — укажите только одного родителя; Finanças принимает это без проблем.' },
        { kind: 'warning', text: 'Перевод имени ребёнка — сверьтесь с тем, как оно будет указано в паспорте. Разные транслитерации (MARIIA/MARIA/MARYA) создают проблемы при поступлении в школу и получении Abono de Família.' }
      ]
    }
  ],
  documents: [
    { title: 'Свидетельство о рождении', note: 'апостиль/легализация, если применимо, + заверенный перевод на португальский; для документов ЕС — проверить multilingual standard form (Reg. EU 2016/1191)' },
    { title: 'Паспорт ребёнка', note: 'оригинал + копия' },
    { title: 'Паспорта родителей', note: 'оба, с NIF' },
    { title: 'Atestado de Residência', note: 'или контракт аренды' }
  ],
  costs: [
    { label: 'Госпошлина Finanças', amountEUR: 0 },
    { label: 'Апостиль + перевод свидетельства', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Фискальный представитель (если дистанционно)', amountEURMin: 70, amountEURMax: 150 }
  ],
  timelineDaysMin: 1,
  timelineDaysMax: 15,
  sources: [
    { title: 'ePortugal — Balcão do Nado Vivo', url: 'https://www.gov.pt/servicos/registar-o-nascimento-no-balcao-do-nado-vivo', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão / Nascer Cidadão', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — Ofício Circulado 90057/2022 (representante fiscal)', url: 'https://info.portaldasfinancas.gov.pt/pt/atualidades/instrucoesadmin/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'HCCH — Apostille Convention status', url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41', kind: 'official', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Lei n.º 37/81 — Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34514475', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}