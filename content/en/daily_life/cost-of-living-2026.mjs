export default {
  editorialVoice: 'hackportugal',
  id: 'cost-of-living-2026',
  categoryId: 'daily_life',
  title: 'Cost of living in Portugal in 2026 — full breakdown',
  tldr: 'For a single person to live comfortably in Lisbon or Porto in 2026: €1,800-2,800/month. In the provinces (Coimbra, Braga, Alentejo): €1,100-1,700. For a family of 4 in Lisbon: €3,500-5,500. The main expense is rent (40-60% of the budget)\.\n\nMinimum wage in Portugal from 01.01.2026: €920/month (×14 = €12,880/year).',
  tags: ['cost', 'budget', 'salary'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'reference',
      title: 'Reference figures for 2026',
      content: [
        { kind: 'checklist', items: [
          '💰 Minimum wage in Portugal: €920/month × 14 = €12,880/year',
          '💰 Average net salary: ~€1,300/month (INE 2026 data)',
          '💰 Average gross salary: ~€1,800/month',
          '💰 IAS (Indexante dos Apoios Sociais): €537.13/month (Portaria 480-A/2025/1 of 30.12.2025, in force from 01.01.2026; +2.8% vs 2025)',
          '💰 Poverty threshold: ~€570/month (60% of the median according to INE 2026)',
          '💰 Minimum for the D7 visa: usually 1× SMN = €920/month for the applicant, +50% SMN = €460 for a second adult, +30% SMN = €276 per child (Portaria 1563/2007). Consulates often require proof of regular passive income and/or funds for 12 months',
          '💰 Minimum for the D8 visa: 4× SMN = €3,680/month (remote-work income; SMN is the minimum wage of €920)'
        ]}
      ]
    },
    {
      id: 'housing',
      title: 'Housing — the main expense',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Rent for a T1 (1 bedroom)', content: [
            { kind: 'checklist', items: [
              'Lisboa, centre: €1,400-2,500/month',
              'Lisboa, suburbs (Almada, Amadora): €800-1,400',
              'Cascais/Oeiras: €1,200-2,000',
              'Porto, centre: €900-1,400',
              'Porto, suburbs (V.N.Gaia): €700-1,100',
              'Coimbra: €550-850',
              'Braga: €500-800',
              'Faro/Algarve (in winter): €700-1,200',
              'Small towns in Alentejo: €350-600'
            ]}
          ]},
          { id: 'h2', title: 'Utilities',
            content: [
            { kind: 'checklist', items: [
              'Electricity: €80-200/month (heavily season-dependent; in winter with heaters it can be twice as much)',
              'Gas (mains / cylinders): €30-70/month',
              'Water + sewerage: €15-40/month',
              'Internet (100-500 Mbps) + TV + mobile: €35-60/month (bundle tariff)',
              'Condomínio: usually paid by the owner; the tenant pays only if it is explicitly stated in the contrato de arrendamento. Typically €20-80/month; buildings with a lift/garage/pool cost more',
              'IMI (owners only): €100-1,000/year. Rate 0.3-0.45% of the VPT for urban property on the mainland, set annually by the município (Lisboa often 0.3%; Porto usually low/mid; Madeira/Açores should be checked for the specific municipality). The exact rate is in the Câmara Municipal decision and on Portal das Finanças'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'food',
      title: 'Food',
      content: [
        { kind: 'checklist', items: [
          '🛒 Supermarket for 1 person: €180-300/month',
          '🛒 For a family of 4: €450-800/month',
          '☕ Coffee in a café: €0.70-1.20',
          '🥐 Pastel de nata: €1.20-2',
          '🍽️ “Menu do dia” lunch in a café: €8-15',
          '🍽️ Mid-range restaurant: €15-30/person',
          '🍽️ Expensive restaurant: €40-80/person',
          '🍷 Bottle of good wine in a supermarket: €4-8',
          '🍺 Beer in a bar: €1.50-3'
        ]}
      ]
    },
    {
      id: 'transport',
      title: 'Transport',
      content: [
        { kind: 'checklist', items: [
          '🚇 Lisboa Navegante (metro + bus + trains): €40/month',
          '🚇 Porto Andante: €30/month municipal, €40/month metropolitan',
          '🎫 Single metro journey: €1.65-1.85',
          '🚕 Uber/Bolt, short trip: €4-8',
          '🚕 Uber/Bolt, airport-centre: €10-20',
          '🚆 Lisboa-Porto Alfa Pendular: €25-40',
          '🚌 Lisboa-Porto FlixBus: €5-25',
          '⛽ Petrol: €1.70-1.90/litre',
          '🚗 Car insurance: €300-700/year',
          '🚗 IUC (car tax): €30-500/year',
          '🅿️ Parking in the centre: €2-5/hour, €80-150/month for residents'
        ]}
      ]
    },
    {
      id: 'healthcare',
      title: 'Health',
      content: [
        { kind: 'checklist', items: [
          '🏥 SNS: after obtaining a Número de Utente while legally resident, most consultations and planned care are free. Urgência without a referral from SNS24/family doctor may have a taxa moderadora (if there is no hospitalisation/exemption under DL 52/2022)',
          '💊 Prescription medicines through SNS: 10-90% discount depending on the reimbursement category',
          '🩺 Private insurance: €25-80/month per adult',
          '🩺 Private family insurance: €120-200/month',
          '🩺 Private appointment without insurance: €50-100',
          '🦷 Dentist (not through SNS): €30-150 per appointment, more for complex work',
          '👓 Optometrist + glasses: €80-250'
        ]}
      ]
    },
    {
      id: 'education',
      title: 'Education',
      content: [
        { kind: 'checklist', items: [
          '🧒 State nursery (0-3 years): under Creche Feliz, many places in the rede pública/social and participating privadas are free for eligible children, but places are scarce; outside the programme — usually €0-400/month according to income',
          '🧒 Private nursery: €400-1,200/month',
          '🏫 State kindergarten (3-6 years): free',
          '🏫 Private Portuguese school: €3,000-15,000/year',
          '🌍 International schools (British, French, German): €8,000-25,000/year',
          '🎓 State university for portugueses/EU and equivalent students: ~€700-1,300/year',
          '🎓 Non-EU under estatuto de estudante internacional: ~€2,000-7,000/year. Legal residents may be treated as national/EU only if they meet the conditions of DL 36/2014 (usually residence >2 years on 1 January of the year of admission, with exceptions)',
          '🎓 Private universities: €3,500-15,000/year'
        ]}
      ]
    },
    {
      id: 'leisure',
      title: 'Leisure',
      content: [
        { kind: 'checklist', items: [
          '🎬 Cinema: €6-10 per adult ticket',
          '🎭 Theatre: €15-35',
          '🎵 Concert: €25-80',
          '🏋️ Fitness club (budget): €20-30/month',
          '🏋️ Premium fitness: €60-100/month',
          '🏊 Municipal swimming pool: €25-40/month',
          '🎾 Padel court: €10-15/hour',
          '📺 Streaming services (Netflix+Spotify+etc.): €25-45/month'
        ]}
      ]
    },
    {
      id: 'budgets',
      title: 'Typical budgets',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Single person in Lisbon, budget', content: [
            { kind: 'checklist', items: [
              'T0/room rent: €700',
              'Utilities + internet: €120',
              'Food: €300',
              'Transport: €40',
              'Everything else: €200',
              'TOTAL: ~€1,360/month'
            ]}
          ]},
          { id: 'b2', title: 'Single person in Lisbon, mid-range', content: [
            { kind: 'checklist', items: [
              'T1 rent: €1,300',
              'Utilities + internet: €160',
              'Food + restaurants: €500',
              'Transport + Uber: €80',
              'Fitness, leisure: €200',
              'Private insurance: €50',
              'Everything else: €300',
              'TOTAL: ~€2,600/month'
            ]}
          ]},
          { id: 'b3', title: 'Family: 2 adults + 2 children, Lisbon', content: [
            { kind: 'checklist', items: [
              'T3 rent: €2,000',
              'Utilities + internet + mobile: €220',
              'Food: €800',
              'Transport (2 Navegante + Uber): €120',
              'Private family insurance: €180',
              'School (if state): €100',
              'Leisure, clothing: €400',
              'Fitness and children’s activities: €200',
              'TOTAL: ~€4,000/month (excluding international school)'
            ]}
          ]},
          { id: 'b4', title: 'D7 pensioner in Cascais', content: [
            { kind: 'checklist', items: [
              'T1 rent in Cascais: €1,500',
              'Utilities: €180',
              'Food + restaurants: €500',
              'Transport + small car expenses: €150',
              'Médicis insurance: €70',
              'Leisure, activities: €300',
              'TOTAL: ~€2,700/month'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'taxes',
      title: 'Taxes — how much is eaten up',
      content: [
        { kind: 'paragraph', text: 'Gross and net — in Portugal the gap is significant. For a gross salary of €2,000/month:' },
        { kind: 'checklist', items: [
          'IRS (income tax): ~11% on average (scale of 11.97-48% across 9 bands — 2026 state budget)',
          'Segurança Social (social security): 11%',
          'Net: ~€1,560 (that is, the employer pays gross €2,000, and also pays 23.75% TSU on top — true cost ~€2,475)',
          'IFICI status (if eligible): flat 20% rate on qualifying income',
          'Sole trader (Recibos Verdes): under the regime simplificado for IRS, usually part of the income is taxable according to coefficients (often 75% for services, depends on CAE/CIRS art. 31). Segurança Social: 21.4% of rendimento relevante (usually 70% of services), quarterly returns; first opening of actividade usually gives an exemption for up to 12 months. IVA art. 53: exemption for turnover up to €15,000/year',
          'IVA mainland: 23% standard, 13% intermediate, 6% reduced. Madeira/Açores — reduced regional rates. In restaurants, part of food is 13%, but alcohol and many drinks are usually 23%'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'INE — Instituto Nacional de Estatística', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — price statistics', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças (tax portal) — IRS 2026 rates', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — 2026 rates', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
