export default {
  editorialVoice: 'hackportugal',
  id: 'imt-theory-practice-exam',
  categoryId: 'driving_license',
  title: 'Getting a licence from scratch — IMT theory and practical exams',
  tldr: 'If you do not have a valid driving licence or your country’s licence cannot be exchanged without an exam (Russian Federation, BY and others without a bilateral agreement) — you need to take exams in Portugal. Through a driving school (escola de condução): 32 hours of theory + 32 hours of practice (category B), driving school fee €600–1,200 + €70 IMT state fee. Theory is taken at IMT, practice — in a learner car. The test is IN PORTUGUESE — an English version became routinely available from 2024.',
  tags: ['licence', 'imt', 'exam', 'theory', 'driving school', 'category b'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'who',
      title: '👤 Who needs this',
      content: [
        { kind: 'paragraph', text: 'Taking the full exams (not an exchange) is required if:' },
        { kind: 'checklist', items: [
          '🚫 You do not have a driving licence, or it expired more than 5 years ago',
          '🚫 Your country — Russian Federation, Belarus, Turkmenistan and others — has NO bilateral agreement with Portugal',
          '🚫 You have lived in Portugal for a long time (>2 years) and did not arrange the exchange within the deadline',
          '🚫 You want to add a new category (motorcycle A, lorry C, bus D)',
          '✅ Alternative for EU/CPLP/UA/KZ/MD/RS/CN: see the “Licence exchange” guide'
        ]}
      ]
    },
    {
      id: 'choose-school',
      title: '🏫 Step 1. Choose a driving school',
      content: [
        { kind: 'paragraph', text: 'You cannot train at IMT — training must be done through a certified driving school (escola de condução).' },
        { kind: 'checklist', items: [
          '📜 List of schools — on anec.pt (Associação Nacional de Escolas de Condução)',
          '💰 Prices: category B — €600–1,200 (Lisboa/Porto are more expensive), €350–600 in smaller towns',
          '🌐 English: some schools in Lisboa/Porto/Algarve teach in English (check when booking)',
          '🇷🇺 Russian: 1–2 schools in Lisboa/Cascais (you can ask for recommendations in the “Russians in Portugal” FB group)',
          '📚 The theory and practical instructor may be the same person or different people',
          '⏱️ Duration: usually 2–3 months from starting to the exam'
        ]}
      ]
    },
    {
      id: 'theory',
      title: '📖 Step 2. Theory — 32 hours + exam',
      content: [
        { kind: 'paragraph', text: 'The theory course is mandatory — 32 hours of lessons + self-study at home. Without it, you will not be admitted to the exam.' },
        { kind: 'substeps', items: [
          { id: 't1', title: 'What you study', content: [
            { kind: 'checklist', items: [
              '🛑 Road traffic rules (Código da Estrada)',
              '🚦 Signs and road markings',
              '🚙 Vehicle mechanics (basic knowledge)',
              '🚑 First aid, accidents, emergency situations',
              '⚖️ Driver responsibility, fines, insurance'
            ]}
          ]},
          { id: 't2', title: 'Theory exam', content: [
            { kind: 'checklist', items: [
              '📍 Taken at IMT (centres in Lisboa, Porto, Faro, Coimbra and others)',
              '🖥️ On a computer, 30 multiple-choice questions',
              '✅ Pass mark — at least 27/30',
              '⏱️ 30 minutes for the test',
              '🌐 Language: Portuguese (by default), English (available from 2024 in most centres)',
              '💰 IMT fee: €28',
              '🔁 If you fail: retake after 3 weeks, fee €28',
              '📚 The question bank is open — before the exam, practise tests via test-codigodaestrada.pt or apps'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'practice',
      title: '🚗 Step 3. Practice — 32 hours + exam',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Practical lessons', content: [
            { kind: 'checklist', items: [
              '⏱️ 32 hours of mandatory training with an instructor',
              '🚙 In a learner car (with dual controls)',
              '🛣️ City traffic, parking, U-turns, motorways',
              '⛰️ Includes mandatory situations: night driving, rain, narrow roads'
            ]}
          ]},
          { id: 'p2', title: 'Practical exam', content: [
            { kind: 'checklist', items: [
              '👮 The exam is conducted by an IMT examiner (not the driving school instructor)',
              '⏱️ 30–45 minutes of driving',
              '🛑 They assess: parking, junctions, motorway, urban driving',
              '✅ Result: “Apto” (passed) or “Inapto” (failed)',
              '🔁 If you fail: new booking (1–2 weeks), extra exam payment (~€50), often — a few more lessons',
              '💰 IMT fee: €42',
              '🇬🇧 The examiner usually does NOT speak English — the school arranges an examiner if English is needed'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: '🪪 After passing',
      content: [
        { kind: 'checklist', items: [
          '⏱️ Temporary permit “título de condução provisório” — 1–2 weeks, you can drive with it',
          '🪪 Permanent card — 30–90 days by post',
          '🚦 First 3 years: “new driver” — maximum speed on motorways is 90 km/h (instead of 120)',
          '🚦 First 3 years: alcohol limit 0.2‰ instead of 0.5‰, fine is doubled',
          '⚠️ In the first 3 years, 1 serious accident = licence revocation; 2 fines = retake',
          '🔄 Licence validity: 15 years until age 50; 5 years from 50–65; 2 years 65+',
          '🌍 Valid automatically in the EU, in other countries — IDP (International Driving Permit), if required'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📲 Apps for studying theory: Tabela B (PT), Conduzir.pt, Hércules',
          '🎥 YouTube “Escola Online” — theory with examples',
          '🚗 Before the exam — 4–5 lessons with different instructors for a variety of routes',
          '🕐 Morning exam slots are less stressful (after lunch, examiners get tired)',
          '⛰️ In Lisboa, practice is on hills — learn to start on a slope',
          '☔ Practice in rain is mandatory, otherwise the examiner may schedule a rainy day',
          '👨‍🏫 If the instructor is bad — change them (do not be afraid, this is normal)',
          '💰 Budget reserve for a retake: +€200 (≈10% of people retake the practical)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Driving school, category B', amountEURMin: 600, amountEURMax: 1200 },
    { label: 'IMT theory exam', amountEUR: 28 },
    { label: 'IMT practical exam', amountEUR: 42 },
    { label: 'Card production', amountEUR: 30 },
    { label: 'Additional practical hour (retake)', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Minimum total', amountEURMin: 700, amountEURMax: 1500 }
  ],
  timelineDaysMin: 60,
  timelineDaysMax: 120,
  sources: [
    { title: 'IMT — Instituto da Mobilidade e dos Transportes', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ANEC — Association of Driving Schools in Portugal', url: 'https://www.anec.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código da Estrada — DRE', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1994-34488475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
