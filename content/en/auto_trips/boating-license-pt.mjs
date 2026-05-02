export default {
  editorialVoice: 'hackportugal',
  id: 'boating-license-pt',
  categoryId: 'auto_trips',
  title: 'Yacht/motorboat licence in Portugal: Marinheiro, Patrão Local, Patrão de Costa',
  tldr: 'For a recreational motorboat or yacht in Portugal you need a Carta de navegador de recreio through DGRM: school, medical certificate, exam and card issuance. The basic Marinheiro is usually sufficient for small boats during the day near the coast; Patrão Local is for local trips up to 5 miles from the coast; Patrão de Costa is for more serious navigation up to 25 miles. EU/EEA licences are recognised automatically in Portugal within the limits of their entitlements, but UK/other third-country licences are best checked in advance with DGRM or the Capitania.',
  tags: ['dgrm', 'yacht', 'motorboat', 'amn'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-license',
      title: 'Which licence you need 🚤',
      content: [
        { kind: 'paragraph', text: 'The Portuguese licence is called a Carta de navegador de recreio. It is administered by DGRM, while on the water checks are carried out by AMN, Capitania do Porto and Polícia Marítima. For a typical expat scenario — a boat in Cascais, Oeiras, Setúbal, Lagos, Vilamoura, Albufeira — people most often choose Marinheiro or Patrão Local; Patrão de Costa is needed if you genuinely go further offshore.' },
        { kind: 'checklist', items: [
          'Marinheiro — entry category: small recreational vessels, daytime navigation, short trips near the coast.',
          'Patrão Local — the practical minimum for most motorboat owners: local navigation up to 5 nautical miles from the coast and up to 10 miles from a safe harbour.',
          'Patrão de Costa — for coastal navigation up to 25 nautical miles from the coast.',
          'Patrão de Alto Mar — ocean category without the usual coastal limit; this guide does not cover it in detail.',
          'Motonauta — a separate category for mota de água / jet ski, if there is no higher suitable licence.',
          'Minimum age: usually 16 for Marinheiro/Motonauta and 18 for Patrão Local, Patrão de Costa and above.',
          'Limits depend not only on the licence, but also on the class/certification area of the boat itself, its equipment and weather conditions.'
        ] },
        { kind: 'warning', text: 'Do not confuse “I can drive a boat” with “I am legally allowed to be skipper”. In Portugal, not having the appropriate Carta de navegador de recreio during an AMN/Polícia Marítima check can lead to a fine and a ban on continuing the trip.' }
      ]
    },
    {
      id: 'eu-recognition',
      title: 'If you already have an EU/EEA licence',
      content: [
        { kind: 'paragraph', text: 'Portugal recognises documents for operating recreational vessels issued by EU/EEA states without mandatory exchange for a Portuguese card. You may operate within the limits granted by the original licence: vessel length, distance from the coast, day/night, motor/sail, jet ski.' },
        { kind: 'checklist', items: [
          'Keep the original licence on board, or an official digital document if it is recognised by the issuing country.',
          'Take your passport/Cartão de Cidadão/residence permit so that the name matches the licence.',
          'If the licence is not in PT/EN, it is useful to have a translation or an International Certificate of Competence, if your country issues one.',
          'For rental companies in the Algarve and Cascais, what often matters is not only the law but also their insurance rules: they may require an ICC or a specific category.',
          'UK licences after Brexit are not “automatically EU”; check in advance with DGRM, the Capitania or the charter company.',
          'Do not assume Russian, Ukrainian, Israeli, Turkish and other non-EU documents are automatically valid: a separate recognition check is needed.'
        ] },
        { kind: 'warning', text: 'Automatic recognition of an EU licence does not mean an automatic right to operate any Portuguese boat. If your German/French/Polish licence allows only inland waters or low power, you remain within those limits in Portugal.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get a Portuguese Carta de navegador de recreio',
      content: [
        { kind: 'substeps', items: [
          { id: 'choose-school', title: '1. Choose a DGRM-certified school', content: [
            { kind: 'paragraph', text: 'Look for an entidade formadora de navegadores de recreio registered with DGRM. In the marinas of Cascais, Oeiras, Setúbal, Lagos, Vilamoura and Porto there are usually schools with courses in PT and sometimes in EN.' }
          ] },
          { id: 'medical', title: '2. Obtain a medical certificate', content: [
            { kind: 'paragraph', text: 'For admission you need an atestado médico confirming physical and mental fitness, including sight and hearing. It is usually done through a médico de família, a private clinic or a doctor who works with the school.' },
            { kind: 'checklist', items: [
              'Passport or residence permit.',
              'NIF for invoicing and registration with the school.',
              'Glasses/contact lenses, if you use them.',
              'Information about chronic illnesses and medicines.',
              'The certificate must be current on the submission date; the school usually checks the format before the exam.'
            ] }
          ] },
          { id: 'course', title: '3. Complete the theory and practice', content: [
            { kind: 'paragraph', text: 'The course covers collision rules, signs, lights, VHF radio, charts, tides, weather, safety, man overboard, entering/leaving a marina, mooring and basic mechanics. For Patrão de Costa, navigation exercises, course plotting and chart work are added.' }
          ] },
          { id: 'exam-card', title: '4. Pass the exam and wait for the card', content: [
            { kind: 'paragraph', text: 'The exam is taken through a system linked to DGRM: theory and, for categories where required, a practical part. After successful completion, the Carta de navegador de recreio is issued. The issuing time depends on the school and DGRM workload; in practice, allow several weeks.' }
          ] }
        ] }
      ]
    },
    {
      id: 'choose-category',
      title: 'What to choose: Marinheiro, Local or Costa',
      content: [
        { kind: 'paragraph', text: 'The choice depends not on “prestige”, but on your real route. For hiring a small motorboat in a lagoon and taking short trips, Marinheiro may be enough. For a personal motorboat in Cascais/Algarve, it is often more sensible to go straight for Patrão Local: it gives more freedom and is better regarded by marinas and insurers. Patrão de Costa makes sense if you plan longer coastal passages.' },
        { kind: 'checklist', items: [
          'Taking a pequeno barco only during the day and not far from the coast — look at Marinheiro.',
          'Want to sail Cascais–Sesimbra, Lagos–Portimão, Vilamoura–Tavira within the local area — usually you need Patrão Local, but check distances and the harbour of refuge.',
          'Planning passages Porto–Figueira da Foz, Lisbon–Sines, Sines–Lagos with distance margin — look at Patrão de Costa.',
          'A sailing yacht does not remove the licence requirement: the skipper must have the appropriate category.',
          'If there is VHF, EPIRB, a life raft and other equipment on board, it must match the boat’s navigation area, not only your licence.',
          'For commercial transport, paid skipper, tourist tours and charter with crew, an amateur carta de recreio is not enough — different requirements apply.'
        ] },
        { kind: 'warning', text: 'The most common mistake by an expat owner: buying a boat based on engine power and forgetting about the vessel’s certification area, insurance, mandatory safety equipment and licence limits. During a check, AMN looks at the whole package.' }
      ]
    },
    {
      id: 'on-board-documents',
      title: 'What to keep on board and what AMN checks',
      content: [
        { kind: 'paragraph', text: 'Even with the correct Carta de navegador de recreio, you must have the vessel documents and mandatory equipment. Checks are especially likely in summer in Cascais, Troia, the Algarve, at marina entrances and in jet ski areas.' },
        { kind: 'checklist', items: [
          'Carta de navegador de recreio or a recognised foreign skipper licence.',
          'Skipper identity document.',
          'Vessel registration documents / título de registo, if applicable.',
          'Seguro de responsabilidade civil for a recreational vessel, where mandatory for the type of vessel.',
          'List of mandatory safety equipment for the navigation area: life jackets, fire extinguisher, pyrotechnics/signals, anchor, bailer/pump, lights.',
          'Radio documents and the right to use VHF, if a radio station is installed and used.',
          'Rental/charter documents, if the boat is not yours.',
          'Checking meteorologia and avisos à navegação before departure.',
          'Compliance with bathing zones, speed limits, marina entry rules and Polícia Marítima instructions.'
        ] },
        { kind: 'warning', text: 'Alcohol on the water is a bad idea legally and practically. AMN may stop the vessel, and the insurer may dispute a payout after an accident if the skipper was not in a condition to operate safely.' }
      ]
    },
    {
      id: 'renewal-practical',
      title: 'Validity, renewal and practical tips',
      content: [
        { kind: 'paragraph', text: 'A Portuguese Carta de navegador de recreio requires periodic renewal, especially after age thresholds. Under the RNR rules, validity is linked to the holder’s age: usually until age 50, then renewal every 10 years until 70 and every 5 years after 70. Medical fitness may again be required on renewal.' },
        { kind: 'checklist', items: [
          'Do not wait until expiry: start renewal 1–2 months in advance.',
          'If you have moved, update your contact details so you do not miss notifications from DGRM/the school.',
          'Keep a digital copy of the licence, insurance and vessel registration on your phone, but it is better to have the originals on board.',
          'After obtaining Marinheiro, you can upgrade category through a new course and exam.',
          'If you do not speak Portuguese well, look for a school with English support; the official terms will still be in PT.',
          'Before buying a boat, ask the marina or broker to show which licence is actually needed for that model and navigation area.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Marinheiro course', amountEURMin: 250, amountEURMax: 400, note: 'Private school guide price in 2026; depends on the city, course language and whether the exam is included.' },
    { label: 'Patrão Local course', amountEURMin: 350, amountEURMax: 650, note: 'Typical choice for the owner of a small motorboat in Cascais/Algarve.' },
    { label: 'Patrão de Costa course', amountEURMin: 600, amountEURMax: 1000, note: 'More expensive because of navigation, charts and the extended syllabus.' },
    { label: 'Medical certificate', amountEURMin: 25, amountEURMax: 70, note: 'Private clinic or school doctor; in SNS it may be cheaper but slower.' }
  ],
  sources: [
    { title: 'DGRM: Recreational Boater / Navegador de recreio', url: 'https://www.dgrm.pt/en/web/guest/am-nr-navegador-recreio', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Autoridade Marítima Nacional: safety and control at sea', url: 'https://www.amn.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei n.º 93/2018: Regulamento da Náutica de Recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/93-2018-116956361', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
