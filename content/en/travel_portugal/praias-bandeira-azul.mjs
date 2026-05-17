export default {
  editorialVoice: 'hackportugal',
  id: 'praias-bandeira-azul',
  categoryId: 'travel_portugal',
  title: 'Bandeira Azul beaches and beach safety in Portugal',
  tldr: 'Bandeira Azul is not “the most beautiful beach”, but an annual certification of water quality, safety, ecology and services. The 2026 list should be checked on bandeiraazul.org: as of 03/05/2026 the seasonal list may be updated before the start of the época balnear. Lifeguards usually work during the official bathing season, most often from May/June to September, but dates vary by município. The main rules: green flag — you may bathe, yellow — do not swim, red — do not enter the water; check IPMA for water temperature, UV and sea conditions.',
  tags: ['beaches', 'bandeiraazul', 'safety', 'ipma'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-blue-flag-means',
      title: 'What Bandeira Azul really means',
      content: [
        { kind: 'paragraph', text: 'Bandeira Azul is the international Blue Flag programme, run in Portugal by ABAAE/FEE Portugal. The flag is awarded for one season to a specific beach, marina or embarcação ecoturística. It is not a lifetime status and not a guarantee of “perfect sea every day”.' },
        { kind: 'checklist', items: [
          'Bathing water quality meets the standards and is monitored regularly.',
          'The beach provides information on water quality, rules of behaviour and ecology.',
          'There is basic sanitary infrastructure: WC or access to sanitary facilities, cleaning and waste management.',
          'Safety is provided during the season: nadadores-salvadores, a lifeguard station or another approved supervision scheme.',
          'There are rules for bathing, surfing, boat and water-sports zones.',
          'The beach must comply with environmental criteria: dunes, protected areas, a ban on littering and damage to ecosystems.',
          'The flag may be temporarily removed if water quality deteriorates, there are no lifeguards or criteria are breached.'
        ] },
        { kind: 'warning', text: 'Bandeira Azul does not mean that the sea is warm, wave-free, current-free or safe for children. In the Atlantic, even on a “blue” beach there may be rip currents, a sudden drop-off, cold water of 14–18 °C and strong surf.' }
      ]
    },
    {
      id: 'find-2026-list',
      title: 'Where to check the 2026 beach list',
      content: [
        { kind: 'paragraph', text: 'The official list is published on bandeiraazul.org in the Praias / Galardoados section. Awards are usually announced before the start of the summer season; the status applies only to the current época balnear. As of 03/05/2026, make sure you check the year “2026”, not a saved page from the previous season.' },
        { kind: 'checklist', items: [
          'Open bandeiraazul.org.',
          'Select “Praias” or the Galardoados map.',
          'Check the year filter: 2026.',
          'Look at the município and the exact beach name: similar names in neighbouring concelhos are often confused.',
          'For a trip with children, check not only Bandeira Azul, but also Praia Acessível, the availability of WC, parking and lifeguards.',
          'Before setting off, check AMN/Autoridade Marítima Nacional for the official época balnear and supervision on the specific beach.',
          'On the day of the trip, check IPMA: water temperature, UV, wind, waves and coastal warnings.'
        ] },
        { kind: 'paragraph', text: 'Practical filter: for families — beaches with Bandeira Azul + Praia Acessível + lifeguards on the current day. For surfing — conversely, look for areas with suitable surf conditions and do not enter the bathing zone between the flags if it is separated.' }
      ]
    },
    {
      id: 'lifeguards-season',
      title: 'Lifeguards and época balnear: May–September is not the same everywhere',
      content: [
        { kind: 'paragraph', text: 'In Portugal, lifeguards do not work “all year round”, but during the official bathing season — época balnear. Dates are approved by beaches and municípios. On popular beaches in the Algarve and Cascais, supervision often starts in May or early June and runs until September; some beaches may have an extended season until October, while small beaches may have it only in July–August.' },
        { kind: 'checklist', items: [
          'Look at the entrance for a sign with the época balnear dates and horário de vigilância.',
          'A typical supervision schedule is during daytime hours, often around 09:00–19:00, but the exact time is set by the concessionário/município.',
          'If the lifeguard has left, the beach may be marked as temporarily unsupervised — do not consider it safe just because there are people in the water.',
          'Bathe between the yellow-red flags or in the marked zone, if one is in place.',
          'Do not move parasols, boards and towels into the lifeguards’ service corridor.',
          'With children, stay near the lifeguard station, not at the far end of the beach.',
          'If in doubt, ask the nadador-salvador: currents, holes and surf often change during the day.'
        ] },
        { kind: 'warning', text: 'Outside the época balnear, many beaches have no lifeguards, even if the weather is good and there are many people. On wild beaches in Costa Vicentina, Sintra, Ericeira and the western Algarve, the risk of strong currents is higher than it appears from photos.' }
      ]
    },
    {
      id: 'flag-system',
      title: 'Beach flags: green, yellow, red and others',
      content: [
        { kind: 'paragraph', text: 'The AMN flag system is more important than any beach ranking. Look at the flag by the lifeguard station every time: it may be green in the morning, then yellow or red after the wind strengthens.' },
        { kind: 'checklist', items: [
          'Green flag — bathing is permitted, but basic caution still applies: waves and currents are possible.',
          'Yellow flag — you may enter the water only at the edge; swimming and going into deeper water are not allowed.',
          'Red flag — entering the water is prohibited. Not “up to the knees”, not “for a minute”, not with a child in your arms.',
          'Black-and-white chequered flag — the beach is temporarily without lifeguard supervision or the area is unsupervised; bathing is at your own risk.',
          'Purple flag — dangerous marine organisms, most often alforrecas/jellyfish; follow the lifeguards’ instructions.',
          'Yellow-red flags may mark the boundaries of the area controlled by lifeguards.',
          'There may be separate corridors for surfing, SUP, kayaks and boats; do not cross the bathing zone on a board.'
        ] },
        { kind: 'warning', text: 'Ignoring a red flag is not a “local tradition”, but a dangerous breach of the instructions of the maritime authority and lifeguards. Polícia Marítima may intervene; fines depend on the nature of the breach and the circumstances.' }
      ]
    },
    {
      id: 'ipma-and-ocean-risks',
      title: 'IPMA: water temperature, UV and warnings',
      content: [
        { kind: 'paragraph', text: 'IPMA provides beach forecasts during the season: weather, wind, sea conditions, UV and temperatura da água. For the Atlantic, water temperature in Portugal is often lower than expected: on the west coast in summer, 15–18 °C is not uncommon because of upwelling; the Algarve is usually warmer, but it is still not the Mediterranean.' },
        { kind: 'checklist', items: [
          'Check the temperatura da água: at 14–16 °C, hypothermia sets in quickly, especially in children.',
          'Look at the UV index: in summer in Portugal, UV is often high or very high; SPF 50 sunscreen, sunglasses and shade are needed even when it is windy.',
          'Check IPMA avisos meteorológicos: agitação marítima, vento, calor, chuva and trovoada.',
          'If there is a warning for sea conditions, do not go near cliffs and breakwaters: a wave can wash over them without a “visible storm”.',
          'After heavy rain, water quality at urban beaches and river mouths may temporarily deteriorate; check notices on the beach.',
          'Do not jump from cliffs and piers: depth, rocks and currents change, and lifeguards cannot always see such areas.',
          'In a rip current, do not swim against the current towards the shore; swim parallel to the shore, signal with your hand and conserve energy.'
        ] },
        { kind: 'paragraph', text: 'For parents: armbands and rubber rings do not replace supervision. Wind quickly carries inflatable mattresses and SUP away from the shore; in an offshore wind it is better not to use them at all.' }
      ]
    },
    {
      id: 'expat-practical-check',
      title: 'Quick checklist before the trip',
      content: [
        { kind: 'checklist', items: [
          'Check the beach on bandeiraazul.org: whether it has Bandeira Azul specifically in the 2026 season.',
          'Check AMN or the sign on the beach: época balnear dates and lifeguard hours.',
          'Check IPMA: water temperature, UV, wind, waves and avisos.',
          'Take water, SPF 50, a hat, cash/MB WAY for parking or the concessionário.',
          'For children, choose a beach with WC, lifeguards and a short walk from the parking area.',
          'Do not leave belongings visible in the car: thefts from vehicles are common near beaches in summer.',
          'Respect the dunes: walk on passadiços, do not place a parasol or towels in protected areas.',
          'Check dogs separately: on many concessionadas praias in summer, animals are prohibited, except cães de assistência.'
        ] },
        { kind: 'warning', text: 'If there is no flag, lifeguard or information board on the beach, treat it as unguarded. Beautiful “secret” beaches often have worse access for ambulances and mobile signal.' }
      ]
    }
  ],
  costs: [
    { label: 'Entry to a regular beach', amountEUR: 0, note: 'Beaches are public; you may be asked to pay for parking, a sun lounger, a parasol or a concessionário.' },
    { label: 'Parking near popular beaches', amountEURMin: 1, amountEURMax: 15, note: 'Depends on the município, season and time; in the Algarve, Cascais and Costa da Caparica it is more expensive in summer.' },
    { label: 'Sun lounger and parasol', amountEURMin: 10, amountEURMax: 30, note: 'Guide price for a set/day on a concessionada praia; prices are not regulated uniformly.' }
  ],
  sources: [
    { title: 'Official Bandeira Azul Portugal programme — beach list and criteria', url: 'https://www.bandeiraazul.org', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Marítima Nacional — beach safety and sinais de praia', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IPMA — forecast for praias, water temperature and weather warnings', url: 'https://www.ipma.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
