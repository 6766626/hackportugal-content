export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Septic tank (fossa séptica) — standards, distances, permits',
  tldr: 'If a house is not connected to the public sewer network, an autonomous wastewater treatment system is required. In Portugal this is either a classic septic tank (fossa séptica) with a soakaway, or a modern compact biological mini‑treatment plant (ETAR). Volume: ~3 m³ for 4–5 occupants. Minimum distances: ≥30 m from a well, ≥10 m from neighbouring houses, ≥5 m from the plot boundary. Installation requires an engineer’s design, a permit from the Câmara Municipal (municipality), an inspection after installation and a licence to use (licença de utilização). Price: classic septic tank €1,500–4,000, ETAR €5,000–15,000. Pump‑out by a septic tanker every 1–3 years (€80–200).',
  tags: ['septic', 'septic-tank', 'sanitation', 'etar', 'wastewater'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a septic tank is needed — scenarios',
      content: [
        { kind: 'checklist', items: [
          '🏠 House outside town without a sewer connection: you need a septic tank or ETAR',
          '🏠 Old house with an unregistered septic tank: legalisation required',
          '🏠 Extending a house (adding bathrooms): recalculate septic tank capacity',
          '🏠 Converting an anexo into a guest house or Alojamento Local (tourist letting): ETAR is usually required',
          '🏠 New build: a septic tank or ETAR is a mandatory part of the project',
          '✅ Flat in a city: nothing needed — municipal sewerage',
          '✅ House connected to the sewer main: only the monthly sewerage fee €5–15/month'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Classic septic tank vs ETAR — what to choose',
      content: [
        { kind: 'paragraph', text: 'Two main types of autonomous treatment:' },
        { kind: 'checklist', items: [
          'CLASSIC SEPTIC TANK (fossa séptica): 2–3‑chamber tank + soakaway. Cheap. Requires a lot of space (~30–50 m² for a drainage field). Pump‑out every 1–3 years.',
          'ETAR (Estação de Tratamento de Águas Residuais) — compact biological mini‑treatment plant. Compact (~2–4 m²). Activated bio‑treatment. Treated water is higher quality; it can be discharged to a drain or infiltrated into soil.',
          'COMPACT PREFABRICATED SEPTIC TANK: a modern alternative — moulded plastic with internal structure. Easier to install. Price €3,000–5,000 versus classic €1,500–3,000.'
        ] },
        { kind: 'paragraph', text: 'What to choose:' },
        { kind: 'checklist', items: [
          'Small house (2–4 people), large plot, sandy soil: a classic septic tank will do',
          'Large house (>5 people) or dense development: ETAR is preferable',
          'Business (Alojamento Local, restaurant): ETAR + maintenance contract',
          'Clay soil: ETAR is better (a soakaway works poorly in clay)',
          'Close to bodies of water (rivers, sea): modern ETAR with UV‑sterilisation',
          'If applying for a subsidy: ETAR is prioritised'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Minimum distances',
      content: [
        { kind: 'paragraph', text: 'Main regulation — Decreto Regulamentar 23/95 (Regulamento de Distribuição de Água). The Câmara Municipal may tighten requirements.' },
        { kind: 'checklist', items: [
          'From a well/borehole: ≥ 30 m (often 50 m in public water abstraction zones)',
          'From the foundations of neighbouring houses: ≥ 10 m',
          'From the plot boundary: ≥ 5 m',
          'From gardens and vegetable plots with produce: ≥ 10 m',
          'From rivers and streams: ≥ 30 m (protection zone)',
          'From a lagoon or lake: ≥ 50 m',
          'On a slope — consider the direction of groundwater flow',
          'Under a driveway or parking area: depth > 1 m with a reinforced cover'
        ] },
        { kind: 'warning', text: 'If a septic tank or soakaway is too close to a well, drinking water may be contaminated. This is a serious risk: inspections by the GNR (SEPNA eco‑patrol) and APA (environment agency) are possible, as well as fines, closure of the well, and remediation costs of €5,000–30,000.' }
      ]
    },
    {
      id: 'process',
      title: 'Installation process — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Design (for a new build or major refurbishment)',
            content: [
              { kind: 'checklist', items: [
                'Civil engineer: the sewerage design is part of the overall architectural project',
                'Geotechnical survey: what soil — permeable? clay or sand?',
                'Design: type, size, distances, drainage field',
                'Cost of the design stage: €500–1,500'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Getting a permit at the Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Via the PEDU online portal or in person at the Câmara Municipal. Submit:' },
              { kind: 'checklist', items: [
                'Caderneta predial (property registry extract)',
                'Sewerage project + explanatory memorandum (memorial descritivo)',
                'Geotechnical survey',
                'Site layout plan',
                'Fee: €100–500 (varies greatly by municipality)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Installation',
            content: [
              { kind: 'checklist', items: [
                'Find a certified drainage/sewerage contractor',
                'Earthworks: excavator hire + labour = €50–100/hour',
                'Delivery of the septic tank or ETAR to the plot: consider access width',
                'Connection to the house drains',
                'Backfilling and site reinstatement/landscaping',
                'Total installation cost: €1,500–15,000'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Inspection and licence to use',
            content: [
              { kind: 'paragraph', text: 'After installation the Câmara Municipal may send an inspector to verify compliance with the project. Based on the results they issue the licence to use (licença de utilização). Without it the house is not legally considered complete: you cannot sell, register Alojamento Local, and a mortgage bank will also require it.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance — regular expenses',
      content: [
        { kind: 'paragraph', text: 'A septic tank needs periodic pumping. Otherwise — overfilling, odour, soil contamination.' },
        { kind: 'checklist', items: [
          'Classic septic tank: pump‑out every 1–3 years, depending on load',
          'Pump‑out price: €80–200 (a septic tanker comes, pumps it out, and takes it to the municipal treatment plant)',
          'Local companies: search for "limpeza de fossa séptica" + your town — many small operators',
          'ETAR: visual check of indicators every six months',
          'ETAR maintenance contract: €100–300/year with a specialist company',
          'Replacement of bio‑starters (bacteria for activated sludge): €30–50 every 1–2 years',
          'Electricity for the ETAR aerator: €30–100/year'
        ] },
        { kind: 'paragraph', text: 'Signs of overfilling: hydrogen sulphide odour in the yard, slow drainage in sinks and toilets, wet grass over the soakaway.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — special requirements',
      content: [
        { kind: 'paragraph', text: 'For Alojamento Local (legal tourist letting) the sewerage requirements are stricter:' },
        { kind: 'checklist', items: [
          'ETAR is mandatory (a classic septic tank is not sufficient)',
          'Capacity calculated for maximum number of guests — usually with a 1.5x safety margin',
          'Maintenance contract is mandatory',
          'Annual inspection by the municipality or DGS (health authority)',
          'If there are issues — the AL licence is suspended until rectified',
          'In sensitive zones (Algarve coast, parts of Alentejo) — UV‑sterilisation before discharge is mandatory'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsidies and assistance',
      content: [
        { kind: 'checklist', items: [
          'Municipal subsidies to replace a classic septic tank with an ETAR — check with your municipality, especially in Algarve and Alentejo',
          'IRS income tax deduction for works on your primary residence: 30% up to €1,500/year',
          'Programa Saneamento Rural — state programme for remote areas',
          'APA subsidy for switching to biological treatment in sensitive zones',
          'Comunidade de Energia Renovável (CER): solar panel packages often include sewerage upgrades'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for violations',
      content: [
        { kind: 'checklist', items: [
          'Septic tank without a permit: €250–2,500',
          'Septic tank breaching distance rules (e.g., near a well): €1,000–10,000 + remediation costs',
          'Direct discharge into a river or the sea: €5,000–37,500 + criminal prosecution',
          'Alojamento Local without correct sewerage: €1,500–7,500 + suspension of the licence',
          'Neglected septic tank contaminating groundwater: €1,000–37,500 + clean‑up costs (can reach €30,000+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Classic septic tank', amountEURMin: 1500, amountEURMax: 4000, note: 'Tank + drainage field + installation' },
    { label: 'Compact ETAR', amountEURMin: 5000, amountEURMax: 15000, note: 'With installation' },
    { label: 'Engineer’s design', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Geotechnical survey', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Municipality permit', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Septic tank pump-out', amountEURMin: 80, amountEURMax: 200, note: 'Every 1–3 years' },
    { label: 'ETAR maintenance contract', amountEURMin: 100, amountEURMax: 300, note: 'Per year' },
    { label: 'Electricity for ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Per year' }
  ],
  sources: [
    { title: 'APA — Urban Wastewater', url: 'https://apambiente.pt/agua/aguas-residuais-urbanas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto Regulamentar 23/95 — Water Distribution and Drainage', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 152/97 — treatment of urban wastewater', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Regulatory Authority for Water and Waste Services', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
