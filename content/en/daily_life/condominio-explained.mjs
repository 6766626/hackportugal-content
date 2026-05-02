export default {
  editorialVoice: 'hackportugal',
  id: 'condominio-explained',
  categoryId: 'daily_life',
  title: 'Condominium — how fees, meetings and residents’ rights work',
  tldr: 'A condominium is the mandatory legal arrangement for all owners in an apartment building (Lei 8/2022 updated the regime). The fee covers cleaning, the lift, insurance and the reserve fund. It is paid monthly or quarterly. The general meeting approves the budget at least once a year. Non-payment can lead to a court claim through Julgado de Paz (small claims court).',
  tags: ['condominium', 'housing', 'fees', 'meeting', 'rights'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal basis',
      content: [
        { kind: 'paragraph', text: 'The horizontal property regime (propriedade horizontal) is governed by the Código Civil (arts. 1414–1438-A) and Lei 8/2022 (entered into force on 10/04/2022). The law updated meeting procedures, electronic voting and penalties for late payment.' }
      ]
    },
    {
      id: 'whats-included',
      title: 'What is included in the condominium',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Mandatory expenses', content: [
            { kind: 'checklist', items: [
              'Cleaning of entrances and common areas',
              'Lift maintenance (contract with a company)',
              'Lighting of common areas',
              'Garden watering, plumber, electrician (emergency call-outs)',
              'Multi-risk building insurance',
              'Administrative expenses (accountant)',
              'Fundo Comum de Reserva — 10% of the monthly fee by law'
            ]}
          ]},
          { id: 'c2', title: 'Optional expenses (by decision of the meeting)', content: [
            { kind: 'checklist', items: [
              'Concierge / management company',
              'Video surveillance',
              'Garden / pool maintenance',
              'Facade painting, roof repairs (major works)',
              'Water cooler, Wi-Fi for the lobby'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-much',
      title: 'How much it costs',
      content: [
        { kind: 'checklist', items: [
          'Average price in Lisbon/Porto for a 70 m² flat — €30–80/month',
          'With concierge and pool — €150–300/month',
          'Older buildings without a lift — €10–25/month',
          'Luxury condominiums (Quinta do Lago, Vale do Lobo) — €300–1000/month',
          'The fee is proportional to the flat’s permilagem (thousandths), as recorded in the Escritura'
        ]},
        { kind: 'paragraph', text: 'The fee is NOT rent, but the owner’s own obligation. Even if the flat is empty or rented out, the owner pays. In a tenancy agreement, payment can be passed on to the tenant, but only the owner is liable to the condominium.' }
      ]
    },
    {
      id: 'meetings',
      title: 'General meeting',
      content: [
        { kind: 'checklist', items: [
          '📅 Mandatory annual meeting — between 1 January and 30 June (under Lei 8/2022)',
          '📬 Convening notice — written notice 10 days in advance with the agenda',
          '🧑‍💼 Chaired by the administrador (elected for 1 year, may receive minimum wage or work as a volunteer)',
          '✅ Quorum — 1/2 of the votes at the 1st call, no quorum at the 2nd',
          '🗳️ Simple majority for the budget, 2/3 for major works, UNANIMOUSLY for changes to the título constitutivo',
          '📱 Electronic voting is allowed if provided for in the regulations',
          '📝 Minutes (Ata) — signed and sent to everyone within 15 days'
        ]},
        { kind: 'warning', text: 'If you disagree with a decision, you have 60 days to challenge it in court. Miss the deadline and the decision comes into force.' }
      ]
    },
    {
      id: 'rights-duties',
      title: 'Your rights and duties',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Rights', content: [
            { kind: 'checklist', items: [
              'Voting rights proportional to permilagem',
              'Right to see ALL condominium accounts (request to the administrator)',
              'Right to obtain the título constitutivo (on purchase — from the notary)',
              'Right to replace the administrador by vote',
              'Right to install air conditioning, windows, an aerial — if this does not affect the external appearance (often regulated by the internal regulations)',
              'Right to connect an electric vehicle charger in the parking area (Lei 98/2021 protects this)'
            ]}
          ]},
          { id: 'r2', title: 'Duties', content: [
            { kind: 'checklist', items: [
              'Pay the fee on time (otherwise — a court claim)',
              'Observe quiet hours (usually 23:00–07:00)',
              'Do not block emergency exits and common areas',
              'Notify others about works that affect neighbours',
              'Do not alter the facade, balconies or window colour without approval'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes and non-payers',
      content: [
        { kind: 'checklist', items: [
          '💰 Arrears > 3 months — the administrator has the right to take the matter to court (Julgado de Paz, fast procedure)',
          '⚖️ The fee becomes a “título executivo” — enforcement is possible without lengthy proceedings',
          '🔒 A non-payer has restricted voting rights at the meeting',
          '🏠 A chronic non-payer — it can go as far as seizure of assets',
          '🤝 Conflict with a neighbour — first mediation at the Junta de Freguesia (local parish authority), only then court'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Standard condominium 70 m²', amountEURMin: 30, amountEURMax: 80, note: '€/month' },
    { label: 'With concierge and shared services', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Multi-risk insurance included', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Julgado de Paz claim (debt recovery)', amountEUR: 70 }
  ],
  sources: [
    { title: 'Lei n.º 8/2022 — Horizontal property', url: 'https://dre.pt/dre/detalhe/lei/8-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — articles 1414–1438-A', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Condominium', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/gestao-de-condominio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IHRU — Institute for Housing and Urban Rehabilitation', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
