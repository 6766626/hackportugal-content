export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Субсидии и льготы на электромобиль в Португалии',
  tldr: 'Государство субсидирует покупку BEV через Fundo Ambiental — суммы, лимиты, потолок цены и квоты определяются ежегодным **Aviso Fundo Ambiental**. Прошлые Avisos: для физических лиц BEV M1 — около € 4 000, для бизнеса (N1) — выше. Бюджет ограничен и быстро исчерпывается. Дополнительно: ISV льготный или 0% для BEV, IUC снижен, но НЕ полностью 0% после OE 2024, зарядка Mobi.E — примерно € 0,28–0,55/кВт·ч в зависимости от оператора. До покупки проверьте текущий Aviso на fundoambiental.pt.',
  tags: ['ev', 'электромобиль', 'субсидия', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Прямая субсидия Fundo Ambiental',
      content: [
        { kind: 'paragraph', text: 'Португалия ежегодно финансирует программу Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões. Бюджет перезапускается 1 января и обычно заканчивается за 2–4 месяца.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Суммы 2026', content: [
            { kind: 'checklist', items: [
              'Физическое лицо, новый легковой BEV (категория M1): до € 4 000 (максимум 2 машины в год)',
              'Юридическое лицо/ИП, новый BEV M1: до € 6 000 (максимум 4 машины в год)',
              'Электровелосипед: € 500',
              'Грузовой BEV (N1) до 3,5 т: € 6 000',
              'Электроскутер: € 500',
              'Цена автомобиля не должна превышать € 62 500 (без IVA) для участия'
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
              'Чистые BEV: **0%** ISV (полное освобождение)',
              'PHEV (подключаемый гибрид) с запасом хода на электричестве ≥50 км: льготный ISV (скидка 25–40%)',
              'HEV (обычный гибрид): стандартный ISV, как для бензина/дизеля',
              'Срок действия льготы подтверждается ежегодно в OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (ежегодный налог)', content: [
            { kind: 'checklist', items: [
              'BEV: с 2024 НЕ полностью освобождён (было 100% до 2023). Сейчас примерно € 30–50/год в зависимости от объёма двигателя / мощности',
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
          '🅿️ Бесплатная парковка: во время зарядки на станциях Mobi.E — первые 2 часа'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Номерной знак и идентификация',
      content: [
        { kind: 'checklist', items: [
          'Электромобиль с 2023 — зелёная рамка на номерном знаке (обязательна при первой регистрации)',
          'Старые электромобили — можно поменять на зелёный знак за € 30 в IMT',
          'Зелёный знак = бесплатный въезд в ZER Лиссабона (зона низких выбросов, расширена с 2025)',
          'PHEV — знак без рамки; льготы частичные'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Субсидия физическому лицу (BEV M1)', amountEUR: 4000, note: 'до, Fundo Ambiental 2026' },
    { label: 'Субсидия юридическому лицу (BEV M1)', amountEUR: 6000, note: 'до' },
    { label: 'Электровелосипед / скутер', amountEUR: 500 },
    { label: 'ISV для BEV', amountEUR: 0 },
    { label: 'Карта Mobi.E (регистрация)', amountEUR: 5 }
  ],
  sources: [
    { title: 'Fundo Ambiental — Mobilidade Elétrica', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Mobi.E — сеть зарядки', url: 'https://www.mobie.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (налоговый портал) — калькуляторы ISV/IUC', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UVE — União dos Veículos Elétricos (сообщество)', url: 'https://www.uve.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}