export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Septic tank (fossa séptica) — rules, distances, permits',
  tldr: 'If a house is not connected to the public sewerage network, it needs an autonomous wastewater treatment system.\n\nIn Portugal this is either a classic septic tank (fossa séptica) with a soakaway, or a modern compact ETAR biological treatment mini-plant. Volume: ~3 m³ for 4–5 residents. Minimum distances: ≥30 m from a borehole/well, ≥10 m from neighbouring houses, ≥5 m from the plot boundary. Installation requires a project by an engineer, permission from the Câmara Municipal (municipality), a technical inspection after installation, and an operating/use permit (licença de utilização).\n\nCost: classic septic tank €1,500-4,000, ETAR €5,000-15,000. Pump-out by a cesspit tanker every 1–3 years (€80-200).',
  tags: ['septic-tank', 'sewerage', 'etar', 'wastewater', 'sanitation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a septic tank is needed — scenarios',
      content: [
        { kind: 'checklist', items: [
          '🏠 House outside town without a sewer connection: a septic tank or ETAR is needed',
          '🏠 Old house with an unregistered septic tank: legalisation is needed',
          '🏠 House extension (adding bathrooms): septic tank volume must be recalculated',
          '🏠 Converting an outbuilding (anexo) into a guest house or Alojamento Local (tourist rental): an ETAR is usually required',
          '🏠 New build: a septic tank or ETAR is a mandatory part of the project',
          '✅ Flat in town: nothing is needed — mains sewerage',
          '✅ House connected to the sewer collector: only a monthly sewerage charge of €5-15/month'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Classic septic tank vs ETAR — what to choose',
      content: [
        { kind: 'paragraph', text: 'The two main types of autonomous treatment:' },
        { kind: 'checklist', items: [
          'CLASSIC SEPTIC TANK (fossa séptica): 2–3-chamber tank + soakaway. Cheap. Requires a lot of space (~30–50 m² for the filtration field). Pump-out every 1–3 years.',
          'ETAR (Estação de Tratamento de Águas Residuais) — biological treatment mini-plant. Compact (~2–4 m²). Active biological treatment. Treated water is of higher quality and can be discharged to drainage or into the soil.',
          'COMPACT PREFABRICATED SEPTIC TANK: a modern alternative — moulded plastic with an internal structure. Easier to install. Price €3,000-5,000 versus €1,500-3,000 for a classic system.'
        ] },
        { kind: 'paragraph', text: 'What to choose:' },
        { kind: 'checklist', items: [
          'Small house (2–4 people), large plot, sandy soil: a classic septic tank will be suitable',
          'Large house (>5 people) or dense development: ETAR is preferable',
          'Business (Alojamento Local, restaurant): ETAR + maintenance contract',
          'Clay soil: ETAR is better (a soakaway works poorly in clay)',
          'Close to bodies of water (rivers, sea): modern ETAR with UV sterilisation',
          'If you are applying for a subsidy: ETAR has priority'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Minimum distances',
      content: [
        { kind: 'paragraph', text: 'The main regulation is Decreto Regulamentar 23/95 (Regulamento de Distribuição de Água). The Câmara Municipal may impose stricter requirements.' },
        { kind: 'checklist', items: [
          'From a borehole/well: ≥ 30 m (often 50 m in public water abstraction zones)',
          'From the foundations of neighbouring houses: ≥ 10 m',
          'From the plot boundary: ≥ 5 m',
          'From gardens and vegetable plots growing food: ≥ 10 m',
          'From rivers and streams: ≥ 30 m (protection zone)',
          'From a lagoon or lake: ≥ 50 m',
          'On a slope — take account of the direction of groundwater flow',
          'Under a driveway or parking area: depth > 1 m with a reinforced cover'
        ] },
        { kind: 'warning', text: 'If the septic tank or soakaway is too close to a borehole/well, drinking water may become contaminated. This is a serious risk: there may be an inspection by the GNR (SEPNA environmental patrol) and APA (environment agency), fines, closure of the borehole/well, and remediation costs of €5,000-30,000.' }
      ]
    },
    {
      id: 'process',
      title: 'Installation process — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Project (for a new build or major renovation)',
            content: [
              { kind: 'checklist', items: [
                'Civil engineer: sewerage project — part of the overall architectural project',
                'Geotechnical survey: what soil — permeable? clay or sand?',
                'Design: type, size, distances, filtration field',
                'Cost of the project element: €500-1,500'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Obtaining permission from the Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Via the PEDU online portal or in person at the Câmara Municipal. You submit:' },
              { kind: 'checklist', items: [
                'Caderneta predial (property record extract)',
                'Sewerage project + explanatory statement (memorial descritivo)',
                'Geotechnical survey',
                'Site layout plan',
                'Fee: €100-500 (varies heavily by municipality)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Installation',
            content: [
              { kind: 'checklist', items: [
                'Find a certified sewerage contractor',
                'Earthworks: excavator hire + labour = €50-100/hour',
                'Delivery of the septic tank or ETAR to the plot: consider access width',
                'Connection to the house sewerage system',
                'Backfilling and landscaping',
                'Total works cost: €1,500-15,000'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Technical inspection and operating/use permit',
            content: [
              { kind: 'paragraph', text: 'After installation, the Câmara Municipal may send an inspector to check conformity with the project. Based on the results, an operating/use permit (licença de utilização) is issued. Without it, the house is not legally considered complete: you cannot sell it, register Alojamento Local, and a mortgage bank will also require it.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance — regular costs',
      content: [
        { kind: 'paragraph', text: 'A septic tank must be pumped out periodically. Otherwise — overflow, smell, soil contamination.' },
        { kind: 'checklist', items: [
          'Classic septic tank: pump-out every 1–3 years, depending on load',
          'Pump-out price: €80-200 (a cesspit tanker arrives, pumps it out, and takes it to the municipal treatment plant)',
          'Local companies: search for "limpeza de fossa séptica" + town name — there are many small operators',
          'ETAR: visual check of indicators every six months',
          'ETAR maintenance contract: €100-300/year with a specialist company',
          'Replacement of biostarters (bacteria for activated sludge): €30-50 every 1–2 years',
          'Electricity for the ETAR aerator: €30-100/year'
        ] },
        { kind: 'paragraph', text: 'Signs of overflow: hydrogen sulphide smell in the yard, slow drainage in sinks and toilets, wet grass above the soakaway.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — special requirements',
      content: [
        { kind: 'paragraph', text: 'For Alojamento Local (legal tourist rental), sewerage requirements are stricter:' },
        { kind: 'checklist', items: [
          'ETAR is mandatory (a classic septic tank is not enough)',
          'Volume calculation based on the maximum number of guests — usually with a 1.5x safety margin',
          'A maintenance contract is mandatory',
          'Annual inspection by the municipality or DGS (health service)',
          'If there are problems — the AL licence is suspended until they are resolved',
          'In vulnerable zones (Algarve coast, part of Alentejo) — UV sterilisation before discharge is mandatory'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsidies and support',
      content: [
        { kind: 'checklist', items: [
          'Municipal subsidies for replacing a classic septic tank with an ETAR — ask your municipality, especially in the Algarve and Alentejo',
          'IRS (income tax) tax deduction for renovation of your main home: 30% up to €1,500/year',
          'Programa Saneamento Rural — state programme for remote areas',
          'APA subsidy for switching to biological treatment in vulnerable zones',
          'Comunidade de Energia Renovável (CER): a package with solar panels often includes sewerage modernisation'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for breaches',
      content: [
        { kind: 'checklist', items: [
          'Septic tank without permission: €250-2,500',
          'Septic tank breaching distance rules (for example next to a borehole/well): €1,000-10,000 + remediation costs',
          'Direct discharge into a river or the sea: €5,000-37,500 + criminal prosecution',
          'Alojamento Local without proper sewerage: €1,500-7,500 + licence suspension',
          'Abandoned septic tank, groundwater contamination: €1,000-37,500 + clean-up costs (may reach €30,000+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Classic septic tank', amountEURMin: 1500, amountEURMax: 4000, note: 'Tank + filtration field + installation' },
    { label: 'Compact ETAR', amountEURMin: 5000, amountEURMax: 15000, note: 'With installation' },
    { label: 'Engineer’s project', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Geotechnical survey', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Municipal permission', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Septic tank pump-out', amountEURMin: 80, amountEURMax: 200, note: 'Every 1-3 years' },
    { label: 'ETAR maintenance contract', amountEURMin: 100, amountEURMax: 300, note: 'Per year' },
    { label: 'Electricity for ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Per year' }
  ],
  sources: [
    { title: 'APA — Urban Wastewater', url: 'https://apambiente.pt/agua/aguas-residuais-urbanas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto Regulamentar 23/95 — Water Distribution and Drainage', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 152/97 — urban wastewater treatment', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Regulatory Authority for Water and Waste Services', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
