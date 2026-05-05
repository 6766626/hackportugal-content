export default {
  editorialVoice: 'hackportugal',
  id: 'cruz-vermelha-portuguesa',
  categoryId: 'emergency_rights',
  title: 'Cruz Vermelha Portuguesa: social support, first aid courses and volunteering',
  tldr: 'Cruz Vermelha Portuguesa is not a replacement for 112 and INEM, but a network of local delegações: non-urgent patient transport, apoio domiciliário for older adults, help for vulnerable families, migrants and refugees, first aid courses and volunteering. In 2026, certified first aid courses usually cost €80–€150; prices for an ambulance for non-urgent trips depend on the delegação and distance. In an emergency, call 112, not the Red Cross directly.',
  tags: ['portuguese-red-cross', '112', 'help', 'courses'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-does',
      title: 'What Cruz Vermelha Portuguesa does',
      content: [
        { kind: 'paragraph', text: 'Cruz Vermelha Portuguesa, CVP, is the Portuguese part of the International Red Cross Movement. It is a private humanitarian organisation with a network of local delegações. Services differ by municipality: in Lisbon, Porto, the Algarve and small concelhos the set of programmes may vary.' },
        { kind: 'checklist', items: [
          'non-urgent transport of patients and people with limited mobility by ambulance or transporte adaptado',
          'first aid, basic life support and AED/DAE courses, sometimes with a certificate',
          'apoio domiciliário: assistance for older adults at home, meals, hygiene, accompaniment',
          'social assistance for families in vulnerable situations: food, clothing, guidance on services',
          'support for migrants, asylum seekers and refugees through local projects',
          'medico-social structures: lares, centros de dia, creches, clinics — where they exist',
          'volunteering: socorrismo, social, youth, logística, campanhas, apoio a eventos'
        ] },
        { kind: 'warning', text: 'CVP is not a “subscription ambulance”. For chest pain, stroke, severe trauma, loss of consciousness, heavy bleeding, choking, fire or any life threat, call 112. The dispatcher will send INEM, bombeiros, PSP/GNR or other services.' }
      ]
    },
    {
      id: 'ambulance',
      title: 'Ambulance: when the Red Cross transports you, and when to call 112',
      content: [
        { kind: 'paragraph', text: 'Many CVP delegações provide transporte de doentes não urgentes: trips to consultations, dialysis, rehabilitation, hospital discharge, transport of a bedridden patient. This is a paid service unless covered by the SNS, insurance or a social programme.' },
        { kind: 'checklist', items: [
          'emergency and free via the rescue system: call 112',
          'non-urgent medical trip: call your local CVP delegação in advance',
          'confirm whether you need a médico, enfermeiro, maca, cadeira de rodas or acompanhante',
          'ask for an orçamento before the trip: base call-out + kilometres + waiting time + surcharges',
          'if the trip was scheduled by the SNS, ask at the unidade de saúde whether transporte de doentes by referral is due',
          'for private insurance, check whether pre-authorisation is required and an invoice with NIF',
          'keep the factura/recibo: sometimes expenses can be claimed from insurance or used in IRS as a health expense, if they comply with Finanças rules'
        ] },
        { kind: 'warning', text: 'Do not waste time calling a CVP delegação if the condition could worsen within minutes. 112 is the single point of entry; INEM decides which team to send.' }
      ]
    },
    {
      id: 'first-aid-courses',
      title: 'First aid courses: what to choose and how much they cost',
      content: [
        { kind: 'paragraph', text: 'CVP provides formação in primeiros socorros. Names and duration depend on the school/delegação, but three formats are useful for an expat: basic first aid, Suporte Básico de Vida, and SBV-DAE/AED — the use of an automated external defibrillator.' },
        { kind: 'checklist', items: [
          'expected budget in 2026: typically €80–€150 for a certified course for an individual',
          'language: more often Portuguese; in larger cities there are sometimes English groups or a corporate course',
          'duration: from short modules of a few hours to 12–25 hours for extended programmes',
          'certificate: ask in advance whether a training certificate is issued and whether it is recognised by the employer',
          'practice: check whether CPR on a manikin and a DAE trainer are included',
          'for working with children choose a course that covers choking/engasgamento and paediatrics',
          'for restaurants, schools, sports clubs and offices, confirm the requirements of ACT, your employer and insurer'
        ] },
        { kind: 'paragraph', text: 'Registration is usually done via the CVP website, by e-mail or by phoning the local delegação. In practice, the fastest is: find the delegação for your concelho, write “Quero informações sobre curso de primeiros socorros/SBV-DAE para particulares” and ask for the next dates, price, duration, language and certificate.' }
      ]
    },
    {
      id: 'social-support',
      title: 'Social support: older adults, families, migrants, refugees',
      content: [
        { kind: 'paragraph', text: 'CVP social assistance works locally and often through partnerships with Segurança Social, Câmara Municipal, Junta de Freguesia, escolas, hospitais and other IPSS. This is not a single “federal benefit”: each delegação assesses the situation and resources.' },
        { kind: 'checklist', items: [
          'older adults: apoio domiciliário, refeições, higiene, acompanhamento a consultas, teleassistência — if available in your area',
          'people with disabilities or temporary loss of mobility: transporte adaptado and accompaniment',
          'low-income families: cabazes alimentares, roupa, produtos de higiene, encaminhamento social',
          'migrants and refugees: guidance on services, integration projects, humanitarian assistance',
          'children and youth: school support, holidays, youth programmes — depends on the delegação',
          'emergencies: temporary help after a fire, flood, eviction or family crisis'
        ] },
        { kind: 'paragraph', text: 'To apply, prepare your NIF, an identity document or residence permit, proof of address, composição do agregado familiar, recent pay slips/IRS/declaração da Segurança Social, a tenancy agreement or housing expenses, and medical documents if necessary. If you have no documents, still request social service support: CVP can refer you to the right service.' },
        { kind: 'warning', text: 'CVP does not replace Segurança Social, SNS, AIMA or Câmara Municipal. For benefits, a residence permit, SNS utente and housing you need official procedures; the Red Cross helps with support and referrals, but does not “grant status”.' }
      ]
    },
    {
      id: 'volunteer',
      title: 'How to become a volunteer',
      content: [
        { kind: 'paragraph', text: 'Volunteering with CVP is a normal way to integrate in Portugal: language practice, local contacts, understanding the support system. Foreigners are welcome, but requirements depend on the role: for socorrismo and work at events you need formação; for social support there is an interview and confidentiality rules.' },
        { kind: 'checklist', items: [
          'find the delegação where you live on cruzvermelha.pt',
          'fill in the volunteer form or send an e-mail with the subject “Voluntariado”',
          'list languages: russo, inglês, português, ucraniano — this is valuable for helping migrants',
          'describe your availability: weekdays/weekends, hours per week, whether you have a car',
          'choose an area: emergência, social, juventude, logística, formação, tradução',
          'attend an interview and induction training',
          'for working with children or vulnerable groups, a registo criminal may be requested',
          'do not promise more time than you can realistically give: shift schedules are planned in advance'
        ] },
        { kind: 'paragraph', text: 'If your Portuguese is still weak, start with logística, campanhas, translation, sorting donations or supporting events. For medical roles and interaction with patients, language and training are critical.' }
      ]
    },
    {
      id: 'contacts',
      title: 'How to quickly find the right contact',
      content: [
        { kind: 'paragraph', text: 'The main CVP website is cruzvermelha.pt. There you can look for “Delegações” or contacts for the national structure. For day-to-day needs you almost always need your local delegação in your concelho, not the central office.' },
        { kind: 'checklist', items: [
          'for a life-threatening emergency: 112',
          'for medical advice without a life threat: SNS 24 — 808 24 24 24',
          'for a non-urgent ambulance: the local CVP delegação or the area bombeiros',
          'for a first aid course: the formação department of your local CVP',
          'for an older relative: perguntar por apoio domiciliário / serviço social',
          'for refugees and humanitarian assistance: perguntar por apoio social / migrações / refugiados',
          'for volunteering: perguntar por voluntariado'
        ] },
        { kind: 'paragraph', text: 'Useful phrase in Portuguese: “Bom dia, moro em [concelho] e gostaria de saber se a Cruz Vermelha local tem [transporte de doentes não urgentes / curso de primeiros socorros / apoio domiciliário / voluntariado]. Podem enviar preços, horários e documentos necessários?”' }
      ]
    }
  ],
  costs: [
    { label: 'First aid / SBV course', amountEURMin: 80, amountEURMax: 150, note: 'Typical range for certified courses in 2026; the exact price depends on duration, delegação and format.' },
    { label: 'Non-urgent CVP ambulance', amountEURMin: 0, amountEURMax: 999, note: 'There is no single country-wide tariff: it may be covered by SNS/insurance/a social programme or paid based on call-out, kilometres, waiting time and equipment.' },
    { label: 'Volunteering', amountEUR: 0, note: 'Application is free; training and equipment depend on the role and delegação.' }
  ],
  sources: [
    { title: 'Cruz Vermelha Portuguesa — official website and services', url: 'https://www.cruzvermelha.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Cruz Vermelha Portuguesa — contacts and delegations', url: 'https://www.cruzvermelha.pt/contacte-nos.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'INEM — 112 number and emergency medical assistance', url: 'https://www.inem.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — 808 24 24 24 contact and medical guidance', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
