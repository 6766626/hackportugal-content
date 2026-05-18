export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Felling trees on your own plot — what is allowed, and where fines exceed €5,000',
  tldr: 'Not every tree on your plot can simply be cut down. Sobreiro (cork oak) and azinheira (holm oak) are protected nationally (Decreto-Lei 169/2001) — a fine of €5,000-€50,000 for each tree without ICNF (Institute for Nature Conservation and Forests) authorisation.\n\nOliveira (olive tree) older than 1951 is also protected (DL 120/86).\n\nAny works in REN/RAN zones (national ecological/agricultural reserves) or natural parks require separate authorisations. In urban areas, authorisation from the Câmara Municipal (municipality) is almost always required.\n\nApplications are submitted online via the ICNF e-Balcão for sobreiro/azinheira or through the Junta de Freguesia (parish council).\n\nThe assessment period is usually 30–90 days.',
  tags: ['trees', 'felling', 'sobreiro', 'azinheira', 'icnf', 'câmara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Protected tree species — the essentials',
      content: [
        { kind: 'paragraph', text: 'Portugal has species that are protected at national level. Illegal felling of even one tree = serious administrative liability, and in severe cases even criminal prosecution.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (cork oak, Quercus suber) — ALL trees are protected. Fine of €5,000-€50,000 per tree',
          '🛑 AZINHEIRA (holm oak, Quercus rotundifolia/ilex) — ALL trees are protected',
          '🛑 OLIVEIRA (olive tree) older than ~70 years (rule of thumb: trunk diameter > 60 cm) — protected under DL 120/86',
          '🛑 CARVALHO (oak, Quercus robur, faginea) — additionally protected in some natural parks',
          '🛑 CASTANHEIRO (chestnut) — protected in IGP zones (Trás-os-Montes)',
          '🛑 PINHEIRO MANSO (stone pine) — protected in RNAP',
          '✅ Other fruit trees (apple, lemon, orange, peach) — usually may be felled on your own plot without authorisation',
          '✅ EUCALIPTO (eucalyptus), acacia — invasive species; removal is often encouraged'
        ] },
        { kind: 'warning', text: 'Sobreiro and azinheira are national symbols and a source of cork/acorns for pig farming. The law is strict, fines are real — cases occur every year even for isolated incidents. If you see characteristic “cork” bark with deep cracks and a broad crown — it is almost certainly a sobreiro. Do not cut it down without authorisation.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'How to identify sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Before carrying out any works, identify exactly what is growing on the plot. The safest option is to invite a forestry engineer or ICNF specialist to inspect it (usually €50-€150).' },
        { kind: 'checklist', items: [
          'SOBREIRO: thick cork bark with longitudinal cracks, wide spreading crown, elliptical toothed leaves; acorns in cups',
          'AZINHEIRA: visually resembles holly — small dark-green leaves, with small spines on young shoots; grey bark',
          'OLIVEIRA: silvery narrow leaves, easy to recognise; if the tree is clearly older than 70 years, it falls under protected status, so it is better to confirm with an expert',
          'CARVALHO: classic “oak” leaf blade, lightening bark, autumn yellowing',
          'PINHEIRO MANSO: broad umbrella-shaped crown, long needles',
          'EUCALIPTO: smooth trunk with peeling bark, aromatic leaves — not protected, may be felled'
        ] },
        { kind: 'paragraph', text: 'Apps such as iNaturalist or Plant.id help identify from a photo. They are not 100% accurate, but they are a convenient starting point.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'When authorisation is needed — main cases',
      content: [
        { kind: 'checklist', items: [
          '🛑 Always for sobreiro/azinheira and for protected oliveira: ICNF authorisation is required, even for one tree',
          '🛑 In nature-protection areas (PN, RN, ZPE, ZEC): authorisation is required for any species',
          '🛑 In REN (Reserva Ecológica Nacional — national ecological network) and RAN (Reserva Agrícola Nacional — national agricultural reserve): CCDR authorisation is required (Commission for Coordination and Regional Development)',
          '🛑 In an urban area (zona urbana under the PDM — Plano Diretor Municipal, master plan): most municipalities require authorisation from the Câmara Municipal (municipality)',
          '🛑 On state land/by roads: only with authorisation from the Câmara Municipal or Infraestruturas de Portugal (road agency)',
          '✅ In a rural area, on your own plot, for non-protected species: as a rule, authorisation is not required',
          '✅ Emergency tree (risk of falling onto a house or road): it may be removed immediately, but you must notify the Câmara Municipal/ICNF afterwards with photos and a brief justification',
          'Check your municipality’s PDM: it may establish additional protection for trees and avenues'
        ] }
      ]
    },
    {
      id: 'sobreiro-azinheira-process',
      title: 'Authorisation for sobreiro/azinheira — how to apply',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documents',
            content: [
              { kind: 'checklist', items: [
                'Caderneta predial (from Finanças — tax authority)',
                'Certidão de teor (from Conservatória do Registo Predial — land registry)',
                'Plan/map with the exact location of each tree (GPS coordinates)',
                'Photos of each tree from different angles',
                'Justification: reason (disease, risk, construction, plot rehabilitation)',
                'If for construction — approved project from the Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Application to ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Login with Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Fees: roughly €50-€200 for the application +, if necessary, a specialist site visit at €50-€150.' }
            ]
          },
          {
            id: 's3',
            title: 'Technical inspection',
            content: [
              { kind: 'paragraph', text: 'ICNF may send a specialist to confirm the condition. For healthy trees, authorisation will almost always be refused. Accepted grounds include: the tree is dead/drying out, structural risk, or a replacement project (mandatory planting of 5+ new trees for each tree felled).' }
            ]
          },
          {
            id: 's4',
            title: 'Decision',
            content: [
              { kind: 'paragraph', text: 'The assessment period is 30–90 days. Authorisation is often conditional: with a compensation obligation (usually 5 new saplings for each tree felled). Validity period — 1 year: the works must be carried out within this period.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'penalties',
      title: 'Fines — this is serious',
      content: [
        { kind: 'checklist', items: [
          'Sobreiro/azinheira without authorisation: €5,000-€50,000 for each tree (for individuals)',
          'Sobreiro/azinheira without authorisation (for companies): up to €250,000 per tree',
          'Old oliveira without authorisation: €1,000-€10,000',
          'In a natural park without authorisation: €5,000-€50,000 + obligation to restore the planting',
          'In REN/RAN without authorisation: €1,500-€50,000',
          'In an urban area without Câmara Municipal authorisation: €1,000-€25,000 (according to the rules of the specific municipality)',
          'Criminal prosecution is possible for repeated breaches or substantial environmental damage',
          'Compensation: planting 5-10 new saplings for each tree felled'
        ] },
        { kind: 'warning', text: 'GNR (National Republican Guard), through its SEPNA unit (environmental patrol), monitors rural areas using drones and satellite images. Retrospective checks are possible even years later. Neighbours often report illegal felling. Do not take the risk.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Common situations',
      content: [
        { kind: 'checklist', items: [
          'You bought a quinta, and there is a sobreiro on the plot — you want to remove it for a house → you will need ICNF authorisation + architect’s project + compensatory planting. It is possible, but be prepared for a 6–12 month process',
          'A sobreiro fell after a storm and blocked access → it may be cut up and removed as an urgent measure, then ICNF must be notified with photos',
          'You plan to fell an oliveira aged ~80 years → Câmara Municipal authorisation will almost certainly be required. It is often refused; consider pruning or transplanting instead',
          'A eucalipto has grown too large and creates a fire risk → it may be felled without authorisation; in some places this is even required to create a firebreak strip',
          'An old apple tree is in the way of a vegetable patch → authorisation is not needed (the species is not protected)',
          'Pinheiro manso in a protected area → CCDR/ICNF authorisation will be required',
          'A dead tree of any species → it may be removed as a safety measure, but for sobreiro/azinheira contact ICNF first'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Contractors and cost of works',
      content: [
        { kind: 'paragraph', text: 'Felling large trees is work for professionals. Look for local arborists/pruners (podadores):' },
        { kind: 'checklist', items: [
          'Small tree (4–8 m): €100-€300',
          'Medium tree (8–15 m): €300-€800',
          'Large tree (15–25 m): €800-€2,000',
          'Sobreiro or old oliveira (especially careful technique required): €1,500-€5,000',
          'Stump removal: +€100-€500',
          'Removal and disposal: €50-€200',
          'Contractor insurance: check it without fail, otherwise liability for incidents will fall on you',
          'Where to look: jardineiros.pt, FNAP, local Facebook groups for gardens and plots'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'ICNF authorisation (sobreiro/azinheira)', amountEURMin: 50, amountEURMax: 200 },
    { label: 'ICNF technical inspection', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Câmara Municipal authorisation (urban area)', amountEURMin: 30, amountEURMax: 200 },
    { label: 'CCDR authorisation (REN/RAN)', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Species identification by a specialist', amountEURMin: 50, amountEURMax: 200, note: 'If species/age needs to be confirmed' },
    { label: 'Felling a large tree', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Felling an old sobreiro/oliveira', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensation: saplings (5+ trees)', amountEURMin: 50, amountEURMax: 500, note: 'Purchase and planting' },
    { label: 'Fine for sobreiro without authorisation', amountEURMin: 5000, amountEURMax: 50000, note: 'For each tree' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros and Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — protection of sobreiro and azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — protection of oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — request to fell sobreeiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — REN authorisations', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
