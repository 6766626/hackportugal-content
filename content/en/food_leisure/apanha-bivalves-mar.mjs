export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Shellfish gathering (apanha de bivalves) — licence and sanitary zones',
  tldr: 'Gathering shellfish on the beach and in the coastal zone (ameijoa, berbigão, conquilha, longueirão) is a separate category of Pesca Lúdica (recreational fishing) from DGRM (General Directorate of Maritime Resources). Licence "Apanha Apeada": ~€10 for 3 days, ~€25 per year. Daily limit: 1 kg in shell per person. You may gather ONLY in sanitary classified zones (zonas classificadas): IPMA (Portuguese Institute for the Sea and Atmosphere) publishes the A/B/C list every month. Gathering in unclassified zones is illegal OR requires mandatory heat treatment (even if the species is permitted). Prohibited: crowbar, any mechanical tools, and collecting shells below the minimum size (ameijoa 25 mm, berbigão 25 mm, longueirão 100 mm). The Pesca Lúdica à linha rod-fishing licence does NOT cover shellfish gathering — a separate licence is required.',
  tags: ['bivalves', 'shellfishing', 'gathering', 'clams', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'What is apanha de bivalves and why a separate licence 🐚',
      content: [
        { kind: 'paragraph', text: 'Apanha de bivalves is recreational gathering of bivalve molluscs and other edible marine organisms in the coastal zone: on sandy beaches at low tide, on rocks, in estuaries. In Portugal this is a type of Pesca Lúdica (recreational fishing), legally regulated by DGRM (General Directorate of Maritime Resources), with sanitary control by IPMA (Portuguese Institute for the Sea and Atmosphere).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Other molluscs: pé-de-burrinho, lapa (limpet), mexilhão (mussels) on rocks',
          'Crustaceans: caranguejo, camarão, percebes (goose barnacles) — partly fall under this',
          'Echinoderms: ouriço-do-mar (sea urchin) — specifically regulated',
          'NOT included: rod fishing (requires Pesca Lúdica à linha), pulling an octopus out of its den by hand (banned since 2017), lobsters (professional harvest only)'
        ] },
        { kind: 'warning', text: 'The Pesca Lúdica à linha (rod) licence does NOT apply to bivalves. And vice versa. Many think “I have a licence”, go to dig ameijoa in the Algarve and get a €250–€500 fine.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Sanitary zones — the most important thing',
      content: [
        { kind: 'paragraph', text: 'This is a health matter. Bivalve molluscs filter water and accumulate toxins (biotoxins from algae — “red tides”), bacteria (E. coli, Salmonella), heavy metals. IPMA publishes an updated map every month: which zones are allowed, for which species, and in what form they can be consumed.' },
        { kind: 'checklist', items: [
          'Class A (pick and eat): rare; for example, ameijoa from Ria Formosa in good months',
          'Class B (you may gather, but heat treatment is mandatory): most zones of Portugal. Boil for at least 5 minutes or keep for 2–3 days in clean saltwater',
          'Class C (industrial depuration required): unavailable for recreational fishers',
          'PROIBIDO (prohibited): collection and consumption completely banned, usually due to biotoxin peaks',
          'Unclassified zone (zona não classificada): collection and consumption prohibited — no sanitary control'
        ] },
        { kind: 'paragraph', text: 'IPMA updates the map weekly at ipma.pt → Mar e Pesca → Bivalves. There is also an IPMA app for iOS and Android where you can quickly check a zone by coordinates.' },
        { kind: 'warning', text: 'Gathering in a PROIBIDO zone even in small quantities = up to €1500 fine + risk of poisoning. Biotoxins are not destroyed by boiling! Peaks — March–May and September–October after spring/autumn algal “blooms”.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Getting the Apanha Apeada licence',
      content: [
        { kind: 'paragraph', text: 'Apply at portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Apanha Apeada. Sign in with Chave Móvel Digital (CMD; mobile digital signature) or Cartão de Cidadão (citizen card).' },
        { kind: 'checklist', items: [
          '3 days: ~€10',
          '1 month: ~€15',
          '1 year: ~€25',
          '3 years: ~€60',
          'The licence is personal and non-transferable'
        ] },
        { kind: 'paragraph', text: 'The “à linha apeada + apanha” combo is sometimes better value if you both fish and gather shellfish.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Rules: tools, sizes, limits',
      content: [
        { kind: 'paragraph', text: 'Minimum sizes — critical to follow:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa and ameijoa-japonesa: 25 mm shell diameter',
          'Berbigão: 25 mm',
          'Longueirão / navalha: 100 mm length',
          'Mexilhão (mussels): 50 mm',
          'Lapa (limpet): 30 mm',
          'Flat oyster (ostra plana): 60 mm; Portuguese: 80 mm',
          'Polvo (octopus): 750 g (but pulling one out of its den by hand has been banned since 2017)',
          'Percebes: 25 mm at the attachment base'
        ] },
        { kind: 'paragraph', text: 'Daily limit:' },
        { kind: 'checklist', items: [
          'All bivalves combined: 1 kg in shell per person per day',
          'Percebes: 0.5 kg total (specially protected species!)',
          'Mexilhão: 1 kg',
          'Polvo: up to 5 kg (hard to reach, but there is a rule)'
        ] },
        { kind: 'paragraph', text: 'Permitted and prohibited tools:' },
        { kind: 'checklist', items: [
          '✅ Hand picking only (fingers, a thin stick)',
          '✅ Sieve/riddle for measuring size and sifting sand',
          '✅ Sacha (mini-rake) up to 30 cm wide and teeth max 5 cm',
          '✅ Wooden knife for percebes',
          '❌ Any shovel with a handle',
          '❌ Mantas/ras (types of nets)',
          '❌ Motor pumps for extracting water or sand',
          '❌ Hydraulic injection (banned everywhere since 2014)',
          '❌ Electroshock devices'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Where and when to gather — best spots',
      content: [
        { kind: 'paragraph', text: 'The main rule: check the current IPMA map for the current month before you go. Zone statuses change.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): the main “factory” of ameijoa in Portugal. Olhão, Tavira, Faro. Often class A or B.',
          'Ria de Aveiro: berbigão and ameijoa. Season — winter and spring.',
          'Ria de Alvor: mixed bivalves.',
          'Estuário do Sado (Setúbal): ameijoa and berbigão. Some areas are in a nature reserve (Reserva Natural) with additional rules.',
          'Lagoa de Albufeira: ameijoa, sometimes class A.',
          'Ribeira do Lavre, little channels of Ria Formosa: longueirão — classic.',
          'Costa Vicentina: percebes on rocks (VERY dangerous for beginners, there are fatalities every year).',
          'Berlengas: EVERYTHING FORBIDDEN — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'Best time is low tide. Tide tables (calendário de marés): ipma.pt or the Tides Near Me app. 2 hours before peak low tide and 1 hour after — optimal.' },
        { kind: 'warning', text: 'Do not overstay the low tide. The tide advances quickly in Ria Formosa and estuaries — every year there are drownings of lost gatherers. Never go out alone. A charged phone is essential.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'How to treat what you gathered',
      content: [
        { kind: 'paragraph', text: 'For class B (most zones) treatment before eating is mandatory.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Removing sand',
            content: [
              { kind: 'checklist', items: [
                'Soak in salted water (35 g salt per 1 L) at “sea” temperature 12–18 °C',
                'At least 3–4 hours, preferably overnight',
                'Change the water every 2–3 hours: ameijoa actively “spits out” sand',
                'Add cornmeal — they purge faster'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Heat treatment',
            content: [
              { kind: 'checklist', items: [
                'For class B it is mandatory: boil for at least 5 minutes at ~90 °C or fry for at least 10 minutes',
                'Put them into already boiling water or onto a well-heated pan',
                'Shells opened — done; did not open — discard, do not eat',
                'Classic: Ameijoas à Bulhão Pato — white wine, garlic, coriander',
                'Carne de porco com ameijoas — Alentejo classic'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'NEVER eat them raw unless the zone is class A. Biotoxins (PSP, ASP, DSP) are not destroyed by cooking; heat treatment kills bacteria but not toxins. If there is a toxin peak now, even cooked shellfish may be dangerous. Always check with IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who enforces and what fines',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima (Maritime Police) — on beaches and in estuaries',
          'GNR-SEPNA (National Republican Guard, environmental protection service) — in natural parks',
          'Capitania (Harbour Master’s Office) — in ports',
          'ASAE (Inspectorate of Economic and Food Safety) checks restaurants and vendors for the source of bivalves'
        ] },
        { kind: 'checklist', items: [
          'Without a licence: €100–€500 + confiscation of catch and tools',
          'Gathering in a PROIBIDO zone: €250–€1500',
          'Below minimum size: €100–€300 per infringement',
          'Exceeding the daily limit: €100–€500',
          'Prohibited tools (pump, shovel): up to €1500',
          'Attempting to sell what you gathered: €500–€3000 + criminal prosecution on repeat',
          'Gathering percebes without a licence: up to €1500 (especially strict on the Costa Vicentina)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Apanha Apeada — 3 days', amountEUR: 10 },
    { label: 'Apanha Apeada — 1 month', amountEUR: 15 },
    { label: 'Apanha Apeada — 1 year', amountEUR: 25 },
    { label: 'Combo (à linha + apanha) — year', amountEURMin: 35, amountEURMax: 50, note: 'Check the final price on the DGRM portal when applying' },
    { label: 'Sacha (rake) for bivalves', amountEURMin: 15, amountEURMax: 35, note: 'At Decathlon and fishing shops' },
    { label: 'Fine without a licence', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Fine in a PROIBIDO zone', amountEURMin: 250, amountEURMax: 1500 }
  ],
  sources: [
    { title: 'DGRM — Recreational Fishing and Gathering (Pesca Lúdica e Apanha)', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — Bivalves: zones and sanitary classification', url: 'https://www.ipma.pt/pt/bivalves/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA Bivalves App — real-time zone map (iOS/Android)', url: 'https://www.ipma.pt/pt/bivalves/avisos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Recreational Fishing and Gathering (Pesca Lúdica e Apanha)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 27/2001 — minimum size by species', url: 'https://dre.pt/dre/detalhe/portaria/27-2001-411720', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
