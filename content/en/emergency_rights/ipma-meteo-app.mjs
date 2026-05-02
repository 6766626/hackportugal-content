export default {
  editorialVoice: 'hackportugal',
  id: 'ipma-meteo-app',
  categoryId: 'emergency_rights',
  title: 'IPMA: weather, storms, sea, fires and seismic activity',
  tldr: 'IPMA is the official weather source in Portugal: avisos amarelo/laranja/vermelho by district, forecasts for rain, wind, heat and cold, agitação marítima for the coast, daily risco de incêndio rural and a sismos register. In 2026, this is the first website/app worth checking before journeys, surfing, fishing, hiking and during periods of heat. A red aviso vermelho means a dangerous situation: cancel non-essential travel and follow ANEPC/Câmara.',
  tags: ['ipma', 'weather', 'storms', 'fire', 'sismo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-ipma-is',
      title: 'What IPMA is and why you should trust it',
      content: [
        { kind: 'paragraph', text: 'Instituto Português do Mar e da Atmosfera (IPMA) is a state institute that provides official weather forecasts, marine forecasts, warnings about adverse events, daily rural fire risk and seismic monitoring for mainland Portugal, Madeira and Açores.' },
        { kind: 'paragraph', text: 'For an expat, it is a practical tool: to understand whether you can drive on the A1/A2 during a storm, go into the Serra da Estrela mountains, let children go to the beach, go out to sea, plan a move with a van or burn vegetation on your plot.' },
        { kind: 'checklist', items: [
          'Website: ipma.pt — official source with no registration',
          'Mobile app: “IPMA” in the App Store / Google Play',
          'Interface language is mainly PT; some pages are available in EN',
          'Check the district: Lisboa, Porto, Faro, Setúbal, Coimbra, Braga, etc.',
          'For the islands, check the separate Madeira and Açores zones',
          'In emergencies, cross-check IPMA with ANEPC and Câmara Municipal messages'
        ] }
      ]
    },
    {
      id: 'weather-warnings',
      title: 'Avisos amarelo/laranja/vermelho: how to read warnings',
      content: [
        { kind: 'paragraph', text: 'IPMA publishes meteorological warnings by district and by type of event: rain, wind, thunderstorm, snow, cold, heat, fog, agitação marítima. The colour is not a “mood forecast”, but a risk level for people, transport, homes and infrastructure.' },
        { kind: 'checklist', items: [
          'Amarelo — potentially dangerous: monitor the forecast, allow extra time',
          'Laranja — dangerous: transport disruption, fallen trees, flooding and road closures are possible',
          'Vermelho — very dangerous: avoid non-essential journeys and outdoor work',
          'Check not only the colour, but also the aviso validity hours: for example, 06:00–18:00',
          'Check the specific parameter: 90 km/h wind and 40 mm of rain in an hour are different risks',
          'An aviso may apply only to one district, while the neighbouring one has no warning',
          'In the mountains and by the ocean, actual weather may be harsher than in the city',
          'After vermelho/laranja, check messages from Civil Protection, schools and transport operators'
        ] },
        { kind: 'warning', text: 'Do not treat ordinary weather apps as your only source. Apple Weather, Google Weather and Windy are useful, but the official warning for Portugal is IPMA; in an emergency, instructions come from ANEPC/Câmara Municipal.' }
      ]
    },
    {
      id: 'sea-forecast',
      title: 'Marine forecasts: surfing, fishing, boats',
      content: [
        { kind: 'paragraph', text: 'The “Mar” section on IPMA shows agitação marítima, wind, swell, wave height, period, direction and forecasts by coastal zones. This matters not only for surfers: in winter on the west coast, waves and surf can be deadly even in sunny weather.' },
        { kind: 'checklist', items: [
          'Check “Previsão marítima” for your coastal zone, not just the city',
          'Altura significativa da onda is the average height of the larger waves; individual waves may be higher',
          'Período da onda: the more seconds, the more powerful the surf at the same height',
          'Vento: offshore/onshore changes conditions for surfing and small boats',
          'Aviso amarelo/laranja/vermelho for agitação marítima is a reason to reconsider going near cliffs, piers and beaches',
          'On the beach, obey bandeira vermelha: a red flag means bathing is prohibited',
          'For rock fishing, take account of marés, swell and slippery rocks; “one big wave” is a common cause of accidents',
          'For navigation, cross-check IPMA with Autoridade Marítima Nacional and local avisos'
        ] },
        { kind: 'warning', text: 'Nazaré, Costa Vicentina, Ericeira, Peniche, Cabo da Roca and the northern coast can be dangerous for walks near the water during an aviso for agitação marítima. Do not approach the edge of cliffs and breakwaters for a photo.' }
      ]
    },
    {
      id: 'fire-risk',
      title: 'Risco de incêndio rural and “red-flag” days 🔥',
      content: [
        { kind: 'paragraph', text: 'IPMA publishes perigo de incêndio rural by municipality every day. In daily life, this is the Portuguese “red-flag day”: hot, dry, windy, low humidity — a fire can start from a spark, barbecue, tool or car on dry grass.' },
        { kind: 'checklist', items: [
          'Risk classes: reduzido, moderado, elevado, muito elevado, máximo',
          'Check your concelho, not only the distrito: the risk can differ sharply',
          'During muito elevado/máximo, do not use fire outdoors',
          'Do not burn garden waste without authorisation and checking current restrictions',
          'Do not throw cigarette ends from the car; fines and criminal consequences are real',
          'Do not park on dry grass: a hot exhaust can set it alight',
          'If you live in a rural area, keep a cleared strip around the house and access for bombeiros',
          'If there is smoke or flame, call 112; do not write to the neighbours’ chat first'
        ] },
        { kind: 'warning', text: 'IPMA shows meteorological risk, but bans on queimadas/queimas, forestry work, access to areas and special measures may be introduced by Governo, ANEPC, ICNF or Câmara Municipal. Before any fire on your plot, check local rules.' }
      ]
    },
    {
      id: 'sismos',
      title: 'Sismos: where to check earthquakes',
      content: [
        { kind: 'paragraph', text: 'Portugal is in a seismically active zone: the mainland, Madeira and especially Açores regularly record tremors. IPMA maintains the official list of the latest sismos with magnitude, time, depth and epicentre.' },
        { kind: 'checklist', items: [
          'Open “Sismologia” → “Últimos sismos”',
          'Check magnitude, localização, profundidade and hora local',
          'Small events may be felt locally and do not mean there is damage',
          'After a strong shock, réplicas — aftershocks — are possible',
          'Do not use the lift immediately after a noticeable earthquake',
          'Check gas, electricity, cracks and contact with your family',
          'If the building is damaged, go to an open place and call 112',
          'For the official assessment of consequences, follow ANEPC and Câmara Municipal'
        ] },
        { kind: 'paragraph', text: 'If you felt a shock but it has not yet appeared on the map, wait a few minutes: automatic recording and event confirmation are not always immediate.' }
      ]
    },
    {
      id: 'daily-routine',
      title: 'Mini routine for every day',
      content: [
        { kind: 'paragraph', text: 'You do not need to live in forecasts. A quick IPMA check on risk days is enough: before a journey, hike, surf session, work on your plot, a move, a school trip or a flight from the islands.' },
        { kind: 'checklist', items: [
          'In the morning: open IPMA and select your distrito/concelho',
          'Check avisos for the next 24–48 hours',
          'If you are going to the ocean — open “Mar” and agitação marítima',
          'In summer and when it is windy — check perigo de incêndio rural',
          'With aviso laranja/vermelho — have a plan B and charge your phone',
          'Save 112, school contacts, landlord, condomínio and Câmara contacts',
          'For the home: remove items from the balcony before strong wind',
          'For the car: do not drive through flooded tunnels and low-lying areas'
        ] },
        { kind: 'warning', text: 'During aviso vermelho, do not argue with the weather. A cancelled journey is cheaper than an evacuation, a wrecked car or a fine for ignoring closed zones.' }
      ]
    }
  ],
  sources: [
    {
      title: 'IPMA — official portal for weather, sea, seismology and warnings',
      url: 'https://www.ipma.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — avisos meteorológicos by district',
      url: 'https://www.ipma.pt/pt/otempo/prev-sam/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — perigo de incêndio rural',
      url: 'https://www.ipma.pt/pt/riscoincendio/rcm.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'IPMA — sismologia and latest earthquakes',
      url: 'https://www.ipma.pt/pt/geofisica/sismicidade/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
