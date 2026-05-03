export default {
  editorialVoice: 'hackportugal',
  id: 'bicicleta-registo-codigo',
  categoryId: 'auto_ownership',
  title: 'Велосипед в Португалии — регистрация, права и правила',
  tldr: 'Обычные велосипеды (без мотора) в Португалии НЕ требуют регистрации, лицензии или страховки. С 2022 года введён добровольный реестр велосипедов через MyBike (mybike.pt) — для защиты от кражи. Электровелосипеды (e-bike) до 250 Вт и 25 км/ч — не требуют регистрации. Свыше — это speed pedelec / e-moped и нужно: регистрация в IMT, права AM или A1, шлем, страховка. Кодекс дорожного движения: вождение по правой стороне дороги, можно ехать по велодорожкам, тротуар — только дети до 10 лет. Шлем обязателен для детей до 16 лет, рекомендуется всем. Велосипед в поезде CP — бесплатно вне часов пик, в Lisboa Metro — да в большинстве станций.',
  tags: ['bicicleta', 'velosipeda', 'mybike', 'e-bike', 'imt'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'no-license-needed',
      title: 'Когда регистрация и права НЕ нужны',
      content: [
        { kind: 'checklist', items: [
          '✅ Обычный велосипед без мотора (любого размера, любой стоимости) — никакой регистрации, никаких прав, никакой страховки',
          '✅ Электровелосипед до 250 Вт мощности и до 25 км/ч максимальной скорости при педальной поддержке (assist), а не газу — те же правила что у обычного',
          '✅ Велосипед грузовой (cargo bike) — те же правила, если без мотора или e-bike в лимитах',
          '✅ Гoверборды и e-скейты до 6 км/ч — без регистрации'
        ] },
        { kind: 'paragraph', text: 'Это законодательно соответствует EU Directive 2002/24/EC. Pedelec до 250 Вт — это «велосипед» по закону, не «мотоцикл».' }
      ]
    },
    {
      id: 'speed-pedelec-emoped',
      title: 'Когда нужна регистрация и права',
      content: [
        { kind: 'checklist', items: [
          '🛑 Speed pedelec (S-pedelec): мощность >250 Вт ИЛИ скорость >25 км/ч с педальной помощью. Это уже e-moped',
          '🛑 E-bike с throttle (газом без педалей) если выше 25 км/ч',
          '🛑 Электросамокаты выше 25 км/ч — отдельный гайд',
          'Что нужно для S-pedelec / e-moped до 50 cm³ или 4 кВт:',
          '  • Регистрация в IMT, получение matrícula',
          '  • Права категории AM (16+) или A1',
          '  • Страховка обязательная',
          '  • Шлем (обязательный для всех)',
          '  • IUC (annual road tax)',
          '  • IMT техосмотр (vistoria) каждые 2 года'
        ] }
      ]
    },
    {
      id: 'mybike-register',
      title: 'MyBike — добровольный реестр для защиты от кражи',
      content: [
        { kind: 'paragraph', text: 'С 2022 года Federação Portuguesa de Cicloturismo (FPCUB) совместно с PSP запустили mybike.pt — национальный добровольный реестр велосипедов. Бесплатно. Ценность: если велосипед украдут, у полиции будет идентификатор для розыска.' },
        { kind: 'checklist', items: [
          'Регистрируешь: фрейм-номер (выбит на корпусе), фото, цвет, модель, серия',
          'Получаешь QR-код, который наклеиваешь на велосипед',
          'Если велосипед нашли (без хозяина) — PSP сканирует QR, видит твой контакт',
          'Помогает ВЕРНУТЬ велосипед, если найдут',
          'Не помогает с insurance: страховка велосипеда — отдельно',
          'Где регистрировать: mybike.pt → Cidadão → Registo Voluntário'
        ] },
        { kind: 'paragraph', text: 'Альтернативно — Bike Register (международный) или Velocheckpoint. Но для Португалии MyBike интегрирован с PSP — самое надёжное.' }
      ]
    },
    {
      id: 'rules-of-road',
      title: 'Правила движения',
      content: [
        { kind: 'paragraph', text: 'Кодекс дорожного движения Португалии (Código da Estrada) говорит:' },
        { kind: 'checklist', items: [
          '✅ Велосипедист — участник дорожного движения. Правая сторона дороги',
          '✅ Можно ехать по велодорожкам (ciclovia)',
          '✅ Можно ехать по обочине (berma) на дорогах без велодорожки',
          '❌ ТРОТУАР: только дети до 10 лет могут ехать по тротуару. Взрослые — НЕТ',
          '✅ В пешеходных зонах: можно вести велосипед рядом, но не ехать',
          '✅ Two abreast: можно ехать парой если не мешаешь движению',
          '🚦 Светофоры: те же правила что для машин',
          '🚦 Пешеходный переход: спускайся и веди велосипед — переходи как пешеход',
          '⚠️ Алкоголь: 0.5 промиль для велосипедиста (как для машины), 0.2 для молодёжи до 25 или новичков',
          '⚠️ Телефон в руке: запрещено как у автомобилистов',
          '🌃 Ночью: обязательно фонарь спереди (белый) и сзади (красный) + reflector. Светоотражатели на педалях. Без — штраф 60-300 €'
        ] }
      ]
    },
    {
      id: 'helmet',
      title: 'Шлем — обязательно/нет',
      content: [
        { kind: 'checklist', items: [
          'Дети до 16 лет: ШЛЕМ ОБЯЗАТЕЛЕН (Decreto-Lei 41/2007)',
          'Взрослые: РЕКОМЕНДУЕТСЯ, но не обязательно',
          'Детское сиденье: разрешено для детей до 7 лет, должно быть с подножками и ремнями',
          'Велосипед с грузом / прицепом: до 80 кг суммарно, прицеп должен быть с фарами',
          'Спортивные ралли: шлем обязателен у всех участников по правилам FPC',
          'Pedelec / e-moped: шлем обязателен независимо от возраста'
        ] }
      ]
    },
    {
      id: 'theft-insurance',
      title: 'Кража и страховка',
      content: [
        { kind: 'paragraph', text: 'Кража велосипедов в Лиссабоне и Порту — реальная проблема, особенно дорогих. Что делать:' },
        { kind: 'checklist', items: [
          'Сразу заявить в PSP: «furto de bicicleta», нужны номер фрейма, MyBike registration, фото',
          'Шансы найти возрастают если есть MyBike + фото с номером кадра',
          'Страховка велосипеда: 50-200 €/год от Tranquilidade, Fidelidade, Generali. Покрывают: кража, ущерб, ответственность за травмы',
          'Дорогие велосипеды (>1500 €): страховка обязательна',
          'Дополнительно: можно добавить велосипед в страховку дома (seguro multirriscos), часто дешевле',
          'Замок: U-lock минимум €60, не дешёвые тросовые',
          'GPS-трекер: AirTag в раме или special bike trackers (Powunity, Vodafone V-Bike)'
        ] }
      ]
    },
    {
      id: 'public-transport',
      title: 'Велосипед в общественном транспорте',
      content: [
        { kind: 'checklist', items: [
          'CP поезда (Lisboa-Porto, Sintra, etc.): велосипед БЕСПЛАТНО, в специальных вагонах. В часы пик ограничения — проверь conditions',
          'Lisboa Metro: разрешено в большинстве станций кроме часов пик. Бесплатно',
          'Lisboa autocarro Carris: складной велосипед в чехле — да; обычный — нет',
          'Porto Metro: велосипед — да, в outside стационных часов пик',
          'Lisboa cтрассы (Vasco da Gama, 25 de Abril): на велосипеде НЕЛЬЗЯ. Используй ferry или Metro',
          'Ferries Tejo (Cacilhas, Barreiro, Trafaria): велосипед — да, обычно бесплатно',
          'Boleias (попутки): не имеет специальных ограничений',
          'Самолёт: упаковка в bike box, depending на компанию: Ryanair €60, TAP €75-100'
        ] }
      ]
    },
    {
      id: 'cycling-routes',
      title: 'Велоинфраструктура и маршруты',
      content: [
        { kind: 'checklist', items: [
          'Lisboa: ciclovia вдоль Tejo (Belém — Cais do Sodré — Parque das Nações), Avenida da Liberdade — бесшовно',
          'Porto: Marginal Foz, ciclovia до Matosinhos и Vila do Conde',
          'Cascais Marginal: 25 км по морю Lisboa → Cascais',
          'EuroVelo 1 (Atlantic Coast Route): через всю Португалию с севера на юг',
          'Ecopistas: бывшие железнодорожные пути, превращённые в велодорожки. Dão (Beira), Lousã, Tâmega',
          'Via Algarviana: 300 км через Алгарве, требует MTB',
          'Caminho Português a Santiago на велосипеде: Porto → Santiago за 5-7 дней',
          'GIRA в Lisboa, Bira в Porto, BicLisboa, U-Bike: системы общественных велосипедов'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Регистрация в MyBike', amountEUR: 0, note: 'Бесплатно' },
    { label: 'Городской велосипед новый', amountEURMin: 200, amountEURMax: 800 },
    { label: 'E-bike в лимитах (250 Вт, 25 км/ч)', amountEURMin: 800, amountEURMax: 3500 },
    { label: 'Speed pedelec / e-moped (с регистрацией)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Регистрация e-moped в IMT', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Страховка велосипеда', amountEURMin: 50, amountEURMax: 200, note: 'В год' },
    { label: 'U-lock качественный', amountEURMin: 60, amountEURMax: 150 },
    { label: 'GPS-трекер', amountEURMin: 30, amountEURMax: 200, note: 'AirTag или специальный' },
    { label: 'Шлем взрослый', amountEURMin: 30, amountEURMax: 200 }
  ],
  sources: [
    { title: 'MyBike — реестр велосипедов', url: 'https://www.mybike.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IMT — Veículos motorizados de duas rodas', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 41/2007 — Código da Estrada', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34490175', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — segurança rodoviária para ciclistas', url: 'https://www.psp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
