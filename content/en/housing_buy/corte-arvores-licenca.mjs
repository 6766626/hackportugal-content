export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Tree felling on your own plot — what is allowed, and where the fine is €5,000+',
  tldr: 'Not every tree on your plot can simply be cut down. Sobreiro (cork oak) and azinheira (holm oak) are protected nationally (Decreto-Lei 169/2001) — €5,000–€50,000 fine per tree without ICNF (Instituto da Conservação da Natureza e das Florestas) authorisation. Oliveira (olive tree) older than 1951 is also protected (DL 120/86). Any works in REN/RAN (national ecological/agricultural reserves) or natural parks require separate permits. In urban areas you almost always need permission from the Câmara Municipal (municipality). Submission — online via ICNF e-Balcão for sobreiro/azinheira or via the Junta de Freguesia (parish council). Processing time is usually 30–90 days.',
  tags: ['trees', 'felling', 'sobreiro', 'azinheira', 'icnf', 'municipality'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Protected species of trees — the most important',
      content: [
        { kind: 'paragraph', text: 'In Portugal there are species protected at national level. Illegal felling of even a single tree = serious administrative liability, and in severe cases criminal prosecution.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (cork oak, Quercus suber) — ALL trees are protected. Fine €5,000–€50,000 per tree',
          '🛑 AZINHEIRA (holm oak, Quercus rotundifolia/ilex) — ALL trees are protected',
          '🛑 OLIVEIRA (olive tree) older than ~70 years (rule of thumb: trunk diameter > 60 cm) — protected by DL 120/86',
          '🛑 CARVALHO (oak, Quercus robur, faginea) — additionally protected in places within natural parks',
          '🛑 CASTANHEIRO (chestnut) — protected in IGP zones (Trás-os-Montes)',
          '🛑 PINHEIRO MANSO (stone pine) — protected in RNAP',
          '✅ Other fruit trees (apple, lemon, orange, peach) — usually can be felled on your plot without a permit',
          '✅ EUCALIPTO (eucalyptus), acacia — invasive; removal is often encouraged'
        ] },
        { kind: 'warning', text: 'Sobreiro and azinheira are national symbols and sources of cork/acorns for pig farming. The law is strict and fines are real — there are cases every year, even for single trees. If you see characteristic “cork” bark with deep fissures and a broad crown — it is almost certainly a sobreiro. Do not fell without a permit.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'How to identify sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Before any works, be sure to identify exactly what is growing on the plot. The most reliable approach is to invite a forest engineer or an ICNF specialist for an inspection (usually €50–€150).' },
        { kind: 'checklist', items: [
          'SOBREIRO: thick corky bark with longitudinal fissures, wide-spreading crown, elliptic serrated leaves; acorns in cups',
          'AZINHEIRA: visually reminiscent of holly — small dark‑green leaves, with small spines on young shoots; bark is grey',
          'OLIVEIRA: narrow silvery leaves, easily recognisable; if the tree is clearly older than 70 years — it is protected, better confirm with an expert',
          'CARVALHO: classic “oak” leaf blade, bark lightens, yellowing in autumn',
          'PINHEIRO MANSO: broad umbrella-shaped crown, long needles',
          'EUCALIPTO: smooth trunk with peeling bark, aromatic leaves — not protected, can be felled'
        ] },
        { kind: 'paragraph', text: 'Apps like iNaturalist or Plant.id help via photos. This is not 100% accurate, but a convenient starting point.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'When a permit is needed — key situations',
      content: [
        { kind: 'checklist', items: [
          '🛑 Always for sobreiro/azinheira and for protected oliveira: ICNF authorisation is required, even for a single tree',
          '🛑 In protected areas (PN, RN, ZPE, ZEC): authorisation is required for any species',
          '🛑 In REN (Reserva Ecológica Nacional — National Ecological Reserve) and RAN (Reserva Agrícola Nacional — National Agricultural Reserve): you need authorisation from CCDR (Comissão de Coordenação e Desenvolvimento Regional)',
          '🛑 In an urban area (zona urbana under the PDM — Plano Diretor Municipal, master plan): in most municipalities you need authorisation from the Câmara Municipal (municipality)',
          '🛑 On state land/by roads: only with authorisation from the Câmara Municipal or Infraestruturas de Portugal (road agency)',
          '✅ In a rural area, on your own plot, non-protected species: as a rule, no permit is required',
          '✅ Emergency tree (risk of falling onto a house or road): you may remove it immediately, but you must notify the Câmara Municipal/ICNF afterwards with photos and a brief justification',
          'Check the PDM of your municipality: it may establish additional protection for trees and avenues'
        ] }
      ]
    },
    {
      id: 'sobreiro-azinheira-process',
      title: 'Permit for sobreiro/azinheira — how to apply',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Documents',
            content: [
              { kind: 'checklist', items: [
                'Caderneta predial (from Finanças — the tax authority)',
                'Certidão de teor (from the Conservatória do Registo Predial — land registry office)',
                'Plan/map with the exact location of each tree (GPS coordinates)',
                'Photos of each tree from different angles',
                'Justification: reason (disease, risk, construction, site rehabilitation)',
                'If for construction — an approved project from the Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submit to ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Log in with Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Fees: approximately €50–€200 for submission + if needed a specialist’s site visit €50–€150.' }
            ]
          },
          {
            id: 's3',
            title: 'Technical inspection',
            content: [
              { kind: 'paragraph', text: 'ICNF may send a specialist to confirm the condition. For healthy trees there will almost always be a refusal. Grounds accepted: the tree is dead/dying, structural risk, or a replacement plan (mandatory planting of 5+ new trees for each felled).' }
            ]
          },
          {
            id: 's4',
            title: 'Decision',
            content: [
              { kind: 'paragraph', text: 'Processing time 30–90 days. Authorisation is often conditional: with an obligation of compensation (usually 5 new saplings for each one felled). Validity — 1 year: the works must be carried out within this period.' }
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
          'Sobreiro/azinheira without a permit: €5,000–€50,000 per tree (for individuals)',
          'Sobreiro/azinheira without a permit (for legal persons): up to €250,000 per tree',
          'Old oliveira without a permit: €1,000–€10,000',
          'In a natural park without a permit: €5,000–€50,000 + obligation to restore plantings',
          'In REN/RAN without a permit: €1,500–€50,000',
          'In an urban area without Câmara Municipal authorisation: €1,000–€25,000 (as per the specific municipality’s rules)',
          'Criminal prosecution is possible for systematic violations or significant environmental damage',
          'Compensation: planting 5–10 new saplings for each tree felled'
        ] },
        { kind: 'warning', text: 'GNR (National Gendarmerie), the SEPNA unit (eco‑patrol), monitors rural areas with drones and satellite imagery. Checks after the fact are possible even years later. Neighbours often report illegal felling. Do not risk it.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Common situations',
      content: [
        { kind: 'checklist', items: [
          'Bought a quinta, there is a sobreiro on the plot — I want to remove it to build a house → you will need ICNF authorisation + an architect’s project + compensatory planting. It is feasible, but prepare for a 6–12 month process',
          'A sobreiro fell after a storm and blocked a passage → you can cut and remove it as an urgent measure, then notify ICNF with photos',
          'Planning to fell an oliveira about ~80 years old → you will almost certainly need authorisation from the Câmara Municipal. Refusals are common; better consider pruning or transplanting',
          'An eucalipto has grown too big, fire risk → you can fell it without a permit; in some places this is even a requirement for creating a firebreak',
          'An old apple tree is in the way of the vegetable garden → no permit needed (species not protected)',
          'Pinheiro manso in a protected area → authorisation from CCDR/ICNF will be required',
          'A dead tree of any species → can be removed as a safety measure, but for sobreiro/azinheira contact ICNF first'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Contractors and cost of works',
      content: [
        { kind: 'paragraph', text: 'Felling large trees is a job for professionals. Look for local arborists/podadores:' },
        { kind: 'checklist', items: [
          'Small tree (4–8 m): €100–€300',
          'Medium (8–15 m): €300–€800',
          'Large (15–25 m): €800–€2,000',
          'Sobreiro or old oliveira (requires particularly careful techniques): €1,500–€5,000',
          'Stump removal: +€100–€500',
          'Removal and disposal: €50–€200',
          'Contractor’s insurance: make sure to check, otherwise liability for incidents will fall on you',
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
    { label: 'Species identification by a specialist', amountEURMin: 50, amountEURMax: 200, note: 'If you need to confirm species/age' },
    { label: 'Felling a large tree', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Felling an old sobreiro/oliveira', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensation: saplings (5+ trees)', amountEURMin: 50, amountEURMax: 500, note: 'Purchase and planting' },
    { label: 'Fine for sobreiro without a permit', amountEURMin: 5000, amountEURMax: 50000, note: 'Per tree' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros and Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — protection of the sobreiro and the azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — protection of the oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — request to fell sobreiros', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — REN authorisations', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
