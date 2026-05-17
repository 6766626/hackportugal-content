export default {
  editorialVoice: 'hackportugal',
  id: 'cinemas-events',
  categoryId: 'daily_life',
  title: 'Cinema, concerts, events — where to buy tickets and what discounts exist',
  tldr: 'Cinemas: €6-10 standard; many chains have weekday/Tuesday promos, but check the conditions on the specific cinema website — discounts do not always apply to IMAX/3D/premieres. Concerts and shows: Ticketline, Blueticket, BOL are the main aggregators. Theatre in Lisbon €15-40, concert €20-80, football Benfica / Sporting / Porto €15-60. Student, Cartão Jovem and senior discounts are common, but depend on the organiser and require a document.',
  tags: ['cinema', 'concerts', 'events', 'tickets'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cinemas',
      title: '🎬 Cinemas',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Main chains', content: [
            { kind: 'checklist', items: [
              '**NOS Cinemas** — the largest, 35+ in the country. Regular ticket €7.50-€10, IMAX €12-€15, 3D +€2',
              '**Cinemas UCI** — El Corte Inglés Lisboa, UBBO Amadora, ArrábidaShopping (Vila Nova de Gaia); check the current list on uci.pt. Premium screens, comparable prices',
              '**Medeia Filmes** — arthouse cinema, Cinema Ideal, Nimas (Lisbon), Trindade (Porto). Independent cinema, world cinema',
              '**FNAC** — sells tickets for events and sometimes runs free/promo events in stores, but it is not a cinema chain',
              '**Cinema São Jorge** (Avenida) — historic festival venue'
            ]}
          ]},
          { id: 'c2', title: 'Discounts', content: [
            { kind: 'checklist', items: [
              '⭐ **Tuesday/weekday deals** — tickets are often around €5-€7, but conditions and exclusions depend on the chain and screening (they may not apply to IMAX/3D/premieres)',
              '🎓 **Students** (with Cartão Jovem or student card): €4.50-€5.50 on weekdays',
              '👵 **65+ pensioners**: €4.50-€5.50',
              '🎬 **Cartão NOS** usually gives promos such as 2 tickets for the price of 1 for NOS customers; subscriptions and conditions change — check NOS Cinemas. UCI has UCI Unlimited (check the current price)',
              '🍿 **Combo menu (popcorn+drink)** — +€6-€8',
              '🎫 **Cartão Continente** — earn points on cinema tickets (when paying with the linked card)'
            ]}
          ]},
          { id: 'c3', title: 'Original versions (VO)', content: [
            { kind: 'checklist', items: [
              'In Portugal, almost all films are **in the original language with Portuguese subtitles** (except children’s animations — dubbed)',
              'For English speakers — ideal: English-language films are in English',
              'For Russian speakers: some films from the Russian Federation are shown at film festivals',
              'Check: in the schedule, “VO” = original version, “VP” = dubbed into Portuguese',
              'Focus not on the time, but on the VO/VOST/VP label in the schedule'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'concerts-theater',
      title: '🎭 Concerts, theatre, shows',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Where to buy tickets', content: [
            { kind: 'checklist', items: [
              '**Ticketline** (ticketline.pt) — the largest ticket seller',
              '**Blueticket** — many sports events / festivals',
              '**BOL — Bilheteira Online** — classical music, opera',
              '**Fnac.pt** — ticket seller, including online',
              '**Venue box office** — directly at the hall, often the cheapest option (no service fee)',
              '**MEO Blueticket** — ticketing platform for concerts, sport and festivals; there are sometimes MEO promos'
            ]}
          ]},
          { id: 't2', title: 'Main venues', content: [
            { kind: 'checklist', items: [
              '**MEO Arena** (formerly Altice Arena, Lisboa, Parque das Nações) — main concert venue, Coldplay, Taylor Swift, festivals',
              '**Coliseu dos Recreios** (Lisboa) — historic hall, 4,000 seats',
              '**Super Bock Arena** (Porto) — 8,000 seats',
              '**Teatro Nacional D. Maria II** (Lisboa) — classical theatre. Note: the main building on Rossio is closed for renovation, performances take place as part of programação em trânsito at other venues — check the specific address on the ticket',
              '**Teatro Nacional de São Carlos** (Lisboa) — opera',
              '**Casa da Música** (Porto) — concerts from classical music to jazz'
            ]}
          ]},
          { id: 't3', title: 'Typical prices 2026', content: [
            { kind: 'checklist', items: [
              '🎭 Teatro Nacional / municipal theatre: around €10-€30, prices depend on the performance and seat',
              '🎼 Classical music / opera: €20-€70',
              '🎤 Mid-level concert (Portuguese artists): €20-€40',
              '🎸 International stadium tours (Coldplay etc.): €60-€200+',
              '🎷 Jazz clubs (Hot Clube de Portugal): €10-€20',
              '🎪 Circus / family shows: €15-€30',
              '🎁 **Discounts**: Cartão Jovem, pensioners, family packages (3+) — 20-40%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sports',
      title: '⚽ Football and sport',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Football matches', content: [
            { kind: 'checklist', items: [
              '**SL Benfica** (Estádio da Luz, Lisboa): €15-€60 weekday league match, €40-€150 Champions League',
              '**Sporting CP** (Estádio José Alvalade, Lisboa): €15-€50',
              '**FC Porto** (Estádio do Dragão): €15-€55',
              '**Smaller clubs** (Boavista, Vitória SC, Gil Vicente): €10-€25',
              'National team (Estádio Nacional / Luz): €25-€100'
            ]}
          ]},
          { id: 's2', title: 'Other', content: [
            { kind: 'checklist', items: [
              '**Futsal** — popular in Portugal, matches €3-€10',
              '**Padel** — individual lessons (see separate gyms-fitness guide)',
              '**MMA / boxing** — rare, €30-€100',
              '**Motorsport** — Estoril circuit, MotoGP Portimão',
              '**Tennis** — Oeiras Open / ATP Challenger events (the former Millennium Estoril Open ATP 250 dropped out of the calendar after 2024); status and dates change — check the ATP calendar and Federação Portuguesa de Ténis'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'festivals',
      title: '🎉 Major festivals',
      content: [
        { kind: 'checklist', items: [
          '**NOS Alive** (Algés/Lisboa, July) — rock / indie, usually 3 days; day ticket/pass prices change annually, check the official website',
          '**Rock in Rio Lisboa** (June, every 2 years) — pop / rock, €100+ day',
          '**Primavera Sound Porto** (June) — indie, €150+',
          '**MEO Sudoeste** (Zambujeira, August) — electronic music, €130-€180',
          '**EDP Cool Jazz** (Cascais, July) — jazz, €40-€100 evening',
          '**Festas de São João do Porto** (23-24 June) — traditional culture, free city events',
          '**Festas de Lisboa / Lisboa na Rua** (June) — free city programmes by EGEAC, see agenda',
          '**Festa de Santo António** (Lisbon, 12-13 June) — major city festival, free',
          '**São João do Porto** (23-24 June) — Porto festival'
        ]}
      ]
    },
    {
      id: 'outdoor-free',
      title: '🆓 Free outdoor events and city events',
      content: [
        { kind: 'checklist', items: [
          '**Cinema ao Ar Livre** in summer — there are free municipal open-air screenings and paid commercial projects; check Lisboa na Rua/EGEAC, Agenda Cultural de Lisboa, Porto municipal agenda and the specific organiser',
          '**Concerts in squares**: in summer there are often free concerts as part of municipal programmes (Festas de Lisboa/Lisboa na Rua), but the schedule changes annually',
          '**Noite Branca** — especially well known in Braga; in other cities similar night-time cultural programmes happen irregularly, check the agenda municipal',
          '**Festival Elétrico** — paid electronic music festival in the Porto area; prices and location change, check the official website',
          '**Community events** — search on Meetup, Eventbrite and in local cultural agendas',
          '**Viva Brasil** (Lisboa, July) — Brazilian festival, free',
          '**Book fairs**: Feira do Livro de Lisboa (May-June in Parque Eduardo VII), Porto (September) — free entry'
        ]}
      ]
    },
    {
      id: 'discovery',
      title: '🔍 How to find events',
      content: [
        { kind: 'checklist', items: [
          '**Timeout Lisboa / Porto** — weekly selection',
          '**Agenda Cultural de Lisboa** — city council, free printed version / online',
          '**Meetup.com** — language exchange, hiking, technology',
          '**Eventbrite PT** — workshops, seminars, parties',
          '**Facebook events** — works best for expat communities',
          '**@timeoutportugal** Instagram',
          '**Ticketline** app — weekly selection',
          '**Bandas Portuguesas** (Spotify / Apple Music playlists) — local music',
          'For free events, advance inscrição/reservation or levantamento de bilhete is often required; places are limited'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cinema, regular ticket', amountEURMin: 7.50, amountEURMax: 10 },
    { label: 'Cinema on Tuesday (discount)', amountEURMin: 5, amountEURMax: 7 },
    { label: 'Football, weekday match', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Teatro Nacional', amountEURMin: 10, amountEURMax: 30 },
    { label: 'International concert (arena)', amountEURMin: 60, amountEURMax: 200 },
    { label: 'Festival pass / multi-day', amountEURMin: 130, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Ticketline', url: 'https://ticketline.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Blueticket (MEO)', url: 'https://www.blueticket.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Agenda Cultural de Lisboa', url: 'https://www.agendalx.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Events', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
