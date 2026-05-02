export default {
  editorialVoice: 'hackportugal',
  id: 'niss',
  categoryId: 'documents_fiscal',
  title: 'How to get a NISS (social security number)',
  tldr: 'NISS (Número de Identificação de Segurança Social) is an 11-digit Segurança Social number. Free of charge. It can be obtained through an employer, via the online form "Pedido de NISS para cidadão estrangeiro" on seg-social.pt, or in person at a Loja da Segurança Social. Segurança Social Direta (SSD) is the personal account AFTER obtaining a NISS, not the channel for the initial application. The requirement to have a NISS when applying for a residence permit at AIMA depends on the visa category — it is NOT universal for all types of residence permit.',
  tags: ['niss', 'social security', 'aima'],
  estimatedReadMinutes: 4,
  recentlyChangedAt: '2025-04-01',
  changeSummary: 'AIMA has extended the NISS requirement to more residence permit categories; the exact list depends on the visa type. There is no universal rule that "NISS is mandatory for every AIMA application" — check the specific category.',
  steps: [
    {
      id: 'what',
      title: 'What a NISS is',
      content: [
        { kind: 'paragraph', text: 'NISS = a unique number in the social security system. Needed for: an employment contract, self-employment (recibos verdes), receiving benefits, registration with SNS through an employer, and applications for most residence permits (from April 2025).' },
        { kind: 'warning', text: 'Do not confuse it with NIF (tax number, Finanças) or the SNS patient number (separate registration at a health centre).' }
      ]
    },
    {
      id: 'variant-employer',
      title: 'Option A. Through an employer',
      content: [
        { kind: 'paragraph', text: 'If you have an employer, they submit the application when setting up the employment contract. The NISS is assigned automatically; the number will arrive by post or can be obtained from Segurança Social.' },
        { kind: 'timeline', text: 'Usually 5–15 working days.' }
      ]
    },
    {
      id: 'variant-online',
      title: 'Option B. Online via the "Pedido de NISS para cidadão estrangeiro" form',
      content: [
        { kind: 'paragraph', text: 'Independently, without an employer — via the online form on seg-social.pt in the section for foreign citizens. This is a public form; logging in to Segurança Social Direta (SSD) is not required, because you do not yet have a NISS to activate SSD. SSD is used AFTER obtaining a NISS — to manage contributions, statements and applications.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find the form on seg-social.pt', content: [
            { kind: 'link', text: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/' }
          ]},
          { id: 's2', title: '2. Fill in the form', content: [
            { kind: 'paragraph', text: 'NIF, passport details, address in Portugal.' }
          ]},
          { id: 's3', title: '3. Upload scans of documents', content: [
            { kind: 'checklist', items: ['Passport (all pages)', 'NIF', 'Residence permit / visa / EU document', 'Proof of address'] }
          ]},
          { id: 's4', title: '4. Receive your NISS by email', content: [
            { kind: 'timeline', text: '5–30 days. The status is sent by email from Segurança Social. After receiving your NISS, activate SSD on seg-social.pt for management.' }
          ]}
        ]}
      ]
    },
    {
      id: 'variant-in-person',
      title: 'Option C. In person at a Loja da Segurança Social',
      content: [
        { kind: 'paragraph', text: 'If the online application is refused, book via 300 502 502 or attend the walk-in queue. Take your passport, NIF and proof of address.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original and copy' },
    { title: 'NIF', note: 'mandatory before NISS' },
    { title: 'Residence permit or visa', note: 'for non-EU citizens' },
    { title: 'Proof of address', note: 'no older than 3 months' }
  ],
  costs: [
    { label: 'State fee', amountEUR: 0 }
  ],
  timelineDaysMin: 5,
  timelineDaysMax: 30,
  sources: [
    { title: 'Segurança Social — Assignment of NISS', url: 'https://www.seg-social.pt/inicio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Request NISS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-numero-de-identificacao-da-seguranca-social-niss-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — NISS requirement from Apr. 2025', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
