export default {
  editorialVoice: 'hackportugal',
  id: 'cam-motorista-imt',
  categoryId: 'driving_license',
  title: 'CAM — mandatory certificate for professional lorry or bus drivers',
  tldr: 'CAM — Certificado de Aptidão de Motorista, the Portuguese professional qualification for C/C1/CE and D/D1/DE drivers when carrying goods or passengers is their job. In 2026, the standard route is: driving licence for the required category + 140-hour formação inicial acelerada at an IMT-recognised school, exam, and issuance of CQM/code 95. Every 5 years you need 35-hour formação contínua. Without CAM/CQM, a commercial journey can end in a fine and problems for the employer.',
  tags: ['cam', 'imt', 'lorry', 'bus'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-cam',
      title: 'What CAM is and who needs it',
      content: [
        { kind: 'paragraph', text: 'CAM is not an ordinary driving licence. It is a professional driver qualification for carrying goods and passengers under Decreto-Lei 126/2009, as currently amended.\n\nIn practice, the employer and fiscalização check whether the driver has a valid qualification: CAM/CQM or a código 95 entry linked to categories C or D.' },
        { kind: 'checklist', items: ['Required for professional driving in categories C1, C1E, C, CE — goods transport.', 'Required for professional driving in categories D1, D1E, D, DE — passenger transport.', 'Required both for employed drivers and for self-employed drivers if the transport is a commercial activity.', 'Required for foreigners on the same terms as for Portuguese citizens.', 'Usually required already at recruitment: the company will not send a driver out on a route without a valid qualification.', 'Valid for 5 years; renewal is done through 35-hour formação contínua.', 'CAM does not replace a driving licence: you must first have category C/D or be in the process of obtaining it.' ] },
        { kind: 'warning', text: 'If you only have a category B licence, CAM does not give you the right to drive a lorry or bus. You first need the relevant category C/CE or D/DE on your driving licence.' }
      ]
    },
    {
      id: 'exemptions',
      title: 'When CAM is not required',
      content: [
        { kind: 'paragraph', text: 'The law provides exemptions. These matter when relocating: not every instance of driving a heavy vehicle automatically requires CAM, but commercial transport almost always does.' },
        { kind: 'checklist', items: ['Vehicles with a maximum speed of up to 45 km/h.', 'Vehicles of the armed forces, security forces, bombeiros, proteção civil and emergency services — within the scope of their duties.', 'Vehicles undergoing road testing, repair, inspection, technical development or maintenance.', 'Training driving to obtain a driving category or CAM itself.', 'Non-commercial transport of passengers or goods for personal purposes.', 'Transport of materials, equipment or tools that the driver uses in their main job, if driving itself is not the main activity.', 'Some agricultural and local operations — only if they fit a specific legal exemption.' ] },
        { kind: 'warning', text: 'The phrase “I am carrying my own tools” will not protect you if, in reality, you work as a delivery driver, a courier in a heavy vehicle, or carry out regular commercial journeys. In borderline cases, ask the employer or escola de condução/entidade formadora for written confirmation.' }
      ]
    },
    {
      id: 'requirements-before-course',
      title: 'What to prepare before the course',
      content: [
        { kind: 'paragraph', text: 'CAM is obtained through training with entidades formadoras recognised by IMT. Before enrolling, check not only the price, but also whether the school is authorised to provide the specific formação inicial/contínua CAM for the required group: mercadorias or passageiros.' },
        { kind: 'checklist', items: ['Driving licence with the required category or a confirmed process to obtain category C/C1/CE or D/D1/DE.', 'Identity document: Cartão de Cidadão, residence permit, passport with valid status, or another accepted document.', 'NIF — usually needed for the contract, invoice and registration in the school system.', 'Portuguese address and contact details: email, phone, sometimes comprovativo de morada.', 'Medical fitness for heavy categories — through a médico, if you are also opening/renewing C or D.', 'Psychological avaliação psicológica — often required for group 2 and professional driving.', 'Understanding of Portuguese: training and tests are usually in PT; check the language of the materials in advance.', 'If the licence is not Portuguese: check whether it is recognised in Portugal and whether you can work with it, or first do a troca de carta at IMT.' ] },
        { kind: 'warning', text: 'For citizens of non-EU countries, having an old professional card from your own country does not mean automatic CAM in Portugal. The employer may specifically ask for Portuguese CQM/código 95 or a recognised EU qualification.' }
      ]
    },
    {
      id: 'initial-qualification',
      title: 'Initial qualification: 140-hour formação inicial',
      content: [
        { kind: 'paragraph', text: 'For most adult drivers, formação inicial acelerada — 140 hours — is used. Full formação inicial comum of 280 hours exists in the system, but the 140-hour accelerated route is more common on the market. The course covers safety, economical driving, tachograph, work and rest rules, loading, passenger safety, carrier liability and behaviour in accidents.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: '1. Choose a school recognised by IMT', content: [
            { kind: 'paragraph', text: 'Look for an escola de condução or centro de formação that explicitly mentions “CAM mercadorias”, “CAM passageiros”, “formação inicial acelerada” and “entidade certificada/reconhecida pelo IMT”.' }
          ] },
          { id: 'complete-140h', title: '2. Complete 140 hours of training', content: [
            { kind: 'paragraph', text: 'Schedules may be daytime, evening or intensive. In practice, allow 3 to 8 weeks, depending on the timetable and your availability.' }
          ] },
          { id: 'imt-exam', title: '3. Pass the avaliação/exame', content: [
            { kind: 'paragraph', text: 'After the course, the school sends you for assessment under IMT rules. Ask the school whether exam registration is included in the price and how much a resit costs.' }
          ] },
          { id: 'request-cqm', title: '4. Obtain CQM or código 95', content: [
            { kind: 'paragraph', text: 'After successful completion, the qualification is recorded in the IMT system. The driver needs a document/entry confirming the professional qualification: Carta de Qualificação de Motorista (CQM) or the corresponding código 95, if it applies to your situation.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not start working “while the card is being processed” unless the employer has confirmed that going out on the road is lawful. During an inspection, what matters is not just the school diploma, but a valid qualification recognised by IMT.' }
      ]
    },
    {
      id: 'renewal',
      title: 'Renewal every 5 years: 35-hour formação contínua',
      content: [
        { kind: 'paragraph', text: 'CAM/CQM is valid for 5 years. To renew it, you must complete 35 hours of formação contínua before expiry. This is not a full repeat of the 140-hour course: the aim is to update knowledge on safety, regulations, tachograph, eco-driving and legislative changes.' },
        { kind: 'checklist', items: ['Check the expiry date of CQM/código 95 at least 6 months before it ends.', 'Enrol for 35-hour formação contínua at an entidade formadora recognised by IMT.', 'Check whether the course relates to mercadorias, passageiros or covers both qualifications.', 'After the course, the school sends the data/documents to update the qualification.', 'Keep the comprovativo de frequência and recibo until you receive the updated document.', 'If the deadline has already expired, do not carry out professional journeys until the qualification has been restored.', 'When changing employer, provide a copy of your valid CQM/código 95 and licence.' ] },
        { kind: 'warning', text: 'An expired CAM/CQM effectively means you do not have a professional qualification. This is a separate risk from an expired carta de condução: the licence may still be valid, but you still cannot work commercially as a C/D driver.' }
      ]
    },
    {
      id: 'expat-specific',
      title: 'Specific points for foreigners and relocating to Portugal',
      content: [
        { kind: 'paragraph', text: 'If you have already worked as a driver in another EU country and have a valid código 95 or driver qualification card, first show the documents to the employer and to IMT/the school. EU qualifications are usually recognised until expiry, but renewing them in Portugal must be done under local rules through 35-hour formação contínua if you live and work here.' },
        { kind: 'checklist', items: ['EU licences: check the validity of categories C/D and código 95; if you are resident in Portugal, registration/exchange rules may apply.', 'Non-EU licences: first sort out troca de carta at IMT; without a recognised C/D category, CAM will not help on its own.', 'Residence permit: to work as a driver, you need legal status with the right to work; CAM does not legalise your stay.', 'NISS and employment contract: needed for the employer and Segurança Social, but they do not replace CAM.', 'ADR, tacógrafo, cartão de condutor: these are separate documents. For dangerous goods, ADR is required in addition to CAM.', 'Passenger transport: the company may require additional checks, a clean criminal record or internal training.', 'Language: even if the instructor speaks English or Russian, official materials and interaction with IMT are usually in Portuguese.' ] },
        { kind: 'warning', text: 'Beware of adverts offering “CAM in 2 days” or “without exam”. For initial qualification, 140 hours is a real requirement; a fake certificate can cost you your job, fines and problems during future IMT/ACT inspections.' }
      ]
    }
  ],
  costs: [
    { label: 'Formação inicial acelerada CAM 140 hours', amountEURMin: 450, amountEURMax: 900, note: 'Market range across schools; depends on mercadorias/passageiros, region, schedule and whether the exam/administrative fees are included.' },
    { label: 'Formação contínua CAM 35 hours', amountEURMin: 120, amountEURMax: 300, note: 'Typical range for 5-year renewal; check whether the school sends the data to IMT and whether documents are included.' },
    { label: 'Additional driver documents', amountEURMin: 30, amountEURMax: 150, note: 'Medical certificate, psychological assessment, cartão de condutor/tacógrafo or exam resits may be charged separately.' }
  ],
  sources: [
    { title: 'IMT: CAM — Certificado de Aptidão de Motorista', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/CAM/Paginas/CAM.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 126/2009 — initial qualification and formação contínua for drivers', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34508075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: Carta de Qualificação de Motorista / professional categories', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Cidadao/Cartas-Conducao/Paginas/CartasConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
