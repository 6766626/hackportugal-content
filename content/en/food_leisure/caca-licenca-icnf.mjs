export default {
  editorialVoice: 'hackportugal',
  id: 'caca-licenca-icnf',
  categoryId: 'food_leisure',
  title: 'Hunting in Portugal — ICNF licence + hunter certificate (carta de caçador)',
  tldr: 'Hunting is a bureaucratically complex subject. You need: 1) a hunter certificate (theory + practical, ~€150-300) — obtained once and valid for life; 2) a firearms licence (PSP) — a separate procedure: medical board and psychological test; 3) an annual hunter licence from ICNF (~€30-100 per year); 4) access to a hunting area (zonas de caça) — almost everything is under concessions, usually paid (~€50-500 per day/outing).\n\nSeasons: big game (caça maior: wild boar, deer) — October-January; small game (caça menor: rabbit, quail, pigeon) — August-January, with exact dates depending on the species. Foreign nationals may hunt if they have obtained a certificate in Portugal or had their own recognised. Not recommended for beginners without experience and without a local club.',
  tags: ['hunting', 'hunter', 'icnf', 'weapon', 'game'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'overview',
      title: 'Why so many documents are needed',
      content: [
        { kind: 'paragraph', text: 'Hunting in Portugal is a strictly regulated activity. Firearms, the right to hunt, access to land, the specific species and the season — each of these aspects has its own document.' },
        { kind: 'checklist', items: [
          '1️⃣ Hunter certificate (ICNF): theory + practical. You obtain it once for life',
          '2️⃣ Licença de Uso e Porte de Arma (PSP): the right to use and carry firearms. Classes B, B1, C, D — depending on the type of firearm',
          '3️⃣ Annual hunter licence (ICNF): the fee for the right to hunt in the current season',
          '4️⃣ Right of access to hunting areas (zonas de caça): tourist area (paid), concession (paid) or associative area (through membership) — almost the whole country is divided into such areas',
          '5️⃣ Additional permits by hunting method: wild boar with hounds, from a hide, with a bird of prey (falcoaria)'
        ] }
      ]
    },
    {
      id: 'carta-caçador',
      title: 'Carta de Caçador (the main document)',
      content: [
        { kind: 'paragraph', text: 'This is the basic certificate: without it, you cannot hunt. It is obtained once and is valid for life (after the age of 65 — medical confirmation every 5 years).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Registering for a course',
            content: [
              { kind: 'checklist', items: [
                'Register through ICNF (icnf.pt) or at an authorised training centre',
                'Popular centres: Federação Portuguesa de Caça (FPC), AcordCaça, as well as dozens of local clubs',
                'Duration: 30-50 hours of theory + ~10 hours of practice',
                'Subjects: safety, species recognition, legislation, ecology, firearms, working with dogs, first aid',
                'Cost: €100-250 for the course'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Theory exam',
            content: [
              { kind: 'paragraph', text: 'Taken at a regional ICNF centre. ~50 multiple-choice questions, pass mark — 70%. Sections: hunting laws, hunting season calendar, wild animal species, safety rules, working with dogs, first aid.' }
            ]
          },
          {
            id: 's3',
            title: 'Practical exam',
            content: [
              { kind: 'checklist', items: [
                'Clay pigeon shooting at a range in an authorised club',
                'At least 3 hits out of 10 at 25 m',
                'Demonstration of safe firearm handling',
                'Identification of tracks and calls of 5 species',
                'Cost: ~€50-100 per exam'
              ] }
            ]
          }
        ] },
        { kind: 'paragraph', text: 'Foreign nationals with hunting rights in their own country (FACE — European Federation for Hunting and Conservation) can request recognition: for the EU/EEA the procedure is simpler, while for third countries it is usually necessary to take the full course.' }
      ]
    },
    {
      id: 'gun-licence',
      title: 'Firearms licence (PSP)',
      content: [
        { kind: 'paragraph', text: 'In parallel with the hunter certificate, you need to arrange the right to use and carry firearms. This is a separate procedure with the Polícia de Segurança Pública (PSP).' },
        { kind: 'checklist', items: [
          'Class B (short-barrelled): not needed for hunting; used for self-defence',
          'Class B1 (small revolver): rarely used',
          'Class C (long-barrelled semi-automatic smoothbore): most hunters use shotguns',
          'Class D (rifle, pump-action): for more advanced hunting scenarios',
          'Class E (bolt-action rifled firearm): for big game — wild boar, deer'
        ] },
        { kind: 'paragraph', text: 'What to gather for the application:' },
        { kind: 'checklist', items: [
          'Hunter certificate — without it, PSP will not issue the right to hunting firearms',
          'Medical board: psychiatrist and GP, ~€150-300',
          'Psychological testing at an authorised centre, ~€80-150',
          'Criminal record certificate',
          'Application submission to the regional PSP department: fee ~€80-200',
          'Safe firearm handling course (if required by PSP)',
          'Processing time: 60-90 days',
          'Renewal every 5 years with a new medical board'
        ] },
        { kind: 'paragraph', text: 'Firearm storage: a safe and anti-burglary fixing are mandatory. PSP may come for an inspection without prior notice.' }
      ]
    },
    {
      id: 'annual-license',
      title: 'Annual hunter licence',
      content: [
        { kind: 'paragraph', text: 'Each season (1 June — 31 May of the following year) is paid separately to ICNF.' },
        { kind: 'checklist', items: [
          'Small game only (rabbit, quail, pigeon, duck): ~€30-50',
          'Big game (wild boar, red deer, fallow deer): ~€50-80',
          'Both categories (big + small): ~€70-100',
          'Quotas (cota) for individual animals are paid additionally: wild boar +€5, deer +€10-30',
          'Payment online at icnf.pt or at a local hunter service point'
        ] }
      ]
    },
    {
      id: 'zonas-caça',
      title: 'Access to hunting areas',
      content: [
        { kind: 'paragraph', text: 'The difficulty lies in access: ~95% of Portugal’s territory is divided into managed areas, and almost all of them are paid.' },
        { kind: 'checklist', items: [
          'ZCA (Zona de Caça Associativa): club associative area. Membership is needed. Membership ~€50-300 per year',
          'ZCM (Zona de Caça Municipal): municipal; access through Câmara Municipal or by draw',
          'ZCT (Zona de Caça Turística): tourist/commercial; payment per day/visit ~€50-500',
          'ZCNT (Zona de Caça Não Transferida): rare category, sometimes with free access',
          'ZCS (Zona de Caça Social): for local residents; often free, but you need to be a resident of the municipality',
          'Area map: ICNF SI Caça — app for iOS and Android'
        ] },
        { kind: 'paragraph', text: 'For a foreign national without connections in a local club, it is usually more convenient to go through ZCT (tourist areas). Popular regions:' },
        { kind: 'checklist', items: [
          'Alentejo: legendary region for wild boar and deer. Coutadas Reais',
          'Beira Interior: the best perdiz-vermelha (red-legged partridge)',
          'Trás-os-Montes: great diversity of species, strong hunting traditions',
          'Algarve: waterfowl in Ria Formosa, rabbit inland',
          'Açores: wild goat on Pico island'
        ] }
      ]
    },
    {
      id: 'seasons',
      title: 'Seasons and species',
      content: [
        { kind: 'paragraph', text: 'The hunting season calendar is approved by an annual ICNF order (Portaria). Typical periods:' },
        { kind: 'checklist', items: [
          'Coelho (rabbit): October — January',
          'Lebre (hare): October — December',
          'Perdiz (partridge): October — January, weekends only',
          'Codorniz (quail): August — December',
          'Pombo-torcaz (pigeon): October — January',
          'Pombo-bravo: specific days according to the calendar',
          'Patos (ducks): October — January',
          'Javali (wild boar): October — January; night hunting is possible with a separate permit',
          'Veado (red deer): September — February (depends on the subcategory)',
          'Corço (roe deer): May — August (by subcategory)',
          'Gamo (fallow deer): August — February',
          'Fox (raposa): August — February'
        ] },
        { kind: 'paragraph', text: 'Special hunting methods: monteiras (driven hunts for wild boar with dogs), aguardo (hide hunting), espera (waiting).' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and fines',
      content: [
        { kind: 'checklist', items: [
          'GNR/SEPNA — the main enforcement service in nature',
          'ICNF inspectors (Vigilantes da Natureza)',
          'PSP — for firearms matters in cities'
        ] },
        { kind: 'checklist', items: [
          'Without a hunter certificate: €200-2,500 + possible confiscation of firearms',
          'Without an annual licence: €100-1,000',
          'Hunting outside the season: €500-5,000',
          'Prohibited species (lynx, wolf, brown bear): criminal prosecution',
          'Without the right to use and carry firearms: criminal prosecution',
          'Exceeding the quota: €200-2,000 for each animal',
          'Poaching at night without permits: criminal prosecution',
          'Entering private hunting areas without permission: €200-1,000'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Course: hunter certificate', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Certificate exam', amountEURMin: 50, amountEURMax: 100 },
    { label: 'Medical board for firearms', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Psychological test', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Firearms licence (PSP)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'Annual hunter licence', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Hunting club membership', amountEURMin: 50, amountEURMax: 300, note: 'Per year' },
    { label: 'Hunting day in ZCT', amountEURMin: 50, amountEURMax: 500, note: 'In a tourist hunting area' },
    { label: 'Trophy (big game — payment for taking wild boar/deer)', amountEURMin: 200, amountEURMax: 2000 },
    { label: 'Firearms safe', amountEURMin: 200, amountEURMax: 1000, note: 'Mandatory by law' }
  ],
  sources: [
    { title: 'ICNF — Hunting', url: 'https://www.icnf.pt/cacaepesca', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'PSP — Firearms and ammunition', url: 'https://www.psp.pt/Pages/atividade-da-psp/armas/inicio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 202/2004 — legal framework for hunting', url: 'https://dre.pt/dre/detalhe/decreto-lei/202-2004-528700', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Lei 5/2006 — use and carrying of firearms', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34539075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 67/2024, de 22 de fevereiro — hunting calendar for 2024-2025, 2025-2026 and 2026-2027 (amended by Portarias 309/2024/1 and 222-A/2025/1)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/portaria/2024-898587583', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 365
}
