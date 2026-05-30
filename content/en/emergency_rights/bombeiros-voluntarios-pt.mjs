export default {
  editorialVoice: 'hackportugal',
  id: 'bombeiros-voluntarios-pt',
  categoryId: 'emergency_rights',
  title: 'Bombeiros Voluntários: when to call and how much it costs',
  tldr: 'In Portugal, 469 corporações de bombeiros voluntários are not a “private fire service”, but part of the civil protection system. In case of fire, road accident, gas leak, fainting, stroke, injury or any threat to life, call 112: emergency response for the public is free. You call the quartel dos bombeiros directly for non-emergency services: transporte de doentes não-urgente usually costs €40–80 locally, while event standby and safety support are charged according to the rates of the specific corporação.',
  tags: ['112', 'bombeiros', 'emergency', 'transport'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-they-are',
      title: 'Who the Bombeiros Voluntários are',
      content: [
        { kind: 'paragraph', text: 'Bombeiros Voluntários are volunteer fire brigades operating through local associações humanitárias. They put out fires, attend road accidents, rescue people, help during floods, landslides, storms and gas leaks, and provide first aid before handing the patient over to SNS/INEM.' },
        { kind: 'paragraph', text: 'As of 2026, Portugal has around 469 corporações de bombeiros voluntários. Almost every concelho has its own quartel, but emergency calls are still routed through 112 and the Centro de Orientação de Doentes Urgentes/civil protection operators.' },
        { kind: 'checklist', items: [
          'Fires in a flat, house, forest, garage or car',
          'Road accidents, trapped people, overturned vehicle',
          'Smell of gas, explosion, risk of collapse',
          'Flooding, tree on the road, dangerous wires',
          'Respiratory arrest, loss of consciousness, stroke, heart attack',
          'Serious injury, heavy bleeding, burns',
          'Rescue of people or animals from a dangerous place'
        ] }
      ]
    },
    {
      id: 'call-112-first',
      title: 'Emergency: call 112 first',
      content: [
        { kind: 'paragraph', text: 'If there is a risk to life, health, property or public safety, do not look for the local quartel number. Call 112. The operator will decide whom to send: Bombeiros, INEM, PSP, GNR, Proteção Civil or several services at once.' },
        { kind: 'checklist', items: [
          'Give the exact address: rua, número, freguesia, concelho, nearest landmark',
          'Say what happened: fire, acidente, queda, gás, inundação, pessoa inconsciente',
          'How many people are injured and what condition they are in',
          'Whether there are children, elderly people, disabled people or animals',
          'Whether there is fire, smoke, gas, electricity or risk of explosion',
          'Do not hang up until the operator tells you to',
          'If you do not speak Portuguese, start with “English please” or “Russian interpreter if available”',
          'After the call, keep your phone free: the crew may call back'
        ] },
        { kind: 'warning', text: 'Do not drive someone with signs of a stroke, heart attack, serious injury or loss of consciousness in your own car if you can call 112. Transporting them yourself may waste time and deprive the patient of early assistance.' }
      ]
    },
    {
      id: 'what-is-free',
      title: 'What is free and what may be chargeable',
      content: [
        { kind: 'paragraph', text: 'Emergency operations through 112 are not paid for on the spot by the public: firefighting, rescue, road accident response, urgent medical assistance, evacuation when there is a threat to life. You should not be billed because the bombeiros came to a real emergência.' },
        { kind: 'paragraph', text: 'Services without emergency urgency are usually paid: transporte de doentes não-urgente, medical cover at events, a fire engine on standby at a private event, preventive safety cover, and some technical services on request.' },
        { kind: 'checklist', items: [
          'Free: fire, road accident, rescue, urgent medical assistance through 112',
          'Free: evacuation during flooding, collapse or forest fire by decision of Proteção Civil',
          'Paid: non-emergency transport of a patient home, to a clinic or for an examination',
          'Paid: ambulance standby at a sports or corporate event',
          'Paid: fire standby at an event if required by the Câmara Municipal or by the licence',
          'Paid: services requested that are not connected with immediate danger',
          'May be paid by SNS: non-emergency medical transport prescribed by a doctor and where SNS criteria are met'
        ] },
        { kind: 'warning', text: 'If the situation is borderline, call 112 anyway. Do not try to decide in advance whether it is “urgent enough”. An error on the side of calling the emergency services is safer than delay during a stroke, fire or gas leak.' }
      ]
    },
    {
      id: 'non-urgent-transport',
      title: 'Transporte de doentes não-urgente: how to book it',
      content: [
        { kind: 'paragraph', text: 'Non-emergency transport is when a patient needs transport seated, lying down or with accompaniment, but there is no immediate threat to life.\n\nFor example: travel to haemodialysis, physiotherapy, an examination, discharge from hospital to home, or transport of an elderly person between home and a clinic.' },
        { kind: 'substeps', items: [
          { id: 'check-sns', title: '1. Check whether SNS can pay', content: [
            { kind: 'paragraph', text: 'If the transport is medically necessary, ask the SNS doctor or hospital about a requisição de transporte. Without a prescription, the journey is usually paid for by the patient.' }
          ] },
          { id: 'call-local-quartel', title: '2. Call the local quartel', content: [
            { kind: 'paragraph', text: 'For non-emergency transport, you can call the Bombeiros Voluntários in your concelho directly. Give the pick-up address, destination address, date, time, the patient’s condition and whether transporte em maca is needed.' }
          ] },
          { id: 'confirm-price', title: '3. Confirm the price before the journey', content: [
            { kind: 'paragraph', text: 'A typical guide price for private payment in 2026 is €40–80 for a local journey, but the rate depends on distance, waiting time, stretcher use, oxygen, night-time service and the rules of the specific associação.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Patient’s NIF for the recibo/fatura',
          'Número de utente, if the journey is connected with SNS',
          'Address with floor, door code and lift/no lift',
          'Accompanying person’s contact details',
          'Whether a stretcher, cadeira de rodas or oxygen is needed',
          'Appointment time at the hospital or clinic',
          'Whether a return journey and waiting time are needed'
        ] }
      ]
    },
    {
      id: 'events-and-private-services',
      title: 'Events, construction sites, safety',
      content: [
        { kind: 'paragraph', text: 'For a concert, sports race, feira, corporate event or filming, the Câmara Municipal, PSP/GNR or the event licence may require a plano de segurança, equipa de socorro or viatura dos bombeiros on site. This is not 112, but a contracted service.' },
        { kind: 'paragraph', text: 'The price is calculated individually: duration, number of participants, risk, distance, whether an ambulância, fire engine, bombeiros sapadores/voluntários, enfermeiro or médico is needed. Request an orçamento in writing from the local corporação in advance, preferably 2–4 weeks ahead.' },
        { kind: 'checklist', items: [
          'Name and type of event',
          'Date, set-up, event and dismantling hours',
          'Address and planta do recinto, if available',
          'Expected number of participants',
          'Alcohol, pyrotechnics, gas, generators, stage',
          'Câmara Municipal or licence requirements',
          'Whether an ambulância, fire viatura or only an equipa is needed',
          'Who signs the orçamento and pays the fatura'
        ] }
      ]
    },
    {
      id: 'practical-phrases',
      title: 'Portuguese phrases for the call',
      content: [
        { kind: 'paragraph', text: 'In an emergency, speak briefly. The address and type of incident are more important than perfect grammar.' },
        { kind: 'checklist', items: [
          '“Há um incêndio.” — There is a fire.',
          '“Há fumo no prédio.” — There is smoke in the building.',
          '“Cheira a gás.” — It smells of gas.',
          '“Houve um acidente de carro.” — There has been a road accident.',
          '“Há uma pessoa inconsciente.” — There is an unconscious person.',
          '“A pessoa não respira.” — The person is not breathing.',
          '“Preciso de uma ambulância.” — I need an ambulance.',
          '“A morada é…” — The address is…',
          '“Não falo bem português.” — I do not speak Portuguese well.'
        ] },
        { kind: 'warning', text: 'A false emergency call may lead to liability. But a good-faith call when there is a real fear for life, a fire, gas or a road accident is normal and the right thing to do.' }
      ]
    }
  ],
  costs: [
    { label: 'Emergency call through 112', amountEUR: 0, note: 'Fire, road accident, rescue, urgent medical assistance; not paid on the spot.' },
    { label: 'Transporte de doentes não-urgente', amountEURMin: 40, amountEURMax: 80, note: 'Guide price for a local private journey in 2026; the exact rate is set by the local associação/corporação.' },
    { label: 'Medical or fire standby at an event', amountEURMin: 0, amountEURMax: 0, note: 'Price only by orçamento: depends on hours, risk, vehicles, staff and Câmara Municipal requirements.' }
  ],
  sources: [
    { title: 'Bombeiros.pt — Bombeiros Portugueses portal and information on corporações', url: 'https://www.bombeiros.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ANEPC — Autoridade Nacional de Emergência e Proteção Civil', url: 'https://prociv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — medical emergency and use of 112', url: 'https://www.sns24.gov.pt/guia/emergencia-medica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
