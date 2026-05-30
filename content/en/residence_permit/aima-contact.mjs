export default {
  editorialVoice: 'hackportugal',
  id: 'aima-contact',
  categoryId: 'residence_permit',
  title: 'How to contact AIMA — all channels',
  tldr: 'AIMA is overloaded: the 808 202 653 line is often busy, email replies take 2–6 weeks, in-person service is by appointment only. The realistic route: the AIMA Portal online account (portal.aima.gov.pt), booking via Espaço Cidadão, or using the dedicated 800 203 373 line for residents who already have an ongoing process. For urgent cases — email by region, list below.',
  tags: ['aima', 'contacts', 'contact', 'phone', 'email'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'channels',
      title: 'Contact channels — by priority',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. AIMA Portal (portal.aima.gov.pt) — online account', content: [
            { kind: 'paragraph', text: 'The official online channel for available AIMA digital procedures. Login is via Chave Móvel Digital (the state electronic identification and signature tool).\n\nAvailable functions depend on the type of process: for some services, case status, document submission, notifications and appointment booking are available; for others, an in-person appointment or a separate AIMA notification is still required. Check in your online account and on the AIMA/ePortugal page whether your specific service can be completed online.' }
          ]},
          { id: 'c2', title: '2. Espaço Cidadão / ePortugal — in-person appointment', content: [
            { kind: 'paragraph', text: 'On ePortugal/SIGA, you can check available AIMA services and service locations. Not all Espaço Cidadão sites provide AIMA services, and the available services are limited to specific procedures; availability depends on the municipality and the type of service. Slots may be unavailable — check regularly.' }
          ]},
          { id: 'c3', title: '3. Official phone line — 808 202 653', content: [
            { kind: 'checklist', items: [
              'Hours: Mon–Fri 09:00–17:30',
              'The 808 tariff depends on the operator and network type — before calling, check the cost and whether there is an alternative official number on the AIMA contacts page',
              'Often busy; the best chance is during the first 30 minutes after opening',
              'Speak clearly in Portuguese; English may be possible, but slower',
              'If AIMA publishes an alternative geographic number, try that as well. Do not use unverified numbers from chats'
            ]}
          ]},
          { id: 'c4', title: '4. Possible linha dedicada — 800 203 373', content: [
            { kind: 'paragraph', text: 'This free line is mentioned as a channel for people with an open process at AIMA, but before using it, always confirm the number and audience on the official aima.gov.pt page — phone campaigns can change.' }
          ]},
          { id: 'c5', title: '5. Email', content: [
            { kind: 'paragraph', text: 'Use email addresses and contact forms published on the official AIMA “Contactos” page or on the page of the specific service location / in the AIMA notification you received. Unverified regional addresses in the format cidade@aima.gov.pt circulate regularly — do not send personal data there unless confirmed on aima.gov.pt.' },
            { kind: 'checklist', items: [
              'Always state the número de processo, full name, NIF, and submission date',
              'Send only the necessary documents and only to official addresses / via AIMA Portal',
              'DO NOT send your passport, bank details or full document packs to unverified emails or chats'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'community-tools',
      title: 'Community tools for getting through by phone',
      content: [
        { kind: 'paragraph', text: 'The AIMA 808 202 653 line is often busy. SEF was abolished in October 2023, and its immigration functions were transferred to AIMA — old materials may mention SEF, but you need to contact AIMA. Any unofficial bots/chats have NO connection to AIMA:' },
        { kind: 'checklist', items: [
          '⚠️ Telegram bots with “automatic dialling” (for example, @callaimabot) are NOT official. By giving a bot your phone number, NIF, número de processo or passport scan, you are giving personal data to a third party. Use only at your own risk',
          '⚠️ Public/private chats (such as @aimasefgroup) can be useful for general information, but DO NOT post DUC, CN codes, NIF, número de processo, recibos, passport details or screenshots with personal data there',
          'For statistics on “calling windows”, the community runs unofficial channels — use them only as a guide, without sharing personal data'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practice: how to get a response',
      content: [
        { kind: 'checklist', items: [
          '📅 The waiting time for booking through the portal depends on the service and region; slots may be unavailable. Check regularly and keep confirmations of your booking attempts',
          '☎️ It is best to call Tuesday–Thursday. Monday and Friday are dead. The first 30 minutes after opening give the highest chance of getting through',
          '🗣️ Script: “Bom dia, tenho o processo número X e gostaria de saber o estado” (good morning, I have process X and would like to know the status)',
          '📧 An email without a processo is often ignored. Always attach documents or a portal screenshot',
          '📮 In the event of an unjustified delay, you can submit a queixa ao Provedor de Justiça (ombudsman), attaching evidence of your contacts with AIMA — this does NOT guarantee acceleration and does not replace procedural appeal deadlines',
          '⚖️ A legal measure against AIMA inaction is chosen by a lawyer — usually it is an administrative action, intimação para a prática de ato devido (CPTA). “Injunção” in Portugal is a procedure for recovering monetary claims, not a remedy against administrative inaction'
        ]}
      ]
    },
    {
      id: 'physical-addresses',
      title: 'Physical addresses — where to check the current list',
      content: [
        { kind: 'warning', text: 'AIMA office addresses and functions change. Before visiting, check “Locais de atendimento” on aima.gov.pt and your appointment confirmation. The address stated in the SMS/email appointment confirmation is more important than any static list.' },
        { kind: 'checklist', items: [
          'Delegations operate in Lisboa, Porto, Coimbra, Faro, Funchal (Madeira), Ponta Delgada (Açores) and other cities — the exact list and addresses are on aima.gov.pt',
          '⚠️ WITHOUT a prior appointment, service has NOT been available since 2024'
        ]}
      ]
    },
    {
      id: 'when-escalate',
      title: 'When to escalate',
      content: [
        { kind: 'checklist', items: [
          'AIMA refusal → IMMEDIATELY check the prazo e meio de impugnação in the AIMA notification itself and contact a lawyer; deadlines depend on the type of decision and can be short (often 30 days, but not universally)',
          'Silence > 90 days on a request → queixa to the Provedor de Justiça (provedor-jus.pt) — this does not guarantee acceleration, but records the systemic problem',
          'Service complaints → Livro de Reclamações (physical/digital) or an official AIMA complaint; for systemic breaches — Provedor de Justiça',
          'Suspected corruption/crime by an employee → Polícia Judiciária / Ministério Público (NOT IGAI: IGAI is the Inspeção-Geral da Administração Interna and works mainly with security forces)',
          'Problems with a residence permit and risk of deportation → urgently contact a lawyer from the Ordem dos Advogados with immigration practice',
          'Vulnerable group (refugees, minors) → CPR (Conselho Português para os Refugiados)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Contactos (main contacts page)', url: 'https://aima.gov.pt/pt/contactos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — Locais de atendimento', url: 'https://aima.gov.pt/pt/locais-de-atendimento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA Portal — online account', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Appointment booking', url: 'https://www.gov.pt/servicos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Provedor de Justiça — Portuguese ombudsman', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 41/2023 — creation of AIMA / extinção SEF', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023-212371907', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
