export default {
  editorialVoice: 'hackportugal',
  id: 'solar-panels',
  categoryId: 'housing_buy',
  title: 'Solar panels — installation, permits, savings',
  tldr: 'Portugal is in the EU top 3 for solar potential. UPAC (Unidade de Produção para Autoconsumo) systems — thresholds under DL 15/2022 / SERUP: very small systems (up to ~700 W with no injection into the grid) may be exempt from prior control; >700 W and ≤30 kW — usually mera comunicação prévia via DGEG/SERUP; >30 kW — heavier prior control.\n\nTurnkey cost: €4,000-€12,000 for a typical flat/house. Payback 5-9 years. To receive money for excedente you need a bidirectional smart meter and a sale contract with a comercializador/agregador (there is NO 1:1 net metering in PT).\n\nFundo Ambiental does not guarantee annual funding — check the current Aviso on fundoambiental.pt.',
  tags: ['solar panels', 'solar energy', 'self-consumption', 'fundo ambiental'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-solar',
      title: '☀️ Why PT is an excellent place',
      content: [
        { kind: 'checklist', items: [
          '🌞 Solar radiation: 1500-1700 kWh/m²/year — top 3 in the EU (after Cyprus, Malta)',
          '☀️ Average day: 5-7 peak sun hours',
          '⚡ Electricity prices: €0.16-€0.25/kWh (among the highest in the EU) → fast payback',
          '📏 5 kW home system generates 7,000-9,000 kWh/year — covers the needs of most family households',
          '💰 Savings: €800-€1,500/year for an average family with a 5 kW system',
          '🌍 CO2 emissions reduction: ~3 tonnes/year from a 5 kW system',
          '📈 Property value: adds 5-10% to the property value'
        ]}
      ]
    },
    {
      id: 'system-types',
      title: '🔌 Types of systems',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Residential UPAC ≤30 kW (typical houses/flats)', content: [
            { kind: 'checklist', items: [
              'Most home systems are under mera comunicação prévia via DGEG/SERUP (not a licence)',
              'Very small systems (~up to 700 W with no injection into the grid) may be exempt from prior control',
              'The most popular option for flats / houses',
              'Inverter + panels on the roof / balcony / extension',
              'Self-consumption + grid injection (if there is surplus and a bidirectional meter is fitted)',
              'Cost: €4,000-€12,000 turnkey',
              'Installation time: 1-3 days'
            ]}
          ]},
          { id: 's2', title: 'UPAC > 30 kW', content: [
            { kind: 'checklist', items: [
              'Requires heavier registration/certification',
              'For large houses / commercial properties',
              'Cost: €10,000-€30,000+',
              'May be more advantageous for businesses (IRC deductions)',
              '>1 MW — licensing'
            ]}
          ]},
          { id: 's3', title: 'Pure sale of energy to the grid', content: [
            { kind: 'checklist', items: [
              'Pure production/sale to grid — a separate electricity production project under the current SEN rules',
              'This is not a normal residential UPAC',
              'DGEG/ERSE requirements and availability of grid capacity',
              'Less popular for housing — self-consumption is usually more profitable'
            ]}
          ]},
          { id: 's4', title: 'Hybrid system with battery', content: [
            { kind: 'checklist', items: [
              'Solar system + lithium battery (Tesla Powerwall, BYD, LG Chem)',
              'Cost: +€5,000-€12,000 on top of the base system',
              'Benefit: use solar energy in the evening, backup power during outages',
              'Longer payback, but greater independence from the grid',
              'Suitable for rural areas / frequent outages'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'cost',
      title: '💰 Cost breakdown',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '2026 turnkey standard', content: [
            { kind: 'checklist', items: [
              '3 kW (flat): €3,500-€5,500 (8-10 panels, inverter, installation)',
              '5 kW (small house): €5,500-€8,500 (12-15 panels)',
              '6.9 kW (typical capacity for a detached house; mera comunicação prévia, licence starts from >30 kW under DL 15/2022): €7,500-€11,000',
              '+ 10 kWh battery: +€5,000-€8,000',
              '+ smart home integration: +€500-€1,500'
            ]}
          ]},
          { id: 'c2', title: 'What is included', content: [
            { kind: 'checklist', items: [
              'Solar panels (260-450 W each)',
              'Inverter (string inverter or microinverters)',
              'Mounting equipment',
              'Cables, switches, fuses',
              'Smart meter / monitoring system',
              'Installation work',
              'Registration with DGEG (often done by the installer)',
              'Reduced IVA rate of 6% (since 2024) for housing'
            ]}
          ]},
          { id: 'c3', title: 'Subsidies — Fundo Ambiental', content: [
            { kind: 'checklist', items: [
              'Fundo Ambiental does not guarantee annual funding — check the actual open Aviso on fundoambiental.pt',
              'Past residential efficiency calls had specific caps and reimbursement rates, but 2026 amounts depend on the active programme',
              'Calls open irregularly with their own deadlines, budgets and eligibility rules — monitor Fundo Ambiental and Diário da República',
              'Do not include the subsidy in the project budget until your application is approved',
              'MAE — a municipal programme (some cities top up)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Installation process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Quotes', content: [
            { kind: 'checklist', items: [
              'Get 3+ quotes from installers',
              'Top installers: Galp Solar, EDP Solar, Dynegy, Solposto, EnergyON, SunEnergy',
              'Independent installers are often cheaper; check reviews',
              'Ask for: panel brand (LG, JA Solar, Trina), inverter brand (Huawei, Fronius, SolarEdge), warranty, installation timings'
            ]}
          ]},
          { id: 'p2', title: '2. Structural assessment', content: [
            { kind: 'checklist', items: [
              'Roof inspection — orientation (south is best), pitch, structural strength',
              'Result: 90%+ of homes in PT are suitable',
              'Condominium: approval of the general meeting if the roof is communal',
              'Flat without an individual roof: panels on balcony / window — 100-500 W systems',
              'If the panels use common parts — approval by the assembleia condomínio is needed under the condominium rules. If refused — seek legal advice; there is no automatic statutory right to install on a communal roof'
            ]}
          ]},
          { id: 'p3', title: '3. Documents', content: [
            { kind: 'checklist', items: [
              'Caderneta predial (proof of ownership or written consent from the landlord)',
              'NIF, CC',
              'Electricity bill with CPE, NIF/ID',
              'Technical data for panels/inverter, installer declarations',
              'Electricity bills for the last 12 months — to calculate the optimal system size',
              'If in a condominium and common parts are used: minutes approving it from the assembleia'
            ]}
          ]},
          { id: 'p4', title: '4. Installation', content: [
            { kind: 'checklist', items: [
              '1-3 days of installation',
              'Connection to your electrical panel',
              'Installation/configuration of the bidirectional smart meter — done by the distribution network operator (usually E-REDES in mainland PT). The comercializador (supplier) is a separate entity',
              'Test + activation',
              'Registration on the DGEG portal (often done by the installer)'
            ]}
          ]},
          { id: 'p5', title: '5. Compensation for surplus', content: [
            { kind: 'checklist', items: [
              'Excess solar energy can be injected into the grid → compensation from your comercializador (EDP, Galp, Endesa, Iberdrola, etc.) if you have a bidirectional smart meter and a sale contract',
              '⚠️ Net metering in the sense of 1:1 offsetting in Portugal does NOT exist — without a sale contract, surplus may go into the grid unpaid',
              'Tariff: usually below the retail electricity price',
              'For larger UPAC — separate contract with a comercializador/agregador'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tax',
      title: '💼 Tax aspect',
      content: [
        { kind: 'checklist', items: [
          'IVA reduzido may apply to the supply/installation of photovoltaic panels under the current version of VAT List I — clarify the treatment on the invoice with the installer',
          'IRS deduction specifically for home solar systems is not provided for (this is an investment, not an expense)',
          'Property tax (IMI): some municipalities offer reductions for homes with solar systems (5-15% discount)',
          'Excedente sale: for individuals, income from selling surplus from a small UPAC may be excluded from IRS up to the statutory annual limit; above that — or for business activity — tax/VAT rules apply. Confirm with an accountant/comercializador',
          'Solar systems for business (commercial UPAC): depreciation under Decreto Regulamentar 25/2009 (usually 5-10% per year for energy equipment) — NOT an automatic “full deduction over 8-10 years”. IVA recovery is available ONLY if the business is VAT-taxable with the right to deduct and invoices are issued correctly; for partial/exempt activities, deduction is limited. Check with a TOC/CC'
        ]}
      ]
    },
    {
      id: 'rental',
      title: '🏠 If you rent',
      content: [
        { kind: 'checklist', items: [
          'Any fixed installation requires the owner’s written consent; for removable balcony plug-in systems, also check the lease, regulamento condomínio and electrical safety',
          'Solar system leasing (Iberdrola, Galp solar leasing): the provider installs it, you pay a monthly fee — savings are lower, but there is no upfront investment',
          'Cooperatives (Sociedade Cooperativa de Energia): community solar energy — you take part in a larger system',
          'Ownership of the panels and the ability to take them with you when you leave must be agreed in writing with the owner BEFORE installation'
        ]}
      ]
    }
  ],
  costs: [
    { label: '3 kW system (flat)', amountEURMin: 3500, amountEURMax: 5500 },
    { label: '5 kW system (small house)', amountEURMin: 5500, amountEURMax: 8500 },
    { label: '6.9 kW system', amountEURMin: 7500, amountEURMax: 11000 },
    { label: 'Additional 10 kWh battery', amountEURMin: 5000, amountEURMax: 8000 },
    { label: 'Fundo Ambiental subsidy', note: 'amounts/conditions depend on the active Aviso — do not include it until the application is approved' },
    { label: 'Annual savings 5 kW', amountEURMin: 800, amountEURMax: 1500, note: '€/year' }
  ],
  sources: [
    { title: 'DGEG — Directorate-General for Energy and Geology', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Fundo Ambiental', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 15/2022 — Sistema Elétrico Nacional / autoconsumo', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SERUP — Electronic Registration System for Production Units', url: 'https://serup.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'APREN — Renewable Energies Portugal', url: 'https://www.apren.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
