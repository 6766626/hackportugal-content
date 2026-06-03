export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Registering with the SNS and obtaining a número de utente',
  tldr: 'Número de utente is a personal number in the SNS. It gives you the right to join the list for a family doctor, hospitalisation and subsidised prescriptions. It is obtained at the Centro de Saúde / USF for your place of residence. You usually need a passport/ID, NIF, proof of legal stay (residence permit, visa, certificado de registo UE) or, if you do not have a residence permit, an atestado da Junta de Freguesia directly confirming that you have lived in Portugal for more than 90 days (Despacho n.º 25360/2001). NISS is usually not required for a número de utente. This number is not the same as NIF: for healthcare, you specifically need a número de utente.',
  tags: ['sns', 'utente', 'healthcare'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Número de utente is a 9-digit identifier in the SNS. Without it, it is harder to book appointments in the SNS and obtain subsidised prescriptions; some planned services may be charged at SNS rates for people without confirmed entitlement to the SNS. Emergency care and protected cases are available regardless of the number.' },
        { kind: 'paragraph', text: 'It gives access to the SNS and placement on the list for a médico de família (the doctor is not always assigned immediately; in some regions you can remain sem médico de família for a long time), consultations, tests, hospitalisation, pharmacy benefits (up to a 95% discount on prescriptions), and PNV vaccinations. Anyone in Portugal can call 112 regardless of having a utente number — the number helps with subsequent records and payment/benefits.' }
      ]
    },
    {
      id: 'how',
      title: 'How to obtain it',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Find your Centro de Saúde', content: [
            { kind: 'paragraph', text: 'On sns24.gov.pt or sns.pt using your postcode.' }
          ]},
          { id: 's2', title: '2. Go in person with your documents', content: [
            { kind: 'checklist', items: ['ID/passport + status document: cartão de residência/residence permit, cartão de cidadão, certificado de registo cidadão UE, valid visa/proof of legal stay; if you do not have a residence permit — atestado da Junta de Freguesia confirming residence for more than 90 days', 'NIF', 'Proof of address (atestado, utility bill or rental contract)', '⚠️ NISS is usually NOT needed for a número de utente. If you have one, you can take it with you; a refusal solely because you do not have a NISS should be challenged and you should ask for the written legal basis'] }
          ]},
          { id: 's3', title: '3. Fill in the registration form', content: [
            { kind: 'paragraph', text: 'The Centro de Saúde will register you and assign a utente number. Sometimes a temporary one is issued, with the permanent one arriving later.' }
          ]},
          { id: 's4', title: '4. Obtain a family doctor', content: [
            { kind: 'timeline', text: 'The número de utente itself is usually issued on the day of the appointment or within 1–14 days. Assignment of a médico de família is a separate stage: from immediately to many months, depending on the region. In Lisbon/Porto the queue is longer; in provincial areas it is faster.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'If you do not yet have a residence permit',
      content: [
        { kind: 'paragraph', text: 'Foreign nationals without a residence permit can also obtain access to the SNS, but an atestado da Junta de Freguesia is usually required, explicitly stating that you have lived in Portugal for more than 90 days (Despacho n.º 25360/2001).\n\nThe Junta often asks for two witnesses resident in the freguesia or other proof of address. Without such confirmation, emergency care and certain protected cases are guaranteed; planned care may be billed at SNS rates.' },
        { kind: 'warning', text: 'Emergency care is provided regardless of documents. In addition, pregnant women, minors, vaccination, infectious diseases/public health threats, family planning and some other protected situations have a special access regime.\n\nIn practice, still ask for a número de utente provisório and the written legal basis in the event of refusal.' }
      ]
    },
    {
      id: 'private',
      title: 'In parallel: private insurance',
      content: [
        { kind: 'paragraph', text: 'SNS + private insurance is normal practice. Popular options: Médis, Multicare (Fidelidade), Tranquilidade. From €25/month for a basic plan to €80/month for a full plan. It covers private clinics and reduces waiting times.' }
      ]
    }
  ],
  documents: [
    { title: 'Identity document + status', note: 'Residence permit / CC / passport + visa or certificado de registo UE; without a residence permit — atestado da Junta de Freguesia confirming residence for >90 days' },
    { title: 'NIF' },
    { title: 'Proof of address', note: 'Atestado de Residência, rental contract or utility bill' },
    { title: 'NISS — not mandatory', note: 'not needed for a número de utente, but you can take it if you already have one' }
  ],
  costs: [{ label: 'Registration with the SNS', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Official Portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Despacho n.º 25360/2001 — access of foreign citizens to the SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Citizen Portal', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Request the SNS número de utente', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-utente-do-sns', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
