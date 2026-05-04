export default {
  editorialVoice: 'hackportugal',
  id: 'ciple-a2-exam',
  categoryId: 'nationality',
  title: 'Португальский A2 — бесплатные курсы, школьные программы и экзамен CIPLE',
  tldr: 'Сертификат уровня A2 нужен только для натурализации по проживанию (по действующему Lei 37/81 — 5 лет; **03.05.2026 Президент Сегуру промульгировал Decreto AR 48/XVII** — после публикации в DRE срок увеличится до 7 лет для CPLP/EU и 10 лет для остальных, плюс появится обязательный тест на знание португальской культуры, прав и государственного устройства). Для брака, união de facto, Reagrupamento Familiar — НЕ нужен. ВАЖНО: для натурализации IRN принимает только официальный сертификат уровня A2+ (CIPLE / PLA / Centros Qualifica / DEPLE / DAPLE) — простая справка о посещении 150 часов курса БЕЗ оценки уровня НЕ принимается. Самые дешёвые пути: PLA (0 €), IEFP (0 € + стипендия, но с обязательствами как безработного), государственные школы для взрослых ~20 €/семестр. Экзамен CIPLE — 85 € (2026), ежемесячные сессии.',
  audience: { citizenships: ['thirdCountry', 'euEeaSwiss'] },
  tags: ['ciple', 'a2', 'язык', 'экзамен', 'pla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'Когда сертификат нужен, а когда нет',
      content: [
        { kind: 'paragraph', text: 'Уровень A2 португальского нужен только в нескольких случаях:' },
        { kind: 'checklist', items: [
          '✅ **Натурализация по проживанию** (art. 6 Lei 37/81 + art. 25 Decreto-Lei 237-A/2006): по действующему праву — после 5 лет. **03.05.2026 Президент Сегуру промульгировал Decreto AR 48/XVII** — после публикации в DRE: 7 лет для CPLP/EU, 10 лет для остальных, плюс обязательный тест на знание португальской культуры, прав и государственного устройства. До публикации в DRE действуют старые правила',
          '✅ Для приёма в ряд программ IEFP, государственных колледжей и Centros Qualifica'
        ]},
        { kind: 'paragraph', text: 'Когда сертификат НЕ требуется:' },
        { kind: 'checklist', items: [
          '❌ Гражданство по браку / união de facto — Lei 37/81 язык не требует (только «эффективные связи»)',
          '❌ Гражданство по происхождению (дедушка/бабушка-португалец) — не требует',
          '❌ Воссоединение семьи (Reagrupamento Familiar) — AIMA язык не спрашивает',
          '❌ Продление ВНЖ — AIMA не требует',
          '❌ **Граждане стран с португальским как официальным языком** (Бразилия, Ангола, Кабу-Верде, Мозамбик, Гвинея-Бисау, Сан-Томе, Восточный Тимор, Экваториальная Гвинея): по правилам Regulamento da Nacionalidade знание языка презюмируется. Уточняйте конкретный случай в IRN'
        ]},
        { kind: 'warning', text: 'IRN при подаче на гражданство принимает только ОФИЦИАЛЬНЫЙ сертификат, в котором указан конкретный уровень A2 или выше. Справка о посещении курса (frequência) без оценки уровня — НЕ подходит.' }
      ]
    },
    {
      id: 'accepted-certificates',
      title: 'Какие сертификаты принимает IRN для натурализации',
      content: [
        { kind: 'paragraph', text: 'По art. 25 Decreto-Lei 237-A/2006 и инструкциям IRN, для подтверждения знания португальского принимается:' },
        { kind: 'checklist', items: [
          '✅ **CIPLE** (A2), **DEPLE** (B1), **DIPLE** (B2), **DAPLE** (C1), **DUPLE** (C2) — экзамены CAPLE/Universidade de Lisboa',
          '✅ **Сертификат PLA** — Português Língua de Acolhimento, выданный государственной школой/Centro Qualifica с указанием уровня A2 или выше',
          '✅ **Сертификат Centros Qualifica** — официальный документ с подтверждением уровня по CEFR',
          '✅ **Школьный сертификат PLNM** (Português Língua Não Materna) — если в нём указан достигнутый уровень A2+',
          '✅ **Аттестат об окончании португальской школы** (9-й/12-й класс) — автоматически считается C1',
          '✅ **Курс/диплом из вуза на португальском** — обычно засчитывается',
          '⚠️ Простая «декларация о посещении» (declaração de frequência) на 150 часов БЕЗ оценки уровня — НЕ принимается'
        ]}
      ]
    },
    {
      id: 'free-paid-courses',
      title: 'Бесплатные и платные (со стипендией) курсы',
      content: [
        { kind: 'substeps', items: [
          { id: 'iefp', title: '1. IEFP — биржа труда: курс + стипендия (для зарегистрированных безработных)', content: [
            { kind: 'paragraph', text: 'IEFP (iefp.pt) организует курсы португальского для жителей. Если вы зарегистрированы как безработный/ищущий работу — курс бесплатный + стипендия на обучение.' },
            { kind: 'warning', text: 'Регистрация в IEFP накладывает ОБЯЗАТЕЛЬСТВА: являться на вызовы, участвовать в мерах активной занятости, принимать подходящие предложения работы/стажировки. Не подходит для тех, кто реально не ищет работу — за неявку могут снять с учёта и отозвать пособие.' },
            { kind: 'checklist', items: [
              'Записаться в ближайшем Centro de Emprego (список на iefp.pt)',
              'Нужно: NIF, NISS, ВНЖ, подтверждение адреса',
              'Формат: групповые занятия 4–6 месяцев',
              'Стипендия на обучение: процент от IAS 2026 (537,13 €) — обычно 50–80% по программе',
              'Питание: ~6 €/день; транспорт по факту',
              'По окончании — сертификат с указанием уровня (A2/B1) — принимается IRN'
            ]}
          ]},
          { id: 'pla', title: '2. PLA — Português Língua de Acolhimento (бесплатно)', content: [
            { kind: 'paragraph', text: 'Государственная программа, организована AIMA + государственные школы / Centros Qualifica. Бесплатно для всех иностранцев с любым статусом (вкл. беженцев).' },
            { kind: 'checklist', items: [
              '150 часов — типичный блок, покрывающий A1 + A2 (но решает не количество часов, а итоговая оценка уровня)',
              '300 часов — для уровня B2',
              'Записаться через Centro Qualifica по месту жительства (qualifica.gov.pt) или AIMA',
              'Формат: вечерние занятия или занятия по выходным (2–3 раза в неделю по 3 часа)',
              '🎓 По окончании — Certificado PLA с указанием итогового уровня (A2, B1, B2). Только сертификат С УРОВНЕМ A2+ годится для IRN',
              '⚠️ Спросите ДО записи: «este curso emite certificado com nível A2 reconhecido pelo IRN para nacionalidade?»'
            ]}
          ]},
          { id: 'public-school', title: '3. Государственные школы для взрослых (Escola Secundária)', content: [
            { kind: 'paragraph', text: 'Многие государственные Escolas Secundárias имеют вечерние курсы PLNM (Português Língua Não Materna).' },
            { kind: 'checklist', items: [
              'Запись через школу (matrícula) — обычно ~10–25 € за семестр',
              'Курс бесплатный (государственное образование)',
              'Формат: полноценные занятия с преподавателем',
              'Расписание: сентябрь—июнь, 2–3 раза в неделю',
              '🎓 ВАЖНО: спросите, выдаёт ли школа сертификат с уровнем A2 (а не просто справку о посещении)',
              'Список школ с PLNM: на сайте муниципалитета в разделе Educação'
            ]}
          ]},
          { id: 'junta', title: '4. Junta de Freguesia — любительские курсы', content: [
            { kind: 'paragraph', text: 'Некоторые Junta de Freguesia организуют бесплатные разговорные курсы с волонтёрами. Сертификата обычно НЕ дают (для IRN не годится), но для разговорной практики — отлично. Спросите в вашем районе.' }
          ]},
          { id: 'online', title: '5. Онлайн-ресурсы для самостоятельного обучения', content: [
            { kind: 'checklist', items: [
              'Practice Portuguese (practiceportuguese.com) — подписка ~10 €/мес, европейский португальский',
              'Portuguese With Carla (YouTube) — бесплатные уроки',
              'Mondly / Duolingo — базовый уровень',
              'Tandem / HelloTalk — практика с носителями бесплатно',
              'Аудио: Said No One Ever Podcast, Portuguese Lab',
              '⚠️ Онлайн-курсы НЕ дают признанного для IRN сертификата — нужен экзамен CIPLE или официальный курс'
            ]}
          ]},
          { id: 'private', title: '6. Частные языковые школы', content: [
            { kind: 'paragraph', text: 'Только если нужна максимальная скорость / индивидуальный подход. От 300 € за интенсив; полный курс A1→A2 ~700–1200 €. CIAL, CLIC, Fast Forward. Сертификат частной школы IRN обычно НЕ принимает — нужен CIPLE или государственный сертификат.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exam-structure',
      title: 'Экзамен CIPLE — если идёте через CAPLE',
      content: [
        { kind: 'paragraph', text: 'CIPLE (Certificado Inicial de Português Língua Estrangeira) — экзамен уровня A2 от CAPLE (Universidade de Lisboa). Принимается всеми инстанциями Португалии.' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Чтение + письмо (75 мин)', content: [
            { kind: 'paragraph', text: '4 текста с вопросами (множественный выбор + короткие ответы). Короткое письмо (70–90 слов): электронное письмо, заметка, поздравление.' }
          ]},
          { id: 'e2', title: 'Аудирование (30 мин)', content: [
            { kind: 'paragraph', text: '4 аудио: диалог, объявление, инструкция, разговор. Вопросы с выбором ответа.' }
          ]},
          { id: 'e3', title: 'Разговорная часть (15 мин)', content: [
            { kind: 'paragraph', text: 'Индивидуально или парами. 3 задания: самопредставление, ролевая игра, описание картинки/разговор.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Проходной балл — 55% общего балла. Сертификат выдаётся через 6–8 недель после экзамена, действует бессрочно.' }
      ]
    },
    {
      id: 'registration',
      title: 'Регистрация на CIPLE',
      content: [
        { kind: 'checklist', items: [
          '📅 Сессии 2026: ежемесячные национальные CIPLE-P (фев—ноя за вычетом августа) + международные в мае/июле/ноябре. Календарь на caple.letras.ulisboa.pt',
          '💻 Регистрация онлайн на сайте CAPLE',
          '🏢 Центры в Португалии: Lisboa, Porto, Coimbra, Braga, Faro; за рубежом — Instituto Camões в столицах',
          '💶 Стоимость: 85 € на 2026 (до 95 € в международных центрах). Оплата картой или по ссылке Multibanco',
          '📧 Convocatória приходит за неделю',
          '📄 Результаты — в личном кабинете CAPLE через 6–8 недель; PDF-сертификат скачивается там же'
        ]}
      ]
    },
    {
      id: 'preparation',
      title: 'Как готовиться самостоятельно',
      content: [
        { kind: 'checklist', items: [
          '📚 Учебники: «Português XXI — Nível A2» (Lidel), «Passaporte Para Português A2» (Lidel), «Aprender Português» (Texto Editora)',
          '📝 Пробные тесты: CAPLE публикует Exemplos de Provas — 5 прошлых комплектов бесплатно',
          '🎧 Подкасты: «Practice Portuguese», «Said No One Ever», «Portuguesepod101»',
          '🎬 Сериалы: RTP Play (бесплатно), Netflix PT с субтитрами',
          '🗣️ Разговорная практика: тандем-партнёры, «café fala português» в Junta de Freguesia',
          '📅 100–150 часов занятий достаточно при начальном уровне; если есть A1 — 50–80 часов'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (государственные курсы)', amountEUR: 0 },
    { label: 'IEFP — курс + стипендия для зарегистрированных', amountEUR: 0, note: '+ частичная стипендия от IAS 537,13 €' },
    { label: 'Государственная школа для взрослых — запись', amountEURMin: 10, amountEURMax: 25, note: '/семестр' },
    { label: 'Экзамен CIPLE', amountEUR: 85, note: 'тариф CAPLE на 2026' },
    { label: 'Онлайн-подписка (практика)', amountEURMin: 0, amountEURMax: 15, note: '€/мес' },
    { label: 'Частная школа (если нужно быстро)', amountEURMin: 300, amountEURMax: 1200 }
  ],
  sources: [
    { title: 'IRN — Aquisição da nacionalidade portuguesa', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/237-a-2006-541731', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CAPLE — Centro de Avaliação de Português Língua Estrangeira', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — cursos de formação', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centros Qualifica', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Português Língua de Acolhimento (PLA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Presidência da República — Promulgação Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-04',
  verifyIntervalDays: 180
}