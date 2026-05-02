export default {
  editorialVoice: 'hackportugal',
  id: 'aima-contact',
  categoryId: 'residence_permit',
  title: 'How to contact AIMA — all channels',
  tldr: 'AIMA is overloaded: the 808 202 653 line is often busy, email replies take 2–6 weeks, and in-person service is by appointment only. The realistic route: the AIMA Portal personal area (portal.aima.gov.pt), book through Espaço Cidadão, or use the special 800 203 373 line for residents who already have a case. For urgent cases — email by region, list below.',
  tags: ['aima', 'contacts', 'contact', 'phone', 'email'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'channels',
      title: 'Contact channels — by priority',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. AIMA Portal (portal.aima.gov.pt) — online account', content: [
            { kind: 'paragraph', text: 'The main channel from 2026. Login via Chave Móvel Digital (state electronic signature) or NIF+password. Case status, document submission, notifications, appointment booking. Covers 80% of enquiries without phone calls.' }
          ]},
          { id: 'c2', title: '2. Espaço Cidadão — in-person service', content: [
            { kind: 'paragraph', text: 'Some Espaço Cidadão offices have AIMA desks. Book on ePortugal.gov.pt → “Agendamento (appointment booking) AIMA”. Usually a 2–4 week wait, but they provide specific help with your case.' }
          ]},
          { id: 'c3', title: '3. Official phone line — 808 202 653', content: [
            { kind: 'checklist', items: [
              'Hours: Mon–Fri 09:00–17:30',
              'Cost — standard landline tariff',
              'Often busy; best chance — the first 30 minutes after opening',
              'Speak clearly in Portuguese; English is possible, but slower',
              'For repeat calls — alternate the number with the regional code'
            ]}
          ]},
          { id: 'c4', title: '4. Special line — 800 203 373', content: [
            { kind: 'paragraph', text: 'Free line for people with an OPEN case at AIMA. You need the case number (processo). Same hours. Useful for status requests, complaints, and urgent help.' }
          ]},
          { id: 'c5', title: '5. Email by region', content: [
            { kind: 'checklist', items: [
              'Lisboa — lisboa@aima.gov.pt',
              'Porto — porto@aima.gov.pt',
              'Centro (Coimbra, Leiria) — centro@aima.gov.pt',
              'Alentejo (Évora, Beja) — alentejo@aima.gov.pt',
              'Algarve (Faro) — algarve@aima.gov.pt',
              'Açores — acores@aima.gov.pt',
              'Madeira — madeira@aima.gov.pt',
              'General address — info@aima.gov.pt (reply in 2–6 weeks)'
            ]},
            { kind: 'paragraph', text: 'Always include the processo, full name, NIF, and submission date. Attach PDF documents.' }
          ]}
        ]}
      ]
    },
    {
      id: 'community-tools',
      title: 'Community tools for getting through by phone',
      content: [
        { kind: 'paragraph', text: 'The AIMA 808 202 653 line is often busy — the community has come up with workarounds. These tools are unofficial, but widely used and save hours of repeat calls:' },
        { kind: 'checklist', items: [
          '🤖 Telegram bot @callaimabot — automatic dialling to SEF/AIMA. You send the bot your number and case, it calls the AIMA line every N minutes until it gets through, and connects you to an operator. Free',
          '📱 Community @aimacall — publishes successful call-through windows (message statistics)',
          '💬 Chat @aimasefgroup — typical questions are solved collectively: checking DUC, CN codes, payment errors',
          '⚠️ These services are NOT official, and AIMA does not regulate them. Your personal data is passed to a third party — decide whether you are comfortable with that'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Practice: how to get a response',
      content: [
        { kind: 'checklist', items: [
          '📅 Booking with AIMA through the portal — on average 15–60 days of waiting. Book in advance',
          '☎️ It is best to call Tuesday–Thursday. Monday and Friday are poor days. The first 30 minutes after opening give the highest chance of getting through',
          '🗣️ Script: “Bom dia, tenho o processo número X e gostaria de saber o estado” (good morning, I have case X and would like to know the status)',
          '📧 An email without a processo is often ignored. Always attach documents or a portal screenshot',
          '📮 Petitions to the Provedor de Justiça (ombudsman) for a long delay > 90 days — genuinely speed things up',
          '⚖️ Legal action against AIMA inaction — an administrative claim through a lawyer, usually intimação para a prática de ato devido (CPTA). “Injunção” in Portugal is a procedure for recovering monetary claims, not a remedy against administrative inaction (a common mistake)'
        ]}
      ]
    },
    {
      id: 'physical-addresses',
      title: 'Physical addresses — major delegations',
      content: [
        { kind: 'checklist', items: [
          '📍 Lisboa Central — Av. António Augusto de Aguiar, 20',
          '📍 Lisboa Odivelas — Rua Correia Teles 140',
          '📍 Porto Central — Rua D. João IV, 863',
          '📍 Coimbra — Rua Venâncio Rodrigues, 25',
          '📍 Faro — Rua Cons. Bivar, 14',
          '📍 Funchal — Rua Nova da Rochinha 1, Madeira',
          '📍 Ponta Delgada — Rua Eng. José Cordeiro, Açores',
          '⚠️ They do NOT see people WITHOUT an appointment. Walk-in service has not operated since 2024.'
        ]}
      ]
    },
    {
      id: 'when-escalate',
      title: 'When to escalate',
      content: [
        { kind: 'checklist', items: [
          'AIMA refusal → court appeal within 30 days (Tribunal Administrativo)',
          'Silence > 90 days on a petition → complaint to the Provedor de Justiça (provedor-jus.pt)',
          'Misconduct by an employee → Inspecção-Geral dos Serviços (IGAI) of the ministry',
          'Problems with a residence permit and risk of deportation → urgently contact a lawyer from the Ordem dos Advogados (Portuguese Bar Association) with an immigration practice',
          'Vulnerable group (refugees, minors) → CPR (Conselho Português para os Refugiados)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — contacts and online booking', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA Portal — portal.aima.gov.pt', url: 'https://portal.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Agendamento AIMA', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça — Portuguese ombudsman', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
