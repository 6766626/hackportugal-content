export default {
  editorialVoice: 'hackportugal',
  id: 'ipo-inspection',
  categoryId: 'auto_ownership',
  title: 'IPO roadworthiness test — how, when and how much',
  tldr: 'Inspeção Periódica Obrigatória (IPO) is the mandatory roadworthiness test. A new passenger car (category M1 — passenger vehicle) has its first IPO after 4 years, then every 2 years until 8 years old, and annually thereafter. It is carried out at accredited IMT centres (Controlauto, SGS, Tecnauto, Strada and other operators). It costs around €30-40 for a passenger car. The basic framework is Decreto-Lei 144/2017; fee tables and inspection intervals are updated periodically by Portaria IMT. Bring: DUA, insurance, the owner’s identity document, driving licence.',
  tags: ['ipo', 'roadworthiness test', 'imt', 'car'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'IPO is governed by Decreto-Lei 144/2017 and Portaria 178/2023. Oversight is by IMT (Instituto da Mobilidade e dos Transportes). Certified centres operate under concession, with a single IMT database.' }
      ]
    },
    {
      id: 'frequency',
      title: 'Inspection frequency',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Passenger cars (category B, up to 3.5 t)', content: [
            { kind: 'checklist', items: [
              'New: first IPO 4 years after the registration date',
              'From 4 to 8 years: every 2 years',
              'After 8 years: annually',
              'Taxi / rental / driving school / commercial fleet: annually regardless of age'
            ]}
          ]},
          { id: 'f2', title: 'Motorcycles', content: [
            { kind: 'paragraph', text: 'First IPO after 4 years, then every 2 years (regardless of age).' }
          ]},
          { id: 'f3', title: 'Goods vehicles > 3.5 t and buses', content: [
            { kind: 'paragraph', text: 'Annually from the first year of use.' }
          ]},
          { id: 'f4', title: 'Electric cars and hybrids', content: [
            { kind: 'paragraph', text: 'The same intervals apply. Additionally — inspection of high-voltage wiring insulation.' }
          ]}
        ]},
        { kind: 'warning', text: 'The IPO deadline is shown on the sticker under the windscreen and in Portal das Contra-Ordenações (IMT). Overdue inspection — fine of €250–€1,250.' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'How to book',
      content: [
        { kind: 'checklist', items: [
          '💻 Centre websites (Controlauto, SGS, Riberalves, Tecnauto, Auto-Inspeção) — booking 7/7',
          '📞 In large centres you can often be seen without an appointment after a 15–30 min wait',
          '🗓️ You can book up to 3 months before the previous deadline expires',
          '📍 Limitation — only in Portugal, and you may choose any centre'
        ]},
        { kind: 'paragraph', text: 'IMT publishes the list of all accredited centres on its website in the “Inspeção Técnica de Veículos” section.' }
      ]
    },
    {
      id: 'documents',
      title: 'What to bring',
      content: [
        { kind: 'checklist', items: [
          '📄 DUA (Documento Único Automóvel) — vehicle registration document',
          '📄 Certificado de Matrícula (if the vehicle has old-format documents)',
          '📄 Valid insurance policy (mandatory motor insurance policy)',
          '🆔 Cartão de Cidadão (Portuguese citizen identity document) of the owner (or residence permit + passport)',
          '🚗 Vehicle with working seat belts, brakes, lights',
          '⚠️ Warning triangle, reflective vest, first-aid kit',
          '🔧 Tyres no older than 10 years, tread depth at least 1.6 mm'
        ]},
        { kind: 'warning', text: 'If the documents are in the name of a corporate owner — power of attorney from the company with stamp.' }
      ]
    },
    {
      id: 'the-process',
      title: 'Inspection process',
      content: [
        { kind: 'paragraph', text: 'It takes 25–40 minutes. They check:' },
        { kind: 'checklist', items: [
          '🔦 Lighting (headlights, sidelights, indicators, brake lights)',
          '🛑 Braking system (test bench)',
          '🚨 Suspension/shock absorbers (test bench)',
          '🛞 Tyres / tread depth',
          '📋 Chassis and engine numbers are checked against the DUA',
          '💨 CO2 emissions (probe in the exhaust)',
          '🪞 Mirrors, windscreen wipers',
          '🎯 Headlight alignment (“alinhamento de faróis”)',
          '🪑 Seat belts and airbags',
          '🔋 ABS / ESP / electronics (OBD diagnostics)'
        ]}
      ]
    },
    {
      id: 'results',
      title: 'Result and what to do if you fail',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Aprovado (green)', content: [
            { kind: 'paragraph', text: 'You receive a new sticker and an updated DUA. Everything is recorded in IMT automatically.' }
          ]},
          { id: 'r2', title: 'Aprovado com Deficiências Ligeiras (orange)', content: [
            { kind: 'paragraph', text: 'You have passed, but minor fixes are needed — they are recorded in the report. No retest is required; fix them before the next IPO.' }
          ]},
          { id: 'r3', title: 'Reprovado (red)', content: [
            { kind: 'checklist', items: [
              'You cannot drive immediately (if defects are critical) or until repair (if they are not critical)',
              'Retest deadline — 30 days at the SAME centre at a reduced price',
              'After 30 days — a full IPO again',
              'If you do not pass the retest within 30 days + 7 — IMT issues a fine'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO for a passenger car (category B)', amountEURMin: 30, amountEURMax: 40 },
    { label: 'Motorcycle', amountEURMin: 20, amountEURMax: 28 },
    { label: 'Repeat IPO (retest)', amountEURMin: 12, amountEURMax: 18 },
    { label: 'Fine for overdue IPO', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'IMT — Vehicle technical inspection', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Pages/Inspeccao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 144/2017 — Technical inspection regime (roadworthiness test)', url: 'https://dre.pt/dre/detalhe/decreto-lei/144-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 178/2023 — fees and inspection intervals', url: 'https://dre.pt/dre/detalhe/portaria/178-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Carry out the periodic vehicle inspection', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/realizar-a-inspecao-periodica-ao-veiculo-ipo-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
