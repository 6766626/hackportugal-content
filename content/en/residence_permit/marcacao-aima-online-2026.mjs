export default {
  editorialVoice: 'hackportugal',
  id: 'marcacao-aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Booking an AIMA appointment online: the real 2026 workflow',
  tldr: 'In 2026, booking an AIMA appointment is not a simple matter of “pick a date and turn up”. The main entry points are aima.gov.pt and portal-rf.aima.gov.pt, but slots open in waves, some processes are called by SMS/e-mail, and waiting 4–12 months is still normal. Walk-ins barely work. An alternative is to ask for help at an Espaço Cidadão: they do not create a privileged queue, but they can help you access the portal, check contacts and submit/update a request.',
  tags: ['aima', 'appointment', 'residence permit', 'portal-rf'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'reality-check',
      title: '1. Understand what type of appointment you need',
      content: [
        { kind: 'paragraph', text: 'After replacing SEF in October 2023, AIMA works through several channels: personal accounts/portals, e-mail/SMS calls, telephone and local bookings, as well as atendimento in Lojas AIMA and certain balcões. In 2026 there is no universal button to “book any residence permit appointment”.' },
        { kind: 'checklist', items: ['First residence permit after a D1-D8 visa: you usually need an AIMA call/slot to submit biometrics and documents', 'Residence permit renewal: some renewals are done online, while others require atendimento presencial', 'Manifestação de Interesse: the old regime was closed by Lei 61/2025 from 23.10.2025; do not plan your workflow as in 2022–2024', 'Change of details, card replacement, perda/roubo: usually a separate type of atendimento', 'Reagrupamento familiar: often a separate queue and its own document set', 'CPLP: separate rules and portals, not the same as standard art. 75', 'If you already had a SEF/AIMA processo, use the same e-mail and telephone number that are listed in the file'] },
        { kind: 'warning', text: 'Do not buy “AIMA slots” from intermediaries. Official marcação is free; you only pay the AIMA government fees for your process. Selling places often ends in loss of money and problems with access to personal data.' }
      ]
    },
    {
      id: 'online-portal',
      title: '2. Try online: aima.gov.pt and portal-rf.aima.gov.pt',
      content: [
        { kind: 'paragraph', text: 'Start with aima.gov.pt: it publishes the current entry points into services, warnings about process migration and links to portal-rf.aima.gov.pt. If your type of process is available online, the portal will ask you to identify yourself and select the service/request.' },
        { kind: 'checklist', items: ['Go to aima.gov.pt, not via advertising links in Google', 'Check the sections for cidadãos estrangeiros / autorização de residência / renovação', 'Open portal-rf.aima.gov.pt if AIMA directs you there for your process', 'Use the e-mail that was in the visa form, SEF/AIMA or previous pedido', 'Check the telephone number: SMS often only arrives on a Portuguese +351 number, but this is not an absolute rule', 'Save a screenshot of every step: date, hora, mensagem do sistema, número do pedido', 'If the portal says “sem vagas” or “indisponível”, this is not a refusal; it means there is no open appointment wave', 'Try on different days and at different times, but without autoclickers or bots: an account block is worse than waiting'] },
        { kind: 'paragraph', text: 'Realistic waiting time in 2026: from 4 to 12 months between the request/attempts to book and the actual atendimento.\n\nIn Lisbon, Sintra, Amadora and Porto it usually takes longer; in less overloaded districts it is sometimes faster, but “choosing any district” is not possible for every type of process.' }
      ]
    },
    {
      id: 'sms-trick',
      title: '3. SMS/e-mail trick: do not miss the automatic call',
      content: [
        { kind: 'paragraph', text: 'AIMA often does not give a slot manually, but sends a convocatória by SMS or e-mail. The practical “trick” is not to look for a secret link, but to put your contacts in order and monitor notifications as if they were banking alerts.' },
        { kind: 'checklist', items: ['Check which e-mail is listed in your processo: visa, old SEF, AIMA, portal', 'Add AIMA/ePortugal domains to safe senders, and check Spam and Promotions', 'Do not change your telephone number unless necessary; if you have changed it, try to update the contact through an official channel', 'Keep the SIM active: top up prepaid, do not turn off roaming if you are temporarily outside Portugal', 'An SMS may contain a short response deadline; check messages daily', 'If you receive an SMS with a date, immediately take a screenshot and do not delete the message', 'If the date is impossible for a valid reason, reply/write only through the official contact, keeping evidence', 'Do not follow suspicious links asking you to pay for a marcação by MB WAY: AIMA does not sell slots via WhatsApp'] },
        { kind: 'warning', text: 'A missed SMS/convocatória can push the process back. If you are waiting for a residence permit, your telephone and e-mail become legally important contacts, not just a convenience.' }
      ]
    },
    {
      id: 'espaco-cidadao',
      title: '4. If online does not work: Espaço Cidadão',
      content: [
        { kind: 'paragraph', text: 'Espaço Cidadão is not an “AIMA accelerator”, but a help point for digital public services. They can help open ePortugal/AIMA, check access, print evidence, sometimes direct you to the correct balcão or explain which service is currently active.' },
        { kind: 'checklist', items: ['Find the nearest Espaço Cidadão on ePortugal.gov.pt', 'Check opening hours and whether an appointment is needed at the specific posto', 'Take your passport, residence permit/visa, NIF, e-mail and telephone, and access to SMS', 'Take all process numbers: SEF/AIMA, visa sticker, referência, previous recibos', 'Ask specifically for “apoio para marcação/serviços AIMA online”, not to “make a residence permit”', 'Ask them to print or send you a comprovativo if a request was created', 'If the member of staff says the service is unavailable, ask them to indicate the official channel where you should check again'] },
        { kind: 'paragraph', text: 'The advantage of Espaço Cidadão is that you get a human check that the problem is not the password, CMD, browser or wrong type of service. The downside is that they cannot open closed slots and do not solve the AIMA backlog.' }
      ]
    },
    {
      id: 'documents-and-fees',
      title: '5. While waiting for a slot: collect documents and money',
      content: [
        { kind: 'paragraph', text: 'The main mistake is to get a marcação after 8 months and arrive with outdated certificates. Prepare the basic pack in advance, but update documents with a short validity period closer to the date.' },
        { kind: 'checklist', items: ['Passport valid at least for the assessment period; ideally with 6+ months in reserve', 'D1-D8 visa or valid/expired residence permit, if it is a renewal process', 'NIF and proof of tax address in Finanças', 'Rental contract, atestado de residência or other proof of address', 'Comprovativos de meios de subsistência: salário, recibos verdes, bank statements, pensão, passive income — according to your basis', 'NISS and Social Security evidence, if applicable', 'Certificado do registo criminal from the country of origin, if AIMA requires it for your process', 'AIMA authorisation to check the registo criminal português, if included in the form', 'Photos are usually taken on site, but check the requirements of the specific atendimento', 'Money for fees: after 01.03.2026 admission costs €133, standard art. 75 — €307.20'] },
        { kind: 'warning', text: 'Fee amounts depend on the type of process, urgency, renewal, CPLP, minors and agreements. Do not budget using old SEF tables: in 2026 the AIMA tariffs updated from 01.03.2026 apply.' }
      ]
    },
    {
      id: 'proof-and-escalation',
      title: '6. What to do if you have been waiting 6–12 months',
      content: [
        { kind: 'paragraph', text: 'If you regularly try to book and do not get a slot, collect evidence. This is important for an employer, bank, landlord and for a possible complaint/administrative request.' },
        { kind: 'checklist', items: ['Keep a file: dates of login attempts, portal errors, screenshots, e-mails', 'Keep evidence of lawful entry and residence: visa, boarding pass, rental contract, recibos, payslips', 'Check the status on official websites every 1–2 weeks, not only in Telegram chats', 'If the residence permit has expired, check the current extensions of document validity on aima.gov.pt/ePortugal; the rules have changed several times', 'For work, explain to the employer that the absence of an AIMA slot is not the same as a refusal, but documents proving lawful stay are needed', 'If there is an urgent reason — illness, work, reunificação familiar, viagem indispensável — prepare a written justification and evidence', 'For complex cases, use an advogado/solicitador, but access to official channels should remain with you'] },
        { kind: 'paragraph', text: 'The practical aim is not to “beat the portal”, but to have a continuous evidence chain: you requested atendimento, checked official channels, did not avoid AIMA and are ready to submit documents at the first available slot.' }
      ]
    }
  ],
  costs: [
    { label: 'Official AIMA marcação', amountEUR: 0, note: 'The appointment itself is free; do not pay intermediaries for a “slot”.' },
    { label: 'AIMA admission fee after 01.03.2026', amountEUR: 133, note: 'May be charged as part of the procedure depending on the type of pedido.' },
    { label: 'Autorização de residência art. 75', amountEUR: 307.20, note: 'A guide amount for a standard residence permit; check the exact tariff for your basis.' },
    { label: 'Help at Espaço Cidadão', amountEUR: 0, note: 'Help accessing digital public services is usually free; separate services/printouts may depend on the location.' }
  ],
  sources: [
    { title: 'AIMA — official portal and services for foreign citizens', url: 'https://aima.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — search for Espaço Cidadão and digital public services', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 61/2025 — changes to the migration regime, in force from 23.10.2025', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
