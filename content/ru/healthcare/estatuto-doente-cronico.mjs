export default {
  editorialVoice: 'hackportugal',
  id: 'estatuto-doente-cronico',
  categoryId: 'healthcare',
  title: 'Estatuto de Doente Crónico — статус хронического больного',
  tldr: 'В Португалии нет одной “карты хронического больного” на все случаи: статус фиксируется врачом SNS, обычно médico de família, в вашей клинической записи и рецептах. Он нужен для isenção de taxas moderadoras в оставшихся платных случаях SNS и для специальной comparticipação лекарств: по протоколам диабета, онкологии, астмы, гипертонии и др. часть препаратов может быть 100% оплачена государством. В 2026 taxas moderadoras почти отменены, но urgência без направления всё ещё может стоить 14–18 €.',
  tags: ['sns', 'хроника', 'medicamentos', 'utente'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'Что это на практике',
      content: [
        { kind: 'paragraph', text: 'Estatuto de Doente Crónico — не отдельный пластиковый документ и не универсальная льгота.\n\nНа практике это медицинское подтверждение хронического заболевания в системе SNS: диагноз, длительное лечение, активные рецепты и, если применимо, право на специальную comparticipação лекарств или isenção de taxas moderadoras.' },
        { kind: 'paragraph', text: 'Чаще всего это касается diabetes mellitus, hipertensão arterial, asma/DPOC, doenças oncológicas, doenças reumáticas, неврологических и сердечно-сосудистых заболеваний, хронической почечной недостаточности и других состояний, где лечение длится месяцами или пожизненно.' },
        { kind: 'warning', text: 'Не любое хроническое заболевание автоматически даёт 100% оплату всех лекарств. Государство оплачивает по специальному режиму только препараты, устройства или действующие вещества, включённые в конкретный протокол/Despacho/Portaria и правильно выписанные врачом.' }
      ]
    },
    {
      id: 'benefits',
      title: 'Что даёт статус в 2026',
      content: [
        { kind: 'checklist', items: [
          'Отметку хронического заболевания в processo clínico SNS — её видят врач, enfermeiro и фармацевт через электронный рецепт.',
          'Receita sem papel для длительного лечения: врач может выписывать повторяемые рецепты, чтобы не ходить каждый месяц только за продлением.',
          'Специальную comparticipação лекарств: стандартные уровни в Португалии — 95%, 69%, 37% или 15%, но по отдельным протоколам может быть 100%.',
          'Для diabetes: инсулин обычно покрывается полностью; иглы, ланцеты и шприцы для самоконтроля могут идти с 100% покрытием, тест-полоски — по отдельному режиму.',
          'Для онкологических заболеваний: многие препараты выдаются через farmácia hospitalar SNS без оплаты пациентом, если лечение назначено в hospital público.',
          'Для астмы, гипертонии и сердечно-сосудистых заболеваний: покрытие зависит от конкретного препарата и клинического протокола, не всегда 100%.',
          'Isenção de taxas moderadoras в случаях, где они ещё взимаются, если ваша категория входит в правила SNS или оформлена отдельная льгота.',
          'Более простой доступ к наблюдению: consultas de vigilância, анализы, продление рецепта, вакцинация по показаниям.'
        ] },
        { kind: 'paragraph', text: 'С 2022 года taxas moderadoras в SNS почти отменены. В 2026 они в основном остаются для urgência hospitalar без направления от SNS 24, INEM, médico de família или без последующей госпитализации. Ориентир: Serviço de Urgência Básica — 14 €, Médico-Cirúrgica — 16 €, Polivalente — 18 €, плюс возможные exames.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'Как оформить через SNS',
      content: [
        { kind: 'substeps', items: [
          { id: 'prepare-documents', title: '1. Подготовить документы и историю болезни', content: [
            { kind: 'checklist', items: [
              'Número de utente SNS.',
              'Documento de identificação: ВНЖ, Cartão de Cidadão, паспорт с визой или CRUE для граждан ЕС.',
              'NIF — часто нужен для административной записи и рецептов.',
              'Список текущих лекарств: название, дозировка, сколько раз в день.',
              'Выписки, анализы, заключения specialist из Португалии или другой страны.',
              'Если документы не на португальском/английском — краткий перевод диагноза и схемы лечения.',
              'Фото упаковок лекарств — помогает подобрать португальские аналоги по действующему веществу.'
            ] }
          ]},
          { id: 'book-appointment', title: '2. Записаться к médico de família', content: [
            { kind: 'paragraph', text: 'Основной путь — consulta в вашем Centro de Saúde / USF / UCSP. Если médico de família ещё не назначен, просите consulta aberta или consulta de recurso. Частный врач может дать relatório, но льготы SNS обычно должен подтвердить и занести врач SNS.' }
          ]},
          { id: 'medical-declaration', title: '3. Получить declaração médica и обновить рецепты', content: [
            { kind: 'paragraph', text: 'Попросите врача зафиксировать диагноз как хронический, указать необходимость длительного лечения и выписать Receita sem papel с правильным режимом comparticipação. Для некоторых заболеваний врач выбирает специальный режим в системе рецептов; без этого аптека применит обычную скидку, а не льготную.' }
          ]},
          { id: 'confirm-exemption', title: '4. Проверить isenção в административной части', content: [
            { kind: 'paragraph', text: 'После консультации подойдите в secretaria Centro de Saúde и спросите, активна ли isenção de taxas moderadoras в Registo Nacional de Utentes. Иногда медицинская отметка и административная льгота — разные действия.' }
          ]}
        ] }
      ]
    },
    {
      id: 'pharmacy',
      title: 'Как покупать лекарства с льготой 💊',
      content: [
        { kind: 'paragraph', text: 'В аптеке предъявите номер рецепта/SMS, Cartão de Cidadão или документ с número de utente. Скидка применяется автоматически, если рецепт выписан как comparticipado и выбран правильный режим.' },
        { kind: 'checklist', items: [
          'Проверьте чек: там видно preço total, comparticipação do Estado и valor a pagar.',
          'Если лекарство должно быть 100%, но аптека просит оплату, сначала проверьте, не выписан ли обычный режим вместо специального.',
          'Просите médico de família выписывать по действующему веществу, если вам подходят genéricos — часто это дешевле и доступнее.',
          'Не меняйте бренд инсулина, ингалятора или онкопрепарата без согласования с врачом.',
          'Если препарата нет, аптека может заказать его или предложить эквивалент; за некоторыми больничными препаратами нужно идти в farmácia hospitalar.',
          'Сохраняйте faturas с NIF: часть медицинских расходов попадает в e-Fatura и учитывается в IRS.'
        ] },
        { kind: 'warning', text: 'Льгота не возвращается “задним числом” автоматически. Если рецепт был выписан неправильно и вы заплатили, обычно нужно просить врача перевыписать рецепт до покупки, а не после.' }
      ]
    },
    {
      id: 'common-cases',
      title: 'Частые случаи: диабет, астма, гипертония, онкология',
      content: [
        { kind: 'checklist', items: [
          'Diabetes: попросите сразу оформить инсулин/таблетки, материалы самоконтроля, план análises HbA1c и консультации enfermagem диабета.',
          'Hipertensão: принесите домашние измерения давления за 1–2 недели; врач подберёт схему и выпишет длительные рецепты.',
          'Asma/DPOC: важно показать старые ингаляторы и результаты spirometria, если есть; разные ингаляторы имеют разную comparticipação.',
          'Oncologia: лечение обычно ведёт hospital SNS; рецепты и выдача препаратов часто идут через больничную аптеку, а не обычную farmácia.',
          'Хроническая боль/ревматология: часть препаратов требует специалиста и больничного рецепта; médico de família может вести базовые лекарства, но не всё.',
          'Психиатрические хронические заболевания: антидепрессанты, антипсихотики и стабилизаторы настроения имеют свои уровни comparticipação; 100% не гарантируется.'
        ] },
        { kind: 'paragraph', text: 'Если вы приехали в Португалию с уже установленным диагнозом, не ждите, пока закончатся лекарства. Запишитесь в Centro de Saúde сразу после получения número de utente: подбор аналога и подтверждение льготы могут занять несколько недель.' }
      ]
    },
    {
      id: 'problems',
      title: 'Если отказали или ничего не активировано',
      content: [
        { kind: 'checklist', items: [
          'Попросите письменное объяснение: отказ медицинский или административный.',
          'Проверьте, есть ли у вас активный número de utente и правильный адрес в Centro de Saúde.',
          'Попросите médico de família выдать declaração médica de doença crónica с диагнозом и постоянным лечением.',
          'Если нет семейного врача, просите consulta aberta и регистрацию в lista de utentes sem médico.',
          'Если вопрос в лекарстве, уточните у врача код режима comparticipação и есть ли препарат в списке Infarmed.',
          'Позвоните SNS 24: 808 24 24 24 — могут подсказать маршрут и записать обращение.',
          'При системной проблеме подайте reclamação в Livro de Reclamações или через gabinete do utente больницы/ACES.'
        ] },
        { kind: 'warning', text: 'Atestado Médico de Incapacidade Multiuso с incapacidade ≥60% — это отдельная процедура через junta médica и не равно Estatuto de Doente Crónico. Он может давать дополнительные налоговые и медицинские льготы, но оформляется отдельно.' }
      ]
    }
  ],
  costs: [
    { label: 'Оформление статуса в SNS', amountEUR: 0, note: 'Consulta и административная регистрация в SNS обычно без taxas moderadoras.' },
    { label: 'Urgência Básica без направления', amountEUR: 14, note: 'Только если нет направления SNS/INEM/врача и нет последующей госпитализации; при isenção — 0 €.' },
    { label: 'Urgência Médico-Cirúrgica без направления', amountEUR: 16, note: 'Ориентир taxas moderadoras 2026 для неосвобождённых пользователей.' },
    { label: 'Urgência Polivalente без направления', amountEUR: 18, note: 'Ориентир taxas moderadoras 2026 для неосвобождённых пользователей.' }
  ],
  sources: [
    {
      title: 'SNS 24 — isenção de taxas moderadoras',
      url: 'https://www.sns24.gov.pt/guia/isencao-de-taxas-moderadoras/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24 — medicamentos e comparticipação',
      url: 'https://www.sns24.gov.pt/tema/medicamentos/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGS — programas de saúde e doenças crónicas',
      url: 'https://www.dgs.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'INFARMED — Regimes excecionais de comparticipação',
      url: 'https://www.infarmed.pt/web/infarmed/regimes-excecionais-de-comparticipacao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
