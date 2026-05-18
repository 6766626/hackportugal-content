export default {
  editorialVoice: 'hackportugal',
  id: 'corte-arvores-licenca',
  categoryId: 'housing_buy',
  title: 'Felling trees on your own plot — what is allowed, and where fines exceed €5,000',
  tldr: 'Not every tree on your plot can simply be cut down. Sobreiro (cork oak) and azinheira (holm oak) are protected nationally (Decreto-Lei 169/2001) — unlawful felling/uprooting of sobreiro/azinheira is a contraordenação ambiental; fines can reach tens of thousands of euros for individuals and be substantially higher for companies, plus restoration measures. The amount depends on the nature of the offence and fault. (Institute for Nature Conservation and Forests).\n\nOliveira (olive tree) older than 1951 is also protected (DL 120/86).\n\nAny works in REN/RAN areas (national ecological/agricultural reserves) or natural parks require separate authorisations. In urban areas, Câmara Municipal authorisation is almost always required.\n\nApplications for sobreiro/azinheira are made through ICNF/e-Balcão. For oliveira, apply to the competent agricultural services/CCDR. For municipal trees/urban areas, apply to the Câmara Municipal. The Junta de Freguesia can only help with local information, but usually does not issue these authorisations.\n\nThe review period is usually 30–90 days.',
  tags: ['trees', 'felling', 'sobreiro', 'azinheira', 'icnf', 'camara'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'protected-species',
      title: 'Protected tree species — the essentials',
      content: [
        { kind: 'paragraph', text: 'Portugal has species protected at national level. Illegal felling of even one tree = serious administrative liability, and in severe cases criminal prosecution too.' },
        { kind: 'checklist', items: [
          '🛑 SOBREIRO (cork oak, Quercus suber) — ALL trees are protected. Fine of €5,000-€50,000 per tree',
          '🛑 AZINHEIRA (holm oak, Quercus rotundifolia/ilex) — ALL trees are protected',
          '🛑 OLIVEIRA (olive tree) older than ~70 years (rule of thumb: trunk diameter > 60 cm) — protected under DL 120/86',
          '🛑 CARVALHO (oak, Quercus robur, faginea) — additionally protected in some natural parks',
          'CASTANHEIRO — is not a nationally protected species like sobreiro/azinheira; check phytosanitary rules, protected areas, REN/RAN, PDM and municipal regulations.',
          'PINHEIRO MANSO — does not have the same national protection as sobreiro/azinheira; in protected areas/RNAP, REN/RAN or under the PDM, authorisation/parecer may be required.',
          '✅ Other fruit trees (apple, lemon, orange, peach) — can usually be felled on your own plot without authorisation',
          '✅ EUCALIPTO (eucalyptus), acacia — invasive; removal is often encouraged'
        ] },
        { kind: 'warning', text: 'Sobreiro and azinheira are national symbols and sources of cork/acorns for pig farming. The law is strict and fines are real — every year there are cases even for isolated incidents. If you see characteristic “cork” bark with deep cracks and a broad crown, it is almost certainly sobreiro. Do not fell it without authorisation.' }
      ]
    },
    {
      id: 'how-identify',
      title: 'How to identify sobreiro/azinheira/oliveira',
      content: [
        { kind: 'paragraph', text: 'Before any work, identify exactly what is growing on the plot. The safest option is to invite a forestry engineer or ICNF specialist to inspect it (usually €50-€150).' },
        { kind: 'checklist', items: [
          'SOBREIRO: thick cork bark with longitudinal cracks, widely spreading crown, elliptical toothed leaves; acorns in cups',
          'AZINHEIRA: visually resembles holly — small dark-green leaves, young shoots have small spines; grey bark',
          'OLIVEIRA: narrow silvery leaves, easily recognisable; if the tree is clearly over 70 years old, it is protected, and it is better to confirm this with an expert',
          'CARVALHO: classic “oak” leaf blade, bark that becomes lighter, yellowing in autumn',
          'PINHEIRO MANSO: broad umbrella-shaped crown, long needles',
          'EUCALIPTO: smooth trunk with peeling bark, aromatic leaves — not protected, can be felled'
        ] },
        { kind: 'paragraph', text: 'Apps such as iNaturalist or Plant.id can help from a photo. They are not 100% accurate, but they are a useful starting point.' }
      ]
    },
    {
      id: 'when-license-needed',
      title: 'When authorisation is needed — main cases',
      content: [
        { kind: 'checklist', items: [
          'Sobreiro/azinheira: ICNF authorisation',
          'Oliveira: authorisation from the competent agricultural services/CCDR under DL 120/86; plus municipal rules, where applicable.',
          'In RNAP/Natura 2000 areas, check the plano de ordenamento/regulamento da área protegida and request an ICNF parecer/licença if felling may affect habitats, landscape or protected values.',
          '🛑 In REN (Reserva Ecológica Nacional — national ecological network) and RAN (Reserva Agrícola Nacional — national agricultural reserve): CCDR authorisation is required (Commission for Coordination and Regional Development)',
          '🛑 In an urban area (zona urbana under the PDM — Plano Diretor Municipal, municipal master plan): most municipalities require Câmara Municipal authorisation',
          '🛑 On state land/by roads: only with authorisation from the Câmara Municipal or Infraestruturas de Portugal (road agency)',
          '✅ In a rural area, on your own plot, for non-protected species: as a rule, no authorisation is required',
          'In an immediate danger situation, first, if possible, call Proteção Civil/Câmara/GNR/ICNF and document the risk with photos/video/relatório. Remove only the minimum necessary for safety; for sobreiro/azinheira/oliveira, then urgently formaliza comunicação/pedido. After-the-fact notification does not guarantee that there will be no sanction.',
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
                'Certidão de teor (from Conservatória do Registo Predial — land registry office)',
                'Diagram/map with the exact location of each tree (GPS coordinates)',
                'Photos of each tree from different angles',
                'Justification: reason (disease, risk, construction, land rehabilitation)',
                'If for construction — approved project from the Câmara Municipal'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Application to ICNF',
            content: [
              { kind: 'paragraph', text: 'icnf.pt → e-Balcão → Pedido de Corte ou Arranque de Sobreiros e Azinheiras. Login with Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Fees: approximately €50-€200 per application +, if necessary, a specialist site visit at €50-€150.' }
            ]
          },
          {
            id: 's3',
            title: 'Technical inspection',
            content: [
              { kind: 'paragraph', text: 'ICNF may send a specialist to confirm the condition. For healthy trees, refusal is almost always likely. ICNF may impose compensation/restoration measures, including planting, protection of regeneration or other conditions; the coefficient is not universal and is stated in the decision.' }
            ]
          },
          {
            id: 's4',
            title: 'Decision',
            content: [
              { kind: 'paragraph', text: 'The review period is 30–90 days. The authorisation may contain conditions and compensation/restoration measures; you must comply with the exact conditions set by ICNF/the municipality/CCDR in the decision. Validity period — 1 year: the works must be carried out within this period.' }
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
          'Sobreiro/azinheira without authorisation: a major administrative environmental sanction; for individuals, fines of tens of thousands of euros may be possible, and for companies much higher; restoration/compensation measures may also apply.',
          'For legal entities, fines may be substantially higher, up to hundreds of thousands or millions of euros in the most serious environmental offences; the specific range depends on the classification of the offence.',
          'Old oliveira without authorisation: €1,000-€10,000',
          'In a natural park without authorisation: €5,000-€50,000 + obligation to restore plantings',
          'In REN/RAN without authorisation: €1,500-€50,000',
          'In an urban area without Câmara Municipal authorisation: €1,000-€25,000 (according to the rules of the specific municipality)',
          'Criminal prosecution is possible in cases of systematic breaches or substantial environmental damage',
          'Compensation/restoration: only under the conditions of the specific authorisation or authority decision; this may include planting, maintenance, protection of natural regeneration or other measures.'
        ] },
        { kind: 'warning', text: 'GNR (National Republican Guard), through the SEPNA unit (environmental patrol), monitors rural areas with drones and satellite imagery. Checks after the event are possible even years later. Neighbours often report illegal felling. Do not risk it.' }
      ]
    },
    {
      id: 'practical-cases',
      title: 'Common situations',
      content: [
        { kind: 'checklist', items: [
          'You bought a quinta and there is a sobreiro on the plot — you want to remove it for a house → you will need ICNF authorisation + an architect’s project + compensatory planting. It is possible, but be ready for a 6–12 month process',
          'A sobreiro fell after a storm and blocked access → you can cut it up and remove it as an urgent measure, then notify ICNF with photos',
          'For an old oliveira, check authorisation under DL 120/86 with the regional agricultural services/CCDR and separately the Câmara Municipal rules if the plot is in an urban area or there is municipal tree protection. Refusals are common; it is better to consider pruning or transplanting',
          'Eucalipto has grown too large and poses a fire risk → you can fell it without authorisation; in some places this is even required to create a firebreak strip',
          'An old apple tree is in the way of the vegetable garden → no authorisation is needed (the species is not protected)',
          'Pinheiro manso in a protected area → CCDR/ICNF authorisation will be required',
          'A dead tree of any species → it can be removed as a safety measure, but for sobreiro/azinheira first contact ICNF'
        ] }
      ]
    },
    {
      id: 'contractors',
      title: 'Contractors and work costs',
      content: [
        { kind: 'paragraph', text: 'Felling large trees is work for professionals. Look for local arborists/pruners (podadores):' },
        { kind: 'checklist', items: [
          'Small tree (4–8 m): €100-€300',
          'Medium tree (8–15 m): €300-€800',
          'Large tree (15–25 m): €800-€2,000',
          'Sobreiro or old oliveira (especially careful techniques needed): €1,500-€5,000',
          'Stump removal: +€100-€500',
          'Removal and disposal: €50-€200',
          'Contractor insurance: always check it, otherwise liability for incidents will fall on you',
          'Where to look: jardineiros.pt, FNAP, local Facebook groups for gardens and land'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'ICNF authorisation (sobreiro/azinheira)', amountEURMin: 50, amountEURMax: 200 },
    { label: 'ICNF technical inspection', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Câmara Municipal authorisation (urban area)', amountEURMin: 30, amountEURMax: 200 },
    { label: 'CCDR authorisation (REN/RAN)', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Species identification by a specialist', amountEURMin: 50, amountEURMax: 200, note: 'If the species/age needs to be confirmed' },
    { label: 'Felling a large tree', amountEURMin: 800, amountEURMax: 2000 },
    { label: 'Felling sobreiro/old oliveira', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Compensation: saplings (5+ trees)', amountEURMin: 50, amountEURMax: 500, note: 'Purchase and planting' },
    { label: 'Fine for sobreiro without authorisation', amountEURMin: 5000, amountEURMax: 50000, note: 'Per tree' }
  ],
  sources: [
    { title: 'ICNF — Sobreiros and Azinheiras', url: 'https://www.icnf.pt/florestas/gfr/sa', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 169/2001 — protection of sobreiro and azinheira', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2001-34488075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 120/86 — protection of oliveira', url: 'https://dre.pt/dre/detalhe/decreto-lei/120-1986-220815', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICNF e-Balcão — sobreiro felling application', url: 'https://eservicos.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'CCDR — REN authorisations', url: 'https://www.ccdr-lvt.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
