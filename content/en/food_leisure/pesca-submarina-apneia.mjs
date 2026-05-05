export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-submarina-apneia',
  categoryId: 'food_leisure',
  title: 'Breath-hold spearfishing (apnoea) — licence and rules',
  tldr: 'Breath-hold spearfishing with a speargun is a separate category of pesca lúdica (recreational fishing), subcategory Submarina. Minimum age — 16. Licence from DGRM (Directorate-General for Maritime Resources) (about €15 per year) + mandatory medical certificate of fitness for apnoea + mandatory insurance. Scuba and any self-contained breathing apparatus are prohibited. Mask, fins, speargun and your own lungs only. Daily limit: 10 kg + 1 fish. Total ban in the Berlengas and Arrábida (core) marine parks, partial bans in the Azores.',
  tags: ['fishing', 'apnoea', 'underwater', 'spearfishing', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'requirements',
      title: 'Hard requirements: what you need to gather',
      content: [
        { kind: 'checklist', items: [
          'Age 16+ (regardless of training level)',
          'Medical certificate of fitness for apnoea — from a sports medicine doctor. Validity 1–2 years depending on age',
          'Spearfishing insurance policy — separate cover, about €30–€80 per year. Standard travel insurance does not cover spearfishing',
          'Recreational underwater fishing (Submarina) licence from DGRM (Directorate-General for Maritime Resources)',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Knowledge of the rules: minimum sizes, defeso (seasonal closed seasons), prohibited species'
        ] },
        { kind: 'paragraph', text: 'It is highly advisable to take an apnoea course at an FPAS (Federação Portuguesa de Atividades Subaquáticas — Portuguese Federation of Underwater Activities) or PADI Freediver school: without equalisation technique, proper breathing and shore safety it is dangerous.' },
        { kind: 'warning', text: 'Loss of consciousness on ascent (shallow water blackout) kills spearfishers every year. Always hunt with a buddy watching from the surface: one dives — the other watches. Never go out alone, even at 3 metres.' }
      ]
    },
    {
      id: 'license-process',
      title: 'Getting the licence',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Gather your documents',
            content: [
              { kind: 'checklist', items: [
                'Medical certificate from a sports medicine doctor',
                'Valid spearfishing insurance policy',
                'NIF, Cartão de Cidadão or passport',
                'Email address to receive the licence'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Apply online',
            content: [
              { kind: 'paragraph', text: 'Via portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Submarina. Upload PDF copies of the medical certificate and insurance to the form. Pay.' }
            ]
          },
          {
            id: 's3',
            title: 'Receive the PDF and print it',
            content: [
              { kind: 'paragraph', text: 'The licence arrives by email and is available in your account. Take a printout with you — Polícia Marítima on the beach do not always have fast internet to check the QR code.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'gear-rules',
      title: 'Equipment: what is allowed, what is not',
      content: [
        { kind: 'checklist', items: [
          '✅ Mask, snorkel, fins — basic set',
          '✅ Wetsuit 3–7 mm according to season: Atlantic ~14–19 °C',
          '✅ Weight belt with quick release — critical for safety',
          '✅ Speargun (arbalete) — pneumatic or band-powered. Length and power are not limited by law',
          '✅ Surface marker buoy with dive flag (boia de sinalização) — mandatory: visibility for boats',
          '✅ Safety knife (in case of entanglement in lines/seaweed)',
          '✅ Gloves and booties',
          '❌ Scuba, rebreathers and any self-contained breathing apparatus — prohibited',
          '❌ Night spearfishing — almost everywhere prohibited',
          '❌ Electric shock devices, chemical lures — prohibited',
          '❌ Carrying a loaded speargun on the beach and out of the water — prohibited (classified as a weapon)'
        ] },
        { kind: 'paragraph', text: 'Where to buy: Decathlon (basic), Cressi PT (pro), Salvimar/Mares via distributors. Full starter kit — €400–€800.' }
      ]
    },
    {
      id: 'where-allowed',
      title: 'Where you can and where you CANNOT dive with a speargun',
      content: [
        { kind: 'paragraph', text: 'Many beautiful areas are protected and completely closed to spearfishing.' },
        { kind: 'checklist', items: [
          '❌ COMPLETELY PROHIBITED: Reserva Natural das Berlengas (entire area)',
          '❌ Parque Marinho Luiz Saldanha (Arrábida) — core is no‑take, partial bans in the buffer zone',
          '❌ Parque Natural do Sudoeste Alentejano e Costa Vicentina — has no‑take zones',
          '❌ Most marinas, ports, aquaculture sites — prohibited',
          '❌ Closer than 100 m to bathing beaches',
          '❌ Closer than 30 m to shore anglers',
          '✅ Open rocky stretches of the Atlantic coast — Cascais, outer Sesimbra, Costa Vicentina outside the core zone',
          '✅ Azores — one of the top regions in the world for apnoea, except in no‑take zones',
          '✅ Madeira — its own rules; check locally with a club'
        ] },
        { kind: 'warning', text: 'Before diving, check marine park boundaries on the ICNF (Institute for Nature Conservation and Forests) website — icnf.pt. GNR patrols (national gendarmerie), SEPNA unit, actively operate with drones in the Algarve and Costa Vicentina.' }
      ]
    },
    {
      id: 'species-targets',
      title: 'Target species in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Robalo (sea bass) — main target, stays among rocks and seaweed',
          'Sargo — silvery inshore fish, a classic for beginners',
          'Dourada — less common on a speargun, more often taken on rod and line',
          'Choco (cuttlefish) — in autumn near Setúbal',
          'Polvo (octopus) — requires practice in finding dens, often with a torch',
          'Mero (grouper) — VERY rare and protected in Portugal — do not shoot',
          'Cherne — rare; caution: some subspecies are protected',
          'Pargo, garoupa — signature targets of the Azores and Madeira'
        ] },
        { kind: 'warning', text: 'Do not shoot unless you are 100% sure of the species. Mero (Epinephelus marginatus) has almost disappeared off the Portuguese coast: large size does not mean it can be taken. Photos only — no take.' }
      ]
    },
    {
      id: 'safety',
      title: 'Safety is not optional',
      content: [
        { kind: 'checklist', items: [
          'Never dive alone: always work in pairs, with a buddy watching from the surface',
          'Buoy with flag: boats and kayakers must be able to see you',
          'Do not dive deeper than your comfort level — blackout kills',
          'Do not hyperventilate before a dive — it is a dangerous myth',
          'Surface interval: at least twice as long as the dive time',
          'Cold Atlantic: risk of hypothermia within 30–40 minutes even with gloves',
          'Dive computer/watch (e.g. Garmin Descent or Suunto D‑series) helps control the pair’s time and depth',
          'Do not dive in storms or strong swell — shoals and rocks become traps',
          'Learn hand signals and distress signals (FPAS course)'
        ] },
        { kind: 'paragraph', text: 'Useful clubs: Náutica e Pesca Submarina (NPSA) Lisboa, Clube Naval Setúbal, Clube de Pesca Submarina do Algarve. They organise joint outings and buddy training.' }
      ]
    }
  ],
  costs: [
    { label: 'Recreational underwater fishing (Submarina) licence — 1 year', amountEUR: 15 },
    { label: 'Licence — 3 years', amountEUR: 35 },
    { label: 'Medical certificate', amountEURMin: 30, amountEURMax: 80, note: 'Every 1–2 years, depending on age' },
    { label: 'Spearfishing insurance', amountEURMin: 30, amountEURMax: 80, note: 'Mandatory, yearly' },
    { label: 'Basic equipment (starter)', amountEURMin: 400, amountEURMax: 800, note: 'Mask, 5 mm wetsuit, fins, speargun, buoy, weights' },
    { label: 'FPAS “Apnoea” course, level 1', amountEURMin: 150, amountEURMax: 300, note: 'Strongly recommended before your first outing' }
  ],
  sources: [
    { title: 'DGRM — Spearfishing (Pesca Submarina)', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registration of sports federations (FPAS recognised)', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Recreational and Underwater Fishing', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Marine Parks and restricted zones', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
