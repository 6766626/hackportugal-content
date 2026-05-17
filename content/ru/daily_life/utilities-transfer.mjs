export default {
  editorialVoice: 'hackportugal',
  id: 'utilities-transfer',
  categoryId: 'daily_life',
  title: 'Коммунальные услуги — договоры, смена поставщика, экономия',
  tldr: 'В Португалии 3 обязательные услуги: электричество, вода, газ (если подключён). Электричество и газ — либерализованный рынок: поставщика можно выбрать самому, например EDP, Galp, Iberdrola, Endesa и др. Вода — всегда муниципальная услуга (EPAL в Lisboa). Смена поставщика бесплатна и проходит без перерывов. Перенос договоров на новый адрес при переезде занимает 5–15 дней, без штрафа, по Decreto-Lei 38/2017.',
  tags: ['электричество', 'газ', 'вода', 'edp', 'galp', 'iberdrola'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market',
      title: 'Регулируемый и либерализованный рынок',
      content: [
        { kind: 'paragraph', text: 'Электричество и газ в Португалии с 2015 года либерализованы — поставщиком может быть любая компания, цены свободные. Параллельно с 2021 года вернулся регулируемый тариф для уязвимых клиентов: пожилых людей и людей с низким доходом.' },
        { kind: 'checklist', items: [
          '💡 Электричество: 20+ поставщиков (EDP Comercial, Galp, Iberdrola, Endesa, Goldenergy, Coopérnico, Luzigás и др.)',
          '🔥 Газ: 10+ поставщиков (часто те же)',
          '💧 Вода: муниципальная (EPAL, SMAS, Águas do Douro и др.) — нельзя выбирать',
          '📜 Регулятор: ERSE (Entidade Reguladora dos Serviços Energéticos)',
          '💡 Сравнение тарифов: poupaenergia.pt (официальный агрегатор ERSE)'
        ]}
      ]
    },
    {
      id: 'choose-supplier',
      title: 'Как выбрать поставщика',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Знать потребление', content: [
            { kind: 'paragraph', text: 'Средняя квартира 70 м² на 2 человек: 150–250 kWh/мес (электричество), 50 m³ газа зимой. Большие семьи — 500+ kWh.' }
          ]},
          { id: 's2', title: '2. Выбрать мощность (potência)', content: [
            { kind: 'checklist', items: [
              '3.45 kVA — небольшая квартира без мощных приборов',
              '4.60 kVA — стандартная 2-комнатная квартира',
              '6.90 kVA — 3-комнатная квартира с кондиционерами и электроплитой',
              '10.35 kVA — большой дом / бойлер',
              '13.80+ kVA — профессиональное использование'
            ]}
          ]},
          { id: 's3', title: '3. Тариф (tarifa)', content: [
            { kind: 'checklist', items: [
              'Simples — одна цена 24/7',
              'Bi-horária — дневная / ночная (с 22:00 до 08:00)',
              'Tri-horária — пик / полупик / непиковые часы (для промышленности)'
            ]}
          ]},
          { id: 's4', title: '4. Сравнить на poupaenergia.pt', content: [
            { kind: 'paragraph', text: 'Официальный сайт ERSE. Нужно ввести почтовый индекс, потребление и мощность → появится список всех тарифов с ценой в месяц.' }
          ]}
        ]}
      ]
    },
    {
      id: 'new-contract',
      title: 'Заключение договора',
      content: [
        { kind: 'checklist', items: [
          '📋 Документы: Cartão de Cidadão/ВНЖ, NIF, IBAN для прямого дебета',
          '🏠 Адрес и энергетические коды (CPE для электричества, CUI для газа) — указаны на уже установленном счётчике',
          '💻 Онлайн через сайт поставщика или кол-центр',
          '📞 Оплата: ежемесячный прямой дебет или referência Multibanco',
          '📅 Подключение: 2–10 рабочих дней',
          '📊 Показания счётчика — раз в 2 месяца, самостоятельно или по телефону'
        ]},
        { kind: 'warning', text: 'Certificado Energético требуется, как правило, при продаже/аренде недвижимости (Decreto-Lei 101-D/2020), а не как условие нового подключения электричества/газа. Для самого договора с поставщиком нужны CPE/CUI коды счётчика. Уточняйте у арендодателя при подписании договора.' }
      ]
    },
    {
      id: 'change',
      title: 'Смена поставщика',
      content: [
        { kind: 'checklist', items: [
          '💻 Онлайн на сайте нового поставщика — занимает 5 минут',
          '📝 Нужны: NIF, CPE / CUI (на счёте), IBAN',
          '📅 Переход автоматический — максимум 3 недели',
          '💡 Электричество не прерывается ни на минуту',
          '💰 Комиссии за переключение нет',
          '🔒 Старый договор закрывается автоматически, новый поставщик берёт процесс на себя',
          '📊 Финальный счёт от старого поставщика — после последнего замера'
        ]}
      ]
    },
    {
      id: 'move',
      title: 'Переезд — перенос договора',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Оставить старого поставщика, но сменить адрес', content: [
            { kind: 'paragraph', text: 'Запрос через приложение: «Alteração de morada do contrato». Сохраняются тариф и номер договора. Срок — 5–10 дней.' }
          ]},
          { id: 'm2', title: 'Новый поставщик в новом доме', content: [
            { kind: 'paragraph', text: 'Если предыдущий жилец оставил договор, вы закрываете его заявлением и сразу оформляете свой. Без задержек.' }
          ]},
          { id: 'm3', title: 'Отключено после долгого перерыва', content: [
            { kind: 'paragraph', text: 'Нужно повторное подключение: 50–100 € + техник на объект. Срок — до 15 дней. Если счётчик старый, обязательна замена.' }
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Проблемы и жалобы',
      content: [
        { kind: 'checklist', items: [
          '📋 Livro de Reclamações (книга жалоб) — бумажная или на livroreclamacoes.pt',
          '⚖️ ERSE — регулятор, erse.pt/reclamações',
          '⚡ DGEG (Direcção-Geral de Energia) — для серьёзных случаев',
          '💰 CTC (Centro de Arbitragem de Conflitos de Consumo) — на региональном уровне',
          '🚫 Отключение электричества без уведомления запрещено; положена компенсация',
          '📅 Задержки возмещения / кредита >30 дней — штраф поставщику'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Электричество, средняя квартира 70 м²', amountEURMin: 40, amountEURMax: 80, note: '€/мес' },
    { label: 'Газ (если подключён)', amountEURMin: 30, amountEURMax: 80, note: '€/мес' },
    { label: 'Вода (EPAL Lisboa, 2 человека)', amountEURMin: 15, amountEURMax: 30, note: '€/мес' },
    { label: 'Смена поставщика', amountEUR: 0 },
    { label: 'Повторное подключение отключённой услуги', amountEURMin: 50, amountEURMax: 100 }
  ],
  sources: [
    { title: 'ERSE — Entidade Reguladora dos Serviços Energéticos', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Poupa Energia — официальный агрегатор ERSE', url: 'https://www.poupaenergia.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Direcção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 38/2017 — comercialização de electricidade', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/38-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}