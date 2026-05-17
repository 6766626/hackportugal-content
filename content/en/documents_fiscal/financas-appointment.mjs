export default {
  editorialVoice: 'hackportugal',
  id: 'financas-appointment',
  categoryId: 'documents_fiscal',
  title: 'Booking an appointment at Finanças — online and without queuing',
  tldr: 'Finanças has moved to a hybrid model: most procedures are online, with appointments booked via Portal das Finanças (“Atendimento por Marcação / Agendar atendimento”). Without an appointment, you may sometimes be seen if senhas/walk-in service are available, but this is not guaranteed. Booking is free; available dates depend on the office and the service — in Lisboa/Porto, slots can be taken quickly. Popular services: NIF, change of address, password, IRS, Recibo Verde, IUC, IMT (property purchase tax).',
  tags: ['finanças', 'appointment', 'service'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'how-to-book',
      title: 'How to book',
      content: [
        { kind: 'checklist', items: [
          '💻 Portal das Finanças → Contactos / Atendimento por Marcação / Agendar atendimento',
          '🌐 e-balcão is an alternative for submitting a written request to AT, but it is not an appointment booking',
          '📱 Login with a password or CMD is required',
          '🏛️ Choose the office (Serviço de Finanças)',
          '📋 Choose the service from the list',
          '📅 Choose an available date and time; duration depends on the service',
          '✅ Confirm and download the comprovativo with a QR code',
          '🔔 Save the appointment comprovativo; if the system sends an email/SMS reminder, check your contact details'
        ]}
      ]
    },
    {
      id: 'services-list',
      title: 'Popular services with appointments',
      content: [
        { kind: 'checklist', items: [
          '🆔 Atribuição de NIF (for foreigners) — 15 min',
          '🏠 Alteração de morada — 10 min (usually online)',
          '🔑 Senha de acesso (password activation) — 5 min',
          '💼 Início / Cessação de Atividade (self-employed activity) — 30 min',
          '🧾 Certidões (domicílio, dívida, rendimentos) — 15 min',
          '🚗 IUC — vehicle tax (20 min)',
          '🏠 IMT — property purchase tax (20 min)',
          '🏢 IMI — 30 min',
          '📄 Support with completing IRS — 30–45 min; main Modelo 3 filing season: 1 April – 30 June'
        ]}
      ]
    },
    {
      id: 'walk-in',
      title: 'Without an appointment',
      content: [
        { kind: 'checklist', items: [
          'Large Lisboa offices (Saldanha, Algés, Restelo) — queue from 07:30',
          'Porto Baixa, Gaia, Matosinhos — similar',
          'Small offices in remote regions — walk-in service often works without problems',
          'You may be refused if slots are full — it is better to book',
          'Without an appointment, it is better to rely only on urgent or simple matters; when demand is high, you may be asked to book'
        ]}
      ]
    },
    {
      id: 'no-show',
      title: 'Missed the appointment',
      content: [
        { kind: 'paragraph', text: 'If you cannot attend, cancel or reschedule the appointment as early as possible through the same channel you used to book. Check the cancellation conditions in the appointment confirmation comprovativo.' },
        { kind: 'checklist', items: [
          '⚠️ Cancel/reschedule in advance',
          '🔄 After a no-show, make a new appointment; if the system does not let you choose a slot, contact via e-balcão or Centro de Atendimento Telefónico da AT',
          '📞 If you are < 15 min late — you are often still seen',
          '🚫 If you are > 15 min late — a new appointment is needed'
        ]}
      ]
    },
    {
      id: 'online-alternatives',
      title: 'What can be done WITHOUT a visit',
      content: [
        { kind: 'paragraph', text: 'Since 2022, most procedures have been available online. A visit to Finanças is usually needed for cases where in-person identification is required, where the matter cannot be resolved via Portal/e-balcão, or where the service is not available online. Biometrics are not handled at Finanças — that is AIMA/IRN.' },
        { kind: 'checklist', items: [
          '✅ Obtaining a NIF as a foreigner depends on status and documents: a non-resident usually does this through a tax representative/mandatário via e-balcão or in person at a Serviço de Finanças',
          '✅ Change of address — online',
          '✅ Password activation — online (sent by post)',
          '✅ IRS declaration — online (Modelo 3)',
          '✅ Certidões — download PDF',
          '✅ Recibo Verde — done online',
          '❌ If a foreigner has no access to Portal/CMD and no representative/mandatário — an in-person application at a Serviço de Finanças with documents is usually the remaining option'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Atendimento por Marcação', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Book an appointment at the Serviço de Finanças', url: 'https://eportugal.gov.pt/servicos/agendar-atendimento-no-servico-de-financas', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AT — e-balcão (written requests)', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
