export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-residencia-junta-freguesia',
  categoryId: 'documents_fiscal',
  title: 'Atestado de residência: справка о проживании из Junta de Freguesia',
  tldr: 'Atestado de residência — официальная справка от вашей Junta de Freguesia (местного «сельсовета»), подтверждающая, где вы живёте. Её просят для записи в школу/садик, ряда соцпособий, банков и муниципальных процедур. ❗ Для AIMA atestado НЕ работает: с 29.11.2025 AIMA официально не принимает справки junta как подтверждение жилья для получения/продления ВНЖ — там свой пакет (договор/certidão predial + декларация; если вас нет в договоре — certidão de domicílio fiscal из Finanças не старше 30 дней). Это НЕ то же самое, что comprovativo de morada (счёт за свет). Нужны: удостоверение личности, comprovativo de morada и формуляр junta. Ключевой нюанс для новоприбывших: если вы не внесены в избирательные списки (recenseamento) этой freguesia, потребуются 2 свидетеля, которые там зарегистрированы и не являются вашими родственниками. Стоимость обычно бесплатно или до ~5 € (≈5,60 € в Loja do Cidadão).',
  tags: ['atestado de residência', 'junta de freguesia', 'документы', 'morada'],
  estimatedReadMinutes: 6,
  recentlyChangedAt: '2026-08-01',
  changeSummary: '❗ Уточнение сферы применения: AIMA НЕ принимает atestados от Junta de Freguesia как подтверждение жилья для ВНЖ (официальное правило AIMA от 29.11.2025). Для AIMA — договор/certidão predial + декларация, а если вас нет в договоре — certidão de domicílio fiscal (Finanças, не старше 30 дней). Для школ, банков и муниципальных услуг atestado по-прежнему работает.',
  steps: [
    {
      id: 'what-and-why',
      title: 'Что это и зачем нужно',
      content: [
        { kind: 'paragraph', text: 'Atestado de residência выдаёт Junta de Freguesia — это орган местного самоуправления уровня района/прихода. Документ официально подтверждает, что вы проживаете по конкретному адресу в этой freguesia.' },
        { kind: 'checklist', items: [
          '🏫 Запись детей в школу, садик (creche), ATL и распределение по месту жительства.',
          '👶 Часть муниципальных и социальных пособий (cheque-bebé, многодетные и т.п.).',
          '🏦 Иногда — для банка, страховой, оператора связи.',
          '🛂 Для AIMA — НЕ подходит: с 29.11.2025 AIMA официально не принимает atestados как подтверждение жилья для получения/продления ВНЖ (подробности ниже).',
          'Подтверждает именно факт проживания по адресу, когда обычного счёта недостаточно.'
        ] },
        { kind: 'warning', text: '❗ AIMA с 29.11.2025 прямо пишет: «Não são aceites como meio de prova atestados emitidos pelas Juntas de Freguesia». Для ВНЖ пакет другой: своя декларация sob compromisso de honra (официальная minuta AIMA) + договор аренды на ваше имя с последним recibo, ЛИБО certidão predial (собственникам), ЛИБО contrato de comodato. Если вас в договоре НЕТ — в день приёма добавьте личную декларацию (№ registo predial, основание проживания, имя и NIF владельца) + certidão de domicílio fiscal из Finanças не старше 30 дней (см. гайд про эту справку). Запрет касается только AIMA: для школ, банков и муниципалитета atestado остаётся рабочим.' }
      ]
    },
    {
      id: 'documents',
      title: 'Какие документы нужны',
      content: [
        { kind: 'checklist', items: [
          '🪪 Удостоверение личности: Cartão de Cidadão, título de residência или паспорт.',
          '🧾 Comprovativo de morada: свежий счёт (água, luz, gás), договор аренды или другой документ с адресом.',
          '📝 Формуляр запроса (requerimento) — берётся в junta или скачивается с её сайта.',
          'Иногда — NIF; уточняйте требования вашей конкретной junta.',
          'Если подаёте за другого человека — доверенность/согласие.'
        ] }
      ]
    },
    {
      id: 'witnesses',
      title: 'Свидетели (testemunhas) — важно для новоприбывших',
      content: [
        { kind: 'paragraph', text: 'Главная сложность для тех, кто только переехал: если вы НЕ внесены в избирательные списки (recenseamento eleitoral) этой freguesia, junta обычно требует двух свидетелей.' },
        { kind: 'checklist', items: [
          'Нужны 2 свидетеля (testemunhas), которые сами зарегистрированы (recenseados) в этой freguesia.',
          'Свидетели подтверждают, что вы действительно здесь живёте.',
          'Свидетели НЕ должны быть вашими родственниками.',
          'Возьмите копии их удостоверений личности; иногда они должны прийти лично и подписать.',
          'Хорошие кандидаты в свидетели: соседи, арендодатель, давно живущие знакомые из этого района.',
          'Если вы уже recenseado в этой freguesia, свидетели обычно не нужны.'
        ] },
        { kind: 'warning', text: 'Требования к свидетелям и процедуре отличаются от junta к junta. Позвоните или загляните на сайт вашей Junta de Freguesia заранее, чтобы не прийти зря.' }
      ]
    },
    {
      id: 'cost-where',
      title: 'Сколько стоит и где получить',
      content: [
        { kind: 'checklist', items: [
          '💶 Обычно бесплатно или до ~5 € (≈5,60 € при оформлении в Loja do Cidadão) — зависит от junta.',
          '🏢 Лично — в вашей Junta de Freguesia по месту жительства (по адресу проживания, а не прописки в другом городе).',
          '💻 Часть junta выдаёт atestado онлайн через свой сайт/портал — проверьте сайт вашей freguesia.',
          '🏬 Некоторые услуги junta доступны и через Loja do Cidadão / Espaço Cidadão.',
          '⏱️ Часто выдают в тот же день; иногда — приём по записи.'
        ] }
      ]
    },
    {
      id: 'practical',
      title: 'Практика и частые вопросы',
      content: [
        { kind: 'checklist', items: [
          'Уточните срок действия: некоторые инстанции принимают atestado не старше 3–6 месяцев.',
          'Берите справку именно в той freguesia, где реально живёте; узнать свою freguesia можно по адресу на сайте муниципалитета.',
          'Сразу попросите столько экземпляров, сколько нужно — иногда это удобнее, чем приходить снова.',
          'Если адрес недавно сменился, сначала обновите comprovativo de morada (счёт/договор).',
          'Для AIMA atestado не подходит (правило от 29.11.2025) — используйте пакет из гайдов про продление ВНЖ и certidão de domicílio fiscal; перед этим проверьте, что адрес в Finanças актуален.'
        ] },
        { kind: 'paragraph', text: 'Связанные гайды: смена адреса во всех сервисах (Cartão de Cidadão, Finanças, NISS), Espaço Cidadão и Loja do Cidadão.' }
      ]
    }
  ],
  sources: [
    {
      title: 'DECO PROTESTE — Atestado de residência: para que serve e como obter',
      url: 'https://www.deco.proteste.pt/familia-consumo/cidadania/dicas/atestado-residencia-serve-obter',
      kind: 'secondary',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'Freguesia de Estrela — Atestados de residência (exemplo de junta, incl. online)',
      url: 'https://www.jf-estrela.pt/comunidade/servicos/1-atestados_de_residencia',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'gov.pt — Espaço Cidadão e serviços das juntas de freguesia',
      url: 'https://www.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'AIMA — Comprovativo de Alojamento: Concessão e Renovação de Autorização de Residência (29.11.2025)',
      url: 'https://aima.gov.pt/pt/noticias/hklkjl',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-08-01'
    }
  ],
  lastVerified: '2026-08-01',
  verifyIntervalDays: 365
}
