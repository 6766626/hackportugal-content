export default {
  editorialVoice: 'hackportugal',
  id: 'niss',
  categoryId: 'documents_fiscal',
  title: 'How to get a NISS (social security number)',
  tldr: 'NISS (Número de Identificação de Segurança Social) is an 11-digit Segurança Social number. Free of charge. It is obtained through an employer, via the online form “Pedido de NISS para cidadão estrangeiro” on seg-social.pt, or in person at a Loja da Segurança Social. Segurança Social Direta (SSD) is the personal account AFTER getting a NISS, not the channel for the initial application. The NISS requirement for applying for a residence permit at AIMA depends on the visa category — it is NOT universal for all types of residence permit.',
  tags: ['niss', 'social security', 'aima'],
  estimatedReadMinutes: 4,
  recentlyChangedAt: '2025-04-01',
  changeSummary: 'AIMA has extended the NISS requirement to more residence permit categories; the exact list depends on the visa type. There is no universal rule that “NISS is mandatory for every AIMA application” — check the specific category.',
  steps: [
    {
      id: 'what',
      title: 'What is a NISS',
      content: [
        { kind: 'paragraph', text: 'NISS = a unique number in the social security system. It is needed for an employment contract, Segurança Social contributions, self-employment (recibos verdes), benefits, and some residence permit procedures. For SNS you need a separate Número de Utente — it is not the same number.' },
        { kind: 'warning', text: 'Do not confuse it with NIF (tax number, Finanças) or Número de Utente (SNS, separate registration at a health centre).' }
      ]
    },
    {
      id: 'variant-employer',
      title: 'Option A. Through an employer',
      content: [
        { kind: 'paragraph', text: 'If you have an employer, they submit the application when setting up the employment contract. The NISS is assigned automatically; the number will arrive by post or can be checked with Segurança Social.' },
        { kind: 'timeline', text: 'Usually 5–15 working days.' }
      ]
    },
    {
      id: 'variant-online',
      title: 'Option B. Online via the “Pedido de NISS para cidadão estrangeiro” form',
      content: [
        { kind: 'paragraph', text: 'Independently, without an employer — via the online form on seg-social.pt in the section for foreign citizens. This is a public form; login to Segurança Social Direta (SSD) is not needed because you do not yet have a NISS to activate SSD. SSD is used AFTER getting a NISS — to manage contributions, statements, and applications.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find the form on seg-social.pt', content: [
            { kind: 'link', text: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/' }
          ]},
          { id: 's2', title: '2. Fill in the form', content: [
            { kind: 'paragraph', text: 'NIF, passport details, address in Portugal.' }
          ]},
          { id: 's3', title: '3. Upload scans of documents', content: [
            { kind: 'checklist', items: ['Passport/civil identification document (pages with personal data and, if required, pages with a current visa/stamp)', 'NIF (in practice usually needed)', 'Residence permit / visa / EU document', 'Address in Portugal; comprovativo de morada may be requested additionally'] }
          ]},
          { id: 's4', title: '4. Receive the NISS by email or letter', content: [
            { kind: 'timeline', text: '5–30 days. The reply usually comes to the email/contact provided in the application; for foreign citizens a registered letter is often sent as well, inviting you to collect the NISS at a Loja da Segurança Social. SSD becomes fully available after the NISS has been assigned and access has been set up.' }
          ]}
        ]}
      ]
    },
    {
      id: 'variant-in-person',
      title: 'Option C. In person at a Loja da Segurança Social',
      content: [
        { kind: 'paragraph', text: 'If online did not work, try booking via Linha Segurança Social 300 502 502 or through the available Segurança Social channels. Walk-in queues are not possible everywhere or at all times. Take your passport, NIF, and proof of address.' }
      ]
    }
  ],
  documents: [
    { title: 'Passport', note: 'original and copy' },
    { title: 'NIF', note: 'usually needed in practice and often requested by the form' },
    { title: 'Residence permit or visa', note: 'for non-EU citizens' },
    { title: 'Proof of address', note: 'if requested: recent, usually within the last 3 months' }
  ],
  costs: [
    { label: 'State fee', amountEUR: 0 }
  ],
  timelineDaysMin: 5,
  timelineDaysMax: 30,
  sources: [
    { title: 'Segurança Social — Pedido de NISS para cidadão estrangeiro', url: 'https://www.seg-social.pt/pedido-de-niss-para-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Get a NISS', url: 'https://www.gov.pt/servicos/obter-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — checklist by residence permit type', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
