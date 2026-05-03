export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-submarina-apneia',
  categoryId: 'food_leisure',
  title: 'Breath-hold spearfishing (apnoea) — licence and rules',
  tldr: 'Breath-hold spearfishing with a speargun is a separate category of pesca lúdica (recreational fishing), subcategory Submarina. Minimum age — 16 years. Licence from DGRM (Directorate-General for Natural Resources) (~€15 per year) + mandatory medical fitness certificate for apnoea + mandatory insurance. Scuba and any autonomous breathing equipment are prohibited. Only mask, fins, speargun and your own lungs. Daily limit: 10 kg + 1 fish. Complete ban in the nature parks of Berlengas, Arrábida (core), partially in Açores.',
  tags: ['fishing', 'apnoea', 'underwater', 'spearfishing', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'requirements',
      title: 'Hard requirements: what you must gather',
      content: [
        { kind: 'checklist', items: [
          'Age 16+ (regardless of training level)',
          'Medical certificate of fitness for apnoea — from a sports medicine doctor. Validity 1–2 years depending on age',
          'Spearfishing insurance policy — separate insurance, ~€30–€80 per year. Ordinary travel insurance policies do not cover spearfishing',
          'Recreational underwater fishing (Submarina) licence from DGRM (Directorate-General for Natural Resources)',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Knowledge of the rules: minimum size, defeso (seasonal closed season), prohibited species'
        ] },
        { kind: 'paragraph', text: 'Highly advisable to take an apnoea course at an FPAS (Federação Portuguesa de Atividades Subaquáticas — Portuguese Underwater Activities Federation) or PADI Freediver school: without proper equalisation technique, competent breathing and shore safety this is dangerous.' },
        { kind: 'warning', text: 'Loss of consciousness on ascent (shallow water blackout) claims spearfishers’ lives every year. Always hunt with a buddy who watches from the surface: one dives — the other watches. Never go out alone, even at 3 metres.' }
      ]
    },
    {
      id: 'license-process',
      title: 'Obtaining the licence',
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
                'E-mail to receive the licence'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Apply online',
            content: [
              { kind: 'paragraph', text: 'Via portal.dgrm.mm.gov.pt → Licenciamento → Pesca Lúdica → Submarina. Upload PDFs of the medical certificate and insurance to the form. Pay.' }
            ]
          },
          {
            id: 's3',
            title: 'Get the PDF and print it',
            content: [
              { kind: 'paragraph', text: 'The licence arrives by e-mail and is available in your account. Take a printout with you — Polícia Marítima on the beach do not always have fast internet to check the QR code.' }
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
          '✅ Wetsuit 3–7 mm by season: Atlantic ~14–19 °C',
          '✅ Weight belt with quick release — critical for safety',
          '✅ Speargun (arbalete) — pneumatic or band-powered. Length and power are not limited by law',
          '✅ Surface marker buoy with diving flag (boia de sinalização) — mandatory: visibility for boats',
          '✅ Safety knife (in case of entanglement in lines/seaweed)',
          '✅ Gloves and booties',
          '❌ Scuba, rebreathers and any autonomous breathing equipment — prohibited',
          '❌ Night spearfishing — almost everywhere prohibited',
          '❌ Stun devices, chemical lures — prohibited',
          '❌ Carrying a loaded speargun on the beach and out of the water — prohibited (qualifies as a weapon)'
        ] },
        { kind: 'paragraph', text: 'Where to buy: Decathlon (basic), Cressi PT (pro), Salvimar/Mares from distributors. Full starter kit — €400–€800.' }
      ]
    },
    {
      id: 'where-allowed',
      title: 'Where you may and may NOT dive with a speargun',
      content: [
        { kind: 'paragraph', text: 'Many beautiful spots are protected and completely closed to spearfishing.' },
        { kind: 'checklist', items: [
          '❌ COMPLETELY FORBIDDEN: Reserva Natural das Berlengas (entire area)',
          '❌ Parque Marinho Luiz Saldanha (Arrábida) — no‑take core, partial ban in the buffer zone',
          '❌ Parque Natural do Sudoeste Alentejano e Costa Vicentina — there are no‑take zones',
          '❌ Most marinas, ports, aquaculture sites — banned',
          '❌ Closer than 100 m to bathing beaches',
          '❌ Closer than 30 m to shore anglers',
          '✅ Open rocky stretches of the Atlantic coast — Cascais, outer Sesimbra, Costa Vicentina outside the core zone',
          '✅ Açores — one of the world’s top regions for apnoea, except no‑take zones',
          '✅ Madeira — its own rules, confirm locally with a local club'
        ] },
        { kind: 'warning', text: 'Before diving, check the boundaries of nature parks on the ICNF (Institute for Nature Conservation and Forests) website — icnf.pt. GNR patrols (national gendarmerie), SEPNA unit, actively operate with drones in the Algarve and Costa Vicentina.' }
      ]
    },
    {
      id: 'species-targets',
      title: 'What people hunt in Portugal',
      content: [
        { kind: 'checklist', items: [
          'Robalo (sea bass) — main target, holds among rocks and seaweed',
          'Sargo — silvery inshore fish, a classic for beginners',
          'Dourada — less often on a speargun, more often taken on a rod',
          'Choco (cuttlefish) — in autumn near Setúbal',
          'Polvo (octopus) — you need practice finding dens, often with a torch',
          'Mero (grouper) — VERY rare and protected in Portugal — do not shoot',
          'Cherne — rare; caution: there are protected subspecies',
          'Pargo, garoupa — “signature” targets of Açores and Madeira'
        ] },
        { kind: 'warning', text: 'Do not shoot unless you are 100% sure of the species. Mero (Epinephelus marginatus) has almost disappeared off the Portuguese coast: a large size does not mean you may take it. Photos only — no take.' }
      ]
    },
    {
      id: 'safety',
      title: 'Safety is not optional',
      content: [
        { kind: 'checklist', items: [
          'Never dive alone: always work in pairs, your buddy watches from the surface',
          'Buoy with flag: boats and kayakers must see you',
          'Do not dive deeper than your comfortable level — blackout kills',
          'Do not hyperventilate before a dive — this is a dangerous myth',
          'Surface interval: at least twice as long as the dive time',
          'Cold Atlantic: risk of hypothermia in 30–40 minutes even with gloves',
          'Dive computer/watch (e.g., Garmin Descent or Suunto D‑series) helps control time and depth for the pair',
          'Do not dive in storms or heavy swell — shallows and rocks become a trap',
          'Learn hand signals and emergency signals (FPAS course)'
        ] },
        { kind: 'paragraph', text: 'Useful clubs: Náutica e Pesca Submarina (NPSA) Lisboa, Clube Naval Setúbal, Clube de Pesca Submarina do Algarve. They organise joint trips and buddy training.' }
      ]
    }
  ],
  costs: [
    { label: 'Recreational underwater fishing (Submarina) licence — 1 year', amountEUR: 15 },
    { label: 'Licence — 3 years', amountEUR: 35 },
    { label: 'Medical certificate', amountEURMin: 30, amountEURMax: 80, note: 'Every 1–2 years, depending on age' },
    { label: 'Spearfishing insurance', amountEURMin: 30, amountEURMax: 80, note: 'Mandatory, per year' },
    { label: 'Basic equipment (starter)', amountEURMin: 400, amountEURMax: 800, note: 'Mask, 5 mm wetsuit, fins, speargun, buoy, weights' },
    { label: 'FPAS “Apnoea” course, level 1', amountEURMin: 150, amountEURMax: 300, note: 'Strongly recommended before your first outing' }
  ],
  sources: [
    { title: 'DGRM — Spearfishing', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IPDJ — registration of sports federations (FPAS recognised)', url: 'https://ipdj.gov.pt/registo-de-praticantes-desportivos-em-federacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decree-Law 246/2000 — Recreational fishing and spearfishing', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF — Marine parks and restricted zones', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
