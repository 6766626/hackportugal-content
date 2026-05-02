export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Ввоз автомобиля в Португалию',
  tldr: 'Для резидентов есть льгота «transferência de residência» — ввоз без ISV при условиях: владели авто ≥ 6 мес до переезда, проживали в старой стране ≥ 12 мес, подали документы в течение 12 мес после становления резидентом. Иначе — полный ISV (растаможка) + IUC ежегодно.',
  tags: ['авто', 'растаможка', 'ISV', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Два пути',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Льгота (transferência de residência) — без ISV', content: [
            { kind: 'checklist', items: [
              'Вы становитесь резидентом Португалии (получили ВНЖ / CRUE)',
              'Владели авто ≥ 6 месяцев до переезда',
              'Проживали в стране происхождения ≥ 12 мес',
              'Подать документы в течение 12 мес с даты становления резидентом',
              'Автомобиль не продаётся в течение 12 мес после ввоза',
              'Применяется только к ОДНОМУ авто на человека'
            ]}
          ]},
          { id: 'o2', title: 'B. Обычный ввоз — с ISV', content: [
            { kind: 'paragraph', text: 'Если условия льготы не выполнены — полный ISV (Imposto sobre Veículos). Считается по объёму двигателя + CO2 + возрасту. Для нового авто может быть € 5000-30000. Для электрокара — бесплатно.' }
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Документы',
      content: [
        { kind: 'checklist', items: [
          'Оригинальный ПТС / техпаспорт (обычно апостиль + перевод)',
          'Паспорт + ВНЖ',
          'NIF',
          'Подтверждение адреса в Португалии',
          'Действующая «Зелёная карта»',
          'Счёт-фактура покупки (если авто новое или недавно куплено)',
          'Подтверждение проживания за границей ≥ 12 мес (CRUE/ВНЖ в старой стране, счета, договор аренды)',
          'Сертификат соответствия (CoC) от производителя — для авто из ЕС'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Пошагово',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Ввоз в Португалию', content: [
            { kind: 'paragraph', text: 'Въехать на автомобиле с текущими номерами. Уведомить Autoridade Tributária (налоговая служба) в течение 20 дней через e-AT.' }
          ]},
          { id: 's2', title: '2. Техосмотр (IPO)', content: [
            { kind: 'paragraph', text: 'В одном из центров IPO. ~40€. Получить сертификат B (для нерегистрированного авто).' }
          ]},
          { id: 's3', title: '3. Регистрация в IMT', content: [
            { kind: 'paragraph', text: 'Подать документы для присвоения португальского номера (matrícula). Через портал IMT или Loja de Cidadão.' }
          ]},
          { id: 's4', title: '4. ISV — оплата или освобождение', content: [
            { kind: 'paragraph', text: 'Если льгота — задекларировать ввоз и получить освобождение. Если нет — рассчитать на портале Finanças и оплатить.' }
          ]},
          { id: 's5', title: '5. Получить Documento Único Automóvel (техпаспорт)', content: [
            { kind: 'paragraph', text: 'Единый документ = техпаспорт + регистрация. Приходит почтой на 10-30 день.' }
          ]},
          { id: 's6', title: '6. Заменить номера', content: [
            { kind: 'paragraph', text: 'Заказать португальские номера (~50€). Установить. Теперь авто полностью в системе Португалии.' }
          ]},
          { id: 's7', title: '7. Оформить португальскую страховку', content: [
            { kind: 'paragraph', text: 'Перейти на португальскую страховку (Tranquilidade, Liberty, Fidelidade и др.). Старая «Зелёная карта» теряет актуальность.' }
          ]}
        ]}
      ]
    },
    {
      id: 'annual',
      title: 'Ежегодные обязательства',
      content: [
        { kind: 'checklist', items: [
          'IUC (Imposto Único de Circulação) — годовой налог, по двигателю + CO2. €30-500/год',
          'Страховка — €250-700/год',
          'IPO (техосмотр) — каждые 2 года для авто до 8 лет, ежегодно для старых',
          'Via Verde (плата за платные дороги) — по желанию'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO (техосмотр)', amountEUR: 40 },
    { label: 'Регистрация IMT + DUA', amountEURMin: 55, amountEURMax: 80 },
    { label: 'Номера', amountEURMin: 30, amountEURMax: 80 },
    { label: 'ISV (если без льготы)', amountEURMin: 500, amountEURMax: 20000, note: 'по объёму/CO2/возрасту' },
    { label: 'IUC ежегодно', amountEURMin: 30, amountEURMax: 500 }
  ],
  timelineDaysMin: 10,
  timelineDaysMax: 60,
  sources: [
    { title: 'Portal das Finanças (налоговый портал) — ISV и transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Registo de veículo', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Importar veículo', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}