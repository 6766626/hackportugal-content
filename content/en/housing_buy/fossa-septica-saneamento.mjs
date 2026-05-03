export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Septic tank (fossa séptica) — rules, distances, permits',
  tldr: 'If a house is not connected to the public sewer network, autonomous wastewater treatment is needed. In Portugal this is either a classic septic tank (fossa séptica) with an absorption well, or a modern compact biological treatment mini‑plant ETAR. Volume: ~3 m³ for 4–5 residents. Minimum distances: ≥30 m from a borehole, ≥10 m from neighbouring houses, ≥5 m from the plot boundary. Installation requires an engineer’s design, a permit from the Câmara Municipal (municipality), an inspection after installation and an operating/usage permit (licença de utilização). Price: classic septic €1,500–€4,000, ETAR €5,000–€15,000. Pump‑out by a vacuum tanker every 1–3 years (€80–€200).',
  tags: ['septic-tank', 'fossa-septica', 'sanitation', 'etar', 'wastewater'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a septic tank is needed — scenarios',
      content: [
        { kind: 'checklist', items: [
          '🏠 House outside urban area without sewer connection: you need a septic tank or ETAR',
          '🏠 Old house with an unregistered septic tank: legalisation required',
          '🏠 House extension (adding bathrooms): recalculate septic tank capacity',
          '🏠 Converting an anexo into a guest house or Alojamento Local (tourist rental): ETAR is usually required',
          '🏠 New build: a septic tank or ETAR is a mandatory part of the project',
          '✅ Flat in a city: nothing needed — municipal sewer',
          '✅ House connected to a collector/sewer main: only a monthly sewer fee of €5–€15/month'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Classic septic tank vs ETAR — which to choose',
      content: [
        { kind: 'paragraph', text: 'Two main types of autonomous treatment:' },
        { kind: 'checklist', items: [
          'CLASSIC SEPTIC TANK (fossa séptica): 2–3‑chamber tank + absorption well/soakaway. Cheap. Needs a lot of space (~30–50 m² for a percolation field). Pump‑out every 1–3 years.',
          'ETAR (Estação de Tratamento de Águas Residuais) — compact biological treatment mini‑plant. Compact (~2–4 m²). Active bio‑treatment. Higher quality effluent; can be discharged to drainage or into the ground.',
          'COMPACT PREFABRICATED SEPTIC: modern alternative — moulded plastic with internal baffles. Easier to install. Price €3,000–€5,000 versus classic €1,500–€3,000.'
        ] },
        { kind: 'paragraph', text: 'What to choose:' },
        { kind: 'checklist', items: [
          'Small house (2–4 people), large plot, sandy soil: a classic septic tank will do',
          'Large house (>5 people) or dense development: ETAR is preferable',
          'Business (Alojamento Local, restaurant): ETAR + maintenance contract',
          'Clay soil: ETAR is better (absorption wells perform poorly in clay)',
          'Close to water bodies (rivers, the sea): modern ETAR with UV sterilisation',
          'If you are applying for a subsidy: ETAR has priority'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Minimum distances',
      content: [
        { kind: 'paragraph', text: 'Primary regulation — Decreto Regulamentar 23/95 (Regulamento de Distribuição de Água). The Câmara Municipal may impose stricter requirements.' },
        { kind: 'checklist', items: [
          'From a borehole/well: ≥ 30 m (often 50 m in public water‑catchment zones)',
          'From neighbouring house foundations: ≥ 10 m',
          'From the plot boundary: ≥ 5 m',
          'From vegetable gardens/food crops: ≥ 10 m',
          'From rivers and streams: ≥ 30 m (buffer zone)',
          'From a lagoon or lake: ≥ 50 m',
          'On a slope — consider the direction of groundwater flow',
          'Under a driveway or parking area: depth > 1 m with a reinforced cover'
        ] },
        { kind: 'warning', text: 'If a septic tank or absorption well is too close to a borehole, drinking water may be contaminated. This is a serious risk: you may face checks by the GNR (SEPNA eco‑patrol) and APA (environment agency), fines, closure of the borehole and remediation costs of €5,000–€30,000.' }
      ]
    },
    {
      id: 'process',
      title: 'Installation process — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Design (for new builds or major renovation)',
            content: [
              { kind: 'checklist', items: [
                'Civil engineer: the drainage/sewer design is part of the overall architectural project',
                'Geotechnical survey: what is the soil — permeable? clay or sand?',
                'Design: type, size, distances, percolation field',
                'Cost of the design component: €500–€1,500'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Obtaining a permit from the Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Via the PEDU online portal or in person at the Câmara Municipal. Submit:' },
              { kind: 'checklist', items: [
                'Caderneta predial (property record extract)',
                'Drainage/sewer project + explanatory note (memorial descritivo)',
                'Geotechnical survey',
                'Site layout plan',
                'Fee: €100–€500 (varies greatly by municipality)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Installation',
            content: [
              { kind: 'checklist', items: [
                'Find a certified drainage/sewer contractor',
                'Earthworks: excavator hire + labour = €50–€100/hour',
                'Delivery of the septic tank or ETAR to the site: consider access width',
                'Connection to the house drainage',
                'Backfilling and making good the site',
                'Overall cost of works: €1,500–€15,000'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Inspection and usage permit',
            content: [
              { kind: 'paragraph', text: 'After installation the Câmara Municipal may send an inspector to verify compliance with the project. Based on the outcome, an operating/usage permit (licença de utilização) is issued. Without it the house is not legally considered completed: you cannot sell, register Alojamento Local, and the mortgage bank will also require it.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance — ongoing costs',
      content: [
        { kind: 'paragraph', text: 'A septic tank must be pumped out periodically. Otherwise — overfill, odour, soil contamination.' },
        { kind: 'checklist', items: [
          'Classic septic tank: pump‑out every 1–3 years, depending on load',
          'Pump‑out price: €80–€200 (a vacuum tanker comes, empties and takes it to the municipal treatment plant)',
          'Local companies: search for "limpeza de fossa séptica" + your town — many small operators',
          'ETAR: visual check of indicators every six months',
          'ETAR maintenance contract: €100–€300/year with a specialist company',
          'Replacement of bio‑starters (bacteria for activated sludge): €30–€50 every 1–2 years',
          'Electricity for the ETAR aerator: €30–€100/year'
        ] },
        { kind: 'paragraph', text: 'Signs of overfill: hydrogen sulphide smell in the yard, slow draining in sinks and toilets, wet grass above the absorption well.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — special requirements',
      content: [
        { kind: 'paragraph', text: 'For Alojamento Local (legal tourist rental) the wastewater requirements are stricter:' },
        { kind: 'checklist', items: [
          'ETAR is mandatory (a classic septic tank is not sufficient)',
          'Capacity calculated for the maximum number of guests — usually with a 1.5x safety margin',
          'Maintenance contract is mandatory',
          'Annual inspection by the municipality or DGS (health authority)',
          'In case of issues — the AL licence is suspended until rectified',
          'In vulnerable zones (Algarve coast, parts of Alentejo) — UV sterilisation before discharge is mandatory'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsidies and support',
      content: [
        { kind: 'checklist', items: [
          'Municipal subsidies to replace a classic septic tank with ETAR — ask your municipality, especially in Algarve and Alentejo',
          'IRS (income tax) deduction for main‑residence renovation: 30% up to €1,500/year',
          'Programa Saneamento Rural — government programme for remote areas',
          'APA subsidy for switching to biological treatment in vulnerable zones',
          'Comunidade de Energia Renovável (CER): solar panel packages often include sanitation upgrades'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for violations',
      content: [
        { kind: 'checklist', items: [
          'Septic tank without a permit: €250–€2,500',
          'Septic tank breaching distance rules (e.g., next to a borehole): €1,000–€10,000 + remediation costs',
          'Direct discharge into a river or the sea: €5,000–€37,500 + criminal prosecution',
          'Alojamento Local without proper sanitation: €1,500–€7,500 + licence suspension',
          'Abandoned septic tank, groundwater contamination: €1,000–€37,500 + cleanup costs (can reach €30,000+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Classic septic tank', amountEURMin: 1500, amountEURMax: 4000, note: 'Tank + percolation field + installation' },
    { label: 'Compact ETAR', amountEURMin: 5000, amountEURMax: 15000, note: 'With installation' },
    { label: 'Engineer’s design', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Geotechnical survey', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Municipal permit', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Septic tank pump‑out', amountEURMin: 80, amountEURMax: 200, note: 'Every 1–3 years' },
    { label: 'ETAR maintenance contract', amountEURMin: 100, amountEURMax: 300, note: 'Per year' },
    { label: 'Electricity for ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Per year' }
  ],
  sources: [
    { title: 'APA — Wastewater sanitation', url: 'https://apambiente.pt/agua/saneamento-de-aguas-residuais', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto Regulamentar 23/95 — Water distribution and drainage', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 152/97 — treatment of urban wastewater', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Regulatory Authority for Water and Waste Services', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
