export default {
  editorialVoice: 'hackportugal',
  id: 'car-insurance',
  categoryId: 'auto_ownership',
  title: 'Car insurance in Portugal — RC is mandatory, Casco is optional',
  tldr: 'Responsabilidade Civil (third-party liability insurance) is mandatory motor insurance for every vehicle registered in Portugal (Decreto-Lei 291/2007). It covers damage to third parties. Casco / Danos Próprios — cover for your own car, optional. 2026 prices: basic RC from €180/year, full package — €400–1,200. Online purchase on Tranquilidade / Fidelidade / Zurich / Ageas websites or via brokers. A new driver (2 years’ experience) pays an extra 20–50%.',
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
              'Mandatory by law (Decreto-Lei 291/2007)',
              'Covers damage to third parties (vehicles, people)',
              'Minimum RC insured amounts: set by law/ASF (see art. 12 DL 291/2007); it is important to distinguish the limit per injured party and the limit per event — check the current amounts in ASF publications',
              'Certificado Internacional de Seguro Automóvel / antiga Carta Verde — for the EU/EEA, Portuguese RC applies automatically, but it is useful to have the certificate; for some countries outside the EU/EEA it may be mandatory',
              'Without valid RC: for a passenger car, the coima is usually **€500–2,500**, apreensão/imobilização do veículo may apply, as well as liability to the Fundo de Garantia Automóvel/injured parties'
            ]}
          ]},
          { id: 'danos-p', title: 'Danos Próprios / Casco', content: [
            { kind: 'checklist', items: [
              'Covers damage to your own vehicle',
              'Types: full cover, limited cover (theft/fire), all-risks',
              'Usually required for leasing or a car loan',
              'Excess (franquia) — from €250 to €2,500'
            ]}
          ]},
          { id: 'assist', title: 'Assistência em Viagem', content: [
            { kind: 'paragraph', text: 'Tow truck + roadside assistance. Not mandatory, but very useful. Often included in a package for €30–60/year. More details in the guide “Flat tyre on the motorway”.' }
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
          '💻 Insurers’ websites (Tranquilidade, Fidelidade, Zurich, Ageas, Allianz, Liberty, MGEN, Ocidental)',
          '🔍 Brokers (aggregators): offline near banks, online — MB Easy, MudeyYa',
          '🏦 Through a bank — often linked to a mortgage',
          '📄 Required: DUA, CC/residence permit, carta de condução, NIF',
          '📅 Valid from the selected date',
          '💳 Payment monthly / quarterly / annually — annually is usually cheaper',
          '📱 Policy — digital, by email; Carta Verde — PDF',
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
          '🔧 Repairs — at a workshop in the insurer’s network or an agreed workshop (estimate)',
          '💶 Franquia — the first €250–2,500 is paid by the client',
          '📅 Review period — 30–60 days',
          '⚖️ Refusal → appeal via ASF (Autoridade de Supervisão de Seguros)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          '🛍️ Compare 3–5 offers — prices can differ by a factor of 2',
          '📅 Changing insurer — 30 days before expiry, written cancellation notice',
          '🚗 When selling a car, the seller’s insurance **does not transfer** to the buyer — the buyer takes out their own RC before driving. The seller notifies the insurer of the sale and can request termination of the contract/a refund of part of the premium or transfer of the policy to another vehicle',
          '🆘 ASF number 213 847 900 — for complaints',
          '🌍 Carta Verde is mandatory for travel to other EU countries',
          '📉 After 5 years without accidents — bonus-malus goes down to the minimum'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic RC (experienced driver, 1.4 l)', amountEURMin: 180, amountEURMax: 280 },
    { label: 'RC + partial Casco', amountEURMin: 400, amountEURMax: 700 },
    { label: 'All types of cover (full package)', amountEURMin: 700, amountEURMax: 1500 },
    { label: 'Coima for driving without RC (passenger car)', amountEURMin: 500, amountEURMax: 2500 }
  ],
  sources: [
    { title: 'Decreto-Lei 291/2007 — Motor insurance', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2007-34522075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'FGA — Fundo de Garantia Automóvel', url: 'https://www.fga.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Motor insurance', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
