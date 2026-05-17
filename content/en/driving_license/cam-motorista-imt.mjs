export default {
  editorialVoice: 'hackportugal',
  id: 'cam-motorista-imt',
  categoryId: 'driving_license',
  title: 'CAM — mandatory professional certificate for lorry or bus drivers',
  tldr: 'CAM — Certificado de Aptidão de Motorista, the Portuguese professional qualification for C/C1/CE and D/D1/DE drivers if transporting goods or passengers is their job. In 2026 the standard route is: driving licence for the required category + formação inicial acelerada 140 h at a school recognised by IMT, exam and issuance of CQM/code 95. Every 5 years you need formação contínua 35 h. Without CAM/CQM, a commercial journey may end in a fine and problems for the employer.',
  tags: ['cam', 'imt', 'lorry', 'bus'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cam',
      title: 'What CAM is and who needs it',
      content: [
        { kind: 'paragraph', text: 'CAM is not an ordinary driving licence. It is a professional driver qualification for transporting goods and passengers under Decreto-Lei 126/2009 as currently amended. In practice, the employer and fiscalização check whether the driver has a valid qualification: CAM/CQM or a código 95 entry linked to categories C or D.' },
        { kind: 'checklist', items: ['Required for professional driving in categories C1, C1E, C, CE — goods transport.', 'Required for professional driving in categories D1, D1E, D, DE — passenger transport.', 'Required for both employed drivers and self-employed drivers if the transport is a commercial activity.', 'Required for foreigners under the same conditions as Portuguese citizens.', 'Usually required already at the hiring stage: the company will not send a driver on a journey without a valid qualification.', 'Valid for 5 years; renewal is done through formação contínua 35 h.', 'CAM does not replace a driving licence: you must first have category C/D or be in the process of obtaining it.' ] },
        { kind: 'warning', text: 'If you only have a category B licence, CAM does not give you the right to drive a lorry or bus. You first need the corresponding category C/CE or D/DE on your driving licence.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'When CAM is not required',
      content: [
        { kind: 'paragraph', text: 'The law provides exemptions. They matter when moving country: not every instance of driving a heavy vehicle automatically requires CAM, but commercial transport almost always does.' },
        { kind: 'checklist', items: ['Vehicles with a maximum speed of up to 45 km/h.', 'Vehicles of the armed forces, security forces, bombeiros, proteção civil and emergency services — within the scope of their duties.', 'Vehicles undergoing road tests, repairs, inspections, technical development or maintenance.', 'Training driving to obtain a driving category or CAM itself.', 'Non-commercial transport of passengers or goods for personal purposes.', 'Transport of materials, equipment or tools that the driver uses in their main work, if driving itself is not the main activity.', 'Some agricultural and local operations — only if they fall under a specific legal exemption.' ] },
        { kind: 'warning', text: 'The phrase “I am carrying my own tools” will not help if in reality you work as a delivery driver, a courier in a heavy vehicle or carry out regular commercial journeys. In disputed cases, ask the employer or escola de condução/entidade formadora for written confirmation.' }
      ]
    },
    {
      id: 'requirements-before-course',
      title: 'What to prepare before the course',
      content: [
        { kind: 'paragraph', text: 'CAM is obtained through training with entidades formadoras recognised by IMT. Before enrolling, check not only the price but also whether the school is authorised to provide exactly formação inicial/contínua CAM for the required group: mercadorias or passageiros.' },
        { kind: 'checklist', items: ['Driving licence with the required category, or a confirmed process for obtaining category C/C1/CE or D/D1/DE.', 'Identity document: Cartão de Cidadão, residence permit, passport with valid status or another accepted document.', 'NIF — usually needed for the contract, invoice and registration in the school system.', 'Portuguese address and contact details: email, telephone, sometimes comprovativo de morada.', 'Medical fitness for heavy categories — through a médico if you are opening/renewing C or D at the same time.', 'Psychological avaliação psicológica — often required for group 2 and professional driving.', 'Understanding of Portuguese: training and tests are usually in PT; check the language of materials in advance.', 'If the licence is not Portuguese: check whether it is recognised in Portugal and whether you can work with it, or first do troca de carta at IMT.' ] },
        { kind: 'warning', text: 'For citizens of non-EU countries, having an old professional card from your own country does not mean automatic CAM in Portugal. The employer may ask specifically for a Portuguese CQM/código 95 or a recognised EU qualification.' }
      ]
    },
    {
      id: 'initial-qualification',
      title: 'First-time qualification: formação inicial 140 h',
      content: [
        { kind: 'paragraph', text: 'For most adult drivers, formação inicial acelerada — 140 hours — is used. The full formação inicial comum of 280 hours exists in the system, but the accelerated 140 h route is more common on the market. The course covers safety, economical driving, tachograph, working and rest-time rules, loading, passenger safety, carrier liability and behaviour in accidents.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: '1. Choose a school recognised by IMT', content: [
            { kind: 'paragraph', text: 'Look for an escola de condução or centro de formação that explicitly mentions “CAM mercadorias”, “CAM passageiros”, “formação inicial acelerada” and “entidade certificada/reconhecida pelo IMT”.' }
          ] },
          { id: 'complete-140h', title: '2. Complete 140 hours of training', content: [
            { kind: 'paragraph', text: 'Schedules may be daytime, evening or intensive. Realistically allow 3 to 8 weeks, depending on the timetable and your availability.' }
          ] },
          { id: 'imt-exam', title: '3. Pass the avaliação/exame', content: [
            { kind: 'paragraph', text: 'After the course, the school refers you for assessment under IMT rules. Check with the school whether exam registration is included in the price and how much a resit costs.' }
          ] },
          { id: 'request-cqm', title: '4. Obtain CQM or código 95', content: [
            { kind: 'paragraph', text: 'After successful completion, the qualification is registered in the IMT system. The driver needs a document/entry confirming the professional qualification: Carta de Qualificação de Motorista (CQM) or the corresponding código 95, if it applies to your situation.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not start working “while the card is being processed” unless the employer has confirmed that going on the road is lawful. During an inspection, what matters is not only the school certificate, but a valid qualification recognised by IMT.' }
      ]
    },
    {
      id: 'renewal',
      title: 'Renewal every 5 years: formação contínua 35 h',
      content: [
        { kind: 'paragraph', text: 'CAM/CQM is valid for 5 years. To renew, you need to complete formação contínua 35 hours before it expires. This is not a full repeat of the 140 h course: the aim is to update knowledge on safety, regulations, tachograph, eco-driving and legislative changes.' },
        { kind: 'checklist', items: ['Check the expiry date of CQM/código 95 at least 6 months before it ends.', 'Enrol for formação contínua 35 h with an entidade formadora recognised by IMT.', 'Check whether the course relates to mercadorias, passageiros or covers both qualifications.', 'After the course, the school sends the data/documents to update the qualification.', 'Keep the comprovativo de frequência and recibo until you receive the updated document.', 'If the qualification has already expired, do not carry out professional journeys until it has been restored.', 'When changing employer, provide a copy of the valid CQM/código 95 and driving licence.' ] },
        { kind: 'warning', text: 'An expired CAM/CQM effectively means there is no professional qualification. This is a separate risk from an expired carta de condução: the licence may still be valid, but you still cannot work commercially as a C/D driver.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Specific points for foreigners and moving to Portugal',
      content: [
        { kind: 'paragraph', text: 'If you have already worked as a driver in another EU country and have a valid código 95 or driver qualification card, first show the documents to the employer and IMT/school. EU qualifications are usually recognised until they expire, but if you live and work here they must be renewed in Portugal under local rules through 35 h formação contínua.' },
        { kind: 'checklist', items: ['EU licence: check the validity of categories C/D and código 95; if resident in Portugal, registration/exchange rules may apply.', 'Non-EU licence: first sort out troca de carta at IMT; without a recognised C/D category, CAM on its own will not help.', 'Residence permit: to work as a driver you need legal status with the right to work; CAM does not legalise your stay.', 'NISS and employment contract: these are already needed for the employer and Segurança Social, but they do not replace CAM.', 'ADR, tacógrafo, cartão de condutor: these are separate documents. For dangerous goods, ADR is needed in addition to CAM.', 'Passenger transport: the company may require additional checks, a clean criminal record or internal training.', 'Language: even if the instructor speaks English or Russian, official materials and interaction with IMT are usually in Portuguese.' ] },
        { kind: 'warning', text: 'Beware of adverts offering “CAM in 2 days” or “no exam”. For initial qualification, 140 h is a real requirement; a fake certificate can cost you your job, fines and problems during future IMT/ACT inspections.' }
      ]
    }
  ],
  costs: [
    { label: 'Formação inicial acelerada CAM 140 h', amountEURMin: 450, amountEURMax: 900, note: 'Market range across schools; depends on mercadorias/passageiros, region, schedule and whether the exam/administrative fees are included.' },
    { label: 'Formação contínua CAM 35 h', amountEURMin: 120, amountEURMax: 300, note: 'Typical range for a 5-year renewal; check whether the school sends the data to IMT and whether documents are included.' },
    { label: 'Additional driver documents', amountEURMin: 30, amountEURMax: 150, note: 'Medical certificate, psychological assessment, cartão de condutor/tacógrafo or exam resits may be paid for separately.' }
  ],
  sources: [
    { title: 'IMT: CAM — Certificado de Aptidão de Motorista', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/CAM/Paginas/CAM.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 126/2009 — initial qualification and formação contínua for drivers', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34508075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: Carta de Qualificação de Motorista / professional categories', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/Paginas/CartasConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
