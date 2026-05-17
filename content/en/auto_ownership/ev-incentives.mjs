export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Subsidies and tax benefits for electric cars in Portugal',
  tldr: 'The state subsidises BEV purchases through Fundo Ambiental — amounts, limits, price caps and quotas are set by the annual **Aviso Fundo Ambiental**. Previous Avisos: for individuals, BEV M1 — around €4,000 (usually no more than 1 car per applicant), for businesses, N1 — around €6,000; conditions for M1 company vehicles differ. The budget is limited and runs out quickly. **ISV**: 0% for pure BEV. **IUC**: BEV are usually exempt (pure EVs have no CC component); PHEV/HEV — according to the applicable IUC category. Mobi.E charging — €0.28–0.55/kWh. Before buying, check the current Aviso on fundoambiental.pt.',
  tags: ['ev', 'electric car', 'subsidy', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Direct Fundo Ambiental subsidy',
      content: [
        { kind: 'paragraph', text: 'Portugal funds the Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões programme every year. The budget restarts on 1 January and usually runs out within 2–4 months.' },
        { kind: 'substeps', items: [
          { id: 's1', title: 'Reference points (check the current year’s Aviso)', content: [
            { kind: 'paragraph', text: '⚠️ Current amounts are in the **Aviso Fundo Ambiental** for Mobilidade Elétrica for the relevant year. Before the Aviso opens, amounts, quotas, deadlines and conditions cannot be guaranteed. Reference points based on recent Avisos:' },
            { kind: 'checklist', items: [
              'Individual, new BEV M1: in recent Avisos — around €4,000, usually no more than 1 vehicle per applicant',
              'Companies/sole traders: in previous Avisos, €6,000 support applied to new BEV **N1** (goods vehicles up to 3.5 t); conditions are different for M1 company vehicles',
              'Electric bicycle: ~€500',
              'Electric scooter: ~€500',
              '**Price cap** for the M1 subsidy in recent Avisos was around €38,500 **with IVA** and expenses. €62,500 excluding IVA is a separate tax threshold for companies, not a subsidy criterion'
            ]}
          ]},
          { id: 's2', title: 'How to apply', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. The application is submitted online only with Chave Móvel Digital or Cartão de Cidadão. Application windows usually open on 15 January. You need: invoice for the vehicle (a pro forma invoice may be accepted), copy of residence permit/Cartão de Cidadão, NIF, IBAN for payment.' }
          ]},
          { id: 's3', title: 'Payment timeframe', content: [
            { kind: 'timeline', text: '30–90 days after approval. The money arrives in your IBAN as a reimbursement.' }
          ]}
        ]},
        { kind: 'warning', text: 'The programme budget for 2024–2025 ran out within 2–3 months. If you are buying an electric car in spring, apply in January-February.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Tax benefits',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (customs clearance/import)', content: [
            { kind: 'checklist', items: [
              'Pure BEV: **0%** ISV (full exemption)',
              'PHEV (plug-in hybrid) with an electric range of ≥50 km: reduced ISV (25–40% discount)',
              'HEV (standard hybrid): standard ISV, as for petrol/diesel',
              'The benefit validity period is confirmed annually in the OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (annual tax)', content: [
            { kind: 'checklist', items: [
              'BEV: generally **exempt from IUC** — pure EVs have no CC component. Check the specific veículo in Portal das Finanças/AT',
              'PHEV: standard IUC, but with a lower environmental component',
              'Hybrids: standard IUC'
            ]}
          ]},
          { id: 't3', title: 'IRS (for companies/sole traders)', content: [
            { kind: 'checklist', items: [
              'Company electric car: full depreciation up to €62,500 (for a petrol car — €25,000)',
              'Charging (kWh) — 100% IVA deduction for companies (for petrol — 50%)',
              'Key point for freelancers: an electric car is the most efficient way to obtain tax benefits if you have Recibo Verde with high turnover'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'charging',
      title: 'Charging and the Mobi.E network',
      content: [
        { kind: 'paragraph', text: 'Portugal has a centralised national Mobi.E network. All public chargers, even from different operators — Galp, EDP, Repsol, Iberdrola, — work through a shared hub. One account — all of Portugal.' },
        { kind: 'checklist', items: [
          '⚡ Standard (AC 11–22 kW): €0.28–0.35/kWh',
          '🔋 Fast (DC 50–150 kW): €0.40–0.55/kWh',
          '🏎️ Ultra-fast (DC 150–350 kW): €0.55–0.75/kWh',
          '🏠 Home wallbox: EDP/Galp tariff — €0.16–0.20/kWh at night (dual-rate tariff)',
          '💳 Payment: Mobi.E card (€5 registration) OR payment via EDP, Galp, Iberdrola apps',
          '🅿️ Parking while charging depends on the municipality/parking operator and the rules of the specific station — there is NO nationwide “first 2 hours free” rule'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Number plate and identification',
      content: [
        { kind: 'checklist', items: [
          'For a number of benefits, the **dístico identificativo de veículo elétrico** issued by IMT is used (this is NOT the mandatory green number plate frame)',
          'For an already registered BEV, you can request the EV dístico from IMT — cost according to the current IMT fee table',
          'Access benefits for ZER/parking depend on the municipality and may require the relevant dístico/registration',
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
