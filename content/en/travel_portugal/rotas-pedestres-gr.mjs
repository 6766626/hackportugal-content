export default {
  editorialVoice: 'hackportugal',
  id: 'rotas-pedestres-gr',
  categoryId: 'travel_portugal',
  title: 'Walking routes in Portugal: GR and PR',
  tldr: 'In Portugal, official walking routes are divided into GR — Grande Rota, long-distance routes usually from 30 km and often 100+ km, with red-and-white waymarking, and PR — Pequena Rota, local routes up to 30 km, often circular, with yellow-and-red waymarking. Caminho de Santiago Português: Lisboa–Santiago about 600 km, Porto–Santiago about 240 km. Check tracks through ICNF, Federação de Campismo e Montanhismo de Portugal and municipalities: fires, hunting, landslides and private sections really do close trails.',
  tags: ['trails', 'gr', 'pr', 'hiking', 'icnf'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-gr-pr',
      title: 'GR and PR: what the markings mean',
      content: [
        { kind: 'paragraph', text: 'The Portuguese walking route network uses the European waymarking logic, but in practice quality depends on the município, parque natural and local association. Before a hike, check not only Google Maps, but the official PDF/GPX for the track.' },
        { kind: 'checklist', items: [
          'GR — Grande Rota: a long-distance route, usually over 30 km; many GR routes run for 100+ km and are split into stages.',
          'GR waymarking: red + white horizontal stripes.',
          'PR — Pequena Rota: a short local route, usually up to 30 km; often circular and designed for 2–8 hours.',
          'PR waymarking: yellow + red horizontal stripes.',
          'Correct direction: two parallel stripes; turn: angled mark; wrong way: cross in the route colours.',
          'The number looks like PR1 LSB, PR3 VCT or GR22: letters after the number often indicate the município or region.',
          'Caminho de Santiago is usually marked with yellow arrows and a shell, not only GR/PR waymarking.',
          'The same section may have several markings: PR, GR, Ecovia, Caminho de Santiago or Rota Vicentina.'
        ] }
      ]
    },
    {
      id: 'where-to-find-routes',
      title: 'Where to find official tracks 🗺️',
      content: [
        { kind: 'paragraph', text: 'The reliable approach: first an official source, then a navigation app. Portugal has many beautiful GPX tracks on Wikiloc/Komoot, but some of them go through private gates, old bridges, seasonal streams or post-fire areas.' },
        { kind: 'checklist', items: [
          'ICNF — routes in parques naturais, reservas naturais and áreas protegidas; look for maps, PDFs and access restrictions.',
          'FCMP — Federação de Campismo e Montanhismo de Portugal, the federation connected with the registration and homologation of walking routes.',
          'Câmara Municipal websites: often the most up-to-date PDFs for PR routes, parking, toilets and closed sections.',
          'VisitPortugal and regional tourism websites: useful for route ideas, but check the update date.',
          'AllTrails, Wikiloc, Komoot, Organic Maps — useful for navigation, but they are not legal confirmation of open access.',
          'For the islands, check the separate Madeira and Açores portals: they often have live closures due to landslides and weather.'
        ] },
        { kind: 'warning', text: 'If the official PDF is several years old, while recent app reviews mention overgrowth, a broken bridge or a cão de guarda on a farm, trust the current conditions. Waymarking on the ground matters more than an old track.' }
      ]
    },
    {
      id: 'caminho-santiago',
      title: 'Caminho de Santiago Português',
      content: [
        { kind: 'paragraph', text: 'The Portuguese Way of Saint James is not one route, but a network of options. The most popular are Caminho Central Português and Caminho da Costa. For expats this is a convenient format: you can walk separate stages at weekends without taking a month off work.' },
        { kind: 'checklist', items: [
          'Lisboa–Santiago de Compostela: about 600 km, usually 25–30 walking days.',
          'Porto–Santiago de Compostela on the central route: about 240 km, usually 10–12 walking days.',
          'Porto–Santiago on the coastal option: approximately 260–280 km depending on detours.',
          'Credencial do Peregrino is bought in advance at a cathedral, pilgrims’ association or albergue; carimbos are placed in it.',
          'For the Compostela, you must walk at least the last 100 km or cycle 200 km and prove it with stamps.',
          'Albergues de peregrinos are cheaper than hotels, but in summer and during Semana Santa beds run out quickly.',
          'On the Porto–Valença/Tui section, infrastructure is strong: cafés, supermercados, farmácias and trains nearby for almost the entire route.'
        ] },
        { kind: 'paragraph', text: 'If you live in Portugal, the practical starting point is not Lisboa, but Porto, Barcelos, Ponte de Lima or Valença. This makes it easier to test shoes, backpack and pace without complicated logistics.' }
      ]
    },
    {
      id: 'safety-season',
      title: 'Season, safety and restrictions',
      content: [
        { kind: 'paragraph', text: 'Portugal looks compact, but trail conditions vary sharply: damp Serra do Gerês, dry Alentejo, windy Costa Vicentina, rocky Serra da Estrela, the laurel forests of Madeira. One set of clothing does not work for the whole country.' },
        { kind: 'checklist', items: [
          'Best months on the mainland: March–June and September–November; in summer many inland routes are too hot.',
          'July–September: check the risco de incêndio rural; at high risk, forest areas and trails may be closed.',
          'In winter in Serra da Estrela, snow, ice, fog and closed roads are possible; winter equipment is needed.',
          'On Madeira and Açores there are frequent closures due to landslides, heavy rain and damaged levadas.',
          'Take at least 1.5–2 l of water per person; in Alentejo and Algarve in summer, take more.',
          'Do not rely on springs: many bicas are not checked as água potável.',
          'Dogs on farms are a real problem; do not enter through closed gates and do not take shortcuts through quintas.',
          'The emergency number is 112; in the mountains, download an offline map in advance and tell close contacts your route.'
        ] },
        { kind: 'warning', text: 'During the hunting season, usually autumn–winter, batidas may take place on rural PR/GR routes. If you see caça signs, beaters or hear shots — turn back or ask locals about a safe detour.' }
      ]
    },
    {
      id: 'how-to-plan',
      title: 'How to plan a hike without surprises',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-route', title: '1. Choose a route by level, not by photo', content: [
            { kind: 'paragraph', text: 'Check the distance, elevation gain, surface type and escape points. 14 km on a flat passadiço and 14 km over stones in Gerês are different hikes.' }
          ] },
          { id: 'download-track', title: '2. Download the GPX and PDF', content: [
            { kind: 'paragraph', text: 'Save the track offline on your phone and separately keep the PDF with the description. In valleys and on the coast there is often signal, but in parques naturais it is unstable.' }
          ] },
          { id: 'check-transport', title: '3. Check transport', content: [
            { kind: 'paragraph', text: 'PR routes are often circular and convenient by car. GR routes are linear: check Comboios de Portugal, Rede Expressos, local buses or taxis to the start/finish point in advance.' }
          ] },
          { id: 'start-early', title: '4. Start early', content: [
            { kind: 'paragraph', text: 'In Portugal, heat and sun matter more than mileage. In summer, a normal strategy is to start at 7:00–8:00 and finish before the daytime peak.' }
          ] }
        ] }
      ]
    },
    {
      id: 'gear-etiquette',
      title: 'Equipment and etiquette',
      content: [
        { kind: 'checklist', items: [
          'Footwear: trekking trainers with good soles; for rock and wet levadas, city trainers are not ideal.',
          'Navigation: offline map, GPX, power bank; a paper map is useful in national parks.',
          'Sun: SPF 30–50 cream, cap, sunglasses; even in April you can burn in 2 hours.',
          'Water and food: not all aldeias have an open café, especially on Sundays and in low season.',
          'Clothing: a wind and rain layer; on the coast the weather changes faster than in the city.',
          'Take your rubbish with you; there are usually no bins on the trail.',
          'Do not pick plants and do not leave the trail in dune systems, zonas protegidas and áreas de nidificação.',
          'Close gates behind you: many routes pass through pastures.',
          'Be careful with drones: in protected areas and near people/beaches, ANAC restrictions and local area rules apply.'
        ] },
        { kind: 'paragraph', text: 'For a one-day PR, the budget is almost zero: transport, food and parking. For Caminho de Santiago, budget €25–60 per day with albergue/café and €70–120 per day with guesthouses and restaurants.' }
      ]
    }
  ],
  costs: [
    { label: 'One-day PR without car hire', amountEURMin: 5, amountEURMax: 25, note: 'Train/bus, coffee, water, snack; if the start is near home — almost free.' },
    { label: 'Night in an albergue on the Caminho', amountEURMin: 8, amountEURMax: 20, note: 'Municipal and pilgrim albergues are usually cheaper than private ones; prices depend on the season.' },
    { label: 'Day on the Caminho de Santiago', amountEURMin: 25, amountEURMax: 60, note: 'Budget mode: albergue, menu do dia, supermercado, laundry when needed.' },
    { label: 'Basic beginner equipment', amountEURMin: 80, amountEURMax: 250, note: 'Footwear, 20–30 l backpack, waterproof jacket, bottles, torch, first-aid kit; without a tent and sleeping bag.' }
  ],
  sources: [
    { title: 'ICNF — natural areas, routes and access restrictions', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Federação de Campismo e Montanhismo de Portugal — walking and routes', url: 'https://www.fcmp.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'VisitPortugal — Caminhos de Santiago in Portugal', url: 'https://www.visitportugal.com/pt-pt/content/caminhos-de-santiago', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANAC — rules for using drones in Portugal', url: 'https://www.anac.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
