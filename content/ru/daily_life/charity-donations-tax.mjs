export default {
  editorialVoice: 'hackportugal',
  id: 'charity-donations-tax',
  categoryId: 'daily_life',
  title: 'Благотворительность — где помочь и налоговые вычеты',
  tldr: 'IRS «consignação» — возможность направить **0,5% налога IRS** в одну из ~5 000 зарегистрированных благотворительных организаций (без расходов для вас, просто галочка в декларации)\.\n\nДополнительно: 25% всех пожертвований IPSS (Instituições Particulares de Solidariedade Social) вычитаются из IRS. Топ благотворительных организаций: Cáritas, Cruz Vermelha, Médicos do Mundo, Banco Alimentar, ACAPO (помощь людям с инвалидностью), AMI (гуманитарная помощь)\.\n\nКампания Banco Alimentar — 2 раза в год, мобилизует сотни тысяч добровольцев.',
  tags: ['благотворительность', 'пожертвования', 'consignação', 'IRS'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'consignacao',
      title: '✅ Consignação 0,5% IRS — без расходов',
      content: [
        { kind: 'paragraph', text: 'Каждый резидент Португалии может направить **0,5% от итогового налога IRS** в одну из зарегистрированных благотворительных организаций. Это БЕЗ дополнительных расходов для вас — государство просто перенаправляет часть вашего налога.' },
        { kind: 'checklist', items: [
          '📅 **Когда**: при подаче IRS (апрель-июнь)',
          '✅ В форме IRS — «consignação de quota da liquidação do imposto»',
          '🏢 Выбрать одну организацию (по NIF) из официального списка AT',
          'Список: portaldasfinancas.gov.pt → IRS → Consignação',
          '💰 Конкретно: 0,5% от вашего итогового налога. Для 30 000 €/год — это ~50-150 €',
          '🔁 Можно менять выбор каждый год',
          '🇵🇹 Также: можно consignar benefício fiscal do IVA — передать благотворительной организации сумму вашего вычета по IVA из eligible invoices. Это НЕ бесплатно: в отличие от 0,5% IRS, вы теряете этот IVA deduction'
        ]}
      ]
    },
    {
      id: 'tax-deductions',
      title: '💰 Прямые пожертвования — вычет 25%',
      content: [
        { kind: 'paragraph', text: 'Прямые денежные пожертвования IPSS (зарегистрированным благотворительным организациям) дают вам персональный вычет по IRS.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Условия', content: [
            { kind: 'checklist', items: [
              '✅ Получатель — зарегистрированная **IPSS** или **utilidade pública**',
              '✅ **Безналичный перевод** (не наличные): банковский перевод / MB WAY / платёжный портал благотворительной организации',
              '✅ Получить **счёт/квитанцию с NIF** от благотворительной организации',
              '✅ Проверить сумму и NIF в e-Fatura',
              '⚠️ **Лимит**: до 15% от суммы налога к уплате (большинство семей не достигают лимита)',
              '✅ **Вычет**: обычно 25% от eligible amount; для некоторых social-mecenato donations сумма может быть uplifted (например, 130%), но только если beneficiary/donation qualifies по EBF arts. 61-66'
            ]}
          ]},
          { id: 'd2', title: 'Примеры', content: [
            { kind: 'checklist', items: [
              'Пожертвование 200 € → налоговый кредит ~65 € (200 × 1,3 × 25%)',
              'Пожертвование 1000 € → налоговый кредит ~325 €',
              'Пожертвование 5000 € → налоговый кредит ~1625 € (лимит может ограничить, если ваш IRS меньше)',
              'Фактически: стоимость вашего пожертвования = ~67% от номинальной суммы благодаря налоговому кредиту'
            ]}
          ]},
          { id: 'd3', title: 'Компании (для бизнеса)', content: [
            { kind: 'checklist', items: [
              'Пожертвования IPSS: 130-150% вычитаются как расход (Código do IRC art. 62)',
              'Лимит: 0,6% от оборота',
              'Образовательные / культурные цели: специальные коэффициенты',
              'Велосипедные / спортивные клубы: 130%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-charities',
      title: '🏆 Лучшие организации для пожертвований / волонтёрства',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Banco Alimentar — продовольственная помощь', content: [
            { kind: 'checklist', items: [
              'Banco Alimentar Contra a Fome — крупнейшая сеть перераспределения продуктов',
              'Сеть из 21 регионального банка',
              '**2 кампании в год**: конец мая + конец ноября — сбор консервов в супермаркетах',
              'Волонтёрство: 4-8 часов, привлекают ~70 000 волонтёров за кампанию',
              'Пожертвования / время → 11 млн порций еды в год',
              'Banco Alimentar Lisboa, Porto и др. имеют почтовые адреса + IBAN для переводов'
            ]}
          ]},
          { id: 'c2', title: 'Cáritas Portuguesa', content: [
            { kind: 'checklist', items: [
              'Католическая благотворительная организация, но получатели помощи не только религиозные',
              'Кризисная поддержка, продовольственные банки, помощь с социальным жильём',
              'caritas.pt → Doar Online'
            ]}
          ]},
          { id: 'c3', title: 'Cruz Vermelha (Португальский Красный Крест)', content: [
            { kind: 'checklist', items: [
              'Реагирование на чрезвычайные ситуации, акции по сдаче крови, социальная помощь',
              'cruzvermelha.pt → Donativos / Doar',
              'Волонтёрские программы в 200+ delegações',
              'IBAN для прямых пожертвований'
            ]}
          ]},
          { id: 'c4', title: 'Médicos do Mundo / Instituto de Apoio à Criança (SOS-Criança)', content: [
            { kind: 'paragraph', text: 'Médicos do Mundo — медицинская помощь в кризисных регионах (medicosdomundo.pt). Instituto de Apoio à Criança / SOS-Criança — защита детей (iacrianca.pt).' }
          ]},
          { id: 'c5', title: 'Защита животных', content: [
            { kind: 'checklist', items: [
              '**Лиссабон**: Bianca\'s Garden (кошки), União Zoófila',
              '**Porto**: Casa dos Animais',
              '**SPA — Sociedade Protetora dos Animais** — приют и медицинская помощь для брошенных животных',
              '**SOS Animal — национальная организация**'
            ]}
          ]},
          { id: 'c6', title: 'Технологии во благо / образование', content: [
            { kind: 'checklist', items: [
              '**Junior Achievement Portugal**: образование, предпринимательство для молодёжи',
              '**Programadores do Futuro**: цифровые навыки для людей в уязвимом положении',
              '**Code Club Portugal**: бесплатное программирование для детей',
              '**Aprender é Fixe**: репетиторство для детей из группы риска'
            ]}
          ]},
          { id: 'c7', title: 'Природа / окружающая среда', content: [
            { kind: 'checklist', items: [
              '**Quercus**: экологическая НКО, адвокация + восстановление лесов',
              '**LPN — Liga para a Protecção da Natureza**: старейшая экологическая НКО Португалии',
              '**SPEA — Sociedade Portuguesa para Estudo das Aves**: охрана птиц',
              '**Geota**: экологические исследования'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'volunteer',
      title: '🤝 Время как пожертвование — волонтёрские программы',
      content: [
        { kind: 'checklist', items: [
          '🎯 **European Solidarity Corps** (вместо устаревшего EVS): волонтёрские проекты в Португалии/EU, с travel/support, жильём/едой или allowance в зависимости от проекта',
          '🎯 **Кампании Banco Alimentar**: 2 раза в год, 4-8 часов, очень простой вход',
          '🎯 **Волонтёрство с детьми**: через аккредитованные IPSS/ассоциации, со screening/background checks. CPCJ — официальные комиссии защиты детей; обращайтесь к ним за консультацией, не как к casual volunteering',
          '🎯 **Помощь беженцам** (CPR, JRS): украинские и другие беженцы, языковое сопровождение, поддержка интеграции',
          '🎯 **Волонтёры в больницах** (Cruz Vermelha): в больницах — сопровождение / занятия для пожилых',
          '🎯 **AMI** (Assistência Médica Internacional): стажировки в Португалии или отправка за рубеж для медицинских миссий',
          '🎯 **Habitat for Humanity**: строительство / ремонт социального жилья',
          '🎯 **Сопровождение пожилых**: одинокие пожилые люди, еженедельные визиты',
          '🎯 **TimeSwap (banco do tempo)** — обмен навыками и временем, в муниципалитетах'
        ]}
      ]
    },
    {
      id: 'beware',
      title: '⚠️ Будьте осторожны',
      content: [
        { kind: 'checklist', items: [
          '🚫 **Уличные сборы**: фейковые благотворительные организации у магазинов / на улицах. Проверяйте статус IPSS',
          '🚫 **Мошеннические письма**: фишинг с «Médicos do Mundo Лиссабон» — проверяйте домен',
          '🚫 **Холодные звонки**: легитимные благотворительные организации редко звонят первыми',
          '✅ **Прямой перевод на известный IBAN**: безопаснее, чем через сторонние платформы',
          '✅ **Налоговая квитанция**: запросите с NIF после пожертвования для вычета',
          '✅ **Проверка статуса IPSS**: организация должна быть в реестре на segsocial.pt'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Consignação IRS 0,5%', amountEUR: 0, note: 'без расходов для вас' },
    { label: 'Вычет IRS по пожертвованиям', amountEUR: 0, note: '25% × 1,3 от пожертвования' },
    { label: 'Лимит вычета IRS', amountEUR: 0, note: '15% от налога к уплате' }
  ],
  sources: [
    { title: 'AT — Consignação IRS', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco Alimentar Contra a Fome', url: 'https://www.bancoalimentar.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — IPSS registry', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cáritas Portuguesa', url: 'https://www.caritas.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}