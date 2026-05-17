export default {
  editorialVoice: 'hackportugal',
  id: 'aima-contact',
  categoryId: 'residence_permit',
  title: 'How to contact AIMA — all channels',
  tldr: 'AIMA is overloaded: the 808 202 653 line is often busy, email replies take 2–6 weeks, and in-person service is by appointment only. The practical route: your AIMA Portal account (portal.aima.gov.pt), booking through Espaço Cidadão, or the dedicated 800 203 373 line for residents who already have a process. For urgent cases — email by region, list below.',
  tags: ['aima', 'contacts', 'contact', 'phone', 'email'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'channels',
      title: 'Contact channels — by priority',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. AIMA Portal (portal.aima.gov.pt) — online account', content: [
            { kind: 'paragraph', text: 'The official online channel for available AIMA electronic procedures. Login is via Chave Móvel Digital (the state electronic identification and signature tool). Available functions depend on the type of process: for some services, case status, document submission, notifications and appointment booking are available; for others, an in-person appointment or a separate AIMA notification is still required. Check in your personal account and on the AIMA/ePortugal page whether your specific service can be completed online.' }
          ]},
          { id: 'c2', title: '2. Espaço Cidadão / ePortugal — in-person appointment', content: [
            { kind: 'paragraph', text: 'On ePortugal/SIGA you can check available AIMA services and service locations. Not all Espaço Cidadão offices have AIMA services, and the services available are limited to specific procedures; availability depends on the municipality and the type of service. Slots may be unavailable — check regularly.' }
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
            { kind: 'paragraph', text: 'This free line is mentioned as a channel for people with an open process at AIMA, but before using it you must confirm the number and audience on the official aima.gov.pt page — telephone campaigns may change.' }
          ]},
          { id: 'c5', title: '5. Email', content: [
            { kind: 'paragraph', text: 'Use the email addresses and contact forms published on the official AIMA “Contactos” page or on the page for the specific service location / in the AIMA notification you received. Unverified regional addresses in the format city@aima.gov.pt circulate regularly — do not send personal data there unless they are confirmed on aima.gov.pt.' },
            { kind: 'checklist', items: [
              'Always include the número de processo, full name, NIF, and submission date',
              'Send only the necessary documents and only to official addresses / through AIMA Portal',
              'DO NOT forward your passport, bank details or full document packs to unverified emails or chats'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'community-tools',
      title: 'Community tools for getting through by phone',
      content: [
        { kind: 'paragraph', text: 'The AIMA 808 202 653 line is often busy. SEF was abolished in October 2023, and its immigration functions were transferred to AIMA — old materials may mention SEF, but you need to contact AIMA. Any unofficial bots/chats are NOT connected to AIMA:' },
        { kind: 'checklist', items: [
          '⚠️ Telegram bots with “automatic dialling” (for example, @callaimabot) are NOT official. By giving a bot your phone number, NIF, número de processo or passport scan, you are giving personal data to a third party. Use only at your own risk',
          '⚠️ Public/private chats (such as @aimasefgroup) may be useful for general information, but DO NOT publish DUC, CN codes, NIF, número de processo, recibos, passport details or screenshots containing personal data there',
          'For statistics on “call-through windows”, the community runs unofficial channels — use them only as a reference, without sharing personal data'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips: how to get an answer',
      content: [
        { kind: 'checklist', items: [
          '📅 The waiting time for booking through the portal depends on the service and region; slots may be unavailable. Check regularly and keep confirmations of your booking attempts',
          '☎️ It is better to call Tuesday–Thursday. Monday and Friday are dead. The first 30 minutes after opening give the highest chance of getting through',
          '🗣️ Script: “Bom dia, tenho o processo número X e gostaria de saber o estado” (good morning, I have process X and would like to know the status)',
          '📧 An email without a processo is often ignored. Always attach documents or a screenshot of the portal',
          '📮 In the event of an unjustified delay, you can submit a queixa ao Provedor de Justiça (ombudsman), attaching evidence of your contacts with AIMA — this does NOT guarantee acceleration and does not replace procedural appeal deadlines',
          '⚖️ A court measure against AIMA inaction is selected by a lawyer — usually this is an administrative action called intimação para a prática de ato devido (CPTA). “Injunção” in Portugal is a procedure for recovering monetary claims, not a remedy against administrative inaction'
        ]}
      ]
    },
    {
      id: 'physical-addresses',
      title: 'Physical addresses — where to check the current list',
      content: [
        { kind: 'warning', text: 'The addresses and functions of AIMA offices change. Before visiting, check “Locais de atendimento” on aima.gov.pt and your appointment confirmation. The address stated in the SMS/email appointment confirmation is more important than any static list.' },
        { kind: 'checklist', items: [
          'Delegations operate in Lisboa, Porto, Coimbra, Faro, Funchal (Madeira), Ponta Delgada (Açores) and other cities — the exact list and addresses are on aima.gov.pt',
          '⚠️ WITHOUT a prior appointment, service has NOT operated since 2024'
        ]}
      ]
    },
    {
      id: 'when-escalate',
      title: 'When to escalate',
      content: [
        { kind: 'checklist', items: [
          'AIMA refusal → IMMEDIATELY check the prazo e meio de impugnação in the AIMA notification itself and contact a lawyer; deadlines depend on the type of decision and may be short (often 30 days, but not universally)',
          'Silence for > 90 days on a request → queixa to the Provedor de Justiça (provedor-jus.pt) — this does not guarantee acceleration, but records the systemic problem',
          'Complaints about service → Livro de Reclamações (physical/digital) or an official AIMA complaint; for systemic breaches — Provedor de Justiça',
          'Suspected corruption/crime by an employee → Polícia Judiciária / Ministério Público (NOT IGAI: IGAI is the Inspeção-Geral da Administração Interna and works mainly with law enforcement bodies)',
          'Problems with a residence permit and risk of deportation → urgently contact a lawyer from the Ordem dos Advogados with immigration practice',
          'Vulnerable group (refugees, minors) → CPR (Conselho Português para os Refugiados)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — Contactos (main contacts page)', url: 'https://aima.gov.pt/pt/contactos', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA — Locais de atendimento', url: 'https://aima.gov.pt/pt/locais-de-atendimento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'AIMA Portal — personal account', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Agendamento', url: 'https://eportugal.gov.pt/agendamento', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Provedor de Justiça — Portugal’s ombudsman', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei n.º 41/2023 — creation of AIMA / extinction of SEF', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023-212371907', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
