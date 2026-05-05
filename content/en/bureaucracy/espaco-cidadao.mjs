export default {
  editorialVoice: 'hackportugal',
  id: 'espaco-cidadao',
  categoryId: 'digital_gov',
  title: 'Espaço Cidadão — one-stop shop for public services',
  tldr: 'Espaço Cidadão are service desks (found across the country, but not guaranteed in every municipality) where many public service issues are handled: Chave Móvel Digital, change of address, various certificates and others. The exact set of services depends on the desk — NIF/NISS are not available in every Espaço Cidadão. In larger cities there is the Loja de Cidadão (separate counters for different agencies — the line-up varies by city). Booking via ePortugal.gov.pt is **recommended**, but not mandatory everywhere — some services run with walk-ins or ticket queues.',
  tags: ['espaço cidadão', 'loja de cidadão', 'public services'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'difference',
      title: 'Espaço Cidadão and Loja de Cidadão',
      content: [
        { kind: 'checklist', items: [
          'Loja de Cidadão — in major cities (Lisbon, Porto, Faro), separate counters for different agencies (usually Finanças, Segurança Social, IRN, IMT, etc.). The mix of agencies differs in each specific Loja de Cidadão — AIMA/IMT are not everywhere',
          'Espaço Cidadão — in any municipality, even small ones, a universal operator handles basic tasks, but will refer you to a Loja de Cidadão for more complex cases'
        ]}
      ]
    },
    {
      id: 'services',
      title: 'What you can do',
      content: [
        { kind: 'checklist', items: [
          'Cartão de Cidadão (Portuguese citizen ID card) — replacement, PIN code update',
          'Chave Móvel Digital — activation',
          'NIF — getting (for EU/CPLP — without a representative)',
          'Change of tax address',
          'NISS — application',
          'Criminal record certificates',
          'Vehicle registration (IMT) — simple cases',
          'Family allowance — application',
          'Marriage registration, child’s birth — basic certificates'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'How to go',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Find the nearest Espaço Cidadão', content: [
            { kind: 'link', text: 'Map of Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao' }
          ]},
          { id: 'e2', title: '2. Book online', content: [
            { kind: 'paragraph', text: 'Via ePortugal.gov.pt → choose the service → choose the location → choose the time. Booking is mandatory.' }
          ]},
          { id: 'e3', title: '3. Bring documents and attend', content: [
            { kind: 'paragraph', text: 'Arrive 10 minutes early. Each service takes 15–30 minutes. The operator often helps with related matters without a separate booking.' }
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
          'If the operator refuses — politely ask to call a senior member of staff',
          'In Lisbon/Porto it is often better to go to a less busy Espaço Cidadão in the suburbs — there is more availability',
          'English is not always understood — prepare your request in Portuguese in advance'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'ePortugal — Espaços Cidadão', url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Loja de Cidadão — official website', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
