export default {
  editorialVoice: 'hackportugal',
  id: 'cinemas-events',
  categoryId: 'daily_life',
  title: 'Cinema, concerts, events — where to buy tickets and what discounts are available',
  tldr: 'Cinemas: €6-10 standard, Tuesday -30% discount across all chains (NOS, Cinemas UCI, Medeia). Concerts and performances: Ticketline, Blueticket, BOL — the main aggregators. Theatre in Lisbon €15-40, concert €20-80, football Benfica / Sporting / Porto €15-60. Open-air cinema in summer: free screenings in Parque Eduardo VII, Passeio Marítimo, Jardim da Estrela. Students and 65+ — 30-50% discount almost everywhere.',
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
              '**NOS Cinemas** — the largest, 35+ across the country. Regular ticket €7.50-10, IMAX €12-15, 3D +€2',
              '**Cinemas UCI** — Alta, CascaiShopping, GaiaShopping. Premium screens, comparable prices',
              '**Medeia Filmes** — arthouse cinema, Cinema Ideal, Nimas (Lisbon), Trindade (Porto). Independent cinema, world cinema',
              '**Fnac cinemas** — in some Fnac stores, cheaper',
              '**Cinema São Jorge** (Avenida) — historic venue for festivals'
            ]}
          ]},
          { id: 'c2', title: 'Discounts', content: [
            { kind: 'checklist', items: [
              '⭐ **Tuesday — discount day** — all chains, all screenings: €5-7 (discount ~30%)',
              '🎓 **Students** (with Cartão Jovem or student card): €4.50-5.50 on weekdays',
              '👵 **65+ pensioners**: €4.50-5.50',
              '🎬 **Subscrição NOS** (unlimited): €14.99-19.99/month, pays off if >3 films/month',
              '🍿 **Combo menu (popcorn+drink)** — +€6-8',
              '🎫 **Cartão Continente** — earn points for cinema tickets (when paying with the linked card)'
            ]}
          ]},
          { id: 'c3', title: 'Original versions (VO)', content: [
            { kind: 'checklist', items: [
              'In Portugal almost all films are **in the original language with Portuguese subtitles** (except children’s animations — dubbed)',
              'For English speakers — ideal: English-language films in English',
              'For Russian speakers: some films from the Russian Federation are shown at film festivals',
              'Check: in the schedule “VO” = original version, “VP” = dubbed into Portuguese',
              'Most screenings after 18:00 are VO'
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
              '**Ticketline** (ticketline.sapo.pt) — the largest ticket seller',
              '**Blueticket** — many sports events / festivals',
              '**BOL — Bilheteira Online** — classical music, opera',
              '**Fnac.pt** — ticket seller, including online',
              '**Venue box office** — directly at the venue, often the cheapest option (no service fee)',
              '**MEO Blueticket** — TV+tickets package'
            ]}
          ]},
          { id: 't2', title: 'Main venues', content: [
            { kind: 'checklist', items: [
              '**Altice Arena** (Lisboa, Parque das Nações) — main concert venue, Coldplay, Taylor Swift, festivals',
              '**Coliseu dos Recreios** (Lisboa) — historic hall, 4,000 seats',
              '**Super Bock Arena** (Porto) — 8,000 seats',
              '**Teatro Nacional D. Maria II** (Lisboa) — classical theatre',
              '**Teatro Nacional de São Carlos** (Lisboa) — opera',
              '**Casa da Música** (Porto) — concerts from classical to jazz'
            ]}
          ]},
          { id: 't3', title: 'Typical prices 2026', content: [
            { kind: 'checklist', items: [
              '🎭 Theatro Nacional: €10-30',
              '🎼 Classical music / opera: €20-70',
              '🎤 Mid-level concert (Portuguese artists): €20-40',
              '🎸 International stadium tours (Coldplay etc.): €60-200+',
              '🎷 Jazz clubs (Hot Clube de Portugal): €10-20',
              '🎪 Circus / family shows: €15-30',
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
              '**SL Benfica** (Estádio da Luz, Lisboa): €15-60 weekday league round, €40-150 Champions League',
              '**Sporting CP** (Estádio José Alvalade, Lisboa): €15-50',
              '**FC Porto** (Estádio do Dragão): €15-55',
              '**Smaller clubs** (Boavista, Vitória SC, Gil Vicente): €10-25',
              'National team (Estádio Nacional / Luz): €25-100'
            ]}
          ]},
          { id: 's2', title: 'Other', content: [
            { kind: 'checklist', items: [
              '**Futsal** — popular in Portugal, matches €3-10',
              '**Padel** — individual lessons (see separate guide gyms-fitness)',
              '**MMA / boxing** — rare, €30-100',
              '**Motorsport** — Estoril circuit, MotoGP Portimão',
              '**Tennis** — Estoril Open tournament (May), ATP 250 category'
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
          '**NOS Alive** (Lisboa, July) — rock / indie, 4 days, ~€180',
          '**Rock in Rio Lisboa** (June, every 2 years) — pop / rock, €100+ day',
          '**Primavera Sound Porto** (June) — indie, €150+',
          '**MEO Sudoeste** (Zambujeira, August) — electronic music, €130-180',
          '**EDP Cool Jazz** (Cascais, July) — jazz, €40-100 evening',
          '**Festival do Caldo Verde** (Porto, late June) — traditional culture, free',
          '**Lisboa Ou Nada** (April) — street art, free',
          '**Festa de Santo António** (Lisbon, 12-13 June) — major city festival, free',
          '**São João do Porto** (23-24 June) — Porto festival'
        ]}
      ]
    },
    {
      id: 'outdoor-free',
      title: '🆓 Free open-air events and city activities',
      content: [
        { kind: 'checklist', items: [
          '**Cinema ao Ar Livre** in summer — Lisbon (Parque das Nações, Passeio Marítimo), Porto (Jardim do Palácio, Serralves). Free',
          '**Concerts in squares**: summer in Lisbon — every Friday / Saturday in parks',
          '**Noite Branca** (Braga, Faro, Évora — annually for one night, all museums open, street art, free)',
          '**Festival Eléctrico** (Gaia) — music festival, often free',
          '**Gratitude (Lisboa)** — monthly community events, free / donation-based',
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
          '**Free ticket** with NIF for some events — free, but places are limited'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cinema, regular ticket', amountEURMin: 7.50, amountEURMax: 10 },
    { label: 'Cinema on Tuesday (discount)', amountEURMin: 5, amountEURMax: 7 },
    { label: 'Football, weekday match', amountEURMin: 15, amountEURMax: 60 },
    { label: 'Theatro Nacional', amountEURMin: 10, amountEURMax: 30 },
    { label: 'International concert (arena)', amountEURMin: 60, amountEURMax: 200 },
    { label: 'Festival (4 days)', amountEURMin: 130, amountEURMax: 200 }
  ],
  sources: [
    { title: 'Ticketline', url: 'https://ticketline.sapo.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Blueticket (MEO)', url: 'https://www.blueticket.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Agenda Cultural de Lisboa', url: 'https://www.agendalx.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Visit Porto — Events', url: 'https://www.visitporto.travel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
