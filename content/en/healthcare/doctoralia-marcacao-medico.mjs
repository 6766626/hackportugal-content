export default {
  editorialVoice: 'hackportugal',
  id: 'doctoralia-marcacao-medico',
  categoryId: 'healthcare',
  title: 'Doctoralia and Linkare — finding and booking a private doctor',
  tldr: 'In Portugal, the fastest way to find a private doctor is usually via Doctoralia.pt: 25,000+ doctors and clinics, reviews, prices, languages, an online calendar and filters for Médis/Multicare. Linkare is convenient for blood tests, exames and some specialists: you can compare slots and book without phone calls. A typical appointment with a private GP costs €50–80, with a specialist €70–120, and with seguro de saúde often €15–40. Before your visit, always confirm the price, insurance network and whether a referral is needed.',
  tags: ['doctoralia', 'linkare', 'healthcare', 'insurance'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-private',
      title: 'When to use private healthcare',
      content: [
        { kind: 'paragraph', text: 'SNS remains the basic system, but for an expat a private doctor is often faster: you can get an appointment on the same day or within a week, and choose the doctor’s language, area, clinic and price. This is especially useful before receiving a número de utente, when there is a long queue for a médico de família or when you need a narrow specialist.' },
        { kind: 'checklist', items: [
          'You need an appointment today/this week, and SNS has no slots',
          'You need a doctor who speaks English, Spanish or Russian',
          'You need dermatologia, ginecologia, pediatria, psiquiatria, ortopedia, oftalmologia without a long wait',
          'You need a second opinion before surgery or treatment',
          'You need blood tests, ecografia, raio-X, TAC, ressonância magnética',
          'You have seguro de saúde: Médis, Multicare, AdvanceCare, Allianz, Tranquilidade, etc.',
          'You do not yet have a residence permit or número de utente, but are ready to pay privately'
        ] }
      ]
    },
    {
      id: 'doctoralia',
      title: 'Doctoralia.pt: the main doctor search',
      content: [
        { kind: 'paragraph', text: 'Doctoralia.pt is the largest aggregator of private doctors in Portugal: more than 25,000 doctors and clinics, profiles, patient reviews, an online calendar, addresses, prices and some insurance filters. For Lisbon, Porto, Braga, Coimbra, the Algarve and Madeira, it is usually the first site for finding an especialista.' },
        { kind: 'checklist', items: [
          'Open doctoralia.pt and choose an especialidade: “Clínico geral”, “Dermatologista”, “Ginecologista”, “Pediatra”, “Psiquiatra”',
          'Enter a city or postcode: Lisboa, Porto, Cascais, Oeiras, Braga, Faro, etc.',
          'Filter by “Marcação online” if you want to book without calling',
          'Check “Opiniões”: look not only at the rating, but also at how recent the reviews are',
          'Check the consultation price: “Consulta privada” or “Primeira consulta”',
          'If you have insurance, look for “Seguro de saúde” and the network name: Médis, Multicare, AdvanceCare',
          'Check the languages in the doctor’s profile; if they are not listed, write in the chat/call the clinic',
          'Save the booking confirmation from email/SMS/WhatsApp'
        ] },
        { kind: 'warning', text: 'The price on Doctoralia is not always final. Additional procedures, exames, mole removal, citologia, ecografia, relatório médico or an urgent consultation may be charged separately. Before the visit, write: “Qual é o preço total da consulta? Aceitam o meu seguro?”' }
      ]
    },
    {
      id: 'linkare-myclinic',
      title: 'Linkare, MyClinic and clinics directly',
      content: [
        { kind: 'paragraph', text: 'Linkare.pt is useful when the task is not only to “find a doctor”, but also to book blood tests, exames or a specialist consultation quickly. Depending on the city, laboratory tests, diagnostic procedures and médicos especialistas with online booking may be available.' },
        { kind: 'paragraph', text: 'MyClinic and the websites of private clinic networks are also worth checking directly: CUF, Lusíadas, Hospital da Luz, Trofa Saúde, Joaquim Chaves Saúde, Germano de Sousa, Unilabs. Sometimes free slots appear on a clinic’s website earlier than in an aggregator.' },
        { kind: 'checklist', items: [
          'For blood tests, search for “análises clínicas”, “check-up”, “exames”',
          'For diagnostics, search for “ecografia”, “raio-X”, “TAC”, “ressonância magnética”, “endoscopia”',
          'Clarify whether a pedido médico is needed: for some exames the clinic may require a referral',
          'If you need the result in English, request “relatório em inglês” in advance',
          'For insurance, check whether the specific clinic is a prestador convencionado',
          'For an urgent issue, a phone call is often faster than an online form',
          'For children, clarify the availability of a pediatra and any age restrictions'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'How not to overpay with Médis/Multicare insurance',
      content: [
        { kind: 'paragraph', text: 'Seguro de saúde in Portugal usually works through a rede convencionada: you pay a copagamento, not the full price. But the same doctor may see patients privately, under Médis, under Multicare or only under one network — this must be confirmed before the visit.' },
        { kind: 'checklist', items: [
          'Check the doctor in the insurance app: Médis, Multicare, AdvanceCare, etc.',
          'Match the address: a doctor may work in several clinics, but the insurance may not apply everywhere',
          'Ask the clinic: “Trabalham com a rede Médis/Multicare para esta consulta?”',
          'Clarify the copagamento: often €15–40 instead of €70–120',
          'Check the carência: a new insurance policy may have a waiting period',
          'For psychiatry, pregnancy, dentistry and physiotherapy, limits are often separate',
          'Take the cartão do seguro, NIF and an identity document',
          'If you pay in full, ask for a fatura com NIF — it can be included in despesas de saúde in IRS'
        ] },
        { kind: 'warning', text: 'The “insurance” filter on an aggregator is not a guarantee of cover. The final rule always belongs to the insurer and the clinic on the date of the visit. In 2026, it is better to check through the insurance app and confirm by phone.' }
      ]
    },
    {
      id: 'appointment-day',
      title: 'Appointment day: what to take and what to ask',
      content: [
        { kind: 'checklist', items: [
          'Identity document: passport, Cartão de Cidadão or residence permit',
          'NIF — for the fatura and IRS',
          'Cartão do seguro or policy details, if you have seguro de saúde',
          'Número de utente SNS, if you already have one',
          'List of medicines with dosages and allergies',
          'Old blood tests, exames, discharge notes, scans, PDFs on your phone',
          'Request a receita eletrónica if you need medication',
          'Ask whether a follow-up is needed and how much it costs',
          'If you need a document for work/school/a visa file, ask for a relatório médico or declaração'
        ] },
        { kind: 'paragraph', text: 'Payment is usually by card, MB WAY or Multibanco. In small practices, they sometimes accept only cartão/Multibanco or cash, so it is better to clarify in advance.' }
      ]
    }
  ],
  costs: [
    { label: 'Private GP / clínico geral', amountEURMin: 50, amountEURMax: 80, note: 'Typical price without insurance; in large networks it may be higher.' },
    { label: 'Private specialist', amountEURMin: 70, amountEURMax: 120, note: 'Dermatologia, ginecologia, pediatria, ortopedia, psiquiatria; procedures and exames are separate.' },
    { label: 'Appointment with seguro de saúde', amountEURMin: 15, amountEURMax: 40, note: 'Usual copagamento in a rede convencionada; depends on the policy and clinic.' },
    { label: 'Basic análises clínicas', amountEURMin: 10, amountEURMax: 60, note: 'The price depends on the set of tests and the presence of a referral/insurance.' }
  ],
  sources: [
    { title: 'Doctoralia Portugal — doctor search, reviews and marcação online', url: 'https://www.doctoralia.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Linkare Portugal — booking exames, análises and specialists', url: 'https://www.linkare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
