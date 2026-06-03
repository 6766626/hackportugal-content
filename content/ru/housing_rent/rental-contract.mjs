export default {
  editorialVoice: 'hackportugal',
  id: 'rental-contract',
  categoryId: 'housing_rent',
  title: 'Долгосрочная аренда в Португалии — правовая база и процесс',
  tldr: 'Долгосрочная аренда (arrendamento habitacional) регулируется NRAU (Lei 6/2006 с поправками). Для contratos com prazo certo минимум 1 год и максимум 30 лет; если срок не указан, договор считается заключённым на 5 лет (Código Civil arts. 1094-1095).\n\nИсключения для contratos para fins especiais transitórios могут быть короче. По art. 1076 Código Civil лимит: caução до 2 месячных арендных плат + renda antecipada до 2 месяцев. Требования предоплаты в 3-12 месяцев юридически уязвимы — обсудите с юристом легальную структуру (seguro de fiança, garantia bancária, fiador).\n\nДоговор регистрируется в Finanças владельцем, он же выдаёт recibos de renda.',
  tags: ['аренда', 'nrau', 'contrato', 'caução', 'fiador'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'legal-framework',
      title: 'Правовая база',
      content: [
        { kind: 'paragraph', text: 'Основные документы: Código Civil (статьи об аренде), Lei 6/2006 (NRAU — Novo Regime do Arrendamento Urbano), Decreto-Lei 160/2006 (формальные элементы договора), многочисленные законы и декреты-законы с поправками. Важно для 2024–2026: Lei 56/2023 «Mais Habitação» ЧАСТИЧНО ОТМЕНЕНА в рамках программы «Construir Portugal»: Decreto-Lei 43/2024 (июль 2024) отменил/изменил меры об arrendamento coercivo de imóveis devolutos (принудительная аренда пустующих объектов), Decreto-Lei 76/2024 (23 октября 2024) снял мораторий на новые AL-лицензии в apartamentos и убрал автоматическое 5-летнее истечение AL.' },
        { kind: 'paragraph', text: 'Ключевые принципы: защита арендатора (выселение только через суд), капитальный ремонт — обязанность владельца, индексация ренты — не чаще 1 раза в год и не выше официального коэффициента INE (в 2026: 2,24%, коэффициент 1,0224, опубликовано Aviso n.º 23174/2025/2 от 19.09.2025).' },
        { kind: 'paragraph', text: 'Caução и предоплата (art. 1076 Código Civil после Lei 56/2023 «Mais Habitação»): максимум 2 месячные арендные платы как caução + максимум 2 месячные арендные платы как предоплата. Требования больше — должны быть оформлены отдельной правовой структурой (seguro de fiança, иная гарантия), иначе условие может быть оспорено как незаконное.' }
      ]
    },
    {
      id: 'terms',
      title: 'Ключевые термины',
      content: [
        { kind: 'checklist', items: [
          'Arrendatário / inquilino — арендатор (съёмщик)',
          'Senhorio — арендодатель (собственник)',
          'Contrato de arrendamento habitacional — договор аренды жилого помещения',
          'Renda — ежемесячная арендная плата',
          'Caução — залоговый депозит, по art. 1076 Código Civil (после Mais Habitação) максимум 2 месячные арендные платы; возвращается при выезде. Дополнительно может быть согласована предоплата аренды до 2 месяцев',
          'Fiador — поручитель: физическое лицо — резидент Португалии со стабильным доходом, которое отвечает своим имуществом за обязательства арендатора',
          'Seguro de fiança — страховая компания заменяет fiador, примерно 5-7% годовой аренды',
          'IMI — муниципальный налог на недвижимость, по закону платит владелец',
          'Condomínio — взносы дома; перед condomínio отвечает собственник. В аренде они часто включены в ренту, но договор может отдельно переложить на арендатора некоторые despesas/encargos, если это прямо прописано',
          'Recibo de renda — ежемесячная налоговая квитанция от арендодателя, обычно электронная на Portal das Finanças, основа для налоговой декларации'
        ]}
      ]
    },
    {
      id: 'pricing',
      title: 'Рыночные ориентиры (2026)',
      content: [
        { kind: 'paragraph', text: 'Цены существенно выросли в 2022-2025. По данным INE и статистики Banco de Portugal:' },
        { kind: 'checklist', items: [
          'Lisboa центр: T1 (1 спальня) 1400-2500 €/мес',
          'Lisboa пригород (Oeiras, Almada): T1 900-1500 €',
          'Porto центр: T1 900-1400 €',
          'Porto пригород: T1 650-1000 €',
          'Coimbra: T1 550-850 €',
          'Braga: T1 500-800 €',
          'Algarve сезонно: T1 700-1500 € (зима), до x2 летом',
          'Alentejo небольшие города: T1 350-600 €'
        ]},
        { kind: 'paragraph', text: 'Условные обозначения: T0 = студия, T1 = 1 спальня + гостиная, T2 = 2 спальни + гостиная и т. д.' }
      ]
    },
    {
      id: 'search-channels',
      title: 'Каналы поиска',
      content: [
        { kind: 'paragraph', text: 'В Португалии действует несколько категорий каналов поиска жилья:' },
        { kind: 'checklist', items: [
          'Онлайн-порталы-агрегаторы (крупнейшие: Idealista, Imovirtual, Casa Sapo, Supercasa) — основной канал, сотни тысяч объявлений',
          'OLX Imóveis — много объявлений напрямую от собственников (меньше комиссий)',
          'Агентства недвижимости (imobiliárias) — крупнейшие сети: RE/MAX, Century 21, ERA, Engel & Völkers. Комиссия 1 месяц ренты, часто платит владелец',
          'Локальные Facebook-группы (по городам и районам)',
          'Среднесрочная аренда (6-12 мес) для иностранцев: платформы без fiador, но на 20-40% дороже',
          'Junta de Freguesia (районное управление) — иногда имеет программы социального жилья'
        ]},
        { kind: 'warning', text: 'Типичная мошенническая схема: объявление с фотографиями хорошей квартиры, «владелец» за границей, просит предоплату для «резервирования» без просмотра. НИКОГДА не платите за квартиру, которую не видели лично или через надёжного представителя.' }
      ]
    },
    {
      id: 'process',
      title: 'Процесс аренды — шаг за шагом',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Предварительная подготовка', content: [
            { kind: 'checklist', items: [
              'Получить NIF',
              'Открыть банковский счёт в Португалии (желательно)',
              'Подготовить подтверждение дохода: рабочий контракт, расчётные листки за 3 мес, банковская выписка либо декларация IRS',
              'Найти fiador (если доступно) — его Cartão de Cidadão (CC) + доход',
              'При отсутствии fiador: обсудить легальные гарантии — максимум 2 месяца предоплаты + максимум 2 месяца caução, либо seguro de fiança/garantia bancária/fiador. Требование 3–12 месяцев наличными как renda antecipada или дополнительной caução юридически уязвимо'
            ]}
          ]},
          { id: 'p2', title: '2. Поиск и просмотр', content: [
            { kind: 'paragraph', text: 'Составьте список вариантов. На первом просмотре проверьте: влажность стен и окон (белый след в углах = плесень), отопление (зимой критично — Португалия одна из худших в ЕС по изоляции жилья), горячую воду (газовая колонка esquentador или бойлер termoacumulador), шум с улицы и от соседей, давление воды.' }
          ]},
          { id: 'p3', title: '3. Предложение и переговоры', content: [
            { kind: 'paragraph', text: 'Обсуждаемые пункты: срок (12/24/36 мес), размер caução, кто платит IMI и condomínio (товарищество собственников), мебель (mobilado (с мебелью) / mobilado parcialmente (частично с мебелью) / sem mobília (без мебели)), ограничения на домашних животных, индексация ренты, предварительное обязательство владельца устранить замеченные дефекты до заезда.' }
          ]},
          { id: 'p4', title: '4. Подписание договора', content: [
            { kind: 'paragraph', text: 'Минимум в 2 экземплярах. Обязательные элементы по Lei 6/2006 + DL 160/2006: данные и NIF сторон, подробный адрес и identificação matricial/predial, finalidade do arrendamento, срок, сумма ренты и способ индексации, размер caução, дата начала. Проверьте также licença de utilização (или применимое освобождение), certificado energético (если требуется), и все anexos/inventário.' }
          ]},
          { id: 'p5', title: '5. Передача ключей', content: [
            { kind: 'paragraph', text: 'Составьте опись состояния (inventário) — список имеющейся мебели, состояние стен, пола, сантехники. Фотографируйте всё. Это защитит вас при возврате caução.' }
          ]},
          { id: 'p6', title: '6. Регистрация в Finanças', content: [
            { kind: 'paragraph', text: 'Владелец обязан comunicar contrato de arrendamento à AT через Portal das Finanças (Modelo 2) до конца месяца, следующего за месяцем начала договора (Código do Imposto do Selo art. 60) — а НЕ просто «в течение 30 дней». После этого он должен emitir recibos de renda eletrónicos. Без регистрации и recibos вы, как правило, не сможете корректно заявить вычет за аренду в IRS. Для Junta/AIMA зарегистрированный договор сильно повышает надёжность доказательства адреса, но конкретный набор документов зависит от Junta и типа процедуры AIMA.' },
            { kind: 'warning', text: 'Если владелец отказывается регистрировать — это серьёзный тревожный сигнал (возможно, уклонение от налогов). Настаивайте или выбирайте другую квартиру.' }
          ]}
        ]}
      ]
    },
    {
      id: 'without-fiador',
      title: 'Если нет поручителя',
      content: [
        { kind: 'paragraph', text: 'Новоприбывшим иностранцам чаще всего недоступен fiador. Варианты:' },
        { kind: 'checklist', items: [
          '⚠️ Предоплата 3-12 мес вперёд — распространённая рыночная практика для иностранцев без fiador, но как «предоплата аренды» это юридически уязвимо: art. 1076 CC ограничивает её 2 месяцами. Избыток сверх 2 месяцев не стоит оформлять как дополнительный денежный depósito/caução (это снова caução). Легальные альтернативы — seguro de fiança, garantia bancária, fiador или иная независимая гарантия — структуру проверьте с advogado/solicitador',
          '⚠️ «Увеличенная caução» 3-6 мес — также противоречит art. 1076 CC (макс 2 мес). Если арендодатель настаивает — оформите избыток через seguro de fiança/garantia bancária',
          'Seguro de fiança — страховая компания гарантирует обязательства, стоит 5-7% годовой аренды (легальный путь обхода лимитов art. 1076)',
          'Среднесрочная аренда (6-12 мес) через сервисы-посредники — обычно без fiador, но на 20-40% дороже',
          'Социальный жилищный фонд (для некоторых категорий) — через муниципалитет',
          'Аренда комнаты в совместном жилье — часто упрощённый процесс'
        ]}
      ]
    },
    {
      id: 'rights-and-duties',
      title: 'Права и обязанности',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Права арендатора', content: [
            { kind: 'checklist', items: [
              'Мирное владение квартирой на срок договора',
              'Защита от произвольного повышения ренты — только 1 раз в год и не выше коэффициента INE',
              'Защита от выселения — самовольное выселение НЕЗАКОННО. Даже при задолженности 2+ мес или серьёзном нарушении арендодатель должен расторгнуть договор и использовать предусмотренную процедуру despejo через BAS (Balcão do Arrendatário e do Senhorio) / tribunal; нельзя просто менять замки или выносить вещи',
              'Капитальный ремонт — за счёт владельца (крыша, электропроводка, структурные дефекты)',
              'Возврат caução: лучше прямо указать срок в договоре (например 15–30 дней после entrega das chaves); универсального законного срока «30 дней» в общем режиме нет',
              'Вычет в IRS: 15% расходов на renda de habitação permanente в пределах лимита текущего года — сверяйте действующий лимит по art. 78.º-E CIRS на portaldasfinancas.gov.pt'
            ]}
          ]},
          { id: 'r2', title: 'Обязанности арендатора', content: [
            { kind: 'checklist', items: [
              'Своевременная уплата ренты (обычно до 8 числа месяца)',
              'Оплата коммунальных услуг (electricidade, gás, água — счета идут напрямую вам как арендатору)',
              'Текущий ремонт (косметический, замена лампочек, мелкий ремонт)',
              'Содержание квартиры — поддержание чистоты, отсутствие порчи',
              'Уведомление владельца за 120 дней при желании расторгнуть договор (срок варьируется по типу)',
              'Соблюдение regulamento do condomínio (правил дома)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Спорные ситуации',
      content: [
        { kind: 'checklist', items: [
          'Невозврат caução — письменная претензия, затем Julgado de Paz/tribunal или (если условия подходят) injunção em matéria de arrendamento через Balcão do Arrendatário e do Senhorio (BAS)',
          'Проблемы с техническим состоянием — письменное требование по почте с уведомлением, фото, сроки на устранение',
          'Шум и соседи — жалоба в Junta de Freguesia, полиция (112 для громкого ночного шума)',
          'Ежегодная atualização renda в действующем договоре не должна превышать официальный коэффициент INE, если нет специального законного основания. Спор — письменное возражение, затем BAS/Julgado de Paz/tribunal/advogado',
          'Выселение до срока — бесплатная юрпомощь через Ordem dos Advogados (если низкий доход) либо коммерческий адвокат',
          'DECO Proteste — защита прав потребителей, даёт консультации по договорам аренды'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Паспорт / Cartão de Cidadão (CC)', note: 'обе стороны' },
    { title: 'NIF', note: 'обеих сторон — обязательно в договоре' },
    { title: 'Подтверждение дохода', note: 'расчётные листки / выписки / контракт' },
    { title: 'Fiador (если есть)', note: 'его Cartão de Cidadão (CC), NIF, подтверждение дохода' },
    { title: 'IBAN', note: 'для автоматического списания ренты' }
  ],
  costs: [
    { label: 'Caução (залог)', amountEURMin: 500, amountEURMax: 3000, note: 'макс 2 мес аренды по art. 1076 CC' },
    { label: 'Предоплата аренды (макс)', amountEURMin: 500, amountEURMax: 3000, note: 'макс 2 мес по art. 1076 CC; больше — структурировать через seguro de fiança' },
    { label: 'Seguro de fiança', amountEURMin: 300, amountEURMax: 1500, note: '5-7% годовой аренды' },
    { label: 'Комиссия агента', amountEURMin: 0, amountEURMax: 2000, note: 'часто платит владелец' }
  ],
  sources: [
    { title: 'Lei 6/2006 — NRAU (Novo Regime do Arrendamento Urbano)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34498475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1076 (caução e antecipação de rendas)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 56/2023 — Mais Habitação', url: 'https://diariodarepublica.pt/dr/detalhe/lei/56-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 76/2024 — Alojamento Local após Mais Habitação (Construir Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/76-2024-892301177', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 43/2024 — revoga arrendamento coercivo (CAE) de imóveis devolutos', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/43-2024-862870533', kind: 'law', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Portal das Finanças — Registo de Contrato de Arrendamento', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Arrendar casa', url: 'https://www.gov.pt/cidadaos/-/informacoes/arrendar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}