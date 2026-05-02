export default {
  editorialVoice: 'hackportugal',
  id: 'doctoralia-marcacao-medico',
  categoryId: 'healthcare',
  title: 'Doctoralia and Linkare — finding and booking a private doctor',
  tldr: 'In Portugal, the quickest way to find a private doctor is usually Doctoralia.pt: 25,000+ doctors and clinics, reviews, prices, languages, an online calendar and filters for Médis/Multicare. Linkare is useful for blood tests, exames and some specialists: you can compare slots and book without phone calls. A typical private GP appointment costs €50–80, a specialist €70–120, and with health insurance often €15–40. Before the visit, always confirm the price, insurance network and whether a referral is needed.',
  tags: ['doctoralia', 'linkare', 'healthcare', 'insurance'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-use-private',
      title: 'When to use private healthcare',
      content: [
        { kind: 'paragraph', text: 'SNS remains the basic system, but for an expat a private doctor is often faster: you can get an appointment on the same day or within a week, and choose the doctor’s language, area, clinic and price. This is especially useful before you obtain a número de utente, when there is a long queue for a médico de família, or when you need a specialist.' },
        { kind: 'checklist', items: [
          'You need an appointment today/this week and SNS has no slots',
          'You need a doctor who speaks English, Spanish or Russian',
          'You need dermatologia, ginecologia, pediatria, psiquiatria, ortopedia, oftalmologia without a long wait',
          'You need a second opinion before surgery or treatment',
          'You need blood tests, ecografia, raio-X, TAC, ressonância magnética',
          'You have health insurance: Médis, Multicare, AdvanceCare, Allianz, Tranquilidade, etc.',
          'You do not yet have a residence permit or número de utente, but are ready to pay privately'
        ] }
      ]
    },
    {
      id: 'doctoralia',
      title: 'Doctoralia.pt: the main doctor search tool',
      content: [
        { kind: 'paragraph', text: 'Doctoralia.pt is the largest aggregator of private doctors in Portugal: more than 25,000 doctors and clinics, profiles, patient reviews, an online calendar, addresses, prices and some insurance filters. For Lisbon, Porto, Braga, Coimbra, the Algarve and Madeira, this is usually the first website to use when looking for an especialista.' },
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
        { kind: 'paragraph', text: 'Linkare.pt is useful when the task is not only to “find a doctor”, but also to book blood tests, exames or a specialist consultation quickly. Depending on the city, laboratory tests, diagnostic procedures and médicos especialistas with online booking are available.' },
        { kind: 'paragraph', text: 'MyClinic and the websites of private clinic chains are also worth checking directly: CUF, Lusíadas, Hospital da Luz, Trofa Saúde, Joaquim Chaves Saúde, Germano de Sousa, Unilabs. Sometimes free slots appear on the clinic’s website earlier than on the aggregator.' },
        { kind: 'checklist', items: [
          'For blood tests, search for “análises clínicas”, “check-up”, “exames”',
          'For diagnostics, search for “ecografia”, “raio-X”, “TAC”, “ressonância magnética”, “endoscopia”',
          'Check whether a pedido médico is needed: for some exames the clinic may require a referral',
          'If you need the result in English, request “relatório em inglês” in advance',
          'For insurance, check whether the specific clinic is a prestador convencionado',
          'For an urgent issue, a phone call is often faster than an online form',
          'For children, check that a pediatra is available and ask about age restrictions'
        ] }
      ]
    },
    {
      id: 'insurance',
      title: 'How not to overpay with Médis/Multicare insurance',
      content: [
        { kind: 'paragraph', text: 'Health insurance in Portugal usually works through a rede convencionada: you pay a copayment, not the full price. But the same doctor may see patients privately, under Médis, under Multicare or only under one network — this must be confirmed before the visit.' },
        { kind: 'checklist', items: [
          'Check the doctor in the insurer’s app: Médis, Multicare, AdvanceCare, etc.',
          'Compare the address: a doctor may work in several clinics, but the insurance may not apply everywhere',
          'Ask the clinic: “Trabalham com a rede Médis/Multicare para esta consulta?”',
          'Confirm the copayment: often €15–40 instead of €70–120',
          'Check the waiting period: a new insurance policy may have a waiting period',
          'For psychiatry, pregnancy, dentistry and physiotherapy, limits are often separate',
          'Take your insurance card, NIF and identity document',
          'If you pay in full, ask for a fatura com NIF — it can be included in despesas de saúde in IRS'
        ] },
        { kind: 'warning', text: 'An “insurance” filter on an aggregator is not a guarantee of cover. The final rule is always with the insurer and the clinic on the date of the visit. In 2026, it is best to check through the insurer’s app and confirm by phone.' }
      ]
    },
    {
      id: 'appointment-day',
      title: 'Appointment day: what to take and what to ask',
      content: [
        { kind: 'checklist', items: [
          'Identity document: passport, Cartão de Cidadão or residence permit',
          'NIF — for the fatura and IRS',
          'Insurance card or policy details, if you have health insurance',
          'Número de utente SNS, if you already have one',
          'List of medicines with dosages and allergies',
          'Old blood tests, exames, discharge summaries, scans, PDFs on your phone',
          'Request a receita eletrónica if you need medicines',
          'Ask whether a follow-up is needed and how much it costs',
          'If you need a document for work/school/a visa case, ask for a relatório médico or declaração'
        ] },
        { kind: 'paragraph', text: 'Payment is usually by card, MB WAY or Multibanco. In small practices, they sometimes accept only cartão/Multibanco or cash, so it is better to check in advance.' }
      ]
    }
  ],
  costs: [
    { label: 'Private GP / clínico geral', amountEURMin: 50, amountEURMax: 80, note: 'Typical price without insurance; it may be higher in large chains.' },
    { label: 'Private specialist', amountEURMin: 70, amountEURMax: 120, note: 'Dermatologia, ginecologia, pediatria, ortopedia, psiquiatria; procedures and exames are separate.' },
    { label: 'Appointment with health insurance', amountEURMin: 15, amountEURMax: 40, note: 'Typical copayment in a rede convencionada; depends on the policy and clinic.' },
    { label: 'Basic análises clínicas', amountEURMin: 10, amountEURMax: 60, note: 'The price depends on the set of tests and whether you have a referral/insurance.' }
  ],
  sources: [
    { title: 'Doctoralia Portugal — doctor search, reviews and marcação online', url: 'https://www.doctoralia.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Linkare Portugal — booking exames, análises and specialists', url: 'https://www.linkare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
