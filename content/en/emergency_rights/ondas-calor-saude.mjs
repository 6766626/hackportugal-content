export default {
  editorialVoice: 'hackportugal',
  id: 'ondas-calor-saude',
  categoryId: 'emergency_rights',
  title: 'Heat and ondas de calor (heatwaves): warnings, health, work',
  tldr: 'Heat in Portugal kills more people than wildfires: in just two heatwaves in summer 2026 the DGS counted ~123 excess deaths. Follow the IPMA avisos (weather warnings) — each district has its own thresholds: in Lisbon "red" means above 40 °C, in Guarda already above 36 °C. Since 2026 the summer "Módulo Verão" has been replaced by a single Plano Nacional de Preparação e Resposta Sazonal em Saúde (national seasonal health plan, 4 levels: verde/amarelo/laranja/vermelho). DGS survival basics: at least 1.5 L of water a day (without waiting to feel thirsty), stay out of the sun between 11:00 and 17:00, light loose clothing, cool rooms. Golpe de calor (heatstroke: body temperature ~40 °C, hot dry skin, confusion) means calling 112 immediately; when in doubt — SNS 24: 808 24 24 24. There is NO fixed "maximum temperature for work" in the law, but the employer must provide water, breaks and shade (ACT — Autoridade para as Condições do Trabalho). Leaving a child or an animal in a closed car in the heat is a criminal offence.',
  tags: ['onda de calor', 'heat', 'verão', 'health'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'New guide: heatwaves — IPMA aviso thresholds by district, the new unified Plano Sazonal em Saúde 2026–2027, the ÍCARO index, DGS rules, heatstroke warning signs (112 vs SNS 24), employer duties in the heat (ACT), children/animals in cars.',
  steps: [
    {
      id: 'warnings',
      title: 'How to find out about heat in advance',
      content: [
        { kind: 'paragraph', text: 'Heat warnings (aviso amarelo/laranja/vermelho for "tempo quente" — hot weather) are issued by IPMA for each district separately, when the forecast maximum temperature stays above the threshold for at least ~48 hours. Thresholds depend on the district: residents of the south are more "used to" heat, so the red level kicks in later there.' },
        { kind: 'checklist', items: [
          '🌡️ Examples of red aviso thresholds: Lisbon — above 40 °C, Porto — above 38 °C, Santarém/Évora/Beja — above 43 °C, Faro — above 41 °C, Guarda — already above 36 °C.',
          '📱 IPMA apps: Meteo@IPMA (forecast + warnings) and Avisos@IPMA (avisos only, 72-hour horizon) — free, iOS/Android.',
          '🟢🟡🟠🔴 Since 2026 the health system operates under a single Plano Nacional de Preparação e Resposta Sazonal em Saúde 2026–2027 (in force from 1 May 2026 to 30 April 2027, replacing the old summer "Módulo Verão"): 4 levels — verde (preparation), amarelo (reinforced surveillance), laranja (reinforced response), vermelho (emergency).',
          '📊 The ÍCARO index (INSA + IPMA, May–September) estimates the risk of excess mortality from the forecast heat — the authorities use it to trigger measures.',
          '📩 During extreme heat, ANEPC sends AvisoPROCIV SMS alerts — no subscription needed (see the separate guide).',
          'During a heatwave the government can declare a Situação de Alerta (alert situation) with bans (access to forests, fire, machinery) — as on 3–9 July 2026.'
        ] }
      ]
    },
    {
      id: 'health-rules',
      title: 'Heat survival basics (DGS rules)',
      content: [
        { kind: 'checklist', items: [
          '💧 Drink at least 1.5 L of water a day, WITHOUT waiting to feel thirsty; avoid alcohol and sugary drinks.',
          '🕚 Stay out of the sun between 11:00 and 17:00; sport and heavy chores — early morning/evening.',
          '👕 Light, loose, light-coloured clothing; a hat; sunscreen SPF 30+.',
          '🏠 During the day keep windows and blinds closed on the sunny side; air the home at night and early in the morning. Spend at least 2–3 hours a day in a cool/air-conditioned place.',
          '👶👵 Vulnerable groups according to the DGS: children, the elderly, the chronically ill, pregnant women, people with reduced mobility, outdoor workers, people living alone — check on such neighbours and relatives every day.',
          '💊 Medicines (Infarmed): "2–8 °C" products go in the fridge and in a cooler bag when travelling (do not freeze); "up to 25/30 °C" ones can stay in their usual place; do NOT interrupt treatment without a doctor — when in doubt, SNS 24.',
          '🚗 NEVER leave children or animals in a parked car, even "for 5 minutes": the interior heats up by 10+ °C in 10 minutes.'
        ] },
        { kind: 'warning', text: 'Many municipalities open free air-conditioned shelters during heatwaves (libraries, swimming pools, public buildings with extended hours) — the national plan requires designating "Locais de Abrigo Temporários" (temporary shelter locations). Ask at your câmara municipal or junta de freguesia where to go to cool down.' }
      ]
    },
    {
      id: 'heatstroke',
      title: 'Heat exhaustion vs heatstroke: when to call 112',
      content: [
        { kind: 'paragraph', text: 'Heat exhaustion develops gradually: weakness, dizziness, headache, nausea, heavy sweating. Golpe de calor (heatstroke) is a failure of the body\'s temperature regulation, is deadly dangerous and requires calling 112 immediately.' },
        { kind: 'checklist', items: [
          '⚠️ Signs of exhaustion: weakness, headache, dizziness, muscle cramps, moist skin. What to do: move to shade/somewhere cool, water in small sips, cooling with a wet cloth, rest.',
          '🚨 Signs of golpe de calor: body temperature around 40 °C or higher, HOT DRY skin (sweating has stopped), severe confusion/aggression/loss of consciousness, rapid pulse.',
          '📞 At the signs of heatstroke — call 112 IMMEDIATELY. While help is on the way: move to shade, remove excess clothing, cool actively (wet cloths on the neck/armpits/groin, fanning); if unconscious — on their side, give nothing to drink.',
          '☎️ Non-emergency doubts (how you feel, medicines, what to do with a chronically ill person) — SNS 24: 808 24 24 24, around the clock.',
          'The state explicitly names the SNS 24 line as the first point of contact during heat — do not go to urgências (A&E) without real need at the peak of a wave.'
        ] }
      ]
    },
    {
      id: 'work-heat',
      title: 'Working in the heat: what the law says',
      content: [
        { kind: 'paragraph', text: 'There is NO fixed temperature in Portuguese law at which you "may stop working" — neither for outdoor work nor in general. The law requires that conditions (temperature, humidity) be "adequate for the human body" and that the employer protect workers from excessive sun. The only numeric reference is DL 243/86 for offices/retail/services: indoors "where possible" 18–22 °C (up to 25 °C in exceptional cases) — that is a reference value, not a stop-work threshold.' },
        { kind: 'checklist', items: [
          'The employer must (per official ACT materials): assess heat risks, provide fresh drinking water (drink every 15–20 minutes, water at 10–15 °C), regular breaks, rest areas in the shade/with air conditioning.',
          'Heavy work scheduled for the coolest hours; rotation; acclimatisation of new workers over 7–10 days; training to recognise the symptoms; a plan for extreme heat.',
          'If you work outdoors (construction, agriculture, delivery) — you are in a DGS risk group: demand water and breaks, this is not a "perk" but the employer\'s duty.',
          'Employer ignoring the heat? Document it (photos, messages) and complain to ACT — Autoridade para as Condições do Trabalho (the labour conditions authority, act.gov.pt, online complaints book).',
          'Remote work/flexible hours at the peak of a wave — the employer has no legal obligation, but ACT recommends flexibility; agree on it in writing.'
        ] }
      ]
    },
    {
      id: 'car-criminal',
      title: 'Children and animals in a car — these are criminal offences',
      content: [
        { kind: 'checklist', items: [
          '👶 Leaving a child in danger in a closed car is the crime of "exposição ou abandono" (exposure or abandonment, art. 138 of the Código Penal — Criminal Code): 1–5 years in prison, 2–5 years for parents; up to 8 years if serious harm results, up to 10 years in case of death.',
          '🐕 An animal in a scorching car can be classified as animal cruelty (art. 387 of the CP): up to 1 year in prison or a fine; up to 2 years if the animal dies or is maimed.',
          '🚨 If you see a child or an animal locked in a car in the heat: call 112 (and the PSP/GNR). Breaking the window yourself — only when there is a clear immediate danger to life and help will not arrive in time.',
          '☀️ Park your own car in the shade, use a windscreen sunshade; before seating children — air out and cool the interior.',
          'Pets in the heat: walks early in the morning/in the evening (daytime asphalt burns paws — test it with your hand), water always available, grooming/shade.'
        ] },
        { kind: 'paragraph', text: 'Related guides: "IPMA: official weather and avisos", "AvisoPROCIV: SMS alerts", "Beach safety" and "Wildfire nearby: what to do" — heat and wildfires in Portugal go hand in hand.' }
      ]
    }
  ],
  sources: [
    { title: 'IPMA — critérios de emissão de avisos meteorológicos (tempo quente, thresholds by district)', url: 'https://www.ipma.pt/pt/enciclopedia/otempo/sam/index.html?page=criterios.xml', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'SNS — Plano Nacional de Preparação e Resposta Sazonal em Saúde 2026–2027', url: 'https://www.sns.min-saude.pt/wp-content/uploads/2026/04/Plano-Sazonal-26_27.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'INSA — sistema de monitorização e vigilância ÍCARO', url: 'https://www.insa.min-saude.pt/conheca-o-sistema-de-monitorizacao-e-vigilancia-icaro/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ACT — exposição a condições climáticas extremas (calor): deveres do empregador', url: 'https://portal.act.gov.pt/Pages/exposicao-condicoes-climaticas-extremas-calor.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'Infarmed — conservação dos medicamentos em caso de onda de calor', url: 'https://www.infarmed.pt/web/infarmed/profissionais-de-saude/prescricao-e-dispensa/medicamentos_e_calor/conservacao_medicamentos_calor', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'INEM — gestos que salvam: cuidados a ter com o calor', url: 'https://www.inem.pt/2026/05/27/gestos-que-salvam-cuidados-a-ter-com-o-calor-5/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
