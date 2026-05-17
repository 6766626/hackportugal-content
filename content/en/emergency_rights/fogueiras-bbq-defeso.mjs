export default {
  editorialVoice: 'hackportugal',
  id: 'fogueiras-bbq-defeso',
  categoryId: 'emergency_rights',
  title: 'Fire, barbecue, fireworks in summer — período crítico and fines',
  tldr: 'From 1 July to 30 September, Portugal has a período crítico (period of heightened fire risk). Any open fire outside specially equipped places is prohibited: barbecues in the yard, fireworks, bonfires, burning rubbish and plant waste. Fines for individuals: €280-€10,000. If your fire leads to a forest fire — criminal liability up to 5 years in prison. When it is allowed: a) at municipal picnic areas with grills (Parques de Merendas with permission), b) in hearths inside restaurants, c) at home — in a properly equipped kitchen. Fireworks require a separate licence from the Câmara Municipal (municipality) all year round. Important: even in winter, burning plant waste requires a licence.',
  tags: ['bonfire', 'barbecue', 'fire', 'critical-period', 'icnf'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'periodo-critico',
      title: 'Período crítico — what and when',
      content: [
        { kind: 'paragraph', text: 'Período crítico is the official period of heightened fire risk. It is announced annually by ICNF (Portugal’s Institute for Nature Conservation and Forests) and MAI. It usually runs from 1 July to 30 September, but in dry years it may be extended until 15 October.' },
        { kind: 'checklist', items: [
          'Law: Decreto-Lei 124/2006 (National System for Forest Fire Protection)',
          'Additional restrictions on red/orange danger level days (estado de alerta especial nível vermelho/laranja) — IPMA (weather service) + ICNF',
          'Daily updates on the ICNF website and in the IPMA app — usually by 09:00',
          'Each municipality (Câmara Municipal) may introduce additional restrictions in its territory'
        ] }
      ]
    },
    {
      id: 'what-banned',
      title: 'What is banned during período crítico',
      content: [
        { kind: 'checklist', items: [
          '❌ Any bonfires in forests and rural areas',
          '❌ Barbecues/churrasqueiras outdoors outside specially equipped municipal areas',
          '❌ Fireworks and pyrotechnics of all kinds',
          '❌ Burning garden waste, leaves, branches (queima — burning; queimada — controlled burning)',
          '❌ Burning agricultural waste',
          '❌ Use of machinery/tools that create sparks in or near forests',
          '❌ Smoking in forests and on dirt roads near forests',
          '❌ Setting off firecrackers and other pyrotechnics, any “homemade” launches',
          '❌ Chinese sky lanterns — banned all year round',
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
          '✅ Grill on a covered balcony or terrace with non-combustible flooring — a grey area; check with the Câmara Municipal',
          '✅ Barbecue in municipal picnic parks (Parques de Merendas) using fixed grills — usually open all year round, but they may be closed at red danger level',
          '✅ Gas grills with spark protection — grey area: allowed in most municipalities, but not “in the forest” and not close to vegetation',
          '✅ Electric grill on your own asphalted/tiled terrace, away from vegetation',
          '✅ Fire in fireplaces inside a building',
          '✅ Gas candles/tiki torches — banned at red danger level'
        ] },
        { kind: 'paragraph', text: 'ICNF maintains the desfrutaranatureza.pt website with a map of equipped areas. Each Câmara Municipal also has its own list of locations.' },
        { kind: 'warning', text: 'A gas or electric barbecue on your own terrace is not automatically legal. Cascais, Sintra, Mafra and Odemira have local rules banning any open-air “churrasco” during período crítico, except in specially equipped municipal areas.' }
      ]
    },
    {
      id: 'fines',
      title: 'Fines — serious',
      content: [
        { kind: 'checklist', items: [
          'Bonfire/barbecue in nature during período crítico (individual): €280-€10,000',
          'Bonfire in nature at red danger level: €1,500-€10,000 + criminal liability',
          'Fireworks during período crítico: €1,500-€3,000',
          'Burning agricultural waste without a licence: €1,000-€5,000',
          'Smoking in a forest: €100-€280',
          'Glass bottles in a forest: €250-€1,000',
          'Obstructing firefighters’ work: criminal liability',
          'Caused a fire (even unintentionally): criminal prosecution, up to 5 years’ imprisonment + civil compensation for damage (often millions of €)',
          'Started a fire and failed to ensure control — led to a fire: up to 8 years in prison and large fines'
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
          'PSP (public security police) must be notified at least 5 days in advance',
          'During período crítico, licences are generally not issued',
          'Wedding/party in August with fireworks — not allowed. In October after the end of período crítico — allowed with a licence',
          'Categories F3/F4 — only for licensed companies, not for private individuals',
          'Without a licence: €1,000-€3,000 + confiscation'
        ] },
        { kind: 'paragraph', text: 'Where to buy F1/F2: tobacconists, specialised shops, supermarkets before New Year and Carnival. Sparklers (estrelinhas) are allowed only indoors and with fire safety measures; outdoors during período crítico — not allowed.' }
      ]
    },
    {
      id: 'agricultural-burning',
      title: 'Burning agricultural waste (burning/controlled burning)',
      content: [
        { kind: 'paragraph', text: 'If you are a farmer or own a plot with vegetation, burning plant residues is common practice. The rules:' },
        { kind: 'checklist', items: [
          'Queima (burning in a pile): in rural areas, requires a licence from the Câmara Municipal all year round',
          'Queimada (controlled field burning): requires a licence and the presence of a fire brigade team',
          'During período crítico — almost always prohibited, except for emergency fire prevention operations',
          'Special programmes operate under the Sistema de Gestão Integrada de Fogos Rurais',
          'Application: online via autoriza.pt or at the Junta de Freguesia (parish/local council)',
          'Licence is issued within 24-48 hours, depending on complexity',
          'Cost: €0-€30 (often free for small quantities)',
          'For controlled burning, volunteer firefighters (bombeiros voluntários) must be present on site'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'In practice: what to do in summer',
      content: [
        { kind: 'checklist', items: [
          'Want a barbecue — go to a picnic park (Parque de Merendas). Carcavelos, Sintra and Costa da Caparica have excellent equipped areas',
          'Each municipality publishes a list of parks on the Câmara Municipal website',
          'In winter (October—June), a home barbecue on a terrace is usually permitted if safety measures are followed',
          'New Year/Festas Populares: fireworks are usually municipal only; private ones — only with a licence',
          'In the forest — never. Even a cigarette in Sintra park or in Pinhal de Leiria means a fine',
          'Saw someone else’s fire in a forest: 112 → firefighters. Do not go close',
          'Sapadores Florestais (forest fire prevention services) patrol dry areas in summer',
          'Always take glass bottles away from the beach and picnic'
        ] },
        { kind: 'paragraph', text: 'For residents of rural houses: every year by 30 April you must clear the firebreak strip (50 m around the house) — remove shrubs and dry grass. Failure to comply: €280-€10,000. This applies to all homeowners and tenants.' }
      ]
    }
  ],
  costs: [
    { label: 'Licence to burn plant waste', amountEURMin: 0, amountEURMax: 30 },
    { label: 'Fireworks licence (categories F1/F2)', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Fine for barbecue during período crítico', amountEURMin: 280, amountEURMax: 10000 },
    { label: 'Fine for fireworks without a licence', amountEURMin: 1000, amountEURMax: 3000 },
    { label: 'Fine for smoking in a forest', amountEURMin: 100, amountEURMax: 280 },
    { label: 'Fine for failing to clear the firebreak strip', amountEURMin: 280, amountEURMax: 10000 },
    { label: 'Compensation if you caused a fire', amountEURMin: 10000, amountEURMax: 1000000, note: 'Real cases — millions of €' }
  ],
  sources: [
    { title: 'ICNF — Defence of Forests against Fires', url: 'https://www.icnf.pt/florestas/dfci', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2006 (consolidated) — DFCI', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2006-34540575', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'autoriza.pt — online burning licences', url: 'https://autoriza.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — weather alert and fire risk', url: 'https://www.ipma.pt/pt/riscoincendio/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'GNR — National Forest Defence System', url: 'https://www.gnr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
