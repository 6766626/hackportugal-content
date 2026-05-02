export default {
  editorialVoice: 'hackportugal',
  id: 'cinemas-events',
  categoryId: 'daily_life',
  title: 'Кино, концерты, мероприятия — где покупать билеты и какие скидки',
  tldr: 'Кинотеатры: 6-10 € стандарт, вторник -30% скидка во всех сетях (NOS, Cinemas UCI, Medeia). Концерты и спектакли: Ticketline, Blueticket, BOL — главные агрегаторы. Театр в Лиссабоне 15-40 €, концерт 20-80 €, футбол Benfica / Sporting / Porto 15-60 €. Кино под открытым небом летом: бесплатные сеансы в Parque Eduardo VII, Passeio Marítimo, Jardim da Estrela. Студенты и 65+ — скидка 30-50% почти везде.',
  tags: ['кино', 'концерты', 'мероприятия', 'билеты'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cinemas',
      title: '🎬 Кинотеатры',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Основные сети', content: [
            { kind: 'checklist', items: [
              '**NOS Cinemas** — крупнейшая, 35+ в стране. Обычный билет 7.50-10 €, IMAX 12-15 €, 3D +2 €',
              '**Cinemas UCI** — Alta, CascaiShopping, GaiaShopping. Премиум-экраны, цены сравнимы',
              '**Medeia Filmes** — авторское кино, Cinema Ideal, Nimas (Lisbon), Trindade (Porto). Независимое кино, мировое кино',
              '**Fnac cinemas** — в некоторых магазинах Fnac, дешевле',
              '**Cinema São Jorge** (Avenida) — историческая площадка для фестивалей'
            ]}
          ]},
          { id: 'c2', title: 'Скидки', content: [
            { kind: 'checklist', items: [
              '⭐ **Вторник — скидочный день** — все сети, все сеансы: 5-7 € (скидка ~30%)',
              '🎓 **Студенты** (с Cartão Jovem или студенческим билетом): 4.50-5.50 € в будни',
              '👵 **65+ пенсионеры**: 4.50-5.50 €',
              '🎬 **Subscrição NOS** (безлимит): 14.99-19.99 €/мес, окупается, если >3 фильма/мес',
              '🍿 **Комбо-меню (попкорн+напиток)** — +6-8 €',
              '🎫 **Cartão Continente** — накопление баллов за билеты в кино (при оплате связанной картой)'
            ]}
          ]},
          { id: 'c3', title: 'Оригинальные версии (VO)', content: [
            { kind: 'checklist', items: [
              'В Португалии почти все фильмы **в оригинале с португальскими субтитрами** (кроме детских анимаций — дубляж)',
              'Для англоязычных — идеально: английские фильмы на английском',
              'Для русскоговорящих: некоторые фильмы из РФ показывают на кинофестивалях',
              'Проверка: в расписании «VO» = оригинальная версия, «VP» = дубляж на португальский',
              'Большинство сеансов после 18:00 — VO'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'concerts-theater',
      title: '🎭 Концерты, театр, шоу',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Где покупать билеты', content: [
            { kind: 'checklist', items: [
              '**Ticketline** (ticketline.sapo.pt) — крупнейший продавец билетов',
              '**Blueticket** — много спортивных мероприятий / фестивалей',
              '**BOL — Bilheteira Online** — классика, опера',
              '**Fnac.pt** — продавец билетов, в том числе онлайн',
              '**Касса площадки** — прямо в зале, часто дешевле всего (без сервисного сбора)',
              '**MEO Blueticket** — пакет TV+билеты'
            ]}
          ]},
          { id: 't2', title: 'Основные площадки', content: [
            { kind: 'checklist', items: [
              '**Altice Arena** (Lisboa, Parque das Nações) — главная концертная площадка, Coldplay, Taylor Swift, фестивали',
              '**Coliseu dos Recreios** (Lisboa) — исторический зал, 4000 мест',
              '**Super Bock Arena** (Porto) — 8000 мест',
              '**Teatro Nacional D. Maria II** (Lisboa) — классический театр',
              '**Teatro Nacional de São Carlos** (Lisboa) — опера',
              '**Casa da Música** (Porto) — концерты от классики до джаза'
            ]}
          ]},
          { id: 't3', title: 'Типичные цены 2026', content: [
            { kind: 'checklist', items: [
              '🎭 Theatro Nacional: 10-30 €',
              '🎼 Классическая музыка / опера: 20-70 €',
              '🎤 Концерт среднего уровня (португальские артисты): 20-40 €',
              '🎸 Международные стадионные туры (Coldplay и т. п.): 60-200+ €',
              '🎷 Джаз-клубы (Hot Clube de Portugal): 10-20 €',
              '🎪 Цирк / семейные шоу: 15-30 €',
              '🎁 **Скидки**: Cartão Jovem, пенсионеры, семейные пакеты (3+) — 20-40%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sports',
      title: '⚽ Футбол и спорт',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Футбольные матчи', content: [
            { kind: 'checklist', items: [
              '**SL Benfica** (Estádio da Luz, Lisboa): 15-60 € будний тур, 40-150 € Champions League',
              '**Sporting CP** (Estádio José Alvalade, Lisboa): 15-50 €',
              '**FC Porto** (Estádio do Dragão): 15-55 €',
              '**Мелкие клубы** (Boavista, Vitória SC, Gil Vicente): 10-25 €',
              'Национальная сборная (Estádio Nacional / Luz): 25-100 €'
            ]}
          ]},
          { id: 's2', title: 'Другое', content: [
            { kind: 'checklist', items: [
              '**Футзал** — популярен в Португалии, матчи 3-10 €',
              '**Падел** — индивидуальные занятия (см. отдельный гайд gyms-fitness)',
              '**MMA / бокс** — редко, 30-100 €',
              '**Автоспорт** — автодром Estoril, MotoGP Portimão',
              '**Теннис** — турнир Estoril Open (май), категория ATP 250'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'festivals',
      title: '🎉 Крупные фестивали',
      content: [
        { kind: 'checklist', items: [
          '**NOS Alive** (Lisboa, июль) — рок / инди, 4 дня, ~180 €',
          '**Rock in Rio Lisboa** (июнь, раз в 2 года) — поп / рок, 100+ € день',
          '**Primavera Sound Porto** (июнь) — инди, 150+ €',
          '**MEO Sudoeste** (Zambujeira, август) — электронная музыка, 130-180 €',
          '**EDP Cool Jazz** (Cascais, июль) — джаз, 40-100 € вечер',
          '**Festival do Caldo Verde** (Porto, late June) — традиционная культура, бесплатно',
          '**Lisboa Ou Nada** (апрель) — уличное искусство, бесплатно',
          '**Festa de Santo António** (Lisbon, 12-13 июня) — большой городской фестиваль, бесплатно',
          '**São João do Porto** (23-24 июня) — фестиваль Porto'
        ]}
      ]
    },
    {
      id: 'outdoor-free',
      title: '🆓 Бесплатные события под открытым небом и городские мероприятия',
      content: [
        { kind: 'checklist', items: [
          '**Cinema ao Ar Livre** летом — Лиссабон (Parque das Nações, Passeio Marítimo), Porto (Jardim do Palácio, Serralves). Бесплатно',
          '**Концерты на площадях**: лето в Лиссабоне — каждую пятницу / субботу в парках',
          '**Noite Branca** (Braga, Faro, Évora — ежегодно одна ночь, все музеи открыты, уличное искусство, бесплатно)',
          '**Festival Eléctrico** (Gaia) — музыкальный фестиваль, часто бесплатно',
          '**Gratitude (Lisboa)** — ежемесячные общественные мероприятия, бесплатно / за пожертвование',
          '**Viva Brasil** (Lisboa, июль) — бразильский фестиваль, бесплатно',
          '**Книжные ярмарки**: Feira do Livro de Lisboa (май-июнь в Parque Eduardo VII), Porto (сентябрь) — бесплатный вход'
        ]}
      ]
    },
    {
      id: 'discovery',
      title: '🔍 Как находить события',
      content: [
        { kind: 'checklist', items: [
          '**Timeout Lisboa / Porto** — еженедельная подборка',
          '**Agenda Cultural de Lisboa** — мэрия, бесплатная печатная версия / онлайн',
          '**Meetup.com** — языковой обмен, хайкинг, технологии',
          '**Eventbrite PT** — воркшопы, семинары, вечеринки',
          '**Facebook events** — лучше всего работает для сообществ экспатов',
          '**@timeoutportugal** Instagram',
          '**Ticketline** app — еженедельная подборка',
          '**Bandas Portuguesas** (Spotify / Apple Music playlists) — местная музыка',
          '**Бесплатный билет** с NIF на некоторые мероприятия — бесплатно, но количество мест ограничено'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Кино, обычный билет', amountEURMin: 7.50, amountEURMax: 10 },
    { label: 'Кино во вторник (скидка)', amountEURMin: 5, amountEURMax: 7 },
    { label: 'Футбол, будний матч', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Theatro Nacional', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Международный концерт (арена)', amountEURMin: 60, amountEURMax: 200 },
    { label: 'Фестиваль (4 дня)', amountEURMin: 130, amountEURMax: 200 }
  ],
  sources: [
    { title: 'Ticketline', url: 'https://ticketline.sapo.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Blueticket (MEO)', url: 'https://www.blueticket.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Agenda Cultural de Lisboa', url: 'https://www.agendalx.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Eventos', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}