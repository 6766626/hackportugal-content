export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Borehole (furo) on your plot — APA / ARH licence',
  tldr: 'Any water abstraction borehole on your plot (for irrigation, domestic use, pool) requires registration or a licence from APA (Agência Portuguesa do Ambiente — environment agency) / ARH (Administração da Região Hidrográfica — regional water resources administration). No licence — fines of €1,500–€37,500 + possible requirement to close the borehole. Registration (for domestic use up to 5 m³/day) is free of charge, a licence (for larger volumes or commercial use) ~€50–€300 + a hydrogeologist\'s design. Timelines: registration almost immediately, licence 60–90 days. Prohibited: drilling closer than 50 m to a septic tank (fossa séptica), in public water abstraction zones, and without a design for depth >100 m. Heat pump installation is also regulated.',
  tags: ['borehole', 'water', 'apa', 'arh', 'well', 'abstraction'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Why a licence — law and reality',
      content: [
        { kind: 'paragraph', text: 'In Portugal all water (rivers, lakes, surface and groundwater) is owned by the state. The use of groundwater is regulated by Decreto-Lei 226-A/2007 (Lei da Água — Water Law). Without a licence or registration it is illegal to use water from a private borehole even on your own plot.' },
        { kind: 'checklist', items: [
          'Water supply for domestic use: 100–300 l/day per person — considered domestic use',
          'Garden/vegetable patch irrigation up to 5 m³/day in total — domestic use',
          'Swimming pool (100–200 m³ per season) — already above the domestic use limit',
          'Business (tourist accommodation Alojamento Local (AL), farming) — a licence is definitely required',
          'Firefighting reserve — separate registration',
          'Geothermal (heat pump) — separately regulated by DGEG'
        ] },
        { kind: 'warning', text: 'Many old boreholes on rural estates (quintas) were built before 2007 and are NOT registered. If you bought such a property, you usually have 6–12 months to regularise everything. Since 2024, there has been more active criminal prosecution and enforcement in Algarve and Alentejo (arid regions where water is scarce).' }
      ]
    },
    {
      id: 'registo-vs-licenca',
      title: 'Registration vs licence — what is the difference',
      content: [
        { kind: 'checklist', items: [
          'REGISTRATION (application) — for:',
          '  • Domestic use up to 5 m³/day',
          '  • A dug well up to 5 m deep',
          '  • Existing boreholes prior to 2007',
          '  • Essentially free (~€30 admin fee)',
          '  • Submission at the Junta de Freguesia (local parish council) or via ePortugal (public services portal)',
          '  • Timeline: regularisation within 30–60 days',
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
            title: 'Collect the documents',
            content: [
              { kind: 'checklist', items: [
                'Caderneta Predial (land cadastre extract) for the plot',
                'Certidão de Teor (extract from the Conservatória — land registry office)',
                'Map with the borehole location (GPS)',
                'Photos of the borehole and surrounding area',
                'Description of use: what the water is for (irrigation, domestic)',
                'Estimated volumes: litres/day'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submission',
            content: [
              { kind: 'paragraph', text: 'Via ePortugal (public services portal): Cidadão → Ambiente → Pedido de Registo de Furo. Authorisation via Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Alternatively — in person at an ARH office (5 regions: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Receive the certificate',
            content: [
              { kind: 'paragraph', text: 'The regularisation certificate arrives by email and regular post. This is the proof you can show APA inspectors.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Licence — for higher consumption',
      content: [
        { kind: 'paragraph', text: 'More complex and requires a professional design.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Find a hydrogeologist',
            content: [
              { kind: 'paragraph', text: 'A hydrogeologist engineer — must be registered with the Ordem dos Engenheiros. They will:' },
              { kind: 'checklist', items: [
                'Prepare a hydrogeological justification study (€1,500–€3,500)',
                'Produce the technical design (drilling plan, safety measures, management)',
                'Draft the explanatory memorandum for APA',
                'Provide a regional hydrogeological map',
                'Estimate yield and water quality',
                'Assess risks to neighbouring boreholes and aquifers'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submit to ARH',
            content: [
              { kind: 'paragraph', text: 'With the hydrogeologist\'s design. Via the ARH Online portal, login through Chave Móvel Digital (CMD), payment ~€50–€300. ARH assessment: 60–180 days (often longer due to opinions from DRAP — the agriculture and fisheries directorate, and ICNF — nature conservation institute, if the plot is in a protected area).' }
            ]
          },
          {
            id: 's3',
            title: 'Drilling',
            content: [
              { kind: 'paragraph', text: 'Only after receiving the licence. The drilling contractor must be registered with ANEFA (Associação Nacional de Empresas de Furos de Água). Cost: €50–€150 per metre of depth. A standard borehole 50–100 m = €3,000–€15,000.' }
            ]
          },
          {
            id: 's4',
            title: 'Final technical inspection',
            content: [
              { kind: 'paragraph', text: 'After drilling, ARH checks compliance with the design. Any non-conformities may require corrections.' }
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
          '🛑 Sanitary protection zones of public water abstractions (municipal drinking water supply): total ban',
          '🛑 Less than 50 m from a septic tank',
          '🛑 Less than 100 m from a cemetery',
          '🛑 Less than 50 m from a soakaway field (infiltration pits)',
          '🛑 Less than 200 m from an industrial site',
          '🛑 In RAN/REN zones (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — sometimes a ban, sometimes additional approvals',
          '🛑 In protected oil/gas pipeline corridors',
          '🛑 In geological risk zones (unstable ground)',
          'In Algarve and Alentejo — particularly strict rules due to confined aquifers'
        ] },
        { kind: 'paragraph', text: 'There are also nitrate vulnerable zones (zonas vulneráveis) due to agricultural pollution — especially in Algarve and parts of Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Water quality and mandatory tests',
      content: [
        { kind: 'paragraph', text: 'If you use the water for drinking in the home — tests are mandatory.' },
        { kind: 'checklist', items: [
          'Microbiological analysis: E.coli, coliforms, enterococci. At least once a year',
          'Chemical analysis: pH, nitrates, sulphates, chlorides, heavy metals',
          'Cost: €50–€150 for a full test in a private laboratory',
          'Accredited laboratories: Águas do Portugal, IST Lab, Edibon',
          'If for commercial use (restaurants, Alojamento Local (AL)): tests quarterly + specific certificates',
          'If in Algarve/Alentejo: add a nitrate test — often exceeded due to intensive agriculture',
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
          'Borehole without a licence (individual): €1,500–€37,500',
          'Borehole without a licence (legal entity): up to €2,500,000',
          'Exceeding the permitted volume: €500–€25,000',
          'Drilling in a protected zone: €5,000–€37,500',
          'Use of the public water supply network for commercial consumption without a licence: criminal prosecution',
          'Decommissioning an abandoned borehole — owner\'s obligation; €1,000–€10,000 if not done and someone is harmed'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registration (application) for a simple borehole', amountEURMin: 0, amountEURMax: 30 },
    { label: 'APA/ARH licence', amountEURMin: 50, amountEURMax: 300, note: 'Admin fee' },
    { label: 'Hydrogeological study', amountEURMin: 1500, amountEURMax: 3500, note: 'Hydrogeologist engineer' },
    { label: 'Drilling a 50 m borehole', amountEURMin: 3000, amountEURMax: 7500, note: 'Standard borehole for domestic use' },
    { label: 'Drilling a 100 m borehole', amountEURMin: 7500, amountEURMax: 15000 },
    { label: 'Installation of a submersible pump', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Reservoir / pressure vessel', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Annual water analysis', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Installation of UV + filtration system', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Fine for a borehole without a licence', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Portuguese Environment Agency', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Activities of exploration and abstraction of groundwater', url: 'https://apambiente.pt/agua/atividade-de-pesquisa-e-de-captacao-de-aguas-subterraneas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — National Association of Water Borehole Companies', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
