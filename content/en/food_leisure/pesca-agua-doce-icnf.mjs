export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-agua-doce-icnf',
  categoryId: 'food_leisure',
  title: 'Freshwater fishing (agua doce) — ICNF licence (Institute for Nature Conservation and Forests)',
  tldr: 'Fishing in rivers, reservoirs and lakes in mainland Portugal is regulated by ICNF (Institute for Nature Conservation and Forests), not DGRM (the marine resources authority). You apply for the licence online at icnf.pt → e-Balcão or via the SI ICNF app for around €5-15. Main categories: recreational (sport) fishing; salmonid fishing (trout, salmon — separate licence and its own seasons); fishing in concession areas (special zones with an extra fee). Defeso periods (closed seasons) apply by species: trout — roughly November-March, salmon — banned for almost the whole year except for rare events. Daily limit: 8 fish for trout and up to 30 for most others.',
  tags: ['fishing', 'angling', 'icnf', 'river', 'freshwater'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-regulates',
      title: 'ICNF, not DGRM — why this matters',
      content: [
        { kind: 'paragraph', text: 'Portugal has two regulators for recreational fishing. Newcomers often confuse them:' },
        { kind: 'checklist', items: [
          'ICNF: rivers, reservoirs, lakes, streams on the mainland. All freshwater',
          'DGRM: the sea, estuaries up to the boundary of marine waters, lagoons connected to the sea (Ria Formosa, Lagoa de Óbidos)',
          'A licence from one does not work for the other',
          'In boundary zones (for example, the Tejo in Lisboa above Vila Franca de Xira) — this is freshwater, and an ICNF licence is required',
          'Açores and Madeira have their own rules — a separate matter'
        ] },
        { kind: 'warning', text: 'If you fish with a spinning rod from a bridge over the Mondego in Coimbra using a DGRM sea licence — that is illegal. And vice versa: an ICNF licence does not cover fishing in Cascais harbour.' }
      ]
    },
    {
      id: 'license-types',
      title: 'Licence categories — which one to choose',
      content: [
        { kind: 'checklist', items: [
          'Recreational (sport) fishing: most freshwater species (achigã, lúcio, barbos, bordalo, ruivaca, pimpão). In 95% of cases — this is the one you need',
          'Salmonid fishing (salmonídeos): trout (truta) and salmon (salmão). Separate licence and separate dates',
          'Fishing in concession areas: specially designated zones, an extra fee on top of the normal licence. Often the best spots',
          'Lagoa de Albufeira and reservoirs: usually the same rules — recreational fishing. But some reservoirs may have special conditions'
        ] },
        { kind: 'paragraph', text: 'Licence validity periods (typical):' },
        { kind: 'checklist', items: [
          '1 day: ~€3',
          '8 days: ~€5',
          '1 month: ~€10',
          '6 months: ~€15',
          '1 year: ~€25'
        ] }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Applying via icnf.pt',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Go to icnf.pt → e-Balcão',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → Cidadão section → Caça e Pesca → Pesca em águas interiores. The link to the e-Balcão online portal will also be there.' }
            ]
          },
          {
            id: 's2',
            title: 'Sign in with CMD or CC',
            content: [
              { kind: 'paragraph', text: 'Chave Móvel Digital (CMD, digital key) — the fastest method. The alternative is Cartão de Cidadão (citizen card) with a reader. Without CMD/CC, registration using NIF (tax number) + e-mail also works, but takes longer.' }
            ]
          },
          {
            id: 's3',
            title: 'Choose the type, region and duration',
            content: [
              { kind: 'checklist', items: [
                'Type: recreational fishing or salmonids',
                'Region: mainland Portugal by default',
                'Validity period: 1 day / 8 days / month / 6 months / year',
                'Special options: concession lagoons/areas (if you plan to fish there)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Payment and receiving the PDF',
            content: [
              { kind: 'paragraph', text: 'Multibanco, MB WAY, bank card. After payment, you will receive a PDF by e-mail and in your personal account. Save it and take it with you.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-limits',
      title: 'Rules and seasons (closed season)',
      content: [
        { kind: 'paragraph', text: 'Freshwater seasons and closed seasons are usually stricter than at sea:' },
        { kind: 'checklist', items: [
          'Truta (trout): season is usually March-October; November-February is closed (spawning protection)',
          'Salmão (salmon): banned almost all year round, except for rare traditional events; in the Minho — a special regime',
          'Achigã (bass) and lúcio (pike): often permitted all year round, but there may be restrictions during spawning',
          'Barbo and bordalo: as a rule, permitted for most of the year',
          'Carpa and pimpão: permitted, considered less valuable species',
          'Lampreia (lamprey): winter season, with special restrictions and quotas',
          'Sável (shad): in spring, heavily regulated',
          'Cangrejo americano (American crayfish): invasive species, can be caught all year round'
        ] },
        { kind: 'paragraph', text: 'Daily limit:' },
        { kind: 'checklist', items: [
          'Truta: up to 8 individuals per day, minimum size 19 cm',
          'Achigã: up to 3 per day, minimum size 25 cm',
          'Lúcio: up to 3 per day, minimum size 35 cm',
          'Barbo: up to 30 fish',
          'Carpa: up to 30 fish',
          'Total overall limit: no more than 30 fish of permitted species per day'
        ] },
        { kind: 'warning', text: 'Seasons and limits change by portarias. Current data — on icnf.pt and in the SI ICNF app (for iPhone and Android).' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Where freshwater fishing is good',
      content: [
        { kind: 'checklist', items: [
          'Rio Mondego (Coimbra and upstream): trout, bass (achigã), barbel (barbo)',
          'Rio Zêzere and the Castelo do Bode, Cabril reservoirs: world-class bass and pike',
          'Rio Minho on the border with Spain: salmon (with special permits), shad (sável)',
          'Rio Lima: trout, lamprey',
          'Rio Tejo above Lisboa: barbel and bass',
          'Rio Guadiana and Alqueva (Europe’s largest reservoir): excellent bass fishing',
          'Reservoirs (albufeiras): Aguieira, Castelo de Bode, Idanha — fishing is permitted almost everywhere',
          'Lagoons in the Açores: Furnas, Sete Cidades — wild brown trout'
        ] },
        { kind: 'paragraph', text: 'Concession areas (paid) are often the best spots: Penacova, Foz do Sousa, a number of stretches on the Mondego. Extra fee ~€10 on top of the normal licence for a day.' }
      ]
    },
    {
      id: 'enforcement-fines',
      title: 'Who checks on rivers',
      content: [
        { kind: 'checklist', items: [
          'GNR (National Republican Guard), SEPNA unit (environmental police) — main inspections',
          'Vigilantes da Natureza ICNF — ICNF nature wardens',
          'Polícia Florestal (forest police) — in national parks'
        ] },
        { kind: 'checklist', items: [
          'No licence: €100-500 + confiscation of tackle',
          'Exceeding the daily limit: up to €500',
          'Fish below the minimum size: €100-250 for each one',
          'Fishing during the closed season: up to €1,000',
          'Prohibited methods (nets, poison, etc.): criminal prosecution'
        ] }
      ]
    }
  ],
  costs: [
    { label: '1-day licence', amountEUR: 3 },
    { label: '8-day licence', amountEUR: 5 },
    { label: '1-month licence', amountEUR: 10 },
    { label: '6-month licence', amountEUR: 15 },
    { label: '1-year licence', amountEUR: 25 },
    { label: 'Concession area — day', amountEURMin: 5, amountEURMax: 15, note: 'On top of the normal licence' },
    { label: 'Basic float fishing kit', amountEURMin: 50, amountEURMax: 120 }
  ],
  sources: [
    { title: 'ICNF — Pesca em águas interiores', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — online licence application', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 112/2017 — Pesca em Águas Interiores regime', url: 'https://dre.pt/dre/detalhe/decreto-lei/112-2017-108128620', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR SEPNA — environmental police', url: 'https://www.gnr.pt/sepna.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
