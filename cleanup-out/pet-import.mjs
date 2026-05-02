export default {
  editorialVoice: 'hackportugal',
  id: 'pet-import',
  categoryId: 'animals',
  title: 'Ввоз животного в Португалию',
  tldr: 'Для собак, кошек и хорьков: микрочип + вакцина от бешенства минимум за 21 день до въезда + Pet Passport (ЕС) или AHC (Animal Health Certificate для стран вне ЕС). Из стран ЕС въезд почти беспрепятственный. Из стран вне ЕС — сертификат от ветеринара с государственной аккредитацией + документы на английском или португальском языке.',
  tags: ['животные', 'собака', 'кошка', 'ввоз'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basics',
      title: 'Обязательные требования',
      content: [
        { kind: 'checklist', items: [
          'Микрочип ISO 11784/11785 (международный стандарт)',
          'Вакцинация от бешенства минимум за 21 день до въезда (после первой вакцинации)',
          'Титр антител к бешенству (для стран с высоким риском бешенства — анализ крови, срок годности 30 дней, ожидание 3 месяца после теста)',
          'Возраст животного — минимум 15 недель (вакцина + 21 день)',
          'Документы: Pet Passport (для ЕС/ЕЭЗ) или Animal Health Certificate (AHC) — для стран вне ЕС'
        ]},
        { kind: 'warning', text: 'Для Египта, Турции и некоторых стран Африки действуют дополнительные требования. Для России на 2026 год титрование обязательно.' }
      ]
    },
    {
      id: 'eu-countries',
      title: 'Из ЕС / ЕЭЗ',
      content: [
        { kind: 'paragraph', text: 'Pet Passport (европейский), выданный ветеринаром в стране ЕС. С ним въезд в Португалию свободный. Проверка на границе минимальная.' }
      ]
    },
    {
      id: 'russia',
      title: 'Из России',
      audience: { countryCodes: ['RU'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Чип + вакцина', content: [
            { kind: 'paragraph', text: 'В ветеринарной клинике в РФ. Проверьте совместимость чипа со стандартом ISO.' }
          ]},
          { id: 'r2', title: '2. Титрование на бешенство', content: [
            { kind: 'paragraph', text: 'Обязательно для РФ. Кровь отправляется в аккредитованную лабораторию (в ЕС или в некоторые лаборатории в РФ). Антитела — не менее 0.5 IU/ml.' }
          ]},
          { id: 'r3', title: '3. Ожидание 3 месяца', content: [
            { kind: 'paragraph', text: 'От даты забора крови для титрования должно пройти 3 месяца до въезда в ЕС. Планируйте заранее.' }
          ]},
          { id: 'r4', title: '4. Сертификат ф. №1 → ф. №5e → AHC', content: [
            { kind: 'paragraph', text: 'Государственная ветеринарная клиника выдаёт форму №1 (для РФ), которую меняют на форму №5e для экспорта. Затем в пункте пропуска государственного ветеринарного контроля при выезде нужно получить AHC на английском языке.' }
          ]},
          { id: 'r5', title: '5. Въезд', content: [
            { kind: 'paragraph', text: 'В точке въезда в ЕС (Лиссабон, Порту, Фару) нужно показать AHC + паспорт + чип. Проверку проводит пограничный ветеринарный инспекционный пункт (BIP).' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: 'Транспорт',
      content: [
        { kind: 'checklist', items: [
          'Самолёт — карго (для крупных животных) или салон (для маленьких до 8 кг). У каждой авиакомпании свои правила.',
          'Багажник машины — разрешено, нужен перевозчик или ремень безопасности',
          'Поезд — обычно с намордником или в переноске',
          'Паром — нужно проверять правила конкретной линии'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'После прибытия',
      content: [
        { kind: 'checklist', items: [
          'Регистрация чипа в SIAC (португальская база) — в ветеринарной клинике, около € 20',
          'Получить португальский Pet Passport — может пригодиться для поездок обратно',
          'Ежегодные вакцины — бешенство, лептоспироз и др.',
          'Для собак опасных пород требуются лицензирование и страховка',
          'На пляже и в городе часто нужны намордник и поводок'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Чип', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Вакцина от бешенства', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Титрование', amountEURMin: 60, amountEURMax: 150 },
    { label: 'AHC / Pet Passport', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Перелёт животного', amountEURMin: 100, amountEURMax: 500, note: 'зависит от размера и дистанции' },
    { label: 'Регистрация в SIAC', amountEURMin: 15, amountEURMax: 25 }
  ],
  sources: [
    { title: 'DGAV — Direcção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt/animais/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Commission — Travelling with pets', url: 'https://food.ec.europa.eu/animals/movement-pets_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'SIAC — Sistema de Informação de Animais de Companhia', url: 'https://siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}