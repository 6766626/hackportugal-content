export default {
  editorialVoice: 'hackportugal',
  id: 'coworking-spaces',
  categoryId: 'daily_life',
  title: 'Coworking spaces in Portugal — where remote workers can work',
  tldr: 'Lisbon, Porto and Madeira are major digital nomad hubs.\n\nPrices: €150-400/month for a hot desk, €250-800/month for a dedicated desk. Major networks: Second Home (premium), LACS, Avila Spaces, Impact Hub, WorkIO. Digital Nomads Village Ponta do Sol (Madeira) — free coworking for registered remote workers.\n\nIn Porto: Porto i/o, Village Underground, Selina Cowork. Wi-Fi 100-1000 Mbps, call rooms from €10/hour.',
  tags: ['coworking', 'remote work', 'digital nomad', 'office'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'lisbon',
      title: 'Lisbon — the main hub',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: '💎 Premium (€300-800/month)', content: [
            { kind: 'checklist', items: [
              'Second Home (Mercado da Ribeira) — a legendary place, plant-filled design, €400-800/month',
              'WorkIO (Marquês de Pombal) — a beautiful open-plan coworking space, €350-600/month',
              'Heden (Avenida) — boutique format with private offices, €500+/month',
              'The Hub (Saldanha) — serviced shared offices, €400-700/month'
            ]}
          ]},
          { id: 'l2', title: '🏢 Mid-range (€150-350/month)', content: [
            { kind: 'checklist', items: [
              'Avila Spaces — 3 locations (Saldanha, Avenida, Atrium) — €150-300/month for a hot desk',
              'Impact Hub Lisboa (Avenida Liberdade) — focused on social projects, €200-400/month',
              'LACS (Santos) — a sister venue to Village Underground — €220/month for a hot desk, €400 for a dedicated desk',
              'Village Underground (Cais do Sodré) — containers as offices — €280-500/month',
              'Cowork Central (Chiado) — quiet, good for freelancers — €200/month',
              'B.Hive (Saldanha) — with an active community, €180/month'
            ]}
          ]},
          { id: 'l3', title: '💰 Budget (<€150/month)', content: [
            { kind: 'checklist', items: [
              'Selina Cowork Secret Garden — in the Selina hostel, day passes available for €15-25',
              'Lisbon municipal libraries — free, Wi-Fi, workspaces',
              'Fablab Lisboa — for hardware projects, affordable rates',
              'CoworkLisboa — one of the oldest, €120-180/month'
            ]}
          ]},
          { id: 'l4', title: '☕ Café-coworking spots', content: [
            { kind: 'paragraph', text: 'Hello, Kristof, Dear Breakfast, Fauna & Flora, Heim Café — quiet cafés with stable Wi-Fi that welcome people working. They do not push you out after an hour; €5-15 per visit for coffee and lunch.' }
          ]}
        ]}
      ]
    },
    {
      id: 'porto',
      title: 'Porto',
      content: [
        { kind: 'checklist', items: [
          'Porto i/o (3 locations: Ribeira, Seaside, Downtown) — the most popular network, €180-350/month',
          'Selina Porto — hostel and coworking space, day pass €15 / €200/month',
          'Typographia (Bolhão area) — bookish loft atmosphere, €150/month',
          'Cowork Porto (Rua do Almada) — budget option, €130/month',
          'Cospaces (Cedofeita) — freelancer community, €180-280/month',
          'Up.Start (Boavista) — for start-ups, often free for accelerator residents'
        ]}
      ]
    },
    {
      id: 'madeira',
      title: 'Madeira — Digital Nomads Village',
      content: [
        { kind: 'paragraph', text: 'Ponta do Sol (15 km from Funchal) has operated since 2021 as Europe’s first “digital nomad village”. Register at digitalnomads.startupmadeira.eu — you receive a free pass to the Ponta do Sol coworking space, community events, and a Slack chat with other remote workers (1000+ members).' },
        { kind: 'checklist', items: [
          '🆓 Coworking in Ponta do Sol — free for registered users',
          '💸 Coworking spaces in Funchal: Colab, CentroCoworking — €150-250/month',
          '🏖️ Seafront café-coworking spots: Loft, Restaurante do Farol',
          '🌿 Community: weekly surf meet-ups, hikes, conversation meet-ups'
        ]}
      ]
    },
    {
      id: 'other-cities',
      title: 'Regions',
      content: [
        { kind: 'checklist', items: [
          'Coimbra — Cowork Coimbra (€200/month), student atmosphere',
          'Braga — Startup Braga (€0 for certified start-ups), Start Point',
          'Aveiro — Creative Science Park €100/month',
          'Faro/Algarve — Cowork Algarve (Loulé), Selina Algarve (Lagos) — especially popular with remote workers in winter',
          'Évora — EcoHub Alentejo, a rare coworking space in the region, €80/month'
        ]}
      ]
    },
    {
      id: 'what-to-look',
      title: 'What to look at when choosing',
      content: [
        { kind: 'checklist', items: [
          '🌐 Wi-Fi: >100 Mbps is the norm; do not settle for less',
          '🔊 Soundproofing — separate quiet zones for calls',
          '🪑 Ergonomics — adjustable chair, monitor',
          '🍽️ Kitchen / coffee included?',
          '🖨️ Printer / scanner',
          '📞 Call booths — how many, free or paid extra',
          '🎉 Community — networking, events (usually once a week)',
          '🕐 Opening hours — 24/7 or 9:00-19:00',
          '💼 Address for mail forwarding (required by some self-employed statuses)',
          '🚇 Transport accessibility — metro / bus within 10 min',
          '🆓 Trial day or week — almost always offered'
        ]}
      ]
    },
    {
      id: 'tax-deduction',
      title: 'Tax aspect',
      content: [
        { kind: 'paragraph', text: 'For recibos verdes under the regime simplificado, expenses are not deducted directly at 100%: taxable income is calculated using coefficients (often 75% for services), but part of the expenses with invoice-receipts can reduce the base. For contabilidade organizada and companies, coworking is treated as a work expense. IVA deduction is only possible for VAT-liable activity with proper paperwork. Always ask for an invoice with NIF; keep receipts for at least 4 years.' },
        { kind: 'checklist', items: [
          'Hot desk: service "serviços de escritório / coworking"',
          'Dedicated desk: service/rental (office services); classification depends on the contract',
          'Coworking as a company address — some allow this (Avila Spaces, Impact Hub); it is useful for registration, but not a mandatory condition for recibos verdes',
          'IFICI (a separate Incentivo Fiscal à Investigação Científica e Inovação regime, which replaced NHR for new applicants with narrower criteria) — taxation depends on the qualification of the activity'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Hot desk in Lisbon', amountEURMin: 150, amountEURMax: 400, note: '€/month' },
    { label: 'Dedicated desk', amountEURMin: 250, amountEURMax: 800, note: '€/month' },
    { label: 'Private office for 1-2 people', amountEURMin: 500, amountEURMax: 1500, note: '€/month' },
    { label: 'Day pass', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Digital Nomads Village Madeira', amountEUR: 0, note: 'for registered users' }
  ],
  sources: [
    { title: 'Digital Nomads Madeira — official', url: 'https://digitalnomads.startupmadeira.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Avila Spaces', url: 'https://avilaspaces.com/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Porto i/o', url: 'https://porto.io/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Impact Hub Lisboa', url: 'https://lisbon.impacthub.net/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
