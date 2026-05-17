export default {
  editorialVoice: 'hackportugal',
  id: 'everyday-apps',
  categoryId: 'digital_gov',
  title: 'Необходимые приложения для жизни в Португалии',
  tldr: 'Базовый набор для экспата: MB WAY (платежи), Autenticação.gov (Chave Móvel Digital), SNS 24 (медицина), Portal AT (налоги), AIMA Renovações (ВНЖ), MobiCascais/Navegante (транспорт), CTT (почта), Bolt/Uber (такси), Glovo/Uber Eats (доставка еды), Continente/Lidl Plus (супермаркеты), Via Verde (дороги), Folhetos.pt (скидки). По закону с 2023 года многие гос-сервисы требуют Chave Móvel Digital — подключите её первой.',
  tags: ['приложения', 'цифровые сервисы', 'digital'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'gov',
      title: '🏛️ Государственные — обязательные',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'Autenticação.gov', content: [
            { kind: 'paragraph', text: 'CMD (Chave Móvel Digital) — государственная электронная подпись. Без неё не работают: Portal AT, онлайн-сервисы AIMA, SNS 24, IRN, Segurança Social Direta. Активация: autenticacao.gov.pt → Aderir CMD → NIF + португальский номер телефона. SMS-код для каждой операции.' }
          ]},
          { id: 'g2', title: 'SNS 24', content: [
            { kind: 'checklist', items: [
              '**Медицинская запись, рецепты, результаты анализов**',
              'Онлайн-чат с врачом или медсестрой 24/7',
              'Видеозвонок с медиком',
              'Электронная история прививок',
              'Запись в отделение неотложной помощи или Centro de Saúde',
              'Тест для проверки симптомов'
            ]}
          ]},
          { id: 'g3', title: 'Portal das Finanças', content: [
            { kind: 'checklist', items: [
              'Приложение e-Fatura — сканирует чеки для вычетов по IRS',
              'Основной сайт через браузер + CMD',
              'Проверка статуса NIF / адреса',
              'Подача IRS напрямую по упрощённой схеме'
            ]}
          ]},
          { id: 'g4', title: 'ePortugal', content: [
            { kind: 'paragraph', text: 'Единый портал всех государственных услуг — смена адреса, сертификаты, лицензии. 500+ сервисов в одном месте. Использует CMD или CC для подписи.' }
          ]},
          { id: 'g5', title: 'AIMA Renovações', content: [
            { kind: 'paragraph', text: 'Портал для продления ВНЖ — portal-renovacoes.aima.gov.pt. Через CMD. Основное место, где живёт ваш иммиграционный статус с 2026.' }
          ]}
        ]}
      ]
    },
    {
      id: 'money',
      title: '💳 Деньги и платежи',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'MB WAY', content: [
            { kind: 'checklist', items: [
              'Базовое португальское приложение для мобильных платежей — работает почти везде',
              'Отправка денег по номеру телефона / NIF',
              'Оплата по QR-коду в магазинах и ресторанах',
              'Снятие наличных в банкомате без карты',
              'Лимиты: € 2 500 в день, € 5 000 в месяц',
              'Привязывается к португальскому банковскому счёту — не работает с Revolut / Wise / N26'
            ]}
          ]},
          { id: 'm2', title: 'Revolut / Wise / N26', content: [
            { kind: 'checklist', items: [
              '**Revolut** (с 2024 даёт португальский IBAN бесплатно) — мультивалютный счёт, криптовалюта, акции',
              '**Wise** (BE IBAN) — лучший для мультивалютных переводов, 20+ валют',
              '**N26** (DE IBAN) — минимальный банкинг, но хороший пользовательский опыт',
              'Полезно как второй или валютный счёт + деньги для поездок'
            ]}
          ]},
          { id: 'm3', title: 'Банк вашего португальского банка', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium BCP, Caixa, Novobanco, Santander — у всех есть приложения. Переводы SEPA, контроль карт, выписки, депозиты. Португальские банки не самые удобные, но необходимы.' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: '🚆 Транспорт',
      content: [
        { kind: 'checklist', items: [
          '**Navegante Metropolitano** (Лиссабон) — электронный проездной, QR-билеты, расписание автобусов/метро/поездов',
          '**MobiCascais** (муниципалитет Кашкайша) — велосипеды, автобусы, парковка',
          '**Anda** (приложение для дорожного трафика в Лиссабоне)',
          '**Bolt** — такси (дешевле Uber для коротких поездок)',
          '**Uber** — шире представлен в регионах',
          '**FREE NOW** — агрегатор такси',
          '**BlaBlaCar** — совместные поездки между городами',
          '**Flixbus** — междугородние автобусы',
          '**CP — Comboios de Portugal** — поезда, билеты',
          '**Via Verde** — платные дороги',
          '**GoEuro / Rome2Rio** — сравнение способов доехать'
        ]}
      ]
    },
    {
      id: 'food-shop',
      title: '🛒 Еда и шопинг',
      content: [
        { kind: 'checklist', items: [
          '**Continente Siga** — цифровая карта, купоны, сканер цен в магазине',
          '**Pingo Doce** — аналогично',
          '**Lidl Plus** — скретч-карты, каталоги акций, купоны',
          '**Folhetos.pt** — агрегатор недельных скидок всех сетей',
          '**Too Good To Go** — еда со скидкой от магазинов/ресторанов в конце дня (можно сэкономить 50-70%)',
          '**Glovo** — доставка еды, продуктов, товаров',
          '**Uber Eats** — доставка еды',
          '**Bolt Food** — популярен в Порту',
          '**Auchan**, **El Corte Inglés** — если поблизости'
        ]}
      ]
    },
    {
      id: 'mail-docs',
      title: '📨 Почта и документы',
      content: [
        { kind: 'checklist', items: [
          '**CTT** — отслеживание посылок, запись в отделение, растаможка онлайн',
          '**Id.Gov.Pt** — портфель ваших цифровых документов (Cartão de Cidadão, Chave Móvel Digital, водительское удостоверение)',
          '**DocsQR** — сканирование документов с телефона, OCR',
          '**CamScanner** — альтернатива с экспортом в PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — Chave Móvel Digital', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — приложение и портал', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — приложение AT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — единый портал государственных услуг', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}