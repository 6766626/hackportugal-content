export default {
  editorialVoice: 'hackportugal',
  id: 'mortgage-foreigners',
  categoryId: 'housing_buy',
  title: 'Ипотека для иностранцев в Португалии',
  tldr: 'Иностранцы-резиденты могут получить ипотеку: macroprudential LTV для **owner-occupied/permanent** жилья — до 90% от **меньшей из** цены покупки и оценки; для secondary residence — до 80%; non-resident borrowers — обычно ниже. Euribor 6 мес. в начале мая 2026 ≈ 2.45–2.56% (с пика ~4% в 2023 снизился). Типичные португальские спреды 0.6–1.5%. Реальная ставка ~3.0–4.0%. **Макропруденциальный лимит срока** (Banco de Portugal с 2022): для borrowers до 30 лет — до 40 лет; для 30-35 лет — до 37 лет; для >35 лет — до 35 лет. Процесс 30–90 дней.',
  tags: ['ипотека', 'банк', 'жильё', 'недвижимость'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'eligibility',
      title: 'Кто может получить',
      content: [
        { kind: 'checklist', items: [
          'Резиденты с доходом в Португалии: macroprudential LTV — до 90% от **меньшей из** цены покупки и оценки для owner-occupied permanent residence, до 80% для secondary',
          'Нерезиденты с доходом вне Португалии — обычно 60–70%, конкретные условия зависят от банка',
          'Граждане EU: банки оценивают tax residency, источник/валюту дохода, employment stability — гражданство EU само по себе не равно условиям PT-резидента',
          'Граждане не из EU: универсального правила «2 года ВНЖ» нет; некоторые банки благосклоннее к стабильному ВНЖ с PT-доходом — оценка индивидуальная',
          'Заявители Golden Visa — особые условия (банк по-своему оценивает источник средств)'
        ]},
        { kind: 'warning', text: 'Граждане РФ с 2022 года сталкиваются с ограничениями в некоторых банках — выбор меньше, процентные ставки могут быть выше. Проверяйте условия в конкретном банке.' }
      ]
    },
    {
      id: 'rates',
      title: 'Ставки и типы (2026)',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Плавающая ставка (Euribor + спред)', content: [
            { kind: 'paragraph', text: 'Euribor 6 мес. в начале мая 2026 ≈ 2,45–2,56% (после пика ~4% в 2023). Спред — 0,6–1,5%. Итого — 3,0–4,0%. Пересчитывается каждые 6 мес.' }
          ]},
          { id: 'r2', title: 'Фиксированная', content: [
            { kind: 'paragraph', text: 'На 5–20 лет. ~3,0–4,0% в 2026. Защищает от колебаний, но менее гибкая.' }
          ]},
          { id: 'r3', title: 'Смешанная', content: [
            { kind: 'paragraph', text: 'Фиксированная в первые 5–10 лет → плавающая. Популярна среди иностранцев.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Документы для банка',
      content: [
        { kind: 'checklist', items: [
          'Паспорт + ВНЖ/Cartão de Cidadão',
          'NIF',
          'Последние 3 декларации IRS или эквивалент для нерезидентов',
          'Последние 3–6 расчётных листков / выписки со счёта',
          'Кредитная история: для не-португальских заявителей — справка из страны проживания',
          'Contrato promessa de compra e venda (предварительный договор)',
          'Caderneta Predial жилья (от продавца)',
          'Certidão Permanente Imóvel',
          'Отчёт об оценке (avaliação) — банк может требовать своего оценщика',
          'Документы созаявителя, если есть'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Процесс',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Предварительное одобрение', content: [
            { kind: 'paragraph', text: 'Обратиться в банки (минимум в 3) → получить предварительное одобрение с указанием суммы и ставки. Срок — 2–3 недели.' }
          ]},
          { id: 'p2', title: '2. Найти жильё', content: [
            { kind: 'paragraph', text: 'С предварительным одобрением на руках переговоры с продавцом проходят серьёзнее. Подписать CPCV (contrato de promessa) + задаток (sinal) — обычно 10% (не обязательное правило). ⚠️ Обязательно включите в CPCV **mortgage contingency clause** — иначе при отказе банка вы можете потерять sinal.' }
          ]},
          { id: 'p3', title: '3. Банковская оценка', content: [
            { kind: 'paragraph', text: 'Банк назначает оценщика. € 300–500. Если оценка ниже цены — банк профинансирует только до суммы оценки.' }
          ]},
          { id: 'p4', title: '4. Окончательное одобрение', content: [
            { kind: 'paragraph', text: 'Банк выпускает письмо об одобрении (carta de aprovação). Срок действия — 30–60 дней.' }
          ]},
          { id: 'p5', title: '5. Escritura (нотариальный акт)', content: [
            { kind: 'paragraph', text: 'Одновременное подписание ипотечного договора и договора купли-продажи у нотариуса. Банк выплачивает деньги продавцу, вы получаете ключи.' }
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: 'Сопутствующие расходы',
      content: [
        { kind: 'checklist', items: [
          'IMT (налог на переход собственности): для own permanent residence — marginal progressive scale с abatements (может быть 0% для нижних ценовых порогов); для прочей residential — от 1%. См. отдельный гайд по IMT',
          'IS (гербовый сбор) — 0.8% от стоимости + 0.6% от суммы ипотеки',
          'Нотариус / escritura — € 500–1500',
          'Регистрация — € 250–400',
          'Страховка жизни — обычно contractual condition банка, а не legal requirement; банк может одобрить альтернативные структуры (escolha do credor). Стоимость варьируется по возрасту/здоровью; ~€ 200–800/год',
          'Страховка жилья — € 150–400/год',
          'Банковские комиссии — 0,5–1% от ипотеки'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Banco de Portugal — Guia do Crédito à Habitação', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei (декрет-закон) 74-A/2017 — правила кредитования жилья', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/74-a-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros (страховка жизни)', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (налоговый портал) — IMT, IS калькуляторы', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}