export default {
  editorialVoice: 'hackportugal',
  id: 'surfing-beaches',
  categoryId: 'food_leisure',
  title: 'Серфинг в Португалии — школы, пляжи, сезоны',
  tldr: 'Португалия — мировая столица серфинга. Nazaré — рекорды самых больших волн (30+ м). Ericeira — единственный в Европе World Surf Reserve. Peniche, Sagres, Aljezur — легендарные споты. Школы от 30-60 €/урок + 15-25 € прокат, полноценный лагерь выходного дня ~150-350 €. Пик сезона: сентябрь-апрель для больших волн, май-август для новичков. Любой уровень — от новичка до мирового класса.',
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
              'Чемпионат WSL Big Wave — каждый январь'
            ]}
          ]},
          { id: 's2', title: 'Ericeira — World Surf Reserve', content: [
            { kind: 'checklist', items: [
              '4 км побережья, **7+ спотов мирового уровня** в одном месте',
              '**Ribeira d\'Ilhas** — этап WSL QS, волна в стиле Pipeline',
              '**Coxos** — для продвинутых, рифовый брейк',
              '**Foz do Lizandro** — пляжный брейк для среднего уровня',
              '**São Lourenço** — пляжный брейк для новичков',
              'Единственный World Surf Reserve в Европе',
              'Где жить: гостевые дома 40-80 €/ночь, аренда на неделю 200-400 €',
              '45 мин на машине из Лиссабона'
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
              'Оффшорный ветер: южный (Algarve)',
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
              '⚠️ Проверить квалификацию: инструктор с сертификацией FPS (Federação Portuguesa de Surf)'
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
          '☀️ **Июнь-Август**: лучше всего для новичков, маленькие волны 0.5-1.5 м. Вода 17-20°C, короткий гидрокостюм 3/2',
          '🍂 **Сентябрь-Октябрь**: отличные условия — стабильный свелл + тёплая вода. Лучший сезон в целом',
          '💨 **Ветер**: утром обычно offshore (хорошо), после 14:00 onshore (волны становятся рваными)',
          '📱 **Проверка условий**: windguru.cz, surfforecast.com, magicseaweed.com — за 24 часа'
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
              'На всех пляжных серф-спотах есть точки проката'
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
          '**Соревнования WSL 2026**: MEO Rip Curl Pro Portugal (Peniche, октябрь), Nazaré Tow Surfing Challenge (декабрь-январь)',
          '**Местные клубы**: Ericeira Surf Clube, Peniche Surf Clube, Nazaré Surf Clube',
          '**Любительские соревнования**: Liga MEO (национальная лига) — открытые для любителей',
          'Соц. сети: **@visit ericeira, @peniche_surf, @surfpt** — ежедневный контент',
          '**Ежегодные серф-выставки**: Portugal Surf Expo в Cascais (апрель)',
          '**Фестивали**: Bom Vibes Fest Peniche, Ericeira Surf\'n\'Soul — серфинг + музыка'
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
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}