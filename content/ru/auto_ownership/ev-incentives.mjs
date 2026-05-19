export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Субсидии и льготы на электромобиль в Португалии',
  tldr: 'Государство субсидирует покупку BEV через Fundo Ambiental — суммы, лимиты, потолок цены и квоты определяются ежегодным Aviso Fundo Ambiental. Прошлые Avisos: для физических лиц BEV M1 — около € 4 000 (обычно не более 1 машины на кандидата), для бизнеса N1 — около € 6 000; для M1-компаний условия отличаются. Бюджет ограничен и быстро исчерпывается.\n\nISV: 0% для чистых BEV.\n\nIUC: BEV обычно exempt (нет CC-компоненты у чистых EV); PHEV/HEV — по применимой категории IUC. Зарядка Mobi.E — €0.28–0.55/кВт·ч. До покупки проверяйте текущий Aviso на fundoambiental.pt.',
  tags: ['ev', 'электромобиль', 'субсидия', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Прямая субсидия Fundo Ambiental',
      content: [
        { kind: 'paragraph', text: 'Португалия ежегодно финансирует программу Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões. Бюджет перезапускается 1 января и обычно заканчивается за 2–4 месяца.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Ориентиры (проверяйте Aviso текущего года)', content: [
            { kind: 'paragraph', text: '⚠️ Актуальные суммы — в Aviso Fundo Ambiental для Mobilidade Elétrica соответствующего года. До открытия Aviso нельзя гарантировать суммы, квоты, сроки и условия. Ориентиры на основе недавних Avisos:' },
            { kind: 'checklist', items: [
              'Физлицо, новый BEV M1: в недавних Avisos — около €4 000, обычно не более 1 автомобиля на кандидата',
              'Юрлица/ИП: в прошлых Avisos поддержка €6 000 относилась к новым BEV N1 (грузовые до 3.5 т); для M1-компаний условия другие',
              'Электровелосипед: ~€500',
              'Электроскутер: ~€500',
              'Потолок цены для субсидии M1 в недавних Avisos был около €38 500 с IVA и расходами. €62 500 без IVA — это отдельный налоговый порог для компаний, не критерий subsidy'
            ]}
          ]},
          { id: 's2', title: 'Как подать', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. Заявка подаётся только онлайн с Chave Móvel Digital или Cartão de Cidadão. Открытие окон — обычно 15 января. Нужны: счёт-фактура на автомобиль (можно предварительный счёт-фактура), копия ВНЖ/Cartão de Cidadão, NIF, IBAN для зачисления.' }
          ]},
          { id: 's3', title: 'Срок выплаты', content: [
            { kind: 'timeline', text: '30–90 дней после одобрения. Деньги приходят на IBAN как возврат.' }
          ]}
        ]},
        { kind: 'warning', text: 'Бюджет программы за 2024–2025 заканчивался за 2–3 месяца. Если покупаете электромобиль весной — подавайте заявку в январе-феврале.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Налоговые льготы',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (растаможка/ввоз)', content: [
            { kind: 'checklist', items: [
              'Чистые BEV: 0% ISV (полное освобождение)',
              'PHEV (подключаемый гибрид) с запасом хода на электричестве ≥50 км: льготный ISV (скидка 25–40%)',
              'HEV (обычный гибрид): стандартный ISV, как для бензина/дизеля',
              'Срок действия льготы подтверждается ежегодно в OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (ежегодный налог)', content: [
            { kind: 'checklist', items: [
              'BEV: generally exempt from IUC — у чистых EV нет CC-компоненты. Проверяйте конкретный veículo в Portal das Finanças/AT',
              'PHEV: стандартный IUC, но экологическая составляющая ниже',
              'Гибриды: стандартный IUC'
            ]}
          ]},
          { id: 't3', title: 'IRS (для компаний/ИП)', content: [
            { kind: 'checklist', items: [
              'Служебный электромобиль: полная амортизация до € 62 500 (для бензинового — € 25 000)',
              'Зарядка (кВт·ч) — 100% вычет IVA для компаний (для бензина — 50%)',
              'Ключевое для фрилансеров: электромобиль — самый эффективный способ получить налоговые льготы, если у вас Recibo Verde с высоким оборотом'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'charging',
      title: 'Зарядка и сеть Mobi.E',
      content: [
        { kind: 'paragraph', text: 'В Португалии есть централизованная национальная сеть Mobi.E. Все публичные зарядки, даже от разных операторов — Galp, EDP, Repsol, Iberdrola, — работают через общий хаб. Один аккаунт — вся Португалия.' },
        { kind: 'checklist', items: [
          '⚡ Обычная (AC 11–22 кВт): € 0,28–0,35/кВт·ч',
          '🔋 Быстрая (DC 50–150 кВт): € 0,40–0,55/кВт·ч',
          '🏎️ Ультрабыстрая (DC 150–350 кВт): € 0,55–0,75/кВт·ч',
          '🏠 Домашняя настенная зарядная станция: тариф EDP/Galp — € 0,16–0,20/кВт·ч ночью (двухзонный тариф)',
          '💳 Оплата: карта Mobi.E (€ 5 за регистрацию) ИЛИ оплата через приложения EDP, Galp, Iberdrola',
          '🅿️ Парковка во время зарядки зависит от муниципалитета/парковочного оператора и правил конкретной станции — общенационального правила «первые 2 часа бесплатно» НЕТ'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Номерной знак и идентификация',
      content: [
        { kind: 'checklist', items: [
          'Для ряда льгот используется dístico identificativo de veículo elétrico, выдаваемый IMT (это НЕ обязательная зелёная рамка номерного знака)',
          'Для уже зарегистрированного BEV можно запросить dístico EV в IMT — стоимость по актуальной fee table IMT',
          'Льготы по доступу в ZER/паркингу зависят от муниципалитета и могут требовать соответствующего dístico/регистрации',
          'PHEV — отдельные правила; льготы частичные'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Субсидия физлицу (BEV M1)', note: 'сверяйте Aviso Fundo Ambiental текущего года; в недавних — ~€4 000' },
    { label: 'Субсидия для BEV N1 (грузовые до 3.5 т)', note: 'в прошлых Avisos — ~€6 000; сверяйте Aviso' },
    { label: 'Электровелосипед / скутер', amountEUR: 500, note: 'сверяйте Aviso' },
    { label: 'ISV для BEV', amountEUR: 0 },
    { label: 'IUC для BEV', amountEUR: 0, note: 'обычно exempt; сверяйте в Portal das Finanças для конкретного veículo' },
    { label: 'Карта Mobi.E (регистрация)', amountEUR: 5 }
  ],
  sources: [
    { title: 'Fundo Ambiental — Mobilidade Elétrica', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Mobi.E — сеть зарядки', url: 'https://www.mobie.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (налоговый портал) — калькуляторы ISV/IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UVE — União dos Veículos Elétricos (сообщество)', url: 'https://www.uve.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}