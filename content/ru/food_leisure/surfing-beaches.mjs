export default {
  editorialVoice: 'hackportugal',
  id: 'surfing-beaches',
  categoryId: 'food_leisure',
  title: 'Серфинг в Португалии — школы, пляжи, сезоны',
  tldr: 'Португалия — мировая столица серфинга. Nazaré — рекорды самых больших волн (30+ м)\.\n\nEriceira — единственный в Европе World Surf Reserve. Peniche, Sagres, Aljezur — легендарные споты. Школы от 30-60 €/урок + 15-25 € прокат, полноценный лагерь выходного дня ~150-350 €. Пик сезона: сентябрь-апрель для больших волн, май-август для новичков. Любой уровень — от новичка до мирового класса.',
  tags: ['серфинг', 'сёрфинг', 'nazaré', 'ericeira'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'spots',
      title: '🏄 Легендарные споты по регионам',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Nazaré — столица больших волн', content: [
            { kind: 'checklist', items: [
              '**Praia do Norte** — гигантские волны зимой, до 30 м',
              'Рекорды мира: Garrett McNamara, Sebastian Steudtner',
              '**Только для экспертов** — с командой спасателей',
              'Туристы смотрят с **Forte de São Miguel Arcanjo** — маяк + вид',
              'Сезон: ноябрь-февраль',
              'WSL/Nazaré big-wave events проходят в зимний waiting period и только при подходящем swell; даты нужно проверять на сайте WSL и у Município da Nazaré'
            ]}
          ]},
          { id: 's2', title: 'Ericeira — World Surf Reserve', content: [
            { kind: 'checklist', items: [
              'около 8 км побережья и 7 официально признанных world-class waves',
              '**Ribeira d\'Ilhas** — длинный правый reef/point break, часто используется для соревнований; подходит intermediate+ при нормальных условиях',
              '**Coxos** — для продвинутых, рифовый брейк',
              '**Foz do Lizandro** — пляжный брейк для среднего уровня',
              '**São Lourenço** — powerful right-hand reef/point, скорее intermediate/advanced; новичкам лучше Foz do Lizandro / São Julião / Praia do Sul с школой',
              'Единственный World Surf Reserve в Европе',
              'Где жить: гостевые дома 40-80 €/ночь, аренда на неделю 200-400 €',
              'примерно 45–60 минут на машине из Лиссабона, дольше в час пик'
            ]}
          ]},
          { id: 's3', title: 'Peniche — стабильный свелл', content: [
            { kind: 'checklist', items: [
              '**Supertubos** — ещё один спот WSL, волны качества Pipeline',
              '**Baleal** — полуостров с пляжными брейками для всех уровней',
              '**Cantinho da Baía** — защищённая бухта для новичков',
              'Больше кафе / хостелов / школ серфинга, чем в Ericeira',
              '1.5 часа от Лиссабона'
            ]}
          ]},
          { id: 's4', title: 'Sagres / Aljezur — юго-запад', content: [
            { kind: 'checklist', items: [
              '**Praia do Amado** — легендарный пляжный брейк',
              '**Arrifana** — мощный рифовый + пляжный брейк',
              '**Carrapateira** — открытый пляж, для больших волн',
              '**Castelejo, Cordoama, Barriga** — дикие пляжи, мало людей',
              'Offshore зависит от ориентации пляжа: west coast обычно лучше при E/NE winds, south coast — при N/NW; проверяйте Windguru/Surfline по конкретному spot',
              '3 часа от Лиссабона, ближе к аэропорту Faro'
            ]}
          ]},
          { id: 's5', title: 'Porto / северное побережье', content: [
            { kind: 'checklist', items: [
              '**Matosinhos** — городской пляжный брейк, для начинающих',
              '**Vila Chã, Miramar** — стабильные условия',
              '**Espinho** — чуть южнее, более длинные волны',
              '**Viana do Castelo** — продвинутые point breaks',
              'Вода холоднее, гидрокостюм 4/3 даже летом'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'schools',
      title: '🏫 Школы серфинга',
      content: [
        { kind: 'substeps', items: [
          { id: 'sc1', title: 'Цены 2026', content: [
            { kind: 'checklist', items: [
              '**Индивидуальный урок (1:1)**: 60-100 €/2 часа',
              '**Групповой урок**: 35-50 €/2 часа',
              '**Полный день** (группа): 60-90 € + закуски',
              '**Лагерь выходного дня (2 дня)**: 150-250 €',
              '**Серф-лагерь на неделю**: 350-800 € (уроки + проживание + еда)',
              '**Прокат доски + гидрокостюма**: 20-30 €/день, 60-100 €/неделю'
            ]}
          ]},
          { id: 'sc2', title: 'Топ школ', content: [
            { kind: 'checklist', items: [
              '**Ericeira Surf Camp** — один из крупнейших в Европе',
              '**Peniche Surf Camp** — хостел + школа',
              '**Baleal Surf School** — семейная атмосфера',
              '**Chill in Ericeira** — бюджетный вариант',
              '**Nazaré Surf School** — для новичков и среднего уровня, не для больших волн',
              '**WaterRats Sagres**, **Future Surf School** (Algarve)',
              '**Surfivor Portugal** — лагеря в разных локациях',
              '⚠️ Проверять FPS/qualified instructor, наличие страховки, rescue plan, ratio группы, легальную школу/оператора и условия занятия на пляже'
            ]}
          ]},
          { id: 'sc3', title: 'Что включено', content: [
            { kind: 'checklist', items: [
              'Доска (soft-top для новичков, жёсткая для продвинутых)',
              'Гидрокостюм (4/3 для холодной воды, 3/2 для тёплой)',
              'Инструктор',
              'Фотосъёмка (иногда доплата 10-20 €)',
              'Трансфер из хостела (в некоторых школах)',
              'Страховка — проверить (обычно включена в стоимость)',
              'Обед — в лагерях выходного дня'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'seasons',
      title: '🌊 Сезоны',
      content: [
        { kind: 'checklist', items: [
          '🌨️ **Ноябрь-Март**: большой свелл, волны 2-6 м. Только для профессионалов. Холодная вода 14-16°C, гидрокостюм 4/3',
          '🌼 **Апрель-Май**: идеально для среднего уровня, 1-2.5 м. Вода 15-17°C',
          '☀️ **Июнь-Август**: лучше всего для новичков, маленькие волны 0.5-1.5 м. Вода 17-20°C, 3/2 full suit; в тёплые дни на юге возможен shorty, но на west coast вода часто холодная из-за upwelling',
          '🍂 **Сентябрь-Октябрь**: отличные условия — стабильный свелл + тёплая вода. Лучший сезон в целом',
          '💨 **Ветер**: утром обычно offshore (хорошо), после 14:00 onshore (волны становятся рваными)',
          '📱 **Проверка условий**: Windguru, Surf-Forecast, Surfline, IPMA морской прогноз; проверять утром и за 24–48 часов'
        ]}
      ]
    },
    {
      id: 'gear-buy',
      title: '🛒 Экипировка — купить или взять напрокат',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Купить доску', content: [
            { kind: 'checklist', items: [
              '**Новая soft-top для новичков** (7-9 ft): 200-350 €',
              '**Жёсткая доска для новичков** (лонгборд 9 ft): 400-700 €',
              '**Шортборд для среднего уровня** (6-7 ft): 500-900 €',
              'Магазины: **Natural, Surf World Hossegor, Wavesailing**',
              'Б/у рынок: **olx.pt, Facebook Marketplace** — половина цены'
            ]}
          ]},
          { id: 'b2', title: 'Гидрокостюм', content: [
            { kind: 'checklist', items: [
              '**3/2 mm** (лето): 150-250 €',
              '**4/3 mm** (круглогодичный): 200-350 €',
              '**5/4 mm** (зима): 250-450 €',
              'Бренды: Patagonia, O\'Neill, Billabong, Quiksilver',
              'Менее известные бренды тоже качественные — за 2/3 цены'
            ]}
          ]},
          { id: 'b3', title: 'Прокат (для туристов)', content: [
            { kind: 'checklist', items: [
              'Доска: 15-25 €/день, 70-100 €/неделю',
              'Гидрокостюм: 10-15 €/день',
              'Комплект (доска + гидрокостюм): 25-35 €/день',
              'На популярных пляжах часто есть прокат, но на диких/удалённых spotах его может не быть; бронируйте заранее и проверяйте сезонность'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'community',
      title: '👥 Сообщество и соревнования',
      content: [
        { kind: 'checklist', items: [
          '**FPS** (Federação Portuguesa de Surf) — федерация, лицензия для соревнований',
          '**WSL events**: MEO Rip Curl Pro Portugal в Peniche — даты по календарю WSL; Nazaré big-wave/tow events — зимний waiting period, проведение зависит от swell',
          '**Местные клубы**: Ericeira Surf Clube, Peniche Surf Clube, Nazaré Surf Clube',
          '**Liga MEO Surf** — национальная соревновательная лига; для любителей искать local club contests, school competitions и муниципальные beach events',
          'Соц. сети: @visitericeira и др. — проверяйте актуальные handles',
          '**Surf/outdoor events** меняются по годам; проверяйте municipal agenda Cascais/Ericeira/Peniche и FPS calendar',
          '**Локальные surf/music events** меняются каждый сезон; проверяйте agendas муниципалитетов Peniche, Mafra/Ericeira и Nazaré'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Групповой урок (2 ч)', amountEURMin: 35, amountEURMax: 50 },
    { label: 'Индивидуальный урок', amountEURMin: 60, amountEURMax: 100 },
    { label: 'Серф-лагерь (неделя)', amountEURMin: 350, amountEURMax: 800 },
    { label: 'Прокат доски + гидрокостюма (день)', amountEURMin: 25, amountEURMax: 35 },
    { label: 'Купить новую доску для новичка', amountEURMin: 200, amountEURMax: 700 },
    { label: 'Гидрокостюм 4/3', amountEURMin: 200, amountEURMax: 350 }
  ],
  sources: [
    { title: 'FPS — Federação Portuguesa de Surf', url: 'https://www.fpsurf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'WSR Ericeira — World Surf Reserve', url: 'https://www.ericeirawsr.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Visit Portugal — Surf', url: 'https://www.visitportugal.com/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}