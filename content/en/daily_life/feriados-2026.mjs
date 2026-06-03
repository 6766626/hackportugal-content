export default {
  editorialVoice: 'hackportugal',
  id: 'feriados-2026',
  categoryId: 'daily_life',
  title: 'Public holidays and days off in Portugal',
  tldr: 'Portugal has around 13 national public holidays + 1-2 municipal ones. Key dates: Ano Novo (1.01), Carnaval (February), Páscoa (Easter, March/April), 25 de Abril (revolution), 1 de Maio, 10 de Junho (Camões), Santos Populares in June, Assunção 15.08, 5 de Outubro (Republic), 1 de Novembro (All Saints), 1 de Dezembro (Restoration of Independence), 8 de Dezembro, Natal 25.12. A “Ponte” (“bridge”) is when a holiday falls on a Tuesday or Thursday, and the Friday or Monday often also becomes a day off.',
  tags: ['public holidays', 'days off', 'portugal'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'national',
      title: 'National public holidays 2026',
      content: [
        { kind: 'checklist', items: [
          '1 January — Ano Novo (New Year) — Thursday',
          '17 February — Carnaval (Tuesday) — unofficial holiday, but many people do not work',
          '3 April — Sexta-feira Santa (Good Friday)',
          '5 April — Páscoa (Easter, Sunday)',
          '25 April — Dia da Liberdade (25 April, Carnation Revolution) — Saturday',
          '1 May — Dia do Trabalhador (Labour Day) — Friday',
          '4 June — Corpo de Deus (Corpus Christi) — Thursday',
          '10 June — Dia de Portugal (Camões Day, Portuguese identity) — Wednesday',
          '15 August — Assunção (Assumption) — Saturday',
          '5 October — Implantação da República (Republic) — Monday',
          '1 November — Todos os Santos (All Saints) — Sunday',
          '1 December — Restauração da Independência — Tuesday',
          '8 December — Imaculada Conceição — Tuesday',
          '25 December — Natal (Christmas) — Friday'
        ]},
        { kind: 'warning', text: '24 June (in Porto — São João) and 13 June (in Lisbon — Santo António) are municipal public holidays, non-working days in the respective cities.' }
      ]
    },
    {
      id: 'santos-populares',
      title: 'Santos Populares (June) — the main cultural month',
      content: [
        { kind: 'paragraph', text: 'Throughout June, “popular saints” are celebrated across the country:' },
        { kind: 'checklist', items: [
          '13 June — Santo António (Lisbon). Street festivities in Alfama, grilled sardines. Marchas Populares on 12 June on Avenida da Liberdade',
          '24 June — São João (Porto). A battle with plastic hammers, leek on the head, fireworks over the Douro — a legendary event',
          '29 June — São Pedro: municipal holidays in several towns and cities (Sintra, Seixal, Póvoa de Varzim, etc.; in Setúbal the municipal holiday is 15 September). Fishing festivals'
        ]},
        { kind: 'paragraph', text: 'For residents, this means sardines, Portuguese songs, garlands and parks full of people. An excellent way to get a feel for local culture.' }
      ]
    },
    {
      id: 'pontes',
      title: 'Pontes — how the Portuguese extend weekends',
      content: [
        { kind: 'paragraph', text: 'A “Ponte” is a “bridge” between a public holiday and the weekend. If a holiday falls on a Tuesday, many people take Monday off → a 4-day weekend.' },
        { kind: 'paragraph', text: 'In 2026 the classic pontes are:' },
        { kind: 'checklist', items: [
          '25 April (Sat) — not especially advantageous',
          '1 May (Fri) — long weekend from 1-3 May',
          '10 June (Wed) — midweek, so no convenient bridge',
          '5 October (Mon) — long weekend from 3-4-5 October',
          '8 December (Tue) — many people take 7.12 → a 4-day weekend'
        ]}
      ]
    },
    {
      id: 'working-hours',
      title: 'Working on public holidays',
      content: [
        { kind: 'checklist', items: [
          'Public institutions — banks, Finanças, AIMA, schools — are closed',
          'Supermarkets (Continente, Lidl) usually open, but with reduced hours',
          'Restaurants are open, and popular tourist spots operate',
          'The duty pharmacy — Farmácia de serviço — is open',
          'CTT post offices are closed',
          'Transport runs on a weekend timetable'
        ]}
      ]
    },
    {
      id: 'personal-days',
      title: 'Additional leave days',
      content: [
        { kind: 'paragraph', text: 'By law, an employee in Portugal is entitled to:' },
        { kind: 'checklist', items: [
          '22 working days of annual leave per year',
          'Subsídio de férias (holiday pay) — corresponds to the base salary for the leave period; by law it is paid before the leave begins',
          'Subsídio de Natal — corresponds to one month’s salary, usually paid by 15 December',
          'Marriage (wedding) — 15 consecutive days of absence under the Código do Trabalho',
          'Death of close relatives — the period of ausência justificada depends on the degree of kinship (from 2 to 20 days under CT art. 251)',
          'A day off on your birthday, if the employer agrees; this is common practice'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Governo de Portugal — Código do Trabalho (labour code)', url: 'https://www.dgert.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Diário da República — Lei 7/2009 (Código do Trabalho)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
