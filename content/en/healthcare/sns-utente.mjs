export default {
  editorialVoice: 'hackportugal',
  id: 'sns-utente',
  categoryId: 'healthcare',
  title: 'Registering with the SNS and obtaining a número de utente',
  tldr: 'Número de utente is a personal number in the SNS. It gives access to a family doctor, hospitalisation, and subsidised prescriptions. It is obtained at the Centro de Saúde for your place of residence. A residence permit is the main route, but NOT the only one: foreigners with lawful stay (visa, registo de cidadão UE) can obtain a utente; people without a residence permit who have been living in Portugal for >90 days also have the right to one (DL 67/2014). NISS is not a universal mandatory document — some Centro de Saúde may request it additionally, but this is not a general SNS rule.',
  tags: ['sns', 'utente', 'healthcare'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'What it is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Número de utente is a 9-digit identifier in the SNS. Without it, appointments are charged as for a non-resident.' },
        { kind: 'paragraph', text: 'It provides: a free family doctor, check-ups, tests, emergency services via 112, hospitalisation, pharmacy benefits (up to 90% discount on prescriptions), vaccinations.' }
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
            { kind: 'checklist', items: ['Identity document: residence permit / Cartão de Cidadão / passport + visa / CRUE registration for EU citizens', 'NIF', 'Proof of address (Atestado de Residência from the Junta de Freguesia, a utility bill or a rental contract)', '⚠️ NISS is NOT a universal SNS requirement; some Centro de Saúde may request it additionally, especially if you have employed or self-employed status'] }
          ]},
          { id: 's3', title: '3. Fill in the registration form', content: [
            { kind: 'paragraph', text: 'The Centro de Saúde will register you and assign a utente number. Sometimes a temporary one is issued, with the permanent one arriving later.' }
          ]},
          { id: 's4', title: '4. Get a family doctor', content: [
            { kind: 'timeline', text: 'From immediate to 6 months depending on the region. In Lisbon/Porto the waiting list is longer; in the provinces it is quicker.' }
          ]}
        ]}
      ]
    },
    {
      id: 'alternatives',
      title: 'If you do not yet have a residence permit',
      content: [
        { kind: 'paragraph', text: 'Under DL 67/2014 (right of access to the SNS) and Constituição art. 64, access to the SNS does not depend exclusively on having a residence permit. People without a residence permit who have been living in Portugal for **more than 90 days** have the right to a utente — to apply, you need an Atestado de Residência from the Junta de Freguesia **confirming residence for >90 days** (standard proof of address may not be enough for people without legal status — the Junta de Freguesia takes witnesses and actual presence into account).' },
        { kind: 'warning', text: 'Emergency medical care, pregnant women, children under 18, infectious diseases (tuberculosis, HIV) — SNS treatment is guaranteed regardless of documents and status.' }
      ]
    },
    {
      id: 'private',
      title: 'In parallel: private insurance',
      content: [
        { kind: 'paragraph', text: 'SNS + private insurance is normal practice. Popular options: Médis, Multicare (Fidelidade), Tranquilidade. From €25/month for a basic plan to €80/month for a full one. It covers private clinics and reduces waiting times.' }
      ]
    }
  ],
  documents: [
    { title: 'Identity document', note: 'Residence permit / Cartão de Cidadão / passport + visa or CRUE for EU citizens' },
    { title: 'NIF' },
    { title: 'Proof of address', note: 'Atestado de Residência, rental contract or utility bill' },
    { title: 'NISS', note: 'not universally mandatory; some Centro de Saúde may request it' }
  ],
  costs: [{ label: 'SNS registration', amountEUR: 0 }],
  timelineDaysMin: 1,
  timelineDaysMax: 14,
  sources: [
    { title: 'SNS — Official Portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DL 67/2014 — Right of Access to the SNS', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/67-2014-25344876', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS24 — Citizen Portal', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Registration with the SNS', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/inscrever-se-no-servico-nacional-de-saude-sns-', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
