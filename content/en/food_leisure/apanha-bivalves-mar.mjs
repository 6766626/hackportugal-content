export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Shellfish gathering (apanha de bivalves) — licence and sanitary zones',
  tldr: 'Gathering shellfish on the beach and in coastal areas (ameijoa, berbigão, conquilha, longueirão) is a separate Pesca Lúdica (recreational fishing) category from DGRM (Directorate-General for Natural Resources, Safety and Maritime Services). The "Apanha Apeada" licence: ~€10 for 3 days, ~€25 for a year. Daily limit: 1 kg with shell per person. You may gather ONLY in sanitary-classified zones (zonas classificadas): IPMA (Portuguese Institute for Sea and Atmosphere) publishes the A/B/C list every month. Gathering in unclassified zones is illegal OR requires mandatory heat treatment (even if the species is allowed). Prohibited: crowbars, any mechanical tools, and collecting shells below the minimum size (ameijoa 25 mm, berbigão 25 mm, longueirão 100 mm). A Pesca Lúdica à linha licence for rod fishing does NOT cover shellfish gathering — you need a separate licence.',
  tags: ['bivalves', 'shellfishing', 'gathering', 'ameijoa', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'What apanha de bivalves is and why it needs a separate licence 🐚',
      content: [
        { kind: 'paragraph', text: 'Apanha de bivalves is recreational gathering of bivalve shellfish and other edible marine organisms in coastal areas: on sandy beaches at low tide, on rocks, in estuaries. In Portugal, it is a type of Pesca Lúdica (recreational fishing), legally regulated by DGRM (Directorate-General for Natural Resources, Safety and Maritime Services), while sanitary control is carried out by IPMA (Portuguese Institute for Sea and Atmosphere).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Other molluscs: pé-de-burrinho, lapa (limpet), mexilhão (mussels) on rocks',
          'Crustaceans: caranguejo, camarão, percebes (goose barnacles) — partly covered here',
          'Echinoderms: ouriço-do-mar (sea urchin) — specially regulated',
          'NOT included: rod fishing (requires Pesca Lúdica à linha), pulling an octopus out of a hole by hand (prohibited since 2017), lobsters (professional harvesting only)'
        ] },
        { kind: 'warning', text: 'A Pesca Lúdica à linha licence (for rod fishing) does NOT apply to bivalves. And vice versa. Many people think: “I have a licence”, go digging for ameijoa in the Algarve and get a €250-500 fine.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Sanitary zones — the most important part',
      content: [
        { kind: 'paragraph', text: 'This is a health issue. Bivalve shellfish filter water and accumulate toxins (biotoxins from algae — “red tides”), bacteria (E. coli, Salmonella), and heavy metals. IPMA publishes an updated map every month: which zones are allowed, for which species, and in what form they may be consumed.' },
        { kind: 'checklist', items: [
          'Class A (take and eat): rare; for example, ameijoa from Ria Formosa in good months',
          'Class B (you may gather, but heat treatment is mandatory): most zones in Portugal. Boil for at least 5 minutes or keep for 2–3 days in clean salt water',
          'Class C (industrial depuration required): not available to recreational gatherers',
          'PROIBIDO (prohibited): gathering and consumption are completely prohibited, usually because of biotoxin peaks',
          'Unclassified zone (zona não classificada): gathering and consumption are prohibited — there is no sanitary control'
        ] },
        { kind: 'paragraph', text: 'IPMA updates the map every week at ipma.pt → Mar e Pesca → Bivalves. There is also the IPMA app for iOS and Android, where you can quickly check a zone by coordinates.' },
        { kind: 'warning', text: 'Gathering in a PROIBIDO zone even in small quantities = up to a €1500 fine + poisoning risk. Biotoxins are not destroyed by boiling! Peaks are March–May and September–October after spring/autumn algal “blooms”.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Getting the Apanha Apeada licence',
      content: [
        { kind: 'paragraph', text: 'Apply at portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Apanha Apeada. Login with Chave Móvel Digital (CMD; mobile digital signature) or Cartão de Cidadão (citizen card).' },
        { kind: 'checklist', items: [
          '3 days: ~€10',
          '1 month: ~€15',
          '1 year: ~€25',
          '3 years: ~€60',
          'The licence is personal and cannot be transferred'
        ] },
        { kind: 'paragraph', text: 'The “à linha apeada + apanha” combo is sometimes better value if you both fish and gather shellfish.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Rules: tools, sizes, limits',
      content: [
        { kind: 'paragraph', text: 'Minimum sizes are critical to respect:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa and ameijoa-japonesa: 25 mm shell diameter',
          'Berbigão: 25 mm',
          'Longueirão / navalha: 100 mm length',
          'Mexilhão (mussels): 50 mm',
          'Lapa (limpet): 30 mm',
          'Flat oyster (ostra plana): 60 mm; Portuguese oyster: 80 mm',
          'Polvo (octopus): 750 g (but pulling it out of a hole by hand has been prohibited since 2017)',
          'Percebes: 25 mm at the attachment base'
        ] },
        { kind: 'paragraph', text: 'Daily limit:' },
        { kind: 'checklist', items: [
          'All bivalves combined: 1 kg with shell per person per day',
          'Percebes: 0.5 kg total (specially protected species!)',
          'Mexilhão: 1 kg',
          'Polvo: up to 5 kg (hard to reach, but the rule exists)'
        ] },
        { kind: 'paragraph', text: 'Allowed and prohibited tools:' },
        { kind: 'checklist', items: [
          '✅ Hand gathering only (fingers, thin stick)',
          '✅ Sieve/riddle for measuring size and sifting sand',
          '✅ Sacha (mini-rake) up to 30 cm wide and with teeth no longer than 5 cm',
          '✅ Wooden knife for percebes',
          '❌ Any spade with a handle',
          '❌ Mantas/ras (types of nets)',
          '❌ Motor pumps for removing water or sand',
          '❌ Hydro-injection (prohibited everywhere since 2014)',
          '❌ Electric shock devices'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Where and when to gather — best spots',
      content: [
        { kind: 'paragraph', text: 'Main rule: before you set off, check the current IPMA map for the current month. Zone statuses change.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): Portugal’s main ameijoa “factory”. Olhão, Tavira, Faro. Often class A or B.',
          'Ria de Aveiro: berbigão and ameijoa. Season — winter and spring.',
          'Ria de Alvor: mixed bivalves.',
          'Estuário do Sado (Setúbal): ameijoa and berbigão. Some zones are in a natural reserve (Reserva Natural) with additional rules.',
          'Lagoa de Albufeira: ameijoa, sometimes class A.',
          'Ribeira do Lavre, small channels in Ria Formosa: longueirão — a classic.',
          'Costa Vicentina: percebes on rocks (VERY dangerous for beginners; fatal accidents happen every year).',
          'Berlengas: EVERYTHING IS PROHIBITED — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'The best time is low tide. Tide tables (calendário de marés): ipma.pt or the Tides Near Me app. From 2 hours before the low-tide peak to 1 hour after is optimal.' },
        { kind: 'warning', text: 'Do not stay beyond low tide. The tide comes in quickly in Ria Formosa and estuaries — every year lost gatherers drown. Never go out alone. A charged phone is essential.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'How to process what you have gathered',
      content: [
        { kind: 'paragraph', text: 'For class B (most zones), treatment before eating is mandatory.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Removing sand',
            content: [
              { kind: 'checklist', items: [
                'Soak in salt water (35 g of salt per 1 l) at “sea” temperature, 12–18 °C',
                'At least 3–4 hours, preferably overnight',
                'Change the water every 2–3 hours: ameijoa actively “spits out” sand',
                'Add maize flour — the shellfish clear themselves faster'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Heat treatment',
            content: [
              { kind: 'checklist', items: [
                'For class B, mandatory: boil for at least 5 minutes at ~90 °C or fry for at least 10 minutes',
                'Put them into already boiling water or onto a well-heated pan',
                'Shells opened — done; did not open — throw away, do not eat',
                'Classic: Ameijoas à Bulhão Pato — white wine, garlic, coriander',
                'Carne de porco com ameijoas — an Alentejo classic'
              ] }
            ]
          }
        ] },
        { kind: 'warning', text: 'NEVER eat them raw unless the zone is class A. Biotoxins (PSP, ASP, DSP) are not destroyed by boiling; heat treatment kills bacteria, but not toxins. If there is currently a toxin peak, even cooked shellfish may be dangerous. Always check with IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and what the fines are',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima (maritime police) — on beaches and in estuaries',
          'GNR-SEPNA (National Republican Guard, nature protection service) — in natural parks',
          'Capitania (port captaincy) — in ports',
          'ASAE (economic and food safety inspectorate) checks restaurants and sellers for the source of bivalves'
        ] },
        { kind: 'checklist', items: [
          'No licence: €100–500 + confiscation of catch and tools',
          'Gathering in a PROIBIDO zone: €250–1500',
          'Size below the minimum: €100–300 for each offence',
          'Exceeding the daily limit: €100–500',
          'Prohibited tools (pump, spade): up to €1500',
          'Attempting to sell what you gathered: €500–3000 + criminal prosecution for repeat offences',
          'Gathering percebes without a licence: up to €1500 (especially strict in Costa Vicentina)'
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
    { title: 'DGRM — Pesca Lúdica and Apanha', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA — Bivalves: zones and sanitary classification', url: 'https://www.ipma.pt/pt/bivalves/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPMA Bivalves App — real-time zone map (iOS/Android)', url: 'https://www.ipma.pt/pt/bivalves/avisos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica and Apanha', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 27/2001 — minimum size por espécie', url: 'https://dre.pt/dre/detalhe/portaria/27-2001-411720', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
