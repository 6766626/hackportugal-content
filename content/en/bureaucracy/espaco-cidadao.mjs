export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — public services in one place',
  tldr: 'Espaço Cidadão are service points (available across the country, but not guaranteed in every municipality) where many public-service issues can be handled: Chave Móvel Digital, address changes, various certificates and more. The exact set of services depends on the service point — NIF/NISS are not available at every Espaço Cidadão. Larger cities have Loja de Cidadão (separate counters for different authorities — the mix varies by city). Booking via ePortugal.gov.pt is **recommended**, but not mandatory everywhere — some services operate on a walk-in queue or ticket system.',
  tags: ['espaço cidadão', 'loja de cidadão', 'public services'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão and Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — in major cities (Lisbon, Porto, Faro), with separate counters for different authorities (usually Finanças, Segurança Social, IRN, IMT and others). The set of authorities differs in each specific Loja de Cidadão — AIMA/IMT are not available everywhere',
          'Espaço Cidadão — in any municipality, even a small one, where a universal operator handles basic tasks, but refers complex cases to Loja de Cidadão'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'What you can do',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (Portuguese citizen ID card) — replacement, PIN code renewal',
          'Chave Móvel Digital — activation',
          'NIF — obtaining one (for EU/CPLP — without a representative)',
          'Changing your tax address',
          'NISS — application',
          'Criminal record certificates',
          'Vehicle registration (IMT) — simple cases',
          'Family benefit — application',
          'Marriage registration, registration of a child’s birth — basic certificates'
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
            { kind: 'paragraph', text: 'Via ePortugal.gov.pt → choose the service → choose the location → choose the time. Booking is mandatory.' }
          ]},
          { id: 'e3', title: '3. Bring your documents and attend', content: [
            { kind: 'paragraph', text: 'Arrive 10 minutes early. Each service takes 15-30 minutes. The operator often helps with related issues without a separate booking.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips',
      content: [
        { kind: 'checklist', items: [
          'Always book a slot in advance — walk-ins are often not accepted',
          'Bring the original and a copy of every document',
          'If the operator refuses — politely ask them to call a senior staff member',
          'In Lisbon/Porto, it is often better to go to a less busy Espaço Cidadão in the suburbs — there are more free slots',
          'English is not always understood — prepare your request in Portuguese in advance'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — official website', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
