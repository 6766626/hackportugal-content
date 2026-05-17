export default {
  editorialVoice: 'hackportugal',
  id: 'visa-d-status-check',
  categoryId: 'residence_permit',
  title: 'Checking D visa status and AIMA appointment',
  tldr: 'A D residence visa is valid for 4 months / 120 days within the dates on the visa sticker (not “from the date of entry”) and usually allows 2 entries. After entry, you need to obtain an AIMA appointment for biometrics and residence permit processing. Status is checked via the AIMA portal (portal.aima.gov.pt). For cases started under SEF (before October 2023), an email enquiry to the regional AIMA office is sometimes needed. If there is no appointment 30 days after entry, contact AIMA by email.',
  tags: ['visa', 'd visa', 'aima', 'status', 'appointment'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'timeline',
      title: 'Timeline from visa issue to residence permit',
      content: [
        { kind: 'checklist', items: [
          '1. You received a D residence visa — it is usually valid for 4 months / 120 days within the dates on the visa sticker (not “from the date of entry”) and allows 2 entries. Use the “valid from / until” dates on the sticker as your reference',
          '2. Entry into Portugal',
          '3. During the visa validity period, you need to have / obtain an AIMA appointment to submit the residence permit application and biometrics. The decision and card are issued later',
          '4. Historically, AIMA assigned the appointment itself; now this does not happen automatically — sometimes you need to initiate it',
          '5. At the appointment — biometrics, document check, signing the application/declarations. Foreign documents, if required, must be apostilled/legalised and translated in advance (the apostille is NOT “signed” at AIMA)',
          '6. The residence permit card arrives by post within 2–4 weeks (sometimes up to 90 days)'
        ]},
        { kind: 'warning', text: 'If the visa is expiring and AIMA has not given an appointment, keep evidence of all contacts and urgently seek written confirmation / submission of the application. If there is a risk of overstaying, it is better to obtain individual legal advice — do NOT assume that simply waiting automatically legalises your stay.' }
      ]
    },
    {
      id: 'portal-aima',
      title: '1. Checking via the AIMA portal',
      content: [
        { kind: 'paragraph', text: 'The AIMA Portal is one of the main channels for some AIMA processes, but it is NOT a universal tracker for all D visas. First check the visa sticker / consulate letter / VFS and the documents issued with the visa; then check the Portal and AIMA contacts.' },
        { kind: 'checklist', items: [
          'Go to portal.aima.gov.pt',
          'Login — using the authentication methods available on the portal, including Chave Móvel Digital (the state electronic identification and signature tool), if it has already been activated. New arrivals on a D visa often do not yet have CMD — check alternative login / contact AIMA',
          '“Meus Processos” section — list of your cases',
          'Status names (for example, “Pendente”, “Em análise”, “Aprovado”, “Notificado para entrevista”) may differ depending on the type of process — this is NOT an official complete list',
          'The appointment date and location appear in the “Agendamento” field'
        ]}
      ]
    },
    {
      id: 'legacy-sef',
      title: '2. Old cases from the SEF database (before October 2023)',
      content: [
        { kind: 'paragraph', text: 'Some old SEF processes have been transferred into AIMA systems, but whether they appear in the Portal depends on the type and stage of the process. If the process is not in the Portal, this does NOT necessarily mean a refusal or an error.' },
        { kind: 'checklist', items: [
          'sef.pt redirects to aima.gov.pt',
          'Old process with no trace on the portal — contact AIMA via official channels (see the guide “How to contact AIMA”). An email to the regional delegation may help, but this is NOT a guaranteed channel',
          'In the enquiry, state: full name, NIF, Nº do processo (SEF or AIMA — whichever you have), submission date',
          'A reply arrives within 2–6 weeks'
        ]}
      ]
    },
    {
      id: 'no-appointment',
      title: 'No appointment 30 days after entry — what to do',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '1. First, the portal', content: [
            { kind: 'paragraph', text: 'Check the AIMA portal again — sometimes the appointment is there, but without an email notification.' }
          ]},
          { id: 'n2', title: '2. Contact via official AIMA channels', content: [
            { kind: 'paragraph', text: 'Use the official contacts published on aima.gov.pt: the contact form, the contact-centre telephone number, or reply to a specific delegation email if you have received an official letter. Do NOT rely on unverified regional addresses in the cidade@aima.gov.pt format. Attach to the enquiry: D visa (PDF), entry stamp, passport, NIF, proof of address.' }
          ]},
          { id: 'n3', title: '3. After 60 days — complaint to the Provedor de Justiça', content: [
            { kind: 'paragraph', text: 'The Provedor de Justiça (ombudsman) accepts online complaints. This creates an official trail and sometimes helps, but does NOT guarantee that a date will be assigned.' }
          ]},
          { id: 'n4', title: '4. Before the visa expires', content: [
            { kind: 'paragraph', text: 'Before the visa expires, send an enquiry through an official AIMA channel and keep the evidence: a copy of the email, automatic reply, enquiry/protocolo number, Portal screenshots, appointment confirmation. This may help prove good faith, but is NOT an automatic guarantee of legal status.' }
          ]}
        ]}
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'checklist', items: [
          '❌ “Processo não encontrado” — may mean that the process is not linked to your account, is not displayed in the Portal, or is being handled through another channel. Check the visa details / consular notification and contact AIMA through an official contact with copies of the documents',
          '❌ Appointment 6 months ahead — accept it as it is; AIMA is overloaded',
          '❌ Appointment in another city — you can request a transfer for a valid reason; transfer is NOT guaranteed. It is often safer to accept the available appointment if it is physically possible to attend',
          '❌ Lost the appointment slip — reprint it on the portal or request it through official AIMA channels',
          '❌ Visa has expired — immediately record contact with AIMA through an official channel, keep evidence, check whether temporary document extensions apply and, if necessary, contact a lawyer/solicitador. A complaint to the Provedor is possible, but it does NOT replace legalisation of status'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA Portal — portal.aima.gov.pt', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Residence visa (visa for obtaining a residence permit)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — entry and residence regime', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Obtain a residence permit', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-autorizacao-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
