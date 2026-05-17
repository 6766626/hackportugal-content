export default {
  editorialVoice: 'hackportugal',
  id: 'emergency-112',
  categoryId: 'emergency_rights',
  title: 'Emergency contacts in Portugal (112 and others)',
  tldr: 'The single number 112 covers ambulance, fire brigade and police. SNS24 (808 24 24 24) provides medical advice by telephone. INEM (112) is emergency medical assistance. PSP/GNR are the police. The numbers are universal and free of charge.',
  tags: ['112', 'ambulance', 'police', 'emergency'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'emergency',
      title: 'Main numbers',
      content: [
        { kind: 'checklist', items: [
          '112 — single emergency number for all situations',
          'SNS24 — 808 24 24 24 — medical advice, appointment booking',
          'PSP — 21 765 4242 (Lisbon) — urban police',
          'GNR — 213 217 000 — gendarmerie (outside cities)',
          'Linha de Emergência Social — 144 — 24/7 social assistance',
          'APAV — 116 006 — support for victims of violence',
          'SOS Criança — 116 111 — support for children'
        ]}
      ]
    },
    {
      id: 'what-to-say',
      title: 'What to say when calling 112',
      content: [
        { kind: 'paragraph', text: 'The operator speaks Portuguese and English. If necessary, an interpreter is connected (Russian is available).' },
        { kind: 'checklist', items: [
          '1. Location — street, house number, city, freguesia (local parish administration)',
          '2. What happened — ambulance / fire / police',
          '3. How many injured people, their condition',
          '4. Your name and telephone number',
          '5. Do not hang up — the operator will tell you when you can'
        ]}
      ]
    },
    {
      id: 'lost-docs',
      title: 'Loss of documents',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Russian Federation passport', content: [
            { kind: 'paragraph', text: 'Russian Consulate in Lisbon (R. Pinheiro Chagas 37) — immediately submit a statement of loss and obtain a certificate for return.' }
          ]},
          { id: 'l2', title: 'Cartão de Cidadão (Portuguese citizen identity card)', content: [
            { kind: 'paragraph', text: 'Block it by calling 211 950 500 (IRN, 24/7). Apply for a new document at any Espaço Cidadão.' }
          ]},
          { id: 'l3', title: 'Residence permit (título de residência)', content: [
            { kind: 'paragraph', text: 'Report to the PSP (police report) → book an appointment with AIMA for a replacement → fee €82 → wait 30-60 days.' }
          ]},
          { id: 'l4', title: 'Bank card', content: [
            { kind: 'paragraph', text: 'Block it in the app or by calling the bank. An MB WAY card is blocked instantly in the app.' }
          ]}
        ]}
      ]
    },
    {
      id: 'embassies',
      title: 'Embassies and consulates (RU/BY/UA/KZ)',
      content: [
        { kind: 'checklist', items: [
          'Russian Federation, Lisbon — Rua Pinheiro Chagas, 37 · +351 21 846 2424',
          'Belarus — no embassy in Portugal, the nearest is in Madrid',
          'Ukraine — Rua de Alcolena 17, Lisboa · +351 21 301 1030',
          'Kazakhstan — no embassy, representation via Madrid'
        ]}
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance and SNS',
      content: [
        { kind: 'paragraph', text: 'Emergency care in the SNS is provided to everyone without exception (including people without legal status and tourists). For scheduled care and confirmation of expenses, you need a Número de Utente (SNS patient number). Private insurance reduces waiting times for non-emergency cases.' }
      ]
    }
  ],
  sources: [
    { title: 'INEM — Instituto Nacional de Emergência Médica', url: 'https://www.inem.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS24 — 808 24 24 24 line', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'PSP — Polícia de Segurança Pública', url: 'https://www.psp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APAV — victim support', url: 'https://apav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Embassy of the Russian Federation in Lisbon', url: 'https://lisbon.mid.ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
