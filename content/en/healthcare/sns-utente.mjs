export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Registration with SNS and obtaining a número de utente',
  tldr: 'Número de utente is your personal number in SNS. It gives you the right to join the waiting list for a family doctor, hospital admission, and subsidised prescriptions. It is issued at the Centro de Saúde / USF for your place of residence. You usually need a passport/ID, NIF, proof of legal stay (residence permit, visa, certificado de registo UE) or, if you do not have a residence permit, an atestado da Junta de Freguesia that explicitly confirms you have been living in Portugal for more than 90 days (Despacho n.º 25360/2001). NISS is usually not required for a número de utente. This number ≠ NIF: for healthcare, you specifically need a número de utente.',
  tags: ['sns', 'utente', 'healthcare'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Número de utente is a 9-digit identifier in SNS. Without it, it is harder to make appointments in SNS and receive subsidised prescriptions; some planned services may be charged at SNS rates as for people without confirmed entitlement to SNS. Emergency care and protected cases are available regardless of the number.' },
        { kind: 'paragraph', text: 'It gives access to SNS and to being placed on the list for a médico de família (the doctor is not always assigned immediately; in some regions you may remain sem médico de família for a long time), check-ups, tests, hospital admission, pharmacy subsidies (up to 90% discount on prescriptions), and PNV vaccinations. Anyone in Portugal can call 112 regardless of utente status — the number helps with subsequent records and payment/subsidies.' }
      ]
    },
    {
      id: 'how',
      title: 'How to get it',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find your Centro de Saúde', content: [
            { kind: 'paragraph', text: 'On sns24.gov.pt or sns.pt by postcode.' }
          ]},
          { id: 's2', title: '2. Attend in person with documents', content: [
            { kind: 'checklist', items: ['ID/passport + status document: cartão de residência/residence permit, cartão de cidadão, certificado de registo cidadão UE, valid visa/proof of legal stay; if you do not have a residence permit — atestado da Junta de Freguesia confirming residence for more than 90 days', 'NIF', 'Proof of address (atestado, utility bill or tenancy agreement)', '⚠️ NISS is usually NOT needed for a número de utente. If you have it, you can bring it with you; a refusal solely because NISS is missing should be challenged, and you should ask for the written legal basis'] }
          ]},
          { id: 's3', title: '3. Complete the registration form', content: [
            { kind: 'paragraph', text: 'The Centro de Saúde will register you and assign a utente number. Sometimes a temporary one is issued, with the permanent one arriving later.' }
          ]},
          { id: 's4', title: '4. Get a family doctor', content: [
            { kind: 'timeline', text: 'The número de utente itself is usually issued on the day of application or within 1–14 days. Assignment of a médico de família is a separate stage: from immediate to many months, depending on the region. In Lisbon/Porto the queue is longer; in the provinces it is faster.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'If you do not yet have a residence permit',
      content: [
        { kind: 'paragraph', text: 'Foreign nationals without a residence permit can also obtain access to SNS, but an atestado da Junta de Freguesia is usually required, explicitly stating that you have been living in Portugal for more than 90 days (Despacho n.º 25360/2001). The Junta often asks for two witnesses who are residents of the freguesia, or other proof of address. Without this confirmation, emergency care and certain protected cases are guaranteed; planned care may be billed at SNS rates.' },
        { kind: 'warning', text: 'Emergency care is provided regardless of documents. In addition, pregnant women, minors, vaccination, infectious diseases/threats to public health, family planning, and certain other protected situations have a special access regime. In practice, still ask for a número de utente provisório and the written legal basis in case of refusal.' }
      ]
    },
    {
      id: 'private',
      title: 'In parallel: private insurance',
      content: [
        { kind: 'paragraph', text: 'SNS + private insurance is common practice. Popular options include Médis, Multicare (Fidelidade), and Tranquilidade. From €25/month for a basic plan to €80/month for a full plan. It covers private clinics and reduces waiting times.' }
      ]
    }
  ],
  documents: [
    { title: 'Identity document + status', note: 'Residence permit / CC / passport + visa or certificado de registo UE; without a residence permit — atestado da Junta de Freguesia confirming residence for >90 days' },
    { title: 'NIF' },
    { title: 'Proof of address', note: 'Atestado de Residência, tenancy agreement or utility bill' },
    { title: 'NISS — not mandatory', note: 'not needed for a número de utente, but you can bring it if you already have it' }
  ],
  costs: [{ label: 'SNS registration', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Official Portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Despacho n.º 25360/2001 — access of foreign citizens to SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Citizen Portal', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Request the SNS número de utente', url: 'https://eportugal.gov.pt/servicos/pedir-o-numero-de-utente-do-sns', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
