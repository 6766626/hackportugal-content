export default {
  editorialVoice: 'hackportugal',
  id: 'car-insurance',
  categoryId: 'auto_ownership',
  title: 'Car insurance in Portugal — RC is compulsory, Casco is optional',
  tldr: 'Responsabilidade Civil (third-party liability insurance) is compulsory motor insurance for every vehicle registered in Portugal (Decreto-Lei 291/2007). It covers damage to third parties. Casco / Danos Próprios covers your own car and is optional. 2026 prices: basic RC from €180/year, full package €400–1,200. Buy online on Tranquilidade / Fidelidade / Zurich / Ageas websites or through brokers. A new driver (2 years’ experience) pays an extra 20–50%.',
  tags: ['insurance', 'rc', 'casco', 'car insurance'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Types of cover',
      content: [
        { kind: 'substeps', items: [
          { id: 'rc', title: 'RC — Responsabilidade Civil Obrigatória', content: [
            { kind: 'checklist', items: [
              'Compulsory by law (Decreto-Lei 291/2007)',
              'Covers damage to third parties (cars, people)',
              'Minimum limit: €1,300,000 per person and €8,000,000 per event',
              'Carta Verde (international insurance card) — international green card for the Schengen Area',
              'No RC — fine of €250–1,250, vehicle seizure'
            ]}
          ]},
          { id: 'danos-p', title: 'Danos Próprios / Casco', content: [
            { kind: 'checklist', items: [
              'Covers damage to your own car',
              'Types: full cover, limited cover (theft/fire), all risks',
              'Usually required for leasing or car finance',
              'Excess (franquia) — from €250 to €2,500'
            ]}
          ]},
          { id: 'assist', title: 'Assistência em Viagem', content: [
            { kind: 'paragraph', text: 'Tow truck + roadside assistance. Not compulsory, but very useful. Often included in a package for €30–60/year. More details in the “Flat tyre on the motorway” guide.' }
          ]},
          { id: 'vida', title: 'Ocupantes', content: [
            { kind: 'paragraph', text: 'Life insurance for passengers in the event of a road accident. Additional €30–80/year.' }
          ]},
          { id: 'legal', title: 'Proteção Jurídica', content: [
            { kind: 'paragraph', text: 'Legal assistance in disputes / claims. €20–50/year.' }
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy',
      content: [
        { kind: 'checklist', items: [
          '💻 Insurer websites (Tranquilidade, Fidelidade, Zurich, Ageas, Allianz, Liberty, MGEN, Ocidental)',
          '🔍 Brokers (aggregators): offline near banks, online — MB Easy, MudeyYa',
          '🏦 Through a bank — often linked to a mortgage',
          '📄 You need: DUA, Cartão de Cidadão/residence permit, driving licence, NIF',
          '📅 Valid from the selected date',
          '💳 Payment monthly / quarterly / annually — annually is usually cheaper',
          '📱 Policy — digital, sent by email; Carta Verde — PDF',
          '🚗 Keep in the car: policy or Carta Verde (for checks)'
        ]}
      ]
    },
    {
      id: 'factors',
      title: 'What affects the price',
      content: [
        { kind: 'checklist', items: [
          '🚗 Model / engine size / power',
          '📅 Driver age (< 25 → +30%; > 70 → +15%)',
          '📜 Driving experience (< 2 years → +40%)',
          '🏅 Bonus-malus (BM): 1–14, discount up to 60%',
          '📍 Region of residence (Lisboa > Coimbra > Algarve)',
          '🚙 Annual mileage (< 10,000 / < 20,000 / unlimited)',
          '🏠 Parking: garage / street',
          '📈 Sinistralidade — previous accidents',
          '🔒 Immobiliser / GPS — 5–15% discount'
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'How to report an insurance claim (sinistro)',
      content: [
        { kind: 'checklist', items: [
          '📝 Declaração Amigável (European accident statement) at the accident scene (see guide)',
          '📷 Photos of the location, damage, number plates',
          '📧 Notify the insurer within 8 days',
          '🔧 Repairs — at a workshop in the insurer’s network or an approved workshop (quote)',
          '💶 Franquia — the first €250–2,500 is paid by the customer',
          '📅 Review period — 30–60 days',
          '⚖️ Refusal → appeal through ASF (Autoridade de Supervisão de Seguros)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '🛍️ Compare 3–5 quotes — prices can differ by a factor of 2',
          '📅 Changing insurer — 30 days before expiry, written cancellation request',
          '🚗 When selling a car — transfer the insurance to the new owner within 8 days',
          '🆘 ASF number 213 847 900 — for complaints',
          '🌍 Carta Verde is compulsory for travel to other EU countries',
          '📉 After 5 accident-free years — bonus-malus goes down to the minimum'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic RC (experienced driver, 1.4 l)', amountEURMin: 180, amountEURMax: 280 },
    { label: 'RC + partial Casco', amountEURMin: 400, amountEURMax: 700 },
    { label: 'All types of cover (full package)', amountEURMin: 700, amountEURMax: 1500 },
    { label: 'Fine for driving without RC', amountEURMin: 250, amountEURMax: 1250 }
  ],
  sources: [
    { title: 'Decreto-Lei 291/2007 — Motor insurance', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34522075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Motor insurance', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
