export default {
  editorialVoice: 'hackportugal',
  id: 'car-import',
  categoryId: 'auto_ownership',
  title: 'Ввоз автомобиля в Португалию',
  tldr: 'Для резидентов есть льгота isenção de ISV por transferência de residência (CISV ст. 58) — ввоз без ISV. Ключевые условия: нормальное место жительства вне Португалии ≥ 6 мес подряд до переезда, владение авто ≥ 6 мес до переноса резидентства, авто куплено на общих условиях (не tax-free), подача DAV в течение 12 мес с даты становления резидентом, не продавать в течение 12 мес после ввоза, одно авто на человека. Если авто ввозится из страны вне ЕС, дополнительно работает отдельное таможенное освобождение от пошлин/IVA по Регламенту (ЕС) 1186/2009 — там требование 12 мес проживания вне таможенной территории ЕС (не путать с ISV-условием 6 мес). Без льготы — ISV + ежегодный IUC. Для 100% BEV ISV обычно €0; гибриды/PHEV — специальные сниженные ставки.',
  tags: ['авто', 'растаможка', 'ISV', 'matrícula'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'options',
      title: 'Два пути',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: 'A. Льгота ISV — isenção por transferência de residência', content: [
            { kind: 'checklist', items: [
              'Вы переносите нормальное место жительства в Португалию (получили ВНЖ/CRUE, оформили fiscal residence)',
              'Нормальное место жительства вне Португалии — ≥ 6 мес подряд до переноса (CISV ст. 58). НЕ 12 мес — 12 мес относится к ОТДЕЛЬНОМУ таможенному освобождению от пошлин/IVA при ввозе из-за пределов ЕС',
              'Владение авто — ≥ 6 мес до переноса резидентства',
              'Авто куплено на общих условиях (не tax-free / не дипломатический режим)',
              'Подача DAV — в течение 12 мес с даты переноса резидентства',
              'Не продавать авто в течение 12 мес после ввоза (иначе ISV восстанавливается)',
              'Только ОДНО авто на человека',
              'При импорте из-за пределов ЕС: дополнительно требуется ≥ 12 мес проживания вне таможенной территории ЕС + владения авто для освобождения от пошлин/IVA по Reg. (UE) 1186/2009'
            ]}
          ]},
          { id: 'o2', title: 'B. Обычный ввоз — с ISV', content: [
            { kind: 'paragraph', text: 'Если условия льготы не выполнены — ISV (Imposto sobre Veículos)\.\n\nСчитается по объёму двигателя + CO2 + возрасту. Для нового авто может быть € 5000-30000. Для 100% электрических ISV обычно €0, но остаются регистрационные расходы. Для гибридов/plug-in гибридов действуют специальные ставки и условия. При импорте из-за пределов ЕС отдельно проверяются пошлина и IVA.' }
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
          'Подтверждение нормального проживания за границей: для ISV-льготы — ≥ 6 мес; для таможенной льготы при импорте не из ЕС — ≥ 12 мес. Документы: CRUE/ВНЖ в старой стране, налоговая резиденция, утилитарные счета, договор аренды',
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
          { id: 's3', title: '3. Регистрация: DAV в AT и matrícula', content: [
            { kind: 'paragraph', text: 'Корректный процесс: 1) техническое одобрение/инспекция/CoC при необходимости через IMT; 2) подача DAV (Declaração Aduaneira de Veículo) в AT и оплата ISV или получение освобождения; 3) после присвоения matrícula заказать номера; 4) зарегистрировать автомобиль в IRN/Conservatória/Automóvel Online.' }
          ]},
          { id: 's4', title: '4. ISV — оплата или освобождение', content: [
            { kind: 'paragraph', text: 'В DAV заявить режим: оплатить ISV либо запросить isenção de ISV por transferência de residência с документами. Для авто из-за пределов ЕС отдельно оформить таможенный режим и проверить освобождение от пошлины/IVA.' }
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
    { title: 'Portal das Finanças (налоговый портал) — ISV и transferência de residência', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IMT — Registo de veículo', url: 'https://www.imt-ip.pt/sites/imtt/portugues/Paginas/imtt.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Importar veículo', url: 'https://www.gov.pt/cidadaos/-/informacoes/importar-um-veiculo-para-portugal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}