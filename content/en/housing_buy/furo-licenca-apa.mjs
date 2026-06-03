export default {
  editorialVoice: 'hackportugal',
  id: 'furo-licenca-apa',
  categoryId: 'housing_buy',
  title: 'Borehole (furo) on your plot — APA / ARH licence',
  tldr: 'Any water-abstraction borehole on your plot (for irrigation, domestic use, a swimming pool) requires registration or a licence from APA (Agência Portuguesa do Ambiente — Portuguese Environment Agency) / ARH (Administração da Região Hidrográfica — regional water resources administration). No licence — fines of €1,500–€37,500 + a possible requirement to close the borehole. Registration (for domestic use up to 5 m³/day) is free; a licence (for larger volumes or commercial use) is ~€50–€300 + a hydrogeologist’s project.\n\nTimeframes: registration almost immediately, licence 60–90 days. Prohibited: drilling closer than 50 m to a septic tank (fossa séptica), in public water-abstraction zones, and without a project where depth is >100 m. Installing a heat pump is also regulated.',
  tags: ['borehole', 'water', 'apa', 'arh', 'well', 'abstraction'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-license',
      title: 'Why a licence is needed — the law and reality',
      content: [
        { kind: 'paragraph', text: 'Water belongs either to the public water domain or to private water resources, but the abstraction of groundwater — even on a private plot — is regulated by the Lei da Água and the Regime de Utilização dos Recursos Hídricos. An APA/ARH title is usually required: a prior communication (comunicação prévia), an authorisation (autorização) or a licence (licença). The use of groundwater is regulated by Decreto-Lei 226-A/2007 (Lei da Água — the Water Law). Without such a title or registration, it is illegal to use water from a private borehole even on your own plot.' },
        { kind: 'checklist', items: [
          'Water supply for domestic use: 100–300 l/day per person — considered domestic use',
          'Irrigation of a garden/vegetable plot up to 5 m³/day in total — domestic use',
          'Swimming pool: look at the actual daily abstraction volume, the water source and the purpose of the property. A one-off filling may exceed 5 m³/day; a seasonal volume of 100–200 m³ by itself does not prove that the daily limit has been exceeded',
          'For AL, a restaurant, turismo rural, agricultural production and any other commercial/public use, do not rely on the domestic regime: check with APA/ARH which title is needed, and also the ERSAR/health rules for water intended for human consumption',
          'Fire-fighting reserve — separate registration',
          'Geothermal energy (heat pump) — regulated separately by DGEG'
        ] },
        { kind: 'warning', text: 'Many old boreholes on rural estates (quintas) were built before 2007 and are NOT registered. If you bought such a property, you usually have 6–12 months to regularise everything. Enforcement in drought-prone regions, especially the Algarve and Alentejo where water is scarce, may be stricter: breaches usually lead to an administrative offence (contraordenação), fines, an embargo or cessation of use (embargo/cessação da utilização) and a requirement to close or legalise the abstraction (captação). Criminal liability is possible only in certain serious cases.' }
      ]
    },
    {
      id: 'registo-vs-licenca',
      title: 'Registration vs licence — what is the difference',
      content: [
        { kind: 'checklist', items: [
          'REGISTRATION (declaration) — for:',
          '  • Domestic use up to 5 m³/day',
          '  • Dug well up to 5 m deep',
          '  • Boreholes that already existed before 2007',
          '  • Essentially free (~€30 administrative fee)',
          '  • Submission via SILiAmb (APA’s environmental licensing portal) or at your local ARH office',
          '  • Timeframe: regularisation in 30–60 days',
          'LICENCE — for:',
          '  • Use > 5 m³/day',
          '  • Depth > 5 m (drilled borehole)',
          '  • Commercial use',
          '  • Swimming pool, irrigation systems',
          '  • Heat pump (geothermal)',
          '  • Cost: €50–€300 + hydrogeologist’s services',
          '  • Submission to ARH or APA',
          '  • Timeframe: 60–180 days'
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
                'Caderneta Predial (land registry/tax property record) for the plot',
                'Certidão de Teor (extract from the Conservatória — registration service)',
                'Map showing the borehole location (GPS)',
                'Photos of the borehole and the surrounding area',
                'Description of use: what the water is for (irrigation, domestic)',
                'Volume estimate: litres/day'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submission',
            content: [
              { kind: 'paragraph', text: 'Via SILiAmb (Sistema Integrado de Licenciamento do Ambiente — APA’s integrated environmental licensing portal): Recursos hídricos → Processos → Criar novo requerimento. Authentication via Chave Móvel Digital (CMD — mobile digital signature).' },
              { kind: 'paragraph', text: 'Alternatively — in person at ARH (5 regions: Norte, Centro, Tejo e Oeste, Alentejo, Algarve).' }
            ]
          },
          {
            id: 's3',
            title: 'Receiving the certificate',
            content: [
              { kind: 'paragraph', text: 'The regularisation certificate arrives by email and ordinary post. This is the confirmation you can show to APA inspectors.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'how-to-license',
      title: 'Licence — for substantial use',
      content: [
        { kind: 'paragraph', text: 'More complex and requires a professional project.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Find a hydrogeologist',
            content: [
              { kind: 'paragraph', text: 'A hydrogeologist engineer — must be registered with the Ordem dos Engenheiros (order of engineers). They prepare:' },
              { kind: 'checklist', items: [
                'Hydrogeological justification study (€1,500–€3,500)',
                'Technical project (drilling plan, safety measures, management)',
                'Explanatory note for APA',
                'Hydrogeological map of the region',
                'Assessment of flow rate and water quality',
                'Risk assessment for neighbouring boreholes and aquifers'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submission to ARH',
            content: [
              { kind: 'paragraph', text: 'With the hydrogeologist’s project. Through the SILiAmb portal (Recursos hídricos module), authentication via Chave Móvel Digital (CMD), payment ~€50–€300. ARH review: 60–180 days (often longer, because depending on the location and use, opinions may be required from other bodies — the CCDR, the competent agricultural authorities, the câmara municipal (town hall) or other sectoral authorities, as well as the ICNF (the nature conservation institute) if the plot is in a protected area).' }
            ]
          },
          {
            id: 's3',
            title: 'Drilling',
            content: [
              { kind: 'paragraph', text: 'Only after the licence has been obtained. The contractor must be legally qualified (legalmente habilitado) and comply with APA/ARH requirements for drilling works. ANEFA membership (Associação Nacional de Empresas de Furos de Água — the national association of water-borehole companies) may be a market signal, but it is not an official licence. Ask for proof of legal habilitation, insurance, a technical report and completion documents. Cost: €50–€150/m of depth. Standard borehole 50–100 m = €3,000–€15,000.' }
            ]
          },
          {
            id: 's4',
            title: 'Final technical inspection',
            content: [
              { kind: 'paragraph', text: 'After drilling, ARH checks conformity with the project. Identified non-conformities may require remedial work.' }
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
          '🛑 Sanitary protection zones for public water abstractions (municipal drinking-water supply): complete prohibition',
          '🛑 Less than 50 m from a septic tank',
          '🛑 Less than 100 m from a cemetery',
          '🛑 Less than 50 m from a filtration field (soakaway wells)',
          '🛑 Less than 200 m from an industrial site',
          '🛑 In RAN/REN zones (Reserva Agrícola Nacional / Reserva Ecológica Nacional) — sometimes prohibited, sometimes additional approvals are required',
          '🛑 In oil and gas pipeline protection zones',
          '🛑 In geological risk zones (unstable ground)',
          'In Algarve and Alentejo — especially strict rules because of confined aquifers'
        ] },
        { kind: 'paragraph', text: 'There are also nitrate vulnerable zones (zonas vulneráveis) due to agricultural pollution — especially in Algarve and parts of Alentejo.' }
      ]
    },
    {
      id: 'water-quality',
      title: 'Water quality and mandatory tests',
      content: [
        { kind: 'paragraph', text: 'For your own home, analyses are strongly recommended on a regular basis — and the title or the authority may even require them. If water is supplied to third parties — AL guests, a restaurant or workers — legal drinking-water monitoring is mandatory.' },
        { kind: 'checklist', items: [
          'Microbiological analysis: E.coli, coliforms, enterococci. At least once a year',
          'Chemical analysis: pH, nitrates, sulphates, chlorides, heavy metals',
          'Cost: €50–€150 for a full test at a private laboratory',
          'Use a laboratory accredited by IPAC for the relevant parameters. Search IPAC’s accredited-laboratories database and ask the lab for its exact accredited scope for microbiological/chemical drinking-water tests',
          'If water is supplied to guests/clients/workers as drinking water, the água destinada ao consumo humano (water for human consumption) regime applies. The private supply system and monitoring programme must be agreed or registered with the competent authority (health service/ERSAR/municipality); the frequency depends on the scale and the risk',
          'If in Algarve/Alentejo: add a nitrate test — levels are often exceeded due to intensive agriculture',
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
          'Borehole without licence (legal entity): up to €2,500,000',
          'Exceeding the authorised volume: €500–€25,000',
          'Drilling in a protected zone: €5,000–€37,500',
          'Use of the public water supply network for commercial consumption without a licence: criminal prosecution',
          'Decommissioning an abandoned borehole — owner’s obligation; €1,000–€10,000 if not carried out and someone is harmed'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Registration (declaration) for a simple borehole', amountEURMin: 0, amountEURMax: 30 },
    { label: 'APA/ARH licence', amountEURMin: 50, amountEURMax: 300, note: 'Administrative fee' },
    { label: 'Hydrogeological study', amountEURMin: 1500, amountEURMax: 3500, note: 'Hydrogeologist engineer' },
    { label: 'Drilling a 50 m borehole', amountEURMin: 3000, amountEURMax: 7500, note: 'Standard borehole for domestic use' },
    { label: 'Drilling a 100 m borehole', amountEURMin: 7500, amountEURMax: 15000 },
    { label: 'Installation of a submersible pump', amountEURMin: 800, amountEURMax: 2500 },
    { label: 'Tank / pressure accumulator', amountEURMin: 300, amountEURMax: 1500 },
    { label: 'Water analysis once a year', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Installation of UV + filter system', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Fine for a borehole without a licence', amountEURMin: 1500, amountEURMax: 37500 }
  ],
  sources: [
    { title: 'APA — Agência Portuguesa do Ambiente', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'APA — Groundwater prospecting and abstraction activity', url: 'https://apambiente.pt/agua/atividade-de-pesquisa-e-de-captacao-de-aguas-subterraneas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'Decreto-Lei 226-A/2007 (Lei da Água, consolidated)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34540975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ARH Tejo e Oeste', url: 'https://apambiente.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ANEFA — National Association of Water Borehole Companies', url: 'https://www.anefa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
