export default {
  editorialVoice: 'hackportugal',
  id: 'emergency-112',
  categoryId: 'emergency_rights',
  title: 'Экстренные контакты в Португалии (112 и др.)',
  tldr: 'Единый номер 112 — скорая помощь, пожарные, полиция. SNS24 (808 24 24 24) — медицинская консультация по телефону. INEM (112) — скорая медицинская помощь. PSP/GNR — полиция. Номера универсальные и бесплатные.',
  tags: ['112', 'скорая', 'полиция', 'экстренно'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'emergency',
      title: 'Основные номера',
      content: [
        { kind: 'checklist', items: [
          '112 — единый экстренный номер для всех случаев',
          'SNS24 — 808 24 24 24 — медицинская консультация, запись на приём',
          'PSP — 21 765 4242 (Лиссабон) — городская полиция',
          'GNR — 213 217 000 — жандармерия (вне городов)',
          'Linha de Emergência Social — 144 — социальная помощь 24/7',
          'APAV — 116 006 — помощь жертвам насилия',
          'SOS Criança — 116 111 — помощь детям'
        ]}
      ]
    },
    {
      id: 'what-to-say',
      title: 'Что сказать при звонке 112',
      content: [
        { kind: 'paragraph', text: 'Оператор говорит на португальском и английском. При необходимости подключают переводчика (русский доступен).' },
        { kind: 'checklist', items: [
          '1. Местоположение — улица, номер дома, город, freguesia (приход — местная административная единица)',
          '2. Что случилось — скорая помощь / пожар / полиция',
          '3. Сколько пострадавших, состояние',
          '4. Ваше имя и номер телефона',
          '5. Не вешайте трубку — оператор скажет, когда можно'
        ]}
      ]
    },
    {
      id: 'lost-docs',
      title: 'Потеря документов',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Паспорт РФ', content: [
            { kind: 'paragraph', text: 'Консульство России в Лиссабоне (R. Pinheiro Chagas 37) — сразу написать заявление о потере, получить свидетельство на возвращение (СНВ).' }
          ]},
          { id: 'l2', title: 'Cartão de Cidadão (удостоверение гражданина Португалии)', content: [
            { kind: 'paragraph', text: 'Заблокировать по номеру 211 950 500 (IRN, 24/7). Заявление о новом документе — в любом Espaço Cidadão.' }
          ]},
          { id: 'l3', title: 'ВНЖ (título de residência)', content: [
            { kind: 'paragraph', text: 'Заявление в PSP (полицейский протокол) → запись в AIMA на замену → пошлина за вторую копию (segunda via) — 50% от пошлины за выпуск титула (зависит от типа ВНЖ; тарифы AIMA повышены с 1 марта 2026) → ожидание 30-60 дней.' }
          ]},
          { id: 'l4', title: 'Банковская карта', content: [
            { kind: 'paragraph', text: 'Заблокировать в приложении или по телефону банка. Карта MB WAY блокируется в приложении мгновенно.' }
          ]}
        ]}
      ]
    },
    {
      id: 'embassies',
      title: 'Посольства и консульства (RU/BY/UA/KZ)',
      content: [
        { kind: 'checklist', items: [
          'РФ, Лиссабон — Rua Pinheiro Chagas, 37 · +351 21 846 2424',
          'Беларусь — нет посольства в Португалии, ближайшее в Мадриде',
          'Украина — Rua de Alcolena 17, Lisboa · +351 21 301 1030',
          'Казахстан — нет посольства, представительство через Мадрид'
        ]}
      ]
    },
    {
      id: 'insurance',
      title: 'Страховка и SNS',
      content: [
        { kind: 'paragraph', text: 'Экстренная помощь в SNS оказывается всем без исключения (включая людей без легального статуса и туристов). Для плановой помощи и подтверждения расходов нужен Número de Utente (номер пациента SNS).\n\nЧастная страховка сокращает очереди для неэкстренных случаев.' }
      ]
    }
  ],
  sources: [
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS24 — линия 808 24 24 24', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'PSP — Polícia de Segurança Pública', url: 'https://www.psp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APAV — помощь жертвам', url: 'https://apav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Посольство РФ в Лиссабоне', url: 'https://lisbon.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}