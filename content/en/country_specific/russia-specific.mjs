export default {
  editorialVoice: 'hackportugal',
  id: 'russia-specific',
  categoryId: 'country_specific',
  title: 'Moving from Russia — specific considerations',
  tldr: 'Russians: EU sanctions have made the banking side more difficult, but moving is possible. Schengen tourist visas are generally not issued (except in humanitarian cases). D visas are issued. The Portuguese Consulate in Moscow is operating, but with a 2–4 month appointment queue. Important: Visa/Mastercard cards issued by Russian banks do NOT work outside the Russian Federation (since 2022 — Visa/MC left the Russian Federation). UnionPay is accepted partially at some terminals. Many major Russian banks (Sber, VTB, Alfa, Gazprombank, Tinkoff/T-Bank and others) are under EU/SDN sanctions; funds originating from them require enhanced proof of source of funds and may be blocked by a Portuguese bank. Open a Portuguese bank account before arrival or immediately afterwards.',
  audience: { countryCodes: ['RU'] },
  tags: ['russia', 'sanctions', 'visas'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'visas-2026',
      title: 'Visas 2026',
      content: [
        { kind: 'checklist', items: [
          '❌ Schengen tourist visas (C) — the EU suspended the visa facilitation agreement with the Russian Federation in September 2022; visa fee €90; issuance is case-by-case',
          '✅ D visas (D2/D3/D4/D7/D8) — issued, process as for other third countries',
          '✅ Family reunification — works',
          '✅ CPLP mobility does not apply (Russia is not part of the community of Portuguese-speaking countries). An option only if you have a second citizenship of a CPLP country',
          '✅ Student D4 — issued, popular',
          'Portuguese Consulate in Moscow: Rua Fadeyeva 11 — operating as usual, appointment queue 2–4 months'
        ]}
      ]
    },
    {
      id: 'embassy-update-2026-04',
      title: 'Simplified submission for D4 / E9 / E6 (17 April 2026)',
      content: [
        { kind: 'paragraph', text: 'On 17 April 2026 the Portuguese Embassy in Moscow published a notice titled "Visa applications — Students and AIMA appointment registration" announcing a simplified document submission procedure for three applicant categories.' },
        { kind: 'checklist', items: [
          '✅ D4 — national study visa (bachelor\'s, master\'s, doctoral, long-term language courses)',
          '✅ E9 — visa for Erasmus Mundus programme participants',
          '✅ E6 — visa for applicants who subsequently need to deal with AIMA on residency matters (e.g. permit renewal, family reunification). NOT investment programmes — Golden Visa and D2 go through separate tracks'
        ]},
        { kind: 'warning', text: 'Exact wording from the embassy: "in order to simplify the document submission procedure". The embassy does NOT explicitly say "walk-in" — the notice describes a priority/simplified submission. Check the current requirements on the embassy and BLS websites before visiting.' },
        { kind: 'paragraph', text: 'BLS Visa Centre in Moscow (Kosmodamianskaya naberezhnaya 52/7): applications accepted 09:00–15:00 (Mon–Fri), passport pickup and consultations 15:00–16:00. Phone: +7 (499) 110 63 76, email: info.portugal@blshelpline.com.' },
        { kind: 'warning', text: 'Simplified submission procedure does NOT mean a simplified document package. All standard requirements remain (university acceptance, proof of funds, accommodation, health insurance, apostilled criminal record certificate). See the "Visa D4 (student)" guide for full details.' }
      ]
    },
    {
      id: 'banking',
      title: 'Banking nuances',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Russian cards do NOT work in Portugal', content: [
            { kind: 'paragraph', text: 'Visa/Mastercard issued in the Russian Federation have been blocked outside the Russian Federation since March 2022. UnionPay from Russian banks works, but is not accepted everywhere in Portugal.' }
          ]},
          { id: 'b2', title: 'Transferring money to Portugal', content: [
            { kind: 'checklist', items: [
              'Cash across the border — limit €10,000 (declaration), still applies',
              'Wise, Revolut — open in a country where this is permitted (Kazakhstan, Serbia, Armenia and others)',
              'Cryptocurrency — USDT/USDC → withdrawal to Revolut/N26/Portuguese bank',
              'Buying gold in the Russian Federation → selling in Portugal (works, but inefficient)',
              'Transfer via relatives in non-sanctioned countries'
            ]}
          ]},
          { id: 'b3', title: 'Open a Portuguese bank account', content: [
            { kind: 'paragraph', text: 'ActivoBank, Millennium, Caixa — accept Russians with a valid visa/residence permit and a Portuguese address. Required: passport, NIF, proof of address in Portugal, proof of source of income.' },
            { kind: 'warning', text: 'Some banks (Santander, BPI) may refuse due to AML requirements. Try several.' }
          ]}
        ]}
      ]
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa for Russians',
      content: [
        { kind: 'paragraph', text: 'Golden Visa is formally available, but with stricter AML checks for citizens of the Russian Federation. Legal support is required. Timeline — 12–24 months.' },
        { kind: 'warning', text: 'Many major Russian banks are on EU/OFAC sanctions lists: Sber, VTB, Alfa, Gazprombank, PSB, Rosselkhozbank, Tinkoff/T-Bank (since 2023), Sovcombank and others. A Portuguese bank may refuse to accept money from these banks or may block it. Before transferring — check the current list and source-of-funds requirements with the receiving bank. Raiffeisen Russia is still operating for now, but it is also under special scrutiny. Prepare detailed proof of source of funds (declarations, tax documents, contracts).' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents from the Russian Federation',
      content: [
        { kind: 'checklist', items: [
          'Criminal record certificate — through the Ministry of Internal Affairs or Gosuslugi. Timeline 14–30 days',
          'Apostille — regional Ministry of Justice. 2–4 weeks. Validity of certificate + apostille = 3–6 months',
          'Civil registry certificates — duplicates + apostille. 1–3 months',
          'Diplomas — Rosobrnadzor + Ministry of Justice apostille',
          'Notarial powers of attorney for relatives in the Russian Federation — at the Portuguese Consulate in Moscow',
          '⚠️ All translations — sworn (sworn translation with apostille)'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'After arrival',
      content: [
        { kind: 'checklist', items: [
          'NIF → opening an account → rental',
          'Mobile: buy a Portuguese SIM card (MEO/NOS/Vodafone) immediately',
          'Deregistration in the Russian Federation: remotely via Gosuslugi + consulate',
          'Sole trader in the Russian Federation — close in advance if you do not plan to operate it',
          'Tax residence: after 183 days in Portugal — Portuguese resident. Declare in both (Portugal + Russian Federation) in the first year',
          'Certificate of residence from the Russian Federation — needed to avoid double taxation'
        ]}
      ]
    },
    {
      id: 'community',
      title: 'Russian-speaking community',
      content: [
        { kind: 'checklist', items: [
          'Russian school (for children): Carlos Freixo (Oeiras)',
          'Russian Orthodox Church — Lisboa (Rua Maria Pia)',
          'Embassy of the Russian Federation — Rua Visconde de Santarém, 57, 1000-286 Lisboa (+351 21 846 4417)',
          'Cultural society “Russian House” (Casa da Rússia) — events, Russian language courses',
          'Private clinics with Russian-speaking doctors — Cuf, Luz (ask)',
          'Retail: “Magnit”, “Matryoshka” — CIS products in Lisboa'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portuguese Embassy in Moscow', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'Announcement of 17.04.2026 — visa applications D4/E9/E6', url: 'https://moscovo.embaixadaportugal.mne.gov.pt/ru/', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'BLS Portugal Russia — contact and hours', url: 'https://blsportugalrussia.ru/russian/contact.php', kind: 'official', language: 'ru', lastRetrieved: '2026-05-13' },
    { title: 'AIMA — official website', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Vistos MNE — D visas', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco de Portugal — compensation and AML', url: 'https://www.bportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-13',
  verifyIntervalDays: 90
}
