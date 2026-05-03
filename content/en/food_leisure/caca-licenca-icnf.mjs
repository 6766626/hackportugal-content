export default {
  editorialVoice: 'hackportugal',
  id: 'caca-licenca-icnf',
  categoryId: 'food_leisure',
  title: 'Hunting in Portugal — ICNF licence + hunter’s card (carta de caçador)',
  tldr: 'Hunting is bureaucratically complex. You need: 1) hunter’s card (theory + practice, ~€150–300) — once, valid for life; 2) firearms licence (PSP) — a separate procedure: medical assessment and psych test; 3) annual hunting licence from ICNF (~€30–100 per year); 4) access to a hunting zone (zonas de caça) — almost all areas are under concessions, usually paid (~€50–500 per day/outing). Seasons: big game (caça maior: wild boar, deer) — October–January; small game (caça menor: rabbit, quail, pigeon) — August–January, exact dates depend on species. Foreigners may hunt if they obtain a Portuguese card or get theirs recognised. Not recommended for novices without experience and a local club.',
  tags: ['hunting', 'hunter', 'icnf', 'firearms', 'venatory'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'overview',
      title: 'Why so many documents are needed',
      content: [
        { kind: 'paragraph', text: 'Hunting in Portugal is strictly regulated. Firearms, the right to hunt, access to land, specific species and season — each of these aspects requires its own document.' },
        { kind: 'checklist', items: [
          '1️⃣ Hunter’s card (ICNF): theory + practice. You obtain it once for life',
          '2️⃣ Licença de Uso e Porte de Arma (PSP): right to possess and carry a firearm. Classes B, B1, C, D — by weapon type',
          '3️⃣ Annual hunting licence (ICNF): fee for the right to hunt in the current season',
          '4️⃣ Right of access to hunting zones (zonas de caça): tourist zone (paid), concession (paid) or associative zone (via membership) — almost the entire country is divided into such zones',
          '5️⃣ Additional permits by hunting method: for wild boar with hounds, from a hide, with a bird of prey (falconry)'
        ] }
      ]
    },
    {
      id: 'carta-caçador',
      title: 'Carta de Caçador (main document)',
      content: [
        { kind: 'paragraph', text: 'This is the basic credential: without it you cannot hunt. You obtain it once and it is valid for life (after 65 years — medical confirmation every 5 years).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Register for a course',
            content: [
              { kind: 'checklist', items: [
                'Register via ICNF (icnf.pt) or at an authorised training centre',
                'Popular centres: Federação Portuguesa de Caça (FPC), AcordCaça, plus dozens of local clubs',
                'Duration: 30–50 hours of theory + ~10 hours of practice',
                'Topics: safety, species identification, legislation, ecology, firearms, working with dogs, first aid',
                'Cost: €100–250 for the course'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Theory exam',
            content: [
              { kind: 'paragraph', text: 'Taken at a regional ICNF centre. ~50 multiple-choice questions, pass mark — 70%. Sections: hunting laws, hunting season calendar, wild species, safety rules, working with dogs, first aid.' }
            ]
          },
          {
            id: 's3',
            title: 'Practical exam',
            content: [
              { kind: 'checklist', items: [
                'Clay target shooting at a range in an authorised club',
                'At least 3 hits out of 10 at 25 metres',
                'Demonstration of safe firearms handling',
                'Identification of tracks and calls of 5 species',
                'Cost: ~€50–100 for the exam'
              ] }
            ]
          }
        ] },
        { kind: 'paragraph', text: 'Foreigners with hunting rights from their country (FACE — European Federation for Hunting and Conservation) can request recognition: for the EU/EEA the procedure is simpler; for third countries it usually requires taking the full course.' }
      ]
    },
    {
      id: 'gun-licence',
      title: 'Firearms licence (PSP)',
      content: [
        { kind: 'paragraph', text: 'In parallel with the hunter’s card you must obtain the right to possess firearms. This is a separate procedure with the Polícia de Segurança Pública (PSP).' },
        { kind: 'checklist', items: [
          'Class B (short‑barrelled): not needed for hunting; used for self‑defence',
          'Class B1 (small revolver): rarely used',
          'Class C (long semi‑automatic smoothbore): most hunters use shotguns',
          'Class D (carbine, pump‑action): for advanced hunting scenarios',
          'Class E (rifled with bolt action): for big game — wild boar, deer'
        ] },
        { kind: 'paragraph', text: 'What to prepare for submission:' },
        { kind: 'checklist', items: [
          'Hunter’s card — without it PSP will not issue the right to hunting firearms',
          'Medical assessment: psychiatrist and GP, ~€150–300',
          'Psychological testing at an authorised centre, ~€80–150',
          'Criminal record certificate',
          'Submit the application to the regional PSP department: fee ~€80–200',
          'Safe firearms handling course (if required by PSP)',
          'Processing time: 60–90 days',
          'Renewal every 5 years with a new medical assessment'
        ] },
        { kind: 'paragraph', text: 'Storage of firearms: a gun safe and anti‑burglary anchoring are mandatory. PSP may carry out unannounced inspections.' }
      ]
    },
    {
      id: 'annual-license',
      title: 'Annual hunting licence',
      content: [
        { kind: 'paragraph', text: 'Each season (1 June — 31 May of the following year) is paid separately to ICNF.' },
        { kind: 'checklist', items: [
          'Small game only (rabbit, quail, pigeon, duck): ~€30–50',
          'Big game (wild boar, red deer, fallow deer): ~€50–80',
          'Both categories (big + small): ~€70–100',
          'Quotas (cota) for individual animals are paid additionally: wild boar +€5, red deer +€10–30',
          'Payment online at icnf.pt or at a local hunter service point'
        ] }
      ]
    },
    {
      id: 'zonas-caça',
      title: 'Access to hunting zones',
      content: [
        { kind: 'paragraph', text: 'Access is the tricky part: ~95% of Portugal’s territory is divided into managed zones, and almost all of them are paid.' },
        { kind: 'checklist', items: [
          'ZCA (Zona de Caça Associativa): club associative zone. Membership required. Membership ~€50–300 per year',
          'ZCM (Zona de Caça Municipal): municipal; access via the Câmara Municipal or by lottery',
          'ZCT (Zona de Caça Turística): tourist/commercial; pay per day/visit ~€50–500',
          'ZCNT (Zona de Caça Não Transferida): rare category, sometimes with free access',
          'ZCS (Zona de Caça Social): for local residents; often free, but you must be a resident of the municipality',
          'Map of zones: ICNF SI Caça — app for iOS and Android'
        ] },
        { kind: 'paragraph', text: 'For a foreigner without connections in a local club it is usually more convenient to go through ZCT (tourist zones). Popular regions:' },
        { kind: 'checklist', items: [
          'Alentejo: legendary region for wild boar and deer. Coutadas Reais',
          'Beira Interior: the best perdiz‑vermelha (red‑legged partridge)',
          'Trás‑os‑Montes: great variety of species, strong hunting traditions',
          'Algarve: waterfowl in Ria Formosa, rabbit inland',
          'Açores: wild goat on Pico island'
        ] }
      ]
    },
    {
      id: 'seasons',
      title: 'Seasons and species',
      content: [
        { kind: 'paragraph', text: 'The hunting season calendar is approved by an annual ICNF Portaria. Typical periods:' },
        { kind: 'checklist', items: [
          'Coelho (rabbit): October — January',
          'Lebre (hare): October — December',
          'Perdiz (partridge): October — January, weekends only',
          'Codorniz (quail): August — December',
          'Pombo‑torcaz (woodpigeon): October — January',
          'Pombo‑bravo: specific days per calendar',
          'Patos (ducks): October — January',
          'Javali (wild boar): October — January; night hunting possible with separate authorisation',
          'Veado (red deer): September — February (depends on subcategory)',
          'Corço (roe deer): May — August (by subcategory)',
          'Gamo (fallow deer): August — February',
          'Raposa (fox): August — February'
        ] },
        { kind: 'paragraph', text: 'Special hunting methods: monteiras (boar drives with dogs), aguardo (from a hide), espera (ambush/waiting).' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and penalties',
      content: [
        { kind: 'checklist', items: [
          'GNR/SEPNA — the main enforcement service in nature areas',
          'ICNF inspectors (Vigilantes da Natureza)',
          'PSP — firearms matters in urban areas'
        ] },
        { kind: 'checklist', items: [
          'Without a hunter’s card: €200–2,500 + possible confiscation of firearms',
          'Without an annual licence: €100–1,000',
          'Hunting out of season: €500–5,000',
          'Prohibited species (lynx, wolf, brown bear): criminal prosecution',
          'Without the right to possess firearms: criminal prosecution',
          'Exceeding quota: €200–2,000 per animal',
          'Poaching at night without permits: criminal prosecution',
          'Trespassing into private hunting zones without permission: €200–1,000'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Course: hunter’s card', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Exam for the card', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Medical assessment for firearms', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Psychological test', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Firearms licence (PSP)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Annual hunting licence', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Hunting club membership', amountEURMin: 50, amountEURMax: 300, note: 'Per year' },
    { label: 'Hunting day in ZCT', amountEURMin: 50, amountEURMax: 500, note: 'In a tourist hunting zone' },
    { label: 'Trophy (big game — payment for taking wild boar/deer)', amountEURMin: 200, amountEURMax: 2000 },
    { label: 'Gun safe', amountEURMin: 200, amountEURMax: 1000, note: 'Mandatory by law' }
  ],
  sources: [
    { title: 'ICNF — Hunting', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — Firearms and Ammunition', url: 'https://www.psp.pt/Pages/atividade-da-psp/armas/inicio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 202/2004 — legal framework for hunting', url: 'https://dre.pt/dre/detalhe/decreto-lei/202-2004-528700', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 5/2006 — use and carrying of firearms', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34539075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 105/2024 — Annual hunting calendar 2024-2025', url: 'https://dre.pt/dre/detalhe/portaria/105-2024-848530150', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
