export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Borehole (furo) on your plot — APA / ARH licence',
  tldr: 'Any water abstraction borehole on your plot (for irrigation, household use, a swimming pool) requires registration or a licence from APA (Agência Portuguesa do Ambiente — environmental protection agency) / ARH (Administração da Região Hidrográfica — regional water resources administration). No licence — fines of €1,500–€37,500 + a possible requirement to close the borehole. Registration (for household use up to 5 m³/day) is free, a licence (for larger volumes or commercial use) is ~€50–€300 + a hydrogeologist’s project. Timelines: registration almost immediately, licence 60–90 days. Prohibited: drilling within 50 m of a septic tank (fossa séptica), in public water abstraction zones, and without a project at depths >100 m. Installing a heat pump is also regulated.',
  tags: ['borehole', 'water', 'apa', 'arh', 'well', 'abstraction'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Why a licence is needed — the law and the reality',
      content: [
        { kind: 'paragraph', text: 'In Portugal, all water (rivers, lakes, surface water and groundwater) belongs to the state. The use of groundwater is regulated by Decreto-Lei 226-A/2007 (Lei da Água — Water Law). Without a licence or registration, it is illegal to use water from a private borehole even on your own plot.' },
        { kind: 'checklist', items: [
          'Water supply for household use: 100–300 l/day per person — considered household use',
          'Watering a garden/vegetable plot up to 5 m³/day in total — household use',
          'Swimming pool (€100–€200 m³ per season) — already above the household use limit',
          'Business (tourist rental Alojamento Local (AL), farming) — a licence is definitely needed',
          'Firefighting reserve — separate registration',
          'Geothermal energy (heat pump) — regulated separately by DGEG'
        ] },
        { kind: 'warning', text: 'Many old boreholes on rural estates (quintas) were built before 2007 and are NOT registered. If you bought such a property, you usually have 6–12 months to regularise everything. Since 2024, criminal enforcement and inspections have been more active in the Algarve and Alentejo (dry regions where water is scarce).' }
      ]
    },
    {
      id: 'registo-vs-licenca',
      title: 'Registration vs licence — what is the difference',
      content: [
        { kind: 'checklist', items: [
          'REGISTRATION (declaration) — for:',
          '  • Household use up to 5 m³/day',
          '  • A dug well up to 5 m deep',
          '  • Boreholes already existing before 2007',
          '  • Essentially free (~€30 administrative fee)',
          '  • Submission at the Junta de Freguesia (local parish council) or via ePortugal (public services portal)',
          '  • Timeline: regularisation in 30–60 days',
          'LICENCE — for:',
          '  • Use > 5 m³/day',
          '  • Depth > 5 m (drilled borehole)',
          '  • Commercial use',
          '  • Swimming pool, irrigation systems',
          '  • Heat pump (geothermal)',
          '  • Cost: €50–€300 + hydrogeologist services',
          '  • Submission to ARH or APA',
          '  • Timeline: 60–180 days'
        ] }
      ]
    },
    {
      id: 'how-to-register',
      title: 'Registration — the simple case',
      content: [
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Gather the documents',
            content: [
              { kind: 'checklist', items: [
                'Caderneta Predial (cadastral extract) for the plot',
                'Certidão de Teor (extract from the Conservatória — registry office)',
                'Map showing the borehole location (GPS)',
                'Photos of the borehole and the area',
                'Description of use: what the water is for (irrigation, household)',
                'Volume estimate: litres/day'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submission',
            content: [
              { kind: 'paragraph', text: 'Via ePortugal (public services portal): Cidadão → Ambiente → Pedido de Registo de Furo. Authentication via Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Alternatively — in person at ARH (5 regions: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Receiving the certificate',
            content: [
              { kind: 'paragraph', text: 'The regularisation certificate arrives by email and ordinary post. This is the confirmation that can be shown to APA inspectors.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Licence — for larger-scale use',
      content: [
        { kind: 'paragraph', text: 'More complex and requires a professional project.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Find a hydrogeologist',
            content: [
              { kind: 'paragraph', text: 'A hydrogeological engineer — must be registered with the Ordem dos Engenheiros (engineers’ association). They prepare:' },
              { kind: 'checklist', items: [
                'Hydrogeological justification study (€1,500–€3,500)',
                'Technical project (drilling plan, safety measures, management)',
                'Explanatory note for APA',
                'Hydrogeological map of the region',
                'Assessment of water flow rate and quality',
                'Risk assessment for neighbouring boreholes and aquifers'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submission to ARH',
            content: [
              { kind: 'paragraph', text: 'With the hydrogeologist’s project. Via the ARH Online portal, authentication via Chave Móvel Digital (CMD), payment ~€50–€300. ARH review: 60–180 days (often longer due to consultations with DRAP — agriculture and fisheries directorate, and ICNF — nature conservation institute, if the plot is in a protected area).' }
            ]
          },
          {
            id: 's3',
            title: 'Drilling',
            content: [
              { kind: 'paragraph', text: 'Only after obtaining the licence. The drilling contractor must be registered with ANEFA (Associação Nacional de Empresas de Furos de Água). Cost: €50–€150/m of depth. Standard 50–100 m borehole = €3,000–€15,000.' }
            ]
          },
          {
            id: 's4',
            title: 'Final technical inspection',
            content: [
              { kind: 'paragraph', text: 'After drilling, ARH checks compliance with the project. Any non-compliance found may require remedial work.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'restrictions',
      title: 'Where you CANNOT drill',
      content: [
        { kind: 'checklist', items: [
          '🛑 Sanitary protection zones for public water abstractions (municipal drinking water supply): complete ban',
          '🛑 Less than 50 m from a septic tank',
          '🛑 Less than 100 m from a cemetery',
          '🛑 Less than 50 m from a drainage field (soakaways)',
          '🛑 Less than 200 m from an industrial site',
          '🛑 In RAN/REN zones (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — sometimes a ban, sometimes additional approvals',
          '🛑 In protection zones for oil and gas pipelines',
          '🛑 In geological risk zones (unstable ground)',
          'In the Algarve and Alentejo — particularly strict rules due to confined aquifers'
        ] },
        { kind: 'paragraph', text: 'There are also nitrate vulnerable zones (zonas vulneráveis) due to agricultural pollution — especially in the Algarve and parts of Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Water quality and mandatory tests',
      content: [
        { kind: 'paragraph', text: 'If you use the water for drinking in the house — tests are mandatory.' },
        { kind: 'checklist', items: [
          'Microbiological analysis: E.coli, coliforms, enterococci. At least once a year',
          'Chemical analysis: pH, nitrates, sulphates, chlorides, heavy metals',
          'Cost: €50–€150 for a full test at a private laboratory',
          'Accredited laboratories: Águas do Portugal, IST Lab, Edibon',
          'If for commercial use (restaurants, Alojamento Local (AL)): quarterly tests + special certificates',
          'If in the Algarve/Alentejo: add a nitrate test — levels are often exceeded due to intensive agriculture',
          'Treatment: UV for microbes, reverse osmosis for salts/chemicals, cartridge filters for suspended solids'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines',
      content: [
        { kind: 'checklist', items: [
          'Borehole without registration (individual): €250–€1,500',
          'Borehole without licence (individual): €1,500–€37,500',
          'Borehole without licence (company): up to €2,500,000',
          'Exceeding the permitted volume: €500–€25,000',
          'Drilling in a protected area: €5,000–€37,500',
          'Use of the public water supply network for commercial consumption without a licence: criminal prosecution',
          'Decommissioning an abandoned borehole is the owner’s obligation; €1,000–€10,000 if not done and someone is harmed'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registration (declaration) of a simple borehole', amountEURMin: 0, amountEURMax: 30 },
    { label: 'APA/ARH licence', amountEURMin: 50, amountEURMax: 300, note: 'Administrative fee' },
    { label: 'Hydrogeological study', amountEURMin: 1500, amountEURMax: 3500, note: 'Hydrogeological engineer' },
    { label: 'Drilling a 50 m borehole', amountEURMin: 3000, amountEURMax: 7500, note: 'Standard borehole for household use' },
    { label: 'Drilling a 100 m borehole', amountEURMin: 7500, amountEURMax: 15000 },
    { label: 'Submersible pump installation', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Tank / pressure vessel', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Annual water analysis', amountEURMin: 50, amountEURMax: 150 },
    { label: 'UV + filter system installation', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Fine for a borehole without a licence', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Groundwater prospecting and abstraction activity', url: 'https://apambiente.pt/agua/atividade-de-pesquisa-e-de-captacao-de-aguas-subterraneas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — National Association of Water Borehole Companies', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
