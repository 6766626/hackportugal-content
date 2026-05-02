export default {
  editorialVoice: 'hackportugal',
  id: 'solar-panels',
  categoryId: 'housing_buy',
  title: 'Solar panels — installation, permits, savings',
  tldr: 'Portugal is in the top 3 EU countries for solar potential. UPAC (Unidade de Produção para Autoconsumo) systems up to 6.9 kW require no licence (registration with DGEG is free). Turnkey cost: €4,000-12,000 for a typical flat/house (4-8 panels + inverter + battery optional). Payback period 5-9 years. Surplus is fed into the grid (provider compensation €0.04-0.10/kWh). The Fundo Ambiental programme subsidises up to 70% (€2,500 max).',
  tags: ['solar panels', 'solar energy', 'self-consumption', 'fundo ambiental'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-solar',
      title: '☀️ Why PT is an excellent place',
      content: [
        { kind: 'checklist', items: [
          '🌞 **Solar radiation**: 1,500-1,700 kWh/m²/year — top 3 in the EU (after Cyprus, Malta)',
          '☀️ Average day: 5-7 peak sun hours',
          '⚡ **Electricity prices**: €0.16-0.25/kWh (among the highest in the EU) → fast payback',
          '📏 **A 5 kW home system** generates 7,000-9,000 kWh/year — covers the needs of most family households',
          '💰 **Savings**: €800-1,500/year for an average family with a 5 kW system',
          '🌍 **CO2 emissions reduction**: ~3 tonnes/year from a 5 kW system',
          '📈 **Property value**: adds 5-10% to the property value'
        ]}
      ]
    },
    {
      id: 'system-types',
      title: '🔌 Types of systems',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'UPAC up to 6.9 kW (for housing)', content: [
            { kind: 'checklist', items: [
              'No licence — only registration with DGEG (free)',
              'The most popular option for flats / houses',
              'Inverter + panels on the roof / balcony / extension',
              'Self-consumption + feeding into the grid (if there is surplus)',
              'Cost: €4,000-12,000 turnkey',
              'Installation time: 1-3 days'
            ]}
          ]},
          { id: 's2', title: 'UPAC > 6.9 kW', content: [
            { kind: 'checklist', items: [
              'Requires prior registration + sometimes a licence',
              'For large houses / commercial properties',
              'Cost: €10,000-30,000+',
              'May be more advantageous for businesses (IRC deductions)'
            ]}
          ]},
          { id: 's3', title: 'UPP — Unidade de Pequena Produção', content: [
            { kind: 'checklist', items: [
              'Production without linked consumption (sale of the full volume to the grid)',
              'Clearly regulated by DGEG',
              'Tariff from EDP / provider',
              'Less popular — self-consumption is usually more profitable'
            ]}
          ]},
          { id: 's4', title: 'Hybrid system with battery', content: [
            { kind: 'checklist', items: [
              'Solar system + lithium battery (Tesla Powerwall, BYD, LG Chem)',
              'Cost: +€5,000-12,000 on top of the base system',
              'Benefit: use solar energy in the evening, backup power during outages',
              'Longer payback, but more independence from the grid',
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
              '**3 kW (flat)**: €3,500-5,500 (8-10 panels, inverter, installation)',
              '**5 kW (small house)**: €5,500-8,500 (12-15 panels)',
              '**6.9 kW (maximum without a licence)**: €7,500-11,000',
              '**+ 10 kWh battery**: +€5,000-8,000',
              '**+ smart home integration**: +€500-1,500'
            ]}
          ]},
          { id: 'c2', title: 'What is included', content: [
            { kind: 'checklist', items: [
              'Solar panels (260-450 W each)',
              'Inverter (string inverter or microinverters)',
              'Mounting hardware',
              'Cables, switches, fuses',
              'Smart meter / monitoring system',
              'Installation works',
              'Registration with DGEG (often done by the installer)',
              'Reduced IVA rate of 6% (since 2024) for housing'
            ]}
          ]},
          { id: 'c3', title: 'Subsidies — Fundo Ambiental', content: [
            { kind: 'checklist', items: [
              '**Fundo Ambiental** opens funding every year for solar system subsidies',
              '**2026 standard**: up to **€2,500** or 70% of the cost (whichever is lower)',
              'Limited budget — opens in Q1, runs out within weeks',
              'Application: fundoambiental.pt → Energia Solar',
              '**MAE** — a programme from municipalities (some cities top it up)'
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
              'Unaffiliated installers are often cheaper, check reviews',
              'Ask for: panel brand (LG, JA Solar, Trina), inverter brand (Huawei, Fronius, SolarEdge), warranty, installation timelines'
            ]}
          ]},
          { id: 'p2', title: '2. Structural assessment', content: [
            { kind: 'checklist', items: [
              'Roof inspection — orientation (south is best), pitch, structural strength',
              'Outcome: 90%+ of homes in PT are suitable',
              'Condominium: approval of the general meeting if the roof is shared',
              'Flat without an individual roof: panels on the balcony / window — 100-500 W systems',
              'If the condominium objects: court (Lei 79/2017 — right to autoconsumo), but it rarely goes that far'
            ]}
          ]},
          { id: 'p3', title: '3. Documents', content: [
            { kind: 'checklist', items: [
              'Caderneta predial (proof of ownership or landlord consent)',
              'NIF, Cartão de Cidadão',
              'Atestado de Residência (quotes from the electricity supplier)',
              'Electricity bill for the last 12 months — to calculate the optimal system size',
              'If in a condominium: minutes of the general meeting approval'
            ]}
          ]},
          { id: 'p4', title: '4. Installation', content: [
            { kind: 'checklist', items: [
              '1-3 days of installation',
              'Connection to your electrical panel',
              'Installation of a smart meter by EDP / provider (if automatic grid feed-in is enabled)',
              'Test + activation',
              'Registration on the DGEG portal (often done by the installer)'
            ]}
          ]},
          { id: 'p5', title: '5. Compensation for surplus', content: [
            { kind: 'checklist', items: [
              'Surplus solar energy is fed into the grid → compensation from your provider (EDP, Galp, Endesa, Iberdrola)',
              'Tariff: €0.04-0.10/kWh (usually below the retail price)',
              'For small UPAC — net metering (meter discount for surplus) is simpler',
              'For large UPAC — a separate contract with the provider'
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
          '**IVA 6%** (reduced rate) on residential UPAC ≤ 6.9 kW since 2023',
          '**IRS deduction** is not provided directly for home solar systems (it is an investment, not an expense)',
          '**Property tax (IMI)**: some municipalities offer reductions for homes with solar systems (5-15% discount)',
          '**Sale of surplus**: taxed at 28%, but these are usually small amounts (€50-200/year for housing)',
          '**Solar systems for businesses (commercial UPAC)**: full IRC deduction over 8-10 years, IVA refund, may accelerate payback'
        ]}
      ]
    },
    {
      id: 'rental',
      title: '🏠 If you rent',
      content: [
        { kind: 'checklist', items: [
          'You can install with the owner’s consent (in writing)',
          '**Solar system leasing** (Iberdrola, Galp solar leasing): the provider installs it, you pay a monthly payment — savings are lower, but there is no upfront investment',
          '**Co-operatives** (Sociedade Cooperativa de Energia): community solar energy — you participate in a larger system',
          '**Panels in rented housing**: you can take them with you when you leave, but usually after 5 years they become the owner’s property',
          'Lei 79/2017 — tenants have the right to install renewable energy sources with reasonable conditions from the landlord'
        ]}
      ]
    }
  ],
  costs: [
    { label: '3 kW system (flat)', amountEURMin: 3500, amountEURMax: 5500 },
    { label: '5 kW system (small house)', amountEURMin: 5500, amountEURMax: 8500 },
    { label: '6.9 kW system', amountEURMin: 7500, amountEURMax: 11000 },
    { label: 'Additional 10 kWh battery', amountEURMin: 5000, amountEURMax: 8000 },
    { label: 'Fundo Ambiental subsidy', amountEUR: 2500, note: 'up to, 70% cap' },
    { label: 'Annual savings 5 kW', amountEURMin: 800, amountEURMax: 1500, note: '€/year' }
  ],
  sources: [
    { title: 'DGEG — Direção-Geral de Energia e Geologia', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Fundo Ambiental — Energia Solar', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 162/2019 — autoconsumo', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/162-2019-126016166', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APREN — Renewable Energies Portugal', url: 'https://www.apren.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
