export default {
  editorialVoice: 'hackportugal',
  id: 'fossa-septica-saneamento',
  categoryId: 'housing_buy',
  title: 'Septic tank (fossa séptica) — rules, distances, permits',
  tldr: 'If a house is not connected to the public sewerage network, autonomous wastewater treatment is needed.\n\nIn Portugal this is either a classic septic tank (fossa séptica) with a soakaway, or a modern compact mini biological treatment plant, ETAR. Capacity: ~3 m³ for 4–5 residents. Minimum distances: ≥30 m from a borehole/well, ≥10 m from neighbouring houses, ≥5 m from the plot boundary. Installation requires a design by an engineer, permission from the Câmara Municipal (municipality), an inspection after installation, and permission to put it into use (licença de utilização)\.\n\nPrice: classic septic tank €1,500-4,000, ETAR €5,000-15,000. Emptying by a cesspit tanker every 1–3 years (€80-200).',
  tags: ['septic', 'tank', 'sewerage', 'etar', 'wastewater'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a septic tank is needed — scenarios',
      content: [
        { kind: 'checklist', items: [
          '🏠 House outside town without a sewerage connection: a septic tank or ETAR is needed',
          '🏠 Old house with an unregistered septic tank: legalisation is needed',
          '🏠 House extension (adding bathrooms): septic tank capacity must be recalculated',
          '🏠 Converting an outbuilding (anexo) into a guest house or Alojamento Local (tourist letting): an ETAR is usually required',
          '🏠 New build: septic tank or ETAR is a mandatory part of the project',
          '✅ Flat in town: nothing is needed — municipal sewerage',
          '✅ House connected to the collector: only a monthly sewerage charge of €5-15/month'
        ] }
      ]
    },
    {
      id: 'fossa-vs-etar',
      title: 'Classic septic tank vs ETAR — what to choose',
      content: [
        { kind: 'paragraph', text: 'There are two main types of autonomous treatment:' },
        { kind: 'checklist', items: [
          'CLASSIC SEPTIC TANK (fossa séptica): 2–3-chamber tank + soakaway. Cheap. Requires a lot of space (~30–50 m² for the filtration field). Emptying every 1–3 years.',
          'ETAR (Estação de Tratamento de Águas Residuais) — mini biological treatment plant. Compact (~2–4 m²). Active biological treatment. The treated water is of better quality and can be discharged to drainage or into the soil.',
          'COMPACT PREFABRICATED SEPTIC TANK: a modern alternative — moulded plastic with an internal structure. Easier to install. Price €3,000-5,000 versus €1,500-3,000 for a classic one.'
        ] },
        { kind: 'paragraph', text: 'What to choose:' },
        { kind: 'checklist', items: [
          'Small house (2–4 people), large plot, sandy soil: a classic septic tank will work',
          'Large house (>5 people) or dense development: ETAR is preferable',
          'Business (Alojamento Local, restaurant): ETAR + maintenance contract',
          'Clay soil: ETAR is better (a soakaway works poorly in clay)',
          'Close to water bodies (rivers, sea): modern ETAR with UV sterilisation',
          'If you are applying for a subsidy: ETAR has priority'
        ] }
      ]
    },
    {
      id: 'distances',
      title: 'Minimum distances',
      content: [
        { kind: 'paragraph', text: 'Correct to: “The basic rules for network design are in Decreto Regulamentar 23/95 (Regulamento Geral dos Sistemas Públicos e Prediais de Distribuição de Água e de Drenagem de Águas Residuais). But for autonomous treatment, the municipal regulamento de saneamento, RJUE and the water resources regime are also important: Lei da Água / DL 226-A/2007, especially if there is discharge or infiltration”.' },
        { kind: 'checklist', items: [
          'From a borehole/well: ≥ 30 m (often 50 m in public water abstraction zones)',
          'From the foundations of neighbouring houses: ≥ 10 m',
          'From the plot boundary: ≥ 5 m',
          'From gardens and vegetable plots with food crops: ≥ 10 m',
          'From rivers and streams: ≥ 30 m (protection zone)',
          'From a lagoon or lake: ≥ 50 m',
          'On a slope — take account of the direction of groundwater flow',
          'Under a driveway or parking area: depth > 1 m with a reinforced cover'
        ] },
        { kind: 'warning', text: 'If the septic tank or soakaway is too close to a borehole/well, drinking water can become contaminated. This is a serious risk: an inspection by the GNR (SEPNA eco-patrol) and APA (environment agency) is possible, as are fines, closure of the borehole/well and remediation costs of €5,000-30,000.' }
      ]
    },
    {
      id: 'process',
      title: 'Installation process — step by step',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Design (for a new build or major renovation)',
            content: [
              { kind: 'checklist', items: [
                'Civil engineer: sewerage design — part of the overall architectural project',
                'Geotechnical survey: what is the soil like — permeable? clay or sand?',
                'Design: type, size, distances, filtration field',
                'Cost of the design part: €500-1,500'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Obtaining permission from the Câmara Municipal',
            content: [
              { kind: 'paragraph', text: 'Write: “Submission is made through the balcão urbanístico/online services of the specific Câmara Municipal or in person; the platform name depends on the municipality. For APA/ARH licences, SILiAmb is used”. The following are submitted:' },
              { kind: 'checklist', items: [
                'Caderneta predial (property tax record extract)',
                'Sewerage design + explanatory report (memorial descritivo)',
                'Geotechnical survey',
                'Site layout plan',
                'Fee: €100-500 (varies greatly by municipality)'
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
                'Delivery of the septic tank or ETAR to the site: account for access width',
                'Connection to the house sewerage system',
                'Backfilling and landscaping',
                'Total cost of works: €1,500-15,000'
              ] }
            ]
          },
          {
            id: 's4',
            title: 'Inspection and permission to put into use',
            content: [
              { kind: 'paragraph', text: 'After installation, the Câmara Municipal may send an inspector to check compliance with the design. Rewrite: “After the works, the construction/legalisation procedure must be closed with the Câmara and the applicable documents obtained/kept: projetos, termos de responsabilidade, comprovativos de comunicação/licenciamento, ficha técnica/elementos urbanísticos. Banks, AL and buyers may require proof of the legality and compliance of the property, but the form of the document depends on the procedure and date”.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance — regular costs',
      content: [
        { kind: 'paragraph', text: 'A septic tank must be emptied periodically. Otherwise — overflow, odour, soil contamination.' },
        { kind: 'checklist', items: [
          'Classic septic tank: emptying every 1–3 years, depending on load',
          'Emptying price: €80-200 (a cesspit tanker comes, pumps it out, and takes it to the municipal treatment plant)',
          'Local companies: search for "limpeza de fossa séptica" + town name — there are many small operators',
          'ETAR: visual check of indicators every six months',
          'ETAR maintenance contract: €100-300/year with a specialised company',
          'Replacement of bio-starters (bacteria for activated sludge): €30-50 every 1–2 years',
          'Electricity for the ETAR aerator: €30-100/year'
        ] },
        { kind: 'paragraph', text: 'Signs of overflow: hydrogen sulphide smell in the yard, slow drainage in sinks and toilets, wet grass above the soakaway.' }
      ]
    },
    {
      id: 'al-business',
      title: 'Alojamento Local — special requirements',
      content: [
        { kind: 'paragraph', text: 'For Alojamento Local (legal tourist letting), sewerage requirements are stricter:' },
        { kind: 'checklist', items: [
          'ETAR is mandatory (a classic septic tank is not enough)',
          'Capacity calculation based on the maximum number of guests — usually with a 1.5x safety margin',
          'A maintenance contract is mandatory',
          'Replace with: “The municipality may carry out AL inspections, and the autoridade de saúde may intervene where there are sanitary risks or following a request/complaint. The frequency and scope of inspections depend on the municipality and the specific licence/project”.',
          'If there are problems — the AL licence is suspended until they are resolved',
          'Write: “In sensitive areas, near águas balneares, water abstractions or where there is reutilização da água, APA/ARH or Câmara may require additional disinfection, including UV, but this is determined in the design and licence conditions”.'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsidies and support',
      content: [
        { kind: 'checklist', items: [
          'Municipal subsidies for replacing a classic septic tank with an ETAR — ask your municipality, especially in the Algarve and Alentejo',
          'Tax deduction in IRS (income tax) for repairs to the main home: 30% up to €1,500/year',
          'Replace with: “Check the specific avisos with the Câmara, entidade gestora de águas/saneamento, CCDR/Portugal 2030/PRR. A permanent national subsidy for private septic tank installation under such a name should not be cited without a current aviso”.',
          'Write: “There are sometimes Fundo Ambiental/APA/CCDR/municipality avisos for water protection or environmental projects, but they are not permanent and usually have narrow criteria. Check currently open avisos”.',
          'Delete this item. If a practical tip needs to remain: “Contractors sometimes offer comprehensive works packages, but CER itself is not a sewerage subsidy programme”.'
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
          'Abandoned septic tank, groundwater contamination: €1,000-37,500 + clean-up costs (can reach €30,000+)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Classic septic tank', amountEURMin: 1500, amountEURMax: 4000, note: 'Tank + filtration field + installation' },
    { label: 'Compact ETAR', amountEURMin: 5000, amountEURMax: 15000, note: 'With installation' },
    { label: 'Engineer design', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Geotechnical survey', amountEURMin: 300, amountEURMax: 800 },
    { label: 'Municipal permission', amountEURMin: 100, amountEURMax: 500 },
    { label: 'Septic tank emptying', amountEURMin: 80, amountEURMax: 200, note: 'Every 1-3 years' },
    { label: 'ETAR maintenance contract', amountEURMin: 100, amountEURMax: 300, note: 'Per year' },
    { label: 'Electricity for ETAR', amountEURMin: 30, amountEURMax: 100, note: 'Per year' }
  ],
  sources: [
    { title: 'APA — Urban Wastewater', url: 'https://apambiente.pt/agua/aguas-residuais-urbanas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Regulatory Decree 23/95 — Water Distribution and Drainage', url: 'https://dre.pt/dre/detalhe/decreto-regulamentar/23-1995-431007', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decree-Law 152/97 — urban wastewater treatment', url: 'https://dre.pt/dre/detalhe/decreto-lei/152-1997-217470', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ERSAR — Water and Waste Services Regulatory Authority', url: 'https://www.ersar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
