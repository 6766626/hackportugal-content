export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-agua-doce-icnf',
  categoryId: 'food_leisure',
  title: 'Freshwater fishing (água doce) — ICNF licence (Institute for Nature Conservation and Forests)',
  tldr: 'Angling in rivers, reservoirs and lakes on mainland Portugal is regulated by ICNF (Institute for Nature Conservation and Forests), not DGRM (maritime resources authority). You apply online at icnf.pt → e-Balcão or via the SI ICNF app for about €5–15. Main categories: recreational (sport) angling; salmonids (trout, salmon — separate licence and their own seasons); fishing on concession stretches (special zones with a surcharge). Defeso (closed seasons) apply by species: trout — roughly November–March; salmon — closed almost all year except for rare events. Daily bag limit: 8 fish for trout and up to 30 for most others.',
  tags: ['fishing', 'icnf', 'river', 'freshwater'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-regulates',
      title: 'ICNF, not DGRM — why it matters',
      content: [
        { kind: 'paragraph', text: 'Portugal has two regulators for recreational angling. Newcomers often mix them up:' },
        { kind: 'checklist', items: [
          'ICNF: rivers, reservoirs, lakes, streams on the mainland. All freshwater',
          'DGRM: the sea, estuaries up to the maritime boundary, lagoons connected to the sea (Ria Formosa, Lagoa de Óbidos)',
          'A licence from one does not apply to the other',
          'In boundary stretches (for example, the Tejo in Lisboa upstream of Vila Franca de Xira) — this is freshwater, you need an ICNF licence',
          'The Azores and Madeira have their own rules — a separate topic'
        ] },
        { kind: 'warning', text: 'If you are spinning from a bridge over the Mondego in Coimbra on a DGRM sea licence — that is illegal. And vice versa: an ICNF licence does not cover fishing in Cascais harbour.' }
      ]
    },
    {
      id: 'license-types',
      title: 'Licence categories — what to choose',
      content: [
        { kind: 'checklist', items: [
          'Recreational (sport) angling: most freshwater species (achigã, lúcio, barbos, bordalo, ruivaca, pimpão). In 95% of cases — this is your option',
          'Salmonids (salmonídeos): trout (truta) and salmon (salmão). Separate licence and separate dates',
          'Fishing on concession stretches: specially designated zones, surcharge on top of the regular licence. Often the best spots',
          'Lagoa de Albufeira and reservoirs: usually the same rules — recreational angling. But some reservoirs may have special conditions'
        ] },
        { kind: 'paragraph', text: 'Typical licence validity periods:' },
        { kind: 'checklist', items: [
          '1 day: about €3',
          '8 days: about €5',
          '1 month: about €10',
          '6 months: about €15',
          '1 year: about €25'
        ] }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Apply via icnf.pt',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Go to icnf.pt → e-Balcão',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → the Cidadão section → Caça e Pesca → Pesca em águas interiores. There you will find a link to the e-Balcão online portal.' }
            ]
          },
          {
            id: 's2',
            title: 'Sign in via CMD or CC',
            content: [
              { kind: 'paragraph', text: 'Chave Móvel Digital (CMD, digital key) — the fastest method. Alternative — Cartão de Cidadão with a reader. Without CMD/CC, registration using your NIF (tax number) + e‑mail also works, but takes longer.' }
            ]
          },
          {
            id: 's3',
            title: 'Choose type, region and validity',
            content: [
              { kind: 'checklist', items: [
                'Type: recreational angling or salmonids',
                'Region: mainland Portugal by default',
                'Validity: 1 day / 8 days / month / 6 months / year',
                'Special options: concession lagoons/stretches (if you plan to fish there)'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Pay and get the PDF',
            content: [
              { kind: 'paragraph', text: 'Multibanco, MB WAY, bank card. After payment you will receive a PDF by e‑mail and in your account. Save it and take it with you.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-limits',
      title: 'Rules and seasons (closed season)',
      content: [
        { kind: 'paragraph', text: 'Seasons and closed seasons in freshwater are usually stricter than at sea:' },
        { kind: 'checklist', items: [
          'Trout (truta): season is usually March–October; November–February is closed (spawning protection)',
          'Salmon (salmão): almost closed year‑round, except for rare traditional events; in the Minho — special regime',
          'Achigã (black bass) and lúcio (pike): often allowed year‑round, but there may be restrictions during spawning',
          'Barbo and bordalo: generally allowed for most of the year',
          'Carp (carpa) and pimpão: allowed, considered less prized species',
          'Lamprey (lampreia): winter season, special restrictions and quotas apply',
          'Shad (sável): spring, heavily regulated',
          'American crayfish (cangrejo americano): invasive species, may be taken year‑round'
        ] },
        { kind: 'paragraph', text: 'Daily bag limit:' },
        { kind: 'checklist', items: [
          'Trout: up to 8 fish per day, minimum size 19 cm',
          'Achigã: up to 3 per day, minimum size 25 cm',
          'Lúcio: up to 3 per day, minimum size 35 cm',
          'Barbo: up to 30 fish',
          'Carp: up to 30 fish',
          'Overall cumulative limit: no more than 30 fish of permitted species per day'
        ] },
        { kind: 'warning', text: 'Seasons and limits change via portarias (ministerial orders). The latest data is on icnf.pt and in the SI ICNF app (for iPhone and Android).' }
      ]
    },
    {
      id: 'best-spots',
      title: 'Good freshwater spots',
      content: [
        { kind: 'checklist', items: [
          'Rio Mondego (Coimbra and upstream): trout, bass (achigã), barbel (barbo)',
          'Rio Zêzere and the Castelo do Bode and Cabril reservoirs: world‑class bass and pike',
          'Rio Minho on the border with Spain: salmon (under special permits), shad (sável)',
          'Rio Lima: trout, lamprey',
          'Rio Tejo upstream of Lisboa: barbel and bass',
          'Rio Guadiana and Alqueva (the largest reservoir in Europe): excellent bass fishing',
          'Reservoirs (albufeiras): Aguieira, Castelo de Bode, Idanha — angling is permitted almost everywhere',
          'Lagoons in the Azores: Furnas, Sete Cidades — wild trout'
        ] },
        { kind: 'paragraph', text: 'Concession stretches (paid) are often the best places: Penacova, Foz do Sousa, several stretches on the Mondego. A surcharge of about €10 on top of the regular licence per day.' }
      ]
    },
    {
      id: 'enforcement-fines',
      title: 'Who checks on the rivers',
      content: [
        { kind: 'checklist', items: [
          'GNR (National Republican Guard), SEPNA unit (environmental police) — the main inspections',
          'Vigilantes da Natureza ICNF — ICNF nature inspectors',
          'Polícia Florestal (forest police) — in national parks'
        ] },
        { kind: 'checklist', items: [
          'No licence: €100–500 + confiscation of gear',
          'Exceeding the daily limit: up to €500',
          'Fish below minimum size: €100–250 each',
          'Fishing in the closed season: up to €1,000',
          'Prohibited methods (nets, poison, etc.): criminal prosecution'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Licence — 1 day', amountEUR: 3 },
    { label: 'Licence — 8 days', amountEUR: 5 },
    { label: 'Licence — 1 month', amountEUR: 10 },
    { label: 'Licence — 6 months', amountEUR: 15 },
    { label: 'Licence — 1 year', amountEUR: 25 },
    { label: 'Concession stretch — per day', amountEURMin: 5, amountEURMax: 15, note: 'On top of the regular licence' },
    { label: 'Basic float-fishing kit', amountEURMin: 50, amountEURMax: 120 }
  ],
  sources: [
    { title: 'ICNF — Fishing in inland waters', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — apply for a licence online', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 112/2017 — Inland Waters Fishing regime', url: 'https://dre.pt/dre/detalhe/decreto-lei/112-2017-108128620', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR SEPNA — environmental police', url: 'https://www.gnr.pt/sepna.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
