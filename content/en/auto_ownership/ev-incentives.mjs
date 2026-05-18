export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Electric car subsidies and tax breaks in Portugal',
  tldr: 'The state subsidises the purchase of BEVs through Fundo Ambiental — amounts, limits, price caps and quotas are set by the annual **Aviso Fundo Ambiental**. Previous Avisos: for individuals, BEV M1 — around €4,000 (usually no more than 1 car per applicant), for businesses, N1 — around €6,000; for M1 company cars, the conditions differ. The budget is limited and is used up quickly.\n\n**ISV**: 0% for pure BEVs.\n\n**IUC**: BEVs are usually exempt (pure EVs have no CC component); PHEV/HEV — according to the applicable IUC category. Mobi.E charging — €0.28–0.55/kWh. Before buying, check the current Aviso at fundoambiental.pt.',
  tags: ['ev', 'electric car', 'subsidy', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Direct Fundo Ambiental subsidy',
      content: [
        { kind: 'paragraph', text: 'Portugal annually funds the Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões programme. The budget restarts on 1 January and usually runs out within 2–4 months.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Benchmarks (check the current year’s Aviso)', content: [
            { kind: 'paragraph', text: '⚠️ The current amounts are in the **Aviso Fundo Ambiental** for Mobilidade Elétrica for the relevant year. Before the Aviso opens, amounts, quotas, deadlines and conditions cannot be guaranteed. Benchmarks based on recent Avisos:' },
            { kind: 'checklist', items: [
              'Individual, new BEV M1: in recent Avisos — around €4,000, usually no more than 1 car per applicant',
              'Companies/sole traders: in previous Avisos, €6,000 support applied to new BEV **N1** vehicles (goods vehicles up to 3.5 t); for M1 company cars, the conditions are different',
              'Electric bicycle: ~€500',
              'Electric scooter: ~€500',
              '**Price cap** for the M1 subsidy in recent Avisos was around €38,500 **with IVA** and expenses. €62,500 excluding IVA is a separate tax threshold for companies, not a subsidy criterion'
            ]}
          ]},
          { id: 's2', title: 'How to apply', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. The application is submitted online only with Chave Móvel Digital or Cartão de Cidadão. Application windows usually open on 15 January. You need: invoice for the car (a pro forma invoice may be accepted), copy of your residence permit/Cartão de Cidadão, NIF, IBAN for payment.' }
          ]},
          { id: 's3', title: 'Payment timeframe', content: [
            { kind: 'timeline', text: '30–90 days after approval. The money is paid to your IBAN as a reimbursement.' }
          ]}
        ]},
        { kind: 'warning', text: 'The programme budget for 2024–2025 ran out within 2–3 months. If you are buying an electric car in spring, apply in January-February.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Tax breaks',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (customs/import)', content: [
            { kind: 'checklist', items: [
              'Pure BEVs: **0%** ISV (full exemption)',
              'PHEV (plug-in hybrid) with electric range ≥50 km: reduced ISV (25–40% discount)',
              'HEV (standard hybrid): standard ISV, as for petrol/diesel',
              'The validity of the tax break is confirmed annually in the OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (annual tax)', content: [
            { kind: 'checklist', items: [
              'BEV: generally **exempt from IUC** — pure EVs have no CC component. Check the specific veículo in Portal das Finanças/AT',
              'PHEV: standard IUC, but the environmental component is lower',
              'Hybrids: standard IUC'
            ]}
          ]},
          { id: 't3', title: 'IRS (for companies/sole traders)', content: [
            { kind: 'checklist', items: [
              'Company electric car: full depreciation up to €62,500 (for a petrol car — €25,000)',
              'Charging (kWh) — 100% IVA deduction for companies (for petrol — 50%)',
              'Key point for freelancers: an electric car is the most effective way to get tax benefits if you have recibos verdes with high turnover'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'charging',
      title: 'Charging and the Mobi.E network',
      content: [
        { kind: 'paragraph', text: 'Portugal has a centralised national Mobi.E network. All public chargers, even from different operators — Galp, EDP, Repsol, Iberdrola — work through a common hub. One account — all of Portugal.' },
        { kind: 'checklist', items: [
          '⚡ Standard (AC 11–22 kW): €0.28–0.35/kWh',
          '🔋 Fast (DC 50–150 kW): €0.40–0.55/kWh',
          '🏎️ Ultra-fast (DC 150–350 kW): €0.55–0.75/kWh',
          '🏠 Home wallbox: EDP/Galp tariff — €0.16–0.20/kWh at night (two-rate tariff)',
          '💳 Payment: Mobi.E card (€5 registration fee) OR payment through the EDP, Galp, Iberdrola apps',
          '🅿️ Parking while charging depends on the municipality/parking operator and the rules of the specific station — there is NO nationwide “first 2 hours free” rule'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Number plate and identification',
      content: [
        { kind: 'checklist', items: [
          'For a range of benefits, the **dístico identificativo de veículo elétrico** issued by IMT is used (this is NOT a mandatory green number-plate border)',
          'For an already registered BEV, you can request an EV dístico from IMT — cost according to the current IMT fee table',
          'Access/parking benefits in ZER areas depend on the municipality and may require the relevant dístico/registration',
          'PHEV — separate rules; benefits are partial'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsidy for an individual (BEV M1)', note: 'check the current year’s Aviso Fundo Ambiental; in recent ones — ~€4,000' },
    { label: 'Subsidy for BEV N1 (goods vehicles up to 3.5 t)', note: 'in previous Avisos — ~€6,000; check the Aviso' },
    { label: 'Electric bicycle / scooter', amountEUR: 500, note: 'check the Aviso' },
    { label: 'ISV for BEV', amountEUR: 0 },
    { label: 'IUC for BEV', amountEUR: 0, note: 'usually exempt; check in Portal das Finanças for the specific veículo' },
    { label: 'Mobi.E card (registration)', amountEUR: 5 }
  ],
  sources: [
    { title: 'Fundo Ambiental — Mobilidade Elétrica', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Mobi.E — charging network', url: 'https://www.mobie.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — ISV/IUC calculators', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UVE — União dos Veículos Elétricos (community)', url: 'https://www.uve.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
