export default {
  editorialVoice: 'hackportugal',
  id: 'fogueiras-bbq-defeso',
  categoryId: 'emergency_rights',
  title: 'Fires, barbecues, fireworks — when they are banned (PIR) and the fines',
  tldr: 'Important: the fixed “período crítico 1 July — 30 September” NO LONGER exists in law. Under the current SGIFR regime (DL 82/2021), the bans kick in automatically on days when your municipality is in the PIR (Perigo de Incêndio Rural) danger class “muito elevado” or “máximo” — check daily at ipma.pt/pt/riscoincendio (all year round, but in summer that is most days inland). On top of that, the government can declare a Situação de Alerta with total bans (as on 3–9 July 2026: bans on forest access, any fire, fireworks and machinery work).\n\nOn muito elevado/máximo days the following are banned: bonfires and barbecues outside equipped areas, fireworks, burning plant residues, smoking in the forest, machinery that creates sparks. Fines for individuals: €280-€10,000. If your fire causes a forest fire — criminal liability up to 5 years. When it is allowed: municipal picnic areas (Parques de Merendas), hearths inside restaurants, your home kitchen. Fireworks require a Câmara licence all year round; burning piles of plant residues (queima de amontoados) requires a permit/notification all year round.',
  tags: ['bonfire', 'barbecue', 'fire', 'pir', 'icnf'],
  estimatedReadMinutes: 5,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'Guide aligned with the current SGIFR regime: the fixed período crítico no longer exists — the bans apply on days with PIR “muito elevado”/“máximo” (daily IPMA/ICNF map) and when a Situação de Alerta is declared (example: 3–9 July 2026, the entire mainland).',
  steps: [
    {
      id: 'periodo-critico',
      title: 'When the bans apply: the daily PIR instead of a calendar',
      content: [
        { kind: 'paragraph', text: 'The SGIFR reform (Decreto-Lei 82/2021) abolished the old scheme with a calendar-based “período crítico”: the bans are now tied to the daily Perigo de Incêndio Rural (PIR) danger class, which IPMA publishes for each municipality. There are five classes: reduzido, moderado, elevado, muito elevado, máximo. All the hard bans apply on “muito elevado” and “máximo” days — at any time of year.' },
        { kind: 'checklist', items: [
          'Law: Decreto-Lei 82/2021 (SGIFR — Integrated Rural Fire Management System); the official table of restrictions is at fogos.icnf.pt',
          'Daily PIR map by municipality: ipma.pt/pt/riscoincendio and fogos.icnf.pt — check in the morning before any plans involving fire or machinery',
          'On top of the PIR, the government can declare a Situação de Alerta (as on 3–9 July 2026) — its total bans override the ordinary rules and are widely covered in the media + AvisoPROCIV SMS',
          'Each municipality (Câmara Municipal) may impose additional restrictions in its territory'
        ] }
      ]
    },
    {
      id: 'what-banned',
      title: 'What is banned on muito elevado / máximo days',
      content: [
        { kind: 'checklist', items: [
          '❌ Any bonfires in forests and rural areas',
          '❌ Barbecues/churrasqueiras outdoors outside specially equipped municipal areas',
          '❌ Fireworks and pyrotechnics of all kinds',
          '❌ Burning garden waste, leaves, branches (queima — burning; queimada — controlled burning)',
          '❌ Burning agricultural waste',
          '❌ Using machinery/tools that create sparks in or near forests',
          '❌ Smoking in forests and on dirt roads near forests',
          '❌ Setting off firecrackers and other pyrotechnics, any “homemade” launches',
          '❌ Chinese sky lanterns — prohibited all year round',
          '❌ Glass bottles in forests — they can act as a lens and ignite dry grass'
        ] }
      ]
    },
    {
      id: 'what-allowed',
      title: 'What is allowed (with conditions)',
      content: [
        { kind: 'checklist', items: [
          '✅ Cooking in an equipped kitchen inside a private home (gas/electricity)',
          '✅ Grill on a covered balcony or terrace with non-combustible flooring — debatable; check with the Câmara Municipal',
          '✅ Barbecue in municipal picnic parks (Parques de Merendas) using fixed grills — usually open all year round, but they may close at red risk level',
          '✅ Gas grills with spark protection — grey area: allowed in most municipalities, but not “in the forest” and not near vegetation',
          '✅ Electric grill on your own asphalted/tiled terrace, away from vegetation',
          '✅ Fire in fireplaces inside a building',
          '✅ Gas candles/tiki torches — prohibited at red risk level'
        ] },
        { kind: 'paragraph', text: 'ICNF maintains the desfrutaranatureza.pt website with a map of equipped areas. Each Câmara Municipal also has its own list of locations.' },
        { kind: 'warning', text: 'A gas or electric barbecue on your own terrace is not automatically legal. Cascais, Sintra, Mafra, and Odemira have local rules prohibiting any outdoor “churrasco” in summer (on high-PIR days), except in specially equipped municipal areas.' }
      ]
    },
    {
      id: 'fines',
      title: 'Fines — serious',
      content: [
        { kind: 'checklist', items: [
          'Bonfire/barbecue in nature on muito elevado/máximo days (individual): €280-€10,000',
          'Bonfire in nature at red risk level: €1,500-€10,000 + criminal liability',
          'Fireworks on muito elevado/máximo days: €1,500-€3,000',
          'Burning agricultural waste without a licence: €1,000-€5,000',
          'Smoking in the forest: €100-€280',
          'Glass bottles in the forest: €250-€1,000',
          'Obstructing firefighters’ work: criminal liability',
          'Caused a fire (even unintentionally): criminal prosecution, up to 5 years’ imprisonment + civil compensation for damage (often millions of €)',
          'Started a fire and failed to keep it under control — leading to a fire: up to 8 years in prison and large fines'
        ] }
      ]
    },
    {
      id: 'fireworks',
      title: 'Fireworks and pyrotechnics all year round',
      content: [
        { kind: 'paragraph', text: 'Setting off fireworks (fogo-de-artifício, foguetes, sparklers) requires a licence all year round.' },
        { kind: 'checklist', items: [
          'EU categories: F1 (children’s, up to age 14), F2 (consumer, 18+), F3 (operators only), F4 (professionals only)',
          'F1 and F2 for private use: licence from the Câmara Municipal — €30-€100 per event',
          'Usually issued 10-15 days before the event date',
          'PSP (Public Security Police) must be notified at least 5 days in advance',
          'On PIR “muito elevado”/“máximo” days and during a Situação de Alerta, licences are not issued, and permits already issued are suspended',
          'Wedding/celebration in summer with fireworks — almost certainly not possible (high PIR); in the cool season — possible with a licence if that day’s PIR class is low',
          'Categories F3/F4 — only for licensed companies, not for private individuals',
          'Without a licence: €1,000-€3,000 + confiscation'
        ] },
        { kind: 'paragraph', text: 'Where to buy F1/F2: tobacconists, specialist shops, supermarkets before New Year and Carnival. Sparklers (estrelinhas) are only acceptable indoors and with fire safety measures; outdoors on high-PIR days — not allowed.' }
      ]
    },
    {
      id: 'agricultural-burning',
      title: 'Burning agricultural waste (burning/controlled burning)',
      content: [
        { kind: 'paragraph', text: 'If you are a farmer or own a plot with vegetation, burning plant residues is a common practice. The rules:' },
        { kind: 'checklist', items: [
          'Queima de amontoados (burning piles of plant residues): ALL YEAR ROUND only with a permit/prior notification — via fogos.icnf.pt/queimasqueimadas or by phone 808 200 520',
          'Queimada (controlled burning of a field): requires a municipal licence and the presence of a firefighting team',
          'On PIR “muito elevado”/“máximo” days — completely prohibited, except for emergency fire prevention operations',
          'Special programmes operate within the Sistema de Gestão Integrada de Fogos Rurais',
          'Application: online via the ICNF “Queimas e Queimadas” platform (fogos.icnf.pt/queimasqueimadas) or through the Câmara Municipal / Junta de Freguesia (municipality/parish council)',
          'Licence issued within 24-48 hours, depending on complexity',
          'Cost: €0-€30 (often free for small volumes)',
          'For controlled burning, volunteer firefighters (bombeiros voluntários) must be present on site'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'In practice: what to do in summer',
      content: [
        { kind: 'checklist', items: [
          'Want a barbecue — go to a picnic park (Parque de Merendas). Carcavelos, Sintra, and Costa da Caparica have excellent equipped areas',
          'Each municipality publishes a list of parks on the Câmara Municipal website',
          'In the cool season, a home barbecue on a terrace is usually acceptable when the PIR class is low and safety measures are followed — but check the day at ipma.pt/pt/riscoincendio',
          'New Year/Festas Populares: fireworks are usually municipal only; private ones — only with a licence',
          'In the forest — never. Even a cigarette in Sintra park or in Pinhal de Leiria means a fine',
          'Saw someone else’s fire in the forest: 112 → firefighters. Do not go close',
          'Sapadores Florestais (forest fire prevention services) patrol dry areas in summer',
          'Always take glass bottles away from the beach and picnic'
        ] },
        { kind: 'paragraph', text: 'For residents of rural homes: every year the firebreak strip (50 m around the house) must be cleared — remove scrub and dry grass; the main work window is spring (in 2026 — by 31 May, for municipalities under a calamity declaration — by 30 June). Failure to comply: a fine of up to €5,000 for individuals, and the câmara can do the clearing for you and send you the bill. Details — in the guide “Clearing your plot (gestão de combustível)”.' }
      ]
    }
  ],
  costs: [
    { label: 'Licence to burn plant residues', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Fireworks licence (categories F1/F2)', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Fine for a barbecue/bonfire on muito elevado/máximo days', amountEURMin: 280, amountEURMax: 10000 },
    { label: 'Fine for fireworks without a licence', amountEURMin: 1000, amountEURMax: 3000 },
    { label: 'Fine for smoking in the forest', amountEURMin: 100, amountEURMax: 280 },
    { label: 'Fine for not clearing the firebreak strip (individual)', amountEURMin: 150, amountEURMax: 5000 },
    { label: 'Compensation if you caused a fire', amountEURMin: 10000, amountEURMax: 1000000, note: 'Real cases — millions of €' }
  ],
  sources: [
    { title: 'ICNF — Forest Fire Defence', url: 'https://www.icnf.pt/florestas/dfci', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 82/2021 (SGIFR) — Integrated Rural Fire Management System', url: 'https://dre.pt/dre/detalhe/decreto-lei/82-2021-172938081', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'ICNF — Queimas e Queimadas platform (PQQ)', url: 'https://fogos.icnf.pt/queimasqueimadas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'IPMA — weather alert and fire risk', url: 'https://www.ipma.pt/pt/riscoincendio/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Restrictions associated with the daily Perigo de Incêndio Rural (PIR)', url: 'https://fogos.icnf.pt/SGIF2010/InformacaoPublicaDados/Condicionantes_PerigoIncendiosRural.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'GNR — National Forest Defence System', url: 'https://www.gnr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
