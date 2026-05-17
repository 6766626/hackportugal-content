export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-submarina-apneia',
  categoryId: 'food_leisure',
  title: 'Spearfishing on breath-hold (apnoea) — licence and rules',
  tldr: 'Spearfishing with a speargun on breath-hold is a separate category of pesca lúdica (recreational fishing), the Submarina subcategory. Minimum age: 16. Licence from DGRM (Directorate-General for Natural Resources, Safety and Maritime Services) (~€15 per year) + mandatory medical certificate of fitness for apnoea + mandatory insurance. Scuba and any self-contained breathing equipment are prohibited. Mask, fins, spear and your own lungs only. Daily limit: 10 kg + 1 fish. Total ban in the Berlengas and Arrábida (core) natural parks, and partial bans in the Açores.',
  tags: ['pesca', 'apnoea', 'submarina', 'spearfishing', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'requirements',
      title: 'Strict requirements: what you need to gather',
      content: [
        { kind: 'checklist', items: [
          'Age 16+ (regardless of level of training)',
          'Medical certificate of fitness for apnoea — from a sports medicine doctor. Valid for 1–2 years depending on age',
          'Spearfishing insurance policy — separate insurance, ~€30–80 per year. Standard travel insurance does not cover spearfishing',
          'Licence for recreational underwater fishing (Submarina) from DGRM (Directorate-General for Natural Resources, Safety and Maritime Services)',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Knowledge of the rules: minimum size, defeso (seasonal catch ban), prohibited species'
        ] },
        { kind: 'paragraph', text: 'It is highly advisable to take an apnoea course at an FPAS school (Federação Portuguesa de Atividades Subaquáticas — Portuguese Federation of Underwater Activities) or PADI Freediver: without pressure equalisation technique, proper breathing and shore-based safety cover, it is dangerous.' },
        { kind: 'warning', text: 'Loss of consciousness on ascent (shallow water blackout) claims the lives of spearfishers every year. Always hunt with a buddy who watches from the surface: one dives — the other watches. Never go out alone, even at 3 metres.' }
      ]
    },
    {
      id: 'license-process',
      title: 'Getting the licence',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Gather the documents',
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
              { kind: 'paragraph', text: 'Via portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Submarina. Upload the medical certificate and insurance PDF to the form. Pay the fee.' }
            ]
          },
          {
            id: 's3',
            title: 'Receive the PDF and print it',
            content: [
              { kind: 'paragraph', text: 'The licence arrives by email and is available in your personal account. Take a printout with you — Polícia Marítima on the beach do not always have fast internet to check the QR code.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'gear-rules',
      title: 'Equipment: what is allowed and what is not',
      content: [
        { kind: 'checklist', items: [
          '✅ Mask, snorkel, fins — the basic kit',
          '✅ 3–7 mm wetsuit depending on the season: Atlantic ~14–19 °C',
          '✅ Weight belt with quick release — critical for safety',
          '✅ Speargun (arbalete) — pneumatic or rubber-powered. Length and power are not limited by law',
          '✅ Signal buoy with diving flag (boia de sinalização) — mandatory: visibility for boats',
          '✅ Safety knife (in case of entanglement in lines/seaweed)',
          '✅ Gloves and boots',
          '❌ Scuba sets, rebreathers and any self-contained breathing equipment — prohibited',
          '❌ Night hunting with a spear — prohibited almost everywhere',
          '❌ Electric stun devices, chemical baits — prohibited',
          '❌ Carrying a loaded speargun on the beach and out of the water — prohibited (classified as a weapon)'
        ] },
        { kind: 'paragraph', text: 'Where to buy: Decathlon (basics), Cressi PT (pro), Salvimar/Mares from distributors. Full starter kit — €400–800.' }
      ]
    },
    {
      id: 'where-allowed',
      title: 'Where you can and CANNOT dive with a speargun',
      content: [
        { kind: 'paragraph', text: 'Many beautiful spots are protected and completely closed to spearfishing.' },
        { kind: 'checklist', items: [
          '❌ COMPLETELY PROHIBITED: Reserva Natural das Berlengas (entire area)',
          '❌ Parque Marinho Luiz Saldanha (Arrábida) — no-take core, partial ban in the buffer zone',
          '❌ Parque Natural do Sudoeste Alentejano e Costa Vicentina — there are no-take zones',
          '❌ Most marinas, ports, aquaculture sites — banned',
          '❌ Within 100 m of beaches with bathers',
          '❌ Within 30 m of shore anglers',
          '✅ Open rocky stretches of the Atlantic coast — Cascais, outer Sesimbra, Costa Vicentina outside the core zone',
          '✅ Açores — one of the world’s top regions for apnoea, except no-take zones',
          '✅ Madeira — its own rules apply; check locally with a local club'
        ] },
        { kind: 'warning', text: 'Before diving, check the boundaries of natural parks on the ICNF (Institute for Nature Conservation and Forests) website — icnf.pt. GNR (national gendarmerie) patrols, SEPNA unit, are actively using drones in the Algarve and Costa Vicentina.' }
      ]
    },
    {
      id: 'species-targets',
      title: 'What people hunt in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Robalo (sea bass) — the main target, found among rocks and seaweed',
          'Sargo — silvery inshore fish, a classic for beginners',
          'Dourada — less common with a spear, more often caught on rod and line',
          'Choco (cuttlefish) — in autumn around Setúbal',
          'Polvo (octopus) — requires practice finding dens, often with a torch',
          'Mero (grouper) — VERY rare and protected in Portugal — do not shoot',
          'Cherne — rare; be careful: there are protected subspecies',
          'Pargo, garoupa — “signature” targets in the Açores and Madeira'
        ] },
        { kind: 'warning', text: 'Do not shoot if you are not 100% sure of the species. Mero (Epinephelus marginatus) has almost disappeared from the Portuguese coast: large size does not mean you may take it. Photo only — no removal.' }
      ]
    },
    {
      id: 'safety',
      title: 'Safety is not optional',
      content: [
        { kind: 'checklist', items: [
          'Never dive alone: always work in a pair, with your buddy watching from the surface',
          'Buoy with flag: boats and kayakers must be able to see you',
          'Do not dive deeper than your comfort level — blackout kills',
          'Do not hyperventilate before diving — it is a dangerous myth',
          'Surface interval: at least twice as long as the dive time',
          'Cold Atlantic: risk of hypothermia in 30–40 minutes even with gloves',
          'Dive computer/watch (for example, Garmin Descent or Suunto D-series) helps monitor time and depth for the pair',
          'Do not dive in storms or heavy swell — shallows and rocks become traps',
          'Learn hand signals and distress signals (FPAS course)'
        ] },
        { kind: 'paragraph', text: 'Useful clubs: Náutica e Pesca Submarina (NPSA) Lisboa, Clube Naval Setúbal, Clube de Pesca Submarina do Algarve. They organise group trips and training with buddies.' }
      ]
    }
  ],
  costs: [
    { label: 'Recreational underwater fishing licence (Submarina) — 1 year', amountEUR: 15 },
    { label: 'Licence — 3 years', amountEUR: 35 },
    { label: 'Medical certificate', amountEURMin: 30, amountEURMax: 80, note: 'Every 1–2 years, depending on age' },
    { label: 'Spearfishing insurance', amountEURMin: 30, amountEURMax: 80, note: 'Mandatory, for one year' },
    { label: 'Basic equipment (starter kit)', amountEURMin: 400, amountEURMax: 800, note: 'Mask, 5 mm wetsuit, fins, spear, buoy, weights' },
    { label: 'FPAS “Apnoea” course, level 1', amountEURMin: 150, amountEURMax: 300, note: 'Strongly recommended before the first outing' }
  ],
  sources: [
    { title: 'DGRM — Pesca Submarina', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — sports federation registration (FPAS recognised)', url: 'https://ipdj.gov.pt/clube-de-praticantes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica e Submarina', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Marine parks and restricted zones', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
