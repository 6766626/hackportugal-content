export default {
  editorialVoice: 'hackportugal',
  id: 'apanha-bivalves-mar',
  categoryId: 'food_leisure',
  title: 'Collecting shellfish (apanha de bivalves) — licence and sanitary zones',
  tldr: 'Collecting shellfish on the beach and in the coastal zone (ameijoa, berbigão, conquilha, longueirão) is apanha lúdica within Pesca Lúdica (recreational fishing), regulated by DGRM (Directorate-General for Natural Resources, Safety and Maritime Services).\n\nManual gathering without tools needs no licence. If you use a tool (rake, knife, sacho), you need the recreational "apeada" licence: ~€2 per day, ~€4 per month, ~€8 per year (Portaria 14/2014). Daily limit for bivalves: 2 kg with shell per person. You may collect ONLY in sanitary classified zones (zonas classificadas): IPMA (Portuguese Institute for Sea and Atmosphere) publishes the A/B/C list every month. Collecting in unclassified zones is prohibited.\n\nImportant: collecting bivalves is prohibited from 1 May to 15 June (defeso) in oceanic and inland maritime waters.\n\nProhibited: crowbars, any mechanical tools, and collecting shells below the minimum size (ameijoa 25 mm, berbigão 25 mm, longueirão 100 mm).',
  tags: ['bivalves', 'shellfishing', 'collection', 'ameijoa', 'dgrm', 'ipma'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-apanha',
      title: 'What apanha de bivalves is and why there is a separate licence 🐚',
      content: [
        { kind: 'paragraph', text: 'Apanha de bivalves is the recreational collection of bivalve shellfish and other edible marine organisms in the coastal zone: on sandy beaches at low tide, on rocks, in estuaries.\n\nIn Portugal this is a type of Pesca Lúdica (recreational fishing), legally regulated by DGRM (Directorate-General for Natural Resources, Safety and Maritime Services), while sanitary control is carried out by IPMA (Portuguese Institute for Sea and Atmosphere).' },
        { kind: 'checklist', items: [
          'Bivalves: ameijoa-boa (Ruditapes decussatus), ameijoa-japonesa (R. philippinarum), berbigão (Cerastoderma edule), longueirão (Ensis spp.), navalha (Solen spp.)',
          'Other molluscs: pé-de-burrinho, lapa (limpet), mexilhão (mussels) on rocks',
          'Crustaceans: caranguejo, camarão, percebes (goose barnacles) — partly fall under this',
          'Echinoderms: ouriço-do-mar (sea urchin) — specially regulated',
          'NOT included: rod fishing (requires Pesca Lúdica à linha), pulling an octopus out of a den by hand (prohibited since 2017), lobsters (professional harvesting only)'
        ] },
        { kind: 'warning', text: 'Manual gathering without tools needs no licence. But as soon as you use a tool (rake, knife, sacho), you need the recreational “apeada” licence. Many people dig ameijoa in the Algarve with a rake and no licence at all and receive a €100-€500 fine.' }
      ]
    },
    {
      id: 'sanitary-zones',
      title: 'Sanitary zones — the most important point',
      content: [
        { kind: 'paragraph', text: 'This is a health issue. Bivalve shellfish filter water and accumulate toxins (biotoxins from algae — “red tides”), bacteria (E. coli, Salmonella), and heavy metals. IPMA publishes an updated map every month: which zones are permitted, for which species, and in what form they may be consumed.' },
        { kind: 'checklist', items: [
          'Class A (take it and eat it): rare; for example, ameijoa from Ria Formosa in good months',
          'Class B (collection is allowed, but heat treatment is mandatory): most zones in Portugal. Boil for at least 5 minutes or keep for 2–3 days in clean salt water',
          'Class C (industrial depuration required): not available to recreational collectors',
          'PROIBIDO (prohibited): collection and consumption are completely prohibited, usually because of biotoxin peaks',
          'Unclassified zone (zona não classificada): collection and consumption are prohibited — there is no sanitary control'
        ] },
        { kind: 'paragraph', text: 'IPMA updates the map every week at ipma.pt → Mar e Pesca → Bivalves. There is also an IPMA app for iOS and Android, where you can quickly check the zone by coordinates.' },
        { kind: 'warning', text: 'Collecting in a PROIBIDO zone even in small quantities = up to a €1,500 fine + risk of poisoning. Biotoxins are not destroyed by boiling! Peaks are March–May and September–October after spring/autumn algal “blooms”.' }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Do you need a licence, and how to get one',
      content: [
        { kind: 'paragraph', text: 'First things first: manual gathering of shellfish without tools needs NO licence (Decreto-Lei 101/2013). A licence is required if you use a tool (rake, knife, sacho) — in that case the recreational “apeada” licence (for shore gathering and rod fishing) applies.' },
        { kind: 'paragraph', text: 'It is obtained through several channels: at any Multibanco ATM (Pagamentos e Outros Serviços → Estado e Setor Público → Licenciamento de Pesca Lúdica — for holders of a Portuguese Multibanco card); at the DGRM counter in Lisbon; at the regional DRAP counters (Norte, Centro, LVT, Alentejo, Algarve); or via the BMar — Balcão Eletrónico do Mar portal at www.bmar.pt (for non-residents and foreigners, payment by bank transfer). General information is at www.dgrm.pt.' },
        { kind: 'checklist', items: [
          'Manual gathering without tools: free, no licence needed',
          '“Apeada” licence — 1 day: ~€2',
          '“Apeada” licence — 1 month: ~€4',
          '“Apeada” licence — 1 year: ~€8',
          'The licence is personal and cannot be transferred'
        ] },
        { kind: 'paragraph', text: 'Rates are set by Portaria 14/2014; check the final price on the portal when applying.' }
      ]
    },
    {
      id: 'rules-tools',
      title: 'Rules: tools, sizes, limits',
      content: [
        { kind: 'paragraph', text: 'Minimum sizes are critical to follow:' },
        { kind: 'checklist', items: [
          'Ameijoa-boa and ameijoa-japonesa: 25 mm shell diameter',
          'Berbigão: 25 mm',
          'Longueirão / navalha: 100 mm length',
          'Mexilhão (mussels): 50 mm',
          'Lapa (limpet): 30 mm',
          'Flat oyster (ostra plana): 60 mm; Portuguese oyster: 80 mm',
          'Polvo (octopus): 750 g (but pulling it out of a den by hand has been prohibited since 2017)',
          'Percebes: 25 mm at the base of attachment'
        ] },
        { kind: 'paragraph', text: 'Daily limit (Portaria 14/2014; overall recreational catch cap is 10 kg per person per day):' },
        { kind: 'checklist', items: [
          'All bivalves combined: 2 kg with shell per person per day',
          'Percebes: 0.5 kg in total (specially protected species!)',
          'Mexilhão (mussels): 3 kg',
          'Polvo: up to 5 kg (hard to reach, but the rule exists)'
        ] },
        { kind: 'warning', text: 'Closed season (defeso): collecting bivalves is prohibited from 1 May to 15 June in oceanic and inland maritime waters. Local capitanias may also impose additional closed periods and zones — always check the current edital.' },
        { kind: 'paragraph', text: 'Permitted and prohibited tools:' },
        { kind: 'checklist', items: [
          '✅ Manual collection only (fingers, thin stick)',
          '✅ Sieve/riddle for measuring size and sifting sand',
          '✅ Sacha (mini-rake) up to 30 cm wide and with teeth of maximum 5 cm',
          '✅ Wooden knife for percebes',
          '❌ Any shovel with a handle',
          '❌ Mantas/ras (types of nets)',
          '❌ Motor pumps for pumping water or sand',
          '❌ Hydro-injection (prohibited everywhere since 2014)',
          '❌ Electric shock devices'
        ] }
      ]
    },
    {
      id: 'where-when',
      title: 'Where and when to collect — best spots',
      content: [
        { kind: 'paragraph', text: 'The main rule: before setting off, check the current IPMA map for the current month. Zone statuses change.' },
        { kind: 'checklist', items: [
          'Ria Formosa (Algarve): Portugal’s main ameijoa “factory”. Olhão, Tavira, Faro. Often class A or B.',
          'Ria de Aveiro: berbigão and ameijoa. Season — winter and spring.',
          'Ria de Alvor: mixed bivalves.',
          'Estuário do Sado (Setúbal): ameijoa and berbigão. Some zones are in the Reserva Natural with additional rules.',
          'Lagoa de Albufeira: ameijoa, sometimes class A.',
          'Ribeira do Lavre, small channels of Ria Formosa: longueirão — a classic.',
          'Costa Vicentina: percebes on rocks (VERY dangerous for beginners; there are fatal accidents every year).',
          'Berlengas: EVERYTHING IS PROHIBITED — Reserva Natural.'
        ] },
        { kind: 'paragraph', text: 'The best time is low tide. Tide tables (calendário de marés): ipma.pt or the Tides Near Me app. The optimal window is 2 hours before peak low tide and 1 hour after.' },
        { kind: 'warning', text: 'Do not stay beyond low tide. The tide comes in quickly in Ria Formosa and estuaries — every year, lost collectors drown. Never go out alone. A charged phone is essential.' }
      ]
    },
    {
      id: 'preparation-cooking',
      title: 'How to process what you have collected',
      content: [
        { kind: 'paragraph', text: 'For class B (most zones), processing is mandatory before eating.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Removing sand',
            content: [
              { kind: 'checklist', items: [
                'Soak in salt water (35 g of salt per 1 l) at “sea” temperature, 12–18 °C',
                'At least 3–4 hours, preferably overnight',
                'Change the water every 2–3 hours: ameijoa actively “spits out” sand',
                'Add maize flour — the shellfish clean themselves faster'
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
        { kind: 'warning', text: 'NEVER eat raw unless the zone is class A. Biotoxins (PSP, ASP, DSP) are not destroyed by boiling; heat treatment kills bacteria, but not toxins. If there is a toxin peak now, even cooked shellfish can be dangerous. Always check with IPMA.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and what the fines are',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima (maritime police) — on beaches and in estuaries',
          'GNR-SEPNA (National Republican Guard, nature protection service) — in natural parks',
          'Capitania (harbour master’s office) — in ports',
          'ASAE (economic and food safety inspectorate) checks restaurants and sellers for the source of bivalves'
        ] },
        { kind: 'checklist', items: [
          'No licence: €100-€500 + confiscation of catch and tool',
          'Collection in a PROIBIDO zone: €250-€1,500',
          'Size below the minimum: €100-€300 for each infringement',
          'Exceeding the daily limit: €100-€500',
          'Prohibited tools (pump, shovel): up to €1,500',
          'Attempting to sell what you collected: €500-€3,000 + criminal prosecution if repeated',
          'Collecting percebes without a licence: up to €1,500 (especially strict in Costa Vicentina)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Manual gathering without tools', amountEUR: 0, note: 'No licence required' },
    { label: '“Apeada” licence — 1 day', amountEUR: 2 },
    { label: '“Apeada” licence — 1 month', amountEUR: 4 },
    { label: '“Apeada” licence — 1 year', amountEUR: 8, note: 'Rates per Portaria 14/2014; confirm when applying' },
    { label: 'Sacha (rake) for bivalves', amountEURMin: 15, amountEURMax: 35, note: 'At Decathlon and fishing shops' },
    { label: 'Fine without licence', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Fine in a PROIBIDO zone', amountEURMin: 250, amountEURMax: 1500 }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica', url: 'https://www.dgrm.pt/pesca-pl-licenciamento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'DGRM — Apanha (tools and species)', url: 'https://www.dgrm.pt/apanha', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'IPMA — Bivalves: zones and sanitary classification', url: 'https://www.ipma.pt/pt/bivalves/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'IPMA Bivalves App — real-time zone map (iOS/Android)', url: 'https://www.ipma.pt/pt/bivalves/avisos/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Decreto-Lei 101/2013 — legal regime for recreational fishing', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2013-34538275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Portaria 14/2014 — licences, fees and catch limits', url: 'https://dre.pt/dre/detalhe/portaria/14-2014-278910', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
