export default {
  editorialVoice: 'hackportugal',
  id: 'carta-condicionada-imt',
  categoryId: 'driving_license',
  title: 'Carta de Condução Condicionada: licences with medical restrictions',
  tldr: 'Carta de Condução Condicionada is a standard Portuguese driving licence, but with restriction codes: glasses 01, hearing aid 02, prosthesis 03, adapted brakes/accelerator/steering 20/25/40, only a specific vehicle 50, daytime driving 61, and others. Restrictions are added on the basis of an atestado médico eletrónico and, in more complex cases, through a junta médica IMT. AMIM helps confirm disability, but by itself it does not replace the medical opinion required for driving.',
  tags: ['imt', 'licence', 'amim', 'medical'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a carta condicionada is',
      content: [
        { kind: 'paragraph', text: 'Carta de Condução Condicionada is not a separate licence category, but a carta de condução with restriction or adaptation codes. The codes are printed in field 12 of the driving licence and are mandatory for the driver on every journey.' },
        { kind: 'paragraph', text: 'Restrictions may be simple: driving only with glasses, contact lenses, a hearing aid or a prosthesis. They may be technical: a vehicle with automatic transmission, hand-operated brake control, a relocated accelerator pedal, adapted steering, or a special seat. Sometimes the entitlement is limited to a specific vehicle or conditions: daytime only, no motorways, no passengers.' },
        { kind: 'warning', text: 'If your licence shows an adaptation code but you drive a car without that adaptation, this is treated as driving outside the conditions of your entitlement. In the event of an accident, the insurer and the police will look specifically at the codes in campo 12.' }
      ]
    },
    {
      id: 'who-needs',
      title: 'Who needs this',
      content: [
        { kind: 'checklist', items: [
          'People with visual impairment: mandatory glasses/contact lenses, monocular vision, restrictions by licence group.',
          'People with hearing impairment, if the doctor states that a hearing aid is necessary.',
          'Drivers with amputation, paresis, cerebral palsy, consequences of a stroke, spinal injury or restricted limb mobility.',
          'Drivers after surgery or illnesses affecting vehicle control: epilepsy, diabetes with risk of hypoglycaemia, cardiovascular diseases, neurological conditions.',
          'AMIM — Atestado Médico de Incapacidade Multiuso holders, if the disability affects the ability to drive safely.',
          'Expats exchanging a foreign licence for a Portuguese one who already have medical restrictions on their old carta/licence.',
          'Driving school candidates who need lessons and an exam in an adapted vehicle.'
        ] },
        { kind: 'paragraph', text: 'For group 1 — AM, A1, A2, A, B, BE — the medical requirements are less strict than for group 2. Group 2 — C, CE, D, DE, taxis, TVDE, ambulances, school transport and professional driving — is assessed more strictly; some conditions that are acceptable for B may rule out professional categories.' }
      ]
    },
    {
      id: 'medical-route',
      title: 'The medical route through a médico and IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Obtain an atestado médico eletrónico', content: [
            { kind: 'paragraph', text: 'You start not with IMT, but with a doctor. For ordinary categories this is a médico de família in the SNS or a private doctor with access to emissão eletrónica de atestado médico para carta de condução. The opinion is sent to the IMT system electronically; a paper certificate is usually not needed, but ask for a comprovativo.' },
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit.',
              'NIF and, if you have one, número de utente.',
              'Old licence, if this is an exchange or renewal.',
              'Glasses, contact lenses, hearing aid, prostheses or orthoses that you actually use.',
              'Medical discharge summaries, test results, opinions from an ophthalmologist/neurologist/cardiologist.',
              'AMIM, if you have one: useful as evidence of an established incapacidade, but it does not replace the atestado médico para condução.'
            ] }
          ] },
          { id: 'imt-board', title: '2. If the case is complex — junta médica IMT', content: [
            { kind: 'paragraph', text: 'If the doctor cannot clearly declare you apto/apto com restrições, or if IMT sees a risk, the case is referred to the IMT medical board — junta médica. It decides whether you may drive, which codes should be added, and whether a prova prática in an adapted vehicle is needed.' },
            { kind: 'paragraph', text: 'It is better to attend the junta médica with a complete file: AMIM, recent clinical reports, a list of medicines, a description of vehicle adaptations, old foreign licences and translations if the documents are not in PT/EN/ES/FR.' }
          ] },
          { id: 'imt-issue', title: '3. Submit the procedure to IMT', content: [
            { kind: 'paragraph', text: 'After the medical opinion, you submit a revalidação, emissão, troca de carta estrangeira or pedido especial via IMT/IMTonline, a balcão IMT or Espaço Cidadão, if the service is available. IMT transfers the restrictions to campo 12 of the new carta de condução.' }
          ] }
        ] }
      ]
    },
    {
      id: 'codes',
      title: 'Main restriction and adaptation codes',
      content: [
        { kind: 'paragraph', text: 'Portugal uses harmonised European restriction codes. On the licence they appear as numbers, sometimes with subcodes. What matters is not the translation, but the exact match between the vehicle, the driver’s behaviour and these codes.' },
        { kind: 'checklist', items: [
          '01 — vision correction: glasses, contact lenses or other optical correction.',
          '02 — hearing aid or communication device.',
          '03 — limb prosthesis or orthosis.',
          '10 — modified transmission, often in practice meaning a vehicle without a conventional clutch.',
          '15 — adapted clutch.',
          '20 — adapted braking system.',
          '25 — adapted accelerator / accelerator pedal.',
          '30 — combined brake and accelerator adaptations.',
          '35 — adapted controls: indicators, lights, windscreen wipers, etc.',
          '40 — adapted steering.',
          '42 — adapted mirrors or field of vision.',
          '43 — adapted driver’s seat.',
          '44 — motorcycle adaptations.',
          '50 — entitlement applies only to a specific vehicle or VIN/chassis number.',
          '61–69 — restrictions on driving conditions: daytime only, within a radius from home, no passengers, with speed limitation, with an accompanying person, no trailer, no motorways, zero alcohol, alcohol interlock.'
        ] },
        { kind: 'warning', text: 'Code 78 “automatic transmission only” is not a medical code, but it often overlaps with adapted driving. If the B test was taken in an automatic vehicle, the licence may show 78; to remove it, you need a test/procedure in a manual vehicle under IMT rules.' }
      ]
    },
    {
      id: 'amim',
      title: 'Route for AMIM holders',
      content: [
        { kind: 'paragraph', text: 'AMIM — Atestado Médico de Incapacidade Multiuso — confirms a percentage of incapacidade for tax, social and other purposes. For driving licences it is useful, but it is not an automatic authorisation or ban on driving. The decision on a carta condicionada is made by the doctor for the carta de condução and/or the junta médica IMT.' },
        { kind: 'checklist', items: [
          'If you already have an AMIM: show it to the doctor when arranging the atestado médico eletrónico.',
          'If the AMIM states a motor, visual, hearing or neurological incapacidade, be prepared for an additional IMT assessment.',
          'If you need an adapted car for training, look for an escola de condução with a veículo adaptado suitable for your restrictions.',
          'If the adaptations are non-standard, request a declaração técnica from the installer in advance and documents on homologação/inspeção, if applicable.',
          'If your licence is foreign and already has restrictions, bring the original and, if necessary, a translation: IMT must understand which restrictions to transfer.',
          'If the condition is progressive, the licence validity period may be shortened: for example, not until the usual revalidação age, but for the period set by the doctor.'
        ] },
        { kind: 'paragraph', text: 'INR publishes reference information on the rights of people with disabilities, AMIM and support. The practical decision on fitness to drive still remains within the IMT system and the medical assessment for condução.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practice: how not to get stuck in bureaucracy',
      content: [
        { kind: 'checklist', items: [
          'Do not buy an adapted vehicle before the medical opinion: first you need the codes, then the equipment matching those codes.',
          'Ask the doctor to state the restrictions as specifically as possible; vague wording often leads to a junta médica and delays.',
          'For exchanging foreign licences, start the process in advance: medical restrictions almost always increase processing time.',
          'Keep copies of the AMIM, relatórios médicos, comprovativo do atestado eletrónico and correspondence with IMT.',
          'Before the exam in an adapted car, make sure the escola de condução has agreed the vehicle with IMT.',
          'After receiving the new carta, check campo 12 immediately: correcting an incorrect code takes time.',
          'If your condition has improved and the restriction is no longer needed, removing the code is done only through a new medical assessment and an IMT decision.',
          'If your condition has worsened, do not wait for renewal: it is safer to request a medical reassessment before an accident or a roadside check.'
        ] },
        { kind: 'warning', text: 'In Portugal, a doctor may declare a person “inapto” to drive if the risk to the driver and third parties is high. In this case, IMT may refuse to issue or may suspend the driving entitlement until a new assessment.' }
      ]
    }
  ],
  costs: [
    { label: 'Issuing or renewing a carta de condução at IMT', amountEUR: 30, note: 'Standard IMT fee; via IMTonline a 10% discount usually applies, i.e. €27.' },
    { label: 'IMT fee for drivers aged 70 and over', amountEUR: 15, note: 'A reduced rate applies for revalidação after the age of 70; online it may be cheaper if a discount is available.' },
    { label: 'Private medical examination for the atestado', amountEURMin: 25, amountEURMax: 80, note: 'Private clinic market rate; in the SNS it may be cheaper, but depends on the Centro de Saúde and doctor availability.' },
    { label: 'AMIM through a junta médica de avaliação de incapacidade', amountEUR: 12.5, note: 'Standard fee for the initial incapacidade assessment; urgency and reassessment depend on SNS/ULS rules.' }
  ],
  sources: [
    {
      title: 'IMT — Carta de condução, revalidação, exchange and medical requirements',
      url: 'https://www.imt-ip.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'INR — Pessoas com deficiência, AMIM and rights of citizens with incapacidade',
      url: 'https://www.inr.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei n.º 138/2012 — Regulamento da Habilitação Legal para Conduzir',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2012-175923700',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Diretiva 2006/126/CE — European driving licence categories and codes',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32006L0126',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
