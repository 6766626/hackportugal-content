export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — government services in one place',
  tldr: 'Espaço Cidadão are service points (available across the country, but not guaranteed in every municipality) where many government-service matters can be handled: Chave Móvel Digital, change of address, various certificates and more. The exact set of services depends on the service point — NIF/NISS are not available in every Espaço Cidadão.\n\nBooking via ePortugal.gov.pt is recommended, but not mandatory everywhere — some services operate with walk-in queues or tickets.',
  tags: ['espaço cidadão', 'loja de cidadão', 'government services'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão and Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — in large cities (Lisbon, Porto, Faro), separate counters for different authorities (usually Finanças, Segurança Social, IRN, IMT, etc.). The mix of authorities differs in each specific Loja de Cidadão — AIMA/IMT are not available everywhere',
          'Espaço Cidadão — in any municipality, even a small one, a universal operator handles basic tasks, but refers complex cases to a Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'What you can do',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (identity card for Portuguese citizens) — replacement, PIN update',
          'Chave Móvel Digital — activation',
          'NIF — obtaining it (for EU/CPLP — without a representative)',
          'Change of tax address',
          'NISS — application',
          'Criminal record certificates',
          'Vehicle registration (IMT) — simple cases',
          'Family allowance — application',
          'Marriage registration, birth registration — basic certificates'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'How to get an appointment',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Find the nearest Espaço Cidadão', content: [
            { kind: 'link', text: 'Map of Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao' }
          ]},
          { id: 'e2', title: '2. Book online', content: [
            { kind: 'paragraph', text: 'Via ePortugal.gov.pt → choose the service → choose the location → choose the time. By default Espaço Cidadão serves walk-ins without booking, but for popular services it is better to book in advance.' }
          ]},
          { id: 'e3', title: '3. Take your documents and attend', content: [
            { kind: 'paragraph', text: 'Arrive 10 minutes early. Each service takes 15-30 minutes. The operator often helps with related matters without a separate booking.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'At busy points it is better to book a slot in advance: officially service is walk-in, but same-day capacity often runs out',
          'Bring the original and a copy of each document',
          'If the operator refuses — politely ask them to call a senior staff member',
          'In Lisbon/Porto it is better to go to a less busy Espaço Cidadão in the suburbs — there are more available slots',
          'English is not always understood — prepare your request in Portuguese in advance'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — official website', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
