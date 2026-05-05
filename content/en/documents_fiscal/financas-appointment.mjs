export default {
  editorialVoice: 'hackportugal',
  id: 'financas-appointment',
  categoryId: 'documents_fiscal',
  title: 'Book an appointment at Finanças — online and without queues',
  tldr: 'Finanças has moved to a hybrid model: most operations are online, appointments by booking via the Portal das Finanças (“Agendamentos”), walk-ins only at large branches in the morning. Booking 1–14 days ahead, free of charge. Popular services: NIF, change of address, password, IRS queries, Recibo Verde, IUC. In Lisboa/Porto queues are longer; it is worth booking in advance.',
  tags: ['finanças', 'booking', 'appointment'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-to-book',
      title: 'How to book',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → “Agendamentos” (at the bottom of the home page)',
          '🌐 Or direct link: Portal das Finanças → e-balcão',
          '📱 You need to sign in with a password or CMD',
          '🏛️ Choose a branch (Serviço de Finanças)',
          '📋 Choose a service from the list',
          '📅 Choose a date and time (20–30 min slots)',
          '✅ Confirm, download the confirmation with a QR code',
          '🔔 Email reminder 24 hours before'
        ]}
      ]
    },
    {
      id: 'services-list',
      title: 'Popular services by appointment',
      content: [
        { kind: 'checklist', items: [
          '🆔 NIF assignment (for foreign nationals) — 15 min',
          '🏠 Change of address — 10 min (usually online)',
          '🔑 Access password (activation) — 5 min',
          '💼 Start/cessation of activity (self-employment) — 30 min',
          '🧾 Certificates (address, debt, income) — 15 min',
          '🚗 IUC / IMT — 20 min',
          '🏢 IMI — 30 min',
          '📄 Help with completing IRS — 30–45 min (March–June season)'
        ]}
      ]
    },
    {
      id: 'walk-in',
      title: 'Without booking',
      content: [
        { kind: 'checklist', items: [
          'Large Lisboa branches (Saldanha, Algés, Restelo) — queues from 07:30',
          'Porto Baixa, Gaia, Matosinhos — similar',
          'Small branches in outlying regions — walk-ins often work fine',
          'You may be turned away if slots are full — better to book',
          'For EMERGENCY cases only (expired deadlines)'
        ]}
      ]
    },
    {
      id: 'no-show',
      title: 'Missed your appointment',
      content: [
        { kind: 'paragraph', text: 'No-show without cancelling = booking blocked for 30 days. Cancel 24 hours in advance via the Portal das Finanças. Rebook from the first available slot.' },
        { kind: 'checklist', items: [
          '⚠️ Cancel 24 hours in advance',
          '🔄 Rebook after a no-show — after 30 days',
          '📞 If you are less than 15 min late — they often still see you',
          '🚫 More than 15 min late — you need a new booking'
        ]}
      ]
    },
    {
      id: 'online-alternatives',
      title: 'What you can do WITHOUT a visit',
      content: [
        { kind: 'paragraph', text: 'Since 2022 most operations are available online. A visit is only needed for biometrics or complex cases.' },
        { kind: 'checklist', items: [
          '✅ NIF for residents — online via CMD or a representative',
          '✅ Change of address — online',
          '✅ Password activation — online (sent by post)',
          '✅ IRS return — online (Modelo 3)',
          '✅ Certificates — download PDF',
          '✅ Recibo Verde — issue online',
          '❌ NIF for a foreign national WITHOUT CMD/representative — in person only'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças (tax portal) — Agendamentos', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Booking at the Serviço de Finanças', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/agendar-atendimento-no-servico-de-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária (tax authority) — in-person service', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
