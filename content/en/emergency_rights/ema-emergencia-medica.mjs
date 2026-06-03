export default {
  editorialVoice: 'hackportugal',
  id: 'ema-emergencia-medica',
  categoryId: 'emergency_rights',
  title: 'INEM and 112: emergency medical care in Portugal',
  tldr: 'In Portugal, if there is a threat to life, call 112: the operator passes the medical case to CODU/INEM, where they decide what to send — ambulância, SIV, VMER with a doctor, or TIP for transport. For residents registered with the SNS, emergency care and an INEM referral to urgência hospitalar are usually free of charge; non-residents may be billed through insurance/EHIC. State the address, what happened, age, breathing/consciousness, risks, and do not hang up.',
  tags: ['112', 'inem', 'ambulance', 'sns'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-call',
      title: 'When to call 112',
      content: [
        { kind: 'paragraph', text: '112 is the single European emergency number. In Portugal, medical calls, after initial filtering, are passed to CODU — Centro de Orientação de Doentes Urgentes, the INEM dispatch centre.' },
        { kind: 'checklist', items: [
          'loss of consciousness, seizures, confusion',
          'acute chest pain, suspected heart attack or stroke',
          'difficulty breathing, choking, severe allergic reaction',
          'serious injury, road accident, fall from height, bleeding',
          'burns, drowning, electric shock',
          'poisoning, overdose, suicide attempt',
          'pregnancy with severe pain, bleeding, or labour outside hospital',
          'a child in a serious condition: lethargy, bluish colour, high temperature with seizures'
        ] },
        { kind: 'warning', text: 'If the situation is not life-threatening, call SNS 24 first: 808 24 24 24. But if you are unsure between “wait” and “112”, choose 112 — the dispatcher will decide the level of urgency.' }
      ]
    },
    {
      id: 'how-dispatch-works',
      title: 'How 112 and INEM route a call',
      content: [
        { kind: 'paragraph', text: 'First, the 112 operator confirms the location, type of incident, and safety. Medical cases are passed to CODU/INEM. There, a medical dispatcher asks questions and selects the resource: telephone advice, ambulância, SIV, VMER, or transport to urgência hospitalar.' },
        { kind: 'checklist', items: [
          'Urgência hospitalar — referral to a hospital emergency department; if needed, you will be taken by INEM/bombeiros ambulance.',
          'Ambulância de socorro — basic emergency ambulance for assessment, first aid, and transport to hospital.',
          'SIV — Suporte Imediato de Vida: a vehicle with enhanced stabilisation capabilities, usually a nurse and a técnico de emergência pré-hospitalar.',
          'VMER — Viatura Médica de Emergência e Reanimação: a doctor and nurse for severe cases, resuscitation, heart attack, stroke, and serious trauma.',
          'TIP — Transporte Inter-hospitalar Pediátrico: specialised transport for newborns/children between hospitals, not an ordinary “taxi to urgência”.',
          'Helicóptero de emergência médica — for remote locations, islands/hard-to-access areas, or severe trauma when it is faster and clinically justified.'
        ] },
        { kind: 'paragraph', text: 'You do not choose the type of vehicle yourself. The decision is made by CODU according to protocol, the patient’s condition, and the availability of the nearest resources.' }
      ]
    },
    {
      id: 'what-to-say',
      title: 'What to say to the dispatcher in Portuguese',
      content: [
        { kind: 'paragraph', text: 'Speak briefly. If your Portuguese is limited, start with “Falo pouco português. Preciso de ajuda médica.” The dispatcher will usually ask closed questions; answer “sim/não”, with numbers, and with the address.' },
        { kind: 'checklist', items: [
          '“Preciso de uma ambulância.” — I need an ambulance.',
          '“A morada é…” — The address is: street, house number, floor, door code.',
          '“Estou em Lisboa/Porto/…” — I am in the city of…',
          '“A pessoa está inconsciente.” — The person is unconscious.',
          '“Não respira / respira com dificuldade.” — Not breathing / breathing with difficulty.',
          '“Tem dor no peito.” — Chest pain.',
          '“Pode ser AVC.” — It may be a stroke.',
          '“Houve um acidente de carro.” — There has been a road accident.',
          '“Há muito sangue.” — Heavy bleeding.',
          '“Tem … anos.” — He/she is … years old.',
          '“Sou estrangeiro, mas tenho NIF/número de utente.” — I am a foreigner, but I have a NIF/número de utente.',
          '“O meu número é…” — My phone number is…'
        ] },
        { kind: 'warning', text: 'Do not hang up first. The dispatcher may give instructions on CPR/massagem cardíaca, stopping bleeding, or positioning the patient until the crew arrives.' }
      ]
    },
    {
      id: 'before-arrival',
      title: 'While help is on the way',
      content: [
        { kind: 'checklist', items: [
          'Open the building entrance door or send someone to meet the crew at the entrance.',
          'Move pets away, clear the passage, turn on the lights.',
          'Prepare the Cartão de Cidadão/residence permit/passport, número de utente, list of medicines, and allergies.',
          'Do not give food, alcohol, or medicines unless the dispatcher has told you to do so.',
          'If the person is unconscious and breathing, place them in the recovery position on their side.',
          'If there is no breathing — start chest compressions, following the 112 instructions.',
          'For bleeding, press a clean cloth directly onto the wound.',
          'If a stroke is suspected, remember the time symptoms started — this is critical for treatment.',
          'Do not transport a seriously ill patient yourself if the dispatcher has told you to wait for INEM.'
        ] },
        { kind: 'paragraph', text: 'In Portugal, an ambulância may be from INEM, bombeiros, or Cruz Vermelha, operating within the emergency care system. This is normal: what matters is not the logo, but that the resource has been dispatched by CODU/INEM.' }
      ]
    },
    {
      id: 'payment',
      title: 'Payment: when it is free and when a bill is possible',
      content: [
        { kind: 'paragraph', text: 'The 112 call itself is free. For people living in Portugal and registered with the SNS with a número de utente, INEM emergency care and referral to urgência hospitalar through INEM are usually not paid for on the spot.' },
        { kind: 'paragraph', text: 'In the SNS, since 2022 most taxas moderadoras have been abolished, but an important rule remains for urgência: if you went to urgência through an INEM/SNS 24/doctor referral or were admitted to hospital, the user charge should not apply. If you go to urgência on your own without a referral and without hospital admission, the hospital may apply the payment rules in force for your status.' },
        { kind: 'checklist', items: [
          'Resident with número de utente: show your utente/residence permit or another document when registering at the hospital.',
          'EU/EEA/Swiss citizen: keep your EHIC/CESD with you, otherwise you may be billed as a private patient.',
          'Tourist or new expat without SNS: travel insurance/private insurance is needed; the hospital may bill later.',
          'Children, pregnant women, and emergency cases receive care regardless of documents; payment is dealt with after stabilisation.',
          'Private insurance does not replace 112 where there is a threat to life: first 112, then the insurer.'
        ] },
        { kind: 'warning', text: 'Do not refuse to call 112 because you are afraid of a bill. In an emergency, the priority is stabilisation and transport to the correct urgência hospitalar.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Calling a private clinic with stroke/heart attack symptoms instead of 112.',
          'Taking an Uber to a random hospital in a serious condition — you can lose time and end up in the wrong specialist centre.',
          'Not knowing the exact address of your accommodation: save the morada, código postal, floor, and landmarks on your phone.',
          'Not arranging a número de utente after moving — the hospital will still help, but administration and bills become more complicated.',
          'Not reporting medicines: anticoagulantes, insulina, antidepressivos, and allergies are important for the crew.',
          'Hanging up after hearing the word “ambulância” — the dispatcher may continue triage or give instructions.',
          'Confusing 112 and SNS 24: 112 is for threats to life; SNS 24 is for urgent but non-critical medical navigation.'
        ] },
        { kind: 'paragraph', text: 'Practical minimum: save “112”, “SNS 24 — 808 24 24 24”, número de utente, your address in Portuguese, and an ICE contact — In Case of Emergency — on your phone.' }
      ]
    }
  ],
  costs: [
    { label: 'Call to 112', amountEUR: 0, note: 'Free from mobile and landline phones.' },
    { label: 'INEM emergency care for an SNS resident', amountEUR: 0, note: 'Usually no payment on the spot when referred through 112/INEM; show your número de utente.' },
    { label: 'Urgência without SNS/INEM referral', amountEURMin: 0, amountEURMax: 0, note: 'May depend on the patient’s status and SNS/insurance rules; with an INEM referral, the user charge usually does not apply.' }
  ],
  sources: [
    { title: 'INEM — official website and information on emergência médica', url: 'https://www.inem.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 234/81 — creation and legal framework of INEM, DRE', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1981-34546275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS 24 — contact 808 24 24 24 and medical navigation', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
