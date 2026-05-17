export default {
  editorialVoice: 'hackportugal',
  id: 'carta-condicionada-imt',
  categoryId: 'driving_license',
  title: 'Carta de Condução Condicionada: licence with medical restrictions',
  tldr: 'Carta de Condução Condicionada is an ordinary Portuguese driving licence, but with restriction codes: glasses 01, hearing aid 02, prosthesis 03, adapted brakes/accelerator/steering 20/25/40, only a specific vehicle 50, daytime driving 61, etc. Restrictions are added on the basis of an atestado médico eletrónico and, in complex cases, through a junta médica IMT. AMIM helps confirm disability, but by itself does not replace the medical assessment for driving.',
  tags: ['imt', 'licence', 'amim', 'medicine'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a carta condicionada is',
      content: [
        { kind: 'paragraph', text: 'Carta de Condução Condicionada is not a separate licence category, but a carta de condução with restriction or adaptation codes. The codes are printed in field 12 of the driving licence and are mandatory for the driver on every journey.' },
        { kind: 'paragraph', text: 'Restrictions may be simple: driving only with glasses, contact lenses, a hearing aid or a prosthesis. They may be technical: a car with automatic transmission, hand-operated brake control, relocated accelerator pedal, adapted steering wheel or special seat. Sometimes the entitlement is limited to a specific vehicle or conditions: daytime only, no motorways, no passengers.' },
        { kind: 'warning', text: 'If your licence shows an adaptation code but you drive a car without that adaptation, this is considered driving outside the conditions of your entitlement. In the event of an accident, the insurer and the police will look specifically at the codes in campo 12.' }
      ]
    },
    {
      id: 'who-needs',
      title: 'Who needs it',
      content: [
        { kind: 'checklist', items: [
          'People with visual impairment: mandatory glasses/contact lenses, monocular vision, restrictions by licence group.',
          'People with hearing impairment, if the doctor indicates that a hearing aid is required.',
          'Drivers with amputation, paresis, cerebral palsy, consequences of a stroke, spinal injury or restricted limb mobility.',
          'Drivers after operations or with conditions affecting vehicle control: epilepsy, diabetes with risk of hypoglycaemia, cardiovascular diseases, neurological conditions.',
          'Holders of AMIM — Atestado Médico de Incapacidade Multiuso, if the disability affects the ability to drive safely.',
          'Expats exchanging a foreign licence for a Portuguese one who already have medical restrictions on their old carta/licence.',
          'Driving-school candidates who need lessons and a test in an adapted vehicle.'
        ] },
        { kind: 'paragraph', text: 'For group 1 — AM, A1, A2, A, B, BE — medical requirements are less strict than for group 2. Group 2 — C, CE, D, DE, taxis, TVDE, ambulances, school transport and professional driving — is assessed more strictly; some conditions allowed for B may close off professional categories.' }
      ]
    },
    {
      id: 'medical-route',
      title: 'Medical route through a médico and IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'doctor', title: '1. Obtain an atestado médico eletrónico', content: [
            { kind: 'paragraph', text: 'You start not with IMT, but with a doctor. For ordinary categories this is a médico de família in the SNS or a private doctor with access to emissão eletrónica de atestado médico para carta de condução. The assessment is sent to the IMT system electronically; a paper certificate is usually not needed, but ask for a comprovativo.' },
            { kind: 'checklist', items: [
              'Passport or Cartão de Cidadão / residence permit.',
              'NIF and, if you have one, número de utente.',
              'Old licence, if this is an exchange or renewal.',
              'Glasses, contact lenses, hearing aid, prostheses or orthoses that you actually use.',
              'Medical discharge summaries, test results, reports from an ophthalmologist/neurologist/cardiologist.',
              'AMIM, if you have it: useful as proof of recognised incapacidade, but it does not replace the atestado médico para condução.'
            ] }
          ] },
          { id: 'imt-board', title: '2. If the case is complex — junta médica IMT', content: [
            { kind: 'paragraph', text: 'If the doctor cannot clearly assess you as apto/apto com restrições, or IMT sees a risk, the case is referred to the IMT medical board — junta médica. It determines whether you may drive, which codes should be applied and whether a prova prática in an adapted vehicle is required.' },
            { kind: 'paragraph', text: 'It is better to attend the junta médica with a full file: AMIM, recent clinical reports, list of medicines, description of the vehicle adaptations, old foreign licences and translations if the documents are not in PT/EN/ES/FR.' }
          ] },
          { id: 'imt-issue', title: '3. Submit the procedure to IMT', content: [
            { kind: 'paragraph', text: 'After the medical assessment, a revalidação, emissão, troca de carta estrangeira or pedido especial is submitted via IMT/IMTonline, a balcão IMT or Espaço Cidadão, if the service is available. IMT transfers the restrictions into campo 12 of the new carta de condução.' }
          ] }
        ] }
      ]
    },
    {
      id: 'codes',
      title: 'Main restriction and adaptation codes',
      content: [
        { kind: 'paragraph', text: 'Portugal uses harmonised European restriction codes. On the licence they appear as numbers, sometimes with subcodes. What matters is not the translation, but the exact match between the vehicle and the driver’s behaviour and those codes.' },
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
          '42 — adapted mirrors or visibility.',
          '43 — adapted driver’s seat.',
          '44 — motorcycle adaptations.',
          '50 — entitlement valid only for a specific vehicle or VIN/chassis number.',
          '61–69 — driving-condition restrictions: daytime only, within a radius from home, no passengers, speed restriction, with an accompanying person, no trailer, no motorways, zero alcohol, alcohol interlock.'
        ] },
        { kind: 'warning', text: 'Code 78 “automatic transmission only” is not a medical code, but it often overlaps with adapted driving. If the B test was taken in an automatic car, the licence may show 78; to remove it, an exam/procedure in a manual car is required under IMT rules.' }
      ]
    },
    {
      id: 'amim',
      title: 'Route for AMIM holders',
      content: [
        { kind: 'paragraph', text: 'AMIM — Atestado Médico de Incapacidade Multiuso — confirms the percentage of incapacidade for tax, social and other purposes. For a driving licence it is useful, but it is not an automatic authorisation or ban on driving. The decision on a carta condicionada is made by the doctor for the carta de condução and/or the junta médica IMT.' },
        { kind: 'checklist', items: [
          'If you already have AMIM: show it to the doctor when arranging the atestado médico eletrónico.',
          'If the AMIM records motor, visual, hearing or neurological incapacidade, be prepared for an additional IMT assessment.',
          'If you need an adapted car for training, look for an escola de condução that has a veículo adaptado for your restrictions.',
          'If the adaptations are non-standard, ask the installer in advance for a declaração técnica and homologação/inspeção documents, if applicable.',
          'If the licence is foreign and already has restrictions, bring the original and, if necessary, a translation: IMT must understand which restrictions to transfer.',
          'If the condition is progressive, the licence validity period may be shortened: for example, not until the usual revalidação age, but for the period set by the doctor.'
        ] },
        { kind: 'paragraph', text: 'INR publishes reference information on the rights of people with disabilities, AMIM and support. The practical decision on fitness to drive still remains within the IMT system and the medical assessment for condução.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practicalities: how not to get stuck in bureaucracy',
      content: [
        { kind: 'checklist', items: [
          'Do not buy an adapted vehicle before the medical assessment: first you need the codes, then the equipment matching those codes.',
          'Ask the doctor to state restrictions as specifically as possible; vague wording often leads to a junta médica and delays.',
          'For exchanging foreign licences, start the process in advance: medical restrictions almost always increase processing time.',
          'Keep copies of AMIM, relatórios médicos, comprovativo do atestado eletrónico and correspondence with IMT.',
          'Before the test in an adapted car, make sure the escola de condução has agreed the vehicle with IMT.',
          'After receiving the new carta, check campo 12 immediately: correcting an incorrect code takes time.',
          'If the condition has improved and the restriction is no longer needed, the code can be removed only through a new medical assessment and an IMT decision.',
          'If the condition has worsened, do not wait for renewal: it is safer to request a medical reassessment before an accident or roadside check.'
        ] },
        { kind: 'warning', text: 'In Portugal, a doctor may declare someone “inapto” to drive if the risk to the driver and third parties is high. In this case, IMT may refuse to issue or may suspend the driving entitlement until a new assessment.' }
      ]
    }
  ],
  costs: [
    { label: 'Issuing or renewing a carta de condução at IMT', amountEUR: 30, note: 'Standard IMT fee; through IMTonline a 10% discount usually applies, meaning €27.' },
    { label: 'IMT fee for drivers aged 70 and over', amountEUR: 15, note: 'For revalidação after age 70, a reduced rate applies; online may be cheaper if a discount is available.' },
    { label: 'Private medical examination for the atestado', amountEURMin: 25, amountEURMax: 80, note: 'Private-clinic market; in the SNS it may be cheaper, but it depends on the Centro de Saúde and doctor availability.' },
    { label: 'AMIM through a junta médica de avaliação de incapacidade', amountEUR: 12.5, note: 'Usual fee for the first incapacidade assessment; urgency and reassessment depend on SNS/ULS rules.' }
  ],
  sources: [
    {
      title: 'IMT — Carta de condução, revalidação, troca and medical requirements',
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
      title: 'Diretiva 2006/126/CE — European driving-licence categories and codes',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32006L0126',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
