export default {
  editorialVoice: 'hackportugal',
  id: 'condominio-explained',
  categoryId: 'daily_life',
  title: 'Condomínio — how fees, meetings and residents’ rights work',
  tldr: 'A condomínio is the mandatory organisation of all owners in a building divided into propriedade horizontal (Lei 8/2022 updated the regime). It usually has a NIPC and an administrador, but it is not an ordinary legal entity. The fee covers cleaning, the lift, insurance and the reserve fund. It is paid monthly or quarterly. The ordinary annual assembly is in the first half of January. If payment is not made, the administrador must initiate cobrança judicial.',
  tags: ['condominium', 'housing', 'fees', 'meeting', 'rights'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-basis',
      title: 'Legal basis',
      content: [
        { kind: 'paragraph', text: 'The horizontal property regime (propriedade horizontal) is governed by the Código Civil (arts. 1414–1438-A) and Lei 8/2022 (entered into force on 10/04/2022).\n\nThe law updated the rules on meetings, remote participation/communications, the powers of the administrador and cobrança de dívidas. Penalties for late payment depend on the regulamento/assembleia decisions and the law.' }
      ]
    },
    {
      id: 'whats-included',
      title: 'What is included in a condomínio',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Mandatory expenses', content: [
            { kind: 'checklist', items: [
              'Cleaning of stairwells and common areas',
              'Lift maintenance (contract with a company)',
              'Lighting of common areas',
              'Garden watering, plumber, electrician (emergency)',
              'Mandatory fire insurance (Código Civil art. 1429); often the condomínio takes out a collective seguro multirriscos for broader cover',
              'Administrative expenses (accountant)',
              'Fundo Comum de Reserva — at least 10% of each owner’s share of the other condomínio expenses (DL 268/94 art. 4)'
            ]}
          ]},
          { id: 'c2', title: 'Optional expenses (by decision of the meeting)', content: [
            { kind: 'checklist', items: [
              'Concierge / management company',
              'Video surveillance',
              'Garden / swimming pool maintenance',
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
          'With concierge and swimming pool — €150–300/month',
          'Older buildings without a lift — €10–25/month',
          'Luxury condomínios (Quinta do Lago, Vale do Lobo) — €300–1000/month',
          'The fee is proportional to the flat’s permilagem (thousandths), recorded in the Escritura'
        ]},
        { kind: 'paragraph', text: 'The fee is NOT rent, but the owner’s own obligation. Even if the flat is empty or rented out, the owner pays. A tenancy agreement may pass the payment on to the tenant, but only the owner is liable to the condomínio.' }
      ]
    },
    {
      id: 'meetings',
      title: 'General meeting',
      content: [
        { kind: 'checklist', items: [
          '📅 Ordinary annual assembly — in the first 15 days of January; it may be postponed to Q1 if this is provided for in the regulamento or by a meeting decision (Código Civil art. 1431)',
          '📬 Notice — written notice 10 days in advance with the agenda',
          '🧑‍💼 The administrador is usually elected for one year; it may be an owner or a professional company, paid or unpaid — as the assembleia decides',
          '✅ On the 1st call, a simple majority of the total value of the building is usually required; on the 2nd call, decisions are taken by a majority of those present, provided they represent at least 1/4 of the value of the building (except for matters requiring a special majority)',
          '🗳️ Budget and ordinary expenses — simple majority; necessary repairs to common parts have their own rules and do not always require 2/3; innovations/alterações usually require 2/3 of the total value; amendment of the título constitutivo usually requires unanimidade',
          '📱 The meeting may be held by videoconferência if the administrador organises it or a majority of owners requests it and the technical conditions exist (Lei 8/2022)',
          '📝 An ata is drafted and signed; decisions must be communicated to absent owners, with 30 days as a guideline'
        ]},
        { kind: 'warning', text: 'For challengeable decisions, there are usually 60 days to bring an ação de anulação (Código Civil art. 1433), but the deadline is calculated differently for those present and absent, and different rules apply to null/ineficazes decisions. In a dispute, consult an advogado quickly.' }
      ]
    },
    {
      id: 'rights-duties',
      title: 'Your rights and duties',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Rights', content: [
            { kind: 'checklist', items: [
              'Voting rights are proportional to permilagem',
              'The right to see ALL condomínio accounts (request to the administrador)',
              'The right to obtain the título constitutivo (on purchase — from the notary)',
              'The right to replace the administrador by vote',
              'The right to install air conditioning, windows, an antenna — provided this does not affect the external appearance (often governed by internal regulations)',
              'The right to install an electric vehicle charger subject to compliance with the procedure for notifying the condomínio (DL 39/2010 as amended by Lei 98/2021); the condomínio may object only on limited grounds (safety, pre-existing common infrastructure, etc.)'
            ]}
          ]},
          { id: 'r2', title: 'Duties', content: [
            { kind: 'checklist', items: [
              'Pay the fee on time (otherwise — court action)',
              'Respect quiet hours (usually 23:00–07:00)',
              'Do not block evacuation exits and common areas',
              'Notify repairs that affect neighbours',
              'Do not change the facade, balconies or window colour without approval'
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
          '💰 If the debt is not paid, the administrador must initiate cobrança judicial within 90 days of the first late payment, unless the assembleia decides otherwise and the amount is not too small (DL 268/94 art. 6). Julgado de Paz — only where it has jurisdiction; otherwise through the ordinary tribunal',
          '⚖️ The ata/assembleia decision approving the amounts, deadlines and debt may be a título executivo for cobrança coerciva (DL 268/94 art. 6 as amended by Lei 8/2022)',
          '🔒 An owner with debts may be restricted from voting on matters related to condomínio expenses (Lei 8/2022), but this is not a complete loss of all voting rights',
          '🏠 A chronic non-payer — it may go as far as seizure of assets through execução',
          '🤝 Conflict with a neighbour — first negotiation, the administrador, livro de ocorrências or mediação if available; as a general rule there is no mandatory Junta de Freguesia stage before going to court'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Standard condomínio 70 m²', amountEURMin: 30, amountEURMax: 80, note: '€/month' },
    { label: 'With concierge and shared services', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Multirisk insurance included', amountEURMin: 5, amountEURMax: 15 },
    { label: 'Julgado de Paz (if competent)', amountEUR: 70, note: 'taxa de justiça; execução through tribunal/agente de execução costs differently' }
  ],
  sources: [
    { title: 'Lei n.º 8/2022 — Propriedade horizontal', url: 'https://dre.pt/dre/detalhe/lei/8-2022', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — articles 1414–1438-A', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Condomínio', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/gestao-de-condominio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IHRU — Institute for Housing and Urban Rehabilitation', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
