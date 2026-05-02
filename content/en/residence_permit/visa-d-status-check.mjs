export default {
  editorialVoice: 'hackportugal',
  id: 'visa-d-status-check',
  categoryId: 'residence_permit',
  title: 'Checking the status of a D visa and an AIMA appointment',
  tldr: 'A D residence visa is valid for 4 months / 120 days within the dates shown on the visa sticker (not “from the date of entry”) and usually allows 2 entries. After entering Portugal, you need to obtain an AIMA appointment for biometrics and the residence permit. Status is checked via the AIMA portal (portal.aima.gov.pt). For cases started back under SEF (before October 2023), an e-mail request to the regional AIMA office is sometimes needed. If there is no appointment 30 days after entry, contact them by e-mail.',
  tags: ['visa', 'd visa', 'aima', 'status', 'appointment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'timeline',
      title: 'Timeline from visa issue to residence permit',
      content: [
        { kind: 'checklist', items: [
          '1. You received a D visa at the consulate — it is valid for 4 months / 120 days within the dates shown on the visa sticker. It usually allows 2 entries. You do not have to enter immediately; the main thing is to enter within the validity period',
          '2. Entry into Portugal — passport stamp with the date',
          '3. Within 120 days, AIMA should issue an appointment for biometrics and the residence permit',
          '4. Historically, AIMA assigned the appointment itself; now this does not happen automatically — sometimes you need to initiate it',
          '5. At the appointment — biometrics, document check, signing the apostille',
          '6. The residence permit card arrives by post in 2–4 weeks (sometimes up to 90 days)'
        ]},
        { kind: 'warning', text: 'The expiry of 120 days without an appointment does NOT automatically make you irregular — the law protects you if you have done everything that depends on you. But it is better to push for an appointment in advance.' }
      ]
    },
    {
      id: 'portal-aima',
      title: '1. Checking via the AIMA portal (main channel)',
      content: [
        { kind: 'checklist', items: [
          'Go to portal.aima.gov.pt',
          'Log in via Chave Móvel Digital (state electronic signature) or NIF+password',
          'If you do not have CMD — activate it at autenticacao.gov.pt',
          '“Meus Processos” section — a list of all your cases',
          'Statuses: “Pendente”, “Em análise”, “Aprovado”, “Notificado para entrevista”',
          'The date and place of the appointment appear in the “Agendamento (appointment booking)” field'
        ]}
      ]
    },
    {
      id: 'legacy-sef',
      title: '2. Old cases from the SEF database (before October 2023)',
      content: [
        { kind: 'paragraph', text: 'Most SEF processes had already been transferred to the AIMA portal by 2026. If your case is not visible on portal.aima.gov.pt, it probably has not yet been transferred but AIMA is required to process it.' },
        { kind: 'checklist', items: [
          'sef.pt redirects to aima.gov.pt',
          'Old process with no trace on the portal — send an e-mail request to the regional AIMA office (see the guide “How to contact AIMA”)',
          'In the request, state: full name, NIF, Nº do processo (SEF or AIMA — whichever you have), submission date',
          'A reply arrives in 2–6 weeks'
        ]}
      ]
    },
    {
      id: 'no-appointment',
      title: 'No appointment 30 days after entry — what to do',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '1. Portal first', content: [
            { kind: 'paragraph', text: 'Check the AIMA portal again — sometimes the appointment is there, but without an e-mail notification.' }
          ]},
          { id: 'n2', title: '2. E-mail to the regional office', content: [
            { kind: 'paragraph', text: 'Send an e-mail to lisboa@aima.gov.pt (or to your region) with the subject “Solicitação de marcação — Visto D”. Attach: D visa (PDF), entry stamp, passport, NIF, proof of address.' }
          ]},
          { id: 'n3', title: '3. After 60 days — complaint to the Provedor de Justiça', content: [
            { kind: 'paragraph', text: 'The Provedor de Justiça (ombudsman) accepts online complaints. It genuinely speeds things up.' }
          ]},
          { id: 'n4', title: '4. Just before the 120 days expire', content: [
            { kind: 'paragraph', text: 'Written confirmation of the fact that you are waiting, sent by e-mail. This protects you legally if the 120 days expire through no fault of your own.' }
          ]}
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Common problems',
      content: [
        { kind: 'checklist', items: [
          '❌ “Processo não encontrado” — system error, try again in 24 hours; if not resolved, e-mail the regional office',
          '❌ Appointment 6 months ahead — accept it as it is, AIMA is overloaded',
          '❌ Appointment in another city — you can request a transfer for a valid reason (work, study)',
          '❌ Lost the appointment slip — reprint it on the portal or request it by e-mail from AIMA',
          '❌ 120 days overdue — e-mail immediately + file a complaint with the Provedor de Justiça; the law protects you'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA Portal — portal.aima.gov.pt', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Residence visa (visa for obtaining a residence permit)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — entry and stay regime', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obtain a residence permit', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-autorizacao-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
