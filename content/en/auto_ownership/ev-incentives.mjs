export default {
  editorialVoice: 'hackportugal',
  id: 'ev-incentives',
  categoryId: 'auto_ownership',
  title: 'Subsidies and tax relief for electric cars in Portugal',
  tldr: 'The state subsidises BEV purchases through the Fundo Ambiental — amounts, limits, price caps and quotas are set each year by the **Aviso Fundo Ambiental**. Previous Avisos: for individuals, BEV M1 — around €4,000; for businesses (N1) — higher. The budget is limited and runs out quickly. In addition: ISV is reduced or 0% for BEVs, IUC is reduced but NOT fully 0% after OE 2024, Mobi.E charging — around €0.28–0.55/kWh depending on the operator. Before buying, check the current Aviso on fundoambiental.pt.',
  tags: ['ev', 'electric car', 'subsidy', 'fundo ambiental'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'subsidy',
      title: 'Direct Fundo Ambiental subsidy',
      content: [
        { kind: 'paragraph', text: 'Portugal funds the Incentivo pela Introdução no Mercado de Veículos de Baixas Emissões programme every year. The budget restarts on 1 January and usually runs out within 2–4 months.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '2026 amounts', content: [
            { kind: 'checklist', items: [
              'Individual, new passenger BEV (category M1): up to €4,000 (maximum 2 cars per year)',
              'Legal entity/sole trader, new BEV M1: up to €6,000 (maximum 4 cars per year)',
              'Electric bicycle: €500',
              'Goods BEV (N1) up to 3.5 t: €6,000',
              'Electric scooter: €500',
              'The car price must not exceed €62,500 (excluding IVA) to be eligible'
            ]}
          ]},
          { id: 's2', title: 'How to apply', content: [
            { kind: 'paragraph', text: 'fundoambiental.pt → Candidaturas → Mobilidade Elétrica. Applications are submitted online only, using Chave Móvel Digital or Cartão de Cidadão. Application windows usually open on 15 January. You need: the car invoice (a pro forma invoice may be accepted), a copy of your residence permit/Cartão de Cidadão, NIF, and an IBAN for payment.' }
          ]},
          { id: 's3', title: 'Payment timeframe', content: [
            { kind: 'timeline', text: '30–90 days after approval. The money arrives in your IBAN as a reimbursement.' }
          ]}
        ]},
        { kind: 'warning', text: 'The programme budget for 2024–2025 ran out within 2–3 months. If you are buying an electric car in spring — apply in January-February.' }
      ]
    },
    {
      id: 'taxes',
      title: 'Tax relief',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'ISV (customs/import)', content: [
            { kind: 'checklist', items: [
              'Pure BEVs: **0%** ISV (full exemption)',
              'PHEV (plug-in hybrid) with electric range ≥50 km: reduced ISV (25–40% discount)',
              'HEV (standard hybrid): standard ISV, as for petrol/diesel',
              'The validity of the relief is confirmed annually in the OE'
            ]}
          ]},
          { id: 't2', title: 'IUC (annual tax)', content: [
            { kind: 'checklist', items: [
              'BEV: since 2024 NOT fully exempt (it was 100% until 2023). Now around €30–50/year depending on engine capacity / power',
              'PHEV: standard IUC, but with a lower environmental component',
              'Hybrids: standard IUC'
            ]}
          ]},
          { id: 't3', title: 'IRS (for companies/sole traders)', content: [
            { kind: 'checklist', items: [
              'Company electric car: full depreciation up to €62,500 (for a petrol car — €25,000)',
              'Charging (kWh) — 100% IVA deduction for companies (for petrol — 50%)',
              'Key point for freelancers: an electric car is the most effective way to obtain tax relief if you have recibos verdes with high turnover'
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
          '🏠 Home wallbox charger: EDP/Galp tariff — €0.16–0.20/kWh at night (dual-rate tariff)',
          '💳 Payment: Mobi.E card (€5 registration) OR payment via the EDP, Galp, Iberdrola apps',
          '🅿️ Free parking: while charging at Mobi.E stations — first 2 hours'
        ]}
      ]
    },
    {
      id: 'plate',
      title: 'Number plate and identification',
      content: [
        { kind: 'checklist', items: [
          'Electric car since 2023 — green frame on the number plate (mandatory on first registration)',
          'Older electric cars — you can switch to a green plate for €30 at IMT',
          'Green plate = free entry to Lisbon’s ZER (low-emissions zone, expanded from 2025)',
          'PHEV — plate without a frame; reliefs are partial'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Subsidy for an individual (BEV M1)', amountEUR: 4000, note: 'up to, Fundo Ambiental 2026' },
    { label: 'Subsidy for a legal entity (BEV M1)', amountEUR: 6000, note: 'up to' },
    { label: 'Electric bicycle / scooter', amountEUR: 500 },
    { label: 'ISV for BEV', amountEUR: 0 },
    { label: 'Mobi.E card (registration)', amountEUR: 5 }
  ],
  sources: [
    { title: 'Fundo Ambiental — Mobilidade Elétrica', url: 'https://www.fundoambiental.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Mobi.E — charging network', url: 'https://www.mobie.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — ISV/IUC calculators', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UVE — União dos Veículos Elétricos (community)', url: 'https://www.uve.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
