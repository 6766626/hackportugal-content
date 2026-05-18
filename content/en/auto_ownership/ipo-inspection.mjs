export default {
  editorialVoice: 'hackportugal',
  id: 'ipo-inspection',
  categoryId: 'auto_ownership',
  title: 'IPO technical inspection — how, when and how much',
  tldr: 'Inspeção Periódica Obrigatória (IPO) is the mandatory technical inspection. A new passenger car (category M1 — passenger vehicle) has its first IPO after 4 years, then every 2 years until 8 years old, and annually thereafter. It is carried out at accredited IMT centres (Controlauto, SGS, Tecnauto, Strada and other operators). It costs around €30-€40 for a passenger car. The basic regime is Decreto-Lei 144/2017; tariff tables and inspection intervals are periodically updated by Portaria IMT. Bring: DUA, insurance, the owner’s identity document, driving licence.',
  tags: ['ipo', 'technical inspection', 'imt', 'car'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'IPO is regulated by Decreto-Lei (decree-law) 144/2017 and Portaria 178/2023. Oversight is by IMT (Instituto da Mobilidade e dos Transportes). Certified centres operate under concession, with a single IMT database.' }
      ]
    },
    {
      id: 'frequency',
      title: 'Inspection frequency',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Light passenger vehicles (vehicle category M1, up to 3.5 t)', content: [
            { kind: 'checklist', items: [
              'NB: “category M1” is the vehicle category under DL 16/2010; do not confuse it with driving licence “category B”',
              'New: first IPO 4 years after the registration date',
              'From 4 to 8 years: every 2 years',
              'After 8 years: annually',
              'Taxi / rental / driving school / commercial fleet: annually regardless of age'
            ]}
          ]},
          { id: 'f2', title: 'Motorcycles (category L > 125 cm³)', content: [
            { kind: 'paragraph', text: 'IPO is mandatory for category L motorcycles with an engine capacity > 125 cm³. The frequency follows the special table in DL 144/2017 (for most L categories — first IPO after 4 years, then every 2 years). For L1e/mopeds up to 50 cm³, IPO is generally not required.' }
          ]},
          { id: 'f3', title: 'Goods vehicles > 3.5 t (N2/N3) and buses (M2/M3)', content: [
            { kind: 'paragraph', text: 'First IPO 1 year after registration, then according to the table: up to 8 years — once a year; after 8 years — usually every 6 months for heavy passenger vehicles (M2/M3). The exact frequency is set by DL 144/2017 + Portaria 178/2023.' }
          ]},
          { id: 'f4', title: 'Electric vehicles and hybrids', content: [
            { kind: 'paragraph', text: 'The same deadlines apply for category M1. Additionally, the insulation of high-voltage wiring is checked.' }
          ]}
        ]},
        { kind: 'warning', text: 'The mandatory IPO sticker on the windscreen in Portugal has been abolished — the validity period is confirmed by the ficha/certificado de inspeção (electronic/paper) and the record in the IMT system. At the border/during PSP checks, it is verified in the database. Overdue inspection — fine of €250–€1,250.' }
      ]
    },
    {
      id: 'how-to-book',
      title: 'How to book',
      content: [
        { kind: 'checklist', items: [
          '💻 Centre websites (Controlauto, SGS, Riberalves, Tecnauto, Auto-Inspeção) — booking 7/7',
          '📞 At large centres you can often go without an appointment after a 15–30 min wait',
          '🗓️ You can book up to 3 months before the previous validity period expires',
          '📍 Restriction — only in Portugal; you may choose any centre'
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
          '📄 Certificado de Matrícula (if you have old-format documents)',
          '📄 Valid insurance policy (mandatory motor insurance policy)',
          '🆔 Cartão de Cidadão (Portuguese citizen identity card) of the owner (or residence permit + passport)',
          '🚗 Vehicle with working seat belts, brakes and lights',
          '⚠️ Warning triangle, reflective vest, first-aid kit',
          '🔧 Tyres no more than 10 years old, tread depth at least 1.6 mm'
        ]},
        { kind: 'warning', text: 'If the documents are in the name of a legal-entity owner — power of attorney from the company with stamp.' }
      ]
    },
    {
      id: 'the-process',
      title: 'The inspection process',
      content: [
        { kind: 'paragraph', text: 'It takes 25–40 minutes. They check:' },
        { kind: 'checklist', items: [
          '🔦 Lighting (headlights, sidelights, indicators, brake lights)',
          '🛑 Braking system (test bench)',
          '🚨 Shock absorbers (test bench)',
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
            { kind: 'paragraph', text: 'You receive a **ficha/certificado de inspeção** (paper or electronic) with the date of the next IPO. The DUA is **not updated** during a standard IPO — it is reissued only when technical data changes (for example, after chassis/engine repair). Everything is entered into IMT automatically.' }
          ]},
          { id: 'r2', title: 'Aprovado com Deficiências Ligeiras (orange)', content: [
            { kind: 'paragraph', text: 'You passed, but minor fixes are needed — they are recorded in the report. You do not need to retest; fix them before the next IPO.' }
          ]},
          { id: 'r3', title: 'Reprovado (red)', content: [
            { kind: 'checklist', items: [
              'You cannot drive immediately (if there are critical defects) or until repairs are completed (if they are not critical)',
              'Deadline for retest — 30 days at the SAME centre at a reduced price',
              'After 30 days — a full IPO again',
              'If you do not pass the retest within 30 days + 7 — IMT issues a fine'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IPO for a light passenger vehicle (category M1)', amountEURMin: 30, amountEURMax: 40 },
    { label: 'Motorcycle', amountEURMin: 20, amountEURMax: 28 },
    { label: 'Repeat IPO (retest)', amountEURMin: 12, amountEURMax: 18 },
    { label: 'Fine for overdue IPO', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'IMT — Inspeção Técnica de Veículos', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Pages/Inspeccao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 144/2017 — Technical inspection regime', url: 'https://dre.pt/dre/detalhe/decreto-lei/144-2017', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portaria n.º 178/2023 — tariffs and frequency', url: 'https://dre.pt/dre/detalhe/portaria/178-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Have the vehicle’s periodic inspection carried out', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/realizar-a-inspecao-periodica-ao-veiculo-ipo-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
